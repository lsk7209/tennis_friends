"use client";

import { useEffect } from "react";

const CACHE_RESET_KEY = "tennisfrens-cache-reset-v1";

export default function CacheReset() {
  useEffect(() => {
    if (window.localStorage.getItem(CACHE_RESET_KEY) === "done") return;

    async function resetStaleClientState() {
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((registration) => registration.unregister()));
      }

      if ("caches" in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
      }

      window.localStorage.setItem(CACHE_RESET_KEY, "done");
    }

    resetStaleClientState().catch(() => {
      window.localStorage.removeItem(CACHE_RESET_KEY);
    });
  }, []);

  return null;
}
