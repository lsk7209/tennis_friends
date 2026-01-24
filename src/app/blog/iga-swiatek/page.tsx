import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '이가 시비옹테크: 무결점의 테니스 여제',
  description: '강력한 탑스핀 포핸드와 압도적인 멘탈로 WTA를 지배하는 이가 시비옹테크의 경기 스타일, 성장 과정, 그리고 그녀가 이룬 기록들을 분석합니다.',
  keywords: ['테니스', '이가 시비옹테크', 'Iga Swiatek', 'WTA', '선수 프로필', '프랑스 오픈'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/iga-swiatek',
  },
  openGraph: {
    title: '이가 시비옹테크: 무결점의 테니스 여제',
    description: '강력한 탑스핀 포핸드와 압도적인 멘탈로 WTA를 지배하는 이가 시비옹테크의 경기 스타일, 성장 과정, 그리고 그녀가 이룬 기록들을 분석합니다.',
    url: 'https://tennisfriends.co.kr/blog/iga-swiatek',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '이가 시비옹테크: 무결점의 테니스 여제',
    description: '강력한 탑스핀 포핸드와 압도적인 멘탈로 WTA를 지배하는 이가 시비옹테크의 경기 스타일, 성장 과정, 그리고 그녀가 이룬 기록들을 분석합니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'style-heavy-topspin', text: '경기 스타일: 나달을 연상시키는 헤비 탑스핀', depth: 2 },
  { id: 'mental-strength', text: '멘탈리티: 심리학자와 함께 걷는 챔피언', depth: 2 },
  { id: 'french-open-dominance', text: '클레이의 여왕: 롤랑가로스 지배력', depth: 2 },
  { id: 'off-court-personality', text: '코트 밖의 독서광이자 재즈 팬', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: '이가 시비옹테크의 주무기는 무엇인가요?',
    a: 'WTA 투어에서 가장 강력한 회전수를 자랑하는 \'헤비 탑스핀 포핸드\'입니다. 남자 선수들에 버금가는 RPM으로 공이 바운드 후 높고 빠르게 튀어 올라 상대를 뒤로 밀어냅니다.'
  },
  {
    q: '시비옹테크가 멘탈 관리를 위해 특별히 하는 것이 있나요?',
    a: '그녀는 투어 초기부터 스포츠 심리학자 다리아 아브라모비치와 동행하며 멘탈 코칭을 필수적인 훈련의 일부로 삼았습니다. 이는 그녀가 어린 나이에도 흔들리지 않는 평정심을 유지하는 비결입니다.'
  },
  {
    q: '그녀가 가장 강한 면모를 보이는 코트는 어디인가요?',
    a: '클레이 코트입니다. 프랑스 오픈(롤랑가로스)에서 압도적인 승률을 자랑하며, \'클레이의 여왕\'이라는 별명을 얻었습니다.'
  },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스</Badge>
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">이가 시비옹테크</Badge>
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">WTA</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            이가 시비옹테크: 무결점의 테니스 여제
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            강력한 탑스핀 포핸드와 압도적인 멘탈로 WTA를 지배하는 이가 시비옹테크. 그녀의 독보적인 테니스 세계를 분석합니다.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">6분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2026-01-24</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="iga-swiatek" date="2026-01-24" title="이가 시비옹테크: 무결점의 테니스 여제" excerpt="강력한 탑스핀 포핸드와 압도적인 멘탈로 WTA를 지배하는 이가 시비옹테크의 경기 스타일, 성장 과정, 그리고 그녀가 이룬 기록들을 분석합니다.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <p>
              2020년 프랑스 오픈, 19세의 나이로 혜성처럼 등장해 무실세트 우승을 차지했던 소녀는 이제 명실상부한 '테니스의 여왕'이 되었습니다. 이가 시비옹테크(Iga Swiatek)는 단순히 랭킹 1위 자리를 지키는 것을 넘어, 압도적인 경기력으로 여자 테니스(WTA)의 새로운 기준을 세우고 있습니다. 그녀가 어떻게 짧은 시간 안에 정상에 올랐으며, 왜 전문가들이 그녀의 독주 체제를 예상하는지 깊이 있게 분석해 봅니다.
            </p>

            <h2 id="style-heavy-topspin">경기 스타일: 나달을 연상시키는 헤비 탑스핀</h2>
            <p>
              시비옹테크의 가장 큰 특징은 **'익스트림 웨스턴 그립'**에서 뿜어져 나오는 강력한 탑스핀 포핸드입니다. 그녀의 포핸드 회전수(RPM)는 종종 3,000을 상회하며, 이는 ATP 남자 선수들의 평균에 육박하거나 뛰어넘는 수치입니다. 바운드 후 높고 빠르게 튀어 오르는 공은 상대를 베이스라인 뒤로 물러나게 만들고, 이 틈을 타 그녀는 코트를 넓게 활용하며 위너를 꽂아 넣습니다. 그녀의 우상인 라파엘 나달을 연상시키는 이 플레이 스타일은 특히 클레이 코트에서 파괴력이 배가됩니다.
            </p>

            <h2 id="mental-strength">멘탈리티: 심리학자와 함께 걷는 챔피언</h2>
            <p>
              많은 젊은 선수들이 멘탈 문제로 재능을 꽃피우지 못하는 것과 달리, 시비옹테크는 데뷔 초부터 **스포츠 심리학자 다리아 아브라모비치(Daria Abramowicz)**를 팀의 핵심 멤버로 대동했습니다. 그녀는 경기 중 평정심을 유지하기 위해 수학 문제를 풀거나, 음악을 활용하는 등 독창적인 루틴을 가지고 있습니다. "테니스는 신체 게임인 동시에 두뇌 게임"이라는 그녀의 철학은 위기 상황에서도 흔들리지 않는 '강철 멘탈'의 원천입니다. 베이글 스코어(6-0 승리)가 유독 많은 이유도 끝까지 집중력을 놓지 않는 그녀의 성향 때문입니다.
            </p>

            <h2 id="french-open-dominance">클레이의 여왕: 롤랑가로스 지배력</h2>
            <p>
              그녀에게 파리의 붉은 흙은 안방과도 같습니다. 프랑스 오픈(롤랑가로스)에서의 압도적인 성적은 그녀를 '클레이의 여왕'으로 불리게 했습니다. 클레이 코트는 공의 속도를 늦추고 바운드를 높여주는데, 이는 시비옹테크의 헤비 탑스핀과 빠른 발을 극대화할 수 있는 최적의 조건입니다. 그녀는 클레이 시즌이 되면 말 그대로 '언터처블' 모드에 들어가며, 수많은 연승 기록을 갈아치우곤 합니다.
            </p>

            <h2 id="off-court-personality">코트 밖의 독서광이자 재즈 팬</h2>
            <p>
              코트 위에서는 맹수 같지만, 코트 밖의 이가는 조용하고 지적인 성격으로 알려져 있습니다. 그녀는 소문난 독서광으로, 대회 중에도 항상 책을 챙겨 다니며 독서 챌린지를 즐깁니다. 또한 록 음악이나 힙합 대신 재즈나 클래식 록을 즐겨 듣는 성숙한 취향을 가지고 있습니다. 이러한 차분한 성향은 화려한 스포트라이트 속에서도 그녀가 자신을 잃지 않고 테니스에만 집중할 수 있게 해주는 원동력입니다.
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              이가 시비옹테크는 피지컬과 멘탈, 그리고 기술의 완벽한 조화를 보여주는 선수입니다. 그녀의 시대는 이제 막 시작되었을지도 모릅니다. 앞으로 그녀가 써 내려갈 테니스 역사의 페이지들은 우리에게 더 큰 놀라움과 감동을 줄 것입니다.
            </p>

          </div>

          {/* Related Links */}
          <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                관련 자료
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    내부 링크
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/players" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🏆</span>
                        <span className="font-medium">선수 프로필 더보기</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/ntrp-test" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🎯</span>
                        <span className="font-medium">NTRP 자가 진단</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    추천 링크
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.wtatennis.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">🌐</span>
                        <span className="font-medium">WTA 투어</span>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
