import React from "react";
import { CredibilityStat } from "@/lib/content/types";

interface CredibilityStripProps {
  stats: CredibilityStat[];
}

export default function CredibilityStrip({ stats }: CredibilityStripProps) {
  // Self-suppression rule: Render only if 3 or more verified values are present
  const verifiedStats = stats?.filter((s) => s.sourceVerified) || [];
  if (verifiedStats.length < 3) {
    return null;
  }

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 z-20">
      <div className="bg-white rounded-xl border border-slate-200 shadow-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-200 overflow-hidden">
        {verifiedStats.map((stat, idx) => (
          <div key={idx} className="p-6 flex flex-col justify-between">
            <span className="font-mono text-xs tracking-wider uppercase text-slate-600 font-semibold mb-2">
              {stat.label}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-3xl lg:text-4xl font-bold text-indigo-950 tracking-tight">
                {stat.value}
              </span>
            </div>
            {stat.subtext && (
              <span className="text-xs text-slate-600 mt-2 font-medium">
                {stat.subtext}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
