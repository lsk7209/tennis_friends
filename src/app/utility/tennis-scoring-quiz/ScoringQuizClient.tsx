"use client";

import { useState } from "react";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NaverCafeLink from "@/components/NaverCafeLink";
import UtilityResultLinks from "@/components/UtilityResultLinks";
import { trackTestCompletionOnce } from "@/components/Tracking";
import {
  getDisplayOptions,
  gradeScoringQuiz,
  ITF_RULES_URL,
  SCORING_QUESTIONS,
  SCORING_QUIZ_VERSION,
} from "@/lib/scoring-quiz";

const NEXT_LINKS = [
  { href: "/tennis-rules-quiz", title: "테니스 규칙 퀴즈", description: "라인 판정, 복식 서브 순서 등 경기 규칙을 더 넓게 확인합니다." },
  { href: "/utility/tiebreak-pressure-simulator", title: "타이브레이크 압박 시뮬레이터", description: "점수 상황별로 어떤 선택을 할지 연습합니다." },
  { href: "/utility/doubles-rotation-generator", title: "복식 로테이션 생성기", description: "모임 인원과 코트 수로 라운드별 복식 조를 짭니다." },
];

function ResultView({ answers, onRetry }: { answers: (number | null)[]; onRetry: () => void }) {
  const grade = gradeScoringQuiz(answers);
  return (
    <section aria-labelledby="scoring-result-title" className="space-y-6">
      <Card className="border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950">
        <CardContent className="p-6 text-center">
          <h2 id="scoring-result-title" className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">
            {grade.total}문제 중 {grade.correct}문제 정답 · {grade.label}
          </h2>
          <p className="mt-2 text-emerald-900/80 dark:text-emerald-100/80">{grade.message}</p>
          <Button type="button" variant="outline" className="mt-4 text-emerald-900 dark:text-emerald-100" onClick={onRetry}>
            <RotateCcw aria-hidden="true" /> 다시 풀기
          </Button>
        </CardContent>
      </Card>
      <ol className="space-y-3">
        {SCORING_QUESTIONS.map((question, index) => {
          const isCorrect = answers[index] === question.answerIndex;
          return (
            <li key={question.id} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <p className="flex items-start gap-2 font-semibold text-slate-900 dark:text-slate-100">
                {isCorrect
                  ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-label="정답" />
                  : <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-label="오답" />}
                {index + 1}. {question.prompt}
              </p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">정답: {question.options[question.answerIndex]}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{question.explanation}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default function ScoringQuizClient() {
  const [answers, setAnswers] = useState<(number | null)[]>(() => SCORING_QUESTIONS.map(() => null));
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);
  const [attempt, setAttempt] = useState(1);

  const question = SCORING_QUESTIONS[current];
  const selected = answers[current];
  const answered = selected !== null;
  const isLast = current === SCORING_QUESTIONS.length - 1;

  const choose = (originalIndex: number) => {
    if (answered) return;
    setAnswers((previous) => previous.map((value, index) => (index === current ? originalIndex : value)));
  };

  const goNext = () => {
    if (!isLast) {
      setCurrent((value) => value + 1);
      return;
    }
    setFinished(true);
    const grade = gradeScoringQuiz(answers);
    trackTestCompletionOnce("tennis-scoring-quiz", `${SCORING_QUIZ_VERSION}-${attempt}-${Date.now()}`, { correct: grade.correct, total: grade.total });
  };

  const retry = () => {
    setAnswers(SCORING_QUESTIONS.map(() => null));
    setCurrent(0);
    setFinished(false);
    setAttempt((value) => value + 1);
  };

  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-12 text-slate-900 dark:text-slate-100">
        <header className="mb-8">
          <Badge className="bg-emerald-700 text-white">테니스 퀴즈</Badge>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">테니스 점수 계산 퀴즈</h1>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            러브·듀스부터 타이브레이크, 노애드, 매치 타이브레이크까지 {SCORING_QUESTIONS.length}문제로 점수 규칙을 확인합니다.
            문제를 고르면 바로 해설이 나오고, 결과는 저장되지 않습니다.
          </p>
        </header>

        {finished ? (
          <ResultView answers={answers} onRetry={retry} />
        ) : (
          <section aria-labelledby="scoring-question" className="space-y-4">
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span>문제 {current + 1} / {SCORING_QUESTIONS.length}</span>
              <span>정답 {gradeScoringQuiz(answers).correct}개</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800" aria-hidden="true">
              <div className="h-2 rounded-full bg-emerald-600" style={{ width: `${(answers.filter((value) => value !== null).length / SCORING_QUESTIONS.length) * 100}%` }} />
            </div>
            <h2 id="scoring-question" className="text-xl font-bold">{question.prompt}</h2>
            <div className="grid gap-3" role="group" aria-label="보기">
              {getDisplayOptions(question, current).map((option) => {
                const isAnswer = option.originalIndex === question.answerIndex;
                const isPicked = option.originalIndex === selected;
                const stateClass = !answered
                  ? "border-slate-300 bg-white text-slate-900 hover:border-emerald-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                  : isAnswer
                    ? "border-emerald-600 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100"
                    : isPicked
                      ? "border-red-500 bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-100"
                      : "border-slate-200 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400";
                return (
                  <button
                    key={option.originalIndex}
                    type="button"
                    onClick={() => choose(option.originalIndex)}
                    disabled={answered}
                    aria-pressed={isPicked}
                    className={`rounded-lg border-2 p-4 text-left font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${stateClass}`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
            <div aria-live="polite">
              {answered && (
                <div className="rounded-lg bg-slate-100 p-4 text-sm leading-6 dark:bg-slate-800">
                  <p className="font-bold">{selected === question.answerIndex ? "정답입니다." : `오답입니다. 정답: ${question.options[question.answerIndex]}`}</p>
                  <p className="mt-1">{question.explanation}</p>
                </div>
              )}
            </div>
            <Button type="button" onClick={goNext} disabled={!answered}>
              {isLast ? "결과 보기" : "다음 문제"}
            </Button>
          </section>
        )}

        <p className="mt-8 text-xs text-slate-500 dark:text-slate-400">
          기준: <a href={ITF_RULES_URL} target="_blank" rel="noopener noreferrer" className="underline">ITF 2026 Rules of Tennis</a>(국제테니스연맹, PDF). 대회·동호회마다 노애드, 매치 타이브레이크 사용 여부가 다를 수 있습니다. · {SCORING_QUIZ_VERSION}
        </p>

        <section className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h2 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">헷갈리는 점수 상황, 카페에서 물어보세요</h2>
          <p className="mt-2 text-sm text-emerald-900/80 dark:text-emerald-100/80">
            실제 경기에서 겪은 애매한 점수·판정 상황을 TennisFriends 네이버 카페에서 이야기할 수 있습니다.
          </p>
          <Button asChild className="mt-4">
            <NaverCafeLink ctaLocation="scoring_quiz" linkText="네이버 카페 방문하기" aria-label="네이버 카페 테니스프렌즈 새 창에서 열기">
              네이버 카페 방문하기 →
            </NaverCafeLink>
          </Button>
        </section>
      </main>
      <UtilityResultLinks links={NEXT_LINKS} source="scoring-quiz" ctaLocation="scoring_quiz_next" />
    </>
  );
}
