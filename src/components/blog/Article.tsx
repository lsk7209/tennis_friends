import type { ReactNode } from "react";

interface ArticleProps {
  title: string;
  excerpt?: string;
  children: ReactNode;
}

export default function Article({ title, excerpt, children }: ArticleProps) {
  return (
    <article className="prose mx-auto px-4 sm:px-6 py-8">
      <header>
        <h1>{title}</h1>
        {excerpt ? <p style={{ color: "var(--muted)" }}>{excerpt}</p> : null}
      </header>
      {children}
    </article>
  );
}

