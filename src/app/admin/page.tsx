'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, Legend } from 'recharts';
import { Eye, Users, TrendingUp, Search, Globe, Calendar, Monitor, Smartphone, Tablet, Globe2, Clock, FileText, Timer, ExternalLink, Activity, BarChart3 } from 'lucide-react';
import { getTestCompletionCount, getPopularTests } from '@/components/Tracking';

interface VisitorData {
  id: string;
  timestamp: string;
  referrer: string;
  userAgent: string;
  ip: string;
  page: string;
  searchKeyword?: string;
  searchEngine?: string;
  // 추가 세분화 데이터
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
  // 테스트 관련 데이터
  testCompleted?: string;
  testResult?: any;
  testType?: string;
}

interface StatsData {
  totalVisitors: number;
  uniqueVisitors: number;
  topReferrers: { name: string; value: number }[];
  topKeywords: { name: string; value: number }[];
  dailyStats: { date: string; visitors: number }[];
  recentVisitors: VisitorData[];
  // 추가 통계 데이터
  browserStats: { name: string; value: number }[];
  osStats: { name: string; value: number }[];
  deviceStats: { name: string; value: number }[];
  pageTypeStats: { name: string; value: number }[];
  languageStats: { name: string; value: number }[];
  timezoneStats: { name: string; value: number }[];
  testCompletionStats: { testType: string; count: number }[];
  newVsReturning: { new: number; returning: number };
  // 새로운 통계 데이터
  popularPages: { page: string; count: number }[];
  hourlyStats: { hour: number; visitors: number }[];
  searchEngineStats: { name: string; value: number }[];
  resolutionStats: { name: string; value: number }[];
  sessionStats: { totalSessions: number; avgPagesPerSession: number; avgSessionDuration: number };
  bounceRate: number;
  referrerCategoryStats: { category: string; count: number }[];
  topBlogPosts: { slug: string; count: number }[];
  topUtilities: { slug: string; count: number }[];
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1234') {
      setIsAuthenticated(true);
      fetchStats();
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  const fetchStats = async () => {
    setLoading(true);
    try {
      // 서버 사이드 API 시도
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      } else {
        // API가 없는 경우 localStorage에서 데이터 읽기
        loadStatsFromLocalStorage();
      }
    } catch (error) {
      console.error('API 호출 실패, localStorage에서 데이터 로드:', error);
      loadStatsFromLocalStorage();
    }
    setLoading(false);
  };

  const loadStatsFromLocalStorage = () => {
    try {
      const visitorData = JSON.parse(localStorage.getItem('visitorData') || '[]');

      // 통계 계산
      const totalVisitors = visitorData.length;
      const uniqueIPs = new Set(visitorData.map((v: any) => v.ip)).size;

      // 유입 경로별 통계
      const referrerStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const domain = getReferrerDisplay(visitor.referrer);
        referrerStats[domain] = (referrerStats[domain] || 0) + 1;
      });

      const topReferrers = Object.entries(referrerStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 10)
        .map(([name, value]) => ({ name, value }));

      // 검색 키워드별 통계
      const keywordStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const keyword = visitor.searchKeyword;
        if (keyword) {
          keywordStats[keyword] = (keywordStats[keyword] || 0) + 1;
        }
      });

      const topKeywords = Object.entries(keywordStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 20)
        .map(([name, value]) => ({ name, value }));

      // 일일 통계
      const dailyStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const date = new Date(visitor.timestamp).toISOString().split('T')[0];
        dailyStats[date] = (dailyStats[date] || 0) + 1;
      });

      const dailyStatsArray = Object.entries(dailyStats)
        .sort(([a], [b]) => a.localeCompare(b))
        .slice(-30)
        .map(([date, visitors]) => ({ date, visitors }));

      // 최근 방문자
      const recentVisitors = visitorData
        .sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 100);

      // 브라우저 통계
      const browserStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const browser = visitor.browser || 'Unknown';
        browserStats[browser] = (browserStats[browser] || 0) + 1;
      });

      const browserStatsArray = Object.entries(browserStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 10)
        .map(([name, value]) => ({ name, value }));

      // OS 통계
      const osStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const os = visitor.os || 'Unknown';
        osStats[os] = (osStats[os] || 0) + 1;
      });

      const osStatsArray = Object.entries(osStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 10)
        .map(([name, value]) => ({ name, value }));

      // 디바이스 통계
      const deviceStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const deviceType = visitor.deviceType || 'desktop';
        deviceStats[deviceType] = (deviceStats[deviceType] || 0) + 1;
      });

      const deviceStatsArray = Object.entries(deviceStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .map(([name, value]) => ({ name, value }));

      // 페이지 타입 통계
      const pageTypeStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const pageType = visitor.pageType || 'other';
        pageTypeStats[pageType] = (pageTypeStats[pageType] || 0) + 1;
      });

      const pageTypeStatsArray = Object.entries(pageTypeStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .map(([name, value]) => ({ name, value }));

      // 언어 통계
      const languageStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const language = visitor.language || 'unknown';
        languageStats[language] = (languageStats[language] || 0) + 1;
      });

      const languageStatsArray = Object.entries(languageStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 10)
        .map(([name, value]) => ({ name, value }));

      // 타임존 통계
      const timezoneStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const timezone = visitor.timezone || 'unknown';
        timezoneStats[timezone] = (timezoneStats[timezone] || 0) + 1;
      });

      const timezoneStatsArray = Object.entries(timezoneStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 10)
        .map(([name, value]) => ({ name, value }));

      // 테스트 완료 통계 (Tracking 컴포넌트에서 가져옴)
      const testCompletionStats = getPopularTests();

      // 신규 vs 리턴 방문자
      const newVisitorCount = visitorData.filter((visitor: any) => visitor.isNewVisitor).length;
      const returningVisitorCount = totalVisitors - newVisitorCount;

      // 인기 페이지 통계
      const pageStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const page = visitor.page || '/';
        pageStats[page] = (pageStats[page] || 0) + 1;
      });
      const popularPages = Object.entries(pageStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 20)
        .map(([page, count]) => ({ page, count }));

      // 시간대별 통계 (0-23시)
      const hourlyStats: { [key: number]: number } = {};
      visitorData.forEach((visitor: any) => {
        const hour = new Date(visitor.timestamp).getHours();
        hourlyStats[hour] = (hourlyStats[hour] || 0) + 1;
      });
      const hourlyStatsArray = Array.from({ length: 24 }, (_, i) => ({
        hour: i,
        visitors: hourlyStats[i] || 0
      }));

      // 검색 엔진별 통계
      const searchEngineStatsMap: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const engine = visitor.searchEngine || '기타';
        searchEngineStatsMap[engine] = (searchEngineStatsMap[engine] || 0) + 1;
      });
      const searchEngineStats = Object.entries(searchEngineStatsMap)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .map(([name, value]) => ({ name, value }));

      // 해상도별 통계
      const resolutionStatsMap: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        const resolution = visitor.screenResolution || 'unknown';
        resolutionStatsMap[resolution] = (resolutionStatsMap[resolution] || 0) + 1;
      });
      const resolutionStats = Object.entries(resolutionStatsMap)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 10)
        .map(([name, value]) => ({ name, value }));

      // 세션 통계
      const sessionMap: { [key: string]: VisitorData[] } = {};
      visitorData.forEach((visitor: any) => {
        const sessionId = visitor.sessionId || 'unknown';
        if (!sessionMap[sessionId]) {
          sessionMap[sessionId] = [];
        }
        sessionMap[sessionId].push(visitor);
      });
      const totalSessions = Object.keys(sessionMap).length;
      const totalPagesInSessions = visitorData.length;
      const avgPagesPerSession = totalSessions > 0 ? Math.round((totalPagesInSessions / totalSessions) * 10) / 10 : 0;
      
      // 평균 세션 길이 계산 (세션당 평균 체류 시간, visitDuration이 있으면 사용)
      const sessionDurations: number[] = [];
      Object.values(sessionMap).forEach((sessionVisits: any[]) => {
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

      // 이탈률 계산 (1페이지만 본 세션 비율)
      const singlePageSessions = Object.values(sessionMap).filter((session: any[]) => session.length === 1).length;
      const bounceRate = totalSessions > 0 ? Math.round((singlePageSessions / totalSessions) * 100) : 0;

      // 리퍼러 카테고리 통계
      const referrerCategoryMap: { [key: string]: number } = {
        '검색엔진': 0,
        '소셜미디어': 0,
        '직접접속': 0,
        '기타': 0
      };
      visitorData.forEach((visitor: any) => {
        const referrer = visitor.referrer || '';
        if (!referrer || referrer === '') {
          referrerCategoryMap['직접접속']++;
        } else {
          try {
            const url = new URL(referrer);
            const hostname = url.hostname.toLowerCase();
            if (hostname.includes('google') || hostname.includes('naver') || hostname.includes('daum') || hostname.includes('bing') || hostname.includes('yahoo')) {
              referrerCategoryMap['검색엔진']++;
            } else if (hostname.includes('facebook') || hostname.includes('twitter') || hostname.includes('instagram') || hostname.includes('linkedin') || hostname.includes('youtube')) {
              referrerCategoryMap['소셜미디어']++;
            } else {
              referrerCategoryMap['기타']++;
            }
          } catch {
            referrerCategoryMap['기타']++;
          }
        }
      });
      const referrerCategoryStats = Object.entries(referrerCategoryMap)
        .map(([category, count]) => ({ category, count }));

      // 인기 블로그 포스트 통계
      const blogPostStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        if (visitor.page && visitor.page.startsWith('/blog/')) {
          const slug = visitor.page.replace('/blog/', '');
          blogPostStats[slug] = (blogPostStats[slug] || 0) + 1;
        }
      });
      const topBlogPosts = Object.entries(blogPostStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 10)
        .map(([slug, count]) => ({ slug, count }));

      // 인기 유틸리티 통계
      const utilityStats: { [key: string]: number } = {};
      visitorData.forEach((visitor: any) => {
        if (visitor.page && visitor.page.startsWith('/utility/')) {
          const slug = visitor.page.replace('/utility/', '').split('/')[0];
          if (slug && slug !== '') {
            utilityStats[slug] = (utilityStats[slug] || 0) + 1;
          }
        }
      });
      const topUtilities = Object.entries(utilityStats)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 10)
        .map(([slug, count]) => ({ slug, count }));

      setStats({
        totalVisitors,
        uniqueVisitors: uniqueIPs,
        topReferrers,
        topKeywords,
        dailyStats: dailyStatsArray,
        recentVisitors,
        browserStats: browserStatsArray,
        osStats: osStatsArray,
        deviceStats: deviceStatsArray,
        pageTypeStats: pageTypeStatsArray,
        languageStats: languageStatsArray,
        timezoneStats: timezoneStatsArray,
        testCompletionStats,
        newVsReturning: { new: newVisitorCount, returning: returningVisitorCount },
        popularPages,
        hourlyStats: hourlyStatsArray,
        searchEngineStats,
        resolutionStats,
        sessionStats: {
          totalSessions,
          avgPagesPerSession,
          avgSessionDuration
        },
        bounceRate,
        referrerCategoryStats,
        topBlogPosts,
        topUtilities
      });
    } catch (error) {
      console.error('localStorage 데이터 로드 실패:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ko-KR');
  };

  const getReferrerDisplay = (referrer: string) => {
    if (!referrer || referrer === '') return '직접접속';
    try {
      const url = new URL(referrer);
      return url.hostname;
    } catch {
      return referrer;
    }
  };

  const getSearchEngine = (referrer: string) => {
    if (!referrer) return null;
    try {
      const url = new URL(referrer);
      if (url.hostname.includes('google')) return 'Google';
      if (url.hostname.includes('naver')) return 'Naver';
      if (url.hostname.includes('daum')) return 'Daum';
      if (url.hostname.includes('bing')) return 'Bing';
      return '기타';
    } catch {
      return null;
    }
  };

  const extractKeyword = (referrer: string) => {
    if (!referrer) return null;
    try {
      const url = new URL(referrer);
      const params = url.searchParams;
      // Google, Naver, Daum 등의 검색 파라미터
      const keyword = params.get('q') || params.get('query') || params.get('p');
      return keyword;
    } catch {
      return null;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">관리자 로그인</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>통계를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">관리자 대시보드</h1>
          <Button onClick={fetchStats} variant="outline">
            새로고침
          </Button>
        </div>

        {stats && (
          <>
            {/* 주요 통계 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">총 방문자</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalVisitors.toLocaleString()}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">고유 방문자</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.uniqueVisitors.toLocaleString()}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">신규 방문자</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.newVsReturning.new.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    {stats.totalVisitors > 0 ? Math.round((stats.newVsReturning.new / stats.totalVisitors) * 100) : 0}%
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">평균 일일 방문</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {stats.dailyStats.length > 0
                      ? Math.round(stats.totalVisitors / stats.dailyStats.length)
                      : 0}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">총 세션</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.sessionStats.totalSessions.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    페이지/세션: {stats.sessionStats.avgPagesPerSession}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">이탈률</CardTitle>
                  <Timer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.bounceRate}%</div>
                  <p className="text-xs text-muted-foreground">
                    평균 세션: {stats.sessionStats.avgSessionDuration}분
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* 일일 방문자 차트 */}
              <Card>
                <CardHeader>
                  <CardTitle>일일 방문자 추이</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={stats.dailyStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="visitors" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* 유입 경로 파이 차트 */}
              <Card>
                <CardHeader>
                  <CardTitle>유입 경로</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={stats.topReferrers}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {stats.topReferrers.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={`hsl(${index * 45}, 70%, 50%)`} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* 검색 키워드 순위 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  인기 검색 키워드
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stats.topKeywords.slice(0, 12).map((keyword, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{index + 1}</Badge>
                        <span className="text-sm font-medium">{keyword.name}</span>
                      </div>
                      <Badge variant="outline">{keyword.value}회</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 추가 통계 차트들 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {/* 브라우저 통계 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    브라우저 통계
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={stats.browserStats}
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${((percent as number) * 100).toFixed(0)}%`}
                      >
                        {stats.browserStats.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={`hsl(${index * 45}, 70%, 50%)`} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* 디바이스 통계 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    디바이스 통계
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={stats.deviceStats}
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${((percent as number) * 100).toFixed(0)}%`}
                      >
                        {stats.deviceStats.map((entry, index) => {
                          const colors = { desktop: '#3B82F6', mobile: '#10B981', tablet: '#F59E0B' };
                          return (
                            <Cell key={`cell-${index}`} fill={colors[entry.name as keyof typeof colors] || '#8884d8'} />
                          );
                        })}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* 인기 테스트 순위 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    인기 테스트 순위
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {stats.testCompletionStats.slice(0, 5).map((test, index) => (
                      <div key={test.testType} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="w-6 h-6 p-0 text-xs">
                            {index + 1}
                          </Badge>
                          <span className="text-sm font-medium capitalize">
                            {test.testType.replace('-', ' ')}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-blue-600">
                          {test.count}회
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 페이지 타입 통계 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    페이지 타입 통계
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={stats.pageTypeStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* 언어 통계 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe2 className="h-5 w-5" />
                    언어 통계
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.languageStats.slice(0, 5).map((lang) => (
                      <div key={lang.name} className="flex justify-between items-center">
                        <span className="text-sm">{lang.name}</span>
                        <span className="text-sm font-bold">{lang.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 타임존 통계 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    타임존 통계
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.timezoneStats.slice(0, 5).map((tz) => (
                      <div key={tz.name} className="flex justify-between items-center">
                        <span className="text-sm">{tz.name}</span>
                        <span className="text-sm font-bold">{tz.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 인기 페이지 및 시간대 통계 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* 인기 페이지 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    인기 페이지 TOP 10
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {stats.popularPages.slice(0, 10).map((page, index) => (
                      <div key={page.page} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <Badge variant="secondary" className="w-8 h-8 p-0 text-xs flex items-center justify-center">
                            {index + 1}
                          </Badge>
                          <span className="text-sm font-medium truncate">
                            {page.page === '/' ? '홈' : page.page}
                          </span>
                        </div>
                        <Badge variant="outline" className="ml-2">
                          {page.count}회
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 시간대별 방문 통계 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    시간대별 방문 패턴
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={stats.hourlyStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="hour" 
                        tickFormatter={(value) => `${value}시`}
                      />
                      <YAxis />
                      <Tooltip 
                        labelFormatter={(value) => `${value}시`}
                        formatter={(value: any) => [`${value}명`, '방문자']}
                      />
                      <Area type="monotone" dataKey="visitors" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* 검색 엔진 및 리퍼러 카테고리 통계 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* 검색 엔진 통계 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    검색 엔진별 통계
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={stats.searchEngineStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* 리퍼러 카테고리 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    유입 경로 카테고리
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={stats.referrerCategoryStats}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                        label={({ category, percent }) => `${category} ${((percent as number) * 100).toFixed(0)}%`}
                      >
                        {stats.referrerCategoryStats.map((entry, index) => {
                          const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
                          return (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                          );
                        })}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* 인기 블로그 포스트 및 인기 유틸리티 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* 인기 블로그 포스트 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    인기 블로그 포스트
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.topBlogPosts.length > 0 ? (
                      stats.topBlogPosts.map((post, index) => (
                        <div key={post.slug} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <Badge variant="outline" className="w-6 h-6 p-0 text-xs flex items-center justify-center">
                              {index + 1}
                            </Badge>
                            <span className="text-sm truncate">{post.slug}</span>
                          </div>
                          <Badge variant="secondary">{post.count}회</Badge>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">데이터가 없습니다</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* 인기 유틸리티 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    인기 유틸리티
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.topUtilities.length > 0 ? (
                      stats.topUtilities.map((utility, index) => (
                        <div key={utility.slug} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <Badge variant="outline" className="w-6 h-6 p-0 text-xs flex items-center justify-center">
                              {index + 1}
                            </Badge>
                            <span className="text-sm truncate">{utility.slug}</span>
                          </div>
                          <Badge variant="secondary">{utility.count}회</Badge>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">데이터가 없습니다</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 해상도 통계 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  화면 해상도 통계
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={stats.resolutionStats} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* 최근 방문자 테이블 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  최근 방문자 (최근 50건)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>시간</TableHead>
                      <TableHead>페이지</TableHead>
                      <TableHead>브라우저</TableHead>
                      <TableHead>디바이스</TableHead>
                      <TableHead>유입경로</TableHead>
                      <TableHead>검색어</TableHead>
                      <TableHead>OS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stats.recentVisitors.slice(0, 50).map((visitor) => (
                      <TableRow key={visitor.id}>
                        <TableCell className="text-sm">
                          {formatDate(visitor.timestamp)}
                        </TableCell>
                        <TableCell className="text-sm">
                          {visitor.page.replace('/', '') || '홈'}
                        </TableCell>
                        <TableCell className="text-sm">
                          {visitor.browser || 'Unknown'}
                        </TableCell>
                        <TableCell className="text-sm">
                          <Badge variant="outline" className={
                            visitor.deviceType === 'mobile' ? 'border-green-500 text-green-700' :
                            visitor.deviceType === 'tablet' ? 'border-blue-500 text-blue-700' :
                            'border-gray-500 text-gray-700'
                          }>
                            {visitor.deviceType === 'mobile' ? '📱' :
                             visitor.deviceType === 'tablet' ? '📱' : '🖥️'} {visitor.deviceType}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">
                          {getReferrerDisplay(visitor.referrer)}
                        </TableCell>
                        <TableCell className="text-sm">
                          {extractKeyword(visitor.referrer) || '-'}
                        </TableCell>
                        <TableCell className="text-sm">
                          {visitor.os || 'Unknown'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
