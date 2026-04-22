import { NextRequest } from "next/server";

/**
 * ai.txt
 * AI 크롤러를 위한 명시적 허용 정책
 * Google-Extended, GPTBot 등이 이 파일을 확인
 */
export async function GET(_request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tennisfrens.com";

  const aiTxt = `# ai.txt for TennisFriends

# AI 크롤러 정책
# 이 사이트는 AI 학습 및 검색에 사용될 수 있습니다.

# 허용된 크롤러
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

# 차단된 경로
User-agent: *
Disallow: /private/
Disallow: /admin/

# 사이트맵
Sitemap: ${baseUrl}/sitemap.xml

# RSS 피드
RSS: ${baseUrl}/rss.xml

# 연락처
Contact: tennisfriends@tennisfrens.com
`;

  return new Response(aiTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
