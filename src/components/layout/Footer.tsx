import Link from "next/link";
import Logo from "@/components/brand/Logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-dark)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Blurb */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Logo variant="dark" />
            <p className="text-white/80 text-sm leading-relaxed max-w-sm mt-2">
              Pharmaceutical marketing and distribution. Six therapeutic ranges, supplied to distributors, stockists and PCD partners across India.
            </p>
            {/* Newsletter input */}
            <div className="mt-4 flex items-center gap-2 max-w-sm">
              <input
                suppressHydrationWarning
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 text-white placeholder-white/50 text-sm rounded-full px-4 py-2.5 outline-none flex-1 border border-white/15 focus:border-[var(--color-brand-accent)]"
              />
              <button
                aria-label="Subscribe"
                className="w-10 h-10 rounded-full bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent-hover)] text-white flex items-center justify-center flex-shrink-0 transition-colors"
              >
                <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 14 14">
                  <path d="M3.5 10.5l7-7M5 3.5h5.5V9" />
                </svg>
              </button>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent-light)]">Products</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              <li><Link href="#ranges" className="hover:text-white transition-colors">Cardiology</Link></li>
              <li><Link href="#ranges" className="hover:text-white transition-colors">Neurology</Link></li>
              <li><Link href="#ranges" className="hover:text-white transition-colors">Diabetic</Link></li>
              <li><Link href="#ranges" className="hover:text-white transition-colors">Gastrology</Link></li>
              <li><Link href="#ranges" className="hover:text-white transition-colors">Orthopaedic</Link></li>
              <li><Link href="#ranges" className="hover:text-white transition-colors">General</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent-light)]">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#why-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="#franchise" className="hover:text-white transition-colors">Business Opportunity</Link></li>
              <li><Link href="#news" className="hover:text-white transition-colors">Latest News</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent-light)]">Contact</h4>
            <div className="text-sm font-bold text-white">Medelis Healthcare</div>

            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[var(--color-brand-accent-light)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span className="text-xs text-white/80 leading-relaxed">C.O. : 131, 1st floor, 2nd A Cross, Magdi road, Bengaluru-56002</span>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[var(--color-brand-accent-light)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 3h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z" />
              </svg>
              <div className="flex flex-col gap-1 font-mono text-xs text-white/80">
                <a href="tel:+919982299977" className="hover:text-white transition-colors">+91 998 229 9977</a>
                <a href="tel:+919649824365" className="hover:text-white transition-colors">+91 964 982 4365</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[var(--color-brand-accent-light)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <a href="mailto:Kailash.sharma@medelishealthcare.com" className="text-xs text-white/80 hover:text-white transition-colors break-all">Kailash.sharma@medelishealthcare.com</a>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 border-b border-white/10">
          <span>© 2026 Medelis Healthcare. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>

        {/* Rx Disclaimer */}
        <p className="pt-6 text-[11.5px] text-white/50 leading-relaxed max-w-4xl">
          Information on this site is intended for distributors, stockists and healthcare professionals. It is not medical advice and not an advertisement for any prescription medicine. Prescription products are to be dispensed only against a registered medical practitioner&apos;s prescription.
        </p>
      </div>
    </footer>
  );
}
