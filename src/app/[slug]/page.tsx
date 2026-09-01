import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getRanges, getFeaturedProducts } from "@/lib/content";
import { getAssetUrl } from "@/utils/assets";
import PillBadge from "@/components/ui/PillBadge";
import CircularArrow from "@/components/ui/CircularArrow";
import OrthopaedicIcon from "@/components/icons/OrthopaedicIcon";
import GastrologyIcon from "@/components/icons/GastrologyIcon";
import RangeProductsGrid from "./RangeProductsGrid";

interface RangePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const ranges = await getRanges();
  return ranges.map((r) => ({ slug: r.slug }));
}

function RangeIcon({ iconName, className }: { iconName: string; className: string }) {
  if (iconName === "bone") return <OrthopaedicIcon className={className} />;
  if (iconName === "gastro") return <GastrologyIcon className={className} />;

  return (
    <svg className={`${className} stroke-current stroke-2 fill-none`} viewBox="0 0 24 24">
      {iconName === "heart" && (
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      )}
      {iconName === "brain" && (
        <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 011.32-4.24A2.5 2.5 0 019.5 2zM14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-1.32-4.24A2.5 2.5 0 0014.5 2z" />
      )}
      {iconName === "activity" && <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />}
      {iconName === "droplet" && <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />}
      {iconName === "plus-square" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </>
      )}
      {iconName === "pill" && (
        <>
          <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
          <path d="m8.5 8.5 7 7" />
        </>
      )}
      {iconName === "box" && (
        <>
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </>
      )}
      {iconName === "zap" && <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />}
      {iconName === "shield-check" && (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </>
      )}
    </svg>
  );
}

const RANGE_IMAGES: Record<string, string> = {
  cardiology: "/images/ranges/cardiology.jpg",
  neurology: "/images/ranges/neurology.jpg",
  diabetic: "/images/ranges/diabetic.avif",
  orthopaedic: "/images/ranges/orthopaedic.jpg",
  gastrology: "/images/ranges/gastrology.jpg",
  general: "/images/ranges/general.jpg",
};

export default async function RangePage({ params }: RangePageProps) {
  const { slug } = await params;
  const [ranges, products] = await Promise.all([getRanges(), getFeaturedProducts()]);
  const range = ranges.find((r) => r.slug === slug);

  if (!range) {
    notFound();
  }

  const rangeProducts = products.filter((p) => p.rangeSlug === range.slug);

  return (
    <div className="bg-[var(--canvas)] min-h-[80vh]">
      {/* Section 1: Range Profile */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink600)] mb-8">
            <Link href="/" className="hover:text-[var(--b900)]">Home</Link>
            <svg className="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
            <span className="text-[var(--b900)] font-bold">{range.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column Text */}
            <div className="flex flex-col gap-6">
              <div>
                <PillBadge>Therapeutic Range</PillBadge>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mt-3">
                  {range.title}
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
                {range.longDescription || range.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {["Composition-first labelling", "Consistent pack sizes", "Batch quality controls"].map((fact) => (
                  <span
                    key={fact}
                    className="text-xs font-semibold text-[var(--color-brand-accent)] bg-[var(--color-brand-accent-light)] px-3 py-1.5 rounded-full"
                  >
                    {fact}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="#products"
                  className="inline-flex items-center gap-3 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-sm font-bold pl-6 pr-2.5 py-3 rounded-full shadow-md transition-all group"
                >
                  <span>Explore Products</span>
                  <CircularArrow variant="primary" size="md" />
                </Link>
              </div>
            </div>

            {/* Right Column Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src={getAssetUrl(RANGE_IMAGES[range.slug] || "/images/hero_lifestyle.png")}
                  alt={`Medelis Healthcare ${range.title}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs border border-slate-100">
                <div className="text-3xl font-extrabold text-[var(--b900)]">
                  {range.productCount}
                </div>
                <div className="text-xs font-semibold text-[var(--ink600)] mt-1">
                  Formulations across the {range.title}.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What's in this Range */}
      {range.categories && range.categories.length > 0 && (
        <section className="py-20 bg-[var(--canvas-deep)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <PillBadge>Inside This Range</PillBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mt-3">
                What&apos;s in the <span className="text-[var(--b900)]">{range.title}</span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--ink600)] mt-3">
                Every SKU in this range ships with a transparent composition strip and standard packing, so you always know exactly what you&apos;re stocking.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {range.categories.map((cat, idx) => {
                const keywords = cat.molecules.split(/,|\+/).map((s) => s.trim().split(" ")[0]);
                const matchCount = rangeProducts.filter((p) =>
                  keywords.some((k) => p.composition.includes(k))
                ).length;

                return (
                  <div
                    key={cat.label}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-hover border border-slate-100 flex flex-col gap-4 card-lift"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-full bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)] flex items-center justify-center">
                        <RangeIcon iconName={cat.iconName} className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-[var(--ink400)]">{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink900)] leading-snug">{cat.label}</p>
                      <p className="text-xs text-[var(--ink600)] mt-1">{cat.note}</p>
                      <p className="text-[11px] font-medium text-[var(--color-brand-accent)] bg-[var(--color-brand-accent-light)] inline-block px-2 py-1 rounded-full mt-3">
                        {cat.molecules}
                      </p>
                      <p className="text-xs text-[var(--ink400)] mt-3">
                        {matchCount} {matchCount === 1 ? "SKU" : "SKUs"} in this range
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Products in this Range */}
      <div id="products">
        <RangeProductsGrid range={range} products={rangeProducts} />
      </div>
    </div>
  );
}
