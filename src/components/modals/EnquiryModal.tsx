"use client";

import React, { useState } from "react";
import { useEnquiryCart } from "@/context/EnquiryCartContext";
import CircularArrow from "@/components/ui/CircularArrow";

export default function EnquiryModal() {
  const { activeEnquiryProduct, closeEnquiryModal } = useEnquiryCart();
  const [submitted, setSubmitted] = useState(false);

  if (!activeEnquiryProduct) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeEnquiryModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[var(--b50)] text-[var(--ink900)] hover:bg-[var(--b100)] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 stroke-current stroke-2" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[var(--b50)] text-[var(--color-brand-primary)] flex items-center justify-center">
              <svg className="w-7 h-7 stroke-current stroke-3 fill-none" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-[var(--ink900)]">Enquiry Sent!</h3>
            <p className="text-sm text-[var(--ink600)]">
              Your inquiry for <strong className="text-[var(--ink900)]">{activeEnquiryProduct.brandName}</strong> has been logged. Our commercial coordinator will contact you with batch rates within 1 working day.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 bg-[var(--color-brand-primary)] text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-md"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--b900)] bg-[var(--b50)] px-2.5 py-1 rounded-full">
                Product Enquiry
              </span>
              <h3 className="text-xl font-extrabold text-[var(--ink900)] mt-2">
                Enquire for {activeEnquiryProduct.brandName}
              </h3>
              <p className="text-xs text-[var(--b900)] bg-[var(--b50)] p-2.5 rounded-lg font-medium mt-2">
                <strong>Active Composition:</strong> {activeEnquiryProduct.composition}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              <div>
                <label className="block text-xs font-bold text-[var(--ink700)] mb-1">Your Name</label>
                <input
                  suppressHydrationWarning
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full h-10 rounded-xl border border-slate-200 px-3 text-xs outline-none focus:border-[var(--b700)]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[var(--ink700)] mb-1">Firm Name</label>
                <input
                  suppressHydrationWarning
                  type="text"
                  required
                  placeholder="e.g. Med Pharma"
                  className="w-full h-10 rounded-xl border border-slate-200 px-3 text-xs outline-none focus:border-[var(--b700)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[var(--ink700)] mb-1">Mobile Number</label>
                <input
                  suppressHydrationWarning
                  type="tel"
                  required
                  placeholder="+91 98290 00000"
                  className="w-full h-10 rounded-xl border border-slate-200 px-3 text-xs outline-none focus:border-[var(--b700)]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[var(--ink700)] mb-1">Email Address</label>
                <input
                  suppressHydrationWarning
                  type="email"
                  required
                  placeholder="info@yourfirm.com"
                  className="w-full h-10 rounded-xl border border-slate-200 px-3 text-xs outline-none focus:border-[var(--b700)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--ink700)] mb-1">District & State</label>
              <input
                suppressHydrationWarning
                type="text"
                required
                placeholder="e.g. Jodhpur, Rajasthan"
                className="w-full h-10 rounded-xl border border-slate-200 px-3 text-xs outline-none focus:border-[var(--b700)]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--ink700)] mb-1">Quantity / Additional Requirements</label>
              <textarea
                rows={2}
                placeholder="Specify target batch quantities or territory notes..."
                className="w-full rounded-xl border border-slate-200 p-3 text-xs outline-none focus:border-[var(--b700)]"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-between bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-sm font-bold px-6 py-3 rounded-full shadow-md transition-all group"
            >
              <span>Submit Product Enquiry</span>
              <CircularArrow variant="primary" size="sm" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
