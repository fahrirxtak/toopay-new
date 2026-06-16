import React, { useEffect, useRef } from 'react';
import { milestones as milestoneData, miniPlaceHolderImage, projects as projectData } from '../assets/data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const { t } = useLanguage();
  const projects = projectData.map((p, i) => ({ ...p, ...t.work.projects[i] }));
  const milestones = milestoneData.map((m, i) => ({ ...m, ...t.work.milestones[i] }));
  const headingRef = useRef(null);
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const miniProjectRef = useRef(null);
  const missionTextRef = useRef(null);
  const milestoneNumberRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Optimasi: Aktifkan GPU acceleration untuk semua elemen yang dianimasikan
      gsap.set([headingRef.current, ...projectRefs.current, miniProjectRef.current, missionTextRef.current, ...milestoneNumberRefs.current], {
        force3D: true,
        willChange: "transform, opacity"
      });

      // Animasi heading utama
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 50, force3D: true },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            force3D: true,
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Animasi top projects - Batch atau Stagger
      if (projectRefs.current.length > 0) {
        gsap.fromTo(
          projectRefs.current,
          { opacity: 0, y: 60, force3D: true },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            force3D: true,
            scrollTrigger: {
              trigger: projectRefs.current[0],
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Animasi mini project + mission text
      if (miniProjectRef.current && missionTextRef.current) {
        gsap.fromTo(
          [miniProjectRef.current, missionTextRef.current],
          { opacity: 0, y: 40, force3D: true },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.15,
            force3D: true,
            scrollTrigger: {
              trigger: miniProjectRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Animasi angka milestone
      milestoneNumberRefs.current.forEach((numEl, i) => {
        if (numEl && milestoneData[i]) {
          const targetValue = milestoneData[i].numericValue;
          const suffix = milestoneData[i].value.includes('%') ? '%' : '+';
          gsap.fromTo(
            numEl,
            { innerText: 0 },
            {
              innerText: targetValue,
              duration: 2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: numEl,
                start: 'top 90%',
                once: true,
              },
              onUpdate: function () {
                if (numEl) {
                  numEl.textContent = Math.round(this.targets()[0].innerText) + suffix;
                }
              },
              lazy: true,
            }
          );
        }
      });
    }, sectionRef.current || document);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-white text-brand-navy"
    >
      <div className="container mx-auto px-6 lg:px-4">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16">
          {/* Heading */}
          <h2
            id="service"
            ref={headingRef}
            className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-semibold tracking-tighter text-brand-navy"
          >
            {t.work.heading}
          </h2>

          {/* Info */}
          <p className="text-sm font-medium text-zinc-500 mt-4 lg:mt-0">{t.work.sectionTag}</p>
        </div>

        {/* TOP PROJECTS GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group cursor-pointer opacity-0 flex flex-col h-full"
            >
              {/* Image Container - Fixed Aspect Ratio */}
              <div className="aspect-video md:aspect-[4/3] bg-zinc-100 rounded-3xl overflow-hidden mb-6 relative flex items-center justify-center">
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Link to="/projects" className="text-white italic text-lg flex items-center gap-2">
                    {t.work.viewProject} <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                />
              </div>

              {/* Content Container - Ensures consistent spacing */}
              <div className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-zinc-500 text-sm">{project.date}</p>
                </div>

                {/* Tags Container */}
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
          {/* small project card */}
          <div
            ref={miniProjectRef}
            className="lg:col-span-4 opacity-0"
          >
            <div className="aspect-square w-full bg-zinc-100 rounded-3xl mb-4 overflow-hidden">
              <img
                src={miniPlaceHolderImage}
                alt="Rock Bottom Project"
                loading="lazy"
                decoding="async"
                className="size-full object-cover hover:scale-105 transition-transform duration-700 will-change-transform"
              />
            </div>
            <h4 className="font-semibold text-lg">{t.work.miniTitle}</h4>
            <p className="text-zinc-500 text-sm">{t.work.miniMeta}</p>
          </div>

          {/* mission text */}
          <div
            ref={missionTextRef}
            className="lg:col-span-8 opacity-0 flex flex-col"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 lg:mb-8">
              {t.work.missionLead}{' '}
              <span className="font-bold text-blue-900">{t.work.missionAccent}</span>
            </h3>
            <div className="lg:text-right">
              <Link to="/projects">
                <button className="inline-flex items-center gap-2 bg-prime-accent hover:bg-[#cbe635] text-zinc-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-colors duration-300 hover:scale-105 hover:shadow-lg">
                  {t.work.seeAll} <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* AGENCY MILESTONES */}
        <div className="border-t border-zinc-100 pt-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-12">{t.work.milestonesTitle}</p>
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