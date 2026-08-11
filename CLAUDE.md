# Medelis Healthcare — build notes

**Pharmaceutical product catalogue with enquiry.** Products organised into therapeutic
ranges; visitors browse a range, open a product, send an enquiry. **No e-commerce** —
no cart, no prices, no checkout. Audience is distributors, stockists, chemists and PCD
partners, not patients.

The behaviour that drives the build: **people search by molecule, not brand name.**
Search and product data are built around composition.

## Read first

- `docs/01-project-context.md` — v2.1. What this is, the 25-SKU constraint, content
  model, 28 routes, flows, page specs.
- `docs/02-design-system.md` — v2.0. Surfaces, type, components. **Inverted from v1.0.**
- `docs/03-stack-and-setup.md` — stack, environments, preview setup.
- `docs/04-homepage-plan.md` — homepage build spec.

## This project pivoted — ignore anything sterilization-flavoured

It was a contract sterilization services site until 11 Aug 2026. If you find references
to modalities, cycle parameters, ISO 11135, a "cycle strip" signature element, or
`docs/00-client-requirements.md`, that is the old brief. The cycle strip is dead.

## Non-negotiables

- **The page background is never white.** It is `canvas` `#EDF1F8`. White is for cards
  sitting on it. A white card on a white page is the failure mode to watch for.
- **Shadows, not borders.** Cards get `shadow-card`, no border. This reverses v1.0.
- Radius 16–20px on cards. **Buttons are pills** (`radius-full`).
- Tokens only. No hardcoded hex, px font sizes, or arbitrary spacing.
- Type is **Plus Jakarta Sans**. Headings are **700**. Body is 400 in `slate-600`.
- **Mono is restricted to two places:** product codes and the caption under a stat
  number. Never composition strings — see design system §4.3.
- **Composition strips are sans on a tinted fill**, identical everywhere a product
  appears. This is the signature element.
- Never use orange as a fill with white text — 2.6:1. Primary action is `indigo-700`.
- Never set body text in `teal-500` — 4.0:1. Links use `teal-700`.
- Pill badges are the only uppercase. Everything else is sentence case.
- The circular ↗ arrow is the signature affordance — buttons and card corners, never
  on tertiary text links.
- Server components by default. `"use client"` only when a hook or listener requires it.
- Every motion effect needs a `prefers-reduced-motion` path in JS, not just CSS.
- 15px is the body-text floor. Do not copy the references' 11px feature lists.

## Sparse content is the main design constraint

25 SKUs across 6 ranges. Grids hold 3–5 items, not 12.

- Design the **4-item case first**. Cards do not stretch to fill a row; a 3-column grid
  with 4 items leaves one gap and that is correct. Never centre the orphan.
- A category with fewer than 3 published products **hides itself** — by count, not
  manually.
- Certifications, news, customers, testimonials and gallery sections all self-hide when
  empty. Several will be at launch. Never ship an empty heading or a stray divider.
- Every long-form product field is optional and every section is conditional.

## Content

Reads from `/content` via the loaders in `lib/content`. Do not import a CMS SDK into a
component — the admin panel is Phase 2 and the data layer is the swap point.

## Regulatory

- Do not attribute WHO-GMP, ISO or UKAS accreditation to Medelis. Those belong to the
  reference company. The certification component ships empty.
- Rx product pages carry a disclaimer driven by `prescriptionType`. No efficacy,
  comparative or "cure" language in product copy.
- Do not invent product data. Molecule names are factual; brand names, product codes and
  pack sizes attributed to Medelis are not, and this is a medical context.

## Open — do not treat as settled

- **Design system §3.8.** Two colour roles fail the AA commitment: `slate-500` as
  `--text-muted` and `caption` (3.85:1 on canvas), and `orange-700` on `orange-100` for
  the "New launch" pill (4.13:1). Fixes are in the doc. Until they land, do not wire
  `--text-muted` or the New pill into components.
- **Nav label:** "Products" vs "Medicines" — client's call. Keep it as one constant, not
  hardcoded strings.
- **Green/teal accent.** The client objected to green on 5 Aug; design system v2.0
  reinstates teal as the accent carrying pills and links. Confirm before wide rollout.

## Checks

```bash
node scripts/check-contrast.mjs
```

Must pass before any preview is shared with the client.
