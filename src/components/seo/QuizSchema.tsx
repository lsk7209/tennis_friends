import JsonLd from '@/components/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo/metadata-helpers';

interface QuizSchemaProps {
  /**
   * Quiz name/title
   */
  name: string;
  
  /**
   * Quiz description
   */
  description: string;
  
  /**
   * Quiz URL
   */
  url: string;
  
  /**
   * Number of questions
   */
  numberOfQuestions?: number;
  
  /**
   * Estimated time to complete (in minutes)
   */
  timeRequired?: string;
  
  /**
   * Educational level or difficulty
   */
  educationalLevel?: string;
  
  /**
   * Quiz category/subject
   */
  about?: string;
  
  /**
   * Organization that created the quiz
   */
  publisher?: {
    name: string;
    url: string;
    logo?: string;
  };
  
  /**
   * Aggregate rating (optional)
   */
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
}

/**
 * Quiz Schema Component for SEO/AEO Optimization
 * 
 * Implements Schema.org Quiz type for:
 * - Google Rich Results
 * - AI search engines (ChatGPT, Perplexity)
 * - Educational content discovery
 * 
 * Use this for quiz/test pages like NTRP Test, Tennis Rules Quiz, etc.
 */
export default function QuizSchema({
  name,
  description,
  url,
  numberOfQuestions,
  timeRequired,
  educationalLevel,
  about,
  publisher,
  aggregateRating,
}: QuizSchemaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfriends.co.kr';
  
  const defaultPublisher = {
    '@type': 'Organization',
    name: publisher?.name || 'TennisFriends',
    url: publisher?.url || siteUrl,
    ...(publisher?.logo && {
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo.startsWith('http') 
          ? publisher.logo 
          : `${siteUrl}${publisher.logo}`,
      },
    }),
  };

  // Quiz schema
  const quizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name,
    description,
    url,
    ...(numberOfQuestions && { numberOfQuestions }),
    ...(timeRequired && { timeRequired }),
    ...(educationalLevel && { educationalLevel }),
    ...(about && { about }),
    publisher: defaultPublisher,
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        ratingCount: aggregateRating.ratingCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };

  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TennisFriends',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    description: '데이터로 똑똑하게, 테니스를 즐겁게. 테니스 실력 향상을 위한 모든 것을 제공합니다.',
  };

  // BreadcrumbList schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '홈', url: '/' },
    { name: '유틸리티', url: '/utility' },
    { name, url },
  ]);

  // Combined schema using @graph
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      quizSchema,
      breadcrumbSchema,
    ],
  };

  return <JsonLd data={combinedSchema} id={`quiz-schema-${name.replace(/\s+/g, '-').toLowerCase()}`} />;
}

