import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisVolleyMasterclassPage() {
  const title = "테니스 발리 마스터클래스: 발리 기술 완성";
  const excerpt = "네트 플레이의 핵심인 발리. 반사 신경과 정확성을 기르는 발리 기술 완성 가이드로 상대를 압도하는 네트 플레이를 만들어 보세요.";

  const toc = [
    { id: "volley-importance", text: "발리의 중요성", depth: 2 as const },
    { id: "forehand-volley", text: "포핸드 발리", depth: 2 as const },
    { id: "backhand-volley", text: "백핸드 발리", depth: 2 as const },
    { id: "volley-grip", text: "발리 그립", depth: 2 as const },
    { id: "ready-position", text: "레디 포지션", depth: 2 as const },
    { id: "split-step", text: "스플릿 스텝", depth: 2 as const },
    { id: "contact-point", text: "컨택 포인트", depth: 2 as const },
    { id: "volley-strategy", text: "발리 전략", depth: 2 as const },
    { id: "advanced-techniques", text: "고급 기술", depth: 2 as const },
    { id: "practice-methods", text: "연습 방법", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "발리가 왜 중요한가요?",
      a: "발리는 네트 플레이의 핵심으로, 상대의 타격 타이밍을 빼앗고 직접 득점을 만들 수 있습니다. 발리가 능숙하면 코트의 50%를 장악할 수 있습니다."
    },
    {
      q: "발리할 때 공이 자꾸 네트에 걸려요",
      a: "라켓을 공보다 먼저 움직이지 말고, 공이 오는 것을 기다렸다가 타격하세요. 또한 라켓 헤드를 공 아래로 유지하는 것이 중요합니다."
    },
    {
      q: "포핸드 발리와 백핸드 발리 중 어느 것이 먼저?",
      a: "포핸드 발리부터 시작하세요. 포핸드가 발리의 70%를 차지합니다. 포핸드 발리가 익숙해진 후 백핸드 발리를 연습하세요."
    },
    {
      q: "발리 시 스플릿 스텝이 왜 필요한가요?",
      a: "스플릿 스텝은 반사 신경을 기르고, 빠른 방향 전환을 가능하게 합니다. 발리에서는 0.5초의 차이가 승패를 좌우합니다."
    },
    {
      q: "발리 연습은 어떻게 시작해야 하나요?",
      a: "먼저 레디 포지션과 스플릿 스텝부터 연습하세요. 그 다음 천천히 피드되는 공을 타격하며 컨택 포인트를 익히세요. 속도는 점차 높여가세요."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 발리는 기술이 아닌 예술입니다. 반사 신경과 정확성을 기르는 체계적인 훈련으로 발리를 무기로 만들어 보세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="volley-importance">발리의 중요성</h2>
      <p>
        발리는 테니스에서 가장 흥미로운 기술 중 하나입니다. 네트 근처에서 공을 처리하는 발리는
        상대의 타격 타이밍을 빼앗고 직접 득점을 만들 수 있습니다. 발리가 능숙한 선수는 코트의
        절반을 장악한다고 해도 과언이 아닙니다. 발리는 단순한 기술이 아닌 전략적 무기입니다.
        발리 마스터가 되면 테니스 실력이 한 단계 올라갑니다.
      </p>

      <h2 id="forehand-volley">포핸드 발리</h2>
      <p>
        포핸드 발리는 발리의 기본입니다. 라켓을 몸 앞에 준비하고, 공이 오는 것을 기다렸다가
        타격하세요. 라켓 헤드를 공 아래로 유지하고, 손목을 사용하여 방향을 조절합니다.
        포핸드 발리는 안정적이고 파워풀합니다. 발리의 70%가 포핸드 발리입니다.
        포핸드 발리가 익숙해지면 백핸드 발리로 발전시키세요.
      </p>

      <h2 id="backhand-volley">백핸드 발리</h2>
      <p>
        백핸드 발리는 포핸드보다 어려운 기술입니다. 양손으로 라켓을 잡고 안정성을 높이거나,
        한손으로 세련된 타격을 구사하세요. 백핸드 발리는 크로스코트 타격에 특히 유용합니다.
        백핸드 발리가 능숙해지면 네트 플레이의 완성도가 높아집니다. 꾸준한 연습이 필요합니다.
        백핸드 발리는 발리의 깊이를 더해줍니다.
      </p>

      <h2 id="volley-grip">발리 그립</h2>
      <p>
        발리 그립은 컨티넨털 그립을 기본으로 합니다. 라켓을 잡을 때 검지손가락과 엄지손가락으로
        V자를 만들어 라켓의 평평한 면과 일치시키세요. 그립이 너무 세거나 느슨하지 않게 하세요.
        컨티넨털 그립은 모든 발리 변형의 기초가 됩니다. 올바른 그립이 편안한 발리의 시작입니다.
        그립이 잘못되면 타격이 불안정해집니다.
      </p>

      <h2 id="ready-position">레디 포지션</h2>
      <p>
        발리의 시작은 올바른 레디 포지션입니다. 라켓을 몸 앞에 준비하고, 무릎을 살짝 구부려
        중심을 낮게 유지하세요. 시선은 공을 따라가되, 몸은 언제든지 움직일 수 있는 자세를
        취하세요. 레디 포지션이 불안정하면 발리 전체가 흔들립니다. 레디 포지션은 발리의
        토대입니다. 올바른 자세로 시작하세요.
      </p>

      <h2 id="split-step">스플릿 스텝</h2>
      <p>
        스플릿 스텝은 발리의 핵심입니다. 상대가 타격하는 순간 발을 살짝 벌려 체중을 실은 후,
        즉시 좁혀서 다음 이동을 준비합니다. 스플릿 스텝이 빠를수록 발리 타이밍이 좋아집니다.
        스플릿 스텝은 반사 신경을 기르는 데도 효과적입니다. 발리에서는 0.5초의 차이가
        승패를 좌우합니다. 스플릿 스텝 연습부터 시작하세요.
      </p>

      <h2 id="contact-point">컨택 포인트</h2>
      <p>
        발리 컨택 포인트는 몸 앞입니다. 공이 바운스되기 전에 타격해야 하므로 컨택 포인트가
        중요합니다. 공을 너무 뒤에서 치면 늦고, 너무 앞에서 치면 방향 조절이 어렵습니다.
        컨택 포인트가 일정해야 방향과 속도가 일정해집니다. 천천히 연습하며 최적의 포인트를
        찾아보세요. 정확한 컨택 포인트가 발리의 완성입니다.
      </p>

      <h2 id="volley-strategy">발리 전략</h2>
      <p>
        발리 전략은 상대를 압박하는 것입니다. 공을 상대의 약한 쪽으로 보내고, 각도를 이용해
        득점을 노리세요. 발리는 속도와 정확성의 조화가 중요합니다. 상대의 위치를 파악하고
        전략적으로 타격하세요. 발리 전략이 능숙해지면 네트 플레이가 강해집니다.
        전략적 발리가 승리의 핵심입니다.
      </p>

      <h2 id="advanced-techniques">고급 기술</h2>
      <p>
        발리 마스터를 위한 고급 기술로는 드롭 발리, 스윙 발리, 하프 발리 등이 있습니다.
        드롭 발리는 공을 살짝 넘겨 상대의 타이밍을 빼앗고, 스윙 발리는 강력한 타격으로
        상대를 밀어냅니다. 하프 발리는 공의 속도를 조절하며 전략적으로 사용합니다.
        고급 기술들은 기본기가 탄탄할 때 효과적입니다. 다양한 기술로 발리의 폭을 넓혀보세요.
      </p>

      <h2 id="practice-methods">연습 방법</h2>
      <p>
        발리 연습은 천천히 시작하세요. 먼저 레디 포지션과 스플릿 스텝부터 연습합니다.
        그 다음 피드되는 공을 타격하며 컨택 포인트를 익히세요. 속도는 점차 높여가세요.
        벽 치기 연습이나 피드 머신 활용도 효과적입니다. 발리 연습은 일관성과 정확성이
        핵심입니다. 매일 15-20분씩 꾸준히 연습하세요.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2020/03/volley-technique-masterclass/799456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">발리 기술 마스터클래스 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/technique/volley-fundamentals.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 발리 기초 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

