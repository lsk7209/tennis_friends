"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Download,
  RotateCcw,
  Share2,
  Target,
  Trophy,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";
import { trackTestCompletionOnce } from "@/components/Tracking";
import UtilityResultLinks from "@/components/UtilityResultLinks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CATEGORY_COLORS,
  CATEGORY_LABELS,
  type Question,
  type QuizAnswer,
  getGradeInfo,
  getTopWeakAreas,
} from "@/lib/tennisQuiz";
import { safeJsonParse } from "@/lib/safe-json";

function TennisRulesQuizResultContent() {
  const searchParams = useSearchParams();
  const score = Number(searchParams.get("score") || 0);
  const grade = searchParams.get("grade") || "Beginner";
  const timeSpent = Number(searchParams.get("timeSpent") || 0);
  const wrongByCat = useMemo(
    () => safeJsonParse(searchParams.get("wrongByCat"), {}),
    [searchParams],
  );
  const answers = useMemo(
    () => safeJsonParse(searchParams.get("answers"), []) as QuizAnswer[],
    [searchParams],
  );
  const questions = useMemo(
    () => safeJsonParse(searchParams.get("questions"), []) as Question[],
    [searchParams],
  );
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const gradeInfo = getGradeInfo(grade);
  const topWeakAreas = getTopWeakAreas(wrongByCat);
  const wrongAnswers = answers.filter((answer) => !answer.correct);

  useEffect(() => {
    if (score <= 0 || typeof window === "undefined") return;

    const completionId = [
      score,
      grade,
      timeSpent,
      searchParams.get("wrongByCat") || "",
      searchParams.get("answers") || "",
    ].join(":");

    trackTestCompletionOnce("tennis-rules-quiz", completionId, {
      score,
      grade,
      timeSpent,
      wrongByCat,
      wrongAnswerCount: wrongAnswers.length,
    });
  }, [score, grade, timeSpent, searchParams, wrongByCat, wrongAnswers.length]);

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

  const generateShareImage = async () => {
    setIsGeneratingImage(true);
    try {
      const element = document.getElementById("result-card");
      if (!element) return;

      const canvas = await html2canvas(element, {
        background: "#ffffff",
      });

      const link = document.createElement("a");
      link.download = `tennis-rules-quiz-result-${score}-${grade}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("결과 이미지 생성 오류:", error);
      }
      toast.error("결과 이미지를 만들지 못했습니다.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const pdf = new jsPDF();
      pdf.setFontSize(18);
      pdf.text("Tennis Rules Quiz Result", 20, 24);
      pdf.setFontSize(12);
      pdf.text(`Score: ${score}/12`, 20, 42);
      pdf.text(`Grade: ${gradeInfo.label}`, 20, 52);
      pdf.text(`Time: ${Math.floor(timeSpent / 60)}m ${timeSpent % 60}s`, 20, 62);
      pdf.text(
        `Weak areas: ${topWeakAreas.map((area) => CATEGORY_LABELS[area]).join(", ")}`,
        20,
        72,
      );
      pdf.save(`tennis-rules-quiz-result-${score}-${grade}.pdf`);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("PDF 생성 오류:", error);
      }
      toast.error("PDF를 만들지 못했습니다.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`${window.location.origin}/tennis-rules-quiz`);
    toast.success("퀴즈 링크를 복사했습니다.");
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <Card
            id="result-card"
            className="mb-8 border-emerald-200 bg-white shadow-sm"
          >
            <CardContent className="p-7 text-center sm:p-10">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <Trophy className="h-10 w-10 text-emerald-700" />
              </div>
              <h1 className="mb-4 text-3xl font-bold text-gray-950 sm:text-4xl">
                테니스 규칙 점수: {score}/12
              </h1>
              <Badge className={`mb-4 px-4 py-2 text-base font-semibold ${gradeInfo.color}`}>
                {gradeInfo.label}
              </Badge>
              <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                {gradeInfo.description}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {Math.floor(timeSpent / 60)}분 {timeSpent % 60}초
                </span>
                <span className="inline-flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  오답 {wrongAnswers.length}개
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-10" aria-labelledby="weak-areas">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <h2 id="weak-areas" className="text-2xl font-bold text-gray-950">
              보완할 규칙 영역
            </h2>
            <p className="mt-2 text-gray-600">
              오답이 많은 카테고리를 기준으로 다음 복습 우선순위를 정했습니다.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {topWeakAreas.map((area, index) => (
              <Card key={area} className="border-gray-200 bg-white">
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge className={getCategoryColor(area)}>
                      {CATEGORY_LABELS[area]}
                    </Badge>
                    <span className="text-sm font-semibold text-gray-500">
                      #{index + 1}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-gray-600">
                    {CATEGORY_LABELS[area]} 상황을 다시 확인하면 경기 중 판정 실수를 줄일 수 있습니다.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {wrongAnswers.length > 0 && (
        <section className="bg-gray-50 px-4 py-10" aria-labelledby="wrong-answers">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6">
              <h2 id="wrong-answers" className="text-2xl font-bold text-gray-950">
                오답 해설
              </h2>
              <p className="mt-2 text-gray-600">
                틀린 문항의 정답과 해설을 다시 확인하세요.
              </p>
            </div>
            <div className="space-y-5">
              {wrongAnswers.map((answer) => {
                const question = questions.find((item) => item.id === answer.id);
                if (!question) return null;

                return (
                  <Card key={answer.id} className="border-gray-200 bg-white">
                    <CardContent className="p-5 sm:p-6">
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <Badge className={getCategoryColor(answer.cat)}>
                          {CATEGORY_LABELS[answer.cat]}
                        </Badge>
                        <Badge variant="outline" className="text-gray-600">
                          난이도 {answer.diff}
                        </Badge>
                      </div>
                      <h3 className="mb-4 text-lg font-bold leading-7 text-gray-950">
                        {question.q}
                      </h3>
                      <div className="mb-5 grid gap-2">
                        {question.options.map((option, optionIndex) => {
                          const isSelected = answer.selectedAnswer === optionIndex;
                          const isCorrect = optionIndex === question.a;
                          return (
                            <div
                              key={`${question.id}-${optionIndex}`}
                              className={`rounded-lg border p-3 text-sm ${
                                isCorrect
                                  ? "border-green-500 bg-green-50 text-green-950"
                                  : isSelected
                                    ? "border-red-500 bg-red-50 text-red-950"
                                    : "border-gray-200 bg-gray-50 text-gray-600"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {isCorrect ? (
                                  <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                                ) : isSelected ? (
                                  <XCircle className="h-5 w-5 shrink-0 text-red-600" />
                                ) : (
                                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-300 text-xs">
                                    {optionIndex + 1}
                                  </span>
                                )}
                                <span className="leading-6">{option}</span>
                                {isCorrect && (
                                  <Badge className="ml-auto bg-green-100 text-green-800">
                                    정답
                                  </Badge>
                                )}
                                {isSelected && !isCorrect && (
                                  <Badge className="ml-auto bg-red-100 text-red-800">
                                    선택
                                  </Badge>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                        <div className="mb-2 flex items-center gap-2 font-semibold text-blue-900">
                          <BookOpen className="h-5 w-5" />
                          해설
                        </div>
                        <p className="text-sm leading-6 text-blue-800">
                          {question.exp}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 py-10" aria-label="다음 행동">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-950">다음 단계</h2>
            <p className="mt-2 text-gray-600">
              규칙 감각을 확인했다면 실력, 장비, 부상 위험도 함께 점검하세요.
            </p>
          </div>

          <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/tennis-rules-quiz/quiz">
              <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
                <RotateCcw className="mr-2 h-4 w-4" />
                다시 풀기
              </Button>
            </Link>
            <Link href="/utility/ntrp-test">
              <Button variant="outline" className="w-full border-gray-300 bg-white">
                <Trophy className="mr-2 h-4 w-4" />
                NTRP 테스트
              </Button>
            </Link>
            <Link href="/utility/string-tension">
              <Button variant="outline" className="w-full border-gray-300 bg-white">
                <Target className="mr-2 h-4 w-4" />
                텐션 계산기
              </Button>
            </Link>
            <Link href="/utility/injury-risk">
              <Button variant="outline" className="w-full border-gray-300 bg-white">
                <BookOpen className="mr-2 h-4 w-4" />
                부상 체크
              </Button>
            </Link>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              onClick={generateShareImage}
              disabled={isGeneratingImage}
              variant="outline"
              className="border-gray-300 bg-white"
            >
              <Download className="mr-2 h-4 w-4" />
              {isGeneratingImage ? "이미지 생성 중" : "결과 이미지 저장"}
            </Button>
            <Button
              onClick={generatePDF}
              disabled={isGeneratingPDF}
              variant="outline"
              className="border-gray-300 bg-white"
            >
              <Download className="mr-2 h-4 w-4" />
              {isGeneratingPDF ? "PDF 생성 중" : "PDF 저장"}
            </Button>
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="border-gray-300 bg-white"
            >
              <Share2 className="mr-2 h-4 w-4" />
              링크 공유
            </Button>
          </div>
        </div>
      </section>

      <UtilityResultLinks
        title="규칙 퀴즈 결과로 다음 점검 이어가기"
        description="규칙 이해도를 기준으로 실력, 플레이 스타일, 스트링 세팅, 부상 위험까지 함께 확인하세요."
        source="tennis-rules-quiz-result"
        links={[
          {
            href: "/utility/ntrp-test",
            title: "NTRP 레벨 테스트",
            description: "규칙 이해와 실제 경기력을 연결해 현재 레벨을 확인합니다.",
          },
          {
            href: "/utility/play-style-test",
            title: "플레이 스타일 테스트",
            description: "경기 운영 성향과 의사결정 패턴을 분석합니다.",
          },
          {
            href: "/utility/string-tension",
            title: "스트링 텐션 계산기",
            description: "경기 감각과 라켓 세팅을 함께 조정합니다.",
          },
          {
            href: "/utility/injury-risk",
            title: "부상 위험 체크",
            description: "현재 컨디션과 훈련 강도를 점검합니다.",
          },
          {
            href: "/utility/equipment-recommendation",
            title: "장비 추천",
            description: "플레이 성향에 맞는 라켓과 장비 조합을 찾습니다.",
          },
          {
            href: "/blog",
            title: "테니스 규칙과 전술 글",
            description: "경기 운영, 규칙, 전술 해설을 더 깊게 읽어보세요.",
          },
        ]}
      />
    </main>
  );
}

export default function TennisRulesQuizResult() {
  return (
    <Suspense fallback={<div className="p-8 text-center">결과를 불러오는 중입니다.</div>}>
      <TennisRulesQuizResultContent />
    </Suspense>
  );
}
