import Image from "next/image";
import Link from "next/link";
import { Anchor, Compass, Check, ArrowRight } from "lucide-react";

const MARITIME_SERVICES = [
  {
    title: "Marine & Vessel Inspections",
    desc: "Class-certified condition surveys, hull gauging, bunker surveys, and pre-purchase technical evaluations.",
  },
  {
    title: "Offshore Support & Logistical Operations",
    desc: "Platform supply vessel coordination, crew boat technical management, and anchor handling support.",
  },
  {
    title: "Subsea ROV & Cathodic Surveys",
    desc: "Visual underwater surveys of rudders, propellers, sea chests, mooring lines, and sacrificial anodes.",
  },
  {
    title: "Marine Equipment Sourcing & Rigging",
    desc: "Procurement and load-testing of certified towing gear, mooring ropes, shackles, winches, and deck cranes.",
  },
];

export default function Maritime() {
  return (
    <section id="maritime" className="py-20 lg:py-28 bg-[#071F3D] text-white relative overflow-hidden">
      {/* Subtle nautical background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B2E59]/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F26A21]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src="/images (1).jpg"
                alt="Offshore Marine Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F3D] via-transparent to-transparent"></div>
              
              {/* Badge overlay */}
              <div className="absolute top-4 left-4 bg-[#0B2E59]/90 border border-slate-600 px-3 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md">
                <Anchor className="w-4 h-4 text-[#F26A21]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-100">
                  Offshore & Maritime Hub
                </span>
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="mt-4 p-4 rounded-xl bg-[#0B2E59]/60 border border-slate-700/80 backdrop-blur-md flex justify-around text-center">
              <div>
                <span className="block text-xl font-extrabold text-[#F26A21]">24/7</span>
                <span className="text-[11px] text-slate-300 uppercase tracking-wide">Marine Response</span>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div>
                <span className="block text-xl font-extrabold text-white">Class</span>
                <span className="text-[11px] text-slate-300 uppercase tracking-wide">Certified Surveys</span>
              </div>
              <div className="w-px bg-slate-700"></div>
              <div>
                <span className="block text-xl font-extrabold text-[#F26A21]">Zero</span>
                <span className="text-[11px] text-slate-300 uppercase tracking-wide">Environmental Spills</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Offerings */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F26A21]/20 text-[#F26A21] text-xs font-bold uppercase tracking-wider mb-4 border border-[#F26A21]/30">
              <Compass className="w-3.5 h-3.5" />
              <span>Maritime & Offshore Services</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-6">
              Supporting Marine & Offshore Operations with Reliable Technical Services
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-8">
              Navigating offshore operations demands uncompromising precision and rapid logistics. 
              Eshetana Global delivers certified marine inspections, ROV underwater surveys, and vessel technical 
              assistance designed to guarantee safety, operational continuity, and regulatory maritime compliance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {MARITIME_SERVICES.map((m, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#0B2E59]/40 border border-slate-700/70 hover:border-slate-500 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-[#F26A21]/20 text-[#F26A21] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{m.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-7">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#quote"
                className="px-6 py-3 rounded bg-[#F26A21] hover:bg-[#D85611] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2"
              >
                <span>Request Marine Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
              >
                <span>Speak to Marine Consultant</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
