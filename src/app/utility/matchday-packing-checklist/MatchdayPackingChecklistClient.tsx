"use client";

import { useMemo, useState } from "react";
import { CheckSquare, CloudRain, Sun, Thermometer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Weather = "normal" | "hot" | "cold" | "rain";
type MatchType = "singles" | "doubles";
type WeatherOption = {
  value: Weather;
  label: string;
  icon: typeof Thermometer;
};

const baseItems = ["라켓 2자루 이상", "볼캡 또는 선캡", "수건", "물통", "에너지바", "신분증/참가 확인"];
const hotItems = ["전해질 음료", "쿨링 타월", "여벌 셔츠"];
const coldItems = ["긴팔 워밍업", "보온 자켓", "핫팩"];
const rainItems = ["방수 가방", "미끄럼 대비 양말", "여벌 그립"];
const doublesItems = ["파트너 연락 확인", "전술 메모", "추가 볼마커"];
const weatherOptions: WeatherOption[] = [
  { value: "normal", label: "기본", icon: Thermometer },
  { value: "hot", label: "더움", icon: Sun },
  { value: "cold", label: "추움", icon: Thermometer },
  { value: "rain", label: "비 예보", icon: CloudRain },
];

export default function MatchdayPackingChecklistClient() {
  const [weather, setWeather] = useState<Weather>("normal");
  const [matchType, setMatchType] = useState<MatchType>("singles");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const checklist = useMemo(() => {
    const items = new Set(baseItems);
    if (weather === "hot") hotItems.forEach((item) => items.add(item));
    if (weather === "cold") coldItems.forEach((item) => items.add(item));
    if (weather === "rain") rainItems.forEach((item) => items.add(item));
    if (matchType === "doubles") doublesItems.forEach((item) => items.add(item));
    return Array.from(items);
  }, [matchType, weather]);

  const completion = checklist.length > 0 ? Math.round((checkedItems.filter((item) => checklist.includes(item)).length / checklist.length) * 100) : 0;

  const toggleItem = (item: string, checked: boolean) => {
    setCheckedItems((current) => (checked ? [...new Set([...current, item])] : current.filter((value) => value !== item)));
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <Badge className="w-fit bg-amber-500 text-black">Planning Utility</Badge>
            <h1 className="mt-3 text-3xl font-semibold leading-none">
              테니스 경기일 준비물 체크리스트
            </h1>
            <p className="text-sm leading-6 text-muted-foreground">
              날씨와 경기 유형에 맞게 챙길 물건을 자동으로 추천합니다.
            </p>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <p className="text-sm font-medium">날씨</p>
              <div className="grid grid-cols-2 gap-2">
                {weatherOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm ${weather === option.value ? "border-amber-500 bg-amber-500 text-black" : "bg-white"}`}
                      onClick={() => setWeather(option.value)}
                    >
                      <Icon className="h-4 w-4" />
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">경기 형태</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ["singles", "단식"],
                  ["doubles", "복식"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={`rounded-md border px-3 py-2 text-sm ${matchType === value ? "border-slate-900 bg-slate-900 text-white" : "bg-white"}`}
                    onClick={() => setMatchType(value as MatchType)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <Card className="bg-amber-50">
              <CardContent className="p-4 text-sm leading-6">
                <p><strong>완료율:</strong> {completion}%</p>
                <p><strong>현재 체크 항목:</strong> {checkedItems.filter((item) => checklist.includes(item)).length} / {checklist.length}</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <CheckSquare className="h-5 w-5 text-amber-500" />
              추천 준비물
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {checklist.map((item) => (
              <label key={item} className="flex items-center gap-3 rounded-xl border p-4">
                <Checkbox
                  checked={checkedItems.includes(item)}
                  onCheckedChange={(checked) => toggleItem(item, checked as boolean)}
                />
                <span className={checkedItems.includes(item) ? "text-muted-foreground line-through" : ""}>{item}</span>
              </label>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
