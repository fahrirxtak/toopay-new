import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
// Hooks & Utils
import useTime from "../../hooks/useTime";
import useScroll from "../../hooks/useScroll";
import { splitTextToChars } from "../../utils/textUtils";
import { useLanguage } from "../../i18n/LanguageContext";
import LanguageToggle from "../../i18n/LanguageToggle";

// Components
import NavItem from "./header/NavItem";
import MobileMenu from "./header/MobileMenu";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const { t, lang } = useLanguage();
  const isScrolled = useScroll();
  const currentTime = useTime();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const timeRef = useRef(null);
  const navRef = useRef(null);
  const connectRef = useRef(null);
  const menuRef = useRef(null);

  // Intro + scroll animation (runs once on mount)
  useEffect(() => {
    if (!headerRef.current) return;

    const tl = gsap.timeline();
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0
    )
      .fromTo(
        timeRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        0.1
      )
      .fromTo(
        navRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        0.2
      )
      .fromTo(
        document.getElementById("connect-wrapper"),
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        0.3
      )
      .fromTo(
        menuRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.2)" },
        0.4
      );

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "+=100",
        scrub: true,
      },
    });
    scrollTl.to(headerRef.current, { y: -5, ease: "power1.out" });

    return () => {
      tl.kill();
      if (scrollTl.scrollTrigger) scrollTl.scrollTrigger.kill();
    };
  }, []);

  // Hover char animation — re-runs on language change so it re-splits the
  // freshly mounted (keyed) nav/connect text.
  useEffect(() => {
    const hoverTimelines = new Map();

    const applyHoverAnimation = (element) => {
      const initialEl = element.querySelector(".text-initial");
      const hoverEl = element.querySelector(".text-hover");

      if (!initialEl || !hoverEl) return;

      splitTextToChars(initialEl);
      splitTextToChars(hoverEl);

      const charsInitial = initialEl.querySelectorAll(".char");
      const charsHover = hoverEl.querySelectorAll(".char");

      gsap.set(charsInitial, { yPercent: 0 });
      gsap.set(charsHover, { yPercent: 120 });

      const handleMouseEnter = () => {
        const existingTl = hoverTimelines.get(element);
        if (existingTl) existingTl.kill();

        const tlHover = gsap.timeline();
        hoverTimelines.set(element, tlHover);

        tlHover
          .to(charsInitial, {
            yPercent: -120,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.02,
          })
          .to(
            charsHover,
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.02,
            },
            "<0.1"
          );
      };

      const handleMouseLeave = () => {
        const existingTl = hoverTimelines.get(element);
        if (existingTl) existingTl.kill();

        const tlHover = gsap.timeline();
        hoverTimelines.set(element, tlHover);

        tlHover
          .to(charsHover, {
            yPercent: 120,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.02,
          })
          .to(
            charsInitial,
            {
              yPercent: 0,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.02,
            },
            "<0.1"
          );
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      element._hoverHandlers = {
        enter: handleMouseEnter,
        leave: handleMouseLeave,
      };
    };

    const navLinks = navRef.current?.querySelectorAll(".nav-link-item");
    navLinks?.forEach((link) => applyHoverAnimation(link));

    const connectButton = connectRef.current;
    if (connectButton) {
      applyHoverAnimation(connectButton);
    }

    return () => {
      hoverTimelines.forEach((timeline) => timeline.kill());
      hoverTimelines.clear();

      navLinks?.forEach((link) => {
        if (link._hoverHandlers) {
          link.removeEventListener("mouseenter", link._hoverHandlers.enter);
          link.removeEventListener("mouseleave", link._hoverHandlers.leave);
          delete link._hoverHandlers;
        }
      });

      if (connectButton?._hoverHandlers) {
        connectButton.removeEventListener(
          "mouseenter",
          connectButton._hoverHandlers.enter
        );
        connectButton.removeEventListener(
          "mouseleave",
          connectButton._hoverHandlers.leave
        );
        delete connectButton._hoverHandlers;
      }
    };
  }, [lang]);

  // Handle open menu
  const handleOpenMenu = () => {
    if (isAnimating) return;
    setMobileOpen(true);
  };

  // Handle close menu
  const handleCloseMenu = () => {
    if (isAnimating) return;
    setMobileOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 p-4 lg:p-5 lg:px-10 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-black/20 text-white" : "text-white"
          }`}
      >
        <div className="container mx-auto px-2 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex gap-6 lg:gap-16">
            <Link to="/">
              <div
                ref={logoRef}
                className="text-3xl cursor-pointer lg:text-4xl relative space-font tracking-tighter max-w-fit text-white"
              >
                Toopay{" "}
                <sup className="text-[10px] font-thin absolute top-1 -right-4">TM</sup>
              </div>
            </Link>

            <p
              ref={timeRef}
              className={`text-xs lg:text-lg 2xl:text-xl hidden lg:inline-flex tracking-wide mt-1 ${isScrolled ? "text-zinc-500" : "text-white"
                }`}
            >
              • {t.nav.location}, {currentTime} ({t.nav.timezone})
            </p>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-4 lg:gap-12 ">
            <nav
              ref={navRef}
              className="flex items-center gap-3 lg:gap-6 urg text-[10px] lg:text-xs font-bold uppercase tracking-widest"
            >
              {t.nav.items.map((item, index) => (
                <div key={`${lang}-${index}`} className="flex items-center">
                  <NavItem href={`#${t.nav.anchors[index]}`}>
                    {item}
                  </NavItem>
                </div>
              ))}
            </nav>

            {/* CONNECT BUTTON */}
            <div
              id="connect-wrapper"
              className="relative cursor-pointer h-fit"
            >
              <Link to="/contact">
              <div
                className={`border-b transition-opacity duration-300 hover:opacity-60 ${isScrolled ? "border-b-white" : "border-b-white/40"
                  }`}
              >
                <div
                  key={lang}
                  ref={connectRef}
                  className="relative inline-block overflow-hidden leading-none"
                  style={{ lineHeight: "1" }}
                >
                  <span
                    className="block text-initial text-white/90 text-[10px] lg:text-xs font-bold uppercase tracking-widest"
                    style={{ lineHeight: "1" }}
                  >
                    {t.nav.getConnected}
                  </span>
                  <span
                    className="block absolute top-0 left-0 text-hover text-white text-[10px] lg:text-xs font-bold uppercase tracking-widest w-full opacity-0"
                    style={{ lineHeight: "1" }}
                  >
                    {t.nav.getConnected}
                  </span>
                </div>
              </div>
              </Link>
            </div>

            {/* LANGUAGE TOGGLE */}
            <LanguageToggle />
          </div>

          {/* MOBILE Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              className="p-2 cursor-pointer"
              onClick={handleOpenMenu}
              disabled={isAnimating}
              aria-label="Open menu"
            >
              <Menu ref={menuRef} className="size-8 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={handleCloseMenu}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
      />
    </>
  );
};

export default Header;
