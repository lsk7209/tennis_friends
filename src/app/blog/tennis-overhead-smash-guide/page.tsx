import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "스매싱 실수 줄이는 법 (오버헤드 스매시 가이드)",
  description: "가장 강력하지만 가장 실수하기 쉬운 샷. 스매싱의 타점 잡기, 왼손의 역할, 그리고 자신감 있게 마무리하는 비결.",
  keywords: ["테니스 기술", "스매싱", "오버헤드", "Smash", "결정구"],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-overhead-smash-guide',
  },
  openGraph: {
    title: "스매싱 실수 줄이는 법 (오버헤드 스매시 가이드)",
    description: "가장 강력하지만 가장 실수하기 쉬운 샷. 스매싱의 타점 잡기, 왼손의 역할, 그리고 자신감 있게 마무리하는 비결.",
    url: 'https://www.tennisfrens.com/blog/tennis-overhead-smash-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "스매싱 실수 줄이는 법 (오버헤드 스매시 가이드)",
    description: "가장 강력하지만 가장 실수하기 쉬운 샷. 스매싱의 타점 잡기, 왼손의 역할, 그리고 자신감 있게 마무리하는 비결.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '준비 동작: "옆으로 서고 왼손을 들어라"', depth: 2 },
  { id: 'key-point-2', text: '풋워크: "공 밑으로 빠르게 들어가라"', depth: 2 },
  { id: 'key-point-3', text: '임팩트와 팔로스루: "풀스윙보다 정확도"', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "키가 작아서 스매싱이 어려워요.",
    a: "키보다는 점프 타이밍과 타점 포착이 더 중요합니다. 공을 끝까지 위를 보며 정점에서 맞추는 연습을 하세요. 또한 너무 높은 로브라면 무리하게 스매싱을 하는 대신 바운드가 된 후 처리하는 '바운드 스매싱'도 좋은 방법입니다."
  },
  {
    q: "스매싱할 때 자꾸 네트에 걸리는 이유는?",
    a: "대부분 공을 너무 앞에서 맞추거나, 타구 시 머리를 너무 빨리 숙이기 때문입니다. 공이 내 머리보다 살짝 앞쪽일 때 임팩트하고, 공이 코트에 맞을 때까지 시선을 유지해 보세요."
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
            <Badge key="테니스 기술" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스 기술</Badge>
            <Badge key="스매싱" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">스매싱</Badge>
            <Badge key="오버헤드" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">오버헤드</Badge>
            <Badge key="Smash" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">Smash</Badge>
            <Badge key="결정구" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">결정구</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            스매싱 실수 줄이는 법 (오버헤드 스매시 가이드)
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            가장 강력하지만 가장 실수하기 쉬운 샷. 스매싱의 타점 잡기, 왼손의 역할, 그리고 자신감 있게 마무리하는 비결.
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

      <Article showHeader={false} slug="tennis-overhead-smash-guide" date="2026-01-24" title="스매싱 실수 줄이는 법 (오버헤드 스매시 가이드)" excerpt="가장 강력하지만 가장 실수하기 쉬운 샷. 스매싱의 타점 잡기, 왼손의 역할, 그리고 자신감 있게 마무리하는 비결.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl mb-8 border border-red-100 dark:border-red-800">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                테니스에서 가장 화끈하고 짜릿한 샷은 <strong>스매싱(Smash)</strong>입니다. 하지만 의외로 동호인들이 가장 실수를 많이 하는 샷이기도 합니다. 분명히 찬스 공인데 왜 홈런을 치거나 네트에 박히는 걸까요? 스매싱 성공률을 90% 이상으로 끌어올리는 체크리스트를 정리했습니다.
              </p>
            </div>

            <h2 id="key-point-1">준비 동작: "옆으로 서고 왼손을 들어라"</h2>
            <p>
              가장 흔한 실수는 정면을 보고 서는 것입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-sm">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <h4 className="font-bold mb-2">1. 사이드웨이 스탠스</h4>
                <p>라켓을 든 어깨가 뒤로 가도록 몸을 옆으로 트세요. 그래야 어깨 회전력을 온전히 공에 전달할 수 있습니다.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <h4 className="font-bold mb-2">2. 왼손 포인팅</h4>
                <p>왼손으로 낙하지점을 가리키세요. 이는 타점의 정확도를 높여줄 뿐만 아니라, 몸의 균형을 잡아주는 안테나 역할을 합니다.</p>
              </div>
            </div>

            <h2 id="key-point-2">풋워크: "공 밑으로 빠르게 들어가라"</h2>
            <p>
              스매싱 오류의 80%는 <strong>'타점 설정 실패'</strong>에서 옵니다.
            </p>
            <p>
              공이 높게 뜰 때 가만히 서서 기다리지 마세요. 잔발(사이들 스텝이나 사이드 셔플)을 이용해 공이 내 머리보다 약간 앞쪽에 오도록 빠르게 움직여야 합니다. 뒤로 물러나면서 치는 스매싱은 파워가 실리지 않을뿐더러 부상의 위험도 큽니다.
            </p>

            <h2 id="key-point-3">임팩트와 팔로스루: "풀스윙보다 정확도"</h2>
            <p>
              찬스라고 해서 100%의 힘으로 때릴 필요는 없습니다.
            </p>
            <Card className="my-6 border-l-4 border-red-500">
              <CardContent className="pt-6">
                <p className="text-sm font-medium mb-2">성공적인 스매싱의 3요소:</p>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                  <li>✔ <strong>컨티넨탈 그립:</strong> 서브와 마찬가지로 스냅을 활용하기 좋습니다.</li>
                  <li>✔ <strong>손목 고정 X:</strong> 마지막 순간 손목을 부드럽게 눌러줘야 공이 코트 안으로 꽂힙니다.</li>
                  <li>✔ <strong>시선 유지:</strong> 공을 끝까지 보세요. 머리가 먼저 내려가면 공은 어김없이 네트에 걸립니다.</li>
                </ul>
              </CardContent>
            </Card>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              스매싱은 '파워'가 아니라 '정확도'의 게임입니다. 80%의 힘으로 구석 코스로 보내기만 해도 포인트는 당신의 것이 됩니다. 다음 경기에서는 왼손으로 공을 가리키며 끝까지 공을 보는 연습부터 시작해 보세요!
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
                      <Link href="/players" className="group flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🏆</span>
                        <span className="font-medium">선수 프로필 더보기</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/ntrp-test" className="group flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
                      <a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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
            currentSlug="tennis-overhead-smash-guide"
            category="테니스 기술"
            tags={["테니스 기술", "스매싱", "오버헤드", "Smash", "결정구"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
