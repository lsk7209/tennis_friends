"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NaverCafeLink from "@/components/NaverCafeLink";
import UtilityResultLinks from "@/components/UtilityResultLinks";
import { trackTestCompletionOnce } from "@/components/Tracking";
import { tennisTerms } from "@/data/tennis-terms";
import { buildTermsRound, gradeTermsRound, TERMS_QUIZ_VERSION, type TermQuestion } from "@/lib/terms-quiz";

const INITIAL_SEED = 20260929;
const termsById = new Map(tennisTerms.map((term) => [term.id, term]));

const NEXT_LINKS = [
  { href: "/utility/tennis-dictionary", title: "테니스 용어 사전", description: `${tennisTerms.length}개 용어를 카테고리별로 찾아보고 즐겨찾기합니다.` },
  { href: "/utility/tennis-scoring-quiz", title: "테니스 점수 계산 퀴즈", description: "듀스·타이브레이크·노애드 규칙을 12문제로 확인합니다." },
  { href: "/tennis-rules-quiz", title: "테니스 규칙 퀴즈", description: "라인 판정, 복식 서브 순서 등 경기 규칙을 확인합니다." },
];

function ResultView({ questions, answers, onRetry }: { questions: TermQuestion[]; answers: (string | null)[]; onRetry: () => void }) {
  const { correct, total } = gradeTermsRound(questions, answers);
  return (
    <section aria-labelledby="terms-result-title" className="space-y-6">
      <Card className="border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950">
        <CardContent className="p-6 text-center">
          <h2 id="terms-result-title" className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">
            {total}문제 중 {correct}문제 정답
          </h2>
          <p className="mt-2 text-emerald-900/80 dark:text-emerald-100/80">
            새 세트를 풀면 {tennisTerms.length}개 용어 중 다른 {total}개가 무작위로 나옵니다.
          </p>
          <Button type="button" variant="outline" className="mt-4 text-emerald-900 dark:text-emerald-100" onClick={onRetry}>
            <RotateCcw aria-hidden="true" /> 새 문제 세트
          </Button>
        </CardContent>
      </Card>
      <ol className="space-y-3">
        {questions.map((question, index) => {
          const isCorrect = answers[index] === question.answer;
          const term = termsById.get(question.termId);
          return (
            <li key={question.termId} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <p className="flex items-start gap-2 font-semibold text-slate-900 dark:text-slate-100">
                {isCorrect
                  ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-label="정답" />
                  : <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-label="오답" />}
                {question.answer}
              </p>
              {term && <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{term.definition}</p>}
              {!isCorrect && answers[index] && <p className="mt-1 text-sm text-red-700 dark:text-red-400">내 답: {answers[index]}</p>}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default function TermsQuizClient() {
  const [seed, setSeed] = useState(INITIAL_SEED);
  const questions = useMemo(() => buildTermsRound(tennisTerms, seed), [seed]);
  const [answers, setAnswers] = useState<(string | null)[]>(() => questions.map(() => null));
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const selected = answers[current];
  const answered = selected !== null;
  const isLast = current === questions.length - 1;
  const answeredCount = answers.filter((value) => value !== null).length;

  const choose = (option: string) => {
    if (answered) return;
    setAnswers((previous) => previous.map((value, index) => (index === current ? option : value)));
  };

  const goNext = () => {
    if (!isLast) {
      setCurrent((value) => value + 1);
      return;
    }
    setFinished(true);
    const { correct, total } = gradeTermsRound(questions, answers);
    trackTestCompletionOnce("tennis-terms-quiz", `${TERMS_QUIZ_VERSION}-${seed}-${Date.now()}`, { correct, total });
  };

  const retry = () => {
    const nextSeed = seed + 1;
    setSeed(nextSeed);
    setAnswers(buildTermsRound(tennisTerms, nextSeed).map(() => null));
    setCurrent(0);
    setFinished(false);
  };

  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-12 text-slate-900 dark:text-slate-100">
        <header className="mb-8">
          <Badge className="bg-emerald-700 text-white">테니스 퀴즈</Badge>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">테니스 용어 퀴즈</h1>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            설명을 읽고 어떤 용어인지 맞혀 보세요. <Link href="/utility/tennis-dictionary" className="underline">테니스 용어 사전</Link>의
            {" "}{tennisTerms.length}개 용어 중 {questions.length}개가 무작위로 나오며, 결과는 저장되지 않습니다.
          </p>
        </header>

        {finished ? (
          <ResultView questions={questions} answers={answers} onRetry={retry} />
        ) : (
          <section aria-labelledby="terms-question" className="space-y-4">
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span>문제 {current + 1} / {questions.length} · {question.difficulty}</span>
              <span>정답 {gradeTermsRound(questions, answers).correct}개</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800" aria-hidden="true">
              <div className="h-2 rounded-full bg-emerald-600" style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
            </div>
            <h2 id="terms-question" className="text-lg font-bold leading-8">{question.prompt}</h2>
            {question.example && <p className="text-sm text-slate-600 dark:text-slate-400">예: {question.example}</p>}
            <div className="grid gap-3" role="group" aria-label="보기">
              {question.options.map((option) => {
                const isAnswer = option === question.answer;
                const isPicked = option === selected;
                const stateClass = !answered
                  ? "border-slate-300 bg-white text-slate-900 hover:border-emerald-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                  : isAnswer
                    ? "border-emerald-600 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100"
                    : isPicked
                      ? "border-red-500 bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-100"
                      : "border-slate-200 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400";
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => choose(option)}
                    disabled={answered}
                    aria-pressed={isPicked}
                    className={`rounded-lg border-2 p-4 text-left font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${stateClass}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <div aria-live="polite">
              {answered && (
                <p className="rounded-lg bg-slate-100 p-4 text-sm font-bold dark:bg-slate-800">
                  {selected === question.answer ? "정답입니다." : `오답입니다. 정답: ${question.answer}`}
                </p>
              )}
            </div>
            <Button type="button" onClick={goNext} disabled={!answered}>
              {isLast ? "결과 보기" : "다음 문제"}
            </Button>
          </section>
        )}

        <p className="mt-8 text-xs text-slate-500 dark:text-slate-400">
          문제는 TennisFriends 용어 사전 설명으로 만들며, 설명 속 정답 단어는 ○○로 가립니다. · {TERMS_QUIZ_VERSION}
        </p>

        <section className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h2 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">모르는 용어, 카페에서 물어보세요</h2>
          <p className="mt-2 text-sm text-emerald-900/80 dark:text-emerald-100/80">
            코트에서 들은 낯선 테니스 용어를 TennisFriends 네이버 카페에서 이야기할 수 있습니다.
          </p>
          <Button asChild className="mt-4">
            <NaverCafeLink ctaLocation="terms_quiz" linkText="네이버 카페 방문하기" aria-label="네이버 카페 테니스프렌즈 새 창에서 열기">
              네이버 카페 방문하기 →
            </NaverCafeLink>
          </Button>
        </section>
      </div>
      <UtilityResultLinks links={NEXT_LINKS} source="terms-quiz" ctaLocation="terms_quiz_next" />
    </>
  );
}
