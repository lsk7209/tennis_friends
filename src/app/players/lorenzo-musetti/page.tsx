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
  title: '로렌조 무세티 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: "로렌조 무세티 (Lorenzo Musetti) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
  keywords: ['로렌조 무세티', 'Lorenzo Musetti', '테니스', 'ATP', '플레이스타일', '이탈리아 테니스', '원핸드 백핸드', '예술적'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/lorenzo-musetti',
  },
  openGraph: {
    title: '로렌조 무세티 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '로렌조 무세티의 예술적인 원핸드 백핸드 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/lorenzo-musetti',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '로렌조 무세티 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '로렌조 무세티의 예술적인 원핸드 백핸드 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '로렌조 무세티, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '로렌조 무세티는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 로렌조 무세티의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '로렌조 무세티, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '로렌조 무세티의 경기 스타일은 어떤가요?',
    a: '화려한 원핸드 백핸드와 창의적인 샷 메이킹이 돋보이는 올라운드 플레이어입니다. 드롭샷과 로브 등 다양한 기술을 구사합니다.',
  },
  {
    q: '무세티의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 15위이며, 현재는 20위권 내외를 유지하고 있습니다. 꾸준히 성장하며 탑 10 진입을 노리고 있습니다.',
  },
  {
    q: '무세티의 강점은 무엇인가요?',
    a: '예측 불가능한 샷 선택과 뛰어난 손감각, 그리고 클레이 코트에서의 강점이 있습니다. 특히 백핸드 다운더라인은 일품입니다.',
  },
  {
    q: '무세티의 약점은 무엇인가요?',
    a: '감정 기복이 심해 경기력에 영향을 미칠 때가 있으며, 하드 코트에서의 성적이 클레이 코트에 비해 다소 떨어집니다.',
  },
  {
    q: '무세티를 한 문장으로 설명하면?',
    a: '코트 위에 그림을 그리는 이탈리아의 테니스 예술가입니다.',
  },
];

export default function LorenzoMusettiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="로렌조 무세티"
        excerpt="창의적인 샷 메이킹과 우아함으로 코트를 수놓는 이탈리아의 테니스 아티스트"
        image="/images/players/lorenzo-musetti.png"
      ><PersonSchema
          name="Lorenzo Musetti"
          nameKo="로렌조 무세티"
          description="이탈리아 출신의 우아한 테니스 선수. 아름다운 단손 백핸드와 다재다능한 플레이로 주목받는 선수."
          image="/images/players/lorenzo-musetti.png"
          nationality="Italy"
          birthDate="2002-03-03"
          height="185"
          jobTitle="Professional Tennis Player"
          award={[
            'Olympic Bronze Medalist', 'ATP 500 Champion'
          ]}
          url="https://tennisfriends.co.kr/players/lorenzo-musetti"
        />

      <BreadcrumbSchema
        items={[
          { name: '홈', item: 'https://tennisfriends.co.kr' },
          { name: '선수', item: 'https://tennisfriends.co.kr/players' },
          { name: '로렌조 무세티', item: 'https://tennisfriends.co.kr/players/lorenzo-musetti' },
        ]}
      />
      <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Lorenzo Musetti"
            country="Italy"
            age={22}
            height="185cm"
            plays="Right-handed (One-handed backhand)"
            turnedPro={2019}
            grandSlams={0}
            ranking={25}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              이탈리아의 낭만 테니스. <strong className="text-purple-600 dark:text-purple-400">예술적인 원핸드 백핸드</strong>와 천재적인 감각으로 관중을 매료시키는 코트 위의 마법사.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              로렌조 무세티, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  창의적인 샷 메이킹과 우아함으로 코트를 수놓는 이탈리아의 테니스 아티스트
                </p>
              </div>
            </blockquote>
            <p>로렌조 무세티는 야닉 시너와 함께 이탈리아 테니스의 황금기를 이끄는 주역이다. 파워 중심의 현대 테니스에서 보기 드문 '기술자' 유형으로, 그의 플레이는 마치 예술 작품을 보는 듯한 느낌을 준다.</p>
            <p>특히 그의 원핸드 백핸드는 현역 선수 중 가장 아름답다는 평가를 받는다. 단순히 폼만 좋은 것이 아니라, 위기 상황에서 터져 나오는 기상천외한 샷들은 그가 가진 천재성을 증명한다. 성적을 떠나 '보는 맛'이 있는 선수로 팬들의 사랑을 받고 있다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"창의적인 테크니션 (Creative Technician)"</strong></p>
            <p>무세티는 정형화된 패턴보다는 상황에 맞는 다양한 구질과 코스 선택으로 상대를 공략하는 올라운드 플레이어다.</p>

            <PlayerHexagonStats
              playerName="로렌조 무세티"
              attributes={[
                { name: '백핸드 (Backhand)', score: 9.5, description: '그의 트레이드마크. 앵글 샷, 다운더라인, 슬라이스 등 모든 기술을 완벽하게 구사한다.' },
                { name: '창의성 (Creativity)', score: 10, description: '예측 불가능한 샷을 만들어낸다. 드롭샷, 로브, 트위너 등 화려한 기술을 즐긴다.' },
                { name: '터치 (Touch)', score: 9.5, description: '손감각이 매우 뛰어나다. 네트 앞에서의 섬세한 발리와 드롭 발리는 일품이다.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '백핸드에 가려져 있지만, 포핸드 역시 강력한 스핀과 파워를 겸비하고 있다.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '감정 기복이 심한 편이다. 경기가 안 풀릴 때 스스로 무너지는 모습을 보이기도 한다.' },
              ]}
            />

            <p>플레이 스타일은 매우 다채롭다. 베이스라인 뒤에서 묵직한 탑스핀을 보내다가도, 기습적인 드롭샷으로 상대를 네트로 불러들인다. 상대의 허를 찌르는 패싱샷과 로브는 그의 전매특허다.</p>
            <p>클레이 코트에서 가장 좋은 경기력을 보여주지만, 최근에는 하드 코트와 잔디 코트에서도 적응력을 높여가고 있다. 다만 서브 파워가 다소 부족하고, 리턴 게임에서 기복을 보이는 점은 보완해야 할 부분이다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>185cm의 적당한 키에 유연한 신체를 가지고 있다. 근력보다는 탄력을 이용한 스윙 메커니즘을 가지고 있어 부드러운 샷을 구사한다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">유연한 몸놀림</strong>은 어려운 자세에서도 밸런스를 유지하게 해준다.</p>

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
                ATP 투어 2승 · 함부르크 오픈 우승(ATP 500) · 주니어 세계 랭킹 <strong className="text-green-700 dark:text-green-400 text-base">1위 출신</strong>
              </p>
            </div>
            <p>예술가적인 기질이 있어 감정 표현이 솔직하다. 이는 양날의 검이 되기도 하는데, 분위기를 타면 누구도 막을 수 없지만, 한 번 흔들리면 걷잡을 수 없이 무너지기도 한다. 최근에는 멘탈 코칭을 통해 평정심을 유지하려 노력하고 있다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">로렌조 무세티는 어떻게 여기까지 왔을까?</h2>
            <p>무세티는 2019년 호주 오픈 주니어 단식 우승을 차지하며 세계 주니어 랭킹 1위에 올랐다. 프로 데뷔 후에도 챌린저 투어에서 두각을 나타내며 빠르게 성장했다.</p>
            <p>2022년 함부르크 오픈 결승에서 카를로스 알카라스를 꺾고 생애 첫 투어 우승을 차지하며 전 세계를 놀라게 했다. 이후 나폴리 오픈에서도 우승하며 이탈리아 테니스의 차세대 주자로 확실히 자리매김했다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>무세티의 잠재력이 폭발한 경기는 2022년 함부르크 오픈 결승이다.</p>

            <h3>2022년 함부르크 오픈 결승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">천재 대 천재</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                당시 세계 랭킹 1위를 향해 질주하던 <strong>카를로스 알카라스</strong>와 맞붙어 풀세트 접전 끝에 2-1 승리를 거뒀다. 5번의 매치 포인트를 놓치고도 무너지지 않고 끝내 우승을 차지한, 기술과 멘탈이 모두 빛난 명승부였다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 무세티의 '낭만'에 끌린다.</p>
            <p>효율성만을 강조하는 현대 테니스에서, 아름다움과 창의성을 추구하는 그의 플레이는 신선한 충격을 준다. 또한 잘생긴 외모와 스타일리시한 패션 감각도 인기 요인 중 하나다.</p>

            <h2 id="recent-form">요즘 로렌조 무세티의 경기력 흐름은 어떤가?</h2>
            <p>2023년에는 다소 기복 있는 모습을 보였으나, 2024년 들어 다시 안정감을 찾아가고 있다. 몬테카를로 마스터스 등 클레이 시즌에서 좋은 성적을 거두며 랭킹을 회복 중이다.</p>

            <h3>최근 성적</h3>
            <p>아빠가 된 후 책임감이 더해져 멘탈적으로 한층 성숙해졌다는 평가를 받는다. 재능만큼은 의심할 여지가 없는 만큼, 꾸준함만 갖춘다면 탑 10 진입은 시간문제다.</p>

            <h2 id="one-sentence-summary">로렌조 무세티, 한 문장으로 정리하면?</h2>
            <p>로렌조 무세티는 우아한 원핸드 백핸드와 창의적인 플레이로 이탈리아 테니스의 미래를 이끌어가는 차세대 스타다.</p>
            <p>그의 테니스는 단순한 승부가 아닌 하나의 공연을 보는 듯한 즐거움을 준다. 천재적인 감각과 예술적인 샷 메이킹은 그를 특별하게 만들며, 이탈리아 테니스의 르네상스를 이끄는 주역으로 기억될 것이다.</p>
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
