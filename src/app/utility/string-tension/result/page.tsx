'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calculator, 
  Share2, 
  RotateCcw, 
  Target, 
  Settings, 
  TrendingUp,
  AlertCircle,
  Info
} from 'lucide-react';
import { calculateTension, getTensionComparison, TensionInput, TensionResult } from '@/lib/tensionCalc';

function StringTensionResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<TensionResult | null>(null);
  const [inputData, setInputData] = useState<TensionInput | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // URL 파라미터에서 입력 데이터 추출
    const params = {
      headSize: searchParams.get('headSize') as TensionInput['headSize'],
      stringType: searchParams.get('stringType') as TensionInput['stringType'],
      playStyle: searchParams.get('playStyle') as TensionInput['playStyle'],
      environment: searchParams.get('environment') as TensionInput['environment'],
      feelPreference: searchParams.get('feelPreference') as TensionInput['feelPreference'],
      ntrpLevel: searchParams.get('ntrpLevel') as TensionInput['ntrpLevel']
    };

    // 필수 파라미터 확인
    if (params.headSize && params.stringType && params.playStyle && params.environment && params.feelPreference) {
      setInputData(params as TensionInput);
      const calculatedResult = calculateTension(params as TensionInput);
      setResult(calculatedResult);
    }
    setIsLoading(false);
  }, [searchParams]);

  const getStyleColor = (style: string) => {
    const colors = {
      '컨트롤형': 'bg-blue-100 text-blue-800',
      '파워형': 'bg-red-100 text-red-800',
      '스핀형': 'bg-green-100 text-green-800',
      '올라운더': 'bg-yellow-100 text-yellow-800'
    };
    return colors[style as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTensionPercentage = (tension: number) => {
    // 45-65 범위를 0-100%로 변환
    return ((tension - 45) / (65 - 45)) * 100;
  };

  const copyToClipboard = () => {
    if (result) {
      const text = `🎾 TennisFriends 스트링 텐션 계산 결과\n\n추천 텐션: ${result.range}\n플레이 스타일: ${result.style}\n\n${result.summary}\n\n더 자세한 정보: https://tennisfriends.co.kr/utility/string-tension`;
      navigator.clipboard.writeText(text);
      alert('결과가 클립보드에 복사되었습니다! 📋');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">결과를 계산하고 있습니다...</p>
        </div>
      </div>
    );
  }

  if (!result || !inputData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">결과를 불러올 수 없습니다</h2>
          <p className="text-gray-600 mb-6">입력 데이터가 올바르지 않습니다.</p>
          <Link href="/utility/string-tension/test">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              다시 테스트하기
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const comparison = getTensionComparison(result.style);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold">
                🎾 텐션 계산 완료
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              당신에게 추천하는 텐션은
            </h1>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-6xl md:text-7xl font-bold text-blue-600 mb-4">
                {result.range}
              </div>
              <p className="text-xl text-gray-600 mb-6">
                {result.summary}
              </p>
              
              <Badge className={`px-4 py-2 text-lg font-semibold ${getStyleColor(result.style)}`}>
                {result.style} 플레이어
              </Badge>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                onClick={copyToClipboard}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold"
              >
                <Share2 className="h-5 w-5 mr-2" />
                결과 공유하기
              </Button>
              <Link href="/utility/string-tension/test">
                <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500 px-6 py-3 text-lg font-semibold">
                  <RotateCcw className="h-5 w-5 mr-2" />
                  다시 계산하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Tension Gauge */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  텐션 게이지
                </h3>
                <div className="relative">
                  <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full"
                      style={{ width: '100%' }}
                    />
                    <div 
                      className="absolute top-0 h-8 w-1 bg-gray-900 rounded-full"
                      style={{ left: `${getTensionPercentage(result.tensionLb)}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>45lb</span>
                    <span className="font-bold text-gray-900">{result.tensionLb}lb</span>
                    <span>65lb</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    추천 범위: <span className="font-bold text-blue-600">{result.range}</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Input Summary */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  입력 정보 요약
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">라켓 헤드</span>
                    <span className="font-semibold text-gray-900">{inputData.headSize}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">스트링 종류</span>
                    <span className="font-semibold text-gray-900">{inputData.stringType}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">플레이 스타일</span>
                    <span className="font-semibold text-gray-900">{inputData.playStyle}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">환경</span>
                    <span className="font-semibold text-gray-900">{inputData.environment}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">타구감 선호</span>
                    <span className="font-semibold text-gray-900">{inputData.feelPreference}</span>
                  </div>
                  {inputData.ntrpLevel && (
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">NTRP 레벨</span>
                      <span className="font-semibold text-gray-900">{inputData.ntrpLevel}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tips Section */}
          <Card className="bg-white border-gray-200 shadow-lg mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                플레이 성향에 맞춘 커스텀 조정 팁
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {result.tips.map((tip, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Comparison Table */}
          <Card className="bg-white border-gray-200 shadow-lg mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                다른 스타일 대비 텐션 차이
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">플레이 스타일</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">추천 텐션</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">특징</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4">
                          <Badge className={getStyleColor(item.style)}>
                            {item.style}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 font-semibold text-gray-900">{item.tension}</td>
                        <td className="py-3 px-4 text-gray-600">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Tools */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              함께 활용하면 좋은 도구들
            </h2>
            <p className="text-gray-600 text-lg">
              더 정확한 분석을 위해 다른 도구들도 활용해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/utility/ntrp-test">
              <Card className="h-full bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">NTRP 실력 테스트</h3>
                  <p className="text-gray-600 leading-relaxed">
                    정확한 실력 레벨을 파악하여 더 정밀한 텐션 추천을 받으세요.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/utility/injury-risk">
              <Card className="h-full bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">부상 리스크 체크</h3>
                  <p className="text-gray-600 leading-relaxed">
                    부상 위험을 미리 파악하고 안전한 플레이를 위한 조언을 받으세요.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/blog/string-tension-feel-guide">
              <Card className="h-full bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">스트링 가이드</h3>
                  <p className="text-gray-600 leading-relaxed">
                    스트링 텐션에 대한 더 자세한 정보와 전문가 팁을 확인하세요.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-4xl container-padding text-center">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="h-10 w-10 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  텐션 계산이 도움이 되셨나요?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  더 많은 테니스 도구와 전문가 조언이 TennisFriends에 있습니다.<br />
                  지금 바로 다른 유틸리티도 활용해보세요!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/utility/ntrp-test">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold focus-ring">
                      <Target className="h-5 w-5 mr-2" />
                      NTRP 실력 테스트
                    </Button>
                  </Link>
                  <Link href="/utility/injury-risk">
                    <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500 px-8 py-3 text-lg font-semibold focus-ring">
                      <Settings className="h-5 w-5 mr-2" />
                      부상 리스크 체크
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default function StringTensionResult() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StringTensionResultContent />
    </Suspense>
  );
}
