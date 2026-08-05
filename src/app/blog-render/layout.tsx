import AdSenseReaderScript from "@/components/AdSenseReaderScript";

export default function BlogRenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdSenseReaderScript />
      {children}
    </>
  );
}
