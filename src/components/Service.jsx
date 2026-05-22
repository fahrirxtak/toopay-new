import { useState, useEffect, useRef } from "react";
import { services } from "../assets/data";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const headingRef = useRef(null);
  const serviceItemsRef = useRef([]);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    // Animasi heading utama
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }

    // Animasi tiap item accordion
    serviceItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    });

    // Animasi gambar di sebelah kanan
    if (imageContainerRef.current) {
      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="service" className="py-24 bg-white text-zinc-900">
      <div className="container mx-auto px-6 lg:px-4">
        {/* HEADER SECTION */}
        <div className="mb-20">
          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-9xl font-semibold tracking-tighter bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 bg-clip-text text-transparent mb-8"
          >
            Our Services
          </h2>

          {/* Info */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <p className="text-sm font-medium text-zinc-500 mt-2">(SERVICE - 02)</p>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-2xl">
              An agency that brings <span className="italic mr-2">passion</span> into every project.
            </h3>
          </div>
        </div>

        {/* LINE */}
        <hr className="border-zinc-100 mb-0" />

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT COLUMN: ACCORDION LIST */}
          <div className="divide-y divide-zinc-100">
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  ref={(el) => (serviceItemsRef.current[index] = el)}
                  className="py-10"
                >
                  {/* ACCORDION TRIGGER */}
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
                    {/* Text */}
                    <div className="flex items-baseline gap-6">
                      <span className="text-sm font-medium text-zinc-400">
                        {service.id}
                      </span>
                      <h4
                        className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight transition-colors ${isActive ? "text-blue-600" : "group-hover:text-zinc-500"
                          }`}
                      >
                        {service.title}
                      </h4>
                    </div>

                    {/* Sign */}
                    <span className="text-2xl font-light text-zinc-400">
                      {isActive ? "-" : "+"}
                    </span>
                  </div>

                  {/* COLLAPSE CONTENT */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "max-h-[500px] opacity-100 mt-8" : "max-h-0 opacity-0"
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

          {/* RIGHT COLUMN: DYNAMIC IMAGE */}
          <div
            ref={imageContainerRef}
            className="relative group pt-10 lg:top-24 opacity-0"
          >
            <div className="aspect-[4/5] bg-zinc-50 rounded-3xl overflow-hidden">
              <div className="relative size-full">
                {services.map((service, index) => (
                  <img
                    key={index}
                    src={service.image}
                    alt={`Toopay ${service.title} Service Illustration`}
                    className={`size-full object-cover object-center absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Service label overlay */}
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="px-4 py-2 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-semibold tracking-wide">
                    {services[activeIndex]?.title || "Our Services"}
                  </span>
                </div>

                {/* Interactive Overlay */}
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