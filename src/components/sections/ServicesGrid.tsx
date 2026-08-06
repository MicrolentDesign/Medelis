import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/lib/content/types";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServicesGridProps {
  services: ServiceItem[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  if (!services || services.length === 0) return null;

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-700 font-semibold">
              WHAT WE STERILIZE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Tell us the device. We will configure the validated cycle.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-base leading-relaxed">
              Low-temperature industrial ethylene oxide sterilization engineered for heat-sensitive medical devices, porous barrier packaging, and multi-component assemblies.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="relative bg-white rounded-xl border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group"
            >
              {/* 3px Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange-600 rounded-t-xl" />

              <div className="space-y-4">
                <span className="font-mono text-[11px] tracking-widest uppercase text-orange-700 font-semibold">
                  {service.modality}
                </span>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Material & Product lists */}
                <div className="pt-4 border-t border-slate-100 space-y-3 text-xs">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-slate-600 block mb-1">
                      Compatible Products
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.typicalProducts.map((p, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase text-slate-600 block mb-1">
                      Material Compatibility
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.materials.map((m, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-900 font-medium">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[11px] text-slate-600 font-medium">
                  {service.isoStandard}
                </span>
                <Link
                  href={`#quote`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 hover:text-indigo-900 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Inquire cycle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
