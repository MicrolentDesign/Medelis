import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-slate-900";
  const markColor = variant === "dark" ? "text-orange-500" : "text-orange-700";
  const subColor = variant === "dark" ? "text-slate-400" : "text-slate-600";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Brand Icon Mark */}
      <div className="relative w-8 h-8 flex items-center justify-center rounded bg-indigo-950 border border-indigo-700/50 shadow-sm group-hover:border-orange-500 transition-colors">
        <span className={`font-mono font-bold text-lg leading-none ${markColor}`}>M</span>
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-orange-500 ring-2 ring-indigo-950" />
      </div>
      <div className="flex flex-col">
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
