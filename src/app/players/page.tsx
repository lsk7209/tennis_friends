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

import { PLAYERS_DB } from '@/data/players';
import { PlayerData } from '@/types/player';

export default function PlayersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'country'>('name');
  const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('male'); // Default to male since we mostly have male players
  const [currentPage, setCurrentPage] = useState(1);

  // 필터링 및 정렬된 선수 목록
  const filteredAndSortedPlayers = useMemo(() => {
    // 모든 선수 데이터를 배열로 변환
    let players = Object.entries(PLAYERS_DB).map(([slug, data]) => ({
      slug,
      ...data
    }));

    // 성별 필터 적용
    if (genderFilter !== 'all') {
      players = players.filter(player => player.gender === genderFilter);
    }

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
  }, [searchQuery, sortBy, genderFilter]);

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
  }, [searchQuery, sortBy, genderFilter]);

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
            {/* Gender Filter Tabs */}
            <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg mb-4 md:mb-0">
              <button
                onClick={() => setGenderFilter('male')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${genderFilter === 'male'
                  ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
              >
                ATP (남자)
              </button>
              <button
                onClick={() => setGenderFilter('female')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${genderFilter === 'female'
                  ? 'bg-white dark:bg-gray-600 text-pink-600 dark:text-pink-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
              >
                WTA (여자)
              </button>
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="선수 이름, 국가, 스타일 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10"
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
