import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { allBlogPosts } from "@/data/blog-posts";
import { PLAYERS_DB } from "@/data/players";
import { getBlogPublishDate, getPublishedBlogPosts } from "@/lib/blog-publish";
import { isIndexableBlogSlug } from "@/lib/blog-quality";
import { getSiteUrl } from "@/lib/site";

export type SitemapFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

export type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: SitemapFrequency;
  priority: number;
};

const APP_DIR = path.join(process.cwd(), "src", "app");
const BLOG_CONTENT_DIR = path.join(process.cwd(), "src", "data", "blog-content");
const PLAYERS_DIR = path.join(process.cwd(), "src", "data", "players");
const FALLBACK_STATIC_DATE = new Date("2026-01-01T00:00:00.000Z");

function normalizeBaseUrl(baseUrl = getSiteUrl()) {
  return baseUrl.replace(/\/$/, "");
}

function safeStatDate(filePath: string) {
  try {
    return fs.statSync(filePath).mtime;
  } catch {
    return FALLBACK_STATIC_DATE;
  }
}

function latestDate(...dates: Date[]) {
  return dates.reduce(
    (latest, date) => (date > latest ? date : latest),
    FALLBACK_STATIC_DATE,
  );
}

function getSlugsFromDir(dirPath: string) {
  try {
    const fullPath = path.join(APP_DIR, dirPath);
    if (!fs.existsSync(fullPath)) return [];

    return fs
      .readdirSync(fullPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .sort();
  } catch {
    return [];
  }
}

function getDirectoryLatestDate(dirPath: string) {
  try {
    if (!fs.existsSync(dirPath)) return FALLBACK_STATIC_DATE;

    return latestDate(
      ...fs
        .readdirSync(dirPath)
        .map((name) => safeStatDate(path.join(dirPath, name))),
    );
  } catch {
    return FALLBACK_STATIC_DATE;
  }
}

function getPageDate(...segments: string[]) {
  return safeStatDate(path.join(APP_DIR, ...segments));
}

function getBlogDate(date: string) {
  const parsed = new Date(`${date}T00:00:00+09:00`);
  return Number.isNaN(parsed.getTime()) ? FALLBACK_STATIC_DATE : parsed;
}

function getBlogContentDate(slug: string) {
  try {
    if (!fs.existsSync(BLOG_CONTENT_DIR)) return FALLBACK_STATIC_DATE;

    const contentFile = fs
      .readdirSync(BLOG_CONTENT_DIR)
      .find((name) => {
        if (!name.endsWith(".ts")) return false;
        const source = fs.readFileSync(path.join(BLOG_CONTENT_DIR, name), "utf8");
        return source.includes(`"${slug}":`) || source.includes(`'${slug}':`);
      });

    return contentFile
      ? safeStatDate(path.join(BLOG_CONTENT_DIR, contentFile))
      : FALLBACK_STATIC_DATE;
  } catch {
    return FALLBACK_STATIC_DATE;
  }
}

export function getSitemapEntries(baseUrl?: string): SitemapEntry[] {
  const siteUrl = normalizeBaseUrl(baseUrl);
  const publishedBlogPosts = getPublishedBlogPosts(allBlogPosts).filter((post) =>
    isIndexableBlogSlug(post.slug),
  );
  const latestBlogDate = latestDate(
    ...publishedBlogPosts.map((post) => getBlogDate(post.date)),
  );
  const latestUtilityDate = getDirectoryLatestDate(path.join(APP_DIR, "utility"));
  const latestPlayerDate = getDirectoryLatestDate(PLAYERS_DIR);
  const homeDate = latestDate(
    getPageDate("page.tsx"),
    latestBlogDate,
    latestUtilityDate,
  );

  const entries: SitemapEntry[] = [
    {
      url: siteUrl,
      lastModified: homeDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: latestDate(getPageDate("blog", "page.tsx"), latestBlogDate),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/utility`,
      lastModified: latestUtilityDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/players`,
      lastModified: latestPlayerDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  for (const slug of getSlugsFromDir("utility")) {
    entries.push({
      url: `${siteUrl}/utility/${slug}`,
      lastModified: latestDate(
        getPageDate("utility", slug, "page.tsx"),
        getPageDate("utility", slug, "layout.tsx"),
      ),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const slug of Object.keys(PLAYERS_DB).sort()) {
    entries.push({
      url: `${siteUrl}/players/${slug}`,
      lastModified: latestPlayerDate,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const post of publishedBlogPosts) {
    entries.push({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: latestDate(getBlogPublishDate(post), getBlogContentDate(post.slug)),
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
    { slug: "search", frequency: "weekly" as const, priority: 0.5 },
  ];

  for (const page of staticPages) {
    entries.push({
      url: `${siteUrl}/${page.slug}`,
      lastModified: getPageDate(page.slug, "page.tsx"),
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
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

export function toXmlSitemap(entries: SitemapEntry[]) {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
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
