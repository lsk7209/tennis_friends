import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '테니스화 선택 완전 가이드 — 올코트 vs 클레이 vs 옴니 | 발볼 넓은 사람 추천',
  description: '테니스화는 일반 운동화와 무엇이 다를까요? 코트 종류(하드/클레이/인조잔디)에 따른 밑창 선택법부터 발볼 넓은 한국인을 위한 모델 추천까지. 부상 방지의 첫걸음, 테니스화 고르는 법.',
  keywords: ['테니스화 추천', '테니스화 고르는 법', '올코트 테니스화', '클레이 전용 테니스화', '발볼 넓은 테니스화', '아식스 테니스화', '나이키 테니스화'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-shoes-selection-guide',
  },
  openGraph: {
    title: '테니스화 선택 완전 가이드 — 올코트 vs 클레이 vs 옴니',
    description: '코트 종류에 따른 밑창 선택법부터 발볼 넓은 사람을 위한 모델 추천까지 완벽 정리.',
    url: 'https://tennisfriends.co.kr/blog/tennis-shoes-selection-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스화 선택 완전 가이드 — 올코트 vs 클레이 vs 옴니',
    description: '코트 종류에 따른 밑창 선택법부터 발볼 넓은 사람을 위한 모델 추천까지 완벽 정리.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'why-tennis-shoes', text: '1. 왜 전용 테니스화인가? (러닝화와 차이점)', depth: 2 },
  { id: 'sole-types', text: '2. 코트별 밑창(Outsole) 종류: 올코트 vs 클레이', depth: 2 },
  { id: 'stability-vs-speed', text: '3. 안정성(Stability) vs 스피드(Speed) 타입', depth: 2 },
  { id: 'wide-fit', text: '4. 발볼 넓은 사람을 위한 추천 (와이드 핏)', depth: 2 },
  { id: 'size-check', text: '5. 실패 없는 사이즈 선택법', depth: 2 },
  { id: 'replacement', text: '6. 교체 주기와 관리법', depth: 2 },
  { id: 'conclusion', text: '결론 — 코트 위의 생명보험', depth: 2 },
];

const faqs = [
  {
    q: '일반 러닝화를 신고 쳐도 되나요?',
    a: '절대 안 됩니다. 러닝화는 앞뒤 움직임에 최적화되어 있어, 테니스의 급격한 좌우 움직임(사이드 스텝) 시 발목이 꺾여 큰 부상을 입을 수 있습니다.'
  },
  {
    q: '올코트용 하나만 사도 되나요?',
    a: '네, 하드 코트와 인조잔디 코트 모두에서 무난하게 미끄러지지 않고 사용할 수 있습니다. 국내 동호인 80% 이상이 올코트용을 신습니다.'
  },
  {
    q: '사이즈는 딱 맞게 신어야 하나요?',
    a: '아니요. 테니스는 발이 붓고 급정지 동작이 많아 발톱 멍(Black Toe)이 들기 쉽습니다. 평소 운동화보다 5~10mm 크게 신어 앞공간을 확보하는 것이 국룰입니다.'
  },
  {
    q: '밑창이 닳았는데 계속 신어도 되나요?',
    a: '밑창 패턴이 지워지면 접지력을 상실해 미끄러질 위험이 큽니다. 쿠션 기능도 떨어져 무릎에 충격이 가니 아까워 말고 교체해야 합니다.'
  }
];

export default function TennisShoesSelectionGuidePage() {
  const title = '테니스화 선택 완전 가이드 — 올코트 vs 클레이 vs 옴니 | 발볼 넓은 사람 추천';
  const excerpt = '테니스화는 단순한 신발이 아니라 부상을 막아주는 보호장비입니다. 코트 바닥에 맞는 밑창 선택부터 내 발에 딱 맞는 사이즈 고르는 팁까지 알려드립니다.';

  return (
    <Article
      title={title}
      excerpt={excerpt}
      date="2026-01-26"
      slug="tennis-shoes-selection-guide"
      author="TennisFriends"
      image="/images/blog/tennis-shoes-selection-guide.png"
    >
      <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-950 dark:to-green-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
            필수 장비
          </Badge>
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            부상 방지
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          "라켓은 빌려도 신발은 사라"는 말이 있습니다. 테니스는 발로 하는 스포츠이기 때문입니다. 잘못된 신발 선택은 발목 접질림이나 무릎 통증으로 이어져 테니스 수명을 단축시킵니다. 내 발과 코트를 지키는 올바른 테니스화 선택법을 소개합니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="why-tennis-shoes" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          왜 전용 테니스화인가? (러닝화와 차이점)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Card className="bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900">
            <CardContent className="p-4">
              <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">🏃‍♂️ 러닝화</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">앞뒤 직선 운동에 최적화. 밑창이 높고 말랑해서 좌우로 급정지 시 발목이 쉽게 돌아감.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900">
            <CardContent className="p-4">
              <h3 className="font-bold text-green-600 dark:text-green-400 mb-2">🎾 테니스화</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">좌우(Lateral) 움직임 지지. 밑창이 넓고 단단하며 측면 보강재가 있어 발목 꺾임을 방지.</p>
            </CardContent>
          </Card>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm font-medium">
            ⚠️ 경고: 배드민턴화나 농구화도 비슷해 보이지만, 바닥 마찰력 특성이 달라 야외 코트에서 밑창이 금방 닳거나 미끄러질 수 있습니다.
          </p>
        </div>
      </section>

      <section id="sole-types" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          코트별 밑창(Outsole) 종류: 올코트 vs 클레이
        </h2>

        <div className="space-y-6">
          <div className="flex gap-4 items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="bg-blue-100 text-blue-800 p-2 rounded text-2xl">🌐</div>
            <div>
              <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">올코트용 (All Court)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">가장 보편적. 밑창 패턴이 굵고 내구성이 좋습니다.</p>
              <ul className="text-sm text-gray-500 list-disc list-inside">
                <li>추천: 하드 코트, 인조잔디 코트, 실내 코트</li>
                <li>특징: 어디서든 80점 이상의 성능 발휘</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="bg-orange-100 text-orange-800 p-2 rounded text-2xl">🧱</div>
            <div>
              <h3 className="font-bold text-lg text-orange-600 dark:text-orange-400">클레이용 (Clay)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">촘촘한 헤링본(청어 가시) 패턴. 흙이 끼지 않고 빠져나가게 설계됨.</p>
              <ul className="text-sm text-gray-500 list-disc list-inside">
                <li>추천: 클레이(흙) 코트</li>
                <li>특징: 슬라이딩(미끄러지는 동작)이 잘 됨. 하드코트에서 신으면 금방 닳음.</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="bg-green-100 text-green-800 p-2 rounded text-2xl">🌿</div>
            <div>
              <h3 className="font-bold text-green-600 dark:text-green-400">옴니용 (Omni/Grass)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">작은 돌기가 촘촘히 박혀 있음. 인조잔디에서 최고의 접지력.</p>
              <ul className="text-sm text-gray-500 list-disc list-inside">
                <li>추천: 모래가 많이 뿌려진 미끄러운 인조잔디</li>
                <li>특징: 한국의 인조잔디 코트 환경에 최적화됨.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="stability-vs-speed" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          안정성(Stability) vs 스피드(Speed) 타입
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          테니스화는 크게 '묵직하고 튼튼한 타입'과 '가볍고 빠른 타입'으로 나뉩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-5 text-center">
              <div className="bg-purple-100 text-purple-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">🛡️</div>
              <h3 className="font-bold text-lg mb-2">안정형 (Stability)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-10">발목을 단단히 잡아주고 내구성이 좋음. 무게가 좀 나감.</p>
              <div className="text-left bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                <span className="font-bold text-purple-600">추천 모델:</span>
                <ul className="list-disc list-inside mt-1">
                  <li>아식스 젤 레졸루션 9</li>
                  <li>아디다스 바리케이드</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-5 text-center">
              <div className="bg-cyan-100 text-cyan-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">⚡</div>
              <h3 className="font-bold text-lg mb-2">스피드형 (Speed)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-10">가볍고 날렵함. 빠른 풋워크 가능. 내구성은 상대적으로 낮음.</p>
              <div className="text-left bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm">
                <span className="font-bold text-cyan-600">추천 모델:</span>
                <ul className="list-disc list-inside mt-1">
                  <li>아식스 코트 FF 3 (조코비치)</li>
                  <li>나이키 베이퍼 프로 2</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="wide-fit" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          발볼 넓은 사람을 위한 추천 (와이드 핏)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          한국인은 서양인에 비해 발볼이 넓은 편입니다. 나이키(칼발용)를 신으면 발가락 물집이 잡힐 수 있습니다.
        </p>
        <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg">
          <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-3">✅ 와이드(Wide/2E/4E) 모델이 나오는 브랜드</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="bg-white dark:bg-gray-700 font-bold px-2 py-1 rounded text-sm shadow-sm">아식스 (Asics)</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">가장 다양한 와이드 라인업 보유. 발볼러의 구세주.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-white dark:bg-gray-700 font-bold px-2 py-1 rounded text-sm shadow-sm">뉴발란스 (New Balance)</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">2E(약간 넓음), 4E(매우 넓음)까지 출시.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-white dark:bg-gray-700 font-bold px-2 py-1 rounded text-sm shadow-sm">요넥스 (Yonex)</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">이클립션, 소닉케이지 등 와이드 버전 출시.</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="size-check" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          실패 없는 사이즈 선택법
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-pink-500 shadow-sm">
          <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
            <li><strong>오후에 신어라:</strong> 발은 아침보다 오후에 붓습니다. 경기할 때와 비슷한 상태에서 신어보세요.</li>
            <li><strong>스포츠 양말 착용:</strong> 두꺼운 테니스 양말을 신은 상태여야 합니다.</li>
            <li><strong>엄지손가락 법칙:</strong> 신발을 신고 끈을 묶었을 때, 발뒤꿈치에 엄지손가락 하나가 들어갈 정도의 여유가 있어야 합니다.</li>
            <li><strong>반 치수 업 (0.5~1cm):</strong> 급정지 시 발가락이 신발 앞코에 닿으면 멍이 듭니다. 평소 270이면 275~280을 추천합니다.</li>
          </ol>
        </div>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          결론 — 코트 위의 생명보험
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          멋진 라켓보다 중요한 것은 편안한 신발입니다. 발이 편해야 풋워크가 가벼워지고, 풋워크가 좋아야 공을 잘 칠 수 있습니다. 초보자라면 <strong>올코트용 + 안정형(Stability) + 반 치수 큰 사이즈</strong> 공식을 기억하세요.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-racket-selection-guide" className="group block">
            <Card className="bg-gray-50 dark:bg-gray-800 hover:border-teal-500 transition-colors">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 font-bold block mb-1">다음 글 읽기</span>
                  <span className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-teal-600 transition-colors">라켓 선택 가이드</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded-full text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors">➜</div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/utility/shoe-recommender" className="group block">
            <Card className="bg-gradient-to-r from-teal-500 to-green-600 border-none text-white">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-teal-100 font-bold block mb-1">유틸리티</span>
                  <span className="font-bold">내 발에 맞는 신발 찾기 TEST</span>
                </div>
                <div className="bg-white/20 p-2 rounded-full">➜</div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}
