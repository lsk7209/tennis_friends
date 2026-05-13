import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * .well-known/robots.txt
 * 일부 크롤러가 이 경로에서 robots.txt를 찾을 수 있도록 제공.
 * 메인 /robots.txt 정책과 같은 허용/차단 기준을 유지한다.
 */
export function GET() {
  const baseUrl = getSiteUrl();

  const robotsTxt = `User-agent: Googlebot
Allow: /
Disallow: /private/
Disallow: /admin/
Disallow: /api/auth/

User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/
Disallow: /api/auth/

User-agent: Yeti
Allow: /
Disallow: /private/
Disallow: /admin/
Disallow: /api/auth/

User-agent: Daumoa
Allow: /
Disallow: /private/
Disallow: /admin/
Disallow: /api/auth/

User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: OAI-SearchBot
User-agent: Google-Extended
User-agent: ClaudeBot
User-agent: Claude-Web
User-agent: anthropic-ai
User-agent: PerplexityBot
User-agent: CCBot
Allow: /

User-agent: Bytespider
Disallow: /

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-naver.xml
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
