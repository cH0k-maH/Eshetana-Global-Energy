import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Clients from "@/src/components/Clients";
import Maritime from "@/src/components/Maritime";
import WhyUs from "@/src/components/WhyUs";
import Industries from "@/src/components/Industries";
import Projects from "@/src/components/Projects";
import Gallery from "@/src/components/Gallery";
import HSE from "@/src/components/HSE";
import QuoteForm from "@/src/components/QuoteForm";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Company Introduction / About */}
        <About />

        {/* 3. Core Services & Technical Capabilities (includes images (1).jpg banner placeholder) */}
        <Services />

        {/* 4. Our Clients: Two-row opposing continuous marquee animation */}
        <Clients />

        {/* 5. Maritime & Offshore Solutions */}
        <Maritime />

        {/* 6. Why Choose Eshetana (6 Strategic Business Pillars) */}
        <WhyUs />

        {/* 7. Industries We Serve */}
        <Industries />

        {/* 8. Featured Projects & Track Record */}
        <Projects />

        {/* 9. Site Gallery */}
        <Gallery />

        {/* 10. HSE & Quality Assurance */}
        <HSE />

        {/* 10. Multi-section Quotation & RFQ Engine */}
        <QuoteForm />

        {/* 11. Contact Details with Placeholders & Direct Form */}
        <Contact />
      </main>

      {/* 12. Pre-Footer Call to Action & Corporate Footer */}
      <Footer />
    </div>
  );
}