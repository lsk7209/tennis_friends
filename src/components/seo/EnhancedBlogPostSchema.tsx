import JsonLd from '@/components/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo/metadata-helpers';

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

/**
 * Enhanced Blog Post Schema with @graph structure for better SEO/AEO
 * 
 * Includes:
 * - BlogPosting schema
 * - Organization schema
 * - BreadcrumbList schema
 * - Person schema (author)
 * 
 * Optimized for Google, Naver, and AI search engines
 */
export default function EnhancedBlogPostSchema({
  title,
  description,
  slug,
  date,
  dateModified,
  author = 'TennisFriends',
  authorUrl,
  image,
  category = '테니스',
  readingTime,
  keywords = [],
  articleBody,
}: EnhancedBlogPostSchemaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com';
  const url = `${siteUrl}/blog/${slug}`;
  const imageUrl = image
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`)
    : `${siteUrl}/opengraph-image`;

  // Organization schema (reusable across site)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TennisFriends',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    description: '데이터로 똑똑하게, 테니스를 즐겁게. 테니스 실력 향상을 위한 모든 것을 제공합니다.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@tennisfrens.com',
    },
    sameAs: [], // Add social media links if available
  };

  // Person schema (author)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author,
    url: authorUrl || siteUrl,
  };

  // BlogPosting schema
  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: date,
    dateModified: dateModified || date,
    author: {
      '@type': 'Person',
      name: author,
      url: authorUrl || siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TennisFriends',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: category,
    keywords: keywords.length > 0 ? keywords : [category, '테니스', '스포츠'],
    ...(readingTime && { timeRequired: `PT${readingTime.replace('분', 'M')}` }),
    ...(articleBody && { articleBody }),
  };

  // BreadcrumbList schema
  // title이 유효한 경우에만 마지막 항목 포함
  const breadcrumbItems = [
    { name: '홈', url: '/' },
    { name: '블로그', url: '/blog' },
  ];

  const validTitle = title?.trim();
  if (validTitle && validTitle.length > 0) {
    breadcrumbItems.push({ name: validTitle, url: `/blog/${slug}` });
  }

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  // Combined schema using @graph (recommended by Google)
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      personSchema,
      blogPostSchema,
      breadcrumbSchema,
    ],
  };

  return <JsonLd data={combinedSchema} id={`blog-post-schema-${slug}`} />;
}

