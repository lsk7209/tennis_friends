'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import { QUESTION_BANK, CATEGORY_COLORS, CATEGORY_LABELS, pickQuestions, gradeQuiz, QuizAnswer, Question } from '@/lib/tennisQuiz';

export default function TennisRulesQuiz() {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    // 퀴즈 시작 시 문항 선택
    const selectedQuestions = pickQuestions(QUESTION_BANK);
    setQuestions(selectedQuestions);
    setQuestionStartTime(Date.now());
  }, []);

  useEffect(() => {
    // 타이머 업데이트
    const timer = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - questionStartTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [questionStartTime]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // 이미 답변을 선택한 경우
    
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === currentQuestion.a;
    const answerTime = Math.floor((Date.now() - questionStartTime) / 1000);
    
    const newAnswer: QuizAnswer = {
      id: currentQuestion.id,
      correct: isCorrect,
      cat: currentQuestion.cat,
      diff: currentQuestion.diff,
      selectedAnswer: answerIndex,
      timeSpent: answerTime
    };
    
    setAnswers(prev => [...prev, newAnswer]);
    
    // 답변 선택 후 자동으로 다음 문항으로 이동 (마지막 문항이 아닌 경우)
    if (!isLastQuestion) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setQuestionStartTime(Date.now());
      }, 500); // 0.5초 후 자동 이동
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // 퀴즈 완료 - 결과 페이지로 이동
      const result = gradeQuiz(answers);
      const params = new URLSearchParams();
      params.append('score', result.score.toString());
      params.append('grade', result.grade);
      params.append('timeSpent', result.timeSpent.toString());
      params.append('wrongByCat', JSON.stringify(result.wrongByCat));
      params.append('answers', JSON.stringify(result.answers));
      params.append('questions', JSON.stringify(questions));
      
      router.push(`/tennis-rules-quiz/result?${params.toString()}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setQuestionStartTime(Date.now());
    }
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      emerald: 'bg-emerald-100 text-emerald-800',
      sky: 'bg-sky-100 text-sky-800',
      amber: 'bg-amber-100 text-amber-800',
      indigo: 'bg-indigo-100 text-indigo-800',
      teal: 'bg-teal-100 text-teal-800',
      rose: 'bg-rose-100 text-rose-800',
      violet: 'bg-violet-100 text-violet-800',
      orange: 'bg-orange-100 text-orange-800',
      cyan: 'bg-cyan-100 text-cyan-800'
    };
    return colorMap[CATEGORY_COLORS[category]] || 'bg-gray-100 text-gray-800';
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">퀴즈를 준비하고 있습니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Compact Header */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-4">
            <Badge className="bg-emerald-100 text-emerald-800 px-3 py-1 mb-2 text-sm font-semibold">
              🎾 테니스 규칙 퀴즈
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              규칙 실력 점검
            </h1>
            <p className="text-gray-600 text-sm">
              12문항에 답하고 당신의 규칙 지식을 확인해보세요
            </p>
          </div>

          {/* Compact Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-700">
                문항 {currentQuestionIndex + 1} / {questions.length}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-gray-500" />
                <span className="text-xs font-medium text-gray-700">
                  {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
                </span>
              </div>
            </div>
            <Progress value={progress} className="h-1" />
          </div>
        </div>
      </section>

      {/* Compact Question Section */}
      <section className="py-2 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-2">
                <Badge className={`px-2 py-1 text-xs font-semibold ${getCategoryColor(currentQuestion.cat)}`}>
                  {CATEGORY_LABELS[currentQuestion.cat]}
                </Badge>
                <Badge variant="outline" className="text-gray-600 text-xs">
                  난이도 {currentQuestion.diff}
                </Badge>
              </div>
              <CardTitle className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                {currentQuestion.q}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-0">
              {/* Compact Options */}
              <div className="grid gap-2 mb-4">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    
                    return (
                      <Button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-2 h-auto text-left justify-start transition-all duration-200 ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-md'
                            : 'bg-white border-gray-300 hover:border-emerald-500 hover:bg-emerald-50 text-gray-900'
                        }`}
                        variant="outline"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
                            isSelected
                              ? 'border-emerald-500 bg-emerald-500 text-white'
                              : 'border-gray-300'
                          }`}>
                            {index + 1}
                          </div>
                          <span className="text-xs leading-tight">{option}</span>
                        </div>
                      </Button>
                    );
                  })}
                </div>


                {/* Compact Navigation */}
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="bg-white border-gray-300 hover:border-emerald-500 px-3 py-2 text-sm"
                  >
                    <ArrowLeft className="h-3 w-3 mr-1" />
                    이전
                  </Button>

                  <div className="flex items-center gap-1">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index < currentQuestionIndex ? 'bg-emerald-500' : 
                          index === currentQuestionIndex ? 'bg-emerald-300' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {isLastQuestion && selectedAnswer !== null && (
                    <Button
                      onClick={handleNext}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 text-sm"
                    >
                      결과 확인
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
