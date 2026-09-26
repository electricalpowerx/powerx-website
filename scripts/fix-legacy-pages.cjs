/* ============================================================
   Legacy (hand-built) page fixer — idempotent.
   Some early hand-built pages were never wired to the Vite
   stylesheet (/src/style.css) and had a stripped-down nav and no
   footer, so they rendered as unstyled HTML on the live site.
   This script:
     1. Adds the shared stylesheet + favicon to any hand-built page
        that lacks it, and gives it the standard site nav + footer
        (wrapped in <!-- px:nav --> / <!-- px:footer --> markers so
        re-runs refresh them from the generator).
     2. Repoints links to retired root city stubs (e.g.
        /electrician-maple-ridge.html) and wrong slugs
        (electrician-cloverdale.html, electrician-south-surrey.html)
        to the generated /locations/ pages. The retired URLs 301 via
        public/_redirects.
   Run: node scripts/fix-legacy-pages.cjs   (also run by generate-seo-pages.cjs)
   ============================================================ */
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const DOMAIN = "https://powerxelectrical.ca";

// Root-level city stubs replaced by the generated /locations/electrician-<slug>.html pages.
const RETIRED_CITY_STUBS = ["abbotsford", "coquitlam", "delta", "langley", "maple-ridge", "surrey", "white-rock"];
// Wrong slugs used by old hand-built pages -> correct generated page.
const SLUG_FIXES = {
  "electrician-cloverdale": "/locations/electrician-cloverdale-surrey.html",
  "electrician-south-surrey": "/locations/electrician-south-surrey.html",
};
// Pages written by generate-seo-pages.cjs (never touched here).
const GENERATED_DIRS = ["services", "locations", "local"];
const SKIP = new Set(["googledebbbf9ea2128906.html"]);

function generatedTopLevel() {
  const { BLOG } = require("./seo-data.cjs");
  return new Set(["about.html", "services.html", "service-areas.html", "blog.html", ...BLOG.map((p) => `blog/${p.slug}.html`)]);
}

function handBuiltPages() {
  const gen = generatedTopLevel();
  const out = [];
  for (const dir of ["", "blog", "projects"]) {
    const abs = path.join(ROOT, dir);
    if (!fs.existsSync(abs)) continue;
    for (const n of fs.readdirSync(abs)) {
      const rel = dir ? `${dir}/${n}` : n;
      if (!n.endsWith(".html") || SKIP.has(n) || gen.has(rel)) continue;
      out.push(rel);
    }
  }
  return out;
}

function fixLinks(html) {
  const city = RETIRED_CITY_STUBS.join("|");
  html = html.replace(
    new RegExp(`href="(?:\\.\\./|/|${DOMAIN.replace(/\./g, "\\.")}/)?electrician-(${city})(?:\\.html|/)?"`, "g"),
    (_, c) => `href="/locations/electrician-${c}.html"`
  );
  for (const [bad, good] of Object.entries(SLUG_FIXES)) {
    html = html.replace(new RegExp(`href="(?:\\.\\./|/|${DOMAIN.replace(/\./g, "\\.")}/)?${bad}(?:\\.html|/)?"`, "g"), `href="${good}"`);
  }
  return html;
}

function applyChrome(html, chrome) {
  const managed = html.includes("<!-- px:nav -->") || !html.includes("/src/style.css");
  if (!managed) return html;

  // 1) stylesheet + favicon
  if (!html.includes("/src/style.css")) {
    const fav = html.includes('rel="icon"') ? "" : `  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n`;
    html = html.replace(/\n?<\/head>/, `\n${fav}  <link rel="stylesheet" href="/src/style.css" />\n</head>`);
  }
  // canonical / own-URL trailing slash (".../page/" 301s to ".../page")
  html = html.replace(new RegExp(`(${DOMAIN.replace(/\./g, "\\.")}/[a-z0-9/-]*[a-z0-9])/"`, "g"), '$1"');

  // 2) body class
  html = html.replace(/<body>/, '<body class="bg-[var(--px-light)] text-[var(--px-slate)] font-sans antialiased">');

  // 3) nav
  const navBlock = `<!-- px:nav -->${chrome.nav}\n  <!-- /px:nav -->`;
  if (html.includes("<!-- px:nav -->")) {
    html = html.replace(/<!-- px:nav -->[\s\S]*?<!-- \/px:nav -->/, navBlock);
  } else if (/<nav[\s>]/.test(html)) {
    html = html.replace(/(?:[ \t]*<!-- Navbar -->\s*)?<nav[\s>][\s\S]*?<\/nav>(?:\s*<div class="h-16 md:h-20"><\/div>)?/, "  " + navBlock);
  } else {
    html = html.replace(/(<body[^>]*>)/, `$1\n  ${navBlock}`);
  }

  // 4) footer (+ floating buttons + mobile menu script)
  const footBlock = `<!-- px:footer -->${chrome.footer}\n${chrome.floating}\n${chrome.script}\n  <!-- /px:footer -->`;
  if (html.includes("<!-- px:footer -->")) {
    html = html.replace(/<!-- px:footer -->[\s\S]*?<!-- \/px:footer -->/, footBlock);
  } else if (/<footer[\s>]/.test(html)) {
    html = html.replace(/<footer[\s>][\s\S]*?<\/footer>/, footBlock);
  } else {
    html = html.replace(/\s*<\/body>/, `\n\n  ${footBlock}\n</body>`);
  }
  return html;
}

function run() {
  const g = require("./generate-seo-pages.cjs");
  const chrome = { nav: g.nav(), footer: g.footer(), floating: g.floatingButtons(), script: g.mobileScript };
  let changed = 0;
  for (const rel of handBuiltPages()) {
    const full = path.join(ROOT, rel);
    const before = fs.readFileSync(full, "utf8");
    const after = applyChrome(fixLinks(before), chrome);
    if (after !== before) { fs.writeFileSync(full, after, "utf8"); changed++; console.log("  ✓ legacy fix " + rel); }
  }
  console.log(`Legacy pages: ${changed} updated.`);
}

module.exports = { run, RETIRED_CITY_STUBS };
if (require.main === module) run();
