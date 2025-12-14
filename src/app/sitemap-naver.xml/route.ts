import { NextRequest } from 'next/server';
import { allBlogPosts } from '@/data/blog-posts';
import { PLAYERS_DB } from '@/data/players';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';
export const revalidate = 3600; // 1시간마다 재생성

// 디렉토리에서 슬러그 목록을 가져오는 함수
function getSlugsFromDir(dirPath: string): string[] {
  try {
    const fullPath = path.join(process.cwd(), 'src/app', dirPath);
    if (!fs.existsSync(fullPath)) return [];

    return fs.readdirSync(fullPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  } catch {
    return [];
  }
}

export async function GET(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfriends.co.kr';
  
  // baseUrl 정규화 (trailing slash 제거)
  const normalizedBaseUrl = baseUrl.replace(/\/$/, '');

  // 네이버 사이트맵 형식 (네이버 검색 등록용)
  const urls: string[] = [];

  // 1. 기본 페이지들
  urls.push(normalizedBaseUrl);
  urls.push(`${normalizedBaseUrl}/blog`);
  urls.push(`${normalizedBaseUrl}/utility`);
  urls.push(`${normalizedBaseUrl}/about`);
  urls.push(`${normalizedBaseUrl}/contact`);
  urls.push(`${normalizedBaseUrl}/tennis-rules-quiz`);

  // 2. 유틸리티 페이지
  const utilitySlugs = getSlugsFromDir('utility');
  utilitySlugs.forEach(slug => {
    urls.push(`${normalizedBaseUrl}/utility/${slug}`);
  });

  // 3. 선수 페이지
  const playerSlugs = Object.keys(PLAYERS_DB);
  playerSlugs.forEach(slug => {
    urls.push(`${normalizedBaseUrl}/players/${slug}`);
  });

  // 4. 블로그 글 (최신 1000개만)
  const blogSlugs = allBlogPosts
    .filter(post => !playerSlugs.includes(post.slug))
    .slice(0, 1000)
    .map(post => post.slug);
  
  blogSlugs.forEach(slug => {
    urls.push(`${normalizedBaseUrl}/blog/${slug}`);
  });

  // 네이버 사이트맵 XML 생성
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:n="http://www.naver.com/schemas/sitemap/0.1">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

