import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 풋워크의 과학 — 발의 리듬이 경기의 리듬을 만든다 | 공보다 빠르게 움직이는 발의 기술',
  description: '풋워크는 테니스의 심장이다. 발의 리듬이 곧 경기의 리듬이며, 좋은 스윙은 좋은 발에서 시작된다.',
  keywords: ['테니스 풋워크', '발 리듬', '체중 이동', '스텝', '반응 속도', '균형'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-footwork-science',
  },
  openGraph: {
    title: '테니스 풋워크의 과학 — 발의 리듬이 경기의 리듬을 만든다 | 공보다 빠르게 움직이는 발의 기술',
    description: '풋워크는 테니스의 심장이다. 발의 리듬이 곧 경기의 리듬이며, 좋은 스윙은 좋은 발에서 시작된다.',
    url: 'https://www.tennisfrens.com/blog/tennis-footwork-science',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 풋워크의 과학 — 발의 리듬이 경기의 리듬을 만든다 | 공보다 빠르게 움직이는 발의 기술',
    description: '풋워크는 테니스의 심장이다. 발의 리듬이 곧 경기의 리듬이며, 좋은 스윙은 좋은 발에서 시작된다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'footwork-essence-rhythm-not-ball', text: '1. 풋워크의 본질 — 공이 아니라 \'리듬\'을 잡아라', depth: 2 },
  { id: 'basic-footwork-pattern-4steps', text: '2. 기본 풋워크 패턴 4단계', depth: 2 },
  { id: 'geo-footwork-adjustment', text: '3. GEO별 풋워크 조정법', depth: 2 },
  { id: 'weight-transfer-science-center-moves-first', text: '4. 체중 이동의 과학 — 중심이 공보다 먼저 움직인다', depth: 2 },
  { id: 'training-routine-15min-footwork-basics', text: '5. 훈련 루틴 — 15분 풋워크 기본기', depth: 2 },
  { id: 'common-footwork-errors-3types', text: '6. 흔한 풋워크 오류 3가지', depth: 2 },
  { id: 'footwork-and-mental-rhythm-starts-from-mind', text: '7. 풋워크와 멘탈 — 리듬은 마음에서 시작된다', depth: 2 },
  { id: 'conclusion-tennis-starts-ends-with-feet', text: '결론 — 테니스는 발로 시작해 발로 끝난다', depth: 2 },
];

const faqs = [
  {
    q: '풋워크가 자꾸 늦어요.',
    a: '스플릿 스텝 타이밍을 조정하세요. 상대 임팩트 순간에 가볍게 점프하는 것이 핵심입니다.'
  },
  {
    q: '하드코트에서 미끄러워요.',
    a: '발뒤꿈치 착지를 피하고, 발앞쪽으로 중심을 유지하세요.'
  },
  {
    q: '피로 때문에 스텝이 느려집니다.',
    a: '세트 중간에 3초 복식호흡으로 리듬을 재조정하세요.'
  },
  {
    q: '풋워크 연습은 얼마나 해야 하나요?',
    a: '하루 15분, 일주일 3회만 해도 반응속도가 눈에 띄게 향상됩니다.'
  },
  {
    q: 'GEO 환경이 풋워크에 왜 영향을 주나요?',
    a: '코트 재질과 습도는 마찰력에 영향을 줍니다. 환경에 맞춰 발의 폭과 스텝 빈도를 조정해야 합니다.'
  }
];

export default function TennisFootworkSciencePage() {
  const title = '테니스 풋워크의 과학 — 발의 리듬이 경기의 리듬을 만든다 | 공보다 빠르게 움직이는 발의 기술';
  const excerpt = '풋워크는 테니스의 심장이다. 발의 리듬이 곧 경기의 리듬이며, 좋은 스윙은 좋은 발에서 시작된다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-gray-50 to-teal-50 dark:from-gray-950 dark:to-teal-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
            풋워크 과학
          </Badge>
          <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
            발의 리듬
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스에서 모든 기술의 시작은 '발'입니다. 완벽한 스윙도 나쁜 풋워크 앞에서는 무의미합니다. 공보다 빨리 움직이는 발, 일정한 리듬으로 유지되는 균형이 테니스의 모든 기술을 가능하게 합니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/footwork-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 풋워크 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-basics/footwork.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 풋워크 가이드</a></li>
        </ul>
      </div>

      <section id="footwork-essence-rhythm-not-ball" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-gray-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          풋워크의 본질 — 공이 아니라 '리듬'을 잡아라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          풋워크의 목적은 공에 닿는 것이 아니라, <strong>공을 맞이할 준비를 하는 것</strong>입니다. 좋은 풋워크는 스윙이 아니라 '포지션'을 완성합니다.
        </p>

        <div className="bg-gray-50 dark:bg-gray-950 p-4 rounded-lg border-l-4 border-gray-500 mb-6">
          <p className="text-gray-800 dark:text-gray-200 mb-3">
            <strong>핵심 문장:</strong> "좋은 발은 공을 쫓지 않고, 공을 기다린다."
          </p>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500 mb-6">
          <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-3">기초 원칙:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">스플릿 스텝(양발 가볍게 튀기기)으로 리듬 유지.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">체중은 항상 발앞쪽(앞꿈치)에.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">공이 바운드되기 전 0.2초에 이미 중심이 이동돼 있어야 합니다.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            <strong>생체역학 연구:</strong> 풋워크가 빠른 선수일수록 반응시간이 평균 18% 짧고, 스윙 타점의 오차가 30% 줄어듭니다.
          </p>
        </div>
      </section>

      <section id="basic-footwork-pattern-4steps" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          기본 풋워크 패턴 4단계
        </h2>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500 mb-6">
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">스플릿 스텝:</strong> 상대 임팩트 순간, 양발로 가볍게 점프.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">리드 스텝:</strong> 공 방향으로 중심 이동.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">어프로치 스텝:</strong> 라켓 준비와 동시 이동.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">리커버리 스텝:</strong> 샷 후 즉시 중심 복귀.
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">단계</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">목적</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">핵심 포인트</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">1</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">반응 준비</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">타이밍 인식</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">방향 결정</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">균형 유지</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">3</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">타점 조정</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">발-어깨 라인 정렬</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">4</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">다음 포인트 준비</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">피로 최소화</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 dark:bg-gray-950 p-4 rounded-lg border-l-4 border-gray-500">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            <strong>💡 훈련 팁:</strong> 풋워크는 속도보다 '일정한 간격'이 더 중요합니다.
          </p>
        </div>
      </section>

      <section id="geo-footwork-adjustment" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          GEO별 풋워크 조정법
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 빠름 → 짧은 스텝으로 리듬 빠르게.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습한 환경):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">코트 미끄러움 → 중심 낮게, 미끄러짐 대비.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 튐 강함 → 스텝 폭 넓게, 타점 뒤로 조정.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">불규칙 바운드 → 발 가볍게, 방향 전환 빈도 ↑.</p>
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            <strong>📍 GEO 팁:</strong> GEO 환경은 발의 마찰력과 리듬감에 직접적인 영향을 미칩니다.
          </p>
        </div>
      </section>

      <section id="weight-transfer-science-center-moves-first" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          체중 이동의 과학 — 중심이 공보다 먼저 움직인다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          풋워크의 핵심은 '발이 아니라 몸의 무게 중심'입니다. 체중이 먼저 움직여야 발이 자연스럽게 따라옵니다.
        </p>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500 mb-6">
          <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-3">루틴:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-pink-800 dark:text-pink-200">공의 방향 예측 → 무릎 굽히기.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-pink-800 dark:text-pink-200">몸 전체를 목표 방향으로 살짝 기울이기.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-pink-800 dark:text-pink-200">체중이 이동한 뒤 발이 따라간다.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>💡 핵심:</strong> 체중 이동이 선행되면 스윙의 타점이 자동으로 안정됩니다.
          </p>
        </div>
      </section>

      <section id="training-routine-15min-footwork-basics" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          훈련 루틴 — 15분 풋워크 기본기
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">시간</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">루틴</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">목표</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">0~5분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">사이드 스텝 30회 × 3세트</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">방향 전환 속도 향상</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">5~10분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">스플릿-리드 스텝 반복</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">타이밍 감각 훈련</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">10~15분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">리커버리 드릴</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">중심 복귀 속도 향상</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500 mb-4">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>보조 루틴:</strong> 미니 콘 4개를 X자 형태로 배치, 리듬에 맞춰 점프 이동.
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>결과:</strong> 2주만에 이동 반응속도가 체감 20% 향상됩니다.
          </p>
        </div>
      </section>

      <section id="common-footwork-errors-3types" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          흔한 풋워크 오류 3가지
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-rose-50 dark:bg-rose-950 p-4 rounded-lg">
            <h3 className="font-bold text-rose-800 dark:text-rose-200 mb-2">1️⃣ 발뒤꿈치 착지:</h3>
            <p className="text-rose-700 dark:text-rose-300 text-sm">반응 늦고 중심 불안.</p>
          </div>
          <div className="bg-rose-50 dark:bg-rose-950 p-4 rounded-lg">
            <h3 className="font-bold text-rose-800 dark:text-rose-200 mb-2">2️⃣ 스윙 후 멈춤:</h3>
            <p className="text-rose-700 dark:text-rose-300 text-sm">복귀 지연, 다음 공 대응 불가.</p>
          </div>
          <div className="bg-rose-50 dark:bg-rose-950 p-4 rounded-lg">
            <h3 className="font-bold text-rose-800 dark:text-rose-200 mb-2">3️⃣ 리듬 붕괴:</h3>
            <p className="text-rose-700 dark:text-rose-300 text-sm">급한 발동작 → 공보다 앞서가거나 늦음.</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>해결법:</strong> 스윙 후 즉시 '리커버리 스텝'을 몸에 새기세요. 공이 아니라 '중심 복귀'를 의식해야 합니다.
          </p>
        </div>
      </section>

      <section id="footwork-and-mental-rhythm-starts-from-mind" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          풋워크와 멘탈 — 리듬은 마음에서 시작된다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          몸의 리듬은 마음의 리듬과 연결됩니다. 감정이 급하면 발이 빨라지고, 긴장하면 발이 무거워집니다. 풋워크의 완성은 <strong>멘탈의 안정감</strong>에서 시작됩니다.
        </p>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500 mb-4">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>루틴 워드:</strong> "가볍게, 일정하게."
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            호흡과 함께 이 단어를 반복하면 발의 긴장이 풀리고 리듬이 일정해집니다.
          </p>
        </div>
      </section>

      <section id="conclusion-tennis-starts-ends-with-feet" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 테니스는 발로 시작해 발로 끝난다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          공보다 먼저 움직이는 발, 일정한 리듬으로 흐르는 스텝, 중심을 앞세운 체중 이동. 이 세 가지가 완성될 때 진짜 테니스가 시작됩니다. 스윙이 아니라 풋워크가 경기의 흐름을 만듭니다. 결국 테니스의 리듬은 <strong>발의 리듬</strong>입니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-footwork-balance-training-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  밸런스 훈련
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 풋워크 밸런스, 빠름보다 '안정'이 먼저다
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  공을 쫓는 속도보다 중요한 건 중심을 잃지 않는 안정감이다. 프로 선수처럼 밸런스를 유지하는 하체 리듬과 스텝 훈련.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/tennis-forehand-impact-timing-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  타이밍 기술
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  포핸드 임팩트, 0.1초가 승부를 가른다
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  포핸드는 테니스의 심장이다. 스윙 속도보다 중요한 건 임팩트 타이밍과 몸의 회전 리듬. 이 0.1초의 차이가 경기 전체를 바꾼다.
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
