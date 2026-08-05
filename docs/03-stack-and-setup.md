# Medelis Healthcare — Stack, Environment & Preview Setup

**Version:** 1.0
**Last updated:** 5 August 2026
**Audience:** whoever runs Claude Code on this repo, plus DPS for infra.

Companion documents: [`01-context.md`](01-context.md), [`02-design-system.md`](02-design-system.md).

---

## 1. Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router), TypeScript | Server components, image optimisation, per-route metadata, first-class Vercel previews |
| Styling | Tailwind CSS v4 | CSS-first `@theme` config means design tokens live in one CSS file and are readable from plain CSS, SVG and JS without a sync script |
| Smooth scroll | Lenis | Our house standard. `lerp: 0.09` for this project |
| Animation | GSAP + ScrollTrigger | Scroll reveals, cycle-strip draw, stat count-ups |
| Icons | Lucide React | 1.5px stroke matches the design system |
| Forms | React Hook Form + Zod | Shared schema between client and server validation |
| Spam | Cloudflare Turnstile | Free, fast, less hostile than reCAPTCHA. Satisfies the doc's "CAPTCHA protection" |
| Email | Resend | Notification + autoresponder. Simple API, good deliverability |
| Hosting | Vercel | Preview deployments per branch, which is the client-review requirement |
| Analytics | Plausible or GA4 | Client's call. Plausible if they have no existing GA property |

### CMS — open decision, close it before scaffolding

| Option | For | Against |
|---|---|---|
| **Payload CMS** (self-hosted, same repo) | Best admin UX, type-safe, models the 14 modules cleanly, no second deployment | Client's team has never seen it; Microlent carries all support |
| **WordPress headless** (WPGraphQL) | Client familiarity, easy handover, DPS's team knows it | Two deployments, two hosting bills, slower, admin UI needs taming |
| **Sanity / Contentful** | Zero ops | Per-seat cost, and the client will resent a monthly SaaS line item |

**Recommendation:** Payload if Microlent retains the maintenance contract, headless WordPress if the client takes over. Ask Meena which it is before writing a single content model.

Until it is decided, build against **local MDX/JSON content files** in `/content` with a thin data layer in `/lib/content`. Every component reads from that layer, never from a CMS SDK directly. Swapping the source later is then a single file change instead of a refactor.

---

## 2. Scaffold

```bash
npx create-next-app@latest medelis-web \
  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd medelis-web

npm i lenis gsap lucide-react clsx tailwind-merge \
      react-hook-form zod @hookform/resolvers resend \
      @marsidev/react-turnstile

npm i -D prettier prettier-plugin-tailwindcss sharp @next/bundle-analyzer
```

### Folder structure

```
src/
  app/
    (site)/
      page.tsx                      home
      about/page.tsx
      services/page.tsx
      services/[slug]/page.tsx
      industries/page.tsx
      industries/[slug]/page.tsx
      quality/page.tsx
      facility/page.tsx
      resources/page.tsx
      consultation/page.tsx
      insights/page.tsx
      insights/[slug]/page.tsx
      faq/page.tsx
      contact/page.tsx
      request-a-quote/page.tsx
      thank-you/[form]/page.tsx
      layout.tsx
    api/
      quote/route.ts
      contact/route.ts
      consultation/route.ts
      resource/route.ts
    robots.ts
    sitemap.ts
    globals.css
  components/
    layout/        Header Footer Container Section MobileNav
    ui/            Button Card Input Select Textarea Badge Accordion Stat
    brand/         Logo CycleStrip CertificationCard
    sections/      Hero CredibilityStrip ServicesGrid HowItWorks QualityBlock
                   IndustriesGrid FacilityStats LogoWall Testimonials
                   InsightsPreview FaqSection QuoteCta
    motion/        SmoothScroll Reveal StaggerGroup CountUp
    forms/         QuoteForm ContactForm ConsultationForm ResourceGate
  content/         services/ industries/ insights/ faqs/ certifications/
  lib/
    content/       loaders, types
    schemas/       zod schemas shared client + server
    email/         templates
    utils.ts       cn(), formatters
  styles/
public/
  placeholder/     see §5 — deleted before launch
  brand/
middleware.ts      preview auth, see §6
```

---

## 3. Design tokens in Tailwind v4

All tokens live in `src/app/globals.css`. There is no `tailwind.config.js` in v4 — theme values are declared with `@theme` and become both Tailwind utilities and plain CSS variables at once. That is exactly what we want: the same `--color-indigo-700` is available to a Tailwind class, a raw CSS rule, and an inline SVG fill.

```css
@import "tailwindcss";

@theme {
  /* ---- Indigo (anchor) ---- */
  --color-indigo-50:  #F0F1F8;
  --color-indigo-100: #DDDFEF;
  --color-indigo-200: #B9BDDC;
  --color-indigo-300: #8E94C3;
  --color-indigo-400: #6169A5;
  --color-indigo-500: #3C4589;
  --color-indigo-600: #2B3475;
  --color-indigo-700: #232A6B;
  --color-indigo-800: #1A2052;
  --color-indigo-900: #12163A;
  --color-indigo-950: #0A0C21;

  /* ---- Teal (primary accent) ---- */
  --color-teal-50:  #EAF7F4;
  --color-teal-100: #CBEDE5;
  --color-teal-200: #98DBCC;
  --color-teal-300: #5FC4AF;
  --color-teal-400: #2BA891;
  --color-teal-500: #0E8F7A;
  --color-teal-600: #0C7867;
  --color-teal-700: #0B6053;
  --color-teal-800: #0A4C43;
  --color-teal-900: #093E37;

  /* ---- Orange (restricted accent) ---- */
  --color-orange-50:  #FEF4EA;
  --color-orange-100: #FDE4CA;
  --color-orange-300: #F9A65B;
  --color-orange-500: #F58220;
  --color-orange-600: #DC6A0E;
  --color-orange-700: #B5510B;
  --color-orange-900: #743612;

  /* ---- Slate (neutral) ---- */
  --color-slate-25:  #FBFCFD;
  --color-slate-50:  #F5F7FA;
  --color-slate-100: #EDF0F5;
  --color-slate-200: #DDE2EB;
  --color-slate-300: #C2CAD8;
  --color-slate-400: #93A0B4;
  --color-slate-500: #6B7A91;
  --color-slate-600: #4E5B70;
  --color-slate-700: #3A4557;
  --color-slate-800: #262E3C;
  --color-slate-900: #161C26;
  --color-slate-950: #0B0E14;

  /* ---- Type ---- */
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace;

  --text-display:   clamp(2.5rem, 1.6rem + 3.8vw, 4.25rem);
  --text-h1:        clamp(2.125rem, 1.6rem + 2.2vw, 3.25rem);
  --text-h2:        clamp(1.75rem, 1.5rem + 1.05vw, 2.375rem);
  --text-h3:        clamp(1.375rem, 1.28rem + 0.4vw, 1.625rem);
  --text-h4:        clamp(1.125rem, 1.08rem + 0.2vw, 1.25rem);
  --text-lead:      clamp(1.125rem, 1.05rem + 0.32vw, 1.3125rem);
  --text-body:      clamp(1rem, 0.98rem + 0.09vw, 1.0625rem);
  --text-stat:      clamp(2.25rem, 1.7rem + 2.3vw, 3.25rem);

  /* ---- Space ---- */
  --spacing-section:    clamp(4.5rem, 3rem + 6.4vw, 8rem);
  --spacing-section-lg: clamp(6rem, 4rem + 8.5vw, 10rem);

  /* ---- Radius ---- */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* ---- Motion ---- */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}

/* Semantic aliases — components reference these, never raw ramp values */
:root {
  --surface-page:         var(--color-white);
  --surface-raised:       var(--color-slate-50);
  --surface-inverse:      var(--color-indigo-700);
  --surface-inverse-deep: var(--color-indigo-900);

  --text-primary:   var(--color-slate-900);
  --text-body-c:    var(--color-slate-800);
  --text-secondary: var(--color-slate-600);
  --text-muted:     var(--color-slate-500);
  --text-link:      var(--color-teal-700);

  --border-hairline: var(--color-slate-200);
  --border-strong:   var(--color-slate-300);
  --border-focus:    var(--color-teal-600);

  --accent-marker: var(--color-orange-500);
}

@layer base {
  html { -webkit-text-size-adjust: 100%; }
  body {
    background: var(--surface-page);
    color: var(--text-body-c);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  .font-mono, code, kbd { font-variant-numeric: tabular-nums; }
  :focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }
  ::selection { background: var(--color-teal-100); color: var(--color-teal-900); }
}
```

> `--text-muted` resolves to `slate-500`, which fails AA as small text. See [`02-design-system.md`](02-design-system.md) §3.5 — resolve that before this CSS is written, or the token ships broken. Same for the placeholder colour in §6 of the design system.

### Fonts

Self-host via `next/font` — no external request, no layout shift, no Google Fonts privacy question from an enterprise client.

```ts
// src/app/layout.tsx
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

`npm i geist`. The package exposes `--font-geist-sans` and `--font-geist-mono`, which the `@theme` block above already references.

---

## 4. Motion setup

### 4.1 Lenis + GSAP provider

One provider, mounted once in the site layout. Lenis drives nothing on its own — GSAP's ticker drives Lenis, so there is a single RAF loop and ScrollTrigger never desyncs.

```tsx
// src/components/motion/SmoothScroll.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      autoRaf: false,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [pathname]);

  return <>{children}</>;
}
```

Two things that bite in App Router and are handled above: `autoRaf: false` (otherwise Lenis and GSAP run competing loops), and `ScrollTrigger.refresh()` on route change (otherwise trigger positions are stale after client-side navigation).

### 4.2 Reveal wrapper

```tsx
// src/components/motion/Reveal.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  as?: React.ElementType;
  className?: string;
};

export default function Reveal({
  children, delay = 0, y = 24, as: Tag = "div", className,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1, y: 0, duration: 0.6, delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
```

Wrap children in `<StaggerGroup>` for lists — it maps a 60ms increment onto its children's `delay`, capped at six before the rest reveal together.

> This component hides its content with an inline `opacity: 0` that only JavaScript removes. See §11 item 4 before shipping it.

### 4.3 Global reduced-motion fallback

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

The JS guards in the components above matter more than this CSS, because GSAP writes inline styles that CSS cannot override. Both layers are needed.

### 4.4 The cycle strip

Single component, three variants (`hero` | `process` | `divider`), built as inline SVG so the stroke can be animated and the tick positions can be data-driven.

- Draw-on: `stroke-dasharray` set to path length, `stroke-dashoffset` animated to 0 over 1200ms `ease-out`. Fires once on mount, hero only.
- Process variant: the orange marker's `x` is scrubbed to `ScrollTrigger` progress across the section, `scrub: 0.5`.
- Divider variant: static, no animation, `slate-200` stroke, no labels.

Tick positions come from a `stages` prop — an array of `{ label, duration }` — so the strip is proportional to real cycle times. Get the real numbers from the client; until then use the placeholder values in the design system doc and mark them clearly as placeholder in review.

---

## 5. Placeholder imagery — Unsplash

Real facility photography is not going to exist before the first client review. Placeholders are needed, and they need to be handled carefully because in *this* sector a wrong image is a legal and reputational problem, not just an aesthetic one.

### 5.1 Rules

1. **Never imply a placeholder is Medelis's facility.** An Unsplash photo of someone else's cleanroom, captioned "our facility", is misrepresentation. Every placeholder gets a visible `PLACEHOLDER` ribbon in the preview build (see §5.4).
2. **No identifiable faces** in anything that could read as Medelis staff or Medelis clients.
3. **No visible third-party branding** — other companies' logos on equipment, packaging, or signage.
4. **Every placeholder is deleted before launch.** If the client has not supplied a real image for a slot by then, the section gets redesigned to not need one, not shipped with stock.
5. Unsplash's licence permits free commercial use without attribution, but it does not permit using a photo in a way that implies the photographer or subject endorses Medelis. Rules 1–3 keep us clear of that.

### 5.2 Realistic expectation

Unsplash has very little genuine EtO sterilization imagery. Searching "sterilization" mostly returns dental autoclaves and hand sanitiser. Plan to build the preview around **adjacent industrial and laboratory imagery** plus the diagram-led sections, rather than pretending to have facility photos.

Search terms that actually return usable results:

| Slot | Search terms |
|---|---|
| Hero | `industrial facility interior`, `stainless steel industrial`, `clean industrial corridor` |
| Facility | `cleanroom`, `laboratory equipment`, `industrial machinery detail`, `factory floor wide` |
| Process steps | `warehouse pallet`, `packaging line`, `conveyor industrial`, `barcode scanning warehouse` |
| Quality | `clipboard checklist industrial`, `technical documents desk`, `microscope laboratory` |
| Consultation | `engineering meeting table`, `technical drawing desk` |
| Insights / blog | `abstract industrial texture`, `blueprint detail`, `laboratory glassware` |

Backups when Unsplash is thin: **Pexels** (same permissive licence) and **Openverse** for CC-licensed scientific imagery. Do not use Google Images results, ever.

### 5.3 Sourcing workflow

Hand-pick rather than pulling random images at runtime. `source.unsplash.com` is retired, and a random image on a client-review URL is a liability — you cannot control what appears when Meena opens the link in front of the client.

```
public/placeholder/
  hero-facility.jpg
  process-01-intake.jpg
  ...
  MANIFEST.json
```

`MANIFEST.json` records provenance so every file can be traced and purged:

```json
[
  {
    "file": "hero-facility.jpg",
    "slot": "home.hero",
    "source": "unsplash",
    "url": "https://unsplash.com/photos/xxxxxxxx",
    "photographer": "Name",
    "licence": "Unsplash License",
    "addedBy": "Nishant",
    "addedOn": "2026-08-08",
    "replacementNeeded": true
  }
]
```

Optimise on the way in with `scripts/optimise-placeholders.mjs` — a real module file, not a shell one-liner, so the template literals are not fighting shell escaping:

```js
// scripts/optimise-placeholders.mjs — node scripts/optimise-placeholders.mjs
import sharp from "sharp";
import fs from "node:fs";

const dir = "public/placeholder";

for (const f of fs.readdirSync(dir).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const base = f.replace(/\.(jpe?g|png)$/i, "");
  const resize = { width: 2000, withoutEnlargement: true };

  await sharp(`${dir}/${f}`).resize(resize).avif({ quality: 55 }).toFile(`${dir}/${base}.avif`);
  await sharp(`${dir}/${f}`).resize(resize).webp({ quality: 72 }).toFile(`${dir}/${base}.webp`);

  console.log("optimised", base);
}
```

Then serve through `next/image`, which handles responsive sizes and lazy loading. Above-the-fold hero image gets `priority`.

### 5.4 Placeholder ribbon

```tsx
// src/components/ui/PlaceholderImage.tsx
import Image from "next/image";

export default function PlaceholderImage({ src, alt, ...rest }: Props) {
  const isPreview = process.env.NEXT_PUBLIC_SITE_ENV !== "production";
  return (
    <div className="relative">
      <Image src={src} alt={alt} {...rest} />
      {isPreview && (
        <span className="absolute left-3 top-3 rounded-sm bg-orange-700 px-2 py-1
                         font-mono text-[11px] uppercase tracking-widest text-white">
          Placeholder
        </span>
      )}
    </div>
  );
}
```

The ribbon disappears in production automatically — which also means a missed placeholder ships silently. Add a pre-launch check: `grep -r "/placeholder/" src/` must return nothing before the production build.

### 5.5 Duotone treatment

Per design system §7, placeholders and real photos both get the same grade so the preview looks like a designed system rather than a stock collage:

```css
.img-grade {
  filter: saturate(0.4) contrast(1.05);
}
.img-grade::after {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--color-indigo-900);
  opacity: 0.12;
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

Applied as a wrapper class, not baked into the asset, so it can be tuned in one place when the real photography arrives.

---

## 6. Previewable link for client review

This is a hard requirement, so it gets set up in week one, not the day before the first review.

### 6.1 Branch and URL model

| Branch | Deploys to | Purpose |
|---|---|---|
| `main` | production domain | Live. Nothing merges here without client sign-off |
| `staging` | `medelis-preview.vercel.app` (stable alias) | **The client-facing review URL.** Never changes, so it can be bookmarked |
| `feat/*` | auto preview URL | Internal review only. Never sent to the client |

Give `staging` a stable alias in Vercel → Settings → Domains. Sending the client a new hashed URL every time is how review threads get lost.

If Microlent wants it on our own domain, point `medelis.microlent.dev` (or a subdomain of the client's eventual domain) at the staging deployment via CNAME.

### 6.2 Password protection — do not skip this

Vercel's built-in Deployment Protection is a paid-plan feature. Whether or not the account has it, ship our own Basic Auth in middleware — it works on every plan, is one file, and gives a credential we can hand to the client.

```ts
// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|brand/).*)"],
};

export function middleware(req: NextRequest) {
  if (process.env.PREVIEW_PROTECT !== "true") return NextResponse.next();

  const header = req.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    const decoded = atob(header.slice(6));
    const idx = decoded.indexOf(":");
    const user = decoded.slice(0, idx);
    const pass = decoded.slice(idx + 1);
    if (user === process.env.PREVIEW_USER && pass === process.env.PREVIEW_PASS) {
      const res = NextResponse.next();
      res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
      return res;
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Medelis preview"' },
  });
}
```

`PREVIEW_PROTECT` is `true` on staging and every preview branch, and unset on production.

> This gate protects the preview. It does **not** keep `/_ds` off production — see §11 item 1, which needs an extra guard in this same file.

### 6.3 Keep the preview out of search

An indexed staging site competing with the client's eventual production domain is a genuine SEO problem, and it is trivially avoidable.

```ts
// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NEXT_PUBLIC_SITE_ENV === "production";
  return isProd
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
```

Plus the `X-Robots-Tag` header in the middleware above, and `metadata.robots = { index: false }` in the root layout when not production. Three layers, because losing this one is expensive to undo.

### 6.4 Review workflow

1. Push to `staging`.
2. Vercel builds; check the deployment is green and the alias resolves.
3. Run the pre-share checklist below.
4. Send the client the stable URL plus credentials, with a short note listing what changed and **what is still placeholder**. Being explicit about placeholders prevents the "why is there a photo of someone else's factory" conversation.
5. Collect feedback in one place — a shared doc or Linear, not WhatsApp voice notes.

**Pre-share checklist**

- [ ] Builds clean, no console errors on any page
- [ ] Every placeholder image carries the ribbon
- [ ] No lorem ipsum anywhere client-visible
- [ ] Forms submit and the thank-you page renders (point notifications at an internal inbox, not the client's)
- [ ] Mobile checked on a real phone, not just responsive mode
- [ ] Reduced-motion path checked
- [ ] Lighthouse mobile ≥ 90 performance, 100 accessibility
- [ ] Preview auth actually prompts in an incognito window

Note the accessibility target is unreachable until [`02-design-system.md`](02-design-system.md) §3.5 is resolved — Lighthouse flags `slate-500` captions at 4.36:1. Fix the tokens or expect a red audit.

### 6.5 Environment variables

```bash
# .env.local / Vercel project settings
NEXT_PUBLIC_SITE_ENV=preview          # preview | production
NEXT_PUBLIC_SITE_URL=https://medelis-preview.vercel.app

PREVIEW_PROTECT=true
PREVIEW_USER=medelis
PREVIEW_PASS=                         # generate, do not reuse anything

SITE_ENV=preview                      # server-only mirror, see §11 item 1

RESEND_API_KEY=
ENQUIRY_TO_EMAIL=                     # internal inbox until launch
ENQUIRY_FROM_EMAIL=

NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=

NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_GA_ID=                    # production only
```

Commit a `.env.example` with the keys and no values. Never commit `.env.local`.

---

## 7. Forms and API routes

Each route follows the same shape:

1. Parse with the shared Zod schema from `lib/schemas` — the same schema the client form uses, so validation cannot drift.
2. Verify the Turnstile token server-side against Cloudflare's `siteverify` endpoint.
3. Check the honeypot field is empty.
4. Rate limit by IP (in-memory is fine pre-launch; Upstash Redis if abuse appears).
5. Persist the submission.
6. Send the notification email and the autoresponder.
7. Return `{ ok: true }`; the client redirects to `/thank-you/[form]`.

Never trust `NEXT_PUBLIC_` values server-side. The file upload on the quote form needs a real size and MIME check on the server — a client-side `accept` attribute is decoration.

---

## 8. Performance budget

Enforced, not aspirational. Check at each preview share.

| Metric | Target |
|---|---|
| LCP (mobile, 4G) | < 2.0s |
| CLS | < 0.05 |
| INP | < 200ms |
| Initial JS (gzipped) | < 180KB |
| Lighthouse performance (mobile) | ≥ 90 |
| Lighthouse accessibility | 100 |

Levers: server components by default (`"use client"` only where a hook or listener genuinely requires it); GSAP and Lenis loaded only inside the client motion components; `next/image` with AVIF; fonts self-hosted and subset to latin; no icon library barrel imports (`import { Check } from "lucide-react"`, never `import * as Icons`).

GSAP plus Lenis is roughly 60KB gzipped between them. That is the single biggest line item in the budget and it is a deliberate trade for the scroll quality. Everything else stays lean to pay for it.

---

## 9. CLAUDE.md

Create this at the repo root so Claude Code has standing context on every session. Committed as [`../CLAUDE.md`](../CLAUDE.md).

```md
# Medelis Healthcare — build notes

B2B contract sterilization services website. Audience is QA/regulatory heads at
medical device manufacturers. Trust and specificity beat visual flourish.

## Read first
- docs/01-context.md — positioning, IA, content
- docs/02-design-system.md — tokens, components, motion
- docs/03-stack-and-setup.md — this stack

## Non-negotiables
- Tokens only. No hardcoded hex, px font sizes, or arbitrary spacing values.
  Everything comes from @theme in src/app/globals.css.
- Never use orange as a fill with white text — fails WCAG AA. Primary CTA is indigo-700.
- Never set body text in teal-500 — fails AA under 24px. Links use teal-700.
- Cards get hairline borders, never shadows.
- Server components by default. "use client" only when a hook or event listener requires it.
- Every motion effect needs a prefers-reduced-motion path in JS, not just CSS.
- All numbers, certificate references, and stat labels are set in Geist Mono.
- Sentence case everywhere except mono eyebrow labels.

## Content
Reads from /content via the loaders in lib/content. Do not import a CMS SDK into
a component — the CMS is not chosen yet and the data layer is the swap point.

## Placeholders
Anything in public/placeholder is temporary and must carry the PLACEHOLDER ribbon.
`grep -r "/placeholder/" src/` must return nothing before a production build.
```

---

## 10. Sequence

| Phase | Output | Preview shared? |
|---|---|---|
| 0 | Scope v1.1 approved, client questions answered, vector logo received | — |
| 1 | Repo scaffolded, tokens in, fonts in, Lenis + GSAP wired, preview URL live with auth | Yes — empty shell, proves the pipeline |
| 2 | Design system page at `/_ds` showing every component and token | Yes — internal + client, cheapest way to agree the visual language |
| 3 | Homepage complete with real copy, placeholder imagery | Yes |
| 4 | Services, Industries, Quality, Facility | Yes |
| 5 | Blog, FAQ, Contact, Resources, all forms live | Yes |
| 6 | CMS integrated, admin panel, content migrated | Yes |
| 7 | Real photography swapped in, placeholders purged, SEO pass, performance pass | Yes — final sign-off |
| 8 | Production deploy, DNS cutover, analytics, Search Console | — |

Build a `/_ds` route in phase 1 and keep it maintained — it makes phase 2 a thirty-minute conversation instead of a three-round revision cycle. It needs an explicit production guard, which the middleware in §6.2 does **not** currently provide; see §11 item 1.

---

## 11. Corrections and open items

Recorded during transcription. Items 1 and 2 are defects in the draft above and the fixes are given; 3 to 5 are judgement calls left open.

### 1. `/_ds` is publicly reachable in production

§10 originally claimed the design-system route is "blocked from production by the middleware matcher". It is not, on two counts:

- The `matcher` in §6.2 is a *bypass* list. `_ds` is not on it, so middleware runs on `/_ds` — the matcher includes the route rather than excluding it.
- Even so, middleware's only action is auth, and its first line returns `NextResponse.next()` whenever `PREVIEW_PROTECT !== "true"`. That is exactly the production configuration. `/_ds` is served.

Result as drafted: an internal component gallery ships on the live client site. Add an explicit guard as the first check in `middleware.ts`:

```ts
export function middleware(req: NextRequest) {
  // /_ds is internal. Never expose it on production, auth or no auth.
  if (req.nextUrl.pathname.startsWith("/_ds") && process.env.SITE_ENV === "production") {
    return new NextResponse(null, { status: 404 });
  }

  if (process.env.PREVIEW_PROTECT !== "true") return NextResponse.next();
  // ...existing basic-auth logic
}
```

Note this uses a server-only `SITE_ENV`, not `NEXT_PUBLIC_SITE_ENV`, per §7's own rule about not trusting `NEXT_PUBLIC_` values server-side. Both variables are in §6.5. Belt and braces: also call `notFound()` inside the `/_ds` page itself, so the route is safe even if the middleware config is later edited.

### 2. Companion document paths were wrong

The draft referenced `docs/01-project-context.md` in the header and inside the CLAUDE.md block. The file is `docs/01-context.md`. Corrected in both places. This mattered more than a normal typo because CLAUDE.md is machine-read — the wrong path means every future Claude Code session silently fails to load the project context.

### 3. `Reveal` hides content from anything without JavaScript

`<Tag style={{ opacity: 0 }}>` is removed only by GSAP. If the bundle fails, is blocked, or errors before hydration, every wrapped section stays invisible — and `Reveal` is intended to wrap most of the page. Options:

- Set the initial hidden state from a class applied to `<html>` by a tiny inline script, so no-JS never gets the class and content renders normally. Most robust.
- Or accept the risk and keep hero content outside `Reveal`, so the page is never entirely blank.

Worth a decision because the site's whole argument is trustworthiness, and a blank page is the worst possible first impression for a QA head evaluating a vendor.

### 4. `--text-*` is Tailwind v4's font-size namespace

The `:root` block assigns colours to `--text-primary`, `--text-secondary`, `--text-muted` and `--text-link`, which sit next to `--text-h1` and `--text-body` in `@theme` — font sizes. It works, because the colour aliases are outside `@theme` and so generate no utilities, but the `--text-body-c` name is evidence of the collision already being felt. Renaming the colour aliases to `--fg-*` (`--fg-body`, `--fg-muted`, `--fg-link`) removes the ambiguity and lets `--text-body` keep its natural name. Cheap now, annoying after fifty components reference it.

### 5. Unverified numbers

- "GSAP plus Lenis is roughly 60KB gzipped" is conservative — GSAP core plus ScrollTrigger plus Lenis measures nearer 40–45KB gzipped. Being pessimistic in a budget is fine; just do not quote 60KB to anyone as measured fact. Confirm with `@next/bundle-analyzer` in phase 1.
- The `atob` credential comparison uses `===`, which is not constant-time. Irrelevant for a shared preview password, worth knowing if this middleware is ever reused for anything real.
