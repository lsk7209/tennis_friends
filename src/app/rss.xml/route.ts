import { NextRequest } from "next/server";
import { allBlogPosts } from "@/data/blog-posts";
import {
  getBlogPublishDate,
  getPublishedBlogPosts,
  sortBlogPostsByPublishTime,
} from "@/lib/blog-publish";
import { isIndexableBlogSlug } from "@/lib/blog-quality";
import { DEFAULT_CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const dynamic = "force-dynamic";

export function getRssBaseUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.tennisfrens.com")
    .replace(/\/$/, "");
}

function cdata(value: string) {
  return `<![CDATA[${value.replaceAll("]]>", "]]]]><![CDATA[>")}]]>`;
}

export function buildRssXml(baseUrl: string, selfPath = "/rss.xml") {
  const sortedPosts = sortBlogPostsByPublishTime(
    getPublishedBlogPosts(allBlogPosts).filter((post) =>
      isIndexableBlogSlug(post.slug),
    ),
  ).slice(0, 50);

  const rssItems = sortedPosts
    .map((post) => {
      const postUrl = `${baseUrl}/blog/${post.slug}`;
      const pubDate = getBlogPublishDate(post).toUTCString();
      const category = post.category || "테니스";

      return `
    <item>
      <title>${cdata(post.title)}</title>
      <description>${cdata(post.excerpt || "")}</description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${DEFAULT_CONTACT_EMAIL} (${SITE_NAME})</author>
      <category>${cdata(category)}</category>
      <category>${cdata("테니스")}</category>
      <category>${cdata("스포츠")}</category>
      <enclosure url="${baseUrl}/opengraph-image" type="image/png" />
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${cdata("TennisFriends - 테니스 블로그")}</title>
    <description>${cdata(
      "데이터와 실전 경험을 바탕으로 테니스 실력 향상, 장비, 훈련, 경기 운영 가이드를 제공합니다.",
    )}</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}${selfPath}" rel="self" type="application/rss+xml" />
    <language>ko-KR</language>
    <managingEditor>${DEFAULT_CONTACT_EMAIL} (${SITE_NAME})</managingEditor>
    <webMaster>${DEFAULT_CONTACT_EMAIL} (${SITE_NAME})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>TennisFriends Blog</generator>
    <ttl>60</ttl>
    <copyright>Copyright ${new Date().getFullYear()} TennisFriends. All rights reserved.</copyright>
    <image>
      <url>${baseUrl}/favicon.ico</url>
      <title>TennisFriends</title>
      <link>${baseUrl}</link>
      <width>32</width>
      <height>32</height>
    </image>
    ${rssItems}
  </channel>
</rss>`;
}

export async function GET(request: NextRequest) {
  void request;
  const rss = buildRssXml(getRssBaseUrl());

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=60, must-revalidate",
    },
  });
}
