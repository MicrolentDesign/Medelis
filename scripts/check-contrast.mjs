#!/usr/bin/env node
/**
 * Medelis design system — WCAG 2.1 contrast gate.
 *
 * Run:  node scripts/check-contrast.mjs
 * Exits 1 if any required pair fails, so it can gate CI.
 *
 * Rewritten for design system v2.0 — the tinted-canvas system. The important
 * change is that most text no longer sits on white: it sits on `canvas`
 * (#EDF1F8), `canvas-deep` or `card-tint`. Every pair is asserted against the
 * surface it actually lands on, because a token that passes on white can fail
 * on the canvas — which is exactly what §3.8 item 1 is about.
 *
 * Translucent text over a dark ground is composited before measuring.
 */

import { readFileSync, existsSync } from 'node:fs';

const TOKENS = {
  white: '#FFFFFF',
  canvas: '#EDF1F8', 'canvas-deep': '#E4EAF4', card: '#FFFFFF', 'card-tint': '#F7F9FC',
  'indigo-50': '#F0F2F9', 'indigo-100': '#DDE1F0', 'indigo-200': '#B9BFDF',
  'indigo-300': '#8E96C6', 'indigo-400': '#616BA8', 'indigo-500': '#3C468C',
  'indigo-600': '#2B3578', 'indigo-700': '#232A6B', 'indigo-800': '#1A2052',
  'indigo-900': '#12163A',
  'teal-50': '#EAF7F4', 'teal-100': '#CBEDE5', 'teal-300': '#5FC4AF',
  'teal-500': '#0E8F7A', 'teal-600': '#0C7867', 'teal-700': '#0B6053', 'teal-800': '#0A4C43',
  'orange-50': '#FEF4EA', 'orange-100': '#FDE4CA', 'orange-500': '#F58220',
  'orange-700': '#B5510B', 'orange-900': '#743612',
  'slate-50': '#F5F7FA', 'slate-100': '#EDF0F5', 'slate-200': '#DDE2EB',
  'slate-300': '#C2CAD8', 'slate-400': '#93A0B4', 'slate-500': '#6B7A91',
  'slate-600': '#4E5B70', 'slate-800': '#262E3C', 'slate-900': '#161C26',
  'state-fail': '#B3261E',
};

const resolveHex = (t) => {
  if (t.startsWith('#')) return t;
  const hex = TOKENS[t];
  if (!hex) throw new Error(`Unknown token: ${t}`);
  return hex;
};
const rgb = (t) => {
  const h = resolveHex(t).replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
};
/** Composite `fg` at `alpha` over `bg`. */
function over(fg, bg, alpha) {
  const [a, b] = [rgb(fg), rgb(bg)];
  return '#' + a.map((c, i) => Math.round(c * alpha + b[i] * (1 - alpha)))
    .map((c) => c.toString(16).padStart(2, '0')).join('');
}
const channel = (v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
function luminance(t) {
  const [r, g, b] = rgb(t).map((c) => channel(c / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function ratio(a, b) {
  const [la, lb] = [luminance(a), luminance(b)];
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

// 4.5 normal text · 3.0 large text (>=24px), icons, and non-text UI/state (1.4.11)
const LIGHT_SURFACES = ['white', 'canvas', 'canvas-deep', 'card-tint'];

const PAIRS = [
  // headings and body across every light surface the system uses
  ...LIGHT_SURFACES.map((s) => ['slate-900', s, 4.5, `heading on ${s}`]),
  ...LIGHT_SURFACES.map((s) => ['slate-600', s, 4.5, `body / caption on ${s}`]),

  // §3.8 item 1 is applied: caption and --text-muted are slate-600, not
  // slate-500. The MUST_FAIL block below proves slate-500 could not do it.

  // links, §3.3
  ['teal-700', 'white', 4.5, 'link on card'],
  ['teal-700', 'canvas', 4.5, 'link on canvas'],
  ['teal-700', 'canvas-deep', 4.5, 'link on canvas-deep'],

  // pill badges, §7.2 — 12px weight 600 is normal text, needs 4.5
  ['teal-800', 'teal-100', 4.5, 'pill badge, default'],
  ['indigo-700', 'indigo-50', 4.5, 'pill badge, alt / filter chip'],
  ['orange-900', 'orange-100', 4.5, 'pill badge, "New launch" (§3.8 fix)'],
  [over('white', 'indigo-700', 1), 'indigo-700', 4.5, 'pill badge, inverse'],

  // composition strip, §4.3 — the signature component
  ['indigo-700', 'indigo-50', 4.5, 'composition strip on indigo-50'],
  ['indigo-700', 'card-tint', 4.5, 'composition strip on card-tint'],

  // buttons, §7.1
  ['white', 'indigo-700', 4.5, 'primary button label'],
  ['white', 'indigo-500', 4.5, 'primary button label, hover'],
  ['indigo-700', 'white', 4.5, 'secondary button label'],
  ['indigo-700', 'indigo-50', 4.5, 'secondary button label, hover'],

  // stat card, §7.9
  ['indigo-700', 'white', 4.5, 'stat number'],
  ['slate-600', 'white', 4.5, 'stat caption (mono)'],

  // form, §7.7
  ['slate-800', 'white', 4.5, 'input value'],
  ['slate-600', 'white', 4.5, 'input placeholder'],
  ['state-fail', 'white', 4.5, 'error message'],

  // non-text, 1.4.11
  ['teal-600', 'white', 3.0, 'focus ring on card'],
  ['teal-600', 'canvas', 3.0, 'focus ring on canvas'],
  ['teal-500', 'white', 3.0, 'nav active underline'],
  ['teal-500', 'card-tint', 3.0, 'enquiry-count badge fill'],
  ['slate-200', 'white', 1.2, 'input border (decorative, low bar by design)'],

  // dark grounds
  ['white', 'indigo-700', 4.5, 'franchise band heading'],
  ['indigo-200', 'indigo-700', 4.5, 'franchise band body'],
  ['teal-300', 'indigo-700', 4.5, 'accent on dark'],
  ['indigo-200', 'indigo-900', 4.5, 'footer links'],
  ['indigo-400', 'indigo-900', 3.0, 'footer small print'],
  [over('white', 'indigo-700', 0.9), 'indigo-700', 4.5, 'utility bar links at 90% white'],
];

// Pairs the system relies on failing.
const MUST_FAIL = [
  ['white', 'orange-500', 4.5, 'white on orange-500 — why primary is indigo'],
  ['teal-500', 'white', 4.5, 'teal-500 as body text'],
  ['slate-500', 'canvas', 4.5, 'slate-500 as muted text — the §3.8 item 1 failure'],
  ['orange-700', 'orange-100', 4.5, 'orange-700 on orange-100 — the §3.8 item 2 failure'],
];

let failures = 0;
const pad = (s, n) => String(s).padEnd(n);

console.log('\nMedelis contrast gate — WCAG 2.1 AA (design system v2.0)\n' + '─'.repeat(74));
for (const [fg, bg, min, label] of PAIRS) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  if (!ok) failures++;
  console.log(`${ok ? '  ok  ' : ' FAIL '} ${pad(label, 48)} ${r.toFixed(2).padStart(6)}  need ${min}`);
}

console.log('\nMust NOT pass — these are why the §3.8 fixes exist\n' + '─'.repeat(74));
for (const [fg, bg, min, label] of MUST_FAIL) {
  const r = ratio(fg, bg);
  const stillFails = r < min;
  if (!stillFails) failures++;
  console.log(`${stillFails ? '  ok  ' : ' FAIL '} ${pad(label, 48)} ${r.toFixed(2).padStart(6)}  stay under ${min}`);
}

// --- lint: the v2.0 language, and the dead sterilization signature ----------
console.log('\nLint\n' + '─'.repeat(74));
const FILE = 'design/homepage.html';
if (!existsSync(FILE)) {
  console.log(`  --   ${pad(FILE + ' — not present, skipped', 48)}`);
} else {
  const src = readFileSync(FILE, 'utf8');
  // strip comments and the build-notes panel, which discuss the pivot in prose
  const code = src
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/<aside class="notes">[\s\S]*?<\/aside>/g, '');

  const checks = [
    ['no cycle-strip revival', /cycle-?strip|CycleStrip/i, 0],
    ['no sterilization copy', /steriliz|ISO 11135|gas dwell|aeration/i, 0],
    ['composition strip is not mono', /\.comp\s*\{[^}]*font-mono/i, 0],
  ];
  for (const [label, re, want] of checks) {
    const hits = (code.match(re) || []).length;
    const ok = hits === want;
    if (!ok) failures++;
    console.log(`${ok ? '  ok  ' : ' FAIL '} ${pad(label, 48)} ${String(hits).padStart(6)}  need ${want}`);
  }
  // the canvas must never be white
  const canvasWhite = /body\s*\{[^}]*background:\s*(#fff|#ffffff|white)\b/i.test(code);
  if (canvasWhite) failures++;
  console.log(`${canvasWhite ? ' FAIL ' : '  ok  '} ${pad('page ground is canvas, not white', 48)}`);
}

console.log('─'.repeat(74));
if (failures) {
  console.error(`\n${failures} assertion(s) failed. See docs/02-design-system.md §3.7 and §3.8.\n`);
  process.exit(1);
}
console.log('\nAll assertions hold.\n');
