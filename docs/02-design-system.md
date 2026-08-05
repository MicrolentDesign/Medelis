# Medelis Healthcare — Design System

**Version:** 1.0
**Last updated:** 5 August 2026
**Scope:** Marketing website. Admin panel inherits tokens but not layout language.

Companion documents: [`01-context.md`](01-context.md) (why), `03-stack-and-setup.md` (how it gets built).

---

## 1. Direction

**The site should feel like a batch record, not a brochure.**

The most characteristic artifact in this client's world is the sterilization cycle chart — temperature, humidity, pressure and dwell time plotted across a few hours, signed off, filed, and produced on demand during an audit. That document is the product. The website should carry its qualities: precise, instrumented, unhurried, evidence-first.

Practically this means:

- **Numbers get typographic status.** Monospace numerals, given room. A stat is not a decoration, it is the argument.
- **Hairlines instead of shadows.** Shadows read consumer software. Thin rules read technical documentation.
- **Whitespace as confidence.** Cramped pages read as anxious. Generous vertical rhythm reads as a company with nothing to hide.
- **Colour used sparingly and meaningfully.** The palette is mostly neutral. Colour marks state and action, nothing else.

Deliberately avoided: warm cream + serif + terracotta (the current default look for anything "premium"), dark-mode-with-acid-accent, and stock-photo healthcare warmth. None belong to this subject.

### Signature element — the cycle strip

One memorable device, used with restraint. A hairline horizontal rule with tick marks and monospace stage labels, reading left to right in the actual order of a sterilization cycle:

```
├────────────┼──────────┼─────────────────┼──────────────┤
 PRECONDITION   VACUUM      GAS DWELL         AERATION
 10 h           45 min      6 h               12 h
```

Appears in three places and nowhere else:

1. **Hero** — animated draw-on at page load, left to right, ~1.2s, easing out. The site's opening statement is the process itself.
2. **"How it works" section** — becomes the structural spine of the four steps, with an orange marker travelling along it as the section scrolls.
3. **Section dividers** — a reduced version (rule + ticks, no labels) separating major page sections, replacing conventional `<hr>` treatments.

The tick positions are proportional to real cycle durations, so the strip encodes something true. That is the whole point — it is structure carrying information, not ornament. If the client supplies real cycle parameters, use them.

Optional micro-interaction, only if it can be done with taste: chemical indicator dots on the process steps that shift from unprocessed grey to processed teal as each step scrolls into view. Cut it if it feels cute.

---

## 2. Logo

The supplied logo carries five colours — lime green, orange, red, indigo, and a second green — on a pale blue plate. It is a print-era mark and it cannot function as a UI palette.

**Rules**

- Use the logo as supplied inside its own lockup. Do not recolour it, do not extract its colours into the interface beyond what §3 defines.
- Request vector (AI/EPS/SVG) from the client immediately. The supplied file is raster and will not survive retina display or a favicon.
- Produce three approved variants: full colour on light, monochrome indigo on light, monochrome white on indigo. Use the mono variants in the footer and any dark band.
- Minimum clear space equal to the height of the "M" on all sides. Minimum width 140px desktop, 110px mobile.
- The pale blue background plate is part of the raster file, not part of the brand. Strip it when the vector arrives.

**Colours deliberately not inherited**

- **Red `#ED1C24`** — in a sterilization context red signals hazard, contamination, or a failed indicator. Using it for anything positive is semantically wrong. It also sits on a display script that will not scale to UI text. Keep it inside the mark.
- **Lime green `#8CC63F`** — reads agricultural and consumer. Teal does the same job with authority.

> Asset condition and what to request from the client is recorded in [`../brand/README.md`](../brand/README.md). The supplied file is 1024 × 326 lossy JPEG with the pale blue plate baked into the pixels.

---

## 3. Colour

### 3.1 Ramps

**Indigo — anchor.** Derived from the "MEDELIS" wordmark. Dark sections, headings, primary action.

| Token | Hex | Use |
|---|---|---|
| `indigo-50` | `#F0F1F8` | Tinted section background |
| `indigo-100` | `#DDDFEF` | Subtle fill, disabled state |
| `indigo-200` | `#B9BDDC` | Borders on tinted surfaces |
| `indigo-300` | `#8E94C3` | — |
| `indigo-400` | `#6169A5` | Muted text on dark |
| `indigo-500` | `#3C4589` | Hover on primary |
| `indigo-600` | `#2B3475` | — |
| `indigo-700` | `#232A6B` | **Brand. Primary buttons, dark bands, H1** |
| `indigo-800` | `#1A2052` | Deep sections |
| `indigo-900` | `#12163A` | Footer |
| `indigo-950` | `#0A0C21` | Deepest |

**Teal — primary accent.** Evolved from the logo green. Sterile, calm, clinical. Carries links, active states, indicator "pass" states.

| Token | Hex | Use |
|---|---|---|
| `teal-50` | `#EAF7F4` | Success/notice background |
| `teal-100` | `#CBEDE5` | Badge fill |
| `teal-200` | `#98DBCC` | — |
| `teal-300` | `#5FC4AF` | Accent on dark backgrounds |
| `teal-400` | `#2BA891` | Icons on dark |
| `teal-500` | `#0E8F7A` | **Icons, large headings, decorative — not body text** |
| `teal-600` | `#0C7867` | Hover |
| `teal-700` | `#0B6053` | **Links and any text under 24px** |
| `teal-800` | `#0A4C43` | Text on teal-50 |
| `teal-900` | `#093E37` | — |

**Orange — restricted accent.** From the logo. Marks the current position, the active tick, the underline. Never a large surface.

| Token | Hex | Use |
|---|---|---|
| `orange-50` | `#FEF4EA` | Warning background |
| `orange-100` | `#FDE4CA` | — |
| `orange-300` | `#F9A65B` | Accent on dark backgrounds |
| `orange-500` | `#F58220` | **Brand orange. Cycle-strip marker, underline, icon accent** |
| `orange-600` | `#DC6A0E` | Hover |
| `orange-700` | `#B5510B` | **Any orange carrying white text, or orange text on white** |
| `orange-900` | `#743612` | Text on orange-50 |

The orange ramp is intentionally sparse. `orange-200`, `orange-400` and `orange-800` are undefined — do not reference them, and configure Tailwind so they fail loudly rather than resolving to nothing.

**Slate — neutral.** Does most of the work.

| Token | Hex | Use |
|---|---|---|
| `white` | `#FFFFFF` | Page |
| `slate-25` | `#FBFCFD` | Alternate section |
| `slate-50` | `#F5F7FA` | Card, alternate section |
| `slate-100` | `#EDF0F5` | Input fill |
| `slate-200` | `#DDE2EB` | **Default hairline border** |
| `slate-300` | `#C2CAD8` | Hover border, dividers on tint |
| `slate-400` | `#93A0B4` | Disabled text — see §3.5, not placeholders |
| `slate-500` | `#6B7A91` | Captions, meta — see §3.5 |
| `slate-600` | `#4E5B70` | **Secondary body text** |
| `slate-700` | `#3A4557` | — |
| `slate-800` | `#262E3C` | **Body text** |
| `slate-900` | `#161C26` | Headings on light |
| `slate-950` | `#0B0E14` | — |

### 3.2 Semantic tokens

Components reference these, never raw ramp values.

```
--surface-page          white
--surface-raised        slate-50
--surface-sunken        slate-25
--surface-inverse       indigo-700
--surface-inverse-deep  indigo-900

--text-primary          slate-900
--text-body             slate-800
--text-secondary        slate-600
--text-muted            slate-500
--text-on-inverse       white
--text-on-inverse-muted indigo-200
--text-link             teal-700
--text-link-hover       teal-800

--border-hairline       slate-200
--border-strong         slate-300
--border-inverse        rgba(255,255,255,0.14)
--border-focus          teal-600

--action-primary-bg     indigo-700
--action-primary-hover  indigo-500
--action-primary-text   white
--accent-marker         orange-500

--state-pass            teal-500
--state-warn            orange-700
--state-fail            #B3261E
```

### 3.3 Contrast — read this before overriding anything

Two brand colours fail WCAG AA in their obvious application. This is not negotiable and drove a real design decision.

Ratios below are **measured**, not estimated — computed from the hex values in §3.1 using the WCAG 2.1 relative-luminance formula. Re-measure if any token changes.

| Combination | Ratio | Verdict |
|---|---|---|
| `indigo-700` on white | 13.0:1 | Pass AAA |
| White on `indigo-700` | 13.0:1 | Pass AAA |
| `slate-800` on white | 13.6:1 | Pass AAA |
| `slate-600` on white | 6.9:1 | Pass AA — just short of AAA (7.0), do not claim AAA |
| `teal-500` on white | **4.0:1** | **Fails AA for body text.** Large text (≥24px) and icons only |
| `teal-700` on white | 7.5:1 | Pass AA — use for links |
| White on `orange-500` | **2.6:1** | **Fails everything.** Never do this |
| White on `orange-700` | 5.1:1 | Pass AA |
| `orange-500` on white | 2.6:1 | Fails. Decorative shapes only, never text |
| `teal-300` on `indigo-700` | 6.2:1 | Pass AA |

**Consequence: the primary button is indigo, not orange.** Orange at brand value cannot carry white text. Darkening it to `orange-700` to make it legal produces a muddy rust that looks nothing like the logo. Indigo is higher contrast, more disciplined, and stops the site reading like a consumer app. Orange stays as the accent marker, where its job is to catch the eye at small scale — which is exactly what a low-contrast bright colour is good at.

### 3.4 Colour usage rules

- No gradients. One permitted exception: a single `indigo-900 → indigo-950` vertical wash behind the footer, if it helps.
- Maximum one inverse (indigo) section per screenful. Two dark bands stacked kills the rhythm.
- Section backgrounds alternate `white → slate-50 → white`. Never three consecutive white sections without a hairline divider or the cycle strip between them.
- Teal and orange never appear in the same component. They are different registers — teal is state, orange is attention.

### 3.5 Assignments that fail — resolve before build

§10 commits to WCAG 2.1 AA on all text, verified before every client review. Three token assignments in §3.1–§3.2 break that commitment. All three are measured, none is a matter of taste, and each needs a decision before component work starts. **These are open items, not settled design.**

| # | Assignment | Measured | Needs | Verdict |
|---|---|---|---|---|
| 1 | `slate-500` as `caption` (13px), `stat-label` (12px), `--text-muted` | 4.36 on white · 4.06 on `slate-50` · 3.82 on `slate-100` | 4.5 | **Fails on every surface** |
| 2 | `slate-400` as placeholder text on `slate-100` input fill | 2.32 | 4.5 | **Fails badly** |
| 3 | `orange-500` 2px underline as the sole active-nav indicator | 2.59 on white | 3.0 (WCAG 1.4.11) | **Fails** |

**1 — Muted text.** This is the widest-reaching of the three. `slate-500` carries stat captions, image credits, form helper text, testimonial role and organisation, and every `caption` on the site. Reassigning `--text-muted` and both mono label tokens to **`slate-600`** clears it everywhere: 6.88 on white, 6.41 on `slate-50`, 6.02 on `slate-100`. Hierarchy survives — body text at `slate-800` is 13.65, so the separation is still obvious. `slate-500` then survives only as a non-text tint.

**2 — Placeholders.** Disabled controls are exempt from contrast requirements under WCAG 1.4.3; placeholder text is not. The `slate-400` token is doing both jobs, and only the disabled half is legal. Split it: keep `slate-400` for disabled state, move placeholders to **`slate-600`** (6.02 on `slate-100`). `slate-500` does not rescue this either — it measures 3.82 on the input fill. Worth noting §6 already puts a persistent `<label>` above every field, so placeholders are supplementary rather than load-bearing, which is the right pattern regardless.

**3 — Active nav.** As specified, the current page is indicated by orange alone, which fails 1.4.11 at 2.59 and also contradicts §10's own "never rely on colour alone to signal state". Two fixes, best applied together:

- Shift the active link's text to weight 500 and `indigo-700`, so the underline becomes supplementary rather than the sole carrier of state. This resolves the "colour alone" problem properly.
- If the underline must remain the primary cue, `orange-600` measures 3.44 and passes. `orange-500` cannot be made to pass on white.

The first is preferable — it keeps brand orange at full value where §3.3 argues it belongs.

**Watch item, interpretive rather than clear-cut.** Text inputs are identified by a `slate-100` fill (1.14 against the white page) and a `slate-200` border (1.30). Both are far below 3:1. No slate token below `slate-500` reaches 3:1 as a border on white, so honouring 1.4.11 strictly would mean abandoning the hairline treatment on form fields specifically — a real conflict with §5. With a persistent visible label and a compliant focus ring, a labelled input is defensible under 1.4.11 and most audits accept it. Flagged because it is the one place where the hairline aesthetic and the accessibility floor genuinely pull against each other, and it is better to have taken the decision knowingly than to meet it in an audit.

---

## 4. Typography

### 4.1 Faces

| Role | Face | Weights | Source |
|---|---|---|---|
| Display + UI | **Geist** | 400, 500, 600 | Google Fonts / `geist` npm |
| Data, labels, eyebrows | **Geist Mono** | 400, 500 | Google Fonts / `geist` npm |

Geist is a neutral grotesque built for technical interfaces. It has the engineered, slightly instrumented quality this brief needs without tipping into coldness, and it is not Inter — which is now the house default across half our projects and would make this site look like the last three.

Geist Mono is doing real work here, not decoration. Every certificate number, cycle parameter, capacity figure, turnaround time and stat label is set in mono. Tabular numerals in a specification context read as measured rather than claimed.

**Approved alternates** if the client rejects Geist: *Instrument Sans + IBM Plex Mono* (warmer, more institutional) or *Schibsted Grotesk + JetBrains Mono* (sharper, more editorial). Do not substitute Poppins, Outfit, Montserrat, or any geometric humanist — wrong industry entirely.

Only two body weights ship: 400 and 500. 600 is reserved for display sizes above 36px. Nothing is ever 700.

### 4.2 Scale

Fluid between 375px and 1440px viewport.

| Token | Size (min → max) | Line height | Tracking | Weight | Use |
|---|---|---|---|---|---|
| `display` | 40 → 68px | 1.05 | -0.03em | 600 | Hero H1 only |
| `h1` | 34 → 52px | 1.10 | -0.025em | 600 | Page titles |
| `h2` | 28 → 38px | 1.15 | -0.02em | 500 | Section headings |
| `h3` | 22 → 26px | 1.25 | -0.015em | 500 | Card titles, sub-sections |
| `h4` | 18 → 20px | 1.35 | -0.01em | 500 | Small headings |
| `lead` | 18 → 21px | 1.55 | -0.005em | 400 | Hero sub, section intros |
| `body` | 16 → 17px | 1.65 | 0 | 400 | Default |
| `body-sm` | 15px | 1.6 | 0 | 400 | Dense areas, cards |
| `caption` | 13px | 1.5 | 0 | 400 | Meta, image credits |
| `eyebrow` | 12px | 1.2 | **0.12em, uppercase** | 500 | **Geist Mono.** Section labels |
| `stat` | 36 → 52px | 1.0 | -0.02em | 500 | **Geist Mono, tabular.** Numbers |
| `stat-label` | 12px | 1.4 | 0.06em, uppercase | 400 | **Geist Mono.** Stat captions |
| `data` | 14px | 1.5 | 0.02em | 400 | **Geist Mono.** Cert numbers, parameters |

Body copy max width **68ch**. Lead paragraphs **56ch**. Never full-bleed text.

Eyebrow labels are the one place uppercase is allowed. Everything else is sentence case — headings, buttons, nav, labels, all of it.

### 4.3 Rules

- One H1 per page, always the page's actual subject.
- Do not skip heading levels for visual reasons; use the token, keep the semantic tag correct.
- Mono is for values and labels, never for prose. A paragraph in Geist Mono is a mistake every time.
- Enable `font-variant-numeric: tabular-nums` globally on `.font-mono` so stat columns align.
- No text over busy imagery without a solid or 80%-opacity indigo scrim.

---

## 5. Space, shape, elevation

**Spacing scale** (4px base): 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160.

**Section padding:** 128px desktop / 96px tablet / 72px mobile, vertical. Hero gets 160px top on desktop.

**Container:** max 1240px, 24px gutter mobile, 40px tablet, 64px desktop. A narrow variant at 760px for article bodies.

**Grid:** 12 column, 24px gutter desktop; 8 column tablet; 4 column mobile.

**Radius**

| Token | Value | Applied to |
|---|---|---|
| `radius-sm` | 6px | Badges, tags, small controls |
| `radius-md` | 8px | Inputs, selects, textareas |
| `radius-lg` | 12px | Cards, panels, images |
| `radius-xl` | 16px | Large feature panels |
| `radius-full` | 999px | Nothing except the WhatsApp float and avatar images |

Buttons use `radius-md`, not pills. Pills read consumer.

**Borders and elevation**

The system uses hairlines, not shadows.

- Default border: `1px solid slate-200`.
- Hover: border moves to `slate-300`, background to `slate-25`. No lift, no shadow.
- Two permitted shadows, both tiny: dropdown menus and the sticky nav after scroll.
  - `shadow-menu: 0 4px 16px rgba(11,14,20,0.08), 0 1px 2px rgba(11,14,20,0.04)`
  - `shadow-nav: 0 1px 0 rgba(11,14,20,0.06)`
- Cards never have shadows. If a card needs to feel raised, change its background to `slate-50` and keep the hairline.

---

## 6. Components

### Buttons

| Variant | Fill | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `indigo-700` | white | none | `indigo-500` |
| Secondary | transparent | `indigo-700` | `1px slate-300` | border `indigo-700`, bg `indigo-50` |
| Tertiary / link | none | `teal-700` | none | underline, `teal-800` |
| Inverse (on dark) | white | `indigo-700` | none | `indigo-50` |
| Inverse ghost | transparent | white | `1px rgba(255,255,255,.3)` | bg `rgba(255,255,255,.08)` |

Sizes: sm 36px / md 44px / lg 52px height. Horizontal padding 1.4× the vertical. `radius-md`. Weight 500. Sentence case, always.

A right-pointing arrow may accompany primary and tertiary buttons; it translates 3px right on hover, 180ms. That is the only button animation.

Focus ring on every interactive element: `2px solid teal-600`, `2px` offset. Never removed.

### Cards

`white` or `slate-50` background, `1px slate-200`, `radius-lg`, 28px padding. Optional 3px top edge in `teal-500` for service cards only, to give the service grid a distinguishing mark. Hover: border to `slate-300`, background to `slate-25`, 180ms.

Anatomy: eyebrow (mono) → H3 → body-sm → link with arrow.

### Navigation

Transparent over the hero on the homepage; solid white with `shadow-nav` and `1px slate-200` bottom border after 60px of scroll. Solid white from the start on every other page.

Height 76px desktop, 64px mobile. Nav links `body-sm`, weight 400, `slate-800`; active item carries a 2px `orange-500` underline offset 6px below the baseline — **see §3.5 item 3, this needs a second non-colour cue.** Dropdowns are simple panels — `white`, `radius-lg`, `shadow-menu`, 8px padding, 200ms fade-and-rise 6px.

Mobile: full-screen overlay, `indigo-900` background, white links at `h3` size, accordion for nested items, stagger in at 40ms intervals.

### Forms

Inputs: 48px height, `slate-100` fill, `1px slate-200`, `radius-md`, 14px horizontal padding. Focus: fill to white, border to `teal-600`, plus the focus ring. Error: border `#B3261E`, message below in `caption`, `#B3261E`.

Labels sit above the field, `body-sm` weight 500, `slate-800`. Required marked with a `teal-700` asterisk. Helper text below in `caption`, `slate-500` — **see §3.5 item 1.** Placeholder text: **see §3.5 item 2, not `slate-400`.**

Multi-step quote form: mono step indicator (`01 / 02`) with a hairline progress rule, orange marker at the current position — the cycle strip again, doing a second job.

### Accordion (FAQ)

Full-width rows separated by `1px slate-200` hairlines, no card, no background. Question in `h4`, weight 500. Plus/minus icon right-aligned, rotating 45° on open, 200ms. Answer body reveals with a height transition, 240ms, `cubic-bezier(0.22,1,0.36,1)`. One open at a time on mobile, multiple allowed on desktop.

### Stat block

Mono numeral at `stat` size in `indigo-700`, unit in `h4` beside it in `slate-500`, label below in `stat-label` mono uppercase `slate-500` — **see §3.5 item 1.** Separated by vertical hairlines on desktop, stacked with horizontal hairlines on mobile. Count-up animation on scroll into view, 1.2s, `easeOutExpo` — suppressed under `prefers-reduced-motion`.

### Certification card

The most important component on the site. Give it room.

Certificate logo (max 48px tall, greyscale by default, full colour on hover) → certification name in `h4` → issuing body in `caption` → **certificate number in `data` mono** → validity dates in `caption` → optional "View certificate" link opening the PDF. `slate-50` background, hairline, `radius-lg`, 32px padding.

The certificate number in monospace is the entire point. It says: this is checkable.

### Testimonial

No quotation marks graphic, no avatar circle, no card. Quote set in `h3` weight 400 at 56ch, a short `orange-500` rule above it, attribution below in `body-sm` — name in weight 500, role and organisation in `slate-500`. Restraint reads as real.

### Logo wall

Greyscale at 55% opacity, full colour at 100% on hover, 200ms. Uniform optical sizing — normalise by visual weight, not by bounding box. Minimum six logos or the section is cut.

### Footer

`indigo-900`. Four columns: logo + one-line description + certifications strip / services / company / contact. Bottom bar with copyright, privacy, terms, separated by a `border-inverse` hairline. Links `indigo-200`, white on hover.

---

## 7. Imagery

This is where the site will succeed or fail, and it is entirely dependent on the client.

**Direction:** real facility photography, shot or graded cool. Chamber doors, loading trolleys, cleanroom interiors, packaging and sealing, indicator strips, gowned staff mid-task, documentation on a desk. Process, not portraits. Nobody smiling at the camera.

**Grade:** desaturate to roughly 40%, cool the shadows toward `indigo-800`, lift midtones slightly. Applied consistently, this makes source photos of mixed quality look like one deliberate system. Implement as a CSS filter layer plus a 12% `indigo-900` overlay so it can be tuned in one place rather than baked into the assets.

**Composition:** wide crops, generous negative space for text overlay, subject off-centre. 16:9 for section imagery, 3:2 for cards, 21:9 for full-bleed bands.

**If the client cannot supply photography** — and they may not be able to, cleanrooms are hard to shoot — do not fall back on stock. Use the process diagrams, cycle charts, and the signature strip as the visual system, and let typography and whitespace carry the page. An honest diagram beats a fake photograph in this sector every single time.

Placeholder sourcing for the preview build is covered in `03-stack-and-setup.md` §5. Placeholders are always labelled as such in client review.

**Icons:** Lucide, 1.5px stroke, 20px inline / 24px feature. Never filled. Never two icon families. Icons are `slate-500` by default, `teal-500` when they carry meaning.

---

## 8. Motion

Motion is restraint-first here. The subject is a controlled, validated process; a bouncy website contradicts the argument.

**Tokens**

```
--ease-out    cubic-bezier(0.22, 1, 0.36, 1)
--ease-in-out cubic-bezier(0.65, 0, 0.35, 1)
--dur-fast    140ms   hover, focus, small state
--dur-base    220ms   accordion, dropdown, tab
--dur-slow    600ms   scroll reveal
--dur-hero    1200ms  cycle strip draw-on, once
```

**Permitted**

| Effect | Spec |
|---|---|
| Scroll reveal | opacity 0→1, translateY 24→0, 600ms `ease-out`, trigger at `top 88%`, fire once |
| Staggered children | 60ms increment, maximum 6 items, then reveal as a group |
| Stat count-up | 1.2s, easeOutExpo, once |
| Cycle strip draw | `stroke-dashoffset` 1200ms `ease-out`, hero only, once on load |
| Cycle marker travel | scrubbed to scroll progress within the "How it works" section only |
| Button arrow | translateX 3px, 140ms |
| Nav state change | background + border, 200ms |
| Smooth scroll | Lenis, `lerp: 0.09` — marginally slower than our usual 0.1; this site wants weight |

**Forbidden**

Parallax on imagery. Cursor followers. Page-transition wipes. Marquees. Horizontal scroll-jacking. Text scramble effects. Anything that moves without being scrolled or hovered. 3D. Video backgrounds.

**Reduced motion:** under `prefers-reduced-motion: reduce`, disable Lenis entirely, replace every reveal with a 120ms opacity fade, set count-ups to their final value immediately, and freeze the cycle strip in its drawn state. This is a compliance-selling website; failing an accessibility check would be embarrassing.

---

## 9. Responsive

| Breakpoint | Width | Behaviour |
|---|---|---|
| `sm` | 375–639 | Single column. Nav collapses. Sections 72px vertical padding. Display type at scale minimum. |
| `md` | 640–1023 | Two-column grids. Stats 2×2. Section padding 96px. |
| `lg` | 1024–1279 | Full nav. Three-column grids. Section padding 128px. |
| `xl` | 1280+ | Container caps at 1240px. Four-column grids where appropriate. |

Touch targets minimum 44×44px. The quote form must be genuinely usable one-handed on a phone — a plant manager will fill it in from the factory floor. Test the file upload on real iOS and Android, not in a device emulator.

---

## 10. Accessibility floor

Non-negotiable, verified before every client review.

- WCAG 2.1 AA on all text and interactive contrast. See §3.3 for the two colours that need care, and **§3.5 for the three assignments that currently fail it.**
- Visible focus indicator on every focusable element. Never `outline: none` without a replacement.
- Full keyboard operability: nav dropdowns, accordion, multi-step form, mobile menu, modal dismissal on Escape.
- Semantic landmarks: `header`, `nav`, `main`, `footer`, one `h1`, correct heading order.
- Every image has meaningful alt text, or `alt=""` if purely decorative. Alt text is a required field in the CMS.
- Form fields have associated `<label>`s. Errors announced via `aria-live`. Never rely on colour alone to signal an error state.
- `prefers-reduced-motion` respected as specified in §8.
- Tested with keyboard only, and with VoiceOver or NVDA on the homepage and the quote form at minimum.

---

## 11. Do and don't

**Do**

- Put a number on the page wherever a number exists.
- Let sections breathe. If in doubt, add 32px.
- Use the mono face for anything that could appear in a document.
- Keep dark bands to one per screenful.
- Cut a section rather than fill it with placeholder content the client will never replace.

**Don't**

- Use orange as a large fill or with white text.
- Add a shadow to a card.
- Set body copy in teal-500.
- Use stock photography of smiling clinicians.
- Add a second accent colour "for variety".
- Use icons and an illustration style and photography in the same section.
- Ship a logo wall with four logos.

---

## 12. Handoff checklist

- [ ] Vector logo received; three variants exported (colour / indigo / white)
- [ ] **§3.5 resolved — muted-text token, placeholder token, active-nav indicator**
- [ ] Colour tokens implemented as CSS custom properties, mapped into Tailwind `@theme`
- [ ] Geist + Geist Mono self-hosted via `next/font`, subset to latin
- [ ] Type scale implemented as fluid `clamp()` utilities, not fixed breakpoint jumps
- [ ] Cycle strip built as a single reusable component with a `variant` prop (hero / process / divider)
- [ ] Contrast pairs in §3.3 verified in the built site, not just in Figma
- [ ] `prefers-reduced-motion` path tested
- [ ] Keyboard pass on homepage and quote form
- [ ] Placeholder imagery clearly flagged in the client preview
