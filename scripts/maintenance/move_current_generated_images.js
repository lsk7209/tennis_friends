const fs = require('fs');
const path = require('path');

const artifactsDir = 'C:\\Users\\dlatj\\.gemini\\antigravity\\brain\\5c3947cb-befd-4516-bda7-cf2fae35b5be';
const targetDir = 'd:\\cursor\\web\\tennis_friends\\public\\images\\players';

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.readdir(artifactsDir, (err, files) => {
    if (err) {
        console.error('Error reading artifacts dir:', err);
        return;
    }

    files.forEach(file => {
        if (!file.endsWith('.png')) return;

        if (file.includes('_chibi_')) {
            // file is like: lorenzo_sonego_chibi_1772927858046.png
            const parts = file.split('_chibi_');
            const slug = parts[0].replace(/_/g, '-');
            const sourcePath = path.join(artifactsDir, file);
            const destPath = path.join(targetDir, `${slug}.png`);

            fs.copyFileSync(sourcePath, destPath);
            console.log(`Moved ${file} to ${slug}.png`);

            // Optionally delete the placeholder SVG
            const svgPath = path.join(targetDir, `${slug}.svg`);
            if (fs.existsSync(svgPath)) {
                fs.unlinkSync(svgPath);
            }
        }
    });
});
