const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, 'src', 'data', 'players.ts');
const fileContent = fs.readFileSync(playersPath, 'utf8');

const targetPlayers = [
    // All batches combined
    'fabian-marozsan', 'sumit-nagal', 'taro-daniel', 'roberto-bautista-agut', 'marton-fucsovics',
    'borna-coric', 'felix-auger-aliassime', 'denis-shapovalov', 'alexander-bublik', 'jack-draper',
    'qinwen-zheng', 'marketa-vondrousova', 'maria-sakkari', 'jelena-ostapenko', 'naomi-osaka',
    'caroline-wozniacki', 'angelique-kerber', 'elina-svitolina', 'victoria-azarenka', 'karolina-pliskova',
    'sloane-stephens', 'madison-keys', 'daria-kasatkina', 'beatriz-haddad-maia', 'danielle-collins',
    'barbora-krejcikova', 'petra-kvitova', 'belinda-bencic', 'bianca-andreescu', 'emma-raducanu',
    'mirra-andreeva', 'linda-noskova', 'marta-kostyuk', 'shang-juncheng', 'duje-ajdukovic',
    'fabio-fognini', 'reilly-opelka', 'marin-cilic', 'milos-raonic', 'richard-gasquet',
    'diego-schwartzman', 'david-goffin', 'thanasi-kokkinakis', 'hugo-gaston', 'luca-nardi', 'dino-prizmic', 'coleman-wong',
    'dayana-yastremska', 'anna-kalinskaya', 'jasmine-paolini', 'sorana-cirstea',
    'anastasia-potapova', 'ekaterina-alexandrova', 'liudmila-samsonova',
    'veronika-kudermetova', 'elise-mertens', 'donna-vekic', 'marie-bouzkova', 'katerina-siniakova', 'caroline-garcia',
    'anhelina-kalinina', 'lesia-tsurenko', 'magda-linette', 'sofia-kenin', 'paula-badosa',
    'karolina-muchova', 'ajla-tomljanovic', 'camila-giorgi', 'wang-xinyu', 'wang-xiyu',
    'zhu-lin', 'yuan-yue', 'diane-parry', 'clara-burel', 'varvara-gracheva',
    'tatjana-maria', 'laura-siegemund', 'hong-seong-chan', 'garbine-muguruza'
];

console.log('--- CONTENT QUALITY REPORT ---');
targetPlayers.forEach(slug => {
    const keyIndex = fileContent.indexOf(`'${slug}':`);
    if (keyIndex === -1) {
        return;
    }

    // Extract the block for this player
    // This is simple extraction: from key to next key or reasonable length
    const chunk = fileContent.substring(keyIndex, keyIndex + 3000);

    // Check longBio length
    const longBioMatch = chunk.match(/longBio:\s*(['"`])([\s\S]*?)\1/);
    if (longBioMatch) {
        const bio = longBioMatch[2];
        if (bio.length < 50) {
            console.log(`[SHORT BIO] ${slug} (${bio.length} chars)`);
        } else {
            // console.log(`[OK] ${slug}`);
        }
    } else {
        console.log(`[NO BIO] ${slug}`);
    }
});
