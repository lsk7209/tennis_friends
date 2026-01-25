'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ChevronLeft, ChevronRight, Search, X, Filter } from 'lucide-react';
import { allBlogPosts } from '@/data/blog-posts';
import { BADGE_LABELS, BADGE_COLORS, CATEGORY_COLORS, POSTS_PER_PAGE } from '@/lib/constants';
import { CATEGORY_GROUPS, getCategoryGroup } from '@/lib/blog-utils';
import { Input } from '@/components/ui/input';
import type { BlogPostData } from '@/types/blog';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 모든 블로그 글 데이터 (다양한 배지와 색상 적용) - useMemo로 최적화
  const blogPosts = useMemo(() => {
    return allBlogPosts.map((post, index) => {
      // 날짜를 다양하게 설정 (최근 3개월 내)
      const baseDate = new Date('2025-09-01');
      const daysToAdd = Math.floor(index * 2.3); // 글마다 다른 날짜
      const postDate = new Date(baseDate);
      postDate.setDate(baseDate.getDate() + daysToAdd);

      return {
        ...post,
        badge: BADGE_LABELS[index % BADGE_LABELS.length],
        badgeColor: BADGE_COLORS[index % BADGE_COLORS.length],
        categoryColor: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
        date: post.date || postDate.toISOString().split('T')[0],
        readTime: post.readTime || `${8 + (index % 5) * 2}분` // 8분, 10분, 12분, 14분, 16분 반복
      } as BlogPostData & { badge: string; badgeColor: string; categoryColor: string; readTime: string };
    });
  }, []);

  // 모든 고유 카테고리 추출
  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map(post => post.category));
    return Array.from(cats).filter(Boolean);
  }, [blogPosts]);

  // 필터링 및 검색 로직
  const filteredBlogPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.tags && (post.tags as string[]).some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

      let matchesCategory = true;
      if (selectedCategory) {
        // Find which group the selected ID belongs to
        const group = Object.values(CATEGORY_GROUPS).find(g => g.id === selectedCategory);
        if (group) {
          matchesCategory = group.categories.includes(post.category);
        } else {
          matchesCategory = post.category === selectedCategory; // Fallback for exact match if needed
        }
      }

      return matchesSearch && matchesCategory;
    });
  }, [blogPosts, searchQuery, selectedCategory]);

  // 작성일자 기준으로 최신순 정렬
  const sortedBlogPosts = useMemo(() => {
    return [...filteredBlogPosts].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [filteredBlogPosts]);

  // Pagination 계산 - useMemo로 최적화
  const { totalPages, currentPosts } = useMemo(() => {
    const total = Math.ceil(sortedBlogPosts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const posts = sortedBlogPosts.slice(startIndex, endIndex);
    return { totalPages: total, currentPosts: posts };
  }, [sortedBlogPosts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
  };

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // 카테고리 변경 시 첫 페이지로 이동
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            테니스 블로그
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            테니스
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> 지식 & 팁</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            테니스 실력 향상을 위한 전문적인 가이드와 최신 정보를 제공합니다.
            초보자부터 프로 선수까지 모두가 즐길 수 있는 콘텐츠를 준비하고 있습니다.
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <Input
                type="text"
                placeholder="궁금한 테니스 지식을 검색해보세요 (예: 푸셔, 백핸드, 스트링...)"
                className="pl-12 pr-12 h-14 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm rounded-2xl text-lg focus:ring-2 focus:ring-blue-500 transition-all"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryClick(null)}
                  className={`rounded-full px-5 ${selectedCategory === null ? "bg-blue-600 hover:bg-blue-700 shadow-md text-white" : "bg-white/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  전체
                </Button>
                {Object.values(CATEGORY_GROUPS).map((group) => {
                  const isActive = selectedCategory === group.id;
                  return (
                    <Button
                      key={group.id}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCategoryClick(group.id)}
                      className={`rounded-full px-5 ${isActive ? `bg-blue-600 text-white shadow-md hover:bg-blue-700` : "bg-white/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                    >
                      {group.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* No Results State */}
        {sortedBlogPosts.length === 0 && (
          <div className="text-center py-20 bg-white/30 dark:bg-gray-800/30 rounded-3xl backdrop-blur-sm border-2 border-dashed border-gray-200 dark:border-gray-700 mb-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">다른 키워드로 검색해보시거나 필터를 변경해보세요.</p>
            <Button
              variant="outline"
              onClick={() => { clearSearch(); handleCategoryClick(null); }}
              className="rounded-full"
            >
              초기화하기
            </Button>
          </div>
        )}

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentPosts.map((post) => (
            <Card key={post.id} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={post.badgeColor}>
                    {post.badge}
                  </Badge>
                  <Badge className={post.categoryColor}>
                    {post.category}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug || post.id}`} aria-label={`${post.title} 자세히 보기`}>
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      자세히 보기
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mb-16">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="이전 페이지"
            >
              <ChevronLeft className="w-4 h-4" />
              이전
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
                className={page === currentPage ? "bg-blue-500 hover:bg-blue-600" : ""}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="다음 페이지"
            >
              다음
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div >
  );
}