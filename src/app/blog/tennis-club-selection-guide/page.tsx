import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "테니스 클럽 선택법 | 수준·위치·시설 체크리스트";
const description =
  "테니스 클럽 선택 기준을 수준, 거리, 코트 상태, 회비, 운영 문화로 나눠 점검합니다.";

const faqItems = [
  {
    question: "테니스 클럽은 실력보다 가까운 곳이 더 중요한가요?",
    answer:
      "입문자와 직장인은 가까운 곳이 우선입니다. 이동 시간이 길면 출석률이 떨어지고, 출석률이 떨어지면 레슨비와 회비 효율도 낮아집니다.",
  },
  {
    question: "초보자가 바로 동호회에 들어가도 되나요?",
    answer:
      "가능하지만 초보반, 레슨 연계, 신입 적응 게임이 있는 클럽을 고르는 편이 안전합니다. 바로 복식 게임만 하는 클럽은 부담이 클 수 있습니다.",
  },
  {
    question: "테니스 클럽 회비는 어떻게 비교해야 하나요?",
    answer:
      "월 회비만 보지 말고 코트비, 조명료, 공값, 게스트비, 대회비, 주차비를 합산해 월 총액으로 비교해야 합니다.",
  },
  {
    question: "가입 전 체험 참여는 꼭 해야 하나요?",
    answer:
      "가능하면 1회 이상 체험을 권합니다. 코트 상태와 회원 매너, 게임 배정 방식, 초보자 배려 여부는 안내문만으로 판단하기 어렵습니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "테니스 클럽",
    "테니스 동호회",
    "클럽 선택",
    "테니스 모임",
    "테니스 초보 동호회",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-club-selection-guide` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-club-selection-guide`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <BreadcrumbSchema
        items={[
          { name: "TennisFriends", item: siteUrl },
          { name: "블로그", item: `${siteUrl}/blog` },
          { name: title, item: `${siteUrl}/blog/tennis-club-selection-guide` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">
            테니스 동호회 선택 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            좋은 테니스 클럽은 실력보다 출석률을 먼저 만들어줍니다. 처음
            고를 때는 수준, 거리, 코트 상태, 회비, 운영 문화를 월 총액과
            꾸준함 기준으로 비교하세요.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>입문자는 집·회사에서 20분 이내인 클럽을 우선합니다.</li>
            <li>중급자는 정기 게임, 레벨 분리, 자체 리그 운영 여부를 봅니다.</li>
            <li>회비는 코트비·공값·조명료·게스트비까지 합산합니다.</li>
            <li>가입 전 체험 1회로 회원 매너와 게임 배정 방식을 확인합니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 내 수준과 클럽 레벨이 맞는지 확인</h2>
          <p>
            테니스 클럽 선택에서 가장 흔한 실수는 "잘 치는 사람이 많은 곳"을
            무조건 좋은 클럽으로 보는 것입니다. 초보자에게 필요한 곳은 상급자
            위주의 강한 게임장이 아니라, 기본 랠리와 복식 위치를 부담 없이
            익힐 수 있는 구조입니다. 반대로 중급자는 계속 초보 게임만 배정되면
            실력 향상 속도가 느려집니다.
          </p>
          <p>
            가입 문의를 할 때는 "초보도 게임에 들어갈 수 있나요?"보다 "신입
            회원은 어떤 방식으로 게임을 배정하나요?"라고 물어보세요. 답변이
            구체적이면 운영 경험이 있는 클럽일 가능성이 높고, "오면 알아서
            맞춰드린다"처럼 모호하면 실제 현장에서는 방치될 수 있습니다.
          </p>

          <h2>2. 위치와 시간대가 꾸준함을 만든다</h2>
          <p>
            클럽의 시설이 좋아도 이동 시간이 길면 오래 다니기 어렵습니다. 특히
            직장인은 퇴근 후 30분 이상 이동해야 하는 클럽보다, 시설이 조금
            평범해도 15~20분 안에 도착하는 클럽이 출석률 면에서 유리합니다.
            주말 클럽이라면 주차와 대중교통 막차 시간도 같이 확인해야 합니다.
          </p>
          <p>
            공공 코트를 쓰는 클럽은 공식 예약 규정도 중요합니다. 서울 지역은
            <a href="https://yeyak.seoul.go.kr/" target="_blank" rel="noreferrer">
              서울 공공서비스예약
            </a>
            에서 종목별 시설과 예약 안내를 확인할 수 있고, 지역별 체육시설
            페이지에는 운영 시간, 이용 제한, 대관료가 따로 공지됩니다.
          </p>

          <h2>3. 코트 상태와 부대시설을 현장에서 본다</h2>
          <p>
            코트 표면은 실력보다 부상 위험과 만족도에 먼저 영향을 줍니다.
            하드코트는 접근성이 좋고 바운드가 일정하지만 무릎 부담이 있을 수
            있고, 인조잔디나 클레이 계열 코트는 미끄럼과 배수 상태를 봐야
            합니다. 조명이 약하면 야간 게임에서 로브와 스매시 판단이 어려워져
            실력과 관계없이 경기 질이 떨어집니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>점검 항목</th>
                <th>좋은 신호</th>
                <th>주의 신호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>코트 표면</td>
                <td>균열, 물고임, 들뜸이 적음</td>
                <td>라인 주변이 패이거나 미끄러움</td>
              </tr>
              <tr>
                <td>조명</td>
                <td>베이스라인과 네트 위가 고르게 밝음</td>
                <td>한쪽 코트만 어둡거나 눈부심이 심함</td>
              </tr>
              <tr>
                <td>부대시설</td>
                <td>화장실, 탈의, 휴식 공간이 관리됨</td>
                <td>샤워·주차 비용이 별도인데 안내가 불명확함</td>
              </tr>
            </tbody>
          </table>

          <h2>4. 회비는 월 총액으로 비교한다</h2>
          <p>
            테니스 동호회 회비는 월 회비만 비교하면 실제 지출을 놓치기 쉽습니다.
            공값, 야간 조명료, 게스트비, 대회 참가비, 주차비, 뒤풀이 비용까지
            자주 발생하는 항목을 합쳐야 합니다. 실력 향상이 목적이라면 월 회비가
            조금 높더라도 정기 레슨, 볼머신, 자체 리그가 포함된 곳이 더 저렴할
            수 있습니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              가입 전 질문 5개
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
              <li>월 회비 외에 코트비와 공값이 따로 있나요?</li>
              <li>초보 회원은 어떤 시간대에 누구와 게임하나요?</li>
              <li>게스트 초대와 대회 참가 비용은 어떻게 정산하나요?</li>
              <li>비나 시설 점검으로 취소되면 보강이나 환불이 있나요?</li>
              <li>신입 회원이 적응하는 기간과 담당 운영진이 있나요?</li>
            </ol>
          </aside>

          <h2>5. 운영 문화는 체험 참여로만 확인된다</h2>
          <p>
            클럽 분위기는 안내문보다 현장에서 더 잘 보입니다. 좋은 클럽은
            신입에게 게임 규칙을 설명하고, 실력 차이가 큰 매치를 오래 방치하지
            않습니다. 반대로 고정 멤버끼리만 게임하고 신입은 대기 시간이 긴
            클럽은 초보자에게 맞지 않을 수 있습니다.
          </p>
          <p>
            체험일에는 내가 몇 게임을 했는지보다 대기 중 안내가 있었는지,
            실수했을 때 말투가 안전했는지, 경기 후 피드백이 구체적이었는지를
            보세요. 이런 요소가 장기 출석률과 실력 향상에 더 큰 영향을 줍니다.
          </p>
        </section>

        <section className="mt-12 rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900">
          <h2 className="mb-4 text-2xl font-bold">자주 묻는 질문</h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-md border border-slate-200 p-4 dark:border-slate-700"
              >
                <summary className="cursor-pointer font-semibold">
                  {item.question}
                </summary>
                <p className="mt-3 text-slate-700 dark:text-slate-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        </section>

        <div className="mt-12 rounded-xl bg-blue-50 p-6 dark:bg-blue-950/40">
          <p className="mb-2 font-semibold text-blue-900 dark:text-blue-200">
            클럽 레벨을 고르기 전에 내 실력부터 확인하세요.
          </p>
          <Link
            href="/utility/ntrp-test"
            className="font-semibold text-blue-700 underline dark:text-blue-300"
          >
            무료 NTRP 실력 테스트 →
          </Link>
        </div>
      </article>
    </main>
  );
}
