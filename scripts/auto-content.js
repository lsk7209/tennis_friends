/**
 * 자동 블로그 콘텐츠 생성 스크립트 (Gemini API)
 * 실행: node scripts/auto-content.js
 * 환경변수: GEMINI_API_KEY (필수), DAILY_AI_BUDGET (선택, 기본 $0.5)
 */
const fs = require("fs");
const https = require("https");
const path = require("path");

const API_KEY = process.env.GEMINI_API_KEY;
const DAILY_BUDGET = parseFloat(process.env.DAILY_AI_BUDGET || "0.5");
const COST_PER_POST = 0.002; // gemini-2.5-flash-lite 기준 추정
// 1회 실행당 생성 편수(빌드 비용 절감용 배치). cron을 주2회로 줄이고 회당 여러 편을 묶어
// 발행량은 유지하면서 git push(=Vercel 빌드) 횟수만 줄인다. 미설정 시 기존값 2 유지.
const BATCH_POSTS = parseInt(process.env.BATCH_POSTS || "2", 10);

// 테니스 롱테일 키워드 주제 큐
const TOPIC_QUEUE = [
  {
    slug: "tennis-kick-serve-technique",
    title: "킥 서브 완전 마스터 가이드 — 스핀·바운드·구사법",
    category: "기술 가이드",
    tags: ["서브", "킥서브", "스핀서브", "테니스 기술", "서브 연습"],
  },
  {
    slug: "tennis-mental-pressure-points",
    title: "중요한 포인트에서 멘탈 강화법 — 30-40·타이브레이크·챔피언십 포인트",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "집중력", "테니스 심리", "중요한 포인트", "타이브레이크"],
  },
  {
    slug: "tennis-return-of-serve-guide",
    title: "서브 리턴 완전 가이드 — 위치·타이밍·전술",
    category: "기술 가이드",
    tags: ["리턴", "서브 리턴", "테니스 전술", "리턴 포지션"],
  },
  {
    slug: "tennis-clay-court-tactics",
    title: "클레이 코트 전술 완전 가이드 — 스핀·슬라이딩·포지셔닝",
    category: "전술 가이드",
    tags: ["클레이 코트", "테니스 전술", "코트별 전략", "스핀", "슬라이딩"],
  },
  {
    slug: "tennis-net-approach-shots",
    title: "어프로치샷 마스터 — 네트로 나가는 타이밍과 코스",
    category: "기술 가이드",
    tags: ["어프로치샷", "네트 플레이", "테니스 기술", "발리"],
  },
  {
    slug: "tennis-topspin-forehand-guide",
    title: "탑스핀 포핸드 완전 분석 — 회전·파워·코스 컨트롤",
    category: "기술 가이드",
    tags: ["탑스핀", "포핸드", "회전", "테니스 기술", "포핸드 연습"],
  },
  {
    slug: "tennis-doubles-communication",
    title: "복식 파트너 소통법 — 시그널·포메이션·전술 결정",
    category: "복식 전략",
    tags: ["복식", "파트너 소통", "복식 전술", "복식 포메이션"],
  },
  {
    slug: "tennis-volley-technique-guide",
    title: "발리 기술 완전 마스터 — 포어·백핸드·하프발리",
    category: "기술 가이드",
    tags: ["발리", "네트 플레이", "포어발리", "백핸드발리", "테니스 기술"],
  },
  {
    slug: "tennis-overhead-smash-guide",
    title: "스매시 완전 정복 — 타이밍·점프 스매시·실전 활용",
    category: "기술 가이드",
    tags: ["스매시", "오버헤드", "점프스매시", "테니스 기술"],
  },
  {
    slug: "tennis-slice-backhand-mastery",
    title: "슬라이스 백핸드 마스터 가이드 — 언더스핀·코스·활용법",
    category: "기술 가이드",
    tags: ["슬라이스", "백핸드", "언더스핀", "테니스 기술", "슬라이스 백핸드"],
  },
  {
    slug: "tennis-tiebreak-strategy",
    title: "타이브레이크 전략 완전 가이드 — 멘탈·서브 순서·포인트 관리",
    category: "전술 가이드",
    tags: ["타이브레이크", "테니스 전술", "멘탈", "서브 전략"],
  },
  {
    slug: "tennis-racket-selection-guide",
    title: "테니스 라켓 선택 완전 가이드 — 헤드 사이즈·무게·밸런스",
    category: "장비 가이드",
    tags: ["라켓 선택", "테니스 라켓", "헤드사이즈", "라켓 무게", "장비"],
  },
  {
    slug: "tennis-string-tension-selection",
    title: "스트링 선택 완전 가이드 — 폴리·나일론·텐션별 특성",
    category: "장비 가이드",
    tags: ["스트링", "테니스 줄", "폴리에스터", "텐션", "장비 선택"],
  },
  {
    slug: "tennis-grip-types-guide",
    title: "테니스 그립 종류 완전 정리 — 이스턴·웨스턴·컨티넨탈",
    category: "기술 가이드",
    tags: ["그립", "이스턴 그립", "웨스턴 그립", "컨티넨탈", "테니스 기본"],
  },
  {
    slug: "tennis-serve-and-volley-tactics",
    title: "서브앤발리 전술 가이드 — 잔디·실내 코트 공략법",
    category: "전술 가이드",
    tags: ["서브앤발리", "네트 어프로치", "테니스 전술", "잔디코트"],
  },
  {
    slug: "tennis-fitness-training-guide",
    title: "테니스 체력 훈련 완전 가이드 — 스피드·근력·지구력",
    category: "훈련 가이드",
    tags: ["테니스 체력", "훈련", "스피드 훈련", "근력", "지구력"],
  },
  {
    slug: "tennis-injury-prevention-stretching",
    title: "테니스 부상 예방 스트레칭 — 어깨·팔꿈치·무릎 보호",
    category: "부상 예방",
    tags: ["부상 예방", "스트레칭", "테니스 엘보", "어깨 부상", "무릎"],
  },
  {
    slug: "tennis-grass-court-strategy",
    title: "잔디 코트 전략 완전 가이드 — 낮은 바운드·서브·네트 전술",
    category: "전술 가이드",
    tags: ["잔디코트", "테니스 전술", "코트별 전략", "윔블던", "낮은 바운드"],
  },
  {
    slug: "tennis-beginner-first-month",
    title: "테니스 입문 첫 한 달 — 초보자가 꼭 배워야 할 기초",
    category: "초보자 가이드",
    tags: ["테니스 입문", "초보자", "테니스 기초", "처음 배우기", "NTRP 1.0"],
  },
  {
    slug: "tennis-lob-shot-guide",
    title: "로브샷 마스터 가이드 — 수비 로브·공격 로브·타이밍",
    category: "기술 가이드",
    tags: ["로브", "테니스 기술", "수비 로브", "탑스핀 로브", "네트 공략"],
  },
  {
    slug: "tennis-drop-shot-timing",
    title: "드롭샷 완벽 타이밍 — 언제 어떻게 구사하는가",
    category: "기술 가이드",
    tags: ["드롭샷", "테니스 기술", "터치", "네트 앞 샷", "전술"],
  },
  {
    slug: "tennis-forehand-inside-out",
    title: "인사이드아웃 포핸드 완전 정복 — 코스·파워·전술",
    category: "기술 가이드",
    tags: ["인사이드아웃", "포핸드", "테니스 기술", "크로스코트", "다운더라인"],
  },
  {
    slug: "tennis-second-serve-strategy",
    title: "세컨드 서브 전략 — 안정성과 파워의 균형 찾기",
    category: "기술 가이드",
    tags: ["세컨드서브", "서브", "킥서브", "안정성", "더블폴트 방지"],
  },
  {
    slug: "tennis-hard-court-tactics",
    title: "하드 코트 전술 완전 가이드 — 바운드·포지셔닝·템포",
    category: "전술 가이드",
    tags: ["하드코트", "테니스 전술", "코트별 전략", "바운드", "포지셔닝"],
  },
  {
    slug: "tennis-one-handed-backhand-guide",
    title: "한손 백핸드 완전 마스터 — 그립·스윙·장단점",
    category: "기술 가이드",
    tags: ["한손백핸드", "백핸드", "원핸드", "테니스 기술", "클래식 백핸드"],
  },
  {
    slug: "tennis-match-nerves-control",
    title: "테니스 경기 긴장감 컨트롤 — 루틴·호흡·집중력",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "경기 긴장", "루틴", "호흡법", "테니스 심리"],
  },
  {
    slug: "tennis-ranking-improvement-plan",
    title: "테니스 랭킹 올리기 — 토너먼트 선택과 포인트 전략",
    category: "전략 가이드",
    tags: ["테니스 랭킹", "토너먼트", "포인트", "실력 향상", "대회 전략"],
  },
  // === 30일치 추가 주제 (60개) ===
  {
    slug: "tennis-split-step-guide",
    title: "스플릿 스텝 완전 정복 — 타이밍·리듬·발 위치",
    category: "기술 가이드",
    tags: ["스플릿스텝", "풋워크", "테니스 기술", "반응속도"],
  },
  {
    slug: "tennis-footwork-training",
    title: "테니스 풋워크 훈련 — 사이드스텝·크로스스텝·리커버리",
    category: "훈련 가이드",
    tags: ["풋워크", "훈련", "사이드스텝", "테니스 체력"],
  },
  {
    slug: "tennis-serve-toss-technique",
    title: "서브 토스 완벽하게 — 높이·위치·일관성 잡기",
    category: "기술 가이드",
    tags: ["서브 토스", "서브", "테니스 기술", "서브 연습"],
  },
  {
    slug: "tennis-ace-serve-placement",
    title: "에이스 서브 코스 공략 — T존·와이드·보디 서브",
    category: "기술 가이드",
    tags: ["에이스", "서브 코스", "테니스 서브", "서브 전략"],
  },
  {
    slug: "tennis-doubles-poach-strategy",
    title: "복식 포치 전략 완전 가이드 — 타이밍·시그널·포지션",
    category: "복식 전략",
    tags: ["포치", "복식", "네트 플레이", "복식 전술"],
  },
  {
    slug: "tennis-doubles-receive-formation",
    title: "복식 리시브 포메이션 — I포메이션·호주 포메이션",
    category: "복식 전략",
    tags: ["복식 리시브", "포메이션", "복식 전술", "리시브"],
  },
  {
    slug: "tennis-core-exercise-guide",
    title: "테니스를 위한 코어 운동 — 회전력·안정성·파워",
    category: "훈련 가이드",
    tags: ["코어 운동", "테니스 체력", "근력", "회전력"],
  },
  {
    slug: "tennis-shoulder-strengthening",
    title: "테니스 어깨 강화 운동 — 로테이터 커프·부상 예방",
    category: "부상 예방",
    tags: ["어깨 운동", "로테이터 커프", "부상 예방", "테니스 어깨"],
  },
  {
    slug: "tennis-nutrition-diet-guide",
    title: "테니스 선수를 위한 영양 식단 가이드",
    category: "건강 가이드",
    tags: ["테니스 식단", "영양", "탄수화물", "단백질", "경기 전 식사"],
  },
  {
    slug: "tennis-hydration-guide",
    title: "테니스 수분 보충 완전 가이드 — 경기 전·중·후",
    category: "건강 가이드",
    tags: ["수분 보충", "테니스 건강", "전해질", "경기 컨디션"],
  },
  {
    slug: "tennis-pre-match-routine",
    title: "경기 전 루틴 완전 가이드 — 워밍업·멘탈 준비",
    category: "멘탈 트레이닝",
    tags: ["경기 전 루틴", "워밍업", "멘탈 준비", "테니스 루틴"],
  },
  {
    slug: "tennis-post-match-recovery",
    title: "경기 후 회복 루틴 — 쿨다운·아이싱·수면",
    category: "건강 가이드",
    tags: ["회복", "쿨다운", "아이싱", "테니스 회복"],
  },
  {
    slug: "tennis-video-analysis-guide",
    title: "내 경기 영상 분석법 — 포인트 패턴·약점 파악",
    category: "전략 가이드",
    tags: ["영상 분석", "경기 분석", "패턴", "자기 분석"],
  },
  {
    slug: "tennis-practice-planning",
    title: "효과적인 테니스 연습 계획 수립 — 주간·월간 플랜",
    category: "훈련 가이드",
    tags: ["연습 계획", "훈련 플랜", "테니스 연습", "체계적 훈련"],
  },
  {
    slug: "tennis-wall-practice-drills",
    title: "벽치기 테니스 훈련 — 혼자 하는 효과적인 연습법",
    category: "훈련 가이드",
    tags: ["벽치기", "혼자 연습", "테니스 훈련", "드릴"],
  },
  {
    slug: "tennis-ball-machine-drills",
    title: "볼머신 활용 훈련법 — 반복·패턴·실전 드릴",
    category: "훈련 가이드",
    tags: ["볼머신", "훈련", "드릴", "반복 연습"],
  },
  {
    slug: "tennis-serve-practice-routine",
    title: "서브 연습 루틴 — 50개 서브로 완성하는 구조화 훈련",
    category: "훈련 가이드",
    tags: ["서브 연습", "루틴", "훈련", "서브 구조"],
  },
  {
    slug: "tennis-forehand-error-correction",
    title: "포핸드 에러 줄이기 — 흔한 실수와 교정법",
    category: "기술 가이드",
    tags: ["포핸드 교정", "에러 줄이기", "테니스 실수", "스윙 교정"],
  },
  {
    slug: "tennis-backhand-error-correction",
    title: "백핸드 에러 줄이기 — 교정 포인트와 드릴",
    category: "기술 가이드",
    tags: ["백핸드 교정", "에러", "테니스 교정", "드릴"],
  },
  {
    slug: "tennis-shoe-selection-guide",
    title: "테니스화 선택 완전 가이드 — 코트별·발 유형별",
    category: "장비 가이드",
    tags: ["테니스화", "신발 선택", "코트별 신발", "장비"],
  },
  {
    slug: "tennis-overgrip-replacement-guide",
    title: "오버그립 교체 주기와 선택법 — 흡수력·두께·소재",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "교체", "테니스 장비"],
  },
  {
    slug: "tennis-restringing-timing-guide",
    title: "라켓 리스트링 시기와 방법 — 언제 교체해야 하나",
    category: "장비 가이드",
    tags: ["리스트링", "스트링 교체", "라켓 관리", "장비"],
  },
  {
    slug: "tennis-string-pattern-16x19-vs-18x20",
    title: "스트링 패턴 16x19 vs 18x20 — 차이점과 선택법",
    category: "장비 가이드",
    tags: ["스트링 패턴", "16x19", "18x20", "라켓 선택", "장비"],
  },
  {
    slug: "tennis-hybrid-string-setup",
    title: "하이브리드 스트링 셋업 완전 가이드 — 조합·텐션",
    category: "장비 가이드",
    tags: ["하이브리드 스트링", "스트링 셋업", "폴리", "나일론", "장비"],
  },
  {
    slug: "tennis-elbow-treatment-guide",
    title: "테니스 엘보 치료와 예방 — 통증 원인과 재활",
    category: "부상 예방",
    tags: ["테니스 엘보", "팔꿈치 통증", "재활", "부상 치료"],
  },
  {
    slug: "tennis-ankle-injury-prevention",
    title: "테니스 발목 부상 예방 — 테이핑·강화 운동·신발",
    category: "부상 예방",
    tags: ["발목 부상", "테이핑", "부상 예방", "테니스 건강"],
  },
  {
    slug: "tennis-wrist-injury-prevention",
    title: "테니스 손목 부상 예방 — 스윙·장비·보호대",
    category: "부상 예방",
    tags: ["손목 부상", "부상 예방", "손목 보호", "테니스 건강"],
  },
  {
    slug: "tennis-warmup-routine-guide",
    title: "테니스 준비운동 완전 루틴 — 동적 스트레칭·활성화",
    category: "훈련 가이드",
    tags: ["준비운동", "워밍업", "동적 스트레칭", "활성화"],
  },
  {
    slug: "tennis-cooldown-routine-guide",
    title: "테니스 쿨다운 루틴 — 근육 이완·정적 스트레칭",
    category: "훈련 가이드",
    tags: ["쿨다운", "정적 스트레칭", "근육 이완", "회복"],
  },
  {
    slug: "tennis-mixed-doubles-strategy",
    title: "혼합복식 전략 완전 가이드 — 포메이션·역할 분담",
    category: "복식 전략",
    tags: ["혼합복식", "복식 전략", "포메이션", "역할 분담"],
  },
  {
    slug: "tennis-senior-guide",
    title: "시니어 테니스 완전 가이드 — 부상 예방·페이스 조절",
    category: "시니어 가이드",
    tags: ["시니어 테니스", "50대 테니스", "부상 예방", "페이스 조절"],
  },
  {
    slug: "tennis-women-beginner-guide",
    title: "여성 테니스 입문 가이드 — 라켓 선택·기초 기술",
    category: "초보자 가이드",
    tags: ["여성 테니스", "입문", "라켓 선택", "기초 기술"],
  },
  {
    slug: "tennis-children-beginner-guide",
    title: "어린이 테니스 입문 — 나이별 훈련과 장비 선택",
    category: "초보자 가이드",
    tags: ["어린이 테니스", "주니어", "입문", "나이별 훈련"],
  },
  {
    slug: "tennis-etiquette-complete-guide",
    title: "테니스 에티켓 완전 가이드 — 코트 매너·규칙",
    category: "테니스 문화",
    tags: ["테니스 에티켓", "코트 매너", "규칙", "테니스 문화"],
  },
  {
    slug: "tennis-rainy-weather-tips",
    title: "비 오는 날 테니스 팁 — 슬라이드·그립·전략",
    category: "전술 가이드",
    tags: ["우천시 테니스", "비 오는 날", "슬라이드", "그립 관리"],
  },
  {
    slug: "tennis-hot-weather-performance",
    title: "더운 날씨 테니스 — 컨디션 관리·페이스 조절",
    category: "건강 가이드",
    tags: ["더운 날씨", "여름 테니스", "컨디션", "페이스 조절"],
  },
  {
    slug: "tennis-windy-day-strategy",
    title: "바람 부는 날 테니스 전략 — 탑스핀·로브·서브",
    category: "전술 가이드",
    tags: ["바람", "야외 테니스", "전술", "탑스핀"],
  },
  {
    slug: "tennis-night-match-tips",
    title: "야간 테니스 경기 팁 — 시야·집중력·조명 적응",
    category: "전술 가이드",
    tags: ["야간 경기", "야간 테니스", "집중력", "시야"],
  },
  {
    slug: "tennis-ntrp-25-to-30-guide",
    title: "NTRP 2.5→3.0 레벨업 완전 가이드",
    category: "레벨업 가이드",
    tags: ["NTRP 2.5", "NTRP 3.0", "레벨업", "실력 향상"],
  },
  {
    slug: "tennis-ntrp-30-to-35-guide",
    title: "NTRP 3.0→3.5 레벨업 — 넘어야 할 벽과 해결책",
    category: "레벨업 가이드",
    tags: ["NTRP 3.0", "NTRP 3.5", "레벨업", "실력 향상"],
  },
  {
    slug: "tennis-ntrp-35-to-40-guide",
    title: "NTRP 3.5→4.0 레벨업 — 고급 기술과 전략 전환",
    category: "레벨업 가이드",
    tags: ["NTRP 3.5", "NTRP 4.0", "레벨업", "고급 기술"],
  },
  {
    slug: "tennis-baseline-rally-strategy",
    title: "베이스라인 랠리 전략 — 깊이·방향·템포 변화",
    category: "전술 가이드",
    tags: ["베이스라인", "랠리", "전략", "깊이", "템포"],
  },
  {
    slug: "tennis-error-reduction-guide",
    title: "언포스드 에러 줄이기 — 원인 분석과 교정법",
    category: "기술 가이드",
    tags: ["언포스드 에러", "에러 줄이기", "실수", "안정성"],
  },
  {
    slug: "tennis-winner-production-guide",
    title: "위너 생산 늘리기 — 코스 공략과 타이밍",
    category: "기술 가이드",
    tags: ["위너", "코스", "타이밍", "공격 테니스"],
  },
  {
    slug: "tennis-match-flow-reading",
    title: "경기 흐름 읽기 — 모멘텀·전환점·전술 변화",
    category: "전술 가이드",
    tags: ["경기 흐름", "모멘텀", "전술 변화", "경기 읽기"],
  },
  {
    slug: "tennis-slump-recovery-guide",
    title: "테니스 슬럼프 극복 — 원인 파악과 회복 루틴",
    category: "멘탈 트레이닝",
    tags: ["슬럼프", "극복", "멘탈", "회복"],
  },
  {
    slug: "tennis-forehand-inside-in-guide",
    title: "인사이드인 포핸드 — 크로스코트 결정타 만들기",
    category: "기술 가이드",
    tags: ["인사이드인", "포핸드", "크로스코트", "위너"],
  },
  {
    slug: "tennis-backhand-slice-low-ball",
    title: "낮은 공 슬라이스 백핸드 처리 — 어프로치와 방어",
    category: "기술 가이드",
    tags: ["슬라이스", "낮은공", "백핸드", "어프로치"],
  },
  {
    slug: "tennis-second-serve-kick-topspin",
    title: "세컨드 서브 킥·탑스핀 완전 정복",
    category: "기술 가이드",
    tags: ["세컨드서브", "킥서브", "탑스핀", "안정성"],
  },
  {
    slug: "tennis-forehand-down-the-line",
    title: "포핸드 다운더라인 — 코스·타이밍·리스크 관리",
    category: "기술 가이드",
    tags: ["다운더라인", "포핸드", "코스", "공격"],
  },
  {
    slug: "tennis-backhand-crosscourt",
    title: "백핸드 크로스코트 — 각도·회전·깊이 완전 분석",
    category: "기술 가이드",
    tags: ["백핸드", "크로스코트", "각도", "회전"],
  },
  {
    slug: "tennis-coach-selection-guide",
    title: "테니스 코치 선택 가이드 — 레벨별·목적별 기준",
    category: "테니스 문화",
    tags: ["코치 선택", "테니스 레슨", "코치", "레슨 팁"],
  },
  {
    slug: "tennis-club-selection-guide",
    title: "테니스 클럽 선택법 — 수준·위치·시설 체크리스트",
    category: "테니스 문화",
    tags: ["테니스 클럽", "동호회", "클럽 선택", "테니스 문화"],
  },
  {
    slug: "tennis-tournament-preparation",
    title: "테니스 대회 준비 완전 가이드 — D-30·D-7·당일",
    category: "전략 가이드",
    tags: ["대회 준비", "토너먼트", "경기 준비", "컨디션"],
  },
  {
    slug: "tennis-mental-toughness-building",
    title: "테니스 멘탈 강화 훈련 — 루틴·자기 대화·집중",
    category: "멘탈 트레이닝",
    tags: ["멘탈 강화", "자기 대화", "집중력", "루틴"],
  },
  {
    slug: "tennis-opponent-analysis-guide",
    title: "상대 약점 파악과 공략법 — 경기 중 분석 기술",
    category: "전술 가이드",
    tags: ["상대 분석", "약점 공략", "전술", "경기 분석"],
  },
  {
    slug: "tennis-indoor-court-tips",
    title: "실내 테니스 코트 팁 — 바운드·조명·적응 전략",
    category: "전술 가이드",
    tags: ["실내 코트", "바운드", "조명", "환경 적응"],
  },
  {
    slug: "tennis-beginner-equipment-guide",
    title: "테니스 입문 장비 완전 가이드 — 예산별 추천",
    category: "초보자 가이드",
    tags: ["입문 장비", "초보자", "라켓 추천", "예산별"],
  },
  {
    slug: "tennis-string-breaking-solution",
    title: "스트링 자주 끊기는 이유와 해결책",
    category: "장비 가이드",
    tags: ["스트링 절단", "스트링", "관리", "장비 관리"],
  },
  {
    slug: "tennis-western-grip-advantages",
    title: "웨스턴 그립의 장단점 — 언제 쓰고 언제 피하나",
    category: "기술 가이드",
    tags: ["웨스턴 그립", "그립", "탑스핀", "클레이코트"],
  },
];

function callGemini(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 4000, temperature: 0.7 },
    });

    const options = {
      hostname: "generativelanguage.googleapis.com",
      path: `/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) {
            reject(new Error(parsed.error.message));
          } else {
            resolve(parsed.candidates[0].content.parts[0].text);
          }
        } catch (e) {
          reject(new Error("JSON parse error: " + data.slice(0, 200)));
        }
      });
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

function buildPageContent(slug, title, htmlContent, tags) {
  const lines = [
    `import type { Metadata } from 'next';`,
    `import Link from 'next/link';`,
    `import { getSiteUrl } from '@/lib/site';`,
    `import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';`,
    ``,
    `export const metadata: Metadata = {`,
    `  title: '${title} | TennisFriends',`,
    `  description: '${title}에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술과 전술을 상세히 설명합니다.',`,
    `  keywords: ${JSON.stringify(tags)},`,
    `  alternates: { canonical: \`\${getSiteUrl()}/blog/${slug}\` },`,
    `  openGraph: { title: '${title}', type: 'article', locale: 'ko_KR', siteName: 'TennisFriends' },`,
    `};`,
    ``,
    `export default function Page() {`,
    `  const siteUrl = getSiteUrl();`,
    `  return (`,
    `    <div className="min-h-screen bg-gray-50">`,
    `      <BreadcrumbSchema items={[`,
    `        { name: 'TennisFriends', item: siteUrl },`,
    `        { name: '블로그', item: \`\${siteUrl}/blog\` },`,
    `        { name: '${title}', item: \`\${siteUrl}/blog/${slug}\` },`,
    `      ]} />`,
    `      <article className="container mx-auto max-w-3xl px-4 py-12">`,
    `        <h1 className="text-3xl font-bold text-gray-900 mb-8">${title}</h1>`,
    `        <div`,
    `          className="prose prose-lg max-w-none"`,
    `          dangerouslySetInnerHTML={{`,
    `            __html: \`${htmlContent.replace(/`/g, "\\`").replace(/\$/g, "\\$")}\`,`,
    `          }}`,
    `        />`,
    `        <div className="mt-12 p-6 bg-blue-50 rounded-xl">`,
    `          <p className="font-semibold text-blue-900 mb-2">내 테니스 실력 측정하기</p>`,
    `          <Link href="/utility/ntrp-test" className="text-blue-600 underline">`,
    `            무료 NTRP 실력 테스트 →`,
    `          </Link>`,
    `        </div>`,
    `      </article>`,
    `    </div>`,
    `  );`,
    `}`,
  ];
  return lines.join("\n") + "\n";
}

function addToBlogPosts(slug, title, tags, category) {
  const postsFile = "src/data/blog-posts.js";
  let content = fs.readFileSync(postsFile, "utf8");

  // 이미 있으면 스킵
  if (content.includes(`"id": "${slug}"`)) {
    console.log(`  이미 등록됨: ${slug}`);
    return;
  }

  const today = new Date().toISOString().split("T")[0];
  const entry = `  {
    "id": "${slug}",
    "slug": "${slug}",
    "tags": ${JSON.stringify(tags)},
    "title": "${title}",
    "excerpt": "${title}에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    "badge": "최신 글",
    "category": "${category}",
    "date": "${today}",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },\n`;

  content = content.replace(
    "export const allBlogPosts = [\n",
    `export const allBlogPosts = [\n${entry}`,
  );
  fs.writeFileSync(postsFile, content, "utf8");
}

async function generatePost(topic) {
  const prompt = `테니스 전문 블로그 글을 한국어로 작성해주세요.

제목: ${topic.title}
카테고리: ${topic.category}
키워드: ${topic.tags.join(", ")}

요구사항:
- HTML 형식으로 작성 (h2, h3, p, ul, li 태그만 사용, class 속성 없이)
- 1500자 이상
- 실용적인 팁과 구체적인 방법 포함
- 첫 두 문장에 핵심 답변 완결 (AI 인용 최적화)
- h2 섹션 최소 4개
- FAQ 섹션 포함 (h2 "자주 묻는 질문" + 3개 h3 질문)
- 내부 링크 없이 순수 콘텐츠만
- 마크다운 없이 HTML 태그만

HTML 본문만 출력하세요. 다른 설명은 없이 HTML만.`;

  const raw = await callGemini(prompt);
  // Gemini가 ```html 코드블록으로 감쌀 경우 제거
  return raw
    .trim()
    .replace(/^```html\n?/, "")
    .replace(/^```\n?/, "")
    .replace(/\n?```$/, "")
    .trim();
}

async function main() {
  if (!API_KEY) {
    console.error("❌ GEMINI_API_KEY 환경변수 필요");
    process.exit(1);
  }

  const maxPosts = Math.floor(DAILY_BUDGET / COST_PER_POST);
  const toGenerate = TOPIC_QUEUE.filter(({ slug }) => {
    const dir = path.join("src/app/blog", slug);
    return !fs.existsSync(dir);
  }).slice(0, Math.min(maxPosts, BATCH_POSTS)); // 실행당 최대 BATCH_POSTS개 (배치 발행)

  if (toGenerate.length === 0) {
    console.log("생성할 새 주제 없음 (모두 존재하거나 예산 초과)");
    return;
  }

  console.log(`생성 예정: ${toGenerate.length}개`);

  for (const topic of toGenerate) {
    console.log(`\n생성 중: ${topic.slug}`);
    try {
      const htmlContent = await generatePost(topic);

      const blogDir = path.join("src/app/blog", topic.slug);
      fs.mkdirSync(blogDir, { recursive: true });
      fs.writeFileSync(
        path.join(blogDir, "page.tsx"),
        buildPageContent(topic.slug, topic.title, htmlContent, topic.tags),
        "utf8",
      );

      addToBlogPosts(topic.slug, topic.title, topic.tags, topic.category);
      console.log(`✅ 완료: ${topic.slug}`);
    } catch (err) {
      console.error(`❌ 실패: ${topic.slug} — ${err.message}`);
    }
  }

  console.log("\n자동 콘텐츠 생성 완료");
}

main();
