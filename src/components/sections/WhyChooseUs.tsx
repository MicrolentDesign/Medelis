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
                    <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
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
