/**
 * 선수 템플릿 생성 유틸리티
 */

import { Player, TemplateType } from '@/types/player';
import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * 템플릿 파일 읽기 (서버 사이드 전용)
 */
export function loadTemplate(templateType: TemplateType): string {
  const templateMap: Record<TemplateType, string> = {
    technique: 'template-technique.md',
    mindset: 'template-mindset.md',
    narrative: 'template-narrative.md',
    rivalry: 'template-rivalry.md',
    comeback: 'template-comeback.md',
  };

  try {
    const templatePath = join(process.cwd(), 'src', 'templates', 'players', templateMap[templateType]);
    return readFileSync(templatePath, 'utf-8');
  } catch (error) {
    throw new Error(`템플릿 파일을 읽을 수 없습니다: ${templateType}. ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * 플레이스홀더 치환
 */
function replacePlaceholders(template: string, player: Player): string {
  const currentYear = new Date().getFullYear();
  const age = currentYear - player.birthYear;
  
  const replacements: Record<string, string> = {
    '{선수명}': player.nameKo,
    '{랭킹}': player.rankingCurrent.toString(),
    '{국적}': player.country,
    '{나이}': age.toString(),
    '{출생년도}': player.birthYear.toString(),
    '{현재 랭킹}': player.rankingCurrent.toString(),
    '{최고 랭킹}': player.rankingPeak.toString(),
    '{ATP/WTA}': player.tour,
    '{오른손/왼손}': player.hand === 'right' ? '오른손' : '왼손',
    '{원핸드/투핸드}': player.backhand === 'one-handed' ? '원핸드' : '투핸드',
    '{스타일}': getPlayStyleKo(player.style),
    '{하드/클레이/그래스/혼합}': getSurfaceKo(player.favoriteSurface),
    '{작성일}': new Date().toISOString().split('T')[0],
  };

  let result = template;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replace(new RegExp(key.replace(/[{}]/g, '\\$&'), 'g'), value);
  }

  return result;
}

/**
 * 플레이 스타일 한글 변환
 */
function getPlayStyleKo(style: string): string {
  const styleMap: Record<string, string> = {
    aggressive: '공격형',
    'all-court': '전천후',
    'big-server': '빅서버',
    'counter-puncher': '카운터펀처',
    defensive: '수비형',
    baseliner: '베이스라인',
  };
  return styleMap[style] || style;
}

/**
 * 코트 타입 한글 변환
 */
function getSurfaceKo(surface: string): string {
  const surfaceMap: Record<string, string> = {
    hard: '하드',
    clay: '클레이',
    grass: '그래스',
    mixed: '혼합',
  };
  return surfaceMap[surface] || surface;
}

/**
 * 템플릿 생성
 */
export function generateTemplate(player: Player): string {
  const template = loadTemplate(player.templateType);
  return replacePlaceholders(template, player);
}

/**
 * 템플릿 타입 자동 선택 로직
 */
export function selectTemplateType(player: Player): TemplateType {
  // 라이벌이 뚜렷한 경우
  if (player.tagsStory.some(tag => tag.includes('라이벌'))) {
    return 'rivalry';
  }

  // 부상/복귀 키워드가 있는 경우
  if (player.tagsStory.some(tag => tag.includes('부상') || tag.includes('복귀'))) {
    return 'comeback';
  }

  // 성장 서사 키워드가 있는 경우
  if (player.tagsStory.some(tag => tag.includes('성장') || tag.includes('영재'))) {
    return 'narrative';
  }

  // 멘탈/전술 키워드가 있는 경우
  if (player.tagsStory.some(tag => tag.includes('멘탈') || tag.includes('전술'))) {
    return 'mindset';
  }

  // 기본값: 기술 특화형
  return 'technique';
}

