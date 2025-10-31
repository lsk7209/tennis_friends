import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisServeMasterGuidePage() {
  const title = "테니스 서브 마스터 가이드: 서브 기술 완벽 정복";
  const excerpt = "경기의 시작이자 득점의 핵심인 서브. 기본자세부터 고급기술까지 단계별 가이드로 안정적이고 강력한 서브를 만들어 보세요.";

  const toc = [
    { id: "serve-fundamentals", text: "서브의 기본 원리", depth: 2 as const },
    { id: "stance-preparation", text: "스탠스와 준비 자세", depth: 2 as const },
    { id: "grip-technique", text: "서브 그립", depth: 2 as const },
    { id: "ball-toss", text: "공 토스 기술", depth: 2 as const },
    { id: "racket-path", text: "라켓 궤적", depth: 2 as const },
    { id: "contact-timing", text: "컨택 타이밍", depth: 2 as const },
    { id: "first-serve", text: "퍼스트 서브", depth: 2 as const },
    { id: "second-serve", text: "세컨드 서브", depth: 2 as const },
    { id: "serve-variations", text: "서브 변형", depth: 2 as const },
    { id: "troubleshooting", text: "문제 해결", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "서브가 자꾸 더블폴트가 나요",
      a: "토스가 불안정하거나 라켓 궤적이 일정하지 않습니다. 먼저 공 토스부터 연습하세요. 공을 항상 같은 높이와 위치에 던지도록 훈련합니다."
    },
    {
      q: "서브 파워를 늘리는 방법은?",
      a: "코일드 코일드 포지션에서 강력한 회전을 만들고, 다리와 코어를 함께 사용하세요. 또한 라켓 스피드를 높이는 스윙 연습이 중요합니다."
    },
    {
      q: "퍼스트 서브와 세컨드 서브의 차이는?",
      a: "퍼스트 서브는 강력한 공격을, 세컨드 서브는 안전한 득점을 목표로 합니다. 퍼스트는 플랫이나 슬라이스, 세컨드는 킥 서브나 안전한 플랫을 사용하세요."
    },
    {
      q: "서브 시 풋폴트가 자주 나요",
      a: "발이 베이스라인을 넘지 않도록 주의하세요. 서브 동작 시 발 위치를 고정하고, 몸의 회전만 사용합니다. 천천히 연습하며 습관을 들이세요."
    },
    {
      q: "서브 방향이 안 맞아요",
      a: "토스 위치와 라켓 궤적을 일치시키세요. 공을 던진 방향으로 라켓을 휘두르도록 연습합니다. 처음에는 중앙 서브부터 마스터하세요."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 서브는 단순한 시작이 아닌 전략입니다. 체계적인 기술 습득으로 서브를 득점의 무기로 만들어 보세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="serve-fundamentals">서브의 기본 원리</h2>
      <p>
        서브는 테니스 경기의 시작이자 가장 중요한 샷입니다. 서브 하나로 경기의 흐름을 좌우할 수 있습니다.
        서브 기술은 타이밍, 정확성, 파워의 완벽한 조화입니다. 올바른 서브를 위해서는 기본자세부터
        팔로우 스루까지 모든 요소가 조화를 이루어야 합니다. 서브가 안정적이면 경기 전체가 안정됩니다.
        서브 마스터는 테니스 실력의 증거입니다.
      </p>

      <h2 id="stance-preparation">스탠스와 준비 자세</h2>
      <p>
        서브의 시작은 올바른 스탠스입니다. 플랫폼 스탠스를 기본으로 하되, 상황에 따라 피벗 스탠스로
        조정합니다. 발을 어깨 너비로 벌리고, 앞발을 살짝 뒤로 하여 코일드 포지션을 만드세요.
        체중은 뒤쪽 발에 두고, 라켓을 준비 자세로 올립니다. 스탠스가 불안정하면 서브 전체가 흔들립니다.
        스탠스는 서브의 토대입니다.
      </p>

      <h2 id="grip-technique">서브 그립</h2>
      <p>
        서브 그립은 컨티넨털 그립을 기본으로 합니다. 라켓을 잡을 때 검지손가락과 엄지손가락으로
        V자를 만들어 라켓의 평평한 면과 일치시키세요. 그립이 너무 세거나 느슨하지 않게 하세요.
        컨티넨털 그립은 모든 서브 변형의 기초가 됩니다. 올바른 그립이 편안한 서브의 시작입니다.
        그립이 잘못되면 타격이 불안정해집니다.
      </p>

      <h2 id="ball-toss">공 토스 기술</h2>
      <p>
        공 토스는 서브의 50%를 차지합니다. 공을 검지손가락과 엄지손가락으로 가볍게 쥐고,
        몸 앞 약 30cm 지점에 일정한 높이(머리 위)로 던지세요. 토스가 일정해야 라켓 궤적도 일정해집니다.
        처음에는 천천히 토스 연습부터 시작하세요. 토스가 안정적이면 서브 전체가 안정됩니다.
        공을 항상 같은 지점에 던지는 훈련이 중요합니다.
      </p>

      <h2 id="racket-path">라켓 궤적</h2>
      <p>
        라켓은 공을 향해 직선 궤적으로 올라가야 합니다. 백스윙 후 라켓 헤드를 공보다 높게 올리지 말고,
        토스된 공을 향해 곧장 올라가세요. 라켓 궤적이 일정해야 방향과 속도가 일정해집니다.
        라켓 경로가 올바르지 않으면 서브가 불안정해집니다. 천천히 동작을分解하여 연습하세요.
        올바른 라켓 궤적이 서브 마스터의 핵심입니다.
      </p>

      <h2 id="contact-timing">컨택 타이밍</h2>
      <p>
        컨택 타이밍은 공이 최고점에 가까워질 때입니다. 공이 떨어지기 시작하기 직전에 타격하세요.
        타이밍이 늦으면 공이 아래로 떨어져 파워가 떨어지고, 너무 일찍 치면 방향이 위로 가서
        네트에 걸리기 쉽습니다. 타이밍 연습을 위해 천천히 시작해 점차 속도를 높이세요.
        정확한 타이밍이 서브의 완성도를 결정합니다.
      </p>

      <h2 id="first-serve">퍼스트 서브</h2>
      <p>
        퍼스트 서브는 강력한 공격을 목표로 합니다. 플랫 서브나 슬라이스 서브로 강력한 에이스를
        노리세요. 퍼스트 서브 성공률이 높을수록 상대를 압박할 수 있습니다. 퍼스트 서브는
        자신감의 원천입니다. 강력하고 정확한 퍼스트 서브를 위해 꾸준히 연습하세요.
        퍼스트 서브가 좋으면 경기 전체가 유리해집니다.
      </p>

      <h2 id="second-serve">세컨드 서브</h2>
      <p>
        세컨드 서브는 안전한 득점을 목표로 합니다. 킥 서브나 안전한 플랫 서브를 사용하세요.
        세컨드 서브는 100% 들어가야 합니다. 퍼스트 서브 실패 후에도 안정적인 득점을 할 수 있어야 합니다.
        세컨드 서브가 약하면 상대에게 브레이크 포인트를 내줍니다. 안전하고 일관된 세컨드 서브를
        마스터하세요.
      </p>

      <h2 id="serve-variations">서브 변형</h2>
      <p>
        서브 마스터를 위해 다양한 변형을 구사할 수 있어야 합니다. 플랫 서브(속도), 슬라이스 서브(회전),
        킥 서브(바운스), 언더 서브(낮은 궤적) 등을 상황에 맞게 사용하세요. 서브 변형이 다양할수록
        상대를 예측하기 어렵게 만듭니다. 각 변형의 장단점을 이해하고 연습하세요.
        서브 변형 마스터가 전략적 우위를 가져옵니다.
      </p>

      <h2 id="troubleshooting">문제 해결</h2>
      <p>
        서브 초보자들이 가장 많이 하는 실수는 토스가 불안정하다는 것입니다. 공을 항상 같은 높이와
        위치에 던지도록 연습하세요. 또한 라켓 궤적이 일정하지 않은 경우도 많습니다. 공을 향해
        직선으로 올라가는 연습을 하세요. 타이밍 문제가 있으면 천천히 시작해 점차 속도를 높이세요.
        서브 문제는 대부분 기본기에서 비롯됩니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/02/serve-technique-masterclass/790123/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">서브 기술 마스터클래스 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/technique/serve-fundamentals.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 서브 기초 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

