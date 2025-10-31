import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisMentalGamePage() {
  const title = "테니스 멘탈 게임: 정신력이 90%를 좌우한다";
  const excerpt = "테니스 승리의 90%는 멘탈 게임입니다. 압박 상황 대처, 자신감 유지, 집중력 향상, 긍정적 마인드셋 구축까지 프로 선수들의 정신력 비법을 배우고 실전에서 적용해보세요.";

  const toc = [
    { id: "mental-importance", text: "멘탈의 중요성", depth: 2 as const },
    { id: "confidence-building", text: "자신감 구축", depth: 2 as const },
    { id: "focus-techniques", text: "집중력 기법", depth: 2 as const },
    { id: "pressure-handling", text: "압박 상황 대처", depth: 2 as const },
    { id: "positive-mindset", text: "긍정적 마인드셋", depth: 2 as const },
    { id: "pre-match-routine", text: "경기 전 루틴", depth: 2 as const },
    { id: "during-match", text: "경기 중 전략", depth: 2 as const },
    { id: "post-match", text: "경기 후 분석", depth: 2 as const },
    { id: "long-term", text: "장기적 멘탈 강화", depth: 2 as const },
    { id: "training-methods", text: "멘탈 트레이닝 방법", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "멘탈 게임이 정말 그렇게 중요한가요?",
      a: "네, 테니스에서 멘탈 게임은 기술만큼 중요합니다. 같은 실력이라면 멘탈이 강한 선수가 승리합니다. 멘탈 트레이닝으로 정신력을 강화하세요."
    },
    {
      q: "경기 중 집중력이 떨어질 때는 어떻게 하나요?",
      a: "짧은 호흡 운동으로 마음을 안정시키고, 현재 순간에 집중하세요. '하나의 포인트씩'이라는 마인드셋으로 접근합니다."
    },
    {
      q: "자신감을 잃었을 때 회복하는 방법은?",
      a: "과거 성공 경험을 떠올리고, 긍정적인 자기 대화를 실시하세요. 작은 목표부터 시작하여 자신감을 점진적으로 회복시키세요."
    },
    {
      q: "압박 상황에서 실수하지 않으려면?",
      a: "호흡을 안정시키고 루틴 동작에 집중하세요. '최선을 다했다'는 생각으로 마음의 부담을 줄입니다."
    },
    {
      q: "멘탈 트레이닝은 어떻게 시작해야 하나요?",
      a: "멘탈 트레이닝 도구부터 시작하세요. 일상적인 명상과 시각화 연습으로 기초를 다지세요. 꾸준한 연습이 중요합니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 테니스 승리의 90%는 멘탈 게임입니다. 압박 속에서도 침착함을 유지하고 긍정적 마인드셋으로 경기를 주도하세요. 멘탈 트레이닝으로 프로 선수 수준의 정신력을 갖추세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="mental-importance">멘탈의 중요성</h2>
      <p>
        테니스에서 멘탈 게임은 승패를 좌우하는 핵심 요소입니다. 기술과 체력이 비슷한 수준이라면
        정신력이 강한 선수가 승리합니다. 압박 상황에서 침착함을 유지하고, 자신감을 가지고 플레이하는 능력이
        프로 선수들을 구분 짓습니다. 멘탈 트레이닝 프로그램을 활용하여 체계적으로 정신력을 강화하세요.
      </p>

      <h2 id="confidence-building">자신감 구축</h2>
      <p>
        자신감은 모든 멘탈 게임의 기초입니다. 과거 성공 경험을 떠올리고, 긍정적인 자기 대화를 실시하세요.
        작은 목표부터 시작하여 점진적으로 자신감을 쌓아가며, 실패를 성장의 기회로 받아들이는 마인드셋을 갖추세요.
        자신감이 있으면 경기 중 더 과감한 플레이를 시도할 수 있습니다.
      </p>

      <h2 id="focus-techniques">집중력 기법</h2>
      <p>
        테니스에서는 순간적인 집중력이 생명입니다. '하나의 포인트씩'이라는 마인드셋으로 현재 순간에 집중하고,
        산만한 생각을 배제하세요. 호흡법이나 앵커링 기법으로 집중력을 유지하며,
        멘탈 트레이닝 도구의 집중력 훈련을 활용하여 반사 신경을 기르세요.
      </p>

      <h2 id="pressure-handling">압박 상황 대처</h2>
      <p>
        중요한 포인트나 세트 포인트 상황에서 실수하지 않도록 호흡을 안정시키고 루틴 동작에 집중하세요.
        '최선을 다했다'는 생각으로 마음의 부담을 줄이고, 긍정적인 이미지를 시각화합니다.
        압박 상황을 성장의 기회로 받아들이며, 침착함을 유지하는 연습을 반복하세요.
      </p>

      <h2 id="positive-mindset">긍정적 마인드셋</h2>
      <p>
        긍정적 마인드셋은 경기력을 극대화합니다. 실수를 해도 '다음 포인트는 잘할 수 있다'는 생각으로
        빠르게 회복하고, 상대의 강점을 인정하면서도 자신의 플레이에 집중하세요.
        긍정적인 자기 대화로 동기 부여를 유지하며, 부정적인 생각을 긍정으로 전환하는 훈련을 실시합니다.
      </p>

      <h2 id="pre-match-routine">경기 전 루틴</h2>
      <p>
        경기 전 루틴은 멘탈 안정을 위한 필수 요소입니다. 일정한 시간에 일어나 스트레칭과 가벼운 운동으로
        몸을 풀고, 시각화로 성공적인 경기를 상상하세요. 긍정적인 명언을 되새기며 자신감을 충전하고,
        경기 시작 30분 전부터는 마음의 준비를 마칩니다. 일관된 루틴이 경기력 안정화에 도움이 됩니다.
      </p>

      <h2 id="during-match">경기 중 전략</h2>
      <p>
        경기 중에는 현재 포인트에만 집중하고, 과거 실수나 미래 걱정을 버리세요.
        호흡을 안정시키며 침착함을 유지하고, 어려운 상황에서도 기본기에 충실합니다.
        세트나 게임이 끝날 때마다 짧은 휴식으로 마음을 리셋하며, 긍정적인 코칭으로 자신을 독려하세요.
      </p>

      <h2 id="post-match">경기 후 분석</h2>
      <p>
        경기 후 분석은 성장의 기회입니다. 승패에 관계없이 잘한 점과 개선할 점을 객관적으로 분석하고,
        감정적인 평가를 피하세요. 멘탈 측면에서는 어떤 상황에서 침착함을 유지했고, 어떤 상황에서 흔들렸는지
        점검하며 다음 경기를 위한 교훈으로 삼습니다. 긍정적인 마인드셋으로 다음 도전을 준비하세요.
      </p>

      <h2 id="long-term">장기적 멘탈 강화</h2>
      <p>
        멘탈 강화는 단기간에 이루어지지 않습니다. 꾸준한 명상, 요가, 독서로 정신력을 키우고,
        일상생활에서도 긍정적 태도를 유지하세요. 멘탈 트레이닝 도구의 다양한 프로그램을 활용하여
        체계적으로 훈련하며, 프로 선수들의 멘탈 비법을 연구합니다. 장기적 접근이 진정한 정신력을 만듭니다.
      </p>

      <h2 id="training-methods">멘탈 트레이닝 방법</h2>
      <p>
        효과적인 멘탈 트레이닝을 위해 명상과 시각화 연습을 시작하세요. 호흡법으로 마음의 안정을 기르고,
        긍정적 자기 대화로 자신감을 강화합니다. 멘탈 트레이닝 도구의 다양한 훈련 프로그램을 활용하여
        체계적으로 실시하며, 일상에서 적용할 수 있는 실천적인 방법들을 익히세요. 꾸준한 연습이 핵심입니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/mental-tennis-guide/345678/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 멘탈 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/mental-game/mental-toughness.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 멘탈 터프니스 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
