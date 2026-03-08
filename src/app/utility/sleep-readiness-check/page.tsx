import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";
import SleepReadinessCheckClient from "./SleepReadinessCheckClient";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 수면 준비도 체크",
  description: "수면 시간, 피로도, 스트레스, 카페인 상태를 기준으로 오늘 훈련 강도를 점검합니다.",
  path: "/utility/sleep-readiness-check",
  type: "website",
  tags: ["tennis utility", "sleep", "recovery", "수면 체크"],
});

export default function Page() {
  return <SleepReadinessCheckClient />;
}
