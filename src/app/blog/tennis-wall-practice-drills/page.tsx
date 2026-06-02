import type { Metadata } from "next";
import BlogPostPage, {
  generateMetadata as generateBlogPostMetadata,
} from "@/app/blog/[slug]/page";

const slug = "tennis-wall-practice-drills";

const params = Promise.resolve({ slug });

export function generateMetadata(): Promise<Metadata> {
  return generateBlogPostMetadata({ params });
}

export default function Page() {
  return <BlogPostPage params={params} />;
}
