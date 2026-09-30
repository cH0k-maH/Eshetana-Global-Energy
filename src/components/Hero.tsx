import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck, Award, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Navy Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/images.jpg"
          alt="Eshetana Global Energy Infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered corporate navy overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071F3D] via-[#0B2E59]/90 to-[#071F3D]/85"></div>
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#071F3D]/40 to-[#071F3D]/95"></div>
        {/* Subtle grid pattern overlay for engineering feel */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123A68]/80 border border-slate-600/50 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F26A21] animate-ping"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-200">
              Integrated Technical & Energy Solutions
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-heading">
            Powering Energy. <br className="hidden sm:inline" />
            <span className="text-white">Protecting Assets.</span> <br className="hidden sm:inline" />
            <span className="text-[#F26A21]">Delivering Excellence.</span>
          </h1>

          {/* Subtitle / Company Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
            <strong className="text-white font-semibold">Eshetana Global Energy Services Limited</strong> provides 
            integrated energy, oil & gas, asset integrity, inspection, procurement, maritime, and technical consulting solutions built around your operational demands.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link
              href="#quote"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded bg-[#F26A21] hover:bg-[#D85611] text-white font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wider uppercase border border-white/20 backdrop-blur-md transition-all duration-300"
            >
              <span>Explore Our Services</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

          {/* Capability Ticker Line */}
          <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium text-slate-300">
            <span className="text-[#F26A21] font-bold uppercase tracking-wider">Core Capabilities:</span>
            <span>Oil & Gas</span>
            <span className="text-slate-600">•</span>
            <span>Asset Integrity</span>
            <span className="text-slate-600">•</span>
            <span>Energy Solutions</span>
            <span className="text-slate-600">•</span>
            <span>Maritime Support</span>
            <span className="text-slate-600">•</span>
            <span>Procurement</span>
            <span className="text-slate-600">•</span>
            <span>Consulting</span>
          </div>
        </div>

        {/* Floating Value Metrics Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 pt-6 border-t border-slate-800">
          <div className="bg-[#071F3D]/80 border border-slate-700/70 p-4 rounded-lg backdrop-blur-sm flex items-start gap-3.5">
            <div className="p-2.5 rounded bg-[#0B2E59] text-[#F26A21] flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">Target Zero HSE</h4>
              <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                Uncompromising safety culture embedded into every offshore and onshore work scope.
              </p>
            </div>
          </div>

          <div className="bg-[#071F3D]/80 border border-slate-700/70 p-4 rounded-lg backdrop-blur-sm flex items-start gap-3.5">
            <div className="p-2.5 rounded bg-[#0B2E59] text-[#F26A21] flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">Certified Competence</h4>
              <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                IRATA, LEEA, and ASNT qualified specialists with rigorous industry experience.
              </p>
            </div>
          </div>

          <div className="bg-[#071F3D]/80 border border-slate-700/70 p-4 rounded-lg backdrop-blur-sm flex items-start gap-3.5">
            <div className="p-2.5 rounded bg-[#0B2E59] text-[#F26A21] flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">Rapid Deployment</h4>
              <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                Agile technical teams mobilized promptly across Nigeria and West African energy hubs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
