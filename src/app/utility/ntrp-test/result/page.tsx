'use client';

import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Trophy, Share2, RotateCcw, Target, Award, Zap, Instagram, Twitter, Facebook, Copy, CheckCircle, ArrowRight, BookOpen, Settings, Shield, BarChart3, MessageCircle } from 'lucide-react';
import { getNTRPLevel, charMap } from '@/lib/questions';
import { trackTestCompletionOnce } from '@/components/Tracking';
import { hasPendingNtrpAttempt, readNtrpStorage, recordNtrpResultOnce } from '@/lib/ntrp-results';
import {
  buildNtrpShareText,
  buildNtrpShareUrl,
  NTRP_RESULT_ORIGIN_LABELS,
  type NtrpResultOrigin,
  parseNtrpResultParams,
  resolveNtrpResultOrigin,
} from '@/lib/ntrp-result-contract';
import NaverCafeLink from '@/components/NaverCafeLink';

interface LevelDetail {
  color: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
  icon: string;
  title: string;
  tips: string[];
  nextLevel: string;
}

type SaveState = 'idle' | 'saved' | 'blocked_by_history' | 'failed';

// General practice directions per reference band. These are the same for every
// visitor in a band and are not a personal weakness analysis.
const LEVEL_DETAILS: Record<string, LevelDetail> = {
  '1.5': {
    color: 'from-blue-50 to-blue-100', borderColor: 'border-blue-200', textColor: 'text-blue-800', bgColor: 'bg-blue-100',
    icon: '🌱', title: '입문 구간', tips: ['기본 그립 익히기', '포핸드 스트로크 연습', '서브 기본 동작'], nextLevel: '2.5',
  },
  '2.5': {
    color: 'from-yellow-50 to-yellow-100', borderColor: 'border-yellow-200', textColor: 'text-yellow-800', bgColor: 'bg-yellow-100',
    icon: '🌻', title: '기본기 다지는 구간', tips: ['랠리 지속 연습', '세컨 서브 안정성', '포지셔닝 기초'], nextLevel: '3.0',
  },
  '3.0': {
    color: 'from-orange-50 to-orange-100', borderColor: 'border-orange-200', textColor: 'text-orange-800', bgColor: 'bg-orange-100',
    icon: '🔥', title: '초중급 구간', tips: ['깊이 조절 연습', '네트 플레이 기초', '복식 위치 잡기'], nextLevel: '3.5',
  },
  '3.5': {
    color: 'from-red-50 to-red-100', borderColor: 'border-red-200', textColor: 'text-red-800', bgColor: 'bg-red-100',
    icon: '⚡', title: '중급 구간', tips: ['방향 전환 연습', '움직이며 치는 샷', '중요한 포인트 루틴'], nextLevel: '4.0',
  },
  '4.0': {
    color: 'from-purple-50 to-purple-100', borderColor: 'border-purple-200', textColor: 'text-purple-800', bgColor: 'bg-purple-100',
    icon: '👑', title: '중상급 구간', tips: ['서브·리턴 패턴 다양화', '상황별 샷 선택', '경기 기록 복기'], nextLevel: '4.5',
  },
  '4.5': {
    color: 'from-indigo-50 to-indigo-100', borderColor: 'border-indigo-200', textColor: 'text-indigo-800', bgColor: 'bg-indigo-100',
    icon: '🏆', title: '상급 구간', tips: ['포인트 패턴 설계', '약점 샷 보완', '경기 영상 분석'], nextLevel: '5.0+',
  },
  '5.0+': {
    color: 'from-pink-50 to-pink-100', borderColor: 'border-pink-200', textColor: 'text-pink-800', bgColor: 'bg-pink-100',
    icon: '🌟', title: '자가점검 최상위 구간', tips: ['공인 평가·대회 기록으로 확인', '약점 샷 점검', '경기 영상 분석'], nextLevel: '공식 평가로 확인',
  },
};

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const parsed = parseNtrpResultParams(searchParams);
  const resultKind = parsed.kind;
  const resultSource = parsed.kind === 'displayable' ? parsed.source : null;
  const score = parsed.kind === 'displayable' ? parsed.score : 0;
  const q13 = parsed.kind === 'displayable' ? (parsed.style || '') : '';
  const completionId = searchParams.get('completion') || '';

  const { level, desc } = getNTRPLevel(score);
  const character = charMap[q13] || '스타일 정보 없음';
  const hasStyle = Boolean(charMap[q13]);
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  // The dialog has two openers and no DialogTrigger, so remember which one to refocus on close.
  const shareOpenerRef = useRef<HTMLElement | null>(null);
  const openShareModal = (event: React.MouseEvent<HTMLElement>) => {
    shareOpenerRef.current = event.currentTarget;
    setShowShareModal(true);
  };
  const [origin, setOrigin] = useState<NtrpResultOrigin | null>(null);
  const [saveState, setSaveState] = useState<SaveState>('idle');

  // Resolve provenance, then save and count only a proven completion from this browser.
  useEffect(() => {
    if (resultKind !== 'displayable' || !resultSource) return;
    const attempt = { score, character, questionnaire: 'legacy-v2', scoring: 'legacy-sum-v2' } as const;
    const hasPendingProof = resultSource === 'local_candidate' && Boolean(completionId) && hasPendingNtrpAttempt(completionId, attempt);
    const stored = readNtrpStorage();
    const isStoredLocally = Boolean(completionId) && stored.results.some((result) => result.id === completionId);
    const resolved = resolveNtrpResultOrigin({ source: resultSource, hasPendingProof, isStoredLocally });
    const timeoutId = window.setTimeout(() => setOrigin(resolved.origin), 0);
    if (!resolved.countsAsNewCompletion) return () => window.clearTimeout(timeoutId);

    const recorded = recordNtrpResultOnce({ completionId, score, level, character });
    const nextSaveState: SaveState = recorded
      ? 'saved'
      : stored.status === 'corrupt' || stored.status === 'partial' ? 'blocked_by_history' : 'failed';
    const saveTimeoutId = window.setTimeout(() => setSaveState(nextSaveState), 0);
    if (!recorded) toast.info('이 브라우저에 기록을 저장하지 못했습니다. 현재 결과는 확인할 수 있습니다.');
    trackTestCompletionOnce('ntrp-test', completionId);
    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(saveTimeoutId);
    };
  }, [resultKind, resultSource, score, level, character, completionId]);

  const levelDetails = LEVEL_DETAILS[level] ?? LEVEL_DETAILS['3.0'];
  const shareStyle = hasStyle ? character : null;
  const shareUrl = () => buildNtrpShareUrl(window.location.href, score, q13 || null);
  const shareText = buildNtrpShareText(level, shareStyle);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('자동 복사에 실패했습니다. 아래 링크를 직접 선택해 복사해 주세요.');
    }
  };

  const copyShareText = () => {
    navigator.clipboard.writeText(`${shareText}\n${shareUrl()}`)
      .then(() => toast.success('공유할 내용이 복사되었습니다.'))
      .catch(() => toast.error('자동 복사에 실패했습니다. 아래 링크를 직접 선택해 복사해 주세요.'));
  };

  const shareToSocial = (platform: 'twitter' | 'facebook' | 'instagram') => {
    const url = shareUrl();
    if (platform === 'instagram') {
      // Instagram has no web share URL; copy the text and link instead.
      copyShareText();
      return;
    }
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };
    window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
  };

  const shareNative = () => {
    const url = shareUrl();
    if (typeof navigator.share !== 'function') {
      copyShareText();
      return;
    }
    navigator.share({ title: 'NTRP 비공식 자가점검 결과', text: shareText, url }).catch((error) => {
      // Dismissing the share sheet is neither an error nor a success.
      if (error?.name !== 'AbortError') toast.error('공유에 실패했습니다. 링크 복사를 이용해 주세요.');
    });
  };

  if (parsed.kind !== 'displayable') return (
    <div className="container mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">{parsed.kind === 'empty' ? '결과가 없습니다' : '유효하지 않은 결과 링크입니다'}</h1>
      <p className="mt-4">테스트를 완료하거나 유효한 공유 링크를 열어 주세요.</p>
      <Button asChild className="mt-6"><Link href="/utility/ntrp-test">테스트 시작하기</Link></Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12">
      <div className="container mx-auto max-w-6xl container-padding">
        {/* 1. 참고 결과 한눈에 보기 */}
        <Card id="result-card" className={`bg-gradient-to-br ${levelDetails.color} border-2 ${levelDetails.borderColor} mb-8 shadow-xl`}>
          <CardContent className="relative p-8 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
              <span className="text-4xl" aria-hidden="true">{levelDetails.icon}</span>
            </div>

            <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">비공식 자가점검 결과</h1>
            {origin && (
              <p role="status" className="mx-auto mb-4 max-w-2xl text-sm font-semibold text-gray-800">
                {NTRP_RESULT_ORIGIN_LABELS[origin]}
              </p>
            )}

            <p className={`mb-2 text-6xl font-extrabold md:text-7xl ${levelDetails.textColor}`}>
              <span className="sr-only">참고 레벨 </span>{level}
            </p>
            <h2 className={`mb-4 text-2xl font-bold ${levelDetails.textColor}`}>{levelDetails.title}</h2>
            <p className="mx-auto mb-4 max-w-3xl text-lg leading-relaxed text-gray-700">{desc}</p>
            <p className="mb-6 text-sm text-gray-700">
              계산 기준: 기존 15문항 합산 모델(선택지 번호 1~5점 합계). 공식 NTRP 등급이 아닙니다.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border-2 border-gray-200 bg-white p-5">
                <Trophy className="mx-auto mb-2 h-7 w-7 text-yellow-600" aria-hidden="true" />
                <h3 className="mb-1 font-bold text-gray-900">합산 점수</h3>
                <p className="text-2xl font-bold text-gray-900">{score}점 <span className="text-sm font-normal text-gray-600">/ 15~75점</span></p>
              </div>
              <div className="rounded-xl border-2 border-gray-200 bg-white p-5">
                <Target className="mx-auto mb-2 h-7 w-7 text-green-700" aria-hidden="true" />
                <h3 className="mb-1 font-bold text-gray-900">플레이 스타일(13번 답변)</h3>
                <p className="text-lg font-bold text-gray-900">{character}</p>
              </div>
            </div>

            {saveState === 'saved' && (
              <p className="mb-4 text-sm text-emerald-800">이 브라우저의 기록에 저장했습니다.</p>
            )}
            {saveState === 'blocked_by_history' && (
              <p className="mb-4 text-sm text-amber-800">
                기존 기록을 읽을 수 없어 이번 결과를 저장하지 않았습니다.{' '}
                <Link href="/utility/ntrp-test/stats" className="font-semibold underline">기록 복구 옵션 보기</Link>
              </p>
            )}
            {saveState === 'failed' && (
              <p className="mb-4 text-sm text-amber-800">이 브라우저에 기록을 저장하지 못했습니다. 결과는 계속 볼 수 있습니다.</p>
            )}

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                onClick={() => router.push('/utility/ntrp-test')}
                className="bg-blue-700 px-8 py-4 text-lg font-bold text-white hover:bg-blue-800"
              >
                <RotateCcw className="mr-2 h-5 w-5" aria-hidden="true" />
                다시 테스트하기
              </Button>
              <Button
                onClick={openShareModal}
                className="bg-green-700 px-8 py-4 text-lg font-bold text-white hover:bg-green-800"
              >
                <Share2 className="mr-2 h-5 w-5" aria-hidden="true" />
                결과 공유하기
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 2. 일반 연습 방향 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-8 gap-8">
          <Card className="border-2 border-gray-200 bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="mb-2 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Target className="h-6 w-6 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">다음 연습 방향</h3>
              </div>
              <p className="mb-4 text-sm text-gray-600">이 구간 방문자 모두에게 보여주는 일반 제안이며 개인별 약점 분석이 아닙니다.</p>
              <div className="space-y-3">
                {levelDetails.tips.map((tip, index) => (
                  <div key={tip} className="flex items-center rounded-lg bg-gray-50 p-4">
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 rounded-lg bg-blue-50 p-4 font-medium text-blue-900">
                💡 <strong>다음 참고 구간:</strong> {levelDetails.nextLevel}
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Award className="h-6 w-6 text-purple-700" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">연습 참고 자료</h3>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-purple-50 p-4">
                  <h4 className="font-bold text-gray-900">연습 주제</h4>
                  <p className="text-sm text-gray-700">{levelDetails.tips[0]}</p>
                  <p className="mt-2 text-sm text-gray-700">아래 검색어로 연습 영상을 살펴보세요. 특정 선수와의 실력 유사성을 뜻하지 않습니다.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-bold text-gray-900">📺 영상 검색어 예시</h4>
                  <p className="text-sm text-gray-700">
                    유튜브에서 &quot;{levelDetails.tips[0]} 테니스&quot; 또는 &quot;NTRP {level} 테니스&quot;로 검색해 보세요.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 3. 맥락 있는 카페 연결 */}
        <Card className="mb-8 border-2 border-emerald-200 bg-emerald-50">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center md:flex-row md:text-left">
            <MessageCircle className="h-10 w-10 flex-none text-emerald-700" aria-hidden="true" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">연습 이야기를 카페에서 이어가세요</h3>
              <p className="mt-1 text-gray-700">이번 결과를 참고해 연습한 이야기를 네이버 카페에서 다른 동호인과 나눠 보세요.</p>
            </div>
            <NaverCafeLink
              ctaLocation="ntrp_result"
              linkText="네이버 카페에서 이야기하기"
              className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 font-bold text-white hover:bg-emerald-800"
            >
              네이버 카페에서 이야기하기
            </NaverCafeLink>
          </CardContent>
        </Card>

        {/* 소셜 공유 모달 */}
        <Dialog open={showShareModal} onOpenChange={setShowShareModal}>
          <DialogContent
            className="max-h-[90vh] overflow-y-auto bg-white p-0"
            onCloseAutoFocus={(event) => {
              if (!shareOpenerRef.current) return;
              event.preventDefault();
              shareOpenerRef.current.focus();
            }}
          >
            <Card className="border-0 bg-white shadow-none">
              <CardContent className="p-8">
                <div className="mb-6 text-center">
                  <DialogTitle className="mb-2 text-2xl font-bold text-gray-900">결과 공유하기</DialogTitle>
                  <DialogDescription className="text-gray-700">
                    비공식 자가점검 결과 링크를 공유합니다. 링크에는 합산 점수와 스타일만 담기며, 문항별 답변이나 이 브라우저의 기록은 포함되지 않습니다.
                  </DialogDescription>
                </div>

                <div className="mb-6 space-y-4">
                  <Button onClick={shareNative} className="w-full bg-yellow-400 py-3 font-bold text-gray-900 hover:bg-yellow-500">
                    <span className="mr-2" aria-hidden="true">💬</span>
                    카카오톡 / 메신저 공유
                  </Button>
                  <Button onClick={() => shareToSocial('twitter')} className="w-full bg-blue-700 py-3 text-white hover:bg-blue-800">
                    <Twitter className="mr-2 h-5 w-5" aria-hidden="true" />
                    트위터에 공유
                  </Button>
                  <Button onClick={() => shareToSocial('facebook')} className="w-full bg-blue-800 py-3 text-white hover:bg-blue-900">
                    <Facebook className="mr-2 h-5 w-5" aria-hidden="true" />
                    페이스북에 공유
                  </Button>
                  <Button onClick={() => shareToSocial('instagram')} className="w-full bg-gradient-to-r from-pink-600 to-purple-700 py-3 text-white hover:from-pink-700 hover:to-purple-800">
                    <Instagram className="mr-2 h-5 w-5" aria-hidden="true" />
                    인스타그램용 문구 복사
                  </Button>
                  <Button onClick={copyToClipboard} className="w-full bg-gray-700 py-3 text-white hover:bg-gray-800">
                    {copied ? <CheckCircle className="mr-2 h-5 w-5" aria-hidden="true" /> : <Copy className="mr-2 h-5 w-5" aria-hidden="true" />}
                    {copied ? '복사됨!' : '링크 복사'}
                  </Button>
                </div>
                <label className="mb-4 block text-sm text-gray-700">공유 링크
                  <input readOnly onFocus={(event) => event.currentTarget.select()} value={typeof window === 'undefined' ? '' : shareUrl()} className="mt-1 w-full rounded border border-gray-300 p-2 text-xs" />
                </label>

                <Button onClick={() => setShowShareModal(false)} variant="outline" className="w-full">
                  닫기
                </Button>
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>

        {/* 4. 공유 / 기록 */}
        <Card className="mb-8 border-2 border-pink-200 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">친구와 비교하고 기록 남기기</h3>
            <p className="mb-6 text-gray-700">
              친구에게 결과 링크를 보내 함께 해 보거나, 이 브라우저에 저장된 지난 결과를 확인할 수 있습니다. 기록은 다른 기기와 동기화되지 않습니다.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                onClick={openShareModal}
                className="bg-purple-700 px-8 py-4 text-lg font-bold text-white hover:bg-purple-800"
              >
                <Share2 className="mr-2 h-5 w-5" aria-hidden="true" />
                친구에게 공유하기
              </Button>
              <Button asChild
                variant="outline"
                className="border-2 border-gray-300 bg-white px-8 py-4 text-lg font-bold text-gray-900 hover:border-purple-600"
              ><Link href="/utility/ntrp-test/stats">
                <BarChart3 className="mr-2 h-5 w-5" aria-hidden="true" />
                이 브라우저의 기록 보기
              </Link></Button>
            </div>
          </CardContent>
        </Card>

        {/* 5. 상세 자료 */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 via-white to-green-50 shadow-lg">
          <CardContent className="p-8">
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">🎯 함께 살펴볼 도구와 콘텐츠</h3>
              <p className="text-gray-700">모든 방문자에게 제공하는 일반 자료입니다.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Link href="/utility/string-tension">
                <Card className="group h-full border-2 border-gray-200 bg-white transition-colors hover:border-blue-600">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"><Settings className="h-8 w-8 text-blue-700" aria-hidden="true" /></div>
                    <h4 className="mb-2 font-bold text-gray-900">스트링 텐션</h4>
                    <p className="text-sm text-gray-700">입력 조건별 참고 텐션 범위</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/utility/injury-risk">
                <Card className="group h-full border-2 border-gray-200 bg-white transition-colors hover:border-red-600">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100"><Shield className="h-8 w-8 text-red-700" aria-hidden="true" /></div>
                    <h4 className="mb-2 font-bold text-gray-900">부상 예방</h4>
                    <p className="text-sm text-gray-700">운동 습관 참고 점검</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/utility/play-style-test">
                <Card className="group h-full border-2 border-gray-200 bg-white transition-colors hover:border-purple-600">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100"><Zap className="h-8 w-8 text-purple-700" aria-hidden="true" /></div>
                    <h4 className="mb-2 font-bold text-gray-900">플레이 스타일</h4>
                    <p className="text-sm text-gray-700">7가지 스타일 자가점검</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/blog">
                <Card className="group h-full border-2 border-gray-200 bg-white transition-colors hover:border-green-600">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"><BookOpen className="h-8 w-8 text-green-700" aria-hidden="true" /></div>
                    <h4 className="mb-2 font-bold text-gray-900">테니스 가이드</h4>
                    <p className="text-sm text-gray-700">연습·장비·규칙 글</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild variant="outline" className="border-2 px-6 py-3 font-bold"><Link href="/utility">
                <ArrowRight className="mr-2 h-5 w-5" aria-hidden="true" />
                모든 유틸리티 보기
              </Link></Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-gray-600">
          <Badge variant="outline" className="mr-2">안내</Badge>
          이 결과는 스스로 답한 15문항을 합산한 참고 정보입니다. 공식 NTRP 등급은 USTA 등 공인 기관의 평가나 대회 기록으로 확인하세요.
        </p>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center" role="status">결과를 불러오는 중…</div>}>
      <ResultContent />
    </Suspense>
  );
}
