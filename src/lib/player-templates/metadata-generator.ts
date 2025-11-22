/**
 * 선수 페이지 SEO 메타데이터 생성
 */

import { Player, PlayerMetadata } from '@/types/player';
import { Metadata } from 'next';

/**
 * SEO 타이틀 생성 (45-60자)
 */
function generateTitle(player: Player): string {
  const baseTitle = `${player.nameKo} — 세계랭킹 ${player.rankingCurrent}위`;
  const style = getPlayStyleKo(player.style);
  const suffix = `| 플레이스타일·명장면·최근 경기력`;
  
  const title = `${baseTitle} ${suffix}`;
  
  // 60자 초과 시 조정
  if (title.length > 60) {
    return `${baseTitle} | ${style} 스타일·최근 경기력`;
  }
  
  return title;
}

/**
 * SEO 설명 생성 (110-155자)
 */
function generateDescription(player: Player): string {
  const style = getPlayStyleKo(player.style);
  const tags = player.tagsStory.slice(0, 2).join('·');
  
  const description = `${player.nameKo}의 ${style} 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. ${tags}로 주목받는 ${player.country} 출신의 세계랭킹 ${player.rankingCurrent}위 선수.`;
  
  // 155자 초과 시 조정
  if (description.length > 155) {
    return `${player.nameKo}의 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.`;
  }
  
  return description;
}

/**
 * 키워드 생성
 */
function generateKeywords(player: Player): string[] {
  const keywords = [
    player.nameKo,
    player.nameEn,
    '테니스',
    player.tour,
    '플레이스타일',
    `${player.country} 테니스`,
    getPlayStyleKo(player.style),
    getSurfaceKo(player.favoriteSurface),
  ];
  
  // 태그 추가
  keywords.push(...player.tagsStory);
  
  return [...new Set(keywords)]; // 중복 제거
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

/**
 * 메타데이터 생성
 */
export function generatePlayerMetadata(player: Player): PlayerMetadata {
  return {
    title: generateTitle(player),
    description: generateDescription(player),
    keywords: generateKeywords(player),
    canonical: `https://www.tennisfrens.com/players/${player.slug}`,
    ogImage: `/images/players/${player.slug}.jpg`,
  };
}

/**
 * Next.js Metadata 객체 생성
 */
export function generateNextMetadata(player: Player): Metadata {
  const metadata = generatePlayerMetadata(player);
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: 'TennisFriends' }],
    creator: 'TennisFriends',
    publisher: 'TennisFriends',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: metadata.canonical,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.canonical,
      siteName: 'TennisFriends',
      locale: 'ko_KR',
      type: 'profile',
      images: metadata.ogImage ? [
        {
          url: metadata.ogImage,
          width: 1200,
          height: 630,
          alt: `${player.nameKo} 프로필`,
        },
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

