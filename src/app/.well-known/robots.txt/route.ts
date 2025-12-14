import { NextRequest } from 'next/server';

/**
 * .well-known/robots.txt
 * 일부 크롤러가 이 경로에서 robots.txt를 찾을 수 있도록 제공
 */
export async function GET(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfriends.co.kr';
  
  const robotsTxt = `# TennisFriends Robots.txt
# 이 파일은 /robots.txt로 리다이렉트됩니다.

User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-naver.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

