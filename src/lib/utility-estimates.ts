export const UTILITY_ESTIMATE_VERSION = "tf-inline-estimates-v1-20260915";

function requireFiniteRange(name: string, value: number, min: number, max: number) {
  if (!Number.isFinite(value) || value < min || value > max) {
    throw new RangeError(`${name} must be between ${min} and ${max}`);
  }
  return value;
}

export function calculateCalories(input: {
  weightKg: number;
  minutes: number;
  mets: number;
}) {
  const weightKg = requireFiniteRange("weightKg", input.weightKg, 20, 300);
  const minutes = requireFiniteRange("minutes", input.minutes, 1, 720);
  const mets = requireFiniteRange("mets", input.mets, 1, 20);
  return Math.round(weightKg * (minutes / 60) * mets);
}

export function calculateHydration(input: {
  weightKg: number;
  durationMinutes: number;
  temperatureC: number;
  intensityAdjustment: number;
  sweatAdjustment: number;
}) {
  const weight = requireFiniteRange("weightKg", input.weightKg, 20, 300);
  const duration = requireFiniteRange("durationMinutes", input.durationMinutes, 15, 480);
  const temp = requireFiniteRange("temperatureC", input.temperatureC, -10, 50);
  const intensity = requireFiniteRange("intensityAdjustment", input.intensityAdjustment, 0, 220);
  const sweat = requireFiniteRange("sweatAdjustment", input.sweatAdjustment, 0, 240);
  const hours = duration / 60;
  const before = Math.round(weight * 5);
  const hourlyBase = 420 + Math.max(0, temp - 18) * 18 + intensity + sweat;
  const hourly = Math.min(1100, Math.max(400, Math.round(hourlyBase)));
  const during = Math.round(hourly * hours);
  const estimatedSweatLossL = Math.max(0.4, Number(((hourly / 1000) * hours * 1.15).toFixed(1)));
  const after = Math.round(estimatedSweatLossL * 1250);
  const sodiumPerHour = Math.round(300 + Math.max(0, temp - 20) * 12 + sweat * 0.8);
  const risk = hourly >= 850 || temp >= 30 ? "높음" : hourly >= 650 || temp >= 25 ? "중간" : "보통";
  return { before, during, after, hourly, sodiumPerHour, estimatedSweatLossL, risk };
}

export function calculateServeVelocity(input: {
  distanceM: number;
  timeSeconds: number;
  contactHeightM: number;
  launchAngleDegrees: number;
}) {
  const distance = requireFiniteRange("distanceM", input.distanceM, 1, 30);
  const time = requireFiniteRange("timeSeconds", input.timeSeconds, 0.1, 3);
  const height = requireFiniteRange("contactHeightM", input.contactHeightM, 1, 4);
  const angle = requireFiniteRange("launchAngleDegrees", input.launchAngleDegrees, -20, 30);
  const speedMpsRaw = distance / time;
  const speedKmhRaw = speedMpsRaw * 3.6;
  const adjustedSpeedRaw = speedKmhRaw + Math.max(0, height - 2.3) * 4 + angle * 0.8;
  const adjustedSpeed = Math.round(adjustedSpeedRaw);
  const grade = adjustedSpeed >= 170 ? "상급" : adjustedSpeed >= 140 ? "중상급" : adjustedSpeed >= 110 ? "중급" : "입문";
  return { speedMps: Math.round(speedMpsRaw * 10) / 10, speedKmh: Math.round(speedKmhRaw), adjustedSpeed, grade };
}
