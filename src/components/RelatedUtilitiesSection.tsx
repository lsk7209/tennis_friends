/**
 * Component: RelatedUtilitiesSection
 * @param {string} currentUtilityId - 현재 유틸리티 ID [Required]
 * @param {number} maxItems - 최대 표시 개수 [Optional, default=6]
 * @example <RelatedUtilitiesSection currentUtilityId="tennis-dictionary" />
 */

'use client';

import React, { useMemo } from 'react';
import { utilitiesMetadata } from '@/app/utility/page';
import type { UtilityMetadata } from '@/lib/utilities';
import RelatedContent from '@/components/RelatedContent';
import { getRelatedUtilities } from '@/lib/related-content';
import { utilityToRelatedItem } from '@/lib/utilities';
import type { RelatedContentItem } from '@/components/RelatedContent';

interface RelatedUtilitiesSectionProps {
  currentUtilityId: string;
  maxItems?: number;
}

export default function RelatedUtilitiesSection({ 
  currentUtilityId, 
  maxItems = 6 
}: RelatedUtilitiesSectionProps) {
  const relatedUtilities = useMemo(() => {
    const currentUtility = utilitiesMetadata.find(u => u.id === currentUtilityId);
    if (!currentUtility) {
      return [];
    }

    const currentItem: RelatedContentItem = utilityToRelatedItem(currentUtility);
    const allItems: RelatedContentItem[] = utilitiesMetadata
      .filter(u => u.status === '완료') // 완료된 유틸리티만
      .map(u => utilityToRelatedItem(u));

    return getRelatedUtilities(currentItem, allItems, maxItems);
  }, [currentUtilityId, maxItems]);

  if (relatedUtilities.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <RelatedContent 
        items={relatedUtilities}
        title="관련 유틸리티 더보기"
        type="utility"
        maxItems={maxItems}
      />
    </div>
  );
}

