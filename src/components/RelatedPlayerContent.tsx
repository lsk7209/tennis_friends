/**
 * Component: RelatedPlayerContent
 * @param {string} playerName - 선수 이름 (한국어) [Required]
 * @param {string} playerSlug - 선수 slug [Required]
 * @param {number} maxItems - 최대 표시 개수 [Optional, default=6]
 * @example <RelatedPlayerContent playerName="노바크 조코비치" playerSlug="novak-djokovic" />
 */

'use client';

import React, { useMemo } from 'react';
import { allBlogPosts } from '@/data/blog-posts';
import RelatedContent from '@/components/RelatedContent';
import { getRelatedBlogPosts } from '@/lib/related-content';
import type { RelatedContentItem } from '@/components/RelatedContent';

interface RelatedPlayerContentProps {
  playerName: string;
  playerSlug: string;
  maxItems?: number;
}

export default function RelatedPlayerContent({ 
  playerName, 
  playerSlug,
  maxItems = 6 
}: RelatedPlayerContentProps) {
  const relatedContent = useMemo(() => {
    // 선수 프로필 카테고리의 블로그 글 찾기
    const playerBlogPosts = allBlogPosts.filter(post => 
      post.category === '선수 프로필' && 
      (post.title.includes(playerName) || 
       post.slug === playerSlug ||
       post.slug.includes(playerSlug))
    );

    if (playerBlogPosts.length === 0) {
      return [];
    }

    // 현재 선수 블로그 글
    const currentPost = playerBlogPosts.find(p => 
      p.slug === playerSlug || p.title.includes(playerName)
    ) || playerBlogPosts[0];

    const currentItem: RelatedContentItem = {
      id: currentPost.id,
      title: currentPost.title,
      description: currentPost.excerpt,
      excerpt: currentPost.excerpt,
      category: currentPost.category,
      tags: [currentPost.category, '테니스', '블로그'],
      href: `/blog/${currentPost.slug}`,
      date: currentPost.date,
      readTime: currentPost.readTime,
    };

    // 모든 블로그 글을 RelatedContentItem으로 변환
    const allItems: RelatedContentItem[] = allBlogPosts.map(post => ({
      id: post.id,
      title: post.title,
      description: post.excerpt,
      excerpt: post.excerpt,
      category: post.category,
      tags: [post.category, '테니스', '블로그'],
      href: `/blog/${post.slug}`,
      date: post.date,
      readTime: post.readTime,
    }));

    // 관련 블로그 글 추천
    const relatedBlogs = getRelatedBlogPosts(currentItem, allItems, maxItems);

    // 선수 프로필 카테고리 글 우선 표시
    const playerProfilePosts = relatedBlogs.filter(post => 
      post.category === '선수 프로필'
    );

    // 선수 프로필이 3개 이상이면 그것만, 아니면 전체 관련글
    if (playerProfilePosts.length >= 3) {
      return playerProfilePosts.slice(0, maxItems);
    }

    return relatedBlogs;
  }, [playerName, playerSlug, maxItems]);

  if (relatedContent.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <RelatedContent 
        items={relatedContent}
        title="관련 글 더보기"
        type="blog"
        maxItems={maxItems}
      />
    </div>
  );
}

