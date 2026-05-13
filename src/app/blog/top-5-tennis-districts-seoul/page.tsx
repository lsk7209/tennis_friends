import Link from "next/link";
import Article from "@/components/blog/Article";
import TOC from "@/components/blog/TOC";
import { FAQ } from "@/components/blog/FAQ";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const title = "서울 테니스 생활권 TOP 5 — 동호회·레슨·퇴근 후 코트";
const excerpt =
  "서울에서 오래 테니스를 치려면 유명 코트보다 생활권이 중요합니다. 송파, 강남·서초, 마포·용산, 양천, 노원·도봉권의 장단점을 비교했습니다.";

export const metadata = {
  title: "서울 테니스 생활권 TOP 5 | 동호회·레슨·퇴근 후 코트",
  description:
    "송파, 강남·서초, 마포·용산, 양천, 노원·도봉권의 테니스 생활권 장단점과 입문자 선택 기준을 정리했습니다.",
  keywords: [
    "서울 테니스 동호회",
    "서울 테니스 생활권",
    "테니스 레슨 지역",
    "퇴근 후 테니스",
    "서울 테니스 추천",
  ],
  alternates: {
    canonical: "https://www.tennisfrens.com/blog/top-5-tennis-districts-seoul",
  },
  openGraph: {
    title,
    description: excerpt,
    url: "https://www.tennisfrens.com/blog/top-5-tennis-districts-seoul",
    siteName: "TennisFriends",
    locale: "ko_KR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: excerpt,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: "why-district", text: "생활권이 중요한 이유", depth: 2 },
  { id: "rank-table", text: "서울 테니스 생활권 TOP 5", depth: 2 },
  { id: "beginner-choice", text: "입문자 선택 기준", depth: 2 },
  { id: "club-lesson", text: "동호회와 레슨을 같이 보는 법", depth: 2 },
  { id: "cannibalization", text: "예약 가이드와 다르게 읽는 법", depth: 2 },
];

const districts = [
  {
    name: "송파권",
    fit: "대형 코트 경험, 주말 모임, 경기 감각",
    note: "올림픽공원 인근 수요가 강해 예약 경쟁은 높지만 동호회와 경기 문화가 풍부합니다.",
  },
  {
    name: "강남·서초권",
    fit: "퇴근 후 레슨, 실내 대체, 개인 코칭",
    note: "민간 레슨 선택지가 많고 접근성이 좋습니다. 비용과 주차 혼잡은 먼저 계산해야 합니다.",
  },
  {
    name: "마포·용산권",
    fit: "직장인 야간 운동, 한강권 야외 코트",
    note: "퇴근 후 이동이 편한 편입니다. 한강권 코트는 바람과 우천 취소 기준을 함께 봐야 합니다.",
  },
  {
    name: "양천권",
    fit: "서부권 입문자, 구립 시설, 강습 병행",
    note: "목동테니스장처럼 강습과 대관을 같이 볼 수 있는 시설이 있어 반복성이 좋습니다.",
  },
  {
    name: "노원·도봉권",
    fit: "주거지 기반 반복 연습, 비용 효율",
    note: "도심권보다 이동 부담이 낮은 사람에게 좋습니다. 구립 시설 공지와 평일 야간 시간을 우선 확인하세요.",
  },
];

const faqs = [
  {
    q: "서울에서 테니스를 시작하기 좋은 지역은 어디인가요?",
    a: "집이나 직장에서 30분 안에 도착하는 지역이 가장 좋습니다. 입문자는 시설 규모보다 같은 요일, 같은 시간에 반복해서 갈 수 있는지가 더 중요합니다.",
  },
  {
    q: "동호회는 언제부터 들어가는 게 좋나요?",
    a: "기본 랠리가 5회 이상 이어지고 서브 규칙을 이해한 뒤가 좋습니다. 너무 빨리 들어가면 경기보다 긴장과 공 줍기에 시간을 쓰기 쉽습니다.",
  },
  {
    q: "이 글과 서울 테니스장 추천 글은 무엇이 다른가요?",
    a: "이 글은 지역별 생활권과 테니스 문화 선택 기준을 다룹니다. 실제 예약 경로와 코트별 체크리스트는 서울 테니스장 추천 7곳 글에서 확인하는 구조입니다.",
  },
];

export default function Top5TennisDistrictsSeoulPage() {
  return (
    <Article
      slug="top-5-tennis-districts-seoul"
      date="2026-05-03"
      title={title}
      excerpt={excerpt}
      category="테니스 생활권"
      readingTime="8분"
    >
      <div className="mb-8 rounded-lg bg-slate-50 p-5 dark:bg-slate-900">
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
            서울 테니스
          </Badge>
          <Badge className="bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200">
            생활권 분석
          </Badge>
        </div>
        <p className="m-0 text-base leading-relaxed text-slate-700 dark:text-slate-200">
          서울 테니스 생활권은 코트 숫자만으로 정해지지 않습니다. 퇴근 후 이동,
          레슨 선택지, 동호회 분위기, 우천 시 대체 코트, 주차와 대중교통까지 합쳐
          3개월 이상 지속 가능한 지역을 고르는 것이 핵심입니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="why-district" className="mt-10">
        <h2>생활권이 중요한 이유</h2>
        <p>
          테니스는 한 번 좋은 코트에 가는 운동이 아니라 같은 시간대에 반복해서
          몸을 만드는 운동입니다. 왕복 이동이 길면 레슨을 빠지기 쉽고, 예약에
          실패하면 라켓을 잡는 횟수 자체가 줄어듭니다. 그래서 서울에서는 “어디가
          제일 유명한가”보다 “내 생활 반경에서 꾸준히 갈 수 있는가”가 먼저입니다.
        </p>
      </section>

      <section id="rank-table" className="mt-10">
        <h2>서울 테니스 생활권 TOP 5</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {districts.map((district, index) => (
            <Card key={district.name} className="rounded-lg">
              <CardContent className="p-5">
                <p className="mb-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  {index + 1}. {district.name}
                </p>
                <h3 className="mb-2 text-xl font-bold text-slate-950 dark:text-white">
                  {district.fit}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {district.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="beginner-choice" className="mt-10">
        <h2>입문자 선택 기준</h2>
        <p>
          첫 90일은 실력보다 출석률이 중요합니다. 집 근처 1곳, 직장 근처 1곳,
          주말에 갈 수 있는 코트 1곳을 후보로 두고 예약 가능 시간대를 기록하세요.
          실내 코트만 고르면 비용이 부담되고, 야외 코트만 고르면 날씨에 흔들릴 수
          있으므로 두 가지를 섞는 편이 현실적입니다.
        </p>
      </section>

      <section id="club-lesson" className="mt-10">
        <h2>동호회와 레슨을 같이 보는 법</h2>
        <p>
          레슨은 자세를 만들고, 동호회는 경기 감각을 만듭니다. 다만 초보자가
          동호회부터 들어가면 공을 많이 못 치는 경우가 있습니다. 레슨 4~8주 동안
          포핸드, 백핸드, 서브 규칙을 익힌 뒤 같은 생활권의 초급 모임을 찾는
          순서가 안정적입니다.
        </p>
      </section>

      <section id="cannibalization" className="mt-10">
        <h2>예약 가이드와 다르게 읽는 법</h2>
        <p>
          이 글은 지역 선택용입니다. 실제 코트별 예약 경로, 요금, 취소 기준은{" "}
          <Link href="/blog/seoul-best-tennis-courts">
            서울 테니스장 추천 7곳
          </Link>
          에서 확인하세요. 공공 코트 예약은{" "}
          <a href="https://yeyak.seoul.go.kr" rel="noopener noreferrer">
            서울시 공공서비스예약
          </a>
          과 각 시설 공지까지 같이 보는 것이 안전합니다.
        </p>
      </section>

      <FAQ items={faqs} jsonLdId="district-faq-jsonld" />
    </Article>
  );
}
