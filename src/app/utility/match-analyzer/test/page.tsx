'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft, BarChart3, CheckCircle } from 'lucide-react';
import { MatchAnalysisInput, analyzeMatch } from '@/lib/matchAnalyzer';
import { FadeIn, SlideUp } from '@/components/ScrollAnimation';

export default function MatchAnalyzerTest() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<MatchAnalysisInput>>({
    matchType: 'singles',
    duration: 0,
    sets: 0,
    games: [],
    points: { won: 0, lost: 0 },
    serves: { firstServeIn: 0, firstServeTotal: 0, secondServeIn: 0, secondServeTotal: 0, aces: 0, doubleFaults: 0 },
    returns: { firstServeReturnWon: 0, firstServeReturnTotal: 0, secondServeReturnWon: 0, secondServeReturnTotal: 0 },
    winners: { forehand: 0, backhand: 0, volley: 0, overhead: 0 },
    errors: { forehand: 0, backhand: 0, volley: 0, overhead: 0 },
    netPlay: { approaches: 0, volleysWon: 0, volleysLost: 0 },
    mental: { breakPointsWon: 0, breakPointsFaced: 0, tiebreakWon: 0, tiebreakLost: 0 }
  });
  
  const steps = [
    { title: '기본 정보', description: '경기 유형과 기본 정보를 입력해주세요' },
    { title: '서브 통계', description: '서브 관련 통계를 입력해주세요' },
    { title: '리턴 통계', description: '리턴 관련 통계를 입력해주세요' },
    { title: '스트로크 통계', description: '위너와 에러 통계를 입력해주세요' },
    { title: '네트 플레이', description: '네트 플레이 관련 통계를 입력해주세요' },
    { title: '멘탈 게임', description: '중요 포인트 관련 통계를 입력해주세요' },
    { title: '완료', description: '모든 정보가 입력되었습니다' }
  ];

  const progress = Math.round(((currentStep + 1) / steps.length) * 100);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = field.split('.');
      let current = newData as any;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // 모든 데이터 입력 완료 - 분석 실행
      const result = analyzeMatch(formData as MatchAnalysisInput);
      
      // 결과 페이지로 이동
      const params = new URLSearchParams();
      params.append('overallScore', result.overallScore.toString());
      params.append('grade', result.grade);
      params.append('strengths', JSON.stringify(result.strengths));
      params.append('weaknesses', JSON.stringify(result.weaknesses));
      params.append('improvements', JSON.stringify(result.improvements));
      params.append('statistics', JSON.stringify(result.statistics));
      params.append('recommendations', JSON.stringify(result.recommendations));
      params.append('nextMatchGoals', JSON.stringify(result.nextMatchGoals));
      
      router.push(`/utility/match-analyzer/result?${params.toString()}`);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="matchType" className="text-sm font-medium text-gray-700 mb-2 block">
                경기 유형
              </Label>
              <select
                id="matchType"
                value={formData.matchType || 'singles'}
                onChange={(e) => handleInputChange('matchType', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="singles">싱글스</option>
                <option value="doubles">더블스</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-2 block">
                경기 시간 (분)
              </Label>
              <Input
                id="duration"
                type="number"
                value={formData.duration || ''}
                onChange={(e) => handleInputChange('duration', parseInt(e.target.value) || 0)}
                placeholder="예: 90"
                className="w-full"
              />
            </div>
            
            <div>
              <Label htmlFor="sets" className="text-sm font-medium text-gray-700 mb-2 block">
                세트 수
              </Label>
              <Input
                id="sets"
                type="number"
                value={formData.sets || ''}
                onChange={(e) => handleInputChange('sets', parseInt(e.target.value) || 0)}
                placeholder="예: 3"
                className="w-full"
              />
            </div>
          </div>
        );
        
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstServeIn" className="text-sm font-medium text-gray-700 mb-2 block">
                  첫 서브 성공 개수
                </Label>
                <Input
                  id="firstServeIn"
                  type="number"
                  value={formData.serves?.firstServeIn || ''}
                  onChange={(e) => handleInputChange('serves.firstServeIn', parseInt(e.target.value) || 0)}
                  placeholder="예: 45"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="firstServeTotal" className="text-sm font-medium text-gray-700 mb-2 block">
                  첫 서브 총 개수
                </Label>
                <Input
                  id="firstServeTotal"
                  type="number"
                  value={formData.serves?.firstServeTotal || ''}
                  onChange={(e) => handleInputChange('serves.firstServeTotal', parseInt(e.target.value) || 0)}
                  placeholder="예: 60"
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="aces" className="text-sm font-medium text-gray-700 mb-2 block">
                  에이스 개수
                </Label>
                <Input
                  id="aces"
                  type="number"
                  value={formData.serves?.aces || ''}
                  onChange={(e) => handleInputChange('serves.aces', parseInt(e.target.value) || 0)}
                  placeholder="예: 8"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="doubleFaults" className="text-sm font-medium text-gray-700 mb-2 block">
                  더블폴트 개수
                </Label>
                <Input
                  id="doubleFaults"
                  type="number"
                  value={formData.serves?.doubleFaults || ''}
                  onChange={(e) => handleInputChange('serves.doubleFaults', parseInt(e.target.value) || 0)}
                  placeholder="예: 3"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstServeReturnWon" className="text-sm font-medium text-gray-700 mb-2 block">
                  첫 서브 리턴 성공 개수
                </Label>
                <Input
                  id="firstServeReturnWon"
                  type="number"
                  value={formData.returns?.firstServeReturnWon || ''}
                  onChange={(e) => handleInputChange('returns.firstServeReturnWon', parseInt(e.target.value) || 0)}
                  placeholder="예: 20"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="firstServeReturnTotal" className="text-sm font-medium text-gray-700 mb-2 block">
                  첫 서브 리턴 총 개수
                </Label>
                <Input
                  id="firstServeReturnTotal"
                  type="number"
                  value={formData.returns?.firstServeReturnTotal || ''}
                  onChange={(e) => handleInputChange('returns.firstServeReturnTotal', parseInt(e.target.value) || 0)}
                  placeholder="예: 30"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">위너 개수</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="forehandWinner" className="text-sm font-medium text-gray-700 mb-2 block">
                    포핸드 위너
                  </Label>
                  <Input
                    id="forehandWinner"
                    type="number"
                    value={formData.winners?.forehand || ''}
                    onChange={(e) => handleInputChange('winners.forehand', parseInt(e.target.value) || 0)}
                    placeholder="예: 15"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="backhandWinner" className="text-sm font-medium text-gray-700 mb-2 block">
                    백핸드 위너
                  </Label>
                  <Input
                    id="backhandWinner"
                    type="number"
                    value={formData.winners?.backhand || ''}
                    onChange={(e) => handleInputChange('winners.backhand', parseInt(e.target.value) || 0)}
                    placeholder="예: 8"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">에러 개수</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="forehandError" className="text-sm font-medium text-gray-700 mb-2 block">
                    포핸드 에러
                  </Label>
                  <Input
                    id="forehandError"
                    type="number"
                    value={formData.errors?.forehand || ''}
                    onChange={(e) => handleInputChange('errors.forehand', parseInt(e.target.value) || 0)}
                    placeholder="예: 12"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="backhandError" className="text-sm font-medium text-gray-700 mb-2 block">
                    백핸드 에러
                  </Label>
                  <Input
                    id="backhandError"
                    type="number"
                    value={formData.errors?.backhand || ''}
                    onChange={(e) => handleInputChange('errors.backhand', parseInt(e.target.value) || 0)}
                    placeholder="예: 10"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="approaches" className="text-sm font-medium text-gray-700 mb-2 block">
                  네트 어프로치 개수
                </Label>
                <Input
                  id="approaches"
                  type="number"
                  value={formData.netPlay?.approaches || ''}
                  onChange={(e) => handleInputChange('netPlay.approaches', parseInt(e.target.value) || 0)}
                  placeholder="예: 10"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="volleysWon" className="text-sm font-medium text-gray-700 mb-2 block">
                  발리 성공 개수
                </Label>
                <Input
                  id="volleysWon"
                  type="number"
                  value={formData.netPlay?.volleysWon || ''}
                  onChange={(e) => handleInputChange('netPlay.volleysWon', parseInt(e.target.value) || 0)}
                  placeholder="예: 8"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="breakPointsWon" className="text-sm font-medium text-gray-700 mb-2 block">
                  브레이크 포인트 성공 개수
                </Label>
                <Input
                  id="breakPointsWon"
                  type="number"
                  value={formData.mental?.breakPointsWon || ''}
                  onChange={(e) => handleInputChange('mental.breakPointsWon', parseInt(e.target.value) || 0)}
                  placeholder="예: 3"
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="breakPointsFaced" className="text-sm font-medium text-gray-700 mb-2 block">
                  브레이크 포인트 총 개수
                </Label>
                <Input
                  id="breakPointsFaced"
                  type="number"
                  value={formData.mental?.breakPointsFaced || ''}
                  onChange={(e) => handleInputChange('mental.breakPointsFaced', parseInt(e.target.value) || 0)}
                  placeholder="예: 5"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4 text-sm font-semibold">
              📊 경기 분석 도구
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              경기 데이터 입력
            </h1>
            <p className="text-gray-600 text-lg">
              {steps[currentStep].title}: {steps[currentStep].description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                단계 {currentStep + 1} / {steps.length}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {Math.round(progress)}% 완료
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
                  {steps[currentStep].title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                {renderStepContent()}

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="bg-white border-gray-300 hover:border-blue-500 px-6 py-3"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    이전
                  </Button>

                  <div className="flex items-center gap-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={handleNext}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                  >
                    {currentStep === steps.length - 1 ? '분석 시작' : '다음'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              경기 분석 안내
            </h3>
            <p className="text-gray-600 mb-6">
              정확한 데이터를 입력하시면 더 정확한 분석 결과를 받을 수 있습니다.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-semibold text-blue-900 mb-2">📊 중요 안내</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                경기 중 기록한 통계를 바탕으로 입력해주세요. 정확하지 않은 경우 대략적인 수치로도 
                분석이 가능하지만, 더 정확한 결과를 위해서는 세밀한 기록을 권장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
