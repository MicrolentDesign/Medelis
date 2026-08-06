import React from "react";
import Link from "next/link";
import { InsightItem } from "@/lib/content/types";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

interface InsightsPreviewProps {
  insights: InsightItem[];
}

export default function InsightsPreview({ insights }: InsightsPreviewProps) {
  if (!insights || insights.length === 0) return null;

  return (
    <section id="insights" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-700 font-semibold">
              TECHNICAL INSIGHTS & KNOWLEDGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Sterilization engineering & regulatory guidance.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              In-depth articles covering ISO 11135 validation, residual limits (ISO 10993-7), packaging permeability, and sterilizer cycle optimization.
            </p>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item) => (
            <article
              key={item.slug}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-[11px] text-orange-700 font-semibold">
                  <span>{item.category}</span>
                  <span className="flex items-center gap-1 text-slate-600 font-normal">
                    <Clock className="w-3 h-3" /> {item.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600">
                <span>{item.isoReference || "ISO 11135"}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-indigo-700 group-hover:translate-x-0.5 transition-transform">
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
