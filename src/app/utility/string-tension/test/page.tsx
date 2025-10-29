'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
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

  const handleOptionSelect = (value: string) => {
    const stepId = steps[currentStep].id as keyof TensionInput;
    setFormData(prev => ({
      ...prev,
      [stepId]: value
    }));
    
    // 자동으로 다음 단계로 이동
    if (currentStep < steps.length - 1) {
      // 다음 단계로 이동
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300); // 300ms 딜레이로 자연스러운 전환
    } else {
      // 마지막 단계 - 결과 페이지로 이동
      setTimeout(() => {
        const params = new URLSearchParams();
        Object.entries({ ...formData, [stepId]: value }).forEach(([key, value]) => {
          if (value) params.append(key, value);
        });
        router.push(`/utility/string-tension/result?${params.toString()}`);
      }, 500); // 조금 더 긴 딜레이로 완료감 제공
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // 모든 단계 완료 - 결과 페이지로 이동
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
      router.push(`/utility/string-tension/result?${params.toString()}`);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];
  const isStepComplete = formData[currentStepData.id as keyof TensionInput] !== undefined;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4 text-sm font-semibold">
              🎾 스트링 텐션 계산기
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              나에게 맞는 텐션 찾기
            </h1>
            <p className="text-gray-600 text-lg">
              간단한 질문에 답하면 최적의 텐션을 추천해드립니다
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
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {currentStepData.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {currentStepData.description}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentStepData.options.map((option, index) => {
                  const isSelected = formData[currentStepData.id as keyof TensionInput] === option.value;
                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option.value)}
                      className={`p-6 text-left border-2 rounded-xl transition-all duration-300 transform ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50 shadow-lg scale-[1.02]'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 hover:scale-[1.01]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <h3 className={`font-semibold text-lg mb-2 ${
                            isSelected ? 'text-blue-900' : 'text-gray-900'
                          }`}>
                            {option.label}
                          </h3>
                          <p className={`text-sm ${
                            isSelected ? 'text-blue-700' : 'text-gray-600'
                          }`}>
                            {option.description}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                              <Check className="h-4 w-4 text-white animate-bounce" />
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
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
                      className={`w-3 h-3 rounded-full ${
                        index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!isStepComplete}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                >
                  {currentStep === steps.length - 1 ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      결과 보기
                    </>
                  ) : (
                    <>
                      다음
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              질문이 있으신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              각 질문에 대한 자세한 설명이 필요하시면 도움말을 확인해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500">
                도움말 보기
              </Button>
              <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500">
                처음부터 다시
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
