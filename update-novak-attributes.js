const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/players/novak-djokovic/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// The target string might have subtle whitespace differences.
// I'll try to match just the H2 tag and insert after it.

const h2Target = `<h2 id="what-type-of-player">이 선수는 어떤 유형인가?</h2>`;
const h2Replacement = `<h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
              <Target className="w-6 h-6 text-red-500" />
              이 선수는 어떤 유형인가?
            </h2>`;

if (content.includes(h2Target)) {
    content = content.replace(h2Target, h2Replacement);
}

// Now find the paragraph ending with "최상위권이다.</p>" and append the attributes
const pTarget = `서브, 리턴, 포핸드, 백핸드, 발리, 멘탈까지 모든 항목이 최상위권이다.</p>`;
const pReplacement = `서브, 리턴, 포핸드, 백핸드, 발리, 멘탈까지 모든 항목이 최상위권이다.</p>

            <PlayerAttributes 
              attributes={[
                { name: '리턴 (Return)', score: 10, description: '역대 최고 수준. 서브 게임을 브레이크하는 능력은 타의 추종을 불허함.' },
                { name: '멘탈 (Mental)', score: 10, description: '위기 상황에서 더 강해지는 강철 멘탈. 타이브레이크 승률 역대 1위.' },
                { name: '백핸드 (Backhand)', score: 9.8, description: '안정성과 공격력을 겸비한 투핸드 백핸드. 다운더라인은 시그니처 무기.' },
                { name: '체력/유연성', score: 9.5, description: '고무인간이라 불리는 유연성으로 불가능한 공을 받아냄.' },
                { name: '서브 (Serve)', score: 9.0, description: '과거 약점이었으나 현재는 정교한 코스 공략으로 강력한 무기가 됨.' },
              ]}
            />`;

if (content.includes(pTarget)) {
    content = content.replace(pTarget, pReplacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated PlayerAttributes (flexible match).');
} else {
    console.log('Paragraph target not found.');
}
