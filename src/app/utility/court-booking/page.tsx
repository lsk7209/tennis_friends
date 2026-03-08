"use client";

import Link from "next/link";
import { CalendarDays, CheckCircle2, Clock3, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courts = [
  { name: "실내 하드코트", location: "서울 강남권", price: "50,000원 / 시간", status: "예약 가능" },
  { name: "실외 클레이코트", location: "서울 용산권", price: "40,000원 / 시간", status: "예약 가능" },
  { name: "실내 카펫코트", location: "서울 송파권", price: "45,000원 / 시간", status: "대기 필요" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6">
        <Card className="border-blue-100 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <CardHeader>
            <Badge className="w-fit bg-blue-600 text-white">Court Utility</Badge>
            <CardTitle className="mt-3 text-4xl">테니스 코트 예약</CardTitle>
            <p className="text-base leading-7 text-muted-foreground">
              지역, 코트 타입, 시간대 기준으로 예약 흐름을 빠르게 확인하는 데모 페이지입니다.
            </p>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Link href="/utility/court-booking/test">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <CalendarDays className="mr-2 h-4 w-4" />
                예약 흐름 보기
              </Button>
            </Link>
            <Link href="/utility/court-booking/result">
              <Button variant="outline">
                <Clock3 className="mr-2 h-4 w-4" />
                결과 예시 보기
              </Button>
            </Link>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          {courts.map((court) => (
            <Card key={court.name}>
              <CardHeader>
                <CardTitle className="text-xl">{court.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-6">
                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  {court.location}
                </p>
                <p>{court.price}</p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  {court.status}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
