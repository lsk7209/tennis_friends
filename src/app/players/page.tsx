'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Trophy,
  Search,
  Star,
  TrendingUp,
  Users,
  Target,
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';
import { PLAYERS_PER_PAGE } from '@/lib/constants';

// 블로그 포스트가 있는 선수들의 slug 리스트
const playersWithBlogPosts = [
  'carlos-alcaraz',
  'jannik-sinner',
  'novak-djokovic',
  'daniil-medvedev',
  'alexander-zverev',
  'andrey-rublev',
  'stefanos-tsitsipas',
  'casper-ruud',
  'alex-de-minaur',
  'taylor-fritz',
  'hubert-hurkacz',
  'holger-rune',
  'grigor-dimitrov',
  'ben-shelton',
  'tommy-paul',
  'frances-tiafoe',
  'ugo-humbert',
  'sebastian-baez',
  'lorenzo-musetti',
  'sebastian-korda',
  'cameron-norrie',
  'tallon-griekspoor',
  'nicolas-jarry',
  'matteo-berrettini',
  'gael-monfils',
  'arthur-fils',
  'alexei-popyrin',
  'jan-lennard-struff',
  'adrian-mannarino',
  'matteo-arnaldi',
  'jordan-thompson',
  'zhizhen-zhang',
  'giovanni-mpetshi-perricard'
];

// 선수 slug와 이름 매핑 (전체 43명)
const playerNames: { [key: string]: { name: string; nameEn: string; country: string; countryFlag: string; image?: string } } = {
  'carlos-alcaraz': { name: '카를로스 알카라스', nameEn: 'Carlos Alcaraz', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/carlos-alcaraz.png' },
  'jannik-sinner': { name: '야닉 시너', nameEn: 'Jannik Sinner', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/jannik-sinner.png' },
  'novak-djokovic': { name: '노박 조코비치', nameEn: 'Novak Djokovic', country: 'Serbia', countryFlag: '🇷🇸', image: '/images/players/novak-djokovic.png' },
  'daniil-medvedev': { name: '다닐 메드베데프', nameEn: 'Daniil Medvedev', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/daniil-medvedev.png' },
  'alexander-zverev': { name: '알렉산더 즈베레프', nameEn: 'Alexander Zverev', country: 'Germany', countryFlag: '🇩🇪', image: '/images/players/alexander-zverev.png' },
  'andrey-rublev': { name: '안드레이 루블레프', nameEn: 'Andrey Rublev', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/andrey-rublev.png' },
  'stefanos-tsitsipas': { name: '스테파노스 치치파스', nameEn: 'Stefanos Tsitsipas', country: 'Greece', countryFlag: '🇬🇷', image: '/images/players/stefanos-tsitsipas.png' },
  'casper-ruud': { name: '카스페르 루드', nameEn: 'Casper Ruud', country: 'Norway', countryFlag: '🇳🇴', image: '/images/players/casper-ruud.png' },
  'alex-de-minaur': { name: '알렉스 드 미노', nameEn: 'Alex de Minaur', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/alex-de-minaur.png' },
  'taylor-fritz': { name: '테일러 프리츠', nameEn: 'Taylor Fritz', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/taylor-fritz.png' },
  'hubert-hurkacz': { name: '후베르트 후르카츠', nameEn: 'Hubert Hurkacz', country: 'Poland', countryFlag: '🇵🇱', image: '/images/players/hubert-hurkacz.png' },
  'holger-rune': { name: '홀거 루네', nameEn: 'Holger Rune', country: 'Denmark', countryFlag: '🇩🇰', image: '/images/players/holger-rune.png' },
  'grigor-dimitrov': { name: '그리고르 디미트로프', nameEn: 'Grigor Dimitrov', country: 'Bulgaria', countryFlag: '🇧🇬', image: '/images/players/grigor-dimitrov.png' },
  'ben-shelton': { name: '벤 쉘튼', nameEn: 'Ben Shelton', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/ben-shelton.png' },
  'tommy-paul': { name: '토미 폴', nameEn: 'Tommy Paul', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/tommy-paul.png' },
  'frances-tiafoe': { name: '프란시스 티아포', nameEn: 'Frances Tiafoe', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/frances-tiafoe.png' },
  'ugo-humbert': { name: '우고 움베르', nameEn: 'Ugo Humbert', country: 'France', countryFlag: '🇫🇷', image: '/images/players/ugo-humbert.png' },
  'sebastian-baez': { name: '세바스티안 바에즈', nameEn: 'Sebastian Baez', country: 'Argentina', countryFlag: '🇦🇷', image: '/images/players/sebastian-baez.png' },
  'lorenzo-musetti': { name: '로렌조 무세티', nameEn: 'Lorenzo Musetti', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/lorenzo-musetti.png' },
  'sebastian-korda': { name: '세바스티안 코르다', nameEn: 'Sebastian Korda', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/sebastian-korda.png' },
  'cameron-norrie': { name: '카메론 노리', nameEn: 'Cameron Norrie', country: 'United Kingdom', countryFlag: '🇬🇧', image: '/images/players/cameron-norrie.png' },
  'tallon-griekspoor': { name: '탈론 크리에크스푸르', nameEn: 'Tallon Griekspoor', country: 'Netherlands', countryFlag: '🇳🇱', image: '/images/players/tallon-griekspoor.png' },
  'nicolas-jarry': { name: '니콜라스 자리', nameEn: 'Nicolas Jarry', country: 'Chile', countryFlag: '🇨🇱', image: '/images/players/nicolas-jarry.png' },
  // 추가된 19명
  'alejandro-davidovich-fokina': { name: '알레한드로 다비도비치 포키나', nameEn: 'Alejandro Davidovich Fokina', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/alejandro-davidovich-fokina.png' },
  'alexander-bublik': { name: '알렉산더 부블리크', nameEn: 'Alexander Bublik', country: 'Kazakhstan', countryFlag: '🇰🇿', image: '/images/players/alexander-bublik.png' },
  'alex-michelsen': { name: '알렉스 미첼슨', nameEn: 'Alex Michelsen', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/alex-michelsen.png' },
  'arthur-landercknech': { name: '아르튀르 랑데르크네슈', nameEn: 'Arthur Landercknech', country: 'France', countryFlag: '🇫🇷', image: '/images/players/arthur-landercknech.png' },
  'brandon-nakashima': { name: '브랜든 나카시마', nameEn: 'Brandon Nakashima', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/brandon-nakashima.png' },
  'corentin-moutet': { name: '코랑탱 무테', nameEn: 'Corentin Moutet', country: 'France', countryFlag: '🇫🇷', image: '/images/players/corentin-moutet.png' },
  'denis-shapovalov': { name: '데니스 샤포발로프', nameEn: 'Denis Shapovalov', country: 'Canada', countryFlag: '🇨🇦', image: '/images/players/denis-shapovalov.png' },
  'felix-auger-aliassime': { name: '펠릭스 오제 알리아심', nameEn: 'Felix Auger-Aliassime', country: 'Canada', countryFlag: '🇨🇦', image: '/images/players/felix-auger-aliassime.png' },
  'flavio-cobolli': { name: '플라비오 코볼리', nameEn: 'Flavio Cobolli', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/flavio-cobolli.png' },
  'francisco-cerundolo': { name: '프란시스코 세룬돌로', nameEn: 'Francisco Cerundolo', country: 'Argentina', countryFlag: '🇦🇷', image: '/images/players/francisco-cerundolo.png' },
  'jack-draper': { name: '잭 드레이퍼', nameEn: 'Jack Draper', country: 'United Kingdom', countryFlag: '🇬🇧', image: '/images/players/jack-draper.png' },
  'jakub-mensik': { name: '야쿠프 멘시크', nameEn: 'Jakub Mensik', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/jakub-mensik.png' },
  'jaume-munar': { name: '자우메 무나르', nameEn: 'Jaume Munar', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/jaume-munar.png' },
  'jiri-lehecka': { name: '이리 레헤츠카', nameEn: 'Jiri Lehecka', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/jiri-lehecka.png' },
  'joao-fonseca': { name: '주앙 폰세카', nameEn: 'Joao Fonseca', country: 'Brazil', countryFlag: '🇧🇷', image: '/images/players/joao-fonseca.png' },
  'karen-khachanov': { name: '카렌 하차노프', nameEn: 'Karen Khachanov', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/karen-khachanov.png' },
  'linner-tien': { name: '리너 티엔', nameEn: 'Learner Tien', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/linner-tien.png' },
  'luciano-darderi': { name: '루치아노 다르데리', nameEn: 'Luciano Darderi', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/luciano-darderi.png' },
  'tomas-machac': { name: '토마스 마하츠', nameEn: 'Tomas Machac', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/tomas-machac.png' },
  'valentin-vacherot': { name: '발랑탱 바슈로', nameEn: 'Valentin Vacherot', country: 'Monaco', countryFlag: '🇲🇨', image: '/images/players/valentin-vacherot.png' },
  'matteo-berrettini': { name: '마테오 베레티니', nameEn: 'Matteo Berrettini', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/matteo-berrettini.png' },
  'gael-monfils': { name: '가엘 몽피스', nameEn: 'Gael Monfils', country: 'France', countryFlag: '🇫🇷', image: '/images/players/gael-monfils.png' },
  'arthur-fils': { name: '아르튀르 필스', nameEn: 'Arthur Fils', country: 'France', countryFlag: '🇫🇷', image: '/images/players/arthur-fils.png' },
  'alexei-popyrin': { name: '알렉세이 포피린', nameEn: 'Alexei Popyrin', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/alexei-popyrin.png' },
  'jan-lennard-struff': { name: '얀-레나드 스트루프', nameEn: 'Jan-Lennard Struff', country: 'Germany', countryFlag: '🇩🇪', image: '/images/players/jan-lennard-struff.svg' },
  'adrian-mannarino': { name: '아드리안 만나리노', nameEn: 'Adrian Mannarino', country: 'France', countryFlag: '🇫🇷', image: '/images/players/adrian-mannarino.svg' },
  'matteo-arnaldi': { name: '마테오 아르날디', nameEn: 'Matteo Arnaldi', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/matteo-arnaldi.svg' },
  'jordan-thompson': { name: '조던 톰슨', nameEn: 'Jordan Thompson', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/jordan-thompson.svg' },
  'zhizhen-zhang': { name: '장지전', nameEn: 'Zhizhen Zhang', country: 'China', countryFlag: '🇨🇳', image: '/images/players/zhizhen-zhang.svg' },
  'giovanni-mpetshi-perricard': { name: '지오반니 음페치 페리카르', nameEn: 'Giovanni Mpetshi Perricard', country: 'France', countryFlag: '🇫🇷', image: '/images/players/giovanni-mpetshi-perricard.svg' }
};

export default function PlayersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'country'>('name');
  const [currentPage, setCurrentPage] = useState(1);

  // 필터링 및 정렬된 선수 목록 (블로그 포스트가 있는 선수들만)
  const filteredAndSortedPlayers = useMemo(() => {
    let players = playersWithBlogPosts.map(slug => ({
      slug,
      ...playerNames[slug]
    }));

    // 검색 적용
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      players = players.filter(player =>
        player.name.toLowerCase().includes(lowerQuery) ||
        player.nameEn.toLowerCase().includes(lowerQuery) ||
        player.country.toLowerCase().includes(lowerQuery)
      );
    }

    // 정렬 적용
    switch (sortBy) {
      case 'name':
        players = [...players].sort((a, b) => a.name.localeCompare(b.name, 'ko'));
        break;
      case 'country':
        players = [...players].sort((a, b) => a.country.localeCompare(b.country, 'ko'));
        break;
    }

    return players;
  }, [searchQuery, sortBy]);

  // 페이지네이션 계산 - useMemo로 최적화
  const { totalPages, paginatedPlayers, totalPlayers, startIndex, endIndex } = useMemo(() => {
    const total = filteredAndSortedPlayers.length;
    const pages = Math.ceil(total / PLAYERS_PER_PAGE);
    const start = (currentPage - 1) * PLAYERS_PER_PAGE;
    const end = start + PLAYERS_PER_PAGE;
    const players = filteredAndSortedPlayers.slice(start, end);
    return { totalPages: pages, paginatedPlayers: players, totalPlayers: total, startIndex: start, endIndex: end };
  }, [filteredAndSortedPlayers, currentPage]);

  // 검색/정렬 변경 시 첫 페이지로 리셋
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy]);

  const getPlayerCard = (player: { slug: string; name: string; nameEn: string; country: string; countryFlag: string; image?: string }) => {
    return (
      <Card key={player.slug} className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* 선수 이미지 */}
            <div className="relative">
              {player.image ? (
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-white dark:border-gray-700 group-hover:border-blue-500 transition-colors">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg relative overflow-hidden group">
                  {/* 배경 패턴 */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_white_1px,_transparent_1px)] bg-[length:8px_8px]"></div>
                  </div>
                  {/* 국기 이모지 (큰 사이즈) */}
                  <div className="relative z-10 text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {player.countryFlag}
                  </div>
                  {/* 테니스 공 아이콘 (우측 하단 작은 장식) */}
                  <div className="absolute bottom-1 right-1 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                    <div className="w-3 h-3 rounded-full bg-white/60 border border-white/80"></div>
                  </div>
                </div>
              )}
            </div>

            {/* 선수 정보 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                  {player.name}
                </h3>
                <span className="text-lg">{player.countryFlag}</span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {player.nameEn}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {player.country}
              </p>

              <Link href={`/players/${player.slug}`}>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                  <Target className="w-4 h-4 mr-2" />
                  자세히 보기
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      {/* Header Section */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl px-4 text-center relative z-10">
          <FadeIn>
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              테니스선수
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              세계 최고의 테니스 선수들의 프로필과 스토리를 만나보세요.<br />
              각 선수의 성장 배경, 경기 스타일, 인간적인 면모를 한 편으로.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{totalPlayers}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">선수 프로필</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {totalPlayers}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">블로그 포스트</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {totalPlayers}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">상세 정보</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="선수 이름, 국가, 스타일 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Sort */}
            <div className="flex gap-3">
              <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                <SelectTrigger className="w-40">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="정렬" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">이름순</SelectItem>
                  <SelectItem value="country">국가순</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400" role="status" aria-live="polite">
            총 {filteredAndSortedPlayers.length}명의 선수를 찾았습니다 ({startIndex + 1} - {Math.min(endIndex, filteredAndSortedPlayers.length)} / {filteredAndSortedPlayers.length}명)
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <StaggeredAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPlayers.map((player, index) => (
                <StaggeredItem key={player.slug}>
                  {getPlayerCard(player)}
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>

          {filteredAndSortedPlayers.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                다른 검색어로 시도해보세요
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  이전
                </Button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                    // 페이지 번호 표시 로직: 현재 페이지 주변만 표시
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                          className={`min-w-[40px] ${currentPage === page
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
                            : ""
                            }`}
                        >
                          {page}
                        </Button>
                      );
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return (
                        <span key={page} className="px-2 text-gray-400">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1"
                >
                  다음
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                {startIndex + 1} - {Math.min(endIndex, filteredAndSortedPlayers.length)} / {filteredAndSortedPlayers.length}명
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                테니스 실력 향상을 위한 도구들
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                선수들의 플레이 스타일을 분석하고 당신의 테니스 실력을 향상시켜보세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/utility/ntrp-test">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <Trophy className="h-5 w-5 mr-2" />
                    실력 테스트하기
                  </Button>
                </Link>
                <Link href="/utility/play-style-test">
                  <Button size="lg" variant="outline" className="bg-white border-2 border-gray-300 hover:border-blue-500">
                    <Zap className="h-5 w-5 mr-2" />
                    플레이 스타일 찾기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
