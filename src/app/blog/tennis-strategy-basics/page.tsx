import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisStrategyBasicsPage() {
  const title = "테니스 전략 기초: 승리의 80%는 전략이다";
  const excerpt = "테니스에서 기술 못지않게 중요한 전략적 사고. 상대 분석, 코트 커버리지, 패턴 플레이, 멘탈 전략까지 테니스 승리를 위한 전략적 접근법을 배우고 실전에서 적용해보세요.";

  const toc = [
    { id: "strategy-importance", text: "전략의 중요성", depth: 2 as const },
    { id: "opponent-analysis", text: "상대 분석", depth: 2 as const },
    { id: "court-coverage", text: "코트 커버리지", depth: 2 as const },
    { id: "serve-return", text: "서브와 리턴 전략", depth: 2 as const },
    { id: "pattern-play", text: "패턴 플레이", depth: 2 as const },
    { id: "net-play", text: "네트 플레이 전략", depth: 2 as const },
    { id: "defensive-play", text: "수비 전략", depth: 2 as const },
    { id: "aggressive-play", text: "공격 전략", depth: 2 as const },
    { id: "mental-strategy", text: "멘탈 전략", depth: 2 as const },
    { id: "adapting", text: "상황 적응 전략", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "테니스에서 전략이 왜 중요한가요?",
      a: "기술이 비슷한 수준이라면 전략적 선택이 승패를 좌우합니다. 올바른 전략으로 상대의 약점을 공략하고 자신의 강점을 살릴 수 있습니다."
    },
    {
      q: "상대 분석은 어떻게 해야 하나요?",
      a: "경기 초반 상대의 서브 패턴, 선호하는 타격 방향, 약한 타격을 관찰하세요. 상대 분석 도구를 활용하면 체계적인 분석이 가능합니다."
    },
    {
      q: "패턴 플레이의 핵심은 무엇인가요?",
      a: "상대의 예측을 빗나가게 하는 것이 핵심입니다. 같은 방향으로만 타격하지 말고 크로스코트와 다운 더 라인을 번갈아 사용하세요."
    },
    {
      q: "네트로 올라갈 타이밍은 언제인가요?",
      a: "상대의 타격이 짧거나 약할 때, 또는 상대를 네트로 유인할 수 있는 상황에서 올라갑니다. 무작정 올라가지 말고 상황을 판단하세요."
    },
    {
      q: "경기가 안 풀릴 때 전략은?",
      a: "기본으로 돌아가세요. 안정적인 타격을 유지하며 상대의 실수를 유도하고, 서브를 적극적으로 활용하세요. 멘탈 트레이닝으로 침착함을 유지합니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 테니스 승리의 80%는 전략입니다. 상대를 분석하고 자신의 강점을 살리며, 상황에 맞는 최적의 플레이를 선택하세요. 전략적 사고로 경기력을 한 단계 높이세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="strategy-importance">전략의 중요성</h2>
      <p>
        테니스에서 기술적 능력이 비슷한 수준이라면 전략적 선택이 승패를 좌우합니다.
        올바른 전략으로 상대의 약점을 공략하고 자신의 강점을 최대한 살릴 수 있습니다.
        프로 선수들의 경기를 보면 기술 못지않게 전략적 판단이 뛰어난 것을 알 수 있습니다.
        전략적 사고는 꾸준한 관찰과 경험을 통해 발전시킬 수 있습니다.
      </p>

      <h2 id="opponent-analysis">상대 분석</h2>
      <p>
        상대 분석은 모든 전략의 출발점입니다. 상대의 서브 패턴, 선호하는 타격 방향,
        약한 타격(포핸드/백핸드)을 관찰하고 분석합니다. 상대 분석 도구를 활용하면
        체계적인 분석이 가능하며, 이를 바탕으로 맞춤 전략을 수립할 수 있습니다.
        경기가 진행될수록 상대의 패턴을 파악하여 전략을 조정하세요.
      </p>

      <h2 id="court-coverage">코트 커버리지</h2>
      <p>
        코트 전체를 효과적으로 커버하는 것이 중요합니다. 상대의 타격 방향을 예측하고
        최적의 위치를 선점하는 능력이 승패를 좌우합니다. 풋워크를 개선하고
        상대의 패턴을 파악하여 코트 포지셔닝을 최적화하세요.
        코트 커버리지가 좋으면 상대의 강력한 타격도 효과적으로 대응할 수 있습니다.
      </p>

      <h2 id="serve-return">서브와 리턴 전략</h2>
      <p>
        서브는 포인트의 시작이자 강력한 전략 무기입니다. 첫 서브는 에이스를 노리고,
        세컨드 서브는 안전하게 득점을 유지하는 전략을 취합니다.
        리턴 시에는 상대의 서브 방향을 예측하고 적절한 리턴으로 상대의 리듬을 깨세요.
        서브와 리턴 전략이 경기 주도권을 좌우합니다.
      </p>

      <h2 id="pattern-play">패턴 플레이</h2>
      <p>
        패턴 플레이는 상대의 예측을 빗나가게 하는 전략입니다. 같은 방향으로만 타격하지 말고
        크로스코트와 다운 더 라인을 번갈아 사용하세요. 드롭 샷과 로빙을 적절히 섞어
        상대의 타이밍을 방해합니다. 패턴 플레이가 효과적이면 상대의 실수를 유도할 수 있습니다.
      </p>

      <h2 id="net-play">네트 플레이 전략</h2>
      <p>
        네트 플레이는 공격적인 전략으로 상대를 압박할 수 있습니다. 상대의 타격이 짧거나 약할 때
        네트로 올라가 발리로 상대를 압박하세요. 하지만 무작정 올라가지 말고 타이밍을 파악하는 것이 중요합니다.
        네트 플레이가 성공하면 상대의 약점을 효과적으로 공략할 수 있습니다.
      </p>

      <h2 id="defensive-play">수비 전략</h2>
      <p>
        수비 전략은 상대의 강력한 타격을 효과적으로 대응하는 방법입니다.
        코트 전체를 커버하며 상대의 타격을 예측하고, 로빙과 슬라이스로 시간을 벌어 반격 기회를 노립니다.
        수비 전략이 탄탄하면 상대의 공격을 효과적으로 차단할 수 있습니다.
        체력 관리와 함께 수비력을 강화하세요.
      </p>

      <h2 id="aggressive-play">공격 전략</h2>
      <p>
        공격 전략은 상대를 압도하는 적극적인 플레이입니다. 강력한 타격으로 상대를 코트 뒤로 밀어내고,
        네트 플레이로 마무리하는 전략입니다. 공격 전략이 효과적이면 경기를 주도할 수 있지만,
        실수 확률이 높아지므로 상황 판단이 중요합니다. 자신의 강점을 살리는 공격 전략을 구사하세요.
      </p>

      <h2 id="mental-strategy">멘탈 전략</h2>
      <p>
        멘탈 전략은 경기 중 침착함을 유지하고 상대의 심리를 흔드는 방법입니다.
        긍정적인 자기 대화로 자신감을 유지하고, 상대의 실수를 유도하는 플레이를 합니다.
        멘탈 트레이닝 프로그램을 활용하여 압박 상황에서의 대처 능력을 기르세요.
        멘탈 전략이 탄탄하면 경기력의 변동폭을 줄일 수 있습니다.
      </p>

      <h2 id="adapting">상황 적응 전략</h2>
      <p>
        경기가 진행될수록 상황을 파악하고 전략을 조정하는 능력이 중요합니다.
        점수가 어떻게 변하는지, 상대의 컨디션은 어떤지, 코트 상태는 어떤지를 지속적으로 관찰하세요.
        상황에 맞는 전략적 선택이 승리의 핵심입니다. 유연한 전략적 사고로 다양한 상황에 대응하세요.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-strategy-guide/123456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 전략 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/strategy/tactical-play.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 전술 플레이 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
