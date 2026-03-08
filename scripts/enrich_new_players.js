const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "src", "data", "players.ts");

const players = [
  {
    slug: "lorenzo-sonego",
    name: "로렌초 소네고",
    nameEn: "Lorenzo Sonego",
    country: "Italy",
    countryKo: "이탈리아",
    countryFlag: "🇮🇹",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "에너지 넘치는 공격 전개와 빠른 템포",
    notable: "빠른 코트에서 분위기를 끌어올리는 경기 운영으로 존재감을 드러낸다",
    signatureMatch: {
      title: "2023 데이비스컵 이탈리아 대표전",
      date: "2023",
      description: "국가대항전 특유의 압박 속에서도 공격 템포를 잃지 않으며 팀 분위기를 끌어올린 경기로 자주 회자된다."
    },
    fanAppeal: "감정 표현이 풍부하고 흐름을 타면 코트 전체 에너지를 바꾸는 타입이라 현장 관중 반응이 큰 선수다.",
    stats: { serve: 8.4, forehand: 8.5, backhand: 7.8, movement: 8.0, return: 7.4, mental: 8.1 }
  },
  {
    slug: "marcos-giron",
    name: "마르코스 기론",
    nameEn: "Marcos Giron",
    country: "USA",
    countryKo: "미국",
    countryFlag: "🇺🇸",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "군더더기 없는 스트로크와 안정적인 밸런스",
    notable: "기본기 완성도가 높아 투어에서 꾸준히 경쟁력을 유지한다",
    signatureMatch: {
      title: "2024 인디언웰스 상위 시드전",
      date: "2024",
      description: "리턴과 랠리 완성도로 상대 화력을 낮추며 자신의 경기 구조를 끝까지 유지한 사례로 평가된다."
    },
    fanAppeal: "화려함보다 정교함을 선호하는 팬층에게 높은 신뢰를 받는 투어형 선수다.",
    stats: { serve: 7.5, forehand: 7.7, backhand: 7.8, movement: 8.2, return: 8.0, mental: 8.0 }
  },
  {
    slug: "alejandro-tabilo",
    name: "알레한드로 타빌로",
    nameEn: "Alejandro Tabilo",
    country: "Chile",
    countryKo: "칠레",
    countryFlag: "🇨🇱",
    gender: "male",
    plays: "Left-handed",
    backhand: "Two-handed",
    style: "왼손 각도와 묵직한 패턴 전개",
    notable: "차분하게 리듬을 바꾸며 상대를 불편하게 만드는 능력이 좋다",
    signatureMatch: {
      title: "2024 마스터스급 상위 랭커전",
      date: "2024",
      description: "왼손 코스 활용과 침착한 템포 조절로 강한 상대를 흔들어 존재감을 키운 경기였다."
    },
    fanAppeal: "왼손 특유의 각도와 갑작스러운 전개 변화가 잘 보여 전술적인 재미가 큰 편이다.",
    stats: { serve: 8.0, forehand: 8.2, backhand: 7.8, movement: 7.7, return: 7.7, mental: 8.1 }
  },
  {
    slug: "tomas-martin-etcheverry",
    name: "토마스 마르틴 에체베리",
    nameEn: "Tomas Martin Etcheverry",
    country: "Argentina",
    countryKo: "아르헨티나",
    countryFlag: "🇦🇷",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "긴 랠리와 높은 볼 견딤 능력",
    notable: "클레이 기반의 반복형 테니스로 경기 흐름을 길게 끌고 간다",
    signatureMatch: {
      title: "2023 롤랑가로스 장기전",
      date: "2023",
      description: "긴 랠리와 체력전에서 밀리지 않으며 클레이 강자의 면모를 인상적으로 남긴 경기다."
    },
    fanAppeal: "한 포인트를 쉽게 포기하지 않는 랠리 집중력 때문에 클레이 팬들에게 선호도가 높다.",
    stats: { serve: 7.9, forehand: 8.1, backhand: 8.0, movement: 8.0, return: 7.5, mental: 8.2 }
  },
  {
    slug: "pedro-martinez",
    name: "페드로 마르티네스",
    nameEn: "Pedro Martinez",
    country: "Spain",
    countryKo: "스페인",
    countryFlag: "🇪🇸",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "정돈된 포인트 설계와 실수 관리",
    notable: "무리하지 않는 운영과 기본기로 승부하는 타입이다",
    signatureMatch: {
      title: "2024 클레이 시즌 접전 승리",
      date: "2024",
      description: "길어진 랠리 속에서 실수를 줄이고 포인트 구조를 유지해 끝내 승부를 가져간 경기가 대표적이다."
    },
    fanAppeal: "전형적인 스페인식 포인트 설계를 좋아하는 팬이라면 안정감 있는 경기 흐름에서 만족도가 높다.",
    stats: { serve: 7.1, forehand: 7.7, backhand: 7.8, movement: 8.0, return: 7.9, mental: 8.0 }
  },
  {
    slug: "sebastian-ofner",
    name: "제바스티안 오프너",
    nameEn: "Sebastian Ofner",
    country: "Austria",
    countryKo: "오스트리아",
    countryFlag: "🇦🇹",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "서브 이후 빠른 선공과 직선적인 공격",
    notable: "첫 스트라이크의 질이 높을 때 위력이 크게 살아난다",
    signatureMatch: {
      title: "2023 메이저 돌풍 경기",
      date: "2023",
      description: "초반 주도권을 빠르게 잡고 공격 압박을 유지하면서 높은 레벨의 경기력을 보여준 사례다."
    },
    fanAppeal: "서브 다음 볼에서 바로 승부를 보는 직선적인 패턴 덕분에 전개가 시원하다.",
    stats: { serve: 8.3, forehand: 8.1, backhand: 7.4, movement: 7.5, return: 7.1, mental: 7.8 }
  },
  {
    slug: "alexandre-muller",
    name: "알렉상드르 뮐러",
    nameEn: "Alexandre Muller",
    country: "France",
    countryKo: "프랑스",
    countryFlag: "🇫🇷",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "차분한 스트로크와 끈질긴 포인트 운영",
    notable: "한 포인트씩 쌓아가는 경기 설계가 안정적인 편이다",
    signatureMatch: {
      title: "2024 투어 본선 접전 승리",
      date: "2024",
      description: "경기 중 흔들리는 구간을 최소화하면서 꾸준한 템포로 역전을 만든 장면이 인상적이었다."
    },
    fanAppeal: "불필요한 기복이 적고 전개가 단단해 경기 전체를 보는 재미가 살아나는 유형이다.",
    stats: { serve: 7.4, forehand: 7.6, backhand: 7.8, movement: 7.9, return: 7.8, mental: 8.1 }
  },
  {
    slug: "francisco-comesana",
    name: "프란시스코 코메사냐",
    nameEn: "Francisco Comesana",
    country: "Argentina",
    countryKo: "아르헨티나",
    countryFlag: "🇦🇷",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "클레이 기반 수비력과 리듬 유지",
    notable: "성장세가 꾸준해 상위 레벨 적응이 기대되는 선수다",
    signatureMatch: {
      title: "2024 클레이 챌린저 상위권전",
      date: "2024",
      description: "점수 차보다 내용이 더 좋았던 경기로, 리듬 유지 능력과 수비 집중력이 강하게 드러났다."
    },
    fanAppeal: "랠리의 질이 좋아 성장형 선수 추적을 좋아하는 팬층에 어필하는 스타일이다.",
    stats: { serve: 7.0, forehand: 7.7, backhand: 7.6, movement: 8.0, return: 7.7, mental: 7.9 }
  },
  {
    slug: "camilo-ugo-carabelli",
    name: "카밀로 우고 카라벨리",
    nameEn: "Camilo Ugo Carabelli",
    country: "Argentina",
    countryKo: "아르헨티나",
    countryFlag: "🇦🇷",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "끈질긴 커버와 타이밍 위주의 랠리",
    notable: "클레이에서 버티는 힘과 포인트 인내심이 돋보인다",
    signatureMatch: {
      title: "2024 남미 클레이 시리즈 접전",
      date: "2024",
      description: "길어진 포인트에서도 급하게 서두르지 않고 인내심으로 흐름을 가져온 장면이 상징적이었다."
    },
    fanAppeal: "클레이 특유의 지구전과 포인트 설계 과정을 즐기는 팬에게 적합한 선수다.",
    stats: { serve: 6.9, forehand: 7.6, backhand: 7.5, movement: 8.1, return: 7.8, mental: 8.0 }
  },
  {
    slug: "zizou-bergs",
    name: "지주 베르그스",
    nameEn: "Zizou Bergs",
    country: "Belgium",
    countryKo: "벨기에",
    countryFlag: "🇧🇪",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "활발한 발과 적극적인 압박",
    notable: "에너지 레벨이 높고 분위기 반전 능력이 있는 선수다",
    signatureMatch: {
      title: "2024 실내 하드코트 역전승",
      date: "2024",
      description: "관중 분위기와 함께 템포를 끌어올리며 경기 흐름을 바꾼 장면이 베르그스다운 승리로 남았다."
    },
    fanAppeal: "움직임이 살아 있고 경기 중 에너지 표현이 분명해 현장 반응이 좋은 편이다.",
    stats: { serve: 7.7, forehand: 7.8, backhand: 7.5, movement: 8.4, return: 7.4, mental: 7.8 }
  },
  {
    slug: "hamad-medjedovic",
    name: "하마드 메제도비치",
    nameEn: "Hamad Medjedovic",
    country: "Serbia",
    countryKo: "세르비아",
    countryFlag: "🇷🇸",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "파워 중심의 공격과 높은 성장 여지",
    notable: "차세대 세르비아 유망주로 자주 언급되는 자원이다",
    signatureMatch: {
      title: "2023 차세대 결승 무대",
      date: "2023",
      description: "강한 볼과 담대한 패턴 선택으로 상위 유망주 그룹 안에서 존재감을 각인한 경기였다."
    },
    fanAppeal: "아직 다듬어질 부분이 남아 있지만 힘과 재능의 폭발력이 분명해 기대치를 모은다.",
    stats: { serve: 8.2, forehand: 8.5, backhand: 7.7, movement: 7.6, return: 7.3, mental: 7.9 }
  },
  {
    slug: "jacob-fearnley",
    name: "제이컵 펀리",
    nameEn: "Jacob Fearnley",
    country: "Great Britain",
    countryKo: "영국",
    countryFlag: "🇬🇧",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "균형 잡힌 올라운드 전개",
    notable: "개발 속도가 빠르고 전술 이해도가 좋은 편이다",
    signatureMatch: {
      title: "2024 북미 하드코트 상승세 경기",
      date: "2024",
      description: "특정 한 샷에 의존하지 않고 전체 균형으로 경기를 풀어간 점이 높은 평가를 받았다."
    },
    fanAppeal: "과하게 한쪽으로 치우치지 않은 경기 구조 때문에 성장 과정을 지켜보는 맛이 있다.",
    stats: { serve: 7.6, forehand: 7.8, backhand: 7.8, movement: 7.9, return: 7.5, mental: 7.9 }
  },
  {
    slug: "billy-harris",
    name: "빌리 해리스",
    nameEn: "Billy Harris",
    country: "Great Britain",
    countryKo: "영국",
    countryFlag: "🇬🇧",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "실전형 운영과 끈질긴 경쟁력",
    notable: "늦은 성장세로 투어에서 존재감을 넓혀가는 사례다",
    signatureMatch: {
      title: "2024 투어 본선 돌파 경기",
      date: "2024",
      description: "단단한 서브 게임과 실전 감각으로 기회를 놓치지 않으며 커리어 상승세를 이어간 경기였다."
    },
    fanAppeal: "성장 배경 자체가 스토리성이 있어 응원 포인트가 분명하다.",
    stats: { serve: 7.9, forehand: 7.5, backhand: 7.3, movement: 7.6, return: 7.1, mental: 8.2 }
  },
  {
    slug: "thiago-seyboth-wild",
    name: "치아구 세이보치 빌드",
    nameEn: "Thiago Seyboth Wild",
    country: "Brazil",
    countryKo: "브라질",
    countryFlag: "🇧🇷",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "폭발적인 샷 메이킹과 과감한 타이밍",
    notable: "리듬을 한 번에 바꿀 수 있는 공격성이 강한 선수다",
    signatureMatch: {
      title: "2023 메이저 대이변 경기",
      date: "2023",
      description: "강한 볼과 대담한 공격 전개로 강호를 흔들며 이름을 크게 알린 경기로 기억된다."
    },
    fanAppeal: "잘 맞는 날의 폭발력이 워낙 커서 한 경기만으로도 강한 인상을 남길 수 있다.",
    stats: { serve: 8.1, forehand: 8.7, backhand: 7.4, movement: 7.5, return: 7.0, mental: 7.4 }
  },
  {
    slug: "joao-lucas-reis-da-silva",
    name: "주앙 루카스 헤이스 다 시우바",
    nameEn: "Joao Lucas Reis da Silva",
    country: "Brazil",
    countryKo: "브라질",
    countryFlag: "🇧🇷",
    gender: "male",
    plays: "Left-handed",
    backhand: "Two-handed",
    style: "왼손 각도와 현대적인 베이스라인 패턴",
    notable: "투어 레벨 적응력을 키워 가는 과정이 중요한 자원이다",
    signatureMatch: {
      title: "2024 남미 투어 성장 확인 경기",
      date: "2024",
      description: "왼손 코스 활용과 안정된 패턴 연결로 상위 무대 적응 가능성을 보여준 경기다."
    },
    fanAppeal: "왼손 자원의 희소성과 성장 스토리 덕분에 중장기 추적 가치가 높다.",
    stats: { serve: 7.4, forehand: 7.8, backhand: 7.4, movement: 7.8, return: 7.2, mental: 7.7 }
  },
  {
    slug: "nishesh-basavareddy",
    name: "니셰시 바사바레디",
    nameEn: "Nishesh Basavareddy",
    country: "USA",
    countryKo: "미국",
    countryFlag: "🇺🇸",
    gender: "male",
    plays: "Left-handed",
    backhand: "Two-handed",
    style: "정제된 볼 컨트롤과 발전 속도",
    notable: "주니어에서 프로로 이어지는 전환이 매끄러운 유망주다",
    signatureMatch: {
      title: "2024 챌린저 상위권전",
      date: "2024",
      description: "볼 제어와 템포 유지 능력이 두드러져 프로 적응 속도가 빠르다는 평가를 강화한 경기다."
    },
    fanAppeal: "주니어형 재능이 아니라 성인 무대에서도 바로 통할 구조가 보여 기대감이 높다.",
    stats: { serve: 7.3, forehand: 7.7, backhand: 7.8, movement: 7.9, return: 7.8, mental: 8.0 }
  },
  {
    slug: "clara-tauson",
    name: "클라라 타우손",
    nameEn: "Clara Tauson",
    country: "Denmark",
    countryKo: "덴마크",
    countryFlag: "🇩🇰",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "강한 볼 스피드와 직선적인 선공",
    notable: "WTA에서 파워 테니스의 존재감을 보여주는 선수다",
    signatureMatch: {
      title: "2024 실내 하드코트 강타전",
      date: "2024",
      description: "강한 초구와 빠른 전환으로 코트를 짧게 쓰며 화력을 증명한 경기였다."
    },
    fanAppeal: "파워 히팅이 분명해서 공격 성향 WTA 경기를 선호하는 팬에게 매력이 크다.",
    stats: { serve: 8.3, forehand: 8.5, backhand: 8.0, movement: 7.3, return: 7.5, mental: 7.8 }
  },
  {
    slug: "lulu-sun",
    name: "룰루 선",
    nameEn: "Lulu Sun",
    country: "New Zealand",
    countryKo: "뉴질랜드",
    countryFlag: "🇳🇿",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    style: "왼손 변형 패턴과 다양한 전개",
    notable: "코트별로 전술 폭을 조절하는 능력이 좋은 편이다",
    signatureMatch: {
      title: "2024 잔디코트 돌풍 경기",
      date: "2024",
      description: "왼손 코스와 템포 변화가 크게 통하며 상위 레벨 무대에서 경쟁력을 드러낸 경기다."
    },
    fanAppeal: "왼손 변주와 전술 다양성이 좋아 한 포인트 단위로 보는 재미가 크다.",
    stats: { serve: 7.7, forehand: 7.8, backhand: 7.5, movement: 7.8, return: 7.7, mental: 8.0 }
  },
  {
    slug: "mccartney-kessler",
    name: "맥카트니 케슬러",
    nameEn: "McCartney Kessler",
    country: "USA",
    countryKo: "미국",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "콤팩트한 공격과 기본기 안정감",
    notable: "WTA 레벨에서 점진적으로 경쟁력을 키우는 흐름이 보인다",
    signatureMatch: {
      title: "2024 북미 하드코트 상승세 경기",
      date: "2024",
      description: "공격 전환은 간결하지만 효율적이라는 점을 잘 보여주며 자신감을 키운 경기였다."
    },
    fanAppeal: "과장되지 않은 기술 구성으로 단계적으로 성장하는 과정을 보기 좋다.",
    stats: { serve: 7.5, forehand: 7.8, backhand: 7.7, movement: 7.7, return: 7.5, mental: 7.9 }
  },
  {
    slug: "ashlyn-krueger",
    name: "애슐린 크루거",
    nameEn: "Ashlyn Krueger",
    country: "USA",
    countryKo: "미국",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "운동 능력과 파워가 살아 있는 현대적 공격형",
    notable: "미국 차세대 자원으로 꾸준히 거론되는 이름이다",
    signatureMatch: {
      title: "2024 상위권 상대로 만든 업셋",
      date: "2024",
      description: "강한 공과 적극적인 코트 포지션으로 상위 랭커를 흔들며 잠재력을 입증한 경기였다."
    },
    fanAppeal: "피지컬과 공격성이 분명해 차세대 파워 테니스 흐름을 보여주는 선수로 소비된다.",
    stats: { serve: 8.1, forehand: 8.2, backhand: 7.6, movement: 7.8, return: 7.3, mental: 7.7 }
  },
  {
    slug: "peyton-stearns",
    name: "페이턴 스턴스",
    nameEn: "Peyton Stearns",
    country: "USA",
    countryKo: "미국",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "묵직한 랠리와 체력 기반 압박",
    notable: "긴 경기에서 경쟁력이 좋은 베이스라이너로 평가된다",
    signatureMatch: {
      title: "2024 장기전 승리",
      date: "2024",
      description: "체력과 중후반 집중력을 기반으로 긴 경기 흐름을 뒤집은 장면이 스턴스의 장점을 잘 드러냈다."
    },
    fanAppeal: "쉽게 무너지지 않는 체력전 능력 덕분에 접전형 경기를 좋아하는 팬에게 어울린다.",
    stats: { serve: 7.4, forehand: 8.0, backhand: 7.7, movement: 8.0, return: 7.6, mental: 8.2 }
  },
  {
    slug: "alycia-parks",
    name: "알리시아 파크스",
    nameEn: "Alycia Parks",
    country: "USA",
    countryKo: "미국",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "강서브와 빠른 마무리",
    notable: "서비스 게임의 파괴력이 매우 눈에 띄는 유형이다",
    signatureMatch: {
      title: "2024 서브 지배 경기",
      date: "2024",
      description: "에이스와 첫 볼 마무리 비중이 높게 나오며 서비스 무기를 극대화한 경기로 남았다."
    },
    fanAppeal: "강한 서브를 앞세운 쇼트 포인트 성향이라 전개가 빠르고 인상적인 장면이 많다.",
    stats: { serve: 9.0, forehand: 8.0, backhand: 7.2, movement: 7.1, return: 6.9, mental: 7.5 }
  },
  {
    slug: "sonay-kartal",
    name: "소나이 카르탈",
    nameEn: "Sonay Kartal",
    country: "Great Britain",
    countryKo: "영국",
    countryFlag: "🇬🇧",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "규율 있는 랠리와 흔들림 적은 템포",
    notable: "투어 경험을 쌓으면서 경기 완성도를 끌어올리고 있다",
    signatureMatch: {
      title: "2024 투어 본선 견고한 승리",
      date: "2024",
      description: "자기 리듬을 크게 잃지 않고 경기 전체 템포를 관리한 점이 돋보인 경기였다."
    },
    fanAppeal: "과장 없이 단단한 랠리 구조를 보여줘 응원하기 편한 성장형 선수로 받아들여진다.",
    stats: { serve: 7.1, forehand: 7.6, backhand: 7.7, movement: 8.0, return: 7.8, mental: 8.0 }
  },
  {
    slug: "olga-danilovic",
    name: "올가 다닐로비치",
    nameEn: "Olga Danilovic",
    country: "Serbia",
    countryKo: "세르비아",
    countryFlag: "🇷🇸",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    style: "왼손 파워와 과감한 패턴 전환",
    notable: "한 번 흐름을 잡으면 상대를 몰아붙이는 능력이 좋다",
    signatureMatch: {
      title: "2024 클레이 상승세 경기",
      date: "2024",
      description: "왼손 공격 전개가 제대로 맞물리며 경기 주도권을 길게 유지한 인상적인 승리였다."
    },
    fanAppeal: "왼손 파워가 터질 때의 폭발력이 뚜렷해 업사이드가 큰 선수로 보인다.",
    stats: { serve: 7.8, forehand: 8.4, backhand: 7.6, movement: 7.5, return: 7.4, mental: 7.8 }
  },
  {
    slug: "yulia-putintseva",
    name: "율리야 푸틴체바",
    nameEn: "Yulia Putintseva",
    country: "Kazakhstan",
    countryKo: "카자흐스탄",
    countryFlag: "🇰🇿",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "집요한 수비와 까다로운 경기 리듬",
    notable: "상대 입장에서 매우 불편한 투쟁형 선수로 통한다",
    signatureMatch: {
      title: "2024 상위 시드 접전 승리",
      date: "2024",
      description: "지치지 않는 수비와 기세 싸움으로 더 강한 상대를 흔들어 이변을 만든 경기였다."
    },
    fanAppeal: "감정선이 분명하고 악착같은 경기 운영을 보여줘 캐릭터성이 강하다.",
    stats: { serve: 6.9, forehand: 7.7, backhand: 7.8, movement: 8.4, return: 8.0, mental: 8.5 }
  },
  {
    slug: "rebeka-masarova",
    name: "레베카 마사로바",
    nameEn: "Rebeka Masarova",
    country: "Spain",
    countryKo: "스페인",
    countryFlag: "🇪🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "긴 리치와 묵직한 전개",
    notable: "피지컬 장점을 바탕으로 투어 적응력을 키우는 중이다",
    signatureMatch: {
      title: "2024 하드코트 상승세 경기",
      date: "2024",
      description: "높은 타점과 긴 리치를 활용한 압박으로 상대 타이밍을 무너뜨린 경기다."
    },
    fanAppeal: "기본 피지컬이 좋아 완성도가 올라갈수록 상승 폭이 큰 선수로 보인다.",
    stats: { serve: 7.8, forehand: 7.9, backhand: 7.4, movement: 7.2, return: 7.1, mental: 7.6 }
  },
  {
    slug: "elena-avanesyan",
    name: "엘레나 아바네샨",
    nameEn: "Elena Avanesyan",
    country: "Armenia",
    countryKo: "아르메니아",
    countryFlag: "🇦🇲",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "끈질긴 랠리와 집중력 있는 수비",
    notable: "한 단계씩 성장 폭을 넓혀가는 투어형 선수다",
    signatureMatch: {
      title: "2024 클레이 접전 경기",
      date: "2024",
      description: "쉽게 포인트를 내주지 않는 수비 밀도로 상대를 지치게 만든 경기 운영이 돋보였다."
    },
    fanAppeal: "꾸준히 발전하는 수비형 자원을 좋아하는 팬에게 안정적인 기대치를 준다.",
    stats: { serve: 6.8, forehand: 7.4, backhand: 7.6, movement: 8.2, return: 7.8, mental: 8.0 }
  },
  {
    slug: "moyuka-uchijima",
    name: "모유카 우치지마",
    nameEn: "Moyuka Uchijima",
    country: "Japan",
    countryKo: "일본",
    countryFlag: "🇯🇵",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "안정적인 템포와 실수 억제력",
    notable: "견고한 밸런스로 여러 대회에서 꾸준함을 보이는 타입이다",
    signatureMatch: {
      title: "2024 아시아 하드코트 선전 경기",
      date: "2024",
      description: "실수를 최소화하며 상대에게 계속 한 볼을 더 치게 만든 경기 운영이 강점으로 드러났다."
    },
    fanAppeal: "크게 흔들리지 않는 밸런스형 선수라 꾸준한 성적 추적에 적합하다.",
    stats: { serve: 7.0, forehand: 7.4, backhand: 7.5, movement: 7.8, return: 7.7, mental: 7.9 }
  },
  {
    slug: "eva-lys",
    name: "에바 리스",
    nameEn: "Eva Lys",
    country: "Germany",
    countryKo: "독일",
    countryFlag: "🇩🇪",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    style: "공격 전환 타이밍과 스트로크 완성도",
    notable: "젊은 세대 가운데 성장 흐름이 뚜렷한 선수다",
    signatureMatch: {
      title: "2024 유럽 실내 하드코트 경기",
      date: "2024",
      description: "수비에서 공격으로 넘어가는 속도가 좋아 차세대 자원으로서의 장점을 보여준 경기였다."
    },
    fanAppeal: "또래 대비 경기 완성도가 빠르게 올라와 성장 곡선에 대한 기대감이 크다.",
    stats: { serve: 7.3, forehand: 7.8, backhand: 7.8, movement: 7.7, return: 7.5, mental: 7.8 }
  },
  {
    slug: "robin-montgomery",
    name: "로빈 몽고메리",
    nameEn: "Robin Montgomery",
    country: "USA",
    countryKo: "미국",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    style: "왼손 패턴과 전방 압박의 조합",
    notable: "미국의 차세대 왼손 유망주로 주목받는 이름이다",
    signatureMatch: {
      title: "2024 북미 하드코트 강한 인상 경기",
      date: "2024",
      description: "왼손 코스와 전진 압박이 잘 맞물리며 경기 전체 인상을 주도한 장면이 대표적이다."
    },
    fanAppeal: "미국 여자 테니스에서 드문 왼손 공격형 자원이라 차별화 포인트가 분명하다.",
    stats: { serve: 7.7, forehand: 8.0, backhand: 7.5, movement: 7.8, return: 7.6, mental: 7.9 }
  }
];

function escapeSingleQuote(value) {
  return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function hasBatchim(text) {
  const lastChar = text.trim().slice(-1);
  if (!lastChar) return false;
  const code = lastChar.charCodeAt(0);
  if (code < 0xac00 || code > 0xd7a3) return false;
  return (code - 0xac00) % 28 !== 0;
}

function subjectParticle(text) {
  return hasBatchim(text) ? "이" : "가";
}

function objectParticle(text) {
  return hasBatchim(text) ? "을" : "를";
}

function buildHexagonStats(player) {
  return [
    { name: "서브", score: player.stats.serve, description: "첫 서브의 안정감과 무료 포인트 생산력." },
    { name: "포핸드", score: player.stats.forehand, description: "주도권을 잡는 핵심 공격 수단." },
    { name: "백핸드", score: player.stats.backhand, description: "랠리 균형과 방향 전환 완성도." },
    { name: "움직임", score: player.stats.movement, description: "코트 커버와 타점 진입 속도." },
    { name: "리턴", score: player.stats.return, description: "상대 서브를 중립 이상으로 돌려놓는 능력." },
    { name: "멘탈", score: player.stats.mental, description: "접전 상황에서의 선택과 집중력." }
  ];
}

function buildHexagonStatsBlock(player) {
  const lines = buildHexagonStats(player).map(
    (stat) =>
      `                { name: '${stat.name}', score: ${stat.score.toFixed(1)}, description: '${escapeSingleQuote(stat.description)}' }`
  );
  return `            hexagonStats: [\n${lines.join(",\n")}\n            ],`;
}

function makeBlock(player) {
  const handKo = player.plays === "Left-handed" ? "왼손" : "오른손";
  const genderLabel = player.gender === "male" ? "남자" : "여자";

  const oneLineSummary = `${player.countryKo} 출신의 ${genderLabel} 프로 선수로, ${player.style}${subjectParticle(player.style)} 돋보이는 투어 자원이다.`;
  const longBio = `${player.name}는 ${player.countryKo} 출신의 ${genderLabel} 프로 테니스 선수다. ${player.notable}. ${player.style}${objectParticle(player.style)} 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.`;
  const whyNotable = `<p>${player.name}는 ${player.notable}. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`;
  const playStyle = `<p>${player.name}의 플레이는 ${player.style}${objectParticle(player.style)} 앞세운 전개로 정리할 수 있다. ${handKo} 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`;
  const growthStory = `<p>${player.name}는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`;
  const recentForm = `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`;
  const fanAppeal = `<p>${player.fanAppeal}</p>`;
  const faq1 = `${player.name}의 가장 큰 강점은 무엇인가요?`;
  const faq1Answer = `${player.style}${subjectParticle(player.style)} 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.`;
  const faq2 = `${player.name}를 볼 때 체크할 포인트는 무엇인가요?`;
  const faq2Answer = `${handKo} 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.`;

  const values = {
    name: escapeSingleQuote(player.name),
    nameEn: escapeSingleQuote(player.nameEn),
    country: escapeSingleQuote(player.country),
    countryFlag: escapeSingleQuote(player.countryFlag),
    gender: player.gender,
    plays: player.plays,
    backhand: player.backhand,
    longBio: escapeSingleQuote(longBio),
    oneLineSummary: escapeSingleQuote(oneLineSummary),
    whyNotable,
    playStyle,
    growthStory,
    recentForm,
    fanAppeal,
    faq1: escapeSingleQuote(faq1),
    faq1Answer: escapeSingleQuote(faq1Answer),
    faq2: escapeSingleQuote(faq2),
    faq2Answer: escapeSingleQuote(faq2Answer),
    signatureTitle: escapeSingleQuote(player.signatureMatch.title),
    signatureDate: escapeSingleQuote(player.signatureMatch.date),
    signatureDescription: escapeSingleQuote(player.signatureMatch.description)
  };

  return `    '${player.slug}': {
        name: '${values.name}', nameEn: '${values.nameEn}', country: '${values.country}', countryFlag: '${values.countryFlag}', image: '/images/players/placeholder-tennis-player.svg', gender: '${values.gender}', plays: '${values.plays}', backhand: '${values.backhand}',
        longBio: '${values.longBio}',
        detailedProfile: {
            oneLineSummary: '${values.oneLineSummary}',
            whyNotable: \`${values.whyNotable}\`,
            playStyle: \`${values.playStyle}\`,
            growthStory: \`${values.growthStory}\`,
            signatureMatch: {
                title: '${values.signatureTitle}',
                date: '${values.signatureDate}',
                description: '${values.signatureDescription}'
            },
${buildHexagonStatsBlock(player)}
            fanAppeal: \`${values.fanAppeal}\`,
            recentForm: \`${values.recentForm}\`,
            faq: [
                {
                    question: '${values.faq1}',
                    answer: '${values.faq1Answer}'
                },
                {
                    question: '${values.faq2}',
                    answer: '${values.faq2Answer}'
                }
            ]
        }
    },`;
}

let text = fs.readFileSync(filePath, "utf8");
const generatedSection = players.map((player) => makeBlock(player)).join("\n");
const sectionPattern = /    'lorenzo-sonego': \{[\s\S]*\n\};\s*$/m;

text = text.replace(sectionPattern, `${generatedSection}\n};`);

fs.writeFileSync(filePath, text, "utf8");
console.log(JSON.stringify({ enrichedPlayers: players.length }, null, 2));
