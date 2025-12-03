import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스화 선택법 — 코트별 접지력·쿠션·안정성으로 완성하는 발의 밸런스 | 경기력과 부상을 동시에 잡는 신발의 과학',
  description: '테니스화는 단순한 운동화가 아니다. 코트 종류, 발의 형태, 체중 이동에 따라 신발의 성능이 달라진다.',
  keywords: ['테니스화', '테니스 신발', '코트별 신발', '접지력', '쿠션', '안정성', '부상 예방'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-shoes-selection-guide',
  },
  openGraph: {
    title: '테니스화 선택법 — 코트별 접지력·쿠션·안정성으로 완성하는 발의 밸런스 | 경기력과 부상을 동시에 잡는 신발의 과학',
    description: '테니스화는 단순한 운동화가 아니다. 코트 종류, 발의 형태, 체중 이동에 따라 신발의 성능이 달라진다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-shoes-selection-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스화 선택법 — 코트별 접지력·쿠션·안정성으로 완성하는 발의 밸런스 | 경기력과 부상을 동시에 잡는 신발의 과학',
    description: '테니스화는 단순한 운동화가 아니다. 코트 종류, 발의 형태, 체중 이동에 따라 신발의 성능이 달라진다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'tennis-shoes-vs-regular', text: '1. 테니스화가 일반 운동화와 다른 이유', depth: 2 },
  { id: 'court-specific-selection', text: '2. 코트별 테니스화 선택 기준', depth: 2 },
  { id: 'cushion-stability-balance', text: '3. 쿠션과 안정성의 균형', depth: 2 },
  { id: 'foot-shape-customization', text: '4. 발 형태별 맞춤 선택법', depth: 2 },
  { id: 'regional-court-management', text: '5. 지역별 코트 환경과 신발 관리법', depth: 2 },
  { id: 'replacement-cycle-routine', text: '6. 교체 주기와 관리 루틴', depth: 2 },
  { id: 'conclusion-shoes-balance-device', text: '결론 — 테니스화는 \'몸의 밸런스 장치\'다', depth: 2 },
];

const faqs = [
  {
    q: '테니스화는 러닝화로 대체할 수 없나요?',
    a: '불가능합니다. 러닝화는 측면 안정성이 약해 좌우 움직임에 부상을 유발합니다.'
  },
  {
    q: '하드코트용 신발로 클레이코트에서 써도 되나요?',
    a: '짧은 시간은 가능하지만, 흙이 밑창에 끼어 미끄러질 위험이 있습니다.'
  },
  {
    q: '발목 보호대를 함께 사용하는 게 좋나요?',
    a: '네. 특히 하드코트에서는 발목 보호대가 부상 예방에 효과적입니다.'
  },
  {
    q: '신발 무게는 가벼울수록 좋나요?',
    a: '가볍지만 안정성이 떨어질 수 있습니다. 중량보다 밸런스가 중요합니다.'
  },
  {
    q: '테니스화는 얼마나 자주 교체해야 하나요?',
    a: '주 3회 이상 플레이하면 6~8개월마다 교체하세요. 밑창 패턴이 사라지면 교체 시기입니다.'
  }
];

export default function TennisShoesSelectionGuidePage() {
  const title = '테니스화 선택법 — 코트별 접지력·쿠션·안정성으로 완성하는 발의 밸런스 | 경기력과 부상을 동시에 잡는 신발의 과학';
  const excerpt = '테니스화는 단순한 운동화가 아니다. 코트 종류, 발의 형태, 체중 이동에 따라 신발의 성능이 달라진다.';

  return (
    <Article slug="tennis-shoes-selection-guide" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300">
            장비 가이드
          </Badge>
          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
            신발 선택
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스에서 신발은 단순히 발을 보호하는 장비가 아닙니다. 경기력, 리듬, 부상률까지 신발이 결정합니다. 잘못된 테니스화를 신으면 발목과 무릎에 반복적인 충격이 누적되고, 타이밍이 반 박자씩 늦어집니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/gear/2021/01/how-to-choose-tennis-shoes/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스화 선택 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-equipment/tennis-shoes.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 테니스화 가이드</a></li>
        </ul>
      </div>

      <section id="tennis-shoes-vs-regular" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          테니스화가 일반 운동화와 다른 이유
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스는 좌우 이동과 급정지가 반복되는 '수평 운동'입니다. 일반 러닝화처럼 앞뒤 충격 완화만으로는 부족합니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">구분</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">테니스화</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">러닝화</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">이동 방향</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">좌우, 전후</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">전후 중심</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">밑창 구조</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">평평하고 넓음</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">둥근 아웃솔</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">측면 안정성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">강함</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">약함</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">무게</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">약간 무거움</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">가벼움</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>💡 핵심:</strong> 러닝화로 테니스를 하면 발목이 돌아가거나, 무릎에 무리가 쉽게 갑니다.
          </p>
        </div>
      </section>

      <section id="court-specific-selection" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          코트별 테니스화 선택 기준
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          코트의 표면은 신발 밑창의 구조를 결정합니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">코트</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">추천 아웃솔</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">대표 모델 타입</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">하드코트</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">반발력 높고 마찰 큼</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>논마킹 솔(Non-marking)</strong>, 내구성 우수</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Asics Gel Resolution / Nike Vapor Pro</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">클레이코트</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">미끄러짐 많음</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>헤링본 패턴(Herringbone)</strong>, 흙 배출 우수</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Babolat Jet Tere / Adidas Ubersonic</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">인조잔디</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">불규칙 바운스, 마찰 적음</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>하이브리드 패턴</strong>, 미끄럼 방지</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Mizuno Wave Exceed / Yonex Fusionrev</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>💡 TIP:</strong> 클레이코트용 신발은 하드코트에서 빨리 닳습니다. 주 코트 환경에 맞춰 1켤레는 전용으로 두세요.
          </p>
        </div>
      </section>

      <section id="cushion-stability-balance" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          쿠션과 안정성의 균형
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>쿠션</strong>은 충격 흡수를, <strong>안정성</strong>은 움직임의 제어를 담당합니다. 두 요소는 반비례 관계입니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">유형</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">쿠션감</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">안정성</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">쿠션형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">높음</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">중간</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">충격 완화, 피로 감소</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">밸런스형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">중간</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">중간</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">대부분 플레이어에게 적합</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">안정형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">낮음</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">높음</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">빠른 반응, 폭발적 스텝</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>추천 조합:</strong> 초보는 쿠션형, 중급 이상은 밸런스형. 네트 플레이어는 안정형이 유리합니다.
          </p>
        </div>
      </section>

      <section id="foot-shape-customization" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          발 형태별 맞춤 선택법
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">발 형태</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">추천 신발 구조</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">평발형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">충격흡수 약함</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">아치 서포트 인솔 필수</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">하이아치형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">발볼 좁고 중심 불안</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">부드러운 쿠션 중창</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">보통형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">평균적인 체중 분포</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">밸런스형 아웃솔</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>테스트법:</strong> 신발 안쪽 깔창에 발자국을 찍어보세요. 발바닥이 전부 찍히면 평발, 중간만 찍히면 보통, 바깥만 찍히면 하이아치입니다.
          </p>
        </div>
      </section>

      <section id="regional-court-management" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          지역별 코트 환경과 신발 관리법
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">마찰 강함 → 밑창 닳는 속도 빠름, 교체주기 6개월.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습도 높음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">습기 보존 → 통풍성 좋은 메시 소재 필수.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">고무경화 빠름 → 음영 보관, 밑창 크랙 점검.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람·모래 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">먼지 유입 ↑ → 사용 후 브러시 세척.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            이렇게 지역별 환경에 맞춰 신발을 관리하면 수명이 크게 늘어납니다. 특히 습도가 높은 지역에서는 통풍 관리가 중요합니다.
          </p>
        </div>
      </section>

      <section id="replacement-cycle-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          교체 주기와 관리 루틴
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">일반 플레이어:</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">1년에 1회 교체.</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">주 3회 이상:</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">6~8개월 주기.</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">징후:</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">밑창 무늬 사라짐, 발목 흔들림, 소리 변형 시 교체.</p>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-3">관리 루틴:</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-pink-800 dark:text-pink-200">경기 후 솔 세척 + 그늘 건조.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-pink-800 dark:text-pink-200">인솔 분리 후 통풍.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-pink-800 dark:text-pink-200">매주 한번 냄새 제거제 or 베이킹소다 뿌리기.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="conclusion-shoes-balance-device" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          결론 — 테니스화는 '몸의 밸런스 장치'다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          좋은 신발은 경기력보다 <strong>부상 방지</strong>에서 빛을 발합니다. 쿠션, 안정성, 접지력을 자신의 스타일과 코트에 맞게 조합하세요.
        </p>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            테니스는 '발로 시작해 손으로 끝나는 스포츠'입니다. 신발이 맞지 않으면, 어떤 스윙도 안정되지 않습니다. 테니스화는 장비가 아니라 당신의 첫 번째 코치입니다.
          </p>
        </div>
      </section>

      
      {/* FAQ Section */}
      <FAQ items={faqs} />

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-injury-prevention-recovery">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  건강 관리
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 부상 예방과 회복 루틴 — 어깨·무릎·손목을 지키는 과학적 관리법
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  부상은 실력이 아니라 루틴의 문제다. 어깨·무릎·손목을 지키는 습관만 만들어도 경기력은 2배로 오래간다.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </Article>
  );
}
