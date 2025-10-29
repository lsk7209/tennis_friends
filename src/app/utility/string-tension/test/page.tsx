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
      {/* Header - 컴팩트하게 */}
      <section className="py-4 md:py-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-4">
            <Badge className="bg-blue-100 text-blue-800 px-3 py-1 mb-2 text-xs font-semibold">
              🎾 스트링 텐션 계산기
            </Badge>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              나에게 맞는 텐션 찾기
            </h1>
            <p className="text-gray-600 text-sm">
              간단한 질문에 답하면 최적의 텐션을 추천해드립니다
            </p>
          </div>

          {/* Progress Bar - 컴팩트하게 */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-700">
                단계 {currentStep + 1} / {steps.length}
              </span>
              <span className="text-xs font-medium text-gray-700">
                {Math.round(progress)}% 완료
              </span>
            </div>
            <Progress value={progress} className="h-1.5" />
          </div>
        </div>
      </section>

      {/* Question Section - 컴팩트하게 */}
      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardContent className="p-4 md:p-6">
              <div className="text-center mb-4">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {currentStepData.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {currentStepData.description}
                </p>
              </div>

              {/* Options - 컴팩트하게 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {currentStepData.options.map((option, index) => {
                  const isSelected = formData[currentStepData.id as keyof TensionInput] === option.value;
                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option.value)}
                      className={`p-3 text-left border-2 rounded-lg transition-all duration-300 transform ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50 shadow-md scale-[1.01]'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 hover:scale-[1.005]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <h3 className={`font-semibold text-sm mb-1 ${
                            isSelected ? 'text-blue-900' : 'text-gray-900'
                          }`}>
                            {option.label}
                          </h3>
                          <p className={`text-xs ${
                            isSelected ? 'text-blue-700' : 'text-gray-600'
                          }`}>
                            {option.description}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="flex-shrink-0 ml-2">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation - 컴팩트하게 */}
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="bg-white border-gray-300 hover:border-blue-500 px-4 py-2 text-sm"
                >
                  <ArrowLeft className="h-3 w-3 mr-1" />
                  이전
                </Button>

                <div className="flex items-center gap-1">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!isStepComplete}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm"
                >
                  {currentStep === steps.length - 1 ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      결과 보기
                    </>
                  ) : (
                    <>
                      다음
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Help Section - 모바일에서는 숨김 */}
      <section className="hidden md:block py-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-1 text-sm">💡 도움말</h4>
              <p className="text-blue-800 text-xs leading-relaxed">
                각 질문에 대한 자세한 설명이 필요하시면 도움말을 확인해보세요
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
