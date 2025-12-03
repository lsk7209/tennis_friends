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
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: '후베르트 후르카츠 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '후베르트 후르카츠의 서브&발리 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 탄력과 절제로 현대형 서브&발리를 설계하는 폴란드의 대표 선수.',
  keywords: ['후베르트 후르카츠', 'Hubert Hurkacz', '테니스', 'ATP', '플레이스타일', '폴란드 테니스', '서브&발리', '탄력과 절제'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/hubert-hurkacz',
  },
  openGraph: {
    title: '후베르트 후르카츠 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '후베르트 후르카츠의 서브&발리 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/hubert-hurkacz',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '후베르트 후르카츠 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '후베르트 후르카츠의 서브&발리 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '후베르트 후르카츠, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '후베르트 후르카츠는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 후베르트 후르카츠의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '후베르트 후르카츠, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '후베르트 후르카츠의 경기 스타일은 어떤가요?',
    a: '강력한 서브를 바탕으로 한 공격적인 플레이와 뛰어난 네트 플레이가 특징입니다. 큰 키에도 불구하고 움직임이 매우 부드럽습니다.',
  },
  {
    q: '후르카츠의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 6위이며, 현재도 세계랭킹 10위권 내외를 유지하고 있습니다. 2021년 마이애미 오픈 우승자입니다.',
  },
  {
    q: '후르카츠의 강점은 무엇인가요?',
    a: '투어 최고 수준의 서브와 안정적인 백핸드, 그리고 네트 앞에서의 감각적인 발리가 강점입니다.',
  },
  {
    q: '후르카츠의 약점은 무엇인가요?',
    a: '포핸드가 상대적으로 위력이 떨어질 때가 있으며, 클레이 코트에서의 성적이 하드나 잔디 코트에 비해 다소 아쉽습니다.',
  },
  {
    q: '후르카츠를 한 문장으로 설명하면?',
    a: '조용하지만 강력한, 폴란드 테니스의 역사를 새로 쓰고 있는 신사입니다.',
  },
];

export default function HubertHurkaczPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="후베르트 후르카츠"
        excerpt="탄력과 절제로 현대형 서브&발리를 설계하는 폴란드의 대표 선수"
        image="/images/players/hubert-hurkacz.png"
      ><PersonSchema
          name="Hubert Hurkacz"
          nameKo="후베르트 후르카치"
          description="폴란드 출신의 빅 서버. 강력한 서브와 네트 플레이로 주목받는 선수."
          image="/images/players/hubert-hurkacz.png"
          nationality="Poland"
          birthDate="1997-02-11"
          height="196"
          jobTitle="Professional Tennis Player"
          award={[
            'ATP Masters 1000 Champion', 'Wimbledon Semifinalist'
          ]}
          url="https://tennisfriends.co.kr/players/hubert-hurkacz"
        />
        <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Hubert Hurkacz"
            country="Poland"
            age={27}
            height="196cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2015}
            grandSlams={0}
            ranking={8}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              코트 위의 신사. <strong className="text-blue-600 dark:text-blue-400">강력한 서브</strong>와 부드러운 터치로 경기를 지배하는 폴란드의 자존심.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              후베르트 후르카츠, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  탄력과 절제로 현대형 서브&발리를 설계하는 폴란드의 대표 선수
                </p>
              </div>
            </blockquote>
            <p>후베르트 후르카츠는 폴란드 남자 테니스 역사상 최초로 마스터스 1000 시리즈 우승과 윔블던 4강 진출을 이뤄낸 선수다. 196cm의 장신에서 뿜어져 나오는 강력한 서브는 그의 최대 무기이며, '서브 봇'이라는 별명이 무색할 정도로 스트로크와 네트 플레이 능력 또한 뛰어나다.</p>
            <p>그는 로저 페더러의 마지막 윔블던 경기 상대이자 승리자로도 유명하다. 항상 침착하고 매너 있는 모습으로 동료 선수들과 팬들에게 사랑받으며, ATP 팬들이 뽑은 가장 좋아하는 선수상을 수상하기도 했다. 큰 경기에서 강한 면모를 보이며, 특히 타이브레이크 승률이 매우 높다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"올라운드 빅 서버 (All-Round Big Server)"</strong></p>
            <p>후베르트 후르카츠는 폴란드 출신의 장신 선수로, 강력한 서브와 유연한 움직임을 겸비한 올라운더다.</p>

            <PlayerAttributes
              attributes={[
                { name: '서브 (Serve)', score: 9.8, description: '투어에서 가장 위력적인 서브 중 하나. 에이스 생산 능력이 탁월하다.' },
                { name: '네트 플레이 (Net Play)', score: 9.2, description: '복식 경기 경험이 풍부하여 발리와 스매싱 처리가 매우 깔끔하다.' },
                { name: '움직임 (Movement)', score: 8.8, description: '큰 키에 비해 놀라울 정도로 민첩하고 유연하다. 수비 범위가 넓다.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적이고 견고한 양손 백핸드. 수비와 공격 모두 준수하다.' },
                { name: '포핸드 (Forehand)', score: 8.2, description: '강력하지만 때로는 소극적인 모습을 보이기도 한다.' },
              ]}
            />

            <p>플레이 스타일은 강력한 서브로 게임을 주도하고, 기회가 오면 과감하게 네트로 대시하여 포인트를 끝내는 방식이다. 특히 잔디 코트와 빠른 하드 코트에서 그의 장점이 극대화된다. 서브 앤 발리를 자주 구사하며, 긴 팔다리를 이용한 수비 능력도 뛰어나다.</p>
            <p>그의 가장 큰 특징은 '눈을 감고도 칠 수 있다'는 말을 들을 정도로 부드러운 폼이다. 힘들이지 않고 가볍게 치는 듯하지만 공에는 묵직한 힘이 실려 있다. 멘탈적으로도 매우 성숙하여 위기 상황에서도 좀처럼 흔들리지 않는다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>196cm의 큰 키는 서브와 리치 싸움에서 절대적인 우위를 점하게 해준다. 유연성이 매우 좋아 낮은 공 처리에도 능숙하며, 다이빙 발리 같은 묘기 샷도 종종 보여준다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">장신 선수의 한계를 뛰어넘는 민첩성</strong>이 그의 가장 큰 무기다.</p>

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
                마이애미 오픈 우승 · 윔블던 4강 · 타이브레이크 승률 <strong className="text-green-700 dark:text-green-400 text-base">최상위권</strong>
              </p>
            </div>
            <p>코트 위에서 항상 평정심을 유지한다. 실수 후에도 빠르게 털어내고 다음 포인트에 집중하는 능력이 탁월하다. 이러한 긍정적인 태도는 타이브레이크 같은 긴박한 상황에서 높은 승률로 이어진다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">후베르트 후르카츠는 어떻게 여기까지 왔을까?</h2>
            <p>후르카츠는 테니스 선수였던 어머니의 영향으로 5살 때 테니스를 시작했다. 주니어 시절에는 크게 두각을 나타내지 못했으나, 프로 전향 후 꾸준히 성장하여 2019년 윈스턴-세일럼 오픈에서 첫 투어 우승을 차지했다.</p>
            <p>2021년은 그의 커리어 하이 시즌이었다. 마이애미 오픈에서 우승하며 첫 마스터스 타이틀을 획득했고, 윔블던에서는 메드베데프와 페더러를 연파하며 4강에 올랐다. 이후 꾸준히 탑 10을 유지하며 폴란드 테니스의 영웅으로 떠올랐다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>후르카츠의 이름을 전 세계에 각인시킨 경기는 2021년 윔블던 8강전이다.</p>

            <h3>2021년 윔블던 8강</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">황제를 멈춰 세우다</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                '테니스 황제' <strong>로저 페더러</strong>를 상대로 3-0 완승을 거뒀다. 특히 3세트에서는 6-0 베이글 스코어를 기록하며 충격을 안겼다. 페더러의 윔블던 마지막 경기로 기록된 이 승부는 후르카츠의 냉철함과 실력을 증명했다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 후르카츠의 겸손하고 성실한 태도에 매료된다.</p>
            <p>승리 후에도 상대를 존중하고, 인터뷰에서는 항상 감사함을 표현한다. 또한 경기 중 보여주는 화려한 다이빙 발리와 트위너 같은 샷들은 보는 재미를 더한다. F1 레이싱을 좋아하는 등 의외의 취미 생활도 팬들에게 친근함을 준다.</p>

            <h2 id="recent-form">요즘 후베르트 후르카츠의 경기력 흐름은 어떤가?</h2>
            <p>2023년 상하이 마스터스 우승으로 다시 한번 마스터스 챔피언에 올랐고, 2024년에도 꾸준한 성적을 내고 있다.</p>

            <h3>최근 성적</h3>
            <p>호주 오픈 8강 진출로 시즌을 기분 좋게 시작했으며, 에스토릴 오픈 우승으로 클레이 코트에서의 경쟁력도 입증했다. 서브의 위력은 여전하며, 스트로크의 안정감도 더해져 그랜드 슬램 우승을 노릴 수 있는 전력으로 평가받는다.</p>

            <h2 id="one-sentence-summary">후베르트 후르카츠, 한 문장으로 정리하면?</h2>
            <p>후베르트 후르카츠는 탄력과 절제로 현대형 서브&발리를 설계하는 폴란드의 대표 선수다.</p>
            <p>그의 테니스는 거대한 스윙이 아니라 정교한 타이밍과 균형을 추구하며, 특히 강력한 서브와 부드러운 풋워크가 뛰어나다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 탄력과 절제가 세계 상위권을 유지하게 해준다. 조용함 속의 유머와 배려를 중시하는 그의 테니스는 결과를 넘어 설득으로 남으며, 폴란드 테니스의 상징으로 기억될 것이다.</p>
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
