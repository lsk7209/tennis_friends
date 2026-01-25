import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "일명 '푸셔(Pusher)'를 이기는 5가지 전략 | 실전 드릴과 멘탈 관리",
  description: "실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. '고스트 어프로치' 드릴부터 멘탈 리셋 루틴까지, 푸셔를 기술과 심리로 완벽하게 제압하는 심층 가이드.",
  keywords: ["테니스 전술", "푸셔", "Pusher", "연타", "멘탈 관리", "테니스 드릴", "어프로치 샷"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-strategy-beat-pusher',
  },
  openGraph: {
    title: "일명 '푸셔(Pusher)'를 이기는 5가지 전략 | 실전 드릴과 멘탈 관리",
    description: "실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. '고스트 어프로치' 드릴부터 멘탈 리셋 루틴까지, 푸셔를 기술과 심리로 완벽하게 제압하는 심층 가이드.",
    url: 'https://tennisfriends.co.kr/blog/tennis-strategy-beat-pusher',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "일명 '푸셔(Pusher)'를 이기는 5가지 전략 | 실전 드릴과 멘탈 관리",
    description: "실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. '고스트 어프로치' 드릴부터 멘탈 리셋 루틴까지, 푸셔를 기술과 심리로 완벽하게 제압하는 심층 가이드.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'physics-of-pusher', text: '왜 푸셔의 공은 세게 치기 힘들까? (물리학적 이유)', depth: 2 },
  { id: 'mental-routine', text: '멘탈 리셋 루틴: "조급함이 적이다"', depth: 2 },
  { id: 'tactical-drill', text: "실전 드릴: '고스트 어프로치' 연습법", depth: 2 },
  { id: 'key-strategies', text: '필승 공략 공식 3가지', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "푸셔를 상대로 실수를 줄이는 가장 좋은 연습법은?",
    a: "베이스라인 한가운데로 계속 공을 보내는 '중앙 랠리' 연습을 추천합니다. 사이드로 빼려다 실수하는 것보다 중앙으로 길게 보내며 상대가 스스로 짧은 공을 줄 때까지 기다리는 인내심을 기르는 것이 핵심입니다."
  },
  {
    q: "푸셔가 로브를 계속 띄울 때 어떻게 대응하나요?",
    a: "억지로 스매싱으로 끝내려 하지 마세요. 로브를 다시 로브로 응수하거나, 높은 타점의 오버헤드보다는 바운드 후 여유 있게 드라이브 발리나 깊은 스트로크로 처리하는 연습이 필요합니다. 상대가 네트 앞으로 오게 만드는 것이 최선입니다."
  },
  {
    q: "왜 제가 더 세게 치는데 지나고 보면 점수는 제가 지고 있을까요?",
    a: "테니스에서 점수는 '위너'보다 '에러'에서 더 많이 나옵니다. 푸셔는 에러를 하지 않는 스타일이고, 당신은 위너를 내려다 에러를 범하기 때문입니다. '치지 않는 것(Not Missing)'이 최고의 공격일 때가 있습니다."
  }
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
            <Badge key="푸셔 완전 정복" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">푸셔 완전 정복</Badge>
            <Badge key="실전 드릴" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">실전 드릴</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            일명 '푸셔(Pusher)'를 이기는 5가지 전략
            <span className="block text-2xl md:text-3xl mt-2 text-blue-200 font-normal">실전 드릴과 멘탈 관리 편</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. 인내심을 유지하며 결정적인 찬스를 만드는 푸셔 공략 심층 가이드.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">8분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2026-01-24 업데이트</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="tennis-strategy-beat-pusher" date="2026-01-24" title="일명 '푸셔(Pusher)'를 이기는 5가지 전략 | 실전 드릴과 멘탈 관리" excerpt="실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. '고스트 어프로치' 드릴부터 멘탈 리셋 루틴까지, 푸셔를 기술과 심리로 완벽하게 제압하는 심층 가이드.">
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

            <h2 id="physics-of-pusher">왜 푸셔의 공은 세게 치기 힘들까? (물리학적 이유)</h2>
            <p>
              많은 분들이 "상대 공이 밋밋하니까 내가 더 세게 쳐서 끝내야지"라고 생각합니다. 하지만 이것이 바로 함정입니다.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-slate-500 my-6">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">🚫 '빌려 쓸 힘(Pace)'이 없다</h4>
              <p className="mb-0 text-sm">
                강한 상대의 공은 반발력을 이용해 내가 힘을 덜 들이고도 강하게 보낼 수 있습니다. 하지만 푸셔의 공은 속도가 거의 죽어서 옵니다. 즉, <strong>내가 100%의 힘을 스스로 생성해야 합니다.</strong> 이 과정에서 몸에 힘이 들어가고, 스윙 폼이 무너지며 에러가 발생합니다. 푸셔를 상대할 때는 평소보다 스윙 스피드를 70%로 낮추고, 정확한 임팩트에 집중해야 합니다.
              </p>
            </div>

            <h2 id="mental-routine">멘탈 리셋 루틴: "조급함이 적이다"</h2>
            <p>
              푸셔와의 경기는 <strong>'인내심 테스트'</strong>와 같습니다. 한 포인트가 끝날 때마다 다음 멘탈 루틴을 실행하세요.
            </p>
            <ul className="list-disc pl-5 space-y-3 my-4">
              <li><strong>3초 호흡법:</strong> 포인트가 끝나면 라켓을 비치핸드(왼손)로 옮겨 잡고, 코 깊숙이 숨을 들이마시고 3초간 내뱉으세요. 심박수를 낮춰야 조급함이 사라집니다.</li>
              <li><strong>타월링 (Toweling):</strong> 땀이 나지 않아도 뒤도 돌아가 타월을 쓰세요. 이 짧은 시간 동안 "나는 서두르지 않는다. 찬스는 10구 뒤에 온다"라고 되뇝니다.</li>
              <li><strong>목표 수정:</strong> "위너를 꽂겠다"가 아니라 "상대를 좌우로 세 번 뛰게 하겠다"를 목표로 삼으세요.</li>
            </ul>

            <h2 id="tactical-drill">실전 드릴: '고스트 어프로치' 연습법</h2>
            <p>
              푸셔를 이기려면 결국 네트 플레이가 필수입니다. 하지만 막상 짧은 볼이 오면 주저하게 되죠. 이를 극복하기 위한 혼자서도 할 수 있는 훈련입니다.
            </p>
            <Card className="my-6 bg-blue-50/50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
              <CardContent className="pt-6">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 text-lg mb-3">👻 고스트 어프로치 (Ghost Approach)</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>서비스 라인 뒤 1m 지점에 표적(콘 등)을 둡니다.</li>
                  <li>스스로 공을 짧게 던져놓고(셀프 피딩), 달려들어가며 어프로치 샷을 칩니다.</li>
                  <li><strong>핵심:</strong> 치고 멈추지 말고, 치는 동작과 네트로 대시하는 동작이 <strong>하나의 흐름(Flow)</strong>으로 이어지게 합니다. (스플릿 스텝까지가 1회입니다)</li>
                  <li>하루 20회씩 반복하면, 경기 중 짧은 볼이 왔을 때 몸이 자동으로 반응하여 네트로 나가게 됩니다.</li>
                </ol>
              </CardContent>
            </Card>

            <h2 id="key-strategies">필승 공략 공식 3가지</h2>

            <h3 className="text-xl font-bold mt-8 mb-4">1. 짧은 공으로 네트 호출 (Drop & Net)</h3>
            <p>
              푸셔는 베이스라인 뒤 수비에 특화되어 있습니다. 그들의 안전지대인 베이스라인에서 강제로 끌어내야 합니다.
              드롭샷이나 짧은 슬라이스로 네트 앞으로 불러내세요. 그들은 발리나 스매싱 결정력이 약한 경우가 많습니다.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">2. 문볼(Moonball) 맞불 작전</h3>
            <p>
              상대의 낮은 공을 억지로 때리려다 네트에 걸리지 마세요. 같이 높은 궤도의 탑스핀(Moonball)으로 응수하여 상대를 펜스까지 밀어붙이세요. 상대가 뒤로 물러날수록 당신은 코트를 더 넓게(앵글샷) 쓸 수 있습니다.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">3. 인사이드-아웃 포핸드 공략</h3>
            <p>
              푸셔의 백핸드 쪽을 집요하게 노리세요. 돌아서서 치는 '인사이드-아웃 포핸드'로 상대 백핸드 깊숙이 공을 보내면, 상대는 앵글을 만들기 어려워 중앙으로 밋밋한 공을 보내게 됩니다. 이때가 바로 결정구 찬스입니다.
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              푸셔를 이겼을 때의 쾌감은 어떤 경기보다 큽니다. 그것은 당신이 기술뿐만 아니라 <strong>멘탈과 전술</strong>에서도 성장했다는 증거이기 때문입니다. 다음번 푸셔를 만나면 짜증내지 말고, "오늘 내 인내심과 전술을 테스트해볼 좋은 기회군!"이라고 생각하며 미소 지으세요. 승리는 인내하는 자의 것입니다.
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
