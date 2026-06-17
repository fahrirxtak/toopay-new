import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { iconPathDrawing, users } from "../assets/data";
import { splitWords, revealWords, revealClip, revealFade } from "../utils/gsapReveal";
import { useLanguage } from "../i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const percentNumberRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean);
    if (!heading || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Mask reveal heading word-by-word
      const titleWords = splitWords(heading);
      revealWords(titleWords, { trigger: heading, stagger: 0.05 });

      // Cards reveal: clip-path + fade slide
      cards.forEach((card, i) => {
        revealClip(card, { trigger: card, delay: i * 0.1, duration: 1.3 });
        gsap.fromTo(
          card,
          { y: 60 },
          {
            y: 0,
            duration: 1.2,
            delay: i * 0.1,
            ease: "expo.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          }
        );
      });

      // Percent counter
      const percentEl = percentNumberRef.current;
      if (percentEl && card3Ref.current) {
        const counter = { val: 0 };
        gsap.to(counter, {
          val: 32,
          duration: 1.8,
          ease: "expo.out",
          onUpdate() {
            if (percentEl.isConnected) {
              percentEl.textContent = Math.round(counter.val) + "%";
            }
          },
          scrollTrigger: { trigger: card3Ref.current, start: "top 80%", once: true },
        });
      }

      // Footer reveal
      if (footerRef.current) {
        revealFade(footerRef.current.children, {
          trigger: footerRef.current,
          stagger: 0.08,
          duration: 1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white text-brand-navy">
      <div className="container mx-auto px-6 lg:px-4">
        {/* HEAD */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-12">
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] max-w-5xl text-black"
          >
            {t.about.headingLead}{" "}
            <span className="text-brand-navy/40">{t.about.headingAccent}</span>
          </h2>

          <div className="hidden lg:flex size-12 bg-prime-accent rounded-full items-center justify-center shadow-lg">
            <span className="text-zinc-950 text-xs font-bold flex flex-col items-center leading-none">
              <ArrowUp size={14} strokeWidth={2} />
              <ArrowDown size={14} strokeWidth={2} />
            </span>
          </div>
        </div>

        {/* INFO CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {/* CARD 1 */}
          <div
            ref={card1Ref}
            className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between min-h-[400px]"
          >
            <div className="size-12 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
                <path d={iconPathDrawing} />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2rem] mb-4 opacity-70">
                {t.about.card1Label}
              </p>
              <h3 className="text-3xl font-medium leading-tight">
                {t.about.card1Title}
              </h3>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            ref={card2Ref}
            className="relative bg-brand-navy rounded-[2.5rem] p-10 text-white flex flex-col items-center justify-center min-h-[400px]"
          >
            <div className="text-white/10 text-8xl font-black italic">Error</div>
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-zinc-800/60 backdrop-blur-md rounded-full border border-white/10">
              <span className="text-xs font-medium text-white">{t.about.established}</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            ref={card3Ref}
            className="bg-zinc-50 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <p className="text-xs font-medium text-zinc-400 mb-6">{t.about.growthLabel}</p>
              <h3 className="text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-navy">
                <span ref={percentNumberRef}>0%</span>
              </h3>
            </div>

            <div className="pt-8 border-t border-zinc-200 flex flex-col gap-6">
              <p className="text-zinc-600 font-medium max-w-[200px]">
                {t.about.growthDesc}
              </p>
              <div className="flex -space-x-3">
                {users.map((user, i) => (
                  <div
                    key={i}
                    className="size-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden"
                  >
                    <img src={user} alt={`Team member ${i + 1}`} className="size-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div
          ref={footerRef}
          className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">{t.about.sectionTag}</p>
          <p className="text-zinc-500 font-medium max-w-sm text-sm">
            {t.about.footerText}
          </p>
          <Link
            to="/contact"
            className="text-zinc-900 font-bold border-b-2 pt-1 hover:text-blue-600 transition-all cursor-pointer"
          >
            {t.about.bookCall}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
