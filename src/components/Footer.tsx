import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin 
} from "lucide-react";
import { contactData } from "../data/contact";

export default function Footer() {
  return (
    <>
      {/* Pre-Footer Call to Action Banner (Navy + Orange) */}
      <section className="bg-gradient-to-r from-[#071F3D] via-[#0B2E59] to-[#071F3D] text-white py-16 border-t border-slate-700/60 relative overflow-hidden">
        {/* Glow circles */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#F26A21]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F26A21] block mb-2">
                Operational Readiness
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-3">
                Have a Project Requirement?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tell us about your operational parameters, timelines, and technical requirements. 
                Our engineering team will formulate the appropriate technical and commercial solution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <Link
                href="#quote"
                className="w-full sm:w-auto px-8 py-4 rounded bg-[#F26A21] hover:bg-[#D85611] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto px-7 py-4 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all inline-flex items-center justify-center"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Corporate Footer */}
      <footer className="bg-[#071F3D] text-slate-300 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Col 1: Identity & Description */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-11 h-11 bg-white p-1 rounded">
                  <Image
                    src="/logo.png"
                    alt="Eshetana Global Logo"
                    fill
                    sizes="44px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-lg font-extrabold text-white uppercase tracking-wider block font-heading">
                    Eshetana
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                    Global Energy Services Ltd
                  </span>
                </div>
              </Link>

              <p className="text-slate-400 leading-relaxed text-xs">
                Integrated energy, oil & gas, asset integrity, inspection, procurement, 
                maritime, and technical consulting solutions engineered to protect high-value industrial assets.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={contactData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-[#0B2E59] hover:bg-[#F26A21] text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.46 1.46 0 0 0-2.91 0 1.45 1.45 0 0 0 1.46 1.45m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                  </svg>
                </a>
                <a
                  href={contactData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-[#0B2E59] hover:bg-[#F26A21] text-white flex items-center justify-center transition-colors"
                  aria-label="Twitter / X"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={contactData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-[#0B2E59] hover:bg-[#F26A21] text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4 pb-1 border-b border-slate-800">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5">
                {["Home", "About Us", "Services", "Industries", "Projects", "HSE & Quality", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-[#F26A21] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4 pb-1 border-b border-slate-800">
                Core Services
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Oil & Gas Services",
                  "Asset Integrity Management",
                  "Equipment Procurement & Supply",
                  "Energy Solutions",
                  "Technical Consulting",
                  "Maritime & Offshore Support",
                  "Rope Access & NDT Inspection",
                ].map((s) => (
                  <li key={s}>
                    <Link href="#services" className="hover:text-[#F26A21] transition-colors">
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Corporate Contact */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4 pb-1 border-b border-slate-800">
                Operating Contacts
              </h4>
              
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F26A21] flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  {contactData.offices[0].address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F26A21] flex-shrink-0" />
                <a href={`tel:${contactData.generalPhone}`} className="hover:text-white transition-colors">
                  {contactData.generalPhone.split("/")[0]}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F26A21] flex-shrink-0" />
                <a href={`mailto:${contactData.generalEmail}`} className="hover:text-white transition-colors">
                  {contactData.generalEmail}
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                  Working Hours:
                </span>
                <span className="text-slate-400">{contactData.workingHours}</span>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <p>© {new Date().getFullYear()} Eshetana Global Energy Services Limited. All Rights Reserved.</p>
            <div className="flex items-center space-x-6">
              <span className="hover:text-slate-400">Quality, Health, Safety & Environment</span>
              <span>•</span>
              <span className="hover:text-slate-400">Corporate Compliance</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
