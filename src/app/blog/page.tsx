'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const blogPosts = [
    {
      id: 'tennis-footwork-science',
      title: '테니스 풋워크의 과학 — 발의 리듬이 경기의 리듬을 만든다',
      excerpt: '풋워크는 테니스의 심장이다. 발의 리듬이 곧 경기의 리듬이며, 좋은 스윙은 좋은 발에서 시작된다.',
      badge: '최신 글',
      category: '풋워크 과학',
      date: '2025-07-03',
      readTime: '13분',
      badgeColor: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
      categoryColor: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300',
    },
    {
      id: 'tennis-volley-technique-guide',
      title: '테니스 발리의 기술 — 네트 앞 1초 반응으로 결정되는 승부',
      excerpt: '발리는 힘이 아니라 반응의 기술이다. 네트 앞 1초 안에 리듬을 잡는 순간, 승부는 이미 결정된다.',
      badge: '인기 글',
      category: '발리 기술',
      date: '2025-07-10',
      readTime: '13분',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      categoryColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
    },
    {
      id: 'tennis-backhand-technique-guide',
      title: '테니스 백핸드의 기술 — 왼손의 리드로 완성하는 정확한 임팩트',
      excerpt: '백핸드는 힘이 아니라 밸런스의 기술이다. 왼손이 리드하고 오른손이 따라올 때 정확도와 파워가 동시에 완성된다.',
      badge: '인기 글',
      category: '백핸드 기술',
      date: '2025-07-17',
      readTime: '13분',
      badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      categoryColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    },
    {
      id: 'tennis-serve-speed-science',
      title: '테니스 서브 속도의 과학 — 파워보다 타이밍이 만든다',
      excerpt: '서브는 힘이 아니라 타이밍이다. 근육의 순서, 무게 이동, 호흡의 리듬이 속도를 결정한다.',
      badge: '인기 글',
      category: '서브 속도',
      date: '2025-07-23',
      readTime: '13분',
      badgeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      categoryColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    },
    {
      id: 'tennis-doubles-teamwork-strategy',
      title: '테니스 복식의 팀워크 전략 — 호흡·시선·커뮤니케이션으로 완성하는 듀오 플레이',
      excerpt: '복식은 기술이 아니라 호흡의 경기다. 시선, 커뮤니케이션, 포지션이 하나로 맞을 때 비로소 승리가 시작된다.',
      badge: '인기 글',
      category: '복식 팀워크',
      date: '2025-07-30',
      readTime: '13분',
      badgeColor: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      categoryColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    },
    {
      id: 'tennis-power-of-routine',
      title: '테니스에서 루틴의 힘 — 일관된 습관이 경기력을 만든다',
      excerpt: '루틴은 단순한 습관이 아니다. 매일의 일관된 반복이 집중력, 안정감, 승부 감각을 만든다.',
      badge: '인기 글',
      category: '루틴의 힘',
      date: '2025-08-05',
      readTime: '13분',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      categoryColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    },
    {
      id: 'tennis-inmatch-condition-management',
      title: '테니스 경기 중 컨디션 유지법 — 체력과 집중력을 끝까지 지키는 루틴',
      excerpt: '테니스는 체력보다 \'에너지 분배\'의 싸움이다. 집중력과 리듬을 끝까지 유지하는 루틴이 승부를 결정한다.',
      badge: '인기 글',
      category: '컨디션 관리',
      date: '2025-08-12',
      readTime: '13분',
      badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      categoryColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
    },
    {
      id: 'tennis-postmatch-recovery-routine',
      title: '테니스 경기 후 회복 루틴 — 24시간 리커버리 사이클로 피로 없이 다음 경기 준비하기',
      excerpt: '경기는 끝났지만, 진짜 승부는 회복에서 시작된다. 경기 후 24시간, 루틴 하나가 다음 실력을 결정한다.',
      badge: '추천 글',
      category: '회복 전략',
      date: '2025-09-14',
    readTime: '12분',
      badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      categoryColor: 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300',
    },
  ];

  // 작성일자 기준으로 최신순 정렬
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Pagination 계산
  const totalPages = Math.ceil(sortedBlogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = sortedBlogPosts.slice(startIndex, endIndex);
  
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
                  <Link href={`/blog/${post.id}`}>
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