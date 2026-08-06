#!/usr/bin/env node
/**
 * Medelis design system — WCAG 2.1 contrast gate.
 *
 * Run:  node scripts/check-contrast.mjs
 * Exits 1 if any required pair fails, so it can gate CI.
 *
 * Updated for the v2 palette. Teal was removed from the interface on client
 * direction; indigo anchors and orange is the visible accent. The teal ramp is
 * no longer defined here because nothing may reference it — see the palette
 * lint at the bottom, which enforces that.
 *
 * Pairs involving translucent text over a dark ground are composited first,
 * so what is asserted is what actually reaches the screen.
 */

import { readFileSync, existsSync } from 'node:fs';

const TOKENS = {
  white: '#FFFFFF',
  'indigo-50': '#F0F1F8', 'indigo-100': '#DDDFEF', 'indigo-200': '#B9BDDC',
  'indigo-300': '#8E94C3', 'indigo-400': '#6169A5', 'indigo-500': '#3C4589',
  'indigo-600': '#2B3475', 'indigo-700': '#232A6B', 'indigo-800': '#1A2052',
  'indigo-900': '#12163A', 'indigo-950': '#0A0C21',
  'orange-50': '#FEF4EA', 'orange-100': '#FDE4CA', 'orange-300': '#F9A65B',
  'orange-500': '#F58220', 'orange-600': '#DC6A0E', 'orange-700': '#B5510B',
  'orange-900': '#743612',
  'slate-25': '#FBFCFD', 'slate-50': '#F5F7FA', 'slate-100': '#EDF0F5',
  'slate-200': '#DDE2EB', 'slate-300': '#C2CAD8', 'slate-400': '#93A0B4',
  'slate-500': '#6B7A91', 'slate-600': '#4E5B70', 'slate-700': '#3A4557',
  'slate-800': '#262E3C', 'slate-900': '#161C26', 'slate-950': '#0B0E14',
  'state-fail': '#B3261E',
};

const rgb = (hex) => {
  const h = resolveHex(hex).replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
};

function resolveHex(token) {
  if (token.startsWith('#')) return token;
  const hex = TOKENS[token];
  if (!hex) throw new Error(`Unknown token: ${token}`);
  return hex;
}

/** Composite `fg` at `alpha` over `bg`, returning the flattened hex. */
function over(fg, bg, alpha) {
  const [a, b] = [rgb(fg), rgb(bg)];
  const out = a.map((c, i) => Math.round(c * alpha + b[i] * (1 - alpha)));
  return '#' + out.map((c) => c.toString(16).padStart(2, '0')).join('');
}

const channel = (v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);

function luminance(token) {
  const [r, g, b] = rgb(token).map((c) => channel(c / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(a, b) {
  const [la, lb] = [luminance(a), luminance(b)];
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

// 4.5 = normal text. 3.0 = large text (>=24px), icons, and non-text UI or
// state indicators under WCAG 1.4.11.
const PAIRS = [
  // --- light ground, text ---
  ['slate-800', 'white', 4.5, 'body text'],
  ['slate-600', 'white', 4.5, 'secondary + muted text'],
  ['slate-600', 'slate-50', 4.5, 'muted text on tinted section'],
  ['slate-600', 'slate-25', 4.5, 'muted text on card hover fill'],
  ['indigo-900', 'white', 4.5, 'headings'],
  ['indigo-700', 'white', 4.5, 'links, primary button, cert numbers'],
  ['indigo-700', 'slate-50', 4.5, 'links on tinted section'],
  ['indigo-700', 'indigo-50', 4.5, 'tile hover: text on hover fill'],
  ['orange-700', 'white', 4.5, 'eyebrows, step numbers, post dates'],
  ['orange-700', 'slate-50', 4.5, 'eyebrows on tinted section'],
  ['white', 'indigo-700', 4.5, 'primary button label'],
  ['white', 'indigo-500', 4.5, 'primary button label, hover'],
  ['white', 'orange-700', 4.5, 'placeholder chip label'],
  ['state-fail', 'white', 4.5, 'error message text'],

  // --- light ground, non-text (1.4.11) ---
  ['orange-600', 'white', 3.0, 'eyebrow rule, card top edge, FAQ toggle'],
  ['orange-600', 'slate-50', 3.0, 'process marker on tinted section'],
  ['indigo-700', 'white', 3.0, 'focus ring on light'],

  // --- dark grounds, text (translucency composited) ---
  ['white', 'indigo-950', 4.5, 'hero H1'],
  ['orange-300', 'indigo-950', 4.5, 'hero eyebrow + headline accent line'],
  [over('white', 'indigo-950', 0.8), 'indigo-950', 4.5, 'hero lead at 80% white'],
  [over('white', 'indigo-950', 0.86), 'indigo-950', 4.5, 'hero nav links at 86% white'],
  [over('white', 'indigo-950', 0.66), 'indigo-950', 3.0, 'cycle-plot phase labels at 66%'],
  ['white', 'indigo-800', 4.5, 'quote-band heading'],
  ['orange-300', 'indigo-800', 4.5, 'quote-band eyebrow'],
  [over('white', 'indigo-800', 0.76), 'indigo-800', 4.5, 'quote-band body at 76% white'],
  ['indigo-200', 'indigo-900', 4.5, 'footer links'],
  ['indigo-400', 'indigo-900', 3.0, 'footer bottom bar, small print'],
  ['#A7B3C6', 'slate-950', 4.5, 'build-notes body'],
  ['orange-300', 'slate-950', 4.5, 'build-notes inline code'],

  // --- dark grounds, non-text ---
  ['orange-500', 'indigo-950', 3.0, 'cycle-plot markers on hero'],
  ['orange-500', 'indigo-800', 3.0, 'quote-band accent'],
  [over('white', 'indigo-950', 0.34), 'indigo-950', 3.0, 'ghost button border on hero'],
];

// Pairs the system relies on failing. Asserted so a token change that quietly
// makes orange legible for white text also trips the gate.
const MUST_FAIL = [
  ['white', 'orange-500', 4.5, 'white on orange-500 — why the CTA is indigo'],
  ['orange-500', 'white', 3.0, 'orange-500 as text or state indicator on white'],
];

let failures = 0;
const pad = (s, n) => String(s).padEnd(n);
const show = (t) => (t.startsWith('#') ? t : t);

console.log('\nMedelis contrast gate — WCAG 2.1 AA (v2 palette)\n' + '─'.repeat(72));
for (const [fg, bg, min, label] of PAIRS) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  if (!ok) failures++;
  console.log(`${ok ? '  ok  ' : ' FAIL '} ${pad(label, 46)} ${r.toFixed(2).padStart(6)}  need ${min}`);
}

console.log('\nDeliberate failures — these must NOT pass\n' + '─'.repeat(72));
for (const [fg, bg, min, label] of MUST_FAIL) {
  const r = ratio(fg, bg);
  const stillFails = r < min;
  if (!stillFails) failures++;
  console.log(`${stillFails ? '  ok  ' : ' FAIL '} ${pad(label, 46)} ${r.toFixed(2).padStart(6)}  stay under ${min}`);
}

// --- palette lint -------------------------------------------------------
// Teal is out of the interface on client direction. Catch any reintroduction.
console.log('\nPalette lint\n' + '─'.repeat(72));
const LINTED = ['design/homepage.html'];
for (const file of LINTED) {
  if (!existsSync(file)) { console.log(`  --   ${pad(file, 46)} not present, skipped`); continue; }
  const src = readFileSync(file, 'utf8');
  // strip HTML comments and the build-notes panel, which discuss teal in prose
  const code = src.replace(/<!--[\s\S]*?-->/g, '').replace(/<aside class="notes">[\s\S]*?<\/aside>/g, '');
  const hits = code.match(/--teal|var\(\s*--teal/g) || [];
  const ok = hits.length === 0;
  if (!ok) failures++;
  console.log(`${ok ? '  ok  ' : ' FAIL '} ${pad(file + ' — no teal references', 46)} ${String(hits.length).padStart(6)}  need 0`);
}

console.log('─'.repeat(72));
if (failures) {
  console.error(`\n${failures} assertion(s) failed. See docs/02-design-system.md §3.\n`);
  process.exit(1);
}
console.log('\nAll assertions hold.\n');
