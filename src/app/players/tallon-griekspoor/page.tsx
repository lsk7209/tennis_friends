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
  title: '탈론 크리에크스푸르 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '탈론 크리에크스푸르의 강력한 서브와 그라운드 스트로크 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 네덜란드 테니스의 희망으로 떠오르는 공격형 베이스라이너.',
  keywords: ['탈론 크리에크스푸르', 'Tallon Griekspoor', '테니스', 'ATP', '플레이스타일', '네덜란드 테니스', '서브', '그라운드 스트로크'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/tallon-griekspoor',
  },
  openGraph: {
    title: '탈론 크리에크스푸르 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '탈론 크리에크스푸르의 강력한 서브와 그라운드 스트로크 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/tallon-griekspoor',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '탈론 크리에크스푸르 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '탈론 크리에크스푸르의 강력한 서브와 그라운드 스트로크 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '탈론 크리에크스푸르, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '탈론 크리에크스푸르는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 탈론 크리에크스푸르의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '탈론 크리에크스푸르, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '탈론 크리에크스푸르의 경기 스타일은 어떤가요?',
    a: '강력한 서브와 포핸드를 앞세운 공격적인 베이스라이너입니다. 빠른 템포로 상대를 압박하는 것을 즐깁니다.',
  },
  {
    q: '크리에크스푸르의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 21위이며, 현재는 20-30위권을 오가고 있습니다. 2023년 푸네 오픈 우승으로 첫 투어 타이틀을 획득했습니다.',
  },
  {
    q: '크리에크스푸르의 강점은 무엇인가요?',
    a: '묵직한 포핸드 스트로크와 높은 서브 성공률, 그리고 홈 코트(실내 하드)에서의 강세가 특징입니다.',
  },
  {
    q: '크리에크스푸르의 약점은 무엇인가요?',
    a: '백핸드 쪽에서의 수비가 상대적으로 약하며, 랠리가 길어질수록 범실이 나오는 경향이 있습니다.',
  },
  {
    q: '크리에크스푸르를 한 문장으로 설명하면?',
    a: '네덜란드 테니스의 부활을 이끄는 파워풀한 공격수입니다.',
  },
];

export default function TallonGriekspoorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="탈론 크리에크스푸르"
        excerpt="네덜란드 테니스의 희망으로 떠오르는 공격형 베이스라이너"
        image="/images/players/tallon-griekspoor.png"
      ><PersonSchema
          name="Tallon Griekspoor"
          nameKo="탈론 그릭스푸르"
          description="네덜란드 출신의 파워 테니스 선수. 강력한 서브와 공격적인 플레이로 주목받는 선수."
          image="/images/players/tallon-griekspoor.png"
          nationality="Netherlands"
          birthDate="1996-07-02"
          height="188"
          jobTitle="Professional Tennis Player"
          award={[
            'ATP 250 Champion', 'Davis Cup Champion'
          ]}
          url="https://tennisfriends.co.kr/players/tallon-griekspoor"
        />

      <BreadcrumbSchema
        items={[
          { name: '홈', item: 'https://tennisfriends.co.kr' },
          { name: '선수', item: 'https://tennisfriends.co.kr/players' },
          { name: '탈론 크리에크스푸르', item: 'https://tennisfriends.co.kr/players/tallon-griekspoor' },
        ]}
      />
      <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Tallon Griekspoor"
            country="Netherlands"
            age={27}
            height="188cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2015}
            grandSlams={0}
            ranking={27}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              오렌지 군단의 에이스. <strong className="text-orange-600 dark:text-orange-400">강력한 포핸드</strong>와 서브로 코트를 장악하는 네덜란드의 테니스 스타.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              탈론 크리에크스푸르, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  네덜란드 테니스의 희망으로 떠오르는 공격형 베이스라이너
                </p>
              </div>
            </blockquote>
            <p>탈론 크리에크스푸르는 리하르트 크라이첵 이후 오랫동안 침체기였던 네덜란드 남자 테니스에 등장한 새로운 희망이다. 2021년 챌린저 투어에서 무려 8번이나 우승하며 단일 시즌 최다 우승 기록을 세웠고, 이를 발판으로 ATP 투어에 성공적으로 안착했다.</p>
            <p>그의 테니스는 시원시원하다. 강력한 서브와 포핸드로 빠르게 포인트를 결정짓는 스타일은 현대 테니스의 트렌드에 잘 부합한다. 특히 실내 하드 코트에서 강한 면모를 보이며, 자국에서 열리는 로테르담 오픈이나 스헤르토헨보스 오픈에서 좋은 성적을 거두고 있다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
            <p>탈론 크리에크스푸르는 네덜란드 출신의 선수로, 강력한 서브와 포핸드를 앞세운 공격적인 플레이가 특징이다.</p>

            <PlayerHexagonStats
              playerName="탈론 크리에크스푸르"
              attributes={[
                { name: '포핸드 (Forehand)', score: 9.0, description: '그의 가장 큰 무기. 베이스라인 어디서든 위너를 만들어낼 수 있는 파워를 가졌다.' },
                { name: '서브 (Serve)', score: 8.8, description: '퍼스트 서브의 위력이 상당하며, 에이스 생산 능력이 좋다.' },
                { name: '공격성 (Aggression)', score: 8.5, description: '수비보다는 공격을 선호한다. 먼저 주도권을 잡고 상대를 흔드는 플레이를 즐긴다.' },
                { name: '백핸드 (Backhand)', score: 8.0, description: '안정적이지만 포핸드만큼 위협적이지는 않다. 주로 랠리를 이어가는 용도로 사용한다.' },
                { name: '멘탈 (Mental)', score: 8.0, description: '승부욕이 강하고 파이팅이 넘친다. 홈 팬들의 응원을 받으면 경기력이 배가된다.' },
              ]}
            />

            <p>플레이 스타일은 전형적인 '서브 앤 포핸드'다. 강력한 서브로 상대의 리턴을 흔들고, 짧게 넘어온 공을 포핸드로 마무리하는 패턴을 선호한다. 스트로크의 파워가 좋아 랠리 싸움에서도 쉽게 밀리지 않는다.</p>
            <p>네트 플레이 빈도는 높지 않지만, 기회가 오면 과감하게 들어와 발리로 마무리한다. 최근에는 백핸드 다운더라인 공격 빈도를 높이며 공격 루트를 다양화하고 있다. 다만 움직임이 아주 빠른 편은 아니라 수비 상황에서는 다소 고전하기도 한다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>188cm의 건장한 체격을 바탕으로 묵직한 공을 뿌린다. 상체 근력이 좋아 스윙 스피드가 빠르다. 체력적으로도 많이 성장하여 3세트 접전이나 5세트 경기에서도 꾸준한 퍼포먼스를 보여준다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">폭발적인 임팩트</strong>는 그의 트레이드마크다.</p>

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
                챌린저 투어 단일 시즌 최다 우승(8회) · ATP 투어 2승 · 실내 하드 코트 승률 <strong className="text-green-700 dark:text-green-400 text-base">우수함</strong>
              </p>
            </div>
            <p>자신감이 넘친다. 챌린저 무대를 평정하며 쌓은 '이기는 습관'이 투어 무대에서도 긍정적으로 작용하고 있다. 홈 경기나 국가대항전(데이비스컵)에서 보여주는 투지는 팀의 사기를 높이는 데 큰 역할을 한다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">탈론 크리에크스푸르는 어떻게 여기까지 왔을까?</h2>
            <p>크리에크스푸르는 테니스 가족(형들도 테니스 선수) 사이에서 자라 자연스럽게 라켓을 잡았다. 주니어 시절에는 크게 주목받지 못했으나, 2021년 챌린저 투어에서 맹활약하며 잠재력을 터뜨렸다.</p>
            <p>2023년 인도 푸네 오픈에서 생애 첫 ATP 투어 우승을 차지했고, 이어 자국에서 열린 스헤르토헨보스 오픈(잔디)에서도 우승하며 멀티 타이틀 홀더가 되었다. 이제는 네덜란드를 넘어 세계 무대에서 경쟁하는 탑 랭커로 성장했다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>크리에크스푸르의 저력을 보여준 경기는 2023년 로테르담 오픈 16강전이다.</p>

            <h3>2023년 로테르담 오픈 16강</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">홈 팬들을 열광시키다</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                당시 세계랭킹 17위였던 <strong>알렉산더 즈베레프</strong>를 상대로 2-1 역전승을 거뒀다. 홈 팬들의 열광적인 응원 속에 강력한 서브와 포핸드로 상대를 압도하며 8강에 진출했다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 크리에크스푸르의 파워풀한 테니스와 열정적인 모습에 매력을 느낀다.</p>
            <p>시원한 위너가 터질 때의 쾌감은 그의 경기를 보는 가장 큰 이유다. 또한 네덜란드 특유의 오렌지색 유니폼이 잘 어울리며, 코트 위에서 보여주는 파이팅 넘치는 제스처는 관중을 흥분시킨다.</p>

            <h2 id="recent-form">요즘 탈론 크리에크스푸르의 경기력 흐름은 어떤가?</h2>
            <p>2024년에도 꾸준히 투어 대회를 소화하며 랭킹을 유지하고 있다. 로테르담 오픈 4강에 오르는 등 여전히 경쟁력 있는 모습을 보여주고 있다.</p>

            <h3>최근 성적</h3>
            <p>두바이 챔피언십 8강, 마드리드 오픈 32강 등 꾸준히 성적을 내고 있다. 탑 10 선수들을 상대로도 대등한 경기를 펼치며 '다크호스'로서의 면모를 유감없이 발휘하고 있다. 그랜드 슬램에서의 획기적인 성적만 더해진다면 더 높은 곳으로 올라갈 수 있을 것이다.</p>

            <h2 id="one-sentence-summary">탈론 크리에크스푸르, 한 문장으로 정리하면?</h2>
            <p>탈론 크리에크스푸르는 강력한 서브와 그라운드 스트로크로 네덜란드 테니스의 희망으로 떠오르는 선수다.</p>
            <p>그의 테니스는 힘으로 상대를 누르고 속도로 제압하며, 특히 묵직한 포핸드와 서브가 뛰어나다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 홈 코트에서의 폭발력이 세계 상위권을 유지하게 해준다. 열정과 자부심을 중시하는 그의 테니스는 결과를 넘어 설득으로 남으며, 네덜란드 테니스의 상징으로 기억될 것이다.</p>
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
