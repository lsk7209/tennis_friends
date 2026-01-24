import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '코코 고프: 미국의 차세대 슈퍼스타',
  description: '10대 시절부터 천재성을 증명한 코코 고프. 놀라운 코트 커버리지와 강력한 백핸드, 그리고 끊임없이 진화하는 그녀의 테니스 세계를 조명합니다.',
  keywords: ['테니스', '코코 고프', 'Coco Gauff', 'US 오픈', '신성', '백핸드'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/coco-gauff',
  },
  openGraph: {
    title: '코코 고프: 미국의 차세대 슈퍼스타',
    description: '10대 시절부터 천재성을 증명한 코코 고프. 놀라운 코트 커버리지와 강력한 백핸드, 그리고 끊임없이 진화하는 그녀의 테니스 세계를 조명합니다.',
    url: 'https://tennisfriends.co.kr/blog/coco-gauff',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '코코 고프: 미국의 차세대 슈퍼스타',
    description: '10대 시절부터 천재성을 증명한 코코 고프. 놀라운 코트 커버리지와 강력한 백핸드, 그리고 끊임없이 진화하는 그녀의 테니스 세계를 조명합니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'prodigy-wimbledon-debut', text: '15세의 윔블던: 전설을 꺾은 소녀', depth: 2 },
  { id: 'style-athleticism-defense', text: '경기 스타일: 육상 선수급 스피드와 철벽 수비', depth: 2 },
  { id: 'us-open-victory', text: 'US 오픈 여왕 등극: 홈 코트의 영광', depth: 2 },
  { id: 'forehand-evolution', text: '포핸드 약점의 극복과 진화', depth: 2 },
  { id: 'social-activism', text: '코트 밖의 목소리: Z세대의 리더', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: '코코 고프의 가장 큰 장점은 무엇인가요?',
    a: '폭발적인 스피드와 코트 커버리지입니다. 육상 선수 출신 부모님의 유전자를 물려받아 수비 범위가 엄청나게 넓으며, 어떤 공이라도 쫓아가 받아내는 능력이 탁월합니다.'
  },
  {
    q: '그녀의 테니스 커리어 하이라이트는?',
    a: '2023년 US 오픈 우승입니다. 십 대의 나이에 홈 그라운드인 뉴욕에서 메이저 타이틀을 획득하며 세레나 윌리엄스의 뒤를 잇는 미국의 차세대 스타임을 스스로 증명했습니다.'
  },
  {
    q: '코코 고프가 사용하는 라켓은?',
    a: 'Head Boom 시리즈를 사용합니다. 파워와 감각(Feel)의 균형이 좋은 라켓으로, 그녀의 빠른 스윙 스피드와 잘 어울리는 모델입니다.'
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
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">코코 고프</Badge>
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">US 오픈</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            코코 고프: 미국의 차세대 슈퍼스타
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            10대 시절부터 천재성을 증명한 코코 고프. 놀라운 코트 커버리지와 끈질긴 승부 근성을 분석합니다.
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

      <Article slug="coco-gauff" date="2026-01-24" title="코코 고프: 미국의 차세대 슈퍼스타" excerpt="10대 시절부터 천재성을 증명한 코코 고프. 놀라운 코트 커버리지와 강력한 백핸드, 그리고 끊임없이 진화하는 그녀의 테니스 세계를 조명합니다.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <p>
              코코 고프(Coco Gauff)라는 이름이 전 세계에 알려진 것은 2019년 윔블던이었습니다. 불과 15세의 나이로 예선을 통과해 본선 1라운드에서 자신의 우상 비너스 윌리엄스를 꺾는 파란을 일으켰기 때문입니다. 하지만 그녀는 '반짝스타'에 머물지 않았습니다. 매년 꾸준히 성장하며 세계 랭킹을 끌어올렸고, 마침내 메이저 챔피언의 자리에 올랐습니다. 미국의 새로운 테니스 아이콘, 코코 고프를 소개합니다.
            </p>

            <h2 id="style-athleticism-defense">경기 스타일: 육상 선수급 스피드와 철벽 수비</h2>
            <p>
              고프의 테니스는 **'압도적인 운동 능력'**에 기반합니다. 아버지(농구 선수)와 어머니(육상 선수)의 유전자를 물려받은 그녀는 코트 끝에서 끝으로 이동하는 속도가 타의 추종을 불허합니다. 상대가 위닝샷이라고 생각한 공을 걷어 올리는 끈질긴 수비 능력은 그녀의 가장 큰 무기입니다. 특히 백핸드는 투어 최고 수준으로 평가받으며, 어떤 각도에서도 안정적인 샷을 구사합니다. 다만 포핸드의 그립 문제로 인한 불안정성이 약점으로 지적되기도 했으나, 최근 브래드 길버트 코치와의 협업을 통해 공격적인 스타일로 변모하고 있습니다.
            </p>

            <h2 id="us-open-victory">US 오픈 여왕 등극: 홈 코트의 영광</h2>
            <p>
              2023년 US 오픈은 고프에게 대관식과도 같았습니다. 홈 관중의 열광적인 응원 속에 그녀는 결승에서 아리나 사발렌카를 꺾고 생애 첫 그랜드 슬램 우승을 차지했습니다. 10대(Teenager) 우승자로서 트레이시 오스틴, 세레나 윌리엄스의 계보를 잇는 순간이었습니다. 이 우승은 그녀가 더 이상 '유망주'가 아닌, 투어를 이끌어갈 '리더'임을 선포하는 사건이었습니다.
            </p>

            <h2 id="social-activism">코트 밖의 목소리: Z세대의 리더</h2>
            <p>
              고프는 테니스 실력만큼이나 성숙한 인품으로도 유명합니다. 그녀는 인종 차별 반대 운동(Black Lives Matter) 등 사회적 이슈에 대해 자신의 목소리를 내는 것을 주저하지 않습니다. "테니스는 내가 하는 일일 뿐, 나의 전부는 아니다"라는 그녀의 말은 어린 나이답지 않은 깊이를 보여줍니다. 그녀는 단순한 스포츠 스타를 넘어, 동시대 젊은이들에게 영감을 주는 롤 모델로 성장하고 있습니다.
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              코코 고프의 전성기는 아직 오지 않았습니다. 그녀는 여전히 어리고, 배고프며, 발전하고 있습니다. 그녀의 발이 코트를 누비고, 그녀의 목소리가 세상을 울리는 한, 테니스의 미래는 밝을 것입니다.
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
                      <Link href="/utility/tennis-dictionary" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">📚</span>
                        <span className="font-medium">테니스 용어 사전</span>
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
                      <a href="https://www.wtatennis.com/players/328560/coco-gauff" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">🌐</span>
                        <span className="font-medium">코코 고프 WTA 프로필</span>
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
