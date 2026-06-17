import { useState, useEffect, useRef } from "react";
import { services } from "../assets/data";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitWords, revealWords, revealClip, revealFade } from "../utils/gsapReveal";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const serviceItemsRef = useRef([]);
  const imageContainerRef = useRef(null);
  const imageRefs = useRef([]);
  const labelRef = useRef(null);
  const prevIndexRef = useRef(0);

  // Intro animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const words = splitWords(headingRef.current);
        revealWords(words, { trigger: headingRef.current, stagger: 0.05 });
      }
      if (subHeadingRef.current) {
        const subWords = splitWords(subHeadingRef.current);
        revealWords(subWords, { trigger: subHeadingRef.current, stagger: 0.04, delay: 0.1 });
      }

      serviceItemsRef.current.forEach((item, i) => {
        if (item) {
          revealFade(item, { trigger: item, delay: i * 0.08, duration: 1 });
        }
      });

      if (imageContainerRef.current) {
        revealClip(imageContainerRef.current, {
          trigger: imageContainerRef.current,
          duration: 1.4,
          direction: "up",
        });
      }

      // Initial state for images: only active visible
      imageRefs.current.forEach((img, i) => {
        if (!img) return;
        if (i === 0) {
          gsap.set(img, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, opacity: 1 });
        } else {
          gsap.set(img, { clipPath: "inset(100% 0% 0% 0%)", scale: 1.1, opacity: 1 });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Image transition on activeIndex change
  useEffect(() => {
    const prev = prevIndexRef.current;
    const next = activeIndex;
    if (prev === next || next < 0) return;

    const prevImg = imageRefs.current[prev];
    const nextImg = imageRefs.current[next];
    const direction = next > prev ? "down" : "up";

    if (prevImg) {
      // slide out the previous image
      gsap.to(prevImg, {
        clipPath:
          direction === "down"
            ? "inset(0% 0% 100% 0%)"
            : "inset(100% 0% 0% 0%)",
        scale: 1.05,
        duration: 1,
        ease: "expo.inOut",
      });
    }

    if (nextImg) {
      gsap.fromTo(
        nextImg,
        {
          clipPath:
            direction === "down"
              ? "inset(100% 0% 0% 0%)"
              : "inset(0% 0% 100% 0%)",
          scale: 1.15,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
        }
      );
    }

    // Label swap
    if (labelRef.current) {
      gsap.fromTo(
        labelRef.current,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.7, ease: "expo.out" }
      );
    }

    prevIndexRef.current = next;
  }, [activeIndex]);

  return (
    <section ref={sectionRef} id="service" className="py-24 bg-white text-zinc-900">
      <div className="container mx-auto px-6 lg:px-4">
        {/* HEADER */}
        <div className="mb-20">
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-9xl font-semibold tracking-tighter bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 bg-clip-text text-transparent mb-8"
          >
            Our Services
          </h2>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <p className="text-sm font-medium text-zinc-500 mt-2">(SERVICE - 02)</p>
            <h3
              ref={subHeadingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-2xl"
            >
              An agency that brings passion into every project.
            </h3>
          </div>
        </div>

        <hr className="border-zinc-100 mb-0" />

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT: ACCORDION */}
          <div className="divide-y divide-zinc-100">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  ref={(el) => (serviceItemsRef.current[index] = el)}
                  className="py-10"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex(isActive ? -1 : index);
                      }
                    }}
                    className="flex items-center justify-between mb-4 cursor-pointer group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg transition-all"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="text-sm font-medium text-zinc-400">{service.id}</span>
                      <h4
                        className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight transition-colors ${
                          isActive ? "text-blue-600" : "group-hover:text-zinc-500"
                        }`}
                      >
                        {service.title}
                      </h4>
                    </div>
                    <span className="text-2xl font-light text-zinc-400">
                      {isActive ? "-" : "+"}
                    </span>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? "max-h-[500px] opacity-100 mt-8" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-8 sm:pl-12">
                      <p className="text-zinc-500 text-lg leading-relaxed mb-8 max-w-md">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-4 py-2 rounded-full border border-zinc-200 text-zinc-600 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: DYNAMIC IMAGE */}
          <div
            ref={imageContainerRef}
            className="relative group pt-10 lg:top-24"
            style={{ clipPath: "inset(100% 0% 0% 0%)" }}
          >
            <div className="aspect-[4/5] bg-zinc-50 rounded-3xl overflow-hidden">
              <div className="relative size-full">
                {services.map((service, index) => (
                  <img
                    key={index}
                    ref={(el) => (imageRefs.current[index] = el)}
                    src={service.image}
                    alt={`Toopay ${service.title} Service Illustration`}
                    className="size-full object-cover object-center absolute top-0 left-0 will-change-transform"
                    style={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  />
                ))}

                {/* Label with overflow mask for swap animation */}
                <div className="absolute bottom-6 left-6 z-10 overflow-hidden">
                  <span
                    ref={labelRef}
                    key={activeIndex}
                    className="inline-block px-4 py-2 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-semibold tracking-wide"
                  >
                    {services[activeIndex]?.title || "Our Services"}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="size-20 bg-zinc-900/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl rotate-45">
                      <ArrowUp size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
