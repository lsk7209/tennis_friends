import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '후베르트 후르카츠 선수 프로필과 스토리',
  description: '강력한 서브와 부드러운 풋워크, 절제된 전환으로 현대 테니스를 그려내는 후베르트 후르카츠의 성장 배경, 경기 스타일, 인간적인 면모를 담았습니다.',
  keywords: ['테니스', '후베르트 후르카츠', '선수 프로필', '스토리', '폴란드'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/hubert-hurkacz',
  },
  openGraph: {
    title: '후베르트 후르카츠 선수 프로필과 스토리',
    description: '강력한 서브와 부드러운 풋워크, 절제된 전환으로 현대 테니스를 그려내는 후베르트 후르카츠의 성장 배경, 경기 스타일, 인간적인 면모를 담았습니다.',
    url: 'https://tennisfriends.co.kr/blog/hubert-hurkacz',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '후베르트 후르카츠 선수 프로필과 스토리',
    description: '강력한 서브와 부드러운 풋워크, 절제된 전환으로 현대 테니스를 그려내는 후베르트 후르카츠의 성장 배경, 경기 스타일, 인간적인 면모를 담았습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-quiet-habit-making-solid', text: '성장 배경 — 단단함을 만드는 조용한 습관', depth: 2 },
  { id: 'playing-style-serve-start-foot-finish', text: '경기 스타일 — 서브로 출발해, 발로 마무리하다', depth: 2 },
  { id: 'rhythm-selection-routine-power-erase-noise', text: '리듬과 선택 — 소음을 지우는 루틴의 힘', depth: 2 },
  { id: 'experience-transition-grass-hard-clay', text: '경험과 전환 — 잔디의 속도, 하드의 질서, 점토의 인내', depth: 2 },
  { id: 'human-aspects-humor-care-quietness', text: '인간적인 면모 — 조용함 속의 유머와 배려', depth: 2 },
  { id: 'nationality-culture-poland-tenacity-court', text: '국적과 문화 — 폴란드의 끈기, 코트 위의 품격', depth: 2 },
  { id: 'relationships-rivals-fast-start-slow-conclusion', text: '관계와 라이벌 — 빠른 시작, 늦은 결론의 미학', depth: 2 },
  { id: 'famous-scenes-tiebreak-three-lines', text: '명장면 — 타이브레이크에서 그려지는 세 가지 선', depth: 2 },
  { id: 'equipment-details-tension-balance-contact', text: '장비와 디테일 — 텐션·밸런스·접점의 미세 조정', depth: 2 },
  { id: 'future-challenges-forward-timing-conclusion-speed', text: '앞으로의 과제 — 전진의 타이밍, 결말의 속도', depth: 2 },
  { id: 'fans-community-lasting-trust-reason', text: '팬과 커뮤니티 — 오래 가는 신뢰의 이유', depth: 2 },
];

const faqs = [
  {
    q: '후베르트 후르카츠의 경기 스타일은 어떤가요?',
    a: '강력한 서브와 유연한 풋워크, 과하지 않은 전환이 특징입니다. 거대한 스윙이 아니라 정교한 타이밍과 균형으로 점수를 쌓으며, 서브로 출발해 발로 마무리하는 방식으로 하드와 잔디에서 안정적인 승률을 만듭니다.'
  },
  {
    q: '후르카츠의 성장 배경은 어떤가요?',
    a: '폴란드 브로츠와프에서 자란 그는 어린 시절부터 정확하게 반복하는 것을 훈련의 핵심으로 배웠습니다. 코치의 주문은 간단했고, 실수는 오늘 안에 정리하고, 일관된 루틴으로 묶어 두었습니다.'
  },
  {
    q: '후르카츠의 강점은 무엇인가요?',
    a: '탄력과 절제가 최대 강점입니다. 강력한 서브의 낙구점 정확성으로 리턴러의 시간을 훔치고, 풋워크로 마무리하며, 근거 있는 선택으로 전환합니다. 현대형 서브&발리 스타일의 대표 선수입니다.'
  },
  {
    q: '후르카츠의 인간적인 면모는 어떤가요?',
    a: '조용함 속의 유머와 배려가 특징입니다. 인터뷰는 길지 않으며, 팬과 스태프에게 보내는 인사는 일정합니다. 강함을 과시하기보다 강함을 다루는 방식에 집중하는 태도가 인상적입니다.'
  },
  {
    q: '후르카츠의 미래 전망은 어떻게 되나요?',
    a: '전진의 타이밍과 결말의 속도가 과제입니다. 하프코트 마무리 빈도, 리턴 직후 3구에서의 전진 타이밍 반 박자 앞당김, 세컨드 서브 코스 다양화를 통해 긴 경기에서도 에너지 관리를 수월하게 할 수 있습니다.'
  },
];

export default function HubertHurkaczBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '후베르트 후르카츠', '선수 프로필', '스토리', '폴란드'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            후베르트 후르카츠
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            탄력과 절제로 설계하는 현대형 서브&발리
          </p>
          <p className="text-lg text-blue-50/90 mb-10 max-w-3xl leading-relaxed">
            거대한 스윙이 아니라 정교한 타이밍과 균형으로 점수를 쌓는 후베르트 후르카츠의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.
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
              <span className="font-medium">2025년 10월 2일</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="hubert-hurkacz" date="2024-01-01" title="" excerpt="">
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
                <strong className="text-blue-700 dark:text-blue-300">직답:</strong> 후베르트 후르카츠(Hubert Hurkacz)는 강력한 서브와 유연한 풋워크, 과하지 않은 전환으로 하드와 잔디에서 안정적인 승률을 만들어내는 폴란드의 간판 선수다.
              </p>
            </div>

            <h2 id="growth-background-quiet-habit-making-solid">성장 배경 — 단단함을 만드는 조용한 습관</h2>
            <p>폴란드 브로츠와프에서 자란 그는 어린 시절부터 "정확하게 반복하는 것"을 훈련의 핵심으로 배웠다. 코치의 주문은 늘 간단했다. 오늘의 실수는 오늘 안에 정리하고, 내일은 같은 실수를 다른 방법으로 막아라. 그래서 그의 연습은 화려하기보다 차분했고, 기록과 메모로 가득했다. 스트레칭의 순서, 워밍업의 시간, 첫 서브의 코스까지 일관된 루틴으로 묶어 두었고, 원정지에서도 그 질서를 거의 바꾸지 않았다. 이 습관은 큰 관중 앞에서도 호흡과 손의 감각을 잃지 않게 해 준다.</p>

            <h2 id="playing-style-serve-start-foot-finish">경기 스타일 — 서브로 출발해, 발로 마무리하다</h2>
            <p>후르카츠의 경기는 서브에서 시작해 풋워크로 완성된다. 퍼스트 서브는 속도뿐 아니라 낙구점의 정확성으로 리턴러의 시간을 훔치고, 세컨드 서브는 스핀과 방향을 섞어 랠리의 출발점을 본인 쪽으로 당긴다. 초구 이후에는 포핸드의 간결한 스윙으로 깊이를 만들고, 백핸드는 면을 곧게 세워 안전을 확보한다. 필요할 때는 하프코트에서 한 걸음 전진해 발리로 결말을 재촉하는데, 이 전환이 과감하기보다는 근거 있는 선택에 가깝다. 네트를 무리하게 점령하기보다는 빈 공간이 열렸을 때만 들어가 실수를 줄인다.</p>

            <h2 id="rhythm-selection-routine-power-erase-noise">리듬과 선택 — 소음을 지우는 루틴의 힘</h2>
            <p>그의 포인트 사이는 놀랄 만큼 단순하다. 라켓 스트링을 한 번 훑고, 두 번의 깊은 호흡, 일정한 토스. 스코어가 불리해도 루틴의 길이와 순서를 바꾸지 않기에 심박이 갑자기 치솟지 않는다. 타이브레이크에서는 첫 두 포인트로 높이와 길이를 확인하고, 세 번째부터 코스를 얇게 쓰며 균형을 흔든다. 리턴 게임에선 중앙 깊은 볼로 각을 지운 뒤, 다음 스트로크에서 속도를 올려 주도권을 되찾는다. 화려한 하이라이트보다 실수를 관리하는 선택이 우선이고, 이 태도가 장기전에서 빛을 발한다.</p>

            <h2 id="experience-transition-grass-hard-clay">경험과 전환 — 잔디의 속도, 하드의 질서, 점토의 인내</h2>
            <p>후르카츠는 표면에 따라 구질의 비율을 현실적으로 바꾼다. 잔디에서는 낮은 자세와 짧은 백스윙으로 타점을 앞당기고, 슬라이스 리턴을 섞어 랠리의 템포를 늦춘다. 하드에서는 퍼스트 서브 확률을 끌어올리고 3구 패턴을 단순화해 불필요한 오차를 줄인다. 점토에선 회전을 늘려 낙구를 안정시키고, 네 번째나 다섯 번째 스트로크에서 드롭·슬라이스를 섞어 상대의 리듬을 어지럽힌다. 환경이 달라져도 원칙은 같다. 흐름을 먼저 안정시키고, 열린 순간에만 칼을 빼든다.</p>

            <h2 id="human-aspects-humor-care-quietness">인간적인 면모 — 조용함 속의 유머와 배려</h2>
            <p>그의 인터뷰는 길지 않다. 잘된 날에는 준비가 맞아떨어졌다고 말하고, 부족한 날에는 수정할 항목을 짧게 나열한다. 팬과 스태프에게 보내는 인사는 일정하고, 아이에게 사인을 해 줄 때는 눈높이를 맞춘다. 코트 밖에선 농담을 섞어 긴장을 풀지만, 경기 전후의 약속된 절차만큼은 거의 흐트러뜨리지 않는다. 강함을 과시하기보다 강함을 다루는 방식에 집중하는 태도가 인상적이다.</p>

            <h2 id="nationality-culture-poland-tenacity-court">국적과 문화 — 폴란드의 끈기, 코트 위의 품격</h2>
            <p>폴란드 스포츠의 서사는 절제와 끈기를 말한다. 후르카츠는 이 전통을 현대 테니스의 언어로 번역한다. 큰 제스처보다 차분한 집중으로 승부를 만들고, 대표팀 이벤트에서 보이는 팀워크로 공동체의 자부심을 드러낸다. 국기를 달고 코트에 들어설 때, 그는 개인의 승부를 넘어 팬들의 기억에 남을 장면을 만들겠다는 책임을 잊지 않는다.</p>

            <h2 id="relationships-rivals-fast-start-slow-conclusion">관계와 라이벌 — 빠른 시작, 늦은 결론의 미학</h2>
            <p>동시대 강자들과의 맞대결에서 그는 초반에 위험을 줄이는 출발을 택한다. 라인을 깊게 노리기보다 네트를 충분히 넘기는 구질로 리듬을 맞추고, 세 번째 게임 즈음부터 와이드·바디 서브의 비율을 조정해 리턴 포지션을 흔든다. 네트를 서둘러 점령하는 유형에겐 낮은 통과샷과 깊은 로브를 번갈아 보여 첫 시도를 주저하게 만든다. 같은 패턴이 두 번 허용되면 세 번째에는 타점과 속도를 바꿔 같은 구역을 다른 느낌으로 찌른다. 이 작은 수정들이 후반으로 갈수록 큰 차이를 만든다.</p>

            <h2 id="famous-scenes-tiebreak-three-lines">명장면 — 타이브레이크에서 그려지는 세 가지 선</h2>
            <p>점수가 5-5로 엇갈릴 때, 그의 표정은 변하지 않는다. 첫 포인트는 안전한 코스로 리듬을 확인하고, 두 번째엔 와이드 서브로 코트를 벌린다. 세 번째에서 포핸드 직선을 과감하게 꽂아 균형을 깬다. 관중의 함성이 커져도 그는 같은 속도로 베이스라인을 밟는다. 감정이 아니라 절차가 승부를 만든다는 믿음이 이 장면에 응축돼 있다.</p>

            <h2 id="equipment-details-tension-balance-contact">장비와 디테일 — 텐션·밸런스·접점의 미세 조정</h2>
            <p>그는 라켓 밸런스를 과하게 머리쪽으로 보내지 않아 빠른 회복을 확보하고, 스트링 텐션은 기온과 공의 반발에 맞춰 소폭 조정한다. 더운 날에는 텐션을 약간 높여 반발을 제어하고, 실내에서는 텐션을 낮춰 체공 시간을 확보한다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목의 흔들림을 줄인다. 장비가 플레이를 지배하도록 두지 않고, 플레이가 요구하는 만큼만 장비를 조정한다는 철학이 일관된다.</p>

            <h2 id="future-challenges-forward-timing-conclusion-speed">앞으로의 과제 — 전진의 타이밍, 결말의 속도</h2>
            <p>후르카츠가 더 높이 가기 위한 열쇠는 하프코트에서의 마무리 빈도다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 세컨드 서브의 코스를 더 다양화한다면 긴 경기에서도 에너지 관리가 쉬워질 것이다. 이미 갖춘 서브의 설득력 위에 결말의 속도가 얹히면, 그의 이름은 큰 무대의 마지막 장면에서 더 자주 호명될 가능성이 크다.</p>

            <h2 id="fans-community-lasting-trust-reason">팬과 커뮤니티 — 오래 가는 신뢰의 이유</h2>
            <p>그를 응원하게 만드는 것은 큰 소리보다 작은 일관성이다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말한다. 기록은 표가 되지만, 태도는 기억이 된다. 후르카츠의 테니스가 오래 사랑받을 이유가 바로 여기에 있다.</p>
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
                      <a href="https://en.wikipedia.org/wiki/Hubert_Hurkacz" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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

          {/* CTA */}
          
      {/* FAQ Section */}
      <FAQ items={faqs} />

      <CTA />
        </div>
      </Article>
    </div>
  );
}