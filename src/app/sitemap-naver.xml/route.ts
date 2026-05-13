import { NextRequest } from "next/server";
import { getSitemapEntries, toXmlSitemap } from "@/lib/sitemap-entries";

export const dynamic = "force-static";
export const revalidate = 3600;

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://www.tennisfrens.com";
}

export async function GET(request: NextRequest) {
  void request;

  return new Response(toXmlSitemap(getSitemapEntries(getBaseUrl())), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
