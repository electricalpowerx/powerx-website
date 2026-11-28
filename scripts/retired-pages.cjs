/* ============================================================
   City-page cutback — single source of truth.
   Kept:   the 16 city pages (/locations/electrician-<city>.html), the 14
           service pages, and the 24/7 emergency page for each city
           (/local/emergency-electrician-<city>.html; Surrey's lives on
           /services/emergency-electrician.html).
   Retired (301):
     - 83 neighbourhood pages        -> their parent city page
     - 208 other service x city pages -> that city page
     - legacy hand-built duplicates   -> the matching kept city page
   Used by generate-seo-pages.cjs (skip + delete + _redirects block),
   fix-legacy-pages.cjs (rewrite internal links).
   ============================================================ */
const { LOCATIONS, NEIGHBOURHOODS } = require("./seo-data.cjs");

const KEPT_COMBO_SERVICES = ["emergency-electrician"];
const RETIRED_COMBO_SERVICES = [
  "electrical-panel-upgrades", "electrical-service-upgrades", "ev-charger-installation", "home-rewiring",
  "aluminum-wiring-replacement", "lighting-installation", "generator-installation", "hot-tub-pool-wiring",
  "commercial-electrical", "tenant-improvements", "strata-electrical", "led-lighting-retrofits", "fire-alarm-systems",
];
const cityUrl = (slug) => `/locations/electrician-${slug}.html`;

// Hand-built root pages that duplicate a kept city page / are neighbourhood pages.
const LEGACY = [
  ["/clayton-heights.html", cityUrl("surrey"), "legacy-neighbourhood"],
  ["/cloverdale.html", cityUrl("surrey"), "legacy-neighbourhood"],
  ["/fleetwood.html", cityUrl("surrey"), "legacy-neighbourhood"],
  ["/fraser-heights.html", cityUrl("surrey"), "legacy-neighbourhood"],
  ["/guildford.html", cityUrl("surrey"), "legacy-neighbourhood"],
  ["/newton.html", cityUrl("surrey"), "legacy-neighbourhood"],
  ["/panorama-ridge.html", cityUrl("surrey"), "legacy-neighbourhood"],
  ["/south-surrey.html", cityUrl("surrey"), "legacy-neighbourhood"],
  ["/ocean-park.html", cityUrl("white-rock"), "legacy-neighbourhood"], // site data files Ocean Park under White Rock
  ["/electrician-burnaby.html", cityUrl("burnaby"), "legacy-duplicate-city"],
  ["/electrician-vancouver.html", cityUrl("vancouver"), "legacy-duplicate-city"],
  ["/electrician-new-westminster.html", cityUrl("new-westminster"), "legacy-duplicate-city"],
  ["/electrician-pitt-meadows.html", cityUrl("pitt-meadows"), "legacy-duplicate-city"],
];

function buildRedirects() {
  const out = [];
  NEIGHBOURHOODS.forEach((n) => out.push([cityUrl(n.slug), cityUrl(n.parent), "neighbourhood"]));
  RETIRED_COMBO_SERVICES.forEach((s) =>
    LOCATIONS.forEach((l) => out.push([`/local/${s}-${l.slug}.html`, cityUrl(l.slug), "service-x-city"]))
  );
  LEGACY.forEach((r) => out.push(r));
  return out; // [from, to, kind]
}

const REDIRECTS = buildRedirects();
const REDIRECT_MAP = new Map(REDIRECTS.map(([f, t]) => [f, t]));

module.exports = { REDIRECTS, REDIRECT_MAP, KEPT_COMBO_SERVICES, RETIRED_COMBO_SERVICES };
