import Link from "next/link";
import { getAssetUrl } from "@/utils/assets";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      aria-label="Medelis Healthcare — home"
      className={`inline-flex items-center group ${className}`}
    >
      {/* Wordmark only. The multi-colour emblem was dropped — its green and
          orange sit outside the blue system and read as a different brand
          next to it. */}
      <div className="flex flex-col justify-center leading-none">
        <img
          src={getAssetUrl("/images/medelis_wordmark.png")}
          alt="Medelis"
          className={`h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-[1.02] ${
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
