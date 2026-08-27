"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackEvent, TRACKING_EVENTS } from "@/lib/analytics";

export const NAVER_CAFE_URL = "https://cafe.naver.com/homecookie";

type NaverCafeLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel"
> & {
  ctaLocation: string;
  linkText: string;
};

export default function NaverCafeLink({
  ctaLocation,
  linkText,
  onClick,
  children,
  ...props
}: NaverCafeLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(TRACKING_EVENTS.NAVER_CAFE_VISIT, {
      cta_location: ctaLocation,
      link_text: linkText,
      destination_url: NAVER_CAFE_URL,
      page_path: window.location.pathname,
    });
    onClick?.(event);
  };

  return (
    <a
      {...props}
      href={NAVER_CAFE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
