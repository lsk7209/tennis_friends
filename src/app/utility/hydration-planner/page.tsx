import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";
import HydrationPlannerClient from "./HydrationPlannerClient";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 수분 섭취 플래너",
  description: "체중, 경기 시간, 기온, 강도 기준으로 경기 전중후 수분과 전해질 섭취량을 계산합니다.",
  path: "/utility/hydration-planner",
  type: "website",
  tags: ["tennis utility", "hydration", "recovery", "수분 플래너"],
});

export default function Page() {
  return <HydrationPlannerClient />;
}
