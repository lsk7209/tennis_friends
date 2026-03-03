import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { SITE_URL } from '@/lib/site';

const siteUrl = SITE_URL;

export const metadata = {
  title: "댐퍼(Dampener)의 효과: 진동 감소와 타구감",
  description: "작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.",
  keywords: ["테니스 장비", "댐퍼", "진동 방지", "엘보링", "타구음"],
  alternates: {
    canonical: `${siteUrl}/blog/tennis-dampener-effectiveness`,
  },
  openGraph: {
    title: "댐퍼(Dampener)의 효과: 진동 감소와 타구감",
    description: "작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.",
    url: `${siteUrl}/blog/tennis-dampener-effectiveness`,
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "댐퍼(Dampener)의 효과: 진동 감소와 타구감",
    description: "작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며: 작은 고무 조각의 큰 논쟁', depth: 2 },
  { id: 'sound-psychology', text: "1. 타구음의 심리학: '핑' 소리가 사라지면 일어나는 변화", depth: 2 },
  { id: 'shock-vs-vibration', text: '2. 물리적 실체: 충격(Shock) vs 진동(Vibration)의 차이', depth: 2 },
  { id: 'elbow-truth', text: '3. 테니스 엘보 방지 효과의 진실과 한계', depth: 2 },
  { id: 'itf-legalities', text: '4. ITF 공식 규정: 댐퍼는 어디에 달아야 합격일까?', depth: 2 },
  { id: 'dampener-types', text: '5. 디자인과 성능: 버튼형, 웜형, 그리고 커스텀', depth: 2 },
  { id: 'diy-agassi-knot', text: "6. DIY 대안: 안드레 애거시의 '고무줄 매듭법'", depth: 2 },
  { id: 'conclusion', text: '결론: 당신의 감각을 믿으세요', depth: 2 },
];

const faqs = [
  {
    q: "댐퍼를 사용하면 팔꿈치 통증(테니스 엘보)이 줄어드나요?",
    a: "댐퍼는 타구음과 미세한 고주파 진동을 줄여주어 '타구감'을 부드럽게 만들지만, 실제 팔로 전달되는 큰 충격 에너지를 흡수하지는 못합니다. 엘보 예방을 위해서는 부드러운 스트링이나 낮은 텐션 선택이 더 효과적입니다."
  },
  {
    q: "프로 선수들은 댐퍼를 많이 사용하나요?",
    a: "취향에 따라 갈립니다. 조코비치나 나달은 댐퍼를 사용하지만, 페더러나 머레이처럼 사용하지 않는 선수들도 많습니다. 사용하지 않는 선수들은 현의 미세한 떨림을 통해 공의 터치감을 더 정확히 느끼고 싶어 하는 경우가 많습니다."
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
            <Badge key="댐퍼" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">댐퍼</Badge>
            <Badge key="진동 방지" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">진동 방지</Badge>
            <Badge key="엘보링" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">엘보링</Badge>
            <Badge key="타구음" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">타구음</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            댐퍼(Dampener)의 효과: 진동 감소와 타구감
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.
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

      <Article slug="tennis-dampener-effectiveness" date="2026-01-24" title="댐퍼(Dampener)의 효과: 진동 감소와 타구감" excerpt="작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며: 작은 고무 조각의 큰 논쟁</h2>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl mb-8 border border-blue-100 dark:border-blue-800">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0 text-center">
                라켓 스트링 하단에 끼워진 작은 고무 조각, '댐퍼(Dampener)' 혹은 '엘보링'이라 불리는 이 부품은 테니스인들 사이에서 가장 논쟁이 뜨거운 소품 중 하나입니다. 과학적 근거와 선수들의 경험을 바탕으로 댐퍼의 실체를 파헤칩니다.
              </p>
            </div>

            <h2 id="sound-psychology">1. 타구음의 심리학: '핑' 소리가 사라지면 일어나는 변화</h2>
            <p>
              댐퍼의 가장 즉각적인 효과는 임팩트 시 발생하는 <strong>'핑(Ping)'</strong> 하는 높은 주파수의 금속성 소음을 소멸시키는 것입니다.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl my-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-sm mb-2">왜 소리가 중요할까?</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                인간의 뇌는 소리를 통해 타구의 강도와 질을 판단합니다. 댐퍼가 소음을 잡아주면 타구감이 훨씬 묵직하고 '단단하게(Solid)' 느껴지며, 이는 연쇄적으로 플레이어의 심리적 안정감을 높여줍니다. 반면 소리를 선호하는 선수들은 이 떨림을 통해 '공이 줄의 어디에 맞았는지'를 청각적으로 피드백 받습니다.
              </p>
            </div>

            <h2 id="shock-vs-vibration">2. 물리적 실체: 충격(Shock) vs 진동(Vibration)의 차이</h2>
            <p>
              댐퍼의 역할을 정확히 이해하려면 이 두 가지 개념을 구분해야 합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-white dark:bg-slate-900 border rounded-lg">
                <h4 className="font-bold text-xs text-red-600 mb-1">프레임 충격 (Frame Shock)</h4>
                <p className="text-[10px] text-gray-500">공이 라켓에 닿는 순간 뼈로 전달되는 큰 물리적 힘. 댐퍼는 여기에 아무런 영향을 주지 못합니다.</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 border rounded-lg">
                <h4 className="font-bold text-xs text-blue-600 mb-1">스트링 진동 (String Vibration)</h4>
                <p className="text-[10px] text-gray-500">임팩트 후 스트링에 남아 윙윙거리는 미세한 떨림. 댐퍼의 유일하고 주된 타겟입니다.</p>
              </div>
            </div>

            <h2 id="elbow-truth">3. 테니스 엘보 방지 효과의 진실과 한계</h2>
            <p>
              결론부터 말씀드리면, <strong>댐퍼는 테니스 엘보를 직접적으로 예방하거나 치료하지 못합니다.</strong>
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border border-amber-200 my-6">
              <p className="text-sm text-center mb-0">
                엘보는 주로 프레임의 강성과 잘못된 타점에서 오는 '충격'이 원인이기 때문입니다. 다만, 진동을 잡아줌으로써 손에 전달되는 피로도를 줄여주는 <strong>보조적인 심리적 효과</strong>는 무시할 수 없습니다. 진정한 엘보 방지를 원한다면 부드러운 스트링(인조쉽)이나 텐션 하향이 필수입니다.
              </p>
            </div>

            <h2 id="itf-legalities">4. ITF 공식 규정: 댐퍼는 어디에 달아야 합격일까?</h2>
            <p>
              선수들이 댐퍼를 주로 맨 아래에 다는 이유는 단순한 취향이 아니라 규정 때문입니다.
            </p>
            <div className="bg-slate-800 text-white p-5 rounded-xl my-6">
              <h4 className="text-yellow-400 font-bold mb-2">ITF Rule of Tennis #4</h4>
              <p className="text-xs leading-relaxed mb-0">
                "진동 방지 장치는 스트링이 교차(Cross)하는 구역 밖이면 어디든 설치할 수 있다." 즉, 가로줄과 세로줄이 엮인 사각형 구역 안에는 설치할 수 없으며, <strong>최하단 가로줄 아래</strong> 혹은 최상단 가로줄 위에만 허용됩니다.
              </p>
            </div>

            <h2 id="dampener-types">5. 디자인과 성능: 버튼형, 웜형, 그리고 커스텀</h2>
            <p>
              디자인뿐만 아니라 설치 방식에 따라 진동 억제 수준이 다릅니다.
            </p>
            <ul className="list-disc pl-5 space-y-3 my-6">
              <li><strong>버튼형 (Button):</strong> 세로줄 2개 사이에 고정. 가장 표준적이며 소리만 깔끔하게 잡아줍니다.</li>
              <li><strong>웜형 (Worm):</strong> 세로줄 6~8개에 걸쳐 설치. 진동 억제력이 매우 강력하여 부드러운 타구감을 극대화합니다.</li>
              <li><strong>커스텀형:</strong> 럭실론처럼 스트링 사이에 오링(O-ring)처럼 끼우는 형태로, 최소한의 간섭만 원하는 상급자용입니다.</li>
            </ul>

            <h2 id="diy-agassi-knot">6. DIY 대안: 안드레 애거시의 '고무줄 매듭법'</h2>
            <p>
              기성 제품이 자꾸 빠져서 불편하다면, 테니스 전설 안드레 애거시가 사용한 방법을 시도해 보세요.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl my-6 border-dashed border-2 border-gray-300">
              <h4 className="font-bold mb-3 text-center">RUBBER BAND METHOD</h4>
              <ol className="text-xs space-y-2 mb-0">
                <li>1. 일반적인 노란색 고무줄(굵은 것)을 준비합니다.</li>
                <li>2. 정중앙 아래쪽 세로줄 2개를 감싸며 팔자(8) 매듭을 지어 묶습니다.</li>
                <li>3. <strong>장점:</strong> 절대 경기 중에 빠지지 않으며, 비용이 거의 들지 않고, 가장 자연스러운 진동 감쇄를 제공합니다.</li>
              </ol>
            </div>

            <h2 id="conclusion">결론: 당신의 감각을 믿으세요</h2>
            <p className="text-lg leading-relaxed">
              조코비치는 댐퍼를 쓰고, 페더러는 쓰지 않습니다. 세계 최고들 사이에서도 정답은 없습니다. 댐퍼는 라켓 성능을 바꾸는 장비라기보다, <strong>당신의 '테니스 경험'을 디자인하는 도구</strong>입니다. 묵직한 손맛을 원한다면 장착하고, 날카로운 피드백을 원한다면 제거하세요. 어떤 선택이든 당신의 스윙에 자신감을 더해준다면 그것이 정답입니다.
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
            currentSlug="tennis-dampener-effectiveness"
            category="테니스 장비"
            tags={["테니스 장비", "댐퍼", "진동 방지", "엘보링", "타구음"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
