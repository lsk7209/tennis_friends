'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Check, Calculator, Sparkles, Settings, Target } from 'lucide-react';
import { TensionInput } from '@/lib/tensionCalc';

export default function StringTensionTest() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<TensionInput>>({});

  const steps = [
    {
      id: 'headSize',
      title: '라켓 헤드 크기',
      description: '당신의 라켓 헤드 크기를 선택하세요',
      icon: Target,
      gradient: 'from-blue-500 to-cyan-500',
      options: [
        { value: 'Small', label: 'Small (90-95 sq in)', description: '정밀한 컨트롤을 원하는 플레이어' },
        { value: 'Mid', label: 'Mid (98-100 sq in)', description: '균형잡힌 플레이를 원하는 플레이어' },
        { value: 'Oversize', label: 'Oversize (102-110+ sq in)', description: '넓은 스윗스팟을 원하는 플레이어' }
      ]
    },
    {
      id: 'stringType',
      title: '스트링 종류',
      description: '현재 사용 중인 스트링 종류를 선택하세요',
      icon: Settings,
      gradient: 'from-green-500 to-emerald-500',
      options: [
        { value: 'Polyester', label: 'Polyester (폴리)', description: '내구성 좋고 스핀 효과 높음' },
        { value: 'Multifilament', label: 'Multifilament (멀티)', description: '부드러운 감각과 파워' },
        { value: 'Natural Gut', label: 'Natural Gut (자연거트)', description: '최고의 감각과 파워' },
        { value: 'Hybrid', label: 'Hybrid (하이브리드)', description: '메인과 크로스 다른 스트링' }
      ]
    },
    {
      id: 'playStyle',
      title: '플레이 스타일',
      description: '당신의 플레이 스타일을 선택하세요',
      icon: Target,
      gradient: 'from-purple-500 to-pink-500',
      options: [
        { value: '컨트롤형', label: '컨트롤형', description: '정확한 샷과 안정적인 플레이' },
        { value: '파워형', label: '파워형', description: '강력한 샷과 공격적 플레이' },
        { value: '스핀형', label: '스핀형', description: '스핀을 활용한 기술적 플레이' },
        { value: '올라운더', label: '올라운더', description: '모든 기술을 균형있게 구사' }
      ]
    },
    {
      id: 'environment',
      title: '플레이 환경',
      description: '주로 플레이하는 환경을 선택하세요',
      icon: Sparkles,
      gradient: 'from-orange-500 to-amber-500',
      options: [
        { value: '실내', label: '실내 코트', description: '온도와 습도가 일정한 환경' },
        { value: '실외(여름)', label: '실외 코트 (여름)', description: '고온다습한 여름 환경' },
        { value: '실외(겨울)', label: '실외 코트 (겨울)', description: '저온건조한 겨울 환경' },
        { value: '실외(봄/가을)', label: '실외 코트 (봄/가을)', description: '온화한 봄/가을 환경' }
      ]
    },
    {
      id: 'feelPreference',
      title: '선호하는 타구감',
      description: '어떤 타구감을 선호하시나요?',
      icon: Sparkles,
      gradient: 'from-pink-500 to-rose-500',
      options: [
        { value: '부드럽게', label: '부드럽게', description: '편안하고 부드러운 타구감' },
        { value: '적당히', label: '적당히', description: '균형잡힌 타구감' },
        { value: '단단하게', label: '단단하게', description: '뚜렷하고 단단한 타구감' }
      ]
    },
    {
      id: 'ntrpLevel',
      title: 'NTRP 레벨 (선택사항)',
      description: '당신의 테니스 실력 레벨을 선택하세요',
      icon: Target,
      gradient: 'from-indigo-500 to-purple-500',
      options: [
        { value: '2.5', label: '2.5 - 초보자', description: '기본 스트로크를 배우는 단계' },
        { value: '3.0', label: '3.0 - 초급자', description: '기본 스트로크를 구사할 수 있음' },
        { value: '3.5', label: '3.5 - 중급자', description: '안정적인 스트로크와 서브' },
        { value: '4.0', label: '4.0 - 중상급자', description: '다양한 샷과 전술 구사' },
        { value: '4.5+', label: '4.5+ - 상급자', description: '고급 기술과 전술 마스터' }
      ]
    }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  // 자동 스크롤 제거: 단계 변경 시 화면 위치를 유지하여 질문과 답변이 함께 보이도록 함

  const handleOptionSelect = (value: string) => {
    const stepId = steps[currentStep].id as keyof TensionInput;
    setFormData(prev => ({
      ...prev,
      [stepId]: value
    }));
    
    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 400);
    } else {
      setTimeout(() => {
        const params = new URLSearchParams();
        Object.entries({ ...formData, [stepId]: value }).forEach(([key, value]) => {
          if (value) params.append(key, value);
        });
        router.push(`/utility/string-tension/result?${params.toString()}`);
      }, 600);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];
  const isStepComplete = formData[currentStepData.id as keyof TensionInput] !== undefined;
  const IconComponent = currentStepData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
      {/* Header Section */}
      <section className="relative overflow-hidden py-8 md:py-12 bg-gradient-to-br from-blue-600 via-emerald-600 to-teal-600">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 mb-4 text-sm font-semibold shadow-lg">
              <Calculator className="h-4 w-4 mr-2 inline" />
              스트링 텐션 계산기
            </Badge>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              나에게 맞는 텐션 찾기
            </h1>
            <p className="text-blue-50 text-base md:text-lg font-medium">
              간단한 질문에 답하면 최적의 텐션을 추천해드립니다
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-bold text-sm md:text-base">
                단계 {currentStep + 1} / {steps.length}
              </span>
              <span className="text-white font-bold text-sm md:text-base">
                {Math.round(progress)}% 완료
              </span>
            </div>
            <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
              <div 
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${currentStepData.gradient} rounded-full transition-all duration-500 shadow-lg`}
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
            
            {/* Progress Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index < currentStep 
                      ? 'bg-white w-8' 
                      : index === currentStep
                      ? 'bg-white w-6 animate-pulse'
                      : 'bg-white/30 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-6 md:p-10">
              {/* Step Number Badge */}
              <div className="flex items-center justify-center mb-6">
                <Badge className={`bg-gradient-to-r ${currentStepData.gradient} text-white px-6 py-2 text-sm font-bold shadow-lg`}>
                  <IconComponent className="h-4 w-4 mr-2" />
                  단계 {currentStep + 1}
                </Badge>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${currentStepData.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {currentStepData.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                  {currentStepData.description}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {currentStepData.options.map((option, index) => {
                  const isSelected = formData[currentStepData.id as keyof TensionInput] === option.value;
                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option.value)}
                      className={`p-5 text-left border-2 rounded-2xl transition-all duration-300 transform group ${
                        isSelected
                          ? `bg-gradient-to-r ${currentStepData.gradient} border-transparent text-white shadow-xl scale-[1.02]`
                          : 'bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50 hover:scale-[1.01] hover:shadow-lg text-gray-900'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <h3 className={`font-bold text-base md:text-lg mb-2 ${
                            isSelected ? 'text-white' : 'text-gray-900'
                          }`}>
                            {option.label}
                          </h3>
                          <p className={`text-sm ${
                            isSelected ? 'text-white/90' : 'text-gray-600'
                          }`}>
                            {option.description}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="flex-shrink-0 ml-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                              <Check className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentStep === 0
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-100 hover:scale-105 border-2'
                  }`}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  이전
                </Button>

                <div className="text-center">
                  <div className="text-sm text-gray-500 font-medium mb-1">
                    진행 상황
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {currentStep + 1} / {steps.length}
                  </div>
                </div>

                <div className="w-24"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Help Section */}
      <section className="pb-12">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="bg-gradient-to-br from-blue-50 to-emerald-50 border-2 border-blue-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2 text-base">💡 도움말</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    각 질문에 대한 자세한 설명이 필요하시면 도움말을 확인해보세요.
                    정확한 정보를 입력할수록 더 정확한 텐션 추천을 받을 수 있습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
