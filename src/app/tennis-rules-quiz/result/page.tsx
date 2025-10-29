'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Share2, Download, RotateCcw, Target, BookOpen, CheckCircle, XCircle, Clock, ArrowRight } from 'lucide-react';
import { getGradeInfo, getTopWeakAreas, CATEGORY_LABELS, CATEGORY_COLORS, QuizAnswer, Question } from '@/lib/tennisQuiz';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function TennisRulesQuizResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const score = Number(searchParams.get('score') || 0);
  const grade = searchParams.get('grade') || 'Beginner';
  const timeSpent = Number(searchParams.get('timeSpent') || 0);
  const wrongByCat = JSON.parse(searchParams.get('wrongByCat') || '{}');
  const answers = JSON.parse(searchParams.get('answers') || '[]') as QuizAnswer[];
  const questions = JSON.parse(searchParams.get('questions') || '[]') as Question[];
  
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  
  const gradeInfo = getGradeInfo(grade);
  const topWeakAreas = getTopWeakAreas(wrongByCat);
  const wrongAnswers = answers.filter(a => !a.correct);
  
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

  const generateShareImage = async () => {
    setIsGeneratingImage(true);
    try {
      const element = document.getElementById('result-card');
      if (!element) return;
      
      const canvas = await html2canvas(element, {
        background: '#ffffff',
        width: 1080,
        height: 1080
      });
      
      const link = document.createElement('a');
      link.download = `tennis-rules-quiz-result-${score}-${grade}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('이미지 생성 중 오류:', error);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const pdf = new jsPDF();
      
      // 표지
      pdf.setFontSize(24);
      pdf.text('테니스 규칙 퀴즈 결과', 20, 30);
      
      pdf.setFontSize(16);
      pdf.text(`점수: ${score}/12`, 20, 50);
      pdf.text(`등급: ${gradeInfo.label}`, 20, 60);
      pdf.text(`소요 시간: ${Math.floor(timeSpent / 60)}분 ${timeSpent % 60}초`, 20, 70);
      
      // 약점 영역
      pdf.setFontSize(14);
      pdf.text('주요 약점 영역:', 20, 90);
      topWeakAreas.forEach((area, index) => {
        pdf.text(`${index + 1}. ${CATEGORY_LABELS[area]}`, 30, 100 + index * 10);
      });
      
      // 오답 해설
      pdf.addPage();
      pdf.setFontSize(16);
      pdf.text('오답 해설', 20, 20);
      
      wrongAnswers.forEach((answer, index) => {
        if (index > 0 && index % 3 === 0) {
          pdf.addPage();
        }
        
        const yPos = 30 + (index % 3) * 60;
        pdf.setFontSize(12);
        pdf.text(`문항 ${index + 1}: ${answer.cat}`, 20, yPos);
        pdf.text(`선택한 답: ${answer.selectedAnswer + 1}번`, 20, yPos + 10);
        pdf.text(`정답: ${answer.cat}`, 20, yPos + 20);
      });
      
      pdf.save(`tennis-rules-quiz-result-${score}-${grade}.pdf`);
    } catch (error) {
      console.error('PDF 생성 중 오류:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const copyToClipboard = () => {
    const url = `${window.location.origin}/tennis-rules-quiz`;
    navigator.clipboard.writeText(url);
    alert('퀴즈 링크가 복사되었습니다! 📎');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Result Card */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <Card id="result-card" className="bg-gradient-to-br from-emerald-50 to-white border-emerald-200 shadow-lg mb-8">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-10 w-10 text-emerald-600" />
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  당신의 규칙 실력: {score}/12 정답
                </h1>
                
                <Badge className={`px-4 py-2 text-lg font-semibold mb-4 ${gradeInfo.color}`}>
                  {gradeInfo.label}
                </Badge>
                
                <p className="text-lg text-gray-600 mb-6">
                  {gradeInfo.description}
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>소요 시간: {Math.floor(timeSpent / 60)}분 {timeSpent % 60}초</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>평균: {Math.round(timeSpent / 12)}초/문항</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Weak Areas Analysis */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                약점 영역 분석
              </h2>
              <p className="text-lg text-gray-600">
                카테고리별 오답을 분석하여 개선이 필요한 영역을 파악했습니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {topWeakAreas.map((area, index) => (
                <StaggeredItem key={area}>
                  <Card className="bg-white border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <XCircle className="h-8 w-8 text-red-600" />
                      </div>
                      <Badge className={`px-3 py-1 text-sm font-semibold mb-3 ${getCategoryColor(area)}`}>
                        {CATEGORY_LABELS[area]}
                      </Badge>
                      <p className="text-gray-600 text-sm">
                        우선순위 {index + 1}위 약점 영역
                      </p>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Wrong Answers Explanation */}
      {wrongAnswers.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto max-w-4xl container-padding">
            <SlideUp>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  오답 해설
                </h2>
                <p className="text-lg text-gray-600">
                  틀린 문항들을 다시 확인하고 올바른 규칙을 학습하세요
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="space-y-6">
                {wrongAnswers.map((answer, index) => {
                  const question = questions.find(q => q.id === answer.id);
                  if (!question) return null;
                  
                  return (
                    <StaggeredItem key={answer.id}>
                      <Card className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge className={`px-3 py-1 text-sm font-semibold ${getCategoryColor(answer.cat)}`}>
                              {CATEGORY_LABELS[answer.cat]}
                            </Badge>
                            <Badge variant="outline" className="text-gray-600">
                              난이도 {answer.diff}
                            </Badge>
                          </div>
                          
                          <h3 className="text-lg font-bold text-gray-900 mb-4">
                            {question.q}
                          </h3>
                          
                          <div className="grid gap-3 mb-6">
                            {question.options.map((option, optionIndex) => {
                              const isSelected = answer.selectedAnswer === optionIndex;
                              const isCorrect = optionIndex === question.a;
                              
                              return (
                                <div
                                  key={optionIndex}
                                  className={`p-3 rounded-lg border-2 ${
                                    isCorrect
                                      ? 'bg-green-50 border-green-500 text-green-900'
                                      : isSelected
                                      ? 'bg-red-50 border-red-500 text-red-900'
                                      : 'bg-gray-50 border-gray-300 text-gray-600'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                                      isCorrect
                                        ? 'border-green-500 bg-green-500 text-white'
                                        : isSelected
                                        ? 'border-red-500 bg-red-500 text-white'
                                        : 'border-gray-300'
                                    }`}>
                                      {isCorrect ? (
                                        <CheckCircle className="h-4 w-4" />
                                      ) : isSelected ? (
                                        <XCircle className="h-4 w-4" />
                                      ) : (
                                        optionIndex + 1
                                      )}
                                    </div>
                                    <span className="text-sm leading-relaxed">{option}</span>
                                    {isCorrect && (
                                      <Badge className="ml-auto bg-green-100 text-green-800 text-xs">
                                        정답
                                      </Badge>
                                    )}
                                    {isSelected && !isCorrect && (
                                      <Badge className="ml-auto bg-red-100 text-red-800 text-xs">
                                        선택
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <BookOpen className="h-5 w-5 text-blue-600" />
                              <span className="font-semibold text-blue-800">해설</span>
                            </div>
                            <p className="text-blue-700 text-sm leading-relaxed">
                              {question.exp}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </StaggeredItem>
                  );
                })}
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      )}

      {/* Practical Tips */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                실전 팁
              </h2>
              <p className="text-lg text-gray-600">
                약점 영역별로 실전에서 활용할 수 있는 구체적인 팁을 제공합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="space-y-6">
              {topWeakAreas.map((area, index) => (
                <StaggeredItem key={area}>
                  <Card className="bg-white border-gray-200 hover:border-emerald-300 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {CATEGORY_LABELS[area]} 개선 가이드
                          </h3>
                          <p className="text-gray-600">
                            {area === 'Serve' && '서브 시 베이스라인과 연장선을 의식하고, 토스-스텝 루틴을 확립하세요.'}
                            {area === 'Return' && '리턴 시 짧고 단단한 라켓면으로 블록하는 연습을 하세요.'}
                            {area === 'Scoring' && '스코어링 규칙을 정확히 이해하고, 듀스 상황에서의 점수 계산을 연습하세요.'}
                            {area === 'Tiebreak' && '타이브레이크에서 서버-리시버 순서를 정확히 파악하고 콜 관행을 익히세요.'}
                            {area === 'Let/Net' && '네트 관련 규칙을 정확히 이해하고, 렛 상황에서의 판단을 연습하세요.'}
                            {area === 'Footfault' && '풋폴트 방지를 위해 베이스라인과 연장선을 의식하는 연습을 하세요.'}
                            {area === 'Doubles' && '복식 규칙을 정확히 이해하고, 파트너와의 협력 플레이를 연습하세요.'}
                            {area === 'Hindrance' && '방해 상황에서의 올바른 대응 방법을 학습하고 연습하세요.'}
                            {area === 'BallInPlay' && '볼 인플레이 규칙을 정확히 이해하고, 경계선 판단을 연습하세요.'}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                다음 단계
              </h2>
              <p className="text-gray-600">
                계속해서 테니스 실력을 향상시켜보세요
              </p>
            </div>
          </FadeIn>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StaggeredItem>
                <Link href="/tennis-rules-quiz/quiz">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    다시 풀기
                  </Button>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/utility/ntrp-test">
                  <Button variant="outline" className="w-full bg-white border-gray-300 hover:border-emerald-500">
                    <Trophy className="h-4 w-4 mr-2" />
                    NTRP 테스트
                  </Button>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/utility/string-tension">
                  <Button variant="outline" className="w-full bg-white border-gray-300 hover:border-emerald-500">
                    <Target className="h-4 w-4 mr-2" />
                    스트링 계산기
                  </Button>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/utility/injury-risk">
                  <Button variant="outline" className="w-full bg-white border-gray-300 hover:border-emerald-500">
                    <BookOpen className="h-4 w-4 mr-2" />
                    부상 체크
                  </Button>
                </Link>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
          
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={generateShareImage}
                disabled={isGeneratingImage}
                variant="outline"
                className="bg-white border-gray-300 hover:border-emerald-500"
              >
                <Download className="h-4 w-4 mr-2" />
                {isGeneratingImage ? '생성 중...' : '결과 이미지 저장'}
              </Button>
              
              <Button
                onClick={generatePDF}
                disabled={isGeneratingPDF}
                variant="outline"
                className="bg-white border-gray-300 hover:border-emerald-500"
              >
                <Download className="h-4 w-4 mr-2" />
                {isGeneratingPDF ? '생성 중...' : 'PDF 저장'}
              </Button>
              
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="bg-white border-gray-300 hover:border-emerald-500"
              >
                <Share2 className="h-4 w-4 mr-2" />
                링크 공유
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default function TennisRulesQuizResult() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TennisRulesQuizResultContent />
    </Suspense>
  );
}
