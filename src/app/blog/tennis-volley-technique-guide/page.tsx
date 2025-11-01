import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 발리의 기술 — 네트 앞 1초 반응으로 결정되는 승부 | 감각·타이밍·밸런스로 완성하는 공격의 예술',
  description: '발리는 힘이 아니라 반응의 기술이다. 네트 앞 1초 안에 리듬을 잡는 순간, 승부는 이미 결정된다.',
  keywords: ['테니스 발리', '네트 플레이', '반응 속도', '기술', '포지셔닝', '복식'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-volley-technique-guide',
  },
  openGraph: {
    title: '테니스 발리의 기술 — 네트 앞 1초 반응으로 결정되는 승부 | 감각·타이밍·밸런스로 완성하는 공격의 예술',
    description: '발리는 힘이 아니라 반응의 기술이다. 네트 앞 1초 안에 리듬을 잡는 순간, 승부는 이미 결정된다.',
    url: 'https://www.tennisfrens.com/blog/tennis-volley-technique-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 발리의 기술 — 네트 앞 1초 반응으로 결정되는 승부 | 감각·타이밍·밸런스로 완성하는 공격의 예술',
    description: '발리는 힘이 아니라 반응의 기술이다. 네트 앞 1초 안에 리듬을 잡는 순간, 승부는 이미 결정된다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'volley-essence-hit-not-block', text: '1. 발리의 본질 — \'치지 말고 막는다\'', depth: 2 },
  { id: 'volley-positioning-net-1-5m-golden-zone', text: '2. 발리 포지셔닝 — 네트와 1.5m 거리의 황금존', depth: 2 },
  { id: 'forehand-vs-backhand-volley-comparison', text: '3. 포핸드 발리 vs 백핸드 발리 비교', depth: 2 },
  { id: 'geo-volley-position-adjustment', text: '4. GEO별 발리 포지션 조정법', depth: 2 },
  { id: 'volley-sensory-training-routine-15min', text: '5. 발리 감각 훈련 루틴 (15분)', depth: 2 },
  { id: 'mistake-correction-common-volley-errors', text: '6. 실수 교정 — 초보가 자주 하는 발리 오류', depth: 2 },
  { id: 'volley-role-in-doubles-space-pressure', text: '7. 복식에서의 발리 역할 — 공간 압박의 기술', depth: 2 },
  { id: 'conclusion-volley-prediction-not-preparation', text: '결론 — 발리는 예측이 아니라 준비다', depth: 2 },
];

const faqs = [
  {
    q: '발리를 세게 치면 더 좋은가요?',
    a: '아니요. 발리는 공의 힘을 이용하는 기술입니다. 세게 치면 오히려 컨트롤이 무너집니다.'
  },
  {
    q: '손목을 써도 되나요?',
    a: '안 됩니다. 손목은 고정해야 방향이 안정됩니다. 팔 전체로 움직이세요.'
  },
  {
    q: '네트와의 거리는 어느 정도가 이상적인가요?',
    a: '1.5m 전후가 가장 이상적입니다. 너무 가까우면 로브에 약해집니다.'
  },
  {
    q: '하드코트와 클레이코트에서 발리 차이가 있나요?',
    a: '하드코트는 반발이 빨라 짧게, 클레이는 여유를 두고 발리해야 합니다.'
  },
  {
    q: '복식에서 네트 플레이가 어렵습니다.',
    a: '시선과 신호를 미리 공유하세요. 네트 앞 존재감이 압박이 됩니다.'
  }
];

export default function TennisVolleyTechniqueGuidePage() {
  const title = '테니스 발리의 기술 — 네트 앞 1초 반응으로 결정되는 승부 | 감각·타이밍·밸런스로 완성하는 공격의 예술';
  const excerpt = '발리는 힘이 아니라 반응의 기술이다. 네트 앞 1초 안에 리듬을 잡는 순간, 승부는 이미 결정된다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
            발리 기술
          </Badge>
          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
            네트 플레이
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          발리는 테니스의 '순간 예술'입니다. 단 1초 안에 판단하고, 0.2초 안에 반응해야 하죠. 강한 샷을 칠 필요도, 긴 백스윙도 없습니다. 발리의 본질은 <strong>감각과 타이밍</strong>입니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/volley-technique-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 발리 기술 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-basics/volley.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 발리 가이드</a></li>
        </ul>
      </div>

      <section id="volley-essence-hit-not-block" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          발리의 본질 — '치지 말고 막는다'
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          발리는 스윙이 아닙니다. 공을 '치려는 순간' 이미 늦습니다. 라켓을 짧게 고정한 채 공의 힘을 이용해야 합니다.
        </p>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
          <p className="text-purple-800 dark:text-purple-200 mb-3">
            <strong>핵심 문장:</strong> "발리는 때리는 게 아니라, 받아주는 것이다."
          </p>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500 mb-6">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">기본 원리:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">백스윙 금지 (라켓 뒤로 빼지 않기).</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">라켓 헤드 위로 유지, 네트보다 약간 높게.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">손목 고정, 팔 전체로 방향 조정.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            <strong>과학적 근거:</strong> 반응속도 테스트 결과, 상급자의 라켓 이동 거리는 25cm 미만 — '짧은 동작이 빠른 반응'을 만듭니다.
          </p>
        </div>
      </section>

      <section id="volley-positioning-net-1-5m-golden-zone" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          발리 포지셔닝 — 네트와 1.5m 거리의 황금존
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          네트와 너무 가까우면 로브에 약하고, 너무 멀면 각이 사라집니다. 이상적인 위치는 네트에서 약 1.5m 떨어진 지점입니다.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500 mb-6">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">포지션 규칙:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">네트 중앙 기준 45도 각도로 시선 유지.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">상대의 백핸드 쪽을 먼저 커버.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">스플릿 스텝(양발 가볍게 튀기기)으로 반응 준비.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>💡 TIP:</strong> 라켓은 항상 몸 앞에, 라켓 헤드가 눈높이에 있도록 하세요.
          </p>
        </div>
      </section>

      <section id="forehand-vs-backhand-volley-comparison" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          포핸드 발리 vs 백핸드 발리 비교
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">구분</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">타점</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">라켓 각도</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">포핸드 발리</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">몸 앞 오른쪽</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">약간 닫힘(10도)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">강한 추진력, 빠른 리턴</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">백핸드 발리</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">몸 앞 왼쪽</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">약간 열림(5도)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">컨트롤 우수, 안정적 대응</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            <strong>💡 핵심:</strong> 포핸드 발리는 '공을 앞에서 잡는 느낌', 백핸드는 '공을 지탱하는 느낌'으로 접근하세요.
          </p>
        </div>
      </section>

      <section id="geo-volley-position-adjustment" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          GEO별 발리 포지션 조정법
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 빠름 → 네트 거리 1.8m 유지, 짧은 리액션 중심.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습도 높음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 무거움 → 라켓 각도 더 열기, 반발력 보완.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 튐 강함 → 스플릿 스텝 빈도 ↑.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람 영향 큼 → 몸 중심 낮추고, 라켓 그립 단단히 유지.</p>
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            GEO 환경을 고려하면 반응 속도보다 '공의 방향 예측'이 정확해집니다.
          </p>
        </div>
      </section>

      <section id="volley-sensory-training-routine-15min" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          발리 감각 훈련 루틴 (15분)
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">구간</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">시간</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">0~5분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">리액션 드릴</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">파트너가 랜덤 방향으로 공 던지기</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">5~10분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">짧은 임팩트 훈련</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">벽 앞 1m 거리에서 라켓 고정 발리</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">10~15분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">포지션 이동 발리</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">좌우 스텝 + 라켓 각도 유지</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>💡 훈련 팁:</strong> 라켓을 '잡는' 게 아니라 '받치는' 느낌으로. 반응 중심의 감각을 길러야 합니다.
          </p>
        </div>
      </section>

      <section id="mistake-correction-common-volley-errors" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-rose-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          실수 교정 — 초보가 자주 하는 발리 오류
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-rose-50 dark:bg-rose-950 p-4 rounded-lg">
            <h3 className="font-bold text-rose-800 dark:text-rose-200 mb-2">1️⃣ 공을 세게 침:</h3>
            <p className="text-rose-700 dark:text-rose-300 text-sm">반발 제어 불가 → 힘 빼고 라켓 고정.</p>
          </div>
          <div className="bg-rose-50 dark:bg-rose-950 p-4 rounded-lg">
            <h3 className="font-bold text-rose-800 dark:text-rose-200 mb-2">2️⃣ 손목 사용:</h3>
            <p className="text-rose-700 dark:text-rose-300 text-sm">방향 불안 → 손목 고정, 팔 전체로 조정.</p>
          </div>
          <div className="bg-rose-50 dark:bg-rose-950 p-4 rounded-lg">
            <h3 className="font-bold text-rose-800 dark:text-rose-200 mb-2">3️⃣ 스윙 과다:</h3>
            <p className="text-rose-700 dark:text-rose-300 text-sm">백스윙 시 반응 지연 → 라켓 이동 최소화.</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>보너스 팁:</strong> 발리 실수는 기술이 아니라 '욕심'에서 시작됩니다. 공을 이기려 하지 말고, 리듬을 받아들이세요.
          </p>
        </div>
      </section>

      <section id="volley-role-in-doubles-space-pressure" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          복식에서의 발리 역할 — 공간 압박의 기술
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          복식에서 네트 플레이어는 상대에게 심리적 압박을 줍니다. 발리로 직접 득점하지 않아도, 위치만으로 상대의 리턴 각도를 제한합니다.
        </p>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500 mb-6">
          <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3">전략 포인트:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-orange-800 dark:text-orange-200">네트 플레이어는 1구 후 전진, 파트너는 중앙 커버.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-orange-800 dark:text-orange-200">로브 대비 시 한 발 뒤로 물러서며 스텝 유지.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-orange-800 dark:text-orange-200">네트 앞에서 '존재감'이 곧 압박입니다.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>💡 심리전:</strong> 네트 앞의 시선 하나만으로도 상대의 리턴 선택이 달라집니다.
          </p>
        </div>
      </section>

      <section id="conclusion-volley-prediction-not-preparation" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 발리는 예측이 아니라 준비다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          발리는 순간의 기술이 아니라 <strong>준비의 기술</strong>입니다. 라켓을 짧게, 몸은 낮게, 마음은 가볍게. 네트 앞 1초를 지배하는 사람만이 포인트를 지배합니다. 발리는 결국 <strong>리듬과 감각의 예술</strong>입니다. '힘'보다 '타이밍'이 당신을 더 빠르게 만들어 줄 것입니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-doubles-teamwork-strategy">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 mb-2">
                  복식 전략
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 복식의 팀워크 전략 — 호흡·시선·커뮤니케이션으로 완성하는 듀오 플레이
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  복식은 기술이 아니라 호흡의 경기다. 시선, 커뮤니케이션, 포지션이 하나로 맞을 때 비로소 승리가 시작된다.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/tennis-mental-focus-recovery">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  멘탈 루틴
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 경기 중 멘탈 붕괴 방지법 — 실수 후 3초 회복 루틴의 힘
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  실수 후 3초 회복 루틴으로 멘탈을 회복하고 경기 흐름을 되찾는 법. 감정 제어·집중 루틴·GEO별 멘탈 관리 전략.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <CTA />

      <FAQ items={faqs} />
    </Article>
  );
}
