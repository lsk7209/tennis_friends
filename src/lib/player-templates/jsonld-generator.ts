/**
 * 선수 페이지 JSON-LD 구조화 데이터 생성
 */

import { Player, PlayerFAQ } from '@/types/player';

/**
 * Person 스키마 생성
 */
export function generatePersonSchema(player: Player) {
  const currentYear = new Date().getFullYear();
  const birthYear = player.birthYear || (player.birthDate ? parseInt(player.birthDate.split('-')[0]) : 2000);
  const age = currentYear - birthYear;
  const nameKo = player.nameKo || player.name;
  const rank = player.rankingCurrent || player.rank || 0;
  const tour = player.tour || (player.gender === 'male' ? 'ATP' : 'WTA');
  const style = player.style || 'All-Court';
  const surface = player.favoriteSurface || 'Hard';

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: player.nameEn,
    alternateName: nameKo,
    nationality: {
      '@type': 'Country',
      name: player.country,
    },
    birthDate: `${birthYear}-01-01`,
    jobTitle: 'Professional Tennis Player',
    memberOf: {
      '@type': 'Organization',
      name: tour,
    },
    knowsAbout: [
      'Tennis',
      getPlayStyleKo(style),
      getSurfaceKo(surface),
    ],
    description: `${nameKo}은(는) ${player.country} 출신의 세계랭킹 ${rank}위 테니스 선수입니다.`,
  };
}

/**
 * ProfilePage 스키마 생성
 */
export function generateProfilePageSchema(player: Player, faqs: PlayerFAQ[]) {
  const nameKo = player.nameKo || player.name;
  const slug = player.slug || '';

  const metadata = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: player.nameEn,
      alternateName: nameKo,
    },
    url: `https://tennisfriends.co.kr/players/${slug}`,
    description: `${nameKo}의 프로필 페이지`,
  };

  // FAQ가 있으면 FAQPage 스키마도 추가
  if (faqs.length > 0) {
    return {
      ...metadata,
      '@graph': [
        metadata,
        {
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
        },
      ],
    };
  }

  return metadata;
}

/**
 * BreadcrumbList 스키마 생성
 */
export function generateBreadcrumbSchema(player: Player) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: 'https://tennisfriends.co.kr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '테니스 선수',
        item: 'https://tennisfriends.co.kr/players',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: player.nameKo || player.name,
        item: `https://tennisfriends.co.kr/players/${player.slug || ''}`,
      },
    ],
  };
}

/**
 * 통합 구조화 데이터 생성
 */
export function generateStructuredData(player: Player, faqs: PlayerFAQ[]) {
  const personSchema = generatePersonSchema(player);
  const profilePageSchema = generateProfilePageSchema(player, faqs);
  const breadcrumbSchema = generateBreadcrumbSchema(player);

  // FAQ가 있으면 FAQPage가 @graph에 포함되어 있음
  if (faqs.length > 0 && '@graph' in profilePageSchema) {
    const profilePageWithGraph = profilePageSchema as any;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        personSchema,
        ...profilePageWithGraph['@graph'],
        breadcrumbSchema,
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      profilePageSchema,
      breadcrumbSchema,
    ],
  };
}

/**
 * 플레이 스타일 한글 변환
 */
function getPlayStyleKo(style: string): string {
  const styleMap: Record<string, string> = {
    aggressive: '공격형',
    'all-court': '전천후',
    'big-server': '빅서버',
    'counter-puncher': '카운터펀처',
    defensive: '수비형',
    baseliner: '베이스라인',
  };
  return styleMap[style] || style;
}

/**
 * 코트 타입 한글 변환
 */
function getSurfaceKo(surface: string): string {
  const surfaceMap: Record<string, string> = {
    hard: '하드',
    clay: '클레이',
    grass: '그래스',
    mixed: '혼합',
  };
  return surfaceMap[surface] || surface;
}

