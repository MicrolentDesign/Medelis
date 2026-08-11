# Medelis Healthcare — Project Context & Page Plan

**Version:** 2.1 — supersedes all earlier versions.
**Client:** Medelis Healthcare
**Agency:** Microlent Systems, Jodhpur
**Last updated:** 11 August 2026

---

## 1. What this is

A **pharmaceutical product catalogue website with enquiry**, structurally modelled on `sterispharma.co.in`.

- Products organised into **therapeutic ranges**.
- Visitors browse a range, open a product, and **send an enquiry**.
- **No e-commerce.** No cart, no pricing, no checkout, no payment gateway. The reference's "Quote" action is our model, not its sibling site's cart.
- Products managed by the client through an **admin panel in Phase 2**. This phase builds the public site against a data layer the panel plugs into.

### Reference notes

`sterispharma.co.in` is built on Next.js with a headless API on a separate subdomain — the same architecture we're proposing, which is a useful validation and a useful thing to mention to the client.

Its page content is client-rendered, so it couldn't be crawled directly. The structure below is assembled from the sibling site's navigation (same company, same content model), the category-page screenshot you sent, and the company's own published copy. **Worth a manual walkthrough before design sign-off** — if anything on the live site contradicts what's here, the live site wins.

**Copy must be original.** We model their structure and content *depth*, we do not reuse their sentences. Their About Us copy in particular is distinctive and lifting it would be both an IP problem and obvious to anyone comparing the two.

### Audience

Distributors, stockists, retail chemists, PCD partners, institutional procurement. Secondary: doctors and healthcare professionals checking a brand or molecule.

The behaviour that drives the whole build: **people search by molecule, not brand name.** Someone hunting "Tolperisone 150 + Paracetamol 325" needs to land on the Medelis brand of it. Search and product data are built around composition. Both references handle this badly; it's our clearest opportunity to be better.

---

## 2. Confirmed decisions

| # | Item | Decision |
|---|---|---|
| 1 | Launch SKU count | **25** |
| 2 | Therapeutic ranges | Default set, §3 below. Client edits in Phase 2 |
| 3 | Show MRP | **No.** No prices anywhere. CTA is "Send enquiry" |
| 4 | Franchise / business opportunity page | **Build it** |
| 5 | Certifications | Build the component, client populates. **Do not populate with the reference's certifications** |
| 6 | Manufacturing positioning | Neutral. Frame as a pharmaceutical marketing and distribution company; claim no owned facility until the client confirms one |
| 7 | Product images | Assume real pack shots. Neutral pack mockups where missing |
| 8 | Product data entry | **CSV import *and* manual entry**, both in the admin panel |
| 9 | WhatsApp number | Placeholder until supplied |

Still open: domain, existing site, existing Google Business Profile.

---

## 3. The 25-SKU constraint — read this before designing anything

This is the single most important design input, and it cuts the opposite way to instinct.

**Do not build 18 therapeutic ranges for 25 products.** The reference lists eighteen segments because it carries roughly 1,700 SKUs. Spread 25 products across eighteen categories and most category pages hold one or two items — a three-column grid with two products in it looks broken, and a "Cardiology Range" page with a single tablet actively damages credibility with a distributor.

**Launch with 6 ranges.** Chosen to cover the most common Indian super-speciality segments and to allow 3–5 products each:

1. Cardiology Range
2. Neurology Range
3. Diabetic Range
4. Gastrology Range
5. Orthopaedic Range
6. General Range

Held in reserve for when the catalogue grows: Dermatology, Urology, Gynaecology, Asthma & Respiratory, Ophthalmology, Paediatric, Anti-infectives, Nephrology, Endocrinology, Dental.

**Rules that follow from this**

- A category with fewer than 3 published products is **hidden** from the nav, homepage tiles and category index — automatically, by count, not manually. This keeps the site honest as the catalogue grows and prevents an empty page shipping by accident.
- Product counts are shown on category tiles. If the client won't accept that, drop the counts rather than showing "1 product".
- Every grid must look deliberate at **2, 3, 4 and 5 items**, not just at 12. Design the 4-item case first; it's the one that will actually render.
- "Featured products" on the homepage shows 6 of 25, not 8. Below 6 published products, the section hides itself.
- **No pagination needed at launch.** Build the component, set it to 24 per page, and it simply won't appear. Don't design around it.
- Search is client-side (Fuse.js) — trivially fast at this scale, no backend dependency.
- Every product page is statically generated at build time. 25 pages. No ISR complexity needed until the catalogue passes a few hundred.

The catalogue will grow. Build for hundreds, **design for twenty-five.**

---

## 4. Content model

### Product

| Field | Type | Notes |
|---|---|---|
| `brandName` | text, required | The H1 |
| `slug` | auto | Never changes after publish |
| `composition` | text, required | Full composition string. Indexed for search |
| `molecules` | array | Composition split into individual molecules. **Drives molecule search** |
| `strength` | text | |
| `dosageForm` | select | Tablet, Capsule, Syrup, Suspension, Injection, Ointment, Cream, Gel, Drops, Sachet, Spray, Soft Gel |
| `packing` | text | e.g. "10x10 Tablets" |
| `categories` | relation, multi | A product can sit in two ranges |
| `productCode` | text | Quoted in enquiries |
| `prescriptionType` | select | Rx / OTC — drives the disclaimer block |
| `images` | array | Pack shot primary |
| `shortDescription` | text, 150 char | Cards, meta description fallback |
| `introduction` | rich text | |
| `uses` | rich text | |
| `howItWorks` | rich text | |
| `benefits` | repeater | |
| `dosage` | rich text | |
| `sideEffects` | rich text | |
| `precautions` | rich text | |
| `storage` | rich text | |
| `faqs` | repeater | Feeds FAQ schema |
| `featured` / `isNew` / `published` | boolean | |
| `seo` | group | |

No `mrp` field. Decision 2.3 is a business decision, not a display toggle — leaving a price field in the schema invites it back later.

**Every long-form field is optional and every section is conditional.** The client will fill 5 products completely and 20 minimally. Sections with no content collapse entirely — never an empty heading, never a stray divider. This is the constraint most likely to make the site look unfinished, so it gets handled in the template, not by hoping the client fills everything in.

### Supporting entities

`Category` · `Enquiry` · `NewsPost` · `GalleryItem` (photo/video) · `TeamMember` · `Customer` · `Testimonial` · `Certification` · `FAQ` · `Banner` · `Project` · `GlobalSettings`

---

## 5. Page inventory

28 routes, 15 templates. Structure follows the reference; the additions are marked.

### Primary

| # | Page | Route |
|---|---|---|
| 1 | Home | `/` |
| 2 | All products | `/products` |
| 3 | Category page | `/products/[category]` |
| 4 | Product detail | `/product/[slug]` |
| 5 | Search results | `/search?q=` |
| 6 | About us | `/about` |
| 7 | Our team | `/about/team` |
| 8 | Our customers | `/about/customers` |
| 9 | Projects | `/about/projects` |
| 10 | Testimonials | `/about/testimonials` |
| 11 | Certifications | `/about/certifications` |
| 12 | Latest news listing | `/news` |
| 13 | News article | `/news/[slug]` |
| 14 | Photo gallery | `/gallery` |
| 15 | Video gallery | `/gallery/videos` |
| 16 | Brochure | `/brochure` |
| 17 | FAQ | `/faq` |
| 18 | Business opportunity | `/franchise` |
| 19 | Contact us | `/contact` |
| 20 | Send enquiry | `/enquiry` |
| 21 | Enquiry list | `/enquiry-list` — *addition, §7.3* |

### Utility

`/thank-you/[type]` · `/privacy-policy` · `/terms` · `/disclaimer` · `/sitemap` · `404` · `sitemap.xml` · `robots.txt`

### URL rules

- Products are **flat** at `/product/[slug]`. Products routinely belong to two ranges; nesting under category creates duplicate URLs.
- Categories at `/products/cardiology-range` — matches search phrasing.
- Slugs are locked after publish. A change writes a 301 automatically.

---

## 6. Navigation

Mirrors the reference, tightened.

```
┌─ utility bar ──────────────────────────────────────────────────────┐
│  📍 Jodhpur   📞 +91 XXXXX XXXXX   ✉ info@medelishealthcare.com   │
├─ main nav ─────────────────────────────────────────────────────────┤
│  [logo]  Home  About▾  Products▾  Latest News  Gallery▾  More▾     │
│          Contact              [ 🔍 ]  [ 📋 enquiry list (2) ]      │
└────────────────────────────────────────────────────────────────────┘
```

- **About ▾** — About Us · Our Team · Our Customers · Projects · Testimonials · Certifications
- **Products ▾** — the 6 active ranges + "View all products". A plain dropdown, not a mega menu — six items don't warrant one. Revisit when ranges pass twelve.
- **Gallery ▾** — Photos · Videos
- **More ▾** — FAQ · Business Opportunity · Brochure · Careers
- **Search** — overlay, not a page. Matches brand name and composition simultaneously.
- **Enquiry list** — count badge. Sits where the reference puts its cart.

The reference labels products "Medicines". **Ask the client which they prefer** — "Medicines" is warmer and matches how a chemist speaks; "Products" is broader if they ever carry devices, cosmetics or nutraceuticals. Default to "Products" until told otherwise; it's a one-line change in the label file, so make it a single constant rather than hardcoded strings.

Mobile: utility bar collapses to click-to-call plus WhatsApp. Nav becomes a full-screen drawer with accordions. Search is a persistent field at the top of the drawer.

---

## 7. Key flows

### 7.1 Browse to enquiry

```
Home
 └─ range tile → /products/cardiology-range
                   ├─ filter: dosage form
                   ├─ sort: A–Z / newest
                   └─ card → /product/cardimax-10
                               ├─ [ Send enquiry ]      → sheet, prefilled
                               ├─ [ WhatsApp ]          → prefilled message
                               └─ [ + Add to enquiry list ]
                                     └─ /enquiry-list → one form, many products
```

### 7.2 Product enquiry

Opens over the page — centred modal on desktop, **bottom sheet on mobile** at 90vh with the form scrolling inside. A small read-only card at the top shows brand name, composition and product code so the user can see what they're enquiring about.

Fields: name*, firm, mobile*, email, city, state, quantity requirement, message. Turnstile + honeypot. Success renders inline in the sheet; also writes to `/thank-you/product-enquiry` for analytics attribution.

### 7.3 Enquiry list — addition

The reference has a quote action; the older sibling site has a cart. The enquiry list is the useful synthesis: a distributor adds six products, sends one enquiry.

- "+ Add to enquiry list" on every card and product page
- Count badge in the header
- `/enquiry-list` lists selections with a quantity field each, removable rows, one form below
- Persists in `localStorage`, survives refresh
- Empty state routes back to `/products`

One component, one page. Include it in the revised scope and price it.

### 7.4 Search

Single field across `brandName`, `composition`, `molecules`. Results split: matching brands first, then "products containing this molecule". Empty state suggests ranges. Fuse.js, index built at compile time.

---

## 8. Page specifications

### 8.1 Home

| # | Section | Notes | Mobile |
|---|---|---|---|
| 1 | Hero slider | 2–3 banners, headline + sub + CTA, admin-managed | Caps at 60vh, one CTA, text left-aligned |
| 2 | Range tiles | 6 ranges, icon + name + count | 2-up grid |
| 3 | About intro | 2 paragraphs + stats + "Read more" | Stats 2×2 |
| 4 | Featured products | 6 products | Snap-scroll, 1.4 cards visible |
| 5 | Why choose us | 4–6 points: quality, range, packaging, supply reliability, support | 2-up then stacked |
| 6 | Certifications | Logo row, client-populated | 2-up |
| 7 | Business opportunity | Band → `/franchise` | Full-width stacked |
| 8 | Latest news | 3 cards | Horizontal scroll |
| 9 | Customers + testimonials | Logo wall + 2 quotes | Logos 3-up, quotes swipeable |
| 10 | Gallery strip | 5–6 thumbs → `/gallery` | Horizontal scroll |
| 11 | Enquiry CTA | Form + phone + WhatsApp | Sticky WhatsApp button from here down |

Sections 6, 8, 9 and 10 hide themselves when empty. At launch, several will be.

### 8.2 Category / listing page

The template that carries the site.

**Desktop:** category banner with breadcrumb → SEO intro copy (150–250 words) → filter sidebar (240px) + grid (3 columns) → pagination component, dormant at 25 SKUs.

**Filters:** range (multi), dosage form (multi), A–Z sort. Applied filters render as removable chips above the grid. Filter state lives in the URL query so a view can be shared and indexed.

**Product card:** pack shot on a `card-tint` tray with generous padding — pharma boxes are shot on white and float without it → brand name → composition strip, two lines clamped → dosage form and packing as small labels → `[ Enquire ]` and `[ + ]`.

> Composition is set in **sans on a tinted strip**, not in mono. `02-design-system.md` §4.3 argues the case and §13 forbids mono for composition strings outright: a 60-character composition at 15px mono wraps badly and fights the soft aesthetic, and the tinted strip already does the "this is data" job. Corrected here and in §8.3 — the design system is authoritative on visual treatment.

The card must survive a missing image, a 90-character composition, and a three-line brand name. Fixed height, clamped text, reserved image box.

**Mobile:** banner shortens to 140px. Sticky bar under the header with `[ Filters (2) ]` and `[ Sort ]`, both opening bottom sheets. Grid at **2 columns** — pharma pack shots are small and wide, and one column wastes the screen. Below 340px, fall back to one.

### 8.3 Product detail

```
Home > Products > Cardiology Range > Cardimax 10

┌──────────────────┬────────────────────────────────────┐
│                  │  CARDIOLOGY RANGE  ·  New          │
│   pack shot      │  Cardimax 10                       │
│   + thumbnails   │ ┌────────────────────────────────┐ │
│                  │ │ Metoprolol Succinate 10mg      │ │ ← composition strip
│                  │ └────────────────────────────────┘ │
│                  │                                    │
│                  │  Dosage form   Tablet              │
│                  │  Packing       10x10 Tablets       │
│                  │  Product code  MDL-CRD-014         │
│                  │  Type          Prescription        │
│                  │                                    │
│                  │  [ Send enquiry ]  [ + list ]      │
│                  │  [ WhatsApp ]                      │
└──────────────────┴────────────────────────────────────┘
```

Then: introduction → composition → uses → how it works → benefits → dosage → side effects → precautions → storage → why choose Medelis → FAQs → related products from the same range → inline enquiry form.

All conditional. Desktop uses a sticky in-page nav listing **only the sections that exist**; on mobile that becomes a horizontal chip row sticking under the header.

**Mobile:** gallery is a swipeable carousel with dots. Spec table becomes stacked rows. A **sticky bottom action bar** appears past the hero — `[ Send enquiry ]` primary, WhatsApp secondary. This is the main mobile conversion mechanism; build it in the first pass, not as a retrofit.

### 8.4 About and its sub-pages

Modelled on the reference's structure, written fresh. About carries: who we are, when founded, positioning as a pharmaceutical marketing and distribution company, the range breadth, quality and sourcing approach, certifications strip, stats, team preview, CTA.

Team, Customers, Projects, Testimonials and Certifications share one simple grid template with a heading, intro and cards. Cheap to build, and they're the pages the reference's audience clearly expects.

### 8.5 Franchise / business opportunity

What the programme offers, monopoly rights, promotional support, the range on offer, who can apply, process steps, FAQ, and a dedicated application form (name, firm, city, state, current business, experience, ranges of interest). Enquiries tag separately so a distributor lead is distinguishable from a product lead.

### 8.6 Contact

Form + address + phones + emails + hours + map + WhatsApp. Two columns desktop, stacked mobile with the map last. **Map loads on interaction, not on page load** — a Google Maps iframe costs roughly 900KB and will wreck the mobile score.

---

## 9. Responsive rules

Breakpoints `sm` 375 · `md` 640 · `lg` 1024 · `xl` 1280. Container 1240px.

| Element | Desktop | Tablet | Mobile |
|---|---|---|---|
| Product grid | 3 col | 2 col | **2 col** |
| Featured carousel | 4 visible | 3 | 1.4, snap |
| Range tiles | 3 col (6 ranges = 2 clean rows) | 2 col | 2 col |
| Filters | Left sidebar | Sidebar | Bottom sheet |
| Product hero | Image left, info right | Same | Stacked, gallery first |
| Product CTA | In hero | In hero | **Sticky bottom bar** |
| Nav | Full + dropdowns | Full | Drawer + accordion |
| Search | Icon → overlay | Icon → overlay | Field in drawer |
| Spec table | Two column | Two column | Stacked rows |
| Enquiry form | Modal | Modal | Bottom sheet 90vh |
| Section padding | 128px | 96px | 72px |

Non-negotiable: 44×44px touch targets · no horizontal overflow at 320px · explicit image dimensions to prevent layout shift · sticky elements never cover the last interactive element · **tested on a real Android device**, because that's what a distributor is holding.

Build mobile-first, and build the category and product templates at 375px before anything else. Those two are the ones that hurt when retrofitted.

---

## 10. Regulatory note

Publishing dosage, indications and side effects for prescription medicines on a public site touches the Drugs and Magic Remedies (Objectionable Advertisements) Act. Most PCD sites do it anyway, but it's the client's exposure and they should decide knowingly.

Implement regardless, it's cheap: a disclaimer in the footer and at the foot of every Rx product page, driven by the `prescriptionType` field; a `/disclaimer` page; and no efficacy, comparative or "cure" language in product copy. Put the recommendation to the client in writing.

Related: do not attribute WHO-GMP, ISO or UKAS accreditation to Medelis. Those belong to the reference company. The certification component ships empty until Medelis supplies its own.

---

## 11. Admin panel — Phase 2, modelled now

Public site reads through `lib/content`. No component touches a CMS directly, so Phase 2 is a source swap.

Modules: Dashboard · Categories · **Products** · **CSV import** · Enquiries · News · Gallery (photo + video) · Team · Customers · Projects · Testimonials · Certifications · FAQs · Banners · Pages · Contact & globals · SEO & redirects · Users.

**Product entry supports both paths, per decision 2.8:**

- **Manual** — full form, one product at a time, with image upload and rich text. This is what gets used for the first 25 and for edits.
- **CSV/XLSX import** — column mapping to the product schema, row-level validation with errors reported by row number, and **update-by-`productCode`** so a re-import edits rather than duplicates. Provide a downloadable template CSV from inside the panel.

At 25 SKUs manual entry is realistic, so CSV is the growth path rather than the launch path — but building both now costs less than retrofitting the importer once there are 400 products and a client who won't re-key them.

Enquiries need type and date filtering, status (new / contacted / closed), and CSV export.

---

## 12. SEO

- Category pages target "[range] products supplier india" and "[range] medicines company jodhpur/rajasthan". Local intent matters — the reference ranks on "Best Pharmaceutical Company In Jaipur", and Medelis has the same play available in Jodhpur.
- Product titles: `{Brand} — {Composition} | Medelis Healthcare`. The composition in the title wins the molecule searches.
- `Product`, `Organization`, `BreadcrumbList`, `FAQPage` schema. No `Offer` — no prices.
- Multi-filter category URLs `noindex, follow`; single-filter views stay indexable.
- Image alt defaults to `{brandName} - {composition}`, required field in the panel.
- With only 25 product pages, the News section carries most of the indexable surface. Seed it with 6–8 range and molecule explainers at launch.

---

## 13. Scope note for the client

Against the original requirements document, the changes are: a product catalogue module (ranges, listings, detail pages, search, filters) replacing the services module; About sub-pages (Team, Customers, Projects, Testimonials, Certifications); photo and video galleries; brochure page; franchise page; the enquiry list feature; and CSV import alongside manual entry in the admin panel. Send as a revised scope for approval before design sign-off.

---

## 14. Companion documents

- **`02-design-system.md`** — now at **v2.0, and the revision pass this section asked for has already landed.** It covers product cards, range tiles, filter chips and sheets, spec tables, the enquiry sheet, the sticky mobile bar and the sparse-grid rules §3 calls for. Read it before designing anything, because it does not simply "carry over" from v1.0 — the visual language inverted:
  - Palette keeps indigo / teal / orange, but adds the `canvas` / `card` / `card-tint` surface tokens that now define the system. **The page background is never white.**
  - Type is **Plus Jakarta Sans**, not Geist. Mono is restricted to product codes and stat captions.
  - **Shadows replace hairlines**, radius goes to 16–20px, and buttons become pills. All the reverse of v1.0.
  - The cycle strip is indeed dead. The **composition line** is the new signature element.
  - Two colour roles fail AA — see its §3.8 before wiring `--text-muted` or the "New launch" pill.
- **`03-stack-and-setup.md`** — Next.js, Tailwind v4 tokens, Lenis, GSAP, password-protected preview and the Unsplash placeholder workflow all stand. Three edits: the content model section is replaced by §4 above, rendering strategy simplifies to full static generation at this SKU count, and the font loading and token blocks need updating for Plus Jakarta Sans and the surface tokens.
