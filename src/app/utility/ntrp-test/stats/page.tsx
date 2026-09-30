"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BarChart3, Download, LifeBuoy, Trash2, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  clearNtrpResults,
  exportNtrpRawStorage,
  exportNtrpResults,
  getNtrpHistoryActions,
  MAX_NTRP_RESULTS,
  type NtrpLocalResult,
  type NtrpStorageStatus,
  readNtrpStorage,
  summarizeNtrpResults,
} from "@/lib/ntrp-results";

type LoadState = NtrpStorageStatus | "loading";

function downloadJson(content: string, filename: string) {
  const url = URL.createObjectURL(new Blob([content], { type: "application/json" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function StorageNotice({ status, excludedCount }: { status: LoadState; excludedCount: number }) {
  if (status === "corrupt") {
    return <p role="alert" className="mt-2 text-sm text-amber-800 dark:text-amber-300">저장된 NTRP 기록을 읽을 수 없습니다. 원본은 지우지 않고 그대로 두었으며, 이 상태에서는 새 결과가 저장되지 않습니다. 아래 기록 복구 옵션을 확인해 주세요.</p>;
  }
  if (status === "partial") {
    return <p role="alert" className="mt-2 text-sm text-amber-800 dark:text-amber-300">형식이 맞지 않는 기록 {excludedCount}건을 표시에서 제외했습니다. 원본은 그대로 두었으며, 정리 전까지 새 결과는 저장되지 않습니다.</p>;
  }
  if (status === "unavailable") {
    return <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-300">이 브라우저가 저장소 접근을 막고 있어 기록을 읽거나 저장할 수 없습니다. 저장된 기록이 있는지도 확인할 수 없으며, 기록을 삭제하지 않았습니다.</p>;
  }
  return null;
}

function RecoveryPanel({ onReset }: { onReset: () => void }) {
  const downloadRaw = () => {
    const raw = exportNtrpRawStorage();
    if (raw) downloadJson(raw, "tennisfriends-ntrp-raw-backup.json");
  };
  return (
    <Card className="mb-8 border-amber-300">
      <CardContent className="p-6">
        <h2 className="flex items-center gap-2 text-lg font-bold"><LifeBuoy className="h-5 w-5" aria-hidden="true" />기록 복구 옵션</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
          <li>필요하면 원본 백업을 먼저 내려받으세요. 파일은 이 기기에만 저장되며 서버로 전송되지 않습니다.</li>
          <li>NTRP 기록만 초기화하면 다음 테스트부터 다시 저장됩니다. 다른 사이트 설정은 지우지 않습니다.</li>
        </ol>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button type="button" variant="outline" onClick={downloadRaw}><Download className="mr-2 h-4 w-4" aria-hidden="true" />원본 백업 내려받기</Button>
          <Button type="button" variant="destructive" onClick={onReset}><Trash2 className="mr-2 h-4 w-4" aria-hidden="true" />NTRP 기록 초기화</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function NtrpStatsPage() {
  const [results, setResults] = useState<NtrpLocalResult[]>([]);
  const [storageStatus, setStorageStatus] = useState<LoadState>("loading");
  const [excludedCount, setExcludedCount] = useState(0);
  const [notice, setNotice] = useState("");

  const load = useCallback(() => {
    const stored = readNtrpStorage();
    setResults(stored.results);
    setStorageStatus(stored.status);
    setExcludedCount(stored.excludedCount);
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(load, 0);
    return () => window.clearTimeout(timeoutId);
  }, [load]);

  const summary = useMemo(() => summarizeNtrpResults(results), [results]);
  const unversionedCount = results.length - (summary?.count ?? 0);
  const actions = getNtrpHistoryActions(storageStatus === "loading" ? "empty" : storageStatus, results.length);
  const needsRecovery = actions.showRecovery;

  const resetHistory = (message: string) => {
    if (!window.confirm(message)) return;
    if (clearNtrpResults()) {
      load();
      setNotice("NTRP 기록을 초기화했습니다. 다음 테스트 결과부터 이 브라우저에 저장됩니다.");
    } else {
      setNotice("저장소에 접근할 수 없어 초기화하지 못했습니다. 기존 데이터는 그대로입니다.");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 dark:bg-gray-950">
      <div className="container mx-auto max-w-4xl container-padding">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100"><BarChart3 className="h-8 w-8 text-emerald-700" aria-hidden="true" /></div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">이 브라우저의 NTRP 기록</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">로그인 없이 이 브라우저에만 저장된 최근 결과(최대 {MAX_NTRP_RESULTS}건)입니다. 다른 기기·브라우저와 동기화되지 않습니다.</p>
          <StorageNotice status={storageStatus} excludedCount={excludedCount} />
          {notice && <p role="status" className="mt-2 text-sm text-emerald-800 dark:text-emerald-300">{notice}</p>}
        </div>

        {needsRecovery && (
          <RecoveryPanel onReset={() => resetHistory("저장된 NTRP 기록(읽을 수 없는 원본 포함)을 초기화할까요? 원본이 필요하면 먼저 백업을 내려받으세요.")} />
        )}

        <div className="mb-2 grid gap-4 sm:grid-cols-3">
          <Card><CardContent className="p-6 text-center"><p className="text-sm text-gray-500">표시된 기록</p><p className="mt-2 text-3xl font-bold">{results.length}</p></CardContent></Card>
          <Card><CardContent className="p-6 text-center"><p className="text-sm text-gray-500">최고 점수</p><p className="mt-2 text-3xl font-bold">{summary ? summary.best : "-"}</p></CardContent></Card>
          <Card><CardContent className="p-6 text-center"><p className="text-sm text-gray-500">평균 점수</p><p className="mt-2 text-3xl font-bold">{summary ? summary.average : "-"}</p></CardContent></Card>
        </div>
        <p className="mb-8 text-center text-xs text-gray-500 dark:text-gray-400">
          최고·평균은 현재 15문항 합산 모델(legacy-sum-v2) 기록 {summary?.count ?? 0}건만 계산합니다.
          {unversionedCount > 0 && ` 채점 버전을 확인할 수 없는 이전 기록 ${unversionedCount}건은 합산하지 않습니다.`}
        </p>

        <Card>
          <CardContent className="p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold">최근 기록</h2>
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={() => downloadJson(exportNtrpResults(), "tennisfriends-ntrp-results.json")} disabled={!actions.canExportResults}><Download className="mr-2 h-4 w-4" aria-hidden="true" />내보내기</Button>
                {!needsRecovery && <Button type="button" variant="destructive" onClick={() => resetHistory("이 브라우저에 저장된 NTRP 기록을 모두 삭제할까요? 다른 사이트 설정·방문 기록은 지우지 않습니다.")} disabled={!actions.canDeleteResults}><Trash2 className="mr-2 h-4 w-4" aria-hidden="true" />NTRP 기록 삭제</Button>}
              </div>
            </div>
            {results.length ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b text-left"><th className="p-3">날짜</th><th className="p-3 text-right">점수</th><th className="p-3 text-center">레벨</th><th className="p-3 text-center">스타일</th><th className="p-3 text-center">채점 기준</th></tr></thead>
                  <tbody>{results.map((result) => (
                    <tr key={result.id} className="border-b last:border-0">
                      <td className="p-3">{new Date(result.createdAt).toLocaleString("ko-KR")}</td>
                      <td className="p-3 text-right font-bold">{result.score}</td>
                      <td className="p-3 text-center"><Badge>{result.level}</Badge></td>
                      <td className="p-3 text-center">{result.character}</td>
                      <td className="p-3 text-center text-xs">{result.scoring === "legacy-sum-v2" ? "15문항 합산" : "이전 기록(버전 미확인)"}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            ) : (
              <div className="py-10 text-center"><Trophy className="mx-auto mb-3 h-12 w-12 text-gray-300" aria-hidden="true" /><p className="text-gray-600 dark:text-gray-300">{storageStatus === "loading" ? "기록을 불러오는 중입니다." : "표시할 NTRP 기록이 없습니다."}</p><Button asChild className="mt-5"><Link href="/utility/ntrp-test">NTRP 테스트 시작</Link></Button></div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
