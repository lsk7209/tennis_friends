import { NextRequest } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = 3600; // 1시간마다 재생성

// 블로그 글 데이터 (실제로는 데이터베이스나 파일에서 가져와야 함)
const blogPosts = [
  {
    title: '테니스 풋워크의 과학 — 발의 리듬이 경기의 리듬을 만든다',
    description: '풋워크는 테니스의 심장이다. 발의 리듬이 곧 경기의 리듬이며, 좋은 스윙은 좋은 발에서 시작된다.',
    slug: 'tennis-footwork-science',
    date: '2025-07-03',
    readingMinutes: 13,
  },
  {
    title: '테니스 발리의 기술 — 네트 앞 1초 반응으로 결정되는 승부',
    description: '발리는 힘이 아니라 반응의 기술이다. 네트 앞 1초 안에 리듬을 잡는 순간, 승부는 이미 결정된다.',
    slug: 'tennis-volley-technique-guide',
    date: '2025-07-10',
    readingMinutes: 13,
  },
  {
    title: '테니스 백핸드의 기술 — 왼손의 리드로 완성하는 정확한 임팩트',
    description: '백핸드는 힘이 아니라 밸런스의 기술이다. 왼손이 리드하고 오른손이 따라올 때 정확도와 파워가 동시에 완성된다.',
    slug: 'tennis-backhand-technique-guide',
    date: '2025-07-17',
    readingMinutes: 13,
  },
  {
    title: '테니스 서브 속도의 과학 — 파워보다 타이밍이 만든다',
    description: '서브는 힘이 아니라 타이밍이다. 근육의 순서, 무게 이동, 호흡의 리듬이 속도를 결정한다.',
    slug: 'tennis-serve-speed-science',
    date: '2025-07-23',
    readingMinutes: 13,
  },
  {
    title: '테니스 복식의 팀워크 전략 — 호흡·시선·커뮤니케이션으로 완성하는 듀오 플레이',
    description: '복식은 기술이 아니라 호흡의 경기다. 시선, 커뮤니케이션, 포지션이 하나로 맞을 때 비로소 승리가 시작된다.',
    slug: 'tennis-doubles-teamwork-strategy',
    date: '2025-07-30',
    readingMinutes: 13,
  },
  {
    title: '테니스에서 루틴의 힘 — 일관된 습관이 경기력을 만든다',
    description: '루틴은 단순한 습관이 아니다. 매일의 일관된 반복이 집중력, 안정감, 승부 감각을 만든다.',
    slug: 'tennis-power-of-routine',
    date: '2025-08-05',
    readingMinutes: 13,
  },
  {
    title: '테니스 경기 중 컨디션 유지법 — 체력과 집중력을 끝까지 지키는 루틴',
    description: '테니스는 체력보다 \'에너지 분배\'의 싸움이다. 집중력과 리듬을 끝까지 유지하는 루틴이 승부를 결정한다.',
    slug: 'tennis-inmatch-condition-management',
    date: '2025-08-12',
    readingMinutes: 13,
  },
  {
    title: '테니스 경기 후 회복 루틴 — 24시간 리커버리 사이클로 피로 없이 다음 경기 준비하기',
    description: '경기는 끝났지만, 진짜 승부는 회복에서 시작된다. 경기 후 24시간, 루틴 하나가 다음 실력을 결정한다.',
    slug: 'tennis-postmatch-recovery-routine',
    date: '2025-09-14',
    readingMinutes: 12,
  },
];

export async function GET(request: NextRequest) {
  const baseUrl = 'https://www.tennisfrens.com';

  const rssItems = blogPosts.map((post) => {
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();

    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>tennisfriends@tennisfriends.co.kr (TennisFriends)</author>
      <category><![CDATA[테니스]]></category>
      <category><![CDATA[스포츠]]></category>
    </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[TennisFriends - 테니스 블로그]]></title>
    <description><![CDATA[데이터로 똑똑하게, 테니스를 즐겁게. 테니스 실력 향상과 관련된 전문적인 가이드와 최신 정보를 제공합니다.]]></description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>ko-kr</language>
    <managingEditor>tennisfriends@tennisfriends.co.kr (TennisFriends)</managingEditor>
    <webMaster>tennisfriends@tennisfriends.co.kr (TennisFriends)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>TennisFriends Blog</generator>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/favicon.ico</url>
      <title>TennisFriends</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
