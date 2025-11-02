export interface TennisPlayer {
  id: string;
  name: string;
  nameEn: string;
  country: string;
  countryFlag: string;
  birthDate: string;
  age: number;
  height: number;
  weight: number;
  plays: 'Right-handed' | 'Left-handed';
  backhand: 'One-handed' | 'Two-handed';
  ranking: {
    current: number;
    careerHigh: number;
    careerHighDate: string;
  };
  titles: {
    singles: number;
    doubles: number;
    total: number;
  };
  prizeMoney: string;
  image: string;
  bio: string;
  achievements: string[];
  playingStyle: string;
  strengths: string[];
  weaknesses: string[];
  careerHighlights: {
    year: number;
    achievement: string;
  }[];
  stats: {
    aces: number;
    doubleFaults: number;
    firstServePercentage: number;
    breakPointsConverted: number;
    returnGamesWon: number;
  };
  socialMedia: {
    instagram?: string;
    twitter?: string;
    website?: string;
  };
}

export const tennisPlayers: TennisPlayer[] = [
  {
    id: 'novak-djokovic',
    name: '노박 조코비치',
    nameEn: 'Novak Djokovic',
    country: 'Serbia',
    countryFlag: '🇷🇸',
    birthDate: '1987-05-22',
    age: 37,
    height: 188,
    weight: 77,
    plays: 'Right-handed',
    backhand: 'Two-handed',
    ranking: {
      current: 1,
      careerHigh: 1,
      careerHighDate: '2011-07-04'
    },
    titles: {
      singles: 24,
      doubles: 1,
      total: 25
    },
    prizeMoney: '$180,000,000+',
    image: '/players/novak-djokovic.jpg',
    bio: '세르비아의 전설적인 테니스 선수로, 그랜드 슬램 24회 우승이라는 남자 테니스 역사상 최다 기록을 보유하고 있습니다. 완벽에 가까운 플레이 스타일과 정신력으로 테니스계를 지배하고 있습니다.',
    achievements: [
      '그랜드 슬램 24회 우승 (역대 최다)',
      'ATP 파이널스 7회 우승',
      '올림픽 금메달 (싱글)',
      'ATP 세계 랭킹 1위 400주 이상',
      '테니스 역사상 최고의 선수 중 한 명'
    ],
    playingStyle: '올라운드 플레이어로, 탁월한 피트니스와 정신력, 완벽한 기술을 겸비했습니다. 코트 위에서 가장 효율적이고 전략적인 플레이를 보여줍니다.',
    strengths: [
      '탁월한 체력과 회복력',
      '완벽한 스트로크 기술',
      '강력한 정신력과 집중력',
      '효율적인 코트 커버리지',
      '탁월한 리턴 능력'
    ],
    weaknesses: [
      '가끔 과도한 자신감',
      '특정 상대에 대한 취약점'
    ],
    careerHighlights: [
      { year: 2011, achievement: '첫 번째 그랜드 슬램 우승 (윔블던)' },
      { year: 2015, achievement: '커리어 그랜드 슬램 달성' },
      { year: 2016, achievement: '올림픽 싱글 금메달' },
      { year: 2021, achievement: '역대 최다 그랜드 슬램 기록 (20승)' },
      { year: 2023, achievement: '역대 최다 그랜드 슬램 기록 (24승)' }
    ],
    stats: {
      aces: 12000,
      doubleFaults: 2800,
      firstServePercentage: 62,
      breakPointsConverted: 42,
      returnGamesWon: 32
    },
    socialMedia: {
      instagram: '@djokernole',
      twitter: '@DjokerNole',
      website: 'novakdjokovic.com'
    }
  },
  {
    id: 'carlos-alcaraz',
    name: '카를로스 알카라스',
    nameEn: 'Carlos Alcaraz',
    country: 'Spain',
    countryFlag: '🇪🇸',
    birthDate: '2003-05-05',
    age: 21,
    height: 185,
    weight: 74,
    plays: 'Right-handed',
    backhand: 'Two-handed',
    ranking: {
      current: 2,
      careerHigh: 1,
      careerHighDate: '2022-09-12'
    },
    titles: {
      singles: 16,
      doubles: 2,
      total: 18
    },
    prizeMoney: '$25,000,000+',
    image: '/players/carlos-alcaraz.jpg',
    bio: '스페인의 신성으로, 20대 초반에 이미 세계 랭킹 1위를 달성한 최연소 선수입니다. 폭발적인 파워와 젊은 에너지로 테니스계를 이끌어갈 차세대 스타입니다.',
    achievements: [
      '세계 랭킹 1위 (역대 최연소)',
      '윔블던 준우승 (2023)',
      'US 오픈 우승 (2022)',
      '마스터스 1000 시리즈 5회 우승',
      'ATP 올해의 선수상 (2022)'
    ],
    playingStyle: '폭발적인 파워와 스피드를 겸비한 공격적인 플레이 스타일입니다. 강력한 포핸드와 탁월한 운동능력으로 상대를 압도합니다.',
    strengths: [
      '폭발적인 포핸드 파워',
      '탁월한 운동능력과 스피드',
      '강력한 서브',
      '젊은 에너지와 열정',
      '빠른 적응력'
    ],
    weaknesses: [
      '경기 운영의 일관성',
      '부상 관리'
    ],
    careerHighlights: [
      { year: 2021, achievement: 'ATP 투어 데뷔' },
      { year: 2022, achievement: '세계 랭킹 1위 달성 (역대 최연소)' },
      { year: 2022, achievement: 'US 오픈 우승' },
      { year: 2023, achievement: '윔블던 준우승' },
      { year: 2024, achievement: '윔블던 우승' }
    ],
    stats: {
      aces: 4500,
      doubleFaults: 1200,
      firstServePercentage: 58,
      breakPointsConverted: 45,
      returnGamesWon: 28
    },
    socialMedia: {
      instagram: '@carlosalcaraz',
      twitter: '@carlosalcaraz',
      website: 'carlosalcaraz.com'
    }
  },
  {
    id: 'daniil-medvedev',
    name: '다닐 메드베데프',
    nameEn: 'Daniil Medvedev',
    country: 'Russia',
    countryFlag: '🇷🇺',
    birthDate: '1996-02-11',
    age: 28,
    height: 198,
    weight: 83,
    plays: 'Right-handed',
    backhand: 'One-handed',
    ranking: {
      current: 3,
      careerHigh: 1,
      careerHighDate: '2022-02-28'
    },
    titles: {
      singles: 20,
      doubles: 0,
      total: 20
    },
    prizeMoney: '$35,000,000+',
    image: '/players/daniil-medvedev.jpg',
    bio: '러시아의 강력한 베이스라이너로, 탁월한 스트로크 기술과 정신력으로 ATP 투어를 지배하고 있습니다. 특히 하드 코트에서 강력한 모습을 보여줍니다.',
    achievements: [
      '세계 랭킹 1위',
      'US 오픈 우승 (2021)',
      'ATP 파이널스 우승 (2020)',
      '마스터스 1000 시리즈 5회 우승',
      '올림픽 동메달'
    ],
    playingStyle: '강력한 베이스라인 플레이어로, 깊은 스트로크와 강력한 서브를 활용합니다. 체력과 정신력이 뛰어나며, 특히 하드 코트에서 강력한 모습을 보여줍니다.',
    strengths: [
      '강력한 스트로크 기술',
      '탁월한 체력',
      '강력한 정신력',
      '효율적인 베이스라인 플레이',
      '강력한 서브'
    ],
    weaknesses: [
      '클레이 코트에서의 적응력',
      '일관성 있는 경기력'
    ],
    careerHighlights: [
      { year: 2018, achievement: 'ATP 투어 첫 우승' },
      { year: 2020, achievement: 'ATP 파이널스 우승' },
      { year: 2021, achievement: 'US 오픈 우승' },
      { year: 2022, achievement: '세계 랭킹 1위 달성' },
      { year: 2023, achievement: 'ATP 파이널스 준우승' }
    ],
    stats: {
      aces: 8500,
      doubleFaults: 2200,
      firstServePercentage: 61,
      breakPointsConverted: 38,
      returnGamesWon: 29
    },
    socialMedia: {
      instagram: '@daniilmedwed',
      twitter: '@DaniilMedwed'
    }
  },
  {
    id: 'jannik-sinner',
    name: '야닉 시너',
    nameEn: 'Jannik Sinner',
    country: 'Italy',
    countryFlag: '🇮🇹',
    birthDate: '2001-08-16',
    age: 23,
    height: 188,
    weight: 76,
    plays: 'Right-handed',
    backhand: 'Two-handed',
    ranking: {
      current: 4,
      careerHigh: 4,
      careerHighDate: '2024-01-15'
    },
    titles: {
      singles: 15,
      doubles: 0,
      total: 15
    },
    prizeMoney: '$20,000,000+',
    image: '/players/jannik-sinner.jpg',
    bio: '이탈리아의 차세대 스타로, 탁월한 스트로크 기술과 정신력으로 빠르게 성장하고 있습니다. 특히 서브 앤 발리 게임이 뛰어납니다.',
    achievements: [
      '세계 랭킹 4위',
      'ATP 파이널스 우승 (2024)',
      '마스터스 1000 시리즈 3회 우승',
      '올림픽 동메달',
      'ATP 올해의 선수상 후보'
    ],
    playingStyle: '탁월한 스트로크 기술과 서브 앤 발리 게임을 겸비했습니다. 특히 백핸드가 강력하며, 코트 커버리지가 뛰어납니다.',
    strengths: [
      '탁월한 스트로크 기술',
      '강력한 서브',
      '효율적인 서브 앤 발리',
      '탁월한 코트 커버리지',
      '강력한 정신력'
    ],
    weaknesses: [
      '경기 운영의 일관성',
      '특정 표면에서의 적응력'
    ],
    careerHighlights: [
      { year: 2020, achievement: 'ATP 투어 데뷔' },
      { year: 2022, achievement: '첫 마스터스 1000 우승' },
      { year: 2023, achievement: '윔블던 4강' },
      { year: 2024, achievement: 'ATP 파이널스 우승' },
      { year: 2024, achievement: '세계 랭킹 4위 달성' }
    ],
    stats: {
      aces: 6200,
      doubleFaults: 1500,
      firstServePercentage: 60,
      breakPointsConverted: 41,
      returnGamesWon: 31
    },
    socialMedia: {
      instagram: '@janniksin',
      twitter: '@janniksin'
    }
  },
  {
    id: 'serena-williams',
    name: '세레나 윌리엄스',
    nameEn: 'Serena Williams',
    country: 'United States',
    countryFlag: '🇺🇸',
    birthDate: '1981-09-26',
    age: 43,
    height: 175,
    weight: 70,
    plays: 'Right-handed',
    backhand: 'Two-handed',
    ranking: {
      current: 1200,
      careerHigh: 1,
      careerHighDate: '2002-07-08'
    },
    titles: {
      singles: 23,
      doubles: 14,
      total: 37
    },
    prizeMoney: '$94,000,000+',
    image: '/players/serena-williams.jpg',
    bio: '테니스 역사상 가장 위대한 여성 선수 중 한 명으로, 23개의 그랜드 슬램 타이틀을 보유하고 있습니다. 파워풀한 플레이와 강력한 정신력으로 오랫동안 테니스계를 지배했습니다.',
    achievements: [
      '그랜드 슬램 23회 우승 (역대 2위)',
      '올림픽 금메달 4개',
      '세계 랭킹 1위 319주',
      'WTA 올해의 선수상 8회',
      '테니스 역사상 최고의 여성 선수'
    ],
    playingStyle: '파워풀한 베이스라인 플레이어로, 강력한 서브와 스트로크로 상대를 압도합니다. 특히 리턴 게임이 뛰어나며, 강력한 정신력으로 유명합니다.',
    strengths: [
      '강력한 서브와 스트로크',
      '탁월한 리턴 능력',
      '강력한 정신력',
      '경기 운영 능력',
      '파워풀한 공격력'
    ],
    weaknesses: [
      '부상으로 인한 경기력 저하',
      '나이로 인한 체력 저하'
    ],
    careerHighlights: [
      { year: 1999, achievement: '프로 데뷔' },
      { year: 2002, achievement: '첫 세계 랭킹 1위' },
      { year: 2008, achievement: '올림픽 싱글 금메달' },
      { year: 2012, achievement: '윔블던 우승 (4번째)' },
      { year: 2017, achievement: '호주 오픈 우승 (마지막 그랜드 슬램)' }
    ],
    stats: {
      aces: 12000,
      doubleFaults: 3500,
      firstServePercentage: 58,
      breakPointsConverted: 44,
      returnGamesWon: 35
    },
    socialMedia: {
      instagram: '@serenawilliams',
      twitter: '@serenawilliams',
      website: 'serenawilliams.com'
    }
  },
  {
    id: 'iga-swiatek',
    name: '이가 시비아테크',
    nameEn: 'Iga Świątek',
    country: 'Poland',
    countryFlag: '🇵🇱',
    birthDate: '2001-05-31',
    age: 23,
    height: 176,
    weight: 65,
    plays: 'Right-handed',
    backhand: 'Two-handed',
    ranking: {
      current: 1,
      careerHigh: 1,
      careerHighDate: '2022-04-04'
    },
    titles: {
      singles: 17,
      doubles: 1,
      total: 18
    },
    prizeMoney: '$25,000,000+',
    image: '/players/iga-swiatek.jpg',
    bio: '폴란드의 세계 랭킹 1위 여성 선수로, 탁월한 플레이 스타일과 정신력으로 WTA 투어를 지배하고 있습니다. 특히 프렌치 오픈에서 강력한 모습을 보여줍니다.',
    achievements: [
      '세계 랭킹 1위',
      '프렌치 오픈 3회 우승',
      'WTA 파이널스 우승 (2023)',
      '올림픽 동메달',
      'WTA 올해의 선수상 (2022)'
    ],
    playingStyle: '탁월한 스트로크 기술과 정신력을 겸비한 올라운드 플레이어입니다. 특히 클레이 코트에서 강력하며, 효율적인 플레이로 상대를 압도합니다.',
    strengths: [
      '탁월한 스트로크 기술',
      '강력한 정신력',
      '효율적인 플레이 스타일',
      '클레이 코트 전문성',
      '빠른 적응력'
    ],
    weaknesses: [
      '가끔 과도한 자신감',
      '특정 상대에 대한 취약점'
    ],
    careerHighlights: [
      { year: 2019, achievement: 'WTA 투어 데뷔' },
      { year: 2020, achievement: '첫 WTA 우승' },
      { year: 2022, achievement: '세계 랭킹 1위 달성' },
      { year: 2022, achievement: '프렌치 오픈 우승' },
      { year: 2023, achievement: 'WTA 파이널스 우승' }
    ],
    stats: {
      aces: 2800,
      doubleFaults: 800,
      firstServePercentage: 63,
      breakPointsConverted: 46,
      returnGamesWon: 38
    },
    socialMedia: {
      instagram: '@iga_swiatek',
      twitter: '@iga_swiatek'
    }
  },
  {
    id: 'roger-federer',
    name: '로저 페더러',
    nameEn: 'Roger Federer',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    birthDate: '1981-08-08',
    age: 43,
    height: 185,
    weight: 85,
    plays: 'Right-handed',
    backhand: 'One-handed',
    ranking: {
      current: 1200,
      careerHigh: 1,
      careerHighDate: '2004-02-02'
    },
    titles: {
      singles: 20,
      doubles: 8,
      total: 28
    },
    prizeMoney: '$130,000,000+',
    image: '/players/roger-federer.jpg',
    bio: '스위스의 테니스 전설로, 우아한 플레이 스타일과 스포츠맨십으로 전 세계 팬들의 사랑을 받고 있습니다. 테니스 역사상 가장 아름다운 플레이를 보여준 선수로 평가받습니다.',
    achievements: [
      '그랜드 슬램 20회 우승',
      '세계 랭킹 1위 310주',
      '올림픽 금메달',
      'ATP 파이널스 6회 우승',
      '테니스 역사상 최고의 선수 중 한 명'
    ],
    playingStyle: '우아하고 예술적인 플레이 스타일로 유명합니다. 탁월한 원핸드 백핸드와 서브 앤 발리 게임이 뛰어나며, 코트 위에서 가장 아름다운 플레이를 보여줍니다.',
    strengths: [
      '탁월한 원핸드 백핸드',
      '우아한 플레이 스타일',
      '강력한 서브 앤 발리',
      '탁월한 코트 커버리지',
      '강력한 정신력'
    ],
    weaknesses: [
      '부상으로 인한 은퇴',
      '나이로 인한 체력 저하'
    ],
    careerHighlights: [
      { year: 2003, achievement: '윔블던 첫 우승' },
      { year: 2004, achievement: '세계 랭킹 1위 달성' },
      { year: 2008, achievement: '올림픽 싱글 금메달' },
      { year: 2017, achievement: '호주 오픈 우승 (마지막 그랜드 슬램)' },
      { year: 2022, achievement: '은퇴 선언' }
    ],
    stats: {
      aces: 11500,
      doubleFaults: 3200,
      firstServePercentage: 62,
      breakPointsConverted: 40,
      returnGamesWon: 33
    },
    socialMedia: {
      instagram: '@rogerfederer',
      twitter: '@rogerfederer'
    }
  },
  {
    id: 'ashleigh-barty',
    name: '애슐리 바티',
    nameEn: 'Ashleigh Barty',
    country: 'Australia',
    countryFlag: '🇦🇺',
    birthDate: '1996-04-24',
    age: 28,
    height: 166,
    weight: 62,
    plays: 'Right-handed',
    backhand: 'Two-handed',
    ranking: {
      current: 1000,
      careerHigh: 1,
      careerHighDate: '2019-06-24'
    },
    titles: {
      singles: 15,
      doubles: 12,
      total: 27
    },
    prizeMoney: '$25,000,000+',
    image: '/players/ashleigh-barty.jpg',
    bio: '호주의 테니스 스타로, 세계 랭킹 1위를 달성한 후 크리켓으로 전향한 독특한 커리어를 가지고 있습니다. 올라운드 플레이어로서 탁월한 기술을 보여주었습니다.',
    achievements: [
      '세계 랭킹 1위',
      '윔블던 우승 (2021)',
      '프렌치 오픈 준우승',
      '올림픽 동메달',
      'WTA 올해의 선수상 (2021)'
    ],
    playingStyle: '올라운드 플레이어로, 탁월한 스트로크 기술과 운동능력을 겸비했습니다. 특히 발리와 네트 플레이가 뛰어나며, 효율적인 플레이로 상대를 압도했습니다.',
    strengths: [
      '탁월한 스트로크 기술',
      '효율적인 플레이 스타일',
      '강력한 네트 플레이',
      '탁월한 운동능력',
      '강력한 정신력'
    ],
    weaknesses: [
      '크리켓 전향으로 인한 은퇴',
      '특정 표면에서의 일관성'
    ],
    careerHighlights: [
      { year: 2014, achievement: 'WTA 투어 데뷔' },
      { year: 2019, achievement: '세계 랭킹 1위 달성' },
      { year: 2021, achievement: '윔블던 우승' },
      { year: 2022, achievement: '은퇴 선언' },
      { year: 2022, achievement: '크리켓 데뷔' }
    ],
    stats: {
      aces: 1200,
      doubleFaults: 400,
      firstServePercentage: 65,
      breakPointsConverted: 48,
      returnGamesWon: 42
    },
    socialMedia: {
      instagram: '@ashbarty',
      twitter: '@ashbarty'
    }
  }
];

// 선수 카테고리별 필터링 함수들
export const getTopPlayers = () => tennisPlayers.filter(p => p.ranking.current <= 10);
export const getGrandSlamWinners = () => tennisPlayers.filter(p => p.titles.singles >= 15);
export const getMalePlayers = () => tennisPlayers.filter(p => !['Serena Williams', 'Iga Świątek', 'Ashleigh Barty'].includes(p.nameEn));
export const getFemalePlayers = () => tennisPlayers.filter(p => ['Serena Williams', 'Iga Świątek', 'Ashleigh Barty'].includes(p.nameEn));
export const getActivePlayers = () => tennisPlayers.filter(p => p.ranking.current <= 100);
export const getLegendaryPlayers = () => tennisPlayers.filter(p => p.age >= 40 || p.titles.singles >= 20);

// 선수 검색 함수
export const searchPlayers = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return tennisPlayers.filter(player =>
    player.name.toLowerCase().includes(lowerQuery) ||
    player.nameEn.toLowerCase().includes(lowerQuery) ||
    player.country.toLowerCase().includes(lowerQuery) ||
    player.playingStyle.toLowerCase().includes(lowerQuery)
  );
};

// 선수 정렬 함수들
export const sortPlayersByRanking = () => [...tennisPlayers].sort((a, b) => a.ranking.current - b.ranking.current);
export const sortPlayersByTitles = () => [...tennisPlayers].sort((a, b) => b.titles.total - a.titles.total);
export const sortPlayersByAge = () => [...tennisPlayers].sort((a, b) => a.age - b.age);
