import Image from "next/image";
import Link from "next/link";
import { 
  Flame, 
  PackageCheck, 
  ShieldAlert, 
  Zap, 
  Briefcase, 
  Anchor, 
  TrendingUp, 
  SearchCheck, 
  Layers, 
  Compass, 
  GraduationCap, 
  Wrench, 
  ArrowRight, 
  CheckCircle 
} from "lucide-react";
import { coreServices, technicalCapabilities, servicesBannerImage } from "../data/services";

// Helper icon resolver
function getServiceIcon(iconName: string) {
  switch (iconName) {
    case "Flame": return Flame;
    case "PackageCheck": return PackageCheck;
    case "ShieldAlert": return ShieldAlert;
    case "Zap": return Zap;
    case "Briefcase": return Briefcase;
    case "Anchor": return Anchor;
    case "TrendingUp": return TrendingUp;
    case "SearchCheck": return SearchCheck;
    case "Layers": return Layers;
    case "Compass": return Compass;
    case "GraduationCap": return GraduationCap;
    default: return Wrench;
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B2E59]/10 text-[#0B2E59] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Integrated Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight font-heading mb-4">
            Our Core Energy & Engineering Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering multidisciplinary engineering, certified inspection, specialized procurement, 
            and operational support tailored to the demanding standards of the global energy sector.
          </p>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreServices.map((service) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1"
              >
                {/* Card Top / Content */}
                <div className="p-7">
                  <div className="w-13 h-13 rounded-lg bg-[#0B2E59]/5 group-hover:bg-[#F26A21] flex items-center justify-center transition-colors duration-300 mb-6">
                    <Icon className="w-6 h-6 text-[#0B2E59] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0B2E59] mb-3 group-hover:text-[#F26A21] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2 border-t border-slate-100 pt-5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#F26A21] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Link */}
                <div className="px-7 py-4 bg-[#F4F6F8] border-t border-slate-100 flex items-center justify-between group-hover:bg-[#0B2E59] transition-colors duration-300">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E59] group-hover:text-white transition-colors">
                    Request Solution
                  </span>
                  <Link
                    href="#quote"
                    className="w-7 h-7 rounded-full bg-white group-hover:bg-[#F26A21] flex items-center justify-center text-slate-700 group-hover:text-white transition-all shadow-sm"
                    aria-label={`Request quote for ${service.title}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* SERVICES HERO BANNER (User requirement: public/images (1).jpg placeholder) */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-24 border border-slate-800">
          <div className="relative h-80 sm:h-96 w-full">
            <Image
              src={servicesBannerImage}
              alt="Eshetana Global Offshore Energy Operations Banner"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center"
            />
            {/* Dark Navy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071F3D] via-[#0B2E59]/90 to-[#071F3D]/80"></div>
          </div>

          {/* Overlay Content Box */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-16 text-white max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F26A21] text-white text-xs font-bold uppercase tracking-wider w-max mb-4">
              <span>Offshore & Facility Integrity</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading mb-4">
              Equipped for Harsh Marine & Industrial Environments
            </h3>
            <p className="text-sm sm:text-base text-slate-200 mb-6 leading-relaxed">
              From offshore oil production platforms in the Gulf of Guinea to onshore processing facilities, 
              Eshetana Global combines certified rope access, non-destructive testing, and rapid marine logistics 
              to safeguard your critical infrastructure.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#quote"
                className="px-6 py-3 rounded bg-[#F26A21] hover:bg-[#D85611] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2"
              >
                <span>Book Technical Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all backdrop-blur-sm"
              >
                <span>Contact Engineering Team</span>
              </Link>
            </div>
          </div>
        </div>

        {/* SPECIALIZED INSPECTION & TECHNICAL SERVICES (Section 7) */}
        <div id="technical-services" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F26A21]/10 text-[#F26A21] text-xs font-bold uppercase tracking-wider mb-2">
                <span>Specialized Capabilities</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2E59] tracking-tight font-heading">
                Inspection & Technical Services
              </h3>
            </div>
            <p className="text-sm text-slate-600 max-w-md mt-3 md:mt-0">
              High-precision technical inspection protocols and access methodologies executed according to international industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCapabilities.map((item) => {
              const Icon = getServiceIcon(item.icon);
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-xl border border-slate-200 bg-[#F4F6F8] hover:bg-white hover:border-[#0B2E59] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0B2E59] group-hover:bg-[#F26A21] text-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {item.acronym && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-[#0B2E59] border border-slate-200">
                        {item.acronym}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-[#0B2E59] mb-2 group-hover:text-[#F26A21] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 border-t border-slate-200/80 pt-3">
                    {item.keyPoints.map((pt, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F26A21]"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
