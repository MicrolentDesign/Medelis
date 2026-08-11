# Medelis Healthcare — Homepage Plan

**Version:** 2.0 — supersedes v1.0 entirely. v1.0 planned a sterilization services
homepage and is void.
**Last updated:** 11 August 2026

Turns [`01-project-context.md`](01-project-context.md) §8.1's eleven-section order into a
build specification, against [`02-design-system.md`](02-design-system.md) v2.0.

---

## 1. The governing idea

The homepage has one job: **get a distributor into a range, or into the enquiry flow, in
one screen.** It is a doorway, not a brochure. Nobody reading it is deciding whether to
trust Medelis in the abstract — they are checking whether Medelis carries the molecule
they need.

Two structural rules follow.

**Every section is self-suppressing.** Context §8.1 marks sections 6, 8, 9 and 10 as
hiding when empty. Make that mechanical, not a matter of discipline: `if (!data) return
null`. At launch four of eleven sections will not render, and that is the correct
outcome — not a gap to fill.

**The composition strip appears above the fold.** Design system §1 calls it the one thing
that is ours, and §4.3 says it goes everywhere a product appears. That means the featured
product cards, not just the category pages. A distributor scanning the homepage should
see a molecule string before they see a single marketing sentence.

---

## 2. What renders at launch

| # | Section | Needs | At launch |
|---|---|---|---|
| 1 | Hero slider | 2–3 banners, admin-managed | **Renders** — copy writable now |
| 2 | Range tiles | 6 ranges + product counts | **Renders** — ranges fixed in context §3 |
| 3 | About intro | 2 paragraphs + 4 stats | Partial — copy writable, **stats blocked** |
| 4 | Featured products | 6 of 25 published | **Blocked** — no product data |
| 5 | Why choose us | 4–6 points | **Renders** — writable now |
| 6 | Certifications | Client's own certificates | **Hides** — context §10 forbids borrowing the reference's |
| 7 | Business opportunity | Band → `/franchise` | **Renders** — writable now |
| 8 | Latest news | 3 posts | **Hides** — but see below |
| 9 | Customers + testimonials | Logos + attributed quotes | **Hides** |
| 10 | Gallery strip | 5–6 images | **Hides** |
| 11 | Enquiry CTA | Form + phone + WhatsApp | Renders — **WhatsApp number blocked** |

**Five render, one partial, four hide, one blocked.** The page is shorter at launch than
the spec implies, and design system §10 is right that the instinct to tighten section
padding to compensate is wrong. Short and confident beats short and cramped.

### Two things worth starting now, in parallel

**Product data is the critical path.** Section 4 is the commercial heart of the homepage
and every category page depends on the same 25 records. Nothing else on this list unblocks
as much. The content model is settled (context §4) and CSV import exists (decision 2.8) —
get the client filling a spreadsheet this week, not after design sign-off.

**News is the cheapest indexable surface we have.** Context §12 notes that with only 25
product pages, news carries most of the SEO weight, and asks for 6–8 range and molecule
explainers at launch. That copy needs no client input — it is general pharmacology and
category writing. Writing four of them turns section 8 from hidden to rendering and is the
only section on this list we can unblock ourselves.

---

## 3. Section-by-section

Surfaces alternate `canvas` → `canvas-deep` per design system §3.1. Cards are always white.

### 1 — Hero slider

**Surface:** `canvas`, hero content in a `radius-xl` white container.
**Job:** state what Medelis is and route to products.

Per design system §8, no hard-edged full-bleed photograph — the hero image sits in a
rounded container, and the arch-top variant is permitted here, once per page.

- Pill badge eyebrow — e.g. `Pharmaceutical marketing & distribution`
- H1 at `display`, 700
- `lead` at 54ch
- Primary pill button with circular arrow → `/products`; secondary → `/franchise`
- 2–3 slides, admin-managed, dots not auto-advancing (accessibility floor §12)

**Positioning constraint:** context decision 2.6 says stay neutral on manufacturing and
claim no owned facility. The H1 must not imply a plant. "Pharmaceutical marketing and
distribution" is the safe frame until the client confirms otherwise.

Mobile caps at 60vh, one CTA, text left-aligned.

### 2 — Range tiles

**Surface:** `canvas`. Six white tiles, `radius-lg`, `shadow-card`.
**Job:** the primary navigation act of the page.

Per design system §7.4: circular arrow button top-right, icon, range name in `h3`,
one-line description, product count in `caption`. Hover lifts `-2px` and fills the arrow
badge.

Six ranges is two clean rows of three on desktop, 2-up on mobile. This is the section that
most rewards the sparse-grid discipline — six tiles is a *complete* grid, so it will look
better than anything else on the page at launch. Put it directly under the hero.

**One tile may render in `indigo-700` with white text** as a visual anchor (§7.4). Use it
on General Range or whichever the client wants pushed — not on the category index.

Product counts are blocked until products exist. Per context §3, if the client will not
accept counts, drop them rather than showing "1 product".

### 3 — About intro

**Surface:** `canvas-deep` band.
**Job:** one paragraph of credibility, then out.

Two paragraphs, four stat cards, "Read more" → `/about`. Stat cards per §7.9 — white,
`radius-lg`, pill badge top-right naming the metric, number in `stat` at `indigo-700`,
mono caption below, count-up on scroll.

**Stats are blocked.** Years operating, range count, states served, distributor count —
none exist. The GeneX reference staggers card heights on desktop; keep that, it makes four
cards look composed rather than like a row of boxes.

### 4 — Featured products

**Surface:** `canvas`. Six product cards.
**Job:** prove there is a real catalogue behind the ranges.

The most-built component on the site (§7.3), so this section is where it gets its first
real test. Anatomy: `card-tint` image tray at 4:3 with `object-contain` → alt pill badge
naming the range → brand name in `h3`, 2-line clamp → **composition strip** → dosage form
and packing in `caption` → full-width primary enquiry button.

**Blocked on product data.** Do not populate with invented brand names — molecule names
are factual and public, but a brand name and product code attributed to Medelis is
fabricated medical content. Build the card against the schema and leave it in its
loading/empty state until real records exist.

Must survive a missing image, a 90-character composition and a three-line brand name.
Fixed card height per row, buttons bottom-aligned via flex.

Mobile: snap-scroll at 1.4 cards visible.

### 5 — Why choose us

**Surface:** `canvas-deep`.
**Job:** the only section that argues rather than routes.

Four to six points: range breadth, quality and sourcing approach, packaging, supply
reliability, distributor support. White cards, `radius-lg`, Lucide icon in a circular
`indigo-50` badge, `h4` heading, `body-sm` in `slate-600`.

Writable now, and it should be written **specifically** — "monopoly rights by district"
beats "customer focus". Context §4's tone rules still apply: nothing a competitor could
paste onto their own site unchanged.

### 6 — Certifications

**Hides at launch.** Context §10 is explicit that WHO-GMP, ISO and UKAS belong to the
reference company and must not be attributed to Medelis. Build the component, ship it
empty, populate when the client supplies their own.

### 7 — Business opportunity

**Surface:** `inverse` — `indigo-700` full-width band.
**Job:** capture the PCD/franchise lead, which is a different and often larger deal than a
product enquiry.

Pill badge in `rgba(255,255,255,.14)`, H2 in white, one line of `indigo-200`, inverse pill
button with circular arrow → `/franchise`.

This is the page's one dark band. Design system §3.1 makes `inverse` a surface token, and
the footer at `indigo-900` follows section 11 — so keep section 11 light, or the band and
the footer stack into one dark mass.

### 8 — Latest news

**Hides at launch, but see §2** — this is the one section we can unblock ourselves, and
context §12 wants it seeded with 6–8 explainers anyway. Three white cards, `radius-lg`,
rounded image container, date in `caption`, title in `h3`, circular arrow.

### 9 — Customers + testimonials

**Hides at launch.** Logos need permission and a minimum of six (§7.11). Testimonials need
attributed quotes — name, firm, city. An unattributed testimonial is worth nothing to a
distributor who is deciding whether to trust a supplier.

### 10 — Gallery strip

**Hides at launch.** Five or six thumbnails in rounded containers → `/gallery`.

### 11 — Enquiry CTA

**Surface:** `canvas`. Form inside a white `radius-xl` card.
**Job:** the general-enquiry catch, for visitors who did not go through a product.

Following the Medvita reference, the form is a white card with icon-prefixed inputs — and
§7.7 is firm that if icons are used they apply to every field or none. Fields: name, firm,
mobile, email, message. Turnstile + honeypot. Phone and WhatsApp adjacent.

Keep this section light so it separates the `indigo-700` band at section 7 from the
`indigo-900` footer.

The sticky WhatsApp button appears from here down on mobile.

---

## 4. Surface rhythm

Verified against design system §3.1. Cards are white throughout; this is the *page*
surface beneath them.

| # | Section | Surface |
|---|---|---|
| 1 | Hero | `canvas` |
| 2 | Range tiles | `canvas` |
| 3 | About intro | `canvas-deep` |
| 4 | Featured products | `canvas` |
| 5 | Why choose us | `canvas-deep` |
| 6 | Certifications | *hidden* |
| 7 | Business opportunity | `inverse` |
| 8 | Latest news | *hidden* → `canvas` when populated |
| 9 | Customers + testimonials | *hidden* → `canvas-deep` |
| 10 | Gallery | *hidden* → `canvas` |
| 11 | Enquiry CTA | `canvas` |
| — | Footer | `inverse-deep` |

**The rhythm has to be derived from the rendered list, not hardcoded per section.** With
four sections hiding at launch, a hardcoded alternation breaks the first time content
arrives — section 8 appearing would put two `canvas` bands adjacent. Compute it from the
filtered array.

At launch the sequence is `canvas · canvas · canvas-deep · canvas · canvas-deep ·
inverse · canvas · inverse-deep`. Sections 1, 2 and 4 all being `canvas` is fine because
white cards on a tinted ground already separate them — that is the whole point of §3.1.

---

## 5. Components and the client/server split

Stack §8 requires server components by default.

| Component | Boundary | Why |
|---|---|---|
| `HeroSlider` | **Client** | Slide state |
| `RangeTile`, `RangeGrid` | Server | Hover is CSS |
| `AboutIntro` | Server | |
| `StatCard` | **Client** | Count-up on scroll |
| `ProductCard` | Server | The card itself is static… |
| `AddToEnquiryList` | **Client** | …but the `+` button writes `localStorage` |
| `WhyChooseUs` | Server | |
| `FranchiseBand` | Server | |
| `NewsCard` | Server | |
| `LogoWall` | Server | Hover is CSS |
| `TestimonialCarousel` | **Client** | Swipe + dots |
| `GalleryStrip` | **Client** | Horizontal snap-scroll |
| `EnquiryForm` | **Client** | RHF + Turnstile |
| `CircularArrow` | Server | Pure presentation |
| `CompositionStrip` | Server | Pure presentation |
| `Reveal` / `StaggerGroup` | **Client** | Thin wrappers; wrapped children stay server |

Note the split inside the product card: the card is a server component and only the
`+ Add to enquiry list` control is a client island. Making the whole card client because
of one button would put every featured product's markup in the bundle.

---

## 6. Motion

All permitted by design system §9; nothing new.

| Section | Effect |
|---|---|
| 1 | Slide transition, 400ms fade. **No auto-advance** — §12 |
| 2 | Tile stagger 60ms; hover lift `-2px` + arrow badge fill |
| 3 | Stat count-up 1.2s easeOutExpo, once |
| 4 | Card stagger; hover lift |
| 5 | Standard reveal |
| 7 | Standard reveal |
| 11 | Standard reveal |

**Reduced motion:** Lenis off, reveals become a 120ms opacity fade, count-ups snap to
final value, card lift removed. JS guards matter more than the media query because GSAP
writes inline styles.

---

## 7. Mobile

Build at 375px first. Context §9 is right that a distributor is holding an Android phone.

- Hero caps at 60vh, one CTA.
- Range tiles 2-up. Six tiles is three clean rows.
- Stats 2×2.
- Featured products snap-scroll, 1.4 cards visible — **not** 2-up, because the card
  carries an image tray, a composition strip and a button, and at 160px wide the
  composition clamps to uselessness.
- Sticky WhatsApp button from section 11 down.
- 44×44px touch targets. No horizontal overflow at 320px.

---

## 8. What this plan cannot resolve

**Product data blocks the commercially important half of the page.** Section 4 is blocked,
section 2's counts are blocked, and every category page shares the same dependency. This is
the single highest-value thing to chase.

**Four sections hide at launch.** That is designed behaviour, not a defect, but the client
should be told before they see the preview and ask why the page is short. Frame it as the
sections switching on as they supply content.

**The green question is unresolved.** Design system v2.0 §3.3 reinstates teal as the
accent carrying pill badges, links and active states, on the strength of the Medvita
reference. The client objected to green on 5 August. Both cannot be true. Confirm before
this rolls across 28 routes — it is a token change now and a repaint later.

**Two colour roles fail AA** — design system §3.8. `--text-muted` at `slate-500` is
3.85:1 on the canvas, and it is what the product packing line, stat captions, team roles
and range product counts are all set in. Resolve before the product card is built, because
that component is replicated across every listing on the site.
