import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'

export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      {
        userAgent: 'Yeti', // 네이버 크롤러
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      // AI 봇 허용 (검색 및 학습용)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'CCBot', 'anthropic-ai', 'Claude-Web', 'PerplexityBot'],
        allow: '/',
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-naver.xml`,
    ],
    host: baseUrl,
  }
}
