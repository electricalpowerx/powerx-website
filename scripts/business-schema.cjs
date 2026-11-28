/* ============================================================
   Canonical business structured data — the ONLY place the
   LocalBusiness/Electrician JSON-LD is defined.
   - generate-seo-pages.cjs uses buildBusinessSchema() for generated pages.
   - normalize-structured-data.cjs rewrites every page so it carries exactly
     one such block (hand-built pages included).
   ============================================================ */
const { SITE, LOCATIONS } = require("./seo-data.cjs");

function buildBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician"],
    "@id": SITE.domain + "/#business",
    name: SITE.name,
    legalName: SITE.name,
    url: SITE.domain,
    image: SITE.domain + "/images/powerx-logo.png",
    telephone: SITE.phoneIntl,
    email: SITE.email,
    priceRange: "$$",
    foundingDate: SITE.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Technical Safety BC licensed electrical contractor",
      credentialCategory: "license",
      identifier: SITE.licenseNumber,
      recognizedBy: { "@type": "Organization", name: "Technical Safety BC", url: "https://www.technicalsafetybc.ca/" },
    },
    areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: l.city + ", BC" })),
    aggregateRating: { "@type": "AggregateRating", ratingValue: SITE.rating, reviewCount: SITE.reviewCount },
    sameAs: SITE.sameAs,
  };
}

module.exports = { buildBusinessSchema };
