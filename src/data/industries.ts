export interface Industry {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
}

export const industriesData: Industry[] = [
  {
    id: "oil-gas",
    name: "Oil & Gas",
    subtitle: "Upstream, Midstream & Downstream",
    description: "Supporting exploration platforms, production facilities, flowlines, and downstream refineries with technical integrity and maintenance.",
    icon: "Flame",
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    subtitle: "Thermal & Emerging Renewables",
    description: "Providing mechanical reliability, turbine inspection, electrical testing, and statutory compliance for generation facilities.",
    icon: "Zap",
  },
  {
    id: "maritime",
    name: "Maritime & Offshore",
    subtitle: "Vessels, Harbors & Subsea",
    description: "Ensuring vessel seaworthiness, anchor chain integrity, underwater hull condition, and port logistics support.",
    icon: "Ship",
  },
  {
    id: "industrial",
    name: "Industrial & Manufacturing",
    subtitle: "Heavy Processing & Petrochemicals",
    description: "Maintaining continuous production uptime through predictive maintenance, corrosion auditing, and equipment procurement.",
    icon: "Factory",
  },
  {
    id: "construction",
    name: "Engineering & Construction",
    subtitle: "EPC Contractors & Fabricators",
    description: "Quality assurance, non-destructive testing, lifting equipment load certification, and rope access for large infrastructure builds.",
    icon: "HardHat",
  },
  {
    id: "infrastructure",
    name: "Energy Infrastructure",
    subtitle: "Storage Terminals & Pipelines",
    description: "Integrity management for critical pipeline corridors, strategic storage terminals, and bulk fuel handling facilities.",
    icon: "Building2",
  },
];
