import { NextRequest } from 'next/server';
import { allBlogPosts } from '@/data/blog-posts';
import { getBlogPublishDate, getPublishedBlogPosts, sortBlogPostsByPublishTime } from '@/lib/blog-publish';
import { isIndexableBlogSlug } from '@/lib/blog-quality';
import { DEFAULT_CONTACT_EMAIL, SITE_NAME } from '@/lib/site';

export const dynamic = 'force-static';
export const revalidate = 3600; // 1시간마다 재생성

export function getRssBaseUrl(request: NextRequest) {
  // 런타임에 요청 호스트를 사용하거나 환경 변수 사용
  let baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // 환경 변수가 없으면 요청 헤더에서 호스트 추출 시도
  if (!baseUrl) {
    const host = request.headers.get('host');
    if (host) {
      // 프로토콜 감지 (Vercel은 https 사용)
      const protocol = request.headers.get('x-forwarded-proto') || 'https';
      baseUrl = `${protocol}://${host}`;
    } else {
      // 기본값 (실제 도메인으로 변경 필요)
      baseUrl = 'https://www.tennisfrens.com';
    }
  }

  return baseUrl.replace(/\/$/, '');
}

export function buildRssXml(baseUrl: string, selfPath = '/rss.xml') {
  // 최신 블로그 포스트 50개만 RSS에 포함 (날짜순 정렬)
  const sortedPosts = sortBlogPostsByPublishTime(
    getPublishedBlogPosts(allBlogPosts).filter((post) =>
      isIndexableBlogSlug(post.slug),
    ),
  )
    .slice(0, 50);

  const rssItems = sortedPosts.map((post) => {
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    const pubDate = getBlogPublishDate(post).toUTCString();

    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt || ''}]]></description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${DEFAULT_CONTACT_EMAIL} (${SITE_NAME})</author>
      <category><![CDATA[${post.category || '테니스'}]]></category>
      <category><![CDATA[테니스]]></category>
      <category><![CDATA[스포츠]]></category>
      <enclosure url="${baseUrl}/opengraph-image" type="image/png" />
    </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[TennisFriends - 테니스 블로그]]></title>
    <description><![CDATA[데이터로 똑똑하게, 테니스를 즐겁게. 테니스 실력 향상과 관련된 전문적인 가이드와 최신 정보를 제공합니다. NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 모든 것을 제공합니다.]]></description>
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

  return rss;
}

export async function GET(request: NextRequest) {
  const rss = buildRssXml(getRssBaseUrl(request));

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
