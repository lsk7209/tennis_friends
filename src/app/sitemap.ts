import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { PLAYERS_DB } from '@/data/players'
import { allBlogPosts } from '@/data/blog-posts'

export const dynamic = 'force-static'
export const revalidate = false

// 디렉토리에서 슬러그 목록을 가져오는 함수
function getSlugsFromDir(dirPath: string): string[] {
  try {
    const fullPath = path.join(process.cwd(), 'src/app', dirPath);
    if (!fs.existsSync(fullPath)) return [];

    return fs.readdirSync(fullPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  } catch (error) {
    // 프로덕션에서는 에러를 조용히 처리
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error reading directory ${dirPath}:`, error);
    }
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // 런타임에 요청 호스트를 사용하거나 환경 변수 사용
  // Vercel/프로덕션에서는 요청 헤더를 사용할 수 없으므로 환경 변수 우선 사용
  let baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // 환경 변수가 없으면 기본값 사용 (실제 도메인으로 변경 필요)
  if (!baseUrl) {
    // 프로덕션 환경에서는 실제 도메인을 환경 변수로 설정해야 함
    baseUrl = 'https://www.tennisfrens.com';
  }

  // baseUrl 정규화 (trailing slash 제거)
  const normalizedBaseUrl = baseUrl.replace(/\/$/, '')

  // 1. 기본 페이지들
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: normalizedBaseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${normalizedBaseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${normalizedBaseUrl}/utility`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 2. 유틸리티 페이지 자동 수집
  const utilitySlugs = getSlugsFromDir('utility');
  const utilityPages: MetadataRoute.Sitemap = utilitySlugs.map(slug => ({
    url: `${normalizedBaseUrl}/utility/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 3. 선수 페이지 자동 수집 (DB 기반)
  // 파일 시스템 대신 PLAYERS_DB를 사용하여 모든 선수(동적 라우트 포함)를 포함
  const playerSlugs = Object.keys(PLAYERS_DB);
  const playerPages: MetadataRoute.Sitemap = playerSlugs.map(slug => ({
    url: `${normalizedBaseUrl}/players/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const, // 선수 정보는 자주 업데이트될 수 있으므로 weekly로 상향
    priority: 0.8,
  }));

  // 4. 블로그 글 자동 수집 (실제 블로그 데이터 사용)
  // allBlogPosts에서 실제 날짜 정보를 가져와서 사용
  const blogPages: MetadataRoute.Sitemap = allBlogPosts
    // 선수 페이지와 중복 허용 (블로그는 스토리텔링 중심, 선수 페이지는 데이터 중심)
    .map(post => ({
      url: `${normalizedBaseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly' as const, // 블로그는 주간 업데이트로 상향
      priority: 0.8, // 블로그 우선순위 상향
    }));

  // 5. 추가 정적 페이지들
  const additionalPages: MetadataRoute.Sitemap = [
    {
      url: `${normalizedBaseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${normalizedBaseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${normalizedBaseUrl}/tennis-rules-quiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return [...staticPages, ...utilityPages, ...playerPages, ...blogPages, ...additionalPages]
}