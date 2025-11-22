import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: '홀게르 루네 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
  description: '홀게르 루네의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 불꽃과 계산 사이의 대담함으로 테니스계를 흔드는 덴마크의 차세대 스타.',
  keywords: ['홀게르 루네', 'Holger Rune', '테니스', 'ATP', '플레이스타일', '덴마크 테니스', '공격형', '불꽃과 계산'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/holger-rune',
  },
  openGraph: {
    title: '홀게르 루네 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '홀게르 루네의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://www.tennisfrens.com/players/holger-rune',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '홀게르 루네 — 세계랭킹 상위권 | 플레이스타일·명장면·최근 경기력',
    description: '홀게르 루네의 공격형 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '홀게르 루네, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'growth-story', text: '홀게르 루네는 어떻게 여기까지 왔을까?', depth: 2 },
  { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 홀게르 루네의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '홀게르 루네, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '홀게르 루네의 경기 스타일은 어떤가요?',
    a: '공격형 스타일로, 불꽃과 계산 사이의 대담함이 특징입니다. 공격적인 리턴과 예측 불가한 변주로 흐름을 흔들며, 순간 가속으로 경기를 역전시킬 수 있는 능력이 뛰어납니다.',
  },
  {
    q: '루네의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 상위권이었으며, 현재는 상위권을 유지하고 있습니다. 특히 큰 대회에서 강력한 모습을 보여주며 안정적인 성적을 거두고 있습니다.',
  },
  {
    q: '루네의 강점은 무엇인가요?',
    a: '불꽃과 계산 사이의 대담함이 최대 강점입니다. 공격적인 리턴과 예측 불가한 변주로 흐름을 흔들며, 백핸드 다운더라인은 결정적 순간마다 칼처럼 들어갑니다.',
  },
  {
    q: '루네의 성장 배경은 어떤가요?',
    a: '북유럽의 긴 겨울과 실내 코트의 규칙 속에서 시작했습니다. 반복과 기록을 중시했고, 하루 훈련을 기술·전술·멘탈로 나누어 체크리스트를 채웠습니다.',
  },
  {
    q: '루네를 한 문장으로 설명하면?',
    a: '불꽃과 계산 사이의 대담함으로 테니스계를 흔드는 덴마크의 차세대 스타입니다.',
  },
];

export default function HolgerRunePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="홀게르 루네"
        excerpt="불꽃과 계산 사이의 대담함으로 테니스계를 흔드는 덴마크의 차세대 스타"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '홀게르 루네', '선수 프로필', '덴마크', '공격형', '불꽃과 계산'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-again-notable">홀게르 루네, 왜 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  불꽃과 계산 사이의 대담함으로 테니스계를 흔드는 덴마크의 차세대 스타
                </p>
              </div>
            </blockquote>
            <p>홀게르 루네는 덴마크 출신의 세계랭킹 상위권 테니스 선수로, 불꽃과 계산 사이의 대담함으로 ATP 투어를 지배하고 있다. 최고 랭킹 상위권에 올랐던 경력의 소유자이며, 특히 큰 대회에서 강력한 모습을 보여준다. 공격적인 리턴과 예측 불가한 변주, 순간 가속이 그의 테니스를 특징짓는다.</p>
            <p>그는 마스터스 대회에서 우승을 차지하며 마스터스 대회 챔피언이 되었고, 큰 대회에서 안정적인 성적을 거두고 있다. 최근 몇 시즌 동안 큰 대회에서 특히 강력한 모습을 보여주며, 불꽃과 계산 사이의 대담함으로 평가받는다. 그의 테니스는 공격적인 리턴과 예측 불가한 변주가 핵심이다.</p>

            <h2 id="what-type-of-player">이 선수는 어떤 유형의 플레이어인가?</h2>
            <p>홀게르 루네는 덴마크 출신의 세계랭킹 상위권 선수로, 공격형 스타일과 불꽃, 계산이 특징인 ATP 투어의 차세대 스타다.</p>
            
            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">국적:</strong> <span className="text-gray-600 dark:text-gray-400">덴마크</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">생년:</strong> <span className="text-gray-600 dark:text-gray-400">2003년 (21세)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">최고 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">상위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">현재 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">상위권</span></span>
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
                  <span><strong className="text-gray-700 dark:text-gray-300">시그니처 무기:</strong> <span className="text-gray-600 dark:text-gray-400">불꽃과 계산</span></span>
                </li>
              </ul>
            </div>

            <p>플레이 스타일은 공격형으로 분류된다. 베이스라인에서 공격적인 리턴과 예측 불가한 변주를 구사하며, 순간 가속으로 경기를 역전시킬 수 있는 능력을 갖추고 있다. 특히 불꽃과 계산 사이의 대담함이 그의 시그니처 무기로, 공격적인 리턴과 예측 불가한 변주로 흐름을 흔든다.</p>
            
            <div className="not-prose my-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700">
                <Zap className="w-3 h-3 mr-1 inline" />
                불꽃과 계산
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Shield className="w-3 h-3 mr-1 inline" />
                공격적 리턴
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                <Trophy className="w-3 h-3 mr-1 inline" />
                덴마크의 차세대
              </Badge>
            </div>
            <p>팬들이 그를 표현할 때 자주 쓰는 말은 <strong>"불꽃과 계산"</strong>, <strong>"공격적 리턴"</strong>, <strong>"덴마크의 차세대"</strong>이다. 그의 테니스는 공격적인 리턴과 예측 불가한 변주를 추구하며, 특히 순간 가속으로 경기를 역전시킬 수 있는 능력이 뛰어나다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="growth-story">홀게르 루네는 어떻게 여기까지 왔을까?</h2>
            <p>루네의 성장 스토리는 북유럽의 실내 코트가 만든 밀도와 빠른 적응력이 핵심이다.</p>

            <h3>성장 배경</h3>
            <p>그의 테니스는 북유럽의 긴 겨울과 실내 코트의 규칙 속에서 시작됐다. 반복과 기록을 중시했고, 하루 훈련을 기술·전술·멘탈로 나누어 체크리스트를 채웠다. 이동이 잦은 유소년 시절에도 일지를 쓰며 하루의 루틴을 고정했고, 실내와 야외를 오가는 환경에서 바운드의 차이를 몸으로 익혔다.</p>

            <h3>주니어 시절</h3>
            <p>주니어 시절부터 빠른 성장을 보였으며, 특히 불꽃과 계산이 두드러졌다. 프로로 전환한 후 체계적인 피지컬 트레이닝을 거치며 폭발→회복→재가속의 리듬을 몸에 새겼다. 이 생활의 질서가 오늘의 빠르되 무너지지 않는 루네를 만든다.</p>

            <h3>전환점</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">커리어 전환점</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>마스터스 대회 우승</strong>으로 전성기를 구가하기 시작했다. 특히 결승전에서의 경기력은 그의 불꽃과 계산을 보여주는 대표적인 사례였다.
              </p>
            </div>
            <p>마스터스 대회에서 그는 우승을 차지하며 마스터스 대회 챔피언이 되었다. 이 시기 동안 불꽃과 계산 사이의 대담함이 그의 시그니처 무기로 자리 잡았다. 특히 공격적인 리턴과 예측 불가한 변주로 상대를 압도하는 능력이 세계 최고 수준임을 증명했다. 순간 가속으로 경기를 역전시킬 수 있는 능력이 뛰어났다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>루네가 세계 상위권을 유지하는 힘은 불꽃과 계산 사이의 대담함, 그리고 순간 가속에서 나온다.</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              기술적 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-lg border-l-2 border-purple-400 dark:border-purple-600">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong className="text-purple-700 dark:text-purple-300">공격적인 리턴과 예측 불가한 변주</strong>가 가장 큰 무기. 불꽃과 계산 사이의 대담함으로 흐름을 흔든다.
              </p>
            </div>
            <p>공격적인 리턴과 예측 불가한 변주가 가장 큰 무기다. 불꽃과 계산 사이의 대담함으로 흐름을 흔든다. 포핸드는 넓은 궤도와 예리한 각으로 상대를 뒤로 밀어낸다. 백핸드는 양손의 견고함으로 라인을 얇게 긁어 각을 만든다. 서브는 와이드와 바디의 비율을 바꿔 첫 두 타구의 구조를 설계하고, 짧은 리턴이 오면 하프코트에서 한 걸음 전진해 발리로 결말을 재촉한다.</p>
            <p>리턴은 퍼스트 서브에는 한두 걸음 뒤에서 시작해 탄도와 길이를 맞추고, 세컨드 서브에는 전진해 접점을 앞세운다. 이어지는 첫 스트로크는 중앙 깊은 볼로 각을 닫아두고, 세 번째 스트로크에서 코너의 문을 열어 상대의 스텝을 묶는다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>코트 커버리지가 뛰어나다. 전진과 후퇴를 자유롭게 오간다. 짧은 볼이 보이면 하프코트에서 한 걸음 전진해 발리로 마무리한다. 장기전에서도 체력 관리가 뛰어나며, <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">순간 가속으로 경기를 역전시킬 수 있는 능력</strong>이 특징이다.</p>

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
                큰 대회에서 비교적 강한 편 · 불꽃과 계산 · 순간 가속
              </p>
            </div>
            <p>포인트 사이 그는 스트링을 훑고 두 번의 깊은 호흡으로 리듬을 고정한다. 스코어가 흔들려도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않는다. 큰 대회에서는 공격적인 리턴으로 초반 속도를 통제하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다. 불꽃과 계산 사이의 대담함이 특징이다.</p>

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              전술적 다양성
            </h3>
            <p>표면별 전개가 뛰어나다. 하드에서는 퍼스트 서브 확률과 3구 패턴의 속도로 주도권을 잡고, 리턴 게임에서는 중앙 깊은 볼로 각을 지워 다음 볼에서 속도를 끌어올린다. 잔디에서는 토스를 낮추고 백스윙을 줄여 타점을 앞에 고정, 슬라이스 리턴을 섞어 초반 속도를 통제한다. 점토에서는 회전을 더해 낙구를 안정시키고 랠리의 길이를 받아들이되, 네 번째나 다섯 번째 스트로크에서 드롭과 슬라이스를 섞어 템포를 흔든다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>루네의 커리어를 상징하는 경기는 마스터스 대회 우승과 큰 대회 우승이다.</p>

            <h3>마스터스 대회 우승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">커리어 전성기의 정점</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>마스터스 대회</strong>에서 우승을 차지하며 마스터스 대회 챔피언이 되었다. 특히 결승전에서의 경기력은 그의 불꽃과 계산을 보여주는 대표적인 사례였다.
              </p>
            </div>
            <p>마스터스 대회에서 그는 우승을 차지하며 마스터스 대회 챔피언이 되었다. 이 경기에서 그는 불꽃과 계산 사이의 대담함으로 상대를 압도했다. 특히 결승전에서의 경기력은 그의 기술적 완성도를 보여주는 대표적인 사례였다. 공격적인 리턴과 예측 불가한 변주, 그리고 중요한 포인트에서의 침착함이 모두 어우러진 경기였다.</p>

            <h3>큰 대회 우승</h3>
            <p>큰 대회에서 그는 우승을 거두며 차세대 스타로서의 입지를 확고히 했다. 이 경기에서 드러난 건 루네의 순간 가속이었다. 불꽃과 계산 사이의 대담함이 한 경기에 응축되었다.</p>

            <h3>대표 명장면</h3>
            <blockquote className="not-prose my-4 p-5 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border-l-4 border-gray-400 dark:border-gray-600 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-800 dark:text-gray-200 mb-0 italic leading-relaxed">
                  브레이크 포인트. 백핸드 다운더라인이 열어젖히는 창을 그린다. 공이 사이드라인을 스치며 빠져나갈 때 관중의 탄성이 터지고, 그는 표정을 바꾸지 않은 채 같은 속도로 베이스라인을 밟는다. 불꽃과 계산 사이의 대담함이 바로 이 순간이다.
                </p>
              </div>
            </blockquote>

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>루네는 경기력뿐 아니라 솔직함과 집요함 덕분에 팬층이 두텁다.</p>

            <h3>코트 매너</h3>
            <p>그는 솔직함과 집요함을 중시한다. 인터뷰에서 준비와 팀을 먼저 언급한다. 잘된 날에는 계획이 맞았다고, 부족한 날에는 수정 항목이 분명하다고 말한다. 팬에겐 미소와 눈맞춤을, 코트 스태프에겐 짧은 감사를 잊지 않는다. 패배 뒤에도 책임의 방향을 자기 쪽으로 당기고, 승리한 날에는 스태프와 팬에게 차례로 감사를 전한다.</p>

            <h3>인터뷰 스타일</h3>
            <p>인터뷰는 직선적이며 솔직하다. 준비와 팀을 먼저 언급하며, 자신의 성과보다는 상대의 강점을 인정하는 모습을 자주 보인다. 긴 일정 속에서도 회복·수면·식단의 루틴을 생활로 고정해 컨디션의 파고를 낮춘다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상을 완성한다.</p>

            <h3>팀과의 관계</h3>
            <p>코치와 팀과의 관계에서도 신뢰가 두터운 것으로 알려져 있다. 오랜 기간 함께한 코치와의 유대는 그의 안정적인 경기력에 기여하고 있으며, 팀 전체가 하나의 목표를 향해 나아가는 모습을 보여준다. 덴마크의 훈련 문화는 차분함 위의 대담함을 중시하는데, 루네의 테니스에도 이 정신이 뚜렷하다.</p>

            <h2 id="recent-form">요즘 홀게르 루네의 경기력 흐름은 어떤가?</h2>
            <p>최근 몇 시즌 동안 루네는 큰 대회에서 특히 강력한 모습을 보여주고 있으며, 안정적인 경기력을 보여주고 있다.</p>

            <h3>최근 성적</h3>
            <div className="not-prose my-4 p-3 bg-blue-50 dark:bg-blue-950/20 border-l-3 border-blue-500 rounded-r shadow-sm">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <strong>안정세:</strong> 최근 10경기 <strong className="text-blue-700 dark:text-blue-400">큰 대회에서 강력한 모습</strong> · 탑 10 선수들과의 경기에서도 승리
              </p>
            </div>
            <p>최근 10경기 기준으로 보면, 그는 큰 대회에서 강력한 모습을 보여주는 편이다. 탑 10 선수들과의 경기에서도 승리를 거두며, 자신의 테니스가 여전히 경쟁력이 있음을 증명하고 있다. 최근 3개월 동안의 성적도 안정적이며, 특히 큰 대회에서 후반 라운드에 진출하는 빈도가 높아졌다.</p>

            <h3>부상 관리</h3>
            <p>부상과 관련해서는 현재 큰 문제가 없는 상태다. 체계적인 회복과 관리 덕분에 경기에 지장을 주는 수준은 아니다. 다만 긴 시즌을 고려해 몸 관리에 더 신경을 쓰고 있으며, 불필요한 스프린트를 줄이고 효율적인 경기 운영에 집중하고 있다.</p>

            <h3>랭킹과 스타일 변화</h3>
            <p>랭킹 변동을 보면, 그는 현재 세계랭킹 상위권을 유지하고 있다. 큰 대회에서 특히 강력한 모습을 보여주며, 그는 여전히 탑 10 선수들과 경쟁할 수 있는 능력을 보여줬다. 플레이 스타일의 작은 변화도 눈에 띈다. 과거보다는 더 효율적인 경기를 하기 위해 전술적 다양성을 높였고, 하프코트에서의 마무리를 한 박자 더 빠르게 가져오는 데 집중하고 있다.</p>

            <h2 id="one-sentence-summary">홀게르 루네, 한 문장으로 정리하면?</h2>
            <p>홀게르 루네는 불꽃과 계산 사이의 대담함으로 테니스계를 흔드는 덴마크의 차세대 스타다.</p>
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
