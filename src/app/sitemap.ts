import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

// 블로그 글 목록 (실제로는 데이터베이스나 파일에서 동적으로 가져와야 함)
const blogPosts = [
  'frances-tiafoe',
  'tommy-paul',
  'ben-shelton',
  'grigor-dimitrov',
  'holger-rune',
  'hubert-hurkacz',
  'taylor-fritz',
  'alex-de-minaur',
  'casper-ruud',
  'stefanos-tsitsipas',
  'andrey-rublev',
  'alexander-zverev',
  'daniil-medvedev',
  'novak-djokovic',
  'jannik-sinner',
  'carlos-alcaraz',
  'autumn-tennis-rhythm-guide',
  'backhand-accuracy-full-guide',
  'rainy-day-tennis-tips-guide',
  'serve-return-prediction-guide',
  'tennis-advanced-pattern-analysis',
  'tennis-backhand-technique-guide',
  'tennis-beginner-30day-growth-plan',
  'tennis-beginner-30day-training-plan',
  'tennis-doubles-strategy-guide',
  'tennis-doubles-teamwork-strategy',
  'tennis-etiquette-and-manners',
  'tennis-footwork-balance-training-guide',
  'tennis-footwork-science',
  'tennis-forehand-impact-timing-guide',
  'tennis-injury-prevention-full-guide',
  'tennis-injury-prevention-recovery',
  'tennis-inmatch-condition-management',
  'tennis-intermediate-match-strategy',
  'tennis-intermediate-to-advanced-transition',
  'tennis-mental-focus-recovery',
  'tennis-mental-routine-5steps',
  'tennis-mental-routine-control-guide',
  'tennis-postmatch-recovery-routine',
  'tennis-power-of-routine',
  'tennis-racket-selection-guide',
  'tennis-racket-tension-string-guide',
  'tennis-scoring-system-guide',
  'tennis-serve-rhythm-science',
  'tennis-serve-speed-science',
  'tennis-serve-timing-and-spin-guide',
  'tennis-shoes-balance-guide',
  'tennis-shoes-selection-guide',
  'tennis-volley-technique-guide',
  'winter-indoor-tennis-training-routine',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tennisfrens.com'

  // 기본 페이지들
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/utility`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tennis-rules-quiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/players`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 유틸리티 페이지들
  const utilityPages: MetadataRoute.Sitemap = [
    'ntrp-test',
    'play-style-test',
    'equipment-recommendation',
    'match-analyzer',
    'training-planner',
    'nutrition-guide',
    'string-tension',
    'flexibility-test',
    'focus-training',
    'reaction-test',
    'match-recorder',
    'court-booking',
    'injury-risk',
    'mental-training',
    'forehand-stability-test',
    'serve-velocity-calculator',
    'string-pattern-analyzer',
    'swing-analyzer',
    'tennis-dictionary',
    'tennis-diet',
    'tournament-schedule',
    'goal-setting',
    'weather-check',
    'opponent-analyzer',
    'coaching-match',
    'court-conditions',
    'price-comparison',
    'ranking-calculator',
    'apparel-recommendation',
  ].map(slug => ({
    url: `${baseUrl}/utility/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 선수 페이지들 (블로그에서 분리)
  const playerSlugs = [
    'carlos-alcaraz',
    'jannik-sinner',
    'novak-djokovic',
    'daniil-medvedev',
    'alexander-zverev',
    'andrey-rublev',
    'stefanos-tsitsipas',
    'casper-ruud',
    'alex-de-minaur',
    'taylor-fritz',
    'hubert-hurkacz',
    'holger-rune',
    'grigor-dimitrov',
    'ben-shelton',
    'tommy-paul',
    'frances-tiafoe',
  ];

  const playerPages: MetadataRoute.Sitemap = playerSlugs.map(slug => ({
    url: `${baseUrl}/players/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 블로그 글들 (선수 페이지 제외)
  const blogOnlyPosts = blogPosts.filter(slug => !playerSlugs.includes(slug));
  const blogPages: MetadataRoute.Sitemap = blogOnlyPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...utilityPages, ...playerPages, ...blogPages]
}