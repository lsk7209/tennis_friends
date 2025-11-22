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
          <Badge variant="outline">랭킹 {player.rankingCurrent}위</Badge>
          <Badge variant="outline">{player.tour}</Badge>
          {player.tagsStory.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
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

