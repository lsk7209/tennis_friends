import { buildRssXml, getRssBaseUrl } from '@/app/rss.xml/route';

export const dynamic = 'force-static';

export async function GET() {
  return new Response(buildRssXml(getRssBaseUrl(), '/feed'), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=60, must-revalidate',
    },
  });
}
