import en from "./content-en";
import vi from "./content-vi";

export function getContent(lang) {
  return lang === "vi" ? vi : en;
}
