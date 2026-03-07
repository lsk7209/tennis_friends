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
  Info,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { calculateTension, getTensionComparison, TensionInput, TensionResult } from '@/lib/tensionCalc';

function StringTensionResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<TensionResult | null>(null);
  const [inputData, setInputData] = useState<TensionInput | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = {
      headSize: searchParams.get('headSize') as TensionInput['headSize'],
      stringType: searchParams.get('stringType') as TensionInput['stringType'],
      playStyle: searchParams.get('playStyle') as TensionInput['playStyle'],
      environment: searchParams.get('environment') as TensionInput['environment'],
      feelPreference: searchParams.get('feelPreference') as TensionInput['feelPreference'],
      ntrpLevel: searchParams.get('ntrpLevel') as TensionInput['ntrpLevel']
    };

    if (params.headSize && params.stringType && params.playStyle && params.environment && params.feelPreference) {
      setInputData(params as TensionInput);
      const calculatedResult = calculateTension(params as TensionInput);
      setResult(calculatedResult);
    }
    setIsLoading(false);
  }, [searchParams]);

  const getStyleColor = (style: string) => {
    const colors = {
      '컨트롤형': 'from-blue-500 to-cyan-500',
      '파워형': 'from-red-500 to-orange-500',
      '스핀형': 'from-green-500 to-emerald-500',
      '올라운더': 'from-yellow-400 to-orange-400'
    };
    return colors[style as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getTensionPercentage = (tension: number) => {
    return ((tension - 45) / (65 - 45)) * 100;
  };

  const copyToClipboard = () => {
    if (result) {
      const text = `🎾 TennisFriends 스트링 텐션 계산 결과\n\n추천 텐션: ${result.range}\n플레이 스타일: ${result.style}\n\n${result.summary}\n\n더 자세한 정보: https://tennisfrens.com/utility/string-tension`;
      navigator.clipboard.writeText(text);
      alert('결과가 클립보드에 복사되었습니다! 📋');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">결과를 계산하고 있습니다...</p>
        </div>
      </div>
    );
  }

  if (!result || !inputData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">결과를 불러올 수 없습니다</h2>
          <p className="text-gray-600 mb-6">입력 데이터가 올바르지 않습니다.</p>
          <Link href="/utility/string-tension/test">
            <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
              다시 테스트하기
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const comparison = getTensionComparison(result.style);
  const styleGradient = getStyleColor(result.style);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-br from-blue-600 via-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
              <Calculator className="h-4 w-4 mr-2 inline" />
              텐션 계산 완료
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              당신에게 추천하는 텐션은
            </h1>
            
            <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl mb-8">
              <CardContent className="p-10">
                <div className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                  {result.range}
                </div>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                  {result.summary}
                </p>
                
                <Badge className={`px-6 py-3 text-lg font-bold text-white shadow-lg bg-gradient-to-r ${styleGradient}`}>
                  {result.style} 플레이어
                </Badge>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={copyToClipboard}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Share2 className="h-5 w-5 mr-2" />
                결과 공유하기
              </Button>
              <Link href="/utility/string-tension/test">
                <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 px-8 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <RotateCcw className="h-5 w-5 mr-2" />
                  다시 계산하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Tension Gauge */}
            <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    텐션 게이지
                  </h3>
                </div>
                <div className="relative">
                  <div className="w-full h-12 bg-gradient-to-r from-green-200 via-yellow-200 to-red-200 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full transition-all duration-1000"
                      style={{ width: `${getTensionPercentage(result.tensionLb)}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-4 text-sm font-semibold text-gray-700">
                    <span>45lb</span>
                    <span className="text-lg text-blue-600">{result.tensionLb}lb</span>
                    <span>65lb</span>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-gray-600 text-base">
                    추천 범위: <span className="font-bold text-blue-600 text-xl">{result.range}</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Input Summary */}
            <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    입력 정보 요약
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: '라켓 헤드', value: inputData.headSize },
                    { label: '스트링 종류', value: inputData.stringType },
                    { label: '플레이 스타일', value: inputData.playStyle },
                    { label: '환경', value: inputData.environment },
                    { label: '타구감 선호', value: inputData.feelPreference },
                    ...(inputData.ntrpLevel ? [{ label: 'NTRP 레벨', value: inputData.ntrpLevel }] : [])
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600 font-medium">{item.label}</span>
                      <span className="font-bold text-gray-900 text-lg">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tips Section */}
          <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  플레이 성향에 맞춘 커스텀 조정 팁
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {result.tips.map((tip, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-emerald-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed flex-1">{tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Comparison Table */}
          <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  다른 스타일 대비 텐션 차이
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-6 font-bold text-gray-900">플레이 스타일</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-900">추천 텐션</th>
                      <th className="text-left py-4 px-6 font-bold text-gray-900">특징</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                        <td className="py-4 px-6">
                          <Badge className={`px-4 py-2 text-sm font-bold text-white bg-gradient-to-r ${getStyleColor(item.style)}`}>
                            {item.style}
                          </Badge>
                        </td>
                        <td className="py-4 px-6 font-bold text-gray-900 text-lg">{item.tension}</td>
                        <td className="py-4 px-6 text-gray-600">{item.description}</td>
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              함께 활용하면 좋은 도구들
            </h2>
            <p className="text-xl text-gray-600">
              더 정확한 분석을 위해 다른 도구들도 활용해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/utility/ntrp-test">
              <Card className="h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">NTRP 실력 테스트</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    정확한 실력 레벨을 파악하여 더 정밀한 텐션 추천을 받으세요.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/utility/injury-risk">
              <Card className="h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Settings className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">부상 리스크 체크</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    부상 위험을 미리 파악하고 안전한 플레이를 위한 조언을 받으세요.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/blog/string-tension-feel-guide">
              <Card className="h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <TrendingUp className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">스트링 가이드</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    스트링 텐션에 대한 더 자세한 정보와 전문가 팁을 확인하세요.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <Calculator className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                  텐션 계산이 도움이 되셨나요?
                </h2>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                  더 많은 테니스 도구와 전문가 조언이 TennisFriends에 있습니다.<br />
                  <span className="text-gray-600">지금 바로 다른 유틸리티도 활용해보세요!</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/utility/ntrp-test">
                    <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <Target className="h-5 w-5 mr-2" />
                      NTRP 실력 테스트
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/utility/injury-risk">
                    <Button variant="outline" className="bg-white border-2 border-gray-300 hover:border-blue-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">결과를 로딩 중입니다...</p>
        </div>
      </div>
    }>
      <StringTensionResultContent />
    </Suspense>
  );
}
