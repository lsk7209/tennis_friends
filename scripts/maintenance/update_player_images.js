const fs = require('fs');
const path = require('path');

const playersDir = path.join(__dirname, 'src', 'app', 'players');

function processDir(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            processDir(fullPath);
        } else if (file === 'page.tsx') {
            const playerSlug = path.basename(dir);
            if (playerSlug === 'players' || playerSlug === '[slug]') return;

            let content = fs.readFileSync(fullPath, 'utf8');

            // Check if Article has image and PlayerProfileCard doesn't have image
            const articleImageMatch = content.match(/<Article[\s\S]*?image="([^"]+)"/);
            const profileCardMatch = content.match(/<PlayerProfileCard/);
            const alreadyHasImage = content.match(/<PlayerProfileCard[\s\S]*?image=/);

            if (articleImageMatch && profileCardMatch && !alreadyHasImage) {
                const imagePath = articleImageMatch[1];
                console.log(`Updating ${playerSlug} with image ${imagePath}`);

                // Add image prop to PlayerProfileCard
                content = content.replace(
                    /(<PlayerProfileCard[\s\S]*?ranking=\{[^}]+\})/g,
                    `$1\n            image="${imagePath}"`
                );

                // Some files might have different formatting for ranking
                if (content.indexOf(`image="${imagePath}"`) === -1) {
                    content = content.replace(
                        /(<PlayerProfileCard[\s\S]*?ranking=\d+)/g,
                        `$1\n            image="${imagePath}"`
                    );
                }

                // If still not found, try a more generic replacement
                if (content.indexOf(`image="${imagePath}"`) === -1) {
                    content = content.replace(
                        /<PlayerProfileCard/g,
                        `<PlayerProfileCard\n            image="${imagePath}"`
                    );
                }

                fs.writeFileSync(fullPath, content);
            }
        }
    });
}

processDir(playersDir);
console.log('Done!');
