import assert from "node:assert/strict";
import { buildTermsRound, getTermNames, gradeTermsRound, maskTermName, TERMS_PER_ROUND } from "../src/lib/terms-quiz.ts";
import { tennisTerms } from "../src/data/tennis-terms.ts";

const build = (seed) => buildTermsRound(tennisTerms, seed);
// Every definition, once masked, must not reveal its own term.
for (const term of tennisTerms) {
  const masked = maskTermName(`${term.definition} ${term.examples.join(" ")}`, term).toLowerCase();
  for (const name of getTermNames(term)) {
    assert.ok(!masked.includes(name.toLowerCase()), `${term.id} still reveals "${name}"`);
  }
}

const positions = new Set();
for (const seed of [1, 2, 3, 42, 20260929]) {
  const round = build(seed);
  assert.equal(round.length, TERMS_PER_ROUND);
  assert.equal(new Set(round.map((question) => question.termId)).size, round.length, "duplicate term in a round");
  for (const question of round) {
    assert.equal(question.options.length, 4);
    assert.equal(new Set(question.options).size, 4, `${question.termId} has duplicate options`);
    assert.ok(question.options.includes(question.answer));
    assert.ok(!question.prompt.includes(question.answer.split(" (")[0]), `${question.termId} prompt leaks the answer`);
    positions.add(question.options.indexOf(question.answer));
  }
}
assert.equal(positions.size, 4, "correct answer should appear in every option position across rounds");
assert.deepEqual(build(7), build(7), "same seed must reproduce the round");
assert.notDeepEqual(build(7).map((q) => q.termId), build(8).map((q) => q.termId));

const round = build(5);
assert.deepEqual(gradeTermsRound(round, round.map((question) => question.answer)), { correct: TERMS_PER_ROUND, total: TERMS_PER_ROUND });
assert.equal(gradeTermsRound(round, round.map(() => null)).correct, 0);

console.log(`Terms quiz audit passed: ${tennisTerms.length} terms masked, 5 seeds, answer positions ${positions.size}, reproducible, graded.`);
