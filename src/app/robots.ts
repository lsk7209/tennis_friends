import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/auth/"],
      },
      {
        userAgent: "Yeti", // 네이버 크롤러
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/auth/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/auth/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/auth/"],
      },
      // Daum 크롤러
      {
        userAgent: "Daumoa",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/auth/"],
      },
      // AI 봇 허용 (검색 및 학습용)
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot", // OpenAI
          "Google-Extended", // Google AI
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai", // Anthropic
          "PerplexityBot", // Perplexity
          "CCBot", // Common Crawl
        ],
        allow: "/",
      },
      // 스크레이퍼 차단
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
    host: baseUrl,
  };
}
