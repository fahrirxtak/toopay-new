import React, { useEffect, useRef } from "react";
import { milestones, miniPlaceHolderImage, projects } from "../assets/data";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitWords, revealWords, revealClip, revealFade } from "../utils/gsapReveal";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectImageRefs = useRef([]);
  const projectInfoRefs = useRef([]);
  const miniProjectRef = useRef(null);
  const missionTextRef = useRef(null);
  const milestoneNumberRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading mask reveal
      if (headingRef.current) {
        const words = splitWords(headingRef.current);
        revealWords(words, { trigger: headingRef.current, stagger: 0.06 });
      }

      // Top projects: image clip reveal + info fade
      projectImageRefs.current.forEach((img, i) => {
        if (img) {
          revealClip(img, {
            trigger: img,
            delay: i * 0.12,
            duration: 1.4,
          });
        }
      });
      projectInfoRefs.current.forEach((info, i) => {
        if (info) {
          revealFade(info, {
            trigger: info,
            delay: i * 0.12 + 0.2,
            duration: 1,
            y: 30,
          });
        }
      });

      // Mini project clip reveal
      if (miniProjectRef.current) {
        revealClip(miniProjectRef.current.querySelector("[data-mini-img]"), {
          trigger: miniProjectRef.current,
          duration: 1.3,
        });
        revealFade(miniProjectRef.current.querySelectorAll("[data-mini-text]"), {
          trigger: miniProjectRef.current,
          stagger: 0.08,
          delay: 0.2,
        });
      }

      // Mission text word reveal
      if (missionTextRef.current) {
        const heading = missionTextRef.current.querySelector("h3");
        if (heading) {
          const words = splitWords(heading);
          revealWords(words, { trigger: heading, stagger: 0.04 });
        }
        const cta = missionTextRef.current.querySelector("[data-cta]");
        if (cta) revealFade(cta, { trigger: cta, delay: 0.3 });
      }

      // Milestones counters
      milestoneNumberRefs.current.forEach((numEl, i) => {
        if (numEl && milestones[i]) {
          const targetValue = milestones[i].numericValue;
          const suffix = milestones[i].value.includes("%") ? "%" : "+";
          const counter = { val: 0 };
          gsap.to(counter, {
            val: targetValue,
            duration: 2,
            ease: "expo.out",
            scrollTrigger: { trigger: numEl, start: "top 90%", once: true },
            onUpdate() {
              if (numEl.isConnected) {
                numEl.textContent = Math.round(counter.val) + suffix;
              }
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-white text-brand-navy">
      <div className="container mx-auto px-6 lg:px-4">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16">
          <h2
            ref={headingRef}
            className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-semibold tracking-tighter text-brand-navy"
          >
            Our Work
          </h2>
          <p className="text-sm font-medium text-zinc-500 mt-4 lg:mt-0">(PROJECT - 03)</p>
        </div>

        {/* TOP PROJECTS GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer flex flex-col h-full">
              {/* Image */}
              <div
                ref={(el) => (projectImageRefs.current[index] = el)}
                className="aspect-video md:aspect-[4/3] bg-zinc-100 rounded-3xl overflow-hidden mb-6 relative flex items-center justify-center"
                style={{ clipPath: "inset(100% 0% 0% 0%)" }}
              >
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Link to="/projects" className="text-white italic text-lg flex items-center gap-2">
                    View Project <ArrowRight size={16} />
                  </Link>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                />
              </div>

              {/* Content */}
              <div
                ref={(el) => (projectInfoRefs.current[index] = el)}
                className="flex-1 flex flex-col"
              >
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-zinc-500 text-sm">{project.date}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full border border-zinc-200 text-zinc-600 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM: MINI PROJECT + MISSION */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-24">
          <div ref={miniProjectRef} className="lg:col-span-4">
            <div
              data-mini-img
              className="aspect-square w-full bg-zinc-100 rounded-3xl mb-4 overflow-hidden"
              style={{ clipPath: "inset(100% 0% 0% 0%)" }}
            >
              <img
                src={miniPlaceHolderImage}
                alt="Rock Bottom Project"
                loading="lazy"
                decoding="async"
                className="size-full object-cover hover:scale-105 transition-transform duration-700 will-change-transform"
              />
            </div>
            <h4 data-mini-text className="font-semibold text-lg">Rock Bottom</h4>
            <p data-mini-text className="text-zinc-500 text-sm">(Graphic Design - 2026)</p>
          </div>

          <div ref={missionTextRef} className="lg:col-span-8 flex flex-col">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 lg:mb-8">
              We born in a shared studio loft with one mission: create work that doesn't blend in
            </h3>
            <div data-cta className="lg:text-right">
              <Link to="/projects">
                <button className="inline-flex items-center gap-2 bg-prime-accent hover:bg-[#cbe635] text-zinc-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-colors duration-300 hover:scale-105 hover:shadow-lg">
                  See All Projects <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* AGENCY MILESTONES */}
        <div className="border-t border-zinc-100 pt-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-12">Agency Milestones</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {milestones.map((item, index) => (
              <div key={index} className="flex flex-col">
                <span
                  ref={(el) => (milestoneNumberRefs.current[index] = el)}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-zinc-800 mb-2"
                >
                  0
                </span>
                <div className="text-zinc-500 text-sm leading-relaxed">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
