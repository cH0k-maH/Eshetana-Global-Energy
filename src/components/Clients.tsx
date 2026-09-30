"use client";

import Image from "next/image";
import { clientLogosRow1, clientLogosRow2, ClientLogo } from "../data/clients";

// Helper component for a single logo card
function LogoCard({ logo }: { logo: ClientLogo }) {
  return (
    <div
      className="flex-shrink-0 w-44 sm:w-52 h-20 sm:h-24 mx-3 bg-white rounded-xl border-2 border-slate-100 shadow-md
        hover:shadow-[0_8px_30px_rgba(242,106,33,0.25)] hover:border-[#F26A21] hover:scale-110
        transition-all duration-300 flex items-center justify-center p-3.5 group cursor-pointer"
    >
      <div className="relative w-full h-full">
        <Image
          src={logo.src}
          alt={logo.name}
          fill
          sizes="200px"
          className="object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-150"
        />
      </div>
    </div>
  );
}

export default function Clients() {
  // Duplicate arrays to ensure seamless infinite looping marquee
  const row1Items = [...clientLogosRow1, ...clientLogosRow1];
  const row2Items = [...clientLogosRow2, ...clientLogosRow2];

  return (
    <section id="clients" className="py-20 bg-[#F4F6F8] border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B2E59]/10 text-[#0B2E59] text-xs font-bold uppercase tracking-wider mb-3">
          <span>Trusted Industry Partners</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2E59] tracking-tight font-heading mb-3">
          Our Clients & Strategic Alliances
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Collaborating with premier operators, engineering contractors, and energy conglomerates across Nigeria and international maritime corridors.
        </p>
      </div>

      {/* Marquee Wrapper with soft edge fades */}
      <div className="relative w-full overflow-hidden marquee-container py-2">
        {/* Left & Right gradient fades for smooth visual masking */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F4F6F8] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F4F6F8] to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Forward Animation */}
        <div className="mb-5 flex overflow-hidden">
          <div className="animate-marquee-forward flex items-center">
            {row1Items.map((logo, index) => (
              <LogoCard key={`row1-${logo.id}-${index}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 2: Backward Animation (Opposing Direction) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-backward flex items-center">
            {row2Items.map((logo, index) => (
              <LogoCard key={`row2-${logo.id}-${index}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      {/* Pause indicator hint */}
      <div className="text-center mt-6">
        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
          Hover to pause inspection
        </span>
      </div>
    </section>
  );
}
