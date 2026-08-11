"use client";

import React, { useState } from "react";
import { useEnquiryCart } from "@/context/EnquiryCartContext";
import CircularArrow from "@/components/ui/CircularArrow";

export default function CartDrawer() {
  const { cartItems, removeFromCart, clearCart, isCartOpen, setIsCartOpen } = useEnquiryCart();
  const [submitted, setSubmitted] = useState(false);

  if (!isCartOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm animate-fade-in flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl text-[var(--ink900)]">Enquiry Cart</span>
              <span className="bg-[var(--b50)] text-[var(--b900)] text-xs font-bold px-2.5 py-0.5 rounded-full">
                {cartItems.length} items
              </span>
            </div>

            <button
              onClick={handleClose}
              aria-label="Close cart"
              className="w-8 h-8 rounded-full bg-[var(--b50)] text-[var(--ink900)] hover:bg-[var(--b100)] flex items-center justify-center"
            >
              <svg className="w-5 h-5 stroke-current stroke-2" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Item List */}
          {submitted ? (
            <div className="py-16 text-center flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[var(--b50)] text-[var(--color-brand-primary)] flex items-center justify-center">
                <svg className="w-7 h-7 stroke-current stroke-3 fill-none" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[var(--ink900)]">Batch Enquiry Sent!</h3>
              <p className="text-sm text-[var(--ink600)]">
                We have received your batch enquiry for {cartItems.length} products. Rates and territory availability will be emailed to you within 1 working day.
              </p>
              <button
                onClick={() => {
                  clearCart();
                  handleClose();
                }}
                className="mt-4 bg-[var(--color-brand-primary)] text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-md"
              >
                Close & Clear Cart
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center gap-3">
              <svg className="w-12 h-12 stroke-[var(--ink400)] stroke-1.5 fill-none" viewBox="0 0 24 24">
                <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />
              </svg>
              <h4 className="text-base font-bold text-[var(--ink900)]">Your Enquiry Cart is Empty</h4>
              <p className="text-xs text-[var(--ink600)] max-w-xs">
                Browse products and click &ldquo;Add to Cart&rdquo; to enquire for multiple items at once.
              </p>
            </div>
          ) : (
            <div className="py-4 flex flex-col gap-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[var(--card-tint)] rounded-xl p-3 border border-slate-100 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={item.imageUrl}
                      alt={item.brandName}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h5 className="text-xs font-bold text-[var(--ink900)] truncate">
                        {item.brandName}
                      </h5>
                      <p className="text-[11px] text-[var(--b900)] truncate font-medium">
                        {item.composition}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[var(--ink400)] hover:text-red-600 p-1"
                    aria-label="Remove item"
                  >
                    <svg className="w-4 h-4 stroke-current stroke-2" viewBox="0 0 24 24" fill="none">
                      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Batch Form Footer */}
        {!submitted && cartItems.length > 0 && (
          <form onSubmit={handleSubmit} className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-[var(--ink900)]">Complete Batch Enquiry</h4>
            <input
              suppressHydrationWarning
              type="text"
              required
              placeholder="Your Name"
              className="w-full h-9 rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-[var(--b700)]"
            />
            <input
              suppressHydrationWarning
              type="text"
              required
              placeholder="Firm / Agency Name"
              className="w-full h-9 rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-[var(--b700)]"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                suppressHydrationWarning
                type="tel"
                required
                placeholder="Mobile"
                className="w-full h-9 rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-[var(--b700)]"
              />
              <input
                suppressHydrationWarning
                type="email"
                required
                placeholder="Email"
                className="w-full h-9 rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-[var(--b700)]"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-between bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-bold px-5 py-3 rounded-full shadow-md transition-all group"
            >
              <span>Submit Batch Enquiry ({cartItems.length} SKUs)</span>
              <CircularArrow variant="primary" size="sm" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
