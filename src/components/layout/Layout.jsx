import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // rasa smooth
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // cleanup biar aman
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main
        id="main-content"
        className="max-w-8xl mx-auto overflow-hidden"
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
