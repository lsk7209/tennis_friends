'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import {
  Trophy,
  Search,
  Filter,
  Star,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Users,
  Target,
  Crown,
  Medal,
  Zap,
  X,
  Ruler,
  Weight,
  Hand,
  Eye,
  DollarSign,
  BarChart3,
  Instagram,
  Twitter,
  Globe,
  Heart,
  MessageCircle
} from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';
import {
  tennisPlayers,
  getTopPlayers,
  getGrandSlamWinners,
  getMalePlayers,
  getFemalePlayers,
  getActivePlayers,
  getLegendaryPlayers,
  searchPlayers,
  sortPlayersByRanking,
  sortPlayersByTitles,
  sortPlayersByAge,
  type TennisPlayer
} from '@/lib/tennisPlayers';

export default function PlayersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'ranking' | 'titles' | 'age'>('ranking');
  const [filterBy, setFilterBy] = useState<'all' | 'top' | 'male' | 'female' | 'active' | 'legendary'>('all');
  const [selectedPlayer, setSelectedPlayer] = useState<TennisPlayer | null>(null);

  // 필터링 및 정렬된 선수 목록
  const filteredAndSortedPlayers = useMemo(() => {
    let players = tennisPlayers;

    // 필터 적용
    switch (filterBy) {
      case 'top':
        players = getTopPlayers();
        break;
      case 'male':
        players = getMalePlayers();
        break;
      case 'female':
        players = getFemalePlayers();
        break;
      case 'active':
        players = getActivePlayers();
        break;
      case 'legendary':
        players = getLegendaryPlayers();
        break;
      default:
        players = tennisPlayers;
    }

    // 검색 적용
    if (searchQuery.trim()) {
      players = searchPlayers(searchQuery);
    }

    // 정렬 적용
    switch (sortBy) {
      case 'ranking':
        players = sortPlayersByRanking().filter(p => players.some(fp => fp.id === p.id));
        break;
      case 'titles':
        players = sortPlayersByTitles().filter(p => players.some(fp => fp.id === p.id));
        break;
      case 'age':
        players = sortPlayersByAge().filter(p => players.some(fp => fp.id === p.id));
        break;
    }

    return players;
  }, [searchQuery, sortBy, filterBy]);

  const getPlayerCard = (player: TennisPlayer) => {
    const isActive = player.ranking.current <= 100;
    const isLegendary = player.age >= 40 || player.titles.singles >= 20;

    return (
      <Card key={player.id} className={`bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${!isActive ? 'opacity-75' : ''}`}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* 선수 이미지 */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {player.name.charAt(0)}
              </div>
              {!isActive && (
                <Badge className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs">
                  은퇴
                </Badge>
              )}
              {isLegendary && (
                <Crown className="absolute -bottom-1 -right-1 w-6 h-6 text-yellow-500" />
              )}
            </div>

            {/* 선수 정보 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                  {player.name}
                </h3>
                <span className="text-lg">{player.countryFlag}</span>
                {player.ranking.current <= 10 && (
                  <Badge className="bg-yellow-500 text-white text-xs">
                    <Crown className="w-3 h-3 mr-1" />
                    TOP 10
                  </Badge>
                )}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {player.country} • {player.age}세 • {player.height}cm
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    #{player.ranking.current}
                  </div>
                  <div className="text-xs text-gray-500">현재 랭킹</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">
                    {player.titles.singles}
                  </div>
                  <div className="text-xs text-gray-500">그랜드 슬램</div>
                </div>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-4">
                {player.bio}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {player.strengths.slice(0, 2).map((strength, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {strength}
                  </Badge>
                ))}
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                    onClick={() => setSelectedPlayer(player)}
                  >
                    <Target className="w-4 h-4 mr-2" />
                    자세히 보기
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <span className="text-3xl">{player.name.charAt(0)}</span>
                      {player.name}
                      <span className="text-lg">{player.countryFlag}</span>
                      {player.ranking.current <= 10 && (
                        <Badge className="bg-yellow-500 text-white">
                          <Crown className="w-4 h-4 mr-1" />
                          TOP {player.ranking.current}
                        </Badge>
                      )}
                    </DialogTitle>
                  </DialogHeader>

                  {selectedPlayer && (
                    <div className="space-y-6 mt-6">
                      {/* 기본 정보 */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <Ruler className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                          <div className="text-lg font-bold text-blue-600">{selectedPlayer.height}cm</div>
                          <div className="text-xs text-gray-600">키</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <Weight className="h-6 w-6 mx-auto mb-2 text-green-600" />
                          <div className="text-lg font-bold text-green-600">{selectedPlayer.weight}kg</div>
                          <div className="text-xs text-gray-600">몸무게</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <Hand className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                          <div className="text-sm font-bold text-purple-600">{selectedPlayer.plays}</div>
                          <div className="text-xs text-gray-600">손잡이</div>
                        </div>
                        <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                          <Target className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                          <div className="text-sm font-bold text-orange-600">{selectedPlayer.backhand}</div>
                          <div className="text-xs text-gray-600">백핸드</div>
                        </div>
                      </div>

                      {/* 소개 */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Star className="h-5 w-5" />
                          소개
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {selectedPlayer.bio}
                        </p>
                      </div>

                      {/* 플레이 스타일 */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          플레이 스타일
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          {selectedPlayer.playingStyle}
                        </p>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                              강점
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedPlayer.strengths.map((strength, index) => (
                                <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  {strength}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {selectedPlayer.weaknesses.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                                개선점
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {selectedPlayer.weaknesses.map((weakness, index) => (
                                  <Badge key={index} variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                    {weakness}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 주요 성과 */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          주요 성과
                        </h3>
                        <div className="space-y-2">
                          {selectedPlayer.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <Medal className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 경기 통계 */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <BarChart3 className="h-5 w-5" />
                          경기 통계
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">에이스</span>
                                <span className="text-sm font-bold text-blue-600">{selectedPlayer.stats.aces.toLocaleString()}</span>
                              </div>
                              <Progress value={Math.min(selectedPlayer.stats.aces / 15000 * 100, 100)} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">1st 서브 성공률</span>
                                <span className="text-sm font-bold text-green-600">{selectedPlayer.stats.firstServePercentage}%</span>
                              </div>
                              <Progress value={selectedPlayer.stats.firstServePercentage} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">브레이크 포인트 변환</span>
                                <span className="text-sm font-bold text-purple-600">{selectedPlayer.stats.breakPointsConverted}%</span>
                              </div>
                              <Progress value={selectedPlayer.stats.breakPointsConverted} className="h-2" />
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">리턴 게임 승률</span>
                                <span className="text-sm font-bold text-orange-600">{selectedPlayer.stats.returnGamesWon}%</span>
                              </div>
                              <Progress value={selectedPlayer.stats.returnGamesWon} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">더블 폴트</span>
                                <span className="text-sm font-bold text-red-600">{selectedPlayer.stats.doubleFaults.toLocaleString()}</span>
                              </div>
                              <Progress value={Math.max(0, 100 - (selectedPlayer.stats.doubleFaults / 3000 * 100))} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 커리어 하이라이트 */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Trophy className="h-5 w-5" />
                          커리어 하이라이트
                        </h3>
                        <div className="space-y-3">
                          {selectedPlayer.careerHighlights.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                {highlight.year}
                              </div>
                              <div>
                                <p className="text-gray-700 dark:text-gray-300 font-medium">
                                  {highlight.achievement}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 소셜 미디어 */}
                      {(selectedPlayer.socialMedia.instagram || selectedPlayer.socialMedia.twitter || selectedPlayer.socialMedia.website) && (
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Heart className="h-5 w-5" />
                            소셜 미디어
                          </h3>
                          <div className="flex gap-3">
                            {selectedPlayer.socialMedia.instagram && (
                              <a
                                href={`https://instagram.com/${selectedPlayer.socialMedia.instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-pink-50 dark:bg-pink-900/20 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors"
                              >
                                <Instagram className="h-4 w-4 text-pink-600" />
                                <span className="text-sm">Instagram</span>
                              </a>
                            )}
                            {selectedPlayer.socialMedia.twitter && (
                              <a
                                href={`https://twitter.com/${selectedPlayer.socialMedia.twitter}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                              >
                                <Twitter className="h-4 w-4 text-blue-600" />
                                <span className="text-sm">Twitter</span>
                              </a>
                            )}
                            {selectedPlayer.socialMedia.website && (
                              <a
                                href={selectedPlayer.socialMedia.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              >
                                <Globe className="h-4 w-4 text-gray-600" />
                                <span className="text-sm">웹사이트</span>
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </DialogContent>
              </Dialog>
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
              테니스 선수들
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              세계 최고의 테니스 선수들의 프로필과 통계를 만나보세요.<br />
              그들의 플레이 스타일과 커리어를 통해 테니스에 대한 영감을 얻으세요.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{tennisPlayers.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">총 선수</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tennisPlayers.reduce((sum, p) => sum + p.titles.singles, 0)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">그랜드 슬램</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Crown className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {getTopPlayers().length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">TOP 10</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {getGrandSlamWinners().length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">전설적인 선수</div>
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

            {/* Filters */}
            <div className="flex gap-3">
              <Select value={filterBy} onValueChange={(value: any) => setFilterBy(value)}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="필터" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체 선수</SelectItem>
                  <SelectItem value="top">TOP 10</SelectItem>
                  <SelectItem value="male">남자 선수</SelectItem>
                  <SelectItem value="female">여자 선수</SelectItem>
                  <SelectItem value="active">현역 선수</SelectItem>
                  <SelectItem value="legendary">전설적인 선수</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                <SelectTrigger className="w-32">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="정렬" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ranking">랭킹순</SelectItem>
                  <SelectItem value="titles">우승순</SelectItem>
                  <SelectItem value="age">나이순</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            총 {filteredAndSortedPlayers.length}명의 선수를 찾았습니다
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <StaggeredAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedPlayers.map((player, index) => (
                <StaggeredItem key={player.id}>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
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
