import { NextRequest } from "next/server";
import { getSitemapEntries, toXmlSitemap } from "@/lib/sitemap-entries";

export const dynamic = "force-static";
export const revalidate = 3600;

function getBaseUrl(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  const host = request.headers.get("host");
  if (!host) return "https://www.tennisfrens.com";

  const protocol = request.headers.get("x-forwarded-proto") || "https";
  return `${protocol}://${host}`;
}

export async function GET(request: NextRequest) {
  return new Response(toXmlSitemap(getSitemapEntries(getBaseUrl(request))), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
