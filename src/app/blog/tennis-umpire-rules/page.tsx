import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisUmpireRulesPage() {
  const title = "테니스 심판 규칙 완벽 가이드: 공정하고 즐거운 경기를 위해";
  const excerpt = "테니스 심판의 역할과 주요 규칙을 알아보세요. 풋폴트, 더블 바운스, 시간 초과부터 행위 위반까지 경기 진행을 원활하게 하는 방법들.";

  const toc = [
    { id: "umpire-role", text: "심판의 역할", depth: 2 as const },
    { id: "scoring-system", text: "점수 시스템", depth: 2 as const },
    { id: "service-rules", text: "서브 규칙", depth: 2 as const },
    { id: "lets-and-faults", text: "렛과 폴트", depth: 2 as const },
    { id: "game-conduct", text: "경기 진행", depth: 2 as const },
    { id: "code-violations", text: "행위 위반", depth: 2 as const },
    { id: "equipment-checks", text: "장비 검사", depth: 2 as const },
    { id: "injuries-delays", text: "부상과 지연", depth: 2 as const },
    { id: "appeals-procedures", text: "항소 절차", depth: 2 as const },
    { id: "umpire-etiquette", text: "심판 에티켓", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "심판이 없는 경기는 어떻게 하나요?",
      a: "서로 호스트(공 넘기기)하며 진행합니다. 점수 계산과 규칙 준수는 선수 스스로 책임집니다. 다툼 시 동전 던지기로 결정하세요."
    },
    {
      q: "풋폴트는 어떻게 판정되나요?",
      a: "서브 시 발이 베이스라인을 넘거나 움직이면 풋폴트입니다. 심판이 '풋폴트'라고 선언하면 서브 기회가 줄어듭니다."
    },
    {
      q: "더블 바운스는 언제 발생하나요?",
      a: "공이 바운스된 후 다시 바운스되면 더블 바운스 위반입니다. 단, 상대가 타격할 수 없는 위치면 렛이 선언될 수 있습니다."
    },
    {
      q: "시간 초과 위반은 어떻게 처리되나요?",
      a: "25초 룰 위반 시 경고, 반복 시 포인트나 게임 패널티가 주어집니다. 토너먼트에서는 더 엄격하게 적용됩니다."
    },
    {
      q: "행위 위반의 종류는 무엇인가요?",
      a: "언어 폭력, 라켓 던지기, 코치 방해, 시간 지연 등이 있습니다. 경고부터 게임 패널티, 퇴장까지 단계적으로 처리됩니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 공정한 심판은 테니스의 즐거움을 더합니다. 규칙을 이해하고 존중하는 태도로 모두가 즐거운 경기를 만들어가요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="umpire-role">심판의 역할</h2>
      <p>
        테니스 심판은 경기의 공정성과 원활한 진행을 책임집니다. 점수 계산, 규칙 준수 감독,
        안전 관리, 분쟁 해결이 주요 임무입니다. 심판의 판정은 최종적이며, 선수들은 이를
        존중해야 합니다. 심판은 중립적인 입장에서 모든 선수가 공평하게 플레이할 수 있도록
        돕습니다. 좋은 심판이 좋은 경기를 만듭니다.
      </p>

      <h2 id="scoring-system">점수 시스템</h2>
      <p>
        테니스 점수는 독특합니다. 0=러브, 15, 30, 40, 듀스, 어드밴티지 순입니다.
        6게임 선취로 세트 승리, 2세트 선취로 매치 승리입니다. 타이브레이크는 6-6일 때
        적용되며, 7포인트 선취로 승리합니다. 점수 계산이 틀리면 경기가 무효가 될 수 있으므로
        주의하세요. 정확한 점수 계산이 공정한 경기의 기본입니다.
      </p>

      <h2 id="service-rules">서브 규칙</h2>
      <p>
        서브는 발이 베이스라인 뒤에 있어야 하고, 공을 위로 던져 라켓으로 쳐야 합니다.
        공이 네트에 걸리면 렛, 상대 코트에 들어가지 않으면 폴트입니다. 두 번의 폴트로
        포인트 상실입니다. 풋폴트(발이 선을 넘음)도 서브 위반입니다. 올바른 서브가
        경기의 시작을 공정하게 합니다.
      </p>

      <h2 id="lets-and-faults">렛과 폴트</h2>
      <p>
        렛은 서브가 네트에 걸리거나, 공이 코트에 닿기 전에 방해받을 때 선언됩니다.
        렛 시 서브를 다시 합니다. 폴트는 서브가 잘못되었을 때 선언되며, 두 번의 폴트로
        포인트 상실입니다. 렛과 폴트를 정확히 구분하는 것이 중요합니다. 잘못된 판정이
        경기의 흐름을 깨뜨릴 수 있습니다.
      </p>

      <h2 id="game-conduct">경기 진행</h2>
      <p>
        선수들은 25초 이내에 서브해야 하고, 포인트 사이에 20초의 휴식 시간을 가집니다.
        공이 코트에 두 번 바운스되면 더블 바운스 위반입니다. 네트 터치나 코트 밖 타격도
        위반입니다. 경기 진행 규칙 준수가 원활한 경기를 가능하게 합니다.
      </p>

      <h2 id="code-violations">행위 위반</h2>
      <p>
        행위 위반은 경고부터 시작해 포인트, 게임, 세트, 매치 패널티로 이어집니다.
        언어 폭력, 라켓 던지기, 코치 방해, 시간 지연 등이 주요 위반 사항입니다.
        심판의 판단하에 공정한 처벌이 내려집니다. 행위 위반이 반복되면 퇴장 조치가
        취해질 수 있습니다. 스포츠맨십이 테니스의 기본입니다.
      </p>

      <h2 id="equipment-checks">장비 검사</h2>
      <p>
        경기 전 장비 검사를 통해 공의 압력, 라켓 스트링, 신발 상태 등을 확인합니다.
        부적합한 장비는 경기에서 사용할 수 없습니다. 특히 토너먼트에서는 엄격한 장비
        규정이 적용됩니다. 올바른 장비 사용이 공정한 경쟁을 보장합니다.
      </p>

      <h2 id="injuries-delays">부상과 지연</h2>
      <p>
        부상 시 의료 타임을 사용할 수 있으며, 3분 이내 치료가 가능합니다. 반복적인 지연은
        시간 초과 위반으로 처리됩니다. 심판은 부상의 심각성을 판단해 적절한 조치를 취합니다.
        부상 관리가 경기의 안전과 공정성을 유지합니다.
      </p>

      <h2 id="appeals-procedures">항소 절차</h2>
      <p>
        판정에 이의가 있을 시 즉시 '챌린지'를 요청할 수 있습니다. 호크아이 시스템이 있는
        코트에서는 전자 판독이 가능합니다. 항소는 제한된 횟수만 허용되며, 잘못된 항소는
        패널티를 받을 수 있습니다. 항소 절차가 공정한 판정을 보장합니다.
      </p>

      <h2 id="umpire-etiquette">심판 에티켓</h2>
      <p>
        심판은 항상 중립을 유지하고, 명확한 발음으로 판정을 선언해야 합니다.
        선수들에게 예의를 갖추고, 경기가 즐거운 분위기로 진행되도록 돕습니다.
        심판의 태도가 경기의 질을 결정합니다. 좋은 심판이 모두를 만족시키는 경기를 만듭니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.itftennis.com/en/about-us/governance/rulebook/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ITF 공식 규칙북</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/rules.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 테니스 규칙</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

