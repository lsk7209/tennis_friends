/**
 * 테니스 선수 데이터 타입 정의 (SSOT 규격 기반)
 */

export type TemplateType = 
  | 'technique'      // 기술 특화형
  | 'mindset'        // 멘탈/전술형
  | 'narrative'      // 성장 서사형
  | 'rivalry'        // 라이벌 구도형
  | 'comeback';      // 복귀·부상형

export type HandType = 'right' | 'left';
export type BackhandType = 'one-handed' | 'two-handed';
export type TourType = 'ATP' | 'WTA';
export type PlayStyleType = 
  | 'aggressive' 
  | 'all-court' 
  | 'big-server' 
  | 'counter-puncher'
  | 'defensive'
  | 'baseliner';
export type SurfaceType = 'hard' | 'clay' | 'grass' | 'mixed';

export interface PlayerStats {
  serveMaxSpeed?: number;        // 서브 최대 속도 (km/h)
  firstServePct?: number;        // 1차 서브 성공률 (%)
  forehandRPM?: number;          // 포핸드 RPM
  tiebreakWinRate?: number;      // 타이브레이크 승률 (%)
  top10Record?: string;          // 탑10 상대 전적 (예: "20승 15패")
  recent10Matches?: string;      // 최근 10경기 (예: "7승 3패")
  fiveSetWinRate?: number;       // 5세트 승률 (%)
  breakPointConversion?: number; // 브레이크 포인트 전환률 (%)
}

export interface Player {
  // 기본 정보
  nameKo: string;                // 한국어 이름
  nameEn: string;                // 영어 이름
  slug: string;                  // URL 슬러그
  country: string;               // 국적
  birthYear: number;             // 출생년도
  hand: HandType;                // 손잡이
  backhand: BackhandType;        // 백핸드 타입
  rankingCurrent: number;         // 현재 랭킹
  rankingPeak: number;           // 최고 랭킹
  rankingPeakDate?: string;      // 최고 랭킹 달성일
  tour: TourType;                // 투어 (ATP/WTA)
  style: PlayStyleType;         // 플레이 스타일
  favoriteSurface: SurfaceType;  // 선호 코트
  templateType: TemplateType;    // 템플릿 타입

  // 스탯
  stats?: PlayerStats;

  // 스토리용 키워드
  tagsStory: string[];           // 예: ["하이라이트 제조기", "전천후", "멘탈 강함"]

  // 추가 정보 (선택)
  height?: number;               // 키 (cm)
  weight?: number;               // 몸무게 (kg)
  coach?: string;                // 코치 이름
  hometown?: string;             // 출신지
  turnedPro?: number;            // 프로 전향 연도
  prizeMoney?: string;           // 상금 총액
}

export interface PlayerMetadata {
  title: string;                 // SEO 타이틀 (45-60자)
  description: string;            // SEO 설명 (110-155자)
  keywords: string[];             // 키워드 배열
  canonical: string;             // Canonical URL
  ogImage?: string;              // OG 이미지 URL
}

export interface PlayerSection {
  id: string;                    // 섹션 ID (앵커용)
  title: string;                 // H2 제목
  content: string;                // 마크다운 콘텐츠
  directAnswer?: string;          // 직답 (110자 이내)
}

export interface PlayerFAQ {
  question: string;              // 질문
  answer: string;                // 답변
}

export interface PlayerTemplate {
  player: Player;
  metadata: PlayerMetadata;
  sections: PlayerSection[];     // 필수 7섹션 + 선택 섹션
  faqs: PlayerFAQ[];             // FAQ (3-5개)
  relatedLinks?: string[];       // 내부 링크 (H2당 1개 이상)
}

