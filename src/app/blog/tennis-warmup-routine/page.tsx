import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisWarmupRoutinePage() {
  const title = "테니스 워밍업 완벽 가이드: 부상 예방과 경기력 향상";
  const excerpt = "경기 전 워밍업이 승패의 30%를 좌우합니다. 15분 워밍업 루틴으로 근육 준비, 관절 가동성 향상, 멘탈 집중을 동시에 달성하세요.";

  const toc = [
    { id: "warmup-importance", text: "워밍업의 중요성", depth: 2 as const },
    { id: "warmup-phases", text: "워밍업 단계", depth: 2 as const },
    { id: "dynamic-stretches", text: "동적 스트레칭", depth: 2 as const },
    { id: "joint-mobility", text: "관절 가동성 운동", depth: 2 as const },
    { id: "activation-drills", text: "활성화 드릴", depth: 2 as const },
    { id: "tennis-specific-warmup", text: "테니스 전용 워밍업", depth: 2 as const },
    { id: "mental-preparation", text: "멘탈 준비", depth: 2 as const },
    { id: "time-management", text: "시간 관리", depth: 2 as const },
    { id: "injury-prevention", text: "부상 예방", depth: 2 as const },
    { id: "cool-down", text: "쿨다운과 회복", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "워밍업을 얼마나 해야 하나요?",
      a: "가벼운 플레이 시 10-15분, 격한 경기나 추운 날씨 시 20-25분이 적당합니다. 너무 짧으면 부상 위험, 너무 길면 체력 소모가 큽니다."
    },
    {
      q: "워밍업 순서는 어떻게 되나요?",
      a: "일반 운동 → 동적 스트레칭 → 관절 가동성 → 테니스 전용 드릴 → 멘탈 준비 순입니다. 이 순서를 따르면 안전하고 효과적입니다."
    },
    {
      q: "경기 중간에 재워밍업이 필요한가요?",
      a: "네, 30분 이상 쉬었다면 5-10분 재워밍업을 하세요. 특히 추운 날씨나 장시간 경기 시 중요합니다."
    },
    {
      q: "워밍업을 안 하면 어떤 문제가 생기나요?",
      a: "근육 경련, 염좌, 긴장으로 인한 부상 위험이 높아지고, 퍼포먼스도 20-30% 떨어집니다. 워밍업은 선택이 아닌 필수입니다."
    },
    {
      q: "어린이 워밍업은 어떻게 다르나요?",
      a: "어린이는 성인보다 가볍게 하되, 게임 같은 요소를 더하세요. 스트레칭 시간을 짧게 하고 재미있는 동작을 중심으로 합니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 워밍업은 단순한 준비가 아닌 퍼포먼스의 기초입니다. 체계적인 워밍업 루틴으로 부상을 예방하고 최고의 경기력을 끌어내세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="warmup-importance">워밍업의 중요성</h2>
      <p>
        테니스 경기에서 워밍업은 승패의 30%를 좌우합니다. 제대로 된 워밍업은 근육 온도를 높이고,
        혈액순환을 개선하며, 관절 가동성을 향상시킵니다. 또한 멘탈 집중을 돕고 부상 위험을
        현저히 낮춥니다. 반대로 워밍업을 소홀히 하면 근육 경련이나 염좌 같은 부상이 발생하기 쉽고,
        퍼포먼스도 떨어집니다. 워밍업은 투자하는 시간만큼 경기력으로 돌아오는 소중한 과정입니다.
      </p>

      <h2 id="warmup-phases">워밍업 단계</h2>
      <p>
        효과적인 워밍업은 4단계로 구성됩니다. 첫째, 일반적인 유산소 운동으로 몸 전체를 데웁니다.
        둘째, 동적 스트레칭으로 근육을 늘입니다. 셋째, 관절 가동성 운동으로 움직임을 부드럽게 합니다.
        넷째, 테니스 전용 드릴로 기술을 준비합니다. 각 단계는 3-5분씩 진행하며, 점진적으로
        강도를 높이세요. 체계적인 단계 진행이 완벽한 워밍업의 핵심입니다.
      </p>

      <h2 id="dynamic-stretches">동적 스트레칭</h2>
      <p>
        정적 스트레칭과 달리 동적 스트레칭은 움직이면서 하는 스트레칭입니다. 팔 돌리기, 다리 번갈아
        올리기, 몸통 비틀기 등이 포함됩니다. 동적 스트레칭은 근육을 늘리면서 동시에 혈액순환을
        개선합니다. 각 동작을 10-15회 반복하며, 갑작스러운 움직임은 피하세요. 동적 스트레칭은
        경기 준비의 완벽한 시작입니다.
      </p>

      <h2 id="joint-mobility">관절 가동성 운동</h2>
      <p>
        테니스에서 특히 중요한 어깨, 팔꿈치, 손목, 무릎, 발목 관절을 집중적으로 풀어줍니다.
        어깨 돌리기, 팔꿈치 펴고 굽히기, 손목 돌리기, 스쿼트 등이 효과적입니다. 관절 가동성은
        부상 예방의 핵심이며, 유연성을 향상시킵니다. 각 관절을 천천히 10회씩 풀어주세요.
        관절이 부드러워야 강력한 타격이 가능합니다.
      </p>

      <h2 id="activation-drills">활성화 드릴</h2>
      <p>
        코어와 다리 근육을 활성화시키는 드릴입니다. 플랭크, 스쿼트 점프, 러닝 인 플레이스 등이
        포함됩니다. 이러한 드릴은 근육을 깨우고 반사 신경을 준비합니다. 테니스에 필요한 폭발력과
        민첩성을 기르는 데 효과적입니다. 드릴은 가볍게 시작해 점차 강도를 높이세요.
        활성화 드릴이 경기력의 기초를 다집니다.
      </p>

      <h2 id="tennis-specific-warmup">테니스 전용 워밍업</h2>
      <p>
        라켓을 들고 하는 테니스 전용 워밍업입니다. 가벼운 그라운드 스트로크부터 시작해 서브 연습으로
        이어집니다. 실제 경기 상황을 모방한 드릴이 효과적입니다. 공 튀기기, 벽 치기, 크로스코트
        타격 등이 포함됩니다. 전용 워밍업은 기술적 준비와 함께 멘탈 준비도 도와줍니다.
        경기 감각을 미리 익히는 소중한 시간입니다.
      </p>

      <h2 id="mental-preparation">멘탈 준비</h2>
      <p>
        워밍업 마지막 단계는 멘탈 준비입니다. 호흡을 가다듬고, 긍정적인 자기 대화를 하세요.
        경기의 목표를 상기시키고, 자신감을 높이세요. 시각화 기법을 사용해 성공 장면을 상상합니다.
        멘탈 준비는 신체 준비만큼 중요합니다. 평온한 마음가짐이 최고의 퍼포먼스를 만듭니다.
        마음의 준비가 승리의 시작입니다.
      </p>

      <h2 id="time-management">시간 관리</h2>
      <p>
        워밍업 시간은 상황에 따라 조절합니다. 캐주얼 플레이 시 10분, 토너먼트 시 20분이 적당합니다.
        경기 시작 30분 전에 도착해 여유 있게 준비하세요. 각 단계를 균등하게 분배하고,
        갑작스러운 서두름은 피하세요. 시간 관리가 스트레스를 줄이고 완벽한 준비를 가능하게 합니다.
        계획적인 워밍업이 자신감을 줍니다.
      </p>

      <h2 id="injury-prevention">부상 예방</h2>
      <p>
        워밍업의 궁극적 목표는 부상 예방입니다. 모든 동작을 천천히 시작하고, 통증이 느껴지면 즉시
        멈추세요. 과도한 스트레칭은 오히려 해로울 수 있습니다. 날씨나 체력 상태에 따라 강도를
        조절하세요. 부상 예방 워밍업은 장기적인 테니스 생활의 기초입니다. 안전이 최우선입니다.
        건강한 몸이 지속적인 발전을 가능하게 합니다.
      </p>

      <h2 id="cool-down">쿨다운과 회복</h2>
      <p>
        워밍업만큼 중요한 쿨다운입니다. 가벼운 스트레칭과 호흡으로 몸을 진정시키세요.
        수분 보충과 단백질 섭취로 회복을 도우세요. 쿨다운은 근육통을 줄이고 다음 플레이를
        준비합니다. 경기 후 5-10분 쿨다운 시간을 갖는 습관을 들이세요. 완벽한 마무리가
        다음 경기의 성공을 보장합니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2019/01/tennis-warm-up-routine/74521/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">프로 선수의 워밍업 루틴 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/fitness/warm-up.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 워밍업 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
