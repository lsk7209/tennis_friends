import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisPressureSituationsPage() {
  const title = "테니스 압박 상황 멘탈 전략: 승리의 20%를 차지하는 정신력";
  const excerpt = "매치 포인트, 타이브레이크, 역전 상황에서 흔들리지 않는 멘탈. 호흡법, 루틴, 긍정적 사고로 압박을 기회로 전환하세요.";

  const toc = [
    { id: "pressure-psychology", text: "압박 상황의 심리학", depth: 2 as const },
    { id: "breathing-techniques", text: "호흡법으로 안정 찾기", depth: 2 as const },
    { id: "pre-shot-routine", text: "프리 샷 루틴 구축", depth: 2 as const },
    { id: "positive-thinking", text: "긍정적 사고 전환", depth: 2 as const },
    { id: "visualization", text: "시각화 훈련", depth: 2 as const },
    { id: "focus-techniques", text: "집중력 유지 방법", depth: 2 as const },
    { id: "break-point-defense", text: "브레이크 포인트 방어", depth: 2 as const },
    { id: "match-point-handling", text: "매치 포인트 극복", depth: 2 as const },
    { id: "mental-training", text: "압박 상황 훈련법", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "압박 상황에서 가장 흔한 실수는 무엇인가요?",
      a: "과도한 생각과 서두름입니다. '지금 꼭 이기야 해'라는 생각이 오히려 실수를 유발합니다. 평소 루틴을 따르는 것이 중요합니다."
    },
    {
      q: "호흡법은 어떻게 사용해야 하나요?",
      a: "4-4-4 법칙을 사용하세요. 4초 들이쉬고, 4초 참고, 4초 천천히 내쉬세요. 긴장될 때마다 이 호흡을 반복합니다."
    },
    {
      q: "프리 샷 루틴이 효과적인 이유는?",
      a: "루틴은 자동화된 행동으로, 압박 상황에서도 올바른 실행을 보장합니다. 라켓 스트링 확인, 공 튀기기, 집중 등 개인 루틴을 만드세요."
    },
    {
      q: "시각화 훈련은 어떻게 하나요?",
      a: "눈을 감고 성공 장면을 생생하게 상상하세요. 소리, 느낌, 감정까지 포함합니다. 매일 5-10분씩 반복하면 실제 상황에서 효과를 봅니다."
    },
    {
      q: "압박이 심할 때 집중력을 잃지 않는 방법은?",
      a: "한 포인트씩 집중하세요. '이번 포인트만'이라는 마인드셋으로 미래를 걱정하지 마세요. 코치나 관중의 시선을 무시하고 자신의 게임에 집중합니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 압박은 약한 자를 무너뜨리고 강한 자를 키웁니다. 체계적인 멘탈 전략으로 압박을 성장의 기회로 전환하세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="pressure-psychology">압박 상황의 심리학</h2>
      <p>
        압박 상황은 테니스에서 피할 수 없는 요소입니다. 심리학적으로 압박은 '투쟁-도피' 반응을 유발하며,
        이는 집중력을 저하시키고 근육 긴장을 증가시킵니다. 그러나 압박을 적절히 관리하면 오히려
        최고의 퍼포먼스를 발휘할 수 있습니다. 압박은 기술의 80%와 멘탈의 20%로 구성되며,
        이 20%가 승패를 좌우합니다. 압박 상황을 성장의 기회로 받아들이는 마인드셋이 중요합니다.
      </p>

      <h2 id="breathing-techniques">호흡법으로 안정 찾기</h2>
      <p>
        호흡은 마음과 몸을 연결하는 다리입니다. 압박 상황에서는 4-4-4 호흡법을 사용하세요.
        4초 동안 코로 들이쉬고, 4초 참고, 4초 동안 입으로 천천히 내쉬는 방법입니다.
        이 호흡은 교감신경을 진정시키고 이완을 유도합니다. 긴장될 때마다 이 호흡을 반복하며
        심박수를 안정시키세요. 호흡법은 즉각적인 효과가 있어 압박 상황에서 특히 유용합니다.
      </p>

      <h2 id="pre-shot-routine">프리 샷 루틴 구축</h2>
      <p>
        프리 샷 루틴은 압박 상황에서도 일관된 퍼포먼스를 보장합니다. 개인적인 루틴을 구축하세요.
        예를 들어, 라켓 스트링을 확인하고, 공을 한 번 튀기고, 목표 지점을 응시하는 순서입니다.
        루틴은 무의식적인 행동으로 전환되어 압박에서도 올바른 실행을 가능하게 합니다.
        루틴 구축에는 시간이 필요하지만, 일단 자리 잡으면 큰 도움이 됩니다.
      </p>

      <h2 id="positive-thinking">긍정적 사고 전환</h2>
      <p>
        압박 상황에서는 부정적 생각이 쇄도합니다. '실수하면 어쩌지' 대신 '기회를 잡자'로 전환하세요.
        긍정적 자기 대화가 중요합니다. '나는 할 수 있다', '하나의 포인트일 뿐' 같은 문구를 반복하며
        자신감을 유지하세요. 과거의 성공 경험을 떠올리는 것도 효과적입니다. 긍정적 사고는
        실제 퍼포먼스에 직접적인 영향을 미칩니다.
      </p>

      <h2 id="visualization">시각화 훈련</h2>
      <p>
        시각화는 실제 상황을 미리 경험하는 방법입니다. 눈을 감고 성공 장면을 생생하게 상상하세요.
        공의 궤적, 타격 순간의 느낌, 성공의 기쁨까지 세세하게 그려보세요. 시각화 훈련은
        압박 상황에서 자신감을 높이고, 실제 실행력을 향상시킵니다. 매일 5-10분씩 꾸준히
        연습하는 것이 중요합니다. 시각화는 마음의 근육을 키우는 효과적인 방법입니다.
      </p>

      <h2 id="focus-techniques">집중력 유지 방법</h2>
      <p>
        압박 상황에서 집중력을 유지하기 위해 '한 포인트씩' 전략을 사용하세요. 미래의 결과를
        걱정하지 말고 현재 포인트에만 집중합니다. 외부 소음이나 관중의 영향을 차단하고
        자신의 리듬을 유지하세요. 집중력을 유지하는 키는 '프로세스 지향'입니다.
        결과보다 과정에 집중하는 태도가 압박을 이겨내는 비결입니다.
      </p>

      <h2 id="break-point-defense">브레이크 포인트 방어</h2>
      <p>
        브레이크 포인트는 가장 압박스러운 상황입니다. 방어 시에는 안전한 플레이를 우선하세요.
        강력한 서브나 윈너보다는 상대의 실수를 유도하는 전략이 효과적입니다. 디페이스먼트나
        드롭 샷 같은 변화구를 사용해 상대의 리듬을 깨세요. 브레이크 포인트에서는
        과감한 승부보다는 안정적인 득점이 중요합니다. 방어 성공 경험이 자신감을 높입니다.
      </p>

      <h2 id="match-point-handling">매치 포인트 극복</h2>
      <p>
        매치 포인트는 테니스의 정점입니다. 여기서는 루틴이 생명을 구합니다. 평소처럼 준비하고,
        호흡을 안정시키며, 한 포인트씩 집중하세요. '꼭 이겨야 한다'는 생각이 오히려 실수를
        유발하므로, '최선을 다하자'는 마인드셋을 유지하세요. 매치 포인트 경험은 소중한
        자산이 됩니다. 승패에 관계없이 배운 점을 기억하세요.
      </p>

      <h2 id="mental-training">압박 상황 훈련법</h2>
      <p>
        압박 상황 훈련을 위해 시뮬레이션 게임을 활용하세요. '이 포인트가 매치 포인트'라고
        설정하고 연습합니다. 점수 차이를 의도적으로 만들거나, 관중 앞에서 플레이하는 것도
        효과적입니다. 멘탈 코치와 함께 훈련하거나, 저널링으로 자신의 패턴을 분석하세요.
        꾸준한 멘탈 트레이닝이 실제 경기에서 빛을 발합니다. 압박은 훈련으로 극복할 수 있습니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2020/01/mental-toughness-tennis-greats/794234/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 멘탈 강인성 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/mental-game.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 멘탈 게임 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

