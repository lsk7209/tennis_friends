import NoIndexLayout from "@/components/seo/NoIndexLayout";
export { metadata } from "@/components/seo/NoIndexLayout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <NoIndexLayout>{children}</NoIndexLayout>;
}
