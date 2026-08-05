#!/usr/bin/env node
/**
 * Medelis design system — WCAG 2.1 contrast gate.
 *
 * Verifies every contrast pair asserted in docs/02-design-system.md §3.3 and §3.5.
 * Run with no dependencies:  node scripts/check-contrast.mjs
 * Exits 1 if any REQUIRED pair fails, so it can gate CI.
 *
 * §3.3 says "re-measure if any token changes". This is that measurement.
 * When the tokens move into CSS custom properties, point TOKENS at that file
 * instead of duplicating hex values here.
 */

const TOKENS = {
  white: '#FFFFFF',
  'indigo-50': '#F0F1F8', 'indigo-100': '#DDDFEF', 'indigo-200': '#B9BDDC',
  'indigo-300': '#8E94C3', 'indigo-400': '#6169A5', 'indigo-500': '#3C4589',
  'indigo-600': '#2B3475', 'indigo-700': '#232A6B', 'indigo-800': '#1A2052',
  'indigo-900': '#12163A', 'indigo-950': '#0A0C21',
  'teal-50': '#EAF7F4', 'teal-100': '#CBEDE5', 'teal-200': '#98DBCC',
  'teal-300': '#5FC4AF', 'teal-400': '#2BA891', 'teal-500': '#0E8F7A',
  'teal-600': '#0C7867', 'teal-700': '#0B6053', 'teal-800': '#0A4C43',
  'teal-900': '#093E37',
  'orange-50': '#FEF4EA', 'orange-100': '#FDE4CA', 'orange-300': '#F9A65B',
  'orange-500': '#F58220', 'orange-600': '#DC6A0E', 'orange-700': '#B5510B',
  'orange-900': '#743612',
  'slate-25': '#FBFCFD', 'slate-50': '#F5F7FA', 'slate-100': '#EDF0F5',
  'slate-200': '#DDE2EB', 'slate-300': '#C2CAD8', 'slate-400': '#93A0B4',
  'slate-500': '#6B7A91', 'slate-600': '#4E5B70', 'slate-700': '#3A4557',
  'slate-800': '#262E3C', 'slate-900': '#161C26', 'slate-950': '#0B0E14',
  'state-fail': '#B3261E',
};

const channel = (v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);

function luminance(hex) {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => channel(parseInt(h.slice(i, i + 2), 16) / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(a, b) {
  const [la, lb] = [luminance(resolve(a)), luminance(resolve(b))];
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

function resolve(token) {
  if (token.startsWith('#')) return token;
  const hex = TOKENS[token];
  if (!hex) throw new Error(`Unknown token: ${token}`);
  return hex;
}

// AA thresholds. 4.5 = normal text, 3.0 = large text (>=24px or >=18.66px bold),
// icons, and non-text UI/state indicators (WCAG 1.4.11).
const PAIRS = [
  // --- §3.3, the published table ---
  ['indigo-700', 'white', 4.5, 'indigo-700 on white'],
  ['white', 'indigo-700', 4.5, 'white on indigo-700'],
  ['slate-800', 'white', 4.5, 'body text'],
  ['slate-600', 'white', 4.5, 'secondary body text'],
  ['teal-500', 'white', 3.0, 'teal-500 — large text / icons ONLY'],
  ['teal-700', 'white', 4.5, 'links'],
  ['white', 'orange-700', 4.5, 'white on orange-700'],
  ['teal-300', 'indigo-700', 4.5, 'teal-300 on indigo-700'],

  // --- untabulated but asserted by §3.2 / §6 ---
  ['teal-800', 'teal-50', 4.5, 'text on teal-50'],
  ['orange-900', 'orange-50', 4.5, 'text on orange-50'],
  ['indigo-200', 'indigo-700', 4.5, '--text-on-inverse-muted'],
  ['white', 'indigo-500', 4.5, 'white on primary-button hover'],
  ['indigo-700', 'indigo-50', 4.5, 'secondary button, hover fill'],
  ['state-fail', 'white', 4.5, 'error message text'],
  ['teal-600', 'white', 3.0, 'focus ring vs white'],
  ['teal-600', 'slate-50', 3.0, 'focus ring vs slate-50'],
  ['orange-500', 'indigo-700', 3.0, 'cycle-strip marker on dark band'],

  // --- §3.5 resolutions. These encode the RECOMMENDED fixes, so this gate
  //     stays red until the token reassignments actually land. ---
  ['slate-600', 'white', 4.5, '§3.5.1 muted text vs white'],
  ['slate-600', 'slate-50', 4.5, '§3.5.1 muted text vs slate-50'],
  ['slate-600', 'slate-100', 4.5, '§3.5.2 placeholder vs input fill'],
  ['orange-600', 'white', 3.0, '§3.5.3 active-nav underline'],
];

// Pairs the system deliberately relies on failing — asserted so that a token
// change which accidentally makes them pass is also surfaced.
const MUST_FAIL = [
  ['white', 'orange-500', 4.5, 'white on orange-500 — the reason the CTA is indigo'],
  ['orange-500', 'white', 3.0, 'orange-500 as text or state indicator on white'],
  ['teal-500', 'white', 4.5, 'teal-500 as body text'],
];

let failures = 0;
const pad = (s, n) => String(s).padEnd(n);

console.log('\nMedelis contrast gate — WCAG 2.1 AA\n' + '─'.repeat(66));
for (const [fg, bg, min, label] of PAIRS) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  if (!ok) failures++;
  console.log(`${ok ? '  ok  ' : ' FAIL '} ${pad(label, 44)} ${r.toFixed(2).padStart(6)}  need ${min}`);
}

console.log('\nDeliberate failures — these must NOT pass\n' + '─'.repeat(66));
for (const [fg, bg, min, label] of MUST_FAIL) {
  const r = ratio(fg, bg);
  const stillFails = r < min;
  if (!stillFails) failures++;
  console.log(`${stillFails ? '  ok  ' : ' FAIL '} ${pad(label, 44)} ${r.toFixed(2).padStart(6)}  must stay under ${min}`);
}

console.log('─'.repeat(66));
if (failures) {
  console.error(`\n${failures} contrast assertion(s) failed. See docs/02-design-system.md §3.3 and §3.5.\n`);
  process.exit(1);
}
console.log('\nAll contrast assertions hold.\n');
