'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Share2, BarChart3, RotateCcw } from 'lucide-react';
import { getNTRPLevel, charMap } from '@/lib/questions';
import { getDeviceId } from '@/lib/device';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = Number(searchParams.get('score') || 0);
  const q13 = decodeURIComponent(searchParams.get('q13') || '');
  
  const { level, desc } = getNTRPLevel(score);
  const character = charMap[q13] || '올라운더';
  const [recent, setRecent] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saveResult = async () => {
      try {
        const device_id = getDeviceId();
        
        // Supabase가 설정된 경우에만 저장
        if (isSupabaseConfigured()) {
          // 결과 저장
          await supabase.from('ntrp_results').insert({
            device_id,
            score,
            level,
            character
          });

          // 최근 3개 결과 가져오기
          const { data } = await supabase
            .from('ntrp_results')
            .select('created_at, score, level, character')
            .eq('device_id', device_id)
            .order('created_at', { ascending: false })
            .limit(3);

          setRecent(data || []);
        } else {
          // Supabase가 설정되지 않은 경우 로컬 스토리지에 저장
          const localResults = JSON.parse(localStorage.getItem('ntrp_results') || '[]');
          const newResult = {
            id: Date.now().toString(),
            device_id,
            score,
            level,
            character,
            created_at: new Date().toISOString()
          };
          
          localResults.unshift(newResult);
          localStorage.setItem('ntrp_results', JSON.stringify(localResults.slice(0, 10))); // 최근 10개만 유지
          
          setRecent(localResults.slice(0, 3));
        }
      } catch (error) {
        console.error('결과 저장 중 오류:', error);
        // 오류 발생 시에도 로컬 스토리지에 저장 시도
        try {
          const localResults = JSON.parse(localStorage.getItem('ntrp_results') || '[]');
          const newResult = {
            id: Date.now().toString(),
            device_id: getDeviceId(),
            score,
            level,
            character,
            created_at: new Date().toISOString()
          };
          
          localResults.unshift(newResult);
          localStorage.setItem('ntrp_results', JSON.stringify(localResults.slice(0, 10)));
          setRecent(localResults.slice(0, 3));
        } catch (localError) {
          console.error('로컬 저장 중 오류:', localError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (score > 0) {
      saveResult();
    }
  }, [score, level, character]);

  const copyToClipboard = () => {
    const url = `${window.location.origin}/utility/ntrp-test/result?score=${score}&q13=${encodeURIComponent(q13)}`;
    navigator.clipboard.writeText(url);
    alert('결과 링크가 복사되었습니다! 📎');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">결과를 처리하고 있습니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto max-w-4xl container-padding">
        {/* 결과 카드 */}
        <Card className="bg-gradient-to-br from-green-50 to-white border-green-200 shadow-lg mb-8">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              당신의 NTRP 레벨은
            </h1>
            <div className="text-6xl font-extrabold text-green-600 mb-4">
              {level}
            </div>
            
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              {desc}
            </p>
            
            <div className="flex justify-center mb-6">
              <Badge className="bg-green-100 text-green-800 px-4 py-2 text-lg">
                플레이 스타일: {character}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">총 점수</h3>
                <p className="text-2xl font-bold text-green-600">{score}점</p>
              </div>
              <div className="bg-white border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">레벨</h3>
                <p className="text-2xl font-bold text-green-600">{level}</p>
              </div>
              <div className="bg-white border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">스타일</h3>
                <p className="text-lg font-bold text-green-600">{character}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => router.push('/utility/ntrp-test')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                다시 테스트하기
              </Button>
              <Button 
                onClick={copyToClipboard}
                variant="outline" 
                className="bg-white border-gray-300 hover:border-green-500 px-8 py-3"
              >
                <Share2 className="h-4 w-4 mr-2" />
                결과 공유하기
              </Button>
              <Link href="/utility/ntrp-test/stats">
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-300 hover:border-green-500 px-8 py-3"
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  통계 보기
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 최근 결과 히스토리 */}
        {recent.length > 0 && (
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">내 최근 결과 (이 기기)</h3>
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
                    {recent.map((result, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="p-3 text-gray-600">
                          {new Date(result.created_at).toLocaleString('ko-KR')}
                        </td>
                        <td className="p-3 text-right font-semibold text-gray-900">
                          {result.score}점
                        </td>
                        <td className="p-3 text-center">
                          <Badge className="bg-green-100 text-green-800">
                            {result.level}
                          </Badge>
                        </td>
                        <td className="p-3 text-center text-gray-600">
                          {result.character}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 추가 액션 */}
        <div className="mt-8 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-blue-900 mb-2">🎯 다음 단계</h4>
            <p className="text-blue-800 text-sm leading-relaxed mb-4">
              당신의 실력 향상을 위한 맞춤형 가이드와 훈련 방법을 확인해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/utility/string-tension">
                <Button variant="outline" className="bg-white border-blue-300 hover:border-blue-500">
                  스트링 텐션 계산기
                </Button>
              </Link>
              <Link href="/utility/injury-risk">
                <Button variant="outline" className="bg-white border-blue-300 hover:border-blue-500">
                  부상 리스크 체크
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="bg-white border-blue-300 hover:border-blue-500">
                  테니스 가이드
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
