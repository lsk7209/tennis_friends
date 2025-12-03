import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '테일러 프리츠 선수 프로필과 스토리',
  description: '직선적 포핸드와 안정된 서브, 전술적 선택으로 하드코트를 설계하는 테일러 프리츠의 성장 배경과 플레이 철학, 라이벌 구도를 한 편으로.',
  keywords: ['테니스', '테일러 프리츠', '선수 프로필', '스토리', '미국'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/taylor-fritz',
  },
  openGraph: {
    title: '테일러 프리츠 선수 프로필과 스토리',
    description: '직선적 포핸드와 안정된 서브, 전술적 선택으로 하드코트를 설계하는 테일러 프리츠의 성장 배경과 플레이 철학, 라이벌 구도를 한 편으로.',
    url: 'https://tennisfriends.co.kr/blog/taylor-fritz',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테일러 프리츠 선수 프로필과 스토리',
    description: '직선적 포핸드와 안정된 서브, 전술적 선택으로 하드코트를 설계하는 테일러 프리츠의 성장 배경과 플레이 철학, 라이벌 구도를 한 편으로.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-western-hard-court-made-rhythm', text: '성장 배경 — 서부 하드코트가 만든 리듬', depth: 2 },
  { id: 'playing-style-forehand-open-backhand-suture', text: '경기 스타일 — 포핸드로 벌리고, 백핸드로 봉합', depth: 2 },
  { id: 'return-transition-departure-forward-one-step', text: '리턴과 전환 — 출발점을 앞당기는 한 발', depth: 2 },
  { id: 'rhythm-selection-emotion-low-procedure-constant', text: '리듬과 선택 — 감정은 낮게, 절차는 일정하게', depth: 2 },
  { id: 'surface-development-hard-straight-grass-concise-clay', text: '표면별 전개 — 하드의 직선, 잔디의 간결, 점토의 인내', depth: 2 },
  { id: 'human-aspects-calm-responsibility-language', text: '인간적인 면모 — 차분함과 책임의 언어', depth: 2 },
  { id: 'nationality-culture-us-hard-tradition-modern-translate', text: '국적과 문화 — 미국 하드의 전통을 현대적으로 번역', depth: 2 },
  { id: 'relationships-rivals-speed-generation-straight-answer', text: '관계와 라이벌 — 속도의 세대에 직선으로 답하다', depth: 2 },
  { id: 'famous-scenes-wide-straight-two-sentences', text: '명장면 — 와이드-직선의 두 문장', depth: 2 },
  { id: 'equipment-details-tension-balance-contact-sense', text: '장비와 디테일 — 텐션·밸런스·접점의 감각', depth: 2 },
  { id: 'future-challenges-return-position-halfcourt-conclusion', text: '앞으로의 과제 — 리턴 포지션과 하프코트의 결말', depth: 2 },
  { id: 'fans-community-lasting-trust-way', text: '팬과 커뮤니티 — 오래 가는 신뢰의 방식', depth: 2 },
];

const faqs = [
  {
    q: '테일러 프리츠의 경기 스타일은 어떤가요?',
    a: '직선 압박의 포핸드와 안정된 퍼스트 서브, 계산된 코스 선택이 특징입니다. 서브와 포핸드로 공간을 만들고 백핸드로 질서를 유지하며, 큰 코트의 시간을 압축합니다.'
  },
  {
    q: '프리츠의 성장 배경은 어떤가요?',
    a: '미 서부의 건조하고 빠른 코트에서 자랐으며, 부모가 모두 테니스 선수였던 가정 환경에서 루틴의 생활화를 일찍 체득했습니다. 워밍업·스트레칭·첫 서브 루틴을 일정한 순서로 고정했습니다.'
  },
  {
    q: '프리츠의 강점은 무엇인가요?',
    a: '직선의 파워와 계산된 각이 최대 강점입니다. 단단한 포핸드와 안정된 서브로 큰 코트의 시간을 단축하며, 계산된 코스 선택으로 하드코트를 설계합니다.'
  },
  {
    q: '프리츠의 인간적인 면모는 어떤가요?',
    a: '차분함과 책임이 특징입니다. 인터뷰는 담백하며, 팀의 키워드를 생활의 규칙으로 옮기는 성향이 강해 긴 시즌에서도 컨디션의 파고가 크지 않습니다.'
  },
  {
    q: '프리츠의 미래 전망은 어떻게 되나요?',
    a: '세컨드 서브 리턴 포지션의 고정과 하프코트 마무리 일관성이 관건입니다. 리턴 직후 3구에서 전진 타이밍 반 박자 앞당김, 결말 선택지를 고정하면 긴 경기에서도 에너지 관리가 쉬워질 것입니다.'
  },
];

export default function TaylorFritzBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '테일러 프리츠', '선수 프로필', '스토리', '미국'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            테일러 프리츠
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            직선의 파워, 계산된 각
          </p>
          <p className="text-lg text-blue-50/90 mb-10 max-w-3xl leading-relaxed">
            단단한 포핸드와 안정된 서브, 계산된 코스 선택으로 큰 코트의 시간을 단축하는 테일러 프리츠의 배경·스타일·과제를 정리했다.
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
              <span className="font-medium">2025년 9월 6일</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="taylor-fritz" date="2024-01-01" title="" excerpt="">
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
                <strong className="text-blue-700 dark:text-blue-300">직답:</strong> 테일러 프리츠(Taylor Fritz)는 직선 압박의 포핸드와 안정된 퍼스트 서브, 계산된 코스 선택으로 큰 코트의 시간을 압축하는 미국의 간판이다.
              </p>
            </div>

            <h2 id="growth-background-western-hard-court-made-rhythm">성장 배경 — 서부 하드코트가 만든 리듬</h2>
            <p>미 서부의 건조하고 빠른 코트에서 자란 그는 백스윙을 간결하게, 임팩트 구간을 길게 가져가는 법을 먼저 배웠다. 부모가 모두 테니스 선수였던 가정 환경은 '루틴의 생활화'를 일찍 체득하게 했고, 훈련 노트에는 화려한 수치보다 그날의 수정 한 줄이 먼저 남았다. 원정이 잦아져도 워밍업·스트레칭·첫 서브 루틴을 일정한 순서로 고정해 큰 관중 앞에서도 호흡을 잃지 않는 바탕을 만들었다.</p>

            <h2 id="playing-style-forehand-open-backhand-suture">경기 스타일 — 포핸드로 벌리고, 백핸드로 봉합</h2>
            <p>프리츠의 포핸드는 준비가 짧고 임팩트가 단단하다. 크로스로 깊이를 먼저 만들고, 빈 코너가 보이면 인사이드-아웃으로 코트를 크게 열어낸다. 백핸드는 과장된 회전 없이 평평한 궤적으로 라인을 얇게 긁어 균형을 지키며, 결정적 순간에는 다운더라인으로 상대의 스텝을 고정한다. 서브는 와이드·바디를 교차해 리턴러의 출발 각을 묶고, 3구에서 직선 포핸드로 결말을 재촉한다. 요약하면 서브와 포핸드로 공간을 만들고, 백핸드로 질서를 유지하는 테니스다.</p>

            <h2 id="return-transition-departure-forward-one-step">리턴과 전환 — 출발점을 앞당기는 한 발</h2>
            <p>퍼스트 리턴은 한두 걸음 뒤에서 시작해 탄도와 길이를 맞추고, 세컨드 서브에는 전진해 접점을 앞세운다. 리턴 후에는 중앙 깊은 볼로 각을 닫아두고, 세 번째 스트로크에서만 코너를 열어 작은 금을 만든다. 수비 국면에선 낮게 깔린 슬라이스로 시간을 벌고, 곧바로 직선 카운터로 톤을 되찾는 '두 박자' 전환이 특징이다.</p>

            <h2 id="rhythm-selection-emotion-low-procedure-constant">리듬과 선택 — 감정은 낮게, 절차는 일정하게</h2>
            <p>포인트 사이 루틴은 단출하다. 라켓 스트링을 정리하고 두 번의 깊은 호흡, 일정한 토스. 스코어가 기울어도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않는다. 타이브레이크 초반엔 네트를 넉넉히 넘기는 구질로 높이·길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다. 위험을 회피하지 않되 근거 없는 도박은 하지 않는 선택이 일관된다.</p>

            <h2 id="surface-development-hard-straight-grass-concise-clay">표면별 전개 — 하드의 직선, 잔디의 간결, 점토의 인내</h2>
            <p>하드에서는 퍼스트 서브 확률과 3구 패턴으로 시간을 단축한다. 잔디에선 토스를 낮추고 백스윙을 줄여 타점을 앞에 고정, 슬라이스 리턴을 섞어 초반 속도를 통제한다. 점토에서는 회전을 조금 더해 낙구를 안정시키고, 길어진 랠리 중간에 드롭·슬라이스를 섞어 템포를 비튼 뒤 다시 직선으로 전환한다. 표면이 달라져도 원칙은 같다. 먼저 안정, 틈에서 가속.</p>

            <h2 id="human-aspects-calm-responsibility-language">인간적인 면모 — 차분함과 책임의 언어</h2>
            <p>프리츠의 인터뷰는 담백하다. 이긴 날엔 계획이 맞았다고, 진 날엔 수정이 필요하다고 말한다. 팬에게는 미소와 눈맞춤을, 코트 스태프에게는 짧은 감사를 잊지 않는다. 팀의 키워드를 생활의 규칙으로 옮기는 성향이 강해 긴 시즌에서도 컨디션의 파고가 크지 않다.</p>

            <h2 id="nationality-culture-us-hard-tradition-modern-translate">국적과 문화 — 미국 하드의 전통을 현대적으로 번역</h2>
            <p>강서브·퍼스트볼 중심의 전통을 그는 품질의 균일성으로 현대화했다. 무작정 힘을 싣기보다 첫 두 타구의 구조로 득점 확률을 올리고, 리턴 게임에서는 중앙 깊은 볼로 각을 지운 뒤 다음 샷에서 속도를 붙인다. 대표팀 이벤트에서 보이는 매너와 집중력은 왜 그가 '팬 친화적 에이스'로 불리는지 설명한다.</p>

            <h2 id="relationships-rivals-speed-generation-straight-answer">관계와 라이벌 — 속도의 세대에 직선으로 답하다</h2>
            <p>폭발적인 가속을 앞세우는 동세대와 맞붙을 때, 그는 리턴 포지션과 중앙 깊이로 속도를 상쇄한 뒤 포핸드 직선으로 균열을 낸다. 네트를 서두르는 유형에겐 낮은 통과샷과 깊은 로브를 교차해 첫 시도를 주저하게 만들고, 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 속도로 찌른다.</p>

            <h2 id="famous-scenes-wide-straight-two-sentences">명장면 — 와이드-직선의 두 문장</h2>
            <p>브레이크 포인트. 와이드 서브로 코트를 벌린 뒤 돌아오는 짧은 리턴을 한 발 안으로 파고들어 포핸드 직선으로 닫는다. 공이 사이드라인을 스치며 미끄러지는 순간 관중의 탄성이 터지고, 그는 같은 속도로 베이스라인을 밟는다. 감정이 아니라 절차가 승부를 만든다는 믿음이 응축된 장면이다.</p>

            <h2 id="equipment-details-tension-balance-contact-sense">장비와 디테일 — 텐션·밸런스·접점의 감각</h2>
            <p>대회장 기온·습도에 맞춰 스트링 텐션을 소폭 조정하고, 라켓 밸런스는 과도한 헤드 헤비를 피해 스윙 회복을 빠르게 한다. 실내에서는 텐션을 약간 올려 접점의 흔들림을 줄이고, 바람이 많은 야외에서는 텐션을 낮춰 체공 시간을 확보한다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목의 흔들림을 줄인다.</p>

            <h2 id="future-challenges-return-position-halfcourt-conclusion">앞으로의 과제 — 리턴 포지션과 하프코트의 결말</h2>
            <p>한 단계 더 도약하려면 세컨드 서브 리턴 포지션의 고정과 하프코트 마무리의 일관성이 관건이다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 결말의 선택지를 한두 개로 고정한다면 긴 경기에서도 에너지 관리가 쉬워질 것이다. 이미 갖춘 서브·포핸드의 설득력 위에 결말의 속도가 더해질 때, 그의 이름은 큰 무대의 마지막 장면에서 더 자주 남을 가능성이 크다.</p>

            <h2 id="fans-community-lasting-trust-way">팬과 커뮤니티 — 오래 가는 신뢰의 방식</h2>
            <p>그를 오래 응원하게 만드는 힘은 태도의 일관성이다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말한다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상이 완성된다. 기록은 표가 되지만, 태도는 기억이 된다. 그래서 프리츠의 테니스는 결과를 넘어 이야기로 남는다.</p>
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
                      <a href="https://en.wikipedia.org/wiki/Taylor_Fritz" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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