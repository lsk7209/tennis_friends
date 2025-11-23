import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '노박 조코비치 선수 프로필과 스토리',
  description: '리턴·밸런스·멘탈로 큰 순간을 뒤집는 노박 조코비치의 성장 배경, 경기 스타일, 루틴과 인간적인 면모, 라이벌 구도를 정리했습니다.',
  keywords: ['테니스', '노박 조코비치', '선수 프로필', '스토리', '세르비아'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/novak-djokovic',
  },
  openGraph: {
    title: '노박 조코비치 선수 프로필과 스토리',
    description: '리턴·밸런스·멘탈로 큰 순간을 뒤집는 노박 조코비치의 성장 배경, 경기 스타일, 루틴과 인간적인 면모, 라이벌 구도를 정리했습니다.',
    url: 'https://www.tennisfrens.com/blog/novak-djokovic',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '노박 조코비치 선수 프로필과 스토리',
    description: '리턴·밸런스·멘탈로 큰 순간을 뒤집는 노박 조코비치의 성장 배경, 경기 스타일, 루틴과 인간적인 면모, 라이벌 구도를 정리했습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-city-indoor-court-battlefield-memory', text: '성장 배경 — 도시의 실내 코트와 전장의 기억', depth: 2 },
  { id: 'playing-style-return-start-balance-suture', text: '경기 스타일 — 리턴으로 시작해 균형으로 봉합하다', depth: 2 },
  { id: 'rhythm-selection-emotion-low-procedure-constant', text: '리듬과 선택 — 감정은 낮게, 절차는 일정하게', depth: 2 },
  { id: 'transition-technique-defense-attack-one-beat-ahead', text: '전환의 기술 — 방어에서 공격으로, 한 박자 앞서기', depth: 2 },
  { id: 'experience-crisis-management-scoreboard-movement-accuracy', text: '경험과 위기관리 — 점수판보다 동작의 정확도', depth: 2 },
  { id: 'human-aspects-discipline-care-language', text: '인간적인 면모 — 규율과 배려의 언어', depth: 2 },
  { id: 'nationality-culture-small-country-learned-pride', text: '국적과 문화 — 작은 나라에서 배운 큰 자부심', depth: 2 },
  { id: 'relationships-rivals-each-other-answer-steal-time', text: '관계와 라이벌 — 서로의 해답을 훔치는 시간', depth: 2 },
  { id: 'famous-scenes-return-twice-down-line-once', text: '명장면 — 리턴 두 번, 다운더라인 한 번', depth: 2 },
  { id: 'equipment-details-tension-contact-balance-adjustment', text: '장비와 디테일 — 텐션·접점·밸런스의 미세 조정', depth: 2 },
  { id: 'future-challenges-match-selection-conclusion-conciseness', text: '앞으로의 과제 — 경기 선택과 결말의 간결함', depth: 2 },
  { id: 'fans-community-lasting-trust', text: '팬과 커뮤니티 — 오래 가는 신뢰', depth: 2 },
];

const faqs = [
  {
    q: '노박 조코비치의 경기 스타일은 어떤가요?',
    a: '리턴을 출발점으로 포인트를 다시 설계하는 것이 최대 강점입니다. 퍼스트 서브조차 깊고 낮게 되돌려 상대의 3구 패턴을 끊고, 균형과 호흡으로 큰 순간을 관리합니다.'
  },
  {
    q: '조코비치의 성장 배경은 어떤가요?',
    a: '베오그라드의 실내 코트에서 바운드의 균일함을 활용해 타점의 오차를 줄였습니다. 거친 환경은 집중력과 절제를 일찍 익히게 했고, 작은 질서들을 쌓아 큰 무대의 소음을 지우는 법을 배웠습니다.'
  },
  {
    q: '조코비치의 강점은 무엇인가요?',
    a: '균형, 리턴, 멘탈이 최대 강점입니다. 리턴을 출발점으로 포인트의 구조를 다시 짜고, 호흡과 루틴으로 큰 순간을 관리하는 결심의 기술자입니다.'
  },
  {
    q: '조코비치의 인간적인 면모는 어떤가요?',
    a: '규율과 배려가 특징입니다. 인터뷰에서 준비와 팀을 먼저 언급하며, 경쟁은 냉정하게, 인간관계는 따뜻하게 대하는 대비가 그의 이미지를 단단하게 만듭니다.'
  },
  {
    q: '조코비치의 미래 전망은 어떻게 되나요?',
    a: '경기 선택의 최적화와 결말의 간결함이 관건입니다. 시즌 운영에서 대회 선택을 더 정밀하게 하고, 하프코트 마무리를 한 박자 더 빠르게 가져오면 체력·부상 리스크를 관리하며 최적의 날을 더 자주 만들 수 있습니다.'
  },
];

export default function NovakDjokovicBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '노박 조코비치', '선수 프로필', '스토리', '세르비아'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            노박 조코비치
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            균형, 리턴, 멘탈로 완성한 '결정의 기술'
          </p>
          <p className="text-lg text-blue-50/90 mb-10 max-w-3xl leading-relaxed">
            리턴을 출발점으로 포인트를 다시 설계하고, 루틴과 호흡으로 큰 순간을 관리하는 노박 조코비치의 성장, 철학, 인간적인 면모를 한 편으로.
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
              <span className="font-medium">2025년 9월 3일</span>
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
                <strong className="text-blue-700 dark:text-blue-300">직답:</strong> 노박 조코비치(Novak Djokovic)는 리턴을 출발점으로 포인트의 구조를 다시 짜고, 호흡과 루틴으로 큰 순간을 관리하는 결심의 기술자입니다.
              </p>
            </div>

            <h2 id="growth-background-city-indoor-court-battlefield-memory">성장 배경 — 도시의 실내 코트와 전장의 기억</h2>
            <p>베오그라드의 실내 코트는 차갑고 규칙적이었습니다. 그는 바운드의 균일함을 활용해 타점의 오차를 줄였고, 코치진은 "동작을 단순화하고 접점을 앞에 둔다"는 한 문장을 반복했습니다. 유년기의 거친 환경은 집중력과 절제를 일찍 익히게 했고, 훈련 일지에는 수치보다 '오늘의 수정 한 줄'이 늘 먼저 적혔습니다. 작은 질서들을 쌓아 큰 무대의 소음을 지우는 법을 배웠습니다.</p>

            <h2 id="playing-style-return-start-balance-suture">경기 스타일 — 리턴으로 시작해 균형으로 봉합하다</h2>
            <p>조코비치의 최대 무기는 리턴입니다. 퍼스트 서브조차 깊고 낮게 되돌려 상대의 3구 패턴을 끊고, 세컨드 서브에는 한 발 전진해 출발점 자체를 흔듭니다. 포핸드는 짧은 준비와 긴 임팩트로 직선을 만들고, 백핸드는 양손의 견고함으로 코너를 얇게 긁어 각을 세웁니다. 수비에서는 관절의 유연성과 스플릿 스텝으로 도달 범위를 넓히고, 옆으로 밀려난 순간에도 균형을 잃지 않은 채 다음 볼을 준비합니다. 네트 접근은 필요할 때만—열린 공간이 보이면 한 걸음 전진해 간결한 발리로 문장을 닫습니다.</p>

            <h2 id="rhythm-selection-emotion-low-procedure-constant">리듬과 선택 — 감정은 낮게, 절차는 일정하게</h2>
            <p>그의 포인트 사이는 의식처럼 단순합니다. 라켓 스트링을 정리하고, 두 번의 깊은 호흡, 일정한 토스. 스코어가 기울어도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않습니다. 타이브레이크 초반에는 높이·길이를 확인하는 안전한 구질을 택하고, 3~4포인트 구간에서만 라인을 얇게 써 균형을 기울입니다. 위험을 회피하지 않되, 이유가 없는 도박은 하지 않는 선택이 일관됩니다.</p>

            <h2 id="transition-technique-defense-attack-one-beat-ahead">전환의 기술 — 방어에서 공격으로, 한 박자 앞서기</h2>
            <p>그가 수비형 선수로 오해받는 이유는 단지 '끝까지 주워 올리기' 때문이 아닙니다. 낮은 슬라이스와 깊은 로브로 시간을 벌어 놓고, 복귀 첫 스텝에서 이미 중앙을 선점해 카운터의 각을 만들어 둡니다. 코트가 빠른 하드에서는 백스윙을 더 줄여 타점을 앞에 고정하고, 점토에서는 회전을 늘려 낙구를 안정시키며 네 번째·다섯 번째 스트로크에서 드롭·슬라이스로 템포를 비틀어 흐름을 되찾습니다. 잔디에서는 리턴 포지션을 반 발 앞당겨 첫 임팩트의 시간을 훔칩니다.</p>

            <h2 id="experience-crisis-management-scoreboard-movement-accuracy">경험과 위기관리 — 점수판보다 동작의 정확도</h2>
            <p>조코비치는 위기에서 점수판을 보지 않습니다. 토스 높이, 임팩트 위치, 라켓면의 각—세 단어만 머릿속에 남깁니다. 브레이크 포인트에서는 중앙 깊은 볼 두 개로 상대 스텝을 뒤로 밀어낸 뒤, 백핸드 다운더라인으로 선을 가릅니다. 관중의 소음이 커질수록 그의 동작은 더 일정해지고, 포인트 사이 시간은 더 균일해집니다. 감정의 파고를 절차로 낮추는 선수입니다.</p>

            <h2 id="human-aspects-discipline-care-language">인간적인 면모 — 규율과 배려의 언어</h2>
            <p>인터뷰에서 그는 준비와 팀을 먼저 언급합니다. 승리의 날에는 스태프 이름을, 패배의 날에는 수정 항목을 나열합니다. 팬과의 소통은 차분하지만 진솔하고, 코트 스태프를 향한 짧은 감사 인사를 잊지 않습니다. 경쟁은 냉정하게, 인간관계는 따뜻하게—이 대비가 그의 이미지를 단단하게 만듭니다.</p>

            <h2 id="nationality-culture-small-country-learned-pride">국적과 문화 — 작은 나라에서 배운 큰 자부심</h2>
            <p>세르비아 스포츠의 서사는 끈기와 연대입니다. 그는 개인의 승부를 공동체의 이야기로 확장합니다. 국기를 단 채 코트에 들어설 때, 조코비치는 한 장면이 다음 세대의 꿈이 될 수 있음을 기억합니다. 개인의 기록을 넘어 상징이 되는 책임을 의식적으로 다룹니다.</p>

            <h2 id="relationships-rivals-each-other-answer-steal-time">관계와 라이벌 — 서로의 해답을 훔치는 시간</h2>
            <p>동시대 강자들과의 문답은 늘 전략의 교환으로 진행됩니다. 강한 톱스핀으로 밀어붙이는 유형에겐 라켓면을 더 닫아 플랫에 가깝게 맞서고, 네트 대시를 서두르는 상대에겐 낮은 통과샷과 깊은 로브를 번갈아 보여 첫 시도를 주저하게 만듭니다. 같은 패턴이 두 번 허용되면 세 번째에는 타점과 속도를 바꿔 같은 구역을 다른 느낌으로 찌릅니다. 작은 수정이 후반의 큰 차이가 됩니다.</p>

            <h2 id="famous-scenes-return-twice-down-line-once">명장면 — 리턴 두 번, 다운더라인 한 번</h2>
            <p>애드코트에서 바디로 파고드는 서브를 낮게 되돌리고, 다음 포인트에서도 중앙 깊은 리턴으로 각을 지웁니다. 상대의 퍼스트볼이 짧아지는 순간, 조코비치는 백핸드를 몸 가까이 끌어당겨 라인으로 단호히 접습니다. 공이 흰 선을 스치며 빠져나갈 때 관중의 숨이 멎고, 그는 표정을 바꾸지 않은 채 같은 속도로 베이스라인을 밟습니다. 감정이 아닌 절차가 승부를 만든다는 믿음이 응축된 장면입니다.</p>

            <h2 id="equipment-details-tension-contact-balance-adjustment">장비와 디테일 — 텐션·접점·밸런스의 미세 조정</h2>
            <p>그는 스트링 텐션을 대회장 기온·습도에 맞춰 소폭 조정하며, 실내에서는 텐션을 조금 올려 접점의 흔들림을 줄입니다. 라켓 밸런스는 과도한 헤드 헤비를 피해 회복 시간을 단축하고, 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목의 흔들림을 줄입니다. 장비가 플레이를 지배하도록 두지 않고, 플레이가 요구하는 만큼만 조정합니다.</p>

            <h2 id="future-challenges-match-selection-conclusion-conciseness">앞으로의 과제 — 경기 선택과 결말의 간결함</h2>
            <p>그의 다음 단계는 기록의 추가가 아니라 선택의 최적화에 가깝습니다. 시즌 운영에서 대회 선택을 더 정밀하게 하고, 하프코트에서의 마무리를 한 박자 더 빠르게 가져온다면 체력·부상 리스크를 관리하며 최적의 날을 더 자주 만들 수 있습니다. 이미 증명한 안정 위에 결말의 속도가 얹히면, 그의 이름은 여전히 마지막 장면에 남을 것입니다.</p>

            <h2 id="fans-community-lasting-trust">팬과 커뮤니티 — 오래 가는 신뢰</h2>
            <p>조코비치를 오래 응원하게 만드는 힘은 일관성입니다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말합니다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상이 완성됩니다. 기록은 표가 되지만, 태도는 기억이 됩니다. 그래서 그의 테니스는 결과를 넘어 설득으로 남습니다.</p>
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
                      <a href="https://en.wikipedia.org/wiki/Novak_Djokovic" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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