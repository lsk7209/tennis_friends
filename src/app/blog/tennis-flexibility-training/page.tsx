import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisFlexibilityTrainingPage() {
  const title = "테니스 유연성 트레이닝: 부상 예방과 타격 향상의 핵심";
  const excerpt = "테니스에서 유연성이 부족하면 타격 범위가 좁아지고 부상 위험이 높아집니다. 매일 10분 스트레칭으로 어깨, 허리, 다리의 유연성을 기르세요.";

  const toc = [
    { id: "flexibility-importance", text: "유연성의 중요성", depth: 2 as const },
    { id: "upper-body-flexibility", text: "상체 유연성", depth: 2 as const },
    { id: "lower-body-flexibility", text: "하체 유연성", depth: 2 as const },
    { id: "core-flexibility", text: "코어 유연성", depth: 2 as const },
    { id: "dynamic-stretching", text: "동적 스트레칭", depth: 2 as const },
    { id: "static-stretching", text: "정적 스트레칭", depth: 2 as const },
    { id: "tennis-specific-stretches", text: "테니스 전용 스트레칭", depth: 2 as const },
    { id: "flexibility-routine", text: "일일 유연성 루틴", depth: 2 as const },
    { id: "progress-tracking", text: "진행 상황 추적", depth: 2 as const },
    { id: "maintenance-tips", text: "유연성 유지 방법", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "테니스에 유연성이 왜 중요한가요?",
      a: "유연성이 좋으면 타격 범위가 넓어지고, 부상 위험이 낮아지며, 파워도 증가합니다. 특히 어깨와 허리의 유연성이 타격력에 직접적인 영향을 미칩니다."
    },
    {
      q: "스트레칭은 언제 하는 게 좋나요?",
      a: "워밍업 전 동적 스트레칭, 워밍업 후 정적 스트레칭, 경기 후 쿨다운 스트레칭을 하세요. 매일 10-15분 꾸준히 하는 것이 중요합니다."
    },
    {
      q: "유연성이 부족하면 어떤 문제가 생기나요?",
      a: "어깨 통증, 허리 부상, 햄스트링 염좌 등이 발생하기 쉽고, 타격 시 움직임이 제한되어 퍼포먼스가 떨어집니다."
    },
    {
      q: "얼마나 자주 스트레칭해야 하나요?",
      a: "테니스 후 매일, 가능하다면 아침저녁으로 하세요. 처음 4-6주간은 매일 10분씩, 이후에는 3-4회로 유지하세요."
    },
    {
      q: "스트레칭 시 통증이 느껴지면 어떻게 하나요?",
      a: "불편함은 괜찮지만 통증이 느껴지면 즉시 멈추세요. 천천히 강도를 높이고, 전문가의 지도하에 진행하는 것이 안전합니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 유연성은 테니스 실력의 기초입니다. 체계적인 스트레칭으로 몸의 잠재력을 끌어내고, 부상을 예방하며, 더욱 유연한 플레이를 즐기세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="flexibility-importance">유연성의 중요성</h2>
      <p>
        테니스에서 유연성은 단순한 몸의 유연함이 아닙니다. 타격 범위를 넓히고, 부상 위험을 낮추며,
        파워를 증가시키는 핵심 요소입니다. 유연성이 좋은 선수는 코트 전체를 자유자재로 누비고,
        강력한 타격을 구사할 수 있습니다. 반대로 유연성이 부족하면 어깨 통증, 허리 부상 등의
        문제가 발생하기 쉽습니다. 유연성 트레이닝은 테니스 생활의 필수 요소입니다.
      </p>

      <h2 id="upper-body-flexibility">상체 유연성</h2>
      <p>
        테니스에서 특히 중요한 어깨와 팔의 유연성입니다. 어깨 돌리기, 팔 스트레칭, 가슴 열기
        운동이 효과적입니다. 어깨가 유연해야 강력한 서브와 타격이 가능합니다. 또한 등과
        목의 유연성도 중요합니다. 상체 유연성이 타격력의 60%를 좌우한다고 해도 과언이 아닙니다.
        매일 꾸준한 스트레칭으로 상체 유연성을 유지하세요.
      </p>

      <h2 id="lower-body-flexibility">하체 유연성</h2>
      <p>
        다리와 엉덩이의 유연성이 코트 이동의 핵심입니다. 햄스트링 스트레칭, 쿼드 스트레칭,
        엉덩이 스트레칭이 필수적입니다. 하체가 유연해야 빠른 방향 전환과 점프가 가능합니다.
        또한 발목과 발의 유연성도 중요합니다. 하체 유연성이 부족하면 부상 위험이 높아집니다.
        테니스 선수에게 하체 유연성은 생명과도 같습니다.
      </p>

      <h2 id="core-flexibility">코어 유연성</h2>
      <p>
        허리와 복부의 유연성이 회전 타격의 핵심입니다. 러시안 트위스트 스트레칭, 캣-카우 스트레칭,
        허리 회전 스트레칭이 효과적입니다. 코어가 유연해야 강력한 포핸드와 백핸드가 가능합니다.
        또한 코어 유연성은 부상 예방에도 큰 도움이 됩니다. 테니스 타격의 80%가 코어에서
        비롯된다는 것을 기억하세요.
      </p>

      <h2 id="dynamic-stretching">동적 스트레칭</h2>
      <p>
        워밍업 시 하는 동적 스트레칭은 움직이면서 하는 스트레칭입니다. 팔 돌리기, 다리 번갈아
        올리기, 몸통 비틀기가 포함됩니다. 동적 스트레칭은 근육을 늘리면서 혈액순환을 개선합니다.
        갑작스러운 움직임은 피하고, 점진적으로 범위를 늘리세요. 동적 스트레칭이 경기 준비의
        완벽한 시작입니다.
      </p>

      <h2 id="static-stretching">정적 스트레칭</h2>
      <p>
        쿨다운 시 하는 정적 스트레칭은 가만히 유지하는 스트레칭입니다. 각 스트레치를 20-30초
        유지하며, 통증이 느껴지지 않는 범위에서 하세요. 정적 스트레칭은 근육을 이완시키고
        회복을 돕습니다. 호흡을 자연스럽게 유지하며, 서두르지 말고 천천히 진행하세요.
        정적 스트레칭이 유연성 향상의 핵심입니다.
      </p>

      <h2 id="tennis-specific-stretches">테니스 전용 스트레칭</h2>
      <p>
        테니스 동작을 모방한 전용 스트레칭입니다. 서브 모션 스트레칭, 포핸드 모션 스트레칭,
        백핸드 모션 스트레칭이 포함됩니다. 이러한 스트레칭은 테니스에 특화된 유연성을 기릅니다.
        실제 동작을 따라 하면서 스트레칭하는 것이 효과적입니다. 전용 스트레칭이 테니스 실력을
        향상시키는 지름길입니다.
      </p>

      <h2 id="flexibility-routine">일일 유연성 루틴</h2>
      <p>
        매일 10-15분 유연성 루틴을 추천합니다. 아침에 동적 스트레칭, 테니스 후 정적 스트레칭,
        저녁에 가벼운 유지 스트레칭으로 구성됩니다. 처음 4주간은 매일 실시하고, 이후에는
        테니스 플레이 날에 집중하세요. 루틴을 습관화하면 자연스럽게 유연성이 향상됩니다.
        꾸준함이 유연성 향상의 핵심입니다.
      </p>

      <h2 id="progress-tracking">진행 상황 추적</h2>
      <p>
        유연성 향상을 추적하기 위해 매주 동일한 스트레칭으로 범위를 측정하세요. 사진 촬영이나
        메모로 기록하는 것이 좋습니다. 점진적인 향상을 느끼면 동기부여가 됩니다. 갑작스러운
        변화보다는 꾸준한 발전을 목표로 하세요. 추적이 발전의 원동력이 됩니다.
      </p>

      <h2 id="maintenance-tips">유연성 유지 방법</h2>
      <p>
        유연성을 유지하기 위해 데일리 스트레칭 습관을 들이세요. 또한 수분 섭취와 단백질 섭취가
        근육 회복에 도움이 됩니다. 과도한 무리는 피하고, 전문가의 조언을 구하세요. 유연성 유지로
        테니스 생활을 더욱 즐겁게 만들 수 있습니다. 건강한 몸이 지속적인 발전을 가능하게 합니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2018/07/flexibility-tennis-players/70051/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 선수의 유연성 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/fitness/flexibility.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 유연성 트레이닝 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

