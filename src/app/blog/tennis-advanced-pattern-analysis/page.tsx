import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 상급자의 경기 읽기 — 상대 패턴 분석과 카운터 전략 | 흐름을 읽고 이기는 플레이의 심리학',
  description: '상급자는 공을 치지 않는다, 상대를 읽는다. 패턴 분석과 카운터 전략이 진짜 승부의 기술이다.',
  keywords: ['테니스 전략', '상급자', '패턴 분석', '카운터 전략', '심리전', '경기 읽기'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-advanced-pattern-analysis',
  },
  openGraph: {
    title: '테니스 상급자의 경기 읽기 — 상대 패턴 분석과 카운터 전략 | 흐름을 읽고 이기는 플레이의 심리학',
    description: '상급자는 공을 치지 않는다, 상대를 읽는다. 패턴 분석과 카운터 전략이 진짜 승부의 기술이다.',
    url: 'https://www.tennisfrens.com/blog/tennis-advanced-pattern-analysis',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 상급자의 경기 읽기 — 상대 패턴 분석과 카운터 전략 | 흐름을 읽고 이기는 플레이의 심리학',
    description: '상급자는 공을 치지 않는다, 상대를 읽는다. 패턴 분석과 카운터 전략이 진짜 승부의 기술이다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'pattern-analysis-start', text: '1. 패턴 분석의 시작 — 공이 아니라 \'사람\'을 본다', depth: 2 },
  { id: 'early-match-reading', text: '2. 경기 초반 — 10포인트 안에 상대의 언어를 해독하라', depth: 2 },
  { id: 'three-pattern-types', text: '3. 패턴 유형 3가지와 대응법', depth: 2 },
  { id: 'counter-strategy-essence', text: '4. 카운터 전략의 본질 — 타이밍의 반 박자', depth: 2 },
  { id: 'geo-match-analysis', text: '5. GEO별 경기 분석 포인트', depth: 2 },
  { id: 'psychological-warfare', text: '6. 심리전 — \'예상\'을 깨는 예술', depth: 2 },
  { id: 'data-based-analysis', text: '7. 데이터 기반 분석 — 메모와 영상', depth: 2 },
  { id: 'conclusion-advanced-rhythm-control', text: '결론 — 상급자는 상대의 리듬을 조종하는 사람이다', depth: 2 },
];

const faqs = [
  {
    q: '상대의 패턴을 빨리 파악하려면?',
    a: '초반 10포인트를 관찰하세요. 토스, 시선, 타점 반복에서 패턴이 드러납니다.'
  },
  {
    q: '카운터 타이밍이 어렵습니다.',
    a: '상대 스윙 직전이 아니라 체중 이동 시점을 노리세요. 반 박자 늦게 반응하는 것이 핵심입니다.'
  },
  {
    q: '심리전은 어떻게 연습하나요?',
    a: '반복 패턴을 일부러 바꾸는 연습을 하세요. 같은 상황에서 다른 선택을 하는 습관이 중요합니다.'
  },
  {
    q: '경기 중 메모는 실제로 도움이 되나요?',
    a: '매우 유용합니다. 감정적 판단을 줄이고, 데이터 기반 전략으로 전환할 수 있습니다.'
  },
  {
    q: 'GEO 환경이 패턴 분석에 영향을 주나요?',
    a: '그렇습니다. 코트 반발력과 습도는 공의 속도·바운스를 바꾸어 상대 리듬을 드러내게 만듭니다.'
  }
];

export default function TennisAdvancedPatternAnalysisPage() {
  const title = '테니스 상급자의 경기 읽기 — 상대 패턴 분석과 카운터 전략 | 흐름을 읽고 이기는 플레이의 심리학';
  const excerpt = '상급자는 공을 치지 않는다, 상대를 읽는다. 패턴 분석과 카운터 전략이 진짜 승부의 기술이다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950 dark:to-slate-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
            상급자 전략
          </Badge>
          <Badge className="bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300">
            패턴 분석
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          상급자 경기의 차이는 파워나 스피드가 아닙니다. 진짜 차이는 '읽기'의 수준입니다. 상대의 습관, 타이밍, 시선, 포지션을 읽는 능력이 상급자를 결정합니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-strategy-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 전략 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-strategy.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 테니스 전략 가이드</a></li>
        </ul>
      </div>

      <section id="pattern-analysis-start" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-gray-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          패턴 분석의 시작 — 공이 아니라 '사람'을 본다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          중급자는 공을 보고, 상급자는 사람을 봅니다. 포핸드가 강한 상대라도 언제, 어떤 상황에서 그 샷이 나오는지를 알아야 합니다.
        </p>

        <div className="bg-gray-50 dark:bg-gray-950 p-4 rounded-lg border-l-4 border-gray-500 mb-6">
          <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3">분석 포인트:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-gray-800 dark:text-gray-200">서브 루틴 — 토스 높이와 방향이 일정한가?</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-gray-800 dark:text-gray-200">포핸드 시선 — 백핸드로 유도될 때 움직임이 느린가?</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-gray-800 dark:text-gray-200">리턴 타이밍 — 언제 체중이 이동되는가?</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <strong className="text-gray-800 dark:text-gray-200">위기 상황 — 듀스·브레이크포인트 때의 습관은?</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border-l-4 border-slate-500">
          <p className="text-slate-800 dark:text-slate-200 text-sm">
            <strong>💡 핵심:</strong> '샷의 질'보다 '샷의 예측 가능성'을 관찰하라.
          </p>
        </div>
      </section>

      <section id="early-match-reading" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-slate-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          경기 초반 — 10포인트 안에 상대의 언어를 해독하라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          경기 초반 10포인트는 데이터 수집 구간입니다.
        </p>

        <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border-l-4 border-slate-500 mb-6">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-3">관찰 루틴:</h3>
          <ul className="text-slate-700 dark:text-slate-300 space-y-1">
            <li>• 첫 3포인트: 리턴 타이밍 확인.</li>
            <li>• 다음 4포인트: 포핸드·백핸드 분포 체크.</li>
            <li>• 마지막 3포인트: 위기 상황 반응 패턴 확인.</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>💡 팁:</strong> 경기 초반엔 점수를 따는 것보다 <strong>정보를 얻는 것</strong>이 더 중요합니다.
          </p>
        </div>
      </section>

      <section id="three-pattern-types" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          패턴 유형 3가지와 대응법
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">상대 유형</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">카운터 전략</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">루틴형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">경기 루틴이 일정</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">리듬 변화로 혼란 유도</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">감각형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">상황 따라 스윙 다양</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">안정적 리듬으로 제압</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">분석형</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">상대 움직임 예측</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">페이크와 슬라이스로 리듬 붕괴</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>실전 팁:</strong> 루틴형은 초반 강하지만, 패턴이 드러나면 약합니다. 감각형은 변화가 많지만, 심리적으로 불안정합니다.
          </p>
        </div>
      </section>

      <section id="counter-strategy-essence" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          카운터 전략의 본질 — 타이밍의 반 박자
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          카운터는 힘으로 이기는 것이 아니라, 타이밍으로 이깁니다. 상대의 타점보다 반 박자 빠르게 준비하고, 반 박자 늦게 임팩트하면 상대의 리듬을 깨뜨릴 수 있습니다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">3단계 카운터 루틴:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-blue-800 dark:text-blue-200">상대의 준비 동작 관찰 →</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-blue-800 dark:text-blue-200">예측되는 방향 2곳 설정 →</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-blue-800 dark:text-blue-200">중심 이동으로 대비.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>💡 핵심:</strong> 예측은 '감'이 아니라 '패턴 확률'입니다.
          </p>
        </div>
      </section>

      <section id="geo-match-analysis" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          GEO별 경기 분석 포인트
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 빠름 → 리턴 타이밍 관찰, 템포 조절.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습한 환경):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 무거움 → 백핸드 중심 상대 많음, 드롭샷 유효.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 튐 강함 → 베이스라인 후방 플레이어 관찰.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람 타이밍 계산 → 상대 토스 흔들림 이용.</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>📍 GEO 팁:</strong> 환경(GEO)은 경기 심리에 직접 작용합니다. 바람, 온도, 반발력에 따라 상대의 리듬이 흔들리기 때문에, 이를 역이용하는 것이 상급자의 전략입니다.
          </p>
        </div>
      </section>

      <section id="psychological-warfare" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          심리전 — '예상'을 깨는 예술
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스는 심리의 게임입니다. 예측 가능한 선수는 강해도 이기기 쉽습니다.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500 mb-6">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">카운터 심리 기술:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">같은 상황에서 다른 선택 (예: 듀스 상황 — 이번엔 드롭샷)</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">일부러 짧은 리턴으로 유혹 후 로브 카운터.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">서브 전 시선 변화로 상대 혼란 유도.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>프로 선수들의 비밀:</strong> 상대의 패턴을 '깨는 타이밍'은 경기당 평균 3~4회뿐입니다. 그러나 그 순간이 승부를 결정합니다.
          </p>
        </div>
      </section>

      <section id="data-based-analysis" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          데이터 기반 분석 — 메모와 영상
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">경기 중 포인트 분포 기록:</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">(백핸드 득점 비율 등)</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">스마트워치로 심박수·집중 구간 확인:</h3>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">경기 후 영상에서 '상대의 전진 타이밍' 분석:</h3>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            <strong>💡 팁:</strong> 메모를 습관화하면 '감정의 경기'가 아니라 '데이터의 경기'를 하게 됩니다.
          </p>
        </div>
      </section>

      <section id="conclusion-advanced-rhythm-control" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 상급자는 상대의 리듬을 조종하는 사람이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          상급자는 자신이 아니라 상대를 중심으로 경기를 설계합니다. 패턴을 읽고, 리듬을 흔들며, 카운터로 흐름을 전복시키는 것 — 이것이 진짜 전략의 예술입니다. 테니스의 마지막 단계는 <strong>공을 치는 기술이 아니라 읽는 기술</strong>입니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-intermediate-match-strategy">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 mb-2">
                  전략적 사고
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 중급자의 경기 운영법 — 포인트 설계와 리듬 조절의 기술
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  중급자에게 필요한 건 기술이 아니라 '흐름의 감각'이다. 포인트 설계와 리듬 조절이 승부를 만든다.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/tennis-etiquette-and-manners">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-stone-100 text-stone-700 dark:bg-stone-900 dark:text-stone-300 mb-2">
                  코트 매너
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 코트 예절과 매너 — 진짜 실력자는 태도에서 드러난다
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  테니스의 품격은 스윙보다 태도에서 드러난다. 매너 있는 플레이가 실력을 완성한다.
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
