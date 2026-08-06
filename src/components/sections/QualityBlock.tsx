import React from "react";
import { CheckCircle2, ShieldAlert, FileSpreadsheet, Lock } from "lucide-react";

export default function QualityBlock() {
  const complianceFeatures = [
    {
      title: "ISO 11135:2014 Validation Protocols",
      desc: "Half-cycle overkill validation approach establishing 10⁻⁶ Sterility Assurance Level (SAL) with complete physical data recording."
    },
    {
      title: "ISO 10993-7 Residual Tolerances",
      desc: "Strict degassing and aeration control guaranteeing ethylene oxide (EO) and ethylene chlorohydrin (ECH) limits meet strict device exposure thresholds."
    },
    {
      title: "Parametric & BI Dual Verification",
      desc: "Simultaneous biological indicator (Bacillus atrophaeus) incubation and digital sensor parameter cross-checking before batch sign-off."
    },
    {
      title: "Pre-Formatted Audit Packages",
      desc: "Every release includes raw sensor graphs, BI test logs, chamber calibration certificates, and executive quality certificates ready for regulatory submission."
    }
  ];

  return (
    <section id="quality" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-400 font-semibold">
              QUALITY & REGULATORY COMPLIANCE
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Engineered so your quality team passes their audit on the first review.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              When regulatory bodies inspect your DHF (Device Master File), the sterilization section is often the hardest scrutinized. Medelis delivers pre-formatted, bulletproof documentation packs.
            </p>

            <div className="p-4 rounded-xl bg-indigo-950/80 border border-indigo-700/60 space-y-2">
              <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-semibold uppercase">
                <Lock className="w-4 h-4" />
                <span>Zero Compromise Audit Standard</span>
              </div>
              <p className="text-xs text-slate-300">
                100% parameter logging, calibrated sensor arrays, and traceable reference standards across every chamber run.
              </p>
            </div>
          </div>

          {/* Right Cards List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {complianceFeatures.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-3 hover:border-orange-500/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
