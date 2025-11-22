import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: '다닐 메드베데프 — 세계랭킹 3위 | 플레이스타일·명장면·최근 경기력',
  description: '다닐 메드베데프의 카운터펀처 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 하드 코트의 왕·지공의 미학·라이벌과 함께 성장하는 러시아 출신의 세계랭킹 3위 선수.',
  keywords: ['다닐 메드베데프', 'Daniil Medvedev', '테니스', 'ATP', '플레이스타일', '러시아 테니스', '카운터펀처', '하드 코트', '라이벌'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/daniil-medvedev',
  },
  openGraph: {
    title: '다닐 메드베데프 — 세계랭킹 3위 | 플레이스타일·명장면·최근 경기력',
    description: '다닐 메드베데프의 카운터펀처 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://www.tennisfrens.com/players/daniil-medvedev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '다닐 메드베데프 — 세계랭킹 3위 | 플레이스타일·명장면·최근 경기력',
    description: '다닐 메드베데프의 카운터펀처 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '다닐 메드베데프, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  { id: 'rivalry', text: '이 선수의 라이벌은 누구인가?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 다닐 메드베데프의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '다닐 메드베데프, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '다닐 메드베데프의 경기 스타일은 어떤가요?',
    a: '카운터펀처 스타일로, 낮은 탄도와 깊은 낙구, 독특한 코트 포지셔닝이 특징입니다. 리턴과 포지셔닝으로 상대의 선택지를 점점 좁혀 가는 지공의 미학을 구현합니다.',
  },
  {
    q: '메드베데프의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 1위였으며, 현재는 3위를 유지하고 있습니다. 2022년 세계랭킹 1위를 달성했고, 특히 하드 코트에서 강력한 모습을 보여주고 있습니다.',
  },
  {
    q: '메드베데프의 강점은 무엇인가요?',
    a: '리턴 능력과 포지셔닝, 베이스라인 뒤에서의 길이 제어가 강점입니다. 낮은 탄도로 깊이를 누적하고, 상대의 선택지를 지우는 전술적 완성도가 뛰어납니다.',
  },
  {
    q: '메드베데프의 라이벌은 누구인가요?',
    a: '카를로스 알카라즈, 노바크 조코비치 등과의 경기가 유명합니다. 특히 속도와 각도로 대비되는 스타일의 선수들과의 경기에서 그의 전술적 능력이 드러납니다.',
  },
  {
    q: '메드베데프를 한 문장으로 설명하면?',
    a: '낮은 탄도와 깊은 낙구로 상대의 선택지를 좁혀 가는 하드 코트의 설계자입니다.',
  },
];

export default function DaniilMedvedevPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="다닐 메드베데프"
        excerpt="낮은 탄도와 깊은 낙구로 상대의 선택지를 좁혀 가는 하드 코트의 설계자"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '다닐 메드베데프', '선수 프로필', '러시아', '카운터펀처', '하드 코트'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-again-notable">다닐 메드베데프, 왜 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  낮은 탄도와 깊은 낙구로 상대의 선택지를 좁혀 가는 하드 코트의 설계자
                </p>
              </div>
            </blockquote>
            <p>다닐 메드베데프는 러시아 출신의 세계랭킹 3위 테니스 선수로, 카운터펀처 스타일과 탁월한 리턴 능력으로 ATP 투어를 지배하고 있다. 세계랭킹 1위에 올랐던 경력의 소유자이며, 특히 하드 코트에서 강력한 모습을 보여준다. 낮은 탄도와 깊은 낙구, 독특한 코트 포지셔닝으로 상대의 선택지를 점점 좁혀 가는 그의 테니스는 현대 하드코트의 설계자로 평가받는다.</p>
            <p>그는 2021년 US 오픈 우승을 차지하며 그랜드 슬램 챔피언이 되었고, 2022년 세계랭킹 1위를 달성했다. 최근에는 세계랭킹 3위를 유지하며 큰 대회에서도 안정적인 경기력을 보여주고 있다. 그의 테니스는 화려함보다는 효율을 추구하며, 특히 리턴과 포지셔닝으로 경기의 흐름을 바꾸는 능력이 뛰어나다.</p>

            <h2 id="what-type-of-player">이 선수는 어떤 유형의 플레이어인가?</h2>
            <p>다닐 메드베데프는 러시아 출신의 세계랭킹 3위 선수로, 카운터펀처 스타일과 탁월한 리턴 능력이 특징인 ATP 투어의 강자다.</p>
            
            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">국적:</strong> <span className="text-gray-600 dark:text-gray-400">러시아</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">생년:</strong> <span className="text-gray-600 dark:text-gray-400">1996년 (28세)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">최고 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">1위</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">현재 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">3위</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">주 종목:</strong> <span className="text-gray-600 dark:text-gray-400">단식 (ATP 투어)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">플레이 스타일:</strong> <span className="text-gray-600 dark:text-gray-400">카운터펀처</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">시그니처 무기:</strong> <span className="text-gray-600 dark:text-gray-400">리턴과 포지셔닝</span></span>
                </li>
              </ul>
            </div>

            <p>플레이 스타일은 카운터펀처로 분류된다. 베이스라인 뒤에서 깊은 스트로크를 구사하면서도, 리턴과 포지셔닝으로 상대의 선택지를 좁혀 간다. 특히 하드 코트에서 강력하며, 낮은 탄도와 깊은 낙구로 상대를 압박하는 능력이 뛰어나다.</p>
            
            <div className="not-prose my-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700">
                <Target className="w-3 h-3 mr-1 inline" />
                하드 코트의 왕
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Award className="w-3 h-3 mr-1 inline" />
                지공의 미학
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                <Users className="w-3 h-3 mr-1 inline" />
                라이벌과 함께 성장
              </Badge>
            </div>
            <p>팬들이 그를 표현할 때 자주 쓰는 말은 <strong>"하드 코트의 왕"</strong>, <strong>"지공의 미학"</strong>, <strong>"라이벌과 함께 성장하는 선수"</strong>이다. 그의 테니스는 화려한 장식보다는 효율을 위한 전술에 초점을 맞추고 있으며, 특히 리턴과 포지셔닝으로 경기의 흐름을 바꾸는 능력이 뛰어나다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>메드베데프가 세계 상위권을 유지하는 힘은 리턴 능력, 포지셔닝, 그리고 전술적 완성도에서 나온다.</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              기술적 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-lg border-l-2 border-purple-400 dark:border-purple-600">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong className="text-purple-700 dark:text-purple-300">리턴과 포지셔닝</strong>이 가장 큰 무기. 퍼스트 서브에는 뒤에서 출발해 상대의 3구 패턴을 지우고, 세컨드 서브에는 전진해 접점을 앞세운다.
              </p>
            </div>
            <p>리턴 능력이 가장 큰 무기다. 퍼스트 서브에는 한참 뒤에서 출발해 탄도와 길이를 맞춰 상대의 3구 패턴을 지운다. 세컨드 서브에는 전진해 접점을 앞세운다. 바깥에서 안으로 들어오는 이 왕복 동선이 상대의 토스와 코스 선택을 흔들어, 경기 초반부터 심리적 부하를 만든다.</p>
            <p>포핸드는 낮은 탄도와 깊은 낙구로 압박한다. 큰 회전보다 길이로 상대를 밖으로 밀어낸다. 백핸드는 양손의 견고함으로 라인을 얇게 긁어 각을 만든다. 베이스라인 뒤에서 한두 걸음 더 물러난 포지션을 즐겨 취하지만, 그만큼 볼의 길이 제어와 시간 훔치기에 능하다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>코트 커버리지가 뛰어나다. 베이스라인 뒤에서도 깊은 스트로크를 구사할 수 있으며, 장기전에서도 체력 관리가 뛰어나다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">5세트 경기에서도 후반까지 안정적인 경기력</strong>을 유지한다.</p>

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
                타이브레이크 승률 <strong className="text-green-700 dark:text-green-400 text-base">58% 이상</strong> · 리턴 게임 승률 29% · 절차적 완성도
              </p>
            </div>
            <p>포인트 사이 그는 라켓 스트링을 훑고 두 번의 깊은 호흡으로 루틴을 고정한다. 스코어가 기울어도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않는다. 타이브레이크 초반에는 네트를 넉넉히 넘기는 구질로 높이와 길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다.</p>

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              전술적 다양성
            </h3>
            <p>리턴 이후에는 중앙 깊은 볼로 각을 닫아두고, 세 번째 스트로크에서만 코너를 열어 작은 균열을 만든다. 상대가 무리해 각을 열면 즉시 다운더라인으로 전환해 균형을 흔든다. 짧은 볼에는 하프코트에서 한 박자 늦게 닫히는 각도로 마무리한다. 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 속도로 찌른다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="rivalry">이 선수의 라이벌은 누구인가?</h2>
            <p>메드베데프는 강한 가속으로 초반을 장악하는 신세대와 맞붙을 때 각과 길이로 속도를 상쇄한다. 특히 카를로스 알카라즈, 노바크 조코비치 등과의 경기가 유명하다.</p>

            <h3>카를로스 알카라즈와의 라이벌 관계</h3>
            <p>알카라즈는 속도와 파워로 초반을 장악하는 스타일이다. 메드베데프는 리턴 포지션을 뒤로 빼 시간을 벌고, 중앙 깊은 볼로 각을 닫아 두며, 세 번째에서만 코너를 열어 반격한다. 둘 사이의 전적은 치열하며, 특히 하드 코트에서의 경기가 인상적이다.</p>

            <h3>노바크 조코비치와의 라이벌 관계</h3>
            <p>조코비치는 전술적 완성도가 뛰어난 선수다. 메드베데프는 각과 길이로 그의 리턴 능력에 맞선다. 네트를 서두르는 조코비치에게는 낮은 통과샷과 깊은 로브를 번갈아 보여 첫 시도를 주저하게 만든다. 둘 사이의 경기는 전술의 대결로 평가받는다.</p>

            <h3>대표 라이벌 경기</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">라이벌전의 결정적 순간</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>2021년 US 오픈 결승전</strong>에서 노바크 조코비치를 상대로 우승. 리턴과 포지셔닝으로 경기의 흐름을 바꾸며 승리. 특히 세트 포인트 상황에서의 리턴이 인상적이었다.
              </p>
            </div>
            <p>이 경기에서 드러난 건 메드베데프의 전술적 완성도였다. 각과 길이로 상대의 선택지를 좁혀 가는 그의 테니스가 한 경기에 응축되었다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>메드베데프의 커리어를 상징하는 경기는 2021년 US 오픈 우승과 2022년 세계랭킹 1위 달성 과정에서 보여준 대회들이다.</p>

            <h3>2021년 US 오픈 우승</h3>
            <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">커리어 전성기의 정점</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong>2021년 US 오픈</strong>에서 노바크 조코비치를 상대로 우승. 리턴과 포지셔닝으로 경기의 흐름을 바꾸며 승리. 특히 세트 포인트 상황에서의 리턴이 인상적이었다.
              </p>
            </div>
            <p>2021년 US 오픈에서 그는 노바크 조코비치를 상대로 우승을 차지하며 그랜드 슬램 챔피언이 되었다. 이 경기에서 그는 리턴과 포지셔닝으로 경기의 흐름을 바꾸며 승리했다. 특히 세트 포인트 상황에서의 리턴이 인상적이었고, 각과 길이로 상대의 선택지를 좁혀 가는 그의 테니스가 한 경기에 응축되었다.</p>

            <h3>2022년 세계랭킹 1위 달성</h3>
            <p>2022년 그는 세계랭킹 1위를 달성하며 커리어의 정점에 올랐다. 이 시기 동안 그는 하드 코트에서 강력한 모습을 보여주며, 특히 마스터스 1000 시리즈에서 우승을 거두었다. 리턴과 포지셔닝으로 경기의 흐름을 바꾸는 그의 능력이 세계 최고 수준임을 증명했다.</p>

            <h3>대표 명장면</h3>
            <blockquote className="not-prose my-4 p-5 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border-l-4 border-gray-400 dark:border-gray-600 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-800 dark:text-gray-200 mb-0 italic leading-relaxed">
                  브레이크 포인트. 그는 중앙 깊은 볼 두 개로 상대 스텝을 뒤로 밀어낸 뒤, 백핸드를 몸 가까이 끌어당겨 라인으로 단호히 접는다. 공이 흰 선을 스치며 빠져나갈 때 관중의 숨이 잠시 멎고, 그는 같은 속도로 베이스라인을 밟는다. 감정이 아니라 절차가 승부를 만든다는 믿음이 응축된 순간이다.
                </p>
              </div>
            </blockquote>

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>메드베데프는 경기력뿐 아니라 솔직함과 유머, 그리고 규율 덕분에 팬층이 두텁다.</p>

            <h3>코트 매너</h3>
            <p>그는 직설적이지만 책임의 언어가 분명하다. 잘된 날은 준비가 맞았다고, 부족한 날은 수정이 필요하다고 말한다. 패배 뒤에도 책임의 방향을 자기 쪽으로 당기고, 승리한 날에는 스태프와 팬에게 차례로 감사를 전한다. 볼퍼슨과 코트 스태프에게도 예의를 지킨다.</p>

            <h3>인터뷰 스타일</h3>
            <p>인터뷰는 직설적이지만 책임의 언어가 분명하다. 코트 밖에서는 장난기 섞인 유머로 분위기를 풀지만, 경기 전후의 절차와 팀과의 약속은 거의 흐트러뜨리지 않는다. 팬에게는 눈맞춤과 짧은 감사 인사를 잊지 않고, 작은 제스처와 정확한 선택이 모여 한 사람의 초상을 완성한다.</p>

            <h3>팀과의 관계</h3>
            <p>코치와 팀과의 관계에서도 신뢰가 두터운 것으로 알려져 있다. 오랜 기간 함께한 코치와의 유대는 그의 안정적인 경기력에 기여하고 있으며, 팀 전체가 하나의 목표를 향해 나아가는 모습을 보여준다. 러시아의 훈련 문화는 반복과 규칙을 중시하는데, 메드베데프의 테니스에도 이 정신이 뚜렷하다.</p>

            <h2 id="recent-form">요즘 다닐 메드베데프의 경기력 흐름은 어떤가?</h2>
            <p>최근 몇 시즌 동안 메드베데프는 세계랭킹 3위를 유지하며 큰 대회에서도 안정적인 경기력을 보여주고 있다.</p>

            <h3>최근 성적</h3>
            <p>최근 10경기 기준으로 보면, 그는 강한 상대에게도 꾸준히 버티는 편이다. 탑 10 선수들과의 경기에서도 승리를 거두며, 자신의 테니스가 여전히 경쟁력이 있음을 증명하고 있다. 최근 3개월 동안의 성적도 안정적이며, 큰 대회에서 후반 라운드에 진출하는 빈도가 높아졌다.</p>

            <h3>부상 관리</h3>
            <p>부상과 관련해서는 현재 큰 문제가 없는 상태다. 과거 부상의 경험이 있지만, 체계적인 회복과 관리 덕분에 경기에 지장을 주는 수준은 아니다. 다만 나이가 들어감에 따라 몸 관리에 더 신경을 쓰고 있으며, 불필요한 스프린트를 줄이고 효율적인 경기 운영에 집중하고 있다.</p>

            <h3>랭킹과 스타일 변화</h3>
            <p>랭킹 변동을 보면, 그는 현재 세계랭킹 3위를 유지하고 있다. 하락했던 시기가 있었지만, 다시 상위권으로 복귀했고 꾸준한 성적 유지로 최상위권을 지키고 있다. 플레이 스타일의 작은 변화도 눈에 띈다. 과거보다는 더 효율적인 경기를 하기 위해 전술적 다양성을 높였고, 하프코트에서의 마무리를 한 박자 더 빠르게 가져오는 데 집중하고 있다.</p>

            <h2 id="one-sentence-summary">다닐 메드베데프, 한 문장으로 정리하면?</h2>
            <p>다닐 메드베데프는 낮은 탄도와 깊은 낙구로 상대의 선택지를 좁혀 가는 하드 코트의 설계자다.</p>
            <p>그의 테니스는 화려함보다는 효율을 추구하며, 리턴과 포지셔닝으로 경기의 흐름을 바꾸는 전술적 완성도가 특징이다. 타이브레이크와 장기전에서의 멘탈 강점, 그리고 상대의 강점을 거울처럼 받아 적응하는 능력이 세계 상위권을 유지하게 해준다. 솔직함과 유머를 겸비한 그의 테니스는 결과를 넘어 설득으로 남으며, 하드 코트에서의 강력한 모습으로 기억될 것이다.</p>
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
