import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '다닐 메드베데프 선수 프로필과 스토리',
  description: '낮은 탄도와 깊은 낙구, 독특한 포지셔닝으로 지공의 미학을 구현하는 다닐 메드베데프의 성장 배경, 경기 스타일, 인간적인 면모와 라이벌 구도를 정리했습니다.',
  keywords: ['테니스', '다닐 메드베데프', '선수 프로필', '스토리', '러시아'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/daniil-medvedev',
  },
  openGraph: {
    title: '다닐 메드베데프 선수 프로필과 스토리',
    description: '낮은 탄도와 깊은 낙구, 독특한 포지셔닝으로 지공의 미학을 구현하는 다닐 메드베데프의 성장 배경, 경기 스타일, 인간적인 면모와 라이벌 구도를 정리했습니다.',
    url: 'https://tennisfriends.co.kr/blog/daniil-medvedev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '다닐 메드베데프 선수 프로필과 스토리',
    description: '낮은 탄도와 깊은 낙구, 독특한 포지셔닝으로 지공의 미학을 구현하는 다닐 메드베데프의 성장 배경, 경기 스타일, 인간적인 면모와 라이벌 구도를 정리했습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-rules-records', text: '성장 배경 — 규칙과 기록으로 만든 안정감', depth: 2 },
  { id: 'playing-style-low-trajectory-straight', text: '경기 스타일 — 낮은 탄도, 긴 직선, 늦게 닫히는 각', depth: 2 },
  { id: 'return-positioning-start-point', text: '리턴과 포지셔닝 — 출발점을 바꾸는 기술', depth: 2 },
  { id: 'rhythm-selection-emotion-procedure', text: '리듬과 선택 — 감정은 낮게, 절차는 일정하게', depth: 2 },
  { id: 'surface-transition-hard-grass-clay', text: '표면별 전환 — 하드의 직선, 잔디의 간결, 점토의 인내', depth: 2 },
  { id: 'human-aspects-honesty-humor-discipline', text: '인간적인 면모 — 솔직함과 유머, 그리고 규율', depth: 2 },
  { id: 'nationality-culture-belief-rules', text: '국적과 문화 — 규칙을 믿는 끈기', depth: 2 },
  { id: 'relationships-rivals-speed-angle', text: '관계와 라이벌 — 속도의 세대와 각도의 문답', depth: 2 },
  { id: 'famous-scenes-center-twice-line-once', text: '명장면 — 중앙 두 번, 라인 한 번', depth: 2 },
  { id: 'equipment-details-tension-balance-contact', text: '장비와 디테일 — 텐션·밸런스·접점의 미세 조정', depth: 2 },
  { id: 'future-challenges-advance-timing-conclusion', text: '앞으로의 과제 — 전진의 타이밍과 결말의 간결함', depth: 2 },
  { id: 'fans-community-lasting-trust', text: '팬과 커뮤니티 — 오래 가는 신뢰', depth: 2 },
];

const faqs = [
  {
    q: '다닐 메드베데프의 경기 스타일은 어떤가요?',
    a: '낮은 탄도와 깊은 낙구, 독특한 코트 포지셔닝이 특징입니다. 각도와 깊이로 상대의 선택지를 점점 좁혀 가는 지공의 미학을 구현합니다.'
  },
  {
    q: '메드베데프의 성장 배경은 어떤가요?',
    a: '실내 코트와 기록 노트로 채워진 유년기를 보냈습니다. 규칙과 기록으로 안정감을 만들었고, 생활의 질서가 큰 무대에서도 표정을 흔들리지 않게 만듭니다.'
  },
  {
    q: '메드베데프의 강점은 무엇인가요?',
    a: '낮은 탄도, 긴 직선, 늦게 닫히는 각이 강점입니다. 리턴과 포지셔닝으로 출발점을 바꾸는 기술과 베이스라인 뒤에서의 길이 제어, 시간 훔치기가 뛰어납니다.'
  },
  {
    q: '메드베데프의 인간적인 면모는 어떤가요?',
    a: '직설적이지만 책임의 언어가 분명합니다. 코트 밖에서는 유머로 분위기를 풀지만, 경기 전후 절차와 팀과의 약속은 거의 흐트러뜨리지 않습니다.'
  },
  {
    q: '메드베데프의 미래 전망은 어떻게 되나요?',
    a: '하프코트에서의 한 박자 빠른 마무리와 세컨드 서브 코스 다양화가 과제입니다. 리턴 직후 전진 타이밍을 앞당기고 마무리 선택지를 단순화하면 에너지 관리가 개선됩니다.'
  },
];

export default function DaniilMedvedevBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '다닐 메드베데프', '선수 프로필', '스토리', '러시아'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            다닐 메드베데프
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            각도와 깊이로 짜는 지공의 미학
          </p>
          <p className="text-lg text-blue-50/90 mb-10 max-w-3xl leading-relaxed">
            낮은 탄도로 깊이를 누적하고, 리턴과 코트 포지셔닝으로 상대의 선택지를 지우는 다닐 메드베데프의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.
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
              <span className="font-medium">2025년 9월 21일</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="daniil-medvedev" date="2024-01-01" title="" excerpt="">
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
                <strong className="text-blue-700 dark:text-blue-300">직답:</strong> 다닐 메드베데프(Daniil Medvedev)는 낮은 탄도와 깊은 낙구, 독특한 코트 포지셔닝으로 상대의 선택지를 점점 좁혀 가는 현대 하드코트의 설계자다.
              </p>
            </div>

            <h2 id="growth-background-rules-records">성장 배경 — 규칙과 기록으로 만든 안정감</h2>
            <p>그의 유년기는 실내 코트와 기록 노트로 채워졌다. 코치는 결과보다 과정, 특히 "동작을 줄이고 접점을 앞에 둔다"는 한 문장을 반복했고, 메드베데프는 매일의 훈련이 끝나면 잘된 것과 고칠 점을 각각 세 줄로 요약했다. 낯선 원정지에서도 스트레칭 순서·워밍업 시간·첫 서브 루틴을 거의 바꾸지 않는 생활의 질서가 몸에 배었고, 이 습관이 큰 관중과 긴 랠리 속에서도 표정을 흔들리지 않게 만든다.</p>

            <h2 id="playing-style-low-trajectory-straight">경기 스타일 — 낮은 탄도, 긴 직선, 늦게 닫히는 각</h2>
            <p>메드베데데프의 공은 네트를 아슬아슬하게 넘어 깊게 가라앉는다. 포핸드는 큰 회전보다 낮은 탄도와 길이로 압박하며, 백핸드는 양손의 견고함으로 라인을 얇게 긁어 각을 만든다. 그는 베이스라인 뒤에서 한두 걸음 더 물러난 포지션을 즐겨 취하지만, 그만큼 볼의 길이 제어와 시간 훔치기에 능하다. 상대가 무리해 각을 열면 즉시 다운더라인으로 전환해 균형을 흔들고, 짧은 볼에는 하프코트에서 한 박자 늦게 닫히는 각도로 마무리한다. 네트 접근은 과감하기보다 필요할 때만—빈 공간이 명확히 보일 때만 들어가 실수를 줄인다.</p>

            <h2 id="return-positioning-start-point">리턴과 포지셔닝 — 출발점을 바꾸는 기술</h2>
            <p>그의 리턴은 단지 되돌려 보내는 행위가 아니다. 퍼스트 서브에는 한참 뒤에서 출발해 탄도와 길이를 맞춰 상대의 3구 패턴을 지우고, 세컨드 서브에는 전진해 접점을 앞세운다. 바깥에서 안으로 들어오는 이 왕복 동선이 상대의 토스와 코스 선택을 흔들어, 경기 초반부터 심리적 부하를 만든다. 리턴 이후에는 중앙 깊은 볼로 각을 닫아두고, 세 번째 스트로크에서만 코너를 열어 작은 균열을 만든다.</p>

            <h2 id="rhythm-selection-emotion-procedure">리듬과 선택 — 감정은 낮게, 절차는 일정하게</h2>
            <p>포인트 사이 그는 라켓 스트링을 훑고 두 번의 깊은 호흡으로 루틴을 고정한다. 스코어가 기울어도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않는다. 타이브레이크 초반에는 네트를 넉넉히 넘기는 구질로 높이·길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다. 위험을 회피하지 않되, 근거 없는 도박은 하지 않는 태도가 장기전에서 힘을 낸다.</p>

            <h2 id="surface-transition-hard-grass-clay">표면별 전환 — 하드의 직선, 잔디의 간결, 점토의 인내</h2>
            <p>하드에서는 퍼스트 서브 확률과 리턴 패턴으로 지공의 흐름을 만든다. 잔디에서는 백스윙을 짧게 줄이고 토스를 낮춰 타점을 앞에 고정, 초반 속도를 통제한다. 점토에서는 회전을 조금 더해 낙구를 안정시키고, 네 번째나 다섯 번째 스트로크에서 드롭·슬라이스를 섞어 템포를 비튼 뒤 다시 직선으로 전환한다. 표면이 달라져도 원칙은 동일하다. 흐름을 먼저 안정시키고, 열린 틈에서만 칼을 뽑는다.</p>

            <h2 id="human-aspects-honesty-humor-discipline">인간적인 면모 — 솔직함과 유머, 그리고 규율</h2>
            <p>메드베데프의 인터뷰는 직설적이지만 책임의 언어가 분명하다. 잘된 날은 준비가 맞았다고, 부족한 날은 수정이 필요하다고 말한다. 코트 밖에서는 장난기 섞인 유머로 분위기를 풀지만, 경기 전후의 절차와 팀과의 약속은 거의 흐트러뜨리지 않는다. 팬에게는 눈맞춤과 짧은 감사 인사를 잊지 않고, 볼퍼슨·코트 스태프에게도 예의를 지킨다.</p>

            <h2 id="nationality-culture-belief-rules">국적과 문화 — 규칙을 믿는 끈기</h2>
            <p>러시아의 훈련 문화는 반복과 규칙을 중시한다. 메드베데프의 테니스에도 이 정신이 뚜렷하다. 화려한 변주보다 정밀한 반복으로 구석을 두드리고, 작은 성공을 중첩해 큰 흐름을 만든다. 대표팀 이벤트에서 보이는 침착함은 개인을 넘어 공동체의 상징으로 확장된다.</p>

            <h2 id="relationships-rivals-speed-angle">관계와 라이벌 — 속도의 세대와 각도의 문답</h2>
            <p>강한 가속으로 초반을 장악하는 신세대와 맞붙을 때 그는 각과 길이로 속도를 상쇄한다. 리턴 포지션을 뒤로 빼 시간을 벌고, 중앙 깊은 볼로 각을 닫아 두며, 세 번째에서만 코너를 열어 반격한다. 네트를 서두르는 유형에겐 낮은 통과샷과 깊은 로브를 번갈아 보여 첫 시도를 주저하게 만든다. 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 속도로 찌른다.</p>

            <h2 id="famous-scenes-center-twice-line-once">명장면 — 중앙 두 번, 라인 한 번</h2>
            <p>브레이크 포인트. 그는 중앙 깊은 볼 두 개로 상대 스텝을 뒤로 밀어낸 뒤, 백핸드를 몸 가까이 끌어당겨 라인으로 단호히 접는다. 공이 흰 선을 스치며 빠져나갈 때 관중의 숨이 잠시 멎고, 그는 같은 속도로 베이스라인을 밟는다. 감정이 아니라 절차가 승부를 만든다는 믿음이 응축된 순간이다.</p>

            <h2 id="equipment-details-tension-balance-contact">장비와 디테일 — 텐션·밸런스·접점의 미세 조정</h2>
            <p>대회장 기온·습도에 맞춰 스트링 텐션을 소폭 조정하고, 라켓 밸런스는 과도한 헤드 헤비를 피해 스윙 회복을 빠르게 한다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목의 흔들림을 줄인다. 장비가 플레이를 지배하도록 두지 않고, 플레이가 요구하는 만큼만 조정한다는 철학이 일관된다.</p>

            <h2 id="future-challenges-advance-timing-conclusion">앞으로의 과제 — 전진의 타이밍과 결말의 간결함</h2>
            <p>그가 더 높이 도약하기 위해 필요한 것은 하프코트에서의 한 박자 빠른 마무리와 세컨드 서브 코스의 소폭 다양화다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 마무리 선택지를 한두 개로 단순화한다면 긴 경기에서도 에너지 관리가 쉬워질 것이다. 이미 갖춘 깊이와 각의 설득력 위에 결말의 속도가 얹히면, 그의 이름은 큰 무대의 마지막 장면에 더 자주 남을 가능성이 크다.</p>

            <h2 id="fans-community-lasting-trust">팬과 커뮤니티 — 오래 가는 신뢰</h2>
            <p>메드베데프를 오래 응원하게 만드는 힘은 태도의 일관성이다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말한다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상을 완성한다. 기록은 표가 되지만, 태도는 기억이 된다. 그래서 그의 테니스는 결과를 넘어 설득으로 남는다.</p>
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
                      <a href="https://en.wikipedia.org/wiki/Daniil_Medvedev" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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