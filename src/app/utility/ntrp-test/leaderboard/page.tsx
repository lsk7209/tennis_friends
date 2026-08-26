import Link from "next/link";
import { LockKeyhole, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-white py-12 dark:bg-gray-950">
      <div className="container mx-auto max-w-3xl container-padding">
        <Card>
          <CardContent className="p-8 text-center sm:p-12">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100"><Trophy className="h-8 w-8 text-yellow-700" /></div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">공개 리더보드는 운영하지 않습니다</h1>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600 dark:text-gray-300">TennisFriends는 로그인 없이 이용하는 공개 도구입니다. 테스트 결과를 서버에 모으거나 다른 방문자에게 공개하지 않으며, 기록은 사용 중인 기기에만 저장됩니다.</p>
            <div className="mx-auto mt-6 flex max-w-md items-start gap-3 rounded-lg bg-emerald-50 p-4 text-left text-sm text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100"><LockKeyhole className="mt-0.5 h-5 w-5 flex-none" /><span>샘플 점수를 실제 사용자 순위처럼 표시하지 않습니다.</span></div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild><Link href="/utility/ntrp-test">NTRP 테스트하기</Link></Button><Button asChild variant="outline"><Link href="/utility/ntrp-test/stats">내 기록 보기</Link></Button></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
