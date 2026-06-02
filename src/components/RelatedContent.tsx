import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export interface RelatedItem {
  id: string;
  title: string;
  description?: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  href: string;
  date?: string;
  readTime?: string;
  badge?: string;
}

export type RelatedContentItem = RelatedItem;

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
  type?: "blog" | "utility" | "player";
  maxItems?: number;
}

export default function RelatedContent({
  items,
  title = "관련 글 더보기",
  type = "blog",
  maxItems = 6,
}: RelatedContentProps) {
  const displayItems = useMemo(() => items.slice(0, maxItems), [items, maxItems]);

  if (displayItems.length === 0) return null;

  return (
    <section className="mt-16" aria-label={title}>
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        {type === "blog" && (
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            aria-label="블로그 전체 보기"
          >
            전체 보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayItems.map((item) => {
          const description = item.description || item.excerpt || "";

          return (
            <Link
              key={item.id}
              href={item.href}
              className="group"
              aria-label={`${item.title} 읽기`}
            >
              <Card className="h-full cursor-pointer border-white/10 bg-card transition-all group-hover:border-primary/50 group-hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-4">
                  {item.category && (
                    <Badge className="mb-2 w-fit bg-primary/20 text-primary">
                      {item.category}
                    </Badge>
                  )}

                  <h3 className="mb-2 line-clamp-2 flex-1 font-bold text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>

                  {description && (
                    <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                      {description}
                    </p>
                  )}

                  {(item.date || item.readTime) && (
                    <div className="mt-auto flex items-center gap-3 text-xs text-muted-foreground">
                      {item.date && <span>{item.date}</span>}
                      {item.date && item.readTime && <span>/</span>}
                      {item.readTime && <span>{item.readTime}</span>}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
