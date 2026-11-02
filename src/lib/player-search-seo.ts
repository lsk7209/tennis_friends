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
  "hubert-hurkacz": {
    title: "후베르트 후르카츠 프로필 | 키·서브·마스터스 우승 및 윔블던 4강",
    description:
      "폴란드 테니스 에이스 후베르트 후르카츠(Hubert Hurkacz) 프로필. 196cm 장신 서브, 2021 마이애미·2023 상하이 마스터스 1000 우승과 윔블던 4강 공식 기록 및 플레이스타일을 정리했습니다.",
    aliases: ["후베르트 후르카츠", "후르카츠", "Hubert Hurkacz", "Hubi", "후르카츠 프로필", "후르카츠 서브"],
    focus: "마스터스 1000 2회 우승, 장신 서브와 윔블던 4강",
  },
  "andrey-rublev": {
    title: "안드레이 루블레프 프로필 | 포핸드·강속구·마스터스 우승 및 플레이스타일",
    description:
      "안드레이 루블레프(Andrey Rublev)의 시속 160km급 초강력 포핸드와 공격형 베이스라인 전술. 몬테카를로·마드리드 우승 기록과 공식 ATP 프로필을 정리했습니다.",
    aliases: ["안드레이 루블레프", "루블레프", "Andrey Rublev", "루블레프 포핸드"],
    focus: "강력한 포핸드와 공격형 베이스라인, 마스터스 우승 경력",
  },
  "carlos-alcaraz": {
    title: "카를로스 알카라스·알 카라스 프로필 | 전술·라이벌·플레이스타일",
    description:
      "카를로스 알카라스, 카를로스 알 카라스 검색자를 위해 그랜드슬램 우승 이력, 드롭샷, 시너와의 라이벌 구도를 정리했습니다.",
    aliases: [
      "카를로스 알카라스",
      "카를로스 알 카라스",
      "알카라스",
      "Carlos Alcaraz",
    ],
    focus: "드롭샷, 폭발적인 전환, 시너 라이벌리",
  },
  "martin-landaluce": {
    title: "마르틴 란달루세 프로필 | US오픈 주니어 우승·스페인 차세대 기대주",
    description:
      "스페인 차세대 테니스 기대주 마르틴 란달루세(Martin Landaluce) 프로필. US오픈 주니어 챔피언 출신이자 라파 나달 아카데미 출신으로 강력한 서브와 공격형 베이스라인 전술을 분석했습니다.",
    aliases: ["마르틴 란달루세", "란달루세", "Martin Landaluce", "란달루체", "스페인 테니스 유망주"],
    focus: "스페인 유망주의 경기 스타일과 성장 포인트",
  },
  "marie-bouzkova": {
    title: "마리 부즈코바 프로필 | 끈질긴 수비력과 체코 WTA 에이스",
    description:
      "체코 출신 마리 부즈코바(Marie Bouzkova)의 WTA 프로필입니다. 코트를 폭넓게 커버하는 견고한 수비력, 경기 운영 전술, 서브와 스트로크 강점을 정리했습니다.",
    aliases: ["마리 부즈코바", "부즈코바", "Marie Bouzkova", "부츠코바"],
    focus: "안정적인 수비형 플레이와 경기 운영",
  },
  "miomir-kecmanovic": {
    title: "미오미르 케크마노비치 프로필 | 세르비아 국가대표·견고한 양손 백핸드",
    description:
      "세르비아 테니스 국가대표 미오미르 케크마노비치(Miomir Kecmanovic) 프로필. 견고한 양손 백핸드와 정교한 카운터 펀치, ATP 투어 우승 이력과 전술 특징을 정리했습니다.",
    aliases: ["미오미르 케크마노비치", "케크마노비치", "Miomir Kecmanovic", "케츠마노비치"],
    focus: "세르비아 선수의 안정적인 경기 운영과 카운터 펀치",
  },
  "sebastian-ofner": {
    title: "제바스티안 오프너 프로필 | 롤랑가로스 16강·191cm 오스트리아 에이스·플레이스타일",
    description:
      "오스트리아 테니스의 간판 제바스티안 오프너(Sebastian Ofner) 프로필. 2023 프랑스 오픈 롤랑가로스 16강 진출, 191cm 장신에서 뿜어져 나오는 강한 서브와 공격적인 플랫 스트로크 스타일을 분석했습니다.",
    aliases: [
      "제바스티안 오프너",
      "세바스찬 오프너",
      "오프너",
      "Sebastian Ofner",
    ],
    focus: "롤랑가로스 16강, 오스트리아 에이스, 191cm 장신 빅서브",
  },
  "arthur-fils": {
    title: "아서 필스 프로필 | 함부르크·도쿄 ATP 500 2관왕·폭발적 포핸드·프랑스 차세대 에이스",
    description:
      "프랑스 테니스의 미래 아서 필스(Arthur Fils) 프로필. 2024 함부르크 오픈 및 도쿄 재팬 오픈 ATP 500 우승, 압도적인 피지컬 탄력과 시속 160km에 육박하는 포핸드 공격 전술을 정리했습니다.",
    aliases: ["아서 필스", "Arthur Fils", "필스", "아르튀르 필스"],
    focus: "2024 ATP 500 2회 우승, 프랑스 차세대 에이스, 파워 포핸드",
  },
  "arthur-rinderknech": {
    title:
      "아르튀르 랑데르크네슈(Arthur Rinderknech) 프로필 | 196cm 빅서브·프랑스 에이스",
    description:
      "프랑스 장신 테니스 스타 아르튀르 랑데르크네슈(Arthur Rinderknech) 프로필. 196cm에서 내리꽂는 220km/h대 빅서브와 네트 대시, 단식과 복식을 아우르는 실전 플레이스타일을 정리했습니다.",
    aliases: [
      "아르튀르 랭데르크네슈",
      "아르튀르 랑데르크네슈",
      "랭데르크네슈",
      "랑데르크네슈",
      "Arthur Rinderknech",
    ],
    focus: "프랑스 선수의 196cm 빅서브 강점과 네트 플레이",
  },
  "arthur-landercknech": {
    title: "아르튀르 랑데르크네슈 프로필 | 196cm 빅서브·프랑스 테니스 스타",
    description:
      "아르튀르 랑데르크네슈의 196cm 장신 빅서브와 프랑스 투어 선수 특징, 단복식 올라운드 플레이스타일을 정리했습니다.",
    aliases: ["아르튀르 랑데르크네슈", "랭데르크네슈", "Arthur Rinderknech"],
    focus: "프랑스 ATP 선수, 빅서브, 장신 플레이어",
  },
  "wang-xinyu": {
    title: "왕신유(왕신우) 프로필 | 롤랑가로스 복식 우승·올림픽 은메달·182cm 중국 WTA 스타",
    description:
      "중국 여자 테니스의 간판 왕신유(Wang Xinyu) 프로필. 2023 프랑스 오픈 여자복식 챔피언, 2024 파리 올림픽 혼합복식 은메달, 182cm 큰 키를 살린 호쾌한 플랫 스트로크와 올라운드 강점을 정리했습니다.",
    aliases: ["왕신유", "왕신우", "Wang Xinyu", "Xinyu Wang"],
    focus: "롤랑가로스 복식 우승, 파리 올림픽 은메달, 182cm 장신 공격형 스트로크",
  },
  "tomas-machac": {
    title: "토마시 마하치 프로필 | 2024 파리올림픽 혼복 금메달·초고속 템포 플랫 스트로크·체코 에이스",
    description:
      "체코 테니스의 핵심 토마시 마하치(Tomas Machac) 프로필. 2024 파리 올림픽 혼합복식 금메달 획득, 라이징 볼을 빠르게 공략하는 초고속 템포 플랫 스트로크와 투어 활약상을 정리했습니다.",
    aliases: ["토마시 마하치", "토마스 마하츠", "Tomas Machac", "마하치"],
    focus: "체코 국가대표, 2024 파리 올림픽 금메달, 초고속 템포 플랫 스트로크",
  },
  "tommy-paul": {
    title: "토미 폴 프로필 | 플레이스타일·미국 테니스 대표 선수",
    description:
      "토미 폴의 하드코트 플레이, 빠른 발과 올라운드 경기 운영, 미국 테니스에서의 위치를 정리했습니다.",
    aliases: ["토미 폴", "Tommy Paul", "폴"],
    focus: "미국 테니스, 빠른 발, 하드코트 올라운더",
  },
  "jannik-sinner": {
    title: "야닉 시너 프로필 | 플레이스타일·이탈리아 ATP 스타",
    description:
      "야닉 시너의 양손 스트로크, 하드코트 강점, 알카라스 라이벌 구도와 플레이스타일을 한눈에 정리했습니다.",
    aliases: ["야닉 시너", "얀니크 시너", "Jannik Sinner", "시너"],
    focus: "이탈리아 ATP 스타, 양손 스트로크, 알카라스 라이벌리",
  },
  "jack-draper": {
    title: "잭 드레이퍼 프로필 | 플레이스타일·영국 ATP 유망주",
    description:
      "잭 드레이퍼의 왼손잡이 서브와 포핸드, 영국 테니스 유망주로서의 성장 흐름과 플레이스타일을 정리했습니다.",
    aliases: ["잭 드레이퍼", "Jack Draper", "드레이퍼"],
    focus: "영국 ATP 유망주, 왼손잡이 서브, 공격형 베이스라인",
  },
  "tallon-griekspoor": {
    title: "탈론 그리에크스푸르 프로필 | ATP 투어 2회 우승·네덜란드 1위 거포·플레이스타일",
    description:
      "네덜란드 랭킹 1위 탈론 그리에크스푸르(Tallon Griekspoor) 프로필. 푸네 오픈과 로스말렌 투어 우승 기록, 시속 215km를 넘나드는 킥 서브와 헤비 포핸드 공격 전술을 정리했습니다.",
    aliases: [
      "탈론 그리에크스푸르",
      "탈론 크리에크스푸르",
      "Tallon Griekspoor",
      "그리에크스푸르",
    ],
    focus: "ATP 투어 2회 우승, 네덜란드 1위, 킥 서브와 헤비 포핸드",
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
      "맥켄지 맥도날드의 UCLA 출신 배경, 2023 호주 오픈 나달전 승리와 미국 테니스에서의 위치를 정리했습니다.",
    aliases: [
      "맥켄지 맥도날드",
      "매켄지 맥도날드",
      "Mackenzie McDonald",
      "McDonald",
    ],
    focus: "2023 호주 오픈 나달전, UCLA 출신, 미국 ATP 선수",
  },
  "yannick-hanfmann": {
    title: "야닉 한프만 프로필 | 청각 장애 극복 스토리·193cm 파워 서브·로마 마스터스 8강",
    description:
      "독일 베테랑 야닉 한프만(Yannick Hanfmann)의 인간 승리 프로필. 선천적 청각 장애를 극복하고 ATP 투어에 자리잡은 과정, 193cm 장신에서 나오는 강력한 킥 서브와 로마 마스터스 8강 성과를 정리했습니다.",
    aliases: ["야닉 한프만", "Yannick Hanfmann", "한프만", "얀니크 한프만"],
    focus: "청각 장애 극복 스토리, 193cm 장신 파워 서브, 로마 마스터스 8강",
  },
  "daniel-evans": {
    title: "다니엘 에반스(댄 에반스) 프로필 | 원핸드 백핸드 슬라이스·영국 베테랑",
    description:
      "영국 테니스의 지능형 테크니션 다니엘 에반스(Dan Evans) 프로필. 까다로운 원핸드 백핸드 백스핀 슬라이스, 올라운드 네트 대시, ATP 투어 우승 이력과 전술 노하우를 정리했습니다.",
    aliases: ["다니엘 에반스", "댄 에반스", "Daniel Evans", "Dan Evans"],
    focus: "영국 테크니션의 슬라이스와 전술 운영",
  },
  "alexandre-muller": {
    title: "알렉상드르 뮐러 프로필 | 로마 마스터스 루블레프전 승리 16강·프랑스 테크니션",
    description:
      "프랑스 테니스의 끈질긴 테크니션 알렉상드르 뮐러(Alexandre Muller) 프로필. 2024 로마 마스터스 루블레프 격파 16강 진출, 모로코 오픈 결승 및 정교한 베이스라인 카운터 펀치 스타일을 분석했습니다.",
    aliases: ["알렉상드르 뮐러", "뮐러", "Alexandre Muller", "알렉산드르 뮐러"],
    focus: "로마 마스터스 16강, 루블레프 격파, 프랑스 카운터 펀처",
  },
  "jiri-lehecka": {
    title: "이리 레헤츠카 프로필 | 호주오픈 8강·체코 차세대 거포·플레이스타일",
    description:
      "체코 테니스의 차세대 간판 이리 레헤츠카(Jiri Lehecka) 프로필. 호주오픈 8강 진출과 시속 210km대 플랫 서브, 강력한 양날 스트로크 파워와 주요 경기 전술을 정리했습니다.",
    aliases: ["이리 레헤츠카", "레헤츠카", "Jiri Lehecka"],
    focus: "체코 선수의 플랫 스트로크와 성장세",
  },
  "laslo-djere": {
    title: "라슬로 제레 프로필 | ATP 500 리우 오픈 우승·세르비아 클레이 강자·경기스타일",
    description:
      "세르비아 테니스의 베테랑 라슬로 제레(Laslo Djere) 프로필. ATP 500 리우 오픈 챔피언이자 투어 2회 우승, 지치지 않는 체력과 클레이 코트 마라톤 랠리 장악력을 정리했습니다.",
    aliases: ["라슬로 제레", "제레", "Laslo Djere"],
    focus: "ATP 500 리우 오픈 우승, 세르비아 국가대표, 클레이 코트 마라토너",
  },
  "hamad-medjedovic": {
    title: "하마드 메제도비치 프로필 | 넥스트젠 ATP 파이널스 우승·시속 220km 광속 서브·세르비아 거포",
    description:
      "조코비치의 후계자로 꼽히는 세르비아 거포 하마드 메제도비치(Hamad Medjedovic) 프로필. 2023 Next Gen ATP 파이널스 무패 우승, 시속 220km를 넘나드는 폭발적인 서브와 강력한 포핸드 화력을 분석했습니다.",
    aliases: ["하마드 메제도비치", "메제도비치", "Hamad Medjedovic", "메제도비치 서브"],
    focus: "2023 Next Gen ATP 파이널스 우승, 시속 220km 서브, 세르비아 파워 히터",
  },
  "francisco-comesana": {
    title: "프란시스코 코메사냐 프로필 | 윔블던 루블레프 격파 대이변·헤비 톱스핀 포핸드·아르헨티나 에이스",
    description:
      "2024 윔블던에서 안드레이 루블레프를 꺾고 메이저 대이변을 쓴 아르헨티나의 프란시스코 코메사냐(Francisco Comesana) 프로필. 클레이에서 다져진 헤비 톱스핀과 과감한 네트 플레이를 분석했습니다.",
    aliases: ["프란시스코 코메사냐", "코메사냐", "Francisco Comesana"],
    focus: "2024 윔블던 1회전 이변, 헤비 톱스핀 포핸드, 아르헨티나 투어 신성",
  },
  "ethan-quinn": {
    title: "이선 퀸 프로필 | 2023 NCAA 싱글스 챔피언·미국 ATP 차세대 거포·플레이스타일",
    description:
      "조지아대 출신이자 2023 NCAA 디비전 1 단식 챔피언 이선 퀸(Ethan Quinn) 프로필. 시속 210km대 서브와 폭발적인 포핸드 화력, 미국 테니스 차세대 유망주로서의 성장세를 정리했습니다.",
    aliases: ["이선 퀸", "에단 퀸", "Ethan Quinn"],
    focus: "2023 NCAA 챔피언, 미국 ATP 유망주, 공격형 하드히터",
  },
  "polina-kudermetova": {
    title: "폴리나 쿠데르메토바 프로필 | 공격형 플랫 스트로크·쿠데르메토바 자매·WTA 라이징스타",
    description:
      "WTA 투어의 떠오르는 신성 폴리나 쿠데르메토바(Polina Kudermetova) 프로필. 베로니카 쿠데르메토바의 동생으로, 빠른 라이징 볼 공략과 날카로운 플랫 백핸드 강점을 정리했습니다.",
    aliases: ["폴리나 쿠데르메토바", "쿠데르메토바", "Polina Kudermetova"],
    focus: "쿠데르메토바 자매, WTA 라이징스타, 공격형 플랫 스트로크",
  },
  "dino-prizmic": {
    title: "디노 프리즈미치 프로필 | 롤랑가로스 주니어 우승·호주오픈 조코비치전 혈투·크로아티아 에이스",
    description:
      "크로아티아 테니스의 차세대 간판 디노 프리즈미치(Dino Prizmic) 프로필. 2023 롤랑가로스 주니어 단식 우승, 2024 호주오픈 조코비치와의 4시간 명승부 및 끈질긴 베이스라인 방어력을 분석했습니다.",
    aliases: ["디노 프리즈미치", "프리즈미치", "Dino Prizmic"],
    focus: "2023 주니어 롤랑가로스 우승, 호주오픈 조코비치전, 크로아티아 신성",
  },
  "camilo-ugo-carabelli": {
    title: "카밀로 우고 카라벨리 프로필 | 클레이 코트 스페셜리스트·챌린저 다관왕·아르헨티나 투어러",
    description:
      "아르헨티나 클레이 코트의 강자 카밀로 우고 카라벨리(Camilo Ugo Carabelli) 프로필. 끈질긴 카운터 펀치와 클레이 코트 전술 운영, 투어 무대에서의 경쟁력 포인트를 정리했습니다.",
    aliases: ["카밀로 우고 카라벨리", "카라벨리", "Camilo Ugo Carabelli"],
    focus: "클레이 코트 스페셜리스트, 아르헨티나 ATP, 카운터 펀처",
  },
  "linda-noskova": {
    title: "린다 노스코바 프로필 | 호주오픈 시비옹테크 격파 8강·체코 하드코트 하드히터·WTA 라이징스타",
    description:
      "체코 여자 테니스의 돌풍 린다 노스코바(Linda Noskova) 프로필. 2024 호주오픈에서 세계 1위 시비옹테크를 꺾고 8강에 오른 결정력 높은 양손 백핸드와 직선 플랫 스트로크 강점을 정리했습니다.",
    aliases: ["린다 노스코바", "노스코바", "Linda Noskova", "린다 노스코바 서브"],
    focus: "2024 호주오픈 8강, 시비옹테크 격파, 체코 차세대 하드히터",
  },
  "alejandro-davidovich-fokina": {
    title: "알레한드로 다비도비치 포키나 프로필 | 몬테카를로 결승·언더핸드 서브·스페인 테크니션",
    description:
      "스페인 테니스의 역동적인 테크니션 알레한드로 다비도비치 포키나(Alejandro Davidovich Fokina) 프로필. 몬테카를로 마스터스 결승 진출, 깜짝 언더핸드 서브와 다이빙 발리, 폭발적인 코트 커버리지를 분석했습니다.",
    aliases: [
      "알레한드로 다비도비치 포키나",
      "다비도비치 포키나",
      "Alejandro Davidovich Fokina",
      "포키나",
    ],
    focus: "몬테카를로 준우승, 스페인 테크니션, 언더핸드 서브와 다이빙 발리",
  },
  "jakub-mensik": {
    title: "야쿠프 멘시크 프로필 | 카타르오픈 돌풍 결승·193cm 광속 서브·체코 차세대 거포",
    description:
      "체코 테니스의 슈퍼 루키 야쿠프 멘시크(Jakub Mensik) 프로필. 2024 카타르 오픈에서 머레이·루블레프를 꺾고 결승에 오른 활약상, 193cm 장신에서 뿜어져 나오는 시속 220km 서브와 플랫 스트로크를 분석했습니다.",
    aliases: ["야쿠프 멘시크", "멘시크", "Jakub Mensik", "멘식"],
    focus: "2024 카타르 오픈 결승, 체코 ATP 신성, 193cm 빅서브와 플랫 스트로크",
  },
  "karen-khachanov": {
    title: "카렌 하차노프 프로필 | 파리 마스터스 우승·올림픽 은메달·198cm 파워 베이스라이너",
    description:
      "ATP 투어 최강의 중포 카렌 하차노프(Karen Khachanov) 프로필. 2018 파리 마스터스에서 조코비치를 꺾고 우승한 기록과 도쿄 올림픽 은메달, 198cm 피지컬에서 뿜어져 나오는 묵직한 포핸드와 빅서브 전술을 정리했습니다.",
    aliases: ["카렌 하차노프", "하차노프", "Karen Khachanov", "하차노프 서브"],
    focus: "파리 마스터스 우승, 도쿄 올림픽 은메달, 198cm 파워 포핸드",
  },
  "luciano-darderi": {
    title: "루치아노 다르데리 프로필 | 코르도바 오픈 우승·헤비 톱스핀 포핸드·이탈리아 신성",
    description:
      "이탈리아 테니스의 클레이 강자 루치아노 다르데리(Luciano Darderi) 프로필. 2024 코르도바 오픈 투어 첫 우승, 아르헨티나 태생의 끈질긴 풋워크와 무거운 헤비 톱스핀 포핸드 위력을 분석했습니다.",
    aliases: ["루치아노 다르데리", "다르데리", "Luciano Darderi"],
    focus: "2024 코르도바 오픈 우승, 이탈리아 ATP 라이징스타, 헤비 톱스핀 포핸드",
  },
  "novak-djokovic": {
    title: "노박 조코비치 프로필 | 그랜드슬램 24회 우승·올림픽 금메달·GOAT 플레이스타일",
    description:
      "역사상 가장 위대한 테니스 선수 노박 조코비치(Novak Djokovic) 프로필. 그랜드슬램 24회 우승, 2024 파리 올림픽 금메달로 커리어 골든 그랜드슬램을 완성한 GOAT의 전술, 리턴과 백핸드 강점을 분석했습니다.",
    aliases: [
      "노박 조코비치",
      "조코비치",
      "Novak Djokovic",
      "Djokovic",
      "조코비치 우승",
      "조코비치 올림픽",
    ],
    focus: "그랜드슬램 24회 우승, 골든 그랜드슬램, GOAT 플레이스타일, 정교한 백핸드와 리턴",
  },
  "daniil-medvedev": {
    title: "다닐 메드베데프 프로필 | US오픈 우승·변칙 문어 스트로크·ATP 하드코트 마스터",
    description:
      "하드코트의 지배자 다닐 메드베데프(Daniil Medvedev) 프로필. 2021 US오픈 우승, 예측 불가능한 플랫 스트로크와 깊은 베이스라인 수비, 강력한 198cm 서브 및 경기 운영 전술을 정리했습니다.",
    aliases: [
      "다닐 메드베데프",
      "메드베데프",
      "Daniil Medvedev",
      "Medvedev",
      "메드베데프 서브",
    ],
    focus: "US오픈 우승, 하드코트 마스터, 198cm 플랫 서브, 깊은 베이스라인 수비",
  },
  "alexander-zverev": {
    title: "알렉산더 츠베레프 프로필 | 올림픽 금메달·198cm 백핸드 거포·ATP 마스터스 우승",
    description:
      "독일 테니스 에이스 알렉산더 츠베레프(Alexander Zverev) 프로필. 도쿄 올림픽 금메달, 마스터스 1000 다관왕, 198cm 장신에서 뿜어져 나오는 시속 225km 서브와 투어 최강의 양손 백핸드를 분석했습니다.",
    aliases: [
      "알렉산더 츠베레프",
      "츠베레프",
      "Alexander Zverev",
      "Sascha Zverev",
      "츠베레프 백핸드",
    ],
    focus: "도쿄 올림픽 금메달, 마스터스 1000 6회 우승, 투어 최강 백핸드와 빅서브",
  },
  "stefanos-tsitsipas": {
    title: "스테파노스 치치파스 프로필 | 몬테카를로 마스터스 3회 우승·원핸드 백핸드·그리스 에이스",
    description:
      "그리스 테니스의 간판 스테파노스 치치파스(Stefanos Tsitsipas) 프로필. 몬테카를로 마스터스 3회 우승, 우아한 원핸드 백핸드와 공격적인 포핸드 런어라운드, 클레이 코트 전술을 정리했습니다.",
    aliases: [
      "스테파노스 치치파스",
      "치치파스",
      "Stefanos Tsitsipas",
      "Tsitsipas",
      "치치파스 원핸드",
    ],
    focus: "몬테카를로 마스터스 3회 우승, 원핸드 백핸드, 공격적인 포핸드",
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

const KOREAN_COUNTRY_NAMES: Record<string, string> = {
  Australia: "호주",
  Austria: "오스트리아",
  Belgium: "벨기에",
  Canada: "캐나다",
  "Czech Republic": "체코",
  France: "프랑스",
  Germany: "독일",
  "Great Britain": "영국",
  Italy: "이탈리아",
  Japan: "일본",
  Philippines: "필리핀",
  Poland: "폴란드",
  Spain: "스페인",
  "United Kingdom": "영국",
  "United States": "미국",
};

function localizeCountry(value?: string) {
  return KOREAN_COUNTRY_NAMES[value ?? ""] ?? value;
}

export function buildPlayerSeoTitle(player: PlayerData, tour: string) {
  const rank = player.rankingCurrent || player.rank;
  const rankPart = rank ? `랭킹 ${rank}위·` : "";
  return `${player.name}(${player.nameEn}) 프로필 | ${tour} ${rankPart}플레이스타일·강점`;
}

export function buildPlayerSeoDescription(player: PlayerData, tour: string) {
  const rank = player.rankingCurrent || player.rank;
  const rankPart = rank ? `현재 랭킹 ${rank}위, ` : "";
  const style = player.style ? `${player.style} 스타일, ` : "";
  const playSide = localizePlayingHand(player.plays);
  const handPart = playSide ? `${playSide}, ` : "";
  const summary =
    player.detailedProfile?.oneLineSummary ||
    player.longBio ||
    player.bio ||
    "";
  const summaryPart = summary ? ` ${summary.slice(0, 70)}` : "";

  return `${player.name}(${player.nameEn}) 선수의 ${tour} 프로필입니다. ${rankPart}${localizeCountry(player.country)} 출신, ${handPart}${style}주요 강점과 경기 흐름을 정리했습니다.${summaryPart}`;
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
    `${player.name} 플레이스타일`,
    `${player.nameEn} playing style`,
    `${player.name} 강점`,
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
    tour,
    ...baseKeywords,
  ]);
}
