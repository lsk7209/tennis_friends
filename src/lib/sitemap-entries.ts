import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { allBlogPosts } from "@/data/blog-posts";
import { PLAYERS_DB } from "@/data/players";
import playerLegacyRedirects from "@/data/players/legacy-redirects.json";
import { getBlogPublishDate, getPublishedBlogPosts } from "@/lib/blog-publish";
import { isIndexableBlogSlug } from "@/lib/blog-quality";
import { getSiteUrl } from "@/lib/site";
import type { BlogPostData } from "@/types/blog";

export type SitemapFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

export type SitemapEntry = {
  url: string;
  lastModified?: Date;
  changeFrequency: SitemapFrequency;
  priority: number;
};

const APP_DIR = path.join(process.cwd(), "src", "app");

function normalizeBaseUrl(baseUrl = getSiteUrl()) {
  return baseUrl.replace(/\/$/, "");
}

export function latestDate(...dates: Array<Date | undefined>): Date | undefined {
  return dates.reduce<Date | undefined>(
    (latest, date) =>
      date instanceof Date && Number.isFinite(date.getTime()) &&
      (!latest || date > latest)
        ? date
        : latest,
    undefined,
  );
}

function parseContentDate(value?: string): Date | undefined {
  if (!value) return undefined;
  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? `${value}T00:00:00+09:00`
    : /(?:Z|[+-]\d{2}:\d{2})$/.test(value)
      ? value
      : undefined;
  if (!normalized) return undefined;
  const parsed = new Date(normalized);
  return Number.isFinite(parsed.getTime()) ? parsed : undefined;
}

export function getBlogLastModified(post: BlogPostData): Date | undefined {
  return latestDate(getBlogPublishDate(post), parseContentDate(post.updatedAt));
}

function getSlugsFromDir(dirPath: string) {
  try {
    return fs.readdirSync(path.join(APP_DIR, dirPath), { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .sort();
  } catch {
    return [];
  }
}

export function getSitemapEntries(baseUrl?: string): SitemapEntry[] {
  const siteUrl = normalizeBaseUrl(baseUrl);
  const publishedBlogPosts = getPublishedBlogPosts(allBlogPosts).filter(
    (post) => isIndexableBlogSlug(post.slug),
  );
  const latestBlogDate = latestDate(
    ...publishedBlogPosts.map(getBlogLastModified),
  );

  const entries: SitemapEntry[] = [
    {
      url: siteUrl,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: latestBlogDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/utility`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/players`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  for (const slug of getSlugsFromDir("utility")) {
    entries.push({
      url: `${siteUrl}/utility/${slug}`,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const slug of Object.keys(PLAYERS_DB)
    .filter((candidate) => !(candidate in playerLegacyRedirects))
    .sort()) {
    entries.push({
      url: `${siteUrl}/players/${slug}`,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const post of publishedBlogPosts) {
    entries.push({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: getBlogLastModified(post),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  const staticPages = [
    { slug: "about", frequency: "monthly" as const, priority: 0.6 },
    { slug: "contact", frequency: "monthly" as const, priority: 0.5 },
    { slug: "privacy", frequency: "monthly" as const, priority: 0.5 },
    { slug: "terms", frequency: "monthly" as const, priority: 0.5 },
    { slug: "tennis-rules-quiz", frequency: "monthly" as const, priority: 0.7 },
  ];

  for (const page of staticPages) {
    entries.push({
      url: `${siteUrl}/${page.slug}`,
      changeFrequency: page.frequency,
      priority: page.priority,
    });
  }

  return entries;
}

export function toMetadataSitemap(
  entries: SitemapEntry[],
): MetadataRoute.Sitemap {
  return entries.map((entry) => ({
    url: entry.url,
    ...(entry.lastModified && { lastModified: entry.lastModified }),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

export function toXmlSitemap(entries: SitemapEntry[]) {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
${entry.lastModified ? `    <lastmod>${entry.lastModified.toISOString()}</lastmod>\n` : ""}    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
