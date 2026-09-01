import { notFound } from "next/navigation";
import Link from "next/link";
import { getFeaturedProducts } from "@/lib/content";
import CompositionStrip from "@/components/ui/CompositionStrip";
import PillBadge from "@/components/ui/PillBadge";
import ProductDetailActions from "./ProductDetailActions";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getFeaturedProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const products = await getFeaturedProducts();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-16 bg-[var(--canvas)] min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink600)] mb-8">
          <Link href="/" className="hover:text-[var(--b900)]">Home</Link>
          <svg className="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
          <Link href="/#featured" className="hover:text-[var(--b900)]">Products</Link>
          <svg className="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-[var(--b900)] font-bold truncate">{product.brandName}</span>
        </div>

        {/* Main Product Detail Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Image Pack Shot */}
          <div className="bg-slate-50 rounded-2xl p-6 aspect-[4/3] relative overflow-hidden border border-slate-100 flex items-center justify-center">
            <img
              src={product.imageUrl}
              alt={product.brandName}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
            <div className="absolute top-4 left-4">
              <PillBadge>{product.rangeName}</PillBadge>
            </div>
          </div>

          {/* Right Column: Specifications & Actions */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--ink900)] leading-tight">
                {product.brandName}
              </h1>
              <p className="text-xs text-[var(--ink600)] font-semibold mt-1">
                Therapeutic Range: <span className="text-[var(--b900)] font-bold">{product.rangeName}</span>
              </p>
            </div>

            {/* Active Composition Strip */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--ink400)] mb-1">
                Active Molecule Composition
              </label>
              <CompositionStrip composition={product.composition} />
            </div>

            {/* Specification Details Grid */}
            <div className="grid grid-cols-2 gap-4 bg-[var(--canvas)] p-4 rounded-2xl border border-slate-100 text-xs">
              <div>
                <span className="text-[var(--ink400)] block font-medium">Dosage Form</span>
                <strong className="text-[var(--ink900)] text-sm">{product.dosageForm}</strong>
              </div>
              <div>
                <span className="text-[var(--ink400)] block font-medium">Packaging Format</span>
                <strong className="text-[var(--ink900)] text-sm">{product.packing}</strong>
              </div>
            </div>

            {/* Description & Indications */}
            {product.description && (
              <div>
                <h4 className="text-sm font-bold text-[var(--ink900)] mb-1">Product Description</h4>
                <p className="text-xs sm:text-sm text-[var(--ink600)] leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {product.indications && (
              <div>
                <h4 className="text-sm font-bold text-[var(--ink900)] mb-2">Key Clinical Indications</h4>
                <div className="flex flex-wrap gap-2">
                  {product.indications.map((ind, idx) => (
                    <span
                      key={idx}
                      className="bg-[var(--b50)] text-[var(--b900)] text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.storage && (
              <div className="text-xs text-[var(--ink600)] bg-amber-50 border border-amber-200 p-3 rounded-xl">
                <strong>Storage Instructions:</strong> {product.storage}
              </div>
            )}

            {/* Interactive Actions (Client Component) */}
            <ProductDetailActions product={product} />

            {/* Regulatory Disclaimer */}
            <p className="text-[11px] text-[var(--ink400)] border-t border-slate-100 pt-4 leading-relaxed">
              * Prescription product to be supplied strictly to registered distributors, stockists, and retail pharmacies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
