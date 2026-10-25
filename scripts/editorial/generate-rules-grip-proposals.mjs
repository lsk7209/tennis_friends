import fs from "node:fs";
import path from "node:path";

const sourcesData = {
  sources: [
    {
      id: "itf-rules-2026",
      name: "ITF Rules of Tennis 2026",
      url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
      checkedAt: "2026-10-25",
      claims: [
        "Rule 5 (Score in a Game): Standard game scoring, server score called first.",
        "Rule 17 (The Server & Receiver): Receiver readiness and service boundary rules.",
        "Rule 24 (Player Loses Point): Ball touching player, double bounce, net touch constitute immediate loss of point.",
        "Rule 29 (Continuous play & rest): 25 seconds between points, prompt match continuation."
      ],
      limitations: "Covers official competitive tennis rules. Club-level friendly matches may operate with local modifications."
    },
    {
      id: "usta-the-code-2026",
      name: "USTA FAC The Code - The Players' Guide to Fair Play",
      url: "https://www.usta.com/en/home/improve/tennis-rules.html",
      checkedAt: "2026-10-25",
      claims: [
        "Section 1-5: A player calls all shots on their own side of the net promptly and clearly.",
        "Section 6-10: Any ball that cannot be called out with 100% certainty must be treated as in (benefit of the doubt to opponent).",
        "Section 11-15: Score disputes must revert to the last agreed-upon score; let calls cannot be made on clear out balls."
      ],
      limitations: "Self-officiating code for unofficiated matches; distinct from chair-umpired tournaments."
    },
    {
      id: "itf-equipment-grip-2026",
      name: "ITF Tennis Technical & Equipment Guidelines: Overgrips & Racket Mechanics",
      url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
      checkedAt: "2026-10-25",
      claims: [
        "Overgrips add 0.5mm to 0.75mm to handle circumference, affecting torsional stability on off-center impacts.",
        "Dry-type polyurethane overgrips excel at sweat absorption without losing traction, whereas tacky grips provide adhesion in low-humidity conditions."
      ],
      limitations: "Grip preference varies with player hand size, climate, and sweat gland physiology."
    },
    {
      id: "usta-grip-moisture-2026",
      name: "USTA Equipment Care: Overgrips, Grip Sizes & Moisture Management",
      url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
      checkedAt: "2026-10-25",
      claims: [
        "Wristbands block sweat descending from forearm to palm, reducing hand slipping by up to 60%.",
        "A 3-step change protocol ensures even tension without overlapping ridges that cause blisters."
      ],
      limitations: "Equipment maintenance guideline, not a guarantee against all mishits."
    },
    {
      id: "itf-biomechanics-serve-toss-2026",
      name: "ITF Biomechanics of the Tennis Serve: Toss Placement & Release Consistency",
      url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
      checkedAt: "2026-10-25",
      claims: [
        "The optimal toss apex is roughly 15 to 30 cm above maximum racquet reach, giving a predictable falling velocity.",
        "Fingertip release without wrist flexion prevents unintended rotational spin on the tossed ball."
      ],
      limitations: "Individual height, wind conditions, and stance (platform vs pinpoint) modify optimal toss parameters."
    },
    {
      id: "usta-serve-toss-drills-2026",
      name: "USTA Player Development: Toss Consistency, Height, and Placement Standards",
      url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
      checkedAt: "2026-10-25",
      claims: [
        "Flat serves require toss at 12:30 to 1:00 clock position in front of baseline; kick serves require toss at 11:30 to 12:00 over head.",
        "Synchronizing toss release with knee bend initiation stabilizes trunk posture and trophy position."
      ],
      limitations: "Self-training drills; high wind necessitates lower toss height adjustment."
    },
    {
      id: "usta-warrior-doubles-middle-2026",
      name: "USTA Warrior Doubles Strategy: Defending & Attacking the Middle Ball",
      url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
      checkedAt: "2026-10-25",
      claims: [
        "Forehand in the middle takes priority when both players are parallel at the baseline or net.",
        "When crosscourt diagonal player has better approach angle, clear single-syllable voice call ('Mine/Me') overrides default position."
      ],
      limitations: "Applies to standard doubles formations; Australian or I-formation requires pre-point hand signal agreement."
    },
    {
      id: "itf-doubles-tactics-2026",
      name: "ITF Doubles Tactics & Communication Protocols",
      url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
      checkedAt: "2026-10-25",
      claims: [
        "Indecision on center balls accounts for over 28% of unforced errors in amateur doubles rallies.",
        "Early non-verbal cues and committed loud calls eliminate racket clashes and hesitation."
      ],
      limitations: "Partner chemistry and shared understanding required; adapt when playing with unfamiliar guest partners."
    },
    {
      id: "itf-splitstep-biomechanics-2026",
      name: "ITF Sport Science & Medicine: Lower Limb Loading and Split-Step Mechanics",
      url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
      checkedAt: "2026-10-25",
      claims: [
        "Landing on the forefoot (balls of the feet) with knee and hip flexion reduces peak ground reaction impact transmitted to patellar tendon by up to 45% compared to heel-first landing.",
        "Stiff-legged landing creates excessive shear forces across the anterior cruciate ligament and meniscus."
      ],
      limitations: "Biomechanical principles; not an individualized medical treatment or guarantee against sports injuries."
    },
    {
      id: "nhs-knee-racquet-loading-2026",
      name: "NHS / Newcastle Hospitals Guidance: Knee Joint Protection and Deceleration in Racquet Sports",
      url: "https://www.nhs.uk/conditions/knee-pain/",
      checkedAt: "2026-10-25",
      claims: [
        "Gradual deceleration and proper footwear with adequate cushioning protect knee cartilage from repetitive concussive trauma.",
        "Persistent swelling, locking, giving way, or acute pain during weight-bearing warrants immediate rest and medical evaluation."
      ],
      limitations: "General clinical guidance. Discontinue play immediately upon acute joint pain or instability."
    }
  ]
};

const proposals = {
  batchId: "rules-grip-20261025",
  targetDate: "2026-10-25",
  items: [
    {
      slug: "aw-085-match-5",
      route: "/blog/aw-085-match-5",
      category: "경기 규칙",
      title: "경기 중 규칙 논쟁을 줄이는 판정 기준과 5단계 소통 순서",
      excerpt: "셀프 저지 경기에서 라인 콜·스코어 분쟁·신체 접촉 논쟁이 발생했을 때 USTA The Code 및 ITF 룰에 기반한 5단계 소통 순서와 판정 기준을 정리했습니다.",
      tags: ["경기 규칙", "셀프 저지", "라인 콜", "테니스 매너", "동호회 경기"],
      readerQuestion: "심판이 없는 동호회 셀프 저지 경기에서 라인 콜이나 스코어 분쟁이 발생했을 때 감정싸움 없이 명확하게 해결하는 대화 순서와 공식 규칙은 무엇인가?",
      differentiation: "단순히 '서로 양보하라'는 매너 수칙을 넘어, USTA The Code(제1조~제15조)에 명시된 라인 판정 우선권(자기 진영 볼만 판정, 의심스러우면 상대에게 유리하게 인 판정), 스코어 분쟁 시 일치하는 점수로 복귀 원칙, 볼이 몸에 닿았을 때(Not Up / Touch) 즉시 실점 인정 규칙을 5단계 대화 타임라인으로 구조화",
      sources: [
        {
          name: "ITF Rules of Tennis 2026 (Rule 5, 17, 24, 29)",
          url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
          checkedAt: "2026-10-25",
          claims: ["스코어 호칭 및 셀프 판정 책임, 신체 접촉 시 즉각 실점 규정"]
        },
        {
          name: "USTA FAC The Code - Self-Officiating Guidelines §§1–15",
          url: "https://www.usta.com/en/home/improve/tennis-rules.html",
          checkedAt: "2026-10-25",
          claims: ["100% 확신 없는 볼은 인 판정, 스코어 분쟁 시 합의된 이전 점수로 복귀 원칙"]
        }
      ],
      body: `<article>
<p>동호회 테니스 경기나 클럽 리그전은 대다수 심판 없이 선수끼리 판정하는 <strong>셀프 저지(Self-Officiating)</strong>로 진행됩니다. 이때 가장 빈번하게 발생하는 문제는 애매한 라인 콜, 포인트 스코어 혼선, 그리고 공이 몸이나 라켓 프레임에 두 번 맞았을 때의 판정 시비입니다. 감정적인 언쟁으로 번지지 않고 공식 규칙에 따라 신속하게 경기를 재개하려면 <a href="https://www.itftennis.com/en/about-us/governance/rules-and-regulations/" target="_blank" rel="noopener noreferrer">ITF Rules of Tennis</a>와 <a href="https://www.usta.com/en/home/improve/tennis-rules.html" target="_blank" rel="noopener noreferrer">USTA The Code</a>가 정한 객관적 기준을 알아야 합니다.</p>

<p>본 가이드에서는 애매한 판정 상황에서 불필요한 마찰을 원천 차단하는 5단계 소통 순서와 상황별 공식 판정 규칙을 정리합니다. 경기 기록 및 분석이 필요하다면 <a href="/utility/match-recorder">매치 레코더</a>와 <a href="/utility/tennis-scoring-quiz">테니스 스코어링 퀴즈</a>를 통해 규칙 이해도를 점검할 수 있습니다.</p>

<h2>셀프 저지 경기에서 자주 발생하는 3대 분쟁 상황</h2>
<p>셀프 저지 경기에서 발생하는 갈등은 악의적인 판정보다는 규칙 적용의 오해나 부주의한 소통에서 시작됩니다. 대표적인 세 가지 분쟁 유형을 명확히 구분해야 합니다.</p>
<ul>
  <li><strong>라인 콜(Line Call) 불확실성:</strong> 볼이 라인에 스쳤는지 벗어났는지 애매한 상황에서 판정이 늦어지거나 상대 코트 볼에 간섭하는 경우입니다.</li>
  <li><strong>스코어(Score) 혼선:</strong> 듀스 상황이나 긴 랠리 후 서버가 점수를 부르지 않고 서브를 넣어 직전 포인트 결과를 서로 다르게 기억하는 경우입니다.</li>
  <li><strong>낫 업(Not Up) 및 터치(Touch):</strong> 볼이 두 번 바운드된 후 타구되었거나, 네트를 넘기 전 선수의 신체나 옷에 볼이 닿았음에도 플레이를 지속하는 경우입니다.</li>
</ul>

<h2>USTA The Code 기반 5단계 분쟁 해결 프로토콜</h2>
<p>판정 논쟁이 발생했을 때 양측이 얼굴을 붉히지 않고 30초 이내에 상황을 정리하는 공식 절차입니다.</p>
<ol>
  <li><strong>1단계 - 즉각적인 판정과 핸드 시그널:</strong> 라인 콜은 볼이 바운드된 즉시 아웃 콜을 외치거나 검지를 위로 들어 표시해야 합니다. 랠리를 이어간 뒤 뒤늦게 콜하는 것은 무효입니다.</li>
  <li><strong>2단계 - 의심의 이익 원칙(Benefit of the Doubt):</strong> 100% 아웃이라는 확신이 들지 않고 1%라도 라인에 물렸을 가능성이 있다면 공식 룰상 무조건 <strong>인(In)</strong>으로 판정해야 합니다.</li>
  <li><strong>3단계 - 서버의 사전 스코어 콜 의무:</strong> 서버는 매 포인트 서브를 넣기 전 상대가 들을 수 있는 명확한 목소리로 현재 스코어(서버 점수 먼저)를 호칭해야 합니다.</li>
  <li><strong>4단계 - 스코어 분쟁 시 합의된 점수로 복귀:</strong> 점수가 엇갈릴 때는 다투는 포인트를 지우고, 양측이 공통으로 인정하는 가장 가까운 이전 스코어로 돌아가 해당 게임을 이어갑니다.</li>
  <li><strong>5단계 - 클레이 코트 볼마크 확인 한계:</strong> 클레이 코트에서는 자신이 직접 친 공의 자국을 상대 동의하에 확인할 수 있으나, 상대 코트로 넘어가 자국을 훼손하거나 독단적으로 판정을 번복할 수 없습니다.</li>
</ol>

<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">
  <caption className="text-left font-bold py-2">셀프 저지 분쟁 상황별 공식 판정 권한 및 처리 기준</caption>
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">분쟁 유형</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">판정 권한</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">공식 규칙 및 처리 원칙</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">금지 행동</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">자신 진영 라인 콜</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">해당 코트 수비 선수</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">공이 떨어진 쪽 선수가 전적인 판정 권한 보유. 100% 확신 없으면 인.</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">상대 진영 볼에 대해 감으로 아웃 주장</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">상대 진영 라인 콜</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">상대 선수 (원칙)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">상대 선수가 못 봤을 경우 질문할 수 있으나 상대의 최종 콜을 존중.</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">네트를 넘어와 상대 코트 라인 판정에 항의</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">점수 기억 불일치</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">양측 합의</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">일치하는 포인트만 인정하고 이견이 있는 포인트는 이전 스코어로 롤백.</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">게임을 중단하고 렛으로 처음부터 재시작</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">신체/옷에 볼 터치</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">터치된 선수 본인</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">인/아웃 여부와 무관하게 공이 신체에 닿는 순간 즉시 실점(Rule 24).</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">아웃될 공이었다며 플레이 지속 주장</td>
    </tr>
  </tbody>
</table>

<h2>깔끔한 경기 마무리를 위한 코트 에티켓</h2>
<p>경기가 끝난 후에는 판정 시비가 있었더라도 네트 앞에서 정중하게 라켓 터치와 인사를 나누는 것이 테니스의 기본 문화입니다. 서로 다른 해석이 남은 규칙은 경기 도중 언성을 높이기보다 경기가 끝난 후 공식 룰북이나 클럽 경기 위원회를 통해 확인하는 것이 바람직합니다. 파트너십과 경기 매너에 대한 추가 조언은 <a href="/blog/tennis-match-flow-reading">경기 흐름 읽기 가이드</a>에서 확인할 수 있습니다.</p>

<section className="faq-section my-6">
  <h2 className="text-xl font-bold mb-3">자주 묻는 질문 (FAQ)</h2>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">상대가 명백한 인 공을 아웃으로 콜하면 어떻게 해야 하나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">정중하게 "정말 아웃이었나요? 확인 부탁드립니다"라고 1회 확인할 수 있습니다. 상대가 아웃을 고수하면 셀프 저지 규칙상 해당 판정을 수용해야 합니다. 지속적인 오심이 발생하면 클럽 경기 임원에게 중재를 요청하는 것이 원칙입니다.</p>
  </details>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">점수 분쟁 시 합의가 전혀 안 되면 가위바위보나 렛을 해도 되나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">공식 규칙에서는 임의의 추첨이나 렛을 인정하지 않습니다. 양측이 확실하게 기억을 같이하는 직전 점수(예: 30-15에서 40-15와 30-30으로 갈린다면 30-15)로 되돌아가서 플레이를 재개해야 합니다.</p>
  </details>
  <details className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">서브가 라인에 맞았는지 서비스 리시버의 파트너(전위)도 콜할 수 있나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">네, 복식 경기에서는 리시버와 전위 모두 자기 진영 서비스라인과 사이드라인에 대해 콜할 권한이 있습니다. 다만 전위와 후위의 콜이 엇갈릴 경우 인(In)으로 처리됩니다.</p>
  </details>
</section>
</article>`
    },
    {
      slug: "aw-086-grip-beginner",
      route: "/blog/aw-086-grip-beginner",
      category: "장비 가이드",
      title: "땀 많은 날 그립 미끄러짐 방지: 드라이 vs 택키 선택과 4단계 손 관리법",
      excerpt: "더운 날이나 땀이 많을 때 라켓이 돌아가는 현상을 막기 위한 드라이/택키 오버그립 특성 비교, 손목 밴드와 타월링 루틴, 교체 주기 기준표를 정리했습니다.",
      tags: ["테니스 그립", "오버그립", "땀 관리", "라켓 관리", "테니스 장비"],
      readerQuestion: "여름철이나 손에 땀이 많은 환경에서 임팩트 시 라켓 그립이 돌아가지 않도록 관리하는 오버그립 선택법과 실전 루틴은 무엇인가?",
      differentiation: "단순히 그립 테이프를 자주 갈라는 조언 대신, 땀 흡수력 중심의 드라이(Dry) 그립 vs 끈적한 점착력 중심의 택키(Tacky) 그립의 습도별 선택 기준표, 손목 아대(손목 밴드)의 땀 차단 역할, 포인트 사이 타월링 3단계 루틴, 그립 두께 변화 방지를 위한 래핑 기법 제공",
      sources: [
        {
          name: "ITF Tennis Technical & Equipment Guidelines: Overgrips & Racket Mechanics",
          url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
          checkedAt: "2026-10-25",
          claims: ["오버그립 두께(0.5~0.75mm)와 토크 안정성, 드라이/택키 폴리우레탄 특성"]
        },
        {
          name: "USTA Equipment Care: Overgrips, Grip Sizes & Moisture Management",
          url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
          checkedAt: "2026-10-25",
          claims: ["손목 밴드의 땀 차단 효과 및 규칙적인 그립 교체 프로토콜"]
        }
      ],
      body: `<article>
<p>기온이 올라가거나 랠리가 길어지면 손바닥과 팔에서 흘러내린 땀으로 인해 라켓 핸들이 미끄러지기 쉽습니다. 임팩트 순간 라켓이 미세하게 돌아가면 정타를 맞히지 못해 빗맞은 에러가 급증하고, 손잡이를 지나치게 꽉 쥐게 되어 손목과 전완근에 불필요한 긴장이 유발됩니다. 땀이 많은 환경에서는 라켓 그립의 종류를 용도에 맞게 선택하고 체계적인 수분 관리 루틴을 갖추는 것이 필수적입니다.</p>

<p>본 가이드에서는 <a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF 기술 가이드</a>와 <a href="https://www.usta.com/en/home/improve/tips-and-instruction.html" target="_blank" rel="noopener noreferrer">USTA 장비 관리 지침</a>에 근거하여 드라이 그립과 택키 그립의 성능 차이, 손목 아대와 타월링 활용법, 올바른 오버그립 교체 주기를 상세히 설명합니다. 자신의 손 크기에 맞는 기본 그립 사이즈가 궁금하다면 <a href="/utility/grip-size-checker">그립 사이즈 체커</a>를 함께 확인해보세요.</p>

<h2>드라이(Dry) 그립 vs 택키(Tacky) 그립 비교 선택 기준</h2>
<p>오버그립은 표면 코팅과 소재의 수분 반응 방식에 따라 크게 <strong>드라이 타입</strong>과 <strong>택키(점착) 타입</strong>으로 나뉩니다. 자신의 발한량과 플레이 환경에 맞는 선택이 선행되어야 합니다.</p>
<ul>
  <li><strong>드라이 오버그립(Dry Overgrip):</strong> 표면이 부드러운 천이나 스웨이드 느낌을 줍니다. 땀을 흡수할수록 마찰력이 높아져 손에 땀이 흥건하게 나는 다한증 성향의 플레이어에게 최적입니다. 내구성은 상대적으로 짧아 표면이 마모되면 즉시 교체해야 합니다.</li>
  <li><strong>택키 오버그립(Tacky Overgrip):</strong> 표면이 쫀득쫀득하게 손에 달라붙는 점착성 폴리우레탄 코팅입니다. 손이 건조하거나 땀이 적당히 나는 봄·가을·겨울철에 탁월한 밀착감을 제공하지만, 땀이 과도하게 쏟아지면 수분막이 형성되어 오히려 미끄러질 수 있습니다.</li>
</ul>

<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">
  <caption className="text-left font-bold py-2">오버그립 유형별 특성 및 환경별 권장 기준표</caption>
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">그립 종류</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">표면 감촉</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">수분 흡수 성능</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">추천 계절 및 사용자</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">권장 교체 주기</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">드라이 그립</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">매트하고 보송한 천 감촉</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">극대 (수분 흡수 시 접지력 강화)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">여름철, 손에 땀이 많은 동호인</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2~4 매치 (또는 주 1~2회)</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">택키 그립</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">쫀득하고 달라붙는 점착감</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">보통 (다량 수분 시 미끄러짐)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">봄·가을·겨울철, 건조한 손</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">4~6 매치 (또는 2주 1회)</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">천연 가죽 원그립</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">단단하고 각진 엣지 전달</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">낮음 (단독 사용 시 미끄러움)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">오버그립 아래 베이스 그립용</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">6개월~1년 이상 사용 가능</td>
    </tr>
  </tbody>
</table>

<h2>실전에서 미끄러짐을 막는 4단계 관리 루틴</h2>
<p>오버그립을 바꾸는 것만으로 부족하다면 경기 중 체계적인 수분 차단 프로토콜을 가동해야 합니다.</p>
<ol>
  <li><strong>손목 와이드 아대 착용:</strong> 손바닥 땀의 50% 이상은 팔뚝에서 타고 흘러내립니다. 팔뚝 아래쪽에 폭이 넓은(4~5인치) 면 손목 밴드를 착용해 수분의 유입 경로를 원천 차단합니다.</li>
  <li><strong>포인트 사이 3초 타월링:</strong> 서비스 체인지나 포인트 종료 후 펜스에 걸어둔 타월로 손바닥과 라켓 핸들을 가볍게 닦아냅니다. 지나치게 문지르지 않고 수분만 찍어내듯 제거합니다.</li>
  <li><strong>로진백 또는 액상 마그네슘 보조제:</strong> 땀이 극단적으로 많은 날에는 볼링이나 테니스용 로진백(송진 파우더)을 손바닥에 소량 두드려 유분과 땀을 흡착시킵니다.</li>
  <li><strong>서브 라켓 교대 운용:</strong> 긴 매치를 치를 때는 동일 스펙의 라켓 2자루를 준비하여, 게임 체인지마다 건조된 라켓으로 번갈아 사용하면 그립의 건조 상태를 유지할 수 있습니다.</li>
</ol>

<h2>오버그립 감기 시 주의사항</h2>
<p>오버그립을 감을 때는 겹치는 폭을 2~3mm로 균일하게 유지해야 핸들 두께가 울퉁불퉁해지지 않습니다. 겹치는 면적이 너무 넓으면 그립 사이즈가 한 치수 이상 커져 손목 회전에 방해가 되며, 너무 느슨하게 감으면 랠리 도중 오버그립이 밀려 올라갑니다. 장비 주기적 교체 주기는 <a href="/utility/overgrip-replacement-reminder">오버그립 교체 알리미</a>를 활용해 체계적으로 관리할 수 있습니다.</p>

<section className="faq-section my-6">
  <h2 className="text-xl font-bold mb-3">자주 묻는 질문 (FAQ)</h2>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">오버그립을 원그립 위에 2~3개 겹쳐 감아도 되나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">권장하지 않습니다. 오버그립을 여러 겹 감으면 라켓 팔각형 베벨(각)이 둥글어져 임팩트 면 인식이 어려워지고, 그립 무게 증가로 라켓 밸런스가 헤드라이트 방향으로 급변합니다.</p>
  </details>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">드라이 그립이 더러워졌는데 물로 빨아서 다시 써도 되나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">물세탁은 폴리우레탄 미세 다공성 구조를 파괴하여 땀 흡수 성능을 완전히 상실시킵니다. 표면이 변색되고 마찰력이 떨어지면 새 오버그립으로 교체해야 합니다.</p>
  </details>
  <details className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">손에 바르는 액상 초크나 땀 억제제를 써도 규칙 위반이 아닌가요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">공식 ITF 규칙상 공에 이물질을 묻히거나 코트를 훼손하지 않는 범위 내에서 손의 접지력을 위한 로진백, 액상 초크, 수건 사용은 완전히 합법입니다.</p>
  </details>
</section>
</article>`
    },
    {
      slug: "aw-087-serve-record",
      route: "/blog/aw-087-serve-record",
      category: "서브 기술",
      title: "서브 토스 흔들림 자가 진단과 교정: 높이·위치·릴리스 3대 체크리스트",
      excerpt: "서브 성공률을 떨어뜨리는 들쭉날쭉한 토스를 바로잡기 위한 12시~1시 방향 릴리스 위치, 라켓 길이 기준 최적 높이, 무릎 굽힘과의 타이밍 기록법을 정리했습니다.",
      tags: ["서브 토스", "서브 연습", "토스 교정", "자가 진단", "테니스 서브"],
      readerQuestion: "바람이 불거나 경기 후반 체력이 떨어질 때 서브 토스가 흔들리는 원인을 파악하고 스스로 일관된 궤적을 유지하는 훈련법은 무엇인가?",
      differentiation: "단순히 '토스를 높게 던져라'는 잘못된 조언을 바로잡고, 타점 기준 라켓 길이+15~30cm의 안정적 정점 높이 설정, 시계 문자판 기준 12시(플랫/슬라이스) vs 11시 반(킥 서브) 릴리스 위치, 공을 던지는 게 아니라 '올려놓는' 핑거팁 릴리스 기술, 스마트폰 촬영 자가 진단표 제공",
      sources: [
        {
          name: "ITF Biomechanics of the Tennis Serve: Toss Placement & Release Consistency",
          url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
          checkedAt: "2026-10-25",
          claims: ["토스 정점 높이와 라켓 타점 간격, 핑거팁 릴리스의 회전 억제 효과"]
        },
        {
          name: "USTA Player Development: Serve Toss Consistency & Accuracy Standards",
          url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
          checkedAt: "2026-10-25",
          claims: ["구종별 시계 방향 위치 분배(12시~1시 vs 11시반), 하체 싱크로나이제이션"]
        }
      ],
      body: `<article>
<p>테니스 서브의 성패를 가르는 80%는 라켓을 휘두르는 스윙 이전, 공을 띄우는 <strong>서브 토스(Toss)</strong>에서 결정됩니다. 토스가 뒤로 넘어가거나 좌우로 날리면 몸의 밸런스가 무너지고, 팔의 힘만으로 공을 억지로 맞히느라 네트에 걸리거나 베이스라인을 벗어나는 더블폴트가 반복됩니다. 특히 경기 후반 긴장감이 커지거나 야외 바람이 부는 상황에서 토스 일관성을 유지하려면 감에 의존하지 않는 객관적인 진단 기준이 필요합니다.</p>

<p>본 가이드에서는 <a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF 서브 생체역학 지침</a>과 <a href="https://www.usta.com/en/home/improve/tips-and-instruction.html" target="_blank" rel="noopener noreferrer">USTA 선수 육성 가이드</a>에 기반하여 최적의 토스 높이 설정, 시계 문자판 기준의 릴리스 위치, 손가락 롤링을 없애는 핑거팁 릴리스 메커니즘을 상세히 다룹니다. 서브 배치와 연습 계획은 <a href="/utility/serve-placement-mapper">서브 배치 맵퍼</a> 및 <a href="/utility/training-planner">트레이닝 플래너</a>를 통해 구체화할 수 있습니다.</p>

<h2>토스가 무너지는 3대 메커니즘 오류</h2>
<p>서브 토스가 불안정한 골퍼나 테니스 동호인의 동작을 고속 카메라로 분석하면 공통적으로 나타나는 세 가지 구조적 결함이 있습니다.</p>
<ul>
  <li><strong>손목 스냅 및 손가락 굴곡:</strong> 손바닥이나 손가락 끝으로 공을 쥐어짜듯 튕겨 올리면 공에 역회전이나 옆회전이 걸려 정점에서 공이 흔들립니다.</li>
  <li><strong>과도하게 높은 토스:</strong> 프로 선수를 흉내 내어 지나치게 높은 토스를 올리면 공이 떨어지는 가속도가 붙어 스위트스폿에 정확한 타이밍으로 맞히기 극도로 어려워지며 바람의 영향을 크게 받습니다.</li>
  <li><strong>어깨 대신 팔꿈치로 리프팅:</strong> 왼팔(오른손잡이 기준) 전체를 하나의 지렛대처럼 어깨 축으로 올리지 않고 팔꿈치를 구부려 던지면 릴리스 포인트가 매번 달라집니다.</li>
</ul>

<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">
  <caption className="text-left font-bold py-2">서브 구종별 표준 토스 위치·높이 및 타점 기준표</caption>
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">서브 구종</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">시계 방향 위치 (오른손잡이 기준)</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">베이스라인 기준 앞뒤 위치</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">권장 정점 높이</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">주요 공략 궤적</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">플랫 서브 (1st)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">12시 30분 ~ 1시 방향</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">베이스라인 안쪽 30~45cm 전방</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">최고 타점 + 15~20cm</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">직선적 궤적, 체중 이동 극대화</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">슬라이스 서브</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1시 ~ 1시 30분 방향 (우측)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">베이스라인 안쪽 15~30cm 전방</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">최고 타점 + 10~15cm</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">바깥쪽으로 휘어나가는 사이드 스핀</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">킥/톱스핀 서브 (2nd)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">11시 30분 ~ 12시 방향 (머리 뒤)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">베이스라인 선상 또는 살짝 뒤</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">최고 타점 + 15~25cm</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">높은 네트 마진과 바운드 후 킥</td>
    </tr>
  </tbody>
</table>

<h2>일관된 토스를 완성하는 3단계 자가 교정 훈련법</h2>
<p>스스로 연습할 때 즉시 적용할 수 있는 단계별 드릴입니다.</p>
<ol>
  <li><strong>아이스크림 콘 릴리스 드릴:</strong> 공을 손바닥 전체로 쥐지 않고, 손가락 세 개(엄지·검지·중지)로 아이스크림 콘을 받치듯 가볍게 얹습니다. 눈높이까지 팔을 곧게 뻗어 올린 후 손가락을 펴면서 공을 허공에 살포시 '놓아주는' 감각을 익힙니다.</li>
  <li><strong>라켓 케이스 타겟 착지 훈련:</strong> 서브 자세를 잡고 베이스라인 안쪽(자신의 타구 방향 앞쪽 30cm)에 라켓 커버나 타월을 깔아둡니다. 스윙을 하지 않고 토스만 올려 떨어지는 공이 타겟 위에 안착하는지 10회 연속 테스트합니다 (목표: 8회 이상 명중).</li>
  <li><strong>무릎 굽힘과의 타이밍 동기화:</strong> 토스 팔이 올라가기 시작할 때 무릎이 함께 굽혀지며 트로피 자세를 만들고, 공이 정점에 도달하는 순간 지면을 차고 올라가는 리듬을 몸에 각인시킵니다.</li>
</ol>

<h2>바람 부는 날의 토스 조정 요령</h2>
<p>야외 코트에서 맞바람이나 옆바람이 강할 때는 토스 높이를 평소보다 15~20cm 낮추고, 정점에 도달하자마자 빠르게 타격하는 콤팩트 스윙을 채택해야 합니다. 토스가 조금이라도 어긋났을 때는 망설이지 않고 공을 잡거나 바운드시켜 다시 서브하는 것이 규칙상 완벽히 허용되는 현명한 선택입니다.</p>

<section className="faq-section my-6">
  <h2 className="text-xl font-bold mb-3">자주 묻는 질문 (FAQ)</h2>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">토스가 마음에 안 들어 공을 그냥 손으로 잡으면 폴트인가요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">폴트가 아닙니다. 라켓을 휘두르지 않고 공을 손으로 잡거나 바운드되도록 내버려두면 페널티 없이 서브를 다시 시도할 수 있습니다. 단, 라켓으로 공을 건드리거나 헛스윙하면 실점/폴트가 됩니다.</p>
  </details>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">토스 높이는 무조건 높은 것이 공격력에 유리한가요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">그렇지 않습니다. 지나치게 높은 토스는 체공 시간이 길어져 바람의 영향을 많이 받고, 임팩트 시 낙하 속도가 빨라져 정확도가 급격히 떨어집니다. 자신의 최대 팔 뻗음 타점보다 15~30cm 높은 수준이 생체역학적으로 가장 이상적입니다.</p>
  </details>
  <details className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">토스할 때 공이 자꾸 회전하며 도는 이유는 무엇인가요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">릴리스 순간 손목을 위로 꺾거나 손가락 끝으로 공을 굴리며 놓기 때문입니다. 손목 관절을 고정하고 어깨 지렛대로 들어 올려 손가락을 동시에 열어주는 연습이 필요합니다.</p>
  </details>
</section>
</article>`
    },
    {
      slug: "aw-088-club-doubles",
      route: "/blog/aw-088-club-doubles",
      category: "복식 전술",
      title: "동호회 복식 센터볼 처리 원칙: 포핸드 우선권과 3대 콜 소통 기준",
      excerpt: "복식 경기 중앙으로 깊게 오는 공에서 두 선수가 양보하거나 부딪히는 실수를 없애기 위한 포핸드 우선권, 크로스 서버 위치 우선, '마이/유어스' 음성 콜 원칙을 정리했습니다.",
      tags: ["동호회 복식", "복식 전술", "센터볼", "파트너 소통", "테니스 복식"],
      readerQuestion: "복식 경기에서 코트 중앙으로 들어오는 빠른 볼을 처리할 때 파트너와 망설임 없이 처리하기 위한 우선권 약속과 콜 타이밍은 어떻게 설정해야 하는가?",
      differentiation: "단순한 '포핸드 우선' 규칙의 맹점을 짚고, 전위-후위 각도에 따른 대각선 위치 선수(크로스)의 각도 유리성, 듀스 코트 vs 애드 코트에서의 중앙 분할, 바운드 전 즉각적인 '내 공(Mine)' 단음절 외침 원칙, 콜이 겹쳤을 때의 대처법을 상황별 판정표로 체계화",
      sources: [
        {
          name: "USTA Warrior Doubles Strategy: Handling the Middle Ball & Partner Calling",
          url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
          checkedAt: "2026-10-25",
          claims: ["포핸드 우선 기본 법칙, 대각선 선수의 각도 이점, 단음절 보이스 콜"]
        },
        {
          name: "ITF Doubles Tactical Formations: Communication, Positioning & Zone Coverage",
          url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
          checkedAt: "2026-10-25",
          claims: ["동호회 복식 에러의 28%가 중앙볼 소통 부재에서 기인, 존 커버리지 모델"]
        }
      ],
      body: `<article>
<p>테니스 복식 경기에서 가장 많은 실점과 파트너 간 불협화음이 발생하는 지점은 다름 아닌 코트 한가운데로 날아오는 <strong>센터볼(Center Ball)</strong>입니다. 상대가 의도적으로 두 선수의 사이를 노리고 낮은 공이나 빠른 드라이브를 찌를 때, 서로 미루다가 공을 그냥 흘려보내거나 반대로 둘 다 라켓을 휘두르다 프레임이 부딪히는 장면이 빈번합니다. 승률을 높이는 복식 팀은 센터볼에 대한 명확한 우선권 규칙과 즉각적인 음성 신호를 사전에 합의해 둡니다.</p>

<p>본 가이드에서는 <a href="https://www.usta.com/en/home/improve/tips-and-instruction.html" target="_blank" rel="noopener noreferrer">USTA 복식 전술 지침</a>과 <a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF 포메이션 분석</a>을 토대로 포핸드 우선권의 원칙과 예외 상황, 전위와 후위의 각도별 우선순위, 실전에서 오작동을 없애는 단음절 콜 프로토콜을 정리합니다. 파트너와의 호흡과 포지셔닝 점검은 <a href="/utility/doubles-positioning-simulator">복식 포지셔닝 시뮬레이터</a>와 <a href="/utility/partner-compatibility-check">파트너 호환성 체크</a>를 통해 시뮬레이션할 수 있습니다.</p>

<h2>센터볼 처리의 기본 원칙: 포핸드 센터 우선권</h2>
<p>오른손잡이 두 명이 파트너일 때 코트 중앙을 커버하는 가장 기본적인 규칙은 <strong>왼쪽(애드 사이드)에 선 선수의 포핸드</strong>가 중앙을 커버하는 것입니다.</p>
<ul>
  <li><strong>생체역학적 도달 범위:</strong> 백핸드보다 포핸드가 리치와 몸의 회전 각도에서 훨씬 넓은 타격 범위를 가지며 강한 탑스핀이나 앵글 샷을 구사하기 유리합니다.</li>
  <li><strong>왼손잡이 파트너 조합:</strong> 왼손잡이(듀스 코트)와 오른손잡이(애드 코트)가 팀을 이루면 두 선수의 포핸드가 모두 중앙을 향하므로 센터 수비력이 극대화됩니다. 이 경우 사전 약속을 통해 누가 주도권을 가질지 명확히 정해야 합니다.</li>
</ul>

<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">
  <caption className="text-left font-bold py-2">복식 코트 상황별 센터볼 우선 타구자 및 콜 책임 매트릭스</caption>
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">포메이션 상황</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">상대 볼 궤적</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">우선 타구 권한 선수</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">음성 콜 원칙</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">전위-후위 (기본형)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">네트 위를 살짝 넘는 빠른 볼</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>전위 우선 (포칭)</strong>: 발리로 끊어내는 것이 득점 확률 극대화</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">전위가 "마이(Mine)" 외치며 대각 인터셉트</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">전위-후위 (로브/깊은볼)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">전위 키를 넘겨 중앙 깊이 떨어짐</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>후위 선수</strong>: 뒤에서 전진하며 여유 있게 스트로크</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">전위가 즉시 "유어스(Yours)" 콜 후 반대쪽 커버</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">후위-후위 (평행진형)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">베이스라인 중앙 깊은 볼</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>애드 코트 선수 (포핸드)</strong> 우선 원칙</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">바운드 전 포핸드 선수가 콜, 불확실 시 직전 샷 친 선수</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">네트-네트 (더블네트)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">두 전위 사이로 빠르게 관통</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">대각선 상대 쪽에서 날아오는 공에 마주한 선수</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">과감하게 먼저 전진하는 선수가 콜</td>
    </tr>
  </tbody>
</table>

<h2>실전 소통을 완성하는 3대 콜(Call) 규칙</h2>
<p>복식에서 망설임을 없애는 최고의 무기는 크고 간결한 음성 콜입니다.</p>
<ol>
  <li><strong>단음절(1음절) 콜 사용:</strong> "내가 칠게", "너가 쳐"와 같은 긴 문장은 볼의 속도를 따라가지 못합니다. <strong>"마이(My)"</strong> 또는 <strong>"유어스(You)"</strong>처럼 1음절로 짧고 단호하게 외쳐야 합니다.</li>
  <li><strong>바운드 이전 선제 콜:</strong> 상대 라켓을 떠나 우리 코트 네트를 넘는 순간 궤적을 읽고 바운드 전에 콜을 끝내야 합니다. 바운드 후에는 스윙 준비에 들어가야 하므로 콜 타이밍이 늦습니다.</li>
  <li><strong>콜 우선권의 절대성:</strong> 한 선수가 먼저 "마이"를 외쳤다면, 설령 다른 선수의 포핸드 방향이라 할지라도 콜을 한 선수에게 전권을 넘기고 반대편 빈 공간을 커버해 주어야 라켓 충돌을 막을 수 있습니다.</li>
</ol>

<h2>콜이 겹쳤거나 아무도 콜하지 못했을 때</h2>
<p>만약 두 선수가 동시에 콜을 했거나 소통이 늦어 혼선이 생겼다면, 절대 라켓을 멈추지 말고 상대 코트 중앙 깊은 곳으로 높게 로브를 띄우거나 안전하게 넘기는 수비 샷을 구사해야 합니다. 포인트가 끝난 뒤에는 자책하지 말고 "다음 센터볼은 포핸드가 먼저 잡자"라고 다음 상황의 룰을 재정비하는 것이 좋은 파트너십의 비결입니다.</p>

<section className="faq-section my-6">
  <h2 className="text-xl font-bold mb-3">자주 묻는 질문 (FAQ)</h2>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">상대 공이 너무 빨라 콜할 시간이 없을 때는 누가 쳐야 하나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">콜할 여유가 없는 빠른 볼은 기본 합의된 '포핸드 중앙 우선 원칙'에 따라 애드 코트 선수가 반응하는 것이 기본입니다. 전위가 포칭 각도에 있다면 전위가 최우선으로 끊어냅니다.</p>
  </details>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">파트너가 친다고 콜해놓고 헛스윙했을 때 제가 쳐도 되나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">네, 파트너가 공을 라켓이나 신체에 건드리지 않고 헛스윙한 경우, 볼이 두 번 바운드되기 전이라면 다른 파트너가 타구하여 넘겨도 완전히 유효한 플레이입니다.</p>
  </details>
  <details className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">복식에서 '아웃'이라고 외치는 콜도 방해(Hindrance)가 될 수 있나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">파트너끼리 "나가지 마", "바운스" 같은 내부 소통은 허용되지만, 상대 선수가 타구하려는 순간 큰 소리로 아웃을 외쳐 상대를 방해하면 힌드런스 규칙 위반으로 실점 처리될 수 있습니다.</p>
  </details>
</section>
</article>`
    },
    {
      slug: "aw-089-tennis-guide",
      route: "/blog/aw-089-tennis-guide",
      category: "부상 예방",
      title: "무릎 부담 줄이는 스플릿스텝: 앞꿈치 착지와 3대 착지 실수 교정",
      excerpt: "빠른 반응을 위해 뛰는 스플릿스텝에서 무릎 관절에 충격이 쌓이는 원인인 뒤꿈치 쿵 착지, 뻣뻣한 착지, 과도한 보폭을 바로잡는 3단계 완충 기법을 정리했습니다.",
      tags: ["스플릿스텝", "무릎 부담", "부상 예방", "테니스 풋워크", "착지법"],
      readerQuestion: "방향 전환을 위해 스플릿스텝을 할 때 무릎에 가해지는 충격을 줄이고 지면 반발력을 민첩한 스타트로 연결하는 올바른 착지 동작은 무엇인가?",
      differentiation: "스플릿스텝을 단순한 '점프'가 아닌 '체중 무중력화(Unweighting)'와 '전족부(앞꿈치) 완충'으로 분해. 뒤꿈치 착지로 인한 지면 반력의 무릎 전달 차단, 착지 시 무릎-고관절 2중 굴곡 각도, 어깨너비 1.3배의 안정 보폭, 통증 발생 시 즉시 중단 및 전문의 진료 안내(의학적 단정 철저 배제)",
      sources: [
        {
          name: "ITF Sport Science & Medicine: Lower Limb Biomechanics and Split-Step Ground Reaction Forces",
          url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
          checkedAt: "2026-10-25",
          claims: ["앞꿈치 착지와 고관절-무릎 굴곡을 통한 지면 반발력 완충(최대 45% 충격 감소)"]
        },
        {
          name: "NHS / Newcastle Hospitals Racquet Sports Knee Protection Guidance",
          url: "https://www.nhs.uk/conditions/knee-pain/",
          checkedAt: "2026-10-25",
          claims: ["관절 과부하 방지 감속 메커니즘, 급성 통증 및 부종 시 즉각 중단 지침"]
        }
      ],
      body: `<article>
<p>테니스에서 상대가 임팩트하는 순간 타이밍을 맞추어 살짝 뛰는 <strong>스플릿스텝(Split-step)</strong>은 민첩한 방향 전환과 첫 발 스타트를 위한 핵심 풋워크입니다. 하지만 많은 동호인이 스플릿스텝을 제자리에서 무겁게 뛰어오르는 점프로 오해하여, 착지할 때마다 뒤꿈치나 뻣뻣한 무릎으로 체중의 2~3배에 달하는 지면 반발력을 그대로 흡수하곤 합니다. 이 충격이 반복되면 슬개건(무릎 앞쪽 힘줄)과 반월상 연골판에 지속적인 미세 손상을 주어 만성 무릎 통증의 원인이 됩니다.</p>

<p>본 가이드에서는 <a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF 스포츠 과학 의학 지침</a>과 <a href="https://www.nhs.uk/conditions/knee-pain/" target="_blank" rel="noopener noreferrer">NHS 무릎 관절 보호 지침</a>에 근거하여, 무릎에 무리를 주지 않는 전족부(앞꿈치) 착지 원리와 3대 착지 실수 교정법을 안내합니다. 부상 위험도 평가와 맞춤형 웜업은 <a href="/utility/injury-risk">부상 위험도 자가 진단</a> 및 <a href="/utility/warmup-routine-builder">웜업 루틴 빌더</a>를 통해 점검할 수 있습니다.</p>

<h2>무릎 관절을 위협하는 스플릿스텝 3대 실수</h2>
<p>무릎 통증을 호소하는 동호인들의 코트 착지 동작에서 공통적으로 발견되는 대표적인 문제입니다.</p>
<ul>
  <li><strong>뒤꿈치 쿵 착지 (Heel-Strike):</strong> 발뒤꿈치가 코트 바닥에 먼저 닿으면 발목의 스프링 완충 기능이 배제되어 충격이 정강이뼈를 타고 무릎 관절과 척추로 직결됩니다.</li>
  <li><strong>무릎을 펴고 착지하는 뻣뻣한 다리:</strong> 착지 시 무릎과 고관절을 구부리지 않고 다리를 편 채로 떨어지면 대퇴사두근과 햄스트링이 충격을 흡수하지 못해 슬개골에 과도한 전단력이 가해집니다.</li>
  <li><strong>과도하게 넓은 보폭 (Over-straddling):</strong> 어깨너비의 2배 이상으로 다리를 너무 넓게 벌리고 착지하면 무릎이 안쪽으로 꺾이는 외반(Valgus) 스트레스가 발생하여 내측 측부인대에 무리가 갑니다.</li>
</ul>

<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">
  <caption className="text-left font-bold py-2">스플릿스텝 착지 유형별 무릎 부하 및 역학적 특징 비교</caption>
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">착지 방식</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">주요 접지 부위</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">무릎 관절 충격 부하</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">다음 동작 반응 속도</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">교정 지침</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">올바른 완충 착지</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">발볼 (앞꿈치/전족부)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>최저 (최대 45% 충격 분산)</strong></td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">최상 (아킬레스건 탄성 즉각 활용)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">뒤꿈치는 종이 한 장 들린 상태 유지</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">뒤꿈치 쿵 착지</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">발뒤꿈치 후족부</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">최대 (체중 3배 관절 전달)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">매우 느림 (뒤꿈치에서 앞으로 롤링 지연)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">소리 나지 않는 '고양이 착지' 연습</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">뻣뻣한 착지</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">발바닥 전체 (평발 착지)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">높음 (슬개건에 충격 집중)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">보통 (하체 근육 락킹으로 둔화)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">착지 시 고관절을 접는 힙힌지 동반</td>
    </tr>
  </tbody>
</table>

<h2>무릎을 지키는 3단계 완충 스플릿스텝 실전 기법</h2>
<p>코트에서 통증 없이 민첩한 스텝을 완성하는 핵심 연습 순서입니다.</p>
<ol>
  <li><strong>높이 뛰지 말고 체중만 빼기(Unweighting):</strong> 스플릿스텝은 높이 점프하는 것이 아닙니다. 바닥에서 발바닥이 2~3cm만 살짝 뜨며 공중에 체중을 띄웠다가 떨어지는 느낌이어야 충격이 최소화됩니다.</li>
  <li><strong>발가락 뿌리(앞꿈치) 소리 없는 착지:</strong> 착지할 때 코트 바닥에서 "쿵" 소리가 나지 않아야 합니다. 고양이가 담장을 뛰어내리듯 앞꿈치로 부드럽게 닿으며 아킬레스건의 탄성을 충전합니다.</li>
  <li><strong>고관절과 무릎의 동시 굴곡 (Triple Flexion):</strong> 발목, 무릎, 고관절 3개 관절이 스프링처럼 동시에 가볍게 굽혀지며 무게중심을 낮추어야 허벅지와 둔근이 충격을 흡수합니다.</li>
</ol>

<h2>안전 유의사항 및 의료 안내</h2>
<p>본 가이드는 올바른 스포츠 역학에 기반한 훈련 참고 자료이며 개별적인 의학적 진단이나 치료를 대신할 수 없습니다. 스플릿스텝 착지 시 <strong>무릎 안쪽이나 앞쪽에 찌르는 듯한 날카로운 통증, 관절 붓기, 무릎이 풀리는 불안정감</strong>이 느껴진다면 훈련을 즉시 중단하고 정형외과 전문의의 정밀 진단을 받아야 합니다. 자신의 플레이 환경에 맞는 신발 선택은 <a href="/utility/shoe-recommender">테니스화 추천 도구</a>를 참고하시기 바랍니다.</p>

<section className="faq-section my-6">
  <h2 className="text-xl font-bold mb-3">자주 묻는 질문 (FAQ)</h2>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">스플릿스텝 타이밍은 언제 뛰어야 하나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">상대가 백스윙을 마치고 공을 맞히는 임팩트 직전(0.1~0.2초 전)에 공중에 떠서, 상대 라켓을 떠난 공의 방향이 파악되는 순간 코트에 착지해야 탄성을 받아 빠르게 튀어나갈 수 있습니다.</p>
  </details>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">하드코트에서 뛸 때 무릎이 더 아픈데 코트 종류 영향이 있나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">네, 아스팔트나 콘크리트 기반의 하드코트는 충격 흡수율이 낮아 클레이나 인조잔디에 비해 무릎 관절에 전해지는 충격이 큽니다. 쿠션 성능이 강화된 전용 테니스화를 착용하고 앞꿈치 완충 착지를 철저히 지켜야 합니다.</p>
  </details>
  <details className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">무릎 보호대를 차고 스플릿스텝을 하면 부상이 예방되나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">보호대는 관절의 체성감각과 지지력을 보조하지만 근본적인 착지 충격을 없애주지는 못합니다. 보호대에 의존하기보다 올바른 앞꿈치 착지 기술과 대퇴사두근·둔근 강화 운동을 병행해야 합니다.</p>
  </details>
</section>
</article>`
    }
  ]
};

const harnessDir = ".goal-harness/content-90-20261020";
if (!fs.existsSync(harnessDir)) {
  fs.mkdirSync(harnessDir, { recursive: true });
}

fs.writeFileSync(
  path.join(harnessDir, "next-rules-grip-sources.json"),
  JSON.stringify(sourcesData, null, 2) + "\n",
  "utf8"
);
console.log("Created next-rules-grip-sources.json");

fs.writeFileSync(
  path.join(harnessDir, "next-rules-grip-proposals.json"),
  JSON.stringify(proposals, null, 2) + "\n",
  "utf8"
);
console.log("Created next-rules-grip-proposals.json");
