import Link from "next/link";
import { Flame, Zap, Ship, Factory, HardHat, Building2, ArrowUpRight } from "lucide-react";
import { industriesData } from "../data/industries";

function getIndustryIcon(iconName: string) {
  switch (iconName) {
    case "Flame": return Flame;
    case "Zap": return Zap;
    case "Ship": return Ship;
    case "Factory": return Factory;
    case "HardHat": return HardHat;
    case "Building2": return Building2;
    default: return Factory;
  }
}

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#F4F6F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B2E59]/10 text-[#0B2E59] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Sectors We Support</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight font-heading">
              Industries We Serve
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mt-4 md:mt-0">
            Applying specialized engineering standards and technical expertise across mission-critical asset domains.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => {
            const Icon = getIndustryIcon(ind.icon);
            return (
              <div
                key={ind.id}
                className="bg-white rounded-xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#0B2E59]/5 group-hover:bg-[#0B2E59] text-[#0B2E59] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-[#F26A21] transition-colors" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F26A21] block mb-1">
                    {ind.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2E59] mb-3 group-hover:text-[#0B2E59] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="#quote"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B2E59] group-hover:text-[#F26A21] transition-colors"
                  >
                    <span>Request Industry Scope</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
