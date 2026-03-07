const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "src", "data", "players.ts");

const players = [
  { slug: "lorenzo-sonego", name: "로렌초 소네고", nameEn: "Lorenzo Sonego", country: "Italy", countryKo: "이탈리아", countryFlag: "🇮🇹", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "에너지 넘치는 공격 전개와 빠른 템포", notable: "빠른 코트에서 분위기를 끌어올리는 경기 운영으로 존재감을 드러낸다" },
  { slug: "marcos-giron", name: "마르코스 기론", nameEn: "Marcos Giron", country: "USA", countryKo: "미국", countryFlag: "🇺🇸", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "군더더기 없는 스트로크와 안정적인 밸런스", notable: "기본기 완성도가 높아 투어에서 꾸준히 경쟁력을 유지한다" },
  { slug: "alejandro-tabilo", name: "알레한드로 타빌로", nameEn: "Alejandro Tabilo", country: "Chile", countryKo: "칠레", countryFlag: "🇨🇱", gender: "male", plays: "Left-handed", backhand: "Two-handed", style: "왼손 각도와 묵직한 패턴 전개", notable: "차분하게 리듬을 바꾸며 상대를 불편하게 만드는 능력이 좋다" },
  { slug: "tomas-martin-etcheverry", name: "토마스 마르틴 에체베리", nameEn: "Tomas Martin Etcheverry", country: "Argentina", countryKo: "아르헨티나", countryFlag: "🇦🇷", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "긴 랠리와 높은 볼 견딤 능력", notable: "클레이 기반의 반복형 테니스로 경기 흐름을 길게 끌고 간다" },
  { slug: "pedro-martinez", name: "페드로 마르티네스", nameEn: "Pedro Martinez", country: "Spain", countryKo: "스페인", countryFlag: "🇪🇸", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "정돈된 포인트 설계와 실수 관리", notable: "무리하지 않는 운영과 기본기로 승부하는 타입이다" },
  { slug: "sebastian-ofner", name: "제바스티안 오프너", nameEn: "Sebastian Ofner", country: "Austria", countryKo: "오스트리아", countryFlag: "🇦🇹", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "서브 이후 빠른 선공과 직선적인 공격", notable: "첫 스트라이크의 질이 높을 때 위력이 크게 살아난다" },
  { slug: "alexandre-muller", name: "알렉상드르 뮐러", nameEn: "Alexandre Muller", country: "France", countryKo: "프랑스", countryFlag: "🇫🇷", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "차분한 스트로크와 끈질긴 포인트 운영", notable: "한 포인트씩 쌓아가는 경기 설계가 안정적인 편이다" },
  { slug: "francisco-comesana", name: "프란시스코 코메사냐", nameEn: "Francisco Comesana", country: "Argentina", countryKo: "아르헨티나", countryFlag: "🇦🇷", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "클레이 기반 수비력과 리듬 유지", notable: "성장세가 꾸준해 상위 레벨 적응이 기대되는 선수다" },
  { slug: "camilo-ugo-carabelli", name: "카밀로 우고 카라벨리", nameEn: "Camilo Ugo Carabelli", country: "Argentina", countryKo: "아르헨티나", countryFlag: "🇦🇷", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "끈질긴 커버와 타이밍 위주의 랠리", notable: "클레이에서 버티는 힘과 포인트 인내심이 돋보인다" },
  { slug: "zizou-bergs", name: "지주 베르그스", nameEn: "Zizou Bergs", country: "Belgium", countryKo: "벨기에", countryFlag: "🇧🇪", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "활발한 발과 적극적인 압박", notable: "에너지 레벨이 높고 분위기 반전 능력이 있는 선수다" },
  { slug: "hamad-medjedovic", name: "하마드 메제도비치", nameEn: "Hamad Medjedovic", country: "Serbia", countryKo: "세르비아", countryFlag: "🇷🇸", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "파워 중심의 공격과 높은 성장 여지", notable: "차세대 세르비아 유망주로 자주 언급되는 자원이다" },
  { slug: "jacob-fearnley", name: "제이컵 펀리", nameEn: "Jacob Fearnley", country: "Great Britain", countryKo: "영국", countryFlag: "🇬🇧", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "균형 잡힌 올라운드 전개", notable: "개발 속도가 빠르고 전술 이해도가 좋은 편이다" },
  { slug: "billy-harris", name: "빌리 해리스", nameEn: "Billy Harris", country: "Great Britain", countryKo: "영국", countryFlag: "🇬🇧", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "실전형 운영과 끈질긴 경쟁력", notable: "늦은 성장세로 투어에서 존재감을 넓혀가는 사례다" },
  { slug: "thiago-seyboth-wild", name: "치아구 세이보치 빌드", nameEn: "Thiago Seyboth Wild", country: "Brazil", countryKo: "브라질", countryFlag: "🇧🇷", gender: "male", plays: "Right-handed", backhand: "Two-handed", style: "폭발적인 샷 메이킹과 과감한 타이밍", notable: "리듬을 한 번에 바꿀 수 있는 공격성이 강한 선수다" },
  { slug: "joao-lucas-reis-da-silva", name: "주앙 루카스 헤이스 다 시우바", nameEn: "Joao Lucas Reis da Silva", country: "Brazil", countryKo: "브라질", countryFlag: "🇧🇷", gender: "male", plays: "Left-handed", backhand: "Two-handed", style: "왼손 각도와 현대적인 베이스라인 패턴", notable: "투어 레벨 적응력을 키워 가는 과정이 중요한 자원이다" },
  { slug: "nishesh-basavareddy", name: "니셰시 바사바레디", nameEn: "Nishesh Basavareddy", country: "USA", countryKo: "미국", countryFlag: "🇺🇸", gender: "male", plays: "Left-handed", backhand: "Two-handed", style: "정제된 볼 컨트롤과 발전 속도", notable: "주니어에서 프로로 이어지는 전환이 매끄러운 유망주다" },
  { slug: "clara-tauson", name: "클라라 타우손", nameEn: "Clara Tauson", country: "Denmark", countryKo: "덴마크", countryFlag: "🇩🇰", gender: "female", plays: "Right-handed", backhand: "Two-handed", style: "강한 볼 스피드와 직선적인 선공", notable: "WTA에서 파워 테니스의 존재감을 보여주는 선수다" },
  { slug: "lulu-sun", name: "룰루 선", nameEn: "Lulu Sun", country: "New Zealand", countryKo: "뉴질랜드", countryFlag: "🇳🇿", gender: "female", plays: "Left-handed", backhand: "Two-handed", style: "왼손 변형 패턴과 다양한 전개", notable: "코트별로 전술 폭을 조절하는 능력이 좋은 편이다" },
  { slug: "mccartney-kessler", name: "맥카트니 케슬러", nameEn: "McCartney Kessler", country: "USA", countryKo: "미국", countryFlag: "🇺🇸", gender: "female", plays: "Right-handed", backhand: "Two-handed", style: "콤팩트한 공격과 기본기 안정감", notable: "WTA 레벨에서 점진적으로 경쟁력을 키우는 흐름이 보인다" },
  { slug: "ashlyn-krueger", name: "애슐린 크루거", nameEn: "Ashlyn Krueger", country: "USA", countryKo: "미국", countryFlag: "🇺🇸", gender: "female", plays: "Right-handed", backhand: "Two-handed", style: "운동 능력과 파워가 살아 있는 현대적 공격형", notable: "미국 차세대 자원으로 꾸준히 거론되는 이름이다" },
  { slug: "peyton-stearns", name: "페이턴 스턴스", nameEn: "Peyton Stearns", country: "USA", countryKo: "미국", countryFlag: "🇺🇸", gender: "female", plays: "Right-handed", backhand: "Two-handed", style: "묵직한 랠리와 체력 기반 압박", notable: "긴 경기에서 경쟁력이 좋은 베이스라이너로 평가된다" },
  { slug: "alycia-parks", name: "알리시아 파크스", nameEn: "Alycia Parks", country: "USA", countryKo: "미국", countryFlag: "🇺🇸", gender: "female", plays: "Right-handed", backhand: "Two-handed", style: "강서브와 빠른 마무리", notable: "서비스 게임의 파괴력이 매우 눈에 띄는 유형이다" },
  { slug: "sonay-kartal", name: "소나이 카르탈", nameEn: "Sonay Kartal", country: "Great Britain", countryKo: "영국", countryFlag: "🇬🇧", gender: "female", plays: "Right-handed", backhand: "Two-handed", style: "규율 있는 랠리와 흔들림 적은 템포", notable: "투어 경험을 쌓으면서 경기 완성도를 끌어올리고 있다" },
  { slug: "olga-danilovic", name: "올가 다닐로비치", nameEn: "Olga Danilovic", country: "Serbia", countryKo: "세르비아", countryFlag: "🇷🇸", gender: "female", plays: "Left-handed", backhand: "Two-handed", style: "왼손 파워와 과감한 패턴 전환", notable: "한 번 흐름을 잡으면 상대를 몰아붙이는 능력이 좋다" },
  { slug: "yulia-putintseva", name: "율리야 푸틴체바", nameEn: "Yulia Putintseva", country: "Kazakhstan", countryKo: "카자흐스탄", countryFlag: "🇰🇿", gender: "female", plays: "Right-handed", backhand: "Two-handed", style: "집요한 수비와 까다로운 경기 리듬", notable: "상대 입장에서 매우 불편한 투쟁형 선수로 통한다" },
  { slug: "rebeka-masarova", name: "레베카 마사로바", nameEn: "Rebeka Masarova", country: "Spain", countryKo: "스페인", countryFlag: "🇪🇸", gender: "female", plays: "Right-handed", backhand: "Two-handed", style: "긴 리치와 묵직한 전개", notable: "피지컬 장점을 바탕으로 투어 적응력을 키우는 중이다" },
  { slug: "elena-avanesyan", name: "엘레나 아바네샨", nameEn: "Elena Avanesyan", country: "Armenia", countryKo: "아르메니아", countryFlag: "🇦🇲", gender: "female", plays: "Right-handed", backhand: "Two-handed", style: "끈질긴 랠리와 집중력 있는 수비", notable: "한 단계씩 성장 폭을 넓혀가는 투어형 선수다" },
  { slug: "moyuka-uchijima", name: "모유카 우치지마", nameEn: "Moyuka Uchijima", country: "Japan", countryKo: "일본", countryFlag: "🇯🇵", gender: "female", plays: "Right-handed", backhand: "Two-handed", style: "안정적인 템포와 실수 억제력", notable: "견고한 밸런스로 여러 대회에서 꾸준함을 보이는 타입이다" },
  { slug: "eva-lys", name: "에바 리스", nameEn: "Eva Lys", country: "Germany", countryKo: "독일", countryFlag: "🇩🇪", gender: "female", plays: "Right-handed", backhand: "Two-handed", style: "공격 전환 타이밍과 스트로크 완성도", notable: "젊은 세대 가운데 성장 흐름이 뚜렷한 선수다" },
  { slug: "robin-montgomery", name: "로빈 몽고메리", nameEn: "Robin Montgomery", country: "USA", countryKo: "미국", countryFlag: "🇺🇸", gender: "female", plays: "Left-handed", backhand: "Two-handed", style: "왼손 패턴과 전방 압박의 조합", notable: "미국의 차세대 왼손 유망주로 주목받는 이름이다" },
];

function escapeSingleQuote(value) {
  return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function hasBatchim(text) {
  const lastChar = text.trim().slice(-1);
  if (!lastChar) {
    return false;
  }

  const code = lastChar.charCodeAt(0);
  if (code < 0xac00 || code > 0xd7a3) {
    return false;
  }

  return (code - 0xac00) % 28 !== 0;
}

function subjectParticle(text) {
  return hasBatchim(text) ? "이" : "가";
}

function objectParticle(text) {
  return hasBatchim(text) ? "을" : "를";
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
    faq1: escapeSingleQuote(faq1),
    faq1Answer: escapeSingleQuote(faq1Answer),
    faq2: escapeSingleQuote(faq2),
    faq2Answer: escapeSingleQuote(faq2Answer),
  };

  return `    '${player.slug}': {
        name: '${values.name}', nameEn: '${values.nameEn}', country: '${values.country}', countryFlag: '${values.countryFlag}', image: '/images/players/placeholder-tennis-player.svg', gender: '${values.gender}', plays: '${values.plays}', backhand: '${values.backhand}',
        longBio: '${values.longBio}',
        detailedProfile: {
            oneLineSummary: '${values.oneLineSummary}',
            whyNotable: \`${values.whyNotable}\`,
            playStyle: \`${values.playStyle}\`,
            growthStory: \`${values.growthStory}\`,
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
