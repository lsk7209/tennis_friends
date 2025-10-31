import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisFitnessConditioningPage() {
  const title = "테니스 체력 컨디셔닝: 경기력 유지의 핵심";
  const excerpt = "테니스 선수들을 위한 종합 체력 관리 가이드. 웜업/쿨다운 루틴, 근력 트레이닝, 유연성 향상, 부상 예방 전략까지 경기력 극대화를 위한 과학적 컨디셔닝 방법을 배우세요.";

  const toc = [
    { id: "fitness-importance", text: "체력의 중요성", depth: 2 as const },
    { id: "warmup-routine", text: "웜업 루틴", depth: 2 as const },
    { id: "strength-training", text: "근력 트레이닝", depth: 2 as const },
    { id: "flexibility", text: "유연성 향상", depth: 2 as const },
    { id: "endurance", text: "지구력 향상", depth: 2 as const },
    { id: "agility-speed", text: "민첩성과 속도", depth: 2 as const },
    { id: "injury-prevention", text: "부상 예방", depth: 2 as const },
    { id: "recovery", text: "회복 전략", depth: 2 as const },
    { id: "nutrition", text: "영양 관리", depth: 2 as const },
    { id: "periodization", text: "훈련 주기화", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "테니스 선수에게 가장 중요한 체력 요소는?",
      a: "민첩성, 지구력, 코어 근력, 그리고 유연성이 가장 중요합니다. 체력 테스트 도구로 현재 수준을 파악하고 목표 설정으로 체계적으로 향상시키세요."
    },
    {
      q: "경기 전 웜업은 어떻게 해야 하나요?",
      a: "10-15분의 가벼운 조깅부터 시작하여 동적 스트레칭, 테니스 전용 드릴로 진행합니다. 심박수를 점진적으로 높여 경기 준비 상태를 만드세요."
    },
    {
      q: "근력 트레이닝은 언제 하는 게 좋나요?",
      a: "테니스 훈련 후 또는 별도의 날에 실시하세요. 과도한 근력 트레이닝은 경기력 저하를 유발할 수 있으니 주 2-3회, 45분 이내로 제한합니다."
    },
    {
      q: "부상을 예방하려면?",
      a: "올바른 자세 유지, 충분한 휴식, 균형 잡힌 훈련이 중요합니다. 통증이 느껴지면 즉시 전문가 상담을 받으세요."
    },
    {
      q: "피로 회복을 위한 방법은?",
      a: "충분한 수면, 영양 섭취, 가벼운 스트레칭이 기본입니다. 테니스 다이어트 계산기로 최적의 영양 계획을 세우고 회복을 촉진하세요."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 테니스 체력 컨디셔닝은 경기력 유지의 핵심입니다. 체계적인 웜업, 근력 트레이닝, 회복 전략으로 최적의 컨디션을 유지하세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="fitness-importance">체력의 중요성</h2>
      <p>
        테니스에서 체력은 기술 못지않게 중요한 요소입니다. 긴 랠리 상황에서도 일관된 퍼포먼스를 유지하고,
        상대를 지치게 만드는 체력이 승패를 좌우합니다. 체력 테스트 도구로 현재 수준을 파악하고,
        체계적인 훈련으로 체력을 향상시키세요. 체력이 뒷받침되어야 기술도 제대로 발휘될 수 있습니다.
      </p>

      <h2 id="warmup-routine">웜업 루틴</h2>
      <p>
        효과적인 웜업은 경기력 향상의 첫걸음입니다. 10-15분의 가벼운 조깅으로 심박수를 높인 후,
        동적 스트레칭으로 근육을 풀어줍니다. 테니스 전용 드릴로 서브, 타격 연습을 하며
        점진적으로 강도를 높여 경기 준비 상태를 만드세요. 충분한 웜업은 부상을 예방하고 퍼포먼스를 극대화합니다.
      </p>

      <h2 id="strength-training">근력 트레이닝</h2>
      <p>
        테니스 선수에게 필요한 근력 트레이닝은 코어, 다리, 팔 근력을 균형 있게 강화하는 것입니다.
        플랭크, 스쿼트, 푸시업 등의 운동으로 기능적 근력을 기르세요. 주 2-3회, 45분 이내로 제한하여
        과도한 근력 트레이닝이 경기력 저하를 유발하지 않도록 주의하세요. 올바른 자세로 안전하게 실시합니다.
      </p>

      <h2 id="flexibility">유연성 향상</h2>
      <p>
        유연성은 테니스의 핵심 요소 중 하나입니다. 긴 스트레칭으로 근육의 가동범위를 늘리고,
        부상 위험을 줄입니다. 매 경기 전후 정적 스트레칭을 실시하고, 요가나 필라테스로
        유연성을 향상시키세요. 유연성이 높으면 더 큰 스윙 궤적을 만들 수 있어 파워도 증가합니다.
      </p>

      <h2 id="endurance">지구력 향상</h2>
      <p>
        테니스 지구력은 긴 랠리 상황에서도 일관된 퍼포먼스를 유지하는 능력입니다.
        인터벌 트레이닝, 서킷 트레이닝으로 심폐 지구력을 기르세요. 실제 테니스 코트에서
        지속적인 랠리 연습도 효과적입니다. 지구력이 향상되면 경기 후반에도 강한 모습을 유지할 수 있습니다.
      </p>

      <h2 id="agility-speed">민첩성과 속도</h2>
      <p>
        테니스에서 민첩성과 속도는 코트 커버리지에 직접적인 영향을 미칩니다. 사다리 드릴, 코니 드릴로
        방향 전환 능력을 기르고, 스프린트 훈련으로 속도를 향상시키세요. 민첩성이 높으면
        상대의 타격에 더 효과적으로 대응할 수 있습니다. 체력 테스트로 현재 수준을 측정하고 개선하세요.
      </p>

      <h2 id="injury-prevention">부상 예방</h2>
      <p>
        테니스 부상 예방을 위해 올바른 자세 유지, 충분한 휴식, 균형 잡힌 훈련이 중요합니다.
        통증이 느껴지면 즉시 훈련을 중단하고 전문가 상담을 받으세요. 예방적 스트레칭과
        코어 근력 강화로 안정적인 자세를 유지할 수 있습니다. 부상 예방이 곧 경기력 유지입니다.
      </p>

      <h2 id="recovery">회복 전략</h2>
      <p>
        효과적인 회복 전략은 다음 경기력을 좌우합니다. 경기 후 아이스 배스나 냉찜질로 염증을 줄이고,
        충분한 수면과 영양 섭취로 회복을 촉진하세요. 가벼운 스트레칭과 마사지로 근육 긴장을 풀어줍니다.
        회복 전략이 잘 갖추어지면 더 잦은 훈련이 가능해집니다.
      </p>

      <h2 id="nutrition">영양 관리</h2>
      <p>
        테니스 선수의 영양 관리는 경기력에 직접적인 영향을 미칩니다. 탄수화물, 단백질, 지방의 균형 잡힌 섭취와
        수분 보충이 중요합니다. 테니스 다이어트 계산기로 개인 맞춤 영양 계획을 세우고,
        경기 전후 최적의 영양 섭취로 퍼포먼스를 극대화하세요. 영양 관리가 회복 속도를 좌우합니다.
      </p>

      <h2 id="periodization">훈련 주기화</h2>
      <p>
        훈련 주기화는 과도한 훈련으로 인한 부상을 예방하고 최적의 컨디션을 유지하는 방법입니다.
        강도 높은 훈련과 회복 기간을 번갈아 배치하여 체력을 체계적으로 향상시키세요.
        시즌별, 월별, 주별로 훈련 강도를 조절하며 목표 설정 도구로 계획을 세우고 실행하세요.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-conditioning/789012/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 컨디셔닝 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/fitness/tennis-fitness.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 테니스 피트니스 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
