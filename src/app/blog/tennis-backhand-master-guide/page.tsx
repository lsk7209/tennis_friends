import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisBackhandMasterGuidePage() {
  const title = "테니스 백핸드 마스터 가이드: 약점을 강점으로 전환";
  const excerpt = "백핸드가 약한 선수는 절대 성장할 수 없습니다. 양손/한손 백핸드 기술 완벽 가이드로 안정적이고 강력한 백핸드를 만들어 보세요.";

  const toc = [
    { id: "backhand-importance", text: "백핸드의 중요성", depth: 2 as const },
    { id: "two-handed-backhand", text: "양손 백핸드", depth: 2 as const },
    { id: "one-handed-backhand", text: "한손 백핸드", depth: 2 as const },
    { id: "backhand-grip", text: "백핸드 그립", depth: 2 as const },
    { id: "stance-setup", text: "스탠스 설정", depth: 2 as const },
    { id: "stroke-mechanics", text: "타격 메커니즘", depth: 2 as const },
    { id: "slice-backhand", text: "슬라이스 백핸드", depth: 2 as const },
    { id: "backhand-volleys", text: "백핸드 발리", depth: 2 as const },
    { id: "troubleshooting", text: "문제 해결", depth: 2 as const },
    { id: "advanced-training", text: "고급 훈련", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "양손 백핸드와 한손 백핸드 중 어느 것이 좋나요?",
      a: "둘 다 장단점이 있습니다. 양손 백핸드는 안정적이고 배우기 쉽지만, 한손 백핸드는 더 많은 스핀과 다양성을 제공합니다. 초보자는 양손부터 시작하세요."
    },
    {
      q: "백핸드가 자꾸 짧아집니다",
      a: "공을 앞에서 치고 있습니다. 컨택 포인트를 몸 앞이 아닌 몸 옆으로 옮기세요. 또한 팔로우 스루를 충분히 하는 것도 중요합니다."
    },
    {
      q: "백핸드 그립은 어떻게 잡아야 하나요?",
      a: "양손 백핸드의 경우 위쪽 손은 컨티넨털, 아래쪽 손은 이스턴 그립입니다. 한손 백핸드는 이스턴 그립을 기본으로 하되 상황에 따라 조정하세요."
    },
    {
      q: "백핸드 파워가 부족해요",
      a: "코어 회전을 활용하세요. 몸통을 공쪽으로 회전시키며 타격하면 자연스러운 파워가 나옵니다. 또한 스트링 장력을 낮추는 것도 도움이 됩니다."
    },
    {
      q: "슬라이스 백핸드를 어떻게 치나요?",
      a: "그립을 살짝 돌려 슬라이스 각도를 만들고, 공을 살짝 아래로 칩니다. 슬라이스는 상대의 타격 타이밍을 늦추는 데 효과적입니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 백핸드는 포핸드의 반쪽이 아닌 독립된 기술입니다. 체계적인 훈련으로 백핸드 약점을 강점으로 전환하세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="backhand-importance">백핸드의 중요성</h2>
      <p>
        백핸드는 테니스 타격의 30%를 차지하지만, 그 중요성은 50% 이상입니다. 백핸드가 약한 선수는
        상대의 포핸드 측 공격에 취약해집니다. 양손 백핸드와 한손 백핸드 중 자신에게 맞는 스타일을
        선택하고, 꾸준한 연습으로 완성하세요. 백핸드가 강해지면 코트 전체를 장악할 수 있습니다.
        백핸드는 단순한 방어 기술이 아닌 공격의 시작입니다.
      </p>

      <h2 id="two-handed-backhand">양손 백핸드</h2>
      <p>
        양손 백핸드는 안정성과 배우기 쉬운 점이 장점입니다. 위쪽 손(주로 오른손잡이의 경우 왼손)은
        컨티넨털 그립으로 방향을, 아래쪽 손은 이스턴 그립으로 스핀을 담당합니다. 양손 모두 라켓을
        잡되 아래쪽 손이 주도적으로 타격합니다. 양손 백핸드는 코어 회전을 자연스럽게 활용할 수 있어
        파워가 좋습니다. 초보자에게 추천하는 백핸드 스타일입니다.
      </p>

      <h2 id="one-handed-backhand">한손 백핸드</h2>
      <p>
        한손 백핸드는 기술적이고 세련된 느낌을 줍니다. 이스턴 그립을 기본으로 하되 상황에 따라
        조정합니다. 한손 백핸드는 양손보다 스핀이 잘 걸리고 다양한 각도의 타격이 가능합니다.
        다만 안정성이 떨어지고 배우기 어렵다는 단점이 있습니다. 한손 백핸드를 마스터하면
        테니스 실력이 한 단계 올라갑니다. 꾸준한 연습이 필요합니다.
      </p>

      <h2 id="backhand-grip">백핸드 그립</h2>
      <p>
        백핸드 그립은 타격 스타일에 따라 다릅니다. 양손 백핸드의 경우 위쪽 손은 컨티넨털 그립,
        아래쪽 손은 이스턴 그립을 사용합니다. 한손 백핸드는 이스턴 그립을 기본으로 하되,
        슬라이스 시에는 살짝 회전시킵니다. 그립이 올바르지 않으면 타격이 불안정해집니다.
        거울 앞에서 그립을 확인하며 연습하세요. 올바른 그립이 백핸드의 기초입니다.
      </p>

      <h2 id="stance-setup">스탠스 설정</h2>
      <p>
        백핸드 스탠스는 공의 방향에 따라 조정합니다. 크로스코트 백핸드에는 사이드 스탠스를,
        다운 더 라인 백핸드에는 오픈 스탠스를 사용합니다. 체중은 뒤쪽 발에 70% 정도 두고,
        앞쪽 발은 컨택 포인트를 향해 살짝 틀어줍니다. 스탠스가 불안정하면 백핸드도 불안정해집니다.
        스탠스 연습부터 시작하세요.
      </p>

      <h2 id="stroke-mechanics">타격 메커니즘</h2>
      <p>
        백핸드 타격은 코어 회전이 핵심입니다. 몸통을 공쪽으로 회전시키며 라켓을 백스윙하고,
        컨택 포인트에서 회전을 가속화합니다. 팔로우 스루는 공 방향으로 자연스럽게 이어지도록 하세요.
        타격 메커니즘이 올바르지 않으면 파워와 컨트롤 모두 떨어집니다. 천천히 동작을分解하여
        연습하는 것이 좋습니다.
      </p>

      <h2 id="slice-backhand">슬라이스 백핸드</h2>
      <p>
        슬라이스 백핸드는 방어와 공격 모두에 유용합니다. 그립을 살짝 회전시켜 슬라이스 각도를 만들고,
        공을 아래로 칩니다. 슬라이스는 공의 속도를 떨어뜨리고 바운스를 낮춰 상대의 타격 타이밍을
        늦출 수 있습니다. 또한 코트 깊숙이 보내기에도 효과적입니다. 슬라이스 기술은 백핸드의
        다양성을 더해줍니다.
      </p>

      <h2 id="backhand-volleys">백핸드 발리</h2>
      <p>
        백핸드 발리는 네트 플레이의 핵심입니다. 발리를 할 때는 라켓을 낮게 유지하고,
        공이 바운스되기 전에 타격하세요. 백핸드 발리는 양손으로 하는 것이 안정적입니다.
        발리 시에는 손목을 사용해 방향을 조절하고, 팔로우 스루를 최소화합니다. 백핸드 발리가
        능숙해지면 네트 플레이가 강해집니다.
      </p>

      <h2 id="troubleshooting">문제 해결</h2>
      <p>
        백핸드가 약한 선수들의 공통적인 문제는 컨택 포인트가 너무 앞에 있다는 것입니다.
        컨택 포인트를 몸 옆으로 옮기세요. 또한 코어 회전을 충분히 하지 않아 파워가 부족한 경우도 많습니다.
        몸통 전체를 사용한 타격을 연습하세요. 백핸드 문제는 대부분 자세와 타이밍에서 비롯됩니다.
        천천히 교정하는 것이 중요합니다.
      </p>

      <h2 id="advanced-training">고급 훈련</h2>
      <p>
        백핸드 마스터를 위한 고급 훈련으로는 크로스코트 백핸드 랠리, 다운 더 라인 백핸드,
        백핸드 슬라이스 연습을 추천합니다. 또한 피드 머신을 활용한 반복 훈련도 효과적입니다.
        고급 훈련은 기본기가 탄탄할 때 시작하세요. 꾸준한 고급 훈련이 백핸드를 프로급으로
        만들어줍니다. 매일 20-30분씩 집중하세요.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2020/02/backhand-technique-guide/798456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">백핸드 기술 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/technique/backhand-fundamentals.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 백핸드 기초 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

