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
import ProfilePageSchema from '@/components/seo/ProfilePageSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import KeyTakeaways from '@/components/blog/KeyTakeaways';

export const metadata: Metadata = {
  title: '프란시스 티아포 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: "프란시스 티아포 (Frances Tiafoe) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
  keywords: ['프란시스 티아포', 'Frances Tiafoe', '테니스', 'ATP', '플레이스타일', '미국 테니스', '하드 전문', '에너지와 창의'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/frances-tiafoe',
  },
  openGraph: {
    title: '프란시스 티아포 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '프란시스 티아포의 하드 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/frances-tiafoe',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '프란시스 티아포 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '프란시스 티아포의 하드 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '프란시스 티아포, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '프란시스 티아포는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 프란시스 티아포의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '프란시스 티아포, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '프란시스 티아포의 경기 스타일은 어떤가요?',
    a: '독특한 폼의 포핸드와 창의적인 네트 플레이가 특징인 공격적인 올라운더입니다. 쇼맨십이 뛰어나 관중과 호흡하며 경기하는 것을 즐깁니다.',
  },
  {
    q: '티아포의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 10위이며, 현재는 20위권을 유지하고 있습니다. 2022년 US 오픈 4강 진출이 커리어 하이입니다.',
  },
  {
    q: '티아포의 강점은 무엇인가요?',
    a: '폭발적인 포핸드와 뛰어난 발리 감각, 그리고 코트 전체를 활용하는 운동 능력이 강점입니다.',
  },
  {
    q: '티아포의 약점은 무엇인가요?',
    a: '서브의 일관성이 다소 부족하고, 경기 중 기복이 심해 집중력을 잃는 경우가 종종 있습니다.',
  },
  {
    q: '티아포를 한 문장으로 설명하면?',
    a: '코트 위의 엔터테이너이자, 불가능을 가능으로 만드는 미국의 희망입니다.',
  },
];

const keyTakeaways = [
  "독특한 폼과 폭발적인 포핸드로 상대를 압도하는 공격형 플레이어",
  "2022 US 오픈 4강 진출로 증명된 빅매치 강점과 스타성",
  "관중과 호흡하며 에너지를 얻는 쇼맨십과 창의적인 네트 플레이"
];

export default function FrancesTiafoePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="프란시스 티아포"
        excerpt="에너지와 창의로 하드코트를 달구는 미국의 대표 선수"
        image="/images/players/frances-tiafoe.png"
      ><ProfilePageSchema
          name="프란시스 티아포 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력"
          description="프란시스 티아포 (Frances Tiafoe) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
          image="/images/players/frances-tiafoe.png"
          mainEntity={{
            '@type': 'Person',
            name: 'Frances Tiafoe',
            alternateName: '프란시스 티아포',
            description: '미국 출신의 에너지 넘치는 테니스 선수. 공격적인 플레이와 강한 체력으로 주목받는 선수.',
            image: '/images/players/frances-tiafoe.png',
            jobTitle: 'Professional Tennis Player',
            nationality: { '@type': 'Country', name: 'United States' },
            birthDate: '1998-01-20',
            height: { '@type': 'QuantitativeValue', value: '188', unitText: 'cm' },
            award: ['US Open Semifinalist', 'ATP 500 Champion'],
            sameAs: [
              'https://en.wikipedia.org/wiki/Frances_Tiafoe',
              'https://www.atptour.com/en/players/frances-tiafoe/td51/overview',
              'https://www.instagram.com/bigfoe1998/'
            ]
          }}
        />

        <BreadcrumbSchema
          items={[
            { name: '홈', item: 'https://tennisfriends.co.kr' },
            { name: '선수', item: 'https://tennisfriends.co.kr/players' },
            { name: '프란시스 티아포', item: 'https://tennisfriends.co.kr/players/frances-tiafoe' },
          ]}
        />
        <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <KeyTakeaways items={keyTakeaways} />
          <PlayerProfileCard
            name="Frances Tiafoe"
            country="United States"
            age={26}
            height="188cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2015}
            grandSlams={0}
            ranking={20}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              코트 위의 쇼맨. <strong className="text-purple-600 dark:text-purple-400">독창적인 플레이</strong>와 넘치는 에너지로 관중을 열광시키는 미국의 슈퍼스타.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              프란시스 티아포, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  에너지와 창의로 하드코트를 달구는 미국의 대표 선수
                </p>
              </div>
            </blockquote>
            <p>프란시스 티아포는 시에라리온 이민자 가정 출신으로, 어려운 환경을 딛고 세계적인 선수로 성장한 '아메리칸 드림'의 주인공이다. 2022년 US 오픈에서 라파엘 나달을 꺾고 4강에 오르며 미국 테니스 팬들을 열광시켰다.</p>
            <p>그의 경기는 지루할 틈이 없다. 독특한 스윙 폼에서 나오는 강력한 샷과 예상치 못한 타이밍의 드롭샷, 그리고 득점 후 보여주는 세레머니는 그의 트레이드마크다. '빅 포' 시대 이후 가장 개성 넘치는 선수 중 한 명으로 꼽히며, 테니스의 대중화를 이끄는 스타로 주목받고 있다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"창의적인 올라운더 (Creative All-Rounder)"</strong></p>
            <p>프란시스 티아포는 미국 출신의 선수로, 변칙적인 플레이와 뛰어난 운동 신경을 바탕으로 한 올라운드 플레이가 특징이다.</p>

            <PlayerHexagonStats
              playerName="프란시스 티아포"
              attributes={[
                { name: '포핸드 (Forehand)', score: 9.0, description: '테이크백이 짧고 독특하지만, 임팩트 순간의 폭발력이 엄청나다. 위너 생산 능력이 뛰어나다.' },
                { name: '네트 플레이 (Net Play)', score: 9.0, description: '손감각이 매우 좋다. 발리와 스매싱은 물론, 터치 샷도 자유자재로 구사한다.' },
                { name: '운동 신경 (Athleticism)', score: 8.8, description: '탄력적인 움직임으로 코트를 넓게 쓴다. 어려운 공도 끝까지 쫓아가 받아낸다.' },
                { name: '쇼맨십 (Showmanship)', score: 10, description: '관중의 환호를 에너지원으로 삼는다. 큰 경기일수록 더 좋은 경기력을 보여준다.' },
                { name: '서브 (Serve)', score: 8.5, description: '파워는 좋으나 일관성이 다소 부족하다. 하지만 중요할 때 터지는 에이스는 위협적이다.' },
              ]}
            />

            <p>플레이 스타일은 매우 공격적이고 변칙적이다. 정석적인 폼은 아니지만, 자신만의 리듬으로 상대를 흔든다. 베이스라인 대결을 하다가도 기습적으로 네트로 대시하거나 드롭샷을 놓는 등 창의적인 플레이를 즐긴다.</p>
            <p>백핸드는 안정적이며, 슬라이스를 적절히 섞어 템포를 조절한다. 리턴 게임에서도 공격적인 자세를 취하며, 상대의 세컨드 서브를 적극적으로 공략한다. 다만 감정 기복이 있어 경기가 안 풀릴 때는 급격히 무너지는 모습을 보이기도 한다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>188cm의 키에 다부진 체격을 갖추고 있다. 근력이 좋아 파워풀한 샷을 구사하며, 유연성도 뛰어나다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">폭발적인 순발력</strong>은 그의 변칙 플레이를 가능하게 하는 원동력이다.</p>

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
                US 오픈 4강 · 탑 10 진입 경험 · 타이브레이크 승률 <strong className="text-green-700 dark:text-green-400 text-base">준수함</strong>
              </p>
            </div>
            <p>긍정적이고 에너지가 넘친다. 관중과 소통하며 분위기를 자신의 것으로 만드는 능력이 탁월하다. '빅 매치'를 즐기는 강심장을 가지고 있어, 그랜드 슬램 같은 큰 무대에서 더 강한 모습을 보여준다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">프란시스 티아포는 어떻게 여기까지 왔을까?</h2>
            <p>티아포의 아버지는 메릴랜드의 한 테니스 센터 관리인으로 일했고, 티아포는 그곳에서 살다시피 하며 테니스를 배웠다. 넉넉하지 않은 형편이었지만 재능과 열정으로 주니어 무대를 평정하고 2015년 프로에 데뷔했다.</p>
            <p>2018년 델레이 비치 오픈에서 첫 투어 우승을 차지하며 가능성을 보였고, 2019년 호주 오픈 8강에 오르며 세계 무대에 이름을 알렸다. 이후 꾸준히 성장하여 2022년 US 오픈 4강 신화를 쓰며 미국 테니스의 간판스타로 자리매김했다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>티아포의 인생 경기는 2022년 US 오픈 16강전이다.</p>

            <h3>2022년 US 오픈 16강</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">거인을 무너뜨리다</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                우승 후보 0순위였던 <strong>라파엘 나달</strong>을 상대로 3-1 승리를 거뒀다. 나달의 그랜드 슬램 23연승을 저지한 이 경기는 티아포의 잠재력이 만개했음을 알리는 신호탄이었다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 티아포의 드라마틱한 인생 스토리와 유쾌한 성격에 매료된다.</p>
            <p>어려움을 극복하고 성공한 그의 이야기는 많은 사람들에게 영감을 준다. 또한 코트 위에서의 열정적인 세레머니와 인터뷰에서의 솔직한 입담은 그를 더욱 사랑스럽게 만든다. 르브론 제임스 등 NBA 스타들과의 친분도 화제가 되곤 한다.</p>

            <h2 id="recent-form">요즘 프란시스 티아포의 경기력 흐름은 어떤가?</h2>
            <p>2023년 슈투트가르트 오픈 우승으로 잔디 코트에서도 강점을 보였고, 탑 10에 진입하며 커리어 하이를 찍었다. 2024년에는 다소 주춤하고 있지만, 여전히 위협적인 선수다.</p>

            <h3>최근 성적</h3>
            <p>휴스턴 오픈 준우승으로 클레이 코트 시즌을 시작했다. 기복을 줄이고 꾸준함을 유지하는 것이 과제다. 홈 그라운드인 북미 하드 코트 시즌에서 다시 한번 비상을 노리고 있다.</p>

            <h2 id="one-sentence-summary">프란시스 티아포, 한 문장으로 정리하면?</h2>
            <p>프란시스 티아포는 에너지와 창의로 하드코트를 달구는 미국의 대표 선수다.</p>
            <p>그의 테니스는 속도로 공간을 만들고 터치로 문장을 닫으며, 특히 변주를 두려워하지 않는 전진이 뛰어나다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 폭발적인 스텝과 감각적인 터치가 세계 상위권을 유지하게 해준다. 밝음과 예의를 중시하는 그의 테니스는 결과를 넘어 설득으로 남으며, 미국 테니스의 상징으로 기억될 것이다.</p>
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
