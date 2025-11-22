import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, RotateCcw, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: '알렉산더 즈베레프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '알렉산더 즈베레프의 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 독일 출신의 세계랭킹 상위권 선수.',
  keywords: ['알렉산더 즈베레프', 'Alexander Zverev', '테니스', 'ATP', '플레이스타일', '독일 테니스', '올코트', '서브'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/alexander-zverev',
  },
  openGraph: {
    title: '알렉산더 즈베레프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '알렉산더 즈베레프의 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://www.tennisfrens.com/players/alexander-zverev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '알렉산더 즈베레프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '알렉산더 즈베레프의 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '알렉산더 즈베레프, 왜 다시 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  { id: 'what-injury-career', text: '어떤 부상과 공백이 이 선수의 커리어를 흔들었나?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 알렉산더 즈베레프의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '알렉산더 즈베레프, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '알렉산더 즈베레프의 경기 스타일은 어떤가요?',
    a: '올코트 스타일로, 장벽 같은 서브와 칼같은 양손 백핸드가 특징입니다. 퍼스트로 시작해 백핸드로 봉합하는 전술로 흐름을 제어합니다.',
  },
  {
    q: '즈베레프의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 2위였으며, 현재는 상위권을 유지하고 있습니다. 부상에서 복귀한 후 다시 상위권으로 올라오는 과정에서 안정적인 경기력을 보여주고 있습니다.',
  },
  {
    q: '즈베레프의 부상 이력은 어떤가요?',
    a: '발목 부상으로 인해 한동안 경기에 나서지 못했습니다. 복귀 후 체계적인 회복과 훈련을 통해 다시 상위권으로 올라오는 과정에서 안정적인 경기력을 보여주고 있습니다.',
  },
  {
    q: '즈베레프의 강점은 무엇인가요?',
    a: '장벽 같은 서브와 칼같은 양손 백핸드가 최대 강점입니다. 퍼스트 서브로 시작해 백핸드로 봉합하는 전술로 흐름을 제어하는 능력이 뛰어납니다.',
  },
  {
    q: '즈베레프를 한 문장으로 설명하면?',
    a: '장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 독일 출신의 강자입니다.',
  },
];

export default function AlexanderZverevPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="알렉산더 즈베레프"
        excerpt="장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 독일 출신의 강자"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '알렉산더 즈베레프', '선수 프로필', '독일', '올코트', '서브'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-again-notable">알렉산더 즈베레프, 왜 다시 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 독일 출신의 강자
                </p>
              </div>
            </blockquote>
            <p>알렉산더 즈베레프는 독일 출신의 세계랭킹 상위권 테니스 선수로, 장벽 같은 서브와 칼같은 양손 백핸드로 ATP 투어를 지배하고 있다. 세계랭킹 2위에 올랐던 경력의 소유자이며, 부상에서 복귀한 후 다시 상위권으로 올라오는 과정에서 안정적인 경기력을 보여주고 있다. 퍼스트로 시작해 백핸드로 봉합하는 전술로 흐름을 제어하는 그의 테니스는 현대 테니스의 설계자로 평가받는다.</p>
            <p>그는 ATP 파이널스 우승을 차지하며 전성기를 구가했고, 최근 몇 시즌 동안 부상에서 복귀한 후 큰 대회에서도 안정적인 경기력을 보여주고 있다. 그의 테니스는 화려함보다는 효율을 추구하며, 특히 장벽 같은 서브가 뛰어나다.</p>

            <h2 id="what-type-of-player">이 선수는 어떤 유형의 플레이어인가?</h2>
            <p>알렉산더 즈베레프는 독일 출신의 세계랭킹 상위권 선수로, 올코트 스타일과 장벽 같은 서브, 칼같은 양손 백핸드가 특징인 ATP 투어의 강자다.</p>
            
            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">국적:</strong> <span className="text-gray-600 dark:text-gray-400">독일</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">생년:</strong> <span className="text-gray-600 dark:text-gray-400">1997년 (27세)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">최고 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">2위</span></span>
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
                  <span><strong className="text-gray-700 dark:text-gray-300">플레이 스타일:</strong> <span className="text-gray-600 dark:text-gray-400">올코트</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">시그니처 무기:</strong> <span className="text-gray-600 dark:text-gray-400">서브</span></span>
                </li>
              </ul>
            </div>

            <p>플레이 스타일은 올코트로 분류된다. 베이스라인에서 강력한 그라운드 스트로크를 구사하면서도, 기회가 생기면 네트로 전진해 발리로 마무리하는 능력을 갖추고 있다. 특히 장벽 같은 서브가 그의 시그니처 무기로, 퍼스트 서브로 시작해 백핸드로 봉합하는 전술로 흐름을 제어한다.</p>
            
            <div className="not-prose my-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700">
                <Shield className="w-3 h-3 mr-1 inline" />
                장벽 같은 서브
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Target className="w-3 h-3 mr-1 inline" />
                칼같은 백핸드
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                <RotateCcw className="w-3 h-3 mr-1 inline" />
                복귀의 상징
              </Badge>
            </div>
            <p>팬들이 그를 표현할 때 자주 쓰는 말은 <strong>"장벽 같은 서브"</strong>, <strong>"칼같은 백핸드"</strong>, <strong>"복귀의 상징"</strong>이다. 그의 테니스는 화려한 장식보다는 효율을 추구하며, 특히 퍼스트 서브로 시작해 백핸드로 봉합하는 전술이 뛰어나다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>즈베레프가 세계 상위권을 유지하는 힘은 장벽 같은 서브, 칼같은 양손 백핸드, 그리고 기술의 완성도에서 나온다.</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              기술적 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-lg border-l-2 border-purple-400 dark:border-purple-600">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong className="text-purple-700 dark:text-purple-300">장벽 같은 서브</strong>가 가장 큰 무기. 퍼스트 서브로 시작해 백핸드로 봉합하는 전술로 흐름을 제어한다.
              </p>
            </div>
            <p>장벽 같은 서브가 가장 큰 무기다. 퍼스트 서브로 시작해 백핸드로 봉합하는 전술로 흐름을 제어한다. 서브는 와이드와 바디의 비율을 바꿔 첫 두 타구의 구조를 설계하고, 짧은 리턴이 오면 하프코트에서 한 걸음 전진해 발리로 결말을 재촉한다. 백핸드는 칼같은 양손의 견고함으로 라인을 얇게 긁어 각을 만든다.</p>
            <p>리턴은 퍼스트 서브에는 한두 걸음 뒤에서 시작해 탄도와 길이를 맞추고, 세컨드 서브에는 전진해 접점을 앞세운다. 이어지는 첫 스트로크는 중앙 깊은 볼로 각을 닫아두고, 세 번째 스트로크에서 코너의 문을 열어 상대의 스텝을 묶는다.</p>

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
                타이브레이크에서 비교적 강한 편 · 감정은 낮게 절차는 일정하게 유지 · 위기를 지나 얻은 평형감
              </p>
            </div>
            <p>포인트 사이 그는 스트링을 훑고 두 번의 깊은 호흡으로 리듬을 고정한다. 스코어가 흔들려도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않는다. 타이브레이크 초반에는 네트를 넉넉히 넘기는 구질로 높이와 길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다. 위기를 지나 얻은 평형감이 특징이다.</p>

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              전술적 다양성
            </h3>
            <p>표면별 전개가 뛰어나다. 하드에서는 퍼스트 서브 확률과 3구 패턴의 속도로 주도권을 잡고, 리턴 게임에서는 중앙 깊은 볼로 각을 지워 다음 볼에서 속도를 끌어올린다. 점토에서는 회전을 더해 낙구를 안정시키고 랠리의 길이를 받아들이되, 네 번째나 다섯 번째 스트로크에서 드롭과 슬라이스를 섞어 템포를 흔든다. 잔디에서는 토스를 낮추고 백스윙을 줄여 타점을 앞에 고정한다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-injury-career">어떤 부상과 공백이 이 선수의 커리어를 흔들었나?</h2>
            <p>즈베레프의 커리어는 발목 부상으로 인해 큰 시련을 겪었다. 부상으로 인해 한동안 경기에 나서지 못했고, 랭킹이 하락했으며 경기력도 불안정해졌다.</p>

            <h3 className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              가장 어려웠던 시기
            </h3>
            <div className="not-prose my-4 p-3 bg-amber-50 dark:bg-amber-950/20 border-l-3 border-amber-500 rounded-r shadow-sm">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <strong>발목 부상:</strong> 랭킹 <strong className="text-amber-700 dark:text-amber-400">2위 → 하락</strong> · 경기 공백 기간
              </p>
            </div>
            <p>발목 부상으로 인해 한동안 경기에 나서지 못했다. 이 시기 동안 랭킹이 하락했고, 큰 대회에서 조기 탈락이 반복되었다. 이 시기 동안 그는 자신의 테니스에 대한 의문과 회의를 경험했다고 인터뷰에서 밝힌 바 있다.</p>

            <h3 className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              체계적인 복귀
            </h3>
            <p>복귀 과정은 체계적이었다. 회복과 수면, 식단의 규칙을 먼저 지키기 시작했다. 경기 플랜을 간결한 문장으로 묶었다.</p>
            <blockquote className="not-prose my-4 p-4 bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500 rounded-r-lg shadow-sm">
              <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0 flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-600" />
                "서브로 시작, 백핸드로 봉합"
              </p>
            </blockquote>
            <p>이라는 원칙을 세웠다. 큰 틀은 그대로 두고 디테일만 조정하는 방식으로 접근했다.</p>

            <h3 className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              변화한 플레이 스타일
            </h3>
            <p>복귀 후 플레이 스타일은 미묘하게 변했다. 과거보다는 몸을 아끼는 경향이 생겼다. 동시에 더 효율적인 경기를 하기 위해 전술적 다양성을 높였다. 하프코트에서의 전진 빈도는 유지하되, 불필요한 스프린트는 줄였다. 이 변화 덕분에 장기전에서도 에너지 관리가 수월해졌고, 큰 무대 후반 라운드에서 안정적으로 자신의 테니스를 꺼낼 수 있게 되었다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>즈베레프의 커리어를 상징하는 경기는 ATP 파이널스 우승과 최근 몇 시즌의 복귀 과정에서 보여준 대회들이다.</p>

            <h3>ATP 파이널스 우승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">커리어 전성기의 정점</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>ATP 파이널스</strong>에서 우승을 차지하며 전성기를 구가했다. 특히 결승전에서의 경기력은 그의 기술적 완성도를 보여주는 대표적인 사례였다.
              </p>
            </div>
            <p>ATP 파이널스에서 그는 우승을 차지하며 전성기를 구가했다. 당시 세계 최고 수준의 선수들을 연파하며 우승했다. 특히 결승전에서의 경기력은 그의 기술적 완성도를 보여주는 대표적인 사례였다. 장벽 같은 서브와 칼같은 양손 백핸드, 그리고 중요한 포인트에서의 침착함이 모두 어우러진 경기였다.</p>

            <h3>복귀 과정의 경기들</h3>
            <p>최근 시즌에서는 부상에서 복귀한 후 큰 대회에서 보여준 경기들이 인상적이다. 랭킹이 하락했던 시기를 지나 다시 상위권으로 올라오는 과정에서, 그는 여전히 탑 10 선수들과 경쟁할 수 있는 능력을 보여줬다. 특히 브레이크 포인트 상황에서 백핸드 다운더라인을 가르는 장면은 그의 테니스가 가진 설득력을 한눈에 보여준다.</p>

            <h3>대표 명장면</h3>
            <blockquote className="not-prose my-4 p-5 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border-l-4 border-gray-400 dark:border-gray-600 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-800 dark:text-gray-200 mb-0 italic leading-relaxed">
                  브레이크 포인트. 중앙 깊은 볼 두 개로 상대 스텝을 뒤로 밀어낸 뒤, 백핸드를 몸 가까이 끌어당겨 다운더라인으로 단호히 접는다. 공이 흰 선을 스치며 빠져나갈 때 관중의 탄성이 터지고, 그는 표정을 바꾸지 않은 채 같은 속도로 베이스라인을 밟는다. 칼같은 백핸드가 여는 좁은 문이 바로 이 순간이다.
                </p>
              </div>
            </blockquote>

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>즈베레프는 경기력뿐 아니라 차분함 속의 유머와 팀 퍼스트 덕분에 팬층이 두텁다.</p>

            <h3>코트 매너</h3>
            <p>그는 차분함과 유머를 겸비했다. 인터뷰에서 준비와 팀을 먼저 언급한다. 잘된 날에는 계획이 맞았다고, 부족한 날에는 수정 항목이 분명하다고 말한다. 팬에겐 미소와 눈맞춤을, 코트 스태프에겐 짧은 감사를 잊지 않는다. 패배 뒤에도 책임의 방향을 자기 쪽으로 당기고, 승리한 날에는 스태프와 팬에게 차례로 감사를 전한다.</p>

            <h3>인터뷰 스타일</h3>
            <p>인터뷰는 진솔하고 체계적이다. 준비와 팀을 먼저 언급하며, 자신의 성과보다는 상대의 강점을 인정하는 모습을 자주 보인다. 긴 일정 속에서도 회복·수면·식단의 루틴을 생활로 고정해 컨디션의 파고를 낮춘다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상을 완성한다.</p>

            <h3>팀과의 관계</h3>
            <p>코치와 팀과의 관계에서도 신뢰가 두터운 것으로 알려져 있다. 오랜 기간 함께한 코치와의 유대는 그의 안정적인 경기력에 기여하고 있으며, 팀 전체가 하나의 목표를 향해 나아가는 모습을 보여준다. 독일의 훈련 문화는 질서와 정확을 중시하는데, 즈베레프의 테니스에도 이 정신이 뚜렷하다.</p>

            <h2 id="recent-form">요즘 알렉산더 즈베레프의 경기력 흐름은 어떤가?</h2>
            <p>최근 몇 시즌 동안 즈베레프는 부상에서 복귀한 후 두 번째 전성기를 만들어가고 있다.</p>

            <h3>최근 성적</h3>
            <div className="not-prose my-4 p-3 bg-blue-50 dark:bg-blue-950/20 border-l-3 border-blue-500 rounded-r shadow-sm">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <strong>상승세:</strong> 최근 10경기 <strong className="text-blue-700 dark:text-blue-400">강한 상대에게도 꾸준히 버팀</strong> · 탑 10 선수들과의 경기에서도 승리
              </p>
            </div>
            <p>최근 10경기 기준으로 보면, 그는 강한 상대에게도 꾸준히 버티는 편이다. 탑 10 선수들과의 경기에서도 승리를 거두며, 자신의 테니스가 여전히 경쟁력이 있음을 증명하고 있다. 최근 3개월 동안의 성적도 안정적이며, 큰 대회에서 후반 라운드에 진출하는 빈도가 높아졌다.</p>

            <h3>부상 관리</h3>
            <p>부상과 관련해서는 현재 큰 문제가 없는 상태다. 과거 발목 부상의 경험이 있지만, 체계적인 회복과 관리 덕분에 경기에 지장을 주는 수준은 아니다. 다만 나이가 들어감에 따라 몸 관리에 더 신경을 쓰고 있으며, 불필요한 스프린트를 줄이고 효율적인 경기 운영에 집중하고 있다.</p>

            <h3>랭킹과 스타일 변화</h3>
            <p>랭킹 변동을 보면, 그는 현재 상승세에 있다. 하락했던 시기를 지나 다시 상위권으로 복귀했고, 꾸준한 성적 유지로 더 높은 순위를 노리고 있는 상황이다. 플레이 스타일의 작은 변화도 눈에 띈다. 과거보다는 더 효율적인 경기를 하기 위해 전술적 다양성을 높였고, 하프코트에서의 전진 빈도는 유지하되 에너지 관리를 더 신경 쓰고 있다.</p>

            <h2 id="one-sentence-summary">알렉산더 즈베레프, 한 문장으로 정리하면?</h2>
            <p>알렉산더 즈베레프는 장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 독일 출신의 강자다.</p>
            <p>그의 테니스는 화려함보다는 효율을 추구하며, 특히 퍼스트 서브로 시작해 백핸드로 봉합하는 전술이 뛰어나다. 부상과 기복을 겪었지만 체계적인 회복과 훈련으로 다시 상위권에 복귀했다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 위기를 지나 얻은 평형감이 세계 상위권을 유지하게 해준다. 차분함과 유머를 겸비한 그의 테니스는 결과를 넘어 설득으로 남으며, 복귀의 상징으로 기억될 것이다.</p>
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
