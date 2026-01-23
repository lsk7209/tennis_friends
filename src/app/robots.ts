import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com';

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
    ],
  }
}
