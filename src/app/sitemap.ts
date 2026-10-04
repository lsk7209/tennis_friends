import { getSitemapEntries, toMetadataSitemap } from "@/lib/sitemap-entries";

export const dynamic = "force-static";
export const revalidate = 86400;

export default function sitemap() {
  return toMetadataSitemap(getSitemapEntries());
}
