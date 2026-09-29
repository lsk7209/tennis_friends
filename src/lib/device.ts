import { safeStorageGet, safeStorageSet } from "@/lib/safe-storage";

export function getDeviceId(): string {
  if (typeof window === "undefined") return "";
  const key = "tf_device_id";
  let id = safeStorageGet(key);
  if (!id) {
    id = crypto.randomUUID();
    safeStorageSet(key, id);
  }
  return id;
}
