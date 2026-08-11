import Link from "next/link";
import { getAssetUrl } from "@/utils/assets";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Standalone Brand Emblem Icon */}
      <img
        src={getAssetUrl("/images/logo_emblem.png")}
        alt="Medelis Healthcare emblem"
        className="h-11 w-auto object-contain transition-transform group-hover:scale-105 flex-shrink-0"
      />

      {/* Official Brand Wordmark Logo Image */}
      <div className="flex flex-col justify-center leading-none">
        <img
          src={getAssetUrl("/images/medelis_wordmark.png")}
          alt="Medelis"
          className={`h-7 w-auto object-contain ${
            isDark ? "brightness-0 invert" : ""
          }`}
        />
        <span className={`text-[9.5px] font-bold tracking-[0.22em] uppercase mt-1 ${isDark ? "text-[var(--color-brand-accent-light)]" : "text-[var(--ink600)]"}`}>
          Healthcare
        </span>
      </div>
    </Link>
  );
}
