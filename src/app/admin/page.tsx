'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, Legend } from 'recharts';
import { Eye, Users, TrendingUp, Search, Globe, Calendar, Monitor, Smartphone, Tablet, Globe2, Clock, FileText, Timer, ExternalLink, Activity, BarChart3, ArrowRight, ArrowLeft, Download, Filter, MapPin, Target, Zap, TrendingDown, CheckCircle, AlertTriangle, Map } from 'lucide-react';
import { getTestCompletionCount, getPopularTests } from '@/components/Tracking';
import { getStats as getCloudflareStats, getRealtimeStats, clearData as clearCloudflareData } from '@/lib/cloudflare-analytics';
import type { VisitorData, StatsData, DataStatus, CloudflareStatus } from '@/types/admin';
import { calculateStats } from '@/lib/admin/statistics';
import { EMPTY_STATS_DATA, ADMIN_PASSWORD, AUTO_REFRESH_INTERVAL } from '@/lib/admin/constants';
import { getReferrerDisplay, extractKeyword, formatDate } from '@/lib/admin/helpers';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [dataStatus, setDataStatus] = useState<DataStatus>({
    hasData: false,
    dataCount: 0,
    lastUpdate: null,
    error: null,
  });
  const [cloudflareStatus, setCloudflareStatus] = useState<CloudflareStatus>({
    connected: false,
    apiUrl: process.env.NEXT_PUBLIC_ANALYTICS_API_URL || null,
    lastCheck: null,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchStats();
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  // 실시간 통계 자동 업데이트 (30초마다)
  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(() => {
      fetchStats();
    }, 30000); // 30초마다 업데이트

    return () => clearInterval(interval);
  }, [isAuthenticated, password]);

  const fetchStats = async () => {
    setLoading(true);
    try {
      // 1. Cloudflare Workers API 시도
      const apiUrl = process.env.NEXT_PUBLIC_ANALYTICS_API_URL;
      if (apiUrl) {
        try {
          // Cloudflare 연결 상태 확인
          setCloudflareStatus((prev) => ({ 
            ...prev, 
            connected: true, 
            lastCheck: new Date().toISOString() 
          }));
          
          const cloudflareStats = await getCloudflareStats(password || ADMIN_PASSWORD);
          if (cloudflareStats && cloudflareStats.source === 'cloudflare-kv') {
            // Cloudflare 데이터와 localStorage 데이터 병합
            const localStats = await loadStatsFromLocalStorage();
            if (localStats) {
              // 두 데이터 소스 병합
              setStats({
                ...localStats,
                // Cloudflare에서 가져온 일일 통계 우선 사용
                dailyStats: cloudflareStats.dailyStats || localStats.dailyStats,
                totalVisitors: Math.max(cloudflareStats.totalVisitors || 0, localStats.totalVisitors || 0),
                source: 'cloudflare+local',
              });
      } else {
              // Cloudflare 데이터만 사용
              setStats({
                ...EMPTY_STATS_DATA,
                ...cloudflareStats,
              });
            }
            setLoading(false);
            return;
          }
        } catch (cloudflareError) {
          console.warn('Cloudflare API 호출 실패, localStorage 사용:', cloudflareError);
        }
      }

      // 2. localStorage에서 데이터 읽기 (폴백)
      loadStatsFromLocalStorage();
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('통계 로드 실패:', error);
      }
      loadStatsFromLocalStorage();
    }
    setLoading(false);
  };

  const loadStatsFromLocalStorage = async (): Promise<StatsData | null> => {
    try {
      const rawData = localStorage.getItem('visitorData');
      
      // 데이터 상태 확인
      if (!rawData || rawData === '[]') {
        setDataStatus({
          hasData: false,
          dataCount: 0,
          lastUpdate: null,
          error: 'localStorage에 방문자 데이터가 없습니다. 다른 페이지를 방문하면 데이터가 수집됩니다.',
        });
        setStats({ ...EMPTY_STATS_DATA });
        return null;
      }

      const visitorData = JSON.parse(rawData);
      
      // 데이터 유효성 검사
      if (!Array.isArray(visitorData)) {
        throw new Error('방문자 데이터 형식이 올바르지 않습니다.');
      }

      // 데이터 상태 업데이트
      const lastUpdate = visitorData.length > 0 
        ? new Date(visitorData[visitorData.length - 1].timestamp).toLocaleString('ko-KR')
        : null;
      
      setDataStatus({
        hasData: visitorData.length > 0,
        dataCount: visitorData.length,
        lastUpdate,
        error: null
      });

      // 통계 계산 (리팩토링된 함수 사용)
      const calculatedStats = calculateStats(visitorData as VisitorData[]);
      
      // 테스트 완료 통계 추가 (Tracking 컴포넌트에서 가져옴)
      calculatedStats.testCompletionStats = getPopularTests();
      
      setStats(calculatedStats);
      return calculatedStats;
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('localStorage 데이터 로드 실패:', error);
      }
      return null;
    }
  };

  // 헬퍼 함수들은 이미 helpers에서 import됨

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
          <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">관리자 대시보드</h1>
            <div className="mt-2 flex items-center gap-4 text-sm">
              {dataStatus.hasData ? (
                <>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    데이터 있음 ({dataStatus.dataCount}건)
                  </Badge>
                  {dataStatus.lastUpdate && (
                    <span className="text-muted-foreground">마지막 업데이트: {dataStatus.lastUpdate}</span>
                  )}
                </>
              ) : (
                <>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    데이터 없음
                  </Badge>
                  {dataStatus.error && (
                    <span className="text-muted-foreground">{dataStatus.error}</span>
                  )}
                </>
              )}
              {cloudflareStatus.apiUrl && (
                <Badge 
                  variant="outline" 
                  className={
                    cloudflareStatus.connected 
                      ? "bg-green-50 text-green-700 border-green-200" 
                      : "bg-yellow-50 text-yellow-700 border-yellow-200"
                  }
                >
                  {cloudflareStatus.connected ? '☁️ Cloudflare 연결됨' : '☁️ Cloudflare 미연결'}
                </Badge>
              )}
              {cloudflareStatus.lastCheck && (
                <span className="text-xs text-muted-foreground">
                  확인: {new Date(cloudflareStatus.lastCheck).toLocaleTimeString('ko-KR')}
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => {
                // 테스트 데이터 생성
                if (typeof window !== 'undefined' && confirm('테스트 데이터를 생성하시겠습니까?')) {
                  const testData = Array.from({ length: 10 }, (_, i) => {
                    const now = new Date();
                    now.setHours(now.getHours() - i);
                    return {
                      id: `test-${i}`,
                      timestamp: now.toISOString(),
                      referrer: i % 3 === 0 ? 'https://www.google.com/search?q=테니스' : 
                               i % 3 === 1 ? 'https://www.naver.com/search?q=테니스+실력' : '',
                      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                      ip: 'client-side',
                      page: i % 2 === 0 ? '/blog/tennis-footwork-science' : '/utility/ntrp-test',
                      searchKeyword: i % 3 === 0 ? '테니스' : i % 3 === 1 ? '테니스 실력' : undefined,
                      searchEngine: i % 3 === 0 ? 'Google' : i % 3 === 1 ? 'Naver' : undefined,
                      browser: 'Chrome',
                      browserVersion: '120.0',
                      os: 'Windows',
                      osVersion: '10',
                      deviceType: i % 2 === 0 ? 'desktop' : 'mobile' as const,
                      screenResolution: '1920x1080',
                      language: 'ko-KR',
                      timezone: 'Asia/Seoul',
                      pageType: i % 2 === 0 ? 'blog' : 'utility' as const,
                      sessionId: `session-${Math.floor(i / 2)}`,
                      isNewVisitor: i < 5
                    };
                  });
                  const existing = JSON.parse(localStorage.getItem('visitorData') || '[]');
                  localStorage.setItem('visitorData', JSON.stringify([...existing, ...testData]));
                  fetchStats();
                }
              }}
              variant="outline"
              className="text-xs"
            >
              테스트 데이터 생성
            </Button>
          <Button onClick={fetchStats} variant="outline">
            새로고침
          </Button>
          </div>
        </div>

        {dataStatus.error && !dataStatus.hasData && (
          <Card className="mb-8 border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="text-yellow-600 dark:text-yellow-400 text-xl">⚠️</div>
                <div>
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                    데이터가 없습니다
                  </h3>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-3">
                    {dataStatus.error}
                  </p>
                  <div className="text-sm text-yellow-700 dark:text-yellow-300">
                    <p className="mb-2"><strong>데이터 수집 방법:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>홈페이지나 다른 페이지를 방문하면 자동으로 데이터가 수집됩니다</li>
                      <li>관리자 페이지는 데이터 수집에서 제외됩니다</li>
                      <li>브라우저의 localStorage에 데이터가 저장됩니다</li>
                      <li>최대 1000개의 방문 기록이 저장됩니다</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

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

            {/* ========== 상세 통계 섹션 ========== */}
            
            {/* 유입 경로 상세 분석 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    검색 엔진별 상세
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {stats.detailedReferrerStats.searchEngines.map((engine, index) => (
                      <div key={engine.name} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{engine.name}</span>
                          <Badge variant="secondary">{engine.count}회</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          키워드 수: {engine.keywords}개
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    소셜 미디어 유입
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {stats.detailedReferrerStats.socialMedia.length > 0 ? (
                      stats.detailedReferrerStats.socialMedia.map((social) => (
                        <div key={social.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <span className="font-medium">{social.name}</span>
                          <Badge variant="secondary">{social.count}회</Badge>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">데이터가 없습니다</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    외부 도메인 유입
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.detailedReferrerStats.directDomains.map((domain) => (
                      <div key={domain.domain} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span className="text-sm truncate flex-1">{domain.domain}</span>
                        <Badge variant="outline" className="ml-2">{domain.count}회</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 키워드 상세 분석 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  키워드 상세 분석
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.keywordAnalysis.slice(0, 10).map((analysis) => (
                    <div key={analysis.keyword} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="font-semibold">
                            {analysis.keyword}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {analysis.count}회 검색
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground">
                            전환율: <span className="font-semibold text-blue-600">{analysis.conversionRate}%</span>
                          </span>
                          <span className="text-muted-foreground">
                            평균 세션: <span className="font-semibold">{Math.round(analysis.avgSessionDuration / 60)}분</span>
                          </span>
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">주요 방문 페이지: </span>
                        {analysis.pages.slice(0, 3).map((p, idx) => (
                          <span key={idx}>
                            <Badge variant="outline" className="mx-1">
                              {p.page.replace('/', '') || '홈'} ({p.count})
                            </Badge>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 사용자 행동 분석 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    진입 페이지 TOP 10
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.userFlow.entryPages.map((page, index) => (
                      <div key={page.page} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="w-6 h-6 p-0 text-xs flex items-center justify-center">
                            {index + 1}
                          </Badge>
                          <span className="text-sm">{page.page === '/' ? '홈' : page.page}</span>
                        </div>
                        <Badge variant="secondary">{page.count}회</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowLeft className="h-5 w-5" />
                    이탈 페이지 TOP 10
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.userFlow.exitPages.map((page, index) => (
                      <div key={page.page} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="w-6 h-6 p-0 text-xs flex items-center justify-center">
                            {index + 1}
                          </Badge>
                          <span className="text-sm">{page.page === '/' ? '홈' : page.page}</span>
                        </div>
                        <Badge variant="secondary">{page.count}회</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 페이지 이동 경로 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  주요 페이지 이동 경로
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {stats.userFlow.commonPaths.slice(0, 15).map((path, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Badge variant="outline" className="w-8 h-8 p-0 text-xs flex items-center justify-center">
                        {index + 1}
                      </Badge>
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-sm font-medium truncate">
                          {path.from === '/' ? '홈' : path.from}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium truncate">
                          {path.to === '/' ? '홈' : path.to}
                        </span>
                      </div>
                      <Badge variant="secondary">{path.count}회</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 참여도 지표 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    페이지별 평균 체류 시간
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.engagementMetrics.avgTimeOnPage.map((page, index) => (
                      <div key={page.page} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <Badge variant="outline" className="w-6 h-6 p-0 text-xs flex items-center justify-center">
                            {index + 1}
                          </Badge>
                          <span className="text-sm truncate">
                            {page.page === '/' ? '홈' : page.page}
                          </span>
                        </div>
                        <Badge variant="secondary">
                          {Math.floor(page.seconds / 60)}분 {page.seconds % 60}초
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    참여도 지표
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">재방문율</div>
                      <div className="text-2xl font-bold text-blue-600">
                        {stats.engagementMetrics.returnRate}%
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">세션당 페이지 수 분포</div>
                      <div className="space-y-2">
                        {stats.engagementMetrics.pagesPerSession.slice(0, 5).map((item) => (
                          <div key={item.pageCount} className="flex items-center justify-between">
                            <span className="text-sm">{item.pageCount}페이지</span>
                            <div className="flex items-center gap-2">
                              <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-blue-500"
                                  style={{ 
                                    width: `${(item.sessionCount / stats.sessionStats.totalSessions) * 100}%` 
                                  }}
                                />
                              </div>
                              <span className="text-sm text-muted-foreground w-12 text-right">
                                {item.sessionCount}회
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cloudflare 연동 상태 */}
            {cloudflareStatus.apiUrl && (
              <Card className="mb-8 border-blue-200 bg-blue-50 dark:bg-blue-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Cloudflare Workers 연동 상태
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">연결 상태</div>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          cloudflareStatus.connected ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <span className="font-semibold">
                          {cloudflareStatus.connected ? '연결됨' : '연결 안됨'}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">API URL</div>
                      <div className="text-sm font-mono truncate">{cloudflareStatus.apiUrl}</div>
                    </div>
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">마지막 확인</div>
                      <div className="text-sm">
                        {cloudflareStatus.lastCheck 
                          ? new Date(cloudflareStatus.lastCheck).toLocaleString('ko-KR')
                          : '아직 확인 안됨'}
                      </div>
                    </div>
                  </div>
                  {!cloudflareStatus.connected && cloudflareStatus.apiUrl && (
                    <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        ⚠️ Cloudflare Workers에 연결할 수 없습니다. 
                        Workers가 배포되어 있고 KV 네임스페이스가 설정되어 있는지 확인하세요.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* 트렌드 분석 */}
            <Card className="mb-8 border-purple-200 bg-purple-50 dark:bg-purple-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  최근 트렌드 분석
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">최근 7일</div>
                    <div className="text-2xl font-bold">{stats.trendAnalysis.recent7Days}명</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">이전 7일</div>
                    <div className="text-2xl font-bold">{stats.trendAnalysis.previous7Days}명</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">변화율</div>
                    <div className={`text-2xl font-bold flex items-center gap-2 ${
                      stats.trendAnalysis.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stats.trendAnalysis.changePercent >= 0 ? (
                        <TrendingUp className="h-5 w-5" />
                      ) : (
                        <TrendingDown className="h-5 w-5" />
                      )}
                      {stats.trendAnalysis.changePercent > 0 ? '+' : ''}{stats.trendAnalysis.changePercent}%
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      ({stats.trendAnalysis.change > 0 ? '+' : ''}{stats.trendAnalysis.change}명)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 데이터 품질 검증 */}
            <Card className="mb-8 border-orange-200 bg-orange-50 dark:bg-orange-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  데이터 품질 검증
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">총 레코드</div>
                    <div className="text-xl font-bold">{stats.dataQuality.totalRecords}</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">유효 레코드</div>
                    <div className="text-xl font-bold text-green-600">{stats.dataQuality.validRecords}</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">무효 레코드</div>
                    <div className="text-xl font-bold text-red-600">{stats.dataQuality.invalidRecords}</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">중복 레코드</div>
                    <div className="text-xl font-bold text-yellow-600">{stats.dataQuality.duplicateRecords}</div>
                  </div>
                </div>
                {stats.dataQuality.issues.length > 0 && (
                  <div className="mt-4">
                    <div className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      발견된 이슈 ({stats.dataQuality.issues.length}개)
                    </div>
                    <div className="max-h-32 overflow-y-auto space-y-1">
                      {stats.dataQuality.issues.map((issue, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground p-2 bg-white dark:bg-gray-800 rounded">
                          {issue}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 요일별 및 월별 통계 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    요일별 방문 통계
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={stats.weeklyStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="visitors" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    월별 방문 통계
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={stats.monthlyStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="visitors" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* 지역별 통계 및 테스트 전환율 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Map className="h-5 w-5" />
                    지역별 방문 통계
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.regionStats.map((region, index) => (
                      <div key={region.region} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="w-6 h-6 p-0 text-xs flex items-center justify-center">
                            {index + 1}
                          </Badge>
                          <span className="text-sm font-medium">{region.region}</span>
                        </div>
                        <Badge variant="secondary">{region.count}회</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    테스트 전환율
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {stats.testConversionRate.map((test) => (
                      <div key={test.testType} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold capitalize">
                            {test.testType.replace('-', ' ')}
                          </span>
                          <Badge variant={test.rate >= 50 ? 'default' : test.rate >= 30 ? 'secondary' : 'outline'}>
                            {test.rate}%
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>시작: {test.started}명</span>
                          <span>완료: {test.completed}명</span>
                        </div>
                        <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all"
                            style={{ width: `${test.rate}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    {stats.testConversionRate.length === 0 && (
                      <p className="text-sm text-muted-foreground text-center py-4">테스트 데이터가 없습니다</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 데이터 상태 및 디버깅 정보 */}
            <Card className="mb-8 border-blue-200 bg-blue-50 dark:bg-blue-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  데이터 상태 확인
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">총 데이터 수</div>
                    <div className="text-2xl font-bold">{dataStatus.dataCount}건</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">데이터 상태</div>
                    <div className="text-2xl font-bold">
                      {dataStatus.hasData ? (
                        <span className="text-green-600">정상</span>
                      ) : (
                        <span className="text-yellow-600">없음</span>
                      )}
                    </div>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">마지막 업데이트</div>
                    <div className="text-sm font-medium">
                      {dataStatus.lastUpdate || '없음'}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      const rawData = localStorage.getItem('visitorData');
                      if (rawData) {
                        const data = JSON.parse(rawData);
                        console.log('방문자 데이터:', data);
                        console.log('데이터 개수:', data.length);
                        console.log('최신 데이터:', data[data.length - 1]);
                        
                        // 데이터 검증 결과 출력
                        const validation = {
                          총레코드: data.length,
                          유효레코드: data.filter((v: any) => v.timestamp && v.page && v.sessionId).length,
                          최신기록: data.length > 0 ? new Date(data[data.length - 1].timestamp).toLocaleString('ko-KR') : '없음',
                          페이지타입분포: data.reduce((acc: any, v: any) => {
                            acc[v.pageType || 'other'] = (acc[v.pageType || 'other'] || 0) + 1;
                            return acc;
                          }, {}),
                          검색엔진분포: data.reduce((acc: any, v: any) => {
                            if (v.searchEngine) {
                              acc[v.searchEngine] = (acc[v.searchEngine] || 0) + 1;
                            }
                            return acc;
                          }, {}),
                          테스트완료: data.filter((v: any) => v.testCompleted).length
                        };
                        console.log('데이터 검증 결과:', validation);
                        
                        alert(`콘솔에 데이터를 출력했습니다. 개발자 도구(F12)를 확인하세요.\n\n데이터 개수: ${data.length}건\n유효 레코드: ${validation.유효레코드}건\n최신 기록: ${validation.최신기록}`);
                      } else {
                        alert('localStorage에 데이터가 없습니다.\n\n다른 페이지를 방문하면 데이터가 수집됩니다.');
                      }
                    }}
                    variant="outline"
                    size="sm"
                  >
                    콘솔에 데이터 출력
                  </Button>
                  <Button
                    onClick={() => {
                      // 실제 데이터인지 확인하는 테스트
                      const rawData = localStorage.getItem('visitorData');
                      if (!rawData || rawData === '[]') {
                        alert('데이터가 없습니다. 다른 페이지를 방문하거나 테스트 데이터를 생성하세요.');
                        return;
                      }
                      
                      const data = JSON.parse(rawData);
                      const testDataCount = data.filter((v: any) => v.id && v.id.startsWith('test-')).length;
                      const realDataCount = data.length - testDataCount;
                      
                      const message = `
데이터 분석 결과:

총 레코드: ${data.length}건
- 실제 데이터: ${realDataCount}건
- 테스트 데이터: ${testDataCount}건

${testDataCount > 0 ? '⚠️ 테스트 데이터가 포함되어 있습니다.' : '✅ 실제 방문 데이터만 있습니다.'}

데이터 수집 상태:
- Tracking 컴포넌트: ${typeof window !== 'undefined' ? '활성화' : '비활성화'}
- localStorage: ${rawData ? '데이터 있음' : '데이터 없음'}
                      `.trim();
                      
                      alert(message);
                    }}
                    variant="outline"
                    size="sm"
                    className="bg-green-50 hover:bg-green-100"
                  >
                    데이터 검증
                  </Button>
                  <Button
                    onClick={async () => {
                      if (confirm('모든 방문자 데이터를 삭제하시겠습니까?')) {
                        // Cloudflare Workers API 시도
                        const apiUrl = process.env.NEXT_PUBLIC_ANALYTICS_API_URL;
                        if (apiUrl) {
                          try {
                            await clearCloudflareData(password || '1234');
                            alert('Cloudflare 데이터가 삭제되었습니다.');
                          } catch (error) {
                            console.error('Cloudflare 데이터 삭제 실패:', error);
                          }
                        }
                        
                        // localStorage 삭제
                        localStorage.removeItem('visitorData');
                        localStorage.removeItem('tennis_session_id');
                        localStorage.removeItem('tennis_session_expiry');
                        localStorage.removeItem('tennis_first_visit');
                        
                        // 테스트 완료 카운터 삭제
                        const testTypes = ['ntrp-test', 'play-style-test', 'flexibility-test', 'reaction-test',
                                          'focus-training', 'string-tension', 'equipment-recommendation',
                                          'training-planner', 'match-analyzer', 'injury-risk', 'nutrition-guide'];
                        testTypes.forEach(testType => {
                          localStorage.removeItem(`test_completion_${testType}`);
                        });
                        
                        alert('데이터가 삭제되었습니다. 페이지를 새로고침합니다.');
                        window.location.reload();
                      }
                    }}
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                  >
                    데이터 초기화
                  </Button>
                  <Button
                    onClick={async () => {
                      try {
                        const apiUrl = process.env.NEXT_PUBLIC_ANALYTICS_API_URL;
                        if (apiUrl) {
                          const realtime = await getRealtimeStats(password || '1234');
                          if (realtime) {
                            alert(`실시간 통계:\n\n마지막 업데이트: ${realtime.lastUpdate || '없음'}\n오늘 방문자: ${realtime.todayCount}명`);
                          } else {
                            alert('실시간 통계를 가져올 수 없습니다.');
                          }
                        } else {
                          alert('Cloudflare Analytics API가 설정되지 않았습니다.\n환경 변수 NEXT_PUBLIC_ANALYTICS_API_URL를 확인하세요.');
                        }
                      } catch (error) {
                        alert(`실시간 통계 조회 실패: ${error}`);
                      }
                    }}
                    variant="outline"
                    size="sm"
                    className="bg-blue-50 hover:bg-blue-100"
                  >
                    실시간 통계
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 데이터 Export 버튼 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  데이터 내보내기
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    onClick={() => {
                      const dataStr = JSON.stringify(stats, null, 2);
                      const dataBlob = new Blob([dataStr], { type: 'application/json' });
                      const url = URL.createObjectURL(dataBlob);
                      const link = document.createElement('a');
                      link.href = url;
                      link.download = `tennis-stats-${new Date().toISOString().split('T')[0]}.json`;
                      link.click();
                    }}
                    variant="outline"
                    disabled={!dataStatus.hasData}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    JSON 다운로드
                  </Button>
                  <Button 
                    onClick={() => {
                      const csv = [
                        ['항목', '값'],
                        ['총 방문자', stats.totalVisitors],
                        ['고유 방문자', stats.uniqueVisitors],
                        ['신규 방문자', stats.newVsReturning.new],
                        ['리턴 방문자', stats.newVsReturning.returning],
                        ['총 세션', stats.sessionStats.totalSessions],
                        ['평균 페이지/세션', stats.sessionStats.avgPagesPerSession],
                        ['평균 세션 시간', `${stats.sessionStats.avgSessionDuration}분`],
                        ['이탈률', `${stats.bounceRate}%`],
                        ['재방문율', `${stats.engagementMetrics.returnRate}%`],
                      ].map(row => row.join(',')).join('\n');
                      const dataBlob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                      const url = URL.createObjectURL(dataBlob);
                      const link = document.createElement('a');
                      link.href = url;
                      link.download = `tennis-stats-${new Date().toISOString().split('T')[0]}.csv`;
                      link.click();
                    }}
                    variant="outline"
                    disabled={!dataStatus.hasData}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    CSV 다운로드
                  </Button>
                  <Button
                    onClick={() => {
                      const rawData = localStorage.getItem('visitorData');
                      if (rawData) {
                        const dataBlob = new Blob([rawData], { type: 'application/json' });
                        const url = URL.createObjectURL(dataBlob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `visitor-data-raw-${new Date().toISOString().split('T')[0]}.json`;
                        link.click();
                      } else {
                        alert('원본 데이터가 없습니다.');
                      }
                    }}
                    variant="outline"
                    disabled={!dataStatus.hasData}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    원본 데이터 다운로드
                  </Button>
                </div>
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
