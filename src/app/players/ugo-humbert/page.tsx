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
  title: '우고 움베르 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '우고 움베르의 공격적인 좌완 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 빠른 템포와 강력한 샷으로 상대를 압박하는 프랑스의 에이스.',
  keywords: ['우고 움베르', 'Ugo Humbert', '테니스', 'ATP', '플레이스타일', '프랑스 테니스', '좌완', '공격형'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/ugo-humbert',
  },
  openGraph: {
    title: '우고 움베르 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '우고 움베르의 공격적인 좌완 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/ugo-humbert',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '우고 움베르 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '우고 움베르의 공격적인 좌완 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '우고 움베르, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '우고 움베르는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 우고 움베르의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '우고 움베르, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '우고 움베르의 경기 스타일은 어떤가요?',
    a: '왼손잡이 특유의 각도와 빠른 템포의 공격이 특징입니다. 베이스라인 가까이 붙어서 치는 라이징 샷을 즐겨 구사합니다.',
  },
  {
    q: '움베르의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 13위이며, 현재는 10위권 진입을 목표로 하고 있습니다. 2024년 두바이 챔피언십 우승으로 상승세를 탔습니다.',
  },
  {
    q: '움베르의 강점은 무엇인가요?',
    a: '강력한 서브와 포핸드, 그리고 상대의 시간을 뺏는 빠른 박자의 스트로크가 강점입니다. 결승전 승률이 매우 높습니다.',
  },
  {
    q: '움베르의 약점은 무엇인가요?',
    a: '클레이 코트에서의 성적이 하드 코트에 비해 저조하며, 랠리가 길어질수록 범실이 늘어나는 경향이 있습니다.',
  },
  {
    q: '움베르를 한 문장으로 설명하면?',
    a: '프랑스 테니스의 자존심이자, 결승전의 사나이입니다.',
  },
];

export default function UgoHumbertPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="우고 움베르"
        excerpt="빠른 템포와 강력한 샷으로 상대를 압박하는 프랑스의 에이스"
        image="/images/players/ugo-humbert.png"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Ugo Humbert"
            country="France"
            age={25}
            height="188cm"
            plays="Left-handed (Two-handed backhand)"
            turnedPro={2016}
            grandSlams={0}
            ranking={15}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              프랑스의 왼손 천재. <strong className="text-blue-600 dark:text-blue-400">빠른 템포의 공격</strong>과 결승전 불패 신화로 증명된 승부사 기질을 가진 선수.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              우고 움베르, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  빠른 템포와 강력한 샷으로 상대를 압박하는 프랑스의 에이스
                </p>
              </div>
            </blockquote>
            <p>우고 움베르는 프랑스 테니스의 계보를 잇는 차세대 에이스다. 특히 '결승전의 사나이'로 불리는데, ATP 투어 결승에 6번 진출하여 6번 모두 우승하는 놀라운 승부사 기질을 보여주었다(2024년 두바이 우승 기준).</p>
            <p>그의 테니스는 속도감이 넘친다. 베이스라인에서 물러나지 않고 공이 튀어 오르자마자 때리는 라이징 샷으로 상대의 시간을 뺏는다. 왼손잡이 특유의 서브 각도와 과감한 네트 플레이는 그를 투어에서 가장 상대하기 까다로운 선수 중 한 명으로 만들었다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"공격적인 템포 조절자 (Aggressive Tempo Controller)"</strong></p>
            <p>움베르는 빠른 발과 뛰어난 반사 신경을 바탕으로 경기 템포를 빠르게 가져가는 공격형 플레이어다.</p>

            <PlayerAttributes
              attributes={[
                { name: '포핸드 (Forehand)', score: 9.0, description: '짧은 테이크백에서 나오는 빠르고 간결한 포핸드. 라이징 볼 처리가 일품이다.' },
                { name: '서브 (Serve)', score: 8.8, description: '왼손잡이의 이점을 살린 슬라이스 서브가 위협적이다. 중요할 때 에이스를 꽂아 넣는다.' },
                { name: '템포 (Tempo)', score: 9.5, description: '상대가 준비할 시간을 주지 않는 빠른 박자의 스트로크가 특징이다.' },
                { name: '네트 플레이 (Net Play)', score: 8.5, description: '복식 경험이 풍부하여 발리 감각이 좋다. 기습적인 네트 대시를 즐긴다.' },
                { name: '멘탈 (Mental)', score: 9.0, description: '결승전 승률 100%가 말해주듯, 큰 경기와 승부처에서 강한 집중력을 발휘한다.' },
              ]}
            />

            <p>플레이 스타일은 매우 공격적이다. 수비보다는 공격을 통해 포인트를 따내는 것을 선호한다. 상대의 공을 이용하는 능력이 좋아 강타자들을 상대로도 밀리지 않는다. 특히 실내 하드 코트나 잔디 코트처럼 공이 빠른 코트에서 강점을 보인다.</p>
            <p>백핸드는 양손을 사용하며, 플랫하게 깔리는 구질이 특징이다. 다운더라인 공격 성공률이 높다. 다만 클레이 코트처럼 공이 느리고 바운드가 높은 코트에서는 자신의 장점인 빠른 템포를 살리기 어려워 고전하는 경향이 있다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>188cm의 키에 날렵한 체형을 가지고 있다. 근육질의 파워보다는 유연성과 순발력이 돋보인다. 피아노 연주가 취미일 정도로 손감각이 섬세하며, 이는 정교한 발리와 터치 샷으로 이어진다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">빠른 반응 속도</strong>는 그의 가장 큰 무기다.</p>

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
                투어 결승전 승률 <strong className="text-green-700 dark:text-green-400 text-base">100% (6승 0패)</strong> · ATP 500 우승 2회
              </p>
            </div>
            <p>평소에는 차분하고 조용하지만, 코트 위에서는 뜨거운 열정을 보여준다. 위기 상황에서도 흔들리지 않고 자신의 플레이를 고수하는 뚝심이 있다. '강한 자에게 강한' 면모를 보여주며, 탑 랭커들을 상대로도 주눅 들지 않는다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">우고 움베르는 어떻게 여기까지 왔을까?</h2>
            <p>움베르는 5살 때 테니스를 시작했고, 12살 때 프랑스 테니스 협회의 훈련 센터에 들어갔다. 주니어 시절에는 큰 두각을 나타내지 못했으나, 프로 데뷔 후 챌린저 투어에서 꾸준히 성적을 내며 랭킹을 끌어올렸다.</p>
            <p>2020년 오클랜드 오픈에서 첫 투어 우승을 차지하며 가능성을 보였고, 2021년 할레 오픈(ATP 500) 우승으로 세계 무대에 이름을 알렸다. 이후 부상 등으로 잠시 주춤했으나, 2023년 말부터 다시 상승세를 타며 커리어 하이를 경신하고 있다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>움베르의 진가를 보여준 경기는 2024년 두바이 챔피언십 결승이다.</p>

            <h3>2024년 두바이 챔피언십 결승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">결승전의 제왕</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                카자흐스탄의 <strong>알렉산더 부블릭</strong>을 상대로 2-0 완승을 거뒀다. 준결승에서 다닐 메드베데프를 꺾은 기세를 몰아 결승에서도 완벽한 경기력을 보여주며 생애 두 번째 ATP 500 타이틀을 획득했다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 움베르의 공격적인 플레이와 예술적인 감성에 매료된다.</p>
            <p>피아노를 치는 테니스 선수라는 독특한 이력은 그에게 '코트 위의 아티스트'라는 이미지를 부여했다. 또한 승리 후 관중을 향해 지휘하는 듯한 세레머니는 그의 시그니처가 되었다.</p>

            <h2 id="recent-form">요즘 우고 움베르의 경기력 흐름은 어떤가?</h2>
            <p>2024년 마르세유 오픈과 두바이 챔피언십 우승으로 최고의 시즌 초반을 보냈다. 몬테카를로 마스터스 8강 등 클레이 코트에서도 점차 적응하는 모습을 보이고 있다.</p>

            <h3>최근 성적</h3>
            <p>탑 10 진입을 눈앞에 두고 있다. 기복을 줄이고 그랜드 슬램에서 더 높은 곳으로 올라간다면, 프랑스 테니스의 새로운 전성기를 이끌 재목임이 틀림없다.</p>

            <h2 id="one-sentence-summary">우고 움베르, 한 문장으로 정리하면?</h2>
            <p>우고 움베르는 빠른 템포와 강력한 샷으로 상대를 압박하는 프랑스의 에이스다.</p>
            <p>그의 테니스는 속도로 공간을 만들고 박자로 상대를 무너뜨리며, 특히 결승전에서 보여주는 집중력이 놀랍다. 피아니스트의 섬세함과 승부사의 냉철함을 동시에 지닌 그의 테니스는 결과를 넘어 예술로 남으며, 프랑스 테니스의 자존심으로 기억될 것이다.</p>
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
