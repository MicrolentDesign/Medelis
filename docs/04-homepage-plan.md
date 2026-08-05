# Medelis Healthcare — Homepage Plan

**Version:** 1.0
**Last updated:** 5 August 2026
**Status:** Structure is buildable now. Copy is not — see §2.

Turns [`01-context.md`](01-context.md) §6's twelve-section order into a build specification. Reads against [`02-design-system.md`](02-design-system.md) for components and [`03-stack-and-setup.md`](03-stack-and-setup.md) for the component split.

---

## 1. The governing idea

The homepage has one job: convince a professionally paranoid QA head, inside about four screens, that Medelis's paper trail would survive their audit. Everything below that is secondary.

That produces a structural rule the rest of this document follows:

> **Every section is self-suppressing.** A section renders only if the facts it needs exist. If they do not, it is omitted from the page entirely — not filled, not faked, not stubbed with lorem.

Design system §11 already says "cut a section rather than fill it with placeholder content the client will never replace." This makes that mechanical rather than a matter of discipline: `if (!data) return null`. The homepage becomes a composition of whatever is currently true, and it gets denser as the client answers questions. Nothing has to be rebuilt when facts arrive — it is data entry.

This matters because of §2.

---

## 2. Content readiness — read this before estimating

Eight of the twelve sections cannot be written today. Not "need polish" — cannot be written, because the facts do not exist in any document we hold.

| # | Section | Depends on | Status |
|---|---|---|---|
| 1 | Hero | Modalities (context §1.1) | **Blocked** — the H1 names a modality |
| 2 | Credibility strip | Certifications, years, batch/device/client counts (§1.2) | **Blocked** — all five values |
| 3 | What we sterilize | Modalities, material compatibility (§1.1) | **Blocked** |
| 4 | How it works | Turnaround SLA (§1.4) | Partial — the four steps are structural |
| 5 | Quality & compliance | Certificate numbers, validation, testing (§1.2, §1.5, §1.6) | **Blocked** |
| 6 | Industries | Nothing — we define the segments | **Ready** |
| 7 | Facility by the numbers | Chamber count, capacity, cleanroom class (§1.3) | **Blocked** |
| 8 | Client logos | Written permission, minimum six (§1.8) | **Blocked** + conditional |
| 9 | Testimonials | Attributed quotes with permission (§1.8) | **Blocked** |
| 10 | Insights preview | Blog posts — seed list in context §9 | **Ready** — see note |
| 11 | FAQ | Mixed: some generic, some need §1 answers | Partial |
| 12 | Quote CTA | Phone, WhatsApp number | Blocked on contact details only |

**Two ready, two partial, eight blocked.** Context §1 asserts these unknowns "block copywriting"; this is the specific accounting. Send that consolidated list before anyone writes a word of section 1, 2, 3, 5 or 7.

The one piece of good news is section 10. The twelve seed posts in context §9 are about ISO 11135, IQ/OQ/PQ, residual limits and cycle design — general technical subject matter that needs no Medelis-specific facts at all. That content can be written immediately, it is the strongest available proof of competence, and it is the only substantial thing on this list not gated on the client. **Start the insights content now, in parallel.** It also de-risks section 10 being an empty three-card grid at first review.

---

## 3. Section-by-section

Background assignments are verified against design system §3.4 in [§4](#4-background-rhythm).

### 1 — Hero

**Job:** state the category and the standard in one screen.
**Background:** white. Nav transparent over it, per design system §6.

**Composition**

- `eyebrow` (mono) — category line, e.g. `CONTRACT STERILIZATION · [[STATE]], INDIA`
- H1 at `display` — names service and modality
- `lead` at 56ch — one sentence on the standard, not the service
- Primary button "Request a quote" (indigo) + tertiary "Download capability statement"
- `CycleStrip variant="hero"`

**The H1 is the blocked item that blocks the most.** It cannot be written until §1.1 is answered, so here are pre-staged options — pick on the day the answer arrives rather than reopening the conversation:

| If the client offers | H1 |
|---|---|
| EtO only | Validated ethylene oxide sterilization for medical device manufacturers. |
| EtO + one other | Contract sterilization, validated to ISO 11135 and documented for audit. |
| Three or more modalities | Contract sterilization services, validated and documented for every batch. |
| Modality still unclear | *Do not ship a hero.* Build the page starting at section 3. |

Each names the service, carries a standard, and asserts nothing unverifiable. None uses a word from context §4's banned list.

**Recommendation: type-led hero, no photograph.** Three reasons that happen to align — design system §1 argues whitespace reads as confidence; a text LCP element comfortably meets the < 2.0s mobile budget in stack §8 where a hero image would fight for it; and it sidesteps the placeholder-imagery risk in stack §5.1 entirely at the single most scrutinised point on the site. If the client later supplies genuine facility photography, it earns a place in section 7, where a specification-led caption can carry it.

**Motion:** cycle strip draws on mount, 1200ms, once. Hero text does not reveal-on-scroll — it is already in view.

### 2 — Credibility strip

**Job:** kill doubt above the fold-and-a-half.
**Background:** white, bounded by hairlines top and bottom. Reads as an instrument panel attached to the hero rather than a section in its own right.

**Composition:** four to five `Stat` blocks, mono numerals, separated by vertical hairlines on desktop and horizontal on mobile. Certification marks inline if available.

**Content needed:** ISO marks, years operating, batches processed, devices sterilized, client count. All five unknown.

**Suppression rule — this section needs a floor, not just an on/off switch.** A credibility strip with two numbers is weaker than no credibility strip, the same argument context §6 makes about a four-logo wall. Proposed: **render only with three or more verified values.** Below that, suppress and let section 5 carry the proof. Confirm the threshold; three is a judgement, not a derivation.

**Motion:** count-up on scroll into view, 1.2s, once, suppressed under reduced motion.

### 3 — What we sterilize

**Job:** answer "can you handle my product".
**Background:** `slate-50`. Cards white, so they lift off it with hairlines only.

**Composition:** four to six `Card`s in a 3-column grid (2 at `md`, 1 at `sm`), each with the optional 3px `teal-500` top edge that design system §6 reserves for service cards. Anatomy per card: mono eyebrow (modality) → H3 → `body-sm` covering typical products and materials → link with arrow to the service detail page.

**Content needed:** modality list, typical products, material compatibility. Blocked.

**Note:** card count follows the modality answer. If the client offers one modality, this section becomes a single card, which looks broken — restructure it as a two-column feature panel instead. Decide once §1.1 lands.

### 4 — How it works

**Job:** remove the fear of handing over control. This is pillar 2 from context §4, and for the founder persona it is the most important section on the page.
**Background:** white. Separated from section 5 by a `CycleStrip variant="divider"`.

**Composition:** `CycleStrip variant="process"` as the structural spine, with the four steps from context §6 hung off it — enquiry & spec review → pickup & preconditioning → validated cycle → release with documentation.

**Motion:** orange marker scrubbed to section scroll progress, `scrub: 0.5`. Steps reveal with a 60ms stagger. The optional chemical-indicator dots from design system §1 belong here if anywhere — build the section without them first and judge afterwards.

**Content needed:** step descriptions are writable now from general practice. Turnaround figures are not. Write the steps, leave the durations as data.

**This section contains a real problem — see [§8.1](#81-the-cycle-strip-states-process-parameters-as-fact).**

### 5 — Quality & compliance

**Job:** the proof block. Pillar 1. The QA head reads this or leaves.
**Background:** white — the `CertificationCard` is itself `slate-50`, so a tinted section would flatten it.

**Composition:** three to four `CertificationCard`s, then a single tertiary link to the full Quality page. Design system §6 calls this the most important component on the site and instructs 32px padding and room; honour that over fitting more cards in.

**Content needed:** certification name, issuing body, **certificate number**, validity dates, PDF. Blocked on §1.2.

Design system §6 is explicit that "the certificate number in monospace is the entire point — it says: this is checkable." Which means a `CertificationCard` without a number is not a degraded version of this component, it is a different and much weaker one. **Do not render certification cards without numbers.** If the client supplies logos but withholds numbers, that is a conversation to have, not a gap to design around.

**Do not decorate this section.** Design system §6 and context §6 both say so independently, which is a reasonable signal.

### 6 — Industries

**Job:** segment self-identification.
**Background:** `slate-50`.

**Composition:** four to five tiles — device manufacturers, hospitals & CSSD, pharma & labs, exporters — each linking to its landing page. Tile is a `Card` without the teal top edge, so it reads as navigation rather than as a service.

**Content needed:** none. **This section is fully buildable today**, and it is the natural place to start.

### 7 — Facility by the numbers

**Job:** capacity reassurance for the procurement persona.
**Background:** white.

**Composition:** four to six `Stat` blocks plus one wide facility photograph at 21:9.

**Content needed:** chamber count, capacity in m³, cleanroom class, aeration, preconditioning, storage. Blocked on §1.3.

**The photograph is the one slot on this page where a placeholder is genuinely dangerous.** A section captioned with Medelis's own capacity figures, illustrated with a stock cleanroom, is the exact misrepresentation stack §5.1 rule 1 prohibits — and the proximity of real numbers to a borrowed image is what makes it read as a claim. Either real photography or no photograph; the stats and hairlines carry the section on their own. Suppress the image slot rather than filling it.

### 8 — Client logos

**Job:** social proof.
**Background:** `slate-50`.
**Conditional:** renders only with six or more logos *and* written permission on file for each. Context §6 is firm on this and design system §6 repeats it.

The admin module in context §8 has a "permission-on-file flag" — gate rendering on that flag, per logo, not on an editor's judgement. If fewer than six clear the gate, the section suppresses and section 9 expands, exactly as context §6 specifies.

### 9 — Testimonials

**Job:** human proof.
**Background:** white. If section 8 suppressed, this follows section 7's white directly — insert a `CycleStrip variant="divider"` between them to satisfy design system §3.4.

**Composition:** two to three, per design system §6 — no quote graphic, no avatar, no card. Quote at `h3` weight 400, 56ch, short `orange-500` rule above, attribution below.

**Content needed:** attributed quotes — name, role, organisation — with permission. Context §6 notes unattributed testimonials are worthless to this audience. Enforce it: **suppress any testimonial missing an attributed name and organisation.** Make those fields required in the CMS rather than trusting the editor.

### 10 — Insights preview

**Job:** depth signal and SEO surface.
**Background:** `slate-50`.

**Composition:** three latest posts as `Card`s — mono date eyebrow → H3 title → no excerpt. Titles from context §9's seed list are self-explanatory and an excerpt would dilute them.

**Content needed:** three published posts. Writable now. **Start here alongside section 6.**

### 11 — FAQ

**Job:** objection handling plus `FAQPage` schema.
**Background:** white.

**Composition:** six questions, `Accordion` per design system §6 — hairline rows, no cards, no background. Link to the full FAQ page.

**Content:** the six chosen for the homepage should be the six a QA head asks first. Roughly three are answerable now from general practice — what documentation accompanies a batch, how validation works, what a half-cycle overkill approach means. Three need client facts: turnaround, certifications held, whether testing is in-house. Ship with what is answerable and expand; an accordion with three rows is not embarrassing, whereas three rows of evasion is.

### 12 — Quote CTA

**Job:** convert.
**Background:** `indigo-700`. See [§8.2](#82-the-cta-band-and-the-footer-stack-two-dark-sections) for the adjacency problem this creates.

**Composition:** H2 at `text-on-inverse`, one `lead` line at `--text-on-inverse-muted`, inverse (white) primary button to `/request-a-quote`, phone and WhatsApp adjacent as inverse-ghost buttons.

**Recommendation: CTA only, no embedded form.** Context §6 row 12 leaves it open. Three reasons to close it as a CTA: the Tier 1 quote form in context §7 is deliberately long and two-step, and embedding it here means either truncating it into a weaker second capture or letting it dominate the page's closing band; context §7 requires a distinct thank-you URL per form for attribution, which an embedded partial submission muddies; and the long form's length is doing deliberate filtering work that a short homepage version would undo.

---

## 4. Background rhythm

Design system §3.4 sets two constraints: alternate `white → slate-50 → white`, and never three consecutive white sections without a hairline divider or the cycle strip between them. Verified sequence:

| # | Section | Background | Note |
|---|---|---|---|
| 1 | Hero | `white` | |
| 2 | Credibility strip | `white` | Hairline top and bottom — satisfies the two-consecutive-white allowance |
| 3 | What we sterilize | `slate-50` | Cards white |
| 4 | How it works | `white` | |
| 5 | Quality & compliance | `white` | Cycle-strip divider between 4 and 5 — permitted |
| 6 | Industries | `slate-50` | |
| 7 | Facility | `white` | |
| 8 | Client logos | `slate-50` | Conditional |
| 9 | Testimonials | `white` | Divider needed here if 8 suppressed |
| 10 | Insights | `slate-50` | |
| 11 | FAQ | `white` | |
| 12 | Quote CTA | `indigo-700` | Only inverse band on the page |

No three consecutive whites. One inverse section. Both §3.4 rules hold — **provided** the suppression rules in §3 do not collapse the sequence. Sections 2, 8 and 9 are the ones most likely to disappear, and 8 disappearing puts two whites either side of a gap. Build the background as a derived property of the *rendered* section list, not hardcoded per section, or the rhythm silently breaks the first time a section suppresses.

---

## 5. Components and the client/server split

Stack §8 requires server components by default. Homepage audit:

| Component | Boundary | Why |
|---|---|---|
| `Hero` | Server | Text only, under the type-led recommendation |
| `CycleStrip` | **Client** | GSAP draw and scrub |
| `CredibilityStrip` / `Stat` | **Client** | Count-up on scroll |
| `ServicesGrid`, `Card` | Server | Hover is CSS |
| `HowItWorks` | **Client** | Scrubbed marker |
| `QualityBlock`, `CertificationCard` | Server | Greyscale-to-colour is CSS |
| `IndustriesGrid` | Server | |
| `FacilityStats` | **Client** | Count-up |
| `LogoWall` | Server | Hover is CSS |
| `Testimonials` | Server | |
| `InsightsPreview` | Server | |
| `FaqSection` / `Accordion` | **Client** | Disclosure state |
| `QuoteCta` | Server | CTA only, per §3.12 — a form here would make it client |
| `Reveal` / `StaggerGroup` | **Client** | Thin wrappers; keep the wrapped children server |

Nine server, five client. The client components are exactly the ones design system §8 assigns motion or interaction to, which is the right correlation — no section is client-side for convenience.

`Reveal` wrapping server children is the pattern that keeps this budget: the wrapper ships to the browser, the content does not. Note the no-JS defect in stack §11 item 3 applies to every section here, since all twelve are wrapped.

---

## 6. Motion plan

Everything below is already permitted by design system §8. Nothing new is introduced.

| Section | Effect |
|---|---|
| 1 | Cycle strip draw, 1200ms, once on mount. No scroll reveal — already in view |
| 2 | Stat count-up, 1.2s, once |
| 3 | Card stagger, 60ms increment, max 6 |
| 4 | Marker scrub to section progress; steps stagger |
| 5 | Standard reveal. No stagger — restraint is the point |
| 6 | Tile stagger |
| 7 | Stat count-up; image standard reveal |
| 8 | Standard reveal, group not staggered |
| 9 | Standard reveal |
| 10 | Card stagger |
| 11 | Standard reveal; accordion 240ms on interaction |
| 12 | Standard reveal |

Twelve reveals down one page is at the upper limit of tasteful. If it reads as busy at first review, the credibility strip and FAQ are the two to drop to a plain fade — both are dense and neither benefits from movement.

**Reduced motion:** per design system §8, Lenis off, reveals become a 120ms opacity fade, count-ups snap to final value, cycle strip freezes drawn. Verify at first preview, not at handoff.

---

## 7. Mobile above-the-fold

375 × 812 is the smallest target in design system §9. Budget at that width, hero only:

| Element | Height |
|---|---|
| Nav | 64px |
| Section top padding (`sm`) | 72px |
| Eyebrow | ~15px |
| H1 at `display` minimum, 40px × 1.05, three lines | ~126px |
| Lead, 18px × 1.55, three lines | ~84px |
| Primary button (`lg`) | 52px |
| Secondary button, stacked | 44px |
| Cycle strip | ~64px |

That totals roughly 590px of the 812 before gaps, which leaves room but not much. Two consequences: **the H1 must hold at three lines or fewer on a 375px screen**, which is a hard constraint on the options in §3.1 — the longest of them should be measured before being chosen. And the two CTAs stack rather than sitting side by side; full-width, 12px gap.

The cycle strip on mobile drops labels below 375px and keeps ticks only, or it will not fit legibly. Its `divider` variant is already label-free, so the component supports this without a new variant.

---

## 8. Two problems this plan surfaces

### 8.1 The cycle strip states process parameters as fact

Design system §1 specifies the strip carries stage labels and durations — the worked example reads `PRECONDITION 10 h · VACUUM 45 min · GAS DWELL 6 h · AERATION 12 h` — and says "the tick positions are proportional to real cycle durations, so the strip encodes something true. That is the whole point." Stack §4.4 says to use those values as placeholders until the client supplies real ones, marked as placeholder in review.

In the hero, on a compliance-selling site, read by a QA head, those numbers are a specification. They are the first concrete claim the page makes.

The placeholder machinery in stack §5 does not cover this. The `PLACEHOLDER` ribbon in §5.4 is an image component; there is no equivalent for data, and the pre-launch `grep -r "/placeholder/"` check only catches image paths. So invented cycle parameters have no ribbon, no grep, and no purge step — while a stock photograph has all three. The weaker safeguard is on the more dangerous content, because §5's whole framing is about imagery.

**Recommendation:** the hero strip ships with ticks and stage *labels* but no durations until real parameters arrive. Stage names are generic process vocabulary and assert nothing specific; durations are a claim. Tick spacing in the label-only state should be visibly even, so it reads as a diagram rather than as measured data. The fully labelled strip then debuts in section 4, once the client supplies real numbers, which also gives that section something to earn.

Worth extending stack §5's placeholder policy to cover data, not just images, and adding a check that fails the build on any unreplaced parameter. Flagging rather than doing, since it changes a policy in someone else's document.

### 8.2 The CTA band and the footer stack two dark sections

Section 12 is `indigo-700` full-width. The footer immediately below it is `indigo-900` (design system §6). That is two dark bands adjacent, which design system §3.4 prohibits: "Maximum one inverse (indigo) section per screenful. Two dark bands stacked kills the rhythm."

This is structural — it falls out of context §6's ordering, so it will occur on every page that ends with the quote CTA, not just the homepage.

Three ways out:

1. **Accept it as a documented exception.** The rule's intent is mid-scroll rhythm; a page *ending* in a single dark mass is conventional and reads as a deliberate terminus rather than a stutter. Requires a `--border-inverse` hairline between band and footer so the two tones separate, and the design system amended to record the exception rather than leaving a rule the build openly violates.
2. **Make the CTA band `slate-50`** with an indigo primary button. Keeps the rule intact, costs the closing emphasis.
3. **Put section 11 (FAQ) after the CTA band.** Breaks the conversion logic — do not.

**Recommendation: option 1**, amended in design system §3.4 rather than silently breached. Option 2 is defensible if the client review says the ending feels heavy.

---

## 9. Where the client's dropped sections went

The approved scope PDF ([`00-client-requirements.md`](00-client-requirements.md) §2) lists two homepage features that context §6 does not carry. Context §10 does not record either omission, so this is the mapping to bring to the v1.1 conversation:

| PDF homepage feature | Where its job is done |
|---|---|
| #2 Company Introduction | Absorbed into section 1's lead line and section 2. A standalone "about us" block on the homepage serves none of the three personas in context §3 — all three want proof, not history. |
| #5 Why Choose Us | Distributed across sections 4, 5 and 7, one per messaging pillar. A generic differentiator block is exactly what context §4's tone rules forbid: assertions a competitor could paste onto their own site unchanged. |

Both substitutions are defensible on the strategy in context §3 and §4. Neither is defensible as a silent deletion — present the mapping.

---

## 10. Build order

Given §2, build in the order that is not blocked rather than top to bottom.

| Step | Work | Blocked? |
|---|---|---|
| 1 | `Section`, `Container`, `Reveal`, `StaggerGroup`, `Card`, `Button`, `Stat` | No |
| 2 | `CycleStrip`, all three variants, label-only per §8.1 | No |
| 3 | Section 6 Industries — end to end, first complete section | No |
| 4 | Section 10 Insights, alongside writing the first three posts | No |
| 5 | Section 4 How it works — structure and copy, durations as data | Partial |
| 6 | Section 11 FAQ with the three answerable questions | Partial |
| 7 | Sections 1, 2, 3, 5, 7 | **Yes** — §1.1, §1.2, §1.3 |
| 8 | Sections 8, 9 | **Yes** — §1.8 permissions |
| 9 | Section 12 | Contact details only |

Steps 1–6 are roughly a working homepage skeleton with two genuinely finished sections, which is enough to prove the pipeline at stack §10 phase 1 and to hold the phase 2 design-language conversation. Steps 7–8 are data entry against components that already exist, *if* the self-suppressing architecture in §1 is respected from the start.

The critical path is not the build. It is the ten questions in context §1.
