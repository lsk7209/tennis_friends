import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerHexagonStats from '@/components/players/PlayerHexagonStats';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Target, TrendingUp, Award, Heart, Brain, Shield, Zap, Star, CheckCircle, Crown } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import PersonSchema from '@/components/seo/PersonSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
    title: '알렉스 미첼슨 — 차세대 미국 테니스 | 플레이스타일·명장면·최근 경기력',
    description: "알렉스 미첼슨 (Alex Michelsen) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['알렉스 미첼슨', 'Alex Michelsen', '테니스', 'ATP', '플레이스타일', '미국 테니스', '차세대', '공격형'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/alex-michelsen',
    },
    openGraph: {
        title: '알렉스 미첼슨 — 차세대 미국 테니스 | 플레이스타일·명장면·최근 경기력',
        description: '알렉스 미첼슨의 공격적인 베이스라인 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/alex-michelsen',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '알렉스 미첼슨 — 차세대 미국 테니스 | 플레이스타일·명장면·최근 경기력',
        description: '알렉스 미첼슨의 공격적인 베이스라인 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
    { id: 'why-again-notable', text: '알렉스 미첼슨, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '알렉스 미첼슨은 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 알렉스 미첼슨의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '알렉스 미첼슨, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
    {
        q: '알렉스 미첼슨의 경기 스타일은 어떤가요?',
        a: '공격적인 베이스라인 플레이어로, 강력한 포핸드와 빠른 움직임이 특징입니다. 적극적으로 주도권을 잡으려는 플레이를 선호합니다.',
    },
    {
        q: '미첼슨의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '신예 선수로 현재 랭킹 80-100위권에서 빠르게 상승 중입니다. 2024년 시즌에 많은 성장을 보여주고 있습니다.',
    },
    {
        q: '미첼슨의 강점은 무엇인가요?',
        a: '강력한 포핸드와 뛰어난 코트 커버 능력, 그리고 젊은 에너지와 두려움 없는 플레이가 강점입니다.',
    },
    {
        q: '미첼슨의 약점은 무엇인가요?',
        a: '경험 부족과 빅매치에서의 멘탈 관리가 아직 개선이 필요한 부분입니다. 백핸드의 안정성도 더 발전할 여지가 있습니다.',
    },
    {
        q: '미첼슨을 한 문장으로 설명하면?',
        a: '강력한 포핸드와 공격적인 플레이로 미국 테니스의 미래를 책임질 차세대 스타입니다.',
    },
];

export default function AlexMichelsenPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="알렉스 미첼슨"
                excerpt="강력한 포핸드와 공격적인 플레이로 주목받는 미국 테니스의 미래"
                image="/images/players/alex-michelsen.png"
            >
                <PersonSchema
                    name="Alex Michelsen"
                    nameKo="알렉스 미첼슨"
                    description="미국 출신의 차세대 테니스 선수. 강력한 포핸드와 공격적인 플레이로 주목받는 유망주."
                    image="/images/players/alex-michelsen.png"
                    nationality="United States"
                    birthDate="2004-08-18"
                    height="188"
                    jobTitle="Professional Tennis Player"
                    award={[
                        'ATP Challenger Tour Champion',
                        'NCAA Division I Singles Champion'
                    ]}
                    url="https://tennisfriends.co.kr/players/alex-michelsen"
                />

      <BreadcrumbSchema
        items={[
          { name: '홈', item: 'https://tennisfriends.co.kr' },
          { name: '선수', item: 'https://tennisfriends.co.kr/players' },
          { name: '알렉스 미첼슨', item: 'https://tennisfriends.co.kr/players/alex-michelsen' },
        ]}
      />
      <FAQSchema faqs={faqs} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <PlayerProfileCard
                        name="Alex Michelsen"
                        country="United States"
                        age={20}
                        height="188cm"
                        plays="Right-handed (Two-handed backhand)"
                        turnedPro={2023}
                        grandSlams={0}
                        ranking={85}
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            미국 테니스의 희망. <strong className="text-blue-600 dark:text-blue-400">강력한 포핸드</strong>와 공격적인 플레이로 빠르게 성장 중인 차세대 스타.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            알렉스 미첼슨, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    강력한 포핸드와 공격적인 플레이로 주목받는 미국 테니스의 미래
                                </p>
                            </div>
                        </blockquote>
                        <p>알렉스 미첼슨은 2004년생으로 미국 테니스의 차세대 주자로 떠오르고 있다. 대학 테니스에서 뛰어난 성적을 거둔 후 프로로 전환하여 챌린저 투어에서 빠르게 성장하고 있다.</p>
                        <p>그의 가장 큰 무기는 강력한 포핸드다. 높은 타점에서 강하게 내리치는 포핸드는 상대의 수비를 와해시킨다. 또한 젊은 선수답게 두려움 없이 빅샷을 시도하는 공격적인 플레이 스타일로 팬들의 사랑을 받고 있다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
                        <p>미첼슨은 베이스라인에서 강력한 그라운드 스트로크로 주도권을 잡는 현대적인 스타일의 선수다.</p>

                        <PlayerHexagonStats
              playerName="알렉스 미첼슨"
              attributes={[
                                { name: '포핸드 (Forehand)', score: 9.0, description: '그의 최대 무기. 높은 타점에서 강하게 때리는 포핸드는 위너 생산 능력이 뛰어나다.' },
                                { name: '체력 (Fitness)', score: 8.8, description: '젊은 나이답게 체력이 좋다. 긴 랠리에서도 지치지 않는 스태미나를 보여준다.' },
                                { name: '이동 능력 (Movement)', score: 8.5, description: '빠른 풋워크로 코트를 넓게 커버한다. 수비에서 공격으로의 전환이 빠르다.' },
                                { name: '서브 (Serve)', score: 8.0, description: '안정적인 서브로 서비스 게임을 수월하게 가져간다. 에이스 생산 능력도 준수하다.' },
                                { name: '백핸드 (Backhand)', score: 7.5, description: '포핸드에 비해 상대적으로 약하지만, 꾸준히 발전하고 있는 샷이다.' },
                            ]}
                        />

                        <p>플레이 스타일은 단순하면서도 효과적이다. 강력한 포핸드로 상대를 압박하고, 기회가 오면 주저 없이 위너를 노린다. 네트 플레이도 개선 중이며, 전체적인 게임이 균형을 찾아가고 있다.</p>
                        <p>아직 젊기 때문에 전술적인 다양성과 경험은 부족하지만, 뛰어난 기본기와 학습 능력으로 빠르게 성장하고 있다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>188cm의 키에 탄탄한 체격을 가지고 있다. 젊은 선수답게 <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">폭발적인 스피드</strong>와 민첩성을 자랑한다. 코트를 넓게 커버하며 수비에서 공격으로의 전환이 빠르다.</p>

                        <h3 className="flex items-center gap-2">
                            <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            멘탈 강점
                        </h3>
                        <div className="not-prose my-4 p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <Target className="w-4 h-4 text-green-700 dark:text-green-400" />
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0">
                                    핵심 통계
                                </p>
                            </div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0">
                                챌린저 투어 우승 · NCAA 챔피언 · <strong className="text-green-700 dark:text-green-400 text-base">빠른 랭킹 상승</strong>
                            </p>
                        </div>
                        <p>젊은 선수답게 두려움 없이 플레이한다. 빅매치에서도 주눅 들지 않고 자신의 플레이를 펼친다. 다만 경험 부족으로 중요한 순간에 실수가 나오기도 하는데, 이는 시간이 해결해 줄 문제다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">알렉스 미첼슨은 어떻게 여기까지 왔을까?</h2>
                        <p>미첼슨은 대학 테니스에서 뛰어난 성적을 거두며 주목받기 시작했다. NCAA 챔피언십에서 우승한 후 프로로 전향했고, 챌린저 투어에서 빠르게 성장했다.</p>
                        <p>2024년 시즌에는 ATP 메인 대회에 지속적으로 진출하며 랭킹을 빠르게 올려갔다. 특히 하드 코트에서 좋은 성적을 거두며 차세대 미국 테니스의 희망으로 자리매김했다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>미첼슨의 잠재력을 보여준 경기는 2024년 ATP 투어에서의 활약이다.</p>

                        <h3>2024년 시즌 하이라이트</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">신예의 도전</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                <strong>2024년 시즌</strong>에서 여러 ATP 메인 대회에 출전하며 랭킹 상위권 선수들과 경쟁했다. 강력한 포핸드와 공격적인 플레이로 베테랑 선수들을 당황하게 만들었다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>팬들은 미첼슨의 공격적이고 대담한 플레이에 끌린다.</p>
                        <p>젊은 선수답게 두려움 없이 빅샷을 시도하는 모습은 보는 이들에게 짜릿함을 선사한다. 또한 겸손하고 진지한 태도로 팬들의 사랑을 받고 있다.</p>

                        <h2 id="recent-form">요즘 알렉스 미첼슨의 경기력 흐름은 어떤가?</h2>
                        <p>2024년 시즌에는 챌린저 투어와 ATP 메인 대회를 오가며 경험을 쌓고 있다. 랭킹을 꾸준히 올려가고 있으며, 향후 탑 50 진입이 기대되는 유망주다.</p>

                        <h3>최근 성적</h3>
                        <p>하드 코트에서 특히 좋은 모습을 보이고 있으며, 빅서브와 강력한 포핸드로 상위 랭커들에게도 위협적인 존재가 되고 있다. 경험이 쌓이면 더욱 완성된 선수로 성장할 것으로 전망된다.</p>

                        <h2 id="one-sentence-summary">알렉스 미첼슨, 한 문장으로 정리하면?</h2>
                        <p>알렉스 미첼슨은 강력한 포핸드와 공격적인 플레이로 미국 테니스의 미래를 책임질 차세대 스타다.</p>
                        <p>그의 테니스는 젊음의 에너지와 두려움 없는 도전 정신으로 가득하다. 아직 많은 발전 여지가 남아있지만, 기본기가 탄탄하고 배우려는 자세가 좋아 향후 세계 정상급 선수로 성장할 가능성이 충분하다. 미국 테니스의 밝은 미래를 책임질 선수로 기대를 모으고 있다.</p>
                    </div>

                    {/* FAQ Section */}
                    <FAQ items={faqs} />

                    {/* CTA */}
                    <CTA />
                </div>
            </Article>
        </div>
    );
}
