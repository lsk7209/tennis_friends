import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisFitnessConditioningFinalPage() {
  const title = "테니스 체력 컨디셔닝: 경기력 유지의 핵심";
  const excerpt = "테니스 경기는 체력전입니다. 2시간 이상 지속되는 경기에서 최고의 퍼포먼스를 유지하는 체력 컨디셔닝 프로그램을 소개합니다.";

  const toc = [
    { id: "fitness-importance", text: "체력의 중요성", depth: 2 as const },
    { id: "aerobic-training", text: "유산소 훈련", depth: 2 as const },
    { id: "anaerobic-training", text: "무산소 훈련", depth: 2 as const },
    { id: "strength-training", text: "근력 훈련", depth: 2 as const },
    { id: "agility-training", text: "민첩성 훈련", depth: 2 as const },
    { id: "tennis-specific", text: "테니스 특화 훈련", depth: 2 as const },
    { id: "recovery-methods", text: "회복 방법", depth: 2 as const },
    { id: "nutrition-strategy", text: "영양 전략", depth: 2 as const },
    { id: "periodization", text: "훈련 주기화", depth: 2 as const },
    { id: "monitoring-progress", text: "진행 상황 모니터링", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "테니스에 가장 중요한 체력 요소는 무엇인가요?",
      a: "지구력과 민첩성이 가장 중요합니다. 테니스 경기는 2시간 이상 지속되며, 빠른 방향 전환이 빈번하게 일어납니다."
    },
    {
      q: "주당 얼마나 훈련해야 하나요?",
      a: "주 4-5회, 회당 45-60분이 적당합니다. 테니스 훈련과 체력 훈련을 균형 있게 배분하세요."
    },
    {
      q: "체력 훈련은 언제 하는 게 좋나요?",
      a: "테니스 훈련 후나 별도의 날에 하세요. 같은 날 하더라도 테니스 훈련 후 2-3시간 뒤에 하는 것이 좋습니다."
    },
    {
      q: "근력 훈련은 얼마나 자주 해야 하나요?",
      a: "주 2-3회로 충분합니다. 과도한 근력 훈련은 오히려 민첩성을 떨어뜨릴 수 있습니다."
    },
    {
      q: "체력 테스트는 어떻게 하나요?",
      a: "1.5마일 달리기, 푸시업, 스쿼트 테스트로 기본 체력을 확인하세요. 테니스 특화 테스트로는 랠리 지구력 테스트가 좋습니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 체력은 테니스 실력의 50%를 차지합니다. 체계적인 컨디셔닝 프로그램으로 경기력의 한계를 넘어 보세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="fitness-importance">체력의 중요성</h2>
      <p>
        테니스는 체력 스포츠입니다. 프로 경기는 2시간 이상 지속되며, 빠른 방향 전환과 강력한
        타격이 반복됩니다. 체력이 부족하면 기술이 떨어지고 판단력이 흐려집니다. 반대로 체력이
        좋으면 후반까지 최고의 퍼포먼스를 유지할 수 있습니다. 체력 컨디셔닝은 테니스 실력 향상의
        필수 요소입니다. 꾸준한 체력 훈련이 승리의 핵심입니다.
      </p>

      <h2 id="aerobic-training">유산소 훈련</h2>
      <p>
        유산소 훈련은 테니스 지구력의 기초입니다. 장거리 달리기, 사이클링, 수영 등을 추천합니다.
        테니스 경기의 특성을 고려해 인터벌 트레이닝이 효과적입니다. 30초 전력 질주와 30초 회복을
        반복하는 HIIT 훈련이 좋습니다. 유산소 훈련은 심폐 지구력을 향상시키고 피로 회복을 돕습니다.
        주 2-3회, 30-45분씩 꾸준히 실시하세요.
      </p>

      <h2 id="anaerobic-training">무산소 훈련</h2>
      <p>
        무산소 훈련은 강력한 타격과 빠른 움직임을 위한 근력과 파워를 기릅니다. 스프린트, 점프,
        복합 운동 등이 포함됩니다. 테니스에 특화된 무산소 훈련으로는 서브 동작 모방, 스플릿 스텝
        반복 등이 있습니다. 무산소 훈련은 근육의 폭발력을 향상시키고 젖산 역치를 높입니다.
        유산소 훈련과 균형 있게 진행하세요.
      </p>

      <h2 id="strength-training">근력 훈련</h2>
      <p>
        근력 훈련은 테니스 타격의 파워를 증가시키고 부상을 예방합니다. 전신 근력 운동을 중심으로
        하되, 코어와 다리에 집중하세요. 스쿼트, 데드리프트, 플랭크 등이 효과적입니다.
        테니스 특화 근력으로는 회전력 강화 운동, 밸런스 운동이 있습니다. 무거운 무게보다는
        올바른 자세와 반복이 중요합니다. 주 2회, 8-12회 반복으로 진행하세요.
      </p>

      <h2 id="agility-training">민첩성 훈련</h2>
      <p>
        민첩성은 테니스에서 가장 중요한 체력 요소입니다. 사다리 드릴, 콘 드릴, 반응 훈련 등이
        효과적입니다. 테니스 코트 모양의 민첩성 훈련 코스가 특히 좋습니다. 민첩성 훈련은
        방향 전환 속도를 향상시키고 반사 신경을 기릅니다. 빠른 풋워크의 기초가 됩니다.
        주 2-3회, 15-20분씩 집중 훈련하세요.
      </p>

      <h2 id="tennis-specific">테니스 특화 훈련</h2>
      <p>
        테니스 특화 훈련이 가장 효과적입니다. 서브 동작 반복, 랠리 지구력 훈련, 회전력 강화 등이
        포함됩니다. 실제 코트에서 하는 크로스 트레이닝이 이상적입니다. 특화 훈련은 기술과 체력을
        동시에 향상시킵니다. 일반 체력 훈련과 병행하여 균형을 맞추세요. 특화 훈련이
        경기력 향상의 핵심입니다.
      </p>

      <h2 id="recovery-methods">회복 방법</h2>
      <p>
        회복은 훈련만큼 중요합니다. 충분한 수면, 영양 섭취, 스트레칭이 필수적입니다.
        아이스 배스나 컴프레션 의류 활용도 효과적입니다. 테니스 후 24시간은 가벼운 활동만 하세요.
        과도한 훈련은 오히려 역효과를 낼 수 있습니다. 회복 방법을 잘 활용하면 훈련 효과가
        극대화됩니다. 건강한 회복이 지속적인 발전을 가능하게 합니다.
      </p>

      <h2 id="nutrition-strategy">영양 전략</h2>
      <p>
        영양은 체력의 연료입니다. 탄수화물, 단백질, 지방의 균형 있는 섭취가 중요합니다.
        경기 전에는 탄수화물을, 경기 중에는 에너지 젤이나 바나나를 섭취하세요. 수분 보충도
        필수적입니다. 체력 훈련 후에는 단백질 중심의 회복 식사를 하세요. 영양 전략이
        체력 향상의 30%를 차지합니다. 전문 영양사의 조언을 받는 것도 좋습니다.
      </p>

      <h2 id="periodization">훈련 주기화</h2>
      <p>
        훈련을 체계적으로 계획하세요. 기초 체력 쌓기, 기술 향상, 경기력 극대화 단계로 나누어
        진행합니다. 시즌에 따라 훈련 강도를 조절하세요. 과도한 훈련은 부상을 유발할 수 있습니다.
        주기화된 훈련이 최적의 경기력을 유지합니다. 계획적인 접근이 성공의 핵심입니다.
        훈련 주기화로 장기적인 발전을 이루세요.
      </p>

      <h2 id="monitoring-progress">진행 상황 모니터링</h2>
      <p>
        훈련 효과를 모니터링하세요. 체력 테스트, 경기 분석, 주관적 피로도를 기록합니다.
        개선되지 않는 부분은 훈련 방법을 수정하세요. 꾸준한 모니터링이 효율적인 훈련을
        가능하게 합니다. 데이터 기반 접근이 발전의 지름길입니다. 정기적인 평가로
        훈련 방향을 조정하세요.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2020/04/tennis-fitness-conditioning/801234/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 체력 컨디셔닝 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/fitness/conditioning.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 컨디셔닝 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

