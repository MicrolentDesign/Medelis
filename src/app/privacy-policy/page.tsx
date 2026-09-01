import Link from "next/link";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "We collect the email addresses of those who communicate with us, aggregate information on which pages visitors access, and information you volunteer directly — such as the details submitted through our enquiry form.",
      "The information we collect is used to improve the content of our website and the quality of our service, and is not shared with or sold to other organisations for commercial purposes, except to respond to an enquiry you have raised, with your permission, or where required by law.",
    ],
  },
  {
    title: "Enquiry Form Information",
    body: [
      "When you submit an enquiry through this website, we ask for information such as your name, firm or agency name, mobile number, email address, city and state, and the molecules or therapeutic ranges you are enquiring about.",
      "This website does not process payments and does not collect billing addresses, card details or any financial information.",
    ],
    list: [
      { label: "Name", text: "used to identify you and address our response correctly." },
      { label: "Email", text: "used to send enquiry confirmations and follow-up communication." },
      { label: "Mobile number", text: "used to contact you regarding rates, availability and order confirmation." },
      { label: "City / State", text: "used to route your enquiry to the correct regional distribution desk." },
    ],
  },
  {
    title: "Cookies",
    body: ["This website may use limited browser storage to remember preferences such as items added to your enquiry cart. This data is stored on your own device and is not transmitted to our servers unless you submit an enquiry."],
  },
  {
    title: "Data Storage",
    body: ["We use third-party hosting providers to run this website. While the hosting provider supplies the underlying infrastructure, Medelis Healthcare retains ownership of and responsibility for any data submitted through our enquiry form. We may disclose personally identifiable information under special circumstances, such as to comply with a legal obligation."],
  },
  {
    title: "Changes to This Policy",
    body: ["Medelis Healthcare may periodically update this Privacy Policy. Material changes will be reflected by updating the date at the top of this page."],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-[var(--canvas)] min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink600)] mb-8">
          <Link href="/" className="hover:text-[var(--b900)]">Home</Link>
          <svg className="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-[var(--b900)] font-bold">Privacy Policy</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mb-2">Privacy Policy</h1>
        <p className="text-xs font-semibold text-[var(--ink400)] mb-10">Last updated: September 2026</p>

        <div className="flex flex-col gap-8">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">{section.title}</h2>
              <div className="flex flex-col gap-1.5">
                {section.body.map((line, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">{line}</p>
                ))}
              </div>
              {section.list && (
                <ul className="flex flex-col gap-1.5 mt-3">
                  {section.list.map((row) => (
                    <li key={row.label} className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
                      <strong className="text-[var(--ink900)] font-bold">{row.label}:</strong> {row.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h2 className="text-lg font-bold text-[var(--ink900)] mb-2">Contact</h2>
            <p className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
              For privacy-related questions or requests, write to{" "}
              <a href="mailto:medelishealthcare@gmail.com" className="text-[var(--color-brand-accent)] font-semibold">medelishealthcare@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
