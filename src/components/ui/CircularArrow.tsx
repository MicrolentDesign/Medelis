import React from "react";

interface CircularArrowProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "alt" | "card" | "inverse";
  className?: string;
}

export default function CircularArrow({
  size = "md",
  variant = "primary",
  className = "",
}: CircularArrowProps) {
  const sizeMap = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-9 h-9",
  };

  const variantMap = {
    primary: "bg-white text-[var(--color-brand-primary)]",
    alt: "bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)]",
    card: "bg-[var(--b50)] text-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-white",
    inverse: "bg-white/20 text-white group-hover:bg-white group-hover:text-[var(--color-brand-primary)]",
  };

  return (
    <span
      className={`inline-grid place-items-center rounded-full transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${sizeMap[size]} ${variantMap[variant]} ${className}`}
    >
      <svg
        className="w-3.5 h-3.5 stroke-current stroke-[2.2] fill-none stroke-linecap-round stroke-linejoin-round"
        viewBox="0 0 14 14"
      >
        <path d="M3.5 10.5l7-7M5 3.5h5.5V9" />
      </svg>
    </span>
  );
}
