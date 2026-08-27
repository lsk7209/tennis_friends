import JsonLd from "@/components/JsonLd";
import {
  DEFAULT_CONTACT_EMAIL,
  DEFAULT_SITE_DESCRIPTION,
  SITE_NAME,
  getSiteIconUrl,
  getSiteUrl,
} from "@/lib/site";

interface EnhancedBlogPostSchemaProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  dateModified?: string;
  author?: string;
  authorUrl?: string;
  image?: string;
  category?: string;
  readingTime?: string;
  keywords?: string[];
  articleBody?: string;
}

export default function EnhancedBlogPostSchema({
  title,
  description,
  slug,
  date,
  dateModified,
  author = SITE_NAME,
  authorUrl,
  image,
  category = "테니스",
  readingTime,
  keywords = [],
  articleBody,
}: EnhancedBlogPostSchemaProps) {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/blog/${slug}`;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/opengraph-image`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: SITE_NAME,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: getSiteIconUrl(),
      width: 32,
      height: 32,
    },
    description: DEFAULT_SITE_DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: DEFAULT_CONTACT_EMAIL,
    },
  };

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: imageUrl,
    datePublished: date,
    dateModified: dateModified || date,
    author: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: author,
      url: authorUrl || `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: getSiteIconUrl(),
        width: 32,
        height: 32,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: category,
    keywords: keywords.length > 0 ? keywords : [category, "테니스", "테니스 분석"],
    ...(readingTime && { timeRequired: `PT${readingTime.replace(/[^0-9]/g, "")}M` }),
    ...(articleBody && { articleBody }),
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, blogPostSchema],
  };

  return <JsonLd data={combinedSchema} id={`blog-post-schema-${slug}`} />;
}
