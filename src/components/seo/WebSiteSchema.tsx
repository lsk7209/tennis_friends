import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';

interface WebSiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
  searchUrl?: string;
}

/**
 * WebSite 스키마 컴포넌트
 * 검색 엔진과 AI 크롤러가 사이트 구조를 이해하는 데 도움
 */
export default function WebSiteSchema({
  name = 'TennisFriends',
  url,
  description = '데이터로 똑똑하게, 테니스를 즐겁게. 테니스 실력 향상을 위한 모든 것을 제공합니다.',
  searchUrl,
}: WebSiteSchemaProps) {
  const siteUrl = SITE_URL;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: name,
    url: url || siteUrl,
    description: description,
    inLanguage: 'ko-KR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: searchUrl || `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TennisFriends',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
      },
    },
  };

  return <JsonLd data={schema} />;
}

