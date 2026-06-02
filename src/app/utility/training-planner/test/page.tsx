'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { TrainingPlanInput, generateTrainingPlan } from '@/lib/trainingPlanner';

export default function TrainingPlannerTest() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<TrainingPlanInput>>({
    currentLevel: 'beginner',
    playStyle: 'all-round',
    goals: [],
    availableTime: { weekly: 0, sessionLength: 0 },
    focusAreas: [],
    physicalCondition: 'average',
    experience: 0
  });
  
  const steps = [
    { title: '기본 정보', description: '현재 실력과 경험을 알려주세요' },
    { title: '플레이 스타일', description: '당신의 플레이 스타일을 선택해주세요' },
    { title: '목표 설정', description: '달성하고 싶은 목표를 선택해주세요' },
    { title: '가용 시간', description: '훈련에 투자할 수 있는 시간을 알려주세요' },
    { title: '집중 영역', description: '중점적으로 연습하고 싶은 영역을 선택해주세요' },
    { title: '완료', description: '모든 정보가 입력되었습니다' }
  ];

  const progress = Math.round(((currentStep + 1) / steps.length) * 100);

  const handleInputChange = (field: string, value: unknown) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = field.split('.');
      let current = newData as Record<string, unknown>;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]] as Record<string, unknown>;
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const newData = { ...prev };
      const currentArray = newData[field as keyof TrainingPlanInput] as string[] || [];
      
      if (checked) {
        (newData as Record<string, unknown>)[field] = [...currentArray, value];
      } else {
        (newData as Record<string, unknown>)[field] = currentArray.filter(item => item !== value);
      }
      
      return newData;
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // 모든 데이터 입력 완료 - 계획 생성
      const result = generateTrainingPlan(formData as TrainingPlanInput);
      
      // 결과 페이지로 이동
      const params = new URLSearchParams();
      params.append('planName', result.planName);
      params.append('duration', result.duration.toString());
      params.append('weeklySchedule', JSON.stringify(result.weeklySchedule));
      params.append('focusAreas', JSON.stringify(result.focusAreas));
      params.append('progressMilestones', JSON.stringify(result.progressMilestones));
      params.append('recommendations', JSON.stringify(result.recommendations));
      params.append('equipment', JSON.stringify(result.equipment));
      params.append('nextSteps', JSON.stringify(result.nextSteps));
      
      router.push(`/utility/training-planner/result?${params.toString()}`);
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
          <div className="space-y-3">
            <div>
              <Label className="text-xs font-medium text-gray-700 mb-2 block">
                현재 테니스 실력
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'beginner', label: '초보자', desc: '테니스를 처음 시작하는 단계' },
                  { value: 'intermediate', label: '중급자', desc: '기본기를 익힌 단계' },
                  { value: 'advanced', label: '고급자', desc: '고급 기술을 익히는 단계' },
                  { value: 'expert', label: '전문가', desc: '경기 수준의 실력' }
                ].map((level) => (
                  <label key={level.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="currentLevel"
                      value={level.value}
                      checked={formData.currentLevel === level.value}
                      onChange={(e) => handleInputChange('currentLevel', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-2 border-2 rounded-lg transition-all duration-200 ${
                      formData.currentLevel === level.value
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}>
                      <div className="font-semibold text-gray-900 text-sm">{level.label}</div>
                      <div className="text-xs text-gray-600">{level.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="experience" className="text-xs font-medium text-gray-700 mb-1 block">
                테니스 경험 (년)
              </Label>
              <Input
                id="experience"
                type="number"
                value={formData.experience || ''}
                onChange={(e) => handleInputChange('experience', parseInt(e.target.value) || 0)}
                placeholder="2"
                className="w-full text-sm"
              />
            </div>
            
            <div>
              <Label className="text-xs font-medium text-gray-700 mb-2 block">
                현재 체력 상태
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'excellent', label: '우수', desc: '매우 좋은 체력 상태' },
                  { value: 'good', label: '양호', desc: '좋은 체력 상태' },
                  { value: 'average', label: '보통', desc: '평균적인 체력 상태' },
                  { value: 'poor', label: '개선 필요', desc: '체력 향상이 필요한 상태' }
                ].map((condition) => (
                  <label key={condition.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="physicalCondition"
                      value={condition.value}
                      checked={formData.physicalCondition === condition.value}
                      onChange={(e) => handleInputChange('physicalCondition', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-2 border-2 rounded-lg transition-all duration-200 ${
                      formData.physicalCondition === condition.value
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}>
                      <div className="font-semibold text-gray-900 text-sm">{condition.label}</div>
                      <div className="text-xs text-gray-600">{condition.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 1:
        return (
          <div className="space-y-3">
            <div>
              <Label className="text-xs font-medium text-gray-700 mb-2 block">
                플레이 스타일
              </Label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { value: 'aggressive', label: '공격형', desc: '강한 샷과 빠른 템포로 상대를 압박하는 스타일' },
                  { value: 'defensive', label: '수비형', desc: '안정적인 플레이로 상대의 실수를 유도하는 스타일' },
                  { value: 'all-round', label: '올라운드', desc: '상황에 맞게 공격과 수비를 조절하는 스타일' },
                  { value: 'serve-volley', label: '서브-발리', desc: '서브 후 네트로 전진하여 발리로 마무리하는 스타일' },
                  { value: 'baseline', label: '베이스라인', desc: '베이스라인에서 강력한 그라운드 스트로크를 구사하는 스타일' }
                ].map((style) => (
                  <label key={style.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="playStyle"
                      value={style.value}
                      checked={formData.playStyle === style.value}
                      onChange={(e) => handleInputChange('playStyle', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-2 border-2 rounded-lg transition-all duration-200 ${
                      formData.playStyle === style.value
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}>
                      <div className="font-semibold text-gray-900 text-sm">{style.label}</div>
                      <div className="text-xs text-gray-600">{style.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-3">
            <div>
              <Label className="text-xs font-medium text-gray-700 mb-2 block">
                달성하고 싶은 목표 (복수 선택 가능)
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  '기본기 향상',
                  '서브 정확도 개선',
                  '리턴 게임 강화',
                  '네트 플레이 향상',
                  '체력 향상',
                  '멘탈 강화',
                  '경기 승률 향상',
                  '부상 예방',
                  '전술 이해도 향상',
                  '일관성 있는 플레이'
                ].map((goal) => (
                  <label key={goal} className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(formData.goals || []).includes(goal)}
                      onChange={(e) => handleArrayChange('goals', goal, e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`p-2 border-2 rounded-lg transition-all duration-200 ${
                      (formData.goals || []).includes(goal)
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}>
                      <div className="font-semibold text-gray-900 text-sm">{goal}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-3">
            <div>
              <Label htmlFor="weekly" className="text-xs font-medium text-gray-700 mb-1 block">
                주당 훈련 시간 (시간)
              </Label>
              <Input
                id="weekly"
                type="number"
                value={formData.availableTime?.weekly || ''}
                onChange={(e) => handleInputChange('availableTime.weekly', parseInt(e.target.value) || 0)}
                placeholder="6"
                className="w-full text-sm"
              />
            </div>
            
            <div>
              <Label htmlFor="sessionLength" className="text-xs font-medium text-gray-700 mb-1 block">
                세션당 훈련 시간 (시간)
              </Label>
              <Input
                id="sessionLength"
                type="number"
                value={formData.availableTime?.sessionLength || ''}
                onChange={(e) => handleInputChange('availableTime.sessionLength', parseInt(e.target.value) || 0)}
                placeholder="1.5"
                className="w-full text-sm"
              />
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-3">
            <div>
              <Label className="text-xs font-medium text-gray-700 mb-2 block">
                중점적으로 연습하고 싶은 영역 (복수 선택 가능)
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  '기본 스트로크',
                  '서브',
                  '리턴',
                  '네트 플레이',
                  '체력',
                  '전술',
                  '멘탈 게임',
                  '부상 예방'
                ].map((area) => (
                  <label key={area} className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(formData.focusAreas || []).includes(area)}
                      onChange={(e) => handleArrayChange('focusAreas', area, e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`p-2 border-2 rounded-lg transition-all duration-200 ${
                      (formData.focusAreas || []).includes(area)
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}>
                      <div className="font-semibold text-gray-900 text-sm">{area}</div>
                    </div>
                  </label>
                ))}
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
      {/* Compact Header */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-4">
            <Badge className="bg-indigo-100 text-indigo-800 px-3 py-1 mb-2 text-sm font-semibold">
              📅 훈련 계획 수립
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              맞춤형 훈련 계획 생성
            </h1>
            <p className="text-gray-600 text-sm">
              {steps[currentStep].title}: {steps[currentStep].description}
            </p>
          </div>

          {/* Compact Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-700">
                단계 {currentStep + 1} / {steps.length}
              </span>
              <span className="text-xs font-medium text-gray-700">
                {Math.round(progress)}% 완료
              </span>
            </div>
            <Progress value={progress} className="h-1" />
          </div>
        </div>
      </section>

      {/* Compact Form Section */}
      <section className="py-2 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                {steps[currentStep].title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-0">
              {renderStepContent()}

              {/* Compact Navigation */}
              <div className="flex justify-between items-center mt-4">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="bg-white border-gray-300 hover:border-indigo-500 px-3 py-2 text-sm"
                  >
                    <ArrowLeft className="h-3 w-3 mr-1" />
                    이전
                  </Button>

                  <div className="flex items-center gap-1">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index <= currentStep ? 'bg-indigo-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={handleNext}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm"
                  >
                    {currentStep === steps.length - 1 ? '계획 생성' : '다음'}
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
