
const fs = require('fs');
const path = require('path');

const artifactsDir = 'C:\\Users\\dlatj\\.gemini\\antigravity\\brain\\a16c338a-ae86-4f4e-84cd-3f243686da5b';
const targetDir = 'd:\\cursor\\web\\tennis_friend\\tennis_friends\\public\\images\\players';

// Mapping from ImageName prefix to Slug
const imageMapping = {
    'leylah_fernandez_chibi': 'leylah-fernandez',
    'dominic_thiem_chibi': 'dominic-thiem',
    'nick_kyrgios_chibi': 'nick-kyrgios',
    'simona_halep_chibi': 'simona-halep',
    'ashleigh_barty_chibi': 'ashleigh-barty',
    'ashleigh_barty_chibi_retry': 'ashleigh-barty',
    'andy_roddick_chibi': 'andy-roddick',
    'lleyton_hewitt_chibi': 'lleyton-hewitt',
    'kim_clijsters_chibi': 'kim-clijsters',
    'martina_hingis_chibi': 'martina-hingis'
};

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

        for (const [prefix, slug] of Object.entries(imageMapping)) {
            if (file.startsWith(prefix)) {
                const sourcePath = path.join(artifactsDir, file);
                const destPath = path.join(targetDir, `${slug}.png`);

                fs.copyFileSync(sourcePath, destPath);
                console.log(`Moved ${file} to ${slug}.png`);
            }
        }
    });
});
