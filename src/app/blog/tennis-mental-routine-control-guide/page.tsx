import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 멘탈 루틴 5단계 | 집중력 유지·긴장감 제어법 완전 가이드',
  description: '테니스 경기 중 흔들리지 않는 멘탈 루틴. 호흡, 시선, 루틴, 리듬을 통해 자신감과 집중력을 높이는 심리 관리법.',
  keywords: ['테니스 멘탈', '집중력 훈련', '심리 관리', '루틴', '긴장감 제어', '자신감'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-mental-routine-control-guide',
  },
  openGraph: {
    title: '테니스 멘탈 루틴 5단계 | 집중력 유지·긴장감 제어법 완전 가이드',
    description: '테니스 경기 중 흔들리지 않는 멘탈 루틴. 호흡, 시선, 루틴, 리듬을 통해 자신감과 집중력을 높이는 심리 관리법.',
    url: 'https://www.tennisfrens.com/blog/tennis-mental-routine-control-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 멘탈 루틴 5단계 | 집중력 유지·긴장감 제어법 완전 가이드',
    description: '테니스 경기 중 흔들리지 않는 멘탈 루틴. 호흡, 시선, 루틴, 리듬을 통해 자신감과 집중력을 높이는 심리 관리법.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'routine-power-concept', text: '루틴의 힘 — 긴장을 이기는 자동화 장치', depth: 2 },
  { id: 'breathing-control-rhythm', text: '호흡 조절이 리듬을 바꾼다', depth: 2 },
  { id: 'gaze-fixation-focus', text: '시선 고정 — 상대가 아니라 공을 본다', depth: 2 },
  { id: 'mental-routine-five-steps', text: '멘탈 루틴 5단계 공식', depth: 2 },
  { id: 'regional-environment-mental-factors', text: '지역·환경별 멘탈 요인 차이', depth: 2 },
  { id: 'mental-muscle-daily-training', text: '멘탈 근육을 키우는 일상 훈련', depth: 2 },
  { id: 'return-mind-to-rhythm', text: '마음을 리듬으로 돌려라', depth: 2 },
  { id: 'mental-checklist', text: '멘탈 체크리스트', depth: 2 },
];

const faqs = [
  {
    q: '경기 중 긴장을 풀 수 있는 가장 효과적인 방법은?',
    a: '포인트 전 호흡 루틴과 일정한 준비 동작을 반복하세요. 루틴이 뇌에 \'안정 신호\'를 보냅니다.'
  },
  {
    q: '멘탈이 약하다고 느껴질 때 훈련법은?',
    a: '경기 영상을 보며 스스로의 루틴을 점검하고, 짧은 루틴을 일상에서 반복해보세요.'
  },
  {
    q: '멘탈 훈련은 실제 경기력 향상에도 도움이 되나요?',
    a: '네. 멘탈 루틴을 적용하면 실수 후 회복 속도가 빨라지고, 경기 리듬이 안정됩니다.'
  },
  {
    q: '루틴은 언제 만들어야 효과적일까요?',
    a: '경기 전에 급히 만드는 것보다 평소 연습 중에 습관화해야 합니다. 반복이 핵심입니다.'
  },
  {
    q: '멘탈 훈련 중 가장 중요한 요소는?',
    a: '호흡입니다. 호흡이 짧아지면 판단이 흔들립니다. 깊은 호흡이 멘탈의 기반입니다.'
  }
];

export default function TennisMentalRoutineControlGuidePage() {
  const title = '테니스 멘탈 루틴, 승부를 결정짓는 건 결국 마음이다';
  const excerpt = '포핸드보다 어려운 게 멘탈이다. 경기 중 흔들리지 않고 집중력을 유지하는 루틴 5단계, 프로 선수들의 심리 컨트롤법을 해석한다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
            멘탈 마스터
          </Badge>
          <Badge className="bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300">
            집중력 훈련
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          "기술은 연습으로 완성되지만, 멘탈은 순간에 드러난다." 테니스는 기술보다 멘탈의 비중이 더 크다. 코트 위에서 손이 떨리고 발이 느려지는 순간, 리듬은 무너진다. 하지만 멘탈도 기술처럼 훈련으로 강화할 수 있다.
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

      <section id="routine-power-concept" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          루틴의 힘 — 긴장을 이기는 자동화 장치
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          프로 선수들이 포인트마다 같은 동작을 반복하는 이유는 단순하다. 그 루틴이 <strong>뇌의 안정 신호</strong>로 작동하기 때문이다. 서브 전, 리턴 전, 혹은 브레이크 포인트 순간마다 자신만의 '루틴'을 만들어라.
        </p>

        <blockquote className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-950 italic">
          <p className="text-purple-800 dark:text-purple-200">
            💡 "루틴은 긴장을 예측 가능성으로 바꾼다."
          </p>
        </blockquote>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>👉 훈련법:</strong> '공 세 번 바운드 → 깊은 호흡 두 번 → 시선 고정' 같은 간단한 루틴을 정하라. 3주만 반복하면 몸이 자동으로 긴장을 해소한다.
          </p>
        </div>
      </section>

      <section id="breathing-control-rhythm" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-violet-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          호흡 조절이 리듬을 바꾼다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스에서 호흡은 리듬의 시작이다. 긴장이 높을수록 호흡이 짧아지고, 이는 스윙 템포에 직접 영향을 준다. 임팩트 순간에 <strong>짧고 강한 숨 내쉬기</strong>로 힘을 전달하고, 포인트가 끝나면 <strong>복식 호흡으로 리셋</strong>하라.
        </p>

        <div className="bg-violet-50 dark:bg-violet-950 p-4 rounded-lg border-l-4 border-violet-500">
          <p className="text-violet-800 dark:text-violet-200 text-sm">
            <strong>👉 실전 팁:</strong> 경기 중에는 "3초 들이마시고 4초 내쉬기"를 반복하라. 복부가 오르내리며 안정감이 생긴다.
          </p>
        </div>
      </section>

      <section id="gaze-fixation-focus" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          시선 고정 — 상대가 아니라 공을 본다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          멘탈이 흔들릴 때 가장 먼저 무너지는 건 '시선'이다. 상대의 표정이나 스코어에 신경 쓸수록 스윙 리듬이 깨진다. 포인트 중엔 공에만, 포인트 후엔 <strong>하늘·라켓·공 세 가지 시선 루틴</strong>으로 시야를 넓혀라.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 bg-indigo-50 dark:bg-indigo-950 italic">
          <p className="text-indigo-800 dark:text-indigo-200">
            "시선을 관리하는 것이 곧 마음을 관리하는 것이다." — 노박 조코비치
          </p>
        </blockquote>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>👉 훈련:</strong> 연습 경기에서 스코어판을 가리고 경기해보라. 점수보다 공의 흐름에 집중하는 연습이다.
          </p>
        </div>
      </section>

      <section id="mental-routine-five-steps" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          멘탈 루틴 5단계 공식
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">단계</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">키워드</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">1단계</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Awareness</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">긴장 인식: '지금 긴장하고 있구나' 자각하기</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">2단계</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Breath</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">호흡으로 신체 리듬 안정</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">3단계</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Focus</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">시선 고정, 불필요한 생각 차단</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">4단계</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Routine</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">서브·리턴 루틴으로 리듬 복원</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">5단계</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Reset</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">포인트 후 짧은 리셋, 다음 포인트 준비</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            <strong>👉 활용 예:</strong> 서브 에이스를 허용한 직후 '호흡-시선-루틴'만 반복해도 멘탈 회복이 빨라진다.
          </p>
        </div>
      </section>

      <section id="regional-environment-mental-factors" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          지역·환경별 멘탈 요인 차이
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          한국의 코트 환경은 지역별로 다르다. 멘탈 요인도 그에 맞춰 조정해야 한다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·수도권(대회 밀집 지역)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">관중·소음 많음 → 시선 분산 방지 루틴 강화.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산(습한 기후)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">체력 저하로 집중력 급감 → 호흡 루틴 자주 반복.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구(더위)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">더위로 짜증 유발 → 물 섭취 루틴을 멘탈 루틴에 포함.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주(바람 많은 코트)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공이 흔들려 불안감 증가 → 스윙 리듬 신뢰 루틴 유지.</p>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-teal-800 dark:text-teal-200 text-sm">
            <strong>👉 GEO 팁:</strong> 지역별 기후와 소음 조건을 고려한 루틴을 설정하면 로컬 코트 적응력이 높아진다.
          </p>
        </div>
      </section>

      <section id="mental-muscle-daily-training" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          멘탈 근육을 키우는 일상 훈련
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          멘탈도 근육처럼 반복해야 단단해진다. 매일 10분만 투자하라.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">1️⃣ 호흡 루틴 3분 — 심박 안정</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">복식호흡으로 심박 안정.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2️⃣ 시각화 루틴 3분 — 경기 장면 머릿속 그리기</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">경기 장면을 머릿속으로 그리기.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">3️⃣ 감정 기록 4분 — 긴장했던 순간 기록</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">오늘 훈련 중 긴장했던 순간을 기록.</p>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>👉 핵심:</strong> 멘탈은 '기억된 안정감'이다. 평소 루틴이 위기에서 작동한다.
          </p>
        </div>
      </section>

      <section id="return-mind-to-rhythm" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-rose-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          마음을 리듬으로 돌려라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          멘탈이 흔들리는 건 누구에게나 자연스러운 일이다. 그러나 리듬을 잃지 않으면 공은 여전히 당신의 라켓 안에서 춤춘다. 중요한 건 '잘 치는 마음'이 아니라 '흔들려도 돌아오는 마음'이다. 루틴은 그 마음의 길을 잃지 않게 돕는다.
        </p>

        <blockquote className="border-l-4 border-rose-500 pl-6 py-4 bg-rose-50 dark:bg-rose-950 italic">
          <p className="text-rose-800 dark:text-rose-200">
            💬 "멘탈은 완벽한 자신감이 아니라, 흔들림 속에서 균형을 되찾는 능력이다."
          </p>
        </blockquote>
      </section>

      <section id="mental-checklist" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-slate-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          멘탈 체크리스트
        </h2>

        <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-lg">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4">👉 멘탈 체크리스트</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>• 루틴: 포인트 전 일정한 루틴이 있는가?</li>
            <li>• 호흡: 긴장 시 복식호흡으로 리듬을 되찾는가?</li>
            <li>• 시선: 스코어보다 공에 집중하는가?</li>
            <li>• 감정: 감정 기록으로 자신의 패턴을 인식하는가?</li>
          </ul>
        </div>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-forehand-impact-timing-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  포핸드 마스터
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
          <Link href="/guide/tennis-footwork-balance-training">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  기술 가이드
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 풋워크 밸런스 훈련법
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  포핸드와 백핸드의 완벽한 밸런스를 위한 풋워크 기술. 코트 지배의 핵심 이동 기술을 마스터하세요.
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
