import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function ForehandMasteryGuidePage() {
  const title = "포핸드 마스터 가이드: 테니스 실력의 핵심 기술 완벽 정복";
  const excerpt = "포핸드는 테니스 타격의 70%를 차지하는 가장 중요한 기술입니다. 올바른 자세, 스윙 궤적, 타격 타이밍을 마스터하여 강력하고 정확한 포핸드를 구사하는 방법을 단계별로 안내합니다.";

  const toc = [
    { id: "introduction", text: "포핸드의 중요성", depth: 2 as const },
    { id: "stance", text: "준비 자세와 발 위치", depth: 2 as const },
    { id: "grip", text: "그립 방법", depth: 2 as const },
    { id: "backswing", text: "백스윙과 준비 동작", depth: 2 as const },
    { id: "forward-swing", text: "포워드 스윙과 타격", depth: 2 as const },
    { id: "follow-through", text: "팔로우 스루", depth: 2 as const },
    { id: "common-mistakes", text: "자주 하는 실수와 교정 방법", depth: 2 as const },
    { id: "drills", text: "연습 드릴", depth: 2 as const },
    { id: "power", text: "파워 향상 방법", depth: 2 as const },
    { id: "consistency", text: "일관성 기르기", depth: 2 as const },
    { id: "advanced", text: "고급 기술", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "포핸드 그립은 어떻게 잡아야 하나요?",
      a: "컨티넨털 그립(손등이 위쪽을 향함)을 기본으로 하되, 상황에 따라 세미웨스턴 그립으로 조정하세요. 그립을 너무 세게 쥐지 말고 편안하게 유지하는 것이 중요합니다."
    },
    {
      q: "포핸드가 약한데 어떻게 강하게 칠 수 있나요?",
      a: "스윙 궤적을 크게 하고, 체중 이동을 적극적으로 활용하세요. 하체의 힘을 이용하여 상체로 전달하는 것이 핵심입니다."
    },
    {
      q: "포핸드 정확도를 높이는 방법은?",
      a: "타격 지점을 일정하게 유지하고, 공을 향해 몸 전체가 회전하는 느낌으로 스윙하세요. 꾸준한 연습과 올바른 자세가 정확도를 높입니다."
    },
    {
      q: "포핸드 실력이 안 오르는 이유는?",
      a: "부족한 웜업, 잘못된 자세, 불충분한 연습량이 주요 원인입니다. 기본 자세부터 차근차근 교정하고, 스트링 텐션 계산기로 라켓 세팅도 확인해보세요."
    },
    {
      q: "포핸드 드릴 추천해주세요.",
      a: "크로스코트 타격 연습, 라인 타격 연습, 연속 타격 드릴을 추천합니다. 매일 30분씩 꾸준히 연습하는 것이 중요합니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 포핸드는 테니스 타격의 70%를 차지하는 핵심 기술로, 올바른 자세와 스윙을 통해 강력하고 정확한 타격을 구사할 수 있습니다. 단계별 학습과 꾸준한 연습으로 누구나 마스터할 수 있습니다.
      </blockquote>

      <TOC items={toc} />

      <h2 id="introduction">포핸드의 중요성</h2>
      <p>
        포핸드는 테니스에서 가장 많이 사용되는 타격 기술입니다. 통계적으로 테니스 경기의 약 70%가 포핸드 타격으로 이루어지며,
        포핸드의 질이 곧 플레이어의 실력을 결정짓는다고 해도 과언이 아닙니다. 강력하면서도 정확한 포핸드를 구사할 수 있다면
        상대를 압도하고 경기를 주도할 수 있습니다.
      </p>

      <h2 id="stance">준비 자세와 발 위치</h2>
      <p>
        포핸드의 기본은 올바른 준비 자세입니다. 발은 어깨 너비로 벌리고, 앞발(타격 방향을 향하는 발)은 약간 앞으로,
        뒷발은 45도 각도로 벌려둡니다. 무릎을 살짝 구부리고 몸의 중심을 낮게 유지하여 언제든지 움직일 수 있는 준비 자세를 취하세요.
      </p>

      <h2 id="grip">그립 방법</h2>
      <p>
        포핸드의 그립은 컨티넨털 그립을 기본으로 합니다. 라켓을 잡았을 때 손등이 위쪽을 향하고, 검지와 엄지가 V자를 이루는 형태입니다.
        상황에 따라 세미웨스턴 그립(톱스핀 강화)으로 조정할 수 있지만, 초반에는 컨티넨털 그립부터 익히는 것이 좋습니다.
      </p>

      <h2 id="backswing">백스윙과 준비 동작</h2>
      <p>
        백스윙은 포핸드의 출발점입니다. 라켓을 뒤로 가져갈 때는 팔꿈치를 몸에 붙이고, 라켓 헤드를 어깨 높이로 유지합니다.
        백스윙이 너무 크면 타이밍이 늦어지고, 너무 작으면 파워가 부족해집니다. 공의 높이와 속도에 맞춰 적절한 백스윙을 취하세요.
      </p>

      <h2 id="forward-swing">포워드 스윙과 타격</h2>
      <p>
        포워드 스윙 때는 하체의 힘을 상체로 전달하는 것이 중요합니다. 앞발로 체중을 실으며 회전 동작을 시작하고,
        라켓이 공과 만나기 직전에 손목을 고정하세요. 타격 지점은 몸 앞에서부터 머리 높이 사이가 이상적입니다.
      </p>

      <h2 id="follow-through">팔로우 스루</h2>
      <p>
        타격 후에는 팔로우 스루를 통해 자연스러운 마무리 동작을 취합니다. 라켓이 타격 방향으로 계속 나아가게 하여
        공에 충분한 스핀과 파워를 전달하세요. 팔로우 스루가 불충분하면 공이 제대로 맞지 않거나 방향이 어긋날 수 있습니다.
      </p>

      <h2 id="common-mistakes">자주 하는 실수와 교정 방법</h2>
      <p>
        많은 초보자들이 저지르는 실수 중 하나는 백스윙이 너무 크거나 팔꿈치가 몸에서 멀어지는 것입니다.
        이럴 때는 라켓을 몸에 가까이 유지하고, 컴팩트한 스윙을 연습하세요. 또한, 공을 바라보는 습관을 들여
        시선이 고정되도록 하며, 체중 이동을 적극적으로 활용하는 연습을 반복합니다.
      </p>

      <h2 id="drills">연습 드릴</h2>
      <p>
        포핸드 실력을 향상시키기 위한 효과적인 드릴로는 크로스코트 타격 연습, 라인 타격 연습, 연속 타격 드릴이 있습니다.
        특히 미러 드릴(상대의 타격을 그대로 따라하는 연습)은 반사 신경과 타이밍 감각을 기르는데 효과적입니다.
        매일 30분씩 꾸준히 연습하는 것이 중요합니다.
      </p>

      <h2 id="power">파워 향상 방법</h2>
      <p>
        포핸드 파워를 높이기 위해서는 스윙 궤적을 크게 하고, 체중 이동을 적극적으로 활용해야 합니다.
        또한, 코어 근력과 다리 근력을 강화하는 웨이트 트레이닝이 도움이 됩니다.
        올바른 자세로 반복적인 연습을 통해 근육 메모리를 만들어가세요.
      </p>

      <h2 id="consistency">일관성 기르기</h2>
      <p>
        포핸드의 일관성은 꾸준한 연습으로 기를 수 있습니다. 처음에는 느린 공부터 시작하여 점차 속도를 높여가며
        다양한 상황에서의 타격을 연습하세요. 또한, 스트레스 상황에서도 동일한 자세를 유지할 수 있도록
        멘탈 트레이닝도 병행하는 것이 좋습니다.
      </p>

      <h2 id="advanced">고급 기술</h2>
      <p>
        고급 포핸드 기술로는 인사이드-아웃 타격, 슬라이스, 드롭 샷 등이 있습니다.
        이러한 기술들은 기본기가 탄탄할 때 도전해야 하며, 상황에 따른 적절한 기술 선택이 승리의 핵심입니다.
        프로 선수들의 경기를 관찰하며 다양한 타격 기술을 연구해보세요.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/how-to-improve-your-forehand/123456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">포핸드 개선 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/how-to/improve-forehand.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 포핸드 트레이닝</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
