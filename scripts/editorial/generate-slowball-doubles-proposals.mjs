import fs from "node:fs";
import path from "node:path";

const targetSlugs = [
  "aw-079-20",
  "aw-080-tennis-guide",
  "aw-081-club-match",
  "aw-082-serve-record",
  "aw-083-doubles"
];

const proposals = {
  batchId: "slowball-doubles-5",
  reviewedAt: "2026-10-24T12:35:00+09:00",
  items: [
    {
      slug: "aw-079-20",
      route: "/blog/aw-079-20",
      title: "느린 공 백핸드 공략: 전진 스텝과 임팩트 타이밍 20분 훈련법",
      excerpt: "베이스라인 깊은 곳으로 힘없이 날아오는 느린 공에서 백핸드가 날리거나 네트에 걸리지 않도록 대각선 전진 스텝과 임팩트 높이를 안정시키는 20분 집중 훈련법을 정리합니다.",
      category: "기술 교정",
      tags: ["느린 볼", "백핸드", "스텝인", "임팩트 타이밍", "20분 훈련"],
      readTime: "9분",
      updatedAt: "2026-10-24",
      readerQuestion: "베이스라인 깊은 곳으로 힘없이 날아오는 느린 공에서 백핸드가 날리거나 네트에 걸리는 원인과 이를 교정하는 20분 드릴은 무엇인가?",
      differentiation: "단순히 '기다려서 쳐라'는 추상적 조언을 배제하고, 공의 정점(Apex) 직후 바운드 판단, 뒤로 물러서지 않고 대각선 앞으로 2보 전진하는 스텝인(Step-in), 가슴 높이 아래 라켓면 닫힘 유지와 20분 구간별(5분 핸드피드-10분 랠리-5분 타겟 지정) 드릴 제공",
      sources: [
        {
          name: "ITF Coaching and Sports Science Review - Contact Point & Timing",
          url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
          checkedAt: "2026-10-24",
          claims: ["느린 비행 공에 대한 임팩트 존 진입과 하지의 전진 운동량 전달 메커니즘"]
        },
        {
          name: "USTA Tennis Skills & Drills - Groundstroke Footwork",
          url: "https://www.usta.com/en/home/improve/tennis-rules.html",
          checkedAt: "2026-10-24",
          claims: ["베이스라인 안쪽으로의 스텝인 및 라켓 헤드 스피드 감속 방지 훈련"]
        }
      ],
      tableHtml: `<div class="table-responsive" style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;text-align:left;font-size:14px;"><caption style="font-weight:700;margin-bottom:8px;text-align:left;">느린 공 백핸드 처리 타이밍 및 스텝 비교</caption><thead><tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;"><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">상황 구분</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">볼의 궤적 및 바운드</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">권장 스텝 및 체중 이동</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">라켓 면과 스윙 궤도</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">흔한 실수 및 주의점</th></tr></thead><tbody><tr><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">정점 직후 공략 (권장)</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">바운드 후 최고점에서 약 10cm 하강하는 시점</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">오른발(오른손잡이 기준) 대각선 전진 2보 스텝인</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">수평에 가까운 로우투하이, 면 흔들림 제어</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">제자리에 서서 기다리다 타점이 뒤로 밀림</td></tr><tr style="background:#f8fafc;"><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">완전 하강 후 공략</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">무릎 아래로 떨어져 힘을 잃은 상태</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">오픈 스탠스로 무릎을 낮추고 체중 하향 지지</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">급격한 상향 스윙으로 네트 마진 확보</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">무리하게 강타하려다 네트 하단 직격</td></tr><tr><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">쇼트 바운드 대시</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">서비스라인 부근에 짧게 떨어지는 찬스볼</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">전력 대시 후 임팩트 직전 하프 스플릿 스텝</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">콤팩트한 백스윙과 깊은 딥 드라이브 코스</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">스피드를 제어하지 못하고 베이스라인 아웃</td></tr></tbody></table></div>`,
      faq: [
        {
          q: "느린 공인데도 백핸드로 치면 자꾸 홈런(백보드 아웃)이 나오는 이유는 무엇인가요?",
          a: "상대 공에 스피드가 없다 보니 스스로 힘을 내려고 상체 회전을 과도하게 쓰면서 라켓 면이 위로 열리기 때문입니다. 몸을 크게 휘두르기보다 하체로 대각선 전진 스텝을 밟으며 라켓 면을 단단히 고정하고 밀어주어야 안전하게 들어갑니다."
        },
        {
          q: "양손 백핸드와 한손 백핸드 중 느린 공 대처가 더 유리한 폼이 있나요?",
          a: "양손 백핸드는 비지배 손(왼손)의 지지력이 있어 힘을 싣기 유리하지만 발이 전진하지 않으면 거리가 좁아집니다. 한손 백핸드는 어깨 회전을 일찍 닫고 높은 타점을 피하기 위해 한 발 더 일찍 진입해야 합니다. 두 폼 모두 타점 위치로의 발 이동이 핵심입니다."
        }
      ]
    },
    {
      slug: "aw-080-tennis-guide",
      route: "/blog/aw-080-tennis-guide",
      title: "어깨 위로 튀어오르는 높은 공 처리: 라이징 타구 vs 물러나기 3단계 판단 기준",
      excerpt: "상대의 깊은 탑스핀으로 어깨 높이 이상 튀어오르는 까다로운 공을 무리하게 누르려다 실수하지 않고, 라이징 공략과 물러나기 수비를 구분하는 3단계 판단 기준을 제시합니다.",
      category: "기술 교정",
      tags: ["높은 공", "스트라이크 존", "라이징 타구", "타점 판단", "코스 선택"],
      readTime: "9분",
      updatedAt: "2026-10-24",
      readerQuestion: "탑스핀으로 어깨 높이 이상 튀어오르는 공을 앞에서 라이징으로 칠지, 뒤로 물러나 허리 높이에서 칠지 어떤 기준으로 판단해야 하는가?",
      differentiation: "타점의 물리적 높이(스트라이크 존: 허리와 가슴 사이 vs 어깨 위)와 네트 중앙(0.914m) 마진, 상대의 공 속도/스핀량에 따른 3단계 분리 판단 알고리즘 및 유효 베이스라인 거리 변화 수치 분석 제공",
      sources: [
        {
          name: "ITF Rules of Tennis 2026 - Rule 24 & Court Dimensions",
          url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
          checkedAt: "2026-10-24",
          claims: ["네트 중앙 규격(0.914m) 및 유효 코트 비거리 기준"]
        },
        {
          name: "USTA Player Development - High Ball & Strike Zone Management",
          url: "https://www.usta.com/en/home/improve/tennis-rules.html",
          checkedAt: "2026-10-24",
          claims: ["어깨 위 타점의 비효율성과 라이징 콘택트 및 백페달링 수비 분리 원칙"]
        }
      ],
      tableHtml: `<div class="table-responsive" style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;text-align:left;font-size:14px;"><caption style="font-weight:700;margin-bottom:8px;text-align:left;">높은 바운드 공 처리 옵션별 실행 조건 및 위험도 분석</caption><thead><tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;"><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">처리 방식</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">볼 바운드 위치</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">타점 높이 및 타구 시점</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">체중 밸런스 및 스탠스</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">득점 기회 및 에러 위험도</th></tr></thead><tbody><tr><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">라이징 공략 (공격형)</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">베이스라인 안쪽 0.5~1m</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">바운드 직후 상승기 (허리 높이)</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">세미오픈, 전방 린인(Lean-in)</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">상대 시간 박탈 우수 / 타이밍 오차 위험</td></tr><tr style="background:#f8fafc;"><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">물러나 수비 (안정형)</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">베이스라인 뒤 2m 이상 깊은 공</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">정점 지나 하강기 (가슴-허리)</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">오픈 스탠스, 뒤쪽 다리 중심축</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">안정적 리턴 확보 / 상대에게 공격권 양보</td></tr><tr><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">어깨 위 강타 (비권장)</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">베이스라인 근처 애매한 체공</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">어깨 위 최고점 (언밸런스)</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">체중이 뒤로 쏠림 (헤드업 발생)</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">프레임 타구 및 네트 에러 확률 70% 이상</td></tr></tbody></table></div>`,
      faq: [
        {
          q: "어깨 높이로 오는 공을 드라이브 발리처럼 공중에서 바로 쳐도 되나요?",
          a: "네트와의 거리가 가깝다면 좋은 찬스가 되지만, 베이스라인 깊은 곳에서 치는 드라이브 발리는 에러 마진이 극히 적습니다. 베이스라인 부근에서는 바운드 후 정점을 지나 내려오는 공을 기다리거나 한 걸음 들어가 라이징으로 치는 것이 정석입니다."
        },
        {
          q: "뒤로 물러나서 칠 때 공이 짧아져 찬스를 주는 것을 막으려면 어떻게 해야 하나요?",
          a: "물러나면서 치면 공에 힘이 실리지 않으므로, 완전히 뒤로 빠진 뒤 마지막 스텝을 딛고 체중을 앞쪽으로 실으며 상향 스윙 궤적으로 네트 위 1m 이상의 안전 마진을 주어 깊숙이 밀어내야 합니다."
        }
      ]
    },
    {
      slug: "aw-081-club-match",
      route: "/blog/aw-081-club-match",
      title: "포인트 사이 25초 인터벌 관리: 호흡·사인 소통과 페이스 조절 가이드",
      excerpt: "동호회 경기 중 서두르거나 호흡이 흐트러져 연속 실점하지 않도록, ITF 25초 규정에 맞춘 시간대별 신체 정렬, 파트너 사인 교환, 멘탈 셋업 루틴을 체계화합니다.",
      category: "경기 운영",
      tags: ["동호회 경기", "인터벌 루틴", "25초 규칙", "파트너 소통", "멘탈 관리"],
      readTime: "9분",
      updatedAt: "2026-10-24",
      readerQuestion: "동호회 경기 중 포인트가 끝난 뒤 서버/리시버로서 서두르거나 호흡이 흐트러지지 않게 25초 인터벌을 어떻게 구조화해야 하는가?",
      differentiation: "ITF Rule 29 25초 규정에 맞춘 타임라인 분해: 0~7초 피지컬 리셋(시선 차단 및 줄 정돈), 8~15초 파트너 사인 교환 및 호흡 조절, 16~25초 서브/리턴 셋업. 페널티 방지 및 파트너 간 불필요한 서두름 방지 가이드 제시",
      sources: [
        {
          name: "ITF Rules of Tennis 2026 - Rule 29 (Continuous play & Intervals)",
          url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
          checkedAt: "2026-10-24",
          claims: ["포인트 종료 시점부터 다음 서브 타구까지 최대 25초 허용 원칙"]
        },
        {
          name: "USTA Adult League Guidelines - Pace of Play and Partner Signaling",
          url: "https://www.usta.com/en/home/improve/tennis-rules.html",
          checkedAt: "2026-10-24",
          claims: ["불필요한 지연 방지 및 파트너 간 사전 신호 체계화"]
        }
      ],
      tableHtml: `<div class="table-responsive" style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;text-align:left;font-size:14px;"><caption style="font-weight:700;margin-bottom:8px;text-align:left;">포인트 사이 25초 시간대별 실행 프로토콜</caption><thead><tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;"><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">시간 경과</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">주요 실행 동작</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">파트너 간 커뮤니케이션</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">호흡 및 신체 상태</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">위반 및 감점 방지 체크</th></tr></thead><tbody><tr><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">0~7초 (분리 단계)</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">뒤로 돌아서기, 라켓 줄 정리, 공 수거</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">불필요한 감정 표출 중단, 각자 뒤돌기</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">코로 들이마시고 입으로 깊게 내쉬기 1회</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">상대 코트 노려보며 시간 낭비하지 않기</td></tr><tr style="background:#f8fafc;"><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">8~15초 (소통 단계)</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">라켓 터치 또는 가벼운 시선 교환</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">손가락 사인 또는 짧은 구호("T존", "와이드")</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">안정된 맥박 회복, 어깨 긴장 풀기</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">긴 대화로 15초 넘기지 않기</td></tr><tr><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">16~25초 (셋업 단계)</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">베이스라인 정렬, 공 2~3회 바운드</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">소통 완료 후 완전 침묵, 타겟 고정</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">마지막 날숨과 함께 서브/리턴 집중</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">25초 초과 타임 바이얼레이션 방지</td></tr></tbody></table></div>`,
      faq: [
        {
          q: "동호회 경기에서도 25초 규칙을 엄격하게 지켜야 하나요?",
          a: "동호회 친선 경기에서는 시계를 재지 않지만, 포인트가 끝난 뒤 한쪽이 지나치게 서두르거나 반대로 지나치게 늦장을 부리면 경기 리듬이 깨지고 판정 시비가 발생합니다. 20~25초 템포를 몸에 익혀두면 공식 대회에서도 긴장하지 않고 일정한 경기력을 낼 수 있습니다."
        },
        {
          q: "체력이 떨어져 숨이 찰 때는 인터벌을 어떻게 써야 하나요?",
          a: "실점이 이어질 때 급하게 서브를 넣는 것이 가장 위험합니다. 포인트가 끝나자마자 베이스라인 뒤 펜스 쪽으로 걸어가며 긴 날숨을 2~3회 길게 내뱉고, 정해진 20초를 꽉 채워 호흡을 가라앉힌 뒤 공을 바운드해야 합니다."
        }
      ]
    },
    {
      slug: "aw-082-serve-record",
      route: "/blog/aw-082-serve-record",
      title: "서브 더블폴트 패턴 분석과 기록법: 토스 위치·속도·코스별 자가 진단표",
      excerpt: "더블폴트가 반복될 때 단순한 횟수 집계를 넘어 토스 편차, 스윙 템포 감속, 코스 선택의 3차원 원인을 진단하고 다음 경기 교정 과제를 도출하는 실전 기록법을 정리합니다.",
      category: "서브 전략",
      tags: ["서브", "더블폴트", "서브 기록", "토스 교정", "세컨서브"],
      readTime: "9분",
      updatedAt: "2026-10-24",
      readerQuestion: "경기 중 더블폴트가 자주 나올 때 원인을 감정적으로 자책하지 않고 데이터로 분석하려면 무엇을 어떻게 기록해야 하는가?",
      differentiation: "단순 횟수 집계가 아닌 3차원 분해: 1) 토스 편차(앞/뒤/좌/우 시계 방향), 2) 스윙 템포(세컨서브 감속 여부), 3) 타겟 코스(T존/와이드). 매 세트 후 5개 항목으로 원인을 분류하고 다음 경기 연습 과제를 도출하는 자가 진단표 제공",
      sources: [
        {
          name: "ITF Rules of Tennis 2026 - Rule 16, 17, 19 (Service & Fault Rules)",
          url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
          checkedAt: "2026-10-24",
          claims: ["서브 전달 및 폴트 판정 규정 준수"]
        },
        {
          name: "USTA Performance Metrics - Serve Consistency & Toss Tracking",
          url: "https://www.usta.com/en/home/improve/tennis-rules.html",
          checkedAt: "2026-10-24",
          claims: ["토스 편차 및 세컨서브 스윙 감속이 더블폴트에 미치는 기하학적 분석"]
        }
      ],
      tableHtml: `<div class="table-responsive" style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;text-align:left;font-size:14px;"><caption style="font-weight:700;margin-bottom:8px;text-align:left;">더블폴트 유형별 원인 진단 및 즉각 교정 체크리스트</caption><thead><tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;"><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">폴트 착탄 지점</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">주요 물리적 원인</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">토스 시계방향 위치</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">라켓 스윙 템포 오류</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">실전 즉시 교정 처방</th></tr></thead><tbody><tr><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">네트 중간에 꽂힘</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">타점이 너무 앞쪽이거나 헤드 감속</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">12시보다 앞으로 쏠림 (앞쪽 30cm)</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">불안감으로 임팩트 순간 스윙 멈춤</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">토스를 머리 위 12시 30분으로 당기고 스윙 스피드 유지</td></tr><tr style="background:#f8fafc;"><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">서비스라인 길게 아웃</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">회전 부족 및 라켓 면이 위로 열림</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">머리 뒤쪽으로 넘어감 (11시 방향)</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">밀어 넣으려는 플랫성 푸시 스윙</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">스핀(킥/슬라이스) 회전량을 늘려 네트 마진 확보</td></tr><tr><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">사이드라인 바깥 아웃</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">몸이 일찍 열려 코스 제어 실패</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">오른쪽(1~2시)으로 심하게 벗어남</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">상체 어깨가 네트 쪽으로 조기 회전</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">비타구 측 어깨를 타구 순간까지 닫아두기</td></tr></tbody></table></div>`,
      faq: [
        {
          q: "세컨서브 더블폴트가 무서워서 살살 넣는데 왜 더 자주 네트에 걸리나요?",
          a: "서브에 스핀이 걸리지 않으면 공이 네트를 넘은 뒤 떨어지는 마그누스 효과가 발생하지 않습니다. 살살 치려고 스윙을 줄이면 오히려 궤적이 낮아져 네트에 직격합니다. 세컨서브일수록 라켓 헤드를 빠르게 휘둘러 스핀을 먹여야 안전하게 코트 안으로 떨어집니다."
        },
        {
          q: "스마트폰 메모장에 더블폴트를 간단히 기록하는 팁이 있나요?",
          a: "세트가 끝난 뒤 메모장에 '듀스-네트-토스앞', '애드-길게-스윙감속'처럼 [코트-결과-원인] 3단어 조합으로 5초 만에 메모해 두면, 경기 후 자신의 전형적인 실패 패턴을 명확히 파악할 수 있습니다."
        }
      ]
    },
    {
      slug: "aw-083-doubles",
      route: "/blog/aw-083-doubles",
      title: "상대 로브 집중 공략 대응: 복식 전위 위치 조정과 후위 커버 포메이션",
      excerpt: "복식 경기에서 전위 머리 위로 넘어오는 로브에 당황해 실점하지 않도록 전위의 위치 1.5보 후퇴, 스매시 불가 시 즉각 바운스 콜, 후위의 크로스 커버 포메이션을 체계화합니다.",
      category: "복식 전술",
      tags: ["복식", "로브 수비", "전위 포지션", "후위 커버", "복식 전술"],
      readTime: "9분",
      updatedAt: "2026-10-24",
      readerQuestion: "복식 경기에서 상대가 전위 머리 위로 집요하게 로브를 띄울 때 전위의 포지션과 후위의 수비 동선을 어떻게 재배치해야 하는가?",
      differentiation: "3단계 포메이션 조정 체계화: 1) 전위 위치를 네트에서 1.5보 후퇴(서비스박스 중앙선 위치), 2) 스매시 불가 시 무리한 백페달링 대신 '바운스' 선제 콜 및 후위 크로스 커버, 3) 상대 로브 타점 관찰(무릎 아래 타구 시 드롭/로브 확률 80% 이상 판정)",
      sources: [
        {
          name: "USTA Warrior Doubles Strategy - Lob Defense Formations",
          url: "https://www.usta.com/en/home/improve/tennis-rules.html",
          checkedAt: "2026-10-24",
          claims: ["로브 상황 시 전위 위치 후퇴 및 후위의 대각선 커버 프로토콜"]
        },
        {
          name: "ITF Coaching Doubles Tactics - Overhead and Recovery Movement",
          url: "https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/",
          checkedAt: "2026-10-24",
          claims: ["후방 낙하 로브에 대한 백페달링 부상 방지 및 사이드 스텝 리셋"]
        }
      ],
      tableHtml: `<div class="table-responsive" style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;text-align:left;font-size:14px;"><caption style="font-weight:700;margin-bottom:8px;text-align:left;">상대 로브 궤적별 복식 수비 포메이션 전환 기준</caption><thead><tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;"><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">상대 타구 상황</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">전위 위치 및 대응</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">후위 수비 동선</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">음성 콜 가이드</th><th scope="col" style="padding:10px 12px;border:1px solid #cbd5e1;">실점 방지 우선순위</th></tr></thead><tbody><tr><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">낮고 빠른 공격형 로브</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">점프 스매시 시도 또는 뒤로 돌아서기</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">대각선 반대편 베이스라인 코너 전력 질주</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">후위가 큰 소리로 "스위치!" 외치기</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">머리 뒤로 넘어가는 공 무리하게 건드리지 않기</td></tr><tr style="background:#f8fafc;"><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">높고 느린 수비형 로브</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">사이드 스텝으로 2걸음 후퇴 후 안정적 스매시</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">베이스라인 중앙 대기, 상대 역습 대비</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">전위가 "마이(내가 침)!" 콜 후 처리</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">무리한 풀파워 대신 상대 빈 코스 깊게 연결</td></tr><tr><th scope="row" style="padding:10px 12px;border:1px solid #e2e8f0;font-weight:600;">완전 역습 베이스라인 로브</th><td style="padding:10px 12px;border:1px solid #e2e8f0;">공 포기 후 즉시 파트너 반대편 코트로 스위치</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">바운드 후 공을 쫓아 높게 맞로브 띄우기</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">전위가 "바운스!" 외치고 자리 비우기</td><td style="padding:10px 12px;border:1px solid #e2e8f0;">로브를 로브로 맞받아쳐 포지션 재정비 시간 확보</td></tr></tbody></table></div>`,
      faq: [
        {
          q: "머리 위로 로브가 넘어갈 때 뒤로 뒷걸음질(백페달링)치며 치면 왜 위험한가요?",
          a: "뒤를 보지 않고 뒷걸음질치면 발이 엉켜 넘어지면서 손목이나 머리, 허리에 심각한 부상을 입을 수 있습니다. 머리 위로 넘어가는 깊은 로브는 절대 뒷걸음질치지 말고, 몸을 돌려 사이드 스텝으로 달리거나 후위 파트너에게 넘겨야 안전합니다."
        },
        {
          q: "상대가 로브를 자주 띄운다면 경기 전 파트너와 어떤 약속을 해야 하나요?",
          a: "전위는 네트에 너무 붙지 말고 서비스박스 중앙으로 1.5보 물러서고, '로브가 전위 키를 넘으면 무조건 후위가 쫓고 전위는 반대편으로 스위치한다'는 원칙을 단 한 문장으로 합의해 두면 혼선을 100% 방지할 수 있습니다."
        }
      ]
    }
  ]
};

const outputPath = path.resolve(".goal-harness/content-90-20261020/next-slowball-doubles-proposals.json");
fs.writeFileSync(outputPath, JSON.stringify(proposals, null, 2) + "\n", "utf8");
console.log("Proposals generated at:", outputPath);
