export type PlayerData = {
  name: string; // Korean name
  nameEn: string; // English name
  country: string;
  countryFlag: string;
  image?: string;
  gender: 'male' | 'female';

  // Enhanced fields for dynamic pages
  bio?: string;
  longBio?: string;
  plays?: 'Right-handed' | 'Left-handed';
  backhand?: 'One-handed' | 'Two-handed';
  birthDate?: string;
  height?: string;
  rank?: number;

  // Rich Content for Enriched Profiles
  detailedProfile?: {
    whyNotable?: string;
    playStyle?: string;
    growthStory?: string;
    signatureMatch?: {
      title: string;
      date?: string;
      description: string;
    };
    hexagonStats?: Array<{
      name: string;
      score: number;
      description?: string;
    }>;
    fanAppeal?: string;
    recentForm?: string;
    oneLineSummary?: string;
    faq?: Array<{
      question: string;
      answer: string;
    }>;
  };

  // Legacy Compatibility Fields
  nameKo?: string;
  birthYear?: number;
  rankingCurrent?: number;
  tour?: string;
  style?: string;
  favoriteSurface?: string;
  tagsStory?: string[];
  slug?: string;
  rankingPeak?: number; // Legacy
  templateType?: TemplateType; // Legacy
};

export type Player = PlayerData;

export type TemplateType = 'standard' | 'comeback' | 'mindset' | 'narrative' | 'rivalry' | 'technique';

export type PlayerFAQ = {
  question: string;
  answer: string;
};

export type PlayerMetadata = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
};
