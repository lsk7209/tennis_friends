import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스에서 루틴의 힘 — 일관된 습관이 경기력을 만든다 | 반복이 만들어내는 집중과 자신감의 과학',
  description: '루틴은 단순한 습관이 아니다. 매일의 일관된 반복이 집중력, 안정감, 승부 감각을 만든다.',
  keywords: ['테니스 루틴', '습관', '집중력', '멘탈', '일관성', '자동화'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-power-of-routine',
  },
  openGraph: {
    title: '테니스에서 루틴의 힘 — 일관된 습관이 경기력을 만든다 | 반복이 만들어내는 집중과 자신감의 과학',
    description: '루틴은 단순한 습관이 아니다. 매일의 일관된 반복이 집중력, 안정감, 승부 감각을 만든다.',
    url: 'https://www.tennisfrens.com/blog/tennis-power-of-routine',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스에서 루틴의 힘 — 일관된 습관이 경기력을 만든다 | 반복이 만들어내는 집중과 자신감의 과학',
    description: '루틴은 단순한 습관이 아니다. 매일의 일관된 반복이 집중력, 안정감, 승부 감각을 만든다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'routine-automation-focus', text: '1. 루틴은 집중력의 자동화 장치다', depth: 2 },
  { id: 'pre-match-routine-mind-first', text: '2. 경기 전 루틴 — 몸보다 마음을 먼저 준비하라', depth: 2 },
  { id: 'point-to-point-routine-emotional-rhythm', text: '3. 포인트 간 루틴 — 흔들리지 않는 감정의 리듬', depth: 2 },
  { id: 'practice-routine-consistency-completes-skill', text: '4. 연습 루틴 — 꾸준함이 기술을 완성한다', depth: 2 },
  { id: 'geo-routine-maintenance-strategy', text: '5. GEO별 루틴 유지 전략', depth: 2 },
  { id: 'routine-breaking-pitfalls', text: '6. 루틴을 무너뜨리는 함정 3가지', depth: 2 },
  { id: 'routine-and-mental-stability-from-repetition', text: '7. 루틴과 멘탈 — 안정감은 반복에서 온다', depth: 2 },
  { id: 'conclusion-routine-creates-performance', text: '결론 — 루틴이 경기력을 만든다', depth: 2 },
];

const faqs = [
  {
    q: '루틴은 꼭 일정해야 하나요?',
    a: '네. 루틴은 뇌의 안정 회로를 만드는 장치입니다. 일정할수록 집중력이 높아집니다.'
  },
  {
    q: '루틴이 지루해질 때는 어떻게 하나요?',
    a: '작은 변화를 주되 구조는 유지하세요. 예를 들어 호흡 시간이나 루틴 워드를 바꾸면 됩니다.'
  },
  {
    q: '루틴을 언제 만들어야 하나요?',
    a: '연습과 경기 모두에서 동일한 루틴을 적용해야 합니다. 일관성이 핵심입니다.'
  },
  {
    q: '루틴이 멘탈에 왜 중요한가요?',
    a: '루틴은 감정을 자동으로 조절해 줍니다. 실수 후 빠르게 안정감을 회복할 수 있습니다.'
  },
  {
    q: 'GEO별 루틴 조정은 왜 필요한가요?',
    a: '기후와 코트 특성이 다르기 때문에 루틴 속도와 호흡 타이밍을 조절해야 합니다.'
  }
];

export default function TennisPowerOfRoutinePage() {
  const title = '테니스에서 루틴의 힘 — 일관된 습관이 경기력을 만든다 | 반복이 만들어내는 집중과 자신감의 과학';
  const excerpt = '루틴은 단순한 습관이 아니다. 매일의 일관된 반복이 집중력, 안정감, 승부 감각을 만든다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            루틴의 힘
          </Badge>
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
            일관성
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스는 기술의 스포츠처럼 보이지만, 본질은 '루틴의 스포츠'입니다. 루틴은 경기 중의 감정과 동작을 일관되게 유지시켜 주는 심리적 안전장치입니다. 포핸드, 서브, 풋워크가 조금 부족해도 루틴이 견고하면 경기 전체가 흔들리지 않습니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-routines/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 루틴 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-basics/routines.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 루틴 가이드</a></li>
        </ul>
      </div>

      <section id="routine-automation-focus" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          루틴은 집중력의 자동화 장치다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스는 매 포인트마다 상황이 달라집니다. 공의 스피드, 각도, 바람, 상대의 표정까지 매 순간 달라지죠. 그러나 루틴이 있으면 '변화 속에서도 일정한 리듬'을 유지할 수 있습니다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <p className="text-blue-800 dark:text-blue-200 mb-3"><strong>과학적 근거:</strong> 뇌는 익숙한 패턴에서 에너지를 절약합니다. 일정한 루틴이 형성되면 판단과 감정 소모가 줄어, 집중력이 오래 지속됩니다.</p>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500 mb-6">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">예시:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-green-800 dark:text-green-200">서브 전 라켓 2회 터치 → 호흡 1회 → 토스.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-green-800 dark:text-green-200">포인트 후 라켓 정리 → 시선 네트 중앙 → 복식호흡 3초.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>💡 핵심:</strong> 루틴은 생각을 줄이고 '몰입 상태(Flow)'를 유지하게 만드는 구조적 장치입니다.
          </p>
        </div>
      </section>

      <section id="pre-match-routine-mind-first" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          경기 전 루틴 — 몸보다 마음을 먼저 준비하라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          경기 전 루틴은 몸을 깨우는 동시에 '집중 모드'로 전환시키는 역할을 합니다.
        </p>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">5단계 워밍업 루틴:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-purple-800 dark:text-purple-200">5분 조깅 — 체온 상승.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-purple-800 dark:text-purple-200">스트레칭 — 어깨·햄스트링·손목 중심.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-purple-800 dark:text-purple-200">그림자 스윙 — 리듬 감각 복귀.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <strong className="text-purple-800 dark:text-purple-200">루틴 워드 반복 — "집중, 리듬, 자신감."</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              <div>
                <strong className="text-purple-800 dark:text-purple-200">시각 루틴 — 코트 구석을 바라보며 경기 흐름 상상.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>💡 TIP:</strong> 경기 시작 10분 전, 휴대폰을 멀리 두세요. 뇌의 주의력을 분산시키는 가장 큰 요인은 디지털 자극입니다.
          </p>
        </div>
      </section>

      <section id="point-to-point-routine-emotional-rhythm" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          포인트 간 루틴 — 흔들리지 않는 감정의 리듬
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          실수는 누구나 합니다. 하지만 루틴이 있는 사람은 실수 후 3초 만에 복귀합니다.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500 mb-6">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">포인트 간 루틴 예시:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">실수 인식 — "괜찮아."</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">복식호흡 — 3초 들이마시고 3초 내쉬기.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">루틴 워드 — "리듬 유지."</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">서브 포지션 세팅.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>💡 핵심:</strong> 루틴은 감정을 통제하는 도구가 아니라, 감정의 리듬을 재설정하는 도구입니다.
          </p>
        </div>
      </section>

      <section id="practice-routine-consistency-completes-skill" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          연습 루틴 — 꾸준함이 기술을 완성한다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          연습의 질은 '시간'보다 '일관성'으로 결정됩니다. 매일 같은 시간, 같은 흐름으로 연습하는 것이 효율을 극대화합니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">루틴 구간</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">목표</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">첫 10분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">워밍업</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">조깅, 스트레칭</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">중간 30분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">기술 훈련</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">포핸드·백핸드 100회</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">마지막 10분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">루틴 훈련</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">서브 루틴 반복, 호흡 통제</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            <strong>💡 보조 팁:</strong> 루틴 훈련은 스윙보다 짧지만, 경기력에는 더 큰 영향을 미칩니다.
          </p>
        </div>
      </section>

      <section id="geo-routine-maintenance-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          GEO별 루틴 유지 전략
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 빠름 → 루틴 속도 일정하게 유지.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습도 높음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 무거움 → 루틴에 '호흡 시간' 추가.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">탈수 빠름 → 루틴 중 수분 섭취 포함.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람 타이밍 → 시각 루틴 강화.</p>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            <strong>📍 GEO 팁:</strong> 환경이 달라도 루틴의 구조는 같아야 합니다. '일관된 흐름'이 외부 요인보다 강합니다.
          </p>
        </div>
      </section>

      <section id="routine-breaking-pitfalls" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          루틴을 무너뜨리는 함정 3가지
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">1️⃣ 과도한 변화:</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">새로운 루틴을 자주 바꾸면 뇌가 혼란을 느낍니다.</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">2️⃣ 결과 중심 사고:</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">승패에 따라 루틴을 버리면 일관성이 깨집니다.</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">3️⃣ 타인의 루틴 모방:</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">자신에게 맞지 않는 루틴은 스트레스 요인이 됩니다.</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>핵심 문장:</strong> 루틴은 정답이 아니라 '나만의 질서'입니다.
          </p>
        </div>
      </section>

      <section id="routine-and-mental-stability-from-repetition" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          루틴과 멘탈 — 안정감은 반복에서 온다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          루틴은 멘탈의 안전벨트입니다. 실수 후 흔들리는 감정을 '예측 가능한 동작'으로 다시 고정합니다. 이 반복이 신경계에 안정감을 줍니다. 루틴이 강할수록 자신감이 회복되는 속도가 빨라집니다.
        </p>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>실전 팁:</strong> 루틴을 '감정 리셋 장치'로 인식하세요. 경기 중 위기 상황일수록 루틴의 진가가 발휘됩니다.
          </p>
        </div>
      </section>

      <section id="conclusion-routine-creates-performance" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 루틴이 경기력을 만든다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스의 진짜 실력은 기술이 아니라 '일관된 습관'입니다. 루틴이 안정감을 만들고, 안정감이 집중력을 낳습니다. 하루 10분의 루틴이 일 년의 성장 속도를 바꿉니다. 결국 테니스는 반복의 예술이며, 루틴이 바로 그 예술의 핵심입니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-beginner-30day-growth-plan">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  30일 플랜
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 초보자의 30일 성장 루틴 — 실전 감각을 만드는 훈련 플랜
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  초보자도 30일이면 실전 감각을 만들 수 있다. 일일 루틴과 훈련 플랜으로 '처음'을 '자신감'으로 바꾼다.
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

      <FAQ items={faqs} />
    </Article>
  );
}
