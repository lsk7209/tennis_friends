// 장비 및 라이프스타일 10개 글 생성
const fs = require('fs');
const path = require('path');

const template = (d) => `import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com';

export const metadata = {
  title: ${JSON.stringify(d.meta.title)},
  description: ${JSON.stringify(d.meta.description)},
  keywords: ${JSON.stringify(d.meta.keywords)},
  alternates: {
    canonical: \`\${siteUrl}/blog/${d.slug}\`,
  },
  openGraph: {
    title: ${JSON.stringify(d.meta.title)},
    description: ${JSON.stringify(d.meta.description)},
    url: \`\${siteUrl}/blog/${d.slug}\`,
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(d.meta.title)},
    description: ${JSON.stringify(d.meta.description)},
  },
  robots: {
    index: true,
    follow: true,
  },
};
const tocItems = ${JSON.stringify(d.toc, null, 2)};
const faqs = ${JSON.stringify(d.faqs, null, 2)};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            ${d.meta.keywords.map(k => `<Badge className="bg-white/20 text-white border-white/30">${k}</Badge>`).join('\n            ')}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">${d.meta.title}</h1>
          <p className="text-xl text-blue-100 mb-8">${d.meta.description}</p>
        </div>
      </div>
      <Article slug="${d.slug}" date="2026-01-24" title="${d.meta.title}" excerpt="${d.meta.description}">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12">${d.content}</div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}`;

const equipment = [
  {
    slug: 'tennis-string-tension-guide',
    meta: {
      title: '스트링 텐션 완벽 가이드',
      description: '높은 텐션 vs 낮은 텐션. 파워, 컨트롤, 스핀에 미치는 영향과 나에게 맞는 텐션 찾기.',
      keywords: ['테니스 장비', '스트링', '텐션', '가이드'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-string-tension-guide` },
      openGraph: { title: '스트링 텐션 완벽 가이드', description: '높은 텐션 vs 낮은 텐션. 파워, 컨트롤, 스핀에 미치는 영향과 나에게 맞는 텐션 찾기.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-string-tension-guide`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '스트링 텐션 완벽 가이드', description: '높은 텐션 vs 낮은 텐션. 파워, 컨트롤, 스핀에 미치는 영향과 나에게 맞는 텐션 찾기.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'high', text: '높은 텐션', depth: 2 }, { id: 'low', text: '낮은 텐션', depth: 2 }],
    faqs: [{ q: '초보자에게 추천하는 텐션은?', a: '중간 정도(50-55lbs)에서 시작해 자신의 스타일에 맞춰 조정하세요.' }],
    content: '<h2 id="high">높은 텐션 (55lbs+)</h2><p>컨트롤이 좋지만 파워가 줄어듭니다. 풀 스윙을 하는 상급자에게 적합합니다.</p><h2 id="low">낮은 텐션 (45-50lbs)</h2><p>파워와 편안함이 증가하지만 컨트롤이 어려워집니다. 초중급자에게 추천합니다.</p>',
  },
  {
    slug: 'tennis-hybrid-string-setup',
    meta: {
      title: '하이브리드 스트링 세팅 가이드',
      description: '메인과 크로스를 다르게. 폴리 + 멀티필라멘트 조합의 장점과 추천 세팅.',
      keywords: ['테니스 장비', '하이브리드', '스트링', '세팅'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-hybrid-string-setup` },
      openGraph: { title: '하이브리드 스트링 세팅 가이드', description: '메인과 크로스를 다르게. 폴리 + 멀티필라멘트 조합의 장점과 추천 세팅.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-hybrid-string-setup`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '하이브리드 스트링 세팅 가이드', description: '메인과 크로스를 다르게. 폴리 + 멀티필라멘트 조합의 장점과 추천 세팅.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'why', text: '왜 하이브리드?', depth: 2 }, { id: 'combo', text: '추천 조합', depth: 2 }],
    faqs: [{ q: '하이브리드의 장점은?', a: '폴리의 스핀과 멀티필라멘트의 편안함을 동시에 얻을 수 있습니다.' }],
    content: '<h2 id="why">왜 하이브리드?</h2><p>폴리스트링만 사용하면 팔이 아플 수 있습니다. 하이브리드는 스핀과 편안함을 동시에 제공합니다.</p><h2 id="combo">추천 조합</h2><p>메인에 폴리, 크로스에 멀티필라멘트 또는 내츄럴 거트가 가장 인기 있는 조합입니다.</p>',
  },
  {
    slug: 'tennis-grip-size-selection',
    meta: {
      title: '그립 사이즈 선택 가이드',
      description: '너무 크거나 작으면 부상 위험. 정확한 그립 사이즈 측정법과 선택 기준.',
      keywords: ['테니스 장비', '그립', '사이즈', '라켓'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-grip-size-selection` },
      openGraph: { title: '그립 사이즈 선택 가이드', description: '너무 크거나 작으면 부상 위험. 정확한 그립 사이즈 측정법과 선택 기준.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-grip-size-selection`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '그립 사이즈 선택 가이드', description: '너무 크거나 작으면 부상 위험. 정확한 그립 사이즈 측정법과 선택 기준.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'measure', text: '측정 방법', depth: 2 }, { id: 'choose', text: '선택 기준', depth: 2 }],
    faqs: [{ q: '손가락이 손바닥에 닿아야 하나요?', a: '약 1cm 정도의 공간이 있어야 적절합니다. 너무 딱 맞으면 작은 것입니다.' }],
    content: '<h2 id="measure">측정 방법</h2><p>손바닥 중앙에서 약지 끝까지 자로 재면 인치 단위로 그립 사이즈가 나옵니다.</p><h2 id="choose">선택 기준</h2><p>애매하면 작은 사이즈를 선택하세요. 오버그립으로 두께를 늘릴 수 있습니다.</p>',
  },
  {
    slug: 'tennis-overgrip-guide',
    meta: {
      title: '오버그립 완벽 가이드',
      description: '땀 흡수와 그립감 개선의 필수 아이템. 종류별 특징과 교체 주기, 감는 방법까지.',
      keywords: ['테니스 장비', '오버그립', '그립', '교체'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-overgrip-guide` },
      openGraph: { title: '오버그립 완벽 가이드', description: '땀 흡수와 그립감 개선의 필수 아이템. 종류별 특징과 교체 주기, 감는 방법까지.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-overgrip-guide`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '오버그립 완벽 가이드', description: '땀 흡수와 그립감 개선의 필수 아이템. 종류별 특징과 교체 주기, 감는 방법까지.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'types', text: '오버그립 종류', depth: 2 }, { id: 'change', text: '교체 주기', depth: 2 }],
    faqs: [{ q: '얼마나 자주 교체하나요?', a: '주 3회 이상 치면 1-2주마다, 그 이하면 한 달에 한 번 정도 교체하세요.' }],
    content: '<h2 id="types">오버그립 종류</h2><p>땀 흡수형(Tacky)과 드라이형이 있습니다. 손에 땀이 많으면 드라이형을 추천합니다.</p><h2 id="change">교체 주기</h2><p>오버그립이 헤지거나 미끄러우면 즉시 교체하세요. 부상 예방이 최우선입니다.</p>',
  },
  {
    slug: 'tennis-dampener-effectiveness',
    meta: {
      title: '진동 흡수기(댐퍼)의 효과와 선택',
      description: '정말 효과가 있나? 과학적 분석과 선수들의 사용 이유, 추천 제품까지.',
      keywords: ['테니스 장비', '댐퍼', '진동 흡수기', '효과'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-dampener-effectiveness` },
      openGraph: { title: '진동 흡수기(댐퍼)의 효과와 선택', description: '정말 효과가 있나? 과학적 분석과 선수들의 사용 이유, 추천 제품까지.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-dampener-effectiveness`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '진동 흡수기(댐퍼)의 효과와 선택', description: '정말 효과가 있나? 과학적 분석과 선수들의 사용 이유, 추천 제품까지.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'effect', text: '실제 효과', depth: 2 }, { id: 'choice', text: '선택 방법', depth: 2 }],
    faqs: [{ q: '댐퍼는 필수인가요?', a: '아니요, 선택 사항입니다. 소리가 신경 쓰이거나 진동을 줄이고 싶으면 사용하세요.' }],
    content: '<h2 id="effect">실제 효과</h2><p>연구에 따르면 큰 진동 감소 효과는 없지만, "핑" 소리를 줄여주어 심리적 안정감을 줍니다.</p><h2 id="choice">선택 방법</h2><p>가벼운 것을 선택하세요. 무거우면 라켓 밸런스가 변합니다.</p>',
  },
  {
    slug: 'tennis-mental-closing-matches',
    meta: {
      title: '경기 마무리 멘탈 관리법',
      description: '5-3에서 패배하는 이유. 리드를 지키고 경기를 확실히 마무리하는 멘탈 전략.',
      keywords: ['테니스 멘탈', '종료 능력', '집중력', '경기 운영'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-mental-closing-matches` },
      openGraph: { title: '경기 마무리 멘탈 관리법', description: '5-3에서 패배하는 이유. 리드를 지키고 경기를 확실히 마무리하는 멘탈 전략.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-mental-closing-matches`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '경기 마무리 멘탈 관리법', description: '5-3에서 패배하는 이유. 리드를 지키고 경기를 확실히 마무리하는 멘탈 전략.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'problem', text: '문제 원인', depth: 2 }, { id: 'solution', text: '해결 전략', depth: 2 }],
    faqs: [{ q: '리드하다 역전당하는 이유는?', a: '조급함과 과도한 긴장으로 평소 플레이를 못하기 때문입니다.' }],
    content: '<h2 id="problem">문제 원인</h2><p>이기려는 욕심에 평소와 다른 플레이를 시도하거나, 너무 안전하게만 쳐서 주도권을 내줍니다.</p><h2 id="solution">해결 전략</h2><p>"한 포인트씩"만 생각하세요. 이기고 있다는 생각을 버리고 0-0처럼 집중합니다.</p>',
  },
  {
    slug: 'tennis-wrist-knee-pain-care',
    meta: {
      title: '손목·무릎 통증 예방과 관리',
      description: '테니스 엘보부터 점퍼스 니까지. 흔한 부상 예방법과 통증 발생 시 대처법.',
      keywords: ['테니스 건강', '부상 예방', '손목', '무릎', '관리'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-wrist-knee-pain-care` },
      openGraph: { title: '손목·무릎 통증 예방과 관리', description: '테니스 엘보부터 점퍼스 니까지. 흔한 부상 예방법과 통증 발생 시 대처법.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-wrist-knee-pain-care`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '손목·무릎 통증 예방과 관리', description: '테니스 엘보부터 점퍼스 니까지. 흔한 부상 예방법과 통증 발생 시 대처법.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'wrist', text: '손목 관리', depth: 2 }, { id: 'knee', text: '무릎 관리', depth: 2 }],
    faqs: [{ q: '테니스 엘보는 어떻게 예방하나요?', a: '적절한 라켓 무게, 낮은 스트링 텐션, 올바른 타법으로 예방할 수 있습니다.' }],
    content: '<h2 id="wrist">손목 관리</h2><p>손목 보호대를 착용하고, 운동 전후 스트레칭을 충분히 하세요. 통증이 지속되면 병원을 방문하세요.</p><h2 id="knee">무릎 관리</h2><p>적절한 신발과 올바른 풋워크로 무릎 부담을 줄이세요. 급정지를 피하고 부드럽게 움직입니다.</p>',
  },
  {
    slug: 'tennis-nutrition-pre-match',
    meta: {
      title: '경기 전 영양 섭취 가이드',
      description: '경기 2시간 전 무엇을 먹어야 하나? 에너지와 컨디션을 최적화하는 식단 전략.',
      keywords: ['테니스 건강', '영양', '식단', '경기 준비'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-nutrition-pre-match` },
      openGraph: { title: '경기 전 영양 섭취 가이드', description: '경기 2시간 전 무엇을 먹어야 하나? 에너지와 컨디션을 최적화하는 식단 전략.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-nutrition-pre-match`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '경기 전 영양 섭취 가이드', description: '경기 2시간 전 무엇을 먹어야 하나? 에너지와 컨디션을 최적화하는 식단 전략.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'before', text: '경기 전 식사', depth: 2 }, { id: 'during', text: '경기 중 보충', depth: 2 }],
    faqs: [{ q: '경기 직전에 먹으면 안 되는 음식은?', a: '기름진 음식, 탄산음료, 과도한 유제품은 피하세요.' }],
    content: '<h2 id="before">경기 전 식사 (2-3시간 전)</h2><p>복합 탄수화물(현미, 통밀빵)과 적당한 단백질(닭가슴살)을 섭취하세요. 소화가 빠른 음식을 선택합니다.</p><h2 id="during">경기 중 보충</h2><p>바나나, 에너지바, 스포츠 음료로 빠르게 에너지를 보충하세요.</p>',
  },
  {
    slug: 'history-of-tennis-scoring',
    meta: {
      title: '테니스 점수 체계의 역사: 왜 15-30-40인가?',
      description: '15, 30, 40의 비밀과 듀스, 애드밴티지의 유래. 테니스 스코어링의 흥미로운 역사.',
      keywords: ['테니스 상식', '역사', '스코어', '점수'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/history-of-tennis-scoring` },
      openGraph: { title: '테니스 점수 체계의 역사: 왜 15-30-40인가?', description: '15, 30, 40의 비밀과 듀스, 애드밴티지의 유래. 테니스 스코어링의 흥미로운 역사.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/history-of-tennis-scoring`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '테니스 점수 체계의 역사: 왜 15-30-40인가?', description: '15, 30, 40의 비밀과 듀스, 애드밴티지의 유래. 테니스 스코어링의 흥미로운 역사.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'origin', text: '점수의 기원', depth: 2 }, { id: 'deuce', text: '듀스의 유래', depth: 2 }],
    faqs: [{ q: '왜 45가 아니라 40인가요?', a: '발음의 편의성 때문입니다. "Forty-Five"는 길어서 "Forty"로 줄였습니다.' }],
    content: '<h2 id="origin">점수의 기원</h2><p>중세 프랑스에서 시계 문자판(60분)을 사용했다는 설이 유력합니다. 15분, 30분, 45분(후에 40분)으로 진행했습니다.</p><h2 id="deuce">듀스의 유래</h2><p>프랑스어 "à deux"(둘다)에서 유래했습니다. 두 선수가 동점이라는 의미입니다.</p>',
  },
  {
    slug: 'tennis-bag-essentials-checklist',
    meta: {
      title: '테니스 가방 필수품 체크리스트',
      description: '라켓만 챙기면 끝? 잊지 말아야 할 필수 아이템과 추천 준비물까지.',
      keywords: ['테니스 장비', '가방', '체크리스트', '준비물'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-bag-essentials-checklist` },
      openGraph: { title: '테니스 가방 필수품 체크리스트', description: '라켓만 챙기면 끝? 잊지 말아야 할 필수 아이템과 추천 준비물까지.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/tennis-bag-essentials-checklist`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '테니스 가방 필수품 체크리스트', description: '라켓만 챙기면 끝? 잊지 말아야 할 필수 아이템과 추천 준비물까지.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'must', text: '필수 아이템', depth: 2 }, { id: 'extra', text: '추가 추천', depth: 2 }],
    faqs: [{ q: '라켓은 몇 개 챙겨야 하나요?', a: '최소 2개를 추천합니다. 스트링이 끊어질 경우를 대비해야 합니다.' }],
    content: '<h2 id="must">필수 아이템</h2><p>라켓 2개, 테니스화, 물, 수건, 여벌 옷, 오버그립, 손목·머리 밴드는 반드시 챙기세요.</p><h2 id="extra">추가 추천</h2><p>선크림, 모자, 에너지바, 테이핑, 진통제도 가방에 넣어두면 유용합니다.</p>',
  },
];

const baseDir = path.join(__dirname, '../src/app/blog');
let count = 0;

equipment.forEach(data => {
  const filePath = path.join(baseDir, data.slug, 'page.tsx');
  fs.writeFileSync(filePath, template(data), 'utf8');
  count++;
  console.log(`✅ ${count}. ${data.slug}`);
});

console.log(`\n=== Completed ${count} equipment posts ===`);
