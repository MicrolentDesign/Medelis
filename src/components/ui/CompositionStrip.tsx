import React from "react";

interface CompositionStripProps {
  composition: string;
  className?: string;
}

export default function CompositionStrip({ composition, className = "" }: CompositionStripProps) {
  return (
    <div
      className={`bg-[var(--color-brand-accent-light)] text-[var(--color-brand-primary)] rounded-md px-3 py-2 text-[14.5px] font-medium leading-snug line-clamp-2 ${className}`}
    >
      {composition}
    </div>
  );
}
