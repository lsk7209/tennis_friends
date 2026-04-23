import type { PlayerData } from "@/types/player";

/**
 * 30명 신규 선수 배치 추가 (2026-04-24).
 * GSC 갭 기회 + 현역 WTA 톱10 + 최근 은퇴 전설 포함.
 *
 * 각 레코드는 필수 필드 + 핵심 SEO 필드만 간결하게 작성.
 * 공식 ATP/WTA 랭킹·커리어 하이라이트 기반, 템플릿 치환 없이 개별 작성.
 */
export const NEW_30_PLAYERS: Record<string, PlayerData> = {
  // ==================== WTA 현역 톱 ====================
  "aryna-sabalenka": {
    name: "아리나 사발렌카",
    nameEn: "Aryna Sabalenka",
    country: "Belarus",
    countryFlag: "🇧🇾",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "벨라루스 출신 파워 테니스의 상징. 2023 호주 오픈과 2024 US 오픈을 제패하며 여자 테니스 최정상에 올랐습니다. 포효하는 듯한 그라운드 스트로크와 강서브가 트레이드마크입니다.",
    detailedProfile: {
      oneLineSummary:
        "호랑이 문신과 함께 코트를 지배하는 여자 테니스 최강의 파워히터.",
      playStyle:
        "<p>전 코트에서 일관되게 공격적입니다. 서브 스피드는 190km/h를 넘기고, 포핸드·백핸드 모두 남자 선수급 타점을 보입니다. 기복이 큰 약점을 최근 2년 동안 크게 개선해 메이저 3회 우승까지 도달했습니다.</p>",
      hexagonStats: [
        { name: "포핸드", score: 10 },
        { name: "서브", score: 9.5 },
        { name: "파워", score: 10 },
        { name: "멘탈", score: 8.5 },
        { name: "수비", score: 7.5 },
        { name: "창의성", score: 8 },
      ],
      faq: [
        {
          question: "사발렌카의 팔 문신은 어떤 의미인가요?",
          answer:
            "오른팔에 새긴 호랑이 문신은 '어떤 상대 앞에서도 위축되지 않겠다'는 본인의 경기 철학을 상징합니다.",
        },
        {
          question: "사발렌카의 메이저 타이틀은?",
          answer:
            "2023 호주 오픈, 2024 호주 오픈 2연패에 이어 2024 US 오픈까지 총 3회 그랜드슬램 단식 우승(2026년 4월 기준).",
        },
      ],
    },
  },
  "coco-gauff": {
    name: "코코 가우프",
    nameEn: "Coco Gauff",
    country: "USA",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "15세에 윔블던 3회전 진출로 세계를 놀라게 한 미국 테니스의 얼굴. 2023 US 오픈에서 생애 첫 메이저를 차지하며 세리나 윌리엄스 이후의 세대를 책임지는 선수로 자리 잡았습니다.",
    detailedProfile: {
      oneLineSummary:
        "스피드와 수비 범위로 승부하는 차세대 미국 테니스의 간판.",
      playStyle:
        "<p>투어에서 가장 빠른 발을 가진 선수 중 한 명입니다. 백핸드의 안정성과 리턴 게임 성공률이 돋보이고, 최근 포핸드 폼 교정으로 공격력까지 확장됐습니다. 데프-페어웨더 코치 아래 서브 테크닉을 전면 수정한 이후 승률이 크게 올랐습니다.</p>",
      hexagonStats: [
        { name: "스피드", score: 10 },
        { name: "백핸드", score: 9 },
        { name: "수비", score: 9.5 },
        { name: "멘탈", score: 9 },
        { name: "포핸드", score: 7.5 },
        { name: "서브", score: 7.5 },
      ],
      faq: [
        {
          question: "코코 가우프가 주니어에서 주목받은 계기는?",
          answer:
            "2019년 윔블던 본선에 와일드카드로 출전해 15세 나이로 3회전까지 진출하며 베테랑 비너스 윌리엄스를 꺾은 장면이 결정적이었습니다.",
        },
        {
          question: "2023 US 오픈 우승의 의미는?",
          answer:
            "미국 여자 선수의 홈 메이저 우승으로, 2017 슬로언 스티븐스 이후 6년 만의 미국인 우승이었습니다.",
        },
      ],
    },
  },
  "elena-rybakina": {
    name: "엘레나 리바키나",
    nameEn: "Elena Rybakina",
    country: "Kazakhstan",
    countryFlag: "🇰🇿",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "카자흐스탄 국적의 장신 서버. 2022 윔블던을 제패하며 여자 테니스 역대 최장신(184cm) 그랜드슬램 챔피언이 되었습니다.",
    detailedProfile: {
      oneLineSummary: "184cm 장신에서 내리꽂는 200km/h 서브의 주인공.",
      playStyle:
        "<p>여자 테니스에서 가장 위협적인 서브를 가지고 있습니다. 첫 서브 평균 180km/h대, 에이스 비율 투어 최상위권. 표정 변화가 거의 없는 '포커페이스'로 불리며 프레셔 상황에서 루틴을 흩트리지 않는 것이 강점입니다.</p>",
      hexagonStats: [
        { name: "서브", score: 10 },
        { name: "포핸드", score: 9 },
        { name: "멘탈", score: 9.5 },
        { name: "파워", score: 9 },
        { name: "수비", score: 7 },
        { name: "네트", score: 7.5 },
      ],
      faq: [
        {
          question: "리바키나의 국적 논란은 무엇인가요?",
          answer:
            "원래 러시아 출신이지만 2018년 카자흐스탄 테니스 연맹의 지원을 받고 국적을 변경했습니다. 현재는 카자흐스탄 대표로 공식 활동 중입니다.",
        },
        {
          question: "리바키나의 서브 비결은?",
          answer:
            "184cm의 키에서 내리꽂는 각도와 긴 팔에서 나오는 채찍 같은 스윙 가속이 결합된 결과입니다. 순수 스피드보다 각도·코스 정확성이 더 위협적입니다.",
        },
      ],
    },
  },
  "jessica-pegula": {
    name: "제시카 페굴라",
    nameEn: "Jessica Pegula",
    country: "USA",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "늦게 꽃핀 미국 테니스의 안정적 베이스라이너. 일관된 그라운드 스트로크로 WTA 톱10에 지속적으로 머무르는 기량을 보여줍니다.",
    detailedProfile: {
      oneLineSummary: "기복 없는 정확도로 투어 최정상을 꾸준히 지키는 선수.",
      playStyle:
        "<p>화려한 위너보다는 '상대가 실수하게 만드는' 플레이. 라운드마다 범실 비율이 투어 최저권이고, 탑스핀·슬라이스 믹싱으로 상대 리듬을 끊어놓습니다.</p>",
      hexagonStats: [
        { name: "일관성", score: 10 },
        { name: "백핸드", score: 9 },
        { name: "포핸드", score: 8.5 },
        { name: "멘탈", score: 9 },
        { name: "스피드", score: 8 },
        { name: "서브", score: 7.5 },
      ],
      faq: [
        {
          question: "제시카 페굴라의 가족 배경은?",
          answer:
            "부모가 NFL 버팔로 빌스 구단주로, 스포츠 엘리트 가정 출신입니다. 본인은 부모의 영향보다는 오랜 투어 경험으로 실력을 쌓아왔습니다.",
        },
      ],
    },
  },
  "ons-jabeur": {
    name: "온스 자베르",
    nameEn: "Ons Jabeur",
    country: "Tunisia",
    countryFlag: "🇹🇳",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "튀니지 출신, 아프리카·아랍권 최초의 여자 메이저 결승 진출자. 창의적인 샷 셀렉션과 드롭샷으로 '테니스의 셰프'라는 별명을 얻었습니다.",
    detailedProfile: {
      oneLineSummary:
        "드롭샷과 슬라이스로 경기를 요리하는 아프리카의 첫 메이저 결승 진출자.",
      playStyle:
        "<p>투어에서 가장 창의적인 선수 중 하나. 드롭샷, 하프발리, 앵글 샷 등 변칙 샷 비율이 투어 최상위권입니다. 파워형 상대를 상대로 리듬을 깨트리는 능력이 탁월합니다.</p>",
      hexagonStats: [
        { name: "창의성", score: 10 },
        { name: "드롭샷", score: 10 },
        { name: "슬라이스", score: 9.5 },
        { name: "네트", score: 9 },
        { name: "파워", score: 7 },
        { name: "멘탈", score: 8 },
      ],
      faq: [
        {
          question: "자베르의 '테니스 셰프' 별명은 어떻게 생겼나요?",
          answer:
            "경기 중 다양한 샷을 '요리하듯' 조합하는 플레이 스타일에서 비롯됐습니다. 본인도 이 별명을 긍정적으로 받아들이고 있습니다.",
        },
      ],
    },
  },
  "zheng-qinwen": {
    name: "정친원",
    nameEn: "Zheng Qinwen",
    country: "China",
    countryFlag: "🇨🇳",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "2024 파리 올림픽 여자 단식 금메달리스트. 중국 테니스의 새로운 간판으로 부상했습니다.",
    detailedProfile: {
      oneLineSummary:
        "중국 테니스 역사상 첫 올림픽 단식 금메달을 딴 차세대 에이스.",
      playStyle:
        "<p>178cm 장신에서 뿜어져 나오는 파워형 플레이. 첫 서브 퍼센티지가 높고, 포핸드 다운더라인이 주 무기입니다. 클레이·하드 양쪽 코트에서 고른 성적을 냅니다.</p>",
      hexagonStats: [
        { name: "파워", score: 9.5 },
        { name: "서브", score: 9 },
        { name: "포핸드", score: 9 },
        { name: "멘탈", score: 9 },
        { name: "수비", score: 8 },
        { name: "네트", score: 7 },
      ],
      faq: [
        {
          question: "2024 파리 올림픽 결승 결과는?",
          answer:
            "2024년 8월 3일, 도나 베키치(크로아티아)를 상대로 승리하며 중국 테니스 단식 첫 올림픽 금메달을 땄습니다.",
        },
      ],
    },
  },
  "jasmine-paolini": {
    name: "자스민 파올리니",
    nameEn: "Jasmine Paolini",
    country: "Italy",
    countryFlag: "🇮🇹",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "163cm 단신이라는 신체적 한계를 집중력과 풋워크로 극복한 이탈리아 선수. 2024 롤랑가로스·윔블던 준우승으로 단숨에 톱10에 올랐습니다.",
    detailedProfile: {
      oneLineSummary:
        "163cm 작은 신체로 메이저 결승에 두 번 오른 집중력의 대명사.",
      playStyle:
        "<p>키가 작아 서브 임팩트가 투어 평균 이하지만, 풋워크와 예측력으로 이를 보완합니다. 리턴 포지션이 매우 공격적이고, 랠리 중 테이크백을 짧게 가져가 타점을 빠르게 잡습니다.</p>",
      hexagonStats: [
        { name: "풋워크", score: 10 },
        { name: "수비", score: 9.5 },
        { name: "멘탈", score: 9 },
        { name: "백핸드", score: 8.5 },
        { name: "포핸드", score: 8 },
        { name: "서브", score: 6.5 },
      ],
      faq: [
        {
          question: "파올리니가 2024년에 주목받은 이유는?",
          answer:
            "2024 롤랑가로스·윔블던 연속 결승 진출로 이탈리아 여자 테니스 역사상 세 번째 메이저 결승 진출자가 됐습니다.",
        },
      ],
    },
  },
  "emma-navarro": {
    name: "엠마 나바로",
    nameEn: "Emma Navarro",
    country: "USA",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "미국 차세대 테니스의 기대주. 2024 US 오픈 4강으로 톱10 진입에 성공했습니다.",
    detailedProfile: {
      oneLineSummary:
        "랠리에서 지지 않는 '꺾이지 않는 마음'의 미국 라이징 스타.",
      playStyle:
        "<p>긴 랠리와 수비형 베이스라인 플레이를 주 무기로 합니다. 체력과 집중력이 강점이고, 3세트 승률이 투어 최상위권입니다.</p>",
      hexagonStats: [
        { name: "수비", score: 9 },
        { name: "체력", score: 9.5 },
        { name: "멘탈", score: 9 },
        { name: "일관성", score: 9 },
        { name: "파워", score: 7 },
        { name: "창의성", score: 7 },
      ],
      faq: [
        {
          question: "나바로의 2024 시즌 하이라이트는?",
          answer: "US 오픈 4강 진출과 WTA 톱10 진입이 가장 큰 성취였습니다.",
        },
      ],
    },
  },
  "mirra-andreeva": {
    name: "미라 안드레예바",
    nameEn: "Mirra Andreeva",
    country: "Russia",
    countryFlag: "🇷🇺",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "2007년생, 17세 나이로 투어 톱10에 진입한 차세대 신동. 현역 선수 중 가장 어린 메이저 4강 진출자입니다.",
    detailedProfile: {
      oneLineSummary: "만 17세에 톱10에 오른 2007년생 천재.",
      playStyle:
        "<p>나이답지 않은 평정심과 경기 읽기가 특징. 베이스라인 양쪽 모두 안정적이고, 큰 경기에서 흔들리지 않는 것이 또래 선수 대비 차별점입니다.</p>",
      hexagonStats: [
        { name: "멘탈", score: 9.5 },
        { name: "백핸드", score: 9 },
        { name: "포핸드", score: 8.5 },
        { name: "일관성", score: 9 },
        { name: "수비", score: 8.5 },
        { name: "파워", score: 7.5 },
      ],
      faq: [
        {
          question: "안드레예바는 언제부터 주목받기 시작했나요?",
          answer:
            "2023년 윔블던 16세 나이로 4라운드 진출하며 세계적 주목을 받았고, 2024년부터 성인 투어 톱10에 올랐습니다.",
        },
      ],
    },
  },
  "paula-badosa": {
    name: "파울라 바도사",
    nameEn: "Paula Badosa",
    country: "Spain",
    countryFlag: "🇪🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "스페인 출신 파워형 선수. 2022년 한때 세계 2위까지 올랐으나 부상으로 주춤한 뒤 2024년 다시 톱20으로 복귀했습니다.",
    detailedProfile: {
      oneLineSummary:
        "강력한 포핸드와 서브로 복귀를 알린 스페인의 파워 베이스라이너.",
      playStyle:
        "<p>180cm 장신에서 나오는 묵직한 포핸드와 평균 이상의 서브가 무기. 기복과 부상 관리가 커리어 화두였고, 2024년부터 경기 당 이동 거리를 줄이는 전술 변화로 안정성을 확보했습니다.</p>",
      hexagonStats: [
        { name: "포핸드", score: 9 },
        { name: "서브", score: 8.5 },
        { name: "파워", score: 9 },
        { name: "멘탈", score: 7.5 },
        { name: "수비", score: 7.5 },
        { name: "네트", score: 7 },
      ],
      faq: [
        {
          question: "바도사의 부상 이력은?",
          answer:
            "2023년 허리 부상으로 6개월 이상 투어를 이탈했고, 2024년 복귀 이후 훈련 강도를 관리하며 커리어를 이어가고 있습니다.",
        },
      ],
    },
  },
  "madison-keys": {
    name: "매디슨 키스",
    nameEn: "Madison Keys",
    country: "USA",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "2025 호주 오픈 우승으로 커리어 첫 메이저 타이틀을 차지한 미국 베테랑. 2017 US 오픈 결승 이후 8년 만의 메이저 결승 진출이자 최초 우승이었습니다.",
    detailedProfile: {
      oneLineSummary: "8년 만에 메이저 문턱을 넘어선 '늦된 챔피언'.",
      playStyle:
        "<p>투어 최고 수준의 포핸드·서브 파워를 가졌지만 범실 비율이 발목을 잡아왔습니다. 2024년 후반 바이탈리 라탈로프 코치 합류 후 범실이 크게 줄며 메이저 우승으로 이어졌습니다.</p>",
      hexagonStats: [
        { name: "포핸드", score: 10 },
        { name: "서브", score: 9.5 },
        { name: "파워", score: 10 },
        { name: "멘탈", score: 8 },
        { name: "수비", score: 7 },
        { name: "일관성", score: 7.5 },
      ],
      faq: [
        {
          question: "키스의 2025 호주 오픈 우승은 어떤 의미인가요?",
          answer:
            "29세 나이, 11번째 메이저 8강 이상 진출 끝에 거둔 첫 우승으로 '끈기의 상징'이라는 평가를 받았습니다.",
        },
      ],
    },
  },
  "naomi-osaka": {
    name: "오사카 나오미",
    nameEn: "Naomi Osaka",
    country: "Japan",
    countryFlag: "🇯🇵",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "메이저 4회 우승자. 2023년 출산 후 2024년 투어 복귀, 아시아 여자 테니스의 얼굴입니다.",
    detailedProfile: {
      oneLineSummary:
        "메이저 4회 우승 후 모성과 복귀로 다시 무대에 선 일본계 스타.",
      playStyle:
        "<p>190cm 가까운 장신에서 내리꽂는 서브와 폭발적인 포핸드가 무기. 복귀 후에는 랠리 패턴의 변형을 늘리고 서비스 게임 성공률을 높이는 방향으로 조정 중입니다.</p>",
      hexagonStats: [
        { name: "서브", score: 10 },
        { name: "포핸드", score: 9.5 },
        { name: "파워", score: 9.5 },
        { name: "멘탈", score: 7.5 },
        { name: "수비", score: 7.5 },
        { name: "창의성", score: 7 },
      ],
      faq: [
        {
          question: "오사카의 메이저 우승 기록은?",
          answer:
            "2018·2020 US 오픈, 2019·2021 호주 오픈 총 4회 우승(2026년 4월 기준).",
        },
      ],
    },
  },
  "victoria-azarenka": {
    name: "빅토리아 아자렌카",
    nameEn: "Victoria Azarenka",
    country: "Belarus",
    countryFlag: "🇧🇾",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "2012·2013 호주 오픈 2연패 챔피언. 30대 후반이 된 지금도 톱30에 안정적으로 머무르는 여자 테니스의 베테랑입니다.",
    detailedProfile: {
      oneLineSummary: "출산 후 복귀에 성공한 2012·2013 호주 오픈 챔피언.",
      playStyle:
        "<p>공격적 베이스라이너. 백핸드 다운더라인이 주 무기이고, 랠리 중 상대 템포를 흐트리는 드롭샷을 자주 섞습니다.</p>",
      hexagonStats: [
        { name: "백핸드", score: 9.5 },
        { name: "리턴", score: 9 },
        { name: "멘탈", score: 9 },
        { name: "포핸드", score: 8.5 },
        { name: "수비", score: 8 },
        { name: "서브", score: 8 },
      ],
      faq: [
        {
          question: "아자렌카의 복귀 스토리는?",
          answer:
            "2016년 출산 후 긴 부모 양육권 분쟁으로 1년 이상 투어를 이탈했지만, 2020 US 오픈 결승 진출로 다시 정상권 복귀를 알렸습니다.",
        },
      ],
    },
  },
  "danielle-collins": {
    name: "다니엘 콜린스",
    nameEn: "Danielle Collins",
    country: "USA",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "공격적인 베이스라인 스타일의 미국 선수. 2022 호주 오픈 결승 진출자, 2024년 마이애미·찰스턴 우승으로 커리어 후반기 전성기를 맞았습니다.",
    detailedProfile: {
      oneLineSummary: "2024년 마이애미·찰스턴 연속 우승으로 재도약한 베테랑.",
      playStyle:
        "<p>공격적 테이크백과 빠른 풋워크가 인상적입니다. 포핸드 크로스로 랠리를 지배하고, 중요한 포인트에서 과감한 선택을 주저하지 않습니다.</p>",
      hexagonStats: [
        { name: "포핸드", score: 9 },
        { name: "백핸드", score: 9 },
        { name: "파워", score: 9 },
        { name: "멘탈", score: 8.5 },
        { name: "수비", score: 7 },
        { name: "서브", score: 7.5 },
      ],
      faq: [
        {
          question: "콜린스의 은퇴 소식은?",
          answer:
            "2024년 시즌 중 '올해를 끝으로 은퇴한다'고 발표했지만, 연말에 번복하고 계속 활동 중입니다.",
        },
      ],
    },
  },
  "barbora-krejcikova": {
    name: "바르보라 크레이치코바",
    nameEn: "Barbora Krejcikova",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "복식과 단식 모두에서 메이저 챔피언에 오른 보기 드문 선수. 2021 롤랑가로스, 2024 윔블던 단식 우승자입니다.",
    detailedProfile: {
      oneLineSummary: "단식·복식 양대 메이저 챔피언을 모두 달성한 복합형 선수.",
      playStyle:
        "<p>다양한 샷 셀렉션이 강점. 드롭샷·슬라이스·발리를 단식에서도 자주 활용하며, 이는 복식 경력의 영향입니다. 상대의 템포를 깨는 플레이가 주특기입니다.</p>",
      hexagonStats: [
        { name: "창의성", score: 9.5 },
        { name: "네트", score: 9 },
        { name: "백핸드", score: 9 },
        { name: "수비", score: 8.5 },
        { name: "포핸드", score: 8 },
        { name: "파워", score: 7.5 },
      ],
      faq: [
        {
          question: "크레이치코바의 복식 메이저 타이틀은?",
          answer:
            "여자 복식 그랜드슬램 7회 우승과 혼합 복식 메이저 3회 우승으로 단·복식 통합 성적이 매우 뛰어납니다.",
        },
      ],
    },
  },
  "karolina-muchova": {
    name: "카롤리나 무초바",
    nameEn: "Karolina Muchova",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "유연한 움직임과 창의적 샷 셀렉션으로 '투어에서 가장 재능 있는 선수'로 불립니다. 부상 이력이 커리어의 걸림돌이었지만 2023 롤랑가로스 결승 진출로 포텐셜을 증명했습니다.",
    detailedProfile: {
      oneLineSummary:
        "'투어에서 가장 완성도 높은 테니스'로 불리는 체코의 기술파.",
      playStyle:
        "<p>발리, 슬라이스, 드롭샷까지 모든 샷을 고르게 구사합니다. 서브-발리 전술도 자주 사용하며, 수비에서 공격으로 전환하는 속도가 투어 최상위급입니다.</p>",
      hexagonStats: [
        { name: "창의성", score: 10 },
        { name: "네트", score: 9.5 },
        { name: "백핸드", score: 9 },
        { name: "풋워크", score: 9 },
        { name: "멘탈", score: 8.5 },
        { name: "파워", score: 7.5 },
      ],
      faq: [
        {
          question: "무초바의 부상 이력은?",
          answer:
            "손목·복근 부상으로 2023년 후반~2024년 전반 7개월 이상 투어를 이탈했지만 2024년 복귀 후 다시 톱20에 진입했습니다.",
        },
      ],
    },
  },
  "donna-vekic": {
    name: "도나 베키치",
    nameEn: "Donna Vekic",
    country: "Croatia",
    countryFlag: "🇭🇷",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "2024 파리 올림픽 여자 단식 은메달리스트. 크로아티아 여자 테니스의 얼굴로 자리 잡았습니다.",
    detailedProfile: {
      oneLineSummary:
        "2024 파리 올림픽 은메달로 커리어 정점을 찍은 크로아티아의 대표 선수.",
      playStyle:
        "<p>장신(183cm)에서 나오는 큰 서브와 공격적인 베이스라인 스트로크가 무기. 범실 비율을 줄이는 것이 오랜 과제였고 2024년 시즌 동안 크게 개선했습니다.</p>",
      hexagonStats: [
        { name: "서브", score: 9 },
        { name: "포핸드", score: 8.5 },
        { name: "백핸드", score: 8.5 },
        { name: "파워", score: 9 },
        { name: "멘탈", score: 8 },
        { name: "수비", score: 7 },
      ],
      faq: [
        {
          question: "베키치의 올림픽 결승 상대는?",
          answer:
            "2024 파리 올림픽 결승에서 정친원(중국)에게 패하며 은메달을 차지했습니다.",
        },
      ],
    },
  },
  "daria-kasatkina": {
    name: "다리아 카사트키나",
    nameEn: "Daria Kasatkina",
    country: "Russia",
    countryFlag: "🇷🇺",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "러시아 출신 수비형 선수. 투어 최고의 드롭샷 구사자 중 한 명으로 꼽히며, 긴 랠리에서 상대를 지치게 하는 스타일입니다.",
    detailedProfile: {
      oneLineSummary: "드롭샷과 수비력으로 긴 랠리를 지배하는 선수.",
      playStyle:
        "<p>전형적인 수비형 베이스라이너. 공을 깊게 컨트롤하는 능력이 뛰어나고, 타이밍을 놓치지 않는 드롭샷이 가장 큰 무기입니다. 파워가 부족한 약점을 코트 커버리지로 보완합니다.</p>",
      hexagonStats: [
        { name: "수비", score: 10 },
        { name: "드롭샷", score: 9.5 },
        { name: "창의성", score: 9 },
        { name: "일관성", score: 9 },
        { name: "멘탈", score: 8 },
        { name: "파워", score: 6.5 },
      ],
      faq: [
        {
          question: "카사트키나의 사회 활동은?",
          answer:
            "LGBTQ+ 인권 옹호 활동으로 널리 알려져 있으며, 관련 이슈로 러시아 투어 활동에 제약을 받은 바 있습니다.",
        },
      ],
    },
  },
  "beatriz-haddad-maia": {
    name: "베아트리스 아다드 마이아",
    nameEn: "Beatriz Haddad Maia",
    country: "Brazil",
    countryFlag: "🇧🇷",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "브라질 테니스 역사상 가장 높은 WTA 랭킹을 기록한 선수. 왼손잡이라는 희소성과 강력한 서브로 투어에서 차별화된 존재감을 보입니다.",
    detailedProfile: {
      oneLineSummary: "브라질 테니스 최고 기록을 보유한 왼손잡이 빅서버.",
      playStyle:
        "<p>왼손잡이 서브의 각도가 큰 이점입니다. 상대의 백핸드 쪽으로 휘어지는 슬라이스 서브가 주 무기이고, 랠리에서는 포핸드로 각도를 만들어 코트를 넓게 사용합니다.</p>",
      hexagonStats: [
        { name: "서브", score: 9.5 },
        { name: "포핸드", score: 9 },
        { name: "파워", score: 9 },
        { name: "멘탈", score: 8 },
        { name: "수비", score: 7.5 },
        { name: "네트", score: 7 },
      ],
      faq: [
        {
          question: "왼손잡이 선수의 이점은?",
          answer:
            "투어의 90% 이상이 오른손잡이이므로 연습 상대가 적고, 반대로 실전에서는 상대가 왼손잡이 패턴에 익숙하지 않아 우위를 점할 수 있습니다.",
        },
      ],
    },
  },
  "amanda-anisimova": {
    name: "아만다 아니시모바",
    nameEn: "Amanda Anisimova",
    country: "USA",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "17세 나이로 2019 롤랑가로스 4강에 진출했던 미국 테니스의 기대주. 번아웃으로 긴 공백 후 복귀해 2024년 WTA 톱50에 재진입했습니다.",
    detailedProfile: {
      oneLineSummary: "번아웃 후 복귀에 성공한 미국 차세대 파워히터.",
      playStyle:
        "<p>매우 빠른 타점의 포핸드와 백핸드 모두 공격적. 라이징 볼 타격이 강점이고 수비 범위는 평균 수준입니다.</p>",
      hexagonStats: [
        { name: "포핸드", score: 9 },
        { name: "백핸드", score: 9 },
        { name: "파워", score: 9 },
        { name: "멘탈", score: 8 },
        { name: "수비", score: 7 },
        { name: "서브", score: 8 },
      ],
      faq: [
        {
          question: "아니시모바의 공백기 이유는?",
          answer:
            "2023년 시즌 중간 '정신 건강' 사유로 투어 무기한 이탈을 발표했고 약 8개월 공백 후 복귀했습니다.",
        },
      ],
    },
  },

  // ==================== ATP 전설·최근 은퇴 ====================
  "rafael-nadal": {
    name: "라파엘 나달",
    nameEn: "Rafael Nadal",
    country: "Spain",
    countryFlag: "🇪🇸",
    gender: "male",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "역사상 가장 위대한 클레이 코트 선수. 롤랑가로스 14회 우승, 메이저 22회 우승. 2024년 11월 데이비스컵을 끝으로 은퇴했습니다.",
    detailedProfile: {
      oneLineSummary: "클레이 코트의 신, 롤랑가로스 14회 우승자.",
      playStyle:
        "<p>투어 역사상 가장 높은 RPM의 탑스핀 포핸드를 가진 선수였습니다. 왼손잡이 포핸드가 오른손잡이 선수의 백핸드 쪽으로 꽂히는 각도는 특히 클레이에서 절대적 위력을 발휘했습니다.</p>",
      hexagonStats: [
        { name: "클레이", score: 10 },
        { name: "탑스핀", score: 10 },
        { name: "멘탈", score: 10 },
        { name: "체력", score: 10 },
        { name: "수비", score: 9.5 },
        { name: "드롭샷", score: 8.5 },
      ],
      faq: [
        {
          question: "나달의 은퇴 일자는?",
          answer:
            "2024년 11월 19일, 스페인 말라가에서 열린 데이비스컵 8강 경기를 끝으로 공식 은퇴했습니다.",
        },
        {
          question: "나달의 대표 기록은?",
          answer:
            "그랜드슬램 22회 우승(조코비치 24, 페더러 20), 롤랑가로스 14회 우승(역대 1위), ATP 단식 92회 우승.",
        },
      ],
    },
  },
  "roger-federer": {
    name: "로저 페더러",
    nameEn: "Roger Federer",
    country: "Switzerland",
    countryFlag: "🇨🇭",
    gender: "male",
    plays: "Right-handed",
    backhand: "One-handed",
    longBio:
      "우아함과 완성도의 상징. 메이저 20회 우승, 세계 랭킹 1위 237주 연속 보유. 2022년 공식 은퇴했습니다.",
    detailedProfile: {
      oneLineSummary:
        "테니스의 예술, 원핸드 백핸드의 아름다움을 재정의한 전설.",
      playStyle:
        "<p>원핸드 백핸드·공격적 서브앤발리를 현대 테니스에서도 통하게 만든 주역. 스윙 효율이 극도로 높아 체력 소모가 적었고, 40세까지 메이저 결승에 오를 수 있었던 이유입니다.</p>",
      hexagonStats: [
        { name: "기술", score: 10 },
        { name: "서브", score: 9.5 },
        { name: "백핸드(원핸드)", score: 10 },
        { name: "네트", score: 10 },
        { name: "멘탈", score: 9.5 },
        { name: "체력", score: 9 },
      ],
      faq: [
        {
          question: "페더러의 은퇴 일자는?",
          answer:
            "2022년 9월 23일 런던 레이버컵을 끝으로 은퇴. 나달과 마지막 복식을 함께 치른 것으로 화제가 됐습니다.",
        },
      ],
    },
  },
  "andy-murray": {
    name: "앤디 머리",
    nameEn: "Andy Murray",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "빅3 시대에 메이저 3회(2012·2016 윔블던, 2013 US 오픈)를 우승하며 '빅4'의 일원으로 꼽혔습니다. 2024년 파리 올림픽 복식을 끝으로 공식 은퇴했습니다.",
    detailedProfile: {
      oneLineSummary: "빅3 시대에 메이저 3회 우승으로 빅4를 만든 영국의 영웅.",
      playStyle:
        "<p>투어 최고 수준의 리턴과 수비형 베이스라인 플레이. 경기 중 소리치고 자책하는 감정적 스타일로도 유명하지만 중요 포인트에서의 집중력은 투어 최상위급이었습니다.</p>",
      hexagonStats: [
        { name: "리턴", score: 10 },
        { name: "수비", score: 10 },
        { name: "백핸드", score: 9.5 },
        { name: "멘탈", score: 9 },
        { name: "서브", score: 8.5 },
        { name: "네트", score: 8.5 },
      ],
      faq: [
        {
          question: "머리의 은퇴 경기는?",
          answer:
            "2024년 8월 파리 올림픽 복식 준결승. 복식 파트너는 댄 에반스였고, 경기 후 공식 은퇴를 발표했습니다.",
        },
      ],
    },
  },
  "dominic-thiem": {
    name: "도미니크 팀",
    nameEn: "Dominic Thiem",
    country: "Austria",
    countryFlag: "🇦🇹",
    gender: "male",
    plays: "Right-handed",
    backhand: "One-handed",
    longBio:
      "2020 US 오픈 우승자. 오스트리아 최초의 메이저 단식 챔피언이자 원핸드 백핸드의 마지막 세대 중 한 명. 손목 부상으로 2024년 10월 은퇴했습니다.",
    detailedProfile: {
      oneLineSummary: "원핸드 백핸드로 US 오픈 정상에 오른 오스트리아의 영웅.",
      playStyle:
        "<p>묵직한 원핸드 백핸드 슬라이스와 탑스핀 전환이 특징. 클레이 특화형이지만 2020 US 오픈 우승으로 하드 코트 적응력도 증명했습니다.</p>",
      hexagonStats: [
        { name: "백핸드(원핸드)", score: 10 },
        { name: "포핸드", score: 9 },
        { name: "체력", score: 9.5 },
        { name: "클레이", score: 9.5 },
        { name: "멘탈", score: 8.5 },
        { name: "서브", score: 8 },
      ],
      faq: [
        {
          question: "팀의 은퇴 사유는?",
          answer:
            "2021년부터 지속된 오른손목 부상으로 예전 기량 회복이 어려워졌고, 2024년 10월 빈 오픈을 끝으로 공식 은퇴했습니다.",
        },
      ],
    },
  },
  "mackenzie-mcdonald": {
    name: "맥켄지 맥도날드",
    nameEn: "Mackenzie McDonald",
    country: "USA",
    countryFlag: "🇺🇸",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "UCLA 출신 미국 테니스 선수. 2023 호주 오픈에서 라파엘 나달을 상대로 2라운드 승리를 거두며 주목을 받았습니다.",
    detailedProfile: {
      oneLineSummary: "2023 호주 오픈에서 나달을 꺾은 UCLA 출신 파이터.",
      playStyle:
        "<p>170cm대 중반의 단신을 풋워크와 빠른 리턴 타점으로 보완합니다. 상대가 실수하게 유도하는 고각도 공격이 특기입니다.</p>",
      hexagonStats: [
        { name: "풋워크", score: 9 },
        { name: "리턴", score: 9 },
        { name: "일관성", score: 8.5 },
        { name: "멘탈", score: 8 },
        { name: "수비", score: 8.5 },
        { name: "파워", score: 7 },
      ],
      faq: [
        {
          question: "2023 호주 오픈 vs 나달 결과는?",
          answer:
            "2023년 1월 18일 2라운드에서 6-4, 6-4, 7-5로 나달을 꺾으며 커리어 최고 기록을 냈습니다.",
        },
      ],
    },
  },
  "lleyton-hewitt": {
    name: "레이튼 휴이트",
    nameEn: "Lleyton Hewitt",
    country: "Australia",
    countryFlag: "🇦🇺",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "2001 US 오픈·2002 윔블던 우승자. 20세 8개월 나이로 세계 1위에 올라 이 기록은 2022년 알카라스가 깨기까지 20년 이상 유지됐습니다.",
    detailedProfile: {
      oneLineSummary: "알카라스가 깨기 전까지 최연소 세계 1위 기록 보유자.",
      playStyle:
        "<p>신장(180cm) 대비 파워가 평범했지만 투어 최고 수준의 풋워크와 싸움꾼 기질로 메이저 2회 우승까지 도달. 'Come on!' 세러머니의 원조이기도 합니다.</p>",
      hexagonStats: [
        { name: "풋워크", score: 10 },
        { name: "멘탈", score: 10 },
        { name: "리턴", score: 9.5 },
        { name: "수비", score: 9.5 },
        { name: "체력", score: 9 },
        { name: "서브", score: 7.5 },
      ],
      faq: [
        {
          question: "휴이트의 현역 이후 활동은?",
          answer:
            "현재 호주 데이비스컵 감독으로 활동 중이며, 아들 크루즈 휴이트가 차세대 호주 테니스 유망주로 성장하고 있습니다.",
        },
      ],
    },
  },
  "stan-wawrinka": {
    name: "스탄 바브린카",
    nameEn: "Stan Wawrinka",
    country: "Switzerland",
    countryFlag: "🇨🇭",
    gender: "male",
    plays: "Right-handed",
    backhand: "One-handed",
    longBio:
      "원핸드 백핸드의 대표주자. 메이저 3회(2014 호주·2015 롤랑가로스·2016 US 오픈) 우승으로 페더러와 함께 스위스 테니스의 황금기를 이끌었습니다.",
    detailedProfile: {
      oneLineSummary: "빅3를 결승에서 꺾고 메이저 3개를 차지한 '빅3 킬러'.",
      playStyle:
        "<p>원핸드 백핸드의 파워가 역대 최고 수준으로 평가받습니다. 클레이·하드 모두에서 메이저를 딴 것처럼 코트 적응력도 뛰어났습니다.</p>",
      hexagonStats: [
        { name: "백핸드(원핸드)", score: 10 },
        { name: "파워", score: 9.5 },
        { name: "멘탈", score: 9 },
        { name: "포핸드", score: 8.5 },
        { name: "서브", score: 8.5 },
        { name: "수비", score: 7.5 },
      ],
      faq: [
        {
          question: "바브린카의 '빅3 킬러' 별명은?",
          answer:
            "그의 3번의 메이저 결승 상대는 각각 나달(2014 호주), 조코비치(2015 롤랑·2016 US 오픈)로, 모두 세계 1위를 결승에서 꺾고 우승한 드문 기록입니다.",
        },
      ],
    },
  },
  "richard-gasquet": {
    name: "리샤르 가스케",
    nameEn: "Richard Gasquet",
    country: "France",
    countryFlag: "🇫🇷",
    gender: "male",
    plays: "Right-handed",
    backhand: "One-handed",
    longBio:
      "프랑스 테니스의 베테랑. 원핸드 백핸드 '테니스 아티스트'로 불렸으며, 2025년 은퇴 예정을 발표했습니다.",
    detailedProfile: {
      oneLineSummary:
        "투어에서 가장 아름다운 원핸드 백핸드로 불렸던 프랑스의 예술가.",
      playStyle:
        "<p>메이저 4강 3회를 찍은 정상급 기량. 원핸드 백핸드의 스윙 아치가 교과서로 불릴 만큼 아름다웠고, 드롭샷과 슬라이스의 다양성이 강점이었습니다.</p>",
      hexagonStats: [
        { name: "백핸드(원핸드)", score: 10 },
        { name: "기술", score: 9.5 },
        { name: "슬라이스", score: 9 },
        { name: "창의성", score: 9 },
        { name: "포핸드", score: 7.5 },
        { name: "멘탈", score: 7.5 },
      ],
      faq: [
        {
          question: "가스케의 은퇴 계획은?",
          answer:
            "2025 롤랑가로스를 끝으로 공식 은퇴를 예고한 상태입니다(2026년 4월 기준).",
        },
      ],
    },
  },
  "fabio-fognini": {
    name: "파비오 포니니",
    nameEn: "Fabio Fognini",
    country: "Italy",
    countryFlag: "🇮🇹",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "이탈리아 테니스의 베테랑. 2019 몬테카를로 마스터스 우승으로 커리어 하이 라이트를 만들었습니다. 감정적인 경기 스타일로도 유명합니다.",
    detailedProfile: {
      oneLineSummary:
        "변화무쌍한 플레이와 감정 기복으로 유명한 이탈리아의 개성파.",
      playStyle:
        "<p>클레이 코트에서 드롭샷·앵글 샷 등 예측 불가능한 샷을 많이 구사합니다. 컨디션에 따라 톱10 선수를 꺾기도, 하위 랭커에게 지기도 하는 기복형.</p>",
      hexagonStats: [
        { name: "창의성", score: 9.5 },
        { name: "드롭샷", score: 9 },
        { name: "클레이", score: 9 },
        { name: "파워", score: 7.5 },
        { name: "일관성", score: 6.5 },
        { name: "멘탈", score: 6.5 },
      ],
      faq: [
        {
          question: "포니니의 대표 우승 대회는?",
          answer:
            "2019 몬테카를로 마스터스. 당시 결승에서 두샨 라요비치를 꺾고 마스터스 1000 첫 우승을 차지했습니다.",
        },
      ],
    },
  },
  "diego-schwartzman": {
    name: "디에고 슈바르츠만",
    nameEn: "Diego Schwartzman",
    country: "Argentina",
    countryFlag: "🇦🇷",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "170cm 단신으로 ATP 톱10까지 올랐던 아르헨티나 선수. 2024년 투어 고별 시즌을 보내고 은퇴했습니다.",
    detailedProfile: {
      oneLineSummary: "170cm 단신으로 톱10에 오른 '작은 거인'.",
      playStyle:
        "<p>신장이 170cm로 남자 투어 최단신 수준이지만 압도적 풋워크와 리턴 게임 장악력으로 약점을 상쇄했습니다. 클레이에서 특히 위협적이었고 메이저 8강을 다수 기록했습니다.</p>",
      hexagonStats: [
        { name: "풋워크", score: 10 },
        { name: "리턴", score: 10 },
        { name: "수비", score: 9.5 },
        { name: "일관성", score: 9 },
        { name: "클레이", score: 9 },
        { name: "서브", score: 6.5 },
      ],
      faq: [
        {
          question: "슈바르츠만의 은퇴 시점은?",
          answer: "2024년 아르헨티나 오픈을 끝으로 공식 은퇴를 발표했습니다.",
        },
      ],
    },
  },
};
