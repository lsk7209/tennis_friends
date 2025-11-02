'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Trophy, Users, Clock, Star, Filter, Search } from 'lucide-react';

interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  entryFee: number;
  prizePool: number;
  maxParticipants: number;
  currentParticipants: number;
  surface: 'hard' | 'clay' | 'grass' | 'carpet';
  format: 'singles' | 'doubles' | 'mixed';
  organizer: string;
  description: string;
  facilities: string[];
  contact: string;
  registrationDeadline: string;
  status: 'open' | 'closed' | 'upcoming' | 'ongoing';
}

const tournaments: Tournament[] = [
  {
    id: '1',
    name: '서울 테니스 오픈 2025',
    date: '2025-03-15',
    location: '서울 올림픽공원 테니스장',
    category: '시드니 오픈 예선',
    level: 'advanced',
    entryFee: 50000,
    prizePool: 2000000,
    maxParticipants: 64,
    currentParticipants: 42,
    surface: 'hard',
    format: 'singles',
    organizer: '대한테니스협회',
    description: '국내 최대 규모의 테니스 대회로 프로 선수들의 참여가 활발합니다.',
    facilities: ['실내 코트', '관람석', '샤워실', '주차장'],
    contact: '02-123-4567',
    registrationDeadline: '2025-03-01',
    status: 'open'
  },
  {
    id: '2',
    name: '부산 클럽 챔피언십',
    date: '2025-04-20',
    location: '부산 테니스장',
    category: '클럽 대회',
    level: 'intermediate',
    entryFee: 30000,
    prizePool: 800000,
    maxParticipants: 32,
    currentParticipants: 28,
    surface: 'clay',
    format: 'singles',
    organizer: '부산테니스협회',
    description: '클럽 회원들을 위한 친목 중심의 대회입니다.',
    facilities: ['실외 코트', '라커룸', '카페'],
    contact: '051-987-6543',
    registrationDeadline: '2025-04-10',
    status: 'open'
  },
  {
    id: '3',
    name: '인천 주니어 테니스 페스티벌',
    date: '2025-05-10',
    location: '인천 문학경기장',
    category: '주니어 대회',
    level: 'beginner',
    entryFee: 20000,
    prizePool: 500000,
    maxParticipants: 48,
    currentParticipants: 35,
    surface: 'hard',
    format: 'singles',
    organizer: '인천테니스연맹',
    description: '청소년 테니스 꿈나무들을 위한 대회입니다.',
    facilities: ['다목적 코트', '관람대', '의무실'],
    contact: '032-555-1234',
    registrationDeadline: '2025-04-25',
    status: 'upcoming'
  },
  {
    id: '4',
    name: '대구 더블스 마스터즈',
    date: '2025-06-05',
    location: '대구 스포츠파크',
    category: '더블스 대회',
    level: 'advanced',
    entryFee: 40000,
    prizePool: 1200000,
    maxParticipants: 24,
    currentParticipants: 18,
    surface: 'grass',
    format: 'doubles',
    organizer: '경북테니스협회',
    description: '전문 더블스 선수들을 위한 프리미엄 대회입니다.',
    facilities: ['잔디 코트', 'VIP 라커룸', '물리치료실'],
    contact: '053-777-8888',
    registrationDeadline: '2025-05-20',
    status: 'open'
  },
  {
    id: '5',
    name: '제주 아일랜드 테니스 클래식',
    date: '2025-07-15',
    location: '제주도 테니스 리조트',
    category: '리조트 대회',
    level: 'intermediate',
    entryFee: 60000,
    prizePool: 1500000,
    maxParticipants: 40,
    currentParticipants: 22,
    surface: 'hard',
    format: 'mixed',
    organizer: '제주테니스협회',
    description: '휴양지에서의 테니스 대회로 참가자들에게 특별한 경험을 제공합니다.',
    facilities: ['리조트 코트', '스파', '레스토랑', '숙박'],
    contact: '064-999-0000',
    registrationDeadline: '2025-06-30',
    status: 'upcoming'
  }
];

export default function TournamentSchedulePage() {
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedSurface, setSelectedSurface] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [maxEntryFee, setMaxEntryFee] = useState<string>('all');

  const locations = [
    { value: 'all', label: '전체 지역' },
    { value: '서울', label: '서울' },
    { value: '부산', label: '부산' },
    { value: '인천', label: '인천' },
    { value: '대구', label: '대구' },
    { value: '제주', label: '제주' }
  ];

  const levels = [
    { value: 'all', label: '전체 레벨' },
    { value: 'beginner', label: '초보자' },
    { value: 'intermediate', label: '중급자' },
    { value: 'advanced', label: '상급자' },
    { value: 'professional', label: '프로' }
  ];

  const surfaces = [
    { value: 'all', label: '전체 코트' },
    { value: 'hard', label: '하드 코트' },
    { value: 'clay', label: '클레이 코트' },
    { value: 'grass', label: '잔디 코트' },
    { value: 'carpet', label: '카펫 코트' }
  ];

  const formats = [
    { value: 'all', label: '전체 형식' },
    { value: 'singles', label: '단식' },
    { value: 'doubles', label: '복식' },
    { value: 'mixed', label: '혼합 복식' }
  ];

  const statuses = [
    { value: 'all', label: '전체 상태' },
    { value: 'open', label: '접수 중' },
    { value: 'upcoming', label: '접수 예정' },
    { value: 'ongoing', label: '진행 중' },
    { value: 'closed', label: '접수 마감' }
  ];

  const entryFeeOptions = [
    { value: 'all', label: '전체 비용' },
    { value: '20000', label: '2만원 이하' },
    { value: '30000', label: '3만원 이하' },
    { value: '50000', label: '5만원 이하' },
    { value: '100000', label: '10만원 이하' }
  ];

  const filteredTournaments = useMemo(() => {
    return tournaments.filter(tournament => {
      // 지역 필터
      if (selectedLocation !== 'all' && !tournament.location.includes(selectedLocation)) {
        return false;
      }

      // 레벨 필터
      if (selectedLevel !== 'all' && tournament.level !== selectedLevel) {
        return false;
      }

      // 코트 필터
      if (selectedSurface !== 'all' && tournament.surface !== selectedSurface) {
        return false;
      }

      // 형식 필터
      if (selectedFormat !== 'all' && tournament.format !== selectedFormat) {
        return false;
      }

      // 상태 필터
      if (selectedStatus !== 'all' && tournament.status !== selectedStatus) {
        return false;
      }

      // 참가비 필터
      if (maxEntryFee !== 'all') {
        const fee = parseInt(maxEntryFee);
        if (tournament.entryFee > fee) return false;
      }

      // 검색 필터
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return tournament.name.toLowerCase().includes(query) ||
               tournament.organizer.toLowerCase().includes(query) ||
               tournament.location.toLowerCase().includes(query);
      }

      return true;
    });
  }, [selectedLocation, selectedLevel, selectedSurface, selectedFormat, selectedStatus, maxEntryFee, searchQuery]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      minimumFractionDigits: 0
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-blue-100 text-blue-800';
      case 'advanced': return 'bg-purple-100 text-purple-800';
      case 'professional': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-500/20 text-green-400';
      case 'upcoming': return 'bg-blue-500/20 text-blue-400';
      case 'ongoing': return 'bg-yellow-500/20 text-yellow-400';
      case 'closed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSurfaceIcon = (surface: string) => {
    switch (surface) {
      case 'hard': return '🏓';
      case 'clay': return '🏜️';
      case 'grass': return '🌱';
      case 'carpet': return '🏠';
      default: return '🎾';
    }
  };

  const getAvailabilityPercentage = (current: number, max: number) => {
    return Math.round((current / max) * 100);
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-light mb-4">테니스 대회 일정</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          전국 테니스 대회 일정을 확인하고 참가 신청하세요. 실력에 맞는 대회를 찾아보세요.
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8 bg-content-dark border-white/10">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Location */}
            <div>
              <Label className="text-text-light font-medium mb-2 block">지역</Label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="bg-background-dark border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Level */}
            <div>
              <Label className="text-text-light font-medium mb-2 block">참가 레벨</Label>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="bg-background-dark border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {levels.map(level => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Surface */}
            <div>
              <Label className="text-text-light font-medium mb-2 block">코트 종류</Label>
              <Select value={selectedSurface} onValueChange={setSelectedSurface}>
                <SelectTrigger className="bg-background-dark border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {surfaces.map(surface => (
                    <SelectItem key={surface.value} value={surface.value}>
                      {surface.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Format */}
            <div>
              <Label className="text-text-light font-medium mb-2 block">경기 형식</Label>
              <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                <SelectTrigger className="bg-background-dark border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {formats.map(format => (
                    <SelectItem key={format.value} value={format.value}>
                      {format.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Status */}
            <div>
              <Label className="text-text-light font-medium mb-2 block">접수 상태</Label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="bg-background-dark border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map(status => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Entry Fee */}
            <div>
              <Label className="text-text-light font-medium mb-2 block">참가비</Label>
              <Select value={maxEntryFee} onValueChange={setMaxEntryFee}>
                <SelectTrigger className="bg-background-dark border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {entryFeeOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search */}
            <div>
              <Label className="text-text-light font-medium mb-2 block">대회 검색</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                <Input
                  placeholder="대회명, 주최자, 장소"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background-dark border-white/10"
                />
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-sm text-text-muted pt-4 border-t border-white/10">
            <span>총 {filteredTournaments.length}개 대회</span>
            <Button variant="outline" size="sm" className="border-white/10 hover:border-primary/50">
              <Filter className="w-4 h-4 mr-2" />
              필터 초기화
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tournaments List */}
      {filteredTournaments.length === 0 ? (
        <Card className="bg-content-dark border-white/10">
          <CardContent className="p-12 text-center">
            <Trophy className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-light mb-2">조건에 맞는 대회가 없습니다</h3>
            <p className="text-text-muted">
              검색 조건을 조정하거나 다른 지역의 대회를 확인해보세요.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {filteredTournaments.map((tournament) => (
            <Card key={tournament.id} className="bg-content-dark border-white/10 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Tournament Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-text-light mb-2">{tournament.name}</h3>
                        <p className="text-text-muted mb-3">{tournament.description}</p>
                      </div>
                      <Badge className={getStatusColor(tournament.status)}>
                        {tournament.status === 'open' ? '접수 중' :
                         tournament.status === 'upcoming' ? '접수 예정' :
                         tournament.status === 'ongoing' ? '진행 중' : '접수 마감'}
                      </Badge>
                    </div>

                    {/* Key Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-xs text-text-muted">일정</p>
                          <p className="text-sm text-text-light">{formatDate(tournament.date)}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-xs text-text-muted">장소</p>
                          <p className="text-sm text-text-light">{tournament.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getSurfaceIcon(tournament.surface)}</span>
                        <div>
                          <p className="text-xs text-text-muted">코트</p>
                          <p className="text-sm text-text-light">
                            {tournament.surface === 'hard' ? '하드' :
                             tournament.surface === 'clay' ? '클레이' :
                             tournament.surface === 'grass' ? '잔디' : '카펫'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-xs text-text-muted">상금</p>
                          <p className="text-sm text-text-light">{formatPrice(tournament.prizePool)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className={getLevelColor(tournament.level)}>
                        {tournament.level === 'beginner' ? '초보자' :
                         tournament.level === 'intermediate' ? '중급자' :
                         tournament.level === 'advanced' ? '상급자' : '프로'}
                      </Badge>
                      <Badge variant="outline" className="bg-background-dark border-white/5">
                        {tournament.format === 'singles' ? '단식' :
                         tournament.format === 'doubles' ? '복식' : '혼합 복식'}
                      </Badge>
                      <Badge variant="outline" className="bg-background-dark border-white/5">
                        참가비: {formatPrice(tournament.entryFee)}
                      </Badge>
                    </div>

                    {/* Facilities */}
                    <div className="mb-4">
                      <p className="text-sm text-text-muted mb-2">시설: {tournament.facilities.join(', ')}</p>
                    </div>
                  </div>

                  {/* Registration Info */}
                  <div className="lg:w-80 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Participants */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-text-muted">참가 현황</span>
                          <span className="text-sm text-text-light">
                            {tournament.currentParticipants}/{tournament.maxParticipants}
                          </span>
                        </div>
                        <div className="w-full bg-background-dark rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${getAvailabilityPercentage(tournament.currentParticipants, tournament.maxParticipants)}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-text-muted mt-1">
                          {getAvailabilityPercentage(tournament.currentParticipants, tournament.maxParticipants)}% 등록됨
                        </p>
                      </div>

                      {/* Deadlines */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm text-text-muted">접수 마감:</span>
                          <span className="text-sm text-text-light">{formatDate(tournament.registrationDeadline)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-text-muted">주최:</span>
                          <span className="text-sm text-text-light">{tournament.organizer}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2 mt-6">
                      <Button
                        className="w-full bg-primary text-background-dark hover:bg-primary/90"
                        disabled={tournament.status !== 'open'}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {tournament.status === 'open' ? '참가 신청' : '접수 대기'}
                      </Button>
                      <Button variant="outline" className="w-full border-white/10 hover:border-primary/50">
                        자세한 정보
                      </Button>
                      <p className="text-xs text-text-muted text-center">
                        문의: {tournament.contact}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Upcoming Tournaments Summary */}
      <Card className="mt-12 bg-content-dark border-white/10">
        <CardHeader>
          <CardTitle className="text-text-light">다가오는 주요 대회</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tournaments.slice(0, 3).map((tournament) => (
              <div key={tournament.id} className="p-4 bg-background-dark rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-text-light">{tournament.name}</h4>
                  <Badge className={getStatusColor(tournament.status)}>
                    {tournament.status === 'open' ? '접수 중' : '예정'}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {formatDate(tournament.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    {tournament.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-3 h-3" />
                    {formatPrice(tournament.prizePool)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


