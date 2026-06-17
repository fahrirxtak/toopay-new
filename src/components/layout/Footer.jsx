import { ArrowRight, ArrowUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { socialLinks } from "../../assets/data";
import { useLanguage } from "../../i18n/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan plugin
gsap.registerPlugin(ScrollTrigger);

// Scroll anchors paired by index with footer.navLinks in translations.
const NAV_ANCHORS = ["hero", "projects", "service", "about", "contact"];

// --- KOMPONEN LINKITEM ---
const LinkItem = ({ children, href, target, rel, ariaLabel, onClick }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={onClick}
      className="footer-link-item relative inline-block overflow-hidden leading-none cursor-pointer text-zinc-400 hover:text-white"
      style={{ lineHeight: "1" }}
    >
      <span className="block text-initial" style={{ lineHeight: "1" }}>
        {children}
      </span>
      <span
        className="block absolute top-0 left-0 text-hover w-full"
        style={{ lineHeight: "1" }}
      >
        {children}
      </span>
    </a>
  );
};

const Footer = () => {
  const { t, lang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };
  // Refs
  const footerRef = useRef(null);
  const ctaTextRef = useRef(null);
  const infoRef = useRef(null);
  const navLinksRef = useRef(null);
  const socialLinksRef = useRef(null);
  const brandingRef = useRef(null);
  const scrollTopRef = useRef(null);

  // --- Helper: SplitText Manual ---
  const splitTextToChars = (element) => {
    if (!element || element.querySelector(".char")) return;
    const text = element.innerText;
    element.innerHTML = "";
    [...text].forEach((char) => {
      const span = document.createElement("span");
      span.className = "char";
      span.style.display = "inline-block";
      span.style.lineHeight = "1";
      span.style.verticalAlign = "top";
      span.innerHTML = char === " " ? "&nbsp;" : char;
      span.style.whiteSpace = "pre";
      element.appendChild(span);
    });
  };

  // Simple fade-in on viewport entry — no ScrollTrigger complexity
  useEffect(() => {
    if (!footerRef.current) return;

    const els = [
      ctaTextRef.current,
      infoRef.current,
      navLinksRef.current,
      socialLinksRef.current,
      brandingRef.current,
      scrollTopRef.current,
    ].filter(Boolean);

    // Set initial state
    els.forEach((el) => {
      if (el) el.style.opacity = "0";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(els, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.08,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, [location.pathname]); // Re-run on route change

  // Hover animation for nav/social links
  useEffect(() => {
    if (!navLinksRef.current && !socialLinksRef.current) return;

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
      gsap.set(charsHover, { yPercent: 100 });

      const handleMouseEnter = () => {
        const existingTl = hoverTimelines.get(element);
        if (existingTl) existingTl.kill();
        const tlHover = gsap.timeline();
        hoverTimelines.set(element, tlHover);
        tlHover
          .to(charsInitial, {
            yPercent: -100,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.02,
          })
          .to(
            charsHover,
            { yPercent: 0, duration: 0.6, ease: "power2.out", stagger: 0.02 },
            "<0.1",
          );
      };

      const handleMouseLeave = () => {
        const existingTl = hoverTimelines.get(element);
        if (existingTl) existingTl.kill();
        const tlHover = gsap.timeline();
        hoverTimelines.set(element, tlHover);
        tlHover
          .to(charsHover, {
            yPercent: 100,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.02,
          })
          .to(
            charsInitial,
            { yPercent: 0, duration: 0.6, ease: "power2.out", stagger: 0.02 },
            "<0.1",
          );
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
      element._hoverHandlers = {
        enter: handleMouseEnter,
        leave: handleMouseLeave,
      };
    };

    const navLinks = navLinksRef.current?.querySelectorAll(".footer-link-item");
    navLinks?.forEach((link) => applyHoverAnimation(link));

    const socialLinkEls =
      socialLinksRef.current?.querySelectorAll(".footer-link-item");
    socialLinkEls?.forEach((link) => applyHoverAnimation(link));

    return () => {
      hoverTimelines.forEach((tl) => tl.kill());
      hoverTimelines.clear();
      navLinks?.forEach((link) => {
        if (link._hoverHandlers) {
          link.removeEventListener("mouseenter", link._hoverHandlers.enter);
          link.removeEventListener("mouseleave", link._hoverHandlers.leave);
          delete link._hoverHandlers;
        }
      });
      socialLinkEls?.forEach((link) => {
        if (link._hoverHandlers) {
          link.removeEventListener("mouseenter", link._hoverHandlers.enter);
          link.removeEventListener("mouseleave", link._hoverHandlers.leave);
          delete link._hoverHandlers;
        }
      });
    };
  }, [lang]);

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="bg-zinc-950 text-white pt-16 pb-12 overflow-x-hidden"
    >
      <div className="container mx-auto px-6 lg:px-4">
        {/* TOP: CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 mb-12">
          {/* Text */}
          <div ref={ctaTextRef} className="w-full lg:w-auto max-w-full">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 md:mb-4">
              {t.footer.ctaLabel}
            </p>
            <a
              href="mailto:tooopayy@gmail.com"
              className="hover:opacity-80 transition-opacity"
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter bg-gradient-to-r from-brand-blue via-brand-blue to-white bg-clip-text text-transparent pb-2 break-words leading-none">
                tooopayy@gmail.com
              </h2>
            </a>
          </div>

          {/* CTA Button */}
          <div className="relative flex items-center mt-2 lg:mt-0 shrink-0">
            <Link to="/contact">
              <button className="group relative px-8 py-4 bg-white hover:bg-brand-blue text-black hover:text-white rounded-full font-bold flex items-center gap-4 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg border border-zinc-100 whitespace-nowrap">
                {t.footer.bookCall}
                <div className="size-10 md:size-12 bg-zinc-100 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <ArrowRight
                    size={20}
                    className="text-black group-hover:text-white"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>

        <hr className="border-zinc-800 mb-12" />

        {/* MIDDLE: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-20">
          {/* Info */}
          <div
            ref={infoRef}
            className="md:col-span-6 lg:col-span-7 order-2 md:order-1"
          >
            <p className="text-sm text-zinc-400 mb-6">
              &copy; {new Date().getFullYear()} {t.footer.copyrightSuffix}
            </p>

            <p className="text-lg md:text-xl font-medium leading-snug max-w-md text-zinc-300">
              {t.footer.blurb}
            </p>
          </div>

          {/* Navigation Links */}
          <div
            ref={navLinksRef}
            className="md:col-span-3 lg:col-span-2 order-3 md:order-2"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
              {t.footer.navigate}
            </p>
            <ul className="flex flex-col gap-3">
              {t.footer.navLinks.map((link, i) => {
                const targetId = NAV_ANCHORS[i];
                return (
                  <li key={`${lang}-${targetId}`}>
                    <LinkItem
                      href={`#${targetId}`}
                      onClick={(e) => handleNavClick(e, targetId)}
                    >
                      {link}
                    </LinkItem>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Media */}
          <div
            ref={socialLinksRef}
            className="md:col-span-3 order-4 md:order-3"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
              {t.footer.socialMedia}
            </p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={`${lang}-${link.name}`}>
                  <LinkItem
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel={`Visit our ${link.name} profile`}
                  >
                    {link.name}
                  </LinkItem>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM: Branding + Scroll to Top */}
        <div className="flex justify-between items-end mb-4 pb-5">
          <div
            ref={brandingRef}
            className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-none relative inline-block"
            aria-hidden="true"
          >
            Toopay
            <sup className="font-thin text-base sm:text-xl md:text-3xl lg:text-4xl absolute top-2 -right-6 sm:-right-8 md:-right-12 lg:-right-14">
              TM
            </sup>
          </div>

          <button
            ref={scrollTopRef}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="size-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="size-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
