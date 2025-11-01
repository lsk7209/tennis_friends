import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스화 선택 완전 가이드 | 접지·지지·쿠션·사이징 균형법',
  description: '하드·클레이·올코트별 아웃솔 차이, 평발/요족 맞춤 인솔, 지역별 기후 조건과 교체 주기까지 완전 정리.',
  keywords: ['테니스화', '테니스 신발', '하드코트 신발', '클레이코트 신발', '평발', '요족', '인솔', '사이징'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-shoes-balance-guide',
  },
  openGraph: {
    title: '테니스화 선택 완전 가이드 | 접지·지지·쿠션·사이징 균형법',
    description: '하드·클레이·올코트별 아웃솔 차이, 평발/요족 맞춤 인솔, 지역별 기후 조건과 교체 주기까지 완전 정리.',
    url: 'https://www.tennisfrens.com/blog/tennis-shoes-balance-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스화 선택 완전 가이드 | 접지·지지·쿠션·사이징 균형법',
    description: '하드·클레이·올코트별 아웃솔 차이, 평발/요족 맞춤 인솔, 지역별 기후 조건과 교체 주기까지 완전 정리.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'court-surface-outsole-structure', text: '하드·클레이·올코트 — 표면별 아웃솔 구조 이해', depth: 2 },
  { id: 'foot-type-custom-selection', text: '발형(평발·요족)에 따른 맞춤 선택', depth: 2 },
  { id: 'regional-environment-optimization', text: '지역별 환경에 따른 선택', depth: 2 },
  { id: 'sizing-fitting-tips', text: '사이징과 착화 팁', depth: 2 },
  { id: 'replacement-cycle-maintenance', text: '교체 주기와 관리 루틴', depth: 2 },
  { id: 'conclusion-shoe-science', text: '결론 — \'신발의 과학\'이 경기력을 결정한다', depth: 2 },
];

const faqs = [
  {
    q: '올코트 신발 하나로 전 코트 사용 가능할까요?',
    a: '가능하지만 젖은 클레이나 먼지 많은 실내에선 접지가 떨어집니다. 가능하면 표면별 전용화를 권장합니다.'
  },
  {
    q: '평발인데 무릎이 아픕니다.',
    a: '아치 서포트 인솔을 추가하고, 중간 강도의 쿠션 모델을 선택하세요. 힐 락 끈 묶기도 필수입니다.'
  },
  {
    q: '사이즈는 타이트하게 신어야 하나요?',
    a: '러닝화보다 반 치수 작게, 엄지와 신발 끝 사이 1cm 여유가 적당합니다.'
  },
  {
    q: '교체 시점은 어떻게 알 수 있나요?',
    a: '밑창 패턴 30% 이상 마모, 측면 주름, 미끄러짐이 느껴질 때가 교체 시점입니다.'
  },
  {
    q: '여름에 발이 너무 뜨겁습니다.',
    a: '통기성 높은 메시 상부와 얇은 기능성 양말로 열 배출을 돕고, 경기 중 중간 휴식 때 신발을 잠깐 벗어 통풍하세요.'
  }
];

export default function TennisShoesBalanceGuidePage() {
  const title = '테니스화 선택은 \'접지·지지·쿠션\'의 균형이다 — 하드·클레이·올코트별 아웃솔, 발형(평발·요족)과 사이징까지 완전 가이드';
  const excerpt = '테니스 실력의 절반은 신발에서 시작된다. 표면·발형·지지·사이징을 이해하면 부상은 줄고, 스텝 속도는 오른다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-gray-50 to-stone-50 dark:from-gray-950 dark:to-stone-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
            장비 가이드
          </Badge>
          <Badge className="bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-300">
            풋워크 지원
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          많은 아마추어가 라켓에는 투자를 아끼지 않지만, 정작 신발 선택에는 대충 접근합니다. 그러나 실제 경기력의 절반은 발 밑에서 시작됩니다. 테니스화는 단순한 '운동화'가 아니라, **접지(그립)**, **지지(안정성)**, **쿠션(충격 완화)**의 균형으로 만들어진 정밀 장비입니다. 코트 표면과 발형, 체중, 플레이 스타일에 따라 올바른 모델을 고르는 법을 알아보겠습니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-footwear-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스화 선택 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/gear/tennis-shoes-guide.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 테니스화 가이드</a></li>
        </ul>
      </div>

      <section id="court-surface-outsole-structure" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-gray-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          하드·클레이·올코트 — 표면별 아웃솔 구조 이해
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스 코트 표면에 따라 신발의 밑창 구조가 완전히 달라집니다. 올바른 아웃솔을 선택하면 접지력과 안정성이 결정됩니다.
        </p>

        <div className="space-y-6 mb-6">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">하드코트용 신발</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              가장 많이 쓰이는 코트. 표면이 단단하므로 아웃솔의 내구성과 접지력이 중요합니다. 밑창 패턴은 미세하고 조밀해야 하며, 측면 보강이 강해야 빠른 방향 전환 시 안정적입니다. 쿠션이 너무 약하면 무릎에 충격이 누적되고, 너무 부드러우면 반응이 늦습니다.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3">클레이코트용 신발</h3>
            <p className="text-orange-700 dark:text-orange-300 text-sm">
              흙 위에서 미끄러지며 스텝을 조절해야 하므로, 헤링본(herringbone) 패턴이 필수입니다. 이 패턴은 흙을 바깥으로 배출하면서 일정한 미끄러짐을 유지시켜줍니다. 솔의 홈이 깊을수록 안정적이며, 쿠션보다 접지의 일관성이 중요합니다.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">올코트용 신발</h3>
            <p className="text-green-700 dark:text-green-300 text-sm">
              하드와 클레이의 중간 지점. 모든 환경에 쓸 수 있지만, 젖은 클레이나 먼지 많은 실내에서는 접지가 떨어집니다. 실내 카펫에서는 트랙션이 과해 무릎에 부담을 줄 수 있으니 주의해야 합니다.
            </p>
          </div>
        </div>
      </section>

      <section id="foot-type-custom-selection" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-stone-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          발형(평발·요족)에 따른 맞춤 선택
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          발형을 무시하면 부상 위험이 크게 높아집니다. 발바닥 아치의 높이에 따라 적합한 신발이 달라집니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-stone-50 dark:bg-stone-950 p-4 rounded-lg">
            <h3 className="font-bold text-stone-800 dark:text-stone-200 mb-3">평발 (Flat Foot)</h3>
            <p className="text-stone-700 dark:text-stone-300 text-sm mb-2">
              아치가 낮아 발바닥 전체가 닿으므로, 지지력이 높은 인솔과 측면 안정성이 필수입니다.
            </p>
            <p className="text-stone-600 dark:text-stone-400 text-xs">→ 서포트형 모델 추천</p>
          </div>
          <div className="bg-stone-50 dark:bg-stone-950 p-4 rounded-lg">
            <h3 className="font-bold text-stone-800 dark:text-stone-200 mb-3">요족 (High Arch)</h3>
            <p className="text-stone-700 dark:text-stone-300 text-sm mb-2">
              충격 분산이 어려워, 쿠션이 좋은 미드솔이 유리합니다.
            </p>
            <p className="text-stone-600 dark:text-stone-400 text-xs">→ 쿠셔닝형 모델 추천</p>
          </div>
        </div>

        <div className="bg-stone-50 dark:bg-stone-950 p-4 rounded-lg border-l-4 border-stone-500">
          <h3 className="font-bold text-stone-800 dark:text-stone-200 mb-3">발형 체크 방법</h3>
          <p className="text-stone-700 dark:text-stone-300 text-sm">
            젖은 발로 종이에 서보세요. 발바닥 전체가 찍히면 평발, 가운데가 거의 비면 요족입니다.
          </p>
        </div>

        <div className="bg-stone-50 dark:bg-stone-950 p-4 rounded-lg border-l-4 border-stone-500 mt-4">
          <h3 className="font-bold text-stone-800 dark:text-stone-200 mb-3">힐 락(Hill Lock) 끈 묶기</h3>
          <p className="text-stone-700 dark:text-stone-300 text-sm">
            마지막 구멍에 끈을 교차해 통과시키면 뒤꿈치 들림이 줄어듭니다.
          </p>
        </div>
      </section>

      <section id="regional-environment-optimization" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          지역별 환경에 따른 선택
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          한국의 지역별 기후와 코트 조건에 따라 신발의 성능이 달라집니다. 지역 환경에 맞춰 신발을 선택하는 것이 중요합니다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·수도권 (하드코트 위주, 건조)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">접지력 강한 모델, 쿠션 중간 정도. 신발 바닥 패턴이 미세한 모델이 좋습니다.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산·남해 지역 (습도 높음, 해안)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">통기성 높은 메시 소재 + 측면 보강이 강한 제품.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구·내륙 지역 (고온·건조)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">쿠션이 탄탄한 모델, 인솔 교체 주기 짧게 관리.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주·해안 지역 (바람·모래 많음)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">흙 배출이 쉬운 헤링본 패턴, 중간 높이 아웃솔로 안정성 확보.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            지역별 기후 조건을 고려하면 신발의 마찰계수와 수명이 크게 달라집니다. 같은 모델이라도 기후에 따라 착화감이 달라질 수 있습니다.
          </p>
        </div>
      </section>

      <section id="sizing-fitting-tips" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          사이징과 착화 팁
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스화는 '러닝화보다 반 치수 작게'가 기본입니다. 테니스는 좌우·앞뒤 움직임이 많으므로 발이 신발 안에서 흔들리면 안 됩니다.
        </p>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-3">사이징 원칙</h3>
          <ul className="space-y-2 text-teal-700 dark:text-teal-300">
            <li>• 발길이 여유: 엄지 끝에서 10~12mm</li>
            <li>• 발볼 압력: 압박감은 있으나 저림이 없어야 함</li>
            <li>• 착용 테스트: 새 신발은 실내에서 30분 이상 걷고, 가볍게 스텝을 밟아봅니다</li>
          </ul>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">발등이 높은 경우</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">얇은 기능성 양말과 하프 업(0.5 큰 사이즈) 조합을 추천합니다.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">발볼이 좁은 경우</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">두꺼운 양말로 밀착감을 보완하세요.</p>
          </div>
        </div>
      </section>

      <section id="replacement-cycle-maintenance" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          교체 주기와 관리 루틴
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          주 3회 이상 플레이어라면 6~9개월 주기로 교체가 필요합니다. 아웃솔 패턴이 30% 이상 닳거나 측면 보강이 주름지면 접지가 무너졌다는 신호입니다.
        </p>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-3">관리법</h3>
          <ul className="space-y-2 text-pink-700 dark:text-pink-300">
            <li>• 경기 후 먼지와 흙 제거 → 마른 수건으로 닦고 음건</li>
            <li>• 인솔 분리 건조 → 세균과 냄새 방지</li>
            <li>• 끈은 풀어 보관 → 신발 모양 변형 방지</li>
          </ul>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>👉 젖은 신발 관리:</strong> 비 오는 날 젖은 신발은 신문지를 넣고 통풍이 잘되는 곳에서 말리세요. 드라이기나 히터는 접착제를 손상시킵니다.
          </p>
        </div>
      </section>

      <section id="conclusion-shoe-science" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          결론 — '신발의 과학'이 경기력을 결정한다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          라켓보다 신발이 더 중요할 때가 있습니다. 접지력이 안정되면 방향 전환이 빠르고, 쿠션이 충분하면 체력이 오래갑니다. 평발은 지지, 요족은 쿠션, 하드엔 내구, 클레이엔 접지, 제주는 통기성—이 공식을 기억하세요. 신발이 맞는 순간, 코트 위에서 발이 아니라 리듬이 미끄러집니다. 그것이 좋은 테니스화의 증거입니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        </div>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
