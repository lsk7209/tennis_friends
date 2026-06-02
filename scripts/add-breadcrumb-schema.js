const fs = require('fs');
const path = require('path');

// 선수 페이지 디렉토리
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
    'arthur-rinderknech': '아르튀르 랑데르크네슈',
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
    'valentin-vacherot': '발랑탱 바슈로',
    'novak-djokovic': '노박 조코비치'
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

    if (!fs.existsSync(pagePath)) {
        console.log(`⏭️  ${playerSlug}: page.tsx 파일 없음`);
        skippedCount++;
        return;
    }

    let content = fs.readFileSync(pagePath, 'utf-8');

    // 이미 BreadcrumbSchema가 있는지 확인
    if (content.includes('BreadcrumbSchema')) {
        console.log(`✅ ${playerSlug}: 이미 적용됨`);
        skippedCount++;
        return;
    }

    // 1. import 문 추가
    // PersonSchema import 뒤에 추가하거나, 적절한 위치에 추가
    if (content.includes("import PersonSchema")) {
        content = content.replace(
            "import PersonSchema",
            "import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';\nimport PersonSchema"
        );
    } else {
        // PersonSchema가 없는 경우 (예외 처리)
        content = "import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';\n" + content;
    }

    // 2. 컴포넌트 추가
    // PersonSchema 컴포넌트 뒤에 추가
    const playerName = playerNameMap[playerSlug] || playerSlug;
    const siteUrl = 'https://www.tennisfrens.com';

    const breadcrumbComponent = `
      <BreadcrumbSchema
        items={[
          { name: '홈', item: '${siteUrl}' },
          { name: '선수', item: '${siteUrl}/players' },
          { name: '${playerName}', item: '${siteUrl}/players/${playerSlug}' },
        ]}
      />`;

    if (content.includes('<PersonSchema')) {
        // PersonSchema 닫는 태그 뒤에 추가
        content = content.replace(
            /\/>\s*<FAQSchema/,
            `/>\n${breadcrumbComponent}\n      <FAQSchema`
        );
    } else {
        // PersonSchema가 없는 경우 Article 내부에 추가 시도
        console.log(`⚠️ ${playerSlug}: PersonSchema 위치 찾지 못함, Article 내부에 추가 시도`);
        if (content.includes('<Article')) {
            content = content.replace(
                /<Article[^>]*>/,
                (match) => `${match}\n${breadcrumbComponent}`
            );
        } else {
            console.log(`❌ ${playerSlug}: Article 컴포넌트도 찾지 못함. 스킵.`);
            skippedCount++;
            return;
        }
    }

    fs.writeFileSync(pagePath, content, 'utf-8');
    console.log(`🍞 ${playerSlug}: BreadcrumbSchema 적용 완료`);
    updatedCount++;
});

console.log(`\n📊 작업 완료!`);
console.log(`✅ 업데이트: ${updatedCount}개`);
console.log(`⏭️  스킵: ${skippedCount}개`);
