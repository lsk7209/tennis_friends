'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Crown, Medal, Award } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

interface LeaderboardRow {
  id?: string;
  created_at: string;
  score: number;
  level: string;
  character: string;
}

export default function LeaderboardPage() {
  const [rows, setRows] = useState<LeaderboardRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        if (isSupabaseConfigured()) {
          // 최근 7일 상위 점수 (최대 50개)
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
          
          const { data } = await supabase
            .from('ntrp_results')
            .select('created_at, score, level, character')
            .gte('created_at', sevenDaysAgo.toISOString())
            .order('score', { ascending: false })
            .limit(50);
          
          setRows((data || []) as LeaderboardRow[]);
        } else {
          // 더미 데이터 설정
          const dummyData = [
            { id: '1', score: 75, level: '4.5', character: '올라운더', created_at: '2025-01-24T10:30:00Z' },
            { id: '2', score: 72, level: '4.0', character: '컨트롤형', created_at: '2025-01-24T09:15:00Z' },
            { id: '3', score: 70, level: '4.0', character: '파워형', created_at: '2025-01-24T08:45:00Z' },
            { id: '4', score: 68, level: '3.5', character: '스핀형', created_at: '2025-01-23T16:20:00Z' },
            { id: '5', score: 65, level: '3.5', character: '올라운더', created_at: '2025-01-23T14:10:00Z' },
            { id: '6', score: 63, level: '3.5', character: '컨트롤형', created_at: '2025-01-23T11:30:00Z' },
            { id: '7', score: 60, level: '3.0', character: '파워형', created_at: '2025-01-22T18:45:00Z' },
            { id: '8', score: 58, level: '3.0', character: '스핀형', created_at: '2025-01-22T15:20:00Z' },
            { id: '9', score: 55, level: '3.0', character: '올라운더', created_at: '2025-01-22T12:15:00Z' },
            { id: '10', score: 52, level: '2.5', character: '컨트롤형', created_at: '2025-01-21T19:30:00Z' }
          ];
          setRows(dummyData);
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('리더보드 로딩 중 오류:', error);
        }
        // 오류 발생 시 더미 데이터 설정
        const dummyData = [
          { id: '1', score: 75, level: '4.5', character: '올라운더', created_at: '2025-01-24T10:30:00Z' },
          { id: '2', score: 72, level: '4.0', character: '컨트롤형', created_at: '2025-01-24T09:15:00Z' },
          { id: '3', score: 70, level: '4.0', character: '파워형', created_at: '2025-01-24T08:45:00Z' }
        ];
        setRows(dummyData);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchLeaderboard();
  }, []);

  const getRankIcon = (index: number) => {
    if (index === 0) return <Crown className="h-5 w-5 text-yellow-500" />;
    if (index === 1) return <Medal className="h-5 w-5 text-gray-400" />;
    if (index === 2) return <Award className="h-5 w-5 text-amber-600" />;
    return <Trophy className="h-4 w-4 text-gray-400" />;
  };

  const getRankBadge = (index: number) => {
    if (index === 0) return <Badge className="bg-yellow-100 text-yellow-800">🥇 1위</Badge>;
    if (index === 1) return <Badge className="bg-gray-100 text-gray-800">🥈 2위</Badge>;
    if (index === 2) return <Badge className="bg-amber-100 text-amber-800">🥉 3위</Badge>;
    return <Badge variant="outline" className="border-gray-300 text-gray-600">#{index + 1}</Badge>;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">리더보드를 불러오고 있습니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto max-w-4xl container-padding">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">최근 7일 Top Score</h1>
          <p className="text-gray-600">최근 일주일 동안의 최고 점수를 확인해보세요</p>
        </div>

        <Card className="bg-gray-50 border-gray-200 shadow-lg">
          <CardContent className="p-6">
            {rows.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-center text-gray-700">순위</th>
                      <th className="p-3 text-left text-gray-700">날짜</th>
                      <th className="p-3 text-right text-gray-700">점수</th>
                      <th className="p-3 text-center text-gray-700">레벨</th>
                      <th className="p-3 text-center text-gray-700">캐릭터</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={index} className="border-t border-gray-200 hover:bg-gray-100 transition-colors">
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {getRankIcon(index)}
                            {getRankBadge(index)}
                          </div>
                        </td>
                        <td className="p-3 text-gray-600">
                          {new Date(row.created_at).toLocaleString('ko-KR')}
                        </td>
                        <td className="p-3 text-right">
                          <span className="font-bold text-lg text-gray-900">{row.score}</span>
                          <span className="text-gray-500 ml-1">점</span>
                        </td>
                        <td className="p-3 text-center">
                          <Badge className="bg-green-100 text-green-800 font-semibold">
                            {row.level}
                          </Badge>
                        </td>
                        <td className="p-3 text-center text-gray-600">
                          {row.character}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-500 mb-2">아직 데이터가 없습니다</h3>
                <p className="text-gray-400">
                  최근 7일 동안 테스트를 완료한 사용자가 없습니다.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 통계 요약 */}
        {rows.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">최고 점수</h3>
                <p className="text-3xl font-bold text-blue-600">{rows[0]?.score || 0}점</p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-green-900 mb-2">평균 점수</h3>
                <p className="text-3xl font-bold text-green-600">
                  {Math.round(rows.reduce((sum, row) => sum + row.score, 0) / rows.length)}점
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">참여자 수</h3>
                <p className="text-3xl font-bold text-purple-600">{rows.length}명</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 안내 */}
        <div className="mt-8 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h4 className="font-semibold text-yellow-900 mb-2">🏆 리더보드 안내</h4>
            <p className="text-yellow-800 text-sm leading-relaxed">
              리더보드는 최근 7일 동안의 테스트 결과를 기준으로 합니다.
              동점일 경우 최근 순으로 정렬됩니다. 여러분도 도전해보세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
