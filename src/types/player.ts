export type PlayerData = {
  name: string;
  nameEn: string;
  country: string;
  countryFlag: string;
  image?: string;
  gender: 'male' | 'female';
  // Additional fields for dynamic page generation
  birthDate?: string;
  height?: string;
  plays?: string; // e.g., "Right-handed (Two-handed backhand)"
  backhand?: 'one-handed' | 'two-handed';
  rank?: number;
};
