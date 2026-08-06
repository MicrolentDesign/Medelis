"use client";

import { useState } from "react";
import { FaqItem } from "@/lib/content/types";
import { Plus, Minus } from "lucide-react";

interface FaqSectionProps {
  faqs: FaqItem[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs?.[0]?.id || null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-orange-700 font-semibold">
            AUDIT & TECHNICAL FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently asked quality & compliance questions.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Direct answers on ISO standards, parametric batch release, biological indicators, and packaging compatibility.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-start justify-between gap-6 text-left focus:outline-none group"
                >
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 mt-0.5">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-sm text-slate-600 leading-relaxed font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
