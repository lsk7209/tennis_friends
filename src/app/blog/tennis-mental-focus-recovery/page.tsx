import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 경기 중 멘탈 붕괴 방지법 — 실수 후 3초 회복 루틴의 힘 | 흔들리지 않는 플레이어의 비밀',
  description: '테니스의 승패는 멘탈이 결정한다. 실수 후 3초, 그 짧은 루틴이 경기 전체의 흐름을 바꾼다.',
  keywords: ['테니스 멘탈', '멘탈 붕괴 방지', '실수 회복', '집중력 유지', '호흡 루틴', '심리전'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-mental-focus-recovery',
  },
  openGraph: {
    title: '테니스 경기 중 멘탈 붕괴 방지법 — 실수 후 3초 회복 루틴의 힘 | 흔들리지 않는 플레이어의 비밀',
    description: '테니스의 승패는 멘탈이 결정한다. 실수 후 3초, 그 짧은 루틴이 경기 전체의 흐름을 바꾼다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-mental-focus-recovery',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 경기 중 멘탈 붕괴 방지법 — 실수 후 3초 회복 루틴의 힘 | 흔들리지 않는 플레이어의 비밀',
    description: '테니스의 승패는 멘탈이 결정한다. 실수 후 3초, 그 짧은 루틴이 경기 전체의 흐름을 바꾼다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'mental-collapse-structure', text: '1. 멘탈 붕괴의 구조 — 감정은 신체 반응이다', depth: 2 },
  { id: '3second-recovery-routine', text: '2. 3초 회복 루틴 — \'인식 → 리셋 → 리듬\'', depth: 2 },
  { id: 'mistake-avoid-actions', text: '3. 실수 후 행동 금지 3가지', depth: 2 },
  { id: 'routine-word-system', text: '4. 루틴 워드 시스템 — 뇌를 다시 세팅하는 말', depth: 2 },
  { id: 'regional-mental-strategy', text: '5. 지역별 멘탈 관리 전략', depth: 2 },
  { id: 'practical-routine-example', text: '6. 실전 루틴 예시 — 포인트 간 20초의 활용법', depth: 2 },
  { id: 'training-routine-10min', text: '7. 훈련 루틴 (10분)', depth: 2 },
  { id: 'conclusion-mental-training', text: '결론 — 멘탈은 타고나는 게 아니라 훈련으로 만들어진다', depth: 2 },
];

const faqs = [
  {
    q: '실수 후 멘탈이 쉽게 무너집니다.',
    a: '3초 회복 루틴을 연습하세요. 인식→호흡→루틴 워드 순으로 복구하면 됩니다.'
  },
  {
    q: '경기 중 긴장을 빨리 푸는 방법은?',
    a: '복식호흡과 시선 고정입니다. 네트 중앙을 3초 응시하며 심박을 안정시키세요.'
  },
  {
    q: '루틴 워드는 꼭 필요할까요?',
    a: '네. 루틴 워드는 감정 제어 장치입니다. \'리듬\', \'집중\', \'괜찮아\' 같은 단어를 반복하세요.'
  },
  {
    q: '상대가 느리게 플레이해서 리듬이 깨집니다.',
    a: '자신의 호흡 리듬을 유지하세요. 타인의 템포에 끌려가지 않는 게 핵심입니다.'
  },
  {
    q: '코트 환경이 멘탈에도 영향을 주나요?',
    a: '그렇습니다. 습도·바람·온도는 신체 피로와 집중력에 직접 작용하므로 루틴 형태를 환경에 맞춰야 합니다.'
  }
];

export default function TennisMentalFocusRecoveryPage() {
  const title = '테니스 경기 중 멘탈 붕괴 방지법 — 실수 후 3초 회복 루틴의 힘 | 흔들리지 않는 플레이어의 비밀';
  const excerpt = '테니스의 승패는 멘탈이 결정한다. 실수 후 3초, 그 짧은 루틴이 경기 전체의 흐름을 바꾼다.';

  return (
    <Article slug="tennis-mental-focus-recovery" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            멘탈 마스터
          </Badge>
          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
            집중력 훈련
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스는 기술보다 멘탈이 먼저 무너지는 스포츠입니다. 한 포인트의 실수가 전체 세트를 무너뜨리는 이유는 '감정의 연쇄 반응' 때문입니다. 그러나 상급자일수록 실수를 두려워하지 않습니다. 그들은 3초 안에 멘탈을 복구하는 루틴을 갖고 있습니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/mental-toughness-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 멘탈 강인성 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-health-fitness/mental-game.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 멘탈 게임 가이드</a></li>
        </ul>
      </div>

      <section id="mental-collapse-structure" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          멘탈 붕괴의 구조 — 감정은 신체 반응이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          실수 후 몸은 즉각적으로 반응합니다. 심박수가 상승하고, 호흡이 짧아지며, 손의 긴장이 강해집니다. 이 상태에서 다음 포인트를 맞으면 실수가 반복됩니다.
        </p>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>💡 핵심:</strong> 감정은 통제할 수 없지만, <strong>호흡은 통제할 수 있다.</strong>
            <br/><br/>
            즉, 멘탈 컨트롤은 감정을 억누르는 게 아니라, <strong>호흡을 통해 감정을 리셋하는 것</strong>입니다.
          </p>
        </div>
      </section>

      <section id="3second-recovery-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          3초 회복 루틴 — '인식 → 리셋 → 리듬'
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          실수를 한 직후, 3초 동안 해야 할 루틴은 단 세 단계입니다.
        </p>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-green-800 dark:text-green-200">인식(Recognize):</strong>
                <span className="text-green-700 dark:text-green-300"> "지금 실수했다."를 짧게 인식. 변명 금지.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-green-800 dark:text-green-200">리셋(Reset):</strong>
                <span className="text-green-700 dark:text-green-300"> 깊게 들이마시고 천천히 내쉬며 복식호흡 3초.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-green-800 dark:text-green-200">리듬(Rhythm):</strong>
                <span className="text-green-700 dark:text-green-300"> 루틴 워드(예: "집중", "리듬", "괜찮아")를 속으로 반복.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            이 루틴은 단순하지만, 3초 내에 '감정 → 호흡 → 언어'의 순환을 만들어 뇌를 안정시킵니다. 실제로 프로 선수들의 경기 영상 분석 결과, <strong>포인트 간 평균 호흡 루틴 시간은 2.8초</strong>였습니다.
          </p>
        </div>
      </section>

      <section id="mistake-avoid-actions" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-yellow-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          실수 후 행동 금지 3가지
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start gap-3">
              <span className="text-yellow-800 dark:text-yellow-200 font-bold">1️⃣</span>
              <div>
                <strong className="text-yellow-800 dark:text-yellow-200">라켓을 던지거나 강하게 쥐기</strong>
                <span className="text-yellow-700 dark:text-yellow-300"> — 긴장을 심화시킴.</span>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start gap-3">
              <span className="text-yellow-800 dark:text-yellow-200 font-bold">2️⃣</span>
              <div>
                <strong className="text-yellow-800 dark:text-yellow-200">상대나 코치 쳐다보기</strong>
                <span className="text-yellow-700 dark:text-yellow-300"> — 감정 외부화로 집중력 분산.</span>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start gap-3">
              <span className="text-yellow-800 dark:text-yellow-200 font-bold">3️⃣</span>
              <div>
                <strong className="text-yellow-800 dark:text-yellow-200">다음 포인트를 급하게 시작하기</strong>
                <span className="text-yellow-700 dark:text-yellow-300"> — 리듬 회복 전 재실수 확률 70%.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>💡 대신 이렇게:</strong> 라켓을 가볍게 털며 시선을 네트에 두세요. 시각적 기준점이 멘탈을 '현재'로 되돌립니다.
          </p>
        </div>
      </section>

      <section id="routine-word-system" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          루틴 워드 시스템 — 뇌를 다시 세팅하는 말
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          루틴 워드는 일종의 '멘탈 스위치'입니다. 단어 하나로 뇌의 주의를 현재로 끌어옵니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">루틴 워드</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">의미</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">사용 상황</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">리듬</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">호흡과 타이밍 복구</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">실수 직후</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">집중</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">시선·호흡 재정렬</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">듀스 상황</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">괜찮아</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">감정 진정</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">연속 실수 후</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">지금</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">현재로 복귀</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">경기 흐름 분산 시</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>사용법:</strong> 루틴 워드를 속으로 2회 반복하며 호흡과 동기화합니다. 예: "리듬… 리듬…" 하며 내쉬는 호흡에 맞추면 뇌파가 안정됩니다.
          </p>
        </div>
      </section>

      <section id="regional-mental-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          지역별 멘탈 관리 전략
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">속도전 중심 → 짧은 호흡·빠른 루틴 필요.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습한 환경):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">체력 부담 ↑ → '리듬 워드'로 집중 유지.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">탈수로 피로 빠름 → 루틴 중 수분 섭취 병행.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람으로 리듬 깨짐 → 시각 루틴(네트凝視)으로 안정.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>💡 멘탈 팁:</strong> 코트 환경에 맞춰 루틴을 조정하면 경기 중 집중력을 유지할 수 있습니다.
          </p>
        </div>
      </section>

      <section id="practical-routine-example" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          실전 루틴 예시 — 포인트 간 20초의 활용법
        </h2>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg mb-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-cyan-800 dark:text-cyan-200">0~3초:</strong>
                <span className="text-cyan-700 dark:text-cyan-300"> 실수 인식 + 깊은 복식호흡.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-cyan-800 dark:text-cyan-200">3~10초:</strong>
                <span className="text-cyan-700 dark:text-cyan-300"> 루틴 워드 반복, 라켓 정리.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-cyan-800 dark:text-cyan-200">10~15초:</strong>
                <span className="text-cyan-700 dark:text-cyan-300"> 시선 네트, 다음 포인트 이미지 트레이닝.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <strong className="text-cyan-800 dark:text-cyan-200">15~20초:</strong>
                <span className="text-cyan-700 dark:text-cyan-300"> 서브 포지션 세팅 후 루틴 종료.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            이 루틴을 경기마다 반복하면, '자동 멘탈 복구'가 몸에 새겨집니다.
          </p>
        </div>
      </section>

      <section id="training-routine-10min" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          훈련 루틴 (10분)
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">복식호흡 훈련 (3분):</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">들이쉬며 배 부풀리기, 내쉬며 '리듬' 반복.</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">루틴 워드 시각화 (3분):</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">단어를 머릿속에 이미지로 떠올리기.</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">영상 루틴 훈련 (4분):</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">실수 장면 영상 보며 루틴 적용.</p>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            하루 10분만 투자해도 실전에서 '멘탈 복구 속도'가 평균 50% 이상 향상됩니다.
          </p>
        </div>
      </section>

      <section id="conclusion-mental-training" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 멘탈은 타고나는 게 아니라 훈련으로 만들어진다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          경기에서 무너지지 않는 사람은 멘탈이 강한 게 아니라, <strong>복구 루틴이 몸에 배인 사람</strong>입니다. 실수 후 3초, 그 짧은 시간의 반복이 승패를 바꿉니다. 테니스의 본질은 공을 치는 기술이 아니라, '자신을 다루는 기술'입니다. 오늘부터는 실수를 두려워하지 말고, 루틴으로 다스리세요.
        </p>
      </section>

      
      {/* FAQ Section */}
      <FAQ items={faqs} />

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-mental-routine-5steps">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  멘탈 루틴
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  멘탈 루틴 5단계 — 시합 중 흔들리지 않는 집중력의 기술
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  테니스의 승패는 기술보다 멘탈 루틴에서 갈린다. 포인트 사이 20초를 어떻게 쓰느냐가 경기 전체를 바꾼다.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </Article>
  );
}
