type BlogContentEntry = {
  content: string;
  tags: string[];
  summary: string;
  highlight: string;
  faq?: { question: string; answer: string }[];
};

type ScheduledTopic = {
  slug: string;
  title: string;
  intent: string;
  audience: string;
  firstStep: string;
  mistake: string;
  metric: string;
  drill: string;
  internalLink: string;
  internalLabel: string;
  sourceName: string;
  sourceUrl: string;
  tags: string[];
};

const scheduledTopics: ScheduledTopic[] = [
  {
    slug: "seoul-best-tennis-courts",
    title: "서울 테니스장 추천 7곳",
    intent: "서울에서 코트를 고를 때 예약 가능성, 이동 시간, 야간 조명, 레슨 동선을 함께 비교하는 기준",
    audience: "서울에서 처음 코트를 잡는 입문자와 주말 동호인",
    firstStep: "집에서 30분 안에 도착하는 코트 3곳을 먼저 저장하고, 평일 야간과 주말 오전 잔여 시간을 따로 확인한다.",
    mistake: "시설 사진만 보고 고르는 것. 실제 만족도는 예약 성공률과 이동 후 피로도에서 갈린다.",
    metric: "예약 성공률, 이동 시간, 주차 가능성, 조명 밝기, 코트 표면",
    drill: "후보 코트별로 2주간 예약 가능 시간과 실제 이동 시간을 기록한다.",
    internalLink: "/utility/tennis-time-availability-planner",
    internalLabel: "테니스 시간표 플래너",
    sourceName: "서울시 공공서비스예약",
    sourceUrl: "https://yeyak.seoul.go.kr",
    tags: ["서울 테니스장", "코트 예약", "입문자", "지역 정보"],
  },
  {
    slug: "winter-tennis-training",
    title: "겨울 테니스 훈련법",
    intent: "추운 날 부상 없이 감각을 유지하는 워밍업, 실내 전환, 짧은 랠리 훈련 기준",
    audience: "겨울에도 주 1회 이상 코트를 잡는 동호인",
    firstStep: "코트 입장 전 8분 동안 발목, 고관절, 어깨를 순서대로 올리고 첫 10분은 60% 강도로만 친다.",
    mistake: "몸이 덜 열린 상태에서 서브와 강한 포핸드를 바로 치는 것.",
    metric: "워밍업 시간, 첫 랠리 강도, 손끝 감각, 다음 날 팔꿈치 통증",
    drill: "미니 랠리 30구, 서비스라인 랠리 30구, 베이스라인 50% 랠리 30구 순서로 시작한다.",
    internalLink: "/utility/injury-risk",
    internalLabel: "부상 위험 체크",
    sourceName: "대한스포츠의학회",
    sourceUrl: "https://www.sportsmed.or.kr",
    tags: ["겨울 테니스", "워밍업", "부상 예방", "실내 코트"],
  },
  {
    slug: "tennis-mental-techniques",
    title: "테니스 멘탈 기법 5가지",
    intent: "중요한 포인트에서 긴장과 조급함을 줄이고 다음 샷 기준을 회복하는 루틴",
    audience: "연습 때보다 경기에서 범실이 늘어나는 선수",
    firstStep: "포인트가 끝난 뒤 바로 점수를 말하고, 라켓 줄을 정리한 뒤 다음 첫 샷 코스를 하나만 정한다.",
    mistake: "실점 이유를 계속 되감으며 다음 포인트의 준비 시간을 날리는 것.",
    metric: "포인트 사이 호흡 횟수, 첫 서브 목표 코스, 리턴 목표 깊이, 범실 후 회복 시간",
    drill: "연습 경기에서 실점 직후 10초 루틴을 강제로 적용하고 성공 여부를 체크한다.",
    internalLink: "/utility/match-analyzer",
    internalLabel: "경기 분석 도구",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["테니스 멘탈", "루틴", "경기 긴장", "집중력"],
  },
  {
    slug: "backhand-swing-correction",
    title: "백핸드 스윙 교정",
    intent: "백핸드가 뜨거나 밀릴 때 타점, 회전, 발 위치를 순서대로 교정하는 방법",
    audience: "백핸드 리턴과 랠리 안정성이 낮은 초중급자",
    firstStep: "공이 오기 전 어깨를 먼저 돌리고, 임팩트는 몸 옆이 아니라 앞발보다 한 뼘 앞에서 만든다.",
    mistake: "라켓을 손으로만 밀어 공을 맞히는 것.",
    metric: "준비 완료 시점, 앞발 고정, 임팩트 앞 위치, 팔꿈치 과사용 여부",
    drill: "서비스라인에서 크로스 백핸드 30구를 치며 네트 위 1m 높이를 목표로 한다.",
    internalLink: "/utility/swing-analyzer",
    internalLabel: "스윙 분석 도구",
    sourceName: "ITF Rules of Tennis",
    sourceUrl: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
    tags: ["백핸드", "스윙 교정", "타점", "투핸드"],
  },
  {
    slug: "racket-weight-styles",
    title: "라켓 무게별 경기 스타일",
    intent: "라켓 무게가 스윙 속도, 수비, 파워, 팔 부담에 주는 영향을 구분하는 기준",
    audience: "라켓 교체를 고민하는 초중급 동호인",
    firstStep: "현재 라켓으로 20분 경기 후 팔 피로와 늦은 타점이 얼마나 생기는지 기록한다.",
    mistake: "상급자 모델이라는 이유만으로 315g 이상 라켓을 고르는 것.",
    metric: "정적 무게, 스윙웨이트, 헤드 크기, 밸런스, 경기 후 피로",
    drill: "같은 공 30구를 285g, 300g, 315g 라켓으로 쳐보고 늦은 임팩트 수를 비교한다.",
    internalLink: "/utility/equipment-recommendation",
    internalLabel: "장비 추천 도구",
    sourceName: "USTA Player Development",
    sourceUrl: "https://www.usta.com/en/home/improve.html",
    tags: ["라켓 무게", "스윙웨이트", "장비 선택", "테니스 라켓"],
  },
  {
    slug: "tennis-grip-replacement",
    title: "테니스 그립 교체 주기",
    intent: "오버그립이 미끄러지기 전에 바꾸고 손목 부담을 줄이는 장비 관리 기준",
    audience: "손에 힘이 많이 들어가거나 손목이 쉽게 뻐근한 동호인",
    firstStep: "연습 뒤 그립 표면의 끈적임, 색 변화, 손바닥 미끄러짐을 바로 확인한다.",
    mistake: "그립이 완전히 찢어질 때까지 쓰는 것.",
    metric: "주당 플레이 횟수, 땀 배출량, 미끄러짐 횟수, 손목 피로도",
    drill: "새 그립과 오래된 그립으로 발리 20구를 쳐보고 라켓 흔들림을 비교한다.",
    internalLink: "/utility/equipment-maintenance-scheduler",
    internalLabel: "장비 관리 스케줄러",
    sourceName: "USTA Improve",
    sourceUrl: "https://www.usta.com/en/home/improve.html",
    tags: ["오버그립", "그립 교체", "손목 통증", "장비 관리"],
  },
  {
    slug: "forehand-body-balance",
    title: "포핸드 밸런스 교정",
    intent: "포핸드가 흔들릴 때 팔보다 몸통 축과 회복 발을 먼저 고치는 방법",
    audience: "강하게 치면 아웃이 늘고 수비 전환이 늦는 플레이어",
    firstStep: "임팩트 전 머리 높이를 유지하고, 스윙 뒤 바깥발로 회복하는지 확인한다.",
    mistake: "공을 세게 보내기 위해 상체가 먼저 앞으로 무너지는 것.",
    metric: "머리 높이, 임팩트 앞 거리, 회복 발 위치, 다음 공 준비 시간",
    drill: "크로스 포핸드 20구 뒤 중앙 회복을 반드시 넣어 한 세트로 반복한다.",
    internalLink: "/utility/swing-analyzer",
    internalLabel: "스윙 분석 도구",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["포핸드", "밸런스", "풋워크", "스윙 교정"],
  },
  {
    slug: "racket-care-mistakes",
    title: "라켓 관리 실수 5가지",
    intent: "라켓 성능과 수명을 떨어뜨리는 보관, 스트링, 그립 관리 습관을 줄이는 기준",
    audience: "라켓을 오래 쓰고 싶지만 관리 루틴이 없는 동호인",
    firstStep: "차 트렁크 보관을 중단하고, 경기 후 그립과 스트링 상태를 마른 수건으로 확인한다.",
    mistake: "라켓을 열과 습기에 반복 노출시키는 것.",
    metric: "보관 온도, 스트링 교체 주기, 그립 습기, 프레임 충격",
    drill: "장비 가방 안에 예비 그립, 마른 수건, 스트링 교체 메모를 넣어둔다.",
    internalLink: "/utility/string-replacement-reminder",
    internalLabel: "스트링 교체 알림",
    sourceName: "USTA Improve",
    sourceUrl: "https://www.usta.com/en/home/improve.html",
    tags: ["라켓 관리", "스트링", "오버그립", "장비 수명"],
  },
  {
    slug: "string-tension-feel-guide",
    title: "스트링 텐션 감각 가이드",
    intent: "텐션 숫자보다 타구감, 팔 부담, 컨트롤 감각으로 스트링을 조정하는 기준",
    audience: "텐션을 바꿔도 차이를 설명하기 어려운 동호인",
    firstStep: "현재 텐션에서 공이 길어지는지, 팔이 아픈지, 중심 타격이 줄었는지 세 가지를 기록한다.",
    mistake: "프로 선수 텐션을 그대로 따라 하는 것.",
    metric: "공 깊이, 팔꿈치 피로, 스핀량, 중심 타격률, 텐션 유지 기간",
    drill: "같은 라켓에서 2파운드 단위로만 조정하고 두 경기 이상 기록한다.",
    internalLink: "/utility/string-tension",
    internalLabel: "스트링 텐션 계산기",
    sourceName: "ITF Rules and Equipment",
    sourceUrl: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
    tags: ["스트링 텐션", "타구감", "장비 선택", "팔 부담"],
  },
  {
    slug: "common-tennis-racket-mistakes",
    title: "테니스 라켓 선택 실수 5가지",
    intent: "초보자가 라켓을 고를 때 흔히 놓치는 무게, 그립, 스트링, 교체 비용 기준",
    audience: "첫 라켓 또는 두 번째 라켓을 사려는 성인 입문자",
    firstStep: "후보 라켓을 무게별로 3개만 고르고 20분 이상 실제 스윙해본다.",
    mistake: "디자인과 할인율만 보고 라켓을 고르는 것.",
    metric: "라켓 무게, 헤드 크기, 그립 크기, 스트링 비용, 팔 피로도",
    drill: "후보 라켓별로 포핸드 20구와 리턴 20구를 쳐보고 늦은 타점을 표시한다.",
    internalLink: "/utility/equipment-recommendation",
    internalLabel: "장비 추천 도구",
    sourceName: "USTA Improve",
    sourceUrl: "https://www.usta.com/en/home/improve.html",
    tags: ["라켓 추천", "초보자 라켓", "그립 크기", "장비 선택"],
  },
  {
    slug: "alcaraz-vs-sinner-analysis",
    title: "알카라스 vs 시너 분석",
    intent: "알카라스의 변주와 시너의 템포가 어떻게 다른 승리 공식을 만드는지 비교",
    audience: "프로 경기 분석을 실전 전술로 바꾸고 싶은 팬과 동호인",
    firstStep: "두 선수의 하이라이트를 볼 때 위너보다 리턴 위치와 두 번째 샷 방향을 먼저 본다.",
    mistake: "화려한 샷만 따라 하고 포인트 설계 방식을 놓치는 것.",
    metric: "리턴 깊이, 전환 속도, 첫 공격 위치, 백핸드 크로스 안정성",
    drill: "한 세트 동안 첫 공격을 크로스 깊이로 시작하는 패턴만 연습한다.",
    internalLink: "/utility/opponent-analyzer",
    internalLabel: "상대 분석 도구",
    sourceName: "ATP Tour",
    sourceUrl: "https://www.atptour.com",
    tags: ["알카라스", "시너", "ATP", "테니스 전술"],
  },
  {
    slug: "best-tennis-rackets-2024",
    title: "2024 라켓 추천을 다시 보는 법",
    intent: "과거 인기 모델 목록을 현재 자신의 스윙과 부상 이력에 맞춰 재해석하는 기준",
    audience: "추천 글을 많이 봤지만 결국 어떤 라켓이 맞는지 헷갈리는 구매자",
    firstStep: "추천 순위 대신 내 스윙 속도, 팔꿈치 이력, 주 플레이 코트를 먼저 적는다.",
    mistake: "상급자용 컨트롤 라켓을 쓰면 바로 실력이 오를 것이라고 믿는 것.",
    metric: "스윙 속도, 중심 타격률, 팔 부담, 스트링 조합, 중고 가격",
    drill: "후보 2개만 빌려 같은 공 50구를 치고 길이 오차를 기록한다.",
    internalLink: "/utility/equipment-recommendation",
    internalLabel: "장비 추천 도구",
    sourceName: "USTA Improve",
    sourceUrl: "https://www.usta.com/en/home/improve.html",
    tags: ["테니스 라켓 추천", "라켓 리뷰", "장비 선택", "초보자"],
  },
  {
    slug: "tennis-elbow-prevention",
    title: "테니스 엘보 예방",
    intent: "팔꿈치 통증이 생기기 전 스트링, 그립, 스윙 타이밍, 회복 상태를 점검하는 법",
    audience: "경기 후 팔꿈치 바깥쪽이 뻐근한 동호인",
    firstStep: "통증이 있는 날은 강한 서브와 늦은 포핸드를 줄이고 장비 상태를 먼저 확인한다.",
    mistake: "통증을 참고 계속 치면 적응될 것이라고 생각하는 것.",
    metric: "통증 위치, 통증 지속 시간, 스트링 경도, 그립 미끄러짐, 회복 수면",
    drill: "포핸드 20구를 60% 강도로 치며 늦은 타점과 팔꿈치 충격을 표시한다.",
    internalLink: "/utility/injury-risk",
    internalLabel: "부상 위험 체크",
    sourceName: "Mayo Clinic",
    sourceUrl: "https://www.mayoclinic.org/diseases-conditions/tennis-elbow/symptoms-causes/syc-20351987",
    tags: ["테니스 엘보", "팔꿈치 통증", "부상 예방", "스트레칭"],
  },
  {
    slug: "clay-season-preparation-korea",
    title: "클레이 시즌 준비",
    intent: "클레이 코트에서 긴 랠리, 높은 바운드, 미끄러짐에 적응하는 준비 루틴",
    audience: "하드코트 중심으로 치다가 클레이 경기를 앞둔 동호인",
    firstStep: "첫 주에는 승부보다 공 높이와 회복 위치를 우선해 랠리 길이를 늘린다.",
    mistake: "하드코트처럼 낮고 빠른 타이밍만 고집하는 것.",
    metric: "공 높이, 회전량, 미끄러짐 후 균형, 랠리 평균 구수",
    drill: "크로스 랠리 20구 목표를 잡고 네트 위 1.5m 높이를 통과시킨다.",
    internalLink: "/utility/court-surface-advisor",
    internalLabel: "코트 표면 가이드",
    sourceName: "ITF Rules of Tennis",
    sourceUrl: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
    tags: ["클레이 코트", "스핀", "슬라이딩", "시즌 준비"],
  },
  {
    slug: "doubles-positioning-common-errors",
    title: "복식 포지션 실수",
    intent: "전위와 후위가 서로를 힘들게 만드는 위치 실수를 줄이는 복식 기준",
    audience: "복식에서 파트너와 동선이 자주 겹치는 플레이어",
    firstStep: "서브 전 포칭 여부, 리턴 방향, 로브 대응을 한 문장으로 맞춘다.",
    mistake: "공만 따라가고 파트너가 커버할 공간을 보지 않는 것.",
    metric: "전위 위치, 중앙 커버, 로브 대응, 콜 횟수, 포칭 성공률",
    drill: "한 게임 동안 전위가 중앙을 좁히는 타이밍만 체크한다.",
    internalLink: "/utility/doubles-chemistry-test",
    internalLabel: "복식 궁합 테스트",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["복식", "포지션", "전위", "파트너"],
  },
  {
    slug: "serve-speed-without-injury",
    title: "서브 속도 올리기",
    intent: "어깨와 팔꿈치 부담을 줄이면서 서브 속도를 높이는 순서",
    audience: "서브를 세게 치면 어깨가 아프거나 확률이 떨어지는 선수",
    firstStep: "토스를 머리 위가 아니라 앞쪽으로 일정하게 놓고 하체 반동부터 연결한다.",
    mistake: "팔만 빠르게 휘두르면 속도가 오른다고 생각하는 것.",
    metric: "토스 위치, 첫 서브 확률, 어깨 통증, 착지 균형, 코스 정확도",
    drill: "속도보다 같은 토스 20회 성공을 먼저 목표로 하고 이후 코스를 나눈다.",
    internalLink: "/utility/serve-velocity-calculator",
    internalLabel: "서브 속도 계산기",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["서브", "토스", "어깨 부상", "파워"],
  },
  {
    slug: "weekend-tournament-checklist",
    title: "주말 테니스 대회 체크리스트",
    intent: "동호인 대회 당일 준비물, 대기 시간, 경기 운영을 놓치지 않는 체크 기준",
    audience: "주말 대회에서 실력보다 컨디션 관리가 흔들리는 참가자",
    firstStep: "전날 장비, 물, 간식, 여벌 옷, 스트링 상태를 한 번에 확인한다.",
    mistake: "첫 경기 전부터 너무 오래 강하게 몸을 푸는 것.",
    metric: "수분 섭취, 대기 시간, 첫 서브 확률, 예비 장비, 식사 간격",
    drill: "대회 전 연습 경기에서 실제 대기 시간을 넣어 루틴을 실험한다.",
    internalLink: "/utility/match-recorder",
    internalLabel: "경기 기록 도구",
    sourceName: "ITF Rules of Tennis",
    sourceUrl: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
    tags: ["테니스 대회", "체크리스트", "경기 준비", "동호인"],
  },
  {
    slug: "tennis-ball-selection-guide-korea",
    title: "테니스공 선택 가이드",
    intent: "연습공과 시합구를 코트 표면, 압력 유지, 훈련 목적에 맞춰 고르는 기준",
    audience: "동호회 공 구매를 맡거나 연습공 선택이 어려운 사람",
    firstStep: "사용 코트와 평균 사용 시간을 먼저 정하고, 새 공 개봉 주기를 맞춘다.",
    mistake: "가장 싼 공을 대량 구매해 압력이 빠진 상태로 오래 쓰는 것.",
    metric: "압력 유지, 펠트 마모, 코트 표면, 사용 시간, 가격 대비 지속성",
    drill: "새 공과 2회 사용한 공으로 랠리 높이와 길이를 비교한다.",
    internalLink: "/utility/practice-drill-generator",
    internalLabel: "연습 드릴 생성기",
    sourceName: "ITF Approved Balls",
    sourceUrl: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
    tags: ["테니스공", "연습공", "시합구", "장비 선택"],
  },
  {
    slug: "indoor-court-booking-tips",
    title: "실내 테니스장 예약 팁",
    intent: "비와 추위를 피하면서 실내 코트를 효율적으로 예약하고 비용을 줄이는 방법",
    audience: "평일 저녁이나 주말 실내 코트를 구하려는 동호인",
    firstStep: "고정 시간대 하나와 대체 시간대 두 개를 정해 예약 경쟁을 분산한다.",
    mistake: "인기 시간만 반복적으로 노리고 예약 실패를 누적하는 것.",
    metric: "시간대, 대관 비용, 취소 규정, 주차, 천장 높이",
    drill: "한 달 동안 예약 성공 시간대를 표로 남겨 다음 달 패턴을 만든다.",
    internalLink: "/utility/tennis-time-availability-planner",
    internalLabel: "테니스 시간표 플래너",
    sourceName: "서울시 공공서비스예약",
    sourceUrl: "https://yeyak.seoul.go.kr",
    tags: ["실내 테니스장", "예약", "대관", "레슨"],
  },
  {
    slug: "beginner-match-first-win-plan",
    title: "초보 첫 승 플랜",
    intent: "초보자가 화려한 위너보다 범실 감소와 안전한 패턴으로 첫 승을 만드는 법",
    audience: "랠리는 되지만 실제 경기 승리가 어려운 입문자",
    firstStep: "첫 세 게임은 위너를 노리지 않고 크로스 깊이와 세컨드 서브 인을 목표로 한다.",
    mistake: "상대보다 멋진 샷을 쳐야 이길 수 있다고 생각하는 것.",
    metric: "더블폴트, 리턴 인, 네트 앞 실수, 첫 공격 코스, 범실 수",
    drill: "한 세트 동안 위너보다 범실 수를 기록하고 10개 이하를 목표로 한다.",
    internalLink: "/utility/unforced-error-audit",
    internalLabel: "범실 점검 도구",
    sourceName: "USTA Improve",
    sourceUrl: "https://www.usta.com/en/home/improve.html",
    tags: ["초보 테니스", "첫 승", "범실 줄이기", "경기 운영"],
  },
  {
    slug: "adult-beginner-first-racket-guide",
    title: "성인 입문 첫 라켓 가이드",
    intent: "성인 입문자가 다치지 않고 오래 쓸 첫 라켓을 고르는 무게, 헤드, 그립 기준",
    audience: "레슨을 시작했거나 첫 라켓 구매를 앞둔 성인",
    firstStep: "280~300g 라켓을 먼저 시타하고 팔꿈치 부담과 중심 타격률을 확인한다.",
    mistake: "프로가 쓰는 무거운 라켓을 입문 장비로 고르는 것.",
    metric: "정적 무게, 헤드 크기, 그립 크기, 스트링 종류, 시타 피로도",
    drill: "시타 때 포핸드보다 리턴과 발리를 같이 해 라켓 조작성을 확인한다.",
    internalLink: "/utility/equipment-recommendation",
    internalLabel: "장비 추천 도구",
    sourceName: "USTA Improve",
    sourceUrl: "https://www.usta.com/en/home/improve.html",
    tags: ["입문 라켓", "성인 테니스", "라켓 무게", "그립"],
  },
  {
    slug: "tennis-lesson-before-after-practice-guide",
    title: "레슨 전후 연습 가이드",
    intent: "레슨에서 배운 기술을 다음 경기까지 남기기 위한 전후 15분 복습 루틴",
    audience: "레슨은 받지만 실전에서 같은 실수가 반복되는 사람",
    firstStep: "레슨 전에는 지난주 과제 1개만 확인하고, 레슨 후에는 같은 동작을 천천히 30회 반복한다.",
    mistake: "레슨 직후 바로 게임만 하며 새 동작을 무너뜨리는 것.",
    metric: "복습 횟수, 코치 피드백 한 줄, 성공 구질, 실전 적용 여부",
    drill: "레슨 후 15분 동안 오늘 고친 동작만 영상으로 남긴다.",
    internalLink: "/utility/training-planner",
    internalLabel: "훈련 플래너",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["테니스 레슨", "복습", "연습 루틴", "초보자"],
  },
  {
    slug: "serve-routine-20-minute-guide",
    title: "20분 서브 루틴",
    intent: "짧은 시간 안에 토스, 코스, 세컨드 서브 확률을 같이 올리는 훈련 순서",
    audience: "서브 연습 시간이 부족한 주말 플레이어",
    firstStep: "처음 5분은 공을 치지 않고 같은 토스와 착지 균형만 반복한다.",
    mistake: "첫 공부터 속도를 올려 토스와 어깨 리듬을 잃는 것.",
    metric: "토스 편차, 첫 서브 확률, 세컨드 깊이, 착지 균형",
    drill: "5분 토스, 5분 보디 서브, 5분 와이드, 5분 세컨드 서브로 나눈다.",
    internalLink: "/utility/serve-placement-mapper",
    internalLabel: "서브 코스 매핑",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["서브 루틴", "토스", "세컨드 서브", "코스"],
  },
  {
    slug: "forehand-topspin-home-drill-guide",
    title: "포핸드 탑스핀 홈드릴",
    intent: "코트 밖에서 라켓면, 손목 각도, 몸통 회전 감각을 유지하는 안전한 연습법",
    audience: "코트 시간이 부족하지만 포핸드 감각을 잃고 싶지 않은 사람",
    firstStep: "거울 앞에서 라켓면이 닫히지 않게 유지하며 낮은 곳에서 높은 곳으로 천천히 올린다.",
    mistake: "좁은 실내에서 실제 공을 강하게 치는 것.",
    metric: "라켓면 각도, 임팩트 앞 위치, 어깨 회전, 손목 고정",
    drill: "수건 스윙 20회, 그림자 스윙 20회, 느린 피니시 20회를 반복한다.",
    internalLink: "/utility/practice-wall-drill-planner",
    internalLabel: "벽치기 드릴 플래너",
    sourceName: "USTA Improve",
    sourceUrl: "https://www.usta.com/en/home/improve.html",
    tags: ["포핸드", "탑스핀", "홈트레이닝", "스윙"],
  },
  {
    slug: "two-handed-backhand-stability-guide",
    title: "투핸드 백핸드 안정화",
    intent: "투핸드 백핸드에서 비주도 손과 몸통 회전으로 안정성을 만드는 법",
    audience: "백핸드가 짧거나 네트에 자주 걸리는 플레이어",
    firstStep: "라켓을 뒤로 빼기 전 어깨를 먼저 돌리고 비주도 손으로 라켓 경로를 이끈다.",
    mistake: "두 손으로 라켓을 밀기만 해서 공이 뜨거나 짧아지는 것.",
    metric: "어깨 회전, 왼손 주도, 타점 앞 위치, 크로스 깊이",
    drill: "서비스라인에서 크로스 30구를 네트 위 1m 높이로 통과시킨다.",
    internalLink: "/utility/swing-analyzer",
    internalLabel: "스윙 분석 도구",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["투핸드 백핸드", "백핸드", "왼손", "회전"],
  },
  {
    slug: "volley-touch-practice-guide",
    title: "발리 터치 연습",
    intent: "네트 앞에서 큰 스윙 없이 라켓면과 발 위치로 각도를 만드는 법",
    audience: "복식 전위에서 발리가 뜨거나 길어지는 사람",
    firstStep: "라켓을 뒤로 빼지 않고 손목을 고정한 채 발로 공과의 거리를 맞춘다.",
    mistake: "발리를 포핸드처럼 크게 휘두르는 것.",
    metric: "라켓면 안정, 발 첫걸음, 임팩트 앞 위치, 네트 위 높이",
    drill: "서비스박스 안에서 짧은 발리 30구와 깊은 발리 30구를 나눠 친다.",
    internalLink: "/utility/partner-compatibility-check",
    internalLabel: "복식 파트너 체크",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["발리", "네트 플레이", "터치", "복식"],
  },
  {
    slug: "doubles-communication-signal-guide",
    title: "복식 신호와 소통 가이드",
    intent: "포칭, 스테이, 스위치를 파트너와 짧게 맞추는 손 신호와 콜 기준",
    audience: "복식에서 약속이 없어 실점 후 말이 길어지는 팀",
    firstStep: "서브 전 포칭 여부와 리턴 방향을 손 신호 하나와 짧은 콜 하나로 정한다.",
    mistake: "실점 후에야 서로의 의도를 설명하는 것.",
    metric: "콜 횟수, 포칭 성공률, 중앙 충돌, 로브 커버, 파트너 만족도",
    drill: "한 세트 동안 신호 2개만 쓰고 성공과 실패를 기록한다.",
    internalLink: "/utility/doubles-chemistry-test",
    internalLabel: "복식 궁합 테스트",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["복식 신호", "포칭", "스위치", "파트너"],
  },
  {
    slug: "tennis-shoe-court-surface-guide",
    title: "테니스화 선택 가이드",
    intent: "하드, 클레이, 올코트용 테니스화의 밑창과 지지력 차이를 구분하는 법",
    audience: "러닝화로 테니스를 치거나 코트별 신발 차이를 모르는 입문자",
    firstStep: "자주 치는 코트 표면을 먼저 확인하고 밑창 패턴과 좌우 지지력을 본다.",
    mistake: "가벼운 러닝화를 테니스화 대신 쓰는 것.",
    metric: "밑창 패턴, 좌우 지지력, 쿠셔닝, 발볼, 코트 표면",
    drill: "사이드스텝 10회와 급정지 10회를 해 발이 신발 안에서 밀리는지 확인한다.",
    internalLink: "/utility/shoe-recommender",
    internalLabel: "테니스화 추천 도구",
    sourceName: "USTA Improve",
    sourceUrl: "https://www.usta.com/en/home/improve.html",
    tags: ["테니스화", "하드코트", "클레이코트", "신발 추천"],
  },
  {
    slug: "recovery-stretching-after-match-guide",
    title: "경기 후 회복 스트레칭",
    intent: "경기 직후 하체, 허리, 어깨를 순서대로 풀어 다음 날 통증을 줄이는 루틴",
    audience: "테니스 다음 날 종아리와 허리가 자주 뻐근한 동호인",
    firstStep: "경기 직후 5분 걷고, 종아리와 고관절을 먼저 풀고, 마지막에 어깨를 정리한다.",
    mistake: "경기 끝나자마자 오래 앉아 몸을 식히는 것.",
    metric: "쿨다운 시간, 수분 섭취, 다음 날 통증, 수면 질",
    drill: "종아리 60초, 햄스트링 60초, 고관절 60초, 어깨 60초를 두 바퀴 반복한다.",
    internalLink: "/utility/sleep-readiness-check",
    internalLabel: "수면 회복 체크",
    sourceName: "대한스포츠의학회",
    sourceUrl: "https://www.sportsmed.or.kr",
    tags: ["회복", "스트레칭", "쿨다운", "부상 예방"],
  },
  {
    slug: "match-note-template-guide",
    title: "테니스 경기 노트 작성법",
    intent: "경기 후 기억이 사라지기 전에 실점 패턴과 다음 훈련 과제를 남기는 방법",
    audience: "비슷한 패턴으로 지는데 이유를 정리하지 못하는 사람",
    firstStep: "경기 직후 점수보다 실점이 많았던 상황 3개를 먼저 적는다.",
    mistake: "감정만 적고 다음 훈련 주제를 뽑지 않는 것.",
    metric: "더블폴트, 리턴 실수, 짧은 공 처리, 네트 접근, 멘탈 회복",
    drill: "매 경기 후 3분 안에 잘된 것 1개와 고칠 것 1개만 기록한다.",
    internalLink: "/utility/match-video-review-template",
    internalLabel: "경기 영상 복기 템플릿",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["경기 노트", "복기", "훈련 계획", "분석"],
  },
  {
    slug: "return-serve-short-backswing-guide",
    title: "서브 리턴 짧은 백스윙",
    intent: "빠른 서브를 상대로 큰 스윙을 줄이고 깊은 리턴을 만드는 기준",
    audience: "강한 서브를 만나면 리턴이 늦는 플레이어",
    firstStep: "상대 토스가 올라갈 때 스플릿스텝을 끝내고 라켓은 몸 앞에서 짧게 준비한다.",
    mistake: "리턴도 일반 스트로크처럼 크게 휘두르는 것.",
    metric: "스플릿스텝 시점, 백스윙 크기, 리턴 깊이, 중심 타격",
    drill: "서비스라인 안쪽에서 빠른 피드 30구를 짧은 백스윙으로 블록한다.",
    internalLink: "/utility/return-position-calculator",
    internalLabel: "리턴 위치 계산기",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["서브 리턴", "백스윙", "리턴 위치", "반응"],
  },
  {
    slug: "lob-defense-transition-guide",
    title: "로브 수비 전환 가이드",
    intent: "밀리는 상황에서 로브로 시간을 벌고 다시 중립 위치로 돌아오는 방법",
    audience: "상대가 네트로 들어오면 급하게 실수하는 플레이어",
    firstStep: "완전히 밀린 공은 낮게 때리지 말고 높이와 깊이로 시간을 먼저 산다.",
    mistake: "불리한 자세에서 무리하게 패싱샷을 노리는 것.",
    metric: "로브 높이, 베이스라인 깊이, 회복 시간, 상대 스매시 위치",
    drill: "수비 로브 20구 뒤 중앙 회복을 반드시 넣어 한 세트로 반복한다.",
    internalLink: "/utility/shot-selection-trainer",
    internalLabel: "샷 선택 훈련기",
    sourceName: "ITF Rules of Tennis",
    sourceUrl: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
    tags: ["로브", "수비", "전환", "복식"],
  },
  {
    slug: "drop-shot-selection-guide",
    title: "드롭샷 선택 가이드",
    intent: "드롭샷을 써야 할 상황과 버려야 할 상황을 구분하는 판단 기준",
    audience: "드롭샷을 좋아하지만 성공률이 낮은 플레이어",
    firstStep: "상대가 베이스라인 뒤에 있고 내가 균형 잡힌 상태일 때만 선택한다.",
    mistake: "불리한 자세에서 분위기를 바꾸려고 드롭샷을 쓰는 것.",
    metric: "상대 위치, 내 균형, 이전 샷 깊이, 네트 통과 높이",
    drill: "깊은 크로스 2개 뒤 드롭샷 1개 패턴을 10회 반복한다.",
    internalLink: "/utility/shot-selection-trainer",
    internalLabel: "샷 선택 훈련기",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["드롭샷", "전술", "상황 판단", "터치"],
  },
  {
    slug: "tournament-day-food-guide",
    title: "대회 당일 식사 가이드",
    intent: "동호인 대회 날 속을 편하게 유지하면서 에너지를 떨어뜨리지 않는 식사 기준",
    audience: "대회 중 속이 불편하거나 후반 체력이 급격히 떨어지는 선수",
    firstStep: "경기 3시간 전에는 익숙한 탄수화물과 소량 단백질을 먹고 낯선 음식은 피한다.",
    mistake: "에너지 보충을 이유로 평소 먹지 않던 보충제를 시도하는 것.",
    metric: "식사 시간, 수분 섭취, 당 보충, 위장 불편, 경기 간 대기 시간",
    drill: "연습 경기 날 실제 대회 식단을 미리 테스트하고 몸 반응을 기록한다.",
    internalLink: "/utility/nutrition-guide/test",
    internalLabel: "영양 가이드 테스트",
    sourceName: "대한스포츠의학회",
    sourceUrl: "https://www.sportsmed.or.kr",
    tags: ["대회 식사", "에너지", "수분", "동호인 대회"],
  },
  {
    slug: "rain-day-indoor-training-guide",
    title: "비 오는 날 실내 훈련",
    intent: "코트가 없어도 풋워크, 라켓면, 코어 회전 감각을 유지하는 30분 루틴",
    audience: "비 때문에 연습 흐름이 자주 끊기는 동호인",
    firstStep: "점프보다 미끄럽지 않은 공간에서 사이드스텝과 그림자 스윙을 낮은 강도로 시작한다.",
    mistake: "실내에서 소음과 충돌 위험을 무시하고 실제 공을 강하게 치는 것.",
    metric: "공간 안전, 발 착지 소리, 라켓면 각도, 코어 회전, 호흡",
    drill: "사이드스텝 5분, 그림자 스윙 10분, 코어 회전 10분, 스트레칭 5분으로 구성한다.",
    internalLink: "/utility/practice-drill-generator",
    internalLabel: "연습 드릴 생성기",
    sourceName: "USTA Improve",
    sourceUrl: "https://www.usta.com/en/home/improve.html",
    tags: ["실내 훈련", "비 오는 날", "풋워크", "라켓면"],
  },
  {
    slug: "string-replacement-cycle-guide",
    title: "스트링 교체 주기 가이드",
    intent: "스트링이 끊어지기 전에 텐션 손실과 팔 부담을 기준으로 교체하는 법",
    audience: "스트링 교체 시점을 감으로만 정하는 플레이어",
    firstStep: "스트링을 맨 날짜와 플레이 횟수를 기록하고 타구음 변화를 체크한다.",
    mistake: "끊어질 때까지 쓰면 경제적이라고 생각하는 것.",
    metric: "플레이 횟수, 타구음, 공 깊이, 팔꿈치 부담, 텐션 손실",
    drill: "교체 전후 같은 공 30구를 쳐서 길이와 팔 부담을 비교한다.",
    internalLink: "/utility/string-replacement-reminder",
    internalLabel: "스트링 교체 알림",
    sourceName: "ITF Rules and Equipment",
    sourceUrl: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
    tags: ["스트링 교체", "텐션", "라켓 관리", "팔 부담"],
  },
  {
    slug: "grip-size-check-guide",
    title: "그립 사이즈 확인법",
    intent: "손 크기와 스윙 감각에 맞는 그립 크기를 찾아 손목과 팔꿈치 부담을 줄이는 법",
    audience: "라켓을 잡을 때 손에 힘이 과하게 들어가는 사람",
    firstStep: "기본 그립을 잡고 손가락과 손바닥 사이 공간이 너무 넓거나 좁은지 본다.",
    mistake: "작은 그립에 오버그립만 계속 감아 해결하려는 것.",
    metric: "손가락 공간, 라켓 회전, 손목 피로, 포핸드 면 안정",
    drill: "서브 10개와 포핸드 20구를 쳐보고 라켓이 손안에서 도는지 확인한다.",
    internalLink: "/utility/equipment-recommendation",
    internalLabel: "장비 추천 도구",
    sourceName: "USTA Improve",
    sourceUrl: "https://www.usta.com/en/home/improve.html",
    tags: ["그립 사이즈", "라켓 선택", "손목", "팔꿈치"],
  },
  {
    slug: "slice-backhand-control-guide",
    title: "슬라이스 백핸드 컨트롤",
    intent: "슬라이스 백핸드를 낮고 길게 보내며 수비와 전환에 활용하는 법",
    audience: "백핸드 압박 상황에서 공이 뜨거나 짧아지는 플레이어",
    firstStep: "라켓면을 열어놓되 손목을 고정하고 몸이 공 앞으로 들어간다.",
    mistake: "공을 아래로 세게 깎기만 하면 낮아질 것이라고 생각하는 것.",
    metric: "라켓면 각도, 전진 이동, 네트 통과 높이, 공 깊이",
    drill: "크로스 슬라이스 20구를 서비스라인 뒤에 떨어뜨리는 목표로 반복한다.",
    internalLink: "/utility/swing-analyzer",
    internalLabel: "스윙 분석 도구",
    sourceName: "ITF Coaching",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/coaching/",
    tags: ["슬라이스", "백핸드", "컨트롤", "수비"],
  },
  {
    slug: "junior-parent-tennis-guide",
    title: "주니어 테니스 부모 가이드",
    intent: "주니어가 오래 즐기고 안전하게 성장하도록 부모가 봐야 할 레슨과 대회 기준",
    audience: "자녀의 테니스 시작과 훈련량을 고민하는 보호자",
    firstStep: "승패보다 수면, 통증, 즐거움, 기본기 반복을 먼저 확인한다.",
    mistake: "어릴수록 경기 수를 많이 늘리면 성장한다고 믿는 것.",
    metric: "훈련 시간, 통증 유무, 즐거움, 학교 생활, 기본기 반복",
    drill: "한 달마다 아이가 좋아한 훈련과 힘들었던 훈련을 각각 하나씩 물어본다.",
    internalLink: "/utility/goal-setting",
    internalLabel: "테니스 목표 설정",
    sourceName: "ITF Junior Tennis Initiative",
    sourceUrl: "https://www.itftennis.com/en/growing-the-game/junior-tennis-initiative/",
    tags: ["주니어 테니스", "부모 가이드", "레슨", "성장"],
  },
  {
    slug: "senior-tennis-injury-safe-guide",
    title: "시니어 테니스 안전 가이드",
    intent: "시니어 플레이어가 관절 부담을 줄이고 오래 즐기기 위한 강도와 회복 기준",
    audience: "무리하지 않으면서 꾸준히 테니스를 치고 싶은 시니어",
    firstStep: "경기 전후 통증 변화를 기록하고, 연속 경기보다 회복일을 먼저 확보한다.",
    mistake: "젊을 때 하던 강도와 경기 수를 그대로 유지하는 것.",
    metric: "통증 지속 시간, 회복일, 워밍업 시간, 경기 강도, 수면",
    drill: "랠리 강도 70% 이하로 20분 치고 다음 날 몸 상태를 기록한다.",
    internalLink: "/utility/injury-risk",
    internalLabel: "부상 위험 체크",
    sourceName: "대한스포츠의학회",
    sourceUrl: "https://www.sportsmed.or.kr",
    tags: ["시니어 테니스", "부상 예방", "회복", "운동 강도"],
  },
];

const buildContent = (topic: ScheduledTopic) => `
  <p>이 글은 ${topic.intent}을 정리합니다. 대상 독자가 ${topic.audience}인 경우, 먼저 기준을 단순하게 줄이는 것이 중요합니다. 테니스는 한 번에 많은 것을 고치려 할수록 경기 중 판단이 늦어집니다.</p>

  <div class="tf-tldr">
    <p class="tf-tldr-title">핵심 요약</p>
    <ul>
      <li>${topic.firstStep}</li>
      <li>가장 흔한 실수는 ${topic.mistake}</li>
      <li>측정 기준은 ${topic.metric}입니다.</li>
    </ul>
  </div>

  <h2>${topic.title}에서 가장 먼저 볼 기준</h2>
  <p>${topic.firstStep} 이 기준이 있어야 장비, 레슨, 전술, 컨디션을 따로 보지 않고 하나의 흐름으로 판단할 수 있습니다. 반대로 기준 없이 유명한 방법만 따라 하면 잠깐 좋아지는 듯해도 경기에서는 다시 원래 습관으로 돌아갑니다.</p>

  <h2>많이 하는 실수와 바로잡는 순서</h2>
  <p>${topic.mistake} 이 실수는 초보에게만 생기지 않습니다. 중급자도 컨디션이 떨어지거나 점수가 급해지면 같은 방식으로 무너집니다. 해결은 새 기술을 추가하는 것이 아니라, 이미 가진 동작을 더 늦게 무너지게 만드는 쪽에 있습니다.</p>
  <table>
    <thead>
      <tr><th>점검 항목</th><th>확인 방법</th><th>좋은 신호</th></tr>
    </thead>
    <tbody>
      <tr><td>기준</td><td>${topic.metric}</td><td>기록이 숫자나 짧은 문장으로 남는다</td></tr>
      <tr><td>훈련</td><td>${topic.drill}</td><td>성공과 실패 원인이 분리된다</td></tr>
      <tr><td>복기</td><td>경기 직후 한 줄 메모</td><td>다음 연습 과제가 하나로 좁혀진다</td></tr>
    </tbody>
  </table>

  <h2>실전 적용 루틴</h2>
  <ol>
    <li>오늘의 목표를 하나만 정합니다. 예를 들어 깊이, 첫 서브 확률, 회복 위치처럼 바로 관찰 가능한 항목이어야 합니다.</li>
    <li>연습 중간에 결과를 바꾸려 하지 말고 같은 기준으로 20~30구를 반복합니다.</li>
    <li>마지막 5분은 경기 상황처럼 점수를 붙여 기준이 유지되는지 확인합니다.</li>
  </ol>

  <h2>함께 쓰면 좋은 도구와 참고 자료</h2>
  <p>사이트 안에서는 <a href="${topic.internalLink}">${topic.internalLabel}</a>로 현재 상태를 기록해보세요. 외부 기준은 <a href="${topic.sourceUrl}" rel="noopener noreferrer">${topic.sourceName}</a> 자료를 함께 보면 규칙과 훈련 방향을 더 안정적으로 잡을 수 있습니다.</p>

  <h2>마무리</h2>
  <p>${topic.title}의 핵심은 더 많은 정보를 모으는 것이 아니라, 다음 경기에서 하나의 판단 기준을 유지하는 것입니다. 기록할 수 있는 기준만 남기고 나머지는 과감히 줄이면 실력 변화가 훨씬 선명하게 보입니다.</p>
`;

const featuredArticleOverrides: Record<string, BlogContentEntry> = {
  "indoor-court-booking-tips": {
    summary:
      "실내 테니스장은 날씨 영향을 줄여주지만 예약 경쟁과 비용이 야외 코트보다 높습니다. 평일 낮, 평일 늦은 밤, 레슨 공백 시간, 취소표를 나눠 보면 같은 예산으로 더 자주 칠 수 있습니다.",
    highlight:
      "실내 코트 예약은 가장 좋은 시간 하나를 맞히는 문제가 아니라 실패해도 바로 전환할 대체 시간대를 준비하는 문제입니다.",
    tags: ["실내 테니스장", "코트 예약", "대관", "레슨"],
    content: `
      <p>실내 테니스장은 비, 추위, 미세먼지 영향을 줄여줍니다. 대신 인기 시간대가 좁고 가격이 높으며, 레슨과 대관 시간이 섞여 있어 빈자리를 찾기가 쉽지 않습니다. 그래서 예약 팁의 핵심은 더 빨리 누르는 것이 아니라 시간대를 분산하는 것입니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>평일 저녁 19~21시만 노리면 실패 확률이 높습니다. 평일 낮, 늦은 밤, 주말 이른 오전을 같이 봐야 합니다.</li>
          <li>실내 코트 비용은 대관료뿐 아니라 레슨비, 조명·주차, 취소 위약금까지 합쳐 계산해야 합니다.</li>
          <li>입문자는 천장 높이, 코트 간격, 공 튐, 환기, 대기 공간을 먼저 확인하면 만족도가 높습니다.</li>
        </ul>
      </div>
      <h2>실내 테니스장 예약이 어려운 이유</h2>
      <p>실내 코트는 날씨와 계절을 덜 타기 때문에 겨울, 장마철, 미세먼지 시즌에 수요가 몰립니다. 특히 직장인이 몰리는 평일 저녁과 주말 오전은 레슨, 동호회, 개인 대관이 겹칩니다. 예약 성공률을 높이려면 인기 시간 하나만 고집하지 말고, 고정 시간대 1개와 대체 시간대 2개를 정해야 합니다.</p>
      <table>
        <thead><tr><th>시간대</th><th>장점</th><th>주의할 점</th></tr></thead>
        <tbody>
          <tr><td>평일 낮</td><td>비교적 여유 있고 비용 협의 여지가 있음</td><td>직장인은 일정 조정 필요</td></tr>
          <tr><td>평일 19~21시</td><td>퇴근 후 접근성이 좋음</td><td>가장 경쟁이 치열하고 레슨과 겹침</td></tr>
          <tr><td>평일 21시 이후</td><td>잔여 시간이 나올 가능성이 있음</td><td>귀가 동선과 다음 날 피로 고려</td></tr>
          <tr><td>주말 이른 오전</td><td>하루 일정을 덜 방해함</td><td>고정팀이 많아 예약 오픈 시간을 봐야 함</td></tr>
          <tr><td>취소표 시간</td><td>좋은 시간대가 갑자기 열릴 수 있음</td><td>알림 확인과 빠른 결제가 필요</td></tr>
        </tbody>
      </table>
      <h2>비용을 줄이는 현실적인 방법</h2>
      <p>실내 코트는 1회 단가만 보면 부담이 큽니다. 하지만 4명이 2시간을 나누거나, 레슨 뒤 30분 자율 연습을 붙이거나, 평일 낮 대관을 활용하면 체감 비용이 내려갑니다. 중요한 것은 한 달 예산을 먼저 정하고 그 안에서 코트 횟수와 레슨 횟수를 배분하는 것입니다.</p>
      <ul>
        <li>월 예산을 레슨 60%, 자율 대관 40%처럼 나눕니다.</li>
        <li>초보자는 1시간 단독 대관보다 2~4명 공동 대관이 효율적입니다.</li>
        <li>레슨 전후 공백 시간이 있는지 문의하면 짧은 연습 시간을 확보할 수 있습니다.</li>
        <li>환불·취소 기준이 엄격한 곳은 비싼 시간대보다 안정적인 시간대를 우선합니다.</li>
      </ul>
      <h2>입문자가 현장에서 확인할 것</h2>
      <p>실내 코트는 사진만으로 판단하기 어렵습니다. 천장이 낮으면 로브와 서브 토스가 불편하고, 코트 간격이 좁으면 초보자는 공 줍는 시간이 길어집니다. 바닥이 너무 빠르거나 조명이 강하면 타점이 늦어질 수도 있습니다.</p>
      <table>
        <thead><tr><th>확인 항목</th><th>왜 중요한가</th></tr></thead>
        <tbody>
          <tr><td>천장 높이</td><td>서브 토스, 로브, 스매시 연습 가능성을 좌우합니다.</td></tr>
          <tr><td>코트 간격</td><td>초보자의 안전과 랠리 지속 시간에 영향을 줍니다.</td></tr>
          <tr><td>바닥 표면</td><td>공 튐과 무릎 부담이 달라집니다.</td></tr>
          <tr><td>환기와 온도</td><td>겨울·여름 체력 소모와 집중력에 영향을 줍니다.</td></tr>
          <tr><td>주차·대중교통</td><td>반복 방문 가능성을 결정합니다.</td></tr>
        </tbody>
      </table>
      <h2>예약 루틴 만들기</h2>
      <p>한 달 동안 예약 성공과 실패를 기록하면 패턴이 보입니다. 무작정 새로고침하기보다 요일, 시간, 가격, 취소 가능 시점, 실제 이동 시간을 표로 남기세요. <a href="/utility/tennis-time-availability-planner">테니스 시간표 플래너</a>에 후보 시간을 넣고, 지역 선택은 <a href="/blog/top-5-tennis-districts-seoul">서울 테니스 생활권 TOP 5</a>와 함께 보면 좋습니다.</p>
      <p>공공 코트와 일부 체육시설은 <a href="https://yeyak.seoul.go.kr" rel="noopener noreferrer">서울시 공공서비스예약</a>에서 확인할 수 있고, 구립·민간 실내 코트는 시설별 예약 시스템을 따로 확인해야 합니다. 코트별 실제 예약 경로와 야외 대체 후보는 <a href="/blog/seoul-best-tennis-courts">서울 테니스장 추천 7곳</a>에 정리했습니다.</p>
    `,
    faq: [
      {
        question: "실내 테니스장은 언제 예약이 가장 어렵나요?",
        answer:
          "평일 19~21시와 주말 오전이 가장 어렵습니다. 직장인, 레슨, 동호회 수요가 겹치기 때문입니다. 평일 낮이나 늦은 밤을 대체 시간으로 두면 성공률이 올라갑니다.",
      },
      {
        question: "실내 코트 비용을 줄이는 방법은 무엇인가요?",
        answer:
          "단독 대관보다 2~4명 공동 대관을 활용하고, 레슨 전후 짧은 공백 시간을 연습으로 붙이는 방식이 현실적입니다. 월 예산을 먼저 정하고 레슨과 대관 비중을 나누는 것이 좋습니다.",
      },
      {
        question: "초보자는 실내 코트가 야외 코트보다 좋나요?",
        answer:
          "처음에는 날씨 영향을 덜 받는 실내 코트가 꾸준함에 유리합니다. 다만 비용이 높으므로 실내 레슨과 야외 공공 코트 자율 연습을 섞는 방식이 가장 현실적입니다.",
      },
    ],
  },
  "junior-parent-tennis-guide": {
    summary:
      "주니어 테니스는 빨리 이기는 것보다 오래 즐기고 다치지 않는 구조가 먼저입니다. 부모는 코치의 유명세보다 아이의 수면, 통증 신호, 학교 생활, 훈련 후 표정, 기본기 반복 환경을 함께 봐야 합니다.",
    highlight:
      "좋은 주니어 레슨은 아이를 빨리 소모시키는 프로그램이 아니라 다음 주에도 스스로 코트에 가고 싶게 만드는 구조입니다.",
    tags: ["주니어 테니스", "부모 가이드", "레슨", "성장"],
    content: `
      <p>자녀가 테니스를 시작하면 부모는 빠르게 고민이 늘어납니다. 개인 레슨을 해야 하는지, 대회를 나가야 하는지, 라켓을 바꿔야 하는지, 운동량이 부족한지 과한지 판단해야 합니다. 이때 기준이 승패 하나로 좁혀지면 아이도 부모도 쉽게 지칩니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>초등·중등 주니어는 승패보다 수면, 통증, 즐거움, 기본기 반복을 먼저 봐야 합니다.</li>
          <li>좋은 코치는 많이 치게 하는 사람보다 아이가 왜 틀렸는지 이해하게 돕는 사람입니다.</li>
          <li>대회는 실력 확인용이지 자존감 평가표가 아닙니다. 대회 뒤 복기 방식이 더 중요합니다.</li>
        </ul>
      </div>
      <h2>부모가 먼저 정해야 할 기준</h2>
      <p>주니어 테니스의 첫 기준은 지속성입니다. 아이가 매주 코트에 가고 싶어 하는지, 훈련 뒤 지나치게 지치지 않는지, 통증을 숨기지 않는지 봐야 합니다. 실력이 빠르게 늘어도 수면이 무너지고 학교 생활이 흔들리면 오래 이어가기 어렵습니다.</p>
      <table>
        <thead><tr><th>확인 항목</th><th>좋은 신호</th><th>주의 신호</th></tr></thead>
        <tbody>
          <tr><td>수면</td><td>훈련 다음 날 평소처럼 일어남</td><td>피로가 2~3일 이어짐</td></tr>
          <tr><td>통증</td><td>근육 피로를 말로 설명함</td><td>팔꿈치·무릎 통증을 숨기거나 반복 호소</td></tr>
          <tr><td>즐거움</td><td>연습 내용을 먼저 이야기함</td><td>코트 가기 전 표정이 계속 굳음</td></tr>
          <tr><td>기본기</td><td>같은 동작을 천천히 반복함</td><td>시합 결과 때문에 자세 교정이 계속 밀림</td></tr>
          <tr><td>학교 생활</td><td>운동과 학업 리듬이 유지됨</td><td>숙제, 식사, 수면이 자주 밀림</td></tr>
        </tbody>
      </table>
      <h2>주니어 레슨 선택 기준</h2>
      <p>레슨은 강도가 높을수록 좋은 것이 아닙니다. 아이의 나이, 체격, 집중 시간, 운동 경험에 맞게 설명과 반복량을 조절해야 합니다. 특히 어린 주니어에게 성인 동호인과 같은 방식으로 힘, 스핀, 경기 수를 요구하면 동작보다 부담이 먼저 커질 수 있습니다.</p>
      <ul>
        <li>첫 상담에서 목표를 “선수반”보다 “3개월 동안 무엇을 안정화할지”로 묻습니다.</li>
        <li>코치가 아이에게 직접 설명하고 아이가 다시 말할 수 있는지 확인합니다.</li>
        <li>훈련 중 쉬는 시간, 물 마시는 시간, 통증 질문이 자연스럽게 있는지 봅니다.</li>
        <li>영상 촬영이나 짧은 피드백 메모처럼 부모가 과정을 확인할 수 있는 장치가 있으면 좋습니다.</li>
      </ul>
      <h2>대회는 언제 시작할까</h2>
      <p>대회는 빨리 나갈수록 좋은 시험이 아닙니다. 서브 규칙, 점수 세기, 기본 매너, 경기 후 악수, 판정에 대한 태도까지 이해한 뒤가 좋습니다. 처음 몇 번의 대회는 결과보다 경기장 분위기에 적응하고, 긴장 속에서도 준비 루틴을 지키는 경험으로 봐야 합니다.</p>
      <table>
        <thead><tr><th>단계</th><th>목표</th><th>부모의 역할</th></tr></thead>
        <tbody>
          <tr><td>레슨 1~2개월</td><td>포핸드·백핸드·서브 규칙 이해</td><td>출석률과 즐거움 확인</td></tr>
          <tr><td>레슨 3~6개월</td><td>짧은 랠리와 미니 게임</td><td>승패보다 복기 질문 연습</td></tr>
          <tr><td>첫 대회</td><td>경기 절차 경험</td><td>결과 평가보다 준비물·시간 관리 지원</td></tr>
          <tr><td>대회 후</td><td>다음 훈련 과제 1개 선정</td><td>잘한 점 1개, 배운 점 1개만 남김</td></tr>
        </tbody>
      </table>
      <h2>장비와 코트는 과하지 않게</h2>
      <p>주니어 장비는 성능보다 몸에 맞는지가 먼저입니다. 라켓이 너무 길거나 무거우면 스윙이 늦고 팔에 부담이 갈 수 있습니다. 코트도 집에서 너무 멀면 부모와 아이 모두 지칩니다. 처음에는 가까운 코트와 안정적인 시간표가 비싼 장비보다 중요합니다.</p>
      <p>지역과 코트 선택은 <a href="/blog/top-5-tennis-districts-seoul">서울 테니스 생활권 TOP 5</a>, 실내 코트 예약은 <a href="/blog/indoor-court-booking-tips">실내 테니스장 예약 팁</a>을 함께 보세요. 아이의 목표는 <a href="/utility/goal-setting">테니스 목표 설정</a>에 짧게 기록하고, 훈련량을 늘리기 전에는 <a href="/utility/injury-risk">부상 위험 체크</a>로 통증 신호를 먼저 점검하는 편이 안전합니다.</p>
      <h2>부모가 피해야 할 말</h2>
      <p>아이에게 가장 부담이 되는 말은 기술 조언보다 감정 평가입니다. “왜 또 졌어?”보다 “오늘 한 가지 배운 게 뭐야?”가 낫습니다. 대회 뒤 차 안에서 바로 지적하기보다 식사와 휴식 후 아이가 먼저 말할 시간을 주는 것이 장기적으로 훨씬 좋습니다.</p>
      <p>주니어 테니스의 기본 방향은 <a href="https://www.itftennis.com/en/growing-the-game/junior-tennis-initiative/" rel="noopener noreferrer">ITF Junior Tennis Initiative</a>처럼 연령과 참여 경험을 고려하는 국제 프로그램의 흐름도 함께 참고할 수 있습니다. 다만 통증이 반복되거나 성장기 부상 의심이 있으면 코치 판단만으로 넘기지 말고 스포츠의학 전문가와 상담해야 합니다.</p>
    `,
    faq: [
      {
        question: "주니어 테니스는 몇 살부터 시작하는 게 좋나요?",
        answer:
          "정답은 나이보다 흥미와 신체 준비 상태에 가깝습니다. 어린 나이라면 정식 경기보다 공놀이, 균형, 라켓 감각처럼 부담이 낮은 활동부터 시작하는 것이 좋습니다.",
      },
      {
        question: "주니어가 대회를 빨리 나가는 것이 좋나요?",
        answer:
          "대회는 실력 확인과 경험을 위한 도구입니다. 서브 규칙, 점수 세기, 기본 매너를 이해한 뒤 시작하는 편이 좋고, 첫 대회는 결과보다 경기 절차 적응을 목표로 삼는 것이 안전합니다.",
      },
      {
        question: "부모가 레슨을 볼 때 가장 중요하게 봐야 할 것은 무엇인가요?",
        answer:
          "아이의 표정, 훈련 후 피로, 통증 표현, 코치의 설명 방식, 다음 주에도 가고 싶어 하는지를 봐야 합니다. 단기간 승패보다 지속 가능한 훈련 구조가 더 중요합니다.",
      },
    ],
  },
  "senior-tennis-injury-safe-guide": {
    summary:
      "시니어 테니스는 강도를 낮추는 운동이 아니라 회복 시간을 계산하는 운동입니다. 경기 전후 통증 변화, 워밍업 길이, 연속 경기 횟수, 수면, 균형 훈련을 함께 관리하면 무리 없이 더 오래 칠 수 있습니다.",
    highlight:
      "시니어 플레이어에게 가장 좋은 경기력 관리는 더 세게 치는 것이 아니라 다음 날 다시 걸어 나올 수 있는 강도를 지키는 것입니다.",
    tags: ["시니어 테니스", "부상 예방", "회복", "운동 강도"],
    content: `
      <p>나이가 들수록 테니스를 포기해야 하는 것은 아닙니다. 다만 몸이 보내는 신호를 읽는 방식은 바뀌어야 합니다. 젊을 때처럼 연속 경기와 강한 랠리를 밀어붙이면 실력보다 회복이 먼저 무너질 수 있습니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>시니어 테니스는 경기 강도보다 회복 가능성을 먼저 계산해야 합니다.</li>
          <li>팔꿈치, 무릎, 어깨 통증이 반복되면 자세 교정보다 휴식과 전문가 상담이 먼저입니다.</li>
          <li>주 2회 근력 운동과 균형 훈련을 병행하면 코트 위 움직임을 더 안정적으로 유지할 수 있습니다.</li>
        </ul>
      </div>
      <h2>시니어 테니스의 기준은 다음 날 몸 상태입니다</h2>
      <p>좋은 운동은 그날만 즐거운 운동이 아니라 다음 날 생활을 망치지 않는 운동입니다. 경기 직후에는 괜찮아도 다음 날 계단을 내려가기 어렵거나 팔꿈치 통증이 커진다면 강도를 조정해야 합니다. 코트 위에서는 체력이 남아 있는 것처럼 느껴져도 회복 능력은 예전과 다를 수 있습니다.</p>
      <table>
        <thead><tr><th>체크 항목</th><th>괜찮은 신호</th><th>줄여야 할 신호</th></tr></thead>
        <tbody>
          <tr><td>통증</td><td>운동 후 가벼운 근육 피로</td><td>관절 통증이 24~48시간 이상 지속</td></tr>
          <tr><td>호흡</td><td>랠리 뒤 말할 수 있음</td><td>숨이 차서 회복 시간이 길어짐</td></tr>
          <tr><td>보행</td><td>다음 날 걷기와 계단이 평소와 비슷함</td><td>무릎·발목 때문에 걸음이 달라짐</td></tr>
          <tr><td>수면</td><td>운동한 날 잠이 깊어짐</td><td>통증이나 흥분으로 잠이 깨짐</td></tr>
          <tr><td>집중</td><td>후반에도 판단이 유지됨</td><td>발이 멈추고 팔로만 치기 시작함</td></tr>
        </tbody>
      </table>
      <h2>경기 전 15분은 절약하면 안 됩니다</h2>
      <p>시니어 플레이어에게 워밍업은 선택이 아닙니다. 어깨 몇 번 돌리고 바로 서브를 넣는 방식은 팔꿈치와 어깨 부담을 키울 수 있습니다. 빠른 걷기, 발목과 고관절 움직임, 짧은 미니 랠리, 60% 강도의 베이스라인 랠리 순서로 천천히 올리는 편이 안전합니다.</p>
      <ul>
        <li>0~5분: 빠른 걷기, 발목 돌리기, 사이드스텝</li>
        <li>5~10분: 고관절, 흉추, 어깨 회전</li>
        <li>10~13분: 서비스라인 미니 랠리</li>
        <li>13~15분: 베이스라인 60% 랠리와 짧은 서브</li>
      </ul>
      <h2>연속 경기보다 회복일을 먼저 잡으세요</h2>
      <p>시니어 테니스에서 흔한 실수는 컨디션이 좋을 때 경기를 몰아서 잡는 것입니다. 실력이 비슷한 상대와 2시간 이상 치면 즐거움은 크지만 관절과 힘줄 부담도 커집니다. 주간 계획을 짤 때는 경기일보다 회복일을 먼저 표시하세요.</p>
      <table>
        <thead><tr><th>상황</th><th>추천 조정</th></tr></thead>
        <tbody>
          <tr><td>오랜만에 복귀</td><td>첫 2주는 60~70% 강도, 60분 이내</td></tr>
          <tr><td>복식 위주</td><td>연속 2경기 이상이면 중간 휴식과 수분 보충</td></tr>
          <tr><td>단식 위주</td><td>다음 날 하체 피로를 보고 주 1~2회부터 시작</td></tr>
          <tr><td>통증 경험 있음</td><td>통증 부위가 있는 날은 경기보다 가벼운 랠리와 스트레칭</td></tr>
        </tbody>
      </table>
      <h2>팔꿈치, 무릎, 어깨 신호를 무시하지 마세요</h2>
      <p>테니스 엘보는 반복적인 손목과 팔 움직임, 과사용과 관련될 수 있습니다. Mayo Clinic은 휴식, 얼음, 진통제 같은 자가 관리로도 팔꿈치 통증과 압통이 나아지지 않으면 의료진과 상담하라고 안내합니다. 저림, 힘 빠짐, 붓기, 움직임 제한이 있으면 단순 근육통으로 넘기지 않는 편이 안전합니다.</p>
      <p>테니스 자세가 원인일 수도 있지만 라켓 무게, 스트링 장력, 그립 크기, 공을 늦게 맞히는 습관도 부담을 키울 수 있습니다. <a href="/utility/injury-risk">부상 위험 체크</a>로 현재 상태를 기록하고, 장비가 의심되면 <a href="/utility/equipment-maintenance-scheduler">장비 관리 스케줄러</a>와 <a href="/utility/string-tension">스트링 텐션 계산기</a>를 함께 확인하세요.</p>
      <h2>코트 밖 운동이 경기력을 지킵니다</h2>
      <p>CDC는 고령자의 신체 활동에서 유산소 활동뿐 아니라 근력 강화와 균형 활동을 함께 권장합니다. 테니스만으로 모든 체력을 만들려고 하기보다 주 2회 짧은 근력 운동, 균형 잡기, 고관절과 종아리 강화가 필요합니다. 코트 밖 20분이 코트 위 부상 위험을 줄이는 보험이 됩니다.</p>
      <ul>
        <li>스쿼트나 의자 앉았다 일어나기: 하체 지지력</li>
        <li>밴드 로우와 외회전: 어깨 안정성</li>
        <li>한 발 서기와 사이드스텝: 균형과 방향 전환</li>
        <li>종아리 올리기: 발목과 첫 스텝</li>
      </ul>
      <h2>오래 치는 사람의 경기 운영</h2>
      <p>시니어 테니스는 모든 공을 끝까지 쫓는 것이 미덕이 아닙니다. 위험한 방향 전환, 젖은 코트, 라인 근처 급정지는 과감히 포기할 줄 알아야 합니다. 복식에서는 포지션 약속을 명확히 하고, 단식에서는 긴 랠리보다 깊은 공과 안정적인 리턴을 우선하세요.</p>
      <p>운동량과 회복은 <a href="/utility/training-planner">훈련 플래너</a>에 기록하고, 더운 날이나 추운 날은 <a href="/utility/weather-check">날씨 체크</a>를 먼저 보세요. 시니어에게 좋은 코트 선택은 <a href="/blog/seoul-best-tennis-courts">서울 테니스장 추천 7곳</a>과 <a href="/blog/indoor-court-booking-tips">실내 테니스장 예약 팁</a>을 함께 보면 판단이 쉽습니다.</p>
      <p>참고 기준은 <a href="https://www.cdc.gov/physical-activity-basics/adding-older-adults/what-counts.html" rel="noopener noreferrer">CDC 고령자 신체 활동 안내</a>와 <a href="https://www.mayoclinic.org/diseases-conditions/tennis-elbow/symptoms-causes/syc-20351987" rel="noopener noreferrer">Mayo Clinic 테니스 엘보 안내</a>처럼 의료·공중보건 기관 자료를 함께 확인하세요. 이 글은 일반 정보이며 통증이 반복되면 의료 전문가의 판단이 우선입니다.</p>
    `,
    faq: [
      {
        question: "시니어는 테니스를 주 몇 회 치는 것이 적당한가요?",
        answer:
          "개인차가 크지만 복귀 초기에는 주 1~2회부터 시작해 다음 날 통증과 피로를 보고 늘리는 편이 안전합니다. 경기일보다 회복일을 먼저 확보하는 것이 중요합니다.",
      },
      {
        question: "운동 후 팔꿈치 통증이 있으면 계속 쳐도 되나요?",
        answer:
          "통증이 반복되거나 휴식 후에도 줄지 않으면 강도를 낮추고 전문가 상담을 받는 편이 안전합니다. 특히 저림, 힘 빠짐, 붓기, 움직임 제한이 있으면 단순 피로로 넘기지 마세요.",
      },
      {
        question: "시니어에게 단식과 복식 중 무엇이 더 안전한가요?",
        answer:
          "일반적으로 복식은 이동 범위가 줄어 부담을 낮추기 쉽지만, 갑작스러운 방향 전환과 충돌 위험은 여전히 있습니다. 체력과 관절 상태에 맞춰 경기 시간과 강도를 조절하는 것이 더 중요합니다.",
      },
    ],
  },
  "seoul-best-tennis-courts": {
    summary:
      "서울 테니스장은 이름값보다 예약 성공률, 이동 시간, 조명, 우천 취소 기준, 주차까지 함께 봐야 실패가 적습니다. 올림픽공원, 목동, 광나루·뚝섬·이촌·난지·잠원 한강공원 테니스장을 공식 안내 기준으로 비교했습니다.",
    highlight:
      "서울 테니스장 선택은 1회 방문 만족도가 아니라 집이나 직장에서 30분 안에 반복 방문할 수 있는 코트를 찾는 문제입니다.",
    tags: ["서울 테니스장", "코트 예약", "공공 코트", "입문자"],
    content: `
      <p>서울에서 테니스장을 고를 때 가장 먼저 볼 것은 코트 이름이 아니라 반복성입니다. 한 번 가기 좋은 코트와 3개월 동안 꾸준히 갈 수 있는 코트는 다릅니다. 특히 공공 코트는 예약 오픈 시간, 취소 규정, 조명료, 주차 동선이 만족도를 크게 바꿉니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>입문자는 집이나 직장에서 30분 안에 도착하고 평일 야간 예약이 가능한 코트부터 보는 것이 낫습니다.</li>
          <li>올림픽공원은 시설 선택지가 넓고, 목동은 구립 실내·실외 코트와 강습 동선을 함께 볼 수 있습니다.</li>
          <li>한강공원 코트는 광나루, 뚝섬, 이촌, 난지, 잠원처럼 접근성은 좋지만 날씨와 바람 변수를 꼭 확인해야 합니다.</li>
        </ul>
      </div>
      <h2>서울 테니스장 7곳 비교</h2>
      <p>아래 7곳은 공식 안내에서 예약·이용 정보를 확인할 수 있는 대표 후보입니다. 요금과 운영 시간은 수시로 바뀔 수 있으므로 실제 결제 전에는 반드시 공식 페이지의 최신 공지를 다시 확인하세요.</p>
      <table>
        <thead><tr><th>코트</th><th>추천 대상</th><th>예약 전 확인 포인트</th></tr></thead>
        <tbody>
          <tr><td>올림픽공원 테니스장</td><td>실내·실외 선택지와 주차를 함께 보는 동호인</td><td>이용일 7일 전 선착순 예약, 1인 예약 시간, 실내·실외 요금 차이</td></tr>
          <tr><td>목동테니스장</td><td>서부권 입문자, 강습과 대관을 같이 보는 사람</td><td>양천구민 우선 예약 시간, 실내 4~6번 코트, 예약자 본인 참여 기준</td></tr>
          <tr><td>광나루 한강공원</td><td>동부권에서 야외 코트를 반복 이용하려는 사람</td><td>한강공원 공통 요금, 조명·주말 가산, 바람</td></tr>
          <tr><td>뚝섬 한강공원</td><td>대중교통 접근성과 야외 분위기를 중시하는 사람</td><td>주말 경쟁, 우천 취소, 라켓·공 개인 지참</td></tr>
          <tr><td>이촌 한강공원</td><td>용산·서초·마포권에서 퇴근 후 치려는 사람</td><td>평일 야간 잔여 시간, 주차 혼잡, 조명 시간</td></tr>
          <tr><td>난지 한강공원</td><td>마포·상암권 주말 플레이어</td><td>대중교통 후 도보 시간, 바람, 취소 가능 시점</td></tr>
          <tr><td>잠원 한강공원</td><td>강남·서초권에서 공공 코트를 찾는 사람</td><td>예약 경쟁, 주차비, 주말·공휴일 가산</td></tr>
        </tbody>
      </table>
      <h2>입문자라면 이렇게 고르세요</h2>
      <p>초보자는 센터코트 같은 분위기보다 공을 많이 칠 수 있는 환경이 더 중요합니다. 첫 달에는 집에서 가까운 코트 2곳, 직장에서 가까운 코트 1곳을 저장하고 평일 야간과 주말 오전의 예약 가능성을 따로 봅니다. 레슨을 병행한다면 코치의 유명세보다 같은 시간대에 꾸준히 들어갈 수 있는지가 먼저입니다.</p>
      <h2>예약 전에 반드시 볼 체크리스트</h2>
      <ul>
        <li>예약 오픈 시간이 오전 9시인지, 시설별 별도 시스템인지 확인합니다.</li>
        <li>우천·강설·폭염·미세먼지 때 취소와 환불이 어떻게 처리되는지 확인합니다.</li>
        <li>조명료, 주차권, 주말·공휴일 가산이 포함인지 별도인지 확인합니다.</li>
        <li>한강공원 코트는 공, 라켓 등 소모품 대여가 없다는 전제로 준비합니다.</li>
        <li>처음 한 달은 하드코트와 실내 코트를 각각 한 번씩 경험해 몸에 맞는 표면을 찾습니다.</li>
      </ul>
      <h2>공식 출처로 다시 확인할 곳</h2>
      <p>올림픽공원은 <a href="https://www.ksponco.or.kr/sports/menu.es?mid=a70203000000" rel="noopener noreferrer">올림픽테니스장 일일입장 안내</a>에서 예약 기간, 코트별 요금, 주차권 기준을 확인할 수 있습니다. 목동테니스장은 <a href="https://www.ycs.or.kr/fmcs/34" rel="noopener noreferrer">양천구시설관리공단 목동테니스장 이용안내</a>에서 운영 시간, 우선 예약, 실내·실외 요금, 환불 기준을 확인하세요.</p>
      <p>한강공원 테니스장은 <a href="https://hangang.seoul.go.kr/www/contents/777.do?mid=516" rel="noopener noreferrer">서울시 미래한강본부 체육시설 이용안내</a>와 <a href="https://yeyak.seoul.go.kr/web/search/selectPageListDetailSearchImg.do?code=T100&amp;dCode=T108" rel="noopener noreferrer">서울시 공공서비스예약 테니스장 목록</a>을 같이 확인하는 편이 안전합니다. 개인 일정은 <a href="/utility/tennis-time-availability-planner">테니스 시간표 플래너</a>에 넣고, 표면 적응은 <a href="/utility/court-surface-advisor">코트 표면 어드바이저</a>로 먼저 비교해보세요.</p>
    `,
    faq: [
      {
        question: "서울 테니스장은 어디가 가장 좋나요?",
        answer:
          "절대적인 1위보다 생활권 기준이 중요합니다. 집이나 직장에서 30분 안에 도착하고, 원하는 시간대 예약 가능성이 있는 코트가 가장 좋습니다. 시설만 보면 올림픽공원, 반복성과 강습 동선까지 보면 목동, 야외 접근성은 한강공원 코트를 우선 비교해볼 만합니다.",
      },
      {
        question: "입문자는 실내 코트가 더 좋나요?",
        answer:
          "처음 한두 달은 실내 코트가 날씨 영향을 덜 받아 좋습니다. 다만 비용이 높을 수 있어 야외 공공 코트와 병행하는 방식이 현실적입니다.",
      },
      {
        question: "서울 공공 테니스장 예약은 어디서 하나요?",
        answer:
          "한강공원 코트는 서울시 공공서비스예약에서 확인하고, 목동처럼 구립 시설은 해당 시설관리공단 페이지를 확인해야 합니다. 올림픽공원 테니스장은 별도 온라인 예약 안내를 따르는 식으로 시설마다 예약 경로가 다릅니다.",
      },
    ],
  },
  "winter-tennis-training": {
    summary:
      "겨울 테니스는 강도를 올리는 계절이 아니라 몸을 천천히 열고 감각을 보존하는 계절입니다. 관절 가동성, 짧은 랠리, 실내 대체 루틴, 장비 보온 기준을 지키면 부상 위험을 낮출 수 있습니다.",
    highlight:
      "겨울 첫 20분은 실력 향상 시간이 아니라 부상 방지 비용이라고 생각해야 합니다.",
    tags: ["겨울 테니스", "워밍업", "부상 예방", "실내 훈련"],
    content: `
      <p>겨울 코트에서 가장 위험한 순간은 첫 서브를 세게 넣는 순간입니다. 손끝 감각은 둔하고 어깨는 덜 열렸는데, 마음은 평소 속도를 기억하기 때문입니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>코트 입장 전 8분, 코트 위 12분을 워밍업으로 잡습니다.</li>
          <li>첫 20분은 서브와 강타보다 미니 랠리와 발 움직임이 우선입니다.</li>
          <li>손목·팔꿈치 통증이 있으면 스트링과 그립 상태를 함께 확인해야 합니다.</li>
        </ul>
      </div>
      <h2>겨울 워밍업은 순서가 전부입니다</h2>
      <p>목과 어깨를 돌리고 바로 공을 치는 방식은 부족합니다. 발목, 고관절, 흉추, 어깨 순서로 열어야 하체에서 만든 힘이 팔로 몰리지 않습니다. 추운 날에는 같은 스윙도 팔꿈치에 더 크게 느껴지므로 강도를 늦게 올리는 것이 핵심입니다.</p>
      <table>
        <thead><tr><th>시간</th><th>루틴</th><th>목표</th></tr></thead>
        <tbody>
          <tr><td>0~4분</td><td>빠른 걷기, 발목 돌리기, 사이드스텝</td><td>체온 올리기</td></tr>
          <tr><td>4~8분</td><td>고관절, 흉추, 어깨 회전</td><td>회전 범위 확보</td></tr>
          <tr><td>8~14분</td><td>서비스라인 미니 랠리</td><td>타점 감각 회복</td></tr>
          <tr><td>14~20분</td><td>베이스라인 60% 랠리</td><td>발과 스윙 연결</td></tr>
        </tbody>
      </table>
      <h2>겨울에는 훈련 목표도 바뀌어야 합니다</h2>
      <p>속도와 위너보다 깊이, 리듬, 중심 타격률을 봐야 합니다. 특히 서브는 첫 15분 동안 플랫 서브를 줄이고 슬라이스 또는 70% 강도의 코스 연습으로 시작하는 편이 안전합니다.</p>
      <h2>실내 대체 루틴</h2>
      <p>코트를 못 잡은 날에는 무리하게 공을 치기보다 그림자 스윙, 밴드 외회전, 코어 회전, 종아리 강화가 낫습니다. <a href="/utility/warmup-routine-builder">워밍업 루틴 빌더</a>와 <a href="/utility/injury-risk">부상 위험 체크</a>를 함께 쓰면 현재 몸 상태에 맞춰 강도를 조절할 수 있습니다.</p>
      <p>부상 관련 기본 정보는 <a href="https://www.sportsmed.or.kr" rel="noopener noreferrer">대한스포츠의학회</a> 자료처럼 스포츠의학 기관의 안내를 함께 참고하세요.</p>
    `,
    faq: [
      {
        question: "겨울에도 야외 테니스를 쳐도 되나요?",
        answer:
          "가능하지만 첫 20분 강도를 낮춰야 합니다. 기온이 낮고 바람이 강한 날에는 서브와 급정지를 줄이는 것이 안전합니다.",
      },
      {
        question: "겨울 테니스에서 가장 흔한 부상은 무엇인가요?",
        answer:
          "어깨, 팔꿈치, 종아리, 허리 부담이 흔합니다. 몸이 덜 열린 상태에서 강하게 치는 것이 주요 원인입니다.",
      },
      {
        question: "겨울에는 스트링 텐션을 바꿔야 하나요?",
        answer:
          "팔 부담이 크다면 1~2파운드 낮추는 선택을 고려할 수 있습니다. 다만 라켓과 스트링 종류에 따라 체감이 달라집니다.",
      },
    ],
  },
  "tennis-mental-techniques": {
    summary:
      "테니스 멘탈은 강한 마음이 아니라 반복 가능한 루틴입니다. 점수 확인, 호흡, 첫 샷 목표, 실점 후 복구 문장을 정하면 중요한 포인트에서 판단 속도가 회복됩니다.",
    highlight:
      "긴장한 상태에서 필요한 것은 자신감이 아니라 다음 한 포인트를 시작하는 고정 절차입니다.",
    tags: ["테니스 멘탈", "경기 루틴", "긴장 완화", "집중력"],
    content: `
      <p>중요한 포인트에서 손이 굳는 이유는 마음이 약해서가 아닙니다. 머릿속에 선택지가 너무 많아져 첫 행동이 늦어지기 때문입니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>포인트 사이 루틴은 10초 안에 끝나는 짧은 절차여야 합니다.</li>
          <li>실점 원인 분석은 경기 중이 아니라 게임 사이에 짧게만 합니다.</li>
          <li>다음 첫 샷 목표를 하나로 정하면 긴장 상황에서도 판단이 빨라집니다.</li>
        </ul>
      </div>
      <h2>경기 중 긴장감을 줄이는 5단계</h2>
      <ol>
        <li>점수를 소리 내어 확인합니다.</li>
        <li>라켓 줄을 정리하며 시선을 아래로 내립니다.</li>
        <li>코로 들이마시고 길게 내쉬는 호흡을 한 번 합니다.</li>
        <li>다음 첫 샷 목표를 하나만 정합니다.</li>
        <li>상대가 준비하기 전까지 결과 생각을 멈춥니다.</li>
      </ol>
      <h2>초보자가 가장 많이 하는 멘탈 실수</h2>
      <p>실점 직후 바로 기술을 고치려는 것입니다. 더블폴트를 했다고 다음 서브에서 토스, 손목, 허리, 라켓 궤도를 동시에 생각하면 확률은 더 떨어집니다. 경기 중에는 원인을 하나로 줄여야 합니다. 예를 들어 세컨드 서브는 가운데 깊게, 리턴은 크로스 깊게처럼 실행 문장으로 바꾸는 식입니다.</p>
      <table>
        <thead><tr><th>상황</th><th>나쁜 생각</th><th>바꿀 문장</th></tr></thead>
        <tbody>
          <tr><td>브레이크 포인트</td><td>여기 지면 끝이다</td><td>첫 공을 크로스로 깊게</td></tr>
          <tr><td>더블폴트 후</td><td>서브가 망가졌다</td><td>토스만 앞에 둔다</td></tr>
          <tr><td>쉬운 공 실수 후</td><td>왜 이것도 못 치지</td><td>다음 짧은 공은 가운데 깊게</td></tr>
        </tbody>
      </table>
      <h2>연습 경기에서 루틴을 훈련하는 법</h2>
      <p>멘탈 루틴은 대회 날 처음 쓰면 늦습니다. 연습 경기에서도 매 포인트 같은 행동을 반복해야 합니다. <a href="/utility/match-analyzer">경기 분석 도구</a>에 실점 유형을 적고, 경기 후에는 루틴이 깨진 상황만 따로 표시하세요. ITF의 코칭 자료도 경기 루틴과 심리 준비를 기술 훈련의 일부로 다룹니다. 참고: <a href="https://www.itftennis.com/en/growing-the-game/coaching/" rel="noopener noreferrer">ITF Coaching</a>.</p>
    `,
    faq: [
      {
        question: "테니스 멘탈은 타고나는 건가요?",
        answer:
          "일부 성향 차이는 있지만 경기 루틴은 훈련할 수 있습니다. 반복 절차가 있으면 긴장 상황에서도 행동이 빨라집니다.",
      },
      {
        question: "중요한 포인트에서 어떤 생각을 해야 하나요?",
        answer:
          "결과보다 첫 샷 목표를 생각해야 합니다. 예를 들어 리턴은 크로스 깊게, 세컨드 서브는 몸쪽 깊게처럼 단순해야 합니다.",
      },
      {
        question: "실수 후 바로 고쳐야 하나요?",
        answer:
          "경기 중에는 하나만 고쳐야 합니다. 여러 원인을 동시에 생각하면 다음 포인트 준비가 늦어집니다.",
      },
    ],
  },
  "backhand-swing-correction": {
    summary:
      "백핸드가 뜨거나 밀리는 문제는 손목보다 준비 타이밍, 앞발 위치, 어깨 회전, 임팩트 앞 거리에서 시작되는 경우가 많습니다. 원핸드와 투핸드 모두 쓸 수 있는 교정 순서를 정리했습니다.",
    highlight:
      "백핸드는 라켓을 잘 휘두르는 기술이 아니라 공이 오기 전에 몸을 먼저 돌려놓는 기술입니다.",
    tags: ["백핸드", "스윙 교정", "타점", "투핸드"],
    content: `
      <p>백핸드 실수는 임팩트 순간에 보이지만 원인은 그보다 훨씬 전에 만들어집니다. 공이 바운드된 뒤 라켓을 빼면 이미 늦습니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>공이 상대 라켓을 떠나는 순간 어깨 회전이 시작돼야 합니다.</li>
          <li>타점은 몸 옆이 아니라 앞발보다 한 뼘 앞에서 만들어야 합니다.</li>
          <li>투핸드는 비주도 손, 원핸드는 왼어깨 고정이 안정성을 만듭니다.</li>
        </ul>
      </div>
      <h2>백핸드가 불안한 3가지 원인</h2>
      <p>첫째, 준비가 늦습니다. 둘째, 앞발이 공 쪽으로 닫히지 않아 몸이 열립니다. 셋째, 손목으로 라켓면을 맞추려다 공이 뜹니다. 이 세 가지는 서로 연결됩니다. 준비가 늦으면 발이 급해지고, 발이 급하면 라켓면을 손으로 보정하게 됩니다.</p>
      <table>
        <thead><tr><th>증상</th><th>가능한 원인</th><th>교정 기준</th></tr></thead>
        <tbody>
          <tr><td>공이 뜬다</td><td>라켓면이 열림</td><td>임팩트 뒤에도 손목 고정</td></tr>
          <tr><td>네트에 걸린다</td><td>타점이 몸에 붙음</td><td>앞발보다 앞에서 맞히기</td></tr>
          <tr><td>크로스가 짧다</td><td>어깨 회전 부족</td><td>준비 때 등을 살짝 보이기</td></tr>
        </tbody>
      </table>
      <h2>10분 교정 루틴</h2>
      <ol>
        <li>공 없이 유닛턴 20회: 라켓보다 어깨가 먼저 도는지 봅니다.</li>
        <li>서비스라인 크로스 30구: 속도보다 네트 위 1m 높이를 목표로 합니다.</li>
        <li>베이스라인 20구: 맞힌 뒤 중앙 회복까지 한 동작으로 묶습니다.</li>
      </ol>
      <p>영상으로 확인할 수 있다면 <a href="/utility/swing-analyzer">스윙 분석 도구</a>를 사용해 타점 위치와 준비 시점을 체크하세요. 기본 규칙과 코칭 자료는 <a href="https://www.itftennis.com/en/growing-the-game/coaching/" rel="noopener noreferrer">ITF Coaching</a>을 참고할 수 있습니다.</p>
    `,
    faq: [
      {
        question: "백핸드는 원핸드와 투핸드 중 무엇이 더 쉽나요?",
        answer:
          "입문자는 투핸드가 안정적인 편입니다. 다만 어깨 회전과 타점 앞 위치를 못 잡으면 투핸드도 쉽게 짧아집니다.",
      },
      {
        question: "백핸드가 자꾸 뜨는 이유는 무엇인가요?",
        answer:
          "라켓면이 열리거나 타점이 몸에 붙는 경우가 많습니다. 손목을 쓰기보다 준비를 빠르게 하고 앞에서 맞혀야 합니다.",
      },
      {
        question: "백핸드 연습은 몇 구 정도 해야 하나요?",
        answer:
          "한 번에 많이 치기보다 30구 단위로 목표를 나누는 것이 좋습니다. 크로스 깊이와 중앙 회복을 함께 봐야 합니다.",
      },
    ],
  },
  "racket-weight-styles": {
    summary:
      "라켓 무게는 파워만 바꾸지 않습니다. 280g대는 조작성이 좋고, 300g 전후는 균형형, 315g 이상은 안정성과 체력 요구가 커집니다. 숫자보다 스윙 속도와 경기 후 팔 피로를 기준으로 골라야 합니다.",
    highlight:
      "라켓은 들 수 있는 무게가 아니라 경기 끝까지 늦지 않게 휘두를 수 있는 무게를 골라야 합니다.",
    tags: ["라켓 무게", "테니스 라켓", "스윙웨이트", "장비 선택"],
    content: `
      <p>라켓을 매장에서 들었을 때 괜찮은 것과 세트 후반까지 같은 타점으로 휘두르는 것은 전혀 다른 문제입니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>입문자는 280~300g 사이에서 시작하는 것이 안전합니다.</li>
          <li>무게보다 스윙웨이트와 밸런스가 체감 난도를 크게 바꿉니다.</li>
          <li>경기 후 팔꿈치 피로와 늦은 타점 수를 기록하면 선택이 쉬워집니다.</li>
        </ul>
      </div>
      <h2>무게별 경기 스타일 차이</h2>
      <table>
        <thead><tr><th>무게대</th><th>장점</th><th>주의점</th></tr></thead>
        <tbody>
          <tr><td>270~285g</td><td>조작 쉽고 수비 전환 빠름</td><td>상대 공이 무거우면 밀릴 수 있음</td></tr>
          <tr><td>286~305g</td><td>입문자와 중급자 균형형</td><td>모델별 밸런스 차이 확인 필요</td></tr>
          <tr><td>306~320g</td><td>중심 타격 시 안정감 좋음</td><td>후반 체력과 준비 속도 요구</td></tr>
        </tbody>
      </table>
      <h2>초보자가 무거운 라켓을 고르면 생기는 문제</h2>
      <p>처음에는 공이 잘 나가는 것처럼 느껴질 수 있습니다. 하지만 리턴, 빠른 랠리, 수비 상황에서 라켓 헤드가 늦어지면 타점이 뒤로 밀립니다. 그 결과 손목으로 라켓면을 맞추고 팔 부담이 커집니다.</p>
      <h2>시타할 때 볼 체크리스트</h2>
      <ul>
        <li>포핸드보다 리턴과 발리를 꼭 쳐봅니다.</li>
        <li>20분 뒤에도 라켓 헤드가 늦지 않는지 확인합니다.</li>
        <li>스트링 종류와 텐션이 달라 비교가 왜곡되지 않는지 봅니다.</li>
      </ul>
      <p>추천을 자동으로 좁히려면 <a href="/utility/equipment-recommendation">장비 추천 도구</a>를 사용하세요. 장비 선택은 일반 가이드와 함께 <a href="https://www.usta.com/en/home/improve.html" rel="noopener noreferrer">USTA Improve</a> 같은 코칭 자료를 참고하면 좋습니다.</p>
    `,
    faq: [
      {
        question: "초보자 라켓은 몇 g이 좋나요?",
        answer:
          "대체로 280~300g 사이가 무난합니다. 체격과 스윙 속도에 따라 다르지만 너무 무거운 라켓은 타점이 늦어질 수 있습니다.",
      },
      {
        question: "라켓 무게와 스윙웨이트는 다른가요?",
        answer:
          "다릅니다. 정적 무게가 같아도 헤드 쪽에 무게가 몰리면 더 무겁게 느껴질 수 있습니다.",
      },
      {
        question: "라켓을 바꾸면 실력이 바로 오르나요?",
        answer:
          "맞는 라켓은 실수를 줄여주지만 기술을 대신하지는 않습니다. 몸에 맞는 장비로 반복 훈련을 하기 쉬워지는 것이 핵심입니다.",
      },
    ],
  },
  "tennis-grip-replacement": {
    summary:
      "오버그립은 찢어질 때가 아니라 미끄러지기 시작할 때 바꾸는 소모품입니다. 그립이 낡으면 라켓을 과하게 쥐게 되고 손목·팔꿈치 부담이 커집니다.",
    highlight:
      "그립 교체는 장비 관리가 아니라 부상 예방 루틴에 가깝습니다.",
    tags: ["오버그립", "그립 교체", "손목 통증", "장비 관리"],
    content: `
      <p>그립이 미끄러지는 날에는 스윙을 고치기 전에 손부터 확인해야 합니다. 라켓을 놓칠까 봐 더 세게 쥐는 순간 손목과 팔꿈치가 일을 떠안습니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>주 1~2회 플레이어는 2~4주마다 상태를 확인합니다.</li>
          <li>땀이 많거나 여름 야외 경기라면 교체 주기가 더 짧아집니다.</li>
          <li>미끄러짐, 냄새, 표면 광택, 손목 피로가 교체 신호입니다.</li>
        </ul>
      </div>
      <h2>그립 교체 신호 4가지</h2>
      <table>
        <thead><tr><th>신호</th><th>의미</th><th>대응</th></tr></thead>
        <tbody>
          <tr><td>표면이 반짝임</td><td>마찰력 감소</td><td>교체 권장</td></tr>
          <tr><td>손에서 라켓이 돎</td><td>악력 과사용</td><td>즉시 교체</td></tr>
          <tr><td>냄새와 습기</td><td>건조 불량</td><td>건조 후 예비 그립 사용</td></tr>
          <tr><td>손목 뻐근함</td><td>과한 그립 압력</td><td>그립·사이즈 점검</td></tr>
        </tbody>
      </table>
      <h2>교체 방법에서 많이 하는 실수</h2>
      <p>그립을 너무 당겨 감으면 쿠션감이 사라지고, 너무 느슨하게 감으면 경기 중 밀립니다. 시작점은 그립 끝을 단단히 고정하고, 겹침 폭은 일정하게 유지해야 합니다. 마감 테이프는 장식이 아니라 풀림 방지 역할입니다.</p>
      <h2>예비 그립을 항상 넣어야 하는 이유</h2>
      <p>대회나 긴 랠리 뒤에는 손 상태가 급격히 달라집니다. 예비 그립 하나가 있으면 라켓을 세게 쥐는 습관을 줄일 수 있습니다. 관리 주기는 <a href="/utility/equipment-maintenance-scheduler">장비 관리 스케줄러</a>에 기록해두면 편합니다.</p>
      <p>손목과 팔꿈치 부담이 이미 있다면 <a href="/utility/injury-risk">부상 위험 체크</a>도 같이 확인하세요.</p>
    `,
    faq: [
      {
        question: "오버그립은 얼마나 자주 바꿔야 하나요?",
        answer:
          "주 1~2회 기준 2~4주마다 상태를 보는 것이 좋습니다. 땀이 많거나 여름에는 더 자주 바꿔야 합니다.",
      },
      {
        question: "그립이 두꺼워지면 좋은가요?",
        answer:
          "무조건 좋지 않습니다. 너무 두꺼우면 라켓 헤드 조작이 늦고 손목 사용이 불편해질 수 있습니다.",
      },
      {
        question: "그립 미끄러짐이 부상과 관련 있나요?",
        answer:
          "관련 있습니다. 미끄러운 그립은 악력을 과하게 쓰게 만들고 손목과 팔꿈치 부담을 키울 수 있습니다.",
      },
    ],
  },
  "forehand-body-balance": {
    summary:
      "포핸드가 흔들릴 때는 라켓보다 몸의 축을 먼저 봐야 합니다. 머리 높이, 바깥발 지지, 임팩트 앞 위치, 스윙 뒤 회복 발을 확인하면 강하게 치지 않아도 공의 깊이와 안정성이 좋아집니다.",
    highlight:
      "포핸드 안정성은 팔 스윙보다 몸통 축과 회복 발에서 먼저 결정됩니다.",
    tags: ["포핸드", "밸런스", "풋워크", "스윙 교정"],
    content: `
      <p>포핸드가 갑자기 흔들리는 날에는 라켓면을 고치기 전에 머리와 발을 봐야 합니다. 몸이 먼저 무너지면 좋은 라켓도 공을 안정적으로 보내지 못합니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>머리 높이가 크게 변하면 포핸드 타점도 같이 흔들립니다.</li>
          <li>바깥발로 버틴 뒤 몸통 회전이 들어가야 팔 부담이 줄어듭니다.</li>
          <li>스윙 뒤 중앙 회복까지 한 동작으로 묶어야 다음 공이 늦지 않습니다.</li>
        </ul>
      </div>
      <h2>포핸드 밸런스가 무너지는 신호</h2>
      <table>
        <thead><tr><th>신호</th><th>원인</th><th>교정 기준</th></tr></thead>
        <tbody>
          <tr><td>공이 자주 뜸</td><td>상체가 뒤로 젖혀짐</td><td>임팩트 때 가슴을 공 뒤에 둠</td></tr>
          <tr><td>네트에 걸림</td><td>타점이 몸에 붙음</td><td>앞발보다 앞에서 맞힘</td></tr>
          <tr><td>다음 공이 늦음</td><td>스윙 뒤 회복 발 없음</td><td>친 뒤 중앙으로 한 걸음</td></tr>
        </tbody>
      </table>
      <h2>라켓보다 몸을 먼저 고치는 순서</h2>
      <ol>
        <li>공이 오기 전에 바깥발을 먼저 잡습니다.</li>
        <li>머리 높이를 유지한 채 어깨와 골반을 함께 돌립니다.</li>
        <li>임팩트 뒤 라켓 피니시보다 회복 발을 먼저 확인합니다.</li>
      </ol>
      <p>포핸드 영상은 정면보다 측면에서 찍어야 타점 앞 위치가 잘 보입니다. <a href="/utility/swing-analyzer">스윙 분석 도구</a>로 임팩트 위치를 확인하고, 연습 계획은 <a href="/utility/training-planner">훈련 플래너</a>에 넣어 반복하세요.</p>
    `,
    faq: [
      {
        question: "포핸드가 아웃되는 가장 흔한 이유는 무엇인가요?",
        answer:
          "상체가 먼저 열리거나 타점이 늦는 경우가 많습니다. 라켓면만 닫기보다 몸의 축과 앞 타점을 먼저 확인해야 합니다.",
      },
      {
        question: "포핸드를 강하게 치려면 팔 힘이 필요한가요?",
        answer:
          "팔 힘보다 하체 지지와 몸통 회전이 먼저입니다. 팔로만 치면 속도는 잠깐 나오지만 안정성이 떨어집니다.",
      },
      {
        question: "포핸드 교정은 어떤 드릴이 좋나요?",
        answer:
          "크로스 포핸드 20구 뒤 중앙 회복을 넣는 드릴이 좋습니다. 공을 치는 것과 준비 위치 복귀를 한 세트로 묶어야 합니다.",
      },
    ],
  },
  "racket-care-mistakes": {
    summary:
      "라켓 성능은 프레임보다 보관 습관에서 먼저 무너집니다. 차 트렁크 보관, 젖은 그립 방치, 오래된 스트링, 프레임 충격, 관리 기록 부재가 대표적인 실수입니다.",
    highlight:
      "라켓을 오래 쓰고 싶다면 경기 후 2분 관리 루틴을 만드는 것이 가장 싸고 확실합니다.",
    tags: ["라켓 관리", "스트링", "오버그립", "장비 수명"],
    content: `
      <p>라켓은 한 번 부러져야 망가지는 장비가 아닙니다. 열, 습기, 충격, 오래된 스트링이 조금씩 타구감을 바꿉니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>차 트렁크 장기 보관은 피하는 것이 좋습니다.</li>
          <li>젖은 그립과 오래된 스트링은 팔 부담까지 키울 수 있습니다.</li>
          <li>스트링 날짜와 경기 횟수를 기록하면 교체 시점이 선명해집니다.</li>
        </ul>
      </div>
      <h2>라켓을 망치는 5가지 습관</h2>
      <table>
        <thead><tr><th>습관</th><th>문제</th><th>대안</th></tr></thead>
        <tbody>
          <tr><td>트렁크 보관</td><td>고온·저온 반복</td><td>실내 보관</td></tr>
          <tr><td>젖은 그립 방치</td><td>미끄러짐·냄새</td><td>건조 후 교체</td></tr>
          <tr><td>스트링 장기 사용</td><td>텐션 손실</td><td>사용 횟수 기록</td></tr>
          <tr><td>프레임 바닥 충격</td><td>미세 손상</td><td>가방 안 분리 보관</td></tr>
          <tr><td>예비 장비 없음</td><td>대회 중 대응 불가</td><td>오버그립·댐프너 예비</td></tr>
        </tbody>
      </table>
      <h2>경기 후 2분 관리 루틴</h2>
      <ol>
        <li>마른 수건으로 그립과 프레임을 닦습니다.</li>
        <li>스트링이 크게 움직였거나 홈이 깊어졌는지 봅니다.</li>
        <li>다음 교체 예상일을 기록합니다.</li>
      </ol>
      <p><a href="/utility/equipment-maintenance-scheduler">장비 관리 스케줄러</a>와 <a href="/utility/string-replacement-reminder">스트링 교체 알림</a>을 쓰면 감으로 관리하는 습관을 줄일 수 있습니다.</p>
    `,
    faq: [
      {
        question: "라켓을 차 트렁크에 둬도 되나요?",
        answer:
          "짧은 시간은 큰 문제가 없을 수 있지만 장기 보관은 피하는 것이 좋습니다. 온도 변화가 스트링과 그립 상태에 영향을 줄 수 있습니다.",
      },
      {
        question: "스트링은 끊어질 때까지 써도 되나요?",
        answer:
          "권장하지 않습니다. 끊어지기 전에도 텐션과 탄성이 떨어져 컨트롤과 팔 부담에 영향을 줄 수 있습니다.",
      },
      {
        question: "라켓 관리는 무엇부터 하면 되나요?",
        answer:
          "그립 건조, 스트링 날짜 기록, 실내 보관 세 가지부터 시작하면 충분합니다.",
      },
    ],
  },
  "string-tension-feel-guide": {
    summary:
      "스트링 텐션은 정답 숫자가 아니라 타구감 조정입니다. 낮추면 편안함과 반발력이 늘 수 있고, 높이면 컨트롤 감각이 선명해질 수 있지만 팔 부담도 함께 봐야 합니다.",
    highlight:
      "텐션은 남의 숫자를 따라 하는 것이 아니라 내 공 길이와 팔 상태를 기록해 찾는 값입니다.",
    tags: ["스트링 텐션", "타구감", "팔 부담", "장비 선택"],
    content: `
      <p>같은 50파운드라도 라켓, 스트링 종류, 날씨, 스윙 속도에 따라 전혀 다르게 느껴집니다. 그래서 텐션은 숫자가 아니라 기록으로 찾아야 합니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>팔이 아프고 공이 짧다면 텐션과 스트링 종류를 함께 봐야 합니다.</li>
          <li>공이 계속 길면 텐션보다 스윙 궤도와 중심 타격률도 확인해야 합니다.</li>
          <li>한 번에 크게 바꾸지 말고 2파운드 단위로 조정하는 것이 안전합니다.</li>
        </ul>
      </div>
      <h2>텐션을 낮출 때와 높일 때</h2>
      <table>
        <thead><tr><th>조정</th><th>기대 효과</th><th>주의점</th></tr></thead>
        <tbody>
          <tr><td>낮춤</td><td>반발력·편안함 증가</td><td>공이 길어질 수 있음</td></tr>
          <tr><td>높임</td><td>컨트롤 감각 선명</td><td>팔 부담 증가 가능</td></tr>
          <tr><td>스트링 변경</td><td>타구감 변화 큼</td><td>텐션과 함께 기록 필요</td></tr>
        </tbody>
      </table>
      <h2>동호인에게 필요한 기록법</h2>
      <p>스트링 날짜, 텐션, 스트링 종류, 경기 후 팔 상태, 공 길이를 적으면 다음 선택이 쉬워집니다. 특히 폴리 스트링은 끊어지지 않아도 성능 저하를 체감할 수 있으니 사용 시간을 기록하는 편이 좋습니다.</p>
      <p>현재 조건을 계산해보고 싶다면 <a href="/utility/string-tension">스트링 텐션 계산기</a>를 사용하세요. 장비 규정과 기본 정보는 <a href="https://www.itftennis.com/en/about-us/governance/rules-and-regulations/" rel="noopener noreferrer">ITF Rules and Regulations</a>를 참고할 수 있습니다.</p>
    `,
    faq: [
      {
        question: "초보자는 텐션을 몇 파운드로 해야 하나요?",
        answer:
          "라켓과 스트링에 따라 다르지만 중간 권장 범위에서 시작하고, 팔 부담과 공 길이를 보고 2파운드 단위로 조정하는 것이 좋습니다.",
      },
      {
        question: "텐션을 낮추면 무조건 팔에 좋은가요?",
        answer:
          "대체로 편안해질 수 있지만 무조건은 아닙니다. 스트링 종류와 스윙 타이밍도 함께 봐야 합니다.",
      },
      {
        question: "프로 선수 텐션을 따라 해도 되나요?",
        answer:
          "권장하지 않습니다. 프로는 스윙 속도와 피지컬이 다르고 매번 새 스트링을 쓰는 경우가 많습니다.",
      },
    ],
  },
  "common-tennis-racket-mistakes": {
    summary:
      "라켓 선택 실패는 브랜드보다 기준 부재에서 생깁니다. 무게, 헤드 크기, 그립 크기, 스트링 비용, 시타 방식까지 함께 봐야 첫 라켓과 두 번째 라켓 모두 실패 확률을 줄일 수 있습니다.",
    highlight:
      "좋은 라켓은 유명한 라켓이 아니라 내 타점이 늦지 않는 라켓입니다.",
    tags: ["라켓 추천", "초보자 라켓", "그립 크기", "장비 선택"],
    content: `
      <p>라켓을 잘못 고르는 사람은 대개 너무 적게 알아서가 아니라 너무 많은 추천을 한꺼번에 봐서 기준을 잃습니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>초보자는 프로 사용 모델보다 조작성과 팔 부담을 먼저 봐야 합니다.</li>
          <li>시타는 포핸드만 하지 말고 리턴, 발리, 수비 공까지 해봐야 합니다.</li>
          <li>라켓 가격보다 스트링 교체 비용과 그립 관리 비용도 함께 계산해야 합니다.</li>
        </ul>
      </div>
      <h2>라켓 고를 때 흔한 실수 5가지</h2>
      <table>
        <thead><tr><th>실수</th><th>왜 문제인가</th><th>대안</th></tr></thead>
        <tbody>
          <tr><td>프로 모델 추종</td><td>무겁고 어렵다</td><td>내 스윙 속도 기준</td></tr>
          <tr><td>디자인 우선</td><td>실전 조작성 놓침</td><td>20분 이상 시타</td></tr>
          <tr><td>무게만 비교</td><td>밸런스 차이 무시</td><td>스윙웨이트 확인</td></tr>
          <tr><td>그립 크기 무시</td><td>손목 부담 증가</td><td>그립 사이즈 체크</td></tr>
          <tr><td>스트링 비용 제외</td><td>유지비 착각</td><td>교체 주기 포함</td></tr>
        </tbody>
      </table>
      <h2>첫 라켓 선택 기준</h2>
      <p>입문자는 너무 어려운 라켓을 고르면 레슨에서 배운 동작이 몸에 남기 어렵습니다. 공을 세게 보내는 느낌보다, 늦지 않게 준비하고 중심에 맞힐 수 있는지를 봐야 합니다. 두 번째 라켓부터는 부족한 점을 보완하는 방향으로 가면 됩니다.</p>
      <p><a href="/utility/equipment-recommendation">장비 추천 도구</a>와 <a href="/utility/grip-size-checker">그립 사이즈 체크</a>를 함께 쓰면 후보를 줄일 수 있습니다.</p>
    `,
    faq: [
      {
        question: "초보자는 헤드가 큰 라켓이 좋나요?",
        answer:
          "대체로 중심 타격이 쉬워 도움이 됩니다. 다만 너무 가볍거나 균형이 맞지 않으면 스윙이 불안할 수 있습니다.",
      },
      {
        question: "중고 라켓을 사도 되나요?",
        answer:
          "상태를 확인할 수 있다면 가능합니다. 프레임 손상, 그립 상태, 스트링 교체 비용을 반드시 봐야 합니다.",
      },
      {
        question: "라켓은 얼마나 오래 쓰나요?",
        answer:
          "사용 빈도와 관리에 따라 다릅니다. 프레임보다 스트링과 그립 관리를 꾸준히 하는 것이 체감 성능에 더 중요합니다.",
      },
    ],
  },
  "alcaraz-vs-sinner-analysis": {
    summary:
      "알카라스와 시너는 모두 차세대 정상급 선수지만 승리 방식은 다릅니다. 알카라스는 변주와 전환, 시너는 간결한 템포와 깊이로 상대를 압박합니다. 동호인은 두 선수의 위너보다 포인트 설계 방식을 배워야 합니다.",
    highlight:
      "알카라스는 코트를 흔들고, 시너는 시간을 빼앗습니다.",
    tags: ["알카라스", "시너", "ATP", "테니스 전술"],
    content: `
      <p>알카라스와 시너의 경기를 볼 때 위너 장면만 보면 절반만 본 것입니다. 진짜 차이는 공을 치기 전 위치와 다음 공을 강제하는 방식에 있습니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>알카라스는 드롭샷, 로브, 네트 전환으로 상대 위치를 흔듭니다.</li>
          <li>시너는 빠른 템포와 깊은 공으로 상대 시간을 빼앗습니다.</li>
          <li>동호인은 두 선수의 기술보다 첫 공격을 만드는 순서를 배워야 합니다.</li>
        </ul>
      </div>
      <h2>알카라스와 시너의 전술 차이</h2>
      <table>
        <thead><tr><th>항목</th><th>알카라스</th><th>시너</th></tr></thead>
        <tbody>
          <tr><td>핵심 무기</td><td>변주, 전환, 드롭샷</td><td>템포, 깊이, 양쪽 압박</td></tr>
          <tr><td>포인트 설계</td><td>상대 위치를 흔든 뒤 마무리</td><td>빠른 랠리로 시간 제거</td></tr>
          <tr><td>동호인 적용</td><td>깊은 공 뒤 짧은 공 처리</td><td>크로스 깊이와 빠른 준비</td></tr>
        </tbody>
      </table>
      <h2>알카라스에게 배울 점</h2>
      <p>무조건 드롭샷을 따라 하는 것이 아닙니다. 상대를 뒤로 밀어놓은 뒤 짧은 공을 쓰는 순서를 배워야 합니다. 준비 없이 쓰는 드롭샷은 전술이 아니라 도박입니다.</p>
      <h2>시너에게 배울 점</h2>
      <p>시너의 강점은 큰 동작이 아니라 반복 가능한 타이밍입니다. 동호인은 공을 더 세게 치기보다 같은 준비 속도로 깊게 보내는 훈련을 해야 합니다. ATP 공식 기록과 선수 정보는 <a href="https://www.atptour.com" rel="noopener noreferrer">ATP Tour</a>에서 확인할 수 있습니다.</p>
      <p>상대 유형을 분석하려면 <a href="/utility/opponent-analyzer">상대 분석 도구</a>를 사용해 첫 공격과 실점 패턴을 기록하세요.</p>
    `,
    faq: [
      {
        question: "알카라스와 시너 중 누가 더 공격적인가요?",
        answer:
          "둘 다 공격적이지만 방식이 다릅니다. 알카라스는 변주와 전환이 강하고, 시너는 빠른 템포와 깊이로 압박합니다.",
      },
      {
        question: "동호인이 알카라스 드롭샷을 따라 해도 되나요?",
        answer:
          "상황이 맞을 때만 좋습니다. 상대를 뒤로 밀어놓지 않은 상태에서 쓰면 오히려 쉬운 공을 줄 수 있습니다.",
      },
      {
        question: "시너 스타일을 연습하려면 무엇부터 해야 하나요?",
        answer:
          "크로스 깊이와 빠른 준비가 먼저입니다. 강한 공보다 같은 타이밍으로 깊게 보내는 능력이 핵심입니다.",
      },
    ],
  },
  "best-tennis-rackets-2024": {
    summary:
      "2024년 추천 라켓 목록은 2026년에도 참고할 수 있지만 그대로 믿으면 안 됩니다. 모델 순위보다 내 스윙 속도, 팔 부담, 스트링 조합, 중고 가격, 시타 가능성을 기준으로 다시 해석해야 합니다.",
    highlight:
      "라켓 추천 글은 정답표가 아니라 후보를 줄이는 출발점입니다.",
    tags: ["테니스 라켓 추천", "라켓 리뷰", "2026 라켓", "장비 선택"],
    content: `
      <p>작년에 좋았던 라켓이 올해 나에게도 좋은 라켓이라는 보장은 없습니다. 라켓은 출시연도보다 내 몸과 스윙에 맞는지가 먼저입니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>추천 순위보다 무게, 헤드 크기, 밸런스, 스트링 조합을 먼저 봅니다.</li>
          <li>초보자는 상급자용 컨트롤 라켓보다 조작성 좋은 모델이 유리합니다.</li>
          <li>2024 인기 모델은 중고가와 시타 가능성이 좋아 여전히 후보가 될 수 있습니다.</li>
        </ul>
      </div>
      <h2>2024 추천 라켓을 다시 볼 때 기준</h2>
      <table>
        <thead><tr><th>기준</th><th>왜 중요한가</th><th>확인법</th></tr></thead>
        <tbody>
          <tr><td>무게</td><td>준비 속도와 팔 부담</td><td>20분 시타</td></tr>
          <tr><td>헤드 크기</td><td>중심 타격 난도</td><td>리턴과 수비 공 확인</td></tr>
          <tr><td>스트링</td><td>타구감과 유지비</td><td>교체 비용 포함</td></tr>
          <tr><td>중고가</td><td>교체 리스크 감소</td><td>상태와 프레임 확인</td></tr>
        </tbody>
      </table>
      <h2>입문자와 중급자의 선택은 다릅니다</h2>
      <p>입문자는 공을 중심에 맞히는 횟수를 늘려야 합니다. 중급자는 자신의 약점이 파워인지 컨트롤인지, 수비 전환인지에 따라 라켓을 고릅니다. 같은 모델도 스트링 조합이 바뀌면 전혀 다르게 느껴질 수 있습니다.</p>
      <h2>추천 목록을 쓰는 올바른 방법</h2>
      <p>추천 글에서 후보 3개만 남기고 직접 시타하세요. 포핸드만 치지 말고 리턴, 발리, 높은 공, 수비 공을 모두 확인해야 합니다. <a href="/utility/equipment-recommendation">장비 추천 도구</a>로 후보를 좁히고 <a href="/utility/string-tension">스트링 텐션 계산기</a>로 세팅을 맞추면 실패 확률이 줄어듭니다.</p>
    `,
    faq: [
      {
        question: "2024년 라켓 추천 모델을 지금 사도 되나요?",
        answer:
          "상태와 가격이 좋다면 가능합니다. 다만 내 스윙 속도와 팔 부담에 맞는지 시타로 확인해야 합니다.",
      },
      {
        question: "초보자는 비싼 라켓이 좋은가요?",
        answer:
          "가격보다 조작성과 편안함이 중요합니다. 비싼 상급자 라켓이 초보자에게 더 어려울 수 있습니다.",
      },
      {
        question: "라켓 추천에서 가장 먼저 볼 항목은 무엇인가요?",
        answer:
          "무게와 헤드 크기, 그립 크기입니다. 그 다음 스트링 조합과 유지비를 봐야 합니다.",
      },
    ],
  },
  "tennis-elbow-prevention": {
    summary:
      "테니스 엘보는 통증이 갑자기 생긴 것처럼 보여도 스트링, 그립, 늦은 타점, 과한 악력, 회복 부족이 누적된 결과인 경우가 많습니다. 통증 전 체크리스트로 위험 신호를 줄여야 합니다.",
    highlight:
      "테니스 엘보 예방은 스트레칭 하나가 아니라 장비, 타점, 회복을 함께 관리하는 일입니다.",
    tags: ["테니스 엘보", "팔꿈치 통증", "부상 예방", "스트레칭"],
    content: `
      <p>팔꿈치 바깥쪽이 찌릿한 날에는 연습량만 줄인다고 해결되지 않을 수 있습니다. 왜 팔꿈치가 일을 떠안았는지 찾아야 합니다.</p>
      <div class="tf-tldr">
        <p class="tf-tldr-title">핵심 요약</p>
        <ul>
          <li>늦은 타점과 딱딱한 스트링은 팔꿈치 부담을 키울 수 있습니다.</li>
          <li>그립이 미끄러지면 악력이 올라가고 손목·팔꿈치가 긴장합니다.</li>
          <li>통증이 지속되면 운동을 줄이고 전문가 상담을 받아야 합니다.</li>
        </ul>
      </div>
      <h2>테니스 엘보 위험 신호 6가지</h2>
      <table>
        <thead><tr><th>신호</th><th>가능한 원인</th><th>대응</th></tr></thead>
        <tbody>
          <tr><td>백핸드 때 통증</td><td>늦은 타점</td><td>앞 타점 훈련</td></tr>
          <tr><td>서브 후 뻐근함</td><td>어깨 회전 부족</td><td>워밍업 강화</td></tr>
          <tr><td>라켓을 세게 쥠</td><td>그립 미끄러짐</td><td>오버그립 교체</td></tr>
          <tr><td>공이 딱딱하게 느낌</td><td>스트링·텐션 문제</td><td>세팅 점검</td></tr>
          <tr><td>다음 날 통증 지속</td><td>회복 부족</td><td>휴식과 강도 조절</td></tr>
          <tr><td>일상 동작 통증</td><td>염증 가능성</td><td>전문가 상담</td></tr>
        </tbody>
      </table>
      <h2>예방 루틴은 짧아야 지속됩니다</h2>
      <ol>
        <li>경기 전 손목 굴곡·신전, 전완 회전, 어깨 외회전을 5분 진행합니다.</li>
        <li>첫 10분은 60% 강도 랠리로 타점을 앞에 둡니다.</li>
        <li>경기 후 팔꿈치와 전완이 뻐근하면 얼음찜질보다 먼저 다음 연습 강도를 줄입니다.</li>
      </ol>
      <p>증상이 반복되면 <a href="/utility/injury-risk">부상 위험 체크</a>로 패턴을 기록하고 의료 전문가와 상의하세요. 테니스 엘보 증상 정보는 <a href="https://www.mayoclinic.org/diseases-conditions/tennis-elbow/symptoms-causes/syc-20351987" rel="noopener noreferrer">Mayo Clinic</a> 자료도 참고할 수 있습니다.</p>
    `,
    faq: [
      {
        question: "테니스 엘보가 있어도 계속 쳐도 되나요?",
        answer:
          "통증이 지속되면 강도를 줄이고 전문가 상담을 받는 것이 좋습니다. 참고 치면 회복이 늦어질 수 있습니다.",
      },
      {
        question: "스트링이 테니스 엘보와 관련 있나요?",
        answer:
          "관련될 수 있습니다. 딱딱한 스트링과 높은 텐션은 팔 부담을 키울 수 있어 세팅 점검이 필요합니다.",
      },
      {
        question: "예방 스트레칭만 하면 충분한가요?",
        answer:
          "아닙니다. 타점, 장비, 그립, 회복, 연습량을 함께 관리해야 예방 효과가 커집니다.",
      },
    ],
  },
};

export const BLOG_CONTENT_PART5_SCHEDULED: Record<string, BlogContentEntry> = {
  ...(Object.fromEntries(
    scheduledTopics.map((topic) => [
      topic.slug,
      {
        summary: `이 글은 ${topic.intent}을 다룹니다. 대상 독자가 ${topic.audience}인 경우 바로 적용할 수 있도록 첫 단계, 흔한 실수, 측정 기준을 함께 정리했습니다.`,
        highlight: topic.firstStep,
        tags: topic.tags,
        content: buildContent(topic),
        faq: [
          {
            question: `${topic.title}은 어떤 사람에게 필요한가요?`,
            answer: `${topic.audience}에게 가장 유용합니다. 특히 같은 문제가 반복되는데 원인을 기록하지 못했다면 먼저 적용해볼 만합니다.`,
          },
          {
            question: `가장 먼저 해야 할 일은 무엇인가요?`,
            answer: topic.firstStep,
          },
          {
            question: `실력이 빨리 늘지 않는 가장 흔한 이유는 무엇인가요?`,
            answer: topic.mistake,
          },
          {
            question: `연습 효과는 어떻게 확인하나요?`,
            answer: `${topic.metric}을 경기 전후로 기록하면 감이 아니라 변화로 판단할 수 있습니다.`,
          },
        ],
      },
    ]),
  ) as Record<string, BlogContentEntry>),
  ...featuredArticleOverrides,
};
