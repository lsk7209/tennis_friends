import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisForehandMasterGuidePage() {
  const title = "테니스 포핸드 마스터 가이드: 포핸드 기술 완벽 정복";
  const excerpt = "테니스 타격의 70%를 차지하는 포핸드. 기본자세부터 고급기술까지 단계별로 배우고 안정적이고 강력한 포핸드를 만들어 보세요.";

  const toc = [
    { id: "forehand-basics", text: "포핸드 기본 원리", depth: 2 as const },
    { id: "stance-position", text: "스탠스와 포지션", depth: 2 as const },
    { id: "grip-technique", text: "그립 잡는 법", depth: 2 as const },
    { id: "backswing-preparation", text: "백스윙 준비", depth: 2 as const },
    { id: "contact-point", text: "컨택 포인트", depth: 2 as const },
    { id: "follow-through", text: "팔로우 스루", depth: 2 as const },
    { id: "common-errors", text: "자주 하는 실수", depth: 2 as const },
    { id: "advanced-techniques", text: "고급 기술", depth: 2 as const },
    { id: "practice-drills", text: "연습 드릴", depth: 2 as const },
    { id: "power-generation", text: "파워 생성", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "포핸드에서 가장 중요한 것은 무엇인가요?",
      a: "일관된 컨택 포인트입니다. 공을 항상 몸 앞에서 같은 지점에서 치는 것이 포핸드의 핵심입니다."
    },
    {
      q: "포핸드를 칠 때 몸을 회전시켜야 하나요?",
      a: "네, 코어 회전이 파워의 70%를 차지합니다. 엉덩이와 어깨를 함께 회전시키는 것이 중요합니다."
    },
    {
      q: "포핸드 그립은 어떻게 잡아야 하나요?",
      a: "컨티넨털 그립을 기본으로 하되, 상황에 따라 이스턴이나 웨스턴 그립으로 조정하세요. 손등이 공을 향하도록 잡으세요."
    },
    {
      q: "포핸드가 자꾸 네트에 걸립니다",
      a: "공을 위에서 아래로 치고 있습니다. 공을 수평으로 또는 살짝 위로 칠 수 있도록 스윙 궤적을 수정하세요."
    },
    {
      q: "포핸드 파워를 늘리는 방법은?",
      a: "코어 회전을 강화하고, 스텝을 활용한 몸통 회전을 더하세요. 또한 스트링 장력을 낮추면 자연스러운 파워 증가를 얻을 수 있습니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 포핸드는 테니스 타격의 왕입니다. 올바른 기술 습득으로 안정성과 파워를 동시에 갖춘 포핸드를 만들어보세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="forehand-basics">포핸드 기본 원리</h2>
      <p>
        포핸드는 테니스 타격의 70%를 차지하는 가장 중요한 샷입니다. 포핸드는 단순한 타격이 아니라
        기술, 타이밍, 파워의 완벽한 조화입니다. 올바른 포핸드를 위해서는 기본자세부터 팔로우 스루까지
        모든 요소가 조화를 이루어야 합니다. 포핸드가 안정적이면 경기 전체가 안정됩니다.
      </p>

      <h2 id="stance-position">스탠스와 포지션</h2>
      <p>
        포핸드의 시작은 올바른 스탠스입니다. 발을 어깨 너비로 벌리고 무릎을 살짝 구부려 중심을 낮게
        유지하세요. 공이 오는 방향에 따라 오픈 스탠스나 클로즈드 스탠스를 선택합니다. 체중은
        뒤쪽 발에 60%, 앞쪽 발에 40% 정도로 분배하세요. 스탠스가 불안정하면 타격도 불안정해집니다.
        스탠스는 포핸드의 토대입니다.
      </p>

      <h2 id="grip-technique">그립 잡는 법</h2>
      <p>
        포핸드 그립은 컨티넨털 그립을 기본으로 합니다. 라켓을 잡을 때 검지손가락과 엄지손가락으로
        V자를 만들어 라켓의 평평한 면과 일치시키세요. 그립이 너무 세거나 느슨하지 않게 하세요.
        상황에 따라 이스턴 그립(더 많은 스핀)이나 웨스턴 그립(더 많은 파워)으로 조정할 수 있습니다.
        올바른 그립이 편안한 타격의 시작입니다.
      </p>

      <h2 id="backswing-preparation">백스윙 준비</h2>
      <p>
        백스윙은 타격의 준비 단계입니다. 라켓을 뒤로 젖히되 팔꿈치를 몸 가까이에 유지하세요.
        라켓 헤드가 공보다 높게 올라가지 않도록 주의하세요. 백스윙이 크면 파워는 늘지만
        컨트롤이 떨어질 수 있습니다. 공의 속도와 방향에 맞춰 백스윙의 크기를 조절하세요.
        백스윙은 타격의 50%를 결정합니다.
      </p>

      <h2 id="contact-point">컨택 포인트</h2>
      <p>
        컨택 포인트는 포핸드의 핵심입니다. 공을 항상 몸 앞에서 같은 지점에서 타격하세요.
        컨택 포인트가 일정해야 방향과 스핀이 일정해집니다. 공이 몸 앞을 지나치면 늦은 타격이 되고,
        너무 뒤에서 치면 팔이 늘어나 불안정해집니다. 컨택 포인트를 일정하게 유지하는 훈련이
        포핸드 마스터의 지름길입니다.
      </p>

      <h2 id="follow-through">팔로우 스루</h2>
      <p>
        팔로우 스루는 타격의 마무리이자 다음 준비입니다. 타격 후 라켓을 자연스럽게 휘두르며
        팔이 몸을 가로지르도록 하세요. 팔로우 스루가 불완전하면 타격이 불안정해집니다.
        팔로우 스루는 단순한 마무리가 아니라 타격의 완성입니다. 올바른 팔로우 스루로
        안정된 타격을 만들어보세요.
      </p>

      <h2 id="common-errors">자주 하는 실수</h2>
      <p>
        포핸드 초보자들이 가장 많이 하는 실수는 공을 위에서 아래로 치는 것입니다. 공을 수평으로
        또는 살짝 위로 타격하세요. 또한 팔만 사용하는 실수도 많습니다. 몸통 회전을 활용하세요.
        컨택 포인트가 불일정하거나 백스윙이 너무 큰 것도 흔한 문제입니다. 이러한 실수들을
        인지하고 교정하는 것이 중요합니다.
      </p>

      <h2 id="advanced-techniques">고급 기술</h2>
      <p>
        포핸드 마스터를 위해서는 다양한 기술을 구사할 수 있어야 합니다. 토핑, 슬라이스, 플랫 타격
        등을 상황에 맞게 사용하세요. 또한 인사이드-아웃과 아웃사이드-인 타격으로 방향을 조절할 수
        있어야 합니다. 고급 기술들은 기본기가 탄탄할 때 효과적입니다. 다양한 기술을 연습하며
        포핸드의 폭을 넓혀보세요.
      </p>

      <h2 id="practice-drills">연습 드릴</h2>
      <p>
        포핸드 연습을 위해 크로스코트 타격, 다운 더 라인 타격, 미들 스트로크 연습을 추천합니다.
        또한 벽 치기 연습으로 리듬감을 기르고, 피드 연습으로 정확도를 높이세요. 연습 시에는
        천천히 시작해 점차 속도를 높이세요. 꾸준한 드릴 연습이 포핸드 마스터의 핵심입니다.
        매일 30분씩 집중 연습하세요.
      </p>

      <h2 id="power-generation">파워 생성</h2>
      <p>
        포핸드 파워는 코어 회전에서 나옵니다. 엉덩이와 어깨를 함께 회전시키고, 스텝을 활용해
        몸통을 완전히 회전시키세요. 스트링 장력을 낮추거나 무게 중심이 낮은 라켓을 사용하면
        파워가 자연스럽게 증가합니다. 파워와 컨트롤의 균형이 중요합니다. 과도한 파워는
        컨트롤을 떨어뜨릴 수 있습니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/forehand-technique-guide/789457/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">포핸드 기술 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/technique/forehand-fundamentals.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 포핸드 기초 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

