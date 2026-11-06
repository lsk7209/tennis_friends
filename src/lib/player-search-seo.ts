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
  "casper-ruud": {
    title: "카스퍼 루드 프로필 | 롤랑가로스 2회 준우승·헤비 톱스핀 황태자·노르웨이 에이스",
    description:
      "클레이 코트와 하드코트를 넘나드는 노르웨이 에이스 카스퍼 루드(Casper Ruud) 프로필. 프랑스 오픈 2회 준우승 및 US오픈 준우승, ATP 투어 12회 우승 기록과 분당 3000회전이 넘는 헤비 톱스핀 포핸드 전술을 분석했습니다.",
    aliases: [
      "카스퍼 루드",
      "루드",
      "Casper Ruud",
      "Ruud",
      "루드 포핸드",
    ],
    focus: "롤랑가로스 준우승, 헤비 톱스핀 포핸드, 투어 12회 우승, 노르웨이 에이스",
  },
  "alex-de-minaur": {
    title: "알렉스 드 미노 프로필 | 코트 위의 스피드 데몬·그랜드슬램 8강·호주 랭킹 1위",
    description:
      "투어 최고의 기동력을 자랑하는 알렉스 드 미노(Alex de Minaur) 프로필. 2024 프랑스오픈·윔블던·US오픈 연속 8강 진출, 경이로운 수비 범위와 빠른 플랫 카운터 펀치 스타일을 정리했습니다.",
    aliases: [
      "알렉스 드 미노",
      "드 미노",
      "드미노",
      "Alex de Minaur",
      "De Minaur",
    ],
    focus: "투어 최고 스피드, 그랜드슬램 8강, 호주 1위, 플랫 카운터 펀처",
  },
  "taylor-fritz": {
    title: "테일러 프리츠 프로필 | 2024 US오픈 준우승·인디언웰스 우승·미국 1위 빅서버",
    description:
      "미국 남자 테니스의 간판 테일러 프리츠(Taylor Fritz) 프로필. 2024 US오픈 결승 진출 및 인디언웰스 마스터스 우승, 시속 220km를 넘나드는 플랫 서브와 압도적인 백핸드 다운더라인을 분석했습니다.",
    aliases: [
      "테일러 프리츠",
      "프리츠",
      "Taylor Fritz",
      "Fritz",
      "프리츠 서브",
    ],
    focus: "2024 US오픈 준우승, 인디언웰스 우승, 미국 1위, 220km 빅서브",
  },
  "holger-rune": {
    title: "홀거 루네 프로필 | 파리 마스터스 조코비치 격파 우승·공격형 올라운더·덴마크 에이스",
    description:
      "덴마크 테니스의 젊은 맹수 홀거 루네(Holger Rune) 프로필. 2022 파리 마스터스에서 조코비치를 꺾고 거머쥔 우승 트로피, 폭발적인 드롭샷과 전진형 베이스라인 공격 전술을 정리했습니다.",
    aliases: [
      "홀거 루네",
      "루네",
      "Holger Rune",
      "Rune",
      "홀게르 루네",
    ],
    focus: "파리 마스터스 우승, 덴마크 에이스, 공격형 올라운더와 드롭샷",
  },
  "grigor-dimitrov": {
    title: "그리고르 디미트로프 프로필 | ATP 파이널스 챔피언·원핸드 백핸드 예술가·플레이스타일",
    description:
      "불가리아 테니스의 자존심 그리고르 디미트로프(Grigor Dimitrov) 프로필. ATP 파이널스 무패 우승, 마이애미 마스터스 결승, 페더러를 연상시키는 우아한 원핸드 백핸드와 올라운드 슬라이스 전술을 정리했습니다.",
    aliases: [
      "그리고르 디미트로프",
      "디미트로프",
      "Grigor Dimitrov",
      "Dimitrov",
      "디미트로프 백핸드",
    ],
    focus: "ATP 파이널스 우승, 원핸드 백핸드, 마이애미 마스터스 결승, 불가리아 에이스",
  },
  "ben-shelton": {
    title: "벤 쉘튼 프로필 | 시속 240km 광속 서브·US오픈 4강·미국 테니스 차세대 폭격기",
    description:
      "ATP 투어 최고의 폭발력을 지닌 미국 왼손잡이 거포 벤 쉘튼(Ben Shelton) 프로필. US오픈 4강 진출, 시속 240km를 넘나드는 서브 폭격과 역동적인 점프 스매시 화력을 분석했습니다.",
    aliases: [
      "벤 쉘튼",
      "쉘튼",
      "Ben Shelton",
      "Shelton",
      "벤 셸턴",
      "쉘튼 서브",
    ],
    focus: "시속 240km 빅서브, US오픈 4강, 미국 왼손잡이 거포, 점프 스매시",
  },
  "frances-tiafoe": {
    title: "프란시스 티아포 프로필 | US오픈 4강 2회·쇼맨십과 네트 대시·미국 올라운더",
    description:
      "미국 테니스의 스타 프란시스 티아포(Frances Tiafoe) 프로필. 2022 및 2024 US오픈 4강 신화, 독창적인 포핸드 메커니즘과 네트를 장악하는 올라운드 전환 플레이스타일을 정리했습니다.",
    aliases: [
      "프란시스 티아포",
      "티아포",
      "Frances Tiafoe",
      "Tiafoe",
      "프랜시스 티아포",
    ],
    focus: "US오픈 4강 2회, 네트 대시, 미국 올라운더, 독창적인 포핸드",
  },
  "ugo-humbert": {
    title: "위고 움베르 프로필 | 파리 마스터스 결승·ATP 투어 6회 우승·프랑스 왼손 에이스",
    description:
      "프랑스 남자 테니스의 간판 위고 움베르(Ugo Humbert) 프로필. 2024 파리 마스터스 준우승 및 ATP 투어 결승 승률 85% 이상의 클러치 능력, 빠른 플랫 드라이브 스트로크를 분석했습니다.",
    aliases: [
      "위고 움베르",
      "움베르",
      "Ugo Humbert",
      "Humbert",
      "위고 움베르트",
    ],
    focus: "파리 마스터스 결승, ATP 투어 6회 우승, 프랑스 왼손잡이 에이스, 빠른 플랫 샷",
  },
  "sebastian-baez": {
    title: "세바스티안 바에스 프로필 | ATP 투어 6회 우승·클레이 지배자·아르헨티나 에이스",
    description:
      "아르헨티나 테니스의 작은 거인 세바스티안 바에스(Sebastian Baez) 프로필. ATP 투어 6회 우승, 170cm 단신을 극복하는 폭발적인 풋워크와 무거운 클레이 코트 베이스라인 스트로크 전술을 정리했습니다.",
    aliases: [
      "세바스티안 바에스",
      "바에스",
      "Sebastian Baez",
      "Baez",
      "세바스찬 바에즈",
    ],
    focus: "ATP 투어 6회 우승, 아르헨티나 에이스, 170cm 단신 극복 풋워크, 클레이 스페셜리스트",
  },
  "lorenzo-musetti": {
    title: "로렌초 무세티 프로필 | 파리올림픽 동메달·윔블던 4강·예술적 원핸드 백핸드",
    description:
      "이탈리아 테니스의 마법사 로렌초 무세티(Lorenzo Musetti) 프로필. 2024 파리 올림픽 단식 동메달 획득, 윔블던 4강 진출, 투어에서 가장 유려한 원핸드 백핸드와 정교한 드롭샷 경기 운영을 분석했습니다.",
    aliases: [
      "로렌초 무세티",
      "무세티",
      "Lorenzo Musetti",
      "Musetti",
      "로렌조 무세티",
    ],
    focus: "파리 올림픽 동메달, 윔블던 4강, 예술적 원핸드 백핸드, 이탈리아 테크니션",
  },
  "cameron-norrie": {
    title: "카메론 노리 프로필 | 인디언웰스 마스터스 우승·플랫 백핸드·영국 국가대표",
    description:
      "영국 남자 테니스의 전 1위 카메론 노리(Cameron Norrie) 프로필. 인디언웰스 마스터스 1000 우승, 까다로운 왼손잡이 헤비 톱스핀 포핸드와 낮은 궤적의 플랫 백핸드, 지치지 않는 체력전을 정리했습니다.",
    aliases: [
      "카메론 노리",
      "노리",
      "Cameron Norrie",
      "Norrie",
      "카메론 노리스",
    ],
    focus: "인디언웰스 우승, 영국 전 1위, 왼손잡이 톱스핀과 플랫 백핸드",
  },
  "nicolas-jarry": {
    title: "니콜라스 자리 프로필 | 로마 마스터스 결승·201cm 광속 빅서브·칠레 에이스",
    description:
      "칠레 테니스의 거포 니콜라스 자리(Nicolas Jarry) 프로필. 2024 로마 마스터스 결승 진출, 201cm 피지컬에서 내리꽂는 시속 230km대 서브 폭격과 묵직한 포핸드 한 방 전술을 분석했습니다.",
    aliases: [
      "니콜라스 자리",
      "자리",
      "Nicolas Jarry",
      "Jarry",
      "니콜라스 하리",
    ],
    focus: "로마 마스터스 결승, 201cm 빅서버, 시속 230km 서브, 칠레 에이스",
  },
  "sebastian-korda": {
    title: "세바스찬 코다 프로필 | 워싱턴 500 우승·부드러운 스윙·미국 테니스 명문",
    description:
      "미국 테니스의 차세대 간판 세바스찬 코다(Sebastian Korda) 프로필. 2024 워싱턴 500 우승, 호주 오픈 8강 진출, 부드러운 스윙 메커니즘과 정교한 올라운드 플레이를 분석했습니다.",
    aliases: [
      "세바스찬 코다",
      "코다",
      "Sebastian Korda",
      "Korda",
      "세바스티안 코다",
    ],
    focus: "워싱턴 오픈 500 우승, 호주 오픈 8강, 페트르 코다 아들, 명품 스윙 메커니즘",
  },
  "matteo-berrettini": {
    title: "마테오 베레티니 프로필 | 윔블던 준우승·시속 235km 서브·이탈리아 더 해머",
    description:
      "이탈리아의 거포 '더 해머' 마테오 베레티니(Matteo Berrettini) 프로필. 윔블던 준우승, ATP 투어 10회 우승, 시속 235km 광속 서브와 강력한 포핸드 해머 샷, 백핸드 슬라이스 운영을 분석했습니다.",
    aliases: [
      "마테오 베레티니",
      "베레티니",
      "Matteo Berrettini",
      "Berrettini",
      "마테오 베레티니 서브",
    ],
    focus: "윔블던 준우승, 투어 통산 10승, 시속 235km 서브, 포핸드 해머",
  },
  "matteo-arnaldi": {
    title: "마테오 아르날디 프로필 | 데이비스컵 우승 주역·롤랑가로스 16강·지치지 않는 체력",
    description:
      "이탈리아의 지치지 않는 엔진 마테오 아르날디(Matteo Arnaldi) 프로필. 2023 데이비스컵 우승 결승전 승리, 2024 프랑스 오픈 16강 진출(루블레프 격파), 코트 전체를 커버하는 빠른 발과 끈질긴 카운터 펀치를 분석했습니다.",
    aliases: [
      "마테오 아르날디",
      "아르날디",
      "Matteo Arnaldi",
      "Arnaldi",
      "아르날디 데이비스컵",
    ],
    focus: "데이비스컵 우승 주역, 2024 롤랑가로스 16강, 무한 체력 카운터 펀처, 환상적인 코트 커버리지",
  },
  "flavio-cobolli": {
    title: "플라비오 코볼리 프로필 | 워싱턴 500 준우승·AS 로마 유스 출신·투지의 이탈리안",
    description:
      "이탈리아 테니스의 신성 플라비오 코볼리(Flavio Cobolli) 프로필. 2024 워싱턴 500 결승 진출, 호주 오픈 3회전, 축구로 다져진 폭발적인 풋워크와 파이팅 넘치는 포핸드 역습을 분석했습니다.",
    aliases: [
      "플라비오 코볼리",
      "코볼리",
      "Flavio Cobolli",
      "Cobolli",
      "플라비오 코볼리 축구",
    ],
    focus: "워싱턴 500 준우승, AS 로마 유스 출신, 폭발적인 풋워크와 포핸드 역습, 이탈리아 황금세대",
  },
  "iga-swiatek": {
    title: "이가 스비옹텍 프로필 | 롤랑가로스 3연패·3000RPM 탑스핀·클레이 여제",
    description:
      "여자 테니스 세계 1위 이가 스비옹텍(Iga Swiatek) 프로필. 프랑스 오픈 3연패 및 그랜드슬램 5회 우승, 남자 선수급 3000RPM 헤비 탑스핀 포핸드와 코트 커버리지, 무결점 베이글 스코어 승리 공식을 분석했습니다.",
    aliases: [
      "이가 스비옹텍",
      "스비옹텍",
      "시비옹테크",
      "Iga Swiatek",
      "Swiatek",
      "이가 시비옹테크",
    ],
    focus: "롤랑가로스 3연패, 그랜드슬램 5회 우승, 3000RPM 탑스핀 포핸드, 세계 1위 클레이 여제",
  },
  "aryna-sabalenka": {
    title: "아리나 사발렌카 프로필 | 호주 오픈 2연패·US 오픈 우승·시속 190km 서브",
    description:
      "세계 정상의 빅히터 아리나 사발렌카(Aryna Sabalenka) 프로필. 호주 오픈 2연패와 US 오픈 우승, 시속 190km대 강속구 서브와 투어 최고의 파괴적인 포핸드 파워, 멘탈 극복 스토리를 분석했습니다.",
    aliases: [
      "아리나 사발렌카",
      "사발렌카",
      "Aryna Sabalenka",
      "Sabalenka",
      "아리나 사발렌카 서브",
    ],
    focus: "호주 오픈 2연패, US 오픈 우승, 시속 190km 광속 서브, 투어 최강 빅히터",
  },
  "coco-gauff": {
    title: "코코 고프 프로필 | US 오픈 챔피언·경이로운 풋워크·미국 차세대 간판",
    description:
      "미국 여자 테니스의 슈퍼스타 코코 고프(Coco Gauff) 프로필. US 오픈 단식 우승 및 복식 세계 1위, 투어 최정상급 스피드와 철벽 수비, 날카로운 백핸드와 카운터어택 스타일을 분석했습니다.",
    aliases: [
      "코코 고프",
      "고프",
      "Coco Gauff",
      "Gauff",
      "코리 고프",
    ],
    focus: "US 오픈 챔피언, 프랑스 오픈 복식 우승, 독보적인 코트 커버리지와 수비 전환 카운터",
  },
  "elena-rybakina": {
    title: "엘레나 리바키나 프로필 | 윔블던 우승·184cm 에이스 퀸·침착한 아이스 퀸",
    description:
      "카자흐스탄의 테니스 여제 엘레나 리바키나(Elena Rybakina) 프로필. 2022 윔블던 챔피언, 184cm 큰 키에서 꽂아넣는 WTA 최다 에이스와 간결하고 묵직한 플랫 스트로크, 포커페이스 경기 운영을 분석했습니다.",
    aliases: [
      "엘레나 리바키나",
      "리바키나",
      "Elena Rybakina",
      "Rybakina",
      "엘레나 르바키나",
    ],
    focus: "2022 윔블던 챔피언, WTA 에이스 퀸, 시속 190km 플랫 서브, 침착한 아이스 퀸",
  },
  "jessica-pegula": {
    title: "제시카 페굴라 프로필 | US 오픈 준우승·정교한 플랫 히터·하프 코리안 스타",
    description:
      "미국 여자 테니스의 간판 제시카 페굴라(Jessica Pegula) 프로필. US 오픈 준우승, 투어 6회 우승, 전 세계 3위, 에러 없는 견고한 플랫 스트로크와 영리한 카운터 펀치, 한국계 어머니(킴 페굴라) 스토리를 분석했습니다.",
    aliases: [
      "제시카 페굴라",
      "페굴라",
      "Jessica Pegula",
      "Pegula",
      "제시카 페굴라 한국",
    ],
    focus: "US 오픈 결승, 복식 세계 1위, 군더더기 없는 플랫 스트로크, 하프 코리안 꾸준함의 아이콘",
  },
  "qinwen-zheng": {
    title: "정친원 프로필 | 2024 파리 올림픽 금메달·호주 오픈 준우승·시속 190km 서브",
    description:
      "아시아 테니스의 역사를 쓴 정친원(Zheng Qinwen) 프로필. 2024 파리 올림픽 여자 단식 금메달, 2024 호주 오픈 준우승, 시속 190km대 강속구 서브와 묵직한 탑스핀 포핸드, 아시아 에이스의 플레이를 분석했습니다.",
    aliases: [
      "정친원",
      "정친원 올림픽",
      "Zheng Qinwen",
      "Qinwen Zheng",
      "정친원 테니스",
    ],
    focus: "2024 파리 올림픽 금메달, 호주 오픈 결승, 시속 190km 서브, 아시아 여자 테니스 에이스",
  },
  "marketa-vondrousova": {
    title: "마르케타 본드로우쇼바 프로필 | 윔블던 우승·올림픽 은메달·왼손 매직 터치",
    description:
      "체코의 테니스 마술사 마르케타 본드로우쇼바(Marketa Vondrousova) 프로필. 윔블던 최초 비시드 우승, 도쿄 올림픽 은메달, 왼손잡이 특유의 절묘한 슬라이스와 드롭샷, 감각적인 경기 운영을 분석했습니다.",
    aliases: [
      "마르케타 본드로우쇼바",
      "본드로우쇼바",
      "Marketa Vondrousova",
      "Vondrousova",
      "본드로소바",
    ],
    focus: "윔블던 챔피언, 도쿄 올림픽 은메달, 왼손잡이 슬라이스와 천재적 드롭샷, 체코 테니스",
  },
  "ons-jabeur": {
    title: "온스 자베르 프로필 | 윔블던 2회 준우승·드롭샷 장인·행복부 장관",
    description:
      "튀니지와 아랍의 테니스 영웅 온스 자베르(Ons Jabeur) 프로필. 그랜드슬램 결승 3회 진출(윔블던 2회, US 오픈 1회), 투어 최고 수준의 창의적 드롭샷과 슬라이스, '행복부 장관'의 경기 스타일을 분석했습니다.",
    aliases: [
      "온스 자베르",
      "자베르",
      "Ons Jabeur",
      "Jabeur",
      "온스 자베르 드롭샷",
    ],
    focus: "윔블던 2회 연속 결승, US 오픈 결승, 투어 최강 드롭샷 장인, 아랍 여성 최초 메이저 결승",
  },
  "naomi-osaka": {
    title: "나오미 오사카 프로필 | 그랜드슬램 4회 우승·아시아 최초 세계 1위·시속 200km 서브",
    description:
      "아시아 최초의 세계 랭킹 1위 나오미 오사카(Naomi Osaka) 프로필. US 오픈 2회, 호주 오픈 2회 등 메이저 4회 우승, 시속 200km에 육박하는 강속구 서브와 파괴적인 포핸드 파워, 멘탈 극복 스토리를 분석했습니다.",
    aliases: [
      "나오미 오사카",
      "오사카 나오미",
      "Naomi Osaka",
      "Osaka",
      "오사카 나오미 국적",
    ],
    focus: "그랜드슬램 4회 챔피언, 아시아 최초 세계 1위, 시속 200km 서브, 하드 코트의 여왕",
  },
  "elina-svitolina": {
    title: "엘리나 스비톨리나 프로필 | 도쿄 올림픽 동메달·WTA 파이널스 우승·우크라이나 철벽 수비",
    description:
      "우크라이나 테니스의 상징 엘리나 스비톨리나(Elina Svitolina) 프로필. 도쿄 올림픽 동메달, WTA 파이널스 챔피언, 전 세계 3위, 지치지 않는 체력과 환상적인 카운터 펀치, 출산 후 윔블던 4강 복귀 스토리를 분석했습니다.",
    aliases: [
      "엘리나 스비톨리나",
      "스비톨리나",
      "Elina Svitolina",
      "Svitolina",
      "엘리나 스비톨리나 몽피스",
    ],
    focus: "도쿄 올림픽 동메달, WTA 파이널스 우승, 출산 후 기적의 복귀, 우크라이나의 심장",
  },
  "victoria-azarenka": {
    title: "빅토리아 아자렌카 프로필 | 호주 오픈 2연패·전 세계 1위·라이징 볼 플랫 백핸드",
    description:
      "벨라루스의 테니스 여제 빅토리아 아자렌카(Victoria Azarenka) 프로필. 호주 오픈 2연패, 올림픽 금/동메달, 전 세계 1위, 베이스라인에서 한 박자 빠르게 때려내는 플랫 백핸드와 강철 멘탈 승부사 기질을 분석했습니다.",
    aliases: [
      "빅토리아 아자렌카",
      "아자렌카",
      "Victoria Azarenka",
      "Azarenka",
      "빅토리아 아자렌카 호주오픈",
    ],
    focus: "호주 오픈 2연패, 전 세계 1위, 올림픽 금메달, 투어 최강의 라이징 볼 플랫 백핸드",
  },
  "jelena-ostapenko": {
    title: "옐레나 오스타펜코 프로필 | 2017 롤랑가로스 우승·위너 50개 폭주기관차·극단적 공격",
    description:
      "라트비아의 테니스 폭주기관차 옐레나 오스타펜코(Jelena Ostapenko) 프로필. 2017 프랑스 오픈 깜짝 우승, 남자 선수급 샷 스피드와 라인 안쪽을 파고드는 초공격적 플랫 스트로크, 예측 불허의 경기 스타일을 분석했습니다.",
    aliases: [
      "옐레나 오스타펜코",
      "오스타펜코",
      "Jelena Ostapenko",
      "Ostapenko",
      "오스타펜코 프랑스오픈",
    ],
    focus: "2017 롤랑가로스 우승, 남자 선수급 샷 스피드, 위너 폭격 공격 테니스, 코트 위의 폭주기관차",
  },
  "alexei-popyrin": {
    title: "알렉세이 포피린 프로필 | 2024 몬트리올 마스터스 우승·196cm 호주 거포",
    description:
      "호주 테니스의 빅 서버 알렉세이 포피린(Alexei Popyrin) 프로필. 2024 몬트리올 마스터스 1000 챔피언, 196cm 큰 키에서 뿜어져 나오는 시속 220km 서브와 폭발적인 포핸드 파워, 클러치 멘탈을 분석했습니다.",
    aliases: [
      "알렉세이 포피린",
      "포피린",
      "Alexei Popyrin",
      "Popyrin",
      "포피린 마스터스",
    ],
    focus: "2024 몬트리올 마스터스 1000 우승, 196cm 빅서버, 투어 최정상급 포핸드 파워, 호주 테니스",
  },
  "jan-lennard-struff": {
    title: "얀-레나르트 스트루프 프로필 | 34세 투어 첫 우승·독일 전차 빅서브·서브앤발리",
    description:
      "독일의 대기만성형 거포 얀-레나르트 스트루프(Jan-Lennard Struff) 프로필. 2024 뮌헨 오픈 우승, 마드리드 마스터스 준우승, 30대에 커리어 하이를 달성한 강력한 서브 앤 발리와 묵직한 포핸드 한 방을 분석했습니다.",
    aliases: [
      "얀-레나르트 스트루프",
      "스트루프",
      "Jan-Lennard Struff",
      "Struff",
      "얀 레나드 스트루프",
    ],
    focus: "2024 뮌헨 오픈 우승, 마드리드 결승, 독일 전차 파워 테니스, 서브 앤 발리 거포",
  },
  "jordan-thompson": {
    title: "조던 톰슨 프로필 | 로스카보스 단식 우승·US 오픈 복식 챔피언·호주 불굴의 투지",
    description:
      "호주의 베테랑 파이터 조던 톰슨(Jordan Thompson) 프로필. 2024 로스 카보스 단식 우승, US 오픈 복식 우승, 투어 최정상급 네트 감각과 지치지 않는 코트 커버리지, 레이튼 휴이트를 잇는 투지를 분석했습니다.",
    aliases: [
      "조던 톰슨",
      "톰슨",
      "Jordan Thompson",
      "Thompson",
      "조던 톰슨 US오픈",
    ],
    focus: "2024 로스카보스 투어 첫 우승, US 오픈 복식 우승, 호주 테니스의 투지, 정교한 네트 플레이",
  },
  "zhizhen-zhang": {
    title: "장즈전 프로필 | 파리 올림픽 은메달·마드리드 8강·중국 최초 ATP 탑 40",
    description:
      "중국 남자 테니스의 개척자 장즈전(Zhizhen Zhang, 장지젠) 프로필. 2024 파리 올림픽 혼복 은메달, 마스터스 8강 진출, 193cm 피지컬에서 터지는 시속 210km 플랫 서브와 묵직한 스트로크를 분석했습니다.",
    aliases: [
      "장즈전",
      "장지전",
      "장지젠",
      "Zhizhen Zhang",
      "Zhang Zhizhen",
      "장즈전 올림픽",
    ],
    focus: "2024 파리 올림픽 은메달, 마드리드 8강, 중국 남자 최초 탑 40, 193cm 아시아 최고 피지컬",
  },
  "brandon-nakashima": {
    title: "브랜든 나카시마 프로필 | 넥스트젠 파이널스 우승·기계 같은 백핸드·포커페이스",
    description:
      "미국의 차세대 실력파 브랜든 나카시마(Brandon Nakashima) 프로필. 2022 넥스트젠 ATP 파이널스 전승 우승, 투어 최고 수준의 레이저 양손 백핸드 다운더라인과 흔들림 없는 강철 멘탈 포커페이스를 분석했습니다.",
    aliases: [
      "브랜든 나카시마",
      "나카시마",
      "Brandon Nakashima",
      "Nakashima",
      "브랜든 나카시마 랭킹",
    ],
    focus: "넥스트젠 파이널스 전승 챔피언, 기계 같은 백핸드 다운더라인, 일본계 미국인 테니스 스타, 포커페이스",
  },
  "alex-michelsen": {
    title: "알렉스 미켈센 프로필 | 193cm 지능형 거인·미국 2004년생 특급 유망주·ATP 결승",
    description:
      "미국 테니스의 차세대 간판 알렉스 미켈센(Alex Michelsen, 미첼슨) 프로필. 193cm 큰 키에서 뿜어져 나오는 안정적인 서비스 게임, 10대 시절 투어 결승 진출 및 넥스트젠 파이널스 출전, 정교한 백핸드를 분석했습니다.",
    aliases: [
      "알렉스 미켈센",
      "알렉스 미첼슨",
      "미켈센",
      "Alex Michelsen",
      "Michelsen",
    ],
    focus: "193cm 지능형 거인, 2004년생 미국 차세대 스타, ATP 투어 결승 진출, 침착한 올라운드 플레이",
  },
  "francisco-cerundolo": {
    title: "프란시스코 세룬돌로 프로필 | 아르헨티나 1위·마이애미 마스터스 4강·포핸드 거포",
    description:
      "아르헨티나 남자 테니스의 에이스 프란시스코 세룬돌로(Francisco Cerundolo) 프로필. 마이애미 마스터스 4강, 28년 만의 아르헨티나 잔디 투어(이스트본) 우승, 상대 코트를 찢는 무시무시한 포핸드 해머 파워를 분석했습니다.",
    aliases: [
      "프란시스코 세룬돌로",
      "세룬돌로",
      "Francisco Cerundolo",
      "Cerundolo",
      "세룬돌로 포핸드",
    ],
    focus: "아르헨티나 1위, 마이애미 마스터스 4강, 이스트본 잔디 우승, 폭발적인 포핸드 해머",
  },
  "joao-fonseca": {
    title: "조앙 폰세카 프로필 | 2006년생 브라질 초특급 원더키드·US오픈 주니어 챔피언",
    description:
      "브라질 테니스의 새로운 희망 조앙 폰세카(Joao Fonseca, 주앙 폰세카) 프로필. 2023 US 오픈 주니어 우승 및 주니어 세계 1위, 17세 리오 오픈 500 8강 돌풍, 시너를 연상시키는 투어 최상급 킬러 포핸드를 분석했습니다.",
    aliases: [
      "조앙 폰세카",
      "주앙 폰세카",
      "폰세카",
      "Joao Fonseca",
      "Fonseca",
      "폰세카 리오오픈",
    ],
    focus: "2023 US 오픈 주니어 챔피언, 2006년생 초특급 유망주, Next 쿠에르텐, 킬러 포핸드 파워",
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
