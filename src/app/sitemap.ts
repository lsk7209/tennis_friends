import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { PLAYERS_DB } from "@/data/players";
import { allBlogPosts } from "@/data/blog-posts";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

function getSlugsFromDir(dirPath: string): string[] {
  try {
    const fullPath = path.join(process.cwd(), "src/app", dirPath);
    if (!fs.existsSync(fullPath)) return [];

    return fs
      .readdirSync(fullPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(`Error reading directory ${dirPath}:`, error);
    }
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const buildDate = new Date("2026-03-08");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/utility`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/players`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const utilityPages: MetadataRoute.Sitemap = getSlugsFromDir("utility").map((slug) => ({
    url: `${baseUrl}/utility/${slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const playerPages: MetadataRoute.Sitemap = Object.keys(PLAYERS_DB).map((slug) => ({
    url: `${baseUrl}/players/${slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const additionalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/about`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tennis-rules-quiz`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  return [...staticPages, ...utilityPages, ...playerPages, ...blogPages, ...additionalPages];
}
