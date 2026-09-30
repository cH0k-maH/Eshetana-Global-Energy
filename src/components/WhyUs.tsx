import { 
  Award, 
  ShieldCheck, 
  Clock, 
  Layers, 
  UserCheck, 
  Cpu 
} from "lucide-react";

const REASONS = [
  {
    title: "Technical Expertise",
    desc: "Certified multi-disciplinary engineers and technicians delivering specialized inspection, access, and procurement solutions.",
    icon: Award,
  },
  {
    title: "Safety First (Target Zero)",
    desc: "Rigorous HSE systems deeply ingrained into job hazard analysis, risk management, and offshore work protocols.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable & On-Time Delivery",
    desc: "Proven project management schedules that minimize unplanned downtime and guarantee timely equipment mobilization.",
    icon: Clock,
  },
  {
    title: "Integrated Single-Source Partner",
    desc: "Eliminate vendor fragmentation by securing procurement, non-destructive testing, rope access, and consulting under one roof.",
    icon: Layers,
  },
  {
    title: "Client-Centric Flexibility",
    desc: "Engineering workflows tailored around your specific operational parameters, timelines, and commercial constraints.",
    icon: UserCheck,
  },
  {
    title: "Deep Industry Domain Knowledge",
    desc: "Thorough understanding of regulatory demands, statutory certifications, and environmental realities across West Africa.",
    icon: Cpu,
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B2E59]/10 text-[#0B2E59] text-xs font-bold uppercase tracking-wider mb-3">
            <span>The Eshetana Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight font-heading mb-4">
            Why Work With Eshetana Global?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We combine technical rigor, accredited safety practices, and responsive project management 
            to solve complex engineering challenges with tangible business value.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#F4F6F8] border border-slate-200 hover:border-[#0B2E59] hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0B2E59] group-hover:bg-[#F26A21] text-white flex items-center justify-center mb-6 transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2E59] mb-3 group-hover:text-[#F26A21] transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center text-xs font-semibold text-slate-400 group-hover:text-[#0B2E59] transition-colors">
                  <span>Pillar {idx + 1} of 6</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
