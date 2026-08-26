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
                className="inline-flex items-center justify-between gap-3 bg-white text-[var(--color-brand-primary)] hover:bg-[var(--b50)] font-bold text-sm px-5 py-2.5 rounded-full shadow-xl transition-all group"
              >
                <span>Apply for Channel Partner</span>
                <CircularArrow variant="alt" size="sm" />
              </Link>

              <a
                href="https://wa.me/919649824365"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 bg-white text-[var(--color-brand-primary)] hover:bg-[var(--b50)] font-bold text-sm px-5 py-2.5 rounded-full shadow-xl transition-all"
              >
                <span>WhatsApp Inquiry</span>
                <span className="w-7 h-7 rounded-full bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.36.101 11.943c0 2.105.549 4.16 1.595 5.976L0 24l6.235-1.634a11.882 11.882 0 005.71 1.454h.005c6.585 0 11.945-5.36 11.948-11.943a11.86 11.86 0 00-3.379-8.428" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
