import React from "react";
import Link from "next/link";
import CycleStrip from "@/components/brand/CycleStrip";
import { ArrowRight, Download } from "lucide-react";

interface HeroProps {
  data: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
}

export default function Hero({ data }: HeroProps) {
  if (!data) return null;

  return (
    <section className="relative bg-indigo-950 text-white pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
      {/* Subtle Grid Scrim Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-indigo-900/40 to-indigo-950 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Composition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="font-mono text-xs tracking-widest uppercase font-semibold text-orange-400">
                {data.eyebrow}
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              {data.h1}
            </h1>

            {/* Lead sentence */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              {data.lead}
            </p>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white font-semibold text-base transition-colors shadow-sm border border-indigo-500/40"
              >
                <span>{data.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-indigo-900/60 hover:bg-indigo-900 text-slate-200 hover:text-white font-medium text-base border border-indigo-700/60 transition-colors"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>{data.secondaryCta.label}</span>
              </Link>
            </div>

            {/* Micro compliance reassurance */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> ISO 11135:2014
              </span>
              <span className="text-slate-600">|</span>
              <span>ISO 13485 Certified</span>
            </div>
          </div>

          {/* Right Signature Graphic (CycleStrip) */}
          <div className="lg:col-span-5">
            <CycleStrip variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
