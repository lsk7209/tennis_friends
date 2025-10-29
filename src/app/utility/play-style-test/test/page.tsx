'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Sparkles, Zap, Brain, Shield, RotateCcw, Target, Flame } from 'lucide-react';
import { playStyleQuestions, calculatePlayStyle } from '@/lib/playStyleTest';

export default function PlayStyleTest() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const question = playStyleQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / playStyleQuestions.length) * 100;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentQuestion]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (isTransitioning) return;
    
    setSelectedAnswer(answerIndex);
    setIsTransitioning(true);

    setTimeout(() => {
      const newAnswers = [...answers, answerIndex];
      setAnswers(newAnswers);
      
      if (currentQuestion < playStyleQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsTransitioning(false);
      } else {
        const result = calculatePlayStyle(newAnswers);
        router.push(`/utility/play-style-test/result?style=${result.id}`);
      }
    }, 500);
  };

  const getQuestionEmoji = (questionId: number) => {
    const emojis = ['🎯', '⚡', '🧠', '🛡️', '🌀', '🔮', '💥', '🕊️', '🎾', '🏆', '⭐', '🔥', '💎', '🌟'];
    return emojis[questionId - 1] || '🎾';
  };

  const getQuestionGradient = (questionId: number) => {
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-red-500 to-orange-500',
      'from-indigo-500 to-blue-500',
      'from-green-500 to-emerald-500',
      'from-yellow-500 to-orange-500',
      'from-pink-500 to-purple-500',
      'from-orange-500 to-red-500',
      'from-cyan-500 to-blue-500',
      'from-green-500 to-teal-500',
      'from-yellow-500 to-amber-500',
      'from-purple-500 to-indigo-500',
      'from-red-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-lime-500'
    ];
    return gradients[questionId - 1] || 'from-purple-500 to-pink-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header Section */}
      <section className="relative overflow-hidden py-8 md:py-12 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 mb-4 text-sm font-semibold shadow-lg">
              <Sparkles className="h-4 w-4 mr-2 inline" />
              테니스 성격 테스트
            </Badge>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              플레이 스타일 진단
            </h1>
            <p className="text-purple-50 text-base md:text-lg font-medium">
              14개 질문에 답하고 당신의 테니스 DNA를 발견하세요
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-bold text-sm md:text-base">
                질문 {currentQuestion + 1} / {playStyleQuestions.length}
              </span>
              <span className="text-white font-bold text-sm md:text-base">
                {Math.round(progress)}% 완료
              </span>
            </div>
            <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
              <div 
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getQuestionGradient(question.id)} rounded-full transition-all duration-500 shadow-lg`}
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
            
            {/* Progress Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {playStyleQuestions.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index < currentQuestion 
                      ? 'bg-white w-8' 
                      : index === currentQuestion
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
                <Badge className={`bg-gradient-to-r ${getQuestionGradient(question.id)} text-white px-6 py-2 text-sm font-bold shadow-lg`}>
                  질문 {currentQuestion + 1}
                </Badge>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <div className={`text-7xl mb-6 bg-gradient-to-r ${getQuestionGradient(question.id)} bg-clip-text text-transparent animate-pulse`}>
                  {getQuestionEmoji(question.id)}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                  {question.question}
                </h2>
              </div>

              {/* Answer Options */}
              <div className="space-y-3 mb-8">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={isTransitioning}
                      className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 transform text-left group ${
                        isSelected
                          ? `bg-gradient-to-r ${getQuestionGradient(question.id)} border-transparent text-white shadow-xl scale-[1.02]`
                          : 'bg-white border-gray-200 hover:border-purple-400 hover:bg-purple-50 hover:scale-[1.01] hover:shadow-lg text-gray-900'
                      } ${isTransitioning && isSelected ? 'animate-pulse' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold transition-all duration-300 shadow-md ${
                          isSelected
                            ? 'bg-white/20 text-white border-2 border-white/30'
                            : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 group-hover:from-purple-100 group-hover:to-pink-100'
                        }`}>
                          {isSelected ? <CheckCircle className="h-5 w-5" /> : index + 1}
                        </div>
                        <span className={`text-base md:text-lg font-semibold leading-relaxed flex-1 ${
                          isSelected ? 'text-white' : 'text-gray-900'
                        }`}>
                          {option.text}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Hint */}
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium">
                  답변을 선택하면 자동으로 다음 질문으로 이동합니다
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Test Info */}
      <section className="pb-12">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-purple-900 mb-2 text-base">💡 테스트 팁</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">
                    솔직하게 답변하세요! 첫 번째 반응이 가장 정확한 결과를 만들어냅니다.
                    각 질문은 당신의 플레이 스타일을 분석하는 데 중요한 역할을 합니다.
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
