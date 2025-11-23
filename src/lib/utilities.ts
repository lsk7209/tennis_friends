/**
 * 유틸리티 메타데이터 및 관련 함수
 */

import type { RelatedContentItem } from '@/components/RelatedContent';

// 유틸리티 메타데이터 타입
export interface UtilityMetadata {
  id: string;
  title: string;
  description: string;
  icon: any;
  status: '완료' | '개발 예정';
  features: string[];
  gradient: string;
  bgColor: string;
  iconBg: string;
  category: string;
}

/**
 * 유틸리티 메타데이터를 RelatedContentItem으로 변환
 */
export function utilityToRelatedItem(
  utility: UtilityMetadata,
  basePath: string = '/utility'
): RelatedContentItem {
  return {
    id: utility.id,
    title: utility.title,
    description: utility.description,
    category: utility.category,
    href: `${basePath}/${utility.id}`,
  };
}

