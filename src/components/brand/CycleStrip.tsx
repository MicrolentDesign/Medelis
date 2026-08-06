import React from "react";

interface CycleStripProps {
  className?: string;
  variant?: "hero" | "compact";
}

export default function CycleStrip({ className = "", variant = "hero" }: CycleStripProps) {
  return (
    <div className={`relative border border-white/15 rounded-xl bg-indigo-950/40 backdrop-blur-md p-6 ${className}`}>
      <svg
        className="w-full h-auto"
        viewBox="0 0 480 300"
        role="img"
        aria-label="Illustrative sterilization cycle profile across four process phases"
      >
        <rect className="fill-orange-500/10" x="176" y="30" width="148" height="196" />
        
        {/* Horizontal grid lines */}
        <g className="stroke-white/12" strokeWidth="1">
          <line x1="0" y1="30" x2="480" y2="30" />
          <line x1="0" y1="128" x2="480" y2="128" />
          <line x1="0" y1="226" x2="480" y2="226" />
        </g>
        
        {/* Vertical phase division lines */}
        <g className="stroke-white/25 stroke-dasharray-[3_5]" strokeWidth="1">
          <line x1="112" y1="20" x2="112" y2="236" />
          <line x1="176" y1="20" x2="176" y2="236" />
          <line x1="324" y1="20" x2="324" y2="236" />
        </g>
        
        {/* Sterilization Cycle Curve */}
        <path
          className="fill-none stroke-white stroke-[2.25] [stroke-linecap:round] [stroke-linejoin:round]"
          d="M0,206 C34,200 66,178 100,166 C108,163 110,163 112,164 C124,172 132,214 146,220 C158,225 166,222 176,206 C190,183 196,64 216,58 L318,58 C334,58 340,96 356,124 C388,180 430,196 480,200"
        />
        
        {/* Key dwell set points */}
        <circle className="fill-orange-500" cx="216" cy="58" r="4.5" />
        <circle className="fill-orange-500" cx="318" cy="58" r="4.5" />
        
        {/* Phase Labels */}
        <g className="font-mono text-[9px] tracking-widest fill-white/70 uppercase">
          <text x="0" y="256">Precondition</text>
          <text x="118" y="256">Vacuum</text>
          <text x="182" y="256">Gas dwell</text>
          <text x="330" y="256">Aeration</text>
        </g>
      </svg>
      
      <div className="flex items-center gap-2.5 mt-4 pt-4 border-t border-white/15 text-xs text-white/70">
        <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
          Illustrative Cycle
        </span>
        <span className="text-white/60">
          Phase order verified. Cycle parameters customized per device validation protocol.
        </span>
      </div>
    </div>
  );
}
