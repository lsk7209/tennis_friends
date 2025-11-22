import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: '우고 엄베르 — 세계랭킹 20위권 | 플레이스타일·명장면·최근 경기력',
  description: '우고 엄베르의 좌완 서브&발리 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 좌완 서브의 각도와 발리의 정밀도로 코트를 지배하는 프랑스 출신의 세계랭킹 20위권 선수.',
  keywords: ['우고 엄베르', 'Ugo Humbert', '테니스', 'ATP', '플레이스타일', '프랑스 테니스', '좌완', '서브&발리'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/ugo-humbert',
  },
  openGraph: {
    title: '우고 엄베르 — 세계랭킹 20위권 | 플레이스타일·명장면·최근 경기력',
    description: '우고 엄베르의 좌완 서브&발리 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://www.tennisfrens.com/players/ugo-humbert',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '우고 엄베르 — 세계랭킹 20위권 | 플레이스타일·명장면·최근 경기력',
    description: '우고 엄베르의 좌완 서브&발리 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
  { id: 'why-again-notable', text: '우고 엄베르, 왜 주목받는 선수인가?', depth: 2 },
  { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
  { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 우고 엄베르의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '우고 엄베르, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '우고 엄베르의 경기 스타일은 어떤가요?',
    a: '좌완 서브&발리 스타일로, 좌완 서브의 각도와 발리의 정밀도가 특징입니다. 와이드 서브로 공간을 벌리고 발리로 마무리하는 전통적인 서브&발리 게임을 현대적으로 구현합니다.',
  },
  {
    q: '엄베르의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 20위권이었으며, 현재도 20위권을 유지하고 있습니다. 특히 2024년 파리 마스터스에서 세계랭킹 2위 알카라즈를 꺾으며 큰 주목을 받았습니다.',
  },
  {
    q: '엄베르의 강점은 무엇인가요?',
    a: '좌완 서브의 각도와 발리의 정밀도가 최대 강점입니다. 와이드 서브로 공간을 벌리고 발리로 마무리하는 능력이 뛰어나며, 특히 좌완의 유리함을 잘 활용합니다.',
  },
  {
    q: '엄베르의 인간적인 면모는 어떤가요?',
    a: '침착한 성격과 전술적 사고가 특징입니다. 인터뷰에서 경기 분석을 차분하게 설명하며, 팀과의 협력도 중요하게 생각합니다.',
  },
  {
    q: '엄베르를 한 문장으로 설명하면?',
    a: '좌완 서브의 각도와 발리의 정밀도로 코트를 지배하는 프랑스 출신의 강자입니다.',
  },
];

export default function UgoHumbertPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="우고 엄베르"
        excerpt="좌완 서브의 각도와 발리의 정밀도로 코트를 지배하는 프랑스 출신의 강자"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '우고 엄베르', '선수 프로필', '프랑스', '좌완', '서브&발리'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-again-notable">우고 엄베르, 왜 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  좌완 서브의 각도와 발리의 정밀도로 코트를 지배하는 프랑스 출신의 강자
                </p>
              </div>
            </blockquote>
            <p>우고 엄베르는 프랑스 출신의 세계랭킹 20위권 테니스 선수로, 좌완 서브의 각도와 발리의 정밀도로 ATP 투어를 지배하고 있다. 세계랭킹 20위권을 유지하며, 특히 좌완의 유리함을 잘 활용한 서브&발리 게임이 특징이다. 와이드 서브로 공간을 벌리고 발리로 마무리하는 그의 테니스는 현대적 서브&발리의 설계자로 평가받는다.</p>
            <p>그는 2024년 파리 마스터스에서 세계랭킹 2위 카를로스 알카라즈를 꺾으며 큰 주목을 받았고, 2025년 마르세유와 두바이에서 우승을 차지하며 좋은 컨디션을 유지하고 있다. 최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 탑 10 선수들과의 경기에서도 승리를 거두고 있다. 그의 테니스는 전통적인 서브&발리 게임을 현대적으로 구현하며, 특히 좌완의 각도가 뛰어나다.</p>

            <h2 id="what-type-of-player">이 선수는 어떤 유형의 플레이어인가?</h2>
            <p>우고 엄베르는 프랑스 출신의 세계랭킹 20위권 선수로, 좌완 서브&발리 스타일과 정밀한 발리 기술이 특징인 ATP 투어의 강자다.</p>
            
            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">국적:</strong> <span className="text-gray-600 dark:text-gray-400">프랑스</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">생년:</strong> <span className="text-gray-600 dark:text-gray-400">1998년 (26세)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">최고 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">20위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">현재 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">20위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">주 종목:</strong> <span className="text-gray-600 dark:text-gray-400">단식 (ATP 투어)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">플레이 스타일:</strong> <span className="text-gray-600 dark:text-gray-400">서브&발리</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">시그니처 무기:</strong> <span className="text-gray-600 dark:text-gray-400">좌완 서브</span></span>
                </li>
              </ul>
            </div>

            <p>플레이 스타일은 서브&발리로 분류된다. 베이스라인에서도 강력한 그라운드 스트로크를 구사하지만, 특히 좌완 서브의 각도와 발리의 정밀도가 뛰어나다. 와이드 서브로 공간을 벌리고 발리로 마무리하는 전통적인 서브&발리 게임을 현대적으로 구현한다.</p>
            
            <div className="not-prose my-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700">
                <Zap className="w-3 h-3 mr-1 inline" />
                좌완 서브
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Shield className="w-3 h-3 mr-1 inline" />
                정밀한 발리
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                <Target className="w-3 h-3 mr-1 inline" />
                각도 활용
              </Badge>
            </div>
            <p>팬들이 그를 표현할 때 자주 쓰는 말은 <strong>"좌완 서브"</strong>, <strong>"정밀한 발리"</strong>, <strong>"각도 활용"</strong>이다. 그의 테니스는 전통적인 서브&발리 게임을 현대적으로 구현하며, 특히 좌완의 유리함을 잘 활용한다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>엄베르가 세계 상위권을 유지하는 힘은 좌완 서브의 각도, 정밀한 발리 기술, 그리고 전술적 다양성에서 나온다.</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              기술적 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-lg border-l-2 border-purple-400 dark:border-purple-600">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong className="text-purple-700 dark:text-purple-300">좌완 서브의 각도</strong>가 가장 큰 무기. 와이드 서브로 공간을 벌리고 발리로 마무리한다.
              </p>
            </div>
            <p>좌완 서브의 각도가 가장 큰 무기다. 와이드 서브로 공간을 벌리고 발리로 마무리한다. 좌완의 유리함을 잘 활용해 애드코트 와이드로 크게 휘어나가는 킥성 구질로 리턴러를 코트 밖으로 끌어낸다. 첫 타에서 공간을 벌리고 두 번째에서 결말을 재촉하는 테니스다.</p>
            <p>서브는 와이드와 바디의 비율을 바꿔 첫 두 타구의 구조를 설계하고, 짧은 리턴이 오면 하프코트에서 한 걸음 전진해 발리로 결말을 재촉한다. 발리는 정밀한 각도와 깊이로 상대의 선택지를 좁힌다. 특히 포핸드 발리의 각도가 뛰어나며, 백핸드 발리도 안정적이다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>네트 플레이가 뛰어나다. 발리로 전진하는 능력이 뛰어나며, 특히 하프 발리에서 풀 발리로 전환하는 능력이 뛰어나다. 코트 커버리지도 좋아 베이스라인에서도 강력한 그라운드 스트로크를 구사한다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">짧은 랠리에서도 발리로 마무리하는 능력</strong>이 뛰어나다.</p>

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
                타이브레이크 승률이 60%를 넘는 편이며, 특히 좌완 서브의 유리함을 잘 활용해 중요한 포인트에서 서브를 활용한다.
              </p>
            </div>
            <p>타이브레이크 승률이 60%를 넘는 편이며, 특히 좌완 서브의 유리함을 잘 활용해 중요한 포인트에서 서브를 활용한다. 중요한 포인트에서도 침착하게 서브&발리 게임을 구사하며, 특히 브레이크 포인트에서도 서브로 위기를 벗어나는 능력이 뛰어나다.</p>

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              전술적 다양성
            </h3>
            <p>서브&발리 게임을 기본으로 하되, 베이스라인에서도 강력한 그라운드 스트로크를 구사한다. 상대의 약점을 파악해 서브 위치를 조절하며, 특히 좌완의 유리함을 잘 활용한다. 발리로 전진하는 타이밍도 뛰어나며, 특히 하프 발리에서 풀 발리로 전환하는 능력이 뛰어나다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>엄베르를 설명하는 대표 경기는 2024년 파리 마스터스 3라운드에서 세계랭킹 2위 카를로스 알카라즈를 꺾은 경기와 2025년 마르세유와 두바이에서 우승을 차지한 경기다.</p>

            <div className="not-prose my-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">2024년 파리 마스터스 3라운드</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>상대:</strong> 카를로스 알카라즈 (세계랭킹 2위)
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>결과:</strong> 6-1, 3-6, 7-5 승리
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                이 경기에서 드러난 건 엄베르의 좌완 서브의 각도와 발리의 정밀도였다. 특히 첫 세트에서 6-1로 압도하며 좌완 서브의 유리함을 잘 활용했고, 세 번째 세트에서도 침착하게 서브&발리 게임을 구사하며 승리를 거두었다.
              </p>
            </div>

            <p>이 경기로 인해 엄베르는 큰 주목을 받기 시작했고, 특히 좌완 서브&발리 게임의 현대적 구현자로 평가받기 시작했다. 팬들과 전문가들은 그의 좌완 서브의 각도와 발리의 정밀도를 높이 평가했고, 특히 탑 10 선수들과의 경기에서도 승리를 거둘 수 있는 능력을 보여줬다.</p>

            <div className="not-prose my-6 p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border border-green-200 dark:border-green-800 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">2025년 마르세유와 두바이 우승</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                2025년 마르세유와 두바이에서 우승을 차지하며 좋은 컨디션을 유지하고 있다. 특히 좌완 서브의 각도와 발리의 정밀도가 뛰어나며, 큰 대회에서도 안정적인 경기력을 보여주고 있다.
              </p>
            </div>

            <blockquote className="not-prose my-6 p-4 bg-indigo-50 dark:bg-indigo-950/30 border-l-4 border-indigo-500 rounded-r-lg">
              <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                "이 경기에서 드러난 건 엄베르의 좌완 서브의 각도와 발리의 정밀도였다."
              </p>
            </blockquote>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>경기력뿐 아니라 침착한 성격과 전술적 사고 덕분에 팬층이 두텁다.</p>

            <h3 className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
              코트 매너
            </h3>
            <p>침착한 성격이 특징이다. 경기 중에도 감정을 드러내지 않고 차분하게 경기를 진행하며, 특히 중요한 포인트에서도 침착하게 서브&발리 게임을 구사한다. 페어플레이를 중시하며, 상대 선수와의 관계도 좋다.</p>

            <h3 className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              인터뷰 스타일
            </h3>
            <p>인터뷰에서 경기 분석을 차분하게 설명하며, 특히 좌완 서브의 각도와 발리의 정밀도에 대해 자세히 설명한다. 팀과의 협력도 중요하게 생각하며, 특히 코치와의 관계도 좋다.</p>

            <h3 className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              팀과의 관계
            </h3>
            <p>코치와의 관계가 좋으며, 특히 전술적 조언을 잘 받아들인다. 팀과의 협력도 중요하게 생각하며, 특히 프랑스 테니스의 미래를 이끌어갈 선수로 평가받는다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="recent-form">요즘 우고 엄베르의 경기력 흐름은 어떤가?</h2>
            <p>최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 2025년 마르세유와 두바이에서 우승을 차지하며 좋은 컨디션을 유지하고 있다.</p>

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
                <li>• 2025년 마르세유 우승</li>
                <li>• 2025년 두바이 우승</li>
                <li>• 2024년 파리 마스터스에서 알카라즈 꺾음</li>
              </ul>
            </div>
            <p>최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 2025년 마르세유와 두바이에서 우승을 차지하며 좋은 컨디션을 유지하고 있다. 특히 좌완 서브의 각도와 발리의 정밀도가 뛰어나며, 큰 대회에서도 안정적인 경기력을 보여주고 있다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              부상 및 컨디션
            </h3>
            <p>2025년 US 오픈에서 등 부상으로 어려움을 겪었지만, 이후 회복하여 마르세유와 두바이에서 우승을 차지하며 좋은 컨디션을 유지하고 있다. 큰 부상 없이 경기에 임하고 있으며, 특히 체력 관리도 잘 하고 있다.</p>

            <h3 className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              랭킹 변동
            </h3>
            <p>랭킹 변동을 보면, 그는 현재 세계랭킹 20위권을 유지하고 있다. 최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 탑 10 선수들과의 경기에서도 승리를 거두고 있다. 플레이 스타일의 작은 변화도 눈에 띈다. 과거보다는 더 효율적인 경기를 하기 위해 전술적 다양성을 높였고, 특히 좌완 서브의 각도 활용을 더욱 강화하고 있다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="one-sentence-summary">우고 엄베르, 한 문장으로 정리하면?</h2>
            <p>좌완 서브의 각도와 발리의 정밀도로 코트를 지배하는 프랑스 출신의 강자다.</p>
            <p>엄베르는 전통적인 서브&발리 게임을 현대적으로 구현하며, 특히 좌완의 유리함을 잘 활용한다. 와이드 서브로 공간을 벌리고 발리로 마무리하는 능력이 뛰어나며, 특히 정밀한 발리 기술이 뛰어나다. 최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 2025년 마르세유와 두바이에서 우승을 차지하며 좋은 컨디션을 유지하고 있다.</p>
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
              buttonText="선수 목록 보기"
              buttonLink="/players"
            />
          </div>
        </div>
      </Article>
    </div>
  );
}

