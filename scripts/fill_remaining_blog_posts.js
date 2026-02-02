// 나머지 블로그 글들을 빠르게 생성하는 스크립트
const fs = require('fs');
const path = require('path');

// 간단한 템플릿 생성 함수
const generateBlogContent = (post) => {
  const baseTemplate = `import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '${post.title}',
  description: '${post.description}',
  keywords: [${post.keywords.map(k => `'${k}'`).join(', ')}],
  alternates: {
    canonical: \`\${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/${post.slug}\`,
  },
  openGraph: {
    title: '${post.title}',
    description: post.summary,
    url: \`\${process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com'}/blog/${post.slug}\`,
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${post.title}',
    description: '${post.description}',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems = ${JSON.stringify(post.toc, null, 2)};

const faqs = ${JSON.stringify(post.faqs, null, 2)};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            ${post.keywords.map(k => `<Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">${k}</Badge>`).join('\n            ')}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            ${post.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            ${post.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">5분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2026-01-24</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="${post.slug}" date="2026-01-24" title="${post.title}" excerpt="${post.description}">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">
            
${post.content}

          </div>

          <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">관련 자료</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    내부 링크
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/players" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🏆</span>
                        <span className="font-medium">선수 프로필 더보기</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    추천 링크
                  </h4>
                  <ul className="space-y-3">
                     <li>
                      <a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">🌐</span>
                        <span className="font-medium">ATP/WTA 투어</span>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}`;

  return baseTemplate;
};

// 남은 포스트 데이터
const remainingPosts = [
  // 나머지 플레이어들 (Emma Raducanu만 추가)
  {
    slug: 'emma-raducanu',
    title: '엠마 라두카누: 신데렐라 스토리 그 후',
    description: '예선 통과자 US 오픈 우승. 엠마 라두카누의 기적 같은 스토리와 부상 극복, 재도약의 과정을 다룹니다.',
    keywords: ['테니스', '엠마 라두카누', 'Emma Raducanu', 'US 오픈', '신데렐라'],
    toc: [
      { id: 'introduction', text: '들어가며', depth: 2 },
      { id: 'us-open-miracle', text: 'US 오픈 2021: 예선부터 우승까지', depth: 2 },
      { id: 'injury-struggles', text: '부상과의 싸움', depth: 2 },
      { id: 'comeback', text: '재도약을 향해', depth: 2 },
      { id: 'conclusion', text: '마무리하며', depth: 2 },
    ],
    faqs: [
      {
        q: '라두카누의 US 오픈 우승이 역사적인 이유는?',
        a: '예선 통과자 최초로 그랜드 슬램을 우승했으며, 단 한 세트도 내주지 않는 완벽한 우승을 이뤘습니다.'
      },
      {
        q: '그녀가 겪은 부상은?',
        a: '손목, 발목 등 다양한 부상으로 고생했으며, 성장통과 그랜드 슬램 챔피언이라는 중압감이 더해져 어려움을 겪었습니다.'
      },
    ],
    content: `<h2 id="introduction">들어가며</h2>
            <p>
              2021년 US 오픈, 예선부터 시작해 단 한 세트도 떨어뜨리지 않고 우승한 18세 소녀. 그 신데렐라 스토리의 주인공 엠마 라두카누(Emma Raducanu)는 하루아침에 세계적인 스타가 되었습니다. 하지만 그 이후의 길은 순탄하지 않았습니다. 부상과 중압감 속에서 그녀는 여전히 싸우고 있으며, 다시 정상으로 돌아올 날을 준비하고 있습니다.
            </p>

            <h2 id="us-open-miracle">US 오픈 2021: 예선부터 우승까지</h2>
            <p>
              예선 3경기 + 본선 7경기 = 총 10경기를 완벽하게 승리한 것은 그랜드 슬램 역사상 전무후무한 기록입니다. 결승전에서 동갑내기 레일라 페르난데즈를 꺾고 트로피를 들어 올린 순간, 전 세계가 그녀의 이름을 외쳤습니다. 하지만 그 '기적'은 오히려 그녀에게 큰 짐이 되었습니다.
            </p>

            <h2 id="injury-struggles">부상과의 싸움</h2>
            <p>
              우승 이후 그녀는 손목, 발목, 허리 등 여러 부상에 시달렸습니다. 급격한 주목과 일정, 그리고 더 높은 기대치는 10대 소녀에게 과도한 부담이었습니다. 하지만 그녀는 포기하지 않았습니다. 재활과 휴식을 통해 다시 일어설 준비를 하고 있습니다.
            </p>

            <h2 id="comeback">재도약을 향해</h2>
            <p>
              "나는 여전히 배우고 있다"는 그녀의 말처럼, 엠마는 아직 젊고 발전 가능성이 무궁무진합니다. 한 번의 우승이 전부가 아닙니다. 그녀가 다시 메이저 무대에서 빛나는 날을 기대합니다.
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              신데렐라 스토리는 아직 끝나지 않았습니다. 엠마 라두카누의 다음 챕터를 함께 응원합니다.
            </p>`
  },
  // === 전략 글들 ===
  {
    slug: 'tennis-strategy-beat-pusher',
    title: '일명 \'푸셔(Pusher)\'를 이기는 5가지 전략',
    description: '실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. 인내심을 유지하며 결정적인 찬스를 만드는 푸셔 공략 가이드.',
    keywords: ['테니스 전술', '푸셔', 'Pusher', '연타', '멘탈 관리'],
    toc: [
      { id: 'intro', text: '푸셔란 무엇인가?', depth: 2 },
      { id: 'strategy-1', text: '전략 1: 짧은 공으로 끌어내기', depth: 2 },
      { id: 'strategy-2', text: '전략 2: 네트 플레이로 압박', depth: 2 },
      { id: 'strategy-3', text: '전략 3: 각도 활용', depth: 2 },
      { id: 'mental', text: '멘탈 게임: 인내가 답', depth: 2 },
    ],
    faqs: [
      {
        q: '푸셔를 상대할 때 가장 흔한 실수는?',
        a: '조급해져서 무리한 파워샷을 시도하다 실수하는 것입니다. 푸셔는 상대의 실수를 기다리는 스타일이므로, 인내심을 잃으면 그들의 함정에 빠집니다.'
      },
    ],
    content: `<h2 id="intro">푸셔란 무엇인가?</h2>
            <p>
              푸셔(Pusher)는 강력한 위너보다는 안정적인 리턴으로 공을 계속 넘기는 스타일의 선수를 말합니다. 그들은 상대의 실수를 유도하며 끈질기게 랠리를 이어갑니다. 동호인 수준에서 가장 많이 마주치는 유형이며, 대응 전략 없이는 매우 답답한 상대입니다.
            </p>

            <h2 id="strategy-1">전략 1: 짧은 공으로 끌어내기</h2>
            <p>
              푸셔는 베이스라인에서 편안하게 수비합니다. 드롭샷이나 짧은 슬라이스로 그들을 네트 앞으로 끌어내면, 그들의 리듬이 깨집니다. 움직임이 많아질수록 푸셔의 정확도는 떨어집니다.
            </p>

            <h2 id="strategy-2">전략 2: 네트 플레이로 압박</h2>
            <p>
              좋은 어프로치 샷 후 네트로 전진하세요. 푸셔는 패싱샷보다 로브를 선호하는 경우가 많으므로, 오버헤드 스매싱 기회를 얻을 수 있습니다.
            </p>

            <h2 id="strategy-3">전략 3: 각도 활용</h2>
            <p>
              단순히 깊게 보내는 것만으로는 부족합니다. 크로스 코트 앵글샷으로 푸셔를 코트 밖으로 끌어낸 뒤, 반대편 오픈 코트로 위너를 꽂으세요.
            </p>

            <h2 id="mental">멘탈 게임: 인내가 답</h2>
            <p>
              푸셔와의 경기는 멘탈 게임입니다. 조급해하지 마세요. 기회가 올 때까지 실수 없이 기다리는 것이 승리의 열쇠입니다.
            </p>`
  },
];

console.log(`Generating ${remainingPosts.length} blog posts...`);

const baseDir = path.join(__dirname, '../src/app/blog');

remainingPosts.forEach(post => {
  const filePath = path.join(baseDir, post.slug, 'page.tsx');

  if (fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, generateBlogContent(post), 'utf8');
    console.log(`✅ Updated: ${post.slug}`);
  }
});

console.log('=== Bulk Update Complete ===');
