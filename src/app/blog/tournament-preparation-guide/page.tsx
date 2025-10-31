import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TournamentPreparationGuidePage() {
  const title = "토너먼트 준비 가이드: 대회 우승을 위한 완벽 전략";
  const excerpt = "테니스 대회 참가부터 우승까지의 모든 과정을 종합적으로 안내합니다. 멘탈 준비, 체력 관리, 전략 수립, 경기 운영까지 프로 선수들의 대회 준비 비법을 공개합니다.";

  const toc = [
    { id: "tournament-importance", text: "대회 참가의 중요성", depth: 2 as const },
    { id: "preparation-phase", text: "사전 준비 단계", depth: 2 as const },
    { id: "physical-prep", text: "체력 준비", depth: 2 as const },
    { id: "mental-prep", text: "멘탈 준비", depth: 2 as const },
    { id: "technical-prep", text: "기술 준비", depth: 2 as const },
    { id: "tactical-prep", text: "전술 준비", depth: 2 as const },
    { id: "day-before", text: "대회 전날 준비", depth: 2 as const },
    { id: "match-day", text: "대회 당일 운영", depth: 2 as const },
    { id: "recovery-after", text: "대회 후 회복", depth: 2 as const },
    { id: "continuous-improvement", text: "지속적 발전", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "대회 참가 자격은 어떻게 되나요?",
      a: "대부분의 대회는 NTRP 등급이나 참가 자격 요건이 있습니다. NTRP 테스트로 자신의 실력을 확인하고 적합한 대회를 선택하세요."
    },
    {
      q: "대회 준비는 언제부터 시작해야 하나요?",
      a: "대회 4-6주 전부터 준비를 시작하세요. 체력 훈련, 기술 연습, 멘탈 준비를 단계적으로 진행합니다."
    },
    {
      q: "대회 당일 식사는 어떻게 해야 하나요?",
      a: "가벼운 탄수화물 중심으로 2-3시간 전에 식사하고, 경기 중에는 스포츠 드링크로 수분과 당분을 보충하세요. 테니스 다이어트 계산기로 영양 계획을 세우세요."
    },
    {
      q: "대회 중 부상을 당하면 어떻게 해야 하나요?",
      a: "즉시 코트 의료진에게 알리고, 심한 통증 시 기권을 고려하세요. 부상 예방을 위해 충분한 워밍업과 컨디션 관리를 실시합니다."
    },
    {
      q: "대회 후 분석은 어떻게 해야 하나요?",
      a: "경기 녹화본을 보며 강점과 약점을 분석하고, 다음 대회를 위한 개선점을 정리하세요. 목표 설정 도구로 장기 계획을 세웁니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 대회 준비는 단순한 참가가 아닌 전략적 접근입니다. 4-6주 전부터 체계적인 준비로 최적의 컨디션을 만들고, 현장에서 올바른 운영으로 승률을 높이세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="tournament-importance">대회 참가의 중요성</h2>
      <p>
        테니스 대회 참가는 실력 향상의 중요한 기회입니다. 실제 경기 경험을 쌓고,
        경쟁 상황에서의 멘탈을 기를 수 있으며, 목표 설정의 동기 부여가 됩니다.
        또한 다른 선수들과의 교류를 통해 네트워킹 기회가 되며, 자신의 실력을 객관적으로 평가할 수 있습니다.
        체계적인 대회 준비는 테니스 실력 전반의 향상에 기여합니다.
      </p>

      <h2 id="preparation-phase">사전 준비 단계</h2>
      <p>
        대회 준비는 대회 4-6주 전부터 시작합니다. 먼저 참가 자격을 확인하고 등록을 완료하세요.
        대회 규정, 코트 상태, 날씨 조건을 미리 파악하고, 필요한 장비를 준비합니다.
        스케줄을 조정하여 충분한 훈련 시간을 확보하고, 컨디션 조절에 신경 쓰세요.
        사전 준비가 철저할수록 대회 당일의 부담이 줄어듭니다.
      </p>

      <h2 id="physical-prep">체력 준비</h2>
      <p>
        대회 체력 준비는 전반적인 컨디션 관리입니다. 테니스 체력 컨디셔닝 프로그램으로
        지구력과 근력을 강화하고, 부상 예방을 위한 유연성 훈련을 실시합니다.
        체력 테스트로 현재 상태를 파악하고, 목표 설정으로 체계적인 훈련 계획을 세우세요.
        대회 직전 1주는 강도 높은 훈련을 줄이고 회복에 집중합니다.
      </p>

      <h2 id="mental-prep">멘탈 준비</h2>
      <p>
        대회 멘탈 준비는 승패를 좌우하는 핵심 요소입니다. 멘탈 트레이닝 프로그램으로
        압박 상황 대처 능력을 기르고, 긍정적 마인드셋을 구축합니다.
        시각화 훈련으로 성공적인 경기를 상상하고, 호흡법으로 마음의 안정을 유지하는 법을 익히세요.
        자신감 강화와 집중력 향상이 대회 성과에 큰 영향을 미칩니다.
      </p>

      <h2 id="technical-prep">기술 준비</h2>
      <p>
        기술 준비는 자신의 강점을 극대화하고 약점을 보완하는 과정입니다.
        포핸드, 백핸드, 서브, 발리 등 모든 기술을 점검하고, 부족한 부분을 집중적으로 연습합니다.
        실제 코트에서 다양한 상황을 가정한 훈련을 실시하고, 스트링 텐션과 라켓 상태를 최적화하세요.
        기술적 완성도가 높을수록 경기 운영이 수월해집니다.
      </p>

      <h2 id="tactical-prep">전술 준비</h2>
      <p>
        전술 준비는 상대 분석과 전략 수립입니다. 상대 분석 도구로 예상 상대의 스타일을 파악하고,
        이에 맞는 카운터 전략을 준비합니다. 패턴 플레이, 네트 플레이, 수비 전략 등
        다양한 상황별 전술을 연구하고 연습합니다. 전략적 사고가 대회 승률을 높이는 핵심입니다.
      </p>

      <h2 id="day-before">대회 전날 준비</h2>
      <p>
        대회 전날은 컨디션 최적화에 집중합니다. 가벼운 훈련으로 몸 상태를 점검하고,
        충분한 휴식을 취합니다. 대회 장소와 시간을 다시 확인하고, 필요한 준비물을 챙깁니다.
        일찍 잠자리에 들고, 긍정적인 마음가짐으로 내일 경기를 준비합니다.
        전날 준비가 대회 당일 퍼포먼스에 직접적인 영향을 미칩니다.
      </p>

      <h2 id="match-day">대회 당일 운영</h2>
      <p>
        대회 당일은 체계적인 운영이 중요합니다. 경기 시작 2시간 전부터 도착하여
        충분한 워밍업을 실시하고, 경기 운영 계획을 세웁니다. 세트와 게임 단위로 목표를 설정하고,
        휴식 시간을 효과적으로 활용합니다. 멘탈 상태를 유지하며, 상황에 따른 전략 조정을 합니다.
        프로페셔널한 태도로 경기를 운영하세요.
      </p>

      <h2 id="recovery-after">대회 후 회복</h2>
      <p>
        대회 후 회복은 다음 실력을 위한 투자입니다. 충분한 휴식을 취하고,
        테니스 다이어트 계산기로 회복을 위한 영양 섭취를 계획합니다.
        경기 분석으로 강점과 개선점을 파악하고, 다음 대회를 위한 목표를 설정합니다.
        몸과 마음의 회복을 우선시하며, 과도한 자책이나 자만을 피합니다.
      </p>

      <h2 id="continuous-improvement">지속적 발전</h2>
      <p>
        대회 참가는 성장의 과정입니다. 매 대회 후 분석과 개선을 통해 지속적으로 발전하세요.
        목표 설정 도구로 장기 목표를 설정하고, 단계적으로 실력을 향상시키세요.
        다양한 대회 참가로 경험을 쌓고, 멘탈과 기술을 균형 있게 발전시키는 것이 중요합니다.
        꾸준한 노력으로 테니스 실력의 진정한 향상을 이루세요.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tournament-preparation/901234/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">토너먼트 준비 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tournaments/preparing-for-competition.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 대회 준비 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
