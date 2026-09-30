export interface CoreService {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
}

export interface TechnicalCapability {
  id: string;
  title: string;
  acronym?: string;
  description: string;
  keyPoints: string[];
  icon: string;
}

export const servicesBannerImage = "/images/images (1).jpg"; // [PLACEHOLDER - Ready to be replaced anytime]

export const coreServices: CoreService[] = [
  {
    id: "oil-and-gas",
    slug: "oil-gas",
    title: "Oil & Gas Services",
    shortDesc: "Integrated solutions supporting upstream, midstream, and downstream industrial operations.",
    fullDesc: "Eshetana Global delivers multidisciplinary engineering, field support, flowline maintenance, and facility support to maximize uptime and operational safety across harsh energy environments.",
    features: [
      "Upstream wellhead & pipeline support",
      "Midstream transport & facility maintenance",
      "Downstream plant integrity & shutdowns",
      "Process optimization & field engineering",
    ],
    icon: "Flame",
  },
  {
    id: "procurement",
    slug: "equipment-procurement",
    title: "Equipment Procurement & Supply",
    shortDesc: "Sourcing and supply of certified tools, components, instrumentation, and heavy materials.",
    fullDesc: "Leveraging our established international supply chain networks, we procure OEM certified valves, pipes, safety apparatus, electrical instrumentation, and specialized offshore equipment on schedule.",
    features: [
      "Valves, piping & specialized fittings",
      "Inspection & measurement instrumentation",
      "Personal Protective Equipment (PPE) & safety gear",
      "Subsea & topside mechanical spares",
    ],
    icon: "PackageCheck",
  },
  {
    id: "asset-integrity",
    slug: "asset-integrity",
    title: "Asset Integrity Management",
    shortDesc: "Inspection, continuous monitoring, and maintenance designed to extend asset lifecycle.",
    fullDesc: "Comprehensive lifecycle asset protection. We identify degradation mechanisms, prevent catastrophic failures, and ensure strict compliance with global energy regulations and safety standards.",
    features: [
      "Corrosion monitoring & control",
      "Risk-Based Inspection (RBI) programs",
      "Fitness-for-Service (FFS) assessments",
      "Structural baseline & remaining life analysis",
    ],
    icon: "ShieldAlert",
  },
  {
    id: "energy",
    slug: "energy-solutions",
    title: "Energy Solutions",
    shortDesc: "Technical and operational engineering solutions across the evolving global energy sector.",
    fullDesc: "From conventional thermal operations to sustainable transition initiatives, we deliver high-efficiency technical solutions, power reliability systems, and environmental compliance frameworks.",
    features: [
      "Power generation system support",
      "Energy efficiency audits & decarbonization",
      "Substation & electrical testing",
      "Renewable & hybrid energy integration",
    ],
    icon: "Zap",
  },
  {
    id: "consulting",
    slug: "technical-consulting",
    title: "Technical & Advisory Consulting",
    shortDesc: "Professional technical advisory, QA/QC, project management, and feasibility engineering.",
    fullDesc: "Our senior consultants and chartered engineers guide clients through complex project planning, regulatory compliance, contractor oversight, audits, and operational de-risking.",
    features: [
      "QA/QC oversight & vendor auditing",
      "Engineering studies & FEED reviews",
      "Regulatory & environmental compliance",
      "Project risk management & HAZOP facilitation",
    ],
    icon: "Briefcase",
  },
  {
    id: "maritime",
    slug: "maritime-support",
    title: "Maritime & Offshore Support",
    shortDesc: "Marine support, offshore vessel services, harbor assistance, and specialized inspection.",
    fullDesc: "End-to-end marine logistics, offshore vessel technical support, hull condition assessments, and mooring inspections to guarantee safety and compliance in marine environments.",
    features: [
      "Vessel technical support & condition surveys",
      "Offshore supply vessel (OSV) coordination",
      "Subsea mooring & riser inspection",
      "Port & harbor technical support",
    ],
    icon: "Anchor",
  },
];

export const technicalCapabilities: TechnicalCapability[] = [
  {
    id: "rope-access",
    title: "Rope Access Services",
    acronym: "IRATA Certified",
    description: "Safe, rapid, and economical access to complex vertical and offshore structures without requiring heavy scaffolding.",
    keyPoints: [
      "High-angle inspection & maintenance",
      "NDT on flare stacks & derrick structures",
      "Blasting, coating, and mechanical repairs",
    ],
    icon: "TrendingUp",
  },
  {
    id: "ndt-inspection",
    title: "NDT Inspection",
    acronym: "Non-Destructive Testing",
    description: "Advanced non-invasive testing protocols ensuring component integrity and detecting subsurface defects.",
    keyPoints: [
      "Ultrasonic Testing (UT) & Phased Array",
      "Magnetic Particle (MPI) & Dye Penetrant (DPI)",
      "Eddy Current & Radiographic Examination",
    ],
    icon: "SearchCheck",
  },
  {
    id: "lifting-inspection",
    title: "Lifting Inspection & Certification",
    acronym: "LEEA Compliant",
    description: "Comprehensive proof-load testing, statutory certification, and integrity validation for all lifting equipment.",
    keyPoints: [
      "Cranes, davits & winches load testing",
      "Slings, shackles & loose lifting gear audits",
      "Statutory six-month & annual certifications",
    ],
    icon: "Layers",
  },
  {
    id: "rov-inspections",
    title: "ROV Subsea Inspections",
    acronym: "Remotely Operated Vehicles",
    description: "Deepwater visual surveys, cathodic protection measurements, and seabed investigations using high-definition ROVs.",
    keyPoints: [
      "Subsea pipeline & riser surveys",
      "Jacket & platform underwater inspection",
      "Cathodic protection (CP) measurement",
    ],
    icon: "Compass",
  },
  {
    id: "training-certification",
    title: "Training & Technical Certification",
    acronym: "Industry Standard",
    description: "Tailored industrial workforce training and accredited technical skill development for energy personnel.",
    keyPoints: [
      "HSE & emergency response drills",
      "Basic & intermediate inspection methods",
      "Workplace competence verification",
    ],
    icon: "GraduationCap",
  },
  {
    id: "epc-support",
    title: "EPC Technical Support",
    acronym: "Engineering & Construction",
    description: "Specialized engineering, procurement coordination, and construction assistance for industrial facilities.",
    keyPoints: [
      "Fabrication QA/QC surveillance",
      "Pre-commissioning & commissioning support",
      "Material traceability & certification",
    ],
    icon: "Wrench",
  },
];
