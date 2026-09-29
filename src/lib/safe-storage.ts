/**
 * Storage access can throw (Safari with cookies blocked, private/embedded
 * browsers, quota errors). These helpers never throw so optional persistence
 * cannot take down rendering.
 */
export type StorageArea = "local" | "session";

function resolveStorage(area: StorageArea): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return area === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}

export function safeStorageGet(key: string, area: StorageArea = "local"): string | null {
  try {
    return resolveStorage(area)?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

/** Returns true only when the value was written. */
export function safeStorageSet(key: string, value: string, area: StorageArea = "local"): boolean {
  const storage = resolveStorage(area);
  if (!storage) return false;
  try {
    storage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}
