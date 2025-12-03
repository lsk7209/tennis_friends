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
  title: '알렉스 드 미노 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '알렉스 드 미노의 스피드스터 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 투어에서 가장 빠른 발과 지치지 않는 체력으로 상대를 질식시키는 호주의 악마.',
  keywords: ['알렉스 드 미노', 'Alex de Minaur', '테니스', 'ATP', '플레이스타일', '호주 테니스', '스피드스터', '수비형'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/alex-de-minaur',
  },
  openGraph: {
    title: '알렉스 드 미노 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '알렉스 드 미노의 스피드스터 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/alex-de-minaur',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '알렉스 드 미노 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '알렉스 드 미노의 스피드스터 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '알렉스 드 미노, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '알렉스 드 미노는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 알렉스 드 미노의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '알렉스 드 미노, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '알렉스 드 미노의 경기 스타일은 어떤가요?',
    a: '투어에서 가장 빠른 발을 가진 선수 중 하나로, 끈질긴 수비와 빠른 역습이 특징입니다. 별명이 "Demon(악마)"일 정도로 상대를 지치게 만듭니다.',
  },
  {
    q: '드 미노의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 9위이며, 현재는 탑 10 진입을 목표로 경쟁하고 있습니다. 꾸준히 상위권을 유지하고 있습니다.',
  },
  {
    q: '드 미노의 강점은 무엇인가요?',
    a: '압도적인 스피드와 체력, 그리고 실수 없는 안정적인 스트로크가 강점입니다. 리턴 게임에서도 매우 강한 모습을 보입니다.',
  },
  {
    q: '드 미노의 약점은 무엇인가요?',
    a: '체격 조건(183cm, 69kg)의 한계로 인해 서브와 스트로크의 파워가 부족한 편입니다. 이를 빠른 템포와 정교함으로 극복하고 있습니다.',
  },
  {
    q: '드 미노를 한 문장으로 설명하면?',
    a: '코트 위를 지배하는 호주의 스피드스터입니다.',
  },
];

export default function AlexDeMinaurPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="알렉스 드 미노"
        excerpt="투어에서 가장 빠른 발과 지치지 않는 체력으로 상대를 질식시키는 호주의 악마"
        image="/images/players/alex-de-minaur.png"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Alex de Minaur"
            country="Australia"
            age={25}
            height="183cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2015}
            grandSlams={0}
            ranking={11}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              코트 위의 스피드스터. <strong className="text-orange-600 dark:text-orange-400">압도적인 기동력</strong>과 끈질긴 수비로 상대의 혼을 빼놓는 호주의 테니스 스타.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              알렉스 드 미노, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  투어에서 가장 빠른 발과 지치지 않는 체력으로 상대를 질식시키는 호주의 악마
                </p>
              </div>
            </blockquote>
            <p>알렉스 드 미노는 'Demon(악마)'이라는 별명처럼 상대를 지독하게 괴롭히는 플레이 스타일로 유명하다. 투어에서 가장 빠른 선수 중 한 명으로 꼽히며, 도저히 받을 수 없을 것 같은 공도 쫓아가서 받아넘기는 수비력은 타의 추종을 불허한다.</p>
            <p>레이튼 휴이트의 후계자로 불리며 호주 테니스의 자존심을 지키고 있다. 최근에는 수비뿐만 아니라 공격력까지 보강하며 탑 10에 진입, 명실상부한 월드 클래스 선수로 도약했다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"스피드 카운터펀처 (Speed Counter-Puncher)"</strong></p>
            <p>드 미노는 빠른 발을 이용해 상대의 공격을 무력화시키고, 상대의 힘을 역이용하는 카운터 펀처다.</p>

            <PlayerAttributes
              attributes={[
                { name: '스피드 (Speed)', score: 10, description: '투어 최고 수준. 코트 끝에서 끝까지 순식간에 이동한다. 그의 수비 범위는 상상을 초월한다.' },
                { name: '체력 (Stamina)', score: 9.5, description: '5세트 접전에도 지치지 않는다. 랠리가 길어질수록 그에게 유리하다.' },
                { name: '리턴 (Return)', score: 9.0, description: '반응 속도가 매우 빠르다. 강서브도 안정적으로 리턴하며 브레이크 기회를 만든다.' },
                { name: '멘탈 (Mental)', score: 9.0, description: '절대 포기하지 않는 투지가 돋보인다. "Never say die" 정신의 표본이다.' },
                { name: '파워 (Power)', score: 7.5, description: '체격 조건상 파워는 다소 부족하지만, 플랫한 구질과 빠른 타이밍으로 이를 보완한다.' },
              ]}
            />

            <p>플레이 스타일은 매우 끈질기다. 상대가 위너라고 생각한 공을 받아넘겨 실수를 유도한다. 최근에는 단순히 받아넘기는 것을 넘어, 라이징 볼을 치거나 네트로 대시하는 등 공격적인 옵션을 추가했다.</p>
            <p>백핸드는 매우 안정적이며, 포핸드는 플랫하게 깔려 들어와 상대의 타이밍을 뺏는다. 서브는 빠르지 않지만 코스 공략이 좋고, 첫 서브 성공률이 높다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>183cm, 69kg으로 테니스 선수치고는 왜소한 편이다. 하지만 이를 <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">폭발적인 순발력</strong>과 민첩성으로 완벽하게 커버한다. 가벼운 몸놀림 덕분에 부상 빈도도 낮고 회복력도 빠르다.</p>

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
                ATP 투어 8승 · 멕시코 오픈 2연패 · 탑 10 진입(2024) · <strong className="text-green-700 dark:text-green-400 text-base">데이비스 컵 준우승</strong>
              </p>
            </div>
            <p>항상 파이팅 넘치는 모습으로 경기에 임한다. 멘토인 레이튼 휴이트의 영향을 받아 코트 위에서 절대 물러서지 않는 승부 근성을 보여준다. 국가대항전인 데이비스 컵에서 특히 강한 면모를 보인다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">알렉스 드 미노는 어떻게 여기까지 왔을까?</h2>
            <p>호주인 아버지와 스페인 어머니 사이에서 태어난 드 미노는 스페인과 호주를 오가며 테니스를 배웠다. 이 덕분에 클레이 코트의 끈기와 하드 코트의 속도를 모두 갖추게 되었다.</p>
            <p>2019년 시드니 인터내셔널에서 첫 투어 우승을 차지하며 두각을 나타냈고, 이후 꾸준히 랭킹을 끌어올렸다. 2024년에는 유나이티드 컵에서 노박 조코비치를 꺾는 파란을 일으키며 생애 첫 탑 10 진입에 성공했다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>드 미노의 성장을 증명한 경기는 2024년 유나이티드 컵 8강전이다.</p>

            <h3>2024년 유나이티드 컵 8강</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">세계 최강을 꺾다</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                세계 랭킹 1위 <strong>노박 조코비치</strong>를 상대로 2-0 완승을 거뒀다. 조코비치의 철벽 수비를 더 빠른 발과 정교한 공격으로 뚫어내며, 자신이 더 이상 유망주가 아닌 탑 플레이어임을 입증했다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 드 미노의 성실함과 투지에 박수를 보낸다.</p>
            <p>화려한 기술은 없지만, 매 포인트 최선을 다해 뛰는 모습이 감동을 준다. 또한 여자 친구인 케이티 볼터(영국 테니스 선수)와의 알콩달콩한 모습도 팬들에게 즐거움을 주는 요소다.</p>

            <h2 id="recent-form">요즘 알렉스 드 미노의 경기력 흐름은 어떤가?</h2>
            <p>2024년 들어 커리어 하이를 경신하며 최고의 시즌을 보내고 있다. 멕시코 오픈 2연패를 달성하는 등 하드 코트에서 특히 강한 모습을 보여주고 있다.</p>

            <h3>최근 성적</h3>
            <p>서브와 포핸드의 파워가 눈에 띄게 좋아졌다. 이전에는 수비에 치중했다면, 이제는 먼저 공격을 주도하며 경기를 풀어간다. 그랜드 슬램에서도 8강 이상의 성적을 기대해볼 만하다.</p>

            <h2 id="one-sentence-summary">알렉스 드 미노, 한 문장으로 정리하면?</h2>
            <p>알렉스 드 미노는 투어에서 가장 빠른 발과 지치지 않는 체력으로 상대를 질식시키는 호주의 악마(Demon)다.</p>
            <p>그의 테니스는 땀과 노력의 결정체다. 신체적 열세를 압도적인 활동량과 정신력으로 극복해낸 그는, 전 세계 테니스 꿈나무들에게 "포기하지 않으면 할 수 있다"는 희망의 메시지를 전하고 있다.</p>
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
