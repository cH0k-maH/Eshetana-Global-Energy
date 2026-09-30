export interface ProjectItem {
  id: string;
  title: string;
  sector: string;
  clientPlaceholder: string;
  location: string;
  serviceCategory: string;
  year: string;
  description: string;
  scopeHighlights: string[];
}

/**
 * PROJECT TRACK RECORD PLACEHOLDERS
 * These entries serve as realistic corporate templates.
 * You can replace with your verified project portfolio entries anytime.
 */
export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Offshore Platform Baseline Ultrasonic & MPI Inspection",
    sector: "Oil & Gas / Offshore",
    clientPlaceholder: "Major Exploration & Production Operator", // [PLACEHOLDER]
    location: "Niger Delta Offshore Basin", // [PLACEHOLDER]
    serviceCategory: "Asset Integrity & NDT",
    year: "2024 - 2025",
    description: "Multi-disciplinary asset integrity campaign evaluating structural integrity of platform jacket tubulars, risers, and high-pressure process manifolds.",
    scopeHighlights: [
      "100% UT thickness mapping of critical flowlines",
      "MPI inspection on critical structural weld joints",
      "Detailed fitness-for-service engineering report",
    ],
  },
  {
    id: "proj-2",
    title: "Rope Access Flare Tip & Derrick Maintenance Campaign",
    sector: "Energy / Refining & Midstream",
    clientPlaceholder: "Gas Processing & Liquefaction Facility", // [PLACEHOLDER]
    location: "Bonny Island Terminal, Rivers State", // [PLACEHOLDER]
    serviceCategory: "Rope Access & Mechanical",
    year: "2024",
    description: "Deployment of Level 3 IRATA rope access technicians for turnaround inspection, surface preparation, and bolt torqueing on elevated flare structures without crane downtime.",
    scopeHighlights: [
      "Zero LTI over 1,400 high-elevation rope access hours",
      "Ultrasonic wall thickness measurement of tip nozzles",
      "Preventative anti-corrosion barrier coating application",
    ],
  },
  {
    id: "proj-3",
    title: "Marine Vessel Hull & Mooring Chain ROV Survey",
    sector: "Maritime & Shipping",
    clientPlaceholder: "International Offshore Logistics Fleet", // [PLACEHOLDER]
    location: "Onne Port & Escravos Anchorage", // [PLACEHOLDER]
    serviceCategory: "Maritime & Subsea ROV",
    year: "2023 - 2024",
    description: "Subsea visual condition assessment, hull marine growth measurement, and cathodic protection anode survey for anchor handling tug vessels.",
    scopeHighlights: [
      "High-definition video documentation of hull appendages",
      "CP potential gradient readings across rudder and propeller",
      "Class-compliant marine survey report delivered in 48 hours",
    ],
  },
  {
    id: "proj-4",
    title: "Critical Process Valves & Instrumentation Procurement",
    sector: "Industrial & Petrochemical",
    clientPlaceholder: "Downstream Energy Corporation", // [PLACEHOLDER]
    location: "Warri Industrial Zone, Delta State", // [PLACEHOLDER]
    serviceCategory: "Equipment Procurement",
    year: "2023",
    description: "Turnkey procurement, expediting, factory acceptance inspection, and delivery of high-temperature API 6D ball valves and pressure transmitters.",
    scopeHighlights: [
      "Full material test reports (MTR) and traceability tracking",
      "100% on-time delivery meeting critical shutdown milestone",
      "Third-party hydro-test certification verified",
    ],
  },
];
