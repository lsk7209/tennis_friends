import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '이르지 레헤치카 — 세계랭킹 17위 | 플레이스타일·명장면·최근 경기력',
  description: '이르지 레헤치카의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 강력한 포핸드와 서브로 ATP 투어를 지배하는 체코의 차세대 스타.',
  keywords: ['이르지 레헤치카', 'Jiri Lehecka', '테니스', 'ATP', '플레이스타일', '체코 테니스', '공격형', '강력한 포핸드'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/players/jiri-lehecka',
  },
  openGraph: {
    title: '이르지 레헤치카 — 세계랭킹 17위 | 플레이스타일·명장면·최근 경기력',
    description: '이르지 레헤치카의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://tennisfriends.co.kr/players/jiri-lehecka',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '이르지 레헤치카 — 세계랭킹 17위 | 플레이스타일·명장면·최근 경기력',
    description: '이르지 레헤치카의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '이르지 레헤치카, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 이르지 레헤치카의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '이르지 레헤치카, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '이르지 레헤치카의 경기 스타일은 어떤가요?',
    a: '공격형 스타일로, 강력한 포핸드와 서브가 특징입니다. 빠른 발과 넓은 리치로 코트를 압박합니다.',
  },
  {
    q: '레헤치카의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 17위권이며, 현재도 17위권을 유지하고 있습니다. 특히 최근 빠르게 상위권으로 올라왔습니다.',
  },
];

export default function JiriLeheckaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="이르지 레헤치카"
        excerpt="강력한 포핸드와 서브로 ATP 투어를 지배하는 체코의 차세대 스타"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '이르지 레헤치카', '선수 프로필', '체코', '공격형', '강력한 포핸드'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <TOC items={tocItems} />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-again-notable">이르지 레헤치카, 왜 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  강력한 포핸드와 서브로 ATP 투어를 지배하는 체코의 차세대 스타
                </p>
              </div>
            </blockquote>
            <p>이르지 레헤치카는 체코 출신의 세계랭킹 17위권 테니스 선수로, 강력한 포핸드와 서브로 ATP 투어를 지배하고 있다. 세계랭킹 17위권을 유지하며, 특히 최근 빠르게 상위권으로 올라왔다. 빠른 발과 넓은 리치로 코트를 압박하는 그의 테니스는 차세대 스타의 설계자로 평가받는다.</p>

            <h2 id="what-type-of-player">이 선수는 어떤 유형의 플레이어인가?</h2>
            <p>이르지 레헤치카는 체코 출신의 세계랭킹 17위권 선수로, 공격형 스타일과 강력한 포핸드, 서브가 특징인 ATP 투어의 차세대 스타다.</p>
            
            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">국적:</strong> <span className="text-gray-600 dark:text-gray-400">체코</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">최고 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">17위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">현재 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">17위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">플레이 스타일:</strong> <span className="text-gray-600 dark:text-gray-400">공격형</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">시그니처 무기:</strong> <span className="text-gray-600 dark:text-gray-400">강력한 포핸드</span></span>
                </li>
              </ul>
            </div>

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>레헤치카가 세계 상위권을 유지하는 힘은 강력한 포핸드, 서브, 그리고 빠른 발에서 나온다.</p>

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>레헤치카의 커리어를 상징하는 경기는 최근 몇 시즌의 큰 대회들이다.</p>

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>레헤치카는 경기력뿐 아니라 겸손하고 성실한 태도 덕분에 팬층이 두텁다.</p>

            <h2 id="recent-form">요즘 이르지 레헤치카의 경기력 흐름은 어떤가?</h2>
            <p>최근 몇 시즌 동안 레헤치카는 빠르게 성장하고 있으며, 큰 대회에서도 안정적인 경기력을 보여주고 있다.</p>

            <h2 id="one-sentence-summary">이르지 레헤치카, 한 문장으로 정리하면?</h2>
            <p>이르지 레헤치카는 강력한 포핸드와 서브로 ATP 투어를 지배하는 체코의 차세대 스타다.</p>
          </div>

          <FAQ items={faqs} />

          <CTA />
        </div>
      </Article>
    </div>
  );
}

