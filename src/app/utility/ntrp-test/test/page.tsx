'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Check, Info } from 'lucide-react';
import { toast } from 'sonner';
import { charMap, questions } from '@/lib/questions';
import { trackEvent, TRACKING_EVENTS } from '@/lib/analytics';
import { registerPendingNtrpAttempt } from '@/lib/ntrp-results';

const MIN_ANSWER = 1;
const MAX_ANSWER = 5;
const STYLE_QUESTION_INDEX = 12;

const isAnswered = (answer: number) => Number.isInteger(answer) && answer >= MIN_ANSWER && answer <= MAX_ANSWER;

export default function NtrpTestPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(() => Array(questions.length).fill(0));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submittingRef = useRef(false);
  const started = useRef(false);
  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const hasNavigated = useRef(false);

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = answers.filter(isAnswered).length;
  const progress = Math.round((answeredCount / questions.length) * 100);
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const currentAnswered = isAnswered(answers[currentQuestionIndex]);
  const allAnswered = answeredCount === questions.length;
  const groupName = `ntrp-question-${currentQuestion.id}`;

  // Move focus to the new question after an explicit navigation, not on first render.
  useEffect(() => {
    if (!hasNavigated.current) return;
    questionHeadingRef.current?.focus();
  }, [currentQuestionIndex]);

  const selectAnswer = (value: number) => {
    if (submittingRef.current || !isAnswered(value)) return;
    if (!started.current) {
      started.current = true;
      trackEvent(TRACKING_EVENTS.ASSESSMENT_STARTED, {
        tool_slug: 'ntrp-test',
        page_path: '/utility/ntrp-test/test',
        questionnaire_version: 'legacy-v2',
        scoring_version: 'legacy-sum-v2',
        measurement_version: 'v2',
      });
    }
    setAnswers((previous) => previous.map((answer, index) => (index === currentQuestionIndex ? value : answer)));
  };

  const goTo = (index: number) => {
    if (submittingRef.current || index < 0 || index >= questions.length) return;
    hasNavigated.current = true;
    setCurrentQuestionIndex(index);
  };

  const submit = () => {
    // A ref guards against rapid double clicks / repeated Enter before re-render.
    if (submittingRef.current || !answers.every(isAnswered)) return;
    submittingRef.current = true;
    setIsSubmitting(true);
    const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
    const q13Label = questions[STYLE_QUESTION_INDEX].options[answers[STYLE_QUESTION_INDEX] - 1];
    const completionId = crypto.randomUUID();
    const stored = registerPendingNtrpAttempt(completionId, {
      score: totalScore,
      character: charMap[q13Label],
      questionnaire: 'legacy-v2',
      scoring: 'legacy-sum-v2',
    });
    if (!stored) {
      toast.info('이 브라우저에는 결과를 저장하지 못할 수 있습니다. 현재 결과는 확인할 수 있습니다.');
    }
    router.push(`/utility/ntrp-test/result?score=${totalScore}&q13=${encodeURIComponent(q13Label)}&completion=${completionId}`);
  };

  const handleNext = () => {
    if (!currentAnswered) return;
    if (isLastQuestion) submit();
    else goTo(currentQuestionIndex + 1);
  };

  const firstUnanswered = answers.findIndex((answer) => !isAnswered(answer));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <section className="bg-gradient-to-br from-green-700 via-emerald-700 to-teal-700 py-8 md:py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-6 text-center">
            <Badge className="mb-4 border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-semibold text-white">
              NTRP 비공식 자가점검 · 15문항
            </Badge>
            <h1 className="mb-3 text-3xl font-extrabold text-white md:text-4xl">나의 테니스 실력은?</h1>
            <p className="text-base font-medium text-green-50 md:text-lg">
              답을 고른 뒤 &lsquo;다음&rsquo;을 눌러 진행하세요. 마지막 문항에서 &lsquo;결과 보기&rsquo;를 누르면 참고 구간을 보여줍니다.
            </p>
          </div>

          <div className="rounded-2xl border border-white/30 bg-white/20 p-5">
            <div className="mb-3 flex items-center justify-between text-sm font-bold text-white md:text-base">
              <span>질문 {currentQuestionIndex + 1} / {questions.length}</span>
              <span>답변 {answeredCount} / {questions.length}</span>
            </div>
            <div
              className="relative h-3 overflow-hidden rounded-full bg-white/20"
              role="progressbar"
              aria-label="답변 완료 비율"
              aria-valuemin={0}
              aria-valuemax={questions.length}
              aria-valuenow={answeredCount}
              aria-valuetext={`${questions.length}문항 중 ${answeredCount}문항 답변`}
            >
              <div className="absolute left-0 top-0 h-full rounded-full bg-white motion-safe:transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="border-0 bg-white shadow-xl">
            <CardContent className="p-6 md:p-10">
              <fieldset disabled={isSubmitting}>
                <legend className="sr-only">질문 {currentQuestionIndex + 1}: {currentQuestion.question}</legend>
                <p className="mb-2 text-center text-sm font-bold text-emerald-800">질문 {currentQuestionIndex + 1}</p>
                <h2
                  ref={questionHeadingRef}
                  tabIndex={-1}
                  className="mb-8 text-center text-2xl font-bold leading-relaxed text-gray-900 outline-none md:text-3xl"
                >
                  {currentQuestion.question}
                </h2>

                <div className="mb-8 space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    const optionValue = index + 1;
                    const isSelected = answers[currentQuestionIndex] === optionValue;
                    const inputId = `${groupName}-option-${optionValue}`;
                    return (
                      <label
                        key={inputId}
                        htmlFor={inputId}
                        className={`flex w-full cursor-pointer items-center gap-4 rounded-2xl border-2 p-5 text-left focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 motion-safe:transition-colors ${
                          isSelected
                            ? 'border-green-700 bg-green-700 text-white'
                            : 'border-gray-200 bg-white text-gray-900 hover:border-green-500 hover:bg-green-50'
                        }`}
                      >
                        <input
                          id={inputId}
                          type="radio"
                          name={groupName}
                          value={optionValue}
                          checked={isSelected}
                          onChange={() => selectAnswer(optionValue)}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                              event.preventDefault();
                              if (isSelected) handleNext();
                              else selectAnswer(optionValue);
                            }
                          }}
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl text-base font-bold ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {isSelected ? <Check className="h-5 w-5" /> : optionValue}
                        </span>
                        <span className="flex-1 text-base font-semibold leading-relaxed md:text-lg">{option}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="flex items-center justify-between gap-3 border-t border-gray-200 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => goTo(currentQuestionIndex - 1)}
                  disabled={currentQuestionIndex === 0 || isSubmitting}
                  className="px-6 py-3"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  이전
                </Button>
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!currentAnswered || isSubmitting || (isLastQuestion && !allAnswered)}
                  className="bg-green-700 px-6 py-3 text-white hover:bg-green-800"
                >
                  {isLastQuestion ? (isSubmitting ? '결과로 이동 중…' : '결과 보기') : '다음'}
                  {!isLastQuestion && <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />}
                </Button>
              </div>
              {isLastQuestion && !allAnswered && firstUnanswered >= 0 && (
                <p role="status" className="mt-4 text-center text-sm text-amber-800">
                  답하지 않은 문항이 있습니다.{' '}
                  <button type="button" className="font-semibold underline" onClick={() => goTo(firstUnanswered)}>
                    {firstUnanswered + 1}번 문항으로 이동
                  </button>
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="flex items-start gap-4 p-6">
              <Info className="mt-0.5 h-6 w-6 flex-none text-blue-800" aria-hidden="true" />
              <div className="text-sm leading-relaxed text-blue-900">
                <h2 className="mb-2 text-base font-bold">안내</h2>
                <p>문항별 답변은 이 페이지에서 합산에만 쓰며 서버로 보내지 않습니다. 결과(점수·레벨·스타일)는 이 브라우저에만 최대 50건 저장되고, 새로고침하면 답변은 처음부터 다시 시작됩니다.</p>
                <p className="mt-1">이 자가점검은 공식 NTRP 등급이 아닙니다. 각 질문에 가장 가깝다고 생각하는 답을 골라 주세요.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
