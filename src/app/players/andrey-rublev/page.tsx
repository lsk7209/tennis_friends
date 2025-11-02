import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '안드레이 루블레프 선수 프로필과 스토리',
  description: '불꽃 같은 포핸드, 간결한 리듬, 꾸준한 루틴으로 하드코트를 지배하는 안드레이 루블레프의 성장 배경과 경기 철학, 라이벌 구도를 정리했습니다.',
  keywords: ['테니스', '안드레이 루블레프', '선수 프로필', '스토리', '러시아'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/andrey-rublev',
  },
  openGraph: {
    title: '안드레이 루블레프 선수 프로필과 스토리',
    description: '불꽃 같은 포핸드, 간결한 리듬, 꾸준한 루틴으로 하드코트를 지배하는 안드레이 루블레프의 성장 배경과 경기 철학, 라이벌 구도를 정리했습니다.',
    url: 'https://www.tennisfrens.com/players/andrey-rublev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '안드레이 루블레프 선수 프로필과 스토리',
    description: '불꽃 같은 포핸드, 간결한 리듬, 꾸준한 루틴으로 하드코트를 지배하는 안드레이 루블레프의 성장 배경과 경기 철학, 라이벌 구도를 정리했습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-repetition-record-created-thrust', text: '성장 배경 — 반복과 기록이 만든 추진력', depth: 2 },
  { id: 'playing-style-straight-power-cutting-tempo', text: '경기 스타일 — 직선의 파워, 끊어치는 템포', depth: 2 },
  { id: 'rhythm-selection-emotion-hot-procedure-cold', text: '리듬과 선택 — 감정은 뜨겁게, 절차는 차갑게', depth: 2 },
  { id: 'return-transition-first-shake-two-beats', text: '리턴과 전환 — 첫 흔들림을 만드는 두 박자', depth: 2 },
  { id: 'surface-development-hard-straight-clay-patience-grass', text: '표면별 전개 — 하드의 직선, 점토의 인내, 잔디의 간결', depth: 2 },
  { id: 'human-aspects-heat-care-coexistence', text: '인간적인 면모 — 뜨거움과 배려의 공존', depth: 2 },
  { id: 'nationality-culture-repetition-believing-discipline', text: '국적과 문화 — 반복을 믿는 규율', depth: 2 },
  { id: 'relationships-rivals-speed-generation-straight-answer', text: '관계와 라이벌 — 속도의 세대에 직선으로 답하다', depth: 2 },
  { id: 'famous-scenes-inside-out-closing-door', text: '명장면 — 인사이드-아웃, 그리고 닫히는 문', depth: 2 },
  { id: 'equipment-details-tension-balance-contact-sense', text: '장비와 디테일 — 텐션·밸런스·접점의 감각', depth: 2 },
  { id: 'future-challenges-second-sentence-completion', text: '앞으로의 과제 — 두 번째 문장의 완성도', depth: 2 },
  { id: 'fans-community-lasting-trust-way', text: '팬과 커뮤니티 — 오래 가는 신뢰의 방식', depth: 2 },
];

const faqs = [
  {
    q: '안드레이 루블레프의 경기 스타일은 어떤가요?',
    a: '폭발적인 포핸드와 높은 템포, 간결한 루틴이 특징입니다. 포핸드 직선 압박으로 상대 시간을 깎아내며, 속도와 직선으로 흐름을 찢는 힘을 보여줍니다.'
  },
  {
    q: '루블레프의 성장 배경은 어떤가요?',
    a: '어린 시절부터 큰 스윙보다 정확한 접점을 먼저 배웠습니다. 매일 오늘의 수정 한 줄을 기록하고, 원정이 잦아도 워밍업·스트레칭·첫 서브 루틴을 고정해 변수를 줄였습니다.'
  },
  {
    q: '루블레프의 강점은 무엇인가요?',
    a: '불꽃 같은 포핸드가 최대 강점입니다. 폭발적인 포핸드와 높은 템포로 랠리의 공기를 바꾸며, 간결한 루틴으로 승부를 밀어붙입니다.'
  },
  {
    q: '루블레프의 인간적인 면모는 어떤가요?',
    a: '뜨거움과 배려의 공존이 특징입니다. 인터뷰는 솔직하며, 벤치에선 팀의 짧은 키워드를 반복해 감정의 파고를 낮춥니다. 팬에게는 에너지와 유머로 다가가지만 경기장 안에서는 절차를 우선합니다.'
  },
  {
    q: '루블레프의 미래 전망은 어떻게 되나요?',
    a: '세컨드 서브 코스 다양화와 하프코트 마무리 일관성이 관건입니다. 리턴 직후 3구에서 전진 타이밍 반 박자 앞당김, 결말 선택지를 고정하면 긴 경기에서도 에너지 관리가 쉬워질 것입니다.'
  },
];

export default function AndreyRublevBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '안드레이 루블레프', '선수 프로필', '스토리', '러시아'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            안드레이 루블료프
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            불꽃 같은 포핸드로 흐름을 찢는 힘
          </p>
          <p className="text-lg text-blue-50/90 mb-10 max-w-3xl leading-relaxed">
            폭발적인 포핸드와 흐름을 밀어붙이는 템포, 간결한 루틴으로 승부를 조립하는 안드레이 루블레프의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">8분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2025년 10월 6일</span>
            </div>
          </div>
        </div>
      </div>

      <Article title="" excerpt="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-2xl p-6 md:p-8 mb-10 border border-blue-100 dark:border-blue-900">
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium mb-0">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 align-middle" />
                <strong className="text-blue-700 dark:text-blue-300">직답:</strong> 안드레이 루블레프(Andrey Rublev)는 폭발적인 포핸드와 높은 템포, 간결한 루틴으로 랠리의 공기를 바꾸며 승부를 밀어붙이는 러시아의 간판입니다.
              </p>
            </div>

            <h2 id="growth-background-repetition-record-created-thrust">성장 배경 — 반복과 기록이 만든 추진력</h2>
            <p>어린 시절부터 그는 "큰 스윙보다 정확한 접점"을 먼저 배웠습니다. 훈련 노트에는 매일 '오늘의 수정 한 줄'이 남았고, 다음 날의 첫 드릴은 그 한 줄을 확인하는 것으로 시작됐습니다. 원정이 잦아도 워밍업 순서·스트레칭 시간·첫 서브 루틴을 고정해 변수를 줄였고, 이 생활의 질서가 큰 관중과 긴 랠리 속에서도 감정의 폭발을 통제하는 장치가 되었습니다.</p>

            <h2 id="playing-style-straight-power-cutting-tempo">경기 스타일 — 직선의 파워, 끊어치는 템포</h2>
            <p>루블레프의 시그니처는 포핸드 직선 압박입니다. 준비는 짧고 임팩트는 강하며, 라인을 과하게 노리지 않으면서도 깊이를 확보합니다. 백핸드는 양손의 단단한 면으로 각을 세워 코너를 얇게 긁고, 필요 시 다운더라인으로 균형을 흔듭니다. 서브는 와이드와 바디를 교차해 리턴러의 스텝을 묶고, 3구에서 포핸드 인사이드-아웃으로 공간을 크게 엽니다. 짧은 볼이 보이면 한 걸음 전진해 하프발리·발리로 결말을 재촉하지만, 네트 점유는 '명확한 빈자리'가 보일 때만 선택합니다. 요약하면 속도와 직선으로 상대 시간을 깎아내는 테니스입니다.</p>

            <h2 id="rhythm-selection-emotion-hot-procedure-cold">리듬과 선택 — 감정은 뜨겁게, 절차는 차갑게</h2>
            <p>그는 포인트 사이 의식처럼 똑같은 순서를 지킵니다. 라켓 스트링을 한 번 훑고, 두 번의 깊은 호흡, 일정한 토스. 스코어가 불리해도 루틴의 길이를 바꾸지 않아 심박이 급히 치솟지 않습니다. 타이브레이크 초반에는 높이·길이를 확인하는 안전한 구질을 택하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던집니다. 격한 제스처가 눈에 띄어도, 선택의 기준은 놀랄 만큼 단순합니다. 확률이 높은 샷을 더 자주, 같은 품질로.</p>

            <h2 id="return-transition-first-shake-two-beats">리턴과 전환 — 첫 흔들림을 만드는 두 박자</h2>
            <p>퍼스트 서브 리턴은 한두 걸음 뒤에서 시작해 탄도와 길이를 맞추고, 세컨드 서브에는 전진해 접점을 앞세웁니다. 리턴 후에는 중앙 깊은 볼로 각을 닫아두고, 세 번째 스트로크에서 포핸드로 코너를 열어 흐름을 바꿉니다. 수비 국면에서는 낮게 깔린 슬라이스로 시간을 벌고, 바로 다음 볼에서 직선 카운터를 꽂아 랠리의 톤을 자신의 쪽으로 당깁니다.</p>

            <h2 id="surface-development-hard-straight-clay-patience-grass">표면별 전개 — 하드의 직선, 점토의 인내, 잔디의 간결</h2>
            <p>하드에서는 퍼스트 확률과 3구 패턴의 속도로 경기를 압축합니다. 점토에서는 회전을 더해 낙구를 안정시키고, 길어진 랠리 속에서 포핸드의 반박자 빠른 결말로 체력 소모를 관리합니다. 잔디에서는 토스를 낮추고 백스윙을 줄여 타점을 앞에 고정, 슬라이스 리턴을 섞어 초반 속도를 통제합니다. 표면이 달라져도 원칙은 같습니다. 먼저 안정, 틈에서 가속.</p>

            <h2 id="human-aspects-heat-care-coexistence">인간적인 면모 — 뜨거움과 배려의 공존</h2>
            <p>인터뷰에서 그는 솔직합니다. 잘된 날엔 준비가 맞았다고, 부족한 날엔 수정이 필요하다고 말합니다. 벤치에선 팀의 짧은 키워드를 반복해 감정의 파고를 낮추고, 코트 스태프·볼퍼슨에게 고개를 숙이는 제스처를 잊지 않습니다. 팬에게는 에너지와 유머로 다가가지만, 경기장 안에서는 절차를 우선하는 태도가 두드러집니다.</p>

            <h2 id="nationality-culture-repetition-believing-discipline">국적과 문화 — 반복을 믿는 규율</h2>
            <p>러시아식 훈련 문화의 핵심은 반복입니다. 루블레프의 테니스도 작은 성공을 중첩해 큰 흐름을 만드는 방식으로 설명됩니다. 화려한 변주보다 같은 품질의 볼을 더 많이, 더 오래 쌓는 설득이 그의 정체성을 단단하게 합니다.</p>

            <h2 id="relationships-rivals-speed-generation-straight-answer">관계와 라이벌 — 속도의 세대에 직선으로 답하다</h2>
            <p>폭발적인 가속으로 초반을 장악하는 동세대와 맞붙을 때, 그는 리턴 포지션과 중앙 깊은 볼로 속도를 상쇄한 뒤 포핸드 직선으로 균열을 냅니다. 네트를 서두르는 상대에겐 낮은 통과샷과 깊은 로브를 교차해 첫 시도를 주저하게 만들고, 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 속도로 찌릅니다.</p>

            <h2 id="famous-scenes-inside-out-closing-door">명장면 — 인사이드-아웃, 그리고 닫히는 문</h2>
            <p>브레이크 포인트. 와이드 서브로 코트를 벌린 뒤 돌아온 짧은 리턴을 그는 한 발 안으로 파고들어 포핸드 인사이드-아웃으로 찌릅니다. 상대 스텝이 바깥으로 쏠린 순간, 다음 볼은 인사이드-인 직선으로 닫아버립니다. 관중의 탄성이 터져도 그는 같은 속도로 베이스라인을 밟습니다. 감정의 폭발 뒤에도 절차는 흔들리지 않는 장면입니다.</p>

            <h2 id="equipment-details-tension-balance-contact-sense">장비와 디테일 — 텐션·밸런스·접점의 감각</h2>
            <p>대회장 기온·습도에 맞춰 스트링 텐션을 소폭 조정하고, 라켓 밸런스는 과도한 헤드 헤비를 피해 스윙 회복을 빠르게 합니다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목의 흔들림을 줄입니다. 장비가 플레이를 지배하도록 두지 않고, 플레이가 요구하는 만큼만 조정한다는 철학이 일관됩니다.</p>

            <h2 id="future-challenges-second-sentence-completion">앞으로의 과제 — 두 번째 문장의 완성도</h2>
            <p>루블레프가 한 단계 더 도약하려면 세컨드 서브 코스의 다양화와 하프코트 마무리의 일관성이 관건입니다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 결말의 선택지를 한두 개로 고정한다면 긴 경기에서도 에너지 관리가 쉬워질 것입니다. 이미 갖춘 포핸드의 설득력 위에 실수의 폭을 좁히는 기술이 더해질 때, 그의 이름은 큰 무대의 마지막 장면에서 더 자주 호명될 가능성이 큽니다.</p>

            <h2 id="fans-community-lasting-trust-way">팬과 커뮤니티 — 오래 가는 신뢰의 방식</h2>
            <p>그를 오래 응원하게 만드는 힘은 태도의 일관성입니다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말합니다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상이 완성됩니다. 기록은 표가 되지만, 태도는 기억이 됩니다. 그래서 루블레프의 테니스는 결과를 넘어 이야기로 남습니다.</p>
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
                        <span className="font-medium">선수 프로필</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/ntrp-test" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🎯</span>
                        <span className="font-medium">실력 테스트</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/play-style-test" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🎾</span>
                        <span className="font-medium">플레이 스타일 테스트</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    외부 자료
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">🌐</span>
                        <span className="font-medium">ATP 투어 공식 사이트</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://en.wikipedia.org/wiki/Andrey_Rublev" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">📖</span>
                        <span className="font-medium">위키피디아 프로필</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQ items={faqs} />

          {/* CTA */}
          <CTA />
        </div>
      </Article>
    </div>
  );
}