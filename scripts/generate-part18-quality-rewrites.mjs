#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part18-quality-rewrites.ts",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-part18-overrides.js");

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
    ["/blog/tennis-doubles-communication", "복식 콜과 약속"],
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
  { slug: "aw-124-string", title: "하이브리드 스트링 적용 순서", excerpt: "하이브리드 스트링은 메인과 크로스 감각을 나눠야 실패가 줄어듭니다.", category: "장비 가이드", tags: ["하이브리드 스트링", "스트링 조합", "타구감"], type: "equipment", source: "equipment", angle: "메인 스트링과 크로스 스트링을 따로 평가하는 순서" },
  { slug: "aw-125-30", title: "혼자 연습 30분 버티기", excerpt: "혼자 연습 30분은 지루함보다 기준 없는 반복을 먼저 줄여야 오래 갑니다.", category: "훈련 가이드", tags: ["혼자 연습", "30분 루틴", "벽치기"], type: "practice", source: "coaching", angle: "혼자 치는 시간을 기록 가능한 세 구간으로 나누는 방식" },
  { slug: "aw-126-match", title: "경기 후 연습 주제 고르기", excerpt: "경기 후 연습 주제는 패배 이유보다 다음 경기에서 확인할 한 장면으로 정합니다.", category: "경기 분석", tags: ["경기 후 복기", "연습 주제", "반복 실수"], type: "match", source: "coaching", angle: "감정 복기와 기술 복기를 분리해 한 가지 과제로 압축" },
  { slug: "aw-127-women-beginner-racket-20", title: "여성 입문 라켓 20분 점검", excerpt: "여성 입문 라켓은 무게보다 손목 피로와 준비 속도를 20분 안에 확인하세요.", category: "장비 가이드", tags: ["여성 입문 라켓", "라켓 무게", "20분 점검"], type: "equipment", source: "equipment", angle: "스펙표보다 20분 랠리 뒤 몸의 신호를 기준으로 선택" },
  { slug: "aw-128-serve-return", title: "강한 서브 리턴 깊이 만들기", excerpt: "강한 서브 리턴은 세게 맞히기보다 서비스라인 뒤 깊이 확보가 먼저입니다.", category: "리턴 전략", tags: ["강한 서브", "리턴 깊이", "준비 위치"], type: "return", source: "coaching", angle: "짧은 반격 대신 깊은 첫 리턴으로 포인트를 중립화" },
  { slug: "aw-129-string-club-match", title: "동호회 스트링 선택 기준", excerpt: "동호회 스트링 선택은 경기 빈도와 팔 부담, 컨트롤 감각을 함께 봐야 합니다.", category: "장비 가이드", tags: ["동호회 스트링", "스트링 선택", "팔 부담"], type: "equipment", source: "equipment", angle: "승패보다 다음 주에도 같은 감각을 유지하는 선택" },
  { slug: "aw-130-record", title: "레슨 복습 노트 작성법", excerpt: "레슨 복습 노트는 들은 말보다 다음 연습에서 확인할 행동을 남겨야 합니다.", category: "훈련 가이드", tags: ["레슨 복습", "연습 노트", "기록법"], type: "practice", source: "coaching", angle: "코치 피드백을 한 문장 행동 기준으로 바꾸는 기록법" },
  { slug: "aw-131-record", title: "타이브레이크 기록 질문", excerpt: "타이브레이크 기록은 점수보다 첫 선택과 회복 포인트를 같이 남겨야 합니다.", category: "경기 분석", tags: ["타이브레이크", "경기 기록", "멘탈 회복"], type: "match", source: "rules", angle: "압박 상황의 선택 순서를 복기하는 질문 세트" },
  { slug: "aw-134-string-beginner", title: "초보 스트링 줄임 기준", excerpt: "초보 스트링은 강한 반발보다 팔 부담과 컨트롤 유지 시간을 먼저 봅니다.", category: "장비 가이드", tags: ["초보 스트링", "반발력", "컨트롤"], type: "equipment", source: "equipment", angle: "중급자 추천을 그대로 따라 하지 않는 감각 분리" },
  { slug: "aw-135-court-record", title: "겨울 실내 코트 기록법", excerpt: "겨울 실내 코트는 조명과 바운드, 체온 변화를 기록해야 다음 예약이 쉬워집니다.", category: "코트 환경", tags: ["겨울 실내 코트", "코트 기록", "조명"], type: "court", source: "health", angle: "추위보다 실내 조건 차이를 다음 선택 자료로 남기는 방식" },
  { slug: "aw-139-string-20", title: "스트링 텐션 20분 확인", excerpt: "스트링 텐션은 숫자보다 20분 랠리 뒤 깊이와 팔 느낌으로 판단하세요.", category: "장비 가이드", tags: ["스트링 텐션", "20분 확인", "타구감"], type: "equipment", source: "equipment", angle: "같은 공 세트로 텐션 변화를 몸으로 검증" },
  { slug: "aw-140-tennis-guide", title: "여름 수분 보충 체크", excerpt: "여름 수분 보충은 목마름보다 경기 전 체중과 소변 색을 함께 봅니다.", category: "건강 & 피트니스", tags: ["여름 테니스", "수분 보충", "더위"], type: "health", source: "health", angle: "갈증이 오기 전 체크할 실전 신호 중심" },
  { slug: "aw-143-serve-beginner", title: "서브 발리 초보 실수 줄이기", excerpt: "서브 발리 초보는 멋진 발리보다 첫 발 위치와 접근 거리부터 고쳐야 합니다.", category: "서브 전략", tags: ["서브 발리", "초보 실수", "첫 발"], type: "serve", source: "coaching", angle: "네트 앞 기술보다 접근 경로를 먼저 안정화" },
  { slug: "aw-144-racket", title: "라켓 밸런스 상황별 선택", excerpt: "라켓 밸런스는 파워보다 준비 시간, 수비 범위, 손목 부담을 바꿉니다.", category: "장비 가이드", tags: ["라켓 밸런스", "스윙웨이트", "수비 범위"], type: "equipment", source: "equipment", angle: "헤드라이트와 헤드헤비를 경기 장면으로 비교" },
  { slug: "aw-146-video-beginner", title: "영상 분석 첫 장면 고르기", excerpt: "영상 분석은 멋진 샷보다 반복해서 무너지는 준비 장면부터 보는 편이 낫습니다.", category: "경기 분석", tags: ["영상 분석", "첫 장면", "초보 복기"], type: "match", source: "coaching", angle: "전체 경기 대신 같은 실수 장면 세 개만 추적" },
  { slug: "aw-147-record", title: "연습 일정 흔들림 기록", excerpt: "연습 일정 기록은 빠진 날을 탓하기보다 다시 시작할 조건을 찾는 과정입니다.", category: "훈련 가이드", tags: ["연습 일정", "기록법", "루틴"], type: "practice", source: "coaching", angle: "결석 이유를 다음 예약 조건으로 바꾸는 메모법" },
  { slug: "aw-148-serve-record", title: "첫 서브 성공률 기록법", excerpt: "첫 서브 성공률은 숫자만 보지 말고 토스와 코스 선택까지 함께 적어야 합니다.", category: "서브 전략", tags: ["첫 서브", "성공률 기록", "토스"], type: "serve", source: "coaching", angle: "성공률 숫자를 다음 코스 선택 기준으로 전환" },
  { slug: "aw-149-racket-285g-300g-315g", title: "라켓 무게 285 300 315 비교", excerpt: "라켓 무게 285g 300g 315g는 파워보다 준비 속도와 피로 누적이 다릅니다.", category: "장비 가이드", tags: ["라켓 무게", "285g", "300g"], type: "equipment", source: "equipment", angle: "동호회 경기 후반까지 같은 스윙이 가능한지 비교" },
  { slug: "aw-150-match-cooldown", title: "경기 후 쿨다운 순서", excerpt: "경기 후 쿨다운은 스트레칭보다 호흡과 수분, 종아리 긴장 확인이 먼저입니다.", category: "건강 & 피트니스", tags: ["경기 후 쿨다운", "회복 순서", "부상 예방"], type: "health", source: "health", angle: "샤워 전 10분에 끝내는 회복 체크 순서" },
  { slug: "aw-151-record-20", title: "실수 패턴 기록 20분", excerpt: "실수 패턴 기록은 20분이면 충분하지만 원인보다 반복 조건을 적어야 합니다.", category: "경기 분석", tags: ["실수 패턴", "20분 복기", "경기 기록"], type: "match", source: "coaching", angle: "포핸드 백핸드 이름보다 상황 조건으로 분류" },
  { slug: "aw-152-tennis-guide", title: "매치포인트 선택 줄이기", excerpt: "매치포인트 선택은 새 전술보다 이미 성공한 패턴 하나로 줄이는 게 안전합니다.", category: "경기 전략", tags: ["매치포인트", "선택 줄이기", "멘탈 루틴"], type: "match", source: "rules", angle: "압박 포인트에서 선택지를 줄이는 사전 약속" },
  { slug: "aw-156-tennis-guide", title: "파트너 점수 착각 줄이기", excerpt: "파트너 점수 착각은 기억력 문제가 아니라 콜 순서와 확인 습관의 문제입니다.", category: "복식 전술", tags: ["파트너 점수", "복식 콜", "점수 확인"], type: "doubles", source: "rules", angle: "포인트 전 콜 약속으로 불필요한 논쟁을 줄임" },
  { slug: "aw-157-5", title: "긴 랠리 후 사인 준비 5가지", excerpt: "긴 랠리 뒤 사인은 숨이 찬 상태에서도 실행 가능한 단순 약속이어야 합니다.", category: "복식 전술", tags: ["긴 랠리", "사인 준비", "5가지"], type: "doubles", source: "coaching", angle: "체력 저하 뒤에도 유지되는 사인 기준" },
  { slug: "aw-158-serve-beginner", title: "킥서브 연습 소리 평가", excerpt: "킥서브 연습은 높이보다 임팩트 소리와 궤적이 먼저 안정돼야 합니다.", category: "서브 전략", tags: ["킥서브", "연습 평가", "초보 서브"], type: "serve", source: "coaching", angle: "공이 튀는 높이 이전에 소리와 회전 방향을 듣는 법" },
  { slug: "aw-159-doubles-record", title: "복식 전위 통과 기록법", excerpt: "복식 전위 통과는 실수 탓보다 위치와 콜 타이밍을 함께 기록해야 줄어듭니다.", category: "복식 전술", tags: ["복식 전위", "통과 기록", "콜 타이밍"], type: "doubles", source: "coaching", angle: "전위가 움직인 시간과 파트너 콜을 같이 보는 복기" },
  { slug: "aw-160-court", title: "발목 불안 코트 이동 순서", excerpt: "발목 불안이 있으면 코트 이동은 빠른 출발보다 멈춤과 방향 전환부터 봅니다.", category: "코트 환경", tags: ["발목 불안", "코트 이동", "방향 전환"], type: "court", source: "health", angle: "코트 표면별 미끄럼보다 멈추는 자세를 먼저 확인" },
  { slug: "aw-161-club", title: "동호회 대회 참가 체크", excerpt: "동호회 대회 참가는 실력보다 일정, 규칙, 파트너 기대치를 먼저 맞춰야 편합니다.", category: "동호회 운영", tags: ["동호회 대회", "참가 체크", "경기 규칙"], type: "match", source: "rules", angle: "첫 참가자의 불안을 줄이는 운영 정보 확인" },
  { slug: "aw-162-mental", title: "더블폴트 후 멘탈 복구", excerpt: "더블폴트 후 멘탈 복구는 반성보다 다음 토스 높이를 정하는 행동이 필요합니다.", category: "멘탈 트레이닝", tags: ["더블폴트", "멘탈 복구", "서브 루틴"], type: "serve", source: "coaching", angle: "감정 정리 대신 다음 동작 하나를 고정" },
  { slug: "aw-164-doubles-serve", title: "복식 서브 첫 발 이동", excerpt: "복식 서브 뒤 첫 발은 네트 돌진보다 파트너 위치와 리턴 깊이에 맞춰야 합니다.", category: "복식 전술", tags: ["복식 서브", "첫 발 이동", "리턴 대응"], type: "doubles", source: "coaching", angle: "서버와 파트너가 첫 두 걸음을 맞추는 방식" },
  { slug: "aw-166-record", title: "대각 코스 분산 기록", excerpt: "대각 코스 분산은 많이 치기보다 같은 높이와 깊이로 보내는 비율을 기록합니다.", category: "경기 분석", tags: ["대각 코스", "분산 기록", "깊이"], type: "match", source: "coaching", angle: "코스 다양성보다 안정 깊이를 먼저 수치화" },
  { slug: "aw-167-tennis-guide", title: "사인 사이 인터벌 루틴", excerpt: "복식 사인 인터벌은 대화가 길어지지 않게 한 단어와 손짓으로 고정하세요.", category: "복식 전술", tags: ["복식 사인", "인터벌 루틴", "파트너 콜"], type: "doubles", source: "rules", angle: "포인트 사이 10초 안에 끝나는 사인 확인" },
  { slug: "aw-168-serve", title: "세컨드 서브 더블폴트 줄이기", excerpt: "세컨드 서브 더블폴트는 힘을 빼기보다 목표 높이와 코스 폭을 정해야 줄어듭니다.", category: "서브 전략", tags: ["세컨드 서브", "더블폴트", "코스 폭"], type: "serve", source: "coaching", angle: "안전한 서브를 약한 서브로 착각하지 않는 기준" },
  { slug: "aw-169-doubles-5", title: "상대 로브 많은 날 대처 5가지", excerpt: "상대 로브가 많을 때는 전위 후퇴와 스매시 욕심을 나눠 판단해야 합니다.", category: "복식 전술", tags: ["상대 로브", "복식 대처", "5가지"], type: "doubles", source: "coaching", angle: "전위가 무조건 물러나지 않는 상황별 선택" },
  { slug: "aw-170-injury-serve-beginner", title: "어깨 통증 후 서브 관리", excerpt: "어깨 통증 뒤 서브는 강도보다 토스 높이, 횟수, 회복 시간을 먼저 조절합니다.", category: "건강 & 피트니스", tags: ["어깨 통증", "서브 관리", "초보 서브"], type: "health", source: "health", angle: "통증 신호를 무시하지 않는 복귀 기준" },
  { slug: "aw-171-match-record", title: "경기 후 상대 규칙 확인", excerpt: "경기 후 상대 규칙 논쟁은 감정 기록보다 다음 대회에서 확인할 조항으로 남깁니다.", category: "경기 분석", tags: ["경기 후 기록", "상대 규칙", "대회 준비"], type: "match", source: "rules", angle: "논쟁을 재현하지 않고 체크리스트로 바꾸는 복기" },
  { slug: "aw-172-grip", title: "더운 날 그립 관리 순서", excerpt: "더운 날 그립 관리는 수건 사용, 교체 주기, 손 땀 패턴을 함께 봐야 합니다.", category: "장비 가이드", tags: ["더운 날 그립", "오버그립", "손 땀"], type: "equipment", source: "equipment", angle: "미끄럼이 생기기 전 교체 신호를 찾는 법" },
  { slug: "aw-173-serve", title: "서브 토스 옆으로 흐를 때", excerpt: "서브 토스가 옆으로 흐르면 손목보다 시작 위치와 놓는 높이를 먼저 봐야 합니다.", category: "서브 전략", tags: ["서브 토스", "옆으로 흐름", "교정"], type: "serve", source: "coaching", angle: "토스 방향을 잡는 출발점과 릴리스 높이 점검" },
  { slug: "aw-174-club-doubles", title: "동호회 복식 가운데 공 처리", excerpt: "동호회 복식 가운데 공은 실력보다 사전 콜과 라켓 방향 약속이 중요합니다.", category: "복식 전술", tags: ["가운데 공", "동호회 복식", "콜 약속"], type: "doubles", source: "coaching", angle: "양보와 중복 스윙을 줄이는 한 단어 약속" },
  { slug: "aw-176-tennis-guide", title: "테니스장 예약 전 확인", excerpt: "테니스장 예약 전에는 코트 표면, 조명, 취소 규정, 이동 시간을 함께 봐야 합니다.", category: "코트 환경", tags: ["테니스장 예약", "코트 표면", "취소 규정"], type: "court", source: "rules", angle: "예약 성공보다 당일 실패 가능성을 줄이는 확인 순서" },
  { slug: "aw-177-string-club-match", title: "추운 날 스트링 감각 조절", excerpt: "추운 날 스트링은 딱딱한 느낌과 팔 부담이 커져 텐션 판단을 다시 해야 합니다.", category: "장비 가이드", tags: ["추운 날 스트링", "텐션 감각", "팔 부담"], type: "equipment", source: "equipment", angle: "겨울 동호회 경기에서 타구감 변화를 기록" },
  { slug: "aw-178-record", title: "수비 전환 테스트 순서", excerpt: "수비 전환 테스트는 빠른 발보다 첫 멈춤과 다음 코스 선택을 함께 기록합니다.", category: "경기 분석", tags: ["수비 전환", "테스트 순서", "코스 선택"], type: "match", source: "coaching", angle: "수비 상황을 체력 문제가 아닌 판단 흐름으로 보기" },
  { slug: "aw-180-injury-grip", title: "손목 통증 때 그립 평가", excerpt: "손목 통증이 있으면 그립 두께, 악력, 임팩트 위치를 먼저 분리해 봅니다.", category: "건강 & 피트니스", tags: ["손목 통증", "그립 평가", "악력"], type: "health", source: "health", angle: "장비 문제와 사용 습관을 따로 확인하는 절차" },
  { slug: "aw-181-club-match-5", title: "동호회 첫 경기 매너 5가지", excerpt: "동호회 첫 경기 매너는 인사보다 점수 콜, 공 처리, 대기 흐름에서 드러납니다.", category: "동호회 운영", tags: ["동호회 첫 경기", "매너", "5가지"], type: "match", source: "rules", angle: "처음 온 사람이 어색하지 않게 지킬 경기 흐름" },
  { slug: "aw-182-beginner", title: "야간 조명 로브 대처", excerpt: "야간 조명 아래 로브는 공을 늦게 보는 문제가 많아 첫 후퇴 방향이 중요합니다.", category: "코트 환경", tags: ["야간 조명", "로브 대처", "초보 경기"], type: "court", source: "coaching", angle: "조명 때문에 늦는 시선을 발 위치로 보완" },
  { slug: "aw-183-record-record", title: "코치 피드백 기록 질문", excerpt: "코치 피드백 기록은 좋은 말보다 다음 주에 확인할 한 질문으로 남겨야 합니다.", category: "훈련 가이드", tags: ["코치 피드백", "기록 질문", "레슨 복습"], type: "practice", source: "coaching", angle: "피드백을 숙제가 아닌 관찰 질문으로 전환" },
  { slug: "aw-184-doubles", title: "복식 스트레이트 패싱 위치", excerpt: "복식 스트레이트 패싱은 강타보다 전위 발 위치와 라켓 면을 보고 결정합니다.", category: "복식 전술", tags: ["복식 스트레이트", "패싱 위치", "전위"], type: "doubles", source: "coaching", angle: "상대 전위가 움직인 방향으로 패싱 타이밍 결정" },
  { slug: "aw-186-tennis-guide", title: "레슨 질문 목록 정리", excerpt: "레슨 질문은 많이 묻기보다 코치가 바로 볼 수 있는 장면으로 좁혀야 합니다.", category: "훈련 가이드", tags: ["레슨 질문", "질문 목록", "연습 기준"], type: "practice", source: "coaching", angle: "추상 질문을 관찰 가능한 장면으로 바꾸는 법" },
  { slug: "aw-188-tennis-guide", title: "테니스 레슨비 아끼는 법", excerpt: "테니스 레슨비를 아끼려면 횟수보다 복습 기록과 질문 품질을 먼저 관리하세요.", category: "훈련 가이드", tags: ["테니스 레슨비", "복습 기록", "질문 품질"], type: "practice", source: "coaching", angle: "레슨 시간을 늘리지 않고 흡수율을 높이는 방식" },
  { slug: "aw-189-doubles-club-match", title: "복식 전위 사각 줄이기", excerpt: "복식 전위 사각은 움직임보다 파트너 공 깊이와 상대 준비를 같이 봐야 줄어듭니다.", category: "복식 전술", tags: ["복식 전위", "사각 줄이기", "파트너 공"], type: "doubles", source: "coaching", angle: "전위가 서 있는 위치보다 언제 멈추는지를 보는 법" },
  { slug: "aw-190-match-record", title: "테니스 가방 경기 전 기록", excerpt: "테니스 가방 준비는 물건 목록보다 빠졌을 때 경기력이 흔들리는 항목부터 적습니다.", category: "경기 준비", tags: ["테니스 가방", "경기 전 기록", "준비물"], type: "equipment", source: "rules", angle: "준비물 누락을 경기 리듬 손실 기준으로 정렬" },
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
  return `<table><thead><tr><th>확인 항목</th><th>좋은 신호</th><th>수정 신호</th></tr></thead><tbody><tr><td>${main}</td><td>선택 이유를 한 문장으로 설명할 수 있다</td><td>결과만 보고 매번 기준이 바뀐다</td></tr><tr><td>${extended}</td><td>반복 전후 차이를 짧게 기록한다</td><td>감각 표현만 있고 다음 행동이 없다</td></tr><tr><td>${support}</td><td>다음 경기에서 확인할 장면이 정해진다</td><td>연습과 경기 기록이 연결되지 않는다</td></tr></tbody></table>`;
}

function buildContent(row, index) {
  const accent = accents[index % accents.length];
  const [main, extended, support] = row.tags;
  const sources = sourceLinks(row.source);
  const related = internalLinks(row.type);
  const h2s = [
    `${main}을 결과가 아니라 신호로 읽기`,
    `${extended} 기준을 경기 안에서 확인하기`,
    `${support}까지 이어지는 20분 실행 순서`,
    `${row.category} 기록을 다음 선택으로 바꾸기`,
  ];

  return `<div class="article-summary" style="border-left:4px solid ${accent.border};background:${accent.bg};padding:16px 18px;margin:20px 0;border-radius:8px;"><strong>${row.title}</strong><br>${row.excerpt}</div>
<p>${row.title}을 찾는 사람은 대개 이미 한두 번 같은 장면에서 막힌 경험이 있습니다. 검색 결과에는 비슷한 조언이 많지만 실제 코트에서는 무엇부터 바꿔야 할지 흐려집니다. 이 글은 ${main}, ${extended}, ${support}를 한꺼번에 고치자는 이야기가 아닙니다. ${row.angle}에 맞춰 먼저 볼 신호와 나중에 남길 기록을 분리합니다. 기본 규칙과 훈련 원칙은 ${sources}를 기준으로 삼고, 동호회 경기와 레슨에서 바로 확인할 수 있는 장면만 골랐습니다.</p>
<p>핵심은 완벽한 정답보다 재현 가능한 기준입니다. 오늘 잘 맞은 이유를 설명하지 못하면 다음 경기에서 다시 흔들립니다. 반대로 실패했더라도 어느 순간부터 무너졌는지 남기면 다음 연습 주제가 선명해집니다. 관련 도구와 참고 글은 ${related}에서 이어서 확인할 수 있습니다. 글을 읽는 동안 모든 항목을 체크하려 하지 말고, 지금 가장 자주 반복되는 한 장면만 골라 적용하세요.</p>
<h2>${h2s[0]}</h2>
<p>${main}은 단어만 보면 단순해 보이지만 실제로는 여러 신호가 섞여 있습니다. 예를 들어 공이 짧아지는 문제와 몸이 급해지는 문제는 같은 결과를 만들 수 있습니다. 그래서 첫 번째 단계는 결과 이름을 붙이는 것이 아니라 직전 장면을 관찰하는 것입니다. 준비 위치가 늦었는지, 첫 발이 멈췄는지, 라켓 면이 열렸는지, 호흡이 끊겼는지를 나눠 봐야 합니다. 이렇게 보면 같은 실수라도 수정 방법이 달라집니다.</p>
<aside style="border-left:4px solid ${accent.border};background:#fff;padding:14px 16px;margin:18px 0;border-radius:8px;"><strong>판단 박스</strong><br>${row.excerpt} 이 문장을 경기 전 메모에 그대로 적어두면 기준이 흔들릴 때 다시 돌아올 수 있습니다. 오늘의 목표는 더 잘 치는 것이 아니라 같은 장면에서 같은 기준을 쓰는 것입니다.</aside>
<ul><li>${main}이 나온 장면을 점수, 위치, 상대 공의 깊이와 함께 적습니다.</li><li>${extended}는 성공 여부보다 반복 가능한 준비 동작으로 평가합니다.</li><li>${support}는 다음 경기에서 확인할 한 문장으로 압축합니다.</li><li>통증, 장비 이상, 미끄럼처럼 안전과 관련된 신호는 훈련 목표보다 먼저 멈춰 확인합니다.</li></ul>
<h2>${h2s[1]}</h2>
<p>${extended}를 경기 안에서 확인하려면 좋은 신호와 수정 신호를 분리해야 합니다. 좋은 신호는 다음 행동을 안정시키는 정보입니다. 수정 신호는 방금 점수를 잃었더라도 왜 같은 선택이 반복되는지 알려주는 정보입니다. 동호회 경기에서는 결과가 감정을 크게 흔들기 때문에 이 구분이 특히 중요합니다. 이겼는데도 같은 위험 선택이 반복됐다면 연습 주제가 남아 있고, 졌더라도 기준이 지켜졌다면 다음 경기에서 유지할 근거가 생깁니다.</p>
${buildTable(row)}
<p>표는 경기 직후 3분 안에 채우는 정도면 충분합니다. 길게 쓰면 다음부터 기록 자체가 부담이 됩니다. ${main}은 장면 이름, ${extended}는 기준, ${support}는 다음 확인 문장으로 적으세요. 이 세 줄이 있으면 레슨에서 질문할 때도 "왜 안 되나요"가 아니라 "이 장면에서 제 준비가 늦은지 봐주세요"처럼 구체적으로 물을 수 있습니다.</p>
<h2>${h2s[2]}</h2>
<p>20분 실행 순서는 네 구간으로 나누는 편이 안전합니다. 처음 5분은 몸 상태와 장비 상태를 확인합니다. 다음 7분은 같은 장면을 반복하되 강도를 올리지 않습니다. 그다음 5분은 실제 점수 상황을 붙입니다. 마지막 3분은 기록입니다. 이때 성공률을 길게 계산할 필요는 없습니다. ${support}가 다음 경기에서 다시 확인 가능한 문장으로 남았는지가 더 중요합니다.</p>
<ol><li>오늘 볼 기준을 ${main} 하나로 제한합니다.</li><li>${extended}가 드러나는 장면을 두 가지 이하로 고릅니다.</li><li>${support}와 연결되는 실제 점수 상황을 붙입니다.</li><li>마지막에는 다음 경기 전 읽을 문장 하나만 남깁니다.</li></ol>
<p>이 순서가 중요한 이유는 에너지를 아끼기 위해서입니다. 많은 동호인은 문제를 발견하면 그 자리에서 전부 고치려 합니다. 하지만 테니스는 움직임, 판단, 감정이 동시에 작동하는 종목이라 한 번에 여러 기준을 바꾸면 무엇이 좋아졌는지 알 수 없습니다. 하나만 고르고, 작게 확인하고, 다음 경기에서 다시 보는 방식이 더 오래 갑니다.</p>
<h2>${h2s[3]}</h2>
<p>${row.category} 글에서 가장 흔한 실패는 마지막에 "꾸준히 하세요"로 끝나는 것입니다. 실제로 필요한 것은 꾸준함보다 다음 선택입니다. 오늘의 기록이 다음 예약, 다음 레슨 질문, 다음 장비 조정, 다음 파트너 콜 중 어디로 이어지는지 정해야 합니다. ${row.title}도 같은 기준으로 봐야 합니다. 읽고 끝나는 정보가 아니라 다음 경기 전 30초 안에 다시 확인할 체크 문장으로 남겨야 합니다.</p>
<details><summary>${main}은 하루 만에 고칠 수 있나요?</summary><p>완전히 고치기는 어렵지만 한 가지 신호를 알아차리는 것은 가능합니다. 오늘은 성공률보다 같은 장면에서 같은 기준을 적용했는지를 확인하세요.</p></details>
<details><summary>${extended}와 ${support} 중 무엇을 먼저 봐야 하나요?</summary><p>경기 중에는 ${extended}를 먼저 보고, 경기 후 복기에서는 ${support}를 확인하는 순서가 좋습니다. 동시에 둘 다 바꾸려 하면 원인 추적이 흐려집니다.</p></details>
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

export const BLOG_CONTENT_PART18_QUALITY_REWRITES: Record<string, BlogContentEntry> = {
${contentEntries}
};
`;

const postEntries = rows
  .map((row, index) => {
    const publishAt = new Date(
      Date.parse("2026-05-21T18:00:00+09:00") + index * 5 * 60 * 60 * 1000,
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

const postsFile = `export const articleWriterPart18PostOverrides = [
${postEntries}
];
`;

fs.mkdirSync(path.dirname(CONTENT_OUT), { recursive: true });
fs.writeFileSync(CONTENT_OUT, contentFile, "utf8");
fs.writeFileSync(POSTS_OUT, postsFile, "utf8");
console.log(
  JSON.stringify({ generated: rows.length, content: CONTENT_OUT, posts: POSTS_OUT }, null, 2),
);
