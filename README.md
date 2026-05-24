# PowerX Electrical Ltd — Modern Professional Website

A fast, clean, trustworthy single-page website for PowerX Electrical Ltd (Surrey, BC), built with **HTML + Tailwind CSS (via Vite)**.

**Strong emphasis on 24/7 Emergency Services** while presenting the full range of residential and commercial electrical work across the Lower Mainland.

## ✅ Live Preview

```bash
npm run dev
```

Then open http://localhost:5173

## Key Features

- **Professional dark navy + electric blue** color scheme with emergency red CTAs
- Fully responsive (excellent mobile experience)
- Prominent 24/7 emergency positioning with big phone numbers and floating CTA
- All required sections: Hero, Why Choose Us, Services, Emergency Services, Areas We Serve, Contact
- Real company data (phone, address, email, service areas, promises)
- Simple validated contact form (success modal — ready for Netlify / Formspree)
- Google Maps embed
- FAQ accordion
- Testimonials (placeholder — easy to swap with real reviews)
- Clean, semantic HTML + excellent accessibility basics
- Fast build with Vite + Tailwind 4 (tiny production CSS)

## Tech Stack

- Vite (dev server + production build)
- Tailwind CSS 4 (via official `@tailwindcss/vite` plugin)
- Vanilla TypeScript / JavaScript (minimal)
- No heavy frameworks — easy for anyone to maintain

## Project Structure

```
powerx-website/
├── index.html          # The complete website (main deliverable)
├── src/
│   ├── style.css       # Tailwind + custom professional theme
│   └── main.ts         # Minimal entry (CSS import)
├── vite.config.ts
├── package.json
├── README.md
└── public/             # Static assets (favicon, etc.)
```

## Customization Guide

### Change Phone / Address / Email
Search in `index.html` for:
- `778-823-1575`
- `12491 68 Avenue, Surrey, BC V3W 2C9`
- `electricalpowerx@gmail.com`

### Update Colors
All brand colors are defined at the top of `src/style.css` under `:root` (CSS variables). Change them once and they cascade.

### Replace Stock Images
Current images use high-quality Unsplash links. Replace the `src` attributes with your own professional photos (truck, team, panel work, etc.). Recommended sizes: 1200–2000px wide.

### Form Integration (Production)
The form currently shows a success modal. To actually receive submissions:

**Option A – Netlify (recommended)**
1. Deploy to Netlify
2. Add `netlify` attribute to the `<form>` tag
3. Done — submissions appear in the Netlify dashboard

**Option B – Formspree / Web3Forms**
1. Create a form endpoint
2. Change the form `action` and method

### Add Real Testimonials
Replace the four testimonial blocks in the Testimonials section with verified reviews. Keep the 5-star rating format.

## Deployment (Production)

### Recommended: Netlify (Free + Forms)

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

Netlify will automatically give you HTTPS + a custom domain option.

**Alternative hosts:**
- Vercel (excellent DX)
- Cloudflare Pages
- GitHub Pages (requires minor adjustments for forms)

## Development Commands

```bash
npm run dev      # Start local dev server (with HMR)
npm run build    # Production build → /dist folder
npm run preview  # Preview the production build locally
```

## Notes for Future Updates

- Real photos & team headshots can be added easily (just swap `<img>` sources)
- Testimonials can be upgraded with actual review text + photos
- A simple "Gallery" or "Recent Projects" section can be added later
- Online booking or live chat can be layered on top without major refactoring

## Credits

Built for **PowerX Electrical Ltd** following a detailed professional plan.

All content, phone numbers, address, and service promises are based on publicly available information for the company. Please verify and update any details before going live.

---

**Questions?** Contact the developer who built this site or reach out directly to PowerX at 778-823-1575.

Ready for launch. 🚀
