import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 라켓 선택 완전 가이드 — 무게·밸런스·스트링 세팅으로 결정되는 퍼포먼스 차이 | 당신의 플레이 스타일에 맞는 최적의 라켓 찾기',
  description: '라켓은 단순한 도구가 아니다. 무게와 밸런스, 스트링 텐션이 경기력을 결정한다. 올바른 선택이 실력을 바꾼다.',
  keywords: ['테니스 라켓', '라켓 선택', '스트링 텐션', '밸런스', '무게', '테니스 장비', '라켓 추천'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-racket-selection-guide',
  },
  openGraph: {
    title: '테니스 라켓 선택 완전 가이드 — 무게·밸런스·스트링 세팅으로 결정되는 퍼포먼스 차이 | 당신의 플레이 스타일에 맞는 최적의 라켓 찾기',
    description: '라켓은 단순한 도구가 아니다. 무게와 밸런스, 스트링 텐션이 경기력을 결정한다. 올바른 선택이 실력을 바꾼다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-racket-selection-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 라켓 선택 완전 가이드 — 무게·밸런스·스트링 세팅으로 결정되는 퍼포먼스 차이 | 당신의 플레이 스타일에 맞는 최적의 라켓 찾기',
    description: '라켓은 단순한 도구가 아니다. 무게와 밸런스, 스트링 텐션이 경기력을 결정한다. 올바른 선택이 실력을 바꾼다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'racket-weight', text: '1. 라켓 무게 — 컨트롤과 파워의 첫 번째 기준', depth: 2 },
  { id: 'balance-point', text: '2. 밸런스 포인트 — 라켓의 \'중심\'을 느껴라', depth: 2 },
  { id: 'string-pattern', text: '3. 스트링 패턴 — 스핀과 컨트롤의 비밀', depth: 2 },
  { id: 'string-tension', text: '4. 스트링 텐션 — 힘과 감각의 균형점', depth: 2 },
  { id: 'regional-racket-setting', text: '5. 지역별 라켓 세팅 전략', depth: 2 },
  { id: 'racket-replacement', text: '6. 라켓 교체 주기 — 실력보다 먼저 바꾸지 마라', depth: 2 },
  { id: 'testing-method', text: '7. 테스트 방법 — 매장에서 \'3구 테스트\'', depth: 2 },
  { id: 'conclusion-racket-rhythm', text: '결론 — 라켓은 스펙이 아니라 리듬이다', depth: 2 },
];

const faqs = [
  {
    q: '라켓 무게는 어떻게 고르는 게 좋나요?',
    a: '초보는 280~300g, 중급은 300g 이상이 이상적입니다. 체력과 스윙 속도에 맞추세요.'
  },
  {
    q: '스트링 텐션은 계절에 따라 달라야 하나요?',
    a: '네. 여름엔 1~2lbs 낮추고, 겨울엔 1~2lbs 높이는 것이 좋습니다.'
  },
  {
    q: '라켓 밸런스는 어떻게 테스트하나요?',
    a: '손가락 한 개로 라켓을 받쳐 중심이 어디에 있는지 확인하세요. 흔들림이 없으면 그게 당신의 밸런스입니다.'
  },
  {
    q: '스트링 패턴이 경기력에 영향을 주나요?',
    a: '그렇습니다. 16x19는 스핀, 18x20은 컨트롤 중심입니다.'
  },
  {
    q: '지역별 환경에 맞는 라켓 세팅이 필요한가요?',
    a: '네. 지역 기후에 따라 반발력과 습도가 달라져 텐션 조정이 필수입니다.'
  }
];

export default function TennisRacketSelectionGuidePage() {
  const title = '테니스 라켓 선택 완전 가이드 — 무게·밸런스·스트링 세팅으로 결정되는 퍼포먼스 차이 | 당신의 플레이 스타일에 맞는 최적의 라켓 찾기';
  const excerpt = '라켓은 단순한 도구가 아니다. 무게와 밸런스, 스트링 텐션이 경기력을 결정한다. 올바른 선택이 실력을 바꾼다.';

  return (
    <Article 
      title={title} 
      excerpt={excerpt}
      date="2024-01-15"
      slug="tennis-racket-selection-guide"
      author="TennisFriends"
      image="/images/blog/tennis-racket-selection-guide.png"
    >
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
            장비 가이드
          </Badge>
          <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
            라켓 선택
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스에서 라켓은 단순한 장비가 아닙니다. 당신의 스윙, 체력, 스타일에 따라 라켓이 맞지 않으면 경기력이 30% 이상 손실됩니다. 반대로 '나에게 맞는 라켓'을 찾으면, 힘을 덜 쓰고 더 정교한 샷을 구사할 수 있습니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/gear/2021/01/how-to-choose-tennis-racket/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 라켓 선택 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-equipment.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 장비 가이드</a></li>
        </ul>
      </div>

      <section id="racket-weight" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          라켓 무게 — 컨트롤과 파워의 첫 번째 기준
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          라켓의 무게는 파워와 컨트롤의 중심축입니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">구분</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">무게(그람)</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">추천 대상</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">초경량</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">250~270g</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">스윙이 가볍고 빠름, 제어력 낮음</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">초보, 여성, 주니어</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">중간형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">280~300g</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">밸런스형, 안정적 컨트롤</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">중급자</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">중량형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">305~330g</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">파워·정확도 우수, 체력 부담</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">상급자</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>💡 팁:</strong> 체력이 충분하다면 300g 이상으로 시작하는 것이 이상적입니다. 가벼운 라켓은 초반엔 편하지만, 상급 기술로 갈수록 한계가 옵니다.
          </p>
        </div>
      </section>

      <section id="balance-point" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          밸런스 포인트 — 라켓의 '중심'을 느껴라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          밸런스는 라켓의 무게 중심이 어디에 있느냐를 말합니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">유형</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">밸런스(mm)</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">헤드 라이트 (Head Light)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">315mm 이하</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">컨트롤 중심, 네트 플레이 유리</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">이븐 밸런스 (Even)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">320~330mm</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">밸런스형, 전체적인 안정감</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">헤드 헤비 (Head Heavy)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">335mm 이상</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">파워 중심, 베이스라인형 플레이어에 유리</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>테스트 방법:</strong> 손가락 한 개로 라켓을 받쳐 무게중심을 직접 느껴보세요. 공이 맞는 순간 흔들림이 적다면 그게 당신의 밸런스입니다.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>💡 TIP:</strong> 복식 플레이어는 Head Light, 베이스라인 스트로커는 Head Heavy 라켓을 선호합니다.
          </p>
        </div>
      </section>

      <section id="string-pattern" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          스트링 패턴 — 스핀과 컨트롤의 비밀
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          라켓의 스트링 밀도는 공의 궤적을 좌우합니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">패턴</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">형태</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">오픈 패턴</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">16x19</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">스핀량 많음, 반발 강함, 내구성 약함</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">데니스 패턴</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">18x20</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">컨트롤 우수, 반발 약함, 정확성 높음</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>선택법:</strong> 스핀 중심 플레이어는 16x19, 플랫샷 중심 플레이어는 18x20이 적합합니다.
          </p>
        </div>
      </section>

      <section id="string-tension" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          스트링 텐션 — 힘과 감각의 균형점
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          텐션이 높을수록 컨트롤은 좋아지고, 낮을수록 파워는 커집니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">텐션(lbs)</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">추천 대상</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">48~52</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">파워형, 부드러운 타구감</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">초·중급자</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">53~57</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">밸런스형, 안정적 반발력</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">대부분 플레이어</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">58~62</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">컨트롤형, 정확도 높음</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">상급자</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>기억하세요:</strong> 온도·습도에 따라 텐션은 1~2lbs씩 조정해야 합니다. 습한 여름 부산에서는 낮게, 건조한 대구에서는 높게 설정하세요.
          </p>
        </div>
      </section>

      <section id="regional-racket-setting" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          지역별 라켓 세팅 전략
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 빠름 → 텐션 +1lbs, 오픈 패턴 유지.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습도 높음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 약함 → 텐션 -2lbs, 스트링 교체 주기 단축.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 가벼움 → 헤드 라이트 밸런스, 텐션 +3lbs.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">스핀 컨트롤 중요 → 오픈 패턴 + 낮은 텐션 조합.</p>
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            지역 환경에 맞춘 세팅은 단순 취향이 아니라, '공의 반응' 자체를 바꿉니다.
          </p>
        </div>
      </section>

      <section id="racket-replacement" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          라켓 교체 주기 — 실력보다 먼저 바꾸지 마라
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">아마추어 기준:</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">연 1~2회 교체.</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">주 3회 이상 플레이어:</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">6개월~9개월마다 교체.</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">스트링:</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">25~30시간 사용 시 교체.</p>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>체크법:</strong> 라켓 프레임에서 진동이 느껴지면 수명이 끝난 신호입니다.
          </p>
        </div>
      </section>

      <section id="testing-method" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          테스트 방법 — 매장에서 '3구 테스트'
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          라켓을 고를 때는 단순히 휘두르지 말고 실제 공을 세 번 쳐보세요.
        </p>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg mb-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">첫 구 —</strong>
                <span className="text-teal-700 dark:text-teal-300"> 무게감 확인.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">두 번째 —</strong>
                <span className="text-teal-700 dark:text-teal-300"> 반발과 진동.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">세 번째 —</strong>
                <span className="text-teal-700 dark:text-teal-300"> 타점 중심 일치 여부.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            이 세 구에서 가장 '자연스러운 감각'을 주는 라켓이 정답입니다. 감각은 숫자보다 정확합니다.
          </p>
        </div>
      </section>

      <section id="conclusion-racket-rhythm" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 라켓은 스펙이 아니라 리듬이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          좋은 라켓은 숫자가 아닌 <strong>몸의 리듬</strong>과 맞는 라켓입니다. 무게·밸런스·텐션·스트링을 이해하면, 라켓이 당신의 플레이를 완성시킵니다. 기계적 기준보다 감각적 일관성을 우선하세요. 결국 라켓은 '당신의 연장된 팔'입니다.
        </p>
        
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            참고 자료: 테니스 라켓의 물리적 특성에 대한 더 자세한 기술적 정보는 국제테니스연맹(ITF)의 기술 리포트를 참고하세요.
          </p>
          <a 
            href="https://www.itftennis.com/en/about-us/tennis-tech/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center gap-1"
          >
            ITF Tennis Technology & Technical Centre
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </section>

      <div className="my-12">
        <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 border-none text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <CardContent className="p-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">내 실력에 맞는 라켓을 찾고 계신가요?</h3>
              <p className="text-indigo-100">먼저 정확한 NTRP 레벨을 측정하고, 데이터 기반의 장비 추천을 받아보세요.</p>
            </div>
            <Link href="/utility/ntrp-test">
              <span className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-lg whitespace-nowrap">
                NTRP 실력 측정하기
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-string-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  스트링 가이드
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 스트링 완전 가이드 — 텐션·재질·패턴으로 결정되는 타구감 차이
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  스트링은 라켓의 심장이다. 텐션 하나로 타구감이 완전히 달라진다. 당신의 플레이 스타일에 맞는 최적 스트링 찾기.
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
