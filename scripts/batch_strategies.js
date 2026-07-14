// 전략 9개 글 생성
const fs = require('fs');
const path = require('path');

const template = (d) => `import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com';

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

const strategies = [
  {
    slug: 'tennis-strategy-vs-lefty',
    meta: {
      title: '왼손잡이 상대 공략법',
      description: '왼손잡이 특유의 스핀과 각도에 대응하는 전략. 서브 리턴부터 백핸드 대각선 공략까지 실전 팁.',
      keywords: ['테니스 전술', '왼손잡이', 'Lefty', '전략'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-strategy-vs-lefty` },
      openGraph: { title: '왼손잡이 상대 공략법', description: '왼손잡이 특유의 스핀과 각도에 대응하는 전략. 서브 리턴부터 백핸드 대각선 공략까지 실전 팁.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-strategy-vs-lefty`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '왼손잡이 상대 공략법', description: '왼손잡이 특유의 스핀과 각도에 대응하는 전략. 서브 리턴부터 백핸드 대각선 공략까지 실전 팁.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'intro', text: '왼손잡이의 특징', depth: 2 }, { id: 'serve', text: '서브 리턴 전략', depth: 2 }, { id: 'rally', text: '랠리 전략', depth: 2 }],
    faqs: [{ q: '왼손잡이가 어려운 이유는?', a: '오른손잡이가 익숙한 각도와 스핀이 반대로 나오기 때문입니다. 특히 슬라이스 서브가 반대 방향으로 휘어져 당황하기 쉽습니다.' }],
    content: '<h2 id="intro">왼손잡이의 특징</h2><p>왼손잡이는 전체 인구의 10%에 불과하므로, 대다수 선수는 왼손잡이와의 경기 경험이 부족합니다. 이 불편함을 극복하는 것이 핵심입니다.</p><h2 id="serve">서브 리턴 전략</h2><p>왼손잡이의 슬라이스 서브는 오른손잡이와 반대로 휘어집니다. 듀스 코트에서는 몸 쪽으로 파고들고, 애드 코트에서는 바깥으로 빠져나갑니다. 미리 예측하고 포지션을 조정하세요.</p><h2 id="rally">랠리 전략</h2><p>그들의 포핸드 크로스(당신 입장에서 백핸드)를 공략하세요. 왼손잡이는 이쪽 각도에 익숙하지 않습니다.</p>',
  },
  {
    slug: 'tennis-windy-condition-tips',
    meta: {
      title: '바람 부는 날 테니스 실전 가이드',
      description: '바람 많은 날에도 일관성을 유지하는 법. 토스 조정, 스핀 활용, 멘탈 관리까지.',
      keywords: ['테니스 전술', '바람', '날씨', '멘탈'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-windy-condition-tips` },
      openGraph: { title: '바람 부는 날 테니스 실전 가이드', description: '바람 많은 날에도 일관성을 유지하는 법. 토스 조정, 스핀 활용, 멘탈 관리까지.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-windy-condition-tips`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '바람 부는 날 테니스 실전 가이드', description: '바람 많은 날에도 일관성을 유지하는 법. 토스 조정, 스핀 활용, 멘탈 관리까지.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'serve', text: '서브 토스 조정', depth: 2 }, { id: 'groundstroke', text: '그라운드 스트로크', depth: 2 }],
    faqs: [{ q: '바람 부는 날 토스 높이는?', a: '평소보다 낮게 토스하고, 바람 방향을 고려하여 앞이나 뒤로 조정합니다.' }],
    content: '<h2 id="serve">서브 토스 조정</h2><p>바람이 강하면 토스를 낮게 하고, 바람 방향에 따라 토스 위치를 앞뒤로 미세 조정하세요.</p><h2 id="groundstroke">그라운드 스트로크</h2><p>탑스핀을 더 많이 걸어 공이 날아가지 않도록 안정성을 높이세요.</p>',
  },
  {
    slug: 'tennis-drop-shot-mastery',
    meta: {
      title: '드롭샷 마스터하기',
      description: '절묘한 타이밍과 터치로 승부를 가르는 드롭샷. 언제 사용할지, 어떻게 숨길지 완벽 가이드.',
      keywords: ['테니스 기술', '드롭샷', 'Drop Shot', '터치'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-drop-shot-mastery` },
      openGraph: { title: '드롭샷 마스터하기', description: '절묘한 타이밍과 터치로 승부를 가르는 드롭샷. 언제 사용할지, 어떻게 숨길지 완벽 가이드.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-drop-shot-mastery`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '드롭샷 마스터하기', description: '절묘한 타이밍과 터치로 승부를 가르는 드롭샷. 언제 사용할지, 어떻게 숨길지 완벽 가이드.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'timing', text: '드롭샷 타이밍', depth: 2 }, { id: 'technique', text: '기술', depth: 2 }],
    faqs: [{ q: '드롭샷 성공 조건은?', a: '상대가 베이스라인 뒤에 있고, 당신이 충분히 앞에 있을 때가 최적입니다.' }],
    content: '<h2 id="timing">드롭샷 타이밍</h2><p>상대가 베이스라인 깊숙이 있을 때, 그리고 당신이 코트 안쪽에 있을 때 시도하세요.</p><h2 id="technique">기술</h2><p>스윙을 같은 궤도로 시작해서 마지막 순간에만 속도를 줄여야 상대가 예측하지 못합니다.</p>',
  },
  {
    slug: 'tennis-lob-defense-offense',
    meta: {
      title: '로브 활용법: 수비와 공격',
      description: '수비 로브와 공격 로브의 차이. 상황에 따른 로브 전술과 실전 연습법.',
      keywords: ['테니스 기술', '로브', 'Lob', '전술'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-lob-defense-offense` },
      openGraph: { title: '로브 활용법: 수비와 공격', description: '수비 로브와 공격 로브의 차이. 상황에 따른 로브 전술과 실전 연습법.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-lob-defense-offense`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '로브 활용법: 수비와 공격', description: '수비 로브와 공격 로브의 차이. 상황에 따른 로브 전술과 실전 연습법.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'defense', text: '수비 로브', depth: 2 }, { id: 'offense', text: '공격 로브', depth: 2 }],
    faqs: [{ q: '수비 로브와 공격 로브 차이는?', a: '수비 로브는 높고 깊게, 공격 로브는 낮고 빠르게 보냅니다.' }],
    content: '<h2 id="defense">수비 로브</h2><p>위기 상황에서 시간을 버는 용도. 최대한 높이 띄워서 상대가 스매싱하기 어렵게 만듭니다.</p><h2 id="offense">공격 로브</h2><p>네트에 붙은 상대의 머리 위로 빠르게 넘기는 공격적인 샷. 상대가 뒤로 돌아가지 못하면 포인트를 따냅니다.</p>',
  },
  {
    slug: 'tennis-overhead-smash-guide',
    meta: {
      title: '오버헤드 스매시 완벽 가이드',
      description: '확실한 포인트 마무리를 위한 스매시 기술. 풋워크, 타점,임팩트까지 단계별 분석.',
      keywords: ['테니스 기술', '스매시', 'Overhead', '오버헤드'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-overhead-smash-guide` },
      openGraph: { title: '오버헤드 스매시 완벽 가이드', description: '확실한 포인트 마무리를 위한 스매시 기술. 풋워크, 타점, 임팩트까지 단계별 분석.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-overhead-smash-guide`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '오버헤드 스매시 완벽 가이드', description: '확실한 포인트 마무리를 위한 스매시 기술. 풋워크, 타점, 임팩트까지 단계별 분석.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'footwork', text: '풋워크', depth: 2 }, { id: 'contact', text: '타점', depth: 2 }],
    faqs: [{ q: '스매시 실수를 줄이려면?', a: '조급하게 치지 말고, 공 아래로 충분히 이동한 뒤 여유 있게 치세요.' }],
    content: '<h2 id="footwork">풋워크</h2><p>공 아래로 빠르게 이동하고, 옆으로 몸을 돌려 서브와 같은 자세를 만드세요.</p><h2 id="contact">타점</h2><p>최고점보다 약간 앞에서 치면 더 강력하고 정확합니다.</p>',
  },
  {
    slug: 'tennis-slice-backhand-mastery',
    meta: {
      title: '슬라이스 백핸드 활용법',
      description: '변화와 리듬 조절의 핵심 슬라이스. 언제 어떻게 사용할지, 실전 전술과 연습 드릴.',
      keywords: ['테니스 기술', '슬라이스', 'Slice', '백핸드'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-slice-backhand-mastery` },
      openGraph: { title: '슬라이스 백핸드 활용법', description: '변화와 리듬 조절의 핵심 슬라이스. 언제 어떻게 사용할지, 실전 전술과 연습 드릴.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-slice-backhand-mastery`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '슬라이스 백핸드 활용법', description: '변화와 리듬 조절의 핵심 슬라이스. 언제 어떻게 사용할지, 실전 전술과 연습 드릴.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'use', text: '슬라이스 활용 시기', depth: 2 }, { id: 'technique', text: '기술', depth: 2 }],
    faqs: [{ q: '슬라이스는 언제 쓰나요?', a: '수비 상황, 어프로치 샷, 또는 상대 리듬을 깨고 싶을 때 유용합니다.' }],
    content: '<h2 id="use">슬라이스 활용 시기</h2><p>상대가 베이스라인 깊숙이 강타할 때, 슬라이스로 낮고 짧게 넘기면 상대는 공을 들어 올려야 해서 공격이 어려워집니다.</p><h2 id="technique">기술</h2><p>라켓을 위에서 아래로 베어 내리며, 백스핀을 걸어야 합니다.</p>',
  },
  {
    slug: 'tennis-return-of-serve-strategy',
    meta: {
      title: '서브 리턴 전략 완벽 가이드',
      description: '경기의 50%를 차지하는 리턴 게임. 위치 선택, 스플릿 스텝, 리턴 코스 전략까지.',
      keywords: ['테니스 전술', '서브 리턴', 'Return', '전략'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-return-of-serve-strategy` },
      openGraph: { title: '서브 리턴 전략 완벽 가이드', description: '경기의 50%를 차지하는 리턴 게임. 위치 선택, 스플릿 스텝, 리턴 코스 전략까지.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-return-of-serve-strategy`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '서브 리턴 전략 완벽 가이드', description: '경기의 50%를 차지하는 리턴 게임. 위치 선택, 스플릿 스텝, 리턴 코스 전략까지.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'position', text: '위치 선택', depth: 2 }, { id: 'split', text: '스플릿 스텝', depth: 2 }],
    faqs: [{ q: '리턴 위치는 어디가 좋나요?', a: '베이스라인 안쪽에서 시작해, 상대 서브 스피드에 따라 조정합니다.' }],
    content: '<h2 id="position">위치 선택</h2><p>상대 서브가 느리면 앞으로, 빠르면 뒤로 조정하세요. 중요한 건 일관성입니다.</p><h2 id="split">스플릿 스텝</h2><p>상대가 공을 치는 순간 작게 점프하여 빠르게 반응할 준비를 하세요.</p>',
  },
  {
    slug: 'tennis-net-play-positioning',
    meta: {
      title: '네트 플레이 포지셔닝 가이드',
      description: '공격의 완성, 네트 플레이. 언제 올라갈지, 어디에 설지, 발리 각도까지 실전 팁.',
      keywords: ['테니스 전술', '네트 플레이', 'Volley', '포지셔닝'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-net-play-positioning` },
      openGraph: { title: '네트 플레이 포지셔닝 가이드', description: '공격의 완성, 네트 플레이. 언제 올라갈지, 어디에 설지, 발리 각도까지 실전 팁.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-net-play-positioning`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '네트 플레이 포지셔닝 가이드', description: '공격의 완성, 네트 플레이. 언제 올라갈지, 어디에 설지, 발리 각도까지 실전 팁.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'approach', text: '어프로치 샷', depth: 2 }, { id: 'position', text: '네트 포지션', depth: 2 }],
    faqs: [{ q: '네트로 언제 올라가나요?', a: '깊고 강한 샷으로 상대를 밀어낸 뒤, 어프로치 샷을 치고 전진하세요.' }],
    content: '<h2 id="approach">어프로치 샷</h2><p>깊고 낮은 슬라이스나 강한 드라이브로 상대를 밀어낸 뒤 네트로 붙으세요.</p><h2 id="position">네트 포지션</h2><p>T라인과 서비스 라인 사이에 서서, 상대가 공을 치는 방향으로 크로스 스텝으로 이동하세요.</p>',
  },
  {
    slug: 'tennis-court-surfaces-explained',
    meta: {
      title: '코트 표면별 전략: 하드, 클레이, 잔디',
      description: '하드, 클레이, 잔디 코트의 특성과 각 코트에서의 최적 전략. 슈즈 선택부터 전술까지.',
      keywords: ['테니스 상식', '코트 표면', '하드 코트', '클레이 코트', '잔디 코트'],
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-court-surfaces-explained` },
      openGraph: { title: '코트 표면별 전략: 하드, 클레이, 잔디', description: '하드, 클레이, 잔디 코트의 특성과 각 코트에서의 최적 전략. 슈즈 선택부터 전술까지.', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/tennis-court-surfaces-explained`, siteName: 'TennisFriends', locale: 'ko_KR', type: 'article' },
      twitter: { card: 'summary_large_image', title: '코트 표면별 전략: 하드, 클레이, 잔디', description: '하드, 클레이, 잔디 코트의 특성과 각 코트에서의 최적 전략. 슈즈 선택부터 전술까지.' },
      robots: { index: true, follow: true },
    },
    toc: [{ id: 'hard', text: '하드 코트', depth: 2 }, { id: 'clay', text: '클레이 코트', depth: 2 }, { id: 'grass', text: '잔디 코트', depth: 2 }],
    faqs: [{ q: '코트 표면별 특성은?', a: '하드는 중간 속도, 클레이는 느리고 높게 튀며, 잔디는 빠르고 낮게 튕깁니다.' }],
    content: '<h2 id="hard">하드 코트</h2><p>가장 보편적이며, 반발이 일정합니다. 올라운드 플레이어에게 유리합니다.</p><h2 id="clay">클레이 코트</h2><p>공이 느리게 튀고 슬라이딩이 가능합니다. 긴 랠리가 이어지며 체력이 중요합니다.</p><h2 id="grass">잔디 코트</h2><p>공이 빠르고 낮게 튕기며, 서브 앤 발리가 유리합니다.</p>',
  },
];

const baseDir = path.join(__dirname, '../src/app/blog');
let count = 0;

strategies.forEach(data => {
  const filePath = path.join(baseDir, data.slug, 'page.tsx');
  fs.writeFileSync(filePath, template(data), 'utf8');
  count++;
  console.log(`✅ ${count}. ${data.slug}`);
});

console.log(`\n=== Completed ${count} strategy posts ===`);
