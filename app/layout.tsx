import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eshetana.com"),
  title: "Eshetana Global Energy Services Limited | Integrated Energy, Oil & Gas & Maritime Solutions",
  description: "Eshetana Global Energy Services Limited provides integrated energy, oil & gas, asset integrity, inspection, procurement, maritime and technical consulting solutions.",
  keywords: [
    "Eshetana Global Energy Services",
    "Oil and Gas Nigeria",
    "Asset Integrity Management",
    "Rope Access Inspection",
    "NDT Inspection",
    "Maritime Solutions",
    "Equipment Procurement",
    "Offshore Support",
    "ROV Inspection",
    "Energy Consulting"
  ],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Eshetana Global Energy Services Limited",
    description: "Integrated Energy, Oil & Gas, Asset Integrity, Inspection & Maritime Solutions.",
    siteName: "Eshetana Global Energy Services",
    images: [
      {
        url: "/images/images.jpg",
        width: 1200,
        height: 630,
        alt: "Eshetana Global Energy Services Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eshetana Global Energy Services Limited",
    description: "Integrated Energy, Oil & Gas, Asset Integrity, Inspection & Maritime Solutions.",
    images: ["/images/images.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-[#F26A21] selection:text-white">
        {children}
      </body>
    </html>
  );
}
