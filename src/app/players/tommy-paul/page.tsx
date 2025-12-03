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
  title: '토미 폴 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: "토미 폴 (Tommy Paul) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
  keywords: ['토미 폴', 'Tommy Paul', '테니스', 'ATP', '플레이스타일', '미국 테니스', '하드 전문', '속도와 각도'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/tommy-paul',
  },
  openGraph: {
    title: '토미 폴 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '토미 폴의 하드 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/tommy-paul',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '토미 폴 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '토미 폴의 하드 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '토미 폴, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '토미 폴은 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 토미 폴의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '토미 폴, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '토미 폴의 경기 스타일은 어떤가요?',
    a: '투어에서 가장 빠른 발을 가진 선수 중 한 명으로, 뛰어난 수비 능력과 역습이 특징입니다. 네트 플레이에도 능합니다.',
  },
  {
    q: '토미 폴의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 12위이며, 현재는 10위권 진입을 노리고 있습니다. 2023년 호주 오픈 4강 진출로 커리어 하이를 기록했습니다.',
  },
  {
    q: '토미 폴의 강점은 무엇인가요?',
    a: '폭발적인 스피드와 민첩성, 그리고 강력한 포핸드 역크로스 샷이 강점입니다. 체력 또한 매우 우수합니다.',
  },
  {
    q: '토미 폴의 약점은 무엇인가요?',
    a: '서브의 파워가 최정상급 선수들에 비해 다소 약한 편이며, 가끔씩 나오는 집중력 저하가 아쉬운 점으로 꼽힙니다.',
  },
  {
    q: '토미 폴을 한 문장으로 설명하면?',
    a: '미국 테니스의 황금 세대를 이끄는 가장 빠르고 다재다능한 선수입니다.',
  },
];

export default function TommyPaulPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="토미 폴"
        excerpt="속도와 각도로 하드코트를 조립하는 미국의 대표 선수"
        image="/images/players/tommy-paul.png"
      ><PersonSchema
          name="Tommy Paul"
          nameKo="토미 폴"
          description="미국 출신의 올라운드 플레이어. 균형잡힌 경기력과 안정적인 플레이로 주목받는 선수."
          image="/images/players/tommy-paul.png"
          nationality="United States"
          birthDate="1997-05-17"
          height="185"
          jobTitle="Professional Tennis Player"
          award={[
            'Australian Open Semifinalist', 'ATP 500 Champion'
          ]}
          url="https://tennisfriends.co.kr/players/tommy-paul"
        />

      <BreadcrumbSchema
        items={[
          { name: '홈', item: 'https://tennisfriends.co.kr' },
          { name: '선수', item: 'https://tennisfriends.co.kr/players' },
          { name: '토미 폴', item: 'https://tennisfriends.co.kr/players/tommy-paul' },
        ]}
      />
      <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Tommy Paul"
            country="United States"
            age={27}
            height="185cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2015}
            grandSlams={0}
            ranking={14}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              코트 위의 스피드 레이서. <strong className="text-orange-600 dark:text-orange-400">폭발적인 기동력</strong>과 감각적인 샷 메이킹으로 상대를 무너뜨리는 미국의 테크니션.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              토미 폴, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  속도와 각도로 하드코트를 조립하는 미국의 대표 선수
                </p>
              </div>
            </blockquote>
            <p>토미 폴은 2015년 프랑스 오픈 주니어 우승자 출신으로, 오랜 기대주 생활 끝에 최근 잠재력을 폭발시킨 선수다. 2023년 호주 오픈에서 4강에 오르며 앤디 로딕 이후 14년 만에 호주 오픈 4강에 진출한 미국 선수가 되었다.</p>
            <p>그의 가장 큰 무기는 '발'이다. 투어에서 손꼽히는 스피드로 도저히 받을 수 없을 것 같은 공을 받아내고, 오히려 위너로 연결한다. 전형적인 미국식 파워 테니스와는 달리, 정교한 기술과 네트 플레이를 섞어 쓰는 올라운더 스타일로 팬들에게 보는 재미를 선사한다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"발 빠른 카운터 펀처 & 올라운더 (Speedy Counter-Puncher & All-Rounder)"</strong></p>
            <p>토미 폴은 미국 선수로는 드물게 클레이 코트에서도 강점을 보이는 올라운더로, 빠른 발을 이용한 수비와 역습이 특징이다.</p>

            <PlayerHexagonStats
              playerName="토미 폴"
              attributes={[
                { name: '스피드 (Speed)', score: 9.5, description: '투어 최상위권의 기동력. 코트 커버 범위가 넓어 수비에서 공격으로 전환하는 속도가 빠르다.' },
                { name: '포핸드 (Forehand)', score: 8.8, description: '헤비 탑스핀이 걸린 포핸드는 상대를 베이스라인 뒤로 밀어낸다. 역크로스 샷이 일품이다.' },
                { name: '네트 플레이 (Net Play)', score: 8.5, description: '복식 경험이 풍부하여 발리 감각이 뛰어나다. 기회가 오면 주저 없이 네트로 대시한다.' },
                { name: '백핸드 (Backhand)', score: 8.2, description: '안정적이며, 다운더라인 공격 옵션도 갖추고 있다.' },
                { name: '멘탈 (Mental)', score: 8.0, description: '과거에 비해 집중력이 많이 좋아졌으나, 여전히 기복이 있는 편이다.' },
              ]}
            />

            <p>플레이 스타일은 매우 역동적이다. 베이스라인 뒤에서 끈질기게 수비하다가도, 상대의 짧은 공을 놓치지 않고 파고들어 마무리한다. 특히 포핸드 역크로스는 각도가 예리하여 상대가 예측하기 어렵다.</p>
            <p>서브는 파워보다는 코스 공략에 중점을 둔다. 킥 서브를 잘 활용하여 상대를 코트 밖으로 몰아내고, 빈 공간으로 공격하는 패턴을 즐긴다. 클레이 코트에서의 경험 덕분에 슬라이드와 드롭샷 등 다양한 기술을 구사할 줄 안다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>185cm로 테니스 선수 치고는 아주 큰 키는 아니지만, 탄탄한 근육질 몸매에서 나오는 파워와 스피드가 인상적이다. 균형 감각이 좋아 어려운 자세에서도 무너지지 않고 샷을 날린다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">지치지 않는 체력</strong>은 장기전에서 그를 더욱 빛나게 한다.</p>

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
                호주 오픈 4강 · 프랑스 오픈 주니어 우승 · 하드 코트 승률 <strong className="text-green-700 dark:text-green-400 text-base">상승세</strong>
              </p>
            </div>
            <p>긍정적이고 낙천적인 성격이다. 경기 중 실수를 해도 웃어넘기는 여유가 있다. 하지만 승부처에서는 놀라운 집중력을 발휘하며, 특히 미국 팬들의 응원을 받으면 경기력이 급상승한다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">토미 폴은 어떻게 여기까지 왔을까?</h2>
            <p>폴은 주니어 시절 테일러 프리츠, 라일리 오펠카와 함께 미국 테니스의 황금 세대로 불렸다. 2015년 프랑스 오픈 주니어 결승에서 프리츠를 꺾고 우승하며 가장 먼저 두각을 나타냈으나, 프로 무대 적응에 다소 시간이 걸렸다.</p>
            <p>꾸준히 50-100위권을 오가던 그는 2021년 스톡홀름 오픈에서 첫 투어 우승을 차지하며 반전의 계기를 마련했다. 이후 2023년 호주 오픈 4강 진출로 잠재력을 폭발시켰고, 이제는 탑 10 진입을 눈앞에 둔 정상급 선수로 성장했다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>토미 폴의 진가를 보여준 경기는 2023년 호주 오픈 8강전이다.</p>

            <h3>2023년 호주 오픈 8강</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">미국 더비 승리</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                같은 국적의 신성 <strong>벤 쉘튼</strong>을 상대로 노련미와 체력적 우위를 앞세워 3-1 승리를 거뒀다. 이 승리로 생애 첫 그랜드 슬램 4강이라는 쾌거를 이뤘다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 토미 폴의 다이내믹한 플레이와 훈훈한 외모를 좋아한다.</p>
            <p>코트 위를 날아다니는 듯한 그의 움직임은 보는 이들에게 시원함을 준다. 또한 패션 브랜드 'New Balance'의 모델로 활동할 만큼 스타일이 좋고, 팬 서비스도 훌륭하다. 항상 밝은 미소로 경기에 임하는 모습이 긍정적인 에너지를 전달한다.</p>

            <h2 id="recent-form">요즘 토미 폴의 경기력 흐름은 어떤가?</h2>
            <p>2024년 댈러스 오픈 우승과 델레이 비치 오픈 준우승으로 시즌 초반부터 뜨거운 폼을 보여주고 있다.</p>

            <h3>최근 성적</h3>
            <p>인디언 웰스 마스터스 4강에 오르며 마스터스 무대에서도 경쟁력을 입증했다. 특히 상위 랭커들을 상대로도 대등한 경기를 펼치며 '자이언트 킬러'로서의 면모를 유감없이 발휘하고 있다. 올 시즌 탑 10 진입이 유력해 보인다.</p>

            <h2 id="one-sentence-summary">토미 폴, 한 문장으로 정리하면?</h2>
            <p>토미 폴은 속도와 각도로 하드코트를 조립하는 미국의 대표 선수다.</p>
            <p>그의 테니스는 속도로 공간을 벌리고 각으로 문장을 닫으며, 특히 가벼운 발과 예리한 각이 뛰어나다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 과감한 전진이 세계 상위권을 유지하게 해준다. 밝음과 예의를 중시하는 그의 테니스는 결과를 넘어 설득으로 남으며, 미국 테니스의 상징으로 기억될 것이다.</p>
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
