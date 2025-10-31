import React, { useState, useMemo } from 'react';
import { Metadata } from 'next';
import { MapPin, Cloud, Sun, CloudRain, Wind, Eye, Thermometer, Droplets, Zap, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// 메타데이터
export const metadata: Metadata = {
  title: '코트 상태 확인 도구 - 플레이 환경 분석 | TennisFriends',
  description: '테니스 코트의 상태, 날씨 조건, 조명 등을 종합적으로 분석하여 최적의 플레이 환경을 평가합니다. 안전하고 효과적인 경기 진행을 위한 과학적 분석 제공.',
  keywords: ['테니스 코트', '코트 상태', '날씨 조건', '플레이 환경', '코트 분석', '안전 플레이', '코트 컨디션'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/utility/court-conditions',
  },
  openGraph: {
    title: '코트 상태 확인 도구 - 플레이 환경 분석 | TennisFriends',
    description: '테니스 코트의 상태, 날씨 조건, 조명 등을 종합적으로 분석하여 최적의 플레이 환경을 평가합니다.',
    url: 'https://tennisfriends.co.kr/utility/court-conditions',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '코트 상태 확인 도구 - 플레이 환경 분석 | TennisFriends',
    description: '테니스 코트의 상태, 날씨 조건, 조명 등을 종합적으로 분석합니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface CourtCondition {
  surface: 'hard' | 'clay' | 'grass' | 'carpet';
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  temperature: number;
  humidity: number;
  windSpeed: number;
  lighting: 'excellent' | 'good' | 'fair' | 'poor';
  weather: 'clear' | 'cloudy' | 'rain' | 'windy' | 'hot' | 'cold';
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
}

interface AnalysisResult {
  overallScore: number;
  playability: 'excellent' | 'good' | 'fair' | 'poor' | 'dangerous';
  recommendations: string[];
  risks: string[];
  optimalStrategies: string[];
}

const surfaceTypes = {
  hard: { name: '하드 코트', bounce: '빠름', slipperiness: '낮음', durability: '높음' },
  clay: { name: '클레이 코트', bounce: '중간', slipperiness: '높음', durability: '중간' },
  grass: { name: '잔디 코트', bounce: '느림', slipperiness: '매우 높음', durability: '낮음' },
  carpet: { name: '카펫 코트', bounce: '빠름', slipperiness: '중간', durability: '높음' }
};

const weatherIcons = {
  clear: Sun,
  cloudy: Cloud,
  rain: CloudRain,
  windy: Wind,
  hot: Thermometer,
  cold: Thermometer
};

const playabilityColors = {
  excellent: 'text-green-600 bg-green-50 border-green-200',
  good: 'text-blue-600 bg-blue-50 border-blue-200',
  fair: 'text-yellow-600 bg-yellow-50 border-yellow-200',
  poor: 'text-orange-600 bg-orange-50 border-orange-200',
  dangerous: 'text-red-600 bg-red-50 border-red-200'
};

export default function CourtConditionsPage() {
  const [conditions, setConditions] = useState<CourtCondition>({
    surface: 'hard',
    condition: 'good',
    temperature: 22,
    humidity: 60,
    windSpeed: 5,
    lighting: 'good',
    weather: 'clear',
    timeOfDay: 'afternoon'
  });

  const [showAnalysis, setShowAnalysis] = useState(false);

  const analysis = useMemo((): AnalysisResult => {
    let score = 100;
    const recommendations: string[] = [];
    const risks: string[] = [];
    const optimalStrategies: string[] = [];

    // 코트 표면 분석
    switch (conditions.surface) {
      case 'grass':
        if (conditions.weather === 'rain') {
          score -= 40;
          risks.push('잔디 코트가 젖어 미끄러운 상태');
          recommendations.push('경기 취소 또는 연기 고려');
        } else {
          score -= 10;
          recommendations.push('잔디 코트 특성상 낮은 바운스에 적응');
        }
        optimalStrategies.push('슬라이스 샷 활용', '네트 플레이 강화');
        break;
      case 'clay':
        if (conditions.weather === 'rain') {
          score -= 30;
          risks.push('클레이 코트가 질척거림');
        }
        optimalStrategies.push('톱스핀 샷 강화', '인내심 있는 랠리');
        break;
      case 'hard':
        optimalStrategies.push('강력한 타격', '빠른 이동');
        break;
    }

    // 코트 상태 분석
    switch (conditions.condition) {
      case 'poor':
        score -= 30;
        risks.push('코트 상태가 좋지 않아 부상 위험 증가');
        recommendations.push('코트 점검 및 수리 요청');
        break;
      case 'fair':
        score -= 15;
        recommendations.push('안전한 플레이 우선');
        break;
    }

    // 온도 분석
    if (conditions.temperature < 10) {
      score -= 20;
      risks.push('추운 날씨로 근육 경직 및 부상 위험');
      recommendations.push('워밍업 충분히 실시', '보온 장비 착용');
      optimalStrategies.push('짧은 랠리 위주', '실내 경기 고려');
    } else if (conditions.temperature > 30) {
      score -= 25;
      risks.push('더운 날씨로 탈수 및 열사병 위험');
      recommendations.push('수분 보충 필수', '그늘 휴식 취하기');
      optimalStrategies.push('피로 관리', '스트로크 정확성 유지');
    } else if (conditions.temperature > 25) {
      score -= 10;
      recommendations.push('충분한 수분 섭취');
    }

    // 습도 분석
    if (conditions.humidity > 80) {
      score -= 15;
      risks.push('고습도로 땀 흡수가 어려움');
      recommendations.push('흡습성 좋은 의류 착용');
    } else if (conditions.humidity < 30) {
      score -= 10;
      risks.push('저습도로 호흡기 불편');
      recommendations.push('수분 보충 주의');
    }

    // 풍속 분석
    if (conditions.windSpeed > 15) {
      score -= 25;
      risks.push('강풍으로 공의 궤적 예측 어려움');
      recommendations.push('샷 조절 필요');
      optimalStrategies.push('로빙과 드롭 샷 활용', '네트 플레이 강화');
    } else if (conditions.windSpeed > 10) {
      score -= 15;
      recommendations.push('풍향 고려한 샷 선택');
    }

    // 조명 분석
    switch (conditions.lighting) {
      case 'poor':
        score -= 30;
        risks.push('조명이 불충분하여 시야 확보 어려움');
        recommendations.push('야간 경기 조명 점검');
        break;
      case 'fair':
        score -= 15;
        recommendations.push('안전한 플레이 우선');
        break;
    }

    // 날씨 분석
    switch (conditions.weather) {
      case 'rain':
        score -= 50;
        risks.push('우천으로 미끄러짐 및 부상 위험');
        recommendations.push('경기 취소 또는 실내 이동');
        break;
      case 'windy':
        score -= 20;
        risks.push('강풍으로 공 제어 어려움');
        break;
      case 'hot':
        score -= 20;
        risks.push('고온으로 체력 소모 증가');
        break;
      case 'cold':
        score -= 15;
        risks.push('저온으로 근육 긴장');
        break;
    }

    // 시간대 분석
    if (conditions.timeOfDay === 'night' && conditions.lighting !== 'excellent') {
      score -= 20;
      recommendations.push('야간 조명 상태 확인');
    }

    // 최종 점수 및 등급 결정
    let playability: AnalysisResult['playability'];
    if (score >= 80) playability = 'excellent';
    else if (score >= 60) playability = 'good';
    else if (score >= 40) playability = 'fair';
    else if (score >= 20) playability = 'poor';
    else playability = 'dangerous';

    // 기본 추천사항 추가
    if (score > 60) {
      recommendations.push('정상적인 플레이 가능');
      optimalStrategies.push('자신의 플레이 스타일 유지');
    }

    return {
      overallScore: Math.max(0, Math.min(100, score)),
      playability,
      recommendations,
      risks,
      optimalStrategies
    };
  }, [conditions]);

  const analyzeConditions = () => {
    setShowAnalysis(true);
  };

  const resetAnalysis = () => {
    setShowAnalysis(false);
    setConditions({
      surface: 'hard',
      condition: 'good',
      temperature: 22,
      humidity: 60,
      windSpeed: 5,
      lighting: 'good',
      weather: 'clear',
      timeOfDay: 'afternoon'
    });
  };

  const getPlayabilityIcon = (playability: string) => {
    switch (playability) {
      case 'excellent': return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'good': return <CheckCircle className="w-6 h-6 text-blue-500" />;
      case 'fair': return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'poor': return <XCircle className="w-6 h-6 text-orange-500" />;
      case 'dangerous': return <XCircle className="w-6 h-6 text-red-500" />;
      default: return <AlertTriangle className="w-6 h-6 text-gray-500" />;
    }
  };

  const getPlayabilityText = (playability: string) => {
    switch (playability) {
      case 'excellent': return '최적의 플레이 환경';
      case 'good': return '좋은 플레이 환경';
      case 'fair': return '보통 플레이 환경';
      case 'poor': return '나쁜 플레이 환경';
      case 'dangerous': return '위험한 플레이 환경';
      default: return '알 수 없음';
    }
  };

  return (
    <div className="min-h-screen utility-page">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              코트 상태 확인 도구
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              테니스 코트의 상태, 날씨 조건, 조명 등을 종합적으로 분석하여
              최적의 플레이 환경을 평가하고 안전한 경기를 위한 가이드를 제공합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {!showAnalysis ? (
          <div className="space-y-8">
            {/* 코트 정보 입력 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  코트 및 환경 정보 입력
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>코트 표면</Label>
                      <Select value={conditions.surface} onValueChange={(value: CourtCondition['surface']) => setConditions(prev => ({ ...prev, surface: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hard">하드 코트</SelectItem>
                          <SelectItem value="clay">클레이 코트</SelectItem>
                          <SelectItem value="grass">잔디 코트</SelectItem>
                          <SelectItem value="carpet">카펫 코트</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>코트 상태</Label>
                      <Select value={conditions.condition} onValueChange={(value: CourtCondition['condition']) => setConditions(prev => ({ ...prev, condition: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">매우 좋음 (새 코트)</SelectItem>
                          <SelectItem value="good">좋음 (일반 상태)</SelectItem>
                          <SelectItem value="fair">보통 (약간 마모)</SelectItem>
                          <SelectItem value="poor">나쁨 (수리 필요)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>시간대</Label>
                      <Select value={conditions.timeOfDay} onValueChange={(value: CourtCondition['timeOfDay']) => setConditions(prev => ({ ...prev, timeOfDay: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">아침 (6-12시)</SelectItem>
                          <SelectItem value="afternoon">오후 (12-18시)</SelectItem>
                          <SelectItem value="evening">저녁 (18-22시)</SelectItem>
                          <SelectItem value="night">밤 (22시 이후)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>날씨</Label>
                      <Select value={conditions.weather} onValueChange={(value: CourtCondition['weather']) => setConditions(prev => ({ ...prev, weather: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clear">맑음</SelectItem>
                          <SelectItem value="cloudy">흐림</SelectItem>
                          <SelectItem value="rain">비</SelectItem>
                          <SelectItem value="windy">바람</SelectItem>
                          <SelectItem value="hot">더움</SelectItem>
                          <SelectItem value="cold">추움</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>조명 상태</Label>
                      <Select value={conditions.lighting} onValueChange={(value: CourtCondition['lighting']) => setConditions(prev => ({ ...prev, lighting: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">매우 좋음</SelectItem>
                          <SelectItem value="good">좋음</SelectItem>
                          <SelectItem value="fair">보통</SelectItem>
                          <SelectItem value="poor">나쁨</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* 슬라이더 컨트롤들 */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>기온: {conditions.temperature}°C</Label>
                    <Slider
                      value={[conditions.temperature]}
                      onValueChange={(value) => setConditions(prev => ({ ...prev, temperature: value[0] }))}
                      max={40}
                      min={-10}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>습도: {conditions.humidity}%</Label>
                    <Slider
                      value={[conditions.humidity]}
                      onValueChange={(value) => setConditions(prev => ({ ...prev, humidity: value[0] }))}
                      max={100}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>풍속: {conditions.windSpeed} km/h</Label>
                    <Slider
                      value={[conditions.windSpeed]}
                      onValueChange={(value) => setConditions(prev => ({ ...prev, windSpeed: value[0] }))}
                      max={30}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 코트 정보 요약 */}
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">현재 설정된 코트 정보</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl mb-1">{surfaceTypes[conditions.surface].name}</div>
                    <div className="text-sm text-gray-600">코트 표면</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">{conditions.temperature}°C</div>
                    <div className="text-sm text-gray-600">기온</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">{conditions.humidity}%</div>
                    <div className="text-sm text-gray-600">습도</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">{conditions.windSpeed} km/h</div>
                    <div className="text-sm text-gray-600">풍속</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button
                onClick={analyzeConditions}
                size="lg"
                className="px-8 py-3 bg-green-600 hover:bg-green-700"
              >
                <Eye className="w-5 h-5 mr-2" />
                코트 상태 분석하기
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* 분석 결과 헤더 */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  {getPlayabilityIcon(analysis.playability)}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">코트 상태 분석 결과</h2>
                    <p className="text-gray-600">플레이 환경 평가 및 추천사항</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-1">{analysis.overallScore}</div>
                    <div className="text-sm text-gray-600">종합 점수</div>
                  </div>
                  <div className="text-center">
                    <Badge className={`text-lg px-4 py-2 ${playabilityColors[analysis.playability]}`}>
                      {getPlayabilityText(analysis.playability)}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {analysis.recommendations.length + analysis.optimalStrategies.length}
                    </div>
                    <div className="text-sm text-gray-600">제공 팁</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="recommendations" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recommendations">추천사항</TabsTrigger>
                <TabsTrigger value="risks">주의사항</TabsTrigger>
                <TabsTrigger value="strategies">전략 팁</TabsTrigger>
              </TabsList>

              <TabsContent value="recommendations" className="space-y-4">
                {analysis.recommendations.map((rec, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{rec}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="risks" className="space-y-4">
                {analysis.risks.length > 0 ? (
                  analysis.risks.map((risk, index) => (
                    <Card key={index} className="border-red-200 bg-red-50">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <p className="text-red-800">{risk}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                      <p className="text-gray-600">현재 코트 상태에서 큰 위험 요소가 발견되지 않았습니다.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="strategies" className="space-y-4">
                {analysis.optimalStrategies.map((strategy, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{strategy}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

            {/* 코트 특성 정보 */}
            <Card>
              <CardHeader>
                <CardTitle>코트 표면 특성</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-1">바운스</div>
                    <div className="text-gray-600">{surfaceTypes[conditions.surface].bounce}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-1">미끄러움</div>
                    <div className="text-gray-600">{surfaceTypes[conditions.surface].slipperiness}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-1">내구성</div>
                    <div className="text-gray-600">{surfaceTypes[conditions.surface].durability}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4">
              <Button onClick={resetAnalysis} variant="outline" size="lg">
                새로운 분석
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                분석 결과 저장
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
