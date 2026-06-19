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

      // Optimasi: Aktifkan GPU acceleration untuk semua elemen yang dianimasikan
      gsap.set([heading, ...cards], {
        force3D: true,
        willChange: "transform, opacity",
      });

      // Animasi heading
      gsap.fromTo(
        heading,
        {
          opacity: 0,
          y: 50,
          force3D: true,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            once: true,
            refreshPriority: -1,
            invalidateOnRefresh: false,
          },
        },
      );


      cards.forEach((card, i) => {
        revealClip(card, { trigger: card, delay: i * 0.1, duration: 1.3 });
        gsap.fromTo(
          card,
          { y: 60 },
          {
            y: 0,

            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
              refreshPriority: -1,
              invalidateOnRefresh: false,
            },
          },
        );
      });

      // Animasi angka persentase: 0 → 32
      if (percentNumber && card3) {
        gsap.to(percentNumber, {
          innerText: 32,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: function () {
            // Bulatkan angka dan tambahkan %
            if (percentNumber) {
              percentNumber.textContent =
                Math.round(this.targets()[0].innerText) + "%";

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

        {/* BOTTOM FOOTER BAR */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
            {t.about.sectionTag}
          </p>

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
