import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "오버그립 교체 주기와 종류(건식/습식) 추천",
  description: "손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.",
  keywords: ["테니스 장비", "오버그립", "그립 테이프", "손땀", "용품 추천"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-overgrip-guide',
  },
  openGraph: {
    title: "오버그립 교체 주기와 종류(건식/습식) 추천",
    description: "손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.",
    url: 'https://tennisfriends.co.kr/blog/tennis-overgrip-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "오버그립 교체 주기와 종류(건식/습식) 추천",
    description: "손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며: 손끝에서 시작되는 경기력', depth: 2 },
  { id: 'material-science', text: '1. 소재의 과학: 습식(Tacky) vs 건식(Dry)', depth: 2 },
  { id: 'wrapping-biomechanics', text: '2. 래핑의 생체역학: 왼손잡이는 다르게 감아야 한다', depth: 2 },
  { id: 'thickness-tuning', text: '3. 두께 튜닝: 오버랩(Overlap) 비율의 영향', depth: 2 },
  { id: 'replacement-indicators', text: '4. 교체 시그널: 언제 성능이 한계에 도달하는가?', depth: 2 },
  { id: 'pro-secrets', text: '5. 프로들의 비밀: 투어 선수들이 흰색만 쓰는 이유', depth: 2 },
  { id: 'conclusion', text: '결론: 가장 적은 투자로 얻는 가장 큰 변화', depth: 2 },
];

const faqs = [
  {
    q: "흰색 그립 말고 유색 그립은 성능이 다른가요?",
    a: "미세하게 다릅니다. 대체로 흰색 오버그립이 색소가 들어가지 않아 가장 순수한 타키(Tacky)함과 흡수력을 보여줍니다. 프로 선수들이 유독 흰색 그립을 선호하는 이유이기도 합니다."
  },
  {
    q: "그립을 감을 때 겹치는 정도는 어느 정도가 좋나요?",
    a: "보통 1/8인치(약 3mm) 정도 겹치는 것이 표준입니다. 너무 많이 겹치면 그립이 울퉁불퉁해지고 두꺼워져 면을 느끼기 어려워집니다."
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
            <Badge key="테니스 장비" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스 장비</Badge>
            <Badge key="오버그립" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">오버그립</Badge>
            <Badge key="그립 테이프" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">그립 테이프</Badge>
            <Badge key="손땀" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">손땀</Badge>
            <Badge key="용품 추천" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">용품 추천</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            오버그립 교체 주기와 종류(건식/습식) 추천
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.
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

      <Article slug="tennis-overgrip-guide" date="2026-01-24" title="오버그립 교체 주기와 종류(건식/습식) 추천" excerpt="손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며: 손끝에서 시작되는 경기력</h2>
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-2xl mb-8 border border-emerald-100 dark:border-emerald-800">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0 text-center">
                테니스 라켓에서 가장 자주 교체해야 하는 소모품은 무엇일까요? 스트링보다 더 자주, 어쩌면 매 경기마다 신경 써야 할 아이템이 바로 <strong>오버그립(Overgrip)</strong>입니다. 오버그립 하나만 잘 골라도 '손에서 라켓이 빠질 것 같은 불안함'에서 완전히 해방될 수 있습니다.
              </p>
            </div>

            <h2 id="material-science">1. 소재의 과학: 습식(Tacky) vs 건식(Dry)</h2>
            <p>
              오버그립은 단순히 표면을 덮는 테이프가 아닙니다. 폴리우레탄(PU)과 섬유 소재의 배합에 따라 흡수력과 마찰 계수가 완전히 달라집니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-5 border-t-4 border-blue-500 bg-white dark:bg-slate-900 shadow-sm rounded-b-xl">
                <h4 className="font-bold text-blue-600 mb-2">● 습식 (Tacky Grip)</h4>
                <p className="text-sm leading-relaxed mb-3 font-medium">점성형 PU 코팅</p>
                <p className="text-xs text-slate-500 leading-relaxed">손에 착 달라붙는 쫀득한 느낌이 특징입니다. 표면의 미세 구멍보다는 PU 층의 점성을 사용하므로, 땀이 적거나 보통인 분들에게 최상의 고정력을 제공합니다.</p>
              </div>
              <div className="p-5 border-t-4 border-slate-400 bg-white dark:bg-slate-900 shadow-sm rounded-b-xl">
                <h4 className="font-bold text-slate-600 mb-2">● 건식 (Dry Grip)</h4>
                <p className="text-sm leading-relaxed mb-3 font-medium">펠트/섬유 기반 흡수층</p>
                <p className="text-xs text-slate-500 leading-relaxed">부직포와 비슷한 질감이며 땀을 흡수할수록 섬유가 팽창하며 마찰력이 커집니다. 여름철이나 손에 땀이 많은 '다한증' 유저들에게는 성능의 마지노선입니다.</p>
              </div>
            </div>

            <h2 id="wrapping-biomechanics">2. 래핑의 생체역학: 왼손잡이는 다르게 감아야 한다</h2>
            <p>
              대부분의 오버그립은 오른손잡이 기준으로 끝 처리가 되어 있지만, 실제 감는 방향은 플레이어의 우세손에 따라 달라져야 합니다.
            </p>
            <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl border border-slate-200 my-6">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <Badge className="bg-blue-100 text-blue-700 h-fit">오른손잡이</Badge>
                  <p className="text-sm">라켓 하단에서 위를 바라볼 때 **시계 방향**으로 감습니다. 스윙 시 발생하는 회전력이 그립을 더 조이는 방향으로 작용합니다.</p>
                </li>
                <li className="flex gap-4">
                  <Badge className="bg-pink-100 text-pink-700 h-fit">왼손잡이</Badge>
                  <p className="text-sm">반드시 **반시계 방향**으로 감아야 합니다. 오른손잡이용으로 감긴 라켓을 왼손잡이가 쓰면, 임팩트 시 그립의 겹친 부분이 벌어지며 밀림 현상이 발생합니다.</p>
                </li>
              </ul>
            </div>

            <h2 id="thickness-tuning">3. 두께 튜닝: 오버랩(Overlap) 비율의 영향</h2>
            <p>
              오버그립을 감을 때 얼마나 겹치느냐(Overlap)는 그립의 최종 둘레와 타구감에 직접적인 영향을 미칩니다.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm font-light">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-300 p-2">겹침 비율</th>
                    <th className="border border-gray-300 p-2">그립 체감</th>
                    <th className="border border-gray-300 p-2">추천 용도</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">1/8 (표준)</td>
                    <td className="border border-gray-300 p-2">균일함, 면 감각 우수</td>
                    <td className="border border-gray-300 p-2">범용, 올라운더</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">1/4 (두툼)</td>
                    <td className="border border-gray-300 p-2">푹신함, 충격 완화 가중</td>
                    <td className="border border-gray-300 p-2">그립 사이즈 키우기용</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">거의 없음</td>
                    <td className="border border-gray-300 p-2">날카로운 각 인식</td>
                    <td className="border border-gray-300 p-2">정교한 발리 플레이</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="replacement-indicators">4. 교체 시그널: 언제 성능이 한계에 도달하는가?</h2>
            <p>
              그립 표면의 화합물은 산소 및 땀과 결합하며 산화됩니다. 가루가 날리기 전이라도 다음과 같은 징후가 보이면 즉시 교체하십시오.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="bg-white dark:bg-slate-900 p-4 rounded border-b-2 border-red-500 shadow-sm text-center">
                <p className="font-bold text-lg mb-1">01</p>
                <p className="text-xs font-bold mb-2">미끄러짐 (Slipping)</p>
                <p className="text-[10px] text-gray-500">임팩트 시 라켓이 미세하게 돌아가는 느낌이 들 때</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border-b-2 border-orange-500 shadow-sm text-center">
                <p className="font-bold text-lg mb-1">02</p>
                <p className="text-xs font-bold mb-2">탁한 색상 (Discoloration)</p>
                <p className="text-[10px] text-gray-500">흰색이 회색으로 변하거나 누렇게 찌든 때가 보일 때</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border-b-2 border-yellow-500 shadow-sm text-center">
                <p className="font-bold text-lg mb-1">03</p>
                <p className="text-xs font-bold mb-2">탄력 저하 (Hardening)</p>
                <p className="text-[10px] text-gray-500">쿠션감이 사라지고 표면이 딱딱하게 굳었다고 느껴질 때</p>
              </div>
            </div>

            <h2 id="pro-secrets">5. 프로들의 비밀: 투어 선수들이 흰색만 쓰는 이유</h2>
            <p>
              ATP/WTA 투어 경기를 보면 90% 이상의 선수가 흰색 오버그립을 사용합니다. 이는 단순히 디자인 때문이 아닙니다.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-2xl border-l-4 border-blue-500 my-6">
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed mb-0">
                <strong>순수한 성분:</strong> 색소가 첨가된 유색 그립은 염료 때문에 화학적으로 표면 점성이 미세하게 떨어집니다. 반면, 염료가 없는 퓨어 화이트(Pure White) 소재는 PU 본연의 접착력을 가장 오랫동안 유지합니다. 최상의 감각을 원하는 프로들에게 유색 그립은 선택지가 아닙니다.
              </p>
            </div>

            <h2 id="conclusion">결론: 가장 적은 투자로 얻는 가장 큰 변화</h2>
            <p className="text-lg leading-relaxed">
              오버그립은 단돈 몇 천 원으로 장비의 성능을 비약적으로 높일 수 있는 최고의 튜닝입니다. 낡은 그립은 단순한 소모품을 넘어 당신의 샷에 대한 자신감을 갉아먹습니다. 오늘 가방 속 라켓의 그립 상태를 확인하고, <strong>뽀송뽀송한 새 그립</strong>으로 교체해보세요. 첫 스윙의 느낌부터 달라질 것입니다.
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
            currentSlug="tennis-overgrip-guide"
            category="테니스 장비"
            tags={["테니스 장비", "오버그립", "그립 테이프", "손땀", "용품 추천"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
