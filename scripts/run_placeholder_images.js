const fs = require('fs');
const players = ['lorenzo-sonego', 'marcos-giron', 'alejandro-tabilo', 'tomas-martin-etcheverry', 'pedro-martinez', 'sebastian-ofner', 'alexandre-muller', 'francisco-comesana', 'camilo-ugo-carabelli', 'zizou-bergs', 'hamad-medjedovic', 'jacob-fearnley', 'billy-harris', 'thiago-seyboth-wild', 'joao-lucas-reis-da-silva', 'nishesh-basavareddy', 'clara-tauson', 'lulu-sun', 'mccartney-kessler', 'ashlyn-krueger', 'peyton-stearns', 'alycia-parks', 'sonay-kartal', 'olga-danilovic', 'yulia-putintseva', 'rebeka-masarova', 'elena-avanesyan', 'moyuka-uchijima', 'eva-lys', 'robin-montgomery'];

const templatePath = 'public/images/players/placeholder-tennis-player.svg';
let template = '';
if (fs.existsSync(templatePath)) {
    template = fs.readFileSync(templatePath, 'utf8');
} else {
    template = `<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f1f5f9"/>
  <circle cx="400" cy="400" r="200" fill="#cbd5e1"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="#64748b" text-anchor="middle" dominant-baseline="middle">?</text>
</svg>`;
}

players.forEach(p => {
    // 1. Create player page directory and page.tsx if they don't exist
    const pDir = `src/app/players/${p}`;
    if (!fs.existsSync(pDir)) {
        fs.mkdirSync(pDir, {recursive: true});
        const pageContent = `import PlayerPageTemplate from '@/templates/players/PlayerPageTemplate';

export default function Page() {
  return <PlayerPageTemplate slug="${p}" />;
}
`;
        fs.writeFileSync(`${pDir}/page.tsx`, pageContent);
        console.log(`Created page for ${p}`);
    }

    // 2. Create placeholder SVG image if no image exists
    const pngPath = `public/images/players/${p}.png`;
    const svgPath = `public/images/players/${p}.svg`;
    
    if (!fs.existsSync(pngPath) && !fs.existsSync(svgPath)) {
        // Use the first two letters of the player's name, or initials
        const parts = p.split('-');
        let initials = '?';
        if (parts.length >= 2) {
            initials = (parts[0][0] + parts[parts.length-1][0]).toUpperCase();
        } else if (p.length >= 2) {
            initials = p.substring(0, 2).toUpperCase();
        }
        
        const customSvg = template.replace(
            /<text[^>]*>.*?<\/text>/s, 
            `<text x="50%" y="50%" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="#64748b" text-anchor="middle" dominant-baseline="middle">${initials}</text>`
        );
        fs.writeFileSync(svgPath, customSvg);
        console.log(`Created placeholder svg for ${p}`);
    }
});
console.log('Finished processing players');
