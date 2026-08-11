# Medelis Healthcare — Design System

**Version:** 2.0 — supersedes v1.0 entirely.
**Direction locked to:** the GeneX Institute of Longevity and Medvita references supplied 11 Aug 2026.
**Scope:** public marketing site + catalogue. Admin panel inherits tokens, not layout.

Companions: `01-project-context.md` (what and why), `03-stack-and-setup.md` (how it's built).

---

## 1. Direction

Clean, modern, sharp. Both references run the same underlying system, and it's worth naming it precisely because every other decision follows:

**A tinted canvas with white cards floating on it.**

The page background is never white — it's a pale blue-grey. Content lives in white cards with generous radius and soft, low-contrast shadows. That single relationship does most of the work: it makes the page feel calm and layered without a single border, and it makes white product imagery sit properly instead of dissolving into the background.

Around that:

- **Generous radius.** 16–20px on cards, full pill on buttons. Nothing is square.
- **Soft elevation, not borders.** Diffuse shadows at low opacity in a blue-tinted black. Hairline borders are the exception now, not the rule.
- **Big confident headings, quiet body.** A large jump between heading and body size. Headings at 700; body at 400 in a muted slate.
- **Pill badges as eyebrows.** Small capsule labels in a tinted fill, replacing uppercase-tracked mono labels.
- **The circular arrow.** A recurring ↗ in a circle, on buttons and card corners. It's the interaction motif that ties both references together and it should tie ours together too.
- **Rounded image containers.** Photography sits in rounded rectangles and arch shapes, never bleeding to a hard edge.

### What this replaces

v1.0 specified hairline borders, no shadows, 12px maximum radius, no pills, and weights capped at 600. All of that is now wrong. If you have anything built against v1.0, the visual language has inverted — check it against §4 and §5 before reusing.

### The one thing that's ours

Both references are clinics presenting people and services. We're presenting **molecules**. The distinguishing element for Medelis is the **composition line** — treated consistently as a small tinted data strip on every product card, in every search result, and under every product H1.

It's the functional differentiator (§Project Context: distributors search by molecule, not brand) given a visual identity. It's the one thing a competitor's site won't have, and it costs nothing to build. Everything else follows the reference language faithfully.

---

## 2. Logo

Five colours on a pale blue plate — a print-era mark. Use it as supplied inside its own lockup; don't extract its colours into the interface beyond §3.

- **Request vector (AI/EPS/SVG) immediately.** The supplied file is raster and won't survive retina or a favicon.
- Three variants: full colour on light, mono indigo on light, mono white on indigo.
- Clear space equal to the "M" height. Minimum 140px wide desktop, 110px mobile.
- Strip the pale blue background plate when the vector arrives — it's part of the file, not the brand.

Not inherited into UI: the red `#ED1C24` (display script, doesn't scale, reads as alert) and the lime `#8CC63F` (reads consumer). Both stay inside the mark.

---

## 3. Colour

### 3.1 Surfaces — the defining relationship

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#EDF1F8` | **Page background.** Every page, everywhere |
| `canvas-deep` | `#E4EAF4` | Alternating band, filter sidebar |
| `card` | `#FFFFFF` | Every card, panel, form container |
| `card-tint` | `#F7F9FC` | Image trays, inactive tabs, table stripes |
| `inverse` | `#232A6B` | Dark bands, footer, primary buttons |
| `inverse-deep` | `#12163A` | Footer base |

The mistake to avoid: a white card on a white page. If a section feels flat, it's because the canvas has gone white somewhere.

### 3.2 Indigo — anchor

| Token | Hex |
|---|---|
| `indigo-50` | `#F0F2F9` |
| `indigo-100` | `#DDE1F0` |
| `indigo-200` | `#B9BFDF` |
| `indigo-300` | `#8E96C6` |
| `indigo-400` | `#616BA8` |
| `indigo-500` | `#3C468C` |
| `indigo-600` | `#2B3578` |
| `indigo-700` | `#232A6B` ← brand |
| `indigo-800` | `#1A2052` |
| `indigo-900` | `#12163A` |

### 3.3 Teal — accent

Carries pill badges, active states, links, the "New" marker. Ties to the logo green; matches the accent role green plays in the Medvita reference.

| Token | Hex |
|---|---|
| `teal-50` | `#EAF7F4` |
| `teal-100` | `#CBEDE5` ← pill fill |
| `teal-300` | `#5FC4AF` |
| `teal-500` | `#0E8F7A` ← icons, ≥24px text |
| `teal-600` | `#0C7867` |
| `teal-700` | `#0B6053` ← links, small text |
| `teal-800` | `#0A4C43` ← text on teal-100 |

### 3.4 Orange — restricted

From the logo. "New launch" badges, one homepage accent. Never a large surface.

`orange-50 #FEF4EA` · `orange-100 #FDE4CA` · `orange-500 #F58220` · `orange-700 #B5510B`

### 3.5 Slate — text and neutral

`slate-50 #F5F7FA` · `slate-100 #EDF0F5` · `slate-200 #DDE2EB` · `slate-300 #C2CAD8` · `slate-400 #93A0B4` · `slate-500 #6B7A91` · `slate-600 #4E5B70` · `slate-800 #262E3C` · `slate-900 #161C26`

### 3.6 Semantic

```
--surface-canvas   #EDF1F8      --text-heading    slate-900
--surface-card     #FFFFFF      --text-body       slate-600
--surface-tint     #F7F9FC      --text-muted      slate-500
--surface-inverse  indigo-700   --text-on-inverse white

--pill-bg          teal-100     --action-bg       indigo-700
--pill-text        teal-800     --action-hover    indigo-500
--pill-alt-bg      indigo-50    --action-text     white
--pill-alt-text    indigo-700   --focus-ring      teal-600
```

Body copy is `slate-600`, not `slate-800`. Both references run a quiet body against a heavy heading; that contrast is most of the "modern" read. `slate-600` on white is 7.4:1 — comfortably AA.

### 3.7 Contrast — two rules that aren't negotiable

Ratios below are **measured** from the §3.1–§3.5 hex values using the WCAG 2.1
relative-luminance formula, not estimated. Re-measure with
`node scripts/check-contrast.mjs` if any token changes.

| Pair | Ratio | Verdict |
|---|---|---|
| `indigo-700` on white / white on `indigo-700` | 13.0:1 | AAA |
| `slate-900` on white | 17.1:1 | AAA |
| `slate-900` on `canvas` | 15.1:1 | AAA |
| `slate-600` on white | 6.9:1 | AA — just short of AAA, do not claim AAA |
| `slate-600` on `canvas` | 6.1:1 | AA |
| `slate-600` on `card-tint` | 6.5:1 | AA |
| `teal-800` on `teal-100` | 7.9:1 | AA — pill badge |
| `indigo-700` on `indigo-50` | 11.6:1 | AA — alt pill, filter chip |
| `teal-700` on white / on `canvas` | 7.5:1 / 6.6:1 | AA — links |
| `teal-600` on white / on `canvas` | 5.4:1 / 4.8:1 | Passes 1.4.11 — focus ring |
| `teal-500` on white | 4.0:1 | **Fails AA for text.** ≥24px and icons only. Passes 1.4.11 as the nav underline |
| **white on `orange-500`** | **2.6:1** | **Fails everything.** Never |
| `teal-300` on `indigo-700` | 6.2:1 | AA |
| `indigo-200` on `indigo-900` | 9.6:1 | AA — footer links |

**Consequence: the primary button is indigo, not orange.** Orange at brand value can't carry white text, and darkening it enough to pass produces a rust that no longer reads as the logo. Both references use deep navy for primary action anyway.

### 3.8 Two assignments that fail — resolve before build

§12 commits to WCAG 2.1 AA on all text. Two role assignments above break it. Both are measured, neither is a matter of taste. **Open items, not settled design.**

| # | Assignment | Measured | Needs | Verdict |
|---|---|---|---|---|
| 1 | `slate-500` as `--text-muted` and `caption` | 4.36 white · **3.85 canvas** · 4.13 `card-tint` · 3.61 `canvas-deep` | 4.5 | **Fails on every surface** |
| 2 | `orange-700` on `orange-100` — the "New launch" pill | 4.13 | 4.5 | **Fails** |

**1 — Muted text.** The widest-reaching of the two. `slate-500` is specified for `--text-muted`, for `caption` throughout §7 (product packing lines, stat captions, team roles, product counts on range tiles) and for the spec-table label in §7.6. It fails on plain white and gets worse on the tinted canvas this system is built around — 3.85:1 is the real number a distributor reads a packing line at.

Reassign `--text-muted` and `caption` to **`slate-600`**, which clears every surface: 6.88 white, 6.07 canvas, 6.52 `card-tint`, 5.69 `canvas-deep`. Hierarchy survives, because headings are `slate-900` at 700 and body is `slate-600` at 400 — §3.6's "heavy heading, quiet body" contrast comes from the weight and size jump, not from the muted grey. `slate-500` then survives as a non-text tint only.

Note this is the same failure v1.0 carried and it has come through the rewrite unchanged.

**2 — The "New launch" pill.** 12px at weight 600 is normal text, not large, so it needs 4.5. Two ways out: keep the `orange-100` fill and darken the text to **`#743612`** (7.52:1), which is the `orange-900` v1.0 defined and this version dropped — restore it to the §3.4 ramp; or keep `orange-700` and lighten the fill to `orange-50` (4.66:1), which passes but with almost no margin and makes the badge quieter than the teal and indigo pills beside it. **Prefer restoring `orange-900`.**

`slate-400` also fails as text at 2.65:1 on white. §3.5 lists it without assigning a role — keep it that way, borders and dividers only.

---

## 4. Typography

### 4.1 Faces

| Role | Face | Weights |
|---|---|---|
| Display + body | **Plus Jakarta Sans** | 400, 500, 600, 700 |
| Product codes, stat labels | **Geist Mono** | 400, 500 |

Plus Jakarta Sans is the closest free face to both references — geometric-humanist, confident at heavy weights, clean and slightly warm at text sizes. Free on Google Fonts, loads through `next/font`, no licensing conversation with the client.

Alternate if they want more character: **Satoshi** (Fontshare, free for commercial use), closer to the GeneX display face. Do not substitute Poppins or Montserrat.

**Mono is now heavily restricted.** v1.0 set every number in mono; that belonged to the technical direction and fights this one. Mono survives in exactly two places: product codes (`MDL-CRD-014`) and the small caption under a stat number. Composition strings move to sans — see §4.3.

Weights change from v1.0: **700 is now the heading weight.** These references are built on heavy display type.

### 4.2 Scale

Fluid between 375px and 1440px.

| Token | Size | Line | Tracking | Weight |
|---|---|---|---|---|
| `display` | 40 → 72px | 1.02 | -0.03em | 700 |
| `h1` | 34 → 52px | 1.08 | -0.025em | 700 |
| `h2` | 28 → 42px | 1.12 | -0.02em | 700 |
| `h3` | 20 → 24px | 1.25 | -0.015em | 600 |
| `h4` | 17 → 19px | 1.35 | -0.01em | 600 |
| `lead` | 17 → 19px | 1.6 | 0 | 400 |
| `body` | 16px | 1.65 | 0 | 400 |
| `body-sm` | 15px | 1.6 | 0 | 400 |
| `caption` | 13px | 1.5 | 0 | 400 |
| `pill` | 12px | 1.2 | 0.02em | 600 |
| `stat` | 36 → 56px | 1.0 | -0.03em | 700 |
| `stat-label` | 11px | 1.4 | 0.06em, uppercase | 500 (mono) |
| `code` | 13px | 1.4 | 0.02em | 400 (mono) |

Body max width 68ch, lead 54ch.

**Pill badges are the only uppercase.** Everything else is sentence case — headings, buttons, nav, labels. The references are consistent on this and it's a large part of why they read modern.

Note the reference feature lists run body text around 11–12px. Don't copy that. 15px is the floor, and a distributor squinting at a spec on a phone is exactly the user we can't afford to lose.

### 4.3 The composition line

The signature treatment. Applied identically everywhere a product appears.

- Set in **sans**, `body-sm`, weight 500, `indigo-700`
- On a `card-tint` or `indigo-50` fill, `radius-sm`, 6px vertical / 10px horizontal padding
- Clamped to two lines on cards, never clamped on the product page
- Molecule names are the content; strengths follow inline

```
┌────────────────────────────────────────────┐
│  Metoprolol Succinate 10mg                 │  ← indigo-700, 500, on indigo-50
└────────────────────────────────────────────┘
```

Sans rather than mono because mono at 15px with a 60-character composition string wraps badly and fights the soft aesthetic. The tinted strip does the "this is data" job that mono was doing.

---

## 5. Shape, elevation, space

### Radius

| Token | Value | Applied to |
|---|---|---|
| `radius-sm` | 8px | Pills, chips, small labels, composition strip |
| `radius-md` | 12px | Inputs, selects, small buttons |
| `radius-lg` | 16px | Cards, image containers |
| `radius-xl` | 20px | Feature panels, hero container, sheets |
| `radius-2xl` | 28px | Large section containers |
| `radius-full` | 999px | **Buttons**, avatars, icon buttons, pills |

Buttons are pills. This reverses v1.0 and matches both references.

### Elevation

Shadows are back, and they carry the system. All tinted blue-black, never neutral grey.

```
--shadow-xs:     0 1px 2px  rgba(16,24,64,0.04)
--shadow-card:   0 2px 8px  rgba(16,24,64,0.05), 0 1px 2px rgba(16,24,64,0.03)
--shadow-hover:  0 10px 28px rgba(16,24,64,0.09), 0 2px 6px rgba(16,24,64,0.04)
--shadow-float:  0 16px 40px rgba(16,24,64,0.10)
--shadow-sheet:  0 -8px 32px rgba(16,24,64,0.12)
--shadow-nav:    0 1px 0   rgba(16,24,64,0.05)
```

Cards carry `shadow-card` at rest and `shadow-hover` with a `-2px` translateY on hover, 200ms. No borders on cards. The tinted canvas provides the separation that a border used to.

### Space

4px base: 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128.

Section padding 128 / 96 / 72 (desktop / tablet / mobile). Container 1240px, gutters 64 / 40 / 24. Card padding 28px desktop, 20px mobile. Grid 12 / 8 / 4 columns, 24px gutter.

---

## 6. The circular arrow

The interaction motif shared by both references. Used consistently, it becomes the site's signature affordance.

**On buttons.** Pill button, right-side circular badge containing a ↗ arrow.

```
┌──────────────────────────────────┐
│  Send enquiry              ( ↗ ) │   indigo-700 fill, white text,
└──────────────────────────────────┘   white circle, indigo arrow
```

Badge is 32px on `lg` buttons, 28px on `md`. On hover the arrow translates 2px up-right and the badge lightens. That's the whole animation.

**On cards.** A 36px circular icon button, top-right corner, `card-tint` fill with an `indigo-700` arrow. On card hover it fills `indigo-700` with a white arrow. Used on range tiles, news cards and department-style tiles.

**Never** on tertiary text links — those get a plain 14px arrow with no circle.

---

## 7. Components

### 7.1 Button

| Variant | Fill | Text | Badge |
|---|---|---|---|
| Primary | `indigo-700` | white | White circle, indigo arrow |
| Secondary | white | `indigo-700` | `indigo-50` circle, indigo arrow |
| Tertiary | transparent | `teal-700` | None, plain arrow |
| Inverse | white | `indigo-700` | `indigo-50` circle |
| Inverse ghost | `rgba(255,255,255,.1)` | white | `rgba(255,255,255,.2)` circle |

Heights 40 / 48 / 56. Pill radius. Weight 600. Sentence case. Secondary carries `shadow-xs`. Focus ring `2px teal-600` at `2px` offset on everything, never removed.

### 7.2 Pill badge

12px, weight 600, 6px/12px padding, `radius-full`.

- Default: `teal-100` fill, `teal-800` text — section eyebrows
- Alt: `indigo-50` fill, `indigo-700` text — category labels on cards
- New: `orange-100` fill, `orange-700` text — "New launch"
- Inverse: `rgba(255,255,255,.14)` fill, white text

### 7.3 Product card — the most-built component on the site

```
┌─────────────────────────────────┐
│ ┌─────────────────────────┐ (+) │  ← white card, radius-lg, shadow-card
│ │                         │     │     circular add-to-list button top-right
│ │      pack shot          │     │  ← image tray: card-tint fill, radius-md,
│ │                         │     │     24px padding, 4:3 box, object-contain
│ └─────────────────────────┘     │
│                                 │
│  CARDIOLOGY RANGE               │  ← pill badge, alt variant
│  Cardimax 10                    │  ← h3, slate-900, 600, 2-line clamp
│ ┌─────────────────────────────┐ │
│ │ Metoprolol Succinate 10mg   │ │  ← composition strip, 2-line clamp
│ └─────────────────────────────┘ │
│  Tablet  ·  10x10 Tablets       │  ← caption, slate-500
│                                 │
│  [ Send enquiry        ( ↗ ) ]  │  ← primary, full width
└─────────────────────────────────┘
```

The image tray is the important detail. Pharma pack shots are photographed on white; on a white card they dissolve. The `card-tint` tray with padding contains them and matches the reference language.

**Must survive:** a missing image (neutral pack placeholder, never a broken icon), a 90-character composition, a brand name wrapping to three lines. Fixed card height within a row, clamped text, reserved image box, buttons bottom-aligned via flex.

### 7.4 Range tile

White card, `radius-lg`, `shadow-card`. Circular arrow button top-right. Icon or small illustration, range name in `h3`, one-line description in `body-sm` `slate-600`, product count in `caption` `slate-500`. Hover lifts and fills the arrow badge.

Follows the Medvita departments grid. One tile per row may be rendered in `indigo-700` with white text as a visual anchor — use it on the homepage, not on the category index.

### 7.5 Filter chip / sidebar

Sidebar is a white card, `radius-lg`, sticky at 24px offset. Checkbox rows with 44px touch height.

Applied filters render above the grid as chips: `indigo-50` fill, `indigo-700` text, `radius-full`, with an × at 16px. A "Clear all" tertiary link follows them.

**Mobile:** sidebar becomes a bottom sheet — `radius-xl` top corners, `shadow-sheet`, drag handle, filter groups as accordions, sticky footer with "Clear" and "Show 14 products". The count updates live.

### 7.6 Spec table (product page)

Not a table visually. Label/value rows inside a white card, `card-tint` background on alternate rows, `radius-lg`. Label `caption` `slate-500`, value `body-sm` weight 500 `slate-900`. Product code value in `code` mono.

Mobile: same rows, stacked label-above-value, 12px gap.

### 7.7 Enquiry sheet

Desktop: centred modal, max 560px, `radius-xl`, `shadow-float`, `rgba(18,22,58,0.4)` backdrop.
Mobile: bottom sheet, 90vh, `radius-xl` top corners, drag handle, form scrolls inside, submit pinned to the bottom.

Top of the sheet carries a read-only product card — thumbnail, brand name, composition strip, product code — on `card-tint`, so the user can see what they're enquiring about.

Inputs: 48px, white fill, `1px slate-200`, `radius-md`. Focus: border `teal-600` plus focus ring. Error: border `#B3261E`, message in `caption` below. Labels above the field, `body-sm` weight 500. Icon-prefixed inputs as in the Medvita contact form are optional; if used, apply to every field or none.

### 7.8 Sticky mobile action bar

Product pages only, appears once the hero scrolls out. White, `shadow-sheet` upward, 12px padding, safe-area inset respected. `[ Send enquiry (↗) ]` full-width primary plus a 48px circular WhatsApp button. This is the main mobile conversion mechanism — build it in the first pass.

### 7.9 Stat card

White card, `radius-lg`, `shadow-card`. Small pill badge top-right naming the metric. Number in `stat`, `indigo-700`. Caption below in `caption` `slate-500`. Count-up on scroll into view, 1.2s, suppressed under reduced motion.

Follows the GeneX "Proven Efficiency in Numbers" block, including the staggered card heights on desktop.

### 7.10 Navigation

Utility bar: `indigo-700`, 36px, white text at 13px — location, phone, email. Mobile: collapses to click-to-call and WhatsApp.

Main nav: white, 76px, `shadow-nav` after 60px scroll. Logo left, links centre at `body-sm` weight 500 `slate-600`, active in `indigo-700` with a 2px `teal-500` underline. Right: search icon, enquiry-list icon with a `teal-500` count badge, and a primary pill CTA.

Dropdowns: white, `radius-lg`, `shadow-float`, 8px padding, 200ms fade + 6px rise.

Mobile drawer: full screen, white, accordion sections, search field pinned at the top, links at `h3`. Staggered in at 40ms.

### 7.11 Team, testimonial, customer

**Team card** — white, `radius-lg`, portrait in `radius-md` at 3:4, name `h4`, role `caption` `slate-500`, specialty pill, circular icon buttons for contact. Horizontal snap-scroll carousel on mobile.

**Testimonial** — white card, `radius-xl`, quote in `h4` weight 400 at 54ch, attribution below with name in weight 600 and role in `slate-500`. Optional portrait in a circle. Swipeable on mobile with dot indicators.

**Customer logos** — greyscale at 55% opacity on `card-tint` tiles, full colour on hover. Minimum six or the section hides.

### 7.12 Footer

`indigo-900`. Logo and one-line description, then link columns (Products, Company, Support), then contact block with address, phones, email, WhatsApp. Optional newsletter field as in Medvita. Bottom bar with copyright, privacy, terms, disclaimer, separated by a `rgba(255,255,255,.12)` hairline. Links `indigo-200`, white on hover.

---

## 8. Imagery

**Containers.** Every image sits in a rounded container — `radius-lg` standard, `radius-xl` for hero and feature blocks. Arch tops (a large top radius with square bottom) are permitted once per page, for a hero portrait, as in Medvita. Never a hard-edged full-bleed photograph.

**Pack shots.** On the `card-tint` tray described in §7.3, `object-fit: contain`, never cropped. Request pack shots on pure white so backgrounds can be knocked out consistently. If the client supplies photos on mixed backgrounds, budget an afternoon to mask them — inconsistent pack shots will undo the whole grid.

**Photography.** Cool, bright, clean — the register both references use. Facility, packaging, distribution, team. Desaturate slightly (85%) and lift shadows for consistency. Avoid stock imagery of doctors with patients; Medelis sells to distributors, not to patients.

**Icons.** Lucide, 1.5px stroke, 20px inline / 24px feature. `slate-500` default, `teal-500` when meaningful, `indigo-700` inside circular badges. Never filled, never a second icon family.

**Illustration.** The Medvita 3D gradient organs are attractive but wrong for a product catalogue — the products are the imagery. Skip them.

---

## 9. Motion

```
--ease-out    cubic-bezier(0.22, 1, 0.36, 1)
--dur-fast    160ms   hover, focus
--dur-base    220ms   dropdown, accordion, chip
--dur-slow    600ms   scroll reveal
```

| Effect | Spec |
|---|---|
| Scroll reveal | opacity 0→1, translateY 24→0, 600ms, `top 88%`, once |
| Stagger | 60ms increment, max 6 items |
| Card hover | translateY -2px + `shadow-card`→`shadow-hover`, 200ms |
| Arrow badge | translate 2px up-right, 160ms |
| Stat count-up | 1.2s easeOutExpo, once |
| Sheet | slide up 280ms `ease-out`, backdrop fade 200ms |
| Smooth scroll | Lenis, `lerp: 0.09` |

**Forbidden:** parallax, cursor followers, page-transition wipes, marquees, horizontal scroll-jacking, text scramble, video backgrounds.

**Reduced motion:** disable Lenis, replace reveals with a 120ms opacity fade, set count-ups to final value, remove card lift. JS guards matter more than the CSS media query, because GSAP writes inline styles CSS can't override — implement both.

---

## 10. Designing for 25 products

Per `01-project-context.md` §3, the catalogue launches with 25 SKUs across 6 ranges. Grids will hold 3–5 items, not 12.

- **Design the 4-item case first.** Every grid must look deliberate at 2, 3, 4 and 5 items.
- Cards do **not** stretch to fill a row. A 3-column grid with 4 items leaves one gap on the second row — that's correct and looks fine on a tinted canvas. Do not centre the orphan; left-align consistently.
- A category with fewer than 3 published products hides itself from nav, homepage and index. Automatic, by count.
- Homepage featured shows 6. Certifications, testimonials, customers, news and gallery sections all self-hide when empty — several will be at launch.
- Because there's less content, **whitespace has to carry more.** Section padding stays at the full 128px. The temptation to tighten it up because pages feel short is the wrong instinct; short and confident beats short and cramped.

---

## 11. Responsive

`sm` 375 · `md` 640 · `lg` 1024 · `xl` 1280. Container 1240px.

| Element | Desktop | Tablet | Mobile |
|---|---|---|---|
| Product grid | 3 col | 2 col | **2 col** |
| Range tiles | 3 col | 2 col | 2 col |
| Featured carousel | 4 visible | 3 | 1.4, snap |
| Filters | Sidebar card | Sidebar | Bottom sheet |
| Product hero | Image left / info right | Same | Stacked, gallery first |
| Product CTA | In hero | In hero | **Sticky bottom bar** |
| Nav | Full + dropdowns | Full | Drawer |
| Enquiry form | Modal 560px | Modal | Bottom sheet 90vh |
| Section padding | 128px | 96px | 72px |
| Card padding | 28px | 24px | 20px |

Touch targets 44×44px minimum. No horizontal overflow at 320px. Explicit image dimensions. Sticky elements never cover the last interactive element. Test on a real Android device.

Build the category and product templates at 375px before anything else.

---

## 12. Accessibility floor

- WCAG 2.1 AA on all text and interactive contrast. §3.7 lists the two colours needing care.
- Visible focus on every focusable element; never `outline: none` without a replacement.
- Full keyboard operation: dropdowns, accordions, filter sheet, enquiry sheet, carousel, drawer. Escape closes sheets and returns focus to the trigger.
- Sheets and modals trap focus while open and set `aria-modal`.
- Semantic landmarks, one `h1`, correct heading order.
- Alt text required in the CMS, defaulting to `{brandName} - {composition}`.
- Labels associated with inputs; errors via `aria-live`; never colour alone.
- Carousels are keyboard-navigable and don't auto-advance.
- `prefers-reduced-motion` respected per §9.

---

## 13. Do and don't

**Do**

- Keep the canvas tinted. White page = broken system.
- Put every image in a rounded container.
- Use the circular arrow consistently — it's the site's signature affordance.
- Let headings be genuinely large and body genuinely quiet.
- Keep the composition strip identical everywhere a product appears.
- Bottom-align card CTAs so rows stay even.

**Don't**

- Put a border on a card. The shadow and canvas do that job.
- Use orange as a fill with white text, or teal-500 for body text.
- Set composition strings in mono.
- Add a second accent colour.
- Copy the reference's 11px body text.
- Centre an orphan card in an incomplete grid row.
- Ship a section that's empty because the client hasn't supplied content — hide it.

---

## 14. Handoff checklist

- [ ] Vector logo received; three variants exported
- [ ] Tokens in Tailwind v4 `@theme`; canvas, card and shadow tokens verified against both references
- [ ] Plus Jakarta Sans + Geist Mono self-hosted via `next/font`, latin subset
- [ ] Type scale as fluid `clamp()`, not breakpoint jumps
- [ ] Circular arrow built once as a component with `size` and `variant` props
- [ ] Composition strip built once, used everywhere
- [ ] Product card tested with missing image, 90-char composition, 3-line brand name
- [ ] Every grid checked at 2, 3, 4, 5 items
- [ ] Contrast pairs verified in the built site, not just in Figma
- [ ] Keyboard and reduced-motion passes on home, category and product
