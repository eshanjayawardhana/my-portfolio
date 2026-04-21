import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function isExternalLink(value: string) {
  return /^https?:\/\//.test(value) || value.startsWith("mailto:") || value.startsWith("tel:");
}

export function encodeForm(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}
