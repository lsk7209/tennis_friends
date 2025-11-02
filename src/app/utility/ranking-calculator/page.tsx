'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Trophy, Target, Calculator, Star, Award } from 'lucide-react';

interface MatchResult {
  id: string;
  opponentRanking: number;
  result: 'win' | 'loss';
  tournamentLevel: 'local' | 'regional' | 'national' | 'international';
  surface: 'hard' | 'clay' | 'grass' | 'carpet';
  date: string;
}

interface RankingCalculation {
  currentRanking: number;
  points: number;
  matchesPlayed: number;
  winRate: number;
  predictedRanking: number;
  pointsNeeded: number;
  nextMilestone: string;
}

const tournamentMultipliers = {
  local: 1,
  regional: 2,
  national: 3,
  international: 4
};

const surfaceBonuses = {
  hard: 1.0,
  clay: 1.1,
  grass: 1.2,
  carpet: 0.9
};

export default function RankingCalculatorPage() {
  const [currentRanking, setCurrentRanking] = useState<string>('1000');
  const [currentPoints, setCurrentPoints] = useState<string>('500');
  const [matches, setMatches] = useState<MatchResult[]>([
    {
      id: '1',
      opponentRanking: 800,
      result: 'win',
      tournamentLevel: 'regional',
      surface: 'hard',
      date: '2025-01-15'
    }
  ]);

  const [newMatch, setNewMatch] = useState<Partial<MatchResult>>({
    opponentRanking: 1000,
    result: 'win',
    tournamentLevel: 'local',
    surface: 'hard',
    date: new Date().toISOString().split('T')[0]
  });

  const calculation = useMemo((): RankingCalculation => {
    const currentRank = parseInt(currentRanking) || 1000;
    const currentPts = parseInt(currentPoints) || 0;

    let totalPoints = currentPts;
    let wins = 0;
    let totalMatches = matches.length;

    matches.forEach(match => {
      const opponentRank = match.opponentRanking;
      const multiplier = tournamentMultipliers[match.tournamentLevel];
      const surfaceBonus = surfaceBonuses[match.surface];

      let pointsEarned = 0;

      if (match.result === 'win') {
        wins++;
        // 승리 시 포인트 계산 (상대 랭킹과의 차이에 따라)
        const rankDiff = opponentRank - currentRank;
        const basePoints = Math.max(10, 50 - Math.abs(rankDiff) / 10);
        pointsEarned = Math.round(basePoints * multiplier * surfaceBonus);
      } else {
        // 패배 시 포인트 차감 (작게)
        const rankDiff = currentRank - opponentRank;
        const lossPoints = Math.max(5, Math.min(25, rankDiff / 20));
        pointsEarned = -Math.round(lossPoints * multiplier);
      }

      totalPoints += pointsEarned;
    });

    // 새로운 랭킹 계산 (포인트 기반)
    let predictedRanking;
    if (totalPoints >= 2000) predictedRanking = Math.max(100, 100 + (totalPoints - 2000) / 50);
    else if (totalPoints >= 1000) predictedRanking = Math.max(200, 200 + (totalPoints - 1000) / 30);
    else if (totalPoints >= 500) predictedRanking = Math.max(300, 300 + (totalPoints - 500) / 20);
    else if (totalPoints >= 200) predictedRanking = Math.max(500, 500 + (totalPoints - 200) / 15);
    else predictedRanking = Math.max(800, 800 + (totalPoints - 100) / 10);

    predictedRanking = Math.round(predictedRanking);

    // 다음 마일스톤 계산
    let nextMilestone = '';
    let pointsNeeded = 0;

    if (predictedRanking > 200) {
      nextMilestone = '프로 선수 등급';
      pointsNeeded = 2000 - totalPoints;
    } else if (predictedRanking > 300) {
      nextMilestone = '세미프로 등급';
      pointsNeeded = 1000 - totalPoints;
    } else if (predictedRanking > 500) {
      nextMilestone = '상급자 등급';
      pointsNeeded = 500 - totalPoints;
    } else {
      nextMilestone = '중급자 등급';
      pointsNeeded = 200 - totalPoints;
    }

    return {
      currentRanking: currentRank,
      points: totalPoints,
      matchesPlayed: totalMatches,
      winRate: totalMatches > 0 ? (wins / totalMatches) * 100 : 0,
      predictedRanking,
      pointsNeeded: Math.max(0, pointsNeeded),
      nextMilestone
    };
  }, [currentRanking, currentPoints, matches]);

  const addMatch = () => {
    if (newMatch.opponentRanking && newMatch.result && newMatch.tournamentLevel && newMatch.surface) {
      const match: MatchResult = {
        id: Date.now().toString(),
        opponentRanking: newMatch.opponentRanking,
        result: newMatch.result,
        tournamentLevel: newMatch.tournamentLevel,
        surface: newMatch.surface,
        date: newMatch.date || new Date().toISOString().split('T')[0]
      };

      setMatches([...matches, match]);
      setNewMatch({
        opponentRanking: 1000,
        result: 'win',
        tournamentLevel: 'local',
        surface: 'hard',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  const removeMatch = (id: string) => {
    setMatches(matches.filter(match => match.id !== id));
  };

  const getRankingColor = (ranking: number) => {
    if (ranking <= 200) return 'text-red-400';
    if (ranking <= 300) return 'text-orange-400';
    if (ranking <= 500) return 'text-yellow-400';
    if (ranking <= 800) return 'text-blue-400';
    return 'text-gray-400';
  };

  const getRankingBadge = (ranking: number) => {
    if (ranking <= 200) return { text: '프로', color: 'bg-red-500/20 text-red-400' };
    if (ranking <= 300) return { text: '세미프로', color: 'bg-orange-500/20 text-orange-400' };
    if (ranking <= 500) return { text: '상급자', color: 'bg-yellow-500/20 text-yellow-400' };
    if (ranking <= 800) return { text: '중급자', color: 'bg-blue-500/20 text-blue-400' };
    return { text: '초보자', color: 'bg-gray-500/20 text-gray-400' };
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR');
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-light mb-4">테니스 랭킹 계산기</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          경기 결과를 입력하여 랭킹 변화를 예측하고 목표 달성을 위한 전략을 세워보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Status */}
        <div className="space-y-6">
          <Card className="bg-content-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-text-light">현재 랭킹 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-text-light font-medium mb-2 block">현재 랭킹</Label>
                <Input
                  type="number"
                  value={currentRanking}
                  onChange={(e) => setCurrentRanking(e.target.value)}
                  className="bg-background-dark border-white/10"
                  placeholder="1000"
                />
              </div>

              <div>
                <Label className="text-text-light font-medium mb-2 block">현재 포인트</Label>
                <Input
                  type="number"
                  value={currentPoints}
                  onChange={(e) => setCurrentPoints(e.target.value)}
                  className="bg-background-dark border-white/10"
                  placeholder="500"
                />
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-text-muted">등급</span>
                  <Badge className={getRankingBadge(parseInt(currentRanking)).color}>
                    {getRankingBadge(parseInt(currentRanking)).text}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-text-light">
                  {currentRanking}위
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Predicted Ranking */}
          <Card className="bg-content-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-text-light">예상 랭킹</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">예상 랭킹</span>
                  <span className={`text-2xl font-bold ${getRankingColor(calculation.predictedRanking)}`}>
                    {calculation.predictedRanking}위
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-muted">총 포인트</span>
                  <span className="text-xl font-semibold text-text-light">
                    {calculation.points.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-muted">승률</span>
                  <span className="text-xl font-semibold text-green-400">
                    {calculation.winRate.toFixed(1)}%
                  </span>
                </div>

                {calculation.pointsNeeded > 0 && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-text-muted">다음 목표까지</span>
                      <span className="text-text-light font-medium">
                        {calculation.pointsNeeded.toLocaleString()} 포인트
                      </span>
                    </div>
                    <Badge variant="outline" className="bg-background-dark border-white/5">
                      {calculation.nextMilestone}
                    </Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Add Match */}
          <Card className="bg-content-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-text-light">경기 결과 추가</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-text-light font-medium mb-2 block">상대 랭킹</Label>
                <Input
                  type="number"
                  value={newMatch.opponentRanking || 1000}
                  onChange={(e) => setNewMatch({...newMatch, opponentRanking: parseInt(e.target.value)})}
                  className="bg-background-dark border-white/10"
                />
              </div>

              <div>
                <Label className="text-text-light font-medium mb-2 block">결과</Label>
                <Select
                  value={newMatch.result}
                  onValueChange={(value: 'win' | 'loss') => setNewMatch({...newMatch, result: value})}
                >
                  <SelectTrigger className="bg-background-dark border-white/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="win">승리</SelectItem>
                    <SelectItem value="loss">패배</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-text-light font-medium mb-2 block">대회 레벨</Label>
                <Select
                  value={newMatch.tournamentLevel}
                  onValueChange={(value: 'local' | 'regional' | 'national' | 'international') => setNewMatch({...newMatch, tournamentLevel: value})}
                >
                  <SelectTrigger className="bg-background-dark border-white/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">지역 대회</SelectItem>
                    <SelectItem value="regional">광역 대회</SelectItem>
                    <SelectItem value="national">전국 대회</SelectItem>
                    <SelectItem value="international">국제 대회</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-text-light font-medium mb-2 block">코트 종류</Label>
                <Select
                  value={newMatch.surface}
                  onValueChange={(value: 'hard' | 'clay' | 'grass' | 'carpet') => setNewMatch({...newMatch, surface: value})}
                >
                  <SelectTrigger className="bg-background-dark border-white/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hard">하드 코트</SelectItem>
                    <SelectItem value="clay">클레이 코트</SelectItem>
                    <SelectItem value="grass">잔디 코트</SelectItem>
                    <SelectItem value="carpet">카펫 코트</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={addMatch} className="w-full bg-primary text-background-dark hover:bg-primary/90">
                <Calculator className="w-4 h-4 mr-2" />
                경기 추가
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Match History */}
        <div className="lg:col-span-2">
          <Card className="bg-content-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-text-light">경기 기록 ({matches.length}경기)</CardTitle>
            </CardHeader>
            <CardContent>
              {matches.length === 0 ? (
                <div className="text-center py-8">
                  <Trophy className="w-16 h-16 text-text-muted mx-auto mb-4" />
                  <p className="text-text-muted">아직 기록된 경기가 없습니다.</p>
                  <p className="text-sm text-text-muted mt-2">위쪽에서 경기 결과를 추가해보세요.</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead className="text-text-light">날짜</TableHead>
                      <TableHead className="text-text-light">상대</TableHead>
                      <TableHead className="text-text-light">결과</TableHead>
                      <TableHead className="text-text-light">대회</TableHead>
                      <TableHead className="text-text-light">코트</TableHead>
                      <TableHead className="text-text-light">포인트</TableHead>
                      <TableHead className="text-text-light">삭제</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {matches.map((match) => {
                      const multiplier = tournamentMultipliers[match.tournamentLevel];
                      const surfaceBonus = surfaceBonuses[match.surface];
                      const rankDiff = match.opponentRanking - parseInt(currentRanking);

                      let pointsEarned = 0;
                      if (match.result === 'win') {
                        const basePoints = Math.max(10, 50 - Math.abs(rankDiff) / 10);
                        pointsEarned = Math.round(basePoints * multiplier * surfaceBonus);
                      } else {
                        const lossPoints = Math.max(5, Math.min(25, (parseInt(currentRanking) - match.opponentRanking) / 20));
                        pointsEarned = -Math.round(lossPoints * multiplier);
                      }

                      return (
                        <TableRow key={match.id} className="border-white/5">
                          <TableCell className="text-text-light">
                            {formatDate(match.date)}
                          </TableCell>
                          <TableCell className="text-text-light">
                            {match.opponentRanking}위
                          </TableCell>
                          <TableCell>
                            <Badge className={match.result === 'win' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                              {match.result === 'win' ? '승' : '패'}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-text-light">
                            {match.tournamentLevel === 'local' ? '지역' :
                             match.tournamentLevel === 'regional' ? '광역' :
                             match.tournamentLevel === 'national' ? '전국' : '국제'}
                          </TableCell>
                          <TableCell className="text-text-light">
                            {match.surface === 'hard' ? '하드' :
                             match.surface === 'clay' ? '클레이' :
                             match.surface === 'grass' ? '잔디' : '카펫'}
                          </TableCell>
                          <TableCell>
                            <span className={pointsEarned >= 0 ? 'text-green-400' : 'text-red-400'}>
                              {pointsEarned >= 0 ? '+' : ''}{pointsEarned}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removeMatch(match.id)}
                              className="border-white/10 hover:border-red-500/50"
                            >
                              삭제
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>

          {/* Ranking Progress */}
          <Card className="mt-6 bg-content-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-text-light">랭킹 향상 목표</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-muted">현재 → 목표</span>
                    <span className="text-sm text-text-light">
                      {currentRanking}위 → {calculation.predictedRanking}위
                    </span>
                  </div>
                  <Progress
                    value={Math.min(100, (parseInt(currentRanking) - calculation.predictedRanking) / parseInt(currentRanking) * 100)}
                    className="h-3"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background-dark rounded-lg">
                    <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-text-light mb-1">
                      {Math.abs(parseInt(currentRanking) - calculation.predictedRanking)}
                    </div>
                    <div className="text-sm text-text-muted">등급 변화</div>
                  </div>

                  <div className="text-center p-4 bg-background-dark rounded-lg">
                    <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-text-light mb-1">
                      {calculation.points.toLocaleString()}
                    </div>
                    <div className="text-sm text-text-muted">총 포인트</div>
                  </div>

                  <div className="text-center p-4 bg-background-dark rounded-lg">
                    <Star className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-text-light mb-1">
                      {calculation.winRate.toFixed(0)}%
                    </div>
                    <div className="text-sm text-text-muted">승률</div>
                  </div>
                </div>

                <div className="bg-background-dark p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-text-light mb-3">향상 전략</h4>
                  <div className="space-y-2 text-sm text-text-muted">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>더 높은 레벨의 대회에 참가하여 더 많은 포인트를 획득하세요.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>자신보다 높은 랭킹의 상대와의 승리가 큰 포인트 향상을 가져옵니다.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>잔디 코트 경기가 가장 높은 포인트 배수를 제공합니다.</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


