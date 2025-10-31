import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisInjuryPreventionPage() {
  const title = "테니스 부상 예방 가이드: 건강한 테니스를 위한 필수 전략";
  const excerpt = "테니스에서 발생하는 주요 부상(테니스 엘보우, 어깨 통증, 무릎 부상 등)의 원인과 예방 방법을 종합적으로 다룹니다. 올바른 자세, 웜업, 스트레칭으로 부상을 예방하세요.";

  const toc = [
    { id: "injury-importance", text: "부상 예방의 중요성", depth: 2 as const },
    { id: "common-injuries", text: "테니스 주요 부상", depth: 2 as const },
    { id: "warmup-routines", text: "웜업 루틴", depth: 2 as const },
    { id: "stretching-guide", text: "스트레칭 가이드", depth: 2 as const },
    { id: "technique-correction", text: "기술 교정", depth: 2 as const },
    { id: "strength-training", text: "근력 강화", depth: 2 as const },
    { id: "equipment-check", text: "장비 점검", depth: 2 as const },
    { id: "court-safety", text: "코트 안전 수칙", depth: 2 as const },
    { id: "recovery-methods", text: "회복 방법", depth: 2 as const },
    { id: "when-to-seek-help", text: "전문가 상담 시기", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "테니스 엘보우는 어떻게 예방하나요?",
      a: "올바른 백핸드 자세로 팔꿈치에 무리가 가지 않게 하고, 손목 근력을 강화하세요. 통증이 느껴지면 즉시 휴식하고 전문가 상담을 받으세요."
    },
    {
      q: "어깨 통증의 주요 원인은 무엇인가요?",
      a: "서브 동작의 반복과 잘못된 자세가 주요 원인입니다. 어깨 근력 강화와 올바른 서브 모션을 유지하세요."
    },
    {
      q: "무릎 부상을 예방하려면?",
      a: "무릎 주변 근력을 강화하고, 착지 시 무릎을 살짝 구부리는 습관을 들이세요. 무릎 보호대를 착용하는 것도 도움이 됩니다."
    },
    {
      q: "부상 후 언제부터 다시 시작해야 하나요?",
      a: "통증이 완전히 사라진 후 가벼운 스트레칭부터 시작하세요. 무리하게 재개하면 재부상을 유발할 수 있습니다."
    },
    {
      q: "부상 예방을 위한 웜업 시간은?",
      a: "최소 10-15분의 동적 웜업을 실시하세요. 관절 가동범위 확보와 근육 온도 상승이 중요합니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 테니스 부상 예방은 건강한 테니스 생활의 기본입니다. 올바른 웜업, 자세 교정, 근력 강화로 80%의 부상을 예방할 수 있습니다. 통증이 느껴지면 즉시 휴식을 취하세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="injury-importance">부상 예방의 중요성</h2>
      <p>
        테니스 부상 예방은 단순한 건강 관리 차원을 넘어 경기력 유지와 장기적인 테니스 생활을 위한 필수 요소입니다.
        올바른 예방 습관으로 80% 이상의 부상을 방지할 수 있으며, 부상 발생 시 빠른 회복을 돕습니다.
        부상 예방은 테니스 실력 향상의 기본 토대가 됩니다. 체계적인 예방 관리가 곧 최고의 투자입니다.
      </p>

      <h2 id="common-injuries">테니스 주요 부상</h2>
      <p>
        테니스에서 가장 흔한 부상으로는 테니스 엘보우, 회전근개 파열, 무릎 연골 손상, 아킬레스건염 등이 있습니다.
        이러한 부상들은 잘못된 자세, 과도한 사용, 부적절한 장비에서 비롯되는 경우가 많습니다.
        각 부상의 특징과 원인을 파악하고, 개인별 맞춤 예방 전략을 수립하세요.
        조기 발견과 적절한 관리가 중요합니다.
      </p>

      <h2 id="warmup-routines">웜업 루틴</h2>
      <p>
        효과적인 웜업은 부상 예방의 첫걸음입니다. 동적 스트레칭으로 관절 가동범위를 늘리고,
        가벼운 테니스 드릴로 근육을 서서히 데웁니다. 10-15분의 충분한 웜업으로 몸이 경기 준비 상태가 됩니다.
        추운 날씨나 장시간 휴식 후에는 더 긴 웜업 시간을 확보하세요. 웜업 부족은 대부분의 부상을 유발합니다.
      </p>

      <h2 id="stretching-guide">스트레칭 가이드</h2>
      <p>
        경기 전후 정적 스트레칭으로 근육 긴장을 완화하고 유연성을 유지합니다.
        어깨, 팔꿈치, 손목, 다리, 엉덩이 등 테니스에 사용하는 모든 부위를 스트레칭하세요.
        각 스트레칭은 20-30초씩 유지하며, 통증이 느껴지지 않는 범위에서 실시합니다.
        정기적인 스트레칭으로 부상 위험을 크게 낮출 수 있습니다.
      </p>

      <h2 id="technique-correction">기술 교정</h2>
      <p>
        잘못된 기술은 부상의 주요 원인입니다. 포핸드, 백핸드, 서브 등 모든 타격 기술을 올바른 자세로 교정하세요.
        과도한 손목 사용이나 팔꿈치 스트레인을 피하고, 체중 이동을 자연스럽게 활용합니다.
        전문 코치의 지도나 동영상 분석으로 자세를 개선하세요. 올바른 기술이 최선의 부상 예방입니다.
      </p>

      <h2 id="strength-training">근력 강화</h2>
      <p>
        균형 잡힌 근력 강화로 관절을 보호하고 안정성을 높입니다. 코어 근력, 어깨 주변 근육,
        다리 근력을 집중적으로 강화하세요. 체력 테스트로 현재 수준을 파악하고,
        단계적인 근력 훈련 프로그램을 실시합니다. 근력 불균형이 부상의 주요 원인임을 기억하세요.
      </p>

      <h2 id="equipment-check">장비 점검</h2>
      <p>
        장비 상태가 부상에 직접적인 영향을 미칩니다. 라켓 그립이 미끄러지지 않게 유지하고,
        스트링 상태를 주기적으로 점검하세요. 신발은 코트 표면에 맞는 것을 착용하고,
        손목 보호대나 무릎 보호대를 적절히 사용합니다. 장비 유지관리가 곧 부상 예방입니다.
      </p>

      <h2 id="court-safety">코트 안전 수칙</h2>
      <p>
        코트 상태에 따른 안전 수칙을 준수합니다. 젖은 코트에서는 미끄러짐 사고에 유의하고,
        코트 표면에 맞는 신발을 착용하세요. 주변 환경을 살피며 다른 선수들과의 충돌을 방지합니다.
        코트 안전 점검이 경기력 유지와 부상 예방에 필수적입니다. 날씨 변화에 따른 적응도 중요합니다.
      </p>

      <h2 id="recovery-methods">회복 방법</h2>
      <p>
        효과적인 회복으로 부상 위험을 낮춥니다. 경기 후 아이스 배스와 마사지로 염증을 줄이고,
        충분한 수면과 영양 섭취로 회복을 촉진합니다. 과도한 훈련을 피하고,
        회복 기간을 충분히 확보하세요. 회복 관리가 곧 예방입니다.
      </p>

      <h2 id="when-to-seek-help">전문가 상담 시기</h2>
      <p>
        통증이 지속되거나 심해지면 즉시 전문가 상담을 받으세요. 테니스 엘보우 초기 증상,
        어깨 통증, 무릎 이상감지 시 무시하지 말고 전문의를 찾습니다. 조기 진단과 치료가 중요하며,
        재활 프로그램을 통해 안전하게 테니스로 복귀할 수 있습니다. 건강이 최우선입니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/injury-prevention-tennis/123789/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 부상 예방 가이드 - Tennis.com</a></li>
          <a href="https://www.usta.com/en/home/play/safe/injury-prevention.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 부상 예방 가이드</a>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
