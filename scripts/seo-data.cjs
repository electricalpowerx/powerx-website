/* ============================================================
   PowerX Electrical — SEO silo content data
   Unique copy per service & per location lives here.
   Edit this file to tweak page content, then run:
     node scripts/generate-seo-pages.cjs
   ============================================================ */

const SITE = {
  name: "PowerX Electrical Ltd",
  phone: "778-823-1575",
  phoneIntl: "+1-778-823-1575",
  phoneDigits: "7788231575",
  email: "electricalpowerx@gmail.com",
  domain: "https://powerxelectrical.ca",
  address: {
    street: "12491 68 Avenue",
    city: "Surrey",
    region: "BC",
    postal: "V3W 2C9",
    country: "CA",
  },
  rating: "4.9",
  reviewCount: "80",
  reviewsUrl:
    "https://www.google.com/maps/place/PowerX+Electrical+Ltd./@49.126866,-122.8789452,17z/data=!4m8!3m7!1s0x5485dbcbb0eed05b:0xe3d33cf79f989583!8m2!3d49.126866!4d-122.8763703!9m1!1b1!16s%2Fg%2F11xn_1zwbc",
  whatsapp:
    "https://wa.me/17788231575?text=Hi%20PowerX%20Electrical%2C%20I%20need%20a%20quick%20quote.%20Here%20are%20photos%20of%20my%20electrical%20problem%3A",
  geo: { lat: 49.126866, lng: -122.8763703 },
  sameAs: [
    "https://www.google.com/maps/place/PowerX+Electrical+Ltd./@49.126866,-122.8789452,17z/data=!4m8!3m7!1s0x5485dbcbb0eed05b:0xe3d33cf79f989583!8m2!3d49.126866!4d-122.8763703!9m1!1b1!16s%2Fg%2F11xn_1zwbc",
  ],
  founded: "2018",
  yearsExperience: "8+",
  jobsCompleted: "1000+",
  // Optional: add your Technical Safety BC contractor licence number to display it
  // site-wide for E-E-A-T (leave "" to hide the line). e.g. "LEC0201234".
  licenseNumber: "",
};

/* Services that get a programmatic page for every city (service × city matrix).
   All 14 services now produce a page per city (14 × 16 = 224 combo pages). */
const COMBO_SERVICE_SLUGS = [
  "emergency-electrician",
  "electrical-panel-upgrades",
  "electrical-service-upgrades",
  "ev-charger-installation",
  "home-rewiring",
  "aluminum-wiring-replacement",
  "lighting-installation",
  "generator-installation",
  "hot-tub-pool-wiring",
  "commercial-electrical",
  "tenant-improvements",
  "strata-electrical",
  "led-lighting-retrofits",
  "fire-alarm-systems",
];

/* ---------------------------------------------------------------
   SERVICES — each becomes /services/<slug>.html
   category: "residential" | "commercial"
--------------------------------------------------------------- */
const SERVICES = [
  {
    slug: "emergency-electrician",
    category: "residential",
    nav: "24/7 Emergency Electrician",
    h1: "24/7 Emergency Electrician in Surrey & the Lower Mainland",
    metaTitle:
      "24/7 Emergency Electrician Surrey & Lower Mainland | 30–60 Min | PowerX",
    metaDesc:
      "Power outage, burning smell or sparking outlet? PowerX dispatches a licensed emergency electrician across Surrey & the Lower Mainland 24/7. 30–60 min response. Call 778-823-1575.",
    image: "fire alarm.jpg",
    heroSub:
      "When the power goes out or something smells like it is burning, you need a real licensed electrician now — not an answering service. We answer the phone and roll a stocked van day or night.",
    intro: [
      "Electrical emergencies do not keep business hours. PowerX runs a genuine 24/7/365 emergency line answered by licensed electricians who can be at your door across most of the Lower Mainland in 30–60 minutes. We keep our vans stocked with breakers, wire, panels and common parts so most problems are solved in a single visit.",
      "Before any work starts you get a clear, upfront price — no inflated overtime games at 2am. We diagnose the root cause, make it safe, and fix it to the current BC Electrical Code so the problem stays gone.",
    ],
    bulletsTitle: "Emergencies we handle immediately",
    bullets: [
      "Complete or partial power loss",
      "Burning smell or hot, discoloured outlets",
      "Sparking switches, outlets or panels",
      "Breakers that trip repeatedly or won't reset",
      "Storm, wind or flood electrical damage",
      "Exposed, damaged or arcing wiring",
      "No power to specific rooms or circuits",
      "Failed or smoking electrical panels",
    ],
    stepsTitle: "What happens when you call",
    steps: [
      ["Call answered live", "A licensed electrician — not a call centre — picks up and triages your situation right away."],
      ["Fast dispatch", "We leave immediately with the parts and tools to fix it, targeting 30–60 minutes in most areas."],
      ["Upfront price", "You approve a clear price on site before we begin. No surprise after-hours markups."],
      ["Made safe & fixed", "We solve the root cause to BC Electrical Code — not a band-aid that fails next week."],
    ],
    faqs: [
      ["How fast can you actually get to me?", "We target 30–60 minutes across Surrey, Vancouver, Burnaby, Langley and nearby areas. Severe weather or peak demand can extend this, but we always tell you an honest ETA up front."],
      ["Do you charge huge after-hours fees?", "No. You get a clear, upfront price before any work begins. We do not dramatically inflate rates for nights, weekends or holidays the way some companies do."],
      ["What should I do right now if I smell burning or see sparks?", "If it's safe, switch off your main breaker, then call us at 778-823-1575. If you see flames or smell gas, call 911 first, then call us."],
    ],
    related: ["electrical-panel-upgrades", "home-rewiring", "electrical-service-upgrades"],
  },
  {
    slug: "electrical-panel-upgrades",
    category: "residential",
    nav: "Electrical Panel Upgrades",
    h1: "Electrical Panel Upgrades & Replacements",
    metaTitle:
      "Electrical Panel Upgrade Surrey & Lower Mainland | 100A to 200A | PowerX",
    metaDesc:
      "Upgrade your electrical panel to 200A with PowerX. Fuse box & aluminum panel replacements, permits & inspection included. Serving Surrey & the Lower Mainland. Call 778-823-1575.",
    image: "panel-upgrade.jpg",
    heroSub:
      "Older 60A and 100A panels can't keep up with heat pumps, EV chargers, AC and modern appliances. We upgrade you to a safe, code-compliant 200A service — permits and inspection included.",
    intro: [
      "Most homes in the Lower Mainland built before the 1990s still run 60A or 100A service — undersized for today's heat pumps, EV chargers, hot tubs and home offices. A panel upgrade gives you the capacity and safety modern living demands, and is often required before adding a Level 2 EV charger or suite.",
      "PowerX handles the whole job: load calculation, permit, BC Hydro coordination, the panel swap itself, and the final Technical Safety BC inspection. We label every circuit cleanly and leave you with a panel you can actually understand.",
    ],
    bulletsTitle: "What a panel upgrade includes",
    bullets: [
      "Full electrical load calculation for your home",
      "100A or 200A service upgrade",
      "Fuse box & obsolete panel replacement",
      "Federal Pioneer / Zinsco panel replacement",
      "Aluminum branch wiring remediation",
      "Permit pulled & BC Hydro coordination",
      "Clean circuit labelling & tidy terminations",
      "Final Technical Safety BC inspection",
    ],
    stepsTitle: "Our panel upgrade process",
    steps: [
      ["Assessment & quote", "We review your existing service, run a load calc and give you a fixed written price."],
      ["Permit & scheduling", "We pull the permit and coordinate any required BC Hydro disconnect/reconnect."],
      ["Upgrade day", "Power is safely isolated, the new panel is installed and every circuit is re-landed and labelled."],
      ["Inspection & sign-off", "A Technical Safety BC inspection confirms the work, and we hand you the paperwork."],
    ],
    faqs: [
      ["How much does a panel upgrade cost?", "Most residential 200A upgrades fall in a predictable range depending on your meter base, service mast and BC Hydro requirements. We give you a fixed written quote after a quick assessment — no guesswork."],
      ["Do I need a 200A panel for an EV charger?", "Not always — it depends on your current load. We run a calculation first. Many homes can add a Level 2 charger on a 100A service, but a 200A upgrade future-proofs you for heat pumps and more."],
      ["Will my power be out during the upgrade?", "Power is off only for part of the day while we swap the panel. We schedule efficiently and coordinate with BC Hydro to keep the outage as short as possible."],
    ],
    related: ["electrical-service-upgrades", "ev-charger-installation", "aluminum-wiring-replacement"],
  },
  {
    slug: "electrical-service-upgrades",
    category: "residential",
    nav: "200A Service Upgrades",
    h1: "200A Electrical Service Upgrades",
    metaTitle:
      "200A Electrical Service Upgrade Surrey & Lower Mainland | PowerX Electrical",
    metaDesc:
      "Increase your home's electrical capacity with a 200A service upgrade from PowerX. Mast, meter base & panel upgrades with permits. Lower Mainland. Call 778-823-1575.",
    image: "panel upgrade.jpg",
    heroSub:
      "Adding a suite, heat pump, EV charger or workshop? A full service upgrade increases the power coming into your home, not just the panel — done to code with permits and BC Hydro coordination.",
    intro: [
      "A service upgrade increases the total amperage your home can draw from BC Hydro — covering the service mast, meter base, main disconnect and grounding, not just the breaker panel. It's the foundation for secondary suites, heat pumps, EV charging and modern electrical loads.",
      "PowerX manages the complete upgrade: engineering the load, pulling permits, coordinating the BC Hydro disconnect and reconnect, and passing the Technical Safety BC inspection — so the whole project is handled by one accountable contractor.",
    ],
    bulletsTitle: "What's covered",
    bullets: [
      "Upgrade to 200A (or 400A for large homes)",
      "New service mast & weatherhead",
      "Meter base replacement",
      "Main disconnect & panel",
      "Grounding & bonding to current code",
      "Secondary suite service preparation",
      "BC Hydro disconnect/reconnect coordination",
      "Permits & final inspection",
    ],
    stepsTitle: "How it works",
    steps: [
      ["Load & site review", "We confirm what your new loads require and what BC Hydro will need on the supply side."],
      ["Permitting", "We handle the electrical permit and the utility coordination paperwork."],
      ["Installation", "Mast, meter base, disconnect and panel are upgraded in a coordinated outage window."],
      ["Inspection", "Technical Safety BC inspects and signs off; you get all documentation."],
    ],
    faqs: [
      ["What's the difference between a panel upgrade and a service upgrade?", "A panel upgrade replaces the breaker box. A service upgrade increases the actual capacity feeding your home — mast, meter base, disconnect and panel. We'll tell you which one you actually need."],
      ["Do I need a service upgrade for a secondary suite?", "Often yes. Suites add significant load and may require a larger service plus separate metering or sub-panels. We design it to meet code and your municipality's requirements."],
      ["How long does a service upgrade take?", "Most residential service upgrades are completed in a day, with a portion of that day on a planned power outage. Larger or 400A jobs may take longer."],
    ],
    related: ["electrical-panel-upgrades", "ev-charger-installation", "home-rewiring"],
  },
  {
    slug: "ev-charger-installation",
    category: "residential",
    nav: "EV Charger Installation",
    h1: "EV Charger Installation (Level 2)",
    metaTitle:
      "EV Charger Installation Surrey & Lower Mainland | Level 2 | PowerX Electrical",
    metaDesc:
      "Level 2 home & commercial EV charger installation by licensed electricians. Tesla, ChargePoint, Wallbox & more. Permits + rebates. Lower Mainland. Call 778-823-1575.",
    image: "ev charger.JPG",
    heroSub:
      "Charge at home overnight. We install Level 2 chargers for Tesla, ChargePoint, Wallbox, Grizzl-E and more — sized to your panel, permitted, and eligible for available rebates.",
    intro: [
      "A Level 2 charger adds roughly 30–60 km of range per hour versus the trickle you get from a standard outlet. PowerX installs home and workplace EV chargers end to end: we assess your panel, run a load calculation, install the dedicated circuit, and pull the permit so it's done legally and safely.",
      "We work with all major hardwired and plug-in chargers and help you take advantage of available BC and federal EV charging rebates. If your panel needs more capacity, we can upgrade it in the same project.",
    ],
    bulletsTitle: "Our EV charging services",
    bullets: [
      "Level 2 (240V) home charger installation",
      "Tesla Wall Connector, ChargePoint, Wallbox, Grizzl-E & more",
      "Hardwired or NEMA 14-50 plug installs",
      "Dedicated circuit & load management",
      "Panel upgrades when capacity is short",
      "Multi-unit & strata EV charging",
      "Commercial / workplace charging stations",
      "Permits & rebate paperwork support",
    ],
    stepsTitle: "From quote to charging",
    steps: [
      ["Panel assessment", "We check your panel capacity and the best route from panel to parking spot."],
      ["Fixed quote", "You get a clear price including the charger, circuit, permit and any load management."],
      ["Clean install", "We mount the charger, run the circuit neatly and energize it with a permit on file."],
      ["Tested & ready", "We test a real charge session and walk you through the app and settings."],
    ],
    faqs: [
      ["Can my home handle a Level 2 charger?", "Most can. We run a load calculation first. If your panel is tight, load-management devices or a panel upgrade let you charge safely — we'll lay out the options."],
      ["Are there rebates for EV chargers?", "Yes — BC and federal programs periodically offer EV charger rebates for homes, stratas and businesses. We install to the standard these programs require and help with the paperwork."],
      ["Do I need a permit to install an EV charger?", "Yes. A Level 2 charger is a permitted electrical installation in BC. We pull the permit and arrange inspection so your install is legal and insurable."],
    ],
    related: ["electrical-panel-upgrades", "electrical-service-upgrades", "emergency-electrician"],
  },
  {
    slug: "home-rewiring",
    category: "residential",
    nav: "Home Wiring & Rewiring",
    h1: "Home Wiring & Rewiring",
    metaTitle:
      "Home Rewiring Surrey & Lower Mainland | Whole-House Wiring | PowerX Electrical",
    metaDesc:
      "Whole-home rewiring, renovation wiring & new construction by PowerX. Knob-and-tube and aluminum wiring replacement done to code. Lower Mainland. Call 778-823-1575.",
    image: "house-rewire(2).jpg",
    heroSub:
      "From a single circuit to a complete rewire, we wire homes safely and cleanly — renovations, additions, new construction, and replacement of dangerous knob-and-tube or aluminum wiring.",
    intro: [
      "Old wiring is one of the most common causes of house fires. If your home still has knob-and-tube, cloth-insulated or aluminum branch wiring, a rewire dramatically improves safety, often lowers insurance headaches, and gives you the circuits modern life needs.",
      "PowerX handles wiring for renovations, additions, basement suites and full whole-home rewires. We plan circuits around how you actually live — kitchens, home offices, EV readiness — and finish to the current BC Electrical Code with permits and inspection.",
    ],
    bulletsTitle: "Wiring work we do",
    bullets: [
      "Whole-home rewiring",
      "Knob-and-tube wiring replacement",
      "Aluminum branch wiring remediation",
      "Renovation & addition wiring",
      "Basement & secondary suite wiring",
      "Kitchen & bathroom remodel circuits",
      "New construction wiring",
      "Dedicated circuits & EV readiness",
    ],
    stepsTitle: "How a rewire works",
    steps: [
      ["Walkthrough & plan", "We map your existing wiring and plan new circuits around your needs and budget."],
      ["Fixed quote & permit", "You get a written scope and price; we pull the electrical permit."],
      ["Rough-in", "New wiring is run and inspected before walls are closed."],
      ["Finish & inspect", "Devices, fixtures and the panel are completed and a final inspection signs it off."],
    ],
    faqs: [
      ["Does my home really need rewiring?", "If you have knob-and-tube, aluminum branch wiring, cloth-insulated wire, frequent breaker trips or two-prong outlets throughout, it's worth an assessment. We'll give you an honest opinion, not a scare tactic."],
      ["Can you rewire without tearing apart every wall?", "Often, yes. Experienced electricians can fish much of the wiring through existing cavities, attics and crawlspaces, minimizing drywall damage. We'll explain what's realistic for your home."],
      ["Will rewiring help with home insurance?", "Many insurers in BC are cautious about knob-and-tube and aluminum wiring. Replacing it and getting documentation often makes coverage easier — check with your insurer for specifics."],
    ],
    related: ["aluminum-wiring-replacement", "electrical-panel-upgrades", "lighting-installation"],
  },
  {
    slug: "aluminum-wiring-replacement",
    category: "residential",
    nav: "Aluminum Wiring Replacement",
    h1: "Aluminum Wiring Inspection & Replacement",
    metaTitle:
      "Aluminum Wiring Replacement & Inspection Surrey & Lower Mainland | PowerX",
    metaDesc:
      "Aluminum wiring inspection, remediation (pigtailing) & full replacement by licensed electricians. Make your home safe and insurable. Lower Mainland. Call 778-823-1575.",
    image: "house rewire.jpg",
    heroSub:
      "Homes wired in the 1960s–70s often have aluminum branch wiring, a known fire risk at connections. We inspect, remediate and replace it so your home is safe and insurer-friendly.",
    intro: [
      "Aluminum branch wiring was common in Lower Mainland homes built between roughly 1965 and 1976. It's not inherently unusable, but its connections loosen and overheat over time, which is why many insurers now ask about it. The fix ranges from approved connector remediation (pigtailing) to full replacement.",
      "PowerX inspects your wiring, identifies every aluminum-fed device, and recommends the right approach — copper pigtail remediation with approved connectors, or a full rewire where it makes sense. Everything is documented for your insurer.",
    ],
    bulletsTitle: "How we make aluminum wiring safe",
    bullets: [
      "Full aluminum wiring inspection & report",
      "Approved connector remediation (pigtailing)",
      "Replacement of outlets, switches & connections",
      "Full or partial rewiring where needed",
      "Panel & breaker compatibility checks",
      "Documentation for your insurance provider",
      "Code-compliant, inspected work",
    ],
    stepsTitle: "Our process",
    steps: [
      ["Inspection", "We assess every aluminum-fed device and connection and explain the real risk level."],
      ["Recommendation", "You get options — remediation vs. replacement — with honest pros, cons and pricing."],
      ["Remediation / rewire", "We apply approved connectors or rewire affected circuits to current code."],
      ["Documentation", "We provide paperwork you can give your insurer for peace of mind."],
    ],
    faqs: [
      ["Is aluminum wiring dangerous?", "The wire itself carries current fine, but aluminum expands, contracts and oxidizes, so connections can loosen and overheat. Proper remediation with approved connectors or replacement removes that risk."],
      ["What is pigtailing?", "Pigtailing splices a short length of copper to the aluminum using a connector approved for the purpose, so devices see copper. It's a recognized remediation that's less invasive than a full rewire."],
      ["Will this help me get insurance?", "Many BC insurers require aluminum wiring to be remediated or replaced by a licensed electrician. We document the work so you can satisfy their requirements."],
    ],
    related: ["home-rewiring", "electrical-panel-upgrades", "emergency-electrician"],
  },
  {
    slug: "lighting-installation",
    category: "residential",
    nav: "Lighting & Pot Lights",
    h1: "Lighting Installation, Pot Lights & Smart Controls",
    metaTitle:
      "Lighting & Pot Light Installation Surrey & Lower Mainland | PowerX Electrical",
    metaDesc:
      "Recessed pot lights, LED upgrades, landscape & smart lighting installed by licensed electricians. Brighten and modernize your home. Lower Mainland. Call 778-823-1575.",
    image: "led lighting.jpg",
    heroSub:
      "Recessed pot lights, under-cabinet LEDs, landscape lighting, dimmers and smart switches — installed cleanly and wired to last. The fastest way to modernize a room.",
    intro: [
      "Lighting is the highest-impact, lowest-cost electrical upgrade for most homes. New recessed pot lights, LED retrofits and smart controls transform how a space looks and feels while cutting energy use.",
      "PowerX installs interior and exterior lighting of every kind — pot lights, pendants, under-cabinet strips, landscape and security lighting, dimmers, timers and smart systems like Lutron. We wire it neatly, balance the circuits and make sure switching makes sense for how you use each room.",
    ],
    bulletsTitle: "Lighting we install",
    bullets: [
      "Recessed pot / can lights",
      "LED retrofits & energy-efficient upgrades",
      "Under-cabinet & accent lighting",
      "Pendants, chandeliers & fixtures",
      "Landscape & security lighting",
      "Dimmers, timers & motion sensors",
      "Smart switches & Lutron systems",
      "Exterior & soffit lighting",
    ],
    stepsTitle: "How we work",
    steps: [
      ["Design walkthrough", "We plan fixture placement, spacing and switching for the look you want."],
      ["Fixed quote", "You get a clear price including fixtures, wiring and any drywall patching needs."],
      ["Clean install", "We cut, wire and mount carefully, keeping mess to a minimum and circuits balanced."],
      ["Dial it in", "We set dimmers, smart scenes and confirm everything switches the way you expect."],
    ],
    faqs: [
      ["How many pot lights do I need in a room?", "It depends on ceiling height, room size and purpose. As a rough guide we space them for even, shadow-free light — we'll lay out a plan for your specific room during the quote."],
      ["Can you install pot lights without major drywall damage?", "In most ceilings yes — we cut clean openings and fish wiring through the cavity. Some patching may be needed where access is tight, and we'll tell you up front."],
      ["Are smart lighting systems worth it?", "If you want scenes, scheduling and app/voice control, yes. Systems like Lutron are reliable and add real convenience. We'll match the system to your goals and budget."],
    ],
    related: ["home-rewiring", "ev-charger-installation", "led-lighting-retrofits"],
  },
  {
    slug: "generator-installation",
    category: "residential",
    nav: "Generators & Backup Power",
    h1: "Generator & Backup Power Installation",
    metaTitle:
      "Generator Installation Surrey & Lower Mainland | Standby & Transfer Switch | PowerX",
    metaDesc:
      "Whole-home standby generators, automatic transfer switches & critical-circuit backup installed by licensed electricians. Stay powered in any outage. Call 778-823-1575.",
    image: "van-guy.jpg",
    heroSub:
      "Windstorms knock out Lower Mainland power every year. A properly installed standby generator and transfer switch keep your heat, fridge, sump pump and internet running automatically.",
    intro: [
      "When a winter windstorm takes down the grid, a backup power system keeps the essentials running — heat, refrigeration, sump pumps, medical equipment and internet. PowerX installs standby generators and transfer switches that detect an outage and switch over automatically, plus portable-generator inlet setups for a simpler budget option.",
      "We size the system to the circuits that matter to you, install the automatic transfer switch safely (no dangerous backfeeding), and handle the permit and inspection. The result is a system that just works when you need it.",
    ],
    bulletsTitle: "Backup power solutions",
    bullets: [
      "Whole-home standby generators",
      "Automatic transfer switches (ATS)",
      "Critical-circuit / essential loads panels",
      "Portable generator inlets & interlocks",
      "Battery backup integration",
      "Generator sizing & load planning",
      "Permits & inspection",
      "Maintenance & testing",
    ],
    stepsTitle: "Our approach",
    steps: [
      ["Needs assessment", "We identify which circuits you must keep running and size the system accordingly."],
      ["Fixed quote", "You get a clear price for the generator, transfer switch, wiring, permit and commissioning."],
      ["Safe install", "We install the ATS and connections so the system can never backfeed the grid."],
      ["Test & train", "We run a full transfer test and show you how to maintain and operate it."],
    ],
    faqs: [
      ["Do I need a whole-home generator or just essentials?", "Many homeowners only need heat, fridge, sump pump and internet backed up, which is far cheaper than whole-home. We'll help you decide based on your priorities and budget."],
      ["Why is a transfer switch necessary?", "A transfer switch (or interlock) isolates your home from the grid so your generator can't backfeed and endanger line workers. It's required, and it's the safe, legal way to connect a generator."],
      ["Can you install an inlet for my portable generator?", "Yes. A generator inlet plus an interlock kit is an affordable way to safely power select circuits from a portable unit, without running extension cords through the house."],
    ],
    related: ["electrical-panel-upgrades", "emergency-electrician", "electrical-service-upgrades"],
  },
  {
    slug: "hot-tub-pool-wiring",
    category: "residential",
    nav: "Hot Tub & Pool Wiring",
    h1: "Hot Tub & Pool Electrical Wiring",
    metaTitle:
      "Hot Tub & Pool Wiring Surrey & Lower Mainland | GFCI Spa Circuits | PowerX",
    metaDesc:
      "Safe, code-compliant hot tub and pool wiring with GFCI protection and proper bonding by licensed electricians. Permits included. Lower Mainland. Call 778-823-1575.",
    image: "exhaust fan.jpg",
    heroSub:
      "Hot tubs and pools mix water and 240V power, so they demand proper GFCI protection, bonding and a dedicated circuit. We wire them to code so your spa is safe to enjoy.",
    intro: [
      "A hot tub or pool needs a dedicated 240V GFCI-protected circuit and correct equipotential bonding — get it wrong and it's a serious shock hazard. PowerX wires spas and pools to the current BC Electrical Code, including the disconnect, bonding grid and dedicated circuit.",
      "We assess your panel capacity, install the proper GFCI disconnect within code-required distance, run the dedicated circuit and pull the permit. Many installs also need a panel or service upgrade, which we can handle in the same project.",
    ],
    bulletsTitle: "What's included",
    bullets: [
      "Dedicated 240V hot tub / spa circuit",
      "GFCI-protected disconnect at code distance",
      "Equipotential bonding grid",
      "Pool pump & equipment wiring",
      "Panel capacity assessment & upgrades",
      "Outdoor-rated, weatherproof wiring",
      "Permit & inspection",
    ],
    stepsTitle: "How it works",
    steps: [
      ["Site & panel check", "We confirm capacity and the best routing to your spa or pool location."],
      ["Fixed quote", "You get a price covering the circuit, GFCI disconnect, bonding and permit."],
      ["Code install", "We install the disconnect, bonding and dedicated circuit to BC Electrical Code."],
      ["Inspect & enjoy", "Inspection signs off the work and your spa is safe to fill and fire up."],
    ],
    faqs: [
      ["Why does a hot tub need special wiring?", "Hot tubs combine water and 240V power, so code requires GFCI protection, a disconnect within reach, and bonding to prevent shock. A standard outlet is not safe or legal for a spa."],
      ["Do I need a permit for hot tub wiring?", "Yes. Spa and pool circuits are permitted electrical work in BC. We pull the permit and arrange inspection so it's safe and insurable."],
      ["Will my panel handle a hot tub?", "Many do, but spas draw significant load. We run a calculation first and, if needed, recommend a panel or service upgrade in the same visit."],
    ],
    related: ["electrical-panel-upgrades", "electrical-service-upgrades", "emergency-electrician"],
  },

  /* ---------------- COMMERCIAL ---------------- */
  {
    slug: "commercial-electrical",
    category: "commercial",
    nav: "Commercial & Industrial",
    h1: "Commercial & Industrial Electrical Services",
    metaTitle:
      "Commercial Electrician Surrey & Lower Mainland | Industrial Electrical | PowerX",
    metaDesc:
      "Commercial & industrial electrical: tenant improvements, retail fit-outs, warehouse power, service upgrades & maintenance. Minimize downtime. Lower Mainland. Call 778-823-1575.",
    image: "commercial project.jpg",
    heroSub:
      "Retail, office, warehouse and light industrial — we deliver code-compliant commercial electrical work that respects your deadlines, your budget and your need to stay open.",
    intro: [
      "Commercial electrical work lives and dies on scheduling and reliability. PowerX serves business owners, property managers and general contractors across the Lower Mainland with installations, service upgrades, repairs and ongoing maintenance — planned around your operating hours to minimize downtime.",
      "From a single retail fit-out to multi-phase tenant improvements and warehouse power distribution, we handle permits, inspections and coordination with your other trades, and we communicate clearly so projects stay on schedule.",
    ],
    bulletsTitle: "Commercial services",
    bullets: [
      "Tenant improvements & retail fit-outs",
      "Office & commercial wiring",
      "Warehouse & industrial power",
      "Service & distribution upgrades (3-phase)",
      "Lighting design & LED retrofits",
      "Emergency & exit lighting",
      "Data, low-voltage & device wiring",
      "Preventive maintenance contracts",
    ],
    stepsTitle: "Working with us",
    steps: [
      ["Scope & quote", "We review drawings or walk the site, then provide a detailed, fixed quote."],
      ["Permits & planning", "We handle permits and schedule around your business hours and other trades."],
      ["Execution", "Licensed electricians deliver the work cleanly, safely and on schedule."],
      ["Inspection & handover", "We pass inspection and provide documentation for your records."],
    ],
    faqs: [
      ["Can you work after hours to avoid disrupting our business?", "Yes. We routinely schedule commercial work during evenings, weekends or off-peak hours to keep your operation running. We'll plan the timeline around you."],
      ["Do you work with general contractors and property managers?", "Absolutely. We coordinate with GCs, PMs and other trades, handle permits and inspections, and keep communication tight so projects stay on track."],
      ["Do you offer maintenance contracts?", "Yes. We provide scheduled preventive maintenance for commercial and strata properties to catch issues before they cause downtime."],
    ],
    related: ["tenant-improvements", "led-lighting-retrofits", "fire-alarm-systems"],
  },
  {
    slug: "tenant-improvements",
    category: "commercial",
    nav: "Tenant Improvements & Fit-Outs",
    h1: "Tenant Improvements & Commercial Fit-Outs",
    metaTitle:
      "Tenant Improvement Electrician Surrey & Lower Mainland | Fit-Outs | PowerX",
    metaDesc:
      "Electrical for tenant improvements, retail & restaurant fit-outs and office buildouts. On-schedule, permitted, coordinated with your trades. Lower Mainland. Call 778-823-1575.",
    image: "commercial project.jpg",
    heroSub:
      "Opening or renovating a commercial space? We deliver the electrical scope of your tenant improvement on time — power, lighting, data and devices, coordinated with every other trade.",
    intro: [
      "A tenant improvement only succeeds if the trades stay in sync and the schedule holds. PowerX delivers the electrical scope of retail, restaurant, office and medical fit-outs across the Lower Mainland — from demolition and rough-in to devices, lighting and final inspection.",
      "We read your drawings, coordinate with the GC and other trades, pull permits, and keep the project moving so you can open on time. Clear communication and clean work are what bring contractors and landlords back to us.",
    ],
    bulletsTitle: "Fit-out electrical scope",
    bullets: [
      "Demolition & safe make-safe",
      "Power & lighting rough-in",
      "Panel & sub-panel installation",
      "Device, fixture & equipment connections",
      "Data & low-voltage rough-in",
      "Emergency & exit lighting",
      "Signage & display circuits",
      "Permits, inspection & as-builts",
    ],
    stepsTitle: "How we deliver",
    steps: [
      ["Drawings & quote", "We price from your TI drawings and flag anything that needs clarifying early."],
      ["Permit & schedule", "We pull permits and lock our work into the project schedule."],
      ["Rough-in to finish", "We complete rough-in, inspection, then devices, lighting and final connections."],
      ["Inspection & open", "Final inspection clears the space so you can open on time."],
    ],
    faqs: [
      ["Can you hit our opening deadline?", "Deadlines are everything in TI work. We plan our crew and materials around your schedule and coordinate with other trades to keep the critical path moving."],
      ["Do you handle the permits?", "Yes. We pull the electrical permit, manage inspections and provide documentation the landlord or municipality requires."],
      ["Can you work from our designer's or landlord's drawings?", "Yes. We build from TI drawings and base-building requirements, and we'll flag any conflicts or value-engineering opportunities up front."],
    ],
    related: ["commercial-electrical", "led-lighting-retrofits", "strata-electrical"],
  },
  {
    slug: "strata-electrical",
    category: "commercial",
    nav: "Strata & Multi-Unit",
    h1: "Strata & Multi-Unit Electrical Services",
    metaTitle:
      "Strata Electrician Surrey & Lower Mainland | Multi-Unit & Common Area | PowerX",
    metaDesc:
      "Strata & multi-unit electrical: common-area lighting, parkade EV charging, panel upgrades, emergency repairs & maintenance. Trusted by property managers. Call 778-823-1575.",
    image: "led lighting.jpg",
    heroSub:
      "Property managers and strata councils trust PowerX for common-area lighting, parkade EV charging, suite repairs, panel upgrades and reliable emergency response across the Lower Mainland.",
    intro: [
      "Strata and multi-unit buildings have electrical needs that span common areas, individual suites, parkades and building services. PowerX works with property managers and strata councils to keep buildings safe, compliant and well-lit — and to respond fast when something fails.",
      "We handle common-area and parkade lighting retrofits, EV charging infrastructure, panel and service upgrades, suite-level repairs, and scheduled maintenance — with clear documentation and invoicing that councils and managers can actually work with.",
    ],
    bulletsTitle: "Strata services",
    bullets: [
      "Common-area & parkade LED lighting",
      "Multi-unit EV charging infrastructure",
      "Building service & panel upgrades",
      "Suite-level repairs & rewiring",
      "Emergency & exit lighting compliance",
      "24/7 emergency response",
      "Preventive maintenance programs",
      "Clear documentation for councils",
    ],
    stepsTitle: "Why managers choose us",
    steps: [
      ["Single point of contact", "One accountable contractor for common areas, suites and emergencies."],
      ["Clear quotes & invoicing", "Documentation councils can present and approve without confusion."],
      ["Scheduled maintenance", "We catch failing components before they become resident complaints."],
      ["Fast emergency response", "24/7 coverage so building issues don't turn into bigger problems."],
    ],
    faqs: [
      ["Do you work directly with strata councils and property managers?", "Yes. We provide the documentation, quotes and invoicing that councils need to approve and track work, and we keep a single point of contact for the building."],
      ["Can you install EV charging in our parkade?", "Yes. We design and install multi-unit EV charging with load management and metering options suited to strata cost-recovery, plus the electrical capacity to support it."],
      ["Do you offer ongoing maintenance for buildings?", "We do. Scheduled preventive maintenance keeps common-area lighting, emergency lighting and building services reliable and compliant."],
    ],
    related: ["commercial-electrical", "led-lighting-retrofits", "ev-charger-installation"],
  },
  {
    slug: "led-lighting-retrofits",
    category: "commercial",
    nav: "Commercial LED Retrofits",
    h1: "Commercial LED Lighting Retrofits",
    metaTitle:
      "Commercial LED Lighting Retrofit Surrey & Lower Mainland | PowerX Electrical",
    metaDesc:
      "Cut energy costs with a commercial LED lighting retrofit. Offices, retail, warehouses & parkades. Rebate-eligible upgrades by licensed electricians. Call 778-823-1575.",
    image: "led lighting.jpg",
    heroSub:
      "LED retrofits cut lighting energy use dramatically and pay for themselves. We upgrade offices, retail, warehouses and parkades — often with utility rebates that shorten the payback.",
    intro: [
      "Lighting can be 30–40% of a commercial building's electricity bill. Retrofitting to LED slashes that, improves light quality and cuts maintenance from constant lamp changes. Many upgrades qualify for BC Hydro and other utility incentives that shorten the payback period.",
      "PowerX audits your existing lighting, models the energy and rebate savings, and installs the retrofit — fixtures, controls, occupancy sensors and daylight harvesting — with minimal disruption to your operation.",
    ],
    bulletsTitle: "Retrofit services",
    bullets: [
      "Office & retail LED upgrades",
      "Warehouse high-bay retrofits",
      "Parkade & exterior lighting",
      "Occupancy & daylight sensors",
      "Lighting controls & scheduling",
      "Energy & rebate analysis",
      "After-hours installation",
      "Disposal of old lamps & ballasts",
    ],
    stepsTitle: "Our retrofit process",
    steps: [
      ["Lighting audit", "We count fixtures, measure usage and model the energy and maintenance savings."],
      ["Rebate & ROI", "We identify available utility rebates and present a clear payback picture."],
      ["Retrofit", "We install fixtures and controls, typically after hours to avoid disruption."],
      ["Verify savings", "We confirm light levels and hand over documentation for any rebate claims."],
    ],
    faqs: [
      ["How much can an LED retrofit save?", "Lighting energy savings of 50–70% are common versus older fluorescent or HID, plus big maintenance savings. We model your specific numbers before you commit."],
      ["Are there rebates for LED upgrades?", "Often yes — BC Hydro and other programs periodically offer commercial lighting incentives. We identify what's available and handle the documentation."],
      ["Can you install without shutting us down?", "Yes. We schedule retrofits after hours or in phases so your business keeps running during the upgrade."],
    ],
    related: ["commercial-electrical", "strata-electrical", "lighting-installation"],
  },
  {
    slug: "fire-alarm-systems",
    category: "commercial",
    nav: "Fire Alarm & Life Safety",
    h1: "Fire Alarm & Life Safety Systems",
    metaTitle:
      "Fire Alarm & Life Safety Systems Surrey & Lower Mainland | PowerX Electrical",
    metaDesc:
      "Fire alarm and life-safety system installation, testing & maintenance for commercial & strata buildings. Code-compliant, documented. Lower Mainland. Call 778-823-1575.",
    image: "smoke detector.jpg",
    heroSub:
      "Fire alarm and emergency lighting systems protect lives and keep you compliant. We design, install, test and maintain life-safety systems for commercial and strata buildings.",
    intro: [
      "Fire alarm and emergency lighting systems are both a legal requirement and a genuine life-safety responsibility for commercial and strata buildings. PowerX designs, installs, upgrades and maintains these systems to code, and provides the documentation inspectors and insurers expect.",
      "From new fire alarm installations during a fit-out to testing, deficiency correction and emergency-lighting compliance for existing buildings, we keep your life-safety systems working and your paperwork in order.",
    ],
    bulletsTitle: "Life-safety services",
    bullets: [
      "Fire alarm system installation",
      "System upgrades & expansions",
      "Emergency & exit lighting",
      "Testing, inspection & deficiency correction",
      "Smoke & heat detector wiring",
      "Tenant improvement integration",
      "Compliance documentation",
      "Ongoing maintenance programs",
    ],
    stepsTitle: "How we help",
    steps: [
      ["Assessment", "We review your building, drawings or existing system and identify what's required."],
      ["Design & quote", "We design a code-compliant system and provide a clear, fixed price."],
      ["Install / remediate", "We install or correct deficiencies and verify every device functions."],
      ["Document", "You receive the test records and documentation inspectors and insurers require."],
    ],
    faqs: [
      ["Do you handle fire alarm testing and inspection?", "Yes. We test and inspect fire alarm and emergency lighting systems, correct deficiencies and provide the documentation your building requires."],
      ["Can you integrate fire alarm work into our renovation?", "Absolutely. We build fire alarm and life-safety scope into tenant improvements and renovations so it's coordinated and inspected with the rest of the project."],
      ["Is emergency lighting required for our building?", "Most commercial and multi-unit buildings require emergency and exit lighting that meets code. We assess your building and bring it into compliance."],
    ],
    related: ["commercial-electrical", "tenant-improvements", "strata-electrical"],
  },
];

/* ---------------------------------------------------------------
   LOCATIONS — each becomes /locations/electrician-<slug>.html
--------------------------------------------------------------- */
const LOCATIONS = [
  {
    slug: "surrey",
    city: "Surrey",
    metaTitle:
      "Electrician Surrey BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician in Surrey, BC. 24/7 emergency service, panel upgrades, EV chargers & rewiring. 30–60 min response across Surrey. Call 778-823-1575.",
    heroSub:
      "PowerX is based right here in Surrey. Whether you're in Newton, Guildford, Fleetwood or South Surrey, a licensed electrician can be at your door fast — day or night.",
    intro: [
      "Surrey is home base for PowerX Electrical — our shop is on 68 Avenue, so we know the city's housing stock inside out, from older Whalley and Newton homes that need panel and wiring upgrades to new builds across Clayton and Grandview Heights. That local knowledge means faster diagnosis and the right fix the first time.",
      "We cover all of Surrey for 24/7 emergency repairs, panel and service upgrades, EV charger installs, rewiring and commercial work. Because we're local, our emergency response across most of Surrey lands in the 30–60 minute window.",
    ],
    neighbourhoods: ["Whalley / City Centre", "Guildford", "Newton", "Fleetwood", "Cloverdale", "South Surrey", "Panorama Ridge", "Grandview Heights", "Clayton Heights"],
    localNote:
      "Many Surrey homes built in the 1970s–80s still run 100A (or 60A) service that struggles with today's heat pumps and EV chargers — panel and service upgrades are some of our most common Surrey jobs.",
    faqs: [
      ["Are you actually based in Surrey?", "Yes — our shop and office are at 12491 68 Avenue, Surrey. We're a genuinely local Surrey electrical contractor, not a call centre routing jobs from out of town."],
      ["How fast can you reach me in Surrey?", "For most of Surrey we target 30–60 minutes for emergencies, and often faster in central neighbourhoods near our shop."],
    ],
    nearby: ["langley", "white-rock", "delta", "new-westminster"],
  },
  {
    slug: "vancouver",
    city: "Vancouver",
    metaTitle:
      "Electrician Vancouver BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician serving Vancouver, BC. 24/7 emergency repairs, panel upgrades, EV chargers, knob-and-tube rewiring & commercial work. Call 778-823-1575.",
    heroSub:
      "From Kitsilano character homes to East Van and downtown towers, PowerX delivers licensed electrical work across Vancouver — emergency repairs, rewiring, panels and EV charging.",
    intro: [
      "Vancouver's older neighbourhoods are full of character homes that still hide knob-and-tube and early wiring — beautiful houses that need careful, code-compliant electrical updates. PowerX has the experience to rewire and upgrade these homes without tearing them apart, as well as to wire modern condos and commercial spaces.",
      "We serve the whole city for 24/7 emergencies, panel and service upgrades, EV charger installation, lighting and full rewires, plus commercial fit-outs and strata work. Licensed, insured and code-compliant on every job.",
    ],
    neighbourhoods: ["Downtown", "West End", "Kitsilano", "Mount Pleasant", "East Vancouver", "Commercial Drive", "Dunbar", "Marpole", "Hastings-Sunrise"],
    localNote:
      "Knob-and-tube and early-era wiring is common in Vancouver's pre-1950s homes. We specialize in safe rewiring and aluminum/knob-and-tube remediation that keeps insurers happy.",
    faqs: [
      ["Do you handle knob-and-tube rewiring in Vancouver?", "Yes — it's one of our specialties. Many Vancouver character homes still have knob-and-tube, and we rewire and remediate it to code with documentation for your insurer."],
      ["Do you serve downtown condos and high-rises?", "Yes. We handle suite-level repairs, upgrades and renovations in condos and towers, coordinating with strata and building management as needed."],
    ],
    nearby: ["burnaby", "north-vancouver", "richmond", "new-westminster"],
  },
  {
    slug: "burnaby",
    city: "Burnaby",
    metaTitle:
      "Electrician Burnaby BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician in Burnaby, BC. 24/7 emergency service, panel upgrades, EV chargers, rewiring & commercial electrical. Fast response. Call 778-823-1575.",
    heroSub:
      "Brentwood, Metrotown, Heights or the SFU area — PowerX delivers fast, licensed electrical service across Burnaby for homes, condos and businesses.",
    intro: [
      "Burnaby blends established post-war homes with a wave of new towers around Brentwood and Metrotown. PowerX serves both: panel upgrades and rewiring for older houses, plus EV charging, condo repairs and commercial work in the city's busy centres.",
      "We cover all of Burnaby for 24/7 emergency repairs, electrical upgrades, EV chargers, lighting and commercial projects — with response times that usually land in the 30–60 minute range.",
    ],
    neighbourhoods: ["Brentwood", "Metrotown", "Burnaby Heights", "North Burnaby", "South Burnaby", "Edmonds", "Capitol Hill", "Lougheed", "SFU / Burnaby Mountain"],
    localNote:
      "With so much density around Brentwood and Metrotown, EV charger installs and condo/strata electrical work are among our most common Burnaby projects.",
    faqs: [
      ["Can you install an EV charger in a Burnaby condo or townhouse?", "Often yes — it depends on your building's electrical capacity and strata approval. We assess feasibility, design load management and coordinate with your strata."],
      ["How quickly can you respond in Burnaby?", "We target 30–60 minutes for emergencies across most of Burnaby, traffic depending."],
    ],
    nearby: ["vancouver", "new-westminster", "coquitlam", "north-vancouver"],
  },
  {
    slug: "langley",
    city: "Langley",
    metaTitle:
      "Electrician Langley BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician in Langley, BC. 24/7 emergency repairs, panel upgrades, EV chargers, acreage & rewiring. Serving City & Township. Call 778-823-1575.",
    heroSub:
      "From Willoughby's new builds to Fort Langley character homes and Aldergrove acreages, PowerX covers the City and Township of Langley with licensed electrical service.",
    intro: [
      "Langley spans dense new neighbourhoods like Willoughby, established areas of Langley City, and rural acreages out toward Aldergrove and Fort Langley. Each has different electrical needs — new-build circuits and EV readiness on one end, well pumps, shops and panel upgrades on the other. PowerX handles them all.",
      "We serve the entire City and Township of Langley for 24/7 emergencies, panel and service upgrades, EV chargers, rewiring, shop and acreage wiring, and commercial work.",
    ],
    neighbourhoods: ["Willoughby", "Walnut Grove", "Langley City", "Fort Langley", "Murrayville", "Brookswood", "Aldergrove", "Fernridge"],
    localNote:
      "Acreage and shop wiring, well-pump circuits and 200A service upgrades are common in Langley's rural areas, while Willoughby's newer homes often want EV chargers and added circuits.",
    faqs: [
      ["Do you wire shops, barns and acreages in Langley?", "Yes. We wire detached shops, barns and outbuildings, install sub-panels, and handle well-pump and acreage circuits to code."],
      ["Do you serve both Langley City and the Township?", "Yes — we cover the entire Langley area, from Willoughby and Walnut Grove to Fort Langley, Murrayville and Aldergrove."],
    ],
    nearby: ["surrey", "abbotsford", "maple-ridge", "white-rock"],
  },
  {
    slug: "coquitlam",
    city: "Coquitlam",
    metaTitle:
      "Electrician Coquitlam BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician in Coquitlam, BC. 24/7 emergency service, panel upgrades, EV chargers & rewiring. Serving all Coquitlam neighbourhoods. Call 778-823-1575.",
    heroSub:
      "Burke Mountain, Town Centre or Maillardville — PowerX brings licensed, code-compliant electrical service to homes and businesses across Coquitlam.",
    intro: [
      "Coquitlam ranges from the fast-growing slopes of Burke Mountain to the towers of City Centre and the older homes of Maillardville. PowerX serves the whole city — wiring new builds and additions, upgrading panels in established homes, and installing EV chargers as the city electrifies.",
      "We cover all of Coquitlam for 24/7 emergency repairs, panel and service upgrades, EV charging, rewiring, lighting and commercial work, with fast response from our Tri-Cities-adjacent coverage area.",
    ],
    neighbourhoods: ["Burke Mountain", "Coquitlam Town Centre", "Maillardville", "Austin Heights", "Westwood Plateau", "Eagle Ridge", "Como Lake", "River Springs"],
    localNote:
      "Burke Mountain's newer homes frequently add EV chargers and extra circuits, while Maillardville and Austin Heights homes often need panel and wiring upgrades.",
    faqs: [
      ["Do you serve Burke Mountain and Westwood Plateau?", "Yes — we cover all Coquitlam neighbourhoods, including the newer hillside developments on Burke Mountain and Westwood Plateau."],
      ["How fast can you get to Coquitlam in an emergency?", "We aim for a prompt response across Coquitlam and the Tri-Cities; we'll always give you an honest ETA when you call."],
    ],
    nearby: ["port-coquitlam", "port-moody", "burnaby", "new-westminster"],
  },
  {
    slug: "port-coquitlam",
    city: "Port Coquitlam",
    metaTitle:
      "Electrician Port Coquitlam BC | 24/7 Emergency Electrical | PowerX",
    metaDesc:
      "Licensed electrician in Port Coquitlam (PoCo), BC. 24/7 emergency repairs, panel upgrades, EV chargers & rewiring. Fast local response. Call 778-823-1575.",
    heroSub:
      "PowerX delivers licensed electrical service throughout Port Coquitlam — from downtown PoCo to Citadel Heights and the Mary Hill area.",
    intro: [
      "Port Coquitlam is a family-oriented community with a mix of established homes and newer developments. Many PoCo homes are now adding EV chargers, heat pumps and home offices that push older panels to their limit — exactly the upgrades PowerX handles every week.",
      "We serve all of Port Coquitlam for 24/7 emergencies, panel and service upgrades, EV charging, rewiring, lighting and small commercial work, with reliable Tri-Cities response.",
    ],
    neighbourhoods: ["Downtown PoCo", "Citadel Heights", "Mary Hill", "Lincoln Park", "Birchland Manor", "Riverwood", "Oxford Heights"],
    localNote:
      "Panel upgrades and EV charger installs are especially common in Port Coquitlam as established homes take on modern electrical loads.",
    faqs: [
      ["Do you cover all of Port Coquitlam?", "Yes — downtown PoCo, Citadel Heights, Mary Hill, Riverwood and the surrounding neighbourhoods are all within our service area."],
      ["Can you upgrade my PoCo home's panel for an EV charger?", "Yes. We run a load calculation and either add the charger to your existing service or upgrade the panel as needed."],
    ],
    nearby: ["coquitlam", "port-moody", "maple-ridge", "pitt-meadows"],
  },
  {
    slug: "port-moody",
    city: "Port Moody",
    metaTitle:
      "Electrician Port Moody BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician in Port Moody, BC. 24/7 emergency service, panel upgrades, EV chargers, rewiring & condo electrical. Call 778-823-1575.",
    heroSub:
      "From Newport Village condos to Heritage Mountain homes, PowerX provides licensed electrical service across the City of the Arts.",
    intro: [
      "Port Moody combines walkable condo communities around Newport Village and Suter Brook with established homes on Heritage Mountain and College Park. PowerX serves the full range — condo and townhouse electrical, panel upgrades for older homes, and EV charging throughout.",
      "We cover all of Port Moody for 24/7 emergency repairs, electrical upgrades, EV chargers, lighting, rewiring and commercial work.",
    ],
    neighbourhoods: ["Newport Village", "Suter Brook", "Heritage Mountain", "Heritage Woods", "College Park", "Glenayre", "Pleasantside"],
    localNote:
      "Condo and townhouse electrical work and EV charging are common in Port Moody's transit-oriented communities, alongside panel upgrades for hillside homes.",
    faqs: [
      ["Do you do condo and townhouse electrical in Port Moody?", "Yes — we handle suite repairs, upgrades and renovations in Port Moody's condos and townhomes, coordinating with strata where required."],
      ["Can you install EV charging on Heritage Mountain?", "Yes. We assess your panel and routing and install Level 2 charging for Heritage Mountain and Heritage Woods homes."],
    ],
    nearby: ["coquitlam", "port-coquitlam", "burnaby", "north-vancouver"],
  },
  {
    slug: "new-westminster",
    city: "New Westminster",
    metaTitle:
      "Electrician New Westminster BC | 24/7 Emergency Electrical | PowerX",
    metaDesc:
      "Licensed electrician in New Westminster, BC. 24/7 emergency repairs, knob-and-tube rewiring, panel upgrades & EV chargers. Heritage home experts. Call 778-823-1575.",
    heroSub:
      "New West's heritage homes need an electrician who respects them. PowerX rewires, upgrades and repairs the Royal City's character houses and modern condos alike.",
    intro: [
      "As one of BC's oldest cities, New Westminster is full of beautiful heritage homes — many still carrying knob-and-tube or early wiring that needs careful, code-compliant updating. PowerX has the patience and skill to rewire these homes properly, plus the range to handle Quayside condos and Uptown commercial spaces.",
      "We serve all of New Westminster for 24/7 emergencies, knob-and-tube and aluminum rewiring, panel and service upgrades, EV charging and commercial work.",
    ],
    neighbourhoods: ["Uptown", "Downtown / Quayside", "Sapperton", "Queens Park", "West End", "Connaught Heights", "Glenbrooke North", "Brow of the Hill"],
    localNote:
      "Queens Park and other heritage areas are full of pre-war homes where safe knob-and-tube rewiring and panel upgrades are essential — a PowerX specialty.",
    faqs: [
      ["Do you work on heritage homes in Queens Park?", "Yes. We rewire and upgrade New West's heritage homes carefully and to code, minimizing damage to original finishes and documenting the work for insurers."],
      ["Can you replace knob-and-tube wiring in New Westminster?", "Absolutely — it's one of our specialties. We assess, rewire and provide documentation that helps with home insurance."],
    ],
    nearby: ["burnaby", "coquitlam", "surrey", "vancouver"],
  },
  {
    slug: "white-rock",
    city: "White Rock",
    metaTitle:
      "Electrician White Rock BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician in White Rock & South Surrey, BC. 24/7 emergency service, panel upgrades, EV chargers & rewiring. Coastal home experts. Call 778-823-1575.",
    heroSub:
      "By the beach or up the hill, PowerX serves White Rock and the Semiahmoo Peninsula with licensed, salt-air-savvy electrical work.",
    intro: [
      "White Rock's seaside setting is beautiful but hard on electrical systems — salt air corrodes outdoor connections, panels and fixtures faster than inland. PowerX understands coastal homes and uses weather-rated materials and proper practices to make repairs and upgrades that last.",
      "We serve White Rock and the Semiahmoo Peninsula for 24/7 emergencies, panel and service upgrades, EV charging, outdoor and landscape lighting, and rewiring.",
    ],
    neighbourhoods: ["White Rock Beach / Waterfront", "Semiahmoo", "Ocean Park", "Crescent Beach", "Five Corners", "Hillside"],
    localNote:
      "Coastal corrosion means White Rock homes often need weather-rated outdoor wiring, panel replacements and fixture upgrades sooner than inland properties.",
    faqs: [
      ["Does salt air really affect home wiring?", "Yes — coastal salt air accelerates corrosion on outdoor outlets, panels, masts and fixtures. We use weather-rated materials and check vulnerable points on every White Rock job."],
      ["Do you cover Ocean Park and Crescent Beach?", "Yes — we serve White Rock, Ocean Park, Crescent Beach and the whole Semiahmoo Peninsula."],
    ],
    nearby: ["surrey", "delta", "langley", "tsawwassen"],
  },
  {
    slug: "delta",
    city: "Delta",
    metaTitle:
      "Electrician Delta BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician in Delta, BC — Ladner, Tsawwassen & North Delta. 24/7 emergency repairs, panel upgrades, EV chargers & rewiring. Call 778-823-1575.",
    heroSub:
      "North Delta, Ladner or Tsawwassen — PowerX delivers licensed electrical service across all three Delta communities, for homes, farms and businesses.",
    intro: [
      "Delta's three communities each have their own character — suburban North Delta, riverside Ladner and seaside Tsawwassen — and PowerX serves them all. From panel upgrades in established North Delta homes to farm and acreage wiring around Ladner and coastal-grade work in Tsawwassen, we handle the full range.",
      "We cover all of Delta for 24/7 emergencies, panel and service upgrades, EV charging, agricultural and acreage wiring, rewiring and commercial work.",
    ],
    neighbourhoods: ["North Delta", "Ladner", "Tsawwassen", "Sunshine Hills", "Tilbury", "Annieville", "Boundary Bay"],
    localNote:
      "Agricultural and acreage wiring around Ladner, plus coastal-grade work in Tsawwassen and panel upgrades in North Delta, make up much of our Delta work.",
    faqs: [
      ["Do you wire farms and acreages in Ladner?", "Yes. We handle agricultural and acreage wiring, outbuildings, sub-panels and service upgrades around Ladner and rural Delta."],
      ["Do you serve all three Delta communities?", "Yes — North Delta, Ladner and Tsawwassen are all within our service area."],
    ],
    nearby: ["surrey", "tsawwassen", "richmond", "white-rock"],
  },
  {
    slug: "richmond",
    city: "Richmond",
    metaTitle:
      "Electrician Richmond BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician in Richmond, BC. 24/7 emergency service, panel upgrades, EV chargers, rewiring & commercial electrical. Fast response. Call 778-823-1575.",
    heroSub:
      "From Steveston's character homes to Richmond's condos and commercial corridors, PowerX provides licensed electrical service across the island city.",
    intro: [
      "Richmond mixes historic Steveston, dense residential and condo neighbourhoods, and major commercial and industrial corridors. PowerX serves all of it — home upgrades and rewiring, EV charging, condo repairs, and commercial fit-outs and maintenance.",
      "We cover all of Richmond for 24/7 emergencies, panel and service upgrades, EV charger installation, lighting, rewiring and commercial electrical work.",
    ],
    neighbourhoods: ["Steveston", "Brighouse / City Centre", "Broadmoor", "Seafair", "Hamilton", "Thompson", "Terra Nova", "Ironwood"],
    localNote:
      "Richmond's blend of condos and commercial corridors means we do plenty of EV charging, strata electrical and commercial fit-out work alongside home upgrades.",
    faqs: [
      ["Do you do commercial electrical work in Richmond?", "Yes. We serve Richmond's retail, office and light-industrial corridors with fit-outs, service upgrades, lighting retrofits and maintenance."],
      ["Can you install EV charging in Richmond condos?", "Often yes, subject to building capacity and strata approval. We assess feasibility and design load management to suit."],
    ],
    nearby: ["vancouver", "delta", "burnaby", "new-westminster"],
  },
  {
    slug: "north-vancouver",
    city: "North Vancouver",
    metaTitle:
      "Electrician North Vancouver BC | 24/7 Emergency Electrical | PowerX",
    metaDesc:
      "Licensed electrician in North Vancouver, BC. 24/7 emergency repairs, panel upgrades, EV chargers, rewiring & hillside-home wiring. Call 778-823-1575.",
    heroSub:
      "From Lonsdale to the Upper Levels and Deep Cove, PowerX serves North Vancouver's homes and businesses with licensed electrical work.",
    intro: [
      "North Vancouver's mountainside homes, mature trees and frequent winter storms make reliable power and backup systems especially valuable. PowerX serves the North Shore with everything from panel upgrades and EV charging to generator and backup-power installs for outage-prone areas.",
      "We cover North Vancouver — City and District — for 24/7 emergencies, electrical upgrades, EV chargers, rewiring, lighting, generators and commercial work.",
    ],
    neighbourhoods: ["Lower Lonsdale", "Central Lonsdale", "Upper Lonsdale", "Lynn Valley", "Deep Cove", "Edgemont", "Capilano", "Seymour"],
    localNote:
      "Tree cover and winter windstorms make backup generators and storm-damage repairs common on the North Shore, alongside hillside-home panel upgrades and EV charging.",
    faqs: [
      ["Do you install backup generators in North Vancouver?", "Yes. The North Shore sees frequent storm outages, so standby generators and transfer switches are a popular and practical upgrade we install regularly."],
      ["Do you cover Deep Cove and Lynn Valley?", "Yes — we serve both the City and District of North Vancouver, including Deep Cove, Lynn Valley, Edgemont and the Upper Levels."],
    ],
    nearby: ["vancouver", "burnaby", "port-moody", "richmond"],
  },
  {
    slug: "maple-ridge",
    city: "Maple Ridge",
    metaTitle:
      "Electrician Maple Ridge BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician in Maple Ridge, BC. 24/7 emergency service, panel upgrades, EV chargers, acreage & rewiring. Fast response. Call 778-823-1575.",
    heroSub:
      "From Silver Valley's new homes to acreages along the Alouette, PowerX delivers licensed electrical service throughout Maple Ridge.",
    intro: [
      "Maple Ridge stretches from growing residential areas like Silver Valley and Albion to rural acreages along the Alouette and toward the mountains. PowerX handles both worlds — new-home and addition wiring, EV chargers and panel upgrades in town, and shop, well-pump and acreage wiring in the rural areas.",
      "We serve all of Maple Ridge for 24/7 emergencies, panel and service upgrades, EV charging, acreage and shop wiring, rewiring and commercial work.",
    ],
    neighbourhoods: ["Silver Valley", "Albion", "Hammond", "Websters Corners", "Cottonwood", "Whonnock", "Yennadon", "Town Centre"],
    localNote:
      "Acreage and shop wiring, well-pump circuits and backup power are common in rural Maple Ridge, while Silver Valley and Albion's newer homes want EV chargers and extra circuits.",
    faqs: [
      ["Do you wire shops and acreages in Maple Ridge?", "Yes. We wire detached shops, outbuildings and acreages, install sub-panels and handle well-pump and rural circuits to code."],
      ["How fast can you reach Maple Ridge?", "We serve Maple Ridge and Pitt Meadows and will give you an honest ETA when you call — response times depend on the area and time of day."],
    ],
    nearby: ["pitt-meadows", "port-coquitlam", "langley", "coquitlam"],
  },
  {
    slug: "pitt-meadows",
    city: "Pitt Meadows",
    metaTitle:
      "Electrician Pitt Meadows BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician in Pitt Meadows, BC. 24/7 emergency repairs, panel upgrades, EV chargers, farm & acreage wiring. Call 778-823-1575.",
    heroSub:
      "PowerX serves Pitt Meadows — from the town centre to the farms and acreages of the flats — with licensed, code-compliant electrical work.",
    intro: [
      "Pitt Meadows pairs a compact town centre with the wide agricultural flats of Pitt Polder. PowerX serves both — home panel upgrades, EV chargers and rewiring in town, and barn, irrigation, well-pump and acreage wiring out on the farms.",
      "We cover all of Pitt Meadows for 24/7 emergencies, panel and service upgrades, EV charging, agricultural wiring, rewiring and commercial work.",
    ],
    neighbourhoods: ["Town Centre", "Bonson", "South Bonson", "Mid Meadows", "Pitt Polder", "North Meadows"],
    localNote:
      "Agricultural and irrigation wiring, well-pump circuits and 200A upgrades are common out on the Pitt Meadows flats, alongside EV chargers in the newer town-centre homes.",
    faqs: [
      ["Do you handle farm and irrigation wiring in Pitt Meadows?", "Yes. We wire barns, pumps, irrigation and acreage electrical to code, including sub-panels and service upgrades for higher loads."],
      ["Do you also serve Maple Ridge?", "Yes — we cover both Pitt Meadows and neighbouring Maple Ridge."],
    ],
    nearby: ["maple-ridge", "port-coquitlam", "coquitlam", "langley"],
  },
  {
    slug: "abbotsford",
    city: "Abbotsford",
    metaTitle:
      "Electrician Abbotsford BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician serving Abbotsford, BC. 24/7 emergency service, panel upgrades, EV chargers, farm & acreage wiring. Call 778-823-1575.",
    heroSub:
      "PowerX brings licensed electrical service to Abbotsford — from city neighbourhoods to the farms and acreages of the Fraser Valley.",
    intro: [
      "Abbotsford is the Fraser Valley's largest city, with a big mix of urban homes, new developments and extensive farmland. PowerX serves Abbotsford with residential upgrades and EV charging in town, plus the barn, shop, irrigation and acreage wiring that the area's many farms and rural properties depend on.",
      "We cover Abbotsford for 24/7 emergencies, panel and service upgrades, EV charging, agricultural and acreage wiring, rewiring and commercial work.",
    ],
    neighbourhoods: ["Abbotsford City Centre", "Clearbrook", "Sumas Mountain", "McKee", "Bradner", "Matsqui", "Mount Lehman", "Sandy Hill"],
    localNote:
      "Farm and acreage electrical — barns, shops, irrigation and three-phase equipment — is a big part of our Abbotsford work, alongside residential upgrades and EV chargers.",
    faqs: [
      ["Do you do agricultural and three-phase work in Abbotsford?", "Yes. We wire barns, shops and farm equipment, including three-phase installations and service upgrades for higher agricultural loads."],
      ["Do you charge extra to travel to Abbotsford?", "We'll give you a clear, upfront price including any travel before any work begins — no surprises."],
    ],
    nearby: ["langley", "surrey", "maple-ridge", "white-rock"],
  },
  {
    slug: "tsawwassen",
    city: "Tsawwassen",
    metaTitle:
      "Electrician Tsawwassen BC | 24/7 Emergency Electrical | PowerX Electrical",
    metaDesc:
      "Licensed electrician in Tsawwassen, BC. 24/7 emergency repairs, panel upgrades, EV chargers & coastal-home rewiring. Call 778-823-1575.",
    heroSub:
      "PowerX serves Tsawwassen's seaside community with licensed electrical work built to stand up to coastal conditions.",
    intro: [
      "Tsawwassen's sunny, seaside setting comes with salt-air exposure that's tough on outdoor electrical systems, plus a growing community around Tsawwassen Shores and the commercial developments near the ferry. PowerX serves all of it with weather-savvy residential work and capable commercial service.",
      "We cover Tsawwassen for 24/7 emergencies, panel and service upgrades, EV charging, outdoor and landscape lighting, rewiring and commercial work.",
    ],
    neighbourhoods: ["Tsawwassen Beach", "Tsawwassen Shores", "Boundary Bay", "English Bluff", "Pebble Hill", "Cliff Drive"],
    localNote:
      "Coastal corrosion means Tsawwassen homes often need weather-rated outdoor wiring and earlier panel and fixture replacement, much like neighbouring White Rock.",
    faqs: [
      ["Do you use weather-rated materials for coastal homes?", "Yes. In Tsawwassen and other seaside areas we use weather-rated outdoor components and check corrosion-prone points to make repairs that last."],
      ["Do you serve Tsawwassen Shores?", "Yes — we cover Tsawwassen Shores, the beach area and all of Tsawwassen, including new builds and established homes."],
    ],
    nearby: ["delta", "richmond", "white-rock", "surrey"],
  },
];

/* ---------------------------------------------------------------
   NEIGHBOURHOODS — hyper-local pages: /locations/electrician-<slug>.html
   parent = city slug (must exist in LOCATIONS)
--------------------------------------------------------------- */
const NEIGHBOURHOODS = [
  // ---- Surrey ----
  { slug: "newton-surrey", name: "Newton", parent: "surrey", blurb: "Newton is one of Surrey's largest and busiest communities, with a mix of 1980s homes and newer infill that often need panel upgrades and added circuits." },
  { slug: "guildford-surrey", name: "Guildford", parent: "surrey", blurb: "From the established streets around Guildford Town Centre to newer townhome complexes, we handle everything from emergency repairs to EV charger installs." },
  { slug: "fleetwood-surrey", name: "Fleetwood", parent: "surrey", blurb: "Fleetwood's family homes and the growing density along Fraser Highway keep us busy with panel upgrades, rewiring and EV charging." },
  { slug: "cloverdale-surrey", name: "Cloverdale", parent: "surrey", blurb: "Cloverdale blends heritage character homes with new Clayton-area builds, so we see both careful rewiring and modern new-construction circuits." },
  { slug: "south-surrey", name: "South Surrey", parent: "surrey", blurb: "South Surrey's larger and waterfront-adjacent homes often want generators, landscape lighting, hot-tub circuits and 200A service upgrades." },
  { slug: "whalley-surrey", name: "Whalley / City Centre", parent: "surrey", blurb: "Around Surrey City Centre we cover condos, older homes and commercial spaces, from suite repairs to tenant-improvement electrical." },
  { slug: "panorama-ridge-surrey", name: "Panorama Ridge", parent: "surrey", blurb: "Panorama Ridge's larger lots and custom homes frequently call for service upgrades, EV charging and backup power." },
  { slug: "clayton-surrey", name: "Clayton Heights", parent: "surrey", blurb: "Clayton's newer homes are prime candidates for EV chargers, smart lighting and added circuits as families electrify." },
  // ---- Vancouver ----
  { slug: "kitsilano-vancouver", name: "Kitsilano", parent: "vancouver", blurb: "Kitsilano's character homes are full of older wiring; we specialize in safe knob-and-tube rewiring and panel upgrades that satisfy insurers." },
  { slug: "east-vancouver", name: "East Vancouver", parent: "vancouver", blurb: "From Commercial Drive to Hastings-Sunrise, East Van's older housing stock keeps us busy with rewiring, panel upgrades and emergency repairs." },
  { slug: "mount-pleasant-vancouver", name: "Mount Pleasant", parent: "vancouver", blurb: "Mount Pleasant mixes heritage homes with live-work and commercial space, so we handle both careful residential rewiring and small commercial fit-outs." },
  { slug: "dunbar-vancouver", name: "Dunbar", parent: "vancouver", blurb: "Dunbar's established homes often need full rewires, service upgrades and modern lighting while respecting original character." },
  { slug: "downtown-vancouver", name: "Downtown Vancouver", parent: "vancouver", blurb: "In downtown towers and the West End we handle condo suite repairs, upgrades and renovations, coordinating with strata and building management." },
  { slug: "marpole-vancouver", name: "Marpole", parent: "vancouver", blurb: "Marpole's mix of older houses and new development means anything from knob-and-tube rewiring to fresh EV-ready circuits." },
  // ---- Burnaby ----
  { slug: "metrotown-burnaby", name: "Metrotown", parent: "burnaby", blurb: "Around Metrotown's towers we handle condo electrical, EV charging and strata common-area work alongside nearby home upgrades." },
  { slug: "brentwood-burnaby", name: "Brentwood", parent: "burnaby", blurb: "Brentwood's rapid high-rise growth means lots of condo suite work, EV charging and strata electrical, plus upgrades for surrounding homes." },
  { slug: "burnaby-heights", name: "Burnaby Heights", parent: "burnaby", blurb: "The Heights' established homes frequently need panel upgrades, rewiring and modern lighting." },
  { slug: "north-burnaby", name: "North Burnaby", parent: "burnaby", blurb: "North Burnaby near SFU and Capitol Hill keeps us busy with panel upgrades, EV chargers and rental-suite wiring." },
  { slug: "south-burnaby", name: "South Burnaby", parent: "burnaby", blurb: "From Edmonds to Big Bend, South Burnaby's homes and small commercial spaces need everything from rewires to service upgrades." },
  { slug: "edmonds-burnaby", name: "Edmonds", parent: "burnaby", blurb: "The Edmonds area's growing density brings condo, townhome and small-business electrical work." },
  // ---- Langley ----
  { slug: "willoughby-langley", name: "Willoughby", parent: "langley", blurb: "Willoughby's wave of new homes are ideal for EV chargers, smart lighting and added circuits as the area grows fast." },
  { slug: "walnut-grove-langley", name: "Walnut Grove", parent: "langley", blurb: "Walnut Grove's family homes commonly need panel upgrades, EV charging and hot-tub or backup-power circuits." },
  { slug: "fort-langley", name: "Fort Langley", parent: "langley", blurb: "Historic Fort Langley's character homes call for careful rewiring and panel upgrades that preserve their charm." },
  { slug: "brookswood-langley", name: "Brookswood", parent: "langley", blurb: "Brookswood's larger treed lots often need service upgrades, generators and detached-shop wiring." },
  { slug: "aldergrove-langley", name: "Aldergrove", parent: "langley", blurb: "Aldergrove's acreages and rural properties need shop, well-pump and barn wiring along with 200A service upgrades." },
  { slug: "murrayville-langley", name: "Murrayville", parent: "langley", blurb: "Murrayville's established neighbourhoods frequently need panel upgrades, rewiring and EV charging." },
  // ---- Coquitlam ----
  { slug: "burke-mountain-coquitlam", name: "Burke Mountain", parent: "coquitlam", blurb: "Burke Mountain's brand-new homes are prime for EV chargers, smart lighting and extra circuits as families settle in." },
  { slug: "maillardville-coquitlam", name: "Maillardville", parent: "coquitlam", blurb: "Historic Maillardville's older homes often need rewiring, panel upgrades and emergency repairs." },
  { slug: "westwood-plateau-coquitlam", name: "Westwood Plateau", parent: "coquitlam", blurb: "Westwood Plateau's hillside homes commonly want generators, service upgrades, EV charging and backup power." },
  { slug: "coquitlam-town-centre", name: "Coquitlam Town Centre", parent: "coquitlam", blurb: "Around Town Centre's towers we handle condo and strata electrical, EV charging and suite upgrades." },
  { slug: "austin-heights-coquitlam", name: "Austin Heights", parent: "coquitlam", blurb: "Austin Heights' established homes regularly need panel upgrades, rewiring and modern lighting." },
  // ---- Port Coquitlam ----
  { slug: "downtown-port-coquitlam", name: "Downtown PoCo", parent: "port-coquitlam", blurb: "Around downtown PoCo we handle older-home rewiring, panel upgrades and small-business electrical." },
  { slug: "citadel-heights-port-coquitlam", name: "Citadel Heights", parent: "port-coquitlam", blurb: "Citadel Heights' hillside family homes often want EV chargers, service upgrades and backup power." },
  { slug: "mary-hill-port-coquitlam", name: "Mary Hill", parent: "port-coquitlam", blurb: "Mary Hill's established properties commonly need panel upgrades, rewiring and added circuits." },
  { slug: "riverwood-port-coquitlam", name: "Riverwood", parent: "port-coquitlam", blurb: "Riverwood's newer homes are great candidates for EV charging, smart lighting and extra circuits." },
  { slug: "oxford-heights-port-coquitlam", name: "Oxford Heights", parent: "port-coquitlam", blurb: "Oxford Heights homes frequently need emergency repairs, panel upgrades and EV chargers." },
  // ---- Port Moody ----
  { slug: "newport-village-port-moody", name: "Newport Village", parent: "port-moody", blurb: "In walkable Newport Village we handle condo and townhome electrical, EV charging and suite upgrades." },
  { slug: "suter-brook-port-moody", name: "Suter Brook", parent: "port-moody", blurb: "Suter Brook's transit-oriented condos keep us busy with suite repairs, upgrades and strata electrical." },
  { slug: "heritage-mountain-port-moody", name: "Heritage Mountain", parent: "port-moody", blurb: "Heritage Mountain's hillside homes often want generators, EV charging and service upgrades." },
  { slug: "heritage-woods-port-moody", name: "Heritage Woods", parent: "port-moody", blurb: "Heritage Woods' newer homes are prime for EV chargers, smart lighting and added circuits." },
  { slug: "college-park-port-moody", name: "College Park", parent: "port-moody", blurb: "College Park's established homes regularly need panel upgrades, rewiring and modern lighting." },
  // ---- New Westminster ----
  { slug: "queens-park-new-westminster", name: "Queens Park", parent: "new-westminster", blurb: "Queens Park is full of heritage homes where careful knob-and-tube rewiring and panel upgrades are essential." },
  { slug: "sapperton-new-westminster", name: "Sapperton", parent: "new-westminster", blurb: "Sapperton's character homes and clinics need rewiring, panel upgrades and small commercial electrical." },
  { slug: "uptown-new-westminster", name: "Uptown", parent: "new-westminster", blurb: "Uptown New West blends older homes and condos, so we handle rewiring, suite work and upgrades." },
  { slug: "quayside-new-westminster", name: "Quayside / Downtown", parent: "new-westminster", blurb: "Along the Quay we handle condo suite repairs, EV charging and strata electrical." },
  { slug: "west-end-new-westminster", name: "West End", parent: "new-westminster", blurb: "The West End's older homes frequently need full rewires, panel upgrades and emergency repairs." },
  // ---- White Rock ----
  { slug: "white-rock-beach", name: "White Rock Beach", parent: "white-rock", blurb: "Waterfront homes near the beach need weather-rated wiring and earlier panel and fixture replacement from salt air." },
  { slug: "semiahmoo-white-rock", name: "Semiahmoo", parent: "white-rock", blurb: "Semiahmoo's homes often want EV charging, service upgrades and corrosion-resistant outdoor wiring." },
  { slug: "ocean-park-white-rock", name: "Ocean Park", parent: "white-rock", blurb: "Ocean Park's established and treed properties commonly need rewiring, generators and landscape lighting." },
  { slug: "crescent-beach-white-rock", name: "Crescent Beach", parent: "white-rock", blurb: "Crescent Beach's coastal cottages and homes need weather-savvy wiring, panel upgrades and GFCI protection." },
  // ---- Delta ----
  { slug: "north-delta", name: "North Delta", parent: "delta", blurb: "North Delta's suburban homes regularly need panel upgrades, EV chargers and rewiring." },
  { slug: "ladner-delta", name: "Ladner", parent: "delta", blurb: "Riverside Ladner needs everything from character-home rewiring to farm, acreage and outbuilding circuits." },
  { slug: "sunshine-hills-delta", name: "Sunshine Hills", parent: "delta", blurb: "Sunshine Hills' family homes commonly want service upgrades, EV charging and backup power." },
  { slug: "annieville-delta", name: "Annieville", parent: "delta", blurb: "Annieville's established homes frequently need rewiring, panel upgrades and emergency repairs." },
  { slug: "boundary-bay-delta", name: "Boundary Bay", parent: "delta", blurb: "Boundary Bay's seaside properties need weather-rated outdoor wiring and corrosion-aware upgrades." },
  // ---- Richmond ----
  { slug: "steveston-richmond", name: "Steveston", parent: "richmond", blurb: "Historic Steveston's character homes call for careful rewiring and panel upgrades that preserve their charm." },
  { slug: "brighouse-richmond", name: "Brighouse / City Centre", parent: "richmond", blurb: "Around City Centre we handle condo electrical, EV charging and strata common-area work." },
  { slug: "broadmoor-richmond", name: "Broadmoor", parent: "richmond", blurb: "Broadmoor's family homes regularly need panel upgrades, EV chargers and added circuits." },
  { slug: "seafair-richmond", name: "Seafair", parent: "richmond", blurb: "Seafair's established homes often want service upgrades, rewiring and modern lighting." },
  { slug: "terra-nova-richmond", name: "Terra Nova", parent: "richmond", blurb: "Terra Nova's newer homes are prime for EV charging, smart lighting and extra circuits." },
  // ---- North Vancouver ----
  { slug: "lonsdale-north-vancouver", name: "Lonsdale", parent: "north-vancouver", blurb: "From Lower to Central Lonsdale we handle condo suites, older homes and small commercial electrical." },
  { slug: "lynn-valley-north-vancouver", name: "Lynn Valley", parent: "north-vancouver", blurb: "Tree-shaded Lynn Valley sees frequent storm outages, so generators and backup power are popular here." },
  { slug: "deep-cove-north-vancouver", name: "Deep Cove", parent: "north-vancouver", blurb: "Deep Cove's waterfront and hillside homes often want generators, service upgrades and EV charging." },
  { slug: "edgemont-north-vancouver", name: "Edgemont", parent: "north-vancouver", blurb: "Edgemont's established homes regularly need panel upgrades, rewiring and modern lighting." },
  { slug: "seymour-north-vancouver", name: "Seymour", parent: "north-vancouver", blurb: "Seymour-area homes commonly want EV chargers, backup power and service upgrades." },
  // ---- Maple Ridge ----
  { slug: "silver-valley-maple-ridge", name: "Silver Valley", parent: "maple-ridge", blurb: "Silver Valley's new homes are ideal for EV chargers, smart lighting and added circuits." },
  { slug: "albion-maple-ridge", name: "Albion", parent: "maple-ridge", blurb: "Fast-growing Albion keeps us busy with new-home wiring, EV charging and panel upgrades." },
  { slug: "hammond-maple-ridge", name: "Hammond", parent: "maple-ridge", blurb: "Historic Hammond's older homes often need rewiring, panel upgrades and emergency repairs." },
  { slug: "cottonwood-maple-ridge", name: "Cottonwood", parent: "maple-ridge", blurb: "Cottonwood's family homes regularly need service upgrades, EV chargers and backup power." },
  { slug: "websters-corners-maple-ridge", name: "Websters Corners", parent: "maple-ridge", blurb: "Rural Websters Corners needs shop, well-pump and acreage wiring along with 200A upgrades." },
  // ---- Pitt Meadows ----
  { slug: "bonson-pitt-meadows", name: "Bonson", parent: "pitt-meadows", blurb: "Bonson's newer town-centre homes are great for EV chargers, smart lighting and added circuits." },
  { slug: "mid-meadows-pitt-meadows", name: "Mid Meadows", parent: "pitt-meadows", blurb: "Mid Meadows family homes commonly need panel upgrades, EV charging and rewiring." },
  { slug: "north-meadows-pitt-meadows", name: "North Meadows", parent: "pitt-meadows", blurb: "Out toward North Meadows we handle acreage, irrigation and well-pump wiring plus service upgrades." },
  { slug: "pitt-polder-pitt-meadows", name: "Pitt Polder", parent: "pitt-meadows", blurb: "On the Pitt Polder flats, farm, barn and irrigation wiring and 200A upgrades are common work." },
  // ---- Abbotsford ----
  { slug: "clearbrook-abbotsford", name: "Clearbrook", parent: "abbotsford", blurb: "Clearbrook's homes and businesses need rewiring, panel upgrades and small commercial electrical." },
  { slug: "abbotsford-city-centre", name: "Abbotsford City Centre", parent: "abbotsford", blurb: "Around City Centre we handle home upgrades, EV charging and commercial electrical work." },
  { slug: "matsqui-abbotsford", name: "Matsqui", parent: "abbotsford", blurb: "Matsqui's farms and acreages need barn, shop, irrigation and three-phase wiring along with upgrades." },
  { slug: "bradner-abbotsford", name: "Bradner", parent: "abbotsford", blurb: "Rural Bradner relies on us for acreage, well-pump and outbuilding wiring and service upgrades." },
  { slug: "mount-lehman-abbotsford", name: "Mount Lehman", parent: "abbotsford", blurb: "Mount Lehman's rural properties often need shop wiring, generators and 200A service upgrades." },
  // ---- Tsawwassen ----
  { slug: "tsawwassen-beach", name: "Tsawwassen Beach", parent: "tsawwassen", blurb: "Beachfront Tsawwassen homes need weather-rated outdoor wiring and earlier panel and fixture replacement." },
  { slug: "tsawwassen-shores", name: "Tsawwassen Shores", parent: "tsawwassen", blurb: "The growing Tsawwassen Shores community is prime for EV charging, smart lighting and new-home circuits." },
  { slug: "english-bluff-tsawwassen", name: "English Bluff", parent: "tsawwassen", blurb: "English Bluff's established homes often want service upgrades, generators and landscape lighting." },
  { slug: "pebble-hill-tsawwassen", name: "Pebble Hill", parent: "tsawwassen", blurb: "Pebble Hill homes regularly need panel upgrades, EV chargers and corrosion-aware outdoor wiring." },
];

/* ---------------------------------------------------------------
   BLOG — cost / how-to posts: /blog/<slug>.html
   These target informational queries that AI engines cite.
--------------------------------------------------------------- */
const BLOG = [
  {
    slug: "electrical-panel-upgrade-cost-bc",
    title: "How Much Does an Electrical Panel Upgrade Cost in BC? (2026 Guide)",
    metaTitle: "Electrical Panel Upgrade Cost in BC (2026) | PowerX Electrical",
    metaDesc: "What a 100A or 200A electrical panel upgrade costs in BC in 2026, what drives the price, and whether you need one. Honest, local guidance from PowerX Electrical.",
    date: "2026-05-30",
    read: "6 min read",
    summary: "A plain-English breakdown of what panel upgrades cost in the Lower Mainland, the factors that move the price, and how to tell if you actually need one.",
    body: [
      { h: null, p: ["If you're adding a heat pump, EV charger or suite — or your panel is just old — an upgrade is one of the most common electrical projects in the Lower Mainland. Here's how the pricing actually works in 2026, without the sales pitch."] },
      { h: "What affects the price of a panel upgrade", p: ["Several factors determine where your quote lands: whether you're going to 100A or 200A (or 400A), the condition of your meter base and service mast, whether BC Hydro needs to disconnect and reconnect the service, how far the panel is from the meter, and whether old aluminum or knob-and-tube branch wiring needs attention at the same time."] },
      { h: "Panel upgrade vs. service upgrade", p: ["A panel upgrade replaces the breaker box. A full service upgrade increases the actual power feeding your home — the mast, meter base, main disconnect and panel. Adding a suite or several large loads (heat pump + EV + hot tub) often pushes you toward a full service upgrade. We run a load calculation so you only pay for what you actually need."] },
      { h: "Signs you may need an upgrade", p: ["Frequent breaker trips, a fuse box or 60A/100A service, a Federal Pioneer or Zinsco panel, flickering lights when big appliances start, warm panel covers, or simply not enough circuits for modern life are all common triggers. A quick assessment tells you for sure."] },
      { h: "Do permits and inspection add cost?", p: ["Yes — and they're not optional. A legitimate panel or service upgrade in BC is permitted and inspected by Technical Safety BC. We include the permit and inspection in every quote. Beware of any contractor who suggests skipping it; unpermitted work can cause insurance and resale problems later."] },
    ],
    faqs: [
      ["Is a 200A panel worth it over 100A?", "For most homes adding EVs, heat pumps or suites, yes — 200A future-proofs you and is often required for the load. We run a calculation to confirm before recommending it."],
      ["How long does a panel upgrade take?", "Most residential upgrades are completed in a day, with a portion of that on a planned BC Hydro power outage."],
    ],
    related: ["electrical-panel-upgrades", "electrical-service-upgrades"],
  },
  {
    slug: "ev-charger-installation-cost-rebates-bc",
    title: "EV Charger Installation Cost & Rebates in BC (2026)",
    metaTitle: "EV Charger Installation Cost & Rebates in BC (2026) | PowerX Electrical",
    metaDesc: "What a Level 2 home EV charger costs to install in BC, what rebates may be available, and whether your panel can handle one. Local 2026 guidance from PowerX.",
    date: "2026-05-30",
    read: "6 min read",
    summary: "What home EV charger installation really costs in the Lower Mainland, the rebates worth knowing about, and how to find out if your panel can handle a charger.",
    body: [
      { h: null, p: ["A Level 2 home charger adds roughly 30–60 km of range per hour — a huge upgrade over a standard outlet. Here's what installation involves and costs in BC in 2026."] },
      { h: "What drives the install cost", p: ["The main factors are the distance from your panel to the parking spot, whether the charger is hardwired or plug-in (NEMA 14-50), whether your panel has spare capacity or needs load management, and whether a panel or service upgrade is required to support the new load."] },
      { h: "Can your panel handle a charger?", p: ["Many homes can add a Level 2 charger to an existing 100A service, especially with a load-management device that prevents overload. Others need a panel or service upgrade first. A quick load calculation answers this before you buy hardware."] },
      { h: "Rebates worth knowing about", p: ["BC and federal programs have periodically offered rebates for home, strata and workplace EV charging. Program details and funding change, so confirm current offers — but installing to the standard these programs require keeps you eligible. We install to that standard and help with the paperwork."] },
      { h: "Permits matter", p: ["A Level 2 charger is permitted electrical work in BC. A permitted, inspected install protects your insurance and your home. We handle the permit as part of the job."] },
    ],
    faqs: [
      ["Hardwired or plug-in charger — which is better?", "Both work well. Hardwired is cleaner and supports higher amperage; a NEMA 14-50 plug offers flexibility. We'll recommend based on your charger and panel."],
      ["Do I need a 200A panel for an EV charger?", "Not always. Many homes add a charger on 100A with load management. We run a calculation first."],
    ],
    related: ["ev-charger-installation", "electrical-panel-upgrades"],
  },
  {
    slug: "signs-you-need-emergency-electrician",
    title: "7 Signs You Need an Emergency Electrician (Don't Wait)",
    metaTitle: "7 Signs You Need an Emergency Electrician | PowerX Electrical",
    metaDesc: "Burning smells, sparking outlets, repeated breaker trips — here are 7 electrical warning signs that mean you should call an emergency electrician right away.",
    date: "2026-05-30",
    read: "5 min read",
    summary: "Some electrical problems can wait for a regular appointment. These seven can't — here's how to tell the difference and what to do right now.",
    body: [
      { h: null, p: ["Most electrical issues are routine. A few are genuine hazards that need a licensed electrician immediately. Here are the warning signs we tell every homeowner not to ignore."] },
      { h: "1. A burning smell or hot outlets", p: ["A fishy or burning plastic smell near outlets or the panel means something is overheating. Stop using the circuit and call right away — this is a fire risk."] },
      { h: "2. Sparking or buzzing", p: ["Sparks from an outlet, switch or panel, or a buzzing sound from the panel, point to loose connections or arcing. Both can start fires."] },
      { h: "3. Repeated breaker trips", p: ["A breaker that trips once is doing its job. One that trips repeatedly is warning you about an overload or fault that needs diagnosis."] },
      { h: "4. Partial or full power loss", p: ["If part of your home loses power and it isn't a tripped breaker you can reset, something has failed in the wiring or panel."] },
      { h: "5. Warm or discoloured switch plates", p: ["Switch or outlet covers that feel warm or look scorched indicate dangerous heat behind the wall."] },
      { h: "6. Storm or water damage to electrical", p: ["Flooding, a fallen line, or water near your panel is an emergency. Keep clear and call — don't touch wet electrical equipment."] },
      { h: "7. Frequent shocks from outlets or appliances", p: ["Any tingle or shock when touching switches or appliances signals a grounding or wiring fault that needs immediate attention."] },
      { h: "What to do right now", p: ["If it's safe, switch off the affected circuit or the main breaker, then call 778-823-1575. If you see flames or smell gas, call 911 first. PowerX runs a true 24/7 emergency line across the Lower Mainland."] },
    ],
    faqs: [
      ["Should I turn off my main breaker in an emergency?", "If you can reach it safely and there's overheating, sparking or a burning smell, yes — then call us. If there's fire or gas, call 911 first."],
      ["Do you really answer 24/7?", "Yes. Our emergency line is answered by licensed electricians day or night, every day of the year."],
    ],
    related: ["emergency-electrician", "electrical-panel-upgrades"],
  },
  {
    slug: "knob-and-tube-wiring-guide",
    title: "Knob-and-Tube Wiring: What Lower Mainland Homeowners Need to Know",
    metaTitle: "Knob-and-Tube Wiring Guide (BC Homes) | PowerX Electrical",
    metaDesc: "Is knob-and-tube wiring safe? Will it affect your insurance? A clear guide for Vancouver, New West & Lower Mainland homeowners, from licensed electricians.",
    date: "2026-05-30",
    read: "6 min read",
    summary: "If you own an older home in Vancouver, New Westminster or anywhere with pre-1950s housing, here's what knob-and-tube wiring means for safety, insurance and your options.",
    body: [
      { h: null, p: ["Knob-and-tube (K&T) was standard in homes built before about 1950 and is still found across Vancouver, New Westminster and other older Lower Mainland neighbourhoods. Here's an honest look at the risks and your options."] },
      { h: "Is knob-and-tube dangerous?", p: ["K&T isn't automatically unsafe, but it has real limitations: no ground wire, brittle insulation that degrades with age, and danger when buried in modern insulation, which traps heat. Decades of modifications by previous owners are often where problems hide."] },
      { h: "The insurance problem", p: ["Many BC insurers won't write or renew policies on homes with active knob-and-tube, or they charge more and require an electrician's report. This is the most common reason homeowners call us about it."] },
      { h: "Your options", p: ["Depending on how much active K&T remains, the fix ranges from removing and replacing specific circuits to a full rewire. We assess what's actually live, prioritize the riskiest areas, and give you honest options — not a blanket scare-tactic quote."] },
      { h: "Rewiring without wrecking your home", p: ["Experienced electricians can fish much new wiring through existing wall cavities, attics and crawlspaces, keeping drywall damage to a minimum. We'll explain what's realistic for your specific home before we start."] },
    ],
    faqs: [
      ["Do I have to replace all knob-and-tube at once?", "Not necessarily. We assess what's still live and can phase the work, prioritizing the highest-risk circuits first."],
      ["Will rewiring help my insurance?", "Often yes. Replacing active K&T and providing documentation typically makes coverage easier — confirm specifics with your insurer."],
    ],
    related: ["home-rewiring", "aluminum-wiring-replacement"],
  },
  {
    slug: "electrician-cost-lower-mainland",
    title: "How Much Does an Electrician Cost in the Lower Mainland? (2026)",
    metaTitle: "How Much Does an Electrician Cost in BC's Lower Mainland? (2026) | PowerX",
    metaDesc: "What electricians charge in Surrey, Vancouver & the Lower Mainland in 2026 — service calls, hourly vs flat rate, and why upfront pricing protects you. From PowerX.",
    date: "2026-05-30",
    read: "5 min read",
    summary: "A transparent look at how electricians price work in the Lower Mainland, the difference between a service call and a full project, and how to avoid surprise bills.",
    body: [
      { h: null, p: ["\"How much will this cost?\" is the first question every homeowner asks. Here's an honest overview of how electrical pricing works in the Lower Mainland in 2026."] },
      { h: "Service calls vs. project quotes", p: ["Smaller jobs are usually priced as a service call — a set fee to come out, diagnose and handle minor work. Larger projects (panel upgrades, rewiring, EV chargers) are quoted as fixed prices after an assessment, so you know the full cost before work begins."] },
      { h: "Why we quote before we start", p: ["Open-ended hourly billing is where surprise bills come from. PowerX gives you a clear, upfront price before any work begins — including for emergencies — so there are no end-of-job shocks. The price you approve is the price you pay."] },
      { h: "What affects your price", p: ["Scope and materials, the age and condition of your existing wiring, whether permits and inspection are required, panel capacity, and access all affect the number. We explain what's driving the quote so it makes sense."] },
      { h: "The cheapest quote isn't always cheapest", p: ["Unlicensed or unpermitted work can fail inspection, void insurance, or need redoing — costing more in the end. Always confirm your electrician is licensed and insured in BC and pulls the proper permits. We do, on every job."] },
    ],
    faqs: [
      ["Do you charge more for nights and weekends?", "You always get a clear, upfront price before work begins. We don't dramatically inflate emergency rates the way some companies do."],
      ["Are estimates free?", "Yes — we provide free written estimates for non-emergency work. For emergencies, you get a clear on-site price before we start."],
    ],
    related: ["emergency-electrician", "electrical-panel-upgrades"],
  },
];

/* Existing hand-written posts, listed in the blog hub (files not regenerated). */
const EXISTING_BLOG = [
  { slug: "when-to-upgrade-your-electrical-panel", title: "5 Warning Signs Your Electrical Panel Needs an Upgrade", summary: "Frequent breaker trips, flickering lights and warm panels are warning signs your electrical panel may need upgrading.", date: "2026-05-24", read: "4 min read" },
  { slug: "what-to-do-when-power-goes-out", title: "What to Do When the Power Goes Out", summary: "A calm, step-by-step guide to staying safe and getting power back when the lights go out.", date: "2026-05-24", read: "4 min read" },
  { slug: "smart-home-wiring-value", title: "Does Smart Home Wiring Add Value?", summary: "How modern wiring, smart switches and EV readiness can boost comfort and resale value.", date: "2026-05-24", read: "4 min read" },
];

module.exports = { SITE, SERVICES, LOCATIONS, COMBO_SERVICE_SLUGS, NEIGHBOURHOODS, BLOG, EXISTING_BLOG };
