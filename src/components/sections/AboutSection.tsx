import Image from "next/image";
import Link from "next/link";
import PillBadge from "@/components/ui/PillBadge";
import CircularArrow from "@/components/ui/CircularArrow";
import { getAssetUrl } from "@/utils/assets";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[var(--canvas)] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column Text */}
          <div className="flex flex-col gap-6">
            <div>
              <PillBadge>Company Profile</PillBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mt-3">
                Built for <span className="text-[var(--b900)]">Stockists</span> & PCD Franchise Partners
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
              Based in Nagpur, Maharashtra, Medelis Healthcare was founded in the year 2009. We have witnessed tremendous growth with the support of our team members, building a large client base across various parts of the country — and now operate from Bengaluru, Karnataka, supplying high-potency molecules across cardiology, neurology, diabetes, orthopaedics, gastrology, and general medicine.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-sm font-bold pl-6 pr-2.5 py-3 rounded-full shadow-md transition-all group"
              >
                <span>Partner With Us</span>
                <CircularArrow variant="primary" size="md" />
              </Link>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src={getAssetUrl("/images/hero_family.png")}
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
              <div className="text-xs font-semibold text-[var(--ink600)] mt-1">
                Formulations across 6 speciality therapeutic ranges.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
