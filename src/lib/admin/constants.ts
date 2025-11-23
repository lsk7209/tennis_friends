/**
 * 관리자 페이지 상수 정의
 */

import type { StatsData } from '@/types/admin';

export const ADMIN_PASSWORD = '1234';
export const AUTO_REFRESH_INTERVAL = 30000; // 30초
export const MAX_RECENT_VISITORS = 100;
export const MAX_DAILY_STATS_DAYS = 30;
export const MAX_TOP_ITEMS = 10;
export const MAX_TOP_KEYWORDS = 20;
export const MAX_TOP_BLOG_POSTS = 10;
export const MAX_TOP_UTILITIES = 10;
export const MAX_QUALITY_ISSUES = 20;
export const MAX_KEYWORD_ANALYSIS = 20;
export const MAX_COMMON_PATHS = 15;

export const WEEKDAYS = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] as const;

export const TEST_TYPES = [
  'ntrp-test',
  'play-style-test',
  'flexibility-test',
  'reaction-test',
  'focus-training',
  'string-tension',
  'equipment-recommendation',
  'training-planner',
  'match-analyzer',
  'injury-risk',
  'nutrition-guide',
] as const;

export const REGION_MAP: Record<string, string> = {
  'Asia/Seoul': '한국',
  'Asia/Tokyo': '일본',
  'Asia/Shanghai': '중국',
  'America/New_York': '미국 동부',
  'America/Los_Angeles': '미국 서부',
  'Europe/London': '영국',
  'Europe/Paris': '유럽',
  'Australia/Sydney': '호주',
};

export const REFERRER_CATEGORIES = {
  SEARCH_ENGINE: '검색엔진',
  SOCIAL_MEDIA: '소셜미디어',
  DIRECT: '직접접속',
  OTHER: '기타',
} as const;

export const EMPTY_STATS_DATA = {
  totalVisitors: 0,
  uniqueVisitors: 0,
  topReferrers: [],
  topKeywords: [],
  dailyStats: [],
  recentVisitors: [],
  browserStats: [],
  osStats: [],
  deviceStats: [],
  pageTypeStats: [],
  languageStats: [],
  timezoneStats: [],
  testCompletionStats: [],
  newVsReturning: { new: 0, returning: 0 },
  popularPages: [],
  hourlyStats: Array.from({ length: 24 }, (_, i) => ({ hour: i, visitors: 0 })),
  searchEngineStats: [],
  resolutionStats: [],
  sessionStats: { totalSessions: 0, avgPagesPerSession: 0, avgSessionDuration: 0 },
  bounceRate: 0,
  referrerCategoryStats: [],
  topBlogPosts: [],
  topUtilities: [],
  detailedReferrerStats: {
    searchEngines: [],
    socialMedia: [],
    directDomains: [],
  },
  keywordAnalysis: [],
  userFlow: {
    entryPages: [],
    exitPages: [],
    pagePaths: [],
    commonPaths: [],
  },
  engagementMetrics: {
    avgTimeOnPage: [],
    pagesPerSession: [],
    returnRate: 0,
  },
  weeklyStats: [],
  monthlyStats: [],
  regionStats: [],
  testConversionRate: [],
  trendAnalysis: {
    recent7Days: 0,
    previous7Days: 0,
    change: 0,
    changePercent: 0,
  },
  dataQuality: {
    totalRecords: 0,
    validRecords: 0,
    invalidRecords: 0,
    duplicateRecords: 0,
    issues: [],
  },
} as StatsData;

