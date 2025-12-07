import { PlayerData } from '@/types/player';

export const PLAYERS_DB: Record<string, PlayerData> = {
    // --- Existing Male Players (53) ---
    'carlos-alcaraz': {
        name: '카를로스 알카라스', nameEn: 'Carlos Alcaraz', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/carlos-alcaraz.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '카를로스 알카라스는 스페인의 테니스 신동으로, 폭발적인 스피드와 강력한 포핸드로 코트를 지배합니다. 어린 나이에 그랜드슬램을 제패하며 차세대 테니스 황제로 불립니다.'
    },
    'jannik-sinner': { name: '야닉 시너', nameEn: 'Jannik Sinner', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/jannik-sinner.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'novak-djokovic': { name: '노박 조코비치', nameEn: 'Novak Djokovic', country: 'Serbia', countryFlag: '🇷🇸', image: '/images/players/novak-djokovic.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'daniil-medvedev': { name: '다닐 메드베데프', nameEn: 'Daniil Medvedev', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/daniil-medvedev.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'alexander-zverev': { name: '알렉산더 즈베레프', nameEn: 'Alexander Zverev', country: 'Germany', countryFlag: '🇩🇪', image: '/images/players/alexander-zverev.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'andrey-rublev': { name: '안드레이 루블레프', nameEn: 'Andrey Rublev', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/andrey-rublev.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'stefanos-tsitsipas': { name: '스테파노스 치치파스', nameEn: 'Stefanos Tsitsipas', country: 'Greece', countryFlag: '🇬🇷', image: '/images/players/stefanos-tsitsipas.png', gender: 'male', plays: 'Right-handed', backhand: 'One-handed' },
    'casper-ruud': { name: '카스페르 루드', nameEn: 'Casper Ruud', country: 'Norway', countryFlag: '🇳🇴', image: '/images/players/casper-ruud.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'alex-de-minaur': { name: '알렉스 드 미노', nameEn: 'Alex de Minaur', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/alex-de-minaur.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'taylor-fritz': { name: '테일러 프리츠', nameEn: 'Taylor Fritz', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/taylor-fritz.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'hubert-hurkacz': { name: '후베르트 후르카츠', nameEn: 'Hubert Hurkacz', country: 'Poland', countryFlag: '🇵🇱', image: '/images/players/hubert-hurkacz.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'holger-rune': { name: '홀거 루네', nameEn: 'Holger Rune', country: 'Denmark', countryFlag: '🇩🇰', image: '/images/players/holger-rune.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'grigor-dimitrov': { name: '그리고르 디미트로프', nameEn: 'Grigor Dimitrov', country: 'Bulgaria', countryFlag: '🇧🇬', image: '/images/players/grigor-dimitrov.png', gender: 'male', plays: 'Right-handed', backhand: 'One-handed' },
    'ben-shelton': { name: '벤 쉘튼', nameEn: 'Ben Shelton', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/ben-shelton.png', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed' },
    'tommy-paul': { name: '토미 폴', nameEn: 'Tommy Paul', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/tommy-paul.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'frances-tiafoe': { name: '프란시스 티아포', nameEn: 'Frances Tiafoe', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/frances-tiafoe.png', gender: 'male' },
    'ugo-humbert': { name: '우고 움베르', nameEn: 'Ugo Humbert', country: 'France', countryFlag: '🇫🇷', image: '/images/players/ugo-humbert.png', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed' },
    'sebastian-baez': { name: '세바스티안 바에즈', nameEn: 'Sebastian Baez', country: 'Argentina', countryFlag: '🇦🇷', image: '/images/players/sebastian-baez.png', gender: 'male' },
    'lorenzo-musetti': { name: '로렌조 무세티', nameEn: 'Lorenzo Musetti', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/lorenzo-musetti.png', gender: 'male', plays: 'Right-handed', backhand: 'One-handed' },
    'sebastian-korda': { name: '세바스티안 코르다', nameEn: 'Sebastian Korda', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/sebastian-korda.png', gender: 'male' },
    'cameron-norrie': { name: '카메론 노리', nameEn: 'Cameron Norrie', country: 'United Kingdom', countryFlag: '🇬🇧', image: '/images/players/cameron-norrie.png', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed' },
    'tallon-griekspoor': { name: '탈론 크리에크스푸르', nameEn: 'Tallon Griekspoor', country: 'Netherlands', countryFlag: '🇳🇱', image: '/images/players/tallon-griekspoor.png', gender: 'male' },
    'nicolas-jarry': { name: '니콜라스 자리', nameEn: 'Nicolas Jarry', country: 'Chile', countryFlag: '🇨🇱', image: '/images/players/nicolas-jarry.png', gender: 'male' },
    'alejandro-davidovich-fokina': { name: '알레한드로 다비도비치 포키나', nameEn: 'Alejandro Davidovich Fokina', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/alejandro-davidovich-fokina.png', gender: 'male' },
    'alexander-bublik': { name: '알렉산더 부블리크', nameEn: 'Alexander Bublik', country: 'Kazakhstan', countryFlag: '🇰🇿', image: '/images/players/alexander-bublik.png', gender: 'male' },
    'alex-michelsen': { name: '알렉스 미첼슨', nameEn: 'Alex Michelsen', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/alex-michelsen.png', gender: 'male' },
    'arthur-landercknech': { name: '아르튀르 랑데르크네슈', nameEn: 'Arthur Landercknech', country: 'France', countryFlag: '🇫🇷', image: '/images/players/arthur-landercknech.png', gender: 'male' },
    'brandon-nakashima': { name: '브랜든 나카시마', nameEn: 'Brandon Nakashima', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/brandon-nakashima.png', gender: 'male' },
    'corentin-moutet': { name: '코랑탱 무테', nameEn: 'Corentin Moutet', country: 'France', countryFlag: '🇫🇷', image: '/images/players/corentin-moutet.png', gender: 'male' },
    'denis-shapovalov': { name: '데니스 샤포발로프', nameEn: 'Denis Shapovalov', country: 'Canada', countryFlag: '🇨🇦', image: '/images/players/denis-shapovalov.png', gender: 'male', plays: 'Left-handed', backhand: 'One-handed' },
    'felix-auger-aliassime': { name: '펠릭스 오제 알리아심', nameEn: 'Felix Auger-Aliassime', country: 'Canada', countryFlag: '🇨🇦', image: '/images/players/felix-auger-aliassime.png', gender: 'male' },
    'flavio-cobolli': { name: '플라비오 코볼리', nameEn: 'Flavio Cobolli', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/flavio-cobolli.png', gender: 'male' },
    'francisco-cerundolo': { name: '프란시스코 세룬돌로', nameEn: 'Francisco Cerundolo', country: 'Argentina', countryFlag: '🇦🇷', image: '/images/players/francisco-cerundolo.png', gender: 'male' },
    'jack-draper': { name: '잭 드레이퍼', nameEn: 'Jack Draper', country: 'United Kingdom', countryFlag: '🇬🇧', image: '/images/players/jack-draper.png', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed' },
    'jakub-mensik': { name: '야쿠프 멘시크', nameEn: 'Jakub Mensik', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/jakub-mensik.png', gender: 'male' },
    'jaume-munar': { name: '자우메 무나르', nameEn: 'Jaume Munar', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/jaume-munar.png', gender: 'male' },
    'jiri-lehecka': { name: '이리 레헤츠카', nameEn: 'Jiri Lehecka', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/jiri-lehecka.png', gender: 'male' },
    'joao-fonseca': { name: '주앙 폰세카', nameEn: 'Joao Fonseca', country: 'Brazil', countryFlag: '🇧🇷', image: '/images/players/joao-fonseca.png', gender: 'male' },
    'karen-khachanov': { name: '카렌 하차노프', nameEn: 'Karen Khachanov', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/karen-khachanov.png', gender: 'male' },
    'linner-tien': { name: '리너 티엔', nameEn: 'Learner Tien', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/linner-tien.png', gender: 'male' },
    'luciano-darderi': { name: '루치아노 다르데리', nameEn: 'Luciano Darderi', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/luciano-darderi.png', gender: 'male' },
    'tomas-machac': { name: '토마스 마하츠', nameEn: 'Tomas Machac', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/tomas-machac.png', gender: 'male' },
    'valentin-vacherot': { name: '발랑탱 바슈로', nameEn: 'Valentin Vacherot', country: 'Monaco', countryFlag: '🇲🇨', image: '/images/players/valentin-vacherot.png', gender: 'male' },
    'matteo-berrettini': { name: '마테오 베레티니', nameEn: 'Matteo Berrettini', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/matteo-berrettini.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'gael-monfils': { name: '가엘 몽피스', nameEn: 'Gael Monfils', country: 'France', countryFlag: '🇫🇷', image: '/images/players/gael-monfils.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'arthur-fils': { name: '아르튀르 필스', nameEn: 'Arthur Fils', country: 'France', countryFlag: '🇫🇷', image: '/images/players/arthur-fils.png', gender: 'male' },
    'alexei-popyrin': { name: '알렉세이 포피린', nameEn: 'Alexei Popyrin', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/alexei-popyrin.png', gender: 'male' },
    'jan-lennard-struff': { name: '얀-레나드 스트루프', nameEn: 'Jan-Lennard Struff', country: 'Germany', countryFlag: '🇩🇪', image: '/images/players/jan-lennard-struff.svg', gender: 'male' },
    'adrian-mannarino': { name: '아드리안 만나리노', nameEn: 'Adrian Mannarino', country: 'France', countryFlag: '🇫🇷', image: '/images/players/adrian-mannarino.svg', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed' },
    'matteo-arnaldi': { name: '마테오 아르날디', nameEn: 'Matteo Arnaldi', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/matteo-arnaldi.svg', gender: 'male' },
    'jordan-thompson': { name: '조던 톰슨', nameEn: 'Jordan Thompson', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/jordan-thompson.svg', gender: 'male' },
    'zhizhen-zhang': { name: '장지전', nameEn: 'Zhizhen Zhang', country: 'China', countryFlag: '🇨🇳', image: '/images/players/zhizhen-zhang.svg', gender: 'male' },
    'giovanni-mpetshi-perricard': { name: '지오반니 음페치 페리카르', nameEn: 'Giovanni Mpetshi Perricard', country: 'France', countryFlag: '🇫🇷', image: '/images/players/giovanni-mpetshi-perricard.svg', gender: 'male' },

    // --- New Male Players (30) ---
    'rafael-nadal': {
        name: '라파엘 나달', nameEn: 'Rafael Nadal', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/rafael-nadal.png', gender: 'male',
        plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '클레이 황제, 라파엘 나달. 흙신이라는 별명답게 롤랑가로스 최다 우승 기록을 보유하고 있으며, 강력한 탑스핀 포핸드와 불굴의 정신력으로 테니스 역사를 새로 썼습니다.'
    },
    'andy-murray': {
        name: '앤디 머레이', nameEn: 'Andy Murray', country: 'United Kingdom', countryFlag: '🇬🇧', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '영국의 테니스 영웅, 앤디 머레이. 놀라운 수비력과 전술적인 플레이로 BIG 4의 일원으로 활약했으며, 윔블던 우승으로 영국 테니스의 한을 풀었습니다.'
    },
    'stan-wawrinka': {
        name: '스탄 바브린카', nameEn: 'Stan Wawrinka', country: 'Switzerland', countryFlag: '🇨🇭', gender: 'male',
        plays: 'Right-handed', backhand: 'One-handed',
        longBio: 'Stan the Man. 테니스 역사상 가장 강력한 원핸드 백핸드를 가진 선수 중 한 명으로, 중요한 순간에 빛을 발하는 클러치 능력으로 3개의 그랜드슬램을 따냈습니다.'
    },
    'kei-nishikori': {
        name: '니시코리 케이', nameEn: 'Kei Nishikori', country: 'Japan', countryFlag: '🇯🇵', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '아시아 남자 테니스의 자존심. 빠른 발과 뛰어난 리턴 능력, 그리고 시그니처인 "Air-K" 점프 샷으로 유명합니다.'
    },
    'soonwoo-kwon': {
        name: '권순우', nameEn: 'Soonwoo Kwon', country: 'Korea', countryFlag: '🇰🇷', image: '/images/players/soonwoo-kwon.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '대한민국 테니스의 간판 스타. 빠른 스피드와 공격적인 포핸드를 주무기로 ATP 투어 우승을 차지하며 한국 테니스의 위상을 높였습니다.'
    },
    'christopher-eubanks': { name: '크리스토퍼 유뱅크스', nameEn: 'Christopher Eubanks', country: 'United States', countryFlag: '🇺🇸', gender: 'male', plays: 'Right-handed', backhand: 'One-handed' },
    'emil-ruusuvuori': { name: '에밀 루수부오리', nameEn: 'Emil Ruusuvuori', country: 'Finland', countryFlag: '🇫🇮', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'miomir-kecmanovic': { name: '미오미르 케크마노비치', nameEn: 'Miomir Kecmanovic', country: 'Serbia', countryFlag: '🇷🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'roman-safiullin': { name: '로만 사피울린', nameEn: 'Roman Safiullin', country: 'Russia', countryFlag: '🇷🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'laslo-djere': { name: '라슬로 제레', nameEn: 'Laslo Djere', country: 'Serbia', countryFlag: '🇷🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'daniel-evans': { name: '다니엘 에반스', nameEn: 'Daniel Evans', country: 'United Kingdom', countryFlag: '🇬🇧', gender: 'male', plays: 'Right-handed', backhand: 'One-handed' },
    'roberto-carballes-baena': { name: '로베르토 카르바예스 바에나', nameEn: 'Roberto Carballes Baena', country: 'Spain', countryFlag: '🇪🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'nuno-borges': { name: '누노 보르헤스', nameEn: 'Nuno Borges', country: 'Portugal', countryFlag: '🇵🇹', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'mackenzie-mcdonald': { name: '매켄지 맥도날드', nameEn: 'Mackenzie McDonald', country: 'United States', countryFlag: '🇺🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'max-purcell': { name: '맥스 퍼셀', nameEn: 'Max Purcell', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'dominik-koepfer': { name: '도미닉 쾨퍼', nameEn: 'Dominik Koepfer', country: 'Germany', countryFlag: '🇩🇪', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed' },
    'aleksandar-vukic': { name: '알렉산더 부키치', nameEn: 'Aleksandar Vukic', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'yoshihito-nishioka': { name: '요시히토 니시오카', nameEn: 'Yoshihito Nishioka', country: 'Japan', countryFlag: '🇯🇵', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed' },
    'alexander-shevchenko': { name: '알렉산더 셰브첸코', nameEn: 'Alexander Shevchenko', country: 'Kazakhstan', countryFlag: '🇰🇿', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'rinky-hijikata': { name: '린키 히지카타', nameEn: 'Rinky Hijikata', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'botic-van-de-zandschulp': { name: '보틱 반 더 잔츠슐프', nameEn: 'Botic van de Zandschulp', country: 'Netherlands', countryFlag: '🇳🇱', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'yannick-hanfmann': { name: '야닉 한프만', nameEn: 'Yannick Hanfmann', country: 'Germany', countryFlag: '🇩🇪', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'pavel-kotov': { name: '파벨 코토프', nameEn: 'Pavel Kotov', country: 'Russia', countryFlag: '🇷🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'aslan-karatsev': { name: '아슬란 카라체프', nameEn: 'Aslan Karatsev', country: 'Russia', countryFlag: '🇷🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'fabian-marozsan': { name: '파비안 마로잔', nameEn: 'Fabian Marozsan', country: 'Hungary', countryFlag: '🇭🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'sumit-nagal': { name: '수밋 나갈', nameEn: 'Sumit Nagal', country: 'India', countryFlag: '🇮🇳', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'taro-daniel': { name: '타로 다니엘', nameEn: 'Taro Daniel', country: 'Japan', countryFlag: '🇯🇵', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'roberto-bautista-agut': { name: '로베르토 바우티스타 아굿', nameEn: 'Roberto Bautista Agut', country: 'Spain', countryFlag: '🇪🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'marton-fucsovics': { name: '마르톤 푸초비치', nameEn: 'Marton Fucsovics', country: 'Hungary', countryFlag: '🇭🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'borna-coric': { name: '보르나 초리치', nameEn: 'Borna Coric', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },

    // --- New Female Players (30) ---
    'iga-swiatek': {
        name: '이가 시비옹테크', nameEn: 'Iga Swiatek', country: 'Poland', countryFlag: '🇵🇱', image: '/images/players/iga-swiatek.png', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '현 여자 테니스 세계 랭킹 1위. 압도적인 기량과 강력한 멘탈로 "Iga\'s Bakery"라는 별명처럼 상대를 압도하는 경기를 펼칩니다. 클레이 코트에서 특히 강합니다.'
    },
    'aryna-sabalenka': {
        name: '아리나 사발렌카', nameEn: 'Aryna Sabalenka', country: 'Belarus', countryFlag: '🇧🇾', image: '/images/players/aryna-sabalenka.png', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 파워 테니스의 대명사. 폭발적인 서브와 포핸드로 공격적인 플레이를 구사하며 하드 코트 그랜드슬램에서 눈부신 성과를 거두었습니다.'
    },
    'coco-gauff': {
        name: '코코 가우프', nameEn: 'Coco Gauff', country: 'United States', countryFlag: '🇺🇸', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '미국의 천재 테니스 소녀에서 슈퍼스타로. 10대 시절부터 세계적인 주목을 받았으며, 놀라운 운동신경과 강력한 백핸드를 보유하고 있습니다.'
    },
    'elena-rybakina': {
        name: '엘레나 리바키나', nameEn: 'Elena Rybakina', country: 'Kazakhstan', countryFlag: '🇰🇿', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '차가운 평정심을 가진 "아이스 퀸". 강력하고 정교한 서브와 플랫한 스트로크로 윔블던 우승을 차지한 강타자입니다.'
    },
    'jessica-pegula': {
        name: '제시카 페굴라', nameEn: 'Jessica Pegula', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/jessica-pegula.png', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '꾸준함의 대명사. 화려하진 않지만 탄탄한 기본기와 영리한 경기 운영으로 투어 상위권을 꾸준히 유지하는 탑 플레이어입니다. 한국계 어머니를 둔 것으로도 유명합니다.'
    },
    'ons-jabeur': {
        name: '온스 자베르', nameEn: 'Ons Jabeur', country: 'Tunisia', countryFlag: '🇹🇳', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 마법사. 예측 불가능한 드롭샷과 창의적인 플레이 스타일로 팬들에게 즐거움을 선사하는 튀니지의 영웅입니다.'
    },
    'qinwen-zheng': { name: '정 친원', nameEn: 'Qinwen Zheng', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'marketa-vondrousova': { name: '마르케타 본드로우소바', nameEn: 'Marketa Vondrousova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed' },
    'maria-sakkari': { name: '마리아 사카리', nameEn: 'Maria Sakkari', country: 'Greece', countryFlag: '🇬🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'jelena-ostapenko': { name: '옐레나 오스타펜코', nameEn: 'Jelena Ostapenko', country: 'Latvia', countryFlag: '🇱🇻', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'naomi-osaka': { name: '나오미 오사카', nameEn: 'Naomi Osaka', country: 'Japan', countryFlag: '🇯🇵', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'caroline-wozniacki': { name: '캐롤라인 보즈니아키', nameEn: 'Caroline Wozniacki', country: 'Denmark', countryFlag: '🇩🇰', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'angelique-kerber': { name: '안젤리크 케르버', nameEn: 'Angelique Kerber', country: 'Germany', countryFlag: '🇩🇪', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed' },
    'elina-svitolina': { name: '엘리나 스비톨리나', nameEn: 'Elina Svitolina', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'victoria-azarenka': { name: '빅토리아 아자렌카', nameEn: 'Victoria Azarenka', country: 'Belarus', countryFlag: '🇧🇾', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'karolina-pliskova': { name: '카롤리나 플리스코바', nameEn: 'Karolina Pliskova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'sloane-stephens': { name: '슬론 스티븐스', nameEn: 'Sloane Stephens', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'madison-keys': { name: '매디슨 키스', nameEn: 'Madison Keys', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'daria-kasatkina': { name: '다리아 카사트키나', nameEn: 'Daria Kasatkina', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'beatriz-haddad-maia': { name: '베아트리스 하다드 마이아', nameEn: 'Beatriz Haddad Maia', country: 'Brazil', countryFlag: '🇧🇷', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed' },
    'danielle-collins': { name: '다니엘 콜린스', nameEn: 'Danielle Collins', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'barbora-krejcikova': { name: '바르보라 크레이치코바', nameEn: 'Barbora Krejcikova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'petra-kvitova': { name: '페트라 크비토바', nameEn: 'Petra Kvitova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed' },
    'belinda-bencic': { name: '벨린다 벤치치', nameEn: 'Belinda Bencic', country: 'Switzerland', countryFlag: '🇨🇭', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'bianca-andreescu': { name: '비앙카 안드레스쿠', nameEn: 'Bianca Andreescu', country: 'Canada', countryFlag: '🇨🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'emma-raducanu': { name: '엠마 라두카누', nameEn: 'Emma Raducanu', country: 'United Kingdom', countryFlag: '🇬🇧', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'leylah-fernandez': { name: '레일라 페르난데스', nameEn: 'Leylah Fernandez', country: 'Canada', countryFlag: '🇨🇦', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed' },
    'mirra-andreeva': { name: '미라 안드레예바', nameEn: 'Mirra Andreeva', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'linda-noskova': { name: '린다 노스코바', nameEn: 'Linda Noskova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },
    'marta-kostyuk': { name: '마르타 코스튜크', nameEn: 'Marta Kostyuk', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed' },

    // --- Added Male Players (Roadmap Completion) ---
    'shang-juncheng': { name: '상 쥔청', nameEn: 'Shang Juncheng', country: 'China', countryFlag: '🇨🇳', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed' },
    'duje-ajdukovic': { name: '두예 아이두코비치', nameEn: 'Duje Ajdukovic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'dominic-thiem': {
        name: '도미니크 팀', nameEn: 'Dominic Thiem', country: 'Austria', countryFlag: '🇦🇹', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '클레이 코트의 왕자이자 US 오픈 챔피언. 강력한 원핸드 백핸드와 엄청난 회전량의 탑스핀 스트로크로 빅3를 위협했던 선수입니다.'
    },
    'fabio-fognini': { name: '파비오 포니니', nameEn: 'Fabio Fognini', country: 'Italy', countryFlag: '🇮🇹', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'reilly-opelka': { name: '라일리 오펠카', nameEn: 'Reilly Opelka', country: 'United States', countryFlag: '🇺🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'marin-cilic': {
        name: '마린 칠리치', nameEn: 'Marin Cilic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '2014 US 오픈 챔피언. 큰 키에서 나오는 강력한 서브와 플랫한 스트로크가 강점인 베테랑입니다.'
    },
    'milos-raonic': { name: '밀로스 라오니치', nameEn: 'Milos Raonic', country: 'Canada', countryFlag: '🇨🇦', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'nick-kyrgios': {
        name: '닉 키리오스', nameEn: 'Nick Kyrgios', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 악동이자 천재. 예측 불가능한 플레이와 강력한 서브, 그리고 쇼맨십으로 관중을 사로잡는 스타 플레이어입니다.'
    },
    'richard-gasquet': {
        name: '리샤르 가스케', nameEn: 'Richard Gasquet', country: 'France', countryFlag: '🇫🇷', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '예술적인 원핸드 백핸드의 소유자. 테니스 역사상 가장 아름다운 백핸드 폼을 가진 선수 중 하나로 꼽힙니다.'
    },
    'diego-schwartzman': { name: '디에고 슈와르츠만', nameEn: 'Diego Schwartzman', country: 'Argentina', countryFlag: '🇦🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'david-goffin': { name: '다비드 고핀', nameEn: 'David Goffin', country: 'Belgium', countryFlag: '🇧🇪', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'thanasi-kokkinakis': { name: '타나시 코키나키스', nameEn: 'Thanasi Kokkinakis', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'hugo-gaston': { name: '위고 가스통', nameEn: 'Hugo Gaston', country: 'France', countryFlag: '🇫🇷', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed' },
    'luca-nardi': { name: '루카 나르디', nameEn: 'Luca Nardi', country: 'Italy', countryFlag: '🇮🇹', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'dino-prizmic': { name: '디노 프리즈미치', nameEn: 'Dino Prizmic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },
    'coleman-wong': { name: '콜먼 웡', nameEn: 'Coleman Wong', country: 'Hong Kong', countryFlag: '🇭🇰', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed' },

    // --- Added Female Players (Batch 2 - Enriched) ---
    'dayana-yastremska': {
        name: '다야나 야스트렘스카', nameEn: 'Dayana Yastremska', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '폭발적인 공격력을 자랑하는 우크라이나의 파워 히터. 2024 호주 오픈에서 예선 통과자 신분으로 4강까지 진출하는 돌풍을 일으키며 세계를 놀라게 했습니다.'
    },
    'anna-kalinskaya': {
        name: '안나 칼린스카야', nameEn: 'Anna Kalinskaya', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '군더더기 없는 깔끔한 스트로크가 특징인 선수. 최근 두바이 챔피언십 결승 진출 등 투어 무대에서 기량이 만개하며 다크호스로 떠올랐습니다.'
    },
    'jasmine-paolini': {
        name: '자스민 파올리니', nameEn: 'Jasmine Paolini', country: 'Italy', countryFlag: '🇮🇹', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '작은 거인. 163cm의 단신이지만 빠른 발과 지칠 줄 모르는 체력으로 2024년 롤랑가로스와 윔블던 결승에 진출하며 세계 톱 랭커로 도약했습니다.'
    },
    'sorana-cirstea': {
        name: '소라나 크르스테아', nameEn: 'Sorana Cirstea', country: 'Romania', countryFlag: '🇷🇴', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '루마니아의 베테랑. 공격적인 베이스라인 플레이를 구사하며, 투어 경력 내내 꾸준히 상위권을 위협하는 저력을 보여줍니다.'
    },
    'anastasia-potapova': {
        name: '아나스타샤 포타포바', nameEn: 'Anastasia Potapova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '주니어 세계 1위 출신의 재능. 강한 승부욕과 파이팅 넘치는 플레이로 코트 위에서 존재감을 발휘하는 영건입니다.'
    },
    'ekaterina-alexandrova': {
        name: '에카테리나 알렉산드로바', nameEn: 'Ekaterina Alexandrova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '낮고 빠른 플랫성 타구가 일품인 선수. 특히 실내 코트에서 강한 면모를 보이며, 리듬을 탔을 때는 톱 랭커들도 막기 힘든 공격력을 뽐냅니다.'
    },
    'liudmila-samsonova': {
        name: '류드밀라 삼소노바', nameEn: 'Liudmila Samsonova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 서브와 포핸드를 앞세운 공격형 플레이어. 하드 코트에서 특히 위력적이며, WTA 투어 타이틀을 여러 차례 차지한 실력자입니다.'
    },
    'veronika-kudermetova': {
        name: '베로니카 쿠데르메토바', nameEn: 'Veronika Kudermetova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '단식과 복식 모두 세계 수준인 올라운더. 안정적인 스트로크와 네트 플레이 능력을 겸비하여 어떤 상황에서도 견고한 경기를 펼칩니다.'
    },
    'elise-mertens': {
        name: '엘리스 메르텐스', nameEn: 'Elise Mertens', country: 'Belgium', countryFlag: '🇧🇪', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '벨기에 테니스의 계보를 잇는 선수. 기복 없는 꾸준함과 뛰어난 수비력이 강점이며, 복식에서는 세계 랭킹 1위를 기록한 바 있습니다.'
    },
    'donna-vekic': {
        name: '돈나 베키치', nameEn: 'Donna Vekic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 서브와 포핸드를 겸비한 크로아티아의 스타. 2024 파리 올림픽 은메달리스트로, 오랜 부상을 딛고 제2의 전성기를 맞이했습니다.'
    },
    'marie-bouzkova': {
        name: '마리 부즈코바', nameEn: 'Marie Bouzkova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 에너자이저. 끈질긴 수비와 지치지 않는 체력으로 상대를 지치게 만들며, 항상 미소를 잃지 않는 스포츠맨십으로 사랑받습니다.'
    },
    'katerina-siniakova': {
        name: '카테리나 시니아코바', nameEn: 'Katerina Siniakova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '현역 최고의 복식 여제 중 한 명. 그랜드슬램 복식 전관왕(골든 슬램)을 달성했으며, 단식에서도 특유의 투지와 네트 플레이로 경쟁력을 보여줍니다.'
    },
    'caroline-garcia': {
        name: '카롤린 가르시아', nameEn: 'Caroline Garcia', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '공격적인 리턴 포지스("Fly with Caro")과 다이내믹한 플레이가 특징입니다. WTA 파이널스 우승 경험이 있는 프랑스의 에이스입니다.'
    },
    'anhelina-kalinina': {
        name: '안헬리나 칼리니나', nameEn: 'Anhelina Kalinina', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '우크라이나 테니스의 주축. 클레이 코트에서 강점을 보이며, 탄탄한 기본기를 바탕으로 로마 마스터스 결승에 오르는 저력을 보여주었습니다.'
    },
    'lesia-tsurenko': {
        name: '레시아 추렌코', nameEn: 'Lesia Tsurenko', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '투어 경험이 풍부한 베테랑. 부상을 자주 겪으면서도 오뚝이처럼 다시 일어서는 정신력의 소유자로, 카운터 펀치 능력이 뛰어납니다.'
    },
    'magda-linette': {
        name: '마그다 리네트', nameEn: 'Magda Linette', country: 'Poland', countryFlag: '🇵🇱', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '성실함의 대명사. 30대에 접어들어 2023 호주 오픈 4강에 진출하며 커리어 하이를 찍은 대기만성형 플레이어입니다.'
    },
    'sofia-kenin': {
        name: '소피아 케닌', nameEn: 'Sofia Kenin', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '2020 호주 오픈 챔피언. 작은 체구에도 불구하고 뛰어난 타이밍과 코트 커버력, 그리고 강한 승부근성이 돋보이는 선수입니다.'
    },
    'paula-badosa': {
        name: '파울라 바도사', nameEn: 'Paula Badosa', country: 'Spain', countryFlag: '🇪🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 베이스라인 플레이가 강점인 스페인의 스타. 부상을 딛고 다시 랭킹을 끌어올리고 있는 저력의 선수입니다.'
    },
    'karolina-muchova': {
        name: '카롤리나 무호바', nameEn: 'Karolina Muchova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '올라운드 플레이어의 정석. 다양한 구질과 네트 플레이, 슬라이스를 자유자재로 구사하며 "테니스를 가장 예쁘게 치는 선수" 중 한 명으로 꼽힙니다. 2023 롤랑가로스 준우승자.'
    },
    'ajla-tomljanovic': {
        name: '아일라 톰얀로비치', nameEn: 'Ajla Tomljanovic', country: 'Australia', countryFlag: '🇦🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 그라운드 스트로크를 가진 호주의 간판. 세레나 윌리엄스의 은퇴 경기 상대이자 승자로 역사에 남았으며, 메이저 대회에서 꾸준히 8강권에 도전하는 실력자입니다.'
    },
    'camila-giorgi': {
        name: '카밀라 조르지', nameEn: 'Camila Giorgi', country: 'Italy', countryFlag: '🇮🇹', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 하드 히터. 작은 체구에서 뿜어져 나오는 폭발적인 스트로크 파워는 투어 최고 수준이며, 공격적인 스타일로 정평이 나 있습니다.'
    },
    'wang-xinyu': {
        name: '왕 신유', nameEn: 'Wang Xinyu', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '중국 테니스의 차세대 주자 "중국의 샤라포바". 182cm의 장신에서 나오는 시원한 스트로크가 강점이며, 복식에서도 그랜드슬램 우승을 차지했습니다.'
    },
    'wang-xiyu': {
        name: '왕 시위', nameEn: 'Wang Xiyu', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '강력한 왼손 포핸드를 가진 중국의 기대주. 2018 US 오픈 주니어 챔피언 출신으로, 파워풀한 테니스를 구사합니다.'
    },
    'zhu-lin': {
        name: '주 린', nameEn: 'Zhu Lin', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '대기만성형 플레이어. 꾸준한 노력 끝에 2023 호주 오픈 16강, 투어 첫 우승을 달성하며 전성기를 맞이했습니다. '
    },
    'yuan-yue': {
        name: '위안 위에', nameEn: 'Yuan Yue', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '공격적인 플레이가 돋보이는 중국 선수. 2024년 투어 첫 우승을 차지하며 세계 랭킹을 빠르게 끌어올리고 있습니다.'
    },
    'diane-parry': {
        name: '디안 파리', nameEn: 'Diane Parry', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'One-handed',
        longBio: 'WTA 투어에서 보기 드문 원핸드 백핸드 구사자. 우아한 폼과 클래식한 테니스 스타일로 주목받는 프랑스의 유망주입니다.'
    },
    'clara-burel': {
        name: '클라라 뷔렐', nameEn: 'Clara Burel', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '프랑스의 영 건. 주니어 세계 1위 출신으로, 안정적인 경기 운영과 영리한 플레이로 성인 무대에서도 두각을 나타내고 있습니다.'
    },
    'varvara-gracheva': {
        name: '바르바라 그라체바', nameEn: 'Varvara Gracheva', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '러시아에서 프랑스로 국적을 변경한 선수. 다양한 구질을 섞어 쓰는 까다로운 스트로크로 상대를 괴롭히는 스타일입니다.'
    },
    'tatjana-maria': {
        name: '타티아나 마리아', nameEn: 'Tatjana Maria', country: 'Germany', countryFlag: '🇩🇪', gender: 'female', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '슬라이스 마스터. 포핸드와 백핸드 모두에서 자유자재로 구사하는 슬라이스로 상대를 혼란에 빠뜨리는 독특한 스타일의 베테랑입니다. 두 아이의 엄마이자 2022 윔블던 4강 신화의 주인공.'
    },
    'laura-siegemund': {
        name: '로라 시그문드', nameEn: 'Laura Siegemund', country: 'Germany', countryFlag: '🇩🇪', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '변칙 플레이의 여왕. 드롭샷, 네트 대시 등 다양한 전술로 상대를 흔드는 지능적인 플레이가 일품이며, 복식에서도 그랜드슬램 챔피언입니다.'
    },

    // --- Added Male (Bonus) ---
    'hong-seong-chan': {
        name: '홍성찬', nameEn: 'Seong-chan Hong', country: 'Korea', countryFlag: '🇰🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '대한민국의 테니스 국가대표. "홍대리"라는 별명처럼 데이비스컵 등 국가대항전에서 놀라운 투혼과 승부사 기질을 발휘하며 한국 테니스의 허리를 책임지고 있습니다.'
    }
};

export const getPlayerSlugs = () => Object.keys(PLAYERS_DB);

export const getPlayerBySlug = (slug: string) => PLAYERS_DB[slug];
