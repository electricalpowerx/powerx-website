/* ============================================================
   Update the Google review count (and optional rating) in one go.

   Usage:
     node scripts/set-reviews.cjs 94
     node scripts/set-reviews.cjs 94 5.0

   - Writes SITE.reviewCount / SITE.rating in scripts/seo-data.cjs
     (generated pages, llms.txt and JSON-LD read from there).
   - Regenerates SEO pages.
   - Patches leftover review-count wording on hand-built pages
     (visible text + aggregateRating.reviewCount / ratingValue).

   Only review-related phrases are changed (e.g. "90 Google reviews",
   "from 90 reviews", JSON-LD reviewCount). Other "90"s — FSR
   CEL 00001090, "1990s", CSS classes — are left alone.
   ============================================================ */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const SEO = path.join(ROOT, "scripts/seo-data.cjs");
const SKIP_DIRS = new Set(["node_modules", "dist", ".git"]);
const SKIP_FILES = new Set(["set-reviews.cjs"]);
const EXT = new Set([".html", ".txt", ".cjs", ".md"]);

const count = process.argv[2];
const ratingArg = process.argv[3];
if (!/^\d+$/.test(count || "")) {
  console.error("Usage: node scripts/set-reviews.cjs <count> [rating]\n  e.g. node scripts/set-reviews.cjs 94\n       node scripts/set-reviews.cjs 94 5.0");
  process.exit(1);
}
if (ratingArg && !/^\d+(\.\d+)?$/.test(ratingArg)) {
  console.error("Rating must be a number such as 5.0");
  process.exit(1);
}

let seo = fs.readFileSync(SEO, "utf8");
const oldCount = (seo.match(/reviewCount:\s*"(\d+)"/) || [])[1];
const oldRating = (seo.match(/rating:\s*"([^"]+)"/) || [])[1];
if (!oldCount || !oldRating) {
  console.error("Could not read SITE.reviewCount / SITE.rating from seo-data.cjs");
  process.exit(1);
}
const newRating = ratingArg || oldRating;

seo = seo.replace(/reviewCount:\s*"\d+"/, `reviewCount: "${count}"`);
if (ratingArg) seo = seo.replace(/rating:\s*"[^"]+"/, `rating: "${ratingArg}"`);
fs.writeFileSync(SEO, seo, "utf8");
console.log(`SITE.reviewCount ${oldCount} → ${count}` + (ratingArg ? `; SITE.rating ${oldRating} → ${ratingArg}` : ` (rating stays ${oldRating})`));

console.log("Regenerating SEO pages…");
execFileSync(process.execPath, [path.join(ROOT, "scripts/generate-seo-pages.cjs")], { cwd: ROOT, stdio: "inherit" });

const reviewPhrase = (n, r) => [
  // JSON-LD
  [new RegExp(`("reviewCount"\\s*:\\s*")${n}(")`, "g"), `$1${count}$2`],
  // Visible copy — bound to the word "review(s)" so "90" alone is never touched.
  [new RegExp(`\\b${n}( Google [Rr]eviews)\\b`, "g"), `${count}$1`],
  [new RegExp(`\\b([Ff]rom )${n}( [Rr]eviews)\\b`, "g"), `$1${count}$2`],
];
const ratingPhrase = (newRating !== oldRating) ? [
  [new RegExp(`("ratingValue"\\s*:\\s*")${escapeRe(oldRating)}(")`, "g"), `$1${newRating}$2`],
] : [];

function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

function patchFile(full) {
  const name = path.basename(full);
  if (SKIP_FILES.has(name)) return false;
  if (full === SEO) return false; // already updated; don't rewrite interpolations
  let s = fs.readFileSync(full, "utf8");
  const before = s;
  for (const [re, rep] of reviewPhrase(oldCount)) s = s.replace(re, rep);
  for (const [re, rep] of ratingPhrase) s = s.replace(re, rep);
  if (s !== before) { fs.writeFileSync(full, s, "utf8"); return true; }
  return false;
}

let changed = 0;
(function walk(dir) {
  for (const n of fs.readdirSync(dir)) {
    const full = path.join(dir, n);
    if (fs.statSync(full).isDirectory()) { if (!SKIP_DIRS.has(n)) walk(full); continue; }
    if (!EXT.has(path.extname(n))) continue;
    if (patchFile(full)) { changed++; console.log("  ✓ " + path.relative(ROOT, full)); }
  }
})(ROOT);

console.log(`Hand-built / leftover review wording: ${changed} files updated.`);
console.log(`Done. Review count is now ${count}` + (ratingArg ? `, rating ${newRating}` : "") + ".");
