/**
 * 선수 프로필 전용 Article 컴포넌트
 */

import type { ReactNode } from 'react';
import { Player } from '@/types/player';
import { Badge } from '@/components/ui/badge';

interface PlayerArticleProps {
  player: Player;
  title: string;
  excerpt?: string;
  children: ReactNode;
}

export default function PlayerArticle({ player, title, excerpt, children }: PlayerArticleProps) {
  return (
    <article className="prose mx-auto px-4 sm:px-6 py-8 max-w-4xl">
      <header className="mb-8">
        {/* 선수 기본 정보 배지 */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline">{player.country}</Badge>
          {player.rank && <Badge variant="outline">랭킹 {player.rank}위</Badge>}
          <Badge variant="outline">{player.gender === 'male' ? 'ATP' : 'WTA'}</Badge>
          {/* Tags removed as they are not in PlayerData */}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {excerpt && (
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {excerpt}
          </p>
        )}
      </header>

      {children}
    </article>
  );
}

