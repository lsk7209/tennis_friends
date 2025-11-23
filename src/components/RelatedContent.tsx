/**
 * Component: RelatedContent
 * @param {Array} items - 관련 컨텐츠 목록 [Required]
 * @param {string} title - 섹션 제목 [Optional, default="관련 글 더보기"]
 * @param {string} type - 컨텐츠 타입 ('blog' | 'utility' | 'player') [Optional, default="blog"]
 * @param {number} maxItems - 최대 표시 개수 [Optional, default=6]
 * @example <RelatedContent items={relatedPosts} title="관련 글 더보기" type="blog" />
 */

import React, { useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

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

// RelatedContentItem은 RelatedItem의 별칭
export type RelatedContentItem = RelatedItem;

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
  type?: 'blog' | 'utility' | 'player';
  maxItems?: number;
}

export default function RelatedContent({ 
  items, 
  title = '관련 글 더보기', 
  type = 'blog',
  maxItems = 6 
}: RelatedContentProps) {
  const displayItems = useMemo(() => {
    return items.slice(0, maxItems);
  }, [items, maxItems]);

  if (displayItems.length === 0) {
    return null;
  }

  return (
    <section className="mt-16" aria-label={title}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-text-light">{title}</h2>
        {type === 'blog' && (
          <Link 
            href="/blog" 
            className="text-sm text-text-muted hover:text-primary transition-colors flex items-center gap-1"
            aria-label="블로그 전체 보기"
          >
            전체 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item) => {
          const description = item.description || item.excerpt || '';
          
          return (
            <Link 
              key={item.id} 
              href={item.href}
              className="group"
              aria-label={`${item.title} 읽기`}
            >
              <Card className="h-full bg-content-dark border-white/10 hover:border-primary/50 transition-all cursor-pointer group-hover:shadow-lg">
                <CardContent className="p-4 flex flex-col h-full">
                  {item.category && (
                    <Badge className="bg-primary/20 text-primary mb-2 w-fit">
                      {item.category}
                    </Badge>
                  )}
                  
                  <h3 className="font-bold text-text-light group-hover:text-primary transition-colors mb-2 line-clamp-2 flex-1">
                    {item.title}
                  </h3>
                  
                  {description && (
                    <p className="text-text-muted text-sm line-clamp-2 mb-3">
                      {description}
                    </p>
                  )}
                  
                  {(item.date || item.readTime) && (
                    <div className="flex items-center gap-3 text-xs text-text-muted mt-auto">
                      {item.date && <span>{item.date}</span>}
                      {item.readTime && (
                        <>
                          {item.date && <span>·</span>}
                          <span>{item.readTime}</span>
                        </>
                      )}
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

