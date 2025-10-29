'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle, ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import { QUESTION_BANK, CATEGORY_COLORS, CATEGORY_LABELS, pickQuestions, gradeQuiz, QuizAnswer, Question } from '@/lib/tennisQuiz';
import { FadeIn, SlideUp } from '@/components/ScrollAnimation';

export default function TennisRulesQuiz() {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
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
    if (showExplanation) return;
    
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
    setShowExplanation(true);
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
      
      router.push(`/tennis-rules-quiz/result?${params.toString()}`);
    } else {
      // 다음 문항으로 이동
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setQuestionStartTime(Date.now());
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
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
      {/* Header */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-8">
            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2 mb-4 text-sm font-semibold">
              🎾 테니스 규칙 퀴즈
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              규칙 실력 점검
            </h1>
            <p className="text-gray-600 text-lg">
              12문항에 답하고 당신의 규칙 지식을 확인해보세요
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                문항 {currentQuestionIndex + 1} / {questions.length}
              </span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
                </span>
              </div>
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
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`px-3 py-1 text-sm font-semibold ${getCategoryColor(currentQuestion.cat)}`}>
                    {CATEGORY_LABELS[currentQuestion.cat]}
                  </Badge>
                  <Badge variant="outline" className="text-gray-600">
                    난이도 {currentQuestion.diff}
                  </Badge>
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
                  {currentQuestion.q}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Options */}
                <div className="grid gap-3 mb-8">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === currentQuestion.a;
                    const isWrong = isSelected && !isCorrect;
                    
                    return (
                      <Button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showExplanation}
                        className={`w-full p-4 h-auto text-left justify-start transition-all duration-300 transform ${
                          showExplanation
                            ? isCorrect
                              ? 'bg-green-50 border-green-500 text-green-900'
                              : isWrong
                              ? 'bg-red-50 border-red-500 text-red-900'
                              : 'bg-gray-50 border-gray-300 text-gray-600'
                            : isSelected
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-lg scale-[1.02]'
                            : 'bg-white border-gray-300 hover:border-emerald-500 hover:bg-emerald-50 hover:scale-[1.01] text-gray-900'
                        }`}
                        variant="outline"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                            showExplanation
                              ? isCorrect
                                ? 'border-green-500 bg-green-500 text-white'
                                : isWrong
                                ? 'border-red-500 bg-red-500 text-white'
                                : 'border-gray-300'
                              : isSelected
                              ? 'border-emerald-500 bg-emerald-500 text-white'
                              : 'border-gray-300'
                          }`}>
                            {showExplanation && isCorrect ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : showExplanation && isWrong ? (
                              <XCircle className="h-4 w-4" />
                            ) : (
                              index + 1
                            )}
                          </div>
                          <span className="text-sm leading-relaxed">{option}</span>
                        </div>
                      </Button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showExplanation && (
                  <SlideUp>
                    <Alert className={`mb-6 ${
                      selectedAnswer === currentQuestion.a 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-red-50 border-red-200'
                    }`}>
                      <div className={`h-5 w-5 ${
                        selectedAnswer === currentQuestion.a ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {selectedAnswer === currentQuestion.a ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <XCircle className="h-5 w-5" />
                        )}
                      </div>
                      <AlertDescription className={`${
                        selectedAnswer === currentQuestion.a ? 'text-green-800' : 'text-red-800'
                      }`}>
                        <strong>
                          {selectedAnswer === currentQuestion.a ? '정답입니다!' : '틀렸습니다.'}
                        </strong>
                        <br />
                        {currentQuestion.exp}
                      </AlertDescription>
                    </Alert>
                  </SlideUp>
                )}

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="bg-white border-gray-300 hover:border-emerald-500 px-6 py-3"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    이전
                  </Button>

                  <div className="flex items-center gap-2">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index <= currentQuestionIndex ? 'bg-emerald-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={handleNext}
                    disabled={!showExplanation}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3"
                  >
                    {isLastQuestion ? '결과 확인' : '다음'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Motivation Section */}
      {currentQuestionIndex === 5 && (
        <section className="section-padding bg-emerald-50">
          <div className="container mx-auto max-w-4xl container-padding">
            <FadeIn>
              <Alert className="bg-emerald-100 border-emerald-300">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <AlertDescription className="text-emerald-800">
                  <strong>잘하고 있습니다!</strong> 남은 6문항을 완료하면 결과 카드가 생성됩니다. 
                  계속해서 최선을 다해주세요! 💪
                </AlertDescription>
              </Alert>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              퀴즈 안내
            </h3>
            <p className="text-gray-600 mb-6">
              각 문항에 대해 가장 정확하다고 생각하는 답변을 선택해주세요. 
              정답을 선택하면 즉시 해설을 확인할 수 있습니다.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-semibold text-blue-900 mb-2">💡 중요 안내</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                모든 문항은 실제 경기에서 자주 발생하는 상황을 바탕으로 출제되었습니다. 
                솔직하게 답변하시면 더 정확한 약점 분석을 받을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
