import type { ReactNode } from "react";
import Image from "next/image";
import BlogPostSchema from "@/components/seo/BlogPostSchema";
import YmylDisclaimer from "@/components/YmylDisclaimer";
import AuthorByline from "@/components/AuthorByline";
import CafeBanner from "@/components/blog/CafeBanner";

interface ArticleProps {
  title: string;
  excerpt?: string;
  date?: string;
  author?: string;
  image?: string;
  slug?: string;
  category?: string;
  readingTime?: string;
  showHeader?: boolean;
  /** YMYL 주제면 topic 지정. 글 상단에 전문가 상담 권장 disclaimer 자동 노출. */
  ymylTopic?: "medical" | "nutrition" | "fitness";
  children: ReactNode;
}

export default function Article({
  title,
  excerpt,
  date,
  author = "TennisFriends",
  image,
  slug,
  category,
  readingTime,
  showHeader = true,
  ymylTopic,
  children,
}: ArticleProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-[1380px] mx-auto px-4 sm:px-6 py-8">
      {slug && date && (
        <BlogPostSchema
          title={title}
          description={excerpt || ""}
          slug={slug}
          date={date}
          author={author}
          image={image}
          category={category}
          readingTime={readingTime}
        />
      )}
      {showHeader ? (
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 !leading-tight">
            {title}
          </h1>
          {excerpt ? (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {excerpt}
            </p>
          ) : null}
          {date && (
            <time className="block text-sm text-gray-500" dateTime={date}>
              {date}
            </time>
          )}
          {image && (
            <div className="relative w-full h-[400px] md:h-[500px] mt-8 mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={`${title} representative image`}
                fill
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 1380px"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}
        </header>
      ) : null}
      {date && <AuthorByline author={author} publishedAt={date} />}
      {ymylTopic && <YmylDisclaimer topic={ymylTopic} />}
      <div className="max-w-none">{children}</div>
      <CafeBanner />
    </article>
  );
}
