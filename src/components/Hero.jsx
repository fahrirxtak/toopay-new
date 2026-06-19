import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitWords } from "../utils/gsapReveal";
import { useLanguage } from "../i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const brandTextRef = useRef(null);
  const subTitleRef = useRef(null);
  const titleRef = useRef(null);
  const actionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const brandText = brandTextRef.current;
    if (!section || !brandText) return;

    let titleWords = [];
    let subWords = [];

    try {
      titleWords = splitWords(titleRef.current);
      subWords = splitWords(subTitleRef.current);
    } catch (e) {
      console.warn("splitWords failed", e);
    }

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1 });

      tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1.5 })
        .fromTo(
          brandText,
          { opacity: 0, scale: 1.2, filter: "blur(10px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 2,
            ease: "expo.out",
          },
          0.2,
        )
        .fromTo(
          subTitleRef.current,
          { opacity: 0, y: 30, letterSpacing: "1rem" },
          { opacity: 0.6, y: 0, letterSpacing: "0.3rem", duration: 1.2 },
          0.5,
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.2 },
          0.7,
        )
        .fromTo(
          actionRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" },
          0.9,
        );

      if (brandText) {
        tl.fromTo(
          brandText,
          { opacity: 0, scale: 1.15, filter: "blur(14px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.8 },
          0.1,
        );
      }

      if (subWords.length) {
        tl.fromTo(
          subWords,
          { yPercent: 110 },
          { yPercent: 0, duration: 1, stagger: 0.04 },
          0.4,
        );
      }

      if (titleWords.length) {
        tl.fromTo(
          titleWords,
          { yPercent: 110, rotate: 4 },
          { yPercent: 0, rotate: 0, duration: 1.2, stagger: 0.05 },
          0.55,
        );
      }

      if (actionRef.current) {
        tl.fromTo(
          actionRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          0.9,
        );
      }

      // Parallax brand text
      if (isMobile) {
        gsap.fromTo(
          brandText,
          { y: 100 },
          {
            y: -150,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      } else {
        gsap.to(brandText, {
          x: 200,
          rotate: 2,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden text-white bg-gradient-to-tr from-zinc-950 via-blue-700 to-indigo-300"
    >
      {/* SQUIRREL MASCOT WATERMARK */}
      <div
        style={{
          backgroundImage: "url(/images/squirrel_mascot.webp)",
          backgroundSize: "contain",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 pointer-events-none opacity-[0.08] z-0 translate-x-[18%] scale-150 rotate-12"
      />

      {/* GRAIN TEXTURE */}
      <div
        style={{
          backgroundImage: "url(/images/grain.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
        className="absolute inset-0 bg-zinc-600 pointer-events-none opacity-40 z-0"
      />

      {/* HERO ELEMENTS */}
      <div className="container mx-auto px-8 lg:px-4 relative z-10 mb-45">
        <div className="max-w-4xl">
          <p
            ref={subTitleRef}
            className="uppercase text-prime-white lg:text-sm 2xl:text-base font-bold tracking-[0.3rem] mb-8"
          >
            {t.hero.eyebrow}
          </p>

          <h1
            ref={titleRef}
            className="text-4xl lg:text-5xl 2xl:text-7xl max-w-2xl lg:max-w-4xl font-medium tracking-tighter leading-tight"
          >
            {t.hero.title}
          </h1>

          <div ref={actionRef}>
            <Link to="/contact">
              <button className="mt-12 p-3 px-6 flex items-center gap-4 tracking-tight cursor-pointer rounded-full bg-prime-accent text-zinc-950 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-yellow-500/10">
                {t.hero.cta}
                <div className="size-10 bg-zinc-950 rounded-full flex items-center justify-center">
                  <ArrowRight size={20} className="text-prime-accent" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Huge BRAND-TEXT */}
      <div className="relative w-full h-full pointer-events-none overflow-visible">
        <div
          ref={brandTextRef}
          aria-hidden="true"
          className="
            absolute top-1/2 -translate-y-1/2
            text-white font-black tracking-tighter leading-[0.85]
            select-none text-[20vw]
            -rotate-90 lg:rotate-0
            whitespace-nowrap z-0
            right-0 translate-x-[30%] lg:translate-x-0
            [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]
            lg:[-webkit-text-stroke:0px]
            drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]
          "
        >
          Toopay
        </div>

        <div className="absolute right-14 -top-40 text-[10px] uppercase font-bold tracking-[0.2rem] opacity-60 hidden lg:block">
          {t.hero.scroll}
        </div>
      </div>
    </section>
  );
};

export default Hero;
