import { StatItem } from "@/lib/content/types";

interface StatsBandProps {
  stats: StatItem[];
}

export default function StatsBand({ stats }: StatsBandProps) {
  return (
    <section className="py-10 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 border border-slate-100">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 sm:gap-4 ${idx > 0 ? "pt-4 lg:pt-0 lg:pl-6" : ""}`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--b50)] text-[var(--b900)] flex items-center justify-center flex-shrink-0">
                {stat.iconName === "users" && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 010 7.75" />
                  </svg>
                )}
                {stat.iconName === "box" && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                )}
                {stat.iconName === "shield" && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )}
                {stat.iconName === "map-pin" && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                )}
              </div>

              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--ink900)] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs lg:text-sm font-semibold text-[var(--ink700)]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
