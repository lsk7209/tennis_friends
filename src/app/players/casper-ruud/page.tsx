import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerAttributes from '@/components/players/PlayerAttributes';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, RotateCcw, AlertTriangle, Crown } from 'lucide-react';

export const metadata: Metadata = {
  title: '카스페르 루드 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '카스페르 루드의 안정적인 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 강력한 탑스핀 포핸드와 성실함으로 코트를 지배하는 노르웨이 출신의 세계랭킹 상위권 선수.',
  keywords: ['카스페르 루드', 'Casper Ruud', '테니스', 'ATP', '플레이스타일', '노르웨이 테니스', '탑스핀', '클레이 코트'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/casper-ruud',
  },
  openGraph: {
    title: '카스페르 루드 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '카스페르 루드의 안정적인 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/casper-ruud',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '카스페르 루드 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '카스페르 루드의 안정적인 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '카스페르 루드, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '카스페르 루드는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 카스페르 루드의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '카스페르 루드, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '카스페르 루드의 경기 스타일은 어떤가요?',
    a: '베이스라인에서의 안정적인 플레이와 강력한 탑스핀 포핸드가 특징입니다. 실수를 최소화하고 끈질기게 물고 늘어지는 스타일입니다.',
  },
  {
    q: '루드의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 2위이며, 현재도 세계랭킹 10위권을 꾸준히 유지하고 있습니다. 그랜드 슬램 준우승 3회의 경력이 있습니다.',
  },
  {
    q: '루드의 강점은 무엇인가요?',
    a: '나달을 연상시키는 헤비 탑스핀 포핸드가 최대 강점입니다. 또한 체력과 멘탈이 매우 강해 장기전에 능합니다.',
  },
  {
    q: '루드의 약점은 무엇인가요?',
    a: '백핸드가 상대적으로 평범하다는 평가를 받습니다. 또한 하드 코트나 잔디 코트에서의 폭발력이 클레이 코트에 비해 부족할 때가 있습니다.',
  },
  {
    q: '루드를 한 문장으로 설명하면?',
    a: '성실함과 꾸준함으로 정상에 오른 노르웨이 테니스의 개척자입니다.',
  },
];

export default function CasperRuudPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="카스페르 루드"
        excerpt="강력한 탑스핀 포핸드와 성실함으로 코트를 지배하는 노르웨이 출신의 세계랭킹 상위권 선수"
        image="/images/players/casper-ruud.png"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Casper Ruud"
            country="Norway"
            age={25}
            height="183cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2015}
            grandSlams={0}
            ranking={7}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              북유럽의 아이스맨. <strong className="text-orange-600 dark:text-orange-400">헤비 탑스핀 포핸드</strong>와 강철 같은 체력으로 상대를 질식시키는 클레이 코트의 강자.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              카스페르 루드, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  강력한 탑스핀 포핸드와 성실함으로 코트를 지배하는 노르웨이 출신의 세계랭킹 상위권 선수
                </p>
              </div>
            </blockquote>
            <p>카스페르 루드는 노르웨이 테니스 역사상 가장 높은 랭킹에 오른 선수로, 라파엘 나달 아카데미 출신답게 강력한 탑스핀 포핸드를 구사한다. 그랜드 슬램 결승에 3번이나 진출하며 메이저 타이틀에 근접한 실력을 증명했고, 세계랭킹 2위까지 오르는 기염을 토했다. 특히 클레이 코트에서의 강세가 두드러지지만, 하드 코트에서도 ATP 파이널스 준우승을 차지하는 등 올라운더로서의 면모를 갖추고 있다.</p>
            <p>그는 투어에서 가장 성실하고 매너 좋은 선수로 알려져 있으며, 스포츠맨십 상을 수상하기도 했다. 꾸준함과 안정성을 바탕으로 상위권을 유지하고 있으며, '빅3' 이후의 테니스계를 이끌어갈 주요 선수 중 한 명으로 평가받는다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"안정적인 베이스라이너 (Consistent Baseliner)"</strong></p>
            <p>카스페르 루드는 노르웨이 출신의 세계랭킹 상위권 선수로, 강력한 포핸드와 안정적인 경기 운영이 특징이다.</p>

            <PlayerAttributes
              attributes={[
                { name: '포핸드 (Forehand)', score: 9.8, description: '나달을 연상시키는 엄청난 회전량의 탑스핀 포핸드. 클레이 코트에서 특히 위력적이다.' },
                { name: '일관성 (Consistency)', score: 9.5, description: '실수를 거의 하지 않는 안정적인 플레이. 상대가 지칠 때까지 랠리를 이어간다.' },
                { name: '움직임 (Movement)', score: 9.0, description: '빠른 발과 뛰어난 예측 능력으로 코트 전체를 커버한다.' },
                { name: '서브 (Serve)', score: 8.5, description: '파워보다는 정확도와 회전을 중시하는 서브. 꾸준히 발전하고 있다.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적이지만 공격적인 위력은 포핸드에 비해 다소 떨어진다.' },
              ]}
            />

            <p>플레이 스타일은 전형적인 클레이 코트 스페셜리스트의 장점을 가진 베이스라이너다. 베이스라인 뒤에서 많은 양의 스핀이 걸린 공을 깊숙이 보내 상대를 뒤로 밀어내고, 짧은 공이 오면 강력한 포핸드 위너로 마무리한다. 그의 포핸드 RPM(분당 회전수)은 투어 최상위권에 속한다.</p>
            <p>수비 능력이 매우 뛰어나다. 상대의 공격을 끈질기게 받아넘기며 실수를 유도한다. 최근에는 하드 코트에서의 적응력을 높이기 위해 공격적인 플레이 비중을 늘리고 있으며, 네트 플레이와 서브 능력 향상에도 힘쓰고 있다. 멘탈적으로 매우 차분하고 침착하여 경기 중 감정 기복이 거의 없다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>탄탄한 체격과 지치지 않는 체력을 자랑한다. 5세트 경기도 문제없이 소화하며, 연전에도 강한 모습을 보인다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">부상이 거의 없는 철저한 자기 관리</strong> 또한 그의 큰 장점이다.</p>

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
                그랜드 슬램 결승 3회 진출 · 클레이 코트 승률 <strong className="text-green-700 dark:text-green-400 text-base">최상위권</strong> · 스포츠맨십 상 수상
              </p>
            </div>
            <p>항상 평정심을 유지한다. 심판 판정에 불복하거나 라켓을 던지는 모습을 거의 볼 수 없다. 이러한 차분함은 위기 상황에서 올바른 판단을 내리는 데 도움을 준다. '나이스 가이'라는 별명처럼 코트 안팎에서 모범적인 태도를 보여준다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">카스페르 루드는 어떻게 여기까지 왔을까?</h2>
            <p>루드는 노르웨이 테니스 선수였던 아버지 크리스티안 루드의 지도를 받으며 성장했다. 라파엘 나달 아카데미에서 훈련하며 기량을 급성장시켰고, 2020년 부에노스아이레스 오픈 우승으로 노르웨이 선수 최초의 ATP 투어 우승자가 되었다.</p>
            <p>2022년은 그에게 최고의 해였다. 프랑스 오픈과 US 오픈에서 준우승을 차지하고, ATP 파이널스에서도 준우승하며 세계랭킹 2위까지 올랐다. 비록 메이저 우승 문턱에서 좌절했지만, 세계 정상급 선수임을 확실히 각인시켰다. 2023년 프랑스 오픈에서도 다시 한번 결승에 오르며 클레이 코트의 강자임을 입증했다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>루드의 커리어를 상징하는 경기는 2022년 프랑스 오픈 8강전이다.</p>

            <h3>2022년 프랑스 오픈 8강</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">노르웨이 더비 승리</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>홀게르 루네</strong>와의 8강전에서 3-1로 승리하며 생애 첫 그랜드 슬램 4강에 진출했다. 북유럽 라이벌전에서의 승리로 자신의 입지를 확고히 했다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들이 루드에게 호감을 느끼는 이유는 그의 성실함과 겸손함이다.</p>
            <p>화려한 퍼포먼스나 자극적인 언행은 없지만, 묵묵히 자신의 길을 가는 모습이 신뢰를 준다. 또한 잘생긴 외모와 깔끔한 매너는 많은 여성 팬들을 확보하는 요인이기도 하다. 골프를 즐기는 등 건전한 사생활도 긍정적인 이미지를 더한다.</p>

            <h2 id="recent-form">요즘 카스페르 루드의 경기력 흐름은 어떤가?</h2>
            <p>최근 루드는 꾸준히 상위권을 유지하고 있다. 클레이 코트 시즌에는 언제나 우승 후보로 꼽히며, 하드 코트에서도 점차 성적을 내고 있다.</p>

            <h3>최근 성적</h3>
            <p>2024년 바르셀로나 오픈 우승으로 시즌 첫 타이틀을 획득했다. 몬테카를로 마스터스 준우승 등 큰 대회에서도 좋은 성적을 이어가고 있다. 그랜드 슬램 우승이라는 목표를 향해 한 걸음씩 나아가고 있다.</p>

            <h2 id="one-sentence-summary">카스페르 루드, 한 문장으로 정리하면?</h2>
            <p>카스페르 루드는 인내와 정밀도로 점토를 지배하는 노르웨이의 대표 선수다.</p>
            <p>그의 테니스는 화려함보다 확률 높은 선택을 꾸준히 누적하며, 특히 긴 랠리를 두려워하지 않는 인내와 정밀한 구질이 뛰어나다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 전술적 전진이 세계 상위권을 유지하게 해준다. 절제와 예의를 중시하는 그의 테니스는 결과를 넘어 설득으로 남으며, 노르웨이 테니스의 상징으로 기억될 것이다.</p>
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
