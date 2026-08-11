"use client";

import { ProductItem } from "@/lib/content/types";
import { useEnquiryCart } from "@/context/EnquiryCartContext";
import CircularArrow from "@/components/ui/CircularArrow";

interface ProductDetailActionsProps {
  product: ProductItem;
}

export default function ProductDetailActions({ product }: ProductDetailActionsProps) {
  const { addToCart, cartItems, openEnquiryModal } = useEnquiryCart();
  const inCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-2">
      <button
        onClick={() => openEnquiryModal(product)}
        className="flex-1 inline-flex items-center justify-between bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-base font-bold px-6 py-3.5 rounded-full shadow-md transition-all group"
      >
        <span>Send Instant Enquiry</span>
        <CircularArrow variant="primary" size="md" />
      </button>

      <button
        onClick={() => addToCart(product)}
        className={`px-6 py-3.5 rounded-full text-sm font-bold border transition-all flex items-center justify-center gap-2 ${
          inCart
            ? "bg-[var(--b900)] text-white border-[var(--b900)]"
            : "bg-white text-[var(--b900)] border-[var(--b900)] hover:bg-[var(--b50)]"
        }`}
      >
        <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 14 14">
          {inCart ? (
            <path d="M2.5 7.5l3.5 3.5 5.5-6.5" />
          ) : (
            <path d="M7 2v10M2 7h10" />
          )}
        </svg>
        <span>{inCart ? "In Cart" : "Add to Cart"}</span>
      </button>
    </div>
  );
}
