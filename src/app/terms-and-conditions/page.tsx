import Link from "next/link";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using this website, you agree to be bound by these Terms and Conditions. This site is operated by Medelis Healthcare and is intended for use by distributors, stockists, PCD partners and healthcare professionals evaluating our therapeutic ranges.",
  },
  {
    title: "Use of This Website",
    body: "This website is a product catalogue and enquiry platform. It does not process payments, sales, or checkouts. All product listings are for informational purposes to help distributors identify molecules, compositions and pack formats before raising a commercial enquiry.",
  },
  {
    title: "Product Information",
    body: "Composition, dosage form and packing details are provided as general reference information and are subject to change without prior notice. Nothing on this website constitutes medical advice, and prescription products listed here may only be dispensed against a valid prescription from a registered medical practitioner.",
  },
  {
    title: "Enquiries and Commercial Orders",
    body: "Submitting an enquiry through this website does not constitute a binding order. Pricing, minimum order quantities, territory rights and delivery terms are confirmed separately in writing between Medelis Healthcare and the enquiring party before any commercial commitment is made.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this website, including text, graphics, logos and the composition-strip design, is the property of Medelis Healthcare unless otherwise stated, and may not be reproduced without written permission.",
  },
  {
    title: "Limitation of Liability",
    body: "Medelis Healthcare makes reasonable efforts to keep information on this website accurate and current, but does not guarantee that all details are free of error at all times. Medelis Healthcare is not liable for any loss arising from reliance on website content in place of a confirmed commercial agreement.",
  },
  {
    title: "Governing Law",
    body: "These Terms and Conditions are governed by the laws of India, and any disputes arising from the use of this website are subject to the jurisdiction of the courts of Bengaluru, Karnataka.",
  },
  {
    title: "Changes to These Terms",
    body: "Medelis Healthcare may update these Terms and Conditions from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="py-16 bg-[var(--canvas)] min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink600)] mb-8">
          <Link href="/" className="hover:text-[var(--b900)]">Home</Link>
          <svg className="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-[var(--b900)] font-bold">Terms and Conditions</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mb-2">Terms and Conditions</h1>
        <p className="text-xs font-semibold text-[var(--ink400)] mb-10">Last updated: September 2026</p>

        <div className="flex flex-col gap-8">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">{section.title}</h2>
              <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">{section.body}</p>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">Contact</h2>
            <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
              Questions about these Terms and Conditions can be sent to{" "}
              <a href="mailto:medelishealthcare@gmail.com" className="text-[var(--color-brand-accent)] font-semibold">medelishealthcare@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
