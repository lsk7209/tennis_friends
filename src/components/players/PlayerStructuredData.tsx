/**
 * 선수 페이지 구조화 데이터 컴포넌트
 */

import { Player, PlayerFAQ } from '@/types/player';
import { generateStructuredData } from '@/lib/player-templates/jsonld-generator';

interface PlayerStructuredDataProps {
  player: Player;
  faqs: PlayerFAQ[];
}

export function PlayerStructuredData({ player, faqs }: PlayerStructuredDataProps) {
  const structuredData = generateStructuredData(player, faqs);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}

