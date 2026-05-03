import type { Metadata } from "next";
import {
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_SITE_LOCALE,
  SITE_NAME,
  getAbsoluteUrl,
  getSiteUrl,
} from "@/lib/site";

export function truncateForNaver(description: string, maxLength: number = 80): string {
  if (description.length <= maxLength) return description;

  const truncated = description.substring(0, maxLength - 3);
  const lastPeriod = truncated.lastIndexOf(".");
  const lastSpace = truncated.lastIndexOf(" ");
  const cutPoint = lastPeriod > maxLength * 0.7 ? lastPeriod + 1 : lastSpace;

  return cutPoint > 0 ? `${description.substring(0, cutPoint)}...` : `${truncated}...`;
}

export function generateTitle(contentTitle: string, serviceName: string = SITE_NAME): string {
  return `${contentTitle} | ${serviceName}`;
}

export function getCanonicalUrl(path: string): string {
  return getAbsoluteUrl(path);
}

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  image?: string;
  noindex?: boolean;
  alternates?: Metadata["alternates"];
}

export function generatePageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  authors = [SITE_NAME],
  tags = [],
  image,
  noindex = false,
  alternates,
}: PageMetadataOptions): Metadata {
  const fullTitle = generateTitle(title);
  const canonical = getCanonicalUrl(path);
  const siteUrl = getSiteUrl();
  const ogImage = image || `${siteUrl}/opengraph-image`;
  const naverDescription = truncateForNaver(description);
  const googleDescription =
    description.length > 160 ? `${description.substring(0, 157)}...` : description;

  return {
    title: fullTitle,
    description: googleDescription || DEFAULT_SITE_DESCRIPTION,
    keywords: tags.length > 0 ? tags : undefined,
    authors: authors.map((name) => ({ name })),
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(siteUrl),
    alternates: {
      ...alternates,
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description: googleDescription || DEFAULT_SITE_DESCRIPTION,
      url: canonical,
      siteName: SITE_NAME,
      locale: DEFAULT_SITE_LOCALE,
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors.length > 0 && { authors }),
      ...(tags.length > 0 && { tags }),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: googleDescription || DEFAULT_SITE_DESCRIPTION,
      images: [ogImage],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "naver-description": naverDescription,
    },
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const validItems = items.filter((item) => {
    const name = item.name?.trim();
    const url = item.url?.trim();
    return name && url;
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: validItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name.trim(),
      item: item.url.startsWith("http") ? item.url : getCanonicalUrl(item.url),
    })),
  };
}
