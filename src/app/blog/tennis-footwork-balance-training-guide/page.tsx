import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '테니스 풋워크 밸런스 훈련 | 하체 중심 리듬·균형 이동 완전정복',
  description: '테니스 풋워크 밸런스 향상 루틴. 하체 중심 이동과 리듬 훈련, 코트별 발 스텝 전략까지 완벽 가이드.',
  keywords: ['테니스 풋워크', '밸런스 훈련', '하체 리듬', '균형 이동', '스텝 훈련', '코트별 전략'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-footwork-balance-training-guide',
  },
  openGraph: {
    title: '테니스 풋워크 밸런스 훈련 | 하체 중심 리듬·균형 이동 완전정복',
    description: '테니스 풋워크 밸런스 향상 루틴. 하체 중심 이동과 리듬 훈련, 코트별 발 스텝 전략까지 완벽 가이드.',
    url: 'https://tennisfriends.co.kr/blog/tennis-footwork-balance-training-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 풋워크 밸런스 훈련 | 하체 중심 리듬·균형 이동 완전정복',
    description: '테니스 풋워크 밸런스 향상 루틴. 하체 중심 이동과 리듬 훈련, 코트별 발 스텝 전략까지 완벽 가이드.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'split-step-physics', text: '1. 스플릿 스텝의 물리: 탄성 에너지의 저장', depth: 2 },
  { id: 'recovery-hierarchy', text: '2. 리커버리 계층 구조: 크로스오버 vs 셔플 스텝', depth: 2 },
  { id: 'adjustment-steps', text: '3. 미세 조정(Adjustment) 스텝: 타점의 정밀 설계', depth: 2 },
  { id: 'surface-friction', text: '4. 코트 표면과 마찰력 관리: 하드 vs 클레이', depth: 2 },
  { id: 'balance-metrics', text: '5. 밸런스 측정 지표: 코어 안정성 체크', depth: 2 },
  { id: 'footwork-routine', text: '6. 10분 하체 리듬 최적화 루틴', depth: 2 },
  { id: 'conclusion', text: '7. 결론: 좋은 발이 좋은 손을 만든다', depth: 2 },
];

const faqs = [
  {
    q: '스플릿 스텝의 정확한 타이밍은?',
    a: '상대방이 공을 치는 순간 발이 공중에 떠 있어야 하며, 임팩트 직후 착지하며 방향을 결정합니다.'
  },
  {
    q: '무릎 통증을 줄이는 풋워크는?',
    a: '뒤꿈치 착지를 피하고 발 앞꿈치(Ball of the foot)를 활용해 충격을 분산시키세요.'
  }
];

export default function TennisFootworkBalanceTrainingGuidePage() {
  const title = '테니스 풋워크: 속도보다 \'균형\'이 승패를 결정한다';
  const excerpt = '테니스에서 움직임은 단순히 공을 쫓는 것이 아닙니다. 스플릿 스텝의 타이밍과 리커버리의 효율성이 0.1초의 여유를 만듭니다.';

  return (
    <Article slug="tennis-footwork-balance-training-guide" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950 dark:to-emerald-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
            고급 이동 기술
          </Badge>
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
            하체 리듬
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold text-center italic">
          "테니스는 발로 하는 경기다. 손은 그 리듬을 마무리할 뿐이다."
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="split-step-physics" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 스플릿 스텝의 물리: 탄성 에너지의 저장</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">스플릿 스텝은 단순한 점프가 아닙니다. 근육에 <strong>'탄성 에너지'</strong>를 저장하여 일순간에 폭발시키는 준비 과정입니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="bg-slate-50 dark:bg-slate-900">
            <CardContent className="p-5">
              <h4 className="font-bold text-teal-600 mb-2">Stretch-Shortening Cycle</h4>
              <p className="text-xs">착지 직후 종아리와 허벅지 근육이 늘어났다가 바로 수축하며 스프링 같은 반동을 만들어냅니다. 이 리듬을 타면 반응 속도가 20% 이상 빨라집니다.</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 dark:bg-slate-900">
            <CardContent className="p-5">
              <h4 className="font-bold text-emerald-600 mb-2">Timing Window</h4>
              <p className="text-xs text-red-500 font-bold">중요: 상대가 공을 치는 순간 당신은 공중에 있어야 합니다.</p>
              <p className="text-[10px] mt-1">공의 방향을 인식한 후 땅을 밀어내며 첫 보폭을 시작해야 합니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="recovery-hierarchy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 리커버리 계층 구조: 크로스오버 vs 셔플 스텝</h2>
        <p className="mb-6">이동 거리와 상황에 따라 리커버리(복귀) 스텝의 효율성은 달라집니다.</p>
        <div className="bg-teal-50 dark:bg-teal-900/10 p-6 rounded-2xl border-l-4 border-teal-500 mb-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-sm text-teal-800 dark:text-teal-200">크로스오버 (Crossover) — [장거리/급박]</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">하나의 큰 걸음으로 중앙으로 빠르게 복귀합니다. 코트 구석으로 밀렸을 때 필수적입니다.</p>
            </div>
            <div>
              <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-200">사이드 셔플 (Shuffle) — [단거리/안정]</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">상대를 정면으로 응시하며 잘게 움직입니다. 타점의 안정성을 유지하며 다음 공을 준비할 때 유리합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="adjustment-steps" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 미세 조정(Adjustment) 스텝: 타점의 정밀 설계</h2>
        <p className="mb-4">"공까지 80%는 큰 보폭으로, 나머지 20%는 <strong>무수히 많은 잔발</strong>로."</p>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          프로와 아마추어의 가장 큰 차이는 공 앞에서의 <strong>'셋업 속도'</strong>입니다. 공이 바운스 되기 직전까지 잔발을 굴러 내 신체 조건에 가장 완벽한 타점 거리를 만드는 것이 풋워크의 궁극적 목적입니다.
        </p>
      </section>

      <section id="surface-friction" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 코트 표면과 마찰력 관리: 하드 vs 클레이</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-slate-200 dark:border-slate-800 text-xs text-left">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3 border border-slate-200 dark:border-slate-700">코트 종류</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">마찰 특성</th>
                <th className="p-3 border border-slate-200 dark:border-slate-700">스텝 전략</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold">하드 (Hard)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">높은 마찰력</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">슬라이딩 지양, 짧고 날카로운 제동 스텝.</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold">클레이 (Clay)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">낮은 마찰력(미끄러짐)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">임팩트 직전 슬라이딩을 통한 거리 조절 및 제동.</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold">인조잔디 (Grassy)</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">불규칙한 마찰</td>
                <td className="p-3 border border-slate-200 dark:border-slate-700">낮은 중심 유지, 상체보다 하체 균형 중시.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="footwork-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 10분 하체 리듬 최적화 루틴</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-teal-50 dark:bg-teal-900/10 rounded-xl">
            <h5 className="font-bold text-sm mb-1 text-teal-700 underline">사다리 드릴 (3분)</h5>
            <p className="text-[10px]">발가락 끝의 민첩성(Agility) 향상.</p>
          </div>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl">
            <h5 className="font-bold text-sm mb-1 text-emerald-700 underline">8자 런닝 (4분)</h5>
            <p className="text-[10px]">곡선 이동 시 중심 축 유지 능력.</p>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl">
            <h5 className="font-bold text-sm mb-1 text-blue-700 underline">점프 & 포지(3분)</h5>
            <p className="text-[10px]">착지 후 즉각적인 제동 및 밸런스 체크.</p>
          </div>
        </div>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. 결론: 좋은 발이 좋은 손을 만든다</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          테니스는 손이 아니라 발로 치는 스포츠입니다. 발이 제 위치에 가 있지 않으면 세계 최고의 라켓도 무용지물입니다. <strong>스플릿 스텝의 리듬</strong>을 몸에 익히는 것 하나만으로도 당신의 게임 수준은 비약적으로 상승할 것입니다.
        </p>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}
