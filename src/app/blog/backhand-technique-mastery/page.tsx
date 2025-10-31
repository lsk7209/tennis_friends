import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function BackhandTechniqueMasteryPage() {
  const title = "백핸드 기술 마스터: 약점을 강점으로 바꾸는 완벽 가이드";
  const excerpt = "백핸드는 많은 선수들의 약점인 동시에 강력한 무기가 될 수 있는 기술입니다. 한손 백핸드와 양손 백핸드의 장단점, 올바른 자세, 연습 방법까지 백핸드 마스터하기 위한 모든 것을 다룹니다.";

  const toc = [
    { id: "introduction", text: "백핸드의 중요성", depth: 2 as const },
    { id: "one-handed-vs-two-handed", text: "한손 vs 양손 백핸드 비교", depth: 2 as const },
    { id: "grip-guide", text: "그립과 준비 자세", depth: 2 as const },
    { id: "stance-footwork", text: "스탠스와 풋워크", depth: 2 as const },
    { id: "swing-mechanics", text: "스윙 메커니즘", depth: 2 as const },
    { id: "slice-technique", text: "슬라이스 백핸드", depth: 2 as const },
    { id: "volley-backhand", text: "발리 상황의 백핸드", depth: 2 as const },
    { id: "common-problems", text: "자주 발생하는 문제와 해결법", depth: 2 as const },
    { id: "practice-drills", text: "효과적인 연습 드릴", depth: 2 as const },
    { id: "strengthening", text: "백핸드 강화 훈련", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "한손 백핸드와 양손 백핸드 중 어느 것이 좋나요?",
      a: "한손 백핸드는 파워와 다양성이 뛰어나지만 기술 습득이 어려우며, 양손 백핸드는 안정적이고 배우기 쉽지만 파워가 상대적으로 약합니다. 초보자는 양손 백핸드부터 시작하는 것을 추천합니다."
    },
    {
      q: "백핸드가 약한데 어떻게 강화할 수 있나요?",
      a: "기본 자세부터 교정하고, 미러링 연습과 크로스코트 타격을 반복하세요. 체력 테스트로 현재 실력을 측정하고, 목표 설정 도구로 단계별 목표를 세우는 것도 도움이 됩니다."
    },
    {
      q: "백핸드 슬라이스는 언제 사용해야 하나요?",
      a: "공이 낮게 오거나 상대의 포핸드를 피하고 싶을 때 사용합니다. 슬라이스는 공의 속도를 줄이고 회전을 주어 상대의 리턴을 어렵게 만듭니다."
    },
    {
      q: "백핸드 연습을 위한 효과적인 드릴은?",
      a: "벽 타격 연습, 크로스코트 타격, 연속 백핸드 드릴을 추천합니다. 매일 20-30분씩 꾸준히 연습하고, 올바른 자세를 유지하는 것이 중요합니다."
    },
    {
      q: "백핸드 부상을 예방하는 방법은?",
      a: "충분한 워밍업, 올바른 자세 유지, 과도한 무리 피하기가 중요합니다. 손목이나 팔꿈치 통증이 있으면 즉시 전문가의 상담을 받으세요."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 백핸드는 포핸드 못지않게 중요한 기술로, 올바른 자세와 꾸준한 연습으로 누구나 향상시킬 수 있습니다. 한손과 양손 백핸드의 특징을 파악하고 자신의 플레이 스타일에 맞는 기술을 선택하세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="introduction">백핸드의 중요성</h2>
      <p>
        백핸드는 테니스 타격 기술 중 가장 어려운 것으로 알려져 있지만, 마스터하면 강력한 무기가 됩니다.
        많은 선수들이 백핸드를 약점으로 여기지만, 올바른 기술로 포핸드만큼 강력하고 정확한 타격을 구사할 수 있습니다.
        백핸드가 강하면 코트 전체를 커버할 수 있어 전략적 우위를 점할 수 있습니다.
      </p>

      <h2 id="one-handed-vs-two-handed">한손 vs 양손 백핸드 비교</h2>
      <p>
        한손 백핸드는 파워와 다양성 면에서 우수하며, 슬라이스나 드롭 샷 같은 변화구를 쉽게 구사할 수 있습니다.
        반면 양손 백핸드는 안정성이 높아 초보자가 배우기 쉽고, 실수 확률이 적습니다.
        프로 선수 중 로저 페더러는 한손 백핸드의 대가로 알려져 있으며, 노박 조코비치는 양손 백핸드로 강력한 타격을 구사합니다.
      </p>

      <h2 id="grip-guide">그립과 준비 자세</h2>
      <p>
        한손 백핸드의 그립은 이스턴 백핸드 그립을 기본으로 하되, 상황에 따라 조정합니다.
        양손 백핸드의 경우 위쪽 손은 컨티넨털 그립, 아래쪽 손은 이스턴 그립을 사용합니다.
        준비 자세에서는 라켓을 몸 앞에 두고, 손목을 편안하게 유지하는 것이 중요합니다.
      </p>

      <h2 id="stance-footwork">스탠스와 풋워크</h2>
      <p>
        백핸드 타격 시 발 위치는 공의 방향을 향해 자연스럽게 회전해야 합니다.
        한손 백핸드의 경우 앞발을 공 방향으로 향하게 하고, 양손 백핸드의 경우 발을 더 넓게 벌려 안정성을 확보합니다.
        스플릿 스텝으로 시작하여 적절한 타이밍에 발을 이동시키는 풋워크가 중요합니다.
      </p>

      <h2 id="swing-mechanics">스윙 메커니즘</h2>
      <p>
        백핸드 스윙은 포핸드보다 더 컴팩트하게 이루어져야 합니다. 라켓을 뒤로 가져갈 때는 팔꿈치를 몸에 붙이고,
        타격 시점에서는 손목을 고정하여 공에 정확하게 맞춥니다. 팔로우 스루는 타격 방향으로 자연스럽게 이어져야 합니다.
      </p>

      <h2 id="slice-technique">슬라이스 백핸드</h2>
      <p>
        슬라이스 백핸드는 공의 속도를 줄이고 회전을 주어 상대의 타격 타이밍을 흔듭니다.
        그립을 살짝 조정하여 공의 아래쪽을 스치듯 타격하며, 팔로우 스루는 낮게 유지합니다.
        방어적인 상황이나 상대의 공격을 차단할 때 효과적입니다.
      </p>

      <h2 id="volley-backhand">발리 상황의 백핸드</h2>
      <p>
        네트에서의 백핸드 발리는 빠르고 정확해야 합니다. 라켓 헤드를 공보다 약간 높게 유지하고,
        팔꿈치를 몸에 붙인 채 컴팩트한 스윙으로 타격합니다. 발리는 스피드가 생명으로,
        백핸드 발리의 정확도가 높으면 상대의 네트 플레이를 효과적으로 차단할 수 있습니다.
      </p>

      <h2 id="common-problems">자주 발생하는 문제와 해결법</h2>
      <p>
        많은 선수들이 겪는 백핸드 문제로는 타격 시점 놓치기, 손목 사용 과다, 자세 불안정 등이 있습니다.
        이러한 문제를 해결하기 위해서는 기본 자세부터 차근차근 교정하고, 느린 공부터 시작하여 점차 속도를 높이는 연습이 필요합니다.
        체력 관리와 멘탈 트레이닝도 백핸드 향상에 도움이 됩니다.
      </p>

      <h2 id="practice-drills">효과적인 연습 드릴</h2>
      <p>
        백핸드 향상을 위한 효과적인 드릴로는 벽 타격 연습, 크로스코트 타격, 미러링 연습 등이 있습니다.
        특히 백핸드 전용 드릴인 '백핸드 체이스' 연습은 실전 감각을 기르는 데 효과적입니다.
        매일 20-30분씩 꾸준히 연습하는 것이 중요하며, 올바른 자세를 유지하는 데 집중하세요.
      </p>

      <h2 id="strengthening">백핸드 강화 훈련</h2>
      <p>
        백핸드 강화를 위해서는 코어 근력과 손목, 팔 근력을 강화하는 훈련이 필요합니다.
        웨이트 트레이닝과 함께 테니스 전용 체력 테스트로 현재 실력을 측정하고,
        목표 설정 도구로 단계별 목표를 세워 체계적으로 훈련하세요.
        꾸준한 연습과 올바른 자세 유지가 백핸드 마스터의 핵심입니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/mastering-the-backhand/789012/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">백핸드 마스터 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/how-to/backhand-techniques.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 백핸드 기술 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
