import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
  // 환경 변수 우선 사용, 없으면 기본값 (실제 도메인으로 변경 필요)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      // 구글 봇
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      // 네이버 봇 최적화
      {
        userAgent: 'Yeti',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'NaverBot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      // 다음 봇 최적화
      {
        userAgent: 'Daumoa',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'DaumBot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      // Bing 봇
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'msnbot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      // AI 크롤러 최적화
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Omgilibot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'TwitterBot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-naver.xml`, // 네이버 사이트맵
    ],
  }
}