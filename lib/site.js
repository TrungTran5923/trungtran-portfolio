// Global site settings — edit links here once, they update everywhere.
export const SITE_URL = "https://trungtranecom.pro.vn";

export const CV_URL =
  "https://drive.google.com/file/d/1Rqz97EW9200bFDLgzGv_xY-ktP_sFUy3/view?usp=sharing";

// Paste your Google Calendar appointment / Calendly link here to show a
// "Book a call" button on the Contact page. Leave empty to hide it.
export const BOOKING_URL = "";

export const CONTACT = {
  email: "trungtran5923@gmail.com",
  phone: "0902 368 316",
  phoneIntl: "+84902368316",
  zalo: "https://zalo.me/0902368316",
};

export const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/minhtrung.tranle.3/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/trung-tran-4311a9282/" },
  { name: "YouTube", href: "https://www.youtube.com/@trung-dilungtung" },
  { name: "GitHub", href: "https://github.com/TrungTran5923" },
];

/** "/about-me" -> "/vi/about-me" for Vietnamese, unchanged for English. */
export function localePath(lang, p = "/") {
  if (lang !== "vi") return p;
  return p === "/" ? "/vi" : `/vi${p}`;
}

/** hreflang alternates + canonical for a page path (path without /vi). */
export function alternates(lang, p) {
  return {
    canonical: localePath(lang, p),
    languages: { en: p, vi: localePath("vi", p) },
  };
}
