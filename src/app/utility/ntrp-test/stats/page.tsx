"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BarChart3, Download, Trash2, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { clearNtrpResults, exportNtrpResults, type NtrpLocalResult, type NtrpStorageStatus, readNtrpStorage } from "@/lib/ntrp-results";

export default function NtrpStatsPage() {
  const [results, setResults] = useState<NtrpLocalResult[]>([]);
  const [storageStatus, setStorageStatus] = useState<NtrpStorageStatus>("empty");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const stored = readNtrpStorage();
      setResults(stored.results);
      setStorageStatus(stored.status);
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const summary = useMemo(() => {
    if (!results.length) return { best: 0, average: 0 };
    return {
      best: Math.max(...results.map((result) => result.score)),
      average: Math.round(results.reduce((sum, result) => sum + result.score, 0) / results.length),
    };
  }, [results]);

  const downloadResults = () => {
    const url = URL.createObjectURL(new Blob([exportNtrpResults()], { type: "application/json" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "tennisfriends-ntrp-results.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const deleteResults = () => {
    if (!window.confirm("이 기기에 저장된 NTRP 기록을 모두 삭제할까요?")) return;
    if (clearNtrpResults()) {
      setResults([]);
      setStorageStatus("empty");
    } else {
      setStorageStatus("unavailable");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 dark:bg-gray-950">
      <div className="container mx-auto max-w-4xl container-padding">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100"><BarChart3 className="h-8 w-8 text-emerald-700" /></div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">내 NTRP 기록</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">로그인 없이 이 기기에만 저장된 최근 테스트 결과입니다.</p>
          {storageStatus === "recovered" && <p role="status" className="mt-2 text-sm text-amber-700">손상되거나 지원하지 않는 저장 데이터를 제외하고 빈 기록으로 열었습니다.</p>}
          {storageStatus === "unavailable" && <p role="alert" className="mt-2 text-sm text-red-700">브라우저 저장소를 사용할 수 없어 기록을 불러오거나 저장할 수 없습니다.</p>}
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <Card><CardContent className="p-6 text-center"><p className="text-sm text-gray-500">저장된 테스트</p><p className="mt-2 text-3xl font-bold">{results.length}</p></CardContent></Card>
          <Card><CardContent className="p-6 text-center"><p className="text-sm text-gray-500">최고 점수</p><p className="mt-2 text-3xl font-bold">{summary.best}</p></CardContent></Card>
          <Card><CardContent className="p-6 text-center"><p className="text-sm text-gray-500">평균 점수</p><p className="mt-2 text-3xl font-bold">{summary.average}</p></CardContent></Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><h2 className="text-xl font-bold">이 기기의 최근 기록</h2><div className="flex gap-2"><Button type="button" variant="outline" onClick={downloadResults} disabled={!results.length}><Download className="mr-2 h-4 w-4" />내보내기</Button><Button type="button" variant="destructive" onClick={deleteResults} disabled={!results.length}><Trash2 className="mr-2 h-4 w-4" />전체 삭제</Button></div></div>
            {results.length ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b text-left"><th className="p-3">날짜</th><th className="p-3 text-right">점수</th><th className="p-3 text-center">레벨</th><th className="p-3 text-center">스타일</th></tr></thead>
                  <tbody>{results.map((result) => <tr key={result.id} className="border-b last:border-0"><td className="p-3">{new Date(result.createdAt).toLocaleString("ko-KR")}</td><td className="p-3 text-right font-bold">{result.score}</td><td className="p-3 text-center"><Badge>{result.level}</Badge></td><td className="p-3 text-center">{result.character}</td></tr>)}</tbody>
                </table>
              </div>
            ) : (
              <div className="py-10 text-center"><Trophy className="mx-auto mb-3 h-12 w-12 text-gray-300" /><p className="text-gray-600 dark:text-gray-300">아직 이 기기에 저장된 결과가 없습니다.</p><Button asChild className="mt-5"><Link href="/utility/ntrp-test">NTRP 테스트 시작</Link></Button></div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
