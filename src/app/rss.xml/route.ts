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
  {
    title: '프란시스 티아포 — 에너지와 창의로 코트를 달구다',
    description: '폭발적인 스텝과 감각적인 터치, 변주를 두려워하지 않는 전진으로 흐름을 뒤집는 프란시스 티아포의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.',
    slug: 'frances-tiafoe',
    date: '2025-10-12',
    readingMinutes: 8,
  },
  {
    title: '토미 폴 — 속도와 각도로 조립하는 미국식 하드 테니스',
    description: '가벼운 발과 예리한 각, 과감한 전진으로 흐름을 끊어먹는 토미 폴의 성장, 스타일, 인간미와 과제를 한 편으로.',
    slug: 'tommy-paul',
    date: '2025-09-24',
    readingMinutes: 8,
  },
  {
    title: '벤 셸턴 — 폭발적 서브와 대담한 전진이 만든 신세대의 속도',
    description: '좌손 서브의 파괴력과 대담한 전진, 감각적인 드롭과 발리를 섞어 흐름을 뒤집는 벤 셸턴의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.',
    slug: 'ben-shelton',
    date: '2025-09-18',
    readingMinutes: 8,
  },
  {
    title: '그리고르 디미트로프 — 우아함과 근성을 다시 정의한 리바이벌',
    description: '원핸드 백핸드의 미학과 노련한 전술, 성숙한 멘탈로 커리어의 두 번째 절정을 만드는 그리고르 디미트로프의 성장, 스타일, 인간적 면모를 한 편으로.',
    slug: 'grigor-dimitrov',
    date: '2025-08-27',
    readingMinutes: 8,
  },
  {
    title: '홀게르 루네 — 불꽃과 계산 사이의 대담함',
    description: '공격적인 리턴과 예측 불가한 변주로 흐름을 흔드는 홀게르 루네의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.',
    slug: 'holger-rune',
    date: '2025-08-11',
    readingMinutes: 8,
  },
  {
    title: '후베르트 후르카츠 — 탄력과 절제로 설계하는 현대형 서브&발리',
    description: '거대한 스윙이 아니라 정교한 타이밍과 균형으로 점수를 쌓는 후베르트 후르카츠의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.',
    slug: 'hubert-hurkacz',
    date: '2025-10-02',
    readingMinutes: 8,
  },
  {
    title: '테일러 프리츠 — 서브와 타이밍으로 하드를 설득하다',
    description: '강력한 서브와 직선적인 포핸드, 차분한 리턴 선택으로 큰 코트를 좁혀 버리는 테일러 프리츠의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.',
    slug: 'taylor-fritz',
    date: '2025-07-15',
    readingMinutes: 8,
  },
  {
    title: '알렉스 데 미노르 — 스피드와 담대함으로 시간을 훔치는 기술',
    description: '폭발적인 풋워크와 끈질긴 수비·카운터로 리듬을 빼앗는 알렉스 데 미노르의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.',
    slug: 'alex-de-minaur',
    date: '2025-10-08',
    readingMinutes: 8,
  },
  {
    title: '카스페르 루드 — 점토 위에서 증명한 질서와 끈기',
    description: '꾸준함과 규율로 흐름을 쌓는 카스페르 루드의 성장 배경, 경기 스타일, 인간적인 면모와 라이벌 이야기를 한 편으로.',
    slug: 'casper-ruud',
    date: '2025-09-29',
    readingMinutes: 7,
  },
  {
    title: '스테파노스 치치파스 — 공격과 우아함 사이의 균형',
    description: '길게 뻗는 원핸드 백핸드와 거침없는 전진으로 감성과 이성을 조율하는 스테파노스 치치파스의 성장, 철학, 인간적인 면모를 한 편으로.',
    slug: 'stefanos-tsitsipas',
    date: '2025-10-19',
    readingMinutes: 8,
  },
  {
    title: '안드레이 루블레프 — 불꽃 같은 포핸드, 절제된 규율',
    description: '강력한 포핸드와 끊임없는 전진 의지로 랠리의 톤을 올리는 안드레이 루블레프의 성장, 스타일, 인간미와 과제를 한 편으로.',
    slug: 'andrey-rublev',
    date: '2025-09-07',
    readingMinutes: 8,
  },
  {
    title: '알렉산더 즈베레프 — 균형과 리듬으로 구축한 장기전의 기술',
    description: '길고 무거운 랠리에서 균형을 잃지 않는 알렉산더 즈베레프의 성장, 플레이 철학, 인간적인 면모와 라이벌 이야기를 한 편으로.',
    slug: 'alexander-zverev',
    date: '2025-08-23',
    readingMinutes: 8,
  },
  {
    title: '다닐 메드베데프 — 각도와 깊이로 짜는 지공의 미학',
    description: '낮은 탄도로 깊이를 누적하고, 리턴과 코트 포지셔닝으로 상대의 선택지를 지우는 다닐 메드베데프의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.',
    slug: 'daniil-medvedev',
    date: '2025-09-21',
    readingMinutes: 8,
  },
  {
    title: '노바크 조코비치 — 균형, 리턴, 멘탈로 완성한 \'결정의 기술\'',
    description: '리턴을 출발점으로 포인트를 다시 설계하고, 루틴과 호흡으로 큰 순간을 관리하는 노바크 조코비치의 성장, 철학, 인간적인 면모를 한 편으로.',
    slug: 'novak-djokovic',
    date: '2025-09-03',
    readingMinutes: 8,
  },
  {
    title: '야닉 시너 — 속도와 정확도로 재정의한 \'현대 표준\'',
    description: '빠른 준비와 직선적인 임팩트, 차가운 선택으로 흐름을 압축하는 야닉 시너의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.',
    slug: 'jannik-sinner',
    date: '2025-08-14',
    readingMinutes: 8,
  },
  {
    title: '카를로스 알카라즈 — \'즐기는 재능\'으로 시대를 앞당긴 젊은 왕',
    description: '공격적 베이스라인과 변주로 흐름을 장악하는 카를로스 알카라즈의 성장, 스타일, 인간미와 라이벌 이야기를 한 편으로.',
    slug: 'carlos-alcaraz',
    date: '2025-11-01',
    readingMinutes: 6,
  },
];

export async function GET(request: NextRequest) {
  const baseUrl = 'https://tennisfriends.co.kr';

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
