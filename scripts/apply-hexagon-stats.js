const fs = require('fs');
const path = require('path');

// 선수 페이지 디렉토리 (scripts에서 실행하므로 ../src/app/players)
const playersDir = path.join(__dirname, '..', 'src', 'app', 'players');

// 선수 이름 매핑 (slug → 한글 이름)
const playerNameMap = {
    'carlos-alcaraz': '카를로스 알카라스',
    'jannik-sinner': '야닉 시너',
    'daniil-medvedev': '다닐 메드베데프',
    'alexander-zverev': '알렉산더 즈베레프',
    'andrey-rublev': '안드레이 루블레프',
    'stefanos-tsitsipas': '스테파노스 치치파스',
    'casper-ruud': '카스페르 루드',
    'alex-de-minaur': '알렉스 드 미노',
    'taylor-fritz': '테일러 프리츠',
    'hubert-hurkacz': '후베르트 후르카츠',
    'holger-rune': '홀거 루네',
    'grigor-dimitrov': '그리고르 디미트로프',
    'ben-shelton': '벤 쉘튼',
    'tommy-paul': '토미 폴',
    'frances-tiafoe': '프란시스 티아포',
    'ugo-humbert': '우고 움베르',
    'sebastian-baez': '세바스티안 바에즈',
    'lorenzo-musetti': '로렌조 무세티',
    'sebastian-korda': '세바스티안 코르다',
    'cameron-norrie': '카메론 노리',
    'tallon-griekspoor': '탈론 크리에크스푸르',
    'nicolas-jarry': '니콜라스 자리',
    'alejandro-davidovich-fokina': '알레한드로 다비도비치 포키나',
    'alexander-bublik': '알렉산더 부블리크',
    'alex-michelsen': '알렉스 미첼슨',
    'arthur-landercknech': '아르튀르 랑데르크네슈',
    'brandon-nakashima': '브랜든 나카시마',
    'corentin-moutet': '코랑탱 무테',
    'denis-shapovalov': '데니스 샤포발로프',
    'felix-auger-aliassime': '펠릭스 오제 알리아심',
    'flavio-cobolli': '플라비오 코볼리',
    'francisco-cerundolo': '프란시스코 세룬돌로',
    'jack-draper': '잭 드레이퍼',
    'jakub-mensik': '야쿠프 멘시크',
    'jaume-munar': '자우메 무나르',
    'jiri-lehecka': '이리 레헤츠카',
    'joao-fonseca': '주앙 폰세카',
    'karen-khachanov': '카렌 하차노프',
    'linner-tien': '리너 티엔',
    'luciano-darderi': '루치아노 다르데리',
    'tomas-machac': '토마스 마하츠',
    'valentin-vacherot': '발랑탱 바슈로'
};

// 선수 디렉토리 읽기
const playerDirs = fs.readdirSync(playersDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

let updatedCount = 0;
let skippedCount = 0;

console.log(`총 ${playerDirs.length}개의 선수 디렉토리 발견\n`);

playerDirs.forEach(playerSlug => {
    const pagePath = path.join(playersDir, playerSlug, 'page.tsx');

    // page.tsx 파일이 존재하는지 확인
    if (!fs.existsSync(pagePath)) {
        console.log(`⏭️  ${playerSlug}: page.tsx 파일 없음`);
        skippedCount++;
        return;
    }

    let content = fs.readFileSync(pagePath, 'utf-8');

    // 이미 PlayerHexagonStats를 사용하는지 확인
    if (content.includes('PlayerHexagonStats')) {
        console.log(`✅ ${playerSlug}: 이미 적용됨`);
        skippedCount++;
        return;
    }

    // PlayerAttributes를 사용하지 않으면 스킵
    if (!content.includes('PlayerAttributes')) {
        console.log(`⏭️  ${playerSlug}: PlayerAttributes 사용 안함`);
        skippedCount++;
        return;
    }

    // 1. import 문 변경
    content = content.replace(
        /import PlayerAttributes from ['"]@\/components\/players\/PlayerAttributes['"]/,
        "import PlayerHexagonStats from '@/components/players/PlayerHexagonStats'"
    );

    // 2. 컴포넌트 호출 변경 (playerName prop 추가)
    const playerName = playerNameMap[playerSlug] || playerSlug;

    // <PlayerAttributes 를 <PlayerHexagonStats 로 변경하고 playerName prop 추가
    content = content.replace(
        /<PlayerAttributes\s+attributes=\{/,
        `<PlayerHexagonStats\n              playerName="${playerName}"\n              attributes={`
    );

    // 파일 저장
    fs.writeFileSync(pagePath, content, 'utf-8');
    console.log(`🎮 ${playerSlug}: Hexagon Stats 적용 완료`);
    updatedCount++;
});

console.log(`\n📊 작업 완료!`);
console.log(`✅ 업데이트: ${updatedCount}개`);
console.log(`⏭️  스킵: ${skippedCount}개`);
console.log(`📝 총: ${playerDirs.length}개`);
