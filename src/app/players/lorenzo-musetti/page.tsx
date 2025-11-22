import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, Users, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: '로렌초 무세티 — 세계랭킹 25위권 | 플레이스타일·명장면·최근 경기력',
  description: '로렌초 무세티의 원핸드 백핸드 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 우아한 원핸드 백핸드와 창의적인 플레이로 이탈리아 테니스의 미래를 이끌어가는 차세대 스타.',
  keywords: ['로렌초 무세티', 'Lorenzo Musetti', '테니스', 'ATP', '플레이스타일', '이탈리아 테니스', '원핸드 백핸드', '차세대'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/lorenzo-musetti',
  },
  openGraph: {
    title: '로렌초 무세티 — 세계랭킹 25위권 | 플레이스타일·명장면·최근 경기력',
    description: '로렌초 무세티의 원핸드 백핸드 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://www.tennisfrens.com/players/lorenzo-musetti',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '로렌초 무세티 — 세계랭킹 25위권 | 플레이스타일·명장면·최근 경기력',
    description: '로렌초 무세티의 원핸드 백핸드 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '로렌초 무세티, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '로렌초 무세티는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 로렌초 무세티의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '로렌초 무세티, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '로렌초 무세티의 경기 스타일은 어떤가요?',
    a: '원핸드 백핸드 스타일로, 우아한 원핸드 백핸드와 창의적인 플레이가 특징입니다. 현대 테니스에서 점점 사라져가는 원핸드 백핸드의 아름다움을 보여주는 대표적인 선수입니다.',
  },
  {
    q: '무세티의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 25위권이었으며, 현재도 25위권을 유지하고 있습니다. 특히 클레이 코트에서 강력한 모습을 보여주며, 큰 대회에서도 안정적인 경기력을 보여주고 있습니다.',
  },
  {
    q: '무세티의 강점은 무엇인가요?',
    a: '우아한 원핸드 백핸드와 창의적인 플레이가 최대 강점입니다. 현대 테니스에서 점점 사라져가는 원핸드 백핸드의 아름다움을 보여주며, 특히 클레이 코트에서 강력한 모습을 보여줍니다.',
  },
  {
    q: '무세티의 성장 배경은 어떤가요?',
    a: '이탈리아에서 태어나 어릴 때부터 테니스를 시작했고, 주니어 시절부터 원핸드 백핸드의 아름다움을 보여주며 빠르게 성장했습니다. 특히 클레이 코트에서의 강력한 모습으로 주목받기 시작했습니다.',
  },
  {
    q: '무세티를 한 문장으로 설명하면?',
    a: '우아한 원핸드 백핸드와 창의적인 플레이로 이탈리아 테니스의 미래를 이끌어가는 차세대 스타입니다.',
  },
];

export default function LorenzoMusettiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="로렌초 무세티"
        excerpt="우아한 원핸드 백핸드와 창의적인 플레이로 이탈리아 테니스의 미래를 이끌어가는 차세대 스타"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '로렌초 무세티', '선수 프로필', '이탈리아', '원핸드 백핸드', '차세대'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-again-notable">로렌초 무세티, 왜 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  우아한 원핸드 백핸드와 창의적인 플레이로 이탈리아 테니스의 미래를 이끌어가는 차세대 스타
                </p>
              </div>
            </blockquote>
            <p>로렌초 무세티는 이탈리아 출신의 세계랭킹 25위권 테니스 선수로, 우아한 원핸드 백핸드와 창의적인 플레이로 ATP 투어를 지배하고 있다. 세계랭킹 25위권을 유지하며, 특히 클레이 코트에서 강력한 모습을 보여준다. 현대 테니스에서 점점 사라져가는 원핸드 백핸드의 아름다움을 보여주는 그의 테니스는 이탈리아 테니스의 미래로 평가받는다.</p>
            <p>그는 주니어 시절부터 원핸드 백핸드의 아름다움을 보여주며 빠르게 성장했고, 특히 클레이 코트에서의 강력한 모습으로 주목받기 시작했다. 최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 큰 대회에서도 안정적인 경기력을 보여주고 있다. 그의 테니스는 화려함과 효율을 모두 추구하며, 특히 우아한 원핸드 백핸드가 뛰어나다.</p>

            <h2 id="what-type-of-player">이 선수는 어떤 유형의 플레이어인가?</h2>
            <p>로렌초 무세티는 이탈리아 출신의 세계랭킹 25위권 선수로, 원핸드 백핸드 스타일과 창의적인 플레이가 특징인 ATP 투어의 차세대 스타다.</p>
            
            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">국적:</strong> <span className="text-gray-600 dark:text-gray-400">이탈리아</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">생년:</strong> <span className="text-gray-600 dark:text-gray-400">2002년 (22세)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">최고 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">25위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">현재 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">25위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">주 종목:</strong> <span className="text-gray-600 dark:text-gray-400">단식 (ATP 투어)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">플레이 스타일:</strong> <span className="text-gray-600 dark:text-gray-400">올코트</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">시그니처 무기:</strong> <span className="text-gray-600 dark:text-gray-400">원핸드 백핸드</span></span>
                </li>
              </ul>
            </div>

            <p>플레이 스타일은 올코트로 분류된다. 베이스라인에서 강력한 그라운드 스트로크를 구사하면서도, 기회가 생기면 네트로 전진해 발리로 마무리하는 능력을 갖추고 있다. 특히 우아한 원핸드 백핸드가 그의 시그니처 무기로, 현대 테니스에서 점점 사라져가는 한 손 백핸드의 아름다움을 보여주는 대표적인 선수다.</p>
            
            <div className="not-prose my-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700">
                <Zap className="w-3 h-3 mr-1 inline" />
                우아한 원핸드 백핸드
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Shield className="w-3 h-3 mr-1 inline" />
                창의적인 플레이
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                <Target className="w-3 h-3 mr-1 inline" />
                클레이 전문
              </Badge>
            </div>
            <p>팬들이 그를 표현할 때 자주 쓰는 말은 <strong>"우아한 원핸드 백핸드"</strong>, <strong>"창의적인 플레이"</strong>, <strong>"클레이 전문"</strong>이다. 그의 테니스는 현대 테니스에서 점점 사라져가는 원핸드 백핸드의 아름다움을 보여주며, 특히 클레이 코트에서 강력한 모습을 보여준다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">로렌초 무세티는 어떻게 여기까지 왔을까?</h2>
            <p>무세티의 성장 스토리는 이탈리아에서의 어린 시절과 주니어 시절부터의 원핸드 백핸드의 아름다움이 핵심이다.</p>

            <h3>성장 배경</h3>
            <p>그는 이탈리아에서 태어나 어릴 때부터 테니스를 시작했다. 코치였던 부모와 형제와 함께한 반복 훈련은 원핸드 백핸드의 아름다움을 강조했다. 이동이 잦은 유소년 시절에도 일지를 쓰며 하루의 루틴을 고정했고, 실내와 야외를 오가는 환경에서 바운드의 차이를 몸으로 익혔다.</p>

            <h3>주니어 시절</h3>
            <p>주니어 시절부터 원핸드 백핸드의 아름다움을 보여주며 빠르게 성장했다. 특히 클레이 코트에서의 강력한 모습으로 주목받기 시작했고, 이탈리아 테니스의 미래로 평가받기 시작했다. 이 시기 동안 우아한 원핸드 백핸드와 창의적인 플레이가 그의 시그니처 무기로 자리 잡았다.</p>

            <h3>전환점</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">커리어 전환점</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>주니어에서 프로로 전환</strong>한 후 빠르게 적응하며 큰 대회에서 인상적인 경기력을 보여주기 시작했다. 특히 클레이 코트에서 강력한 모습을 보여주며 이탈리아 테니스의 차세대 스타로 주목받기 시작했다.
              </p>
            </div>
            <p>주니어에서 프로로 전환한 후 그는 빠르게 적응하며 큰 대회에서 인상적인 경기력을 보여주기 시작했다. 특히 클레이 코트에서 강력한 모습을 보여주며 이탈리아 테니스의 차세대 스타로 주목받기 시작했다. 이 시기 동안 우아한 원핸드 백핸드와 창의적인 플레이가 그의 시그니처 무기로 자리 잡았다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>무세티가 세계 상위권을 유지하는 힘은 우아한 원핸드 백핸드, 창의적인 플레이, 그리고 클레이 코트에서의 적응력에서 나온다.</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              기술적 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-lg border-l-2 border-purple-400 dark:border-purple-600">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong className="text-purple-700 dark:text-purple-300">우아한 원핸드 백핸드</strong>가 가장 큰 무기. 현대 테니스에서 점점 사라져가는 한 손 백핸드의 아름다움을 보여준다.
              </p>
            </div>
            <p>우아한 원핸드 백핸드가 가장 큰 무기다. 현대 테니스에서 점점 사라져가는 한 손 백핸드의 아름다움을 보여준다. 포핸드는 넓은 궤도와 빠른 채찍질로 코트를 벌린다. 백핸드는 원핸드의 우아함으로 라인을 얇게 긁어 각을 만든다. 특히 클레이 코트에서 긴 랠리를 두려워하지 않으며, 깊은 구질로 상대를 압박한다.</p>
            <p>서브는 안정적인 구질로 시작해 첫 두 타구의 구조를 설계하고, 짧은 리턴이 오면 하프코트에서 한 걸음 전진해 발리로 결말을 재촉한다. 리턴은 퍼스트 서브에는 한두 걸음 뒤에서 시작해 탄도와 길이를 맞추고, 세컨드 서브에는 전진해 접점을 앞세운다. 이어지는 첫 스트로크는 중앙 깊은 볼로 각을 닫아두고, 세 번째 스트로크에서 코너의 문을 열어 상대의 스텝을 묶는다.</p>

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
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                클레이 코트에서의 승률이 높으며, 특히 긴 랠리에서의 승률이 뛰어나다. 우아한 원핸드 백핸드를 구사하는 자신감이 뛰어나다.
              </p>
            </div>
            <p>클레이 코트에서의 승률이 높으며, 특히 긴 랠리에서의 승률이 뛰어나다. 우아한 원핸드 백핸드를 구사하는 자신감이 뛰어나며, 특히 중요한 포인트에서도 침착하게 경기를 진행한다.</p>

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              전술적 다양성
            </h3>
            <p>베이스라인 게임을 기본으로 하되, 기회가 생기면 네트로 전진해 발리로 마무리한다. 상대의 약점을 파악해 구질을 조절하며, 특히 클레이 코트에서 깊은 구질로 상대를 압박한다. 창의적인 플레이로 상대를 혼란스럽게 만드는 능력이 뛰어나다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>무세티를 설명하는 대표 경기는 클레이 코트에서의 우승 경기와 큰 대회에서의 승리 경기다.</p>

            <div className="not-prose my-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">클레이 코트 우승</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>특징:</strong> 우아한 원핸드 백핸드로 우승
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                이 경기에서 드러난 건 무세티의 우아한 원핸드 백핸드와 창의적인 플레이였다. 특히 클레이 코트에서 긴 랠리를 두려워하지 않는 능력이 뛰어났고, 현대 테니스에서 점점 사라져가는 원핸드 백핸드의 아름다움을 보여줬다.
              </p>
            </div>

            <p>이 경기로 인해 무세티는 이탈리아 테니스의 차세대 스타로 평가받기 시작했고, 특히 우아한 원핸드 백핸드와 창의적인 플레이가 뛰어나다는 것을 보여줬다. 팬들과 전문가들은 그의 원핸드 백핸드의 아름다움을 높이 평가했고, 특히 클레이 코트에서의 강력한 모습을 인정받았다.</p>

            <blockquote className="not-prose my-6 p-4 bg-indigo-50 dark:bg-indigo-950/30 border-l-4 border-indigo-500 rounded-r-lg">
              <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                "이 경기에서 드러난 건 무세티의 우아한 원핸드 백핸드와 창의적인 플레이였다."
              </p>
            </blockquote>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>경기력뿐 아니라 우아한 플레이 스타일과 창의성 덕분에 팬층이 두텁다.</p>

            <h3 className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
              코트 매너
            </h3>
            <p>우아한 플레이 스타일이 특징이다. 경기 중에도 감정을 드러내지 않고 차분하게 경기를 진행하며, 특히 중요한 포인트에서도 침착하게 원핸드 백핸드를 구사한다. 페어플레이를 중시하며, 상대 선수와의 관계도 좋다.</p>

            <h3 className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              인터뷰 스타일
            </h3>
            <p>인터뷰에서 경기 분석을 차분하게 설명하며, 특히 우아한 원핸드 백핸드와 창의적인 플레이에 대해 자세히 설명한다. 팀과의 협력도 중요하게 생각하며, 특히 이탈리아 테니스의 미래를 이끌어갈 선수로 평가받는다.</p>

            <h3 className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              팀과의 관계
            </h3>
            <p>코치와의 관계가 좋으며, 특히 전술적 조언을 잘 받아들인다. 팀과의 협력도 중요하게 생각하며, 특히 이탈리아 테니스의 미래를 이끌어갈 선수로 평가받는다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="recent-form">요즘 로렌초 무세티의 경기력 흐름은 어떤가?</h2>
            <p>최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 클레이 코트에서 강력한 모습을 보여주고 있다.</p>

            <h3 className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              최근 성적
            </h3>
            <div className="not-prose my-4 p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0">
                  최근 성과
                </p>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-0">
                <li>• 클레이 코트에서 꾸준한 성적</li>
                <li>• 큰 대회에서 안정적인 경기력</li>
                <li>• 우아한 원핸드 백핸드로 주목받음</li>
              </ul>
            </div>
            <p>최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 클레이 코트에서 강력한 모습을 보여주고 있다. 우아한 원핸드 백핸드와 창의적인 플레이로 이탈리아 테니스의 차세대 스타로 주목받고 있으며, 특히 큰 대회에서도 안정적인 경기력을 보여주고 있다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              부상 및 컨디션
            </h3>
            <p>큰 부상 없이 경기에 임하고 있으며, 특히 체력 관리도 잘 하고 있다. 우아한 원핸드 백핸드를 구사하는 능력이 뛰어나며, 특히 클레이 코트에서의 적응력이 뛰어나다.</p>

            <h3 className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              랭킹 변동
            </h3>
            <p>랭킹 변동을 보면, 그는 현재 세계랭킹 25위권을 유지하고 있다. 최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 클레이 시즌에서 강력한 모습을 보여준다. 플레이 스타일의 작은 변화도 눈에 띈다. 과거보다는 더 효율적인 경기를 하기 위해 전술적 다양성을 높였고, 특히 우아한 원핸드 백핸드 활용을 더욱 강화하고 있다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="one-sentence-summary">로렌초 무세티, 한 문장으로 정리하면?</h2>
            <p>우아한 원핸드 백핸드와 창의적인 플레이로 이탈리아 테니스의 미래를 이끌어가는 차세대 스타다.</p>
            <p>무세티는 현대 테니스에서 점점 사라져가는 원핸드 백핸드의 아름다움을 보여주며, 특히 클레이 코트에서 긴 랠리를 두려워하지 않는다. 우아한 원핸드 백핸드와 창의적인 플레이로 상대를 압박하며, 인내로 경기를 이끌어간다. 최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 클레이 시즌에서 강력한 모습을 보여주고 있다.</p>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <FAQ items={faqs} />
          </div>

          {/* CTA Section */}
          <div className="mt-12">
            <CTA
              title="더 많은 테니스 선수 이야기"
              description="다른 테니스 선수들의 스토리도 확인해보세요"
              primaryButton={{
                text: "선수 목록 보기",
                href: "/players"
              }}
            />
          </div>
        </div>
      </Article>
    </div>
  );
}

