import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { allBlogPosts } from '@/data/blog-posts';
import { ChevronRight } from 'lucide-react';

interface RelatedPostsProps {
    currentSlug: string;
    category: string;
    tags?: string[];
    maxCount?: number;
}

export default function RelatedPosts({ currentSlug, category, tags = [], maxCount = 3 }: RelatedPostsProps) {
    // 관련 글 찾기 로직
    const related = allBlogPosts
        .filter(post => post.slug !== currentSlug) // 현재 글 제외
        .map(post => {
            let score = 0;
            if (post.category === category) score += 5; // 같은 카테고리 가점

            // 태그 매칭 가점
            if (tags.length > 0 && post.tags) {
                const commonTags = tags.filter(tag => post.tags.includes(tag));
                score += commonTags.length * 2;
            }

            return { ...post, score };
        })
        .filter(post => post.score > 0) // 점수 있는 것만
        .sort((a, b) => b.score - a.score) // 점수 높은 순
        .slice(0, maxCount);

    if (related.length === 0) return null;

    return (
        <div className="mt-16 pt-12 border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                <span className="w-1.5 h-8 bg-blue-500 rounded-full" />
                함께 읽어보면 좋은 글
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                        <Card className="h-full border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                            <CardContent className="p-5 flex flex-col h-full">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        {post.category}
                                    </span>
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                                    {post.title}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                                    자세히 보기
                                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
