'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { getDeviceId } from '@/lib/device';
import { levelToNum } from '@/lib/questions';

const COLORS = ['#10b981', '#60a5fa', '#f59e0b', '#ef4444', '#a78bfa', '#14b8a6', '#22c55e', '#94a3b8'];

export default function StatsPage() {
  const [recent, setRecent] = useState<any[]>([]);
  const [mine, setMine] = useState<any[]>([]);
  const [dist, setDist] = useState<{ bucket: string; count: number }[]>([]);
  const [trend, setTrend] = useState<{ date: string; avg: number }[]>([]);
  const [chars, setChars] = useState<{ name: string; value: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const device = getDeviceId();
        
        if (isSupabaseConfigured()) {
          // Supabase가 설정된 경우
          // 최근 10개 전역 기록
          const { data: r10 } = await supabase
            .from('ntrp_results')
            .select('created_at, score, level, character')
            .order('created_at', { ascending: false })
            .limit(10);
          setRecent(r10 || []);

          // 내 기기 히스토리
          const { data: my10 } = await supabase
            .from('ntrp_results')
            .select('created_at, score, level, character')
            .eq('device_id', device)
            .order('created_at', { ascending: false })
            .limit(10);
          setMine(my10 || []);
        } else {
          // Supabase가 설정되지 않은 경우 로컬 스토리지 사용
          const localResults = JSON.parse(localStorage.getItem('ntrp_results') || '[]');
          const myResults = localResults.filter((r: any) => r.device_id === device);
          
          setRecent(localResults.slice(0, 10));
          setMine(myResults.slice(0, 10));
        }

        // 통계 데이터 설정
        if (isSupabaseConfigured()) {
          // 통계 데이터 (최근 100개)
          const { data: all100 } = await supabase
            .from('ntrp_results')
            .select('score, level, character, created_at')
            .order('created_at', { ascending: false })
            .limit(100);

          // 점수 분포 계산
          const buckets = [
            { bucket: '15-25', count: 0 },
            { bucket: '26-35', count: 0 },
            { bucket: '36-45', count: 0 },
            { bucket: '46-55', count: 0 },
            { bucket: '56-65', count: 0 },
            { bucket: '66-75', count: 0 }
          ];

          const charMapCount: Record<string, number> = {};
          const trendMap: Record<string, number[]> = {};

          (all100 || []).forEach((row: any) => {
            const s = row.score;
            if (s <= 25) buckets[0].count++;
            else if (s <= 35) buckets[1].count++;
            else if (s <= 45) buckets[2].count++;
            else if (s <= 55) buckets[3].count++;
            else if (s <= 65) buckets[4].count++;
            else buckets[5].count++;

            const k = row.character || '기타';
            charMapCount[k] = (charMapCount[k] || 0) + 1;

            const d = new Date(row.created_at).toISOString().slice(0, 10);
            const num = levelToNum(row.level);
            if (!trendMap[d]) trendMap[d] = [];
            trendMap[d].push(num);
          });

          setDist(buckets);
          setChars(Object.entries(charMapCount).map(([name, value]) => ({ name, value })));
          setTrend(
            Object.entries(trendMap)
              .sort(([a], [b]) => (a > b ? 1 : -1))
              .map(([date, arr]) => {
                const avg = arr.reduce((x, y) => x + y, 0) / arr.length;
                return { date, avg: parseFloat(avg.toFixed(2)) };
              })
          );
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('데이터 로딩 중 오류:', error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">통계를 불러오고 있습니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto max-w-6xl container-padding">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">NTRP 통계 & 히스토리</h1>
          <p className="text-gray-600">전체 사용자 통계와 개인 히스토리를 확인해보세요</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white">
              개요
            </TabsTrigger>
            <TabsTrigger value="recent" className="data-[state=active]:bg-white">
              최근 10개 (전체)
            </TabsTrigger>
            <TabsTrigger value="mine" className="data-[state=active]:bg-white">
              내 히스토리
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">점수 분포 (최근 100)</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={dist}>
                        <XAxis dataKey="bucket" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#10b981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">일자별 평균 레벨 (최근 100)</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={trend}>
                        <XAxis dataKey="date" />
                        <YAxis domain={[1.5, 5.3]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="avg" stroke="#10b981" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 border-gray-200 md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">캐릭터 비율</h3>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chars}
                          dataKey="value"
                          nameKey="name"
                          outerRadius={120}
                          label={(props: any) => `${props.name} ${(props.percent * 100).toFixed(0)}%`}
                        >
                          {chars.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-6">
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 10개 결과 (전체)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-left text-gray-700">날짜</th>
                        <th className="p-3 text-right text-gray-700">점수</th>
                        <th className="p-3 text-center text-gray-700">레벨</th>
                        <th className="p-3 text-center text-gray-700">캐릭터</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recent.map((r, i) => (
                        <tr key={i} className="border-t border-gray-200">
                          <td className="p-3 text-gray-600">
                            {new Date(r.created_at).toLocaleString('ko-KR')}
                          </td>
                          <td className="p-3 text-right font-semibold text-gray-900">{r.score}</td>
                          <td className="p-3 text-center">
                            <Badge className="bg-green-100 text-green-800">{r.level}</Badge>
                          </td>
                          <td className="p-3 text-center text-gray-600">{r.character}</td>
                        </tr>
                      ))}
                      {!recent.length && (
                        <tr>
                          <td className="p-3 text-center text-gray-500" colSpan={4}>
                            데이터가 없습니다
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mine" className="mt-6">
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">내 히스토리 (이 기기)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-left text-gray-700">날짜</th>
                        <th className="p-3 text-right text-gray-700">점수</th>
                        <th className="p-3 text-center text-gray-700">레벨</th>
                        <th className="p-3 text-center text-gray-700">캐릭터</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mine.map((r, i) => (
                        <tr key={i} className="border-t border-gray-200">
                          <td className="p-3 text-gray-600">
                            {new Date(r.created_at).toLocaleString('ko-KR')}
                          </td>
                          <td className="p-3 text-right font-semibold text-gray-900">{r.score}</td>
                          <td className="p-3 text-center">
                            <Badge className="bg-green-100 text-green-800">{r.level}</Badge>
                          </td>
                          <td className="p-3 text-center text-gray-600">{r.character}</td>
                        </tr>
                      ))}
                      {!mine.length && (
                        <tr>
                          <td className="p-3 text-center text-gray-500" colSpan={4}>
                            이 기기에서 테스트 기록이 없습니다
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
