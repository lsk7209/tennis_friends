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
  title: '니콜라스 자리 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '니콜라스 자리의 장신 서브와 파워풀한 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 칠레 테니스의 자존심을 지키는 2미터 거인의 강력한 한 방.',
  keywords: ['니콜라스 자리', 'Nicolas Jarry', '테니스', 'ATP', '플레이스타일', '칠레 테니스', '장신', '서브'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/nicolas-jarry',
  },
  openGraph: {
    title: '니콜라스 자리 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '니콜라스 자리의 장신 서브와 파워풀한 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/nicolas-jarry',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '니콜라스 자리 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '니콜라스 자리의 장신 서브와 파워풀한 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '니콜라스 자리, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '니콜라스 자리는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 니콜라스 자리의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '니콜라스 자리, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '니콜라스 자리의 경기 스타일은 어떤가요?',
    a: '201cm의 장신에서 뿜어져 나오는 강력한 서브와 포핸드가 주무기인 공격형 플레이어입니다. 짧은 랠리로 승부를 봅니다.',
  },
  {
    q: '자리의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 16위이며, 현재는 20위권 초중반을 유지하고 있습니다. 도핑 징계 이후 성공적으로 복귀하여 커리어 하이를 경신했습니다.',
  },
  {
    q: '자리의 강점은 무엇인가요?',
    a: '압도적인 서브 파워와 높은 타점에서 내리꽂는 포핸드입니다. 특히 클레이 코트에서도 강한 면모를 보입니다.',
  },
  {
    q: '자리의 약점은 무엇인가요?',
    a: '큰 키로 인해 움직임이 다소 둔하며, 낮은 공 처리에 어려움을 겪습니다. 리턴 게임에서의 수비력도 보완이 필요합니다.',
  },
  {
    q: '자리를 한 문장으로 설명하면?',
    a: '칠레 테니스의 부활을 알리는 거인입니다.',
  },
];

export default function NicolasJarryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="니콜라스 자리"
        excerpt="칠레 테니스의 자존심을 지키는 2미터 거인의 강력한 한 방"
        image="/images/players/nicolas-jarry.png"
      ><PersonSchema
          name="Nicolas Jarry"
          nameKo="니콜라스 자리"
          description="칠레 출신의 빅 서버. 강력한 서브와 높은 신장을 활용한 플레이로 주목받는 선수."
          image="/images/players/nicolas-jarry.png"
          nationality="Chile"
          birthDate="1995-10-11"
          height="201"
          jobTitle="Professional Tennis Player"
          award={[
            'ATP 250 Champion (multiple titles)'
          ]}
          url="https://tennisfriends.co.kr/players/nicolas-jarry"
        />
        <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Nicolas Jarry"
            country="Chile"
            age={28}
            height="201cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2014}
            grandSlams={0}
            ranking={24}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              안데스 산맥의 거인. <strong className="text-red-600 dark:text-red-400">압도적인 피지컬</strong>에서 나오는 파괴력으로 상대를 제압하는 칠레의 테니스 영웅.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              니콜라스 자리, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  칠레 테니스의 자존심을 지키는 2미터 거인의 강력한 한 방
                </p>
              </div>
            </blockquote>
            <p>니콜라스 자리는 칠레 테니스의 전설인 하이메 필롤의 손자로, 테니스 명문가 출신이다. 201cm의 엄청난 키를 바탕으로 투어에서 가장 강력한 서브를 구사하는 선수 중 한 명이다.</p>
            <p>한때 도핑 위반으로 11개월 자격 정지를 당하며 랭킹이 소멸되는 시련을 겪었으나, 밑바닥부터 다시 시작하여 세계 랭킹 20위권까지 올라온 인간 승리의 주인공이기도 하다. 그의 복귀 스토리는 많은 팬들에게 감동을 주었다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"파워 서버 & 포핸드 히터 (Power Server & Forehand Hitter)"</strong></p>
            <p>자리는 큰 키를 활용한 고공 폭격으로 경기를 단순하게 풀어가는 스타일이다.</p>

            <PlayerHexagonStats
              playerName="니콜라스 자리"
              attributes={[
                { name: '서브 (Serve)', score: 9.5, description: '201cm의 타점에서 내리꽂는 서브는 알고도 막기 힘들다. 세컨드 서브의 킥도 위협적이다.' },
                { name: '포핸드 (Forehand)', score: 9.0, description: '플랫하게 때리는 포핸드는 엄청난 속도로 코트를 가른다. 원투 펀치의 핵심이다.' },
                { name: '네트 플레이 (Net Play)', score: 8.0, description: '긴 팔을 이용한 리치(reach)가 좋아 네트 앞에서의 장악력이 뛰어나다.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '징계를 이겨내고 돌아온 만큼 정신력이 강하다. 위기 상황에서도 흔들리지 않는다.' },
                { name: '움직임 (Movement)', score: 7.0, description: '큰 키로 인해 좌우 움직임이 다소 느리다. 이를 보완하기 위해 공격적인 포지션을 취한다.' },
              ]}
            />

            <p>플레이 스타일은 '닥공(닥치고 공격)'에 가깝다. 서브로 상대를 무너뜨리고, 리턴이 넘어오면 강력한 포핸드로 마무리한다. 랠리를 길게 가져가기보다는 3구 안에 승부를 보는 것을 선호한다.</p>
            <p>의외로 클레이 코트 성적이 좋다. 높은 바운드를 이용해 자신의 타점인 어깨 높이에서 공을 강하게 때릴 수 있기 때문이다. 백핸드는 수비적인 편이지만, 기회가 오면 다운더라인으로 공격하기도 한다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>201cm, 90kg의 거구다. 압도적인 피지컬에서 나오는 힘은 타의 추종을 불허한다. 다만 큰 키로 인해 무릎 부상의 위험이 있고, 체력 소모가 심한 편이라 경기 후반으로 갈수록 집중력이 떨어질 수 있다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">압도적인 높이</strong>는 그의 가장 큰 자산이다.</p>

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
                ATP 투어 3승 · 로마 마스터스 준우승(2024) · 서브 에이스 <strong className="text-green-700 dark:text-green-400 text-base">상위 5%</strong>
              </p>
            </div>
            <p>가족의 지지가 큰 힘이 된다. 아내와 두 아들이 투어에 동행하며 심리적인 안정을 주고 있다. 코트 위에서는 감정을 잘 드러내지 않고 묵묵히 자신의 플레이에 집중하는 스타일이다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">니콜라스 자리는 어떻게 여기까지 왔을까?</h2>
            <p>자리는 2014년 프로에 데뷔하여 꾸준히 성장했으나, 2020년 도핑 검사에서 금지 약물 성분이 검출되어 11개월 자격 정지를 받았다. (오염된 비타민 보충제 섭취가 원인으로 밝혀짐)</p>
            <p>랭킹이 소멸된 상태에서 복귀한 그는 챌린저 투어부터 다시 시작해야 했다. 하지만 포기하지 않고 묵묵히 땀을 흘린 결과, 2023년 산티아고 오픈과 제네바 오픈에서 우승하며 화려하게 부활했다. 2024년에는 마스터스 결승까지 오르며 전성기를 맞이했다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>자리의 저력을 보여준 경기는 2024년 로마 마스터스 준결승이다.</p>

            <h3>2024년 로마 마스터스 준결승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">생애 첫 마스터스 결승행</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                미국의 <strong>토미 폴</strong>을 상대로 풀세트 접전 끝에 승리했다. 강력한 서브와 포핸드로 상대를 압박하며 생애 첫 마스터스 1000 시리즈 결승 진출이라는 쾌거를 이뤘다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 자리의 시원시원한 플레이와 가족 사랑에 감동한다.</p>
            <p>복잡한 전술보다는 힘 대 힘으로 맞붙는 그의 경기는 보는 맛이 있다. 또한 경기 후 코트로 들어온 아들을 안아주는 모습은 '아들 바보'의 면모를 보여주며 팬들의 마음을 따뜻하게 만든다.</p>

            <h2 id="recent-form">요즘 니콜라스 자리의 경기력 흐름은 어떤가?</h2>
            <p>2024년 로마 마스터스 준우승으로 커리어 하이를 찍었으나, 이후 약간의 부침을 겪고 있다. 하지만 여전히 강력한 서브를 보유하고 있어 언제든 상위권 선수들을 위협할 수 있는 존재다.</p>

            <h3>최근 성적</h3>
            <p>큰 키에서 나오는 서브는 여전히 투어 최고 수준이다. 리턴과 수비력만 조금 더 보완한다면 탑 10 진입도 충분히 가능한 선수다.</p>

            <h2 id="one-sentence-summary">니콜라스 자리, 한 문장으로 정리하면?</h2>
            <p>니콜라스 자리는 장신 서브와 강력한 그라운드 스트로크로 칠레 테니스의 간판으로 떠오르는 선수다.</p>
            <p>그의 테니스는 단순하지만 강력하다. 시련을 딛고 일어선 불굴의 의지와 가족을 사랑하는 따뜻한 마음을 가진 그는, 칠레를 넘어 남미 테니스를 대표하는 거인으로 우뚝 섰다.</p>
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
