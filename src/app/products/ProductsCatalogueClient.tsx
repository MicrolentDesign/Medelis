"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CompositionStrip from "@/components/ui/CompositionStrip";
import CircularArrow from "@/components/ui/CircularArrow";
import PillBadge from "@/components/ui/PillBadge";
import { ProductItem, RangeItem } from "@/lib/content/types";
import { useEnquiryCart } from "@/context/EnquiryCartContext";

interface ProductsCatalogueClientProps {
  ranges: RangeItem[];
  products: ProductItem[];
}

export default function ProductsCatalogueClient({
  ranges,
  products,
}: ProductsCatalogueClientProps) {
  const [selectedRange, setSelectedRange] = useState<string>("all");
  const { addToCart, cartItems, openEnquiryModal } = useEnquiryCart();

  useEffect(() => {
    const range = new URLSearchParams(window.location.search).get("range");
    if (range && ranges.some((r) => r.slug === range)) {
      setSelectedRange(range);
    }
  }, [ranges]);

  const filteredProducts =
    selectedRange === "all"
      ? products
      : products.filter((p) => p.rangeSlug === selectedRange);

  return (
    <div className="py-12 bg-[var(--canvas)] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink600)] mb-3">
            <Link href="/" className="hover:text-[var(--b900)]">Home</Link>
            <svg className="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
            <span className="text-[var(--b900)] font-bold">Products & Catalogue</span>
          </div>
          <PillBadge>Full Catalogue</PillBadge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--ink900)] mt-2">
            Pharmaceutical <span className="text-[var(--b900)]">Molecules & SKUs</span>
          </h1>
          <p className="text-sm sm:text-base text-[var(--ink600)] max-w-2xl mt-2">
            Browse our complete therapeutic range by composition. Filter by category, view technical specifications, or request bulk quotes.
          </p>
        </div>

        {/* Top Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setSelectedRange("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              selectedRange === "all"
                ? "bg-[var(--b900)] text-white shadow-md"
                : "bg-white text-[var(--ink700)] hover:bg-[var(--b50)] border border-slate-100"
            }`}
          >
            All Segments ({products.length})
          </button>

          {ranges.map((r) => {
            const isSelected = selectedRange === r.slug;
            const count = products.filter((p) => p.rangeSlug === r.slug).length;

            return (
              <button
                key={r.slug}
                onClick={() => setSelectedRange(r.slug)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  isSelected
                    ? "bg-[var(--b900)] text-white shadow-md"
                    : "bg-white text-[var(--ink700)] hover:bg-[var(--b50)] border border-slate-100"
                }`}
              >
                {r.title} {count > 0 ? `(${count})` : ""}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">
            <svg className="w-12 h-12 stroke-[var(--ink400)] stroke-1.5 fill-none mx-auto mb-3" viewBox="0 0 24 24">
              <rect x="4" y="7" width="16" height="13" rx="2" />
              <path d="M4 11h16M9 7V4h6v3" />
            </svg>
            <h3 className="text-xl font-bold text-[var(--ink900)] mb-1">No SKUs Published Yet</h3>
            <p className="text-xs text-[var(--ink600)] max-w-sm mx-auto">
              Products for this category are undergoing final batch registration. Contact our desk for custom formulation quotes.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((p) => {
              const inCart = cartItems.some((item) => item.id === p.id);

              return (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl flex flex-col justify-between transition-all duration-300 card-lift border border-slate-100"
                >
                  <div>
                    {/* Clickable Image Tray */}
                    <div className="relative bg-slate-50 rounded-xl aspect-[4/3] overflow-hidden mb-4 border border-slate-100 flex items-center justify-center group">
                      <Link href={`/products/${p.slug}`} className="relative w-full h-full block">
                        <img
                          src={p.imageUrl}
                          alt={p.brandName}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => addToCart(p)}
                        aria-label="Add to Cart"
                        className={`absolute top-3 right-3 px-3 py-1.5 rounded-full shadow-md text-xs font-bold flex items-center gap-1.5 transition-all ${
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

                    {/* Active Composition Strip */}
                    <CompositionStrip composition={p.composition} className="mb-3" />

                    {/* Packing Meta */}
                    <p className="text-xs text-[var(--ink600)] font-medium">
                      {p.dosageForm} &nbsp;·&nbsp; {p.packing}
                    </p>
                  </div>

                  {/* Actions */}
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
        )}
      </div>
    </div>
  );
}
