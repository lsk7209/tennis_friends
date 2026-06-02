import { Metadata } from "next";
import { PLAYERS_DB } from "@/data/players";
import { getPlayerSearchSeo, buildPlayerSeoKeywords } from "@/lib/player-search-seo";
import PlayerArticlePage from "@/components/players/PlayerArticlePage";

const SLUG = "alexei-popyrin";
const _player = PLAYERS_DB[SLUG];
const _searchSeo = getPlayerSearchSeo(SLUG);
const _tour = _player?.gender === "male" ? "ATP" : "WTA";
const _siteUrl = "https://www.tennisfrens.com";
const _canonical = `${_siteUrl}/players/${SLUG}`;
const _oneLiner =
  _player?.detailedProfile?.oneLineSummary?.slice(0, 120) ??
  _player?.longBio?.slice(0, 120) ??
  "";

export const metadata: Metadata = {
  title:
    _searchSeo?.title ??
    `${_player?.name ?? SLUG} 선수 프로필 | 랭킹·전적·플레이스타일 | ${_tour}`,
  description:
    _searchSeo?.description ??
    `${_player?.name}(${_player?.nameEn})의 랭킹, 전적, 플레이스타일, 주요 경기와 강점을 정리한 ${_tour} 선수 프로필입니다. ${_oneLiner}`.trim(),
  keywords: _player
    ? buildPlayerSeoKeywords(SLUG, _player, _tour, [
        `${_player.name} 플레이스타일`,
        `${_player.name} 전적`,
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
      `${_player?.name} 선수 프로필 | ${_tour}`,
    description: _searchSeo?.description ?? _oneLiner,
    url: _canonical,
    siteName: "TennisFriends",
    locale: "ko_KR",
    type: "profile",
    images: [
      {
        url: `${_siteUrl}/api/og?title=${encodeURIComponent(_player?.name ?? SLUG)}&sub=${encodeURIComponent(`${_player?.nameEn} - ${_tour}`)}`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      _searchSeo?.title ??
      `${_player?.name} 선수 프로필 | ${_tour}`,
    description: _searchSeo?.description ?? _oneLiner,
  },
  robots: { index: true, follow: true },
};

export default function AlexeiPopyrinPage() {
  return <PlayerArticlePage slug={SLUG} />;
}
