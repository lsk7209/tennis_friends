
const fs = require('fs');
const path = require('path');

const playersFilePath = path.join(__dirname, 'src/data/players.ts');
const backupPath = path.join(__dirname, 'src/data/players.ts.bak');

// Create backup
fs.copyFileSync(playersFilePath, backupPath);

const missingFaqPlayers = [
    'rafael-nadal', 'andy-murray', 'stan-wawrinka', 'kei-nishikori', 'soonwoo-kwon',
    'gael-monfils', 'matteo-berrettini', 'felix-auger-aliassime', 'denis-shapovalov',
    'alexander-bublik', 'jack-draper', 'arthur-fils', 'sebastian-korda', 'iga-swiatek',
    'aryna-sabalenka', 'coco-gauff', 'elena-rybakina', 'jessica-pegula', 'ons-jabeur',
    'qinwen-zheng', 'maria-sakkari', 'jelena-ostapenko', 'naomi-osaka', 'madison-keys',
    'daria-kasatkina', 'emma-raducanu', 'leylah-fernandez', 'mirra-andreeva'
];

const genericFaqs = (name) => `
      faq: [
        {
          question: "${name} 선수의 플레이 스타일은 어떤가요?",
          answer: "${name} 선수는 독특하고 강력한 플레이 스타일을 가지고 있으며, 팬들에게 깊은 인상을 주는 경기를 펼칩니다."
        },
        {
          question: "${name} 선수의 주요 성과는 무엇인가요?",
          answer: "다양한 투어 대회에서 우수한 성적을 거두었으며, 꾸준히 상위 랭킹을 유지하고 있는 톱 클래스 선수입니다."
        },
        {
          question: "${name} 선수는 어떤 국적의 선수인가요?",
          answer: "국제 무대에서 자국을 대표하여 활약하고 있는 자랑스러운 테니스 선수입니다."
        },
        {
          question: "${name} 선수에 대한 재미있는 사실이 있나요?",
          answer: "경기장 밖에서도 팬들과 적극적으로 소통하며, 테니스 외에도 다양한 관심사를 가지고 있는 매력적인 선수입니다."
        }
      ],`;

let content = fs.readFileSync(playersFilePath, 'utf8');

missingFaqPlayers.forEach(slug => {
    // Regex to find the player block and inside it, detailedProfile
    // We look for 'slug': { ... detailedProfile: {
    // And insert 'faq: [...],' after detailedProfile: {

    // Construct regex to match the start of the player block up to detailedProfile
    const regex = new RegExp(`('${slug}':\\s*\\{[\\s\\S]*?detailedProfile:\\s*\\{)`, 'm');

    if (regex.test(content)) {
        // Check if faq already exists to avoid duplication (simple check)
        const playerBlockRegex = new RegExp(`'${slug}':\\s*\\{[\\s\\S]*?\\},(\\s*'[a-z]|$|\\})`, 'm'); // approximate end of player block
        const match = content.match(playerBlockRegex);

        let hasFaq = false;
        if (match) {
            hasFaq = match[0].includes('faq: [');
        }

        if (!hasFaq) {
            const nameRegex = new RegExp(`'${slug}':\\s*\\{[\\s\\S]*?name:\\s*'([^']*)'`, 'm');
            const nameMatch = content.match(nameRegex);
            const playerName = nameMatch ? nameMatch[1] : slug;

            content = content.replace(regex, `$1${genericFaqs(playerName)}`);
            console.log(`Added FAQ for ${slug}`);
        } else {
            console.log(`Skipping ${slug}, FAQ already exists.`);
        }
    } else {
        console.log(`Could not find detailedProfile for ${slug}`);
    }
});

fs.writeFileSync(playersFilePath, content, 'utf8');
console.log('Finished updating FAQs.');
