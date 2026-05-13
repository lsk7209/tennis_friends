import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "테니스 엘보 외의 부상: 손목 및 무릎 통증 관리",
  description: "TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.",
  keywords: ["테니스 건강", "부상 방지", "손목 통증", "무릎 재활", "스트레칭"],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-wrist-knee-pain-care',
  },
  openGraph: {
    title: "테니스 엘보 외의 부상: 손목 및 무릎 통증 관리",
    description: "TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.",
    url: 'https://www.tennisfrens.com/blog/tennis-wrist-knee-pain-care',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "테니스 엘보 외의 부상: 손목 및 무릎 통증 관리",
    description: "TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '손목 통증: TFCC와 스핀의 관계', depth: 2 },
  { id: 'key-point-2', text: '무릎 통증: 하드코트와 슬개건염', depth: 2 },
  { id: 'key-point-3', text: '응급 처치: RICE 법칙', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "손목 보호대는 매일 착용해도 되나요?",
    a: "통증이 있을 때는 운동 중 착용하는 것이 큰 도움이 됩니다. 하지만 평상시에도 계속 의존하면 손목 주변 근육이 약해질 수 있으므로, 재활 운동을 병행하며 점진적으로 착용 시간을 줄이는 것이 좋습니다."
  },
  {
    q: "무릎 보호대도 종류가 많던데 어떤 게 좋나요?",
    a: "슬개건염이 있다면 슬개골 바로 아래를 압박해주는 '슬개골 밴드' 타입이 활동성이 좋고 효과적입니다. 만약 무릎 전체가 불안정하다면 전체를 감싸주는 '니 슬리브'형을 추천합니다."
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
            <Badge key="테니스 건강" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스 건강</Badge>
            <Badge key="부상 방지" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">부상 방지</Badge>
            <Badge key="손목 통증" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">손목 통증</Badge>
            <Badge key="무릎 재활" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">무릎 재활</Badge>
            <Badge key="스트레칭" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">스트레칭</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            테니스 엘보 외의 부상: 손목 및 무릎 통증 관리
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.
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

      <Article showHeader={false} ymylTopic="medical"
      slug="tennis-wrist-knee-pain-care" date="2026-01-24" title="테니스 엘보 외의 부상: 손목 및 무릎 통증 관리" excerpt="TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl mb-8 border border-orange-100 dark:border-orange-800">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                테니스 엘보만이 테니스 부상의 전부는 아닙니다. 코트를 종횡무진 누비다 보면 <strong>손목 시큰거림</strong>이나 <strong>무릎 통증</strong>이 불쑥 찾아오기도 하죠. 특히 손목의 새끼손가락 쪽 통증인 TFCC와 무릎 앞쪽 슬개건염은 테니스인들의 고질병입니다. 초기 대응만 잘해도 장기 휴식을 피할 수 있습니다.
              </p>
            </div>

            <h2 id="key-point-1">손목 통증: TFCC와 스핀의 관계</h2>
            <p>
              손목 새끼손가락 쪽의 통증을 느낀다면 <strong>삼각섬유연골복합체(TFCC)</strong> 손상을 의심해봐야 합니다.
            </p>
            <p>
              주로 무리한 탑스핀을 걸기 위해 손목을 과하게 비틀거나, 늦은 타점에서 손목으로만 공을 넘기려 할 때 발생합니다.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl my-6 border-l-4 border-blue-500">
              <h4 className="font-bold mb-2">손목 보호 솔루션</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>그립 점검:</strong> 너무 얇은 그립은 손목 회전 부담을 키웁니다. 오버그립을 하나 더 감아보세요.</li>
                <li>• <strong>풀스윙:</strong> 손목으로만 스윙하지 말고, 어깨와 코어의 회전을 끝까지 사용해야 손목 부하가 분산됩니다.</li>
              </ul>
            </div>

            <h2 id="key-point-2">무릎 통증: 하드코트와 슬개건염</h2>
            <p>
              테니스는 급정거와 방향 전환이 잦습니다. 이때 무릎 앞쪽 뼈 아래쪽이 아프다면 <strong>슬개건염</strong>일 확률이 높습니다.
            </p>
            <p>
              특히 하드코트에서 운동할 때 무릎에 전해지는 충격은 체중의 수 배에 달합니다. 예방을 위해서는 튼튼한 하체 근육도 중요하지만, 올바른 <strong>'풋워크'</strong>가 선행되어야 합니다. 발 전체로 지면을 딛지 말고 앞꿈치를 활용해 충격을 분산시키는 습관을 들이세요.
            </p>

            <h2 id="key-point-3">응급 처치: RICE 법칙</h2>
            <p>
              통증이 발생한 직후의 대응이 재활 기간을 절반으로 줄입니다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6 text-center text-xs font-bold">
              <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">REST<br /><span className="font-normal opacity-70">휴식</span></div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">ICE<br /><span className="font-normal opacity-70">냉찜질</span></div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">COMPRESSION<br /><span className="font-normal opacity-70">압박</span></div>
              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">ELEVATION<br /><span className="font-normal opacity-70">거상</span></div>
            </div>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              우리 몸의 관절은 소모품이 아닙니다. 통증은 몸이 보내는 적신호입니다. "조금만 더 치면 괜찮아지겠지"라는 생각은 위험합니다. 아픈 부위는 과감히 쉬어주고, 보강 운동을 통해 더 단단한 몸을 만드는 시간으로 활용하시기 바랍니다. 여러분의 즐거운 테니스 라이프를 응원합니다!
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
            currentSlug="tennis-wrist-knee-pain-care"
            category="테니스 건강"
            tags={["테니스 건강", "부상 방지", "손목 통증", "무릎 재활", "스트레칭"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
