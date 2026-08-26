import Image from "next/image";
import PillBadge from "@/components/ui/PillBadge";
import { WhyUsItem } from "@/lib/content/types";
import { getAssetUrl } from "@/utils/assets";

interface WhyChooseUsProps {
  items: WhyUsItem[];
}

export default function WhyChooseUs({ items }: WhyChooseUsProps) {
  return (
    <section id="why-us" className="py-20 bg-[var(--canvas-deep)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src={getAssetUrl("/images/hero_workout.png")}
                alt="Active lifestyle and distributor confidence"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div>
              <PillBadge>Distributor Benefits</PillBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mt-3">
                Why Indian Stockists Choose <span className="text-[var(--b900)]">Medelis</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[var(--b50)] text-[var(--b900)] flex items-center justify-center mb-3">
                    {item.iconName === "shield-check" && (
                      <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    )}
                    {item.iconName === "package" && (
                      <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    )}
                    {item.iconName === "clock" && (
                      <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    )}
                    {item.iconName === "file-text" && (
                      <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-bold text-[var(--ink900)] text-base mb-1">{item.title}</h3>
                  <p className="text-xs text-[var(--ink600)] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
