import Article from "@/components/blog/Article";
import TOC from "@/components/blog/TOC";
import { FAQ } from "@/components/blog/FAQ";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata = {
  title: "테니스 레슨 비용 2026 | 실내·실외·개인·그룹 가격 비교",
  description:
    "2026년 테니스 레슨 비용을 실내·실외, 개인·그룹, 코트비 포함 여부까지 나눠 비교합니다. 첫 달 예산과 등록 전 확인 질문도 정리했습니다.",
  keywords: [
    "테니스 레슨 비용",
    "테니스 레슨비",
    "실내 테니스 가격",
    "테니스 개인 레슨",
    "테니스 그룹 레슨",
    "테니스 코트비",
  ],
  alternates: {
    canonical: "https://www.tennisfrens.com/blog/tennis-lesson-cost-guide",
  },
  openGraph: {
    title: "테니스 레슨 비용 2026 | 실내·실외·개인·그룹 가격 비교",
    description:
      "테니스 레슨비를 월 예산, 코트비, 장비비, 환불 조건까지 나눠 현실적으로 비교합니다.",
    url: "https://www.tennisfrens.com/blog/tennis-lesson-cost-guide",
    siteName: "TennisFriends",
    locale: "ko_KR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "테니스 레슨 비용 2026 | 실내·실외·개인·그룹 가격 비교",
    description:
      "실내 테니스 가격, 개인 레슨, 그룹 레슨, 코트비 포함 여부를 한 번에 확인하세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: "quick-answer", text: "테니스 레슨 비용 빠른 답변", depth: 2 },
  { id: "price-table", text: "개인·그룹·실내·실외 가격 비교", depth: 2 },
  { id: "public-court", text: "공공코트 요금에서 배울 점", depth: 2 },
  { id: "hidden-costs", text: "첫 달 예산에 빠지는 비용", depth: 2 },
  { id: "choose", text: "내 상황별 선택 기준", depth: 2 },
  { id: "checklist", text: "등록 전 확인 질문", depth: 2 },
  { id: "faq", text: "테니스 레슨 비용 FAQ", depth: 2 },
];

const faqs = [
  {
    q: "테니스 레슨 비용은 보통 얼마부터 생각해야 하나요?",
    a: "입문자는 주 2회 기준 월 10만 원대 후반부터 30만 원대까지 보는 것이 현실적입니다. 공공·실외·그룹은 낮아지고, 실내·개인·볼머신 포함 조건은 높아집니다.",
  },
  {
    q: "실내 테니스 가격이 실외보다 비싼 이유는 무엇인가요?",
    a: "실내는 날씨 영향을 덜 받고 조명, 냉난방, 볼머신, 샤워실, 상주 코치 운영비가 가격에 반영되는 경우가 많습니다.",
  },
  {
    q: "개인 레슨과 그룹 레슨 중 무엇이 더 낫나요?",
    a: "자세 교정이 급하면 개인 레슨, 비용 부담을 줄이고 랠리 감각을 익히려면 2:1 또는 그룹 레슨이 좋습니다. 처음 한 달은 개인 1~2회와 그룹을 섞는 방식도 효율적입니다.",
  },
  {
    q: "레슨비에 코트비가 항상 포함되나요?",
    a: "아닙니다. 실내 센터는 포함인 경우가 많지만 공공코트나 야외 코트 기반 레슨은 코트 대관료가 별도일 수 있습니다. 등록 전 반드시 확인해야 합니다.",
  },
  {
    q: "우천 취소나 결석 보강은 어떻게 확인해야 하나요?",
    a: "시설마다 다릅니다. 공공시설도 운영자 귀책, 천재지변, 개인 결석에 따라 환불·보강 기준이 다르게 적혀 있으므로 신청 전 환불 규정을 읽어야 합니다.",
  },
];

export default function TennisLessonCostGuidePage() {
  return (
    <Article
      title="테니스 레슨 비용 2026 | 실내·실외·개인·그룹 가격 비교"
      excerpt="테니스 레슨비는 레슨 시간보다 코트비 포함 여부, 개인·그룹 구성, 실내 시설 조건에서 차이가 납니다. 첫 달 예산을 기준으로 현실적인 선택 기준을 정리했습니다."
      date="2026-06-02"
      slug="tennis-lesson-cost-guide"
      author="TennisFriends"
      image="/images/blog/tennis-racket-selection-guide.png"
    >
      <div className="mb-8 rounded-lg border border-blue-100 bg-blue-50 p-5 dark:border-blue-900/50 dark:bg-blue-950/30">
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            레슨비
          </Badge>
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
            코트비 포함 확인
          </Badge>
        </div>
        <p className="article-summary leading-8 text-slate-700 dark:text-slate-300">
          2026년에 테니스를 시작한다면 레슨비만 보지 말고 첫 달 총액을
          봐야 합니다. 같은 주 2회 레슨이라도 공공 실외 코트, 사설 실내
          센터, 1:1 개인 레슨, 2:1 그룹 레슨에 따라 월 예산이 크게 달라집니다.
          아래 기준은 공개 요금표와 운영 안내를 바탕으로 정리한 실전 예산
          가이드이며, 실제 등록 전에는 시설별 최신 공지와 환불 규정을 다시
          확인해야 합니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="quick-answer" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">테니스 레슨 비용 빠른 답변</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-2 font-bold text-blue-700 dark:text-blue-300">
              가장 저렴한 시작
            </h3>
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
              공공 실외 코트나 지역 체육시설의 그룹 강습을 찾습니다. 월 10만
              원대 초반부터 가능한 사례가 있지만 모집이 추첨제이거나 자리가
              적을 수 있습니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-2 font-bold text-emerald-700 dark:text-emerald-300">
              가장 빠른 교정
            </h3>
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
              1:1 개인 레슨입니다. 자세 피드백이 빠르지만 월 20만~30만 원대
              이상으로 올라가기 쉽고, 코트비가 별도인지 확인해야 합니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-2 font-bold text-purple-700 dark:text-purple-300">
              가장 균형 잡힌 선택
            </h3>
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
              2:1 레슨 또는 소규모 그룹입니다. 비용은 낮추면서 코치 피드백과
              랠리 경험을 모두 얻을 수 있어 입문 첫 2~3개월에 효율적입니다.
            </p>
          </div>
        </div>
      </section>

      <section id="price-table" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">
          개인·그룹·실내·실외 가격 비교
        </h2>
        <p className="mb-4 leading-8 text-slate-700 dark:text-slate-300">
          테니스 레슨 비용은 “레슨 20분인지 30분인지”, “월 4회인지 8회인지”,
          “코트비와 볼머신이 포함되는지”에 따라 다릅니다. 그래서 가격을
          비교할 때는 월 총액보다 1회당 실제 수업 시간과 포함 항목을 함께
          봐야 합니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-200 p-3 dark:border-slate-700">
                  유형
                </th>
                <th className="border border-slate-200 p-3 dark:border-slate-700">
                  월 예산 감각
                </th>
                <th className="border border-slate-200 p-3 dark:border-slate-700">
                  장점
                </th>
                <th className="border border-slate-200 p-3 dark:border-slate-700">
                  확인할 점
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold dark:border-slate-700">
                  공공·실외 그룹
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  낮은 편
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  비용 부담이 적고 코트 감각을 빨리 익힘
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  추첨, 우천 취소, 별도 대관 여부
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold dark:border-slate-700">
                  공공·실외 1:1
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  중간
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  개인 교정이 빠르고 실전 코트 적응이 좋음
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  강습 허용 여부, 코트비, 양도 금지
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold dark:border-slate-700">
                  사설·실내 2:1
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  중간~높은 편
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  날씨 영향이 적고 보강 운영이 안정적
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  볼머신, 연습 시간, 환불 조건
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold dark:border-slate-700">
                  사설·실내 1:1
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  높은 편
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  자세 교정 속도가 빠르고 수업 밀도가 높음
                </td>
                <td className="border border-slate-200 p-3 dark:border-slate-700">
                  실제 레슨 시간, 코치 변경, 장기 등록 조건
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="public-court" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">
          공공코트 요금에서 배울 점
        </h2>
        <p className="mb-4 leading-8 text-slate-700 dark:text-slate-300">
          공공시설 자료는 “코트비가 얼마인지”, “결제 제한 시간이 있는지”,
          “예약자 본인 이용 원칙이 있는지”를 확인하기 좋습니다. 예를 들어
          서울 공공서비스예약의 보라매공원 테니스장 안내에는 기본 2시간
          이용요금, 결제 기한, 예약 가능 기간, 양도 금지 안내가 함께 적혀
          있습니다. 춘천 송암테니스장 2026년 강습 공지는 주 2회·월 8회
          기준 20분 레슨의 1:1, 2:1 금액과 환불 기준을 공개합니다.
        </p>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
          <h3 className="mb-2 font-bold text-amber-900 dark:text-amber-200">
            핵심은 “레슨비 + 코트 이용 조건”입니다
          </h3>
          <p className="leading-8 text-slate-700 dark:text-slate-300">
            레슨비가 싸 보여도 코트비가 별도면 총액은 올라갑니다. 반대로
            사설 실내 센터가 비싸 보여도 수업 후 연습 시간, 볼머신, 실내
            환경, 보강 시스템이 포함되면 체감 가치는 달라질 수 있습니다.
          </p>
        </div>
      </section>

      <section id="hidden-costs" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">첫 달 예산에 빠지는 비용</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {[
            ["장비", "라켓, 테니스화, 오버그립, 운동복은 첫 달 비용을 크게 올립니다. 처음부터 고가 라켓을 사기보다 대여 가능 여부를 확인하세요."],
            ["코트비", "야외·공공 코트 기반 레슨은 대관료가 별도일 수 있습니다. 2시간 기본 요금과 야간·주말 할증을 같이 봐야 합니다."],
            ["스트링", "입문자는 자주 끊지 않더라도 2~3개월 뒤 스트링 교체비가 생깁니다. 라켓 구매 예산에 같이 넣는 편이 안전합니다."],
            ["결석·환불", "개인 사정 결석은 보강이 안 되는 시설이 많습니다. 우천, 공휴일, 시설 공사 때 보강 또는 환불이 어떻게 되는지 확인하세요."],
          ].map(([label, text]) => (
            <li
              key={label}
              className="rounded-lg border-l-4 border-blue-400 bg-white p-4 shadow-sm dark:bg-slate-900"
            >
              <strong className="mb-1 block">{label}</strong>
              <span className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="choose" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">내 상황별 선택 기준</h2>
        <div className="space-y-4">
          <p className="leading-8 text-slate-700 dark:text-slate-300">
            완전 입문자는 “가장 싼 레슨”보다 “첫 달에 계속 나갈 수 있는
            레슨”을 고르는 편이 낫습니다. 퇴근 후 이동 거리가 길거나 우천
            취소가 스트레스라면 실내가 더 오래 갑니다. 반대로 주말 시간이
            넉넉하고 비용을 줄이고 싶다면 공공 실외 코트와 그룹 강습이
            좋습니다.
          </p>
          <p className="leading-8 text-slate-700 dark:text-slate-300">
            이미 랠리가 되는 중급자는 1:1 레슨을 매주 받기보다 약점 교정
            목적의 개인 레슨과 실제 게임 시간을 섞는 편이 효율적입니다.
            포핸드, 서브, 풋워크처럼 한 가지 문제를 정해 코치에게 요청하면
            같은 비용으로 얻는 피드백 밀도가 높아집니다.
          </p>
        </div>
      </section>

      <section id="checklist" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">등록 전 확인 질문</h2>
        <ol className="list-decimal space-y-2 pl-5 leading-8 text-slate-700 dark:text-slate-300">
          <li>월 수업 횟수와 1회 실제 레슨 시간은 몇 분인가?</li>
          <li>코트비, 볼머신, 연습 시간, 공 사용료가 포함되어 있는가?</li>
          <li>우천·공휴일·개인 결석 때 보강 또는 환불 기준은 무엇인가?</li>
          <li>코치 변경, 반 변경, 장기 등록 할인 조건은 있는가?</li>
          <li>공공코트라면 개인 강습이 허용되는 운영 방식인가?</li>
        </ol>
      </section>

      <section className="mb-10 rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-3 text-xl font-bold">참고한 공개 기준</h2>
        <ul className="space-y-2 text-sm leading-7">
          <li>
            <a
              href="https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S251210151352980059"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline dark:text-blue-300"
            >
              서울 공공서비스예약 보라매공원 테니스장 안내
            </a>
          </li>
          <li>
            <a
              href="https://rev.cuc.or.kr/File/bd8ac9eae4cb28af6840ae354de286d7"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline dark:text-blue-300"
            >
              춘천도시공사 2026년 송암테니스장 강습 모집 안내
            </a>
          </li>
          <li>
            <Link
              href="/utility/price-comparison"
              className="text-blue-700 underline dark:text-blue-300"
            >
              테니스 장비·레슨 예산을 함께 비교하는 도구
            </Link>
          </li>
        </ul>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">테니스 레슨 비용 FAQ</h2>
        <FAQ items={faqs} />
      </section>
    </Article>
  );
}
