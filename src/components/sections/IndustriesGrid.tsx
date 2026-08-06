import React from "react";
import Link from "next/link";
import { IndustryItem } from "@/lib/content/types";
import { ArrowUpRight, Crosshair, Stethoscope, Syringe, Microchip } from "lucide-react";

interface IndustriesGridProps {
  industries: IndustryItem[];
}

export default function IndustriesGrid({ industries }: IndustriesGridProps) {
  if (!industries || industries.length === 0) return null;

  const icons = [Stethoscope, Syringe, Crosshair, Microchip];

  return (
    <section id="industries" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-orange-700 font-semibold">
            TARGET SEGMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Specialized sterilization for critical medical device sectors.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Tailored pressure-ramp kinetics and moisture pre-conditioning configured specifically for your product geometry and materials.
          </p>
        </div>

        {/* 4 Tile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={ind.slug}
                className="group bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:bg-indigo-50/50 hover:border-indigo-200 hover:-translate-y-1 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 group-hover:bg-indigo-700 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-700 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                      {ind.title}
                    </h3>
                    <p className="font-mono text-[11px] text-slate-600 mt-0.5">
                      {ind.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-1">
                  <span className="font-mono text-[10px] uppercase text-slate-600 font-semibold block">
                    Key Protocols
                  </span>
                  <ul className="text-[11px] text-slate-600 space-y-0.5">
                    {ind.keyRequirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-orange-600" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
