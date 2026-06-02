#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part17-quality-rewrites.ts",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-part17-overrides.js");

const sources = {
  rules: [
    ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
    ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
  ],
  coaching: [
    ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
    ["Tennis Australia Coaching", "https://www.tennis.com.au/play/coaching"],
  ],
  health: [
    ["Mayo Clinic Sports Injuries", "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/sports-injuries/art-20044712"],
    ["CDC Physical Activity Basics", "https://www.cdc.gov/physical-activity-basics/"],
  ],
  equipment: [
    ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
    ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
  ],
};

const internalLinks = {
  serve: ["/utility/serve-placement-mapper", "/blog/tennis-serve-toss-technique", "/blog/tennis-second-serve-confidence-guide"],
  return: ["/utility/reaction-test", "/blog/tennis-return-of-serve-guide", "/blog/tennis-split-step-timing-guide"],
  doubles: ["/utility/doubles-positioning-simulator", "/blog/tennis-doubles-strategy-guide", "/blog/tennis-doubles-communication"],
  court: ["/utility/court-surface-advisor", "/utility/weather-check", "/blog/tennis-windy-day-strategy"],
  equipment: ["/utility/equipment-recommendation", "/utility/string-tension", "/blog/tennis-racket-selection-guide"],
  health: ["/utility/injury-risk", "/utility/warmup-routine-builder", "/blog/tennis-injury-prevention-full-guide"],
  practice: ["/utility/practice-drill-generator", "/utility/goal-setting", "/blog/tennis-practice-journal-guide"],
  match: ["/utility/match-analyzer", "/utility/ntrp-test", "/blog/tennis-match-flow-reading"],
};

const linkLabels = {
  "/utility/serve-placement-mapper": "서브 코스 기록 도구",
  "/blog/tennis-serve-toss-technique": "서브 토스 교정 가이드",
  "/blog/tennis-second-serve-confidence-guide": "세컨드 서브 안정 루틴",
  "/utility/reaction-test": "반응 속도 테스트",
  "/blog/tennis-return-of-serve-guide": "리턴 오브 서브 가이드",
  "/blog/tennis-split-step-timing-guide": "스플릿 스텝 타이밍",
  "/utility/doubles-positioning-simulator": "복식 위치 시뮬레이터",
  "/blog/tennis-doubles-strategy-guide": "복식 전술 가이드",
  "/blog/tennis-doubles-communication": "복식 콜과 커뮤니케이션",
  "/utility/court-surface-advisor": "코트 표면 선택 도구",
  "/utility/weather-check": "날씨 체크 도구",
  "/blog/tennis-windy-day-strategy": "바람 부는 날 경기 전략",
  "/utility/equipment-recommendation": "장비 추천 도구",
  "/utility/string-tension": "스트링 텐션 계산기",
  "/blog/tennis-racket-selection-guide": "라켓 선택 가이드",
  "/utility/injury-risk": "부상 위험 체크",
  "/utility/warmup-routine-builder": "워밍업 루틴 빌더",
  "/blog/tennis-injury-prevention-full-guide": "테니스 부상 예방 가이드",
  "/utility/practice-drill-generator": "연습 드릴 생성기",
  "/utility/goal-setting": "연습 목표 설정 도구",
  "/blog/tennis-practice-journal-guide": "테니스 연습 일지",
  "/utility/match-analyzer": "경기 분석 도구",
  "/utility/ntrp-test": "NTRP 테스트",
  "/blog/tennis-match-flow-reading": "경기 흐름 읽기",
};

const rows = [
  ["aw-014-beginner", "레슨 질문 타이밍 잡기", "레슨 질문을 기술명보다 상황, 반복 실수, 다음 연습 기준으로 정리해 초보와 중급의 성장 차이를 만듭니다.", "입문 가이드", ["레슨 질문", "초보 테니스", "연습 기준"], "practice", "coaching", "질문을 많이 하는 것보다 코치가 바로 교정할 수 있는 형태로 바꾸는 법", "레슨이 끝난 뒤 무엇을 물어봐야 할지 모르는 입문자", "다음 레슨 전 확인할 한 가지 기준"],
  ["aw-015-court-record", "비 오는 날 코트 판단 기록법", "비 오는 날 코트 사용 여부를 바닥 미끄러움, 바운드, 조명, 이동 동선 기준으로 기록합니다.", "코트 환경", ["비 오는 날 코트", "코트 판단", "안전 기록"], "court", "rules", "날씨보다 바닥 상태와 이동 위험을 먼저 보는 판단 순서", "예약은 잡혔지만 비 예보 때문에 취소 여부가 애매한 동호인", "안전하게 멈출 수 있는지"],
  ["aw-016-tennis-guide", "레슨비 아깝지 않은 복습 순서", "레슨비를 낭비하지 않도록 배운 내용을 메모, 영상, 한 가지 반복 과제로 연결하는 복습 순서입니다.", "레슨 가이드", ["레슨비", "복습 순서", "테니스 연습"], "practice", "coaching", "레슨 직후 10분 복습으로 다음 주 같은 지적을 줄이는 방식", "레슨 때는 이해했지만 혼자 치면 다시 무너지는 사람", "같은 지적의 반복 여부"],
  ["aw-017-doubles", "복식 전위 자리 비우기 줄이기", "복식 전위가 자리를 비우는 순간을 포치 욕심, 파트너 위치, 상대 타점으로 나눠 점검합니다.", "복식 전술", ["복식 전위", "포치 판단", "파트너 커버"], "doubles", "coaching", "전위가 움직이지 말아야 할 때를 먼저 정하는 역방향 복식 전략", "포치 후 빈 공간으로 계속 실점하는 복식 플레이어", "파트너가 커버할 수 있는 거리"],
  ["aw-018-match", "경기 가방 준비 순서", "테니스 경기 가방을 시간대, 날씨, 코트 표면, 예비 장비 기준으로 준비하는 실전 체크입니다.", "경기 준비", ["경기 가방", "테니스 준비물", "예비 장비"], "equipment", "rules", "물건 목록보다 빠뜨리면 경기력이 바로 흔들리는 순서로 묶기", "경기장에 도착해서 그립, 물, 양말을 자주 놓치는 사람", "현장에서 대체할 수 없는 항목"],
  ["aw-019-beginner-racket-20", "첫 라켓 감각 20분 점검", "초보가 첫 라켓을 고를 때 무게보다 스윙 속도, 타점 안정, 손목 부담을 20분 안에 확인합니다.", "장비 가이드", ["첫 라켓", "라켓 감각", "20분 점검"], "equipment", "equipment", "스펙 비교 전에 몸이 말해주는 부담 신호를 읽는 테스트", "첫 라켓 후보가 여러 개라 결정이 늦어지는 입문자", "20분 뒤에도 같은 스윙이 가능한지"],
  ["aw-020-tennis-guide", "바람 부는 날 토스 조정", "바람 부는 날 서브 토스를 높이보다 시작 위치, 회전, 목표 코스로 조정하는 기준입니다.", "서브 전략", ["바람 부는 날", "서브 토스", "코스 조정"], "serve", "coaching", "강하게 넣기보다 토스 흔들림을 줄이는 안전한 코스 선택", "실외 코트에서 바람만 불면 더블폴트가 늘어나는 사람", "토스가 몸 앞에 남는지"],
  ["aw-021-club-match", "대회 전날 가방 체크", "동호회 경기 전날 가방을 규칙, 날씨, 대기 시간, 회복 물품 기준으로 정리합니다.", "동호회 운영", ["대회 전날", "가방 체크", "동호회 경기"], "equipment", "rules", "경기 당일 아침의 판단 부담을 줄이는 전날 준비 흐름", "첫 동호회 대회 전 무엇을 챙길지 불안한 사람", "당일 아침 새로 결정할 항목이 남지 않는지"],
  ["aw-022-return-record", "리턴 게임 로브 타이밍 기록", "리턴 게임에서 로브를 언제 올릴지 상대 전위 깊이, 서버 위치, 내 준비 시간을 기준으로 기록합니다.", "리턴 전략", ["리턴 게임", "로브 타이밍", "상대 전위"], "return", "coaching", "로브를 도망가는 샷이 아니라 상대 전위 위치를 벌리는 선택지로 쓰기", "강한 전위에게 리턴이 계속 걸리는 복식 리시버", "전위가 네트에 붙은 순간"],
  ["aw-023-shoes-court-shoes", "클레이화와 하드화 차이 판단", "클레이화와 하드화 차이를 접지, 미끄러짐, 내구성, 발목 안정감 기준으로 비교합니다.", "장비 가이드", ["클레이화", "하드화", "테니스화 선택"], "equipment", "equipment", "디자인보다 코트 표면에서 멈추고 다시 출발하는 감각을 우선하기", "테니스화를 하나만 사도 되는지 고민하는 동호인", "주로 뛰는 코트 표면"],
  ["aw-024-tennis-guide", "출근 전 짧은 테니스 훈련", "출근 전 짧은 테니스 훈련을 몸풀기, 한 가지 기술, 기록으로 줄입니다.", "훈련 가이드", ["출근 전", "짧은 훈련", "테니스 루틴"], "practice", "coaching", "짧은 시간일수록 땀보다 반복 기준을 남기는 루틴", "평일 시간이 부족해 주말에만 몰아서 치는 직장인", "다음 훈련 때 이어갈 기록"],
  ["aw-025-court-5", "더디 코트 바운드 적응 5단계", "느린 코트에서 바운드가 죽을 때 준비 위치, 무릎, 스윙 길이를 5단계로 조정합니다.", "코트 환경", ["느린 코트", "바운드 적응", "5단계"], "court", "coaching", "공을 세게 치기보다 늦게 오는 공을 먼저 기다리는 법", "느린 실내 코트에서 타점이 계속 앞서 나가는 사람", "첫 준비가 너무 빠른지"],
  ["aw-026-court-beginner", "테니스 여행 코트 예약 기준", "테니스 여행에서 코트 예약을 위치, 이동 시간, 장비 대여, 취소 규정으로 점검합니다.", "여행 가이드", ["테니스 여행", "코트 예약", "이동 시간"], "court", "rules", "코트 자체보다 여행 일정 전체가 무너지지 않는 예약 기준", "여행지에서 테니스를 넣고 싶은 초보 동호인", "비 와도 대체 일정이 있는지"],
  ["aw-027-doubles-return-record", "복식 리턴 사인 기록법", "복식 리턴 사인을 전위 위치, 서버 코스, 파트너 콜 기준으로 정리합니다.", "복식 전술", ["복식 리턴", "사인 기록", "파트너 콜"], "doubles", "coaching", "사인을 많이 만들기보다 서로 헷갈리지 않는 세 단어로 고정하기", "리턴 전 파트너와 말이 엇갈리는 복식 팀", "콜이 늦어도 의미가 유지되는지"],
  ["aw-028-shoes", "테니스화 밑창 마모 확인", "테니스화 밑창 마모를 코트별 미끄러짐, 발목 피로, 교체 시점으로 판단합니다.", "장비 가이드", ["테니스화", "밑창 마모", "교체 시점"], "equipment", "equipment", "신발이 멀쩡해 보여도 멈춤 동작에서 위험해지는 신호 찾기", "최근 미끄러짐이 늘었지만 신발 교체가 애매한 사람", "급정지 때 발이 밀리는지"],
  ["aw-029-1", "주 1회 동호인 실력 유지법", "주 1회 치는 동호인이 감각을 잃지 않도록 목표를 한 가지 기술과 한 가지 기록으로 줄입니다.", "훈련 가이드", ["주 1회", "동호인 실력", "유지 훈련"], "practice", "coaching", "연습량이 적을수록 매번 다른 목표를 버리는 전략", "일주일에 한 번밖에 코트에 못 가는 직장인", "지난주와 같은 기준으로 비교 가능한지"],
  ["aw-030-court", "클레이코트 슬라이딩 입문", "클레이코트 슬라이딩을 멈춤 동작, 균형 회복, 다음 샷 준비 기준으로 시작합니다.", "코트 환경", ["클레이코트", "슬라이딩", "균형 회복"], "court", "coaching", "멋진 미끄러짐보다 멈춘 뒤 다음 공을 칠 수 있는 자세 만들기", "클레이에서 발이 걸리거나 과하게 미끄러지는 사람", "슬라이딩 뒤 어깨가 남는지"],
  ["aw-031-20", "주말 테니스 예산 20분 계산", "주말 테니스 예산을 코트비, 공, 교통, 식사, 장비 소모로 나눠 20분 안에 정리합니다.", "동호회 운영", ["주말 테니스", "예산 계산", "20분 정리"], "practice", "rules", "돈을 아끼기보다 자주 치기 위해 빠지는 비용을 보이게 만들기", "한 달 테니스 비용이 생각보다 커진 동호인", "반복 지출과 일회성 지출 구분"],
  ["aw-032-serve", "상대 몸쪽 서브 기준", "상대 몸쪽 서브를 힘보다 토스 위치, 회전, 리턴 공간 차단 기준으로 선택합니다.", "서브 전략", ["몸쪽 서브", "서브 코스", "리턴 공간"], "serve", "coaching", "위험한 코스가 아니라 상대 준비 시간을 줄이는 코스로 이해하기", "서브 코스가 항상 와이드와 센터만 반복되는 사람", "상대가 몸을 비트는지"],
  ["aw-033-grip-club-match", "오버그립 미끄러짐 교체 신호", "오버그립 미끄러짐을 땀, 표면 마모, 손목 힘 증가, 경기 집중도 기준으로 판단합니다.", "장비 가이드", ["오버그립", "미끄러짐", "교체 신호"], "equipment", "equipment", "그립이 낡았는지보다 손에 힘이 더 들어가는 순간을 찾기", "동호회 경기 중 라켓이 손에서 도는 사람", "손목으로 라켓을 잡아두는지"],
  ["aw-034-record", "볼머신 연습 목표 기록", "볼머신 연습을 횟수보다 타점, 깊이, 회복 스텝 기준으로 기록합니다.", "훈련 가이드", ["볼머신", "연습 목표", "타점 기록"], "practice", "coaching", "많이 치는 날을 잘 친 날로 착각하지 않는 기록법", "볼머신 30분 후 무엇이 나아졌는지 모르는 사람", "같은 위치에서 반복 가능한지"],
  ["aw-035-court", "하드코트 미끄러짐 줄이기", "하드코트에서 미끄러짐을 줄이기 위해 첫 발, 정지 동작, 신발 밑창을 함께 점검합니다.", "코트 환경", ["하드코트", "미끄러짐", "정지 동작"], "court", "health", "코트 문제로만 보지 않고 신발과 감속 습관을 함께 점검하기", "하드코트에서 급정지 때 발목이 불안한 사람", "멈출 때 상체가 먼저 나가는지"],
  ["aw-036-women", "여성 동호인 어깨 부담 관리", "여성 동호인이 어깨 부담을 느낄 때 서브 강도, 라켓 무게, 회복 루틴을 함께 조정합니다.", "건강 & 피트니스", ["여성 동호인", "어깨 부담", "회복 루틴"], "health", "health", "근력 문제가 아니라 반복량과 장비 부담의 조합으로 보기", "서브 후 어깨가 뻐근하지만 연습을 멈추기 어려운 사람", "통증이 다음날 남는지"],
  ["aw-037-return-5", "리턴 첫 발 타이밍 5가지", "리턴 첫 발이 늦을 때 스플릿 스텝, 상대 토스, 임팩트 소리 기준으로 바로 고칩니다.", "리턴 전략", ["리턴 첫 발", "스플릿 스텝", "5가지 기준"], "return", "coaching", "공을 보고 움직이는 습관에서 상대 임팩트 전에 준비하는 습관으로 바꾸기", "서브가 빠르지 않아도 리턴이 밀리는 사람", "착지가 임팩트 직전인지"],
  ["aw-038-string-beginner", "하이브리드 스트링 입문", "하이브리드 스트링을 파워보다 팔 부담, 감각, 내구성 기준으로 입문자에게 맞게 고릅니다.", "장비 가이드", ["하이브리드 스트링", "입문자", "팔 부담"], "equipment", "equipment", "프로 세팅을 따라 하기보다 내 팔과 스윙 속도에 맞추기", "스트링 종류가 많아 선택이 어려운 입문자", "팔꿈치 부담이 늘지 않는지"],
  ["aw-039-30-record", "혼자 연습 30분 루틴", "혼자 연습 30분 루틴을 벽치기, 풋워크, 기록으로 나눠 지속성을 만듭니다.", "훈련 가이드", ["혼자 연습", "30분 루틴", "벽치기"], "practice", "coaching", "혼자 할수록 지루함보다 기준 없는 반복을 줄이기", "파트너가 없어도 감각을 유지하고 싶은 사람", "30분 뒤 남는 기록이 있는지"],
  ["aw-040-match", "경기 후 다음 연습 주제 정하기", "경기 후 다음 연습 주제를 승패가 아니라 반복 실수, 득점 패턴, 체력 저하 기준으로 정합니다.", "경기 분석", ["경기 후 복기", "연습 주제", "반복 실수"], "match", "coaching", "기분 좋은 샷보다 다시 나올 실수를 먼저 골라내는 복기법", "경기 후 무엇을 연습해야 할지 매번 바뀌는 사람", "다음 경기에서 확인 가능한지"],
  ["aw-041-women-beginner-racket", "여성 입문자 라켓 무게 선택", "여성 입문자 라켓 무게를 팔 힘보다 스윙 완주, 타점 안정, 부상 부담 기준으로 고릅니다.", "장비 가이드", ["여성 입문자", "라켓 무게", "부상 부담"], "equipment", "equipment", "가벼운 라켓이 항상 쉬운 선택은 아니라는 점을 몸 기준으로 확인하기", "285g과 300g 사이에서 고민하는 여성 입문자", "후반에도 스윙이 짧아지지 않는지"],
  ["aw-042-serve-return", "강한 서브 리턴 깊게 막기", "강한 서브를 리턴할 때 크게 휘두르기보다 준비 위치, 짧은 백스윙, 깊이 목표로 막습니다.", "리턴 전략", ["강한 서브", "리턴 깊이", "짧은 백스윙"], "return", "coaching", "공격 리턴보다 상대 첫 공격을 늦추는 깊이 확보", "빠른 서브 앞에서 라켓이 늦게 나오는 사람", "리턴이 서비스라인을 넘는지"],
  ["aw-043-string-20", "멀티필라멘트 스트링 20분 감각", "멀티필라멘트 스트링이 맞는지 20분 동안 반발력, 팔 부담, 컨트롤 감각으로 확인합니다.", "장비 가이드", ["멀티필라멘트", "스트링 감각", "20분 테스트"], "equipment", "equipment", "첫 느낌의 부드러움과 실제 경기 컨트롤을 분리해서 보기", "팔 부담 때문에 스트링 변경을 고민하는 사람", "짧은 공이 늘지 않는지"],
  ["aw-044-tennis-guide", "레슨 복습 노트 작성법", "레슨 복습 노트를 지적 문장, 원인, 다음 연습 과제로 나눠 적는 방법입니다.", "레슨 가이드", ["레슨 복습", "노트 작성", "연습 과제"], "practice", "coaching", "코치의 말을 오래 보관하는 것이 아니라 다음 행동으로 바꾸기", "레슨 내용을 금방 잊어 같은 실수를 반복하는 사람", "한 문장으로 다음 과제가 남는지"],
  ["aw-045-record-club-match", "타이브레이크 기록법", "타이브레이크를 서브 선택, 리턴 위치, 첫 실수 원인 기준으로 기록합니다.", "경기 분석", ["타이브레이크", "기록법", "첫 실수"], "match", "rules", "7점 안에서 흔들린 순간을 짧게 복기하는 경기 기록법", "타이브레이크만 가면 판단이 빨라지는 동호인", "첫 두 포인트 선택이 명확했는지"],
  ["aw-046-junior-record", "주니어 부모 체크리스트", "주니어 선수 부모가 경기 결과보다 수면, 통증, 연습 태도, 코치 피드백을 기록하는 기준입니다.", "주니어 가이드", ["주니어 테니스", "부모 체크리스트", "코치 피드백"], "practice", "health", "아이의 승패보다 다음 주 훈련 환경을 지키는 관찰법", "자녀 경기 후 어떤 말을 해야 할지 고민하는 부모", "아이 몸과 마음이 회복되는지"],
  ["aw-047-return", "리턴 스플릿 스텝 타이밍", "리턴 스플릿 스텝을 상대 토스, 임팩트, 착지 시점으로 나눠 교정합니다.", "리턴 전략", ["리턴 스플릿 스텝", "타이밍", "착지 시점"], "return", "coaching", "빨리 움직이는 것보다 맞는 순간에 착지하는 감각 만들기", "리턴 준비는 빠른데 첫 발이 늦는 사람", "착지가 너무 이른지"],
  ["aw-048-string", "느린 스트링 팔 부담 줄이기", "느린 스트링 세팅에서 팔 부담이 늘 때 텐션, 스윙 길이, 교체 시점을 함께 봅니다.", "장비 가이드", ["느린 스트링", "팔 부담", "텐션 조정"], "equipment", "health", "공이 안 나간다는 느낌을 힘으로 해결하지 않는 장비 점검", "최근 공이 짧아져 팔에 힘을 더 쓰는 사람", "팔꿈치 부담이 함께 늘었는지"],
  ["aw-049-court-5", "겨울 실내 코트 준비 5가지", "겨울 실내 코트에서 몸이 늦게 풀릴 때 체온, 신발, 공 반발, 조명 적응을 점검합니다.", "코트 환경", ["겨울 실내 코트", "체온 관리", "5가지 준비"], "court", "health", "추위를 이기려 세게 치기보다 시작 15분을 안전하게 설계하기", "겨울 실내 첫 세 게임이 늘 무거운 사람", "첫 랠리 전 체온이 올라왔는지"],
  ["aw-050-beginner", "브레이크 포인트 복기법", "브레이크 포인트에서 흔들린 선택을 서브 코스, 리턴 위치, 랠리 첫 공으로 복기합니다.", "경기 분석", ["브레이크 포인트", "복기법", "랠리 첫 공"], "match", "rules", "중요 포인트를 멘탈 탓으로만 넘기지 않는 복기 질문", "브레이크 포인트마다 같은 실수를 반복하는 사람", "첫 선택이 원래 계획과 같았는지"],
  ["aw-051-beginner-90-record", "성인 입문 90일 계획 기록", "성인 입문자가 첫 90일 동안 기술 욕심보다 출석, 통증, 랠리 지속 시간을 기록합니다.", "입문 가이드", ["성인 입문", "90일 계획", "랠리 지속"], "practice", "health", "초반 성장은 기술 수보다 꾸준히 칠 수 있는 몸과 루틴 만들기", "테니스를 시작했지만 무엇이 늘었는지 모르는 성인 입문자", "90일 뒤 계속 치고 싶은지"],
  ["aw-052-serve", "왼손잡이 서브 받는 위치", "왼손잡이 서브를 받을 때 사이드스핀, 바디 코스, 리턴 발 위치를 먼저 조정합니다.", "리턴 전략", ["왼손잡이 서브", "리턴 위치", "사이드스핀"], "return", "coaching", "왼손잡이를 특별하게 두려워하기보다 회전 방향을 미리 반영하기", "왼손 서버를 만나면 리턴 방향이 늦게 잡히는 사람", "첫 리턴 위치를 바꿨는지"],
  ["aw-053-string", "스트링 텐션 낮출 시점", "스트링 텐션을 낮출 때 반발력, 팔 부담, 컨트롤 손실을 함께 확인합니다.", "장비 가이드", ["스트링 텐션", "낮출 시점", "컨트롤"], "equipment", "equipment", "텐션 숫자보다 공이 짧아지는 이유와 팔 부담을 동시에 보기", "텐션을 낮추면 공이 날릴까 걱정하는 사람", "깊이가 늘고 실수가 관리되는지"],
  ["aw-055-20", "언포스드 에러 분류 20분", "언포스드 에러를 포핸드, 백핸드보다 상황, 준비, 선택 기준으로 20분 안에 분류합니다.", "경기 분석", ["언포스드 에러", "분류법", "20분 복기"], "match", "coaching", "샷 이름보다 왜 그 선택이 나왔는지로 실수를 분류하기", "경기 후 에러가 많았다는 말만 남는 사람", "다음 연습 주제로 연결되는지"],
  ["aw-056-tennis-guide", "첫 세 포인트 전술 수정", "첫 세 포인트에서 상대 반응을 보고 서브 코스, 리턴 깊이, 랠리 방향을 빠르게 수정합니다.", "경기 전략", ["첫 세 포인트", "전술 수정", "상대 반응"], "match", "rules", "초반 점수보다 상대가 불편해한 패턴을 찾는 관찰법", "경기 시작 후 흐름을 늦게 읽는 동호인", "상대가 피하는 방향이 보이는지"],
  ["aw-057-serve-beginner-club-match", "서브 앤 발리 초보 실수", "서브 앤 발리 초보가 자주 하는 첫 발, 접근 거리, 첫 발리 위치 실수를 줄입니다.", "서브 전략", ["서브 앤 발리", "초보 실수", "첫 발리"], "serve", "coaching", "네트로 뛰는 용기보다 첫 발리 위치를 안정시키는 접근", "동호회 경기에서 서브 후 전진이 늦는 사람", "첫 발리가 서비스라인 안쪽인지"],
  ["aw-058-racket-record", "라켓 밸런스 기록법", "라켓 밸런스와 스윙웨이트 차이를 손목 부담, 헤드 속도, 수비 반응으로 기록합니다.", "장비 가이드", ["라켓 밸런스", "스윙웨이트", "손목 부담"], "equipment", "equipment", "수치만 비교하지 않고 실제 늦어지는 샷을 기록하기", "라켓은 좋아 보이는데 수비가 늦어진 사람", "후반에 헤드가 처지는지"],
  ["aw-059-recovery", "다음날 근육통 줄이는 회복", "테니스 다음날 근육통을 줄이기 위해 쿨다운, 수분, 수면, 가벼운 움직임을 정리합니다.", "건강 & 피트니스", ["근육통", "테니스 회복", "쿨다운"], "health", "health", "운동 직후의 20분이 다음날 연습 가능성을 바꾸는 회복 루틴", "테니스 다음날 몸이 무거워 일상이 흔들리는 사람", "통증과 피로를 구분했는지"],
  ["aw-060-video", "영상 분석 첫 장면 고르기", "영상 분석에서 먼저 볼 장면을 실점 장면보다 준비 위치, 첫 발, 타점 반복으로 고릅니다.", "경기 분석", ["영상 분석", "첫 장면", "타점 반복"], "match", "coaching", "멋진 샷 클립보다 반복적으로 무너지는 전조를 찾기", "경기 영상을 찍어도 어디부터 봐야 할지 모르는 사람", "같은 장면이 세 번 이상 반복되는지"],
  ["aw-061-5", "상대 작전 흔들림 수정 5가지", "상대 작전에 흔들릴 때 점수, 템포, 깊이, 방향, 루틴을 5가지 기준으로 되돌립니다.", "경기 전략", ["상대 작전", "멘탈 루틴", "5가지 기준"], "match", "coaching", "상대 변화에 즉흥 대응하지 않고 내 기준으로 한 번 늦추기", "상대가 슬라이스나 로브를 섞으면 급해지는 사람", "다음 포인트에서 템포를 회복했는지"],
  ["aw-062-serve-record-beginner", "첫 서브 성공 기록법", "첫 서브 성공률을 숫자만 보지 않고 토스, 코스, 점수 상황으로 나눠 기록합니다.", "서브 전략", ["첫 서브", "성공률 기록", "토스 코스"], "serve", "coaching", "성공률 숫자를 다음 서브 선택으로 바꾸는 기록법", "첫 서브가 들어가도 경기 흐름이 좋아지지 않는 사람", "성공한 코스가 의도한 코스인지"],
  ["aw-063-racket-285g-300g-315g-record", "라켓 285g 300g 315g 차이", "라켓 285g, 300g, 315g 차이를 스윙 속도, 안정성, 피로 누적으로 비교합니다.", "장비 가이드", ["라켓 285g", "라켓 300g", "라켓 315g"], "equipment", "equipment", "무거우면 안정적이라는 말을 경기 후반까지 검증하기", "무게별 라켓 후보를 비교하는 중급자", "세트 후반에도 같은 깊이가 나오는지"],
  ["aw-064-match-cooldown", "경기 후 쿨다운 순서", "경기 후 쿨다운을 호흡, 종아리, 어깨, 수분, 기록 순서로 정리합니다.", "건강 & 피트니스", ["경기 후 쿨다운", "회복 순서", "부상 예방"], "health", "health", "운동이 끝난 뒤 바로 앉지 않고 회복 모드로 전환하는 절차", "경기 다음날 뻣뻣함이 큰 동호인", "10분 안에 몸을 식혔는지"],
];

const palette = [
  { border: "#0f766e", bg: "#ecfdf5" },
  { border: "#2563eb", bg: "#eff6ff" },
  { border: "#7c3aed", bg: "#f5f3ff" },
  { border: "#ea580c", bg: "#fff7ed" },
  { border: "#be123c", bg: "#fff1f2" },
  { border: "#4d7c0f", bg: "#f7fee7" },
];

const openings = [
  (title, reader, angle) => `${title}을 찾는 사람은 보통 이미 한두 번 같은 장면을 겪었습니다. ${reader}에게 필요한 것은 더 많은 조언이 아니라 ${angle}입니다.`,
  (title, reader, angle) => `${reader}라면 ${title}은 단순한 팁 목록으로 끝나면 안 됩니다. 이 글은 ${angle}에 맞춰 판단 순서를 좁힙니다.`,
  (title, reader, angle) => `${title}의 핵심은 정답을 외우는 데 있지 않습니다. ${reader}가 코트에서 다시 확인할 수 있도록 ${angle}로 정리합니다.`,
  (title, reader, angle) => `${reader}가 가장 자주 놓치는 부분은 결과가 나온 뒤에야 원인을 찾는다는 점입니다. ${title}은 ${angle}에 초점을 둡니다.`,
];

function esc(value) {
  return JSON.stringify(value);
}

function sourceLinks(kind) {
  return sources[kind]
    .map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>`)
    .join(", ");
}

function linkList(type) {
  return internalLinks[type]
    .map((href) => `<a href="${href}">${linkLabels[href] ?? href}</a>`)
    .join(", ");
}

function table(tags, criterion) {
  const [main, extended, support] = tags;
  return `<table><thead><tr><th>점검 항목</th><th>좋은 신호</th><th>수정 신호</th></tr></thead><tbody><tr><td>${main}</td><td>${criterion} 기준이 말로 설명된다</td><td>결과만 보고 다음 선택을 바꾼다</td></tr><tr><td>${extended}</td><td>반복 전후 차이를 기록한다</td><td>감으로만 좋고 나쁨을 판단한다</td></tr><tr><td>${support}</td><td>다음 경기에서 확인할 장면이 정해진다</td><td>연습과 경기 기록이 연결되지 않는다</td></tr></tbody></table>`;
}

function buildContent(row, index) {
  const [slug, title, excerpt, category, tags, type, sourceKind, angle, reader, criterion] = row;
  const [main, extended, support] = tags;
  const accent = palette[index % palette.length];
  const opening = openings[index % openings.length](title, reader, angle);
  const sourceText = sourceLinks(sourceKind);
  const links = linkList(type);
  const h2 = [
    `${main} 문제를 먼저 좁히는 법`,
    `${extended} 기준으로 보는 좋은 신호와 수정 신호`,
    `${support}까지 이어지는 20분 실전 루틴`,
    `${category} 기록을 다음 경기로 연결하기`,
  ];

  return `<div class="article-summary" style="border-left:4px solid ${accent.border};background:${accent.bg};padding:16px 18px;margin:20px 0;border-radius:8px;"><strong>${title}</strong><br>${excerpt}</div>
<p>${opening} 검색에서 흔히 보이는 조언은 “자주 연습하라”, “기본기를 지켜라”처럼 맞지만 실행하기 어려운 말이 많습니다. 그래서 이 글은 ${main}, ${extended}, ${support}를 분리해 코트에서 바로 체크할 수 있는 기준으로 바꿉니다. 기본 규칙과 코칭 관점은 ${sourceText}를 기준으로 삼고, 동호인이 실제로 겪는 시간 부족, 장비 부담, 파트너와의 커뮤니케이션 문제까지 함께 반영했습니다.</p>
<p>먼저 목표를 작게 잡아야 합니다. 오늘 바꿀 것은 전체 경기력이 아니라 ${criterion}입니다. 이 기준을 세우면 실수 뒤에 “멘탈이 약했다” 또는 “운이 없었다”로 끝나지 않고, 다음 공에서 무엇을 조정할지 남습니다. 관련 도구와 보충 글은 ${links}를 함께 확인하면 기록과 복습을 연결하기 쉽습니다.</p>
<h2>${h2[0]}</h2>
<p>${main}은 결과보다 전조를 봐야 합니다. 공이 나간 순간만 보면 이미 늦습니다. 준비 위치가 늦었는지, 첫 발이 멈췄는지, 라켓을 잡는 힘이 갑자기 세졌는지처럼 실수 직전의 신호를 찾아야 합니다. ${reader}는 보통 같은 신호를 여러 번 놓친 뒤에야 문제를 알아차립니다. 다음 경기에서는 한 포인트가 끝날 때마다 “방금 실수 전에 무엇이 먼저 흔들렸나”를 한 문장으로 남겨보세요.</p>
<aside style="border-left:4px solid ${accent.border};background:#ffffff;padding:14px 16px;margin:18px 0;border-radius:8px;"><strong>판단 박스</strong><br>${criterion}을 확인하지 못했다면 기술을 더 추가하지 않는 편이 좋습니다. 기준이 없는 상태에서 새 팁을 넣으면 다음 경기에서 원인을 더 찾기 어려워집니다.</aside>
<ul><li>${main}을 경기 중 부르는 짧은 단어로 바꿉니다.</li><li>${extended}는 성공 여부가 아니라 반복 가능한 준비 동작으로 기록합니다.</li><li>${support}는 다음 연습에서 확인할 장면 하나만 남깁니다.</li><li>통증, 장비 손상, 미끄러짐처럼 안전과 관련된 신호는 연습 목표보다 먼저 봅니다.</li></ul>
<h2>${h2[1]}</h2>
<p>${extended}를 볼 때는 좋은 신호와 수정 신호를 분리해야 합니다. 좋은 신호는 몸의 균형이 남고, 다음 선택을 말로 설명할 수 있으며, 같은 상황에서 다시 시도할 수 있다는 점입니다. 수정 신호는 반대로 성공했는데도 이유를 모르거나, 실패 뒤에 같은 행동을 더 세게 반복하는 것입니다. 이 차이를 적어두면 코치에게 질문할 때도 “왜 안 되나요?”가 아니라 “이 장면에서 기준을 이렇게 잡아도 되나요?”라고 물을 수 있습니다.</p>
${table(tags, criterion)}
<p>표는 복잡하게 채우는 도구가 아닙니다. 경기 후 3분 안에 한 줄만 남겨도 충분합니다. 예를 들어 ${main}이 흔들린 날에는 점수보다 준비 동작을 먼저 적고, ${extended}가 맞았던 날에는 왜 맞았는지 조건을 적습니다. ${support}는 다음 훈련에서 그대로 반복할 수 있어야 의미가 있습니다.</p>
<h2>${h2[2]}</h2>
<p>20분 루틴은 네 단계로 나누면 안정적입니다. 처음 5분은 몸풀기와 기준 확인, 다음 7분은 같은 장면 반복, 그다음 5분은 점수를 붙인 적용, 마지막 3분은 기록입니다. 이때 성공률만 보지 마세요. ${criterion}이 지켜졌는지, 그리고 실패했을 때 같은 원인이 반복됐는지가 더 중요합니다.</p>
<ol><li>오늘 볼 기준을 ${main} 하나로 제한합니다.</li><li>${extended}가 나타나는 장면을 일부러 만듭니다.</li><li>${support}와 연결되는 실전 점수 상황을 붙입니다.</li><li>마지막에는 다음 경기에서 확인할 문장 하나만 남깁니다.</li></ol>
<p>이 방식은 화려하지 않지만 재현성이 있습니다. 특히 동호회 경기에서는 연습량보다 복기 품질이 다음 실수를 줄입니다. ${title} 역시 한 번 읽고 끝낼 글이 아니라, 경기 전에는 기준을 고르고 경기 후에는 기록을 확인하는 용도로 쓰는 편이 좋습니다.</p>
<h2>${h2[3]}</h2>
<p>마지막 단계는 다음 경기로 연결하는 것입니다. “좋아졌다”는 말은 기록이 되기 어렵습니다. 대신 “첫 세 포인트에서 준비가 빨랐다”, “상대 전위가 움직일 때만 로브를 선택했다”, “통증 신호가 나오면 강도를 낮췄다”처럼 확인 가능한 문장이 필요합니다. 이렇게 남긴 기록은 다음 레슨, 파트너 대화, 장비 조정의 기준이 됩니다.</p>
<details><summary>${main}은 하루 만에 고칠 수 있나요?</summary><p>완전히 고치기는 어렵지만 한 경기에서 확인할 기준 하나를 줄이는 것은 가능합니다. 이 글의 목적도 완성보다 반복 가능한 판단 기준을 만드는 데 있습니다.</p></details>
<details><summary>${extended}와 ${support} 중 무엇을 먼저 봐야 하나요?</summary><p>경기 중에는 ${extended}를 먼저 보고, 경기 후 복기에서 ${support}를 확인하는 순서가 안전합니다. 동시에 두 가지를 바꾸면 원인을 찾기 어렵습니다.</p></details>
<details><summary>초보자도 이 기준을 써도 되나요?</summary><p>초보자일수록 기준을 줄이는 편이 좋습니다. 단, 통증이나 장비 문제처럼 안전과 관련된 신호는 연습보다 먼저 확인해야 합니다.</p></details>
<p>정리하면 ${title}의 핵심은 더 많은 조언을 모으는 것이 아니라, 다음 경기에서 확인할 기준을 줄이는 것입니다. ${main}을 중심으로 ${extended}, ${support}를 나눠 기록하면 실수의 원인이 선명해지고, 연습 시간도 덜 낭비됩니다.</p>`;
}

const contentEntries = rows
  .map((row, index) => {
    const [slug, title, excerpt, category, tags] = row;
    const faq = [
      { question: `${tags[0]}에서 가장 먼저 볼 기준은?`, answer: `${tags[1]}와 ${tags[2]}를 동시에 바꾸지 말고, 경기 중에는 하나의 신호만 먼저 확인하는 편이 안전합니다.` },
      { question: `${category} 초보자도 적용할 수 있나요?`, answer: "가능합니다. 다만 통증, 미끄러짐, 장비 손상처럼 안전과 관련된 문제는 연습 목표보다 먼저 확인해야 합니다." },
      { question: "경기 후에는 무엇을 기록해야 하나요?", answer: "성공률보다 같은 장면이 반복됐는지, 그리고 다음 경기에서 확인할 한 문장이 남았는지를 기록하면 됩니다." },
    ];
    return `  ${esc(slug)}: {
    content: ${esc(buildContent(row, index))},
    tags: ${esc(tags)},
    summary: ${esc(excerpt)},
    highlight: ${esc(`${title}의 핵심은 ${tags[0]}을 ${tags[1]}와 ${tags[2]} 기준으로 나눠 다음 경기에서 확인할 수 있게 만드는 것입니다.`)},
    faq: ${JSON.stringify(faq, null, 6).replaceAll("\n", "\n    ")},
  }`;
  })
  .join(",\n");

const contentFile = `type BlogContentEntry = {
  content: string;
  tags: string[];
  summary: string;
  highlight: string;
  faq?: { question: string; answer: string }[];
};

export const BLOG_CONTENT_PART17_QUALITY_REWRITES: Record<string, BlogContentEntry> = {
${contentEntries},
};
`;

const postEntries = rows
  .map(([slug, title, excerpt, category, tags]) => `  {
    "slug": ${esc(slug)},
    "title": ${esc(title)},
    "excerpt": ${esc(excerpt)},
    "category": ${esc(category)},
    "tags": ${esc(tags)},
    "readTime": "9분"
  }`)
  .join(",\n");

const postsFile = `export const articleWriterPart17PostOverrides = [
${postEntries},
];
`;

fs.writeFileSync(CONTENT_OUT, contentFile, "utf8");
fs.writeFileSync(POSTS_OUT, postsFile, "utf8");
console.log(`Generated ${rows.length} part17 quality rewrites.`);
console.log(CONTENT_OUT);
console.log(POSTS_OUT);
