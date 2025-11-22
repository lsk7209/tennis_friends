import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: '카를로스 알카라즈 — 세계랭킹 2위 | 플레이스타일·명장면·최근 경기력',
  description: '카를로스 알카라즈의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 폭발적인 파워와 젊은 에너지로 테니스계를 이끌어갈 스페인의 신성.',
  keywords: ['카를로스 알카라즈', 'Carlos Alcaraz', '테니스', 'ATP', '플레이스타일', '스페인 테니스', '공격형', '차세대 스타'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/carlos-alcaraz',
  },
  openGraph: {
    title: '카를로스 알카라즈 — 세계랭킹 2위 | 플레이스타일·명장면·최근 경기력',
    description: '카를로스 알카라즈의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://www.tennisfrens.com/players/carlos-alcaraz',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '카를로스 알카라즈 — 세계랭킹 2위 | 플레이스타일·명장면·최근 경기력',
    description: '카를로스 알카라즈의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '카를로스 알카라즈, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '카를로스 알카라즈는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 카를로스 알카라즈의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '카를로스 알카라즈, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '카를로스 알카라즈의 경기 스타일은 어떤가요?',
    a: '공격형 스타일로, 폭발적인 파워와 스피드를 겸비했습니다. 강력한 포핸드와 탁월한 운동능력으로 상대를 압도합니다.',
  },
  {
    q: '알카라즈의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 1위였으며, 현재는 2위를 유지하고 있습니다. 2022년 세계랭킹 1위를 달성했으며, 역대 최연소 기록을 세웠습니다.',
  },
  {
    q: '알카라즈의 강점은 무엇인가요?',
    a: '폭발적인 포핸드 파워와 탁월한 운동능력이 최대 강점입니다. 강력한 서브와 빠른 적응력으로 상대를 압도하는 능력이 뛰어납니다.',
  },
  {
    q: '알카라즈의 성장 배경은 어떤가요?',
    a: '일상에서 축적된 힘으로 성장했습니다. 어릴 때부터 테니스를 시작했고, 빠르게 성장하며 세계랭킹 1위를 달성했습니다.',
  },
  {
    q: '알카라즈를 한 문장으로 설명하면?',
    a: '폭발적인 파워와 젊은 에너지로 테니스계를 이끌어갈 스페인의 신성입니다.',
  },
];

export default function CarlosAlcarazPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="카를로스 알카라즈"
        excerpt="폭발적인 파워와 젊은 에너지로 테니스계를 이끌어갈 스페인의 신성"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '카를로스 알카라즈', '선수 프로필', '스페인', '공격형', '차세대 스타'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-again-notable">카를로스 알카라즈, 왜 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  폭발적인 파워와 젊은 에너지로 테니스계를 이끌어갈 스페인의 신성
                </p>
              </div>
            </blockquote>
            <p>카를로스 알카라즈는 스페인 출신의 세계랭킹 2위 테니스 선수로, 폭발적인 파워와 젊은 에너지로 ATP 투어를 지배하고 있다. 세계랭킹 1위에 올랐던 경력의 소유자이며, 역대 최연소 기록을 세웠다. 강력한 포핸드와 탁월한 운동능력으로 상대를 압도하는 그의 테니스는 차세대 스타의 설계자로 평가받는다.</p>
            <p>그는 2022년 US 오픈 우승을 차지하며 그랜드 슬램 챔피언이 되었고, 같은 해 세계랭킹 1위를 달성했다. 최근 몇 시즌 동안 큰 대회에서도 안정적인 경기력을 보여주고 있으며, 특히 윔블던에서 우승을 거두며 기록을 계속 갱신하고 있다. 그의 테니스는 화려함보다는 효율을 추구하며, 특히 폭발적인 파워가 뛰어나다.</p>

            <h2 id="what-type-of-player">이 선수는 어떤 유형의 플레이어인가?</h2>
            <p>카를로스 알카라즈는 스페인 출신의 세계랭킹 2위 선수로, 공격형 스타일과 폭발적인 파워, 탁월한 운동능력이 특징인 ATP 투어의 차세대 스타다.</p>
            
            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">국적:</strong> <span className="text-gray-600 dark:text-gray-400">스페인</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">생년:</strong> <span className="text-gray-600 dark:text-gray-400">2003년 (21세)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">최고 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">1위 (역대 최연소)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">현재 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">2위</span></span>
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
                  <span><strong className="text-gray-700 dark:text-gray-300">시그니처 무기:</strong> <span className="text-gray-600 dark:text-gray-400">포핸드 파워</span></span>
                </li>
              </ul>
            </div>

            <p>플레이 스타일은 공격형으로 분류된다. 베이스라인에서 강력한 그라운드 스트로크를 구사하면서도, 기회가 생기면 네트로 전진해 발리로 마무리하는 능력을 갖추고 있다. 특히 폭발적인 포핸드 파워가 그의 시그니처 무기로, 강력한 포핸드와 탁월한 운동능력으로 상대를 압도한다.</p>
            
            <div className="not-prose my-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700">
                <Zap className="w-3 h-3 mr-1 inline" />
                폭발적인 파워
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Star className="w-3 h-3 mr-1 inline" />
                젊은 에너지
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                <Trophy className="w-3 h-3 mr-1 inline" />
                스페인의 신성
              </Badge>
            </div>
            <p>팬들이 그를 표현할 때 자주 쓰는 말은 <strong>"폭발적인 파워"</strong>, <strong>"젊은 에너지"</strong>, <strong>"스페인의 신성"</strong>이다. 그의 테니스는 화려한 장식보다는 효율을 추구하며, 특히 강력한 포핸드와 탁월한 운동능력으로 상대를 압도하는 능력이 뛰어나다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">카를로스 알카라즈는 어떻게 여기까지 왔을까?</h2>
            <p>알카라즈의 성장 스토리는 일상에서 축적된 힘과 빠른 적응력이 핵심이다.</p>

            <h3>성장 배경</h3>
            <p>그의 테니스는 일상에서 축적된 힘으로 시작됐다. 어릴 때부터 테니스를 시작했고, 빠르게 성장하며 세계랭킹 1위를 달성했다. 코치였던 부모와 형제와 함께한 반복 훈련은 동작을 줄이고 접점을 앞에 둔다는 한 문장으로 요약된다. 이동이 잦은 유소년 시절에도 일지를 쓰며 하루의 루틴을 고정했고, 실내와 야외를 오가는 환경에서 바운드의 차이를 몸으로 익혔다.</p>

            <h3>주니어 시절</h3>
            <p>주니어 시절부터 빠른 성장을 보였으며, 특히 폭발적인 파워가 두드러졌다. 프로로 전환한 후 체계적인 피지컬 트레이닝을 거치며 폭발→회복→재가속의 리듬을 몸에 새겼다. 이 생활의 질서가 오늘의 빠르되 무너지지 않는 알카라즈를 만든다.</p>

            <h3>전환점</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">커리어 전환점</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>2022년 세계랭킹 1위 달성</strong>과 <strong>US 오픈 우승</strong>으로 전성기를 구가하기 시작했다. 특히 역대 최연소 기록을 세우며 차세대 스타로 주목받기 시작했다.
              </p>
            </div>
            <p>2022년 그는 세계랭킹 1위를 달성하며 역대 최연소 기록을 세웠다. 같은 해 US 오픈에서 우승을 거두며 그랜드 슬램 챔피언이 되었다. 이 시기 동안 폭발적인 파워와 젊은 에너지가 그의 시그니처 무기로 자리 잡았다. 특히 강력한 포핸드와 탁월한 운동능력으로 상대를 압도하는 능력이 세계 최고 수준임을 증명했다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>알카라즈가 세계 상위권을 유지하는 힘은 폭발적인 포핸드 파워, 탁월한 운동능력, 그리고 빠른 적응력에서 나온다.</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              기술적 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-lg border-l-2 border-purple-400 dark:border-purple-600">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong className="text-purple-700 dark:text-purple-300">폭발적인 포핸드 파워</strong>가 가장 큰 무기. 강력한 포핸드와 탁월한 운동능력으로 상대를 압도한다.
              </p>
            </div>
            <p>폭발적인 포핸드 파워가 가장 큰 무기다. 강력한 포핸드와 탁월한 운동능력으로 상대를 압도한다. 포핸드는 넓은 궤도와 빠른 채찍질로 코트를 벌린다. 백핸드는 양손의 견고함으로 라인을 얇게 긁어 각을 만든다. 서브는 와이드와 바디의 비율을 바꿔 첫 두 타구의 구조를 설계하고, 짧은 리턴이 오면 하프코트에서 한 걸음 전진해 발리로 결말을 재촉한다.</p>
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
                타이브레이크에서 비교적 강한 편 · 빠른 적응력 · 젊은 에너지와 열정
              </p>
            </div>
            <p>포인트 사이 그는 스트링을 훑고 두 번의 깊은 호흡으로 리듬을 고정한다. 스코어가 흔들려도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않는다. 타이브레이크 초반에는 네트를 넉넉히 넘기는 구질로 높이와 길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다. 빠른 적응력이 특징이다.</p>

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              전술적 다양성
            </h3>
            <p>표면별 전개가 뛰어나다. 하드에서는 퍼스트 서브 확률과 3구 패턴의 속도로 주도권을 잡고, 리턴 게임에서는 중앙 깊은 볼로 각을 지워 다음 볼에서 속도를 끌어올린다. 잔디에서는 토스를 낮추고 백스윙을 줄여 타점을 앞에 고정, 슬라이스 리턴을 섞어 초반 속도를 통제한다. 점토에서는 회전을 더해 낙구를 안정시키고 랠리의 길이를 받아들이되, 네 번째나 다섯 번째 스트로크에서 드롭과 슬라이스를 섞어 템포를 흔든다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>알카라즈의 커리어를 상징하는 경기는 2022년 US 오픈 우승과 2024년 윔블던 우승이다.</p>

            <h3>2022년 US 오픈 우승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">커리어 전성기의 정점</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>2022년 US 오픈</strong>에서 우승을 차지하며 그랜드 슬램 챔피언이 되었다. 특히 결승전에서의 경기력은 그의 기술적 완성도를 보여주는 대표적인 사례였다.
              </p>
            </div>
            <p>2022년 US 오픈에서 그는 우승을 차지하며 그랜드 슬램 챔피언이 되었다. 이 경기에서 그는 폭발적인 파워와 젊은 에너지로 상대를 압도했다. 특히 결승전에서의 경기력은 그의 기술적 완성도를 보여주는 대표적인 사례였다. 강력한 포핸드와 탁월한 운동능력, 그리고 중요한 포인트에서의 침착함이 모두 어우러진 경기였다.</p>

            <h3>2024년 윔블던 우승</h3>
            <p>2024년 윔블던에서 그는 우승을 거두며 기록을 계속 갱신했다. 이 경기에서 드러난 건 알카라즈의 빠른 적응력이었다. 표면을 가리지 않는 적응력과 젊은 에너지가 한 경기에 응축되었다.</p>

            <h3>대표 명장면</h3>
            <blockquote className="not-prose my-4 p-5 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border-l-4 border-gray-400 dark:border-gray-600 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-800 dark:text-gray-200 mb-0 italic leading-relaxed">
                  브레이크 포인트. 중앙 깊은 볼 두 개로 상대 스텝을 뒤로 밀어낸 뒤, 포핸드를 몸 가까이 끌어당겨 다운더라인으로 단호히 접는다. 공이 사이드라인을 스치며 빠져나갈 때 관중의 탄성이 터지고, 그는 표정을 바꾸지 않은 채 같은 속도로 베이스라인을 밟는다. 선택의 용기가 바로 이 순간이다.
                </p>
              </div>
            </blockquote>

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>알카라즈는 경기력뿐 아니라 결과보다 태도 덕분에 팬층이 두텁다.</p>

            <h3>코트 매너</h3>
            <p>그는 결과보다 태도를 중시한다. 인터뷰에서 준비와 팀을 먼저 언급한다. 잘된 날에는 계획이 맞았다고, 부족한 날에는 수정 항목이 분명하다고 말한다. 팬에겐 미소와 눈맞춤을, 코트 스태프에겐 짧은 감사를 잊지 않는다. 패배 뒤에도 책임의 방향을 자기 쪽으로 당기고, 승리한 날에는 스태프와 팬에게 차례로 감사를 전한다.</p>

            <h3>인터뷰 스타일</h3>
            <p>인터뷰는 진솔하고 체계적이다. 준비와 팀을 먼저 언급하며, 자신의 성과보다는 상대의 강점을 인정하는 모습을 자주 보인다. 긴 일정 속에서도 회복·수면·식단의 루틴을 생활로 고정해 컨디션의 파고를 낮춘다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상을 완성한다.</p>

            <h3>팀과의 관계</h3>
            <p>코치와 팀과의 관계에서도 신뢰가 두터운 것으로 알려져 있다. 오랜 기간 함께한 코치와의 유대는 그의 안정적인 경기력에 기여하고 있으며, 팀 전체가 하나의 목표를 향해 나아가는 모습을 보여준다. 스페인의 훈련 문화는 전통 위에 올린 현대적 해석을 중시하는데, 알카라즈의 테니스에도 이 정신이 뚜렷하다.</p>

            <h2 id="recent-form">요즘 카를로스 알카라즈의 경기력 흐름은 어떤가?</h2>
            <p>최근 몇 시즌 동안 알카라즈는 빠르게 성장하고 있으며, 큰 대회에서도 안정적인 경기력을 보여주고 있다.</p>

            <h3>최근 성적</h3>
            <div className="not-prose my-4 p-3 bg-blue-50 dark:bg-blue-950/20 border-l-3 border-blue-500 rounded-r shadow-sm">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <strong>상승세:</strong> 최근 10경기 <strong className="text-blue-700 dark:text-blue-400">강한 상대에게도 꾸준히 승리</strong> · 탑 10 선수들과의 경기에서도 승리
              </p>
            </div>
            <p>최근 10경기 기준으로 보면, 그는 강한 상대에게도 꾸준히 승리를 거두는 편이다. 탑 10 선수들과의 경기에서도 승리를 거두며, 자신의 테니스가 여전히 경쟁력이 있음을 증명하고 있다. 최근 3개월 동안의 성적도 안정적이며, 큰 대회에서 후반 라운드에 진출하는 빈도가 높아졌다.</p>

            <h3>부상 관리</h3>
            <p>부상과 관련해서는 현재 큰 문제가 없는 상태다. 체계적인 회복과 관리 덕분에 경기에 지장을 주는 수준은 아니다. 다만 나이가 어리기 때문에 몸 관리에 더 신경을 쓰고 있으며, 불필요한 스프린트를 줄이고 효율적인 경기 운영에 집중하고 있다.</p>

            <h3>랭킹과 스타일 변화</h3>
            <p>랭킹 변동을 보면, 그는 현재 세계랭킹 2위를 유지하고 있다. 빠르게 성장하며 상위권으로 올라오는 과정에서, 그는 여전히 탑 10 선수들과 경쟁할 수 있는 능력을 보여줬다. 플레이 스타일의 작은 변화도 눈에 띈다. 과거보다는 더 효율적인 경기를 하기 위해 전술적 다양성을 높였고, 하프코트에서의 마무리를 한 박자 더 빠르게 가져오는 데 집중하고 있다.</p>

            <h2 id="one-sentence-summary">카를로스 알카라즈, 한 문장으로 정리하면?</h2>
            <p>카를로스 알카라즈는 폭발적인 파워와 젊은 에너지로 테니스계를 이끌어갈 스페인의 신성이다.</p>
            <p>그의 테니스는 화려함보다는 효율을 추구하며, 특히 강력한 포핸드와 탁월한 운동능력으로 상대를 압도하는 능력이 뛰어나다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 빠른 적응력이 세계 상위권을 유지하게 해준다. 결과보다 태도를 중시하는 그의 테니스는 결과를 넘어 설득으로 남으며, 차세대 스타로 기억될 것이다.</p>
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
