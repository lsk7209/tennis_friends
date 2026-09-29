import assert from "node:assert/strict";
import { getDisplayOptions, gradeScoringQuiz, ITF_RULES_URL, SCORING_QUESTIONS } from "../src/lib/scoring-quiz.ts";

assert.ok(SCORING_QUESTIONS.length >= 10, "quiz needs at least 10 questions");
assert.equal(new Set(SCORING_QUESTIONS.map((question) => question.id)).size, SCORING_QUESTIONS.length, "duplicate question id");
assert.match(ITF_RULES_URL, /^https:\/\/www\.itftennis\.com\//);

const answerPositions = new Set();
SCORING_QUESTIONS.forEach((question, index) => {
  assert.equal(question.options.length, 4, `${question.id} must have 4 options`);
  assert.equal(new Set(question.options).size, 4, `${question.id} has duplicate options`);
  assert.ok(question.explanation.length >= 20, `${question.id} needs an explanation`);
  const display = getDisplayOptions(question, index);
  assert.deepEqual(display.map((option) => option.originalIndex).sort(), [0, 1, 2, 3], `${question.id} display must be a permutation`);
  display.forEach((option) => assert.equal(option.label, question.options[option.originalIndex]));
  answerPositions.add(display.findIndex((option) => option.originalIndex === question.answerIndex));
});
assert.ok(answerPositions.size >= 3, `correct answer appears in only ${answerPositions.size} display positions`);

// Rule facts locked to the ITF 2026 Rules of Tennis.
const byId = Object.fromEntries(SCORING_QUESTIONS.map((question) => [question.id, question]));
const answerOf = (id) => byId[id].options[byId[id].answerIndex];
assert.match(answerOf("tiebreak-change"), /6포인트마다/);
assert.match(answerOf("change-ends"), /홀수/);
assert.match(answerOf("match-tiebreak"), /10포인트 이상, 두 포인트 차이/);
assert.match(answerOf("tiebreak-serve"), /첫 서버가 1포인트/);
assert.match(answerOf("after-tiebreak"), /먼저 서브한 쪽의 상대/);
assert.match(answerOf("call-order"), /^15-30$/);
assert.match(byId["no-ad"].explanation, /리시버/);

// Grading bands.
const perfect = SCORING_QUESTIONS.map((question) => question.answerIndex);
assert.deepEqual(gradeScoringQuiz(perfect).correct, SCORING_QUESTIONS.length);
assert.equal(gradeScoringQuiz(perfect).label, "만점");
assert.equal(gradeScoringQuiz(SCORING_QUESTIONS.map(() => null)).label, "입문");
const nineRight = perfect.map((value, index) => (index < 9 ? value : (value + 1) % 4));
assert.equal(gradeScoringQuiz(nineRight).label, "능숙");

console.log(`Scoring quiz audit passed: ${SCORING_QUESTIONS.length} questions, ${answerPositions.size} answer positions, ITF rule facts, grading bands.`);
