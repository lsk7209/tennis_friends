import { buildRssXml, getRssBaseUrl } from '@/app/rss.xml/route';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
  return new Response(buildRssXml(getRssBaseUrl(), '/feed'), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
