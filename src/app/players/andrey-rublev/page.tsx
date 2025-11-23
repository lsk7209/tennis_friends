import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '안드레이 루블레프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '안드레이 루블레프의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 불꽃 같은 포핸드와 간결한 리듬, 꾸준한 루틴으로 하드코트를 지배하는 러시아 출신의 세계랭킹 상위권 선수.',
  keywords: ['안드레이 루블레프', 'Andrey Rublev', '테니스', 'ATP', '플레이스타일', '러시아 테니스', '공격형', '포핸드'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/andrey-rublev',
  },
  openGraph: {
    title: '안드레이 루블레프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '안드레이 루블레프의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://www.tennisfrens.com/players/andrey-rublev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '안드레이 루블레프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '안드레이 루블레프의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'why-again-notable', text: '안드레이 루블레프, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 안드레이 루블레프의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '안드레이 루블레프, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '안드레이 루블레프의 경기 스타일은 어떤가요?',
    a: '공격형 스타일로, 불꽃 같은 포핸드와 간결한 리듬이 특징입니다. 직선의 파워와 끊어치는 템포로 하드코트를 지배하며, 꾸준한 루틴으로 경기의 흐름을 설계합니다.',
  },
  {
    q: '루블료프의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 상위권이었으며, 현재도 상위권을 유지하고 있습니다. 특히 하드 코트에서 강력한 모습을 보여주며, 큰 대회에서도 안정적인 경기력을 보여주고 있습니다.',
  },
  {
    q: '루블료프의 강점은 무엇인가요?',
    a: '불꽃 같은 포핸드와 간결한 리듬이 최대 강점입니다. 직선의 파워로 상대를 압박하며, 꾸준한 루틴으로 경기의 흐름을 설계하는 능력이 뛰어납니다.',
  },
  {
    q: '루블료프의 인간적인 면모는 어떤가요?',
    a: '뜨거움과 배려의 공존이 특징입니다. 인터뷰에서 준비와 팀을 먼저 언급하며, 감정은 뜨겁게 표현하되 절차는 차갑게 유지하는 일관성이 있습니다.',
  },
  {
    q: '루블료프를 한 문장으로 설명하면?',
    a: '불꽃 같은 포핸드와 간결한 리듬, 꾸준한 루틴으로 하드코트를 지배하는 러시아 출신의 강자입니다.',
  },
];

export default function AndreyRublevPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="안드레이 루블레프"
        excerpt="불꽃 같은 포핸드와 간결한 리듬, 꾸준한 루틴으로 하드코트를 지배하는 러시아 출신의 강자"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '안드레이 루블레프', '선수 프로필', '러시아', '공격형', '포핸드'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-again-notable">안드레이 루블레프, 왜 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  불꽃 같은 포핸드와 간결한 리듬, 꾸준한 루틴으로 하드코트를 지배하는 러시아 출신의 강자
                </p>
              </div>
            </blockquote>
            <p>안드레이 루블레프는 러시아 출신의 세계랭킹 상위권 테니스 선수로, 불꽃 같은 포핸드와 간결한 리듬으로 ATP 투어를 지배하고 있다. 세계랭킹 상위권을 유지하며, 특히 하드 코트에서 강력한 모습을 보여준다. 직선의 파워와 끊어치는 템포로 상대를 압박하는 그의 테니스는 하드코트의 설계자로 평가받는다.</p>
            <p>그는 마스터스 1000 시리즈에서 우승을 거두며 큰 대회에서도 안정적인 경기력을 보여주고 있다. 최근 몇 시즌 동안 꾸준한 성적을 유지하며, 특히 탑 10 선수들과의 경기에서도 승리를 거두고 있다. 그의 테니스는 화려함보다는 효율을 추구하며, 특히 불꽃 같은 포핸드가 뛰어나다.</p>

            <h2 id="what-type-of-player">이 선수는 어떤 유형의 플레이어인가?</h2>
            <p>안드레이 루블레프는 러시아 출신의 세계랭킹 상위권 선수로, 공격형 스타일과 불꽃 같은 포핸드가 특징인 ATP 투어의 강자다.</p>
            
            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">국적:</strong> <span className="text-gray-600 dark:text-gray-400">러시아</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">생년:</strong> <span className="text-gray-600 dark:text-gray-400">1997년 (27세)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">최고 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">상위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">현재 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">상위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">주 종목:</strong> <span className="text-gray-600 dark:text-gray-400">단식 (ATP 투어)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">플레이 스타일:</strong> <span className="text-gray-600 dark:text-gray-400">공격형</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">시그니처 무기:</strong> <span className="text-gray-600 dark:text-gray-400">포핸드</span></span>
                </li>
              </ul>
            </div>

            <p>플레이 스타일은 공격형으로 분류된다. 베이스라인에서 강력한 그라운드 스트로크를 구사하면서도, 기회가 생기면 네트로 전진해 발리로 마무리하는 능력을 갖추고 있다. 특히 불꽃 같은 포핸드가 그의 시그니처 무기로, 직선의 파워로 상대를 압박하는 능력이 뛰어나다.</p>
            
            <div className="not-prose my-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700">
                <Zap className="w-3 h-3 mr-1 inline" />
                불꽃 같은 포핸드
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Brain className="w-3 h-3 mr-1 inline" />
                간결한 리듬
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                <Award className="w-3 h-3 mr-1 inline" />
                꾸준한 루틴
              </Badge>
            </div>
            <p>팬들이 그를 표현할 때 자주 쓰는 말은 <strong>"불꽃 같은 포핸드"</strong>, <strong>"간결한 리듬"</strong>, <strong>"꾸준한 루틴"</strong>이다. 그의 테니스는 화려한 장식보다는 효율을 추구하며, 특히 직선의 파워와 끊어치는 템포로 하드코트를 지배한다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>루블료프가 세계 상위권을 유지하는 힘은 불꽃 같은 포핸드, 간결한 리듬, 그리고 멘탈의 성숙함에서 나온다.</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              기술적 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-lg border-l-2 border-purple-400 dark:border-purple-600">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong className="text-purple-700 dark:text-purple-300">불꽃 같은 포핸드</strong>가 가장 큰 무기. 직선의 파워로 상대를 압박하며, 끊어치는 템포로 경기의 흐름을 설계한다.
              </p>
            </div>
            <p>불꽃 같은 포핸드가 가장 큰 무기다. 직선의 파워로 상대를 압박하며, 끊어치는 템포로 경기의 흐름을 설계한다. 포핸드는 넓은 궤도와 빠른 채찍질로 코트를 벌린다. 백핸드는 양손의 견고함으로 라인을 얇게 긁어 각을 만든다. 서브는 와이드와 바디의 비율을 바꿔 첫 두 타구의 구조를 설계하고, 짧은 리턴이 오면 하프코트에서 한 걸음 전진해 발리로 결말을 재촉한다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>코트 커버리지가 뛰어나다. 전진과 후퇴를 자유롭게 오간다. 짧은 볼이 보이면 하프코트에서 한 걸음 전진해 발리로 마무리한다. 장기전에서도 체력 관리가 뛰어나며, <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">5세트 경기에서도 후반까지 안정적인 경기력</strong>을 유지한다.</p>

            <h3 className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              멘탈 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-green-700 dark:text-green-400" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0">
                  핵심 통계
                </p>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0">
                타이브레이크에서 비교적 강한 편 · 감정은 뜨겁게 표현하되 절차는 차갑게 유지 · 꾸준한 루틴으로 경기의 흐름을 설계
              </p>
            </div>
            <p>포인트 사이 그는 간단한 의식을 반복한다. 라켓 스트링을 한 번 훑고, 두 번의 깊은 호흡, 일정한 토스. 스코어가 불리해도 루틴의 길이를 바꾸지 않아 심박이 급하게 치솟지 않는다. 타이브레이크 초반엔 네트를 넉넉히 넘기는 구질로 높이와 길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다. 감정은 뜨겁게 표현하되 절차는 차갑게 유지하는 일관성이 특징이다.</p>

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              전술적 다양성
            </h3>
            <p>리턴 이후에는 중앙 깊은 볼로 각을 닫아두고, 세 번째 스트로크에서만 코너를 열어 작은 균열을 만든다. 상대가 무리해 각을 열면 즉시 다운더라인으로 전환해 균형을 흔든다. 짧은 볼에는 하프코트에서 한 박자 늦게 닫히는 각도로 마무리한다. 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 느낌으로 찌른다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>루블료프의 커리어를 상징하는 경기는 마스터스 1000 시리즈 우승과 최근 몇 시즌의 큰 대회들이다.</p>

            <h3>마스터스 1000 시리즈 우승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">커리어 전성기의 정점</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>마스터스 1000 시리즈</strong>에서 우승을 차지하며 전성기를 구가했다. 특히 결승전에서의 경기력은 그의 기술적 완성도를 보여주는 대표적인 사례였다.
              </p>
            </div>
            <p>마스터스 1000 시리즈에서 그는 우승을 차지하며 전성기를 구가했다. 당시 세계 최고 수준의 선수들을 연파하며 우승했다. 특히 결승전에서의 경기력은 그의 기술적 완성도를 보여주는 대표적인 사례였다. 불꽃 같은 포핸드의 직선 파워와 간결한 리듬, 그리고 중요한 포인트에서의 침착함이 모두 어우러진 경기였다.</p>

            <h3>최근 시즌의 경기력</h3>
            <p>최근 시즌에서는 큰 대회에서 보여준 경기들이 인상적이다. 특히 하드 코트에서 강력한 모습을 보여주며, 큰 대회에서도 안정적인 경기력을 보여줬다. 특히 브레이크 포인트 상황에서 포핸드 인사이드-아웃을 가르는 장면은 그의 테니스가 가진 설득력을 한눈에 보여준다.</p>

            <h3>대표 명장면</h3>
            <blockquote className="not-prose my-4 p-5 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border-l-4 border-gray-400 dark:border-gray-600 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-800 dark:text-gray-200 mb-0 italic leading-relaxed">
                  브레이크 포인트. 중앙 깊은 볼 두 개로 상대 스텝을 뒤로 밀어낸 뒤, 포핸드를 몸 가까이 끌어당겨 인사이드-아웃으로 단호히 접는다. 공이 사이드라인을 스치며 빠져나갈 때 관중의 탄성이 터지고, 그는 표정을 바꾸지 않은 채 같은 속도로 베이스라인을 밟는다. 불꽃 같은 포핸드가 닫히는 문이 바로 이 순간이다.
                </p>
              </div>
            </blockquote>

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>루블료프는 경기력뿐 아니라 뜨거움과 배려의 공존 덕분에 팬층이 두텁다.</p>

            <h3>코트 매너</h3>
            <p>그는 뜨거움과 배려를 겸비했다. 인터뷰에서 준비와 팀을 먼저 언급한다. 잘된 날에는 계획이 맞았다고, 부족한 날에는 수정 항목이 분명하다고 말한다. 팬에겐 미소와 눈맞춤을, 코트 스태프에겐 짧은 감사를 잊지 않는다. 감정은 뜨겁게 표현하되 절차는 차갑게 유지하는 일관성이 특징이다.</p>

            <h3>인터뷰 스타일</h3>
            <p>인터뷰는 진솔하고 체계적이다. 준비와 팀을 먼저 언급하며, 자신의 성과보다는 상대의 강점을 인정하는 모습을 자주 보인다. 긴 일정 속에서도 회복·수면·식단의 루틴을 생활로 고정해 컨디션의 파고를 낮춘다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상을 완성한다.</p>

            <h3>팀과의 관계</h3>
            <p>코치와 팀과의 관계에서도 신뢰가 두터운 것으로 알려져 있다. 오랜 기간 함께한 코치와의 유대는 그의 안정적인 경기력에 기여하고 있으며, 팀 전체가 하나의 목표를 향해 나아가는 모습을 보여준다. 러시아의 훈련 문화는 반복과 규칙을 중시하는데, 루블료프의 테니스에도 이 정신이 뚜렷하다.</p>

            <h2 id="recent-form">요즘 안드레이 루블레프의 경기력 흐름은 어떤가?</h2>
            <p>최근 몇 시즌 동안 루블료프는 큰 대회에서 안정적인 경기력을 보여주고 있다.</p>

            <h3>최근 성적</h3>
            <p>최근 10경기 기준으로 보면, 그는 강한 상대에게도 꾸준히 버티는 편이다. 탑 10 선수들과의 경기에서도 승리를 거두며, 자신의 테니스가 여전히 경쟁력이 있음을 증명하고 있다. 최근 3개월 동안의 성적도 안정적이며, 큰 대회에서 후반 라운드에 진출하는 빈도가 높아졌다.</p>

            <h3>부상 관리</h3>
            <p>부상과 관련해서는 현재 큰 문제가 없는 상태다. 체계적인 회복과 관리 덕분에 경기에 지장을 주는 수준은 아니다. 다만 나이가 들어감에 따라 몸 관리에 더 신경을 쓰고 있으며, 불필요한 스프린트를 줄이고 효율적인 경기 운영에 집중하고 있다.</p>

            <h3>랭킹과 스타일 변화</h3>
            <p>랭킹 변동을 보면, 그는 현재 상위권을 유지하고 있다. 하락했던 시기가 있었지만, 다시 상위권으로 복귀했고 꾸준한 성적 유지로 최상위권을 지키고 있다. 플레이 스타일의 작은 변화도 눈에 띈다. 과거보다는 더 효율적인 경기를 하기 위해 전술적 다양성을 높였고, 하프코트에서의 마무리를 한 박자 더 빠르게 가져오는 데 집중하고 있다.</p>

            <h2 id="one-sentence-summary">안드레이 루블레프, 한 문장으로 정리하면?</h2>
            <p>안드레이 루블레프는 불꽃 같은 포핸드와 간결한 리듬, 꾸준한 루틴으로 하드코트를 지배하는 러시아 출신의 강자다.</p>
            <p>그의 테니스는 화려함보다는 효율을 추구하며, 특히 직선의 파워와 끊어치는 템포로 하드코트를 지배한다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 꾸준한 루틴으로 경기의 흐름을 설계하는 능력이 세계 상위권을 유지하게 해준다. 뜨거움과 배려를 겸비한 그의 테니스는 결과를 넘어 설득으로 남으며, 하드코트에서의 강력한 모습으로 기억될 것이다.</p>
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
