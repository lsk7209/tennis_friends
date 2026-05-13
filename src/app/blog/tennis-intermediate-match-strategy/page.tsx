import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '테니스 중급자 승리 전략 — 코트 기하학과 포인트 설계의 기술 | 하이 퍼포먼스 전략 가이드',
  description: '중급자에서 상급자로 가는 핵심은 스윙이 아니라 전략입니다. 코트 기하학, 인사이드 아웃 포핸드, 빅 포인트 심리학까지 승률을 높이는 모든 기술.',
  keywords: ['테니스 전략', '중급자 테니스', '코트 기하학', '인사이드 아웃 포핸드', '포인트 설계', '테니스 승리 비결'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-intermediate-match-strategy',
  },
  openGraph: {
    title: '테니스 중급자 승리 전략 — 코트 기하학과 포인트 설계의 기술',
    description: '중급자에서 상급자로 가는 핵심은 스윙이 아니라 전략입니다. 코트 기하학, 인사이드 아웃 포핸드, 빅 포인트 심리학까지 승률을 높이는 모든 기술.',
    url: 'https://www.tennisfrens.com/blog/tennis-intermediate-match-strategy',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 중급자 승리 전략 — 코트 기하학과 포인트 설계의 기술',
    description: '중급자에서 상급자로 가는 핵심은 스윙이 아니라 전략입니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'court-geometry', text: '1. 코트 기하학: 각도 이등분(Bisecting the Angle)의 원리', depth: 2 },
  { id: 'inside-out-logic', text: '2. 인사이드 아웃 포핸드: 역방향의 미학', depth: 2 },
  { id: 'three-phase-strategy', text: '3. 경기 운영 3단계: Neutral → Offense → Finish', depth: 2 },
  { id: 'big-point-psychology', text: '4. 빅 포인트 심리학: 브레이크 포인트 극복법', depth: 2 },
  { id: 'momentum-shift', text: '5. 모멘텀 관리: 흐름을 바꾸는 체인지 오버 활용', depth: 2 },
  { id: 'adaptive-tactics', text: '6. 상황별 맞춤 전술: 카운터 펀처 vs 어그레시브 베이스라이너', depth: 2 },
  { id: 'conclusion', text: '7. 결론: 전략이 스윙을 압도한다', depth: 2 },
];

const faqs = [
  {
    q: '중급자가 가장 쉽게 범하는 전술적 실수는?',
    a: '어려운 상황에서 위너를 노리는 것입니다. 위기일수록 코트 중앙으로 높게 보내는 "안전 가이드라인"을 지키세요.'
  },
  {
    q: '인사이드 아웃 포핸드는 언제 사용하나요?',
    a: '내 백핸드 쪽으로 오는 비교적 짧거나 느린 공을 돌아서서 포핸드로 공격할 때 사용합니다. 상대의 역동작을 유발하기 좋습니다.'
  }
];

export default function TennisIntermediateMatchStrategyPage() {
  const title = '중급자의 벽을 넘는 법: 전략이 곧 실력이다';
  const excerpt = '중급자에게 필요한 건 더 예쁜 스윙이 아닙니다. 코트의 공간을 읽고 상대의 리듬을 파악하는 "전략적 뇌"를 깨울 시간입니다.';

  return (
    <Article slug="tennis-intermediate-match-strategy" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">중급 전략</Badge>
          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">전술 최적화</Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-bold text-center">
          "테니스는 에러를 줄이는 게임이 아니라, 상대가 에러를 하게 만드는 게임입니다."
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="court-geometry" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 코트 기하학: 각도 이등분(Bisecting the Angle)의 원리</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">리커버리 스텝의 목적지는 코트 중앙이 아닙니다. <strong>상대가 칠 수 있는 최대 두 각도의 한가운데</strong>여야 합니다.</p>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 mb-6">
          <ul className="space-y-3 text-sm">
            <li>• <strong>공을 크로스로 쳤을 때:</strong> 중앙보다 약간 뒤쪽/반대쪽으로 이동.</li>
            <li>• <strong>공을 다운더라인으로 쳤을 때:</strong> 중앙보다 친 방향 쪽으로 더 치우쳐서 대기.</li>
            <li>• <strong>핵심:</strong> 이렇게 해야 상대의 어느 공격 각도든 최단 거리로 이동할 수 있습니다.</li>
          </ul>
        </div>
      </section>

      <section id="inside-out-logic" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 인사이드 아웃 포핸드: 역방향의 미학</h2>
        <p className="mb-6">자신의 백핸드 쪽 공을 포핸드로 처리하는 기술은 중급자의 가장 강력한 무기입니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-blue-50 dark:bg-blue-900/10 border-blue-100">
            <CardContent className="p-5">
              <h4 className="font-bold text-blue-800 mb-2">Inside-Out</h4>
              <p className="text-xs">내 백핸드 쪽에서 상대의 백핸드 쪽으로 보내는 대각선 샷. 안전하지만 상대를 구석으로 멉니다.</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 dark:bg-indigo-950 border-indigo-100">
            <CardContent className="p-5">
              <h4 className="font-bold text-indigo-800 mb-2">Inside-In</h4>
              <p className="text-xs">내 백핸드 쪽에서 상대의 포핸드 쪽 라인을 따라 치는 샷. 위험부담이 크지만 결정구로 탁월합니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="three-phase-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 경기 운영 3단계: Neutral → Offense → Finish</h2>
        <div className="relative border-l-2 border-blue-500 ml-4 pl-8 space-y-8">
          <div className="relative">
            <span className="absolute -left-11 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">01</span>
            <h4 className="font-bold text-sm">NEUTRAL (중립)</h4>
            <p className="text-xs text-slate-600">깊은 크로스 코트 랠리로 실수를 줄이며 기회를 엿보는 단계.</p>
          </div>
          <div className="relative">
            <span className="absolute -left-11 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">02</span>
            <h4 className="font-bold text-sm">OFFENSE (공격기회)</h4>
            <p className="text-xs text-slate-600">상대의 짧은 볼을 놓치지 않고 각도를 벌리거나 베이스라인 안쪽으로 진입.</p>
          </div>
          <div className="relative">
            <span className="absolute -left-11 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">03</span>
            <h4 className="font-bold text-sm">FINISH (마무리)</h4>
            <p className="text-xs text-slate-600">발리, 오버헤드, 또는 확실한 위너로 포인트를 획득.</p>
          </div>
        </div>
      </section>

      <section id="big-point-psychology" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 빅 포인트 심리학: 브레이크 포인트 극복법</h2>
        <p className="mb-4">"40-40 듀스나 브레이크 포인트에서는 상대를 이기려 하지 말고, <strong>상대가 지게 만드세요.</strong>"</p>
        <Card className="border-dashed border-2">
          <CardContent className="p-6">
            <ul className="text-xs space-y-3 text-slate-600">
              <li>• 서브 성공률 100%를 목표로 속도를 70%로 낮추기.</li>
              <li>• 상대의 약점(보통 백핸드)으로만 5회 이상 랠리 보내기.</li>
              <li>• 네트 높이를 평소보다 50cm 높게 설정하여 에러 확률 0% 추구.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="adaptive-tactics" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 상황별 맞춤 전술</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
            <h5 className="font-bold text-sm text-blue-700">Counter-Puncher</h5>
            <p className="text-[10px]">상대의 힘을 이용. 슬라이스와 로브를 섞어 상대의 리듬을 뺏고 실수를 유도.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
            <h5 className="font-bold text-sm text-red-700">Aggressive Baseliner</h5>
            <p className="text-[10px]">먼저 주도권 잡기. 짧은 볼은 무조건 어프로치 샷으로 연결하여 상대를 압박.</p>
          </div>
        </div>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. 결론: 전략이 스윙을 압도한다</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          테니스는 결국 확률의 예술입니다. 더 멋진 폼보다 더 현명한 코스 선택이 당신에게 승리를 안겨줄 것입니다. 오늘부터는 라켓보다 <strong>코트 전체를 보는 시야</strong>를 먼저 확보하세요.
        </p>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}
