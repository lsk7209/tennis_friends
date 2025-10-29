import React from 'react';
import Link from 'next/link';

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  summary: string;
  highlight: string;
  content: React.ReactNode;
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
  readTime,
  category,
  tags,
  summary,
  highlight,
  content,
  relatedPosts = [],
  ctaText,
  ctaHref
}) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_330)">
                  <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_330"><rect fill="white" height="48" width="48"></rect></clipPath>
                </defs>
              </svg>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-light">TennisFriends</h2>
            </Link>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="/utility" className="font-medium text-text-muted transition-colors hover:text-text-light">유틸리티</Link>
            <div className="relative">
              <Link href="/blog" className="font-medium text-primary transition-colors hover:text-primary/80">블로그</Link>
              <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary"></div>
            </div>
            <Link href="/rankings" className="font-medium text-text-muted transition-colors hover:text-text-light">랭킹</Link>
          </nav>
          <div className="flex items-center justify-end">
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-text-muted transition-colors hover:bg-white/10 hover:text-text-light">
              <span className="material-symbols-outlined">dark_mode</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
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
                  <span key={index} className="rounded-full bg-content-dark px-3 py-1 text-xs font-medium text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

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

            {/* Table of Contents */}
            <details className="group rounded-xl border border-white/10 bg-content-dark md:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-text-light">
                <span>목차 보기</span>
                <span className="material-symbols-outlined details-arrow transform transition-transform duration-200">expand_more</span>
              </summary>
              <div className="border-t border-white/10 p-4">
                <ul className="list-none space-y-2 !p-0">
                  <li><a className="font-medium hover:text-primary" href="#section1">1. 기본 개념</a></li>
                  <li><a className="font-medium hover:text-primary" href="#section2">2. 상세 설명</a></li>
                  <li><a className="font-medium hover:text-primary" href="#section3">3. 실전 적용</a></li>
                  <li><a className="font-medium hover:text-primary" href="#section4">4. 추가 정보</a></li>
                  <li><a className="font-medium hover:text-primary" href="#section5">5. FAQ</a></li>
                </ul>
              </div>
            </details>

            <details className="group hidden rounded-xl border border-white/10 bg-content-dark md:block" open>
              <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-text-light">
                <span>목차</span>
                <span className="material-symbols-outlined details-arrow transform transition-transform duration-200">expand_more</span>
              </summary>
              <div className="border-t border-white/10 p-4">
                <ul className="list-none space-y-2 !p-0">
                  <li><a className="font-medium hover:text-primary" href="#section1">1. 기본 개념</a></li>
                  <li><a className="font-medium hover:text-primary" href="#section2">2. 상세 설명</a></li>
                  <li><a className="font-medium hover:text-primary" href="#section3">3. 실전 적용</a></li>
                  <li><a className="font-medium hover:text-primary" href="#section4">4. 추가 정보</a></li>
                  <li><a className="font-medium hover:text-primary" href="#section5">5. FAQ</a></li>
                </ul>
              </div>
            </details>

            {/* Content */}
            <section>
              {content}
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16 rounded-xl bg-content-dark p-6 md:p-8">
                <h2 className="mb-6 mt-0 text-2xl font-bold text-text-light">관련 글 더보기</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {relatedPosts.map((post, index) => (
                    <Link key={index} href={post.href} className="group flex flex-col gap-2 rounded-lg border border-white/10 bg-background-dark p-4 transition-all hover:border-primary/50 hover:bg-primary/5">
                      <span className="text-sm font-semibold text-primary">{post.category}</span>
                      <h3 className="font-bold text-text-light group-hover:text-primary">{post.title}</h3>
                      <p className="text-sm text-text-muted">{post.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            {ctaText && ctaHref && (
              <div className="mt-16 flex flex-col items-center gap-4 rounded-xl bg-primary/10 p-8 text-center">
                <h3 className="text-xl font-bold text-text-light">더 많은 정보가 필요하신가요?</h3>
                <p className="max-w-md text-text-muted">TennisFriends의 다양한 도구와 정보를 확인해보세요.</p>
                <Link href={ctaHref} className="flex items-center justify-center rounded-lg bg-primary py-3 px-8 text-base font-bold text-background-dark shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                  {ctaText}
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
              </div>
            )}
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="h-1 w-full bg-primary/30">
            <div className="h-1 w-1/3 bg-primary"></div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
            <p className="text-sm text-text-muted">© 2024 TennisFriends. All Rights Reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/about" className="text-text-muted transition-colors hover:text-text-light">About Us</Link>
              <Link href="/contact" className="text-text-muted transition-colors hover:text-text-light">Contact</Link>
              <Link href="/privacy" className="text-text-muted transition-colors hover:text-text-light">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
