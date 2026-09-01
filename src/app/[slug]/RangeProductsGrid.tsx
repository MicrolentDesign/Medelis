"use client";

import Link from "next/link";
import CompositionStrip from "@/components/ui/CompositionStrip";
import { ProductItem, RangeItem } from "@/lib/content/types";
import { useEnquiryCart } from "@/context/EnquiryCartContext";

interface RangeProductsGridProps {
  range: RangeItem;
  products: ProductItem[];
}

export default function RangeProductsGrid({ range, products }: RangeProductsGridProps) {
  const { addToCart, cartItems } = useEnquiryCart();

  return (
    <section className="py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--ink900)] mb-8">
          Products in <span className="text-[var(--b900)]">{range.title}</span>
        </h2>

        {products.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">
            <svg className="w-12 h-12 stroke-[var(--ink400)] stroke-1.5 fill-none mx-auto mb-3" viewBox="0 0 24 24">
              <rect x="4" y="7" width="16" height="13" rx="2" />
              <path d="M4 11h16M9 7V4h6v3" />
            </svg>
            <h3 className="text-xl font-bold text-[var(--ink900)] mb-1">No SKUs Published Yet</h3>
            <p className="text-xs text-[var(--ink600)] max-w-sm mx-auto">
              Products for this range are undergoing final batch registration. Contact our desk for custom formulation quotes.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => {
              const inCart = cartItems.some((item) => item.id === p.id);

              return (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl flex flex-col justify-between transition-all duration-300 card-lift border border-slate-100"
                >
                  <div>
                    <div className="relative bg-slate-50 rounded-xl aspect-[4/3] overflow-hidden mb-4 border border-slate-100 flex items-center justify-center group">
                      <Link href={`/products/${p.slug}`} className="relative w-full h-full block">
                        <img
                          src={p.imageUrl}
                          alt={p.brandName}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>

                      <button
                        onClick={() => addToCart(p)}
                        aria-label="Add to Cart"
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

                    <Link href={`/products/${p.slug}`} className="block group">
                      <h3 className="text-lg font-bold text-[var(--ink900)] group-hover:text-[var(--b900)] transition-colors mb-3 leading-snug line-clamp-3 min-h-[3rem]">
                        {p.brandName}
                      </h3>
                    </Link>

                    <CompositionStrip composition={p.composition} className="mb-3" />

                    <p className="text-xs text-[var(--ink600)] font-medium">
                      {p.dosageForm} &nbsp;·&nbsp; {p.packing}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
