import Link from "next/link";
import Logo from "@/components/brand/Logo";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-indigo-200 pt-16 pb-12 border-t border-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <Logo variant="dark" />
            <p className="text-sm text-indigo-300 leading-relaxed max-w-sm">
              Industrial Ethylene Oxide contract sterilization services built for medical device regulatory & quality audit compliance.
            </p>
            <div className="pt-2">
              <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-800/60 px-2.5 py-1 rounded">
                ISO 11135 Compliant
              </span>
            </div>
          </div>

          {/* Navigation Col 1 */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
              Services & Quality
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  EtO Sterilization
                </Link>
              </li>
              <li>
                <Link href="#quality" className="hover:text-white transition-colors">
                  Validation Protocols (IQ/OQ/PQ)
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  Batch Release Documentation
                </Link>
              </li>
              <li>
                <Link href="#quality" className="hover:text-white transition-colors">
                  Bioburden & Residual Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Col 2 */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
              Target Industries
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#industries" className="hover:text-white transition-colors">
                  Surgical Instruments & Kits
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-white transition-colors">
                  Single-Use Disposables
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-white transition-colors">
                  Implants & Orthopedics
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-white transition-colors">
                  Diagnostic Devices
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Office Col */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
              Facility Location
            </h4>
            <div className="text-sm text-indigo-300 space-y-1">
              <p className="font-medium text-white">Medelis Healthcare Facility</p>
              <p>Industrial Park Zone</p>
              <p>Rajasthan, India</p>
              <p className="pt-2 font-mono text-xs text-indigo-400">
                Email: quality@medelishealthcare.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-indigo-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-indigo-400 gap-4">
          <p>© {new Date().getFullYear()} Medelis Healthcare. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-indigo-200">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-indigo-200">
              Quality Commitment
            </Link>
            <Link href="#" className="hover:text-indigo-200">
              Site Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
