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
    canonical: 'https://tennisfrens.com/blog/tennis-grip-size-selection',
  },
  openGraph: {
    title: "그립 두께와 사이즈 선택의 중요성",
    description: "너무 얇으면 라켓이 돌고, 너무 두꺼우면 손목이 아픕니다. 정확한 그립 사이즈 측정법과 튜닝 팁.",
    url: 'https://tennisfrens.com/blog/tennis-grip-size-selection',
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
  { id: 'introduction', text: '들어가며: 그립은 라켓의 핸들이다', depth: 2 },
  { id: 'grip-sizing-101', text: '1. 그립 사이즈 종류와 표기법 (EU vs US)', depth: 2 },
  { id: 'measurement-methods', text: '2. 나에게 맞는 사이즈 측정법 (Ruler & Finger)', depth: 2 },
  { id: 'brand-shapes', text: '3. 브랜드별 그립 형상의 차이 (Head vs Wilson)', depth: 2 },
  { id: 'pro-strategies', text: '4. 프로 선수들의 그립 전략: 왜 작게 쓸까?', depth: 2 },
  { id: 'sizing-effects', text: '5. 큰 그립 vs 작은 그립의 생체역학적 결과', depth: 2 },
  { id: 'medical-insight', text: '6. 의학적 관점: 테니스 엘보와 그립의 상관관계', depth: 2 },
  { id: 'tuning-tips', text: '7. 그립 두께 튜닝 팁 (수축 튜브 & 오버그립)', depth: 2 },
  { id: 'conclusion', text: '결론: 가장 개인적인 스펙, 그립', depth: 2 },
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

            <h2 id="introduction">들어가며: 그립은 라켓의 핸들이다</h2>
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-2xl mb-8 border border-orange-100 dark:border-orange-800">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                라켓의 무게와 헤드 사이즈는 꼼꼼히 따지면서도, 정작 손에 닿는 <strong>'그립 사이즈'</strong>는 대충 결정하는 경우가 많습니다. 하지만 그립은 라켓의 모든 정보가 손으로 전달되는 유일한 통로입니다. 맞지 않는 그립은 조작성을 떨어뜨릴 뿐만 아니라 테니스 엘보와 손목 부상의 직접적인 원인이 됩니다. 전문가들이 말하는 최적의 그립 선택법을 심층 분석합니다.
              </p>
            </div>

            <h2 id="grip-sizing-101">1. 그립 사이즈 종류와 표기법 (EU vs US)</h2>
            <p>
              테니스 라켓 그립은 인치 단위의 둘레로 표기되는 미국식(US)과 숫자로 표기되는 유럽식(EU)이 혼용됩니다. 국내에서는 혼동을 피하기 위해 두 단위를 모두 알고 있는 것이 좋습니다.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 p-2">유럽식 (L)</th>
                    <th className="border border-gray-300 p-2">미국식 (inch)</th>
                    <th className="border border-gray-300 p-2">주요 추천 대상</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">L1</td>
                    <td className="border border-gray-300 p-2 text-center">4 1/8</td>
                    <td className="border border-gray-300 p-2">여성 표준 / 주니어</td>
                  </tr>
                  <tr className="bg-blue-50 dark:bg-blue-900/20">
                    <td className="border border-gray-300 p-2 text-center font-bold">L2</td>
                    <td className="border border-gray-300 p-2 text-center font-bold">4 1/4</td>
                    <td className="border border-gray-300 p-2 font-medium">한국 남성 표준 / 손 큰 여성</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">L3</td>
                    <td className="border border-gray-300 p-2 text-center">4 3/8</td>
                    <td className="border border-gray-300 p-2">손이 큰 남성 / 서구형 체격</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">L4</td>
                    <td className="border border-gray-300 p-2 text-center">4 1/2</td>
                    <td className="border border-gray-300 p-2 text-xs">특수 체격 (국내 미출시 모델 다수)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="measurement-methods">2. 나에게 맞는 사이즈 측정법 (Ruler & Finger)</h2>
            <p>
              가장 확실한 방법은 직접 잡아보는 것이지만, 온라인 구매나 튜닝을 위해 객관적인 수치가 필요할 때 다음 두 가지 방법을 병행하세요.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200">
                <h4 className="font-bold mb-2 flex items-center gap-2">📏 자 활용 측정법 (Ruler Method)</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  손바닥의 두 번째 가로선(가장 깊은 선)부터 약지 손가락 끝까지의 수직 길이를 잽니다. 이 수치가 당신이 선택해야 할 기초 사이즈(인치)입니다.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200">
                <h4 className="font-bold mb-2 flex items-center gap-2">☝️ 손가락 테스트 (Index Test)</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  라켓을 이스턴 포핸드 그립으로 잡고 반대쪽 검지손가락을 뒤끕치와 손바닥 사이에 넣어보세요. 검지가 꽉 차게 들어가는 것이 이상적입니다.
                </p>
              </div>
            </div>

            <h2 id="brand-shapes">3. 브랜드별 그립 형상의 차이 (Head vs Wilson)</h2>
            <p>
              둘레가 같아도 잡았을 때 느낌이 다른 이유는 **'그립의 형상(Shape)'** 때문입니다. 브랜드마다 단면의 비율이 다릅니다.
            </p>
            <div className="space-y-4 my-6">
              <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-sm">HEAD</div>
                <p className="text-sm"><strong>직사각형(Flat/Rectangular) 타입 :</strong> 손바닥에 닿는 면적이 넓어 그립 각도를 인식하기 유리합니다. 예전부터 사용해온 베테랑들이 선호합니다.</p>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm">Wilson / Babolat</div>
                <p className="text-sm"><strong>정사각형(Round/Squarer) 타입 :</strong> 어느 쪽으로 잡아도 이질감이 적고 둥근 느낌입니다. 현대적인 회전 위주의 플레이어에게 적합합니다.</p>
              </div>
            </div>

            <h2 id="pro-strategies">4. 프로 선수들의 그립 전략: 왜 작게 쓸까?</h2>
            <p>
              현대 테니스는 강력한 '탑스핀'의 시대입니다. 과거 로저 페더러가 3그립(4 3/8) 이상의 큰 그립을 고수한 것과 달리, 나달이나 최근의 조코비치는 상대적으로 얇은 2그립(4 1/4)에 오버그립을 감아 사용합니다.
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-xl my-6 border-l-4 border-slate-400">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">얇은 그립의 이점</h4>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4">
                <li><strong>손목 활용 극대화:</strong> 그립이 얇으면 손목 회전 반경이 넓어져 더 많은 스핀을 만들 수 있습니다.</li>
                <li><strong>조작성 향상:</strong> 네트 앞 발리나 짧은 공 처리 시 미세한 각도 조절이 쉽습니다.</li>
              </ul>
            </div>

            <h2 id="sizing-effects">5. 큰 그립 vs 작은 그립의 생체역학적 결과</h2>
            <p>
              단순히 편안함의 문제가 아닙니다. 틀린 사이즈는 근육 사용 방식을 바꿉니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <Card className="border-red-100 dark:border-red-900">
                <CardContent className="p-5">
                  <h4 className="text-red-600 font-bold mb-2">Size too Small</h4>
                  <p className="text-sm text-gray-500">라켓이 돌지 않게 하기 위해 필요 이상의 악력을 사용합니다. 전완근이 쉽게 피로해지고 임팩트 시 흔들림이 커집니다.</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 dark:border-blue-900">
                <CardContent className="p-5">
                  <h4 className="text-blue-600 font-bold mb-2">Size too Large</h4>
                  <p className="text-sm text-gray-500">손목 관절의 자유로운 가동이 제한됩니다. 서브 시 손목 발동(Wrist Snap)이 억제되어 위력이 급감합니다.</p>
                </CardContent>
              </Card>
            </div>

            <h2 id="medical-insight">6. 의학적 관점: 테니스 엘보와 그립의 상관관계</h2>
            <p>
              많은 동호인이 겪는 <strong>테니스 엘보(Lateral Epicondylitis)</strong>의 주범 중 하나가 바로 잘못된 그립 사이즈입니다.
            </p>
            <div className="bg-red-50 dark:bg-red-950/30 p-6 rounded-2xl border border-red-100 dark:border-red-800 my-6">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">부상의 메커니즘</h4>
              <p className="text-sm text-red-800 dark:text-red-200 leading-relaxed">
                그립이 너무 얇으면 임팩트 충격이 관절로 직접 전달됩니다. 반대로 너무 두꺼우면 근육이 늘어난 상태에서 무리하게 힘을 쓰게 되어 건(Tendon)에 미세 파열을 일으킵니다. 만약 지속적인 통증이 있다면, 가장 먼저 그립 사이즈를 점검해보는 것이 정석입니다.
              </p>
            </div>

            <h2 id="tuning-tips">7. 그립 두께 튜닝 팁 (수축 튜브 & 오버그립)</h2>
            <p>
              만약 현재 라켓의 그립이 만족스럽지 않다면 두 가지 해결책이 있습니다.
            </p>
            <div className="space-y-4 my-6">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200">
                <h4 className="font-bold text-sm mb-1">두께 키우기 (Heatsink Tube)</h4>
                <p className="text-xs text-gray-600">열수축 튜브를 삽입하면 그립은 정확히 반 사이즈(1/16인치)씩 늘어납니다. 다만 모델에 따라 라켓의 무게 밸런스가 헤드 라이트 쪽으로 이동하므로 납 테이프 튜닝이 병행될 수 있습니다.</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200">
                <h4 className="font-bold text-sm mb-1">두께 줄이기 (Thin Replacement Grip)</h4>
                <p className="text-xs text-gray-600">기존의 기본 리플레이스먼트 그립(쿠션 그립)을 떼어내고 아주 얇은 타입으로 교체하면 약간의 여유를 확보할 수 있습니다.</p>
              </div>
            </div>

            <h2 id="conclusion">결론: 가장 개인적인 스펙, 그립</h2>
            <p className="text-lg leading-relaxed">
              라켓의 무게는 숫자로 측정되지만, 그립의 느낌은 당신의 '감각'으로 완성됩니다. 초보자라면 <strong>"작은 것을 사서 조금씩 키운다"</strong>는 원칙을 고수하세요. 완벽한 그립은 당신의 라켓을 단순한 도구에서 신체의 일부로 진화시켜줄 것입니다.
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
