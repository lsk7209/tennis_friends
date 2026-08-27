import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FAQSection from "@/components/seo/FAQSection";
import {
  DEFAULT_SITE_LOCALE,
  SITE_NAME,
  getAbsoluteUrl,
  getSiteUrl,
} from "@/lib/site";

import { Hero } from "./_components/home/hero";
import { LiveTicker } from "./_components/home/live-ticker";
import { ToolsMosaic } from "./_components/home/tools-mosaic";
import { CourtLines } from "./_components/home/court-lines";
import { PlayerSpotlight } from "./_components/home/player-spotlight";
import { BlogMagazine } from "./_components/home/blog-magazine";
import { NtrpBand } from "./_components/home/ntrp-band";

export const metadata: Metadata = {
  title: "TennisFriends - 테니스 실력 테스트",
  description:
    "NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측, 플레이 스타일 진단 등 테니스 실력 향상을 위한 무료 도구와 테니스 가이드를 제공합니다.",
  keywords: [
    "테니스",
    "NTRP 테스트",
    "테니스 실력 측정",
    "스트링 텐션 계산기",
    "테니스 부상 예방",
    "테니스 레벨 테스트",
    "테니스 라켓 추천",
    "테니스 훈련 계획",
  ],
  openGraph: {
    title: "TennisFriends - 테니스 실력 테스트 & 분석 도구",
    description:
      "NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 모든 것. 무료로 시작하세요.",
    url: getAbsoluteUrl("/"),
    siteName: SITE_NAME,
    locale: DEFAULT_SITE_LOCALE,
    type: "website",
    images: [
      {
        url: getAbsoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "TennisFriends 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TennisFriends - 테니스 실력 테스트",
    description:
      "NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 무료 도구를 제공합니다.",
    images: [getAbsoluteUrl("/opengraph-image")],
  },
  alternates: {
    canonical: "/",
  },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TennisFriends",
  url: getSiteUrl(),
  applicationCategory: "SportsApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  description:
    "테니스 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 무료 도구 모음",
  inLanguage: "ko",
  featureList: [
    "NTRP 실력 테스트",
    "스트링 텐션 계산기",
    "부상 위험도 예측",
    "플레이 스타일 진단",
    "장비 추천 시스템",
    "훈련 계획 수립",
    "경기 분석 도구",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd data={reviewSchema} id="homepage-app-schema" />

      <Hero />
      <section
        aria-labelledby="tennisfriends-answer-heading"
        className="border-b border-court-line/20 bg-white px-6 py-12 dark:bg-court-ink"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            id="tennisfriends-answer-heading"
            className="text-2xl font-bold tracking-tight text-court-ink dark:text-white md:text-3xl"
          >
            TennisFriends에서는 무엇을 할 수 있나요?
          </h2>
          <div className="article-summary mt-5 space-y-4 text-base leading-8 text-gray-700 dark:text-gray-200">
            <p>
              TennisFriends는 테니스 동호인과 입문자가 자신의 현재 수준을
              점검하고 다음 훈련 결정을 내릴 수 있도록 무료 진단 도구와 실전
              가이드를 제공하는 사이트입니다. 대표 기능인
              {" "}
              <Link className="font-semibold underline" href="/utility/ntrp-test">
                NTRP 실력 테스트
              </Link>
              는 경기 경험과 기술 수행 수준을 기준으로 참고 등급을 제시하며,
              결과는 공식 대회 등급이나 코치의 평가를 대체하지 않습니다.
            </p>
            <p>
              라켓과 스트링을 조정하려면
              {" "}
              <Link className="font-semibold underline" href="/utility/string-tension">
                스트링 텐션 계산기
              </Link>
              를, 훈련 부담을 점검하려면
              {" "}
              <Link className="font-semibold underline" href="/utility/injury-risk">
                부상 위험 체크
              </Link>
              를 이용할 수 있습니다. 각 결과에는 판단 근거와 관련 가이드를
              함께 연결해 사용자가 수치만 보지 않고 실제 코트에서 적용할 수
              있도록 구성했습니다.
            </p>
          </div>
        </div>
      </section>
      <LiveTicker />
      <ToolsMosaic />
      <CourtLines />
      <PlayerSpotlight />
      <BlogMagazine />
      <NtrpBand />

      {/* Manifesto + FAQ — SEO 구조 유지 */}
      <section className="bg-court-bg py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <FAQSection
            title="테니스 실력 향상 FAQ"
            items={[
              {
                question: "NTRP 테니스 등급이란 무엇인가요?",
                answer:
                  "NTRP(National Tennis Rating Program)는 1.0부터 7.0까지의 숫자로 테니스 실력을 객관적으로 평가하는 국제 표준 등급 시스템입니다. 1.0은 완전 초보자, 3.0은 중급 동호인, 5.0 이상은 프로 수준입니다. TennisFriends의 무료 NTRP 테스트로 10개 질문에 답하면 나의 등급을 확인할 수 있습니다.",
              },
              {
                question: "테니스 스트링 텐션은 어떻게 정해야 하나요?",
                answer:
                  "스트링 텐션은 라켓 헤드 크기, 플레이 스타일, 선호하는 타구감에 따라 달라집니다. 일반적으로 파워를 원하면 낮은 텐션(48-52lbs), 컨트롤을 원하면 높은 텐션(54-60lbs)을 선택합니다. TennisFriends 스트링 텐션 계산기에서 5가지 요소를 입력하면 맞춤 텐션을 추천받을 수 있습니다.",
              },
              {
                question: "테니스 엘보를 예방하려면 어떻게 해야 하나요?",
                answer:
                  "테니스 엘보 예방의 핵심은 3가지입니다: 1) 올바른 그립 사이즈 선택, 2) 경기 전후 팔꿈치·전완근 스트레칭, 3) 라켓 진동 흡수력이 좋은 장비 사용. 또한 폴리에스터 스트링 대신 멀티필라멘트나 내추럴 거트를 사용하면 팔에 가해지는 충격을 줄일 수 있습니다.",
              },
              {
                question: "테니스 초보자가 처음 사야 할 장비는 무엇인가요?",
                answer:
                  "초보자에게 필요한 필수 장비는 라켓, 테니스화, 오버그립입니다. 라켓은 헤드 크기 100sq.in 이상의 가벼운 모델(270-285g)을 추천합니다. 테니스화는 일반 운동화와 달리 측면 지지력이 중요하므로 반드시 테니스 전용 신발을 구입하세요. 예산은 라켓 15-25만원, 신발 8-15만원 정도입니다.",
              },
              {
                question: "복식 경기에서 가장 중요한 전략은 무엇인가요?",
                answer:
                  "복식의 핵심은 커뮤니케이션과 포지셔닝입니다. 서브 시 I-포메이션이나 오스트레일리안 포메이션을 활용하고, 네트 플레이어는 항상 볼의 방향을 따라 이동해야 합니다. 파트너 간의 시선 교환과 사전 사인 시스템을 만들면 승률이 크게 올라갑니다.",
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
