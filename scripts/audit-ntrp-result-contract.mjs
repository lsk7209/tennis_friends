import assert from 'node:assert/strict';
import { buildNtrpShareUrl, parseNtrpResultParams } from '../src/lib/ntrp-result-contract.ts';

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
console.log('NTRP result contract audit passed.');
