"use client"

import React, { useState, useMemo } from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets, Eye, Clock, MapPin, CheckCircle, AlertTriangle, XCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// 메타데이터는 layout.tsx에서 처리

interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  precipitation: number; // 강수 확률 %
  uvIndex: number;
  visibility: number; // 가시거리 km
  airQuality: 'excellent' | 'good' | 'moderate' | 'poor' | 'hazardous';
}

interface WeatherAnalysis {
  overallScore: number;
  suitability: 'excellent' | 'good' | 'fair' | 'poor' | 'dangerous';
  recommendations: string[];
  risks: string[];
  optimalTimes: string[];
  durationAdvice: string;
}

const weatherIcons = {
  clear: Sun,
  cloudy: Cloud,
  rain: CloudRain,
  windy: Wind,
  hot: Thermometer,
  cold: Thermometer
};

const suitabilityColors = {
  excellent: 'text-green-600 bg-green-50 border-green-200',
  good: 'text-blue-600 bg-blue-50 border-blue-200',
  fair: 'text-yellow-600 bg-yellow-50 border-yellow-200',
  poor: 'text-orange-600 bg-orange-50 border-orange-200',
  dangerous: 'text-red-600 bg-red-50 border-red-200'
};

const airQualityLevels = {
  excellent: '매우 좋음',
  good: '좋음',
  moderate: '보통',
  poor: '나쁨',
  hazardous: '매우 나쁨'
};

export default function WeatherCheckPage() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    location: '서울',
    temperature: 22,
    humidity: 60,
    windSpeed: 5,
    precipitation: 10,
    uvIndex: 3,
    visibility: 10,
    airQuality: 'good'
  });

  const [selectedDate, setSelectedDate] = useState('today');
  const [selectedTime, setSelectedTime] = useState('afternoon');
  const [showAnalysis, setShowAnalysis] = useState(false);

  const analysis = useMemo((): WeatherAnalysis => {
    let score = 100;
    const recommendations: string[] = [];
    const risks: string[] = [];
    const optimalTimes: string[] = [];

    // 온도 분석
    if (weatherData.temperature < 5) {
      score -= 50;
      risks.push('동상 및 근육 경직 위험');
      recommendations.push('실내 코트 이용 고려', '보온 장비 필수 착용');
    } else if (weatherData.temperature < 15) {
      score -= 20;
      risks.push('추위로 인한 퍼포먼스 저하');
      recommendations.push('충분한 워밍업', '보온 의류 착용');
      optimalTimes.push('오후 2-4시 (따뜻할 때)');
    } else if (weatherData.temperature > 35) {
      score -= 50;
      risks.push('열사병 및 탈수 위험');
      recommendations.push('수분 보충 필수', '그늘 휴식 취하기', '가벼운 의류 착용');
    } else if (weatherData.temperature > 28) {
      score -= 25;
      risks.push('더위로 인한 체력 소모 증가');
      recommendations.push('수시로 수분 섭취', '자외선 차단제 사용');
      optimalTimes.push('아침 9-11시 또는 저녁 6-8시');
    } else {
      recommendations.push('쾌적한 온도 유지');
      optimalTimes.push('오전 10시 - 오후 4시');
    }

    // 습도 분석
    if (weatherData.humidity > 85) {
      score -= 20;
      risks.push('땀 흡수가 어려워 불쾌감 증가');
      recommendations.push('흡습성 좋은 의류 착용', '수분 보충 주의');
    } else if (weatherData.humidity < 30) {
      score -= 15;
      risks.push('건조한 공기로 호흡기 불편');
      recommendations.push('수분 섭취 늘리기', '가습기 사용 고려');
    }

    // 풍속 분석
    if (weatherData.windSpeed > 20) {
      score -= 40;
      risks.push('강풍으로 공 궤적 예측 어려움');
      recommendations.push('샷 조절 필요', '로빙 샷 활용');
    } else if (weatherData.windSpeed > 10) {
      score -= 20;
      risks.push('바람 영향으로 플레이 어려움');
      recommendations.push('풍향 고려한 전략 수립');
    }

    // 강수 확률 분석
    if (weatherData.precipitation > 70) {
      score -= 60;
      risks.push('강수로 인한 미끄러짐 및 부상 위험');
      recommendations.push('실내 코트 이동 또는 경기 취소');
    } else if (weatherData.precipitation > 40) {
      score -= 30;
      risks.push('비 올 가능성으로 플레이 방해');
      recommendations.push('우천 대비 용품 준비');
    } else if (weatherData.precipitation > 20) {
      score -= 10;
      risks.push('가벼운 강수 가능성');
      recommendations.push('날씨 변화 주시');
    }

    // 자외선 지수 분석
    if (weatherData.uvIndex > 8) {
      score -= 15;
      risks.push('강한 자외선으로 피부 화상 위험');
      recommendations.push('자외선 차단제 필수', '모자 및 선글라스 착용');
    } else if (weatherData.uvIndex > 6) {
      score -= 10;
      recommendations.push('자외선 차단제 사용 권장');
    }

    // 가시거리 분석
    if (weatherData.visibility < 5) {
      score -= 25;
      risks.push('시야 확보 어려움으로 안전 위험');
      recommendations.push('실내 코트 이용 고려');
    } else if (weatherData.visibility < 10) {
      score -= 10;
      recommendations.push('안전한 플레이 우선');
    }

    // 대기질 분석
    switch (weatherData.airQuality) {
      case 'hazardous':
        score -= 40;
        risks.push('매우 나쁜 대기질로 호흡기 건강 위험');
        recommendations.push('실내 코트 이용 고려');
        break;
      case 'poor':
        score -= 25;
        risks.push('나쁜 대기질로 호흡 불편');
        recommendations.push('마스크 착용 고려');
        break;
      case 'moderate':
        score -= 10;
        recommendations.push('대기질 변화 주시');
        break;
    }

    // 최종 점수 및 등급 결정
    let suitability: WeatherAnalysis['suitability'];
    if (score >= 80) suitability = 'excellent';
    else if (score >= 60) suitability = 'good';
    else if (score >= 40) suitability = 'fair';
    else if (score >= 20) suitability = 'poor';
    else suitability = 'dangerous';

    // 경기 시간 추천
    if (suitability === 'excellent' || suitability === 'good') {
      optimalTimes.push('경기 시간 조정 가능');
    }

    // 경기 지속 시간 조언
    let durationAdvice = '';
    if (suitability === 'dangerous') {
      durationAdvice = '경기 진행을 권장하지 않습니다.';
    } else if (suitability === 'poor') {
      durationAdvice = '짧은 시간 경기(1-2세트)로 제한하는 것을 권장합니다.';
    } else if (suitability === 'fair') {
      durationAdvice = '일반적인 경기 시간으로 진행 가능하나 휴식 시간을 늘리세요.';
    } else {
      durationAdvice = '최적의 날씨로 정상적인 경기 진행이 가능합니다.';
    }

    return {
      overallScore: Math.max(0, Math.min(100, score)),
      suitability,
      recommendations,
      risks,
      optimalTimes,
      durationAdvice
    };
  }, [weatherData]);

  const analyzeWeather = () => {
    setShowAnalysis(true);
  };

  const resetAnalysis = () => {
    setShowAnalysis(false);
    setWeatherData({
      location: '서울',
      temperature: 22,
      humidity: 60,
      windSpeed: 5,
      precipitation: 10,
      uvIndex: 3,
      visibility: 10,
      airQuality: 'good'
    });
    setSelectedDate('today');
    setSelectedTime('afternoon');
  };

  const getSuitabilityIcon = (suitability: string) => {
    switch (suitability) {
      case 'excellent': return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'good': return <CheckCircle className="w-6 h-6 text-blue-500" />;
      case 'fair': return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'poor': return <XCircle className="w-6 h-6 text-orange-500" />;
      case 'dangerous': return <XCircle className="w-6 h-6 text-red-500" />;
      default: return <AlertTriangle className="w-6 h-6 text-gray-500" />;
    }
  };

  const getSuitabilityText = (suitability: string) => {
    switch (suitability) {
      case 'excellent': return '최적의 테니스 날씨';
      case 'good': return '좋은 테니스 날씨';
      case 'fair': return '보통 테니스 날씨';
      case 'poor': return '나쁜 테니스 날씨';
      case 'dangerous': return '위험한 테니스 날씨';
      default: return '알 수 없음';
    }
  };

  return (
    <div className="min-h-screen utility-page">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full mb-6">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              날씨 적합성 체크
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              테니스 경기를 위한 날씨 조건을 종합적으로 분석하여
              최적의 경기 환경과 시간을 추천합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {!showAnalysis ? (
          <div className="space-y-8">
            {/* 날씨 정보 입력 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  날씨 정보 입력
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>지역</Label>
                      <Select value={weatherData.location} onValueChange={(value) => setWeatherData(prev => ({ ...prev, location: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="서울">서울</SelectItem>
                          <SelectItem value="부산">부산</SelectItem>
                          <SelectItem value="대구">대구</SelectItem>
                          <SelectItem value="인천">인천</SelectItem>
                          <SelectItem value="광주">광주</SelectItem>
                          <SelectItem value="대전">대전</SelectItem>
                          <SelectItem value="울산">울산</SelectItem>
                          <SelectItem value="경기">경기도</SelectItem>
                          <SelectItem value="강원">강원도</SelectItem>
                          <SelectItem value="충북">충청북도</SelectItem>
                          <SelectItem value="충남">충청남도</SelectItem>
                          <SelectItem value="전북">전북</SelectItem>
                          <SelectItem value="전남">전남</SelectItem>
                          <SelectItem value="경북">경상북도</SelectItem>
                          <SelectItem value="경남">경상남도</SelectItem>
                          <SelectItem value="제주">제주도</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>예상 날짜</Label>
                      <Select value={selectedDate} onValueChange={setSelectedDate}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="today">오늘</SelectItem>
                          <SelectItem value="tomorrow">내일</SelectItem>
                          <SelectItem value="day3">3일 후</SelectItem>
                          <SelectItem value="week">1주일 후</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>경기 시간대</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">아침 (9-12시)</SelectItem>
                          <SelectItem value="afternoon">오후 (12-17시)</SelectItem>
                          <SelectItem value="evening">저녁 (17-21시)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>기온 (°C)</Label>
                      <Input
                        type="number"
                        value={weatherData.temperature}
                        onChange={(e) => setWeatherData(prev => ({ ...prev, temperature: parseInt(e.target.value) || 0 }))}
                        placeholder="22"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>습도 (%)</Label>
                      <Input
                        type="number"
                        value={weatherData.humidity}
                        onChange={(e) => setWeatherData(prev => ({ ...prev, humidity: parseInt(e.target.value) || 0 }))}
                        placeholder="60"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>풍속 (km/h)</Label>
                      <Input
                        type="number"
                        value={weatherData.windSpeed}
                        onChange={(e) => setWeatherData(prev => ({ ...prev, windSpeed: parseInt(e.target.value) || 0 }))}
                        placeholder="5"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>강수 확률 (%)</Label>
                      <Input
                        type="number"
                        value={weatherData.precipitation}
                        onChange={(e) => setWeatherData(prev => ({ ...prev, precipitation: parseInt(e.target.value) || 0 }))}
                        placeholder="10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>자외선 지수</Label>
                    <Input
                      type="number"
                      value={weatherData.uvIndex}
                      onChange={(e) => setWeatherData(prev => ({ ...prev, uvIndex: parseInt(e.target.value) || 0 }))}
                      placeholder="3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>가시거리 (km)</Label>
                    <Input
                      type="number"
                      value={weatherData.visibility}
                      onChange={(e) => setWeatherData(prev => ({ ...prev, visibility: parseInt(e.target.value) || 0 }))}
                      placeholder="10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>대기질</Label>
                    <Select value={weatherData.airQuality} onValueChange={(value: WeatherData['airQuality']) => setWeatherData(prev => ({ ...prev, airQuality: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">매우 좋음</SelectItem>
                        <SelectItem value="good">좋음</SelectItem>
                        <SelectItem value="moderate">보통</SelectItem>
                        <SelectItem value="poor">나쁨</SelectItem>
                        <SelectItem value="hazardous">매우 나쁨</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 날씨 정보 요약 */}
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {weatherData.location} 날씨 정보
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl mb-1">{weatherData.temperature}°C</div>
                    <div className="text-sm text-gray-600">기온</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">{weatherData.humidity}%</div>
                    <div className="text-sm text-gray-600">습도</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">{weatherData.windSpeed} km/h</div>
                    <div className="text-sm text-gray-600">풍속</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">{weatherData.precipitation}%</div>
                    <div className="text-sm text-gray-600">강수 확률</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button
                onClick={analyzeWeather}
                size="lg"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700"
              >
                <Eye className="w-5 h-5 mr-2" />
                날씨 적합성 분석하기
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* 분석 결과 헤더 */}
            <Card className="bg-gradient-to-r from-blue-50 to-sky-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  {getSuitabilityIcon(analysis.suitability)}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">날씨 적합성 분석 결과</h2>
                    <p className="text-gray-600">테니스 경기 환경 평가</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-1">{analysis.overallScore}</div>
                    <div className="text-sm text-gray-600">적합성 점수</div>
                  </div>
                  <div className="text-center">
                    <Badge className={`text-lg px-4 py-2 ${suitabilityColors[analysis.suitability]}`}>
                      {getSuitabilityText(analysis.suitability)}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {analysis.optimalTimes.length}
                    </div>
                    <div className="text-sm text-gray-600">추천 시간대</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="recommendations" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recommendations">추천사항</TabsTrigger>
                <TabsTrigger value="risks">주의사항</TabsTrigger>
                <TabsTrigger value="schedule">일정 조언</TabsTrigger>
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
                      <p className="text-gray-600">현재 날씨에서 큰 위험 요소가 발견되지 않았습니다.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="schedule" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      최적 경기 시간 추천
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analysis.optimalTimes.map((time, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <Calendar className="w-5 h-5 text-blue-500" />
                          <p className="text-blue-800">{time}</p>
                        </div>
                      ))}
                      <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">경기 지속 시간 조언</h4>
                        <p className="text-yellow-800">{analysis.durationAdvice}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* 날씨 세부 정보 */}
            <Card>
              <CardHeader>
                <CardTitle>날씨 세부 정보</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Thermometer className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">자외선 지수</div>
                    <div className="text-gray-600">{weatherData.uvIndex}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Eye className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">가시거리</div>
                    <div className="text-gray-600">{weatherData.visibility}km</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Droplets className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">대기질</div>
                    <div className="text-gray-600">{airQualityLevels[weatherData.airQuality]}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Cloud className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">강수 확률</div>
                    <div className="text-gray-600">{weatherData.precipitation}%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4">
              <Button onClick={resetAnalysis} variant="outline" size="lg">
                새로운 분석
              </Button>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                분석 결과 저장
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
