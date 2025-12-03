import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerHexagonStats from '@/components/players/PlayerHexagonStats';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, Users, Crown } from 'lucide-react';
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: '다닐 메드베데프 — 세계랭킹 4위 | 플레이스타일·명장면·최근 경기력',
  description: '다닐 메드베데프의 카운터펀처 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 하드 코트의 왕·지공의 미학·라이벌과 함께 성장하는 러시아 출신의 세계랭킹 4위 선수.',
  keywords: ['다닐 메드베데프', 'Daniil Medvedev', '테니스', 'ATP', '플레이스타일', '러시아 테니스', '카운터펀처', '하드 코트', '라이벌'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/daniil-medvedev',
  },
  openGraph: {
    title: '다닐 메드베데프 — 세계랭킹 4위 | 플레이스타일·명장면·최근 경기력',
    description: '다닐 메드베데프의 카운터펀처 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/daniil-medvedev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '다닐 메드베데프 — 세계랭킹 4위 | 플레이스타일·명장면·최근 경기력',
    description: '다닐 메드베데프의 카운터펀처 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '다닐 메드베데프, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '다닐 메드베데프는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 다닐 메드베데프의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '다닐 메드베데프, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '다닐 메드베데프의 경기 스타일은 어떤가요?',
    a: '카운터펀처 스타일로, 탁월한 리턴 능력과 코트 커버리지가 특징입니다. 낮은 탄도와 깊은 낙구로 상대의 선택지를 좁혀 갑니다.',
  },
  {
    q: '메드베데프의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 1위였으며, 현재는 4위를 유지하고 있습니다. 2021년 US 오픈 우승을 차지하며 그랜드 슬램 챔피언이 되었습니다.',
  },
  {
    q: '메드베데프의 강점은 무엇인가요?',
    a: '탁월한 리턴 능력과 멘탈 게임이 최대 강점입니다. 상대의 강점을 거울처럼 받아 적응하는 능력이 뛰어납니다.',
  },
  {
    q: '메드베데프의 인간적인 면모는 어떤가요?',
    a: '솔직함과 유머가 특징입니다. 인터뷰에서 자신의 생각을 가감 없이 표현하며, 팬들과 소통하는 것을 즐깁니다.',
  },
  {
    q: '메드베데프를 한 문장으로 설명하면?',
    a: '낮은 탄도와 깊은 낙구로 상대의 선택지를 좁혀 가는 하드 코트의 설계자입니다.',
  },
];

export default function DaniilMedvedevPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="다닐 메드베데프"
        excerpt="낮은 탄도와 깊은 낙구로 상대의 선택지를 좁혀 가는 하드 코트의 설계자"
        image="/images/players/daniil-medvedev.png"
      ><PersonSchema
          name="Daniil Medvedev"
          nameKo="다닐 메드베데프"
          description="러시아 출신의 세계 정상급 테니스 선수. 독창적인 플레이 스타일과 뛰어난 전술로 주목받는 선수."
          image="/images/players/daniil-medvedev.png"
          nationality="Russia"
          birthDate="1996-02-11"
          height="198"
          jobTitle="Professional Tennis Player"
          award={[
            'US Open Champion (2021)', 'ATP Finals Champion (2020)', 'ATP World No. 1'
          ]}
          url="https://tennisfriends.co.kr/players/daniil-medvedev"
        />
        <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Daniil Medvedev"
            country="Russia"
            age={28}
            height="198cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2014}
            grandSlams={1}
            ranking={4}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              코트 위의 체스 플레이어. <strong className="text-blue-600 dark:text-blue-400">문어(Octopus)</strong>처럼 모든 공을 받아내며 상대를 질식시키는 하드 코트의 지배자.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              다닐 메드베데프, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  낮은 탄도와 깊은 낙구로 상대의 선택지를 좁혀 가는 하드 코트의 설계자
                </p>
              </div>
            </blockquote>
            <p>다닐 메드베데프는 러시아 출신의 세계랭킹 4위 테니스 선수로, 카운터펀처 스타일과 탁월한 리턴 능력으로 ATP 투어를 지배하고 있다. 세계랭킹 1위에 올랐던 경력의 소유자이며, 특히 하드 코트에서 강력한 모습을 보여준다. 낮은 탄도와 깊은 낙구, 독특한 코트 포지셔닝으로 상대의 선택지를 점점 좁혀 가는 그의 테니스는 현대 하드코트의 설계자로 평가받는다.</p>
            <p>그는 2021년 US 오픈 우승을 차지하며 그랜드 슬램 챔피언이 되었고, 2022년 세계랭킹 1위를 달성했다. 최근에는 세계랭킹 4위를 유지하며 큰 대회에서도 안정적인 경기력을 보여주고 있다. 그의 테니스는 화려함보다는 효율을 추구하며, 특히 리턴과 포지셔닝으로 경기의 흐름을 바꾸는 능력이 뛰어나다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"지능형 카운터펀처 (Strategic Counter-Puncher)"</strong></p>
            <p>다닐 메드베데프는 러시아 출신의 세계랭킹 4위 선수로, 카운터펀처 스타일과 탁월한 리턴 능력이 특징인 ATP 투어의 강자다.</p>

            <PlayerHexagonStats
              playerName="다닐 메드베데프"
              attributes={[
                { name: '수비/리턴 (Defense)', score: 10, description: '코트 뒤쪽에서 모든 공을 받아내는 "문어" 같은 수비 범위.' },
                { name: '멘탈/전술 (Tactics)', score: 9.5, description: '상대의 약점을 집요하게 파고드는 체스 플레이어.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '플랫하고 낮게 깔리는 백핸드는 미스 없이 상대를 압박한다.' },
                { name: '서브 (Serve)', score: 9.0, description: '2m에 가까운 키에서 뿜어져 나오는 강력한 퍼스트 서브.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '독특한 폼이지만 효과적인 샷. 예측하기 힘든 궤적을 그린다.' },
              ]}
            />

            <p>플레이 스타일은 카운터펀처로 분류된다. 베이스라인 뒤에서 긴 팔다리를 이용해 모든 공을 받아내며, 상대의 실수를 유도한다. 특히 리턴 능력이 가장 큰 무기다. 퍼스트 서브에는 한참 뒤에서 출발해 탄도와 길이를 맞춰 상대의 3구 패턴을 지운다. 세컨드 서브에는 전진해 접점을 앞세운다. 바깥에서 안으로 들어오는 이 왕복 동선이 상대의 토스와 코스 선택을 흔들어, 경기 초반부터 심리적 부하를 만든다.</p>
            <p>포핸드는 낮은 탄도와 깊은 낙구로 압박한다. 큰 회전보다 길이로 상대를 밖으로 밀어낸다. 백핸드는 양손의 견고함으로 라인을 얇게 긁어 각을 만든다. 베이스라인 뒤에서 한두 걸음 더 물러난 포지션을 즐겨 취하지만, 그만큼 볼의 길이 제어와 시간 훔치기에 능하다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>코트 커버리지가 뛰어나다. 베이스라인 뒤에서도 깊은 스트로크를 구사할 수 있으며, 장기전에서도 체력 관리가 뛰어나다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">5세트 경기에서도 후반까지 안정적인 경기력</strong>을 유지한다.</p>

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
                리턴 게임 승률 <strong className="text-green-700 dark:text-green-400 text-base">투어 상위권</strong> · 하드 코트 승률 <strong className="text-green-700 dark:text-green-400 text-base">매우 높음</strong> · 끈질긴 수비
              </p>
            </div>
            <p>포인트 사이 그는 스트링을 훑고 두 번의 깊은 호흡으로 리듬을 고정한다. 스코어가 흔들려도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않는다. 타이브레이크 초반에는 네트를 넉넉히 넘기는 구질로 높이와 길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다. 빠른 적응력이 특징이다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">다닐 메드베데프는 어떻게 여기까지 왔을까?</h2>
            <p>메드베데프의 성장 배경은 늦게 꽃피운 대기만성형이다. 주니어 시절에는 크게 주목받지 못했으나, 프로 전향 후 꾸준히 성장하며 세계랭킹 1위를 달성했다. 그의 테니스는 화려한 장식보다는 효율을 추구하며, 특히 리턴과 수비 능력이 뛰어나다.</p>
            <p>그는 2021년 US 오픈 우승을 차지하며 그랜드 슬램 챔피언이 되었고, 2022년 세계랭킹 1위를 달성했다. 최근 몇 시즌 동안 큰 대회에서도 안정적인 경기력을 보여주고 있으며, 특히 하드 코트에서 강한 면모를 보이고 있다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>메드베데프의 커리어를 상징하는 경기는 2021년 US 오픈 우승이다.</p>

            <h3>2021년 US 오픈 우승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">캘린더 그랜드 슬램 저지</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>2021년 US 오픈 결승</strong>에서 노박 조코비치를 3-0으로 완파하며 생애 첫 메이저 타이틀을 획득했다. 조코비치의 캘린더 그랜드 슬램을 저지한 역사적인 경기였다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들이 메드베데프에게 열광하는 이유는 그의 솔직하고 유머러스한 성격, 그리고 독특한 플레이 스타일 때문이다.</p>
            <p>그의 인터뷰는 언제나 화제가 되며, 팬들과 소통하는 모습은 친근함을 준다. 또한 코트 위에서의 예측 불가능한 플레이와 끈질긴 수비는 보는 이들에게 짜릿함을 선사한다.</p>

            <h2 id="recent-form">요즘 다닐 메드베데프의 경기력 흐름은 어떤가?</h2>
            <p>최근 메드베데프의 경기력은 안정적이다. 꾸준히 상위권 성적을 유지하고 있으며, 특히 하드 코트 대회에서 강한 모습을 보여주고 있다.</p>

            <h3>최근 성적</h3>
            <p>2024년 호주 오픈 준우승을 차지하며 여전한 경쟁력을 과시했다. 마스터스 대회에서도 꾸준히 4강 이상의 성적을 거두고 있다.</p>

            <h2 id="one-sentence-summary">다닐 메드베데프, 한 문장으로 정리하면?</h2>
            <p>다닐 메드베데프는 낮은 탄도와 깊은 낙구로 상대의 선택지를 좁혀 가는 하드 코트의 설계자다.</p>
            <p>그의 테니스는 화려함보다는 효율을 추구하며, 리턴과 포지셔닝으로 경기의 흐름을 바꾸는 전술적 완성도가 특징이다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 상대의 강점을 거울처럼 받아 적응하는 능력이 세계 상위권을 유지하게 해준다. 솔직함과 유머를 겸비한 그의 테니스는 결과를 넘어 설득으로 남으며, 하드 코트에서의 강력한 모습으로 기억될 것이다.</p>
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
