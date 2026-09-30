"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Calendar, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { projectsData } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "Asset Integrity & NDT", label: "Asset Integrity & NDT" },
    { key: "Rope Access & Mechanical", label: "Rope Access" },
    { key: "Maritime & Subsea ROV", label: "Maritime & ROV" },
    { key: "Equipment Procurement", label: "Procurement" },
  ];

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter((p) => p.serviceCategory === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B2E59]/10 text-[#0B2E59] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Track Record & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight font-heading">
              Featured Projects & Experience
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mt-4 md:mt-0">
            A representative look at our multidisciplinary field executions and inspection campaigns.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-slate-200">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === c.key
                  ? "bg-[#0B2E59] text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#F4F6F8] rounded-xl p-7 border border-slate-200 hover:border-[#0B2E59] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white text-[#0B2E59] border border-slate-200">
                    {project.serviceCategory}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#F26A21]" />
                      {project.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0B2E59] mb-3 group-hover:text-[#F26A21] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Details Meta list */}
                <div className="space-y-2 mb-6 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span><strong className="text-slate-800">Client / Sector:</strong> {project.clientPlaceholder} ({project.sector})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span><strong className="text-slate-800">Location:</strong> {project.location}</span>
                  </div>
                </div>

                {/* Scope Highlights */}
                <div className="space-y-1.5 border-t border-slate-200/80 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Execution Highlights
                  </span>
                  {project.scopeHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F26A21] flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  Reference Case
                </span>
                <Link
                  href="#quote"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B2E59] hover:text-[#F26A21] transition-colors"
                >
                  <span>Request Similar Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="p-6 rounded-xl bg-[#0B2E59] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold">Have a specific project scope or technical inquiry?</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Our engineering team can review your specifications and prepare a formal proposal.
            </p>
          </div>
          <Link
            href="#quote"
            className="px-6 py-3 rounded bg-[#F26A21] hover:bg-[#D85611] text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-md transition-all flex items-center gap-2"
          >
            <span>Submit RFQ Documentation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
