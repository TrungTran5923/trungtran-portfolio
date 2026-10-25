import fs from "fs";
import path from "path";

// Server-only helpers (use only in server components).
/** True when /public/images/<file> exists — lets pages show an image only once it's uploaded. */
export function imageExists(file) {
  if (!file) return false;
  return fs.existsSync(path.join(process.cwd(), "public", "images", file));
}

/** All images dropped into /public/images/<dir>/ (sorted by name). */
export function listImages(dir) {
  const full = path.join(process.cwd(), "public", "images", dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
    .sort()
    .map((f) => `${dir}/${f}`);
}
