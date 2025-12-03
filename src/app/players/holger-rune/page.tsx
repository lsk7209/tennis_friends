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
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: '홀거 루네 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '홀거 루네의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 불꽃과 계산 사이의 대담함으로 테니스계를 흔드는 덴마크의 차세대 스타.',
  keywords: ['홀거 루네', 'Holger Rune', '테니스', 'ATP', '플레이스타일', '덴마크 테니스', '공격형', '불꽃과 계산'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/holger-rune',
  },
  openGraph: {
    title: '홀거 루네 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '홀거 루네의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/holger-rune',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '홀거 루네 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '홀거 루네의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '홀거 루네, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '홀거 루네는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 홀거 루네의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '홀거 루네, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '홀거 루네의 경기 스타일은 어떤가요?',
    a: '매우 공격적인 베이스라이너로, 강력한 양손 백핸드와 빠른 발을 이용한 코트 커버가 특징입니다. 네트 플레이와 드롭샷 등 다양한 기술을 구사합니다.',
  },
  {
    q: '루네의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 4위이며, 현재는 10위권을 유지하고 있습니다. 2022년 파리 마스터스 우승으로 큰 주목을 받았습니다.',
  },
  {
    q: '루네의 강점은 무엇인가요?',
    a: '투어 최고 수준의 백핸드와 지칠 줄 모르는 체력, 그리고 승부처에서의 과감함이 강점입니다.',
  },
  {
    q: '루네의 약점은 무엇인가요?',
    a: '경기 중 감정 조절에 어려움을 겪는 경우가 있으며, 서브의 일관성이 다소 부족하다는 평가를 받습니다.',
  },
  {
    q: '루네를 한 문장으로 설명하면?',
    a: '거침없는 패기와 천재적인 재능으로 무장한 덴마크의 테니스 악동이자 차세대 스타입니다.',
  },
];

export default function HolgerRunePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="홀거 루네"
        excerpt="불꽃과 계산 사이의 대담함으로 테니스계를 흔드는 덴마크의 차세대 스타"
        image="/images/players/holger-rune.png"
      ><PersonSchema
          name="Holger Rune"
          nameKo="홀거 루네"
          description="덴마크 출신의 차세대 테니스 스타. 공격적인 플레이와 강한 정신력으로 주목받는 선수."
          image="/images/players/holger-rune.png"
          nationality="Denmark"
          birthDate="2003-04-29"
          height="185"
          jobTitle="Professional Tennis Player"
          award={[
            'ATP Masters 1000 Champion', 'ATP NextGen Finals Champion'
          ]}
          url="https://tennisfriends.co.kr/players/holger-rune"
        />
        <FAQSchema faqs={faqs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerProfileCard
            name="Holger Rune"
            country="Denmark"
            age={21}
            height="188cm"
            plays="Right-handed (Two-handed backhand)"
            turnedPro={2020}
            grandSlams={0}
            ranking={13}
          />

          <div className="prose dark:prose-invert max-w-none">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              코트 위의 야생마. <strong className="text-red-600 dark:text-red-400">폭발적인 에너지</strong>와 거침없는 백핸드로 상대를 압도하는 덴마크의 신성.
            </p>

            <TOC items={tocItems} />

            <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
              <Crown className="w-6 h-6 text-yellow-500" />
              홀거 루네, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  불꽃과 계산 사이의 대담함으로 테니스계를 흔드는 덴마크의 차세대 스타
                </p>
              </div>
            </blockquote>
            <p>홀거 루네는 덴마크 테니스 역사상 가장 뛰어난 재능으로 평가받는다. 10대의 나이에 파리 마스터스 결승에서 노박 조코비치를 꺾고 우승하며 전 세계에 자신의 이름을 알렸다. 알카라스, 시너와 함께 남자 테니스의 미래를 이끌 '빅3' 후보로 거론된다.</p>
            <p>그의 플레이는 한마디로 '다이내믹'하다. 베이스라인에서의 강력한 스트로크 대결을 즐기면서도, 기습적인 드롭샷이나 네트 대시로 리듬을 바꾼다. 승부욕이 매우 강해 코트 위에서 감정을 솔직하게 드러내는데, 이는 팬들에게 호불호가 갈리기도 하지만 그만의 확실한 스타성을 보여주는 요소이기도 하다.</p>

            <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형의 플레이어인가?
            </h2>
            <p><strong>"공격적인 올라운더 (Aggressive All-Rounder)"</strong></p>
            <p>홀거 루네는 덴마크 출신의 신성으로, 강력한 백핸드와 빠른 발을 무기로 하는 공격적인 스타일이 특징이다.</p>

            <PlayerAttributes
              attributes={[
                { name: '백핸드 (Backhand)', score: 9.5, description: '투어 최고 수준의 양손 백핸드. 다운더라인과 크로스 앵글 모두 자유자재로 구사한다.' },
                { name: '스피드 (Speed)', score: 9.0, description: '폭발적인 순발력으로 코트 커버 범위가 매우 넓다.' },
                { name: '경기 운영 (Tactics)', score: 8.5, description: '드롭샷, 로브, 발리 등 다양한 기술을 섞어 상대를 교란한다.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '백핸드에 비해 상대적으로 기복이 있지만, 위력적인 위너를 만들어낸다.' },
                { name: '멘탈 (Mental)', score: 8.0, description: '승부욕이 강하지만, 감정 조절 실패로 경기를 그르치는 경우가 종종 있다.' },
              ]}
            />

            <p>플레이 스타일은 매우 공격적이고 직선적이다. 공을 라이징으로 잡아 빠르게 처리하며 상대의 시간을 뺏는다. 특히 백핸드 다운더라인은 그의 시그니처 샷으로, 수비 상황에서도 단숨에 공격으로 전환하는 무기다.</p>
            <p>네트 플레이를 즐기며, 터치 감각이 좋아 드롭샷 성공률도 높다. 서브 또한 꾸준히 발전하고 있어 최고 시속 220km에 육박하는 퍼스트 서브를 구사한다. 다만 경기 중 감정적으로 흥분하면 급격히 무너지는 경향이 있어, 멘탈 관리가 성장의 열쇠로 꼽힌다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>탄탄한 하체 근력을 바탕으로 한 폭발적인 움직임이 돋보인다. 경기 후반까지 지치지 않는 체력을 가지고 있으며, 부상 빈도도 낮은 편이다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">빠른 발을 이용한 수비 범위</strong>는 조코비치를 연상시킨다는 평가를 받기도 한다.</p>

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
                파리 마스터스 최연소 우승 · 탑 10 승률 <strong className="text-green-700 dark:text-green-400 text-base">높음</strong> · 덴마크 최초 탑 10 진입
              </p>
            </div>
            <p>누구와 붙어도 주눅 들지 않는 배짱이 있다. 조코비치, 알카라스 등 최정상급 선수들과의 대결에서도 자신의 플레이를 펼친다. '지고는 못 사는' 승부욕이 그를 빠르게 성장시킨 원동력이지만, 때로는 독이 되기도 한다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">홀거 루네는 어떻게 여기까지 왔을까?</h2>
            <p>루네는 6살 때 누나를 따라 테니스를 시작했다. 어릴 때부터 '세계 1위'를 목표로 삼았으며, 주니어 시절 프랑스 오픈 주니어 우승과 주니어 랭킹 1위를 차지하며 엘리트 코스를 밟았다. 2020년 프로로 전향한 후 챌린저 투어를 빠르게 정복하고 ATP 투어에 입성했다.</p>
            <p>2022년은 루네의 이름이 전 세계에 알려진 해였다. 뮌헨 오픈에서 첫 투어 우승을 차지했고, 프랑스 오픈 8강에 오르며 돌풍을 일으켰다. 그리고 연말 파리 마스터스에서 5명의 탑 10 선수를 연파하고 우승하며 정점을 찍었다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>루네의 잠재력이 폭발한 경기는 단연 2022년 파리 마스터스 결승이다.</p>

            <h3>2022년 파리 마스터스 결승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">자이언트 킬링의 완성</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                결승에서 <strong>노박 조코비치</strong>를 상대로 2-1 역전승을 거두며 우승했다. 마지막 게임에서 6번의 브레이크 포인트를 방어해내는 장면은 그의 강심장을 증명했다.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>팬들은 루네의 거침없는 플레이와 솔직한 캐릭터에 매력을 느낀다.</p>
            <p>코트 위에서 보여주는 열정과 에너지는 관중을 흥분시킨다. 또한 SNS를 통해 팬들과 활발하게 소통하고, 자신의 생각과 목표를 가감 없이 드러내는 'MZ세대' 다운 모습도 인기 요인이다. 패션 감각도 뛰어나 코트 밖에서의 모습도 주목받는다.</p>

            <h2 id="recent-form">요즘 홀거 루네의 경기력 흐름은 어떤가?</h2>
            <p>2023년 하반기부터 코칭 스태프 교체 등으로 다소 혼란스러운 시기를 보냈으나, 2024년 들어 안정을 찾아가고 있다.</p>

            <h3>최근 성적</h3>
            <p>브리즈번 인터내셔널 준우승으로 시즌을 산뜻하게 시작했다. 꾸준히 상위 랭커로서의 면모를 보여주고 있지만, 그랜드 슬램에서의 확실한 성과가 필요한 시점이다. 보리스 베커, 세베린 뤼티 등 명코치들과의 결별 후 현재는 패트릭 무라토글루와 다시 호흡을 맞추며 재도약을 노리고 있다.</p>

            <h2 id="one-sentence-summary">홀거 루네, 한 문장으로 정리하면?</h2>
            <p>홀거 루네는 불꽃과 계산 사이의 대담함으로 테니스계를 흔드는 덴마크의 차세대 스타다.</p>
            <p>그의 테니스는 공격적인 리턴과 예측 불가한 변주를 추구하며, 특히 순간 가속으로 경기를 역전시킬 수 있는 능력이 뛰어나다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 불꽃과 계산 사이의 대담함이 세계 상위권을 유지하게 해준다. 솔직함과 집요함을 중시하는 그의 테니스는 결과를 넘어 설득으로 남으며, 덴마크 테니스의 상징으로 기억될 것이다.</p>
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
