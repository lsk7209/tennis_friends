import assert from "node:assert/strict";
import { formatRotationText, generateRotation, parsePlayerNames } from "../src/lib/doubles-rotation.ts";

const names = (count) => Array.from({ length: count }, (_, index) => `P${index + 1}`);

function assertValidSchedule(result, playerCount, courts) {
  assert.ok(!("error" in result), result.error);
  for (const round of result.rounds) {
    const seen = [...round.matches.flatMap((match) => [...match.teamA, ...match.teamB]), ...round.resting];
    assert.equal(seen.length, playerCount, `round ${round.round} must place every player exactly once`);
    assert.equal(new Set(seen).size, playerCount, `round ${round.round} has a duplicated player`);
    assert.equal(round.matches.length, courts);
  }
}

// 8 players, 2 courts, 7 rounds: a perfect partner round-robin exists.
const full = generateRotation({ names: names(8), courts: 2, rounds: 7, seed: 1 });
assertValidSchedule(full, 8, 2);
assert.ok(full.players.every((player) => player.games === 7 && player.rests === 0));
assert.ok(full.repeatedPartnerPairs <= 2, `8-player round-robin repeated ${full.repeatedPartnerPairs} partner pairs`);

// 10 players, 2 courts: sit-outs must be spread evenly (difference at most 1).
const uneven = generateRotation({ names: names(10), courts: 2, rounds: 5, seed: 7 });
assertValidSchedule(uneven, 10, 2);
const rests = uneven.players.map((player) => player.rests);
assert.ok(Math.max(...rests) - Math.min(...rests) <= 1, `uneven rests ${rests}`);
assert.equal(rests.reduce((sum, value) => sum + value, 0), 2 * 5);

// Requested courts beyond player capacity are capped.
const capped = generateRotation({ names: names(6), courts: 3, rounds: 2, seed: 3 });
assertValidSchedule(capped, 6, 1);
assert.equal(capped.courtsUsed, 1);

// Same seed is reproducible; different seed may differ.
assert.deepEqual(generateRotation({ names: names(9), courts: 2, rounds: 4, seed: 42 }), generateRotation({ names: names(9), courts: 2, rounds: 4, seed: 42 }));

// Validation.
assert.match(generateRotation({ names: names(3), courts: 1, rounds: 1, seed: 1 }).error, /최소 4명/);
assert.match(generateRotation({ names: names(25), courts: 1, rounds: 1, seed: 1 }).error, /최대 24명/);
assert.match(generateRotation({ names: ["A", "B", "C", "A"], courts: 1, rounds: 1, seed: 1 }).error, /같은 이름/);
assert.match(generateRotation({ names: names(8), courts: 0, rounds: 1, seed: 1 }).error, /코트 수/);
assert.match(generateRotation({ names: names(8), courts: 2, rounds: 1.5, seed: 1 }).error, /라운드 수/);

// Parsing: newline/comma separated, trimmed, empty dropped, long names clipped.
assert.deepEqual(parsePlayerNames(" 김민수, 이서연\n\n박지훈 ,"), ["김민수", "이서연", "박지훈"]);
assert.equal(parsePlayerNames("가".repeat(40))[0].length, 20);

assert.match(formatRotationText(uneven), /\[1라운드\]\n코트 1: .+ vs .+/);

console.log("Doubles rotation audit passed: round-robin, even rests, court cap, reproducibility, validation, parsing.");
