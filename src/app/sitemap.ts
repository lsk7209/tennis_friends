import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { PLAYERS_DB } from '@/data/players'

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
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfriends.co.kr'

  // 1. 기본 페이지들
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/utility`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 2. 유틸리티 페이지 자동 수집
  const utilitySlugs = getSlugsFromDir('utility');
  const utilityPages: MetadataRoute.Sitemap = utilitySlugs.map(slug => ({
    url: `${baseUrl}/utility/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 3. 선수 페이지 자동 수집 (DB 기반)
  // 파일 시스템 대신 PLAYERS_DB를 사용하여 모든 선수(동적 라우트 포함)를 포함
  const playerSlugs = Object.keys(PLAYERS_DB);
  const playerPages: MetadataRoute.Sitemap = playerSlugs.map(slug => ({
    url: `${baseUrl}/players/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const, // 선수 정보는 자주 업데이트될 수 있으므로 weekly로 상향
    priority: 0.8,
  }));

  // 4. 블로그 글 자동 수집
  const blogSlugs = getSlugsFromDir('blog');
  // 선수 페이지와 중복되는 슬러그 제외 (혹시 모를 중복 방지)
  const blogOnlySlugs = blogSlugs.filter(slug => !playerSlugs.includes(slug));

  const blogPages: MetadataRoute.Sitemap = blogOnlySlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...utilityPages, ...playerPages, ...blogPages]
}