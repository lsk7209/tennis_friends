import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tennisfrens.com";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "벽치기 연습: 목표 구역·포핸드/백핸드 전환·기록 방법",
  description: "벽치기는 반복 접촉을 연습하는 도구입니다. 허용된 공간에서 목표 구역과 중단·재시작 기준을 정하고, 같은 조건의 기록과 파트너 연습을 구분해 활용하세요.",
  alternates: {
    canonical: `${siteUrl}/blog/tennis-wall-practice-guide`,
  },
  openGraph: {
    title: "벽치기 연습: 목표 구역·포핸드/백핸드 전환·기록 방법",
    description: "벽치기는 반복 접촉을 연습하는 도구입니다. 허용된 공간에서 목표 구역과 중단·재시작 기준을 정하고, 같은 조건의 기록과 파트너 연습을 구분해 활용하세요.",
    url: `${siteUrl}/blog/tennis-wall-practice-guide`,
    type: "article",
    siteName: "TennisFriends",
    locale: "ko_KR",
  },
};

const content = {
  "intro": "벽은 반복해서 공을 만나는 연습 상대가 될 수 있지만 상대의 선택과 점수 압박까지 재현하지는 못합니다. 이 글은 허용된 연습 공간이 있는 동호인이 목표 구역, 재시작 기준, 기록 방법을 정하는 데 쓰는 안내입니다. 아래 루틴은 편집부가 구성한 예시이며 특정 기간의 경기력 향상을 입증한 프로그램은 아닙니다.",
  "summaryBox": "오늘은 오래 치기보다 같은 공·거리·목표 조건에서 무엇을 반복했는지 남기세요. 벽 기록과 실제 경기 결과는 따로 평가합니다.",
  "keyPoints": [
    "시설이 허용하는 벽과 주변 공간을 확인하고, 사람이 들어오거나 통증이 생기면 멈춥니다.",
    "포핸드 유지와 포핸드·백핸드 교대를 나누고 한 번에 한 조건을 비교합니다.",
    "연속 접촉 횟수와 목표 성공을 구분해 기록하고 파트너 연습에서 다시 확인합니다."
  ],
  "sections": [
    {
      "id": "space",
      "title": "공을 치기 전에 공간과 재시작 조건을 정합니다",
      "paragraphs": [
        "먼저 시설 운영자에게 테니스 공을 쳐도 되는 벽인지 확인하세요. 창문·차량·출입문·다른 이용자와 공의 이동 경로가 겹치는 곳은 피하고, 바닥의 미끄러짐과 장애물을 살핍니다. 이 항목은 이 글의 실용적인 안전 점검 제안입니다. 모든 시설에 적용되는 거리 숫자를 정하는 규정은 아닙니다.",
        "공이 옆으로 벗어나면 쫓아가 무리하게 이어 치지 말고 멈춘 뒤 다시 시작합니다. 다른 사람이 공간에 들어오면 중단하세요. 몸에 통증이 생기거나 균형을 유지하기 어렵다면 연속 기록을 우선하지 않습니다. 사용할 수 있는 공간이 충분하지 않으면 다른 연습을 선택합니다."
      ]
    },
    {
      "id": "target",
      "title": "연속 접촉과 목표 성공은 다릅니다",
      "paragraphs": [
        "허용되는 표시 방법이 있을 때만 벽의 목표 구역을 정합니다. 별도 표시를 할 수 없다면 기존 이음선처럼 훼손 없이 식별할 수 있는 지점을 기준으로 삼으세요. 공이 돌아오는 시간을 감당할 수 있는 위치에서 시작하고, 거리·공 종류·바운드 조건을 기록합니다. 여기서는 누구에게나 맞는 고정 거리를 처방하지 않습니다.",
        "연속 접촉은 공을 놓치지 않고 주고받은 횟수입니다. 목표 성공은 미리 정한 구역으로 보낸 횟수입니다. 목표를 벗어나도 계속 쳤다면 접촉은 이어졌지만 목표 성공은 아닙니다. 두 기록을 섞으면 그날 무엇을 연습했는지 알기 어렵습니다."
      ]
    },
    {
      "id": "routine",
      "title": "포핸드 유지 → 백핸드 유지 → 교대 예시",
      "paragraphs": [
        "첫 단계에서는 포핸드로만 공을 보내고 준비 위치로 돌아옵니다. 공이 몸에 붙거나 목표를 크게 벗어나면 멈춰 재시작합니다. 다음에는 같은 조건으로 백핸드를 따로 기록합니다. 횟수 경쟁 때문에 급하게 스윙하지 말고 안정적으로 다시 준비할 수 있는지 보세요.",
        "각 스트로크를 따로 조절할 수 있다면 포핸드 한 번, 백핸드 한 번을 번갈아 시도합니다. 공이 어느 쪽으로 돌아올지 조절되지 않으면 교대 단계를 멈추고 한쪽 스트로크로 돌아갑니다. 성공 횟수 목표와 세션 길이는 자신의 여건에 맞게 작게 정하고, 피로 때문에 준비 동작이 무너지면 종료합니다.",
        "USTA의 가정 연습 안내에는 벽이나 차고 문을 이용한 포핸드·백핸드·발리와 연속 접촉 기록이 소개됩니다. Net Generation의 오렌지볼 연습안에는 폼볼로 벽을 이용해 스트로크와 목표 쪽을 교대하는 활동이 있습니다. 둘 다 청소년 활동의 예이며, 이 글의 성인용 비교 기록이나 성능 향상 효과를 검증한 연구는 아닙니다."
      ]
    },
    {
      "id": "log",
      "title": "같은 조건끼리 비교하는 한 줄 기록",
      "paragraphs": [
        "기록 형식: 날짜 / 사용한 공 / 서 있는 위치의 기준 / 바운드 조건 / 목표 구역 / 스트로크 / 연속 접촉 / 목표 성공 / 중단 이유. 반복할 때 확인할 정보만 남기고 자기 실력을 한 숫자로 판정하지 않습니다.",
        "가상 예시: “시설 연습벽, 같은 저압 공, 바닥 이음선 위치, 한 번 바운드, 벽 가운데 구역, 포핸드, 연속 8회 중 목표 5회, 공이 옆으로 가서 종료.” 다음에는 목표나 거리 중 하나만 바꾸거나 같은 조건을 재현합니다. 공과 거리를 모두 바꿨다면 이전 횟수와 직접 비교하지 않습니다."
      ]
    },
    {
      "id": "transfer",
      "title": "벽 기록을 경기 실력으로 바꾸어 해석하지 않습니다",
      "paragraphs": [
        "벽에서는 상대가 공을 선택하지 않습니다. 벽을 향해 보낸 공의 반사가 돌아오므로 상대의 서브, 포지션, 점수에 따른 판단을 따로 다뤄야 합니다. 긴 연속 기록이 경기에서의 깊이·방향·포인트 획득을 자동으로 증명하지는 않습니다.",
        "다음 파트너 연습에서는 같은 목표 한 가지를 정해 코트 안에 보낼 수 있는지 확인하세요. 예를 들어 편한 속도의 협력 랠리에서 목표 구역을 정하고, 벽에서 사용한 준비 기준을 적용할 수 있는지 메모합니다. 벽 기록과 코트 기록은 표를 나눠 두고, 잘되지 않은 이유를 벽 횟수 부족 하나로 단정하지 않습니다."
      ]
    }
  ],
  "checklist": [
    "시설의 사용 허용과 주변 사람·장애물을 확인했다.",
    "공·위치·바운드·목표 조건을 정했다.",
    "공을 쫓아 무리하게 이어 치지 않을 재시작 기준을 정했다.",
    "연속 접촉과 목표 성공을 구분하고 다음 파트너 연습의 확인 질문을 적었다."
  ],
  "faq": [
    {
      "question": "벽에서 오래 이어 치면 경기력도 좋아졌다고 볼 수 있나요?",
      "answer": "같은 조건의 벽 연습 기록으로는 사용할 수 있지만 경기력 전체의 지표는 아닙니다. 상대가 있는 코트에서 목표와 판단을 따로 확인하세요."
    },
    {
      "question": "일반 테니스 공을 써야 하나요?",
      "answer": "사용 공간의 규정과 자신의 조절 가능성을 먼저 확인하세요. 인용한 청소년 연습안에는 폼볼 예시도 있습니다. 공을 바꿨다면 그 기록을 이전 공의 기록과 같은 조건으로 비교하지 마세요."
    }
  ],
  "references": [
    {
      "url": "https://www.usta.com/en/home/stay-current/eastern/youth-progression-at-home.html",
      "label": "USTA: Youth Progression at Home — 청소년 벽 연습 예시"
    },
    {
      "url": "https://www.usta.com/content/dam/usta/content-fragments/tennis-service-center/assets/pdfs/Net-Generation-Practice-Plan-Orange.pdf",
      "label": "USTA: Net Generation Orange 연습안 — 폼볼 교대 활동"
    }
  ],
  "nextAction": "허용된 연습벽에서 반복할 조건 한 가지와 중단 기준을 정하고 한 줄 기록을 남기세요. 다음 코트 연습에서는 같은 목표를 파트너와 별도로 확인합니다.",
  "utility": "/utility/practice-wall-drill-planner",
  "utilityLabel": "벽치기 드릴 플래너"
} as const;

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <article className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-gray-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">Training</p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">벽치기 연습: 목표 구역·포핸드/백핸드 전환·기록 방법</h1>
        <p className="mb-6 text-base leading-7 text-gray-600 dark:text-gray-300">벽치기는 반복 접촉을 연습하는 도구입니다. 허용된 공간에서 목표 구역과 중단·재시작 기준을 정하고, 같은 조건의 기록과 파트너 연습을 구분해 활용하세요.</p>

        <div className="mb-8 rounded-2xl bg-emerald-50 p-6 dark:bg-emerald-950/30">
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">핵심 요약</h2>
          <p className="leading-7 text-gray-700 dark:text-gray-300">{content.intro}</p>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{content.summaryBox}</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">이 글에서 먼저 가져갈 것</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {content.keyPoints.map((item) => (
              <li key={item} className="rounded-xl border border-gray-100 px-4 py-3 dark:border-gray-800">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-10">
          {content.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-7 text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-emerald-100 bg-white p-6 dark:border-emerald-900/40 dark:bg-gray-950">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">실전 체크리스트</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {content.checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {content.faq.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">자주 묻는 질문</h2>
            <div className="space-y-4">
              {content.faq.map((item) => (
              <div key={item.question} className="rounded-2xl border border-gray-100 p-5 dark:border-gray-800">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{item.question}</h3>
                <p className="leading-7 text-gray-700 dark:text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
        )}
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">출처와 적용 범위</h2>
          <p className="mb-3 leading-7 text-gray-700 dark:text-gray-300">자료 확인: 2026년 10월 20일. 아래 자료는 청소년 활동 예시이며 성인 경기력 향상의 근거로 일반화하지 않습니다.</p>
          <ul className="list-disc space-y-3 pl-5">
            {content.references.map((reference) => (
              <li key={reference.url}>
                <a href={reference.url} target="_blank" rel="noopener noreferrer" className="break-words text-emerald-700 underline dark:text-emerald-300">{reference.label}</a>
              </li>
            ))}
          </ul>
        </section>
        <div className="mt-10 rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/30">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">다음 액션</h2>
          <p className="mb-4 text-sm leading-6 text-gray-700 dark:text-gray-300">{content.nextAction}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={content.utility} className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
              {content.utilityLabel}
            </Link>
            <Link href="/utility/training-planner" className="rounded-full border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600">
              훈련 플래너
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
