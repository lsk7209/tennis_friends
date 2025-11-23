import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '알렉스 드 미노 선수 프로필과 스토리',
  description: '끊임없는 풋워크와 흔들리지 않는 선택으로 점수를 쌓는 알렉스 드 미노의 성장 배경, 경기 스타일, 관계와 향후 과제를 정리했습니다.',
  keywords: ['테니스', '알렉스 드 미노', '선수 프로필', '스토리', '호주'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/alex-de-minaur',
  },
  openGraph: {
    title: '알렉스 드 미노 선수 프로필과 스토리',
    description: '끊임없는 풋워크와 흔들리지 않는 선택으로 점수를 쌓는 알렉스 드 미노의 성장 배경, 경기 스타일, 관계와 향후 과제를 정리했습니다.',
    url: 'https://www.tennisfrens.com/blog/alex-de-minaur',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '알렉스 드 미노 선수 프로필과 스토리',
    description: '끊임없는 풋워크와 흔들리지 않는 선택으로 점수를 쌓는 알렉스 드 미노의 성장 배경, 경기 스타일, 관계와 향후 과제를 정리했습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-two-continents-made-rhythm-discipline', text: '성장 배경 — 두 대륙이 만든 리듬과 규율', depth: 2 },
  { id: 'playing-style-speed-maintain-angle-limit-fast-return', text: '경기 스타일 — 속도 유지, 각도 제한, 빠른 복귀', depth: 2 },
  { id: 'return-transition-departure-shake-foot-device', text: '리턴과 전환 — 출발점을 흔드는 발의 장치', depth: 2 },
  { id: 'rhythm-selection-emotion-low-procedure-constant', text: '리듬과 선택 — 감정은 낮게, 절차는 일정하게', depth: 2 },
  { id: 'surface-development-hard-straight-grass-concise-clay', text: '표면별 전개 — 하드의 직선, 잔디의 간결, 점토의 인내', depth: 2 },
  { id: 'human-aspects-humble-language-firm-responsibility', text: '인간적인 면모 — 겸손한 언어, 확고한 책임', depth: 2 },
  { id: 'nationality-culture-tradition-grit-modern-efficiency', text: '국적과 문화 — 전통의 투지, 현대의 효율', depth: 2 },
  { id: 'relationships-rivals-speed-generation-length-angle-answer', text: '관계와 라이벌 — 속도의 세대에 길이·각으로 답하다', depth: 2 },
  { id: 'famous-scenes-impossible-defense-reversal', text: '명장면 — 불가능해 보이는 수비에서의 반전', depth: 2 },
  { id: 'equipment-details-lightness-stability', text: '장비와 디테일 — 가벼움 속의 안정', depth: 2 },
  { id: 'future-challenges-conclusion-density-second-serve', text: '앞으로의 과제 — 결말의 밀도와 세컨드 서브', depth: 2 },
  { id: 'fans-community-lasting-trust-way', text: '팬과 커뮤니티 — 오래 가는 신뢰의 방식', depth: 2 },
];

const faqs = [
  {
    q: '알렉스 드 미노의 경기 스타일은 어떤가요?',
    a: '끊임없는 풋워크와 흔들리지 않는 수비·전환, 간결한 결말이 특징입니다. 속도를 유지하며 각을 제한하고, 상대의 공격을 길이로 희석한 뒤 빈틈에서 한 박자 빠르게 닫는 테니스입니다.'
  },
  {
    q: '데 미노르의 성장 배경은 어떤가요?',
    a: '복수 문화권에서 성장했으며, 실내·야외를 오가며 다양한 바운드와 기후를 경험했습니다. 워밍업 순서, 스트레칭 시간, 첫 서브 루틴을 고정해 생활의 질서를 만들었고, 짧고 촘촘한 인터벌로 가속-감속-재가속의 리듬을 몸에 새겼습니다.'
  },
  {
    q: '데 미노르의 강점은 무엇인가요?',
    a: '끝나지 않는 발과 흔들리지 않는 선택이 최대 강점입니다. 가벼운 발과 끈질긴 수비로 상대의 시간을 빼앗으며, 간결한 전환으로 빠르게 결말을 만듭니다.'
  },
  {
    q: '데 미노르의 인간적인 면모는 어떤가요?',
    a: '겸손한 언어와 확고한 책임이 특징입니다. 인터뷰는 담백하며, 팀 퍼스트 성향이 강해 경기 전후의 절차를 생활로 옮겨 놓았습니다. 강함을 과시하기보다 강함을 다루는 법을 택하는 유형입니다.'
  },
  {
    q: '데 미노르의 미래 전망은 어떻게 되나요?',
    a: '하프코트 마무리 일관성과 세컨드 서브 코스 다양화가 관건입니다. 리턴 직후 3구에서 전진 타이밍 반 박자 앞당김, 결말 선택지를 고정하면 긴 경기에서도 에너지 관리가 쉬워질 것입니다.'
  },
];

export default function AlexDeMinaurBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '알렉스 드 미노', '선수 프로필', '스토리', '호주'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            알렉스 드 미노
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            끝나지 않는 발, 흔들리지 않는 선택
          </p>
          <p className="text-lg text-blue-50/90 mb-10 max-w-3xl leading-relaxed">
            가벼운 발과 끈질긴 수비, 간결한 전환으로 상대의 시간을 빼앗는 알렉스 드 미노의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.
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
              <span className="font-medium">2025년 10월 20일</span>
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
                <strong className="text-blue-700 dark:text-blue-300">직답:</strong> 알렉스 드 미노(Alex de Minaur)는 끊임없이 이어지는 풋워크와 흔들리지 않는 수비·전환, 간결한 결말로 상대의 시간을 빼앗는 호주의 간판이다.
              </p>
            </div>

            <h2 id="growth-background-two-continents-made-rhythm-discipline">성장 배경 — 두 대륙이 만든 리듬과 규율</h2>
            <p>복수 문화권에서 성장한 그는 실내·야외를 오가며 다양한 바운드와 기후를 경험했다. 코칭팀은 "동작을 줄이고 접점을 앞에 둔다"는 원칙을 반복했고, 그는 훈련 일지에 매일 '오늘의 수정 한 줄'을 적었다. 원정이 잦을수록 워밍업 순서, 스트레칭 시간, 첫 서브 루틴을 고정해 생활의 질서를 만들었고, 이 습관이 큰 관중 속에서도 표정을 흔들리지 않게 했다. 체력은 양으로만 키우지 않았다. 짧고 촘촘한 인터벌, 코너에서 코너로 이어지는 풋워크 드릴로 '가속-감속-재가속'의 리듬을 몸에 새겼다.</p>

            <h2 id="playing-style-speed-maintain-angle-limit-fast-return">경기 스타일 — 속도 유지, 각도 제한, 빠른 복귀</h2>
            <p>데 미노르의 포인트는 속도를 유지하며 각을 제한하는 데 초점이 맞춰져 있다. 포핸드는 큰 스윙보다 짧은 준비와 길게 미는 임팩트로 깊이를 확보하고, 백핸드는 양손의 단단한 면으로 안전을 쌓는다. 수비 국면에선 낮게 깔린 슬라이스와 로브로 시간을 벌고, 다음 볼에서 즉시 중앙을 회수해 카운터의 각을 만든다. 짧은 볼이 보이면 하프코트로 한 걸음 전진해 하프발리·드롭 이후 전진 발리로 결말을 앞당긴다. 요약하면 상대의 공격을 길이로 희석하고, 빈틈에서 한 박자 빠르게 닫는 테니스다.</p>

            <h2 id="return-transition-departure-shake-foot-device">리턴과 전환 — 출발점을 흔드는 발의 장치</h2>
            <p>퍼스트 서브 리턴은 한두 걸음 뒤에서 시작해 탄도와 길이를 맞추고, 세컨드 서브에는 과감히 전진해 접점을 앞세운다. 리턴 직후 중앙 깊은 볼로 각을 닫아두며, 세 번째 스트로크에서만 코너를 열어 균열을 만든다. 네트를 서두르는 상대에겐 낮은 통과샷과 깊은 로브를 교차해 첫 시도를 주저하게 한다. 이 작은 장치들이 합쳐지면 상대의 3구 패턴은 서서히 무뎌진다.</p>

            <h2 id="rhythm-selection-emotion-low-procedure-constant">리듬과 선택 — 감정은 낮게, 절차는 일정하게</h2>
            <p>포인트 사이 루틴은 단출하다. 라켓 스트링을 정리하고 두 번의 깊은 호흡 후 일정한 토스. 스코어가 기울어도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않는다. 타이브레이크 초반엔 네트를 넉넉히 넘기는 구질로 높이·길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 균형을 흔든다. 위험을 회피하지 않되 근거 없는 도박은 하지 않는 선택이 일관된다.</p>

            <h2 id="surface-development-hard-straight-grass-concise-clay">표면별 전개 — 하드의 직선, 잔디의 간결, 점토의 인내</h2>
            <p>하드에서는 퍼스트 서브 확률과 3구 패턴의 속도로 주도권을 잡고, 리턴 게임에선 중앙 깊은 볼로 각을 지워 다음 볼에서 속도를 끌어올린다. 잔디에선 토스를 낮추고 백스윙을 더 줄여 타점을 앞에 고정, 슬라이스 리턴을 섞어 초반 폭주를 통제한다. 점토에서는 회전을 늘려 낙구를 안정시키고, 길어진 랠리 중간에 드롭·슬라이스를 섞어 템포를 비튼 뒤 직선 전환으로 결말을 만든다. 표면이 달라져도 먼저 안정, 틈에서 가속이라는 원칙은 변하지 않는다.</p>

            <h2 id="human-aspects-humble-language-firm-responsibility">인간적인 면모 — 겸손한 언어, 확고한 책임</h2>
            <p>그의 인터뷰는 담백하다. 이긴 날엔 준비가 맞았다고, 진 날엔 수정 항목이 분명하다고 말한다. 팬에게는 미소와 또렷한 인사를, 코트 스태프에게는 짧은 감사를 건넨다. 팀 퍼스트 성향이 강해 경기 전후의 절차를 생활로 옮겨 놓았고, 긴 시즌에도 컨디션의 파고가 크지 않다. '강함을 과시하기보다 강함을 다루는 법'을 택하는 유형이다.</p>

            <h2 id="nationality-culture-tradition-grit-modern-efficiency">국적과 문화 — 전통의 투지, 현대의 효율</h2>
            <p>호주 테니스는 투지와 체력의 상징처럼 이야기되지만, 데 미노르는 여기에 효율을 더했다. 무작정 달리기보다 수비와 전환의 품질을 균일하게 유지하고, 확률 높은 선택을 꾸준히 누적한다. 대표팀 이벤트에서 보이는 에너지와 매너는 왜 그가 '팬 친화적 에이스'로 불리는지 설명한다.</p>

            <h2 id="relationships-rivals-speed-generation-length-angle-answer">관계와 라이벌 — 속도의 세대에 길이·각으로 답하다</h2>
            <p>폭발적인 가속으로 초반을 장악하는 동세대와 맞붙을 때, 그는 리턴 포지션과 중앙 깊은 볼로 속도를 상쇄한다. 네트를 서두르는 유형에겐 낮은 통과샷과 깊은 로브를 교차해 첫 시도를 주저하게 만들고, 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 속도로 찌른다. 작은 수정이 후반의 큰 차이를 만든다.</p>

            <h2 id="famous-scenes-impossible-defense-reversal">명장면 — 불가능해 보이는 수비에서의 반전</h2>
            <p>브레이크 포인트. 코너 깊숙한 공을 슬라이딩으로 끌어올린 뒤, 데 미노르는 중앙을 한 박자 먼저 회수한다. 상대의 다음 볼이 반 박자 짧아지는 순간, 그는 포핸드 직선을 가차 없이 꽂는다. 관중의 탄성이 터져도 그는 같은 속도로 베이스라인을 밟는다. 감정이 아니라 절차가 반전을 만든 장면이다.</p>

            <h2 id="equipment-details-lightness-stability">장비와 디테일 — 가벼움 속의 안정</h2>
            <p>대회장 기온·습도에 따라 스트링 텐션을 소폭 조정하고, 라켓 밸런스는 과도한 헤드 헤비를 피해 스윙 회복을 빠르게 한다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목 흔들림을 줄인다. 장비가 플레이를 지배하지 않도록, 플레이가 요구하는 만큼만 조정하는 철학이 일관된다.</p>

            <h2 id="future-challenges-conclusion-density-second-serve">앞으로의 과제 — 결말의 밀도와 세컨드 서브</h2>
            <p>더 높은 단계로 가기 위해선 하프코트 마무리의 일관성과 세컨드 서브 코스의 다양화가 관건이다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 결말의 선택지를 한두 개로 고정한다면 긴 경기에서도 에너지 관리가 쉬워질 것이다. 이미 갖춘 이동 능력과 방어·전환의 설득력 위에 결말의 밀도가 더해질 때, 그의 이름은 큰 무대의 마지막 장면에서 더 자주 불릴 가능성이 크다.</p>

            <h2 id="fans-community-lasting-trust-way">팬과 커뮤니티 — 오래 가는 신뢰의 방식</h2>
            <p>그를 오래 응원하게 만드는 힘은 태도의 일관성이다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말한다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상이 완성된다. 기록은 표가 되지만, 태도는 기억이 된다. 데 미노르의 테니스가 결과를 넘어 이야기로 남는 이유다.</p>
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
                      <a href="https://en.wikipedia.org/wiki/Alex_de_Minaur" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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