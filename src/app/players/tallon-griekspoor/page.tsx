import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: '탈론 크리에크스푸르 — 세계랭킹 35위권 | 플레이스타일·명장면·최근 경기력',
  description: '탈론 크리에크스푸르의 강력한 서브와 그라운드 스트로크 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필. 네덜란드 테니스의 희망으로 떠오르는 세계랭킹 35위권 선수.',
  keywords: ['탈론 크리에크스푸르', 'Tallon Griekspoor', '테니스', 'ATP', '플레이스타일', '네덜란드 테니스', '서브', '그라운드 스트로크'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/tallon-griekspoor',
  },
  openGraph: {
    title: '탈론 크리에크스푸르 — 세계랭킹 35위권 | 플레이스타일·명장면·최근 경기력',
    description: '탈론 크리에크스푸르의 강력한 서브와 그라운드 스트로크 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    url: 'https://www.tennisfrens.com/players/tallon-griekspoor',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: '탈론 크리에크스푸르 — 세계랭킹 35위권 | 플레이스타일·명장면·최근 경기력',
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
  { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
  { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
  { id: 'recent-form', text: '요즘 탈론 크리에크스푸르의 경기력 흐름은 어떤가?', depth: 2 },
  { id: 'one-sentence-summary', text: '탈론 크리에크스푸르, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
  {
    q: '탈론 크리에크스푸르의 경기 스타일은 어떤가요?',
    a: '강력한 서브와 그라운드 스트로크 스타일로, 특히 서브의 속도와 정확도가 특징입니다. 네덜란드 테니스의 희망으로 평가받고 있습니다.',
  },
  {
    q: '그릭스푸어의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
    a: '최고 랭킹은 30위권이었으며, 현재는 35위권을 유지하고 있습니다. 특히 최근 몇 시즌 동안 꾸준한 성적을 거두며 상위권으로 올라가고 있습니다.',
  },
  {
    q: '그릭스푸어의 강점은 무엇인가요?',
    a: '강력한 서브와 그라운드 스트로크가 최대 강점입니다. 서브의 속도와 정확도가 뛰어나며, 특히 포핸드의 파워가 뛰어납니다.',
  },
  {
    q: '그릭스푸어의 인간적인 면모는 어떤가요?',
    a: '열정적이고 도전적인 성격이 특징입니다. 인터뷰에서 경기 분석을 솔직하게 설명하며, 팀과의 협력도 중요하게 생각합니다.',
  },
  {
    q: '그릭스푸어를 한 문장으로 설명하면?',
    a: '강력한 서브와 그라운드 스트로크로 네덜란드 테니스의 희망으로 떠오르는 선수입니다.',
  },
];

export default function TallonGriekspoorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="탈론 크리에크스푸르"
        excerpt="강력한 서브와 그라운드 스트로크로 네덜란드 테니스의 희망으로 떠오르는 선수"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '탈론 크리에크스푸르', '선수 프로필', '네덜란드', '서브', '그라운드 스트로크'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-again-notable">탈론 크리에크스푸르, 왜 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  강력한 서브와 그라운드 스트로크로 네덜란드 테니스의 희망으로 떠오르는 선수
                </p>
              </div>
            </blockquote>
            <p>탈론 크리에크스푸르는 네덜란드 출신의 세계랭킹 35위권 테니스 선수로, 강력한 서브와 그라운드 스트로크로 ATP 투어를 지배하고 있다. 세계랭킹 35위권을 유지하며, 특히 서브의 속도와 정확도가 뛰어나다. 그의 테니스는 네덜란드 테니스의 희망으로 평가받는다.</p>
            <p>그는 최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 상위권으로 올라가고 있다. 최고 랭킹 30위권을 기록했으며, 특히 탑 10 선수들과의 경기에서도 승리를 거두고 있다. 그의 테니스는 강력한 서브와 그라운드 스트로크를 기반으로 하며, 특히 포핸드의 파워가 뛰어나다.</p>

            <h2 id="what-type-of-player">이 선수는 어떤 유형의 플레이어인가?</h2>
            <p>탈론 크리에크스푸르는 네덜란드 출신의 세계랭킹 35위권 선수로, 강력한 서브와 그라운드 스트로크 스타일이 특징인 ATP 투어의 강자다.</p>
            
            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">국적:</strong> <span className="text-gray-600 dark:text-gray-400">네덜란드</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">생년:</strong> <span className="text-gray-600 dark:text-gray-400">1996년 (28세)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">최고 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">30위권</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-gray-700 dark:text-gray-300">현재 랭킹:</strong> <span className="text-gray-600 dark:text-gray-400">35위권</span></span>
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

            <p>플레이 스타일은 공격형으로 분류된다. 강력한 서브와 그라운드 스트로크를 구사하며, 특히 서브의 속도와 정확도가 뛰어나다. 포핸드의 파워가 뛰어나며, 백핸드도 안정적이다.</p>
            
            <div className="not-prose my-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700">
                <Zap className="w-3 h-3 mr-1 inline" />
                강력한 서브
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
                <Shield className="w-3 h-3 mr-1 inline" />
                파워 포핸드
              </Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                <Target className="w-3 h-3 mr-1 inline" />
                네덜란드의 희망
              </Badge>
            </div>
            <p>팬들이 그를 표현할 때 자주 쓰는 말은 <strong>"강력한 서브"</strong>, <strong>"파워 포핸드"</strong>, <strong>"네덜란드의 희망"</strong>이다. 그의 테니스는 강력한 서브와 그라운드 스트로크를 기반으로 하며, 특히 포핸드의 파워가 뛰어나다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-keeps-top-ranking">이 선수가 세계 상위권을 지키는 힘은 무엇인가?</h2>
            <p>그릭스푸어가 세계 상위권을 유지하는 힘은 강력한 서브, 파워 포핸드, 그리고 안정적인 백핸드에서 나온다.</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              기술적 강점
            </h3>
            <div className="not-prose my-4 p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-lg border-l-2 border-purple-400 dark:border-purple-600">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong className="text-purple-700 dark:text-purple-300">강력한 서브</strong>가 가장 큰 무기. 서브의 속도와 정확도가 뛰어나다.
              </p>
            </div>
            <p>강력한 서브가 가장 큰 무기다. 서브의 속도와 정확도가 뛰어나며, 특히 첫 서브의 성공률이 높다. 서브는 깊이와 각도를 조절해 상대의 약점을 공략하며, 특히 에이스와 서비스 위너를 많이 만들어낸다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">서브로 경기를 지배하는 능력</strong>이 뛰어나다.</p>
            <p>포핸드는 파워가 뛰어나며, 특히 깊이와 각도를 조절해 상대의 약점을 공략한다. 백핸드는 안정적으로 랠리를 이어가며, 특히 깊이와 정확도가 뛰어나다. 그라운드 스트로크는 강력하며, 특히 포핸드의 파워가 뛰어나다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              피지컬 능력
            </h3>
            <p>체력이 뛰어나다. 긴 랠리에서도 강력한 그라운드 스트로크를 구사하며, 특히 5세트 경기에서도 안정적인 경기력을 보여준다. 코트 커버리지도 좋아 베이스라인에서도 강력한 그라운드 스트로크를 구사한다.</p>

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
                서브 에이스 수가 투어 상위권 수준이며, 특히 중요한 포인트에서도 강력한 서브를 구사한다.
              </p>
            </div>
            <p>서브 에이스 수가 투어 상위권 수준이며, 특히 중요한 포인트에서도 강력한 서브를 구사한다. 타이브레이크 승률도 높은 편이며, 특히 서브로 경기를 지배하는 능력이 뛰어나다. <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">강력한 서브로 경기를 이끌어가는 능력</strong>이 뛰어나다.</p>

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              전술적 다양성
            </h3>
            <p>공격형 게임을 기본으로 하되, 전술적 다양성이 높다. 상대의 약점을 파악해 서브 위치를 조절하며, 특히 강력한 서브를 활용해 경기를 이끌어간다. 그라운드 스트로크는 강력하며, 특히 포핸드의 파워를 활용해 상대의 약점을 공략한다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
            <p>그릭스푸어를 설명하는 대표 경기는 최근 몇 시즌 동안 상위권 선수들을 꺾은 경기와 대회에서 좋은 성적을 거둔 경기다.</p>

            <div className="not-prose my-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">최근 대회 성적</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>특징:</strong> 상위권 선수들과의 경기에서 승리
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                이 경기에서 드러난 건 그릭스푸어의 강력한 서브와 그라운드 스트로크였다. 특히 서브의 속도와 정확도가 뛰어나며, 포핸드의 파워가 뛰어나다. 이 경기로 인해 그릭스푸어는 큰 주목을 받기 시작했고, 특히 네덜란드 테니스의 희망으로 평가받기 시작했다.
              </p>
            </div>

            <p>이 경기로 인해 그릭스푸어는 큰 주목을 받기 시작했고, 특히 네덜란드 테니스의 희망으로 평가받기 시작했다. 팬들과 전문가들은 그의 강력한 서브와 그라운드 스트로크를 높이 평가했고, 특히 상위권으로 올라갈 수 있는 능력을 보여줬다.</p>

            <blockquote className="not-prose my-6 p-4 bg-indigo-50 dark:bg-indigo-950/30 border-l-4 border-indigo-500 rounded-r-lg">
              <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                "이 경기에서 드러난 건 그릭스푸어의 강력한 서브와 그라운드 스트로크였다."
              </p>
            </blockquote>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
            <p>경기력뿐 아니라 열정적이고 도전적인 성격 덕분에 팬층이 두텁다.</p>

            <h3 className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
              코트 매너
            </h3>
            <p>열정적이고 도전적인 성격이 특징이다. 경기 중에도 감정을 드러내며 경기를 진행하며, 특히 중요한 포인트에서도 강력한 서브를 구사한다. 페어플레이를 중시하며, 상대 선수와의 관계도 좋다.</p>

            <h3 className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              인터뷰 스타일
            </h3>
            <p>인터뷰에서 경기 분석을 솔직하게 설명하며, 특히 강력한 서브와 그라운드 스트로크에 대해 자세히 설명한다. 팀과의 협력도 중요하게 생각하며, 특히 코치와의 관계도 좋다.</p>

            <h3 className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              팀과의 관계
            </h3>
            <p>코치와의 관계가 좋으며, 특히 전술적 조언을 잘 받아들인다. 팀과의 협력도 중요하게 생각하며, 특히 네덜란드 테니스의 희망으로 평가받는다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="recent-form">요즘 탈론 크리에크스푸르의 경기력 흐름은 어떤가?</h2>
            <p>최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 상위권으로 올라가고 있다.</p>

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
                <li>• 최고 랭킹 30위권 달성</li>
                <li>• 상위권 선수들과의 경기에서 승리</li>
                <li>• 꾸준한 성적 향상</li>
              </ul>
            </div>
            <p>최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 상위권으로 올라가고 있다. 특히 강력한 서브와 그라운드 스트로크가 뛰어나며, 큰 대회에서도 안정적인 경기력을 보여주고 있다.</p>

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              부상 및 컨디션
            </h3>
            <p>큰 부상 없이 경기에 임하고 있으며, 특히 체력 관리도 잘 하고 있다. 최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 강력한 서브와 그라운드 스트로크를 기반으로 경기를 이끌어가고 있다.</p>

            <h3 className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              랭킹 변동
            </h3>
            <p>랭킹 변동을 보면, 그는 현재 세계랭킹 35위권을 유지하고 있다. 최고 랭킹 30위권을 기록했으며, 최근 몇 시즌 동안 꾸준한 성적을 거두고 있다. 플레이 스타일의 작은 변화도 눈에 띈다. 과거보다는 더 효율적인 경기를 하기 위해 전술적 다양성을 높였고, 특히 강력한 서브의 활용을 더욱 강화하고 있다.</p>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            <h2 id="one-sentence-summary">탈론 크리에크스푸르, 한 문장으로 정리하면?</h2>
            <p>강력한 서브와 그라운드 스트로크로 네덜란드 테니스의 희망으로 떠오르는 선수다.</p>
            <p>그릭스푸어는 강력한 서브와 그라운드 스트로크를 기반으로 하며, 특히 포핸드의 파워가 뛰어나다. 서브의 속도와 정확도가 뛰어나며, 특히 에이스와 서비스 위너를 많이 만들어낸다. 최근 몇 시즌 동안 꾸준한 성적을 거두며, 특히 상위권으로 올라가고 있다.</p>
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

