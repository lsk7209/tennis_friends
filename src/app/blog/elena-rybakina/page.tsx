import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '엘레나 리바키나: 차가운 아이스 퀸의 플레이',
  description: '감정을 드러내지 않는 포커페이스와 우아한 위너. 엘레나 리바키나의 간결한 스윙 메커니즘과 강력한 서브의 비결을 파헤칩니다.',
  keywords: ['테니스', '엘레나 리바키나', 'Elena Rybakina', 'Wimbledon', '서브 퀸'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/elena-rybakina',
  },
  openGraph: {
    title: '엘레나 리바키나: 차가운 아이스 퀸의 플레이',
    description: '감정을 드러내지 않는 포커페이스와 우아한 위너. 엘레나 리바키나의 간결한 스윙 메커니즘과 강력한 서브의 비결을 파헤칩니다.',
    url: 'https://tennisfriends.co.kr/blog/elena-rybakina',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '엘레나 리바키나: 차가운 아이스 퀸의 플레이',
    description: '감정을 드러내지 않는 포커페이스와 우아한 위너. 엘레나 리바키나의 간결한 스윙 메커니즘과 강력한 서브의 비결을 파헤칩니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'style-efficiency', text: '경기 스타일: 군더더기 없는 효율성', depth: 2 },
  { id: 'wimbledon-2022', text: '윔블던 2022: 잔디의 새 여왕', depth: 2 },
  { id: 'serve-power', text: '서브의 위력: WTA 최고 속도', depth: 2 },
  { id: 'poker-face', text: '포커페이스: 감정을 감추는 전략', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: '리바키나의 서브는 얼마나 빠른가요?',
    a: 'WTA에서 최상위권 서브 속도를 자랑하며, 시속 200km를 넘기는 경우도 있습니다. 그녀의 신장(184cm)과 긴 팔을 활용한 레버리지가 큰 역할을 합니다.'
  },
  {
    q: '그녀가 윔블던에서 우승한 해는?',
    a: '2022년 윔블던에서 우승을 차지했습니다. 카자흐스탄 국적으로는 역사상 첫 그랜드 슬램 우승이었습니다.'
  },
  {
    q: '리바키나의 별명이 "아이스 퀸"인 이유는?',
    a: '경기 중 거의 감정을 표출하지 않는 냉정한 태도 때문입니다. 승리해도, 패배해도 그녀의 표정은 변함이 없어 상대가 심리를 읽기 어렵습니다.'
  },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스</Badge>
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">엘레나 리바키나</Badge>
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">Wimbledon</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            엘레나 리바키나: 차가운 아이스 퀸의 플레이
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            감정을 드러내지 않는 포커페이스와 우아한 위너. 그녀의 간결한 스윙과 강력한 서브를 분석합니다.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">5분 읽기</span>
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

      <Article slug="elena-rybakina" date="2026-01-24" title="엘레나 리바키나: 차가운 아이스 퀸의 플레이" excerpt="감정을 드러내지 않는 포커페이스와 우아한 위너. 엘레나 리바키나의 간결한 스윙 메커니즘과 강력한 서브의 비결을 파헤칩니다.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <p>
              엘레나 리바키나(Elena Rybakina)는 '조용한 암살자'입니다. 코트 위에서 그녀의 표정은 언제나 일정하고, 포효도 없습니다. 하지만 그녀의 라켓에서 뿜어져 나오는 공은 상대의 심장을 꿰뚫습니다. 2022년 윔블던 우승 이후 그녀는 WTA 투어에서 가장 두려운 상대 중 하나로 자리 잡았습니다. 감정이 아닌 실력으로 말하는 선수, 리바키나를 소개합니다.
            </p>

            <h2 id="style-efficiency">경기 스타일: 군더더기 없는 효율성</h2>
            <p>
              리바키나의 테니스는 **'간결함(Economy of Motion)'**의 극치입니다. 불필요한 백스윙이 없고, 컴팩트한 테이크백에서 폭발적인 가속을 만들어냅니다. 특히 포핸드는 플랫에 가까운 궤적으로 코트를 관통하며, 타점이 매우 정확해 실수가 적습니다. 그녀의 플레이를 보고 있으면 마치 정밀하게 프로그래밍된 로봇을 보는 것 같습니다. 감정적 동요 없이, 오직 승리라는 목표만을 향해 일관되게 움직입니다.
            </p>

            <h2 id="wimbledon-2022">윔블던 2022: 잔디의 새 여왕</h2>
            <p>
              2022년 윔블던 결승전에서 리바키나는 온스 자베르를 꺾고 생애 첫 그랜드 슬램 타이틀을 거머쥐었습니다. 빠른 잔디 코트는 그녀의 강력한 서브와 플랫 드라이브 샷을 극대화할 수 있는 최적의 무대였습니다. 우승 트로피를 들어 올린 순간에도 그녀의 표정은 담담했고, 이는 오히려 더 강한 인상을 남겼습니다. "감정을 드러내지 않는 것이 내 방식"이라는 그녀의 말처럼, 그녀는 자신만의 길을 묵묵히 걷습니다.
            </p>

            <h2 id="serve-power">서브의 위력: WTA 최고 속도</h2>
            <p>
              184cm의 신장과 긴 팔을 활용한 그녀의 서브는 WTA에서 최상위권 속도를 자랑합니다. 시속 200km를 넘기는 서브는 남자 선수들과 견주어도 손색이 없습니다. 더 중요한 것은 속도만큼이나 **코스의 정확성**입니다. 와이드 서브로 상대를 코트 밖으로 끌어낸 뒤 오픈 코트로 위너를 꽂는 패턴은 그녀의 단골 메뉴입니다.
            </p>

            <h2 id="poker-face">포커페이스: 감정을 감추는 전략</h2>
            <p>
              많은 선수가 펌프질과 포효로 기세를 올리는 것과 달리, 리바키나는 침묵을 무기로 씁니다. 상대는 그녀의 심리 상태를 전혀 알 수 없고, 이는 오히려 불안감을 유발합니다. 심리학자들은 이를 '감정적 중립성(Emotional Neutrality)'이라 부르며, 상대에게 심리적 힌트를 주지 않는 강력한 전략이라고 평가합니다.
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              엘레나 리바키나는 화려한 퍼포먼스 대신 묵묵한 실력으로 승부합니다. 그녀의 차가운 눈빛 뒤에는 뜨거운 승부욕이 숨어 있습니다. 앞으로 그녀가 또 어떤 기록을 세울지 기대가 됩니다.
            </p>

          </div>

          <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">관련 자료</h3>
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
