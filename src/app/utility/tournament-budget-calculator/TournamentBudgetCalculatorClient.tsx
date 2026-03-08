"use client";

import { useMemo, useState } from "react";
import { Calculator, CreditCard, Hotel, Train } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function formatWon(value: number) {
  return `${Math.round(value).toLocaleString("ko-KR")}원`;
}

export default function TournamentBudgetCalculatorClient() {
  const [entryFee, setEntryFee] = useState("60000");
  const [transport, setTransport] = useState("80000");
  const [lodgingPerNight, setLodgingPerNight] = useState("90000");
  const [nights, setNights] = useState("1");
  const [foodPerDay, setFoodPerDay] = useState("35000");
  const [days, setDays] = useState("2");
  const [stringCost, setStringCost] = useState("30000");
  const [misc, setMisc] = useState("20000");

  const budget = useMemo(() => {
    const lodging = (Number(lodgingPerNight) || 0) * (Number(nights) || 0);
    const food = (Number(foodPerDay) || 0) * (Number(days) || 0);
    const entry = Number(entryFee) || 0;
    const move = Number(transport) || 0;
    const strings = Number(stringCost) || 0;
    const extra = Number(misc) || 0;
    const subtotal = lodging + food + entry + move + strings + extra;
    const buffer = Math.round(subtotal * 0.12);
    const recommended = subtotal + buffer;

    return {
      lodging,
      food,
      subtotal,
      buffer,
      recommended,
    };
  }, [days, entryFee, foodPerDay, lodgingPerNight, misc, nights, stringCost, transport]);

  const items = [
    { label: "참가비", value: Number(entryFee) || 0, icon: CreditCard },
    { label: "교통", value: Number(transport) || 0, icon: Train },
    { label: "숙박", value: budget.lodging, icon: Hotel },
    { label: "식비", value: budget.food, icon: Calculator },
    { label: "스트링/장비", value: Number(stringCost) || 0, icon: CreditCard },
    { label: "기타", value: Number(misc) || 0, icon: Calculator },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card className="border-slate-200">
          <CardHeader>
            <Badge className="w-fit bg-slate-900 text-white">Planning Utility</Badge>
            <CardTitle className="mt-3 text-3xl">테니스 대회 예산 계산기</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              원정 대회 전에 총액과 비상 버퍼까지 한 번에 계산합니다.
            </p>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="entryFee">참가비</Label>
              <Input id="entryFee" type="number" value={entryFee} onChange={(e) => setEntryFee(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transport">교통비</Label>
              <Input id="transport" type="number" value={transport} onChange={(e) => setTransport(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lodging">1박 숙박비</Label>
              <Input id="lodging" type="number" value={lodgingPerNight} onChange={(e) => setLodgingPerNight(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nights">숙박 일수</Label>
              <Input id="nights" type="number" value={nights} onChange={(e) => setNights(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="food">1일 식비</Label>
              <Input id="food" type="number" value={foodPerDay} onChange={(e) => setFoodPerDay(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="days">전체 일정 일수</Label>
              <Input id="days" type="number" value={days} onChange={(e) => setDays(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="strings">스트링/그립 교체</Label>
              <Input id="strings" type="number" value={stringCost} onChange={(e) => setStringCost(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="misc">기타 예비비</Label>
              <Input id="misc" type="number" value={misc} onChange={(e) => setMisc(e.target.value)} />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card className="bg-gradient-to-br from-slate-900 to-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-xl">총 예산</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div>
                <p className="text-sm text-slate-300">기본 합계</p>
                <p className="text-3xl font-bold">{formatWon(budget.subtotal)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">권장 버퍼 12%</p>
                <p className="text-xl font-semibold">{formatWon(budget.buffer)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">추천 준비 금액</p>
                <p className="text-2xl font-bold text-emerald-300">{formatWon(budget.recommended)}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">항목별 비중</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => {
                const Icon = item.icon;
                const ratio = budget.subtotal > 0 ? Math.round((item.value / budget.subtotal) * 100) : 0;
                return (
                  <div key={item.label}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-slate-500" />
                        <span>{item.label}</span>
                      </div>
                      <span>{formatWon(item.value)} / {ratio}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-slate-800" style={{ width: `${ratio}%` }} />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
