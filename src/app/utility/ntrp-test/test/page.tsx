'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { questions } from '@/lib/questions';

export default function NtrpTestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const router = useRouter();

  const currentQuestion = questions[currentQuestionIndex];
  const progress = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);

    // 자동으로 다음 질문으로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300); // 300ms 딜레이로 자연스러운 전환
    } else {
      // 테스트 완료 - 결과 페이지로 이동
      setTimeout(() => {
        const totalScore = newAnswers.reduce((sum, answer) => sum + answer, 0);
        const q13Label = questions[12].options[newAnswers[12] - 1];
        router.push(`/utility/ntrp-test/result?score=${totalScore}&q13=${encodeURIComponent(q13Label)}`);
      }, 500); // 조금 더 긴 딜레이로 완료감 제공
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - 컴팩트하게 */}
      <section className="py-4 md:py-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-4">
            <Badge className="bg-green-100 text-green-800 px-3 py-1 mb-2 text-xs font-semibold">
              🎾 NTRP 실력 테스트 v2
            </Badge>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              나의 테니스 실력은?
            </h1>
            <p className="text-gray-600 text-sm">
              15개 질문에 답하고 당신의 NTRP 등급을 확인해보세요
            </p>
          </div>

          {/* Progress Bar - 컴팩트하게 */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-700">
                질문 {currentQuestionIndex + 1} / {questions.length}
              </span>
              <span className="text-xs font-medium text-gray-700">
                {progress}% 완료
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
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Options - 컴팩트하게 */}
              <div className="grid gap-2 mb-4">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = answers[currentQuestionIndex] === index + 1;
                  return (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(index + 1)}
                      className={`w-full p-3 h-auto text-left justify-start transition-all duration-300 transform ${
                        isSelected
                          ? 'bg-green-50 border-green-500 text-green-900 shadow-md scale-[1.01]'
                          : 'bg-white border-gray-300 hover:border-green-500 hover:bg-green-50 hover:scale-[1.005] text-gray-900'
                      }`}
                      variant="outline"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                          isSelected
                            ? 'border-green-500 bg-green-500 text-white'
                            : 'border-gray-300'
                        }`}>
                          {isSelected ? <Check className="h-3 w-3" /> : index + 1}
                        </div>
                        <span className="text-sm leading-relaxed">{option}</span>
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Navigation - 컴팩트하게 */}
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="bg-white border-gray-300 hover:border-green-500 px-4 py-2 text-sm"
                >
                  <ArrowLeft className="h-3 w-3 mr-1" />
                  이전
                </Button>

                <div className="flex items-center gap-1">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index <= currentQuestionIndex ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-xs text-gray-500">
                  {currentQuestionIndex + 1} / {questions.length}
                </div>
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
              <h4 className="font-semibold text-blue-900 mb-1 text-sm">💡 중요 안내</h4>
              <p className="text-blue-800 text-xs leading-relaxed">
                결과는 익명으로 저장되며, 통계 분석에 활용됩니다. 
                각 질문에 대해 가장 정확하다고 생각하는 답변을 선택해주세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
