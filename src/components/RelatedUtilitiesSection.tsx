/**
 * Component: RelatedUtilitiesSection
 * @param {string} currentUtilityId - 현재 유틸리티 ID [Required]
 * @param {number} maxItems - 최대 표시 개수 [Optional, default=6]
 * @example <RelatedUtilitiesSection currentUtilityId="tennis-dictionary" />
 */

'use client';

import React, { useMemo } from 'react';
import RelatedContent from '@/components/RelatedContent';
import { getRelatedUtilityLinks } from '@/lib/internal-linking';

interface RelatedUtilitiesSectionProps {
  currentUtilityId: string;
  maxItems?: number;
}

export default function RelatedUtilitiesSection({ 
  currentUtilityId, 
  maxItems = 6 
}: RelatedUtilitiesSectionProps) {
  const relatedUtilities = useMemo(() => {
    return getRelatedUtilityLinks(
      { currentHref: `/utility/${currentUtilityId}`, title: currentUtilityId },
      maxItems,
    );
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

