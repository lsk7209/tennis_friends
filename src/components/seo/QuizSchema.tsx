import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/seo/metadata-helpers";

interface QuizSchemaProps {
  name: string;
  description: string;
  url: string;
  numberOfQuestions?: number;
  timeRequired?: string;
  educationalLevel?: string;
  about?: string;
  publisher?: {
    name: string;
    url: string;
    logo?: string;
  };
}

export default function QuizSchema({
  name,
  description,
  url,
  numberOfQuestions,
  timeRequired,
  educationalLevel,
  about,
  publisher,
}: QuizSchemaProps) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.tennisfrens.com";

  const defaultPublisher = {
    "@type": "Organization",
    name: publisher?.name || "TennisFriends",
    url: publisher?.url || siteUrl,
    ...(publisher?.logo && {
      logo: {
        "@type": "ImageObject",
        url: publisher.logo.startsWith("http")
          ? publisher.logo
          : `${siteUrl}${publisher.logo}`,
      },
    }),
  };

  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name,
    description,
    url,
    ...(numberOfQuestions && { numberOfQuestions }),
    ...(timeRequired && { timeRequired }),
    ...(educationalLevel && { educationalLevel }),
    ...(about && { about }),
    publisher: defaultPublisher,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TennisFriends",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    description:
      "테니스 실력 향상을 위한 규칙 학습, 훈련 도구, 선수 정보, 장비 가이드를 제공하는 테니스 플랫폼입니다.",
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "홈", url: "/" },
    { name: "유틸리티", url: "/utility" },
    { name, url },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, quizSchema, breadcrumbSchema],
  };

  return (
    <JsonLd
      data={combinedSchema}
      id={`quiz-schema-${name.replace(/\s+/g, "-").toLowerCase()}`}
    />
  );
}
