'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { allBlogPosts } from '@/data/blog-posts';
import { BADGE_LABELS, BADGE_COLORS, CATEGORY_COLORS, POSTS_PER_PAGE } from '@/lib/constants';
import type { BlogPostData } from '@/types/blog';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

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
        date: postDate.toISOString().split('T')[0],
        readTime: `${8 + (index % 5) * 2}분` // 8분, 10분, 12분, 14분, 16분 반복
      } as BlogPostData & { badge: string; badgeColor: string; categoryColor: string; readTime: string };
    });
  }, []);

  // 작성일자 기준으로 최신순 정렬 - useMemo로 최적화
  const sortedBlogPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [blogPosts]);

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
      </div>

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

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            준비 중인 콘텐츠
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '테니스 기초 기술 가이드',
              '장비 선택 및 관리 팁',
              '훈련 프로그램 및 계획',
              '경기 전략 및 멘탈 트레이닝',
              '부상 예방 및 재활 가이드',
              '테니스 뉴스 및 트렌드'
            ].map((topic, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-75">
                <CardContent className="p-6">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {topic}
          </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    곧 업데이트 예정입니다
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}