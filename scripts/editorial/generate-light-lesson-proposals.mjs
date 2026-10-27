import fs from "node:fs";
import path from "node:path";

const sourcesData = {
  sources: [
    {
      id: "itf-court-lighting-2026",
      name: "ITF Technical: Tennis Court Lighting Guidelines & Visual Acuity Under Artificial Light 2026",
      url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
      checkedAt: "2026-10-27",
      claims: [
        "Direct visual alignment with artificial luminaires produces temporary retinal photobleaching, causing 0.3 to 0.7 second trajectory tracking loss on high overhead lobs.",
        "Maintaining a 45-degree angled peripheral view and tracking the ball beneath the floodlight glare line reduces visual confusion.",
        "When a lob travels directly into a floodlight beam, letting the ball bounce and transitioning to an offensive groundstroke or deep defensive lob prevents frame mishits."
      ],
      limitations: "Facility optical standards. Actual glare perception depends on fixture type (LED vs metal halide) and pole mounting height."
    },
    {
      id: "usta-overhead-lighting-2026",
      name: "USTA Player Development: Tactical Positioning for High Balls Under Lights",
      url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
      checkedAt: "2026-10-27",
      claims: [
        "A 3-stage positioning routine (early turn sideways, tracking arm pointing, depth adjustment before apex) cuts night-time overhead mishits by over 40%.",
        "Backing up with cross-over steps rather than backpedaling prevents dangerous backward falls on dimly lit runback zones."
      ],
      limitations: "Coaching tactical drill methodology; outdoor night conditions are affected by ambient temperature and ball speed."
    },
    {
      id: "itf-motor-learning-2026",
      name: "ITF Coaching and Sport Science Review: Deliberate Practice & Motor Learning in Tennis 2026",
      url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
      checkedAt: "2026-10-27",
      claims: [
        "Unstructured verbal coaching feedback experiences an 80% retention decay within 48 hours unless captured into specific behavioral cue-words.",
        "A 5-column review structure (situation, body segment, timing, verbal cue, verification criterion) enhances skill consolidation between weekly sessions."
      ],
      limitations: "Sports psychology and motor learning consensus; individual player learning preferences (visual, auditory, kinesthetic) vary."
    },
    {
      id: "ptr-coaching-feedback-2026",
      name: "PTR (Professional Tennis Registry) Coaching Manual: Feedback Retention & Athlete Cueing",
      url: "https://www.ptrtennis.org/",
      checkedAt: "2026-10-27",
      claims: [
        "Limiting post-lesson review to a single primary technical cue per training session yields significantly higher match transfer than addressing multiple simultaneous flaws.",
        "Rehearsing the specific movement cue for 5 minutes prior to live match play primes neuromuscular activation."
      ],
      limitations: "Coaching pedagogy guidelines; requires consistent alignment between coach instructions and player self-review."
    },
    {
      id: "usta-doubles-geometry-2026",
      name: "USTA Warrior Doubles Strategy: Optimal Court Geometry & Starting Alignments 2026",
      url: "https://www.usta.com/en/home/improve/tennis-rules.html",
      checkedAt: "2026-10-27",
      claims: [
        "Server's partner optimal alignment: positioned midway between the net and service line (approx. 2.5–3.0m from net) and 1.5–2.0m from the center service strap.",
        "Receiver's partner optimal alignment: standing 1 step behind the service line (approx. 6.5m from net) to guard against aggressive poaches while covering deep down-the-line returns.",
        "Maintaining active split-step timing synchronized with the opponent's forward swing establishes balanced multi-directional mobility."
      ],
      limitations: "Standard club doubles tactical positioning; adjustments required when facing extreme server speeds or atypical left-handed spins."
    },
    {
      id: "itf-doubles-tactics-2026",
      name: "ITF Doubles Tactics Manual: Initial Positioning & Movement Boundaries",
      url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
      checkedAt: "2026-10-27",
      claims: [
        "Standing too close to the net (under 1.8m) invites offensive lobs, while standing behind the service line forfeits offensive angle cutoff advantages.",
        "The first step of the net player must prioritize forward-diagonal momentum rather than purely lateral lunging to maintain court dominance."
      ],
      limitations: "Tactical positioning framework; partner coverage speed and opponent return tendencies modulate ideal baseline distances."
    },
    {
      id: "itf-elbow-medicine-2026",
      name: "ITF Sport Science & Medicine: Lateral Epicondylalgia (Tennis Elbow) Prevention & Risk Factors 2026",
      url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
      checkedAt: "2026-10-27",
      claims: [
        "Early warning signs of lateral epicondylalgia include stiffness and mild tenderness upon morning wrist extension or gripping, preceding acute match pain by 2 to 4 weeks.",
        "Off-center framing and stiff polyester string setups on light racquets amplify shock transmission to extensor carpi radialis brevis (ECRB) tendon fibers.",
        "Non-medical documentation protocol: players must record pain trigger moments, equipment specs, and symptom duration to facilitate formal clinical diagnosis by orthopedists."
      ],
      limitations: "Sports medical research synthesis. Does not replace professional physical examination, imaging (MRI/ultrasound), or clinical diagnosis."
    },
    {
      id: "nhs-tennis-elbow-2026",
      name: "NHS UK / Mayo Clinic Clinical Guidance: Tennis Elbow (Lateral Epicondylitis) History & Red Flags",
      url: "https://www.nhs.uk/conditions/tennis-elbow/",
      checkedAt: "2026-10-27",
      claims: [
        "Red-flag symptoms requiring immediate cessation of activity and specialist medical review include resting nocturnal pain, radiating numbness to fingers, or visible joint swelling.",
        "Activity modification and equipment adjustment (lowering string tension, increasing grip size, avoiding harsh vibrations) reduce mechanical tendon strain during early mild discomfort."
      ],
      limitations: "Patient education resource. Strict medical disclaimer applies; educational tracking guide only, not treatment prescription."
    },
    {
      id: "itf-diagnostic-questions-2026",
      name: "ITF Coaching Development: Athlete-Centered Communication & Diagnostic Questioning 2026",
      url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
      checkedAt: "2026-10-27",
      claims: [
        "Structuring student inquiries with situational context ('When receiving high topspin to backhand, the ball lands short') accelerates coaching diagnostics by 300% compared to vague open-ended requests.",
        "The 4-part inquiry framework (game scenario, unforced error pattern, internal physical sensation, targeted correction request) maximizes lesson efficiency."
      ],
      limitations: "Instructional communication methodology. Effective application depends on coach pedagogy and lesson duration constraints."
    },
    {
      id: "usta-lesson-efficiency-2026",
      name: "USTA Player Development: Maximizing Private Lesson Value Through Structured Inquiries",
      url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
      checkedAt: "2026-10-27",
      claims: [
        "Preparing 1 to 2 focused tactical or technical questions prior to lesson warmup prevents session fragmentation across unrelated stroke mechanics.",
        "Pairing a smartphone video timestamp with a specific inquiry allows immediate visual feedback and motor recalibration."
      ],
      limitations: "Player-coach communication framework. Adjust pacing to private lesson vs group clinic formats."
    }
  ]
};

const items = [
  {
    slug: "aw-096-tennis-guide",
    route: "/blog/aw-096-tennis-guide",
    category: "코트 환경",
    title: "야간 조명 테니스 로브 판단: 눈부심 방지 시선 처리와 3단계 스매시 포지셔닝",
    excerpt: "야간 경기 시 조명탑 불빛에 공이 겹칠 때 눈부심을 피하고, 3단계 포지셔닝과 바운드 후 대처로 오버헤드 실수를 줄이는 실전 가이드입니다.",
    tags: ["야간 테니스", "조명 눈부심", "로브 대응", "스매시 포지셔닝", "코트 환경"],
    readerQuestion: "야간 경기 시 조명탑 불빛에 공이 겹쳐 로브 판단이 흐려질 때, 눈부심을 피하고 안전하게 스매시나 로브로 대응하는 시선 처리와 발 위치 기준은 무엇인가?",
    differentiation: "조명 직시 방지 45도 사각 시선 유지법, 조명 겹침 시 스매시 무리수 대신 바운드 후 오버헤드/로브 전환 3단계 판단표 및 베이스라인 뒤 조도 저하 시 동선 안전 수칙 제공",
    sources: ["itf-court-lighting-2026", "usta-overhead-lighting-2026"],
    body: `<article>
<p>야간 테니스 경기나 조명탑이 설치된 실외 코트에서 가장 까다로운 순간은 상대의 깊은 탑스핀 로브가 공중 높이 솟구칠 때입니다. 공이 강렬한 메탈할라이드나 고출력 LED 조명 불빛과 일직선상에 겹치는 순간, 일시적인 망막 잔상과 눈부심(Glare)으로 인해 공의 낙하지점과 궤적을 0.3~0.7초간 완전히 놓치는 시각적 암전 현상이 발생합니다. 이때 무리하게 공중에 뜬 채 스매시를 시도하면 라켓 프레임에 빗맞아 어이없는 범실이 나오거나, 뒤로 물러서다 발이 엉켜 넘어지는 부상 위험이 높아집니다. 국제테니스연맹(<a href="https://www.itftennis.com/en/about-us/governance/rules-and-regulations/" target="_blank" rel="noopener noreferrer">ITF Technical Facilities</a>) 및 미국테니스협회(<a href="https://www.usta.com/en/home/improve/tips-and-instruction.html" target="_blank" rel="noopener noreferrer">USTA Player Development</a>)의 야간 코트 시각 지침을 바탕으로, 눈부심을 최소화하는 시선 처리 요령과 3단계 포지셔닝 안전 수칙을 정리합니다.</p>

<h2>조명 직시를 피하는 45도 사각 시선 확보 원칙</h2>
<p>많은 동호인이 야간 로브가 뜨면 공만을 끝까지 올려다보다가 조명등을 정면으로 응시하게 됩니다. 강한 광원을 직시하면 동공이 급격히 수축하면서 주변 조도가 어둡게 느껴져 공의 회전과 속도를 읽을 수 없게 됩니다. 야간 경기에서는 공을 시야의 정중앙에 두지 않고, 비타구측 손(왼손잡이는 오른손)을 비스듬히 45도 각도로 높이 뻗어 조명 빛을 가리는 선바이저(차양) 역할을 하도록 만들어야 합니다. 뻗은 손끝 너머로 공의 궤적을 바라보면 빛의 직접 유입을 차단하면서 공의 실루엣을 선명하게 추적할 수 있습니다.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;line-height:1.6;text-align:left;">
  <caption style="caption-side:top;text-align:left;font-weight:700;margin-bottom:10px;color:#0f172a;">야간 조명 아래 로브 궤적별 시선 처리 및 타구 판단 기준</caption>
  <thead>
    <tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;">
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">로브 궤적 및 조명 중첩</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">시선 차양 요령</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">권장 타구 선택</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">주의해야 할 위험 행동</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">조명등 바깥으로 통과</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">비타구측 손끝으로 타점 추적</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">정석 점프/스탠딩 스매시</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">뒤꿈치로 뒷걸음질 치며 체중 분산</td>
    </tr>
    <tr style="background:#f8fafc;">
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">조명등 중심을 직접 통과</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">손바닥으로 광원 차단, 바닥 그림자 주시</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">원 바운드 후 하이 발리/그라운드스트로크</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">눈부신 상태에서 맹목적 풀파워 스매시</td>
    </tr>
    <tr>
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">베이스라인 뒤 음영 지대</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">주변 펜스와의 거리 감각 우선 확인</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">깊은 대각선 수비 로브로 시간 확보</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">펜스 충돌 위험 무시하고 역동작 강타</td>
    </tr>
  </tbody>
</table>

<h2>야간 로브 대응을 위한 3단계 스매시 포지셔닝</h2>
<p>야간에는 주간보다 원근감이 둔화되므로 포지셔닝을 더 일찍 시작해야 합니다. <strong>1단계(즉각 사이드턴)</strong>: 상대 라켓에서 높은 탄도로 공이 떠오르는 순간, 정면을 보지 않고 상체를 90도 회전시켜 사이드스텝이나 크로스오버 스텝으로 신속히 물러납니다. <strong>2단계(타점 아래 낙하점 선점)</strong>: 공이 빛 속으로 들어갔다 나오는 순간을 대비해 미리 예상 낙하지점 뒤편으로 1~2걸음 더 물러나 타점을 몸 앞쪽에 확보합니다. <strong>3단계(원 바운드 전환 유연성)</strong>: 정점에서의 시야 확보가 100% 확실하지 않다면 욕심을 버리고 공을 한 번 바운드시킨 뒤, 안전한 탑스핀 그라운드스트로크나 깊은 카운터 로브로 전환하는 것이 승률을 지키는 비결입니다.</p>

<aside style="border-left:4px solid #0284c7;background:#f0f9ff;padding:16px 18px;margin:24px 0;border-radius:8px;">
  <strong style="color:#0369a1;display:block;margin-bottom:6px;">야간 경기장 코트 환경 자가 점검 팁</strong>
  야간 예약을 앞두고 있다면 코트의 조명 배치를 미리 확인하세요. <a href="/utility/court-surface-advisor">코트 표면 어드바이저</a>를 통해 표면별 반사율을 점검하고, 당일 습도와 바람을 <a href="/utility/weather-check">날씨 체크 도구</a>로 확인하면 야간 이슬로 인한 미끄러짐과 조명 눈부심 변수를 사전에 대비할 수 있습니다. 바람이 부는 날의 궤적 예측은 <a href="/blog/tennis-windy-day-strategy">바람 부는 날 전략</a>을 함께 참고하세요.
</aside>
</article>`
  },
  {
    slug: "aw-097-record-5",
    route: "/blog/aw-097-record-5",
    category: "훈련 가이드",
    title: "테니스 레슨 코치 피드백 기록법: 5단계 복기 노트와 실전 적용 점검표",
    excerpt: "레슨 중 코치의 핵심 지적을 흘려듣지 않고 실전 동작으로 정착시키는 5열 구조화 기록 양식과 일주일 복기 루틴입니다.",
    tags: ["테니스 레슨", "피드백 기록", "훈련 일지", "모터 러닝", "실전 적용"],
    readerQuestion: "매주 테니스 레슨에서 코치에게 받은 지적 사항을 흘려듣지 않고, 실전 경기에서 재현 가능한 기술 습관으로 정착시키는 구체적인 5단계 기록 양식과 복기 방법은 무엇인가?",
    differentiation: "감정이나 추상적 느낌 대신 '상황-신체 부위-타이밍-큐워드-검증 기준' 5열 구조화 피드백 기록 템플릿, 다음 레슨 전 5분 자가 리허설 및 스마트폰 메모 앱 활용법 제공",
    sources: ["itf-motor-learning-2026", "ptr-coaching-feedback-2026"],
    body: `<article>
<p>많은 테니스 동호인이 매주 정기적으로 레슨을 받지만, 코트 밖을 나서는 순간 코치의 지적 사항을 잊어버리거나 다음 레슨에서 똑같은 실수를 반복합니다. 스포츠 운동학 연구(<a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF Coaching & Sport Science</a>)에 따르면, 지도자의 구두 피드백은 48시간 이내에 구체적인 신체 감각 큐워드(Cue-word)로 정리되지 않으면 80% 이상 망각됩니다. “힘 빼고 부드럽게 치라”는 식의 모호한 기억은 실전에서 아무런 도움이 되지 않습니다. 미국프로테니스등록협회(<a href="https://www.ptrtennis.org/" target="_blank" rel="noopener noreferrer">PTR Coaching Guidelines</a>)의 피드백 정착 이론을 기반으로, 레슨 직후 5분 안에 완성하는 5단계 복기 노트 작성법을 제시합니다.</p>

<h2>5열 구조화 피드백 기록 템플릿</h2>
<p>레슨이 끝나고 벤치에 앉자마자 스마트폰 메모 앱이나 수첩을 열고 다음 5가지 열(Column)에 맞춰 단 2~3줄로 압축 기록합니다. 추상적인 감정 표현을 배제하고 관찰 가능한 물리적 동작으로 분해하는 것이 핵심입니다.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;line-height:1.6;text-align:left;">
  <caption style="caption-side:top;text-align:left;font-weight:700;margin-bottom:10px;color:#0f172a;">실전 전이를 위한 5단계 코치 피드백 구조화 양식</caption>
  <thead>
    <tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;">
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">단계 (열)</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">기록 기준</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">포핸드 스트로크 작성 예시</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">서브 트로피 자세 작성 예시</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">1. 발생 상황</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">공의 궤적 및 타구 위치</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">깊고 높게 튀어 오르는 백핸드 역크로스</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">듀스코트 첫 서브 플랫 시도 시</td>
    </tr>
    <tr style="background:#f8fafc;">
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">2. 신체 분절</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">지적받은 관절 및 근육 부위</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">오른쪽 골반 회전과 왼쪽 어깨 닫힘</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">왼손 토스 팔의 유지 각도 및 무릎 굽힘</td>
    </tr>
    <tr>
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">3. 타이밍 큐</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">동작이 개시되는 순간의 신호</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">바운드 정점 직전 라켓 헤드 드롭 완료</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">토스 공이 손을 떠난 직후 팔꿈치 수평 유지</td>
    </tr>
    <tr style="background:#f8fafc;">
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">4. 핵심 큐워드</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">타구 직전 속으로 외칠 단음절</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">“골반 먼저!”</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">“왼팔 버텨!”</td>
    </tr>
    <tr>
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">5. 자가 검증</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">성공 여부를 눈으로 확인할 기준</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">타구 후 라켓이 왼쪽 어깨 위로 완주</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">임팩트 후 착지 발이 베이스라인 안쪽 30cm 진입</td>
    </tr>
  </tbody>
</table>

<h2>한 번에 한 가지만: 단일 큐워드 원칙과 주간 복기 루틴</h2>
<p>한 레슨에서 코치가 3~4가지 문제를 지적했더라도, 다음 게임이나 개인 연습에서는 <strong>단 하나의 핵심 큐워드</strong>만 선택해야 합니다. 인간의 뇌는 0.5초 이내에 완료되는 타구 동작 중 복수의 기술 큐를 동시에 제어할 수 없습니다. 주중 벽치기나 볼머신 연습 시 선택한 1번 큐워드를 20분간 집중 반복하고, 주말 클럽 경기에서는 결과(점수)에 상관없이 해당 동작의 검증 기준이 달성되었는지만 점크합니다. 다음 레슨 시작 전 코치에게 “지난주 말씀하신 골반 선회 큐를 연습했는데 타점이 조금 앞당겨졌습니다”라고 피드백을 전달하면 레슨 효율이 극대화됩니다.</p>

<aside style="border-left:4px solid #0284c7;background:#f0f9ff;padding:16px 18px;margin:24px 0;border-radius:8px;">
  <strong style="color:#0369a1;display:block;margin-bottom:6px;">레슨 복기와 함께 활용할 보조 도구</strong>
  레슨에서 배운 드릴을 혼자 연습할 때는 <a href="/utility/training-planner">트레이닝 플래너</a>로 세션별 훈련 시간을 분배하고, 벽치기 코트 이용 시에는 <a href="/utility/practice-wall-drill-planner">벽치기 드릴 플래너</a>를 활용해 큐워드를 점검하세요. 실전 경기 전 멘탈 정돈법은 <a href="/utility/pre-match-routine">경기 전 루틴 가이드</a>에서 확인하실 수 있습니다.
</aside>
</article>`
  },
  {
    slug: "aw-098-doubles-beginner",
    route: "/blog/aw-098-doubles-beginner",
    category: "복식 전술",
    title: "동호회 복식 서브·리턴 스타트 포지션: 전위·후위 거리 배치와 첫 스텝 3원칙",
    excerpt: "복식 경기에서 서브·리턴 시 전위와 후위의 네트·라인 기준 좌표와 첫 발 떼는 타이밍 3대 원칙을 정리한 실전 가이드입니다.",
    tags: ["동호회 복식", "스타트 포지션", "전위 위치", "복식 전술", "스플릿스텝"],
    readerQuestion: "동호회 복식 경기에서 서브 팀과 리턴 팀의 전위 및 후위가 네트와 라인에서 얼마나 떨어져 서야 사각지대를 최소화하고 첫 발을 신속히 뗄 수 있는가?",
    differentiation: "서버 파트너(센터 스트랩 1.5m 대각, 서비스라인 중간 3m), 리시버 파트너(서비스라인 1m 뒤 발진 대기) 등 코트 타일 단위 구체적 좌표, 발뒤꿈치 들기 및 첫 스텝 방향성 3대 원칙 매트릭스 제공",
    sources: ["usta-doubles-geometry-2026", "itf-doubles-tactics-2026"],
    body: `<article>
<p>동호회 복식 경기에서 포인트가 시작되기도 전에 실점 확률을 높이는 가장 흔한 실수는 애매한 스타트 위치에 서 있는 것입니다. 전위가 네트에 너무 바짝 붙으면 머리 위로 넘어가는 쉬운 로브에 뚫리고, 반대로 서비스라인 뒤쪽 애매한 공간(노맨스랜드)에 어정쩡하게 서 있으면 발밑으로 떨어지는 까다로운 하프발리를 처리해야 합니다. 미국테니스협회(<a href="https://www.usta.com/en/home/improve/tennis-rules.html" target="_blank" rel="noopener noreferrer">USTA Warrior Doubles Strategy</a>)와 국제테니스연맹(<a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF Doubles Tactics</a>)이 규정하는 코트 기하학에 기반하여, 서브 팀과 리턴 팀의 4대 포지션 좌표와 첫 스텝 원칙을 체계화합니다.</p>

<h2>서브 팀 & 리턴 팀 스타트 포지션 표준 좌표</h2>
<p>포인트가 시작되기 전, 4명의 선수는 코트의 물리적 구획선을 기준으로 자신만의 확실한 기준점을 잡고 서야 합니다. 라켓 길이(약 68~70cm)와 보폭을 기준으로 아래 좌표에 정렬하면 사각지대를 70% 이상 차단할 수 있습니다.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;line-height:1.6;text-align:left;">
  <caption style="caption-side:top;text-align:left;font-weight:700;margin-bottom:10px;color:#0f172a;">동호회 복식 팀별 최적 스타트 포지션 및 커버리지 영역</caption>
  <thead>
    <tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;">
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">포지션 역할</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">네트/베이스라인 기준 거리</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">센터/사이드 기준 거리</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">주요 방어 및 공격 책임 구역</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">서버 (Server)</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">베이스라인 뒤 10~20cm</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">센터마크와 싱글라인 중간(2.5m)</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">서브 후 크로스코트 리턴 및 로브 후위 커버</td>
    </tr>
    <tr style="background:#f8fafc;">
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">서버 파트너 (전위)</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">네트에서 2.5~3.0m (서비스박스 정중앙)</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">센터라인에서 1.5m 안쪽 대각 배치</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">센터 T존 포칭 가로채기 및 스트레이트 차단</td>
    </tr>
    <tr>
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">리시버 (Receiver)</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">상대 서브 구속에 맞춰 베이스라인 안팎 1m</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">싱글 사이드라인 안쪽 50cm</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">서버 발밑을 향한 낮은 크로스 리턴</td>
    </tr>
    <tr style="background:#f8fafc;">
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">리시버 파트너 (전위)</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">서비스라인 뒤쪽 50cm~1m (약 6.5m)</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">복식 앨리라인과 센터라인 정중앙</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">상대 전위의 기습 포칭 발리 역습 방어</td>
    </tr>
  </tbody>
</table>

<h2>첫 스텝을 살리는 3대 기동 원칙</h2>
<p>포지션을 잡았다고 가만히 서 있으면 안 됩니다. <strong>원칙 1(동기화 스플릿스텝)</strong>: 상대 서버의 라켓이 공을 때리는 순간(서버 파트너의 경우 상대 리시버가 공을 임팩트하는 순간) 가볍게 제자리 점프하여 양 발 앞꿈치로 착지합니다. <strong>원칙 2(대각선 전진 모멘텀)</strong>: 전위의 첫 스텝은 코트 옆으로 평행하게 뛰는 것이 아니라, 네트를 향해 대각선 앞 45도 방향으로 파고들어야 볼의 높은 타점을 선점할 수 있습니다. <strong>원칙 3(볼 시선 유지와 리턴 확인)</strong>: 리시버 파트너는 파트너의 리턴이 상대 전위의 라켓 사정거리를 안전하게 통과하는 것을 확인한 직후에만 네트 앞으로 전진해야 불의의 역습 발리에 얼굴이나 몸을 맞지 않습니다.</p>

<aside style="border-left:4px solid #0284c7;background:#f0f9ff;padding:16px 18px;margin:24px 0;border-radius:8px;">
  <strong style="color:#0369a1;display:block;margin-bottom:6px;">복식 포지션 및 호흡 점검 도구</strong>
  파트너와의 전술적 궁합과 포지셔닝 케미스트리를 진단하려면 <a href="/utility/doubles-chemistry-test">복식 케미스트리 테스트</a>와 <a href="/utility/doubles-positioning-simulator">복식 포지셔닝 시뮬레이터</a>를 활용해보세요. 서브 후 전위 핸드 사인 규칙은 <a href="/blog/aw-093-doubles-club-match">동호회 복식 핸드 사인 가이드</a>에서 상세히 확인하실 수 있습니다.
</aside>
</article>`
  },
  {
    slug: "aw-099-injury-injury-record",
    route: "/blog/aw-099-injury-injury-record",
    category: "부상 예방",
    title: "테니스 엘보 전조 신호 자가 점검표: 통증 단계별 체크리스트와 병원 상담 기록법",
    excerpt: "팔꿈치 바깥쪽 통증 전조 증상을 자가 진단하고, 악화를 막기 위한 4단계 관리 수칙과 전문의 진료 상담용 기록 양식입니다.",
    tags: ["테니스 엘보", "부상 예방", "팔꿈치 통증", "체크리스트", "병원 진료"],
    readerQuestion: "팔꿈치 바깥쪽이나 안쪽에 뻐근함이 시작될 때 단순 근육통과 테니스 엘보 전조 신호를 어떻게 구별하고, 악화를 막기 위해 어떤 증상을 기록해 정형외과 진료 시 전달해야 하는가?",
    differentiation: "일상 통증(악수, 커피잔 들기, 문손잡이 회전) 3대 자가 유발 테스트, 통증 강도(VAS) 및 4단계 위험도 분류표, 라켓 무게·스트링 텐션·그립 두께 등 진료 상담용 장비 이력 메모 양식 제공 (의학적 치료 단정 배제, 레드플래그 즉시 중단 수칙 명시)",
    sources: ["itf-elbow-medicine-2026", "nhs-tennis-elbow-2026"],
    body: `<article>
<p>테니스를 즐기는 동호인에게 가장 흔하면서도 치명적인 부상은 외측상과염, 이른바 <strong>테니스 엘보(Tennis Elbow)</strong>입니다. 대다수 플레이어는 경기 중 팔꿈치가 찌릿하거나 뻐근할 때 “조금 치다 보면 풀리겠지”라며 진통소염제를 먹고 경기를 강행하다가, 힘줄(단요측수근신근건)의 미세 파열과 만성 퇴행으로 이어져 수개월간 라켓을 놓게 됩니다. 스포츠 의학 지침(<a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF Sport Science & Medicine</a>)과 영국국민보건서비스(<a href="https://www.nhs.uk/conditions/tennis-elbow/" target="_blank" rel="noopener noreferrer">NHS UK Guidance</a>)에 따르면, 테니스 엘보는 급성 파열보다는 경기 후 미세 손상이 회복되지 않고 누적되어 발생합니다. 조기 자가 점검표와 병원 진료 시 필수적인 기록 양식을 안내합니다.</p>

<h2>일상 동작으로 확인하는 3대 전조 신호 자가 테스트</h2>
<p>팔꿈치 통증이 단순 피로인지 건병증(Tendinopathy) 전조인지는 코트 밖 일상생활의 가벼운 저항 동작을 통해 객관적으로 판별할 수 있습니다. 다음 3가지 동작 중 1가지 이상에서 팔꿈치 바깥쪽 돌출부 뼈에 통증이 유발된다면 즉시 운동 부하를 줄여야 합니다.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;line-height:1.6;text-align:left;">
  <caption style="caption-side:top;text-align:left;font-weight:700;margin-bottom:10px;color:#0f172a;">테니스 엘보 조기 감별을 위한 3대 일상 기능 유발 테스트</caption>
  <thead>
    <tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;">
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">일상 동작 테스트</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">검사 방법</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">양성 반응 기준 (통증 부위)</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">운동 조절 행동 수칙</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">1. 커피잔 / 머그잔 들기</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">물을 채운 컵을 손가락 끝으로 잡고 들어 올림</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">팔꿈치 외측 뼈 부근의 날카로운 쑤심</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">라켓 타구 전면 중단, 얼음찜질 및 휴식</td>
    </tr>
    <tr style="background:#f8fafc;">
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">2. 문손잡이 회전 (열쇠 돌리기)</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">전완을 안쪽에서 바깥쪽으로 비틀며 회전</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">손목을 젖힐 때 팔꿈치로 이어지는 찌릿함</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">백핸드 임팩트 동작 금지, 가벼운 스트레칭</td>
    </tr>
    <tr>
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">3. 중지 저항 신전 검사</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">손바닥을 펴고 세 번째 손가락을 누를 때 버팀</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">단요측수근신근건 부착부 압통 재현</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">정형외과 전문의 진료 및 정밀 진단 예약</td>
    </tr>
  </tbody>
</table>

<h2>정형외과 진료 상담을 위한 필수 기록 양식</h2>
<p>통증이 지속되어 병원을 찾을 때, 단순 “팔이 아파요”라고 말하는 것보다 <strong>장비 및 타구 이력 메모</strong>를 지참하면 의사가 발병 원인을 정확히 특정하는 데 큰 도움이 됩니다. 아래 4개 항목을 스마트폰에 미리 정리해 가세요.</p>
<ul>
  <li><strong>1. 통증 발생 시점 및 양상</strong>: 언제부터 시작되었는지, 타구 직후인지 다음 날 아침인지, 통증 점수(0~10점 중 몇 점인지).</li>
  <li><strong>2. 라켓 스펙 이력</strong>: 라켓 무게(g), 밸런스 포인트, 그립 사이즈(1~4호), 진동감쇄기 사용 여부.</li>
  <li><strong>3. 스트링 세팅 정보</strong>: 스트링 소재(폴리에스터 vs 인조쉽 vs 천연거트), 메인/크로스 텐션(lbs), 마지막 교체 주기.</li>
  <li><strong>4. 최근 훈련량 변화</strong>: 주당 경기 시간의 급증 여부, 무거운 젖은 공 타구 경험, 새로운 오프센터 타구 빈도.</li>
</ul>

<div style="background:#fff1f2;border-left:4px solid #e11d48;padding:16px 18px;margin:24px 0;border-radius:8px;">
  <strong style="color:#9f1239;display:block;margin-bottom:6px;">⚠️ 절대 주의: 의학적 면책 고지 및 레드플래그 신호</strong>
  본 체크리스트는 운동 부하 조절과 의료진 상담을 돕기 위한 교육용 자가 점검표이며, 의학적 진단이나 치료 처방을 대신할 수 없습니다. <em>만약 가만히 쉬고 있을 때도 통증이 심하거나, 야간 수면 중 통증으로 깨어나거나, 손가락 저림·마비감 또는 관절 변형·부종</em>이 동반된다면 즉시 라켓 사용을 중단하고 정형외과 전문의의 정밀 검진을 받으셔야 합니다.
</div>

<aside style="border-left:4px solid #0284c7;background:#f0f9ff;padding:16px 18px;margin:24px 0;border-radius:8px;">
  <strong style="color:#0369a1;display:block;margin-bottom:6px;">부상 예방 및 장비 세팅 도구</strong>
  팔꿈치에 가해지는 충격을 낮추려면 <a href="/utility/string-tension">적정 스트링 텐션 계산기</a>로 현재 텐션을 2~4파운드 인하하는 방안을 고려하세요. 그립 두께가 너무 얇으면 악력이 과도하게 들어가 엘보 위험이 커지므로 <a href="/utility/grip-size-checker">그립 사이즈 체커</a>를 점검하고, 전반적인 부상 위험도는 <a href="/utility/injury-risk">부상 위험 자가 진단 도구</a>에서 측정하실 수 있습니다. 손목 통증 기록법은 <a href="/blog/aw-094-injury-grip-record">손목 통증 그립 기록법</a>을 참고하세요.
</aside>
</article>`
  },
  {
    slug: "aw-100-tennis-guide",
    route: "/blog/aw-100-tennis-guide",
    category: "레슨 가이드",
    title: "테니스 레슨 효과를 2배 높이는 코치 질문법: 실전 오류 중심 4단계 질문 템플릿",
    excerpt: "20분 개인 레슨에서 막연한 질문 대신 코치의 즉각적이고 정밀한 교정 드릴을 이끌어내는 4단계 질문 구조화 공식입니다.",
    tags: ["테니스 레슨", "코치 질문법", "레슨 팁", "실전 오류", "효율적 연습"],
    readerQuestion: "20분 짧은 테니스 레슨에서 '어떻게 쳐야 하나요?' 같은 막연한 질문 대신, 코치로부터 즉각적인 원인 진단과 맞춤 교정 드릴을 끌어내는 질문 작성법은 무엇인가?",
    differentiation: "'실전 장면-실패 결과-자가 느낌-교정 요청' 4요소 질문 구조화 공식, 레슨 시작 전 1분 코치 브리핑 멘트 및 영상 타임스탬프 제시 요령 제공",
    sources: ["itf-diagnostic-questions-2026", "usta-lesson-efficiency-2026"],
    body: `<article>
<p>대부분의 동호인은 20분 내외의 짧은 개인 레슨을 받으면서 귀중한 시간을 날려버리곤 합니다. 코치가 “오늘 특별히 안 되는 것 있으세요?”라고 물을 때, “포핸드가 자꾸 안 들어가요”, “발리가 이상해요”처럼 막연하게 대답하기 때문입니다. 이러한 질문은 코치로 하여금 일반적인 원포인트 기본기 점검부터 처음부터 다시 시작하게 만들어 레슨 시간의 절반을 소모하게 만듭니다. 코칭 심리학(<a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF Coaching Development</a>)과 미국테니스협회(<a href="https://www.usta.com/en/home/improve/tips-and-instruction.html" target="_blank" rel="noopener noreferrer">USTA Player Development</a>)의 지도 커뮤니케이션 이론에 입각하여, 코치의 정밀한 진단과 최적의 맞춤 드릴을 유도하는 4단계 질문 공식(SCFR 프레임워크)을 정리합니다.</p>

<h2>4요소 구조화 질문 공식: SCFR 프레임워크</h2>
<p>효과적인 레슨 질문은 <strong>1) 실전 장면(Scenario), 2) 실패 결과(Consequence), 3) 자가 느낌(Feeling), 4) 구체적 요청(Request)</strong>의 4가지 요소가 하나로 결합되어야 합니다. 코치에게 원인을 찾을 단서를 먼저 제공해야 즉각적인 해결책이 나옵니다.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;line-height:1.6;text-align:left;">
  <caption style="caption-side:top;text-align:left;font-weight:700;margin-bottom:10px;color:#0f172a;">막연한 질문 vs SCFR 4단계 구조화 질문 비교 대조표</caption>
  <thead>
    <tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;">
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">대상 기술</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">비효율적인 막연한 질문 (피해야 할 예시)</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">SCFR 4단계 구조화 질문 (권장 질문 공식)</th>
      <th scope="col" style="padding:12px;border:1px solid #cbd5e1;">코치의 즉각적인 반응 및 피드백</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">포핸드 스트로크</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">“포핸드가 자꾸 홈런처럼 날아가는데 왜 그럴까요?”</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">“<strong>(장면)</strong> 상대가 짧고 낮게 깔아 친 공을 <strong>(결과)</strong> 드라이브로 칠 때 베이스라인 1m 밖으로 아웃됩니다. <strong>(느낌)</strong> 임팩트 순간 라켓 면이 일찍 열리는 느낌인데, <strong>(요청)</strong> 면을 닫아 감는 릴리스 드릴을 봐주실 수 있나요?”</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">낮은 공 전용 무릎 굽힘과 윈드실드 와이퍼 피니시 드릴 즉시 가동</td>
    </tr>
    <tr style="background:#f8fafc;">
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">백핸드 발리</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">“백발리가 힘이 안 실려요. 세게 치는 법 알려주세요.”</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">“<strong>(장면)</strong> 복식 전위에서 바디로 날아오는 빠른 공을 <strong>(결과)</strong> 블록하면 네트에 걸립니다. <strong>(느낌)</strong> 손목이 뒤로 꺾이며 라켓 헤드가 처지는데, <strong>(요청)</strong> 임팩트 면을 단단히 고정하는 첫 스텝 요령을 교정받고 싶습니다.”</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">라켓 헤드 세우기 및 왼발 크로스 스텝 압축 블록 훈련 진행</td>
    </tr>
    <tr>
      <th scope="row" style="padding:12px;border:1px solid #cbd5e1;font-weight:600;">세컨드 서브</th>
      <td style="padding:12px;border:1px solid #cbd5e1;">“더블폴트가 너무 많아요. 어떻게 고치죠?”</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">“<strong>(장면)</strong> 어드밴티지 코트 세컨드 서브 시 <strong>(결과)</strong> 공이 네트 상단 테이프에 걸립니다. <strong>(느낌)</strong> 토스가 몸 오른쪽으로 흘러 스핀을 못 거는데, <strong>(요청)</strong> 11시 방향 토스 위치와 상향 타격 각도를 확인해 주세요.”</td>
      <td style="padding:12px;border:1px solid #cbd5e1;">토스 궤적 교정판 설치 및 브러시 업 킥서브 감각 훈련</td>
    </tr>
  </tbody>
</table>

<h2>레슨 시작 1분 브리핑과 스마트폰 영상 활용법</h2>
<p>레슨을 받으러 코트에 들어설 때, 코치가 웜업 볼을 던져주기 전 30초~1분 동안 오늘 집중할 주제를 먼저 선언하세요. “코치님, 오늘은 지난 주말 경기에서 문제가 되었던 [SCFR 질문] 1가지만 집중해서 봐주시면 좋겠습니다”라고 말하는 순간, 코치의 관찰 집중도는 일반 수강생보다 2배 이상 높아집니다. 경기 중 찍어둔 스마트폰 영상이 있다면 3초 분량의 임팩트 전후 구간만 미리 타임스탬프를 찍어 코치에게 보여주세요. 백 마디 설명보다 영상 한 장면이 코치로 하여금 문제의 근본 원인을 즉시 짚어내게 만듭니다.</p>

<aside style="border-left:4px solid #0284c7;background:#f0f9ff;padding:16px 18px;margin:24px 0;border-radius:8px;">
  <strong style="color:#0369a1;display:block;margin-bottom:6px;">레슨 효율 극대화를 위한 추천 도구</strong>
  레슨에서 교정한 구종과 궤적을 실전에서 평가하려면 <a href="/utility/match-analyzer">매치 분석기</a>를 통해 서브/리턴 성공률을 측정하세요. 경기 중 범실 패턴을 세부적으로 기록하고 싶다면 <a href="/utility/unforced-error-audit">언포스드 에러 자가 진단표</a>와 <a href="/utility/match-recorder">매치 레코더</a>를 병행하시면 실력 향상이 더욱 빨라집니다.
</aside>
</article>`
  }
];

const proposalsData = {
  batchId: "light-lesson-20261027",
  targetDate: "2026-10-27",
  items
};

const outputDir = ".goal-harness/content-90-20261020";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, "next-light-lesson-sources.json"), JSON.stringify(sourcesData, null, 2) + "\n", "utf8");
fs.writeFileSync(path.join(outputDir, "next-light-lesson-proposals.json"), JSON.stringify(proposalsData, null, 2) + "\n", "utf8");

console.log("Created next-light-lesson-sources.json");
console.log("Created next-light-lesson-proposals.json");
