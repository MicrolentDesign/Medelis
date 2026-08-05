# Medelis Healthcare — build notes

B2B contract sterilization services website. Audience is QA/regulatory heads at
medical device manufacturers. Trust and specificity beat visual flourish.

## Read first

- `docs/01-context.md` — positioning, IA, content
- `docs/02-design-system.md` — tokens, components, motion
- `docs/03-stack-and-setup.md` — stack, environments, preview setup

## Non-negotiables

- Tokens only. No hardcoded hex, px font sizes, or arbitrary spacing values.
  Everything comes from `@theme` in `src/app/globals.css`.
- Never use orange as a fill with white text — fails WCAG AA at 2.6:1. Primary CTA is `indigo-700`.
- Never set body text in `teal-500` — fails AA under 24px at 4.0:1. Links use `teal-700`.
- Cards get hairline borders, never shadows.
- Server components by default. `"use client"` only when a hook or event listener requires it.
- Every motion effect needs a `prefers-reduced-motion` path in JS, not just CSS.
- All numbers, certificate references, and stat labels are set in Geist Mono.
- Sentence case everywhere except mono eyebrow labels.

## Content

Reads from `/content` via the loaders in `lib/content`. Do not import a CMS SDK into
a component — the CMS is not chosen yet and the data layer is the swap point.

## Placeholders

Anything in `public/placeholder` is temporary and must carry the PLACEHOLDER ribbon.
`grep -r "/placeholder/" src/` must return nothing before a production build.

## Open — do not treat as settled

- **Design system §3.5.** Three colour tokens fail the AA commitment: `slate-500` as
  caption/stat-label text, `slate-400` as placeholder text, and `orange-500` as the sole
  active-nav indicator. Recommended fixes are in the doc. Until they land, do not wire
  `--text-muted` or the placeholder colour into components.
- **Stack §11 item 1.** `/_ds` needs an explicit production guard in `middleware.ts`.
  The auth gate does not cover it.
- **CMS choice.** Payload vs headless WordPress — unresolved, and it changes content
  modelling. Do not scaffold content models until Meena confirms.

## Checks

```bash
node scripts/check-contrast.mjs
```

Must pass before any preview is shared with the client.
