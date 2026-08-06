import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-slate-900";
  const subColor = variant === "dark" ? "text-slate-400" : "text-slate-600";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Official Medelis Logo Image */}
      <div className="relative h-10 w-auto flex items-center justify-center overflow-hidden rounded bg-white/95 px-2.5 py-1 border border-slate-200 shadow-sm group-hover:border-orange-500 transition-colors">
        <Image
          src="/brand/logo.png"
          alt="Medelis Healthcare Logo"
          width={180}
          height={48}
          className="h-7 w-auto object-contain"
          priority
        />
      </div>
      <div className="hidden sm:flex flex-col">
        <span className={`font-sans font-bold text-lg tracking-tight leading-none ${textColor}`}>
          MEDELIS
        </span>
        <span className={`font-mono text-[10px] tracking-widest uppercase mt-0.5 ${subColor}`}>
          HEALTHCARE
        </span>
      </div>
    </Link>
  );
}
