import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "하이브리드 스트링 셋업 가이드 (폴리 vs 인조쉽)",
  description: "선수들이 사랑하는 믹스 앤 매치. 폴리 스트링과 인조쉽/천연쉽을 조합하여 내구성, 스핀, 타구감을 모두 잡는 하이브리드 세팅법.",
  keywords: ["테니스 장비", "하이브리드 스트링", "폴리", "인조쉽", "커스텀"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-hybrid-string-setup',
  },
  openGraph: {
    title: "하이브리드 스트링 셋업 가이드 (폴리 vs 인조쉽)",
    description: "선수들이 사랑하는 믹스 앤 매치. 폴리 스트링과 인조쉽/천연쉽을 조합하여 내구성, 스핀, 타구감을 모두 잡는 하이브리드 세팅법.",
    url: 'https://tennisfriends.co.kr/blog/tennis-hybrid-string-setup',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "하이브리드 스트링 셋업 가이드 (폴리 vs 인조쉽)",
    description: "선수들이 사랑하는 믹스 앤 매치. 폴리 스트링과 인조쉽/천연쉽을 조합하여 내구성, 스핀, 타구감을 모두 잡는 하이브리드 세팅법.",
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
    q: "하이브리드 세팅은 스트링 수명이 더 짧나요?",
    a: "보통 그렇습니다. 두 스트링의 성질(재질, 굴절률)이 달라 서로를 갉아먹는 경향이 있습니다. 특히 천연 거트와 폴리를 섞으면 천연 거트가 폴리의 날카로운 단면에 빨리 끊어지기도 합니다. 하지만 그만큼의 퍼포먼스 가치가 있습니다."
  },
  {
    q: "메인과 크로스의 텐션을 다르게 해야 하나요?",
    a: "일반적으로 가로(Cross)를 세로(Main)보다 2파운드 정도 낮게 매는 것을 권장합니다. 이는 라켓 프레임의 변형을 막고 베드(Bed)의 유연성을 높여주기 때문입니다."
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
            <Badge key="하이브리드 스트링" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">하이브리드 스트링</Badge>
            <Badge key="폴리" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">폴리</Badge>
            <Badge key="인조쉽" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">인조쉽</Badge>
            <Badge key="커스텀" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">커스텀</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            하이브리드 스트링 셋업 가이드 (폴리 vs 인조쉽)
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            선수들이 사랑하는 믹스 앤 매치. 폴리 스트링과 인조쉽/천연쉽을 조합하여 내구성, 스핀, 타구감을 모두 잡는 하이브리드 세팅법.
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

      <Article slug="tennis-hybrid-string-setup" date="2026-01-24" title="하이브리드 스트링 셋업 가이드 (폴리 vs 인조쉽)" excerpt="선수들이 사랑하는 믹스 앤 매치. 폴리 스트링과 인조쉽/천연쉽을 조합하여 내구성, 스핀, 타구감을 모두 잡는 하이브리드 세팅법.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-2xl mb-8 border border-purple-100 dark:border-purple-800">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                과거에는 하나의 스트링으로 라켓 전체를 매는 것이 당연했습니다. 하지만 최근 프로와 동호인들 사이에서는 두 종류의 스트링을 섞어 쓰는 <strong>'하이브리드(Hybrid) 세팅'</strong>이 대세로 자리 잡았습니다. 폴리의 내구성과 천연 거트의 부드러움을 동시에 잡을 수 있는 마법 같은 조합, 하이브리드에 대해 알아봅니다.
              </p>
            </div>

            <h2 id="key-point-1">왜 하이브리드를 선택하는가?</h2>
            <p>
              하이브리드 세팅의 핵심은 <strong>'단점 보완'</strong>입니다.
            </p>
            <ul className="space-y-3 my-4">
              <li className="flex gap-2">
                <span className="text-purple-500 font-bold">●</span>
                <span><strong>폴리 스트링:</strong> 스핀과 내구성은 좋지만 딱딱하여 팔에 무리가 갈 수 있습니다.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500 font-bold">●</span>
                <span><strong>인조/천연 거트:</strong> 부드럽고 파워가 좋지만 내구성이 약하고 스핀량이 적습니다.</span>
              </li>
            </ul>
            <p>이 둘을 섞으면 부드러운 타구감과 강력한 스핀을 동시에 얻을 수 있습니다.</p>

            <h2 id="key-point-2">메인(Main) vs 크로스(Cross): 어디에 무엇을 맬까?</h2>
            <p>
              라켓의 성능은 80% 이상 세로줄(Main)에 의해 결정됩니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <h4 className="font-bold text-indigo-600 mb-2">1. 폴리(Main) + 부드러운 줄(Cross)</h4>
                <p className="text-sm">나달이나 조코비치가 선호하는 방식입니다. 강력한 스핀과 컨트롤을 유지하면서도 팔에 오는 충격을 완화합니다.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <h4 className="font-bold text-green-600 mb-2">2. 부드러운 줄(Main) + 폴리(Cross)</h4>
                <p className="text-sm">페더러가 사용했던 방식입니다. 극강의 터치감과 파워를 지향하며, 폴리가 가로에서 세로줄의 움직임을 도와 스핀을 만듭니다.</p>
              </div>
            </div>

            <h2 id="key-point-3">추천하는 하이브리드 조합</h2>
            <p>
              처음 시도하신다면 가장 검증된 조합으로 시작해 보세요.
            </p>
            <Card className="my-6">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-bold">가성비 조합</span>
                    <span className="text-sm">알루파워 + NXT / 럭실론 + 바이오로직</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-bold">퍼포먼스 조합</span>
                    <span className="text-sm">RPM 블라스트 + 인조거트</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">플래그십 조합</span>
                    <span className="text-sm">천연 거트 + 알루파워 (Champions Choice)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              하이브리드 세팅은 당신의 라켓을 커스텀 하는 가장 즐거운 방법입니다. 평소 팔이 아파 폴리를 포기했던 분들이나, 인조거트의 스핀량이 아쉬웠던 분들에게 하이브리드는 완벽한 해답이 될 것입니다. 당신의 플레이 스타일에 맞는 '황금 비율'을 찾아보세요.
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
            currentSlug="tennis-hybrid-string-setup"
            category="테니스 장비"
            tags={["테니스 장비", "하이브리드 스트링", "폴리", "인조쉽", "커스텀"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
