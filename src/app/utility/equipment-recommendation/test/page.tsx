'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft, Target, CheckCircle } from 'lucide-react';
import { EquipmentInput, calculateEquipmentRecommendations } from '@/lib/equipmentRecommendation';
import { FadeIn, SlideUp } from '@/components/ScrollAnimation';

export default function EquipmentRecommendationTest() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<EquipmentInput>>({});
  
  const steps = [
    { title: '기본 정보', description: '나이와 실력을 알려주세요' },
    { title: '플레이 스타일', description: '어떤 스타일로 플레이하시나요?' },
    { title: '예산과 선호도', description: '예산과 장비 선호도를 알려주세요' },
    { title: '부상 이력', description: '이전 부상 이력이 있다면 알려주세요' },
    { title: '완료', description: '모든 정보가 입력되었습니다' }
  ];

  const questions = [
    {
      id: 'age',
      question: '나이를 선택해주세요',
      type: 'select',
      options: [
        { value: 16, label: '16-17세' },
        { value: 25, label: '18-29세' },
        { value: 35, label: '30-39세' },
        { value: 45, label: '40-49세' },
        { value: 55, label: '50-59세' },
        { value: 65, label: '60세 이상' }
      ]
    },
    {
      id: 'skillLevel',
      question: '테니스 실력은 어느 정도인가요?',
      type: 'radio',
      options: [
        { value: 'beginner', label: '초보자 (1년 미만)' },
        { value: 'intermediate', label: '중급자 (1-3년)' },
        { value: 'advanced', label: '고급자 (3-5년)' },
        { value: 'expert', label: '전문가 (5년 이상)' }
      ]
    },
    {
      id: 'playStyle',
      question: '주로 어떤 스타일로 플레이하시나요?',
      type: 'radio',
      options: [
        { value: 'control', label: '컨트롤 (정확한 샷)' },
        { value: 'power', label: '파워 (강력한 샷)' },
        { value: 'spin', label: '스핀 (회전을 이용한 샷)' },
        { value: 'all-round', label: '올라운더 (균형잡힌 플레이)' }
      ]
    },
    {
      id: 'budget',
      question: '장비 구매 예산은 어느 정도인가요?',
      type: 'radio',
      options: [
        { value: 'low', label: '저예산 (10만원 이하)' },
        { value: 'medium', label: '중간가격 (10-20만원)' },
        { value: 'high', label: '고가 (20-30만원)' },
        { value: 'premium', label: '프리미엄 (30만원 이상)' }
      ]
    },
    {
      id: 'racketHeadSize',
      question: '선호하는 라켓 헤드 사이즈는?',
      type: 'radio',
      options: [
        { value: 'mid', label: '미드 (95-98 sq in)' },
        { value: 'mid-plus', label: '미드 플러스 (98-100 sq in)' },
        { value: 'oversize', label: '오버사이즈 (100+ sq in)' }
      ]
    },
    {
      id: 'weight',
      question: '선호하는 라켓 무게는?',
      type: 'radio',
      options: [
        { value: 'light', label: '라이트 (280g 이하)' },
        { value: 'medium', label: '미디엄 (280-300g)' },
        { value: 'heavy', label: '헤비 (300g 이상)' }
      ]
    },
    {
      id: 'gripSize',
      question: '그립 사이즈는? (모르면 중간으로 선택)',
      type: 'radio',
      options: [
        { value: '4-0', label: '4-0 (매우 작음)' },
        { value: '4-1/8', label: '4-1/8 (작음)' },
        { value: '4-1/4', label: '4-1/4 (중간)' },
        { value: '4-3/8', label: '4-3/8 (중간)' },
        { value: '4-1/2', label: '4-1/2 (큼)' },
        { value: '4-5/8', label: '4-5/8 (매우 큼)' }
      ]
    },
    {
      id: 'stringType',
      question: '선호하는 스트링 타입은?',
      type: 'radio',
      options: [
        { value: 'synthetic', label: '합성거트 (편안함)' },
        { value: 'polyester', label: '폴리에스터 (컨트롤)' },
        { value: 'natural-gut', label: '천연거트 (파워)' },
        { value: 'hybrid', label: '하이브리드 (균형)' }
      ]
    },
    {
      id: 'courtType',
      question: '주로 플레이하는 코트 타입은?',
      type: 'radio',
      options: [
        { value: 'hard', label: '하드코트' },
        { value: 'clay', label: '클레이코트' },
        { value: 'grass', label: '그래스코트' },
        { value: 'mixed', label: '혼합' }
      ]
    },
    {
      id: 'previousInjuries',
      question: '이전에 겪은 부상이 있다면? (복수 선택 가능)',
      type: 'checkbox',
      options: [
        { value: 'tennis-elbow', label: '테니스 엘보우' },
        { value: 'shoulder', label: '어깨 부상' },
        { value: 'knee', label: '무릎 부상' },
        { value: 'ankle', label: '발목 부상' },
        { value: 'back', label: '허리 부상' },
        { value: 'none', label: '부상 이력 없음' }
      ]
    }
  ];

  const progress = Math.round(((currentStep + 1) / steps.length) * 100);
  const currentQuestion = questions[currentStep];

  const handleAnswer = (value: any) => {
    setFormData(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // 모든 질문 완료 - 결과 계산
      const result = calculateEquipmentRecommendations(formData as EquipmentInput);
      
      // 결과 페이지로 이동
      const params = new URLSearchParams();
      params.append('rackets', JSON.stringify(result.rackets));
      params.append('strings', JSON.stringify(result.strings));
      params.append('accessories', JSON.stringify(result.accessories));
      params.append('totalBudget', JSON.stringify(result.totalBudget));
      
      router.push(`/utility/equipment-recommendation/result?${params.toString()}`);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isAnswerSelected = () => {
    const currentValue = formData[currentQuestion.id as keyof EquipmentInput];
    return currentValue !== undefined && currentValue !== null;
  };

  if (currentStep >= questions.length) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">장비를 분석하고 있습니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4 text-sm font-semibold">
              🎾 장비 추천 시스템
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              나에게 맞는 장비 찾기
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

      {/* Question Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
                  {currentQuestion.question}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <RadioGroup
                  value={formData[currentQuestion.id as keyof EquipmentInput] as string}
                  onValueChange={handleAnswer}
                  className="space-y-3"
                >
                  {currentQuestion.options.map((option) => (
                    <div key={String(option.value)} className="flex items-center space-x-3">
                      <RadioGroupItem value={String(option.value)} id={String(option.value)} />
                      <Label 
                        htmlFor={String(option.value)} 
                        className="text-gray-700 cursor-pointer flex-1 py-2 hover:text-blue-600 transition-colors"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

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
                    disabled={!isAnswerSelected()}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                  >
                    {currentStep === questions.length - 1 ? '추천 받기' : '다음'}
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
              장비 추천 안내
            </h3>
            <p className="text-gray-600 mb-6">
              정확한 정보를 입력하시면 더 정확한 장비 추천을 받을 수 있습니다.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-semibold text-blue-900 mb-2">🎾 중요 안내</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                이 추천은 일반적인 가이드라인입니다. 실제 구매 전에는 전문가와 상담하거나 
                직접 테스트해보시는 것을 권장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
