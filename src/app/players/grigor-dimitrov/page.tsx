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
  title: '그리고르 디미트로프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '그리고르 디미트로프의 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 두 번째 전성기·한 손 백핸드의 미학·우아한 올코트 플레이어로 주목받는 불가리아의 테니스 영웅.',
  keywords: ['그리고르 디미트로프', 'Grigor Dimitrov', '테니스', 'ATP', '플레이스타일', '불가리아 테니스', '올코트', '원핸드 백핸드', '두 번째 전성기'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/grigor-dimitrov',
  },
  openGraph: {
    title: '그리고르 디미트로프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '그리고르 디미트로프의 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/grigor-dimitrov',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '그리고르 디미트로프 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '그리고르 디미트로프의 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '그리고르 디미트로프, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '그리고르 디미트로프는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 그리고르 디미트로프의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '그리고르 디미트로프, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '그리고르 디미트로프의 경기 스타일은 어떤가요?',
    a: '우아한 원핸드 백핸드와 다재다능한 샷 메이킹이 특징인 올라운드 플레이어입니다. 페더러를 연상시키는 부드러운 폼을 가지고 있습니다.',
  },
  {
    q: '디미트로프의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 3위(2017년)이며, 현재는 다시 탑 10에 복귀하여 제2의 전성기를 구가하고 있습니다.',
  },
  {
    q: '디미트로프의 강점은 무엇인가요?',
    a: '코트 전체를 활용하는 능력, 뛰어난 유연성, 그리고 경험에서 나오는 노련한 경기 운영이 강점입니다.',
  },
  {
    q: '디미트로프의 약점은 무엇인가요?',
    a: '중요한 순간에 나오는 더블 폴트나 집중력 저하가 약점으로 지적되곤 했으나, 최근에는 멘탈적으로 많이 성숙해졌습니다.',
  },
  {
    q: '디미트로프를 한 문장으로 설명하면?',
    a: '현대 테니스에서 가장 아름다운 폼을 가진 선수이자, 끊임없이 진화하는 베테랑입니다.',
  },
];

export default function GrigorDimitrovPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="그리고르 디미트로프"
        excerpt="두 번째 전성기, 한 손 백핸드의 미학을 보여주는 불가리아의 테니스 영웅"
        image="/images/players/grigor-dimitrov.png"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Grigor Dimitrov"
            country="Bulgaria"
            age={33}
            height="191cm"
            plays="Right-handed (One-handed backhand)"
            turnedPro={2008}
            grandSlams={0}
            ranking={10}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              코트 위의 예술가. <strong className="text-purple-600 dark:text-purple-400">우아한 원핸드 백핸드</strong>와 다재다능한 플레이로 제2의 전성기를 맞이한 베테랑.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              그리고르 디미트로프, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  두 번째 전성기, 한 손 백핸드의 미학을 보여주는 불가리아의 테니스 영웅
                </p>
              </div>
            </blockquote>
            <p>그리고르 디미트로프는 '베이비 페더러'라는 별명으로 불리며 일찍부터 주목받았으나, 오랜 기간 기대만큼의 성적을 내지 못해 아쉬움을 남겼다. 하지만 30대에 접어들어 더욱 성숙하고 정교해진 플레이로 다시 세계 랭킹 10위권에 진입하며 놀라운 반전을 만들어냈다.</p>
            <p>그의 테니스는 현대 테니스에서 점점 사라져가는 '낭만'을 간직하고 있다. 우아한 폼에서 나오는 원핸드 백핸드와 부드러운 슬라이스, 그리고 감각적인 발리는 보는 이들의 눈을 즐겁게 한다. 단순한 승리를 넘어 테니스의 아름다움을 증명하는 선수다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"우아한 올라운더 (Elegant All-Rounder)"</strong></p>
            <p>디미트로프는 모든 샷을 수준급으로 구사하는 올라운드 플레이어로, 특히 유연성을 바탕으로 한 수비와 역습 능력이 뛰어나다.</p>

            <PlayerAttributes
              attributes={[
                { name: '백핸드 (Backhand)', score: 9.5, description: '그의 상징과도 같은 샷. 탑스핀과 슬라이스를 자유자재로 섞어 쓰며 상대를 요리한다.' },
                { name: '유연성 (Flexibility)', score: 9.5, description: '투어 최고의 유연성을 자랑한다. 불가능해 보이는 자세에서도 위력적인 샷을 만들어낸다.' },
                { name: '네트 플레이 (Net Play)', score: 9.0, description: '터치 감각이 매우 좋다. 기회가 오면 주저 없이 네트로 대시하여 포인트를 마무리한다.' },
                { name: '서브 (Serve)', score: 8.8, description: '부드러운 폼에서 나오는 서브는 코스 공략이 뛰어나며, 에이스 생산 능력도 준수하다.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '과거에 비해 안정감이 좋아졌다. 찬스 볼에서는 강력한 위너를 터뜨린다.' },
              ]}
            />

            <p>플레이 스타일은 매우 다채롭다. 베이스라인 뒤에서 랠리를 하다가도 슬라이스로 템포를 죽이고, 갑작스러운 드롭샷이나 네트 대시로 상대를 당황하게 만든다. 특히 백핸드 슬라이스는 낮게 깔려 들어와 상대의 공격을 무력화시키는 데 효과적이다.</p>
            <p>서브 앤 발리 같은 클래식한 전술도 즐겨 사용하며, 코트 전체를 넓게 쓰는 움직임이 좋다. 다만 가끔씩 나오는 집중력 저하와 더블 폴트는 여전히 개선해야 할 과제다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>191cm의 큰 키에도 불구하고 움직임이 매우 가볍고 빠르다. 특히 다리를 넓게 벌리고 낮은 자세에서 샷을 처리하는 능력은 타의 추종을 불허한다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">놀라운 유연성</strong>은 부상을 방지하고 수비 범위를 넓히는 핵심 요인이다.</p>

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
                ATP 파이널스 우승(2017) · 마스터스 1000 우승 · 통산 9승 · <strong className="text-green-700 dark:text-green-400 text-base">탑 10 복귀</strong>
              </p>
            </div>
            <p>과거에는 '유리 멘탈'이라는 오명을 쓰기도 했으나, 나이가 들면서 멘탈적으로 훨씬 단단해졌다. 위기 상황에서도 쉽게 무너지지 않고 침착하게 경기를 풀어가는 노련미가 생겼다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">그리고르 디미트로프는 어떻게 여기까지 왔을까?</h2>
            <p>불가리아에서 태어난 디미트로프는 주니어 시절 윔블던과 US 오픈 주니어 부문을 석권하며 혜성처럼 등장했다. 로저 페더러와 유사한 폼 때문에 '베이비 페더러'로 불리며 엄청난 기대를 받았다.</p>
            <p>2017년 ATP 파이널스 우승과 세계 랭킹 3위 등극으로 정점을 찍었으나, 이후 부상과 부진으로 긴 슬럼프를 겪었다. 하지만 포기하지 않고 훈련에 매진한 결과, 2023년부터 다시 전성기 기량을 회복하며 '클래스는 영원하다'는 것을 증명하고 있다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>디미트로프의 부활을 알린 경기는 2024년 마이애미 오픈 8강전이다.</p>

            <h3>2024년 마이애미 오픈 8강</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">천재의 귀환</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                당시 최고의 폼을 보여주던 <strong>카를로스 알카라스</strong>를 상대로 2-0 완승을 거뒀다. 알카라스가 "내가 13살 소년이 된 것 같았다"고 말할 정도로 완벽한 경기력을 보여주며 전 세계 테니스 팬들을 놀라게 했다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 디미트로프의 아름다운 테니스와 신사적인 매너를 사랑한다.</p>
            <p>그의 원핸드 백핸드는 보는 것만으로도 예술적인 감동을 준다. 또한 코트 밖에서의 겸손하고 다정한 태도, 그리고 뛰어난 패션 감각은 그를 테니스계의 대표적인 '매력남'으로 만들었다.</p>

            <h2 id="recent-form">요즘 그리고르 디미트로프의 경기력 흐름은 어떤가?</h2>
            <p>2024년 브리즈번 인터내셔널 우승으로 6년 만에 투어 타이틀을 획득하며 화려하게 시즌을 시작했다. 마이애미 오픈 준우승 등 꾸준히 상위권 성적을 유지하고 있다.</p>

            <h3>최근 성적</h3>
            <p>프랑스 오픈 8강 진출 등 클레이 코트에서도 좋은 모습을 보였다. 체력 관리만 잘 된다면 그랜드 슬램에서도 충분히 우승 경쟁을 할 수 있는 폼이다. 그의 '라스트 댄스'는 이제 막 시작되었다.</p>

            <h2 id="one-sentence-summary">그리고르 디미트로프, 한 문장으로 정리하면?</h2>
            <p>그리고르 디미트로프는 원핸드 백핸드의 미학과 우아한 올코트 플레이로 두 번째 전성기를 만들어가고 있는 베테랑 선수다.</p>
            <p>그의 테니스는 화려함보다는 효율을 추구하는 우아함이 특징이며, 부상과 기복을 겪었지만 체계적인 회복과 훈련으로 다시 상위권에 복귀했다. 기술의 완성도와 멘탈의 성숙함, 그리고 품위 있는 매너까지 갖춘 그는 현대 테니스에서 점점 사라져가는 한 손 백핸드의 아름다움을 보여주는 대표적인 선수로 기억될 것이다.</p>
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
