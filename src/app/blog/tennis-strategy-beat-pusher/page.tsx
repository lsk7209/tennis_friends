import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "일명 '푸셔(Pusher)'를 이기는 5가지 전략",
  description: "실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. 인내심을 유지하며 결정적인 찬스를 만드는 푸셔 공략 가이드.",
  keywords: ["테니스 전술", "푸셔", "Pusher", "연타", "멘탈 관리"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-strategy-beat-pusher',
  },
  openGraph: {
    title: "일명 '푸셔(Pusher)'를 이기는 5가지 전략",
    description: "실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. 인내심을 유지하며 결정적인 찬스를 만드는 푸셔 공략 가이드.",
    url: 'https://tennisfriends.co.kr/blog/tennis-strategy-beat-pusher',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "일명 '푸셔(Pusher)'를 이기는 5가지 전략",
    description: "실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. 인내심을 유지하며 결정적인 찬스를 만드는 푸셔 공략 가이드.",
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
    q: "푸셔를 상대로 실수를 줄이는 가장 좋은 연습법은?",
    a: "베이스라인 한가운데로 계속 공을 보내는 '중앙 랠리' 연습을 추천합니다. 사이드로 빼려다 실수하는 것보다 중앙으로 길게 보내며 상대가 스스로 짧은 공을 줄 때까지 기다리는 인내심을 기르는 것이 핵심입니다."
  },
  {
    q: "푸셔가 로브를 계속 띄울 때 어떻게 대응하나요?",
    a: "억지로 스매싱으로 끝내려 하지 마세요. 로브를 다시 로브로 응수하거나, 높은 타점의 오버헤드보다는 바운드 후 여유 있게 처리하는 연습이 필요합니다. 상대가 네트 앞으로 오게 만드는 것이 최선입니다."
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
            <Badge key="푸셔" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">푸셔</Badge>
            <Badge key="Pusher" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">Pusher</Badge>
            <Badge key="연타" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">연타</Badge>
            <Badge key="멘탈 관리" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">멘탈 관리</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            일명 '푸셔(Pusher)'를 이기는 5가지 전략
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. 인내심을 유지하며 결정적인 찬스를 만드는 푸셔 공략 가이드.
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

      <Article slug="tennis-strategy-beat-pusher" date="2026-01-24" title="일명 '푸셔(Pusher)'를 이기는 5가지 전략" excerpt="실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. 인내심을 유지하며 결정적인 찬스를 만드는 푸셔 공략 가이드.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-2xl mb-8 border border-indigo-100 dark:border-indigo-800">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                테니스 동호인 사이에서 가장 '짜증나는' 상대를 꼽으라면 단연 <strong>푸셔(Pusher)</strong>입니다. 화려한 샷은 없지만, 어떤 공이든 집요하게 끝까지 넘겨 결국 나의 실수를 유도하는 그들. 푸셔를 이기는 법은 더 강한 공을 치는 것이 아니라, 전술적으로 그들을 '코트 밖'으로 끌어내는 것입니다.
              </p>
            </div>

            <h2 id="key-point-1">푸셔의 심리: "네가 실수할 때까지 기다릴게"</h2>
            <p>
              푸셔를 상대할 때 가장 큰 적은 상대가 아니라 본인의 <strong>조급함</strong>입니다. 푸셔는 당신이 위너를 치려다 베이스라인을 벗어나는 공을 보며 승리를 확신합니다.
            </p>
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li><strong>인내심 유지:</strong> 랠리를 10회 이상 이어갈 준비를 하세요.</li>
              <li><strong>무리한 위너 금지:</strong> 70~80%의 힘으로 코스만 공략하며 찬스를 기다려야 합니다.</li>
            </ul>

            <h2 id="key-point-2">최고의 공략법: 짧은 공으로 네트 호출</h2>
            <p>
              푸셔는 베이스라인 뒤에서 수비할 때 가장 강력합니다. 그들의 리듬을 깨는 가장 확실한 방법은 <strong>드롭샷</strong>이나 <strong>짧은 슬라이스</strong>로 그들을 네트 앞으로 끌어내는 것입니다.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 my-6">
              <p className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">💡 왜 먹힐까요?</p>
              <p className="text-sm mb-0">대부분의 푸셔는 '넘기는 기술'은 좋지만 네트 플레이나 발리 마무리에는 취약합니다. 그들을 원치 않는 자리(네트 앞)로 불러내면 당황하여 로브를 띄우거나 실수를 하게 됩니다.</p>
            </div>

            <h2 id="key-point-3">높은 궤도와 깊이로 대응하기</h2>
            <p>
              푸셔의 공은 대부분 힘이 없고 낮게 깔려 옵니다. 이때 같이 낮은 공으로 대응하면 그들의 박자에 말려듭니다. <strong>높은 탑스핀(Moonball)</strong>으로 공을 깊게 보내 그들을 더 뒤로 밀어내세요.
            </p>
            <p>
              상대가 뒤로 물러나면 코트 좌우 앵글을 활용할 공간이 생깁니다. 이때 비로소 짧은 앵글샷이나 강력한 다운더라인으로 승부를 볼 수 있습니다.
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              푸셔를 이겼을 때의 쾌감은 어떤 경기보다 큽니다. 그것은 당신이 기술뿐만 아니라 <strong>멘탈과 전술</strong>에서도 성장했다는 증거이기 때문입니다. 다음번 푸셔를 만나면 짜증내지 말고, "오늘 내 인내심과 전술을 테스트해볼 좋은 기회군!"이라고 생각하며 미소 지으세요.
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
            currentSlug="tennis-strategy-beat-pusher"
            category="테니스 전술"
            tags={["테니스 전술", "푸셔", "Pusher", "연타", "멘탈 관리"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
