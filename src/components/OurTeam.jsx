import React, { useEffect, useRef } from 'react';
import { teamMembers, ourTeamImagePlaceHolder, starIconPathDrawing } from '../assets/data';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurTime = () => {
  const headingRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const ratingNumberRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }

    // Cards
    [card1Ref, card2Ref, card3Ref].forEach((ref, i) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    });

    // Rating number animation
    if (ratingNumberRef.current) {
      gsap.to(ratingNumberRef.current, {
        innerText: 4.9,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate() {
          ratingNumberRef.current.textContent = parseFloat(this.targets()[0].innerText).toFixed(1) + '/5';
        },
        scrollTrigger: {
          trigger: card3Ref.current,
          start: 'top 80%',
          once: true,
        },
      });
    }

    // CTA
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section id="team" className="py-24 bg-white text-brand-navy">
      <div className="container mx-auto px-6 lg:px-4">
        {/* Header section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
          {/* Heading */}
          <div className="max-w-4xl">
            <h2
              ref={headingRef}
              className="text-5xl md:text-6xl lg:text-9xl font-semibold tracking-tighter bg-gradient-to-r from-brand-blue via-brand-blue to-brand-navy bg-clip-text text-transparent leading-none"
            >
              Man Behind The Work
            </h2>
          </div>

          {/* info */}
          <div className="lg:max-w-xs pt-4">
            <p className="text-sm font-medium text-zinc-500 mb-6 text-right lg:text-left">(TEAM - 04)</p>

            <div className="flex gap-2 mb-6">
              {teamMembers.map((member, i) => (
                <div key={i} className="size-10 rounded-full border-2 border-brand-cream bg-brand-cream overflow-hidden">
                  <img src={member.img} alt={`team-member-${i}`} className="size-full object-cover" />
                </div>
              ))}
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
              From digital campaigns to full-stack systems, our small team shipped big things. Every single one, intentional.
            </p>
          </div>
        </div>

        {/* Grid section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {/* CARD 1 | Image Placeholder — HANYA aspect-[4/5], TIDAK ADA min-h */}
          <div
            ref={card1Ref}
            className="relative group aspect-[4/5] bg-zinc-100 rounded-[2.5rem] overflow-hidden opacity-0"
          >
            <img
              src={ourTeamImagePlaceHolder}
              alt="Toopay Agency Creative Team Member"
              className="size-full object-cover"
            />
            <div className="absolute bottom-8 left-8">
              <div className="px-4 py-2 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-full">
                <span className="text-xs font-medium text-white">We deliver</span>
              </div>
            </div>
          </div>

          {/* CARD 2 | Global Recognition */}
          <div
            ref={card2Ref}
            className="bg-gradient-to-br from-blue-700 to-indigo-950 rounded-[2.5rem] p-10 text-white flex flex-col justify-between min-h-[450px] opacity-0"
          >
            <div className="size-10 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
                <path d={starIconPathDrawing} />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2rem] mb-4 opacity-70">
                Global Recognition
              </p>
              <h3 className="text-4xl font-medium leading-tight">
                We thrive to create design that make impact—not just impressions.
              </h3>
            </div>
          </div>

          {/* CARD 3 | Rating */}
          <div
            ref={card3Ref}
            className="bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[450px] opacity-0"
          >
            <p className="text-xs lg:text-sm font-medium text-zinc-400 mb-8">(Rating)</p>
            <h3 className="text-8xl font-semibold tracking-tighter bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              <span ref={ratingNumberRef}>0/5</span>
            </h3>
            <div className="pt-8 border-t border-zinc-200 flex flex-col justify-between items-end gap-6">
              <p className="text-zinc-500 font-medium text-sm max-w-[140px]">
                by 50k+ clients world-wide
              </p>
              <div className="flex items-center gap-2">
                <Star fill="#00B67A" className="text-[#00B67A] text-xl" />
                <span className="font-bold tracking-tight text-lg">Truspilot</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 opacity-0"
        >
          <p className="text-zinc-500 font-medium max-w-xl text-center md:text-left text-sm lg:text-base">
            Whether you're launching something new or reshaping what exists, We're here to help you stand out—with clarity, creativity, and edge.
          </p>

          <Link to="/contact?service=Development">
            <button className="bg-prime-accent cursor-pointer hover:bg-zinc-950 hover:text-white text-zinc-950 px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 ease-in-out hover:scale-105 whitespace-nowrap">
              Start Your Project <ArrowRight size={20} />
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default OurTime;