export interface OfficeLocation {
  city: string;
  type: string;
  address: string;
  phones: string[];
  email: string;
  isHeadquarters?: boolean;
}

export interface ContactInfo {
  companyName: string;
  tagline: string;
  offices: OfficeLocation[];
  generalPhone: string;
  emergencyPhone: string;
  generalEmail: string;
  rfqEmail: string;
  careersEmail: string;
  workingHours: string;
  whatsappNumber: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

/**
 * CONTACT INFORMATION PLACEHOLDERS
 * You can update these details anytime with your official corporate contact information.
 */
export const contactData: ContactInfo = {
  companyName: "Eshetana Global Energy Services Limited",
  tagline: "Powering Energy. Protecting Assets. Delivering Excellence.",
  
  // General Corporate Contacts
  generalPhone: "+234 (0) 800 ESHETANA / +234 (0) 803 000 0000", // [PLACEHOLDER - Replace with official line]
  emergencyPhone: "+234 (0) 802 000 0000", // [PLACEHOLDER - 24/7 Operations Support line]
  generalEmail: "info@eshetana.com", // [PLACEHOLDER - Replace with official email]
  rfqEmail: "rfq@eshetana.com", // [PLACEHOLDER - Dedicated quotation desk]
  careersEmail: "careers@eshetana.com",
  workingHours: "Monday – Friday: 8:00 AM – 5:00 PM (Operations: 24/7 Support)",
  whatsappNumber: "+2348030000000", // [PLACEHOLDER - Click-to-chat WhatsApp number]

  offices: [
    {
      city: "Port Harcourt (Operational Base)",
      type: "Operations & Technical Hub",
      address: "Plot 14, Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria", // [PLACEHOLDER]
      phones: ["+234 (0) 84 000 0000", "+234 (0) 803 000 0001"],
      email: "phc@eshetana.com",
      isHeadquarters: true,
    },
    {
      city: "Lagos (Corporate Office)",
      type: "Executive Liaison Office",
      address: "Energy Tower, Victoria Island, Lagos State, Nigeria", // [PLACEHOLDER]
      phones: ["+234 (0) 1 000 0000", "+234 (0) 803 000 0002"],
      email: "lagos@eshetana.com",
    },
    {
      city: "Warri / Niger Delta",
      type: "Field Operations Support",
      address: "NPA Commercial Corridor, Warri, Delta State, Nigeria", // [PLACEHOLDER]
      phones: ["+234 (0) 53 000 0000"],
      email: "warri@eshetana.com",
    },
  ],

  socials: {
    linkedin: "https://linkedin.com/company/eshetana-global",
    twitter: "https://twitter.com/eshetanaglobal",
    facebook: "https://facebook.com/eshetanaglobal",
  },
};
