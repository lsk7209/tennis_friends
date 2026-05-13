import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스화 선택 완전 가이드 2026 — 올코트 vs 클레이 | 아식스, 나이키, 아디다스 발볼 비교',
  description: '테니스화는 단순한 운동화가 아닙니다. 코트 종류별 밑창 선택부터 내 발볼에 딱 맞는 브랜드 추천(아식스 4E 등)까지. 부상 없이 테니스를 즐기기 위한 필수 장비 가이드.',
  keywords: ['테니스화 추천 2026', '발볼 넓은 테니스화', '아식스 젤레졸루션 9', '나이키 베이퍼 프로', '올코트 테니스화', '클레이 코트 신발', '테니스화 사이즈 팁'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-shoes-selection-guide',
  },
  openGraph: {
    title: '테니스화 선택 완전 가이드 2026 — 올코트 vs 클레이 | 브랜드별 사이즈 팁',
    description: '내 발에 맞는 테니스화는 따로 있습니다. 아식스, 나이키, 아디다스 핏 비교와 코트별 밑창 선택 가이드.',
    url: 'https://www.tennisfrens.com/blog/tennis-shoes-selection-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스화 선택 가이드 2026 — 발볼러 추천 모델 포함',
    description: '내 발에 맞는 테니스화는 따로 있습니다. 아식스, 나이키, 아디다스 핏 비교와 코트별 밑창 선택 가이드.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'why-tennis-shoes', text: '1. 왜 전용 테니스화인가? (러닝화 절대 금지)', depth: 2 },
  { id: 'sole-types', text: '2. 코트별 밑창(Outsole) 종류: 올코트 vs 클레이', depth: 2 },
  { id: 'stability-vs-speed', text: '3. 안정성(Stability) vs 스피드(Speed) 타입', depth: 2 },
  { id: 'brand-fit-comparison', text: '4. 브랜드별 핏 & 사이즈 가이드 (발볼러 필독)', depth: 2 },
  { id: 'recommendation-by-foot', text: '5. 발 모양(족형)별 추천 모델 BEST 3', depth: 2 },
  { id: 'size-check', text: '6. 실패 없는 사이즈 체크리스트', depth: 2 },
  { id: 'replacement', text: '7. 교체 주기와 관리법', depth: 2 },
  { id: 'conclusion', text: '결론 — 장비가 실력을 만든다', depth: 2 },
];

const faqs = [
  {
    q: '일반 러닝화를 신고 쳐도 되나요?',
    a: '절대 안 됩니다. 러닝화는 앞뒤 움직임에 최적화되어 있어, 테니스의 급격한 좌우 움직임(사이드 스텝) 시 발목이 꺾여 인대 파열 등 큰 부상을 입을 수 있습니다. 테니스장 입장 불가 사유가 되기도 합니다.'
  },
  {
    q: '올코트용 하나만 사도 되나요?',
    a: '네, 한국의 대부분 코트(하드, 인조잔디)에서 무난하게 사용할 수 있습니다. 처음 시작한다면 범용성이 높은 올코트용을 구매하는 것이 가장 경제적이고 합리적인 선택입니다.'
  },
  {
    q: '사이즈는 딱 맞게 신어야 하나요?',
    a: '아니요. 테니스는 발이 붓고 급정지 동작이 많아 발톱 멍(Black Toe)이 들기 쉽습니다. 평소 운동화보다 5~10mm 크게 신어 앞공간을 확보하고, 두꺼운 스포츠 양말로 핏을 조절하는 것이 국룰입니다.'
  },
  {
    q: '밑창이 닳았는데 계속 신어도 되나요?',
    a: '밑창 패턴이 지워지면 접지력을 상실해 미끄러질 위험이 큽니다. 또한 쿠션 기능이 저하되어 무릎과 허리에 충격이 그대로 전달되므로, 아까워 말고 과감히 교체해야 합니다.'
  }
];

export default function TennisShoesSelectionGuidePage() {
  const title = '테니스화 선택 완전 가이드 2026 — 올코트 vs 클레이 | 아식스, 나이키, 아디다스 발볼 비교';
  const excerpt = '테니스화는 단순한 신발이 아니라 부상을 막아주는 보호장비입니다. 코트 바닥에 맞는 밑창 선택부터 내 발에 딱 맞는 사이즈 고르는 팁까지 완벽하게 정리했습니다.';

  return (
    <Article
      title={title}
      excerpt={excerpt}
      date="2026-01-26"
      slug="tennis-shoes-selection-guide"
      author="TennisFriends"
      image="/images/blog/tennis-shoes-selection-guide.png"
    >
      <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-950 dark:to-green-950 p-6 rounded-lg mb-8 border border-teal-100 dark:border-teal-900">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
            필수 장비
          </Badge>
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            부상 방지
          </Badge>
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            2026 업데이트
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
          "라켓은 빌려도 신발은 사라"는 테니스계의 격언이 있습니다. 테니스는 발로 하는 스포츠이기 때문입니다. 잘못된 신발 선택은 발목 접질림이나 무릎 통증으로 이어져 즐거운 테니스 수명을 단축시킵니다. 내 발과 코트를 지키는 가장 확실한 투자, 테니스화 선택법을 낱낱이 파헤쳐 드립니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="why-tennis-shoes" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          왜 전용 테니스화인가? (러닝화 절대 금지)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-red-50 dark:bg-red-900/20 border-2 border-red-100 dark:border-red-900/50">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">🚫 러닝화 (Running Shoes)</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>구조:</strong> 앞뒤 직선 운동에만 최적화</li>
                <li>• <strong>위험성:</strong> 밑창이 높고 말랑해서 사이드 스텝 시 발목이 꺾일 확률 매우 높음</li>
                <li>• <strong>내구성:</strong> 테니스 코트의 거친 마찰을 견디지 못하고 금방 찢어짐</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 dark:bg-green-900/20 border-2 border-green-100 dark:border-green-900/50">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">✅ 테니스화 (Tennis Shoes)</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>구조:</strong> 급격한 좌우(Lateral) 움직임을 버티는 측면 지지력 강화</li>
                <li>• <strong>안정성:</strong> 바닥에 낮게 깔리는 설계로 접지력 극대화</li>
                <li>• <strong>보호:</strong> 앞코 쓸림 방지(Toe Guard)와 단단한 아웃솔 적용</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm font-bold">
            ⚠️ 주의: 배드민턴화나 농구화도 실내 코트용이라 접지력이 너무 좋아 하드 코트에서 오히려 무릎에 무리를 주거나, 밑창이 순식간에 마모될 수 있습니다. 야외 테니스에는 반드시 '테니스 전용화'를 신으세요.
          </p>
        </div>
      </section>

      <section id="sole-types" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          코트별 밑창(Outsole) 종류: 올코트 vs 클레이
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          테니스 코트는 크게 하드(Hard), 클레이(Clay, 흙), 인조잔디(Omni)로 나뉩니다. 각 코트의 마찰 계수가 다르기 때문에 그에 맞는 밑창 패턴을 선택해야 미끄러짐과 부상을 방지할 수 있습니다.
        </p>

        <div className="space-y-6">
          <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 p-3 rounded-lg text-3xl">🌐</div>
              <div>
                <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400 mb-1">올코트용 (All Court)</h3>
                <Badge variant="outline" className="mb-2">추천: 하드 코트, 인조잔디, 실내</Badge>
                <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  가장 보편적인 선택입니다. 다양한 패턴이 혼합되어 있어 내구성이 좋고 적당한 접지력을 제공합니다. 한국의 동호인 80% 이상이 올코트용을 주력으로 사용합니다.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-500 list-disc list-inside bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <li><strong>장점:</strong> 코트를 가리지 않는 범용성, 튼튼한 내구성</li>
                  <li><strong>단점:</strong> 흙(클레이) 코트에서는 다소 미끄러울 수 있음</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <div className="flex gap-4 items-start">
              <div className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 p-3 rounded-lg text-3xl">🧱</div>
              <div>
                <h3 className="font-bold text-xl text-orange-600 dark:text-orange-400 mb-1">클레이용 (Clay)</h3>
                <Badge variant="outline" className="mb-2">추천: 클레이(흙) 코트</Badge>
                <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  밑창 전체가 촘촘한 <strong>'헤링본(물결/청어 가시)'</strong> 패턴으로 되어 있습니다. 이 패턴은 흙이 밑창에 끼지 않고 잘 빠져나가게 하며, 클레이 코트 특유의 '슬라이딩' 동작을 원활하게 도와줍니다.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-500 list-disc list-inside bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <li><strong>장점:</strong> 흙 코트에서 최고의 접지력과 슬라이딩 지원</li>
                  <li><strong>단점:</strong> 하드 코트에서 신으면 <strong>지우개처럼</strong> 빨리 닳음 (절대 비추천)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <div className="flex gap-4 items-start">
              <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 p-3 rounded-lg text-3xl">🌿</div>
              <div>
                <h3 className="font-bold text-xl text-green-600 dark:text-green-400 mb-1">옴니용 (Omni/Grass)</h3>
                <Badge variant="outline" className="mb-2">추천: 모래 많은 인조잔디</Badge>
                <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  밑창에 작은 <strong>'돌기(Pimple)'</strong>들이 박혀 있어, 미끄러운 인조잔디 사이사이를 파고들어 강력한 브레이킹 능력을 발휘합니다. 한국과 일본 등 아시아권에 많은 인조잔디 코트에 특화된 모델입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stability-vs-speed" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          안정성(Stability) vs 스피드(Speed) 타입
        </h2>
        <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-lg mb-6">
          <p className="text-gray-700 dark:text-gray-300 text-center font-medium">
            테니스화는 플레이 스타일에 따라 크게 두 가지 성향으로 나뉩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-gray-800 border-t-4 border-t-purple-500 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="bg-purple-100 text-purple-700 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🛡️</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">안정형 (Stability)</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 h-12 text-sm leading-relaxed">
                발목 떨림을 잡고 내구성이 뛰어남. 베이스라인 플레이어에게 적합. 조금 무거운 편.
              </p>
              <div className="text-left bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <span className="font-bold text-purple-600 block mb-2 text-sm">대표 모델:</span>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>아식스:</strong> 젤 레졸루션 9</li>
                  <li><strong>아디다스:</strong> 바리케이드 13</li>
                  <li><strong>라코스테:</strong> AG-LT Ultra</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-t-4 border-t-cyan-500 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="bg-cyan-100 text-cyan-700 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">⚡</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">스피드형 (Speed)</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 h-12 text-sm leading-relaxed">
                가볍고 유연하여 빠른 풋워크 지원. 서브 앤 발리어에게 적합. 내구성은 상대적으로 낮음.
              </p>
              <div className="text-left bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <span className="font-bold text-cyan-600 block mb-2 text-sm">대표 모델:</span>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>아식스:</strong> 솔루션 스피드 FF 3</li>
                  <li><strong>나이키:</strong> 베이퍼 프로 2 / 11</li>
                  <li><strong>아디다스:</strong> 아디제로 우버소닉</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="brand-fit-comparison" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          브랜드별 핏 & 사이즈 가이드 (발볼러 필독)
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          테니스화 브랜드마다 '족형(Last)'이 다릅니다. 내 발 모양을 무시하고 디자인만 보고 샀다가는 발톱이 빠지거나 물집으로 고생할 수 있습니다.
        </p>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="md:w-1/4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700 pb-4 md:pb-0 md:pr-4">
              <span className="text-2xl font-black text-blue-900 dark:text-blue-100">ASICS</span>
              <span className="text-sm text-gray-500">아식스</span>
              <Badge className="mt-2 bg-green-500 hover:bg-green-600">동양인 원픽</Badge>
            </div>
            <div className="md:w-3/4">
              <h4 className="font-bold text-lg mb-2">"발볼 걱정 끝, 편안함의 대명사"</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                일본 브랜드답게 한국인의 넓은 발볼과 높은 발등에 가장 잘 맞습니다. 특히 <strong>'와이드(Wide, 2E)'</strong>와 <strong>'슈퍼와이드(Extra Wide, 4E)'</strong> 모델을 정식 출시하여 '왕발볼러'들의 구세주로 불립니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded text-xs text-gray-700 dark:text-gray-300">
                💁‍♂️ <strong>추천:</strong> 발볼이 넓거나 발등이 높은 분. 실패 확률 0%.
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="md:w-1/4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700 pb-4 md:pb-0 md:pr-4">
              <span className="text-2xl font-black text-slate-900 dark:text-white">NIKE</span>
              <span className="text-sm text-gray-500">나이키</span>
              <Badge className="mt-2 bg-orange-500 hover:bg-orange-600">칼발 전용</Badge>
            </div>
            <div className="md:w-3/4">
              <h4 className="font-bold text-lg mb-2">"디자인은 1등, 핏은 글쎄?"</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                서양인(칼발) 족형을 기반으로 하여 <strong>발볼이 매우 좁게(Narrow)</strong> 나옵니다. 디자인은 가장 예쁘지만, 발볼이 넓은 분들은 정사이즈 착용 시 고통을 호소할 수 있습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded text-xs text-gray-700 dark:text-gray-300">
                💁‍♂️ <strong>추천:</strong> 발이 얄상한 분. 보통 발이라면 5mm~10mm 업사이징 필수.
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="md:w-1/4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700 pb-4 md:pb-0 md:pr-4">
              <span className="text-2xl font-black text-gray-900 dark:text-white">ADIDAS</span>
              <span className="text-sm text-gray-500">아디다스</span>
              <Badge className="mt-2 bg-blue-500 hover:bg-blue-600">안정감 타이트</Badge>
            </div>
            <div className="md:w-3/4">
              <h4 className="font-bold text-lg mb-2">"발을 꽉 잡아주는 갑옷"</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                발볼은 <strong>표준(Standard)</strong>에 가깝지만, 아치 부분이나 발목을 잡아주는 락다운(Lock-down) 느낌이 강해 처음에는 타이트하다고 느낄 수 있습니다. 발을 단단히 고정하고 싶은 분들에게 좋습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded text-xs text-gray-700 dark:text-gray-300">
                💁‍♂️ <strong>추천:</strong> 발을 꽉 조여주는 일체감을 선호하는 분.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recommendation-by-foot" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          발 모양(족형)별 추천 모델 BEST 3
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm">
            <thead className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="py-3 px-4 text-left">발 특성</th>
                <th className="py-3 px-4 text-left">추천 모델 1 (강추)</th>
                <th className="py-3 px-4 text-left">추천 모델 2</th>
                <th className="py-3 px-4 text-left">특징</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="py-3 px-4 font-bold text-gray-900 dark:text-white">넓은 발볼 (왕발)</td>
                <td className="py-3 px-4 text-blue-600 font-bold">아식스 젤 레졸루션 (Wide/4E)</td>
                <td className="py-3 px-4">뉴발란스 라인 (2E/4E)</td>
                <td className="py-3 px-4 text-gray-500">발볼 옵션 선택 가능</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-gray-900 dark:text-white">좁은 발볼 (칼발)</td>
                <td className="py-3 px-4 text-orange-600 font-bold">나이키 베이퍼 프로 2</td>
                <td className="py-3 px-4">아식스 솔루션 스피드 FF</td>
                <td className="py-3 px-4 text-gray-500">날렵한 핏감</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-gray-900 dark:text-white">평발 (Flat Feet)</td>
                <td className="py-3 px-4 text-purple-600 font-bold">아디다스 바리케이드</td>
                <td className="py-3 px-4">요넥스 이클립션</td>
                <td className="py-3 px-4 text-gray-500">강력한 아치 서포트</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-gray-900 dark:text-white">무릎 통증 (쿠션)</td>
                <td className="py-3 px-4 text-green-600 font-bold">아식스 코트 FF 3</td>
                <td className="py-3 px-4">나이키 줌 베이퍼 11 (에어)</td>
                <td className="py-3 px-4 text-gray-500">최상급 충격 흡수</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="size-check" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          실패 없는 사이즈 체크리스트
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500 shadow-sm">
          <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
            <li className="pl-2">
              <strong>오후 4시 이후에 신어라:</strong> 발은 아침보다 오후에 혈액이 쏠려 붓습니다. 실제 테니스를 칠 때 발이 붓는 것과 비슷한 상태에서 사이즈를 측정해야 정확합니다.
            </li>
            <li className="pl-2">
              <strong>두꺼운 스포츠 양말 필수:</strong> 얇은 정장 양말을 신고 신발을 고르면 나중에 100% 작아서 못 신습니다. 실제로 신을 두꺼운 테니스 양말을 꼭 챙겨가세요.
            </li>
            <li className="pl-2">
              <strong>'엄지손가락 하나'의 법칙:</strong> 신발 끈을 꽉 묶은 상태에서 발뒤꿈치 뒤로 엄지손가락 하나가 들어갈 정도의 여유(1~1.5cm)가 있어야 합니다. 급정지 시 발가락이 앞코에 닿으면 피멍이 들거나 발톱이 빠지는 '블랙 토(Black Toe)' 부상을 입습니다.
            </li>
            <li className="pl-2">
              <strong>반 치수 업 (Size Up) 하라:</strong> 평소 운동화를 270 신는다면, 테니스화는 <strong>275나 280</strong>을 신는 것이 국룰입니다. 딱 맞는 느낌보다는 '약간 헐렁한가?' 싶은 느낌이 끈을 묶었을 때 완벽한 핏이 됩니다.
            </li>
          </ol>
        </div>
      </section>

      <section id="replacement" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-gray-700 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          교체 주기와 관리법
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold mb-3 text-lg text-gray-900 dark:text-white">⏰ 언제 바꿀까요?</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li>• 밑창의 헤링본/돌기 패턴이 지워져 매끈해졌을 때 (미끄러짐 위험)</li>
              <li>• 발꿈치나 앞볼 쪽 쿠션이 주저앉아 딱딱하게 느껴질 때</li>
              <li>• 신발의 측면이 터지거나 힐컵 지지력이 약해졌을 때</li>
              <li>• <strong>권장 주기:</strong> 주 2~3회 플레이 시 약 6개월</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold mb-3 text-lg text-gray-900 dark:text-white">🧼 어떻게 관리할까요?</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li>• 경기 직후 끈을 풀어 발냄새와 습기를 제거하세요.</li>
              <li>• 직사광선은 고무를 경화시키니 그늘에서 말리세요.</li>
              <li>• 세탁기 사용은 <strong>금물</strong> (접착제 손상 및 쿠션 변형). 오염 부위만 물티슈나 솔로 닦으세요.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 테니스 실력은 발전해도, 무릎은 돌아오지 않는다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
          멋진 라켓을 사는 것보다 훨씬 중요한 것이 바로 <strong>'좋은 테니스화'</strong>를 사는 것입니다. 신발이 편해야 풋워크가 가벼워지고, 풋워크가 좋아야 공을 잘 칠 수 있습니다. 무엇보다 부상 없이 오랫동안 건강하게 테니스를 즐기는 것이 가장 중요합니다. 초보자라면 <strong>[올코트용 + 안정형 + 반 치수 큰 사이즈]</strong> 이 공식을 꼭 기억하세요!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-racket-selection-guide" className="group block h-full">
            <Card className="bg-white dark:bg-gray-800 hover:border-teal-500 transition-all hover:shadow-md h-full">
              <CardContent className="p-6 flex items-center justify-between h-full">
                <div>
                  <span className="text-xs text-teal-600 dark:text-teal-400 font-bold block mb-1">다음 단계</span>
                  <span className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-teal-600 transition-colors">나에게 맞는 라켓은?</span>
                  <p className="text-sm text-gray-500 mt-1">2026 라켓 추천 가이드 보러가기</p>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/30 p-2 rounded-full text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors">➜</div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog" className="group block h-full">
            <Card className="bg-gradient-to-r from-teal-600 to-green-600 border-none text-white h-full hover:shadow-lg transition-all">
              <CardContent className="p-6 flex items-center justify-between h-full">
                <div>
                  <span className="text-xs text-teal-100 font-bold block mb-2">더 많은 정보</span>
                  <span className="font-extrabold text-xl">테니스 꿀팁 더보기</span>
                </div>
                <div className="bg-white/20 p-3 rounded-full">➜</div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}
