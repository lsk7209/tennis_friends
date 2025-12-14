/**
 * SEO Metadata Helper Functions
 * 
 * Utilities for generating optimized metadata for Google, Naver, and AI engines
 */

import type { Metadata } from 'next';

const SITE_NAME = 'TennisFriends';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfriends.co.kr';

/**
 * Truncates description for Naver (80 char limit) while preserving context
 */
export function truncateForNaver(description: string, maxLength: number = 80): string {
  if (description.length <= maxLength) return description;
  
  // Try to cut at sentence boundary
  const truncated = description.substring(0, maxLength - 3);
  const lastPeriod = truncated.lastIndexOf('.');
  const lastSpace = truncated.lastIndexOf(' ');
  
  const cutPoint = lastPeriod > maxLength * 0.7 ? lastPeriod + 1 : lastSpace;
  
  return cutPoint > 0 
    ? description.substring(0, cutPoint) + '...'
    : truncated + '...';
}

/**
 * Generates optimized title following "[Content Title] | [Service Name]" pattern
 */
export function generateTitle(contentTitle: string, serviceName: string = SITE_NAME): string {
  return `${contentTitle} | ${serviceName}`;
}

/**
 * Creates canonical URL
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Generates comprehensive metadata for a page
 */
export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  image?: string;
  noindex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['TennisFriends'],
  tags = [],
  image,
  noindex = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = generateTitle(title);
  const canonical = getCanonicalUrl(path);
  const ogImage = image || `${SITE_URL}/opengraph-image`;
  
  // Naver-optimized description (80 chars)
  const naverDescription = truncateForNaver(description);
  
  // Google/AI-optimized description (longer, more context)
  const googleDescription = description.length > 160 
    ? description.substring(0, 157) + '...'
    : description;

  return {
    title: fullTitle,
    description: googleDescription, // Google uses longer description
    keywords: tags.length > 0 ? tags : undefined,
    authors: authors.map(name => ({ name })),
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description: googleDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'ko_KR',
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
      card: 'summary_large_image',
      title: fullTitle,
      description: googleDescription,
      images: [ogImage],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Naver-specific optimization (via other meta tags in layout)
    other: {
      'naver-description': naverDescription, // Will be added to <head> via layout
    },
  };
}

/**
 * Generates FAQ schema data
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates BreadcrumbList schema
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : getCanonicalUrl(item.url),
    })),
  };
}

