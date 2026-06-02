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
    canonical: 'https://www.tennisfrens.com/blog/tennis-hybrid-string-setup',
  },
  openGraph: {
    title: "하이브리드 스트링 셋업 가이드 (폴리 vs 인조쉽)",
    description: "선수들이 사랑하는 믹스 앤 매치. 폴리 스트링과 인조쉽/천연쉽을 조합하여 내구성, 스핀, 타구감을 모두 잡는 하이브리드 세팅법.",
    url: 'https://www.tennisfrens.com/blog/tennis-hybrid-string-setup',
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
  { id: 'introduction', text: '들어가며: 스트링의 연금술, 하이브리드', depth: 2 },
  { id: 'hybrid-science', text: '1. 하이브리드의 과학: 왜 굳이 두 번 매는가?', depth: 2 },
  { id: 'main-vs-cross', text: '2. 세로(Main) vs 가로(Cross): 80%의 법칙과 반전의 미학', depth: 2 },
  { id: 'champions-setup', text: '3. 챔피언들의 선택: 페더러식 vs 조코비치식 셋업 비교', depth: 2 },
  { id: 'lubrication-friction', text: '4. 윤활과 마찰: 스냅백을 극대화하는 조합의 비밀', depth: 2 },
  { id: 'longevity-tips', text: '5. 수명 연장의 기술: 고가의 스트링 유지를 위한 관리법', depth: 2 },
  { id: 'conclusion', text: '결론: 당신만의 골디락스 조합을 찾아서', depth: 2 },
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

      <Article showHeader={false} slug="tennis-hybrid-string-setup" date="2026-01-24" title="하이브리드 스트링 셋업 가이드 (폴리 vs 인조쉽)" excerpt="선수들이 사랑하는 믹스 앤 매치. 폴리 스트링과 인조쉽/천연쉽을 조합하여 내구성, 스핀, 타구감을 모두 잡는 하이브리드 세팅법.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며: 스트링의 연금술, 하이브리드</h2>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-2xl mb-8 border border-purple-100 dark:border-purple-800">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0 text-center">
                과거에는 하나의 스트링으로 라켓 전체를 매는 것이 당연했습니다. 하지만 최근 프로들 사이에서는 두 종류의 스트링을 섞어 쓰는 <strong>'하이브리드(Hybrid) 세팅'</strong>이 표준으로 자리 잡았습니다. 폴리의 내구성과 천연 거트의 마법 같은 타구감을 동시에 잡는 연금술, 하이브리드에 대해 깊이 알아봅니다.
              </p>
            </div>

            <h2 id="hybrid-science">1. 하이브리드의 과학: 왜 굳이 두 번 매는가?</h2>
            <p>
              하이브리드 세팅은 단순히 두 줄을 섞는 행위가 아니라, 서로 상충하는 물리적 성질을 융합하는 디자인 과정입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-5 border-t-4 border-indigo-500 bg-white dark:bg-slate-900 shadow-sm rounded-b-xl">
                <h4 className="font-bold text-indigo-600 mb-2">폴리에스터 (Polyester)</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-0">안정적인 컨트롤과 강력한 스핀을 제공하지만, 탄성이 낮아 팔에 충격을 그대로 전달합니다.</p>
              </div>
              <div className="p-5 border-t-4 border-amber-500 bg-white dark:bg-slate-900 shadow-sm rounded-b-xl">
                <h4 className="font-bold text-amber-600 mb-2">천연 거트 (Natural Gut)</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-0">최상의 탄성과 부드러움을 자랑하지만, 내구성이 약하고 가격이 매우 비쌉니다.</p>
              </div>
            </div>
            <p className="text-sm">이 둘을 조합하면 폴리의 **컨트롤**과 천연 거트의 **안락함**을 7:3 혹은 4:6의 비율로 사용자가 직접 튜닝할 수 있게 됩니다.</p>

            <h2 id="main-vs-cross">2. 세로(Main) vs 가로(Cross): 80%의 법칙과 반전의 미학</h2>
            <p>
              라켓의 최종 타구감 중 약 80%는 세로줄(Main)에 의해 결정됩니다. 따라서 어떤 줄을 메인에 두느냐가 라켓의 성격 자체를 규정합니다.
            </p>
            <div className="space-y-4 my-6">
              <div className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800 p-5 rounded-xl">
                <Badge className="bg-blue-600">Standard Poly-Main</Badge>
                <div>
                  <h5 className="font-bold text-sm mb-1">메인: 폴리 + 가로: 천연/인조거트</h5>
                <p className="text-xs text-gray-600">스핀과 내구성이 우선인 공격적 성향. 가로줄이 완충 역할을 하여 폴리 특유의 딱딱함을 상쇄합니다. (주로 조코비치, 나달 방식)</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800 p-5 rounded-xl">
                <Badge className="bg-purple-600">Gut-Main (Federer Style)</Badge>
                <div>
                  <h5 className="font-bold text-sm mb-1">메인: 천연/인조거트 + 가로: 폴리</h5>
                  <p className="text-xs text-gray-600">최상의 타구감과 비거리가 우선인 정교한 성향. 가로의 폴리 스트링이 세로의 천연 거트가 부드럽게 미끄러지도록 도와 스핀을 유도합니다.</p>
                </div>
              </div>
            </div>

            <h2 id="champions-setup">3. 챔피언들의 선택: 페더러식 vs 조코비치식 셋업 비교</h2>
            <p>
              역대 최고의 선수들도 하이브리드 세팅에 대해서는 서로 다른 철학을 보여줍니다.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs border-collapse font-light">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 font-bold">
                    <th className="border p-2">구분</th>
                    <th className="border p-2">로저 페더러 (Classic)</th>
                    <th className="border p-2">노박 조코비치 (Modern)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 font-bold bg-gray-50 dark:bg-gray-900">Main (세로)</td>
                    <td className="border p-2">Wilson Natural Gut (천연)</td>
                    <td className="border p-2">Luxilon ALU Power Rough (폴리)</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-bold bg-gray-50 dark:bg-gray-900">Cross (가로)</td>
                    <td className="border p-2">Luxilon ALU Power Rough (폴리)</td>
                    <td className="border p-2">Babolat VS Gut (천연)</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-bold bg-gray-50 dark:bg-gray-900">특징</td>
                    <td className="border p-2">극강의 Touch & Power</td>
                    <td className="border p-2">무시무시한 Spin & Control</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="lubrication-friction">4. 윤활과 마찰: 스냅백을 극대화하는 조합의 비밀</h2>
            <p>
              하이브리드 세팅이 단일 폴리보다 더 나은 스핀을 제공할 수 있는 이유는 스트링 사이의 **'윤활 작용'** 때문입니다.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-2xl border-l-4 border-blue-500 my-6">
              <p className="text-sm leading-relaxed mb-0">
                천연 거트는 표면이 매끄럽고 기름기가 있어 폴리 스트링 위에서 매우 잘 미끄러집니다. 임팩트 시 메인 스트링이 옆으로 밀렸다가 제자리로 돌아오는 **스냅백(Snapback)** 거리가 단일 폴리 조합보다 길어질 수 있으며, 이는 곧 공에 더 많은 분당 회전수(RPM)를 부여합니다.
              </p>
            </div>

            <h2 id="longevity-tips">5. 수명 연장의 기술: 고가의 스트링 유지를 위한 관리법</h2>
            <p>
              천연 거트가 포함된 하이브리드 세팅은 관리가 까다롭습니다. 당신의 지갑을 지키는 3가지 원칙입니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="bg-white dark:bg-slate-900 p-4 rounded border shadow-sm">
                <h4 className="font-bold text-xs mb-2">습도 차단</h4>
                <p className="text-[10px] text-gray-500">천연 거트는 단백질입니다. 비 오는 날이나 습한 날에는 사용을 자제하고 가방에 방습제를 넣으세요.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border shadow-sm">
                <h4 className="font-bold text-xs mb-2">프리스트레칭</h4>
                <p className="text-[10px] text-gray-500">줄을 맬 때 미리 늘려주는 작업을 하면 초기 텐션 급락을 막아 교체 주기를 늦출 수 있습니다.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border shadow-sm">
                <h4 className="font-bold text-xs mb-2">String Savers</h4>
                <p className="text-[10px] text-gray-500">줄이 겹치는 부위에 작은 플라스틱 피스(String savers)를 끼우면 마찰에 의한 단절을 지연시킵니다.</p>
              </div>
            </div>

            <h2 id="conclusion">결론: 당신만의 골디락스 조합을 찾아서</h2>
            <p className="text-lg leading-relaxed">
              하이브리드 세팅은 테니스 라켓을 당신의 신체 일부로 만드는 최종 공정입니다. 처음에는 관리가 편한 **인조쉽 + 폴리** 조합으로 시작하여, 점차 비중을 조절하며 나만의 타구감을 찾아보세요. 단 한 번의 스트링 작업으로 당신의 테니스는 '장비 탓'에서 자유로워질 것입니다.
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
                      <Link href="/players" className="group flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🏆</span>
                        <span className="font-medium">선수 프로필 더보기</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/ntrp-test" className="group flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
                      <a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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
