import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisFootworkBasicsPage() {
  const title = "테니스 풋워크 기초: 코트 지배의 핵심 이동 기술";
  const excerpt = "테니스에서 50%의 승패를 좌우하는 풋워크 기술. 스플릿 스텝, 크로스오버, 사이드 셔플의 올바른 방법과 연습법을 배우고 코트 전체를 자유자재로 누비세요.";

  const toc = [
    { id: "footwork-importance", text: "풋워크의 중요성", depth: 2 as const },
    { id: "ready-position", text: "레디 포지션", depth: 2 as const },
    { id: "split-step", text: "스플릿 스텝", depth: 2 as const },
    { id: "crossover-step", text: "크로스오버 스텝", depth: 2 as const },
    { id: "side-shuffle", text: "사이드 셔플", depth: 2 as const },
    { id: "lateral-movement", text: "측면 이동", depth: 2 as const },
    { id: "recovery-steps", text: "회복 스텝", depth: 2 as const },
    { id: "court-coverage", text: "코트 커버리지 전략", depth: 2 as const },
    { id: "common-mistakes", text: "자주 하는 실수", depth: 2 as const },
    { id: "training-drills", text: "풋워크 훈련 드릴", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "풋워크가 왜 이렇게 중요한가요?",
      a: "테니스에서 공의 70%는 코너나 측면으로 오기 때문에 빠른 풋워크 없이는 제대로 된 타격이 불가능합니다. 좋은 풋워크는 반사 신경과 체력도 향상시킵니다."
    },
    {
      q: "스플릿 스텝은 어떻게 해야 하나요?",
      a: "공이 상대 라켓을 벗어나기 직전에 양발을 살짝 벌려 체중을 싣습니다. 착지와 동시에 다음 이동을 준비하는 것이 핵심입니다."
    },
    {
      q: "크로스오버 스텝이 어려워요",
      a: "먼저 천천히 연습하세요. 앞발을 뒤로 교차시키며 몸을 회전시키는 동작입니다. 처음에는 거울 앞에서 자세를 확인하며 연습하는 것이 좋습니다."
    },
    {
      q: "풋워크 연습은 어떻게 시작해야 하나요?",
      a: "기본 자세부터 시작하세요. 라인 밟기, 사다리 드릴, 미러링 연습 순으로 진행합니다. 매일 10-15분씩 꾸준히 연습하는 것이 중요합니다."
    },
    {
      q: "풋워크 때문에 무릎이 아파요",
      a: "충격 흡수가 잘 되는 테니스 전용 신발을 착용하세요. 무릎을 살짝 구부린 상태로 착지하고, 과도한 무리 없이 점진적으로 강도를 높이세요."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 테니스 풋워크는 단순한 이동이 아닌 전략적 위치 선점입니다. 스플릿 스텝부터 크로스오버까지 올바른 기술을 마스터하여 코트의 지배자가 되세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="footwork-importance">풋워크의 중요성</h2>
      <p>
        테니스에서 풋워크는 기술, 전략, 체력의 핵심입니다. 공의 70%가 코너나 측면으로 오기 때문에
        빠르고 정확한 풋워크 없이는 제대로 된 타격이 불가능합니다. 좋은 풋워크는 반사 신경을 기르고,
        체력 소모를 최소화하며, 상대의 약점을 효과적으로 공략할 수 있게 합니다.
        프로 선수들의 풋워크 기술은 일반 선수들과의 가장 큰 차이점 중 하나입니다.
      </p>

      <h2 id="ready-position">레디 포지션</h2>
      <p>
        모든 풋워크의 시작은 올바른 레디 포지션입니다. 발을 어깨 너비로 벌리고 무릎을 살짝 구부려
        중심을 낮게 유지합니다. 체중은 발바닥 전체에 고르게 분배하고, 언제든지 어느 방향으로든
        움직일 수 있는 준비 자세를 취합니다. 레디 포지션이 불안정하면 모든 풋워크가 어색해집니다.
        거울 앞에서 자신의 자세를 확인하며 교정하세요.
      </p>

      <h2 id="split-step">스플릿 스텝</h2>
      <p>
        스플릿 스텝은 테니스 풋워크의 기본 중의 기본입니다. 상대가 타격하는 순간에 양발을 15-20cm 정도
        살짝 벌려 체중을 앞으로 실은 후, 즉시 좁혀서 다음 이동을 준비합니다.
        스플릿 스텝의 타이밍이 늦으면 공에 늦게 도착하고, 너무 일찍 하면 에너지 소모가 큽니다.
        반복적인 연습으로 반사적인 동작으로 만들어야 합니다.
      </p>

      <h2 id="crossover-step">크로스오버 스텝</h2>
      <p>
        크로스오버 스텝은 측면으로 빠르게 이동할 때 사용하는 고급 기술입니다.
        이동 방향의 앞발을 뒤로 교차시키며 몸을 회전시켜 추진력을 얻습니다.
        크로스오버 스텝이 능숙해지면 코트의 측면을 자유자재로 누빌 수 있습니다.
        초반에는 천천히 연습하다가 점차 속도를 높여나가세요.
      </p>

      <h2 id="side-shuffle">사이드 셔플</h2>
      <p>
        사이드 셔플은 코트 측면을 따라 이동할 때 사용하는 기본 기술입니다.
        발을 교차시키지 않고 나란히 작은 스텝으로 이동하며, 체중을 이동 방향으로 실습니다.
        사이드 셔플은 스피드보다는 정확성과 균형이 중요합니다.
        넷 플레이 시 특히 유용하며, 상대의 드롭 샷에 효과적으로 대응할 수 있습니다.
      </p>

      <h2 id="lateral-movement">측면 이동</h2>
      <p>
        측면 이동은 크로스코트 타격 시 필수적인 기술입니다. 체중을 한쪽 발에 싣고 반대쪽으로 몸을 회전시키며
        이동합니다. 측면 이동이 능숙해야 코트 전체를 효과적으로 커버할 수 있습니다.
        측면 이동 시 시선은 공을 따라가며, 착지할 때는 충격을 흡수할 수 있도록 무릎을 구부립니다.
        측면 이동의 정확성이 곧 코트 커버리지의 핵심입니다.
      </p>

      <h2 id="recovery-steps">회복 스텝</h2>
      <p>
        회복 스텝은 타격 후 코트 중앙으로 돌아오는 기술입니다. 타격 방향과 반대로 빠르게 이동하며
        다음 타격을 준비합니다. 회복 스텝이 빠를수록 상대의 다음 타격에 효과적으로 대응할 수 있습니다.
        회복 스텝은 단순한 이동이 아닌 전략적 포지셔닝입니다. 항상 코트 중앙을 목표로 하되,
        상황에 따라 최적의 위치를 선택하세요.
      </p>

      <h2 id="court-coverage">코트 커버리지 전략</h2>
      <p>
        효과적인 코트 커버리지를 위해서는 상대의 타격 패턴을 예측하고 최적의 위치를 선점해야 합니다.
        상대가 백핸드를 선호하면 포핸드 측면에 더 많은 주의를 기울이고,
        드롭 샷을 자주 사용하면 네트 근처 포지셔닝을 강화합니다.
        코트 커버리지는 경험과 함께 발전하므로 다양한 상대와의 연습을 통해 익히세요.
      </p>

      <h2 id="common-mistakes">자주 하는 실수</h2>
      <p>
        초보자들이 가장 많이 하는 실수는 발을 너무 넓게 벌리거나 체중이 한쪽으로 치우치는 것입니다.
        또한, 공을 보는 데만 집중하여 자신의 발 위치를 잊는 경우가 많습니다.
        풋워크 연습 시에는 천천히 시작하여 올바른 자세를 익힌 후 속도를 높이는 것이 좋습니다.
        잘못된 습관이 들면 교정이 어려우므로 초반 연습이 특히 중요합니다.
      </p>

      <h2 id="training-drills">풋워크 훈련 드릴</h2>
      <p>
        효과적인 풋워크 훈련을 위해 라인 밟기, 사다리 드릴, 미러링 연습을 추천합니다.
        라인 밟기는 코트 라인을 따라 이동하며 균형 감각을 기르고, 사다리 드릴은 빠른 방향 전환을 훈련합니다.
        미러링 연습은 실제 경기 상황을 시뮬레이션하여 실전 감각을 익힐 수 있습니다.
        매일 10-15분씩 꾸준히 연습하는 것이 중요하며, 체력 테스트로 발전 상황을 확인하세요.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-footwork-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 풋워크 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/technique/footwork-fundamentals.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 풋워크 기초 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

