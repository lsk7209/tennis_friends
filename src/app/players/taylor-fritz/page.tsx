import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerHexagonStats from '@/components/players/PlayerHexagonStats';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, Crown } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfilePageSchema from '@/components/seo/ProfilePageSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import KeyTakeaways from '@/components/blog/KeyTakeaways';

export const metadata: Metadata = {
  title: '테일러 프리츠 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: "테일러 프리츠 (Taylor Fritz) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
  keywords: ['테일러 프리츠', 'Taylor Fritz', '테니스', 'ATP', '플레이스타일', '미국 테니스', '하드 전문', '직선적 포핸드'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/taylor-fritz',
  },
  openGraph: {
    title: '테일러 프리츠 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '테일러 프리츠의 하드 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/taylor-fritz',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테일러 프리츠 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '테일러 프리츠의 하드 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '테일러 프리츠, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '테일러 프리츠는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 테일러 프리츠의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '테일러 프리츠, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '테일러 프리츠의 경기 스타일은 어떤가요?',
    a: '강력한 서브와 플랫성 포핸드를 주무기로 하는 공격적인 베이스라이너입니다. 하드 코트에서 가장 좋은 경기력을 보여줍니다.',
  },
  {
    q: '프리츠의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 5위이며, 현재는 10위권을 유지하고 있습니다. 2022년 인디언 웰스 마스터스 우승으로 미국 테니스의 자존심을 세웠습니다.',
  },
  {
    q: '프리츠의 강점은 무엇인가요?',
    a: '빠르고 묵직한 포핸드 스트로크와 안정적인 양손 백핸드, 그리고 중요한 순간에 터지는 서브가 강점입니다.',
  },
  {
    q: '프리츠의 약점은 무엇인가요?',
    a: '큰 키에 비해 움직임이 다소 느린 편이었으나 최근 많이 개선되었습니다. 클레이 코트에서의 성적은 하드 코트에 비해 떨어지는 편입니다.',
  },
  {
    q: '프리츠를 한 문장으로 설명하면?',
    a: '미국 테니스의 부활을 이끄는 선두주자이자 하드 코트의 강자입니다.',
  },
];

const keyTakeaways = [
  "강력한 서브와 플랫성 포핸드를 앞세운 전형적인 미국식 하드 히터",
  "2022 인디언 웰스 우승으로 증명한 빅매치 경쟁력과 부상 투혼",
  "최근 풋워크 개선과 네트 플레이 강화로 완성형 올라운더로 진화 중"
];

export default function TaylorFritzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="테일러 프리츠"
        excerpt="직선적 포핸드와 안정된 서브로 하드코트를 설계하는 미국의 대표 선수"
        image="/images/players/taylor-fritz.png"
      ><ProfilePageSchema
          name="테일러 프리츠 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력"
          description="테일러 프리츠 (Taylor Fritz) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
          image="/images/players/taylor-fritz.png"
          mainEntity={{
            '@type': 'Person',
            name: 'Taylor Fritz',
            alternateName: '테일러 프리츠',
            description: '미국 출신의 파워 테니스 선수. 강력한 서브와 포핸드로 주목받는 선수.',
            image: '/images/players/taylor-fritz.png',
            jobTitle: 'Professional Tennis Player',
            nationality: { '@type': 'Country', name: 'United States' },
            birthDate: '1997-10-28',
            height: { '@type': 'QuantitativeValue', value: '196', unitText: 'cm' },
            award: ['ATP Masters 1000 Champion', 'ATP Finals Champion (2022)'],
            sameAs: [
              'https://en.wikipedia.org/wiki/Taylor_Fritz',
              'https://www.atptour.com/en/players/taylor-fritz/fb98/overview',
              'https://www.instagram.com/taylor_fritz/'
            ]
          }}
        />

        <BreadcrumbSchema
          items={[
            { name: '홈', item: 'https://tennisfriends.co.kr' },
            { name: '선수', item: 'https://tennisfriends.co.kr/players' },
            { name: '테일러 프리츠', item: 'https://tennisfriends.co.kr/players/taylor-fritz' },
          ]}
        />
        <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <KeyTakeaways items={keyTakeaways} />
          <PlayerProfileCard
            name="Taylor Fritz"
            country="United States"
            age={26}
            height="196cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2015}
            grandSlams={0}
            ranking={12}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              미국 테니스의 희망. <strong className="text-blue-600 dark:text-blue-400">강력한 플랫 포핸드</strong>와 침착한 경기 운영으로 세계 정상을 노리는 하드 히터.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              테일러 프리츠, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  직선적 포핸드와 안정된 서브로 하드코트를 설계하는 미국의 대표 선수
                </p>
              </div>
            </blockquote>
            <p>테일러 프리츠는 앤디 로딕 이후 오랫동안 침체되어 있던 미국 남자 테니스의 부활을 이끄는 선두주자다. 2022년 인디언 웰스 마스터스 결승에서 라파엘 나달을 꺾고 우승하며 전 세계에 충격을 안겼고, 이를 계기로 탑 10에 진입했다.</p>
            <p>캘리포니아 출신답게 하드 코트에서 강점을 보이며, 시원시원한 스트로크와 강력한 서브가 일품이다. 넷플릭스 다큐멘터리 '브레이크 포인트'를 통해 대중적인 인지도도 높아졌으며, 테니스 명문가 출신이라는 배경과 수려한 외모로도 주목받고 있다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
            <p>테일러 프리츠는 미국 출신의 장신 선수로, 강력한 포핸드와 서브를 앞세운 공격적인 플레이가 특징이다.</p>

            <PlayerHexagonStats
              playerName="테일러 프리츠"
              attributes={[
                { name: '포핸드 (Forehand)', score: 9.5, description: '빠르고 낮게 깔리는 플랫성 포핸드는 그의 가장 큰 무기다. 크로스와 다운더라인 모두 위력적이다.' },
                { name: '서브 (Serve)', score: 9.0, description: '196cm의 키에서 내리꽂는 서브는 정확도와 파워를 겸비했다.' },
                { name: '백핸드 (Backhand)', score: 8.8, description: '매우 안정적이며, 수비 상황에서도 쉽게 무너지지 않는다. 크로스 랠리 싸움에 능하다.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '중요한 포인트에서 과감하게 공격하는 배짱이 있다. 홈 관중의 응원을 즐길 줄 안다.' },
                { name: '움직임 (Movement)', score: 8.0, description: '과거 약점으로 지적되었으나, 최근 풋워크가 많이 향상되어 수비 범위가 넓어졌다.' },
              ]}
            />

            <p>플레이 스타일은 전형적인 미국식 하드 히터다. 베이스라인에 바짝 붙어서 공을 빠르고 강하게 타격하여 상대의 시간을 빼앗는다. 특히 포핸드 역크로스 샷은 득점 확률이 매우 높은 그의 필살기다.</p>
            <p>서브 게임을 지키는 능력이 뛰어나며, 리턴 게임에서도 공격적인 자세를 유지한다. 최근에는 네트 플레이 빈도를 늘리며 플레이의 다양성을 꾀하고 있다. 경기 중 감정 기복이 크지 않고 차분하게 경기를 풀어가는 편이다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>큰 키와 긴 팔다리를 갖추고 있어 서브와 스트로크에서 유리하다. 근력을 강화하여 파워를 늘렸고, 체력 훈련을 통해 5세트 경기도 거뜬히 소화할 수 있는 몸을 만들었다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">부상 관리 능력</strong> 또한 뛰어나 꾸준히 투어 일정을 소화하고 있다.</p>

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
                인디언 웰스 우승 · 미국 랭킹 1위 · 하드 코트 승률 <strong className="text-green-700 dark:text-green-400 text-base">상위권</strong>
              </p>
            </div>
            <p>홈 경기나 큰 무대에서 더 강해지는 '빅 매치 플레이어' 기질이 있다. 2022년 인디언 웰스 결승 당시 발목 부상에도 불구하고 출전을 강행하여 우승한 일화는 그의 강인한 정신력을 보여준다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">테일러 프리츠는 어떻게 여기까지 왔을까?</h2>
            <p>프리츠는 어머니 캐시 메이(전 WTA 탑 10)와 아버지 가이 프리츠(테니스 코치) 사이에서 태어난 '테니스 금수저'다. 주니어 시절부터 두각을 나타내며 2015년 US 오픈 주니어 우승과 주니어 랭킹 1위를 차지했다.</p>
            <p>프로 데뷔 후 꾸준히 랭킹을 올렸으나 한동안 20-30위권에 머물렀다. 하지만 2022년 기량이 만개하며 인디언 웰스 우승, 윔블던 8강, ATP 파이널스 4강 등 굵직한 성과를 냈다. 이제는 명실상부한 미국의 에이스로서 그랜드 슬램 우승을 목표로 하고 있다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>프리츠의 인생 경기는 2022년 인디언 웰스 마스터스 결승이다.</p>

            <h3>2022년 인디언 웰스 결승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">부상을 이겨낸 투혼</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                경기 전 발목 부상으로 기권까지 고려했으나, 진통제를 맞고 출전하여 <strong>라파엘 나달</strong>의 20연승을 저지하고 우승했다. 미국 선수로는 2001년 안드레 애거시 이후 21년 만의 우승이었다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 프리츠의 시원한 플레이 스타일과 스타성에 열광한다.</p>
            <p>강력한 위너가 터질 때마다 느끼는 쾌감은 프리츠 경기의 매력이다. 또한 잘생긴 외모와 패션 센스, 그리고 여자친구 모건 리들(인플루언서)과 함께 만드는 화제성도 그를 더욱 돋보이게 한다. 미국 테니스의 부활을 바라는 팬들의 기대감도 한몸에 받고 있다.</p>

            <h2 id="recent-form">요즘 테일러 프리츠의 경기력 흐름은 어떤가?</h2>
            <p>2023년 델레이 비치 오픈과 애틀랜타 오픈 우승으로 하드 코트 강자임을 재확인했다. 2024년에도 호주 오픈 8강에 오르며 좋은 흐름을 이어가고 있다.</p>

            <h3>최근 성적</h3>
            <p>델레이 비치 오픈 2연패를 달성하며 타이틀 방어에 성공했다. 클레이 코트 시즌에서도 마드리드 오픈 4강에 오르는 등 약점을 보완하고 있다. 꾸준함이 더해진다면 그랜드 슬램 4강 이상의 성적도 충분히 가능하다.</p>

            <h2 id="one-sentence-summary">테일러 프리츠, 한 문장으로 정리하면?</h2>
            <p>테일러 프리츠는 직선적 포핸드와 안정된 서브로 하드코트를 설계하는 미국의 대표 선수다.</p>
            <p>그의 테니스는 직선의 파워와 계산된 각을 추구하며, 특히 단단한 포핸드와 안정된 서브가 뛰어나다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 계산된 코스 선택이 세계 상위권을 유지하게 해준다. 차분함과 책임을 중시하는 그의 테니스는 결과를 넘어 설득으로 남으며, 미국 테니스의 상징으로 기억될 것이다.</p>
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
