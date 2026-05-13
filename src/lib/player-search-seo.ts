import type { PlayerData } from "@/types/player";

export type PlayerSearchSeo = {
  title: string;
  description: string;
  aliases: string[];
  focus: string;
};

const PLAYER_SEARCH_SEO: Record<string, PlayerSearchSeo> = {
  "dominic-thiem": {
    title: "도미니크 티엠·팀 프로필 | 은퇴 이유·US오픈·원핸드 백핸드",
    description:
      "도미니크 티엠, 도미니크 팀으로 검색하는 팬을 위해 US오픈 우승, 은퇴 이유, 원핸드 백핸드와 클레이 코트 전성기를 정리했습니다.",
    aliases: ["도미니크 티엠", "도미니크 팀", "Dominic Thiem", "티엠", "팀"],
    focus: "US오픈 우승, 손목 부상 이후 흐름, 은퇴 배경",
  },
  "carlos-alcaraz": {
    title: "카를로스 알카라스·알 카라스 프로필 | 랭킹·전술·라이벌",
    description:
      "카를로스 알카라스, 카를로스 알 카라스 검색자를 위해 그랜드슬램 우승, 드롭샷, 시너와의 라이벌 구도를 정리했습니다.",
    aliases: ["카를로스 알카라스", "카를로스 알 카라스", "알카라스", "Carlos Alcaraz"],
    focus: "드롭샷, 폭발적인 전환, 시너 라이벌리",
  },
  "martin-landaluce": {
    title: "마르틴 란달루세 프로필 | 주니어 US오픈·ATP 유망주",
    description:
      "마르틴 란달루세와 란달루세 검색자를 위해 주니어 US오픈 우승 이력, 공격형 베이스라인, 성장 포인트를 정리했습니다.",
    aliases: ["마르틴 란달루세", "란달루세", "Martin Landaluce"],
    focus: "스페인 유망주, 주니어 US오픈, 공격형 베이스라인",
  },
  "marie-bouzkova": {
    title: "마리 부즈코바 프로필 | WTA 랭킹·수비력·최근 경기",
    description:
      "마리 부즈코바의 WTA 랭킹, 안정적인 수비력, 경기 운영, 주요 전적과 최근 흐름을 한눈에 정리했습니다.",
    aliases: ["마리 부즈코바", "부즈코바", "Marie Bouzkova"],
    focus: "수비력, 안정적인 랠리, WTA 투어 흐름",
  },
  "miomir-kecmanovic": {
    title: "미오미르 케크마노비치 프로필 | 랭킹·전적·플레이스타일",
    description:
      "미오미르 케크마노비치와 케크마노비치 검색자를 위해 ATP 랭킹, 베이스라인 플레이, 최근 전적과 강점·약점을 정리했습니다.",
    aliases: ["미오미르 케크마노비치", "케크마노비치", "Miomir Kecmanovic"],
    focus: "베이스라인 안정감, 세르비아 ATP 선수, 최근 전적",
  },
  "sebastian-ofner": {
    title: "제바스티안 오프너 프로필 | 세바스찬 오프너·랭킹·전적",
    description:
      "제바스티안 오프너와 세바스찬 오프너 검색자를 위해 ATP 랭킹, 공격적인 베이스라인, 주요 전적을 정리했습니다.",
    aliases: ["제바스티안 오프너", "세바스찬 오프너", "오프너", "Sebastian Ofner"],
    focus: "오스트리아 ATP 선수, 공격형 베이스라인, 투어 전적",
  },
  "arthur-fils": {
    title: "아서 필스 프로필 | 랭킹·전적·프랑스 테니스 유망주",
    description:
      "아서 필스의 ATP 랭킹, 폭발적인 포핸드, 프랑스 테니스 차세대 유망주로서의 성장 흐름과 약점을 정리했습니다.",
    aliases: ["아서 필스", "Arthur Fils", "필스"],
    focus: "프랑스 유망주, 파워 포핸드, 차세대 ATP",
  },
  "wang-xinyu": {
    title: "왕신유·왕신우 프로필 | WTA 랭킹·전적·중국 테니스",
    description:
      "왕신유와 왕신우 검색자를 위해 WTA 랭킹, 중국 테니스 대표 선수로서의 성장, 주요 전적을 정리했습니다.",
    aliases: ["왕신유", "왕신우", "Wang Xinyu", "Xinyu Wang"],
    focus: "중국 WTA 선수, 공격형 스트로크, 복식 경쟁력",
  },
  "tomas-machac": {
    title: "토마시 마하치 프로필 | 랭킹·전적·체코 ATP 선수",
    description:
      "토마시 마하치의 ATP 랭킹, 빠른 템포의 공격형 플레이, 체코 대표 선수로서의 최근 경기 흐름을 정리했습니다.",
    aliases: ["토마시 마하치", "토마스 마하츠", "Tomas Machac"],
    focus: "빠른 템포, 체코 ATP 선수, 공격형 베이스라인",
  },
  "tommy-paul": {
    title: "토미 폴 프로필 | 랭킹·전적·미국 테니스 대표 선수",
    description:
      "토미 폴의 ATP 랭킹, 하드코트 플레이, 주요 전적, 최근 경기 흐름과 미국 테니스에서의 위치를 정리했습니다.",
    aliases: ["토미 폴", "Tommy Paul", "폴"],
    focus: "미국 테니스, 빠른 발, 하드코트 올라운더",
  },
  "jannik-sinner": {
    title: "야닉 시너 프로필 | 랭킹·전적·이탈리아 ATP 스타",
    description:
      "야닉 시너의 ATP 랭킹, 양손 스트로크, 하드코트 강점, 알카라스 라이벌 구도와 최근 전적을 한눈에 정리했습니다.",
    aliases: ["야닉 시너", "얀니크 시너", "Jannik Sinner", "시너"],
    focus: "이탈리아 ATP 스타, 양손 스트로크, 알카라스 라이벌리",
  },
  "jack-draper": {
    title: "잭 드레이퍼 프로필 | 랭킹·전적·영국 ATP 유망주",
    description:
      "잭 드레이퍼의 ATP 랭킹, 왼손잡이 서브와 포핸드, 영국 테니스 유망주로서의 성장 흐름과 최근 전적을 정리했습니다.",
    aliases: ["잭 드레이퍼", "Jack Draper", "드레이퍼"],
    focus: "영국 ATP 유망주, 왼손잡이 서브, 공격형 베이스라인",
  },
  "tallon-griekspoor": {
    title: "탈론 그리에크스푸르 프로필 | 랭킹·전적·네덜란드 ATP",
    description:
      "탈론 그리에크스푸르의 ATP 랭킹, 서브와 포핸드 강점, 네덜란드 대표 선수로서의 전적과 경기 스타일을 정리했습니다.",
    aliases: ["탈론 그리에크스푸르", "탈론 크리에크스푸르", "Tallon Griekspoor", "그리에크스푸르"],
    focus: "네덜란드 ATP 선수, 강한 서브, 하드코트 전개",
  },
  "rafael-nadal": {
    title: "라파엘 나달 프로필 | 은퇴·그랜드슬램·클레이 황제",
    description:
      "라파엘 나달의 은퇴 시점, 그랜드슬램 22회 우승, 롤랑가로스 기록, 클레이 코트 전술과 알카라스와의 연결성을 정리했습니다.",
    aliases: ["라파엘 나달", "나달", "Rafael Nadal", "Rafa Nadal"],
    focus: "클레이 황제, 롤랑가로스 기록, 은퇴와 빅3 커리어",
  },
  "lleyton-hewitt": {
    title: "레이튼 휴이트 프로필 | 전 세계 1위·호주 테니스 전설",
    description:
      "레이튼 휴이트의 세계 1위 기록, 호주 테니스 전설로서의 커리어, 데이비스컵 감독 활동과 후배 선수 영향력을 정리했습니다.",
    aliases: ["레이튼 휴이트", "휴이트", "Lleyton Hewitt"],
    focus: "호주 테니스 전설, 전 세계 1위, 데이비스컵 감독",
  },
  "mackenzie-mcdonald": {
    title: "맥켄지 맥도날드 프로필 | 나달 격파·미국 ATP 선수",
    description:
      "맥켄지 맥도날드의 ATP 랭킹, UCLA 출신 배경, 2023 호주 오픈 나달전 승리와 미국 테니스에서의 위치를 정리했습니다.",
    aliases: ["맥켄지 맥도날드", "매켄지 맥도날드", "Mackenzie McDonald", "McDonald"],
    focus: "2023 호주 오픈 나달전, UCLA 출신, 미국 ATP 선수",
  },
  "yannick-hanfmann": {
    title: "야닉 한프만 프로필 | 랭킹·청각 장애 극복·ATP 전적",
    description:
      "야닉 한프만의 ATP 랭킹, 청각 장애 극복 스토리, 로마 마스터스 8강과 빅서버 플레이를 정리했습니다.",
    aliases: ["야닉 한프만", "Yannick Hanfmann", "한프만"],
    focus: "청각 장애 극복, 빅서버, 독일 ATP 선수",
  },
  "arthur-landercknech": {
    title: "아르튀르 랭데르크네슈 프로필 | 랭킹·전적·프랑스 ATP",
    description:
      "아르튀르 랭데르크네슈, 랭데르크네슈 검색자를 위해 ATP 랭킹, 빅서브, 프랑스 선수로서의 전적을 정리했습니다.",
    aliases: ["아르튀르 랭데르크네슈", "랭데르크네슈", "Arthur Rinderknech"],
    focus: "프랑스 ATP 선수, 빅서브, 장신 플레이어",
  },
};

export function getPlayerSearchSeo(slug: string) {
  return PLAYER_SEARCH_SEO[slug];
}

export function buildPlayerSeoKeywords(
  slug: string,
  player: PlayerData,
  tour: string,
  baseKeywords: string[] = [],
) {
  const searchSeo = getPlayerSearchSeo(slug);
  return [
    player.name,
    player.nameEn,
    `${player.name} 프로필`,
    `${player.name} 랭킹`,
    `${player.name} 전적`,
    ...baseKeywords,
    ...(searchSeo?.aliases ?? []),
    searchSeo?.focus ?? "",
    "테니스 선수",
    tour,
    player.country,
  ].filter(Boolean);
}
