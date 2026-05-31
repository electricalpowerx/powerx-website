# PowerX Electrical — SEO & AI-Search Action Plan

_Last updated: 2026-05-30_

This is your cross-check sheet. It maps what's been built against the factors **Google's ranking systems** actually use, and the practices that get you cited in **AI answers** (Google AI Overviews — which *is* powered by Gemini — plus ChatGPT, Perplexity, Claude).

> ⚠️ Important reality check: **Gemini does not decide your Google ranking.** Google's Search ranking systems do. Gemini *generates* AI Overviews from already-ranking, well-structured pages. So the goal is two-fold: (1) rank in classic Search, (2) be structured clearly enough that AI engines quote you. Everything below serves both.

---

## 1. What's now live on the site ✅

**Scale (dwarfs intensevoltage.com):**
- 14 service pages + 16 city pages + **83 neighbourhood pages** + **224 service×city pages** (all 14 services × 16 cities) + 3 hubs + 8 blog posts + a credentials-rich About page ≈ **353 pages** (competitor ≈ 40).

**Technical SEO:**
- ✅ Canonical tags on every page (were missing before — a real fix)
- ✅ Unique title + meta description per page
- ✅ Structured data: `Electrician`/`LocalBusiness` (with geo, rating, sameAs, areaServed), `Service`, `FAQPage`, `BreadcrumbList`, `Article` (blog)
- ✅ Breadcrumb navigation on every silo page
- ✅ XML sitemap auto-generated with all 205 URLs
- ✅ Deep internal linking (silo): hubs → pages → combos → neighbourhoods, all cross-linked
- ✅ Mobile-friendly, fast static HTML (Tailwind), semantic headings

**AI-search (GEO):**
- ✅ `robots.txt` explicitly welcomes AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, etc.)
- ✅ `llms.txt` published — a machine-readable summary of the business, services, areas & guides
- ✅ FAQ blocks + cost/how-to blog posts (the exact Q&A format AI engines quote)
- ✅ Clear NAP (name, address, phone) and entity facts in schema on every page

---

## 2. Google ranking cross-check

| Factor Google weighs | Status | Your action |
|---|---|---|
| Crawlable, indexable pages | ✅ Done | Submit sitemap in Search Console (below) |
| Unique, helpful content per page | ✅ Done | Keep combo pages honest; expand thin ones over time |
| Title/meta/H1 keyword relevance | ✅ Done | — |
| Local relevance (city + service in URL, title, content) | ✅ Done | — |
| Structured data | ✅ Done | Validate at [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |
| Internal linking / site architecture | ✅ Done | — |
| Mobile usability + Core Web Vitals | ✅ Likely good (static) | Check PageSpeed Insights after deploy |
| **Google Business Profile** | ⛔ Your action | **Biggest local lever — see §4** |
| **Reviews (volume + recency)** | ⛔ Ongoing | Ask every customer; reply to all |
| **Backlinks / citations** | ⛔ Your action | See §5 |
| Domain age / authority | ⏳ Time | Grows as the above compound |

**Honest expectation:** on-page is now excellent, but local rankings (the "map pack") are driven heavily by **Google Business Profile + reviews + citations** (§4–5). The pages get you into organic results and AI answers; GBP wins the map pack. Do both.

---

## 3. AI-search (GEO) cross-check — "show up in AI answers"

- ✅ **llms.txt** + clean HTML so AI crawlers parse you easily
- ✅ **Schema with hard facts** (phone, address, hours, rating, area served) — AI engines lift these directly
- ✅ **FAQ + cost guides** — AI loves extractable Q&A and specific numbers
- ⛔ **Get cited elsewhere**: AI engines trust entities mentioned across the web. Reviews, directory listings, and a few local backlinks make you "known" to the models.
- ⛔ **Keep facts consistent everywhere** (site, GBP, directories) — contradictions make AI omit you.
- ✅ **Credentials-rich About page** (`/about.html`) with E-E-A-T signals, company FAQ, `AboutPage` + `knowsAbout` schema — done.
- 🔜 **Add your licence number**: set `SITE.licenseNumber` in `scripts/seo-data.cjs` to your Technical Safety BC contractor licence (e.g. `LEC…`) and re-run the generator. It then shows on the About page and in company FAQ — a strong trust/E-E-A-T signal. Left blank for now so nothing inaccurate is published.

---

## 4. Google Business Profile (GBP) — do this first, it's the #1 local lever

1. **Claim & verify** the PowerX listing (google.com/business). Verified listings rank far better.
2. **Complete 100%**: exact NAP (must match the site: `12491 68 Avenue, Surrey, BC V3W 2C9` / `778-823-1575`), website, hours (mark 24/7), service area (add all 16 cities), categories (primary: **Electrician**; add Emergency, EV charging station equipment installer).
3. **Add services & description** mirroring the site's service list.
4. **Photos**: upload real job photos regularly (you already have many in `/public/images`). Listings with fresh photos convert better.
5. **Reviews**: ask every happy customer; aim for a steady drip, not a burst. **Reply to every review.** Mention the city naturally in replies ("Thanks for having us out in Coquitlam!").
6. **GBP Posts**: post weekly (offers, tips, completed jobs). Signals activity.
7. **Q&A**: seed and answer common questions on the listing.

---

## 5. Off-page: citations & backlinks (NAP consistency)

**Citations** (your NAP listed on directories) — keep them **identical** to the site everywhere:
- Yelp, Yellow Pages CA, BBB, Houzz, HomeStars, BuildZoom, Bing Places, Apple Maps Connect, Nextdoor, 411.ca, Cylex.
- Trade/local: Technical Safety BC contractor listing, local Surrey/Chamber business directories.

**Backlinks** (harder, higher value):
- Local sponsorships (minor sports team, community event) → often a link.
- Supplier/manufacturer "where to buy/installer" pages (EV charger brands, panel manufacturers).
- Guest posts or partnerships with local realtors, home inspectors, renovators.
- Get listed by any "best electricians in Surrey" roundup sites.

---

## 6. Post-deploy checklist (do right after going live)

1. **Google Search Console** → add property → submit `https://powerxelectrical.ca/sitemap.xml`.
2. **Bing Webmaster Tools** → add site → submit sitemap (Bing also feeds ChatGPT search).
3. **Rich Results Test** on a service, a city, a combo, and a blog page — confirm no schema errors.
4. **PageSpeed Insights** (mobile) on the homepage — fix anything flagged red.
5. **Manually request indexing** in GSC for: homepage, `/services.html`, `/service-areas.html`, top 5 city pages, top 5 combos.
6. Confirm the **logo image** (`/images/powerx-logo.jpg`) is committed and deployed (it was untracked).
7. Set up a **301 redirect** plan if any old URLs existed (none currently).

---

## 7. Verify the trust claims (do before launch)

The site states **4.9★ / 80+ reviews** and **8+ years**. Make sure these are accurate and match GBP exactly — schema `aggregateRating` should never overstate, or it can be flagged. Update the numbers in `scripts/seo-data.cjs` (`SITE.rating`, `SITE.reviewCount`) and re-run the generator if they change.

---

## How to extend the site further (it's data-driven)

- Edit **`scripts/seo-data.cjs`** (services, cities, neighbourhoods, blog, combo list).
- Run **`node scripts/generate-seo-pages.cjs`** → regenerates all pages, sitemap & llms.txt.
- `vite.config.ts` auto-discovers pages; `npm run build` ships them.

**Next aggressive moves available:** more neighbourhood pages for remaining cities, combos for the other 6 services, more blog posts (one per high-value query), and a credentials-rich About page for E-E-A-T.
