/**
 * 테니스 선수 페이지 템플릿 컴포넌트
 * 
 * 5가지 템플릿 유형에 따라 조정 가능한 선수 페이지 템플릿
 * - technique: 기술 특화형
 * - mindset: 멘탈/전술형
 * - narrative: 성장 서사형
 * - rivalry: 라이벌 구도형
 * - comeback: 복귀·부상형
 */

import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap,
  Star, CheckCircle, Crown, Users, BookOpen, ArrowRight
} from 'lucide-react';
import { Player, TemplateType, PlayerMetadata, PlayerFAQ } from '@/types/player';
import RelatedPlayerContent from '@/components/RelatedPlayerContent';

interface PlayerPageTemplateProps {
  player: Player;
  metadata: PlayerMetadata;
  tocItems: Array<{ id: string; text: string; depth: 2 | 3 }>;
  faqs: PlayerFAQ[];
  sections: {
    // 필수 섹션
    introduction: {
      title: string;
      quote: string;
      content: string[];
    };
    playerType: {
      title: string;
      description: string;
      profileItems: Array<{ label: string; value: string; icon?: 'check' | 'trophy' | 'trending' | 'zap' | 'target' }>;
      playStyle: string;
      characterTags: Array<{ text: string; icon: 'heart' | 'star' | 'trophy' | 'brain' | 'award' | 'target' | 'zap'; color: string }>;
    };
    strengths: {
      title: string;
      summary: string;
      technical: { title: string; highlight: string; content: string[] };
      physical: { title: string; content: string[] };
      mental: {
        title: string;
        stats: string;
        content: string[];
      };
      tactical: { title: string; content: string[] };
    };
    representativeMatch: {
      title: string;
      summary: string;
      matches: Array<{
        title: string;
        description: string;
        highlight?: string;
      }>;
      memorableMoment: {
        quote: string;
      };
    };
    fanAppeal: {
      title: string;
      summary: string;
      courtManner: { title: string; content: string[] };
      interviewStyle: { title: string; content: string[] };
      teamRelations: { title: string; content: string[] };
    };
    recentForm: {
      title: string;
      summary: string;
      recentPerformance: { title: string; content: string[] };
      injuryStatus: { title: string; content: string[] };
      rankingTrend: { title: string; content: string[] };
    };
    oneLiner: {
      title: string;
      summary: string;
      content: string[];
    };
    // 선택 섹션 (템플릿 유형에 따라)
    optional?: {
      injuryCareer?: {
        title: string;
        summary: string;
        difficultPeriod: { title: string; highlight: string; content: string[] };
        recovery: { title: string; quote?: string; content: string[] };
        styleChange: { title: string; content: string[] };
      };
      growthStory?: {
        title: string;
        summary: string;
        background: { title: string; content: string[] };
        earlyCareer: { title: string; content: string[] };
        turningPoint: { title: string; content: string[] };
      };
      rivalry?: {
        title: string;
        summary: string;
        rivals: Array<{
          name: string;
          record: string;
          description: string;
        }>;
        memorableMatches: Array<{
          title: string;
          description: string;
        }>;
      };
    };
  };
}

const iconMap = {
  check: CheckCircle,
  trophy: Trophy,
  trending: TrendingUp,
  zap: Zap,
  target: Target,
  heart: Heart,
  star: Star,
  brain: Brain,
  award: Award,
  crown: Crown,
};

const getIcon = (iconName: keyof typeof iconMap) => {
  return iconMap[iconName] || CheckCircle;
};

const getIconColor = (iconName: string) => {
  const colorMap: Record<string, string> = {
    check: 'text-green-600 dark:text-green-400',
    trophy: 'text-amber-600 dark:text-amber-400',
    trending: 'text-blue-600 dark:text-blue-400',
    zap: 'text-purple-600 dark:text-purple-400',
    target: 'text-red-600 dark:text-red-400',
    heart: 'text-pink-600 dark:text-pink-400',
    star: 'text-yellow-600 dark:text-yellow-400',
    brain: 'text-blue-600 dark:text-blue-400',
    award: 'text-indigo-600 dark:text-indigo-400',
    crown: 'text-amber-600 dark:text-amber-400',
  };
  return colorMap[iconName] || 'text-gray-600 dark:text-gray-400';
};

export function PlayerPageTemplate({ player, metadata, tocItems, faqs, sections }: PlayerPageTemplateProps) {
  const currentYear = new Date().getFullYear();
  const birthYear = player.birthYear || (player.birthDate ? parseInt(player.birthDate.split('-')[0]) : 2000);
  const age = currentYear - birthYear;
  const nameKo = player.nameKo || player.name;
  const tags = player.tagsStory || [];
  const slug = player.slug || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title={nameKo}
        excerpt={sections.oneLiner.summary}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', nameKo, '선수 프로필', player.country, ...tags.slice(0, 2)].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* 도입 섹션 */}
            <h2 id="why-again-notable">{sections.introduction.title}</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  {sections.introduction.quote}
                </p>
              </div>
            </blockquote>
            {sections.introduction.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* 선수 유형 섹션 */}
            <h2 id="what-type-of-player">{sections.playerType.title}</h2>
            <p>{sections.playerType.description}</p>

            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">선수 프로필</h4>
              </div>
              <ul className="space-y-3 text-sm">
                {sections.playerType.profileItems.map((item, idx) => {
                  const Icon = item.icon ? getIcon(item.icon) : CheckCircle;
                  const iconColor = item.icon ? getIconColor(item.icon) : 'text-green-600 dark:text-green-400';
                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon className={`w-4 h-4 ${iconColor} mt-0.5 flex-shrink-0`} />
                      <span><strong className="text-gray-700 dark:text-gray-300">{item.label}:</strong> <span className="text-gray-600 dark:text-gray-400">{item.value}</span></span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <p>{sections.playerType.playStyle}</p>

            <div className="not-prose my-6 flex flex-wrap gap-2">
              {sections.playerType.characterTags.map((tag, idx) => {
                const Icon = getIcon(tag.icon);
                return (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className={`text-xs px-3 py-1 ${tag.color} border-opacity-30 dark:border-opacity-30`}
                  >
                    <Icon className="w-3 h-3 mr-1 inline" />
                    {tag.text}
                  </Badge>
                );
              })}
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            {/* 강점 섹션 */}
            <h2 id="what-keeps-top-ranking">{sections.strengths.title}</h2>
            <p>{sections.strengths.summary}</p>

            <h3 className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              {sections.strengths.technical.title}
            </h3>
            <div className="not-prose my-4 p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-lg border-l-2 border-purple-400 dark:border-purple-600">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                <strong className="text-purple-700 dark:text-purple-300">{sections.strengths.technical.highlight}</strong>
              </p>
            </div>
            {sections.strengths.technical.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <h3 className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
              {sections.strengths.physical.title}
            </h3>
            {sections.strengths.physical.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <h3 className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              {sections.strengths.mental.title}
            </h3>
            <div className="not-prose my-4 p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-green-700 dark:text-green-400" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0">
                  핵심 통계
                </p>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0">
                {sections.strengths.mental.stats}
              </p>
            </div>
            {sections.strengths.mental.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <h3 className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              {sections.strengths.tactical.title}
            </h3>
            {sections.strengths.tactical.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            {/* 선택 섹션: 부상/복귀 (comeback 타입) */}
            {sections.optional?.injuryCareer && (
              <>
                <h2 id="what-injury-career">{sections.optional.injuryCareer.title}</h2>
                <p>{sections.optional.injuryCareer.summary}</p>

                <h3>{sections.optional.injuryCareer.difficultPeriod.title}</h3>
                <div className="not-prose my-4 p-3 bg-amber-50 dark:bg-amber-950/20 border-l-3 border-amber-500 rounded-r">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0">
                    {sections.optional.injuryCareer.difficultPeriod.highlight}
                  </p>
                </div>
                {sections.optional.injuryCareer.difficultPeriod.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                <h3>{sections.optional.injuryCareer.recovery.title}</h3>
                {sections.optional.injuryCareer.recovery.quote && (
                  <blockquote className="not-prose my-4 p-4 bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500 rounded-r-lg italic">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                      <p className="text-base text-gray-800 dark:text-gray-200 mb-0">
                        {sections.optional.injuryCareer.recovery.quote}
                      </p>
                    </div>
                  </blockquote>
                )}
                {sections.optional.injuryCareer.recovery.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                <h3>{sections.optional.injuryCareer.styleChange.title}</h3>
                {sections.optional.injuryCareer.styleChange.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                <hr className="my-8 border-gray-200 dark:border-gray-800" />
              </>
            )}

            {/* 대표 경기 섹션 */}
            <h2 id="what-proves-player">{sections.representativeMatch.title}</h2>
            <p>{sections.representativeMatch.summary}</p>

            {sections.representativeMatch.matches.map((match, idx) => (
              <div key={idx}>
                <h3>{match.title}</h3>
                {match.highlight && (
                  <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">{match.highlight}</p>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">{match.description}</p>
                  </div>
                )}
                {!match.highlight && <p>{match.description}</p>}
              </div>
            ))}

            <h3>대표 명장면</h3>
            <blockquote className="not-prose my-4 p-5 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 border-l-4 border-gray-400 dark:border-gray-600 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-800 dark:text-gray-200 mb-0 italic leading-relaxed">
                  {sections.representativeMatch.memorableMoment.quote}
                </p>
              </div>
            </blockquote>

            {/* 팬심 섹션 */}
            <h2 id="what-attracts-fans">{sections.fanAppeal.title}</h2>
            <p>{sections.fanAppeal.summary}</p>

            <h3>{sections.fanAppeal.courtManner.title}</h3>
            {sections.fanAppeal.courtManner.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <h3>{sections.fanAppeal.interviewStyle.title}</h3>
            {sections.fanAppeal.interviewStyle.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <h3>{sections.fanAppeal.teamRelations.title}</h3>
            {sections.fanAppeal.teamRelations.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* 최근 경기력 섹션 */}
            <h2 id="recent-form">{sections.recentForm.title}</h2>
            <p>{sections.recentForm.summary}</p>

            <h3>{sections.recentForm.recentPerformance.title}</h3>
            {sections.recentForm.recentPerformance.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <h3>{sections.recentForm.injuryStatus.title}</h3>
            {sections.recentForm.injuryStatus.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <h3>{sections.recentForm.rankingTrend.title}</h3>
            {sections.recentForm.rankingTrend.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* 한 문장 요약 */}
            <h2 id="one-sentence-summary">{sections.oneLiner.title}</h2>
            <p>{sections.oneLiner.summary}</p>
            {sections.oneLiner.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* FAQ Section */}
          <FAQ items={faqs.map(faq => ({ q: faq.question, a: faq.answer }))} />

          {/* Related Content */}
          <RelatedPlayerContent
            playerName={nameKo}
            playerSlug={slug}
            maxItems={6}
          />

          {/* CTA */}
          <CTA />
        </div>
      </Article>
    </div>
  );
}

