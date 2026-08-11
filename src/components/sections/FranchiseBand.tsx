import Link from "next/link";
import PillBadge from "@/components/ui/PillBadge";
import CircularArrow from "@/components/ui/CircularArrow";

export default function FranchiseBand() {
  return (
    <section id="franchise" className="py-16 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[var(--b900)] overflow-hidden p-8 sm:p-14 shadow-2xl text-white">
          {/* Subtle Accent Glow Backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--b700)]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div>
                <PillBadge variant="inverse">Business Opportunity</PillBadge>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                PCD & Franchise Partnerships{" "}
                <span className="text-[#90CAF9] drop-shadow-sm">District by District</span>
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Promotional support, monopoly territory rights and the full therapeutic catalogue on offer. Tell us your district territory and current network, and we will share available product allocations.
              </p>
            </div>

            {/* Action Buttons with High-Contrast Crisp Styling */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
              <Link
                href="#enquiry"
                className="inline-flex items-center justify-between bg-white text-[var(--b900)] hover:bg-[var(--b50)] font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-full shadow-xl transition-all group border border-white/20"
              >
                <span>Apply for Franchise</span>
                <CircularArrow variant="primary" size="md" />
              </Link>

              <a
                href="https://wa.me/919829000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/30 backdrop-blur-sm transition-all"
              >
                <svg className="w-5 h-5 fill-current text-[#90CAF9]" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6L.05 24l6.17-1.61A11.9 11.9 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.92 9.92 0 01-5.06-1.39l-.36-.21-3.76.99 1-3.66-.24-.38A9.9 9.9 0 012 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0122 12c0 5.52-4.48 10-10 10z" />
                </svg>
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
