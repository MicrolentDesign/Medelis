import PillBadge from "@/components/ui/PillBadge";

const STANDARDS = [
  {
    text: "Having proper licenses and certifications",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    text: "Providing medicines at reasonable prices",
    icon: (
      <>
        <path d="M12.586 2.586A2 2 0 0011.172 2H4a2 2 0 00-2 2v7.172a2 2 0 00.586 1.414l8.704 8.704a2.426 2.426 0 003.42 0l6.58-6.58a2.426 2.426 0 000-3.42z" />
        <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    text: "Meeting the standards set by the said authorities",
    icon: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </>
    ),
  },
  {
    text: "Following strict quality control methods",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </>
    ),
  },
  {
    text: "Their strong financial position",
    icon: (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
  },
];

export default function SourcingStandards() {
  return (
    <section className="py-20 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <PillBadge>Our Reliable Associations</PillBadge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mt-3">
            Vendors We <span className="text-[var(--b900)]">Work With</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink600)] mt-3">
            We have relationships with certified vendors in the market. The vendors from whom we procure products are appreciated for:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STANDARDS.map((item, idx) => (
            <div
              key={item.text}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-hover border border-slate-100 flex flex-col gap-4 card-lift"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-full bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)] flex items-center justify-center">
                  <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <span className="font-mono text-xs text-[var(--ink400)]">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <p className="text-sm font-semibold text-[var(--ink900)] leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
