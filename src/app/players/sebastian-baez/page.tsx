import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: '세바스티안 바에즈 — 세계랭킹 25위권 | 플레이스타일·명장면·최근 경기력',
  description: '세바스티안 바에즈의 클레이 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 작은 키에도 불구하고 강력한 그라운드 스트로크와 인내로 클레이 코트를 지배하는 아르헨티나 출신의 세계랭킹 25위권 선수.',
  keywords: ['세바스티안 바에즈', 'Sebastian Baez', '테니스', 'ATP', '플레이스타일', '아르헨티나 테니스', '클레이', '베이스라인'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/sebastian-baez',
  },
  openGraph: {
    title: '세바스티안 바에즈 — 세계랭킹 25위권 | 플레이스타일·명장면·최근 경기력',
    description: '세바스티안 바에즈의 클레이 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://www.tennisfrens.com/players/sebastian-baez',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '세바스티안 바에즈 — 세계랭킹 25위권 | 플레이스타일·명장면·최근 경기력',
    description: '세바스티안 바에즈의 클레이 전문 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '세바스티안 바에즈, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 세바스티안 바에즈의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '세바스티안 바에즈, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '세바스티안 바에즈의 경기 스타일은 어떤가요?',
    a: '클레이 전문 스타일로, 작은 키에도 불구하고 강력한 그라운드 스트로크와 인내가 특징입니다. 긴 랠리를 두려워하지 않고 깊은 구질로 상대를 압박합니다.',
  },
  {
    q: '바에즈의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 25위권이었으며, 현재도 25위권을 유지하고 있습니다. 특히 클레이 코트에서 강력한 모습을 보여주며, 큰 대회에서도 안정적인 경기력을 보여주고 있습니다.',
  },
  {
    q: '바에즈의 강점은 무엇인가요?',
    a: '강력한 그라운드 스트로크와 인내가 최대 강점입니다. 작은 키에도 불구하고 깊은 구질로 상대를 압박하며, 특히 클레이 코트에서 긴 랠리를 두려워하지 않습니다.',
  },
  {
    q: '바에즈의 인간적인 면모는 어떤가요?',
    a: '침착한 성격과 끈기가 특징입니다. 인터뷰에서 경기 분석을 차분하게 설명하며, 특히 작은 키에도 불구하고 강력한 그라운드 스트로크를 구사하는 자신감이 뛰어납니다.',
  },
  {
    q: '바에즈를 한 문장으로 설명하면?',
    a: '작은 키에도 불구하고 강력한 그라운드 스트로크와 인내로 클레이 코트를 지배하는 아르헨티나 출신의 강자입니다.',
  },
];

export default function SebastianBaezPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="세바스티안 바에즈"
        excerpt="작은 키에도 불구하고 강력한 그라운드 스트로크와 인내로 클레이 코트를 지배하는 아르헨티나 출신의 강자"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '세바스티안 바에즈', '선수 프로필', '아르헨티나', '클레이', '베이스라인'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-again-notable">세바스티안 바에즈, 왜 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  작은 키에도 불구하고 강력한 그라운드 스트로크와 인내로 클레이 코트를 지배하는 아르헨티나 출신의 강자
                </p>
              </div>
            </blockquote>
            <p>세바스티안 바에즈는 아르헨티나 출신의 세계랭킹 25위권 테니스 선수로, 작은 키에도 불구하고 강력한 그라운드 스트로크와 인내로 ATP 투어를 지배하고 있다. 세계랭킹 25위권을 유지하며, 특히 클레이 코트에서 강력한 모습을 보여준다. 긴 랠리를 두려워하지 않고 깊은 구질로 상대를 압박하는 그의 테니스는 클레이 전문가의 설계자로 평가받는다.</p>
            <p>그는 클레이 코트에서 좋은 성적을 거두며 큰 대회에서도 안정적인 경기력을 보여주고 있다. 최근 몇 시즌 동안 꾸준한 성적을 유지하며, 특히 클레이 시즌에서 강력한 모습을 보여준다. 그의 테니스는 화려함보다는 효율을 추구하며, 특히 깊은 구질과 인내가 뛰어나다.</p>

            <h2 id="what-type-of-player">이 선수는 어떤 유형의 플레이어인가?</h2>
            <p>세바스티안 바에즈는 아르헨티나 출신의 세계랭킹 25위권 선수로, 클레이 전문 스타일과 강력한 그라운드 스트로크가 특징인 ATP 투어의 강자다.</p>
            
            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">국적:</strong> <span className="text-gray-600 dark:text-gray-400">아르헨티나</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">생년:</strong> <span className="text-gray-600 dark:text-gray-400">2000년 (24세)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">최고 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">25위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">현재 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">25위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">주 종목:</strong> <span className="text-gray-600 dark:text-gray-400">단식 (ATP 투어)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">플레이 스타일:</strong> <span className="text-gray-600 dark:text-gray-400">베이스라인</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">시그니처 무기:</strong> <span className="text-gray-600 dark:text-gray-400">깊은 구질</span></span>
                </li>
              </ul>
            </div>

            <p>플레이 스타일은 베이스라인으로 분류된다. 작은 키에도 불구하고 강력한 그라운드 스트로크를 구사하며, 특히 클레이 코트에서 긴 랠리를 두려워하지 않는다. 깊은 구질로 상대를 압박하며, 인내로 경기를 이끌어간다.</p>
            
            <div className="not-prose my-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700">
                <Zap className="w-3 h-3 mr-1 inline" />
                강력한 그라운드 스트로크
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Shield className="w-3 h-3 mr-1 inline" />
                인내
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                <Target className="w-3 h-3 mr-1 inline" />
                깊은 구질
              </Badge>
            </div>
            <p>팬들이 그를 표현할 때 자주 쓰는 말은 <strong>"강력한 그라운드 스트로크"</strong>, <strong>"인내"</strong>, <strong>"깊은 구질"</strong>이다. 그의 테니스는 작은 키에도 불구하고 강력한 그라운드 스트로크를 구사하며, 특히 클레이 코트에서 긴 랠리를 두려워하지 않는다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>바에즈가 세계 상위권을 유지하는 힘은 강력한 그라운드 스트로크, 인내, 그리고 클레이 코트에서의 적응력에서 나온다.</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              기술적 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-lg border-l-2 border-purple-400 dark:border-purple-600">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong className="text-purple-700 dark:text-purple-300">강력한 그라운드 스트로크</strong>가 가장 큰 무기. 작은 키에도 불구하고 깊은 구질로 상대를 압박한다.
              </p>
            </div>
            <p>강력한 그라운드 스트로크가 가장 큰 무기다. 작은 키에도 불구하고 깊은 구질로 상대를 압박한다. 포핸드는 넓은 궤도와 빠른 채찍질로 코트를 벌린다. 백핸드는 양손의 견고함으로 라인을 얇게 긁어 각을 만든다. 특히 클레이 코트에서 긴 랠리를 두려워하지 않으며, 깊은 구질로 상대를 압박한다.</p>
            <p>서브는 안정적인 구질로 시작해 첫 두 타구의 구조를 설계하고, 짧은 리턴이 오면 하프코트에서 한 걸음 전진해 발리로 결말을 재촉한다. 리턴은 퍼스트 서브에는 한두 걸음 뒤에서 시작해 탄도와 길이를 맞추고, 세컨드 서브에는 전진해 접점을 앞세운다. 이어지는 첫 스트로크는 중앙 깊은 볼로 각을 닫아두고, 세 번째 스트로크에서 코너의 문을 열어 상대의 스텝을 묶는다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>인내가 뛰어나다. 긴 랠리를 두려워하지 않으며, 특히 클레이 코트에서 장기전을 즐긴다. 체력 관리도 잘 하며, <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">5세트 경기에서도 후반까지 안정적인 경기력</strong>을 유지한다. 작은 키에도 불구하고 강력한 그라운드 스트로크를 구사하는 능력이 뛰어나다.</p>

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
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                클레이 코트에서의 승률이 높으며, 특히 긴 랠리에서의 승률이 뛰어나다. 작은 키에도 불구하고 강력한 그라운드 스트로크를 구사하는 자신감이 뛰어나다.
              </p>
            </div>
            <p>클레이 코트에서의 승률이 높으며, 특히 긴 랠리에서의 승률이 뛰어나다. 작은 키에도 불구하고 강력한 그라운드 스트로크를 구사하는 자신감이 뛰어나며, 특히 중요한 포인트에서도 침착하게 경기를 진행한다.</p>

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              전술적 다양성
            </h3>
            <p>베이스라인 게임을 기본으로 하되, 기회가 생기면 네트로 전진해 발리로 마무리한다. 상대의 약점을 파악해 구질을 조절하며, 특히 클레이 코트에서 깊은 구질로 상대를 압박한다. 긴 랠리를 두려워하지 않으며, 인내로 경기를 이끌어간다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>바에즈를 설명하는 대표 경기는 클레이 코트에서의 우승 경기와 큰 대회에서의 승리 경기다.</p>

            <div className="not-prose my-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">클레이 코트 우승</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>특징:</strong> 작은 키에도 불구하고 강력한 그라운드 스트로크로 우승
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                이 경기에서 드러난 건 바에즈의 강력한 그라운드 스트로크와 인내였다. 특히 작은 키에도 불구하고 깊은 구질로 상대를 압박하며, 긴 랠리를 두려워하지 않는 능력이 뛰어났다.
              </p>
            </div>

            <p>이 경기로 인해 바에즈는 클레이 전문가로 평가받기 시작했고, 특히 작은 키에도 불구하고 강력한 그라운드 스트로크를 구사하는 능력이 뛰어나다는 것을 보여줬다. 팬들과 전문가들은 그의 인내와 깊은 구질을 높이 평가했고, 특히 클레이 코트에서의 강력한 모습을 인정받았다.</p>

            <blockquote className="not-prose my-6 p-4 bg-indigo-50 dark:bg-indigo-950/30 border-l-4 border-indigo-500 rounded-r-lg">
              <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                "이 경기에서 드러난 건 바에즈의 강력한 그라운드 스트로크와 인내였다."
              </p>
            </blockquote>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>경기력뿐 아니라 침착한 성격과 끈기 덕분에 팬층이 두텁다.</p>

            <h3 className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
              코트 매너
            </h3>
            <p>침착한 성격이 특징이다. 경기 중에도 감정을 드러내지 않고 차분하게 경기를 진행하며, 특히 중요한 포인트에서도 침착하게 그라운드 스트로크를 구사한다. 페어플레이를 중시하며, 상대 선수와의 관계도 좋다.</p>

            <h3 className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              인터뷰 스타일
            </h3>
            <p>인터뷰에서 경기 분석을 차분하게 설명하며, 특히 작은 키에도 불구하고 강력한 그라운드 스트로크를 구사하는 자신감이 뛰어나다. 팀과의 협력도 중요하게 생각하며, 특히 아르헨티나 테니스의 미래를 이끌어갈 선수로 평가받는다.</p>

            <h3 className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              팀과의 관계
            </h3>
            <p>코치와의 관계가 좋으며, 특히 전술적 조언을 잘 받아들인다. 팀과의 협력도 중요하게 생각하며, 특히 아르헨티나 테니스의 미래를 이끌어갈 선수로 평가받는다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="recent-form">요즘 세바스티안 바에즈의 경기력 흐름은 어떤가?</h2>
            <p>최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 클레이 코트에서 강력한 모습을 보여주고 있다.</p>

            <h3 className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              최근 성적
            </h3>
            <div className="not-prose my-4 p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0">
                  최근 성과
                </p>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-0">
                <li>• 클레이 코트에서 꾸준한 성적</li>
                <li>• 큰 대회에서 안정적인 경기력</li>
                <li>• 작은 키에도 불구하고 강력한 그라운드 스트로크</li>
              </ul>
            </div>
            <p>최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 클레이 코트에서 강력한 모습을 보여주고 있다. 작은 키에도 불구하고 강력한 그라운드 스트로크를 구사하며, 특히 긴 랠리를 두려워하지 않는 능력이 뛰어나다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              부상 및 컨디션
            </h3>
            <p>큰 부상 없이 경기에 임하고 있으며, 특히 체력 관리도 잘 하고 있다. 작은 키에도 불구하고 강력한 그라운드 스트로크를 구사하는 능력이 뛰어나며, 특히 클레이 코트에서의 적응력이 뛰어나다.</p>

            <h3 className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              랭킹 변동
            </h3>
            <p>랭킹 변동을 보면, 그는 현재 세계랭킹 25위권을 유지하고 있다. 최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 클레이 시즌에서 강력한 모습을 보여준다. 플레이 스타일의 작은 변화도 눈에 띈다. 과거보다는 더 효율적인 경기를 하기 위해 전술적 다양성을 높였고, 특히 깊은 구질 활용을 더욱 강화하고 있다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="one-sentence-summary">세바스티안 바에즈, 한 문장으로 정리하면?</h2>
            <p>작은 키에도 불구하고 강력한 그라운드 스트로크와 인내로 클레이 코트를 지배하는 아르헨티나 출신의 강자다.</p>
            <p>바에즈는 작은 키에도 불구하고 강력한 그라운드 스트로크를 구사하며, 특히 클레이 코트에서 긴 랠리를 두려워하지 않는다. 깊은 구질로 상대를 압박하며, 인내로 경기를 이끌어간다. 최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 클레이 시즌에서 강력한 모습을 보여주고 있다.</p>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <FAQ items={faqs} />
          </div>

          {/* CTA Section */}
          <div className="mt-12">
            <CTA
              title="더 많은 테니스 선수 이야기"
              description="다른 테니스 선수들의 스토리도 확인해보세요"
              primaryButton={{
                text: "선수 목록 보기",
                href: "/players"
              }}
            />
          </div>
        </div>
      </Article>
    </div>
  );
}

