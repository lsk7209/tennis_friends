import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerHexagonStats from '@/components/players/PlayerHexagonStats';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, BookOpen, Crown } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: '카를로스 알카라스 — 세계랭킹 2위 | 플레이스타일·명장면·최근 경기력',
  description: "카를로스 알카라스 (Carlos Alcaraz) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
  keywords: ['카를로스 알카라스', 'Carlos Alcaraz', '테니스', 'ATP', '플레이스타일', '스페인 테니스', '공격형', '차세대 스타'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/carlos-alcaraz',
  },
  openGraph: {
    title: '카를로스 알카라스 — 세계랭킹 2위 | 플레이스타일·명장면·최근 경기력',
    description: '카를로스 알카라스의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/carlos-alcaraz',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '카를로스 알카라스 — 세계랭킹 2위 | 플레이스타일·명장면·최근 경기력',
    description: '카를로스 알카라스의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '카를로스 알카라스, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '카를로스 알카라스는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 카를로스 알카라스의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '카를로스 알카라스, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '카를로스 알카라스의 경기 스타일은 어떤가요?',
    a: '공격형 스타일로, 폭발적인 파워와 스피드를 겸비했습니다. 강력한 포핸드와 탁월한 운동능력으로 상대를 압도합니다.',
  },
  {
    q: '알카라즈의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 1위였으며, 현재는 2위를 유지하고 있습니다. 2022년 세계랭킹 1위를 달성했으며, 역대 최연소 기록을 세웠습니다.',
  },
  {
    q: '알카라즈의 강점은 무엇인가요?',
    a: '폭발적인 포핸드 파워와 탁월한 운동능력이 최대 강점입니다. 강력한 서브와 빠른 적응력으로 상대를 압도하는 능력이 뛰어납니다.',
  },
  {
    q: '알카라즈의 성장 배경은 어떤가요?',
    a: '일상에서 축적된 힘으로 성장했습니다. 어릴 때부터 테니스를 시작했고, 빠르게 성장하며 세계랭킹 1위를 달성했습니다.',
  },
  {
    q: '알카라즈를 한 문장으로 설명하면?',
    a: '폭발적인 파워와 젊은 에너지로 테니스계를 이끌어갈 스페인의 신성입니다.',
  },
];

export default function CarlosAlcarazPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="카를로스 알카라스"
        excerpt="폭발적인 파워와 젊은 에너지로 테니스계를 이끌어갈 스페인의 신성"
        image="/images/players/carlos-alcaraz.png"
      ><PersonSchema
          name="Carlos Alcaraz"
          nameKo="카를로스 알카라스"
          description="스페인 출신의 차세대 테니스 스타. 폭발적인 공격력과 뛰어난 운동 능력으로 주목받는 ATP 투어의 라이징 스타."
          image="/images/players/carlos-alcaraz.png"
          nationality="Spain"
          birthDate="2003-05-05"
          height="183"
          jobTitle="Professional Tennis Player"
          award={[
            'Grand Slam Singles Champion (4 titles)', 'ATP World No. 1', 'ATP Masters 1000 Champion'
          ]}
          url="https://tennisfriends.co.kr/players/carlos-alcaraz"
        />

      <BreadcrumbSchema
        items={[
          { name: '홈', item: 'https://tennisfriends.co.kr' },
          { name: '선수', item: 'https://tennisfriends.co.kr/players' },
          { name: '카를로스 알카라스', item: 'https://tennisfriends.co.kr/players/carlos-alcaraz' },
        ]}
      />
      <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Carlos Alcaraz"
            country="Spain"
            age={21}
            height="183cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2018}
            grandSlams={4}
            ranking={2}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              나달의 투지와 페더러의 공격성을 겸비한 <strong className="text-orange-600 dark:text-orange-400">차세대 테니스 황제</strong>. 폭발적인 포핸드와 환상적인 드롭샷으로 코트를 지배한다.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              카를로스 알카라스, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  폭발적인 파워와 젊은 에너지로 테니스계를 이끌어갈 스페인의 신성
                </p>
              </div>
            </blockquote>
            <p>카를로스 알카라스는 스페인 출신의 세계랭킹 2위 테니스 선수로, 폭발적인 파워와 젊은 에너지로 ATP 투어를 지배하고 있다. 세계랭킹 1위에 올랐던 경력의 소유자이며, 역대 최연소 기록을 세웠다. 강력한 포핸드와 탁월한 운동능력으로 상대를 압도하는 그의 테니스는 차세대 스타의 설계자로 평가받는다.</p>
            <p>그는 2022년 US 오픈 우승을 차지하며 그랜드 슬램 챔피언이 되었고, 같은 해 세계랭킹 1위를 달성했다. 최근 몇 시즌 동안 큰 대회에서도 안정적인 경기력을 보여주고 있으며, 특히 윔블던에서 우승을 거두며 기록을 계속 갱신하고 있다. 그의 테니스는 화려함보다는 효율을 추구하며, 특히 폭발적인 파워가 뛰어나다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"폭발적인 올라운더 (Explosive All-Rounder)"</strong></p>
            <p>카를로스 알카라스는 스페인 출신의 세계랭킹 2위 선수로, 공격형 스타일과 폭발적인 파워, 탁월한 운동능력이 특징인 ATP 투어의 차세대 스타다.</p>

            <PlayerHexagonStats
              playerName="카를로스 알카라스"
              attributes={[
                { name: '포핸드 (Forehand)', score: 10, description: '투어 최강의 파워와 스핀. 어디서든 위너를 만들어내는 해결사.' },
                { name: '스피드/풋워크', score: 10, description: '미친 활동량. 도저히 잡을 수 없는 공을 받아내 역습한다.' },
                { name: '드롭샷 (Drop Shot)', score: 9.8, description: '상대의 허를 찌르는 시그니처 무기. 위장 동작이 완벽하다.' },
                { name: '멘탈 (Mental)', score: 9.0, description: '중요한 순간에 과감해지는 강심장. 즐기는 테니스의 표본.' },
                { name: '서브 (Serve)', score: 8.5, description: '킥 서브와 슬라이스 서브를 섞어 상대를 코트 밖으로 몰아낸다.' },
              ]}
            />

            <p>플레이 스타일은 공격형으로 분류된다. 베이스라인에서 강력한 그라운드 스트로크를 구사하면서도, 기회가 생기면 네트로 전진해 발리로 마무리하는 능력을 갖추고 있다. 특히 폭발적인 포핸드 파워가 그의 시그니처 무기로, 강력한 포핸드와 탁월한 운동능력으로 상대를 압도한다.</p>

            <div className="not-prose my-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700">
                <Zap className="w-3 h-3 mr-1 inline" />
                폭발적인 파워
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Star className="w-3 h-3 mr-1 inline" />
                젊은 에너지
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                <Trophy className="w-3 h-3 mr-1 inline" />
                스페인의 신성
              </Badge>
            </div>
            <p>팬들이 그를 표현할 때 자주 쓰는 말은 <strong>"폭발적인 파워"</strong>, <strong>"젊은 에너지"</strong>, <strong>"스페인의 신성"</strong>이다. 그의 테니스는 화려한 장식보다는 효율을 추구하며, 특히 강력한 포핸드와 탁월한 운동능력으로 상대를 압도하는 능력이 뛰어나다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">카를로스 알카라스는 어떻게 여기까지 왔을까?</h2>
            <p>알카라즈의 성장 배경은 일상에서 축적된 힘으로 요약된다. 어릴 때부터 테니스를 시작했고, 빠르게 성장하며 세계랭킹 1위를 달성했다. 그의 테니스는 화려한 장식보다는 효율을 추구하며, 특히 폭발적인 파워가 뛰어나다.</p>
            <p>그는 2022년 US 오픈 우승을 차지하며 그랜드 슬램 챔피언이 되었고, 같은 해 세계랭킹 1위를 달성했다. 최근 몇 시즌 동안 큰 대회에서도 안정적인 경기력을 보여주고 있으며, 특히 윔블던에서 우승을 거두며 기록을 계속 갱신하고 있다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>알카라즈의 커리어를 상징하는 경기는 2022년 US 오픈 우승과 2024년 윔블던 우승이다.</p>

            <h3>2022년 US 오픈 우승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">커리어 전성기의 정점</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>2022년 세계랭킹 1위 달성</strong>과 <strong>US 오픈 우승</strong>으로 전성기를 구가하기 시작했다. 특히 역대 최연소 기록을 세우며 차세대 스타로 주목받기 시작했다.
              </p>
            </div>
            <p>2022년 그는 세계랭킹 1위를 달성하며 역대 최연소 기록을 세웠다. 같은 해 US 오픈에서 우승을 거두며 그랜드 슬램 챔피언이 되었다. 이 시기 동안 폭발적인 파워와 젊은 에너지가 그의 시그니처 무기로 자리 잡았다. 특히 강력한 포핸드와 탁월한 운동능력으로 상대를 압도하는 능력이 세계 최고 수준임을 증명했다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>알카라즈가 세계 상위권을 유지하는 힘은 폭발적인 포핸드 파워, 탁월한 운동능력, 그리고 빠른 적응력에서 나온다.</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              기술적 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-green-700 dark:text-green-400" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0">
                  핵심 통계
                </p>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0">
                포핸드 위너 <strong className="text-green-700 dark:text-green-400 text-base">투어 1위</strong> · 드롭샷 성공률 <strong className="text-green-700 dark:text-green-400 text-base">높음</strong> · 빠른 적응력
              </p>
            </div>
            <p>포인트 사이 그는 스트링을 훑고 두 번의 깊은 호흡으로 리듬을 고정한다. 스코어가 흔들려도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않는다. 타이브레이크 초반에는 네트를 넉넉히 넘기는 구질로 높이와 길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다. 빠른 적응력이 특징이다.</p>

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              전술적 다양성
            </h3>
            <p>표면별 전개가 뛰어나다. 하드에서는 퍼스트 서브 확률과 3구 패턴의 속도로 주도권을 잡고, 리턴 게임에서는 중앙 깊은 볼로 각을 지워 다음 볼에서 속도를 끌어올린다. 잔디에서는 토스를 낮추고 백스윙을 줄여 타점을 앞에 고정, 슬라이스 리턴을 섞어 초반 속도를 통제한다. 점토에서는 회전을 더해 낙구를 안정시키고 랠리의 길이를 받아들이되, 네 번째나 다섯 번째 스트로크에서 드롭과 슬라이스를 섞어 템포를 흔든다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들이 알카라즈에게 열광하는 이유는 그의 폭발적인 파워와 젊은 에너지, 그리고 차세대 스타로서의 잠재력 때문이다.</p>
            <p>그의 경기는 언제나 예측 불가능한 드라마를 만들어낸다. 위기 상황에서도 포기하지 않는 끈기와 열정은 팬들에게 큰 감동을 준다. 또한 코트 밖에서의 겸손하고 성실한 태도 역시 팬들의 사랑을 받는 이유다.</p>

            <h2 id="recent-form">요즘 카를로스 알카라스의 경기력 흐름은 어떤가?</h2>
            <p>최근 알카라즈의 경기력은 매우 안정적이다. 큰 대회에서도 꾸준히 상위권 성적을 유지하고 있으며, 특히 윔블던 우승을 통해 자신감을 더욱 높였다.</p>

            <h3>최근 성적</h3>
            <p>최근 그랜드 슬램 대회에서의 성적은 매우 뛰어나다. 2024년 윔블던 우승을 차지하며 자신의 실력을 다시 한번 입증했다. 또한 마스터스 1000 시리즈 대회에서도 꾸준히 좋은 성적을 거두고 있다.</p>

            <h3>경기력 분석</h3>
            <p>경기력 측면에서는 서브와 포핸드가 더욱 강력해졌다. 특히 서브의 정확도와 파워가 향상되어 서비스 게임을 더욱 쉽게 가져가는 모습을 보여준다. 또한 멘탈적인 부분에서도 성숙해져 위기 상황에서도 침착하게 경기를 풀어가는 능력이 돋보인다.</p>

            <h2 id="one-sentence-summary">카를로스 알카라스, 한 문장으로 정리하면?</h2>
            <p>카를로스 알카라스는 폭발적인 파워와 젊은 에너지로 테니스계를 이끌어갈 스페인의 신성이다.</p>
            <p>그의 테니스는 화려함보다는 효율을 추구하며, 특히 강력한 포핸드와 탁월한 운동능력으로 상대를 압도하는 능력이 뛰어나다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 빠른 적응력이 세계 상위권을 유지하게 해준다. 결과보다 태도를 중시하는 그의 테니스는 결과를 넘어 설득으로 남으며, 차세대 스타로 기억될 것이다.</p>
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
