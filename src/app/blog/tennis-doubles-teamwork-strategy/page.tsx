import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 복식의 팀워크 전략 — 호흡·시선·커뮤니케이션으로 완성하는 듀오 플레이 | 두 사람이 하나처럼 움직이는 법',
  description: '복식은 기술이 아니라 호흡의 경기다. 시선, 커뮤니케이션, 포지션이 하나로 맞을 때 비로소 승리가 시작된다.',
  keywords: ['테니스 복식', '팀워크', '커뮤니케이션', '시선', '포지셔닝', '듀오 플레이'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-doubles-teamwork-strategy',
  },
  openGraph: {
    title: '테니스 복식의 팀워크 전략 — 호흡·시선·커뮤니케이션으로 완성하는 듀오 플레이 | 두 사람이 하나처럼 움직이는 법',
    description: '복식은 기술이 아니라 호흡의 경기다. 시선, 커뮤니케이션, 포지션이 하나로 맞을 때 비로소 승리가 시작된다.',
    url: 'https://www.tennisfrens.com/blog/tennis-doubles-teamwork-strategy',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 복식의 팀워크 전략 — 호흡·시선·커뮤니케이션으로 완성하는 듀오 플레이 | 두 사람이 하나처럼 움직이는 법',
    description: '복식은 기술이 아니라 호흡의 경기다. 시선, 커뮤니케이션, 포지션이 하나로 맞을 때 비로소 승리가 시작된다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'doubles-essence-breathing-not-space', text: '1. 복식의 본질 — 공간이 아니라 \'호흡\'을 나누는 경기', depth: 2 },
  { id: 'communication-structure-signals-over-words', text: '2. 커뮤니케이션의 구조화 — \'말보다 신호\'', depth: 2 },
  { id: 'positioning-court-as-xy-axes', text: '3. 포지셔닝 — 코트를 \'X축과 Y축\'으로 나눠라', depth: 2 },
  { id: 'geo-doubles-strategy', text: '4. GEO별 복식 운영 전략', depth: 2 },
  { id: 'mistake-recovery-routine-teamwork-in-crisis', text: '5. 실수 후 루틴 — 팀워크는 위기 때 드러난다', depth: 2 },
  { id: 'doubles-training-routine-20min-example', text: '6. 복식 훈련 루틴 (20분 루틴 예시)', depth: 2 },
  { id: 'teamwork-philosophy-trust-over-skill', text: '7. 팀워크의 철학 — 실력보다 신뢰', depth: 2 },
];

const faqs = [
  {
    q: '복식 경기에서 파트너와 호흡이 잘 안 맞아요.',
    a: '포인트 전 신호를 간결하게 정하세요. 손 신호 3가지로 루틴을 단순화하면 리듬이 맞습니다.'
  },
  {
    q: '복식 중 실수 후 분위기를 바꾸는 법은?',
    a: '즉시 \'괜찮아\'라고 말하고, 시선을 맞추세요. 감정보다 리듬이 우선입니다.'
  },
  {
    q: '포지션 교대를 자주 해야 하나요?',
    a: '상대의 방향 예측에 따라 다릅니다. 예측이 읽혔을 땐 교대를 통해 흐름을 깨세요.'
  },
  {
    q: 'GEO별 복식 운영 전략이 왜 중요한가요?',
    a: '기후·코트 속도에 따라 공의 반응이 달라집니다. 환경에 맞춰 역할을 조정해야 합니다.'
  },
  {
    q: '복식 훈련 루틴은 얼마나 자주 해야 하나요?',
    a: '주 2회 이상, 20분씩 꾸준히 루틴 훈련을 반복하면 팀워크가 안정됩니다.'
  }
];

export default function TennisDoublesTeamworkStrategyPage() {
  const title = '테니스 복식의 팀워크 전략 — 호흡·시선·커뮤니케이션으로 완성하는 듀오 플레이 | 두 사람이 하나처럼 움직이는 법';
  const excerpt = '복식은 기술이 아니라 호흡의 경기다. 시선, 커뮤니케이션, 포지션이 하나로 맞을 때 비로소 승리가 시작된다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            복식 팀워크
          </Badge>
          <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300">
            듀오 플레이
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          복식은 단순히 '2명이 함께 치는 경기'가 아닙니다. 복식은 <strong>두 사람이 하나처럼 움직이는 리듬의 경기</strong>입니다. 기술보다 중요한 것은 시선과 호흡, 그리고 말 한마디로 만들어지는 신뢰입니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/doubles-strategy-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 복식 전략 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-basics/doubles.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 복식 가이드</a></li>
        </ul>
      </div>

      <section id="doubles-essence-breathing-not-space" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          복식의 본질 — 공간이 아니라 '호흡'을 나누는 경기
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          복식은 공간 분할이 아닌 '감각의 분할'입니다. 상대보다 빠른 스윙보다, 파트너보다 느리지 않은 타이밍이 더 중요합니다.
        </p>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500 mb-6">
          <p className="text-red-800 dark:text-red-200 text-sm mb-3">
            <strong>핵심 문장:</strong> "복식의 승자는 말을 적게 하지만, 시선은 자주 나눈다."
          </p>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-3">팀워크의 3요소:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-pink-800 dark:text-pink-200">시선 — 상대보다 파트너를 먼저 본다.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-pink-800 dark:text-pink-200">리듬 — 공보다 파트너의 스텝을 듣는다.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-pink-800 dark:text-pink-200">신뢰 — 실수 후에도 미소로 호흡을 맞춘다.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="communication-structure-signals-over-words" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          커뮤니케이션의 구조화 — '말보다 신호'
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          복식에서 긴 대화는 오히려 혼란을 만듭니다. 따라서 간결한 신호 시스템이 필요합니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">신호</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">의미</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">상황</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">👆 (엄지 위)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">네트 전진</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">리턴 약할 때</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">✋ (손바닥 펴기)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">중앙 수비</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">서브 강할 때</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">✊ (주먹 쥠)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">포지션 교대</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">리턴 방향 예측 시</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>💡 루틴 팁:</strong> 매 포인트 전 3초 동안 파트너와 눈을 맞추고, 짧은 손 신호로 전략을 정리하세요.
          </p>
        </div>
      </section>

      <section id="positioning-court-as-xy-axes" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          포지셔닝 — 코트를 'X축과 Y축'으로 나눠라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          복식은 단순히 좌우 분할이 아닙니다. 코트를 <strong>대각선으로 나누는 X축 전략</strong>이 중요합니다.
        </p>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500 mb-6">
          <h3 className="font-bold text-red-800 dark:text-red-200 mb-3">기본 형태:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-red-800 dark:text-red-200">공이 오른쪽으로 갈 때 → 파트너는 왼쪽 대각선 커버.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-red-800 dark:text-red-200">네트 플레이 시 → 네트 전진자 1명, 후방자 1명 유지.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-red-800 dark:text-red-200">로브 발생 시 → 후방자 커버, 전진자는 중앙으로 복귀.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>💡 포인트:</strong> 두 선수의 간격은 3m 이내, 항상 대각선 시야를 공유해야 합니다.
          </p>
        </div>
      </section>

      <section id="geo-doubles-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          GEO별 복식 운영 전략
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 빠름 → 포지션 짧게, 네트 전진 비율 ↑.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습도 높음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 무거움 → 롱 랠리 대비, 후방 대기 유지.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 튐 강함 → 발리 중심 공격형 운영.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람 영향 큼 → 커뮤니케이션 빈도 ↑, 로브 대응 중요.</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>📍 GEO 팁:</strong> 환경별로 서로의 역할을 미리 정하면 경기 흐름이 훨씬 안정됩니다.
          </p>
        </div>
      </section>

      <section id="mistake-recovery-routine-teamwork-in-crisis" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          실수 후 루틴 — 팀워크는 위기 때 드러난다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          복식에서 가장 흔한 실수는 '서로의 실수에 반응하는 감정'입니다.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500 mb-6">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">루틴:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">실수 직후 — "괜찮아" 한마디 + 손 터치.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">다음 포인트 준비 중 — 시선 교환, 짧은 호흡 동기화.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-200">포인트 시작 전 — 루틴 워드 "리듬"으로 감정 리셋.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            <strong>💡 TIP:</strong> 실수 직후의 표정이 다음 포인트의 승패를 결정합니다.
          </p>
        </div>
      </section>

      <section id="doubles-training-routine-20min-example" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          복식 훈련 루틴 (20분 루틴 예시)
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
                <td className="border border-gray-300 dark:border-gray-600 p-3">시선 훈련</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">파트너의 움직임만 바라보기</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">5~10분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">커뮤니케이션 훈련</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">신호 교환, 타이밍 체크</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">10~15분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">네트 전진 연습</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">2구 후 전진 타이밍 연습</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">15~20분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">포인트 루틴 반복</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">실수 후 복귀 리듬 점검</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            <strong>💡 훈련 목표:</strong> 말을 줄이고 '감각을 공유하는 시간'을 늘리세요.
          </p>
        </div>
      </section>

      <section id="teamwork-philosophy-trust-over-skill" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          팀워크의 철학 — 실력보다 신뢰
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          복식은 실력의 합이 아니라 신뢰의 합입니다. 서로의 템포를 존중하고, 상대보다 먼저 파트너를 배려할 때 진짜 팀이 만들어집니다.
        </p>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm mb-4">
            <strong>결론:</strong> 복식에서 이기는 법은 하나 — "같이 움직이는 리듬을 만들어라."
          </p>
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            팀워크는 기술이 아니라 태도입니다. 오늘부터는 공보다 파트너를 먼저 보고, 실수보다 리듬을 먼저 회복하세요. 그러면 두 사람이 아니라 '하나의 팀'이 코트를 지배하게 됩니다.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-power-of-routine">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  루틴의 힘
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스에서 루틴의 힘 — 일관된 습관이 경기력을 만든다
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  루틴이 집중력과 경기력을 높이는 이유. 워밍업부터 멘탈 복구까지, 하루 루틴으로 완성하는 일관된 테니스 감각.
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
