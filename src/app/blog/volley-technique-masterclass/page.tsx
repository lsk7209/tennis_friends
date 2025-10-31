import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function VolleyTechniqueMasterclassPage() {
  const title = "발리 기술 마스터클래스: 네트 플레이의 핵심 전략";
  const excerpt = "발리는 네트 근처에서 하는 타격으로 스피드와 정확성이 생명입니다. 포핸드 발리, 백핸드 발리, 하프 발리, 스매시 등 다양한 발리 기술과 상황별 전략, 연습 방법을 완벽하게 다룹니다.";

  const toc = [
    { id: "volley-importance", text: "발리의 중요성", depth: 2 as const },
    { id: "forehand-volley", text: "포핸드 발리 기술", depth: 2 as const },
    { id: "backhand-volley", text: "백핸드 발리 기술", depth: 2 as const },
    { id: "half-volley", text: "하프 발리", depth: 2 as const },
    { id: "overhead-smash", text: "오버헤드 스매시", depth: 2 as const },
    { id: "positioning", text: "네트 포지셔닝", depth: 2 as const },
    { id: "approach-play", text: "어프로치 플레이", depth: 2 as const },
    { id: "defensive-volley", text: "수비적 발리", depth: 2 as const },
    { id: "volley-drills", text: "발리 연습 드릴", depth: 2 as const },
    { id: "common-mistakes", text: "자주 하는 실수", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "발리에서 가장 중요한 것은 무엇인가요?",
      a: "발리에서는 스피드와 정확성이 가장 중요합니다. 공이 바운스되기 전에 타격해야 하며, 라켓 헤드를 공보다 낮게 유지하는 것이 핵심입니다."
    },
    {
      q: "포핸드 발리와 백핸드 발리의 차이점은?",
      a: "포핸드 발리는 강력하고 안정적이며, 백핸드 발리는 방향 전환에 유리합니다. 상황에 따라 적절한 발리를 선택하세요."
    },
    {
      q: "네트에서 언제 올라가야 하나요?",
      a: "상대의 타격이 짧거나 약할 때, 또는 상대를 네트로 유인할 수 있는 상황에서 올라갑니다. 무작정 올라가지 말고 타이밍을 파악하세요."
    },
    {
      q: "발리 연습은 어떻게 해야 하나요?",
      a: "네트 근처에서 천천히 시작하여 점차 속도를 높입니다. 다양한 각도와 방향의 공을 연습하고, 반사 신경을 기르세요."
    },
    {
      q: "발리가 약한데 개선할 수 있나요?",
      a: "네트 포지셔닝과 스윙 기술부터 교정하세요. 매일 15-20분씩 발리 전용 연습을 하고, 상대와의 연습 게임으로 실전 감각을 익히세요."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 발리는 테니스에서 가장 빠르고 정확해야 하는 기술로, 네트 포지셔닝과 타이밍이 승패를 좌우합니다. 다양한 발리 기술을 상황에 맞게 구사할 수 있도록 연습하세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="volley-importance">발리의 중요성</h2>
      <p>
        발리는 네트 근처에서 하는 타격으로 테니스에서 가장 빠르고 정확해야 하는 기술입니다.
        발리가 강하면 상대의 공격을 효과적으로 차단하고, 경기를 주도할 수 있습니다.
        프로 선수들의 경기를 보면 발리 기술의 차이가 승패를 좌우하는 것을 자주 볼 수 있습니다.
        꾸준한 연습으로 누구나 발리 실력을 향상시킬 수 있습니다.
      </p>

      <h2 id="forehand-volley">포핸드 발리 기술</h2>
      <p>
        포핸드 발리는 가장 기본적이고 강력한 발리입니다. 라켓을 몸 앞에 두고, 팔꿈치를 몸에 붙인 채
        컴팩트한 스윙으로 타격합니다. 공이 바운스되기 전에 타격하는 것이 중요하며,
        라켓 헤드를 공보다 낮게 유지하여 위에서 아래로 스윙합니다.
        포핸드 발리는 강력한 타격으로 상대를 압박할 수 있습니다.
      </p>

      <h2 id="backhand-volley">백핸드 발리 기술</h2>
      <p>
        백핸드 발리는 방향 전환에 유리하며, 특히 크로스코트 타격에 효과적입니다.
        한손 백핸드의 경우 손목 사용이 중요하고, 양손 백핸드의 경우 안정성이 높아집니다.
        백핸드 발리는 상대의 강력한 타격을 피하고 반격할 때 유용합니다.
        스윙은 포핸드 발리보다 더 컴팩트하게 유지해야 합니다.
      </p>

      <h2 id="half-volley">하프 발리</h2>
      <p>
        하프 발리는 공이 살짝 바운스된 후 타격하는 기술로, 매우 어려운 기술 중 하나입니다.
        공의 바운스를 예측하여 정확한 타이밍에 타격해야 하며, 보통 수비 상황에서 사용됩니다.
        하프 발리가 성공하면 상대의 강력한 타격을 효과적으로 차단할 수 있습니다.
        꾸준한 연습으로 타이밍 감각을 익혀야 합니다.
      </p>

      <h2 id="overhead-smash">오버헤드 스매시</h2>
      <p>
        오버헤드 스매시는 공이 높게 올라왔을 때 사용하는 강력한 타격입니다.
        양손으로 라켓을 잡고 머리 위로 올라간 공을 아래로 내리찍는 동작입니다.
        스매시의 성공률을 높이기 위해서는 올바른 준비 자세와 타이밍이 중요합니다.
        너무 높거나 낮은 공에서는 사용하지 말고, 적절한 높이에서 구사하세요.
      </p>

      <h2 id="positioning">네트 포지셔닝</h2>
      <p>
        네트 포지셔닝은 발리의 절반을 차지한다고 해도 과언이 아닙니다.
        너무 네트에 붙어 있으면 상대의 로빙에 취약하고, 너무 뒤로 물러나면 발리의 효과가 떨어집니다.
        일반적으로 네트에서 1-2미터 뒤쪽에 위치하는 것이 이상적이며,
        상황에 따라 포지션을 조정하는 것이 중요합니다.
      </p>

      <h2 id="approach-play">어프로치 플레이</h2>
      <p>
        어프로치 플레이는 네트로 올라가는 전략적 플레이입니다.
        상대의 타격이 짧거나 약할 때, 또는 상대를 네트로 유인할 수 있는 상황에서 사용합니다.
        어프로치 샷 후에는 발리로 상대의 반격을 차단할 수 있는 준비 자세를 취합니다.
        무작정 올라가지 말고 타이밍을 파악하는 것이 핵심입니다.
      </p>

      <h2 id="defensive-volley">수비적 발리</h2>
      <p>
        수비적 발리는 상대의 강력한 타격을 차단하기 위한 기술입니다.
        공을 살짝 방향만 바꿔 상대 코트 안쪽으로 리턴하거나, 높게 로빙하여 시간을 벌 수 있습니다.
        수비적 발리는 공격적 발리보다 안전하며, 실수를 최소화할 수 있습니다.
        상황에 따라 적절한 수비 전략을 선택하세요.
      </p>

      <h2 id="volley-drills">발리 연습 드릴</h2>
      <p>
        발리 연습은 네트 근처에서 시작합니다. 천천히 공을 주고받으며 정확성을 기르고,
        점차 속도를 높여가는 방식으로 연습합니다. 다양한 각도와 방향의 공을 연습하여
        반사 신경을 기르는 것이 중요합니다. 매일 15-20분씩 꾸준히 연습하는 것을 추천합니다.
      </p>

      <h2 id="common-mistakes">자주 하는 실수</h2>
      <p>
        발리에서 가장 흔한 실수는 공이 바운스된 후 타격하는 것입니다. 발리는 공이 바운스되기 전에 타격해야 합니다.
        또한, 라켓 헤드를 너무 높게 들거나 스윙이 너무 큰 것도 문제입니다.
        기본 자세를 유지하고 컴팩트한 스윙을 유지하는 것이 중요합니다.
        꾸준한 연습으로 이러한 실수를 교정할 수 있습니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/volley-techniques/567890/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">발리 기술 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/how-to/net-play-volley.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 네트 플레이 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
