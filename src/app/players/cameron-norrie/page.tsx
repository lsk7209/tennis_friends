import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerAttributes from '@/components/players/PlayerAttributes';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, Crown } from 'lucide-react';

export const metadata: Metadata = {
  title: '카메론 노리 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '카메론 노리의 좌완 베이스라인 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 꾸준함과 전술적 사고로 세계 상위권을 유지하는 영국 출신의 테니스 스타.',
  keywords: ['카메론 노리', 'Cameron Norrie', '테니스', 'ATP', '플레이스타일', '영국 테니스', '좌완', '베이스라인'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/cameron-norrie',
  },
  openGraph: {
    title: '카메론 노리 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '카메론 노리의 좌완 베이스라인 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/cameron-norrie',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '카메론 노리 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '카메론 노리의 좌완 베이스라인 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '카메론 노리, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '카메론 노리는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 카메론 노리의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '카메론 노리, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '카메론 노리의 경기 스타일은 어떤가요?',
    a: '왼손잡이의 이점을 살린 헤비 탑스핀 포핸드와 매우 플랫한 백핸드를 섞어 쓰는 까다로운 베이스라이너입니다. 체력이 매우 좋습니다.',
  },
  {
    q: '노리의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 8위이며, 현재는 30위권에 머물러 있습니다. 2021년 인디언 웰스 우승으로 탑 10에 진입했습니다.',
  },
  {
    q: '노리의 강점은 무엇인가요?',
    a: '지치지 않는 체력과 끈질긴 수비력, 그리고 상대의 리듬을 깨는 독특한 백핸드 궤적이 강점입니다.',
  },
  {
    q: '노리의 약점은 무엇인가요?',
    a: '결정적인 한 방(위너) 능력이 최정상급 선수들에 비해 부족하며, 서브의 위력이 다소 약한 편입니다.',
  },
  {
    q: '노리를 한 문장으로 설명하면?',
    a: '성실함과 끈기로 상대를 질식시키는 영국의 철인입니다.',
  },
];

export default function CameronNorriePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="카메론 노리"
        excerpt="꾸준함과 전술적 사고로 세계 상위권을 유지하는 영국 출신의 테니스 스타"
        image="/images/players/cameron-norrie.png"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Cameron Norrie"
            country="United Kingdom"
            age={28}
            height="188cm"
            plays="Left-handed (Two-handed backhand)"
            turnedPro={2017}
            grandSlams={0}
            ranking={33}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              지치지 않는 엔진. <strong className="text-blue-600 dark:text-blue-400">왼손잡이의 이점</strong>과 강철 같은 체력으로 상대를 무너뜨리는 영국의 자존심.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              카메론 노리, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  꾸준함과 전술적 사고로 세계 상위권을 유지하는 영국 출신의 테니스 스타
                </p>
              </div>
            </blockquote>
            <p>카메론 노리는 화려한 스타 플레이어는 아니지만, 투어에서 가장 상대하기 까다로운 선수 중 한 명으로 꼽힌다. 2021년 인디언 웰스 마스터스에서 깜짝 우승을 차지하며 세계적인 주목을 받았고, 2022년 윔블던 4강에 오르며 영국 테니스의 새로운 희망으로 떠올랐다.</p>
            <p>그의 테니스는 '성실함' 그 자체다. 어떤 공이든 끝까지 쫓아가 받아넘기며, 상대가 지쳐서 실수할 때까지 랠리를 이어간다. 남아프리카 공화국에서 태어나 뉴질랜드에서 자라고 영국 국적을 선택한 독특한 이력의 소유자로, 다양한 문화를 경험한 덕분인지 적응력이 매우 뛰어나다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"끈질긴 카운터 펀처 (Gritty Counter-Puncher)"</strong></p>
            <p>카메론 노리는 왼손잡이 특유의 각도와 엄청난 체력을 바탕으로 상대를 압박하는 베이스라이너다.</p>

            <PlayerAttributes
              attributes={[
                { name: '체력 (Stamina)', score: 10, description: '투어 최고의 심폐지구력을 자랑한다. 5세트 접전에서도 지친 기색을 보이지 않는다.' },
                { name: '일관성 (Consistency)', score: 9.5, description: '범실이 매우 적다. 기계처럼 공을 넘기며 상대의 인내심을 시험한다.' },
                { name: '백핸드 (Backhand)', score: 9.0, description: '테이크백이 거의 없는 독특한 폼으로 매우 플랫하게 친다. 공이 낮게 깔려 상대가 처리하기 어렵다.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '왼손잡이 특유의 헤비 탑스핀으로 상대를 코트 밖으로 몰아낸다.' },
                { name: '멘탈 (Mental)', score: 9.0, description: '어떤 상황에서도 포기하지 않는 끈기가 있다. 항상 차분하게 경기에 임한다.' },
              ]}
            />

            <p>플레이 스타일은 철저하게 계산된 확률 테니스다. 무리한 공격보다는 안전한 코스로 공을 보내며 랠리를 길게 가져간다. 특히 백핸드는 회전이 거의 없는 플랫 구질이라 바운드 후 낮게 깔리는데, 이는 탑스핀 위주의 현대 테니스에서 매우 이질적이고 까다로운 무기다.</p>
            <p>반면 포핸드는 많은 회전을 걸어 높게 튀어 오르게 만든다. 이처럼 양쪽 날개의 구질 차이를 이용하여 상대의 리듬을 뺏는 것이 노리의 주된 전술이다. 서브는 빠르지 않지만 코스 공략이 좋고, 왼손잡이의 이점을 잘 활용한다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>마라톤 선수급의 심폐지구력을 가지고 있다. 비시즌 훈련량이 엄청난 것으로 유명하며, 경기 후반으로 갈수록 체력적 우위를 점한다. 발놀림이 빠르고 잔발을 많이 사용하여 항상 최적의 타점을 잡는다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">강철 같은 체력</strong>은 그의 가장 큰 자산이다.</p>

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
                인디언 웰스 우승 · 윔블던 4강 · 리턴 게임 승률 <strong className="text-green-700 dark:text-green-400 text-base">상위권</strong>
              </p>
            </div>
            <p>감정 기복이 거의 없고 묵묵히 자신의 플레이를 한다. '돌부처' 같은 모습으로 상대에게 심리적 압박감을 준다. 대학 테니스(TCU)를 거치며 다져진 팀워크와 전술 이해도도 높다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">카메론 노리는 어떻게 여기까지 왔을까?</h2>
            <p>노리는 남아공 요하네스버그에서 태어나 뉴질랜드 오클랜드에서 자랐다. 주니어 시절 뉴질랜드 대표로 뛰었으나, 지원 부족 등으로 영국으로 국적을 옮겼다. 미국 텍사스 크리스천 대학교(TCU)에서 대학 최고의 선수로 활약한 뒤 2017년 프로에 데뷔했다.</p>
            <p>초반에는 챌린저 무대에서 경험을 쌓았고, 2021년 기량이 급성장하며 투어 2승과 인디언 웰스 우승을 차지했다. 2022년에는 윔블던 4강에 오르며 앤디 머레이의 뒤를 잇는 영국 테니스의 간판으로 자리 잡았다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>노리의 커리어 하이라이트는 2021년 인디언 웰스 결승이다.</p>

            <h3>2021년 인디언 웰스 결승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">언더독의 반란</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                결승에서 <strong>니콜로즈 바실라쉬빌리</strong>를 상대로 2-1 역전승을 거뒀다. 첫 세트를 내주고도 포기하지 않고 끈질기게 따라붙어 결국 우승컵을 들어 올렸다. 영국 선수로는 최초의 인디언 웰스 우승이었다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 노리의 성실함과 투지에 박수를 보낸다.</p>
            <p>화려하지는 않지만 묵묵히 최선을 다하는 모습이 감동을 준다. 또한 코트 밖에서는 소탈하고 친근한 성격으로 알려져 있다. 영국 팬들에게는 앤디 머레이 이후 믿고 볼 수 있는 든든한 존재다.</p>

            <h2 id="recent-form">요즘 카메론 노리의 경기력 흐름은 어떤가?</h2>
            <p>2024년 들어 다소 부진한 모습을 보이며 랭킹이 30위권으로 떨어졌다. 하지만 리우 오픈 4강에 오르는 등 클레이 코트에서 반등의 조짐을 보이고 있다.</p>

            <h3>최근 성적</h3>
            <p>호주 오픈 16강 진출로 건재함을 알렸으나, 이후 잔부상 등으로 기복 있는 모습을 보였다. 체력적인 강점을 바탕으로 다시 폼을 끌어올린다면 언제든 탑 10에 복귀할 수 있는 저력을 가지고 있다.</p>

            <h2 id="one-sentence-summary">카메론 노리, 한 문장으로 정리하면?</h2>
            <p>카메론 노리는 꾸준함과 전술적 사고로 세계 상위권을 유지하는 영국 출신의 테니스 스타다.</p>
            <p>그의 테니스는 화려함보다 실리를 추구하며, 특히 지치지 않는 체력과 까다로운 구질이 강점이다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 끈질긴 수비가 세계 상위권을 유지하게 해준다. 성실함과 겸손을 중시하는 그의 테니스는 결과를 넘어 설득으로 남으며, 영국 테니스의 든든한 버팀목으로 기억될 것이다.</p>
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
