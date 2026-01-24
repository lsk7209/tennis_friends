import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "서브 리턴 전략: 서버의 구질 읽는 법",
  description: "게임의 시작은 서브지만, 브레이크의 시작은 리턴입니다. 스플릿 스텝 타이밍, 그립 전환, 그리고 서버의 루틴을 읽는 법.",
  keywords: ["테니스 전술", "리턴", "Return", "서브 공략", "브레이크"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-return-of-serve-strategy',
  },
  openGraph: {
    title: "서브 리턴 전략: 서버의 구질 읽는 법",
    description: "게임의 시작은 서브지만, 브레이크의 시작은 리턴입니다. 스플릿 스텝 타이밍, 그립 전환, 그리고 서버의 루틴을 읽는 법.",
    url: 'https://tennisfriends.co.kr/blog/tennis-return-of-serve-strategy',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "서브 리턴 전략: 서버의 구질 읽는 법",
    description: "게임의 시작은 서브지만, 브레이크의 시작은 리턴입니다. 스플릿 스텝 타이밍, 그립 전환, 그리고 서버의 루틴을 읽는 법.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '핵심 포인트 1', depth: 2 },
  { id: 'key-point-2', text: '핵심 포인트 2', depth: 2 },
  { id: 'key-point-3', text: '핵심 포인트 3', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "강서브를 리턴할 때 손목이 너무 아파요.",
    a: "라켓을 너무 꽉 쥐고 있거나, 정확한 스핀으로 공을 받아내지 못하기 때문일 수 있습니다. 면만 만들어준다는 느낌으로 가볍게 블로킹하고, 임팩트 순간 팔 전체의 무게로 밀어내 보세요."
  },
  {
    q: "리턴할 때 어느 정도 앞에 서 있어야 하나요?",
    a: "서버의 속도에 따라 다릅니다. 빠른 서브라면 베이스라인 한두 발자국 뒤가 적당하며, 두 번째 서브처럼 느린 공이라면 베이스라인 안쪽으로 적극적으로 들어가서 리턴하는 것이 좋습니다."
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
            <Badge key="테니스 전술" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스 전술</Badge>
            <Badge key="리턴" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">리턴</Badge>
            <Badge key="Return" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">Return</Badge>
            <Badge key="서브 공략" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">서브 공략</Badge>
            <Badge key="브레이크" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">브레이크</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            서브 리턴 전략: 서버의 구질 읽는 법
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            게임의 시작은 서브지만, 브레이크의 시작은 리턴입니다. 스플릿 스텝 타이밍, 그립 전환, 그리고 서버의 루틴을 읽는 법.
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

      <Article slug="tennis-return-of-serve-strategy" date="2026-01-24" title="서브 리턴 전략: 서버의 구질 읽는 법" excerpt="게임의 시작은 서브지만, 브레이크의 시작은 리턴입니다. 스플릿 스텝 타이밍, 그립 전환, 그리고 서버의 루틴을 읽는 법.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-2xl mb-8 border-l-4 border-indigo-500">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                테니스 경기의 절반은 리턴 게임입니다. 많은 사람들이 서브 연습에는 수백 시간을 쏟지만, 정작 <strong>'서브 리턴'</strong> 전술에는 무심하곤 합니다. 하지만 리턴 하나만 안정되어도 당신의 승률은 비약적으로 상승합니다. 상대의 서브를 무력화하고 게임 브레이크를 끌어낼 수 있는 전술적 노하우를 공개합니다.
              </p>
            </div>

            <h2 id="key-point-1">스플릿 스텝의 마법: "공이 아니라 서버를 보라"</h2>
            <p>
              성공적인 리턴의 시작은 리듬입니다.
            </p>
            <p>
              상대의 라켓이 공에 닿기 직전, 몸을 가볍게 점프시키는 <strong>스플릿 스텝</strong>을 밟으세요. 이때 시선은 상대의 공뿐만 아니라 토스의 높이와 라켓의 궤적을 함께 살펴야 합니다. 서버의 버릇(예: 와이드 서브를 넣을 때 토스가 더 옆으로 기우는 등)을 읽어낼 수 있다면 리턴은 훨씬 쉬워집니다.
            </p>

            <h2 id="key-point-2">짧은 백스윙: "상대의 파워를 빌려라"</h2>
            <p>
              서브는 게임에서 가장 빠른 공입니다. 평소 스트로크처럼 큰 테이크백을 가져가면 늦기 십상입니다.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 my-6">
              <p className="text-sm italic">
                "리턴은 치는 것이 아니라 <strong>'블로킹'</strong>하는 것이다."
              </p>
              <p className="text-xs text-slate-500 mt-2">라켓을 뒤로 빼지 말고 어깨만 가볍게 틀어주세요. 상대의 강력한 서브 속도를 반사판처럼 그대로 되돌려주는 것만으로도 충분히 위협적인 리턴이 됩니다.</p>
            </div>

            <h2 id="key-point-3">리턴의 타겟팅: "안전이 우선이다"</h2>
            <p>
              초보자의 실수는 리턴으로 즉시 위너를 치려 하는 것입니다.
            </p>
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li><strong>첫 번째 서브 리턴:</strong> 무조건 깊게, 코트 중앙으로 보내세요. 상대가 서브 대시를 하거나 강력한 3구 공격을 하는 것을 방지하는 것이 최우선 목표입니다.</li>
              <li><strong>두 번째 서브 리턴:</strong> 좀 더 공격적으로 임하세요. 상대의 약한 쪽(주로 백핸드)으로 깊게 보내거나, 각도를 넓게 벌려 상대를 뛰게 만드세요.</li>
            </ul>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              리턴은 멘탈 싸움입니다. 아무리 강력한 서브라도 한두 번 코트 깊숙이 되돌려보내면 서버는 심리적으로 흔들리기 시작합니다. 당신의 리턴이 벽(Wall)처럼 느껴지게 만드세요. 그것이 서브 게임을 브레이크하는 가장 확실한 방법입니다.
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
          <RelatedPosts
            currentSlug="tennis-return-of-serve-strategy"
            category="테니스 전술"
            tags={["테니스 전술", "리턴", "Return", "서브 공략", "브레이크"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
