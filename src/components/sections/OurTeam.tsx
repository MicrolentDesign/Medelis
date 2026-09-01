import PillBadge from "@/components/ui/PillBadge";

export default function OurTeam() {
  return (
    <section className="py-20 bg-[var(--canvas-deep)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-4">
          <PillBadge>Our Team</PillBadge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)]">
            Doctors and Medical <span className="text-[var(--b900)]">Experts</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
            We have doctors and medical experts who work to serve patients with an effective range of medicines. Our team constantly educates itself, keeping up with the changing trends in the market.
          </p>
        </div>
      </div>
    </section>
  );
}
