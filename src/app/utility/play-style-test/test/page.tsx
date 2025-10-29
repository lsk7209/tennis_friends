'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { playStyleQuestions, calculatePlayStyle } from '@/lib/playStyleTest';

export default function PlayStyleTest() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const question = playStyleQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / playStyleQuestions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (isTransitioning) return;
    
    setSelectedAnswer(answerIndex);
    setIsTransitioning(true);

    // 시각적 피드백을 위한 잠시 대기
    setTimeout(() => {
      const newAnswers = [...answers, answerIndex];
      setAnswers(newAnswers);
      
      if (currentQuestion < playStyleQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsTransitioning(false);
      } else {
        // 마지막 질문이면 결과 페이지로 이동
        const result = calculatePlayStyle(newAnswers);
        router.push(`/utility/play-style-test/result?style=${result.id}`);
      }
    }, 500);
  };

  const getQuestionEmoji = (questionId: number) => {
    const emojis = ['🎯', '⚡', '🧠', '🛡️', '🌀', '🔮', '💥', '🕊️', '🎾', '🏆', '⭐', '🔥', '💎', '🌟'];
    return emojis[questionId - 1] || '🎾';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              질문 {currentQuestion + 1} / {playStyleQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="bg-white border-gray-200 shadow-lg max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{getQuestionEmoji(question.id)}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {question.question}
              </h2>
            </div>

            {/* Answer Options */}
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full p-6 h-auto text-left justify-start transition-all duration-300 ${
                    selectedAnswer === index
                      ? 'bg-green-50 border-green-500 text-green-700 shadow-md transform scale-105'
                      : 'hover:bg-gray-50 hover:border-gray-300'
                  } ${isTransitioning && selectedAnswer === index ? 'animate-pulse' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isTransitioning}
                >
                  <div className="flex items-center w-full">
                    {selectedAnswer === index && (
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    )}
                    <span className="text-lg">{option.text}</span>
                  </div>
                </Button>
              ))}
            </div>

            {/* Navigation Hint */}
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                답변을 선택하면 자동으로 다음 질문으로 이동합니다
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Test Info */}
        <div className="mt-8 text-center">
          <Card className="bg-gray-50 border-gray-200 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                💡 테스트 팁
              </h3>
              <p className="text-gray-600">
                솔직하게 답변하세요! 첫 번째 반응이 가장 정확한 결과를 만들어냅니다.
                각 질문은 당신의 플레이 스타일을 분석하는 데 중요한 역할을 합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}