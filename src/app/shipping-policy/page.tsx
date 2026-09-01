import Link from "next/link";

const SECTIONS = [
  {
    title: "1. Delivery Areas",
    body: ["We currently supply to registered distributors, stockists and PCD partners across India. Orders outside India cannot be processed at this time."],
  },
  {
    title: "2. Freight and Delivery Charges",
    body: [
      "Freight terms — whether borne by Medelis Healthcare or the distributor — are agreed upon in the territory or purchase agreement before an order is confirmed.",
      "Any nominal freight charges for orders below the agreed minimum order quantity will be communicated before order confirmation.",
    ],
  },
  {
    title: "3. How to Place an Order",
    body: [
      "Orders are placed as follows:",
      "Submit an enquiry through this website, or contact our regional distribution desk directly, listing the molecules, ranges or SKUs required along with quantities.",
      "Our team reviews the enquiry and confirms available stock, rates and delivery timelines in writing.",
      "Once you confirm the order in writing against our quotation, it is scheduled for dispatch.",
    ],
  },
  {
    title: "4. Delivery Timeline",
    body: [
      "Once an order is confirmed in writing, standard SKUs are typically dispatched within 5 to 7 working days, subject to stock availability, and you can expect delivery within 7 to 12 business days depending on your location.",
      "Newly launched formulations or large-volume orders may carry a longer dispatch window, which will be communicated at the time of order confirmation.",
    ],
  },
  {
    title: "5. Payment Options",
    body: [
      "We offer the following payment methods for confirmed orders:",
      "Bank Transfer (NEFT/RTGS)",
      "Cheque or Demand Draft",
      "Credit terms, where extended, as agreed in the distributor or territory agreement",
      "This website does not process online card payments, and does not offer Cash on Delivery, as it is not a direct-to-patient retail platform.",
    ],
  },
  {
    title: "6. Order Editing and Cancellation",
    body: [
      "Orders can only be edited or cancelled before dispatch.",
      "Write to us at medelishealthcare@gmail.com or call our distribution desk with your order reference number.",
      "Once an order has been dispatched, cancellation is no longer possible.",
    ],
  },
  {
    title: "7. Licensing Requirements",
    body: [
      "All partners must hold a valid drug licence and any other documentation required under applicable pharmaceutical distribution regulations before an order can be dispatched.",
      "Orders from partners without current, verified licensing documentation will not be processed.",
    ],
  },
  {
    title: "8. Order Processing Steps",
    body: [
      "An enquiry is submitted and reviewed by our distribution desk.",
      "Rates, availability and delivery timelines are confirmed in writing.",
      "The partner confirms the order against our quotation.",
      "Stock is dispatched via our logistics partners to the confirmed delivery address.",
    ],
  },
  {
    title: "9. Stock Availability",
    body: ["Stock levels are updated regularly but may vary by batch or location. If an SKU in your order is temporarily unavailable, we will notify you and offer available alternatives from the same range where possible."],
  },
  {
    title: "10. Receiving Orders",
    body: ["Please ensure an authorised representative is available to receive and verify the shipment against the invoice and packing list at the time of delivery."],
  },
  {
    title: "11. Order Tracking",
    body: ["You will receive email or phone updates from our distribution desk at key stages of your order, from confirmation through to dispatch."],
  },
  {
    title: "12. Delays and Unfulfilled Orders",
    body: ["If an order cannot be fulfilled in part or in full, we will inform you promptly and offer either a revised delivery schedule or an adjustment to the order."],
  },
  {
    title: "13. Quality and Authenticity",
    body: [
      "Medelis Healthcare sources formulations from certified, regulated manufacturers.",
      "Every batch dispatched carries transparent composition labelling and remains within its stated shelf life at the time of delivery.",
    ],
  },
];

export default function ShippingPolicyPage() {
  return (
    <div className="py-16 bg-[var(--canvas)] min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink600)] mb-8">
          <Link href="/" className="hover:text-[var(--b900)]">Home</Link>
          <svg className="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-[var(--b900)] font-bold">Shipping Policy</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mb-2">Shipping Policy</h1>
        <p className="text-xs font-semibold text-[var(--ink400)] mb-4">Last updated: September 2026</p>
        <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed mb-10">
          At Medelis Healthcare, we are committed to reliable delivery of genuine, quality-assured formulations to our distributor and stockist network across India. This Shipping Policy explains our order process, delivery timelines and related terms.
        </p>

        <div className="flex flex-col gap-8">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">{section.title}</h2>
              <div className="flex flex-col gap-1.5">
                {section.body.map((line, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">{line}</p>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">14. Customer Support</h2>
            <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
              Email: <a href="mailto:medelishealthcare@gmail.com" className="text-[var(--color-brand-accent)] font-semibold">medelishealthcare@gmail.com</a>
              <br />
              Phone: <a href="tel:+919982299977" className="text-[var(--color-brand-accent)] font-semibold">+91 998 229 9977</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
