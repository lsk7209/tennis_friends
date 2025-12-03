import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerSkillRadar from '@/components/players/PlayerSkillRadar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, ArrowRight, Star, CheckCircle, Crown } from 'lucide-react';
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: '노박 조코비치 — 세계랭킹 1위 | 플레이스타일·명장면·최근 경기력',
  description: '노박 조코비치의 전천후 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 얼음 멘탈·전술가·흐름 읽는 선수·역전의 달인으로 주목받는 세르비아 출신의 세계랭킹 1위 선수.',
  keywords: ['노박 조코비치', 'Novak Djokovic', '테니스', 'ATP', '플레이스타일', '세르비아 테니스', '전천후', '멘탈', '전술'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/novak-djokovic',
  },
  openGraph: {
    title: '노박 조코비치 — 세계랭킹 1위 | 플레이스타일·명장면·최근 경기력',
    description: '노박 조코비치의 전천후 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/novak-djokovic',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '노박 조코비치 — 세계랭킹 1위 | 플레이스타일·명장면·최근 경기력',
    description: '노박 조코비치의 전천후 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '노박 조코비치, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '노박 조코비치는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 노박 조코비치의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '노박 조코비치, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '노박 조코비치의 경기 스타일은 어떤가요?',
    a: '전천후 스타일로, 멘탈과 전술적 완성도가 특징입니다. 리턴을 출발점으로 포인트의 구조를 다시 짜는 능력이 뛰어납니다.',
  },
  {
    q: '조코비치의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 1위이며, 현재도 세계랭킹 1위를 유지하고 있습니다. 400주 이상 1위를 유지하며 테니스 역사에 이름을 남겼습니다.',
  },
  {
    q: '조코비치의 강점은 무엇인가요?',
    a: '멘탈과 전술적 완성도가 최대 강점입니다. 타이브레이크와 5세트 경기에서의 멘탈 강점, 그리고 상대의 강점을 거울처럼 받아 적응하는 능력이 뛰어납니다.',
  },
  {
    q: '조코비치의 인간적인 면모는 어떤가요?',
    a: '규율과 배려가 특징입니다. 코트 밖에서는 팬들에게 친절하고, 동료 선수들을 배려하는 모습을 자주 보여줍니다.',
  },
  {
    q: '조코비치를 한 문장으로 설명하면?',
    a: '멘탈과 전술로 경기를 지배하는, 흐름을 읽는 전술가이자 역전의 달인입니다.',
  },
];

export default function NovakDjokovicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="노박 조코비치"
        excerpt="전천후 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필"
        image="/images/players/novak-djokovic.png"
      >
        <PersonSchema
          name="Novak Djokovic"
          nameKo="노박 조코비치"
          description="세르비아 출신의 세계랭킹 1위 프로 테니스 선수. 그랜드 슬램 24회 우승이라는 남자 테니스 역사상 최다 기록 보유. 멘탈과 전술로 경기를 지배하는 전천후 플레이어."
          image="/images/players/novak-djokovic.png"
          nationality="Serbia"
          birthDate="1987-05-22"
          height="188"
          jobTitle="Professional Tennis Player"
          award={[
            'Grand Slam Singles Champion (24 titles)',
            'ATP World No. 1',
            'Olympic Gold Medalist',
            'ATP Finals Champion (7 titles)',
          ]}
          url="https://tennisfriends.co.kr/players/novak-djokovic"
        />
        <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Novak Djokovic"
            country="Serbia"
            age={37}
            height="188cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2003}
            grandSlams={24}
            ranking={1}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              테니스 역사상 가장 완벽한 선수. <strong className="text-blue-600 dark:text-blue-400">무결점의 테크닉</strong>과 강철 같은 멘탈로 코트를 지배하는 살아있는 전설.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              노박 조코비치, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Crown className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  멘탈과 전술로 경기를 지배하는, 흐름을 읽는 전술가이자 역전의 달인
                </p>
              </div>
            </blockquote>
            <p>노박 조코비치는 세르비아 출신의 세계랭킹 <strong>1위</strong> 테니스 선수로, 그랜드 슬램 <strong>24회 우승</strong>이라는 남자 테니스 역사상 최다 기록을 보유하고 있다. 30대 후반의 나이에도 불구하고 여전히 세계 최고 수준의 경기력을 유지하며, 멘탈의 성숙함과 전술적 완성도로 테니스계를 지배하고 있다. 리턴을 출발점으로 포인트의 구조를 다시 짜고, 루틴과 호흡으로 큰 순간을 관리하는 그의 테니스는 효율과 정확성의 극치를 보여준다.</p>
            <p>그는 <strong>2011년</strong> 처음 세계랭킹 1위에 올랐고, 이후 <strong>400주 이상</strong> 1위를 유지하며 테니스 역사에 이름을 남겼다. 현재도 세계랭킹 1위를 유지하고 있으며, 나이가 들어감에 따라 경기 선택과 체력 관리를 더욱 정밀하게 하면서도 여전히 큰 대회에서 우승을 거두고 있다. 그의 테니스는 화려함보다는 효율을 추구하며, 특히 타이브레이크와 5세트 경기에서의 멘탈 강점이 두드러진다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"완벽한 육각형 플레이어 (All-Court Player)"</strong></p>
            <p>노박 조코비치는 세르비아 출신의 세계랭킹 1위 선수로, 전천후 스타일과 탁월한 멘탈, 전술적 완성도가 특징인 ATP 투어의 레전드다.</p>

            <PlayerSkillRadar
              attributes={[
                { name: '리턴 (Return)', score: 10, description: '역대 최고의 리턴 능력. 상대의 서브를 무력화시키고 랠리의 주도권을 가져온다.' },
                { name: '멘탈 (Mental)', score: 10, description: '타이브레이크와 위기 상황에서 더 강해지는 강철 멘탈.' },
                { name: '백핸드 (Backhand)', score: 10, description: '투어에서 가장 안정적이고 위협적인 양손 백핸드.' },
                { name: '체력/유연성', score: 9.8, description: '고무인간이라 불리는 유연성과 지치지 않는 체력.' },
                { name: '전술 (Tactics)', score: 9.8, description: '상대의 약점을 파고드는 완벽한 경기 운영 능력.' },
              ]}
            />

            <p>플레이 스타일은 전천후(All-Rounder)로 분류된다. 베이스라인에서의 수비와 공격 전환이 완벽하며, 네트 플레이와 드롭샷 등 모든 기술을 자유자재로 구사한다. 특히 리턴 능력이 가장 큰 무기다. 상대의 강력한 서브를 깊숙이 받아넘겨 랠리의 주도권을 가져온다. 백핸드는 투어에서 가장 안정적이고 위협적이며, 포핸드 역시 정확도와 파워를 겸비했다.</p>
            <p>전술적 완성도가 뛰어나다. 상대의 약점을 집요하게 파고들며, 경기의 흐름을 읽고 조절하는 능력이 탁월하다. 위기 상황에서는 더욱 집중력을 발휘하며, 타이브레이크 승률이 매우 높다. 그의 테니스는 감정보다는 절차에 기반하며, 루틴과 호흡으로 큰 순간을 관리한다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>유연성이 뛰어나다. '고무인간'이라는 별명처럼 믿기 힘든 각도에서 공을 받아넘긴다. 코트 커버리지가 넓어 수비 범위가 넓다. 장기전에서도 체력 관리가 뛰어나며, <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">5세트 경기에서도 후반까지 안정적인 경기력</strong>을 유지한다.</p>

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
                타이브레이크 승률 <strong className="text-green-700 dark:text-green-400 text-base">70% 이상</strong> · 5세트 경기 후반 안정성 · 절차적 완성도
              </p>
            </div>
            <p>타이브레이크 승률이 <strong>70%를 넘는</strong> 편이다. 5세트 경기에서도 후반까지 안정적인 경기력을 유지한다. 브레이크 포인트 상황에서도 침착함을 잃지 않는다. 포인트 사이의 절차를 엄격하게 반복하는 루틴이 심박이 급히 오르는 것을 막아준다. 스코어가 기울어도 루틴의 길이를 바꾸지 않아 실수의 폭이 좁다. 위기에서 점수판을 보지 않고, 토스 높이, 임팩트 위치, 라켓면의 각만 머릿속에 남긴다.</p>

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              전술적 다양성
            </h3>
            <p>상대의 강점을 거울처럼 받아 적응한다. 상대가 강하게 치면 그 힘을 이용해 더 강하게 받아치고, 약하게 치면 그 틈을 파고든다. 드롭샷과 로브를 적절히 섞어 상대를 흔들고, 네트 플레이로 포인트를 마무리한다. 그의 테니스는 상대의 예측을 벗어나는 창의성과 정확성을 동시에 보여준다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">노박 조코비치는 어떻게 여기까지 왔을까?</h2>
            <p>조코비치의 성장 배경은 전쟁의 포화 속에서 시작된다. 어린 시절 세르비아 내전을 겪으며 멘탈을 단련했고, 어려운 환경 속에서도 테니스에 대한 열정을 잃지 않았다. 그의 테니스는 화려한 장식보다는 효율을 추구하며, 특히 멘탈과 전술적 완성도가 뛰어나다.</p>
            <p>그는 2008년 호주 오픈 우승을 시작으로 그랜드 슬램 우승 행진을 이어갔다. 2011년에는 3개의 그랜드 슬램 타이틀을 휩쓸며 세계랭킹 1위에 올랐다. 이후 페더러, 나달과 함께 '빅3' 시대를 열며 테니스 역사를 새로 썼다. 최근에는 그랜드 슬램 24회 우승이라는 대기록을 달성하며 역대 최고의 선수로 인정받고 있다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>조코비치의 커리어를 상징하는 경기는 2019년 윔블던 결승과 2012년 호주 오픈 결승이다.</p>

            <h3>2019년 윔블던 결승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">역대 최장 시간 결승전</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>2019년 윔블던 결승</strong>에서 로저 페더러를 상대로 4시간 57분의 혈투 끝에 승리했다. 2번의 매치 포인트를 극복하고 타이브레이크에서 승리하며 멘탈의 승리를 보여주었다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들이 조코비치에게 열광하는 이유는 그의 불굴의 의지와 완벽주의, 그리고 인간적인 매력 때문이다.</p>
            <p>그의 경기는 언제나 드라마틱하며, 포기하지 않는 모습은 팬들에게 큰 영감을 준다. 또한 코트 밖에서의 유머러스하고 지적인 모습, 그리고 자선 활동에 앞장서는 모습은 팬들의 존경을 받는다.</p>

            <h2 id="recent-form">요즘 노박 조코비치의 경기력 흐름은 어떤가?</h2>
            <p>최근 조코비치의 경기력은 여전히 세계 최고 수준이다. 나이가 무색할 만큼 체력과 스피드가 뛰어나며, 경험에서 우러나오는 노련미가 더해져 더욱 강력해졌다.</p>

            <h3>최근 성적</h3>
            <p>2023년 3개의 그랜드 슬램 타이틀(호주 오픈, 프랑스 오픈, US 오픈)을 휩쓸며 건재함을 과시했다. 2024년에도 여전히 강력한 우승 후보로 꼽히며, 그랜드 슬램 25회 우승을 목표로 하고 있다.</p>

            <h3>경기력 분석</h3>
            <p>경기력 측면에서는 서브와 포핸드가 더욱 정교해졌다. 특히 서브의 정확도와 파워가 향상되어 서비스 게임을 더욱 쉽게 가져가는 모습을 보여준다. 또한 멘탈적인 부분에서도 더욱 성숙해져 위기 상황에서도 흔들리지 않는 모습을 보여준다.</p>

            <h3>부상 관리</h3>
            <p>부상과 관련해서는 현재 큰 문제가 없는 상태다. 나이가 들어감에 따라 몸 관리에 더 신경을 쓰고 있다. 경기 선택을 더욱 정밀하게 하면서 체력과 부상 리스크를 관리한다. 시즌 운영에서 대회 선택을 최적화하여 최고의 날을 더 자주 만들 수 있도록 노력하고 있다.</p>

            <h3>랭킹과 스타일 변화</h3>
            <p>랭킹 변동을 보면, 그는 현재 세계랭킹 1위를 유지하고 있다. 하락했던 시기가 있었지만, 다시 1위로 복귀했다. 꾸준한 성적 유지로 최상위권을 지키고 있다. 플레이 스타일의 작은 변화도 눈에 띈다. 과거보다는 더 효율적인 경기를 하기 위해 전술적 다양성을 높였다. 하프코트에서의 마무리를 한 박자 더 빠르게 가져오는 데 집중하고 있다. 이미 증명한 안정 위에 결말의 속도가 얹히면, 그의 이름은 여전히 마지막 장면에 남을 것이다.</p>

            <h2 id="one-sentence-summary">노박 조코비치, 한 문장으로 정리하면?</h2>
            <p>노박 조코비치는 멘탈과 전술로 경기를 지배하는, 흐름을 읽는 전술가이자 역전의 달인이다.</p>
            <p>그의 테니스는 감정보다는 절차에 기반하며, 리턴을 출발점으로 포인트의 구조를 다시 짜는 전술적 완성도가 특징이다. 타이브레이크와 5세트 경기에서의 멘탈 강점, 그리고 상대의 강점을 거울처럼 받아 적응하는 능력이 세계 최고 수준을 유지하게 해준다. 규율과 배려를 겸비한 그의 테니스는 결과를 넘어 설득으로 남으며, 테니스 역사에 길이 남을 레전드로 기억될 것이다.</p>
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
