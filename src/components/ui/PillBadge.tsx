import React from "react";

interface PillBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "plain" | "inverse";
  className?: string;
}

export default function PillBadge({
  children,
  variant = "default",
  className = "",
}: PillBadgeProps) {
  const variantMap = {
    default: "bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)]",
    plain: "bg-[var(--b50)] text-[var(--color-brand-primary)]",
    inverse: "bg-white/16 text-white",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 text-[11.5px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${variantMap[variant]} ${className}`}
    >
      {variant !== "plain" && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === "inverse" ? "bg-[var(--color-brand-accent)]" : "bg-[var(--color-brand-accent)]"
          }`}
        />
      )}
      {children}
    </span>
  );
}
