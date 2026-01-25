import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "바람 부는 날 테니스 잘 치는 법 | 서브 토스부터 멘탈까지",
  description: "강풍을 이기는 풋워크와 타점 조절. 바람을 이용하는 서브 토스 수정법과 엔드 체인지 멘탈 관리까지, 악천후를 기회로 만드는 실전 노하우.",
  keywords: ["테니스 팁", "바람", "날씨", "풋워크", "야외 테니스", "서브 토스", "멘탈 관리"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-windy-condition-tips',
  },
  openGraph: {
    title: "바람 부는 날 테니스 잘 치는 법 | 서브 토스부터 멘탈까지",
    description: "강풍을 이기는 풋워크와 타점 조절. 바람을 이용하는 서브 토스 수정법과 엔드 체인지 멘탈 관리까지, 악천후를 기회로 만드는 실전 노하우.",
    url: 'https://tennisfriends.co.kr/blog/tennis-windy-condition-tips',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "바람 부는 날 테니스 잘 치는 법 | 서브 토스부터 멘탈까지",
    description: "강풍을 이기는 풋워크와 타점 조절. 바람을 이용하는 서브 토스 수정법과 엔드 체인지 멘탈 관리까지, 악천후를 기회로 만드는 실전 노하우.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'footwork-basics', text: "바람을 대하는 기본: '여유'와 '잔발'", depth: 2 },
  { id: 'serve-toss', text: '서브 토스 수정: "낮게, 그리고 빠르게"', depth: 2 },
  { id: 'wind-direction', text: '맞바람(Against) vs 등바람(With) 전술', depth: 2 },
  { id: 'mental-side-change', text: '엔드 체인지 심리학: "코트를 탓하지 마라"', depth: 2 },
  { id: 'gear-check', text: '장비 체크: 텐션과 댐프너', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "바람이 많이 부는 날 서브 위력을 유지하려면?",
    a: "위력보다는 '성공률'에 집중해야 합니다. 평소보다 토스를 10~20cm 낮게 올리고, 스윙 템포를 빠르게 가져가세요. 플랫보다는 슬라이스 서브가 바람을 가르고 들어가기 훨씬 효과적입니다."
  },
  {
    q: "맞바람(Against the Wind) 상황에서의 필승 전략은?",
    a: "맞바람에서는 공이 짧아지므로 **드롭샷**이 매우 위력적입니다. 공이 네트만 넘어가면 바람이 공을 멈춰 세우기 때문입니다. 반대로 상대의 공도 짧아지기 때문에, 베이스라인에 머물지 말고 네트 앞으로 과감하게 대시하여 발리로 마무리하세요."
  },
  {
    q: "바람 부는 날 텐션 조정은 어떻게 하나요?",
    a: "평소보다 **1~2파운드 낮게** 매는 것을 추천합니다. 바람 때문에 공이 밀려 정확한 스윗스팟에 맞지 않을 확률이 높으므로, 텐션을 낮춰 반발력과 관용성(Sweet Spot)을 확보하는 것이 유리합니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge key="테니스 팁" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스 팁</Badge>
            <Badge key="악천후 공략" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">악천후 공략</Badge>
            <Badge key="서브 토스" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">서브 토스</Badge>
            <Badge key="멘탈 관리" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">멘탈 관리</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            바람 부는 날 테니스 잘 치는 법
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            불규칙한 바람은 누구에게나 fair하지 않습니다. 바람을 이용하는 풋워크, 서브 토스 수정, 그리고 심리적 우위를 점하는 실전 가이드.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">6분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2026-01-24 업데이트</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="tennis-windy-condition-tips" date="2026-01-24" title="바람 부는 날 테니스 잘 치는 법 | 서브 토스부터 멘탈까지" excerpt="불규칙한 바람은 누구에게나 fair하지 않습니다. 바람을 이용하는 풋워크, 타점 조절, 그리고 심리적 우위를 점하는 방법.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-2xl mb-8 border border-sky-100 dark:border-sky-800 shadow-inner">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                테니스는 야외 스포츠이며, 바람은 경기의 '제3의 선수'입니다. 아무리 완벽한 폼을 가졌어도 불어오는 강풍 앞에서는 밸런스가 무너질 수밖에 없습니다. 하지만 바람을 원망하는 대신 이용할 줄 안다면, 당신은 실력 이상의 결과를 만들어낼 수 있습니다. 바람 부는 날 코트에서 승리하는 실전 전술을 소개합니다.
              </p>
            </div>

            <h2 id="footwork-basics">바람을 대하는 기본: '여유'와 '잔발'</h2>
            <p>
              바람이 불면 공의 궤적은 상하좌우로 춤을 춥니다. 평소처럼 미리 자리를 잡고 기다리는 것만으로는 부족합니다.
            </p>
            <ul className="list-none space-y-3 my-4">
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1 font-bold">●</span>
                <div>
                  <strong>스몰 스텝 (Micro Adjustment):</strong> 큰 보폭으로 한 번에 이동하기보다, 공을 치기 직전까지 발을 종종거리며(잔발) 타점을 조정해야 합니다. 프로 선수들이 바람 부는 날 유난히 발을 많이 구르는 이유입니다.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1 font-bold">●</span>
                <div>
                  <strong>마진 확보 (Margin of Safety):</strong> 라인 끝을 노리는 공격적인 샷은 자살행위입니다. 코트 중앙에서 1~2미터 안쪽을 겨냥하세요. 바람에 1미터는 쉽게 밀려나갈 수 있음을 계산에 넣어야 합니다.
                </div>
              </li>
            </ul>

            <h2 id="serve-toss">서브 토스 수정: "낮게, 그리고 빠르게"</h2>
            <p>
              서브는 바람의 영향을 가장 많이 받는 샷입니다. 공이 공중에 오래 머물수록 흔들림이 커지기 때문입니다.
            </p>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 my-6 shadow-sm">
              <h4 className="font-bold text-sky-600 mb-2">⚡ 로우 토스 서브 (Low Toss Serve)</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">
                평소보다 토스를 <strong>15cm~20cm 낮게</strong> 올리세요. 토스가 정점에 도달하자마자 바로 타격하는 빠른 리듬이 필요합니다. 처음에는 타이밍이 어색할 수 있으니 웜업 때 미리 연습해둬야 합니다.
              </p>
            </div>

            <h2 id="wind-direction">맞바람(Against) vs 등바람(With) 전술</h2>
            <p>
              바람의 방향에 따라 구사해야 할 샷의 종류가 완전히 달라집니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-xl bg-red-50/50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">⬇ 맞바람 (Against)</h4>
                <ul className="text-sm list-disc pl-4 space-y-1">
                  <li>공이 짧아지므로 <strong>드롭샷</strong>이 매우 효과적입니다.</li>
                  <li>탑스핀보다는 <strong>플랫</strong>하게 때려야 바람을 뚫고 나갑니다.</li>
                  <li>상대 공이 짧아지니 네트 대시를 자주 하세요.</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">⬆ 등바람 (With)</h4>
                <ul className="text-sm list-disc pl-4 space-y-1">
                  <li>공이 밖으로 나가기 쉽습니다. 파워를 70%로 줄이세요.</li>
                  <li><strong>헤비 탑스핀</strong>을 걸어 공을 코트 안으로 떨어뜨려야 합니다.</li>
                  <li>서브 후 네트 대시는 위험합니다. 상대 리턴이 길어지기 때문입니다.</li>
                </ul>
              </div>
            </div>

            <h2 id="mental-side-change">엔드 체인지 심리학: "코트를 탓하지 마라"</h2>
            <p>
              가장 중요한 것은 멘탈입니다. 홀수 게임마다 코트를 바꿀 때(End Change), 우리는 천국(등바람)과 지옥(맞바람)을 오갑니다.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>불리한 코트(맞바람)일 때:</strong> "버티기만 하면 이긴다"는 마음으로 에러를 줄이는 수비적인 운영을 하세요. 이쪽에서 게임을 따내면 승패는 결정 난 것이나 다름없습니다.</li>
              <li><strong>유리한 코트(등바람)일 때:</strong> 방심하다가 자멸하기 쉽습니다. 공격적으로 하되, 절대 베이스라인 아웃을 범하지 않도록 주의하세요.</li>
            </ul>

            <h2 id="gear-check">장비 체크: 텐션과 댐프너</h2>
            <Card className="my-6 bg-slate-50 dark:bg-slate-900">
              <CardContent className="pt-6">
                <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">
                  🔧 바람 부는 날에는 평소보다 <strong>텐션을 1~2파운드 낮추는 것</strong>이 좋습니다.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  바람이 불면 정확한 타점(Sweet Spot)에 맞추기 어렵습니다. 텐션을 낮추면 반발력이 좋아져, 빗맞은 공도 네트를 넘어갈 확률이 높아집니다. 또한, 긴 댐프너(Worm Type)를 사용하여 불규칙한 타구 충격을 줄이는 것도 좋은 팁입니다.
                </p>
              </CardContent>
            </Card>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              프로 선수들조차 바람이 심한 날에는 "이런 날은 테니스가 아니라 누가 더 잘 버티느냐의 싸움"이라고 말합니다. 화려한 샷에 대한 미련을 버리고, 바람이라는 변수를 전술의 일부로 받아들이세요. 상대가 바람을 탓하며 짜증 낼 때, 바람을 이용해 묵묵히 전술을 수행하는 당신이 승자가 될 것입니다.
            </p>

          </div>

          {/* Related Links */}
          <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                관련 자료
              </h3>
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
                    <li>
                      <Link href="/utility/ntrp-test" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🎯</span>
                        <span className="font-medium">NTRP 자가 진단</span>
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
                        <span className="font-medium">ATP 투어</span>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <FAQ items={faqs} />
          <RelatedPosts
            currentSlug="tennis-windy-condition-tips"
            category="테니스 팁"
            tags={["테니스 팁", "바람", "날씨", "풋워크", "야외 테니스", "서브 토스", "멘탈 관리"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
