'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {ArrowRight, ArrowLeft} from 'lucide-react';
import { InjuryRiskInput, calculateInjuryRisk } from '@/lib/injuryRiskCalc';
import {FadeIn} from '@/components/ScrollAnimation';

export default function InjuryRiskTest() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<InjuryRiskInput>>({});
  
  const steps = [
    { title: '기본 정보', description: '나이와 성별을 입력해주세요' },
    { title: '플레이 환경', description: '플레이 빈도와 시간을 알려주세요' },
    { title: '경험과 이력', description: '테니스 경험과 부상 이력을 확인해주세요' },
    { title: '준비 운동', description: '워밍업과 쿨다운 루틴을 알려주세요' },
    { title: '장비와 환경', description: '장비 상태와 코트 환경을 확인해주세요' },
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
      id: 'gender',
      question: '성별을 선택해주세요',
      type: 'radio',
      options: [
        { value: 'male', label: '남성' },
        { value: 'female', label: '여성' }
      ]
    },
    {
      id: 'playingFrequency',
      question: '테니스를 얼마나 자주 하시나요?',
      type: 'radio',
      options: [
        { value: 'daily', label: '매일' },
        { value: 'weekly3', label: '주 3회' },
        { value: 'weekly2', label: '주 2회' },
        { value: 'weekly1', label: '주 1회' },
        { value: 'monthly', label: '월 1-2회' }
      ]
    },
    {
      id: 'playingDuration',
      question: '한 번에 얼마나 오래 플레이하시나요?',
      type: 'radio',
      options: [
        { value: 'under1h', label: '1시간 미만' },
        { value: '1-2h', label: '1-2시간' },
        { value: '2-3h', label: '2-3시간' },
        { value: 'over3h', label: '3시간 이상' }
      ]
    },
    {
      id: 'experience',
      question: '테니스 경험 수준은?',
      type: 'radio',
      options: [
        { value: 'beginner', label: '초보자 (1년 미만)' },
        { value: 'intermediate', label: '중급자 (1-3년)' },
        { value: 'advanced', label: '고급자 (3-5년)' },
        { value: 'expert', label: '전문가 (5년 이상)' }
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
    },
    {
      id: 'warmupRoutine',
      question: '워밍업 루틴은?',
      type: 'radio',
      options: [
        { value: 'none', label: '하지 않음' },
        { value: 'basic', label: '기본적인 스트레칭' },
        { value: 'comprehensive', label: '체계적인 워밍업' }
      ]
    },
    {
      id: 'coolDownRoutine',
      question: '쿨다운 루틴은?',
      type: 'radio',
      options: [
        { value: 'none', label: '하지 않음' },
        { value: 'basic', label: '기본적인 스트레칭' },
        { value: 'comprehensive', label: '체계적인 쿨다운' }
      ]
    },
    {
      id: 'equipmentAge',
      question: '현재 사용 중인 라켓의 나이는?',
      type: 'radio',
      options: [
        { value: 'new', label: '1년 미만' },
        { value: '1year', label: '1-2년' },
        { value: '2years', label: '2-3년' },
        { value: 'over3years', label: '3년 이상' }
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
      id: 'weatherCondition',
      question: '주로 플레이하는 환경은?',
      type: 'radio',
      options: [
        { value: 'indoor', label: '실내' },
        { value: 'outdoor', label: '야외' }
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
      const result = calculateInjuryRisk(formData as InjuryRiskInput);
      
      // 결과 페이지로 이동
      const params = new URLSearchParams();
      params.append('riskScore', result.riskScore.toString());
      params.append('riskLevel', result.riskLevel);
      params.append('riskFactors', JSON.stringify(result.riskFactors));
      params.append('preventionTips', JSON.stringify(result.preventionTips));
      params.append('equipmentRecommendations', JSON.stringify(result.equipmentRecommendations));
      params.append('trainingAdjustments', JSON.stringify(result.trainingAdjustments));
      params.append('warningSigns', JSON.stringify(result.warningSigns));
      
      router.push(`/utility/injury-risk/result?${params.toString()}`);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isAnswerSelected = () => {
    const currentValue = formData[currentQuestion.id as keyof InjuryRiskInput];
    return currentValue !== undefined && currentValue !== null;
  };

  if (currentStep >= questions.length) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">결과를 분석하고 있습니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - 컴팩트하게 */}
      <section className="py-4 md:py-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-4">
            <Badge className="bg-red-100 text-red-800 px-3 py-1 mb-2 text-xs font-semibold">
              🛡️ 부상 위험 예측
            </Badge>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              안전한 테니스를 위한 체크
            </h1>
            <p className="text-gray-600 text-sm">
              {steps[currentStep].title}: {steps[currentStep].description}
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
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg md:text-xl font-bold text-gray-900 leading-relaxed">
                  {currentQuestion.question}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <RadioGroup
                  value={formData[currentQuestion.id as keyof InjuryRiskInput] as string}
                  onValueChange={handleAnswer}
                  className="space-y-2"
                >
                  {currentQuestion.options.map((option) => (
                    <div key={String(option.value)} className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all duration-200">
                      <RadioGroupItem value={String(option.value)} id={String(option.value)} />
                      <Label 
                        htmlFor={String(option.value)} 
                        className="text-gray-700 cursor-pointer flex-1 text-sm hover:text-red-600 transition-colors"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {/* Navigation - 컴팩트하게 */}
                <div className="flex justify-between items-center mt-4">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="bg-white border-gray-300 hover:border-red-500 px-4 py-2 text-sm"
                  >
                    <ArrowLeft className="h-3 w-3 mr-1" />
                    이전
                  </Button>

                  <div className="flex items-center gap-1">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index <= currentStep ? 'bg-red-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={handleNext}
                    disabled={!isAnswerSelected()}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm"
                  >
                    {currentStep === questions.length - 1 ? '결과 확인' : '다음'}
                    <ArrowRight className="h-3 w-3 ml-1" />
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
              부상 예방 안내
            </h3>
            <p className="text-gray-600 mb-6">
              정확한 정보를 입력하시면 더 정확한 부상 위험도 분석을 받을 수 있습니다.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-semibold text-red-900 mb-2">🛡️ 중요 안내</h4>
              <p className="text-red-800 text-sm leading-relaxed">
                이 테스트는 일반적인 가이드라인입니다. 지속적인 통증이나 부상이 있다면 
                반드시 의료 전문가와 상담하시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
