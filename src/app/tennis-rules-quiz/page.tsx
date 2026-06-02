"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Play,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import FAQSection from "@/components/seo/FAQSection";
import QuizSchema from "@/components/seo/QuizSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TennisRulesQuizIntro() {
  const tips = useMemo(
    () => [
      "서브 토스는 공을 치지 않았다면 다시 할 수 있습니다. 단, 반복 지연은 매너 문제가 될 수 있습니다.",
      "복식 리시브 순서는 세트 중 임의로 바꾸기 어렵습니다. 게임 시작 전 순서를 확인하세요.",
      "랠리 중 공이 네트를 맞고 상대 코트 안에 떨어지면 인플레이입니다.",
      "풋폴트는 베이스라인뿐 아니라 센터마크 연장선 침범도 포함될 수 있습니다.",
      "옆 코트 공이 들어오면 안전을 위해 즉시 멈추고 렛으로 다시 진행하는 것이 일반적입니다.",
      "타이브레이크에서는 서버 순서와 코트 교대 타이밍을 함께 기억해야 합니다.",
    ],
    [],
  );

  const [dailyTip] = useState(() => {
    const today = new Date().getDate();
    return tips[today % tips.length];
  });

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.tennisfrens.com";
  const quizUrl = `${siteUrl}/tennis-rules-quiz`;

  const faqItems = [
    {
      question: "테니스 규칙 퀴즈는 어떤 내용인가요?",
      answer:
        "서브, 풋폴트, 스코어, 복식, 타이브레이크, 방해 상황처럼 실제 경기에서 자주 나오는 규칙을 12문항으로 점검하는 퀴즈입니다.",
    },
    {
      question: "퀴즈를 푸는 데 얼마나 걸리나요?",
      answer:
        "대부분 5분 안에 끝낼 수 있습니다. 각 문항은 선택 즉시 다음 문항으로 이동하고, 결과 페이지에서 점수와 약점 영역을 확인할 수 있습니다.",
    },
    {
      question: "결과는 어떻게 해석하나요?",
      answer:
        "10점 이상은 Rules Pro, 7-9점은 Match Ready, 4-6점은 Learning, 0-3점은 Beginner로 구분합니다. 틀린 카테고리를 기준으로 보완할 규칙을 제안합니다.",
    },
    {
      question: "초보자도 풀 수 있나요?",
      answer:
        "네. 기본 규칙부터 실전 상황 판단까지 난이도를 섞어 구성했기 때문에 입문자도 자신의 현재 이해도를 확인할 수 있습니다.",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "즉시 채점",
      description: "선택한 답을 기준으로 12문항 점수와 등급을 바로 계산합니다.",
    },
    {
      icon: Target,
      title: "약점 분석",
      description: "서브, 스코어, 복식 등 틀린 카테고리를 묶어 보완 방향을 보여줍니다.",
    },
    {
      icon: Trophy,
      title: "결과 저장",
      description: "결과 이미지를 만들거나 PDF로 저장해 복습 자료로 활용할 수 있습니다.",
    },
  ];

  return (
    <>
      <QuizSchema
        name="테니스 규칙 퀴즈"
        description="12문항 테니스 규칙 퀴즈로 실전 규칙 감각을 점검하고 정답, 해설, 약점 분석을 확인하세요."
        url={quizUrl}
        numberOfQuestions={12}
        timeRequired="PT5M"
        educationalLevel="Beginner to Advanced"
        about="테니스 경기 규칙 학습"
      />

      <main className="min-h-screen bg-white">
        <section
          className="border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-4 py-12 sm:py-16"
          aria-label="테니스 규칙 퀴즈 소개"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <Badge className="mb-5 bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                12문항 실전 규칙 점검
              </Badge>
              <h1 className="mb-5 text-4xl font-bold leading-tight text-gray-950 sm:text-5xl">
                테니스 규칙, 경기 중 바로 판단할 수 있나요?
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-600">
                서브, 풋폴트, 복식 리시브, 타이브레이크, 방해 상황을 실제 경기 맥락으로 풀어봅니다.
                결과 페이지에서 점수와 약점 카테고리, 복습 방향을 함께 확인할 수 있습니다.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/tennis-rules-quiz/quiz">
                  <Button className="w-full bg-emerald-600 px-7 py-6 text-base font-semibold text-white hover:bg-emerald-700 sm:w-auto">
                    <Play className="mr-2 h-5 w-5" />
                    퀴즈 시작
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 bg-white px-7 py-6 text-base font-semibold text-gray-900 hover:border-emerald-500 sm:w-auto"
                  >
                    <Trophy className="mr-2 h-5 w-5" />
                    NTRP 테스트
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="border-emerald-200 bg-white shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <BookOpen className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">
                      오늘의 규칙 팁
                    </p>
                    <h2 className="text-xl font-bold text-gray-950">
                      실전에서 자주 헷갈리는 판정
                    </h2>
                  </div>
                </div>
                <p className="rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-sm leading-7 text-gray-800">
                  {dailyTip}
                </p>
                <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-lg bg-gray-50 p-3">
                    <dt className="text-xs text-gray-500">문항</dt>
                    <dd className="text-lg font-bold text-gray-950">12</dd>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3">
                    <dt className="text-xs text-gray-500">예상 시간</dt>
                    <dd className="text-lg font-bold text-gray-950">5분</dd>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3">
                    <dt className="text-xs text-gray-500">등급</dt>
                    <dd className="text-lg font-bold text-gray-950">4단계</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-4 py-12" aria-labelledby="quiz-features">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 id="quiz-features" className="text-2xl font-bold text-gray-950">
                  퀴즈에서 확인하는 것
                </h2>
                <p className="mt-2 text-gray-600">
                  단순 암기보다 경기 중 판단에 필요한 규칙 감각을 점검합니다.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                모바일에서도 바로 풀이 가능
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="border-gray-200 bg-white">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100">
                        <Icon className="h-6 w-6 text-emerald-700" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-gray-950">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-6 text-gray-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-12" aria-label="관련 도구">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            <Link href="/utility/string-tension" className="group">
              <Card className="h-full border-gray-200 bg-white transition-colors group-hover:border-emerald-400">
                <CardContent className="p-5">
                  <Target className="mb-3 h-6 w-6 text-emerald-700" />
                  <h3 className="font-bold text-gray-950">스트링 텐션 계산기</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    규칙 감각과 함께 장비 세팅도 점검하세요.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/utility/injury-risk" className="group">
              <Card className="h-full border-gray-200 bg-white transition-colors group-hover:border-emerald-400">
                <CardContent className="p-5">
                  <CheckCircle className="mb-3 h-6 w-6 text-emerald-700" />
                  <h3 className="font-bold text-gray-950">부상 위험 체크</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    경기 전 컨디션과 무리한 플레이 위험을 확인합니다.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/utility/play-style-test" className="group">
              <Card className="h-full border-gray-200 bg-white transition-colors group-hover:border-emerald-400">
                <CardContent className="p-5">
                  <Users className="mb-3 h-6 w-6 text-emerald-700" />
                  <h3 className="font-bold text-gray-950">플레이 스타일 테스트</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    규칙 판단과 함께 나의 경기 운영 성향을 분석합니다.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="px-4 py-12" aria-labelledby="quiz-faq">
          <div className="mx-auto max-w-4xl">
            <FAQSection items={faqItems} id="quiz-faq" title="자주 묻는 질문" />
          </div>
        </section>
      </main>
    </>
  );
}
