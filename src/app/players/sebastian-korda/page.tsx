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
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: '세바스찬 코르다 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '세바스찬 코르다의 깔끔한 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 테니스 명가의 DNA를 물려받아 우아하고 정석적인 플레이를 펼치는 미국의 기대주.',
  keywords: ['세바스찬 코르다', 'Sebastian Korda', '테니스', 'ATP', '플레이스타일', '미국 테니스', '테니스 명가', '올라운더'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/sebastian-korda',
  },
  openGraph: {
    title: '세바스찬 코르다 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '세바스찬 코르다의 깔끔한 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/sebastian-korda',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '세바스찬 코르다 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '세바스찬 코르다의 깔끔한 올코트 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '세바스찬 코르다, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '세바스찬 코르다는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 세바스찬 코르다의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '세바스찬 코르다, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '세바스찬 코르다의 경기 스타일은 어떤가요?',
    a: '군더더기 없는 깔끔한 폼과 안정적인 스트로크가 특징인 올라운드 플레이어입니다. 공격과 수비의 밸런스가 매우 좋습니다.',
  },
  {
    q: '코르다의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 23위이며, 현재는 20위권 중반을 유지하고 있습니다. 부상 복귀 후 다시 상승세를 타고 있습니다.',
  },
  {
    q: '코르다의 강점은 무엇인가요?',
    a: '양손 백핸드의 안정감과 정확도가 뛰어나며, 네트 플레이 능력도 준수합니다. 경기 운영 능력이 나이에 비해 성숙합니다.',
  },
  {
    q: '코르다의 약점은 무엇인가요?',
    a: '서브 파워가 체격 조건에 비해 다소 아쉬우며, 잦은 부상이 성장의 걸림돌이 되고 있습니다.',
  },
  {
    q: '코르다를 한 문장으로 설명하면?',
    a: '테니스 명가의 DNA를 물려받은, 가장 교과서적인 폼을 가진 선수입니다.',
  },
];

export default function SebastianKordaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="세바스찬 코르다"
        excerpt="테니스 명가의 DNA를 물려받아 우아하고 정석적인 플레이를 펼치는 미국의 기대주"
        image="/images/players/sebastian-korda.png"
      ><PersonSchema
          name="Sebastian Korda"
          nameKo="세바스찬 코르다"
          description="미국 출신의 차세대 테니스 스타. 공격적인 플레이와 뛰어난 기술로 주목받는 선수."
          image="/images/players/sebastian-korda.png"
          nationality="United States"
          birthDate="2000-07-05"
          height="196"
          jobTitle="Professional Tennis Player"
          award={[
            'ATP 250 Champion', 'NextGen ATP Finals participant'
          ]}
          url="https://tennisfriends.co.kr/players/sebastian-korda"
        />
        <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Sebastian Korda"
            country="United States"
            age={23}
            height="196cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2018}
            grandSlams={0}
            ranking={26}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              로열 패밀리의 후계자. <strong className="text-blue-600 dark:text-blue-400">교과서적인 폼</strong>과 영리한 경기 운영으로 코트를 지배하는 미국 테니스의 귀공자.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              세바스찬 코르다, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  테니스 명가의 DNA를 물려받아 우아하고 정석적인 플레이를 펼치는 미국의 기대주
                </p>
              </div>
            </blockquote>
            <p>세바스찬 코르다는 '테니스 로열 패밀리'의 일원이다. 아버지는 1998년 호주 오픈 챔피언 페트르 코르다, 어머니는 전직 테니스 선수 레지나 라이크르토바다. 두 누나는 LPGA 투어 챔피언인 제시카 코르다와 넬리 코르다다.</p>
            <p>이런 엄청난 스포츠 유전자를 물려받은 그는 어린 시절부터 체계적인 엘리트 교육을 받았다. 그 결과, 투어에서 가장 깔끔하고 군더더기 없는 폼을 갖추게 되었다. 단순히 배경만 좋은 것이 아니라, 실력으로도 주니어 호주 오픈 우승을 차지하며 자신의 가치를 증명했다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"우아한 올라운더 (Elegant All-Rounder)"</strong></p>
            <p>코르다는 큰 키(196cm)에도 불구하고 부드러운 움직임과 정교한 기술을 구사하는 올라운드 플레이어다.</p>

            <PlayerHexagonStats
              playerName="세바스티안 코르다"
              attributes={[
                { name: '백핸드 (Backhand)', score: 9.5, description: '투어 최고 수준의 양손 백핸드를 가졌다. 타점이 일정하고 코스 공략이 매우 정교하다.' },
                { name: '기술 (Technique)', score: 9.5, description: '모든 샷의 폼이 교과서적이다. 불필요한 힘을 쓰지 않고 효율적으로 공을 친다.' },
                { name: '네트 플레이 (Net Play)', score: 9.0, description: '복식 경기 경험도 많아 발리와 스매싱 처리가 능숙하다. 터치 감각이 좋다.' },
                { name: '리턴 (Return)', score: 8.5, description: '상대의 강서브를 부드럽게 받아쳐 공격 기회로 만드는 능력이 탁월하다.' },
                { name: '서브 (Serve)', score: 8.0, description: '키에 비해 파워는 다소 아쉽지만, 코스 선택과 회전 조절이 뛰어나다.' },
              ]}
            />

            <p>플레이 스타일은 매우 안정적이다. 무리하게 위너를 노리기보다는 상대를 좌우로 흔들며 기회를 엿본다. 베이스라인 플레이뿐만 아니라 네트 플레이에도 능해, 서브 앤 발리나 칩 앤 차지 같은 다양한 전술을 구사한다.</p>
            <p>특히 백핸드 다운더라인은 그의 가장 강력한 무기 중 하나다. 멘토인 안드레 애거시의 영향을 받아 리턴 게임에서도 강한 면모를 보인다. 다만 파워 면에서는 아직 보완이 필요하며, 잦은 부상으로 인해 경기력을 꾸준히 유지하는 데 어려움을 겪기도 한다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>196cm의 장신이지만 움직임이 둔하지 않다. 긴 팔다리를 이용한 수비 범위가 넓고, 부드러운 스윙 메커니즘 덕분에 체력 소모가 적다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">효율적인 신체 활용</strong>은 그의 가장 큰 장점이다.</p>

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
                호주 오픈 8강(2023) · ATP 투어 1승 · 주니어 호주 오픈 <strong className="text-green-700 dark:text-green-400 text-base">우승</strong>
              </p>
            </div>
            <p>스포츠 가족의 일원답게 승부욕이 강하면서도 냉정함을 잃지 않는다. 경기 중 감정 기복이 적고, 위기 상황에서도 침착하게 대처한다. 아버지와 누나들의 조언을 통해 프로 선수로서의 마인드셋을 잘 갖추고 있다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">세바스찬 코르다는 어떻게 여기까지 왔을까?</h2>
            <p>코르다는 어린 시절 아이스하키 선수로 활동했으나, 2009년 US 오픈을 관람한 후 테니스로 전향했다. 아버지의 지도를 받으며 기본기를 다졌고, 2018년 주니어 호주 오픈 우승으로 두각을 나타냈다.</p>
            <p>2021년 파르마 오픈에서 첫 투어 우승을 차지했고, 넥스트 젠 파이널스 준우승을 거두며 차세대 스타로 인정받았다. 2023년 호주 오픈에서는 다닐 메드베데프를 꺾고 8강에 오르는 파란을 일으켰다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>코르다의 잠재력을 확인시켜준 경기는 2023년 호주 오픈 3라운드다.</p>

            <h3>2023년 호주 오픈 3라운드</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">거함을 무너뜨리다</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                우승 후보였던 <strong>다닐 메드베데프</strong>를 상대로 3-0 완승을 거뒀다. 메드베데프의 끈질긴 수비를 정교한 공격으로 뚫어내며, 자신이 탑 랭커와 대등하게 싸울 수 있음을 전 세계에 알렸다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 코르다의 '깔끔함'을 좋아한다.</p>
            <p>군더더기 없는 폼과 신사적인 매너는 보는 이들을 편안하게 만든다. 또한 '코르다 가문'의 막내라는 스토리텔링도 흥미로운 요소다. 누나들과 함께 '골프-테니스 남매'로 불리며 많은 관심을 받고 있다.</p>

            <h2 id="recent-form">요즘 세바스찬 코르다의 경기력 흐름은 어떤가?</h2>
            <p>2023년 손목 부상으로 잠시 주춤했으나, 2024년 들어 다시 컨디션을 회복하고 있다. 꾸준히 대회에 출전하며 경기 감각을 끌어올리고 있다.</p>

            <h3>최근 성적</h3>
            <p>부상만 없다면 언제든 탑 10에 진입할 수 있는 기량을 갖추고 있다. 피지컬을 조금 더 보완하고 서브 파워를 늘린다면, 그랜드 슬램 우승도 노려볼 만한 재목이다.</p>

            <h2 id="one-sentence-summary">세바스찬 코르다, 한 문장으로 정리하면?</h2>
            <p>세바스찬 코르다는 테니스 명가의 DNA를 물려받아 우아하고 정석적인 플레이를 펼치는 미국의 기대주다.</p>
            <p>그의 테니스는 기본에 충실하면서도 현대적인 감각을 잃지 않는다. 완벽한 폼에서 나오는 정교한 샷들은 테니스의 교본과도 같다. 부상을 이겨내고 꾸준함을 보여준다면, 아버지의 뒤를 이어 그랜드 슬램 챔피언이 될 날이 머지않았다.</p>
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
