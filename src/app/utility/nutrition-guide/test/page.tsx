'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {ArrowRight, ArrowLeft} from 'lucide-react';
import { NutritionInput, generateNutritionPlan } from '@/lib/nutritionGuide';
import {FadeIn} from '@/components/ScrollAnimation';

export default function NutritionGuideTest() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<NutritionInput>>({
    activityLevel: 'moderate',
    sessionDuration: 0,
    sessionType: 'practice',
    timeOfDay: 'afternoon',
    weather: 'moderate',
    goals: [],
    dietaryRestrictions: [],
    bodyWeight: 0,
    age: 0,
    gender: 'male'
  });
  
  const steps = [
    { title: '기본 정보', description: '체중, 나이, 성별을 알려주세요' },
    { title: '활동 정보', description: '테니스 활동 수준과 세션 정보를 입력해주세요' },
    { title: '환경 조건', description: '세션 시간과 날씨 조건을 알려주세요' },
    { title: '목표 설정', description: '달성하고 싶은 목표를 선택해주세요' },
    { title: '식이 제한', description: '식이 제한사항이 있다면 알려주세요' },
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

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const newData = { ...prev };
      const currentArray = newData[field as keyof NutritionInput] as string[] || [];
      
      if (checked) {
        (newData as any)[field] = [...currentArray, value];
      } else {
        (newData as any)[field] = currentArray.filter(item => item !== value);
      }
      
      return newData;
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // 모든 데이터 입력 완료 - 계획 생성
      const result = generateNutritionPlan(formData as NutritionInput);
      
      // 결과 페이지로 이동
      const params = new URLSearchParams();
       params.append('planName', result.planName || '기본 영양 계획');
       params.append('totalCalories', result.totalCalories || '0');
       params.append('macronutrients', JSON.stringify(result.macronutrients || {}));
       params.append('hydration', JSON.stringify(result.hydration || {}));
      params.append('mealPlan', JSON.stringify(result.meals || []));
      params.append('supplements', JSON.stringify(result.supplements || []));
      params.append('timing', JSON.stringify(result.timing || []));
      params.append('recommendations', JSON.stringify(result.recommendations || {}));
      
      router.push(`/utility/nutrition-guide/result?${params.toString()}`);
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
              <Label htmlFor="bodyWeight" className="text-sm font-medium text-gray-700 mb-2 block">
                체중 (kg)
              </Label>
              <Input
                id="bodyWeight"
                type="number"
                value={formData.bodyWeight || ''}
                onChange={(e) => handleInputChange('bodyWeight', parseFloat(e.target.value) || 0)}
                placeholder="예: 70"
                className="w-full"
              />
            </div>
            
            <div>
              <Label htmlFor="age" className="text-sm font-medium text-gray-700 mb-2 block">
                나이 (세)
              </Label>
              <Input
                id="age"
                type="number"
                value={formData.age || ''}
                onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 0)}
                placeholder="예: 30"
                className="w-full"
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                성별
              </Label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'male', label: '남성', desc: '남성 기준 영양 계산' },
                  { value: 'female', label: '여성', desc: '여성 기준 영양 계산' }
                ].map((gender) => (
                  <label key={gender.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value={gender.value}
                      checked={formData.gender === gender.value}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg transition-all duration-300 ${
                      formData.gender === gender.value
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}>
                      <div className="font-semibold text-gray-900">{gender.label}</div>
                      <div className="text-sm text-gray-600">{gender.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                테니스 활동 수준
              </Label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'low', label: '가벼운', desc: '주 1-2회, 1시간 이하' },
                  { value: 'moderate', label: '보통', desc: '주 2-3회, 1-2시간' },
                  { value: 'high', label: '강도 높은', desc: '주 3-4회, 2-3시간' },
                  { value: 'intense', label: '고강도', desc: '주 4회 이상, 3시간 이상' }
                ].map((level) => (
                  <label key={level.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="activityLevel"
                      value={level.value}
                      checked={formData.activityLevel === level.value}
                      onChange={(e) => handleInputChange('activityLevel', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg transition-all duration-300 ${
                      formData.activityLevel === level.value
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}>
                      <div className="font-semibold text-gray-900">{level.label}</div>
                      <div className="text-sm text-gray-600">{level.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="sessionDuration" className="text-sm font-medium text-gray-700 mb-2 block">
                세션 시간 (분)
              </Label>
              <Input
                id="sessionDuration"
                type="number"
                value={formData.sessionDuration || ''}
                onChange={(e) => handleInputChange('sessionDuration', parseInt(e.target.value) || 0)}
                placeholder="예: 90"
                className="w-full"
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                세션 유형
              </Label>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { value: 'practice', label: '연습', desc: '기술 연습이나 친선 경기' },
                  { value: 'match', label: '경기', desc: '공식적인 경기나 토너먼트' },
                  { value: 'tournament', label: '토너먼트', desc: '여러 경기를 연속으로 하는 토너먼트' }
                ].map((type) => (
                  <label key={type.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="sessionType"
                      value={type.value}
                      checked={formData.sessionType === type.value}
                      onChange={(e) => handleInputChange('sessionType', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg transition-all duration-300 ${
                      formData.sessionType === type.value
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}>
                      <div className="font-semibold text-gray-900">{type.label}</div>
                      <div className="text-sm text-gray-600">{type.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                세션 시간대
              </Label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'morning', label: '오전', desc: '6-12시' },
                  { value: 'afternoon', label: '오후', desc: '12-18시' },
                  { value: 'evening', label: '저녁', desc: '18-24시' }
                ].map((time) => (
                  <label key={time.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="timeOfDay"
                      value={time.value}
                      checked={formData.timeOfDay === time.value}
                      onChange={(e) => handleInputChange('timeOfDay', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg transition-all duration-300 ${
                      formData.timeOfDay === time.value
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}>
                      <div className="font-semibold text-gray-900">{time.label}</div>
                      <div className="text-sm text-gray-600">{time.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                날씨 조건
              </Label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'cool', label: '시원한', desc: '20도 이하' },
                  { value: 'moderate', label: '보통', desc: '20-30도' },
                  { value: 'hot', label: '더운', desc: '30도 이상' }
                ].map((weather) => (
                  <label key={weather.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="weather"
                      value={weather.value}
                      checked={formData.weather === weather.value}
                      onChange={(e) => handleInputChange('weather', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg transition-all duration-300 ${
                      formData.weather === weather.value
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}>
                      <div className="font-semibold text-gray-900">{weather.label}</div>
                      <div className="text-sm text-gray-600">{weather.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                달성하고 싶은 목표 (복수 선택 가능)
              </Label>
              <div className="grid grid-cols-1 gap-4">
                {[
                  '체중 감량',
                  '체중 증가',
                  '근육량 증가',
                  '지구력 향상',
                  '회복력 향상',
                  '에너지 수준 향상',
                  '수분 보충 최적화',
                  '부상 예방',
                  '경기력 향상',
                  '전반적인 건강 개선'
                ].map((goal) => (
                  <label key={goal} className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(formData.goals || []).includes(goal)}
                      onChange={(e) => handleArrayChange('goals', goal, e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg transition-all duration-300 ${
                      (formData.goals || []).includes(goal)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}>
                      <div className="font-semibold text-gray-900">{goal}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                식이 제한사항 (해당사항 선택)
              </Label>
              <div className="grid grid-cols-1 gap-4">
                {[
                  '없음',
                  '채식주의',
                  '비건',
                  '글루텐 프리',
                  '유당 불내증',
                  '견과류 알레르기',
                  '해산물 알레르기',
                  '달걀 알레르기',
                  '저나트륨',
                  '저탄수화물',
                  '저지방',
                  '할랄',
                  '코셔'
                ].map((restriction) => (
                  <label key={restriction} className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(formData.dietaryRestrictions || []).includes(restriction)}
                      onChange={(e) => handleArrayChange('dietaryRestrictions', restriction, e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg transition-all duration-300 ${
                      (formData.dietaryRestrictions || []).includes(restriction)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}>
                      <div className="font-semibold text-gray-900">{restriction}</div>
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
      {/* Header */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4 text-sm font-semibold">
              🍎 테니스 영양 가이드
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              맞춤형 영양 계획 생성
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
                    className="bg-white border-gray-300 hover:border-green-500 px-6 py-3"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    이전
                  </Button>

                  <div className="flex items-center gap-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index <= currentStep ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={handleNext}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
                  >
                    {currentStep === steps.length - 1 ? '계획 생성' : '다음'}
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
              영양 계획 안내
            </h3>
            <p className="text-gray-600 mb-6">
              정확한 정보를 입력하시면 더 효과적인 영양 계획을 받을 수 있습니다.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-semibold text-green-900 mb-2">🍎 중요 안내</h4>
              <p className="text-green-800 text-sm leading-relaxed">
                입력하신 정보를 바탕으로 개인에 맞는 맞춤형 영양 계획을 생성합니다. 
                계획은 세션 전후와 일상 식단을 포함하며, 각 식사의 칼로리와 영양소가 상세히 제시됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
