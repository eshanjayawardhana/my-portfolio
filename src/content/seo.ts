import { portfolio } from "@/content/portfolio";

export function getPageTitle(title?: string) {
  return title ? `${title} | ${portfolio.basics.name}` : `${portfolio.basics.name} | Full stack Software engineer`;
}

export function getCanonical(pathname: string) {
  const base = "https://eshanjayawardana.com";
  return `${base}${pathname}`;
}
