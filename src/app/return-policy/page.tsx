import Link from "next/link";

export default function ReturnPolicyPage() {
  return (
    <div className="py-16 bg-[var(--canvas)] min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink600)] mb-8">
          <Link href="/" className="hover:text-[var(--b900)]">Home</Link>
          <svg className="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-[var(--b900)] font-bold">Return Policy</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mb-2">Return Policy</h1>
        <p className="text-xs font-semibold text-[var(--ink400)] mb-4">Last updated: September 2026</p>
        <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed mb-10">
          We do our best to ensure that every order is delivered according to your specifications. This Return Policy applies to bulk stock supplied to registered distributors, stockists and PCD partners, and does not cover retail-style consumer refunds, as this website does not sell directly to individual patients.
        </p>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">Reporting an Issue</h2>
            <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
              If you receive an incomplete order, or damaged or incorrect product(s), please notify our distribution desk immediately, or within 10 working days of receiving the shipment, to ensure prompt resolution. Medelis Healthcare will not be able to accept liability for delivery issues reported after this window.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">Eligibility for Returns</h2>
            <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed mb-2">We accept returns for a batch if:</p>
            <ul className="flex flex-col gap-1.5 list-disc pl-5">
              <li className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">The item(s) received do not match your confirmed order.</li>
              <li className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">The item(s) were damaged in transit or short-shipped (such deliveries should be refused at the doorstep).</li>
              <li className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">The item(s) are due to expire within 3 months of delivery.</li>
            </ul>
            <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed mt-2">
              If you notice a shipment is damaged at the time of delivery, please do not accept it. Please check your order carefully at the time of receipt. Replacement for a damaged item is subject to stock availability; in the absence of a replacement, a credit note will be issued.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">Conditions for Returns</h2>
            <ul className="flex flex-col gap-1.5 list-disc pl-5">
              <li className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">Items being returned must be in their original manufacturer packaging, with labels and barcode intact.</li>
              <li className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">Only fully unused strips, bottles or cartons can be returned.</li>
              <li className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">The batch number of the returned product must match the number on the sales invoice.</li>
              <li className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">The original sales invoice must accompany the return for it to be processed.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">Returns We Do Not Accept</h2>
            <ul className="flex flex-col gap-1.5 list-disc pl-5">
              <li className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">Partially used strips or opened bottles/cartons.</li>
              <li className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">Products requiring specific storage conditions, such as temperature-controlled or cold-chain items.</li>
              <li className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">Products that have expired after delivery.</li>
              <li className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">A second return request against the same batch or order.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">Exceptions</h2>
            <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
              We are unable to offer replacement or credit for certain product categories where noted at the time of order confirmation. Medelis Healthcare reserves the right to decline a return for any product specifically marked as non-returnable at the time of order confirmation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">Contact</h2>
            <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
              To raise a return request, write to{" "}
              <a href="mailto:medelishealthcare@gmail.com" className="text-[var(--color-brand-accent)] font-semibold">medelishealthcare@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
