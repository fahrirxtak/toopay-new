// section import
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Service";
import Pricing from "../components/Pricing";
import Work from "../components/Work";
import OurTeam from "../components/OurTeam";
import Testimonials from "../components/Testimonials";
import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import FAQ from "@/components/FAQ";

import { useLanguage } from "../i18n/LanguageContext";

const LandingPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Work />
      <OurTeam />
      <Testimonials />
      <FAQ />

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/6287876982219"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window.gtag === "function") {
            window.gtag("event", "conversion", {
              send_to: "AW-18244350089/7RwACL7_wsYcEInhyvtD",
              value: 1,
              currency: "IDR",
            });
          }
        }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={t.contact.whatsappAriaLabel}
      >
        <MessageCircle size={38} />
      </a>
    </>
  );
};

export default LandingPage;
