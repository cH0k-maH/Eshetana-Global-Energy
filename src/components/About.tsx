import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Settings, 
  TrendingUp, 
  Users, 
  ArrowRight 
} from "lucide-react";

const ABOUT_HIGHLIGHTS = [
  {
    title: "Technical Expertise",
    description: "Multidisciplinary engineers and certified technicians delivering high-precision solutions.",
    icon: Settings,
  },
  {
    title: "Safety & HSE Excellence",
    description: "Rigorous adherence to international safety protocols, risk management, and zero-harm standards.",
    icon: ShieldCheck,
  },
  {
    title: "Asset Performance & Reliability",
    description: "Predictive maintenance and non-destructive evaluations that maximize asset operational lifespan.",
    icon: TrendingUp,
  },
  {
    title: "Client-Focused Delivery",
    description: "Custom-tailored execution workflows designed specifically around each client's field requirements.",
    icon: Users,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4F6F8] relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0B2E59_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B2E59]/10 text-[#0B2E59] text-xs font-bold uppercase tracking-wider mb-4">
              <span>About Eshetana Global</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2E59] tracking-tight leading-tight mb-6 font-heading">
              Engineering Solutions Built Around Your Operations
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
              <strong>Eshetana Global Energy Services Limited</strong> delivers integrated technical and energy 
              solutions to clients across the oil & gas, energy, maritime, and industrial sectors. 
              We operate at the nexus of operational safety, asset integrity, and reliable project execution.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Rather than offering generic service catalogs, we analyze your exact field parameters—whether onshore, 
              offshore, or subsea—to deploy qualified personnel, certified inspection equipment, and precision procurement 
              that protects your capital investments and eliminates costly downtime.
            </p>

            {/* Core Values / Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ABOUT_HIGHLIGHTS.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#0B2E59]/5 text-[#F26A21] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B2E59]">{h.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-snug">{h.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Button */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0B2E59] hover:bg-[#123A68] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                <span>Learn More About Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#F26A21]" />
              </Link>
              <Link
                href="#quote"
                className="inline-flex items-center gap-1.5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#F26A21] hover:text-[#D85611] transition-colors"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <Image
                src="/images/images.jpg"
                alt="Eshetana Energy Engineers on Site"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F3D] via-[#0B2E59]/40 to-transparent"></div>

              {/* Bottom Badge Over image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#071F3D]/90 backdrop-blur-md rounded-xl border border-slate-700/80 text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F26A21] flex items-center justify-center font-extrabold text-white text-lg">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-bold text-sm tracking-wide text-white">Full Lifecycle Support</h5>
                    <p className="text-xs text-slate-300">From procurement to decommissioning & maintenance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F26A21]/15 rounded-2xl -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
