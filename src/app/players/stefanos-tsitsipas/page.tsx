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
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: '스테파노스 치치파스 — 그리스의 테니스 신화 | 플레이스타일·명장면·최근 경기력',
  description: '스테파노스 치치파스의 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 우아한 원핸드 백핸드와 공격적인 네트 플레이로 코트를 수놓는 그리스의 테니스 영웅.',
  keywords: ['스테파노스 치치파스', 'Stefanos Tsitsipas', '테니스', 'ATP', '플레이스타일', '그리스 테니스', '원핸드 백핸드', '올코트'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/stefanos-tsitsipas',
  },
  openGraph: {
    title: '스테파노스 치치파스 — 그리스의 테니스 신화 | 플레이스타일·명장면·최근 경기력',
    description: '스테파노스 치치파스의 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/stefanos-tsitsipas',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '스테파노스 치치파스 — 그리스의 테니스 신화 | 플레이스타일·명장면·최근 경기력',
    description: '스테파노스 치치파스의 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '스테파노스 치치파스, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '스테파노스 치치파스는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 스테파노스 치치파스의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '스테파노스 치치파스, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '스테파노스 치치파스의 경기 스타일은 어떤가요?',
    a: '공격적인 올코트 플레이어로, 강력한 포핸드와 우아한 원핸드 백핸드, 그리고 적극적인 네트 플레이가 특징입니다.',
  },
  {
    q: '치치파스의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 3위이며, 현재는 10위권을 유지하고 있습니다. 몬테카를로 마스터스 3회 우승 등 클레이 코트에서 특히 강한 모습을 보입니다.',
  },
  {
    q: '치치파스의 강점은 무엇인가요?',
    a: '높은 타점에서 때리는 강력한 포핸드와 서브, 그리고 네트 앞에서의 감각적인 발리가 강점입니다.',
  },
  {
    q: '치치파스의 약점은 무엇인가요?',
    a: '원핸드 백핸드 쪽으로 높게 오는 공에 대한 대처와 리턴 게임에서의 기복이 약점으로 지적됩니다.',
  },
  {
    q: '치치파스를 한 문장으로 설명하면?',
    a: '고전적인 우아함과 현대적인 파워를 겸비한 그리스 테니스의 아이콘입니다.',
  },
];

export default function StefanosTsitsipasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="스테파노스 치치파스"
        excerpt="우아한 원핸드 백핸드와 공격적인 네트 플레이로 코트를 수놓는 그리스의 테니스 영웅"
        image="/images/players/stefanos-tsitsipas.png"
      ><PersonSchema
          name="Stefanos Tsitsipas"
          nameKo="스테파노스 치치파스"
          description="그리스 출신의 우아한 테니스 선수. 아름다운 단손 백핸드와 공격적인 플레이로 주목받는 선수."
          image="/images/players/stefanos-tsitsipas.png"
          nationality="Greece"
          birthDate="1998-08-12"
          height="193"
          jobTitle="Professional Tennis Player"
          award={[
            'ATP Finals Champion (2019)', 'ATP Masters 1000 Champion (2 titles)'
          ]}
          url="https://tennisfriends.co.kr/players/stefanos-tsitsipas"
        />

      <BreadcrumbSchema
        items={[
          { name: '홈', item: 'https://tennisfriends.co.kr' },
          { name: '선수', item: 'https://tennisfriends.co.kr/players' },
          { name: '스테파노스 치치파스', item: 'https://tennisfriends.co.kr/players/stefanos-tsitsipas' },
        ]}
      />
      <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Stefanos Tsitsipas"
            country="Greece"
            age={26}
            height="193cm"
            plays="Right-handed (One-handed backhand)"
            turnedPro={2016}
            grandSlams={0}
            ranking={11}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              그리스 신화 속 영웅의 재림. <strong className="text-blue-600 dark:text-blue-400">우아한 원핸드 백핸드</strong>와 강력한 포핸드로 코트를 지배하는 아티스트.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              스테파노스 치치파스, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  우아한 원핸드 백핸드와 공격적인 네트 플레이로 코트를 수놓는 그리스의 테니스 영웅
                </p>
              </div>
            </blockquote>
            <p>스테파노스 치치파스는 그리스 테니스 역사상 가장 성공한 선수로, 현대 테니스에서 보기 드문 원핸드 백핸드 구사자 중 한 명이다. 몬테카를로 마스터스 3회 우승이라는 기록이 말해주듯 클레이 코트에서 특히 강력한 모습을 보이지만, 하드 코트와 잔디 코트에서도 경쟁력을 갖춘 올코트 플레이어다.</p>
            <p>그는 2019년 ATP 파이널스 우승으로 차세대 스타로서의 입지를 굳혔고, 이후 꾸준히 탑 10에 이름을 올리며 '빅3'를 위협하는 존재로 성장했다. 큰 키를 활용한 서브와 포핸드, 그리고 과감한 네트 대시는 그의 트레이드마크다. 또한, 철학적인 인터뷰와 독특한 소셜 미디어 활동으로도 유명하다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"공격적인 올코트 플레이어 (Aggressive All-Court Player)"</strong></p>
            <p>스테파노스 치치파스는 그리스 출신의 세계랭킹 상위권 선수로, 강력한 포핸드와 네트 플레이를 즐기는 공격적인 스타일이 특징이다.</p>

            <PlayerHexagonStats
              playerName="스테파노스 치치파스"
              attributes={[
                { name: '포핸드 (Forehand)', score: 9.5, description: '높은 타점에서 감아치는 헤비 탑스핀 포핸드는 상대를 베이스라인 뒤로 밀어낸다.' },
                { name: '서브 (Serve)', score: 9.0, description: '193cm의 키에서 나오는 강력한 서브. 세컨드 서브의 킥도 위협적이다.' },
                { name: '네트 플레이', score: 9.0, description: '복식 경기 경험을 바탕으로 한 발리와 스매싱 능력이 탁월하다.' },
                { name: '백핸드 (Backhand)', score: 8.0, description: '우아하고 아름답지만, 높은 공에 대한 처리가 약점으로 꼽히기도 한다.' },
                { name: '움직임 (Movement)', score: 8.5, description: '큰 키에 비해 민첩하며, 특히 전진하는 움직임이 좋다.' },
              ]}
            />

            <p>플레이 스타일은 공격적인 올코트 플레이어다. 강력한 서브와 포핸드로 주도권을 잡고, 기회가 생기면 주저 없이 네트로 대시하여 포인트를 마무리한다. 그의 포핸드는 투어에서 가장 무거운 구질 중 하나로 평가받으며, 이를 통해 상대를 압박하고 코트를 넓게 활용한다.</p>
            <p>원핸드 백핸드는 그의 상징과도 같다. 다운더라인 위너는 보는 이들의 감탄을 자아내지만, 상대의 집중 공략 대상이 되기도 한다. 이를 보완하기 위해 슬라이스를 적절히 섞어 사용하며, 최근에는 리턴 위치를 조정하는 등 전술적인 변화를 시도하고 있다. 네트 앞에서의 감각은 매우 뛰어나며, 서브 앤 발리 전술도 자주 구사한다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>193cm의 이상적인 신체 조건을 갖추고 있다. 긴 팔다리를 이용한 리치는 수비와 공격 모두에서 유리하게 작용한다. 체력 또한 우수하여 5세트 접전도 무리 없이 소화한다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">유연성이 좋아 어려운 자세에서도 샷을 만들어내는 능력</strong>이 탁월하다.</p>

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
                클레이 코트 승률 <strong className="text-green-700 dark:text-green-400 text-base">매우 높음</strong> · 몬테카를로 3회 우승 · ATP 파이널스 챔피언
              </p>
            </div>
            <p>승부욕이 강하고 코트 위에서 파이팅이 넘친다. 관중의 호응을 유도하며 분위기를 자신의 것으로 만드는 데 능하다. 다만 경기가 잘 풀리지 않을 때 감정적으로 흔들리는 모습이나, 코칭 논란 등으로 멘탈이 흔들리는 경우가 있었으나, 경험이 쌓이면서 점차 성숙해지고 있다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">스테파노스 치치파스는 어떻게 여기까지 왔을까?</h2>
            <p>치치파스는 테니스 코치인 아버지와 전 프로 선수였던 어머니 사이에서 태어났다. 어릴 때부터 테니스를 접했고, 주니어 시절 세계랭킹 1위에 오르며 두각을 나타냈다. 2016년 프로로 전향한 후 빠르게 랭킹을 끌어올리며 '넥스트 제너레이션'의 선두주자로 자리매김했다.</p>
            <p>2018년 넥스트 제너레이션 ATP 파이널스 우승, 2019년 ATP 파이널스 우승으로 큰 무대에서의 경쟁력을 입증했다. 그랜드 슬램에서는 2021년 프랑스 오픈과 2023년 호주 오픈 결승에 진출했으나 아쉽게 준우승에 머물렀다. 하지만 몬테카를로 마스터스 3회 우승 등 마스터스 무대에서는 꾸준히 강한 모습을 보여주고 있다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>치치파스의 커리어를 상징하는 경기는 2019년 ATP 파이널스 결승이다.</p>

            <h3>2019년 ATP 파이널스 우승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">왕중왕전 제패</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                결승에서 <strong>도미니크 팀</strong>을 상대로 풀세트 접전 끝에 승리하며, 21세의 나이로 시즌 왕중왕에 등극했다. 차세대 스타로서의 잠재력을 폭발시킨 경기였다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들이 치치파스에게 열광하는 이유는 그의 아름다운 테니스와 독특한 캐릭터 때문이다.</p>
            <p>원핸드 백핸드의 우아함과 공격적인 플레이는 보는 즐거움을 선사한다. 또한 긴 머리와 조각 같은 외모, 그리고 철학적인 사색을 즐기는 모습은 '그리스 철학자'라는 별명을 안겨주었다. 유튜브 채널을 운영하며 팬들과 소통하고, 여행 브이로그를 올리는 등 코트 밖에서의 다재다능함도 매력 포인트다.</p>

            <h2 id="recent-form">요즘 스테파노스 치치파스의 경기력 흐름은 어떤가?</h2>
            <p>최근 치치파스의 경기력은 다소 기복이 있지만, 클레이 코트에서는 여전히 최강자 중 한 명이다. 랭킹이 잠시 10위권 밖으로 밀려나기도 했으나, 다시 복귀하며 저력을 과시하고 있다.</p>

            <h3>최근 성적</h3>
            <p>2024년 몬테카를로 마스터스에서 우승하며 건재함을 알렸다. 다만 하드 코트와 잔디 코트에서의 성적을 끌어올리는 것이 과제로 남아있다. 서브와 포핸드의 위력을 유지하면서 백핸드 쪽의 약점을 보완한다면 다시 탑 3 진입도 가능할 것으로 보인다.</p>

            <h2 id="one-sentence-summary">스테파노스 치치파스, 한 문장으로 정리하면?</h2>
            <p>스테파노스 치치파스는 고전적인 우아함과 현대적인 파워를 겸비한 그리스 테니스의 아이콘이다.</p>
            <p>그의 테니스는 아름다움과 파괴력이 공존하며, 보는 이들을 매료시킨다. 원핸드 백핸드의 낭만을 지키며 현대 테니스의 파워 게임에 맞서는 그의 도전은 계속될 것이다. 그랜드 슬램 우승이라는 마지막 퍼즐을 맞추기 위해 끊임없이 진화하고 있는 선수다.</p>
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
