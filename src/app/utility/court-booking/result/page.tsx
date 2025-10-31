'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  Download,
  Share2,
  ArrowRight,
  Home,
  CalendarIcon,
  ClockIcon,
  MapPinIcon
} from 'lucide-react';

export default function CourtBookingResult() {
  const [bookingData] = useState({
    id: 'BK2025001',
    court: '실내 하드코트 A',
    location: '서울 강남점',
    date: '2025-01-15',
    time: '14:00',
    duration: '1시간',
    price: 50000,
    status: 'confirmed'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="h-12 w-12" />
            <h1 className="text-4xl font-bold">예약 완료!</h1>
          </div>
          <p className="text-xl opacity-90">
            테니스 코트 예약이 성공적으로 완료되었습니다.<br />
            즐거운 테니스 타임을 보내세요!
          </p>
        </div>
      </div>

      {/* Booking Details */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                예약 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">예약 번호</span>
                <Badge variant="secondary" className="font-mono">
                  {bookingData.id}
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">코트</span>
                <span className="font-medium">{bookingData.court}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">장소</span>
                <span className="font-medium">{bookingData.location}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">날짜</span>
                <span className="font-medium">{bookingData.date}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">시간</span>
                <span className="font-medium">{bookingData.time} ({bookingData.duration})</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">상태</span>
                <Badge className="bg-green-100 text-green-800">
                  예약 완료
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Payment Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                결제 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">결제 금액</span>
                  <span className="text-2xl font-bold text-green-600">
                    ₩{bookingData.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  실내 하드코트 A (1시간)
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">결제 방법</span>
                <span className="font-medium">신용카드</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">결제 상태</span>
                <Badge className="bg-green-100 text-green-800">
                  결제 완료
                </Badge>
              </div>

              <div className="pt-4 border-t">
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  영수증 다운로드
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notices */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-orange-600">📋 예약 유의사항</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm">예약 시간 10분 전까지 도착해주세요.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm">테니스 라켓과 공은 개인 지참을 권장합니다.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm">코트 이용 시 실내화 착용이 필수입니다.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm">예약 변경/취소는 이용 24시간 전까지 가능합니다.</p>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/" className="flex-1">
            <Button variant="outline" className="w-full">
              <Home className="h-4 w-4 mr-2" />
              홈으로 가기
            </Button>
          </Link>

          <Link href="/utility" className="flex-1">
            <Button variant="outline" className="w-full">
              다른 유틸리티 보기
            </Button>
          </Link>

          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Share2 className="h-4 w-4 mr-2" />
            예약 공유하기
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center p-4 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent>
              <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h3 className="font-medium mb-1">예약 관리</h3>
              <p className="text-sm text-gray-600">예약 변경/취소</p>
            </CardContent>
          </Card>

          <Card className="text-center p-4 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent>
              <MapPin className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-medium mb-1">코트 안내</h3>
              <p className="text-sm text-gray-600">위치 및 시설 정보</p>
            </CardContent>
          </Card>

          <Card className="text-center p-4 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent>
              <Clock className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h3 className="font-medium mb-1">이용 시간 연장</h3>
              <p className="text-sm text-gray-600">추가 예약하기</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
