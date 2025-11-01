import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 서브 타이밍과 스핀 컨트롤 완전 가이드 | 리듬으로 서브 완성하기',
  description: '테니스 서브를 강하게 만드는 핵심은 타이밍과 리듬이다. 플랫·슬라이스·킥서브까지, 아마추어도 즉시 실력 향상 가능한 서브 완전 가이드.',
  keywords: ['테니스 서브', '서브 타이밍', '스핀 서브', '플랫 서브', '슬라이스 서브', '킥 서브', '리듬'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-serve-timing-and-spin-guide',
  },
  openGraph: {
    title: '테니스 서브 타이밍과 스핀 컨트롤 완전 가이드 | 리듬으로 서브 완성하기',
    description: '테니스 서브를 강하게 만드는 핵심은 타이밍과 리듬이다. 플랫·슬라이스·킥서브까지, 아마추어도 즉시 실력 향상 가능한 서브 완전 가이드.',
    url: 'https://tennisfriends.co.kr/blog/tennis-serve-timing-and-spin-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 서브 타이밍과 스핀 컨트롤 완전 가이드 | 리듬으로 서브 완성하기',
    description: '테니스 서브를 강하게 만드는 핵심은 타이밍과 리듬이다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'serve-flow-concept', text: '서브는 "던지기"가 아니라 "흘러가기"다', depth: 2 },
  { id: 'serve-types-differences', text: '플랫·슬라이스·킥서브의 차이를 이해하라', depth: 2 },
  { id: 'rhythm-serve-routine', text: '리듬 서브를 만드는 3단계 루틴', depth: 2 },
  { id: 'regional-court-serve-strategy', text: '지역별 코트별 서브 전략 — 서울·부산·대구·제주', depth: 2 },
  { id: 'serve-speed-training', text: '서브 속도를 높이는 3가지 실전 훈련법', depth: 2 },
  { id: 'equipment-grip-setup', text: '장비 세팅과 그립 선택', depth: 2 },
  { id: 'serve-confidence-technology', text: '서브는 자신감의 기술이다', depth: 2 },
  { id: 'serve-checklist', text: '서브 점검 체크리스트', depth: 2 },
];

const faqs = [
  {
    q: '테니스 서브에서 가장 중요한 포인트는?',
    a: '힘이 아니라 리듬과 타이밍입니다. 일정한 토스와 하체 리듬이 맞아야 공이 직선으로 뻗습니다.'
  },
  {
    q: '플랫 서브와 슬라이스 서브의 차이는?',
    a: '플랫 서브는 빠르고 직선적인 궤적, 슬라이스 서브는 옆으로 휘는 궤적을 만들어 상대 타점을 흔듭니다.'
  },
  {
    q: '서브 속도를 높이려면 근력 운동이 필요할까?',
    a: '근력보다는 타이밍 훈련이 중요합니다. 어깨 회전과 무릎 타이밍이 맞을 때 자연스러운 파워가 나옵니다.'
  },
  {
    q: '서브할 때 공이 자꾸 짧게 가는 이유는?',
    a: '토스가 낮거나 임팩트 후 라켓 흐름이 끊기기 때문입니다. 팔을 끝까지 따라가며 스윙 흐름을 유지하세요.'
  },
  {
    q: '서브 리듬을 안정적으로 잡는 방법은?',
    a: '\'하나-둘-셋\' 같은 일정한 카운트를 유지해 리듬을 몸에 각인시키는 것이 가장 효과적입니다.'
  }
];

export default function TennisServeTimingAndSpinGuidePage() {
  const title = '테니스 서브 완전 정복, 힘이 아닌 타이밍으로 승부하라';
  const excerpt = '강한 서브는 팔힘이 아니라 리듬에서 나온다. 아마추어가 프로처럼 보이게 만드는 서브 타이밍과 스핀 컨트롤의 모든 것을 정리했다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            서브 마스터
          </Badge>
          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
            타이밍 기술
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          많은 테니스 아마추어들이 '강한 서브=팔힘'이라고 생각하지만, 진짜 핵심은 <strong>리듬과 타이밍</strong>이다. 팔이 아닌 전신의 연결, 즉 몸 전체의 템포가 맞아야 공에 힘이 실린다. 이 글에서는 강한 서브가 아니라 <strong>정확한 서브</strong>, 그리고 '리듬 있는 서브'를 만드는 실전 노하우를 다룬다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-footwork-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 풋워크 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/technique/footwork-fundamentals.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 풋워크 기초 가이드</a></li>
        </ul>
      </div>

      <section id="serve-flow-concept" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          서브는 "던지기"가 아니라 "흘러가기"다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          서브에서 가장 흔한 실수는 공을 '던지듯' 치는 것이다. 하지만 이상적인 서브는 <strong>자연스럽게 이어지는 흐름</strong>에 있다. 공을 던지는 순간 어깨, 팔꿈치, 손목이 하나의 선으로 이어져야 한다. 팔만 쓰면 속도는 올라가지만 방향 제어가 어렵고, 오히려 부상의 원인이 된다.
        </p>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>👉 핵심 포인트:</strong> '던진다'보다 '흘린다'를 의식하라. 스윙의 중간을 잘라내지 말고, 임팩트 후에도 라켓이 자연스럽게 하강하도록 유지해야 한다.
          </p>
        </div>
      </section>

      <section id="serve-types-differences" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          플랫·슬라이스·킥서브의 차이를 이해하라
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">구분</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">임팩트 위치</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">궤적</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">추천 상황</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">플랫 서브</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">정면, 높이</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">직선적, 빠름</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">첫 서브용</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">슬라이스 서브</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">옆면, 낮게</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">옆으로 휘어짐</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">상대 백핸드 공략</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">킥 서브</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">후면, 높이</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">위로 튀어오름</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">두 번째 서브, 안정형</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          이 세 가지를 번갈아 섞으면 <strong>상대의 리듬을 완전히 깨뜨릴 수 있다.</strong> 예를 들어, 첫 서브는 플랫으로 강하게, 두 번째는 킥서브로 안정적으로 넣으면 심리적으로 압박을 줄 수 있다.
        </p>

        <blockquote className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 dark:bg-orange-950 italic">
          <p className="text-orange-800 dark:text-orange-200">
            💡 "서브의 힘은 다양성에서 나온다." — 같은 동작 속 다른 타이밍이 상대의 타점을 흔든다.
          </p>
        </blockquote>
      </section>

      <section id="rhythm-serve-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-yellow-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          리듬 서브를 만드는 3단계 루틴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">1️⃣ 토스 타이밍 고정</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공을 던질 때 시선은 하늘이 아니라 공 중심에 고정.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2️⃣ 하체 리듬 동기화</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">무릎 굽힘과 팔 상승이 동시에 움직여야 한다.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">3️⃣ 임팩트 후 흐름 유지</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공을 친 뒤 멈추지 말고 몸이 자연스럽게 전진하도록.</p>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>👉 루틴 예시:</strong> '하나(준비)–둘(토스)–셋(임팩트)' 같은 리듬카운트로 일정한 템포를 유지해보자.
          </p>
        </div>
      </section>

      <section id="regional-court-serve-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          지역별 코트별 서브 전략 — 서울·부산·대구·제주
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          한국의 코트 환경은 지역별로 다르다. 서브 타이밍과 스핀량도 그에 맞춰 조정해야 한다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울(하드코트)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">낮은 바운스, 플랫 서브가 유리. 빠른 템포 유지.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산(해안형 코트)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">습도 높음, 공이 느리게 튐. 슬라이스 서브로 궤적 변화 활용.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구(건조한 코트)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발력 강함, 킥서브 시 공이 과하게 튈 수 있음. 토스 높이 낮추기.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주(해풍 영향)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람 변수 큼, 공이 흔들림. 킥서브보다 플랫 서브 중심 운영.</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>👉 GEO 팁:</strong> "부산 테니스 서브 궤적", "서울 하드코트 서브 리듬" 등 지역 키워드 검색은 로컬 유입에 강력하다.
          </p>
        </div>
      </section>

      <section id="serve-speed-training" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          서브 속도를 높이는 3가지 실전 훈련법
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">1️⃣ 서브 섀도우 훈련</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">라켓 없이 몸의 회전 타이밍만 연습. 거울 앞에서 20회.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2️⃣ 공 던지기 훈련</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">실제 라켓 각도로 공을 던지며 어깨 회전 타이밍 익히기.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">3️⃣ 2볼 리듬 훈련</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">한 손에 두 공을 들고 연속 던지기 — 첫 공은 연습, 두 번째는 서브.</p>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>👉 핵심:</strong> 서브 속도를 높이려면 근육이 아니라 '순간 타이밍'을 훈련해야 한다.
          </p>
        </div>
      </section>

      <section id="equipment-grip-setup" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          장비 세팅과 그립 선택
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          겨울에는 공이 무거워 플랫 서브가 어려울 수 있다. 이럴 때는 스트링 텐션을 낮추고, 라켓 그립은 <strong>콘티넨탈 그립</strong>으로 유지하라. 모든 서브(플랫·슬라이스·킥)에 공통으로 사용 가능한 '표준 그립'이다.
        </p>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">장비 팁:</h3>
          <ul className="space-y-2 text-purple-700 dark:text-purple-300">
            <li>• 스트링: 폴리 → 하이브리드 전환 시 반발력 개선</li>
            <li>• 라켓 무게: 295g 이상이면 파워 유지에 유리</li>
            <li>• 신발: 접지력 높은 멀티코트용 필수</li>
          </ul>
        </div>
      </section>

      <section id="serve-confidence-technology" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          서브는 자신감의 기술이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          서브가 흔들리면 경기 전체 리듬이 깨진다. 그러나 서브 리듬을 잡으면 포핸드, 백핸드, 리턴까지 안정된다.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 bg-indigo-50 dark:bg-indigo-950 italic mb-6">
          <p className="text-indigo-800 dark:text-indigo-200">
            💡 "서브 성공률 10% 상승은 경기 승률 30% 상승과 같다." — 리듬을 찾으면 승리도 가까워진다.
          </p>
        </blockquote>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>👉 추천 루틴:</strong> 매일 30분, 50서브 목표. '속도'보다 '리듬'을 기록하라. 5일만 해도 몸이 자동으로 박자를 기억한다.
          </p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
          지금 리듬 서브를 완성했다면, <Link href="/blog/winter-indoor-tennis-training-routine" className="text-blue-600 hover:text-blue-800 underline">겨울 실내 테니스 전략 가이드</Link>를 함께 읽어보세요. 서브-리턴 밸런스가 완성되면 코트 위 흐름이 달라집니다.
        </p>
      </section>

      <section id="serve-checklist" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          서브 점검 체크리스트
        </h2>

        <div className="bg-pink-50 dark:bg-pink-950 p-6 rounded-lg">
          <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-4">👉 서브 점검 체크리스트</h3>
          <ul className="space-y-2 text-pink-700 dark:text-pink-300">
            <li>• 토스 타이밍 일정한가?</li>
            <li>• 무릎과 팔의 리듬이 동기화되는가?</li>
            <li>• 서브 후 흐름이 끊기지 않는가?</li>
            <li>• 스핀 종류를 상황별로 활용하는가?</li>
            <li>• 지역별 코트 특성에 맞게 조정했는가?</li>
          </ul>
        </div>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/autumn-tennis-rhythm-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 mb-2">
                  가을 시즌
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  가을 테니스, 리듬을 되찾는 순간 실력이 달라진다
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  가을 테니스 시즌에 흔들리는 리듬과 스윙 타이밍을 잡는 법. 지역별 코트 전략, 풋워크 훈련 루틴, 스트링 세팅 팁까지 한눈에 정리.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/guide/tennis-serve-form-tips">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  기술 가이드
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 서브 자세 교정법
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  올바른 서브 자세를 위한 단계별 교정법과 흔한 실수들. 프로처럼 정확한 서브를 치는 방법.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
