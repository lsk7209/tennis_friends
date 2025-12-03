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
  title: '벤 쉘튼 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '벤 쉘튼의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 좌손 강서브와 대담한 전진으로 큰 코트의 시간을 압축하는 미국의 차세대 간판.',
  keywords: ['벤 쉘튼', 'Ben Shelton', '테니스', 'ATP', '플레이스타일', '미국 테니스', '공격형', '좌손 서브', '차세대'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/ben-shelton',
  },
  openGraph: {
    title: '벤 쉘튼 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '벤 쉘튼의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/ben-shelton',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '벤 쉘튼 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '벤 쉘튼의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '벤 쉘튼, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '벤 쉘튼은 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 벤 쉘튼의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '벤 쉘튼, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '벤 쉘튼의 경기 스타일은 어떤가요?',
    a: '폭발적인 좌손 서브와 강력한 포핸드를 앞세운 공격적인 플레이가 특징입니다. 네트 플레이도 적극적으로 구사합니다.',
  },
  {
    q: '쉘튼의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 13위이며, 현재는 탑 10 진입을 목표로 하고 있습니다. 2023년 US 오픈 4강 진출로 세계적인 주목을 받았습니다.',
  },
  {
    q: '쉘튼의 강점은 무엇인가요?',
    a: '최고 시속 240km에 육박하는 서브와 두려움 없는 멘탈, 그리고 뛰어난 운동 신경이 강점입니다.',
  },
  {
    q: '쉘튼의 약점은 무엇인가요?',
    a: '아직 경험이 부족하여 경기 운영에서 미숙한 모습을 보일 때가 있으며, 리턴 게임에서의 정교함이 보완되어야 합니다.',
  },
  {
    q: '쉘튼을 한 문장으로 설명하면?',
    a: '미국 테니스의 미래를 짊어질 가장 폭발적인 재능을 가진 선수입니다.',
  },
];

export default function BenSheltonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="벤 쉘튼"
        excerpt="좌손 강서브와 대담한 전진으로 큰 코트의 시간을 압축하는 미국의 차세대 간판"
        image="/images/players/ben-shelton.png"
      ><PersonSchema
          name="Ben Shelton"
          nameKo="벤 쉘튼"
          description="미국 출신의 차세대 빅 서버. 폭발적인 서브와 공격적인 플레이로 주목받는 선수."
          image="/images/players/ben-shelton.png"
          nationality="United States"
          birthDate="2002-10-09"
          height="193"
          jobTitle="Professional Tennis Player"
          award={[
            'US Open Semifinalist', 'ATP 250 Champion'
          ]}
          url="https://tennisfriends.co.kr/players/ben-shelton"
        />
        <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Ben Shelton"
            country="United States"
            age={21}
            height="193cm"
            plays="Left-handed (Two-handed backhand)"
            turnedPro={2022}
            grandSlams={0}
            ranking={14}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              코트 위의 다이너마이트. <strong className="text-red-600 dark:text-red-400">폭발적인 서브</strong>와 거침없는 플레이로 상대를 압도하는 미국의 슈퍼 루키.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              벤 쉘튼, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  좌손 강서브와 대담한 전진으로 큰 코트의 시간을 압축하는 미국의 차세대 간판
                </p>
              </div>
            </blockquote>
            <p>벤 쉘튼은 2022년 프로 데뷔 후 불과 1년 만에 US 오픈 4강에 오르며 혜성처럼 등장했다. 대학 테니스(플로리다 대학교) 챔피언 출신으로, 탄탄한 기본기와 프로 무대에서도 통하는 피지컬을 갖추고 있다.</p>
            <p>그의 등장은 미국 테니스계에 큰 충격을 주었다. 단순히 공을 강하게 치는 것을 넘어, 중요한 순간에 더 과감하게 공격하는 '강심장'을 가졌기 때문이다. 특히 '전화기 세레머니'는 그의 자신감을 상징하는 아이콘이 되었다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"폭발적인 서브 앤 포핸드 (Explosive Serve & Forehand)"</strong></p>
            <p>벤 쉘튼은 왼손잡이의 이점과 압도적인 파워를 바탕으로 경기를 지배하는 공격형 플레이어다.</p>

            <PlayerHexagonStats
              playerName="벤 쉘튼"
              attributes={[
                { name: '서브 (Serve)', score: 10, description: '투어에서 가장 강력한 서브 중 하나. 최고 시속 240km의 광속 서브와 왼손잡이 특유의 킥 서브가 위협적이다.' },
                { name: '포핸드 (Forehand)', score: 9.0, description: '엄청난 스윙 스피드에서 나오는 헤비 탑스핀 포핸드는 상대를 코트 밖으로 밀어낸다.' },
                { name: '운동 신경 (Athleticism)', score: 9.5, description: '미식축구 선수 출신답게 폭발적인 순발력과 점프력을 자랑한다.' },
                { name: '네트 플레이 (Net Play)', score: 8.5, description: '서브 앤 발리를 즐겨하며, 네트 앞에서의 반응 속도가 매우 빠르다.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '두려움이 없다. 큰 무대일수록 더 과감한 샷을 날리는 스타성을 가졌다.' },
              ]}
            />

            <p>플레이 스타일은 매우 공격적이고 직관적이다. 강력한 서브로 득점 기회를 만들고, 짧은 공은 주저 없이 포핸드 위너로 연결한다. 베이스라인 뒤에 머물기보다는 기회가 생기면 네트로 대시하여 압박하는 것을 선호한다.</p>
            <p>백핸드는 안정적이며, 수비 상황에서도 쉽게 밀리지 않는다. 하지만 아직 경험이 부족하여 샷 선택에서 실수가 나오기도 한다. 특히 리턴 게임에서 상대의 서브에 고전하는 경우가 종종 있다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>193cm의 큰 키와 다부진 체격은 테니스 선수로서 이상적인 조건을 갖추고 있다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">폭발적인 에너지</strong>는 경기 내내 유지되며, 5세트 접전에서도 지치지 않는 체력을 보여준다.</p>

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
                US 오픈 4강(2023) · 재팬 오픈 우승 · 서브 최고 시속 <strong className="text-green-700 dark:text-green-400 text-base">240km/h</strong>
              </p>
            </div>
            <p>긍정적이고 자신감이 넘친다. 관중의 환호를 즐기며, 경기 분위기를 주도하는 능력이 탁월하다. 아버지이자 코치인 브라이언 쉘튼(전 프로 선수)의 지도를 받아 멘탈적으로도 잘 무장되어 있다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">벤 쉘튼은 어떻게 여기까지 왔을까?</h2>
            <p>쉘튼은 테니스 코치인 아버지 밑에서 자랐지만, 어린 시절에는 미식축구에 더 관심이 많았다. 12살 때 본격적으로 테니스를 시작했고, 늦은 시작에도 불구하고 빠르게 성장하여 전미 대학 챔피언에 올랐다.</p>
            <p>2022년 프로 데뷔 후 챌린저 투어 3회 연속 우승이라는 진기록을 세우며 주목받았고, 2023년 호주 오픈 8강, US 오픈 4강에 오르며 세계적인 스타로 발돋움했다. 해외 여행 경험이 거의 없던 그가 1년 만에 전 세계를 누비는 탑 랭커가 된 것이다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>쉘튼의 잠재력을 폭발시킨 경기는 2023년 US 오픈 8강전이다.</p>

            <h3>2023년 US 오픈 8강</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">미국 더비 승리</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                같은 국적의 선배 <strong>프란시스 티아포</strong>를 상대로 3-1 승리를 거뒀다. 무더운 날씨와 홈 관중의 압박 속에서도 흔들리지 않고 자신의 플레이를 펼치며 4강행 티켓을 따냈다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 쉘튼의 시원시원한 플레이와 넘치는 에너지에 열광한다.</p>
            <p>강력한 서브 에이스가 터질 때의 짜릿함은 물론, 득점 후 보여주는 파이팅 넘치는 제스처는 보는 이들의 아드레날린을 솟구치게 한다. 항상 웃는 얼굴로 팬들을 대하는 친근한 모습도 매력 포인트다.</p>

            <h2 id="recent-form">요즘 벤 쉘튼의 경기력 흐름은 어떤가?</h2>
            <p>2023년 도쿄 재팬 오픈에서 생애 첫 투어 우승을 차지하며 상승세를 탔다. 2024년에도 꾸준히 상위권 성적을 유지하며 탑 10 진입을 노리고 있다.</p>

            <h3>최근 성적</h3>
            <p>클레이 코트 시즌에서도 휴스턴 오픈 우승을 차지하며 '하드 코트 전문'이라는 편견을 깼다. 경험이 쌓일수록 경기 운영 능력이 좋아지고 있어, 앞으로가 더욱 기대되는 선수다.</p>

            <h2 id="one-sentence-summary">벤 쉘튼, 한 문장으로 정리하면?</h2>
            <p>벤 쉘튼은 좌손 서브의 파괴력과 대담한 전진으로 큰 코트의 시간을 압축하며 경기를 단숨에 뒤집는 미국의 차세대 간판이다.</p>
            <p>그의 테니스는 화려한 장식보다는 효율을 위한 속도에 초점을 맞추고 있으며, 특히 좌손 서브의 파괴력이 뛰어나다. 폭발력과 회복력, 그리고 카운터 본능이 세계 상위권을 유지하게 해준다. 밝음과 예의를 겸비한 그의 테니스는 결과를 넘어 설득으로 남으며, 차세대 간판으로 기억될 것이다.</p>
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
