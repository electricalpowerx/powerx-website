/* ============================================================
   Structured-data normaliser — idempotent.
   Makes every page carry exactly ONE business block
   (LocalBusiness/Electrician, from business-schema.cjs):
     - removes any other block typed Electrician / LocalBusiness /
       ElectricalContractor / Organization (duplicates & conflicts)
     - Service blocks lose the "ElectricalContractor" type and point their
       provider at the single business via @id
     - inserts the canonical block as the first JSON-LD block (or before
       </head> when the page has none)
   Everything else (FAQPage, BreadcrumbList, Article, ...) is left alone.
   Run: node scripts/normalize-structured-data.cjs  (also run by generate-seo-pages.cjs)
   ============================================================ */
const fs = require("fs");
const path = require("path");
const { SITE } = require("./seo-data.cjs");
const { buildBusinessSchema } = require("./business-schema.cjs");
const ROOT = path.resolve(__dirname, "..");
const SKIP_DIRS = new Set(["node_modules", "dist", ".git", "public", "src", "scripts"]);
const SKIP_FILES = new Set(["googledebbbf9ea2128906.html"]);
const BUSINESS_TYPES = new Set(["Electrician", "LocalBusiness", "ElectricalContractor", "Organization"]);
const BLOCK_RE = /[ \t]*<script type="application\/ld\+json">([\s\S]*?)<\/script>[ \t]*\n?/g;

const typesOf = (o) => (Array.isArray(o["@type"]) ? o["@type"] : [o["@type"]]);
const isBusiness = (o) => typesOf(o).some((t) => BUSINESS_TYPES.has(t));

function fixNode(o) {
  if (!o || typeof o !== "object") return o;
  if (typesOf(o).includes("Service")) {
    o["@type"] = "Service";
    o.provider = { "@id": SITE.domain + "/#business" };
  }
  return o;
}

function normalize(html) {
  const keep = [];
  let firstAt = -1;
  let out = html.replace(BLOCK_RE, (m, body, offset) => {
    if (firstAt < 0) firstAt = offset;
    const j = JSON.parse(body);
    const nodes = Array.isArray(j) ? j : j["@graph"] ? j["@graph"] : [j];
    const rest = nodes.filter((n) => !isBusiness(n)).map(fixNode);
    rest.forEach((n) => {
      if (!n["@context"]) n["@context"] = "https://schema.org";
      keep.push(n);
    });
    return "\u0000LD\u0000";
  });
  const blocks = [buildBusinessSchema(), ...keep].map((o) => `<script type="application/ld+json">\n${JSON.stringify(o, null, 2)}\n</script>`);
  const joined = blocks.map((b) => "  " + b).join("\n") + "\n";
  if (out.includes("\u0000LD\u0000")) {
    let first = true;
    out = out.replace(/[ \t]*\u0000LD\u0000\n?/g, () => (first ? ((first = false), joined) : ""));
  } else {
    out = out.replace(/\n?<\/head>/, () => "\n" + joined + "</head>");
  }
  return out;
}

function run() {
  let changed = 0;
  (function walk(dir) {
    for (const n of fs.readdirSync(dir)) {
      const full = path.join(dir, n);
      if (fs.statSync(full).isDirectory()) { if (!SKIP_DIRS.has(n)) walk(full); continue; }
      if (!n.endsWith(".html") || SKIP_FILES.has(n)) continue;
      const before = fs.readFileSync(full, "utf8");
      const after = normalize(before);
      if (after !== before) { fs.writeFileSync(full, after, "utf8"); changed++; }
    }
  })(ROOT);
  console.log(`Structured data normalised: ${changed} pages updated.`);
}

module.exports = { run, normalize };
if (require.main === module) run();
