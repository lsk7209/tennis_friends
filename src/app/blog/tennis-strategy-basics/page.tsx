import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisStrategyBasicsPage() {
  const title = "테니스 전략 기초: 승리의 80%를 차지하는 전략";
  const excerpt = "기술이 20%라면 전략은 80%입니다. 상대 분석부터 포인트 운영까지 체계적인 전략으로 매 경기를 승리로 이끌어보세요.";

  const toc = [
    { id: "strategy-importance", text: "전략의 중요성", depth: 2 as const },
    { id: "opponent-analysis", text: "상대 분석", depth: 2 as const },
    { id: "serve-return-strategy", text: "서브 & 리턴 전략", depth: 2 as const },
    { id: "baseline-play", text: "베이스라인 플레이", depth: 2 as const },
    { id: "net-play-strategy", text: "네트 플레이 전략", depth: 2 as const },
    { id: "point-construction", text: "포인트 구성", depth: 2 as const },
    { id: "situational-play", text: "상황별 전략", depth: 2 as const },
    { id: "tactical-adjustments", text: "전술적 조정", depth: 2 as const },
    { id: "mental-aspects", text: "멘탈 전략", depth: 2 as const },
    { id: "practice-strategy", text: "전략 연습법", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "테니스에서 전략이 왜 이렇게 중요한가요?",
      a: "기술이 비슷한 선수들 사이에서는 전략이 승패를 좌우합니다. 올바른 전략으로 상대의 약점을 공략하고 자신의 강점을 살릴 수 있습니다."
    },
    {
      q: "상대를 어떻게 분석해야 하나요?",
      a: "서브 방향, 포핸드/백핸드 강약점, 이동 패턴, 체력 상태를 관찰하세요. 첫 몇 게임을 통해 패턴을 파악하고 전략을 세우세요."
    },
    {
      q: "내가 유리한 포인트는 언제인가요?",
      a: "상대가 네트에서 멀리 있을 때, 상대의 약한 쪽으로 공을 보낼 때, 상대가 지친 상태일 때가 유리합니다."
    },
    {
      q: "전술적 조정은 언제 해야 하나요?",
      a: "전략이 효과가 없을 때, 상대가 적응했을 때, 점수 차이가 날 때, 체력 상태가 변했을 때 조정하세요."
    },
    {
      q: "초보자가 전략을 어떻게 연습하나요?",
      a: "다양한 상대와 경기를 하며 패턴을 관찰하세요. 비디오 분석으로 자신의 플레이를 검토하고, 코치와 전략을 논의하세요."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 테니스는 체스 게임입니다. 전략적 사고로 매 포인트를 계획하고 상대를 압도하세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="strategy-importance">전략의 중요성</h2>
      <p>
        테니스에서 기술이 20%라면 전략은 80%입니다. 같은 기술을 가진 선수들 사이에서 승패를 좌우하는
        것은 전략적 판단입니다. 전략은 단순한 플레이가 아닌 상대를 분석하고 자신의 강점을 최대한
        활용하는 것입니다. 전략적 플레이어는 매 포인트를 계획하고 상대의 움직임을 예측합니다.
        전략은 테니스 마스터의 필수 요소입니다.
      </p>

      <h2 id="opponent-analysis">상대 분석</h2>
      <p>
        전략의 시작은 상대 분석입니다. 서브 방향과 강약점을 파악하고, 포핸드와 백핸드의 차이를
        분석하세요. 이동 패턴, 체력 상태, 멘탈 강인성도 중요합니다. 첫 몇 게임을 관찰하며
        패턴을 파악하세요. 상대 분석이 전략의 기초입니다. 정확한 분석이 승리의 첫걸음입니다.
        상대의 약점을 찾아 전략을 세우세요.
      </p>

      <h2 id="serve-return-strategy">서브 & 리턴 전략</h2>
      <p>
        서브는 경기의 시작이자 전략의 핵심입니다. 상대의 약한 쪽을 공략하는 방향 서브,
        상대를 움직이게 하는 각도 서브를 구사하세요. 리턴 시에는 상대 서브의 약점을 파악하고
        공격적인 리턴으로 주도권을 잡으세요. 서브 & 리턴 전략이 경기의 흐름을 좌우합니다.
        효과적인 서브로 상대를 압박하세요.
      </p>

      <h2 id="baseline-play">베이스라인 플레이</h2>
      <p>
        베이스라인 플레이는 테니스의 기본입니다. 깊이와 각도로 상대를 압박하고, 기회를 포착해
        네트로 접근하세요. 상대의 포핸드 측면을 공략하고, 백핸드를 약하게 하는 전략을 사용합니다.
        베이스라인 플레이는 인내심과 정확성이 핵심입니다. 꾸준한 랠리로 상대의 실수를 유도하세요.
        베이스라인 지배가 승리의 핵심입니다.
      </p>

      <h2 id="net-play-strategy">네트 플레이 전략</h2>
      <p>
        네트 플레이는 공격의 정점입니다. 상대의 약한 드롭 샷이나 로브를 포착해 네트로 이동하세요.
        네트에서는 발리로 상대의 타격 타이밍을 빼앗고, 앵글과 깊이로 득점을 노리세요.
        네트 플레이 전략이 능숙해지면 코트의 절반을 장악할 수 있습니다. 공격적인 네트 플레이로
        상대를 압도하세요.
      </p>

      <h2 id="point-construction">포인트 구성</h2>
      <p>
        각 포인트를 전략적으로 구성하세요. 첫 타격으로 상대를 이동시키고, 두 번째 타격으로
        약점을 공략하며, 세 번째 타격으로 마무리하세요. 포인트 구성은 상대의 위치와 체력을
        고려합니다. 전략적인 포인트 운영이 승리의 핵심입니다. 매 타격을 계획하세요.
        체계적인 포인트 구성이 강한 플레이를 만듭니다.
      </p>

      <h2 id="situational-play">상황별 전략</h2>
      <p>
        점수 상황에 따라 전략을 조정하세요. 듀스 상황에서는 안전한 플레이, 브레이크 포인트에서는
        과감한 공격을 구사합니다. 체력이 떨어지면 짧은 포인트 전략을, 유리할 때는 상대를 지치게
        하는 전략을 사용하세요. 상황 인식이 전략의 핵심입니다. 경기 흐름을 읽고 전략을
        조정하세요.
      </p>

      <h2 id="tactical-adjustments">전술적 조정</h2>
      <p>
        경기가 진행되면서 전략을 조정하세요. 상대가 적응하면 서브 방향을 바꾸거나 타격 패턴을
        변경합니다. 상대의 변화에 맞춰 자신의 플레이를 수정하세요. 전술적 유연성이 승리의
        핵심입니다. 경기가 길어지면 체력 관리 전략도 중요합니다. 끊임없이 전략을 발전시키세요.
      </p>

      <h2 id="mental-aspects">멘탈 전략</h2>
      <p>
        전략은 기술뿐 아니라 멘탈도 포함합니다. 상대를 압박하는 마인드셋, 위기 상황에서의
        침착함, 승리 패턴 유지 등이 중요합니다. 멘탈 전략이 흔들리지 않는 플레이를 만듭니다.
        긍정적인 자기 대화와 집중력이 전략 실행의 핵심입니다. 멘탈 강인성이 전략의 완성입니다.
        마음가짐이 플레이의 50%를 좌우합니다.
      </p>

      <h2 id="practice-strategy">전략 연습법</h2>
      <p>
        전략을 연습하기 위해 다양한 상대와 경기를 하세요. 비디오 분석으로 자신의 전략적 판단을
        검토하고, 코치와 전략을 논의하세요. 전략적 드릴을 통해 상황별 대응 능력을 기르세요.
        꾸준한 전략 연습이 실전에서 빛을 발합니다. 전략은 경험을 통해 발전합니다.
        지속적인 학습이 전략 마스터의 핵심입니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/03/tennis-strategy-basics/792345/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 전략 기초 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/strategy.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 전략 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}