'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  MapPin as MapPinIcon
} from 'lucide-react';

export default function CourtBooking() {
  const [selectedCourt, setSelectedCourt] = useState<number | null>(null);

  const courts = [
    {
      id: 1,
      name: "실내 하드코트 A",
      type: "실내 하드",
      location: "서울 강남점",
      price: 50000,
      rating: 4.8,
      available: true,
      features: ["난방 시스템", "조명 최적화", "샤워실"]
    },
    {
      id: 2,
      name: "야외 클레이코트 B",
      type: "야외 클레이",
      location: "서울 용산점",
      price: 40000,
      rating: 4.6,
      available: true,
      features: ["자연 채광", "주차장", "라커룸"]
    },
    {
      id: 3,
      name: "실내 카펫코트 C",
      type: "실내 카펫",
      location: "서울 송파점",
      price: 45000,
      rating: 4.7,
      available: false,
      features: ["온도 조절", "음향 시스템", "카페"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CalendarIcon className="h-8 w-8" />
            <h1 className="text-4xl font-bold">테니스 코트 예약 시스템</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            전국 테니스 코트를 실시간으로 예약하세요.<br />
            실내외 코트, 시간대별 예약, 편리한 결제 시스템
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>실시간 예약</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>무료 취소</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>24시간 운영</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <CardContent>
              <MapPinIcon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">전국 코트 네트워크</h3>
              <p className="text-gray-600">서울, 부산, 대구 등 전국 50여개 코트 실시간 예약</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent>
              <ClockIcon className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">플렉서블 예약</h3>
              <p className="text-gray-600">오전 6시부터 밤 11시까지 원하는 시간대 선택</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent>
              <Users className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">커뮤니티 매칭</h3>
              <p className="text-gray-600">함께 칠 사람을 찾거나 코치와 1:1 레슨 예약</p>
            </CardContent>
          </Card>
        </div>

        {/* Court Selection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">코트 선택하기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courts.map((court) => (
              <Card
                key={court.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedCourt === court.id
                    ? 'ring-2 ring-blue-500 shadow-lg'
                    : court.available
                      ? 'hover:shadow-md'
                      : 'opacity-60'
                }`}
                onClick={() => court.available && setSelectedCourt(court.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{court.name}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {court.type}
                      </Badge>
                    </div>
                    {!court.available && (
                      <Badge variant="destructive">예약 마감</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{court.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{court.rating}점</span>
                    </div>

                    <div className="text-2xl font-bold text-blue-600">
                      ₩{court.price.toLocaleString()}
                      <span className="text-sm text-gray-500 font-normal">/시간</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {court.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-md mx-auto p-8 bg-gradient-to-r from-blue-50 to-green-50">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">지금 바로 예약하세요!</h3>
              <p className="text-gray-600 mb-6">
                {selectedCourt
                  ? `${courts.find(c => c.id === selectedCourt)?.name} 코트를 선택하셨습니다.`
                  : '원하는 코트를 선택하고 날짜/시간을 지정해보세요.'
                }
              </p>
              <Link href={selectedCourt ? "/utility/court-booking/test" : "#"}>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  disabled={!selectedCourt}
                >
                  {selectedCourt ? '예약 진행하기' : '코트를 먼저 선택하세요'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-xs text-gray-500 mt-4">
                무료 취소 가능 • 실시간 예약 확인 • 안전한 결제
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
