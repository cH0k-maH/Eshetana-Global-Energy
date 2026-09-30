import { 
  ShieldCheck, 
  Leaf, 
  Award, 
  AlertTriangle, 
  FileCheck, 
  GraduationCap 
} from "lucide-react";

const HSE_PILLARS = [
  {
    title: "Health & Safety",
    desc: "Uncompromising goal of Zero Lost Time Incidents (LTI). We mandate stop-work authority for every crew member across all worksites.",
    icon: ShieldCheck,
  },
  {
    title: "Environmental Responsibility",
    desc: "Proactive prevention of spills, zero chemical discharges, and disciplined waste management that protects offshore and host communities.",
    icon: Leaf,
  },
  {
    title: "Quality Management (QA/QC)",
    desc: "Rigorous quality assurance systems aligning with ISO standards to ensure traceability, calibration, and zero-defect execution.",
    icon: Award,
  },
  {
    title: "Risk & Hazard Assessment",
    desc: "Daily Tool Box Talks (TBT), comprehensive Job Safety Analyses (JSA), and systematic risk mitigation before any tool is lifted.",
    icon: AlertTriangle,
  },
  {
    title: "Statutory Compliance",
    desc: "Strict adherence to Nigerian Upstream Petroleum Regulatory Commission (NUPRC), NIMASA, and international maritime regulations.",
    icon: FileCheck,
  },
  {
    title: "Competence & Training",
    desc: "Mandatory continuous certification, safety refreshers, and competency verification for rope access, rigging, and inspection personnel.",
    icon: GraduationCap,
  },
];

export default function HSE() {
  return (
    <section id="hse" className="py-20 lg:py-28 bg-[#071F3D] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#0B2E59] rounded-full blur-3xl pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123A68] border border-slate-600/60 text-[#F26A21] text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Health, Safety, Environment & Quality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            Safety Embedded Into Every Operation
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            In harsh energy and offshore marine environments, safety is not an afterthought—it is the 
            foundation of operational excellence and long-term asset value.
          </p>
        </div>

        {/* 6 HSE Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {HSE_PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#0B2E59]/40 border border-slate-700/80 hover:border-[#F26A21]/60 hover:bg-[#0B2E59]/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0B2E59] group-hover:bg-[#F26A21] text-[#F26A21] group-hover:text-white flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F26A21] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Policy Commitment Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0B2E59] to-[#123A68] border border-slate-600/70 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-xl font-bold text-white mb-2">Our Target Zero Commitment</h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              We empower every technician and contractor with uncompromised Stop-Work Authority whenever an unsafe 
              condition is identified. Zero harm to people, zero harm to assets, zero harm to the environment.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-center px-4 py-2 rounded bg-[#071F3D]/80 border border-slate-700">
              <span className="block text-2xl font-black text-[#F26A21]">0</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-300 font-bold">LTI Target</span>
            </div>
            <div className="text-center px-4 py-2 rounded bg-[#071F3D]/80 border border-slate-700">
              <span className="block text-2xl font-black text-white">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-300 font-bold">Compliance</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
