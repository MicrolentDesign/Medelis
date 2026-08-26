"use client";

import Link from "next/link";
import PillBadge from "@/components/ui/PillBadge";
import CompositionStrip from "@/components/ui/CompositionStrip";
import CircularArrow from "@/components/ui/CircularArrow";
import { ProductItem } from "@/lib/content/types";
import { useEnquiryCart } from "@/context/EnquiryCartContext";

interface FeaturedProductsProps {
  products: ProductItem[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const { addToCart, cartItems, openEnquiryModal } = useEnquiryCart();

  return (
    <section id="featured" className="py-20 bg-[var(--canvas)] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <PillBadge>Featured Products Catalogue</PillBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mt-3">
              Searchable by{" "}
              <span className="text-[var(--b900)]">Molecule & Composition</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--ink600)]">
              Every card carries its full active composition. Click any product to view its dedicated specification page or send an enquiry.
            </p>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => {
            const inCart = cartItems.some((item) => item.id === p.id);

            return (
              <div
                key={p.id}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl flex flex-col justify-between transition-all duration-300 card-lift border border-slate-100"
              >
                <div>
                  {/* Clickable Image Pack Shot Tray */}
                  <div className="relative bg-slate-50 rounded-xl aspect-[4/3] overflow-hidden mb-4 border border-slate-100 flex items-center justify-center group">
                    <Link href={`/products/${p.slug}`} className="relative w-full h-full block">
                      <img
                        src={p.imageUrl}
                        alt={p.brandName}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Add to Cart Toggle Button */}
                    <button
                      onClick={() => addToCart(p)}
                      aria-label="Add to Enquiry Cart"
                      className={`absolute top-3 right-3 px-3.5 min-h-11 rounded-full shadow-md text-xs font-bold flex items-center gap-1.5 transition-all ${
                        inCart
                          ? "bg-[var(--b900)] text-white"
                          : "bg-white text-[var(--b900)] hover:bg-[var(--b50)]"
                      }`}
                    >
                      <svg className="w-3.5 h-3.5 stroke-current stroke-2 fill-none" viewBox="0 0 14 14">
                        {inCart ? (
                          <path d="M2.5 7.5l3.5 3.5 5.5-6.5" />
                        ) : (
                          <path d="M7 2v10M2 7h10" />
                        )}
                      </svg>
                      <span>{inCart ? "In Cart" : "Add to Cart"}</span>
                    </button>
                  </div>

                  {/* Range Tag */}
                  <div className="mb-2">
                    <span className="text-[11px] font-bold text-[var(--b900)] uppercase tracking-wider bg-[var(--b50)] px-2.5 py-1 rounded-full">
                      {p.rangeName}
                    </span>
                  </div>

                  {/* Clickable Brand Name */}
                  <Link href={`/products/${p.slug}`} className="block group">
                    <h3 className="text-lg font-bold text-[var(--ink900)] group-hover:text-[var(--b900)] transition-colors mb-3 leading-snug line-clamp-3 min-h-[3rem]">
                      {p.brandName}
                    </h3>
                  </Link>

                  {/* Composition Strip */}
                  <CompositionStrip composition={p.composition} className="mb-3" />

                  {/* Packing Meta */}
                  <p className="text-xs text-[var(--ink600)] font-medium">
                    {p.dosageForm} &nbsp;·&nbsp; {p.packing}
                  </p>
                </div>

                {/* Send Enquiry Button (Triggers Modal Popup) */}
                <div className="mt-6 pt-2">
                  <button
                    onClick={() => openEnquiryModal(p)}
                    className="w-full inline-flex items-center justify-between bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-sm font-bold px-5 py-3 rounded-full shadow-sm transition-all group"
                  >
                    <span>Send Enquiry</span>
                    <CircularArrow variant="primary" size="sm" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All Products CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-white text-[var(--color-brand-primary)] hover:bg-[var(--b50)] font-bold text-sm px-6 py-3 rounded-full shadow-md border border-slate-100 transition-all group"
          >
            <span>Explore All Products</span>
            <CircularArrow variant="alt" size="sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
