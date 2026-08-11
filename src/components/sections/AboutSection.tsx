import Link from "next/link";
import Image from "next/image";
import PillBadge from "@/components/ui/PillBadge";
import CircularArrow from "@/components/ui/CircularArrow";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[var(--canvas-deep)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column Text */}
          <div className="flex flex-col gap-6">
            <div>
              <PillBadge>About Medelis</PillBadge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink900)] mt-3 leading-tight">
                Your Trusted Partner for{" "}
                <span className="text-[var(--b900)]">Healthcare Growth</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[var(--ink600)] leading-relaxed">
              At Medelis Healthcare, we combine pharmacology expertise, consistent batch packaging, and dedicated regional support to help distributors and PCD partners unlock new opportunities.
            </p>

            <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
              We keep the therapeutic range deliberately tight and the paperwork straightforward: clear molecule compositions on every product strip, consistent packing, and one point of contact who answers.
            </p>

            {/* Checkmark List */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--b50)] text-[var(--b900)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-[var(--ink900)]">Monopoly Territory Rights by District</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--b50)] text-[var(--b900)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-[var(--ink900)]">Consistent Pack Sizes & Carton Batching</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--b50)] text-[var(--b900)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-[var(--ink900)]">Quoted Rates Within One Working Day</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="#enquiry"
                className="inline-flex items-center gap-3 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-base font-bold px-7 py-3.5 rounded-full shadow-md transition-all group"
              >
                <span>Learn More About Us</span>
                <CircularArrow variant="primary" size="md" />
              </Link>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/hero_family.png"
                alt="Medelis Healthcare trust and healthy Indian families"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs border border-slate-100">
              <div className="text-3xl font-extrabold text-[var(--b900)]">
                25+ SKUs
              </div>
              <div className="text-sm font-bold text-[var(--ink900)] mt-1">
                High Demand Molecules
              </div>
              <p className="text-xs text-[var(--ink600)] mt-1">
                Composition-first catalogue built for Indian stockists & PCD partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
