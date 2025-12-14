import JsonLd from '@/components/JsonLd';

interface BlogPostSchemaProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  author?: string;
  image?: string;
  category?: string;
  readingTime?: string;
}

export default function BlogPostSchema({
  title,
  description,
  slug,
  date,
  author = 'TennisFriends',
  image,
  category = '테니스',
  readingTime,
}: BlogPostSchemaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfriends.co.kr';
  const url = `${siteUrl}/blog/${slug}`;
  const imageUrl = image 
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`)
    : `${siteUrl}/opengraph-image`;

  // 블로그 포스트 구조화된 데이터
  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      name: author,
      url: siteUrl,
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
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: category,
    keywords: [category, '테니스', '스포츠'],
    ...(readingTime && { timeRequired: `PT${readingTime.replace('분', 'M')}` }),
  };

  // Organization 스키마 (사이트 전체)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TennisFriends',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: '데이터로 똑똑하게, 테니스를 즐겁게. 테니스 실력 향상을 위한 모든 것을 제공합니다.',
    sameAs: [
      // 소셜 미디어 링크가 있다면 추가
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'tennisfriends@tennisfriends.co.kr',
    },
  };

  // BreadcrumbList 스키마
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '블로그',
        item: `${siteUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  // 통합 스키마 (네이버/다음 최적화)
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      blogPostSchema,
      breadcrumbSchema,
    ],
  };

  return <JsonLd data={combinedSchema} />;
}

