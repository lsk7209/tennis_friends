import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "장비 관리 스케줄러",
  description:
    "라켓, 스트링, 오버그립, 테니스화의 사용 빈도에 따른 맞춤 관리 스케줄을 자동으로 생성합니다. 장비 컨디션을 최적으로 유지하세요.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/equipment-maintenance-scheduler" },
  path: "/utility/equipment-maintenance-scheduler",
  type: "website",
  tags: ["테니스 장비 관리", "스트링 교체 주기", "오버그립 교체", "라켓 점검"],
});

export default function EquipmentMaintenanceSchedulerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
