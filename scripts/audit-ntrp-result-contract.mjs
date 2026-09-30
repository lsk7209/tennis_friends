import assert from 'node:assert/strict';
import { buildNtrpShareText, buildNtrpShareUrl, NTRP_RESULT_ORIGIN_LABELS, parseNtrpResultParams, resolveNtrpResultOrigin } from '../src/lib/ntrp-result-contract.ts';

const parse = (query) => parseNtrpResultParams(new URLSearchParams(query));
assert.equal(parse('').kind, 'empty');
for (const score of [15, 24, 25, 34, 35, 44, 45, 54, 55, 64, 65, 70, 71, 75]) {
  assert.equal(parse(`score=${score}`).kind, 'displayable');
}
for (const score of ['', '1', '1.5', '14', '76', '999', '-1', 'NaN', 'Infinity']) {
  assert.equal(parse(`score=${score}`).kind, 'invalid', score);
}
assert.equal(parse('score=45&q13=%EC%98%AC%EB%9D%BC%EC%9A%B4%EB%8D%94').source, 'legacy_link');
const url = buildNtrpShareUrl('https://tennisfrens.com', 45, '올라운더');
assert.equal(parse(new URL(url).search).source, 'shared');
assert.equal(new URL(url).searchParams.has('completion'), false);
assert.equal(new URL(buildNtrpShareUrl('https://lsk7209.github.io/tennis_friends/utility/ntrp-test/result?score=45', 45, '올라운더')).pathname, '/tennis_friends/utility/ntrp-test/result');
assert.equal(new URL(buildNtrpShareUrl('https://example.github.io/custom-prefix/utility/ntrp-test/result?score=45', 45, '올라운더')).pathname, '/custom-prefix/utility/ntrp-test/result');
assert.equal(parse(new URL(url.replace('legacy-v2', 'future-v3')).search).kind, 'invalid');
assert.equal(parse('score=45&completion=forged').source, 'local_candidate');

// D05: only a pending proof counts as a new completion; a completion parameter alone does not.
const origin = (source, hasPendingProof, isStoredLocally) => resolveNtrpResultOrigin({ source, hasPendingProof, isStoredLocally });
assert.deepEqual(origin('local_candidate', true, false), { origin: 'completed_in_this_browser', countsAsNewCompletion: true });
assert.deepEqual(origin('local_candidate', false, true), { origin: 'saved_in_this_browser', countsAsNewCompletion: false });
assert.deepEqual(origin('local_candidate', false, false), { origin: 'unverified_completion', countsAsNewCompletion: false });
assert.deepEqual(origin('shared', true, true), { origin: 'shared', countsAsNewCompletion: false }, 'shared links never count');
assert.deepEqual(origin('legacy_link', true, false), { origin: 'legacy_link', countsAsNewCompletion: false });
for (const label of Object.values(NTRP_RESULT_ORIGIN_LABELS)) assert.ok(label.length > 0);

const shareText = buildNtrpShareText('3.5', '올라운더');
assert.match(shareText, /비공식 자가점검/);
assert.match(shareText, /공식 NTRP 등급은 아니/);
assert.doesNotMatch(shareText, /completion|q13/);
// Share URL exposes only score/style/version fields.
assert.deepEqual([...new URL(url).searchParams.keys()].sort(), ['mode', 'questionnaire', 'score', 'scoring', 'style', 'v']);
// Existing legacy links keep rendering (not bulk-blocked).
for (const query of ['score=15', 'score=75&q13=%EC%98%AC%EB%9D%BC%EC%9A%B4%EB%8D%94']) assert.equal(parse(query).kind, 'displayable');
console.log('NTRP result contract audit passed.');
