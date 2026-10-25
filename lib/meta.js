import { getContent } from "./content";
import { alternates } from "./site";

/** Per-page metadata with hreflang alternates. `key` = content section holding `meta`. */
export function pageMeta(lang, key, path) {
  const c = getContent(lang);
  const m = key === "home" ? c.home.meta : c[key].meta;
  return {
    title: key === "home" ? { absolute: m.title } : m.title,
    description: m.description,
    alternates: alternates(lang, path),
    openGraph: { title: m.title, description: m.description, locale: lang === "vi" ? "vi_VN" : "en_US" },
  };
}
