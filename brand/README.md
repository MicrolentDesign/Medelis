# Brand assets

## What we have

| File | Format | Dimensions | Notes |
|---|---|---|---|
| `medelis-logo-original.jpeg` | JPEG | 1024 × 326 | Client-supplied, as received over WhatsApp. |

## Why this is not usable as-is

The only logo asset on hand has three problems that block production:

1. **Lossy raster at 1024 px wide.** Fine for a header at 1× and nothing else. Retina, print, favicon, OG image, and the emailed Certificate of Sterilization template all need more.
2. **Baked-in background.** The pale-blue rounded box and its indigo keyline are part of the pixels. The mark cannot sit on white, on the indigo CTA band, or on a photograph without visible edges.
3. **Five colours.** Indigo, green, orange, red, pale blue. See [`../docs/01-context.md`](../docs/01-context.md) §11 — the UI palette is a deliberate distillation of this, not a reproduction of it. The wordmark red is dropped from the interface because red reads as hazard in a sterilization context.

Note the distillation swaps the logo's **green** for **teal**. Green-on-white at the logo's value is muddy at small sizes and sits badly next to indigo.

## What to request from the client

- Vector source: `.ai`, `.eps`, or `.svg`. Original artwork, not a trace.
- Failing that, a transparent PNG at 3000 px minimum, mark and wordmark on separate layers.
- Confirmation of whether the pale-blue container is part of the logo or just the JPEG's background.

If no vector exists, budget a redraw. It is a simple enough mark to rebuild accurately and the project needs it in vector regardless.

## Derived assets still to produce

Favicon set, OG image template, mono/single-colour version for documents, and a reversed version for the indigo band.
