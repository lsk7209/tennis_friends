/**
 * 관련 컨텐츠 추천 유틸리티 함수
 * 카테고리, 태그, 키워드 기반으로 관련 컨텐츠를 추천합니다.
 */

import type { RelatedContentItem } from '@/components/RelatedContent';

/**
 * 블로그 포스트의 관련글을 추천하는 함수
 * @param currentPost - 현재 포스트
 * @param allPosts - 모든 포스트 목록
 * @param maxResults - 최대 결과 개수 (기본값: 6)
 * @returns 관련 포스트 목록
 */
export function getRelatedBlogPosts(
  currentPost: RelatedContentItem,
  allPosts: RelatedContentItem[],
  maxResults: number = 6
): RelatedContentItem[] {
  // 현재 포스트 제외
  const otherPosts = allPosts.filter(p => p.id !== currentPost.id);
  
  // 점수 계산 함수
  const calculateScore = (post: RelatedContentItem): number => {
    let score = 0;
    
    // 1. 카테고리 일치 (가장 높은 가중치)
    if (currentPost.category && post.category === currentPost.category) {
      score += 10;
    }
    
    // 2. 태그 일치
    if (currentPost.tags && post.tags) {
      const commonTags = currentPost.tags.filter(tag => 
        post.tags!.some(ptag => ptag.toLowerCase() === tag.toLowerCase())
      );
      score += commonTags.length * 3;
    }
    
    // 3. 제목 키워드 매칭
    const currentTitleWords = currentPost.title.toLowerCase().split(/\s+/);
    const postTitleWords = post.title.toLowerCase().split(/\s+/);
    const commonTitleWords = currentTitleWords.filter(word => 
      word.length > 2 && postTitleWords.includes(word)
    );
    score += commonTitleWords.length * 2;
    
    // 4. 설명/요약 키워드 매칭
    const currentText = `${currentPost.description || ''} ${currentPost.excerpt || ''}`.toLowerCase();
    const postText = `${post.description || ''} ${post.excerpt || ''}`.toLowerCase();
    const currentKeywords = currentText.split(/\s+/).filter(w => w.length > 2);
    const commonKeywords = currentKeywords.filter(keyword => 
      postText.includes(keyword)
    );
    score += commonKeywords.length * 1;
    
    return score;
  };
  
  // 점수 계산 및 정렬
  const scoredPosts = otherPosts.map(post => ({
    post,
    score: calculateScore(post)
  }));
  
  // 점수 순으로 정렬하고, 점수가 같은 경우 날짜 최신순
  scoredPosts.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // 날짜 비교 (최신순)
    if (a.post.date && b.post.date) {
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    }
    return 0;
  });
  
  // 최상위 결과 반환
  return scoredPosts
    .filter(item => item.score > 0) // 점수가 0보다 큰 것만
    .slice(0, maxResults)
    .map(item => item.post);
}

/**
 * 유틸리티의 관련 유틸리티를 추천하는 함수
 * @param currentUtility - 현재 유틸리티
 * @param allUtilities - 모든 유틸리티 목록
 * @param maxResults - 최대 결과 개수 (기본값: 6)
 * @returns 관련 유틸리티 목록
 */
export function getRelatedUtilities(
  currentUtility: RelatedContentItem,
  allUtilities: RelatedContentItem[],
  maxResults: number = 6
): RelatedContentItem[] {
  const otherUtilities = allUtilities.filter(u => u.id !== currentUtility.id);
  
  const calculateScore = (utility: RelatedContentItem): number => {
    let score = 0;
    
    // 카테고리 일치
    if (currentUtility.category && utility.category === currentUtility.category) {
      score += 10;
    }
    
    // 제목 키워드 매칭
    const currentTitleWords = currentUtility.title.toLowerCase().split(/\s+/);
    const utilityTitleWords = utility.title.toLowerCase().split(/\s+/);
    const commonWords = currentTitleWords.filter(word => 
      word.length > 2 && utilityTitleWords.includes(word)
    );
    score += commonWords.length * 3;
    
    // 설명 키워드 매칭
    const currentDesc = (currentUtility.description || currentUtility.excerpt || '').toLowerCase();
    const utilityDesc = (utility.description || utility.excerpt || '').toLowerCase();
    const currentKeywords = currentDesc.split(/\s+/).filter(w => w.length > 2);
    const commonKeywords = currentKeywords.filter(keyword => 
      utilityDesc.includes(keyword)
    );
    score += commonKeywords.length * 2;
    
    return score;
  };
  
  const scoredUtilities = otherUtilities.map(utility => ({
    utility,
    score: calculateScore(utility)
  }));
  
  scoredUtilities.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // 점수가 같으면 제목 알파벳 순
    return a.utility.title.localeCompare(b.utility.title);
  });
  
  return scoredUtilities
    .filter(item => item.score > 0)
    .slice(0, maxResults)
    .map(item => item.utility);
}

