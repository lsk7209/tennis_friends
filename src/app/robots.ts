import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      // AI 봇 허용 (검색 및 학습용)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'CCBot'],
        allow: '/',
      }
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-naver.xml`,
    ],
  }
}
