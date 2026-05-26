import { Metadata } from "next";
import { PLAYERS_DB } from "@/data/players";
import { getSiteUrl } from "@/lib/site";
import { getPlayerSearchSeo, buildPlayerSeoKeywords } from "@/lib/player-search-seo";
import PlayerArticlePage from "@/components/players/PlayerArticlePage";

const SLUG = "casper-ruud";
const _player = PLAYERS_DB[SLUG];
const _searchSeo = getPlayerSearchSeo(SLUG);
const _tour = _player?.gender === "male" ? "ATP" : "WTA";
const _siteUrl = "https://www.tennisfrens.com";
const _canonical = `${_siteUrl}/players/${SLUG}`;
const _oneLiner = _player?.detailedProfile?.oneLineSummary?.slice(0, 120) ?? _player?.longBio?.slice(0, 120) ?? "";

export const metadata: Metadata = {
  title:
    _searchSeo?.title ??
    `${_player?.name ?? SLUG} 선수 완전 분석 | 플레이 스타일·경력·${_tour}`,
  description:
    _searchSeo?.description ??
    `${_player?.name}(${_player?.nameEn})의 플레이 스타일, 경력 하이라이트, 대표 경기를 한눈에 정리한 ${_tour} 선수 완전 분석. ${_oneLiner}`.trim(),
  keywords: _player
    ? buildPlayerSeoKeywords(SLUG, _player, _tour, [
        `${_player.name} 플레이스타일`,
        `${_player.name} 경력`,
        `${_player.nameEn} tennis`,
        "테니스",
        _tour,
        _player.country,
      ])
    : [],
  alternates: { canonical: _canonical },
  openGraph: {
    title:
      _searchSeo?.title ??
      `${_player?.name} 선수 완전 분석 | ${_tour}`,
    description:
      _searchSeo?.description ?? _oneLiner,
    url: _canonical,
    siteName: "TennisFriends",
    locale: "ko_KR",
    type: "profile",
    images: [
      {
        url: `${_siteUrl}/api/og?title=${encodeURIComponent(_player?.name ?? SLUG)}&sub=${encodeURIComponent(`${_player?.nameEn} · ${_tour}`)}`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      _searchSeo?.title ??
      `${_player?.name} 선수 완전 분석 | ${_tour}`,
    description: _searchSeo?.description ?? _oneLiner,
  },
  robots: { index: true, follow: true },
};

export default function CasperRuudPage() {
  return <PlayerArticlePage slug={SLUG} />;
}
