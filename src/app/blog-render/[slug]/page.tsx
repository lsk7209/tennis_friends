import type { Metadata } from "next";
import { generateMetadata as generateBlogMetadata } from "@/app/blog/[slug]/page";

export { default, generateStaticParams } from "@/app/blog/[slug]/page";

export async function generateMetadata(
  props: Parameters<typeof generateBlogMetadata>[0],
): Promise<Metadata> {
  const metadata = await generateBlogMetadata(props);

  return {
    ...metadata,
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
  };
}

export const revalidate = 3600;
