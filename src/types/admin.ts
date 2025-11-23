/**
 * 관리자 페이지 타입 정의
 */

export interface VisitorData {
  id: string;
  timestamp: string;
  referrer: string;
  userAgent: string;
  ip: string;
  page: string;
  searchKeyword?: string;
  searchEngine?: string;
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  deviceType: 'desktop' | 'mobile' | 'tablet';
  screenResolution: string;
  language: string;
  timezone: string;
  pageType: 'home' | 'blog' | 'utility' | 'test' | 'result' | 'admin' | 'other';
  sessionId: string;
  isNewVisitor: boolean;
  visitDuration?: number;
  testCompleted?: string;
  testResult?: any;
  testType?: string;
}

export interface StatsData {
  totalVisitors: number;
  uniqueVisitors: number;
  topReferrers: { name: string; value: number }[];
  topKeywords: { name: string; value: number }[];
  dailyStats: { date: string; visitors: number }[];
  recentVisitors: VisitorData[];
  browserStats: { name: string; value: number }[];
  osStats: { name: string; value: number }[];
  deviceStats: { name: string; value: number }[];
  pageTypeStats: { name: string; value: number }[];
  languageStats: { name: string; value: number }[];
  timezoneStats: { name: string; value: number }[];
  testCompletionStats: { testType: string; count: number }[];
  newVsReturning: { new: number; returning: number };
  popularPages: { page: string; count: number }[];
  hourlyStats: { hour: number; visitors: number }[];
  searchEngineStats: { name: string; value: number }[];
  resolutionStats: { name: string; value: number }[];
  sessionStats: { totalSessions: number; avgPagesPerSession: number; avgSessionDuration: number };
  bounceRate: number;
  referrerCategoryStats: { category: string; count: number }[];
  topBlogPosts: { slug: string; count: number }[];
  topUtilities: { slug: string; count: number }[];
  detailedReferrerStats: {
    searchEngines: { name: string; count: number; keywords: number }[];
    socialMedia: { name: string; count: number }[];
    directDomains: { domain: string; count: number }[];
  };
  keywordAnalysis: {
    keyword: string;
    count: number;
    pages: { page: string; count: number }[];
    conversionRate: number;
    avgSessionDuration: number;
  }[];
  userFlow: {
    entryPages: { page: string; count: number }[];
    exitPages: { page: string; count: number }[];
    pagePaths: { path: string; count: number }[];
    commonPaths: { from: string; to: string; count: number }[];
  };
  engagementMetrics: {
    avgTimeOnPage: { page: string; seconds: number }[];
    pagesPerSession: { sessionCount: number; pageCount: number }[];
    returnRate: number;
  };
  weeklyStats: { day: string; visitors: number }[];
  monthlyStats: { month: string; visitors: number }[];
  regionStats: { region: string; count: number }[];
  testConversionRate: { testType: string; started: number; completed: number; rate: number }[];
  trendAnalysis: {
    recent7Days: number;
    previous7Days: number;
    change: number;
    changePercent: number;
  };
  dataQuality: {
    totalRecords: number;
    validRecords: number;
    invalidRecords: number;
    duplicateRecords: number;
    issues: string[];
  };
}

export interface DataStatus {
  hasData: boolean;
  dataCount: number;
  lastUpdate: string | null;
  error: string | null;
}

export interface CloudflareStatus {
  connected: boolean;
  apiUrl: string | null;
  lastCheck: string | null;
}

