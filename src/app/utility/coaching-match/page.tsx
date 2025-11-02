'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MapPin, Clock, Users, Award, MessageCircle, Calendar } from 'lucide-react';

interface Coach {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  location: string;
  experience: number;
  specialties: string[];
  certifications: string[];
  languages: string[];
  pricePerHour: number;
  availability: string[];
  description: string;
  achievements: string[];
}

const sampleCoaches: Coach[] = [
  {
    id: '1',
    name: '김프로 코치',
    image: '/images/coach-kim.jpg',
    rating: 4.9,
    reviews: 247,
    location: '서울 강남구',
    experience: 15,
    specialties: ['포핸드 기술', '전략 지도', '토너먼트 준비'],
    certifications: ['USPTA 인증', '코리아 테니스 협회'],
    languages: ['한국어', '영어'],
    pricePerHour: 80000,
    availability: ['주중 오전', '주말 오후'],
    description: '15년 경력의 프로 코치입니다. 초보자부터 프로 선수까지 다양한 레벨의 선수들을 지도해왔습니다.',
    achievements: ['전국 대회 우승 5회', '국가대표 코치 경력', '수많은 프로 선수 배출']
  },
  {
    id: '2',
    name: '박테니스 코치',
    image: '/images/coach-park.jpg',
    rating: 4.7,
    reviews: 189,
    location: '서울 송파구',
    experience: 12,
    specialties: ['백핸드 기술', '체력 트레이닝', '멘탈 코칭'],
    certifications: ['PTR 인증', '스포츠 심리학 자격증'],
    languages: ['한국어', '일본어'],
    pricePerHour: 70000,
    availability: ['주중 오후', '주말 종일'],
    description: '선수 출신 코치로 현장 경험을 바탕으로 실전 중심의 지도를 제공합니다.',
    achievements: ['아시안게임 동메달', '대학 테니스 감독', '청소년 선수 육성 전문']
  },
  {
    id: '3',
    name: '이코칭 코치',
    image: '/images/coach-lee.jpg',
    rating: 4.8,
    reviews: 156,
    location: '부산 해운대구',
    experience: 10,
    specialties: ['서브 기술', '풋워크', '초보자 지도'],
    certifications: ['USPTA 인증', '테니스 코칭 자격증'],
    languages: ['한국어'],
    pricePerHour: 60000,
    availability: ['주중 종일', '주말 오전'],
    description: '친절하고 세심한 지도로 초보자들에게 특히 인기가 많습니다.',
    achievements: ['지역 대회 우승', '초보자 교육 전문', '5년 연속 우수 코치 선정']
  },
  {
    id: '4',
    name: '최프로 코치',
    image: '/images/coach-choi.jpg',
    rating: 5.0,
    reviews: 98,
    location: '인천 남동구',
    experience: 8,
    specialties: ['더블스 전략', '대회 준비', '기술 분석'],
    certifications: ['ITF 코치 자격증', '데이터 분석 인증'],
    languages: ['한국어', '영어', '중국어'],
    pricePerHour: 90000,
    availability: ['주말 종일', '공휴일'],
    description: '데이터 기반 분석을 활용한 현대적인 코칭을 제공합니다.',
    achievements: ['국제 대회 입상', '코칭 앱 개발', '연구 논문 발표']
  }
];

export default function CoachingMatchPage() {
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedExperience, setSelectedExperience] = useState<string>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');
  const [coachingGoals, setCoachingGoals] = useState<string>('');

  const locations = [
    { value: 'all', label: '전체 지역' },
    { value: '서울', label: '서울' },
    { value: '부산', label: '부산' },
    { value: '인천', label: '인천' },
    { value: '경기', label: '경기' }
  ];

  const specialties = [
    { value: 'all', label: '전체 전문 분야' },
    { value: '포핸드 기술', label: '포핸드 기술' },
    { value: '백핸드 기술', label: '백핸드 기술' },
    { value: '서브 기술', label: '서브 기술' },
    { value: '전략 지도', label: '전략 지도' },
    { value: '체력 트레이닝', label: '체력 트레이닝' },
    { value: '초보자 지도', label: '초보자 지도' }
  ];

  const priceRanges = [
    { value: 'all', label: '전체 가격' },
    { value: '50000', label: '5만원 이하' },
    { value: '50000-70000', label: '5-7만원' },
    { value: '70000-90000', label: '7-9만원' },
    { value: '90000', label: '9만원 이상' }
  ];

  const experienceLevels = [
    { value: 'all', label: '전체 경력' },
    { value: '5', label: '5년 이하' },
    { value: '5-10', label: '5-10년' },
    { value: '10', label: '10년 이상' }
  ];

  const availabilityOptions = [
    { value: 'all', label: '전체 시간' },
    { value: 'weekday-morning', label: '주중 오전' },
    { value: 'weekday-afternoon', label: '주중 오후' },
    { value: 'weekend', label: '주말' },
    { value: 'evening', label: '저녁' }
  ];

  const filteredCoaches = useMemo(() => {
    return sampleCoaches.filter(coach => {
      // 지역 필터
      if (selectedLocation !== 'all' && !coach.location.includes(selectedLocation)) {
        return false;
      }

      // 전문 분야 필터
      if (selectedSpecialty !== 'all' && !coach.specialties.includes(selectedSpecialty)) {
        return false;
      }

      // 가격 범위 필터
      if (selectedPriceRange !== 'all') {
        const price = coach.pricePerHour;
        switch (selectedPriceRange) {
          case '50000':
            if (price > 50000) return false;
            break;
          case '50000-70000':
            if (price < 50000 || price > 70000) return false;
            break;
          case '70000-90000':
            if (price < 70000 || price > 90000) return false;
            break;
          case '90000':
            if (price < 90000) return false;
            break;
        }
      }

      // 경력 필터
      if (selectedExperience !== 'all') {
        const exp = coach.experience;
        switch (selectedExperience) {
          case '5':
            if (exp > 5) return false;
            break;
          case '5-10':
            if (exp < 5 || exp > 10) return false;
            break;
          case '10':
            if (exp < 10) return false;
            break;
        }
      }

      // 시간대 필터
      if (selectedAvailability !== 'all') {
        const hasMatchingTime = coach.availability.some(time => {
          switch (selectedAvailability) {
            case 'weekday-morning':
              return time.includes('주중 오전');
            case 'weekday-afternoon':
              return time.includes('주중 오후');
            case 'weekend':
              return time.includes('주말');
            case 'evening':
              return time.includes('저녁');
            default:
              return false;
          }
        });
        if (!hasMatchingTime) return false;
      }

      return true;
    });
  }, [selectedLocation, selectedSpecialty, selectedPriceRange, selectedExperience, selectedAvailability]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-light mb-4">테니스 코칭 매칭</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          당신의 목표와 스타일에 맞는 최고의 테니스 코치를 찾아보세요.
          전문 코치들과의 1:1 매칭 서비스입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          <Card className="bg-content-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-text-light">코칭 조건 설정</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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

              {/* Specialty */}
              <div>
                <Label className="text-text-light font-medium mb-2 block">전문 분야</Label>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger className="bg-background-dark border-white/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map(specialty => (
                      <SelectItem key={specialty.value} value={specialty.value}>
                        {specialty.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div>
                <Label className="text-text-light font-medium mb-2 block">시간당 가격</Label>
                <RadioGroup value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <div key={range.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={range.value} id={`price-${range.value}`} />
                        <Label htmlFor={`price-${range.value}`} className="text-text-muted cursor-pointer">
                          {range.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Experience */}
              <div>
                <Label className="text-text-light font-medium mb-2 block">코치 경력</Label>
                <RadioGroup value={selectedExperience} onValueChange={setSelectedExperience}>
                  <div className="space-y-2">
                    {experienceLevels.map(level => (
                      <div key={level.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={level.value} id={`exp-${level.value}`} />
                        <Label htmlFor={`exp-${level.value}`} className="text-text-muted cursor-pointer">
                          {level.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Availability */}
              <div>
                <Label className="text-text-light font-medium mb-2 block">선호 시간대</Label>
                <RadioGroup value={selectedAvailability} onValueChange={setSelectedAvailability}>
                  <div className="space-y-2">
                    {availabilityOptions.map(option => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={`avail-${option.value}`} />
                        <Label htmlFor={`avail-${option.value}`} className="text-text-muted cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Goals */}
              <div>
                <Label className="text-text-light font-medium mb-2 block">코칭 목표 (선택)</Label>
                <Textarea
                  placeholder="예: 포핸드 개선, 대회 준비, 체력 향상 등"
                  value={coachingGoals}
                  onChange={(e) => setCoachingGoals(e.target.value)}
                  className="bg-background-dark border-white/10"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coaches List */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-text-light mb-2">
              추천 코치 ({filteredCoaches.length}명)
            </h2>
            {filteredCoaches.length > 0 && (
              <p className="text-text-muted">
                조건에 맞는 코치를 찾았습니다. 프로필을 확인하고 문의해보세요.
              </p>
            )}
          </div>

          {filteredCoaches.length === 0 ? (
            <Card className="bg-content-dark border-white/10">
              <CardContent className="p-12 text-center">
                <Users className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-light mb-2">조건에 맞는 코치가 없습니다</h3>
                <p className="text-text-muted">
                  검색 조건을 조정하거나 다른 지역의 코치를 확인해보세요.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {filteredCoaches.map((coach) => (
                <Card key={coach.id} className="bg-content-dark border-white/10 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Coach Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={coach.image} alt={coach.name} />
                            <AvatarFallback className="bg-primary text-background-dark">
                              {coach.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-text-light mb-1">{coach.name}</h3>
                            <div className="flex items-center gap-4 mb-2">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-text-light font-medium">{coach.rating}</span>
                                <span className="text-text-muted">({coach.reviews})</span>
                              </div>
                              <div className="flex items-center gap-1 text-text-muted">
                                <MapPin className="w-4 h-4" />
                                {coach.location}
                              </div>
                              <div className="flex items-center gap-1 text-text-muted">
                                <Award className="w-4 h-4" />
                                {coach.experience}년
                              </div>
                            </div>
                            <p className="text-text-muted text-sm mb-3">{coach.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {coach.specialties.slice(0, 3).map(specialty => (
                                <Badge key={specialty} className="bg-primary/20 text-primary">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-text-light mb-2">주요 성과</h4>
                          <ul className="text-sm text-text-muted space-y-1">
                            {coach.achievements.slice(0, 2).map((achievement, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Certifications & Languages */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-text-muted mb-1">자격증</p>
                            <div className="flex flex-wrap gap-1">
                              {coach.certifications.slice(0, 2).map(cert => (
                                <Badge key={cert} variant="outline" className="text-xs bg-background-dark border-white/5">
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-text-muted mb-1">언어</p>
                            <div className="flex flex-wrap gap-1">
                              {coach.languages.map(lang => (
                                <Badge key={lang} variant="outline" className="text-xs bg-background-dark border-white/5">
                                  {lang}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Booking Info */}
                      <div className="md:w-64 flex flex-col justify-between">
                        <div className="space-y-4">
                          <div>
                            <p className="text-2xl font-bold text-text-light mb-1">
                              {formatPrice(coach.pricePerHour)}
                            </p>
                            <p className="text-sm text-text-muted">시간당</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-text-light mb-2">가능 시간대</h4>
                            <div className="flex flex-wrap gap-1">
                              {coach.availability.slice(0, 2).map(time => (
                                <Badge key={time} variant="outline" className="text-xs bg-background-dark border-white/5">
                                  {time}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 mt-6">
                          <Button className="w-full bg-primary text-background-dark hover:bg-primary/90">
                            <Calendar className="w-4 h-4 mr-2" />
                            코칭 신청
                          </Button>
                          <Button variant="outline" className="w-full border-white/10 hover:border-primary/50">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            문의하기
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tips */}
      <Card className="mt-12 bg-content-dark border-white/10">
        <CardHeader>
          <CardTitle className="text-text-light">코치 선택 팁</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">첫 코칭은 짧게</h4>
              <p className="text-text-muted text-sm">
                처음에는 30분 또는 1시간 코칭부터 시작하세요. 서로 맞는지 확인하고
                장기적인 관계를 구축하는 것이 중요합니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">목표 명확히 하기</h4>
              <p className="text-text-muted text-sm">
                코칭을 받기 전에 자신의 목표를 명확히 하세요. 기술 향상, 체력 강화,
                멘탈 코칭 등 구체적인 목표가 있어야 효과적입니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">리뷰 확인하기</h4>
              <p className="text-text-muted text-sm">
                코치의 이전 학생 리뷰를 확인하세요. 비슷한 레벨의 학생들이 어떤
                발전을 했는지 확인하는 것이 좋습니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">정기적 코칭</h4>
              <p className="text-text-muted text-sm">
                테니스 실력 향상을 위해서는 정기적인 코칭이 필요합니다.
                주 1-2회 꾸준한 코칭을 추천합니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


