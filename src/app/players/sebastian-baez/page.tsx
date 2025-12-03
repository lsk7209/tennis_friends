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
  title: '세바스티안 바에즈 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '세바스티안 바에즈의 클레이 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 작은 거인이 보여주는 끈기와 열정의 아르헨티나 테니스.',
  keywords: ['세바스티안 바에즈', 'Sebastian Baez', '테니스', 'ATP', '플레이스타일', '아르헨티나 테니스', '클레이', '베이스라인'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/sebastian-baez',
  },
  openGraph: {
    title: '세바스티안 바에즈 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '세바스티안 바에즈의 클레이 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/sebastian-baez',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '세바스티안 바에즈 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '세바스티안 바에즈의 클레이 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '세바스티안 바에즈, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '세바스티안 바에즈는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 세바스티안 바에즈의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '세바스티안 바에즈, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '세바스티안 바에즈의 경기 스타일은 어떤가요?',
    a: '빠른 발과 강력한 포핸드를 활용한 베이스라이너입니다. 작은 키를 극복하기 위해 한 템포 빠른 공격과 끈질긴 수비를 구사합니다.',
  },
  {
    q: '바에즈의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 18위이며, 현재는 20위권 초반을 유지하고 있습니다. 2024년 리우 오픈 우승으로 커리어 하이를 기록했습니다.',
  },
  {
    q: '바에즈의 강점은 무엇인가요?',
    a: '지치지 않는 체력과 빠른 코트 커버 능력, 그리고 클레이 코트에서의 뛰어난 경기 운영 능력이 강점입니다.',
  },
  {
    q: '바에즈의 약점은 무엇인가요?',
    a: '신체 조건(170cm)의 한계로 인해 서브 파워가 부족하며, 빠른 하드 코트나 잔디 코트에서는 위력이 반감되는 경향이 있습니다.',
  },
  {
    q: '바에즈를 한 문장으로 설명하면?',
    a: '아르헨티나 테니스의 투지를 이어받은 작은 거인입니다.',
  },
];

export default function SebastianBaezPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="세바스티안 바에즈"
        excerpt="작은 거인이 보여주는 끈기와 열정의 아르헨티나 테니스"
        image="/images/players/sebastian-baez.png"
      ><PersonSchema
          name="Sebastian Baez"
          nameKo="세바스티안 바에즈"
          description="아르헨티나 출신의 클레이 코트 스페셜리스트. 작은 체구지만 뛰어난 발놀림과 전술로 주목받는 선수."
          image="/images/players/sebastian-baez.png"
          nationality="Argentina"
          birthDate="2000-12-28"
          height="170"
          jobTitle="Professional Tennis Player"
          award={[
            'ATP 250 Champion (multiple titles)'
          ]}
          url="https://tennisfriends.co.kr/players/sebastian-baez"
        />

      <BreadcrumbSchema
        items={[
          { name: '홈', item: 'https://tennisfriends.co.kr' },
          { name: '선수', item: 'https://tennisfriends.co.kr/players' },
          { name: '세바스티안 바에즈', item: 'https://tennisfriends.co.kr/players/sebastian-baez' },
        ]}
      />
      <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Sebastian Baez"
            country="Argentina"
            age={23}
            height="170cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2018}
            grandSlams={0}
            ranking={19}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              코트 위의 작은 거인. <strong className="text-blue-600 dark:text-blue-400">지치지 않는 체력</strong>과 불굴의 투지로 신체적 한계를 극복하는 아르헨티나의 전사.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              세바스티안 바에즈, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  작은 거인이 보여주는 끈기와 열정의 아르헨티나 테니스
                </p>
              </div>
            </blockquote>
            <p>세바스티안 바에즈는 170cm라는 테니스 선수로서는 매우 작은 키를 가졌지만, 이를 뛰어난 스피드와 전술로 극복하며 세계 상위권에 이름을 올렸다. 디에고 슈와르츠만 이후 아르헨티나 테니스를 이끌어갈 차세대 주자로 꼽힌다.</p>
            <p>그의 경기는 '투지' 그 자체다. 상대보다 한 발 더 뛰고, 어떤 공이든 끝까지 쫓아가 받아넘기는 모습은 보는 이들에게 감동을 준다. 특히 클레이 코트에서 보여주는 끈질긴 수비와 날카로운 역습은 그를 '클레이 스페셜리스트'로 불리게 만들었다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"끈질긴 베이스라이너 (Gritty Baseliner)"</strong></p>
            <p>바에즈는 빠른 발을 이용한 수비와 강력한 포핸드 역습을 주무기로 하는 전형적인 클레이 코트형 플레이어다.</p>

            <PlayerHexagonStats
              playerName="세바스티안 바에즈"
              attributes={[
                { name: '스피드 (Speed)', score: 9.5, description: '코트 커버 능력이 탁월하다. 빠른 발로 수비 범위를 넓히고, 역습 기회를 만든다.' },
                { name: '포핸드 (Forehand)', score: 9.0, description: '작은 체구에서 나온다고 믿기 힘든 파워를 가졌다. 특히 인사이드-아웃 포핸드가 위력적이다.' },
                { name: '체력 (Stamina)', score: 9.5, description: '장기전에도 강하다. 랠리가 길어질수록 집중력이 높아지는 경향이 있다.' },
                { name: '멘탈 (Mental)', score: 9.0, description: '포기를 모른다. 불리한 상황에서도 끝까지 물고 늘어지는 근성이 있다.' },
                { name: '서브 (Serve)', score: 7.5, description: '신체 조건상 파워는 부족하지만, 킥 서브 등을 활용해 코스를 공략한다.' },
              ]}
            />

            <p>플레이 스타일은 디에고 슈와르츠만과 유사하다. 베이스라인 뒤에서 끈질기게 버티다가 상대의 짧은 공을 놓치지 않고 공격으로 전환한다. 포핸드에 많은 회전을 걸어 상대가 공을 처리하기 어렵게 만들고, 백핸드는 안정적으로 연결하는 데 중점을 둔다.</p>
            <p>네트 플레이 빈도는 높지 않지만, 드롭샷을 적절히 섞어 상대의 타이밍을 뺏는다. 리턴 게임에 강점이 있어, 상대의 서브 게임을 브레이크하는 능력이 뛰어나다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>작은 키를 보완하기 위해 하체 근력을 집중적으로 단련했다. 덕분에 폭발적인 스텝과 빠른 방향 전환이 가능하다. 무게 중심이 낮아 안정적인 자세에서 스트로크를 구사할 수 있다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">지치지 않는 엔진</strong>은 그의 가장 큰 무기다.</p>

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
                ATP 투어 6승(클레이 5승) · 리우 오픈 우승(ATP 500) · 브레이크 성공률 <strong className="text-green-700 dark:text-green-400 text-base">최상위권</strong>
              </p>
            </div>
            <p>항상 "Vamos!"(가자!)를 외치며 자신을 독려한다. 어떤 상대를 만나도 주눅 들지 않고 자신의 플레이를 펼치는 배짱이 있다. 후안 마르틴 델 포트로 등 아르헨티나 선배들의 조언을 받으며 멘탈적으로 더욱 성숙해지고 있다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">세바스티안 바에즈는 어떻게 여기까지 왔을까?</h2>
            <p>바에즈는 2살 때 처음 라켓을 잡았고, 주니어 시절 세계 랭킹 1위에 오르며 일찌감치 재능을 인정받았다. 2018년 유스 올림픽 복식 금메달을 따기도 했다.</p>
            <p>프로 데뷔 후 챌린저 투어에서 6승을 거두며 빠르게 랭킹을 올렸고, 2022년 에스토릴 오픈에서 첫 투어 우승을 차지했다. 2023년에는 3승을 추가하며 클레이 코트의 강자로 자리매김했고, 2024년 리우 오픈 우승으로 ATP 500 타이틀까지 거머쥐었다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>바에즈의 투지를 보여준 경기는 2024년 리우 오픈 결승이다.</p>

            <h3>2024년 리우 오픈 결승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">생애 첫 500 시리즈 우승</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                자국 동료인 <strong>마리아노 나보네</strong>를 상대로 압도적인 경기력을 보여주며 2-0 완승을 거뒀다. 이 우승으로 그는 남미 클레이 스윙의 최강자임을 입증했다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 바에즈의 '언더독' 스토리에 열광한다.</p>
            <p>신체적 불리함을 극복하고 거구의 선수들을 쓰러뜨리는 모습에서 카타르시스를 느낀다. 또한 코트 위에서의 열정적인 모습과 달리, 밖에서는 수줍음 많고 겸손한 성격이 반전 매력으로 다가온다.</p>

            <h2 id="recent-form">요즘 세바스티안 바에즈의 경기력 흐름은 어떤가?</h2>
            <p>2024년 초반 남미 클레이 시즌에서 최고의 활약을 펼쳤다. 리우 오픈과 산티아고 오픈을 연달아 제패하며 2주 연속 우승을 차지했다.</p>

            <h3>최근 성적</h3>
            <p>하드 코트에서도 점차 적응력을 높여가고 있다. 인디언 웰스와 마이애미 오픈에서도 3라운드 이상 진출하며 가능성을 보여줬다. 그랜드 슬램에서의 성적만 뒷받침된다면 탑 10 진입도 꿈은 아니다.</p>

            <h2 id="one-sentence-summary">세바스티안 바에즈, 한 문장으로 정리하면?</h2>
            <p>세바스티안 바에즈는 작은 키에도 불구하고 강력한 그라운드 스트로크와 인내로 클레이 코트를 지배하는 아르헨티나 출신의 강자다.</p>
            <p>그의 테니스는 땀과 노력으로 만들어진 결과물이며, 특히 포기하지 않는 끈기가 돋보인다. 불리한 신체 조건을 극복하고 세계 정상급 선수들과 경쟁하는 그의 모습은 많은 이들에게 희망과 영감을 준다. 아르헨티나 테니스의 투혼을 상징하는 선수로 기억될 것이다.</p>
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
