"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const DEFAULT_ADSENSE_ID = "ca-pub-3050601904412736";
const ADSENSE_LOAD_DELAY_MS = 1500;
const DEFAULT_AD_HEIGHT = 280;
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0"]);

function getAdSenseId() {
  return (
    process.env.NEXT_PUBLIC_ADSENSE_PUB_ID ||
    process.env.NEXT_PUBLIC_ADSENSE_ID ||
    DEFAULT_ADSENSE_ID
  );
}

export default function AdSense() {
  const pathname = usePathname();
  const adsenseId = getAdSenseId();

  useEffect(() => {
    if (pathname?.startsWith("/admin")) return;
    if (LOCAL_HOSTS.has(window.location.hostname)) return;
    if (document.getElementById("adsense-script")) return;

    let timeoutId: number | null = null;

    const injectScript = () => {
      if (document.getElementById("adsense-script")) return;

      const script = document.createElement("script");
      script.id = "adsense-script";
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    };

    const scheduleScript = () => {
      timeoutId = window.setTimeout(injectScript, ADSENSE_LOAD_DELAY_MS);
    };

    if (document.readyState === "complete") {
      scheduleScript();
    } else {
      window.addEventListener("load", scheduleScript, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleScript);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [adsenseId, pathname]);

  return null;
}

type AdSenseSlotProps = {
  slot?: string;
  label?: string;
  className?: string;
  minHeight?: number;
};

export function AdSenseSlot({
  slot,
  label = "광고",
  className = "",
  minHeight = DEFAULT_AD_HEIGHT,
}: AdSenseSlotProps) {
  const adsenseId = getAdSenseId();

  useEffect(() => {
    if (!slot) return;

    try {
      const ads = (window.adsbygoogle = window.adsbygoogle || []);
      ads.push({});
    } catch {
      // Ad blockers or delayed script loading can fail silently.
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <aside
      aria-label={label}
      className={`my-8 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-center dark:border-gray-800 dark:bg-gray-900 ${className}`}
      style={{ minHeight }}
    >
      <span className="sr-only">{label}</span>
      <ins
        className="adsbygoogle block"
        style={{ display: "block", minHeight }}
        data-ad-client={adsenseId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}
