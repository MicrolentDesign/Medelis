import React from "react";
import { FileCheck, ShieldCheck, Cpu, Award } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Device & Cycle Qualification",
      desc: "Material compatibility assessment, bioburden baseline determination, and custom gas penetration protocol design.",
      icon: Cpu
    },
    {
      num: "02",
      title: "Pre-conditioning & Chamber Dwell",
      desc: "Strict environmental temperature and humidity conditioning followed by controlled EtO gas injection and exposure.",
      icon: ShieldCheck
    },
    {
      num: "03",
      title: "Vacuum Degassing & Aeration",
      desc: "Multi-stage nitrogen evacuation and forced aeration to drop EtO residuals strictly below ISO 10993-7 thresholds.",
      icon: FileCheck
    },
    {
      num: "04",
      title: "Parametric & BI Batch Release",
      desc: "Final verification of biological indicators, parametric sensor logs, and immediate issuance of Sterilization Certificates.",
      icon: Award
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-orange-700 font-semibold">
            VALIDATED PROCESS FLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Four steps from chamber intake to batch certificate release.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every batch processed through Medelis follows a deterministic quality workflow governed by ISO 11135 annex requirements.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between relative hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-orange-700">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-mono text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span>Audit Trail Logged</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
