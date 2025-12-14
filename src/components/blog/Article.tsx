import type { ReactNode } from "react";
import BlogPostSchema from "@/components/seo/BlogPostSchema";

interface ArticleProps {
  title: string;
  excerpt?: string;
  date?: string;
  author?: string;
  image?: string;
  slug?: string;
  category?: string;
  readingTime?: string;
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
  children 
}: ArticleProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-[1380px] mx-auto px-4 sm:px-6 py-8">
      {slug && date && (
        <BlogPostSchema
          title={title}
          description={excerpt || ''}
          slug={slug}
          date={date}
          author={author}
          image={image}
          category={category}
          readingTime={readingTime}
        />
      )}
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 !leading-tight">{title}</h1>
        {excerpt ? <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{excerpt}</p> : null}
        {date && <time className="block text-sm text-gray-500" dateTime={date}>{date}</time>}
        {image && (
          <div className="relative w-full h-[400px] md:h-[500px] mt-8 mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={image}
              alt={`${title} representative image`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}
      </header>
      <div className="max-w-none">
        {children}
      </div>
    </article>
  );
}

