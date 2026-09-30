"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Flame, 
  PackageCheck, 
  Anchor, 
  Zap, 
  Briefcase, 
  ArrowRight 
} from "lucide-react";
import { useScroll } from "../hooks/useScroll";
import { contactData } from "../data/contact";

const CORE_SERVICES = [
  { name: "Oil & Gas Services", href: "#services", icon: Flame, desc: "Upstream, midstream & downstream operations" },
  { name: "Equipment Procurement", href: "#services", icon: PackageCheck, desc: "Certified industrial tools & materials" },
  { name: "Asset Integrity Management", href: "#services", icon: ShieldCheck, desc: "Corrosion monitoring & life extension" },
  { name: "Energy Solutions", href: "#services", icon: Zap, desc: "Power, thermal & transition systems" },
  { name: "Technical Consulting", href: "#services", icon: Briefcase, desc: "FEED, QA/QC & advisory engineering" },
  { name: "Maritime & Offshore", href: "#maritime", icon: Anchor, desc: "Vessel support & marine operations" },
];

const TECHNICAL_CAPABILITIES = [
  { name: "Rope Access Services", href: "#technical-services" },
  { name: "NDT Inspection", href: "#technical-services" },
  { name: "Lifting Inspection & Testing", href: "#technical-services" },
  { name: "ROV Subsea Surveys", href: "#technical-services" },
  { name: "Training & Certification", href: "#technical-services" },
];

export default function Navbar() {
  const isScrolled = useScroll(30);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Corporate Ticker Bar */}
      <div className="bg-[#071F3D] text-slate-300 text-xs border-b border-slate-800/80 py-2 hidden lg:block relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F26A21] animate-pulse"></span>
              <span className="text-slate-200 font-medium">Eshetana Global Energy Services Limited</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">RC / Corporate Energy Solutions</span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${contactData.generalPhone}`} 
              className="flex items-center gap-2 hover:text-[#F26A21] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F26A21]" />
              <span>{contactData.generalPhone.split("/")[0].trim()}</span>
            </a>
            <a 
              href={`mailto:${contactData.generalEmail}`} 
              className="flex items-center gap-2 hover:text-[#F26A21] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F26A21]" />
              <span>{contactData.generalEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-[#0B2E59]/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-700/50"
            : "top-0 lg:top-[37px] bg-gradient-to-b from-[#071F3D]/95 via-[#0B2E59]/80 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3.5 group"
            >
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 bg-white p-1 rounded-md shadow-md flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Eshetana Global Logo"
                  fill
                  sizes="52px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-white uppercase leading-none font-heading group-hover:text-[#F26A21] transition-colors">
                  Eshetana
                </span>
                <span className="text-[0.62rem] sm:text-[0.7rem] font-semibold text-slate-300 tracking-widest uppercase mt-1">
                  Global Energy Services Limited
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="#hero"
                className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-100 hover:text-[#F26A21] transition-colors"
              >
                Home
              </Link>

              <Link
                href="#about"
                className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-100 hover:text-[#F26A21] transition-colors"
              >
                About Us
              </Link>

              {/* SERVICES WITH INTERACTIVE DROPDOWN */}
              <div 
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold tracking-wide text-slate-100 hover:text-[#F26A21] transition-colors group cursor-pointer focus:outline-none"
                  aria-expanded={isServicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 text-slate-300 group-hover:text-[#F26A21] ${
                      isServicesOpen ? "rotate-180 text-[#F26A21]" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu Panel */}
                {isServicesOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[540px] z-50">
                    <div className="bg-[#071F3D] border border-slate-700/80 rounded-xl shadow-2xl p-5 backdrop-blur-xl">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Column 1: Core Services */}
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#F26A21] mb-3 pb-1 border-b border-slate-800 flex items-center justify-between">
                            <span>Core Services</span>
                            <span className="text-[10px] text-slate-400 font-normal">6 Pillars</span>
                          </div>
                          <ul className="space-y-2">
                            {CORE_SERVICES.map((s) => {
                              const Icon = s.icon;
                              return (
                                <li key={s.name}>
                                  <Link
                                    href={s.href}
                                    onClick={() => setIsServicesOpen(false)}
                                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#0B2E59] transition-all group"
                                  >
                                    <div className="w-7 h-7 rounded-md bg-[#0B2E59] group-hover:bg-[#F26A21] flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                                      <Icon className="w-4 h-4 text-[#F26A21] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                      <div className="text-xs font-semibold text-white group-hover:text-[#F26A21] transition-colors">
                                        {s.name}
                                      </div>
                                      <p className="text-[10px] text-slate-400 line-clamp-1 leading-snug">
                                        {s.desc}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* Column 2: Technical & Inspection */}
                        <div className="border-l border-slate-800/80 pl-5 flex flex-col justify-between">
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-[#F26A21] mb-3 pb-1 border-b border-slate-800">
                              Inspection & Technical
                            </div>
                            <ul className="space-y-1.5">
                              {TECHNICAL_CAPABILITIES.map((t) => (
                                <li key={t.name}>
                                  <Link
                                    href={t.href}
                                    onClick={() => setIsServicesOpen(false)}
                                    className="flex items-center justify-between py-1.5 px-2 rounded text-xs font-medium text-slate-300 hover:text-white hover:bg-[#0B2E59] transition-all group"
                                  >
                                    <span>{t.name}</span>
                                    <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-[#F26A21] transition-colors" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quick Bottom CTA Card */}
                          <div className="mt-4 p-3 bg-gradient-to-br from-[#0B2E59] to-[#123A68] rounded-lg border border-slate-700/60">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-300 block">
                              Need a specialized scope?
                            </span>
                            <Link
                              href="#quote"
                              onClick={() => setIsServicesOpen(false)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F26A21] hover:text-orange-400 transition-colors mt-1"
                            >
                              <span>Submit RFQ Specifications</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="#industries"
                className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-100 hover:text-[#F26A21] transition-colors"
              >
                Industries
              </Link>

              <Link
                href="#projects"
                className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-100 hover:text-[#F26A21] transition-colors"
              >
                Projects
              </Link>

              <Link
                href="#gallery"
                className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-100 hover:text-[#F26A21] transition-colors"
              >
                Gallery
              </Link>

              <Link
                href="#hse"
                className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-100 hover:text-[#F26A21] transition-colors"
              >
                HSE & Quality
              </Link>

              <Link
                href="#contact"
                className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-100 hover:text-[#F26A21] transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action: Request a Quote CTA */}
            <div className="hidden lg:flex items-center pl-4">
              <Link
                href="#quote"
                className="bg-[#F26A21] hover:bg-[#D85611] text-white px-5 py-2.5 rounded font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:text-[#F26A21] hover:bg-slate-800/50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#071F3D] text-white overflow-y-auto">
          {/* Mobile Top Bar */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="relative w-9 h-9 bg-white p-1 rounded">
                <Image
                  src="/images/logo.png"
                  alt="Eshetana Global Logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-lg uppercase tracking-wider text-white">
                Eshetana Global
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="p-6 space-y-4 flex-1">
            <Link
              href="#hero"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-100 hover:text-[#F26A21] py-2 border-b border-slate-800"
            >
              Home
            </Link>

            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-100 hover:text-[#F26A21] py-2 border-b border-slate-800"
            >
              About Us
            </Link>

            {/* Mobile Accordion for Services */}
            <div className="border-b border-slate-800 py-2">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between text-base font-bold text-slate-100 hover:text-[#F26A21] text-left"
              >
                <span>Services & Capabilities</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180 text-[#F26A21]" : ""
                  }`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="mt-3 pl-3 space-y-2 border-l-2 border-[#F26A21] py-1">
                  <p className="text-[11px] font-bold text-[#F26A21] uppercase tracking-wider">Core Offerings</p>
                  {CORE_SERVICES.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm text-slate-300 hover:text-white py-1"
                    >
                      {s.name}
                    </Link>
                  ))}
                  <p className="text-[11px] font-bold text-[#F26A21] uppercase tracking-wider pt-2">Specialized Inspection</p>
                  {TECHNICAL_CAPABILITIES.map((t) => (
                    <Link
                      key={t.name}
                      href={t.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm text-slate-300 hover:text-white py-1"
                    >
                      {t.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#industries"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-100 hover:text-[#F26A21] py-2 border-b border-slate-800"
            >
              Industries
            </Link>

            <Link
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-100 hover:text-[#F26A21] py-2 border-b border-slate-800"
            >
              Projects & Track Record
            </Link>

            <Link
              href="#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-100 hover:text-[#F26A21] py-2 border-b border-slate-800"
            >
              Gallery
            </Link>

            <Link
              href="#hse"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-100 hover:text-[#F26A21] py-2 border-b border-slate-800"
            >
              HSE & Quality
            </Link>

            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-bold text-slate-100 hover:text-[#F26A21] py-2 border-b border-slate-800"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Bottom CTA */}
          <div className="p-6 bg-[#0B2E59] border-t border-slate-800 space-y-3">
            <Link
              href="#quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full bg-[#F26A21] hover:bg-[#D85611] text-white py-3.5 rounded font-bold text-sm tracking-wider uppercase shadow-lg"
            >
              Request a Quote
            </Link>
            <div className="text-center text-xs text-slate-300 pt-2">
              <a href={`tel:${contactData.generalPhone}`} className="block py-1 hover:text-[#F26A21]">
                Call: {contactData.generalPhone.split("/")[0]}
              </a>
              <a href={`mailto:${contactData.generalEmail}`} className="block py-1 hover:text-[#F26A21]">
                Email: {contactData.generalEmail}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
