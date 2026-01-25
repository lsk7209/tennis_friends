import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "왼손잡이 상대 공략법 (Lefty 대응 전술)",
  description: "반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수를 상대로 당황하지 않고 유리한 고지를 점하는 전술적 팁.",
  keywords: ["테니스 전술", "왼손잡이", "Lefty", "서브 리턴", "공략법"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-strategy-vs-lefty',
  },
  openGraph: {
    title: "왼손잡이 상대 공략법 (Lefty 대응 전술)",
    description: "반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수를 상대로 당황하지 않고 유리한 고지를 점하는 전술적 팁.",
    url: 'https://tennisfriends.co.kr/blog/tennis-strategy-vs-lefty',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "왼손잡이 상대 공략법 (Lefty 대응 전술)",
    description: "반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수를 상대로 당황하지 않고 유리한 고지를 점하는 전술적 팁.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '공포의 '애드 코트' 슬라이스 서브 리턴', depth: 2 },
  { id: 'key-point-2', text: '백핸드 집요하게 공략하기 (크로스 코트의 함정)', depth: 2 },
  { id: 'key-point-3', text: '역회전 스핀에 적응하는 법', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "왼손잡이의 백핸드 쪽을 노릴 때 가장 효과적인 샷은?",
    a: "오른손잡이 기준 '포핸드 인사이드-아웃'입니다. 상대의 백핸드 쪽으로 공을 깊게 보내면 왼손잡이는 평소보다 훨씬 많은 움직임을 강요받게 됩니다."
  },
  {
    q: "왼손잡이와 복식을 할 때 주의할 점은?",
    a: "두 사람 모두 포핸드가 코트 중앙에 오게 배치하는 'I-포메이션'이나 전략적 배치가 가능합니다. 하지만 서로의 중간 지점이 어디인지 미리 합의하지 않으면 빈틈이 생길 수 있으니 주의하세요."
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
            <Badge key="왼손잡이" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">왼손잡이</Badge>
            <Badge key="Lefty" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">Lefty</Badge>
            <Badge key="서브 리턴" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">서브 리턴</Badge>
            <Badge key="공략법" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">공략법</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            왼손잡이 상대 공략법 (Lefty 대응 전술)
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수를 상대로 당황하지 않고 유리한 고지를 점하는 전술적 팁.
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

      <Article slug="tennis-strategy-vs-lefty" date="2026-01-24" title="왼손잡이 상대 공략법 (Lefty 대응 전술)" excerpt="반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수를 상대로 당황하지 않고 유리한 고지를 점하는 전술적 팁.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl mb-8 border-l-4 border-indigo-500 shadow-sm">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                테니스 동호인의 약 10% 내외만이 왼손잡이(Lefty)입니다. 평소 오른손잡이와만 랠리를 하다가 가끔 만나는 왼손잡이는 당혹감 그 자체입니다. 공의 회전 방향이 반대이고, 내가 평소 공격하던 코스가 상대의 강점인 포핸드 쪽인 경우가 많기 때문입니다. 왼손잡이를 '평범한 선수'로 만드는 전술적 공식을 소개합니다.
              </p>
            </div>

            <h2 id="key-point-1">공포의 '애드 코트' 슬라이스 서브 리턴</h2>
            <p>
              왼손잡이의 가장 큰 무기는 애드 코트(Ad Court)에서 바깥쪽으로 휘어져 나가는 <strong>와이드 슬라이스 서브</strong>입니다.
            </p>
            <div className="bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 my-6">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-bold text-indigo-600">1.</span>
                  <span><strong>위치 선정:</strong> 평소보다 한두 발자국 더 왼쪽(사이드라인 쪽)으로 치우쳐 서세요.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-indigo-600">2.</span>
                  <span><strong>회전 읽기:</strong> 공의 궤적이 처음엔 중앙으로 오는 듯하다가 바깥으로 도망갑니다. 공의 바깥쪽을 감싸 쥐듯 리턴하세요.</span>
                </li>
              </ul>
            </div>

            <h2 id="key-point-2">백핸드 집요하게 공략하기 (크로스 코트의 함정)</h2>
            <p>
              오른손잡이가 가장 자신 있어 하는 '포핸드 크로스'는 왼손잡이에게는 가장 강력한 <strong>'포핸드 크로스'</strong>로 되돌아옵니다.
            </p>
            <p>
              전술의 핵심은 나의 <strong>백핸드 크로스</strong> 또는 <strong>포핸드 인사이드-아웃</strong>을 통해 상대의 백핸드 쪽을 집요하게 노리는 것입니다. 상대가 백핸드로 공을 받아내게 만들면, 그제야 코트의 빈 공간이 보이기 시작할 것입니다.
            </p>

            <h2 id="key-point-3">역회전 스핀에 적응하는 법</h2>
            <p>
              왼손잡이의 포핸드는 오른손잡이의 포핸드와 스핀 방향이 반대입니다. 공이 바운드 된 후 당신의 몸 쪽으로 감겨 들어오거나, 예상보다 더 멀리 도망갑니다.
            </p>
            <Card className="my-6 bg-indigo-50/50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800">
              <CardContent className="pt-6">
                <p className="text-sm font-medium text-indigo-800 dark:text-indigo-300 mb-0">
                  핵심은 <strong>'잔발(Adjustment Steps)'</strong>입니다. 공이 바인드 된 순간의 변화에 대응하기 위해 마지막 순간까지 발을 쉬지 마세요. 타점을 평소보다 조금 더 앞에서 잡는 것이 회전의 영향을 최소화하는 방법입니다.
                </p>
              </CardContent>
            </Card>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              라파엘 나달이 수많은 오른손잡이 챔피언들을 무너뜨린 비결은 단순한 실력이 아니라 '왼손잡이의 이점'을 극대화했기 때문입니다. 하지만 반대로 생각하면, 왼손잡이 역시 오른손잡이를 대할 때 일정한 패턴을 가지고 있습니다. 그 패턴을 읽고 먼저 백핸드 쪽을 선점한다면, 왼손잡이는 더 이상 두려운 존재가 아닐 것입니다.
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
            currentSlug="tennis-strategy-vs-lefty"
            category="테니스 전술"
            tags={["테니스 전술", "왼손잡이", "Lefty", "서브 리턴", "공략법"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
