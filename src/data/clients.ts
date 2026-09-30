export interface ClientLogo {
  id: string;
  name: string;
  src: string;
}

// All 21 logos from public/images/clinets/
const allClientLogos: ClientLogo[] = [
  { id: "1", name: "DGI Group", src: "/images/clinets/DGI-GROUP-LOGO-1-150x150.png" },
  { id: "2", name: "Partner 1", src: "/images/clinets/images (1).png" },
  { id: "3", name: "Partner 2", src: "/images/clinets/images (2).jpg" },
  { id: "4", name: "Partner 3", src: "/images/clinets/images (2).png" },
  { id: "5", name: "Partner 4", src: "/images/clinets/images (3).jpg" },
  { id: "6", name: "Partner 5", src: "/images/clinets/images (3).png" },
  { id: "7", name: "Partner 6", src: "/images/clinets/images (4).jpg" },
  { id: "8", name: "Partner 7", src: "/images/clinets/images (4).png" },
  { id: "9", name: "Partner 8", src: "/images/clinets/images (5).jpg" },
  { id: "10", name: "Partner 9", src: "/images/clinets/images (5).png" },
  { id: "11", name: "Partner 10", src: "/images/clinets/images (6).jpg" },
  { id: "12", name: "Partner 11", src: "/images/clinets/images (7).jpg" },
  { id: "13", name: "Partner 12", src: "/images/clinets/images (8).jpg" },
  { id: "14", name: "Partner 13", src: "/images/clinets/images (9).jpg" },
  { id: "15", name: "Partner 14", src: "/images/clinets/images 10.jpg" },
  { id: "16", name: "Partner 15", src: "/images/clinets/images 12.jpg" },
  { id: "17", name: "Partner 16", src: "/images/clinets/images 13.jpg" },
  { id: "18", name: "Partner 17", src: "/images/clinets/images 14.jpg" },
  { id: "19", name: "Partner 18", src: "/images/clinets/images 15.jpg" },
  { id: "20", name: "Partner 19", src: "/images/clinets/images 16.png" },
  { id: "21", name: "Partner 20", src: "/images/clinets/images.png" },
];

// Row 1 (Forward animation)
export const clientLogosRow1: ClientLogo[] = allClientLogos.slice(0, 11);

// Row 2 (Backward animation)
export const clientLogosRow2: ClientLogo[] = allClientLogos.slice(11);
