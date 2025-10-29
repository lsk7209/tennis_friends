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
      {/* Header */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4 text-sm font-semibold">
              🎾 NTRP 실력 테스트 v2
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              나의 테니스 실력은?
            </h1>
            <p className="text-gray-600 text-lg">
              15개 질문에 답하고 당신의 NTRP 등급을 확인해보세요
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                질문 {currentQuestionIndex + 1} / {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {progress}% 완료
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
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Options */}
              <div className="grid gap-3 mb-8">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = answers[currentQuestionIndex] === index + 1;
                  return (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(index + 1)}
                      className={`w-full p-4 h-auto text-left justify-start transition-all duration-300 transform ${
                        isSelected
                          ? 'bg-green-50 border-green-500 text-green-900 shadow-lg scale-[1.02]'
                          : 'bg-white border-gray-300 hover:border-green-500 hover:bg-green-50 hover:scale-[1.01] text-gray-900'
                      }`}
                      variant="outline"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                          isSelected
                            ? 'border-green-500 bg-green-500 text-white animate-pulse'
                            : 'border-gray-300'
                        }`}>
                          {isSelected ? <Check className="h-4 w-4 animate-bounce" /> : index + 1}
                        </div>
                        <span className="text-sm leading-relaxed">{option}</span>
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="bg-white border-gray-300 hover:border-green-500 px-6 py-3"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  이전
                </Button>

                <div className="flex items-center gap-2">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index <= currentQuestionIndex ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-sm text-gray-500">
                  {currentQuestionIndex + 1} / {questions.length}
                </div>
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
              테스트 안내
            </h3>
            <p className="text-gray-600 mb-6">
              솔직하게 답변해주세요. 정확한 결과를 위해 현재 실력을 기준으로 답변하시면 됩니다.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-semibold text-blue-900 mb-2">💡 중요 안내</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
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
