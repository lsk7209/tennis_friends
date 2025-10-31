import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisCoreStrengthPage() {
  const title = "테니스 코어 강화 가이드: 안정된 타격의 기반";
  const excerpt = "테니스에서 80%의 힘을 좌우하는 코어 근육. 플랭크, 러시안 트위스트, 데드버그로 코어를 강화하고 안정된 타격과 빠른 회전을 실현하세요.";

  const toc = [
    { id: "core-importance", text: "코어 근육의 중요성", depth: 2 as const },
    { id: "core-muscles", text: "테니스 코어 근육군", depth: 2 as const },
    { id: "plank-exercises", text: "플랭크 변형 운동", depth: 2 as const },
    { id: "rotation-exercises", text: "회전력 강화 운동", depth: 2 as const },
    { id: "stability-exercises", text: "안정성 강화 운동", depth: 2 as const },
    { id: "tennis-specific-core", text: "테니스 전용 코어 트레이닝", depth: 2 as const },
    { id: "training-program", text: "주간 코어 트레이닝 프로그램", depth: 2 as const },
    { id: "progression-tips", text: "진행 방법과 주의사항", depth: 2 as const },
    { id: "recovery-methods", text: "회복과 유지 방법", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "테니스에서 코어가 왜 이렇게 중요한가요?",
      a: "테니스 타격 시 코어 근육이 회전력의 70-80%를 담당합니다. 코어가 약하면 타격이 불안정해지고 부상 위험이 높아집니다."
    },
    {
      q: "코어 운동은 어떻게 시작해야 하나요?",
      a: "기본 플랭크부터 시작하세요. 처음 20-30초 유지하는 것부터 시작해 점진적으로 시간을 늘리세요. 올바른 자세가 중요합니다."
    },
    {
      q: "코어 운동 후 허리가 아파요",
      a: "자세가 잘못되었을 가능성이 높습니다. 복부를 끌어당기고 골반을 중립 위치로 유지하세요. 통증이 지속되면 전문가와 상담하세요."
    },
    {
      q: "코어 운동은 얼마나 자주 해야 하나요?",
      a: "주 3-4회, 회당 15-20분이 적당합니다. 테니스 훈련 후나 별도의 날에 하세요. 과도한 운동은 오히려 역효과를 낼 수 있습니다."
    },
    {
      q: "코어 강화 효과는 언제 나타나나요?",
      a: "3-4주 정도 꾸준히 하면 타격의 안정성이 향상됩니다. 8-12주면 큰 차이를 느낄 수 있습니다. 인내심을 가지고 지속하세요."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 코어는 단순한 복근이 아닌 테니스 타격의 엔진입니다. 체계적인 코어 트레이닝으로 안정된 타격과 부상 방지를 동시에 달성하세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="core-importance">코어 근육의 중요성</h2>
      <p>
        테니스에서 코어 근육은 단순한 복근이 아닙니다. 타격 시 발생하는 회전력의 70-80%를 담당하며,
        안정된 자세 유지와 빠른 방향 전환을 가능하게 합니다. 코어가 강한 선수는 타격이 정확하고
        일관되며, 부상 위험도 현저히 낮습니다. 반대로 코어가 약하면 타격이 불안정해지고,
        백이나 어깨에 무리가 갈 수 있습니다. 코어 강화는 테니스 실력 향상의 필수 요소입니다.
      </p>

      <h2 id="core-muscles">테니스 코어 근육군</h2>
      <p>
        테니스 코어는 복직근, 외복사근, 내복사근뿐 아니라 허리 근육, 골반 근육까지 포함합니다.
        복직근은 타격 시 힘을 전달하고, 외복사근은 회전을 담당하며, 다열근은 안정성을 제공합니다.
        테니스에서는 특히 회전력이 필요한 만큼 외복사근과 다열근의 균형 잡힌 발전이 중요합니다.
        코어 근육들은 서로 연결되어 작동하므로 전체적인 강화가 필요합니다.
      </p>

      <h2 id="plank-exercises">플랭크 변형 운동</h2>
      <p>
        플랭크는 코어 안정성의 기초가 되는 운동입니다. 기본 플랭크부터 시작해 사이드 플랭크,
        리버스 플랭크로 발전시키세요. 플랭크 시에는 몸을 일직선으로 유지하고 복부를 끌어당겨
        코어를 활성화하세요. 처음에는 20-30초부터 시작해 점진적으로 시간을 늘리세요.
        플랭크 변형은 코어의 다양한 면을 강화하는 데 효과적입니다.
      </p>

      <h2 id="rotation-exercises">회전력 강화 운동</h2>
      <p>
        테니스 타격의 핵심인 회전력을 키우기 위해 러시안 트위스트, 메디신 볼 슬램, 케이블 우드를
        추천합니다. 러시안 트위스트는 좌우 회전력을 기르고, 메디신 볼 슬램은 폭발적인 힘을 개발합니다.
        회전 운동 시에는 허리를 과도하게 비틀지 말고 코어 전체를 사용하세요. 회전력 강화는
        타격의 파워와 정확성을 동시에 향상시킵니다.
      </p>

      <h2 id="stability-exercises">안정성 강화 운동</h2>
      <p>
        데드버그, 버드 독, 팔란크스 같은 안정성 운동은 코어의 균형과 조율 능력을 향상시킵니다.
        데드버그는 코어 안정성을 기르는 데 특히 효과적이며, 버드 독은 반대쪽 팔다리의 협응력을
        강화합니다. 안정성 운동은 부상 방지에도 큰 도움이 됩니다. 이러한 운동들은 테니스 코트에서
        필요한 균형 감각을 기르는 데 필수적입니다.
      </p>

      <h2 id="tennis-specific-core">테니스 전용 코어 트레이닝</h2>
      <p>
        테니스 동작을 모방한 전용 코어 트레이닝이 가장 효과적입니다. 스윙 모션으로 하는 케이블 회전,
        테니스 자세에서의 플랭크, 스텝과 연동된 코어 운동 등을 추천합니다. 실제 테니스 동작을
        연습하는 것이 코어 강화에 가장 효과적입니다. 전용 트레이닝은 기술 향상과 체력 향상을
        동시에 달성할 수 있습니다.
      </p>

      <h2 id="training-program">주간 코어 트레이닝 프로그램</h2>
      <p>
        초보자를 위한 8주 프로그램을 제안합니다. 1-2주차는 기초 안정성, 3-4주차는 회전력 강화,
        5-6주차는 테니스 전용 운동, 7-8주차는 통합 트레이닝으로 구성됩니다. 각 세션은 15-20분이며,
        주 3-4회 실시하세요. 프로그램 진행 중 몸 상태를 체크하며 강도를 조절하세요. 꾸준한 실행이
        성공의 핵심입니다.
      </p>

      <h2 id="progression-tips">진행 방법과 주의사항</h2>
      <p>
        코어 트레이닝은 올바른 자세가 최우선입니다. 복부를 끌어당기고 골반을 중립으로 유지하며,
        호흡을 자연스럽게 하세요. 처음에는 쉬운 버전부터 시작해 점진적으로 강도를 높이세요.
        통증이 느껴지면 즉시 멈추고 자세를 확인하세요. 코어 트레이닝은 테니스 훈련과 병행하되,
        과도한 피로를 피하세요. 전문가의 지도하에 진행하는 것이 안전합니다.
      </p>

      <h2 id="recovery-methods">회복과 유지 방법</h2>
      <p>
        코어 트레이닝 후에는 충분한 휴식과 스트레칭이 필요합니다. 가벼운 산책이나 요가로 회복을
        도우세요. 영양 섭취도 중요하며, 단백질과 탄수화물을 균형 있게 섭취하세요. 코어 강화 효과를
        유지하기 위해 주 1-2회 유지 운동을 하세요. 꾸준한 관리가 테니스 실력을 오래 유지하는
        비결입니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2019/03/core-strength-tennis-players/76036/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 선수를 위한 코어 강화 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/fitness/core-strength.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 코어 트레이닝 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

