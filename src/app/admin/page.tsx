'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Eye, Users, TrendingUp, Search, Globe, Calendar } from 'lucide-react';

interface VisitorData {
  id: string;
  timestamp: string;
  referrer: string;
  userAgent: string;
  ip: string;
  searchKeyword?: string;
  searchEngine?: string;
  page: string;
}

interface StatsData {
  totalVisitors: number;
  uniqueVisitors: number;
  topReferrers: { name: string; value: number }[];
  topKeywords: { name: string; value: number }[];
  dailyStats: { date: string; visitors: number }[];
  recentVisitors: VisitorData[];
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

      setStats({
        totalVisitors,
        uniqueVisitors: uniqueIPs,
        topReferrers,
        topKeywords,
        dailyStats: dailyStatsArray,
        recentVisitors
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                      <TableHead>유입경로</TableHead>
                      <TableHead>검색어</TableHead>
                      <TableHead>검색엔진</TableHead>
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
                          {getReferrerDisplay(visitor.referrer)}
                        </TableCell>
                        <TableCell className="text-sm">
                          {extractKeyword(visitor.referrer) || '-'}
                        </TableCell>
                        <TableCell className="text-sm">
                          {getSearchEngine(visitor.referrer) || '-'}
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
