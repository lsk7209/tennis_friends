import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

const DISALLOWED_PRIVATE_PATHS = ["/private/", "/admin/", "/api/auth/"];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: DISALLOWED_PRIVATE_PATHS,
      },
      {
        userAgent: "Yeti",
        allow: "/",
        disallow: DISALLOWED_PRIVATE_PATHS,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: DISALLOWED_PRIVATE_PATHS,
      },
      {
        userAgent: "Daumoa",
        allow: "/",
        disallow: DISALLOWED_PRIVATE_PATHS,
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOWED_PRIVATE_PATHS,
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "Google-Extended",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "CCBot",
        ],
        allow: "/",
      },
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/sitemap-naver.xml`],
    host: baseUrl,
  };
}
