export type UtilityReleaseState = "available" | "planned";
export type UtilityDataOrigin = "local-rules" | "static-reference" | "simulation";
export type UtilityVerificationState = "locally-verified" | "not-released";

export type UtilityContract = {
  purpose: string;
  releaseState: UtilityReleaseState;
  dataOrigin: UtilityDataOrigin;
  verificationState: UtilityVerificationState;
};

const STATIC_REFERENCE_TOOLS = new Set([
  "price-comparison",
  "tennis-dictionary",
  "tennis-rules-quiz",
]);
const SIMULATION_TOOLS = new Set(["court-booking", "ranking-calculator", "utr-calculator"]);

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
  return {
    purpose: input.category,
    releaseState,
    dataOrigin,
    verificationState: releaseState === "available" ? "locally-verified" : "not-released",
  };
}

export const UTILITY_CONTRACT_LABELS = {
  available: "사용 가능",
  planned: "출시 예정",
  "local-rules": "기기 내 규칙 계산",
  "static-reference": "정적 참고자료",
  simulation: "예시 시뮬레이션",
  "locally-verified": "로컬 검증",
  "not-released": "미출시",
} as const;
