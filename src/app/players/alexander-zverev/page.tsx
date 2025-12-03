import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerHexagonStats from '@/components/players/PlayerHexagonStats';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, RotateCcw, AlertTriangle, Crown } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: '알렉산더 즈베레프 — 세계랭킹 2위 | 플레이스타일·명장면·최근 경기력',
  description: '알렉산더 즈베레프의 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 독일 출신의 세계랭킹 2위 선수.',
  keywords: ['알렉산더 즈베레프', 'Alexander Zverev', '테니스', 'ATP', '플레이스타일', '독일 테니스', '올코트', '서브'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/alexander-zverev',
  },
  openGraph: {
    title: '알렉산더 즈베레프 — 세계랭킹 2위 | 플레이스타일·명장면·최근 경기력',
    description: '알렉산더 즈베레프의 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/alexander-zverev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '알렉산더 즈베레프 — 세계랭킹 2위 | 플레이스타일·명장면·최근 경기력',
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
  { id: 'why-again-notable', text: '알렉산더 즈베레프, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '알렉산더 즈베레프는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 알렉산더 즈베레프의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '알렉산더 즈베레프, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '알렉산더 즈베레프의 경기 스타일은 어떤가요?',
    a: '올코트 플레이어로, 강력한 서브와 안정적인 양손 백핸드가 특징입니다. 베이스라인 뒤에서 긴 팔다리를 이용한 수비 범위도 넓습니다.',
  },
  {
    q: '즈베레프의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 2위이며, 현재도 세계랭킹 2위를 유지하고 있습니다. 그랜드 슬램 우승은 아직 없지만, 올림픽 금메달과 ATP 파이널스 우승 경력이 있습니다.',
  },
  {
    q: '즈베레프의 강점은 무엇인가요?',
    a: '시속 220km를 넘나드는 강력한 퍼스트 서브와 투어 최고 수준의 양손 백핸드가 최대 강점입니다.',
  },
  {
    q: '즈베레프의 약점은 무엇인가요?',
    a: '과거에는 세컨드 서브와 포핸드에서의 불안정함이 지적되었으나, 최근에는 많이 개선되었습니다. 멘탈적인 기복도 줄어들고 있습니다.',
  },
  {
    q: '즈베레프를 한 문장으로 설명하면?',
    a: '압도적인 피지컬과 강력한 서브로 코트를 장악하는 독일의 테니스 거인입니다.',
  },
];

export default function AlexanderZverevPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="알렉산더 즈베레프"
        excerpt="장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 독일 출신의 세계랭킹 2위 선수"
        image="/images/players/alexander-zverev.png"
      ><PersonSchema
          name="Alexander Zverev"
          nameKo="알렉산더 즈베레프"
          description="독일 출신의 세계 정상급 테니스 선수. 강력한 서브와 포핸드로 주목받는 선수."
          image="/images/players/alexander-zverev.png"
          nationality="Germany"
          birthDate="1997-04-20"
          height="198"
          jobTitle="Professional Tennis Player"
          award={[
            'Olympic Gold Medalist (Tokyo 2020)', 'ATP Finals Champion (2018, 2021)', 'ATP Masters 1000 Champion'
          ]}
          url="https://tennisfriends.co.kr/players/alexander-zverev"
        />

      <BreadcrumbSchema
        items={[
          { name: '홈', item: 'https://tennisfriends.co.kr' },
          { name: '선수', item: 'https://tennisfriends.co.kr/players' },
          { name: '알렉산더 즈베레프', item: 'https://tennisfriends.co.kr/players/alexander-zverev' },
        ]}
      />
      <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Alexander Zverev"
            country="Germany"
            age={27}
            height="198cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2013}
            grandSlams={0}
            ranking={2}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              압도적인 피지컬과 정교한 기술의 조화. <strong className="text-yellow-600 dark:text-yellow-400">올림픽 금메달리스트</strong>이자 투어의 절대 강자.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              알렉산더 즈베레프, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 독일 출신의 세계랭킹 2위 선수
                </p>
              </div>
            </blockquote>
            <p>알렉산더 즈베레프는 독일 출신의 세계랭킹 2위 테니스 선수로, 198cm의 큰 키에서 뿜어져 나오는 강력한 서브와 투어 최고 수준의 양손 백핸드로 ATP 투어를 호령하고 있다. 도쿄 올림픽 금메달리스트이자 ATP 파이널스 2회 우승자로서, 그랜드 슬램 우승에 가장 근접한 선수 중 한 명으로 평가받는다.</p>
            <p>그는 2024년 프랑스 오픈 준우승을 차지하며 클레이 코트에서도 강력한 모습을 보여주었고, 하드 코트와 클레이 코트를 가리지 않는 올라운드 플레이어로서의 면모를 과시하고 있다. 큰 키에도 불구하고 뛰어난 코트 커버리지와 수비 능력을 갖추고 있어, '거인'의 파워와 '소인'의 민첩함을 동시에 지닌 선수로 불린다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"강력한 베이스라이너 (Aggressive Baseliner)"</strong></p>
            <p>알렉산더 즈베레프는 독일 출신의 세계랭킹 2위 선수로, 강력한 서브와 백핸드를 앞세운 공격적인 베이스라인 플레이가 특징이다.</p>

            <PlayerHexagonStats
              playerName="알렉산더 즈베레프"
              attributes={[
                { name: '서브 (Serve)', score: 9.8, description: '220km/h를 넘나드는 강력한 퍼스트 서브. 높은 타점에서 내리꽂는 각도가 위협적.' },
                { name: '백핸드 (Backhand)', score: 9.8, description: '투어 최고의 양손 백핸드 중 하나. 크로스와 다운더라인을 자유자재로 구사.' },
                { name: '수비/움직임', score: 9.0, description: '198cm의 장신임에도 불구하고 코트 커버리지가 매우 뛰어나다.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '과거의 약점이었으나, 최근에는 위너를 만들어내는 무기로 발전.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '중요한 순간에 더블 폴트가 나오는 약점이 있었으나, 최근에는 많이 안정됨.' },
              ]}
            />

            <p>플레이 스타일은 공격적인 베이스라이너다. 강력한 서브로 프리 포인트를 얻거나 유리한 고지를 점한 뒤, 묵직한 스트로크로 상대를 압박한다. 특히 양손 백핸드는 그의 가장 확실한 무기로, 수비 상황에서도 공격으로 전환하는 능력이 탁월하다. 포핸드는 탑스핀을 많이 걸어 안정성을 추구하지만, 기회가 오면 플랫하게 때려 위너를 만들어낸다.</p>
            <p>서브 능력은 투어 최상위권이다. 220km/h를 넘나드는 퍼스트 서브는 상대에게 공포의 대상이다. 다만 세컨드 서브에서의 불안정함이 간혹 노출되기도 하지만, 최근에는 이마저도 많이 개선된 모습을 보여준다. 네트 플레이 빈도는 높지 않지만, 필요할 때는 과감하게 전진하여 발리로 포인트를 마무리한다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>198cm의 장신이 주는 이점을 완벽하게 활용한다. 긴 팔다리를 이용한 리치와 넓은 보폭은 수비 범위를 극대화한다. 체력 또한 뛰어나 5세트 접전에서도 지치지 않는 모습을 보여준다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">큰 키에도 불구하고 낮은 자세를 유지하며 수비하는 능력</strong>은 타의 추종을 불허한다.</p>

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
                서브 에이스 <strong className="text-green-700 dark:text-green-400 text-base">투어 최상위</strong> · 타이브레이크 승률 <strong className="text-green-700 dark:text-green-400 text-base">상승세</strong> · 올림픽 금메달리스트
              </p>
            </div>
            <p>과거에는 멘탈이 약하다는 평가를 받기도 했으나, 도쿄 올림픽 금메달 획득 이후 크게 성장했다. 중요한 순간에 과감한 샷을 시도하는 배짱이 생겼으며, 위기 상황에서도 쉽게 무너지지 않는다. 특히 긴 랠리를 견뎌내는 인내심이 향상되어, 상대의 실수를 유도하는 플레이에도 능하다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">알렉산더 즈베레프는 어떻게 여기까지 왔을까?</h2>
            <p>즈베레프는 테니스 가족에서 태어났다. 아버지와 형 모두 테니스 선수 출신으로, 어릴 때부터 체계적인 훈련을 받았다. 주니어 시절부터 두각을 나타내며 '차세대 황제'로 주목받았고, 프로 데뷔 후 빠르게 랭킹을 끌어올렸다.</p>
            <p>2017년 로마 마스터스에서 조코비치를 꺾고 우승하며 세계 무대에 이름을 알렸고, 이후 꾸준히 탑 10을 유지하며 정상급 선수로 자리매김했다. 2022년 프랑스 오픈에서 심각한 발목 부상을 당했으나, 불굴의 의지로 재활에 성공하여 다시 세계랭킹 2위까지 복귀하는 인간 승리의 드라마를 썼다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>즈베레프의 커리어를 상징하는 경기는 2020 도쿄 올림픽 준결승과 결승이다.</p>

            <h3>2020 도쿄 올림픽 금메달</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">골든 슬램 저지</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                준결승에서 <strong>노박 조코비치</strong>를 꺾으며 그의 골든 슬램 도전을 저지했고, 결승에서 카렌 하차노프를 완파하며 독일 남자 테니스 사상 최초의 올림픽 단식 금메달을 획득했다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들이 즈베레프에게 열광하는 이유는 그의 시원시원한 플레이 스타일과 훈훈한 외모, 그리고 코트 밖에서의 솔직한 모습 때문이다.</p>
            <p>큰 키에서 뿜어져 나오는 파워풀한 샷은 보는 이들에게 통쾌함을 선사하며, 부상을 극복하고 다시 정상에 선 그의 스토리는 많은 이들에게 감동을 준다. 또한 팬 서비스가 좋고 유머 감각이 뛰어나 인터뷰에서도 매력을 발산한다.</p>

            <h2 id="recent-form">요즘 알렉산더 즈베레프의 경기력 흐름은 어떤가?</h2>
            <p>최근 즈베레프의 경기력은 부상 이전보다 더 강력해졌다는 평가를 받는다. 서브와 백핸드는 여전히 위력적이며, 포핸드와 멘탈이 한층 성숙해졌다.</p>

            <h3>최근 성적</h3>
            <p>2024년 프랑스 오픈 준우승, 로마 마스터스 우승 등 클레이 코트에서 특히 강한 모습을 보였으며, 하드 코트 시즌에서도 꾸준히 상위권 성적을 유지하고 있다. 세계랭킹 2위 복귀는 그의 부활을 알리는 신호탄이다.</p>

            <h2 id="one-sentence-summary">알렉산더 즈베레프, 한 문장으로 정리하면?</h2>
            <p>알렉산더 즈베레프는 압도적인 피지컬과 강력한 서브로 코트를 장악하는 독일의 테니스 거인이다.</p>
            <p>그의 테니스는 파워와 정교함을 동시에 갖추었으며, 부상을 극복한 불굴의 의지가 더해져 더욱 단단해졌다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 올라운드 플레이어로서의 능력이 세계 상위권을 유지하게 해준다. 올림픽 금메달리스트로서의 자부심과 끊임없는 노력은 그를 그랜드 슬램 챔피언으로 이끌 것이다.</p>
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
