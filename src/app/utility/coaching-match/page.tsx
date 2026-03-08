'use client';

import { useMemo, useState } from 'react';
import { Award, Calendar, MapPin, MessageCircle, Star, Users } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface Coach {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  experience: number;
  specialties: string[];
  lessonType: string[];
  pricePerHour: number;
  intro: string;
}

const coaches: Coach[] = [
  {
    id: 'kim',
    name: '김도윤 코치',
    location: '서울 강남',
    rating: 4.9,
    reviews: 128,
    experience: 14,
    specialties: ['서브', '경기 운영', '입문 교정'],
    lessonType: ['평일 저녁', '주말 오전'],
    pricePerHour: 80000,
    intro: '서브 리듬과 랠리 패턴 교정에 강한 코치로, 성인 입문자와 동호인 레슨 비중이 높습니다.',
  },
  {
    id: 'lee',
    name: '이서준 코치',
    location: '분당',
    rating: 4.8,
    reviews: 96,
    experience: 10,
    specialties: ['백핸드', '풋워크', '주니어 육성'],
    lessonType: ['평일 오전', '주말 오후'],
    pricePerHour: 70000,
    intro: '기본기와 발 움직임을 정리하는 수업이 강점이며, 영상 피드백을 함께 제공합니다.',
  },
  {
    id: 'park',
    name: '박하린 코치',
    location: '송파',
    rating: 4.7,
    reviews: 84,
    experience: 8,
    specialties: ['복식 포지션', '네트 플레이', '여성 레슨'],
    lessonType: ['평일 저녁', '주말 종일'],
    pricePerHour: 65000,
    intro: '복식 포메이션과 실전 의사결정 훈련을 세밀하게 잡아 주는 스타일입니다.',
  },
  {
    id: 'choi',
    name: '최민재 코치',
    location: '인천',
    rating: 5.0,
    reviews: 41,
    experience: 12,
    specialties: ['대회 준비', '멘탈 루틴', '전술 분석'],
    lessonType: ['주말 종일', '평일 오후'],
    pricePerHour: 90000,
    intro: '시합 준비 루틴과 패턴 분석에 강하며, 대회 직전 단기 집중 코칭 수요가 많습니다.',
  },
];

export default function CoachingMatchPage() {
  const [region, setRegion] = useState('all');
  const [focus, setFocus] = useState('all');
  const [budget, setBudget] = useState('all');
  const [time, setTime] = useState('all');
  const [goalNote, setGoalNote] = useState('');

  const filtered = useMemo(() => {
    return coaches.filter((coach) => {
      if (region !== 'all' && !coach.location.includes(region)) return false;
      if (focus !== 'all' && !coach.specialties.includes(focus)) return false;
      if (budget === 'under70' && coach.pricePerHour > 70000) return false;
      if (budget === '70to80' && (coach.pricePerHour < 70000 || coach.pricePerHour > 80000)) return false;
      if (budget === 'over80' && coach.pricePerHour < 80000) return false;
      if (time !== 'all' && !coach.lessonType.some((slot) => slot.includes(time))) return false;
      return true;
    });
  }, [budget, focus, region, time]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(price);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#eff6ff_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-slate-900 px-8 py-10 text-white shadow-2xl">
          <Badge className="bg-white/10 text-white hover:bg-white/10">코칭 매칭</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">내 목표에 맞는 테니스 코치 찾기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            레슨은 유명한 코치를 고르는 것보다 내 목표와 시간대, 예산에 맞는 코치를 찾는 것이 더 중요합니다.
            조건을 좁혀 현재 상황에 맞는 후보를 빠르게 확인해 보세요.
          </p>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle>매칭 조건</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-2 block">지역</Label>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체</SelectItem>
                    <SelectItem value="서울">서울</SelectItem>
                    <SelectItem value="분당">분당</SelectItem>
                    <SelectItem value="송파">송파</SelectItem>
                    <SelectItem value="인천">인천</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2 block">집중 분야</Label>
                <Select value={focus} onValueChange={setFocus}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체</SelectItem>
                    <SelectItem value="서브">서브</SelectItem>
                    <SelectItem value="백핸드">백핸드</SelectItem>
                    <SelectItem value="복식 포지션">복식 포지션</SelectItem>
                    <SelectItem value="대회 준비">대회 준비</SelectItem>
                    <SelectItem value="입문 교정">입문 교정</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2 block">예산</Label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체</SelectItem>
                    <SelectItem value="under70">7만원 이하</SelectItem>
                    <SelectItem value="70to80">7만~8만원</SelectItem>
                    <SelectItem value="over80">8만원 이상</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2 block">가능 시간</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체</SelectItem>
                    <SelectItem value="평일 오전">평일 오전</SelectItem>
                    <SelectItem value="평일 오후">평일 오후</SelectItem>
                    <SelectItem value="평일 저녁">평일 저녁</SelectItem>
                    <SelectItem value="주말">주말</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="goal-note" className="mb-2 block">코칭 목표 메모</Label>
                <Textarea
                  id="goal-note"
                  value={goalNote}
                  onChange={(event) => setGoalNote(event.target.value)}
                  placeholder="예: 세컨드 서브 불안, 복식 포지션 정리, 대회 전 4주 집중"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">추천 코치</h2>
              <Badge variant="outline">{filtered.length}명</Badge>
            </div>

            {filtered.length === 0 ? (
              <Card className="border-dashed border-slate-300 bg-white">
                <CardContent className="p-10 text-center text-slate-600">
                  현재 조건에 맞는 코치가 없습니다. 예산이나 시간대를 조금 넓혀 보세요.
                </CardContent>
              </Card>
            ) : (
              filtered.map((coach) => (
                <Card key={coach.id} className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex flex-1 gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="bg-sky-100 text-sky-700">{coach.name.slice(0, 1)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-semibold text-slate-900">{coach.name}</h3>
                            <div className="flex items-center gap-1 text-sm text-slate-600">
                              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                              {coach.rating} ({coach.reviews})
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600">
                            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{coach.location}</span>
                            <span className="flex items-center gap-1"><Award className="h-4 w-4" />경력 {coach.experience}년</span>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-slate-600">{coach.intro}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {coach.specialties.map((item) => (
                              <Badge key={item} className="bg-sky-100 text-sky-700 hover:bg-sky-100">{item}</Badge>
                            ))}
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {coach.lessonType.map((slot) => (
                              <Badge key={slot} variant="outline">{slot}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex w-full flex-col justify-between rounded-2xl bg-slate-50 p-5 md:w-64">
                        <div>
                          <p className="text-sm text-slate-500">1시간 레슨</p>
                          <p className="mt-2 text-2xl font-bold text-slate-900">{formatPrice(coach.pricePerHour)}</p>
                          {goalNote.trim() ? (
                            <p className="mt-4 text-sm leading-6 text-slate-600">
                              메모 반영 포인트: <span className="font-medium text-slate-900">{goalNote}</span>
                            </p>
                          ) : (
                            <p className="mt-4 text-sm leading-6 text-slate-600">
                              목표 메모를 적으면 상담 시 질문을 더 구체적으로 정리할 수 있습니다.
                            </p>
                          )}
                        </div>

                        <div className="mt-6 space-y-2">
                          <Button className="w-full bg-sky-600 text-white hover:bg-sky-700">
                            <Calendar className="mr-2 h-4 w-4" />
                            레슨 문의
                          </Button>
                          <Button variant="outline" className="w-full">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            상담 메모 준비
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}

            <Card className="border-slate-200 bg-slate-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Users className="h-5 w-5 text-sky-600" />
                  코치 선택 팁
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="font-semibold text-slate-900">한 번에 너무 많은 목표를 잡지 않기</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">첫 4주는 서브, 리턴, 풋워크처럼 우선순위 하나만 정하는 편이 좋습니다.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">시간대와 코트 접근성 확인</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">실력이 비슷해도 이동 부담이 적은 코치가 실제 지속률은 더 높습니다.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">상담 전 질문 3개 준비</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">레슨 방식, 숙제 유무, 영상 피드백 여부를 먼저 확인하면 판단이 빨라집니다.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
