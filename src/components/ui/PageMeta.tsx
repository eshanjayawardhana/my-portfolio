import { useEffect } from "react";
import { portfolio } from "@/content/portfolio";
import { getCanonical, getPageTitle } from "@/content/seo";

type Props = {
  title?: string;
  description?: string;
  pathname: string;
};

export function PageMeta({ title, description = portfolio.basics.role, pathname }: Props) {
  useEffect(() => {
    const fullTitle = getPageTitle(title);
    const canonical = getCanonical(pathname);
    const image = "https://eshanjayawardana.com/og-cover.svg";

    document.title = fullTitle;
    updateMeta('meta[name="description"]', "description", description);
    updateMeta('meta[property="og:title"]', "og:title", fullTitle, true);
    updateMeta('meta[property="og:description"]', "og:description", description, true);
    updateMeta('meta[property="og:type"]', "og:type", "website", true);
    updateMeta('meta[property="og:url"]', "og:url", canonical, true);
    updateMeta('meta[property="og:image"]', "og:image", image, true);
    updateMeta('meta[name="twitter:card"]', "twitter:card", "summary_large_image");
    updateMeta('meta[name="twitter:title"]', "twitter:title", fullTitle);
    updateMeta('meta[name="twitter:description"]', "twitter:description", description);
    updateMeta('meta[name="twitter:image"]', "twitter:image", image);
    updateCanonical(canonical);
  }, [description, pathname, title]);

  return null;
}

function updateMeta(selector: string, key: string, value: string, property = false) {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);
  const attribute = property ? "property" : "name";

  if (existing) {
    existing.setAttribute("content", value);
    return;
  }

  const meta = document.createElement("meta");
  meta.setAttribute(attribute, key);
  meta.setAttribute("content", value);
  document.head.appendChild(meta);
}

function updateCanonical(href: string) {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (existing) {
    existing.href = href;
    return;
  }

  const link = document.createElement("link");
  link.rel = "canonical";
  link.href = href;
  document.head.appendChild(link);
}
