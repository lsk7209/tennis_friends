/**
 * 통계 계산 유틸리티 함수
 */

import type { VisitorData, StatsData } from '@/types/admin';
import {
  MAX_TOP_ITEMS,
  MAX_TOP_KEYWORDS,
  MAX_TOP_BLOG_POSTS,
  MAX_TOP_UTILITIES,
  MAX_DAILY_STATS_DAYS,
  MAX_RECENT_VISITORS,
  MAX_KEYWORD_ANALYSIS,
  MAX_COMMON_PATHS,
  MAX_QUALITY_ISSUES,
  WEEKDAYS,
  TEST_TYPES,
  REGION_MAP,
  REFERRER_CATEGORIES,
  EMPTY_STATS_DATA,
} from './constants';
import { getReferrerDisplay, getSearchEngine, extractKeyword } from './helpers';

/**
 * 통계 데이터 계산
 */
export function calculateStats(visitorData: VisitorData[]): StatsData {
  if (visitorData.length === 0) {
    return { ...EMPTY_STATS_DATA };
  }

  const totalVisitors = visitorData.length;
  const uniqueSessions = new Set(visitorData.map((v) => v.sessionId || v.ip));
  const uniqueVisitors = uniqueSessions.size;

  return {
    ...EMPTY_STATS_DATA,
    totalVisitors,
    uniqueVisitors,
    topReferrers: calculateTopReferrers(visitorData),
    topKeywords: calculateTopKeywords(visitorData),
    dailyStats: calculateDailyStats(visitorData),
    recentVisitors: calculateRecentVisitors(visitorData),
    browserStats: calculateBrowserStats(visitorData),
    osStats: calculateOSStats(visitorData),
    deviceStats: calculateDeviceStats(visitorData),
    pageTypeStats: calculatePageTypeStats(visitorData),
    languageStats: calculateLanguageStats(visitorData),
    timezoneStats: calculateTimezoneStats(visitorData),
    testCompletionStats: calculateTestCompletionStats(visitorData),
    newVsReturning: calculateNewVsReturning(visitorData),
    popularPages: calculatePopularPages(visitorData),
    hourlyStats: calculateHourlyStats(visitorData),
    searchEngineStats: calculateSearchEngineStats(visitorData),
    resolutionStats: calculateResolutionStats(visitorData),
    sessionStats: calculateSessionStats(visitorData),
    bounceRate: calculateBounceRate(visitorData),
    referrerCategoryStats: calculateReferrerCategoryStats(visitorData),
    topBlogPosts: calculateTopBlogPosts(visitorData),
    topUtilities: calculateTopUtilities(visitorData),
    detailedReferrerStats: calculateDetailedReferrerStats(visitorData),
    keywordAnalysis: calculateKeywordAnalysis(visitorData),
    userFlow: calculateUserFlow(visitorData),
    engagementMetrics: calculateEngagementMetrics(visitorData),
    weeklyStats: calculateWeeklyStats(visitorData),
    monthlyStats: calculateMonthlyStats(visitorData),
    regionStats: calculateRegionStats(visitorData),
    testConversionRate: calculateTestConversionRate(visitorData),
    trendAnalysis: calculateTrendAnalysis(visitorData),
    dataQuality: calculateDataQuality(visitorData),
  };
}

/**
 * 상위 리퍼러 계산
 */
function calculateTopReferrers(visitorData: VisitorData[]) {
  const referrerStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const domain = getReferrerDisplay(visitor.referrer);
    referrerStats[domain] = (referrerStats[domain] || 0) + 1;
  });

  return Object.entries(referrerStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, MAX_TOP_ITEMS)
    .map(([name, value]) => ({ name, value }));
}

/**
 * 상위 키워드 계산
 */
function calculateTopKeywords(visitorData: VisitorData[]) {
  const keywordStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const keyword = visitor.searchKeyword;
    if (keyword) {
      keywordStats[keyword] = (keywordStats[keyword] || 0) + 1;
    }
  });

  return Object.entries(keywordStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, MAX_TOP_KEYWORDS)
    .map(([name, value]) => ({ name, value }));
}

/**
 * 일일 통계 계산
 */
function calculateDailyStats(visitorData: VisitorData[]) {
  const dailyStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const date = new Date(visitor.timestamp).toISOString().split('T')[0];
    dailyStats[date] = (dailyStats[date] || 0) + 1;
  });

  return Object.entries(dailyStats)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-MAX_DAILY_STATS_DAYS)
    .map(([date, visitors]) => ({ date, visitors }));
}

/**
 * 최근 방문자 계산
 */
function calculateRecentVisitors(visitorData: VisitorData[]) {
  return visitorData
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, MAX_RECENT_VISITORS);
}

/**
 * 브라우저 통계 계산
 */
function calculateBrowserStats(visitorData: VisitorData[]) {
  const browserStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const browser = visitor.browser || 'Unknown';
    browserStats[browser] = (browserStats[browser] || 0) + 1;
  });

  return Object.entries(browserStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, MAX_TOP_ITEMS)
    .map(([name, value]) => ({ name, value }));
}

/**
 * OS 통계 계산
 */
function calculateOSStats(visitorData: VisitorData[]) {
  const osStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const os = visitor.os || 'Unknown';
    osStats[os] = (osStats[os] || 0) + 1;
  });

  return Object.entries(osStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, MAX_TOP_ITEMS)
    .map(([name, value]) => ({ name, value }));
}

/**
 * 디바이스 통계 계산
 */
function calculateDeviceStats(visitorData: VisitorData[]) {
  const deviceStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const deviceType = visitor.deviceType || 'desktop';
    deviceStats[deviceType] = (deviceStats[deviceType] || 0) + 1;
  });

  return Object.entries(deviceStats)
    .sort(([, a], [, b]) => b - a)
    .map(([name, value]) => ({ name, value }));
}

/**
 * 페이지 타입 통계 계산
 */
function calculatePageTypeStats(visitorData: VisitorData[]) {
  const pageTypeStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const pageType = visitor.pageType || 'other';
    pageTypeStats[pageType] = (pageTypeStats[pageType] || 0) + 1;
  });

  return Object.entries(pageTypeStats)
    .sort(([, a], [, b]) => b - a)
    .map(([name, value]) => ({ name, value }));
}

/**
 * 언어 통계 계산
 */
function calculateLanguageStats(visitorData: VisitorData[]) {
  const languageStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const language = visitor.language || 'unknown';
    languageStats[language] = (languageStats[language] || 0) + 1;
  });

  return Object.entries(languageStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, MAX_TOP_ITEMS)
    .map(([name, value]) => ({ name, value }));
}

/**
 * 타임존 통계 계산
 */
function calculateTimezoneStats(visitorData: VisitorData[]) {
  const timezoneStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const timezone = visitor.timezone || 'unknown';
    timezoneStats[timezone] = (timezoneStats[timezone] || 0) + 1;
  });

  return Object.entries(timezoneStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, MAX_TOP_ITEMS)
    .map(([name, value]) => ({ name, value }));
}

/**
 * 테스트 완료 통계 계산
 */
function calculateTestCompletionStats(visitorData: VisitorData[]) {
  const testStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    if (visitor.testCompleted || visitor.testType) {
      const testType = visitor.testCompleted || visitor.testType || 'unknown';
      testStats[testType] = (testStats[testType] || 0) + 1;
    }
  });

  return Object.entries(testStats)
    .map(([testType, count]) => ({ testType, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * 신규 vs 리턴 방문자 계산
 */
function calculateNewVsReturning(visitorData: VisitorData[]) {
  const newVisitorCount = visitorData.filter((visitor) => visitor.isNewVisitor).length;
  const returningVisitorCount = visitorData.length - newVisitorCount;
  return { new: newVisitorCount, returning: returningVisitorCount };
}

/**
 * 인기 페이지 계산
 */
function calculatePopularPages(visitorData: VisitorData[]) {
  const pageStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const page = visitor.page || '/';
    pageStats[page] = (pageStats[page] || 0) + 1;
  });

  return Object.entries(pageStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 20)
    .map(([page, count]) => ({ page, count }));
}

/**
 * 시간대별 통계 계산
 */
function calculateHourlyStats(visitorData: VisitorData[]) {
  const hourlyStats: Record<number, number> = {};
  visitorData.forEach((visitor) => {
    const hour = new Date(visitor.timestamp).getHours();
    hourlyStats[hour] = (hourlyStats[hour] || 0) + 1;
  });

  return Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    visitors: hourlyStats[i] || 0,
  }));
}

/**
 * 검색 엔진 통계 계산
 */
function calculateSearchEngineStats(visitorData: VisitorData[]) {
  const searchEngineStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const engine = visitor.searchEngine || '기타';
    searchEngineStats[engine] = (searchEngineStats[engine] || 0) + 1;
  });

  return Object.entries(searchEngineStats)
    .sort(([, a], [, b]) => b - a)
    .map(([name, value]) => ({ name, value }));
}

/**
 * 해상도 통계 계산
 */
function calculateResolutionStats(visitorData: VisitorData[]) {
  const resolutionStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const resolution = visitor.screenResolution || 'unknown';
    resolutionStats[resolution] = (resolutionStats[resolution] || 0) + 1;
  });

  return Object.entries(resolutionStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, MAX_TOP_ITEMS)
    .map(([name, value]) => ({ name, value }));
}

/**
 * 세션 통계 계산
 */
function calculateSessionStats(visitorData: VisitorData[]) {
  const sessionMap: Record<string, VisitorData[]> = {};
  visitorData.forEach((visitor) => {
    const sessionId = visitor.sessionId || 'unknown';
    if (!sessionMap[sessionId]) {
      sessionMap[sessionId] = [];
    }
    sessionMap[sessionId].push(visitor);
  });

  const totalSessions = Object.keys(sessionMap).length;
  const totalPagesInSessions = visitorData.length;
  const avgPagesPerSession = totalSessions > 0 
    ? Math.round((totalPagesInSessions / totalSessions) * 10) / 10 
    : 0;

  const sessionDurations: number[] = [];
  Object.values(sessionMap).forEach((sessionVisits) => {
    if (sessionVisits.length > 0) {
      const firstVisit = new Date(sessionVisits[0].timestamp).getTime();
      const lastVisit = new Date(sessionVisits[sessionVisits.length - 1].timestamp).getTime();
      const duration = (lastVisit - firstVisit) / 1000 / 60; // 분 단위
      sessionDurations.push(duration);
    }
  });

  const avgSessionDuration = sessionDurations.length > 0
    ? Math.round((sessionDurations.reduce((a, b) => a + b, 0) / sessionDurations.length) * 10) / 10
    : 0;

  return {
    totalSessions,
    avgPagesPerSession,
    avgSessionDuration,
  };
}

/**
 * 이탈률 계산
 */
function calculateBounceRate(visitorData: VisitorData[]) {
  const sessionMap: Record<string, VisitorData[]> = {};
  visitorData.forEach((visitor) => {
    const sessionId = visitor.sessionId || 'unknown';
    if (!sessionMap[sessionId]) {
      sessionMap[sessionId] = [];
    }
    sessionMap[sessionId].push(visitor);
  });

  const totalSessions = Object.keys(sessionMap).length;
  const singlePageSessions = Object.values(sessionMap).filter((session) => session.length === 1).length;
  
  return totalSessions > 0 ? Math.round((singlePageSessions / totalSessions) * 100) : 0;
}

/**
 * 리퍼러 카테고리 통계 계산
 */
function calculateReferrerCategoryStats(visitorData: VisitorData[]) {
  const referrerCategoryMap: Record<string, number> = {
    [REFERRER_CATEGORIES.SEARCH_ENGINE]: 0,
    [REFERRER_CATEGORIES.SOCIAL_MEDIA]: 0,
    [REFERRER_CATEGORIES.DIRECT]: 0,
    [REFERRER_CATEGORIES.OTHER]: 0,
  };

  visitorData.forEach((visitor) => {
    const referrer = visitor.referrer || '';
    if (!referrer || referrer === '') {
      referrerCategoryMap[REFERRER_CATEGORIES.DIRECT]++;
    } else {
      try {
        const url = new URL(referrer);
        const hostname = url.hostname.toLowerCase();
        if (getSearchEngine(referrer)) {
          referrerCategoryMap[REFERRER_CATEGORIES.SEARCH_ENGINE]++;
        } else if (
          hostname.includes('facebook') || hostname.includes('twitter') ||
          hostname.includes('instagram') || hostname.includes('linkedin') ||
          hostname.includes('youtube') || hostname.includes('tiktok')
        ) {
          referrerCategoryMap[REFERRER_CATEGORIES.SOCIAL_MEDIA]++;
        } else {
          referrerCategoryMap[REFERRER_CATEGORIES.OTHER]++;
        }
      } catch {
        referrerCategoryMap[REFERRER_CATEGORIES.OTHER]++;
      }
    }
  });

  return Object.entries(referrerCategoryMap)
    .map(([category, count]) => ({ category, count }));
}

/**
 * 상위 블로그 포스트 계산
 */
function calculateTopBlogPosts(visitorData: VisitorData[]) {
  const blogPostStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    if (visitor.page && visitor.page.startsWith('/blog/')) {
      const slug = visitor.page.replace('/blog/', '');
      blogPostStats[slug] = (blogPostStats[slug] || 0) + 1;
    }
  });

  return Object.entries(blogPostStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, MAX_TOP_BLOG_POSTS)
    .map(([slug, count]) => ({ slug, count }));
}

/**
 * 상위 유틸리티 계산
 */
function calculateTopUtilities(visitorData: VisitorData[]) {
  const utilityStats: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    if (visitor.page && visitor.page.startsWith('/utility/')) {
      const slug = visitor.page.replace('/utility/', '').split('/')[0];
      if (slug && slug !== '') {
        utilityStats[slug] = (utilityStats[slug] || 0) + 1;
      }
    }
  });

  return Object.entries(utilityStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, MAX_TOP_UTILITIES)
    .map(([slug, count]) => ({ slug, count }));
}

/**
 * 상세 리퍼러 통계 계산
 */
function calculateDetailedReferrerStats(visitorData: VisitorData[]) {
  const searchEngineDetails: Record<string, { count: number; keywords: Set<string> }> = {};
  const socialMediaDetails: Record<string, number> = {};
  const directDomainDetails: Record<string, number> = {};

  visitorData.forEach((visitor) => {
    const referrer = visitor.referrer || '';
    const searchEngine = visitor.searchEngine;
    const keyword = visitor.searchKeyword;

    if (searchEngine && searchEngine !== '기타') {
      if (!searchEngineDetails[searchEngine]) {
        searchEngineDetails[searchEngine] = { count: 0, keywords: new Set() };
      }
      searchEngineDetails[searchEngine].count++;
      if (keyword) {
        searchEngineDetails[searchEngine].keywords.add(keyword);
      }
    }

    if (referrer) {
      try {
        const url = new URL(referrer);
        const hostname = url.hostname.toLowerCase();
        if (hostname.includes('facebook') || hostname.includes('twitter') ||
            hostname.includes('instagram') || hostname.includes('linkedin') ||
            hostname.includes('youtube') || hostname.includes('tiktok')) {
          const platform = hostname.includes('facebook') ? 'Facebook' :
                         hostname.includes('twitter') ? 'Twitter' :
                         hostname.includes('instagram') ? 'Instagram' :
                         hostname.includes('linkedin') ? 'LinkedIn' :
                         hostname.includes('youtube') ? 'YouTube' : 'TikTok';
          socialMediaDetails[platform] = (socialMediaDetails[platform] || 0) + 1;
        } else if (!searchEngine && hostname !== (typeof window !== 'undefined' ? window.location.hostname : '')) {
          directDomainDetails[hostname] = (directDomainDetails[hostname] || 0) + 1;
        }
      } catch {
        // 무시
      }
    }
  });

  return {
    searchEngines: Object.entries(searchEngineDetails)
      .map(([name, data]) => ({
        name,
        count: data.count,
        keywords: data.keywords.size,
      }))
      .sort((a, b) => b.count - a.count),
    socialMedia: Object.entries(socialMediaDetails)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count),
    directDomains: Object.entries(directDomainDetails)
      .map(([domain, count]) => ({ domain, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, MAX_TOP_ITEMS),
  };
}

/**
 * 키워드 분석 계산
 */
function calculateKeywordAnalysis(visitorData: VisitorData[]) {
  const keywordAnalysisMap: Record<string, {
    count: number;
    pages: Record<string, number>;
    sessions: Set<string>;
    durations: number[];
  }> = {};

  visitorData.forEach((visitor) => {
    const keyword = visitor.searchKeyword;
    if (keyword) {
      if (!keywordAnalysisMap[keyword]) {
        keywordAnalysisMap[keyword] = {
          count: 0,
          pages: {},
          sessions: new Set(),
          durations: [],
        };
      }
      keywordAnalysisMap[keyword].count++;
      keywordAnalysisMap[keyword].pages[visitor.page] = 
        (keywordAnalysisMap[keyword].pages[visitor.page] || 0) + 1;
      keywordAnalysisMap[keyword].sessions.add(visitor.sessionId);
    }
  });

  // 세션별 평균 체류 시간 계산
  Object.keys(keywordAnalysisMap).forEach((keyword) => {
    const sessions = Array.from(keywordAnalysisMap[keyword].sessions);
    sessions.forEach((sessionId) => {
      const sessionVisits = visitorData.filter((v) => v.sessionId === sessionId);
      if (sessionVisits.length > 0) {
        const firstVisit = new Date(sessionVisits[0].timestamp).getTime();
        const lastVisit = new Date(sessionVisits[sessionVisits.length - 1].timestamp).getTime();
        const duration = (lastVisit - firstVisit) / 1000;
        keywordAnalysisMap[keyword].durations.push(duration);
      }
    });
  });

  return Object.entries(keywordAnalysisMap)
    .map(([keyword, data]) => {
      const avgDuration = data.durations.length > 0
        ? Math.round(data.durations.reduce((a, b) => a + b, 0) / data.durations.length)
        : 0;
      const testCompletions = visitorData.filter((v) => 
        v.searchKeyword === keyword && v.testCompleted
      ).length;
      const conversionRate = data.sessions.size > 0
        ? Math.round((testCompletions / data.sessions.size) * 100 * 10) / 10
        : 0;

      return {
        keyword,
        count: data.count,
        pages: Object.entries(data.pages)
          .map(([page, count]) => ({ page, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5),
        conversionRate,
        avgSessionDuration: avgDuration,
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, MAX_KEYWORD_ANALYSIS);
}

/**
 * 사용자 플로우 계산
 */
function calculateUserFlow(visitorData: VisitorData[]) {
  const sessionMap: Record<string, VisitorData[]> = {};
  visitorData.forEach((visitor) => {
    const sessionId = visitor.sessionId || 'unknown';
    if (!sessionMap[sessionId]) {
      sessionMap[sessionId] = [];
    }
    sessionMap[sessionId].push(visitor);
  });

  const entryPages: Record<string, number> = {};
  const exitPages: Record<string, number> = {};
  const pageTransitions: Record<string, number> = {};

  Object.values(sessionMap).forEach((sessionVisits) => {
    if (sessionVisits.length > 0) {
      const firstPage = sessionVisits[0].page;
      entryPages[firstPage] = (entryPages[firstPage] || 0) + 1;

      const lastPage = sessionVisits[sessionVisits.length - 1].page;
      exitPages[lastPage] = (exitPages[lastPage] || 0) + 1;

      for (let i = 0; i < sessionVisits.length - 1; i++) {
        const from = sessionVisits[i].page;
        const to = sessionVisits[i + 1].page;
        const transitionKey = `${from} → ${to}`;
        pageTransitions[transitionKey] = (pageTransitions[transitionKey] || 0) + 1;
      }
    }
  });

  return {
    entryPages: Object.entries(entryPages)
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, MAX_TOP_ITEMS),
    exitPages: Object.entries(exitPages)
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, MAX_TOP_ITEMS),
    pagePaths: [],
    commonPaths: Object.entries(pageTransitions)
      .map(([path, count]) => {
        const [from, to] = path.split(' → ');
        return { from, to, count };
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, MAX_COMMON_PATHS),
  };
}

/**
 * 참여도 지표 계산
 */
function calculateEngagementMetrics(visitorData: VisitorData[]) {
  const pageTimeMap: Record<string, number[]> = {};
  visitorData.forEach((visitor) => {
    if (visitor.visitDuration) {
      if (!pageTimeMap[visitor.page]) {
        pageTimeMap[visitor.page] = [];
      }
      pageTimeMap[visitor.page].push(visitor.visitDuration);
    }
  });

  const avgTimeOnPage = Object.entries(pageTimeMap)
    .map(([page, durations]) => ({
      page,
      seconds: durations.length > 0
        ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length)
        : 0,
    }))
    .sort((a, b) => b.seconds - a.seconds)
    .slice(0, MAX_TOP_ITEMS);

  const sessionMap: Record<string, VisitorData[]> = {};
  visitorData.forEach((visitor) => {
    const sessionId = visitor.sessionId || 'unknown';
    if (!sessionMap[sessionId]) {
      sessionMap[sessionId] = [];
    }
    sessionMap[sessionId].push(visitor);
  });

  const pagesPerSessionDist: Record<number, number> = {};
  Object.values(sessionMap).forEach((sessionVisits) => {
    const pageCount = sessionVisits.length;
    pagesPerSessionDist[pageCount] = (pagesPerSessionDist[pageCount] || 0) + 1;
  });

  const pagesPerSession = Object.entries(pagesPerSessionDist)
    .map(([pageCount, sessionCount]) => ({
      sessionCount,
      pageCount: parseInt(pageCount),
    }))
    .sort((a, b) => a.pageCount - b.pageCount);

  const uniqueSessions = new Set(visitorData.map((v) => v.sessionId));
  const returningSessions = Array.from(uniqueSessions).filter((sessionId) => {
    const sessionVisits = visitorData.filter((v) => v.sessionId === sessionId);
    return sessionVisits.some((v) => !v.isNewVisitor);
  }).length;
  const returnRate = uniqueSessions.size > 0
    ? Math.round((returningSessions / uniqueSessions.size) * 100 * 10) / 10
    : 0;

  return {
    avgTimeOnPage,
    pagesPerSession,
    returnRate,
  };
}

/**
 * 요일별 통계 계산
 */
function calculateWeeklyStats(visitorData: VisitorData[]) {
  const weeklyStatsMap: Record<string, number> = {
    '일요일': 0, '월요일': 0, '화요일': 0, '수요일': 0,
    '목요일': 0, '금요일': 0, '토요일': 0,
  };

  visitorData.forEach((visitor) => {
    const date = new Date(visitor.timestamp);
    const day = WEEKDAYS[date.getDay()];
    weeklyStatsMap[day]++;
  });

  return Object.entries(weeklyStatsMap)
    .map(([day, visitors]) => ({ day, visitors }));
}

/**
 * 월별 통계 계산
 */
function calculateMonthlyStats(visitorData: VisitorData[]) {
  const monthlyStatsMap: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const date = new Date(visitor.timestamp);
    const month = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
    monthlyStatsMap[month] = (monthlyStatsMap[month] || 0) + 1;
  });

  return Object.entries(monthlyStatsMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, visitors]) => ({ month, visitors }));
}

/**
 * 지역별 통계 계산
 */
function calculateRegionStats(visitorData: VisitorData[]) {
  const regionStatsMap: Record<string, number> = {};
  visitorData.forEach((visitor) => {
    const timezone = visitor.timezone || 'unknown';
    const region = REGION_MAP[timezone] || timezone.split('/')[1] || '기타';
    regionStatsMap[region] = (regionStatsMap[region] || 0) + 1;
  });

  return Object.entries(regionStatsMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, MAX_TOP_ITEMS)
    .map(([region, count]) => ({ region, count }));
}

/**
 * 테스트 전환율 계산
 */
function calculateTestConversionRate(visitorData: VisitorData[]) {
  return TEST_TYPES.map((testType) => {
    const started = visitorData.filter((v) => 
      v.page && v.page.includes(`/${testType}/`)
    ).length;
    const completed = visitorData.filter((v) => 
      v.testCompleted === testType || v.testType === testType
    ).length;
    const rate = started > 0 ? Math.round((completed / started) * 100 * 10) / 10 : 0;
    return { testType, started, completed, rate };
  }).filter((t) => t.started > 0);
}

/**
 * 트렌드 분석 계산
 */
function calculateTrendAnalysis(visitorData: VisitorData[]) {
  const now = new Date();
  const recent7DaysStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const previous7DaysStart = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  const recent7Days = visitorData.filter((v) => 
    new Date(v.timestamp) >= recent7DaysStart
  ).length;

  const previous7Days = visitorData.filter((v) => 
    new Date(v.timestamp) >= previous7DaysStart && 
    new Date(v.timestamp) < recent7DaysStart
  ).length;

  const change = recent7Days - previous7Days;
  const changePercent = previous7Days > 0
    ? Math.round((change / previous7Days) * 100 * 10) / 10
    : recent7Days > 0 ? 100 : 0;

  return {
    recent7Days,
    previous7Days,
    change,
    changePercent,
  };
}

/**
 * 데이터 품질 검증
 */
function calculateDataQuality(visitorData: VisitorData[]) {
  const issues: string[] = [];
  let validRecords = 0;
  let invalidRecords = 0;
  const recordIds = new Set<string>();
  let duplicateCount = 0;

  visitorData.forEach((visitor, index) => {
    if (!visitor.timestamp || !visitor.page || !visitor.sessionId) {
      invalidRecords++;
      issues.push(`레코드 ${index}: 필수 필드 누락`);
      return;
    }

    const timestamp = new Date(visitor.timestamp);
    if (isNaN(timestamp.getTime())) {
      invalidRecords++;
      issues.push(`레코드 ${index}: 잘못된 타임스탬프`);
      return;
    }

    if (timestamp > new Date()) {
      invalidRecords++;
      issues.push(`레코드 ${index}: 미래 날짜`);
      return;
    }

    if (recordIds.has(visitor.id)) {
      duplicateCount++;
    } else {
      recordIds.add(visitor.id);
    }

    validRecords++;
  });

  const sessionMap: Record<string, VisitorData[]> = {};
  visitorData.forEach((visitor) => {
    const sessionId = visitor.sessionId || 'unknown';
    if (!sessionMap[sessionId]) {
      sessionMap[sessionId] = [];
    }
    sessionMap[sessionId].push(visitor);
  });

  Object.entries(sessionMap).forEach(([sessionId, visits]) => {
    if (visits.length > 50) {
      issues.push(`세션 ${sessionId}: 비정상적으로 많은 페이지뷰 (${visits.length}개)`);
    }
  });

  return {
    totalRecords: visitorData.length,
    validRecords,
    invalidRecords,
    duplicateRecords: duplicateCount,
    issues: issues.slice(0, MAX_QUALITY_ISSUES),
  };
}

