import React from "react";
import Link from "next/link";
import AuthorByline from "./AuthorByline";

interface BlogPostProps {
  title: string;
  date: string;
  updatedAt?: string;
  author?: string;
  authorHref?: string;
  authorBio?: string;
  readTime: string;
  category: string;
  tags: string[];
  summary: string;
  highlight: string;
  content: React.ReactNode;
  toc?: Array<{ id: string; label: string }>;
  relatedPosts?: Array<{
    title: string;
    category: string;
    description: string;
    href: string;
  }>;
  ctaText?: string;
  ctaHref?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  updatedAt,
  author,
  authorHref,
  authorBio,
  readTime,
  category,
  tags,
  summary,
  highlight,
  content,
  toc,
  relatedPosts = [],
  ctaText,
  ctaHref,
}) => {
  return (
    <div className="container mx-auto max-w-[720px] px-4 py-12 md:py-20">
      <article className="prose flex max-w-none flex-col gap-8 md:gap-12">
        {/* Header */}
        <header className="flex flex-col gap-6">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-muted">
            <span>{date}</span>
            <span className="text-text-muted/50">·</span>
            <span>읽기 시간: {readTime}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
              {category}
            </span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-content-dark px-3 py-1 text-xs font-medium text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Author Byline (E-E-A-T signal) */}
        <AuthorByline
          author={author}
          authorHref={authorHref}
          bio={authorBio}
          publishedAt={date}
          updatedAt={updatedAt}
        />

        {/* Summary */}
        <section className="rounded-xl border border-white/10 bg-content-dark p-6">
          <h2 className="mt-0 mb-3 text-lg font-bold !text-primary">요약</h2>
          <p className="text-base !leading-relaxed">{summary}</p>
        </section>

        {/* Highlight */}
        <div className="rounded-xl border-2 border-primary/80 bg-primary/10 p-6 shadow-lg shadow-primary/10">
          <p className="!m-0 text-base !leading-relaxed text-text-light sm:text-lg">
            {highlight}
          </p>
        </div>

        {/* Table of Contents (dynamic — only rendered if provided) */}
        {toc && toc.length > 0 && (
          <details
            className="group rounded-xl border border-white/10 bg-content-dark"
            open
          >
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-text-light">
              <span>목차</span>
              <span className="material-symbols-outlined details-arrow transform transition-transform duration-200">
                expand_more
              </span>
            </summary>
            <div className="border-t border-white/10 p-4">
              <ul className="list-none space-y-2 !p-0">
                {toc.map((item, index) => (
                  <li key={item.id}>
                    <a
                      className="!text-white hover:!text-primary transition-colors no-underline block"
                      href={`#${item.id}`}
                    >
                      {index + 1}. {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        )}

        {/* Content */}
        <section>{content}</section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 rounded-xl bg-content-dark p-6 md:p-8">
            <h2 className="mb-6 mt-0 text-2xl font-bold text-text-light">
              관련 글 더보기
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((post, index) => (
                <Link
                  key={index}
                  href={post.href}
                  className="group flex flex-col gap-2 rounded-lg border border-white/10 bg-background-dark p-4 transition-all hover:border-primary/50 hover:bg-primary/5"
                >
                  <span className="text-sm font-semibold text-primary">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-text-light group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted">{post.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        {ctaText && ctaHref && (
          <div className="mt-16 flex flex-col items-center gap-4 rounded-xl bg-primary/10 p-8 text-center">
            <h3 className="text-xl font-bold text-text-light">
              더 많은 정보가 필요하신가요?
            </h3>
            <p className="max-w-md text-text-muted">
              TennisFriends의 다양한 도구와 정보를 확인해보세요.
            </p>
            <Link
              href={ctaHref}
              className="flex items-center justify-center rounded-lg bg-primary py-3 px-8 text-base font-bold text-background-dark shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              {ctaText}
              <span className="material-symbols-outlined ml-2">
                arrow_forward
              </span>
            </Link>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
