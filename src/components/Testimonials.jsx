import { useEffect, useRef, useState, useCallback } from "react";
import { logoLoopTech, testimonials as testimonialData } from "../assets/data";
import LogoLoop from "./LogoLoop";
import { useLanguage } from "../i18n/LanguageContext";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiLaravel,
  SiPython,
  SiFigma,
  SiGithub,
  SiGit,
  SiPostman,
} from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitWords, revealWords, revealFade } from "../utils/gsapReveal";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  react: { icon: <SiReact />, color: "#61DAFB" },
  nextjs: { icon: <SiNextdotjs />, color: "#000000" },
  typescript: { icon: <SiTypescript />, color: "#3178C6" },
  tailwind: { icon: <SiTailwindcss />, color: "#06B6D4" },
  html: { icon: <SiHtml5 />, color: "#E34F26" },
  css: { icon: <SiCss />, color: "#1572B6" },
  javascript: { icon: <SiJavascript />, color: "#F7DF1E" },
  laravel: { icon: <SiLaravel />, color: "#FF2D20" },
  python: { icon: <SiPython />, color: "#3776AB" },
  figma: { icon: <SiFigma />, color: "#F24E1E" },
  github: { icon: <SiGithub />, color: "#181717" },
  git: { icon: <SiGit />, color: "#F05032" },
  postman: { icon: <SiPostman />, color: "#FF6C37" },
};

const renderLogoItem = (item) => {
  const entry = iconMap[item.icon];
  if (!entry) return null;

  const content = (
    <span
      className="inline-flex items-center justify-center text-[length:var(--logoloop-logoHeight)] leading-none"
      style={{ color: entry.color }}
      title={item.name}
    >
      {entry.icon}
    </span>
  );

  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center"
      aria-label={item.name}
    >
      {content}
    </a>
  ) : (
    content
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  const testimonials = testimonialData.map((item, i) => ({
    ...item,
    ...t.testimonials.items[i],
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);
  const companyRef = useRef(null);
  const statsNumberRef = useRef(null);
  const logoLoopRef = useRef(null);

  const current = testimonials[activeIndex];

  // Awwwards-style content swap (mask reveal)
  const animateChange = useCallback(
    (newIndex) => {
      if (isAnimating) return;
      setIsAnimating(true);

      const els = [
        quoteRef.current,
        authorRef.current,
        companyRef.current,
        statsNumberRef.current,
      ].filter(Boolean);

      gsap.to(els, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "expo.in",
        onComplete: () => {
          setActiveIndex(newIndex);
          gsap.fromTo(
            els,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "expo.out",
              stagger: 0.08,
              onComplete: () => setIsAnimating(false),
            },
          );
        },
      });
    },
    [isAnimating],
  );

  const handlePrev = () => {
    const newIndex =
      (activeIndex - 1 + testimonials.length) % testimonials.length;
    animateChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    animateChange(newIndex);
  };

  // Scroll-triggered intro
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading word-by-word
      if (headingRef.current) {
        const words = splitWords(headingRef.current);
        revealWords(words, { trigger: headingRef.current, stagger: 0.06 });
      }

      // Quote word reveal
      if (quoteRef.current) {
        revealFade(quoteRef.current, {
          trigger: quoteRef.current,
          duration: 1.1,
          y: 30,
        });
      }

      if (authorRef.current && companyRef.current) {
        revealFade([authorRef.current, companyRef.current], {
          trigger: quoteRef.current,
          duration: 1,
          stagger: 0.1,
          delay: 0.2,
        });
      }

      if (statsNumberRef.current) {
        revealFade(statsNumberRef.current, {
          trigger: statsNumberRef.current,
          duration: 1,
        });
      }

      if (logoLoopRef.current) {
        revealFade(logoLoopRef.current, {
          trigger: logoLoopRef.current,
          duration: 1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-24 bg-white text-brand-navy"
    >
      <div className="container mx-auto px-6 lg:px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end border-b border-zinc-100 pb-12 mb-16">
          <div>
            <p className="text-sm font-medium text-zinc-500 mb-4">
              {t.testimonials.sectionTag}
            </p>
            <h2
              ref={headingRef}
              className="text-5xl md:text-6xl lg:text-9xl font-semibold tracking-tighter text-blue-600"
            >
              {t.testimonials.heading}
            </h2>
          </div>

          <div className="flex gap-3 mb-4">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="size-12 rounded-full border border-zinc-200 grid place-items-center hover:bg-zinc-50 hover:border-zinc-300 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <span className="text-zinc-600 text-lg">←</span>
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="size-12 rounded-full border border-zinc-200 grid place-items-center hover:bg-zinc-50 hover:border-zinc-300 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <span className="text-zinc-600 text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mb-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => !isAnimating && animateChange(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-brand-navy" : "w-2 bg-zinc-200"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Main */}
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3 flex flex-col justify-between">
            <p className="text-[10px] font-bold uppercase tracking-tight leading-tight max-w-[120px]">
              {t.testimonials.sidebar}
            </p>

            <div className="mt-16">
              <span
                ref={statsNumberRef}
                className="text-7xl font-bold tracking-tighter text-brand-navy"
              >
                {current.stat}
              </span>
              <p className="text-zinc-500 text-sm mt-2 font-medium">
                {current.statLabel}
              </p>
            </div>
          </div>

          <div className="lg:col-span-9">
            <blockquote
              ref={quoteRef}
              className="text-2xl sm:text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-16"
            >
              "{current.quote}"
            </blockquote>
          </div>
        </div>

        {/* Brand Footer */}
        <div className="mt-20">
          <div ref={logoLoopRef} className="relative h-[120px]">
            <LogoLoop
              logos={logoLoopTech}
              speed={30}
              direction="left"
              logoHeight={56}
              gap={64}
              scaleOnHover
              fadeOut={false}
              fullWidthSequence={false}
              loop={true}
              ariaLabel="Technology partners"
              renderItem={renderLogoItem}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
