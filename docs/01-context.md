# Medelis Healthcare — Project Context

**Client:** Medelis Healthcare
**Agency:** Microlent Systems, Jodhpur
**Document version:** 1.0
**Last updated:** 5 August 2026
**Status:** Pre-design. Scope document received from client, awaiting v1.1 sign-off.

This is the single source of truth for what this project is and why. Read this before touching design or code. `02-design-system.md` covers visual language; `03-stack-and-setup.md` covers the build.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Business | Contract / outsourced sterilization services for healthcare and medical device sectors |
| Deliverable | Marketing website + admin panel |
| Primary market | India (B2B), export-facing manufacturers a likely secondary |
| Client-supplied assets | Logo (raster, multi-colour), `Website_Features_Functional_Requirements.pdf` |
| Client-supplied reference | `sterisindia.com` — see §2, this is a problem |
| Build pipeline | Claude.ai planning → Claude Code assembly → Vercel preview → production |
| Preview requirement | Password-protected staging URL for client review at each milestone |

### Confirmed unknowns

These block copywriting and must be answered before content work starts. Send as a single consolidated list, not piecemeal.

1. Which sterilization modalities? EtO / ETO, steam/autoclave, gamma, e-beam, plasma? The requirements doc says "sterilization services" with no specificity.
2. Certifications actually held, with certificate numbers and validity dates. ISO 11135? ISO 13485? ISO 11737? CDSCO registration? NABL for any testing?
3. Facility specifics: chamber count and capacity in m³, cleanroom class, aeration capability, preconditioning room, quarantine/storage.
4. Turnaround SLA. What is the realistic pickup-to-delivery time?
5. Is validation (IQ/OQ/PQ) done in-house, partnered, or not offered?
6. Is bioburden / sterility / EO residual testing in-house, partnered, or not offered?
7. **What is "Product Development Consultation"?** Listed as a page in the requirements doc with zero definition. Packaging advice? Material selection for sterilization compatibility? Regulatory dossier support? Nobody can write this page as it stands.
8. Named client references and written permission to display logos.
9. Access for facility photography, or budget for a shoot.
10. Existing domain, existing site (if any), existing Google Business Profile.

---

## 2. The reference site problem

The client shared `sterisindia.com` as a reference. It is not a comparable business.

- `sterisindia.com` is **Steris Healthcare Pvt Ltd, Mumbai** — a pharmaceutical *product* supplier (cardiology, gastro, diabetic, neuro, uro ranges). It runs on a Boost360 / NowFloats templated CMS, has a shopping cart, product pricing, and an unfinished-website preview banner still visible in the markup.
- Medelis is a **services** business. Different funnel, different page types, different conversion.

The client most likely meant **`steris.in`** — Steris Surgical Solutions, an ISO 11135:2014-certified EtO sterilization outsourcing service with pickup/sterilize/deliver logistics. That *is* the category competitor.

**Action:** confirm with the client which they meant before anyone treats the reference as direction. Either way, do not inherit the catalogue architecture.

### Better references to work against

| Site | What to take from it |
|---|---|
| `steris.in` | Category-correct IA. Service scope, testimonial framing, WhatsApp-first enquiry (very India-appropriate). |
| `medistri.com` | The gold standard for how a sterilization company presents compliance. Clean, cold, specification-led. |
| `steris-ast.com` | Global scale reference. Industries-served segmentation is well modelled. |
| `sterigenics.com` | Facility network presentation, resource library, regulatory content depth. |

Steal the *rigour* from these, not the layout.

---

## 3. Who actually buys this

Three people decide, and they read the site differently. Every page should serve at least one of them explicitly.

**The QA / Regulatory head — the real decision-maker.**
Wants: ISO certificates, validation protocols, documentation standards, audit history, residual testing, traceability. Reads the Quality page first, or leaves. Is professionally paranoid; will assume you are non-compliant until shown otherwise. Cannot be charmed. **The site is written for this person.**

**The procurement / operations manager.**
Wants: turnaround time, capacity, logistics, cost predictability, location. Skims. Needs numbers visible without scrolling into prose. Converts via the quote form.

**The founder / plant head of a small device manufacturer.**
Wants: reassurance that outsourcing won't blow up their production schedule or their regulatory filing. Needs the process explained plainly. Converts via WhatsApp or phone.

Not a persona: a patient. Nobody in the general public is a customer here. Resist all copy and imagery that drifts toward consumer healthcare warmth.

---

## 4. Positioning

> Medelis is the sterilization partner a regulatory auditor would sign off on.

Three messaging pillars, in priority order. Every section on the site maps to one.

**1. Validated, not just performed.**
Anyone can run a chamber. The differentiator is documented, validated, repeatable process with a paper trail that survives an audit. Lead with protocol, not with capability.

**2. Your production schedule is safe.**
Outsourcing sterilization means handing over control of a critical path step. Address the fear directly: stated turnaround, capacity headroom, logistics, communication at each stage.

**3. One partner, whole path.**
Sterilization plus validation plus testing plus consultation, so the client isn't stitching together three vendors and reconciling three sets of documentation.

### Tone of voice

Precise, plain, unhurried. Short declarative sentences. Numbers wherever a number exists. Technical terms used correctly and without apology — the audience knows what a half-cycle overkill approach is, and using the term signals competence.

Never: "state-of-the-art", "world-class", "cutting-edge", "one-stop solution", "your trusted partner in health", exclamation marks, or any sentence a competitor could paste onto their own site unchanged.

Write in the second person about the reader's problem, first person plural about Medelis. "Your devices ship on schedule" beats "We deliver on time."

---

## 5. Information architecture

The client-approved doc lists 8 pages. It needs 12. The four additions are not nice-to-haves — three of them are where the deal is actually won.

### Approved in scope document

| # | Page | Notes |
|---|---|---|
| 1 | Home | Long-scroll, see §6 |
| 2 | About Us | Company, mission, leadership, infrastructure summary |
| 3 | Services | Listing / hub |
| 4 | Service detail | Templated, one per modality |
| 5 | Product Development Consultation | **Blocked** — needs definition, see §1.7 |
| 6 | Blog | Listing + article template |
| 7 | FAQ | Accordion, feeds FAQ schema |
| 8 | Contact | Form, map, direct lines |

### Proposed additions — flag as scope v1.1

| # | Page | Why it is not optional |
|---|---|---|
| 9 | **Quality & Compliance** | The single highest-value page on the site. Certifications with numbers, validation approach (IQ/OQ/PQ), monitoring (biological and chemical indicators), residual limits per ISO 10993-7, documentation supplied with every batch, audit readiness. Currently the doc buries all of this inside About Us, where nobody will find it. |
| 10 | **Industries served** | Device manufacturers / hospitals & CSSD / pharma & labs / exporters. Each segment has a distinct objection and a distinct search intent. Five clean landing pages, strong internal linking, meaningful SEO surface. |
| 11 | **Facility & infrastructure** | Chamber capacity, cleanroom class, aeration, preconditioning, storage, quarantine. Procurement buyers want specifications on a page they can screenshot into an internal approval deck. |
| 12 | **Resources / downloads** | Sample Certificate of Sterilization, brochure PDF, validation summary, capability statement. Gate the substantial ones behind an email field — this is the highest-intent lead source on the site. |

### Utility pages

Privacy policy, terms, 404, thank-you (one per form), sitemap.xml, robots.txt.

### Navigation

```
Logo    Services ▾    Industries ▾    Quality    Facility    Resources    About    [ Request a quote ]
                                                                                    ↑ persistent, indigo
```

- Services and Industries are simple dropdowns, not mega menus. There are fewer than seven items in each; a mega menu would be theatre.
- Blog, FAQ, Contact, Consultation live in the footer plus contextual in-page links. Nav must stay under eight top-level items.
- Sticky utility bar or floating WhatsApp button — India B2B converts on WhatsApp far more than on forms. Confirm the number with the client.

---

## 6. Homepage section order

Long-scroll, roughly 9–11 screens. Each numbered block is one full section with its own scroll reveal.

| # | Section | Job | Key content |
|---|---|---|---|
| 1 | Hero | State the category and the standard in one screen | H1 naming the service and modality, one-line sub, primary CTA "Request a quote", secondary "Download capability statement". Signature cycle-strip element (see design system §Signature). |
| 2 | Credibility strip | Kill doubt above the fold-and-a-half | ISO marks, years operating, batches processed, devices sterilized, client count. Mono numerals. Thin, quiet, factual. |
| 3 | What we sterilize | Answer "can you handle my product" | 4–6 cards. Modality + typical products + materials. Links to service detail pages. |
| 4 | How it works | Remove the fear of handing over control | 4 steps: enquiry & spec review → pickup & preconditioning → validated cycle → release with documentation. This is where the cycle-strip signature earns its place; the steps *are* the process order. |
| 5 | Quality & compliance | The proof block | Certification logos with numbers, three-line summary each, link to full Quality page. Do not decorate this section. Restraint here reads as confidence. |
| 6 | Industries | Segment self-identification | 4–5 tiles, each linking to its landing page. |
| 7 | Facility by the numbers | Capacity reassurance | 4–6 stats, mono numerals, one wide facility photograph. |
| 8 | Client logos | Social proof | **Only if** permission is secured and there are at least six. A four-logo wall is worse than none. Otherwise cut and expand testimonials. |
| 9 | Testimonials | Human proof | 2–3, attributed with name, role, organisation. Unattributed testimonials are worthless to this audience — push the client hard on this. |
| 10 | Insights preview | Depth signal + SEO | 3 latest posts. |
| 11 | FAQ | Objection handling + schema | 6 questions, accordion, link to full FAQ. |
| 12 | Quote CTA | Convert | Full-width indigo band. Form or strong CTA to `/request-a-quote`. Phone and WhatsApp adjacent. |

Note this moves client logos up from the requirements doc's ordering and treats it as conditional. Explain the reasoning to the client rather than silently changing it.

---

## 7. Conversion model

Three tiers of intent. The requirements doc collapses all of them into one contact form, which loses the high-intent traffic.

**Tier 1 — Request a quote** (primary, own page at `/request-a-quote`)
Fields: name, company, role, email, phone, product/device type, material, packaging type, units per batch, estimated cycles per month, pickup location (state/city), services needed (multi-select: sterilization, validation, testing, consultation), do you have an existing validation protocol (yes/no/unsure), notes, file upload for spec sheet (optional, 10MB, pdf/doc/jpg).

That is a long form. It is *supposed* to be. Length filters tyre-kickers and gives the sales team enough to quote without a discovery call. Break into two steps with a progress indicator.

**Tier 2 — Consultation enquiry** (on the Consultation page)
Short: name, company, email, phone, what stage is your product at, what you need help with.

**Tier 3 — General contact** (Contact page)
Name, email, phone, subject, message. Plus direct lines, WhatsApp, address, map, working hours.

**Tier 4 — Resource download** (gated)
Name, work email, company. Delivers the file by email so the address gets validated.

### All forms

- Honeypot field + Cloudflare Turnstile (not reCAPTCHA — Turnstile is free, faster, and less hostile to the user). The requirements doc says "CAPTCHA protection"; Turnstile satisfies it.
- Server-side validation, never trust the client.
- Notification email to Medelis + autoresponder to the submitter with expected response time.
- Every submission stored in the DB and exportable as CSV from the admin panel. Email-only delivery loses leads.
- Distinct thank-you URL per form so conversions are attributable in analytics.
- Rate limit per IP.

---

## 8. Admin panel / CMS

The requirements doc lists 10 admin modules. With the four new pages, add four more:

| Module | In doc | Notes |
|---|---|---|
| Dashboard | ✔ | Recent enquiries, quick stats. Keep it minimal; nobody logs in to look at a dashboard. |
| Manage pages | ✔ | Block-based editing for the static pages. |
| Manage services | ✔ | Title, slug, description, benefits (repeater), process steps (repeater), images, related industries, SEO fields. |
| Manage blogs | ✔ | Plus categories, tags, author, featured image, related posts. |
| Manage FAQs | ✔ | Question, answer (rich text), category, order. |
| Manage testimonials | ✔ | Quote, name, role, organisation, logo, order, published toggle. |
| Manage client logos | ✔ | Logo, name, order, permission-on-file flag. |
| Manage contact details | ✔ | Global — address, phones, WhatsApp, emails, hours, map embed. |
| View enquiry submissions | ✔ | **Add CSV export and per-form filtering.** |
| SEO management | ✔ | Per-entry meta title, description, OG image, canonical, noindex toggle. |
| **Manage certifications** | ✚ new | Name, issuing body, certificate number, valid from/to, scope, logo, PDF. Expiry-warning flag in the dashboard is a genuinely useful touch. |
| **Manage industries** | ✚ new | Same shape as services. |
| **Manage resources** | ✚ new | Title, description, file, gated toggle, download count. |
| **Manage facility stats** | ✚ new | Label, value, unit, order. Small module, avoids hardcoding numbers that change. |

CMS choice is open — see `03-stack-and-setup.md` §2. Decide before scaffolding, it changes the content modelling.

---

## 9. SEO plan

**Primary intent clusters**

| Cluster | Example queries | Target page |
|---|---|---|
| Service + geography | "eto sterilization services in [city]", "contract sterilization india" | Service detail, home |
| Compliance | "iso 11135 certified sterilization service", "validated eto sterilization india" | Quality & compliance |
| Segment | "sterilization services for medical device manufacturers" | Industry landing pages |
| Comparison / education | "eto vs gamma sterilization", "eto residual limits iso 10993-7", "how eto sterilization works" | Blog |
| Brand | "medelis healthcare" | Home |

**Blog seed list** — 12 posts, technical, written for the QA head, not for keyword volume. Depth is the differentiator; there is very little good Indian-market content in this niche.

1. EtO vs gamma vs steam: choosing a modality for your device
2. What ISO 11135:2014 actually requires of a contract steriliser
3. IQ, OQ, PQ explained for device manufacturers
4. Half-cycle overkill vs bioburden-based cycle design
5. EO residual limits under ISO 10993-7 and how they are tested
6. Packaging and material compatibility with EtO
7. Bioburden testing: why your cycle depends on it
8. Preparing for a CDSCO audit of your sterilization documentation
9. What documentation should accompany every sterilized batch
10. Sterilization for exporters: FDA and CE expectations
11. Turnaround planning: building sterilization into your production schedule
12. Sterile barrier systems and seal integrity

**Technical**

- `MedicalBusiness` + `Service` + `FAQPage` + `BreadcrumbList` + `Article` schema.
- One H1 per page, real heading hierarchy.
- Slugs: `/services/eto-sterilization`, `/industries/medical-device-manufacturers`, `/insights/eto-vs-gamma-sterilization`. Use `/insights` rather than `/blog` — better register for this audience.
- XML sitemap, robots.txt, canonical tags, image alt text (in the CMS, enforced as required).
- **Preview environment must be `noindex` and password protected.** See `03-stack-and-setup.md` §6.
- Google Business Profile with the facility address, if the client will allow the address public.

---

## 10. Scope delta — send to client as v1.1

Present as an addendum to the approved document, with rationale, not as a fait accompli.

**Added pages:** Quality & Compliance, Industries served (1 hub + 4–5 landing pages), Facility & Infrastructure, Resources / Downloads.

**Added forms:** Request a quote (multi-step, with file upload), gated resource download.

**Added admin modules:** Certifications, Industries, Resources, Facility stats, CSV export on enquiries.

**Changed:** Blog path becomes `/insights`. CAPTCHA implemented as Cloudflare Turnstile. Client logos section made conditional on permissions.

**Blocked pending client input:** Product Development Consultation page.

Get written approval before design starts. This is roughly 40% more page templates than the original doc implies and it needs to be reflected in timeline and cost.

---

## 11. Decision log

Append to this as decisions are made. Date every entry.

| Date | Decision | Rationale | Decided by |
|---|---|---|---|
| 2026-08-05 | Palette distilled to indigo + teal + orange accent; logo red dropped from UI | Five-colour logo is unusable as a UI system; red reads as hazard in a sterilization context | Design |
| 2026-08-05 | Typeface: Geist + Geist Mono | Not Inter (overused internally); technical register suits a validated-process business | Design |
| 2026-08-05 | Primary CTA is indigo, not orange | Orange at brand value fails WCAG AA as a button fill with white text; indigo is stronger and more disciplined anyway | Design |
| 2026-08-05 | Blog path `/insights` | Register appropriate to a B2B technical audience | Content |
| | *CMS: WordPress headless vs Payload* | **Open — decide before scaffolding** | |
| | *Reference site confirmation: sterisindia.com vs steris.in* | **Open — awaiting client** | |

---

## 12. Internal

**Team:** Design lead — Design. Designer — Nishant. Dev lead — DPS. Approvals — Meena, Mohit.

**Working sequence:** context (this doc) → design system → Figma screens → Claude Code build → Vercel preview → client review → revisions → production.

**Client review cadence:** share the password-protected preview URL at each milestone rather than static screenshots. Real scroll behaviour is most of the value in this build and it does not survive a JPEG.
