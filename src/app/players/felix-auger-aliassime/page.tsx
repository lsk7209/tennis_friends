import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '펠릭스 오제-알리아심 — 세계랭킹 5위 | 플레이스타일·명장면·최근 경기력',
  description: '펠릭스 오제-알리아심의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 강력한 서브와 포핸드로 ATP 투어를 지배하는 캐나다의 차세대 스타.',
  keywords: ['펠릭스 오제-알리아심', 'Felix Auger-Aliassime', '테니스', 'ATP', '플레이스타일', '캐나다 테니스', '공격형', '강력한 서브'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/felix-auger-aliassime',
  },
  openGraph: {
    title: '펠릭스 오제-알리아심 — 세계랭킹 5위 | 플레이스타일·명장면·최근 경기력',
    description: '펠릭스 오제-알리아심의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/felix-auger-aliassime',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '펠릭스 오제-알리아심 — 세계랭킹 5위 | 플레이스타일·명장면·최근 경기력',
    description: '펠릭스 오제-알리아심의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '펠릭스 오제-알리아심, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 펠릭스 오제-알리아심의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '펠릭스 오제-알리아심, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '펠릭스 오제-알리아심의 경기 스타일은 어떤가요?',
    a: '공격형 스타일로, 강력한 서브와 포핸드가 특징입니다. 빠른 발과 넓은 리치로 코트를 압박합니다.',
  },
  {
    q: '오제-알리아심의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 6위였으며, 현재는 5위권을 유지하고 있습니다. 특히 인도어 시즌에서 강한 모습을 보여줍니다.',
  },
  {
    q: '오제-알리아심의 강점은 무엇인가요?',
    a: '강력한 서브와 포핸드가 최대 강점입니다. 빠른 발과 넓은 리치로 코트를 압박하는 능력이 뛰어납니다.',
  },
  {
    q: '오제-알리아심의 인간적인 면모는 어떤가요?',
    a: '겸손하고 성실한 태도가 특징입니다. 인터뷰에서 항상 상대를 존중하며, 팬들과의 소통도 활발합니다.',
  },
  {
    q: '오제-알리아심을 한 문장으로 설명하면?',
    a: '강력한 서브와 포핸드로 ATP 투어를 지배하는 캐나다의 차세대 스타입니다.',
  },
];

export default function FelixAugerAliassimePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="펠릭스 오제-알리아심"
        excerpt="강력한 서브와 포핸드로 ATP 투어를 지배하는 캐나다의 차세대 스타"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '펠릭스 오제-알리아심', '선수 프로필', '캐나다', '공격형', '강력한 서브'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <TOC items={tocItems} />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-again-notable">펠릭스 오제-알리아심, 왜 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  강력한 서브와 포핸드로 ATP 투어를 지배하는 캐나다의 차세대 스타
                </p>
              </div>
            </blockquote>
            <p>펠릭스 오제-알리아심은 캐나다 출신의 세계랭킹 5위권 테니스 선수로, 강력한 서브와 포핸드로 ATP 투어를 지배하고 있다. 세계랭킹 5위권을 유지하며, 특히 인도어 시즌에서 강한 모습을 보여준다. 빠른 발과 넓은 리치로 코트를 압박하는 그의 테니스는 차세대 스타의 설계자로 평가받는다.</p>
            <p>그는 최근 몇 시즌 동안 빠르게 성장하며 상위권으로 올라왔고, 큰 대회에서도 안정적인 경기력을 보여주고 있다. 그의 테니스는 공격적이며, 특히 강력한 서브와 포핸드가 뛰어나다.</p>

            <h2 id="what-type-of-player">이 선수는 어떤 유형의 플레이어인가?</h2>
            <p>펠릭스 오제-알리아심은 캐나다 출신의 세계랭킹 5위권 선수로, 공격형 스타일과 강력한 서브, 포핸드가 특징인 ATP 투어의 차세대 스타다.</p>
            
            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">국적:</strong> <span className="text-gray-600 dark:text-gray-400">캐나다</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">생년:</strong> <span className="text-gray-600 dark:text-gray-400">2000년 (24세)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">최고 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">6위</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">현재 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">5위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">주 종목:</strong> <span className="text-gray-600 dark:text-gray-400">단식 (ATP 투어)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">플레이 스타일:</strong> <span className="text-gray-600 dark:text-gray-400">공격형</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">시그니처 무기:</strong> <span className="text-gray-600 dark:text-gray-400">강력한 서브</span></span>
                </li>
              </ul>
            </div>

            <p>플레이 스타일은 공격형으로 분류된다. 베이스라인에서 강력한 그라운드 스트로크를 구사하면서도, 기회가 생기면 네트로 전진해 발리로 마무리하는 능력을 갖추고 있다. 특히 강력한 서브와 포핸드가 그의 시그니처 무기로, 빠른 발과 넓은 리치로 코트를 압박한다.</p>
            
            <div className="not-prose my-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700">
                <Zap className="w-3 h-3 mr-1 inline" />
                강력한 서브
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Shield className="w-3 h-3 mr-1 inline" />
                포핸드
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                <Star className="w-3 h-3 mr-1 inline" />
                차세대 스타
              </Badge>
            </div>
            <p>팬들이 그를 표현할 때 자주 쓰는 말은 <strong>"강력한 서브"</strong>, <strong>"포핸드"</strong>, <strong>"차세대 스타"</strong>이다. 그의 테니스는 공격적이며, 특히 빠른 발과 넓은 리치로 코트를 압박하는 능력이 뛰어나다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>오제-알리아심이 세계 상위권을 유지하는 힘은 강력한 서브, 포핸드, 그리고 빠른 발에서 나온다.</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              기술적 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-lg border-l-2 border-purple-400 dark:border-purple-600">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong className="text-purple-700 dark:text-purple-300">강력한 서브</strong>가 가장 큰 무기. 빠른 발과 넓은 리치로 코트를 압박한다.
              </p>
            </div>
            <p>강력한 서브가 가장 큰 무기다. 빠른 발과 넓은 리치로 코트를 압박한다. 포핸드는 넓은 궤도와 빠른 채찍질로 코트를 벌린다. 백핸드는 양손의 견고함으로 라인을 얇게 긁어 각을 만든다. 서브는 와이드와 바디의 비율을 바꿔 첫 두 타구의 구조를 설계하고, 짧은 리턴이 오면 하프코트에서 한 걸음 전진해 발리로 결말을 재촉한다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>코트 커버리지가 뛰어나다. 전진과 후퇴를 자유롭게 오간다. 빠른 발과 넓은 리치로 코트를 압박한다. 장기전에서도 체력 관리가 뛰어나며, <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">5세트 경기에서도 후반까지 안정적인 경기력</strong>을 유지한다.</p>

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
                타이브레이크에서 비교적 강한 편 · 감정 관리 능력 · 집중력
              </p>
            </div>
            <p>포인트 사이 그는 스트링을 훑고 두 번의 깊은 호흡으로 리듬을 고정한다. 스코어가 흔들려도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않는다. 타이브레이크 초반에는 네트를 넉넉히 넘기는 구질로 높이와 길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>오제-알리아심의 커리어를 상징하는 경기는 최근 몇 시즌의 큰 대회들이다.</p>

            <h3>최근 시즌의 경기력</h3>
            <p>최근 시즌에서는 큰 대회에서 보여준 경기들이 인상적이다. 특히 인도어 시즌에서 강한 모습을 보여주며, 큰 대회에서도 안정적인 경기력을 보여줬다.</p>

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>오제-알리아심은 경기력뿐 아니라 겸손하고 성실한 태도 덕분에 팬층이 두텁다.</p>

            <h3>코트 매너</h3>
            <p>그는 겸손하고 성실한 태도를 겸비했다. 인터뷰에서 항상 상대를 존중하며, 팬들과의 소통도 활발하다. 잘된 날에는 계획이 맞았다고, 부족한 날에는 수정 항목이 분명하다고 말한다.</p>

            <h2 id="recent-form">요즘 펠릭스 오제-알리아심의 경기력 흐름은 어떤가?</h2>
            <p>최근 몇 시즌 동안 오제-알리아심은 빠르게 성장하고 있으며, 큰 대회에서도 안정적인 경기력을 보여주고 있다.</p>

            <h3>최근 성적</h3>
            <div className="not-prose my-4 p-3 bg-blue-50 dark:bg-blue-950/20 border-l-3 border-blue-500 rounded-r shadow-sm">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <strong>상승세:</strong> 최근 10경기 <strong className="text-blue-700 dark:text-blue-400">강한 상대에게도 꾸준히 승리</strong> · 탑 10 선수들과의 경기에서도 승리
              </p>
            </div>
            <p>최근 10경기 기준으로 보면, 그는 강한 상대에게도 꾸준히 승리를 거두는 편이다. 탑 10 선수들과의 경기에서도 승리를 거두며, 자신의 테니스가 여전히 경쟁력이 있음을 증명하고 있다.</p>

            <h2 id="one-sentence-summary">펠릭스 오제-알리아심, 한 문장으로 정리하면?</h2>
            <p>펠릭스 오제-알리아심은 강력한 서브와 포핸드로 ATP 투어를 지배하는 캐나다의 차세대 스타다.</p>
            <p>그의 테니스는 공격적이며, 특히 빠른 발과 넓은 리치로 코트를 압박하는 능력이 뛰어나다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 표면별 전개 능력이 세계 상위권을 유지하게 해준다.</p>
          </div>

          <FAQ items={faqs} />

          <CTA />
        </div>
      </Article>
    </div>
  );
}

