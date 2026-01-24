import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '닉 키리오스: 코트 위의 악동이자 천재',
  description: '예측 불가능한 플레이와 쇼맨십. 닉 키리오스의 천재적인 감각과 그 뒤에 숨겨진 테니스 철학, 그리고 논란과 매력을 동시에 탐구합니다.',
  keywords: ['테니스', '닉 키리오스', 'Nick Kyrgios', '트릭샷', '악동', '서브'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/nick-kyrgios',
  },
  openGraph: {
    title: '닉 키리오스: 코트 위의 악동이자 천재',
    description: '예측 불가능한 플레이와 쇼맨십. 닉 키리오스의 천재적인 감각과 그 뒤에 숨겨진 테니스 철학, 그리고 논란과 매력을 동시에 탐구합니다.',
    url: 'https://tennisfriends.co.kr/blog/nick-kyrgios',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '닉 키리오스: 코트 위의 악동이자 천재',
    description: '예측 불가능한 플레이와 쇼맨십. 닉 키리오스의 천재적인 감각과 그 뒤에 숨겨진 테니스 철학, 그리고 논란과 매력을 동시에 탐구합니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'style-genius', text: '경기 스타일: 규칙을 벗어나는 천재성', depth: 2 },
  { id: 'underarm-serve', text: '언더암 서브와 트릭샷의 예술가', depth: 2 },
  { id: 'mental-health', text: '멘탈 헬스 고백: 솔직함의 힘', depth: 2 },
  { id: 'controversy', text: '논란과 진정성 사이', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: '키리오스의 가장 유명한 샷은?',
    a: '언더암 서브(Underarm Serve)와 백핸드 트윈 샷입니다. 상대가 베이스라인 뒤에 있을 때 깜짝 언더암 서브를 넣어 포인트를 따내는 장면은 그의 시그니처입니다.'
  },
  {
    q: '왜 그는 논란의 중심에 자주 서나요?',
    a: '심판과의 언쟁, 라켓 파손, 경기 도중 탱킹(의도적 패배) 의혹 등으로 수차례 벌금과 징계를 받았습니다. 하지만 그는 "테니스가 너무 지루해서는 안 된다"며 자신의 스타일을 고수합니다.'
  },
  {
    q: '키리오스가 가장 잘하는 코트는?',
    a: '빠른 하드 코트와 잔디 코트입니다. 특히 2022년 윔블던에서 준우승을 차지하며 잔디에서의 강력한 서브와 네트 플레이를 입증했습니다.'
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
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">닉 키리오스</Badge>
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">트릭샷</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            닉 키리오스: 코트 위의 악동이자 천재
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            예측 불가능한 플레이와 쇼맨십. 닉 키리오스의 천재적인 감각과 그 뒤의 진심을 분석합니다.
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

      <Article slug="nick-kyrgios" date="2026-01-24" title="닉 키리오스: 코트 위의 악동이자 천재" excerpt="예측 불가능한 플레이와 쇼맨십. 닉 키리오스의 천재적인 감각과 그 뒤에 숨겨진 테니스 철학, 그리고 논란과 매력을 동시에 탐구합니다.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <p>
              닉 키리오스(Nick Kyrgios)는 테니스계의 '말 많고 탈 많은' 문제아입니다. 하지만 그를 단순히 악동으로만 치부할 수 없는 이유는, 그의 라켓에서 나오는 샷들이 정말로 경이롭기 때문입니다. 언더암 서브, 백핸드 트윈 샷, 노룩 포핸드... 그는 관객을 '와우'하게 만드는 재주가 있습니다. 기존의 틀을 깨고 테니스에 재미를 되돌려놓은 선수, 키리오스의 양면성을 탐구합니다.
            </p>

            <h2 id="style-genius">경기 스타일: 규칙을 벗어나는 천재성</h2>
            <p>
              키리오스의 테니스는 교과서와 정반대입니다. 그는 훈련을 싫어한다고 공공연히 말하며, 대회 중 연습도 최소한으로만 합니다. 하지만 코트에 서면 그의 타고난 **터치(Touch)**와 **코트 감각**이 빛을 발합니다. 시속 220km의 광속 서브, 믿을 수 없는 각도의 패싱샷, 그리고 상대를 당황시키는 예측 불허의 플레이. 그는 "훈련은 재능을 이길 수 없다"는 것을 보여주는 살아있는 증거입니다.
            </p>

            <h2 id="underarm-serve">언더암 서브와 트릭샷의 예술가</h2>
            <p>
              그의 트레이드마크는 **언더암 서브**입니다. 많은 이가 이를 '매너 없는 행동'이라 비난했지만, 키리오스는 "상대가 베이스라인 너무 뒤에 서 있으면 당연히 벌을 줘야 한다"며 당당합니다. 실제로 규칙상 아무 문제가 없으며, 오히려 전술적으로 매우 합리적인 선택입니다. 그는 테니스의 '예의'보다 '승리'를 택하는 선수이며, 이것이 그를 끊임없이 화제의 중심에 놓이게 합니다.
            </p>

            <h2 id="mental-health">멘탈 헬스 고백: 솔직함의 힘</h2>
            <p>
              코트 밖의 키리오스는 우울증과 불안장애로 고통받았습니다. 그는 이를 숨기지 않고 공개적으로 인정하며, 정신 건강에 대한 사회적 편견을 허물었습니다. "테니스는 내 인생의 전부가 아니다. 나는 사람이 먼저다"라는 그의 말은 많은 선수들과 팬들에게 울림을 주었습니다. 승부욕보다 자신의 행복을 우선시하는 그의 태도는, 어쩌면 가장 성숙한 자세일지도 모릅니다.
            </p>

            <h2 id="controversy">논란과 진정성 사이</h2>
            <p>
              키리오스는 심판에게 욕설을 하고, 라켓을 부수고, 경기를 포기한 적도 있습니다. 하지만 그는 또한 호주 산불 피해자를 위해 자선 경기를 조직하고, 어려운 이웃을 돕는 데 앞장섰습니다. 그는 복잡하고 모순적인 인간입니다. 하지만 바로 그 인간적인 면모가 사람들을 끌어당깁니다. 완벽한 롤 모델이 아니어도 괜찮습니다. 그는 그저 자기 자신일 뿐입니다.
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              닉 키리오스는 테니스 역사에서 가장 논쟁적인 선수이지만, 동시에 가장 재능 있는 선수 중 하나입니다. 그는 우리에게 묻습니다. "테니스는 무조건 진지해야만 하는가?" 그의 답은 "아니오"입니다. 그리고 그 답이 테니스를 더 흥미진진하게 만듭니다.
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
                      <a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">🌐</span>
                        <span className="font-medium">ATP 투어</span>
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
