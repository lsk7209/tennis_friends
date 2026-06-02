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
    title: "마르틴 란달루세 프로필 | 랭킹·전적·플레이스타일",
    description:
      "마르틴 란달루세(Martin Landaluce)의 ATP 프로필입니다. 랭킹 흐름, 전적, 플레이스타일, 성장 포인트를 한눈에 정리했습니다.",
    aliases: ["마르틴 란달루세", "란달루세", "Martin Landaluce"],
    focus: "스페인 유망주의 랭킹 흐름과 경기 스타일",
  },
  "marie-bouzkova": {
    title: "마리 부즈코바 프로필 | 랭킹·전적·플레이스타일",
    description:
      "마리 부즈코바(Marie Bouzkova)의 WTA 프로필입니다. 랭킹, 전적, 수비력과 경기 운영, 팬들이 자주 찾는 핵심 정보를 모았습니다.",
    aliases: ["마리 부즈코바", "부즈코바", "Marie Bouzkova"],
    focus: "WTA 랭킹 흐름과 안정적인 수비형 플레이",
  },
  "miomir-kecmanovic": {
    title: "미오미르 케크마노비치 프로필 | 랭킹·전적·스타일",
    description:
      "미오미르 케크마노비치(Miomir Kecmanovic)의 ATP 선수 정보입니다. 랭킹, 전적, 기본기 중심 플레이스타일과 관전 포인트를 정리했습니다.",
    aliases: ["미오미르 케크마노비치", "케크마노비치", "Miomir Kecmanovic"],
    focus: "세르비아 선수의 안정적인 경기 운영과 랭킹 정보",
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
  "arthur-rinderknech": {
    title: "아르튀르 랑데르크네슈 프로필 | 랭킹·전적·서브",
    description:
      "아르튀르 랑데르크네슈(Arthur Rinderknech)의 ATP 프로필입니다. 랭킹, 전적, 서브 기반 플레이스타일과 주요 강점을 정리했습니다.",
    aliases: ["아르튀르 랑데르크네슈", "랑데르크네슈", "Arthur Rinderknech"],
    focus: "프랑스 선수의 서브 강점과 경기 흐름",
  },
  "arthur-landercknech": {
    title: "아르튀르 랑데르크네슈 프로필 | 랭킹·전적·서브",
    description:
      "아르튀르 랑데르크네슈의 ATP 랭킹, 최근 전적, 장신 빅서브와 프랑스 투어 선수 특징을 정리했습니다.",
    aliases: ["아르튀르 랑데르크네슈", "랭데르크네슈", "Arthur Rinderknech"],
    focus: "프랑스 ATP 선수, 빅서브, 장신 플레이어",
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
  "daniel-evans": {
    title: "다니엘 에반스 프로필 | 랭킹·전적·슬라이스 스타일",
    description:
      "다니엘 에반스(Daniel Evans)의 ATP 선수 정보입니다. 랭킹, 전적, 슬라이스와 네트 플레이 중심의 경기 운영을 정리했습니다.",
    aliases: ["다니엘 에반스", "댄 에반스", "Daniel Evans", "Dan Evans"],
    focus: "영국 테크니션의 슬라이스와 전술 운영",
  },
  "alexandre-muller": {
    title: "알렉상드르 뮐러 프로필 | 랭킹·전적·경기 스타일",
    description:
      "알렉상드르 뮐러(Alexandre Muller)의 ATP 프로필입니다. 랭킹, 전적, 스트로크 기반 경기 운영과 최근 흐름을 정리했습니다.",
    aliases: ["알렉상드르 뮐러", "뮐러", "Alexandre Muller"],
    focus: "프랑스 선수의 스트로크 운영과 랭킹 흐름",
  },
  "jiri-lehecka": {
    title: "이리 레헤츠카 프로필 | 랭킹·전적·공격 스타일",
    description:
      "이리 레헤츠카(Jiri Lehecka)의 ATP 선수 정보입니다. 랭킹, 전적, 공격적인 스트로크와 성장 포인트를 정리했습니다.",
    aliases: ["이리 레헤츠카", "레헤츠카", "Jiri Lehecka"],
    focus: "체코 선수의 플랫 스트로크와 성장세",
  },
  "laslo-djere": {
    title: "라슬로 제레 프로필 | 랭킹·전적·클레이 스타일",
    description:
      "라슬로 제레(Laslo Djere)의 ATP 프로필입니다. 랭킹, 전적, 클레이 코트 강점과 끈질긴 경기 운영을 정리했습니다.",
    aliases: ["라슬로 제레", "제레", "Laslo Djere"],
    focus: "클레이 기반 경기력과 랭킹 정보",
  },
  "hamad-medjedovic": {
    title: "하마드 메제도비치 프로필 | 랭킹·전적·성장세",
    description:
      "하마드 메제도비치(Hamad Medjedovic)의 ATP 선수 정보입니다. 랭킹, 전적, 파워형 플레이와 차세대 성장 포인트를 정리했습니다.",
    aliases: ["하마드 메제도비치", "메제도비치", "Hamad Medjedovic"],
    focus: "세르비아 유망주의 파워와 성장 흐름",
  },
  "francisco-comesana": {
    title: "프란시스코 코메사냐 프로필 | 랭킹·전적·클레이",
    description:
      "프란시스코 코메사냐(Francisco Comesana)의 ATP 프로필입니다. 랭킹, 전적, 클레이 기반 경기 운영과 성장 가능성을 정리했습니다.",
    aliases: ["프란시스코 코메사냐", "코메사냐", "Francisco Comesana"],
    focus: "아르헨티나 선수의 클레이 기반 경기 운영",
  },
  "ethan-quinn": {
    title: "이선 퀸 프로필 | 랭킹·전적·미국 ATP 유망주",
    description:
      "이선 퀸(Ethan Quinn)의 ATP 선수 정보입니다. 랭킹, 전적, 미국 유망주로서의 성장 흐름과 경기 스타일을 정리했습니다.",
    aliases: ["이선 퀸", "에단 퀸", "Ethan Quinn"],
    focus: "미국 유망주의 랭킹 흐름과 공격 전개",
  },
  "polina-kudermetova": {
    title: "폴리나 쿠데르메토바 프로필 | 랭킹·전적·WTA",
    description:
      "폴리나 쿠데르메토바(Polina Kudermetova)의 WTA 프로필입니다. 랭킹, 전적, 경기 스타일과 성장 포인트를 정리했습니다.",
    aliases: ["폴리나 쿠데르메토바", "쿠데르메토바", "Polina Kudermetova"],
    focus: "WTA 성장세와 안정적인 스트로크 운영",
  },
  "dino-prizmic": {
    title: "디노 프리즈미치 프로필 | 랭킹·전적·크로아티아 유망주",
    description:
      "디노 프리즈미치(Dino Prizmic)의 ATP 프로필입니다. 랭킹, 전적, 주니어 롤랑가로스 이후의 성장 흐름과 경기 강점을 정리했습니다.",
    aliases: ["디노 프리즈미치", "프리즈미치", "Dino Prizmic"],
    focus: "크로아티아 유망주의 끈질긴 랠리와 성장세",
  },
  "camilo-ugo-carabelli": {
    title: "카밀로 우고 카라벨리 프로필 | 랭킹·전적·클레이",
    description:
      "카밀로 우고 카라벨리(Camilo Ugo Carabelli)의 ATP 프로필입니다. 랭킹, 전적, 클레이 코트 경기 운영과 관전 포인트를 정리했습니다.",
    aliases: ["카밀로 우고 카라벨리", "카라벨리", "Camilo Ugo Carabelli"],
    focus: "아르헨티나 클레이 코트형 선수의 경기 운영",
  },
  "linda-noskova": {
    title: "린다 노스코바 프로필 | 랭킹·전적·WTA 유망주",
    description:
      "린다 노스코바(Linda Noskova)의 WTA 선수 정보입니다. 랭킹, 전적, 공격적인 스트로크와 체코 테니스 유망주로서의 성장세를 정리했습니다.",
    aliases: ["린다 노스코바", "노스코바", "Linda Noskova"],
    focus: "체코 WTA 유망주의 공격형 스트로크",
  },
  "alejandro-davidovich-fokina": {
    title: "알레한드로 다비도비치 포키나 프로필 | 랭킹·전적",
    description:
      "알레한드로 다비도비치 포키나(Alejandro Davidovich Fokina)의 ATP 프로필입니다. 랭킹, 전적, 역동적인 수비와 전환 플레이를 정리했습니다.",
    aliases: [
      "알레한드로 다비도비치 포키나",
      "다비도비치 포키나",
      "Alejandro Davidovich Fokina",
    ],
    focus: "스페인 선수의 수비 전환과 활동량",
  },
  "jakub-mensik": {
    title: "야쿠프 멘시크 프로필 | 랭킹·전적·체코 ATP 유망주",
    description:
      "야쿠프 멘시크(Jakub Mensik)의 ATP 프로필입니다. 랭킹, 전적, 장신 파워와 체코 테니스 유망주로서의 성장 포인트를 정리했습니다.",
    aliases: ["야쿠프 멘시크", "멘시크", "Jakub Mensik"],
    focus: "체코 유망주의 장신 파워와 랭킹 상승세",
  },
  "karen-khachanov": {
    title: "카렌 하차노프 프로필 | 랭킹·전적·파워 스타일",
    description:
      "카렌 하차노프(Karen Khachanov)의 ATP 선수 정보입니다. 랭킹, 전적, 강한 서브와 포핸드 기반 경기 스타일을 정리했습니다.",
    aliases: ["카렌 하차노프", "하차노프", "Karen Khachanov"],
    focus: "파워형 베이스라인과 빅매치 경쟁력",
  },
  "luciano-darderi": {
    title: "루치아노 다르데리 프로필 | 랭킹·전적·클레이 스타일",
    description:
      "루치아노 다르데리(Luciano Darderi)의 ATP 프로필입니다. 랭킹, 전적, 클레이 기반 경기 운영과 성장 흐름을 정리했습니다.",
    aliases: ["루치아노 다르데리", "다르데리", "Luciano Darderi"],
    focus: "이탈리아 선수의 클레이 기반 경기 운영",
  },
};

function titleizeSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function compactList(items: Array<string | number | undefined | null>) {
  return items
    .map((item) => `${item ?? ""}`.trim())
    .filter(Boolean)
    .filter((item, index, list) => list.indexOf(item) === index);
}

function localizePlayingHand(value?: string) {
  if (value === "Left-handed") return "왼손잡이";
  if (value === "Right-handed") return "오른손잡이";
  return value;
}

export function buildPlayerSeoTitle(player: PlayerData, tour: string) {
  const rank = player.rankingCurrent || player.rank;
  const rankPart = rank ? `랭킹 ${rank}위` : "랭킹";
  return `${player.name}(${player.nameEn}) 프로필 | ${tour} ${rankPart}·전적·플레이스타일`;
}

export function buildPlayerSeoDescription(player: PlayerData, tour: string) {
  const rank = player.rankingCurrent || player.rank;
  const rankPart = rank ? `현재 랭킹 ${rank}위, ` : "";
  const style = player.style ? `${player.style} 스타일, ` : "";
  const playSide = localizePlayingHand(player.plays);
  const handPart = playSide ? `${playSide}, ` : "";
  const summary =
    player.detailedProfile?.oneLineSummary || player.longBio || player.bio || "";
  const summaryPart = summary ? ` ${summary.slice(0, 70)}` : "";

  return `${player.name}(${player.nameEn}) 선수의 ${tour} 프로필입니다. ${rankPart}${player.country} 출신, ${handPart}${style}주요 강점과 경기 흐름을 정리했습니다.${summaryPart}`;
}

export function getPlayerSearchSeo(slug: string): PlayerSearchSeo | undefined {
  const seo = PLAYER_SEARCH_SEO[slug];
  if (!seo) return undefined;

  return {
    ...seo,
    aliases: compactList(seo.aliases),
  };
}

export function buildPlayerSeoKeywords(
  slug: string,
  player: PlayerData,
  tour: string,
  baseKeywords: string[] = [],
) {
  const slugTitle = titleizeSlug(slug);
  const searchSeo = getPlayerSearchSeo(slug);

  return compactList([
    player.name,
    player.nameEn,
    slugTitle,
    `${player.name} 프로필`,
    `${player.nameEn} profile`,
    `${player.name} 랭킹`,
    `${player.nameEn} ranking`,
    `${player.name} 플레이스타일`,
    `${player.nameEn} playing style`,
    `${player.name} 전적`,
    `${player.nameEn} tennis`,
    player.country,
    player.style,
    player.favoriteSurface,
    localizePlayingHand(player.plays),
    player.backhand,
    ...(searchSeo?.aliases ?? []),
    searchSeo?.focus,
    "테니스 선수",
    "선수 프로필",
    "테니스 랭킹",
    tour,
    ...baseKeywords,
  ]);
}
