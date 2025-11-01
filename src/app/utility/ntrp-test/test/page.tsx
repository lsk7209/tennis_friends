'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Check, Sparkles, BarChart3 } from 'lucide-react';
import { toast } from 'sonner';
import { questions } from '@/lib/questions';

export default function NtrpTestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const router = useRouter();

  const currentQuestion = questions[currentQuestionIndex];
  const progress = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCompleting, setIsCompleting] = useState(false);

  const handleAnswer = (value: number) => {
    if (isTransitioning) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
    setSelectedAnswer(value);
    setIsTransitioning(true);

    // 선택된 답변 강조 표시
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        // 다음 질문으로 자동 이동
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsTransitioning(false);

        // 다음 질문으로 이동 피드백
        toast.success(`질문 ${currentQuestionIndex + 2}로 이동합니다`, {
          duration: 2000,
        });
      } else {
        // 테스트 완료 - 특별한 완료 애니메이션 후 결과 페이지로 이동
        setIsCompleting(true);
        setTimeout(() => {
          const totalScore = newAnswers.reduce((sum, answer) => sum + answer, 0);
          const q13Label = questions[12].options[newAnswers[12] - 1];
          router.push(`/utility/ntrp-test/result?score=${totalScore}&q13=${encodeURIComponent(q13Label)}`);
        }, 1500); // 완료 애니메이션 시간 증가
      }
    }, 600); // 답변 선택 후 600ms 대기
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 relative">
      {/* Completion Overlay */}
      {isCompleting && (
        <div className="fixed inset-0 bg-gradient-to-br from-green-500/95 via-emerald-500/95 to-teal-500/95 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 animate-pulse">
              테스트 완료!
            </h2>
            <p className="text-xl text-white/90 animate-pulse">
              결과를 분석하고 있습니다...
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      )}
      {/* Header Section */}
      <section className="relative overflow-hidden py-8 md:py-12 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 mb-4 text-sm font-semibold shadow-lg">
              <Sparkles className="h-4 w-4 mr-2 inline" />
              NTRP 실력 테스트 v2
            </Badge>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              나의 테니스 실력은?
            </h1>
            <p className="text-green-50 text-base md:text-lg font-medium">
              15개 질문에 답하고 당신의 NTRP 등급을 확인해보세요
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-bold text-sm md:text-base">
                질문 {currentQuestionIndex + 1} / {questions.length}
              </span>
              <span className="text-white font-bold text-sm md:text-base">
                {progress}% 완료
              </span>
            </div>
            <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-green-100 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
            
            {/* Progress Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index < currentQuestionIndex 
                      ? 'bg-white w-8' 
                      : index === currentQuestionIndex
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
              {/* Question Number Badge */}
              <div className="flex items-center justify-center mb-6">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 text-sm font-bold shadow-lg">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  질문 {currentQuestionIndex + 1}
                </Badge>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, index) => {
                  const optionValue = index + 1;
                  const isSelected = answers[currentQuestionIndex] === optionValue;
                  const isCurrentlySelected = selectedAnswer === optionValue;
                  const isDisabled = isTransitioning && !isCurrentlySelected;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(optionValue)}
                      disabled={isDisabled}
                      className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 transform text-left group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                        isCurrentlySelected && isTransitioning
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-600 text-white shadow-xl scale-[1.05] animate-pulse'
                          : isSelected
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-600 text-white shadow-xl scale-[1.02]'
                          : isDisabled
                          ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white border-gray-200 hover:border-green-400 hover:bg-green-50 hover:scale-[1.01] hover:shadow-lg text-gray-900'
                      }`}
                      aria-pressed={isSelected}
                      aria-label={`옵션 ${index + 1}: ${option}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold transition-all duration-300 shadow-md ${
                          isCurrentlySelected && isTransitioning
                            ? 'bg-white/30 text-white border-2 border-white/50 animate-bounce'
                            : isSelected
                            ? 'bg-white/20 text-white border-2 border-white/30'
                            : isDisabled
                            ? 'bg-gray-200 text-gray-400'
                            : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 group-hover:from-green-100 group-hover:to-emerald-100'
                        }`}>
                          {isCurrentlySelected && isTransitioning ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : isSelected ? (
                            <Check className="h-5 w-5" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <span className={`text-base md:text-lg font-semibold leading-relaxed flex-1 ${
                          isCurrentlySelected && isTransitioning
                            ? 'text-white animate-pulse'
                            : isSelected
                            ? 'text-white'
                            : isDisabled
                            ? 'text-gray-400'
                            : 'text-gray-900'
                        }`}>
                          {option}
                        </span>
                        {isCurrentlySelected && isTransitioning && (
                          <div className="text-white text-sm font-medium animate-pulse">
                            선택됨
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
                  disabled={currentQuestionIndex === 0}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                    currentQuestionIndex === 0
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-100 hover:scale-105 border-2'
                  }`}
                  aria-label="이전 질문으로 이동"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  이전
                </Button>

                <div className="text-center">
                  <div className="text-sm text-gray-500 font-medium mb-1">
                    진행 상황
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {currentQuestionIndex + 1} / {questions.length}
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
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2 text-base">💡 중요 안내</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    결과는 익명으로 저장되며, 통계 분석에 활용됩니다. 
                    각 질문에 대해 가장 정확하다고 생각하는 답변을 선택해주세요.
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
