import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerHexagonStats from '@/components/players/PlayerHexagonStats';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, Flame, Crown } from 'lucide-react';
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: '안드레이 루블레프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '안드레이 루블레프의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 폭발적인 포핸드와 지치지 않는 열정으로 코트를 불태우는 러시아 출신의 세계랭킹 상위권 선수.',
  keywords: ['안드레이 루블레프', 'Andrey Rublev', '테니스', 'ATP', '플레이스타일', '러시아 테니스', '공격형', '포핸드'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/andrey-rublev',
  },
  openGraph: {
    title: '안드레이 루블레프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '안드레이 루블레프의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/andrey-rublev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '안드레이 루블레프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '안드레이 루블레프의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '안드레이 루블레프, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '안드레이 루블레프는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 안드레이 루블레프의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '안드레이 루블레프, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '안드레이 루블레프의 경기 스타일은 어떤가요?',
    a: '극도로 공격적인 베이스라이너입니다. 강력한 포핸드로 상대를 끊임없이 몰아붙이며, 빠른 템포의 랠리를 선호합니다.',
  },
  {
    q: '루블레프의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 5위이며, 현재도 세계랭킹 10위권을 꾸준히 유지하고 있습니다. 마스터스 1000 대회 우승 경력이 있습니다.',
  },
  {
    q: '루블레프의 강점은 무엇인가요?',
    a: '투어에서 가장 강력한 포핸드 중 하나를 보유하고 있습니다. 또한 지치지 않는 체력과 매 포인트 전력을 다하는 열정이 강점입니다.',
  },
  {
    q: '루블레프의 약점은 무엇인가요?',
    a: '감정 조절이 약점으로 지적됩니다. 경기가 풀리지 않을 때 자신에게 화를 내며 멘탈이 흔들리는 경우가 있습니다.',
  },
  {
    q: '루블레프를 한 문장으로 설명하면?',
    a: '폭발적인 포핸드와 뜨거운 열정으로 코트를 지배하는 테니스계의 에너자이저입니다.',
  },
];

export default function AndreyRublevPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="안드레이 루블레프"
        excerpt="폭발적인 포핸드와 지치지 않는 열정으로 코트를 불태우는 러시아 출신의 세계랭킹 상위권 선수"
        image="/images/players/andrey-rublev.png"
      ><PersonSchema
          name="Andrey Rublev"
          nameKo="안드레이 루블레프"
          description="러시아 출신의 파워 테니스 선수. 강력한 포핸드와 공격적인 플레이로 주목받는 선수."
          image="/images/players/andrey-rublev.png"
          nationality="Russia"
          birthDate="1997-10-20"
          height="188"
          jobTitle="Professional Tennis Player"
          award={[
            'ATP Masters 1000 Champion', 'ATP 500 Champion (multiple titles)'
          ]}
          url="https://tennisfriends.co.kr/players/andrey-rublev"
        />
        <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Andrey Rublev"
            country="Russia"
            age={27}
            height="188cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2014}
            grandSlams={0}
            ranking={6}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              코트 위의 록스타. <strong className="text-red-600 dark:text-red-400">폭발적인 포핸드</strong>와 순수한 열정으로 팬들의 마음을 사로잡는 선수.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              안드레이 루블레프, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  폭발적인 포핸드와 지치지 않는 열정으로 코트를 불태우는 러시아 출신의 세계랭킹 상위권 선수
                </p>
              </div>
            </blockquote>
            <p>안드레이 루블레프는 러시아 출신의 세계랭킹 상위권 테니스 선수로, 투어에서 가장 강력한 포핸드를 가진 선수 중 한 명으로 꼽힌다. 'Bweh'라는 기합 소리와 함께 뿜어져 나오는 그의 샷은 엄청난 파워와 스피드를 자랑한다. 마스터스 1000 대회 우승자로서 꾸준히 탑 10을 유지하며 성실함의 아이콘으로 불린다.</p>
            <p>그는 2023년 몬테카를로 마스터스에서 우승하며 첫 마스터스 타이틀을 획득했고, 2024년 마드리드 마스터스에서도 우승하며 클레이 코트에서의 강점을 증명했다. 코트 위에서는 불같이 화를 내기도 하지만, 코트 밖에서는 누구보다 순수하고 착한 성격으로 팬들의 사랑을 받고 있다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
            <p>안드레이 루블레프는 러시아 출신의 세계랭킹 상위권 선수로, 강력한 포핸드를 앞세운 공격적인 플레이가 특징이다.</p>

            <PlayerHexagonStats
              playerName="안드레이 루블레프"
              attributes={[
                { name: '포핸드 (Forehand)', score: 10, description: '투어 최강의 포핸드. 어떤 위치에서도 위너를 만들어내는 파괴력.' },
                { name: '열정/에너지', score: 10, description: '매 포인트 전력을 다하는 에너지. 지치지 않는 체력의 소유자.' },
                { name: '서브 (Serve)', score: 8.5, description: '빠르고 날카로운 서브. 포핸드 공격의 시발점 역할을 한다.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적이고 견고한 백핸드. 포핸드만큼은 아니지만 충분히 위협적.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '감정 기복이 심한 편. 경기가 안 풀릴 때 자책하는 모습이 자주 보임.' },
              ]}
            />

            <p>플레이 스타일은 극도로 공격적인 베이스라이너다. 강력한 포핸드로 상대를 좌우로 흔들고, 짧은 공이 오면 가차 없이 위너를 꽂아 넣는다. 백핸드 역시 견고하여 수비와 공격의 균형을 잘 맞춘다. 네트 플레이보다는 베이스라인에서의 스트로크 대결을 선호하며, 빠른 템포로 상대를 압박하여 실수를 유도한다.</p>
            <p>서브 능력도 준수하다. 200km/h를 넘는 퍼스트 서브는 포핸드 공격을 위한 좋은 발판이 된다. 다만 세컨드 서브가 상대적으로 약하다는 평가를 받기도 했으나, 킥 서브 등을 섞으며 구질을 다양화하고 있다. 리턴 게임에서도 공격적인 성향을 보이며, 상대의 서브를 강하게 받아쳐 주도권을 가져오려 노력한다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>마른 체형이지만 엄청난 파워를 낸다. 빠른 발을 이용한 코트 커버리지도 뛰어나며, 무엇보다 지치지 않는 체력이 강점이다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">연속된 대회 출전에도 꾸준한 성적을 내는 '철인'</strong> 같은 면모를 보여준다.</p>

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
                포핸드 위너 <strong className="text-green-700 dark:text-green-400 text-base">투어 최상위</strong> · 마스터스 1000 우승 2회 · 꾸준한 탑 10 유지
              </p>
            </div>
            <p>승부욕이 매우 강하다. 이는 양날의 검이 되기도 하는데, 경기가 잘 풀릴 때는 엄청난 시너지를 내지만, 그렇지 않을 때는 스스로 무너지는 원인이 되기도 한다. 최근에는 멘탈 코칭 등을 통해 감정을 조절하려는 노력을 보여주고 있으며, 마스터스 우승 등을 통해 자신감을 얻고 있다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">안드레이 루블레프는 어떻게 여기까지 왔을까?</h2>
            <p>루블레프는 테니스 코치인 어머니 밑에서 자라며 자연스럽게 라켓을 잡았다. 주니어 시절 세계랭킹 1위에 오르며 재능을 인정받았고, 프로 데뷔 후에도 꾸준히 성장했다. 부상으로 인한 슬럼프도 있었지만, 특유의 성실함으로 극복해냈다.</p>
            <p>2020년 5개의 투어 타이틀을 획득하며 전성기를 맞이했고, 이후 꾸준히 탑 10을 지키고 있다. 그랜드 슬램 8강 징크스가 있었지만, 끊임없이 도전하며 자신의 한계를 넘어서려 노력하고 있다. 2023년 몬테카를로 우승은 그의 커리어에 중요한 전환점이 되었다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>루블레프의 커리어를 상징하는 경기는 2023년 몬테카를로 마스터스 결승이다.</p>

            <h3>2023년 몬테카를로 마스터스 우승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">첫 마스터스 1000 타이틀</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                결승에서 <strong>홀게르 루네</strong>를 상대로 3세트 접전 끝에 역전승을 거두며 생애 첫 마스터스 1000 시리즈 우승을 차지했다. 멘탈적으로 흔들릴 수 있는 상황을 극복하고 얻어낸 값진 승리였다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들이 루블레프에게 열광하는 이유는 그의 순수한 열정과 반전 매력 때문이다.</p>
            <p>코트 위에서는 누구보다 치열하게 싸우지만, 경기 후에는 해맑은 미소와 겸손한 인터뷰로 팬들을 무장해제시킨다. 또한 팬 서비스가 좋기로 유명하며, 동료 선수들과의 우정도 깊어 '투어의 사랑둥이'로 불린다. 그의 솔직한 감정 표현은 팬들에게 인간적인 공감을 불러일으킨다.</p>

            <h2 id="recent-form">요즘 안드레이 루블레프의 경기력 흐름은 어떤가?</h2>
            <p>최근 루블레프의 경기력은 기복이 있지만, 여전히 강력하다. 마스터스 우승을 통해 자신감을 얻었으며, 그랜드 슬램에서도 더 높은 곳을 바라보고 있다.</p>

            <h3>최근 성적</h3>
            <p>2024년 마드리드 마스터스 우승으로 다시 한번 큰 대회에서의 경쟁력을 입증했다. 다만 초기 라운드 탈락 빈도를 줄이고 꾸준함을 유지하는 것이 과제로 남아있다.</p>

            <h2 id="one-sentence-summary">안드레이 루블레프, 한 문장으로 정리하면?</h2>
            <p>안드레이 루블레프는 폭발적인 포핸드와 뜨거운 열정으로 코트를 지배하는 테니스계의 에너자이저다.</p>
            <p>그의 테니스는 파워와 스피드로 상대를 압도하며, 매 순간 최선을 다하는 태도는 보는 이들에게 감동을 준다. 감정 조절이라는 숙제가 남아있지만, 그의 순수한 열정과 끊임없는 노력은 그를 더 높은 곳으로 이끌 것이다. 팬들의 사랑을 받는 스타이자, 언제나 우승 후보로 거론되는 강력한 선수다.</p>
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
