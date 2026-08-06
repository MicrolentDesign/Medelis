import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, ShieldCheck } from "lucide-react";

export default function QuoteCta() {
  return (
    <section id="quote" className="py-20 bg-indigo-900 text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="font-mono text-xs tracking-widest uppercase font-semibold text-orange-400">
                START YOUR STERILIZATION CYCLE QUALIFICATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to submit your device specifications or request a custom cycle quote?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Our quality and process engineering team will review your material compatibility, batch volume requirements, and ISO 11135 protocol needs within 24 hours.
            </p>

            <div className="flex items-center gap-6 text-xs font-mono text-slate-300 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orange-400" /> Confidential NDA available
              </span>
              <span>•</span>
              <span>Fast 24-hr response SLA</span>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-5 bg-indigo-950/80 border border-indigo-700/80 rounded-2xl p-8 space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-white">
              Direct Engineering Inquiry
            </h3>

            <div className="space-y-4">
              <Link
                href="mailto:quality@medelishealthcare.com"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-base transition-colors shadow-md"
              >
                <Mail className="w-5 h-5" />
                <span>Submit RFP / Inquiry Email</span>
              </Link>

              <div className="text-center font-mono text-xs text-slate-400">
                Or discuss directly with QA engineering
              </div>

              <div className="p-4 rounded-lg bg-indigo-900/50 border border-indigo-800 text-xs font-mono text-slate-300 space-y-1 text-center">
                <div>Quality Line: +91 (0) 141 200 MEDELIS</div>
                <div className="text-orange-400">ISO 11135 / ISO 13485 Certified Facility</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
