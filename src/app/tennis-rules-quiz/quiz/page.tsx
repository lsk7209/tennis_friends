"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import {
  CATEGORY_COLORS,
  CATEGORY_LABELS,
  QUESTION_BANK,
  type Question,
  type QuizAnswer,
  gradeQuiz,
  pickQuestions,
} from "@/lib/tennisQuiz";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const AUTO_ADVANCE_DELAY_MS = 500;

export default function TennisRulesQuiz() {
  const router = useRouter();
  const [questions] = useState<Question[]>(() => pickQuestions(QUESTION_BANK));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState(() => performance.now());
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    if (!questionStartTime) return undefined;

    const timer = window.setInterval(() => {
      setTimeSpent(Math.floor((performance.now() - questionStartTime) / 1000));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [questionStartTime]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress =
    questions.length > 0
      ? Math.round(((currentQuestionIndex + 1) / questions.length) * 100)
      : 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleFinish = (nextAnswers = answers) => {
    const result = gradeQuiz(nextAnswers);
    const params = new URLSearchParams();
    params.append("score", result.score.toString());
    params.append("grade", result.grade);
    params.append("timeSpent", result.timeSpent.toString());
    params.append("wrongByCat", JSON.stringify(result.wrongByCat));
    params.append("answers", JSON.stringify(result.answers));
    params.append("questions", JSON.stringify(questions));

    router.push(`/tennis-rules-quiz/result?${params.toString()}`);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null || !currentQuestion) return;

    setSelectedAnswer(answerIndex);
    const nextAnswer: QuizAnswer = {
      id: currentQuestion.id,
      correct: answerIndex === currentQuestion.a,
      cat: currentQuestion.cat,
      diff: currentQuestion.diff,
      selectedAnswer: answerIndex,
      timeSpent,
    };

    const nextAnswers = [...answers, nextAnswer];
    setAnswers(nextAnswers);

    window.setTimeout(() => {
      if (isLastQuestion) {
        handleFinish(nextAnswers);
        return;
      }

      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeSpent(0);
      setQuestionStartTime(performance.now());
    }, AUTO_ADVANCE_DELAY_MS);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex === 0) return;

    setCurrentQuestionIndex((prev) => prev - 1);
    setSelectedAnswer(null);
    setTimeSpent(0);
    setQuestionStartTime(performance.now());
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      emerald: "bg-emerald-100 text-emerald-800",
      sky: "bg-sky-100 text-sky-800",
      amber: "bg-amber-100 text-amber-800",
      indigo: "bg-indigo-100 text-indigo-800",
      teal: "bg-teal-100 text-teal-800",
      rose: "bg-rose-100 text-rose-800",
      violet: "bg-violet-100 text-violet-800",
      orange: "bg-orange-100 text-orange-800",
      cyan: "bg-cyan-100 text-cyan-800",
    };
    return colorMap[CATEGORY_COLORS[category]] || "bg-gray-100 text-gray-800";
  };

  if (!currentQuestion) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-emerald-600" />
          <p className="text-gray-600">퀴즈 문항을 준비하고 있습니다.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50 px-4 py-5">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Badge className="mb-2 bg-emerald-100 text-emerald-800">
                테니스 규칙 퀴즈
              </Badge>
              <h1 className="text-2xl font-bold text-gray-950">
                실전 규칙 판단 테스트
              </h1>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Clock className="h-4 w-4" />
              {Math.floor(timeSpent / 60)}:
              {(timeSpent % 60).toString().padStart(2, "0")}
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-sm text-gray-700">
              <span>
                문항 {currentQuestionIndex + 1} / {questions.length}
              </span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-gray-200 bg-white shadow-sm">
            <CardHeader>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <Badge className={getCategoryColor(currentQuestion.cat)}>
                  {CATEGORY_LABELS[currentQuestion.cat]}
                </Badge>
                <Badge variant="outline" className="text-gray-600">
                  난이도 {currentQuestion.diff}
                </Badge>
              </div>
              <CardTitle className="text-xl leading-8 text-gray-950 sm:text-2xl">
                {currentQuestion.q}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="mb-6 grid gap-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;

                  return (
                    <Button
                      key={`${currentQuestion.id}-${index}`}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={selectedAnswer !== null}
                      className={`h-auto w-full justify-start whitespace-normal rounded-lg p-4 text-left transition-colors ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-50 text-emerald-950 shadow-sm"
                          : "border-gray-300 bg-white text-gray-900 hover:border-emerald-500 hover:bg-emerald-50"
                      }`}
                      variant="outline"
                    >
                      <span
                        className={`mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                          isSelected
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : "border-gray-300 text-gray-700"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="leading-6">{option}</span>
                    </Button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="border-gray-300 bg-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  이전
                </Button>

                <div className="hidden items-center gap-1 sm:flex">
                  {questions.map((question, index) => (
                    <span
                      key={question.id}
                      className={`h-2 w-2 rounded-full ${
                        index < currentQuestionIndex
                          ? "bg-emerald-600"
                          : index === currentQuestionIndex
                            ? "bg-emerald-300"
                            : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {isLastQuestion && selectedAnswer !== null ? (
                  <Button
                    onClick={() => handleFinish()}
                    className="bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    결과 확인
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <p className="text-sm text-gray-500">답을 선택하면 자동으로 이동합니다.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
