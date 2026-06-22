import { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { milestones as milestoneData } from "../assets/data";
import { useLanguage } from "../i18n/LanguageContext";
import { MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Structural data only (image, year, language-neutral tagKeys for filtering).
// Display text (title/date/tags/description/client) comes from translations,
// merged by index. tagKeys must match filter `key`s exactly.
const projectMeta = [
  {
    image: "/images/projects/project-1.webp",
    year: "2026",
    tagKeys: ["Development"],
  },
  {
    image: "/images/projects/project-2.webp",
    year: "2023",
    tagKeys: ["Brand Identity"],
  },
  {
    image: "/images/projects/project-3.webp",
    year: "2024",
    tagKeys: ["Graphic Design"],
  },
  {
    image: "/images/projects/project-4.webp",
    year: "2025",
    tagKeys: ["Brand Identity", "UI/UX Design"],
  },
  {
    image: "/images/projects/project-5.webp",
    year: "2025",
    tagKeys: ["Development", "UI/UX Design"],
  },
  {
    image: "/images/projects/project-6.webp",
    year: "2023",
    tagKeys: ["Website Design", "Development"],
  },
  {
    image: "/images/projects/project-7.webp",
    year: "2025",
    tagKeys: ["Branding", "Social Media"],
  },
  {
    image: "/images/projects/project-8.webp",
    year: "2024",
    tagKeys: ["Graphic Design"],
  },
  {
    image: "/images/projects/project-9.webp",
    year: "2026",
    tagKeys: ["Brand Identity", "UI/UX Design"],
  },
  {
    image: "/images/projects/project-10.webp",
    year: "2026",
    tagKeys: ["Development", "UI/UX Design"],
  },
  {
    image: "/images/projects/project-11.webp",
    year: "2026",
    tagKeys: ["Website Design", "Development"],
  },
  {
    image: "/images/projects/project-12.webp",
    year: "2026",
    tagKeys: ["Website Design", "Development"],
  },
];

const ProjectsPage = () => {
  const { t } = useLanguage();
  const milestones = milestoneData.map((m, i) => ({
    ...m,
    ...t.work.milestones[i],
  }));
  const allProjects = projectMeta.map((meta, i) => ({
    ...meta,
    ...t.projects.items[i],
  }));
  const filters = t.projects.filters;
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Hero refs
  const sectionRef = useRef(null);
  const brandTextRef = useRef(null);
  const subTitleRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);

  // Content refs
  const filterRef = useRef(null);
  const gridRef = useRef(null);
  const modalRef = useRef(null);
  const modalScrollRef = useRef(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.tagKeys.includes(activeFilter));

  useEffect(() => {
    window.scrollTo(0, 0);

    const brandText = brandTextRef.current;
    const section = sectionRef.current;
    if (!brandText || !section) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024;

      gsap.set(brandText, { force3D: true, willChange: "transform" });

      // Entry animation — same as Hero
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

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
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" },
          0.9,
        );

      // Parallax scroll on brand text
      if (isMobile) {
        gsap.fromTo(
          brandText,
          { y: 100, force3D: true },
          {
            y: -150,
            ease: "none",
            force3D: true,
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
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // Filter + grid scroll-in
      gsap.fromTo(
        filterRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: filterRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        gridRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, section);

    return () => {
      ctx.revert();
      if (brandText) gsap.set(brandText, { willChange: "auto" });
    };
  }, []);

  // Animate cards on filter change
  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.querySelectorAll(".project-card"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
    );
  }, [activeFilter]);

  const openModal = (project) => {
    setSelectedProject(project);
    const scrollY = window.scrollY;
    document.body.dataset.scrollY = String(scrollY);
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!modalRef.current) return;
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.97,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setSelectedProject(null);
        const scrollY = Number(document.body.dataset.scrollY || 0);
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      },
    });
  };

  useEffect(() => {
    if (selectedProject && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
      );
    }
  }, [selectedProject]);

  // Show a bottom fade hint only while there's more content to scroll
  useEffect(() => {
    const el = modalScrollRef.current;
    if (!selectedProject || !el) {
      setShowScrollHint(false);
      return;
    }

    const checkScroll = () => {
      const hasMore = el.scrollHeight - el.scrollTop - el.clientHeight > 4;
      setShowScrollHint(hasMore);
    };

    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [selectedProject]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      // Block keys that scroll the page when focus isn't inside the modal
      const scrollKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
      ];
      if (
        scrollKeys.includes(e.key) &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedProject]);

  // Force every wheel scroll while the modal is open to scroll the modal's
  // content only — the background page never moves, no matter where the
  // cursor is (even over the dark backdrop).
  useEffect(() => {
    if (!selectedProject) return;

    const handleWheel = (e) => {
      const scrollEl = modalScrollRef.current;
      if (!scrollEl) return;
      e.preventDefault();
      e.stopPropagation();
      scrollEl.scrollTop += e.deltaY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-white text-brand-navy">
      {/* ── HERO ── */}
      <section
        ref={sectionRef}
        className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden text-white bg-gradient-to-tr from-zinc-950 via-blue-700 to-indigo-300"
      >
        {/* Grain */}
        <div
          style={{
            backgroundImage: "url(/images/grain.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
          className="absolute inset-0 bg-zinc-600 pointer-events-none opacity-40 z-0"
        />

        {/* Squirrel watermark */}
        <div
          style={{
            backgroundImage: "url(/images/squirrel_mascot.png)",
            backgroundSize: "contain",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0 pointer-events-none opacity-[0.06] z-0 translate-x-[18%] scale-150 rotate-12"
        />

        {/* Content */}
        <div className="container mx-auto px-8 lg:px-4 relative z-10 mb-45">
          <div className="max-w-4xl">
            <p
              ref={subTitleRef}
              className="uppercase text-prime-white lg:text-sm 2xl:text-base font-bold tracking-[0.3rem] mb-8"
            >
              {t.projects.eyebrow}
            </p>

            <h1
              ref={titleRef}
              className="text-4xl lg:text-5xl 2xl:text-7xl max-w-2xl lg:max-w-4xl font-medium tracking-tighter leading-tight"
            >
              {t.projects.title}
            </h1>

            {/* Milestones strip */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-white/10"
            >
              {milestones.map((m) => (
                <div key={m.label}>
                  <p className="text-3xl md:text-4xl font-bold tracking-tighter">
                    {m.value}
                  </p>
                  <p className="text-white/50 text-sm mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big brand text */}
        <div className="relative w-full h-full pointer-events-none overflow-visible">
          <div
            ref={brandTextRef}
            style={{ willChange: "transform" }}
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
              opacity-0
            "
          >
            Projects
          </div>

          <div className="absolute right-14 -top-40 text-[10px] uppercase font-bold tracking-[0.2rem] opacity-60 hidden lg:block">
            {t.projects.scroll}
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="py-24 px-6 lg:px-4">
        <div className="container mx-auto">
          {/* Filters */}
          <div ref={filterRef} className="flex flex-wrap gap-3 mb-16 opacity-0">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                  activeFilter === f.key
                    ? "bg-brand-navy text-white border-brand-navy"
                    : "border-zinc-200 text-zinc-500 hover:border-brand-navy hover:text-brand-navy"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
          >
            {filtered.map((project, i) => (
              <div
                key={i}
                className="project-card group cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="aspect-[4/3] bg-zinc-100 rounded-3xl overflow-hidden mb-5 relative">
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="text-white font-semibold tracking-wide flex items-center gap-2">
                      {t.projects.viewProject} <ArrowRight size={16} />
                    </span>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm">{project.date}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 rounded-full border border-zinc-200 text-zinc-500 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-8 bg-black/70 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div
            ref={modalRef}
            className="relative bg-white rounded-2xl sm:rounded-3xl w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl max-h-[92vh] sm:max-h-[90vh] max-h-[92dvh] sm:max-h-[90dvh] flex flex-col overflow-hidden my-auto"
          >
            {/* Scrollable area: image + content scroll together */}
            <div
              ref={modalScrollRef}
              className="overflow-y-auto overscroll-contain min-h-0 flex-1 [scrollbar-width:thin] [scrollbar-color:#d4d4d8_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-zinc-400"
            >
              <div className="aspect-[16/10] sm:aspect-video w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="size-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-8 lg:p-12">
                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="min-w-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1.5 sm:mb-2 break-words">
                      {selectedProject.title}
                    </h2>
                    <p className="text-zinc-400 text-sm">
                      {selectedProject.date}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="size-9 sm:size-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors shrink-0"
                    aria-label={t.projects.closeAriaLabel}
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 pt-6 sm:pt-8 border-t border-zinc-100">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                      {t.projects.clientLabel}
                    </p>
                    <p className="font-semibold break-words">
                      {selectedProject.client || t.projects.confidential}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                      {t.projects.yearLabel}
                    </p>
                    <p className="font-semibold">
                      {selectedProject.year || "—"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-4 py-2 rounded-full border border-zinc-200 text-zinc-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base bg-brand-navy text-white rounded-full font-bold hover:bg-blue-700 transition-all"
                >
                  {t.projects.similarProject} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            {/* Fade hint showing there's more content to scroll */}
            <div
              className={`pointer-events-none absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white via-white/80 to-transparent rounded-b-2xl sm:rounded-b-3xl transition-opacity duration-300 ${
                showScrollHint ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      )}
      <a
        href="https://wa.me/6287876982219"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={t.projects.whatsappAriaLabel}
      >
        <MessageCircle size={38} />
      </a>
    </div>
  );
};

export default ProjectsPage;
