import Link from "next/link";
import PillBadge from "@/components/ui/PillBadge";
import CircularArrow from "@/components/ui/CircularArrow";
import { RangeItem } from "@/lib/content/types";

interface RangeGridProps {
  ranges: RangeItem[];
}

export default function RangeGrid({ ranges }: RangeGridProps) {
  return (
    <section id="ranges" className="py-20 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <PillBadge>Therapeutic Ranges</PillBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mt-3">
              Six Ranges that Drive{" "}
              <span className="text-[var(--b900)]">Real Impact</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--ink600)]">
              Launching with six super-speciality ranges rather than eighteen thin ones. A range publishes once it holds at least three verified products.
            </p>
            <Link href="#featured" className="tlink mt-3 inline-flex">
              <span>Explore All Products</span>
              <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 14 14">
                <path d="M3.5 10.5l7-7M5 3.5h5.5V9" />
              </svg>
            </Link>
          </div>
        </div>

        {/* 6 Range Cards Grid (Plain White Default -> Deep Blue Fill on Hover) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ranges.map((r) => (
            <div
              key={r.slug}
              className="group bg-white hover:bg-[var(--b900)] text-[var(--ink900)] hover:text-white rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl card-lift cursor-pointer border border-slate-100"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--b50)] text-[var(--b900)] group-hover:bg-white/20 group-hover:text-white transition-colors">
                    {r.iconName === "heart" && (
                      <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    )}
                    {r.iconName === "brain" && (
                      <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                        <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 011.32-4.24A2.5 2.5 0 019.5 2zM14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-1.32-4.24A2.5 2.5 0 0014.5 2z" />
                      </svg>
                    )}
                    {r.iconName === "activity" && (
                      <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    )}
                    {r.iconName === "droplet" && (
                      <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                      </svg>
                    )}
                    {r.iconName === "bone" && (
                      <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                        <path d="M17 3a2.5 2.5 0 00-2.5 2.5c0 .53.16 1.02.43 1.43L8.93 12.93A2.49 2.49 0 007.5 12 2.5 2.5 0 105 14.5c0 .53.16 1.02.43 1.43l6 6c.41.27.9.43 1.43.43a2.5 2.5 0 102.5-2.5c0-.53-.16-1.02-.43-1.43l-6-6c-.41-.27-.9-.43-1.43-.43A2.49 2.49 0 008.93 7.07l6-6C15.34 4.8 15.83 4.64 16.36 4.64" />
                      </svg>
                    )}
                    {r.iconName === "plus-square" && (
                      <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    )}
                  </div>

                  <CircularArrow variant="card" size="md" />
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                  {r.title}
                </h3>

                <p className="text-sm leading-relaxed text-[var(--ink600)] group-hover:text-white/85 transition-colors">
                  {r.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-white/20 flex items-center justify-between transition-colors">
                <span className="text-xs font-medium text-[var(--ink400)] group-hover:text-white/70">
                  {r.productCount}
                </span>
                <span className="text-xs font-bold text-[var(--b900)] group-hover:text-white flex items-center gap-1">
                  Learn More &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
