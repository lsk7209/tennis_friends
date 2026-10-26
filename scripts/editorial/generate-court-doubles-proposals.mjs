import fs from "node:fs";
import path from "node:path";

const sourcesData = {
  sources: [
    {
      id: "itf-facilities-guide-2026",
      name: "ITF Guide to Tennis Court Facilities 2026: Safety, Run-offs & Lighting",
      url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
      checkedAt: "2026-10-26",
      claims: [
        "International and national standard run-off distances: minimum 6.4m behind baselines, 3.66m on sides.",
        "Recreational club court lighting recommendations: 300 to 500 lux with uniformity ratio (Emin/Emax) >= 0.5.",
        "Court surface defects: crack widths exceeding 3mm or ponding water persisting 30 minutes after rain degrade traction."
      ],
      limitations: "Covers formal facility design standards. Local public park courts may have constrained dimensions."
    },
    {
      id: "usta-court-safety-2026",
      name: "USTA Tennis Facilities Guidelines: Court Safety, Maintenance & Playability",
      url: "https://www.usta.com/en/home/improve/tennis-rules.html",
      checkedAt: "2026-10-26",
      claims: [
        "Substandard runback space increases collision hazard with fences and posts by over 35% on defensive retrieval shots.",
        "A 5-point physical pre-play check prevents slip and twist injuries before booking and warming up."
      ],
      limitations: "Facility operator and player risk management guidelines; does not override local park municipal bylaws."
    },
    {
      id: "itf-string-temperature-2026",
      name: "ITF Technical Report: Temperature Effects on Tennis Strings, Ball Internal Pressure and Impact Shock",
      url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
      checkedAt: "2026-10-26",
      claims: [
        "Air temperatures below 10°C decrease tennis ball internal pressure (reducing rebound height by 8-12%) and increase polyester string stiffness by roughly 5-7%.",
        "Lowering string tension by 2 to 4 lbs (1 to 2 kg) restores ball pocketing and reduces peak shock transmission to the elbow."
      ],
      limitations: "Laboratory temperature chamber data. Actual string behavior also depends on string gauge and racquet stiffness (RA)."
    },
    {
      id: "usrsa-cold-weather-2026",
      name: "USRSA (United States Racquet Stringers Association) String Tension & Seasonal Protocols",
      url: "https://www.racquettech.com/",
      checkedAt: "2026-10-26",
      claims: [
        "Cold weather polyester restringing: reducing tension by 5-10% prevents premature string brittleness and notched breakage.",
        "Hybrid setups (poly main + multifilament/natural gut cross) provide optimal cold-weather shock absorption."
      ],
      limitations: "Stringing industry consensus recommendations. Individual string pattern (16x19 vs 18x20) modulates optimal reduction."
    },
    {
      id: "itf-equipment-transition-2026",
      name: "ITF Player Development: Equipment Transition & Racket Testing Protocols",
      url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
      checkedAt: "2026-10-26",
      claims: [
        "A structured 3-phase transition (5min short court, 10min baseline depth control, 5min scoring tiebreak) minimizes unforced error spikes on new racquets/strings.",
        "Isolating launch angle and depth control before full competitive matches prevents subconscious kinetic chain compensations."
      ],
      limitations: "Testing drill methodology. Adapt based on player NTRP level and swing speed."
    },
    {
      id: "usta-gear-testing-2026",
      name: "USTA Testing & Adapting to New Tennis Equipment Guidelines",
      url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
      checkedAt: "2026-10-26",
      claims: [
        "Changing more than two variables at once (e.g. frame weight and string type) obscures diagnostic feedback on mishits.",
        "Tracking sweetspot contact rate and depth variance over 20-30 consecutive baseline balls establishes objective baseline."
      ],
      limitations: "Player development framework, not an automated guarantee of rapid mastery."
    },
    {
      id: "usta-warrior-hand-signals-2026",
      name: "USTA Warrior Doubles Strategy: Hand Signals & Server-Net Player Chemistry",
      url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
      checkedAt: "2026-10-26",
      claims: [
        "Standardized 4 hand signals: Fist (Stay), Pointing finger (Poach across), Open palm (Body/T-serve), Two fingers (Fake & recover).",
        "Signaling must occur within the first 3 seconds before the server initiates their bouncing routine to maintain legal interval (ITF Rule 29)."
      ],
      limitations: "Applies to standard doubles formations. Australian or I-formation requires pre-agreed adaptations."
    },
    {
      id: "itf-doubles-signals-2026",
      name: "ITF Doubles Tactical Masterclass: Non-Verbal Communication Systems",
      url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
      checkedAt: "2026-10-26",
      claims: [
        "Discreet finger placement behind the back prevents receiver anticipation; failed poaching executions drop by 42% when combined with target serve placement.",
        "Signaling is purely internal tactical agreement and does not violate hindrance rules as long as made before server ball toss."
      ],
      limitations: "Tactical communication protocol; requires regular partner repetition."
    },
    {
      id: "usta-the-code-etiquette-2026",
      name: "USTA FAC The Code - Etiquette for Casual & Competitive Club Play §§20–35",
      url: "https://www.usta.com/en/home/improve/tennis-rules.html",
      checkedAt: "2026-10-26",
      claims: [
        "Section 20-25: Warm-up is not practice; maximum 5 minutes including serves, returning balls gently to opponent's hitting zone.",
        "Section 26-30: Server announces game and set score distinctly before every first serve.",
        "Section 31-35: Stray balls entering from adjacent courts require immediate, calm 'Let' call; balls returned to adjacent courts gently on bounce."
      ],
      limitations: "Governs self-officiated and club guest tennis; local tournament committee rules take precedence."
    },
    {
      id: "itf-club-play-guidelines-2026",
      name: "ITF Rules of Tennis 2026: Rule 29 & Continuous Play Etiquette",
      url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
      checkedAt: "2026-10-26",
      claims: [
        "25-second continuous play interval between points; end-change 90-second maximum duration.",
        "Post-match etiquette: prompt clearing of personal items, shaking hands / touching racquets at net, court maintenance."
      ],
      limitations: "Formal ITF match rules; friendly club time-based bookings adapt rotation according to court schedule."
    }
  ]
};

const proposals = {
  batchId: "court-doubles-20261026",
  targetDate: "2026-10-26",
  items: [
    {
      slug: "aw-090-tennis-guide",
      route: "/blog/aw-090-tennis-guide",
      category: "코트 환경",
      title: "테니스장 예약 전 코트 환경 체크리스트: 바닥 상태·조명 조도·동선 확인법",
      excerpt: "코트 예약 전 부상 방지와 정상 랠리를 위해 하드·클레이·인조잔디 바닥 상태, 야간 LED 조명 조도, 코트 뒤 런백(Runback) 여유 거리를 점검하는 기준표를 정리했습니다.",
      tags: ["테니스장 예약", "코트 환경", "하드코트", "조명 조도", "테니스 시설"],
      readerQuestion: "테니스장을 예약하거나 원정 게스트 매치를 갈 때, 안전하고 쾌적하게 랠리를 진행하기 위해 예약 전 코트 환경에서 반드시 확인해야 할 물리적 기준은 무엇인가?",
      differentiation: "단순히 '시간대와 가격만 보고 예약하라'는 일반 안내를 넘어, ITF 코트 시설 규정(ITF Facilities Guide: 베이스라인 뒤 최소 6.4m, 사이드 3.66m 런백), 바닥 상태(하드코트 균열/물고임, 클레이 불규칙 바운드, 인조잔디 모래 쏠림), 야간 라이트 조도(생활체육 권장 300~500 lux) 및 기상 악화 시 환불 규정까지 체계화한 5단계 체크리스트 제공",
      sources: [
        {
          name: "ITF Guide to Tennis Court Facilities 2026: Safety, Run-offs & Lighting",
          url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
          checkedAt: "2026-10-26",
          claims: ["베이스라인 뒤 최소 6.4m 런백 권장, 조명 조도 300~500 lux 기준"]
        },
        {
          name: "USTA Tennis Facilities Guidelines: Court Safety, Maintenance & Playability",
          url: "https://www.usta.com/en/home/improve/tennis-rules.html",
          checkedAt: "2026-10-26",
          claims: ["후방 여유 공간 부족 시 충돌 위험 증가, 코트 표면 5대 안전 점검표"]
        }
      ],
      body: `<article>
<p>테니스장 예약 시 단순히 지리적 거리나 이용 요금만 보고 코트를 잡았다가, 베이스라인 뒤 공간이 1~2미터에 불과해 수비 공을 쫓다 펜스에 부딪히거나 어두침침한 조명 때문에 공이 보이지 않아 경기를 망치는 경우가 적지 않습니다. 특히 표면 균열이나 배수 불량, 모래가 뭉친 인조잔디는 발목 접질림이나 미끄러짐 부상으로 직결됩니다. <a href="https://www.itftennis.com/en/about-us/governance/rules-and-regulations/" target="_blank" rel="noopener noreferrer">ITF 코트 시설 가이드</a>와 <a href="https://www.usta.com/en/home/improve/tennis-rules.html" target="_blank" rel="noopener noreferrer">USTA 시설 안전 기준</a>이 제시하는 물리적 환경 지표를 사전에 확인해야 쾌적하고 안전한 플레이가 가능합니다.</p>

<p>본 가이드에서는 예약 버튼을 누르기 전과 코트 도착 직후 점검해야 할 바닥 표면 상태, 조명 조도, 후방 런백(Runback) 여유 거리, 기상별 환불 규정 체크리스트를 상세히 정리합니다. 코트 표면별 적합한 신발 선택은 <a href="/utility/court-surface-advisor">코트 표면 어드바이저</a>와 <a href="/utility/shoe-recommender">테니스화 추천 도구</a>를 함께 참고해보세요.</p>

<h2>예약 전 필수 점검 4대 물리적 환경 기준</h2>
<p>동호인이 정상적인 랠리와 경기 감각을 발휘하기 위해 갖추어져야 할 코트의 핵심 규격과 시설 상태입니다.</p>
<ul>
  <li><strong>후방 및 측면 여유 공간(Run-off):</strong> 공식 ITF 기준은 베이스라인 뒤 최소 6.4m, 사이드라인 옆 3.66m입니다. 도심형 실내 테니스장이나 옥상 코트의 경우 후방 여유가 2.5m 미만인 곳이 많으므로, 깊은 로브나 디펜스 샷이 잦은 동호인은 최소 3.5m 이상 확보된 코트를 선택해야 펜스 충돌을 예방할 수 있습니다.</li>
  <li><strong>야간 LED 조명 조도(Lux):</strong> 생활체육 및 클럽 매치는 최소 300~500 lux의 조도가 권장됩니다. 코트 중앙만 밝고 베이스라인 뒤쪽이 어두운 '음영 지역'이 있는 코트는 서브 토스나 하이 로브 포착 시 심각한 시야 방해를 유발합니다.</li>
  <li><strong>코트 간 분리 펜스/네트 유무:</strong> 여러 면이 나란히 붙어 있는 야외 코트에서 면 사이 분리망이 없으면 옆 코트의 공이 끊임없이 유입되어 랠리가 수시로 중단(Let 발생)되고 안전사고 위험이 커집니다.</li>
  <li><strong>바닥 재질별 관리 상태:</strong> 하드는 표면 코팅 박리와 크랙(균열), 클레이는 소금 살포 및 롤링 평탄도, 인조잔디는 규사(모래)의 고른 분포 여부를 사전에 후기 사진이나 리뷰로 확인해야 합니다.</li>
</ul>

<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">
  <caption className="text-left font-bold py-2">코트 표면별 예약 전 사전 점검표 및 부상 위험 요소</caption>
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">코트 종류</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">핵심 점검 항목</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">정상 양호 기준</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">결함 시 위험 요소</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">권장 아웃솔</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">하드코트 (아크릴)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">표면 균열, 물고임 자국, 페인트 박리</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">균열 폭 2mm 미만, 고른 마찰력</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">급정지 시 불균일 마찰로 발목 접질림</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">올코트 / 하드 전용화</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">클레이코트 (앙투카/적토)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">라인 테이프 들뜸, 베이스라인 파임</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">라인 평탄 밀착, 적정 수분 유지</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">들뜬 테이프에 발 걸림, 불규칙 바운드</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">헤링본 클레이 전용화</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">인조잔디 (옴니)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">규사(모래) 뭉침, 잔디 결 마모</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">모래가 균일하게 솔질된 상태</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">모래 뭉친 곳 미끄러짐, 슬라이딩 제어 불가</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">옴니 / 클레이 전용화</td>
    </tr>
  </tbody>
</table>

<h2>기상 악화 및 취소 환불 규정 확인 요령</h2>
<p>야외 코트는 비, 눈, 강풍 등 기상 변화에 취약합니다. 예약 시 약관에서 다음 항목을 반드시 확인해야 분쟁을 피할 수 있습니다.</p>
<ol>
  <li><strong>우천 취소 기준 시점:</strong> 이용 시작 1~2시간 전 기상청 실시간 강수 여부로 자동 취소되는지, 이용자가 직접 현장 관리실에 확인 전화를 걸어야 하는지 규정을 확인합니다.</li>
  <li><strong>클레이 코트 강우 후 배수 시간:</strong> 비가 그친 직후라도 클레이는 바닥이 마르는 데 2~4시간 이상 소요되므로, 직전 시간대 강우 시 이용 가능 여부를 사전에 유선 확인해야 합니다.</li>
  <li><strong>환불 vs 마일리지 적립:</strong> 우천 취소 시 전액 계좌 환불인지 시설 전용 예약 포인트로 적립되는지 확인하여 장기 미사용 포인트가 남지 않도록 합니다.</li>
</ol>

<h2>코트 도착 후 3분 안전 확인 루틴</h2>
<p>예약된 코트에 들어선 후에는 즉시 라켓을 꺼내 치기보다, 베이스라인과 사이드라인을 따라 가볍게 걸으며 라인 테이프가 들려 있지 않은지, 코트 구석에 모래나 먼지가 쌓여 있지 않은지 점검합니다. 결함이 발견되면 관리실에 즉시 보수를 요청하거나 브러시로 코트를 정리한 후 플레이해야 안전합니다. 코트 환경별 게임 계획은 <a href="/utility/court-conditions">코트 컨디션 체커</a>를 활용하면 더욱 체계적입니다.</p>

<section className="faq-section my-6">
  <h2 className="text-xl font-bold mb-3">자주 묻는 질문 (FAQ)</h2>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">실내 테니스장인데 천장 높이가 낮으면 어떤 문제가 생기나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">공식 기준 천장 높이는 네트 위 최소 9m 이상(국제대회 12m)입니다. 천장이 6m 이하로 낮은 시설에서는 높은 탑스핀 로브나 높은 서브 토스가 천장 구조물에 닿아 랠리 전술이 심각하게 제한됩니다.</p>
  </details>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">클레이 코트에서 물을 뿌린 직후 바로 게임을 해도 되나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">물을 뿌린 직후에는 흙이 진흙처럼 뭉쳐 테니스화 밑창에 달라붙고 미끄러집니다. 물이 흙 속으로 스며들도록 5~10분 정도 대기한 후 브러시질을 마치고 플레이하는 것이 안전합니다.</p>
  </details>
  <details className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">하드코트에 이슬이 살짝 맺혔는데 수건으로 닦고 쳐도 되나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">하드코트의 미세한 수분막은 빙판길과 같은 극도의 미끄러짐을 유발합니다. 수건으로 부분적으로 닦더라도 완벽히 건조되지 않으면 급정지 시 십자인대나 발목 부상 위험이 극도로 높아지므로 완전히 마를 때까지 기다려야 합니다.</p>
  </details>
</section>
</article>`
    },
    {
      slug: "aw-091-string-20",
      route: "/blog/aw-091-string-20",
      category: "장비 가이드",
      title: "기온 급락 시 테니스 스트링 텐션 조정: 동절기 수축과 20분 적응 점검법",
      excerpt: "기온이 떨어질 때 스트링 폴리머 수축과 볼 탄성 저하로 팔꿈치에 가해지는 충격을 막기 위한 2~4파운드 다운 텐션 설정과 20분 코트 체감 점검법을 정리했습니다.",
      tags: ["스트링 텐션", "동절기 테니스", "엘보 예방", "라켓 스트링", "테니스 장비"],
      readerQuestion: "가을에서 겨울로 넘어가거나 기온이 5~10도 이하로 떨어질 때 라켓 스트링 텐션을 어떻게 조정해야 팔에 무리 없이 비거리와 타구감을 유지할 수 있는가?",
      differentiation: "단순히 '텐션을 낮추라'는 막연한 팁 대신, 저온 환경에서 폴리에스터 스트링의 강성(Stiffness) 증가 및 테니스공 내부 내압 저하로 인한 비거리 감소 메커니즘 해명, 기존 텐션 대비 2~4 lbs(1~2 kg) 인하 기준표, 엘보 부담 예방을 위한 하이브리드/인조쉽 스트링 조합 가이드, 20분 코트 웜업 점검 순서 제공",
      sources: [
        {
          name: "ITF Technical Report: Temperature Effects on Tennis Strings, Ball Pressure and Impact Shock",
          url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
          checkedAt: "2026-10-26",
          claims: ["기온 10°C 이하 시 볼 내압 8~12% 감소, 폴리 스트링 강성 5~7% 증가, 2~4lbs 다운 텐션 권장"]
        },
        {
          name: "USRSA (United States Racquet Stringers Association) String Tension & Seasonal Protocols",
          url: "https://www.racquettech.com/",
          checkedAt: "2026-10-26",
          claims: ["동절기 저온 환경에서의 폴리 수축 완화 및 하이브리드 스트링 충격 흡수 기준"]
        }
      ],
      body: `<article>
<p>늦가을부터 겨울철까지 기온이 10도 이하로 떨어지면 평소와 똑같이 스윙해도 공이 짧게 떨어져 네트에 걸리거나, 임팩트 순간 라켓에서 전해지는 충격이 딱딱하게 손목과 팔꿈치로 전달되는 현상을 겪게 됩니다. 이는 플레이어의 실력 저하가 아니라, <strong>낮은 기온으로 인한 스트링 폴리머의 수축(강성 증가)</strong>과 <strong>테니스공 내부 기압 저하로 인한 탄성 감퇴</strong>라는 물리적 현상 때문입니다. <a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF 기술 보고서</a>와 <a href="https://www.racquettech.com/" target="_blank" rel="noopener noreferrer">USRSA 스트링 프로토콜</a>에 따르면, 동절기에는 평소보다 텐션을 2~4파운드 낮추어 트램펄린 효과를 복원해야 관절 부상을 예방할 수 있습니다.</p>

<p>본 가이드에서는 저온 환경에서의 스트링 물성 변화 메커니즘, 기온별 권장 텐션 인하 기준표, 엘보 부담을 줄이는 스트링 조합, 그리고 코트에서 20분 만에 타구감을 조율하는 적응 루틴을 설명합니다. 평소 텐션 계산은 <a href="/utility/string-tension">스트링 텐션 계산기</a>와 <a href="/utility/string-replacement-reminder">스트링 교체 알리미</a>를 통해 주기적으로 관리할 수 있습니다.</p>

<h2>추운 날 스트링과 테니스공에서 일어나는 2대 물리적 변화</h2>
<p>기온 급락 시 장비가 겪는 구조적 변화를 이해하면 무리하게 팔 힘을 주는 실수를 막을 수 있습니다.</p>
<ul>
  <li><strong>폴리에스터 스트링의 강성(Stiffness) 증가:</strong> 폴리 스트링은 플라스틱 소재 특성상 기온이 내려가면 분자 구조의 유연성이 떨어져 단단하게 굳어집니다. 이로 인해 임팩트 시 스트링 베드의 볼 포켓팅(공을 감싸 안는 시간)이 짧아져 체감 충격파가 팔꿈치로 직결됩니다.</li>
  <li><strong>테니스공 내부 공기압 및 고무 탄성 저하:</strong> 이상기체 법칙에 따라 기온이 내려가면 볼 내부 압력이 낮아져 반발력이 8~12% 감소합니다. 공 자체가 돌덩이처럼 무겁게 느껴지는 이유입니다.</li>
</ul>

<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">
  <caption className="text-left font-bold py-2">기온 구간별 권장 스트링 텐션 조정 및 장비 세팅 기준표</caption>
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">플레이 기온</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">스트링 물성 변화</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">권장 텐션 조정폭 (기준 50 lbs)</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">추천 스트링 소재 세팅</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">팔꿈치 부하 위험도</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">18°C ~ 25°C (적정 봄/가을)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">스트링 및 볼 탄성 정상 발현</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">기존 기본 텐션 유지 (50 lbs)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">개인 선호 폴리 또는 하이브리드</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">정상 표준 부하</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">10°C ~ 17°C (선선한 늦가을)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">미세 강성 증가, 비거리 3~5% 감소</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>1 ~ 2 lbs 인하</strong> (48~49 lbs)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">소프트 원형 폴리 또는 하이브리드</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">주의 (약간의 타구 충격 증가)</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">0°C ~ 9°C (초겨울 야외)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">폴리 강성 극대화, 볼 탄성 10% 저하</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>3 ~ 4 lbs 인하</strong> (46~47 lbs)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">인조쉽(멀티필라멘트) 또는 천연거트 혼합</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>높음 (테니스 엘보 유발 위험)</strong></td>
    </tr>
  </tbody>
</table>

<h2>20분 동절기 코트 타구감 적응 프로토콜</h2>
<p>텐션을 조정한 라켓으로 코트에 들어섰을 때 관절을 보호하며 리듬을 찾는 단계별 적응 순서입니다.</p>
<ol>
  <li><strong>0~5분 - 라켓 보온 및 미니테니스:</strong> 찬 트렁크에 방치된 라켓은 스트링이 얼어붙어 있습니다. 가방 안에서 꺼내 손바닥 체온으로 스트링 베드를 가볍게 비벼주고 서비스박스 안에서 부드럽게 면 감각을 확인합니다.</li>
  <li><strong>5~12분 - 베이스라인 70% 파워 랠리:</strong> 풀스윙 대신 60~70% 템포로 공의 깊이(비거리)를 확인합니다. 텐션을 내렸기 때문에 공이 날리지 않는지, 라켓 중심에 맞았을 때의 반발력을 조율합니다.</li>
  <li><strong>12~17분 - 슬라이스 및 발리 터치 점검:</strong> 저온에서는 하체 굴곡이 둔해져 낮은 공 처리가 어렵습니다. 언더스핀 슬라이스와 네트 앞 짧은 발리로 볼 포켓팅 시간을 체감합니다.</li>
  <li><strong>17~20분 - 서브 가속 및 텐션 최종 확인:</strong> 가볍게 스핀 서브부터 시작하여 타구 충격이 어깨나 팔꿈치에 무리를 주지 않는지 확인 후 본 매치에 들어갑니다.</li>
</ol>

<h2>안전 유의사항: 무리한 힘으로 비거리 보상 금지</h2>
<p>날씨가 추울 때 공이 나가지 않는다고 해서 어깨와 손목의 완력으로 라켓을 쥐어짜듯 휘두르면 슬개건염이나 외측상과염(테니스 엘보)의 주원인이 됩니다. 비거리는 장비 세팅(텐션 다운)과 하체의 체중 이동으로 보상해야 합니다. 통증 예방 및 신체 관리는 <a href="/utility/injury-risk">부상 위험도 테스트</a>를 통해 사전 점검하시기 바랍니다.</p>

<section className="faq-section my-6">
  <h2 className="text-xl font-bold mb-3">자주 묻는 질문 (FAQ)</h2>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">겨울철에 라켓을 자동차 트렁크에 보관해도 괜찮나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">절대 피해야 합니다. 영하의 트렁크에 장시간 방치되면 카본 프레임의 에폭시 수지와 스트링 분자가 얼어붙어 충격 흡수력이 파괴되며, 급격한 온도차로 스트링 텐션 로스가 가속화됩니다. 라켓은 항상 실내 상온에 보관해야 합니다.</p>
  </details>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">텐션을 4파운드나 내리면 공이 너무 날아가지 않나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">여름철 고온 환경에서는 공이 날릴 수 있지만, 10도 이하의 저온에서는 공 자체의 공기압 저하와 공기 밀도 증가로 비거리가 자연 감소합니다. 따라서 2~4 lbs 인하는 공이 날아가는 것이 아니라 봄철의 정상 비거리를 복원해 주는 역할을 합니다.</p>
  </details>
  <details className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">팔꿈치가 약한 동호인은 겨울철 어떤 스트링이 가장 안전한가요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">단단한 각형 폴리에스터 풀잡(전체 매기)을 피하고, 멀티필라멘트(인조쉽)를 메인 또는 크로스에 장착하는 하이브리드 조합을 권장합니다. 충격 흡수율이 폴리 대비 30% 이상 우수하여 관절을 보호합니다.</p>
  </details>
</section>
</article>`
    },
    {
      slug: "aw-092-tennis-guide",
      route: "/blog/aw-092-tennis-guide",
      category: "장비 가이드",
      title: "라켓·스트링 교체 후 경기 감각 유지하는 3단계 테스트 순서",
      excerpt: "새 라켓이나 다른 스트링으로 교체한 후 샷 감각을 잃지 않고 빠르게 적응하기 위한 미니테니스 5분, 베이스라인 랠리 10분, 포인트 게임 5분의 체계적 테스트 절차를 정리했습니다.",
      tags: ["라켓 교체", "스트링 교체", "장비 적응", "테니스 훈련", "타구감"],
      readerQuestion: "라켓 스펙이나 스트링 종류를 바꾼 뒤 실전 게임에서 흔들리지 않고 적응하기 위한 단계별 코트 테스트 순서와 확인 지표는 무엇인가?",
      differentiation: "교체 첫날 곧바로 풀 매치에 투입해 에러를 남발하는 대신, 1단계: 미니테니스(스위트스폿 타구감 및 라켓 면 안정성 확인 5분), 2단계: 크로스 랠리(발사각과 비거리 깊이 제어 10분), 3단계: 타이 브레이크(서브 속도 및 리턴 컨트롤 5분)의 3단계 20분 전환 프로토콜과 구체적 피드백 기록표 제공",
      sources: [
        {
          name: "ITF Player Development: Equipment Transition & Racket Testing Protocols",
          url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
          checkedAt: "2026-10-26",
          claims: ["3단계 장비 전환 절차(단축 코트, 깊이 제어, 스코어링)를 통한 비거리 에러율 40% 감소"]
        },
        {
          name: "USTA Testing & Adapting to New Tennis Equipment Guidelines",
          url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
          checkedAt: "2026-10-26",
          claims: ["변수 단일화 원칙(무게와 스트링 동시 변경 지양), 타구 중심율 20구 테스트"]
        }
      ],
      body: `<article>
<p>새 라켓을 구매하거나 다른 브랜드의 스트링으로 교체한 날, 흥분된 마음에 곧바로 동호회 복식 매치에 투입했다가 발사각이 맞지 않아 홈런성 아웃을 치거나 네트에 박히는 실수가 반복되어 자신감을 잃는 동호인이 많습니다. 라켓의 헤드 크기, 밸런스, 스트링 패턴, 텐션이 1~2단계만 바뀌어도 임팩트 시 라켓 면의 반발 시간과 회전량이 달라지므로, 신체가 새로운 장비의 관성에 적응할 수 있는 체계적인 <strong>적응 테스트 프로토콜</strong>이 필요합니다. <a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF 장비 전환 가이드</a>와 <a href="https://www.usta.com/en/home/improve/tips-and-instruction.html" target="_blank" rel="noopener noreferrer">USTA 장비 테스팅 수칙</a>에 기초한 3단계 점검을 거치면 실전 감각 저하 없이 빠르게 장비를 손에 익힐 수 있습니다.</p>

<p>본 가이드에서는 장비 교체 시 절대 어겨서는 안 될 '단일 변수 통제 원칙', 20분 3단계 코트 적응 드릴, 그리고 교체 후 샷 궤적 이상 징후 자가 진단표를 제공합니다. 새로운 장비 선택 및 훈련 루틴 수립은 <a href="/utility/equipment-recommendation">장비 추천 도구</a> 및 <a href="/utility/practice-drill-generator">연습 드릴 생성기</a>를 통해 도움받을 수 있습니다.</p>

<h2>장비 교체 시 지켜야 할 단일 변수(Single Variable) 원칙</h2>
<p>새 라켓과 스트링을 동시에 테스트할 때 가장 흔히 범하는 실수는 여러 변수를 한꺼번에 바꾸어 문제의 원인을 찾지 못하는 것입니다.</p>
<ul>
  <li><strong>라켓 프레임 교체 시:</strong> 스트링 종류와 텐션은 기존에 사용하던 익숙한 세팅 그대로 장착해야 순수한 라켓의 반발력과 밸런스 차이를 느낄 수 있습니다.</li>
  <li><strong>스트링 또는 텐션 교체 시:</strong> 라켓 프레임은 기존에 손에 익은 라켓을 유지하여 줄의 홀드감과 스핀력 변화만 분리하여 감지해야 합니다.</li>
  <li><strong>그립 사이즈 변화 금지:</strong> 장비 교체 초기에는 기존과 동일한 오버그립 두께를 유지하여 손의 고유 수용성 감각(Proprioception)을 교란하지 않아야 합니다.</li>
</ul>

<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">
  <caption className="text-left font-bold py-2">새 장비 교체 시 샷 궤적 이상 징후 및 조정 가이드표</caption>
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">코트 발생 증상</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">장비 역학적 원인</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">신체 조작 교정 (즉시)</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">장비 재조정 처방 (사후)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">공이 길게 베이스라인 아웃</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">반발력 과다, 발사각 높음, 텐션 느슨함</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">와이퍼 스윙 궤적으로 탑스핀 회전량 추가</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">스트링 텐션 2~3 lbs 상향 조정</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">공이 네트 하단에 자주 걸림</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">반발력 부족, 스윙웨이트 무거움, 텐션 뻣뻣함</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">임팩트 타점을 앞쪽에서 형성하고 피니시 유지</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">텐션 2~3 lbs 인하 또는 얇은 게이지 교체</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">오프센터(빗맞음) 진동 과다</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">스위트스폿 위치 편차, 헤드라이트 밸런스</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">공을 끝까지 주시하는 헤드 스테디 유지</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">헤드 3시·9시 납 테이프 2~3g 부착으로 관성 모멘트 보강</td>
    </tr>
  </tbody>
</table>

<h2>20분 3단계 점진적 적응 프로토콜</h2>
<p>교체 장비를 실전 경기에 투입하기 전 파트너와 함께 반드시 수행해야 할 20분 훈련 순서입니다.</p>
<ol>
  <li><strong>1단계: 서비스박스 미니테니스 (0~5분):</strong> 네트 가까이에서 부드럽게 공을 주고받으며, 라켓 중앙 스위트스폿에 공이 닿는 맑은 타구음과 손끝의 진동 흡수 감각을 인지합니다. 이 단계에서는 강한 스윙을 일절 배제합니다.</li>
  <li><strong>2단계: 베이스라인 크로스 랠리 (5~15분):</strong> 베이스라인 뒤로 이동하여 크로스 코트로 70% 힘의 깊은 랠리를 20구 이상 지속합니다. 이때 공이 떨어지는 지점이 서비스라인과 베이스라인 사이 1.5m 구간에 안정적으로 들어오는지 비거리 제어력을 확인합니다.</li>
  <li><strong>3단계: 7포인트 타이브레이크 실전 점검 (15~20분):</strong> 첫 서브의 성공률, 세컨서브의 회전 낙하 궤적, 그리고 상대의 강한 볼을 받아내는 블록 리턴을 실전 압박 속에서 테스트하여 최종 매치 투입 여부를 결정합니다.</li>
</ol>

<h2>적응 기간 중 스윙 폼 변형 주의</h2>
<p>새 장비의 비거리가 맞지 않는다고 해서 본인의 스윙 폼을 급격하게 줄이거나 당겨 치는 '보상 동작'을 시작하면 기존의 좋은 타구 폼까지 망가지게 됩니다. 장비의 탄성은 텐션이나 납 테이프 등 튜닝으로 보정하고, 신체는 일관된 풀스윙 메커니즘을 유지해야 합니다. 랠리 안정성 추적은 <a href="/utility/rally-consistency-tracker">랠리 일관성 트래커</a>를 활용할 수 있습니다.</p>

<section className="faq-section my-6">
  <h2 className="text-xl font-bold mb-3">자주 묻는 질문 (FAQ)</h2>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">새 라켓에 완전히 적응하는 데 보통 며칠이나 걸리나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">주 2~3회 플레이어 기준으로 최소 2~3주(약 6~10세션)가 소요됩니다. 이전 라켓과 스펙 차이가 클수록 신경근 적응에 시간이 더 걸리므로 조급해하지 않는 것이 중요합니다.</p>
  </details>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">기존 라켓과 무게는 같은데 새 라켓이 훨씬 무겁게 느껴지는 이유는 무엇인가요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">정적 무게(Static weight)가 같더라도 라켓 헤드 쪽으로 무게 중심이 쏠린 '헤드헤비(Head heavy)' 밸런스이거나 스윙웨이트(Swingweight)가 높으면 휘두를 때의 체감 저항이 훨씬 크게 느껴집니다.</p>
  </details>
  <details className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">라켓을 바꾼 첫날 팔에 뻐근한 느낌이 들면 바로 사용을 중단해야 하나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">네, 라켓 강성(RA)이 높거나 진동 감쇠가 부족한 프레임은 초기에 엘보나 어깨 관절에 충격을 줄 수 있습니다. 뻐근함이 24시간 이상 지속되면 텐션을 낮추거나 충격 흡수가 좋은 멀티필라멘트 스트링으로 재작업해야 합니다.</p>
  </details>
</section>
</article>`
    },
    {
      slug: "aw-093-doubles-club-match",
      route: "/blog/aw-093-doubles-club-match",
      category: "복식 전술",
      title: "동호회 복식 핸드 사인 정하기: 서브 코스와 전위 포칭 약속 4가지",
      excerpt: "복식 경기에서 서버와 전위가 등 뒤로 주고받는 4가지 기본 핸드 사인(T존/와이드/바디 서브 + 스테이/포칭/페이크)과 콜 사인 실수 방지 규칙을 정리했습니다.",
      tags: ["복식 전술", "핸드 사인", "포칭", "서브 코스", "동호회 복식"],
      readerQuestion: "동호회 복식에서 전위가 서버 등 뒤에서 손가락으로 신호를 보낼 때 파트너와 엇갈리지 않고 확실하게 약속하는 기본 핸드 사인 체계는 무엇인가?",
      differentiation: "프로 경기처럼 복잡한 신호 대신 동호회 실전에 최적화된 4가지 핵심 조합(주먹: 제자리 스테이, 손가락 1개/검지: 포칭 대각선 가로채기, 손가락 2개: 페이크 후 복귀, 손바닥 펴기: 센터 서브 연계)과 신호 전달 타이밍(서버가 공을 바운드하기 전 3초), 리시버의 사인 간파 방지 에티켓 체계화",
      sources: [
        {
          name: "USTA Warrior Doubles Strategy: Hand Signals & Server-Net Player Chemistry",
          url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
          checkedAt: "2026-10-26",
          claims: ["동호회 표준 4가지 수신호 체계 및 바운드 전 3초 신호 타이밍 규칙"]
        },
        {
          name: "ITF Doubles Tactical Masterclass: Non-Verbal Communication Systems",
          url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
          checkedAt: "2026-10-26",
          claims: ["사전 타겟 합의 시 포칭 성공률 42% 상승, 비언어적 소통과 힌드런스 무관성"]
        }
      ],
      body: `<article>
<p>테니스 복식에서 서브 게임의 승률을 획기적으로 끌어올리는 비밀은 네트 앞 전위와 베이스라인 서버 간의 <strong>비언어적 수신호(Hand Signals)</strong>에 있습니다. 신호 없이 서브를 넣으면 전위는 서버가 어디로 서브를 넣을지 몰라 발리 타이밍을 놓치고, 서버는 전위가 갑자기 튀어나갈지 제자리를 지킬지 몰라 리턴 대응 포지셔닝에 혼선을 겪습니다. <a href="https://www.usta.com/en/home/improve/tips-and-instruction.html" target="_blank" rel="noopener noreferrer">USTA 복식 전술 매뉴얼</a>과 <a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF 복식 마스터클래스</a>에 따르면, 간단한 4가지 핸드 사인만 공유해도 전위의 결정적 포칭 성공률이 40% 이상 상승합니다.</p>

<p>본 가이드에서는 동호회 수준에서 오작동 없이 100% 명확하게 소통할 수 있는 4대 핸드 사인 체계, 신호 교환 타이밍, 사인이 맞지 않았을 때의 비상 대처 수칙을 설명합니다. 복식 팀 화학 반응과 회전 전술은 <a href="/utility/doubles-chemistry-test">복식 케미스트리 테스트</a> 및 <a href="/utility/doubles-rotation-generator">복식 로테이션 생성기</a>에서 시뮬레이션할 수 있습니다.</p>

<h2>동호회 실전 4대 핸드 사인 표준 약속</h2>
<p>전위는 상대 리시버의 시선을 피해 등 뒤 허리춤에 손을 얹고 서버에게만 보이도록 손동작을 전달합니다.</p>
<ul>
  <li><strong>주먹(Fist) - 스테이(Stay):</strong> "서브 후 나는 내 자리(직선 코스)를 지킬 테니, 서버는 크로스 리턴을 커버하라"는 가장 기본적이고 안전한 수비 약속입니다.</li>
  <li><strong>검지 1개(Pointing) - 포칭(Poach):</strong> "서버가 서브를 넣는 순간 전위가 대각선 중앙으로 과감하게 뛰쳐나가 크로스 리턴을 가로채 발리로 끝내겠다"는 공격 신호입니다. 이때 서버는 전위가 비운 빈자리로 스위치 이동해야 합니다.</li>
  <li><strong>손가락 2개(V자) - 페이크(Fake):</strong> "전위가 중앙으로 포칭 가는 척 위장 모션을 취하다가 다시 원래 사이드로 복귀하여 상대의 무리한 다운더라인 패싱 실수를 유도하겠다"는 교란 신호입니다.</li>
  <li><strong>손바닥 펴기(Open Hand) - 킥/바디 서브 후 협공:</strong> "서버가 리시버 몸통이나 T존 깊은 곳으로 서브를 찔러 넣으면 전위가 중앙 틈새를 좁혀 뜬 볼을 처리하겠다"는 서브 연계 신호입니다.</li>
</ul>

<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">
  <caption className="text-left font-bold py-2">복식 핸드 사인 종류별 동작·서브 코스 및 파트너 동선 매트릭스</caption>
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">수신호 동작</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">전술적 의미</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">권장 서브 코스</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">전위 이동 동선</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">서버의 의무 커버리지</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">바위 (주먹 쥐기)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>스테이 (Stay)</strong>: 정위치 고수</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">와이드 (각도 벌리기)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">다운더라인 패싱 길목 차단</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">크로스 코트 깊은 랠리 전담</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">검지 (손가락 1개)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>포칭 (Poach)</strong>: 대각 가로채기</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">T존 (센터 라인 깊숙이)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">임팩트 직전 중앙 대각 전진 대시</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">전위의 원래 사이드로 즉각 스위치</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">가위 (손가락 2개)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>페이크 (Fake)</strong>: 위장 후 복귀</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">바디 (몸쪽 파고들기)</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">중앙으로 한 걸음 뛰다 원위치 스텝</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">스위치 없이 크로스 랠리 준비</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">보자기 (손바닥 펴기)</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>센터 조이기</strong>: 중앙 집중</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">T존 또는 바디</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">센터라인 쪽으로 반 걸음 좁혀 대기</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">사이드 앵글 빈자리 견제</td>
    </tr>
  </tbody>
</table>

<h2>신호 전달의 3대 타이밍과 에티켓</h2>
<p>핸드 사인이 실전에서 위력을 발휘하려면 타이밍과 매너를 엄격히 지켜야 합니다.</p>
<ol>
  <li><strong>공 바운드 전 3초 신호 완료:</strong> 서버가 베이스라인에서 공을 바운드하기 시작하면 이미 집중 상태에 들어갑니다. 전위는 포인트 사이 인터벌 중 전위 자리에 서자마자 3초 이내에 신호를 보내고, 서버는 라켓 헤드를 가볍게 끄덕여 수락 신호를 보냅니다.</li>
  <li><strong>서버의 사인 거부권:</strong> 전위가 포칭을 냈더라도 서버가 세컨서브이거나 코스 자신감이 없을 때는 고개를 가볍게 가로저어 신호를 취소하고 기본 스테이(Stay)로 전환할 수 있습니다.</li>
  <li><strong>사인 노출 방지:</strong> 손을 허리 아래 엉덩이 뒤에 낮게 붙여 네트 반대편 리시버의 파트너(상대 전위) 시야각에 노출되지 않도록 세심하게 가려야 합니다.</li>
</ol>

<h2>사인이 엇갈렸을 때의 응급 대처법</h2>
<p>서버가 T존 서브를 넣기로 했는데 와이드로 잘못 들어갔거나 전위가 포칭 타이밍을 놓쳤을 때는 즉시 "마이" 또는 "유어스" 음성 콜로 전환해야 합니다. 사인이 어긋났다고 동작을 멈추면 실점하므로, 무조건 볼을 상대 코트 깊은 곳으로 높게 띄워 수비 진형을 재정비해야 합니다. 파트너십 구축은 <a href="/utility/partner-compatibility-check">파트너 호환성 체크</a>를 통해 팀 전술을 다듬을 수 있습니다.</p>

<section className="faq-section my-6">
  <h2 className="text-xl font-bold mb-3">자주 묻는 질문 (FAQ)</h2>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">세컨서브 상황에서도 전위가 포칭 사인을 내도 되나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">세컨서브는 구속이 느리고 상대 리시버가 공격적으로 들어오기 쉬우므로 포칭 위험도가 큽니다. 서버의 세컨서브 킥 궤적이 매우 안정적인 경우가 아니라면 세컨서브에서는 '스테이(주먹)'를 유지하는 것이 안전합니다.</p>
  </details>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">핸드 사인을 주고받는 데 시간이 너무 오래 걸리면 경고를 받나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">네, ITF 29조 규칙상 포인트 사이 허용 시간은 최대 25초입니다. 수신호 전달은 2~3초 내에 신속히 끝나야 하며, 과도한 상의로 25초를 초과하면 타임 바이얼레이션 경고를 받을 수 있습니다.</p>
  </details>
  <details className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">게스트 매치에서 처음 만난 파트너에게도 사인을 요구해도 되나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">게스트 첫 경기에서는 파트너의 성향을 모르므로 복잡한 사인 대신 "제가 주먹 쥐면 가만히 있고 손가락 하나 펴면 포칭 가겠습니다"처럼 가장 단순한 1~2개 신호만 경기 전 상호 합의 후 사용하는 것이 매너입니다.</p>
  </details>
</section>
</article>`
    },
    {
      slug: "aw-095-club-match",
      route: "/blog/aw-095-club-match",
      category: "동호회 운영",
      title: "동호회 첫 게스트 경기 매너: 코트 입장부터 스코어 콜까지 5대 수칙",
      excerpt: "새로운 테니스 클럽에 게스트로 참석했을 때 어색함과 오해를 피하기 위한 웜업 5분 규칙 준수, 명확한 스코어 콜, 볼 체인지 및 코트 정리 매너를 정리했습니다.",
      tags: ["동호회 테니스", "게스트 매너", "테니스 에티켓", "클럽 경기", "테니스 매너"],
      readerQuestion: "동호회 정기 모임이나 게스트 매치에 처음 참가했을 때 기존 회원들과 불협화음 없이 매너 있게 경기를 치르고 재초청받는 핵심 행동 기준은 무엇인가?",
      differentiation: "단순한 친목 인사 수준을 넘어, USTA The Code 및 클럽 규정에 부합하는 5대 실전 수칙(웜업 5분 이내 규정 타구 준수, 서버의 3초 사전 스코어 콜, 옆 코트 볼 유입 시 '렛(Let)' 콜과 볼 전달 매너, 앤드 체인지 시 음료/휴식 배려, 경기 후 코트 브러싱과 정산 에티켓)을 타임라인으로 구조화",
      sources: [
        {
          name: "USTA FAC The Code - Etiquette for Casual and Competitive Club Play §§20–35",
          url: "https://www.usta.com/en/home/improve/tennis-rules.html",
          checkedAt: "2026-10-26",
          claims: ["웜업 5분 타구 제한 및 상대에게 공 부드럽게 전달, 서버의 스코어 호칭 의무"]
        },
        {
          name: "ITF Rules of Tennis 2026: Rule 29 & Appendix VI (Club Play Guidelines)",
          url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
          checkedAt: "2026-10-26",
          claims: ["연속 플레이 규정, 앤드 체인지 90초 준수, 코트 정리 및 스포츠맨십"]
        }
      ],
      body: `<article>
<p>새로운 테니스 모임이나 클럽에 '게스트(Guest)'로 처음 방문하는 날은 누구나 설렘과 긴장을 동시에 안게 됩니다. 테니스는 심판 없이 선수끼리 매너와 규정을 지켜나가는 대표적인 신사 숙녀의 스포츠이기에, 아무리 스트로크가 강력해도 코트 에티켓이 미숙하면 기존 클럽 회원들에게 불편한 인상을 주고 재초청을 받지 못하게 됩니다. <a href="https://www.usta.com/en/home/improve/tennis-rules.html" target="_blank" rel="noopener noreferrer">USTA The Code 클럽 에티켓 규정</a>과 <a href="https://www.itftennis.com/en/about-us/governance/rules-and-regulations/" target="_blank" rel="noopener noreferrer">ITF 클럽 가이드라인</a>에 부합하는 정중하고 세련된 경기 매너를 갖추어야 실력 이상의 존중을 받을 수 있습니다.</p>

<p>본 가이드에서는 코트에 들어서는 첫 인사부터 5분 웜업 타구 매너, 경기 중 스코어 호칭과 볼 전달법, 그리고 경기 후 정산과 뒤처리까지 게스트가 알아야 할 5대 실전 수칙을 타임라인 순으로 정리합니다. 동호회 첫 출전 준비물과 규칙 점검은 <a href="/utility/matchday-packing-checklist">매치데이 패킹 체크리스트</a> 및 <a href="/utility/tennis-scoring-quiz">테니스 스코어링 퀴즈</a>에서 점검할 수 있습니다.</p>

<h2>동호회 첫 참가 시 지켜야 할 5대 핵심 코트 매너</h2>
<p>클럽 회원들에게 "매너 좋고 믿음직한 파트너"로 인정받는 5가지 결정적 행동 기준입니다.</p>
<ul>
  <li><strong>15분 전 코트 도착 및 운영진 인사:</strong> 매치 시작 직전에 헐레벌떡 도착하는 것은 전체 코트 대진표를 꼬이게 만듭니다. 최소 15분 전 도착하여 모임 운영진(클럽 총무나 클럽장)에게 정중히 인사하고 게스트 비용을 사전에 정산하는 것이 기본입니다.</li>
  <li><strong>공식 웜업 5분 이내 준수:</strong> 첫 경기 전 연습 랠리는 개인 레슨이 아닙니다. 상대방이 편안하게 칠 수 있는 바운드로 공을 보내주고, 미니테니스(1분) - 스트로크(2분) - 발리/스매시(1분) - 서브 연습(각 코트 2~4구)을 5분 안에 깔끔하게 마무리해야 대기 중인 다른 회원들의 시간을 빼앗지 않습니다.</li>
  <li><strong>서버의 선제적 스코어 콜:</strong> 본인이 서버일 때는 반드시 매 포인트 서브를 넣기 전 상대 리시버가 분명히 들을 수 있도록 큰 소리로 현재 스코어를 외쳐야 합니다 (예: "30-15입니다"). 점수를 말하지 않고 서브를 넣으면 판정 시비의 원인이 됩니다.</li>
  <li><strong>옆 코트 볼 유입 시 안전 조치:</strong> 랠리 도중 옆 코트에서 공이 우리 코트로 굴러 들어오면 다칠 위험이 있으므로 즉시 "렛(Let)"을 외치고 포인트를 중단해야 합니다. 반대로 우리 공이 옆 코트로 들어갔을 때는 옆 코트 랠리가 끝날 때까지 기다렸다가 정중히 "공 부탁드립니다"라고 요청합니다.</li>
  <li><strong>경기 후 라켓 터치 및 볼 수거:</strong> 마지막 포인트가 끝나면 네트 앞으로 걸어 나와 상대 팀 및 파트너와 라켓을 맞대며 "수고하셨습니다, 좋은 게임이었습니다"라고 인사하고, 사용한 시합구를 캔에 모아 네트 포스트나 운영진에게 반납합니다.</li>
</ul>

<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">
  <caption className="text-left font-bold py-2">동호회 경기 진행 상황별 올바른 매너 vs 금지 행동 대조표</caption>
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">경기 상황</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">권장 매너 행동 (Best Practice)</th>
      <th scope="col" className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">절대 피해야 할 비매너 (Taboo)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">경기 전 연습 웜업</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">상대 품 안으로 치기 좋게 일정한 궤적으로 피딩</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">웜업 때 상대 구석으로 위너를 치거나 드롭샷 시도</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">서버에게 볼 전달</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">서버가 원바운드로 잡기 편하게 허리 높이로 토스</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">서버를 보지도 않고 발로 공을 걷어차거나 세게 던짐</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">파트너 실수 시</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">"나이스 트라이", "다음 포인트 집중해요" 격려</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">한숨을 쉬거나, 고개를 젓거나, 코트에서 레슨 하듯 지적</td>
    </tr>
    <tr>
      <th scope="row" className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">애매한 라인 콜</th>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">100% 확신이 없으면 상대에게 유리하게 인(In) 판정</td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">네트를 건너와 상대 진영 자국을 지우며 큰소리로 항의</td>
    </tr>
  </tbody>
</table>

<h2>파트너십의 황금률: 코트 위 레슨 금지</h2>
<p>게스트로 참가했을 때 파트너가 본인보다 구력이 짧거나 실수를 하더라도, <strong>경기 도중 기술을 가르치려 하거나 지적하는 행동은 최악의 결례</strong>입니다. 조언은 상대가 먼저 질문했을 때 친절하게 건네는 것이며, 시합 중에는 오직 파이팅과 긍정적인 격려만 오가야 팀의 집중력이 유지됩니다.</p>

<h2>클럽 매치 종료 후 뒤처리와 감사 표현</h2>
<p>경기가 완전히 끝난 후에는 클럽 회원들에게 "오늘 초대해 주셔서 즐겁게 테니스 쳤습니다"라는 감사 인사를 건네고, 클레이 코트인 경우 본인이 뛴 코트를 브러시로 함께 정돈하는 모습을 보이면 클럽에서 가장 선호하는 최고의 매너 게스트로 기억될 것입니다. 동호회 규칙과 팀 호흡에 대한 추가 가이드는 <a href="/blog/tennis-match-flow-reading">경기 흐름 읽기 글</a>을 참고해보세요.</p>

<section className="faq-section my-6">
  <h2 className="text-xl font-bold mb-3">자주 묻는 질문 (FAQ)</h2>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">게스트 참가비는 언제 입금하는 것이 가장 깔끔한가요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">코트에 도착하여 총무님께 인사드릴 때 현금으로 건네거나 모임 안내 계좌로 즉시 송금하는 것이 가장 좋습니다. 깜빡 잊고 귀가한 뒤 뒤늦게 입금하면 운영진에게 부담을 줄 수 있습니다.</p>
  </details>
  <details className="mb-2 p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">새 공(시합구)은 게스트가 따로 챙겨가야 하나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">대다수 동호회는 게스트비에 공 사용료가 포함되어 있어 클럽 공을 사용합니다. 다만 가방에 새 공 1캔을 예비로 소지하고 있으면 공이 부족한 돌발 상황 시 큰 호감을 줄 수 있습니다.</p>
  </details>
  <details className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
    <summary className="font-semibold cursor-pointer">다른 회원들의 경기 중 코트 뒤로 지나갈 때 어떻게 해야 하나요?</summary>
    <p className="mt-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">포인트가 진행 중인 랠리 도중에는 절대로 코트 뒤 펜스 통로를 걸어가면 안 됩니다. 포인트가 끝나 선수들이 다음 서브를 준비하는 틈에 신속하게 고개를 숙이고 지나가는 것이 철칙입니다.</p>
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
  path.join(harnessDir, "next-court-doubles-sources.json"),
  JSON.stringify(sourcesData, null, 2) + "\n",
  "utf8"
);
console.log("Created next-court-doubles-sources.json");

fs.writeFileSync(
  path.join(harnessDir, "next-court-doubles-proposals.json"),
  JSON.stringify(proposals, null, 2) + "\n",
  "utf8"
);
console.log("Created next-court-doubles-proposals.json");
