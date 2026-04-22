import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Article from "@/components/blog/Article";
import TOC from "@/components/blog/TOC";
import { FAQ } from "@/components/blog/FAQ";
import CTA from "@/components/blog/CTA";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import {
  Trophy,
  Target,
  TrendingUp,
  Award,
  Heart,
  Brain,
  Zap,
  Star,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "야닉 한프만 완전 분석 | 청각 장애 극복·플레이 스타일·ATP 프로필",
  description:
    "야닉 한프만(Yannick Hanfmann)의 청각 장애 극복 스토리, 커리어 하이 45위, 강력한 서브·포핸드 분석. 독일 테니스 선수 야닉 한프만의 모든 것.",
  keywords: [
    "야닉 한프만",
    "Yannick Hanfmann",
    "한프만",
    "독일 테니스",
    "청각 장애 테니스",
    "ATP",
    "테니스 선수",
    "서브",
    "포핸드",
    "커리어 하이",
  ],
  alternates: {
    canonical: "https://tennisfrens.com/players/yannick-hanfmann",
  },
  openGraph: {
    title: "야닉 한프만 완전 분석 | 청각 장애 극복·플레이 스타일·ATP 프로필",
    description:
      "청각 장애를 극복한 독일의 빅 서버 야닉 한프만. 커리어 하이 45위, 로마 마스터스 8강, 강력한 서브·포핸드까지 한 번에.",
    url: "https://tennisfrens.com/players/yannick-hanfmann",
    siteName: "TennisFriends",
    locale: "ko_KR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "야닉 한프만 완전 분석 | 청각 장애 극복·플레이 스타일·ATP 프로필",
    description:
      "청각 장애를 극복한 독일의 빅 서버 야닉 한프만. 커리어 하이 45위, 로마 마스터스 8강 분석.",
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
    text: "야닉 한프만, 왜 주목받는 선수인가?",
    depth: 2,
  },
  {
    id: "player-profile",
    text: "야닉 한프만 선수 프로필",
    depth: 2,
  },
  {
    id: "play-style",
    text: "야닉 한프만의 플레이 스타일",
    depth: 2,
  },
  {
    id: "signature-match",
    text: "커리어 최고의 경기: 2023 로마 마스터스 8강",
    depth: 2,
  },
  {
    id: "fan-appeal",
    text: "팬들이 야닉 한프만에게 끌리는 이유",
    depth: 2,
  },
  {
    id: "recent-form",
    text: "야닉 한프만의 최근 경기력",
    depth: 2,
  },
  {
    id: "summary",
    text: "야닉 한프만, 한 문장으로 정리하면?",
    depth: 2,
  },
];

const faqs = [
  {
    q: "야닉 한프만이 청각 장애가 있다는 게 사실인가요?",
    a: "네, 야닉 한프만은 선천적으로 청각 장애가 있어 보청기를 착용합니다. 테니스에서 타구음은 타이밍을 잡는 데 중요한데, 그는 시각적 집중력으로 이를 극복했습니다.",
  },
  {
    q: "야닉 한프만의 커리어 하이 랭킹은 몇 위인가요?",
    a: "야닉 한프만의 ATP 커리어 하이 랭킹은 45위(2023년)입니다. 2023년 로마 마스터스에서 예선부터 시작해 Top 10 선수들을 연파하며 8강에 오르는 파란을 일으켰습니다.",
  },
  {
    q: "야닉 한프만의 플레이 스타일은 어떤가요?",
    a: "193cm의 큰 키에서 뿜어져 나오는 강력한 서브(시속 220km대)와 묵직한 포핸드가 주무기입니다. 클레이 코트에서 특히 강한 모습을 보입니다.",
  },
  {
    q: "야닉 한프만은 어느 대학 출신인가요?",
    a: "미국 서던 캘리포니아 대학(USC)에서 대학 테니스 선수로 활약했으며, 전미 우승을 이끈 경력이 있습니다.",
  },
];

export default function YannickHanfmannPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="야닉 한프만"
        excerpt="청각 장애라는 한계를 뛰어넘은 '침묵의 파이터', 묵직한 서브와 포핸드로 코트를 울리는 독일의 인간 승리"
      >
        <BreadcrumbSchema
          items={[
            { name: "홈", item: "https://tennisfrens.com" },
            { name: "선수", item: "https://tennisfrens.com/players" },
            {
              name: "야닉 한프만",
              item: "https://tennisfrens.com/players/yannick-hanfmann",
            },
          ]}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "테니스",
              "야닉 한프만",
              "선수 프로필",
              "독일",
              "청각 장애 극복",
              "빅 서버",
            ].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <TOC items={tocItems} />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 id="why-notable">야닉 한프만, 왜 주목받는 선수인가?</h2>
            <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                  "듣지 못해도 칠 수 있다" — 청각 장애를 극복하고 ATP 커리어
                  하이 45위를 달성한 독일의 빅 서버
                </p>
              </div>
            </blockquote>
            <p>
              야닉 한프만(Yannick Hanfmann)은 독일 카를스루에 출신의 프로 테니스
              선수로, 선천적 청각 장애라는 역경을 딛고 ATP 투어 무대에 선 특별한
              스토리를 가진 선수다. 193cm의 큰 키에서 뿜어져 나오는 강력한
              서브와 묵직한 포핸드를 바탕으로 2023년 커리어 하이 랭킹 45위를
              기록했으며, 로마 마스터스에서 Top 10 선수들을 연파하며 테니스
              팬들의 마음을 사로잡았다.
            </p>
            <p>
              미국 USC에서 대학 테니스를 하며 전미 우승을 이끈 후 프로로
              전향했다. 보청기를 착용해도 완벽하게 소리를 듣지 못하는 상황에서
              시각적 집중력으로 모든 것을 극복한 그의 이야기는 테니스를 넘어
              많은 사람들에게 희망을 전하고 있다.
            </p>

            <h2 id="player-profile">야닉 한프만 선수 프로필</h2>

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
                      🇩🇪 독일 (카를스루에 출신)
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-700 dark:text-gray-300">
                      커리어 하이:
                    </strong>{" "}
                    <span className="text-gray-600 dark:text-gray-400">
                      ATP 45위 (2023년)
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
                      193cm
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
                      빅 서버 & 하드 히터 (오른손, 양손 백핸드)
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-700 dark:text-gray-300">
                      주요 특징:
                    </strong>{" "}
                    <span className="text-gray-600 dark:text-gray-400">
                      선천적 청각 장애 극복, USC 대학 전미 우승
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-700 dark:text-gray-300">
                      최고 성적:
                    </strong>{" "}
                    <span className="text-gray-600 dark:text-gray-400">
                      2023 로마 마스터스 8강, 2023 마요르카 4강
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <h2 id="play-style">야닉 한프만의 플레이 스타일</h2>
            <p>
              <strong>핵심 무기: 서브, 포핸드, 그리고 눈</strong>
            </p>
            <p>
              193cm의 큰 신장을 활용한 서브는 시속 220km대에 달하며, 특히 킥
              서브는 높게 튀어 올라 상대를 괴롭힌다. 포핸드는 타점이 높고 스윙이
              커서 공에 실리는 힘이 묵직하며, 클레이 코트에서 특히 위력이
              배가된다.
            </p>

            <div className="not-prose my-6 p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">
                  👂 한프만의 3가지 집중력
                </h4>
              </div>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">1.</span>
                  <span>
                    <strong>서브:</strong> 큰 신장을 이용한 시속 220km대의 서브.
                    킥 서브가 높게 튀어 오르며 상대 백핸드를 압박.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">2.</span>
                  <span>
                    <strong>포핸드:</strong> 타점이 높고 스윙이 커서 묵직한
                    파워. 클레이 코트에서 특히 위력 발휘.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">3.</span>
                  <span>
                    <strong>눈:</strong> 귀 대신 눈으로 모든 것을 파악. 상대의
                    라켓 면, 임팩트 순간을 놓치지 않고 포착해 반응.
                  </span>
                </li>
              </ul>
            </div>

            <p>
              보청기를 착용해도 소리를 완벽하게 듣지 못하는 한프만은 시각 정보를
              바탕으로 한 예측 플레이가 발달했다. 상대의 라켓 면과 스윙 궤적을
              읽어내는 능력이 뛰어나며, 이 집중력이 그의 가장 큰 무기이기도
              하다.
            </p>

            <h2 id="signature-match">
              커리어 최고의 경기: 2023 로마 마스터스 8강
            </h2>
            <div className="not-prose my-6 p-5 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 m-0">
                  2023 로마 마스터스 (2023년 5월)
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                예선부터 시작해 테일러 프리츠, 안드레이 루블레프 등 세계 Top 10
                선수들을 연파하며 8강에 오르는 파란을 일으켰다. 클레이 코트에서
                세계 정상급 선수들과 대등하게 싸울 수 있음을 증명한 커리어
                최고의 활약이었다.
              </p>
            </div>
            <p>
              이 대회에서의 활약으로 한프만은 커리어 하이 랭킹 45위를 달성했다.
              같은 해 마요르카에서는 잔디 코트 4강까지 오르며 클레이뿐만 아니라
              잔디에서도 강한 면모를 보였다.
            </p>

            <h2 id="fan-appeal">팬들이 야닉 한프만에게 끌리는 이유</h2>
            <div className="not-prose my-6 p-4 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-400 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-800 dark:text-gray-200 mb-0">
                  <strong>"희망의 메신저"</strong> — 장애를 가진 많은 사람들에게
                  "할 수 있다"는 메시지를 전달합니다. 그의 경기는 승패를 떠나
                  감동을 줍니다.
                </p>
              </div>
            </div>
            <p>
              한프만의 테니스는 단순한 스포츠를 넘어선 메시지를 담고 있다. 청각
              장애라는 핸디캡을 안고도 세계 최고의 선수들과 경쟁하는 그의 모습은
              테니스 팬이 아닌 사람들에게도 감동을 준다. USC에서 대학 전미
              우승을 이끈 뒤 프로 전향을 결정한 그의 커리어 선택도 단순한
              승부욕이 아닌 진정한 열정에서 비롯된 것이다.
            </p>

            <h2 id="recent-form">야닉 한프만의 최근 경기력</h2>
            <p>
              <strong>"커리어 하이 이후 올라운더로 진화 중"</strong>
            </p>
            <p>
              2023년 커리어 하이 랭킹(45위)을 기록하며 전성기를 맞이했다. 클레이
              코트뿐만 아니라 잔디 코트(마요르카 4강)에서도 좋은 성적을 내며
              올라운더로 진화하고 있다. 강력한 서브와 포핸드를 바탕으로 앞으로도
              성장 가능성이 충분한 선수다.
            </p>

            <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "서브", score: "9.0", color: "blue" },
                { label: "집중력", score: "9.5", color: "purple" },
                { label: "포핸드", score: "8.5", color: "green" },
                { label: "멘탈", score: "8.5", color: "amber" },
                { label: "이동", score: "7.0", color: "red" },
                { label: "백핸드", score: "7.5", color: "indigo" },
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

            <h2 id="summary">야닉 한프만, 한 문장으로 정리하면?</h2>
            <p>
              야닉 한프만은 청각 장애라는 한계를 시각적 집중력으로 극복하고,
              묵직한 서브와 포핸드로 ATP 투어 45위까지 오른 독일의 &lsquo;침묵의
              파이터&rsquo;다.
            </p>
          </div>

          <FAQ items={faqs} />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
