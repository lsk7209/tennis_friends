import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 포핸드 임팩트 완전 정복 | 타점·스윙 리듬·회전 타이밍 가이드',
  description: '포핸드 임팩트 타이밍, 라켓 각도, 하체 리듬 조정까지 완전 정리. 코트별 포핸드 전략과 실전 훈련 루틴까지 한눈에.',
  keywords: ['테니스 포핸드', '임팩트 타이밍', '포핸드 타점', '스윙 리듬', '하체 회전', '포핸드 훈련'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-forehand-impact-timing-guide',
  },
  openGraph: {
    title: '테니스 포핸드 임팩트 완전 정복 | 타점·스윙 리듬·회전 타이밍 가이드',
    description: '포핸드 임팩트 타이밍, 라켓 각도, 하체 리듬 조정까지 완전 정리. 코트별 포핸드 전략과 실전 훈련 루틴까지 한눈에.',
    url: 'https://tennisfriends.co.kr/blog/tennis-forehand-impact-timing-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 포핸드 임팩트 완전 정복 | 타점·스윙 리듬·회전 타이밍 가이드',
    description: '포핸드 임팩트 타이밍, 라켓 각도, 하체 리듬 조정까지 완전 정리.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'impact-timing-concept', text: '1. 임팩트 타이밍의 물리: 앞에서, 리듬 안에서', depth: 2 },
  { id: 'biomechanics-arm-model', text: '2. 생체역학: 더블 밴드 vs 스트레이트 암', depth: 2 },
  { id: 'kinetic-chain', text: '3. 운동 사슬(Kinetic Chain): 에너지 전이 시스템', depth: 2 },
  { id: 'eye-tracking', text: '4. 아이 트래킹: 컨택트 윈도우 사수', depth: 2 },
  { id: 'regional-court-forehand-strategy', text: '5. 코트별 포핸드 전략', depth: 2 },
  { id: 'forehand-feel-recovery-routine', text: '6. 포핸드 임팩트 감각 회복 루틴', depth: 2 },
  { id: 'forehand-body-conversation', text: '7. 결론: 리듬이 기술을 이긴다', depth: 2 },
];

const faqs = [
  {
    q: '포핸드 타점을 일정하게 유지하려면?',
    a: '스윙 궤적을 짧게 유지하고, 몸의 회전 중심을 고정하세요. 타점보다 리듬이 안정돼야 공이 일정하게 맞습니다.'
  },
  {
    q: '포핸드가 자꾸 밀리는 이유는?',
    a: '임팩트 타이밍이 늦거나 하체 회전이 끊겨서입니다. 공보다 먼저 몸이 움직이도록 리듬을 잡으세요.'
  },
  {
    q: '하드코트와 클레이코트에서 포핸드 차이는?',
    a: '하드코트는 짧고 빠른 타점, 클레이코트는 긴 팔로스루가 유리합니다. 코트 특성에 따라 스윙 길이를 조정하세요.'
  }
];

export default function TennisForehandImpactTimingGuidePage() {
  const title = '포핸드 임팩트, 0.1초가 승부를 가른다';
  const excerpt = '포핸드는 테니스의 심장이다. 스윙 속도보다 중요한 건 임팩트 타이밍과 몸의 회전 리듬. 이 0.1초의 차이가 경기 전체를 바꾼다.';

  return (
    <Article slug="tennis-forehand-impact-timing-guide" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            포핸드 마스터
          </Badge>
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
            임팩트 타이밍
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스에서 포핸드는 단순한 공격 기술이 아니라 경기의 흐름을 만드는 언어다. 강하게 치는 것보다 중요한 건 '언제' 치느냐다. 포핸드의 본질은 <strong>타점 타이밍</strong>이며, 임팩트 순간의 0.1초가 승패를 좌우한다.
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="impact-timing-concept" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 임팩트 타이밍의 물리: 앞에서, 리듬 안에서</h2>
        <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-2xl mb-8 border border-green-100 dark:border-green-800">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0 text-center">
            포핸드의 정답은 구력에 따라 변하지만, 물리 법칙은 변하지 않습니다. 에너지가 손실 없이 공에 전달되는 <strong>'골디락스 존'</strong>을 찾는 법을 제안합니다.
          </p>
        </div>
      </section>

      <section id="biomechanics-arm-model" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 생체역학: 더블 밴드(Double Bend) vs 스트레이트 암(Straight Arm)</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          현대 테니스 포핸드에는 두 가지 주류 임팩트 모델이 있습니다. 자신의 팔 길이와 근력에 맞는 모델을 선택해야 타이밍이 일정해집니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold text-indigo-600 mb-2">스트레이트 암 (Straight Arm)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">로저 페더러, 라파엘 나달이 사용. 팔을 완전히 펴서 회전 반경을 극대화합니다. 타점이 더 앞에 있어야 하며, 강력한 원심력을 이겨낼 근력이 필요합니다.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold text-blue-600 mb-2">더블 밴드 (Double Bend)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">노박 조코비치, 알카라스가 사용. 팔꿈치를 살짝 굽혀 충격을 흡수하고 '슬롯'을 유지합니다. 타점이 몸에 더 가까워도 방어가 용이하며 동호인에게 가장 추천하는 모델입니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="kinetic-chain" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 운동 사슬(Kinetic Chain): 에너지 전이 시스템</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          포핸드 파워는 팔에서 나오는 것이 아닙니다. 지면에서 시작된 에너지가 관절을 타고 라켓까지 전달되는 과정입니다.
        </p>
        <div className="relative p-6 bg-slate-900 text-white rounded-2xl my-8 overflow-hidden">
          <h4 className="text-emerald-400 font-bold mb-4">ENERGY FLOW SEQUENCE</h4>
          <ul className="space-y-3 text-sm">
            <li><span className="text-emerald-400 font-mono">STEP 01.</span> <strong>지면 반력:</strong> 오른쪽 발바닥으로 코트를 밀어내며 시작 (Loading)</li>
            <li><span className="text-emerald-400 font-mono">STEP 02.</span> <strong>힙 턴:</strong> 골반이 먼저 회전하며 상체와 하체 사이의 토크(Torque) 생성</li>
            <li><span className="text-emerald-400 font-mono">STEP 03.</span> <strong>숄더 로테이션:</strong> 어깨가 돌아가며 지연(Lag) 현상 발생</li>
            <li><span className="text-emerald-400 font-mono">STEP 04.</span> <strong>임팩트:</strong> 모든 에너지가 라켓 헤드 속도로 폭발</li>
          </ul>
        </div>
      </section>

      <section id="eye-tracking" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 아이 트래킹: 컨택트 윈도우 사수</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          타이밍이 흔들리는 주원인은 시선의 조기 이동입니다. 공이 라켓에 닿는 순간을 <strong>0.1초 더</strong> 바라봐야 합니다.
        </p>
        <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border border-amber-200 my-6">
          <h4 className="font-bold text-amber-800 mb-2">Roger Federer's Secret</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">
            페더러의 사진을 보면 공이 떠난 후에도 타점 지점을 계속 주시하는 것을 볼 수 있습니다. 이는 단순히 멋이 아니라, 머리를 고정하여 회전축이 흔들리는 것을 방지하고 임팩트 정확도를 비약적으로 높이는 고도의 기술입니다.
          </p>
        </div>
      </section>

      <section id="regional-court-forehand-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 코트별 포핸드 전략</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          한국 테니스 실정상 하드코트와 인조잔디가 주를 이룹니다. 환경에 따른 미세 튜닝이 필요합니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 border rounded-lg bg-white dark:bg-slate-900">
            <h5 className="font-bold text-sm mb-1">수도권 (하드/케미컬)</h5>
            <p className="text-xs text-gray-500 italic">바운스가 정직하고 빠름 → 짧은 백스윙과 빠른 유닛 턴 준비 필수.</p>
          </div>
          <div className="p-4 border rounded-lg bg-white dark:bg-slate-900">
            <h5 className="font-bold text-sm mb-1">전국 (인조잔디/카페트)</h5>
            <p className="text-xs text-gray-500 italic">공이 낮게 깔리고 불규칙함 → 무릎을 더 낮추고 '떠오르는 공'을 가볍게 채는 감각.</p>
          </div>
        </div>
      </section>

      <section id="forehand-feel-recovery-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. 포핸드 임팩트 감각 회복 루틴</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          갑자기 감을 잃었을 때 수행하는 긴급 처방입니다.
        </p>
        <Card className="my-6">
          <CardContent className="p-6">
            <ul className="list-decimal pl-5 space-y-4 text-sm">
              <li><strong>미니 랠리 (5분):</strong> 베이스라인이 아닌 서비스 라인에서 툭툭 맞추며 타점 확인.</li>
              <li><strong>드롭 히팅:</strong> 공을 직접 손으로 떨어뜨리고 침으로써 내 몸의 최적 스윙 반경(Strike Zone) 재설정.</li>
              <li><strong>체인지업 훈련:</strong> 느린 공과 빠른 공을 번갈아 받아치며 '기다리는 능력' 회복.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="forehand-body-conversation" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. 결론: 리듬이 기술을 이긴다</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          화려한 폼보다 중요한 건 일정한 리듬입니다. 당신의 포핸드가 흔들린다면 스윙 궤적을 수정하기 전에 <strong>발의 위치와 리듬</strong>을 먼저 점검하세요. 0.1초의 여유가 생기면 그다음은 어떤 파워도 담아낼 수 있습니다.
        </p>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}
