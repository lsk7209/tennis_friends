import NoIndexLayout from "@/components/seo/NoIndexLayout";
export { metadata } from "@/components/seo/NoIndexLayout";

export default function QuizStepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NoIndexLayout>{children}</NoIndexLayout>;
}
