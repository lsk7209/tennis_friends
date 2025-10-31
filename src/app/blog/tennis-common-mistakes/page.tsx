import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisCommonMistakesPage() {
  const title = "테니스 실수 피하기: 초보자의 80% 실수를 바로잡는 방법";
  const excerpt = "왜 공이 네트에 걸릴까? 왜 포핸드가 안 맞을까? 초보자들이 가장 많이 하는 실수 15가지와 즉시 고칠 수 있는 방법들.";

  const toc = [
    { id: "grip-mistakes", text: "그립 실수", depth: 2 as const },
    { id: "stance-errors", text: "스탠스 오류", depth: 2 as const },
    { id: "swing-problems", text: "스윙 문제", depth: 2 as const },
    { id: "timing-issues", text: "타이밍 문제", depth: 2 as const },
    { id: "movement-errors", text: "이동 실수", depth: 2 as const },
    { id: "mental-mistakes", text: "멘탈 실수", depth: 2 as const },
    { id: "equipment-issues", text: "장비 문제", depth: 2 as const },
    { id: "practice-habits", text: "연습 습관", depth: 2 as const },
    { id: "court-etiquette", text: "코트 에티켓 실수", depth: 2 as const },
    { id: "progression-tips", text: "교정 방법", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "공이 항상 네트에 걸리는 이유는?",
      a: "라켓 헤드를 너무 일찍 닫거나, 팔꿈치를 몸에서 멀리 뻗는 습관 때문입니다. 라켓을 더 높이 유지하고 팔꿈치를 몸 가까이에 붙이세요."
    },
    {
      q: "포핸드가 계속 빗나가는 이유는?",
      a: "공을 너무 열심히 쫓아 눈이 공에서 떨어지기 때문입니다. 라켓 페이스를 공을 향해 유지하고, 자연스러운 스윙을 하세요."
    },
    {
      q: "왜 서브가 안 들어갈까요?",
      a: "공을 던질 때 몸이 뒤로 젖혀지지 않아 파워가 부족합니다. 공을 높이 던지고 몸을 앞으로 기울여 타격하세요."
    },
    {
      q: "백핸드가 약한 이유는?",
      a: "양손 백핸드를 고집하다 한 손으로 바꿀 때 컨트롤이 떨어집니다. 천천히 전환하고, 올바른 그립을 익히세요."
    },
    {
      q: "왜 경기가 지루해질까요?",
      a: "항상 같은 샷만 반복하기 때문입니다. 드롭 샷, 로브, 스핀 등 다양한 기술을 연습하세요."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 실수는 성장의 기회입니다. 초보자들의 80% 실수를 인지하고 교정하면 누구나 빠르게 발전할 수 있습니다.
      </blockquote>

      <TOC items={toc} />

      <h2 id="grip-mistakes">그립 실수</h2>
      <p>
        가장 흔한 실수는 라켓을 너무 세게 쥐는 것입니다. 긴장된 그립은 손목을 움직이지 못하게 하고,
        타격을 어색하게 만듭니다. 라켓을 물고기처럼 가볍게 쥐세요. 또한 그립 위치가 잘못되면
        타격 방향이 일정하지 않습니다. 컨티넨털 그립을 기본으로 익히고, 상황에 따라 적절히
        조정하세요. 올바른 그립이 편안한 타격의 시작입니다.
      </p>

      <h2 id="stance-errors">스탠스 오류</h2>
      <p>
        발을 너무 넓게 벌리거나 좁게 모으는 실수가 많습니다. 어깨 너비 정도로 발을 벌리고,
        체중을 고르게 분배하세요. 또한 공을 향해 몸을 틀지 않고 정면으로 서 있는 경우가 많아요.
        자연스러운 방향 전환이 필요합니다. 스탠스는 안정된 타격의 기초입니다.
      </p>

      <h2 id="swing-problems">스윙 문제</h2>
      <p>
        라켓을 머리 위로 휘두르는 '치기' 습관은 가장 큰 문제입니다. 테니스는 밀듯이 스윙해야 합니다.
        라켓 헤드를 공보다 먼저 움직이지 말고, 공과 라켓이 동시에 만나도록 하세요.
        또한 팔꿈치를 몸에서 멀리 뻗는 습관도 고쳐야 합니다. 팔꿈치를 몸 가까이에 유지하세요.
      </p>

      <h2 id="timing-issues">타이밍 문제</h2>
      <p>
        공이 왔을 때 서두르는 실수가 많습니다. 공을 기다렸다가 자연스럽게 타격하세요.
        '치려고' 하기보다는 '맞춰주려는' 마음가짐이 중요합니다. 또한 공의 속도에 맞춰
        스윙 속도를 조절하세요. 타이밍은 연습으로 자연스럽게 익혀집니다.
      </p>

      <h2 id="movement-errors">이동 실수</h2>
      <p>
        제자리에서만 타격하려는 습관은 큰 문제입니다. 발을 움직여 공을 향해 다가가세요.
        또한 공을 보고만 있어 자신의 발 위치를 잊는 경우가 많아요. 시선은 공을 따라가되,
        몸의 균형을 유지하세요. 이동이 능숙해지면 코트 커버리지가 넓어집니다.
      </p>

      <h2 id="mental-mistakes">멘탈 실수</h2>
      <p>
        '꼭 이기야 해'라는 압박감이 오히려 실수를 유발합니다. 한 포인트씩 집중하세요.
        또한 같은 실수를 반복해도 너무 자책하지 마세요. 실수는 성장의 일부입니다.
        긍정적인 자기 대화가 중요합니다. 마음가짐이 플레이의 50%를 좌우합니다.
      </p>

      <h2 id="equipment-issues">장비 문제</h2>
      <p>
        라켓이 너무 무겁거나 가벼운 경우가 많습니다. 자신의 체격에 맞는 라켓을 선택하세요.
        또한 스트링 장력이 맞지 않아 파워나 컨트롤이 떨어질 수 있습니다. 장비는 플레이 스타일에
        맞춰야 합니다. 올바른 장비 선택이 기본 실력을 향상시킵니다.
      </p>

      <h2 id="practice-habits">연습 습관</h2>
      <p>
        같은 드릴만 반복하는 습관은 발전을 막습니다. 다양한 기술을 연습하세요.
        또한 연습 시간을 너무 길게 하면 피로가 쌓입니다. 30분 집중 연습이 2시간 산만한
        연습보다 효과적입니다. 체계적인 연습 계획이 필요합니다.
      </p>

      <h2 id="court-etiquette">코트 에티켓 실수</h2>
      <p>
        상대의 타격을 방해하거나, 점수 계산을 틀리는 경우가 많습니다. 코트 매너를 지키세요.
        또한 자신의 공이 코트에 있을 때 움직이는 실수도 피해야 합니다. 좋은 에티켓은
        모두가 즐겁게 플레이할 수 있게 합니다. 테니스의 즐거움을 더하는 요소입니다.
      </p>

      <h2 id="progression-tips">교정 방법</h2>
      <p>
        실수를 고치려면 먼저 자신의 플레이를 비디오로 녹화해 분석하세요. 코치의 피드백을
        받고, 천천히 교정하세요. 한 번에 모든 것을 고치려 하지 말고, 하나씩 집중하세요.
        긍정적인 강화가 효과적입니다. 실수 교정이 빠른 발전의 지름길입니다.
        인내심을 가지고 꾸준히 노력하세요.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2020/02/common-tennis-mistakes/79845/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 실수 피하기 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/tips/common-mistakes.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 실수 교정 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

