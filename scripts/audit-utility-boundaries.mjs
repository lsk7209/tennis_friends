#!/usr/bin/env node

import assert from "node:assert/strict";
import { calculateInjuryRisk } from "../src/lib/injuryRiskCalc.ts";
import { calculateTension, isTensionInput, TENSION_MODEL_VERSION } from "../src/lib/tensionCalc.ts";
import { analyzeMatch } from "../src/lib/matchAnalyzer.ts";
import { generateTrainingPlan } from "../src/lib/trainingPlanner.ts";
import { calculateEquipmentRecommendations } from "../src/lib/equipmentRecommendation.ts";
import { calculateCalories, calculateHydration, calculateServeVelocity, UTILITY_ESTIMATE_VERSION } from "../src/lib/utility-estimates.ts";

const baseRiskInput = {
  age: 40,
  gender: "male",
  playingFrequency: "weekly1",
  playingDuration: "1-2h",
  experience: "intermediate",
  previousInjuries: [],
  warmupRoutine: "comprehensive",
  coolDownRoutine: "comprehensive",
  equipmentAge: "new",
  courtType: "clay",
  weatherCondition: "indoor",
};

assert.throws(() => calculateInjuryRisk({ ...baseRiskInput, age: Number.NaN }), RangeError);
assert.throws(() => calculateInjuryRisk({ ...baseRiskInput, age: Infinity }), RangeError);
assert.throws(() => calculateInjuryRisk({ ...baseRiskInput, age: -1 }), RangeError);
assert.throws(() => calculateInjuryRisk({ ...baseRiskInput, age: 101 }), RangeError);
const age40 = calculateInjuryRisk(baseRiskInput);
const age50 = calculateInjuryRisk({ ...baseRiskInput, age: 50 });
assert.ok(age50.riskScore > age40.riskScore, "the 50+ boundary must not be shadowed by the 40+ branch");
assert.ok([age40.riskScore, age50.riskScore].every(Number.isFinite));

const tensionInput = {
  headSize: "Mid",
  stringType: "Polyester",
  playStyle: "올라운더",
  environment: "실내",
  feelPreference: "적당히",
  ntrpLevel: "3.5",
};
const first = calculateTension(tensionInput);
const second = calculateTension(tensionInput);
assert.deepEqual(first, second, "the same inputs must reproduce the same result");
assert.ok(Number.isFinite(first.tensionLb) && Number.isFinite(first.tensionKg));
assert.ok(first.tensionLb >= 45 && first.tensionLb <= 65);
assert.equal(Number(first.tensionKg.toFixed(1)), first.tensionKg);
assert.match(TENSION_MODEL_VERSION, /^tf-tension-rules-v\d+-\d{8}$/);
assert.equal(isTensionInput({ ...tensionInput, playStyle: "invalid" }), false);
assert.throws(
  () => calculateTension({ ...tensionInput, playStyle: "invalid" }),
  RangeError,
);
const power = calculateTension({ ...tensionInput, playStyle: "파워형" });
const control = calculateTension({ ...tensionInput, playStyle: "컨트롤형" });
assert.ok(power.tensionLb < control.tensionLb, "power/control adjustment direction is inverted");
assert.equal(power.tensionKg, Math.round(power.tensionLb * 0.453592 * 10) / 10);

const matchInput = {
  matchType: "singles",
  duration: 60,
  sets: 2,
  games: [6, 4],
  points: { won: 50, lost: 40 },
  serves: { firstServeIn: 30, firstServeTotal: 50, secondServeIn: 15, secondServeTotal: 20, aces: 4, doubleFaults: 2 },
  returns: { firstServeReturnWon: 10, firstServeReturnTotal: 30, secondServeReturnWon: 8, secondServeReturnTotal: 15 },
  winners: { forehand: 10, backhand: 6, volley: 3, overhead: 1 },
  errors: { forehand: 8, backhand: 5, volley: 2, overhead: 1 },
  netPlay: { approaches: 12, volleysWon: 6, volleysLost: 4 },
  mental: { breakPointsWon: 3, breakPointsFaced: 7, tiebreakWon: 0, tiebreakLost: 0 },
};
const match = analyzeMatch(matchInput);
assert.ok(Number.isFinite(match.overallScore) && match.overallScore >= 0 && match.overallScore <= 100);
assert.ok(Object.values(match.statistics).every(Number.isFinite));
assert.throws(() => analyzeMatch({ ...matchInput, duration: Number.NaN }), RangeError);
assert.throws(() => analyzeMatch({ ...matchInput, serves: { ...matchInput.serves, firstServeIn: 51 } }), RangeError);

const trainingInput = {
  currentLevel: "intermediate",
  playStyle: "all-round",
  goals: ["consistency"],
  availableTime: { weekly: 4, sessionLength: 1 },
  focusAreas: ["serve"],
  physicalCondition: "good",
  experience: 3,
};
const training = generateTrainingPlan(trainingInput);
assert.ok(Number.isInteger(training.duration) && training.duration > 0);
assert.ok(training.weeklySchedule.every((week) => week.sessions.length === 4));
assert.throws(() => generateTrainingPlan({ ...trainingInput, availableTime: { weekly: 4, sessionLength: 0 } }), RangeError);
assert.throws(() => generateTrainingPlan({ ...trainingInput, experience: Infinity }), RangeError);

const equipmentInput = {
  skillLevel: "intermediate",
  playStyle: "all-round",
  budget: "medium",
  racketHeadSize: "mid-plus",
  weight: "medium",
  gripSize: "4-1/4",
  stringType: "hybrid",
  courtType: "hard",
  age: 35,
  previousInjuries: [],
};
const equipmentFirst = calculateEquipmentRecommendations(equipmentInput);
const equipmentSecond = calculateEquipmentRecommendations(equipmentInput);
assert.deepEqual(equipmentFirst, equipmentSecond, "equipment calculation mutated its catalog");
assert.ok(Object.values(equipmentFirst.totalBudget).every(Number.isFinite));
assert.throws(() => calculateEquipmentRecommendations({ ...equipmentInput, age: Infinity }), RangeError);

assert.equal(calculateCalories({ weightKg: 70, minutes: 60, mets: 7.3 }), 511);
assert.throws(() => calculateCalories({ weightKg: -70, minutes: 60, mets: 7.3 }), RangeError);
assert.throws(() => calculateCalories({ weightKg: 70, minutes: Infinity, mets: 7.3 }), RangeError);

const hydration = calculateHydration({ weightKg: 70, durationMinutes: 90, temperatureC: 24, intensityAdjustment: 120, sweatAdjustment: 120 });
assert.ok(Object.values(hydration).filter((value) => typeof value === "number").every(Number.isFinite));
assert.throws(() => calculateHydration({ weightKg: 0, durationMinutes: 90, temperatureC: 24, intensityAdjustment: 120, sweatAdjustment: 120 }), RangeError);

const serve = calculateServeVelocity({ distanceM: 18.5, timeSeconds: 0.62, contactHeightM: 2.6, launchAngleDegrees: 6 });
assert.ok(Object.values(serve).filter((value) => typeof value === "number").every(Number.isFinite));
assert.throws(() => calculateServeVelocity({ distanceM: -1, timeSeconds: 0.62, contactHeightM: 2.6, launchAngleDegrees: 6 }), RangeError);
assert.throws(() => calculateServeVelocity({ distanceM: 18.5, timeSeconds: 0, contactHeightM: 2.6, launchAngleDegrees: 6 }), RangeError);
assert.match(UTILITY_ESTIMATE_VERSION, /^tf-inline-estimates-v\d+-\d{8}$/);

console.log("Utility boundary audit passed.");
