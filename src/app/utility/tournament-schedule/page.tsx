import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";
import TournamentScheduleClient from "./TournamentScheduleClient";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 대회 일정 보드",
  description:
    "지역, 수준, 코트 종류에 따라 참가 가능한 테니스 대회 일정을 정리해 보는 일정 보드입니다.",
  path: "/utility/tournament-schedule",
  type: "website",
  tags: ["테니스 대회", "대회 일정", "테니스 일정 보드"],
});

export default function TournamentSchedulePage() {
  return <TournamentScheduleClient />;
}
