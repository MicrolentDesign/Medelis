import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Official Brand Emblem Icon */}
      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1 shadow-sm transition-transform group-hover:scale-105 border border-slate-100 overflow-hidden flex-shrink-0">
        <img
          src="/images/logo_emblem.png"
          alt="Medelis Healthcare emblem"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Official Brand Wordmark Logo Image */}
      <div className="flex flex-col leading-none">
        <img
          src="/images/medelis_wordmark.png"
          alt="Medelis"
          className={`h-7 w-auto object-contain ${
            isDark ? "brightness-0 invert" : ""
          }`}
        />
        <span className={`text-[9px] font-bold tracking-[0.22em] uppercase mt-0.5 ${isDark ? "text-[var(--color-brand-accent-light)]" : "text-[var(--ink600)]"}`}>
          Healthcare
        </span>
      </div>
    </Link>
  );
}
