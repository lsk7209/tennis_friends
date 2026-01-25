import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "스트링 텐션의 비밀: 높게? 낮게?",
  description: "텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.",
  keywords: ["테니스 장비", "스트링 텐션", "라켓 수리", "컨트롤", "파워"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-string-tension-guide',
  },
  openGraph: {
    title: "스트링 텐션의 비밀: 높게? 낮게?",
    description: "텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.",
    url: 'https://tennisfriends.co.kr/blog/tennis-string-tension-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "스트링 텐션의 비밀: 높게? 낮게?",
    description: "텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며: 텐션은 라켓의 엔진 튜닝이다', depth: 2 },
  { id: 'high-tension', text: "1. 높은 텐션(Tight): '컨트롤'과 '일관성'의 정석", depth: 2 },
  { id: 'low-tension', text: "2. 낮은 텐션(Loose): '파워'와 '스냅백'의 극대화", depth: 2 },
  { id: 'physics-snapback', text: '3. 스냅백(Snapback)의 물리: 낮은 텐션이 스핀을 만드는 원리', depth: 2 },
  { id: 'environmental-calibration', text: '4. 환경적 변수: 고도와 습도에 따른 텐션 조정', depth: 2 },
  { id: 'tension-maintenance', text: '5. 텐션 관리: 황금의 첫 24시간과 프리스트레칭', depth: 2 },
  { id: 'finding-sweet-spot', text: '6. 나만의 적정 텐션(Sweet Spot) 찾는 단계적 가이드', depth: 2 },
  { id: 'pro-benchmarks', text: '7. 프로들의 텐션: 80lbs에서 30lbs까지의 극단적 사례', depth: 2 },
  { id: 'conclusion', text: '결론: 텐션은 고정된 숫자가 아니라 흐르는 감각이다', depth: 2 },
];

const faqs = [
  {
    q: "텐션이 낮아지면 스핀이 정말 더 많이 걸리나요?",
    a: "네, '스냅백(Snap-back)' 현상 때문입니다. 스트링이 임팩트 시 옆으로 밀렸다가 다시 제자리로 돌아오면서 공에 회전을 더해주는데, 텐션이 낮을수록 스트링의 가동 범위가 넓어져 스핀량이 증가합니다."
  },
  {
    q: "스트링 작업 후 시간이 지나면 텐션이 변하나요?",
    a: "그렇습니다. 이를 '텐션 로스'라고 합니다. 보통 줄을 맨 직후 24시간 내에 가장 많이 떨어지며, 폴리 스트링의 경우 한 달 정도 지나면 탄성을 잃어 '죽은 스트링'이 되므로 주기적인 교체가 필요합니다."
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
            <Badge key="스트링 텐션" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">스트링 텐션</Badge>
            <Badge key="라켓 수리" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">라켓 수리</Badge>
            <Badge key="컨트롤" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">컨트롤</Badge>
            <Badge key="파워" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">파워</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            스트링 텐션의 비밀: 높게? 낮게?
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.
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

      <Article slug="tennis-string-tension-guide" date="2026-01-24" title="스트링 텐션의 비밀: 높게? 낮게?" excerpt="텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며: 텐션은 라켓의 엔진 튜닝이다</h2>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl mb-8 border-l-8 border-blue-500">
              <p className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed mb-0 font-medium">
                "라켓을 바꾼 것보다 텐션을 2파운드 조정한 것이 경기력을 더 크게 바꿨습니다." 많은 프로 선수가 입을 모아 하는 말입니다. 스트링 텐션은 공이 라켓에 머무는 시간(Dwell Time)과 반발 계수를 결정하는 유일한 변수입니다.
              </p>
            </div>

            <h2 id="high-tension">1. 높은 텐션(Tight): '컨트롤'과 '일관성'의 정석</h2>
            <p>
              보통 55파운드 이상의 높은 텐션을 의미합니다. 스트링이 팽팽하면 임팩트 시 '트램펄린 효과'가 억제되어 공이 튀어나가는 힘을 줄여줍니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <Card className="bg-white dark:bg-slate-900 border-blue-100 dark:border-blue-900">
                <CardContent className="p-4">
                  <h4 className="text-blue-600 font-bold mb-2">장점: 정밀 조준</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 임팩트 지점의 정확한 피드백 전달</li>
                    <li>• 볼 날림(Flying) 현상 최소화</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-900 border-red-100 dark:border-red-900">
                <CardContent className="p-4">
                  <h4 className="text-red-600 font-bold mb-2">단점: 물리적 부담</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 스윙 속도가 느리면 비거리 확보 어려움</li>
                    <li>• 관절로 전달되는 진동 에너지 증가</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 id="low-tension">2. 낮은 텐션(Loose): '파워'와 '스냅백'의 극대화</h2>
            <p>
              40~48파운드 수준의 낮은 텐션은 최근 현대 테니스의 지배적인 트렌드입니다. 스트링이 더 깊게 변형되었다가 복원되면서 공에 추진력을 더해줍니다.
            </p>
            <ul className="space-y-4 my-6">
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1 shrink-0">파워</Badge>
                <p className="text-sm">스트링 베드가 더 유연하게 작동하여, 작은 힘으로도 깊은 비거리를 낼 수 있습니다.</p>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1 shrink-0">편안함</Badge>
                <p className="text-sm">충격을 스트링이 대신 흡수하여 테니스 엘보나 어깨 부상을 겪는 분들에게 '처방전'이 됩니다.</p>
              </li>
            </ul>

            <h2 id="physics-snapback">3. 스냅백(Snapback)의 물리: 낮은 텐션이 스핀을 만드는 원리</h2>
            <p>
              공에 회전을 걸기 위해서는 스트링이 공을 '감싸쥐는' 시간과 스트링끼리의 **수평 이동(Sliding)**이 필요합니다.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-6 border border-blue-100 dark:border-blue-800">
              <p className="text-sm leading-relaxed mb-0">
                <strong>스냅백 효과:</strong> 텐션이 낮을수록 메인 스트링이 크로스 스트링 위에서 더 넓게 이동했다가 돌아옵니다. 이 돌아오는 짧은 찰나의 순간에 공을 위로 강하게 긁어주며 스핀량을 폭발시킵니다. 팽팽한 텐션보다 느슨한 텐션에서 헤비 탑스핀이 더 잘 걸리는 과학적 이유입니다.
              </p>
            </div>

            <h2 id="environmental-calibration">4. 환경적 변수: 고도와 습도에 따른 텐션 조정</h2>
            <p>
              실내 코트와 실외 코트, 그리고 지역적 기후는 공의 내부 압력뿐만 아니라 스트링의 성질을 바꿉니다.
            </p>
            <div className="space-y-4 my-6">
              <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-24 font-bold text-xs">고지대 (Altitude)</div>
                <p className="text-xs">공기가 희박하여 공이 더 빠르게 날아갑니다. 평소보다 <strong>+2~3lbs</strong> 높여 컨트롤을 확보하세요.</p>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-24 font-bold text-xs">고습도 (Humidity)</div>
                <p className="text-xs">공과 스트링이 수분을 머금어 무거워집니다. <strong>-1~2lbs</strong> 낮추어 반발력을 보완하는 것이 유리합니다.</p>
              </div>
            </div>

            <h2 id="tension-maintenance">5. 텐션 관리: 황금의 첫 24시간과 프리스트레칭</h2>
            <p>
              스트링 작업이 끝난 라켓은 가만히 두어도 탄성을 잃습니다. 이를 **'텐션 로스(Tension Loss)'**라고 합니다.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/30 p-5 rounded-xl my-6 border-l-4 border-amber-500 text-sm">
              <ul className="list-disc pl-5 space-y-2 text-amber-900 dark:text-amber-200">
                <li><strong>24시간의 법칙:</strong> 스트링 작업 직후 24시간 내에 초기 텐션의 약 10%가 급락합니다.</li>
                <li><strong>프리 스트레칭:</strong> 머신에서 줄을 당기기 전 미리 늘려주는 작업입니다. 초기 낙폭을 줄여 텐션 유지력을 극대화합니다.</li>
                <li><strong>교체 주기:</strong> 폴리 스트링은 20~30시간 사용 시 '데드(Dead)' 상태가 되므로 텐션 수치와 상관없이 교체해야 합니다.</li>
              </ul>
            </div>

            <h2 id="finding-sweet-spot">6. 나만의 적정 텐션(Sweet Spot) 찾는 단계적 가이드</h2>
            <p>
              기준점이 없다면 다음의 '스텝 다운' 방식을 시도해 보세요.
            </p>
            <div className="space-y-3 my-6">
              <div className="p-4 bg-white dark:bg-slate-900 border rounded-lg">
                <h4 className="font-bold text-sm mb-1">Step 1: 라켓 권장 텐션의 중앙값 선택</h4>
                <p className="text-xs text-gray-500">예: 권장 50-60lbs라면 55lbs에서 시작</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 border rounded-lg">
                <h4 className="font-bold text-sm mb-1">Step 2: 비거리 체크</h4>
                <p className="text-xs text-gray-500">공이 자꾸 베이스라인 밖으로 나가면 +2lbs, 네트에 걸리면 -2lbs 조정</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 border rounded-lg">
                <h4 className="font-bold text-sm mb-1">Step 3: 팔의 통증 유무 확인</h4>
                <p className="text-xs text-gray-500">정확한 타격에도 팔꿈치가 찌릿하다면 즉시 4lbs 이상 낮추어 부하를 줄임</p>
              </div>
            </div>

            <h2 id="pro-benchmarks">7. 프로들의 텐션: 80lbs에서 30lbs까지의 극단적 사례</h2>
            <p>
              프로들의 선택은 우리가 텐션을 '정답'으로 여기지 말아야 할 이유를 보여줍니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded">
                <h5 className="font-bold text-sm mb-1">Björn Borg (Extreme High)</h5>
                <p className="text-xs">내구성이 약한 천연 거트를 무려 **80lbs**로 매어 사용했습니다. 극단적인 컨트롤을 원했기 때문입니다.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded">
                <h5 className="font-bold text-sm mb-1">Modern Pros (Extreme Low)</h5>
                <p className="text-xs">일부 선수들은 팔 보호와 전설적인 스핀량을 위해 **30~35lbs**까지 낮추어 사용하며 새로운 기준을 만들고 있습니다.</p>
              </div>
            </div>

            <h2 id="conclusion">결론: 텐션은 고정된 숫자가 아니라 흐르는 감각이다</h2>
            <p className="text-lg leading-relaxed">
              텐션 선택에 영원한 정답은 없습니다. 계절이 바뀌면 몸의 컨디션도 바뀌고, 코트의 환경도 변합니다. <strong>"겨울에는 낮추고, 여름에는 높인다"</strong>는 기본 원칙을 기억하되, 당신의 스윙 에너지를 코트 안에 가장 효율적으로 가두는 그 지점을 찾아보세요. 텐션 튜닝은 곧 당신의 플레이 스타일을 확립하는 과정입니다.
            </p>

          </div>

          {/* Related Links */}
          <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg related-links-container">
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
            currentSlug="tennis-string-tension-guide"
            category="테니스 장비"
            tags={["테니스 장비", "스트링 텐션", "라켓 수리", "컨트롤", "파워"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
