import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Article from "@/components/blog/Article";
import PlayerSearchAliasSection from '@/components/players/PlayerSearchAliasSection';
import TOC from "@/components/blog/TOC";
import { FAQ } from "@/components/blog/FAQ";
import CTA from "@/components/blog/CTA";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { getPlayerSearchSeo } from '@/lib/player-search-seo';
import {
  Trophy,
  Target,
  TrendingUp,
  Award,
  Heart,
  Zap,
  Star,
  CheckCircle,
  Music,
} from "lucide-react";

const SLUG = 'arthur-landercknech';
const playerSearchSeo = getPlayerSearchSeo(SLUG);

export const metadata: Metadata = {
  title: playerSearchSeo?.title ?? "아르튀르 랭데르크네슈 프로필 | 서브·전적",
  description:
    playerSearchSeo?.description ?? ("아르튀르 랭데르크네슈(Arthur Rinderknech)의 ATP 랭킹, 서브 강점, 주요 전적, 플레이 스타일과 라켓 정보를 한눈에 정리했습니다."),
  keywords: [
    ...(playerSearchSeo?.aliases ?? []),
    "아르튀르 랭데르크네슈",
    "랭데르크네슈",
    "Arthur Rinderknech",
    "Arthur Rinderknecht",
    "Arthur Landercknech",
    "테니스",
    "ATP",
    "프랑스 테니스",
    "서브",
    "포핸드",
    "텍사스 A&M",
    "늦깎이 선수",
  ],
  alternates: {
    canonical: "https://www.tennisfrens.com/players/arthur-landercknech",
  },
  openGraph: {
    title: "아르튀르 랭데르크네슈 프로필 | 서브·전적",
    description:
      "아르튀르 랭데르크네슈의 ATP 랭킹, 서브 강점, 주요 전적, 플레이 스타일과 라켓 정보를 한눈에 정리했습니다.",
    url: "https://www.tennisfrens.com/players/arthur-landercknech",
    siteName: "TennisFriends",
    locale: "ko_KR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "아르튀르 랭데르크네슈 프로필 | 서브·전적",
    description:
      "아르튀르 랭데르크네슈의 ATP 랭킹, 서브 강점, 주요 전적, 플레이 스타일과 라켓 정보를 한눈에 정리했습니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  {
    id: "why-notable",
    text: "아르튀르 랭데르크네슈, 왜 주목받는 선수인가?",
    depth: 2,
  },
  {
    id: "player-profile",
    text: "아르튀르 랭데르크네슈 선수 프로필",
    depth: 2,
  },
  {
    id: "play-style",
    text: "아르튀르 랭데르크네슈의 플레이 스타일",
    depth: 2,
  },
  {
    id: "signature-match",
    text: "커리어 최고의 경기: 2022 애들레이드 결승",
    depth: 2,
  },
  {
    id: "fan-appeal",
    text: "팬들이 랭데르크네슈에게 끌리는 이유",
    depth: 2,
  },
  {
    id: "recent-form",
    text: "랭데르크네슈의 최근 경기력",
    depth: 2,
  },
  {
    id: "summary",
    text: "아르튀르 랭데르크네슈, 한 문장으로 정리하면?",
    depth: 2,
  },
];

const faqs = [
  {
    q: "아르튀르 랭데르크네슈의 정확한 이름 발음은 어떻게 되나요?",
    a: "성은 독일계 이름인 Rinderknech(린더크네슈)입니다. 발음하기 어려워 팬들은 보통 '아르튀르'라고 부릅니다. URL에 사용된 'Landercknech'는 데이터 오류로 인한 표기이며, 실제 이름은 Arthur Rinderknech입니다.",
  },
  {
    q: "아르튀르 랭데르크네슈는 왜 늦깎이 선수라고 불리나요?",
    a: "미국 텍사스 A&M 대학에서 4년간 대학 테니스(NCAA)를 마친 뒤 프로에 전향했기 때문입니다. 프로 데뷔가 20대 중반이었지만, 성숙한 멘탈과 완성된 피지컬로 빠르게 Top 50에 진입했습니다.",
  },
  {
    q: "랭데르크네슈의 어머니도 테니스 선수였나요?",
    a: "네, 어머니가 전 WTA 프로 선수였습니다. 테니스 집안에서 자란 덕분에 어릴 때부터 고급 코칭을 받을 수 있었으며, 미국 유학을 선택한 것도 테니스 발전을 위한 전략적 결정이었습니다.",
  },
  {
    q: "랭데르크네슈의 플레이 스타일과 주무기는 무엇인가요?",
    a: "196cm의 큰 키에서 내려꽂는 강력한 서브가 핵심 무기입니다. 특히 플랫 서브로 에이스를 양산하며, 짧게 넘어온 리턴을 포핸드로 마무리하는 공격적인 패턴을 선호합니다. 원핸드 백핸드를 사용합니다.",
  },
  {
    q: "랭데르크네슈의 커리어 최고 성적은 무엇인가요?",
    a: "2022년 애들레이드 인터내셔널 2에서 생애 첫 ATP 투어 결승에 진출했습니다. 이 활약으로 세계 랭킹 50위권에 안정적으로 진입하며 투어 레벨 선수임을 증명했습니다.",
  },
];

export default function ArthurLandercknechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="아르튀르 랭데르크네슈"
        excerpt="텍사스 A&M 대학을 평정하고 ATP 투어로 돌아온 프랑스의 늦깎이 파워 서버"
      >
        <BreadcrumbSchema
          items={[
            { name: "홈", item: "https://www.tennisfrens.com" },
            { name: "선수", item: "https://www.tennisfrens.com/players" },
            {
              name: "아르튀르 랭데르크네슈",
              item: "https://www.tennisfrens.com/players/arthur-landercknech",
            },
          ]}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <PlayerSearchAliasSection slug={SLUG} />
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "테니스",
              "아르튀르 랭데르크네슈",
              "선수 프로필",
              "프랑스",
              "늦깎이 스타",
              "빅 서버",
            ].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <TOC items={tocItems} />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-notable">
              아르튀르 랭데르크네슈, 왜 주목받는 선수인가?
            </h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  미국 NCAA 대학 테니스를 평정하고 20대 중반에 프로로 돌아온
                  프랑스의 늦깎이 파워 서버 — 성숙한 멘탈과 강력한 서브로 ATP
                  Top 50에 정착했다.
                </p>
              </div>
            </blockquote>
            <p>
              아르튀르 랭데르크네슈(Arthur Rinderknech)는 프랑스 생가생 출신의
              프로 테니스 선수다. 프랑스 선수로는 드물게 미국 텍사스 A&M
              대학으로 유학을 떠나 4년간 NCAA 대학 테니스를 했으며, 주장으로서
              팀을 이끌며 대학 무대를 평정했다. 196cm의 큰 키에서 뿜어져 나오는
              강력한 서브와 공격적인 포핸드로 빠르게 ATP Top 50에 정착했다.
            </p>
            <p>
              어머니가 전 WTA 프로 선수였던 테니스 가문 출신으로, 어릴 때부터
              고급 환경에서 테니스를 익혔다. 주니어 시절 큰 두각을 나타내지
              못했지만 미국 유학이라는 선택이 신의 한 수가 되어, 성숙한 멘탈과
              완성된 피지컬로 무장하고 투어에 복귀했다.
            </p>

            <h2 id="player-profile">아르튀르 랭데르크네슈 선수 프로필</h2>

            <div className="not-prose my-6 p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">
                  기본 정보
                </h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-700 dark:text-gray-300">
                      국적:
                    </strong>{" "}
                    <span className="text-gray-600 dark:text-gray-400">
                      🇫🇷 프랑스 (생가생 출신)
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-700 dark:text-gray-300">
                      신장:
                    </strong>{" "}
                    <span className="text-gray-600 dark:text-gray-400">
                      196cm
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-700 dark:text-gray-300">
                      플레이 스타일:
                    </strong>{" "}
                    <span className="text-gray-600 dark:text-gray-400">
                      파워 서버 & 공격형 (오른손, 원핸드 백핸드)
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-700 dark:text-gray-300">
                      최고 성적:
                    </strong>{" "}
                    <span className="text-gray-600 dark:text-gray-400">
                      2022 애들레이드 인터내셔널 2 결승
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-700 dark:text-gray-300">
                      학력:
                    </strong>{" "}
                    <span className="text-gray-600 dark:text-gray-400">
                      미국 텍사스 A&M 대학 (NCAA 테니스팀 주장)
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-4 h-4 text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-700 dark:text-gray-300">
                      가족:
                    </strong>{" "}
                    <span className="text-gray-600 dark:text-gray-400">
                      어머니 전 WTA 프로 선수
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <h2 id="play-style">아르튀르 랭데르크네슈의 플레이 스타일</h2>
            <p>
              <strong>핵심 무기: 서브, 포핸드, 그리고 배짱</strong>
            </p>
            <p>
              196cm의 장신에서 나오는 플랫 서브는 에이스를 양산하는 그의 가장
              강력한 무기다. 짧게 넘어온 리턴을 공격적인 포핸드로 마무리하는
              서브-앤-포핸드 패턴으로 포인트를 마무리하는 것을 선호한다. 원핸드
              백핸드를 구사하며, 대학 시절 복식 경험이 많아 네트 플레이와 발리
              능력도 뛰어나다.
            </p>

            <div className="not-prose my-6 p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">
                  🤠 랭데르크네슈의 3가지 텍사스 스타일
                </h4>
              </div>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">1.</span>
                  <span>
                    <strong>대포알 서브:</strong> 큰 키를 이용한 플랫 서브는
                    에이스를 양산. 서비스 게임을 지키는 가장 큰 원동력.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">2.</span>
                  <span>
                    <strong>공격적인 리턴:</strong> 상대의 세컨드 서브를
                    베이스라인 안쪽에서 받아쳐 즉시 주도권을 가져오는 패턴.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">3.</span>
                  <span>
                    <strong>두둑한 배짱:</strong> 대학 단체전 수백 번의 경험으로
                    타이브레이크나 접전에서도 흔들리지 않는 강철 멘탈.
                  </span>
                </li>
              </ul>
            </div>

            <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "서브", score: "9.0" },
                { label: "포핸드", score: "8.5" },
                { label: "멘탈", score: "8.5" },
                { label: "네트 플레이", score: "8.0" },
                { label: "이동", score: "7.5" },
                { label: "백핸드", score: "7.0" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-center border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.score}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    / 10
                  </div>
                </div>
              ))}
            </div>

            <h2 id="signature-match">
              커리어 최고의 경기: 2022 애들레이드 인터내셔널 2 결승
            </h2>
            <div className="not-prose my-6 p-5 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">
                  2022 애들레이드 인터내셔널 2 (2022년 1월)
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                생애 첫 ATP 투어 결승 진출. 비록 우승은 놓쳤지만, 이 대회
                활약으로 세계 랭킹 50위권에 안정적으로 진입하며 ATP 투어 레벨
                선수임을 완전히 증명했다. 대학을 거쳐 프로에 온 늦깎이 선수의
                가능성을 세상에 알린 경기.
              </p>
            </div>
            <p>
              랭데르크네슈는 이 대회 이후 데이비스컵 등 국가대항전에서 프랑스
              대표로 자주 선발되며, 투어에서도 꾸준히 2~3회전에 진출하는
              안정적인 실력을 보여주고 있다.
            </p>

            <h2 id="fan-appeal">팬들이 랭데르크네슈에게 끌리는 이유</h2>
            <div className="not-prose my-6 p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-400 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-800 dark:text-gray-200 mb-0">
                  <strong>&ldquo;록스타 비주얼&rdquo;</strong> — 긴 머리와 수염,
                  196cm의 큰 키는 마치 록 밴드 보컬을 연상시킵니다. 코트
                  위에서의 카리스마 넘치는 모습과 파워풀한 플레이가 팬들의
                  마음을 사로잡습니다.
                </p>
              </div>
            </div>
            <p>
              특히 미국 텍사스에서 4년간 생활했기 때문에 영어에 능통하고 미국
              문화에 익숙하다. 미국 대회에서 홈 선수 같은 응원을 받기도 하며,
              인터뷰에서 유머러스하고 솔직한 모습을 보여줘 미디어와 팬들
              사이에서 호감을 얻고 있다.
            </p>

            <h2 id="recent-form">랭데르크네슈의 최근 경기력</h2>
            <p>
              <strong>&ldquo;믿고 쓰는 프랑스 용병&rdquo;</strong>
            </p>
            <p>
              데이비스컵 등 국가대항전에서 프랑스 대표로 자주 선발되며 팀의 핵심
              전력으로 활약하고 있다. 투어에서도 꾸준히 2~3회전에 진출하며 Top
              50~70 사이를 안정적으로 유지하고 있다. 강력한 서브 덕분에 빠른
              서피스(하드·잔디)에서 특히 위력을 발휘하며, 빅 서버들을 상대로도
              뒤지지 않는 경기력을 보여준다.
            </p>

            <h2 id="summary">아르튀르 랭데르크네슈, 한 문장으로 정리하면?</h2>
            <p>
              아르튀르 랭데르크네슈는 미국 텍사스 A&M 대학을 평정하고 돌아온
              프랑스의 늦깎이 파워 서버로, 196cm 장신에서 뿜어져 나오는 강력한
              서브와 성숙한 멘탈로 ATP 투어 Top 50에 당당히 자리잡은
              &lsquo;록스타 스타일의 테니스 선수&rsquo;다.
            </p>
          </div>

          <FAQ items={faqs} />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
