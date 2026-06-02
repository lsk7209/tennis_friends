#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part19-quality-rewrites.ts",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-part19-overrides.js");

const sourceSets = {
  rules: [
    ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
    ["USTA Tennis Rules", "https://www.usta.com/en/home/improve/tips-and-instruction/national/tennis-rules.html"],
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
    ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
    ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
  ],
};

const links = {
  equipment: [
    ["/utility/equipment-recommendation", "장비 추천 도구"],
    ["/utility/string-tension", "스트링 텐션 계산기"],
    ["/blog/tennis-racket-selection-guide", "라켓 선택 가이드"],
  ],
  practice: [
    ["/utility/practice-drill-generator", "연습 드릴 생성기"],
    ["/utility/goal-setting", "연습 목표 설정"],
    ["/blog/tennis-practice-journal-guide", "테니스 연습 일지"],
  ],
  match: [
    ["/utility/match-analyzer", "경기 분석 도구"],
    ["/utility/ntrp-test", "NTRP 테스트"],
    ["/blog/tennis-match-flow-reading", "경기 흐름 읽기"],
  ],
  doubles: [
    ["/utility/doubles-positioning-simulator", "복식 위치 시뮬레이터"],
    ["/blog/tennis-doubles-strategy-guide", "복식 전술 가이드"],
    ["/blog/tennis-doubles-communication", "복식 콜 약속"],
  ],
  court: [
    ["/utility/court-surface-advisor", "코트 표면 선택"],
    ["/utility/weather-check", "날씨 체크 도구"],
    ["/blog/tennis-windy-day-strategy", "바람 부는 날 전략"],
  ],
  serve: [
    ["/utility/serve-placement-mapper", "서브 코스 기록"],
    ["/blog/tennis-serve-toss-technique", "서브 토스 교정"],
    ["/blog/tennis-second-serve-confidence-guide", "세컨드 서브 루틴"],
  ],
  return: [
    ["/utility/reaction-test", "반응 속도 테스트"],
    ["/blog/tennis-return-of-serve-guide", "리턴 기본기"],
    ["/blog/tennis-split-step-timing-guide", "스플릿 스텝 타이밍"],
  ],
  health: [
    ["/utility/injury-risk", "부상 위험 체크"],
    ["/utility/warmup-routine-builder", "워밍업 루틴 빌더"],
    ["/blog/tennis-injury-prevention-full-guide", "부상 예방 가이드"],
  ],
};

const rows = [
  { slug: "aw-191-beginner-racket", title: "초보 첫 라켓 감각 점검", excerpt: "초보 첫 라켓은 추천 모델보다 20분 뒤 손목 피로와 준비 속도를 먼저 봅니다.", category: "장비 가이드", tags: ["초보 라켓", "첫 라켓", "감각 점검"], type: "equipment", source: "equipment", angle: "라켓 이름보다 몸이 보내는 피로 신호로 고르는 기준" },
  { slug: "aw-192-tennis-guide", title: "바람 부는 날 토스 조정", excerpt: "바람 부는 날 토스는 높이를 올리기보다 시작 위치와 코스 폭을 좁혀야 합니다.", category: "서브 전략", tags: ["바람 부는 날", "서브 토스", "코스 조정"], type: "serve", source: "coaching", angle: "바람을 이기려 하지 않고 흔들림 폭을 줄이는 방식" },
  { slug: "aw-194-return-beginner", title: "리턴 게임 로브 타이밍", excerpt: "리턴 게임 로브는 상대 전위가 붙은 순간보다 서버 회복 위치를 보고 올립니다.", category: "리턴 전략", tags: ["리턴 게임", "로브 타이밍", "초보 리턴"], type: "return", source: "coaching", angle: "전위만 보지 않고 서버의 다음 발을 함께 읽는 법" },
  { slug: "aw-195-shoes-court-shoes-record", title: "클레이화 하드화 기록 비교", excerpt: "클레이화와 하드화 차이는 미끄럼, 멈춤, 발목 피로를 같은 코트 기록으로 비교합니다.", category: "장비 가이드", tags: ["클레이화", "하드화", "신발 기록"], type: "equipment", source: "equipment", angle: "신발 이름보다 멈춤 동작의 안정성을 남기는 비교" },
  { slug: "aw-196-tennis-guide", title: "퇴근 후 훈련 짧은 루틴", excerpt: "퇴근 후 훈련 짧은 루틴은 몸 풀기, 한 장면 반복, 기록 순서가 중요합니다.", category: "훈련 가이드", tags: ["퇴근 후 훈련", "짧은 루틴", "연습 적용"], type: "practice", source: "coaching", angle: "피곤한 날에도 무너지지 않는 최소 훈련 단위" },
  { slug: "aw-200-shoes", title: "테니스화 밑창 마모 판단", excerpt: "테니스화 밑창 마모는 겉보기보다 멈출 때 밀림과 한쪽 닳음을 함께 봐야 합니다.", category: "장비 가이드", tags: ["테니스화", "밑창 마모", "교체 시점"], type: "equipment", source: "equipment", angle: "마모 사진보다 실제 정지 동작에서 교체 신호를 찾기" },
  { slug: "aw-210-string", title: "하이브리드 스트링 세팅 기준", excerpt: "하이브리드 스트링 세팅은 전후 비교보다 메인 감각과 팔 부담을 따로 기록하세요.", category: "장비 가이드", tags: ["하이브리드 스트링", "세팅 기준", "팔 부담"], type: "equipment", source: "equipment", angle: "메인과 크로스의 역할을 분리해 세팅 실패를 줄임" },
  { slug: "aw-211-30-20", title: "혼자 연습 30분 20분 분리", excerpt: "혼자 연습은 30분 버티기와 20분 집중 루틴을 목적별로 나눠야 효과가 납니다.", category: "훈련 가이드", tags: ["혼자 연습", "30분 루틴", "20분 집중"], type: "practice", source: "coaching", angle: "긴 시간과 짧은 시간을 같은 방식으로 쓰지 않는 설계" },
  { slug: "aw-212-match", title: "경기 후 다음 연습 결정", excerpt: "경기 후 다음 연습은 패배 원인보다 다시 확인할 한 포인트 장면에서 고릅니다.", category: "경기 분석", tags: ["경기 후 복기", "다음 연습", "포인트 장면"], type: "match", source: "coaching", angle: "전체 경기 감상 대신 한 포인트 계약으로 줄이는 복기" },
  { slug: "aw-213-women-beginner-racket-club-match", title: "여성 입문 라켓 동호회 점검", excerpt: "여성 입문 라켓은 동호회 경기에서 수비 전환과 손목 피로가 유지되는지 봅니다.", category: "장비 가이드", tags: ["여성 입문 라켓", "동호회 경기", "손목 피로"], type: "equipment", source: "equipment", angle: "레슨장 감각과 실제 경기 감각을 분리해 판단" },
  { slug: "aw-215-string", title: "멀티필라멘트 스트링 적합성", excerpt: "멀티필라멘트 스트링은 부드러움보다 컨트롤과 내구성이 내 경기와 맞는지 봅니다.", category: "장비 가이드", tags: ["멀티필라멘트", "스트링 선택", "내구성"], type: "equipment", source: "equipment", angle: "팔 편안함과 경기 컨트롤의 균형점 찾기" },
  { slug: "aw-216-tennis-guide", title: "레슨 후 복습 노트 루틴", excerpt: "레슨 후 복습 노트는 배운 기술보다 다음 주 확인할 질문 하나를 남겨야 합니다.", category: "훈련 가이드", tags: ["레슨 복습", "복습 노트", "질문 루틴"], type: "practice", source: "coaching", angle: "코치 피드백을 다음 레슨 질문으로 바꾸는 메모" },
  { slug: "aw-217-record-5", title: "타이브레이크 기록 5문장", excerpt: "타이브레이크 기록은 점수 흐름보다 압박 순간 선택을 5문장으로 남기면 충분합니다.", category: "경기 분석", tags: ["타이브레이크", "기록 5문장", "압박 선택"], type: "match", source: "rules", angle: "긴 복기 대신 압박 포인트의 선택만 추적" },
  { slug: "aw-224-serve", title: "왼손잡이 서브 리턴 위치", excerpt: "왼손잡이 서브를 받을 때는 바디 코스와 바깥 회전을 먼저 예상해야 합니다.", category: "리턴 전략", tags: ["왼손잡이 서브", "리턴 위치", "바디 코스"], type: "return", source: "coaching", angle: "낯선 회전보다 첫 준비 위치를 바꾸는 대응" },
  { slug: "aw-225-string-club-match", title: "동호회 스트링 텐션 교체", excerpt: "동호회 스트링 텐션은 경기 빈도와 팔 느낌, 공 깊이 변화를 같이 보고 낮춥니다.", category: "장비 가이드", tags: ["스트링 텐션", "동호회 경기", "교체 시점"], type: "equipment", source: "equipment", angle: "숫자 추천 대신 경기 빈도별 체감 변화를 기준화" },
  { slug: "aw-230-racket-beginner", title: "초보 라켓 밸런스 이해", excerpt: "초보 라켓 밸런스는 무게보다 늦은 준비와 수비 범위에 더 크게 영향을 줍니다.", category: "장비 가이드", tags: ["라켓 밸런스", "초보 라켓", "수비 범위"], type: "equipment", source: "equipment", angle: "헤드 무게를 경기 후반 피로로 판단하는 법" },
  { slug: "aw-232-video", title: "영상 분석 첫 화면 선택", excerpt: "영상 분석은 멋진 샷보다 같은 실수가 반복되는 첫 화면을 골라야 합니다.", category: "경기 분석", tags: ["영상 분석", "첫 화면", "반복 실수"], type: "match", source: "coaching", angle: "전체 영상을 보지 않고 반복 장면 세 개만 추적" },
  { slug: "aw-233-tennis-guide", title: "상대 작전 흔들림 대응", excerpt: "상대 작전에 흔들릴 때는 새 전술보다 내 기본 코스 회복을 먼저 확인하세요.", category: "경기 전략", tags: ["상대 작전", "흔들림 대응", "기본 코스"], type: "match", source: "coaching", angle: "상대 변화에 즉흥 대응하지 않는 기준" },
  { slug: "aw-234-serve-record", title: "첫 서브 성공률 비교", excerpt: "첫 서브 성공률은 전후 비교보다 토스 높이와 코스 선택을 같이 기록해야 합니다.", category: "서브 전략", tags: ["첫 서브", "성공률 비교", "코스 선택"], type: "serve", source: "coaching", angle: "성공률 숫자를 다음 서브 선택으로 바꾸기" },
  { slug: "aw-236-match-cooldown", title: "경기 후 쿨다운 체크", excerpt: "경기 후 쿨다운은 스트레칭보다 호흡, 수분, 종아리 긴장 확인이 먼저입니다.", category: "건강 & 피트니스", tags: ["경기 후 쿨다운", "회복 체크", "종아리 긴장"], type: "health", source: "health", angle: "샤워 전 10분에 끝내는 회복 순서" },
  { slug: "aw-243-record", title: "긴 랠리 후 사인 기록", excerpt: "긴 랠리 후 사인은 복잡한 약속보다 숨이 찬 상태에서도 가능한 한 단어가 좋습니다.", category: "복식 전술", tags: ["긴 랠리", "사인 기록", "복식 콜"], type: "doubles", source: "coaching", angle: "체력이 떨어진 뒤에도 유지되는 사인만 남기기" },
  { slug: "aw-246-court", title: "발목 불안 코트 이동", excerpt: "발목 불안이 있을 때 코트 이동은 빠른 출발보다 멈춤과 방향 전환을 먼저 봅니다.", category: "코트 환경", tags: ["발목 불안", "코트 이동", "방향 전환"], type: "court", source: "health", angle: "표면보다 멈추는 자세를 먼저 확인하는 안전 기준" },
  { slug: "aw-247-club-20", title: "동호회 대회 참가 20분 준비", excerpt: "동호회 대회 참가는 20분이면 규칙, 대기, 파트너 약속을 충분히 정리할 수 있습니다.", category: "동호회 운영", tags: ["동호회 대회", "20분 준비", "파트너 약속"], type: "match", source: "rules", angle: "첫 참가자가 당일 어색함을 줄이는 사전 점검" },
  { slug: "aw-248-mental", title: "더블폴트 후 멘탈 복구", excerpt: "더블폴트 후 멘탈은 반성보다 다음 토스 높이와 호흡 길이를 정해야 회복됩니다.", category: "멘탈 트레이닝", tags: ["더블폴트", "멘탈 복구", "호흡 루틴"], type: "serve", source: "coaching", angle: "감정 언어 대신 다음 동작 하나를 고정" },
  { slug: "aw-250-doubles-serve-record", title: "복식 서브 첫 발 기록", excerpt: "복식 서브 뒤 첫 발은 네트 돌진보다 리턴 깊이와 파트너 위치를 함께 봅니다.", category: "복식 전술", tags: ["복식 서브", "첫 발 기록", "파트너 위치"], type: "doubles", source: "coaching", angle: "서버의 첫 두 걸음을 기록해 빈 공간을 줄임" },
  { slug: "aw-252-tennis-guide", title: "대각 코스 분산 줄이기", excerpt: "대각 코스 분산은 다양한 코스보다 같은 높이와 깊이를 유지하는 비율이 먼저입니다.", category: "경기 전략", tags: ["대각 코스", "분산 줄이기", "깊이 유지"], type: "match", source: "coaching", angle: "코스 욕심보다 안정 깊이를 먼저 수치화" },
  { slug: "aw-253-5", title: "사인 사이 인터벌 5가지", excerpt: "사인 사이 인터벌은 오래 상의하지 않도록 손짓, 단어, 확인 순서를 줄여야 합니다.", category: "복식 전술", tags: ["복식 사인", "인터벌", "5가지"], type: "doubles", source: "rules", angle: "포인트 사이 짧은 시간에 끝나는 사인 구조" },
  { slug: "aw-254-serve-beginner", title: "세컨드 서브 더블폴트 초보", excerpt: "세컨드 서브 더블폴트는 힘을 빼기보다 목표 높이와 코스 폭을 정해야 줄어듭니다.", category: "서브 전략", tags: ["세컨드 서브", "더블폴트", "초보 서브"], type: "serve", source: "coaching", angle: "약하게 넣는 서브와 안전한 서브를 구분" },
  { slug: "aw-255-doubles-record", title: "상대 로브 복식 대처 기록", excerpt: "상대 로브가 많을 때는 전위 후퇴와 스매시 선택을 나눠 기록해야 합니다.", category: "복식 전술", tags: ["상대 로브", "복식 대처", "기록법"], type: "doubles", source: "coaching", angle: "무조건 물러나지 않고 로브 조건을 분류" },
  { slug: "aw-257-match", title: "경기 후 상대 규칙 복기", excerpt: "경기 후 상대 규칙 문제는 논쟁보다 다음 대회에서 확인할 조항으로 남겨야 합니다.", category: "경기 분석", tags: ["경기 후 복기", "상대 규칙", "대회 준비"], type: "match", source: "rules", angle: "감정 기록을 규칙 체크리스트로 바꾸는 방식" },
  { slug: "aw-258-grip", title: "더운 날 그립 교체 기준", excerpt: "더운 날 그립은 미끄러진 뒤가 아니라 손 땀 패턴과 마모 신호로 먼저 교체합니다.", category: "장비 가이드", tags: ["더운 날 그립", "그립 교체", "손 땀"], type: "equipment", source: "equipment", angle: "경기 중 악력이 올라가기 전 교체 신호 찾기" },
  { slug: "aw-259-serve-20", title: "서브 토스 옆흐름 20분 교정", excerpt: "서브 토스가 옆으로 흐르면 손목보다 시작 위치와 놓는 높이를 20분간 봅니다.", category: "서브 전략", tags: ["서브 토스", "20분 교정", "옆흐름"], type: "serve", source: "coaching", angle: "토스 방향을 고치는 짧은 반복 절차" },
  { slug: "aw-260-club-doubles", title: "동호회 복식 가운데 공", excerpt: "동호회 복식 가운데 공은 양보보다 사전 콜과 라켓 방향 약속이 더 중요합니다.", category: "복식 전술", tags: ["가운데 공", "동호회 복식", "사전 콜"], type: "doubles", source: "coaching", angle: "두 명이 동시에 멈추거나 동시에 치는 실수 줄이기" },
  { slug: "aw-263-string", title: "추운 날 스트링 텐션 감각", excerpt: "추운 날 스트링 텐션은 딱딱한 타구감과 팔 부담을 경기 초반에 다시 확인해야 합니다.", category: "장비 가이드", tags: ["추운 날 스트링", "텐션 감각", "팔 부담"], type: "equipment", source: "equipment", angle: "겨울 경기에서 같은 텐션이 다르게 느껴지는 이유" },
  { slug: "aw-264-tennis-guide", title: "장비 교체 테스트 순서", excerpt: "장비 교체 테스트는 새 장비 만족감보다 기존 장비와 같은 조건 비교가 먼저입니다.", category: "장비 가이드", tags: ["장비 교체", "테스트 순서", "조건 비교"], type: "equipment", source: "equipment", angle: "구매 직후 기대감과 실제 경기 감각을 분리" },
  { slug: "aw-266-injury-grip-beginner", title: "손목 통증 그립 초보 평가", excerpt: "손목 통증이 있으면 초보자는 그립 두께, 악력, 임팩트 위치를 따로 확인해야 합니다.", category: "건강 & 피트니스", tags: ["손목 통증", "그립 평가", "초보자"], type: "health", source: "health", angle: "장비 탓과 잡는 습관을 분리해 보는 절차" },
  { slug: "aw-267-club-match-record", title: "동호회 첫 경기 매너 기록", excerpt: "동호회 첫 경기 매너는 인사보다 점수 콜, 공 처리, 대기 흐름에서 드러납니다.", category: "동호회 운영", tags: ["동호회 첫 경기", "매너 기록", "점수 콜"], type: "match", source: "rules", angle: "처음 온 사람이 놓치기 쉬운 경기 흐름 정리" },
  { slug: "aw-268-tennis-guide", title: "야간 조명 로브 대처", excerpt: "야간 조명 아래 로브는 늦게 보는 문제가 많아 첫 후퇴 방향을 먼저 정해야 합니다.", category: "코트 환경", tags: ["야간 조명", "로브 대처", "후퇴 방향"], type: "court", source: "coaching", angle: "시야 문제를 발 위치와 첫 반응으로 보완" },
  { slug: "aw-269-record", title: "코치 피드백 기록법", excerpt: "코치 피드백 기록은 좋은 말보다 다음 주 확인할 한 질문으로 남겨야 효과가 납니다.", category: "훈련 가이드", tags: ["코치 피드백", "기록법", "레슨 질문"], type: "practice", source: "coaching", angle: "피드백을 숙제가 아니라 관찰 질문으로 전환" },
  { slug: "aw-270-doubles", title: "복식 스트레이트 패싱 위치", excerpt: "복식 스트레이트 패싱은 강타보다 전위 발 위치와 라켓 면을 보고 결정합니다.", category: "복식 전술", tags: ["복식 스트레이트", "패싱 위치", "전위"], type: "doubles", source: "coaching", angle: "상대 전위가 움직인 방향으로 패싱 타이밍 잡기" },
  { slug: "aw-272-tennis-guide", title: "레슨 질문 목록 압축", excerpt: "레슨 질문 목록은 많이 묻기보다 코치가 바로 볼 수 있는 장면으로 좁혀야 합니다.", category: "훈련 가이드", tags: ["레슨 질문", "질문 목록", "장면 압축"], type: "practice", source: "coaching", angle: "추상 질문을 관찰 가능한 장면으로 바꾸기" },
  { slug: "aw-276-match", title: "테니스 가방 경기 전 준비", excerpt: "테니스 가방은 물건 목록보다 빠졌을 때 경기력이 흔들리는 항목부터 챙깁니다.", category: "경기 준비", tags: ["테니스 가방", "경기 전 준비", "준비물"], type: "equipment", source: "rules", angle: "준비물 누락을 경기 리듬 손실 기준으로 정렬" },
  { slug: "aw-277-beginner-racket-5", title: "초보 첫 라켓 감각 5가지", excerpt: "초보 첫 라켓은 브랜드보다 손목 피로, 준비 속도, 수비 범위 5가지를 봅니다.", category: "장비 가이드", tags: ["초보 라켓", "첫 라켓", "5가지"], type: "equipment", source: "equipment", angle: "매장에서 놓치기 쉬운 경기 후반 감각 체크" },
  { slug: "aw-278-beginner", title: "바람 부는 날 토스 초보", excerpt: "바람 부는 날 토스 초보는 높이를 바꾸기보다 시작 위치와 목표 코스를 줄입니다.", category: "서브 전략", tags: ["바람 부는 날", "토스 초보", "목표 코스"], type: "serve", source: "coaching", angle: "초보가 바람과 싸우지 않고 흔들림을 줄이는 기준" },
  { slug: "aw-279-record", title: "대회 전날 가방 기록", excerpt: "대회 전날 가방 기록은 예비 물품보다 경기 시작 전 흔들릴 항목을 먼저 적습니다.", category: "경기 준비", tags: ["대회 전날", "가방 기록", "체크리스트"], type: "equipment", source: "rules", angle: "체크리스트를 경기 흐름 순서로 재배열" },
  { slug: "aw-281-shoes-court-shoes", title: "클레이화 하드화 차이 선택", excerpt: "클레이화와 하드화 차이는 접지보다 멈춤, 미끄럼, 발목 피로로 판단합니다.", category: "장비 가이드", tags: ["클레이화", "하드화", "테니스화 선택"], type: "equipment", source: "equipment", angle: "주로 치는 코트 표면을 기준으로 신발 선택" },
  { slug: "aw-282-tennis-guide", title: "퇴근 후 짧은 훈련 비교", excerpt: "퇴근 후 짧은 훈련은 긴 연습을 줄인 버전이 아니라 피곤한 날 전용 루틴입니다.", category: "훈련 가이드", tags: ["퇴근 후 훈련", "짧은 훈련", "피곤한 날"], type: "practice", source: "coaching", angle: "몸 상태가 낮은 날에도 쌓이는 최소 루틴" },
  { slug: "aw-284-court", title: "여행 코트 예약 준비", excerpt: "여행 코트 예약은 코트 위치보다 이동 시간, 취소 규정, 장비 보관을 먼저 봅니다.", category: "코트 환경", tags: ["여행 코트", "예약 준비", "취소 규정"], type: "court", source: "rules", angle: "여행 일정이 무너지지 않게 코트 예약을 검토" },
  { slug: "aw-291-grip-record", title: "오버그립 교체 신호 기록", excerpt: "오버그립 교체 신호는 미끄럼, 악력 증가, 손바닥 피로를 함께 기록해야 보입니다.", category: "장비 가이드", tags: ["오버그립", "교체 신호", "기록법"], type: "equipment", source: "equipment", angle: "경기 중 라켓을 더 세게 쥐는 순간을 포착" },
  { slug: "aw-296-string", title: "하이브리드 스트링 지금 교체", excerpt: "하이브리드 스트링 교체는 새 세팅 욕심보다 공 깊이와 팔 부담 변화로 판단합니다.", category: "장비 가이드", tags: ["하이브리드 스트링", "교체 시점", "공 깊이"], type: "equipment", source: "equipment", angle: "지금 바꿀지 말지 결정하는 전후 비교 루틴" },
];

const accents = [
  { border: "#0f766e", bg: "#ecfdf5" },
  { border: "#1d4ed8", bg: "#eff6ff" },
  { border: "#9333ea", bg: "#faf5ff" },
  { border: "#c2410c", bg: "#fff7ed" },
  { border: "#be123c", bg: "#fff1f2" },
];

function esc(value) {
  return JSON.stringify(value);
}

function sourceLinks(kind) {
  return sourceSets[kind]
    .map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>`)
    .join(", ");
}

function internalLinks(type) {
  return links[type]
    .map(([href, label]) => `<a href="${href}">${label}</a>`)
    .join(", ");
}

function buildTable(row) {
  const [main, extended, support] = row.tags;
  return `<table><thead><tr><th>점검 기준</th><th>유지 신호</th><th>수정 신호</th></tr></thead><tbody><tr><td>${main}</td><td>장면을 한 문장으로 설명할 수 있다</td><td>결과만 기억하고 조건이 없다</td></tr><tr><td>${extended}</td><td>반복 전후 차이가 기록된다</td><td>감각 표현만 있고 다음 행동이 없다</td></tr><tr><td>${support}</td><td>다음 경기에서 확인할 항목이 남는다</td><td>연습과 경기 복기가 이어지지 않는다</td></tr></tbody></table>`;
}

function buildContent(row, index) {
  const accent = accents[index % accents.length];
  const [main, extended, support] = row.tags;
  const sources = sourceLinks(row.source);
  const related = internalLinks(row.type);
  const h2s = [
    `${main}을 먼저 분리해서 보는 이유`,
    `${extended} 기준으로 좋은 신호와 수정 신호 나누기`,
    `${support}까지 이어지는 20분 실전 루틴`,
    `${row.category} 기록을 다음 경기 선택으로 연결하기`,
  ];

  return `<div class="article-summary" style="border-left:4px solid ${accent.border};background:${accent.bg};padding:16px 18px;margin:20px 0;border-radius:8px;"><strong>${row.title}</strong><br>${row.excerpt}</div>
<p>${row.title}을 검색하는 사람은 이미 비슷한 조언을 여러 번 들었을 가능성이 큽니다. 문제는 조언이 부족한 것이 아니라 경기 중 어느 장면에 적용해야 하는지 흐려지는 데 있습니다. 이 글은 ${main}, ${extended}, ${support}를 한 번에 고치자는 글이 아닙니다. ${row.angle}에 맞춰 먼저 볼 신호, 경기 중 유지할 기준, 경기 후 남길 기록을 나눕니다. 기본 규칙과 안전 기준은 ${sources}를 참고했고, 실제 동호회 경기와 레슨에서 바로 확인할 수 있는 표현으로 정리했습니다.</p>
<p>오늘의 목표는 완벽한 정답이 아니라 다음 경기에서 다시 확인할 수 있는 기준입니다. 같은 실수가 반복돼도 어떤 조건에서 나왔는지 남기면 훈련 주제가 생깁니다. 반대로 잘 맞은 날에도 이유를 설명하지 못하면 다음 경기에서 다시 흔들립니다. 관련 도구는 ${related}에서 이어서 사용할 수 있습니다. 글을 읽을 때는 모든 항목을 체크하려 하지 말고 지금 가장 자주 반복되는 한 장면만 고르세요.</p>
<h2>${h2s[0]}</h2>
<p>${main}은 결과 이름처럼 보이지만 실제로는 준비 위치, 타이밍, 몸 상태, 장비 상태, 상대 선택이 함께 섞인 신호입니다. 그래서 첫 단계는 문제를 크게 부르는 것이 아니라 직전 장면을 작게 나누는 일입니다. 공이 짧아졌다면 라켓 면이 문제였는지, 첫 발이 늦었는지, 상대 공이 더 깊었는지, 혹은 이미 체력이 떨어졌는지 구분해야 합니다. 이 구분이 되면 같은 실수라도 다음 행동이 달라집니다.</p>
<aside style="border-left:4px solid ${accent.border};background:#fff;padding:14px 16px;margin:18px 0;border-radius:8px;"><strong>판단 박스</strong><br>${row.excerpt} 이 문장을 경기 전 기준으로 삼으면 선택이 흔들릴 때 다시 돌아올 지점이 생깁니다. 오늘의 성과는 더 세게 치는 것이 아니라 같은 장면에서 같은 기준을 쓰는 것입니다.</aside>
<ul><li>${main}이 나온 점수와 위치를 함께 적습니다.</li><li>${extended}는 성공 여부보다 반복 가능한 준비 동작으로 봅니다.</li><li>${support}는 다음 경기에서 확인할 문장 하나로 압축합니다.</li><li>통증, 미끄럼, 장비 이상처럼 안전과 관련된 신호는 기술 목표보다 먼저 멈춰 확인합니다.</li></ul>
<h2>${h2s[1]}</h2>
<p>${extended}를 기준으로 볼 때 좋은 신호와 수정 신호를 분리해야 합니다. 좋은 신호는 다음 선택을 안정시키는 정보입니다. 수정 신호는 방금 점수를 잃었더라도 같은 실수가 왜 반복되는지 알려주는 정보입니다. 동호회 경기에서는 결과 감정이 강해서 이 구분이 쉽게 무너집니다. 이겼지만 위험 선택이 반복됐다면 연습 주제가 남아 있고, 졌지만 기준을 지켰다면 다음 경기에서 유지할 근거가 생깁니다.</p>
${buildTable(row)}
<p>이 표는 경기 직후 3분 안에 채울 정도로 짧아야 합니다. 길어지면 기록이 부담이 되고 결국 지속되지 않습니다. ${main}은 장면 이름, ${extended}는 판단 기준, ${support}는 다음 확인 문장으로 남기세요. 세 줄만 있어도 레슨에서 질문할 때 "왜 안 되나요"가 아니라 "이 장면에서 제 준비가 늦은지 봐주세요"처럼 구체적인 피드백을 받을 수 있습니다.</p>
<h2>${h2s[2]}</h2>
<p>20분 루틴은 네 구간이면 충분합니다. 처음 5분은 몸과 장비 상태를 확인합니다. 다음 7분은 같은 장면을 강도 없이 반복합니다. 그다음 5분은 실제 점수 상황을 붙입니다. 마지막 3분은 기록입니다. 이때 성공률을 길게 계산할 필요는 없습니다. ${support}가 다음 경기에서 다시 확인 가능한 문장으로 남았는지가 더 중요합니다.</p>
<ol><li>오늘 볼 기준을 ${main} 하나로 제한합니다.</li><li>${extended}가 드러나는 장면을 두 가지 이하로 고릅니다.</li><li>${support}와 연결되는 실제 점수 상황을 붙입니다.</li><li>마지막에는 다음 경기 전 읽을 문장 하나만 남깁니다.</li></ol>
<p>많은 동호인이 문제를 발견하면 그 자리에서 전부 바꾸려 합니다. 하지만 테니스는 움직임, 판단, 감정이 동시에 작동하는 종목이라 기준을 여러 개 바꾸면 무엇이 좋아졌는지 알기 어렵습니다. 하나를 고르고, 작게 확인하고, 다음 경기에서 다시 보는 방식이 더 오래 갑니다. 이 과정은 느려 보이지만 실제로는 같은 실수를 반복하는 시간을 줄여줍니다.</p>
<h2>${h2s[3]}</h2>
<p>${row.category} 글에서 가장 흔한 마무리는 "꾸준히 하세요"입니다. 그러나 실제로 필요한 것은 꾸준함보다 다음 선택입니다. 오늘의 기록이 다음 예약, 다음 레슨 질문, 다음 장비 조정, 다음 파트너 콜 중 어디로 이어지는지 정해야 합니다. ${row.title}도 마찬가지입니다. 읽고 끝나는 정보가 아니라 경기 전 30초 안에 다시 확인할 체크 문장으로 남겨야 합니다.</p>
<details><summary>${main}은 하루 만에 바꿀 수 있나요?</summary><p>완전히 바꾸기는 어렵지만 한 가지 신호를 알아차리는 것은 가능합니다. 오늘은 성공률보다 같은 장면에서 같은 기준을 적용했는지 확인하세요.</p></details>
<details><summary>${extended}와 ${support} 중 무엇을 먼저 봐야 하나요?</summary><p>경기 중에는 ${extended}를 먼저 보고, 경기 후에는 ${support}를 확인하는 순서가 좋습니다. 동시에 둘 다 바꾸려 하면 원인 추적이 흐려집니다.</p></details>
<details><summary>초보자도 이 기준을 써도 되나요?</summary><p>초보자일수록 기준을 줄이는 편이 좋습니다. 다만 통증, 미끄럼, 장비 파손처럼 안전과 관련된 신호는 연습 목표보다 먼저 확인해야 합니다.</p></details>
<p>정리하면 ${row.title}의 목표는 더 많은 조언을 모으는 것이 아니라 ${main}, ${extended}, ${support}를 통해 다음 행동을 좁히는 것입니다. 경기 전에는 기준을 하나만 고르고, 경기 중에는 신호를 보고, 경기 후에는 다음 확인 문장을 남기세요. 이 흐름이 쌓이면 검색으로 얻은 정보가 실제 실력 변화로 이어집니다.</p>`;
}

const contentEntries = rows
  .map((row, index) => {
    const faq = [
      { question: `${row.tags[0]}에서 가장 먼저 볼 기준은?`, answer: `${row.tags[1]}와 ${row.tags[2]}를 동시에 바꾸지 말고 경기 중 확인 가능한 신호 하나부터 봅니다.` },
      { question: `${row.category} 초보자도 적용할 수 있나요?`, answer: "가능합니다. 기준을 하나로 줄이고 통증, 미끄럼, 장비 이상 같은 안전 신호는 먼저 확인하세요." },
      { question: "경기 후에는 무엇을 기록하나요?", answer: "성공률보다 같은 장면이 반복됐는지, 다음 경기에서 확인할 문장이 남았는지를 적으면 충분합니다." },
    ];
    return `  ${esc(row.slug)}: {
    content: ${esc(buildContent(row, index))},
    tags: ${esc(row.tags)},
    summary: ${esc(row.excerpt)},
    highlight: ${esc(`${row.title}은 ${row.tags[0]}, ${row.tags[1]}, ${row.tags[2]}를 분리해 다음 경기에서 확인 가능한 기준으로 바꾸는 글입니다.`)},
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

export const BLOG_CONTENT_PART19_QUALITY_REWRITES: Record<string, BlogContentEntry> = {
${contentEntries}
};
`;

const postEntries = rows
  .map((row, index) => {
    const publishAt = new Date(
      Date.parse("2026-05-22T00:00:00+09:00") + index * 5 * 60 * 60 * 1000,
    );
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
        .formatToParts(publishAt)
        .map((part) => [part.type, part.value]),
    );
    const date = `${parts.year}-${parts.month}-${parts.day}`;
    const scheduledAt = `${date}T${parts.hour}:${parts.minute}:00+09:00`;
    return `  {
    "slug": ${esc(row.slug)},
    "title": ${esc(row.title)},
    "excerpt": ${esc(row.excerpt)},
    "category": ${esc(row.category)},
    "tags": ${esc(row.tags)},
    "date": ${esc(date)},
    "scheduledAt": ${esc(scheduledAt)},
  }`;
  })
  .join(",\n");

const postsFile = `export const articleWriterPart19PostOverrides = [
${postEntries}
];
`;

fs.mkdirSync(path.dirname(CONTENT_OUT), { recursive: true });
fs.writeFileSync(CONTENT_OUT, contentFile, "utf8");
fs.writeFileSync(POSTS_OUT, postsFile, "utf8");
console.log(
  JSON.stringify({ generated: rows.length, content: CONTENT_OUT, posts: POSTS_OUT }, null, 2),
);
