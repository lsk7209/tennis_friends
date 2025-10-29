export interface EquipmentInput {
  skillLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  playStyle: 'control' | 'power' | 'spin' | 'all-round';
  budget: 'low' | 'medium' | 'high' | 'premium';
  racketHeadSize: 'mid' | 'mid-plus' | 'oversize';
  weight: 'light' | 'medium' | 'heavy';
  gripSize: '4-0' | '4-1/8' | '4-1/4' | '4-3/8' | '4-1/2' | '4-5/8';
  stringType: 'synthetic' | 'polyester' | 'natural-gut' | 'hybrid';
  courtType: 'hard' | 'clay' | 'grass' | 'mixed';
  age: number;
  previousInjuries: string[];
}

export interface RacketRecommendation {
  id: string;
  name: string;
  brand: string;
  price: number;
  priceRange: 'low' | 'medium' | 'high' | 'premium';
  headSize: string;
  weight: string;
  balance: string;
  stiffness: string;
  power: number;
  control: number;
  spin: number;
  comfort: number;
  durability: number;
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  imageUrl: string;
  matchScore: number;
}

export interface StringRecommendation {
  id: string;
  name: string;
  brand: string;
  price: number;
  material: string;
  gauge: string;
  tension: string;
  power: number;
  control: number;
  spin: number;
  comfort: number;
  durability: number;
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  imageUrl: string;
  matchScore: number;
}

export interface EquipmentResult {
  rackets: RacketRecommendation[];
  strings: StringRecommendation[];
  accessories: {
    grip: string[];
    overgrip: string[];
    dampener: string[];
    bag: string[];
  };
  totalBudget: {
    min: number;
    max: number;
    recommended: number;
  };
}

// 라켓 데이터베이스
const rackets: RacketRecommendation[] = [
  {
    id: 'wilson-pro-staff',
    name: 'Wilson Pro Staff 97',
    brand: 'Wilson',
    price: 280000,
    priceRange: 'premium',
    headSize: '97 sq in',
    weight: '315g',
    balance: 'Head Light',
    stiffness: 'Low',
    power: 3,
    control: 9,
    spin: 7,
    comfort: 8,
    durability: 8,
    description: '로저 페더러가 사용하는 클래식한 컨트롤 라켓',
    pros: ['뛰어난 컨트롤', '안정적인 플레이', '프리미엄 품질'],
    cons: ['높은 가격', '초보자에게 어려움'],
    bestFor: ['고급자', '컨트롤 플레이어'],
    imageUrl: '/images/rackets/wilson-pro-staff.jpg',
    matchScore: 0
  },
  {
    id: 'babolat-pure-drive',
    name: 'Babolat Pure Drive',
    brand: 'Babolat',
    price: 220000,
    priceRange: 'high',
    headSize: '100 sq in',
    weight: '300g',
    balance: 'Even',
    stiffness: 'High',
    power: 8,
    control: 6,
    spin: 7,
    comfort: 6,
    durability: 7,
    description: '파워와 스핀을 동시에 원하는 플레이어를 위한 라켓',
    pros: ['강력한 파워', '좋은 스핀', '다양한 레벨'],
    cons: ['높은 강성', '진동 전달'],
    bestFor: ['중급자', '파워 플레이어'],
    imageUrl: '/images/rackets/babolat-pure-drive.jpg',
    matchScore: 0
  },
  {
    id: 'head-speed-pro',
    name: 'Head Speed Pro',
    brand: 'Head',
    price: 200000,
    priceRange: 'high',
    headSize: '100 sq in',
    weight: '310g',
    balance: 'Head Light',
    stiffness: 'Medium',
    power: 6,
    control: 8,
    spin: 7,
    comfort: 7,
    durability: 8,
    description: '노박 조코비치가 사용하는 균형잡힌 라켓',
    pros: ['균형잡힌 성능', '안정성', '컨트롤'],
    cons: ['파워 부족'],
    bestFor: ['중급자', '올라운더'],
    imageUrl: '/images/rackets/head-speed-pro.jpg',
    matchScore: 0
  },
  {
    id: 'yonex-ezone-98',
    name: 'Yonex EZONE 98',
    brand: 'Yonex',
    price: 180000,
    priceRange: 'medium',
    headSize: '98 sq in',
    weight: '305g',
    balance: 'Head Light',
    stiffness: 'Medium',
    power: 6,
    control: 8,
    spin: 8,
    comfort: 8,
    durability: 7,
    description: '스핀과 컨트롤을 중시하는 플레이어를 위한 라켓',
    pros: ['뛰어난 스핀', '컨트롤', '편안함'],
    cons: ['파워 부족'],
    bestFor: ['중급자', '스핀 플레이어'],
    imageUrl: '/images/rackets/yonex-ezone-98.jpg',
    matchScore: 0
  },
  {
    id: 'wilson-clash-100',
    name: 'Wilson Clash 100',
    brand: 'Wilson',
    price: 160000,
    priceRange: 'medium',
    headSize: '100 sq in',
    weight: '295g',
    balance: 'Even',
    stiffness: 'Low',
    power: 7,
    control: 7,
    spin: 7,
    comfort: 9,
    durability: 6,
    description: '부상 예방을 위한 부드러운 라켓',
    pros: ['뛰어난 편안함', '부상 예방', '균형잡힌 성능'],
    cons: ['내구성 부족'],
    bestFor: ['초급자', '부상 우려자'],
    imageUrl: '/images/rackets/wilson-clash-100.jpg',
    matchScore: 0
  },
  {
    id: 'babolat-pure-aero',
    name: 'Babolat Pure Aero',
    brand: 'Babolat',
    price: 200000,
    priceRange: 'high',
    headSize: '100 sq in',
    weight: '300g',
    balance: 'Head Heavy',
    stiffness: 'High',
    power: 8,
    control: 5,
    spin: 9,
    comfort: 5,
    durability: 8,
    description: '라파엘 나달이 사용하는 스핀 전문 라켓',
    pros: ['극강의 스핀', '파워', '내구성'],
    cons: ['낮은 컨트롤', '불편함'],
    bestFor: ['고급자', '스핀 플레이어'],
    imageUrl: '/images/rackets/babolat-pure-aero.jpg',
    matchScore: 0
  },
  {
    id: 'head-radical-mp',
    name: 'Head Radical MP',
    brand: 'Head',
    price: 140000,
    priceRange: 'medium',
    headSize: '98 sq in',
    weight: '300g',
    balance: 'Head Light',
    stiffness: 'Medium',
    power: 6,
    control: 8,
    spin: 6,
    comfort: 7,
    durability: 8,
    description: '컨트롤 중심의 중급자용 라켓',
    pros: ['뛰어난 컨트롤', '안정성', '합리적 가격'],
    cons: ['파워 부족'],
    bestFor: ['중급자', '컨트롤 플레이어'],
    imageUrl: '/images/rackets/head-radical-mp.jpg',
    matchScore: 0
  },
  {
    id: 'yonex-vcore-100',
    name: 'Yonex VCORE 100',
    brand: 'Yonex',
    price: 120000,
    priceRange: 'medium',
    headSize: '100 sq in',
    weight: '290g',
    balance: 'Even',
    stiffness: 'Medium',
    power: 7,
    control: 6,
    spin: 7,
    comfort: 7,
    durability: 7,
    description: '초급자부터 중급자까지 사용 가능한 올라운드 라켓',
    pros: ['균형잡힌 성능', '접근성', '합리적 가격'],
    cons: ['특별한 장점 없음'],
    bestFor: ['초급자', '중급자'],
    imageUrl: '/images/rackets/yonex-vcore-100.jpg',
    matchScore: 0
  }
];

// 스트링 데이터베이스
const strings: StringRecommendation[] = [
  {
    id: 'luxilon-alu-power',
    name: 'Luxilon ALU Power',
    brand: 'Luxilon',
    price: 25000,
    material: 'Polyester',
    gauge: '16L',
    tension: '50-60 lbs',
    power: 6,
    control: 8,
    spin: 8,
    comfort: 4,
    durability: 9,
    description: '프로 선수들이 가장 많이 사용하는 폴리에스터 스트링',
    pros: ['뛰어난 컨트롤', '강력한 스핀', '내구성'],
    cons: ['낮은 편안함', '텐션 손실'],
    bestFor: ['고급자', '스핀 플레이어'],
    imageUrl: '/images/strings/luxilon-alu-power.jpg',
    matchScore: 0
  },
  {
    id: 'babolat-rpm-blast',
    name: 'Babolat RPM Blast',
    brand: 'Babolat',
    price: 20000,
    material: 'Polyester',
    gauge: '16',
    tension: '50-60 lbs',
    power: 7,
    control: 7,
    spin: 9,
    comfort: 5,
    durability: 8,
    description: '라파엘 나달이 사용하는 스핀 전문 스트링',
    pros: ['극강의 스핀', '파워', '내구성'],
    cons: ['낮은 편안함'],
    bestFor: ['고급자', '스핀 플레이어'],
    imageUrl: '/images/strings/babolat-rpm-blast.jpg',
    matchScore: 0
  },
  {
    id: 'wilson-nxt',
    name: 'Wilson NXT',
    brand: 'Wilson',
    price: 30000,
    material: 'Synthetic Gut',
    gauge: '16',
    tension: '55-65 lbs',
    power: 7,
    control: 6,
    spin: 6,
    comfort: 9,
    durability: 6,
    description: '편안함과 파워를 동시에 원하는 플레이어를 위한 스트링',
    pros: ['뛰어난 편안함', '파워', '부드러운 느낌'],
    cons: ['낮은 내구성', '텐션 손실'],
    bestFor: ['초급자', '편안함 추구자'],
    imageUrl: '/images/strings/wilson-nxt.jpg',
    matchScore: 0
  },
  {
    id: 'head-sonic-pro',
    name: 'Head Sonic Pro',
    brand: 'Head',
    price: 18000,
    material: 'Polyester',
    gauge: '16',
    tension: '50-60 lbs',
    power: 6,
    control: 8,
    spin: 7,
    comfort: 6,
    durability: 8,
    description: '컨트롤과 내구성을 중시하는 폴리에스터 스트링',
    pros: ['뛰어난 컨트롤', '내구성', '합리적 가격'],
    cons: ['낮은 편안함'],
    bestFor: ['중급자', '컨트롤 플레이어'],
    imageUrl: '/images/strings/head-sonic-pro.jpg',
    matchScore: 0
  },
  {
    id: 'yonex-poly-tour-pro',
    name: 'Yonex POLY TOUR PRO',
    brand: 'Yonex',
    price: 22000,
    material: 'Polyester',
    gauge: '16',
    tension: '50-60 lbs',
    power: 6,
    control: 8,
    spin: 8,
    comfort: 7,
    durability: 8,
    description: '편안함과 성능을 동시에 제공하는 폴리에스터 스트링',
    pros: ['균형잡힌 성능', '편안함', '내구성'],
    cons: ['높은 가격'],
    bestFor: ['중급자', '고급자'],
    imageUrl: '/images/strings/yonex-poly-tour-pro.jpg',
    matchScore: 0
  },
  {
    id: 'prince-synthetic-gut',
    name: 'Prince Synthetic Gut',
    brand: 'Prince',
    price: 8000,
    material: 'Synthetic Gut',
    gauge: '16',
    tension: '55-65 lbs',
    power: 7,
    control: 6,
    spin: 6,
    comfort: 8,
    durability: 5,
    description: '초보자에게 적합한 합성거트 스트링',
    pros: ['저렴한 가격', '편안함', '파워'],
    cons: ['낮은 내구성'],
    bestFor: ['초급자', '예산 제한자'],
    imageUrl: '/images/strings/prince-synthetic-gut.jpg',
    matchScore: 0
  }
];

export function calculateEquipmentRecommendations(input: EquipmentInput): EquipmentResult {
  // 라켓 추천 로직
  const recommendedRackets = rackets.map(racket => {
    let score = 0;
    
    // 스킬 레벨 매칭
    if (input.skillLevel === 'beginner' && racket.control >= 7) score += 20;
    if (input.skillLevel === 'intermediate' && racket.control >= 6 && racket.control <= 8) score += 20;
    if (input.skillLevel === 'advanced' && racket.control >= 7) score += 20;
    if (input.skillLevel === 'expert' && racket.control >= 8) score += 20;
    
    // 플레이 스타일 매칭
    if (input.playStyle === 'control' && racket.control >= 7) score += 25;
    if (input.playStyle === 'power' && racket.power >= 7) score += 25;
    if (input.playStyle === 'spin' && racket.spin >= 7) score += 25;
    if (input.playStyle === 'all-round' && racket.control >= 6 && racket.power >= 6) score += 25;
    
    // 예산 매칭
    if (input.budget === 'low' && racket.priceRange === 'medium') score += 15;
    if (input.budget === 'medium' && (racket.priceRange === 'medium' || racket.priceRange === 'high')) score += 15;
    if (input.budget === 'high' && (racket.priceRange === 'high' || racket.priceRange === 'premium')) score += 15;
    if (input.budget === 'premium') score += 15;
    
    // 부상 이력 고려
    if (input.previousInjuries.includes('tennis-elbow') && racket.comfort >= 7) score += 20;
    if (input.previousInjuries.includes('shoulder') && racket.comfort >= 7) score += 20;
    
    // 나이 고려
    if (input.age >= 40 && racket.comfort >= 7) score += 15;
    
    racket.matchScore = score;
    return racket;
  }).sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);

  // 스트링 추천 로직
  const recommendedStrings = strings.map(string => {
    let score = 0;
    
    // 스킬 레벨 매칭
    if (input.skillLevel === 'beginner' && string.comfort >= 7) score += 20;
    if (input.skillLevel === 'intermediate' && string.comfort >= 6) score += 20;
    if (input.skillLevel === 'advanced' && string.control >= 7) score += 20;
    if (input.skillLevel === 'expert' && string.control >= 7) score += 20;
    
    // 플레이 스타일 매칭
    if (input.playStyle === 'control' && string.control >= 7) score += 25;
    if (input.playStyle === 'power' && string.power >= 7) score += 25;
    if (input.playStyle === 'spin' && string.spin >= 7) score += 25;
    if (input.playStyle === 'all-round' && string.control >= 6 && string.power >= 6) score += 25;
    
    // 예산 매칭
    if (input.budget === 'low' && string.price <= 15000) score += 15;
    if (input.budget === 'medium' && string.price <= 25000) score += 15;
    if (input.budget === 'high' && string.price <= 35000) score += 15;
    if (input.budget === 'premium') score += 15;
    
    // 부상 이력 고려
    if (input.previousInjuries.includes('tennis-elbow') && string.comfort >= 7) score += 20;
    if (input.previousInjuries.includes('shoulder') && string.comfort >= 7) score += 20;
    
    // 나이 고려
    if (input.age >= 40 && string.comfort >= 7) score += 15;
    
    string.matchScore = score;
    return string;
  }).sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);

  // 예산 계산
  const totalBudget = {
    min: Math.min(...recommendedRackets.map(r => r.price)) + Math.min(...recommendedStrings.map(s => s.price)),
    max: Math.max(...recommendedRackets.map(r => r.price)) + Math.max(...recommendedStrings.map(s => s.price)),
    recommended: Math.round((recommendedRackets[0]?.price || 0) + (recommendedStrings[0]?.price || 0))
  };

  return {
    rackets: recommendedRackets,
    strings: recommendedStrings,
    accessories: {
      grip: ['Wilson Pro Overgrip', 'Tourna Grip', 'Yonex Super Grap'],
      overgrip: ['Wilson Pro Overgrip', 'Tourna Grip', 'Yonex Super Grap'],
      dampener: ['Wilson Shock Shield', 'Babolat Vibrakill', 'Head Shock Stop'],
      bag: ['Wilson Tour 6-Pack', 'Babolat Pure Drive Bag', 'Head Tour Team Bag']
    },
    totalBudget
  };
}
