import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerAttributes from '@/components/players/PlayerAttributes';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, BookOpen, Crown } from 'lucide-react';

export const metadata: Metadata = {
  title: '야닉 시너 — 세계랭킹 1위 | 플레이스타일·명장면·최근 경기력',
  description: '야닉 시너의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 탁월한 스트로크 기술과 서브 앤 발리 게임을 겸비한 이탈리아의 차세대 스타.',
  keywords: ['야닉 시너', 'Jannik Sinner', '테니스', 'ATP', '플레이스타일', '이탈리아 테니스', '공격형', '서브 앤 발리'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/jannik-sinner',
  },
  openGraph: {
    title: '야닉 시너 — 세계랭킹 1위 | 플레이스타일·명장면·최근 경기력',
    description: '야닉 시너의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/jannik-sinner',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '야닉 시너 — 세계랭킹 1위 | 플레이스타일·명장면·최근 경기력',
    description: '야닉 시너의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '야닉 시너, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '야닉 시너는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 야닉 시너의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '야닉 시너, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '야닉 시너의 경기 스타일은 어떤가요?',
    a: '공격형 스타일로, 탁월한 스트로크 기술과 서브 앤 발리 게임을 겸비했습니다. 짧은 백스윙, 길게 미는 직선으로 흐름을 설계하는 능력이 뛰어납니다.',
  },
  {
    q: '시너의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 1위이며, 현재도 세계랭킹 1위를 유지하고 있습니다. 특히 ATP 파이널스 우승을 차지하며 전성기를 구가하고 있습니다.',
  },
  {
    q: '시너의 강점은 무엇인가요?',
    a: '탁월한 스트로크 기술과 서브 앤 발리 게임이 최대 강점입니다. 짧은 백스윙, 길게 미는 직선으로 흐름을 설계하는 능력이 뛰어납니다.',
  },
  {
    q: '시너의 인간적인 면모는 어떤가요?',
    a: '절제와 집중, 팀 퍼스트가 특징입니다. 인터뷰에서 준비와 팀을 먼저 언급하며, 감정은 낮게 기준은 선명하게 유지하는 일관성이 있습니다.',
  },
  {
    q: '시너를 한 문장으로 설명하면?',
    a: '탁월한 스트로크 기술과 서브 앤 발리 게임을 겸비한 이탈리아의 차세대 스타입니다.',
  },
];

export default function JannikSinnerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="야닉 시너"
        excerpt="탁월한 스트로크 기술과 서브 앤 발리 게임을 겸비한 이탈리아의 차세대 스타"
        image="/images/players/jannik-sinner.png"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Jannik Sinner"
            country="Italy"
            age={23}
            height="188cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2018}
            grandSlams={2}
            ranking={1}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              얼음처럼 차가운 멘탈과 불같은 스트로크. <strong className="text-orange-600 dark:text-orange-400">이탈리아 테니스의 역사</strong>를 새로 쓰는 현재진행형 레전드.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              야닉 시너, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  탁월한 스트로크 기술과 서브 앤 발리 게임을 겸비한 이탈리아의 차세대 스타
                </p>
              </div>
            </blockquote>
            <p>야닉 시너는 이탈리아 출신의 세계랭킹 1위 테니스 선수로, 탁월한 스트로크 기술과 서브 앤 발리 게임으로 ATP 투어를 지배하고 있다. 세계랭킹 1위를 유지하며, 특히 ATP 파이널스 우승을 차지하며 전성기를 구가하고 있다. 짧은 백스윙, 길게 미는 직선으로 흐름을 설계하는 그의 테니스는 차세대 스타의 설계자로 평가받는다.</p>
            <p>그는 2024년 호주 오픈과 US 오픈 우승을 차지하며 전성기를 구가했고, 최근 몇 시즌 동안 큰 대회에서도 안정적인 경기력을 보여주고 있다. 그의 테니스는 화려함보다는 효율을 추구하며, 특히 탁월한 스트로크 기술과 서브 앤 발리 게임이 뛰어나다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"베이스라인의 저격수 (Aggressive Baseliner)"</strong></p>
            <p>야닉 시너는 이탈리아 출신의 세계랭킹 1위 선수로, 공격형 스타일과 탁월한 스트로크 기술, 서브 앤 발리 게임이 특징인 ATP 투어의 차세대 스타다.</p>

            <PlayerAttributes
              attributes={[
                { name: '백핸드 (Backhand)', score: 10, description: '투어에서 가장 깨끗하고 강력한 양손 백핸드. 앵글 샷이 일품.' },
                { name: '포핸드 (Forehand)', score: 9.8, description: '무거운 스핀과 빠른 스피드로 상대를 베이스라인 뒤로 밀어낸다.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '어떤 상황에서도 흔들리지 않는 포커페이스. 위기 관리 능력이 탁월.' },
                { name: '서브 (Serve)', score: 9.0, description: '지속적으로 발전한 서브. 중요한 순간에 에이스를 꽂아넣는다.' },
                { name: '움직임 (Movement)', score: 9.0, description: '큰 키에도 불구하고 민첩한 풋워크와 코트 커버리지.' },
              ]}
            />

            <p>플레이 스타일은 공격형으로 분류된다. 베이스라인에서 탁월한 스트로크 기술을 구사하면서도, 기회가 생기면 네트로 전진해 발리로 마무리하는 능력을 갖추고 있다. 특히 짧은 백스윙, 길게 미는 직선으로 흐름을 설계한다. 포핸드는 넓은 궤도와 빠른 채찍질로 코트를 벌린다. 백핸드는 양손의 견고함으로 라인을 얇게 긁어 각을 만든다. 서브는 와이드와 바디의 비율을 바꿔 첫 두 타구의 구조를 설계하고, 짧은 리턴이 오면 하프코트에서 한 걸음 전진해 발리로 결말을 재촉한다.</p>
            <p>서브 앤 발리 게임이 뛰어나다. 퍼스트 서브로 시작해 백핸드로 봉합하는 전술로 흐름을 제어한다. 리턴은 퍼스트 서브에는 한두 걸음 뒤에서 시작해 탄도와 길이를 맞추고, 세컨드 서브에는 전진해 접점을 앞세운다. 이어지는 첫 스트로크는 중앙 깊은 볼로 각을 닫아두고, 세 번째 스트로크에서 코너의 문을 열어 상대의 스텝을 묶는다.</p>

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
                백핸드 위너 <strong className="text-green-700 dark:text-green-400 text-base">투어 최상위</strong> · 브레이크 포인트 방어율 <strong className="text-green-700 dark:text-green-400 text-base">높음</strong> · 냉철한 경기 운영
              </p>
            </div>
            <p>포인트 사이 그는 스트링을 훑고 두 번의 깊은 호흡으로 리듬을 고정한다. 스코어가 흔들려도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않는다. 타이브레이크 초반에는 네트를 넉넉히 넘기는 구질로 높이와 길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다. 빠른 적응력이 특징이다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">야닉 시너는 어떻게 여기까지 왔을까?</h2>
            <p>시너의 성장 배경은 스키 선수 출신이라는 독특한 이력에서 시작된다. 어릴 때 스키 챔피언이었으나 테니스로 전향했고, 빠르게 성장하며 세계랭킹 1위를 달성했다. 그의 테니스는 화려한 장식보다는 효율을 추구하며, 특히 탁월한 스트로크 기술이 뛰어나다.</p>
            <p>그는 2024년 호주 오픈 우승을 차지하며 그랜드 슬램 챔피언이 되었고, 같은 해 세계랭킹 1위를 달성했다. 최근 몇 시즌 동안 큰 대회에서도 안정적인 경기력을 보여주고 있으며, 특히 하드 코트에서 강한 면모를 보이고 있다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>시너의 커리어를 상징하는 경기는 2024년 호주 오픈 우승과 US 오픈 우승이다.</p>

            <h3>2024년 호주 오픈 우승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">첫 그랜드 슬램 타이틀</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>2024년 호주 오픈</strong>에서 노박 조코비치를 꺾고 결승에 진출, 다닐 메드베데프를 상대로 대역전승을 거두며 생애 첫 메이저 타이틀을 획득했다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들이 시너에게 열광하는 이유는 그의 냉철한 멘탈과 깔끔한 플레이 스타일, 그리고 겸손한 태도 때문이다.</p>
            <p>그의 경기는 군더더기 없이 깔끔하며, 위기 상황에서도 흔들리지 않는 모습은 팬들에게 신뢰감을 준다. 또한 팬 서비스가 좋고 항상 팀과 팬들에게 감사함을 표현하는 모습이 인상적이다.</p>

            <h2 id="recent-form">요즘 야닉 시너의 경기력 흐름은 어떤가?</h2>
            <p>최근 시너의 경기력은 절정에 달해 있다. 세계랭킹 1위에 등극하며 명실상부한 최강자로 자리매김했다.</p>

            <h3>최근 성적</h3>
            <p>2024년 시즌 2개의 그랜드 슬램 타이틀(호주 오픈, US 오픈)을 획득하며 최고의 시즌을 보냈다. 마스터스 대회에서도 꾸준히 우승 경쟁을 펼치고 있다.</p>

            <h2 id="one-sentence-summary">야닉 시너, 한 문장으로 정리하면?</h2>
            <p>야닉 시너는 탁월한 스트로크 기술과 서브 앤 발리 게임을 겸비한 이탈리아의 차세대 스타다.</p>
            <p>그의 테니스는 화려함보다는 효율을 추구하며, 특히 짧은 백스윙, 길게 미는 직선으로 흐름을 설계하는 능력이 뛰어나다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 표면별 전개 능력이 세계 상위권을 유지하게 해준다. 절제와 집중을 겸비한 그의 테니스는 결과를 넘어 설득으로 남으며, 차세대 스타로 기억될 것이다.</p>
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
