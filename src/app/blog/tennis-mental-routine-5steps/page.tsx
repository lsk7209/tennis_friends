import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '멘탈 루틴 5단계 — 시합 중 흔들리지 않는 집중력의 기술 | 긴장·실수·흐름을 제어하는 심리 루틴 완전 가이드',
  description: '포인트 사이 20초를 지배하라. 루틴·시선·호흡·이미지 트레이닝으로 흔들리지 않는 멘탈을 만드는 5단계 심리 전략.',
  keywords: ['테니스 멘탈', '집중력', '루틴', '심리훈련', '시합 전략', '긴장 관리', '실수 극복', '흐름 유지'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-mental-routine-5steps',
  },
  openGraph: {
    title: '멘탈 루틴 5단계 — 시합 중 흔들리지 않는 집중력의 기술 | 긴장·실수·흐름을 제어하는 심리 루틴 완전 가이드',
    description: '포인트 사이 20초를 지배하라. 루틴·시선·호흡·이미지 트레이닝으로 흔들리지 않는 멘탈을 만드는 5단계 심리 전략.',
    url: 'https://www.tennisfrens.com/blog/tennis-mental-routine-5steps',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '멘탈 루틴 5단계 — 시합 중 흔들리지 않는 집중력의 기술 | 긴장·실수·흐름을 제어하는 심리 루틴 완전 가이드',
    description: '포인트 사이 20초를 지배하라. 루틴·시선·호흡·이미지 트레이닝으로 흔들리지 않는 멘탈을 만드는 5단계 심리 전략.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'twenty-second-rule', text: '1. 20초의 법칙: 포인트 사이의 시간을 지배하라', depth: 2 },
  { id: 'cognitive-reframing', text: '2. 인지적 재구현: "압박감은 특권이다"', depth: 2 },
  { id: 'anchoring-techniques', text: '3. 앵커링(Anchoring): 집중력을 깨우는 신체 트리거', depth: 2 },
  { id: 'breathing-vagus-nerve', text: '4. 호흡의 미학: 미주신경 자극을 통한 리셋', depth: 2 },
  { id: 'visualization-strategy', text: '5. 시각화 전략: 다음 샷의 결과가 아닌 과정을 보라', depth: 2 },
  { id: 'mental-check-after-match', text: '6. 경기 후 자가 진단 피드백', depth: 2 },
  { id: 'conclusion', text: '7. 결론: 루틴은 흔들리지 않는 심리적 근육이다', depth: 2 },
];

const faqs = [
  {
    q: '경기 중 큰 점수 차로 지고 있을 때 루틴이 효과가 있나요?',
    a: '루틴은 결과(점수)에 집착하지 않고 과정(현재 포인트)으로 복귀하게 도와주는 가장 강력한 도구입니다.'
  },
  {
    q: '루틴을 너무 오래 하면 상대가 싫어하지 않나요?',
    a: '규정된 20초 내에서 수행하는 루틴은 선수의 권리입니다. 자신만의 속도를 유지하세요.'
  }
];

export default function TennisMentalRoutine5StepsPage() {
  const title = '멘탈 루틴: 0.1초의 기술을 지배하는 20초의 의식';
  const excerpt = '테니스는 기술의 운동이 아니라 감정의 운동입니다. 포인트 사이 20초를 어떻게 쓰느냐가 베이스라인 뒤의 당신을 결정합니다.';

  return (
    <Article slug="tennis-mental-routine-5steps" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
            스포츠 심리학
          </Badge>
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            멘탈 강화
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold text-center mt-2">
          "테니스는 5인치 공간(두 귀 사이)에서 벌어지는 게임이다." - 비욘 보그
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="twenty-second-rule" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 20초의 법칙: 포인트 사이의 시간을 지배하라</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">포인트가 끝난 후 다음 포인트가 시작되기 전까지의 20초는 <strong>'정서적 정화'</strong>의 시간입니다.</p>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl mb-6">
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="text-purple-500 font-bold">0-5s:</span>
              <span>지난 포인트 잊기. 실수를 했다면 등 뒤로 던지는 제스처를 취하세요.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-500 font-bold">5-15s:</span>
              <span>중립 상태 회복. 호흡을 가다듬고 라켓 줄을 고르는 등의 물리적 행동에 집중합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-500 font-bold">15-20s:</span>
              <span>계획 수립. 구체적인 타겟과 서브 방향을 결정하고 라인에 섭니다.</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="cognitive-reframing" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 인지적 재구현: "압박감은 특권이다"</h2>
        <p className="mb-4">긴장될 때 우리 몸이 보내는 신호(심장 박동, 손 떨림)를 <strong>'불안'이 아닌 '준비'</strong>로 해석해야 합니다.</p>
        <div className="p-6 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/20 italic text-sm">
          "내가 긴장하고 있다는 것은, 내가 지금 이 경기를 그만큼 소중히 여기고 있다는 증거다." - 빌리 진 킹
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">긴장감을 피하려 하지 말고, 몸이 최고의 퍼포먼스를 내기 위해 엔진을 예열하는 과정으로 받아들이는 순간 멘탈은 견고해집니다.</p>
      </section>

      <section id="anchoring-techniques" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 앵커링(Anchoring): 집중력을 깨우는 신체 트리거</h2>
        <p className="mb-6">중요한 순간에 집중력을 즉각 소환하는 본인만의 신체적 신호를 만드세요.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-2">물리적 트리거</h4>
              <p className="text-[10px] text-slate-500">라켓 프레임 두드리기, 손목 아대 만지기, 베이스라인 먼지 털기. 이 동작이 루틴의 시작 신호가 됩니다.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold text-sm mb-2">언어적 트리거</h4>
              <p className="text-[10px] text-slate-500">"다음 포인트만", "무릎 낮추자", "침착해". 짧고 긍정적인 명령어를 속으로 외칩니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="breathing-vagus-nerve" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 호흡의 미학: 미주신경 자극을 통한 리셋</h2>
        <p className="mb-4">심박수가 올라가면 논리적 판단을 하는 뇌 부위가 마비됩니다. 인위적인 호흡으로 이를 제어하세요.</p>
        <div className="p-6 bg-slate-900 text-white rounded-2xl text-center">
          <h4 className="text-blue-400 font-bold mb-2">BOX BREATHING</h4>
          <p className="text-xs">4초 들이마심 → 4초 멈춤 → 4초 내뱉음 → 4초 멈춤</p>
          <p className="text-[10px] mt-4 text-slate-400">체인지 엔드(Change Ends) 시 3세트만 반복해도 신경계가 리셋됩니다.</p>
        </div>
      </section>

      <section id="visualization-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 시각화 전략: 다음 샷의 결과가 아닌 과정을 보라</h2>
        <p className="mb-4">"공이 들어갈까?"라는 걱정 대신 공이 날아갈 <strong>'궤적'</strong>을 3D로 시뮬레이션 하세요.</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li>네트 위 어느 정도 높이로 통과할 것인가?</li>
          <li>공이 바운스 된 후 상대방의 어디쯤으로 이동할 것인가?</li>
          <li>나의 임팩트 소리는 어떠할 것인가?</li>
        </ul>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. 결론: 루틴은 흔들리지 않는 심리적 근육이다</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          기술적 실수보다 무서운 것은 실망감이 다음 포인트까지 이어지는 것입니다. 멘탈 루틴은 감정의 전이를 막는 <strong>'회로 차단기'</strong>입니다. 오늘부터 당신만의 20초 의식을 만드세요. 그 루틴이 지탱해주는 한, 당신은 결코 무너지지 않습니다.
        </p>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}
