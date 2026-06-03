// 블로그 글 메타데이터 - 자동 생성됨
import { articleWriterBlogPosts } from "./blog-posts-aw-300.js";
import { articleWriterPart12Posts } from "./blog-posts-aw-part12.js";
import { articleWriterTitle100Posts } from "./blog-posts-aw-title100.js";
import { articleWriterPart16PostOverrides } from "./blog-posts-part16-overrides.js";
import { articleWriterPart17PostOverrides } from "./blog-posts-part17-overrides.js";
import { articleWriterPart18PostOverrides } from "./blog-posts-part18-overrides.js";
import { articleWriterPart19PostOverrides } from "./blog-posts-part19-overrides.js";
import { articleWriterPart20PostOverrides } from "./blog-posts-part20-overrides.js";
import { articleWriterPart21PostOverrides } from "./blog-posts-part21-overrides.js";
import { articleWriterPart22PostOverrides } from "./blog-posts-part22-overrides.js";
import { articleWriterPart23PostOverrides } from "./blog-posts-part23-overrides.js";
import { articleWriterPart24PostOverrides } from "./blog-posts-part24-overrides.js";
import { articleWriterPart25PostOverrides } from "./blog-posts-part25-overrides.js";
import { articleWriterPart26PostOverrides } from "./blog-posts-part26-overrides.js";

const SCHEDULED_POST_BADGE_COLORS = {
  blog: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
  guide:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
};

const SCHEDULED_CATEGORY_COLORS = {
  "지역 정보":
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  "장비 가이드":
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "건강 & 피트니스":
    "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
  "멘탈 트레이닝":
    "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
  "테니스 레슨":
    "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  "경기 분석":
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  "입문 가이드":
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "전술 가이드":
    "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
  "훈련 가이드":
    "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
  "동호회 운영":
    "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  "여행 가이드":
    "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300",
};

const scheduledPostSeeds = [
  {
    id: "seoul-best-tennis-courts",
    title: "서울 테니스장 추천 7곳 — 예약·코트·입문자 기준",
    excerpt:
      "서울에서 테니스장을 고를 때는 위치보다 예약 난도, 코트 표면, 레슨 동선, 야간 조명, 주차까지 함께 봐야 합니다.",
    category: "지역 정보",
    tags: ["서울 테니스장", "테니스 코트", "테니스 예약", "입문자"],
    date: "2026-05-03",
    scheduledAt: "2026-05-03T09:00:00+09:00",
  },
  {
    id: "winter-tennis-training",
    title: "겨울 테니스 훈련법 — 부상 없이 감각 유지하기",
    excerpt:
      "추운 날 테니스는 더 세게 치는 훈련보다 체온, 관절 가동성, 짧은 랠리 품질을 지키는 방식으로 설계해야 합니다.",
    category: "건강 & 피트니스",
    tags: ["겨울 테니스", "부상 예방", "실내 코트", "워밍업"],
    date: "2026-05-03",
    scheduledAt: "2026-05-03T14:00:00+09:00",
  },
  {
    id: "tennis-mental-techniques",
    title: "테니스 멘탈 기법 5가지 — 긴장감 줄이는 루틴",
    excerpt:
      "중요한 포인트에서 흔들리는 이유는 의지가 약해서가 아니라 판단 기준이 사라지기 때문입니다. 포인트 사이 루틴으로 복구하세요.",
    category: "멘탈 트레이닝",
    tags: ["테니스 멘탈", "경기 긴장", "루틴", "집중력"],
    date: "2026-05-03",
    scheduledAt: "2026-05-03T19:00:00+09:00",
  },
  {
    id: "backhand-swing-correction",
    title: "백핸드 스윙 교정 — 타점·회전·발 위치 점검",
    excerpt:
      "백핸드가 밀리거나 뜬다면 손목보다 준비 위치와 앞발 고정, 어깨 회전 순서를 먼저 점검해야 합니다.",
    category: "테니스 레슨",
    tags: ["백핸드", "스윙 교정", "타점", "투핸드"],
    date: "2026-05-04",
    scheduledAt: "2026-05-04T00:00:00+09:00",
  },
  {
    id: "racket-weight-styles",
    title: "라켓 무게별 경기 스타일 — 280g부터 320g까지",
    excerpt:
      "라켓 무게는 파워만 바꾸지 않습니다. 준비 시간, 수비 범위, 네트 플레이, 팔 부담까지 함께 달라집니다.",
    category: "장비 가이드",
    tags: ["테니스 라켓", "라켓 무게", "장비 선택", "스윙웨이트"],
    date: "2026-05-04",
    scheduledAt: "2026-05-04T05:00:00+09:00",
  },
  {
    id: "tennis-grip-replacement",
    title: "테니스 그립 교체 주기 — 미끄럼과 손목 부담 줄이기",
    excerpt:
      "그립이 낡으면 라켓을 더 세게 쥐게 되고, 그 순간 손목과 팔꿈치 부담이 커집니다. 교체 기준을 감각별로 정리했습니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립 교체", "장비 관리", "손목 통증"],
    date: "2026-05-04",
    scheduledAt: "2026-05-04T10:00:00+09:00",
  },
  {
    id: "forehand-body-balance",
    title: "포핸드 밸런스 교정 — 라켓보다 몸의 축을 먼저 보기",
    excerpt:
      "포핸드가 흔들릴 때는 팔 스윙보다 몸통 축, 체중 이동, 임팩트 뒤 회복 발이 먼저 무너지는 경우가 많습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "밸런스", "스윙 교정", "풋워크"],
    date: "2026-05-04",
    scheduledAt: "2026-05-04T15:00:00+09:00",
  },
  {
    id: "racket-care-mistakes",
    title: "라켓 관리 실수 5가지 — 성능을 떨어뜨리는 습관",
    excerpt:
      "트렁크 보관, 젖은 그립 방치, 오래된 스트링 방치처럼 사소한 습관이 라켓 수명과 타구감을 빠르게 떨어뜨립니다.",
    category: "장비 가이드",
    tags: ["라켓 관리", "스트링", "오버그립", "장비 수명"],
    date: "2026-05-04",
    scheduledAt: "2026-05-04T20:00:00+09:00",
  },
  {
    id: "string-tension-feel-guide",
    title: "스트링 텐션 감각 가이드 — 숫자보다 중요한 기준",
    excerpt:
      "텐션은 정답 숫자를 찾는 문제가 아니라 공이 머무는 시간, 팔 부담, 컨트롤 감각의 균형을 맞추는 과정입니다.",
    category: "장비 가이드",
    tags: ["스트링 텐션", "테니스 스트링", "타구감", "장비 선택"],
    date: "2026-05-05",
    scheduledAt: "2026-05-05T01:00:00+09:00",
  },
  {
    id: "common-tennis-racket-mistakes",
    title: "테니스 라켓 고를 때 흔한 실수 5가지",
    excerpt:
      "초보자가 라켓을 고를 때 가장 많이 놓치는 것은 무게보다 스윙 속도, 그립 크기, 스트링 조합과 교체 비용입니다.",
    category: "장비 가이드",
    tags: ["라켓 추천", "초보자 라켓", "그립 크기", "라켓 선택"],
    date: "2026-05-05",
    scheduledAt: "2026-05-05T06:00:00+09:00",
  },
  {
    id: "alcaraz-vs-sinner-analysis",
    title: "알카라스 vs 시너 분석 — 차세대 라이벌의 전술 차이",
    excerpt:
      "알카라스는 변주와 전환, 시너는 간결한 템포와 깊이로 경기를 지배합니다. 두 선수의 차이를 동호인 관점으로 풀었습니다.",
    category: "경기 분석",
    tags: ["알카라스", "시너", "ATP", "테니스 전술"],
    date: "2026-05-05",
    scheduledAt: "2026-05-05T11:00:00+09:00",
  },
  {
    id: "best-tennis-rackets-2024",
    title: "2024 라켓 추천을 다시 보는 법 — 2026 선택 기준",
    excerpt:
      "인기 라켓 목록보다 중요한 것은 내 스윙 속도와 팔 부담입니다. 2024 추천 모델을 2026년 기준으로 해석하는 방법입니다.",
    category: "장비 가이드",
    tags: ["테니스 라켓 추천", "라켓 리뷰", "초보자 장비", "2026 라켓"],
    date: "2026-05-05",
    scheduledAt: "2026-05-05T16:00:00+09:00",
  },
  {
    id: "tennis-elbow-prevention",
    title: "테니스 엘보 예방 — 통증 전 체크해야 할 6가지",
    excerpt:
      "엘보 통증은 갑자기 생기는 것처럼 보여도 스트링, 그립, 임팩트 지연, 회복 부족이 누적된 결과인 경우가 많습니다.",
    category: "건강 & 피트니스",
    tags: ["테니스 엘보", "팔꿈치 통증", "부상 예방", "스트레칭"],
    date: "2026-05-05",
    scheduledAt: "2026-05-05T21:00:00+09:00",
  },
  {
    id: "clay-season-preparation-korea",
    title: "클레이 시즌 준비 — 미끄러짐과 긴 랠리에 적응하기",
    excerpt:
      "클레이 코트에서는 강타보다 높이, 회전, 회복 위치가 우선입니다. 한국 동호인이 적용할 준비 루틴을 정리했습니다.",
    category: "테니스 레슨",
    tags: ["클레이 코트", "슬라이딩", "스핀", "시즌 준비"],
    date: "2026-05-06",
    scheduledAt: "2026-05-06T02:00:00+09:00",
  },
  {
    id: "doubles-positioning-common-errors",
    title: "복식 포지션 실수 — 파트너를 힘들게 하는 움직임",
    excerpt:
      "복식 실점의 상당수는 기술보다 위치 문제입니다. 전위와 후위가 언제 좁히고 벌려야 하는지 기준을 세워보세요.",
    category: "경기 분석",
    tags: ["복식", "포지션", "전위", "파트너"],
    date: "2026-05-06",
    scheduledAt: "2026-05-06T07:00:00+09:00",
  },
  {
    id: "serve-speed-without-injury",
    title: "서브 속도 올리기 — 어깨 부담 없이 힘 전달하기",
    excerpt:
      "서브 속도는 팔 힘보다 토스 위치, 하체 반동, 라켓 헤드 가속의 연결에서 나옵니다. 부상 위험을 낮추는 순서가 중요합니다.",
    category: "테니스 레슨",
    tags: ["서브", "어깨 부상", "토스", "파워"],
    date: "2026-05-06",
    scheduledAt: "2026-05-06T12:00:00+09:00",
  },
  {
    id: "weekend-tournament-checklist",
    title: "주말 테니스 대회 체크리스트 — 준비물과 경기 운영",
    excerpt:
      "대회 당일 실력만큼 중요한 것은 에너지 관리, 장비 예비, 대기 시간 루틴입니다. 실전 체크리스트로 정리했습니다.",
    category: "경기 분석",
    tags: ["테니스 대회", "체크리스트", "동호인 대회", "경기 준비"],
    date: "2026-05-06",
    scheduledAt: "2026-05-06T17:00:00+09:00",
  },
  {
    id: "tennis-ball-selection-guide-korea",
    title: "테니스공 선택 가이드 — 코트와 수준별 차이",
    excerpt:
      "테니스공은 브랜드보다 코트 표면, 압력 유지, 연습 목적에 맞춰 골라야 합니다. 동호회에서 바로 쓸 기준을 정리했습니다.",
    category: "장비 가이드",
    tags: ["테니스공", "장비 선택", "연습공", "시합구"],
    date: "2026-05-06",
    scheduledAt: "2026-05-06T22:00:00+09:00",
  },
  {
    id: "indoor-court-booking-tips",
    title: "실내 테니스장 예약 팁 — 시간대와 비용 줄이는 법",
    excerpt:
      "실내 코트는 날씨 영향을 줄여주지만 예약 경쟁이 치열합니다. 시간대, 레슨 병행, 대관 조건을 함께 확인하세요.",
    category: "지역 정보",
    tags: ["실내 테니스장", "코트 예약", "레슨", "대관"],
    date: "2026-05-07",
    scheduledAt: "2026-05-07T03:00:00+09:00",
  },
  {
    id: "beginner-match-first-win-plan",
    title: "초보 첫 승 플랜 — 화려한 샷보다 덜 무너지는 법",
    excerpt:
      "첫 승은 위너 수보다 범실 관리에서 나옵니다. 서브 인, 깊은 리턴, 안전한 코스 선택만으로 승률이 달라집니다.",
    category: "멘탈 트레이닝",
    tags: ["초보 테니스", "첫 승", "경기 운영", "범실 줄이기"],
    date: "2026-05-07",
    scheduledAt: "2026-05-07T08:00:00+09:00",
  },
  {
    id: "adult-beginner-first-racket-guide",
    title: "성인 입문 첫 라켓 가이드 — 무게·헤드·그립 기준",
    excerpt:
      "성인 입문자는 인기 모델보다 오래 다치지 않고 휘두를 수 있는 라켓을 골라야 합니다. 첫 구매 기준을 단계별로 정리했습니다.",
    category: "입문 가이드",
    tags: ["입문 라켓", "성인 테니스", "라켓 무게", "그립"],
    date: "2026-05-07",
    scheduledAt: "2026-05-07T13:00:00+09:00",
  },
  {
    id: "tennis-lesson-before-after-practice-guide",
    title: "레슨 전후 연습 가이드 — 배운 기술을 몸에 남기는 법",
    excerpt:
      "레슨은 듣는 시간이 아니라 반복 기준을 얻는 시간입니다. 전후 15분 루틴만 바꿔도 배운 기술의 잔존율이 높아집니다.",
    category: "훈련 가이드",
    tags: ["테니스 레슨", "복습", "연습 루틴", "초보자"],
    date: "2026-05-07",
    scheduledAt: "2026-05-07T18:00:00+09:00",
  },
  {
    id: "serve-routine-20-minute-guide",
    title: "20분 서브 루틴 — 토스·코스·세컨드 서브 정리",
    excerpt:
      "서브 연습은 많이 치는 것보다 같은 토스와 같은 준비 동작을 유지하는 것이 먼저입니다. 20분 루틴으로 압축했습니다.",
    category: "훈련 가이드",
    tags: ["서브 루틴", "토스", "세컨드 서브", "코스"],
    date: "2026-05-07",
    scheduledAt: "2026-05-07T23:00:00+09:00",
  },
  {
    id: "forehand-topspin-home-drill-guide",
    title: "포핸드 탑스핀 홈드릴 — 코트 밖에서 감각 만들기",
    excerpt:
      "코트 시간이 부족해도 라켓면 각도, 와이퍼 스윙, 임팩트 앞 위치는 집에서 충분히 점검할 수 있습니다.",
    category: "훈련 가이드",
    tags: ["포핸드", "탑스핀", "홈트레이닝", "스윙"],
    date: "2026-05-08",
    scheduledAt: "2026-05-08T04:00:00+09:00",
  },
  {
    id: "two-handed-backhand-stability-guide",
    title: "투핸드 백핸드 안정화 — 왼손 주도와 회전 기준",
    excerpt:
      "투핸드 백핸드는 두 손으로 미는 기술이 아니라 비주도 손과 몸통 회전이 먼저 움직이는 기술입니다.",
    category: "기술 가이드",
    tags: ["투핸드 백핸드", "백핸드", "왼손", "회전"],
    date: "2026-05-08",
    scheduledAt: "2026-05-08T09:00:00+09:00",
  },
  {
    id: "volley-touch-practice-guide",
    title: "발리 터치 연습 — 힘 빼고 각도 만드는 법",
    excerpt:
      "발리는 스윙을 크게 하는 기술이 아니라 라켓면을 빌려주는 기술입니다. 손목을 잠그고 발로 거리감을 맞추세요.",
    category: "기술 가이드",
    tags: ["발리", "네트 플레이", "터치", "복식"],
    date: "2026-05-08",
    scheduledAt: "2026-05-08T14:00:00+09:00",
  },
  {
    id: "doubles-communication-signal-guide",
    title: "복식 신호와 소통 가이드 — 포칭·스테이·스위치",
    excerpt:
      "복식은 샷보다 약속이 먼저입니다. 손 신호와 콜 기준을 정하면 파트너가 예측 가능한 움직임을 할 수 있습니다.",
    category: "전술 가이드",
    tags: ["복식 신호", "포칭", "스위치", "파트너"],
    date: "2026-05-08",
    scheduledAt: "2026-05-08T19:00:00+09:00",
  },
  {
    id: "tennis-shoe-court-surface-guide",
    title: "테니스화 선택 가이드 — 하드·클레이·올코트 차이",
    excerpt:
      "테니스화는 디자인보다 밑창 패턴과 좌우 지지력이 중요합니다. 코트 표면별 선택 기준을 정리했습니다.",
    category: "장비 가이드",
    tags: ["테니스화", "하드코트", "클레이코트", "신발 추천"],
    date: "2026-05-09",
    scheduledAt: "2026-05-09T00:00:00+09:00",
  },
  {
    id: "recovery-stretching-after-match-guide",
    title: "경기 후 회복 스트레칭 — 다음 날 몸을 지키는 순서",
    excerpt:
      "경기 후 바로 앉아 쉬면 하체와 허리가 더 굳습니다. 8분 회복 루틴으로 다음 날 통증을 줄여보세요.",
    category: "건강 & 피트니스",
    tags: ["회복", "스트레칭", "쿨다운", "부상 예방"],
    date: "2026-05-09",
    scheduledAt: "2026-05-09T05:00:00+09:00",
  },
  {
    id: "match-note-template-guide",
    title: "테니스 경기 노트 작성법 — 실력 향상이 보이는 기록",
    excerpt:
      "경기 노트는 감상문이 아니라 다음 연습 주제를 뽑는 도구입니다. 실점 패턴과 성공 패턴을 짧게 남기세요.",
    category: "훈련 가이드",
    tags: ["경기 노트", "복기", "훈련 계획", "분석"],
    date: "2026-05-09",
    scheduledAt: "2026-05-09T10:00:00+09:00",
  },
  {
    id: "return-serve-short-backswing-guide",
    title: "서브 리턴 짧은 백스윙 — 빠른 공을 막는 기준",
    excerpt:
      "강한 서브를 리턴할 때는 크게 휘두르지 말고 어깨 회전과 라켓면 각도로 깊이를 만드는 것이 우선입니다.",
    category: "기술 가이드",
    tags: ["서브 리턴", "백스윙", "리턴 위치", "반응"],
    date: "2026-05-09",
    scheduledAt: "2026-05-09T15:00:00+09:00",
  },
  {
    id: "lob-defense-transition-guide",
    title: "로브 수비 전환 가이드 — 밀릴 때 다시 중립 만들기",
    excerpt:
      "로브는 도망가는 샷이 아니라 시간을 되찾는 샷입니다. 높이, 깊이, 회복 위치를 함께 설계해야 합니다.",
    category: "전술 가이드",
    tags: ["로브", "수비", "전환", "복식"],
    date: "2026-05-09",
    scheduledAt: "2026-05-09T20:00:00+09:00",
  },
  {
    id: "drop-shot-selection-guide",
    title: "드롭샷 선택 가이드 — 성공하는 상황과 버릴 상황",
    excerpt:
      "드롭샷은 기술보다 상황 판단이 먼저입니다. 상대 위치, 내 균형, 이전 샷 깊이가 맞을 때만 선택하세요.",
    category: "전술 가이드",
    tags: ["드롭샷", "전술", "상황 판단", "터치"],
    date: "2026-05-10",
    scheduledAt: "2026-05-10T01:00:00+09:00",
  },
  {
    id: "tournament-day-food-guide",
    title: "대회 당일 식사 가이드 — 속 편한 에너지 관리",
    excerpt:
      "대회 날 식사는 특별식이 아니라 소화가 검증된 음식이어야 합니다. 경기 전후 시간대별 선택 기준을 정리했습니다.",
    category: "건강 & 피트니스",
    tags: ["대회 식사", "에너지", "수분", "동호인 대회"],
    date: "2026-05-10",
    scheduledAt: "2026-05-10T06:00:00+09:00",
  },
  {
    id: "rain-day-indoor-training-guide",
    title: "비 오는 날 실내 훈련 — 감각을 잃지 않는 30분 루틴",
    excerpt:
      "비 때문에 코트를 못 잡아도 풋워크, 라켓면, 코어 회전은 실내에서 유지할 수 있습니다. 짧고 안전한 루틴입니다.",
    category: "훈련 가이드",
    tags: ["실내 훈련", "비 오는 날", "풋워크", "라켓면"],
    date: "2026-05-10",
    scheduledAt: "2026-05-10T11:00:00+09:00",
  },
  {
    id: "string-replacement-cycle-guide",
    title: "스트링 교체 주기 가이드 — 끊어지기 전 바꿔야 할 때",
    excerpt:
      "스트링은 끊어질 때까지 쓰는 소모품이 아닙니다. 텐션 손실과 팔 부담을 기준으로 교체 시점을 정하세요.",
    category: "장비 가이드",
    tags: ["스트링 교체", "텐션", "라켓 관리", "팔 부담"],
    date: "2026-05-10",
    scheduledAt: "2026-05-10T16:00:00+09:00",
  },
  {
    id: "grip-size-check-guide",
    title: "그립 사이즈 확인법 — 손목과 팔꿈치 부담 줄이기",
    excerpt:
      "그립이 작으면 과하게 쥐고, 크면 라켓 헤드가 늦습니다. 손 크기와 스윙 감각을 함께 확인하세요.",
    category: "장비 가이드",
    tags: ["그립 사이즈", "라켓 선택", "손목", "팔꿈치"],
    date: "2026-05-10",
    scheduledAt: "2026-05-10T21:00:00+09:00",
  },
  {
    id: "slice-backhand-control-guide",
    title: "슬라이스 백핸드 컨트롤 — 낮고 길게 보내는 기준",
    excerpt:
      "슬라이스는 깎는 힘보다 라켓면 안정과 전진 이동이 중요합니다. 낮은 탄도와 깊이를 만드는 순서를 정리했습니다.",
    category: "기술 가이드",
    tags: ["슬라이스", "백핸드", "컨트롤", "수비"],
    date: "2026-05-11",
    scheduledAt: "2026-05-11T02:00:00+09:00",
  },
  {
    id: "junior-parent-tennis-guide",
    title: "주니어 테니스 부모 가이드 — 레슨보다 중요한 기준",
    excerpt:
      "주니어 테니스는 빨리 이기는 것보다 오래 즐기고 다치지 않는 구조가 먼저입니다. 부모가 봐야 할 기준을 정리했습니다.",
    category: "입문 가이드",
    tags: ["주니어 테니스", "부모 가이드", "레슨", "성장"],
    date: "2026-05-11",
    scheduledAt: "2026-05-11T07:00:00+09:00",
  },
  {
    id: "senior-tennis-injury-safe-guide",
    title: "시니어 테니스 안전 가이드 — 무리 없이 오래 치는 법",
    excerpt:
      "시니어 테니스는 강도를 낮추는 운동이 아니라 회복과 관절 부담을 계산하는 운동입니다. 오래 치는 기준을 제시합니다.",
    category: "건강 & 피트니스",
    tags: ["시니어 테니스", "부상 예방", "회복", "운동 강도"],
    date: "2026-05-11",
    scheduledAt: "2026-05-11T12:00:00+09:00",
  },
  {
    id: "tennis-club-fee-split-guide",
    title: "테니스 동호회 회비 기준 — 대관·공·게스트비 나누기",
    excerpt:
      "동호회 회비는 감으로 걷기보다 대관비, 공값, 게스트비, 환불 기준을 분리해야 불필요한 갈등을 줄일 수 있습니다.",
    category: "동호회 운영",
    tags: ["테니스 동호회", "회비", "대관비", "게스트비"],
    date: "2026-05-11",
    scheduledAt: "2026-05-11T17:20:00+09:00",
  },
  {
    id: "tennis-travel-court-finder-guide",
    title: "테니스 여행 코트 찾기 — 출장·휴가 중 예약 기준",
    excerpt:
      "출장이나 휴가 중 코트를 잡을 때는 거리보다 예약 확정성, 장비 이동, 샤워·주차, 취소 규정을 먼저 확인해야 합니다.",
    category: "여행 가이드",
    tags: ["테니스 여행", "코트 예약", "출장 테니스", "휴가 운동"],
    date: "2026-05-11",
    scheduledAt: "2026-05-11T22:35:00+09:00",
  },
  {
    id: "tennis-video-review-checklist",
    title: "테니스 영상 촬영 체크리스트 — 각도·삼각대·복습 기준",
    excerpt:
      "테니스 영상은 멋진 장면보다 반복 실수를 찾는 도구입니다. 코트 뒤 중앙 각도, 휴대폰 세팅, 10분 복습 기준까지 정리했습니다.",
    category: "훈련 가이드",
    tags: ["테니스 영상 촬영", "경기 복기", "스윙 분석", "연습 기록"],
    date: "2026-05-12",
    scheduledAt: "2026-05-12T03:45:00+09:00",
  },
  {
    id: "night-tennis-visibility-timing-guide",
    title: "야간 테니스 적응 가이드 — 조명·시야·타이밍 기준",
    excerpt:
      "야간 코트에서 공이 늦게 보일 때는 조명, 배경, 준비 타이밍을 함께 조정해야 합니다. 첫 10분 적응 루틴과 경기 운영 기준을 정리했습니다.",
    category: "훈련 가이드",
    tags: ["야간 테니스", "조명 적응", "시야 훈련", "경기 운영"],
    date: "2026-05-12",
    scheduledAt: "2026-05-12T08:55:00+09:00",
  },
  {
    id: "tennis-beginner-30day-practice-order",
    title: "테니스 입문 첫 30일 연습 순서, 지금 내 실력에 맞는 선택일까?",
    excerpt:
      "테니스 입문 첫 달은 강한 샷보다 준비 자세, 짧은 랠리, 서브 루틴, 기본 규칙을 순서대로 익히는 기간입니다.",
    category: "입문 가이드",
    tags: ["테니스 입문", "30일 연습", "초보 루틴", "테니스 기본기"],
    date: "2026-05-13",
    scheduledAt: "2026-05-13T05:10:00+09:00",
  },
  {
    id: "forehand-spin-flat-selection-guide",
    title: "포핸드 스핀과 플랫 선택 기준 단계별로 잡는 법",
    excerpt:
      "포핸드 스핀과 플랫은 기술 취향이 아니라 위치, 타점, 상대 위치, 점수 상황에 따라 고르는 선택지입니다.",
    category: "전술 가이드",
    tags: ["포핸드", "탑스핀", "플랫", "샷 선택"],
    date: "2026-05-13",
    scheduledAt: "2026-05-13T10:10:00+09:00",
  },
  {
    id: "backhand-wrist-pain-posture-beginner-intermediate",
    title: "백핸드 손목 통증 줄이는 자세, 초보와 중급자의 차이",
    excerpt:
      "백핸드 손목 통증은 손목만의 문제가 아니라 준비, 그립 압력, 타점, 회전, 연습량이 함께 만든 부담일 수 있습니다.",
    category: "건강 & 피트니스",
    tags: ["백핸드", "손목 통증", "자세 교정", "부상 예방"],
    date: "2026-05-13",
    scheduledAt: "2026-05-13T15:10:00+09:00",
  },
  {
    id: "serve-placement-over-speed-match-strategy",
    title: "서브 속도보다 중요한 코스 전략 실제 경기에서 바꿔본 결과",
    excerpt:
      "서브는 빠르기보다 목표 코스와 다음 샷이 중요합니다. 와이드, 바디, T 코스를 경기 상황별로 쓰는 기준을 정리했습니다.",
    category: "전술 가이드",
    tags: ["서브 전략", "서브 코스", "경기 운영", "테니스 전술"],
    date: "2026-05-13",
    scheduledAt: "2026-05-13T20:10:00+09:00",
  },
  {
    id: "return-split-step-timing-record-check",
    title: "리턴 스플릿 스텝 타이밍 기록으로 확인하는 방법",
    excerpt:
      "리턴 스플릿 스텝은 감보다 기록이 빠릅니다. 상대 임팩트, 착지, 첫 발, 타점을 영상과 체크표로 확인하는 방법입니다.",
    category: "훈련 가이드",
    tags: ["리턴", "스플릿 스텝", "타이밍", "경기 기록"],
    date: "2026-05-14",
    scheduledAt: "2026-05-14T01:10:00+09:00",
  },
  {
    id: "side-step-crossover-difference-2026",
    title: "2026년 기준 사이드 스텝과 크로스오버 차이",
    excerpt:
      "사이드 스텝은 작은 조정과 균형, 크로스오버는 먼 거리 이동과 빠른 복귀에 강합니다. 코트 상황별 선택 기준입니다.",
    category: "훈련 가이드",
    tags: ["풋워크", "사이드 스텝", "크로스오버", "테니스 이동"],
    date: "2026-05-14",
    scheduledAt: "2026-05-14T06:10:00+09:00",
  },
  {
    id: "doubles-partner-signs-common-mistakes",
    title: "복식 파트너와 사인 정하는 법 자주 나오는 실수",
    excerpt:
      "복식 사인은 복잡할수록 좋은 게 아닙니다. 스테이, 포치, 서브 코스, 사인 취소 기준을 단순하게 맞추는 법입니다.",
    category: "전술 가이드",
    tags: ["복식", "파트너 사인", "네트 플레이", "복식 전략"],
    date: "2026-05-13",
    scheduledAt: "2026-05-13T00:00:00+09:00",
  },
  {
    id: "match-point-pressure-routine-checklist",
    title: "매치 포인트 긴장 줄이는 루틴 전 꼭 볼 체크리스트",
    excerpt:
      "매치 포인트 긴장은 없애는 게 아니라 줄이는 것입니다. 호흡, 점수 확인, 큰 타깃, 첫 샷 루틴을 체크하세요.",
    category: "멘탈 트레이닝",
    tags: ["매치 포인트", "멘탈 루틴", "긴장 완화", "경기 운영"],
    date: "2026-05-14",
    scheduledAt: "2026-05-14T16:10:00+09:00",
  },
  {
    id: "practice-good-match-collapse-change-timing",
    title: "연습 때 잘 치고 경기에서 무너지는 이유, 언제 바꿔야 할까?",
    excerpt:
      "연습 때 잘 치는데 경기에서 무너진다면 기술보다 조건을 바꿀 때일 수 있습니다. 점수, 선택, 루틴을 점검합니다.",
    category: "멘탈 트레이닝",
    tags: ["경기 멘탈", "연습 루틴", "실전 적응", "경기력"],
    date: "2026-05-14",
    scheduledAt: "2026-05-14T21:10:00+09:00",
  },
  {
    id: "junior-racket-length-weight-monthly-check",
    title: "주니어 라켓 길이와 무게 한 달 점검 노트",
    excerpt:
      "주니어 라켓은 나이표만으로 고르기 어렵습니다. 키, 스윙, 회복, 통증 신호를 한 달 단위로 점검하세요.",
    category: "장비 가이드",
    tags: ["주니어 라켓", "라켓 길이", "라켓 무게", "주니어 테니스"],
    date: "2026-05-15",
    scheduledAt: "2026-05-15T02:10:00+09:00",
  },
  {
    id: "tennis-elbow-string-choice-traps",
    title: "엘보가 걱정될 때 스트링 선택 할 때 조심할 함정",
    excerpt:
      "테니스 엘보가 걱정된다면 딱딱한 폴리, 높은 텐션, 오래 된 스트링, 과한 연습량을 함께 점검해야 합니다.",
    category: "건강 & 피트니스",
    tags: ["테니스 엘보", "스트링 선택", "팔꿈치 통증", "장비 가이드"],
    date: "2026-05-15",
    scheduledAt: "2026-05-15T07:10:00+09:00",
  },
  {
    id: "knee-friendly-tennis-shoe-selection",
    title: "무릎 부담 줄이는 신발 선택, 지금 내 실력에 맞는 선택일까?",
    excerpt:
      "무릎 부담을 줄이려면 쿠션만 보지 말고 코트 표면, 좌우 지지력, 밑창 마모, 내 스텝 습관을 함께 봐야 합니다.",
    category: "장비 가이드",
    tags: ["테니스화", "무릎 부담", "코트 표면", "부상 예방"],
    date: "2026-05-15",
    scheduledAt: "2026-05-15T12:10:00+09:00",
  },
  {
    id: "shoulder-friendly-serve-prep-five-checks",
    title: "어깨 부담 적은 서브 준비 핵심 기준 5가지",
    excerpt:
      "어깨 부담이 적은 서브는 강한 팔 스윙보다 토스 위치, 몸통 회전, 워밍업, 연습량 조절에서 시작합니다.",
    category: "건강 & 피트니스",
    tags: ["서브", "어깨 부담", "워밍업", "부상 예방"],
    date: "2026-05-15",
    scheduledAt: "2026-05-15T17:10:00+09:00",
  },
  {
    id: "summer-tennis-overheat-management",
    title: "여름 테니스 오버히트 관리 단계별로 잡는 법",
    excerpt:
      "여름 테니스는 더 버티는 운동이 아니라 경기 전 수분, 중간 냉각, 증상 기준, 중단 판단을 미리 정하는 운동입니다.",
    category: "건강 & 피트니스",
    tags: ["여름 테니스", "수분 보충", "열질환 예방", "컨디션 관리"],
    date: "2026-05-15",
    scheduledAt: "2026-05-15T22:10:00+09:00",
  },
  {
    id: "public-tennis-court-reservation-time-comparison",
    title: "공공 테니스장 예약 시간 비교, 초보와 중급자의 차이",
    excerpt:
      "공공 테니스장 예약은 시간대만 빠르게 누르는 문제가 아니라 지역 시스템, 취소표, 조명, 이동 시간을 함께 계산해야 합니다.",
    category: "지역 정보",
    tags: ["공공 테니스장", "코트 예약", "서울 테니스", "대관 팁"],
    date: "2026-05-16",
    scheduledAt: "2026-05-16T03:10:00+09:00",
  },
  {
    id: "first-club-tournament-packing-lessons",
    title: "첫 동호회 대회 준비물 실제 경기에서 바꿔본 결과",
    excerpt:
      "첫 동호회 대회 준비물은 많이 챙기는 것이 아니라 대기 시간, 땀, 공백 경기, 긴장 상황을 기준으로 골라야 합니다.",
    category: "동호회 운영",
    tags: ["동호회 대회", "준비물", "첫 대회", "경기 운영"],
    date: "2026-05-16",
    scheduledAt: "2026-05-16T08:10:00+09:00",
  },
];

const scheduledPostSeedsPart2 = [
  {
    id: "tennis-beginner-serve-toss-check",
    title: "테니스 초보 서브 토스가 흔들릴 때 확인할 5가지 기준",
    excerpt:
      "서브 토스가 뒤로 빠지거나 너무 앞에 떨어질 때는 손목보다 시작 위치, 공을 놓는 높이, 리듬, 시선, 첫 스윙 강도를 먼저 점검해야 합니다.",
    category: "입문 가이드",
    tags: ["서브", "토스", "테니스 입문", "기초 교정"],
    date: "2026-05-16",
    scheduledAt: "2026-05-16T13:10:00+09:00",
  },
  {
    id: "weeknight-tennis-energy-control",
    title: "퇴근 후 야간 테니스 체력 배분법, 첫 세트부터 무너지지 않는 루틴",
    excerpt:
      "야간 테니스는 하루 피로가 남은 상태에서 시작하기 때문에 준비운동, 첫 랠리 강도, 수분 보충, 귀가 후 회복까지 한 번에 설계해야 합니다.",
    category: "건강 & 피트니스",
    tags: ["야간 테니스", "체력 관리", "회복", "동호회"],
    date: "2026-05-16",
    scheduledAt: "2026-05-16T18:10:00+09:00",
  },
  {
    id: "forehand-contact-point-late-fix",
    title: "포핸드 타점이 계속 늦을 때, 스윙보다 먼저 바꿀 준비 동작",
    excerpt:
      "포핸드 타점이 늦는 문제는 팔이 느린 것보다 스플릿 스텝, 유닛턴, 첫 발, 라켓 준비 높이가 늦어서 생기는 경우가 많습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "타점", "스윙 교정", "풋워크"],
    date: "2026-05-16",
    scheduledAt: "2026-05-16T23:10:00+09:00",
  },
  {
    id: "backhand-slice-depth-control",
    title: "백핸드 슬라이스가 짧아질 때 깊이와 낮은 탄도를 함께 잡는 법",
    excerpt:
      "슬라이스 백핸드는 깎는 느낌보다 라켓면 유지, 앞발 고정, 목표 높이, 팔로스루 방향이 깊이를 결정합니다.",
    category: "전술 가이드",
    tags: ["백핸드", "슬라이스", "컨트롤", "수비 전환"],
    date: "2026-05-17",
    scheduledAt: "2026-05-17T04:10:00+09:00",
  },
  {
    id: "doubles-net-player-positioning",
    title: "복식 네트 플레이어 위치 선정, 공을 안 쳐도 점수를 돕는 방법",
    excerpt:
      "복식에서 네트 플레이어는 발리 성공보다 상대 시야를 줄이고 리턴 코스를 압박하는 위치 선정이 먼저입니다.",
    category: "복식 운영",
    tags: ["복식", "네트 플레이", "포지션", "발리"],
    date: "2026-05-17",
    scheduledAt: "2026-05-17T09:10:00+09:00",
  },
  {
    id: "tennis-racket-balance-head-light-guide",
    title: "라켓 밸런스 헤드라이트와 헤드헤비 차이, 체감 기준으로 고르기",
    excerpt:
      "라켓 밸런스는 숫자보다 준비 속도, 발리 반응, 서브 무게감, 긴 랠리 피로도에서 차이가 드러납니다.",
    category: "장비 가이드",
    tags: ["라켓", "밸런스", "헤드라이트", "장비 선택"],
    date: "2026-05-17",
    scheduledAt: "2026-05-17T14:10:00+09:00",
  },
  {
    id: "tennis-elbow-early-warning-signs",
    title: "테니스 엘보 초기 신호, 통증이 커지기 전 멈춰야 할 순간",
    excerpt:
      "팔꿈치 통증은 강한 한 번보다 반복된 작은 부담에서 커집니다. 그립 압력, 스트링 상태, 휴식 기준을 함께 점검해야 합니다.",
    category: "건강 & 피트니스",
    tags: ["테니스 엘보", "팔꿈치", "부상 예방", "장비 점검"],
    date: "2026-05-17",
    scheduledAt: "2026-05-17T19:10:00+09:00",
  },
  {
    id: "tennis-match-warmup-five-minutes",
    title: "경기 전 5분 워밍업, 몸을 데우면서 상대를 읽는 순서",
    excerpt:
      "짧은 워밍업에서는 강하게 치는 것보다 발 움직임, 상대 백핸드 안정성, 네트 감각, 서브 리듬을 동시에 확인해야 합니다.",
    category: "경기 분석",
    tags: ["워밍업", "경기 운영", "상대 분석", "루틴"],
    date: "2026-05-18",
    scheduledAt: "2026-05-18T00:10:00+09:00",
  },
  {
    id: "serve-return-body-serve-plan",
    title: "바디 서브 리턴 대처법, 막히는 공을 중립으로 돌리는 기준",
    excerpt:
      "몸쪽 서브는 큰 백스윙으로 해결하기 어렵습니다. 짧은 준비, 몸 회전, 목표 깊이, 리턴 후 첫 발이 핵심입니다.",
    category: "전술 가이드",
    tags: ["리턴", "바디 서브", "서브 리턴", "경기 전략"],
    date: "2026-05-18",
    scheduledAt: "2026-05-18T05:10:00+09:00",
  },
  {
    id: "tennis-first-rally-goal-beginner",
    title: "초보 첫 랠리 목표, 예쁜 폼보다 공을 이어가는 기준",
    excerpt:
      "입문자는 강한 공보다 같은 높이와 같은 깊이를 반복하는 능력이 먼저입니다. 첫 랠리 목표를 낮추면 실력이 더 빨리 쌓입니다.",
    category: "입문 가이드",
    tags: ["테니스 초보", "랠리", "입문", "기초 연습"],
    date: "2026-05-18",
    scheduledAt: "2026-05-18T10:10:00+09:00",
  },
  {
    id: "clay-court-footwork-basic",
    title: "클레이 코트 풋워크 기본, 미끄러짐을 겁내지 않는 적응법",
    excerpt:
      "클레이에서는 멈추는 방식과 회복 스텝이 하드코트와 다릅니다. 작은 스텝, 균형, 공 뒤 공간 확보가 먼저입니다.",
    category: "전술 가이드",
    tags: ["클레이코트", "풋워크", "코트 적응", "밸런스"],
    date: "2026-05-18",
    scheduledAt: "2026-05-18T15:10:00+09:00",
  },
  {
    id: "hard-court-shoe-wear-pattern",
    title: "하드코트 테니스화 마모 패턴으로 보는 발 움직임 문제",
    excerpt:
      "테니스화 밑창은 발이 어떻게 멈추고 밀어내는지 보여줍니다. 바깥쪽 마모, 앞꿈치 마모, 뒤꿈치 마모를 구분해 봅니다.",
    category: "장비 가이드",
    tags: ["테니스화", "하드코트", "마모", "풋워크"],
    date: "2026-05-18",
    scheduledAt: "2026-05-18T20:10:00+09:00",
  },
  {
    id: "tennis-practice-journal-template",
    title: "테니스 연습일지 템플릿, 잘 친 날보다 배운 날을 남기는 법",
    excerpt:
      "연습일지는 감상이 아니라 반복 가능한 기준을 남기는 도구입니다. 오늘의 목표, 흔들린 패턴, 다음 연습 과제를 짧게 기록합니다.",
    category: "훈련 가이드",
    tags: ["연습일지", "훈련 계획", "기록", "실력 향상"],
    date: "2026-05-19",
    scheduledAt: "2026-05-19T01:10:00+09:00",
  },
  {
    id: "tennis-lob-when-to-use",
    title: "로브를 써야 하는 순간과 버려야 하는 순간, 복식 기준으로 정리",
    excerpt:
      "로브는 도망가는 공이 아니라 상대 전진을 흔드는 선택지입니다. 위치, 상대 발리 수준, 바람, 코트 여백을 보고 써야 합니다.",
    category: "복식 운영",
    tags: ["로브", "복식", "전술", "수비 전환"],
    date: "2026-05-19",
    scheduledAt: "2026-05-19T06:10:00+09:00",
  },
  {
    id: "tennis-drop-shot-beginner-risk",
    title: "드롭샷을 초보가 자주 실패하는 이유, 기술보다 상황 판단이 먼저",
    excerpt:
      "드롭샷은 손목 감각보다 상대 위치와 내 균형이 먼저입니다. 불리한 자세에서 쓰면 멋진 샷이 아니라 실점이 됩니다.",
    category: "전술 가이드",
    tags: ["드롭샷", "상황 판단", "전술", "초보 실수"],
    date: "2026-05-19",
    scheduledAt: "2026-05-19T11:10:00+09:00",
  },
  {
    id: "tennis-string-dead-feel-check",
    title: "스트링이 죽었다는 느낌, 끊어지기 전 알아차리는 체크포인트",
    excerpt:
      "스트링 교체 시점은 끊어짐만으로 판단하지 않습니다. 공이 날림, 컨트롤 저하, 타구음 변화, 팔 부담을 함께 봅니다.",
    category: "장비 가이드",
    tags: ["스트링", "텐션", "라켓 관리", "장비 점검"],
    date: "2026-05-19",
    scheduledAt: "2026-05-19T16:10:00+09:00",
  },
  {
    id: "tennis-grip-pressure-relax",
    title: "그립을 너무 세게 잡는 습관, 힘을 빼도 공이 밀리지 않게 하는 법",
    excerpt:
      "그립 압력이 높으면 손목과 팔꿈치 부담이 커지고 라켓 헤드가 늦어집니다. 준비 단계와 임팩트 순간을 나눠 조절합니다.",
    category: "테니스 레슨",
    tags: ["그립", "손목", "힘 빼기", "스윙 교정"],
    date: "2026-05-19",
    scheduledAt: "2026-05-19T21:10:00+09:00",
  },
  {
    id: "tennis-serve-second-safe-target",
    title: "세컨드 서브 안전 코스, 더 약하게 치지 않고 확률 올리는 방법",
    excerpt:
      "세컨드 서브는 속도를 빼는 샷이 아니라 회전과 목표 지점을 분명히 하는 샷입니다. 안전 코스와 루틴을 정해야 합니다.",
    category: "전술 가이드",
    tags: ["세컨드 서브", "서브", "코스", "경기 운영"],
    date: "2026-05-20",
    scheduledAt: "2026-05-20T02:10:00+09:00",
  },
  {
    id: "tennis-rally-depth-two-meter-rule",
    title: "랠리 깊이를 안정시키는 2미터 규칙, 세게 치기 전 맞춰야 할 목표",
    excerpt:
      "랠리에서 깊이가 들쭉날쭉하면 힘보다 목표 구역이 흐린 경우가 많습니다. 베이스라인 안쪽 2미터를 기준으로 연습합니다.",
    category: "훈련 가이드",
    tags: ["랠리", "깊이", "훈련", "컨트롤"],
    date: "2026-05-20",
    scheduledAt: "2026-05-20T07:10:00+09:00",
  },
  {
    id: "tennis-volley-ready-position",
    title: "발리 준비 자세가 늦을 때, 라켓보다 발을 먼저 멈추는 이유",
    excerpt:
      "발리는 손 기술처럼 보이지만 늦는 문제는 대부분 몸이 아직 움직이는 상태에서 맞기 때문에 생깁니다.",
    category: "테니스 레슨",
    tags: ["발리", "네트 플레이", "준비 자세", "복식"],
    date: "2026-05-20",
    scheduledAt: "2026-05-20T12:10:00+09:00",
  },
  {
    id: "tennis-singles-court-position-recovery",
    title: "단식 코트 포지션 회복, 좋은 샷 치고도 다음 공에 늦는 이유",
    excerpt:
      "단식에서는 샷의 품질만큼 회복 위치가 중요합니다. 크로스, 다운더라인, 짧은 공 이후 돌아갈 위치가 달라집니다.",
    category: "전술 가이드",
    tags: ["단식", "코트 포지션", "회복", "전술"],
    date: "2026-05-20",
    scheduledAt: "2026-05-20T17:10:00+09:00",
  },
  {
    id: "tennis-doubles-serve-plus-one",
    title: "복식 서브 플러스 원, 첫 발리까지 미리 정하는 경기 운영",
    excerpt:
      "복식 서브 게임은 서브 하나로 끝나지 않습니다. 파트너 위치, 리턴 예상, 첫 발리 목표를 같이 정해야 합니다.",
    category: "복식 운영",
    tags: ["복식", "서브 게임", "발리", "파트너"],
    date: "2026-05-20",
    scheduledAt: "2026-05-20T22:10:00+09:00",
  },
  {
    id: "tennis-tournament-night-before",
    title: "동호회 대회 전날 체크리스트, 새 장비보다 컨디션을 지키는 법",
    excerpt:
      "대회 전날에는 새로운 시도보다 장비 확인, 수면, 식사, 이동 시간, 첫 경기 루틴을 고정하는 것이 더 중요합니다.",
    category: "동호회 운영",
    tags: ["동호회 대회", "준비물", "컨디션", "체크리스트"],
    date: "2026-05-21",
    scheduledAt: "2026-05-21T03:10:00+09:00",
  },
  {
    id: "tennis-hydration-before-cramp",
    title: "쥐 나기 전 수분 보충법, 물만 많이 마시면 부족한 이유",
    excerpt:
      "테니스 중 경련은 수분만의 문제가 아닙니다. 땀, 경기 시간, 염분, 휴식 간격을 함께 관리해야 합니다.",
    category: "건강 & 피트니스",
    tags: ["수분 보충", "경련", "여름 테니스", "컨디션"],
    date: "2026-05-21",
    scheduledAt: "2026-05-21T08:10:00+09:00",
  },
  {
    id: "tennis-shoulder-serve-volume",
    title: "어깨가 무거운 날 서브 연습량 조절, 몇 개를 치느냐보다 중요한 기준",
    excerpt:
      "서브 연습은 개수보다 피로 신호를 기준으로 멈춰야 합니다. 토스 흔들림, 팔로스루 짧아짐, 통증 위치를 기록합니다.",
    category: "건강 & 피트니스",
    tags: ["어깨", "서브", "훈련량", "부상 예방"],
    date: "2026-05-21",
    scheduledAt: "2026-05-21T13:10:00+09:00",
  },
  {
    id: "tennis-beginner-lesson-review",
    title: "레슨 받고 바로 까먹는 초보를 위한 복습 순서",
    excerpt:
      "레슨 복습은 배운 동작 전체를 다시 하는 것이 아니라 코치가 가장 많이 말한 한 문장을 다음 연습 목표로 바꾸는 일입니다.",
    category: "입문 가이드",
    tags: ["레슨", "초보", "복습", "훈련 루틴"],
    date: "2026-05-21",
    scheduledAt: "2026-05-21T18:10:00+09:00",
  },
  {
    id: "tennis-high-ball-forehand",
    title: "높게 튀는 공 포핸드 처리, 내려올 때까지 기다리면 늦는 이유",
    excerpt:
      "높은 공은 힘으로 누르기보다 위치를 먼저 잡아야 합니다. 라이징, 어깨 높이, 뒤로 물러나는 선택을 구분합니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "높은 공", "라이징", "타점"],
    date: "2026-05-21",
    scheduledAt: "2026-05-21T23:10:00+09:00",
  },
  {
    id: "tennis-windy-day-adjustment",
    title: "바람 부는 날 테니스 운영법, 평소 샷을 고집하면 흔들리는 이유",
    excerpt:
      "바람이 강한 날에는 목표 높이, 스핀량, 서브 토스, 로브 선택이 달라져야 합니다. 환경에 맞춰 실수를 줄입니다.",
    category: "경기 분석",
    tags: ["바람", "경기 운영", "코트 환경", "전술"],
    date: "2026-05-22",
    scheduledAt: "2026-05-22T04:10:00+09:00",
  },
  {
    id: "tennis-rain-delay-routine",
    title: "비 예보 있는 날 테니스 일정 조정, 취소와 대체훈련 기준",
    excerpt:
      "비 오는 날에는 코트 상태, 이동 시간, 미끄러짐 위험, 실내 대체훈련을 함께 판단해야 합니다.",
    category: "동호회 운영",
    tags: ["비 예보", "일정 조정", "실내 훈련", "코트 관리"],
    date: "2026-05-22",
    scheduledAt: "2026-05-22T09:10:00+09:00",
  },
  {
    id: "tennis-camera-angle-practice",
    title: "테니스 영상 촬영 각도, 폼보다 타점과 발을 보이게 찍는 법",
    excerpt:
      "영상 복습은 예쁜 장면을 남기는 일이 아닙니다. 베이스라인 뒤, 측면, 대각선 각도별로 확인할 문제가 다릅니다.",
    category: "훈련 가이드",
    tags: ["영상 촬영", "복습", "스윙 분석", "훈련"],
    date: "2026-05-22",
    scheduledAt: "2026-05-22T14:10:00+09:00",
  },
  {
    id: "tennis-footwork-split-step-audio",
    title: "스플릿 스텝 타이밍을 소리로 맞추는 연습법",
    excerpt:
      "상대 임팩트 순간에 맞춰 착지하는 감각은 눈보다 소리로 잡으면 더 쉬워집니다. 짧은 리듬 훈련으로 반응을 바꿉니다.",
    category: "훈련 가이드",
    tags: ["스플릿 스텝", "풋워크", "반응", "훈련"],
    date: "2026-05-22",
    scheduledAt: "2026-05-22T19:10:00+09:00",
  },
  {
    id: "tennis-lefty-opponent-pattern",
    title: "왼손잡이 상대를 만났을 때 리턴과 랠리 패턴 바꾸는 법",
    excerpt:
      "왼손잡이 상대는 서브 회전과 포핸드 위치가 다릅니다. 익숙한 방향만 고집하면 첫 게임부터 늦어집니다.",
    category: "경기 분석",
    tags: ["왼손잡이", "상대 분석", "리턴", "전술"],
    date: "2026-05-23",
    scheduledAt: "2026-05-23T00:10:00+09:00",
  },
  {
    id: "tennis-moonball-response",
    title: "문볼 상대 대처법, 조급하게 때리지 않고 압박하는 순서",
    excerpt:
      "높고 느린 공이 반복되면 성급한 공격보다 위치 선점과 깊이 유지가 먼저입니다. 네트 전진 타이밍을 정해야 합니다.",
    category: "전술 가이드",
    tags: ["문볼", "전술", "랠리", "멘탈"],
    date: "2026-05-23",
    scheduledAt: "2026-05-23T05:10:00+09:00",
  },
  {
    id: "tennis-approach-shot-target",
    title: "어프로치 샷 목표 지점, 네트로 나가도 쉽게 뚫리는 이유",
    excerpt:
      "어프로치는 강한 공보다 상대를 움직이게 하는 깊이와 방향이 중요합니다. 들어가는 발과 다음 발리를 같이 봅니다.",
    category: "전술 가이드",
    tags: ["어프로치", "네트 플레이", "전술", "발리"],
    date: "2026-05-23",
    scheduledAt: "2026-05-23T10:10:00+09:00",
  },
  {
    id: "tennis-overgrip-sweaty-hands",
    title: "손에 땀이 많은 사람의 오버그립 선택, 미끄럼을 줄이는 기준",
    excerpt:
      "오버그립은 색보다 흡습력, 두께, 교체 주기, 경기 중 예비 그립 준비가 중요합니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "장비 관리", "여름 테니스"],
    date: "2026-05-23",
    scheduledAt: "2026-05-23T15:10:00+09:00",
  },
  {
    id: "tennis-bag-match-day-setup",
    title: "테니스 가방 경기일 세팅, 자주 빠뜨리는 준비물과 배치법",
    excerpt:
      "경기일 가방은 많이 넣는 것보다 바로 꺼낼 수 있게 나누는 것이 중요합니다. 라켓, 물, 그립, 응급용품을 구역별로 둡니다.",
    category: "동호회 운영",
    tags: ["테니스 가방", "준비물", "대회", "동호회"],
    date: "2026-05-23",
    scheduledAt: "2026-05-23T20:10:00+09:00",
  },
  {
    id: "tennis-partner-communication-after-error",
    title: "복식 파트너가 실수했을 때 분위기를 살리는 말과 피해야 할 말",
    excerpt:
      "복식 커뮤니케이션은 조언보다 안정감이 먼저입니다. 실점 직후 말 한마디가 다음 포인트 선택을 바꿉니다.",
    category: "복식 운영",
    tags: ["복식", "파트너", "멘탈", "커뮤니케이션"],
    date: "2026-05-24",
    scheduledAt: "2026-05-24T01:10:00+09:00",
  },
  {
    id: "tennis-tiebreak-first-four-points",
    title: "타이브레이크 첫 4포인트 운영, 공격보다 실수 관리가 먼저인 이유",
    excerpt:
      "타이브레이크는 흐름이 빠르게 바뀝니다. 첫 4포인트에서 서브 코스, 리턴 깊이, 무리한 위너 시도를 관리해야 합니다.",
    category: "경기 분석",
    tags: ["타이브레이크", "경기 운영", "멘탈", "전술"],
    date: "2026-05-24",
    scheduledAt: "2026-05-24T06:10:00+09:00",
  },
  {
    id: "tennis-cooldown-after-night-match",
    title: "야간 경기 후 쿨다운 루틴, 다음 날 몸이 무겁지 않게 정리하기",
    excerpt:
      "밤 경기 후 바로 앉거나 씻고 끝내면 다음 날 피로가 크게 남습니다. 짧은 걷기, 수분, 종아리와 엉덩이 정리가 필요합니다.",
    category: "건강 & 피트니스",
    tags: ["쿨다운", "야간 테니스", "회복", "스트레칭"],
    date: "2026-05-24",
    scheduledAt: "2026-05-24T11:10:00+09:00",
  },
  {
    id: "tennis-next-racket-upgrade-timing",
    title: "다음 라켓으로 바꿀 타이밍, 실력 부족과 장비 한계를 구분하는 법",
    excerpt:
      "라켓 교체는 기분 전환보다 반복되는 불편함과 플레이 변화가 기준입니다. 무게, 밸런스, 스트링 조합을 함께 봅니다.",
    category: "장비 가이드",
    tags: ["라켓 교체", "장비 선택", "밸런스", "스트링"],
    date: "2026-05-24",
    scheduledAt: "2026-05-24T16:10:00+09:00",
  },
];

const scheduledPostSeedsPart3 = [
  {
    id: "tennis-serve-toss-control-beginner-checklist",
    title: "서브 토스 안정화: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "서브 토스 안정화 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["서브", "토스", "입문", "루틴", "초보가"],
  },
  {
    id: "tennis-serve-toss-control-common-mistakes",
    title: "서브 토스 안정화: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "서브 토스 안정화 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["서브", "토스", "입문", "루틴", "자주"],
  },
  {
    id: "tennis-serve-toss-control-practice-routine",
    title: "서브 토스 안정화: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "서브 토스 안정화 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["서브", "토스", "입문", "루틴", "20분"],
  },
  {
    id: "tennis-serve-toss-control-match-application",
    title: "서브 토스 안정화: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "서브 토스 안정화 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["서브", "토스", "입문", "루틴", "실제"],
  },
  {
    id: "tennis-serve-toss-control-comparison-guide",
    title: "서브 토스 안정화: 초보와 중급자의 기준 차이",
    excerpt:
      "서브 토스 안정화 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["서브", "토스", "입문", "루틴", "초보와"],
  },
  {
    id: "tennis-serve-toss-control-record-metrics",
    title: "서브 토스 안정화: 기록으로 확인하는 성장 지표",
    excerpt:
      "서브 토스 안정화 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["서브", "토스", "입문", "루틴", "기록으로"],
  },
  {
    id: "tennis-serve-toss-control-partner-drill",
    title: "서브 토스 안정화: 파트너와 같이 하는 연습법",
    excerpt:
      "서브 토스 안정화 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["서브", "토스", "입문", "루틴", "파트너와"],
  },
  {
    id: "tennis-serve-toss-control-equipment-setup",
    title: "서브 토스 안정화: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "서브 토스 안정화 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["서브", "토스", "입문", "루틴", "장비"],
  },
  {
    id: "tennis-serve-toss-control-pressure-situation",
    title: "서브 토스 안정화: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "서브 토스 안정화 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["서브", "토스", "입문", "루틴", "긴장되는"],
  },
  {
    id: "tennis-serve-toss-control-monthly-review",
    title: "서브 토스 안정화: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "서브 토스 안정화 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["서브", "토스", "입문", "루틴", "한"],
  },
  {
    id: "tennis-second-serve-spin-beginner-checklist",
    title: "세컨드 서브 회전: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "세컨드 서브 회전 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["세컨드 서브", "회전", "서브", "경기 운영", "초보가"],
  },
  {
    id: "tennis-second-serve-spin-common-mistakes",
    title: "세컨드 서브 회전: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "세컨드 서브 회전 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["세컨드 서브", "회전", "서브", "경기 운영", "자주"],
  },
  {
    id: "tennis-second-serve-spin-practice-routine",
    title: "세컨드 서브 회전: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "세컨드 서브 회전 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["세컨드 서브", "회전", "서브", "경기 운영", "20분"],
  },
  {
    id: "tennis-second-serve-spin-match-application",
    title: "세컨드 서브 회전: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "세컨드 서브 회전 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["세컨드 서브", "회전", "서브", "경기 운영", "실제"],
  },
  {
    id: "tennis-second-serve-spin-comparison-guide",
    title: "세컨드 서브 회전: 초보와 중급자의 기준 차이",
    excerpt:
      "세컨드 서브 회전 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["세컨드 서브", "회전", "서브", "경기 운영", "초보와"],
  },
  {
    id: "tennis-second-serve-spin-record-metrics",
    title: "세컨드 서브 회전: 기록으로 확인하는 성장 지표",
    excerpt:
      "세컨드 서브 회전 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["세컨드 서브", "회전", "서브", "경기 운영", "기록으로"],
  },
  {
    id: "tennis-second-serve-spin-partner-drill",
    title: "세컨드 서브 회전: 파트너와 같이 하는 연습법",
    excerpt:
      "세컨드 서브 회전 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["세컨드 서브", "회전", "서브", "경기 운영", "파트너와"],
  },
  {
    id: "tennis-second-serve-spin-equipment-setup",
    title: "세컨드 서브 회전: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "세컨드 서브 회전 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["세컨드 서브", "회전", "서브", "경기 운영", "장비"],
  },
  {
    id: "tennis-second-serve-spin-pressure-situation",
    title: "세컨드 서브 회전: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "세컨드 서브 회전 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["세컨드 서브", "회전", "서브", "경기 운영", "긴장되는"],
  },
  {
    id: "tennis-second-serve-spin-monthly-review",
    title: "세컨드 서브 회전: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "세컨드 서브 회전 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["세컨드 서브", "회전", "서브", "경기 운영", "한"],
  },
  {
    id: "tennis-forehand-depth-control-beginner-checklist",
    title: "포핸드 깊이 조절: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "포핸드 깊이 조절 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "깊이", "컨트롤", "랠리", "초보가"],
  },
  {
    id: "tennis-forehand-depth-control-common-mistakes",
    title: "포핸드 깊이 조절: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "포핸드 깊이 조절 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "깊이", "컨트롤", "랠리", "자주"],
  },
  {
    id: "tennis-forehand-depth-control-practice-routine",
    title: "포핸드 깊이 조절: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "포핸드 깊이 조절 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "깊이", "컨트롤", "랠리", "20분"],
  },
  {
    id: "tennis-forehand-depth-control-match-application",
    title: "포핸드 깊이 조절: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "포핸드 깊이 조절 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "깊이", "컨트롤", "랠리", "실제"],
  },
  {
    id: "tennis-forehand-depth-control-comparison-guide",
    title: "포핸드 깊이 조절: 초보와 중급자의 기준 차이",
    excerpt:
      "포핸드 깊이 조절 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "깊이", "컨트롤", "랠리", "초보와"],
  },
  {
    id: "tennis-forehand-depth-control-record-metrics",
    title: "포핸드 깊이 조절: 기록으로 확인하는 성장 지표",
    excerpt:
      "포핸드 깊이 조절 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "깊이", "컨트롤", "랠리", "기록으로"],
  },
  {
    id: "tennis-forehand-depth-control-partner-drill",
    title: "포핸드 깊이 조절: 파트너와 같이 하는 연습법",
    excerpt:
      "포핸드 깊이 조절 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "깊이", "컨트롤", "랠리", "파트너와"],
  },
  {
    id: "tennis-forehand-depth-control-equipment-setup",
    title: "포핸드 깊이 조절: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "포핸드 깊이 조절 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "깊이", "컨트롤", "랠리", "장비"],
  },
  {
    id: "tennis-forehand-depth-control-pressure-situation",
    title: "포핸드 깊이 조절: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "포핸드 깊이 조절 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "깊이", "컨트롤", "랠리", "긴장되는"],
  },
  {
    id: "tennis-forehand-depth-control-monthly-review",
    title: "포핸드 깊이 조절: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "포핸드 깊이 조절 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["포핸드", "깊이", "컨트롤", "랠리", "한"],
  },
  {
    id: "tennis-backhand-defense-switch-beginner-checklist",
    title: "백핸드 수비 전환: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "백핸드 수비 전환 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["백핸드", "수비", "전환", "슬라이스", "초보가"],
  },
  {
    id: "tennis-backhand-defense-switch-common-mistakes",
    title: "백핸드 수비 전환: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "백핸드 수비 전환 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["백핸드", "수비", "전환", "슬라이스", "자주"],
  },
  {
    id: "tennis-backhand-defense-switch-practice-routine",
    title: "백핸드 수비 전환: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "백핸드 수비 전환 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["백핸드", "수비", "전환", "슬라이스", "20분"],
  },
  {
    id: "tennis-backhand-defense-switch-match-application",
    title: "백핸드 수비 전환: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "백핸드 수비 전환 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["백핸드", "수비", "전환", "슬라이스", "실제"],
  },
  {
    id: "tennis-backhand-defense-switch-comparison-guide",
    title: "백핸드 수비 전환: 초보와 중급자의 기준 차이",
    excerpt:
      "백핸드 수비 전환 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["백핸드", "수비", "전환", "슬라이스", "초보와"],
  },
  {
    id: "tennis-backhand-defense-switch-record-metrics",
    title: "백핸드 수비 전환: 기록으로 확인하는 성장 지표",
    excerpt:
      "백핸드 수비 전환 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["백핸드", "수비", "전환", "슬라이스", "기록으로"],
  },
  {
    id: "tennis-backhand-defense-switch-partner-drill",
    title: "백핸드 수비 전환: 파트너와 같이 하는 연습법",
    excerpt:
      "백핸드 수비 전환 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["백핸드", "수비", "전환", "슬라이스", "파트너와"],
  },
  {
    id: "tennis-backhand-defense-switch-equipment-setup",
    title: "백핸드 수비 전환: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "백핸드 수비 전환 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["백핸드", "수비", "전환", "슬라이스", "장비"],
  },
  {
    id: "tennis-backhand-defense-switch-pressure-situation",
    title: "백핸드 수비 전환: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "백핸드 수비 전환 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["백핸드", "수비", "전환", "슬라이스", "긴장되는"],
  },
  {
    id: "tennis-backhand-defense-switch-monthly-review",
    title: "백핸드 수비 전환: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "백핸드 수비 전환 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["백핸드", "수비", "전환", "슬라이스", "한"],
  },
  {
    id: "tennis-volley-first-step-beginner-checklist",
    title: "발리 첫 발: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "발리 첫 발 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["발리", "첫 발", "네트 플레이", "복식", "초보가"],
  },
  {
    id: "tennis-volley-first-step-common-mistakes",
    title: "발리 첫 발: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "발리 첫 발 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["발리", "첫 발", "네트 플레이", "복식", "자주"],
  },
  {
    id: "tennis-volley-first-step-practice-routine",
    title: "발리 첫 발: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "발리 첫 발 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["발리", "첫 발", "네트 플레이", "복식", "20분"],
  },
  {
    id: "tennis-volley-first-step-match-application",
    title: "발리 첫 발: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "발리 첫 발 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["발리", "첫 발", "네트 플레이", "복식", "실제"],
  },
  {
    id: "tennis-volley-first-step-comparison-guide",
    title: "발리 첫 발: 초보와 중급자의 기준 차이",
    excerpt:
      "발리 첫 발 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["발리", "첫 발", "네트 플레이", "복식", "초보와"],
  },
  {
    id: "tennis-volley-first-step-record-metrics",
    title: "발리 첫 발: 기록으로 확인하는 성장 지표",
    excerpt:
      "발리 첫 발 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["발리", "첫 발", "네트 플레이", "복식", "기록으로"],
  },
  {
    id: "tennis-volley-first-step-partner-drill",
    title: "발리 첫 발: 파트너와 같이 하는 연습법",
    excerpt:
      "발리 첫 발 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["발리", "첫 발", "네트 플레이", "복식", "파트너와"],
  },
  {
    id: "tennis-volley-first-step-equipment-setup",
    title: "발리 첫 발: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "발리 첫 발 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["발리", "첫 발", "네트 플레이", "복식", "장비"],
  },
  {
    id: "tennis-volley-first-step-pressure-situation",
    title: "발리 첫 발: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "발리 첫 발 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["발리", "첫 발", "네트 플레이", "복식", "긴장되는"],
  },
  {
    id: "tennis-volley-first-step-monthly-review",
    title: "발리 첫 발: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "발리 첫 발 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["발리", "첫 발", "네트 플레이", "복식", "한"],
  },
  {
    id: "tennis-overhead-smash-setup-beginner-checklist",
    title: "오버헤드 스매시 준비: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "오버헤드 스매시 준비 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["스매시", "오버헤드", "준비 자세", "네트 플레이", "초보가"],
  },
  {
    id: "tennis-overhead-smash-setup-common-mistakes",
    title: "오버헤드 스매시 준비: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "오버헤드 스매시 준비 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["스매시", "오버헤드", "준비 자세", "네트 플레이", "자주"],
  },
  {
    id: "tennis-overhead-smash-setup-practice-routine",
    title: "오버헤드 스매시 준비: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "오버헤드 스매시 준비 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["스매시", "오버헤드", "준비 자세", "네트 플레이", "20분"],
  },
  {
    id: "tennis-overhead-smash-setup-match-application",
    title: "오버헤드 스매시 준비: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "오버헤드 스매시 준비 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["스매시", "오버헤드", "준비 자세", "네트 플레이", "실제"],
  },
  {
    id: "tennis-overhead-smash-setup-comparison-guide",
    title: "오버헤드 스매시 준비: 초보와 중급자의 기준 차이",
    excerpt:
      "오버헤드 스매시 준비 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["스매시", "오버헤드", "준비 자세", "네트 플레이", "초보와"],
  },
  {
    id: "tennis-overhead-smash-setup-record-metrics",
    title: "오버헤드 스매시 준비: 기록으로 확인하는 성장 지표",
    excerpt:
      "오버헤드 스매시 준비 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["스매시", "오버헤드", "준비 자세", "네트 플레이", "기록으로"],
  },
  {
    id: "tennis-overhead-smash-setup-partner-drill",
    title: "오버헤드 스매시 준비: 파트너와 같이 하는 연습법",
    excerpt:
      "오버헤드 스매시 준비 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["스매시", "오버헤드", "준비 자세", "네트 플레이", "파트너와"],
  },
  {
    id: "tennis-overhead-smash-setup-equipment-setup",
    title: "오버헤드 스매시 준비: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "오버헤드 스매시 준비 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["스매시", "오버헤드", "준비 자세", "네트 플레이", "장비"],
  },
  {
    id: "tennis-overhead-smash-setup-pressure-situation",
    title: "오버헤드 스매시 준비: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "오버헤드 스매시 준비 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["스매시", "오버헤드", "준비 자세", "네트 플레이", "긴장되는"],
  },
  {
    id: "tennis-overhead-smash-setup-monthly-review",
    title: "오버헤드 스매시 준비: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "오버헤드 스매시 준비 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "테니스 레슨",
    tags: ["스매시", "오버헤드", "준비 자세", "네트 플레이", "한"],
  },
  {
    id: "tennis-return-serve-reading-beginner-checklist",
    title: "서브 리턴 읽기: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "서브 리턴 읽기 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["리턴", "서브 읽기", "상대 분석", "스플릿 스텝", "초보가"],
  },
  {
    id: "tennis-return-serve-reading-common-mistakes",
    title: "서브 리턴 읽기: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "서브 리턴 읽기 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["리턴", "서브 읽기", "상대 분석", "스플릿 스텝", "자주"],
  },
  {
    id: "tennis-return-serve-reading-practice-routine",
    title: "서브 리턴 읽기: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "서브 리턴 읽기 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["리턴", "서브 읽기", "상대 분석", "스플릿 스텝", "20분"],
  },
  {
    id: "tennis-return-serve-reading-match-application",
    title: "서브 리턴 읽기: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "서브 리턴 읽기 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["리턴", "서브 읽기", "상대 분석", "스플릿 스텝", "실제"],
  },
  {
    id: "tennis-return-serve-reading-comparison-guide",
    title: "서브 리턴 읽기: 초보와 중급자의 기준 차이",
    excerpt:
      "서브 리턴 읽기 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["리턴", "서브 읽기", "상대 분석", "스플릿 스텝", "초보와"],
  },
  {
    id: "tennis-return-serve-reading-record-metrics",
    title: "서브 리턴 읽기: 기록으로 확인하는 성장 지표",
    excerpt:
      "서브 리턴 읽기 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["리턴", "서브 읽기", "상대 분석", "스플릿 스텝", "기록으로"],
  },
  {
    id: "tennis-return-serve-reading-partner-drill",
    title: "서브 리턴 읽기: 파트너와 같이 하는 연습법",
    excerpt:
      "서브 리턴 읽기 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["리턴", "서브 읽기", "상대 분석", "스플릿 스텝", "파트너와"],
  },
  {
    id: "tennis-return-serve-reading-equipment-setup",
    title: "서브 리턴 읽기: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "서브 리턴 읽기 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["리턴", "서브 읽기", "상대 분석", "스플릿 스텝", "장비"],
  },
  {
    id: "tennis-return-serve-reading-pressure-situation",
    title: "서브 리턴 읽기: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "서브 리턴 읽기 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["리턴", "서브 읽기", "상대 분석", "스플릿 스텝", "긴장되는"],
  },
  {
    id: "tennis-return-serve-reading-monthly-review",
    title: "서브 리턴 읽기: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "서브 리턴 읽기 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["리턴", "서브 읽기", "상대 분석", "스플릿 스텝", "한"],
  },
  {
    id: "tennis-split-step-reaction-beginner-checklist",
    title: "스플릿 스텝 반응: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "스플릿 스텝 반응 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["스플릿 스텝", "풋워크", "반응", "훈련", "초보가"],
  },
  {
    id: "tennis-split-step-reaction-common-mistakes",
    title: "스플릿 스텝 반응: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "스플릿 스텝 반응 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["스플릿 스텝", "풋워크", "반응", "훈련", "자주"],
  },
  {
    id: "tennis-split-step-reaction-practice-routine",
    title: "스플릿 스텝 반응: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "스플릿 스텝 반응 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["스플릿 스텝", "풋워크", "반응", "훈련", "20분"],
  },
  {
    id: "tennis-split-step-reaction-match-application",
    title: "스플릿 스텝 반응: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "스플릿 스텝 반응 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["스플릿 스텝", "풋워크", "반응", "훈련", "실제"],
  },
  {
    id: "tennis-split-step-reaction-comparison-guide",
    title: "스플릿 스텝 반응: 초보와 중급자의 기준 차이",
    excerpt:
      "스플릿 스텝 반응 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["스플릿 스텝", "풋워크", "반응", "훈련", "초보와"],
  },
  {
    id: "tennis-split-step-reaction-record-metrics",
    title: "스플릿 스텝 반응: 기록으로 확인하는 성장 지표",
    excerpt:
      "스플릿 스텝 반응 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["스플릿 스텝", "풋워크", "반응", "훈련", "기록으로"],
  },
  {
    id: "tennis-split-step-reaction-partner-drill",
    title: "스플릿 스텝 반응: 파트너와 같이 하는 연습법",
    excerpt:
      "스플릿 스텝 반응 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["스플릿 스텝", "풋워크", "반응", "훈련", "파트너와"],
  },
  {
    id: "tennis-split-step-reaction-equipment-setup",
    title: "스플릿 스텝 반응: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "스플릿 스텝 반응 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["스플릿 스텝", "풋워크", "반응", "훈련", "장비"],
  },
  {
    id: "tennis-split-step-reaction-pressure-situation",
    title: "스플릿 스텝 반응: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "스플릿 스텝 반응 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["스플릿 스텝", "풋워크", "반응", "훈련", "긴장되는"],
  },
  {
    id: "tennis-split-step-reaction-monthly-review",
    title: "스플릿 스텝 반응: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "스플릿 스텝 반응 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["스플릿 스텝", "풋워크", "반응", "훈련", "한"],
  },
  {
    id: "tennis-doubles-poach-timing-beginner-checklist",
    title: "복식 포칭 타이밍: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "복식 포칭 타이밍 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "포칭", "파트너", "네트 플레이", "초보가"],
  },
  {
    id: "tennis-doubles-poach-timing-common-mistakes",
    title: "복식 포칭 타이밍: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "복식 포칭 타이밍 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "포칭", "파트너", "네트 플레이", "자주"],
  },
  {
    id: "tennis-doubles-poach-timing-practice-routine",
    title: "복식 포칭 타이밍: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "복식 포칭 타이밍 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "포칭", "파트너", "네트 플레이", "20분"],
  },
  {
    id: "tennis-doubles-poach-timing-match-application",
    title: "복식 포칭 타이밍: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "복식 포칭 타이밍 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "포칭", "파트너", "네트 플레이", "실제"],
  },
  {
    id: "tennis-doubles-poach-timing-comparison-guide",
    title: "복식 포칭 타이밍: 초보와 중급자의 기준 차이",
    excerpt:
      "복식 포칭 타이밍 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "포칭", "파트너", "네트 플레이", "초보와"],
  },
  {
    id: "tennis-doubles-poach-timing-record-metrics",
    title: "복식 포칭 타이밍: 기록으로 확인하는 성장 지표",
    excerpt:
      "복식 포칭 타이밍 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "포칭", "파트너", "네트 플레이", "기록으로"],
  },
  {
    id: "tennis-doubles-poach-timing-partner-drill",
    title: "복식 포칭 타이밍: 파트너와 같이 하는 연습법",
    excerpt:
      "복식 포칭 타이밍 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "포칭", "파트너", "네트 플레이", "파트너와"],
  },
  {
    id: "tennis-doubles-poach-timing-equipment-setup",
    title: "복식 포칭 타이밍: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "복식 포칭 타이밍 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "포칭", "파트너", "네트 플레이", "장비"],
  },
  {
    id: "tennis-doubles-poach-timing-pressure-situation",
    title: "복식 포칭 타이밍: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "복식 포칭 타이밍 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "포칭", "파트너", "네트 플레이", "긴장되는"],
  },
  {
    id: "tennis-doubles-poach-timing-monthly-review",
    title: "복식 포칭 타이밍: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "복식 포칭 타이밍 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "포칭", "파트너", "네트 플레이", "한"],
  },
  {
    id: "tennis-doubles-communication-reset-beginner-checklist",
    title: "복식 소통 리셋: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "복식 소통 리셋 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "소통", "멘탈", "파트너", "초보가"],
  },
  {
    id: "tennis-doubles-communication-reset-common-mistakes",
    title: "복식 소통 리셋: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "복식 소통 리셋 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "소통", "멘탈", "파트너", "자주"],
  },
  {
    id: "tennis-doubles-communication-reset-practice-routine",
    title: "복식 소통 리셋: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "복식 소통 리셋 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "소통", "멘탈", "파트너", "20분"],
  },
  {
    id: "tennis-doubles-communication-reset-match-application",
    title: "복식 소통 리셋: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "복식 소통 리셋 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "소통", "멘탈", "파트너", "실제"],
  },
  {
    id: "tennis-doubles-communication-reset-comparison-guide",
    title: "복식 소통 리셋: 초보와 중급자의 기준 차이",
    excerpt:
      "복식 소통 리셋 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "소통", "멘탈", "파트너", "초보와"],
  },
  {
    id: "tennis-doubles-communication-reset-record-metrics",
    title: "복식 소통 리셋: 기록으로 확인하는 성장 지표",
    excerpt:
      "복식 소통 리셋 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "소통", "멘탈", "파트너", "기록으로"],
  },
  {
    id: "tennis-doubles-communication-reset-partner-drill",
    title: "복식 소통 리셋: 파트너와 같이 하는 연습법",
    excerpt:
      "복식 소통 리셋 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "소통", "멘탈", "파트너", "파트너와"],
  },
  {
    id: "tennis-doubles-communication-reset-equipment-setup",
    title: "복식 소통 리셋: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "복식 소통 리셋 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "소통", "멘탈", "파트너", "장비"],
  },
  {
    id: "tennis-doubles-communication-reset-pressure-situation",
    title: "복식 소통 리셋: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "복식 소통 리셋 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "소통", "멘탈", "파트너", "긴장되는"],
  },
  {
    id: "tennis-doubles-communication-reset-monthly-review",
    title: "복식 소통 리셋: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "복식 소통 리셋 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "복식 운영",
    tags: ["복식", "소통", "멘탈", "파트너", "한"],
  },
  {
    id: "tennis-racket-weight-choice-beginner-checklist",
    title: "라켓 무게 선택: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "라켓 무게 선택 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["라켓", "무게", "장비 선택", "밸런스", "장비", "초보가"],
  },
  {
    id: "tennis-racket-weight-choice-common-mistakes",
    title: "라켓 무게 선택: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "라켓 무게 선택 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["라켓", "무게", "장비 선택", "밸런스", "장비", "자주"],
  },
  {
    id: "tennis-racket-weight-choice-practice-routine",
    title: "라켓 무게 선택: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "라켓 무게 선택 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["라켓", "무게", "장비 선택", "밸런스", "장비", "20분"],
  },
  {
    id: "tennis-racket-weight-choice-match-application",
    title: "라켓 무게 선택: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "라켓 무게 선택 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["라켓", "무게", "장비 선택", "밸런스", "장비", "실제"],
  },
  {
    id: "tennis-racket-weight-choice-comparison-guide",
    title: "라켓 무게 선택: 초보와 중급자의 기준 차이",
    excerpt:
      "라켓 무게 선택 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["라켓", "무게", "장비 선택", "밸런스", "장비", "초보와"],
  },
  {
    id: "tennis-racket-weight-choice-record-metrics",
    title: "라켓 무게 선택: 기록으로 확인하는 성장 지표",
    excerpt:
      "라켓 무게 선택 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["라켓", "무게", "장비 선택", "밸런스", "장비", "기록으로"],
  },
  {
    id: "tennis-racket-weight-choice-partner-drill",
    title: "라켓 무게 선택: 파트너와 같이 하는 연습법",
    excerpt:
      "라켓 무게 선택 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["라켓", "무게", "장비 선택", "밸런스", "장비", "파트너와"],
  },
  {
    id: "tennis-racket-weight-choice-equipment-setup",
    title: "라켓 무게 선택: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "라켓 무게 선택 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["라켓", "무게", "장비 선택", "밸런스", "장비"],
  },
  {
    id: "tennis-racket-weight-choice-pressure-situation",
    title: "라켓 무게 선택: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "라켓 무게 선택 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["라켓", "무게", "장비 선택", "밸런스", "장비", "긴장되는"],
  },
  {
    id: "tennis-racket-weight-choice-monthly-review",
    title: "라켓 무게 선택: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "라켓 무게 선택 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["라켓", "무게", "장비 선택", "밸런스", "장비", "한"],
  },
  {
    id: "tennis-string-tension-season-beginner-checklist",
    title: "계절별 스트링 텐션: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "계절별 스트링 텐션 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["스트링", "텐션", "계절", "장비 관리", "장비", "초보가"],
  },
  {
    id: "tennis-string-tension-season-common-mistakes",
    title: "계절별 스트링 텐션: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "계절별 스트링 텐션 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["스트링", "텐션", "계절", "장비 관리", "장비", "자주"],
  },
  {
    id: "tennis-string-tension-season-practice-routine",
    title: "계절별 스트링 텐션: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "계절별 스트링 텐션 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["스트링", "텐션", "계절", "장비 관리", "장비", "20분"],
  },
  {
    id: "tennis-string-tension-season-match-application",
    title: "계절별 스트링 텐션: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "계절별 스트링 텐션 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["스트링", "텐션", "계절", "장비 관리", "장비", "실제"],
  },
  {
    id: "tennis-string-tension-season-comparison-guide",
    title: "계절별 스트링 텐션: 초보와 중급자의 기준 차이",
    excerpt:
      "계절별 스트링 텐션 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["스트링", "텐션", "계절", "장비 관리", "장비", "초보와"],
  },
  {
    id: "tennis-string-tension-season-record-metrics",
    title: "계절별 스트링 텐션: 기록으로 확인하는 성장 지표",
    excerpt:
      "계절별 스트링 텐션 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["스트링", "텐션", "계절", "장비 관리", "장비", "기록으로"],
  },
  {
    id: "tennis-string-tension-season-partner-drill",
    title: "계절별 스트링 텐션: 파트너와 같이 하는 연습법",
    excerpt:
      "계절별 스트링 텐션 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["스트링", "텐션", "계절", "장비 관리", "장비", "파트너와"],
  },
  {
    id: "tennis-string-tension-season-equipment-setup",
    title: "계절별 스트링 텐션: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "계절별 스트링 텐션 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["스트링", "텐션", "계절", "장비 관리", "장비"],
  },
  {
    id: "tennis-string-tension-season-pressure-situation",
    title: "계절별 스트링 텐션: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "계절별 스트링 텐션 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["스트링", "텐션", "계절", "장비 관리", "장비", "긴장되는"],
  },
  {
    id: "tennis-string-tension-season-monthly-review",
    title: "계절별 스트링 텐션: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "계절별 스트링 텐션 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["스트링", "텐션", "계절", "장비 관리", "장비", "한"],
  },
  {
    id: "tennis-overgrip-replacement-cycle-beginner-checklist",
    title: "오버그립 교체 주기: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "오버그립 교체 주기 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "교체", "장비 관리", "장비", "초보가"],
  },
  {
    id: "tennis-overgrip-replacement-cycle-common-mistakes",
    title: "오버그립 교체 주기: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "오버그립 교체 주기 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "교체", "장비 관리", "장비", "자주"],
  },
  {
    id: "tennis-overgrip-replacement-cycle-practice-routine",
    title: "오버그립 교체 주기: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "오버그립 교체 주기 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "교체", "장비 관리", "장비", "20분"],
  },
  {
    id: "tennis-overgrip-replacement-cycle-match-application",
    title: "오버그립 교체 주기: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "오버그립 교체 주기 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "교체", "장비 관리", "장비", "실제"],
  },
  {
    id: "tennis-overgrip-replacement-cycle-comparison-guide",
    title: "오버그립 교체 주기: 초보와 중급자의 기준 차이",
    excerpt:
      "오버그립 교체 주기 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "교체", "장비 관리", "장비", "초보와"],
  },
  {
    id: "tennis-overgrip-replacement-cycle-record-metrics",
    title: "오버그립 교체 주기: 기록으로 확인하는 성장 지표",
    excerpt:
      "오버그립 교체 주기 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "교체", "장비 관리", "장비", "기록으로"],
  },
  {
    id: "tennis-overgrip-replacement-cycle-partner-drill",
    title: "오버그립 교체 주기: 파트너와 같이 하는 연습법",
    excerpt:
      "오버그립 교체 주기 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "교체", "장비 관리", "장비", "파트너와"],
  },
  {
    id: "tennis-overgrip-replacement-cycle-equipment-setup",
    title: "오버그립 교체 주기: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "오버그립 교체 주기 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "교체", "장비 관리", "장비"],
  },
  {
    id: "tennis-overgrip-replacement-cycle-pressure-situation",
    title: "오버그립 교체 주기: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "오버그립 교체 주기 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "교체", "장비 관리", "장비", "긴장되는"],
  },
  {
    id: "tennis-overgrip-replacement-cycle-monthly-review",
    title: "오버그립 교체 주기: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "오버그립 교체 주기 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["오버그립", "그립", "교체", "장비 관리", "장비", "한"],
  },
  {
    id: "tennis-tennis-shoe-fit-check-beginner-checklist",
    title: "테니스화 핏 점검: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "테니스화 핏 점검 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["테니스화", "핏", "발목", "코트", "장비", "초보가"],
  },
  {
    id: "tennis-tennis-shoe-fit-check-common-mistakes",
    title: "테니스화 핏 점검: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "테니스화 핏 점검 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["테니스화", "핏", "발목", "코트", "장비", "자주"],
  },
  {
    id: "tennis-tennis-shoe-fit-check-practice-routine",
    title: "테니스화 핏 점검: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "테니스화 핏 점검 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["테니스화", "핏", "발목", "코트", "장비", "20분"],
  },
  {
    id: "tennis-tennis-shoe-fit-check-match-application",
    title: "테니스화 핏 점검: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "테니스화 핏 점검 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["테니스화", "핏", "발목", "코트", "장비", "실제"],
  },
  {
    id: "tennis-tennis-shoe-fit-check-comparison-guide",
    title: "테니스화 핏 점검: 초보와 중급자의 기준 차이",
    excerpt:
      "테니스화 핏 점검 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["테니스화", "핏", "발목", "코트", "장비", "초보와"],
  },
  {
    id: "tennis-tennis-shoe-fit-check-record-metrics",
    title: "테니스화 핏 점검: 기록으로 확인하는 성장 지표",
    excerpt:
      "테니스화 핏 점검 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["테니스화", "핏", "발목", "코트", "장비", "기록으로"],
  },
  {
    id: "tennis-tennis-shoe-fit-check-partner-drill",
    title: "테니스화 핏 점검: 파트너와 같이 하는 연습법",
    excerpt:
      "테니스화 핏 점검 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["테니스화", "핏", "발목", "코트", "장비", "파트너와"],
  },
  {
    id: "tennis-tennis-shoe-fit-check-equipment-setup",
    title: "테니스화 핏 점검: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "테니스화 핏 점검 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["테니스화", "핏", "발목", "코트", "장비"],
  },
  {
    id: "tennis-tennis-shoe-fit-check-pressure-situation",
    title: "테니스화 핏 점검: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "테니스화 핏 점검 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["테니스화", "핏", "발목", "코트", "장비", "긴장되는"],
  },
  {
    id: "tennis-tennis-shoe-fit-check-monthly-review",
    title: "테니스화 핏 점검: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "테니스화 핏 점검 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "장비 가이드",
    tags: ["테니스화", "핏", "발목", "코트", "장비", "한"],
  },
  {
    id: "tennis-elbow-load-management-beginner-checklist",
    title: "팔꿈치 부담 관리: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "팔꿈치 부담 관리 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["팔꿈치", "테니스 엘보", "부상 예방", "회복", "부상", "초보가"],
  },
  {
    id: "tennis-elbow-load-management-common-mistakes",
    title: "팔꿈치 부담 관리: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "팔꿈치 부담 관리 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["팔꿈치", "테니스 엘보", "부상 예방", "회복", "부상", "자주"],
  },
  {
    id: "tennis-elbow-load-management-practice-routine",
    title: "팔꿈치 부담 관리: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "팔꿈치 부담 관리 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["팔꿈치", "테니스 엘보", "부상 예방", "회복", "부상", "20분"],
  },
  {
    id: "tennis-elbow-load-management-match-application",
    title: "팔꿈치 부담 관리: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "팔꿈치 부담 관리 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["팔꿈치", "테니스 엘보", "부상 예방", "회복", "부상", "실제"],
  },
  {
    id: "tennis-elbow-load-management-comparison-guide",
    title: "팔꿈치 부담 관리: 초보와 중급자의 기준 차이",
    excerpt:
      "팔꿈치 부담 관리 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["팔꿈치", "테니스 엘보", "부상 예방", "회복", "부상", "초보와"],
  },
  {
    id: "tennis-elbow-load-management-record-metrics",
    title: "팔꿈치 부담 관리: 기록으로 확인하는 성장 지표",
    excerpt:
      "팔꿈치 부담 관리 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["팔꿈치", "테니스 엘보", "부상 예방", "회복", "부상", "기록으로"],
  },
  {
    id: "tennis-elbow-load-management-partner-drill",
    title: "팔꿈치 부담 관리: 파트너와 같이 하는 연습법",
    excerpt:
      "팔꿈치 부담 관리 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["팔꿈치", "테니스 엘보", "부상 예방", "회복", "부상", "파트너와"],
  },
  {
    id: "tennis-elbow-load-management-equipment-setup",
    title: "팔꿈치 부담 관리: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "팔꿈치 부담 관리 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["팔꿈치", "테니스 엘보", "부상 예방", "회복", "부상", "장비"],
  },
  {
    id: "tennis-elbow-load-management-pressure-situation",
    title: "팔꿈치 부담 관리: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "팔꿈치 부담 관리 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["팔꿈치", "테니스 엘보", "부상 예방", "회복", "부상", "긴장되는"],
  },
  {
    id: "tennis-elbow-load-management-monthly-review",
    title: "팔꿈치 부담 관리: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "팔꿈치 부담 관리 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["팔꿈치", "테니스 엘보", "부상 예방", "회복", "부상", "한"],
  },
  {
    id: "tennis-shoulder-serve-care-beginner-checklist",
    title: "서브 어깨 관리: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "서브 어깨 관리 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["어깨", "서브", "부상 예방", "회복", "부상", "초보가"],
  },
  {
    id: "tennis-shoulder-serve-care-common-mistakes",
    title: "서브 어깨 관리: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "서브 어깨 관리 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["어깨", "서브", "부상 예방", "회복", "부상", "자주"],
  },
  {
    id: "tennis-shoulder-serve-care-practice-routine",
    title: "서브 어깨 관리: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "서브 어깨 관리 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["어깨", "서브", "부상 예방", "회복", "부상", "20분"],
  },
  {
    id: "tennis-shoulder-serve-care-match-application",
    title: "서브 어깨 관리: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "서브 어깨 관리 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["어깨", "서브", "부상 예방", "회복", "부상", "실제"],
  },
  {
    id: "tennis-shoulder-serve-care-comparison-guide",
    title: "서브 어깨 관리: 초보와 중급자의 기준 차이",
    excerpt:
      "서브 어깨 관리 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["어깨", "서브", "부상 예방", "회복", "부상", "초보와"],
  },
  {
    id: "tennis-shoulder-serve-care-record-metrics",
    title: "서브 어깨 관리: 기록으로 확인하는 성장 지표",
    excerpt:
      "서브 어깨 관리 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["어깨", "서브", "부상 예방", "회복", "부상", "기록으로"],
  },
  {
    id: "tennis-shoulder-serve-care-partner-drill",
    title: "서브 어깨 관리: 파트너와 같이 하는 연습법",
    excerpt:
      "서브 어깨 관리 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["어깨", "서브", "부상 예방", "회복", "부상", "파트너와"],
  },
  {
    id: "tennis-shoulder-serve-care-equipment-setup",
    title: "서브 어깨 관리: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "서브 어깨 관리 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["어깨", "서브", "부상 예방", "회복", "부상", "장비"],
  },
  {
    id: "tennis-shoulder-serve-care-pressure-situation",
    title: "서브 어깨 관리: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "서브 어깨 관리 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["어깨", "서브", "부상 예방", "회복", "부상", "긴장되는"],
  },
  {
    id: "tennis-shoulder-serve-care-monthly-review",
    title: "서브 어깨 관리: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "서브 어깨 관리 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["어깨", "서브", "부상 예방", "회복", "부상", "한"],
  },
  {
    id: "tennis-knee-footwork-load-beginner-checklist",
    title: "무릎 부담 줄이는 풋워크: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "무릎 부담 줄이는 풋워크 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["무릎", "풋워크", "부상 예방", "테니스화", "부상", "초보가"],
  },
  {
    id: "tennis-knee-footwork-load-common-mistakes",
    title: "무릎 부담 줄이는 풋워크: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "무릎 부담 줄이는 풋워크 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["무릎", "풋워크", "부상 예방", "테니스화", "부상", "자주"],
  },
  {
    id: "tennis-knee-footwork-load-practice-routine",
    title: "무릎 부담 줄이는 풋워크: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "무릎 부담 줄이는 풋워크 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["무릎", "풋워크", "부상 예방", "테니스화", "부상", "20분"],
  },
  {
    id: "tennis-knee-footwork-load-match-application",
    title: "무릎 부담 줄이는 풋워크: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "무릎 부담 줄이는 풋워크 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["무릎", "풋워크", "부상 예방", "테니스화", "부상", "실제"],
  },
  {
    id: "tennis-knee-footwork-load-comparison-guide",
    title: "무릎 부담 줄이는 풋워크: 초보와 중급자의 기준 차이",
    excerpt:
      "무릎 부담 줄이는 풋워크 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["무릎", "풋워크", "부상 예방", "테니스화", "부상", "초보와"],
  },
  {
    id: "tennis-knee-footwork-load-record-metrics",
    title: "무릎 부담 줄이는 풋워크: 기록으로 확인하는 성장 지표",
    excerpt:
      "무릎 부담 줄이는 풋워크 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["무릎", "풋워크", "부상 예방", "테니스화", "부상", "기록으로"],
  },
  {
    id: "tennis-knee-footwork-load-partner-drill",
    title: "무릎 부담 줄이는 풋워크: 파트너와 같이 하는 연습법",
    excerpt:
      "무릎 부담 줄이는 풋워크 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["무릎", "풋워크", "부상 예방", "테니스화", "부상", "파트너와"],
  },
  {
    id: "tennis-knee-footwork-load-equipment-setup",
    title: "무릎 부담 줄이는 풋워크: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "무릎 부담 줄이는 풋워크 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["무릎", "풋워크", "부상 예방", "테니스화", "부상", "장비"],
  },
  {
    id: "tennis-knee-footwork-load-pressure-situation",
    title: "무릎 부담 줄이는 풋워크: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "무릎 부담 줄이는 풋워크 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["무릎", "풋워크", "부상 예방", "테니스화", "부상", "긴장되는"],
  },
  {
    id: "tennis-knee-footwork-load-monthly-review",
    title: "무릎 부담 줄이는 풋워크: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "무릎 부담 줄이는 풋워크 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["무릎", "풋워크", "부상 예방", "테니스화", "부상", "한"],
  },
  {
    id: "tennis-hydration-match-plan-beginner-checklist",
    title: "경기 중 수분 계획: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "경기 중 수분 계획 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["수분", "컨디션", "여름 테니스", "회복", "초보가"],
  },
  {
    id: "tennis-hydration-match-plan-common-mistakes",
    title: "경기 중 수분 계획: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "경기 중 수분 계획 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["수분", "컨디션", "여름 테니스", "회복", "자주"],
  },
  {
    id: "tennis-hydration-match-plan-practice-routine",
    title: "경기 중 수분 계획: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "경기 중 수분 계획 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["수분", "컨디션", "여름 테니스", "회복", "20분"],
  },
  {
    id: "tennis-hydration-match-plan-match-application",
    title: "경기 중 수분 계획: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "경기 중 수분 계획 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["수분", "컨디션", "여름 테니스", "회복", "실제"],
  },
  {
    id: "tennis-hydration-match-plan-comparison-guide",
    title: "경기 중 수분 계획: 초보와 중급자의 기준 차이",
    excerpt:
      "경기 중 수분 계획 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["수분", "컨디션", "여름 테니스", "회복", "초보와"],
  },
  {
    id: "tennis-hydration-match-plan-record-metrics",
    title: "경기 중 수분 계획: 기록으로 확인하는 성장 지표",
    excerpt:
      "경기 중 수분 계획 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["수분", "컨디션", "여름 테니스", "회복", "기록으로"],
  },
  {
    id: "tennis-hydration-match-plan-partner-drill",
    title: "경기 중 수분 계획: 파트너와 같이 하는 연습법",
    excerpt:
      "경기 중 수분 계획 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["수분", "컨디션", "여름 테니스", "회복", "파트너와"],
  },
  {
    id: "tennis-hydration-match-plan-equipment-setup",
    title: "경기 중 수분 계획: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "경기 중 수분 계획 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["수분", "컨디션", "여름 테니스", "회복", "장비"],
  },
  {
    id: "tennis-hydration-match-plan-pressure-situation",
    title: "경기 중 수분 계획: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "경기 중 수분 계획 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["수분", "컨디션", "여름 테니스", "회복", "긴장되는"],
  },
  {
    id: "tennis-hydration-match-plan-monthly-review",
    title: "경기 중 수분 계획: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "경기 중 수분 계획 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["수분", "컨디션", "여름 테니스", "회복", "한"],
  },
  {
    id: "tennis-warmup-before-match-beginner-checklist",
    title: "경기 전 워밍업: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "경기 전 워밍업 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["워밍업", "루틴", "경기 준비", "부상 예방", "컨디션", "초보가"],
  },
  {
    id: "tennis-warmup-before-match-common-mistakes",
    title: "경기 전 워밍업: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "경기 전 워밍업 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["워밍업", "루틴", "경기 준비", "부상 예방", "컨디션", "자주"],
  },
  {
    id: "tennis-warmup-before-match-practice-routine",
    title: "경기 전 워밍업: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "경기 전 워밍업 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["워밍업", "루틴", "경기 준비", "부상 예방", "컨디션", "20분"],
  },
  {
    id: "tennis-warmup-before-match-match-application",
    title: "경기 전 워밍업: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "경기 전 워밍업 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["워밍업", "루틴", "경기 준비", "부상 예방", "컨디션", "실제"],
  },
  {
    id: "tennis-warmup-before-match-comparison-guide",
    title: "경기 전 워밍업: 초보와 중급자의 기준 차이",
    excerpt:
      "경기 전 워밍업 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["워밍업", "루틴", "경기 준비", "부상 예방", "컨디션", "초보와"],
  },
  {
    id: "tennis-warmup-before-match-record-metrics",
    title: "경기 전 워밍업: 기록으로 확인하는 성장 지표",
    excerpt:
      "경기 전 워밍업 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["워밍업", "루틴", "경기 준비", "부상 예방", "컨디션", "기록으로"],
  },
  {
    id: "tennis-warmup-before-match-partner-drill",
    title: "경기 전 워밍업: 파트너와 같이 하는 연습법",
    excerpt:
      "경기 전 워밍업 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["워밍업", "루틴", "경기 준비", "부상 예방", "컨디션", "파트너와"],
  },
  {
    id: "tennis-warmup-before-match-equipment-setup",
    title: "경기 전 워밍업: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "경기 전 워밍업 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["워밍업", "루틴", "경기 준비", "부상 예방", "컨디션", "장비"],
  },
  {
    id: "tennis-warmup-before-match-pressure-situation",
    title: "경기 전 워밍업: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "경기 전 워밍업 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["워밍업", "루틴", "경기 준비", "부상 예방", "컨디션", "긴장되는"],
  },
  {
    id: "tennis-warmup-before-match-monthly-review",
    title: "경기 전 워밍업: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "경기 전 워밍업 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["워밍업", "루틴", "경기 준비", "부상 예방", "컨디션", "한"],
  },
  {
    id: "tennis-cooldown-after-match-beginner-checklist",
    title: "경기 후 쿨다운: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "경기 후 쿨다운 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["쿨다운", "회복", "스트레칭", "피로 관리", "초보가"],
  },
  {
    id: "tennis-cooldown-after-match-common-mistakes",
    title: "경기 후 쿨다운: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "경기 후 쿨다운 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["쿨다운", "회복", "스트레칭", "피로 관리", "자주"],
  },
  {
    id: "tennis-cooldown-after-match-practice-routine",
    title: "경기 후 쿨다운: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "경기 후 쿨다운 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["쿨다운", "회복", "스트레칭", "피로 관리", "20분"],
  },
  {
    id: "tennis-cooldown-after-match-match-application",
    title: "경기 후 쿨다운: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "경기 후 쿨다운 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["쿨다운", "회복", "스트레칭", "피로 관리", "실제"],
  },
  {
    id: "tennis-cooldown-after-match-comparison-guide",
    title: "경기 후 쿨다운: 초보와 중급자의 기준 차이",
    excerpt:
      "경기 후 쿨다운 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["쿨다운", "회복", "스트레칭", "피로 관리", "초보와"],
  },
  {
    id: "tennis-cooldown-after-match-record-metrics",
    title: "경기 후 쿨다운: 기록으로 확인하는 성장 지표",
    excerpt:
      "경기 후 쿨다운 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["쿨다운", "회복", "스트레칭", "피로 관리", "기록으로"],
  },
  {
    id: "tennis-cooldown-after-match-partner-drill",
    title: "경기 후 쿨다운: 파트너와 같이 하는 연습법",
    excerpt:
      "경기 후 쿨다운 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["쿨다운", "회복", "스트레칭", "피로 관리", "파트너와"],
  },
  {
    id: "tennis-cooldown-after-match-equipment-setup",
    title: "경기 후 쿨다운: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "경기 후 쿨다운 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["쿨다운", "회복", "스트레칭", "피로 관리", "장비"],
  },
  {
    id: "tennis-cooldown-after-match-pressure-situation",
    title: "경기 후 쿨다운: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "경기 후 쿨다운 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["쿨다운", "회복", "스트레칭", "피로 관리", "긴장되는"],
  },
  {
    id: "tennis-cooldown-after-match-monthly-review",
    title: "경기 후 쿨다운: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "경기 후 쿨다운 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["쿨다운", "회복", "스트레칭", "피로 관리", "한"],
  },
  {
    id: "tennis-tournament-day-routine-beginner-checklist",
    title: "대회 당일 루틴: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "대회 당일 루틴 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "동호회 운영",
    tags: ["대회", "루틴", "준비물", "멘탈", "초보가"],
  },
  {
    id: "tennis-tournament-day-routine-common-mistakes",
    title: "대회 당일 루틴: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "대회 당일 루틴 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "동호회 운영",
    tags: ["대회", "루틴", "준비물", "멘탈", "자주"],
  },
  {
    id: "tennis-tournament-day-routine-practice-routine",
    title: "대회 당일 루틴: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "대회 당일 루틴 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "동호회 운영",
    tags: ["대회", "루틴", "준비물", "멘탈", "20분"],
  },
  {
    id: "tennis-tournament-day-routine-match-application",
    title: "대회 당일 루틴: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "대회 당일 루틴 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "동호회 운영",
    tags: ["대회", "루틴", "준비물", "멘탈", "실제"],
  },
  {
    id: "tennis-tournament-day-routine-comparison-guide",
    title: "대회 당일 루틴: 초보와 중급자의 기준 차이",
    excerpt:
      "대회 당일 루틴 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "동호회 운영",
    tags: ["대회", "루틴", "준비물", "멘탈", "초보와"],
  },
  {
    id: "tennis-tournament-day-routine-record-metrics",
    title: "대회 당일 루틴: 기록으로 확인하는 성장 지표",
    excerpt:
      "대회 당일 루틴 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "동호회 운영",
    tags: ["대회", "루틴", "준비물", "멘탈", "기록으로"],
  },
  {
    id: "tennis-tournament-day-routine-partner-drill",
    title: "대회 당일 루틴: 파트너와 같이 하는 연습법",
    excerpt:
      "대회 당일 루틴 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "동호회 운영",
    tags: ["대회", "루틴", "준비물", "멘탈", "파트너와"],
  },
  {
    id: "tennis-tournament-day-routine-equipment-setup",
    title: "대회 당일 루틴: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "대회 당일 루틴 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "동호회 운영",
    tags: ["대회", "루틴", "준비물", "멘탈", "장비"],
  },
  {
    id: "tennis-tournament-day-routine-pressure-situation",
    title: "대회 당일 루틴: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "대회 당일 루틴 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "동호회 운영",
    tags: ["대회", "루틴", "준비물", "멘탈", "긴장되는"],
  },
  {
    id: "tennis-tournament-day-routine-monthly-review",
    title: "대회 당일 루틴: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "대회 당일 루틴 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "동호회 운영",
    tags: ["대회", "루틴", "준비물", "멘탈", "한"],
  },
  {
    id: "tennis-mental-reset-between-points-beginner-checklist",
    title: "포인트 사이 멘탈 리셋: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "포인트 사이 멘탈 리셋 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "루틴", "집중", "경기 운영", "초보가"],
  },
  {
    id: "tennis-mental-reset-between-points-common-mistakes",
    title: "포인트 사이 멘탈 리셋: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "포인트 사이 멘탈 리셋 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "루틴", "집중", "경기 운영", "자주"],
  },
  {
    id: "tennis-mental-reset-between-points-practice-routine",
    title: "포인트 사이 멘탈 리셋: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "포인트 사이 멘탈 리셋 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "루틴", "집중", "경기 운영", "20분"],
  },
  {
    id: "tennis-mental-reset-between-points-match-application",
    title: "포인트 사이 멘탈 리셋: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "포인트 사이 멘탈 리셋 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "루틴", "집중", "경기 운영", "실제"],
  },
  {
    id: "tennis-mental-reset-between-points-comparison-guide",
    title: "포인트 사이 멘탈 리셋: 초보와 중급자의 기준 차이",
    excerpt:
      "포인트 사이 멘탈 리셋 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "루틴", "집중", "경기 운영", "초보와"],
  },
  {
    id: "tennis-mental-reset-between-points-record-metrics",
    title: "포인트 사이 멘탈 리셋: 기록으로 확인하는 성장 지표",
    excerpt:
      "포인트 사이 멘탈 리셋 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "루틴", "집중", "경기 운영", "기록으로"],
  },
  {
    id: "tennis-mental-reset-between-points-partner-drill",
    title: "포인트 사이 멘탈 리셋: 파트너와 같이 하는 연습법",
    excerpt:
      "포인트 사이 멘탈 리셋 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "루틴", "집중", "경기 운영", "파트너와"],
  },
  {
    id: "tennis-mental-reset-between-points-equipment-setup",
    title: "포인트 사이 멘탈 리셋: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "포인트 사이 멘탈 리셋 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "루틴", "집중", "경기 운영", "장비"],
  },
  {
    id: "tennis-mental-reset-between-points-pressure-situation",
    title: "포인트 사이 멘탈 리셋: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "포인트 사이 멘탈 리셋 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "루틴", "집중", "경기 운영", "긴장되는"],
  },
  {
    id: "tennis-mental-reset-between-points-monthly-review",
    title: "포인트 사이 멘탈 리셋: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "포인트 사이 멘탈 리셋 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "멘탈 트레이닝",
    tags: ["멘탈", "루틴", "집중", "경기 운영", "한"],
  },
  {
    id: "tennis-tiebreak-risk-control-beginner-checklist",
    title: "타이브레이크 리스크 관리: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "타이브레이크 리스크 관리 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["타이브레이크", "리스크 관리", "멘탈", "전술", "경기", "초보가"],
  },
  {
    id: "tennis-tiebreak-risk-control-common-mistakes",
    title: "타이브레이크 리스크 관리: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "타이브레이크 리스크 관리 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["타이브레이크", "리스크 관리", "멘탈", "전술", "경기", "자주"],
  },
  {
    id: "tennis-tiebreak-risk-control-practice-routine",
    title: "타이브레이크 리스크 관리: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "타이브레이크 리스크 관리 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["타이브레이크", "리스크 관리", "멘탈", "전술", "경기", "20분"],
  },
  {
    id: "tennis-tiebreak-risk-control-match-application",
    title: "타이브레이크 리스크 관리: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "타이브레이크 리스크 관리 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["타이브레이크", "리스크 관리", "멘탈", "전술", "경기", "실제"],
  },
  {
    id: "tennis-tiebreak-risk-control-comparison-guide",
    title: "타이브레이크 리스크 관리: 초보와 중급자의 기준 차이",
    excerpt:
      "타이브레이크 리스크 관리 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["타이브레이크", "리스크 관리", "멘탈", "전술", "경기", "초보와"],
  },
  {
    id: "tennis-tiebreak-risk-control-record-metrics",
    title: "타이브레이크 리스크 관리: 기록으로 확인하는 성장 지표",
    excerpt:
      "타이브레이크 리스크 관리 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["타이브레이크", "리스크 관리", "멘탈", "전술", "경기", "기록으로"],
  },
  {
    id: "tennis-tiebreak-risk-control-partner-drill",
    title: "타이브레이크 리스크 관리: 파트너와 같이 하는 연습법",
    excerpt:
      "타이브레이크 리스크 관리 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["타이브레이크", "리스크 관리", "멘탈", "전술", "경기", "파트너와"],
  },
  {
    id: "tennis-tiebreak-risk-control-equipment-setup",
    title: "타이브레이크 리스크 관리: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "타이브레이크 리스크 관리 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["타이브레이크", "리스크 관리", "멘탈", "전술", "경기", "장비"],
  },
  {
    id: "tennis-tiebreak-risk-control-pressure-situation",
    title: "타이브레이크 리스크 관리: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "타이브레이크 리스크 관리 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["타이브레이크", "리스크 관리", "멘탈", "전술", "경기", "긴장되는"],
  },
  {
    id: "tennis-tiebreak-risk-control-monthly-review",
    title: "타이브레이크 리스크 관리: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "타이브레이크 리스크 관리 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "경기 분석",
    tags: ["타이브레이크", "리스크 관리", "멘탈", "전술", "경기", "한"],
  },
  {
    id: "tennis-moonball-opponent-plan-beginner-checklist",
    title: "문볼 상대 운영: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "문볼 상대 운영 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["문볼", "상대 분석", "랠리", "전술", "초보가"],
  },
  {
    id: "tennis-moonball-opponent-plan-common-mistakes",
    title: "문볼 상대 운영: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "문볼 상대 운영 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["문볼", "상대 분석", "랠리", "전술", "자주"],
  },
  {
    id: "tennis-moonball-opponent-plan-practice-routine",
    title: "문볼 상대 운영: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "문볼 상대 운영 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["문볼", "상대 분석", "랠리", "전술", "20분"],
  },
  {
    id: "tennis-moonball-opponent-plan-match-application",
    title: "문볼 상대 운영: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "문볼 상대 운영 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["문볼", "상대 분석", "랠리", "전술", "실제"],
  },
  {
    id: "tennis-moonball-opponent-plan-comparison-guide",
    title: "문볼 상대 운영: 초보와 중급자의 기준 차이",
    excerpt:
      "문볼 상대 운영 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["문볼", "상대 분석", "랠리", "전술", "초보와"],
  },
  {
    id: "tennis-moonball-opponent-plan-record-metrics",
    title: "문볼 상대 운영: 기록으로 확인하는 성장 지표",
    excerpt:
      "문볼 상대 운영 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["문볼", "상대 분석", "랠리", "전술", "기록으로"],
  },
  {
    id: "tennis-moonball-opponent-plan-partner-drill",
    title: "문볼 상대 운영: 파트너와 같이 하는 연습법",
    excerpt:
      "문볼 상대 운영 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["문볼", "상대 분석", "랠리", "전술", "파트너와"],
  },
  {
    id: "tennis-moonball-opponent-plan-equipment-setup",
    title: "문볼 상대 운영: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "문볼 상대 운영 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["문볼", "상대 분석", "랠리", "전술", "장비"],
  },
  {
    id: "tennis-moonball-opponent-plan-pressure-situation",
    title: "문볼 상대 운영: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "문볼 상대 운영 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["문볼", "상대 분석", "랠리", "전술", "긴장되는"],
  },
  {
    id: "tennis-moonball-opponent-plan-monthly-review",
    title: "문볼 상대 운영: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "문볼 상대 운영 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "전술 가이드",
    tags: ["문볼", "상대 분석", "랠리", "전술", "한"],
  },
  {
    id: "tennis-windy-court-adjustment-beginner-checklist",
    title: "바람 부는 코트 적응: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "바람 부는 코트 적응 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["바람", "코트 환경", "경기 운영", "전술", "환경", "초보가"],
  },
  {
    id: "tennis-windy-court-adjustment-common-mistakes",
    title: "바람 부는 코트 적응: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "바람 부는 코트 적응 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["바람", "코트 환경", "경기 운영", "전술", "환경", "자주"],
  },
  {
    id: "tennis-windy-court-adjustment-practice-routine",
    title: "바람 부는 코트 적응: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "바람 부는 코트 적응 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["바람", "코트 환경", "경기 운영", "전술", "환경", "20분"],
  },
  {
    id: "tennis-windy-court-adjustment-match-application",
    title: "바람 부는 코트 적응: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "바람 부는 코트 적응 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["바람", "코트 환경", "경기 운영", "전술", "환경", "실제"],
  },
  {
    id: "tennis-windy-court-adjustment-comparison-guide",
    title: "바람 부는 코트 적응: 초보와 중급자의 기준 차이",
    excerpt:
      "바람 부는 코트 적응 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["바람", "코트 환경", "경기 운영", "전술", "환경", "초보와"],
  },
  {
    id: "tennis-windy-court-adjustment-record-metrics",
    title: "바람 부는 코트 적응: 기록으로 확인하는 성장 지표",
    excerpt:
      "바람 부는 코트 적응 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["바람", "코트 환경", "경기 운영", "전술", "환경", "기록으로"],
  },
  {
    id: "tennis-windy-court-adjustment-partner-drill",
    title: "바람 부는 코트 적응: 파트너와 같이 하는 연습법",
    excerpt:
      "바람 부는 코트 적응 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["바람", "코트 환경", "경기 운영", "전술", "환경", "파트너와"],
  },
  {
    id: "tennis-windy-court-adjustment-equipment-setup",
    title: "바람 부는 코트 적응: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "바람 부는 코트 적응 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["바람", "코트 환경", "경기 운영", "전술", "환경", "장비"],
  },
  {
    id: "tennis-windy-court-adjustment-pressure-situation",
    title: "바람 부는 코트 적응: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "바람 부는 코트 적응 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["바람", "코트 환경", "경기 운영", "전술", "환경", "긴장되는"],
  },
  {
    id: "tennis-windy-court-adjustment-monthly-review",
    title: "바람 부는 코트 적응: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "바람 부는 코트 적응 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["바람", "코트 환경", "경기 운영", "전술", "환경", "한"],
  },
  {
    id: "tennis-clay-court-adjustment-beginner-checklist",
    title: "클레이 코트 적응: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "클레이 코트 적응 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["클레이코트", "풋워크", "코트 적응", "전술", "코트", "초보가"],
  },
  {
    id: "tennis-clay-court-adjustment-common-mistakes",
    title: "클레이 코트 적응: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "클레이 코트 적응 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["클레이코트", "풋워크", "코트 적응", "전술", "코트", "자주"],
  },
  {
    id: "tennis-clay-court-adjustment-practice-routine",
    title: "클레이 코트 적응: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "클레이 코트 적응 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["클레이코트", "풋워크", "코트 적응", "전술", "코트", "20분"],
  },
  {
    id: "tennis-clay-court-adjustment-match-application",
    title: "클레이 코트 적응: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "클레이 코트 적응 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["클레이코트", "풋워크", "코트 적응", "전술", "코트", "실제"],
  },
  {
    id: "tennis-clay-court-adjustment-comparison-guide",
    title: "클레이 코트 적응: 초보와 중급자의 기준 차이",
    excerpt:
      "클레이 코트 적응 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["클레이코트", "풋워크", "코트 적응", "전술", "코트", "초보와"],
  },
  {
    id: "tennis-clay-court-adjustment-record-metrics",
    title: "클레이 코트 적응: 기록으로 확인하는 성장 지표",
    excerpt:
      "클레이 코트 적응 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["클레이코트", "풋워크", "코트 적응", "전술", "코트", "기록으로"],
  },
  {
    id: "tennis-clay-court-adjustment-partner-drill",
    title: "클레이 코트 적응: 파트너와 같이 하는 연습법",
    excerpt:
      "클레이 코트 적응 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["클레이코트", "풋워크", "코트 적응", "전술", "코트", "파트너와"],
  },
  {
    id: "tennis-clay-court-adjustment-equipment-setup",
    title: "클레이 코트 적응: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "클레이 코트 적응 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["클레이코트", "풋워크", "코트 적응", "전술", "코트", "장비"],
  },
  {
    id: "tennis-clay-court-adjustment-pressure-situation",
    title: "클레이 코트 적응: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "클레이 코트 적응 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["클레이코트", "풋워크", "코트 적응", "전술", "코트", "긴장되는"],
  },
  {
    id: "tennis-clay-court-adjustment-monthly-review",
    title: "클레이 코트 적응: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "클레이 코트 적응 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "상황별 팁",
    tags: ["클레이코트", "풋워크", "코트 적응", "전술", "코트", "한"],
  },
  {
    id: "tennis-hardcourt-recovery-plan-beginner-checklist",
    title: "하드코트 회복 관리: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "하드코트 회복 관리 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["하드코트", "회복", "무릎", "테니스화", "코트", "초보가"],
  },
  {
    id: "tennis-hardcourt-recovery-plan-common-mistakes",
    title: "하드코트 회복 관리: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "하드코트 회복 관리 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["하드코트", "회복", "무릎", "테니스화", "코트", "자주"],
  },
  {
    id: "tennis-hardcourt-recovery-plan-practice-routine",
    title: "하드코트 회복 관리: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "하드코트 회복 관리 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["하드코트", "회복", "무릎", "테니스화", "코트", "20분"],
  },
  {
    id: "tennis-hardcourt-recovery-plan-match-application",
    title: "하드코트 회복 관리: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "하드코트 회복 관리 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["하드코트", "회복", "무릎", "테니스화", "코트", "실제"],
  },
  {
    id: "tennis-hardcourt-recovery-plan-comparison-guide",
    title: "하드코트 회복 관리: 초보와 중급자의 기준 차이",
    excerpt:
      "하드코트 회복 관리 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["하드코트", "회복", "무릎", "테니스화", "코트", "초보와"],
  },
  {
    id: "tennis-hardcourt-recovery-plan-record-metrics",
    title: "하드코트 회복 관리: 기록으로 확인하는 성장 지표",
    excerpt:
      "하드코트 회복 관리 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["하드코트", "회복", "무릎", "테니스화", "코트", "기록으로"],
  },
  {
    id: "tennis-hardcourt-recovery-plan-partner-drill",
    title: "하드코트 회복 관리: 파트너와 같이 하는 연습법",
    excerpt:
      "하드코트 회복 관리 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["하드코트", "회복", "무릎", "테니스화", "코트", "파트너와"],
  },
  {
    id: "tennis-hardcourt-recovery-plan-equipment-setup",
    title: "하드코트 회복 관리: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "하드코트 회복 관리 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["하드코트", "회복", "무릎", "테니스화", "코트", "장비"],
  },
  {
    id: "tennis-hardcourt-recovery-plan-pressure-situation",
    title: "하드코트 회복 관리: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "하드코트 회복 관리 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["하드코트", "회복", "무릎", "테니스화", "코트", "긴장되는"],
  },
  {
    id: "tennis-hardcourt-recovery-plan-monthly-review",
    title: "하드코트 회복 관리: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "하드코트 회복 관리 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "건강 & 피트니스",
    tags: ["하드코트", "회복", "무릎", "테니스화", "코트", "한"],
  },
  {
    id: "tennis-video-review-focus-beginner-checklist",
    title: "영상 복습 포인트: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "영상 복습 포인트 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["영상 복습", "스윙 분석", "훈련", "기록", "초보가"],
  },
  {
    id: "tennis-video-review-focus-common-mistakes",
    title: "영상 복습 포인트: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "영상 복습 포인트 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["영상 복습", "스윙 분석", "훈련", "기록", "자주"],
  },
  {
    id: "tennis-video-review-focus-practice-routine",
    title: "영상 복습 포인트: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "영상 복습 포인트 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["영상 복습", "스윙 분석", "훈련", "기록", "20분"],
  },
  {
    id: "tennis-video-review-focus-match-application",
    title: "영상 복습 포인트: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "영상 복습 포인트 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["영상 복습", "스윙 분석", "훈련", "기록", "실제"],
  },
  {
    id: "tennis-video-review-focus-comparison-guide",
    title: "영상 복습 포인트: 초보와 중급자의 기준 차이",
    excerpt:
      "영상 복습 포인트 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["영상 복습", "스윙 분석", "훈련", "기록", "초보와"],
  },
  {
    id: "tennis-video-review-focus-record-metrics",
    title: "영상 복습 포인트: 기록으로 확인하는 성장 지표",
    excerpt:
      "영상 복습 포인트 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["영상 복습", "스윙 분석", "훈련", "기록", "기록으로"],
  },
  {
    id: "tennis-video-review-focus-partner-drill",
    title: "영상 복습 포인트: 파트너와 같이 하는 연습법",
    excerpt:
      "영상 복습 포인트 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["영상 복습", "스윙 분석", "훈련", "기록", "파트너와"],
  },
  {
    id: "tennis-video-review-focus-equipment-setup",
    title: "영상 복습 포인트: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "영상 복습 포인트 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["영상 복습", "스윙 분석", "훈련", "기록", "장비"],
  },
  {
    id: "tennis-video-review-focus-pressure-situation",
    title: "영상 복습 포인트: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "영상 복습 포인트 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["영상 복습", "스윙 분석", "훈련", "기록", "긴장되는"],
  },
  {
    id: "tennis-video-review-focus-monthly-review",
    title: "영상 복습 포인트: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "영상 복습 포인트 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["영상 복습", "스윙 분석", "훈련", "기록", "한"],
  },
  {
    id: "tennis-lesson-homework-design-beginner-checklist",
    title: "레슨 숙제 설계: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "레슨 숙제 설계 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["레슨", "복습", "훈련 루틴", "초보", "초보가"],
  },
  {
    id: "tennis-lesson-homework-design-common-mistakes",
    title: "레슨 숙제 설계: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "레슨 숙제 설계 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["레슨", "복습", "훈련 루틴", "초보", "자주"],
  },
  {
    id: "tennis-lesson-homework-design-practice-routine",
    title: "레슨 숙제 설계: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "레슨 숙제 설계 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["레슨", "복습", "훈련 루틴", "초보", "20분"],
  },
  {
    id: "tennis-lesson-homework-design-match-application",
    title: "레슨 숙제 설계: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "레슨 숙제 설계 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["레슨", "복습", "훈련 루틴", "초보", "실제"],
  },
  {
    id: "tennis-lesson-homework-design-comparison-guide",
    title: "레슨 숙제 설계: 초보와 중급자의 기준 차이",
    excerpt:
      "레슨 숙제 설계 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["레슨", "복습", "훈련 루틴", "초보", "초보와"],
  },
  {
    id: "tennis-lesson-homework-design-record-metrics",
    title: "레슨 숙제 설계: 기록으로 확인하는 성장 지표",
    excerpt:
      "레슨 숙제 설계 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["레슨", "복습", "훈련 루틴", "초보", "기록으로"],
  },
  {
    id: "tennis-lesson-homework-design-partner-drill",
    title: "레슨 숙제 설계: 파트너와 같이 하는 연습법",
    excerpt:
      "레슨 숙제 설계 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["레슨", "복습", "훈련 루틴", "초보", "파트너와"],
  },
  {
    id: "tennis-lesson-homework-design-equipment-setup",
    title: "레슨 숙제 설계: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "레슨 숙제 설계 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["레슨", "복습", "훈련 루틴", "초보", "장비"],
  },
  {
    id: "tennis-lesson-homework-design-pressure-situation",
    title: "레슨 숙제 설계: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "레슨 숙제 설계 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["레슨", "복습", "훈련 루틴", "초보", "긴장되는"],
  },
  {
    id: "tennis-lesson-homework-design-monthly-review",
    title: "레슨 숙제 설계: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "레슨 숙제 설계 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "입문 가이드",
    tags: ["레슨", "복습", "훈련 루틴", "초보", "한"],
  },
  {
    id: "tennis-junior-senior-session-plan-beginner-checklist",
    title: "주니어·시니어 세션 조절: 초보가 먼저 확인할 체크리스트",
    excerpt:
      "주니어·시니어 세션 조절 주제를 처음부터 많이 바꾸기보다 한 가지 기준을 고정하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["주니어", "시니어", "훈련량", "안전", "훈련", "초보가"],
  },
  {
    id: "tennis-junior-senior-session-plan-common-mistakes",
    title: "주니어·시니어 세션 조절: 자주 나오는 실수와 바로잡는 순서",
    excerpt:
      "주니어·시니어 세션 조절 주제를 반복 실수가 생기는 원인을 장면별로 나누는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["주니어", "시니어", "훈련량", "안전", "훈련", "자주"],
  },
  {
    id: "tennis-junior-senior-session-plan-practice-routine",
    title: "주니어·시니어 세션 조절: 20분 연습 루틴으로 몸에 남기는 법",
    excerpt:
      "주니어·시니어 세션 조절 주제를 짧은 시간에 반복 가능한 루틴을 만드는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["주니어", "시니어", "훈련량", "안전", "훈련", "20분"],
  },
  {
    id: "tennis-junior-senior-session-plan-match-application",
    title: "주니어·시니어 세션 조절: 실제 경기에서 적용하는 판단 기준",
    excerpt:
      "주니어·시니어 세션 조절 주제를 점수 상황에서 선택지를 줄이는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["주니어", "시니어", "훈련량", "안전", "훈련", "실제"],
  },
  {
    id: "tennis-junior-senior-session-plan-comparison-guide",
    title: "주니어·시니어 세션 조절: 초보와 중급자의 기준 차이",
    excerpt:
      "주니어·시니어 세션 조절 주제를 실력 단계별 우선순위를 다르게 잡는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["주니어", "시니어", "훈련량", "안전", "훈련", "초보와"],
  },
  {
    id: "tennis-junior-senior-session-plan-record-metrics",
    title: "주니어·시니어 세션 조절: 기록으로 확인하는 성장 지표",
    excerpt:
      "주니어·시니어 세션 조절 주제를 감이 아니라 숫자로 변화를 확인하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["주니어", "시니어", "훈련량", "안전", "훈련", "기록으로"],
  },
  {
    id: "tennis-junior-senior-session-plan-partner-drill",
    title: "주니어·시니어 세션 조절: 파트너와 같이 하는 연습법",
    excerpt:
      "주니어·시니어 세션 조절 주제를 혼자 고치기 어려운 장면을 파트너와 맞추는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["주니어", "시니어", "훈련량", "안전", "훈련", "파트너와"],
  },
  {
    id: "tennis-junior-senior-session-plan-equipment-setup",
    title: "주니어·시니어 세션 조절: 장비 세팅과 함께 점검할 부분",
    excerpt:
      "주니어·시니어 세션 조절 주제를 기술 문제와 장비 문제를 분리하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["주니어", "시니어", "훈련량", "안전", "훈련", "장비"],
  },
  {
    id: "tennis-junior-senior-session-plan-pressure-situation",
    title: "주니어·시니어 세션 조절: 긴장되는 포인트에서 무너지지 않는 기준",
    excerpt:
      "주니어·시니어 세션 조절 주제를 압박 상황에서 단순한 선택을 유지하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["주니어", "시니어", "훈련량", "안전", "훈련", "긴장되는"],
  },
  {
    id: "tennis-junior-senior-session-plan-monthly-review",
    title: "주니어·시니어 세션 조절: 한 달 뒤 다시 점검할 항목",
    excerpt:
      "주니어·시니어 세션 조절 주제를 연습 결과를 다음 달 계획으로 연결하는 방법 관점에서 정리했습니다. 동호회 경기와 레슨 복습에 바로 적용할 수 있도록 기준, 실수, 연습 루틴을 나눴습니다.",
    category: "훈련 가이드",
    tags: ["주니어", "시니어", "훈련량", "안전", "훈련", "한"],
  },
];

const SCHEDULE_START_TIME = Date.parse("2026-05-03T09:00:00+09:00");
const SCHEDULE_INTERVAL_MS = 5 * 60 * 60 * 1000;
const SEOUL_OFFSET_MS = 9 * 60 * 60 * 1000;

function formatScheduledPublishTime(index) {
  const seoulDate = new Date(
    SCHEDULE_START_TIME + index * SCHEDULE_INTERVAL_MS + SEOUL_OFFSET_MS,
  );

  return `${seoulDate.toISOString().slice(0, 19)}+09:00`;
}

const scheduledBlogPosts = [
  ...scheduledPostSeeds,
  ...scheduledPostSeedsPart2,
  ...scheduledPostSeedsPart3,
].map((post, index) => {
  const isGuide = post.category.includes("가이드");
  const scheduledAt = formatScheduledPublishTime(index);

  return {
    id: post.id,
    slug: post.id,
    tags: post.tags,
    title: post.title,
    excerpt: post.excerpt,
    badge: isGuide ? "예약 가이드" : "예약 글",
    category: post.category,
    date: scheduledAt.slice(0, 10),
    readTime: "8분",
    scheduledAt,
    badgeColor: isGuide
      ? SCHEDULED_POST_BADGE_COLORS.guide
      : SCHEDULED_POST_BADGE_COLORS.blog,
    categoryColor:
      SCHEDULED_CATEGORY_COLORS[post.category] ||
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  };
});

const part16PostOverrideMap = new Map(
  articleWriterPart16PostOverrides.map((post) => [post.slug, post]),
);
const part17PostOverrideMap = new Map(
  articleWriterPart17PostOverrides.map((post) => [post.slug, post]),
);
const part18PostOverrideMap = new Map(
  articleWriterPart18PostOverrides.map((post) => [post.slug, post]),
);
const part19PostOverrideMap = new Map(
  articleWriterPart19PostOverrides.map((post) => [post.slug, post]),
);
const part20PostOverrideMap = new Map(
  articleWriterPart20PostOverrides.map((post) => [post.slug, post]),
);
const part21PostOverrideMap = new Map(
  articleWriterPart21PostOverrides.map((post) => [post.slug, post]),
);
const part22PostOverrideMap = new Map(
  articleWriterPart22PostOverrides.map((post) => [post.slug, post]),
);
const part23PostOverrideMap = new Map(
  articleWriterPart23PostOverrides.map((post) => [post.slug, post]),
);
const part24PostOverrideMap = new Map(
  articleWriterPart24PostOverrides.map((post) => [post.slug, post]),
);
const part25PostOverrideMap = new Map(
  articleWriterPart25PostOverrides.map((post) => [post.slug, post]),
);
const part26PostOverrideMap = new Map(
  articleWriterPart26PostOverrides.map((post) => [post.slug, post]),
);

function applyPostOverride(post) {
  const override =
    part26PostOverrideMap.get(post.slug) ||
    part25PostOverrideMap.get(post.slug) ||
    part24PostOverrideMap.get(post.slug) ||
    part23PostOverrideMap.get(post.slug) ||
    part22PostOverrideMap.get(post.slug) ||
    part21PostOverrideMap.get(post.slug) ||
    part20PostOverrideMap.get(post.slug) ||
    part19PostOverrideMap.get(post.slug) ||
    part18PostOverrideMap.get(post.slug) ||
    part17PostOverrideMap.get(post.slug) ||
    part16PostOverrideMap.get(post.slug);
  return override ? { ...post, ...override } : post;
}

/** @type {import("@/types/blog").BlogPostData[]} */
export const allBlogPosts = [
  {
    "id": "tennis-string-breaking-solution",
    "slug": "tennis-string-breaking-solution",
    "tags": ["스트링 절단","스트링","관리","장비 관리"],
    "title": "스트링 자주 끊기는 이유와 해결책",
    "excerpt": "스트링 자주 끊기는 이유와 해결책에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    "badge": "최신 글",
    "category": "장비 가이드",
    "date": "2026-06-03",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-beginner-equipment-guide",
    "slug": "tennis-beginner-equipment-guide",
    "tags": ["입문 장비","초보자","라켓 추천","예산별"],
    "title": "테니스 입문 장비 완전 가이드 — 예산별 추천",
    "excerpt": "테니스 입문 장비 완전 가이드 — 예산별 추천에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    "badge": "최신 글",
    "category": "초보자 가이드",
    "date": "2026-06-03",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-indoor-court-tips",
    "slug": "tennis-indoor-court-tips",
    "tags": ["실내 코트","바운드","조명","환경 적응"],
    "title": "실내 테니스 코트 팁 — 바운드·조명·적응 전략",
    "excerpt": "실내 테니스 코트 팁 — 바운드·조명·적응 전략에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    "badge": "최신 글",
    "category": "전술 가이드",
    "date": "2026-06-02",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-opponent-analysis-guide",
    "slug": "tennis-opponent-analysis-guide",
    "tags": ["상대 분석","약점 공략","전술","경기 분석"],
    "title": "상대 약점 파악과 공략법 — 경기 중 분석 기술",
    "excerpt": "상대 약점 파악과 공략법 — 경기 중 분석 기술에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    "badge": "최신 글",
    "category": "전술 가이드",
    "date": "2026-06-02",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-mental-toughness-building",
    "slug": "tennis-mental-toughness-building",
    "tags": ["멘탈 강화","자기 대화","집중력","루틴"],
    "title": "테니스 멘탈 강화 훈련 — 루틴·자기 대화·집중",
    "excerpt": "테니스 멘탈 강화 훈련 — 루틴·자기 대화·집중에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    "badge": "최신 글",
    "category": "멘탈 트레이닝",
    "date": "2026-06-01",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-tournament-preparation",
    "slug": "tennis-tournament-preparation",
    "tags": ["대회 준비","토너먼트","경기 준비","컨디션"],
    "title": "테니스 대회 준비 완전 가이드 — D-30·D-7·당일",
    "excerpt": "테니스 대회 준비 완전 가이드 — D-30·D-7·당일에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    "badge": "최신 글",
    "category": "전략 가이드",
    "date": "2026-06-01",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  ...articleWriterTitle100Posts,
  ...articleWriterPart12Posts,
  ...articleWriterBlogPosts,
  {
    "id": "tennis-club-selection-guide",
    "slug": "tennis-club-selection-guide",
    "tags": ["테니스 클럽","동호회","클럽 선택","테니스 문화"],
    "title": "테니스 클럽 선택법 | 수준·위치·시설 체크리스트",
    "excerpt": "테니스 클럽 선택 기준을 수준, 거리, 코트 상태, 회비, 운영 문화로 나눠 점검합니다.",
    "badge": "최신 글",
    "category": "테니스 문화",
    "date": "2026-05-26",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-coach-selection-guide",
    "slug": "tennis-coach-selection-guide",
    "tags": ["코치 선택","테니스 레슨","코치","레슨 팁"],
    "title": "테니스 코치 선택 가이드 | 레벨·목적별 기준",
    "excerpt": "테니스 코치 선택 기준을 초보, 중급, 상급, 비용, 자격, 소통 방식으로 점검합니다.",
    "badge": "최신 글",
    "category": "테니스 문화",
    "date": "2026-05-26",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-backhand-crosscourt",
    "slug": "tennis-backhand-crosscourt",
    "tags": ["백핸드","크로스코트","각도","회전"],
    "title": "백핸드 크로스코트 | 각도·회전·깊이 기준",
    "excerpt": "백핸드 크로스코트 성공률을 높이는 각도, 회전, 깊이, 풋워크와 실전 드릴 기준을 정리했습니다.",
    "badge": "최신 글",
    "category": "기술 가이드",
    "date": "2026-05-25",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-forehand-down-the-line",
    "slug": "tennis-forehand-down-the-line",
    "tags": ["다운더라인","포핸드","코스","공격"],
    "title": "포핸드 다운더라인 | 코스·타이밍·리스크 기준",
    "excerpt": "포핸드 다운더라인 성공률을 높이는 코스 선택, 타이밍, 리스크 관리와 실전 드릴을 정리했습니다.",
    "badge": "최신 글",
    "category": "기술 가이드",
    "date": "2026-05-25",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-second-serve-kick-topspin",
    "slug": "tennis-second-serve-kick-topspin",
    "tags": ["세컨드 서브","킥서브","탑스핀 서브","더블폴트"],
    "title": "세컨드 서브 킥·탑스핀 | 더블폴트 줄이는 기준",
    "excerpt": "세컨드 서브 킥·탑스핀 성공률을 높이는 토스, 스핀, 코스, 더블폴트 방지 드릴을 정리했습니다.",
    "badge": "최신 글",
    "category": "기술 가이드",
    "date": "2026-05-24",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-backhand-slice-low-ball",
    "slug": "tennis-backhand-slice-low-ball",
    "tags": ["낮은 공 슬라이스 백핸드","슬라이스 백핸드","낮은 공 처리","어프로치"],
    "title": "낮은 공 슬라이스 백핸드 | 어프로치·방어 기준",
    "excerpt": "낮은 공 슬라이스 백핸드 성공률을 높이는 라켓 면, 타점, 어프로치와 방어 전환 기준을 정리했습니다.",
    "badge": "최신 글",
    "category": "기술 가이드",
    "date": "2026-05-24",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-forehand-inside-in-guide",
    "slug": "tennis-forehand-inside-in-guide",
    "tags": ["인사이드인 포핸드","포핸드 코스","포핸드 위너","테니스 전술"],
    "title": "인사이드인 포핸드 | 코스 선택·타점·리스크 기준",
    "excerpt": "인사이드인 포핸드 성공률을 높이는 코스 선택, 앞쪽 타점, 풋워크, 실전 리스크 관리 기준을 정리했습니다.",
    "badge": "최신 글",
    "category": "기술 가이드",
    "date": "2026-05-23",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-slump-recovery-guide",
    "slug": "tennis-slump-recovery-guide",
    "tags": ["테니스 슬럼프","슬럼프 극복","테니스 멘탈","회복 루틴"],
    "title": "테니스 슬럼프 극복 | 원인 진단·회복 루틴",
    "excerpt": "테니스 슬럼프 극복을 위한 원인 진단, 훈련량 조절, 멘탈 리셋, 2주 회복 루틴 기준을 정리했습니다.",
    "badge": "최신 글",
    "category": "멘탈 트레이닝",
    "date": "2026-05-23",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-match-flow-reading",
    "slug": "tennis-match-flow-reading",
    "tags": ["테니스 경기 흐름","모멘텀","전환점","전술 변화"],
    "title": "테니스 경기 흐름 읽기 | 모멘텀·전환점·전술 변화",
    "excerpt": "테니스 경기 흐름을 읽는 모멘텀 신호, 전환점 판단, 전술 변화와 포인트 사이 루틴을 정리했습니다.",
    "badge": "최신 글",
    "category": "전술 가이드",
    "date": "2026-05-22",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-winner-production-guide",
    "slug": "tennis-winner-production-guide",
    "tags": ["테니스 위너","코스 공략","찬스볼","공격 타이밍"],
    "title": "테니스 위너 늘리기 | 코스 공략·타이밍·찬스볼 기준",
    "excerpt": "테니스 위너를 늘리는 코스 공략, 타이밍, 찬스볼 판단, 리스크 관리와 실전 드릴을 정리했습니다.",
    "badge": "최신 글",
    "category": "기술 가이드",
    "date": "2026-05-22",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-error-reduction-guide",
    "slug": "tennis-error-reduction-guide",
    "tags": ["언포스드 에러","테니스 실수 줄이기","에러 교정","경기 안정성"],
    "title": "언포스드 에러 줄이기 | 원인 분석·교정 루틴",
    "excerpt": "테니스 언포스드 에러를 줄이는 원인 분석, 기술·멘탈·전술 교정법과 경기 중 안정 루틴을 정리했습니다.",
    "badge": "최신 글",
    "category": "기술 가이드",
    "date": "2026-05-21",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-baseline-rally-strategy",
    "slug": "tennis-baseline-rally-strategy",
    "tags": ["베이스라인 랠리","테니스 랠리 전략","깊이 조절","템포 변화"],
    "title": "베이스라인 랠리 전략 | 깊이·방향·템포 변화",
    "excerpt": "테니스 베이스라인 랠리에서 깊이, 방향, 템포를 바꾸는 기준과 실전 패턴, 연습 드릴을 정리했습니다.",
    "badge": "최신 글",
    "category": "전술 가이드",
    "date": "2026-05-21",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-ntrp-35-to-40-guide",
    "slug": "tennis-ntrp-35-to-40-guide",
    "tags": ["NTRP 3.5","NTRP 4.0","테니스 레벨업","전술 전환"],
    "title": "NTRP 3.5→4.0 레벨업 | 전술 전환 가이드",
    "excerpt": "NTRP 3.5에서 4.0으로 올라가기 위한 서브+1, 리턴, 랠리 전술과 8주 드릴 기준입니다.",
    "badge": "최신 글",
    "category": "레벨업 가이드",
    "date": "2026-05-20",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-ntrp-30-to-35-guide",
    "slug": "tennis-ntrp-30-to-35-guide",
    "tags": ["NTRP 3.0","NTRP 3.5","테니스 레벨업","중급자 테니스"],
    "title": "NTRP 3.0→3.5 레벨업 | 중급 진입 기준",
    "excerpt": "NTRP 3.0에서 3.5로 올라가기 위한 일관성, 서브·리턴, 6주 훈련 기준입니다.",
    "badge": "최신 글",
    "category": "레벨업 가이드",
    "date": "2026-05-20",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-ntrp-25-to-30-guide",
    "slug": "tennis-ntrp-25-to-30-guide",
    "tags": ["NTRP 2.5","NTRP 3.0","테니스 초급","초급자 테니스"],
    "title": "NTRP 2.5→3.0 레벨업 | 초급 탈출 기준",
    "excerpt": "NTRP 2.5에서 3.0으로 올라가기 위한 랠리, 서브, 풋워크, 경기 경험 기준입니다.",
    "badge": "최신 글",
    "category": "레벨업 가이드",
    "date": "2026-05-19",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-night-match-tips",
    "slug": "tennis-night-match-tips",
    "tags": ["야간 테니스","야간 경기","조명 적응","테니스 집중력"],
    "title": "야간 테니스 경기 팁 | 시야·조명 적응 전략",
    "excerpt": "야간 테니스 경기에서 시야, 조명, 집중력, 준비 루틴을 조정하는 실전 팁입니다.",
    "badge": "최신 글",
    "category": "전술 가이드",
    "date": "2026-05-19",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-windy-day-strategy",
    "slug": "tennis-windy-day-strategy",
    "tags": ["바람 부는 날 테니스","테니스 바람 전략","탑스핀","서브 조정"],
    "title": "바람 부는 날 테니스 전략 | 탑스핀·로브·서브 조정",
    "excerpt": "바람 부는 날 테니스에서 맞바람, 뒷바람, 옆바람별 샷 선택과 서브 조정법을 정리했습니다.",
    "badge": "최신 글",
    "category": "전술 가이드",
    "date": "2026-05-18",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-hot-weather-performance",
    "slug": "tennis-hot-weather-performance",
    "tags": ["더운 날 테니스","여름 테니스","수분 보충","페이스 조절"],
    "title": "더운 날 테니스 컨디션 관리 | 수분·페이스 조절",
    "excerpt": "더운 날 테니스에서 탈수와 열피로를 줄이고 경기력을 유지하는 수분·페이스 기준입니다.",
    "badge": "최신 글",
    "category": "건강 가이드",
    "date": "2026-05-18",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    "id": "tennis-rainy-weather-tips",
    "slug": "tennis-rainy-weather-tips",
    "tags": ["비 오는 날 테니스","우천 테니스","미끄럼 방지","그립 관리"],
    "title": "비 오는 날 테니스 팁 | 미끄럼·그립·전술 조정",
    "excerpt": "비 오는 날 테니스에서 경기 여부 판단, 미끄럼 방지, 젖은 그립 관리와 전술 조정을 정리했습니다.",
    "badge": "최신 글",
    "category": "전술 가이드",
    "date": "2026-05-17",
    "readTime": "10분",
    "badgeColor": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "categoryColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    id: "tennis-etiquette-complete-guide",
    slug: "tennis-etiquette-complete-guide",
    tags: ["테니스 에티켓", "코트 매너", "규칙", "테니스 문화"],
    title: "테니스 에티켓 완전 가이드 — 코트 매너·규칙",
    excerpt:
      "테니스 에티켓 완전 가이드 — 코트 매너·규칙에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "테니스 문화",
    date: "2026-05-17",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-children-beginner-guide",
    slug: "tennis-children-beginner-guide",
    tags: ["어린이 테니스", "주니어", "입문", "나이별 훈련"],
    title: "어린이 테니스 입문 — 나이별 훈련과 장비 선택",
    excerpt:
      "어린이 테니스 입문 — 나이별 훈련과 장비 선택에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "초보자 가이드",
    date: "2026-05-16",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-women-beginner-guide",
    slug: "tennis-women-beginner-guide",
    tags: ["여성 테니스", "입문", "라켓 선택", "기초 기술"],
    title: "여성 테니스 입문 가이드 — 라켓 선택·기초 기술",
    excerpt:
      "여성 테니스 입문 가이드 — 라켓 선택·기초 기술에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "초보자 가이드",
    date: "2026-05-16",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-senior-guide",
    slug: "tennis-senior-guide",
    tags: ["시니어 테니스", "50대 테니스", "부상 예방", "페이스 조절"],
    title: "시니어 테니스 완전 가이드 — 부상 예방·페이스 조절",
    excerpt:
      "시니어 테니스 완전 가이드 — 부상 예방·페이스 조절에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "시니어 가이드",
    date: "2026-05-15",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-mixed-doubles-strategy",
    slug: "tennis-mixed-doubles-strategy",
    tags: ["혼합복식", "복식 전략", "포메이션", "역할 분담"],
    title: "혼합복식 전략 완전 가이드 — 포메이션·역할 분담",
    excerpt:
      "혼합복식 전략 완전 가이드 — 포메이션·역할 분담에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "복식 전략",
    date: "2026-05-15",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-cooldown-routine-guide",
    slug: "tennis-cooldown-routine-guide",
    tags: ["쿨다운", "정적 스트레칭", "근육 이완", "회복"],
    title: "테니스 쿨다운 루틴 — 근육 이완·정적 스트레칭",
    excerpt:
      "테니스 쿨다운 루틴 — 근육 이완·정적 스트레칭에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "훈련 가이드",
    date: "2026-05-14",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-warmup-routine-guide",
    slug: "tennis-warmup-routine-guide",
    tags: ["준비운동", "워밍업", "동적 스트레칭", "활성화"],
    title: "테니스 준비운동 완전 루틴 — 동적 스트레칭·활성화",
    excerpt:
      "테니스 준비운동 완전 루틴 — 동적 스트레칭·활성화에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "훈련 가이드",
    date: "2026-05-14",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-wrist-injury-prevention",
    slug: "tennis-wrist-injury-prevention",
    tags: ["손목 부상", "부상 예방", "손목 보호", "테니스 건강"],
    title: "테니스 손목 부상 예방 — 스윙·장비·보호대",
    excerpt:
      "테니스 손목 부상 예방 — 스윙·장비·보호대에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "부상 예방",
    date: "2026-05-13",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-ankle-injury-prevention",
    slug: "tennis-ankle-injury-prevention",
    tags: ["발목 부상", "테이핑", "부상 예방", "테니스 건강"],
    title: "테니스 발목 부상 예방 — 테이핑·강화 운동·신발",
    excerpt:
      "테니스 발목 부상 예방 — 테이핑·강화 운동·신발에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "부상 예방",
    date: "2026-05-13",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  ...scheduledBlogPosts,
  {
    id: "tennis-elbow-treatment-guide",
    slug: "tennis-elbow-treatment-guide",
    tags: ["테니스 엘보", "팔꿈치 통증", "재활", "부상 치료"],
    title: "테니스 엘보 치료와 예방 — 통증 원인과 재활",
    excerpt:
      "테니스 엘보 치료와 예방 — 통증 원인과 재활에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "부상 예방",
    date: "2026-05-12",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-string-pattern-16x19-vs-18x20",
    slug: "tennis-string-pattern-16x19-vs-18x20",
    tags: ["스트링 패턴", "16x19", "18x20", "라켓 선택", "장비"],
    title: "스트링 패턴 16x19 vs 18x20 — 차이점과 선택법",
    excerpt:
      "스트링 패턴 16x19 vs 18x20 — 차이점과 선택법에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "장비 가이드",
    date: "2026-05-12",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-restringing-timing-guide",
    slug: "tennis-restringing-timing-guide",
    tags: ["리스트링", "스트링 교체", "라켓 관리", "장비"],
    title: "라켓 리스트링 시기와 방법 — 언제 교체해야 하나",
    excerpt:
      "라켓 리스트링 시기와 방법 — 언제 교체해야 하나에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "장비 가이드",
    date: "2026-05-11",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-overgrip-replacement-guide",
    slug: "tennis-overgrip-replacement-guide",
    tags: ["오버그립", "그립", "교체", "테니스 장비"],
    title: "오버그립 교체 주기와 선택법 — 흡수력·두께·소재",
    excerpt:
      "오버그립 교체 주기와 선택법 — 흡수력·두께·소재에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "장비 가이드",
    date: "2026-05-11",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-shoe-selection-guide",
    slug: "tennis-shoe-selection-guide",
    tags: ["테니스화", "신발 선택", "코트별 신발", "장비"],
    title: "테니스화 선택 완전 가이드 — 코트별·발 유형별",
    excerpt:
      "테니스화 선택 완전 가이드 — 코트별·발 유형별에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "장비 가이드",
    date: "2026-05-10",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-backhand-error-correction",
    slug: "tennis-backhand-error-correction",
    tags: ["백핸드 교정", "에러", "테니스 교정", "드릴"],
    title: "백핸드 에러 줄이기 — 교정 포인트와 드릴",
    excerpt:
      "백핸드 에러 줄이기 — 교정 포인트와 드릴에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-05-10",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-forehand-error-correction",
    slug: "tennis-forehand-error-correction",
    tags: ["포핸드 교정", "에러 줄이기", "테니스 실수", "스윙 교정"],
    title: "포핸드 에러 줄이기 — 흔한 실수와 교정법",
    excerpt:
      "포핸드 에러 줄이기 — 흔한 실수와 교정법에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-05-09",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-serve-practice-routine",
    slug: "tennis-serve-practice-routine",
    tags: ["서브 연습", "루틴", "훈련", "서브 구조"],
    title: "서브 연습 루틴 — 50개 서브로 완성하는 구조화 훈련",
    excerpt:
      "서브 연습 루틴 — 50개 서브로 완성하는 구조화 훈련에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "훈련 가이드",
    date: "2026-05-09",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-ball-machine-drills",
    slug: "tennis-ball-machine-drills",
    tags: ["볼머신", "훈련", "드릴", "반복 연습"],
    title: "볼머신 활용 훈련법 — 반복·패턴·실전 드릴",
    excerpt:
      "볼머신 활용 훈련법 — 반복·패턴·실전 드릴에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "훈련 가이드",
    date: "2026-05-08",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-wall-practice-drills",
    slug: "tennis-wall-practice-drills",
    tags: ["벽치기", "혼자 연습", "테니스 훈련", "드릴"],
    title: "벽치기 테니스 훈련 — 혼자 하는 효과적인 연습법",
    excerpt:
      "벽치기 테니스 훈련 — 혼자 하는 효과적인 연습법에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "훈련 가이드",
    date: "2026-05-08",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-practice-planning",
    slug: "tennis-practice-planning",
    tags: ["연습 계획", "훈련 플랜", "테니스 연습", "체계적 훈련"],
    title: "효과적인 테니스 연습 계획 수립 — 주간·월간 플랜",
    excerpt:
      "효과적인 테니스 연습 계획 수립 — 주간·월간 플랜에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "훈련 가이드",
    date: "2026-05-07",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-video-analysis-guide",
    slug: "tennis-video-analysis-guide",
    tags: ["영상 분석", "경기 분석", "패턴", "자기 분석"],
    title: "내 경기 영상 분석법 — 포인트 패턴·약점 파악",
    excerpt:
      "내 경기 영상 분석법 — 포인트 패턴·약점 파악에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "전략 가이드",
    date: "2026-05-07",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-post-match-recovery",
    slug: "tennis-post-match-recovery",
    tags: ["회복", "쿨다운", "아이싱", "테니스 회복"],
    title: "경기 후 회복 루틴 — 쿨다운·아이싱·수면",
    excerpt:
      "경기 후 회복 루틴 — 쿨다운·아이싱·수면에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "건강 가이드",
    date: "2026-05-06",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-pre-match-routine",
    slug: "tennis-pre-match-routine",
    tags: ["경기 전 루틴", "워밍업", "멘탈 준비", "테니스 루틴"],
    title: "경기 전 루틴 완전 가이드 — 워밍업·멘탈 준비",
    excerpt:
      "경기 전 루틴 완전 가이드 — 워밍업·멘탈 준비에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "멘탈 트레이닝",
    date: "2026-05-06",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-hydration-guide",
    slug: "tennis-hydration-guide",
    tags: ["수분 보충", "테니스 건강", "전해질", "경기 컨디션"],
    title: "테니스 수분 보충 완전 가이드 — 경기 전·중·후",
    excerpt:
      "테니스 수분 보충 완전 가이드 — 경기 전·중·후에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "건강 가이드",
    date: "2026-05-05",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-nutrition-diet-guide",
    slug: "tennis-nutrition-diet-guide",
    tags: ["테니스 식단", "영양", "탄수화물", "단백질", "경기 전 식사"],
    title: "테니스 선수를 위한 영양 식단 가이드",
    excerpt:
      "테니스 선수를 위한 영양 식단 가이드에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "건강 가이드",
    date: "2026-05-05",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-shoulder-strengthening",
    slug: "tennis-shoulder-strengthening",
    tags: ["어깨 운동", "로테이터 커프", "부상 예방", "테니스 어깨"],
    title: "테니스 어깨 강화 운동 — 로테이터 커프·부상 예방",
    excerpt:
      "테니스 어깨 강화 운동 — 로테이터 커프·부상 예방에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "부상 예방",
    date: "2026-05-04",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-core-exercise-guide",
    slug: "tennis-core-exercise-guide",
    tags: ["코어 운동", "테니스 체력", "근력", "회전력"],
    title: "테니스를 위한 코어 운동 — 회전력·안정성·파워",
    excerpt:
      "테니스를 위한 코어 운동 — 회전력·안정성·파워에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "훈련 가이드",
    date: "2026-05-04",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-doubles-receive-formation",
    slug: "tennis-doubles-receive-formation",
    tags: ["복식 리시브", "포메이션", "복식 전술", "리시브"],
    title: "복식 리시브 포메이션 — I포메이션·호주 포메이션",
    excerpt:
      "복식 리시브 포메이션 — I포메이션·호주 포메이션에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "복식 전략",
    date: "2026-05-03",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-doubles-poach-strategy",
    slug: "tennis-doubles-poach-strategy",
    tags: ["포치", "복식", "네트 플레이", "복식 전술"],
    title: "복식 포치 전략 완전 가이드 — 타이밍·시그널·포지션",
    excerpt:
      "복식 포치 전략 완전 가이드 — 타이밍·시그널·포지션에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "복식 전략",
    date: "2026-05-03",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-ace-serve-placement",
    slug: "tennis-ace-serve-placement",
    tags: ["에이스", "서브 코스", "테니스 서브", "서브 전략"],
    title: "에이스 서브 코스 공략 — T존·와이드·보디 서브",
    excerpt:
      "에이스 서브 코스 공략 — T존·와이드·보디 서브에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-05-02",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-serve-toss-technique",
    slug: "tennis-serve-toss-technique",
    tags: ["서브 토스", "서브", "테니스 기술", "서브 연습"],
    title: "서브 토스 완벽하게 — 높이·위치·일관성 잡기",
    excerpt:
      "서브 토스 완벽하게 — 높이·위치·일관성 잡기에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-05-02",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-footwork-training",
    slug: "tennis-footwork-training",
    tags: ["풋워크", "훈련", "사이드스텝", "테니스 체력"],
    title: "테니스 풋워크 훈련 — 사이드스텝·크로스스텝·리커버리",
    excerpt:
      "테니스 풋워크 훈련 — 사이드스텝·크로스스텝·리커버리에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "훈련 가이드",
    date: "2026-05-01",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-split-step-guide",
    slug: "tennis-split-step-guide",
    tags: ["스플릿스텝", "풋워크", "테니스 기술", "반응속도"],
    title: "스플릿 스텝 완전 정복 — 타이밍·리듬·발 위치",
    excerpt:
      "스플릿 스텝 완전 정복 — 타이밍·리듬·발 위치에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-05-01",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-ranking-improvement-plan",
    slug: "tennis-ranking-improvement-plan",
    tags: ["테니스 랭킹", "토너먼트", "포인트", "실력 향상", "대회 전략"],
    title: "테니스 랭킹 올리기 — 토너먼트 선택과 포인트 전략",
    excerpt:
      "테니스 랭킹 올리기 — 토너먼트 선택과 포인트 전략에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "전략 가이드",
    date: "2026-04-25",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-match-nerves-control",
    slug: "tennis-match-nerves-control",
    tags: ["멘탈", "경기 긴장", "루틴", "호흡법", "테니스 심리"],
    title: "테니스 경기 긴장감 컨트롤 — 루틴·호흡·집중력",
    excerpt:
      "테니스 경기 긴장감 컨트롤 — 루틴·호흡·집중력에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "멘탈 트레이닝",
    date: "2026-04-25",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-one-handed-backhand-guide",
    slug: "tennis-one-handed-backhand-guide",
    tags: ["한손백핸드", "백핸드", "원핸드", "테니스 기술", "클래식 백핸드"],
    title: "한손 백핸드 완전 마스터 — 그립·스윙·장단점",
    excerpt:
      "한손 백핸드 완전 마스터 — 그립·스윙·장단점에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-04-24",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-hard-court-tactics",
    slug: "tennis-hard-court-tactics",
    tags: ["하드코트", "테니스 전술", "코트별 전략", "바운드", "포지셔닝"],
    title: "하드 코트 전술 완전 가이드 — 바운드·포지셔닝·템포",
    excerpt:
      "하드 코트 전술 완전 가이드 — 바운드·포지셔닝·템포에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "전술 가이드",
    date: "2026-04-24",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-korean-ntrp-mapping-guide",
    slug: "tennis-korean-ntrp-mapping-guide",
    tags: ["NTRP", "한국 동호회", "레벨"],
    title: "한국 동호회 레벨 ↔ NTRP 숫자 매핑 완전 가이드",
    excerpt:
      "한국 '초중·초고·중초' 구조를 NTRP 1.5~4.5로 정확히 환산하는 방법.",
    badge: "신규",
    category: "실력 진단",
    date: "2026-04-24",
    readTime: "7분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-korea-summer-humidity",
    slug: "tennis-korea-summer-humidity",
    tags: ["여름 테니스", "습도", "컨디셔닝"],
    title: "한국 여름 습도 테니스 가이드 — 70~90% 환경 대응",
    excerpt: "한국 6~8월 고습 환경에서 경기력 유지하는 체온·수분 관리.",
    badge: "신규",
    category: "한국 특화",
    date: "2026-04-24",
    readTime: "8분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-korea-winter-indoor-routine",
    slug: "tennis-korea-winter-indoor-routine",
    tags: ["겨울 테니스", "실내 코트", "훈련"],
    title: "한국 겨울 테니스 — 실내 코트 12주 훈련 플랜",
    excerpt: "영하 기온 시즌 실내 코트 특성 이해와 효과적 훈련 루틴.",
    badge: "신규",
    category: "한국 특화",
    date: "2026-04-24",
    readTime: "7분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-korea-spring-fine-dust",
    slug: "tennis-korea-spring-fine-dust",
    tags: ["봄 테니스", "미세먼지", "황사"],
    title: "한국 봄 미세먼지·황사와 실외 테니스 판단 기준",
    excerpt: "PM2.5 수치별 실외 경기 가이드와 호흡기 관리.",
    badge: "신규",
    category: "한국 특화",
    date: "2026-04-24",
    readTime: "6분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-office-worker-evening-routine",
    slug: "tennis-office-worker-evening-routine",
    tags: ["직장인 테니스", "평일 훈련", "1시간"],
    title: "직장인 평일 1시간 테니스 훈련 루틴",
    excerpt: "퇴근 후 1시간으로 NTRP 0.3~0.5 상승시키는 구조화된 훈련.",
    badge: "신규",
    category: "훈련",
    date: "2026-04-24",
    readTime: "7분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-racket-100k-beginner",
    slug: "tennis-racket-100k-beginner",
    tags: ["테니스 라켓", "입문자", "2026"],
    title: "10만원대 입문자 테니스 라켓 추천 2026",
    excerpt: "무게·헤드사이즈 기준과 2026 주요 모델 비교.",
    badge: "신규",
    category: "장비",
    date: "2026-04-24",
    readTime: "6분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-ntrp-2-to-3",
    slug: "tennis-ntrp-2-to-3",
    tags: ["NTRP", "레벨업", "훈련 플랜"],
    title: "NTRP 2.0 → 3.0 레벨업 8주 훈련 플랜",
    excerpt: "입문자에서 중급자 진입 구간 — 실수 줄이기가 핵심.",
    badge: "신규",
    category: "실력 진단",
    date: "2026-04-24",
    readTime: "7분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-ntrp-3-to-3-5",
    slug: "tennis-ntrp-3-to-3-5",
    tags: ["NTRP", "전술", "중급자"],
    title: "NTRP 3.0 → 3.5 12주 전술 플랜",
    excerpt: "중급자 정체 구간 돌파 — 샷을 '고르는' 능력 기르기.",
    badge: "신규",
    category: "실력 진단",
    date: "2026-04-24",
    readTime: "8분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-doubles-partner-finding",
    slug: "tennis-doubles-partner-finding",
    tags: ["복식", "파트너", "동호회"],
    title: "복식 파트너 찾기 실전 가이드",
    excerpt: "실력보다 성향 궁합이 70% — 파트너십 오래 유지하는 법.",
    badge: "신규",
    category: "복식",
    date: "2026-04-24",
    readTime: "6분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-tennis-elbow-early-signs",
    slug: "tennis-tennis-elbow-early-signs",
    tags: ["테니스 엘보", "부상 예방", "재활"],
    title: "테니스 엘보 조기 발견 체크리스트",
    excerpt: "동호인 50%가 겪는 테니스 엘보 — 초기 신호와 예방 장비 세팅.",
    badge: "신규",
    category: "부상 관리",
    date: "2026-04-24",
    readTime: "8분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-second-serve-strategy",
    slug: "tennis-second-serve-strategy",
    tags: ["세컨드서브", "서브", "킥서브", "안정성", "더블폴트 방지"],
    title: "세컨드 서브 전략 — 안정성과 파워의 균형 찾기",
    excerpt:
      "세컨드 서브 전략 — 안정성과 파워의 균형 찾기에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-04-23",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-forehand-inside-out",
    slug: "tennis-forehand-inside-out",
    tags: ["인사이드아웃", "포핸드", "테니스 기술", "크로스코트", "다운더라인"],
    title: "인사이드아웃 포핸드 완전 정복 — 코스·파워·전술",
    excerpt:
      "인사이드아웃 포핸드 완전 정복 — 코스·파워·전술에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-04-23",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-clay-court-tactics",
    slug: "tennis-clay-court-tactics",
    tags: ["테니스"],
    title:
      "클레이 코트 전술 완전 가이드 — 스핀·슬라이딩·포지셔닝 | TennisFriends",
    excerpt:
      "클레이 코트 전술 완전 가이드 — 스핀·슬라이딩·포지셔닝에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술과 전술을 상세히 설명합니다.",
    badge: "가이드",
    category: "기술 가이드",
    date: "2026-04-23",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-kick-serve-technique",
    slug: "tennis-kick-serve-technique",
    tags: ["테니스"],
    title: "킥 서브 완전 마스터 가이드 — 스핀·바운드·구사법 | TennisFriends",
    excerpt:
      "킥 서브 완전 마스터 가이드 — 스핀·바운드·구사법에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술과 전술을 상세히 설명합니다.",
    badge: "가이드",
    category: "기술 가이드",
    date: "2026-04-23",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-mental-pressure-points",
    slug: "tennis-mental-pressure-points",
    tags: ["테니스"],
    title:
      "중요한 포인트에서 멘탈 강화법 — 30-40·타이브레이크·챔피언십 포인트 | TennisFriends",
    excerpt:
      "중요한 포인트에서 멘탈 강화법 — 30-40·타이브레이크·챔피언십 포인트에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술과 전술을 상세히 설명합니다.",
    badge: "가이드",
    category: "기술 가이드",
    date: "2026-04-23",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-net-approach-shots",
    slug: "tennis-net-approach-shots",
    tags: ["테니스"],
    title: "어프로치샷 마스터 — 네트로 나가는 타이밍과 코스 | TennisFriends",
    excerpt:
      "어프로치샷 마스터 — 네트로 나가는 타이밍과 코스에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술과 전술을 상세히 설명합니다.",
    badge: "가이드",
    category: "기술 가이드",
    date: "2026-04-23",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-return-of-serve-guide",
    slug: "tennis-return-of-serve-guide",
    tags: ["테니스"],
    title: "서브 리턴 완전 가이드 — 위치·타이밍·전술 | TennisFriends",
    excerpt:
      "서브 리턴 완전 가이드 — 위치·타이밍·전술에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술과 전술을 상세히 설명합니다.",
    badge: "가이드",
    category: "기술 가이드",
    date: "2026-04-23",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-drop-shot-timing",
    slug: "tennis-drop-shot-timing",
    tags: ["드롭샷", "테니스 기술", "터치", "네트 앞 샷", "전술"],
    title: "드롭샷 완벽 타이밍 — 언제 어떻게 구사하는가",
    excerpt:
      "드롭샷 완벽 타이밍 — 언제 어떻게 구사하는가에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-04-22",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-lob-shot-guide",
    slug: "tennis-lob-shot-guide",
    tags: ["로브", "테니스 기술", "수비 로브", "탑스핀 로브", "네트 공략"],
    title: "로브샷 마스터 가이드 — 수비 로브·공격 로브·타이밍",
    excerpt:
      "로브샷 마스터 가이드 — 수비 로브·공격 로브·타이밍에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-04-22",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-beginner-first-month",
    slug: "tennis-beginner-first-month",
    tags: ["테니스 입문", "초보자", "테니스 기초", "처음 배우기", "NTRP 1.0"],
    title: "테니스 입문 첫 한 달 — 초보자가 꼭 배워야 할 기초",
    excerpt:
      "테니스 입문 첫 한 달 — 초보자가 꼭 배워야 할 기초에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "초보자 가이드",
    date: "2026-04-21",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-grass-court-strategy",
    slug: "tennis-grass-court-strategy",
    tags: ["잔디코트", "테니스 전술", "코트별 전략", "윔블던", "낮은 바운드"],
    title: "잔디 코트 전략 완전 가이드 — 낮은 바운드·서브·네트 전술",
    excerpt:
      "잔디 코트 전략 완전 가이드 — 낮은 바운드·서브·네트 전술에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "전술 가이드",
    date: "2026-04-21",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-injury-prevention-stretching",
    slug: "tennis-injury-prevention-stretching",
    tags: ["부상 예방", "스트레칭", "테니스 엘보", "어깨 부상", "무릎"],
    title: "테니스 부상 예방 스트레칭 — 어깨·팔꿈치·무릎 보호",
    excerpt:
      "테니스 부상 예방 스트레칭 — 어깨·팔꿈치·무릎 보호에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "부상 예방",
    date: "2026-04-20",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-fitness-training-guide",
    slug: "tennis-fitness-training-guide",
    tags: ["테니스 체력", "훈련", "스피드 훈련", "근력", "지구력"],
    title: "테니스 체력 훈련 완전 가이드 — 스피드·근력·지구력",
    excerpt:
      "테니스 체력 훈련 완전 가이드 — 스피드·근력·지구력에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "훈련 가이드",
    date: "2026-04-20",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-serve-and-volley-tactics",
    slug: "tennis-serve-and-volley-tactics",
    tags: ["서브앤발리", "네트 어프로치", "테니스 전술", "잔디코트"],
    title: "서브앤발리 전술 가이드 — 잔디·실내 코트 공략법",
    excerpt:
      "서브앤발리 전술 가이드 — 잔디·실내 코트 공략법에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "전술 가이드",
    date: "2026-04-19",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-grip-types-guide",
    slug: "tennis-grip-types-guide",
    tags: ["그립", "이스턴 그립", "웨스턴 그립", "컨티넨탈", "테니스 기본"],
    title: "테니스 그립 종류 완전 정리 — 이스턴·웨스턴·컨티넨탈",
    excerpt:
      "테니스 그립 종류 완전 정리 — 이스턴·웨스턴·컨티넨탈에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-04-19",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "taylor-fritz",
    slug: "taylor-fritz",
    tags: ["선수 프로필", "ATP"],
    title: "테일러 프리츠: 미국 테니스의 자존심",
    excerpt:
      "강력한 화력으로 상대를 찍어 누르는 하드 히터. 인디언 웰스 우승으로 증명한 프리츠의 저력.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2026-04-19",
    readTime: "8분",
    badgeColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: "frances-tiafoe",
    slug: "frances-tiafoe",
    tags: ["선수 프로필"],
    title: "프란시스 티아포 — 에너지와 창의로 코트를 달구다",
    excerpt:
      "폭발적인 스텝과 감각적인 터치, 변주를 두려워하지 않는 전진으로 흐름을 뒤집는 프란시스 티아포의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2026-04-19",
    readTime: "8분",
    badgeColor:
      "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: "tennis-string-tension-selection",
    slug: "tennis-string-tension-selection",
    tags: ["스트링", "테니스 줄", "폴리에스터", "텐션", "장비 선택"],
    title: "스트링 선택 완전 가이드 — 폴리·나일론·텐션별 특성",
    excerpt:
      "스트링 선택 완전 가이드 — 폴리·나일론·텐션별 특성에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "장비 가이드",
    date: "2026-04-18",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-tiebreak-strategy",
    slug: "tennis-tiebreak-strategy",
    tags: ["타이브레이크", "테니스 전술", "멘탈", "서브 전략"],
    title: "타이브레이크 전략 완전 가이드 — 멘탈·서브 순서·포인트 관리",
    excerpt:
      "타이브레이크 전략 완전 가이드 — 멘탈·서브 순서·포인트 관리에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "전술 가이드",
    date: "2026-04-18",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-doubles-communication",
    slug: "tennis-doubles-communication",
    tags: ["복식", "파트너 소통", "복식 전술", "복식 포메이션"],
    title: "복식 파트너 소통법 — 시그널·포메이션·전술 결정",
    excerpt:
      "복식 파트너 소통법 — 시그널·포메이션·전술 결정에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "복식 전략",
    date: "2026-04-17",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "tennis-topspin-forehand-guide",
    slug: "tennis-topspin-forehand-guide",
    tags: ["탑스핀", "포핸드", "회전", "테니스 기술", "포핸드 연습"],
    title: "탑스핀 포핸드 완전 분석 — 회전·파워·코스 컨트롤",
    excerpt:
      "탑스핀 포핸드 완전 분석 — 회전·파워·코스 컨트롤에 대한 전문 가이드. 실전에서 바로 적용할 수 있는 테니스 기술을 상세히 설명합니다.",
    badge: "최신 글",
    category: "기술 가이드",
    date: "2026-04-17",
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "top-5-tennis-districts-seoul",
    slug: "top-5-tennis-districts-seoul",
    tags: ["서울 테니스", "코트 예약", "동호회"],
    title: "서울 테니스 생활권 TOP 5 — 동호회·레슨·퇴근 후 코트",
    excerpt:
      "송파, 강남·서초, 마포·용산, 양천, 노원·도봉권의 테니스 생활권 장단점과 입문자 선택 기준.",
    badge: "인기 글",
    category: "테니스 생활권",
    date: "2026-05-03",
    readTime: "8분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  },
  {
    id: "tennis-tiebreak-strategy-guide",
    slug: "tennis-tiebreak-strategy-guide",
    title: "타이브레이크 운영 가이드",
    excerpt:
      "타이브레이크에서 실수를 줄이고 득점 확률을 높이는 전술, 루틴, 리스크 관리 원칙을 정리했습니다.",
    badge: "신규",
    category: "테니스 전술",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-second-serve-confidence-guide",
    slug: "tennis-second-serve-confidence-guide",
    title: "세컨드 서브 자신감 가이드",
    excerpt:
      "더블폴트를 줄이면서도 공격성을 잃지 않는 세컨드 서브 설계법을 다룹니다.",
    badge: "신규",
    category: "테니스 전술",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-clay-court-sliding-guide",
    slug: "tennis-clay-court-sliding-guide",
    title: "클레이 코트 슬라이딩 입문",
    excerpt:
      "클레이 코트에서 미끄러지듯 움직이는 기본 원리와 안전하게 익히는 훈련법을 소개합니다.",
    badge: "신규",
    category: "테니스 기술",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-hard-court-recovery-guide",
    slug: "tennis-hard-court-recovery-guide",
    title: "하드코트 경기 후 회복 가이드",
    excerpt:
      "하드코트에서 누적되는 충격을 줄이기 위한 회복 루틴과 관리 포인트를 정리했습니다.",
    badge: "신규",
    category: "테니스 회복",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-grass-court-movement-guide",
    slug: "tennis-grass-court-movement-guide",
    title: "잔디 코트 움직임 가이드",
    excerpt:
      "잔디 코트 특유의 낮은 바운드와 미끄러운 움직임에 적응하는 방법을 설명합니다.",
    badge: "신규",
    category: "테니스 기술",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-doubles-serve-formation-guide",
    slug: "tennis-doubles-serve-formation-guide",
    title: "복식 서브 포메이션 가이드",
    excerpt:
      "복식에서 자주 쓰이는 서브 포메이션과 상황별 선택 기준을 실전 중심으로 다룹니다.",
    badge: "신규",
    category: "테니스 복식",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-return-positioning-by-surface",
    slug: "tennis-return-positioning-by-surface",
    title: "코트별 리턴 포지션 가이드",
    excerpt:
      "하드, 클레이, 잔디 코트에서 리턴 위치를 어떻게 다르게 잡아야 하는지 정리했습니다.",
    badge: "신규",
    category: "테니스 전술",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-matchday-warmup-routine",
    slug: "tennis-matchday-warmup-routine",
    title: "경기 당일 워밍업 루틴",
    excerpt:
      "경기 전 몸과 집중력을 함께 끌어올리는 워밍업 구성법을 소개합니다.",
    badge: "신규",
    category: "테니스 훈련",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-cooldown-stretching-routine",
    slug: "tennis-cooldown-stretching-routine",
    title: "경기 후 쿨다운 스트레칭 루틴",
    excerpt:
      "근육 긴장을 줄이고 다음 훈련에 지장을 남기지 않도록 돕는 회복 루틴입니다.",
    badge: "신규",
    category: "테니스 회복",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-sleep-recovery-guide",
    slug: "tennis-sleep-recovery-guide",
    title: "수면과 경기력 회복 가이드",
    excerpt:
      "테니스 경기력 유지에 필요한 수면 습관과 회복 품질 관리법을 정리했습니다.",
    badge: "신규",
    category: "테니스 회복",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-hydration-electrolyte-guide",
    slug: "tennis-hydration-electrolyte-guide",
    title: "수분과 전해질 관리 가이드",
    excerpt:
      "경기 중 탈수와 집중력 저하를 막기 위한 수분·전해질 전략을 설명합니다.",
    badge: "신규",
    category: "테니스 영양",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-hot-weather-match-guide",
    slug: "tennis-hot-weather-match-guide",
    title: "폭염 경기 대처 가이드",
    excerpt:
      "더운 날씨에서 체력 손실을 줄이고 경기 운영을 안정시키는 방법을 다룹니다.",
    badge: "신규",
    category: "테니스 컨디셔닝",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-cold-weather-match-guide",
    slug: "tennis-cold-weather-match-guide",
    title: "추운 날 경기 운영 가이드",
    excerpt:
      "기온이 낮은 환경에서 몸을 보호하고 감각을 유지하는 실전 팁을 소개합니다.",
    badge: "신규",
    category: "테니스 컨디셔닝",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-practice-journal-guide",
    slug: "tennis-practice-journal-guide",
    title: "테니스 연습일지 작성 가이드",
    excerpt:
      "훈련 내용을 기록하고 개선 포인트를 찾는 연습일지 작성법을 정리했습니다.",
    badge: "신규",
    category: "테니스 훈련",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-unforced-error-reduction-guide",
    slug: "tennis-unforced-error-reduction-guide",
    title: "범실 줄이기 훈련 가이드",
    excerpt:
      "불필요한 실수를 줄이기 위해 점검해야 할 전술, 루틴, 타점 원칙을 설명합니다.",
    badge: "신규",
    category: "테니스 기술",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-approach-shot-guide",
    slug: "tennis-approach-shot-guide",
    title: "어프로치샷 가이드",
    excerpt:
      "상대를 밀어낸 뒤 네트 플레이로 연결하는 어프로치샷 운영법을 다룹니다.",
    badge: "신규",
    category: "테니스 기술",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-split-step-timing-guide",
    slug: "tennis-split-step-timing-guide",
    title: "스플릿스텝 타이밍 가이드",
    excerpt:
      "풋워크의 출발점인 스플릿스텝 타이밍을 상황별로 이해할 수 있도록 정리했습니다.",
    badge: "신규",
    category: "테니스 풋워크",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-serve-plus-one-patterns",
    slug: "tennis-serve-plus-one-patterns",
    title: "서브 플러스 원 패턴 가이드",
    excerpt:
      "서브 이후 다음 한 샷까지 설계하는 패턴 플레이의 기본 구조를 설명합니다.",
    badge: "신규",
    category: "테니스 전술",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-mental-reset-between-points",
    slug: "tennis-mental-reset-between-points",
    title: "포인트 사이 멘탈 리셋 가이드",
    excerpt:
      "흐름이 흔들릴 때 짧은 루틴으로 감정과 집중을 회복하는 방법을 소개합니다.",
    badge: "신규",
    category: "테니스 멘탈",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-junior-training-roadmap",
    slug: "tennis-junior-training-roadmap",
    title: "주니어 테니스 성장 로드맵",
    excerpt:
      "주니어 선수가 단계별로 무엇을 우선 학습해야 하는지 로드맵 형태로 정리했습니다.",
    badge: "신규",
    category: "테니스 훈련",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-adult-beginner-first-90-days",
    slug: "tennis-adult-beginner-first-90-days",
    title: "성인 입문자 90일 가이드",
    excerpt:
      "성인 초보가 첫 3개월 동안 안정적으로 실력을 올리는 학습 순서를 제안합니다.",
    badge: "신규",
    category: "테니스 초보자",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-partner-practice-drills",
    slug: "tennis-partner-practice-drills",
    title: "파트너 연습 드릴 가이드",
    excerpt:
      "코치 없이도 둘이서 효율적으로 진행할 수 있는 파트너 드릴을 정리했습니다.",
    badge: "신규",
    category: "테니스 훈련",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-wall-practice-guide",
    slug: "tennis-wall-practice-guide",
    title: "벽치기 훈련 가이드",
    excerpt:
      "혼자서도 반복 훈련 효과를 얻을 수 있는 벽치기 루틴과 목표 설정법을 다룹니다.",
    badge: "신규",
    category: "테니스 훈련",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-doubles-net-player-guide",
    slug: "tennis-doubles-net-player-guide",
    title: "복식 네트 플레이어 가이드",
    excerpt:
      "복식에서 네트 플레이어가 위치, 리액션, 마무리를 어떻게 가져가야 하는지 설명합니다.",
    badge: "신규",
    category: "테니스 복식",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-kick-serve-guide",
    slug: "tennis-kick-serve-guide",
    title: "킥서브 입문 가이드",
    excerpt:
      "안정성과 바운드 변화를 동시에 노릴 수 있는 킥서브의 기본 원리를 정리했습니다.",
    badge: "신규",
    category: "테니스 서브",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-slice-serve-guide",
    slug: "tennis-slice-serve-guide",
    title: "슬라이스 서브 가이드",
    excerpt:
      "코스와 리턴 각도를 흔드는 슬라이스 서브 활용법을 실전 중심으로 설명합니다.",
    badge: "신규",
    category: "테니스 서브",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-forehand-depth-control-guide",
    slug: "tennis-forehand-depth-control-guide",
    title: "포핸드 깊이 조절 가이드",
    excerpt:
      "포핸드를 더 깊고 안정적으로 보내기 위한 스윙 길이, 타점, 목표 설정법을 다룹니다.",
    badge: "신규",
    category: "테니스 포핸드",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-backhand-return-guide",
    slug: "tennis-backhand-return-guide",
    title: "백핸드 리턴 가이드",
    excerpt:
      "강한 서브를 백핸드로 안정적으로 받아내는 준비 자세와 리턴 패턴을 소개합니다.",
    badge: "신규",
    category: "테니스 백핸드",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-match-video-review-guide",
    slug: "tennis-match-video-review-guide",
    title: "경기 영상 복기 가이드",
    excerpt:
      "경기 영상을 단순 시청이 아닌 개선 도구로 활용하는 리뷰 구조를 정리했습니다.",
    badge: "신규",
    category: "테니스 분석",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-tournament-preparation-checklist",
    slug: "tennis-tournament-preparation-checklist",
    title: "대회 준비 체크리스트",
    excerpt:
      "대회 전 준비물을 포함해 일정, 루틴, 컨디션 점검 항목을 한 번에 정리했습니다.",
    badge: "신규",
    category: "테니스 대회",
    date: "2026-03-07",
    readTime: "6분",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    categoryColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  },
  {
    id: "tennis-racket-recommendation-guide-2026",
    slug: "tennis-racket-recommendation-guide-2026",
    tags: ["라켓 추천", "장비", "2026"],
    title: "2026년 테니스 라켓 추천 가이드 — 초보자부터 상급자까지 BEST 5",
    excerpt:
      "2026년 최신 테니스 라켓 트렌드와 추천 모델 TOP 5를 소개합니다. 윌슨 블레이드 v9, 요넥스 이존, 바볼랏 퓨어드라이브 등 인기 라켓 비교 분석.",
    badge: "인기 글",
    category: "테니스 장비",
    date: "2026-03-01",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
  },
  {
    id: "tennis-starting-complete-guide",
    slug: "tennis-starting-complete-guide",
    tags: ["입문", "테린이", "가이드"],
    title: "테니스 시작하기 완벽 가이드 2026 — 비용, 준비물, 레슨, 용어 총정리",
    excerpt:
      "테린이 탈출을 위한 A to Z. 라켓 구매 비용부터 레슨비, 필수 용어, 코트 매너, 그리고 1년 성장 로드맵까지.",
    badge: "필독",
    category: "테니스 초보자",
    date: "2026-02-20",
    readTime: "15분",
    badgeColor:
      "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    categoryColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
  },
  {
    id: "tennis-lesson-cost-guide",
    slug: "tennis-lesson-cost-guide",
    tags: ["레슨비", "테니스 비용", "입문"],
    title: "2026년 테니스 레슨 비용 완전 정복 — 실내 vs 실외 가격 비교",
    excerpt:
      "테니스 레슨 비용이 궁금하신가요? 서울, 경기 및 전국 평균 실내/실외 테니스장 레슨비를 1:1, 그룹 레슨별로 상세하게 비교해드립니다.",
    badge: "인기 글",
    category: "테니스 초보자",
    date: "2026-02-10",
    readTime: "8분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
  },
  {
    id: "tennis-string-guide",
    slug: "tennis-string-guide",
    tags: ["스트링", "텐션", "장비"],
    title:
      "테니스 스트링 완전 가이드 — 폴리 vs 인조쉽 vs 천연쉽 및 텐션 선택법 2026",
    excerpt:
      "라켓 성능의 50%는 스트링이 결정합니다. 폴리에스터, 인조쉽, 멀티필라멘트, 천연쉽의 장단점을 비교하고 나에게 맞는 텐션 찾는 법을 알려드립니다.",
    badge: "최신 글",
    category: "테니스 장비",
    date: "2026-02-05",
    readTime: "9분",
    badgeColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    categoryColor: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
  },
  {
    id: "tennis-strategy-beat-pusher",
    slug: "tennis-strategy-beat-pusher",
    tags: ["테니스 전술"],
    title: "일명 '푸셔(Pusher)'를 이기는 5가지 전략",
    excerpt:
      "실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. 인내심을 유지하며 결정적인 찬스를 만드는 푸셔 공략 가이드.",
    badge: "최신 글",
    category: "테니스 전술",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-strategy-vs-lefty",
    slug: "tennis-strategy-vs-lefty",
    tags: ["테니스 전술"],
    title: "왼손잡이 상대 공략법 (Lefty 대응 전술)",
    excerpt:
      "반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수를 상대로 당황하지 않고 유리한 고지를 점하는 전술적 팁.",
    badge: "최신 글",
    category: "테니스 전술",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-windy-condition-tips",
    slug: "tennis-windy-condition-tips",
    tags: ["테니스 전술"],
    title: "바람 부는 날 테니스 잘 치는 법",
    excerpt:
      "불규칙한 바람은 누구에게나 fair하지 않습니다. 바람을 이용하는 풋워크, 타점 조절, 그리고 심리적 우위를 점하는 방법.",
    badge: "최신 글",
    category: "테니스 전술",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-drop-shot-mastery",
    slug: "tennis-drop-shot-mastery",
    tags: ["테니스 전술"],
    title: "드롭샷 마스터하기: 타이밍과 위장술",
    excerpt:
      "상대의 허를 찌르는 드롭샷. 성공률을 높이는 그립, 터치 감각, 그리고 무엇보다 중요한 타이밍과 위장(Disguise) 기술.",
    badge: "최신 글",
    category: "테니스 전술",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-lob-defense-offense",
    slug: "tennis-lob-defense-offense",
    tags: ["테니스 기술"],
    title: "로브(Lob)의 기술: 수비형 로브와 공격형 탑스핀 로브",
    excerpt:
      "위기 탈출용 높은 로브부터, 네트 대시한 상대를 넘기는 공격적인 탑스핀 로브까지. 로브의 모든 것을 파헤칩니다.",
    badge: "최신 글",
    category: "테니스 기술",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-overhead-smash-guide",
    slug: "tennis-overhead-smash-guide",
    tags: ["테니스 기술", "백핸드"],
    title: "스매싱 실수 줄이는 법 (오버헤드 스매시 가이드)",
    excerpt:
      "가장 강력하지만 가장 실수하기 쉬운 샷. 스매싱의 타점 잡기, 왼손의 역할, 그리고 자신감 있게 마무리하는 비결.",
    badge: "최신 글",
    category: "테니스 기술",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-slice-backhand-mastery",
    slug: "tennis-slice-backhand-mastery",
    tags: ["테니스 기술", "서브"],
    title: "슬라이스 백핸드 제대로 구사하기 (방어와 리듬 뺏기)",
    excerpt:
      "낮게 깔리는 슬라이스는 최고의 수비이자 공격의 발판입니다. 언더스핀을 거는 요령과 체공 시간을 조절하는 노하우.",
    badge: "최신 글",
    category: "테니스 기술",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-return-of-serve-strategy",
    slug: "tennis-return-of-serve-strategy",
    tags: ["테니스 전술"],
    title: "서브 리턴 전략: 서버의 구질 읽는 법",
    excerpt:
      "게임의 시작은 서브지만, 브레이크의 시작은 리턴입니다. 스플릿 스텝 타이밍, 그립 전환, 그리고 서버의 루틴을 읽는 법.",
    badge: "최신 글",
    category: "테니스 전술",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-string-tension-guide",
    slug: "tennis-string-tension-guide",
    tags: ["테니스 장비", "스트링"],
    title: "스트링 텐션의 비밀: 높게? 낮게?",
    excerpt:
      "텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.",
    badge: "최신 글",
    category: "테니스 장비",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-hybrid-string-setup",
    slug: "tennis-hybrid-string-setup",
    tags: ["테니스 장비"],
    title: "하이브리드 스트링 셋업 가이드 (폴리 vs 인조쉽)",
    excerpt:
      "선수들이 사랑하는 믹스 앤 매치. 폴리 스트링과 인조쉽/천연쉽을 조합하여 내구성, 스핀, 타구감을 모두 잡는 하이브리드 세팅법.",
    badge: "최신 글",
    category: "테니스 장비",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-grip-size-selection",
    slug: "tennis-grip-size-selection",
    tags: ["테니스 장비"],
    title: "그립 두께와 사이즈 선택의 중요성",
    excerpt:
      "너무 얇으면 라켓이 돌고, 너무 두꺼우면 손목이 아픕니다. 정확한 그립 사이즈 측정법과 튜닝 팁.",
    badge: "최신 글",
    category: "테니스 장비",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-overgrip-guide",
    slug: "tennis-overgrip-guide",
    tags: ["테니스 장비"],
    title: "오버그립 교체 주기와 종류(건식/습식) 추천",
    excerpt:
      "손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.",
    badge: "최신 글",
    category: "테니스 장비",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-dampener-effectiveness",
    slug: "tennis-dampener-effectiveness",
    tags: ["테니스 장비", "경기 운영"],
    title: "댐퍼(Dampener)의 효과: 진동 감소와 타구감",
    excerpt:
      "작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.",
    badge: "최신 글",
    category: "테니스 장비",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-wrist-knee-pain-care",
    slug: "tennis-wrist-knee-pain-care",
    tags: ["테니스 지식"],
    title: "테니스 엘보 외의 부상: 손목 및 무릎 통증 관리",
    excerpt:
      "TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.",
    badge: "최신 글",
    category: "테니스 건강",
    date: "2026-01-24",
    readTime: "10분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    id: "tennis-post-exercise-nutrition",
    slug: "tennis-post-exercise-nutrition",
    tags: ["영양", "회복", "식단"],
    title: "테니스 영양학: 경기 후 45분, 기적의 회복 골든타임",
    excerpt:
      "테니스 경기 후 근육 회복과 피로 해소를 위한 영양 섭취 전략. 탄수화물/단백질 비율, 전해질 조절, 관절 건강을 위한 영양소까지 완벽 정리.",
    badge: "최신 글",
    category: "테니스 영양",
    date: "2026-01-20",
    readTime: "7분",
    badgeColor: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
    categoryColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    id: "tennis-elbow-prevention-guide",
    slug: "tennis-elbow-prevention-guide",
    tags: ["테니스 엘보", "부상 예방", "재활"],
    title: "테니스 엘보 예방과 재활 가이드 — 통증 없이 운동하는 법",
    excerpt:
      "테니스 동호인의 50%가 겪는다는 테니스 엘보. 팔꿈치 바깥쪽 통증의 원인부터 재활 운동, 라켓/스트링 세팅 변경 팁까지 완벽하게 정리했습니다.",
    badge: "필독",
    category: "테니스 부상",
    date: "2026-01-15",
    readTime: "10분",
    badgeColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    categoryColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  },
  {
    id: "novak-djokovic",
    slug: "novak-djokovic",
    tags: ["선수 프로필", "GOAT"],
    title: "노박 조코비치: 기록의 파괴자, GOAT",
    excerpt:
      "테니스 역사상 가장 위대한 선수. 24회 그랜드 슬램 우승에 빛나는 조코비치의 무결점 플레이와 철저한 자기 관리.",
    badge: "인기 글",
    category: "선수 프로필",
    date: "2026-05-10",
    readTime: "12분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: "jannik-sinner",
    slug: "jannik-sinner",
    tags: ["선수 프로필", "ATP"],
    title: "야닉 시너: 이탈리아의 붉은 여우",
    excerpt:
      "스키 선수 출신의 완벽한 밸런스. 강력한 양쪽 스트로크로 세계 1위를 향해 질주하는 야닉 시너.",
    badge: "인기 글",
    category: "선수 프로필",
    date: "2026-05-03",
    readTime: "10분",
    badgeColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: "carlos-alcaraz",
    title: "카를로스 알카라스 — '즐기는 재능'으로 시대를 앞당긴 젊은 왕",
    excerpt:
      "공격적 베이스라인과 변주로 흐름을 장악하는 카를로스 알카라스의 성장, 스타일, 인간미와 라이벌 이야기를 한 편으로.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-11-01",
    readTime: "6분",
    badgeColor:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    slug: "carlos-alcaraz",
    tags: ["테니스 지식"],
  },
  {
    id: "autumn-tennis-rhythm-guide",
    title: "가을 테니스 리듬 되찾기 | 스윙·풋워크·지역별 전략 완벽 가이드",
    excerpt:
      "가을 테니스 시즌에 흔들리는 리듬과 스윙 타이밍을 잡는 법. 지역별 코트 전략, 풋워크 훈련 루틴, 스트링 세팅 팁까지 한눈에 정리....",
    badge: "최신 글",
    category: "테니스 컨디셔닝",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "autumn-tennis-rhythm-guide",
    tags: ["백핸드", "라켓"],
  },
  {
    id: "backhand-accuracy-full-guide",
    title: "백핸드 정확도 향상 완전 가이드 | 원핸드·투핸드 타점·라켓면·리듬",
    excerpt:
      "백핸드 정확도를 높이려면 힘이 아니라 타점과 각도를 조정해야 한다. 원핸드·투핸드별 교정 루틴, 지역 코트별 전략, 20분 감각 회복 훈련까지....",
    badge: "최신 글",
    category: "테니스 백핸드",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "backhand-accuracy-full-guide",
    tags: ["테니스 지식"],
  },
  {
    id: "rainy-day-tennis-tips-guide",
    title:
      "비 오는 날 테니스 루틴 | 감각 유지·실내 훈련·장비 관리법 완전 가이드",
    excerpt:
      "비 오는 날 테니스 감각 유지법 6가지. 실내 대체 훈련, 스트링 관리, 리듬 감각 훈련까지 완벽 정리....",
    badge: "최신 글",
    category: "테니스 경기",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "rainy-day-tennis-tips-guide",
    tags: ["서브", "라켓"],
  },
  {
    id: "serve-return-prediction-guide",
    title: "테니스 서브 리턴 완전정복 | 토스 읽기·첫 스텝 타이밍·라켓 각도",
    excerpt:
      "서브 리턴은 예측의 기술이다. 토스 패턴, 발 리듬, 라켓 준비각, 코트별 리턴 전략과 훈련 루틴까지 완전 정리....",
    badge: "최신 글",
    category: "테니스 서브",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "serve-return-prediction-guide",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-advanced-pattern-analysis",
    title:
      "테니스 상급자의 경기 읽기 — 상대 패턴 분석과 카운터 전략 | 흐름을 읽고 이기는 플레이의 심리학",
    excerpt:
      "상급자는 공을 치지 않는다, 상대를 읽는다. 패턴 분석과 카운터 전략이 진짜 승부의 기술이다....",
    badge: "최신 글",
    category: "테니스 상급자",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-advanced-pattern-analysis",
    tags: ["백핸드"],
  },
  {
    id: "tennis-backhand-technique-guide",
    title: "테니스 백핸드의 기술 — 왼손의 리드로 완성하는 정확한 임팩트",
    excerpt:
      "백핸드는 힘이 아니라 밸런스의 기술이다. 왼손이 리드하고 오른손이 따라올 때 정확도와 파워가 동시에 완성된다.",
    badge: "최신 글",
    category: "테니스 백핸드",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-backhand-technique-guide",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-beginner-30day-growth-plan",
    title:
      "테니스 초보자 30일 성장 플랜 | 기초부터 경기 감각까지 체계적인 로드맵",
    excerpt:
      "초보자가 30일 만에 기초를 다지고 실제 경기 감각을 익히는 완벽한 성장 플랜. 매일 30분, 단계별 훈련 프로그램....",
    badge: "최신 글",
    category: "테니스 초보자",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-beginner-30day-growth-plan",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-beginner-30day-training-plan",
    title:
      "테니스 초보자 30일 훈련 플랜 | 기초부터 경기 감각까지 체계적인 로드맵",
    excerpt:
      "테니스에 처음 입문한 초보자를 위한 30일 훈련 프로그램. 매일 30분씩 투자하여 기초 기술부터 실제 경기 감각까지 단계적으로 습득하세요....",
    badge: "최신 글",
    category: "테니스 초보자",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-beginner-30day-training-plan",
    tags: ["복식"],
  },
  {
    id: "tennis-doubles-strategy-guide",
    title:
      "복식 경기 전략 완전 가이드 | 조화·커뮤니케이션·포지션·팀워크로 승부하는 듀오 플레이",
    excerpt:
      "복식은 기술이 아니라 '조화'의 경기다. 상대보다 먼저 '팀워크'를 완성할 때 비로소 승리가 시작된다. 포지션, 커뮤니케이션, 전략의 모든 것....",
    badge: "최신 글",
    category: "테니스 복식",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-doubles-strategy-guide",
    tags: ["복식"],
  },
  {
    id: "tennis-doubles-teamwork-strategy",
    title:
      "테니스 복식의 팀워크 전략 — 호흡·시선·커뮤니케이션으로 완성하는 듀오 플레이",
    excerpt:
      "복식은 기술이 아니라 호흡의 경기다. 시선, 커뮤니케이션, 포지션이 하나로 맞을 때 비로소 승리가 시작된다.",
    badge: "최신 글",
    category: "테니스 복식",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-doubles-teamwork-strategy",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-etiquette-and-manners",
    title: "테니스 코트 에티켓과 매너 | 진짜 실력을 보여주는 포츠맨십 기술",
    excerpt:
      "테니스의 진짜 실력은 스윙이 아니라 '에티켓'에서 드러난다. 코트 매너가 경기력과 인성을 동시에 높이는 이유와 실천 방법....",
    badge: "최신 글",
    category: "테니스 코트",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-etiquette-and-manners",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-footwork-balance-training-guide",
    title: "테니스 풋워크 밸런스 훈련 | 하체 중심 리듬·균형 이동 완전정복",
    excerpt:
      "테니스 풋워크 밸런스 향상 루틴. 하체 중심 이동과 리듬 훈련, 코트별 발 스텝 전략까지 완벽 가이드....",
    badge: "최신 글",
    category: "테니스 풋워크",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-footwork-balance-training-guide",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-footwork-science",
    title: "테니스 풋워크의 과학 — 발의 리듬이 경기의 리듬을 만든다",
    excerpt:
      "풋워크는 테니스의 심장이다. 발의 리듬이 곧 경기의 리듬이며, 좋은 스윙은 좋은 발에서 시작된다.",
    badge: "최신 글",
    category: "테니스 풋워크",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-footwork-science",
    tags: ["포핸드"],
  },
  {
    id: "tennis-forehand-impact-timing-guide",
    title: "테니스 포핸드 임팩트 완전 정복 | 타점·스윙 리듬·회전 타이밍 가이드",
    excerpt:
      "포핸드 임팩트 타이밍, 라켓 각도, 하체 리듬 조정까지 완전 정리. 코트별 포핸드 전략과 실전 훈련 루틴까지 한눈에....",
    badge: "최신 글",
    category: "테니스 포핸드",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-forehand-impact-timing-guide",
    tags: ["부상 예방"],
  },
  {
    id: "tennis-injury-prevention-full-guide",
    title: "테니스 부상 예방 루틴 | 10분 워밍업·스트레칭·쿨다운 완전 가이드",
    excerpt:
      "테니스 부상은 예방이 최선이다. 어깨·무릎·손목을 지키는 10분 워밍업, 스트레칭, 쿨다운 루틴으로 안전하게 테니스를 즐기세요....",
    badge: "최신 글",
    category: "테니스 부상",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-injury-prevention-full-guide",
    tags: ["부상 예방"],
  },
  {
    id: "tennis-injury-prevention-recovery",
    title:
      "테니스 부상 예방과 회복 루틴 — 어깨·무릎·손목을 지키는 과학적 관리법",
    excerpt:
      "부상은 실력이 아니라 루틴의 문제다. 어깨·무릎·손목을 지키는 습관만 만들어도 경기력은 2배로 오래간다.",
    badge: "최신 글",
    category: "테니스 부상",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-injury-prevention-recovery",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-inmatch-condition-management",
    title: "테니스 경기 중 컨디션 유지법 — 체력과 집중력을 끝까지 지키는 루틴",
    excerpt:
      "테니스는 체력보다 '에너지 분배'의 싸움이다. 집중력과 리듬을 끝까지 유지하는 루틴이 승부를 결정한다.",
    badge: "최신 글",
    category: "테니스 경기",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-inmatch-condition-management",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-intermediate-match-strategy",
    title: "테니스 중급자 경기 전략 | 개인별 리듬 조절·기술로 승부하는 플레이",
    excerpt:
      "중급자는 기술로는 충분하지 않다. '개인별 리듬 조절'과 '기술'이 진짜 승부의 기술이다. 상대 패턴 읽기와 전략적 플레이....",
    badge: "최신 글",
    category: "테니스 중급자",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-intermediate-match-strategy",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-intermediate-to-advanced-transition",
    title: "중급자에서 상급자로 가는 전환 | 스윙의 일관성과 경기 운영의 분기점",
    excerpt:
      "중급자는 기술로는 충분하지 않다. '스윙의 일관성'과 '경기 운영'이 상급자의 문을 여는 열쇠다. 기술 정비와 멘탈 강화....",
    badge: "최신 글",
    category: "테니스 중급자",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-intermediate-to-advanced-transition",
    tags: ["멘탈 트레이닝"],
  },
  {
    id: "tennis-mental-focus-recovery",
    title: "테니스 경기 중 멘탈 붕괴 방지법 — 실수 후 3초 회복 루틴의 힘",
    excerpt:
      "테니스의 승패는 멘탈이 결정한다. 실수 후 3초, 그 짧은 루틴이 경기 전체의 흐름을 바꾼다.",
    badge: "최신 글",
    category: "테니스 멘탈",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-mental-focus-recovery",
    tags: ["멘탈 트레이닝"],
  },
  {
    id: "tennis-mental-routine-5steps",
    title: "멘탈 루틴 5단계 | 집중력 유지·긴장감 제어법 완전 가이드",
    excerpt:
      "테니스 경기 중 흔들리지 않는 멘탈 루틴. 호흡, 시선, 루틴, 리듬을 통해 자신감과 집중력을 높이는 심리 관리법....",
    badge: "최신 글",
    category: "테니스 멘탈",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-mental-routine-5steps",
    tags: ["멘탈 트레이닝"],
  },
  {
    id: "tennis-mental-routine-control-guide",
    title: "테니스 멘탈 루틴, 승부를 결정짓는 건 결국 마음이다",
    excerpt:
      "포핸드보다 어려운 게 멘탈이다. 경기 중 흔들리지 않고 집중력을 유지하는 루틴 5단계, 프로 선수들의 심리 컨트롤법을 해석한다.",
    badge: "최신 글",
    category: "테니스 멘탈",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-mental-routine-control-guide",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-postmatch-recovery-routine",
    title:
      "테니스 경기 후 회복 루틴 — 24시간 리커버리 사이클로 피로 없이 다음 경기 준비하기",
    excerpt:
      "경기는 끝났지만, 진짜 승부는 회복에서 시작된다. 경기 후 24시간, 루틴 하나가 다음 실력을 결정한다.",
    badge: "최신 글",
    category: "테니스 회복",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-postmatch-recovery-routine",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-power-of-routine",
    title: "테니스에서 루틴의 힘 — 일관된 습관이 경기력을 만든다",
    excerpt:
      "루틴은 단순한 습관이 아니다. 매일의 일관된 반복이 집중력, 안정감, 승부 감각을 만든다.",
    badge: "최신 글",
    category: "테니스 루틴",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-power-of-routine",
    tags: ["스트링", "라켓"],
  },
  {
    id: "tennis-racket-selection-guide",
    title:
      "테니스 라켓 선택 가이드 | 무게·밸런스·스트링 텐션으로 결정되는 퍼포먼스 차이",
    excerpt:
      "라켓은 단순한 장비가 아니라 당신의 스윙을 기억하는 파트너입니다. 무게, 밸런스, 텐션으로 퍼포먼스를 결정하는 선택 가이드....",
    badge: "최신 글",
    category: "테니스 라켓",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-racket-selection-guide",
    tags: ["경기 운영"],
  },
  {
    id: "tennis-scoring-system-guide",
    title:
      "테니스 점수 체계 완벽 이해 | 게임·세트·매치브레이크까지 한 번에 정리",
    excerpt:
      "15-30-40-게임, 순서대로 보이지 복잡한 규칙에 전략이 숨어 있다. 점수 체계를 이해하면 경기 흐름을 읽을 수 있다....",
    badge: "최신 글",
    category: "테니스 점수",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-scoring-system-guide",
    tags: ["서브"],
  },
  {
    id: "tennis-serve-rhythm-science",
    title:
      "테니스 서브 리듬 과학 | 타이밍·템포·회전으로 완성하는 서브 마스터리",
    excerpt:
      "서브는 힘이 아니라 '리듬'의 기술이다. 타이밍, 템포, 회전의 조화로 완성되는 서브 과학과 실전 적용법....",
    badge: "최신 글",
    category: "테니스 서브",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-serve-rhythm-science",
    tags: ["서브"],
  },
  {
    id: "tennis-serve-speed-science",
    title: "테니스 서브 속도의 과학 — 파워보다 타이밍이 만든다",
    excerpt:
      "서브는 힘이 아니라 타이밍이다. 근육의 순서, 무게 이동, 호흡의 리듬이 속도를 결정한다.",
    badge: "최신 글",
    category: "테니스 서브",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-serve-speed-science",
    tags: ["서브"],
  },
  {
    id: "tennis-serve-timing-and-spin-guide",
    title: "테니스 서브 완전 정복, 힘이 아닌 타이밍으로 승부하라",
    excerpt:
      "강한 서브는 팔힘이 아니라 리듬에서 나온다. 아마추어가 프로처럼 보이게 만드는 서브 타이밍과 스핀 컨트롤의 모든 것을 정리했다.",
    badge: "최신 글",
    category: "테니스 서브",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-serve-timing-and-spin-guide",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-shoes-balance-guide",
    title:
      "테니스 신발 밸런스 가이드 | 쿠션·지지력·안정성으로 완성하는 발의 균형",
    excerpt:
      "테니스 신발은 단순한 보호구가 아니다. 쿠션, 지지력, 안정성의 균형으로 발의 피로를 최소화하고 퍼포먼스를 극대화하는 선택 가이드....",
    badge: "최신 글",
    category: "테니스 신발",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-shoes-balance-guide",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-shoes-selection-guide",
    title:
      "테니스 신발 선택 가이드 | 코트별 특성에 맞는 쿠션·접지력·내구성 완벽 정리",
    excerpt:
      "테니스 신발은 코트의 특성에 따라 완전히 달라진다. 쿠션, 접지력, 내구성의 균형으로 최적의 퍼포먼스를 내는 선택 가이드....",
    badge: "최신 글",
    category: "테니스 신발",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-shoes-selection-guide",
    tags: ["테니스 지식"],
  },
  {
    id: "tennis-volley-technique-guide",
    title: "테니스 발리의 기술 — 네트 앞 1초 반응으로 결정되는 승부",
    excerpt:
      "발리는 힘이 아니라 반응의 기술이다. 네트 앞 1초 안에 리듬을 잡는 순간, 승부는 이미 결정된다.",
    badge: "최신 글",
    category: "테니스 발리",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "tennis-volley-technique-guide",
    tags: ["테니스 지식"],
  },
  {
    id: "winter-indoor-tennis-training-routine",
    title: "겨울 테니스 실내 훈련 루틴 | 스피드·감각 유지법 완벽 가이드",
    excerpt:
      "겨울 테니스 실내 코트에서 스윙 감각과 스피드를 유지하는 7가지 루틴. 장비, 워밍업, 리듬 훈련, 컨디션 관리까지 완벽 가이드....",
    badge: "최신 글",
    category: "테니스 컨디셔닝",
    date: "2025-11-01",
    readTime: "10분",
    badgeColor: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    slug: "winter-indoor-tennis-training-routine",
    tags: ["선수 프로필"],
  },
  {
    id: "stefanos-tsitsipas",
    slug: "stefanos-tsitsipas",
    tags: ["선수 프로필", "ATP"],
    title: "스테파노스 치치파스: 그리스 조각상의 테니스",
    excerpt:
      "긴 머리를 휘날리며 코트를 누비는 그리스의 신. 강력한 포핸드와 네트 플레이를 겸비한 치치파스의 스타일.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-10-20",
    readTime: "9분",
    badgeColor: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: "tommy-paul",
    slug: "tommy-paul",
    tags: ["선수 프로필", "ATP"],
    title: "토미 폴: 기민한 미국의 테크니션",
    excerpt:
      "빠른 발과 영리한 경기 운영. 미국 테니스의 황금세대를 이끄는 토미 폴의 다재다능함.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-10-18",
    readTime: "8분",
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: "alex-de-minaur",
    title: "알렉스 드 미노 — 스피드와 담대함으로 시간을 훔치는 기술",
    excerpt:
      "폭발적인 풋워크와 끈질긴 수비·카운터로 리듬을 빼앗는 알렉스 드 미노의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-10-08",
    readTime: "8분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    slug: "alex-de-minaur",
    tags: ["선수 프로필"],
  },
  {
    id: "hubert-hurkacz",
    title: "후베르트 후르카츠 — 탄력과 절제로 설계하는 현대형 서브&발리",
    excerpt:
      "거대한 스윙이 아니라 정교한 타이밍과 균형으로 점수를 쌓는 후베르트 후르카츠의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-10-02",
    readTime: "8분",
    badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    slug: "hubert-hurkacz",
    tags: ["선수 프로필", "서브"],
  },
  {
    id: "casper-ruud",
    title: "카스페르 루드 — 점토 위에서 증명한 질서와 끈기",
    excerpt:
      "꾸준함과 규율로 흐름을 쌓는 카스페르 루드의 성장 배경, 경기 스타일, 인간적인 면모와 라이벌 이야기를 한 편으로.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-09-29",
    readTime: "7분",
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    slug: "casper-ruud",
    tags: ["선수 프로필"],
  },
  {
    id: "daniil-medvedev",
    title: "다닐 메드베데프 — 각도와 깊이로 짜는 지공의 미학",
    excerpt:
      "낮은 탄도로 깊이를 누적하고, 리턴과 코트 포지셔닝으로 상대의 선택지를 지우는 다닐 메드베데프의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-09-21",
    readTime: "8분",
    badgeColor:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    slug: "daniil-medvedev",
    tags: ["선수 프로필"],
  },
  {
    id: "ben-shelton",
    slug: "ben-shelton",
    tags: ["선수 프로필"],
    title: "벤 쉘튼 — 폭발적 서브와 대담한 전진이 만든 신세대의 속도",
    excerpt:
      "좌손 서브의 파괴력과 대담한 전진, 감각적인 드롭과 발리를 섞어 흐름을 뒤집는 벤 쉘튼의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-09-18",
    readTime: "8분",
    badgeColor: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: "andrey-rublev",
    title: "안드레이 루블레프 — 불꽃 같은 포핸드, 절제된 규율",
    excerpt:
      "강력한 포핸드와 끊임없는 전진 의지로 랠리의 톤을 올리는 안드레이 루블레프의 성장, 스타일, 인간미와 과제를 한 편으로.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-09-07",
    readTime: "8분",
    badgeColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    slug: "andrey-rublev",
    tags: ["선수 프로필"],
  },
  {
    id: "grigor-dimitrov",
    slug: "grigor-dimitrov",
    tags: ["선수 프로필"],
    title: "그리고르 디미트로프 — 우아함과 근성을 다시 정의한 리바이벌",
    excerpt:
      "원핸드 백핸드의 미학과 노련한 전술, 성숙한 멘탈로 커리어의 두 번째 절정을 만드는 그리고르 디미트로프의 성장, 스타일, 인간적 면모를 한 편으로.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-08-27",
    readTime: "8분",
    badgeColor: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: "alexander-zverev",
    title: "알렉산더 즈베레프 — 균형과 리듬으로 구축한 장기전의 기술",
    excerpt:
      "길고 무거운 랠리에서 균형을 잃지 않는 알렉산더 즈베레프의 성장, 플레이 철학, 인간적인 면모와 라이벌 이야기를 한 편으로.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-08-23",
    readTime: "8분",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    slug: "alexander-zverev",
    tags: ["선수 프로필"],
  },
  {
    id: "holger-rune",
    title: "홀거 루네 — 불꽃과 계산 사이의 대담함",
    excerpt:
      "공격적인 리턴과 예측 불가한 변주로 흐름을 흔드는 홀거 루네의 성장, 스타일, 인간적인 면모와 과제를 한 편으로.",
    badge: "최신 글",
    category: "선수 프로필",
    date: "2025-08-11",
    readTime: "8분",
    badgeColor:
      "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
    categoryColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    slug: "holger-rune",
    tags: ["선수 프로필", "서브"],
  },
].map(applyPostOverride);
