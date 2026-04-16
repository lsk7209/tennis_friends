import { PlayerData } from "@/types/player";

export const FEMALE_PLAYERS: Record<string, PlayerData> = {
  "iga-swiatek": {
    name: "이가 스비옹텍",
    nameEn: "Iga Swiatek",
    country: "Poland",
    countryFlag: "🇵🇱",
    image: "/images/players/iga-swiatek.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '폴란드 역사상 최초의 그랜드슬램 단식 우승자이자 세계 랭킹 1위. 압도적인 클레이 코트 실력으로 "클레이 여제"라 불리며, 남자 선수 못지않은 강력한 탑스핀 포핸드를 구사합니다.',
    detailedProfile: {
      oneLineSummary:
        '나달의 DNA를 가진 "클레이 여제". 베이글(6-0) 스코어를 가장 많이 만드는 압도적 지배력.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥯 베이커리 주인장 (Iga's Bakery)</div>
                    <p>이가 스비옹텍은 상대에게 한 게임도 내주지 않고 6-0으로 세트를 끝내는 경우가 매우 많아 팬들에게 <strong>"베이커리를 운영한다"</strong>는 별명을 얻었습니다. 6-0 세트는 '베이글', 6-1 세트는 '브레드스틱'이라고 부릅니다. 결승전 같은 큰 무대에서도 6-0 스코어를 만들어내는 그녀의 집중력은 타의 추종을 불허합니다.</p>
                </div>
                <p>그녀는 21세기 여자 테니스에서 가장 압도적인 클레이 코트 성적을 보여주고 있으며, 쥐스틴 에넹 이후 롤랑가로스 3연패(2022-2024)를 달성한 전설적인 기록을 써 내려가고 있습니다.</p>
            `,
      playStyle: `
                <p><strong>"공격적 베이스라이너 + 극강의 탑스핀"</strong></p>
                <p>스비옹텍의 가장 큰 특징은 <strong>남자 선수들에 버금가는 RPM(분당 회전수)의 탑스핀 포핸드</strong>입니다. 높은 바운드로 상대를 베이스라인 뒤로 밀어내고, 기회가 오면 빠르게 다운더라인 위너를 꽂아 넣습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🌪️ 스비옹텍의 3가지 "승리 공식"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>헤비 탑스핀 포핸드:</strong> 평균 3000RPM 이상의 회전이 걸린 포핸드는 클레이 코트에서 특히 위력적입니다. 공이 바운드 후 급격하게 튀어 올라 상대의 밸런스를 무너뜨립니다.</li>
                        <li><strong>슬라이딩 디펜스:</strong> 하드 코트에서도 클레이 코트처럼 자연스럽게 슬라이딩하며 공을 받아냅니다. 오픈 스탠스에서 뿜어져 나오는 유연성은 수비를 공격으로 전환하는 핵심입니다.</li>
                        <li><strong>미친 활동량:</strong> 지치지 않는 체력으로 코트 구석구석을 커버하며, 랠리가 길어질수록 승률이 높아집니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "포핸드 (Forehand)",
          score: 10,
          description: "여자 테니스 최고의 회전량과 파워.",
        },
        {
          name: "멘탈 (Mental)",
          score: 9.5,
          description: "스포츠 심리학자와 항상 동행하며 강철 멘탈 유지.",
        },
        {
          name: "풋워크 (Footwork)",
          score: 10,
          description: "코트 커버리지와 슬라이딩 능력이 독보적.",
        },
        {
          name: "리턴 (Return)",
          score: 9.5,
          description: "상대의 서브를 공격적으로 받아치는 능력이 탁월.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 9,
          description: "안정적이고 견고한 투핸드 백핸드.",
        },
        {
          name: "서브 (Serve)",
          score: 8,
          description: "파워보다는 킥 서브와 코스 공략 위주.",
        },
      ],
      growthStory: `
                <p>운동선수 출신 부모님 밑에서 자란 스비옹텍은 주니어 시절부터 두각을 나타냈습니다. 2020년 롤랑가로스에서 시드 배정조차 받지 못한 채 출전하여 <strong>무실세트 우승</strong>이라는 기적을 쓰며 전 세계에 이름을 알렸습니다.</p>
                <blockquote>
                    "기다리지 말고, 코트에서 쟁취하라."
                </blockquote>
                <p>애슐리 바티의 은퇴 이후 갑작스럽게 세계 1위에 올랐지만, 37연승이라는 대기록을 세우며 자신이 "진정한 1위"임을 증명했습니다. 현재는 명실상부한 여자 테니스의 최강자로 군림하고 있습니다.</p>
            `,
      signatureMatch: {
        title: "2020 롤랑가로스 결승 vs 소피아 케닌",
        date: "2020. 10. 10",
        description:
          "전설의 시작. 당시 세계 랭킹 54위였던 19세 소녀 스비옹텍이 호주 오픈 챔피언 케닌을 6-4, 6-1로 압도하며 생애 첫 그랜드슬램 트로피를 들어 올린 경기입니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📚 책 읽는 테니스 천재</div>
                    <p>코트 위에서는 냉철한 승부사지만, 밖에서는 조용히 독서를 즐기는 내향적인 성격(I형)입니다. 인터뷰에서 엉뚱한 매력을 발산하거나, 우승 트로피 뚜껑을 떨어뜨리는 등 "허당미"도 있어 팬들의 사랑을 받습니다.</p>
                </div>
                <p>록 밴드 AC/DC와 핑크 플로이드의 팬이며, 경기 전에는 락 음악을 들으며 텐션을 올린다고 합니다.</p>
            `,
      recentForm: `
                <p><strong>"클레이의 여왕, 하드 코트 정복 중"</strong></p>
                <p>클레이 코트에서는 거의 무적에 가까운 포스를 보여줍니다. 최근에는 하드 코트와 잔디 코트에서도 경기력을 끌어올리며 "전천후 챔피언"으로 진화하고 있습니다. 2024년 롤랑가로스 우승으로 "파리의 여인"임을 다시 한번 입증했습니다.</p>
            `,
      faq: [
        {
          question: '이가 스비옹텍은 왜 "베이커리"라는 별명이 있나요?',
          answer:
            '테니스에서 6-0 스코어를 "베이글(Bagel)", 6-1 스코어를 "브레드스틱(Breadstick)"이라고 부릅니다. 스비옹텍은 압도적인 실력으로 상대를 6-0이나 6-1로 이기는 경우가 많아, 팬들이 "스비옹텍이 베이커리를 열었다"라고 농담하며 붙여준 별명입니다.',
        },
        {
          question: "스비옹텍이 경기 중에 모자를 푹 눌러쓰는 이유는?",
          answer:
            "그녀는 경기에 집중하기 위해 시야를 제한하고 싶어 합니다. 챙이 넓은 모자를 푹 눌러써서 관중석이나 다른 방해 요소를 차단하고, 오직 공과 코트에만 집중하는 그녀만의 루틴입니다.",
        },
        {
          question: "스비옹텍의 우상은 누구인가요?",
          answer:
            '그녀의 우상은 "클레이의 황제" 라파엘 나달입니다. 스비옹텍의 플레이 스타일(강력한 탑스핀, 끈질긴 수비, 왼손잡이 같은 포핸드 모션 등)은 나달에게 많은 영감을 받았습니다. 실제로 나달의 경기를 보며 자랐고, 성덕(성공한 덕후)이 되어 나달과 함께 훈련하기도 했습니다.',
        },
      ],
    },
  },
  "aryna-sabalenka": {
    name: "아리나 사발렌카",
    nameEn: "Aryna Sabalenka",
    country: "Belarus",
    countryFlag: "🇧🇾",
    image: "/images/players/aryna-sabalenka.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "강력한 파워 테니스의 대명사. 폭발적인 서브와 포핸드로 공격적인 플레이를 구사하며 하드 코트 그랜드슬램에서 눈부신 성과를 거두었습니다.",
    detailedProfile: {
      faq: [
        {
          question: "아리나 사발렌카 선수의 플레이 스타일은 어떤가요?",
          answer:
            "아리나 사발렌카 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "아리나 사발렌카 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "아리나 사발렌카 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "아리나 사발렌카 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        '코트 위를 지배하는 압도적인 "호랑이", 파워 테니스의 새로운 표준.',
      whyNotable: `
                <p><strong>"여자 테니스 최고의 파워 히터"</strong></p>
                <p>아리나 사발렌카는 현역 여자 선수 중 가장 강력한 그라운드 스트로크 파워를 보유한 선수 중 한 명입니다. 그녀의 포효하는 듯한 기합 소리만큼이나 공의 위력도 압도적이며, 특히 하드 코트에서 그녀를 막을 수 있는 선수는 손에 꼽습니다.</p>
                <p>과거에는 멘탈과 서브 난조(더블 폴트)로 인해 스스로 무너지는 경우가 많았으나, 2023년을 기점으로 이를 완벽하게 극복하고 호주 오픈 2연패를 달성하며 명실상부한 '하드 코트의 여왕'으로 등극했습니다.</p>
            `,
      playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner) + 빅 서브"</strong></p>
                <p>사발렌카의 테니스는 '공격, 공격, 또 공격'입니다. 평균 시속 190km에 육박하는 강력한 퍼스트 서브와, 남자 선수와 비교해도 뒤지지 않는 묵직한 포핸드가 그녀의 주무기입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 한때 게임당 10개가 넘는 더블 폴트를 범하며 '입스(Yips)' 위기까지 겪었으나, 폼 교정 후 이제는 투어에서 가장 위협적인 서브를 구사합니다.</li>
                    <li><strong>스트로크:</strong> 플랫하고 낮게 깔리는 샷보다는 상대를 힘으로 밀어내는 묵직한 샷을 구사합니다.</li>
                    <li><strong>멘탈:</strong> 감정 기복이 심했던 과거와 달리, 이제는 경기 중에도 미소를 잃지 않는 여유와 침착함을 보여줍니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "파워 (Power)",
          score: 10,
          description: "WTA 투어 최강의 스트로크 파워.",
        },
        {
          name: "서브 (Serve)",
          score: 9.5,
          description: "약점에서 강점으로 완벽하게 진화한 무기.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 10,
          description: "상대를 베이스라인 밖으로 밀어내는 압도적인 힘.",
        },
        {
          name: "멘탈 (Mental)",
          score: 9,
          description: "약점을 극복하고 메이저 우승을 일궈낸 집념.",
        },
        {
          name: "스피드 (Speed)",
          score: 8.5,
          description: "큰 키에 비해 준수한 코트 커버 능력.",
        },
        {
          name: "네트 플레이 (Net Play)",
          score: 8,
          description: "복식 경험을 바탕으로 한 준수한 발리 능력.",
        },
      ],
      growthStory: `
                <p>벨라루스 민스크 출신의 사발렌카는 공격적인 스타일로 일찍부터 주목받았으나, 불안정한 제구력이 발목을 잡았습니다. 특히 2022년에는 서브 입스(Yips)로 인해 극심한 슬럼프를 겪었습다.</p>
                <p>그러나 그녀는 생체 역학 전문가와 멘탈 코치의 도움을 받아 서브 폼을 완전히 뜯어고쳤고, 이는 그녀의 커리어를 뒤바꾼 신의 한 수가 되었습니다. 단점을 극복하고 세계 1위까지 올랐던 그녀의 스토리는 '극복의 아이콘'으로 불리기에 충분합니다.</p>
            `,
      signatureMatch: {
        title: "2024 호주 오픈 결승 vs 정친원",
        date: "2024. 01. 27",
        description:
          "대회 내내 단 한 세트도 내주지 않는 완벽한 경기력으로 우승을 차지했습니다. 결승전에서도 압도적인 파워로 상대를 제압하며 호주 오픈 2연패를 달성, 하드 코트 여제로서의 위상을 공고히 했습니다.",
      },
      recentForm: `
                <p><strong>"파죽지세"</strong></p>
                <p>호주 오픈 우승 이후에도 꾸준히 상위권 성적을 유지하고 있습니다. 이가 시비옹테크, 엘레나 리바키나와 함께 'WTA 빅3'를 구축하며 매 대회 강력한 우승 후보로 거론됩니다.</p>
            `,
    },
  },
  "coco-gauff": {
    name: "코코 가우프",
    nameEn: "Coco Gauff",
    country: "United States",
    countryFlag: "🇺🇸",
    image: "/images/players/coco-gauff.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "미국의 천재 테니스 소녀에서 슈퍼스타로. 10대 시절부터 세계적인 주목을 받았으며, 놀라운 운동신경과 강력한 백핸드를 보유하고 있습니다.",
    detailedProfile: {
      faq: [
        {
          question: "코코 가우프 선수의 플레이 스타일은 어떤가요?",
          answer:
            "코코 가우프 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "코코 가우프 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "코코 가우프 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "코코 가우프 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        "10대 천재 소녀에서 미국의 아이콘으로. 폭발적인 운동신경으로 코트를 지배하는 슈퍼스타.",
      whyNotable: `
                <p><strong>"세레나 윌리엄스의 뒤를 잇는 미국의 희망"</strong></p>
                <p>코코 가우프는 2019년, 불과 15세의 나이로 윔블던 본선에 진출해 비너스 윌리엄스를 꺾으며 전 세계적인 신드롬을 일으켰습니다. 그 후 끊임없는 성장 끝에 2023 US 오픈에서 생애 첫 그랜드슬램 우승을 차지하며, 단순한 유망주가 아닌 진정한 챔피언임을 증명했습니다.</p>
                <p>경기력뿐만 아니라 사회 문제에 적극적으로 목소리를 내는 성숙한 태도로, 코트 밖에서도 많은 사람들의 롤모델이 되고 있습니다.</p>
            `,
      playStyle: `
                <p><strong>"올코트 플레이어 + 압도적인 스피드"</strong></p>
                <p>가우프의 가장 큰 무기는 육상 선수를 능가하는 **폭발적인 스피드**입니다. 어떤 공이든 쫓아가 받아내는 수비력은 상대의 실수를 유발합니다. 복식 세계 랭킹 1위 경험이 말해주듯, 네트 플레이에도 매우 능합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 투어 전체를 통틀어 가장 강력하고 안정적인 백핸드를 가지고 있습니다. 위기 상황에서 믿고 치는 주무기입니다.</li>
                    <li><strong>서브:</strong> 최고 시속 200km가 넘는 강서브를 가지고 있지만, 가끔 더블 폴트로 흔들리는 점은 개선되고 있습니다.</li>
                    <li><strong>포핸드:</strong> 과거 약점으로 지적받았으나, 탑스핀을 많이 거는 스타일로 안정감을 높였습니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "스피드 (Speed)",
          score: 10,
          description: "타의 추종을 불허하는 코트 커버 능력.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 9.5,
          description: "공격과 수비 모두 완벽한 월드클래스 백핸드.",
        },
        {
          name: "네트 플레이 (Net)",
          score: 9,
          description: "복식 세계 1위 출신다운 감각적인 발리.",
        },
        {
          name: "서브 (Serve)",
          score: 9,
          description: "파워는 최상급, 정확도는 발전 중.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 8,
          description: "안정성은 좋아졌으나 결정력은 백핸드에 비해 낮음.",
        },
        {
          name: "멘탈 (Mental)",
          score: 9,
          description: "어린 나이가 믿기지 않는 침착함과 투지.",
        },
      ],
      growthStory: `
                <p>운동선수 출신 부모님의 DNA를 물려받은 가우프는 7세 때부터 테니스를 시작했습니다. 프랑스 무라토글루 아카데미에서 훈련하며 재능을 꽃피웠고, 주니어 시절부터 '차세대 여제'로 지목받았습니다.</p>
                <p>너무 어린 나이에 받은 스포트라이트가 부담이 될 법도 했지만, 그녀는 착실하게 단계를 밟아 성장했습니다. 브래드 길버트 코치를 영입한 후 더욱 공격적인 테니스를 장착하며 마침내 메이저 퀸의 자리에 올랐습니다.</p>
            `,
      signatureMatch: {
        title: "2023 US 오픈 결승 vs 아리나 사발렌카",
        date: "2023. 09. 10",
        description:
          "홈 관중들의 열광적인 응원을 등에 업고, 강력한 파워의 사발렌카를 상대로 짜릿한 2-1 역전승을 거뒀습니다. 그녀의 엄청난 수비력이 빛을 발한 경기이자, 미국의 새로운 테니스 아이콘 탄생을 알린 역사적인 순간입니다.",
      },
      recentForm: `
                <p><strong>"진화는 계속된다"</strong></p>
                <p>US 오픈 우승 이후에도 꾸준히 4강 이상의 성적을 내고 있습니다. 특히 서브 메커니즘을 수정하며 약점을 지워나가고 있어, 앞으로 얼마나 더 성장할지 기대되는 선수입니다.</p>
            `,
    },
  },
  "elena-rybakina": {
    name: "엘레나 리바키나",
    nameEn: "Elena Rybakina",
    country: "Kazakhstan",
    countryFlag: "🇰🇿",
    image: "/images/players/elena-rybakina.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '차가운 평정심을 가진 "아이스 퀸". 강력하고 정교한 서브와 플랫한 스트로크로 윔블던 우승을 차지한 강타자입니다.',
    detailedProfile: {
      faq: [
        {
          question: "엘레나 리바키나 선수의 플레이 스타일은 어떤가요?",
          answer:
            "엘레나 리바키나 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "엘레나 리바키나 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "엘레나 리바키나 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "엘레나 리바키나 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        '얼음장처럼 차갑지만 불같이 뜨거운 샷, 윔블던을 정복한 "아이스 퀸".',
      whyNotable: `
                <p><strong>"무표정의 암살자"</strong></p>
                <p>엘레나 리바키나는 2022년 윔블던에서 우승하며 카자흐스탄 역사상 최초의 그랜드슬램 단식 챔피언이 되었습니다. 경기 중 어떤 상황에서도 표정 변화가 거의 없어 '아이스 퀸(Ice Queen)'이라는 별명을 가지고 있습니다.</p>
                <p>184cm의 큰 키에서 내리꽂는 서브와 군더더기 없는 깔끔한 스트로크는 '교과서적'이라는 평가를 받으며, 현재 여자 테니스계에서 가장 강력한 '빅3'(시비옹테크, 사발렌카, 리바키나)의 한 축을 담당하고 있습니다.</p>
            `,
      playStyle: `
                <p><strong>"빅 서버 (Big Server) + 공격적 베이스라이너"</strong></p>
                <p>리바키나의 테니스는 '간결함'과 '파워'로 요약됩니다. 쓸데없는 동작 없이 간결한 스윙으로 엄청난 파워를 만들어냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> WTA 투어 '에이스 퀸'입니다. 단순히 빠르기만 한 것이 아니라 코스 선택이 탁월하여 브레이크가 매우 어렵습니다.</li>
                    <li><strong>원투 펀치:</strong> 강한 서브 후 3구 공격으로 포인트를 끝내는 패턴이 주무기입니다.</li>
                    <li><strong>멘탈:</strong> 기쁠 때나 슬플 때나 평정심을 유지하는 포커페이스는 상대에게 큰 압박감을 줍니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "서브 (Serve)",
          score: 10,
          description: "현역 여자 선수 중 최고의 서브 능력.",
        },
        {
          name: "파워 (Power)",
          score: 9.5,
          description: "부드러운 스윙에서 나오는 묵직한 파워.",
        },
        {
          name: "멘탈 (Mental)",
          score: 9,
          description: "감정을 드러내지 않는 침착함이 강점.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 9,
          description: "다운더라인 샷이 일품인 안정적인 백핸드.",
        },
        {
          name: "스피드 (Speed)",
          score: 8,
          description: "큰 키에 비해 준수한 움직임.",
        },
        {
          name: "넷 플레이 (Net Play)",
          score: 8.5,
          description: "공격적인 발리 능력도 갖추고 있음.",
        },
      ],
      growthStory: `
                <p>러시아 모스크바에서 태어났지만, 더 나은 지원을 받기 위해 2018년 카자흐스탄으로 국적을 변경했습니다. 이는 그녀의 테니스 인생을 바꾼 결정적인 선택이었습니다.</p>
                <p>카자흐스탄 테니스 연맹의 전폭적인 지원 속에 빠르게 성장한 그녀는, 23세의 나이에 테니스 성지 윔블던을 정복하며 세계 정상급 선수로 도약했습니다.</p>
            `,
      signatureMatch: {
        title: "2022 윔블던 결승 vs 온스 자베르",
        date: "2022. 07. 09",
        description:
          "첫 세트를 내주며 불안하게 출발했으나, 이후 특유의 침착함과 강력한 서브로 경기를 지배하며 2-1 역전승을 거뒀습니다. 우승 확정 순간에도 담담한 표정으로 화제가 되었던 그녀의 대표 경기입니다.",
      },
      recentForm: `
                <p><strong>"건강하면 최강"</strong></p>
                <p>잦은 질병과 부상이 발목을 잡을 때가 있지만, 컨디션이 온전할 때는 랭킹 1위 시비옹테크조차 두려워하는 가장 강력한 우승 후보입니다. 2024년에도 브리즈번, 아부다비 등에서 우승하며 건재함을 과시했습니다.</p>
            `,
    },
  },
  "jessica-pegula": {
    name: "제시카 페굴라",
    nameEn: "Jessica Pegula",
    country: "United States",
    countryFlag: "🇺🇸",
    image: "/images/players/jessica-pegula.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "꾸준함의 대명사. 화려하진 않지만 탄탄한 기본기와 영리한 경기 운영으로 투어 상위권을 꾸준히 유지하는 탑 플레이어입니다. 한국계 어머니를 둔 것으로도 유명합니다.",
    detailedProfile: {
      faq: [
        {
          question: "제시카 페굴라 선수의 플레이 스타일은 어떤가요?",
          answer:
            "제시카 페굴라 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "제시카 페굴라 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "제시카 페굴라 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "제시카 페굴라 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        '화려하지 않지만 가장 단단한, 투어에서 가장 신뢰할 수 있는 "꾸준함의 아이콘".',
      whyNotable: `
                <p><strong>"편견을 실력으로 깬 노력파"</strong></p>
                <p>제시카 페굴라는 NFL 버팔로 빌스 구단주의 딸로, 엄청난 재벌가 상속녀라는 배경 때문에 데뷔 초에는 '취미로 테니스 친다'는 편견에 시달렸습니다. 하지만 그녀는 묵묵히 밑바닥 챌린저 투어부터 시작해 세계 랭킹 3위까지 오르며 오직 실력으로 자신을 증명했습니다.</p>
                <p>어머니가 한국계 입양아인 킴 페굴라(Kim Pegula)라 한국 팬들에게는 '하프 코리안'으로도 친숙하며, 실제로 김치와 한국 문화를 사랑하는 모습을 자주 보여줍니다.</p>
            `,
      playStyle: `
                <p><strong>"지능형 카운터 펀처 + 플랫 히터"</strong></p>
                <p>페굴라의 테니스는 '군더더기 없음' 그 자체입니다. 낮고 빠르게 깔리는 플랫성 스트로크로 상대의 시간을 빼앗고, 상대의 힘을 이용하는 카운터 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>안정성:</strong> 그녀의 가장 큰 무기입니다. 에러가 거의 없는 기계적인 스트로크로 상대를 질리게 만듭니다.</li>
                    <li><strong>리턴:</strong> 베이스라인에 바짝 붙어서 라이징 볼을 처리하는 리턴 능력은 투어 최상급입니다.</li>
                    <li><strong>복식:</strong> 고프와 함께 복식 세계 랭킹 1위를 찍을 만큼 네트 플레이와 경기 운영 능력이 뛰어납니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "안정성 (Consistency)",
          score: 10,
          description: "에러를 거의 하지 않는 정교함.",
        },
        {
          name: "리턴 (Return)",
          score: 9.5,
          description: "상대의 서브를 무력화시키는 빠른 박자.",
        },
        {
          name: "전술 (Tactics)",
          score: 9.5,
          description: "상대의 약점을 파고드는 영리함.",
        },
        {
          name: "멘탈 (Mental)",
          score: 9,
          description: "재벌가라는 배경을 잊게 만드는 헝그리 정신.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 9,
          description: "낮게 깔리는 플랫 백핸드가 일품.",
        },
        {
          name: "서브 (Serve)",
          score: 7.5,
          description: "파워보다는 코스 위주, 다소 평범함.",
        },
      ],
      growthStory: `
                <p>부유한 환경이었지만 테니스 선수로서의 길은 순탄치 않았습니다. 잦은 고관절과 무릎 부상으로 20대 중반까지 빛을 보지 못했습니다.</p>
                <p>하지만 포기하지 않고 재활에 성공한 뒤, 2021년 호주 오픈 8강 진출을 기점으로 잠재력이 폭발했습니다. 27세라는 늦은 나이에 전성기를 맞이한 '대기만성'의 표본입니다.</p>
            `,
      signatureMatch: {
        title: "2023 몬트리올(캐나다 오픈) 결승 vs 류드밀라 삼소노바",
        date: "2023. 08. 14",
        description:
          "이전까지 4강에서 자주 미끄러졌던 징크스를 깨고 WTA 1000 시리즈 우승을 차진한 경기. 6-1, 6-0 이라는 압도적인 스코어로 상대를 제압하며 자신의 커리어 하이를 찍었습니다.",
      },
      recentForm: `
                <p><strong>"Top 5의 수문장"</strong></p>
                <p>슬램 우승은 아직 없지만, 마스터스급 대회에서는 꾸준히 결승에 오르며 랭킹 포인트를 쌓고 있습니다. 가장 기복 없는 경기력을 보여주는 선수 중 한 명입니다.</p>
            `,
    },
  },
  "ons-jabeur": {
    name: "온스 자베르",
    nameEn: "Ons Jabeur",
    country: "Tunisia",
    countryFlag: "🇹🇳",
    image: "/images/players/ons-jabeur.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "코트 위의 마법사. 예측 불가능한 드롭샷과 창의적인 플레이 스타일로 팬들에게 즐거움을 선사하는 튀니지의 영웅입니다.",
    detailedProfile: {
      faq: [
        {
          question: "온스 자베르 선수의 플레이 스타일은 어떤가요?",
          answer:
            "온스 자베르 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "온스 자베르 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "온스 자베르 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "온스 자베르 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        '아프리카의 자존심이자 코트 위의 마법사, 예측 불가능한 "행복 테니스"의 전도사.',
      whyNotable: `
                <p><strong>"아랍 여성 스포츠의 역사를 새로 쓰는 선구자"</strong></p>
                <p>온스 자베르는 아랍 및 북아프리카 선수 최초로 그랜드슬램 결승(윔블던, US 오픈)에 진출한 살아있는 역사입니다. 그녀의 성공은 단순한 개인의 성취를 넘어, 아랍권 여성들에게 "우리도 할 수 있다"는 희망의 메시지가 되었습니다.</p>
                <p>팬들에게 항상 웃음을 잃지 않는 유쾌한 성격으로 '행복부 장관(Minister of Happiness)'이라는 별명을 가지고 있으며, 투어에서 가장 사랑받는 선수 중 한 명입니다.</p>
            `,
      playStyle: `
                <p><strong>"창의적 올라운더 (Creative All-Rounder)"</strong></p>
                <p>자베르의 테니스는 '보는 맛'이 있습니다. 기계적인 랠리 대신, 끊임없이 구질을 변화시키고 허를 찌르는 드롭샷으로 상대를 흔들어 놓습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>드롭샷:</strong> 타의 추종을 불허하는 드롭샷 장인입니다. 베이스라인 깊숙이 공을 보내다 예고 없이 툭 떨어뜨리는 샷은 알고도 당할 수밖에 없습니다.</li>
                    <li><strong>슬라이스:</strong> 포핸드, 백핸드 가리지 않고 자유자재로 슬라이스를 구사해 상대의 리듬을 완전히 뺏습니다.</li>
                    <li><strong>변칙:</strong> 정석적인 플레이보다는 본능적이고 감각적인 샷을 즐겨, '코트 위의 마법사'로 불립니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "창의성 (Creativity)",
          score: 10,
          description: "상상할 수 없는 샷을 현실로 만드는 능력.",
        },
        {
          name: "드롭샷 (Drop Shot)",
          score: 10,
          description: "투어 최고의 터치 감각.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 9,
          description: "파워보다는 각도와 코스가 일품.",
        },
        {
          name: "서브 (Serve)",
          score: 8.5,
          description: "키에 비해 꽤 강력하고 다양한 서브.",
        },
        {
          name: "멘탈 (Mental)",
          score: 8,
          description: "큰 경기 결승에서 부담감을 느끼는 편.",
        },
        {
          name: "체력 (Stamina)",
          score: 8,
          description: "긴 랠리보다는 빠른 승부를 선호.",
        },
      ],
      growthStory: `
                <p>튀니지의 작은 마을에서 3세 때 테니스를 시작했습니다. 열악한 인프라 속에서도 꿈을 키운 그녀는, 주니어 시절 프랑스 오픈 우승을 차지하며 재능을 알렸습니다.</p>
                <p>프로 초반에는 스폰서가 없어 힘든 시기를 겪었지만, 포기하지 않고 랭킹을 끌어올려 탑 텐에 진입했습니다. 이제는 튀니지의 국민 영웅이자 전 세계 테니스 팬들의 사랑을 받는 스타가 되었습니다.</p>
            `,
      signatureMatch: {
        title: "2022 윔블던 4강 vs 타티아나 마리아",
        date: "2022. 07. 07",
        description:
          "아랍/아프리카 선수 최초의 그랜드슬램 결승 진출을 확정 지은 역사적인 경기. 절친한 친구인 마리아와의 대결에서 승리한 후, 네트 앞에서 긴 포옹을 나누는 장면은 윔블던 역사상 가장 아름다운 스포츠맨십으로 기억됩니다.",
      },
      recentForm: `
                <p><strong>"마지막 퍼즐, 슬램 우승"</strong></p>
                <p>메이저 대회 준우승만 3번(윔블던 2회, US 오픈 1회)을 기록하며 우승 문턱에서 아쉬움을 삼켰습니다. 무릎 부상으로 잠시 주춤했지만, 여전히 클레이와 잔디 코트에서 가장 위협적인 선수입니다.</p>
            `,
    },
  },
  "qinwen-zheng": {
    image: "/images/players/qinwen-zheng.png",
    name: "정 친원",
    nameEn: "Qinwen Zheng",
    country: "China",
    countryFlag: "🇨🇳",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '중국의 새로운 에이스 "Queen Wen". 2024 호주 오픈 준우승자이자 2024 파리 올림픽 금메달리스트로, 리나의 뒤를 이어 아시아 테니스를 이끌어갈 강력한 서브와 포핸드의 소유자입니다.',
    detailedProfile: {
      faq: [
        {
          question: "정 친원 선수의 플레이 스타일은 어떤가요?",
          answer:
            "정 친원 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "정 친원 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "정 친원 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "정 친원 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        '아시아 최초 올림픽 단식 금메달리스트, 대륙의 기상을 품은 "Queen Wen".',
      whyNotable: `
                <p><strong>"아시아 테니스의 새 역사를 쓴 금메달리스트"</strong></p>
                <p>정 친원은 2024 파리 올림픽에서 아시아 선수 최초로 테니스 단식 금메달을 획득하며 전설 리나(Li Na)를 넘어섰습니다. 'Queen Wen'이라는 별명처럼 코트 위에서 당당하고 카리스마 넘치는 모습을 보여주며, 중국을 넘어 전 세계적인 스타로 발돋움했습니다.</p>
                <p>2024 호주 오픈 준우승까지 차지하며 메이저 대회 경쟁력도 입증했습니다.</p>
            `,
      playStyle: `
                <p><strong>"파워풀한 공격형 베이스라이너"</strong></p>
                <p>강력한 신체 조건에서 나오는 파워가 압도적입니다. 서브와 포핸드 모두 남자 선수 못지않은 스피드와 회전을 보여줍니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> WTA 투어에서 에이스 1, 2위를 다툴 만큼 강력합니다. 첫 서브가 터지는 날에는 게임을 쉽게 풀어갑니다.</li>
                    <li><strong>포핸드:</strong> 헤비 탑스핀이 걸린 포핸드는 바운드 후 높게 튀어 올라 상대를 괴롭힙니다.</li>
                    <li><strong>멘탈:</strong> 올림픽 4강에서 세계 1위 시비옹테크를 꺾었을 때 보여준 집중력과 투지는 그녀가 큰 경기에 강한 '강심장'임을 증명했습니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "서브 (Serve)",
          score: 9.5,
          description: "투어 최정상급 에이스 생산 능력.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 9.5,
          description: "묵직하고 파괴력 있는 탑스핀 포핸드.",
        },
        {
          name: "멘탈 (Mental)",
          score: 9.5,
          description: "중요한 순간에 흔들리지 않는 대담함.",
        },
        {
          name: "체력 (Stamina)",
          score: 9,
          description: "3세트 접전에도 지치지 않는 체력.",
        },
        {
          name: "스피드 (Speed)",
          score: 8.5,
          description: "큰 키에 비해 준수한 기동력.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 8.5,
          description: "안정적이며 포핸드를 잘 받쳐줌.",
        },
      ],
      growthStory: `
                <p>중국 후베이성 출신으로 7세 때 테니스를 시작했습니다. 리나의 경기를 보고 테니스 선수의 꿈을 키웠으며, 리나의 전 코치였던 카를로스 로드리게스의 지도를 받기도 했습니다.</p>
                <p>스페인 바르셀로나로 유학을 떠나 기량을 갈고닦았으며, 2022년 WTA 신인상을 수상하며 혜성처럼 등장했습니다. 이후 매년 급성장하여 이제는 그랜드슬램 우승 후보 0순위로 꼽힙니다.</p>
            `,
      signatureMatch: {
        title: "2024 파리 올림픽 결승 vs 도나 베키치",
        date: "2024. 08. 03",
        description:
          "아시아 테니스 역사상 최고의 순간. 결승전 중압감을 이겨내고 2-0 완승을 거두며 시상대 가장 높은 곳에 섰습니다. 중국 전역을 열광의 도가니로 빠뜨린 역사적인 경기입니다.",
      },
      recentForm: `
                <p><strong>"세계 최정상급 레벨"</strong></p>
                <p>올림픽 금메달 이후 자신감이 절정에 달했습니다. 서브와 스트로크의 완성도가 더욱 높아졌으며, 이제는 어떤 상대를 만나도 주눅 들지 않고 자신의 플레이를 펼칩니다.</p>
            `,
    },
  },
  "marketa-vondrousova": {
    image: "/images/players/marketa-vondrousova.png",
    name: "마르케타 본드로우소바",
    nameEn: "Marketa Vondrousova",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "2023 윔블던 챔피언. 왼손잡이 특유의 각도 깊은 서브와 정교한 드롭샷, 그리고 창의적인 플레이로 상대를 무너뜨리는 테크니션입니다.",
    detailedProfile: {
      oneLineSummary:
        '언시드(Unseeded)의 기적을 쓴 윔블던 챔피언, 상대의 타이밍을 뺏는 "왼손 마법사".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "역사를 쓴 언시드 챔피언"</div>
                    <p>2023년 윔블던에서 시드 배정을 받지 못한 선수 최초로 여자 단식 우승을 차지하는 기염을 토했습니다. 손목 수술로 인해 랭킹이 떨어졌던 그녀는, 아무도 예상하지 못한 순간에 가장 화려하게 부활했습니다.</p>
                </div>
                <p>온몸을 뒤덮은 타투와 쿨한 성격으로도 유명하며, 힘으로만 승부하는 현대 테니스에서 '감각'과 '터치'로도 정상에 설 수 있음을 증명했습니다.</p>
            `,
      playStyle: `
                <p><strong>"교활한 왼손잡이 (Crafty Lefty)"</strong></p>
                <p>상대가 가장 싫어하는 스타일입니다. 강타보다는 루프가 큰 탑스핀, 낮은 슬라이스, 그리고 기습적인 드롭샷을 섞어 상대를 혼란에 빠뜨립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇿 마르케타의 3가지 "무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>드롭샷:</strong> 투어 최고 수준입니다. 예비 동작 없이 툭 떨어뜨리는 드롭샷은 알고도 당합니다.</li>
                        <li><strong>왼손 서브:</strong> 코트 밖으로 많이 휘어져 나가는 슬라이스 서브는 리턴하기 매우 까다롭습니다.</li>
                        <li><strong>움직임:</strong> 예측력이 좋아 코트 커버 범위가 넓고, 수비 후 역습에 능합니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        { name: "터치 (Touch)", score: 10, description: "손목 감각은 타고남." },
        {
          name: "창의성 (Creativity)",
          score: 9.5,
          description: "정형화되지 않은 플레이.",
        },
        { name: "수비 (Defense)", score: 9, description: "끈질기게 받아넘김." },
        {
          name: "서브 (Serve)",
          score: 8.5,
          description: "다양한 구질로 승부.",
        },
        {
          name: "멘탈 (Mental)",
          score: 8.5,
          description: "결승전에서 보여준 침착함.",
        },
        { name: "파워 (Power)", score: 6.5, description: "파워 히터는 아님." },
      ],
      growthStory: `
                <p>체코 소콜로프 출신입니다. 주니어 시절 세계 1위를 기록할 만큼 재능은 확실했습니다. 2019년 19세의 나이로 프랑스 오픈 준우승을 차지하며 주목받았지만, 이후 잦은 손목 부상으로 투어를 떠나 있어야 했습니다.</p>
            `,
      signatureMatch: {
        title: "2023 윔블던 결승 vs 온스 자베르",
        date: "2023. 07. 15",
        description:
          "모두가 자베르의 우승을 예상했지만, 본드로우소바는 냉정하고 침착했습니다. 자베르의 범실을 유도하고 결정적인 순간 드롭샷과 로브로 포인트를 따내며 2-0 완승을 거뒀습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎨 "타투 매니아"</div>
                    <p>팔과 다리에 의미 있는 타투를 많이 새겼습니다. "타투는 나 자신을 표현하는 예술"이라고 말하며, 그녀의 자유분방한 플레이 스타일과도 잘 어울립니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 10 안착"</strong></p>
                <p>윔블던 우승 이후 꾸준히 상위권을 유지하고 있습니다. 다만 그랜드슬램 우승자로서의 부담감을 이겨내고 꾸준함을 증명하는 것이 과제입니다.</p>
            `,
      faq: [
        {
          question: "왜 타투를 많이 하나요?",
          answer:
            '16살 때부터 타투를 시작했고, 중요한 순간이나 기억하고 싶은 것들을 몸에 새긴다고 합니다. "No Rain, No Flowers"라는 문구가 유명합니다.',
        },
        {
          question: "남편도 테니스 선수인가요?",
          answer:
            "아니요, 남편 스테판 시메크는 IT 전문가입니다. 2022년 결혼했고, 본드로우소바가 부상으로 쉴 때 큰 힘이 되어주었다고 합니다.",
        },
        {
          question: "왜 고양이 집사로 유명한가요?",
          answer:
            '고양이 "Frankie"를 키우는데, 윔블던 기간 동안 고양이 돌보미를 고용해야 했다고 인터뷰에서 밝혀 화제가 되었습니다.',
        },
      ],
    },
  },
  "maria-sakkari-legacy": {
    image: "/images/players/maria-sakkari.png",
    name: "마리아 사카리",
    nameEn: "Maria Sakkari",
    country: "Greece",
    countryFlag: "🇬🇷",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "그리스의 스파르탄. 투어 최고 수준의 근육질 몸매에서 나오는 파워풀한 테니스와 쉽게 포기하지 않는 강인한 멘탈이 트레이드마크입니다.",
    detailedProfile: {
      faq: [
        {
          question: "마리아 사카리 선수의 플레이 스타일은 어떤가요?",
          answer:
            "마리아 사카리 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "마리아 사카리 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "마리아 사카리 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "마리아 사카리 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        '그리스 신화 속 전사 같은 피지컬, 지칠 줄 모르는 "스파르탄 우먼".',
      whyNotable: `
                <p><strong>"가장 강력한 피지컬을 가진 선수"</strong></p>
                <p>마리아 사카리는 WTA 투어에서 가장 뛰어난 체력을 가진 선수 중 한 명으로 꼽힙니다. '스파르탄(Spartan)'이라는 별명답게 근육질의 탄탄한 몸매와 지치지 않는 활동량으로 코트를 누빕니다. 치치파스와 함께 그리스 테니스의 황금기를 이끄는 국가대표 아이콘입니다.</p>
                <p>넷플릭스 '브레이크 포인트'에서도 비중 있게 다뤄질 만큼 스타성을 인정받고 있습니다.</p>
            `,
      playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>사카리의 테니스는 '힘'과 '활동량'으로 정의됩니다. 베이스라인 뒤에서 강력한 탑스핀 포핸드로 상대를 밀어붙이고, 어떤 공이든 쫓아가 받아내는 수비력으로 질식시킵니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>피지컬:</strong> 크로스핏 선수에 버금가는 근력과 체력으로 3세트 접전에서 더욱 강한 모습을 보입니다.</li>
                    <li><strong>포핸드:</strong> 남성 선수들처럼 무겁고 강하게 감기는 탑스핀 포핸드가 주무기입니다.</li>
                    <li><strong>서브:</strong> 키는 크지 않지만(172cm), 뛰어난 근력에서 나오는 킥 서브가 위력적입니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "피지컬 (Physicality)",
          score: 10,
          description: "WTA 최고의 근력과 체력.",
        },
        {
          name: "파워 (Power)",
          score: 9,
          description: "밀리지 않는 묵직한 스트로크.",
        },
        {
          name: "스피드 (Speed)",
          score: 9,
          description: "코트 커버리지가 매우 넓음.",
        },
        {
          name: "멘탈 (Mental)",
          score: 7.5,
          description: "준결승 등 큰 무대 징크스가 있음.",
        },
        {
          name: "서브 (Serve)",
          score: 8,
          description: "킥 서브 활용도가 좋음.",
        },
        {
          name: "네트 플레이 (Net)",
          score: 7.5,
          description: "빈도가 높지 않지만 준수함.",
        },
      ],
      growthStory: `
                <p>테니스 선수였던 어머니의 영향으로 테니스를 시작했습니다. 18세에 바르셀로나로 유학을 떠나 체계적인 훈련을 받았으며, 2017년부터 꾸준히 랭킹을 끌어올려 그리스 여자 선수 최초로 Top 10에 진입했습니다.</p>
                <p>수많은 4강 탈락의 아픔을 겪었지만, 2023년 과달라하라 오픈(WTA 1000) 우승으로 그간의 설움을 씻어냈습니다.</p>
            `,
      signatureMatch: {
        title: "2021 프랑스 오픈 16강 vs 소피아 케닌",
        date: "2021. 06. 07",
        description:
          "전년도 준우승자이자 세계 4위인 케닌을 상대로 압도적인 파워를 뽐내며 2-0 완승을 거뒀습니다. 이 승리로 생애 첫 그랜드슬램 8강을 넘어 4강까지 진출하는 쾌거를 이뤘습니다.",
      },
      recentForm: `
                <p><strong>"Top 10의 터줏대감"</strong></p>
                <p>기복 없는 플레이로 꾸준히 상위권을 유지하고 있습니다. 새로운 코치 데이비드 윗과 함께 공격적인 플레이를 다듬으며 다시 한번 메이저 우승에 도전하고 있습니다.</p>
            `,
    },
  },
  "jelena-ostapenko": {
    image: "/images/players/jelena-ostapenko.png",
    name: "옐레나 오스타펜코",
    nameEn: "Jelena Ostapenko",
    country: "Latvia",
    countryFlag: "🇱🇻",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "코트 위의 폭주기관차. 모든 공을 위너로 만들겠다는 듯한 공격적인 풀스윙 샷을 구사하며, 컨디션이 좋은 날에는 누구도 막을 수 없는 파괴력을 보여줍니다. 2017 롤랑가로스 챔피언.",
    detailedProfile: {
      faq: [
        {
          question: "옐레나 오스타펜코 선수의 플레이 스타일은 어떤가요?",
          answer:
            "옐레나 오스타펜코 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "옐레나 오스타펜코 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "옐레나 오스타펜코 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "옐레나 오스타펜코 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        '모 아니면 도, 들어가는 날은 아무도 막을 수 없는 "코트 위의 폭주기관차".',
      whyNotable: `
                <p><strong>"가장 예측 불가능한 선수"</strong></p>
                <p>옐레나 오스타펜코는 투어에서 가장 화끈한 공격 테니스를 구사합니다. 2017년 롤랑가로스에서 시드도 받지 못한 20세의 나이로 우승하며 세계를 놀라게 했습니다. 실수가 쏟아지다가도, 긁히는 날에는 세계 1위도 압도적인 스코어로 이겨버리는 도깨비 같은 매력의 소유자입니다.</p>
                <p>솔직하고 거침없는 성격과 화려한 패션으로도 많은 화제(와 논란)를 몰고 다닙니다.</p>
            `,
      playStyle: `
                <p><strong>"극단적인 공격형 (High Risk High Reward)"</strong></p>
                <p>수비는 생각하지 않습니다. 리턴부터 위너를 노리고 풀스윙을 날립니다. 볼 스도가 남자 선수들 평균보다 빠를 때도 있을 정도로 강력합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>스트로크:</strong> 포핸드, 백핸드 모두 플랫하게 때리며, 라인 근처를 집요하게 노립니다.</li>
                    <li><strong>리턴:</strong> 상대의 서브가 약하면 지체 없이 위너성 리턴을 날립니다.</li>
                    <li><strong>기복:</strong> 컨디션에 따라 위너 50개, 에러 50개를 기록하기도 하는 극단적인 경기를 보여줍니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "파워 (Power)",
          score: 10,
          description: "남자 선수에 버금가는 샷 스피드.",
        },
        {
          name: "공격성 (Aggression)",
          score: 10,
          description: "무조건 공격 앞으로.",
        },
        { name: "서브 (Serve)", score: 7, description: "더블 폴트가 잦음." },
        {
          name: "안정성 (Consistency)",
          score: 4,
          description: "극심한 기복이 약점.",
        },
        { name: "멘탈 (Mental)", score: 6, description: "감정 기복이 심함." },
        {
          name: "수비 (Defense)",
          score: 5,
          description: "수비보다는 공격으로 해결하려 함.",
        },
      ],
      growthStory: `
                <p>라트비아 리가 출신으로, 어머니의 지도로 5세 때 테니스를 시작했습니다. 어릴 때 볼룸 댄스를 배운 덕분에 풋워크가 의외로 좋습니다.</p>
                <p>2017년 프랑스 오픈 깜짝 우승으로 스타덤에 올랐습니다. 이후 기복 논란에 시달렸지만, 복식에서도 그랜드슬램 타이틀을 따내며 다재다능함을 증명했습니다.</p>
            `,
      signatureMatch: {
        title: "2017 프랑스 오픈 결승 vs 시모나 할렙",
        date: "2017. 06. 10",
        description:
          '그녀의 인생을 바꿀 경기. 당시 최강의 수비력을 자랑하던 할렙을 상대로, 무려 54개의 위너(할렙 8개)를 쏟아부으며 2-1 역전승을 거뒀습니다. "공격이 최선의 수비"임을 증명한 명승부였습니다.',
      },
      recentForm: `
                <p><strong>"여전한 파괴력"</strong></p>
                <p>2024년 초반 2개 대회에서 우승하며 부활을 알렸습니다. 여전히 기복은 있지만, 긁히는 날의 오스타펜코는 투어에서 가장 두려운 존재입니다.</p>
            `,
    },
  },
  "naomi-osaka": {
    image: "/images/players/naomi-osaka.png",
    name: "나오미 오사카",
    nameEn: "Naomi Osaka",
    country: "Japan",
    countryFlag: "🇯🇵",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "4번의 그랜드슬램 우승에 빛나는 하드 코트의 여왕. 압도적인 서브와 포핸드 파워를 갖췄으며, 코트 밖에서는 사회적 목소리를 내는 영향력 있는 아이콘입니다.",
    detailedProfile: {
      faq: [
        {
          question: "나오미 오사카 선수의 플레이 스타일은 어떤가요?",
          answer:
            "나오미 오사카 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "나오미 오사카 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "나오미 오사카 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "나오미 오사카 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        '아시아 최초 세계 랭킹 1위, 4번의 그랜드슬램을 정복한 "하드 코트의 여왕".',
      whyNotable: `
                <p><strong>"테니스의 아이콘이자 시대의 아이콘"</strong></p>
                <p>나오미 오사카는 단순히 테니스를 잘 치는 선수를 넘어섰습니다. 남녀 통틀어 아시아 국적 선수 최초로 세계 랭킹 1위에 올랐으며, 4번의 메이저 타이틀(US 오픈 2회, 호주 오픈 2회)을 따내며 하드 코트를 지배했습니다.</p>
                <p>또한 블라임 라이브스 매터(BLM) 운동 지지, 멘탈 헬스 이슈 공론화 등 코트 밖에서도 사회적 영향력을 행사하는 글로벌 아이콘입니다.</p>
            `,
      playStyle: `
                <p><strong>"파워 베이스라이너 (Power Baseliner)"</strong></p>
                <p>세레나 윌리엄스를 연상케 하는 압도적인 파워 테니스를 구사합니다. 특히 서브와 3구 공격으로 포인트를 끝내는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 여자 선수 중 최고 수준의 서브 스피드(시속 200km 육박)를 자랑하며, 위기 상황에서 에이스로 탈출하는 능력이 뛰어납니다.</li>
                    <li><strong>포핸드:</strong> 타점이 빠르고 묵직한 포핸드 위너는 그녀의 전매특허입니다.</li>
                    <li><strong>집중력:</strong> 빅 포인트에서의 집중력이 매우 좋아, 브레이크 위기 관리 능력이 탁월합니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "파워 (Power)",
          score: 10,
          description: "투어 최정상급 스트로크 파워.",
        },
        {
          name: "서브 (Serve)",
          score: 9.5,
          description: "중요한 순간에 터지는 강서브.",
        },
        {
          name: "멘탈 (Mental)",
          score: 8,
          description: "큰 경기에 강하지만, 최근 멘탈 이슈 겪음.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 9.5,
          description: "경기를 끝낼 수 있는 결정구.",
        },
        {
          name: "수비 (Defense)",
          score: 7.5,
          description: "공격에 비해 수비 커버리지는 평범.",
        },
        {
          name: "클레이/잔디 (Surface)",
          score: 6,
          description: "하드 코트 외에서는 성적이 저조함.",
        },
      ],
      growthStory: `
                <p>아이티 출신 아버지와 일본인 어머니 사이에서 태어났습니다. 3세 때 미국으로 이주해 테니스를 시작했습니다.</p>
                <p>2018년 인디언 웰스 우승으로 두각을 나타내더니, 같은 해 US 오픈에서 세레나 윌리엄스를 꺾고 우승하며 여제의 탄생을 알렸습니다. 이후 단기간에 4개의 메이저 타이틀을 휩쓸었습니다.</p>
            `,
      signatureMatch: {
        title: "2018 US 오픈 결승 vs 세레나 윌리엄스",
        date: "2018. 09. 08",
        description:
          "테니스 역사상 가장 드라마틱하고 논란이 많았던 결승전. 심판 판정 항의로 분위기가 뒤숭숭한 상황에서도, 20세의 오사카는 흔들리지 않고 자신의 우상인 세레나를 2-0으로 완파하며 생애 첫 메이저 우승을 차지했습니다.",
      },
      recentForm: `
                <p><strong>"엄마가 되어 돌아온 챔피언"</strong></p>
                <p>출산 후 2024년 복귀했습니다. 예전의 압도적인 기량은 아직 돌아오지 않았지만, 2024 프랑스 오픈에서 시비옹테크를 매치 포인트까지 몰아붙이는 등 클래스는 살아있음을 증명했습니다.</p>
            `,
    },
  },
  "caroline-wozniacki": {
    image: "/images/players/caroline-wozniacki.png",
    name: "캐롤라인 보즈니아키",
    nameEn: "Caroline Wozniacki",
    country: "Denmark",
    countryFlag: "🇩🇰",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '덴마크의 철벽. 은퇴 후 두 아이의 엄마가 되어 복귀한 "슈퍼맘"으로, 전성기 시절의 견고한 수비력과 경기 운영 능력을 여전히 과시하고 있습니다.',
    detailedProfile: {
      oneLineSummary:
        '돌아온 "덴마크의 벽", 두 아이의 엄마가 되어 다시 코트에 선 그랜드슬램 챔피언.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧱 "뚫리지 않는 방패"</div>
                    <p>전성기 시절 '월 (The Wall)'이라고 불릴 정도로 완벽한 수비력을 자랑했습니다. 상대가 지쳐서 실수를 할 때까지 공을 넘기는 끈기는 타의 추종을 불허합니다. 2018년 호주 오픈에서 생애 첫 그랜드슬램 우승을 차지하며 '무관의 제왕'이라는 꼬리표를 뗐습니다.</p>
                </div>
                <p>2020년 류마티스 관절염과 가족 계획으로 은퇴했으나, 2023년 두 아이의 엄마가 되어 전격 복귀했습니다. "엄마도 할 수 있다"는 것을 보여주는 위대한 도전 중입니다.</p>
            `,
      playStyle: `
                <p><strong>"디펜시브 베이스라이너 (Defensive Baseliner)"</strong></p>
                <p>화려한 위너보다는 에러 없는 플레이를 추구합니다. 코트 구석구석을 찌르는 백핸드와 마라톤 선수급의 체력이 강점입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇩🇰 보즈니아키의 3가지 "철벽"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>백핸드:</strong> 투어에서 가장 안정적이고 정확한 백핸드를 가졌습니다. 다운더라인 공격은 그녀의 주 득점원입니다.</li>
                        <li><strong>체력:</strong> 3시간이 넘는 경기에서도 지치지 않고 뛰어다닙니다.</li>
                        <li><strong>카운터:</strong> 수비하다가 상대의 힘을 이용해 역습하는 능력이 뛰어납니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "수비 (Defense)",
          score: 10,
          description: "전성기 시절은 통곡의 벽.",
        },
        {
          name: "체력 (Stamina)",
          score: 10,
          description: "마라톤 완주 경험도 있음.",
        },
        {
          name: "안정성 (Consistency)",
          score: 10,
          description: "에러를 거의 하지 않음.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 9.5,
          description: "세계 최고 수준.",
        },
        {
          name: "멘탈 (Mental)",
          score: 9,
          description: "절대 포기하지 않는 근성.",
        },
        {
          name: "파워 (Power)",
          score: 6.5,
          description: "스스로 강한 공을 만들지는 못함.",
        },
      ],
      growthStory: `
                <p>덴마크 오덴세 출신으로, 폴란드 출신 이민자 가정에서 태어났습니다. 아버지 표트르 보즈니아키가 코치를 맡아 그녀를 세계 1위로 키워냈습니다.</p>
            `,
      signatureMatch: {
        title: "2018 호주 오픈 결승 vs 시모나 할렙",
        date: "2018. 01. 27",
        description:
          '세계 1, 2위의 대결이자 "창과 방패"가 아닌 "방패와 방패"의 대결. 무더위 속에서 3시간 가까운 혈투 끝에 승리하며 눈물의 첫 메이저 우승을 달성했습니다.',
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👩‍👧‍👦 "슈퍼맘"</div>
                    <p>경기장에 두 아이(올리비아, 제임스)와 함께 나타나는 모습은 많은 워킹맘들에게 영감을 줍니다. "아이들에게 엄마가 꿈을 위해 노력하는 모습을 보여주고 싶다"고 말합니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"클래스는 영원하다"</strong></p>
                <p>복귀 후 2023 US 오픈 16강에 오르는 등 여전한 경쟁력을 과시하고 있습니다. 전성기만큼의 스피드는 아니지만, 노련미로 이를 커버합니다.</p>
            `,
      faq: [
        {
          question: "왜 은퇴했다가 돌아왔나요?",
          answer:
            "2020년 류마티스 관절염 진단과 출산으로 은퇴했지만, 몸 상태가 좋아지고 테니스에 대한 열정이 다시 생겨 복귀를 결심했습니다.",
        },
        {
          question: "남편은 누구인가요?",
          answer:
            "전 NBA 선수 데이비드 리(David Lee)입니다. 골든스테이트 워리어스 우승 멤버로 유명합니다.",
        },
        {
          question: "절친은 누구인가요?",
          answer:
            "세레나 윌리엄스와 매우 친합니다. 라이벌이었지만 코트 밖에서는 자매 같은 사이입니다.",
        },
      ],
    },
  },
  "angelique-kerber": {
    image: "/images/players/angelique-kerber.png",
    name: "안젤리크 케르버",
    nameEn: "Angelique Kerber",
    country: "Germany",
    countryFlag: "🇩🇪",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "독일의 레전드. 놀라운 각도의 카운터 샷과 끈질긴 수비로 그랜드슬램 3회 우승을 달성한 왼손잡이 전략가입니다. 파리 올림픽을 끝으로 은퇴를 선언했습니다.",
    detailedProfile: {
      oneLineSummary:
        '세레나 윌리엄스를 꺾은 왼손잡이 전사, 독일 테니스의 자존심 "엔지".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇩🇪 "독일 테니스의 여제"</div>
                    <p>슈테피 그라프 이후 독일 여자 테니스의 부흥을 이끈 선수입니다. 2016년 호주 오픈과 US 오픈을 우승하고 세계 1위에 올랐으며, 같은 해 리우 올림픽 은메달까지 획득했습니다. 2018년 윔블던에서는 '테니스 여제' 세레나 윌리엄스를 꺾고 우승하며 커리어 그랜드슬램에 프랑스 오픈 하나만을 남겨두었습니다.</p>
                </div>
                <p>2024년 파리 올림픽을 끝으로 현역 은퇴를 선언하며 전설로 남았습니다.</p>
            `,
      playStyle: `
                <p><strong>"최고의 카운터 펀처"</strong></p>
                <p>케르버의 수비는 단순히 공을 넘기는 것이 아닙니다. 상대의 힘을 이용해 더 빠르고 날카로운 각도로 되돌려 보냅니다. 특히 낮은 자세에서 나오는 샷은 일품입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">📐 케르버의 3가지 "각도"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>스쿼트 샷:</strong> 무릎이 땅에 닿을 정도로 낮게 앉아서 치는 샷은 그녀의 시그니처입니다.</li>
                        <li><strong>포핸드 다운더라인:</strong> 수비 상황에서 기습적으로 터지는 왼손 포핸드 역크로스와 다운더라인은 상대의 의표를 찌릅니다.</li>
                        <li><strong>체력:</strong> 코트 구석구석을 누비는 엄청난 활동량으로 상대를 질리게 만듭니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "수비 (Defense)",
          score: 10,
          description: "어떤 공이든 받아치며 각도를 만듦.",
        },
        {
          name: "카운터 (Counter)",
          score: 10,
          description: "수비에서 공격 전환이 세계 최고.",
        },
        {
          name: "멘탈 (Mental)",
          score: 9.5,
          description: "독일 전차 같은 뚝심.",
        },
        { name: "체력 (Stamina)", score: 9, description: "지치지 않는 체력." },
        {
          name: "포핸드 (Forehand)",
          score: 9,
          description: "왼손잡이 특유의 날카로움.",
        },
        {
          name: "서브 (Serve)",
          score: 7,
          description: "약한 서브가 유일한 단점.",
        },
      ],
      growthStory: `
                <p>독일 브레멘에서 태어났지만 폴란드 혈통입니다. 슈테피 그라프를 동경하며 자랐고, 늦은 나이에 전성기를 맞이한 대기만성형 스타입니다.</p>
            `,
      signatureMatch: {
        title: "2016 호주 오픈 결승 vs 세레나 윌리엄스",
        date: "2016. 01. 30",
        description:
          "생애 첫 그랜드슬램 결승에서 당시 무적이었던 세레나를 꺾는 대이변을 연출했습니다. 끈질긴 수비와 과감한 드롭샷으로 세레나를 좌절시켰습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👋 "아름다운 이별"</div>
                    <p>2024 파리 올림픽 8강전에서 정친원과 3시간이 넘는 혈투 끝에 패배하며 은퇴했습니다. 끝까지 포기하지 않는 모습은 팬들에게 깊은 울림을 주었습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"화려한 라스트 댄스"</strong></p>
                <p>출산 후 복귀하여 2024년 유나이티드 컵 우승을 이끌고 올림픽 8강에 오르는 등 마지막까지 정상급 기량을 보여주었습니다.</p>
            `,
      faq: [
        {
          question: "완전히 은퇴했나요?",
          answer:
            "네, 2024 파리 올림픽을 마지막으로 프로 무대에서 은퇴를 선언했습니다. 이제는 엄마로서의 삶과 새로운 도전에 집중할 예정이라고 합니다.",
        },
        {
          question: "왜 왼손잡이인가요?",
          answer:
            "원래는 오른손잡이인데 테니스만 왼손으로 칩니다. 어릴 때 코치의 권유로 바꿨다고 합니다.",
        },
        {
          question: "폴란드와 관련이 있나요?",
          answer:
            '네, 할아버지가 폴란드에 지은 테니스 센터("Angie Kerber Academy")가 있으며, 폴란드에서 훈련하는 것을 좋아했습니다.',
        },
      ],
    },
  },
  "elina-svitolina": {
    image: "/images/players/elina-svitolina.png",
    name: "엘리나 스비톨리나",
    nameEn: "Elina Svitolina",
    country: "Ukraine",
    countryFlag: "🇺🇦",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "우크라이나의 정신적 지주. 출산 후 복귀하여 윔블던 4강에 오르는 등 제2의 전성기를 보내고 있으며, 빠른 발과 안정적인 스트로크가 강점입니다.",
    detailedProfile: {
      oneLineSummary:
        '전쟁의 아픔을 딛고 코트에 선 "우크라이나의 영웅", 꺾이지 않는 불굴의 정신력.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇦 "조국을 위해 뛰는 전사"</div>
                    <p>러시아의 우크라이나 침공 이후, 스비톨리나는 단순한 테니스 선수가 아닌 우크라이나의 저항 정신을 상징하는 인물이 되었습니다. 경기 수익금을 기부하고, 러시아/벨라루스 선수와의 악수를 거부하는 등 코트 안팎에서 조국을 위한 메시지를 전하고 있습니다.</p>
                </div>
                <p>출산 후 3개월 만에 훈련을 재개, 2023년 윔블던 4강에 오르며 "엄마는 강하다"는 것을 증명했습니다. 동료 선수 가엘 몽피스의 아내로도 유명합니다.</p>
            `,
      playStyle: `
                <p><strong>"빠른 발을 가진 카운터 펀처"</strong></p>
                <p>엄청난 스피드로 코트를 누비며 모든 공을 받아냅니다. 안정적인 스트로크를 바탕으로 상대의 실수를 유발하는 플레이를 선호합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 스비톨리나의 3가지 "무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>풋워크:</strong> 투어에서 가장 빠른 발을 가진 선수 중 하나입니다. 수비 범위가 넓어 상대가 위너를 치기 어렵게 만듭니다.</li>
                        <li><strong>백핸드:</strong> 다운더라인 백핸드는 그녀의 가장 강력한 공격 옵션입니다.</li>
                        <li><strong>리턴:</strong> 상대의 서브를 안정적으로 받아넘겨 랠리 주도권을 가져옵니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "이동 (Movement)",
          score: 10,
          description: "코트 커버 능력 최상.",
        },
        { name: "수비 (Defense)", score: 9.5, description: "끈질긴 수비." },
        {
          name: "멘탈 (Mental)",
          score: 9.5,
          description: "조국을 위한 사명감.",
        },
        {
          name: "안정성 (Consistency)",
          score: 9,
          description: "기복 없는 플레이.",
        },
        { name: "백핸드 (Backhand)", score: 8.5, description: "주 득점원." },
        { name: "파워 (Power)", score: 7, description: "결정력은 다소 부족." },
      ],
      growthStory: `
                <p>우크라이나 오데사 출신입니다. 어릴 때부터 재능을 인정받았으며, 꾸준히 랭킹을 올려 세계 3위까지 기록했습니다. 메이저 우승은 없지만 WTA 파이널스 우승(2018) 경험이 있습니다.</p>
            `,
      signatureMatch: {
        title: "2023 윔블던 8강 vs 이가 시비옹테크",
        date: "2023. 07. 11",
        description:
          "와일드카드로 출전해 세계 1위 시비옹테크를 꺾는 파란을 일으켰습니다. 출산 9개월 만에 이룬 쾌거에 전 세계가 감동했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💑 "테니스 커플"</div>
                    <p>프랑스의 가엘 몽피스와 결혼하여 딸 'Skai'를 낳았습니다. 두 사람의 SNS(G.E.M.S Life)는 팬들에게 큰 인기를 끌고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"제2의 전성기"</strong></p>
                <p>엄마가 된 후 멘탈이 더 강해졌다는 평가를 받습니다. 부상 관리만 잘한다면 메이저 우승도 노려볼 만한 기량을 보여주고 있습니다.</p>
            `,
      faq: [
        {
          question: "왜 악수를 안 하나요?",
          answer:
            "조국 우크라이나를 침공한 러시아와 그 조력국인 벨라루스 선수와는 악수하지 않겠다는 원칙을 지키고 있습니다. 이는 개인적인 감정이 아닌 국가적인 입장을 대변하는 행동입니다.",
        },
        {
          question: "남편 몽피스와 복식도 하나요?",
          answer:
            "이벤트 경기 등에서 가끔 함께 뛰지만, 공식 대회 혼합 복식에는 자주 나오지 않습니다. 서로의 경기를 응원하는 모습이 자주 포착됩니다.",
        },
        {
          question: "가장 큰 목표는 무엇인가요?",
          answer:
            '그랜드슬램 우승과 우크라이나의 평화입니다. 그녀는 "우크라이나에 승리를 바치고 싶다"고 항상 말합니다.',
        },
      ],
    },
  },
  "victoria-azarenka": {
    image: "/images/players/victoria-azarenka.png",
    name: "빅토리아 아자렌카",
    nameEn: "Victoria Azarenka",
    country: "Belarus",
    countryFlag: "🇧🇾",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "하드 코트의 강자. 호주 오픈 2회 우승자로서 강력한 리턴과 베이스라인 플레이로 오랫동안 정상권을 지키고 있는 베테랑 파워 히터입니다.",
    detailedProfile: {
      oneLineSummary:
        '샤라포바의 뒤를 이은 "괴성 키드"에서 존경받는 베테랑 "슈퍼맘"으로, 호주 오픈 2회 챔피언.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👑 "하드 코트의 여왕"</div>
                    <p>2012년, 2013년 호주 오픈을 연달아 제패하며 세계 1위에 올랐던 스타입니다. 세레나 윌리엄스와의 라이벌리(비록 상대 전적은 밀리지만)는 2010년대 여자 테니스의 가장 큰 볼거리 중 하나였습니다.</p>
                </div>
                <p>양육권 분쟁 등 개인적인 아픔을 겪고도 코트로 돌아와 다시 Top 10에 진입한 강인한 어머니이자 선수입니다.</p>
            `,
      playStyle: `
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>특유의 기합 소리(Shouting)와 함께 매 샷을 강하게 때립니다. 리턴 게임 능력이 탁월하여 '브레이크 머신'으로 불립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇧🇾 비카의 3가지 "파워"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>백핸드:</strong> 투어 역사상 가장 강력한 투핸드 백핸드 중 하나로 꼽힙니다. 크로스와 다운더라인을 자유자재로 구사합니다.</li>
                        <li><strong>리턴:</strong> 베이스라인 안쪽에서 라이징 볼을 때려 상대의 서브 게임을 무력화시킵니다.</li>
                        <li><strong>투지:</strong> 불리한 상황에서도 절대 포기하지 않는 승부욕은 타의 추종을 불허합니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "리턴 (Return)",
          score: 10,
          description: "투어 최정상급 리턴 능력.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 10,
          description: "가장 믿을 수 있는 무기.",
        },
        {
          name: "멘탈 (Mental)",
          score: 9,
          description: "산전수전 다 겪은 베테랑의 노련함.",
        },
        {
          name: "파워 (Power)",
          score: 9,
          description: "여전히 강력한 스트로크.",
        },
        {
          name: "체력 (Stamina)",
          score: 8,
          description: "나이가 들었지만 관리가 잘됨.",
        },
        {
          name: "서브 (Serve)",
          score: 7.5,
          description: "더블 폴트 기복이 있음.",
        },
      ],
      growthStory: `
                <p>벨라루스 민스크 출신입니다. 15세 때 미국으로 건너가 훈련했습니다. 2005년 프로 데뷔 후 빠르게 성장하여 2012년 세계 1위에 등극했습니다.</p>
            `,
      signatureMatch: {
        title: "2013 호주 오픈 결승 vs 리나",
        date: "2013. 01. 26",
        description:
          "리나와의 혈투 끝에 우승을 차지하며 호주 오픈 2연패를 달성했습니다. 부상 타임아웃 논란 등 우여곡절이 있었지만 실력으로 잠재웠던 대회입니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👦 "아들 바보"</div>
                    <p>아들 레오(Leo)와 함께 투어를 다니는 모습으로 유명합니다. 경기 후 인터뷰에서 아들 이야기를 할 때 가장 환하게 웃습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"롱런하는 레전드"</strong></p>
                <p>30대 중반의 나이에도 2024년 마이애미 오픈 4강에 오르는 등 여전한 경쟁력을 보여주고 있습니다. 특히 하드 코트에서는 언제든 우승 후보입니다.</p>
            `,
      faq: [
        {
          question: "기합 소리가 왜 큰가요?",
          answer:
            "어릴 때부터 호흡을 내뱉으며 힘을 쓰는 습관이 들어서 그렇습니다. 샤라포바와 함께 가장 큰 기합 소리를 내는 선수로 유명했습니다.",
        },
        {
          question: "샤라포바와 라이벌인가요?",
          answer:
            "같은 동구권 출신에 금발, 기합 소리 등 공통점이 많아 자주 비교되었습니다. 둘 사이의 신경전도 꽤 치열했습니다.",
        },
        {
          question: "은퇴 계획이 있나요?",
          answer:
            '아직 구체적인 계획은 밝히지 않았습니다. "아들이 내가 경기하는 모습을 기억할 때까지 뛰고 싶다"고 말한 바 있습니다.',
        },
      ],
    },
  },
  "karolina-pliskova": {
    image: "/images/players/karolina-pliskova.png",
    name: "카롤리나 플리스코바",
    nameEn: "Karolina Pliskova",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "서브 퀸. 투어에서 가장 많은 에이스를 기록하는 선수 중 한 명으로, 큰 키에서 내리꽂는 서브와 강력한 플랫 스트로크가 주무기입니다.",
    detailedProfile: {
      oneLineSummary:
        'WTA 투어의 "에이스 머신", 시크한 표정으로 펑펑 터뜨리는 강서브와 플랫 샷.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🚀 "서브 퀸 (Ace Queen)"</div>
                    <p>WTA 투어에서 해마다 에이스 개수 1위를 다투는 최고의 서버입니다. 186cm의 장신에서 뿜어져 나오는 서브는 남자 선수 못지않은 위력을 가집니다. 세계 랭킹 1위까지 올랐으나 아직 그랜드슬램 우승이 없어 '무관의 제왕'이라는 꼬리표를 떼는 것이 목표입니다.</p>
                </div>
                <p>경기 중 감정 변화가 거의 없어 '얼음공주(Ice Princess)'라고도 불립니다.</p>
            `,
      playStyle: `
                <p><strong>"빅 서버 + 원투 펀치"</strong></p>
                <p>긴 랠리보다는 짧고 굵은 승부를 선호합니다. 강력한 서브와 이어진 포핸드 결정구로 포인트를 끝냅니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇿 플리스코바의 3가지 "무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>서브:</strong> 그녀의 알파이자 오메가. 퍼스트 서브 성공률이 높은 날은 브레이크가 거의 불가능합니다.</li>
                        <li><strong>플랫 스트로크:</strong> 회전이 거의 없는 플랫성 타구는 낮고 빠르게 깔려 상대가 타이밍을 맞추기 어렵습니다.</li>
                        <li><strong>냉정함:</strong> 어떤 상황에서도 당황하지 않고 자신의 플레이를 유지하는 포커페이스가 강점입니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        { name: "서브 (Serve)", score: 10, description: "WTA 최고 수준." },
        { name: "파워 (Power)", score: 9.5, description: "플랫 샷의 묵직함." },
        { name: "멘탈 (Mental)", score: 9, description: "감정 기복이 적음." },
        { name: "포핸드 (Forehand)", score: 9, description: "강력한 결정구." },
        {
          name: "이동 (Movement)",
          score: 6.5,
          description: "큰 키로 인해 움직임이 둔한 편.",
        },
        { name: "수비 (Defense)", score: 6, description: "수비보다는 공격." },
      ],
      growthStory: `
                <p>체코 로우니 출신으로, 쌍둥이 언니 크리스티나 플리스코바와 함께 자매 테니스 선수로 유명합니다. 2016년 US 오픈 준우승을 차지하며 세계적인 선수로 도약했습니다.</p>
            `,
      signatureMatch: {
        title: "2016 US 오픈 4강 vs 세레나 윌리엄스",
        date: "2016. 09. 08",
        description:
          "당시 세계 1위 세레나를 2-0으로 완파하는 파란을 일으키며 생애 첫 메이저 결승에 진출했습니다. 그녀의 서브와 포핸드가 빛을 발한 경기였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👯‍♀️ "쌍둥이 자매"</div>
                    <p>언니 크리스티나도 투어 선수(왼손잡이)라, 자매가 복식조를 이뤄 출전하기도 합니다. 문신 위치로 두 사람을 구분한다고 합니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"재기를 노리는 베테랑"</strong></p>
                <p>2024년 트란실바니아 오픈 우승으로 4년 만에 투어 타이틀을 추가하며 부활의 신호탄을 쏘아 올렸습니다. 여전히 서브는 위력적입니다.</p>
            `,
      faq: [
        {
          question: "언니와 헷갈리지 않나요?",
          answer:
            "매우 닮았지만, 카롤리나는 오른손잡이, 크리스티나는 왼손잡이라 라켓 든 손을 보면 알 수 있습니다. 문신 위치도 다릅니다.",
        },
        {
          question: "왜 그랜드슬램 우승이 없나요?",
          answer:
            "결승에 2번(2016 US 오픈, 2021 윔블던) 진출했지만 아쉽게 준우승에 머물렀습니다. 발이 느린 약점이 큰 무대에서 발목을 잡곤 했습니다.",
        },
        {
          question: "별명은 무엇인가요?",
          answer:
            '"Plisko"라고 불리며, 에이스를 많이 터뜨려 "Ace Queen"이라는 호칭도 가지고 있습니다.',
        },
      ],
    },
  },
  "sloane-stephens": {
    image: "/images/players/sloane-stephens.png",
    name: "슬론 스티븐스",
    nameEn: "Sloane Stephens",
    country: "United States",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "2017 US 오픈 챔피언. 부드러운 움직임과 강력한 포핸드, 그리고 뛰어난 수비력을 겸비한 올라운드 플레이어입니다.",
    detailedProfile: {
      oneLineSummary:
        '물 흐르듯 유연한 움직임과 강력한 포핸드, 미국의 자존심 "슬론".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇸 "US 오픈의 여왕"</div>
                    <p>2017년 발 부상에서 복귀한 지 두 달 만에, 랭킹 83위로 US 오픈 우승을 차지하는 기적을 썼습니다. 당시 4강에서 비너스 윌리엄스를, 결승에서 매디슨 키스를 꺾었습니다. 엄청난 운동신경과 유연함을 바탕으로 '힘 안 들이고 치는 듯한' 부드러운 스윙이 특징입니다.</p>
                </div>
                <p>미국 축구 국가대표 조지 알티도어와 결혼한 '스포츠 스타 커플'로도 유명합니다.</p>
            `,
      playStyle: `
                <p><strong>"카운터 펀처 + 올라운더"</strong></p>
                <p>스티븐스의 테니스는 '우아함'입니다. 무리해서 공격하기보다는, 부드러운 풋워크로 코트를 커버하다가 기회가 오면 강력한 포핸드로 끝냅니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">💃 슬론의 3가지 "리듬"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>움직임:</strong> 코트 위를 미끄러지듯 이동하는 그녀의 풋워크는 투어 최고 수준입니다.</li>
                        <li><strong>포핸드:</strong> 백스윙이 크지만 임팩트 순간의 가속력이 엄청나 위력적인 탑스핀을 만들어냅니다.</li>
                        <li><strong>수비:</strong> 웬만한 공은 다 받아넘기는 '늪 테니스'를 구사할 수 있습니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "이동 (Movement)",
          score: 10,
          description: "가장 우아하고 빠른 발.",
        },
        { name: "포핸드 (Forehand)", score: 9.5, description: "주 득점원." },
        { name: "수비 (Defense)", score: 9.5, description: "철벽 수비." },
        {
          name: "멘탈 (Mental)",
          score: 7,
          description: "기복이 심하고 의욕 없어 보일 때가 있음.",
        },
        { name: "서브 (Serve)", score: 7.5, description: "평범함." },
        { name: "네트 플레이 (Net)", score: 8, description: "감각이 좋음." },
      ],
      growthStory: `
                <p>미국 플로리다 출신으로, NFL 선수 출신 아버지와 수영 선수 출신 어머니의 유전자를 물려받았습니다. 2013년 호주 오픈 4강에 오르며 혜성처럼 등장했습니다.</p>
            `,
      signatureMatch: {
        title: "2017 US 오픈 결승 vs 매디슨 키스",
        date: "2017. 09. 09",
        description:
          "절친 매디슨 키스를 상대로 단 6개의 에러(키스는 30개)만 기록하는 완벽한 경기력으로 2-0 완승을 거뒀습니다. 그녀의 수비력과 침착함이 돋보인 경기였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎤 "솔직한 입담"</div>
                    <p>인터뷰에서 거침없고 유머러스한 입담을 자랑합니다. 경기 중 보여주는 다양한 표정 변화(Face emotion)도 팬들에게 즐거움을 줍니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"클레이 강자"</strong></p>
                <p>최근에는 클레이 코트에서 좋은 성적을 내고 있습니다. 2024년 루앙 오픈 우승으로 여전한 실력을 증명했습니다.</p>
            `,
      faq: [
        {
          question: "왜 기복이 심한가요?",
          answer:
            "동기 부여가 잘 안 될 때는 무기력한 모습을 보이기도 합니다. 하지만 큰 무대나 중요한 경기에서는 집중력을 발휘합니다.",
        },
        {
          question: "가족이 스포츠 선수인가요?",
          answer:
            "네, 아버지는 NFL 러닝백 존 스티븐스였고, 남편은 미국 축구 국가대표 공격수 조지 알티도어입니다.",
        },
        {
          question: "재단 활동을 하나요?",
          answer:
            '"Sloane Stephens Foundation"을 설립해 빈곤층 아동들의 교육과 테니스를 지원하고 있습니다.',
        },
      ],
    },
  },
  "madison-keys": {
    image: "/images/players/madison-keys.png",
    name: "매디슨 키스",
    nameEn: "Madison Keys",
    country: "United States",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "WTA 투어 최고의 파워 히터 중 한 명. 묵직한 서브와 포핸드로 상대를 힘으로 압박하는 공격적인 스타일을 구사합니다.",
    detailedProfile: {
      faq: [
        {
          question: "매디슨 키스 선수의 플레이 스타일은 어떤가요?",
          answer:
            "매디슨 키스 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "매디슨 키스 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "매디슨 키스 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "매디슨 키스 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        'WTA 최고 수준의 "헤비볼 히터", 들어가는 날은 아무도 막을 수 없는 파괴력.',
      whyNotable: `
                <p><strong>"가장 묵직한 공을 치는 선수"</strong></p>
                <p>매디슨 키스의 샷은 단순한 스피드를 넘어 '무게감'이 다릅니다. 남자 선수들에 버금가는 샷 평속을 기록할 정도로 압도적인 파워를 자랑합니다. 2017 US 오픈 결승에 오르며 미국 여자 테니스의 중심축으로 자리 잡았습니다.</p>
                <p>코트 밖에서는 동료 선수들을 살뜰히 챙기고 자선 활동에 앞장서는 따뜻한 리더십의 소유자입니다.</p>
            `,
      playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>복잡한 전술보다는 압도적인 힘으로 밀어붙이는 스타일입니다. 서브와 포핸드 한 방으로 포인트를 끝내는 것을 선호합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 그녀의 트레이드마크. 엄청난 스윙 스피드에서 나오는 포핸드 위너는 총알같이 빠릅니다.</li>
                    <li><strong>서브:</strong> 킥 서브와 플랫 서브 모두 강력하며, 서브 게임을 쉽게 지키는 편입니다.</li>
                    <li><strong>잔디 코트:</strong> 낮게 깔리는 빠른 공을 좋아해 잔디 코트에서 특히 강합니다(이스트본 2회 우승).</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "파워 (Power)",
          score: 10,
          description: "투어에서 가장 무거운 공을 침.",
        },
        { name: "서브 (Serve)", score: 9.5, description: "강력한 서브권." },
        {
          name: "포핸드 (Forehand)",
          score: 9.5,
          description: "결정력만큼은 최상급.",
        },
        {
          name: "안정성 (Consistency)",
          score: 6,
          description: "홈런(에러)이 많은 편.",
        },
        {
          name: "움직임 (Movement)",
          score: 7,
          description: "직선 움직임은 좋으나 좌우 수비는 약함.",
        },
        {
          name: "멘탈 (Mental)",
          score: 8,
          description: "긍정적이지만 중요할 때 흔들림.",
        },
      ],
      growthStory: `
                <p>어릴 때부터 '천재 소녀'로 불리며 14세에 프로에 데뷔했습니다. 린제이 데이븐포트 등 레전드들의 지도를 받으며 성장했습니다.</p>
                <p>2017년 US 오픈 준우승으로 잠재력을 폭발시켰고, 모든 그랜드슬램 대회에서 4강 이상의 성적을 거둔 몇 안 되는 선수 중 하나입니다.</p>
            `,
      signatureMatch: {
        title: "2023 US 오픈 8강 vs 마르케타 본드로우소바",
        date: "2023. 09. 06",
        description:
          "홈 팬들 앞에서 윔블던 챔피언 본드로우소바를 2-0으로 완파한 경기. 강력한 파워로 상대의 수비벽을 완전히 무너뜨리며 4강 진출에 성공했습니다.",
      },
      recentForm: `
                <p><strong>"여전한 우승 후보"</strong></p>
                <p>투어 생활 10년이 넘은 베테랑이 되었지만 파워는 여전합니다. 2024년 스트라스부르, 이스트본 등에서 우승 및 4강에 오르며 꾸준함을 과시하고 있습니다.</p>
            `,
    },
  },
  "daria-kasatkina": {
    image: "/images/players/daria-kasatkina.png",
    name: "다리아 카사트키나",
    nameEn: "Daria Kasatkina",
    country: "Russia",
    countryFlag: "🇷🇺",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "코트 위의 예술가. 파워보다는 다양한 스핀과 각도, 창의적인 샷 메이킹으로 승부하는 지능적인 플레이어입니다.",
    detailedProfile: {
      faq: [
        {
          question: "다리아 카사트키나 선수의 플레이 스타일은 어떤가요?",
          answer:
            "다리아 카사트키나 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "다리아 카사트키나 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "다리아 카사트키나 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "다리아 카사트키나 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        '파워 테니스 시대의 "반란군", 현란한 스핀과 전술로 상대를 무너뜨리는 테크니션.',
      whyNotable: `
                <p><strong>"코트 안팎의 진정한 자유로운 영혼"</strong></p>
                <p>다리아 카사트키나는 힘으로만 승부하는 현대 테니스에서 독보적인 '다양성'을 보여주는 선수입니다. 특히 인기 테니스 브이로그 'What The Vlog'를 운영하며 투어 생활의 비하인드 스토리를 팬들에게 솔직하게 공개해 큰 사랑을 받고 있습니다.</p>
                <p>또한 쉽지 않은 상황에서도 자신의 정체성과 목소리를 당당하게 내는 용기 있는 선수로 존경받고 있습니다.</p>
            `,
      playStyle: `
                <p><strong>"지능형 카운터 펀처 + 스핀 마스터"</strong></p>
                <p>파워는 약하지만, 남자 선수급의 회전량을 가진 포핸드와 정교한 슬라이스, 드롭샷으로 상대를 요리합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 라파엘 나달을 연상시키는 헤비 탑스핀 포핸드를 구사합니다. 공이 높게 튀어 올라 상대의 타점을 흔듭니다.</li>
                    <li><strong>점프 백핸드:</strong> 리턴이나 수비 상황에서 껑충 뛰어오르며 치는 백핸드 샷은 그녀의 시그니처입니다.</li>
                    <li><strong>전술:</strong> 상대의 약점을 파고드는 집요함과 코트의 길목을 차단하는 센수가 탁월합니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "다양성 (Variety)",
          score: 10,
          description: "타의 추종을 불허하는 샷 셀렉션.",
        },
        { name: "스핀 (Spin)", score: 10, description: "엄청난 RPM의 포핸드." },
        {
          name: "센스 (IQ)",
          score: 9.5,
          description: "상대의 수를 읽는 능력이 뛰어남.",
        },
        {
          name: "스피드 (Speed)",
          score: 9,
          description: "클레이 코트에서의 움직임이 특히 좋음.",
        },
        {
          name: "파워 (Power)",
          score: 5,
          description: "서브와 스트로크 파워는 약한 편.",
        },
        {
          name: "서브 (Serve)",
          score: 5,
          description: "느린 서브가 최대 약점.",
        },
      ],
      growthStory: `
                <p>러시아 톨리아티 출신으로, 형의 권유로 테니스를 시작했습니다. 2014년 프랑스 오픈 주니어 우승을 차지하며 유망주로 떠올랐습니다.</p>
                <p>성인 무대에서도 2018년 인디언 웰스 준우승, 2022년 프랑스 오픈 4강에 오르며 꾸준히 상위권을 유지하고 있습니다.</p>
            `,
      signatureMatch: {
        title: "2018 인디언 웰스 4강 vs 비너스 윌리엄스",
        date: "2018. 03. 17",
        description:
          "전설 비너스를 상대로 명승부를 펼쳤습니다. 3세트 타이브레이크 접전 끝에 승리하며, 파워 히터를 상대로 어떻게 싸워야 하는지를 보여준 교과서적인 경기였습니다.",
      },
      recentForm: `
                <p><strong>"꾸준함의 힘"</strong></p>
                <p>2024년에도 여러 대회에서 결승에 오르며 Top 15 안팎의 랭킹을 유지하고 있습니다. 특히 잔디와 하드 코트에서도 결승에 진출하며 '올라운더'로서의 면모를 과시하고 있습니다.</p>
            `,
    },
  },
  "beatriz-haddad-maia": {
    image: "/images/players/beatriz-haddad-maia.png",
    name: "베아트리스 하다드 마이아",
    nameEn: "Beatriz Haddad Maia",
    country: "Brazil",
    countryFlag: "🇧🇷",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "남미 여자 테니스의 자존심. 왼손잡이 특유의 까다로운 서브와 강력한 포핸드, 그리고 매 포인트 최선을 다하는 파이팅이 돋보입니다.",
    detailedProfile: {
      oneLineSummary:
        '브라질의 열정을 품은 왼손잡이 파워 히터, 도핑 징계를 딛고 일어선 "불굴의 오뚝이".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇧🇷 "남미의 여왕"</div>
                    <p>마리아 부에노 이후 브라질 여자 테니스 역사상 최고의 선수입니다. 2023년 프랑스 오픈 4강에 진출하며 브라질 테니스의 르네상스를 알렸습니다. 185cm의 큰 키와 왼손잡이라는 이점, 그리고 남미 특유의 열정적인 플레이로 팬들을 사로잡습니다.</p>
                </div>
                <p>도핑 양성 반응(보충제 오염 주장)으로 10개월 자격 정지를 당해 랭킹이 소멸되었으나, 밑바닥부터 다시 시작해 Top 10까지 올라온 인간 승리의 주인공입니다.</p>
            `,
      playStyle: `
                <p><strong>"공격적인 왼손잡이 베이스라이너"</strong></p>
                <p>나달을 연상시키는 헤비 탑스핀 포핸드와 강력한 서브가 주무기입니다. 리듬을 타면 멈출 수 없는 폭발력을 가졌습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 비아의 3가지 "열정"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>왼손 포핸드:</strong> 코트 밖으로 빠져나가는 궤적의 포핸드는 상대가 수비하기 매우 까다롭습니다.</li>
                        <li><strong>서브:</strong> 큰 키에서 나오는 왼손 슬라이스 서브는 중요한 순간 득점원입니다.</li>
                        <li><strong>파이팅:</strong> 경기 내내 "Vamos!"를 외치며 스스로를 독려하고 상대를 압박합니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        { name: "파워 (Power)", score: 9.5, description: "묵직한 스트로크." },
        { name: "서브 (Serve)", score: 9, description: "왼손 이점 활용." },
        {
          name: "멘탈 (Mental)",
          score: 9,
          description: "어려움을 극복한 내공.",
        },
        { name: "포핸드 (Forehand)", score: 9, description: "강력한 무기." },
        {
          name: "이동 (Movement)",
          score: 7.5,
          description: "키에 비해 민첩함.",
        },
        {
          name: "네트 (Net)",
          score: 8,
          description: "복식 경험으로 발리도 좋음.",
        },
      ],
      growthStory: `
                <p>브라질 상파울루 출신입니다. 어머니와 할머니 모두 테니스 선수였던 테니스 집안입니다. 2019년 도핑 징계라는 시련을 겪었지만, 2022년 영국 잔디 시즌 2연속 우승(노팅엄, 버밍엄)으로 화려하게 부활했습니다.</p>
            `,
      signatureMatch: {
        title: "2023 프랑스 오픈 4강 진출",
        date: "2023. 06. 07",
        description:
          '개막전부터 4강까지 4경기 연속 3세트 접전을 펼치며 "철의 여인"임을 증명했습니다. 8강에서 온스 자베르를 꺾고 브라질 여자 선수로는 1968년 이후 처음으로 메이저 4강에 올랐습니다.',
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📢 "최고의 응원단"</div>
                    <p>그녀가 가는 곳마다 노란 유니폼을 입은 브라질 팬들이 몰려와 축구장을 방불케 하는 응원전을 펼칩니다. 하다드 마이아는 그 에너지의 원천입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 10 안착"</strong></p>
                <p>단식뿐만 아니라 복식에서도 좋은 성적을 내며 다재다능함을 뽐내고 있습니다. 하드, 클레이, 잔디 모든 코트에서 경쟁력이 있습니다.</p>
            `,
      faq: [
        {
          question: "도핑 징계는 어떻게 된 건가요?",
          answer:
            "오염된 비타민 보충제를 섭취한 것이 인정되어 징계가 감경되었습니다. 억울할 수 있는 상황이었지만 변명 없이 징계를 받아들이고 다시 일어섰습니다.",
        },
        {
          question: "왜 왼손잡이인가요?",
          answer:
            "원래 왼손잡이입니다. 여자 테니스에서 장신 왼손잡이는 매우 드물고 강력한 무기입니다.",
        },
        {
          question: "별명은 무엇인가요?",
          answer: '브라질에서는 "Bia(비아)"라는 애칭으로 불립니다.',
        },
      ],
    },
  },
  "danielle-collins": {
    image: "/images/players/danielle-collins.png",
    name: "다니엘 콜린스",
    nameEn: "Danielle Collins",
    country: "United States",
    countryFlag: "🇺🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "Danimal. 엄청난 승부욕과 공격적인 베이스라인 플레이로 2022 호주 오픈 준우승을 차지했습니다. 2024년을 끝으로 은퇴를 예고한 그녀의 마지막 불꽃을 주목하세요.",
    detailedProfile: {
      oneLineSummary:
        '코트를 찢을 듯한 포효와 파워, 은퇴를 앞두고 불타오르는 "Danimal".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 "Danimal (다니말)"</div>
                    <p>Danielle + Animal의 합성어로, 코트 위에서 야수처럼 포효하고 싸운다고 해서 붙여진 별명입니다. 대학 테니스(NCAA) 챔피언 출신으로 프로에 늦게 데뷔했지만, 2022년 호주 오픈 준우승까지 오르며 성공 신화를 썼습니다.</p>
                </div>
                <p>2024년 시즌을 끝으로 은퇴하겠다고 선언한 후, 마이애미 오픈 우승 등 믿을 수 없는 성적을 거두며 "은퇴 번복해라"는 팬들의 성원을 받고 있습니다.</p>
            `,
      playStyle: `
                <p><strong>"초공격적 베이스라이너 (Aggressive Ball Striker)"</strong></p>
                <p>콜린스의 테니스에 '후퇴'는 없습니다. 어떤 공이 와도 물러서지 않고 라이징 볼을 강타해 위너를 만들어냅니다. 특히 백핸드 파워는 투어 최정상급입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇸 콜린스의 3가지 "맹공"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>백핸드:</strong> 그녀의 가장 강력한 무기. 크로스 앵글이 깊고 빠릅니다.</li>
                        <li><strong>리턴:</strong> 상대의 세컨드 서브는 무조건 공격 대상입니다.</li>
                        <li><strong>포효:</strong> "Come On!"을 외치며 상대의 기선을 제압하고 자신의 에너지를 끌어올립니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "파워 (Power)",
          score: 10,
          description: "남자 선수급의 임팩트.",
        },
        {
          name: "공격성 (Aggression)",
          score: 10,
          description: "닥공(닥치고 공격).",
        },
        {
          name: "멘탈 (Mental)",
          score: 9.5,
          description: "불타오르는 승부욕.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 10,
          description: "투어 최고의 백핸드 중 하나.",
        },
        { name: "서브 (Serve)", score: 8, description: "준수함." },
        {
          name: "수비 (Defense)",
          score: 7,
          description: "수비보다는 맞불 작전.",
        },
      ],
      growthStory: `
                <p>미국 플로리다 출신입니다. 바로 프로에 가지 않고 버지니아 대학교(UVA)에 진학해 NCAA 단식 2회 우승을 차지했습니다. 대학 졸업 후 프로에 데뷔한 특이한 케이스입니다.</p>
            `,
      signatureMatch: {
        title: "2024 마이애미 오픈 결승 vs 엘레나 리바키나",
        date: "2024. 03. 31",
        description:
          "은퇴 시즌에 홈에서 열린 마스터스 대회 우승. 리바키나를 상대로 기적 같은 2-0 승리를 거두며 생애 첫 WTA 1000 타이틀을 획득했습니다. 그녀의 커리어 최고의 순간이었습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🗣️ "사이다 발언"</div>
                    <p>인터뷰나 경기 중에 할 말은 하는 성격입니다. 심판이나 상대 선수에게도 거침없이 자신의 의견을 표현하는 '걸크러시' 매력이 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"가장 아름다운 은퇴 투어"</strong></p>
                <p>은퇴를 앞두고 부담감을 내려놓아서인지 최고의 기량을 보여주고 있습니다. "지금이 내 인생 최고의 테니스"라고 말할 정도입니다.</p>
            `,
      faq: [
        {
          question: "정말 은퇴하나요?",
          answer:
            "네, 류마티스 관절염과 자궁내막증 등 건강 문제로 가족을 꾸리고 싶어 2024년을 끝으로 은퇴한다고 밝혔습니다. 팬들은 아쉬워하고 있습니다.",
        },
        {
          question: "대학 출신이 왜 드문가요?",
          answer:
            "보통 테니스 선수들은 10대 때 프로에 데뷔합니다. 대학을 마치고 Top 10까지 간 경우는 매우 드문 성공 사례입니다.",
        },
        {
          question: "별명이 왜 Danimal인가요?",
          answer:
            "Danielle과 Animal을 합친 말로, 코트 위에서의 야수 같은 본능적인 플레이 스타일 때문에 붙여졌습니다. 본인도 이 별명을 좋아합니다.",
        },
      ],
    },
  },
  "barbora-krejcikova": {
    image: "/images/players/barbora-krejcikova.png",
    name: "바르보라 크레이치코바",
    nameEn: "Barbora Krejcikova",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "단식과 복식을 모두 제패한 진정한 챔피언. 2021 롤랑가로스, 2024 윔블던 단식 우승자이자 골든 슬래머로, 우아하고 기술적인 플레이가 일품입니다.",
    detailedProfile: {
      oneLineSummary:
        '단식과 복식을 모두 정복한 "토탈 패키지", 롤랑가로스와 윔블던의 여왕.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "단/복식 모두 전설"</div>
                    <p>현역 선수 중 드물게 단식과 복식 모두에서 세계 1위와 그랜드슬램 우승을 경험한 선수입니다. 2021년 프랑스 오픈(클레이)과 2024년 윔블던(잔디) 단식 우승으로 코트를 가리지 않는 실력을 증명했습니다. 1998년 윔블던 챔피언 야나 노보트나의 제자로도 유명합니다.</p>
                </div>
                <p>복잡한 기술 없이 우아하고 클래식한 폼으로 테니스를 쳐서 "테니스의 정석"을 보여주는 선수입니다.</p>
            `,
      playStyle: `
                <p><strong>"클래식 올라운더 (Classic All-Rounder)"</strong></p>
                <p>크레이치코바의 테니스는 '부드러움'입니다. 힘들이지 않고 타이밍과 코스 선택만으로 상대를 제압합니다. 복식 세계 1위다운 네트 플레이가 일품입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇿 바르보라의 3가지 "우아함"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>다양성:</strong> 슬라이스, 드롭샷, 로브, 발리 등 테니스의 모든 기술을 완벽하게 구사합니다.</li>
                        <li><strong>전술:</strong> 상대의 위치를 보고 빈 곳으로 공을 보내는 전술적 움직임이 탁월합니다.</li>
                        <li><strong>멘탈:</strong> 위기 상황에서도 표정 변화 없이 침착하게 자신의 플레이를 합니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "기술 (Technique)",
          score: 10,
          description: "완벽한 폼과 테크닉.",
        },
        {
          name: "네트 (Net)",
          score: 10,
          description: "복식 레전드다운 발리 실력.",
        },
        { name: "전술 (Tactics)", score: 10, description: "코트의 사령관." },
        { name: "멘탈 (Mental)", score: 9.5, description: "강철 같은 심장." },
        { name: "서브 (Serve)", score: 8.5, description: "코스가 좋음." },
        {
          name: "파워 (Power)",
          score: 8,
          description: "파워 히터는 아니지만 충분히 강함.",
        },
      ],
      growthStory: `
                <p>체코 브르노 출신입니다. 주니어 시절 세계 3위까지 올랐으나, 성인 무대에서는 복식 전문 선수로 먼저 이름을 알렸습니다. 늦은 나이에 단식에 집중하며 잠재력을 폭발시켰습니다.</p>
            `,
      signatureMatch: {
        title: "2024 윔블던 결승 vs 자스민 파올리니",
        date: "2024. 07. 13",
        description:
          "모두의 예상을 깨고 결승에 진출, 파올리니를 2-1로 꺾고 생애 두 번째 메이저 단식 우승을 차지했습니다. 우승 후 하늘에 계신 스승 야나 노보트나를 향해 트로피를 들어 올린 장면은 감동적이었습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🕯️ "스승을 향한 헌사"</div>
                    <p>암으로 세상을 떠난 스승 야나 노보트나에 대한 그리움을 자주 표현합니다. 그녀의 우승은 스승과의 약속을 지키기 위한 여정이기도 합니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"최전성기"</strong></p>
                <p>윔블던 우승으로 다시 Top 10에 복귀했습니다. 단식과 복식을 병행하는 강행군 속에서도 최고의 성과를 내고 있습니다.</p>
            `,
      faq: [
        {
          question: "단식과 복식 중 무엇이 더 중요한가요?",
          answer:
            "이제는 단식에 더 비중을 두고 있습니다. 하지만 복식 경기가 단식 경기력 향상(특히 발리, 리턴)에 큰 도움이 된다고 말합니다.",
        },
        {
          question: "야나 노보트나와 어떤 사이인가요?",
          answer:
            "주니어 시절 크레이치코바가 직접 찾아가 지도를 부탁했고, 노보트나가 세상을 떠날 때까지 멘토이자 코치로 함께했습니다.",
        },
        {
          question: "골든 슬램이 뭔가요?",
          answer:
            "4대 메이저 대회와 올림픽 금메달을 모두 따는 것을 말합니다. 크레이치코바는 복식에서 이 위업을 달성했습니다(커리어 골든 슬램).",
        },
      ],
    },
  },
  "petra-kvitova": {
    image: "/images/players/petra-kvitova.png",
    name: "페트라 크비토바",
    nameEn: "Petra Kvitova",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "윔블던 2회 우승자. 강력한 왼손 서브와 포핸드를 앞세운 시원시원한 공격 테니스의 대명사입니다. 강도 피습 사건으로 왼손 신경이 끊어지는 부상을 당했으나 기적적으로 재활에 성공했습니다.",
    detailedProfile: {
      oneLineSummary:
        '윔블던의 여왕, 강도 사고를 이겨낸 기적의 왼손잡이 "P3tra".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 "체코의 사자"</div>
                    <p>2011, 2014년 윔블던을 제패했습니다. 2016년 자택에 침입한 강도에게 칼로 왼손(주무기)을 찔려 신경이 손상되는 선수 생명 위기를 겪었습니다. 하지만 불굴의 의지로 재활하여 다시 Top 10에 복귀, 2019 호주 오픈 준우승까지 이뤄냈습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"파워 어그레시브 (Power Aggressive)"</strong></p>
                <p>빠른 잔디 코트에서 가장 위력적인 선수입니다. 3구 안에 끝내는 속전속결 스타일입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>왼손 서브:</strong> 슬라이스 서브가 밖으로 빠져나가 상대가 리턴하기 매우 어렵습니다.</li>
                    <li><strong>포핸드:</strong> 타점이 낮고 스윙이 빨라 상대가 반응하기 힘듭니다.</li>
                    <li><strong>기복:</strong> 컨디션이 좋은 날은 무적이지만, 안 좋은 날은 에러가 쏟아집니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "파워 (Power)", score: 9.5, description: "시원함." },
        { name: "서브 (Serve)", score: 9.5, description: "왼손 이점." },
        { name: "멘탈 (Mental)", score: 9, description: "인간 승리." },
        { name: "이동 (Movement)", score: 6, description: "다소 느림." },
        { name: "잔디 (Grass)", score: 10, description: "여왕." },
        { name: "안정성 (Stability)", score: 5, description: "롤러코스터." },
      ],
      growthStory: `
                <p>체코 빌로베츠 출신입니다. 아버지에게 테니스를 배웠습니다. 마르티나 나브라틸로바를 동경하며 자란 왼손잡이 소녀였습니다.</p>
            `,
      signatureMatch: {
        title: "2011 윔블던 결승 vs 마리아 샤라포바",
        date: "2011. 07. 02",
        description:
          "스타 탄생. 21세의 나이로 당대 최고 인기 스타 샤라포바를 2-0(6-3, 6-4)으로 압도하며 생애 첫 메이저 우승을 차지했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👏 "Pojd!"</div>
                    <p>득점 후 "Pojd!"(체코어로 '가자!'라는 뜻, 영어의 Come on)라고 외치는 것이 시그니처입니다. 팬들은 그녀의 시원한 플레이와 인간적인 스토리를 사랑합니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"엄마가 된 챔피언"</strong></p>
                <p>2023년 마이애미 오픈 우승으로 Top 10에 복귀하며 노익장을 과시했습니다. 2024년 초 임신 소식을 알리며 잠시 투어를 떠났으나, 복귀 의지를 밝혔습니다.</p>
            `,
      faq: [
        {
          question: "현재 근황?",
          answer:
            "2024년 여름 첫 아이를 출산하여 엄마가 되었습니다. 육아에 전념 중입니다.",
        },
      ],
    },
  },
  "belinda-bencic": {
    image: "/images/players/belinda-bencic.png",
    name: "벨린다 벤치치",
    nameEn: "Belinda Bencic",
    country: "Switzerland",
    countryFlag: "🇨🇭",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "도쿄 올림픽 금메달리스트. 빠른 타이밍에 공을 처리하여 상대의 시간을 빼앗는 플레이가 장기이며, 마르티나 힝기스를 잇는 스위스의 스타입니다.",
    detailedProfile: {
      oneLineSummary:
        '도쿄 올림픽 금메달리스트, 천재적인 타이밍으로 상대의 시간을 뺏는 "스위스 요정".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥇 "올림픽 챔피언"</div>
                    <p>2020 도쿄 올림픽에서 단식 금메달과 복식 은메달을 동시에 목에 걸며 스위스 테니스의 영웅이 되었습니다. 마르티나 힝기스와 로저 페더러의 계보를 잇는 스위스의 차세대 에이스입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"라이징 샷 메이커"</strong></p>
                <p>공이 바운드되자마자 치는 빠른 타이밍의 스트로크가 주무기입니다. 힘들이지 않고 상대의 힘을 이용해 코스를 공략하는 지능적인 플레이를 합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇭 벤치치의 3가지 "스위스 시계"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>타이밍:</strong> 다른 선수들보다 한 박자 빠르게 공을 처리하여 상대에게 준비할 시간을 주지 않습니다.</li>
                        <li><strong>백핸드 다운더라인:</strong> 그녀의 트레이드마크 샷으로, 랠리 도중 갑자기 방향을 틀어 위너를 만들어냅니다.</li>
                        <li><strong>테니스 IQ:</strong> 힝기스의 지도를 받아 코트 전체를 읽는 눈이 매우 좋습니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "타이밍 (Timing)",
          score: 10,
          description: "타의 추종을 불허함.",
        },
        { name: "전술 (Tactics)", score: 9.5, description: "똑똑한 플레이." },
        { name: "백핸드 (Backhand)", score: 9, description: "매우 날카로움." },
        {
          name: "멘탈 (Mental)",
          score: 8,
          description: "가끔 감정 기복 있음.",
        },
        { name: "파워 (Power)", score: 7.5, description: "힘보다는 기술." },
        { name: "서브 (Serve)", score: 7.5, description: "준수한 편." },
      ],
      growthStory: `
                <p>슬로바키아계 이민자 가정에서 태어났습니다. 4살 때부터 힝기스의 어머니인 멜라니 몰리터에게 지도를 받으며 '제2의 힝기스'로 키워졌습니다. 주니어 세계 1위를 거쳐 프로 무대에서도 성공적으로 안착했습니다.</p>
            `,
      signatureMatch: {
        title: "2020 도쿄 올림픽 단식 결승",
        date: "2021. 07. 31",
        description:
          "생애 최고의 순간. 마르케타 본드로소바를 2-1로 꺾고 조국 스위스에 메이저 대회 여자 단식 첫 금메달을 안겼습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😊 "미소 천사"</div>
                    <p>코트 밖에서는 항상 밝게 웃는 모습으로 팬들을 대합니다. 동료 선수들과도 두루두루 친하게 지내는 '인싸'입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"엄마가 되어 돌아온다"</strong></p>
                <p>2023년 말 임신 소식을 알리고 출산 휴가에 들어갔습니다. 2024년 4월 딸을 출산했으며, 투어 복귀를 준비하고 있습니다.</p>
            `,
      faq: [
        {
          question: "힝기스와 어떤 관계인가요?",
          answer:
            "스승과 제자이자, 절친한 언니 동생 사이입니다. 힝기스의 어머니에게 테니스를 배웠고, 힝기스와 복식 조를 이뤄 우승하기도 했습니다.",
        },
      ],
    },
  },
  "bianca-andreescu": {
    image: "/images/players/bianca-andreescu.png",
    name: "비앙카 안드레스쿠",
    nameEn: "Bianca Andreescu",
    country: "Canada",
    countryFlag: "🇨🇦",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "2019 US 오픈 챔피언. 세레나 윌리엄스를 꺾고 우승한 저력의 선수로, 강력한 파워와 다양한 구질을 섞어 쓰는 능력이 탁월합니다.",
    detailedProfile: {
      oneLineSummary:
        '10대 때 세레나를 꺾고 US 오픈을 제패한 "캐나다의 여전사", 부상을 딛고 돌아온 챔피언.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "She is the Champion"</div>
                    <p>2019년, 19세의 나이로 <strong>US 오픈 결승에서 '여제' 세레나 윌리엄스를 꺾고 우승</strong>하는 대이변을 연출했습니다. 캐나다인 최초의 그랜드슬램 단식 우승자입니다. 파워와 기술, 멘탈을 모두 갖춘 완성형 선수로 평가받습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"다재다능한 파워 히터 (Versatile Power)"</strong></p>
                <p>단순히 세게 치는 것뿐만 아니라, 문볼(높게 뜨는 공), 드롭샷, 슬라이스 등 다양한 구질을 섞어 상대를 혼란에 빠뜨립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🎭 안드레스쿠의 3가지 "무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>변칙 플레이:</strong> 강타를 때리다가 갑자기 루프성 공을 보내거나 드롭샷을 놓는 등 리듬을 자꾸 바꿉니다.</li>
                        <li><strong>강력한 포핸드:</strong> 묵직한 톱스핀이 걸린 포핸드는 그녀의 주 득점원입니다.</li>
                        <li><strong>드라마 퀸:</strong> 위기 상황에서 더욱 집중력을 발휘하여 역전승을 자주 만들어냅니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "다양성 (Variety)",
          score: 10,
          description: "모든 기술 구사 가능.",
        },
        { name: "멘탈 (Mental)", score: 9.5, description: "큰 경기에 강함." },
        { name: "파워 (Power)", score: 9, description: "묵직한 한 방." },
        { name: "포핸드 (Forehand)", score: 9, description: "강력함." },
        {
          name: "체력 (Fitness)",
          score: 6,
          description: "잦은 부상이 발목을 잡음.",
        },
        { name: "이동 (Movement)", score: 8, description: "준수함." },
      ],
      growthStory: `
                <p>루마니아 이민자 가정에서 태어났습니다. 어릴 때 루마니아에서 테니스를 시작했고, 다시 캐나다로 돌아와 본격적으로 선수 생활을 했습니다. 2019년 랭킹 150위권 밖에서 시작해 연말 Top 5까지 오르는 기적을 썼습니다.</p>
            `,
      signatureMatch: {
        title: "2019 US 오픈 결승 vs 세레나 윌리엄스",
        date: "2019. 09. 07",
        description:
          "전설을 넘어서다. 세레나의 홈인 뉴욕에서, 2만 관중의 일방적인 응원을 뚫고 2-0 완승을 거뒀습니다. 그녀의 담대한 배짱이 빛난 경기였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐶 "코코와 함께"</div>
                    <p>반려견 '코코'와 항상 함께 다닙니다. 경기장에도 데리고 올 정도로 각별한 애정을 보이며, 팬들에게도 코코는 유명 인사입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"부상과의 전쟁"</strong></p>
                <p>우승 이후 계속되는 부상으로 긴 재활을 거쳤습니다. 최근 다시 투어에 복귀하여 예전의 기량을 찾기 위해 노력하고 있습니다. 건강만 하다면 언제든 우승권에 있는 선수입니다.</p>
            `,
      faq: [
        {
          question: "명상은 왜 하나요?",
          answer:
            "경기 전이나 도중에 눈을 감고 명상을 하는 루틴이 있습니다. 멘탈 관리를 위해 시각화 훈련을 중요하게 생각한다고 합니다.",
        },
      ],
    },
  },
  "emma-raducanu-legacy": {
    image: "/images/players/emma-raducanu.png",
    name: "엠마 라두카누",
    nameEn: "Emma Raducanu",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "기적의 아이콘. 2021 US 오픈에서 예선 통과자 최초로 무실세트 우승이라는 신화를 썼습니다. 깔끔한 기술과 스타성을 겸비한 영국의 희망입니다.",
    detailedProfile: {
      faq: [
        {
          question: "엠마 라두카누 선수의 플레이 스타일은 어떤가요?",
          answer:
            "엠마 라두카누 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "엠마 라두카누 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "엠마 라두카누 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "엠마 라두카누 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary:
        '예선 통과자 신화의 주인공, 전 세계가 주목하는 "영국의 신데렐라".',
      whyNotable: `
                <p><strong>"테니스 역사상 가장 위대한 신데렐라 스토리"</strong></p>
                <p>2021년 18세의 나이로 US 오픈에 예선부터 참가해, 단 한 세트도 내주지 않고(20세트 연속 승리) 우승을 차지했습니다. 예선 통과자의 메이저 우승은 테니스 역사상 전무후무한 기록입니다. 이 우승 하나로 그녀는 단숨에 전 세계적인 슈퍼스타가 되었습니다.</p>
                <p>뛰어난 실력뿐만 아니라 지적인 인터뷰 스킬, 다문화적 배경(루마니아/중국 혼혈, 영국 국적)으로 글로벌 브랜드들의 러브콜을 받는 아이콘입니다.</p>
            `,
      playStyle: `
                <p><strong>"지능적인 베이스라이너 (Aggressive Counter Puncher)"</strong></p>
                <p>라두카누의 테니스는 '깨끗함' 그 자체입니다. 무리해서 세게 치기보다는 상대의 힘을 이용해 코스 깊숙이 찔러 넣는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>리턴:</strong> 그녀의 우승 원동력이었던 리턴 능력은 투어 최상급입니다. 베이스라인 안쪽으로 들어와 라이징 볼을 공략합니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드는 그녀의 시그니처 샷으로, 위기 상황에서 흐름을 바꿉니다.</li>
                    <li><strong>움직임:</strong> 물 흐르듯 유연한 코트 커버 능력을 갖췄습니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "기술 (Technique)",
          score: 9.5,
          description: "교과서적인 깔끔한 폼.",
        },
        {
          name: "리턴 (Return)",
          score: 9.5,
          description: "공격적인 리턴이 일품.",
        },
        {
          name: "스타성 (Star Power)",
          score: 10,
          description: "전 세계가 주목하는 흥행 보증수표.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 9,
          description: "가장 자신 있는 무기.",
        },
        {
          name: "체력 (Fitness)",
          score: 7,
          description: "잦은 부상이 발목을 잡음.",
        },
        {
          name: "서브 (Serve)",
          score: 7.5,
          description: "정확도는 좋으나 파워 보강 필요.",
        },
      ],
      growthStory: `
                <p>캐나다 토론토에서 태어나 2세 때 영국으로 이주했습니다. 학업과 운동을 병행하며 모범생으로 자랐고, 수학과 경제학 A레벨을 받을 정도로 머리가 좋습니다.</p>
                <p>2021년 윔블던 16강 진출로 가능성을 보여주더니, 곧이어 열린 US 오픈에서 테니스 역사를 새로 쓰며 여왕의 자리에 올랐습니다.</p>
            `,
      signatureMatch: {
        title: "2021 US 오픈 결승 vs 레일라 페르난데스",
        date: "2021. 09. 11",
        description:
          "10대들의 결승전으로 전 세계의 이목이 집중된 경기. 긴장되는 순간에도 침착하게 자신의 플레이를 펼치며 2-0 완승을 거뒀습니다. 우승 직후 보여준 환한 미소는 그녀의 트레이드마크가 되었습니다.",
      },
      recentForm: `
                <p><strong>"재도약을 위한 숨 고르기"</strong></p>
                <p>우승 이후 잦은 코치 교체와 손목/발목 부상 수술로 힘든 시간을 보냈습니다. 2024년 복귀 후 점차 경기 감각을 끌어올리고 있으며, 건강한 몸 상태를 유지한다면 언제든 다시 정상에 오를 수 있는 잠재력을 가졌습니다.</p>
            `,
      fanAppeal: `
                <p><strong>"테니스판 엠마 왓슨"</strong></p>
                <p>지적이고 우아한 이미지와 코트 위에서의 승부사 기질이 공존하는 반전 매력의 소유자입니다. 디올, 티파니, 포르쉐 등 럭셔리 브랜드의 앰버서더로 활동하며 패션 아이콘으로도 사랑받고 있습니다.</p>
            `,
    },
  },
  "leylah-fernandez-legacy": {
    name: "레일라 페르난데스",
    nameEn: "Leylah Fernandez",
    country: "Canada",
    countryFlag: "🇨🇦",
    image: "/images/players/leylah-fernandez.png",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "작은 고추가 맵다. 왜소한 체격에도 불구하고 빠른 발과 영리한 플레이, 그리고 지치지 않는 투지로 2021 US 오픈 준우승을 차지했습니다.",
    detailedProfile: {
      faq: [
        {
          question: "레일라 페르난데스 선수의 플레이 스타일은 어떤가요?",
          answer:
            "레일라 페르난데스 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "레일라 페르난데스 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "레일라 페르난데스 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "레일라 페르난데스 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary: '작은 거인, 코트 위의 파이터 "레일라".',
      whyNotable: `
                <p><strong>"자이언트 킬러 (Giant Killer)"</strong></p>
                <p>168cm의 단신이지만, 자신보다 훨씬 크고 힘센 선수들을 잇달아 무너뜨리는 '다윗과 골리앗'의 승부를 보여줍니다. 2021년 US 오픈 결승 진출 과정에서 오사카, 케르버, 스비톨리나, 사발렌카 등 최정상급 선수들을 연파하며 전 세계에 이름을 각인시켰습니다.</p>
                <p>관중의 호응을 유도하고 매 포인트 포효하는 엄청난 파이팅 스피릿이 트레이드마크입니다.</p>
            `,
      playStyle: `
                <p><strong>"공격적인 카운터 펀처 + 빠른 템포"</strong></p>
                <p>상대의 힘에 밀리지 않기 위해 베이스라인에 딱 붙어서 라이징 볼을 처리합니다. 박자를 뺏는 빠른 타이밍의 스트로크가 일품입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>왼손잡이 이점:</strong> 까다로운 왼손 앵글 샷과 서브로 상대를 코트 밖으로 밀어냅니다.</li>
                    <li><strong>타이밍:</strong> 공이 정점에 오르기 전에 치는 빠른 타이밍으로 상대의 준비 시간을 뺏습니다.</li>
                    <li><strong>네트 플레이:</strong> 복식 그랜드슬램 준우승 경험이 있을 정도로 발리 센스가 뛰어납니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "투지 (Fighting Spirit)",
          score: 10,
          description: "절대 포기하지 않는 악바리 근성.",
        },
        {
          name: "스피드 (Speed)",
          score: 9,
          description: "빠른 발로 코트 전체를 커버.",
        },
        {
          name: "타이밍 (Timing)",
          score: 9.5,
          description: "박자를 뺏는 탁월한 감각.",
        },
        {
          name: "멘탈 (Mental)",
          score: 9,
          description: "큰 무대에서도 주눅 들지 않음.",
        },
        {
          name: "파워 (Power)",
          score: 7,
          description: "체격적 한계로 파워는 다소 부족.",
        },
        {
          name: "서브 (Serve)",
          score: 7.5,
          description: "슬라이스 서브를 잘 활용함.",
        },
      ],
      growthStory: `
                <p>에콰도르 출신 축구 선수 아버지와 필리핀계 캐나다인 어머니 사이에서 태어났습니다. 어릴 때 '너무 작아서 테니스 선수로 성공할 수 없다'는 말을 들었지만, 이를 악물고 노력해 보란 듯이 세계적인 선수로 성장했습니다.</p>
                <p>가족의 헌신적인 뒷바라지가 있었으며, 동생 비앙카 페르난데스도 테니스 선수로 활동 중입니다.</p>
            `,
      signatureMatch: {
        title: "2021 US 오픈 4강 vs 아리나 사발렌카",
        date: "2021. 09. 10",
        description:
          "힘 대 기술의 대결. 당시 세계 2위 사발렌카의 무시무시한 파워에 맞서, 한 박자 빠른 공격과 끈질긴 수비로 2-1 승리를 거뒀습니다. 결승 진출을 확정 짓고 코트에 주저앉아 눈물 흘리는 모습은 명장면이었습니다.",
      },
      recentForm: `
                <p><strong>"복식과 단식 병행"</strong></p>
                <p>단식 랭킹은 30위권에 머물러 있지만, 빌리 진 킹 컵에서 캐나다의 첫 우승을 이끄는 등 국가대항전에서 특히 강한 모습을 보입니다. 2024년에도 꾸준히 상승세를 타고 있습니다.</p>
            `,
      fanAppeal: `
                <p><strong>"웃음과 눈물의 아이콘"</strong></p>
                <p>경기 중에는 매서운 눈빛으로 싸우지만, 인터뷰할 때는 해맑은 미소로 팬들을 무장해제 시킵니다. 다양한 문화적 배경 덕분에 남미와 아시아 팬들에게도 큰 사랑을 받고 있습니다.</p>
            `,
    },
  },
  "mirra-andreeva-legacy": {
    name: "미라 안드레예바",
    nameEn: "Mirra Andreeva",
    country: "Russia",
    countryFlag: "🇷🇺",
    image: "/images/players/mirra-andreeva.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "WTA의 슈퍼 틴에이저. 16세의 나이에 윔블던 16강, 롤랑가로스 4강(2024)에 오르며 천재성을 입증한, 여자 테니스의 차세대 지배자 후보입니다.",
    detailedProfile: {
      faq: [
        {
          question: "미라 안드레예바 선수의 플레이 스타일은 어떤가요?",
          answer:
            "미라 안드레예바 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다.",
        },
        {
          question: "미라 안드레예바 선수의 주요 성과는 무엇인가요?",
          answer:
            "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다.",
        },
        {
          question: "미라 안드레예바 선수는 어떤 국적의 선수인가요?",
          answer:
            "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다.",
        },
        {
          question: "미라 안드레예바 선수에 대한 재미있는 사실이 있나요?",
          answer:
            "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다.",
        },
      ],
      oneLineSummary: 'WTA를 뒤흔든 17세 천재 소녀, "제2의 마르티나 힝기스".',
      whyNotable: `
                <p><strong>"10대의 반란을 이끄는 선두주자"</strong></p>
                <p>2023년 15세의 나이로 마드리드 오픈 16강에 오르며 혜성처럼 등장했습니다. 이후 윔블던 16강, 2024년 롤랑가로스 4강까지 진출하며 '반짝 돌풍'이 아님을 증명했습니다.</p>
                <p>어린 나이가 믿기지 않는 노련한 경기 운영과 센스는 전설 마르티나 힝기스를 연상시키며, 차기 세계 1위 후보로 손색이 없습니다.</p>
            `,
      playStyle: `
                <p><strong>"천재적인 카운터 펀처 (Smart Counter Puncher)"</strong></p>
                <p>힘으로 제압하기보다는 상대의 힘을 역이용하고, 코트의 빈 곳을 정확히 찌르는 지능적인 테니스를 구사합니다. 공을 다루는 손목 감각이 타고났습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 안드레예바의 가장 강력한 무기입니다. 다운더라인 백핸드는 이미 투어 상위권 수준입니다.</li>
                    <li><strong>경기 운영:</strong> 상대의 움직임을 미리 읽고 대처하는 능력이 돋보입니다. 드롭샷과 로브를 적재적소에 섞어 씁니다.</li>
                    <li><strong>멘탈:</strong> 지고 있는 상황에서도 쉽게 무너지지 않는 투지를 보여주지만, 가끔 감정을 주체하지 못하는 모습은 숙제입니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "센스 (Tennis IQ)",
          score: 10,
          description: "타고난 길목 차단과 코스 선택.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 9.5,
          description: "날카롭고 정확한 최고 무기.",
        },
        {
          name: "수비 (Defense)",
          score: 9,
          description: "끈질기게 따라가서 받아냄.",
        },
        {
          name: "잠재력 (Potential)",
          score: 10,
          description: "10년 이상 투어를 지배할 재목.",
        },
        {
          name: "경험 (Experience)",
          score: 4,
          description: "아직 투어 경험이 부족함.",
        },
        {
          name: "서브 (Serve)",
          score: 7,
          description: "파워와 다양성을 키워야 함.",
        },
      ],
      growthStory: `
                <p>러시아 크라스노야르스크 출신으로, 언니 에리카 안드레예바와 함께 자매 테니스 선수로 유명합니다. 프랑스 칸의 엘리트 테니스 센터에서 훈련하며 빠르게 성장했습니다.</p>
                <p>주니어 무대를 평정하고 프로에 데뷔하자마자 탑 랭커들을 연파하며 '무서운 10대'의 등장을 알렸습니다.</p>
            `,
      signatureMatch: {
        title: "2024 롤랑가로스 8강 vs 아리나 사발렌카",
        date: "2024. 06. 05",
        description:
          "세계를 놀라게 한 경기. 몸 상태가 좋지 않았던 사발렌카를 상대로 영리하게 코트를 넓게 사용하며 2-1 역전승을 거두고, 생애 첫 메이저 4강에 진출했습니다. 최연소 그랜드슬램 4강 기록(1997년 힝기스 이후)을 세웠습니다.",
      },
      recentForm: `
                <p><strong>"거침없는 상승세"</strong></p>
                <p>WTA 500 대회 등 투어 레벨에서도 꾸준히 성적을 내고 있습니다. 파워가 붙고 경험이 쌓인다면 2-3년 안에 메이저 우승도 가능하다는 평가입니다.</p>
            `,
    },
  },
  "linda-noskova-legacy": {
    name: "린다 노스코바",
    nameEn: "Linda Noskova",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    image: "/images/players/linda-noskova.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "체코의 10대 돌풍 주역. 2024 호주 오픈에서 세계 1위 시비옹테크를 꺾으며 파란을 일으킨 선수로, 강력한 포핸드와 침착한 경기 운영이 강점입니다.",
    detailedProfile: {
      oneLineSummary:
        '세계 1위를 무너뜨린 체코의 10대 돌풍, 강력한 포핸드를 가진 "자이언트 킬러".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 "시비옹테크를 멈춰 세운 소녀"</div>
                    <p>2024년 호주 오픈 3회전에서 당시 무적의 포스를 자랑하던 <strong>세계 랭킹 1위 이가 시비옹테크를 2-1로 제압</strong>하며 전 세계를 깜짝 놀라게 했습니다. 19세의 나이에 메이저 8강에 오르며 체코 테니스의 황금세대를 이끌고 있습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>군더더기 없는 깔끔한 폼에서 나오는 강력한 스트로크가 장점입니다. 특히 포핸드는 투어 최상급 파괴력을 가졌습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇿 노스코바의 3가지 "체코 파워"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>포핸드 위너:</strong> 찬스 볼이 오면 주저 없이 코너로 찔러 넣어 득점합니다.</li>
                        <li><strong>침착함:</strong> 10대답지 않게 경기 내내 표정 변화가 거의 없습니다. 중요한 순간에도 흔들리지 않는 강심장을 가졌습니다.</li>
                        <li><strong>양손 백핸드:</strong> 백핸드 또한 매우 견고하여 랠리 싸움에서 밀리지 않습니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        { name: "포핸드 (Forehand)", score: 9.5, description: "주무기." },
        {
          name: "멘탈 (Mental)",
          score: 9,
          description: "나이에 비해 매우 성숙함.",
        },
        { name: "파워 (Power)", score: 9, description: "묵직한 구질." },
        { name: "백핸드 (Backhand)", score: 8.5, description: "안정적." },
        { name: "서브 (Serve)", score: 8, description: "준수함." },
        { name: "이동 (Movement)", score: 8, description: "나쁘지 않음." },
      ],
      growthStory: `
                <p>체코의 작은 마을에서 태어났습니다. 2021년 프랑스 오픈 주니어 챔피언 출신으로, 엘리트 코스를 밟으며 성장했습니다. 성인 무대 데뷔 직후부터 빠른 속도로 랭킹을 올리고 있습니다.</p>
            `,
      signatureMatch: {
        title: "2024 호주 오픈 3회전 vs 이가 시비옹테크",
        date: "2024. 01. 20",
        description:
          "그녀의 인생을 바꾼 경기. 1세트를 내주고도 포기하지 않고 끈질기게 따라붙어 역전승을 일궈냈습니다. 여제를 무너뜨린 그녀의 포핸드는 압권이었습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧊 "아이스 프린세스"</div>
                    <p>경기 중 감정을 거의 드러내지 않는 차가운 매력이 있습니다. 하지만 경기 후에는 수줍은 미소를 보여주는 반전 매력의 소유자입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 20 진입 목표"</strong></p>
                <p>호주 오픈 8강 이후에도 꾸준히 성적을 내며 세계 랭킹 20위권 진입을 눈앞에 두고 있습니다. 차세대 그랜드슬램 우승 후보 중 한 명입니다.</p>
            `,
      faq: [
        {
          question: "체코에는 왜 테니스 잘하는 선수가 많나요?",
          answer:
            "체코는 전통적으로 테니스 인프라와 코칭 시스템이 매우 잘 갖춰져 있습니다. 나브라틸로바, 크비토바 등 전설적인 선배들을 보며 자라는 문화도 큰 몫을 합니다.",
        },
      ],
    },
  },
  "marta-kostyuk-legacy": {
    name: "마르타 코스튜크",
    nameEn: "Marta Kostyuk",
    country: "Ukraine",
    countryFlag: "🇺🇦",
    image: "/images/players/marta-kostyuk.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "우크라이나의 차세대 에이스. 주니어 시절부터 두각을 나타냈으며, 공격적인 플레이와 감정을 솔직하게 드러내는 스타성으로 주목받고 있습니다.",
    detailedProfile: {
      oneLineSummary:
        '우크라이나의 자존심, 코트 위에서 가장 뜨거운 열정을 보여주는 "파이터".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇦 "조국을 위해 뛰는 전사"</div>
                    <p>전쟁 중인 우크라이나를 알리기 위해 누구보다 열심히 뛰는 선수입니다. 2024년 호주 오픈 8강, 샌디에이고 오픈 준우승, 슈투트가르트 오픈 준우승 등 커리어 하이 시즌을 보내며 세계 Top 20에 진입했습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"올라운드 어그레시버"</strong></p>
                <p>코트 어디서든 공격할 수 있는 능력을 갖췄습니다. 네트 플레이를 즐기며, 아크로바틱한 점프 스매시 등 화려한 플레이를 보여줍니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">💃 코스튜크의 3가지 "열정"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>유연성:</strong> 체조 선수였던 어머니의 영향으로 유연성이 뛰어나 어려운 공도 잘 받아냅니다.</li>
                        <li><strong>다양성:</strong> 드롭샷, 로브, 발리 등 기술적인 샷을 자유자재로 구사하여 상대를 괴롭힙니다.</li>
                        <li><strong>파이팅:</strong> 매 포인트 간절하게 소리치며 자신을 독려합니다. 그녀의 에너지는 관중을 압도합니다.</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "운동신경 (Athleticism)",
          score: 9.5,
          description: "탄력이 매우 좋음.",
        },
        { name: "멘탈 (Mental)", score: 9, description: "애국심으로 무장." },
        { name: "기술 (Technique)", score: 9, description: "다양한 샷 구사." },
        {
          name: "공격성 (Aggression)",
          score: 9,
          description: "물러서지 않음.",
        },
        { name: "서브 (Serve)", score: 7.5, description: "기복이 좀 있음." },
        {
          name: "안정성 (Stability)",
          score: 7,
          description: "감정에 따라 흔들림.",
        },
      ],
      growthStory: `
                <p>키이우 출신입니다. 어머니 탈리나 베이코는 전직 프로 테니스 선수였습니다. 어릴 때부터 '천재 소녀'로 불리며 2017 호주 오픈 주니어 우승을 차지했습니다. 프로 전향 후 꾸준히 성장하여 우크라이나 테니스의 간판이 되었습니다.</p>
            `,
      signatureMatch: {
        title: "2024 슈투트가르트 오픈 4강 vs 코코 고프",
        date: "2024. 04. 20",
        description:
          "혈투 끝의 승리. 세계 랭킹 3위 코코 고프를 상대로 엄청난 체력전 끝에 승리하며 결승에 진출했습니다. 그녀의 투지가 빛난 경기였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👗 "패션 아이콘"</div>
                    <p>윌슨(Wilson)에서 그녀를 위해 특별 제작한 웨딩드레스 스타일의 테니스 의상을 입고 나와 큰 화제가 되었습니다. 뛰어난 패션 감각과 스타성으로 많은 팔로워를 보유하고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"커리어 하이"</strong></p>
                <p>2024년 최고의 시즌을 보내고 있습니다. 그랜드슬램에서도 상위 라운드에 꾸준히 진출하며 세계 20위권 내에 안정적으로 안착했습니다.</p>
            `,
      faq: [
        {
          question: "러시아 선수와 악수를 안 하나요?",
          answer:
            "네, 러시아의 우크라이나 침공 이후 러시아 및 벨라루스 선수들과 경기 후 악수를 하지 않고 있습니다. 전쟁 반대의 메시지를 전하기 위해서입니다.",
        },
      ],
    },
  },

  // --- Added Male Players (Roadmap Completion) ---
  "dayana-yastremska": {
    name: "다야나 야스트렘스카",
    nameEn: "Dayana Yastremska",
    country: "Ukraine",
    countryFlag: "🇺🇦",
    image: "/images/players/dayana-yastremska.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "폭발적인 공격력을 자랑하는 우크라이나의 파워 히터. 2024 호주 오픈에서 예선 통과자 신분으로 4강까지 진출하는 돌풍을 일으키며 세계를 놀라게 했습니다.",
    detailedProfile: {
      oneLineSummary:
        '예선 통과자의 신화, 우크라이나의 긍지를 짊어진 "파워 히터".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌪️ "예선에서 4강까지"</div>
                    <p>2024년 호주 오픈에서 예선 3경기를 거쳐 본선에 올라, 윔블던 챔피언 본드루소바, 아자렌카 등을 잇달아 격파하고 <strong>4강(준결승)</strong>까지 진출하는 기적을 썼습니다. 오픈 시대 이후 예선 통과자가 호주 오픈 4강에 오른 것은 1978년 이후 처음입니다.</p>
                </div>
                <p>전쟁 중인 조국 우크라이나에 승전보를 전하기 위해 뛴다는 인터뷰로 많은 이들의 심금을 울렸습니다.</p>
            `,
      playStyle: `
                <p><strong>"초공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>수비보다는 공격입니다. 공이 오면 무조건 세게 때려버리는 스타일입니다. "모 아니면 도" 식의 플레이지만, 긁히는 날에는 누구도 막을 수 없습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드/백핸드:</strong> 양쪽 모두에서 강력한 플랫성 위너를 터뜨립니다. 랠리를 짧게 가져갑니다.</li>
                    <li><strong>리턴:</strong> 상대 서브를 바로 공격하여 득점으로 연결하는 능력이 뛰어납니다.</li>
                    <li><strong>기복:</strong> 공격 아니면 에러입니다. 범실이 많은 날은 자멸하기도 합니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "파워 (Power)",
          score: 10,
          description: "WTA 최고 수준의 화력.",
        },
        {
          name: "공격성 (Aggression)",
          score: 10,
          description: "후진 기어 없음.",
        },
        { name: "멘탈 (Mental)", score: 8, description: "조국을 위한 투지." },
        { name: "안정성 (Consistency)", score: 5, description: "에러가 많음." },
        { name: "서브 (Serve)", score: 7.5, description: "준수한 편." },
        { name: "이동 (Movement)", score: 8, description: "빠르고 탄력적." },
      ],
      growthStory: `
                <p>우크라이나 오데사 출신입니다. 어린 시절부터 공격적인 테니스로 두각을 나타냈으며, 10대 때 이미 투어 3회 우승을 차지했습니다. 잠시 도핑 논란(무혐의 처분)과 부진이 있었으나, 2024년 화려하게 부활했습니다.</p>
            `,
      signatureMatch: {
        title: "2024 호주 오픈 8강 vs 린다 노스코바",
        date: "2024. 01. 24",
        description:
          '4강 신화를 완성한 경기. 시비옹테크를 꺾고 올라온 노스코바를 상대로 압도적인 파워를 보여주며 2-0 완승을 거뒀습니다. 승리 후 카메라 렌즈에 "I am proud of my people from Ukraine"라고 적었습니다.',
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💙💛 "우크라이나의 전사"</div>
                    <p>코트 위에서는 파이터, 코트 밖에서는 가수로도 활동한 다재다능한 스타입니다. 전쟁으로 고통받는 자국민들을 대변하는 메시지를 끊임없이 전하며 평화의 아이콘이 되었습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"제2의 전성기"</strong></p>
                <p>호주 오픈 4강 이후 랭킹이 30위권 안으로 복귀했습니다. 특유의 몰아치기 능력이 살아나, 언제든 상위 랭커를 잡을 수 있는 다크호스로 평가받습니다.</p>
            `,
      faq: [
        {
          question: "야스트렘스카의 최고 성적은?",
          answer:
            "그랜드슬램 4강(2024 호주 오픈)이며, 투어 대회 단식 우승 3회를 기록했습니다.",
        },
        {
          question: "그녀는 가수로도 활동하나요?",
          answer:
            '네, 2020년 코로나 팬데믹 기간에 "Favorite Track"이라는 곡을 발표하며 가수로 데뷔하기도 했습니다.',
        },
      ],
    },
  },
  "anna-kalinskaya": {
    name: "안나 칼린스카야",
    nameEn: "Anna Kalinskaya",
    country: "Russia",
    countryFlag: "🇷🇺",
    image: "/images/players/anna-kalinskaya.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "군더더기 없는 깔끔한 스트로크가 특징인 선수. 최근 두바이 챔피언십 결승 진출 등 투어 무대에서 기량이 만개하며 다크호스로 떠올랐습니다.",
    detailedProfile: {
      oneLineSummary:
        '차갑고 매서운 스트로크, 세계 1위를 사로잡은 "러시아의 얼음공주".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">❄️ "늦깍이 전성기"</div>
                    <p>만년 유망주였으나 2024년 두바이 챔피언십(WTA 1000)에서 세계 1위 시비옹테크, 3위 고프, 9위 오스타펜코를 연파하고 결승에 오르며 기량이 만개했습니다.</p>
                    <p>또한 남자 세계 1위 <strong>야닉 시너</strong>와의 연인 관계가 알려지며 테니스계 최고의 '슈퍼 커플'로 화제를 모으고 있습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"공격적인 카운터 펀처"</strong></p>
                <p>감정을 드러내지 않는 포커페이스로 상대의 공을 기계처럼 받아칩니다. 공의 힘을 이용해 각도를 벌리는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>타이밍:</strong> 공을 라이징 볼로 처리하여 박자가 매우 빠릅니다. 상대가 준비할 시간을 주지 않습니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드 공격이 일품입니다.</li>
                    <li><strong>멘탈:</strong> 예전에는 기복이 있었으나, 최근에는 위기 상황에서도 흔들리지 않는 침착함을 갖췄습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "타이밍 (Timing)", score: 9.5, description: "완벽한 임팩트." },
        { name: "백핸드 (Backhand)", score: 9, description: "날카로운 무기." },
        { name: "멘탈 (Mental)", score: 8.5, description: "얼음처럼 차가움." },
        { name: "수비 (Defense)", score: 8.5, description: "견고한 벽." },
        { name: "서브 (Serve)", score: 7.5, description: "평균적임." },
        { name: "미모 (Visual)", score: 10, description: "투어 대표 미녀." },
      ],
      growthStory: `
                <p>러시아 모스크바 출신입니다. 부모님이 전직 배드민턴 선수들이라 라켓을 다루는 감각을 물려받았습니다. 주니어 시절 복식 그랜드슬램을 우승했으나, 성인 무대 적응에 시간이 걸렸습니다. 25세가 된 2024년에 마침내 Top 20에 진입했습니다.</p>
            `,
      signatureMatch: {
        title: "2024 두바이 챔피언십 4강 vs 이가 시비옹테크",
        date: "2024. 02. 23",
        description:
          "세계 1위를 무너뜨린 인생 경기. 무적 포스를 뽐내던 시비옹테크를 상대로 한 치의 물러섬도 없는 맞불 작전을 펼쳐 2-0(6-4, 6-4) 완승을 거뒀습니다. 시비옹테크가 쩔쩔맬 정도로 완벽한 경기력이었습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👸 "테니스 여신"</div>
                    <p>뛰어난 실력만큼이나 수려한 외모로 많은 팬을 보유하고 있습니다. 시너와 함께 훈련하거나 경기장을 찾는 모습이 자주 포착되어 팬들의 부러움을 사고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 10 진입 목표"</strong></p>
                <p>두바이 준우승 이후 베를린 오픈 준우승 등 꾸준히 상위권 성적을 내고 있습니다. 지금의 기세라면 메이저 대회 4강 이상도 충분히 가능해 보입니다.</p>
            `,
      faq: [
        {
          question: "칼린스카야의 남자친구는 누구인가요?",
          answer:
            "현재 ATP 세계 랭킹 1위인 이탈리아의 야닉 시너(Jannik Sinner)입니다.",
        },
        {
          question: "칼린스카야의 별명은?",
          answer:
            "특별한 별명은 없으나, 팬들 사이에서는 미모와 차가운 경기 스타일 때문에 '얼음공주' 등으로 불리기도 합니다.",
        },
      ],
    },
  },
  "jasmine-paolini": {
    name: "자스민 파올리니",
    nameEn: "Jasmine Paolini",
    country: "Italy",
    countryFlag: "🇮🇹",
    image: "/images/players/jasmine-paolini.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "작은 거인. 163cm의 단신이지만 빠른 발과 지칠 줄 모르는 체력으로 2024년 롤랑가로스와 윔블던 결승에 진출하며 세계 톱 랭커로 도약했습니다.",
    detailedProfile: {
      oneLineSummary:
        '163cm의 "작은 거인", 롤랑가로스와 윔블던 결승을 동시에 밟은 이탈리아의 기적.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇮🇹 "이탈리아의 요정, 세계를 놀라게 하다"</div>
                    <p>2024년은 자스민 파올리니의 해였습니다. 누구도 기대하지 않았던 그녀가 <strong>롤랑가로스(프랑스 오픈)와 윔블던 결승에 연속으로 진출</strong>하는 대이변을 일으켰습니다. 163cm의 작은 키로 파워 히터들을 쓰러뜨리는 모습은 전 세계에 감동을 주었습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"에너자이저 / 카운터 펀처"</strong></p>
                <p>코트 위를 쉴 새 없이 뛰어다닙니다. 상대가 강하게 치면 그 힘을 이용해 더 빠르게 되돌려 보냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>스피드:</strong> 투어에서 가장 빠른 선수 중 한 명입니다. 어떤 공이든 쫓아갑니다.</li>
                    <li><strong>포핸드:</strong> 키에 비해 엄청난 회전량의 헤비 탑스핀을 구사합니다. 나달을 연상시킵니다.</li>
                    <li><strong>에너지:</strong> 항상 긍정적인 에너지를 뿜어내며, 지치지 않는 체력으로 상대를 질리게 만듭니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "스피드 (Speed)", score: 10, description: "전광석화." },
        { name: "체력 (Stamina)", score: 10, description: "무한 체력." },
        { name: "포핸드 (Forehand)", score: 9, description: "작지만 매운맛." },
        { name: "서브 (Serve)", score: 6, description: "신체적 한계는 있음." },
        { name: "멘탈 (Mental)", score: 9.5, description: "항상 웃으며 싸움." },
        {
          name: "네트 (Net)",
          score: 8,
          description: "복식 경험으로 다져진 발리.",
        },
      ],
      growthStory: `
                <p>이탈리아 토스카나 지방에서 이탈리아인 아버지와 가나-폴란드 혼혈 어머니 사이에서 태어났습니다. 늦은 나이(28세)에 전성기를 맞이한 대기만성형 선수입니다. 2024년 두바이 챔피언십 우승으로 자신감을 얻어 메이저 결승까지 질주했습니다.</p>
            `,
      signatureMatch: {
        title: "2024 윔블던 4강 vs 돈나 베키치",
        date: "2024. 07. 11",
        description:
          "윔블던 역사에 남을 명승부. 2시간 51분의 혈투 끝에 2-1 역전승을 거뒀습니다. 마지막 순간까지 포기하지 않고 뛰어다닌 파올리니의 투지가 빛났으며, 이탈리아 여류 선수 최초로 윔블던 결승에 진출했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😊 "해피 바이러스"</div>
                    <p>항상 밝은 미소와 긍정적인 태도로 인터뷰하여 '스마일 퀸'으로 불립니다. 그녀의 경기를 보면 기분이 좋아진다는 팬들이 많습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 5 안착"</strong></p>
                <p>단식뿐만 아니라 복식에서도 롤랑가로스 결승, 올림픽 금메달(에라니와 합작)을 차지하며 세계 최고의 선수 중 한 명으로 우뚝 섰습니다.</p>
            `,
      faq: [
        {
          question: "파올리니의 키는?",
          answer:
            "163cm(5피트 4인치)입니다. 현대 테니스에서 매우 단신에 속하지만, 스피드와 기술로 이를 완벽하게 극복했습니다.",
        },
        {
          question: "파올리니의 국적 배경은?",
          answer:
            "국적은 이탈리아입니다. 어머니가 가나와 폴란드 혈통을 가지고 있어 다양한 문화적 배경을 지니고 있습니다.",
        },
      ],
    },
  },
  "sorana-cirstea": {
    name: "소라나 크르스테아",
    nameEn: "Sorana Cirstea",
    country: "Romania",
    countryFlag: "🇷🇴",
    image: "/images/players/sorana-cirstea.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "루마니아의 베테랑. 공격적인 베이스라인 플레이를 구사하며, 투어 경력 내내 꾸준히 상위권을 위협하는 저력을 보여줍니다.",
    detailedProfile: {
      oneLineSummary:
        '30대에 전성기를 맞이한 루마니아의 "공격 본능", 꾸준함의 대명사.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇷🇴 "루마니아의 자존심"</div>
                    <p>시모나 할렙과 함께 루마니아 테니스를 이끌어온 베테랑입니다. 2008년 18세의 나이로 투어에 데뷔해 15년 넘게 Top 100을 유지하는 자기관리의 끝판왕입니다.</p>
                    <p>특히 2023년 마이애미 오픈에서 4강에 오르며 10년 만에 마스터스 준결승 무대를 밟는 등, 나이가 들수록 더 노련하고 매서운 테니스를 보여주고 있습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>수비를 하기보다는 먼저 공격해서 랠리를 끝내려고 합니다. 플랫성 구질의 포핸드와 백핸드가 네트 위를 낮게 깔고 지나갑니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 파워가 실린 포핸드 스트로크가 주무기입니다. 좌우 코너를 찌르는 각도가 예리합니다.</li>
                    <li><strong>템포:</strong> 빠른 박자로 공을 처리하여 상대의 시간을 빼앗습니다.</li>
                    <li><strong>기복:</strong> 공격적인 스타일 탓에 컨디션이 안 좋은 날에는 에러가 많아지는 경향이 있습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "파워 (Power)", score: 8.5, description: "묵직한 스트로크." },
        {
          name: "경험 (Experience)",
          score: 10,
          description: "투어 15년차 베테랑.",
        },
        { name: "공격성 (Aggression)", score: 9, description: "선공 필승." },
        { name: "서브 (Serve)", score: 7.5, description: "준수함." },
        { name: "수비 (Defense)", score: 6, description: "공격에 비해 약함." },
        { name: "멘탈 (Mental)", score: 8, description: "산전수전 다 겪음." },
      ],
      growthStory: `
                <p>루마니아 흐레슈트에서 태어났습니다. 4살 때 어머니의 권유로 테니스를 시작했습니다. 슈테피 그래프를 동경하며 자랐고, 어릴 때부터 공격적인 테니스를 선호했습니다. 2009년 롤랑가로스 8강에 오르며 혜성처럼 등장했고, 긴 슬럼프를 겪기도 했지만 30대에 들어 제2의 전성기를 구가하고 있습니다.</p>
            `,
      signatureMatch: {
        title: "2023 US 오픈 3회전 vs 엘레나 리바키나",
        date: "2023. 09. 02",
        description:
          "거함을 침몰시킨 경기. 윔블던 챔피언이자 강력한 우승 후보였던 리바키나를 상대로 3세트 접전 끝에 2-1 승리를 거뒀습니다. 베테랑의 노련미가 파워를 이길 수 있음을 증명했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💃 "쿨한 언니"</div>
                    <p>시원시원한 이목구비와 플레이 스타일로 많은 팬을 보유하고 있습니다. 인터뷰에서도 솔직하고 당당한 화법을 구사하여 "걸크러쉬" 매력을 발산합니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"여전한 경쟁력"</strong></p>
                <p>Top 30 안팎의 랭킹을 유지하며 메이저 대회 시드 배정을 받고 있습니다. 언제든 상위 랭커를 잡을 수 있는 '지뢰밭' 같은 선수입니다.</p>
            `,
      faq: [
        {
          question: "크르스테아는 결혼했나요?",
          answer:
            "아직 미혼입니다. 테니스 선수인 산티아고 히랄도(콜롬비아)와 3년간 교제했었으며, 현재는 테니스에 집중하고 있습니다.",
        },
        {
          question: "그녀의 취미는 무엇인가요?",
          answer:
            "독서와 쇼핑을 즐깁니다. 또한 6개 국어(루마니아어, 영어, 스페인어, 프랑스어 등)를 구사하는 능력자이기도 합니다.",
        },
      ],
    },
  },
  "anastasia-potapova": {
    name: "아나스타샤 포타포바",
    nameEn: "Anastasia Potapova",
    country: "Russia",
    countryFlag: "🇷🇺",
    image: "/images/players/anastasia-potapova.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "주니어 세계 1위 출신의 재능. 강한 승부욕과 파이팅 넘치는 플레이로 코트 위에서 존재감을 발휘하는 영건입니다.",
    detailedProfile: {
      oneLineSummary:
        '주니어 랭킹 1위의 재능, 코트를 지배하는 강렬한 "파이터".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 "불꽃 같은 승부욕"</div>
                    <p>2016 윔블던 주니어 챔피언 출신입니다. 경기 중 감정을 숨기지 않고 표출하는 맹수 같은 스타일입니다. 이길 때나 질 때나 관중의 시선을 사로잡는 스타성이 있습니다.</p>
                    <p>동료 테니스 선수 알렉산더 쉐브첸코와 결혼하여 '테니스 부부' 대열에 합류했습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"파워풀한 베이스라이너"</strong></p>
                <p>체구는 크지 않지만 온몸의 회전을 이용해 묵직한 공을 때립니다. 특히 다운더라인 공격을 즐겨 사용합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 가장 자신 있어 하는 샷입니다. 크로스와 다운더라인을 자유자재로 구사합니다.</li>
                    <li><strong>공격성:</strong> 수세에 몰려도 과감하게 카운터를 날리는 배짱이 있습니다.</li>
                    <li><strong>서브:</strong> 더블 폴트가 종종 나오지만, 에이스를 노리는 공격적인 서브를 넣습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "파워 (Power)", score: 8.5, description: "작은 고추가 맵다." },
        { name: "멘탈 (Mental)", score: 7, description: "감정 기복이 심함." },
        { name: "기술 (Technique)", score: 8.5, description: "교과서적인 폼." },
        { name: "이동 (Movement)", score: 8, description: "빠른 발." },
        { name: "백핸드 (Backhand)", score: 9, description: "해결사." },
        { name: "서브 (Serve)", score: 7, description: "개선 중." },
      ],
      growthStory: `
                <p>러시아 사라토프 출신입니다. 할머니가 농구 코치 출신이라 운동신경을 물려받았습니다. 주니어 시절부터 '차라포바'의 후계자로 불리며 엘리트 코스를 밟았습니다. 성인 무대 초반 부상으로 고전했으나, 2023년부터 린츠 오픈 우승 등 투어 타이틀을 수집하며 잠재력을 터뜨리고 있습니다.</p>
            `,
      signatureMatch: {
        title: "2023 린츠 오픈 결승",
        date: "2023. 02. 12",
        description:
          "통산 두 번째 투어 우승. 페트라 마르티치를 상대로 압도적인 경기력을 보여주며 6-3, 6-1로 완승했습니다. 이 우승으로 랭킹이 Top 30에 진입했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💅 "코트 위의 패셔니스타"</div>
                    <p>항상 화려한 의상과 메이크업으로 경기에 나섭니다. SNS에서도 활발하게 활동하며 팬들과 소통하는 신세대 스타입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"결혼 후 안정감"</strong></p>
                <p>2023년 말 결혼 이후 심리적으로 안정을 찾았다는 평가입니다. 2024년에도 인디언 웰스 8강 등 굵직한 성적을 내며 Top 20 진입을 노리고 있습니다.</p>
            `,
      faq: [
        {
          question: "포타포바의 남편은 누구인가요?",
          answer:
            "카자흐스탄 국적의 ATP 선수 알렉산더 쉐브첸코입니다. 2023년 12월에 결혼식을 올렸습니다.",
        },
        {
          question: "그녀의 코치는 누구인가요?",
          answer:
            "오랫동안 이고르 안드레예프(전 러시아 국가대표)의 지도를 받았습니다. 현재는 투어 생활을 하며 남편과 서로 코칭을 돕기도 합니다.",
        },
      ],
    },
  },
  "ekaterina-alexandrova": {
    name: "에카테리나 알렉산드로바",
    nameEn: "Ekaterina Alexandrova",
    country: "Russia",
    countryFlag: "🇷🇺",
    image: "/images/players/ekaterina-alexandrova.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "낮고 빠른 플랫성 타구가 일품인 선수. 특히 실내 코트에서 강한 면모를 보이며, 리듬을 탔을 때는 톱 랭커들도 막기 힘든 공격력을 뽐냅니다.",
    detailedProfile: {
      oneLineSummary:
        '코트 위에 미사일을 쏘는 "실내 코트의 여왕", 예측 불가의 플랫 히터.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ "속사포 테니스"</div>
                    <p>공을 잡고 생각할 틈을 주지 않습니다. 리턴부터 공격적이며, 랠리 중에도 템포를 극한으로 끌어올려 상대방을 질식시킵니다. 특히 잔디 코트나 실내 하드 코트처럼 공이 빠르게 깔리는 환경에서 극강의 모습을 보여줍니다.</p>
                    <p>2022년, 2023년 코리아 오픈(서울)에서 연속으로 결승에 진출(22년 우승, 23년 준우승)하여 한국 팬들에게 매우 친숙한 선수입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"플랫 히터 (Flat Hitter)"</strong></p>
                <p>스핀을 거의 걸지 않고 플랫하게 때립니다. 네트 위를 스치듯 지나가는 공은 바운드 후에도 낮게 깔려 상대가 받아치기 어렵습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 투어 최상위권의 서브 능력을 가졌습니다. 스피드와 코스 모두 훌륭합니다.</li>
                    <li><strong>리턴:</strong> 상대 서브가 약하면 바로 위너로 연결합니다.</li>
                    <li><strong>약점:</strong> 클레이 코트처럼 공이 느리고 높게 튀는 환경에서는 위력이 반감됩니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "서브 (Serve)", score: 9, description: "에이스 제조기." },
        { name: "파워 (Power)", score: 9, description: "묵직하고 빠름." },
        { name: "스피드 (Speed)", score: 7, description: "평범함." },
        { name: "일관성 (Consistency)", score: 6, description: "기복이 있음." },
        {
          name: "특수성 (Specialty)",
          score: 10,
          description: "실내/잔디 강자.",
        },
        { name: "멘탈 (Mental)", score: 7, description: "표정 변화 없음." },
      ],
      growthStory: `
                <p>러시아 첼랴빈스크 출신이지만, 테니스 훈련을 위해 일찍이 체코 프라하로 이주하여 오랫동안 거주했습니다. 이 때문에 플레이 스타일이 체코 선수들(크비토바, 플리스코바)과 유사한 점이 많습니다.</p>
            `,
      signatureMatch: {
        title: "2022 코리아 오픈 결승 vs 옐레나 오스타펜코",
        date: "2022. 09. 25",
        description:
          "한국 팬들에게 강렬한 인상을 남긴 경기. 톱 시드 오스타펜코를 상대로 한 수 위의 파워와 정교함을 보여주며 2-0(7-6, 6-0)으로 완파하고 우승컵을 들어 올렸습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧊 "아이스 퀸"</div>
                    <p>경기 중 표정 변화가 거의 없습니다. 위너를 쳐도, 실수를 해도 무덤덤한 표정으로 다음 포인트를 준비하는 모습이 카리스마 있습니다. 하지만 시상식에서는 수줍은 미소를 보여주는 반전 매력이 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 20의 터줏대감"</strong></p>
                <p>2024년 마이애미 오픈 4강에 오르며 커리어 하이를 위협하고 있습니다. 시비옹테크와 페굴라를 연달아 꺾는 등 '거물 킬러'의 본능을 유감없이 발휘 중입니다.</p>
            `,
      faq: [
        {
          question: "알렉산드로바는 왜 한국 주소를 쓰나요?",
          answer:
            '실제 주소는 아니지만, 코리아 오픈에서의 좋은 기억 때문인지 한국 팬들에게 애정이 깊습니다. 팬들은 "명예 한국인"이라고 부르기도 합니다.',
        },
        {
          question: "그녀의 서브 최고 속도는?",
          answer:
            "시속 190km 이상을 기록하기도 하며, WTA 투어에서 에이스 개수 상위권에 항상 이름을 올립니다.",
        },
      ],
    },
  },
  "liudmila-samsonova": {
    name: "류드밀라 삼소노바",
    nameEn: "Liudmila Samsonova",
    country: "Russia",
    countryFlag: "🇷🇺",
    image: "/images/players/liudmila-samsonova.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "강력한 서브와 포핸드를 앞세운 공격형 플레이어. 하드 코트에서 특히 위력적이며, WTA 투어 타이틀을 여러 차례 차지한 실력자입니다.",
    detailedProfile: {
      oneLineSummary:
        '이탈리아에서 자란 러시아의 "파워 히터", 폭발적인 서브와 포핸드의 소유자.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🚀 "붐-붐(Boom-Boom) 테니스"</div>
                    <p>WTA 투어에서 가장 강력한 <strong>'원투 펀치(서브+포핸드)'</strong>를 가진 선수 중 한 명입니다. 컨디션이 좋은 날에는 누구도 그녀의 공을 건드리지 못할 정도로 압도적인 화력을 뿜어냅니다.</p>
                    <p>2022년 도쿄, 클리블랜드, 워싱턴 대회 등을 휩쓸며 단기간에 랭킹을 수직 상승시킨 '우승 청부사' 기질이 있습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"공격적 올라운더"</strong></p>
                <p>큰 키(182cm)에서 내리꽂는 서브가 일품입니다. 베이스라인 뒤로 물러나지 않고 앞에서 공을 처리하며 경기를 주도합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 엄청난 스피드와 회전이 걸린 포핸드 위너를 양산합니다.</li>
                    <li><strong>드롭샷:</strong> 파워만 있는 것이 아니라, 허를 찌르는 드롭샷으로 상대를 묶어두는 센스도 갖췄습니다.</li>
                    <li><strong>기복:</strong> 강력한 무기가 있지만, 정교함이 떨어지는 날엔 에러가 쏟아집니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "파워 (Power)", score: 9.5, description: "투어 최상급." },
        { name: "서브 (Serve)", score: 9, description: "가장 큰 무기." },
        { name: "포핸드 (Forehand)", score: 9, description: "파괴적임." },
        { name: "이동 (Movement)", score: 7, description: "키에 비해 민첩." },
        { name: "멘탈 (Mental)", score: 7.5, description: "결승전에 강함." },
        {
          name: "안정성 (Consistency)",
          score: 6.5,
          description: "기복이 숙제.",
        },
      ],
      growthStory: `
                <p>러시아에서 태어났지만, 아버지를 따라 1살 때 이탈리아로 이주하여 성장했습니다. 한때 이탈리아 국적 취득을 고려하기도 했으나 러시아 국적으로 활동 중입니다. 이탈리아어에 능통하며, 플레이 스타일도 이탈리아 선수들처럼 창의적인 면이 섞여 있습니다.</p>
            `,
      signatureMatch: {
        title: "2023 몬트리올 마스터스 4강 vs 엘레나 리바키나",
        date: "2023. 08. 13",
        description:
          "진정한 파워 대결. 리바키나를 상대로 힘에서 전혀 밀리지 않고 오히려 압도하며 역전승을 거뒀습니다. 이 승리로 생애 첫 WTA 1000 결승에 진출했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎧 "헤드폰 소녀"</div>
                    <p>경기장에 입장할 때 항상 큰 헤드폰을 끼고 비트가 강한 음악을 들으며 집중하는 모습이 트레이드마크입니다. 시크해 보이지만 팬 서비스는 다정한 편입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 15 안착"</strong></p>
                <p>2023년 하반기 폭발적인 상승세 이후 2024년에는 다소 주춤했지만, 여전히 Top 20 안쪽을 유지하고 있습니다. 잔디 코트 시즌에 특히 강해 다가올 윔블던에서의 활약이 기대됩니다.</p>
            `,
      faq: [
        {
          question: "삼소노바는 이탈리아어 가능한가요?",
          answer:
            "네, 원어민 수준입니다. 인터뷰도 이탈리아어로 유창하게 진행하곤 합니다.",
        },
        {
          question: "그녀의 별명은?",
          answer: '팬들은 줄여서 "루다(Liuda)"라고 부릅니다.',
        },
      ],
    },
  },
  "veronika-kudermetova": {
    name: "베로니카 쿠데르메토바",
    nameEn: "Veronika Kudermetova",
    country: "Russia",
    countryFlag: "🇷🇺",
    image: "/images/players/veronika-kudermetova.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "단식과 복식 모두 세계 수준인 올라운더. 안정적인 스트로크와 네트 플레이 능력을 겸비하여 어떤 상황에서도 견고한 경기를 펼칩니다.",
    detailedProfile: {
      oneLineSummary:
        '단식과 복식 모두 Top 10을 찍어본 "완성형 올라운더", 러시아의 조용한 실력자.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👥 "복식 여제에서 단식 강자로"</div>
                    <p>엘레나 베스니나와 함께 2020 도쿄 올림픽 복식 4위를 기록하고, 2022년 WTA 파이널스 복식 우승을 차지하는 등 복식 스페셜리스트로 먼저 이름을 알렸습니다. 하지만 이후 탄탄한 기본기를 바탕으로 단식에서도 Top 10(최고 9위)에 오르며 '투 잡' 모두 성공한 케이스입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"안정적인 올라운드 플레이"</strong></p>
                <p>약점이 없는 육각형 선수입니다. 강력한 서브와 스트로크, 그리고 복식 경험에서 나오는 발리 능력까지 갖췄습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 에이스를 많이 기록하는 편이며, 첫 서브 성공률도 높습니다.</li>
                    <li><strong>네트 플레이:</strong> 기회가 오면 주저 없이 네트로 대시하여 포인트를 마무리합니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드가 매우 정확합니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "밸런스 (Balance)", score: 9.5, description: "빈틈이 없음." },
        { name: "네트 (Net)", score: 9, description: "복식 최상급 스킬." },
        { name: "서브 (Serve)", score: 8.5, description: "강력함." },
        { name: "파워 (Power)", score: 8, description: "평균 이상." },
        { name: "멘탈 (Mental)", score: 7, description: "가끔 흔들림." },
        {
          name: "체력 (Stamina)",
          score: 8.5,
          description: "단/복식 병행 가능.",
        },
      ],
      growthStory: `
                <p>러시아 카잔 출신의 스포츠 가족(아버지가 아이스하키 챔피언)에서 태어났습니다. 8살 때 테니스를 시작했으며, 남편인 세르게이 데메킨이 전담 코치를 맡고 있습니다. 부부의 호흡으로 꾸준히 성적을 내고 있습니다.</p>
            `,
      signatureMatch: {
        title: "2022 롤랑가로스 8강 vs 파울라 바도사",
        date: "2022. 05. 30",
        description:
          "메이저 대회 첫 8강 진출. 3회전에서 바도사가 기권하긴 했으나, 그전까지 보여준 완벽한 경기 운영은 그녀가 클레이 코트에서도 강하다는 것을 증명했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👜 "아르마니 모델"</div>
                    <p>엠포리오 아르마니(EA7)의 후원을 받는 대표적인 선수로, 모델 같은 비율과 우아한 경기복 핏을 자랑합니다. 코트 위에서 가장 스타일리시한 선수 중 한 명입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"숨 고르기"</strong></p>
                <p>2023년 도쿄 오픈 우승 이후 2024년에는 다소 랭킹이 하락(Top 30~40)했으나, 기본기가 워낙 탄탄하여 언제든지 치고 올라올 수 있는 저력이 있습니다.</p>
            `,
      faq: [
        {
          question: "쿠데르메토바의 남편은 누구?",
          answer:
            "그녀의 코치인 세르게이 데메킨입니다. 데메킨은 과거 즈보나레바 등을 지도했던 유명 코치이자 모델 출신입니다.",
        },
        {
          question: "가장 좋아하는 샷은?",
          answer:
            "서브와 발리 콤비네이션을 즐깁니다. 현대 여자 테니스에서 보기 드문 클래식한 전술을 구사합니다.",
        },
      ],
    },
  },
  "elise-mertens": {
    name: "엘리스 메르텐스",
    nameEn: "Elise Mertens",
    country: "Belgium",
    countryFlag: "🇧🇪",
    image: "/images/players/elise-mertens.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "벨기에 테니스의 계보를 잇는 선수. 기복 없는 꾸준함과 뛰어난 수비력이 강점이며, 복식에서는 세계 랭킹 1위를 기록한 바 있습니다.",
    detailedProfile: {
      oneLineSummary:
        '복식 세계 1위 출신의 테니스 지능 천재, 벨기에의 "무결점 플레이어".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇧🇪 "클리스터스와 에넹의 후예"</div>
                    <p>벨기에 테니스 황금세대의 명맥을 잇는 선수입니다. 특히 <strong>복식(Doubles)에서는 세계 랭킹 1위</strong>를 찍고 그랜드슬램 4회 우승(호주 2회, 윔블던 1회, US 1회)을 달성한 '레전드'입니다.</p>
                    <p>단식에서도 2018 호주 오픈 4강에 오르는 등 꾸준히 Top 30을 유지하는 투어의 성실한 모범생입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"카운터 펀처 & 올라운더"</strong></p>
                <p>화려한 위너보다는 실수를 하지 않는 테니스를 합니다. 코트 전체를 넓게 쓰며 상대의 빈틈을 찌르는 영리한 플레이가 돋보입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>수비:</strong> 끈질깁니다. 상대가 지칠 때까지 공을 받아냅니다.</li>
                    <li><strong>양손 백핸드:</strong> 매우 안정적이며, 앵글 샷을 잘 구사합니다.</li>
                    <li><strong>서브:</strong> 어깨 회전이 큰 독특한 폼을 가지고 있으며, 코스 공략이 좋습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "전술 (Tactics)", score: 10, description: "테니스 IQ 높음." },
        { name: "복식 (Doubles)", score: 10, description: "세계 최강." },
        { name: "수비 (Defense)", score: 9, description: "물샐틈 없음." },
        {
          name: "안정성 (Consistency)",
          score: 9,
          description: "에러 기계가 고장남.",
        },
        { name: "파워 (Power)", score: 6.5, description: "결정력 부족." },
        { name: "서브 (Serve)", score: 7, description: "평균적." },
      ],
      growthStory: `
                <p>벨기에 뢰번 출신입니다. 킴 클리스터스 아카데미에서 훈련하며 대선배의 멘토링을 받았습니다. 가정 학습(홈스쿨링)을 병행하며 테니스에 매진했고, 성인이 되자마자 투어에 안착했습니다.</p>
            `,
      signatureMatch: {
        title: "2018 호주 오픈 8강 vs 엘리나 스비톨리나",
        date: "2018. 01. 23",
        description:
          "세계 무대에 이름을 알린 경기. 당시 Top 5였던 스비톨리나를 상대로 6-4, 6-0 베이글 스코어를 기록하며 완승했습니다. 메이저 4강 진출의 쾌거를 이뤘습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐶 "동물 애호가"</div>
                    <p>집에 4마리의 개와 많은 새를 키울 정도로 동물을 사랑합니다. 또한 킴 클리스터스와 자주 비교되며 벨기에 팬들의 전폭적인 지지를 받고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"복식은 최강, 단식은 꾸준"</strong></p>
                <p>2024년 호주 오픈 복식 우승(셰쑤웨이와 파트너)을 차지하며 여전한 클래스를 과시했습니다. 단식에서도 30위를 굳건히 지키고 있습니다.</p>
            `,
      faq: [
        {
          question: "메르텐스의 훈련지는?",
          answer:
            '벨기에의 "킴 클리스터스 아카데미" 출신이며, 클리스터스가 롤모델이자 멘토입니다.',
        },
        {
          question: "그녀의 복식 파트너는?",
          answer:
            '사바렌카, 셰쑤웨이, 쟝 슈아이 등 다양한 선수들과 호흡을 맞춰 우승을 합작했습니다. "누구와 짝을 이뤄도 우승하는" 능력이 있습니다.',
        },
      ],
    },
  },
  "donna-vekic-legacy": {
    name: "돈나 베키치",
    nameEn: "Donna Vekic",
    country: "Croatia",
    countryFlag: "🇭🇷",
    image: "/images/players/donna-vekic.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "강력한 서브와 포핸드를 겸비한 크로아티아의 스타. 2024 파리 올림픽 은메달리스트로, 오랜 부상을 딛고 제2의 전성기를 맞이했습니다.",
    detailedProfile: {
      oneLineSummary:
        '2024 파리 올림픽 은메달리스트, 사업가이자 테니스 스타인 크로아티아의 "슈퍼우먼".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥈 "파리의 기적, 올림픽 은메달"</div>
                    <p>2024 파리 올림픽 결승에 진출하여 은메달을 목에 걸었습니다. 윔블던 4강(2024)에 이어 올림픽 메달까지 획득하며 커리어 최고의 해를 보냈습니다. 끊임없는 부상과 은퇴 고민을 이겨내고 거둔 성과라 더욱 값졌습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"빅 히터 (Big Hitter)"</strong></p>
                <p>시원시원한 공격 테니스를 구사합니다. 특히 강력한 서브와 포핸드로 상대를 압박하는 스타일입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 투어에서 손꼽히는 강서브를 보유했습니다. 중요한 포인트에서 에이스를 터뜨립니다.</li>
                    <li><strong>포핸드:</strong> 역크로스 포핸드가 주무기입니다.</li>
                    <li><strong>드롭샷:</strong> 힘으로 밀어붙이다가 기습적으로 놓는 드롭샷이 일품입니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "서브 (Serve)", score: 9, description: "주무기." },
        { name: "파워 (Power)", score: 9, description: "묵직함." },
        { name: "멘탈 (Mental)", score: 8.5, description: "성숙해짐." },
        { name: "이동 (Movement)", score: 7, description: "무릎 부상 여파." },
        {
          name: "수비 (Defense)",
          score: 7,
          description: "공격이 최선의 수비.",
        },
        {
          name: "사업수완 (Business)",
          score: 10,
          description: "향초 브랜드 CEO.",
        },
      ],
      growthStory: `
                <p>크로아티아 오시예크 출신입니다. 16세에 투어 결승에 오르며 '천재 소녀'로 주목받았으나, 무릎 수술 등으로 긴 슬럼프를 겪었습니다. 은퇴까지 고려했으나 불굴의 의지로 재활에 성공, 2023-2024년 화려하게 부활했습니다.</p>
            `,
      signatureMatch: {
        title: "2024 윔블던 8강 vs 룰루 선",
        date: "2024. 07. 09",
        description:
          "커리어 첫 윔블던 4강 진출. 예선 통과자 돌풍을 일으킨 룰루 선을 잠재우고 승리했습니다. 비가 오락가락하는 악조건 속에서도 집중력을 잃지 않았습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🕯️ "향기 나는 CEO"</div>
                    <p>고급 향초 브랜드 'DNNA'를 런칭하여 성공시킨 사업가이기도 합니다. 테니스와 비즈니스 두 마리 토끼를 모두 잡은 능력자이자, 화려한 외모로 많은 팬을 거느리고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"커리어 정점"</strong></p>
                <p>올림픽 은메달과 윔블던 4강으로 세계 랭킹이 다시 Top 20에 진입했습니다. 이제는 그랜드슬램 우승을 정조준하고 있습니다.</p>
            `,
      faq: [
        {
          question: "베키치의 브랜드는 무엇인가요?",
          answer:
            '천연 밀랍으로 만든 럭셔리 향초 브랜드 "DNNA"의 설립자이자 CEO입니다. 수익금 일부를 벌 보존에 기부합니다.',
        },
        {
          question: "파리 올림픽 결승 상대는?",
          answer:
            "중국의 정친원과 맞붙어 아쉽게 패배했지만, 크로아티아 테니스 역사에 남을 명승부였습니다.",
        },
      ],
    },
  },
  "marie-bouzkova": {
    name: "마리 부즈코바",
    nameEn: "Marie Bouzkova",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    image: "/images/players/marie-bouzkova.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "코트 위의 에너자이저. 끈질긴 수비와 지치지 않는 체력으로 상대를 지치게 만들며, 항상 미소를 잃지 않는 스포츠맨십으로 사랑받습니다.",
    detailedProfile: {
      oneLineSummary:
        '결코 포기하지 않는 체코의 "스마일 에너자이저", 수비 테니스의 진수.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😊 "WTA 스포츠맨십 상의 단골"</div>
                    <p>동료 선수들이 뽑은 '가장 매너 좋은 선수'(Karen Krantzcke Sportsmanship Award) 상을 수상할 정도로 인성이 훌륭합니다. 경기 중에도 미소를 잃지 않으며, 심판 판정에도 정중하게 대응하는 모습이 귀감이 됩니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"끈질긴 수비형 카운터 펀처"</strong></p>
                <p>어떤 공이든 다 받아넘깁니다. 상대가 "이제 끝났다"고 생각한 순간에 공이 다시 넘어옵니다. 긴 랠리를 유도하여 상대의 체력과 멘탈을 무너뜨립니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>체력:</strong> 마라토너급 체력을 자랑합니다. 3시간 경기도 거뜬합니다.</li>
                    <li><strong>백핸드:</strong> 매우 안정적이고 플랫하게 깔립니다.</li>
                    <li><strong>전략:</strong> 상대의 힘을 이용하는 능력이 탁월하며, 실수 유발이 주특기입니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "수비 (Defense)", score: 10, description: "통곡의 벽." },
        { name: "체력 (Stamina)", score: 10, description: "무한 동력." },
        { name: "매너 (Manner)", score: 10, description: "천사표." },
        {
          name: "파워 (Power)",
          score: 5,
          description: "스스로 끝내는 힘 부족.",
        },
        { name: "서브 (Serve)", score: 6, description: "약한 편." },
        { name: "멘탈 (Mental)", score: 9, description: "긍정의 힘." },
      ],
      growthStory: `
                <p>체코 프라하 출신입니다. 10대 때 미국 플로리다의 볼리티에리 아카데미에서 2년간 훈련했습니다. 2014 US 오픈 주니어 우승자 출신이며, 성인 무대에서는 2022년 윔블던 8강에 오르며 잠재력을 터뜨렸습니다.</p>
            `,
      signatureMatch: {
        title: "2022 윔블던 16강 vs 카롤린 가르시아",
        date: "2022. 07. 03",
        description:
          "최고의 수비력을 보여준 경기. 당시 8연승 중이던 가르시아의 맹공을 온몸으로 막아내며 2-0 승리를 거뒀습니다. 잔디 코트에서도 수비 테니스가 통할 수 있음을 보여주었습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥤 "물병 세레머니"</div>
                    <p>경기 중 휴식 시간마다 꼼꼼하게 메모를 확인하고, 거대한 물병을 항상 지니고 다녀 팬들에게 소소한 재미를 줍니다. 특유의 밝은 에너지가 매력 포인트입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"꾸준한 중상위권"</strong></p>
                <p>Top 30~40위권을 꾸준히 유지하고 있습니다. 폭발적인 한 방은 없지만, 누구를 만나도 쉽게 지지 않는 까다로운 상대로 자리 잡았습니다.</p>
            `,
      faq: [
        {
          question: "부즈코바가 영어를 잘하는 이유는?",
          answer:
            "어린 시절 미국 플로리다에서 유학 생활을 하여 원어민 수준의 영어를 구사합니다. 스페인어도 유창합니다.",
        },
        {
          question: "그녀의 전공은?",
          answer:
            "인디애나 대학교 이스트(Indiana University East)에서 경영학 학위를 취득한 주경야독형 선수입니다.",
        },
      ],
    },
  },
  "katerina-siniakova": {
    name: "카테리나 시니아코바",
    nameEn: "Katerina Siniakova",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    image: "/images/players/katerina-siniakova.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "현역 최고의 복식 여제 중 한 명. 그랜드슬램 복식 전관왕(골든 슬램)을 달성했으며, 단식에서도 특유의 투지와 네트 플레이로 경쟁력을 보여줍니다.",
    detailedProfile: {
      oneLineSummary:
        '복식 커리어 골든 슬램 달성, 단식까지 섭렵한 체코의 "파마머리 전사".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "복식의 살아있는 전설"</div>
                    <p>바르보라 크레이치코바와 짝을 이뤄 4대 그랜드슬램과 올림픽 금메달(2020 도쿄)을 모두 휩쓴 <strong>'커리어 골든 슬램'</strong> 달성자입니다. 2024 파리 올림픽에서는 혼합 복식 금메달까지 추가하며 복식 테니스의 신(God)으로 등극했습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"네트 플레이의 달인"</strong></p>
                <p>단식에서도 복식처럼 플레이합니다. 기회만 되면 네트로 대시하여 발리로 끊어냅니다. 코트 커버 범위가 넓고 반응 속도가 동물적입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>발리:</strong> 투어 전체를 통틀어 가장 발리를 잘하는 선수 중 한 명입니다.</li>
                    <li><strong>투지:</strong> 공 하나하나에 목숨을 건 듯 소리를 지르며 뜁니다. 승부욕이 엄청납니다.</li>
                    <li><strong>무브먼트:</strong> 예측 불가능한 공도 몸을 날려 받아냅니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "복식 (Doubles)", score: 10, description: "GOAT 레벨." },
        { name: "네트 (Net)", score: 10, description: "환상적임." },
        { name: "투지 (Spirit)", score: 9.5, description: "전사 그 자체." },
        { name: "체력 (Stamina)", score: 9, description: "단/복식 모두 소화." },
        { name: "서브 (Serve)", score: 6.5, description: "약점." },
        { name: "멘탈 (Mental)", score: 7, description: "자책이 심함." },
      ],
      growthStory: `
                <p>체코 흐라데츠크랄로베 출신입니다. 러시아인 아버지와 체코인 어머니 사이에서 태어났습니다. 주니어 시절부터 크레이치코바와 호흡을 맞춰 세계를 제패했으며, 성인이 되어서도 그 파트너십을 이어가 전설을 썼습니다. (2024년 잠시 결별 후 각자의 길을 걷고 있습니다.)</p>
            `,
      signatureMatch: {
        title: "2024 프랑스 오픈 복식 결승",
        date: "2024. 06. 09",
        description:
          '코코 가우프와 짝을 이뤄 우승한 경기. 크레이치코바가 아닌 새로운 파트너와도 메이저 우승을 차지하며, 자신이 "복식의 치트키"임을 증명했습니다.',
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 "사자머리"</div>
                    <p>풍성한 뽀글머리(파마머리)가 트레이드마크입니다. 코트 위에서 감정을 격렬하게 표현하는 모습이 마치 사자가 포효하는 것 같아 인상적입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"단식 랭킹 상승세"</strong></p>
                <p>복식에 가려져 있었지만, 최근 단식에서도 투어 우승(2023 바트홈부르크, 난창)을 차지하며 Top 30~40위권을 유지하고 있습니다. 이제는 단식 선수로서의 명성도 쌓아가고 있습니다.</p>
            `,
      faq: [
        {
          question: "시니아코바의 복식 파트너는?",
          answer:
            "오랫동안 바르보라 크레이치코바와 짝이었으나, 2024년부터는 코코 가우프, 타일러 타운센드 등 다양한 선수와 호흡을 맞추고 있습니다.",
        },
        {
          question: "그녀의 남자 친구는?",
          answer:
            "동료 테니스 선수인 토마스 마하치(Tomas Machac)와 공개 연애 중이며, 파리 올림픽 혼합 복식에서 함께 금메달을 따 영화 같은 스토리를 만들었습니다.",
        },
      ],
    },
  },
  "caroline-garcia-legacy": {
    name: "카롤린 가르시아",
    nameEn: "Caroline Garcia",
    country: "France",
    countryFlag: "🇫🇷",
    image: "/images/players/caroline-garcia.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '공격적인 리턴 포지스("Fly with Caro")과 다이내믹한 플레이가 특징입니다. WTA 파이널스 우승 경험이 있는 프랑스의 에이스입니다.',
    detailedProfile: {
      oneLineSummary:
        'WTA 파이널스 챔피언, 코트 안쪽으로 파고드는 "닥공(닥치고 공격)" 테니스의 선봉장.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">✈️ "Fly With Caro"</div>
                    <p>득점 후 양팔을 벌리고 비행기처럼 뛰는 세레머니가 그녀의 트레이드마크입니다. 2022년 하반기 신들린듯한 경기력으로 신시내티 우승, US 오픈 4강, 그리고 왕중왕전인 <strong>WTA 파이널스 우승</strong>까지 차지하며 세계 4위로 시즌을 마감한 저력이 있습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"울트라 어그레시브 (Ultra Aggressive)"</strong></p>
                <p>베이스라인 안쪽 깊숙이 들어가서 리턴을 받아칩니다. 상대 서브가 바운드 되자마자 때려버리기 때문에 상대가 반응할 시간이 없습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>리턴 포지션:</strong> 투어에서 가장 앞에서 리턴을 받는 선수입니다.</li>
                    <li><strong>서브:</strong> 에이스 능력이 탁월합니다. 킥 서브와 플랫 서브를 적절히 섞습니다.</li>
                    <li><strong>기복:</strong> 공격 성공률이 떨어지는 날에는 허무하게 무너지는 경우도 있습니다.</li>
                </ul>
            `,
      hexagonStats: [
        {
          name: "공격성 (Aggression)",
          score: 10,
          description: "타의 추종을 불허함.",
        },
        { name: "서브 (Serve)", score: 9, description: "톱 클래스." },
        {
          name: "운동신경 (Athleticism)",
          score: 9,
          description: "탄력이 좋음.",
        },
        { name: "멘탈 (Mental)", score: 7, description: "감정 변화가 큼." },
        { name: "수비 (Defense)", score: 6, description: "공격 실패 시 취약." },
        {
          name: "복식 (Doubles)",
          score: 9,
          description: "프랑스 오픈 챔피언.",
        },
      ],
      growthStory: `
                <p>프랑스 생제르맹앙레 출신입니다. 아버지의 지도로 테니스를 배웠으며, 주니어 시절부터 앤디 머레이가 "미래의 세계 1위"라고 지목했을 정도로 재능을 인정받았습니다. 단식과 복식(크리스티나 믈라데노비치와 파트너) 모두에서 그랜드슬램 타이틀(복식)을 따냈습니다.</p>
            `,
      signatureMatch: {
        title: "2022 WTA 파이널스 결승 vs 아리나 사바렌카",
        date: "2022. 11. 07",
        description:
          "커리어의 정점. 파워 히터 사바렌카를 상대로 서브와 리턴에서 모두 압도하며 2-0(7-6, 6-4) 승리를 거두고 우승 상금과 명예를 모두 거머쥐었습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇫🇷 "프랑스의 자존심"</div>
                    <p>모레스모, 피르스 이후 프랑스 여자 테니스를 이끄는 에이스입니다. 홈 관중의 열광적인 응원을 받으며, 열정적인 경기 매너로 팬들을 사로잡습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"재도약 준비"</strong></p>
                <p>2023-2024년에는 다소 기복 있는 모습을 보이며 Top 20 밖으로 밀려났지만, 언제든지 우승할 수 있는 폭발력을 가지고 있습니다.</p>
            `,
      faq: [
        {
          question: "그녀의 코치는?",
          answer:
            "오랫동안 아버지 루이 폴 가르시아가 코치를 맡았으나, 2021년부터는 외부 코치진과 협업하며 변화를 시도하고 있습니다.",
        },
        {
          question: "가르시아의 팟캐스트?",
          answer:
            '"Tennis Insider Club"이라는 팟캐스트를 동료 선수와 함께 진행하며 테니스계의 비하인드 스토리를 전하고 있습니다.',
        },
      ],
    },
  },
  "anhelina-kalinina": {
    name: "안헬리나 칼리니나",
    nameEn: "Anhelina Kalinina",
    country: "Ukraine",
    countryFlag: "🇺🇦",
    image: "/images/players/anhelina-kalinina.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "우크라이나 테니스의 주축. 클레이 코트에서 강점을 보이며, 탄탄한 기본기를 바탕으로 로마 마스터스 결승에 오르는 저력을 보여주었습니다.",
    detailedProfile: {
      oneLineSummary:
        '로마 마스터스 준우승의 주인공, 우크라이나의 "굳건한 멘탈".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇦 "전쟁 속에 피어난 희망"</div>
                    <p>조국의 어려운 상황 속에서도 2023 로마 마스터스(WTA 1000) 결승에 진출하며 우크라이나 국민들에게 큰 위로와 희망을 주었습니다. 경기장 밖에서도 적극적으로 목소리를 내며 평화를 호소하는 소신 있는 선수입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"클레이 코트 스페셜리스트 & 카운터 펀처"</strong></p>
                <p>안정적인 스트로크를 바탕으로 긴 랠리를 즐깁니다. 무리한 공격보다는 상대의 실수를 유도하고, 기회가 왔을 때 정확한 샷으로 득점합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 매우 견고하며, 앵글 샷을 잘 구사합니다.</li>
                    <li><strong>인내심:</strong> 어떤 상황에서도 쉽게 포기하지 않는 끈기가 강점입니다.</li>
                    <li><strong>체력:</strong> 3시간이 넘는 혈투도 마다하지 않는 강철 체력을 가졌습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "체력 (Stamina)", score: 9.5, description: "장기전 강자." },
        { name: "멘탈 (Mental)", score: 9, description: "애국심 버프." },
        { name: "수비 (Defense)", score: 8.5, description: "끈질김." },
        { name: "파워 (Power)", score: 6.5, description: "평범함." },
        { name: "서브 (Serve)", score: 6, description: "약한 편." },
        { name: "클레이 (Clay)", score: 9, description: "주무대." },
      ],
      growthStory: `
                <p>우크라이나 노바 카호프카 출신입니다. 주니어 시절  US 오픈 주니어 준우승을 차지했습니다. 프로 데뷔 후 오랫동안 빛을 보지 못하다가 20대 중반인 2022년부터 급성장하여 세계 랭킹 25위권에 진입했습니다.</p>
            `,
      signatureMatch: {
        title: "2023 로마 마스터스 4강 vs 베로니카 쿠데르메토바",
        date: "2023. 05. 20",
        description:
          "감동의 명승부. 3시간 가까운 접전 끝에 2-1 승리를 거두고 생애 첫 WTA 1000 시리즈 결승에 올랐습니다. 승리 후 눈물을 흘리며 조국에 영광을 돌렸습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💪 "투혼의 아이콘"</div>
                    <p>부상을 당해도 테이핑을 감고 끝까지 뛰는 투혼을 자주 보여줍니다. 그녀의 경기는 단순한 스포츠 그 이상의 감동을 줍니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"부상 회복과 재도약"</strong></p>
                <p>크고 작은 부상으로 약간의 부침이 있지만, 여전히 Top 30~50위권을 유지하며 투어의 허리 역할을 하고 있습니다. 2024년 스트라스부르, 루앙 등에서 준수한 성적을 냈습니다.</p>
            `,
      faq: [
        {
          question: "그녀의 가족은 어디에 있나요?",
          answer:
            "부모님과 오빠는 여전히 우크라이나에 머물고 있으며, 칼린스카야는 상금을 보내 가족들을 지원하고 있습니다.",
        },
        {
          question: "가장 좋아하는 코트는?",
          answer:
            "클레이 코트를 가장 선호합니다. 공의 바운드가 높고 랠리가 길어지는 환경에서 강점을 발휘합니다.",
        },
      ],
    },
  },
  "lesia-tsurenko": {
    name: "레시아 추렌코",
    nameEn: "Lesia Tsurenko",
    country: "Ukraine",
    countryFlag: "🇺🇦",
    image: "/images/players/lesia-tsurenko.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "투어 경험이 풍부한 베테랑. 부상을 자주 겪으면서도 오뚝이처럼 다시 일어서는 정신력의 소유자로, 카운터 펀치 능력이 뛰어납니다.",
    detailedProfile: {
      oneLineSummary: '부상을 딛고 일어서는 "오뚝이", 우크라이나의 백전노장.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🩹 "부상 병동? NO, 불사조!"</div>
                    <p>커리어 내내 수많은 부상에 시달렸지만, 그때마다 다시 재활에 성공하여 코트로 돌아오는 불굴의 의지를 가진 선수입니다. 30대 중반의 나이에도 여전히 Top 100 안에서 경쟁력을 발휘하며, 2023 윔블던 16강에 오르는 등 '클래스는 영원하다'를 증명하고 있습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"지능적인 베이스라이너"</strong></p>
                <p>화려한 파워보다는 정교한 코스 공략과 안정적인 랠리로 승부합니다. 상대의 힘을 역이용하는 능력이 뛰어납니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 그녀의 가장 믿음직한 무기입니다. 다운더라인 백핸드가 날카롭습니다.</li>
                    <li><strong>수비:</strong> 코트 커버력이 좋고, 어려운 공도 끈질기게 받아넘깁니다.</li>
                    <li><strong>서브:</strong> 강하지는 않지만 코스 선택이 다양합니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "경험 (Experience)", score: 10, description: "산전수전." },
        { name: "멘탈 (Mental)", score: 8.5, description: "포기하지 않음." },
        { name: "수비 (Defense)", score: 8, description: "탄탄함." },
        { name: "백핸드 (Backhand)", score: 8.5, description: "주무기." },
        { name: "체력 (Stamina)", score: 6, description: "부상 변수." },
        { name: "파워 (Power)", score: 6, description: "약한 편." },
      ],
      growthStory: `
                <p>우크라이나 볼로디미레츠 출신입니다. 아버지도 전력 발전소에서 일하는 등 평범한 가정에서 자랐으나, 테니스에 재능을 보여 프로의 길로 들어섰습니다. 4개의 WTA 투어 타이틀(아카풀코 등)을 보유하고 있습니다.</p>
            `,
      signatureMatch: {
        title: "2023 윔블던 3회전 vs 아나 보그단",
        date: "2023. 07. 07",
        description:
          "그랜드슬램 역사상 최장 타이 브레이크(38점). 3시간 40분의 혈투 끝에 마지막 세트 타이브레이크를 20-18로 이기며 승리했습니다. 두 선수 모두 탈진할 정도의 명승부였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧘 "침착함의 미학"</div>
                    <p>경기 중 좀처럼 흥분하지 않고 차분하게 경기를 풀어나갑니다. 후배 선수들에게 많은 조언을 해주는 든든한 맏언니 역할을 하고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"마지막 불꽃"</strong></p>
                <p>여전히 그랜드슬램 본선에 직행할 수 있는 랭킹을 유지하고 있습니다. 베테랑의 품격을 보여주며 매 경기 최선을 다하고 있습니다.</p>
            `,
      faq: [
        {
          question: "추렌코의 최고 랭킹은?",
          answer: "2019년에 세계 랭킹 23위까지 올랐습니다.",
        },
        {
          question: "그녀의 은퇴 계획은?",
          answer:
            "구체적인 계획은 밝히지 않았으나, 몸이 허락하는 한 계속해서 투어 생활을 이어가고 싶다는 의지를 보였습니다.",
        },
      ],
    },
  },
  "magda-linette": {
    name: "마그다 리네트",
    nameEn: "Magda Linette",
    country: "Poland",
    countryFlag: "🇵🇱",
    image: "/images/players/magda-linette.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "성실함의 대명사. 30대에 접어들어 2023 호주 오픈 4강에 진출하며 커리어 하이를 찍은 대기만성형 플레이어입니다.",
    detailedProfile: {
      oneLineSummary:
        '30대에 커리어 하이를 찍은 폴란드의 "대기만성", 노력의 아이콘.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">⏳ "늦게 핀 꽃이 더 아름답다"</div>
                    <p>이가 시비옹테크의 그늘에 가려져 있던 폴란드의 2인자였으나, 2023 호주 오픈에서 기적 같은 4강 진출을 이뤄내며 전 세계를 놀라게 했습니다. 30세가 넘은 나이에 전성기를 맞이한 그녀의 스토리는 많은 이들에게 영감을 줍니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"안정적인 카운터 펀처"</strong></p>
                <p>매우 교과서적인 폼을 가지고 있습니다. 무리하지 않고 코스 구석구석을 찌르는 정교한 플레이가 강점입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 다운더라인 백핸드는 그녀의 필살기입니다.</li>
                    <li><strong>이동:</strong> 발이 빠르고 코트 커버가 넓습니다.</li>
                    <li><strong>전략:</strong> 상대의 약점을 파고드는 지능적인 플레이를 합니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "노력 (Effort)", score: 10, description: "성실함 그 자체." },
        { name: "백핸드 (Backhand)", score: 9, description: "매우 정확함." },
        { name: "이동 (Movement)", score: 8.5, description: "민첩함." },
        { name: "멘탈 (Mental)", score: 8, description: "차분함." },
        {
          name: "파워 (Power)",
          score: 6.5,
          description: "결정력은 다소 부족.",
        },
        { name: "서브 (Serve)", score: 7, description: "평균적." },
      ],
      growthStory: `
                <p>폴란드 포즈난 출신입니다. 아버지도 테니스 코치입니다. 주니어 시절부터 두각을 나타냈으나, 성인 무대에서는 오랫동안 Top 50-100 사이를 오가는 평범한 선수였습니다. 하지만 포기하지 않고 꾸준히 노력한 끝에 30대에 빛을 보게 되었습니다.</p>
            `,
      signatureMatch: {
        title: "2023 호주 오픈 8강 vs 카롤리나 플리스코바",
        date: "2023. 01. 25",
        description:
          "생애 첫 메이저 4강 확정. 강서브를 자랑하는 전 세계 1위 플리스코바를 상대로 리턴과 스트로크 대결에서 완승(6-3, 7-5)을 거뒀습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">☺️ "옆집 언니"</div>
                    <p>친근하고 소탈한 성격으로 팬들과 적극적으로 소통합니다. SNS에 올리는 유머러스한 게시물들이 화제가 되기도 합니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"제2의 전성기 지속"</strong></p>
                <p>2024년에도 프라하 오픈 우승(클레이)을 차지하며 건재함을 과시했습니다. 하드, 잔디, 클레이를 가리지 않고 고른 성적을 내고 있습니다.</p>
            `,
      faq: [
        {
          question: "리네트의 취미는?",
          answer:
            "패션과 여행에 관심이 많으며, 특히 신발(스니커즈) 수집을 좋아한다고 합니다.",
        },
        {
          question: "시비옹테크와의 관계는?",
          answer:
            "매우 좋습니다. 빌리 진 킹 컵 등 국가대항전에서 함께 폴란드를 대표해 뛰며 서로를 응원합니다.",
        },
      ],
    },
  },
  "sofia-kenin": {
    name: "소피아 케닌",
    nameEn: "Sofia Kenin",
    country: "United States",
    countryFlag: "🇺🇸",
    image: "/images/players/sofia-kenin.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "2020 호주 오픈 챔피언. 작은 체구에도 불구하고 뛰어난 타이밍과 코트 커버력, 그리고 강한 승부근성이 돋보이는 선수입니다.",
    detailedProfile: {
      oneLineSummary:
        '2020 호주 오픈 챔피언, 거인들을 쓰러뜨리는 "소닉(Sonic)" 같은 스피드와 기술.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "언더독의 반란"</div>
                    <p>2020년 호주 오픈에서 21세의 나이로 우승하며 세계를 깜짝 놀라게 했습니다. 결승에서 가르비녜 무구루사를 꺾었고, 같은 해 롤랑가로스에서도 준우승을 차지하며 "원 히트 원더"가 아님을 증명했습니다. 독특한 플레이 스타일과 불타는 승부욕으로 유명합니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"지능적인 카운터 펀처"</strong></p>
                <p>힘으로 제압하기보다는 타이밍과 코스로 승부합니다. 공을 라이징(바운드되자마자)으로 처리하여 상대의 시간을 뺏는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>드롭샷:</strong> 투어 최고 수준의 드롭샷을 구사합니다. 예측할 수 없는 타이밍에 툭 떨어뜨립니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드가 매우 정확하며 위너를 많이 만들어냅니다.</li>
                    <li><strong>서브:</strong> 토스 높이가 일정하지 않아 읽기 어렵지만, 이로 인해 서브 난조를 겪기도 합니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "기술 (Technique)", score: 9.5, description: "드롭샷 장인." },
        { name: "멘탈 (Mental)", score: 8, description: "승부욕이 강함." },
        { name: "스피드 (Speed)", score: 9, description: "다람쥐처럼 빠름." },
        { name: "타이밍 (Timing)", score: 9.5, description: "박자 뺏기." },
        { name: "파워 (Power)", score: 6.5, description: "평범함." },
        { name: "서브 (Serve)", score: 6, description: "기복이 심함." },
      ],
      growthStory: `
                <p>러시아 모스크바에서 태어났지만 어릴 때 가족과 함께 미국으로 이주했습니다. '테니스 신동'으로 불리며 각종 TV 쇼에 출연했고, 5살 때 킴 클리스터스의 손을 잡고 경기장에 입장한 영상이 유명합니다. 아버지 알렉스 케닌의 독특한 지도를 받으며 성장했습니다.</p>
            `,
      signatureMatch: {
        title: "2020 호주 오픈 결승 vs 가르비녜 무구루사",
        date: "2020. 02. 01",
        description:
          "그랜드슬램 우승의 순간. 첫 메이저 결승임에도 전혀 주눅 들지 않고, 3세트 중요한 순간마다 위너를 터뜨리며 역전승(4-6, 6-2, 6-2)을 거뒀습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇸 "아메리칸 드림"</div>
                    <p>이민자 가정에서 성공 신화를 쓴 주인공입니다. 경기 중 끊임없이 혼잣말을 하거나 라켓을 던지는 등 감정 표현이 솔직하여 팬들의 호불호가 갈리지만, 그만큼 열정적입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"부진 탈출 중"</strong></p>
                <p>우승 이후 긴 슬럼프와 부상을 겪으며 랭킹이 400위권까지 떨어졌었으나, 2023 윔블던 3회전, 샌디에이고 준우승 등으로 다시 Top 50에 복귀하며 부활의 신호탄을 쏘아 올렸습니다.</p>
            `,
      faq: [
        {
          question: "케닌의 별명은?",
          answer:
            '"소닉(Sonic)"입니다. 닌텐도 캐릭터 소닉처럼 빠르고 에너지가 넘쳐서 붙여진 별명입니다.',
        },
        {
          question: "그녀의 코치는?",
          answer:
            "아버지 알렉스 케닌과 오랫동안 함께했으나, 성적 부진으로 인해 결별과 재결합을 반복하고 있습니다.",
        },
      ],
    },
  },
  "paula-badosa": {
    name: "파울라 바도사",
    nameEn: "Paula Badosa",
    country: "Spain",
    countryFlag: "🇪🇸",
    image: "/images/players/paula-badosa.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "강력한 베이스라인 플레이가 강점인 스페인의 스타. 부상을 딛고 다시 랭킹을 끌어올리고 있는 저력의 선수입니다.",
    detailedProfile: {
      oneLineSummary:
        '스페인의 열정을 담은 "파워 히터", 부상을 딛고 돌아온 테니스 여신.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇪🇸 "샤라포바의 후예?"</div>
                    <p>큰 키와 강력한 스트로크, 그리고 스타성 때문에 마리아 샤라포바와 자주 비교되었습니다. 2021년 인디언 웰스 우승으로 세계 2위까지 올랐으나, 등 부상으로 은퇴 위기까지 겪었습니다. 하지만 2024년, 기적처럼 부활하여 다시 투어를 호령하고 있습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"공격적인 베이스라이너"</strong></p>
                <p>묵직한 서브와 강력한 그라운드 스트로크로 상대를 힘으로 누릅니다. 특히 하드 코트에서 공의 스피드가 배가됩니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 투어 상위권의 서브 스피드(시속 190km 이상)를 자랑합니다.</li>
                    <li><strong>포핸드:</strong> 역크로스 포핸드가 위력적이며, 위너를 만들어내는 주무기입니다.</li>
                    <li><strong>멘탈:</strong> 과거에는 멘탈이 약점이었으나, 심리 치료와 경험을 통해 훨씬 단단해졌습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "파워 (Power)", score: 9.5, description: "최상급." },
        { name: "서브 (Serve)", score: 9, description: "에이스 제조." },
        { name: "스타성 (Star)", score: 10, description: "슈퍼스타." },
        { name: "체력 (Stamina)", score: 6, description: "부상 관리 필수." },
        { name: "멘탈 (Mental)", score: 8, description: "성숙해짐." },
        { name: "수비 (Defense)", score: 7, description: "나쁘지 않음." },
      ],
      growthStory: `
                <p>미국 뉴욕 맨해튼에서 태어났지만, 7살 때 스페인으로 돌아가 바르셀로나에서 성장했습니다. 어릴 때부터 엘리트 코스를 밟았지만, 과도한 기대에 대한 부담감으로 우울증을 겪기도 했습니다. 이를 극복하고 세계 정상급 선수로 성장한 인간 승리의 주인공입니다.</p>
            `,
      signatureMatch: {
        title: "2021 인디언 웰스 결승 vs 빅토리아 아자렌카",
        date: "2021. 10. 17",
        description:
          "커리어 첫 WTA 1000 우승. 전 세계 1위 아자렌카와 3시간 4분의 혈투 끝에 2-1(7-6, 2-6, 7-6)로 승리했습니다. 대회 역사상 최고의 결승전 중 하나로 꼽힙니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💑 "치치파스티토스 (Tsitsidosa)"</div>
                    <p>그리스의 테니스 스타 스테파노스 치치파스와 공개 연애 중입니다. 두 선수는 SNS에 커플 계정을 운영하며 테니스계 최고의 '파워 커플'로 사랑받고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"화려한 부활"</strong></p>
                <p>2024년 워싱턴 오픈 우승을 차지하며 부상 공백을 완벽하게 메웠습니다. 랭킹도 수직 상승하여 다시 시드권에 진입했습니다.</p>
            `,
      faq: [
        {
          question: "그녀의 별명은?",
          answer:
            '부모님이 패션업계에 종사해서인지 패션 감각이 뛰어나 "테니스계의 모델"로도 불립니다.',
        },
        {
          question: "사용하는 라켓은?",
          answer: "윌슨 블레이드(Wilson Blade) 98을 사용합니다.",
        },
      ],
    },
  },
  "karolina-muchova": {
    name: "카롤리나 무호바",
    nameEn: "Karolina Muchova",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    image: "/images/players/karolina-muchova.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '올라운드 플레이어의 정석. 다양한 구질과 네트 플레이, 슬라이스를 자유자재로 구사하며 "테니스를 가장 예쁘게 치는 선수" 중 한 명으로 꼽힙니다. 2023 롤랑가로스 준우승자.',
    detailedProfile: {
      oneLineSummary:
        '2023 롤랑가로스 준우승, 테니스를 예술로 승화시키는 체코의 "테크니션".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎨 "코트 위의 예술가"</div>
                    <p>현대 테니스에서 보기 드문 <strong>'올라운드 플레이'의 정석</strong>을 보여줍니다. 단순히 공을 세게 치는 것이 아니라, 네트 플레이, 드롭샷, 로브, 슬라이스 등 모든 기술을 완벽하게 구사합니다. 테니스 전설 크리스 에버트가 "남자 선수처럼 플레이한다(긍정적 의미)"고 극찬했을 정도입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"클래식 올라운더"</strong></p>
                <p>서브 앤 발리를 자주 구사하며, 네트 앞에서의 움직임이 환상적입니다. 상대의 허를 찌르는 창의적인 플레이가 일품입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>발리:</strong> 투어 최고의 발리 능력을 보유했습니다. 터치감이 예술입니다.</li>
                    <li><strong>슬라이스:</strong> 백핸드 슬라이스를 공격적으로 활용하여 상대의 리듬을 끊습니다.</li>
                    <li><strong>움직임:</strong> 부드럽고 우아한 풋워크로 코트 전체를 누빕니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "기술 (Technique)", score: 10, description: "마스터피스." },
        { name: "네트 (Net)", score: 10, description: "발리 장인." },
        { name: "창의성 (Creativity)", score: 10, description: "예측 불가." },
        { name: "파워 (Power)", score: 7.5, description: "적절함." },
        { name: "체력 (Stamina)", score: 6.5, description: "유리몸." },
        { name: "서브 (Serve)", score: 8.5, description: "코스가 좋음." },
      ],
      growthStory: `
                <p>체코 올로모우츠 출신입니다. 아버지는 체코 프로축구 선수 출신입니다. 어릴 때부터 다양한 운동을 섭렵하여 뛰어난 운동 신경을 갖췄습니다. 프로 데뷔 후 잦은 부상으로 고전했지만, 건강할 때만큼은 Top 10 레벨임을 증명해왔습니다.</p>
            `,
      signatureMatch: {
        title: "2023 롤랑가로스 4강 vs 아리나 사바렌카",
        date: "2023. 06. 08",
        description:
          "기적의 대역전극. 3세트 2-5로 뒤지며 매치 포인트까지 몰렸으나, 믿을 수 없는 집중력으로 5게임 연속 따내며 7-5로 역전승했습니다. ",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎸 "음악을 사랑하는 소녀"</div>
                    <p>기타 연주와 노래 실력이 수준급입니다. 코트 밖에서는 수줍음 많은 평범한 음악 애호가의 모습을 보여줍니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"부상과의 전쟁"</strong></p>
                <p>2023년 US 오픈 4강 이후 손목 수술로 장기간 결장했습니다. 2024년 6월, 9개월 만에 복귀하여 다시 감각을 끌어올리고 있습니다. 팬들은 그녀가 건강하게 시즌을 치르기만을 기도하고 있습니다.</p>
            `,
      faq: [
        {
          question: "무호바의 롤모델은?",
          answer:
            "로저 페더러입니다. 그녀의 우아한 플레이 스타일은 페더러의 영향을 많이 받았습니다.",
        },
        {
          question: "가장 좋아하는 대회는?",
          answer:
            "US 오픈과 멜버른(호주 오픈)을 좋아한다고 밝혔으나, 성적은 클레이인 롤랑가로스에서 가장 좋았습니다.",
        },
      ],
    },
  },
  "ajla-tomljanovic": {
    name: "아일라 톰얀로비치",
    nameEn: "Ajla Tomljanovic",
    country: "Australia",
    countryFlag: "🇦🇺",
    image: "/images/players/ajla-tomljanovic.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "강력한 그라운드 스트로크를 가진 호주의 간판. 세레나 윌리엄스의 은퇴 경기 상대이자 승자로 역사에 남았으며, 메이저 대회에서 꾸준히 8강권에 도전하는 실력자입니다.",
    detailedProfile: {
      oneLineSummary:
        "세레나 윌리엄스의 은퇴 경기를 장식한 승자, 윔블던 8강 2회 연속 진출자.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎬 "넷플릭스 브레이크 포인트의 스타"</div>
                    <p>넷플릭스 테니스 다큐멘터리 'Break Point'의 주요 출연자로 대중적인 인지도를 얻었습니다. 특히 2022 US 오픈에서 '여제' 세레나 윌리엄스의 커리어 마지막 경기 상대로 나서 승리하며 전 세계의 주목을 받았습니다. 그 압박감을 이겨낸 강심장입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"공격적인 베이스라이너"</strong></p>
                <p>큰 키에서 나오는 시원한 스트로크가 일품입니다. 백핸드 대결에서 밀리지 않으며, 기회가 오면 다운더라인으로 공격을 전환합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 그녀의 가장 강력한 무기입니다. 크로스와 다운더라인 모두 정확합니다.</li>
                    <li><strong>서브:</strong> 강한 퍼스트 서브를 가지고 있으나, 세컨드 서브가 공략당하는 경우가 있습니다.</li>
                    <li><strong>멘탈:</strong> 과거에는 경기 중 잘 무너졌으나, 최근 몇 년간 위기 관리 능력이 크게 향상되었습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "백핸드 (Backhand)", score: 9, description: "주무기." },
        { name: "멘탈 (Mental)", score: 8, description: "세레나를 이긴 심장." },
        { name: "파워 (Power)", score: 8, description: "준수함." },
        { name: "스타성 (Star)", score: 8.5, description: "넷플릭스 효과." },
        { name: "체력 (Stamina)", score: 7, description: "부상 잦음." },
        { name: "이동 (Movement)", score: 7, description: "평균적." },
      ],
      growthStory: `
                <p>크로아티아 자그레브에서 태어났습니다. 아버지도 핸드볼 유럽 챔피언 출신입니다. 2014년에 호주로 국적을 옮겼습니다. 어릴 때부터 크리스 에버트와 친분을 쌓으며 그녀의 멘토링을 받았습니다.</p>
            `,
      signatureMatch: {
        title: "2022 US 오픈 3회전 vs 세레나 윌리엄스",
        date: "2022. 09. 03",
        description:
          "역사에 남은 경기. 2만 명이 넘는 관중이 세레나를 일방적으로 응원하는 압도적인 분위기 속에서도 흔들리지 않고 2-1(7-5, 6-7, 6-1)로 승리했습니다. ",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👗 "패셔니스타"</div>
                    <p>경기장 밖에서는 모델 뺨치는 패션 센스를 자랑합니다. 'Pencil'이라는 독자적인 테니스 의류 브랜드를 런칭하는 등 다방면에서 재능을 보입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"부상 복귀"</strong></p>
                <p>2023년 무릎 수술로 시즌을 통째로 날렸습니다. 2024년 홍콩 오픈 우승(WTA 125) 등을 통해 경기 감각을 되찾고 있으며, 다시 랭킹을 끌어올릴 준비를 마쳤습니다.</p>
            `,
      faq: [
        {
          question: "톰얀로비치의 전 남자친구?",
          answer:
            "닉 키리오스, 마테오 베레티니 등 유명 테니스 선수들과 교제하여 화제가 되기도 했습니다.",
        },
        {
          question: "국적 논란?",
          answer:
            "크로아티아 태생이지만 호주 시민권을 획득하여 호주 국가대표(빌리 진 킹 컵 등)로 활약하고 있습니다.",
        },
      ],
    },
  },
  "camila-giorgi": {
    name: "카밀라 조르지",
    nameEn: "Camila Giorgi",
    country: "Italy",
    countryFlag: "🇮🇹",
    image: "/images/players/camila-giorgi.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "이탈리아의 하드 히터. 작은 체구에서 뿜어져 나오는 폭발적인 스트로크 파워는 투어 최고 수준이며, 공격적인 스타일로 정평이 나 있습니다.",
    detailedProfile: {
      oneLineSummary: '이탈리아의 "패션 아이콘"이자 폭발적인 "하드 히터".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👗 "코트 위의 런웨이"</div>
                    <p>어머니가 직접 디자인한 독창적인("Giomila" 브랜드) 유니폼을 입고 경기에 나섭니다. 짧은 스커트와 과감한 디자인은 항상 화제를 모으며, 그녀의 스타성을 더욱 돋보이게 합니다. 실력만큼이나 패션으로 유명한 선수입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"하이 리스크, 하이 리턴 (High Risk, High Return)"</strong></p>
                <p>타협하지 않는 공격 테니스입니다. 모든 공을 전력으로 때립니다. 들어가는 날은 누구도 막을 수 없지만, 안 들어가는 날은 에러가 쏟아집니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 체구에 비해 상상할 수 없는 파워를 냅니다.</li>
                    <li><strong>스피드:</strong> 발이 매우 빠르고 반응 속도가 뛰어납니다.</li>
                    <li><strong>기복:</strong> "중간"이 없습니다. 모 아니면 도 스타일입니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "파워 (Power)", score: 9.5, description: "작은 고추가 맵다." },
        { name: "스피드 (Speed)", score: 9, description: "매우 빠름." },
        { name: "스타성 (Star)", score: 9.5, description: "패션 화제성." },
        { name: "안정성 (Stability)", score: 4, description: "에러가 많음." },
        { name: "멘탈 (Mental)", score: 6, description: "포커 페이스." },
        { name: "서브 (Serve)", score: 7, description: "더블 폴트가 많음." },
      ],
      growthStory: `
                <p>이탈리아 마체라타 출신입니다. 아르헨티나 출신 아버지 세르지오 조르지의 열정적인(때로는 과격한) 지도를 받으며 성장했습니다. 5살 때 체조를 하다가 테니스로 전향했습니다.</p>
            `,
      signatureMatch: {
        title: "2021 캐나다 오픈(몬트리올) 결승 vs 카롤리나 플리스코바",
        date: "2021. 08. 15",
        description:
          "생애 최고의 순간. WTA 1000 시리즈 결승에서 강호 플리스코바를 2-0(6-3, 7-5)으로 완파하며 커리어 가장 큰 타이틀을 획득했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😐 "얼음 공주?"</div>
                    <p>경기 중 감정 표현을 거의 하지 않습니다. 이기고 있어도, 지고 있어도 표정 변화가 없어 'Ice Maiden'이라고도 불립니다. 가끔 심판과 논쟁할 때만 열정을 보여줍니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"은퇴?"</strong></p>
                <p>2024년 5월, 갑작스럽게 은퇴 소식이 전해졌습니다. 공식적인 은퇴식 없이 조용히 투어를 떠났으나, 여전히 많은 팬들이 그녀의 강렬했던 플레이를 기억하고 있습니다.</p>
            `,
      faq: [
        {
          question: "조르지의 키는?",
          answer:
            "프로필상 168cm이지만, 실제로는 더 작아 보입니다. 하지만 파워는 180cm 선수들 못지않습니다.",
        },
        {
          question: "그녀의 브랜드?",
          answer:
            '가족이 운영하는 "Giomila"라는 의류 브랜드를 입습니다. 테니스복 같지 않은 디자인이 특징입니다.',
        },
      ],
    },
  },
  "wang-xinyu": {
    name: "왕 신유",
    nameEn: "Wang Xinyu",
    country: "China",
    countryFlag: "🇨🇳",
    image: "/images/players/wang-xinyu.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '중국 테니스의 차세대 주자 "중국의 샤라포바". 182cm의 장신에서 나오는 시원한 스트로크가 강점이며, 복식에서도 그랜드슬램 우승을 차지했습니다.',
    detailedProfile: {
      oneLineSummary:
        "182cm 장신에서 뿜어져 나오는 시원한 스트로크, 복식 그랜드슬램 챔피언.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇳 "차세대 중국 에이스"</div>
                    <p>정친원과 함께 중국 테니스를 이끄는 쌍두마차입니다. 2023년 프랑스 오픈 복식에서 시에 수웨이와 짝을 이뤄 우승하며 <strong>그랜드슬램 타이틀</strong>을 획득했습니다. 단식에서도 US 오픈 16강에 오르는 등 빠르게 성장하고 있습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"플랫 히터"</strong></p>
                <p>큰 키를 활용해 위에서 아래로 찍어 누르는 듯한 플랫성 타구를 구사합니다. 공이 낮고 빠르게 깔려 들어옵니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 스윙 스피드가 빠르고 타점이 앞에서 형성되어 공격적입니다.</li>
                    <li><strong>서브:</strong> 장신을 이용한 서브가 위협적입니다.</li>
                    <li><strong>복식 능력:</strong> 네트 플레이와 발리 감각이 뛰어나 단식 경기 운영에도 도움이 됩니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "파워 (Power)", score: 8.5, description: "묵직함." },
        {
          name: "복식 (Doubles)",
          score: 9.5,
          description: "롤랑가로스 챔피언.",
        },
        { name: "서브 (Serve)", score: 8, description: "강점." },
        { name: "이동 (Movement)", score: 7.5, description: "키에 비해 좋음." },
        { name: "멘탈 (Mental)", score: 7.5, description: "성장 중." },
        { name: "경험 (Experience)", score: 7, description: "쌓가는 중." },
      ],
      growthStory: `
                <p>중국 선전 출신입니다. 아버지가 전직 테니스 선수이자 중국 국가대표 감독 출신이라 엘리트 교육을 받았습니다. 16세에 호주 오픈 주니어 본선에 진출하며 일찌감치 유망주로 주목받았습니다.</p>
            `,
      signatureMatch: {
        title: "2023 US 오픈 16강 진출 (vs 슈미들로바)",
        date: "2023. 09. 03",
        description:
          "단식 커리어 하이. 접전 끝에 승리하며 생애 첫 메이저 16강 무대를 밟았습니다. 복식 우승에 이어 단식에서도 경쟁력을 입증한 대회였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😊 "미소 천사"</div>
                    <p>경기 중에도 미소를 잃지 않으며, 파트너(시에 수웨이)와의 케미가 매우 좋습니다. "중국 테니스계의 미모 담당"으로도 불립니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"안정적인 Top 50"</strong></p>
                <p>2024년에도 윔블던 16강에 진출하며 잔디 코트에서도 강한 면모를 보였습니다. 꾸준히 30~50위권을 유지하며 상위 도약을 노리고 있습니다.</p>
            `,
      faq: [
        {
          question: "별명은?",
          answer:
            '이름을 줄여서 "Wang (왕)"이라고 불리지만, 중국 내에서는 "작은 왕(Little Wang)" 등 애칭으로 불립니다.',
        },
        {
          question: "복식 파트너?",
          answer:
            '대만 레전드 시에 수웨이와 함께 "스트레이트 세트"라는 별명(웃음)으로 불릴 만큼 환상의 호흡을 보여주었습니다.',
        },
      ],
    },
  },
  "wang-xiyu": {
    name: "왕 시위",
    nameEn: "Wang Xiyu",
    country: "China",
    countryFlag: "🇨🇳",
    image: "/images/players/wang-xiyu.png",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "강력한 왼손 포핸드를 가진 중국의 기대주. 2018 US 오픈 주니어 챔피언 출신으로, 파워풀한 테니스를 구사합니다.",
    detailedProfile: {
      oneLineSummary:
        '2018 US 오픈 주니어 챔피언, 강력한 "왼손 포핸드"를 장착한 파워 히터.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "주니어 세계 1위 출신"</div>
                    <p>2018년 US 오픈 주니어 여자 단식 우승자입니다. 주니어 시절부터 압도적인 피지컬과 파워로 세계 1위를 찍었으며, 성인 무대에서도 2023년 광저우 오픈 우승으로 WTA 투어 타이틀을 획득했습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"파워풀 왼손잡이 (Lefty Power Player)"</strong></p>
                <p>나달과 같은 왼손잡이의 이점을 잘 살립니다. 특히 왼쪽에서 대각선으로 빠져나가는 포핸드 크로스 샷이 매우 위력적입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 헤비 탑스핀이 걸린 왼손 포핸드는 상대 오른쪽 깊숙이 떨어져 받기 까다롭습니다.</li>
                    <li><strong>서브:</strong> 왼손잡이 특유의 슬라이스 서브를 잘 활용합니다.</li>
                    <li><strong>공격성:</strong> 기회가 오면 주저 없이 강타를 날립니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "파워 (Power)", score: 9, description: "왼손 파워." },
        { name: "잠재력 (Potential)", score: 8.5, description: "아직 젊음." },
        { name: "서브 (Serve)", score: 8, description: "왼손 이점." },
        { name: "정교함 (Precision)", score: 6.5, description: "다듬는 중." },
        { name: "멘탈 (Mental)", score: 7, description: "기복 있음." },
        { name: "이동 (Movement)", score: 7.5, description: "준수함." },
      ],
      growthStory: `
                <p>중국 장쑤성 타이싱 출신입니다. 4살 때 테니스를 시작했습니다. 어머니가 음악가이기를 바랐지만 본인은 테니스를 선택했습니다. 12살 때 베이징에 있는 테니스 아카데미로 유학을 떠나 실력을 키웠습니다.</p>
            `,
      signatureMatch: {
        title: "2023 광저우 오픈 결승 vs 마그다 리네트",
        date: "2023. 09. 23",
        description:
          "생애 첫 WTA 투어 우승. 홈 관중 앞에서 베테랑 리네트를 6-0, 6-2로 완파하며 압도적인 경기력을 보여주었습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 "사자후"</div>
                    <p>중요한 포인트를 땄을 때 터뜨리는 포효가 인상적입니다. 파워풀한 플레이 스타일과 어우러져 관중을 압도하는 카리스마가 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 50 안착 목표"</strong></p>
                <p>2024년 오스틴 오픈 준우승 등 꾸준히 결승 무대를 밟으며 랭킹을 끌어올리고 있습니다. 기복만 줄인다면 상위권 도약이 가능해 보입니다.</p>
            `,
      faq: [
        {
          question: "왕 신유와의 관계?",
          answer:
            '이름이 비슷하고 나이대도 비슷해 라이벌이자 동료입니다. 팬들은 "Left Wang (시위)", "Right Wang (신유)"로 장난스레 구분하기도 합니다.',
        },
        {
          question: "취미는?",
          answer:
            "요리와 제빵을 좋아해서 직접 만든 쿠키 사진을 SNS에 올리곤 합니다.",
        },
      ],
    },
  },
  "zhu-lin": {
    name: "주 린",
    nameEn: "Zhu Lin",
    country: "China",
    countryFlag: "🇨🇳",
    image: "/images/players/zhu-lin.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "대기만성형 플레이어. 꾸준한 노력 끝에 2023 호주 오픈 16강, 투어 첫 우승을 달성하며 전성기를 맞이했습니다. ",
    detailedProfile: {
      oneLineSummary: '29세에 만개한 "늦게 핀 꽃", 희곡 "주(Zhu) 변의 서사시".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌸 "대기만성 (Late Bloomer)"</div>
                    <p>오랫동안 100위권 밖을 맴돌았으나, 포기하지 않고 29세가 되던 2023년에 잠재력을 폭발시켰습니다. 호주 오픈 16강에서 마리아 사카리(당시 6위)를 꺾는 파란을 일으키며 <strong>"지금이 내 전성기"</strong>라고 외친 인터뷰가 화제가 되었습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"공격적인 카운터 펀처"</strong></p>
                <p>안정적인 수비를 바탕으로 하다가, 상대의 빈틈이 보이면 날카로운 다운더라인 샷으로 득점합니다. </p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>기본기:</strong> 스트로크 폼이 매우 깔끔하고 군더더기가 없습니다.</li>
                    <li><strong>멘탈:</strong> 자신감이 붙은 후 위기 상황에서도 과감한 샷을 날립니다.</li>
                    <li><strong>이동:</strong> 코트 커버가 훌륭합니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "노력 (Effort)", score: 10, description: "끈기의 결실." },
        { name: "멘탈 (Mental)", score: 8.5, description: "자신감 충전." },
        { name: "수비 (Defense)", score: 8, description: "안정적." },
        { name: "기술 (Technique)", score: 8, description: "교과서적." },
        { name: "파워 (Power)", score: 7, description: "세지 않음." },
        { name: "서브 (Serve)", score: 6.5, description: "개선 필요." },
      ],
      growthStory: `
                <p>중국 안후이성 출신입니다. 아버지의 권유로 4살 때 테니스를 시작했습니다. 프로 데뷔 후 오랫동안 챌린저 급 대회만 전전했으나, 끊임없는 훈련과 마인드셋 변화로 커리어 반전을 이뤄냈습니다.</p>
            `,
      signatureMatch: {
        title: "2023 호주 오픈 3회전 vs 마리아 사카리",
        date: "2023. 01. 20",
        description:
          '인생 경기. 세계 6위 사카리를 상대로 2-1(7-6, 1-6, 6-4) 승리를 거두며 생애 첫 메이저 16강에 진출했습니다. 경기 후 눈물을 흘리며 "내가 이런 선수를 이길 수 있을지 몰랐다"고 말해 감동을 주었습니다.',
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎭 "주(Zhu) 변작가"</div>
                    <p>드라마틱한 경기 내용 때문에 중국 팬들은 그녀를 '작가(극본가)'라고 부르기도 합니다. 롤러코스터 같은 경기력 끝에 승리하는 경우가 많기 때문입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 50 유지"</strong></p>
                <p>2023년 후아 힌 챔피언십 우승(첫 투어 타이틀), 오사카 준우승 등 꾸준히 성적을 내고 있습니다. 2024년에도 태국 오픈 준우승을 차지했습니다.</p>
            `,
      faq: [
        {
          question: "좋아하는 선수는?",
          answer:
            "중국의 레전드 리나(Li Na)를 존경하며, 그녀처럼 늦은 나이에도 성공하고 싶다고 말했습니다.",
        },
      ],
    },
  },
  "yuan-yue": {
    name: "위안 위에",
    nameEn: "Yuan Yue",
    country: "China",
    countryFlag: "🇨🇳",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "공격적인 플레이가 돋보이는 중국 선수. 2024년 투어 첫 우승을 차지하며 세계 랭킹을 빠르게 끌어올리고 있습니다.",
    detailedProfile: {
      oneLineSummary: '2024년 혜성처럼 등장한 중국의 "라이징 스타", 공격 본능.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🚀 "무서운 상승세"</div>
                    <p>2024년 초반, 텍사스 오스틴 오픈에서 <strong>생애 첫 WTA 투어 우승</strong>을 차지하고, 곧바로 열린 인디언 웰스에서도 8강에 오르는 등 파죽지세의 활약을 펼쳤습니다. 불과 몇 달 만에 랭킹을 100위권 밖에서 30위권으로 끌어올린 돌풍의 주인공입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"어그레시브 샷메이커"</strong></p>
                <p>공을 치는 임팩트 소리부터 다릅니다. 매우 빠르고 강한 플랫성 타구를 구사하며, 상대를 베이스라인 뒤로 밀어냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 탄환 같은 스피드의 포핸드 위너를 양산합니다.</li>
                    <li><strong>공격성:</strong> 수비보다는 공격으로 포인트를 따는 것을 선호합니다. "먼저 치는 자가 이긴다"는 스타일입니다.</li>
                    <li><strong>서브:</strong> 퍼스트 서브 확률이 높고 파워가 좋습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "상승세 (Momentum)", score: 10, description: "무서운 기세." },
        { name: "파워 (Power)", score: 9, description: "강력한 임팩트." },
        {
          name: "공격성 (Aggression)",
          score: 9,
          description: "물러서지 않음.",
        },
        { name: "서브 (Serve)", score: 8, description: "좋은 편." },
        { name: "경험 (Experience)", score: 6, description: "이제 시작." },
        {
          name: "수비 (Defense)",
          score: 6.5,
          description: "공격이 최선의 수비.",
        },
      ],
      growthStory: `
                <p>중국 양저우 출신입니다. 10살이라는 다소 늦은 나이에 테니스를 시작했습니다. 경제적인 어려움 때문에 코치 없이 혼자 투어를 다니기도 했으나, 끈기와 노력으로 스폰서와 코치를 구하며 자수성가했습니다.</p>
            `,
      signatureMatch: {
        title: "2024 ATX 오픈 결승 vs 왕 시위",
        date: "2024. 03. 04",
        description:
          '생애 첫 우승. 같은 국적의 라이벌 왕 시위와의 "중국 더비" 결승에서 2-0(6-4, 7-6)으로 승리하며 감격의 첫 트로피를 들어 올렸습니다.',
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎒 "나 홀로 여행가"</div>
                    <p>과거 코치 없이 무거운 짐을 혼자 짊어지고 저가 항공을 이용하며 투어를 다니던 모습이 알려져 팬들의 응원을 받았습니다. 이제는 당당한 챔피언입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 40 진입"</strong></p>
                <p>2024년의 기세를 이어가며 중국 테니스의 새로운 주축으로 자리 잡았습니다. 메이저 대회 시드 배정도 받게 되었습니다.</p>
            `,
      faq: [
        {
          question: "코치는 누구?",
          answer:
            "현재 새로운 코치진과 함께하며 전술적인 완성도를 높이고 있습니다.",
        },
      ],
    },
  },
  "diane-parry": {
    name: "디안 파리",
    nameEn: "Diane Parry",
    country: "France",
    countryFlag: "🇫🇷",
    gender: "female",
    plays: "Right-handed",
    backhand: "One-handed",
    longBio:
      "WTA 투어에서 보기 드문 원핸드 백핸드 구사자. 우아한 폼과 클래식한 테니스 스타일로 주목받는 프랑스의 유망주입니다.",
    detailedProfile: {
      oneLineSummary:
        'WTA 투어의 희귀종 "원핸드 백핸더", 프랑스의 우아함을 담은 테니스.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦢 "클래식의 부활"</div>
                    <p>여자 테니스에서 거의 멸종 위기인 <strong>'원핸드 백핸드'</strong>를 구사하는 젊은 선수입니다. 쥐스틴 에넹, 아멜리에 모레스모를 연상시키는 우아한 폼과 슬라이스 활용 능력으로 "테니스의 낭만"을 보여줍니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"클래식 & 버라이어티"</strong></p>
                <p>파워보다는 회전과 코스를 이용합니다. 특히 클레이 코트에서 강점을 보입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 원핸드 백핸드를 사용하며, 깊은 슬라이스와 강한 탑스핀 드라이브를 섞어 씁니다.</li>
                    <li><strong>포핸드:</strong> 헤비 탑스핀이 많이 걸려 바운드가 높게 튑니다.</li>
                    <li><strong>서브:</strong> 킥 서브를 즐겨 사용합니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "기술 (Technique)", score: 9.5, description: "희소성." },
        { name: "우아함 (Elegance)", score: 10, description: "클래식함." },
        { name: "클레이 (Clay)", score: 9, description: "선호함." },
        { name: "파워 (Power)", score: 6.5, description: "약한 편." },
        { name: "스피드 (Speed)", score: 7, description: "보통." },
        { name: "서브 (Serve)", score: 7, description: "킥 서브." },
      ],
      growthStory: `
                <p>프랑스 니스 출신입니다. 어릴 때부터 아멜리에 모레스모(전 세계 1위, 원핸드 백핸더)를 보며 꿈을 키웠습니다. 2019년 16세의 나이로 프랑스 오픈 본선에서 승리하며 혜성처럼 등장했습니다.</p>
            `,
      signatureMatch: {
        title: "2022 프랑스 오픈 1회전 vs 바르보라 크레이치코바",
        date: "2022. 05. 23",
        description:
          "디펜딩 챔피언 격파. 전년도 우승자이자 세계 2위인 크레이치코바를 상대로 홈 관중의 열광적인 응원 속에 역전승을 거두는 대이변을 만들었습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎨 "예술 점수 100점"</div>
                    <p>백핸드 칠 때의 폼이 너무 아름다워서, 승패와 상관없이 그녀의 경기를 찾아보는 팬들이 많습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 50 안착"</strong></p>
                <p>2024년 6월 노팅엄 오픈 4강에 오르는 등 클레이 외의 코트에서도 적응력을 높이고 있습니다. 꾸준히 50위권을 유지 중입니다.</p>
            `,
      faq: [
        {
          question: "왜 원핸드를 쓰나요?",
          answer:
            "어릴 때 로저 페더러의 경기를 보고 반해서 따라 하기 시작했다고 합니다.",
        },
      ],
    },
  },
  "clara-burel": {
    name: "클라라 뷔렐",
    nameEn: "Clara Burel",
    country: "France",
    countryFlag: "🇫🇷",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "프랑스의 영 건. 주니어 세계 1위 출신으로, 안정적인 경기 운영과 영리한 플레이로 성인 무대에서도 두각을 나타내고 있습니다.",
    detailedProfile: {
      oneLineSummary: '주니어 세계 1위 출신, 작지만 매운 "프랑스 차세대 기수".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👶 "주니어 랭킹 1위"</div>
                    <p>2018년 주니어 세계 랭킹 1위를 기록했던 특급 유망주 출신입니다. 2020년 롤랑가로스에서 19세의 나이로 3회전에 진출하며 성인 무대 신고식을 치렀습니다. 작은 체구지만 영리한 경기 운영이 돋보입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"전술적인 카운터 펀처"</strong></p>
                <p>힘으로 맞불을 놓기보다는 상대의 템포를 뺏고 코트를 넓게 사용합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>드롭샷:</strong> 기가 막힌 타이밍에 드롭샷을 구사합니다.</li>
                    <li><strong>백핸드:</strong> 안정적이고 실수가 적습니다.</li>
                    <li><strong>서브:</strong> 키(176cm)에 비해 서브 파워는 다소 아쉽지만 코석 공략이 좋습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "전술 (Tactics)", score: 9, description: "영리함." },
        { name: "잠재력 (Potential)", score: 8.5, description: "성장 중." },
        { name: "이동 (Movement)", score: 8.5, description: "빠름." },
        { name: "파워 (Power)", score: 6.5, description: "보완 필요." },
        { name: "멘탈 (Mental)", score: 7.5, description: "침착함." },
        { name: "서브 (Serve)", score: 6, description: "더블 폴트 주의." },
      ],
      growthStory: `
                <p>프랑스 렌 출신입니다. 주니어 시절 유스 올림픽 은메달, US 오픈 주니어 준우승 등 화려한 성적을 냈습니다. 프로 전향 후 손목 부상으로 고전했으나 잘 극복했습니다.</p>
            `,
      signatureMatch: {
        title: "2024 호주 오픈 2회전 vs 제시카 페굴라",
        date: "2024. 01. 18",
        description:
          "거물 사냥. 세계 랭킹 5위 제시카 페굴라를 2-0(6-4, 6-2)으로 완파하며 생애 최고의 승리를 거뒀습니다. 수비와 역습이 완벽했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇫🇷 "프랑스의 희망"</div>
                    <p>가르시아, 파리와 함께 프랑스 테니스의 미래를 짊어질 재목으로 기대를 한 몸에 받고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 50 진입"</strong></p>
                <p>페굴라를 꺾은 기세를 몰아 랭킹을 40위권까지 끌어올렸습니다. 투어 결승에도 두 차례(로잔 등) 진출했습니다.</p>
            `,
      faq: [
        {
          question: "좋아하는 코트는?",
          answer:
            "주니어 시절에는 하드 코트 성적이 좋았으나, 프로에서는 클레이 코트에서도 강한 모습을 보입니다.",
        },
      ],
    },
  },
  "varvara-gracheva": {
    name: "바르바라 그라체바",
    nameEn: "Varvara Gracheva",
    country: "France",
    countryFlag: "🇫🇷",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "러시아에서 프랑스로 국적을 변경한 선수. 다양한 구질을 섞어 쓰는 까다로운 스트로크로 상대를 괴롭히는 스타일입니다.",
    detailedProfile: {
      oneLineSummary:
        '러시아에서 프랑스로 귀화한 "뉴 프렌치", 예측 불가능한 스트로크.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇫🇷 "마르세유즈를 부르는 바르바라"</div>
                    <p>러시아 태생이지만 2023년 프랑스 국적을 취득했습니다. 귀화 직후 열린 프랑스 오픈에서 관중들의 열렬한 "라 마르세유즈(프랑스 국가)" 응원을 받으며 감동적인 장면을 연출했습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"변칙적인 베이스라이너"</strong></p>
                <p>정박자로 치지 않습니다. 공의 궤적과 타이밍을 섞어서 상대를 불편하게 만듭니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 극단적인 그립을 사용하여 회전량이 많습니다.</li>
                    <li><strong>적응력:</strong> 상대의 스타일에 따라 자신의 플레이를 변화시킵니다.</li>
                    <li><strong>수비:</strong> 끈질기게 따라가서 공을 넘깁니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "적응력 (Adaptability)", score: 9, description: "카멜레온." },
        { name: "수비 (Defense)", score: 8, description: "끈질김." },
        { name: "파워 (Power)", score: 7, description: "평균." },
        { name: "서브 (Serve)", score: 6.5, description: "개선 중." },
        { name: "멘탈 (Mental)", score: 7.5, description: "홈 응원 중요." },
        { name: "체력 (Stamina)", score: 8, description: "좋음." },
      ],
      growthStory: `
                <p>러시아 모스크바 근교에서 태어났습니다. 2016년부터 프랑스 칸에 있는 아카데미에서 훈련하며 프랑스 문화를 익혔습니다. 5년 넘게 거주하며 자연스럽게 귀화를 선택했습니다.</p>
            `,
      signatureMatch: {
        title: "2023 인디언 웰스 16강 vs 다리아 카사트키나",
        date: "2023. 03. 14",
        description:
          "러시아 더비(당시 국적) 승리. Top 10 선수인 카사트키나를 상대로 2-0 완승을 거두며 자신이 만만치 않은 상대임을 증명했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🗣️ "프랑스어 인터뷰"</div>
                    <p>완벽한 프랑스어로 인터뷰하여 프랑스 팬들의 마음을 사로잡았습니다. "나는 이제 프랑스인"이라는 정체성이 확고합니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"프랑스 국가대표"</strong></p>
                <p>빌리 진 킹 컵 프랑스 대표팀에도 발탁되었습니다. 꾸준히 40~60위권을 유지하며 투어에 안착했습니다.</p>
            `,
      faq: [
        {
          question: "국적 변경 이유는?",
          answer:
            "오랫동안 프랑스에서 살며 훈련했고, 프랑스 테니스 협회의 체계적인 지원과 환경에 만족했기 때문이라고 합니다.",
        },
      ],
    },
  },
  "tatjana-maria": {
    name: "타티아나 마리아",
    nameEn: "Tatjana Maria",
    country: "Germany",
    countryFlag: "🇩🇪",
    gender: "female",
    plays: "Right-handed",
    backhand: "One-handed",
    longBio:
      "슬라이스 마스터. 포핸드와 백핸드 모두에서 자유자재로 구사하는 슬라이스로 상대를 혼란에 빠뜨리는 독특한 스타일의 베테랑입니다. 두 아이의 엄마이자 2022 윔블던 4강 신화의 주인공.",
    detailedProfile: {
      oneLineSummary:
        '두 아이의 엄마, 2022 윔블던 4강 신화, "슬라이스 깎는 장인".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🤰 "슈퍼맘의 기적"</div>
                    <p>두 번의 출산 후에도 투어에 복귀하여, <strong>2022 윔블던 4강</strong>이라는 믿을 수 없는 성적을 냈습니다. 당시 34세, 두 아이의 엄마, 랭킹 103위였던 그녀가 일으킨 돌풍은 전 세계에 큰 감동을 주었습니다. "엄마는 강하다"를 몸소 보여준 선수입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"슬라이스 마스터 (Slice Master)"</strong></p>
                <p>현대 테니스에서 가장 독특한 스타일입니다. 포핸드와 백핸드 모두 슬라이스를 자유자재로 구사합니다. 공이 바닥에 깔리거나 멈추는 등 변칙적이라 상대가 타이밍을 잡기 매우 힘듭니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드 슬라이스:</strong> 보통 공격적으로 치는 포핸드조차 깎아 칩니다. 상대가 적응하지 못하고 자멸합니다.</li>
                    <li><strong>전술:</strong> 상대의 힘을 이용하고, 네트 플레이로 마무리합니다.</li>
                    <li><strong>멘탈:</strong> 경험에서 나오는 여유와 침착함이 돋보입니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "독창성 (Originality)", score: 10, description: "유일무이." },
        { name: "전술 (Tactics)", score: 10, description: "체스 플레이어." },
        { name: "멘탈 (Mental)", score: 9.5, description: "엄마의 힘." },
        { name: "기술 (Technique)", score: 9, description: "슬라이스 장인." },
        { name: "파워 (Power)", score: 4, description: "힘으로 안 침." },
        { name: "체력 (Stamina)", score: 8, description: "철인." },
      ],
      growthStory: `
                <p>독일 바트 사울가우 출신입니다. 2008년 폐색전증으로 생사를 오가는 위기를 겪기도 했으나 극복했습니다. 남편이자 코치인 샤를 에두아르 마리아와 함께 투어를 다니며, 딸 샬롯과 세실리아를 키우고 있습니다.</p>
            `,
      signatureMatch: {
        title: "2022 윔블던 8강 vs 율레 니마이어",
        date: "2022. 07. 05",
        description:
          "독일 더비 승리. 한 세트를 내주고 2세트에서도 뒤지고 있었으나, 끈질긴 수비와 노련미로 역전승을 거두며 4강에 진출했습니다. 엄마로서 이룬 최고의 업적입니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👩‍👧‍👧 "패밀리 투어"</div>
                    <p>경기장에 항상 남편과 두 딸이 함께합니다. 인터뷰 중 아이들이 난입(?)하거나 안겨 있는 모습이 자주 보여 팬들의 미소를 자아냅니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"멈추지 않는 도전"</strong></p>
                <p>30대 중반을 훌쩍 넘긴 나이에도 여전히 투어를 뛰며, 2023년 보고타 우승(WTA 250) 타이틀 방어에 성공하는 등 녹슬지 않은 기량을 과시하고 있습니다.</p>
            `,
      faq: [
        {
          question: "언제까지 선수 생활을?",
          answer:
            "테니스를 즐기고 있고 가족이 함께하기 때문에 은퇴 생각은 아직 없다고 합니다.",
        },
        {
          question: "딸도 테니스를 하나요?",
          answer:
            "첫째 딸 샬롯도 테니스를 열심히 배우고 있으며, 엄마처럼 프로 선수가 되는 것이 꿈이라고 합니다.",
        },
      ],
    },
  },
  "laura-siegemund": {
    name: "로라 시그문드",
    nameEn: "Laura Siegemund",
    country: "Germany",
    countryFlag: "🇩🇪",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "변칙 플레이의 여왕. 드롭샷, 네트 대시 등 다양한 전술로 상대를 흔드는 지능적인 플레이가 일품이며, 복식에서도 그랜드슬램 챔피언입니다.",
    detailedProfile: {
      oneLineSummary:
        '코트 위의 "마술사", 상대를 미치게 만드는 다양한 기술의 향연.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧙‍♀️ "변칙의 여왕"</div>
                    <p>현대 테니스에서 보기 드문 유형의 선수입니다. 파워보다는 드롭샷, 로브, 서브 앤 발리 등 온갖 기술을 섞어 상대의 리듬을 뺏습니다. 상대 선수들이 "가장 경기하기 싫은 선수"로 꼽기도 합니다.</p>
                    <p>복식에서도 그랜드슬램(US 오픈, 프랑스 오픈 혼복 등) 우승을 여러 차례 차지한 베테랑입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"올코트 테크니션"</strong></p>
                <p>정석적인 랠리를 거의 하지 않습니다. 끊임없이 전술을 변화시킵니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>드롭샷:</strong> 그녀의 시그니처입니다. 예고 동작 없이 툭 떨어뜨립니다.</li>
                    <li><strong>네트 플레이:</strong> 복식 랭커답게 발리 감각이 매우 뛰어납니다.</li>
                    <li><strong>타임 딜레이:</strong> 서브 시간을 길게 끌거나 루틴을 길게 가져가 상대를 조급하게 만듭니다. (이로 인해 경고를 받기도 합니다.)</li>
                </ul>
            `,
      hexagonStats: [
        { name: "기술 (Technique)", score: 10, description: "만능 재주꾼." },
        { name: "전술 (Tactics)", score: 9.5, description: "수싸움의 대가." },
        { name: "멘탈 (Mental)", score: 8, description: "질기다." },
        { name: "파워 (Power)", score: 6, description: "약한 편." },
        { name: "스피드 (Speed)", score: 7.5, description: "준수함." },
        { name: "복식 (Doubles)", score: 9.5, description: "최상위 레벨." },
      ],
      growthStory: `
                <p>독일 필더슈타트 출신입니다. 심리학 학사 학위를 가지고 있을 정도로 학구파이며, 이는 그녀의 지능적인 플레이 스타일에도 영향을 미쳤습니다. 20대 후반과 30대에 전성기를 맞이한 대기만성형 선수입니다.</p>
            `,
      signatureMatch: {
        title: "2020 프랑스 오픈 8강",
        date: "2020. 10. 07",
        description:
          "클레이 코트에서의 저력을 보여준 대회. 32세의 나이에 생애 첫 메이저 8강에 진출했으며, 다채로운 드롭샷으로 상대들을 무력화시켰습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎓 "심리학자 테니스 선수"</div>
                    <p>실제 심리학 학위가 있어 멘탈 게임에 능합니다. 경기 중 보여주는 독특한 루틴과 제스처는 팬들에게는 볼거리, 상대에게는 악몽입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"복식 최강자, 단식 경쟁력 유지"</strong></p>
                <p>2024년 WTA 파이널스 복식 우승을 차지하며 복식 세계 랭킹 최상위권을 지키고 있습니다. 단식에서도 여전히 까다로운 상대로 활약 중입니다.</p>
            `,
      faq: [
        {
          question: "시그문드의 전공은?",
          answer:
            "하겐 대학에서 심리학 학사 학위를 받았습니다. 논문 주제도 스포츠 심리학 관련이었습니다.",
        },
        {
          question: "그녀의 별명은?",
          answer: '"Enten (오리)"라고 불리기도 합니다.',
        },
      ],
    },
  },

  // --- Added Male (Bonus) ---
  "venus-williams": {
    name: "비너스 윌리엄스",
    nameEn: "Venus Williams",
    country: "United States",
    countryFlag: "🇺🇸",
    image: "/images/players/venus-williams.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "7개의 그랜드슬램 타이틀을 보유한 살아있는 전설. 동생 세레나와 함께 여자 테니스의 파워 시대를 열었으며, 40대가 넘은 나이에도 코트를 지키는 존경받는 아이콘입니다.",
    detailedProfile: {
      oneLineSummary:
        '여자 테니스 파워 게임의 창시자, 영원한 챔피언이자 "Queen V".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👑 "The Legend"</div>
                    <p>그녀의 업적은 테니스를 넘어섭니다. 윔블던 상금 남녀 동등 지급을 이끌어낸 투쟁가이자, 흑인 여성 스포츠 스타의 길을 개척한 선구자입니다. 윔블던 5회 우승을 포함해 총 7개의 메이저 단식 타이틀을 보유하고 있습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"오리지널 파워 히터"</strong></p>
                <p>큰 키와 긴 팔다리에서 나오는 시원한 스윙이 일품입니다. 전성기 시절 서브 속도는 타의 추종을 불허했습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 전성기 시절 시속 200km를 넘나드는 서브로 코트를 지배했습니다.</li>
                    <li><strong>네트 플레이:</strong> 복식 그랜드슬램(14회 우승) 경력이 말해주듯 발리와 네트 센스가 탁월합니다.</li>
                    <li><strong>우아함:</strong> 파워풀하면서도 동작이 우아합니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "존경 (Respect)", score: 10, description: "살아있는 역사." },
        { name: "네트 (Net)", score: 9.5, description: "복식 여제." },
        { name: "서브 (Serve)", score: 8.5, description: "클래스는 영원하다." },
        { name: "파워 (Power)", score: 8, description: "여전한 펀치력." },
        { name: "이동 (Movement)", score: 5, description: "나이에 따른 저하." },
        { name: "체력 (Stamina)", score: 5, description: "자가면역질환 투병." },
      ],
      growthStory: `
                <p>미국 캘리포니아 콤프턴의 위험한 빈민가에서 아버지 리차드 윌리엄스의 지도로 테니스를 시작했습니다. 영화 '킹 리차드'의 실제 모델입니다.</p>
            `,
      signatureMatch: {
        title: "2005 윔블던 결승 vs 린제이 데이븐포트",
        date: "2005. 07. 02",
        description:
          "윔블던 역사상 가장 명승부 중 하나. 매치 포인트 위기를 넘기고 2시간 45분의 혈투 끝에 우승을 차지했습니다. 우승 직후 펄쩍 뛰며 기뻐하는 모습은 전설적인 장면입니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👗 "Eleven"</div>
                    <p>자신만의 의류 브랜드 'Eleven'을 런칭해 디자이너로도 활동합니다. 쇼그렌 증후군이라는 난치병을 앓으면서도 투어를 떠나지 않는 열정은 모두의 귀감이 됩니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"테니스를 사랑하니까"</strong></p>
                <p>랭킹은 많이 떨어졌고 1회전 탈락이 잦지만, 와일드카드로 대회에 참가하며 팬들과 만나고 있습니다. 승패를 떠나 그녀가 코트에 서 있는 것만으로도 역사입니다.</p>
            `,
      faq: [
        {
          question: "언제 은퇴하나요?",
          answer:
            "아직 공식 은퇴 계획을 밝히지 않았습니다. 동생 세레나는 은퇴했지만, 비너스는 여전히 경기를 즐기고 싶어 합니다.",
        },
      ],
    },
  },
  "maria-sharapova": {
    name: "마리아 샤라포바",
    nameEn: "Maria Sharapova",
    country: "Russia",
    countryFlag: "🇷🇺",
    image: "/images/players/maria-sharapova.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "커리어 그랜드슬램 달성자. 실력과 스타성을 완벽하게 겸비했던 테니스 역사상 최고의 슈퍼스타 중 한 명입니다. 강렬한 괴성(Shouting)과 끈질긴 승부 근성이 트레이드마크였습니다.",
    detailedProfile: {
      oneLineSummary:
        '17세 윔블던 우승의 충격, 실력과 미모, 사업 수완까지 갖춘 "테니스 여제".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌟 "슈퍼스타"</div>
                    <p>2004년 17세의 나이로 윔블던 결승에서 세레나 윌리엄스를 꺾고 우승하며 세계적인 신드롬을 일으켰습니다. 4대 메이저 대회를 모두 우승(커리어 그랜드슬램)한 실력파이며, 포브스 선정 '세계에서 가장 돈 많이 버는 여선수' 11년 연속 1위를 차지했습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"공격적인 베이스라이너"</strong></p>
                <p>절대 수비하지 않고, 어떤 공이든 공격적으로 받아칩니다. 특유의 높은 타점에서 내리꽂는 샷이 일품입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>멘탈:</strong> 경기 중 루틴(뒤돌아서 줄 정리)을 철저히 지키며 평정심을 유지합니다. 역전승의 명수였습니다.</li>
                    <li><strong>리턴:</strong> 강력한 리턴으로 상대 서브 게임을 압박했습니다.</li>
                    <li><strong>드롭샷:</strong> 거의 쓰지 않고 스트로크 대결을 고집하는 뚝심이 있었습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "스타성 (Star)", score: 10, description: "비교 불가." },
        { name: "멘탈 (Mental)", score: 9.5, description: "강철 멘탈." },
        { name: "파워 (Power)", score: 9, description: "강력한 베이스라이너." },
        {
          name: "서브 (Serve)",
          score: 7,
          description: "어깨 부상 후 약점인 더블 폴트.",
        },
        {
          name: "이동 (Movement)",
          score: 7.5,
          description: "클레이에서 미끄러지는 법을 터득 후 완성형이 됨.",
        },
        { name: "네트 (Net)", score: 6.5, description: "드라이브 발리 선호." },
      ],
      growthStory: `
                <p>러시아 시베리아에서 태어나, 7세 때 아버지가 단돈 700달러를 들고 미국으로 건너와 테니스 유학을 시켰습니다. 성공을 향한 헝그리 정신의 표본입니다.</p>
            `,
      signatureMatch: {
        title: "2004 윔블던 결승 vs 세레나 윌리엄스",
        date: "2004. 07. 03",
        description:
          "전설의 시작. 무적이었던 세레나를 17세 소녀가 2-0(6-1, 6-4)으로 완파하며 세계 테니스 판도를 뒤흔들었습니다. 마지막 포인트를 따고 무릎을 꿇고 얼굴을 감싸 쥐는 장면은 영원히 기억됩니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🍬 "Sugarpova"</div>
                    <p>자신의 이름을 딴 사탕 브랜드 '슈가포바'를 런칭해 성공시킨 사업가이기도 합니다. 은퇴 후에도 패션, 뷰티 아이콘으로 활발히 활동하고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"은퇴 후 제2의 삶"</strong></p>
                <p>2020년 은퇴를 선언했습니다. 현재는 사업가이자 엄마로서의 삶을 즐기고 있으며, 가끔 테니스 행사(피클볼 등)에 얼굴을 비춥니다.</p>
            `,
      faq: [
        {
          question: "샤라포바의 괴성?",
          answer:
            '공을 칠 때 100데시벨이 넘는 소리를 질러 논란이 되기도 했습니다. 그녀는 "어릴 때부터 습관이라 고칠 수 없다"고 했습니다.',
        },
      ],
    },
  },
  "garbine-muguruza": {
    name: "가르비녜 무구루사",
    nameEn: "Garbine Muguruza",
    country: "Spain",
    countryFlag: "🇪🇸",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "프랑스 오픈과 윔블던을 모두 제패한 스페인의 스타. 윌리엄스 자매를 결승에서 모두 꺾고 우승한 유일한 선수로, 강력한 파워 테니스를 구사합니다.",
    detailedProfile: {
      oneLineSummary:
        '윌리엄스 자매 킬러, 흙과 잔디를 모두 정복한 "정열의 화신".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇪🇸 "나달의 여자 버전?"</div>
                    <p>스페인 선수지만 나달처럼 스핀을 걸기보다 플랫하게 때리는 공격형입니다. 프랑스 오픈(2016) 결승에서 세레나 윌리엄스를, 윔블던(2017) 결승에서 비너스 윌리엄스를 꺾고 우승했습니다. 윌리엄스 자매를 메이저 결승에서 모두 이긴 유일한 선수라는 기록을 가졌습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"파워 베이스라이너 (Aggressive)"</strong></p>
                <p>키 182cm의 장신에서 나오는 파괴력이 엄청납니다. 베이스라인 안쪽으로 들어와서 라이징 볼을 때립니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>공격:</strong> 수비보다는 무조건 공격입니다. 먼저 때려서 끝내는 것을 선호합니다.</li>
                    <li><strong>서브:</strong> 큰 키를 이용한 서브가 강력합니다.</li>
                    <li><strong>기복:</strong> 멘탈이나 컨디션 난조를 겪으면 걷잡을 수 없이 무너지는 경우가 있습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "파워 (Power)", score: 9.5, description: "압도적." },
        { name: "공격성 (Aggression)", score: 10, description: "닥공." },
        { name: "스타성 (Star)", score: 9, description: "화려함." },
        { name: "멘탈 (Mental)", score: 6, description: "유리 멘탈." },
        { name: "이동 (Movement)", score: 7, description: "준수함." },
        { name: "서브 (Serve)", score: 8, description: "강력함." },
      ],
      growthStory: `
                <p>베네수엘라 카라카스에서 태어났습니다. 6세 때 스페인으로 이주해 바르셀로나 아카데미에서 훈련했습니다. 그래서 두 나라 국적을 다 가지고 있으나 스페인 대표로 뛰었습니다.</p>
            `,
      signatureMatch: {
        title: "2016 프랑스 오픈 결승 vs 세레나 윌리엄스",
        date: "2016. 06. 04",
        description:
          "여제를 무너뜨리다. 무결점 여왕 세레나 윌리엄스를 상대로 힘대 힘 대결에서 전혀 밀리지 않고 2-0(7-5, 6-4) 완승을 거두며 첫 메이저 타이틀을 차지했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💃 "패션 & 은퇴"</div>
                    <p>모델어 같은 외모로 패션 화보도 많이 찍었습니다. 2024년 4월 공식 은퇴를 선언하여 팬들의 아쉬움을 샀습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Adios"</strong></p>
                <p>2024년 4월 공식 은퇴. 제2의 인생을 즐기고 있습니다.</p>
            `,
      faq: [
        {
          question: "은퇴 이유?",
          answer:
            "오랜 투어 생활에 지쳤고, 이제는 가족, 친구들과 평범한 삶을 즐기고 싶다고 밝혔습니다.",
        },
      ],
    },
  },
  "serena-williams": {
    name: "세레나 윌리엄스",
    nameEn: "Serena Williams",
    country: "United States",
    countryFlag: "🇺🇸",
    image: "/images/players/serena-williams.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '그랜드슬램 23회 우승에 빛나는 "GOAT". 여자 테니스의 차원을 바꾼 압도적인 파워와 불굴의 멘탈을 가진 역사상 최고의 선수입니다.',
    detailedProfile: {
      oneLineSummary: '여자 테니스 역사상 최고의 선수, "The Queen".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐐 "The GOAT"</div>
                    <p>오픈 시대 이후 남녀 통틀어 최다인 23회의 그랜드슬램 단식 우승을 차지했습니다. 강력한 서브와 스트로크로 여자 테니스를 '파워 게임'으로 변화시킨 장본인이며, 출산 후에도 복귀하여 메이저 결승에 오르는 등 한계를 모르는 도전을 보여주었습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"파워 베이스라이너의 완성형"</strong></p>
                <p>테니스 역사상 가장 강력한 서브와 포핸드를 가졌습니다. 단순히 힘만 센 것이 아니라, 위기 상황에서 더 강해지는 멘탈과 경기 운영 능력까지 완벽했습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 여자 테니스 역사상 최고의 서브입니다. 속도와 코스, 토스 동작까지 완벽해 읽을 수가 없습니다.</li>
                    <li><strong>멘탈:</strong> 매치 포인트에 몰려도 에이스를 꽂아 넣는 강심장입니다.</li>
                    <li><strong>리턴:</strong> 상대의 서브를 공격적으로 받아쳐 바로 주도권을 가져옵니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "서브 (Serve)", score: 10, description: "역대 최고." },
        { name: "파워 (Power)", score: 10, description: "비교 불가." },
        { name: "멘탈 (Mental)", score: 10, description: "클러치 퀸." },
        { name: "리턴 (Return)", score: 9.5, description: "공격적." },
        { name: "스타성 (Star)", score: 10, description: "아이콘." },
        { name: "이동 (Movement)", score: 8, description: "전성기는 빨랐음." },
      ],
      growthStory: `
                <p>아버지 리차드 윌리엄스의 스파르타식 훈련을 받으며 언니 비너스와 함께 자랐습니다. 백인 위주의 테니스계에서 흑인 자매가 최정상에 오르는 과정은 전설이 되었습니다.</p>
            `,
      signatureMatch: {
        title: "2017 호주 오픈 결승 vs 비너스 윌리엄스",
        date: "2017. 01. 28",
        description:
          "임신 우승. 임신 8주 차의 몸으로 언니 비너스를 꺾고 23번째 메이저 타이틀을 차지했습니다. 테니스 역사상 가장 위대한 우승 중 하나로 꼽힙니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👗 "Fashion & Mother"</div>
                    <p>코트 위 파격적인 패션으로 항상 화제를 모았습니다. 엄마가 된 후에는 '워킹맘'들을 대변하는 아이콘이 되었습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Evolution"</strong></p>
                <p>2022년 US 오픈을 끝으로 은퇴(진화, Evolution)를 선언했습니다. 현재는 사업가이자 투자자로 활발히 활동 중입니다.</p>
            `,
      faq: [
        {
          question: "왜 은퇴가 아니라 진화라고 했나요?",
          answer:
            '테니스 선수로서의 삶을 끝내고 새로운 영역으로 나아간다는 의미로 "Evolution from Tennis"라는 표현을 썼습니다.',
        },
      ],
    },
  },
  "ashleigh-barty": {
    name: "애슐리 바티",
    nameEn: "Ashleigh Barty",
    country: "Australia",
    countryFlag: "🇦🇺",
    image: "/images/players/ashleigh-barty.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "세계 랭킹 1위 절정의 순간에 은퇴한 천재. 다양한 구질을 섞어 쓰는 올라운드 플레이와 겸손한 인품으로 전 세계 팬들의 사랑을 받았습니다.",
    detailedProfile: {
      oneLineSummary: '정상에서 쿨하게 떠난 "테니스 천재", 호주가 사랑한 영웅.',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇦🇺 "The Aussie Pride"</div>
                    <p>44년 만에 호주 오픈을 제패한 호주 선수입니다. 세계 랭킹 1위를 굳건히 지키던 25세의 나이에 "이룰 것을 다 이뤘다"며 전격 은퇴를 선언해 전 세계에 충격을 주었습니다. 크리켓 선수로도 활동했을 만큼 운동 천재입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"전술적 올라운더 (Crafty)"</strong></p>
                <p>현대 테니스에서 보기 드문 다양한 기술을 구사합니다. 파워만으로 승부하지 않고 상대를 요리합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>슬라이스:</strong> 그녀의 백핸드 슬라이스는 투어 최고 수준으로, 상대를 곤경에 빠뜨립니다.</li>
                    <li><strong>서브/스매시:</strong> 단신(166cm)이지만 서브와 스매시 기술이 매우 좋습니다.</li>
                    <li><strong>멘탈:</strong> 항상 침착하고 포커페이스를 유지합니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "기술 (Technique)", score: 10, description: "다재다능." },
        {
          name: "전술 (Tactics)",
          score: 10,
          description: "코트의 체스 플레이어.",
        },
        { name: "슬라이스 (Slice)", score: 10, description: "마스터." },
        { name: "멘탈 (Mental)", score: 9.5, description: "평정심." },
        { name: "이동 (Movement)", score: 9, description: "빠르고 효율적." },
        { name: "파워 (Power)", score: 7.5, description: "기술적 완성도." },
      ],
      growthStory: `
                <p>주니어 시절 천재로 불렸으나 압박감을 이기지 못해 테니스를 잠시 떠나 크리켓 선수로 활동했습니다. 복귀 후 테니스를 즐기게 되면서 세계 1위까지 올랐습니다.</p>
            `,
      signatureMatch: {
        title: "2022 호주 오픈 결승 vs 다니엘 콜린스",
        date: "2022. 01. 29",
        description:
          "홈 코트의 대관식. 44년 묵은 호주 테니스의 한을 풀며, 무실세트 우승이라는 완벽한 피날레를 장식했습니다. 이 대회를 끝으로 그녀는 전설로 남았습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🍺 "맥주 한 잔의 여유"</div>
                    <p>우승 후에도 소탈하게 맥주를 즐기는 모습 등 꾸밈없는 성격이 매력입니다. 동료 선수들이 가장 좋아하는 선수로 꼽힐 만큼 인성이 훌륭합니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Happy Life"</strong></p>
                <p>은퇴 후 엄마가 되어 행복한 가정을 꾸리고 있습니다. 골프 대회에 나가 우승을 차지하는 등 여전한 운동 신경을 보여줍니다.</p>
            `,
      faq: [
        {
          question: "복귀 가능성은?",
          answer:
            '본인은 "No"라고 단호하게 말합니다. 현재 삶에 매우 만족하고 있다고 합니다.',
        },
      ],
    },
  },
  "simona-halep": {
    name: "시모나 할렙",
    nameEn: "Simona Halep",
    country: "Romania",
    countryFlag: "🇷🇴",
    image: "/images/players/simona-halep.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '루마니아의 국민 영웅. 작은 체구지만 폭발적인 스피드와 지치지 않는 체력으로 코트를 누비는 "작은 거인"입니다. 2019 윔블던 챔피언입니다.',
    detailedProfile: {
      oneLineSummary: '작은 고추가 맵다, 코트 전체를 커버하는 "스피드 레이서".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇷🇴 "루마니아의 자부심"</div>
                    <p>루마니아 최초의 여자 테니스 세계 랭킹 1위이자 윔블던 챔피언입니다. 168cm의 작은 키로 장신들의 파워 테니스 사이에서 스피드와 끈기로 살아남은 인간 승리의 아이콘입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"어그레시브 카운터 펀처"</strong></p>
                <p>수비만 하는 것이 아니라 기회가 오면 빠르게 공격으로 전환합니다. 코트 커버 범위가 엄청납니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>스피드:</strong> 투어에서 가장 빠른 발을 가졌습니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드가 매우 날카롭습니다.</li>
                    <li><strong>체력:</strong> 3세트 접전에도 지치지 않는 강철 체력입니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "이동 (Movement)", score: 10, description: "최고 수준." },
        { name: "체력 (Stamina)", score: 10, description: "에너자이저." },
        { name: "수비 (Defense)", score: 9.5, description: "다 받아냄." },
        { name: "백핸드 (Backhand)", score: 9, description: "주무기." },
        { name: "멘탈 (Mental)", score: 8, description: "다혈질 기질 있음." },
        { name: "서브 (Serve)", score: 6.5, description: "신체적 한계." },
      ],
      growthStory: `
                <p>주니어 시절 가슴 축소 수술까지 감행하며 테니스에 모든 것을 걸었습니다. 세 번의 메이저 결승 패배 끝에 2018 프랑스 오픈에서 첫 우승을 차지하며 눈물을 흘렸습니다.</p>
            `,
      signatureMatch: {
        title: "2019 윔블던 결승 vs 세레나 윌리엄스",
        date: "2019. 07. 13",
        description:
          "인생 경기. 서브 에러를 단 3개만 기록하는 완벽한 경기력으로 세레나를 2-0(6-2, 6-2)으로 완파했습니다. 경기 시간이 1시간도 채 걸리지 않았습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">❤️ "열정"</div>
                    <p>솔직하고 감정 표현이 풍부해 팬들과 잘 소통합니다. 테니스에 대한 순수한 열정이 느껴지는 선수입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"도핑 징계 후 복귀"</strong></p>
                <p>금지 약물 논란으로 징계를 받았다가 항소를 통해 기간이 단축되어 2024년 투어에 복귀했습니다. 명예 회복을 노리고 있습니다.</p>
            `,
      faq: [
        {
          question: "가슴 수술?",
          answer:
            "10대 시절 가슴이 너무 커서 움직임에 방해가 되자 축소 수술을 받았습니다. 테니스를 위해 몸까지 바꾼 그녀의 열정은 유명합니다.",
        },
      ],
    },
  },
  "zheng-qinwen": {
    name: "정친원",
    nameEn: "Zheng Qinwen",
    country: "China",
    countryFlag: "🇨🇳",
    image: "/images/players/zheng-qinwen.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '2024 파리 올림픽 금메달리스트. 리나의 뒤를 잇는 중국 테니스의 새로운 에이스로, 강력한 서브와 공격적인 플레이가 돋보이는 "Queen Wen"입니다.',
    detailedProfile: {
      oneLineSummary:
        '아시아 최초 올림픽 단식 금메달, 대륙의 기상을 품은 "Queen Wen".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥇 "History Maker"</div>
                    <p>2024 파리 올림픽 여자 단식에서 아시아 선수 최초로 금메달을 획득하며 역사를 썼습니다. 2024 호주 오픈 준우승까지 차지하며 세계 Top 10에 안착, 리나 이후 최고의 아시아 스타로 떠올랐습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"파워 베이스라이너 (Heavy Hitter)"</strong></p>
                <p>강력한 톱스핀 포핸드와 서브로 상대를 힘으로 누릅니다. 클레이 코트에서도 강한 면모를 보입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 여자 투어 최고 수준의 에이스 능력을 갖췄습니다.</li>
                    <li><strong>포핸드:</strong> 남자 선수 못지않은 강한 스핀과 파워를 자랑합니다.</li>
                    <li><strong>멘탈:</strong> 중요한 순간에 소리를 지르며 스스로를 끌어올리는 승부욕이 강합니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "파워 (Power)", score: 9.5, description: "묵직함." },
        { name: "서브 (Serve)", score: 9.5, description: "에이스 머신." },
        { name: "체력 (Stamina)", score: 9, description: "지치지 않음." },
        { name: "멘탈 (Mental)", score: 8.5, description: "강한 승부욕." },
        { name: "이동 (Movement)", score: 8, description: "준수함." },
        { name: "네트 (Net)", score: 7, description: "발전 중." },
      ],
      growthStory: `
                <p>중국 후베이성 출신입니다. 2008년 베이징 올림픽을 보고 테니스를 시작했으며, 리나의 경기를 보며 꿈을 키웠습니다. 스페인에서 훈련하며 클레이 코트 실력을 키웠습니다.</p>
            `,
      signatureMatch: {
        title: "2024 파리 올림픽 4강 vs 이가 시비옹테크",
        date: "2024. 08. 01",
        description:
          "클레이 여제 격파. 롤랑가로스에서 무적에 가깝던 시비옹테크를 상대로 2-0 완승을 거두는 대이변을 연출하며 금메달의 발판을 마련했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎤 " 노래 실력?"</div>
                    <p>인터뷰에서 노래를 부르거나 춤을 추는 등 끼가 넘칩니다. 영어 실력도 유창하여 서구권 팬들에게도 인기가 많습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Top 10 굳히기"</strong></p>
                <p>올림픽 금메달 이후 자신감이 절정에 달해 있습니다. 그랜드슬램 우승을 향해 전진 중입니다.</p>
            `,
      faq: [
        {
          question: "별명 Queen Wen?",
          answer:
            "자신의 이름 Qinwen(친원)과 발음이 비슷한 Queen(여왕)을 합쳐 팬들이 붙여준 별명입니다. 본인도 이 별명을 매우 좋아합니다.",
        },
      ],
    },
  },
  "martina-hingis": {
    name: "마르티나 힝기스",
    nameEn: "Martina Hingis",
    country: "Switzerland",
    countryFlag: "🇨🇭",
    image: "/images/players/martina-hingis.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '16세에 세계 1위에 오른 "알프스의 소녀". 힘이 아닌 두뇌와 정교한 기술로 거구들을 제압했던 테니스 아이큐 만렙의 천재입니다.',
    detailedProfile: {
      oneLineSummary:
        '힘으로 치는 테니스를 비웃듯 코트를 지휘한 "두뇌 플레이의 여왕".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧠 "Tennis IQ"</div>
                    <p>최연소 그랜드슬램 우승(16세 3개월), 최연소 세계 1위(16세 6개월) 기록 보유자입니다. 파워 테니스가 도래하던 시기, 샷의 정확도와 예측 능력만으로 세계를 제패했습니다. 단식과 복식 모두 세계 1위에 오른 전설입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"전술적 카운터 펀처 (Tactical)"</strong></p>
                <p>상대의 힘을 역이용하고, 코트의 빈 곳을 정확히 찌릅니다. 미리 가서 기다리는 예측 능력이 소름 돋습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>터치:</strong> 드롭샷, 로브, 발리 등 손기술이 예술의 경지입니다.</li>
                    <li><strong>운영:</strong> 상대를 좌우 앞뒤로 흔들어 스스로 붕괴하게 만듭니다.</li>
                    <li><strong>서브:</strong> 파워는 약했지만 코스가 매우 예리했습니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "두뇌 (IQ)", score: 10, description: "천재." },
        { name: "기술 (Technique)", score: 10, description: "마스터." },
        { name: "네트 (Net)", score: 10, description: "복식 여제." },
        { name: "예측 (Anticipation)", score: 10, description: "미래를 봄." },
        { name: "이동 (Movement)", score: 8.5, description: "효율적." },
        { name: "파워 (Power)", score: 5, description: "유일한 약점." },
      ],
      growthStory: `
                <p>슬로바키아에서 태어나 스위스로 이주했습니다. 어머니 멜라니 몰리터가 그녀를 위해 직접 코칭 프로그램을 설계하여 '테니스 기계'가 아닌 '테니스 예술가'로 키워냈습니다.</p>
            `,
      signatureMatch: {
        title: "1997 호주 오픈 결승 vs 마리 피에르스",
        date: "1997. 01. 25",
        description:
          "전설의 시작. 16세의 나이로 압도적인 경기력을 보여주며 2-0(6-2, 6-2)으로 승리, 최연소 메이저 챔피언에 등극했습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😁 "Swiss Miss"</div>
                    <p>귀여운 외모와 밝은 미소로 '스위스 미스'라 불리며 전 세계적인 인기를 누렸습니다. 두 번의 은퇴 번복 후 복식 전문 선수로 복귀하여 메이저 우승을 추가하는 모습은 감동을 주었습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"Legend"</strong></p>
                <p>2017년 세 번째 은퇴를 선언했습니다. 현재는 코치로 활동하며 후배들을 양성하고 있습니다.</p>
            `,
      faq: [
        {
          question: "이름의 유래?",
          answer:
            "어머니가 테니스 전설 마르티나 나브라틸로바의 이름을 따서 지었습니다. 이름값을 톡톡히 했습니다.",
        },
      ],
    },
  },
  "kim-clijsters": {
    name: "킴 클리스터스",
    nameEn: "Kim Clijsters",
    country: "Belgium",
    countryFlag: "🇧🇪",
    image: "/images/players/kim-clijsters.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      '코트 위의 "슈퍼맘". 은퇴 후 출산하고 돌아와서 US 오픈을 2회나 더 우승한 전설적인 선수입니다. 다리 찢기(Split) 수비가 트레이드마크인 유연함의 끝판왕입니다.',
    detailedProfile: {
      oneLineSummary:
        '은퇴와 출산은 쉼표일 뿐, 돌아와서 다시 정상에 선 "슈퍼맘".',
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👶 "Mother Champion"</div>
                    <p>2007년 23세에 은퇴하고 딸을 낳은 뒤, 2009년 복귀하여 바로 US 오픈을 우승했습니다. 어머니로서 그랜드슬램을 우승한 3명 중 한 명이자, 엄마 선수의 성공 신화를 쓴 주인공입니다. 통산 그랜드슬램 4회 우승자입니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"유연한 어그레시버"</strong></p>
                <p>남자 선수들도 하기 힘든 일자 다리 찢기(Split)를 하면서 공을 받아내는 수비 범위가 놀랍습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>움직임:</strong> 하드코트에서도 슬라이딩을 자유자재로 구사합니다.</li>
                    <li><strong>포핸드:</strong> 강력하고 스핀이 많이 걸린 포핸드로 상대를 밀어냅니다.</li>
                    <li><strong>성격:</strong> '우리가 사랑한 킴(Our Kim)'이라 불릴 정도로 매너가 좋고 성격이 쾌활합니다.</li>
                </ul>
            `,
      hexagonStats: [
        { name: "이동 (Movement)", score: 10, description: "전매특허 스플릿." },
        { name: "파워 (Power)", score: 9, description: "묵직함." },
        { name: "멘탈 (Mental)", score: 9.5, description: "긍정의 힘." },
        { name: "수비 (Defense)", score: 9.5, description: "철벽." },
        { name: "네트 (Net)", score: 7.5, description: "준수함." },
        { name: "서브 (Serve)", score: 8, description: "안정적." },
      ],
      growthStory: `
                <p>벨기에 빌젠 출신입니다. 축구 선수 아버지와 체조 선수 어머니의 유전자를 물려받아 뛰어난 운동 신경을 가졌습니다. 라이벌 쥐스틴 에넹과 함께 벨기에 테니스의 황금기를 이끌었습니다.</p>
            `,
      signatureMatch: {
        title: "2009 US 오픈 결승 vs 캐롤라인 보즈니아키",
        date: "2009. 09. 13",
        description:
          "동화 같은 우승. 와일드카드로 출전해 우승까지 차지한 최초의 선수. 우승 후 딸 제이다가 코트로 내려와 트로피를 만지는 장면은 테니스 역사상 가장 사랑스러운 순간 중 하나입니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥰 "Aussie Kim"</div>
                    <p>레이튼 휴이트와 약혼했었던 인연으로 호주 팬들에게 'Aussie Kim'이라 불리며 자국 선수만큼의 사랑을 받았습니다. 항상 웃는 얼굴과 친절한 태도는 모든 이의 호감을 샀습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"영원한 레전드"</strong></p>
                <p>2022년 세 번째 은퇴를 했습니다. 명예의 전당에 헌액되었으며, 레전드 매치 등에 참가하며 테니스를 즐기고 있습니다.</p>
            `,
      faq: [
        {
          question: "다리 찢기 비결?",
          answer:
            "체조 선수 출신인 어머니의 영향으로 유연성을 타고났으며, 어릴 때부터 꾸준히 스트레칭을 했다고 합니다.",
        },
      ],
    },
  },
  "clara-tauson": {
    name: "클라라 타우손",
    nameEn: "Clara Tauson",
    country: "Denmark",
    countryFlag: "🇩🇰",
    image: "/images/players/clara-tauson.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "클라라 타우손는 덴마크 출신의 여자 프로 테니스 선수다. WTA에서 파워 테니스의 존재감을 보여주는 선수다. 강한 볼 스피드와 직선적인 선공을 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "덴마크 출신의 여자 프로 선수로, 강한 볼 스피드와 직선적인 선공이 돋보이는 투어 자원이다.",
      whyNotable: `<p>클라라 타우손는 WTA에서 파워 테니스의 존재감을 보여주는 선수다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>클라라 타우손의 플레이는 강한 볼 스피드와 직선적인 선공을 앞세운 전개로 정리할 수 있다. 오른손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>클라라 타우손는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 실내 하드코트 강타전",
        date: "2024",
        description:
          "강한 초구와 빠른 전환으로 코트를 짧게 쓰며 화력을 증명한 경기였다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 8.3,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 8.5,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 8.0,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 7.3,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.5,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 7.8,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>파워 히팅이 분명해서 공격 성향 WTA 경기를 선호하는 팬에게 매력이 크다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "클라라 타우손의 가장 큰 강점은 무엇인가요?",
          answer:
            "강한 볼 스피드와 직선적인 선공이 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "클라라 타우손를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "오른손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "lulu-sun": {
    name: "룰루 선",
    nameEn: "Lulu Sun",
    country: "New Zealand",
    countryFlag: "🇳🇿",
    image: "/images/players/lulu-sun.png",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "룰루 선는 뉴질랜드 출신의 여자 프로 테니스 선수다. 코트별로 전술 폭을 조절하는 능력이 좋은 편이다. 왼손 변형 패턴과 다양한 전개를 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "뉴질랜드 출신의 여자 프로 선수로, 왼손 변형 패턴과 다양한 전개가 돋보이는 투어 자원이다.",
      whyNotable: `<p>룰루 선는 코트별로 전술 폭을 조절하는 능력이 좋은 편이다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>룰루 선의 플레이는 왼손 변형 패턴과 다양한 전개를 앞세운 전개로 정리할 수 있다. 왼손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>룰루 선는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 잔디코트 돌풍 경기",
        date: "2024",
        description:
          "왼손 코스와 템포 변화가 크게 통하며 상위 레벨 무대에서 경쟁력을 드러낸 경기다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 7.7,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 7.8,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.5,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 7.8,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.7,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 8.0,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>왼손 변주와 전술 다양성이 좋아 한 포인트 단위로 보는 재미가 크다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "룰루 선의 가장 큰 강점은 무엇인가요?",
          answer:
            "왼손 변형 패턴과 다양한 전개가 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "룰루 선를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "왼손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "mccartney-kessler": {
    name: "맥카트니 케슬러",
    nameEn: "McCartney Kessler",
    country: "USA",
    countryFlag: "🇺🇸",
    image: "/images/players/mccartney-kessler.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "맥카트니 케슬러는 미국 출신의 여자 프로 테니스 선수다. WTA 레벨에서 점진적으로 경쟁력을 키우는 흐름이 보인다. 콤팩트한 공격과 기본기 안정감을 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "미국 출신의 여자 프로 선수로, 콤팩트한 공격과 기본기 안정감이 돋보이는 투어 자원이다.",
      whyNotable: `<p>맥카트니 케슬러는 WTA 레벨에서 점진적으로 경쟁력을 키우는 흐름이 보인다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>맥카트니 케슬러의 플레이는 콤팩트한 공격과 기본기 안정감을 앞세운 전개로 정리할 수 있다. 오른손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>맥카트니 케슬러는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 북미 하드코트 상승세 경기",
        date: "2024",
        description:
          "공격 전환은 간결하지만 효율적이라는 점을 잘 보여주며 자신감을 키운 경기였다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 7.5,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 7.8,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.7,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 7.7,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.5,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 7.9,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>과장되지 않은 기술 구성으로 단계적으로 성장하는 과정을 보기 좋다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "맥카트니 케슬러의 가장 큰 강점은 무엇인가요?",
          answer:
            "콤팩트한 공격과 기본기 안정감이 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "맥카트니 케슬러를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "오른손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "ashlyn-krueger": {
    name: "애슐린 크루거",
    nameEn: "Ashlyn Krueger",
    country: "USA",
    countryFlag: "🇺🇸",
    image: "/images/players/ashlyn-krueger.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "애슐린 크루거는 미국 출신의 여자 프로 테니스 선수다. 미국 차세대 자원으로 꾸준히 거론되는 이름이다. 운동 능력과 파워가 살아 있는 현대적 공격형을 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "미국 출신의 여자 프로 선수로, 운동 능력과 파워가 살아 있는 현대적 공격형이 돋보이는 투어 자원이다.",
      whyNotable: `<p>애슐린 크루거는 미국 차세대 자원으로 꾸준히 거론되는 이름이다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>애슐린 크루거의 플레이는 운동 능력과 파워가 살아 있는 현대적 공격형을 앞세운 전개로 정리할 수 있다. 오른손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>애슐린 크루거는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 상위권 상대로 만든 업셋",
        date: "2024",
        description:
          "강한 공과 적극적인 코트 포지션으로 상위 랭커를 흔들며 잠재력을 입증한 경기였다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 8.1,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 8.2,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.6,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 7.8,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.3,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 7.7,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>피지컬과 공격성이 분명해 차세대 파워 테니스 흐름을 보여주는 선수로 소비된다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "애슐린 크루거의 가장 큰 강점은 무엇인가요?",
          answer:
            "운동 능력과 파워가 살아 있는 현대적 공격형이 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "애슐린 크루거를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "오른손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "peyton-stearns": {
    name: "페이턴 스턴스",
    nameEn: "Peyton Stearns",
    country: "USA",
    countryFlag: "🇺🇸",
    image: "/images/players/peyton-stearns.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "페이턴 스턴스는 미국 출신의 여자 프로 테니스 선수다. 긴 경기에서 경쟁력이 좋은 베이스라이너로 평가된다. 묵직한 랠리와 체력 기반 압박을 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "미국 출신의 여자 프로 선수로, 묵직한 랠리와 체력 기반 압박이 돋보이는 투어 자원이다.",
      whyNotable: `<p>페이턴 스턴스는 긴 경기에서 경쟁력이 좋은 베이스라이너로 평가된다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>페이턴 스턴스의 플레이는 묵직한 랠리와 체력 기반 압박을 앞세운 전개로 정리할 수 있다. 오른손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>페이턴 스턴스는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 장기전 승리",
        date: "2024",
        description:
          "체력과 중후반 집중력을 기반으로 긴 경기 흐름을 뒤집은 장면이 스턴스의 장점을 잘 드러냈다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 7.4,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 8.0,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.7,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 8.0,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.6,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 8.2,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>쉽게 무너지지 않는 체력전 능력 덕분에 접전형 경기를 좋아하는 팬에게 어울린다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "페이턴 스턴스의 가장 큰 강점은 무엇인가요?",
          answer:
            "묵직한 랠리와 체력 기반 압박이 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "페이턴 스턴스를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "오른손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "alycia-parks": {
    name: "알리시아 파크스",
    nameEn: "Alycia Parks",
    country: "USA",
    countryFlag: "🇺🇸",
    image: "/images/players/alycia-parks.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "알리시아 파크스는 미국 출신의 여자 프로 테니스 선수다. 서비스 게임의 파괴력이 매우 눈에 띄는 유형이다. 강서브와 빠른 마무리를 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "미국 출신의 여자 프로 선수로, 강서브와 빠른 마무리가 돋보이는 투어 자원이다.",
      whyNotable: `<p>알리시아 파크스는 서비스 게임의 파괴력이 매우 눈에 띄는 유형이다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>알리시아 파크스의 플레이는 강서브와 빠른 마무리를 앞세운 전개로 정리할 수 있다. 오른손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>알리시아 파크스는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 서브 지배 경기",
        date: "2024",
        description:
          "에이스와 첫 볼 마무리 비중이 높게 나오며 서비스 무기를 극대화한 경기로 남았다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 9.0,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 8.0,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.2,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 7.1,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 6.9,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 7.5,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>강한 서브를 앞세운 쇼트 포인트 성향이라 전개가 빠르고 인상적인 장면이 많다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "알리시아 파크스의 가장 큰 강점은 무엇인가요?",
          answer:
            "강서브와 빠른 마무리가 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "알리시아 파크스를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "오른손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "sonay-kartal": {
    name: "소나이 카르탈",
    nameEn: "Sonay Kartal",
    country: "Great Britain",
    countryFlag: "🇬🇧",
    image: "/images/players/sonay-kartal.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "소나이 카르탈는 영국 출신의 여자 프로 테니스 선수다. 투어 경험을 쌓으면서 경기 완성도를 끌어올리고 있다. 규율 있는 랠리와 흔들림 적은 템포를 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "영국 출신의 여자 프로 선수로, 규율 있는 랠리와 흔들림 적은 템포가 돋보이는 투어 자원이다.",
      whyNotable: `<p>소나이 카르탈는 투어 경험을 쌓으면서 경기 완성도를 끌어올리고 있다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>소나이 카르탈의 플레이는 규율 있는 랠리와 흔들림 적은 템포를 앞세운 전개로 정리할 수 있다. 오른손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>소나이 카르탈는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 투어 본선 견고한 승리",
        date: "2024",
        description:
          "자기 리듬을 크게 잃지 않고 경기 전체 템포를 관리한 점이 돋보인 경기였다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 7.1,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 7.6,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.7,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 8.0,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.8,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 8.0,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>과장 없이 단단한 랠리 구조를 보여줘 응원하기 편한 성장형 선수로 받아들여진다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "소나이 카르탈의 가장 큰 강점은 무엇인가요?",
          answer:
            "규율 있는 랠리와 흔들림 적은 템포가 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "소나이 카르탈를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "오른손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "olga-danilovic": {
    name: "올가 다닐로비치",
    nameEn: "Olga Danilovic",
    country: "Serbia",
    countryFlag: "🇷🇸",
    image: "/images/players/olga-danilovic.png",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "올가 다닐로비치는 세르비아 출신의 여자 프로 테니스 선수다. 한 번 흐름을 잡으면 상대를 몰아붙이는 능력이 좋다. 왼손 파워와 과감한 패턴 전환을 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "세르비아 출신의 여자 프로 선수로, 왼손 파워와 과감한 패턴 전환이 돋보이는 투어 자원이다.",
      whyNotable: `<p>올가 다닐로비치는 한 번 흐름을 잡으면 상대를 몰아붙이는 능력이 좋다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>올가 다닐로비치의 플레이는 왼손 파워와 과감한 패턴 전환을 앞세운 전개로 정리할 수 있다. 왼손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>올가 다닐로비치는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 클레이 상승세 경기",
        date: "2024",
        description:
          "왼손 공격 전개가 제대로 맞물리며 경기 주도권을 길게 유지한 인상적인 승리였다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 7.8,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 8.4,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.6,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 7.5,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.4,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 7.8,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>왼손 파워가 터질 때의 폭발력이 뚜렷해 업사이드가 큰 선수로 보인다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "올가 다닐로비치의 가장 큰 강점은 무엇인가요?",
          answer:
            "왼손 파워와 과감한 패턴 전환이 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "올가 다닐로비치를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "왼손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "yulia-putintseva": {
    name: "율리야 푸틴체바",
    nameEn: "Yulia Putintseva",
    country: "Kazakhstan",
    countryFlag: "🇰🇿",
    image: "/images/players/yulia-putintseva.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "율리야 푸틴체바는 카자흐스탄 출신의 여자 프로 테니스 선수다. 상대 입장에서 매우 불편한 투쟁형 선수로 통한다. 집요한 수비와 까다로운 경기 리듬을 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "카자흐스탄 출신의 여자 프로 선수로, 집요한 수비와 까다로운 경기 리듬이 돋보이는 투어 자원이다.",
      whyNotable: `<p>율리야 푸틴체바는 상대 입장에서 매우 불편한 투쟁형 선수로 통한다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>율리야 푸틴체바의 플레이는 집요한 수비와 까다로운 경기 리듬을 앞세운 전개로 정리할 수 있다. 오른손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>율리야 푸틴체바는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 상위 시드 접전 승리",
        date: "2024",
        description:
          "지치지 않는 수비와 기세 싸움으로 더 강한 상대를 흔들어 이변을 만든 경기였다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 6.9,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 7.7,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.8,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 8.4,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 8.0,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 8.5,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>감정선이 분명하고 악착같은 경기 운영을 보여줘 캐릭터성이 강하다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "율리야 푸틴체바의 가장 큰 강점은 무엇인가요?",
          answer:
            "집요한 수비와 까다로운 경기 리듬이 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "율리야 푸틴체바를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "오른손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "rebeka-masarova": {
    name: "레베카 마사로바",
    nameEn: "Rebeka Masarova",
    country: "Spain",
    countryFlag: "🇪🇸",
    image: "/images/players/rebeka-masarova.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "레베카 마사로바는 스페인 출신의 여자 프로 테니스 선수다. 피지컬 장점을 바탕으로 투어 적응력을 키우는 중이다. 긴 리치와 묵직한 전개를 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "스페인 출신의 여자 프로 선수로, 긴 리치와 묵직한 전개가 돋보이는 투어 자원이다.",
      whyNotable: `<p>레베카 마사로바는 피지컬 장점을 바탕으로 투어 적응력을 키우는 중이다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>레베카 마사로바의 플레이는 긴 리치와 묵직한 전개를 앞세운 전개로 정리할 수 있다. 오른손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>레베카 마사로바는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 하드코트 상승세 경기",
        date: "2024",
        description:
          "높은 타점과 긴 리치를 활용한 압박으로 상대 타이밍을 무너뜨린 경기다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 7.8,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 7.9,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.4,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 7.2,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.1,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 7.6,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>기본 피지컬이 좋아 완성도가 올라갈수록 상승 폭이 큰 선수로 보인다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "레베카 마사로바의 가장 큰 강점은 무엇인가요?",
          answer:
            "긴 리치와 묵직한 전개가 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "레베카 마사로바를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "오른손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "elena-avanesyan": {
    name: "엘레나 아바네샨",
    nameEn: "Elena Avanesyan",
    country: "Armenia",
    countryFlag: "🇦🇲",
    image: "/images/players/elena-avanesyan.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "엘레나 아바네샨는 아르메니아 출신의 여자 프로 테니스 선수다. 한 단계씩 성장 폭을 넓혀가는 투어형 선수다. 끈질긴 랠리와 집중력 있는 수비를 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "아르메니아 출신의 여자 프로 선수로, 끈질긴 랠리와 집중력 있는 수비가 돋보이는 투어 자원이다.",
      whyNotable: `<p>엘레나 아바네샨는 한 단계씩 성장 폭을 넓혀가는 투어형 선수다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>엘레나 아바네샨의 플레이는 끈질긴 랠리와 집중력 있는 수비를 앞세운 전개로 정리할 수 있다. 오른손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>엘레나 아바네샨는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 클레이 접전 경기",
        date: "2024",
        description:
          "쉽게 포인트를 내주지 않는 수비 밀도로 상대를 지치게 만든 경기 운영이 돋보였다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 6.8,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 7.4,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.6,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 8.2,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.8,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 8.0,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>꾸준히 발전하는 수비형 자원을 좋아하는 팬에게 안정적인 기대치를 준다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "엘레나 아바네샨의 가장 큰 강점은 무엇인가요?",
          answer:
            "끈질긴 랠리와 집중력 있는 수비가 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "엘레나 아바네샨를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "오른손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "moyuka-uchijima": {
    name: "모유카 우치지마",
    nameEn: "Moyuka Uchijima",
    country: "Japan",
    countryFlag: "🇯🇵",
    image: "/images/players/moyuka-uchijima.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "모유카 우치지마는 일본 출신의 여자 프로 테니스 선수다. 견고한 밸런스로 여러 대회에서 꾸준함을 보이는 타입이다. 안정적인 템포와 실수 억제력을 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "일본 출신의 여자 프로 선수로, 안정적인 템포와 실수 억제력이 돋보이는 투어 자원이다.",
      whyNotable: `<p>모유카 우치지마는 견고한 밸런스로 여러 대회에서 꾸준함을 보이는 타입이다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>모유카 우치지마의 플레이는 안정적인 템포와 실수 억제력을 앞세운 전개로 정리할 수 있다. 오른손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>모유카 우치지마는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 아시아 하드코트 선전 경기",
        date: "2024",
        description:
          "실수를 최소화하며 상대에게 계속 한 볼을 더 치게 만든 경기 운영이 강점으로 드러났다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 7.0,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 7.4,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.5,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 7.8,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.7,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 7.9,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>크게 흔들리지 않는 밸런스형 선수라 꾸준한 성적 추적에 적합하다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "모유카 우치지마의 가장 큰 강점은 무엇인가요?",
          answer:
            "안정적인 템포와 실수 억제력이 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "모유카 우치지마를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "오른손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "eva-lys": {
    name: "에바 리스",
    nameEn: "Eva Lys",
    country: "Germany",
    countryFlag: "🇩🇪",
    image: "/images/players/eva-lys.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "에바 리스는 독일 출신의 여자 프로 테니스 선수다. 젊은 세대 가운데 성장 흐름이 뚜렷한 선수다. 공격 전환 타이밍과 스트로크 완성도를 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "독일 출신의 여자 프로 선수로, 공격 전환 타이밍과 스트로크 완성도가 돋보이는 투어 자원이다.",
      whyNotable: `<p>에바 리스는 젊은 세대 가운데 성장 흐름이 뚜렷한 선수다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>에바 리스의 플레이는 공격 전환 타이밍과 스트로크 완성도를 앞세운 전개로 정리할 수 있다. 오른손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>에바 리스는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 유럽 실내 하드코트 경기",
        date: "2024",
        description:
          "수비에서 공격으로 넘어가는 속도가 좋아 차세대 자원으로서의 장점을 보여준 경기였다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 7.3,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 7.8,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.8,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 7.7,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.5,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 7.8,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>또래 대비 경기 완성도가 빠르게 올라와 성장 곡선에 대한 기대감이 크다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "에바 리스의 가장 큰 강점은 무엇인가요?",
          answer:
            "공격 전환 타이밍과 스트로크 완성도가 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "에바 리스를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "오른손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "robin-montgomery": {
    name: "로빈 몽고메리",
    nameEn: "Robin Montgomery",
    country: "USA",
    countryFlag: "🇺🇸",
    image: "/images/players/robin-montgomery.png",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "로빈 몽고메리는 미국 출신의 여자 프로 테니스 선수다. 미국의 차세대 왼손 유망주로 주목받는 이름이다. 왼손 패턴과 전방 압박의 조합을 앞세워 투어 무대에서 경쟁력을 넓혀가고 있다.",
    detailedProfile: {
      oneLineSummary:
        "미국 출신의 여자 프로 선수로, 왼손 패턴과 전방 압박의 조합이 돋보이는 투어 자원이다.",
      whyNotable: `<p>로빈 몽고메리는 미국의 차세대 왼손 유망주로 주목받는 이름이다. 폭발적인 하이라이트 한 장면만으로 설명되기보다, 자신의 장점을 반복 가능한 패턴으로 연결해 경기의 흐름을 만들어 간다는 점에서 가치가 크다.</p>`,
      playStyle: `<p>로빈 몽고메리의 플레이는 왼손 패턴과 전방 압박의 조합을 앞세운 전개로 정리할 수 있다. 왼손 플레이어답게 코스 선택과 타점 조절이 분명하며, 서브 이후 첫 두세 번의 볼 교환에서 주도권을 잡는 장면이 자주 나온다.</p>`,
      growthStory: `<p>로빈 몽고메리는 투어 레벨 경험을 쌓으면서 경기 운영의 완성도를 끌어올리는 단계에 있다. 단기적인 이변보다 시즌 전체를 통해 랭킹과 매치 경쟁력을 높여 가는 성장 곡선이 더 중요한 선수다.</p>`,
      signatureMatch: {
        title: "2024 북미 하드코트 강한 인상 경기",
        date: "2024",
        description:
          "왼손 코스와 전진 압박이 잘 맞물리며 경기 전체 인상을 주도한 장면이 대표적이다.",
      },
      hexagonStats: [
        {
          name: "서브",
          score: 7.7,
          description: "첫 서브의 안정감과 무료 포인트 생산력.",
        },
        {
          name: "포핸드",
          score: 8.0,
          description: "주도권을 잡는 핵심 공격 수단.",
        },
        {
          name: "백핸드",
          score: 7.5,
          description: "랠리 균형과 방향 전환 완성도.",
        },
        {
          name: "움직임",
          score: 7.8,
          description: "코트 커버와 타점 진입 속도.",
        },
        {
          name: "리턴",
          score: 7.6,
          description: "상대 서브를 중립 이상으로 돌려놓는 능력.",
        },
        {
          name: "멘탈",
          score: 7.9,
          description: "접전 상황에서의 선택과 집중력.",
        },
      ],
      fanAppeal: `<p>미국 여자 테니스에서 드문 왼손 공격형 자원이라 차별화 포인트가 분명하다.</p>`,
      recentForm: `<p>최근 흐름에서는 랠리 안정감과 패턴 선택의 일관성이 핵심 지표다. 일정이 누적되는 구간에서 기본기가 유지되면 상위권 선수와의 경기에서도 충분히 변수로 작용할 수 있다.</p>`,
      faq: [
        {
          question: "로빈 몽고메리의 가장 큰 강점은 무엇인가요?",
          answer:
            "왼손 패턴과 전방 압박의 조합이 가장 큰 강점이다. 무리한 변칙보다 자신이 잘하는 전개를 반복해 상대를 흔드는 방식에서 강점이 분명하다.",
        },
        {
          question: "로빈 몽고메리를 볼 때 체크할 포인트는 무엇인가요?",
          answer:
            "왼손 플레이어로서의 코스 선택, 서브 다음 볼의 연결, 그리고 위기 상황에서도 템포를 유지하는지를 보면 이 선수의 경기 수준을 빠르게 파악할 수 있다.",
        },
      ],
    },
  },
  "narae-han": {
    name: "한나래",
    nameEn: "Narae Han",
    country: "South Korea",
    countryFlag: "🇰🇷",
    image: "/images/players/narae-han.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "한나래는 한국 여자 테니스의 대표 선수로, WTA 투어와 그랜드슬램 본선에 꾸준히 출전하며 한국 여자 테니스의 위상을 높여온 선수입니다. 안정적인 스트로크와 강한 정신력이 강점입니다.",
    detailedProfile: {
      oneLineSummary:
        "한국 여자 테니스의 간판, 꾸준함으로 세계 무대에 도전하는 투지의 선수.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇰🇷 한국 여자 테니스의 개척자</div>
                    <p>WTA 투어와 그랜드슬램 본선에 꾸준히 출전하며 한국 여자 테니스의 가능성을 세계에 알린 선수입니다. 데이비스컵/빌리진킹컵 한국 대표로 오랜 기간 활약해왔습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"안정감의 끝판왕 (The Steady Force)"</strong></p>
                <p>한나래의 테니스는 '실수를 줄이는 것'에 초점이 맞춰져 있습니다. 안정적인 양손 백핸드와 정확한 볼 배치로 상대의 실수를 유도하는 스타일입니다.</p>
            `,
      hexagonStats: [
        {
          name: "안정성 (Consistency)",
          score: 9,
          description: "비강제 에러를 최소화하는 안정적인 스트로크.",
        },
        {
          name: "멘탈 (Mental)",
          score: 8.5,
          description: "경기 후반에도 흔들리지 않는 강한 정신력.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 8,
          description: "일관성 있는 양손 백핸드.",
        },
        {
          name: "리턴 (Return)",
          score: 8,
          description: "상대 서브를 안정적으로 돌려보내는 능력.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 7.5,
          description: "필요할 때 공격적으로 전환 가능.",
        },
        {
          name: "서브 (Serve)",
          score: 7,
          description: "안정적이지만 위력이 더 필요한 부분.",
        },
      ],
      growthStory: `
                <p>어릴 때부터 테니스에 재능을 보였으며, 국내 대회를 석권한 뒤 국제 무대로 진출했습니다.</p>
                <p>한국 여자 테니스가 세계 무대에서 주목받기 어려운 환경 속에서도 묵묵히 투어를 돌며 후배들에게 길을 열어주고 있습니다.</p>
            `,
      signatureMatch: {
        title: "그랜드슬램 본선 첫 승리",
        description:
          "한국 여자 선수로서 그랜드슬램 본선에서 승리를 거두며, 한국 여자 테니스의 새로운 가능성을 보여주었습니다.",
      },
      recentForm: `
                <p><strong>"경험과 노하우의 원숙한 시기"</strong></p>
                <p>풍부한 투어 경험을 바탕으로 후배 양성에도 힘쓰며, 한국 여자 테니스의 발전에 기여하고 있습니다.</p>
            `,
      faq: [
        {
          question: "한나래 선수의 주요 성적은?",
          answer:
            "WTA 투어 본선 다수 진출, 그랜드슬램 본선 출전, 빌리진킹컵 한국 대표 등이 주요 성적입니다.",
        },
      ],
    },
  },
  "sujeong-jang": {
    name: "장수정",
    nameEn: "Sujeong Jang",
    country: "South Korea",
    countryFlag: "🇰🇷",
    image: "/images/players/sujeong-jang.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "장수정은 한국 여자 테니스의 떠오르는 유망주로, ITF 서킷과 WTA 챌린저에서 활발히 활동하며 세계 무대 진출을 준비하고 있는 기대주입니다.",
    detailedProfile: {
      oneLineSummary: "한국 여자 테니스의 미래를 이끌 차세대 유망주.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌸 한국 여자 테니스의 새로운 희망</div>
                    <p>ITF 서킷에서 꾸준한 성적을 올리며 WTA 투어 진입을 노리고 있습니다. 공격적이고 현대적인 테니스를 구사하며, 한국 여자 테니스의 새로운 가능성을 보여주고 있습니다.</p>
                </div>
            `,
      playStyle: `
                <p><strong>"현대적 공격 테니스 (The Modern Attacker)"</strong></p>
                <p>빠른 스윙 스피드와 적극적인 코트 장악력이 특징입니다. 한국 여자 선수 중에서도 공격적인 스타일로 차별화되며, 포핸드의 파워와 각도가 주무기입니다.</p>
            `,
      hexagonStats: [
        {
          name: "포핸드 (Forehand)",
          score: 8,
          description: "공격적이고 각도 있는 포핸드가 주무기.",
        },
        {
          name: "체력 (Stamina)",
          score: 8,
          description: "젊은 에너지로 긴 경기에도 강함.",
        },
        {
          name: "스피드 (Speed)",
          score: 7.5,
          description: "빠른 발로 넓은 코트 커버리지.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 7.5,
          description: "성장 중인 안정적 백핸드.",
        },
        {
          name: "서브 (Serve)",
          score: 7,
          description: "꾸준히 발전 중인 서브.",
        },
        {
          name: "멘탈 (Mental)",
          score: 7,
          description: "경험과 함께 성장할 멘탈.",
        },
      ],
      growthStory: `
                <p>어린 시절부터 테니스에 두각을 나타내며 한국 주니어 대회를 석권했습니다.</p>
                <p>ITF 서킷을 중심으로 국제 경험을 쌓으며, WTA 본무대를 향해 한 걸음씩 나아가고 있습니다.</p>
            `,
      recentForm: `
                <p><strong>"ITF에서 WTA로, 성장의 계단"</strong></p>
                <p>ITF 대회에서 우승 경험을 쌓으며 WTA 투어 진입을 위한 랭킹을 올리고 있습니다.</p>
            `,
      faq: [
        {
          question: "장수정 선수의 목표는?",
          answer:
            "WTA 본투어 안착과 그랜드슬램 예선 돌파가 단기 목표이며, 한국 여자 테니스를 세계에 알리는 것이 꿈입니다.",
        },
      ],
    },
  },
  "emma-raducanu": {
    name: "엠마 라두카누",
    nameEn: "Emma Raducanu",
    country: "Great Britain",
    countryFlag: "🇬🇧",
    image: "/images/players/emma-raducanu.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "엠마 라두카누는 2021년 US오픈에서 예선부터 본선 우승까지 단 한 세트도 내주지 않는 전무후무한 기록을 세우며 테니스 역사를 새로 쓴 선수입니다. 루마니아와 중국 혈통을 가진 영국 선수로, 공격적이면서도 다채로운 테니스를 구사합니다.",
    detailedProfile: {
      oneLineSummary:
        "예선에서 시작해 US오픈 정상에 오른, 테니스 역사상 가장 드라마틱한 우승의 주인공.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 역사상 최초 예선 출전 그랜드슬램 우승자</div>
                    <p>2021년 US오픈에서 예선 3경기, 본선 7경기 총 10경기를 단 한 세트도 내주지 않고 우승하며, 오픈 시대 최초로 예선 출전자가 그랜드슬램 타이틀을 거머쥔 전설적인 기록을 세웠습니다.</p>
                </div>
                <p>당시 세계 랭킹 150위 밖이었던 18세 소녀가 이룬 이 업적은 테니스 역사상 가장 놀라운 동화 같은 이야기로 회자됩니다.</p>
            `,
      playStyle: `
                <p><strong>"다재다능한 올라운더 (The Versatile All-Rounder)"</strong></p>
                <p>라두카누의 테니스는 다양한 샷 선택과 뛰어난 볼 스트라이킹이 특징입니다. 강력한 포핸드와 정확한 백핸드를 기반으로 공격적인 베이스라인 테니스를 구사하며, 필요할 때 네트 플레이도 소화할 수 있는 다재다능함을 갖추고 있습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 핵심 강점</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>볼 스트라이킹:</strong> 깨끗하고 정확한 타구감</li>
                        <li><strong>다양한 샷 레퍼토리:</strong> 드롭샷, 슬라이스, 앵글 샷 등 다채로운 기술</li>
                        <li><strong>빠른 적응력:</strong> 상대의 스타일에 맞춰 전술을 변화시키는 능력</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "볼 스트라이킹 (Ball Striking)",
          score: 9,
          description: "깨끗하고 파워풀한 타구가 최대 강점.",
        },
        {
          name: "다양성 (Versatility)",
          score: 8.5,
          description: "다양한 샷과 전술을 구사하는 능력.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 8.5,
          description: "강력하고 정확한 포핸드 위너.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 8,
          description: "안정적이고 공격 전환이 가능한 백핸드.",
        },
        {
          name: "서브 (Serve)",
          score: 7.5,
          description: "꾸준히 개선 중인 서브 게임.",
        },
        {
          name: "체력 (Fitness)",
          score: 7,
          description: "부상 이력으로 인해 지속적인 관리가 필요.",
        },
      ],
      growthStory: `
                <p>런던 브롬리에서 태어난 라두카누는 루마니아인 아버지와 중국인 어머니 사이에서 자라며 다문화적 배경 속에서 테니스를 시작했습니다. 어린 시절부터 뛰어난 운동 능력을 보였으며, 학업과 테니스를 병행하며 A레벨 시험에서도 우수한 성적을 거뒀습니다.</p>
                <p>2021년 윔블던에서 4라운드까지 진출하며 주목받기 시작했고, 불과 두 달 뒤 US오픈에서 동화 같은 우승을 달성했습니다. 이후 부상과 컨디션 조절에 어려움을 겪었지만, 꾸준한 재활과 노력으로 투어 복귀를 이어가고 있습니다.</p>
            `,
      signatureMatch: {
        title: "2021 US오픈 결승 vs 레일라 페르난데스",
        date: "2021. 09. 11",
        description:
          "결승전에서 <strong>6-4, 6-3</strong>으로 승리하며 오픈 시대 최초 예선 출전 그랜드슬램 챔피언이 되었습니다. 10경기 연속 스트레이트 승리라는 경이로운 기록으로 테니스 역사에 이름을 새겼습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌟 동화 같은 신데렐라 스토리</div>
                    <p>무명의 예선 출전자에서 그랜드슬램 챔피언으로 — 라두카누의 2021년 US오픈 우승은 스포츠 역사상 가장 감동적인 이야기 중 하나입니다. 밝고 긍정적인 성격과 다문화적 배경은 전 세계 팬들에게 큰 영감을 주고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"재기를 향한 여정"</strong></p>
                <p>손목과 발목 부상으로 어려운 시기를 보냈지만, 꾸준한 재활을 통해 투어에 복귀하며 다시 한 번 상위권 도약을 노리고 있습니다. 여전히 뛰어난 잠재력을 가진 선수로 평가받고 있습니다.</p>
            `,
      faq: [
        {
          question: "라두카누의 2021 US오픈 우승이 특별한 이유는?",
          answer:
            "오픈 시대 역사상 최초로 예선에서 시작해 그랜드슬램을 우승한 선수이며, 10경기 모두 스트레이트로 승리한 전무후무한 기록입니다.",
        },
        {
          question: "라두카누 선수의 국적과 배경은?",
          answer:
            "영국 국적으로 루마니아인 아버지와 중국인 어머니를 두고 있습니다. 런던에서 태어나 자랐으며, A레벨 시험에서도 뛰어난 성적을 거둔 수재이기도 합니다.",
        },
      ],
    },
  },
  "mirra-andreeva": {
    name: "미라 안드레바",
    nameEn: "Mirra Andreeva",
    country: "Russia",
    countryFlag: "🇷🇺",
    image: "/images/players/mirra-andreeva.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "미라 안드레바는 WTA 투어에서 가장 주목받는 10대 선수로, 17세의 나이에 이미 톱 선수들을 격파하며 차세대 여자 테니스의 아이콘으로 떠올랐습니다. 뛰어난 코트 센스와 대담한 플레이가 돋보이는 러시아 출신의 신성입니다.",
    detailedProfile: {
      oneLineSummary:
        "17세에 세계를 놀라게 한 WTA 차세대 에이스, 러시아 테니스의 새로운 희망.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌟 WTA 차세대 에이스</div>
                    <p>2023년부터 WTA 투어에서 돌풍을 일으키며, 톱 10 선수들을 연이어 격파하는 파란을 일으켰습니다. 2024년 롤랑가로스 준결승 진출은 그녀의 잠재력을 전 세계에 확인시켜준 순간이었습니다.</p>
                </div>
                <p>10대 선수 중 가장 빠르게 성장하고 있으며, 미래의 그랜드슬램 챔피언 후보로 꼽히고 있습니다.</p>
            `,
      playStyle: `
                <p><strong>"대담한 올코트 플레이어 (The Fearless All-Court Player)"</strong></p>
                <p>안드레바의 테니스는 나이답지 않은 전술적 성숙함이 특징입니다. 다양한 스핀과 변화구를 활용하며, 드롭샷과 앵글 플레이에서 뛰어난 감각을 보여줍니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 핵심 강점</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>코트 센스:</strong> 나이에 비해 놀라운 전술적 판단력</li>
                        <li><strong>다양한 기술:</strong> 드롭샷, 슬라이스, 로브 등 풍부한 샷 메이킹</li>
                        <li><strong>대담함:</strong> 큰 무대에서도 위축되지 않는 정신력</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "코트 센스 (Court Sense)",
          score: 9,
          description: "전술적 이해도가 10대 선수 중 최고 수준.",
        },
        {
          name: "다양성 (Versatility)",
          score: 8.5,
          description: "드롭샷, 슬라이스 등 다양한 기술 보유.",
        },
        {
          name: "멘탈 (Mental)",
          score: 8.5,
          description: "큰 무대에서 더 빛나는 대담한 정신력.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 8,
          description: "양손 백핸드의 안정성과 변화구가 뛰어남.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 7.5,
          description: "파워보다 정확성에 초점을 맞춘 포핸드.",
        },
        {
          name: "서브 (Serve)",
          score: 7,
          description: "아직 발전 중이지만 꾸준히 개선되고 있음.",
        },
      ],
      growthStory: `
                <p>러시아 크라스노야르스크 출신으로, 언니 에리카 안드레바와 함께 테니스를 시작했습니다. 어린 시절부터 뛰어난 재능을 보이며 주니어 대회에서 두각을 나타냈습니다.</p>
                <p>2023년 WTA 투어 데뷔 직후부터 톱 선수들을 꺾으며 주목받기 시작했고, 2024년에는 롤랑가로스 준결승에 진출하며 차세대 스타로서의 입지를 확고히 했습니다. 자매가 함께 투어를 돌며 서로 자극을 주고받는 모습도 팬들의 관심을 끌고 있습니다.</p>
            `,
      signatureMatch: {
        title: "2024 롤랑가로스 4라운드 vs 사발렌카",
        date: "2024. 06. 02",
        description:
          "세계 랭킹 2위 사발렌카를 <strong>6-7, 6-4, 6-4</strong>로 꺾으며 10대 소녀의 대담함을 전 세계에 보여준 경기입니다. 이후 준결승까지 진출하며 대회의 주인공이 되었습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">✨ 두려움 없는 10대의 도전</div>
                    <p>코트 위에서 보여주는 대담한 플레이와 밝은 에너지로 팬들을 사로잡고 있습니다. 언니 에리카와의 자매 스토리도 큰 관심을 받으며, WTA의 미래를 이끌어갈 스타로 주목받고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"끝없는 성장 곡선"</strong></p>
                <p>매 대회마다 발전하는 모습을 보여주며 랭킹을 꾸준히 끌어올리고 있습니다. 그랜드슬램 깊은 라운드 진출 경험이 쌓이면서 더욱 완성도 높은 테니스를 보여주고 있습니다.</p>
            `,
      faq: [
        {
          question: "미라 안드레바는 몇 살인가요?",
          answer:
            "2007년생으로, WTA 투어에서 가장 어린 톱 선수 중 한 명입니다. 10대의 나이에 그랜드슬램 준결승에 진출한 소수의 선수 중 하나입니다.",
        },
        {
          question: "안드레바 자매는 둘 다 프로 선수인가요?",
          answer:
            "네, 언니 에리카 안드레바도 WTA 투어에서 활동하는 프로 선수입니다. 두 자매가 함께 투어를 돌며 서로 경쟁하고 응원하는 모습이 화제가 되고 있습니다.",
        },
      ],
    },
  },
  "diana-shnaider": {
    name: "다이아나 슈나이더",
    nameEn: "Diana Shnaider",
    country: "Russia",
    countryFlag: "🇷🇺",
    image: "/images/players/diana-shnaider.png",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "다이아나 슈나이더는 강력한 좌완 스트로크로 WTA 투어에서 급부상하고 있는 러시아의 신예입니다. 왼손잡이 특유의 각도 있는 서브와 공격적인 포핸드로 상대를 압도하며, 빠른 속도로 랭킹을 끌어올리고 있습니다.",
    detailedProfile: {
      oneLineSummary:
        "강력한 좌완 스트로크로 WTA 투어를 휩쓸고 있는 러시아의 떠오르는 강자.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 WTA 급부상 좌완 파워 플레이어</div>
                    <p>2024시즌 WTA 투어에서 복수의 타이틀을 획득하며 급격한 랭킹 상승을 이뤘습니다. 왼손잡이 특유의 독특한 각도와 강력한 파워는 투어의 모든 선수에게 위협적인 존재로 자리잡았습니다.</p>
                </div>
                <p>20대 초반의 나이에 이미 WTA 투어 다승을 기록하며 러시아 테니스의 새로운 세대를 대표하고 있습니다.</p>
            `,
      playStyle: `
                <p><strong>"좌완의 파워하우스 (The Left-Handed Powerhouse)"</strong></p>
                <p>슈나이더의 최대 강점은 왼손잡이 특유의 각도를 살린 강력한 스트로크입니다. 특히 포핸드의 파워가 뛰어나며, 서브에서도 왼손잡이 특유의 슬라이스로 상대의 리턴을 무력화시킵니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 핵심 강점</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>좌완 서브:</strong> 독특한 각도의 슬라이스 서브로 에이스 양산</li>
                        <li><strong>강력한 포핸드:</strong> 왼손잡이 포핸드의 파워와 각도</li>
                        <li><strong>공격적 성향:</strong> 주도권을 잡으면 놓지 않는 적극적 플레이</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "포핸드 (Forehand)",
          score: 9,
          description: "좌완 포핸드의 파워와 각도가 최대 무기.",
        },
        {
          name: "서브 (Serve)",
          score: 8.5,
          description: "왼손잡이 특유의 각도 있는 서브.",
        },
        {
          name: "공격성 (Aggression)",
          score: 8.5,
          description: "주도적으로 경기를 이끄는 공격 성향.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 8,
          description: "양손 백핸드로 안정적인 랠리 유지.",
        },
        {
          name: "체력 (Fitness)",
          score: 8,
          description: "젊은 나이답게 뛰어난 체력과 활동량.",
        },
        {
          name: "수비 (Defense)",
          score: 7,
          description: "공격에 비해 수비 전환이 발전 중.",
        },
      ],
      growthStory: `
                <p>러시아 모스크바 출신으로 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절 우수한 성적을 거둔 뒤 프로 전향하여 빠르게 WTA 투어에 안착했습니다.</p>
                <p>2024시즌 폭발적인 성장을 이루며 여러 대회에서 우승을 차지했고, 이를 통해 톱 30 안에 진입하는 데 성공했습니다. 왼손잡이라는 독특한 강점을 최대한 활용하며 계속 발전하고 있습니다.</p>
            `,
      signatureMatch: {
        title: "2024 바드 홈부르크 오픈 결승",
        date: "2024. 06. 22",
        description:
          "잔디 코트에서의 결승전에서 우승을 차지하며 다양한 서피스에서 경쟁할 수 있는 능력을 증명했습니다. 좌완의 강력한 서브와 포핸드가 잔디 위에서 더욱 빛을 발한 대회였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💪 좌완의 매력</div>
                    <p>왼손잡이 특유의 독특한 볼 궤적은 관전의 재미를 더합니다. 공격적이고 적극적인 플레이 스타일은 관중들에게 흥미진진한 경기를 선사하며, 젊은 에너지와 자신감이 코트 위에서 빛나는 선수입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"멈추지 않는 상승세"</strong></p>
                <p>매 시즌 눈에 띄는 성장을 보여주며, WTA 투어에서 입지를 다져가고 있습니다. 복수의 타이틀을 획득하며 톱 20 진입을 목표로 하고 있습니다.</p>
            `,
      faq: [
        {
          question: "슈나이더 선수가 왼손잡이인 것이 어떤 장점이 있나요?",
          answer:
            "왼손잡이 선수는 오른손잡이가 다수인 투어에서 상대에게 익숙하지 않은 각도와 스핀을 제공합니다. 특히 서브에서 애드 코트 와이드 서브의 각도가 독특하고, 포핸드 크로스코트의 궤적이 일반적인 것과 달라 상대에게 큰 위협이 됩니다.",
        },
        {
          question: "슈나이더의 2024시즌 성적은?",
          answer:
            "2024시즌 여러 WTA 대회에서 우승하며 급격한 랭킹 상승을 이뤘고, 톱 30에 진입하는 브레이크스루 시즌을 보냈습니다.",
        },
      ],
    },
  },
  "linda-noskova": {
    name: "린다 노스코바",
    nameEn: "Linda Noskova",
    country: "Czech Republic",
    countryFlag: "🇨🇿",
    image: "/images/players/linda-noskova.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "린다 노스코바는 체코 테니스의 찬란한 전통을 이어갈 차세대 스타로, 강력한 서브와 공격적인 베이스라인 플레이가 특징인 선수입니다. 2024년 호주오픈에서 세계 1위를 꺾으며 큰 주목을 받았습니다.",
    detailedProfile: {
      oneLineSummary:
        "체코 테니스의 전통을 잇는 넥스트젠 스타, 강력한 서브와 대담한 플레이의 소유자.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇿 체코 테니스의 새로운 희망</div>
                    <p>2024년 호주오픈에서 당시 세계 1위 이가 시비옹텍을 꺾는 파란을 일으키며 세계 테니스 팬들에게 이름을 알렸습니다. 체코의 풍부한 테니스 유산을 물려받아 미래가 촉망되는 선수입니다.</p>
                </div>
                <p>크바르토바, 무호바 등 체코 선배들의 뒤를 이어 차세대 체코 테니스를 이끌어갈 핵심 선수로 기대받고 있습니다.</p>
            `,
      playStyle: `
                <p><strong>"공격형 빅 서버 (The Aggressive Big Server)"</strong></p>
                <p>노스코바의 가장 큰 무기는 강력한 서브입니다. 10대 선수답지 않은 서브 파워와 정확성을 갖추고 있으며, 이를 기반으로 공격적인 베이스라인 테니스를 전개합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 핵심 강점</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>강력한 서브:</strong> 동세대 선수 중 최고 수준의 서브 파워</li>
                        <li><strong>공격적 포핸드:</strong> 서브 이후 포핸드로 이어지는 공격 패턴</li>
                        <li><strong>빅 매치 기질:</strong> 큰 무대에서 실력을 발휘하는 담대함</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "서브 (Serve)",
          score: 9,
          description: "연령대 대비 최고 수준의 서브 파워와 정확성.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 8.5,
          description: "서브와 연계된 강력한 포핸드 공격.",
        },
        {
          name: "멘탈 (Mental)",
          score: 8,
          description: "세계 1위도 꺾을 수 있는 대담한 정신력.",
        },
        {
          name: "파워 (Power)",
          score: 8.5,
          description: "전반적으로 파워풀한 샷을 구사.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 7.5,
          description: "양손 백핸드로 안정적인 랠리 가능.",
        },
        {
          name: "수비 (Defense)",
          score: 7,
          description: "공격에 비해 수비력은 발전이 필요.",
        },
      ],
      growthStory: `
                <p>체코 프레로프 출신으로, 체코의 풍부한 테니스 인프라 속에서 성장했습니다. 주니어 시절 2021년 롤랑가로스 주니어 대회 우승을 차지하며 일찌감치 재능을 인정받았습니다.</p>
                <p>프로 전향 후 빠르게 WTA 투어에 적응했으며, 2024년 호주오픈에서 시비옹텍을 꺾는 대이변을 연출하며 톱 선수로의 도약을 알렸습니다. 체코 테니스의 전통적인 강점인 기술적 완성도에 현대적인 파워를 결합한 스타일이 특징입니다.</p>
            `,
      signatureMatch: {
        title: "2024 호주오픈 3라운드 vs 시비옹텍",
        date: "2024. 01. 20",
        description:
          "당시 세계 1위 이가 시비옹텍을 <strong>6-3, 6-4</strong>로 꺾는 대이변을 연출했습니다. 강력한 서브와 대담한 공격 플레이로 세계 최고의 선수를 완전히 압도한 경기였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌟 체코 테니스의 미래</div>
                    <p>체코는 나브라틸로바부터 크바르토바까지 위대한 여자 테니스 선수를 배출해온 나라입니다. 노스코바는 이 전통을 이어갈 차세대 스타로, 강력한 서브와 대담한 플레이로 팬들의 기대를 모으고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"그랜드슬램 타이틀을 향한 도전"</strong></p>
                <p>꾸준히 랭킹을 올리며 톱 30에 안착했습니다. 서브를 중심으로 한 공격적 테니스가 더욱 완성되고 있으며, 그랜드슬램 깊은 라운드 진출이 기대되는 선수입니다.</p>
            `,
      faq: [
        {
          question: "노스코바가 시비옹텍을 꺾은 경기가 왜 중요한가요?",
          answer:
            "2024 호주오픈에서 당시 압도적인 세계 1위였던 시비옹텍을 스트레이트로 꺾으며, 젊은 세대가 톱 선수들과 충분히 경쟁할 수 있음을 증명한 상징적인 경기입니다.",
        },
        {
          question: "체코가 테니스 강국인 이유는?",
          answer:
            "체코는 나브라틸로바, 랜들, 크바르토바, 사파르쥬바 등 수많은 전설적 선수를 배출한 테니스 강국입니다. 뛰어난 유소년 시스템과 테니스 문화가 깊이 뿌리내린 나라입니다.",
        },
      ],
    },
  },
  "donna-vekic": {
    name: "도나 베키치",
    nameEn: "Donna Vekic",
    country: "Croatia",
    countryFlag: "🇭🇷",
    image: "/images/players/donna-vekic.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "도나 베키치는 크로아티아를 대표하는 여자 테니스 선수로, 2024년 파리 올림픽 은메달리스트입니다. 강력한 포핸드와 안정적인 올코트 플레이로 WTA 톱 20에 안정적으로 자리잡고 있으며, 오랜 경력의 경험이 돋보이는 선수입니다.",
    detailedProfile: {
      oneLineSummary:
        "파리 올림픽 은메달의 주인공, 크로아티아 여자 테니스의 간판 스타.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥈 2024 파리 올림픽 은메달리스트</div>
                    <p>2024년 파리 올림픽 여자 단식에서 결승까지 진출하며 은메달을 획득했습니다. 크로아티아 테니스 역사에 새로운 장을 열었으며, 올림픽 무대에서의 활약은 전 국민적 감동을 선사했습니다.</p>
                </div>
                <p>16세에 WTA 투어 첫 우승을 달성한 이후 꾸준히 톱 선수로 활약하며, 2024시즌 커리어 하이를 기록했습니다.</p>
            `,
      playStyle: `
                <p><strong>"파워풀한 올라운더 (The Powerful All-Rounder)"</strong></p>
                <p>베키치는 강력한 포핸드를 중심으로 공격적인 테니스를 구사합니다. 서브 파워도 뛰어나며, 경험에서 오는 전술적 유연성이 큰 강점입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 핵심 강점</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>강력한 포핸드:</strong> 위너를 만들어내는 파워풀한 포핸드</li>
                        <li><strong>경험:</strong> 10년 이상의 투어 경험에서 오는 안정감</li>
                        <li><strong>빅 매치 집중력:</strong> 올림픽 결승 등 큰 무대에서 빛나는 집중력</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "포핸드 (Forehand)",
          score: 9,
          description: "공격의 핵심 무기인 강력한 포핸드.",
        },
        {
          name: "경험 (Experience)",
          score: 9,
          description: "10년 이상의 투어 경력에서 오는 노하우.",
        },
        {
          name: "서브 (Serve)",
          score: 8,
          description: "파워와 정확성을 겸비한 서브.",
        },
        {
          name: "멘탈 (Mental)",
          score: 8.5,
          description: "올림픽 은메달이 증명하는 정신력.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 7.5,
          description: "안정적이지만 포핸드에 비해 약한 편.",
        },
        {
          name: "이동속도 (Movement)",
          score: 7.5,
          description: "코트 커버리지는 평균 이상 수준.",
        },
      ],
      growthStory: `
                <p>크로아티아 오시예크 출신으로, 16세에 WTA 투어 대회 우승을 달성하며 일찌감치 재능을 인정받았습니다. 이는 당시 WTA 투어 최연소 우승 기록 중 하나였습니다.</p>
                <p>이후 부상과 기복으로 어려운 시기도 있었지만, 꾸준한 노력으로 톱 20 안에 복귀했습니다. 2024년 파리 올림픽 은메달은 그녀의 커리어에서 가장 빛나는 순간으로, 오랜 인내의 결실이었습니다.</p>
            `,
      signatureMatch: {
        title: "2024 파리 올림픽 준결승 vs 슈미드로바",
        date: "2024. 08. 02",
        description:
          "올림픽 준결승에서 승리하며 최소 은메달을 확정지은 순간은 베키치 커리어 최고의 하이라이트였습니다. 크로아티아 국기를 두르고 기쁨의 눈물을 흘린 모습은 전 세계 팬들에게 깊은 감동을 주었습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇭🇷 크로아티아의 자부심</div>
                    <p>올림픽 은메달로 크로아티아 전체의 영웅이 된 베키치. 화려한 외모와 파워풀한 플레이, 그리고 고국에 대한 깊은 애정은 팬들에게 큰 사랑을 받는 이유입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"커리어 최전성기"</strong></p>
                <p>올림픽 은메달 이후 자신감이 더해져 안정적인 성적을 유지하고 있습니다. 경험과 체력이 조화를 이루며, 톱 20 안착을 굳건히 하고 있습니다.</p>
            `,
      faq: [
        {
          question: "베키치의 올림픽 은메달은 크로아티아에 어떤 의미인가요?",
          answer:
            "크로아티아 테니스 역사상 올림픽 단식 메달은 매우 드문 성취입니다. 베키치의 은메달은 크로아티아 스포츠 전체에 큰 자부심을 선사했으며, 차세대 테니스 선수들에게도 영감을 주고 있습니다.",
        },
        {
          question: "베키치는 언제 프로에 데뷔했나요?",
          answer:
            "2012년 프로에 데뷔했으며, 2014년 타슈켄트 오픈에서 16세의 나이로 WTA 투어 첫 우승을 달성했습니다. 10년 이상의 프로 경력을 자랑하는 베테랑 선수입니다.",
        },
      ],
    },
  },
  "katie-boulter": {
    name: "케이티 볼터",
    nameEn: "Katie Boulter",
    country: "Great Britain",
    countryFlag: "🇬🇧",
    image: "/images/players/katie-boulter.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "케이티 볼터는 영국 여자 테니스의 에이스로, 강력한 서브와 공격적인 포핸드를 무기로 WTA 투어에서 꾸준히 성장하고 있는 선수입니다. 홈 관중 앞에서 특히 강한 면모를 보이며 영국 팬들의 큰 사랑을 받고 있습니다.",
    detailedProfile: {
      oneLineSummary:
        "영국 여자 테니스의 간판, 강력한 서브와 공격적 플레이로 성장 중인 에이스.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇬🇧 영국 여자 테니스의 새로운 얼굴</div>
                    <p>조핸나 콘타 이후 영국 여자 테니스의 간판으로 떠오르며, WTA 투어에서 꾸준히 랭킹을 올리고 있습니다. 2024시즌 커리어 하이 랭킹을 기록하며 톱 플레이어로의 도약을 알렸습니다.</p>
                </div>
                <p>알렉스 드 미노르와의 커플로도 유명하며, 테니스 안팎에서 큰 관심을 받고 있습니다.</p>
            `,
      playStyle: `
                <p><strong>"공격적 서브 앤 포핸드 (The Serve-and-Forehand Attacker)"</strong></p>
                <p>볼터의 테니스는 강력한 서브와 포핸드를 축으로 합니다. 키(178cm)에서 나오는 서브 파워가 뛰어나며, 서브 이후 공격적인 포핸드로 포인트를 마무리하는 패턴이 주 전술입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 핵심 강점</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>파워 서브:</strong> 신장을 활용한 강력한 서브</li>
                        <li><strong>공격적 포핸드:</strong> 위너를 양산하는 포핸드</li>
                        <li><strong>홈 어드밴티지:</strong> 영국 관중 앞에서 특히 강한 집중력</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "서브 (Serve)",
          score: 8.5,
          description: "신장에서 나오는 강력한 서브가 핵심 무기.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 8.5,
          description: "공격 전환의 핵심인 파워풀한 포핸드.",
        },
        {
          name: "멘탈 (Mental)",
          score: 8,
          description: "홈 관중 앞에서 빛나는 정신력.",
        },
        {
          name: "체력 (Fitness)",
          score: 8,
          description: "부상 극복 후 꾸준한 체력 관리.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 7.5,
          description: "안정적이지만 더 발전이 기대되는 부분.",
        },
        {
          name: "수비 (Defense)",
          score: 7,
          description: "공격 위주 스타일로 수비력은 보통.",
        },
      ],
      growthStory: `
                <p>레스터셔 출신으로 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절 영국 내 주요 대회에서 활약한 뒤 프로에 전향했습니다.</p>
                <p>허리 부상으로 한때 큰 위기를 겪었지만, 인내심을 갖고 재활에 전념하여 성공적으로 투어에 복귀했습니다. 이후 꾸준한 성장세를 이어가며 영국 여자 테니스 랭킹 1위로 올라섰습니다.</p>
            `,
      signatureMatch: {
        title: "2024 노팅엄 오픈 결승",
        date: "2024. 06. 16",
        description:
          "홈 관중 앞에서 우승을 차지하며 잔디 시즌의 강자임을 증명했습니다. 영국 팬들의 뜨거운 응원 속에서 경기를 즐기며 최고의 퍼포먼스를 보여준 감동적인 대회였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💜 영국 팬들의 사랑</div>
                    <p>윔블던과 영국 내 대회에서 보여주는 열정적인 플레이로 영국 팬들의 절대적 지지를 받고 있습니다. 밝고 친근한 성격과 함께 알렉스 드 미노르와의 커플 스토리도 팬들에게 큰 관심을 받고 있습니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"꾸준한 상승세"</strong></p>
                <p>매 시즌 랭킹을 끌어올리며 톱 30에 안착했습니다. 특히 잔디 시즌에서 좋은 성적을 거두며, 윔블던에서의 깊은 라운드 진출이 기대됩니다.</p>
            `,
      faq: [
        {
          question: "케이티 볼터의 남자친구는 누구인가요?",
          answer:
            "호주의 ATP 톱 선수 알렉스 드 미노르와 교제 중입니다. 두 사람은 투어를 함께 돌며 서로를 응원하는 모습으로 테니스 팬들에게 큰 사랑을 받는 커플입니다.",
        },
        {
          question: "볼터 선수의 장점은 무엇인가요?",
          answer:
            "178cm의 신장에서 나오는 강력한 서브가 최대 무기이며, 이를 기반으로 한 공격적인 포핸드로 포인트를 마무리하는 능력이 뛰어납니다.",
        },
      ],
    },
  },
  "marta-kostyuk": {
    name: "마르타 코스튜크",
    nameEn: "Marta Kostyuk",
    country: "Ukraine",
    countryFlag: "🇺🇦",
    image: "/images/players/marta-kostyuk.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio:
      "마르타 코스튜크는 우크라이나를 대표하는 여자 테니스 선수로, 15세에 호주오픈 본선 3라운드에 진출하며 일찍이 재능을 인정받았습니다. 전쟁이라는 어려운 환경 속에서도 조국을 대표해 코트에 서는 강인한 선수입니다.",
    detailedProfile: {
      oneLineSummary:
        "전쟁 속에서도 조국의 국기를 들고 코트에 서는 우크라이나 여자 테니스의 자존심.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇦 우크라이나 테니스의 상징</div>
                    <p>15세에 호주오픈 본선 3라운드에 진출하며 신동으로 주목받았고, 이후 꾸준한 성장으로 WTA 톱 30에 진입했습니다. 러시아-우크라이나 전쟁 속에서도 우크라이나를 대표해 투어에 참가하며 조국의 희망이 되고 있습니다.</p>
                </div>
                <p>코트 위에서 보여주는 투지와 결단력은 어려운 환경을 극복해온 그녀의 삶을 반영합니다.</p>
            `,
      playStyle: `
                <p><strong>"투지의 카운터 펀처 (The Gritty Counter-Puncher)"</strong></p>
                <p>코스튜크는 뛰어난 수비력을 바탕으로 상대의 실수를 유도하며, 기회가 오면 날카로운 카운터 공격을 펼치는 스타일입니다. 빠른 발과 끈질긴 수비로 긴 랠리를 버텨내는 능력이 뛰어납니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 핵심 강점</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>뛰어난 수비력:</strong> 빠른 발과 끈기로 어려운 볼도 살려냄</li>
                        <li><strong>카운터 어택:</strong> 수비에서 공격으로 전환하는 능력</li>
                        <li><strong>강한 투지:</strong> 어떤 상황에서도 포기하지 않는 정신력</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "수비 (Defense)",
          score: 9,
          description: "투어 최상위급의 수비력과 코트 커버리지.",
        },
        {
          name: "멘탈 (Mental)",
          score: 9,
          description: "전쟁이라는 상황에서도 흔들리지 않는 강인함.",
        },
        {
          name: "이동속도 (Movement)",
          score: 8.5,
          description: "빠른 발과 뛰어난 반응속도.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 8,
          description: "안정적인 양손 백핸드로 랠리 유지.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 7.5,
          description: "카운터 공격 시 위력적인 포핸드.",
        },
        {
          name: "서브 (Serve)",
          score: 7,
          description: "꾸준히 개선 중인 서브 게임.",
        },
      ],
      growthStory: `
                <p>우크라이나 키이우 출신으로, 어린 시절부터 테니스에 재능을 보이며 주니어 무대에서 두각을 나타냈습니다. 15세에 호주오픈 본선에서 활약하며 세계적인 주목을 받았습니다.</p>
                <p>2022년 러시아-우크라이나 전쟁 발발 이후, 조국을 떠나 투어를 이어가야 하는 힘든 상황에서도 꺾이지 않고 경기에 임하며 우크라이나의 자존심을 지키고 있습니다. 경기 후 러시아 선수와의 악수를 거부하며 자신의 입장을 분명히 한 모습도 화제가 되었습니다.</p>
            `,
      signatureMatch: {
        title: "2023 US오픈 4라운드 진출",
        date: "2023. 09",
        description:
          "그랜드슬램에서 4라운드까지 진출하며 톱 선수들과 경쟁할 수 있는 실력을 증명했습니다. 어려운 환경에서도 최고의 경기력을 보여준 의미 있는 대회였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💙💛 조국을 위한 투혼</div>
                    <p>전쟁이라는 극한 상황에서도 코트 위에 서서 우크라이나의 이름을 알리는 코스튜크는 단순한 스포츠 선수를 넘어선 존재입니다. 그녀의 매 경기는 우크라이나 국민들에게 희망과 용기를 전달합니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"어려움을 딛고 선 우크라이나의 전사"</strong></p>
                <p>전쟁 속에서도 투어를 이어가며 톱 30 안에서 안정적인 성적을 유지하고 있습니다. 정신적으로 더 강해진 모습을 보이며 그랜드슬램에서의 더 큰 성과가 기대됩니다.</p>
            `,
      faq: [
        {
          question: "코스튜크 선수는 전쟁에 대해 어떤 입장인가요?",
          answer:
            "우크라이나의 입장을 강력히 지지하며, 경기 후 러시아/벨라루스 선수와의 악수를 거부하는 등 분명한 입장을 보이고 있습니다. 상금의 일부를 우크라이나 지원에 기부하기도 합니다.",
        },
        {
          question: "코스튜크 선수의 주요 성적은?",
          answer:
            "15세에 호주오픈 본선 3라운드 진출, WTA 톱 30 진입, 다수의 그랜드슬램 4라운드 진출 등이 주요 성적입니다.",
        },
      ],
    },
  },
  "leylah-fernandez": {
    name: "레일라 페르난데스",
    nameEn: "Leylah Fernandez",
    country: "Canada",
    countryFlag: "🇨🇦",
    image: "/images/players/leylah-fernandez.png",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio:
      "레일라 페르난데스는 2021년 US오픈 준우승으로 세계적인 주목을 받은 캐나다의 좌완 테니스 선수입니다. 에콰도르 출신 아버지와 필리핀-캐나다 어머니 사이에서 태어나 다문화적 배경을 가지고 있으며, 화려한 좌완 플레이와 관중을 사로잡는 에너지로 사랑받고 있습니다.",
    detailedProfile: {
      oneLineSummary:
        "2021 US오픈에서 동화를 쓴 캐나다의 좌완 파이터, 관중을 사로잡는 에너지의 소유자.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 2021 US오픈 준우승 — 19세의 기적</div>
                    <p>2021년 US오픈에서 오사카, 사발렌카, 스비톨리나 등 톱 시드 선수들을 연달아 꺾고 결승에 올라 준우승을 차지했습니다. 당시 19세의 나이로 보여준 대담한 플레이와 뜨거운 투지는 테니스 팬들에게 깊은 인상을 남겼습니다.</p>
                </div>
                <p>캐나다 여자 테니스의 새로운 얼굴로, 비앙카 안드레스쿠와 함께 캐나다 테니스의 황금 세대를 이끌고 있습니다.</p>
            `,
      playStyle: `
                <p><strong>"좌완의 파이터 (The Left-Handed Fighter)"</strong></p>
                <p>페르난데스의 테니스는 좌완 특유의 각도와 불타는 투지로 정의됩니다. 탑스핀이 강한 포핸드와 날카로운 백핸드 다운더라인이 주요 무기이며, 관중의 에너지를 자신의 힘으로 전환하는 능력이 탁월합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 핵심 강점</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>좌완 포핸드:</strong> 독특한 각도의 탑스핀 포핸드</li>
                        <li><strong>투지:</strong> 경기가 어려울수록 더 강해지는 정신력</li>
                        <li><strong>관중 소통:</strong> 관중의 에너지를 끌어모으는 카리스마</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "투지 (Fighting Spirit)",
          score: 9.5,
          description: "경기가 어려울수록 더 강해지는 불굴의 정신.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 8.5,
          description: "좌완 특유의 각도와 탑스핀이 무기.",
        },
        {
          name: "관중 소통 (Crowd Energy)",
          score: 9,
          description: "관중을 하나로 만드는 카리스마.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 8,
          description: "날카로운 다운더라인이 특기.",
        },
        {
          name: "이동속도 (Movement)",
          score: 8,
          description: "빠른 발과 코트 커버리지.",
        },
        {
          name: "서브 (Serve)",
          score: 7,
          description: "좌완 서브의 각도는 좋지만 파워는 보통.",
        },
      ],
      growthStory: `
                <p>캐나다 몬트리올에서 태어나 에콰도르인 아버지의 지도 아래 테니스를 시작했습니다. 아버지 호르헤 페르난데스가 코치로서 함께하며 성장을 이끌었습니다.</p>
                <p>2019년 롤랑가로스 주니어 우승으로 주목받기 시작했고, 2021년 US오픈에서 톱 선수들을 연달아 꺾으며 결승에 진출하는 신데렐라 스토리를 썼습니다. 이후 부상으로 어려운 시기를 보냈지만, 다시 랭킹을 끌어올리며 복귀에 성공했습니다.</p>
            `,
      signatureMatch: {
        title: "2021 US오픈 8강 vs 스비톨리나",
        date: "2021. 09. 07",
        description:
          "8강에서 5번 시드 스비톨리나를 <strong>6-3, 3-6, 7-6</strong>으로 꺾은 경기입니다. 3세트 타이브레이크에서 관중의 뜨거운 응원을 등에 업고 역전승을 거두며, 페르난데스의 투지와 관중 소통 능력이 빛난 명경기였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 관중을 사로잡는 에너지</div>
                    <p>코트 위에서 보여주는 뜨거운 투지와 관중을 향한 소통은 페르난데스만의 매력입니다. 주먹을 불끈 쥐며 포효하는 모습, 관중에게 박수를 요청하는 모습은 경기를 축제로 만들어냅니다. 다문화적 배경은 다양한 국가의 팬들에게 공감을 불러일으킵니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"재기를 향한 좌완의 투혼"</strong></p>
                <p>부상에서 회복한 뒤 꾸준히 투어에 복귀하여 경기력을 끌어올리고 있습니다. 2021년의 마법 같은 순간을 다시 재현하기 위해 매 경기 최선을 다하고 있습니다.</p>
            `,
      faq: [
        {
          question: "페르난데스의 2021 US오픈이 특별한 이유는?",
          answer:
            "대회 기간 중 오사카(3번 시드), 사발렌카(2번 시드), 스비톨리나(5번 시드), 케르버(전 세계 1위) 등 톱 시드를 연이어 격파하며 결승에 올랐습니다. 19세의 나이로 보여준 이 도전은 테니스 역사에 길이 남을 순간입니다.",
        },
        {
          question: "페르난데스의 가족 배경은?",
          answer:
            "에콰도르 출신 아버지 호르헤와 필리핀-캐나다인 어머니 사이에서 태어났습니다. 아버지가 코치를 맡고 있으며, 여동생 비앙카도 테니스 선수입니다.",
        },
      ],
    },
  },
  "maria-sakkari": {
    name: "마리아 사카리",
    nameEn: "Maria Sakkari",
    country: "Greece",
    countryFlag: "🇬🇷",
    image: "/images/players/maria-sakkari.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "One-handed",
    longBio:
      "마리아 사카리는 그리스 여자 테니스의 간판 선수로, 뛰어난 체력과 공격적인 플레이로 WTA 톱 10까지 올랐던 실력파입니다. 스포츠 명문 가문 출신으로, 그리스 테니스의 위상을 세계 무대에서 높이고 있습니다.",
    detailedProfile: {
      oneLineSummary:
        "그리스 여자 테니스 역사상 최고의 선수, 철인 같은 체력과 투지의 아이콘.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇬🇷 그리스 여자 테니스의 역사를 쓰다</div>
                    <p>세계 랭킹 3위까지 올랐던 사카리는 그리스 여자 테니스 역사상 최고 랭킹을 기록한 선수입니다. 그랜드슬램 준결승에 여러 차례 진출하며 그리스 테니스의 위상을 전 세계에 알렸습니다.</p>
                </div>
                <p>어머니 안젤리키 카넬로풀루가 전 그리스 대표 테니스 선수였으며, 스포츠 명문 가문의 DNA를 이어받아 정상급 선수로 성장했습니다.</p>
            `,
      playStyle: `
                <p><strong>"철인 파이터 (The Iron Fighter)"</strong></p>
                <p>사카리의 가장 큰 강점은 투어 최고 수준의 체력과 피트니스입니다. 한 손 백핸드를 구사하는 여자 선수로서 독특한 존재감을 가지고 있으며, 강력한 서브와 공격적인 포핸드로 상대를 압박합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 핵심 강점</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>체력:</strong> WTA 투어 최고 수준의 피트니스와 지구력</li>
                        <li><strong>한 손 백핸드:</strong> 여자 투어에서 희귀한 한 손 백핸드의 소유자</li>
                        <li><strong>서브 파워:</strong> 강력한 서브로 프리 포인트 확보</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "체력 (Fitness)",
          score: 9.5,
          description: "WTA 투어 최정상급의 체력과 피트니스.",
        },
        {
          name: "서브 (Serve)",
          score: 8.5,
          description: "파워풀한 서브로 에이스를 양산.",
        },
        {
          name: "포핸드 (Forehand)",
          score: 8.5,
          description: "공격적이고 강력한 포핸드 위너.",
        },
        {
          name: "투지 (Fighting Spirit)",
          score: 9,
          description: "절대 포기하지 않는 투지와 근성.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 7.5,
          description: "한 손 백핸드로 독특한 변화구 보유.",
        },
        {
          name: "안정성 (Consistency)",
          score: 7,
          description: "가끔 기복이 있지만 전반적으로 안정.",
        },
      ],
      growthStory: `
                <p>그리스 아테네 출신으로, 어머니 안젤리키 카넬로풀루가 전 그리스 대표 테니스 선수이자 체조 선수였습니다. 스포츠 명문 가문에서 자라며 자연스럽게 테니스를 시작했습니다.</p>
                <p>2010년대 후반부터 WTA 투어에서 두각을 나타내기 시작했고, 2021-2022시즌에 폭발적으로 성장하며 세계 랭킹 3위까지 올랐습니다. 롤랑가로스와 US오픈 준결승 진출 등 그랜드슬램에서도 좋은 성적을 거두며 그리스 테니스의 아이콘이 되었습니다.</p>
            `,
      signatureMatch: {
        title: "2021 롤랑가로스 준결승 vs 크레이치코바",
        date: "2021. 06. 10",
        description:
          "그리스 여자 선수 최초로 그랜드슬램 준결승에 진출한 역사적인 순간이었습니다. 비록 패했지만, 그리스 테니스의 새로운 가능성을 보여준 의미 있는 대회였습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏛️ 그리스의 테니스 여전사</div>
                    <p>코트 위에서 보여주는 전사 같은 투지와 철인 같은 체력은 고대 그리스 운동선수를 연상시킵니다. SNS에서도 활발히 활동하며 팬들과 소통하고, 뛰어난 패션 센스로도 주목받는 선수입니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"경험을 무기로 한 재도약"</strong></p>
                <p>톱 10에서 내려온 뒤 다시 랭킹을 끌어올리기 위해 노력하고 있습니다. 풍부한 그랜드슬램 경험과 뛰어난 체력을 바탕으로 언제든 톱 10에 복귀할 수 있는 잠재력을 가지고 있습니다.</p>
            `,
      faq: [
        {
          question: "사카리 선수가 한 손 백핸드를 쓰는 이유는?",
          answer:
            "여자 투어에서 한 손 백핸드는 매우 드문데, 사카리는 어린 시절부터 자연스럽게 한 손 백핸드를 익혔습니다. 이는 그녀의 독특한 강점 중 하나로, 슬라이스와 변화구에서 큰 장점이 됩니다.",
        },
        {
          question: "사카리 선수의 어머니도 운동선수였나요?",
          answer:
            "네, 어머니 안젤리키 카넬로풀루는 전 그리스 대표 테니스 선수이자 체조 선수였습니다. 스포츠 명문 가문의 DNA를 이어받아 뛰어난 운동 능력과 체력을 갖추게 되었습니다.",
        },
      ],
    },
  },
  "caroline-garcia": {
    name: "카롤린 가르시아",
    nameEn: "Caroline Garcia",
    country: "France",
    countryFlag: "🇫🇷",
    image: "/images/players/caroline-garcia.png",
    gender: "female",
    plays: "Right-handed",
    backhand: "One-handed",
    longBio:
      "카롤린 가르시아는 프랑스를 대표하는 여자 테니스 선수로, 2022년 WTA 파이널스 우승을 비롯해 다수의 WTA 타이틀을 보유한 실력파입니다. 한 손 백핸드와 공격적인 네트 플레이가 돋보이는 올코트 플레이어입니다.",
    detailedProfile: {
      oneLineSummary:
        "WTA 파이널스 챔피언, 프랑스 여자 테니스의 자존심이자 올코트 마스터.",
      whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 2022 WTA 파이널스 챔피언</div>
                    <p>2022년 WTA 파이널스에서 우승하며 시즌 최강자임을 증명했습니다. 그해 리옹, 바드 홈부르크, 시드니에서도 우승하며 시즌 4관왕을 달성한 최고의 해를 보냈습니다.</p>
                </div>
                <p>프랑스 여자 테니스의 간판으로, 복식에서도 그랜드슬램 우승 경험이 있는 만능 선수입니다. 롤랑가로스에서 프랑스 관중의 열렬한 응원을 받는 선수이기도 합니다.</p>
            `,
      playStyle: `
                <p><strong>"공격적 올코트 마스터 (The Aggressive All-Court Master)"</strong></p>
                <p>가르시아의 테니스는 공격적인 올코트 플레이가 특징입니다. 한 손 백핸드를 구사하며, 네트 플레이에서도 뛰어난 능력을 보여줍니다. 특히 서브 앤 발리 전술을 현대 여자 테니스에서 효과적으로 활용하는 몇 안 되는 선수입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 핵심 강점</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>네트 플레이:</strong> 현대 여자 테니스에서 보기 드문 뛰어난 발리 기술</li>
                        <li><strong>한 손 백핸드:</strong> 우아하면서도 공격적인 한 손 백핸드</li>
                        <li><strong>서브:</strong> 파워와 변화를 겸비한 효과적인 서브</li>
                    </ul>
                </div>
            `,
      hexagonStats: [
        {
          name: "네트 플레이 (Net Play)",
          score: 9,
          description: "WTA 최고 수준의 발리와 네트 감각.",
        },
        {
          name: "서브 (Serve)",
          score: 8.5,
          description: "파워와 코스 변화를 겸비한 서브.",
        },
        {
          name: "공격성 (Aggression)",
          score: 9,
          description: "주도적으로 공격을 전개하는 적극적 성향.",
        },
        {
          name: "다양성 (Versatility)",
          score: 8.5,
          description: "베이스라인과 네트를 넘나드는 올코트 능력.",
        },
        {
          name: "백핸드 (Backhand)",
          score: 8,
          description: "한 손 백핸드로 다양한 변화구 구사.",
        },
        {
          name: "안정성 (Consistency)",
          score: 7,
          description: "공격적 성향으로 인한 기복이 존재.",
        },
      ],
      growthStory: `
                <p>프랑스 리옹 출신으로, 아버지 루이-폴 가르시아의 지도 아래 어린 시절부터 테니스를 시작했습니다. 아버지가 코치 역할을 하며 독특한 올코트 스타일을 발전시켰습니다.</p>
                <p>2019년 한때 세계 랭킹 4위까지 올랐으나 이후 슬럼프를 겪었습니다. 하지만 2022년 놀라운 부활을 이루며 WTA 파이널스 우승을 차지, 시즌 최강자로 군림했습니다. 기복이 있는 커리어 속에서도 항상 최고 수준으로 돌아오는 회복력이 인상적입니다.</p>
            `,
      signatureMatch: {
        title: "2022 WTA 파이널스 결승 vs 사발렌카",
        date: "2022. 11. 07",
        description:
          "결승에서 사발렌카를 <strong>7-6, 6-4</strong>로 꺾고 WTA 파이널스 챔피언에 올랐습니다. 시즌 내내 보여준 공격적인 올코트 테니스의 결정체를 보여준 경기로, 가르시아 커리어 최고의 순간이었습니다.",
      },
      fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇫🇷 프랑스 테니스의 엘레강스</div>
                    <p>한 손 백핸드와 네트 플레이로 대표되는 우아한 테니스 스타일은 프랑스 테니스의 전통을 잇는 것입니다. 롤랑가로스에서 프랑스 관중의 열렬한 응원을 받으며 경기하는 모습은 항상 특별한 장면을 만들어냅니다.</p>
                </div>
            `,
      recentForm: `
                <p><strong>"파이널스 챔피언의 저력"</strong></p>
                <p>2022년의 정점 이후 다소 성적이 하락했지만, 경험과 실력을 바탕으로 언제든 톱 10에 복귀할 수 있는 저력을 갖추고 있습니다. 올코트 능력은 여전히 투어 최고 수준입니다.</p>
            `,
      faq: [
        {
          question: "가르시아의 WTA 파이널스 우승이 중요한 이유는?",
          answer:
            "WTA 파이널스는 시즌 상위 8명만 출전할 수 있는 최고 권위의 대회입니다. 이 대회 우승은 시즌 최강자임을 의미하며, 가르시아의 2022시즌 부활을 완벽하게 마무리한 업적입니다.",
        },
        {
          question: "가르시아 선수의 복식 성적은?",
          answer:
            "복식에서도 뛰어난 능력을 보유하고 있으며, 롤랑가로스 혼합복식 우승 등 그랜드슬램 복식 타이틀을 보유하고 있습니다. 네트 플레이 능력이 복식에서 큰 강점이 됩니다.",
        },
      ],
    },
  },

  "carlos-taberner": {
    name: "카를로스 타베르네르",
    nameEn: "Carlos Taberner",
    country: "스페인",
    countryFlag: "🇪🇸",
    image: "/images/players/carlos-taberner.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "클레이 코트에서 강한 스페인의 베이스라이너",
    detailedProfile: {
      oneLineSummary: "클레이 코트에서 강한 스페인의 베이스라이너",
      whyNotable: `<p>Carlos Taberner(카를로스 타베르네르) 선수는 스페인 출신의 프로 테니스 선수로, 끈질긴 랠리와 높은 탑스핀 포핸드이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>클레이 코트에서 강한 스페인의 베이스라이너. ATP 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>카를로스 타베르네르 선수의 플레이 스타일은 끈질긴 랠리와 높은 탑스핀 포핸드입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 끈질긴 랠리와 높은 탑스핀 포핸드</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 5,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 8, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 8,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 6,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 5, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 8,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>카를로스 타베르네르(Carlos Taberner) 선수는 스페인에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>ATP 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Carlos Taberner의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 끈질긴 랠리와 높은 탑스핀 포핸드을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>카를로스 타베르네르 선수는 코트 위에서의 끈질긴 랠리와 높은 탑스핀 포핸드뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>카를로스 타베르네르 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. ATP 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 끈질긴 랠리와 높은 탑스핀 포핸드이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "카를로스 타베르네르의 국적은?",
          answer: "스페인 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "카를로스 타베르네르의 플레이 스타일은?",
          answer:
            "끈질긴 랠리와 높은 탑스핀 포핸드이 특징인 ATP 투어 선수입니다.",
        },
        {
          question: "카를로스 타베르네르의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "tomas-barrios": {
    name: "토마스 바리오스",
    nameEn: "Tomas Barrios",
    country: "칠레",
    countryFlag: "🇨🇱",
    image: "/images/players/tomas-barrios.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "남미 테니스의 차세대 주자",
    detailedProfile: {
      oneLineSummary: "남미 테니스의 차세대 주자",
      whyNotable: `<p>Tomas Barrios(토마스 바리오스) 선수는 칠레 출신의 프로 테니스 선수로, 안정적인 베이스라인 플레이와 슬라이스 활용이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>남미 테니스의 차세대 주자. ATP 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>토마스 바리오스 선수의 플레이 스타일은 안정적인 베이스라인 플레이와 슬라이스 활용입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 안정적인 베이스라인 플레이와 슬라이스 활용</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 8,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 6, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 6,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 7,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 7, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 8,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>토마스 바리오스(Tomas Barrios) 선수는 칠레에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>ATP 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Tomas Barrios의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 안정적인 베이스라인 플레이와 슬라이스 활용을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>토마스 바리오스 선수는 코트 위에서의 안정적인 베이스라인 플레이와 슬라이스 활용뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>토마스 바리오스 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. ATP 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 안정적인 베이스라인 플레이와 슬라이스 활용이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "토마스 바리오스의 국적은?",
          answer: "칠레 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "토마스 바리오스의 플레이 스타일은?",
          answer:
            "안정적인 베이스라인 플레이와 슬라이스 활용이 특징인 ATP 투어 선수입니다.",
        },
        {
          question: "토마스 바리오스의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "yibing-wu": {
    name: "우이빙",
    nameEn: "Yibing Wu",
    country: "중국",
    countryFlag: "🇨🇳",
    image: "/images/players/yibing-wu.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "중국 남자 테니스의 개척자",
    detailedProfile: {
      oneLineSummary: "중국 남자 테니스의 개척자",
      whyNotable: `<p>Yibing Wu(우이빙) 선수는 중국 출신의 프로 테니스 선수로, 빠른 풋워크와 정확한 리턴이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>중국 남자 테니스의 개척자. ATP 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>우이빙 선수의 플레이 스타일은 빠른 풋워크와 정확한 리턴입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 빠른 풋워크와 정확한 리턴</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 6,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 7, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 6,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 4,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 8, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 8,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>우이빙(Yibing Wu) 선수는 중국에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>ATP 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Yibing Wu의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 빠른 풋워크와 정확한 리턴을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>우이빙 선수는 코트 위에서의 빠른 풋워크와 정확한 리턴뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>우이빙 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. ATP 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 빠른 풋워크와 정확한 리턴이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "우이빙의 국적은?",
          answer: "중국 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "우이빙의 플레이 스타일은?",
          answer: "빠른 풋워크와 정확한 리턴이 특징인 ATP 투어 선수입니다.",
        },
        {
          question: "우이빙의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "luca-van-assche": {
    name: "루카 반 아셰",
    nameEn: "Luca Van Assche",
    country: "프랑스",
    countryFlag: "🇫🇷",
    image: "/images/players/luca-van-assche.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "프랑스 주니어 출신의 올라운더",
    detailedProfile: {
      oneLineSummary: "프랑스 주니어 출신의 올라운더",
      whyNotable: `<p>Luca Van Assche(루카 반 아셰) 선수는 프랑스 출신의 프로 테니스 선수로, 공격적인 베이스라인 플레이이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>프랑스 주니어 출신의 올라운더. ATP 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>루카 반 아셰 선수의 플레이 스타일은 공격적인 베이스라인 플레이입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 공격적인 베이스라인 플레이</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 7,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 8, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 6,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 6,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 5, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 8,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>루카 반 아셰(Luca Van Assche) 선수는 프랑스에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>ATP 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Luca Van Assche의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 공격적인 베이스라인 플레이을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>루카 반 아셰 선수는 코트 위에서의 공격적인 베이스라인 플레이뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>루카 반 아셰 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. ATP 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 공격적인 베이스라인 플레이이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "루카 반 아셰의 국적은?",
          answer: "프랑스 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "루카 반 아셰의 플레이 스타일은?",
          answer: "공격적인 베이스라인 플레이이 특징인 ATP 투어 선수입니다.",
        },
        {
          question: "루카 반 아셰의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "alex-blockx": {
    name: "알렉스 블록스",
    nameEn: "Alex Blockx",
    country: "벨기에",
    countryFlag: "🇧🇪",
    image: "/images/players/alex-blockx.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "벨기에의 떠오르는 신예",
    detailedProfile: {
      oneLineSummary: "벨기에의 떠오르는 신예",
      whyNotable: `<p>Alex Blockx(알렉스 블록스) 선수는 벨기에 출신의 프로 테니스 선수로, 빠른 전환과 네트 플레이이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>벨기에의 떠오르는 신예. ATP 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>알렉스 블록스 선수의 플레이 스타일은 빠른 전환과 네트 플레이입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 빠른 전환과 네트 플레이</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 7,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 7, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 8,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 4,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 8, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 5,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>알렉스 블록스(Alex Blockx) 선수는 벨기에에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>ATP 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Alex Blockx의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 빠른 전환과 네트 플레이을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>알렉스 블록스 선수는 코트 위에서의 빠른 전환과 네트 플레이뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>알렉스 블록스 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. ATP 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 빠른 전환과 네트 플레이이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "알렉스 블록스의 국적은?",
          answer: "벨기에 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "알렉스 블록스의 플레이 스타일은?",
          answer: "빠른 전환과 네트 플레이이 특징인 ATP 투어 선수입니다.",
        },
        {
          question: "알렉스 블록스의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "erika-andreeva": {
    name: "에리카 안드레에바",
    nameEn: "Erika Andreeva",
    country: "러시아",
    countryFlag: "🇷🇺",
    image: "/images/players/erika-andreeva.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "미르라의 언니, 또 다른 재능",
    detailedProfile: {
      oneLineSummary: "미르라의 언니, 또 다른 재능",
      whyNotable: `<p>Erika Andreeva(에리카 안드레에바) 선수는 러시아 출신의 프로 테니스 선수로, 안정적 스트로크와 경기 운영이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>미르라의 언니, 또 다른 재능. WTA 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>에리카 안드레에바 선수의 플레이 스타일은 안정적 스트로크와 경기 운영입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 안정적 스트로크와 경기 운영</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 8,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 8, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 7,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 4,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 8, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 6,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>에리카 안드레에바(Erika Andreeva) 선수는 러시아에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>WTA 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Erika Andreeva의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 안정적 스트로크와 경기 운영을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>에리카 안드레에바 선수는 코트 위에서의 안정적 스트로크와 경기 운영뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>에리카 안드레에바 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. WTA 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 안정적 스트로크와 경기 운영이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "에리카 안드레에바의 국적은?",
          answer: "러시아 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "에리카 안드레에바의 플레이 스타일은?",
          answer: "안정적 스트로크와 경기 운영이 특징인 WTA 투어 선수입니다.",
        },
        {
          question: "에리카 안드레에바의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "brenda-fruhvirtova": {
    name: "브렌다 프루비르토바",
    nameEn: "Brenda Fruhvirtova",
    country: "체코",
    countryFlag: "🇨🇿",
    image: "/images/players/brenda-fruhvirtova.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "체코의 10대 천재 소녀",
    detailedProfile: {
      oneLineSummary: "체코의 10대 천재 소녀",
      whyNotable: `<p>Brenda Fruhvirtova(브렌다 프루비르토바) 선수는 체코 출신의 프로 테니스 선수로, 빠른 볼 스피드와 정확도이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>체코의 10대 천재 소녀. WTA 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>브렌다 프루비르토바 선수의 플레이 스타일은 빠른 볼 스피드와 정확도입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 빠른 볼 스피드와 정확도</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 7,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 6, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 7,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 5,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 5, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 5,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>브렌다 프루비르토바(Brenda Fruhvirtova) 선수는 체코에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>WTA 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Brenda Fruhvirtova의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 빠른 볼 스피드와 정확도을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>브렌다 프루비르토바 선수는 코트 위에서의 빠른 볼 스피드와 정확도뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>브렌다 프루비르토바 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. WTA 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 빠른 볼 스피드와 정확도이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "브렌다 프루비르토바의 국적은?",
          answer: "체코 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "브렌다 프루비르토바의 플레이 스타일은?",
          answer: "빠른 볼 스피드와 정확도이 특징인 WTA 투어 선수입니다.",
        },
        {
          question: "브렌다 프루비르토바의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "sara-errani": {
    name: "사라 에라니",
    nameEn: "Sara Errani",
    country: "이탈리아",
    countryFlag: "🇮🇹",
    image: "/images/players/sara-errani.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "이탈리아의 클레이 코트 베테랑",
    detailedProfile: {
      oneLineSummary: "이탈리아의 클레이 코트 베테랑",
      whyNotable: `<p>Sara Errani(사라 에라니) 선수는 이탈리아 출신의 프로 테니스 선수로, 다양한 스핀과 전술적 플레이이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>이탈리아의 클레이 코트 베테랑. WTA 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>사라 에라니 선수의 플레이 스타일은 다양한 스핀과 전술적 플레이입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 다양한 스핀과 전술적 플레이</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 8,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 5, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 8,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 6,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 6, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 6,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>사라 에라니(Sara Errani) 선수는 이탈리아에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>WTA 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Sara Errani의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 다양한 스핀과 전술적 플레이을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>사라 에라니 선수는 코트 위에서의 다양한 스핀과 전술적 플레이뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>사라 에라니 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. WTA 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 다양한 스핀과 전술적 플레이이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "사라 에라니의 국적은?",
          answer: "이탈리아 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "사라 에라니의 플레이 스타일은?",
          answer: "다양한 스핀과 전술적 플레이이 특징인 WTA 투어 선수입니다.",
        },
        {
          question: "사라 에라니의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "viktoriya-tomova": {
    name: "빅토리야 토모바",
    nameEn: "Viktoriya Tomova",
    country: "불가리아",
    countryFlag: "🇧🇬",
    image: "/images/players/viktoriya-tomova.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "불가리아의 끈질긴 투사",
    detailedProfile: {
      oneLineSummary: "불가리아의 끈질긴 투사",
      whyNotable: `<p>Viktoriya Tomova(빅토리야 토모바) 선수는 불가리아 출신의 프로 테니스 선수로, 강한 정신력과 수비적 플레이이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>불가리아의 끈질긴 투사. WTA 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>빅토리야 토모바 선수의 플레이 스타일은 강한 정신력과 수비적 플레이입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 강한 정신력과 수비적 플레이</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 6,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 8, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 7,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 7,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 8, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 6,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>빅토리야 토모바(Viktoriya Tomova) 선수는 불가리아에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>WTA 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Viktoriya Tomova의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 강한 정신력과 수비적 플레이을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>빅토리야 토모바 선수는 코트 위에서의 강한 정신력과 수비적 플레이뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>빅토리야 토모바 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. WTA 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 강한 정신력과 수비적 플레이이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "빅토리야 토모바의 국적은?",
          answer: "불가리아 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "빅토리야 토모바의 플레이 스타일은?",
          answer: "강한 정신력과 수비적 플레이이 특징인 WTA 투어 선수입니다.",
        },
        {
          question: "빅토리야 토모바의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "arantxa-rus": {
    name: "아란차 루스",
    nameEn: "Arantxa Rus",
    country: "네덜란드",
    countryFlag: "🇳🇱",
    image: "/images/players/arantxa-rus.svg",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio: "네덜란드의 왼손잡이 베테랑",
    detailedProfile: {
      oneLineSummary: "네덜란드의 왼손잡이 베테랑",
      whyNotable: `<p>Arantxa Rus(아란차 루스) 선수는 네덜란드 출신의 프로 테니스 선수로, 왼손잡이 특유의 각도와 변화이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>네덜란드의 왼손잡이 베테랑. WTA 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>아란차 루스 선수의 플레이 스타일은 왼손잡이 특유의 각도와 변화입니다. 왼손잡이 특유의 각도와 스핀으로 상대를 혼란에 빠뜨립니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 왼손잡이 특유의 각도와 변화</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 6,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 6, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 6,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 4,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 7, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 8,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>아란차 루스(Arantxa Rus) 선수는 네덜란드에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>WTA 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Arantxa Rus의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 왼손잡이 특유의 각도와 변화을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>아란차 루스 선수는 코트 위에서의 왼손잡이 특유의 각도와 변화뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>아란차 루스 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. WTA 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 왼손잡이 특유의 각도와 변화이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "아란차 루스의 국적은?",
          answer: "네덜란드 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "아란차 루스의 플레이 스타일은?",
          answer: "왼손잡이 특유의 각도와 변화이 특징인 WTA 투어 선수입니다.",
        },
        {
          question: "아란차 루스의 주손은?",
          answer: "왼손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "yue-yuan": {
    name: "위안 위에",
    nameEn: "Yue Yuan",
    country: "중국",
    countryFlag: "🇨🇳",
    image: "/images/players/yue-yuan.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "중국 테니스의 꾸준한 성장주",
    detailedProfile: {
      oneLineSummary: "중국 테니스의 꾸준한 성장주",
      whyNotable: `<p>Yue Yuan(위안 위에) 선수는 중국 출신의 프로 테니스 선수로, 안정적 베이스라인과 멘탈이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>중국 테니스의 꾸준한 성장주. WTA 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>위안 위에 선수의 플레이 스타일은 안정적 베이스라인과 멘탈입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 안정적 베이스라인과 멘탈</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 6,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 8, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 8,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 6,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 8, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 5,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>위안 위에(Yue Yuan) 선수는 중국에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>WTA 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Yue Yuan의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 안정적 베이스라인과 멘탈을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>위안 위에 선수는 코트 위에서의 안정적 베이스라인과 멘탈뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>위안 위에 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. WTA 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 안정적 베이스라인과 멘탈이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "위안 위에의 국적은?",
          answer: "중국 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "위안 위에의 플레이 스타일은?",
          answer: "안정적 베이스라인과 멘탈이 특징인 WTA 투어 선수입니다.",
        },
        {
          question: "위안 위에의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "renata-zarazua": {
    name: "레나타 사라수아",
    nameEn: "Renata Zarazua",
    country: "멕시코",
    countryFlag: "🇲🇽",
    image: "/images/players/renata-zarazua.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "멕시코 여자 테니스의 선구자",
    detailedProfile: {
      oneLineSummary: "멕시코 여자 테니스의 선구자",
      whyNotable: `<p>Renata Zarazua(레나타 사라수아) 선수는 멕시코 출신의 프로 테니스 선수로, 투지와 근성의 플레이이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>멕시코 여자 테니스의 선구자. WTA 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>레나타 사라수아 선수의 플레이 스타일은 투지와 근성의 플레이입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 투지와 근성의 플레이</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 8,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 8, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 8,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 7,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 5, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 5,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>레나타 사라수아(Renata Zarazua) 선수는 멕시코에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>WTA 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Renata Zarazua의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 투지와 근성의 플레이을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>레나타 사라수아 선수는 코트 위에서의 투지와 근성의 플레이뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>레나타 사라수아 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. WTA 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 투지와 근성의 플레이이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "레나타 사라수아의 국적은?",
          answer: "멕시코 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "레나타 사라수아의 플레이 스타일은?",
          answer: "투지와 근성의 플레이이 특징인 WTA 투어 선수입니다.",
        },
        {
          question: "레나타 사라수아의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "timofei-skatov": {
    name: "티모페이 스카토프",
    nameEn: "Timofei Skatov",
    country: "카자흐스탄",
    countryFlag: "🇰🇿",
    image: "/images/players/timofei-skatov.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "중앙아시아의 떠오르는 재능",
    detailedProfile: {
      oneLineSummary: "중앙아시아의 떠오르는 재능",
      whyNotable: `<p>Timofei Skatov(티모페이 스카토프) 선수는 카자흐스탄 출신의 프로 테니스 선수로, 꾸준한 스트로크와 체력이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>중앙아시아의 떠오르는 재능. ATP 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>티모페이 스카토프 선수의 플레이 스타일은 꾸준한 스트로크와 체력입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 꾸준한 스트로크와 체력</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 5,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 6, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 8,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 5,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 6, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 6,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>티모페이 스카토프(Timofei Skatov) 선수는 카자흐스탄에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>ATP 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Timofei Skatov의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 꾸준한 스트로크와 체력을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>티모페이 스카토프 선수는 코트 위에서의 꾸준한 스트로크와 체력뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>티모페이 스카토프 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. ATP 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 꾸준한 스트로크와 체력이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "티모페이 스카토프의 국적은?",
          answer: "카자흐스탄 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "티모페이 스카토프의 플레이 스타일은?",
          answer: "꾸준한 스트로크와 체력이 특징인 ATP 투어 선수입니다.",
        },
        {
          question: "티모페이 스카토프의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "gabriel-diallo": {
    name: "가브리엘 디알로",
    nameEn: "Gabriel Diallo",
    country: "캐나다",
    countryFlag: "🇨🇦",
    image: "/images/players/gabriel-diallo.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "캐나다의 빅서버 신예",
    detailedProfile: {
      oneLineSummary: "캐나다의 빅서버 신예",
      whyNotable: `<p>Gabriel Diallo(가브리엘 디알로) 선수는 캐나다 출신의 프로 테니스 선수로, 장신의 강력한 서브이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>캐나다의 빅서버 신예. ATP 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>가브리엘 디알로 선수의 플레이 스타일은 장신의 강력한 서브입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 장신의 강력한 서브</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 6,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 7, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 8,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 5,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 5, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 8,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>가브리엘 디알로(Gabriel Diallo) 선수는 캐나다에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>ATP 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Gabriel Diallo의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 장신의 강력한 서브을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>가브리엘 디알로 선수는 코트 위에서의 장신의 강력한 서브뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>가브리엘 디알로 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. ATP 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 장신의 강력한 서브이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "가브리엘 디알로의 국적은?",
          answer: "캐나다 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "가브리엘 디알로의 플레이 스타일은?",
          answer: "장신의 강력한 서브이 특징인 ATP 투어 선수입니다.",
        },
        {
          question: "가브리엘 디알로의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "harold-mayot": {
    name: "아롤드 마요",
    nameEn: "Harold Mayot",
    country: "프랑스",
    countryFlag: "🇫🇷",
    image: "/images/players/harold-mayot.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "프랑스 테니스의 미래 주자",
    detailedProfile: {
      oneLineSummary: "프랑스 테니스의 미래 주자",
      whyNotable: `<p>Harold Mayot(아롤드 마요) 선수는 프랑스 출신의 프로 테니스 선수로, 공격적 베이스라인과 드롭샷이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>프랑스 테니스의 미래 주자. ATP 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>아롤드 마요 선수의 플레이 스타일은 공격적 베이스라인과 드롭샷입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 공격적 베이스라인과 드롭샷</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 7,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 8, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 8,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 7,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 8, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 5,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>아롤드 마요(Harold Mayot) 선수는 프랑스에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>ATP 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Harold Mayot의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 공격적 베이스라인과 드롭샷을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>아롤드 마요 선수는 코트 위에서의 공격적 베이스라인과 드롭샷뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>아롤드 마요 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. ATP 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 공격적 베이스라인과 드롭샷이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "아롤드 마요의 국적은?",
          answer: "프랑스 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "아롤드 마요의 플레이 스타일은?",
          answer: "공격적 베이스라인과 드롭샷이 특징인 ATP 투어 선수입니다.",
        },
        {
          question: "아롤드 마요의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "alex-ritschard": {
    name: "알렉스 리차드",
    nameEn: "Alex Ritschard",
    country: "스위스",
    countryFlag: "🇨🇭",
    image: "/images/players/alex-ritschard.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "One-handed",
    longBio: "스위스의 원핸드 백핸드 계승자",
    detailedProfile: {
      oneLineSummary: "스위스의 원핸드 백핸드 계승자",
      whyNotable: `<p>Alex Ritschard(알렉스 리차드) 선수는 스위스 출신의 프로 테니스 선수로, 클래식한 원핸드 백핸드이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>스위스의 원핸드 백핸드 계승자. ATP 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>알렉스 리차드 선수의 플레이 스타일은 클래식한 원핸드 백핸드입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 클래식한 원핸드 백핸드는 그의 트레이드마크입니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 클래식한 원핸드 백핸드</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 6,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 5, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 7,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 4,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 5, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 6,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>알렉스 리차드(Alex Ritschard) 선수는 스위스에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>ATP 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Alex Ritschard의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 클래식한 원핸드 백핸드을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>알렉스 리차드 선수는 코트 위에서의 클래식한 원핸드 백핸드뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>알렉스 리차드 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. ATP 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 클래식한 원핸드 백핸드이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "알렉스 리차드의 국적은?",
          answer: "스위스 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "알렉스 리차드의 플레이 스타일은?",
          answer: "클래식한 원핸드 백핸드이 특징인 ATP 투어 선수입니다.",
        },
        {
          question: "알렉스 리차드의 주손은?",
          answer: "오른손잡이이며, 원핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "hailey-baptiste": {
    name: "헤일리 밥티스트",
    nameEn: "Hailey Baptiste",
    country: "미국",
    countryFlag: "🇺🇸",
    image: "/images/players/hailey-baptiste.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "미국 여자 테니스의 신예",
    detailedProfile: {
      oneLineSummary: "미국 여자 테니스의 신예",
      whyNotable: `<p>Hailey Baptiste(헤일리 밥티스트) 선수는 미국 출신의 프로 테니스 선수로, 빠른 스윙과 공격적 리턴이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>미국 여자 테니스의 신예. WTA 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>헤일리 밥티스트 선수의 플레이 스타일은 빠른 스윙과 공격적 리턴입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 빠른 스윙과 공격적 리턴</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 6,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 6, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 7,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 4,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 7, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 6,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>헤일리 밥티스트(Hailey Baptiste) 선수는 미국에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>WTA 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Hailey Baptiste의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 빠른 스윙과 공격적 리턴을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>헤일리 밥티스트 선수는 코트 위에서의 빠른 스윙과 공격적 리턴뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>헤일리 밥티스트 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. WTA 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 빠른 스윙과 공격적 리턴이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "헤일리 밥티스트의 국적은?",
          answer: "미국 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "헤일리 밥티스트의 플레이 스타일은?",
          answer: "빠른 스윙과 공격적 리턴이 특징인 WTA 투어 선수입니다.",
        },
        {
          question: "헤일리 밥티스트의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "marina-stakusic": {
    name: "마리나 스타쿠식",
    nameEn: "Marina Stakusic",
    country: "캐나다",
    countryFlag: "🇨🇦",
    image: "/images/players/marina-stakusic.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "캐나다의 차세대 여성 선수",
    detailedProfile: {
      oneLineSummary: "캐나다의 차세대 여성 선수",
      whyNotable: `<p>Marina Stakusic(마리나 스타쿠식) 선수는 캐나다 출신의 프로 테니스 선수로, 공격적 포핸드와 서브이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>캐나다의 차세대 여성 선수. WTA 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>마리나 스타쿠식 선수의 플레이 스타일은 공격적 포핸드와 서브입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 공격적 포핸드와 서브</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 5,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 7, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 7,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 7,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 6, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 7,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>마리나 스타쿠식(Marina Stakusic) 선수는 캐나다에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>WTA 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Marina Stakusic의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 공격적 포핸드와 서브을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>마리나 스타쿠식 선수는 코트 위에서의 공격적 포핸드와 서브뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>마리나 스타쿠식 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. WTA 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 공격적 포핸드와 서브이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "마리나 스타쿠식의 국적은?",
          answer: "캐나다 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "마리나 스타쿠식의 플레이 스타일은?",
          answer: "공격적 포핸드와 서브이 특징인 WTA 투어 선수입니다.",
        },
        {
          question: "마리나 스타쿠식의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "emina-bektas": {
    name: "에미나 벡타스",
    nameEn: "Emina Bektas",
    country: "미국",
    countryFlag: "🇺🇸",
    image: "/images/players/emina-bektas.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "늦깎이 프로 전향의 성공 스토리",
    detailedProfile: {
      oneLineSummary: "늦깎이 프로 전향의 성공 스토리",
      whyNotable: `<p>Emina Bektas(에미나 벡타스) 선수는 미국 출신의 프로 테니스 선수로, 경험에서 나오는 안정적 플레이이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>늦깎이 프로 전향의 성공 스토리. WTA 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>에미나 벡타스 선수의 플레이 스타일은 경험에서 나오는 안정적 플레이입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 경험에서 나오는 안정적 플레이</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 8,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 6, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 7,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 6,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 6, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 8,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>에미나 벡타스(Emina Bektas) 선수는 미국에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>WTA 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Emina Bektas의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 경험에서 나오는 안정적 플레이을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>에미나 벡타스 선수는 코트 위에서의 경험에서 나오는 안정적 플레이뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>에미나 벡타스 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. WTA 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 경험에서 나오는 안정적 플레이이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "에미나 벡타스의 국적은?",
          answer: "미국 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "에미나 벡타스의 플레이 스타일은?",
          answer: "경험에서 나오는 안정적 플레이이 특징인 WTA 투어 선수입니다.",
        },
        {
          question: "에미나 벡타스의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "sara-bejlek": {
    name: "사라 베일렉",
    nameEn: "Sara Bejlek",
    country: "체코",
    countryFlag: "🇨🇿",
    image: "/images/players/sara-bejlek.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "체코의 10대 유망주",
    detailedProfile: {
      oneLineSummary: "체코의 10대 유망주",
      whyNotable: `<p>Sara Bejlek(사라 베일렉) 선수는 체코 출신의 프로 테니스 선수로, 공격적 스트로크와 승부 근성이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>체코의 10대 유망주. WTA 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>사라 베일렉 선수의 플레이 스타일은 공격적 스트로크와 승부 근성입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 공격적 스트로크와 승부 근성</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 6,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 5, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 7,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 4,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 5, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 8,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>사라 베일렉(Sara Bejlek) 선수는 체코에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>WTA 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Sara Bejlek의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 공격적 스트로크와 승부 근성을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>사라 베일렉 선수는 코트 위에서의 공격적 스트로크와 승부 근성뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>사라 베일렉 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. WTA 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 공격적 스트로크와 승부 근성이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "사라 베일렉의 국적은?",
          answer: "체코 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "사라 베일렉의 플레이 스타일은?",
          answer: "공격적 스트로크와 승부 근성이 특징인 WTA 투어 선수입니다.",
        },
        {
          question: "사라 베일렉의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },
  "alibek-kachmazov": {
    name: "알리벡 카치마조프",
    nameEn: "Alibek Kachmazov",
    country: "러시아",
    countryFlag: "🇷🇺",
    image: "/images/players/alibek-kachmazov.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "러시아의 하드코트 스페셜리스트",
    detailedProfile: {
      oneLineSummary: "러시아의 하드코트 스페셜리스트",
      whyNotable: `<p>Alibek Kachmazov(알리벡 카치마조프) 선수는 러시아 출신의 프로 테니스 선수로, 파워풀한 포핸드와 서브이 특징입니다.</p>
        <div class="highlight-box">
          <div class="highlight-box-title">🎾 주목 포인트</div>
          <p>러시아의 하드코트 스페셜리스트. ATP 투어에서 꾸준한 성장세를 보이며 팬들의 기대를 모으고 있습니다.</p>
        </div>`,
      playStyle: `<p>알리벡 카치마조프 선수의 플레이 스타일은 파워풀한 포핸드와 서브입니다. 안정적인 오른손 스트로크를 기반으로 경기를 운영합니다. 투핸드 백핸드로 안정적인 수비와 공격을 병행합니다.</p>
        <p><strong>시그니처 기술:</strong></p>
        <ul>
          <li><strong>스트로크:</strong> 파워풀한 포핸드와 서브</li>
          <li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li>
          <li><strong>전술:</strong> 상황에 맞는 유연한 경기 운영</li>
        </ul>`,
      hexagonStats: [
        {
          name: "서브력",
          score: 8,
          description: "서비스 게임의 안정성과 파괴력",
        },
        { name: "리턴력", score: 7, description: "상대 서브에 대한 대응 능력" },
        {
          name: "스트로크",
          score: 6,
          description: "베이스라인에서의 스트로크 능력",
        },
        {
          name: "네트플레이",
          score: 6,
          description: "네트 앞에서의 터치와 판단력",
        },
        { name: "체력/멘탈", score: 5, description: "체력과 정신력의 조화" },
        {
          name: "경기운영",
          score: 6,
          description: "전술적 판단과 경기 흐름 제어",
        },
      ],
      growthStory: `<p>알리벡 카치마조프(Alibek Kachmazov) 선수는 러시아에서 태어나 어린 시절부터 테니스에 재능을 보였습니다. 주니어 시절부터 국제 대회에서 두각을 나타내며 프로 전향 후에도 꾸준한 성장세를 이어가고 있습니다.</p>
        <p>ATP 투어에서 경험을 쌓으며 자신만의 플레이 스타일을 확립해 나가고 있으며, 앞으로의 성장이 기대되는 선수입니다.</p>`,
      signatureMatch: {
        title: "Alibek Kachmazov의 커리어 베스트 매치",
        date: "2025",
        description:
          "투어 대회에서 상위 랭커를 꺾으며 잠재력을 증명한 경기. 파워풀한 포핸드와 서브을 유감없이 발휘하며 승리를 거머쥐었습니다.",
      },
      fanAppeal: `<div class="highlight-box">
        <div class="highlight-box-title">💫 팬 어필 포인트</div>
        <p>알리벡 카치마조프 선수는 코트 위에서의 파워풀한 포핸드와 서브뿐만 아니라, 코트 밖에서의 겸손하고 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p>
      </div>`,
      recentForm: `<p>알리벡 카치마조프 선수는 최근 시즌에서 꾸준한 경기력을 보여주고 있습니다. ATP 투어 대회에서 안정적인 성적을 거두며 랭킹 상승을 노리고 있습니다. 특히 파워풀한 포핸드와 서브이 더욱 발전하면서 향후 더 큰 무대에서의 활약이 기대됩니다.</p>`,
      faq: [
        {
          question: "알리벡 카치마조프의 국적은?",
          answer: "러시아 출신의 프로 테니스 선수입니다.",
        },
        {
          question: "알리벡 카치마조프의 플레이 스타일은?",
          answer: "파워풀한 포핸드와 서브이 특징인 ATP 투어 선수입니다.",
        },
        {
          question: "알리벡 카치마조프의 주손은?",
          answer: "오른손잡이이며, 투핸드 백핸드를 사용합니다.",
        },
      ],
    },
  },

  "jiri-vesely": {
    name: "이르지 베셀리",
    nameEn: "Jiri Vesely",
    country: "체코",
    countryFlag: "🇨🇿",
    image: "/images/players/jiri-vesely.svg",
    gender: "male",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio: "체코의 왼손잡이 빅서버",
    detailedProfile: {
      oneLineSummary: "체코의 왼손잡이 빅서버",
      whyNotable: `<p>Jiri Vesely(이르지 베셀리) 선수는 체코 출신으로 강력한 왼손 서브와 탑스핀 포핸드이 특징입니다.</p><div class="highlight-box"><div class="highlight-box-title">🎾 주목 포인트</div><p>체코의 왼손잡이 빅서버. ATP 투어에서 성장세를 보이고 있습니다.</p></div>`,
      playStyle: `<p>이르지 베셀리 선수의 스타일은 강력한 왼손 서브와 탑스핀 포핸드입니다. 왼손잡이 특유의 각도로 상대를 압박합니다.</p><ul><li><strong>스트로크:</strong> 강력한 왼손 서브와 탑스핀 포핸드</li><li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li><li><strong>전술:</strong> 유연한 경기 운영</li></ul>`,
      hexagonStats: [
        { name: "서브력", score: 6, description: "서비스 게임 능력" },
        { name: "리턴력", score: 5, description: "리턴 대응 능력" },
        { name: "스트로크", score: 8, description: "스트로크 능력" },
        { name: "네트플레이", score: 8, description: "네트 플레이 능력" },
        { name: "체력/멘탈", score: 5, description: "체력과 정신력" },
        { name: "경기운영", score: 8, description: "전술적 경기 운영" },
      ],
      growthStory: `<p>이르지 베셀리(Jiri Vesely) 선수는 체코에서 성장하며 테니스에 재능을 보였습니다. 프로 전향 후 꾸준한 성장세를 이어가고 있습니다.</p>`,
      signatureMatch: {
        title: "Jiri Vesely의 베스트 매치",
        date: "2025",
        description: "상위 랭커를 꺾으며 잠재력을 증명한 경기.",
      },
      fanAppeal: `<div class="highlight-box"><div class="highlight-box-title">💫 팬 어필</div><p>이르지 베셀리 선수는 코트 안팎에서 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p></div>`,
      recentForm: `<p>최근 시즌에서 안정적인 경기력을 보이며 랭킹 상승을 노리고 있습니다.</p>`,
      faq: [
        { question: "이르지 베셀리의 국적은?", answer: "체코 출신입니다." },
        {
          question: "이르지 베셀리의 플레이 스타일은?",
          answer: "강력한 왼손 서브와 탑스핀 포핸드이 특징입니다.",
        },
        { question: "이르지 베셀리의 주손은?", answer: "왼손잡이입니다." },
      ],
    },
  },
  "anna-bondar": {
    name: "안나 본다르",
    nameEn: "Anna Bondar",
    country: "헝가리",
    countryFlag: "🇭🇺",
    image: "/images/players/anna-bondar.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "헝가리의 끈질긴 올라운더",
    detailedProfile: {
      oneLineSummary: "헝가리의 끈질긴 올라운더",
      whyNotable: `<p>Anna Bondar(안나 본다르) 선수는 헝가리 출신으로 수비적 안정성과 정확한 스트로크이 특징입니다.</p><div class="highlight-box"><div class="highlight-box-title">🎾 주목 포인트</div><p>헝가리의 끈질긴 올라운더. WTA 투어에서 성장세를 보이고 있습니다.</p></div>`,
      playStyle: `<p>안나 본다르 선수의 스타일은 수비적 안정성과 정확한 스트로크입니다. 안정적인 오른손 스트로크를 기반으로 합니다.</p><ul><li><strong>스트로크:</strong> 수비적 안정성과 정확한 스트로크</li><li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li><li><strong>전술:</strong> 유연한 경기 운영</li></ul>`,
      hexagonStats: [
        { name: "서브력", score: 8, description: "서비스 게임 능력" },
        { name: "리턴력", score: 7, description: "리턴 대응 능력" },
        { name: "스트로크", score: 8, description: "스트로크 능력" },
        { name: "네트플레이", score: 6, description: "네트 플레이 능력" },
        { name: "체력/멘탈", score: 7, description: "체력과 정신력" },
        { name: "경기운영", score: 7, description: "전술적 경기 운영" },
      ],
      growthStory: `<p>안나 본다르(Anna Bondar) 선수는 헝가리에서 성장하며 테니스에 재능을 보였습니다. 프로 전향 후 꾸준한 성장세를 이어가고 있습니다.</p>`,
      signatureMatch: {
        title: "Anna Bondar의 베스트 매치",
        date: "2025",
        description: "상위 랭커를 꺾으며 잠재력을 증명한 경기.",
      },
      fanAppeal: `<div class="highlight-box"><div class="highlight-box-title">💫 팬 어필</div><p>안나 본다르 선수는 코트 안팎에서 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p></div>`,
      recentForm: `<p>최근 시즌에서 안정적인 경기력을 보이며 랭킹 상승을 노리고 있습니다.</p>`,
      faq: [
        { question: "안나 본다르의 국적은?", answer: "헝가리 출신입니다." },
        {
          question: "안나 본다르의 플레이 스타일은?",
          answer: "수비적 안정성과 정확한 스트로크이 특징입니다.",
        },
        { question: "안나 본다르의 주손은?", answer: "오른손잡이입니다." },
      ],
    },
  },
  "hugo-dellien": {
    name: "우고 델리엔",
    nameEn: "Hugo Dellien",
    country: "볼리비아",
    countryFlag: "🇧🇴",
    image: "/images/players/hugo-dellien.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "볼리비아 테니스의 개척자",
    detailedProfile: {
      oneLineSummary: "볼리비아 테니스의 개척자",
      whyNotable: `<p>Hugo Dellien(우고 델리엔) 선수는 볼리비아 출신으로 클레이 코트에서의 끈질긴 랠리이 특징입니다.</p><div class="highlight-box"><div class="highlight-box-title">🎾 주목 포인트</div><p>볼리비아 테니스의 개척자. ATP 투어에서 성장세를 보이고 있습니다.</p></div>`,
      playStyle: `<p>우고 델리엔 선수의 스타일은 클레이 코트에서의 끈질긴 랠리입니다. 안정적인 오른손 스트로크를 기반으로 합니다.</p><ul><li><strong>스트로크:</strong> 클레이 코트에서의 끈질긴 랠리</li><li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li><li><strong>전술:</strong> 유연한 경기 운영</li></ul>`,
      hexagonStats: [
        { name: "서브력", score: 6, description: "서비스 게임 능력" },
        { name: "리턴력", score: 7, description: "리턴 대응 능력" },
        { name: "스트로크", score: 5, description: "스트로크 능력" },
        { name: "네트플레이", score: 6, description: "네트 플레이 능력" },
        { name: "체력/멘탈", score: 6, description: "체력과 정신력" },
        { name: "경기운영", score: 5, description: "전술적 경기 운영" },
      ],
      growthStory: `<p>우고 델리엔(Hugo Dellien) 선수는 볼리비아에서 성장하며 테니스에 재능을 보였습니다. 프로 전향 후 꾸준한 성장세를 이어가고 있습니다.</p>`,
      signatureMatch: {
        title: "Hugo Dellien의 베스트 매치",
        date: "2025",
        description: "상위 랭커를 꺾으며 잠재력을 증명한 경기.",
      },
      fanAppeal: `<div class="highlight-box"><div class="highlight-box-title">💫 팬 어필</div><p>우고 델리엔 선수는 코트 안팎에서 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p></div>`,
      recentForm: `<p>최근 시즌에서 안정적인 경기력을 보이며 랭킹 상승을 노리고 있습니다.</p>`,
      faq: [
        { question: "우고 델리엔의 국적은?", answer: "볼리비아 출신입니다." },
        {
          question: "우고 델리엔의 플레이 스타일은?",
          answer: "클레이 코트에서의 끈질긴 랠리이 특징입니다.",
        },
        { question: "우고 델리엔의 주손은?", answer: "오른손잡이입니다." },
      ],
    },
  },
  "oceane-dodin": {
    name: "오세안 도댕",
    nameEn: "Oceane Dodin",
    country: "프랑스",
    countryFlag: "🇫🇷",
    image: "/images/players/oceane-dodin.svg",
    gender: "female",
    plays: "Left-handed",
    backhand: "Two-handed",
    longBio: "프랑스의 왼손잡이 파워 히터",
    detailedProfile: {
      oneLineSummary: "프랑스의 왼손잡이 파워 히터",
      whyNotable: `<p>Oceane Dodin(오세안 도댕) 선수는 프랑스 출신으로 왼손 특유의 각도와 폭발적 포핸드이 특징입니다.</p><div class="highlight-box"><div class="highlight-box-title">🎾 주목 포인트</div><p>프랑스의 왼손잡이 파워 히터. WTA 투어에서 성장세를 보이고 있습니다.</p></div>`,
      playStyle: `<p>오세안 도댕 선수의 스타일은 왼손 특유의 각도와 폭발적 포핸드입니다. 왼손잡이 특유의 각도로 상대를 압박합니다.</p><ul><li><strong>스트로크:</strong> 왼손 특유의 각도와 폭발적 포핸드</li><li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li><li><strong>전술:</strong> 유연한 경기 운영</li></ul>`,
      hexagonStats: [
        { name: "서브력", score: 8, description: "서비스 게임 능력" },
        { name: "리턴력", score: 5, description: "리턴 대응 능력" },
        { name: "스트로크", score: 6, description: "스트로크 능력" },
        { name: "네트플레이", score: 8, description: "네트 플레이 능력" },
        { name: "체력/멘탈", score: 6, description: "체력과 정신력" },
        { name: "경기운영", score: 6, description: "전술적 경기 운영" },
      ],
      growthStory: `<p>오세안 도댕(Oceane Dodin) 선수는 프랑스에서 성장하며 테니스에 재능을 보였습니다. 프로 전향 후 꾸준한 성장세를 이어가고 있습니다.</p>`,
      signatureMatch: {
        title: "Oceane Dodin의 베스트 매치",
        date: "2025",
        description: "상위 랭커를 꺾으며 잠재력을 증명한 경기.",
      },
      fanAppeal: `<div class="highlight-box"><div class="highlight-box-title">💫 팬 어필</div><p>오세안 도댕 선수는 코트 안팎에서 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p></div>`,
      recentForm: `<p>최근 시즌에서 안정적인 경기력을 보이며 랭킹 상승을 노리고 있습니다.</p>`,
      faq: [
        { question: "오세안 도댕의 국적은?", answer: "프랑스 출신입니다." },
        {
          question: "오세안 도댕의 플레이 스타일은?",
          answer: "왼손 특유의 각도와 폭발적 포핸드이 특징입니다.",
        },
        { question: "오세안 도댕의 주손은?", answer: "왼손잡이입니다." },
      ],
    },
  },
  "lucrezia-stefanini": {
    name: "루크레치아 스테파니니",
    nameEn: "Lucrezia Stefanini",
    country: "이탈리아",
    countryFlag: "🇮🇹",
    image: "/images/players/lucrezia-stefanini.svg",
    gender: "female",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "이탈리아의 클레이코트 스페셜리스트",
    detailedProfile: {
      oneLineSummary: "이탈리아의 클레이코트 스페셜리스트",
      whyNotable: `<p>Lucrezia Stefanini(루크레치아 스테파니니) 선수는 이탈리아 출신으로 뛰어난 슬라이스와 드롭샷 터치이 특징입니다.</p><div class="highlight-box"><div class="highlight-box-title">🎾 주목 포인트</div><p>이탈리아의 클레이코트 스페셜리스트. WTA 투어에서 성장세를 보이고 있습니다.</p></div>`,
      playStyle: `<p>루크레치아 스테파니니 선수의 스타일은 뛰어난 슬라이스와 드롭샷 터치입니다. 안정적인 오른손 스트로크를 기반으로 합니다.</p><ul><li><strong>스트로크:</strong> 뛰어난 슬라이스와 드롭샷 터치</li><li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li><li><strong>전술:</strong> 유연한 경기 운영</li></ul>`,
      hexagonStats: [
        { name: "서브력", score: 6, description: "서비스 게임 능력" },
        { name: "리턴력", score: 7, description: "리턴 대응 능력" },
        { name: "스트로크", score: 8, description: "스트로크 능력" },
        { name: "네트플레이", score: 5, description: "네트 플레이 능력" },
        { name: "체력/멘탈", score: 8, description: "체력과 정신력" },
        { name: "경기운영", score: 6, description: "전술적 경기 운영" },
      ],
      growthStory: `<p>루크레치아 스테파니니(Lucrezia Stefanini) 선수는 이탈리아에서 성장하며 테니스에 재능을 보였습니다. 프로 전향 후 꾸준한 성장세를 이어가고 있습니다.</p>`,
      signatureMatch: {
        title: "Lucrezia Stefanini의 베스트 매치",
        date: "2025",
        description: "상위 랭커를 꺾으며 잠재력을 증명한 경기.",
      },
      fanAppeal: `<div class="highlight-box"><div class="highlight-box-title">💫 팬 어필</div><p>루크레치아 스테파니니 선수는 코트 안팎에서 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p></div>`,
      recentForm: `<p>최근 시즌에서 안정적인 경기력을 보이며 랭킹 상승을 노리고 있습니다.</p>`,
      faq: [
        {
          question: "루크레치아 스테파니니의 국적은?",
          answer: "이탈리아 출신입니다.",
        },
        {
          question: "루크레치아 스테파니니의 플레이 스타일은?",
          answer: "뛰어난 슬라이스와 드롭샷 터치이 특징입니다.",
        },
        {
          question: "루크레치아 스테파니니의 주손은?",
          answer: "오른손잡이입니다.",
        },
      ],
    },
  },
  "chun-hsin-tseng": {
    name: "쩡춘신",
    nameEn: "Chun-hsin Tseng",
    country: "대만",
    countryFlag: "🇹🇼",
    image: "/images/players/chun-hsin-tseng.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "대만 테니스의 자존심",
    detailedProfile: {
      oneLineSummary: "대만 테니스의 자존심",
      whyNotable: `<p>Chun-hsin Tseng(쩡춘신) 선수는 대만 출신으로 소체구의 민첩한 코트 커버링이 특징입니다.</p><div class="highlight-box"><div class="highlight-box-title">🎾 주목 포인트</div><p>대만 테니스의 자존심. ATP 투어에서 성장세를 보이고 있습니다.</p></div>`,
      playStyle: `<p>쩡춘신 선수의 스타일은 소체구의 민첩한 코트 커버링입니다. 안정적인 오른손 스트로크를 기반으로 합니다.</p><ul><li><strong>스트로크:</strong> 소체구의 민첩한 코트 커버링</li><li><strong>서브:</strong> 경기 흐름을 주도하는 서비스 게임</li><li><strong>전술:</strong> 유연한 경기 운영</li></ul>`,
      hexagonStats: [
        { name: "서브력", score: 6, description: "서비스 게임 능력" },
        { name: "리턴력", score: 7, description: "리턴 대응 능력" },
        { name: "스트로크", score: 6, description: "스트로크 능력" },
        { name: "네트플레이", score: 6, description: "네트 플레이 능력" },
        { name: "체력/멘탈", score: 5, description: "체력과 정신력" },
        { name: "경기운영", score: 8, description: "전술적 경기 운영" },
      ],
      growthStory: `<p>쩡춘신(Chun-hsin Tseng) 선수는 대만에서 성장하며 테니스에 재능을 보였습니다. 프로 전향 후 꾸준한 성장세를 이어가고 있습니다.</p>`,
      signatureMatch: {
        title: "Chun-hsin Tseng의 베스트 매치",
        date: "2025",
        description: "상위 랭커를 꺾으며 잠재력을 증명한 경기.",
      },
      fanAppeal: `<div class="highlight-box"><div class="highlight-box-title">💫 팬 어필</div><p>쩡춘신 선수는 코트 안팎에서 성실한 모습으로 팬들의 사랑을 받고 있습니다.</p></div>`,
      recentForm: `<p>최근 시즌에서 안정적인 경기력을 보이며 랭킹 상승을 노리고 있습니다.</p>`,
      faq: [
        { question: "쩡춘신의 국적은?", answer: "대만 출신입니다." },
        {
          question: "쩡춘신의 플레이 스타일은?",
          answer: "소체구의 민첩한 코트 커버링이 특징입니다.",
        },
        { question: "쩡춘신의 주손은?", answer: "오른손잡이입니다." },
      ],
    },
  },

  "pedro-cachin": {
    name: "페드로 카친",
    nameEn: "Pedro Cachin",
    country: "아르헨티나",
    countryFlag: "🇦🇷",
    image: "/images/players/pedro-cachin.svg",
    gender: "male",
    plays: "Right-handed",
    backhand: "Two-handed",
    longBio: "아르헨티나 클레이코트의 끈질긴 투사",
    detailedProfile: {
      oneLineSummary: "아르헨티나 클레이코트의 끈질긴 투사",
      whyNotable: `<p>Pedro Cachin(페드로 카친) 선수는 아르헨티나 출신의 프로 테니스 선수로, 클레이 코트에서의 끈질긴 랠리와 정확한 톱스핀이 특징입니다.</p><div class="highlight-box"><div class="highlight-box-title">🎾 주목 포인트</div><p>남미 특유의 클레이코트 전투력으로 ATP 투어에서 경쟁력을 보이고 있습니다.</p></div>`,
      playStyle: `<p>페드로 카친 선수의 스타일은 끈질긴 베이스라인 랠리와 정확한 탑스핀입니다.</p><ul><li><strong>스트로크:</strong> 클레이 코트에서의 깊은 탑스핀 랠리</li><li><strong>서브:</strong> 안정적인 서비스 게임</li><li><strong>전술:</strong> 인내심 있는 포인트 구성</li></ul>`,
      hexagonStats: [
        { name: "서브력", score: 6, description: "안정적 서브" },
        { name: "리턴력", score: 7, description: "뛰어난 리턴" },
        { name: "스트로크", score: 7, description: "강한 탑스핀" },
        { name: "네트플레이", score: 5, description: "기본적 네트" },
        { name: "체력/멘탈", score: 8, description: "뛰어난 체력" },
        { name: "경기운영", score: 7, description: "인내심 있는 운영" },
      ],
      growthStory: `<p>아르헨티나에서 성장한 카친은 남미 클레이코트 서킷에서 경험을 쌓으며 ATP 투어에 진출했습니다.</p>`,
      signatureMatch: {
        title: "카친의 베스트 매치",
        date: "2025",
        description: "ATP 대회에서 시드를 꺾으며 잠재력을 증명.",
      },
      fanAppeal: `<div class="highlight-box"><div class="highlight-box-title">💫 팬 어필</div><p>끈질긴 투지와 겸손한 성격으로 팬들의 사랑을 받고 있습니다.</p></div>`,
      recentForm: `<p>최근 클레이 시즌에서 좋은 성적을 내며 랭킹 상승 중입니다.</p>`,
      faq: [
        { question: "카친의 국적은?", answer: "아르헨티나 출신입니다." },
        {
          question: "카친의 스타일은?",
          answer: "클레이코트에서의 끈질긴 랠리가 특징입니다.",
        },
        {
          question: "카친의 주손은?",
          answer: "오른손잡이, 투핸드 백핸드입니다.",
        },
      ],
    },
  },
};
