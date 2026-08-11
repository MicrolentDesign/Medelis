import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Official Brand Emblem Icon */}
      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1 shadow-sm transition-transform group-hover:scale-105 border border-slate-100 overflow-hidden">
        <img
          src="/images/logo_emblem.png"
          alt="Medelis Healthcare logo emblem"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold text-xl tracking-tight ${isDark ? "text-white" : "text-[var(--color-brand-primary)]"}`}>
          Medelis
        </span>
        <span className={`text-[9.5px] font-bold tracking-[0.22em] uppercase mt-1 ${isDark ? "text-[var(--color-brand-accent-light)]" : "text-[var(--ink600)]"}`}>
          Healthcare
        </span>
      </div>
    </Link>
  );
}
