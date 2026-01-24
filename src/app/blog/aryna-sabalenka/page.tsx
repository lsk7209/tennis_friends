import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '아리나 사발렌카: 파워 테니스의 정점',
  description: '폭발적인 서브와 그라운드 스트로크로 코트를 장악하는 아리나 사발렌카. 그녀의 공격적인 스타일과 멘탈 극복 스토리를 다룹니다.',
  keywords: ['테니스', '아리나 사발렌카', 'Aryna Sabalenka', 'WTA', '강서브', '호주 오픈'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/aryna-sabalenka',
  },
  openGraph: {
    title: '아리나 사발렌카: 파워 테니스의 정점',
    description: '폭발적인 서브와 그라운드 스트로크로 코트를 장악하는 아리나 사발렌카. 그녀의 공격적인 스타일과 멘탈 극복 스토리를 다룹니다.',
    url: 'https://tennisfriends.co.kr/blog/aryna-sabalenka',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '아리나 사발렌카: 파워 테니스의 정점',
    description: '폭발적인 서브와 그라운드 스트로크로 코트를 장악하는 아리나 사발렌카. 그녀의 공격적인 스타일과 멘탈 극복 스토리를 다룹니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'style-power-tennis', text: '경기 스타일: 타협 없는 파워 테니스', depth: 2 },
  { id: 'mental-transformation', text: '멘탈의 진화: 더블 폴트 여왕에서 서브 퀸으로', depth: 2 },
  { id: 'australian-open-breakthrough', text: '메이저 우승과 아버지와의 약속', depth: 2 },
  { id: 'tiger-tattoo-meaning', text: '팔뚝의 호랑이 문신이 의미하는 것', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: '사발렌카의 서브가 왜 특별한가요?',
    a: 'WTA에서 가장 빠른 축에 속하는 시속 190km 이상의 광속 서브를 구사합니다. 과거에는 더블 폴트가 많아 약점이었지만, 바이오메카닉 교정을 통해 현재는 가장 믿을 수 있는 무기가 되었습니다.'
  },
  {
    q: '그녀의 별명 \'The Tiger\'의 유래는?',
    a: '왼쪽 팔뚝에 있는 호랑이 문신과 코트 위에서 포효하는 공격적인 스타일 때문에 붙여진 별명입니다. 그녀는 18세 때 이 문신을 새기며 코트 위에서 호랑이처럼 싸우겠다고 다짐했습니다.'
  },
  {
    q: '사발렌카가 우승한 그랜드 슬램 대회는?',
    a: '호주 오픈에서 강세를 보이며, 2023년과 2024년 2년 연속 우승을 차지했습니다. 하드 코트에서 그녀의 파워 테니스가 가장 잘 발휘됩니다.'
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
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">아리나 사발렌카</Badge>
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">WTA</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            아리나 사발렌카: 파워 테니스의 정점
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            폭발적인 서브와 그라운드 스트로크로 코트를 장악하는 아리나 사발렌카. 그녀의 공격적인 스타일과 멘탈 극복 스토리를 분석합니다.
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

      <Article slug="aryna-sabalenka" date="2026-01-24" title="아리나 사발렌카: 파워 테니스의 정점" excerpt="폭발적인 서브와 그라운드 스트로크로 코트를 장악하는 아리나 사발렌카. 그녀의 공격적인 스타일과 멘탈 극복 스토리를 다룹니다.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <p>
              단지 공을 세게 치는 것만으로 세계 1위에 오를 수는 없습니다. 아리나 사발렌카(Aryna Sabalenka)는 압도적인 파워를 가지고 있었지만, 불안정한 서브와 감정적인 기복으로 오랫동안 '미완의 대기'로 평가받았습니다. 하지만 그녀는 끊임없는 자기 혁신을 통해 단점을 강점으로 바꾸었고, 마침내 메이저 챔피언의 자리에 올랐습니다. 코트 위의 호랑이, 사발렌카의 진화 과정을 살펴봅니다.
            </p>

            <h2 id="style-power-tennis">경기 스타일: 타협 없는 파워 테니스</h2>
            <p>
              사발렌카의 테니스는 '공격 일변도'입니다. 그녀의 포핸드와 백핸드는 모두 투어 최상위권의 스피드를 자랑하며, 상대가 수비할 시간조차 주지 않고 코트 구석을 찌릅니다. 단순히 힘으로만 밀어붙이는 것이 아니라, 네트 앞에서의 과감한 드라이브 발리와 스매싱으로 포인트를 마무리하는 결정력이 탁월합니다. 그녀를 상대하는 선수들은 첫 서브부터 리턴까지 매 순간 엄청난 압박감을 느끼게 됩니다.
            </p>

            <h2 id="mental-transformation">멘탈의 진화: 더블 폴트 여왕에서 서브 퀸으로</h2>
            <p>
              2022년 초, 그녀는 극심한 서브 난조(Yips)를 겪으며 한 경기에서 20개 이상의 더블 폴트를 범하기도 했습니다. 많은 전문가가 그녀의 추락을 예상했지만, 그녀는 바이오메카닉 전문가와 함께 서브 모션을 처음부터 다시 뜯어고치는 과감한 결단을 내렸습니다. 그 결과, 지금 그녀의 서브는 WTA에서 가장 위협적인 무기가 되었습니다. 이 과정에서 보여준 그녀의 용기와 끈기는 기술적인 성취보다 더 큰 울림을 줍니다.
            </p>

            <h2 id="australian-open-breakthrough">메이저 우승과 아버지와의 약속</h2>
            <p>
              그녀의 왼쪽 팔뚝에는 돌아가신 아버지를 기리는 호랑이 문신이 있습니다. 아이스하키 선수 출신이었던 아버지는 그녀에게 "25살이 되기 전에 그랜드 슬램을 두 개 우승하겠다"는 목표를 심어준 멘토였습니다. 2019년 갑작스러운 아버지의 별세는 그녀에게 큰 시련이었지만, 그녀는 그 약속을 지키기 위해 라켓을 더욱 꽉 쥐었습니다. 그리고 마침내 호주 오픈 우승 트로피를 들어 올리며 하늘에 있는 아버지에게 헌정했습니다.
            </p>

            <h2 id="tiger-tattoo-meaning">팔뚝의 호랑이 문신이 의미하는 것</h2>
            <p>
              "나는 코트 위에서 파이터가 되어야 해요." 그녀의 팔에 새겨진 호랑이는 단순한 장식이 아닙니다. 경기 흐름이 불리할 때, 관중의 응원이 상대방에게 쏠릴 때, 그녀는 이 문신을 보며 자신 안의 야성을 깨웁니다. 사발렌카의 트레이드마크인 경기 중의 포효는 단순히 화를 내는 것이 아니라, 스스로에게 싸울 의지를 불어넣는 의식과도 같습니다.
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              아리나 사발렌카는 완성형 선수가 되어서 돌아왔습니다. 파워와 정교함, 열정과 냉정 사이의 균형을 찾은 그녀는 이제 어떤 코트, 어떤 상대를 만나도 물러서지 않습니다. '파워 테니스의 정점'을 보여주는 그녀의 경기는 언제나 짜릿한 전율을 선사합니다.
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
                      <Link href="/utility/play-style-test" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🎾</span>
                        <span className="font-medium">내 플레이 스타일 찾기</span>
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
                      <a href="https://www.wtatennis.com/players/320760/aryna-sabalenka" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">🌐</span>
                        <span className="font-medium">사발렌카 WTA 프로필</span>
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
