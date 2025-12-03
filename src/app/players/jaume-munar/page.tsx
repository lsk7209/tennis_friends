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
    title: '자우메 무나르 — 클레이 코트 스페셜리스트 | 플레이스타일·명장면·최근 경기력',
    description: "자우메 무나르 (Jaume Munar) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['자우메 무나르', 'Jaume Munar', '테니스', 'ATP', '플레이스타일', '스페인 테니스', '클레이 코트', '수비형'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/jaume-munar',
    },
    openGraph: {
        title: '자우메 무나르 — 클레이 코트 스페셜리스트 | 플레이스타일·명장면·최근 경기력',
        description: '자우메 무나르의 클레이 코트 전문가 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/jaume-munar',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '자우메 무나르 — 클레이 코트 스페셜리스트 | 플레이스타일·명장면·최근 경기력',
        description: '자우메 무나르의 클레이 코트 전문가 스타일, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
    { id: 'why-again-notable', text: '자우메 무나르, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '자우메 무나르는 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 자우메 무나르의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '자우메 무나르, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
    {
        q: '자우메 무나르의 경기 스타일은 어떤가요?',
        a: '클레이 코트를 최대한 활용하는 수비형 베이스라이너입니다. 높은 탑스핀과 끈질긴 수비로 상대를 지치게 만드는 스타일입니다.',
    },
    {
        q: '무나르의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '최고 랭킹은 52위이며, 주로 60-100위권을 유지하고 있습니다. 클레이 시즌에 랭킹이 상승하는 패턴을 보입니다.',
    },
    {
        q: '무나르의 강점은 무엇인가요?',
        a: '클레이 코트에서의 뛰어난 수비력과 체력, 그리고 높은 탑스핀으로 상대를 압박하는 능력이 강점입니다.',
    },
    {
        q: '무나르의 약점은 무엇인가요?',
        a: '하드 코트와 잔디 코트에서의 성적이 클레이에 비해 크게 떨어지며, 공격력이 다소 부족합니다.',
    },
    {
        q: '무나르를 한 문장으로 설명하면?',
        a: '클레이 코트에서 끈질긴 수비와 투지로 상대를 지치게 만드는 스페인의 클레이 전문가입니다.',
    },
];

export default function JaumeMunarPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="자우메 무나르"
                excerpt="끈질긴 수비와 높은 탑스핀으로 클레이 코트를 지배하는 스페인의 투사"
                image="/images/players/jaume-munar.png"
            >
                <PersonSchema
                    name="Jaume Munar"
                    nameKo="자우메 무나르"
                    description="스페인 출신의 클레이 코트 전문가. 끈질긴 수비와 높은 탑스핀이 특징인 투지의 선수."
                    image="/images/players/jaume-munar.png"
                    nationality="Spain"
                    birthDate="1997-05-05"
                    height="183"
                    jobTitle="Professional Tennis Player"
                    award={[
                        'ATP Challenger Tour Champion',
                        'Junior Grand Slam Finalist'
                    ]}
                    url="https://tennisfriends.co.kr/players/jaume-munar"
                />

      <BreadcrumbSchema
        items={[
          { name: '홈', item: 'https://tennisfriends.co.kr' },
          { name: '선수', item: 'https://tennisfriends.co.kr/players' },
          { name: '자우메 무나르', item: 'https://tennisfriends.co.kr/players/jaume-munar' },
        ]}
      />
      <FAQSchema faqs={faqs} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <PlayerProfileCard
                        name="Jaume Munar"
                        country="Spain"
                        age={27}
                        height="183cm"
                        plays="Right-handed (Two-handed backhand)"
                        turnedPro={2014}
                        grandSlams={0}
                        ranking={75}
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            클레이의 투사. <strong className="text-orange-600 dark:text-orange-400">끈질긴 수비</strong>와 높은 탑스핀으로 상대를 지치게 만드는 스페인 테니스의 정통 계승자.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            자우메 무나르, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    끈질긴 수비와 높은 탑스핀으로 클레이 코트를 지배하는 스페인의 투사
                                </p>
                            </div>
                        </blockquote>
                        <p>자우메 무나르는 스페인 테니스의 전통적인 클레이 코트 스타일을 그대로 계승한 선수다. 라파엘 나달로 대표되는 스페인 클레이 코트 플레이어의 정통 스타일을 보여주는 그는, 높은 탑스핀과 끈질긴 수비로 상대를 지치게 만드는 전술을 구사한다.</p>
                        <p>세계 랭킹 상위권에는 들지 못하지만, 클레이 코트에서만큼은 누구도 쉽게 이기기 어려운 선수다. 특히 스페인과 남미의 클레이 투어에서는 많은 탑 랭커들이 그와의 경기를 부담스러워한다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"클레이 코트 수비형 베이스라이너 (Clay Court Defensive Baseliner)"</strong></p>
                        <p>무나르는 전형적인 스페인 스타일의 클레이 코트 전문가로, 수비에서 시작하여 상대의 실수를 유도하는 플레이를 선호한다.</p>

                        <PlayerHexagonStats
              playerName="자우메 무나르"
              attributes={[
                                { name: '클레이 코트 수비', score: 9.5, description: '클레이 코트에서의 수비 능력은 투어 최상급. 어떤 공도 받아낼 수 있다.' },
                                { name: '체력 (Stamina)', score: 9.3, description: '긴 랠리를 마다하지 않는다. 3시간이 넘는 경기에서도 지치지 않는 체력.' },
                                { name: '탑스핀 (Topspin)', score: 9.0, description: '높은 탑스핀으로 공을 깊숙이 보낸다. 클레이에서 효과적으로 바운드를 높인다.' },
                                { name: '멘탈 (Mental)', score: 8.5, description: '절대 포기하지 않는 투지. 불리한 상황에서도 끝까지 싸운다.' },
                                { name: '다용도성 (Versatility)', score: 6.5, description: '클레이 외 서페이스에서는 경기력이 크게 떨어진다. 공격력도 제한적이다.' },
                            ]}
                        />

                        <p>플레이 스타일은 전형적인 클레이 코트 수비형이다. 베이스라인 뒤에서 높은 탑스핀으로 깊숙이 공을 보내며 랠리를 이어간다. 상대가 지치거나 실수할 때까지 인내심 있게 기다린다.</p>
                        <p>특히 포핸드의 탑스핀 양이 매우 많아 클레이 코트에서 공이 높게 튀어 오른다. 이는 상대가 높은 타점에서 치거나 수비하도록 만들어 주도권을 빼앗는 효과가 있다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>183cm의 적당한 키에 탄탄한 하체를 가지고 있다. 클레이 코트에서의 슬라이딩 능력이 뛰어나며, <strong className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">지칠 줄 모르는 체력</strong>은 그의 가장 큰 자산이다. 3시간이 넘는 경기에서도 후반까지 안정적인 움직임을 보여준다.</p>

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
                                챌린저 투어 5회 우승 · 클레이 승률 <strong className="text-green-700 dark:text-green-400 text-base">65% 이상</strong> · 5세트 경기 강점
                            </p>
                        </div>
                        <p>절대 포기하지 않는 투지가 특징이다. 스코어가 불리해도 끝까지 싸우며, 긴 랠리를 마다하지 않는다. 클레이 코트에서는 정신력으로 상대를 압도하는 경우가 많다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">자우메 무나르는 어떻게 여기까지 왔을까?</h2>
                        <p>무나르는 주니어 시절 프랑스 오픈 주니어 결승에 진출하며 주목받기 시작했다. 스페인의 전통적인 클레이 코트 교육을 받으며 성장했고, 프로 전환 후 챌린저 투어에서 꾸준히 우승하며 경력을 쌓았다.</p>
                        <p>ATP 투어에서는 주로 클레이 시즌에 좋은 성적을 거두며, 바르셀로나, 마드리드, 롬 등 스페인과 유럽의 클레이 대회에서 상위 랭커들을 상대로 선전했다. 비록 그랜드 슬램 우승과 같은 큰 타이틀은 없지만, 투어 서킷에서 존경받는 선수 중 하나다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>무나르의 투지를 보여준 경기는 클레이 코트 대회에서의 수많은 명승부들이다.</p>

                        <h3>클레이 코트 마라톤 매치</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl border border-orange-200 dark:border-orange-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-orange-900 dark:text-orange-100 mb-0">끈질긴 투사</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                챌린저 투어와 ATP 대회에서 <strong>3시간 이상</strong>의 마라톤 경기를 여러 차례 승리로 이끌었다. 클레이 코트에서 절대 포기하지 않는 정신력으로 상대를 지치게 만드는 그의 플레이는 많은 팬들에게 감동을 준다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>팬들은 무나르의 끈질긴 투지와 포기하지 않는 정신력에 끌린다.</p>
                        <p>화려한 샷이나 에이스보다는 묵묵히 공을 받아내고 상대를 지치게 만드는 그의 플레이는 테니스의 본질을 보여준다. 또한 겸손하고 진지한 태도로 동료 선수들과 팬들의 존경을 받는다.</p>

                        <h2 id="recent-form">요즘 자우메 무나르의 경기력 흐름은 어떤가?</h2>
                        <p>클레이 시즌에는 여전히 위력적인 모습을 보여주고 있다. 챌린저 투어와 ATP 대회를 오가며 꾸준히 경기를 소화하고 있으며, 클레이에서만큼은 항상 주의해야 할 선수다.</p>

                        <h3>최근 성적</h3>
                        <p>하드 코트 시즌에는 다소 부진하지만, 클레이 시즌이 되면 랭킹이 상승하는 패턴을 보인다. 스페인 국내 대회에서 특히 좋은 성적을 거두며, 홈 팬들의 응원을 받는다.</p>

                        <h3>향후 전망</h3>
                        <p>탑 50 진입은 어려울 수 있지만, 클레이 코트 스페셜리스트로서 꾸준히 활약할 것으로 예상된다. 그의 스타일은 클레이 코트가 존재하는 한 항상 가치가 있다.</p>

                        <h2 id="one-sentence-summary">자우메 무나르, 한 문장으로 정리하면?</h2>
                        <p>자우메 무나르는 끈질긴 수비와 높은 탑스핀으로 클레이 코트에서 상대를 지치게 만드는 스페인의 투사다.</p>
                        <p>그의 테니스는 화려함보다는 실용성을, 파워보다는 인내심을 강조한다. 클레이 코트라는 특수한 환경에서 최적화된 그의 플레이 스타일은 스페인 테니스의 전통을 이어가는 중요한 역할을 하고 있으며, 끝까지 포기하지 않는 정신력은 많은 후배 선수들에게 귀감이 되고 있다.</p>
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
