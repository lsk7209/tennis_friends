import { NextRequest } from "next/server";
import { allBlogPosts } from "@/data/blog-posts";
import {
  getBlogPublishDate,
  getPublishedBlogPosts,
  sortBlogPostsByPublishTime,
} from "@/lib/blog-publish";
import { isIndexableBlogSlug } from "@/lib/blog-quality";
import { DEFAULT_CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = 3600;

export function getRssBaseUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.tennisfrens.com")
    .replace(/\/$/, "");
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

      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt || ""}]]></description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${DEFAULT_CONTACT_EMAIL} (${SITE_NAME})</author>
      <category><![CDATA[${post.category || "테니스"}]]></category>
      <category><![CDATA[테니스]]></category>
      <category><![CDATA[스포츠]]></category>
      <enclosure url="${baseUrl}/opengraph-image" type="image/png" />
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[TennisFriends - 테니스 블로그]]></title>
    <description><![CDATA[데이터로 똑똑하게, 테니스를 즐겁게. 테니스 실력 향상과 관련된 전문적인 가이드와 최신 정보를 제공합니다.]]></description>
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
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
