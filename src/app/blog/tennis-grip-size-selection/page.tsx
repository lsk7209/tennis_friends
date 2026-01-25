import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "그립 두께와 사이즈 선택의 중요성",
  description: "너무 얇으면 라켓이 돌고, 너무 두꺼우면 손목이 아픕니다. 정확한 그립 사이즈 측정법과 튜닝 팁.",
  keywords: ["테니스 장비", "그립 사이즈", "라켓 그립", "부상 방지", "튜닝"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-grip-size-selection',
  },
  openGraph: {
    title: "그립 두께와 사이즈 선택의 중요성",
    description: "너무 얇으면 라켓이 돌고, 너무 두꺼우면 손목이 아픕니다. 정확한 그립 사이즈 측정법과 튜닝 팁.",
    url: 'https://tennisfriends.co.kr/blog/tennis-grip-size-selection',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "그립 두께와 사이즈 선택의 중요성",
    description: "너무 얇으면 라켓이 돌고, 너무 두꺼우면 손목이 아픕니다. 정확한 그립 사이즈 측정법과 튜닝 팁.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '그립 사이즈 종류와 표기법', depth: 2 },
  { id: 'key-point-2', text: '집에서 하는 간단 측정법 (지함 측정법)', depth: 2 },
  { id: 'key-point-3', text: '큰 그립 vs 작은 그립, 무엇이 나쁠까?', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "그립 사이즈가 두 사이즈(예: 2그립 vs 3그립) 사이에서 고민될 때는?",
    a: "무조건 **작은 사이즈**를 선택하는 것이 원칙입니다. 작은 그립은 오버그립을 감아 두께를 늘릴 수 있지만, 큰 그립은 깎을 수 없기 때문입니다. 또한 최근 추세는 스핀을 주기 편한 얇은 그립을 선호합니다."
  },
  {
    q: "내 손에 맞는 그립 사이즈는 어떻게 확인하나요?",
    a: "라켓을 이스턴 포핸드 그립(악수하듯)으로 잡았을 때, 약지와 손바닥(엄지 뿌리 부분) 사이에 **새끼손가락 하나가 딱 들어갈 정도**의 공간이 남는 것이 정석입니다."
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
            <Badge key="그립 사이즈" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">그립 사이즈</Badge>
            <Badge key="라켓 그립" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">라켓 그립</Badge>
            <Badge key="부상 방지" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">부상 방지</Badge>
            <Badge key="튜닝" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">튜닝</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            그립 두께와 사이즈 선택의 중요성
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            너무 얇으면 라켓이 돌고, 너무 두꺼우면 손목이 아픕니다. 정확한 그립 사이즈 측정법과 튜닝 팁.
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

      <Article slug="tennis-grip-size-selection" date="2026-01-24" title="그립 두께와 사이즈 선택의 중요성" excerpt="너무 얇으면 라켓이 돌고, 너무 두꺼우면 손목이 아픕니다. 정확한 그립 사이즈 측정법과 튜닝 팁.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-2xl mb-8 border border-orange-100 dark:border-orange-800">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                라켓의 무게와 헤드 사이즈는 꼼꼼히 따지면서도, 정작 손에 닿는 <strong>'그립 사이즈'</strong>는 대충 결정하는 경우가 많습니다. 하지만 맞지 않는 그립은 조작성을 떨어뜨릴 뿐만 아니라 테니스 엘보와 손목 부상의 직접적인 원인이 됩니다. 나에게 딱 맞는 그립 사이즈를 찾는 법을 정리해 드립니다.
              </p>
            </div>

            <h2 id="key-point-1">그립 사이즈 종류와 표기법</h2>
            <p>
              테니스 라켓 그립은 인치 단위의 둘레로 표기됩니다. 보통 1/8인치 간격으로 나뉩니다.
            </p>
            <div className="flex flex-wrap gap-3 my-4">
              <Badge className="bg-slate-200 text-slate-800">1호 (4 1/8)</Badge>
              <Badge className="bg-slate-200 text-slate-800">2호 (4 1/4)</Badge>
              <Badge className="bg-slate-200 text-slate-800">3호 (4 3/8)</Badge>
              <Badge className="bg-slate-200 text-slate-800">4호 (4 1/2)</Badge>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">※ 한국 성인 남성은 주로 2호를, 여성은 1호를 가장 많이 사용합니다.</p>

            <h2 id="key-point-2">집에서 하는 간단 측정법 (지함 측정법)</h2>
            <p>
              라켓 없이도 본인의 손 크기를 측정할 수 있는 두 가지 방법이 있습니다.
            </p>
            <div className="space-y-4 my-6">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border">
                <h4 className="font-bold mb-1">1. 검지손가락 테스트</h4>
                <p className="text-sm">라켓을 잡았을 때, 약지 손가락 끝과 손바닥 사이에 반대쪽 검지손가락 하나가 쏙 들어갈 정도의 공간이 있다면 적당한 사이즈입니다.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border">
                <h4 className="font-bold mb-1">2. 자 활용법</h4>
                <p className="text-sm">손바닥 중앙의 두 번째 가로선부터 약지 손가락 끝까지의 길이를 재보세요. 그 길이가 곧 당신의 그립 사이즈(인치)입니다.</p>
              </div>
            </div>

            <h2 id="key-point-3">큰 그립 vs 작은 그립, 무엇이 나쁠까?</h2>
            <p>
              둘 다 좋지 않지만, 발생하는 부작용이 다릅니다.
            </p>
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li><strong>그립이 너무 작을 때:</strong> 라켓이 손 안에서 돌아가지 않게 하려고 과도한 힘을 주게 되어 손목과 팔꿈치에 무리가 갑니다.</li>
              <li><strong>그립이 너무 클 때:</strong> 손목 스냅을 활용하기 어렵고 발리 등 정교한 조작이 힘들어집니다.</li>
            </ul>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4 italic text-sm">
              TIP: 사이즈가 애매하다면 <strong>작은 쪽</strong>을 선택하세요. 오버그립이나 열수축 튜브를 통해 크기를 키울 수는 있지만, 이미 큰 그립을 줄이는 것은 거의 불가능하기 때문입니다.
            </div>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              그립은 라켓과 내 몸이 만나는 유일한 '대화 통로'입니다. 내 손에 착 감기는 적정 사이즈의 그립은 샷의 자신감을 획기적으로 높여줄 것입니다. 지금 바로 본인의 라켓을 쥐고 검지손가락 하나가 들어가는지 확인해 보세요!
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
            currentSlug="tennis-grip-size-selection"
            category="테니스 장비"
            tags={["테니스 장비", "그립 사이즈", "라켓 그립", "부상 방지", "튜닝"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
