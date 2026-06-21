import React, { useEffect, useRef } from "react";
import {
  teamMembers,
  ourTeamImagePlaceHolder,
  starIconPathDrawing,
} from "../assets/data";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  splitWords,
  revealWords,
  revealClip,
  revealFade,
} from "../utils/gsapReveal";
import { useLanguage } from "../i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const OurTeam = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const ratingNumberRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading word reveal
      if (headingRef.current) {
        const words = splitWords(headingRef.current);
        revealWords(words, { trigger: headingRef.current, stagger: 0.06 });
      }

      // Card 1: image clip reveal
      if (card1Ref.current) {
        revealClip(card1Ref.current, {
          trigger: card1Ref.current,
          duration: 1.4,
        });
      }

      // Card 2 & 3: fade slide
      [card2Ref, card3Ref].forEach((ref, i) => {
        if (ref.current) {
          revealFade(ref.current, {
            trigger: ref.current,
            delay: i * 0.12,
            duration: 1.2,
            y: 60,
          });
        }
      });

      // Rating counter
      const ratingEl = ratingNumberRef.current;
      if (ratingEl) {
        const counter = { val: 0 };
        gsap.to(counter, {
          val: 4.9,
          duration: 1.8,
          ease: "expo.out",
          onUpdate() {
            if (ratingEl.isConnected) {
              ratingEl.textContent = counter.val.toFixed(1) + "/5";
            }
          },
          scrollTrigger: {
            trigger: card3Ref.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      // CTA fade
      if (ctaRef.current) {
        revealFade(ctaRef.current.children, {
          trigger: ctaRef.current,
          stagger: 0.08,
          duration: 1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-24 bg-white text-brand-navy"
    >
      <div className="container mx-auto px-6 lg:px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-4xl">
            <h2
              ref={headingRef}
              className="text-5xl md:text-6xl lg:text-9xl font-semibold tracking-tighter bg-gradient-to-r from-brand-blue via-brand-blue to-brand-navy bg-clip-text text-transparent leading-none"
            >
              {t.team.heading}
            </h2>
          </div>

          <div className="lg:max-w-xs pt-4">
            <p className="text-sm font-medium text-zinc-500 mb-6 text-right lg:text-left">
              {t.team.sectionTag}
            </p>

            <div className="flex gap-2 mb-6">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="size-10 rounded-full border-2 border-brand-cream bg-brand-cream overflow-hidden"
                >
                  <img
                    src={member.img}
                    alt={`team-member-${i}`}
                    className="size-full object-cover"
                  />
                </div>
              ))}
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
              {t.team.intro}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {/* CARD 1 */}
          <div
            ref={card1Ref}
            className="relative group aspect-[4/5] bg-zinc-100 rounded-[2.5rem] overflow-hidden"
            style={{ clipPath: "inset(100% 0% 0% 0%)" }}
          >
            <img
              src={ourTeamImagePlaceHolder}
              alt="Toopay Agency Creative Team Member"
              className="size-full object-cover"
            />
            <div className="absolute bottom-8 left-8">
              <div className="px-4 py-2 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-full">
                <span className="text-xs font-medium text-white">
                  {t.team.deliver}
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            ref={card2Ref}
            className="bg-gradient-to-br from-blue-700 to-indigo-950 rounded-[2.5rem] p-10 text-white flex flex-col justify-between min-h-[450px]"
          >
            <div className="size-10 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-full"
              >
                <path d={starIconPathDrawing} />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2rem] mb-4 opacity-70">
                {t.team.recognition}
              </p>
              <h3 className="text-4xl font-medium leading-tight">
                {t.team.recognitionTitle}
              </h3>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            ref={card3Ref}
            className="bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[450px]"
          >
            <p className="text-xs lg:text-sm font-medium text-zinc-400 mb-8">
              {t.team.ratingLabel}
            </p>
            <h3 className="text-8xl font-semibold tracking-tighter bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              <span ref={ratingNumberRef}>0/5</span>
            </h3>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="text-zinc-500 font-medium max-w-xl text-center md:text-left text-sm lg:text-base">
            {t.team.ctaText}
          </p>

          <Link to="/contact?service=Development">
            <button className="bg-prime-accent cursor-pointer hover:bg-zinc-950 hover:text-white text-zinc-950 px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 ease-in-out hover:scale-105 whitespace-nowrap">
              {t.team.startProject} <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
