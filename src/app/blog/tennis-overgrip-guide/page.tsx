import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "오버그립 교체 주기와 종류(건식/습식) 추천",
  description: "손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.",
  keywords: ["테니스 장비", "오버그립", "그립 테이프", "손땀", "용품 추천"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-overgrip-guide',
  },
  openGraph: {
    title: "오버그립 교체 주기와 종류(건식/습식) 추천",
    description: "손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.",
    url: 'https://tennisfriends.co.kr/blog/tennis-overgrip-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "오버그립 교체 주기와 종류(건식/습식) 추천",
    description: "손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '핵심 포인트 1', depth: 2 },
  { id: 'key-point-2', text: '핵심 포인트 2', depth: 2 },
  { id: 'key-point-3', text: '핵심 포인트 3', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "흰색 그립 말고 유색 그립은 성능이 다른가요?",
    a: "미세하게 다릅니다. 대체로 흰색 오버그립이 색소가 들어가지 않아 가장 순수한 타키(Tacky)함과 흡수력을 보여줍니다. 프로 선수들이 유독 흰색 그립을 선호하는 이유이기도 합니다."
  },
  {
    q: "그립을 감을 때 겹치는 정도는 어느 정도가 좋나요?",
    a: "보통 1/8인치(약 3mm) 정도 겹치는 것이 표준입니다. 너무 많이 겹치면 그립이 울퉁불퉁해지고 두꺼워져 면을 느끼기 어려워집니다."
  },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge key="테니스 장비" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스 장비</Badge>
            <Badge key="오버그립" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">오버그립</Badge>
            <Badge key="그립 테이프" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">그립 테이프</Badge>
            <Badge key="손땀" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">손땀</Badge>
            <Badge key="용품 추천" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">용품 추천</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            오버그립 교체 주기와 종류(건식/습식) 추천
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.
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

      <Article slug="tennis-overgrip-guide" date="2026-01-24" title="오버그립 교체 주기와 종류(건식/습식) 추천" excerpt="손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-2xl mb-8 border border-emerald-100 dark:border-emerald-800 text-center">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                테니스 라켓에서 가장 자주 교체해야 하는 소모품은 무엇일까요? 스트링보다 더 자주, 어쩌면 매 경기마다 신경 써야 할 아이템이 바로 <strong>오버그립(Overgrip)</strong>입니다. 오버그립 하나만 잘 골라도 '손에서 라켓이 빠질 것 같은 불안함'에서 해방될 수 있습니다.
              </p>
            </div>

            <h2 id="key-point-1">종류별 특징: 타키(Tacky) vs 드라이(Dry)</h2>
            <p>
              본인의 손에 땀이 얼마나 나는지에 따라 선택이 완전히 갈립니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-5 border-t-4 border-blue-500 bg-white dark:bg-slate-900 shadow-sm rounded-b-xl">
                <h4 className="font-bold text-blue-600 mb-2">● 타키 그립 (Tacky)</h4>
                <p className="text-sm leading-relaxed">손에 착 달라붙는 쫀득한 느낌이 특징입니다. 땀이 적거나 보통인 분들에게 최상의 그립감을 제공합니다. (예: 윌슨 프로 오버그립)</p>
              </div>
              <div className="p-5 border-t-4 border-slate-400 bg-white dark:bg-slate-900 shadow-sm rounded-b-xl">
                <h4 className="font-bold text-slate-600 mb-2">● 드라이 그립 (Dry)</h4>
                <p className="text-sm leading-relaxed">천 소재와 비슷하며 땀을 흡수할수록 더 쫀득해집니다. 손에 땀이 많은 '다한증' 유저들의 필수 아이템입니다. (예: 투나 그립)</p>
              </div>
            </div>

            <h2 id="key-point-2">교체 주기: 언제 바꿔야 할까?</h2>
            <p>
              많은 분이 그립이 닳아서 가루가 날릴 때까지 사용하지만, 이는 부상의 원인이 됩니다.
            </p>
            <ul className="space-y-3 my-4">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">!</span>
                <span><strong>색상 변색:</strong> 흰색 그립이 회색이나 갈색으로 변했다면 이미 위생과 성능을 잃은 상태입니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">!</span>
                <span><strong>광택 발생:</strong> 그립 표면이 매끈해지며 빛이 나기 시작하면 마찰력이 사라진 것입니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">!</span>
                <span><strong>권장 주기:</strong> 주 2~3회 테니스를 친다면 최소 2주에 한 번은 교체하는 것이 좋습니다.</span>
              </li>
            </ul>

            <h2 id="key-point-3">초보자를 위한 그립 감는 꿀팁</h2>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>오버랩(Overlap):</strong> 약 2~3mm 정도씩 겹치게 감는 것이 표준입니다. 두껍게 감고 싶다면 더 많이 겹치세요.</li>
                <li><strong>텐션 유지:</strong> 감는 동안 그립을 살짝 당겨서 팽팽함을 유지해야 나중에 밀리지 않습니다.</li>
                <li><strong>마무리:</strong> 동봉된 마감 테이프를 붙이기 전, 그립 끝부분을 사선으로 잘라주면 훨씬 깔끔하게 마무리됩니다.</li>
              </ol>
            </div>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              오버그립은 단돈 몇 천 원으로 장비의 성능을 비약적으로 높일 수 있는 최고의 튜닝입니다. 낡은 그립을 버리고 새 그립을 감는 것만으로도 여러분의 샷은 훨씬 정교해질 것입니다. 오늘 가방 속 라켓의 그립 상태를 확인해 보세요!
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
            currentSlug="tennis-overgrip-guide"
            category="테니스 장비"
            tags={["테니스 장비", "오버그립", "그립 테이프", "손땀", "용품 추천"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
