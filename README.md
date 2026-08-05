# Medelis Healthcare

Marketing website + admin panel for Medelis Healthcare, a contract sterilization service.
Built by [Microlent Systems](https://microlent.com), Jodhpur.

**Status:** Pre-design. Client scope v1.0 received; v1.1 scope delta awaiting sign-off.

## Documentation

| Doc | What it covers |
|---|---|
| [`docs/00-client-requirements.md`](docs/00-client-requirements.md) | The client's approved v1.0 scope, transcribed verbatim. Read-only record. |
| [`docs/01-context.md`](docs/01-context.md) | **Start here.** What this project is, who buys, positioning, IA, conversion model, SEO, decision log. |
| [`docs/02-design-system.md`](docs/02-design-system.md) | Visual language — direction, cycle-strip signature, colour, type, components, motion, accessibility floor. |
| [`docs/03-stack-and-setup.md`](docs/03-stack-and-setup.md) | Stack, Tailwind v4 tokens, motion setup, placeholder policy, password-protected preview, performance budget. |

[`CLAUDE.md`](CLAUDE.md) carries the standing build rules for Claude Code sessions on this repo.

The source PDF is preserved at [`docs/client/`](docs/client/). Client-supplied brand assets and their
limitations are in [`brand/README.md`](brand/README.md).

## Checks

```bash
node scripts/check-contrast.mjs
```

Verifies every WCAG pair asserted in the design system, including the three token
reassignments still open in §3.5. No dependencies; exits non-zero on failure.

## Blocked before design starts

- Ten client questions in [`01-context.md`](docs/01-context.md) §1 — modalities, certifications, facility specs, turnaround SLA.
- Definition of the "Product Development Consultation" page (§1.7).
- Reference-site confirmation: `sterisindia.com` vs `steris.in` (§2).

## Blocked before scaffolding

- CMS decision: WordPress headless vs Payload — [`01-context.md`](docs/01-context.md) §11
  decision log, options and recommendation in [`03-stack-and-setup.md`](docs/03-stack-and-setup.md) §1.
- Three colour tokens that fail WCAG AA — [`02-design-system.md`](docs/02-design-system.md) §3.5.
- `/_ds` production guard — [`03-stack-and-setup.md`](docs/03-stack-and-setup.md) §11.
