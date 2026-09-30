export type UtilityReleaseState = "available" | "planned";
export type UtilityDataOrigin = "local-rules" | "static-reference" | "simulation";
/**
 * Verification is separate from release: "완료" (released) only means the page
 * ships. "behavior-tested" requires an entry in VERIFIED_UTILITY_TESTS that
 * points at a repository audit exercising the tool's calculation logic.
 */
export type UtilityVerificationState = "behavior-tested" | "unverified" | "not-released";

export type UtilityContract = {
  purpose: string;
  releaseState: UtilityReleaseState;
  dataOrigin: UtilityDataOrigin;
  verificationState: UtilityVerificationState;
  verificationEvidence: string | null;
};

const STATIC_REFERENCE_TOOLS = new Set([
  "price-comparison",
  "tennis-dictionary",
  "tennis-rules-quiz",
]);
const SIMULATION_TOOLS = new Set(["court-booking", "ranking-calculator", "utr-calculator"]);

// Tool id → npm audit that runs behavioral tests against its logic module.
// Add an entry only when such a test exists in scripts/.
export const VERIFIED_UTILITY_TESTS: Readonly<Record<string, string>> = {
  "ntrp-test": "audit:ntrp-storage, audit:ntrp-result-contract",
  "injury-risk": "audit:utility-boundaries",
  "string-tension": "audit:utility-boundaries",
  "match-analyzer": "audit:utility-boundaries",
  "training-planner": "audit:utility-boundaries",
  "equipment-recommendation": "audit:utility-boundaries",
  "calorie-calculator": "audit:utility-boundaries",
  "hydration-planner": "audit:utility-boundaries",
  "serve-velocity-calculator": "audit:utility-boundaries",
  "tennis-scoring-quiz": "audit:scoring-quiz",
  "tennis-terms-quiz": "audit:terms-quiz",
  "doubles-rotation-generator": "audit:doubles-rotation",
};

export function getUtilityContract(input: {
  id: string;
  category: string;
  status: "완료" | "개발 예정";
}): UtilityContract {
  const releaseState = input.status === "완료" ? "available" : "planned";
  const dataOrigin = STATIC_REFERENCE_TOOLS.has(input.id)
    ? "static-reference"
    : SIMULATION_TOOLS.has(input.id)
      ? "simulation"
      : "local-rules";
  const evidence = releaseState === "available" ? VERIFIED_UTILITY_TESTS[input.id] ?? null : null;
  const verificationState: UtilityVerificationState = releaseState === "planned"
    ? "not-released"
    : evidence ? "behavior-tested" : "unverified";
  return { purpose: input.category, releaseState, dataOrigin, verificationState, verificationEvidence: evidence };
}

export const UTILITY_CONTRACT_LABELS = {
  available: "사용 가능",
  planned: "출시 예정",
  "local-rules": "기기 내 규칙 계산",
  "static-reference": "정적 참고자료",
  simulation: "예시 시뮬레이션",
  "behavior-tested": "계산 테스트 있음",
  unverified: "검증 기록 없음",
  "not-released": "미출시",
} as const;
