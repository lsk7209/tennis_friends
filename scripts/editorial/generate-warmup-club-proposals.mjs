import fs from "node:fs";
import { createHash } from "node:crypto";

const sourcePacketPath = ".goal-harness/content-90-20261020/next-warmup-club-sources.json";
const sourcePacketData = fs.readFileSync(sourcePacketPath);
const sourcePacketSha = createHash("sha256").update(sourcePacketData).digest("hex");

const items = [
  {
    route: "/blog/aw-069-warmup-10-club-match",
    contentSourceFile: "src/data/blog-content/part11-article-writer-300.ts",
    metadataSourceFile: "src/data/blog-posts-aw-300.js",
    body: {
      content: `<article>
<p class="article-summary">경기 시작 전 10분을 코트 밖 점진적 체온 상승과 코트 안 미니테니스·랠리·서브/리턴 전환으로 구성해 실전 감각을 단계적으로 맞추세요. 10분은 모든 부상을 막아주는 치료 공식이 아니라 몸의 반응을 확인하는 기준입니다.</p>
<p>동호회 경기 코트에 들어서자마자 곧바로 강한 서브를 때리거나 전력으로 롱랠리를 시작하면 어깨와 허벅지 근육에 갑작스러운 부담이 갑니다. 10분의 시간은 힘을 과시하는 시간이 아니라, 관절 가동 범위를 점진적으로 넓히고 공의 바운드 타이밍을 눈과 발로 맞추는 전환 시간입니다. <a href="/blog/aw-064-match-cooldown">경기 직후 쿨다운</a>이 코트를 떠나기 위한 정리라면, 워밍업은 심박수와 체온을 경기에 맞게 단계별로 끌어올리는 출발점입니다.</p>
<h2>코트 밖 준비와 코트 안 웜업의 분리</h2>
<p>미국심장협회(AHA)의 신체활동 지침에 따르면 운동 전 가벼운 움직임은 심박수와 호흡을 완만하게 상승시켜 본 운동의 강도를 신체가 수용할 수 있도록 돕습니다. 하지만 이 원칙이 특정 질환이나 부상을 완전히 차단한다는 임상적 보장을 의미하지는 않습니다.</p>
<p>또한 국제테니스연맹(ITF) Rule 29 규정에 따르면 공식 코트 내 워밍업은 대회 주최측이 규정한 시간(통상 5분 내외)으로 제한되며, 선수가 임의로 경기 시작을 지연시킬 수 없습니다. 따라서 10분 루틴을 계획할 때는 코트 입장 전 3~5분간 코트 밖에서 가볍게 걷거나 관절을 돌리는 동적 준비를 마치고, 코트 배정 시간 동안 실제 랠리와 서브를 단계별로 맞추는 방식으로 시간대를 분리해야 합니다.</p>
<h2>USTA 10분 온코트 랠리 진행 예시</h2>
<p>미국테니스협회(USTA)가 제안하는 10분 워밍업 드릴은 1분 단위의 10개 구간으로 구성되어 있으며, 신체적 부담이 적은 근거리 타구부터 실전 속도까지 점진적으로 전환하는 흐름을 보여줍니다.</p>
<ul>
<li><strong>1~2분 (미니테니스):</strong> 서비스박스 안쪽에서 가벼운 쇼트 랠리로 라켓 중심(스위트스폿) 접촉감과 가벼운 잔발 움직임을 확인합니다.</li>
<li><strong>3~5분 (베이스라인 랠리):</strong> 베이스라인으로 물러나 크로스코트와 다운더라인으로 부드러운 궤적의 랠리를 주고받으며 스핀과 비거리를 조율합니다.</li>
<li><strong>6~7분 (발리와 스매시):</strong> 한 선수가 네트로 전진해 발리를 맞추고, 상대의 가벼운 로브를 받아 오버헤드 스매시 타점을 체크한 뒤 역할을 교대합니다.</li>
<li><strong>8~10분 (서브와 리턴):</strong> 듀스 코트와 애드 코트에서 각각 첫 서브와 세컨서브를 4~6구씩 던져보고 리시버의 타구 감각도 함께 점검합니다.</li>
</ul>
<h2>가상 예시: 같은 주말 경기, 다른 웜업 방식</h2>
<p>가상으로 주말 클럽 대회에 참가한 A와 B가 있다고 합시다. A는 코트 입장 10분 전 가볍게 경기장 주변을 조깅하며 체온을 올렸고, 배정된 코트에서는 파트너와 미니테니스부터 차분히 공을 맞춘 뒤 서브 4구를 시도하고 첫 게임에 들어갔습니다. 반면 B는 추운 날씨에 몸을 풀지 않은 채 코트에 들어서자마자 100% 강도의 첫 서브를 때렸고, 첫 게임 도중 어깨 긴장과 발목 뻣뻣함을 호소하며 고전했습니다. 이 가상 사례는 특정 스트레칭 루틴의 치료 효과나 경기 승리를 약속하지는 않지만, 점진적 전환의 실전 가치를 보여줍니다.</p>
<h2>조건별 판단표</h2>
<table><caption>경기 전 워밍업 10분 루틴 — 코트 환경 및 조건별 다음 선택</caption><thead><tr><th scope="col">현장 상황</th><th scope="col">관찰된 상태</th><th scope="col">권장 다음 선택</th></tr></thead><tbody><tr><td>코트 사용 5분 제한</td><td>사전 코트 밖 준비 완료</td><td>미니테니스 1분 → 롱랠리 2분 → 서브 2분으로 압축</td></tr><tr><td>기온이 낮은 동계 경기</td><td>몸이 차갑고 근육 경직</td><td>코트 밖 조깅·동적 스트레칭 5분을 추가해 체온 먼저 확보</td></tr><tr><td>이전 경기 후 근육 뻐근함</td><td>특정 관절 뻐근함 확인</td><td>강한 서브 무리수를 피하고 가벼운 스핀 서브와 풋워크 확인에 집중</td></tr></tbody></table>
<p>만약 경기 전 웜업 중 찌르는 듯한 날카로운 통증이나 관절 불안정성이 느껴진다면 <a href="/blog/aw-059-recovery">통증 관리 및 활동 조정</a> 기준에 따라 무리한 경기 출전을 멈추고 신체 상태를 우선 점검해야 합니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>USTA의 10분 웜업 지침은 훈련 현장에서 활용되는 단계적 예시 드릴이며, AHA 지침은 일반 운동 시의 안전한 심혈관 적응 원칙을 안내합니다. ITF Rule 29는 공식 경기에서의 시간 엄수 규정입니다. 이 내용이 부상 완전 방지나 운동 능력 향상을 보장하지는 않습니다.</p>
<ul><li><a href="https://www.usta.com/en/home/improve/tips-and-instruction/national/improve-your-tennis-game--the-10-minute-warm-up.html" target="_blank" rel="noopener noreferrer">USTA: The 10-Minute Warm-up 가이드</a></li><li><a href="https://www.heart.org/en/healthy-living/exercise-and-physical-activity/fitness-basics/warm-up-cool-down" target="_blank" rel="noopener noreferrer">American Heart Association: Warm Up, Cool Down 안내</a></li><li><a href="https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf" target="_blank" rel="noopener noreferrer">ITF: 2026 Rules of Tennis (Rule 29 규정)</a></li></ul>
<h2>자주 묻는 질문</h2>
<details><summary>코트 배정 시간이 5분밖에 안 남았을 때는 어떻게 배분하나요?</summary><p>코트 밖에서 미리 조깅과 가동성 운동으로 체온을 올린 뒤, 코트 안에서는 미니테니스 1분, 베이스라인 랠리 2분, 발리/서브 각 1분씩 핵심 구간만 빠르게 점검하세요.</p></details>
<details><summary>워밍업을 10분 동안 하면 부상을 완전히 예방할 수 있나요?</summary><p>워밍업은 신체 적응과 심박수 상승을 돕는 유용한 과정이지만, 모든 종류의 급성 부상이나 근육 손상을 100% 예방해 주는 것은 아닙니다.</p></details>
<details><summary>미니테니스는 왜 베이스라인 랠리보다 먼저 해야 하나요?</summary><p>짧은 거리에서 스윙 속도를 낮추고 공의 타점과 발의 잔발 타이밍을 먼저 맞추면, 베이스라인으로 물러났을 때 불필요한 과도한 힘주기를 줄일 수 있기 때문입니다.</p></details>
</article>`,
      tags: [
        "경기 전 워밍업",
        "워밍업 10분",
        "미니테니스",
        "동호회 테니스"
      ],
      summary: "경기 시작 전 10분을 코트 밖 점진적 체온 상승과 코트 안 미니테니스·랠리·서브/리턴 전환으로 구성해 실전 감각을 단계적으로 맞추세요. 10분은 모든 부상을 막아주는 치료 공식이 아니라 몸의 반응을 확인하는 기준입니다.",
      highlight: "워밍업의 목적은 전력 타구가 아니라 점진적으로 체온을 올리고 임팩트 타이밍을 확인하는 안전한 전환입니다.",
      faq: [
        {
          question: "코트 배정 시간이 5분밖에 안 남았을 때는 어떻게 배분하나요?",
          answer: "코트 밖에서 미리 조깅과 가동성 운동으로 체온을 올린 뒤, 코트 안에서는 미니테니스 1분, 베이스라인 랠리 2분, 발리/서브 각 1분씩 핵심 구간만 빠르게 점검하세요."
        },
        {
          question: "워밍업을 10분 동안 하면 부상을 완전히 예방할 수 있나요?",
          answer: "워밍업은 신체 적응과 심박수 상승을 돕는 유용한 과정이지만, 모든 종류의 급성 부상이나 근육 손상을 100% 예방해 주는 것은 아닙니다."
        },
        {
          question: "미니테니스는 왜 베이스라인 랠리보다 먼저 해야 하나요?",
          answer: "짧은 거리에서 스윙 속도를 낮추고 공의 타점과 발의 잔발 타이밍을 먼저 맞추면, 베이스라인으로 물러났을 때 불필요한 과도한 힘주기를 줄일 수 있기 때문입니다."
        }
      ]
    },
    metadata: {
      title: "경기 전 워밍업 10분 루틴: 미니테니스에서 서브·리턴까지 점진적 전환",
      excerpt: "경기 전 10분을 활용해 체온을 서서히 올리고 미니테니스부터 서브·리턴까지 단계별로 감각을 맞추는 안전한 실전 웜업 가이드입니다.",
      readTime: "8분",
      updatedAt: "2026-10-21"
    },
    readerQuestion: "동호회 경기 시작 전 10분의 시간으로 몸을 부상 위험 없이 점진적으로 준비하고 실전 감각을 올리는 방법은 무엇인가?",
    differentiation: "aw064는 경기 직후의 정리와 수분 섭취를 다루고 aw059는 다음날 근육통 대처를 다룬다. 이 글은 경기 직전 코트 밖 체온 상승과 코트 안 타구 감각의 점진적 전환을 다룬다.",
    evidence: {
      sourceIds: [
        "usta-warmup10",
        "aha-warmup",
        "itf-rules2026"
      ],
      limits: "USTA drill is an optional hitting progression; AHA guidance is general exercise advice; ITF Rule 29 governs official warm-up time limits. All examples are hypothetical."
    }
  },
  {
    route: "/blog/aw-070-record",
    contentSourceFile: "src/data/blog-content/part16-quality-rewrites.ts",
    metadataSourceFile: "src/data/blog-posts-part16-overrides.js",
    body: {
      content: `<article>
<p class="article-summary">셀프 저지 경기에서 점수 착각과 시비를 막으려면 서버가 매 서브 전 점수를 큰 소리로 선창하고, 분쟁 발생 시 The Code 원칙에 따라 동의된 지점부터 차분히 복원해야 합니다.</p>
<p>심판이 없는 동호회 테니스 경기에서 가장 흔하게 발생하는 갈등 중 하나가 바로 "지금 몇 대 몇이지?"라는 점수 시비입니다. 치열한 랠리를 주고받다 보면 양쪽 모두 머릿속 계산이 꼬이기 쉽습니다. 점수 혼선을 예방하는 기본은 서버의 명확한 점수 선창이며, 시비가 생겼을 때는 감정적 다툼 대신 표준적인 자체 판정 절차를 밟아야 합니다. 이 글은 점수 기록의 착각을 줄이고 공정한 경기 진행을 돕는 규칙 가이드입니다.</p>
<h2>ITF 규칙과 스코어 호칭의 대원칙</h2>
<p>국제테니스연맹(ITF) 2026 테니스 규칙 Rule 5에 따르면 표준 게임의 스코어는 0점을 '러브(Love)', 1점을 '15', 2점을 '30', 3점을 '40'으로 표기하며, 40-40은 '듀스(Deuce)'가 됩니다. 가장 중요한 점은 <strong>항상 서버의 점수를 먼저 부른다</strong>는 원칙입니다. 예를 들어 서버가 1점, 리시버가 2점을 얻었다면 스코어는 반드시 "15-30"으로 불러야 합니다.</p>
<p>USTA의 스코어링 해설에 명시되어 있듯이, 포인트(Point), 게임(Game), 세트(Set), 매치(Match)는 서로 다른 층위의 단위입니다. 서버는 게임의 첫 포인트를 시작하기 전에는 현재 세트 스코어(예: "3-2, 서비스")를 알리고, 각 포인트 서브를 넣기 직전에는 포인트 스코어(예: "30-15")를 상대 리시버가 분명히 들을 수 있는 음성으로 말해야 합니다.</p>
<h2>점수 분쟁 시 The Code §§31–32 합의 절차</h2>
<p>만약 랠리 도중이나 포인트 종료 후 양측의 점수 주장이 엇갈린다면, 미국테니스협회의 자체 판정 규범인 Friend at Court 2026 The Code §§31–32의 단계적 해결 방식을 적용할 수 있습니다.</p>
<ol>
<li><strong>합의된 점수로 거슬러 올라가기:</strong> 양측이 일치하여 인정하는 마지막 포인트 점수(예: 30-30까지는 양측 모두 동의함)는 유효한 상태로 확정합니다.</li>
<li><strong>분쟁 포인트만 재플레이:</strong> 한쪽은 40-30, 다른 쪽은 30-40이라고 주장하며 합의가 되지 않는다면, 서로 동의한 30-30 상태로 돌아가 해당 게임을 이어서 진행합니다.</li>
<li><strong>완전한 의견 불일치 시의 추첨:</strong> 지난 포인트들에 대해 전혀 기억이 일치하지 않고 평행선을 달린다면, 일방적으로 우기지 말고 동전 던지기나 라켓 돌리기와 같은 공평한 무작위 방식으로 점수를 결정합니다.</li>
</ol>
<p>서브를 넣는 위치(듀스 코트 vs 애드 코트)가 헷갈릴 때도 스코어를 합산해 보면 쉽게 확인할 수 있습니다. 두 사람의 획득 포인트 합계가 짝수(0, 2, 4 등)라면 항상 오른쪽 듀스 코트에서, 홀수(1, 3, 5 등)라면 왼쪽 애드 코트에서 서브를 넣어야 합니다.</p>
<h2>가상 예시: 동호회 복식 매치에서의 40-30 시비</h2>
<p>가상으로 동호회 복식 매치에서 A조가 서브를 넣고 랠리를 끝낸 뒤 "게임 끝났다"고 선언했다고 합시다. 하지만 리시버 B조는 "아까 우리 발리 득점으로 30-40이었으니 지금 듀스"라고 맞섰습니다. 서버 A는 앞선 포인트에서 스코어를 소리 내어 부르지 않았음을 인정했습니다. 양측은 차분히 앞선 샷들을 복기했고, 첫 포인트(A조 에이스)와 두 번째 포인트(B조 리턴 위너)로 15-15가 되었던 사실에는 동의했습니다. 하지만 세 번째 포인트의 아웃 여부 기억이 갈렸기 때문에, 양측은 The Code 규범에 따라 상호 동의된 15-15 지점으로 돌아가 다음 서브를 진행하기로 합의했습니다. 이 가상 사례는 일방적 우김 대신 공인된 절차로 경기의 스포츠맨십을 지키는 방법을 보여줍니다.</p>
<h2>조건별 판단표</h2>
<table><caption>테니스 점수 콜과 분쟁 해결 — 상황별 대처 절차</caption><thead><tr><th scope="col">발생 상황</th><th scope="col">확인된 사실</th><th scope="col">권장 해결 절차</th></tr></thead><tbody><tr><td>서버가 점수 콜을 생략함</td><td>서브 직전 점수 미발표</td><td>리시버는 서브 모션 전에 손을 들어 점수 확인 요청</td></tr><tr><td>포인트 점수 불일치</td><td>특정 포인트 이전까지는 동의</td><td>동의된 점수는 유지하고 disputed 포인트 지점부터 재개</td></tr><tr><td>서브 코트 위치 착오</td><td>포인트 진행 중 애드/듀스 혼동</td><td>해당 포인트 종료 후 즉시 스코어 합산(짝수/홀수)에 맞는 위치로 복귀</td></tr></tbody></table>
<p>샷의 성공률이나 서브 성공률 통계를 남기는 방법은 <a href="/blog/aw-065-record">테니스 실수 패턴 기록표</a>에서 다루며, 본 글은 실제 코트 위 점수 호칭과 분쟁 해결 절차에 집중합니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>ITF 2026 테니스 규칙은 공식 경기 스코어링의 법적 기준이며, USTA The Code는 셀프 저지 환경에서 분쟁을 원만하게 해결하기 위한 국제 표준 권고안입니다. 실제 대회에서는 주최측의 특정 로컬 규정이나 심판장의 결정이 우선합니다.</p>
<ul><li><a href="https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf" target="_blank" rel="noopener noreferrer">ITF: 2026 Rules of Tennis (Rule 5 및 스코어링)</a></li><li><a href="https://www.usta.com/content/dam/usta/2026-pdfs/2026-friend-at-court.pdf" target="_blank" rel="noopener noreferrer">USTA: Friend at Court 2026 (The Code §§31–32)</a></li><li><a href="https://www.usta.com/en/home/improve/tips-and-instruction/national/tennis-scoring-rules.html" target="_blank" rel="noopener noreferrer">USTA Officiating: Tennis Scoring Rules 해설</a></li></ul>
<h2>자주 묻는 질문</h2>
<details><summary>리시버가 서브를 넣은 뒤에야 점수가 틀렸다고 이의를 제기할 수 있나요?</summary><p>원칙적으로 서버가 잘못된 점수를 불렀다면 리시버는 서브가 들어가기 전에 플레이를 멈추고 확인해야 합니다. 이미 랠리가 진행되어 포인트가 끝났다면 그 결과를 인정하는 것이 관례입니다.</p></details>
<details><summary>듀스 코트가 아니라 애드 코트에서 서브를 넣고 포인트를 끝냈다면 어떻게 되나요?</summary><p>ITF Rule 27에 따라 이미 끝난 포인트의 결과는 그대로 유효하며, 오류가 발견된 즉시 올바른 서비스 코트로 위치를 바로잡아 다음 포인트를 진행합니다.</p></details>
<details><summary>The Code의 규칙은 한국 동호회 경기에서도 무조건 법적 강제력이 있나요?</summary><p>The Code는 USTA의 자체 판정 가이드라인으로 국내 일반 경기에서 절대적 법적 구속력을 갖는 것은 아닙니다. 다만 심판이 없는 경기에서 전 세계적으로 가장 널리 준용되는 합리적 상호 합의 기준입니다.</p></details>
</article>`,
      tags: [
        "테니스 점수",
        "스코어 콜",
        "셀프 저지",
        "The Code"
      ],
      summary: "셀프 저지 경기에서 점수 착각과 시비를 막으려면 서버가 매 서브 전 점수를 큰 소리로 선창하고, 분쟁 발생 시 The Code 원칙에 따라 동의된 지점부터 차분히 복원해야 합니다.",
      highlight: "점수 시비를 예방하는 가장 확실한 습관은 서버가 매 서브 직전 스코어를 명확하게 소리 내어 부르는 것입니다.",
      faq: [
        {
          question: "리시버가 서브를 넣은 뒤에야 점수가 틀렸다고 이의를 제기할 수 있나요?",
          answer: "원칙적으로 서버가 잘못된 점수를 불렀다면 리시버는 서브가 들어가기 전에 플레이를 멈추고 확인해야 합니다. 이미 랠리가 진행되어 포인트가 끝났다면 그 결과를 인정하는 것이 관례입니다."
        },
        {
          question: "듀스 코트가 아니라 애드 코트에서 서브를 넣고 포인트를 끝냈다면 어떻게 되나요?",
          answer: "ITF Rule 27에 따라 이미 끝난 포인트의 결과는 그대로 유효하며, 오류가 발견된 즉시 올바른 서비스 코트로 위치를 바로잡아 다음 포인트를 진행합니다."
        },
        {
          question: "The Code의 규칙은 한국 동호회 경기에서도 무조건 법적 강제력이 있나요?",
          answer: "The Code는 USTA의 자체 판정 가이드라인으로 국내 일반 경기에서 절대적 법적 구속력을 갖는 것은 아닙니다. 다만 심판이 없는 경기에서 전 세계적으로 가장 널리 준용되는 합리적 상호 합의 기준입니다."
        }
      ]
    },
    metadata: {
      title: "테니스 점수 콜과 분쟁 해결: 서버 호칭 원칙과 합의 절차",
      excerpt: "셀프 저지 경기에서 서버의 점수 선창 의무와 스코어 혼선 시 The Code 기준의 단계적 합의 복원 절차를 체계적으로 정리합니다.",
      readTime: "8분",
      updatedAt: "2026-10-21"
    },
    readerQuestion: "셀프 저지(동호회 경기)에서 점수 착각이나 혼선이 생길 때, 어떻게 점수를 명확히 부르고 판정 갈등을 원칙대로 해결할까?",
    differentiation: "aw065는 개인 샷 통계 및 실수 패턴 기록을 다루고 aw062는 첫 서브 성공률 산출을 다룬다. 이 글은 경기 중 포인트·게임 스코어 호칭 규칙과 점수 불일치 시 상호 합의 절차를 다룬다.",
    evidence: {
      sourceIds: [
        "itf-rules2026",
        "usta-fac2026",
        "usta-scoring"
      ],
      limits: "ITF rules govern standard play; USTA The Code provides self-officiating procedural guidance, not universal statutory authority. Hypothetical dispute scenario is illustrative."
    }
  },
  {
    route: "/blog/aw-071-tennis-guide",
    contentSourceFile: "src/data/blog-content/part16-quality-rewrites.ts",
    metadataSourceFile: "src/data/blog-posts-part16-overrides.js",
    body: {
      content: `<article>
<p class="article-summary">20구 이상의 긴 랠리 직후 거칠어진 숨을 추스르고 ITF Rule 29의 25초 규정 안에서 4단계 루틴으로 멘탈과 다음 샷 계획을 회복하세요.</p>
<p>격렬한 공방전 끝에 포인트가 끝나면 심박수가 치솟고 허벅지가 타들어가는 느낌을 받습니다. 이때 숨이 찬 채로 서둘러 다음 서브를 넣거나 리턴 자리에 서면 판단력이 흐려져 어이없는 실책이 나오기 쉽습니다. 반대로 너무 오래 쉬는 것은 규칙 위반입니다. 주어진 25초라는 짧은 시간 안에서 호흡을 가다듬고 침착하게 다음 1구의 전술을 정돈하는 멘탈 루틴이 필요합니다.</p>
<h2>ITF Rule 29의 25초 연속 플레이 규정</h2>
<p>국제테니스연맹(ITF) 2026 규정 Rule 29에 따르면 테니스는 원칙적으로 연속적인 경기(Continuous Play)여야 합니다. 한 포인트가 끝난 시점부터 다음 서브를 넣기 위해 공을 타격하는 순간까지 주어지는 시간은 <strong>최대 25초</strong>로 제한됩니다.</p>
<p>이 시간은 임의로 휴식을 취하거나 벤치로 걸어갈 수 있는 권리가 아닙니다. 선수는 부당한 지연 없이 다음 포인트를 준비해야 하므로, "숨이 차서 더 쉬겠다"는 요구는 규칙상 허용되지 않습니다. 따라서 선수가 취할 수 있는 현실적인 방법은 25초의 타임라인을 신체적 이완과 전술적 집중의 구간으로 나누어 구조화하는 것입니다.</p>
<h2>USTA 4R 루틴: 반응에서 준비까지</h2>
<p>미국테니스협회(USTA)의 멘탈 코칭 프레임워크인 4R 루틴은 포인트 사이의 시간을 체계적으로 관리하는 유용한 가이드라인을 제공합니다.</p>
<ul>
<li><strong>1단계 - 반응 조절 (Respond, 1~5초):</strong> 포인트 결과에 대한 즉각적인 감정(기쁨이나 아쉬움)을 라켓을 돌리거나 심호흡을 하며 빠르게 털어냅니다. 실망스러운 제스처를 길게 끌지 않습니다.</li>
<li><strong>2단계 - 신체 회복 (Recover, 6~15초):</strong> 베이스라인 뒤편으로 걸어가며 깊은 복식호흡을 통해 가슴과 어깨의 긴장을 풀고, 라켓 스트링을 만지며 시선을 정돈합니다.</li>
<li><strong>3단계 - 집중 전환 (Refocus, 16~20초):</strong> 다음 포인트의 한 가지 명확한 계획을 세웁니다. USTA가 강조하는 '서브/리턴 플러스 원(Plus One)' 전술처럼 "와이드 서브 후 포핸드 오픈코트 공략" 또는 "상대 백핸드로 깊은 리턴"이라는 한 가지 과제에만 집중합니다.</li>
<li><strong>4단계 - 실행 준비 (Ready, 21~25초):</strong> 서비스 라인 뒤 정해진 위치에 서서 공을 2~3회 바운드하며 호흡을 멈추고 타격 루틴으로 들어갑니다.</li>
</ul>
<h2>가상 예시: 24구 랠리 후의 25초 관리</h2>
<p>가상으로 동호인 단식 경기에서 24구의 랠리 끝에 아쉽게 실점한 선수가 있다고 합시다. 예전 같으면 실망감에 고개를 숙인 채 곧바로 세컨서브를 넣으려다 더블폴트를 범했을 것입니다. 하지만 이번에는 4R 루틴을 적용했습니다. 포인트가 끝나자마자 등을 돌려 뒷벽 쪽으로 천천히 걸어가며 깊게 숨을 세 번 내쉬었습니다(10초 경과). 15초 시점에 스트링을 정돈하며 "이번엔 상대 몸쪽으로 킥 서브를 넣고 네트 대시를 노린다"는 계획을 세웠습니다. 20초 시점에 서브 위치에 서서 공을 두 번 튕긴 뒤 첫 서브를 침착하게 성공시켰습니다. 이 가상 사례는 감정적 조급함을 루틴으로 차단하는 방식을 보여줍니다.</p>
<h2>조건별 판단표</h2>
<table><caption>긴 랠리 후 25초 시간 관리 — 신체 상태별 대처 루틴</caption><thead><tr><th scope="col">포인트 직후 상태</th><th scope="col">심리적 신호</th><th scope="col">권장 25초 활용법</th></tr></thead><tbody><tr><td>극심한 호흡 곤란</td><td>심박수 급상승, 시야 협착</td><td>뒷벽 쪽으로 천천히 이동하며 호흡 배출에 12초 집중, 단순한 코스 선택</td></tr><tr><td>아쉬운 실책 직후</td><td>화, 자책감, 서두름</td><td>시선을 스트링에 고정하고 5초간 무반응 유지 후 다음 1구 플랜 수립</td></tr><tr><td>멋진 위너 득점 직후</td><td>흥분, 과도한 자신감</td><td>차분하게 베이스라인으로 복귀하며 흥분을 가라앉히고 안정적인 첫 서브 준비</td></tr></tbody></table>
<p>포인트 사이의 계획 수립뿐만 아니라 세트 전체의 전략을 점검하는 질문법은 <a href="/blog/aw-061-5">상대 작전이 바뀔 때 고르는 질문</a>에서 확인할 수 있습니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>ITF Rule 29는 국제 공인 시간 제한 규정이며, USTA의 Green Light Yellow Light 및 집중력 코칭 자료는 심리적 전환을 돕는 교육적 체계입니다. 이 루틴이 생리학적 회복을 즉각 완결하거나 다음 포인트 승리를 100% 보장하지는 않습니다.</p>
<ul><li><a href="https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf" target="_blank" rel="noopener noreferrer">ITF: 2026 Rules of Tennis (Rule 29 연속 플레이 규정)</a></li><li><a href="https://www.usta.com/en/home/improve/tips-and-instruction/national/green-light--yellow-light--routines-to-succeed-on-the-tennis-cou.html" target="_blank" rel="noopener noreferrer">USTA: Routines to Succeed on the Tennis Court</a></li><li><a href="https://www.usta.com/en/home/improve/tips-and-instruction/national/how-to-stay-focused-during-a-match.html" target="_blank" rel="noopener noreferrer">USTA: How to Stay Focused During a Match</a></li></ul>
<h2>자주 묻는 질문</h2>
<details><summary>25초 동안 타월을 가지러 가도 되나요?</summary><p>타월을 사용하는 것은 가능하지만, 타월을 사용하는 시간 역시 25초 제한 시간 안에 포함되어야 합니다. 타월 사용을 이유로 25초를 넘겨서는 안 됩니다.</p></details>
<details><summary>심호흡을 몇 번 해야 맥박이 완전히 안정되나요?</summary><p>개인의 심폐 지구력과 직전 랠리의 강도에 따라 다르며 25초 안에 맥박이 휴식기 수준으로 떨어지지는 않습니다. 호흡 루틴의 목적은 완전한 신체 회복이 아니라 과호흡을 진정시키고 주의 집중을 회복하는 것입니다.</p></details>
<details><summary>상대방이 25초를 초과해서 시간을 끌면 어떻게 대응해야 하나요?</summary><p>셀프 저지 경기에서는 정중하게 "시간 규정에 맞춰 진행해 주시면 좋겠습니다"라고 요청하되, 감정적 싸움으로 번지지 않도록 경기 흐름에 집중하는 것이 현명합니다.</p></details>
</article>`,
      tags: [
        "긴 랠리",
        "25초 규칙",
        "포인트 사이 루틴",
        "멘탈 관리"
      ],
      summary: "20구 이상의 긴 랠리 직후 거칠어진 숨을 추스르고 ITF Rule 29의 25초 규정 안에서 4단계 루틴으로 멘탈과 다음 샷 계획을 회복하세요.",
      highlight: "25초 규칙 안에서 중요한 것은 완벽한 체력 회복이 아니라 호흡을 가다듬고 다음 1구의 플랜을 명확히 세우는 것입니다.",
      faq: [
        {
          question: "25초 동안 타월을 가지러 가도 되나요?",
          answer: "타월을 사용하는 것은 가능하지만, 타월을 사용하는 시간 역시 25초 제한 시간 안에 포함되어야 합니다. 타월 사용을 이유로 25초를 넘겨서는 안 됩니다."
        },
        {
          question: "심호흡을 몇 번 해야 맥박이 완전히 안정되나요?",
          answer: "개인의 심폐 지구력과 직전 랠리의 강도에 따라 다르며 25초 안에 맥박이 휴식기 수준으로 떨어지지는 않습니다. 호흡 루틴의 목적은 완전한 신체 회복이 아니라 과호흡을 진정시키고 주의 집중을 회복하는 것입니다."
        },
        {
          question: "상대방이 25초를 초과해서 시간을 끌면 어떻게 대응해야 하나요?",
          answer: "셀프 저지 경기에서는 정중하게 \"시간 규정에 맞춰 진행해 주시면 좋겠습니다\"라고 요청하되, 감정적 싸움으로 번지지 않도록 경기 흐름에 집중하는 것이 현명합니다."
        }
      ]
    },
    metadata: {
      title: "긴 랠리 후 호흡 가다듬기: 25초 규칙 안에서 멘탈과 플랜 회복",
      excerpt: "격렬한 랠리 직후 ITF Rule 29의 25초 제한 안에서 호흡을 가다듬고 다음 샷 플랜으로 침착하게 전환하는 실전 루틴입니다.",
      readTime: "8분",
      updatedAt: "2026-10-21"
    },
    readerQuestion: "20구 이상의 격렬한 랠리가 끝난 직후, ITF 25초 규정 내에서 숨을 고르고 다음 포인트를 침착하게 준비하는 루틴은 무엇인가?",
    differentiation: "aw061은 세트 중반 작전 변경과 질문 설정을 다루고 aw066은 매치포인트 결정을 다룬다. 이 글은 격렬한 긴 랠리 직후 25초 시간 제한 안에서 감정 정리와 1구 플랜 수립을 다룬다.",
    evidence: {
      sourceIds: [
        "itf-rules2026",
        "usta-routine",
        "usta-focus"
      ],
      limits: "Rule 29 continuous play imposes a strict 25-second limit; mental coaching frameworks offer cognitive process cues rather than guaranteed physiological recovery. Examples are hypothetical."
    }
  },
  {
    route: "/blog/aw-072-serve",
    contentSourceFile: "src/data/blog-content/part16-quality-rewrites.ts",
    metadataSourceFile: "src/data/blog-posts-part16-overrides.js",
    body: {
      content: `<article>
<p class="article-summary">상대 세컨서브가 눈에 띄게 짧거나 느릴 때 베이스라인 안쪽으로 전진해 깊은 코스로 공략하세요. 무리한 위너 욕심을 버리고 안전한 마진으로 주도권을 가져옵니다.</p>
<p>상대의 첫 서브가 폴트되고 세컨서브를 준비할 때, 많은 동호인들이 "이번엔 무조건 끝내겠다"는 생각으로 몸에 힘을 잔뜩 줍니다. 하지만 세컨서브라고 해서 항상 치기 쉬운 기회구인 것은 아닙니다. 회전이 많은 킥 서브나 깊숙한 바디 서브에 무작정 덤벼들면 오히려 어이없는 리턴 실책으로 상대에게 거저 포인트를 헌납하게 됩니다. 상대 서브의 궤적과 속도를 확인한 뒤 전진 여부를 판단하는 냉정한 기준이 필요합니다.</p>
<h2>세컨서브의 오해와 관찰 원칙</h2>
<p>첫째, <strong>세컨서브가 항상 약하다는 것은 착각</strong>입니다. 상급자나 능숙한 동호인은 세컨서브에서 구속을 줄이는 대신 높은 탑스핀과 바운드를 활용해 리시버를 베이스라인 뒤로 밀어냅니다. 따라서 서브가 들어가기 전부터 무조건 앞으로 돌진하는 것은 위험합니다.</p>
<p>미국테니스협회(USTA)의 리턴 전략 가이드에 따르면, 첫 서브는 빠른 구속에 대비해 몸의 균형을 유지하며 중립적인 코스로 방어하는 확률 높은 리턴이 중심입니다. 반면 세컨서브는 관찰을 통해 공이 짧거나 느리다는 것이 식별되었을 때 비로소 베이스라인 안쪽으로 진입(Step-in)하여 각도와 깊이로 상대를 압박하는 공격적 선택을 고려합니다.</p>
<p>국제테니스연맹(ITF) Rule 8에 따라 리시버는 네트 반대편 코트 어디에나 위치할 수 있습니다. 단, Rule 24에 명시되어 있듯이 서브된 공이 지면에 바운드되기 전에 노바운드로 타격하면 실점하므로 반드시 바운드를 확인한 후 타구해야 합니다.</p>
<h2>스텝인(Step-in) 판단과 타깃 설정</h2>
<p>세컨서브를 성공적으로 공략하기 위한 핵심 판단 기준은 다음과 같습니다.</p>
<ol>
<li><strong>타구 위치 전진:</strong> 상대의 토스가 흔들리거나 임팩트 소리가 가벼워 공이 서비스박스 얕은 곳에 떨어질 것으로 보일 때 1~2발 코트 안쪽으로 전진합니다.</li>
<li><strong>스윙 궤적의 단순화:</strong> 큰 백스윙으로 강타를 노리기보다, 테이크백을 간결하게 줄이고 몸의 전진 체중을 실어 공의 정점을 컴팩트하게 밀어냅니다.</li>
<li><strong>타깃은 위너가 아닌 '깊이(Depth)':</strong> 사이드라인 구석을 찌르는 무리한 위너를 노리지 마세요. 상대방의 백핸드 쪽 깊숙한 구석이나 몸쪽 깊은 코스로 안정적인 탑스핀을 보내 상대가 수비적으로 공을 띄우게 만듭니다.</li>
</ol>
<h2>가상 예시: 약한 서브에 무너졌던 리시버의 변화</h2>
<p>가상으로 동호회 매치에서 C는 상대의 느린 세컨서브만 보면 흥분하여 풀스윙 플랫 샷을 때리다 네트에 꽂히거나 아웃되는 실수를 반복했습니다. 1세트 동안 세컨서브 공략 실책만 6개를 기록한 뒤 C는 전략을 바꿨습니다. 상대 세컨서브가 들어올 때 베이스라인 안으로 한 발 들어가면서 테이크백을 반으로 줄였습니다. 그리고 사이드라인 대신 상대 백핸드 베이스라인 깊은 곳으로 포핸드 헤비 톱스핀을 안정적으로 밀어 넣었습니다. 상대는 깊은 리턴에 밀려 수비 로브를 띄웠고, C는 손쉽게 찬스볼을 발리로 마무리했습니다. 이 가상 사례는 위너 대신 '깊이와 전진 압박'을 노리는 리턴의 가치를 보여줍니다.</p>
<h2>조건별 판단표</h2>
<table><caption>상대 세컨서브 리턴 전략 — 서브 궤적별 판단 및 행동</caption><thead><tr><th scope="col">관찰된 서브 특성</th><th scope="col">바운드 위치</th><th scope="col">권장 리턴 선택</th></tr></thead><tbody><tr><td>구속 느리고 체공 시간 긺</td><td>서비스라인 근처로 짧음</td><td>1~2발 전진(스텝인), 컴팩트 스윙으로 상대 백핸드 깊숙이 공략</td></tr><tr><td>스핀 많고 높게 튐 (킥서브)</td><td>서비스박스 깊은 곳</td><td>무리한 전진을 멈추고 베이스라인 뒤에서 라이징볼 또는 높은 타점 방어 리턴</td></tr><tr><td>몸쪽으로 빠르게 붙음</td><td>리시버 몸 중심</td><td>발을 빠르게 옆으로 빼며 몸을 열고 안전한 센터 깊은 코스로 반구</td></tr></tbody></table>
<p>세컨서브 공략 이후 이어지는 전술적 랠리 조율은 <a href="/blog/aw-067-serve-20">서브 코스 20분 연습</a>이나 복식 연계 플레이와 함께 점검하면 효과적입니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>USTA의 첫 서브 및 세컨서브 리턴 전략 자료는 확률 높은 타깃 설정 원리를 제공하며, ITF 테니스 규칙은 리시버의 위치 선정과 바운드 필수 원칙을 규정합니다. 세컨서브 전진 공격이 모든 경기에서 위너를 보장하지는 않으며, 상대의 회전량에 따른 유연한 포지션 조정이 필요합니다.</p>
<ul><li><a href="https://www.usta.com/en/home/improve/tips-and-instruction/national/tennis-strategy--returning-first-and-second-serves.html" target="_blank" rel="noopener noreferrer">USTA: Tennis Strategy - Returning First and Second Serves</a></li><li><a href="https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf" target="_blank" rel="noopener noreferrer">ITF: 2026 Rules of Tennis (Rule 8, 24 규정)</a></li></ul>
<h2>자주 묻는 질문</h2>
<details><summary>세컨서브 때는 무조건 베이스라인 안쪽으로 들어가 서야 하나요?</summary><p>아닙니다. 상대가 회전이 많은 깊은 킥 서브를 넣는다면 오히려 뒤로 물러나거나 정점에서 눌러쳐야 합니다. 눈으로 공의 짧은 바운드를 확인한 뒤 전진하는 것이 안전합니다.</p></details>
<details><summary>전진 리턴 시 풀스윙을 해야 하나요, 아니면 컴팩트하게 밀어야 하나요?</summary><p>앞으로 걸어 들어가는 자신의 체중이 이미 실리기 때문에 백스윙을 크게 할 필요가 없습니다. 테이크백을 작게 줄이고 두껍게 맞추는 컴팩트 스윙이 훨씬 실책이 적습니다.</p></details>
<details><summary>상대 서브가 서비스박스에 맞기 전에 발리로 리턴하면 어떻게 되나요?</summary><p>ITF Rule 24에 따라 서브된 공이 코트에 닿기 전에 노바운드로 타구하면 그 즉시 리시버의 실점으로 처리됩니다. 반드시 바운드 후에 쳐야 합니다.</p></details>
</article>`,
      tags: [
        "세컨서브 공략",
        "스텝인 리턴",
        "리턴 포지션",
        "테니스 전술"
      ],
      summary: "상대 세컨서브가 눈에 띄게 짧거나 느릴 때 베이스라인 안쪽으로 전진해 깊은 코스로 공략하세요. 무리한 위너 욕심을 버리고 안전한 마진으로 주도권을 가져옵니다.",
      highlight: "약한 서브 공략의 핵심은 무리한 위너 샷이 아니라 간결한 백스윙과 상대 깊은 코스를 찌르는 전진 압박입니다.",
      faq: [
        {
          question: "세컨서브 때는 무조건 베이스라인 안쪽으로 들어가 서야 하나요?",
          answer: "아닙니다. 상대가 회전이 많은 깊은 킥 서브를 넣는다면 오히려 뒤로 물러나거나 정점에서 눌러쳐야 합니다. 눈으로 공의 짧은 바운드를 확인한 뒤 전진하는 것이 안전합니다."
        },
        {
          question: "전진 리턴 시 풀스윙을 해야 하나요, 아니면 컴팩트하게 밀어야 하나요?",
          answer: "앞으로 걸어 들어가는 자신의 체중이 이미 실리기 때문에 백스윙을 크게 할 필요가 없습니다. 테이크백을 작게 줄이고 두껍게 맞추는 컴팩트 스윙이 훨씬 실책이 적습니다."
        },
        {
          question: "상대 서브가 서비스박스에 맞기 전에 발리로 리턴하면 어떻게 되나요?",
          answer: "ITF Rule 24에 따라 서브된 공이 코트에 닿기 전에 노바운드로 타구하면 그 즉시 리시버의 실점으로 처리됩니다. 반드시 바운드 후에 쳐야 합니다."
        }
      ]
    },
    metadata: {
      title: "상대 세컨서브 공략: 짧고 느린 공을 보고 전진 리턴 결정하기",
      excerpt: "상대 세컨서브를 무리한 위너 욕심 대신 바운드와 속도를 관찰한 뒤 베이스라인 안쪽으로 들어가 깊은 코스로 공략하는 리턴 가이드입니다.",
      readTime: "8분",
      updatedAt: "2026-10-21"
    },
    readerQuestion: "상대의 세컨서브나 눈에 띄게 짧고 느린 서브가 들어올 때, 서둘러 무리한 위너를 노리지 않고 깊고 안전하게 공략하는 방법은 무엇인가?",
    differentiation: "aw067은 서브 연습 자체를 다루고 aw052는 왼손잡이 서브 대처를 다룬다. 이 글은 리시버 입장에서 서브의 궤적과 속도를 확인한 뒤 스텝인(전진) 여부와 깊은 코스 타깃을 선택하는 전술을 다룬다.",
    evidence: {
      sourceIds: [
        "usta-return-first-second",
        "itf-rules2026"
      ],
      limits: "USTA strategic advice distinguishes first vs second serve return tactics; not all second serves are attackable. ITF rules dictate receiving constraints. Examples are hypothetical."
    }
  },
  {
    route: "/blog/aw-073-doubles-5",
    contentSourceFile: "src/data/blog-content/part16-quality-rewrites.ts",
    metadataSourceFile: "src/data/blog-posts-part16-overrides.js",
    body: {
      content: `<article>
<p class="article-summary">복식 경기 중 중앙으로 날아오는 공에서 파트너와의 라켓 충돌을 막으려면 즉각적인 음성 콜을 외치고, 양보한 선수는 비워진 코트를 신속히 커버해야 합니다.</p>
<p>테니스 복식에서 두 사람 사이 정중앙(Center)으로 날아오는 볼은 가장 득점하기 좋은 기회인 동시에 가장 위험한 순간입니다. 서로 미루다가 공을 그냥 흘려보내거나, 반대로 두 선수가 동시에 라켓을 휘두르다 라켓이 부딪혀 파손되고 신체 부상을 입는 사고가 빈번합니다. 중앙 공을 둘러싼 혼선을 해결하기 위해서는 기계적인 원칙을 넘어 상황에 맞는 신속한 소통과 커버 체계가 필요합니다.</p>
<h2>"센터볼은 무조건 포핸드"라는 통념의 한계</h2>
<p>동호인 복식에서 흔히 "가운데 공은 포핸드 쪽 선수가 친다"는 말을 진리처럼 여깁니다. 물론 같은 위치에서 준비하고 있다면 포핸드 쪽 선수가 더 강하고 각도 있는 타구를 보내기 유리합니다. 하지만 이 규칙을 모든 순간에 절대화할 수는 없습니다.</p>
<p>미국테니스협회(USTA) Warrior Tennis 커리큘럼에 설명되어 있듯이, 복식에서는 4명의 포지션(서버, 서버 파트너, 리시버, 리시버 파트너)에 따라 담당 책임 영역이 유동적입니다. 예를 들어 전위가 이미 네트 중앙을 지키며 발리를 대기하고 있다면, 뒤쪽 베이스라인에 있는 선수의 포핸드보다 네트에 바짝 붙은 전위의 백핸드 발리가 훨씬 결정적이고 안전할 수 있습니다. 또한 왼손잡이와 오른손잡이가 한 팀을 이루거나 두 선수 모두 백핸드가 중앙을 향하는 구조에서는 통념이 통하지 않습니다. ITF 테니스 규칙에도 센터볼의 우선권을 특정 선수에게 부여하는 법적 규정은 없습니다.</p>
<h2>즉각적인 음성 콜과 빈자리 커버의 원칙</h2>
<p>충돌을 방지하고 효과적인 샷을 만들기 위한 3대 실천 원칙은 다음과 같습니다.</p>
<ol>
<li><strong>반발 빠른 음성 콜 (Call):</strong> USTA Net Generation 학교 프로그램 매뉴얼에서는 복식 활동 시 두 선수가 겹칠 때 "마이(내가!)" 또는 "유어스(네가!)"라고 즉시 소리칠 것을 훈련합니다. 공이 네트를 넘어오는 궤적을 보자마자 먼저 크게 외치는 선수가 타구의 우선권을 갖습니다.</li>
<li><strong>양보한 선수의 감속 및 정지:</strong> 파트너의 콜을 들었거나 파트너가 타구하기 더 좋은 각도에 있다면, 즉시 라켓을 거두고 걸음을 멈추거나 옆으로 비켜서 충돌을 피해야 합니다. 라켓을 계속 뻗고 있는 것은 파트너의 스윙 공간을 침범합니다.</li>
<li><strong>비워진 코트의 시선 커버:</strong> 공을 치러 중앙으로 이동한 파트너는 원래 자기 자리(사이드라인 쪽)를 비우게 됩니다. 공을 양보한 선수는 파트너의 뒤나 옆으로 이동하여 상대의 카운터 어택에 대비해 열린 코트를 커버해야 합니다.</li>
</ol>
<p>USTA Texas의 브랜디 브라텍(Brandi Bratek) 코치가 조언하듯, 새로운 파트너와 경기를 시작하기 전 "센터 로브나 깊은 공이 올 때 어떻게 움직일지" 미리 한마디 상의해 두는 것만으로도 실전에서의 충돌 위험을 획기적으로 줄일 수 있습니다.</p>
<h2>가상 예시: 동호회 복식 매치에서의 센터 로브 충돌 방지</h2>
<p>가상으로 동호회 복식 경기에서 D와 E 조는 상대의 얕은 로브가 서비스라인 중앙에 높게 뜨자 두 사람 모두 스매시를 치려고 중앙으로 전력 질주했습니다. 평소 같았으면 라켓이 부딪히며 공을 놓쳤겠지만, 이번에는 약속을 지켰습니다. 전위에 서 있던 D가 공의 낙하지점에 한 발 빨랐고, 즉시 "내가!"라고 크게 소리쳤습니다. 베이스라인에서 달려오던 E는 그 소리를 듣자마자 스윙을 멈추고 감속하며 D의 원래 자리인 왼쪽 사이드라인 쪽으로 발걸음을 옮겼습니다. D는 여유 있게 스매시를 성공시켰고, E는 만약의 상대 리턴에 대비해 열린 코트를 안전하게 지켰습니다. 이 가상 사례는 명확한 음성 콜과 커버의 팀워크를 잘 보여줍니다.</p>
<h2>조건별 판단표</h2>
<table><caption>복식 센터볼 상황 — 타구 위치 및 권장 역할 분담</caption><thead><tr><th scope="col">센터볼 궤적</th><th scope="col">두 선수의 위치</th><th scope="col">권장 우선권 및 행동</th></tr></thead><tbody><tr><td>네트 높이의 빠른 직선 볼</td><td>전위와 후위 분리</td><td>네트에 붙은 전위가 먼저 손을 뻗어 차단(콜 필수)</td></tr><tr><td>중앙으로 높게 뜬 얕은 로브</td><td>둘 다 베이스라인 부근</td><td>더 좋은 포지션의 선수가 선창("내가!") 후 스매시, 파트너는 반대편 커버</td></tr><tr><td>베이스라인 깊숙한 센터볼</td><td>둘 다 베이스라인</td><td>포핸드 쪽 선수가 타구하되, 백핸드 파트너는 중앙으로 좁혀오며 커버 준비</td></tr></tbody></table>
<p>복식에서 파트너와의 전반적인 자리 잡기와 시선 교환에 대한 기본기는 <a href="/blog/aw-068-doubles">복식 포지션 합 맞추기</a>에서 더 자세히 확인할 수 있습니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>USTA Warrior Tennis 및 Net Generation 교육 자료는 복식 대형 유지와 언어적 소통의 원리를 제공하며, 코치 인터뷰는 실전 파트너십의 사전 조율 가치를 강조합니다. ITF 규칙은 복식 선수의 코트 내 위치 자유를 규정합니다. 음성 콜이 모든 충돌을 100% 물리적으로 차단하는 것은 아니며 경기자의 즉각적인 감속 판단이 동반되어야 합니다.</p>
<ul><li><a href="https://www.usta.com/content/dam/usta/pdfs/20180302_WoundedWarriorCurricula.pdf" target="_blank" rel="noopener noreferrer">USTA Foundation: Warrior Tennis Curriculum (복식 포지션 및 커버)</a></li><li><a href="https://www.usta.com/content/dam/usta/content-fragments/tennis-service-center/assets/pdfs/Net-Generation-Schools-Manual-Grade-7-to-12.pdf" target="_blank" rel="noopener noreferrer">USTA Net Generation: Schools Manual Lesson 8 Doubles</a></li><li><a href="https://www.usta.com/en/home/stay-current/texas/ask-a-coach-brandi-bratek.html" target="_blank" rel="noopener noreferrer">USTA Texas: Ask a Coach - Competing with a New Doubles Partner</a></li><li><a href="https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf" target="_blank" rel="noopener noreferrer">ITF: 2026 Rules of Tennis (Rule 8 복식 포지션 규정)</a></li></ul>
<h2>자주 묻는 질문</h2>
<details><summary>둘 다 동시에 "내가!"라고 외쳤을 때는 어떻게 해야 하나요?</summary><p>두 선수가 동시에 콜을 외쳤다면 위험을 방지하기 위해 네트에 더 가깝거나 공의 타점에 먼저 닿는 선수가 치고, 다른 선수는 즉시 라켓을 내리고 속도를 줄여야 합니다. 라켓을 무리하게 휘두르지 않는 것이 안전합니다.</p></details>
<details><summary>센터볼을 양보한 선수는 그냥 제자리에 서 있으면 되나요?</summary><p>아닙니다. 공을 치러 중앙으로 이동한 파트너의 비워진 사이드라인 코트나 후방 공간을 메워주기 위해 발을 움직여 커버 위치로 이동해야 합니다.</p></details>
<details><summary>파트너가 콜을 전혀 하지 않는 스타일이면 어떻게 맞춰야 하나요?</summary><p>경기 전 또는 첫 게임 체인지오버 때 "센터 공이 오면 제가 먼저 부를 테니 양보해 달라"거나 "애매하면 한마디만 해달라"고 정중하게 기준을 미리 합의하는 것이 최선입니다.</p></details>
</article>`,
      tags: [
        "복식 전술",
        "센터볼",
        "포지션 콜",
        "복식 충돌 방지"
      ],
      summary: "복식 경기 중 중앙으로 날아오는 공에서 파트너와의 라켓 충돌을 막으려면 즉각적인 음성 콜을 외치고, 양보한 선수는 비워진 코트를 신속히 커버해야 합니다.",
      highlight: "센터볼 처리는 '누가 칠 것인가'의 콜만큼이나 '양보한 선수가 비워진 자리를 어떻게 지킬 것인가'가 중요합니다.",
      faq: [
        {
          question: "둘 다 동시에 \"내가!\"라고 외쳤을 때는 어떻게 해야 하나요?",
          answer: "두 선수가 동시에 콜을 외쳤다면 위험을 방지하기 위해 네트에 더 가깝거나 공의 타점에 먼저 닿는 선수가 치고, 다른 선수는 즉시 라켓을 내리고 속도를 줄여야 합니다. 라켓을 무리하게 휘두르지 않는 것이 안전합니다."
        },
        {
          question: "센터볼을 양보한 선수는 그냥 제자리에 서 있으면 되나요?",
          answer: "아닙니다. 공을 치러 중앙으로 이동한 파트너의 비워진 사이드라인 코트나 후방 공간을 메워주기 위해 발을 움직여 커버 위치로 이동해야 합니다."
        },
        {
          question: "파트너가 콜을 전혀 하지 않는 스타일이면 어떻게 맞춰야 하나요?",
          answer: "경기 전 또는 첫 게임 체인지오버 때 \"센터 공이 오면 제가 먼저 부를 테니 양보해 달라\"거나 \"애매하면 한마디만 해달라\"고 정중하게 기준을 미리 합의하는 것이 최선입니다."
        }
      ]
    },
    metadata: {
      title: "복식 센터볼 충돌 방지: 포지션 콜과 빈자리 커버의 원칙",
      excerpt: "복식 경기 중 중앙으로 향하는 공에서 라켓 충돌과 시선 혼선을 막고, 음성 콜과 역할 분담으로 안전하게 대처하는 실전 가이드입니다.",
      readTime: "8분",
      updatedAt: "2026-10-21"
    },
    readerQuestion: "복식 경기 중 두 사람 사이(중앙)로 날아오는 공을 처리할 때 라켓 충돌이나 자리 겹침을 방지하고 빈자리를 지키는 방법은 무엇인가?",
    differentiation: "aw068은 복식 파트너와의 전반적 호흡과 시선을 다루고 aw078은 서브 후 포지션 이동을 다룬다. 이 글은 두 선수가 동시에 쇄도하기 쉬운 센터볼 경합 상황에서의 즉각적 음성 콜과 빈자리 커버에 집중한다.",
    evidence: {
      sourceIds: [
        "itf-rules2026",
        "usta-warrior-doubles",
        "usta-school-doubles",
        "usta-partner-coach"
      ],
      limits: "USTA curriculum and coach advice guide team positioning and verbal cues; no universal rule grants absolute middle ownership to one player. Collision prevention requires mutual judgment."
    }
  }
];

const proposalData = {
  purpose: "Source-bounded editorial proposals for aw069–073; no source integration, scoring or approval.",
  createdAt: "2026-10-21",
  sourcePacket: `next-warmup-club-sources.json SHA256 ${sourcePacketSha}`,
  items
};

fs.writeFileSync(
  ".goal-harness/content-90-20261020/next-warmup-club-proposals.json",
  JSON.stringify(proposalData, null, 2),
  "utf8"
);
console.log("Successfully generated .goal-harness/content-90-20261020/next-warmup-club-proposals.json with 5 articles.");
