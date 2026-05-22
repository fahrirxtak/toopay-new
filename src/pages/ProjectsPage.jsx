import { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, milestones } from "../assets/data";

gsap.registerPlugin(ScrollTrigger);

const allProjects = [
  {
    ...projects[0],
    description: "AI-powered chat platform with real-time collaboration features and a modern, intuitive interface.",
    client: "Chat Genius Ltd.",
    year: "2024",
  },
  {
    ...projects[1],
    description: "Full brand identity and social media strategy for a premium typography foundry.",
    client: "Field Type Studio",
    year: "2023",
  },
  {
    title: "Rock Bottom",
    date: "(2026 — Ongoing)",
    tags: ["Graphic Design"],
    image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2070&auto=format&fit=crop",
    description: "A bold graphic design project exploring raw, unfiltered visual storytelling through typography and texture.",
    client: "Independent",
    year: "2026",
  },
  {
    title: "Neon Pulse",
    date: "(2025 — Mar 2025)",
    tags: ["Brand Identity", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    description: "Complete brand overhaul for a tech startup — from logo system to full digital product design.",
    client: "Neon Pulse Inc.",
    year: "2025",
  },
  {
    title: "Verdant",
    date: "(2024 — Dec 2024)",
    tags: ["Development", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop",
    description: "Full-stack web platform for an eco-conscious lifestyle brand, built with React and Node.js.",
    client: "Verdant Co.",
    year: "2024",
  },
];

const filters = ["All", "Brand Identity", "UI/UX Design", "Development", "Graphic Design"];

const ProjectsPage = () => {
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

  const filtered = activeFilter === "All"
    ? allProjects
    : allProjects.filter((p) => p.tags.includes(activeFilter));

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
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2, ease: "expo.out" },
          0.2
        )
        .fromTo(
          subTitleRef.current,
          { opacity: 0, y: 30, letterSpacing: "1rem" },
          { opacity: 0.6, y: 0, letterSpacing: "0.3rem", duration: 1.2 },
          0.5
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.2 },
          0.7
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" },
          0.9
        );

      // Parallax scroll on brand text
      if (isMobile) {
        gsap.fromTo(brandText,
          { y: 100, force3D: true },
          {
            y: -150, ease: "none", force3D: true,
            scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.2 },
          }
        );
      } else {
        gsap.to(brandText, {
          x: 200, rotate: 2, ease: "none", force3D: true,
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1.5 },
        });
      }

      // Filter + grid scroll-in
      gsap.fromTo(filterRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: filterRef.current, start: "top 85%", once: true } }
      );
      gsap.fromTo(gridRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true } }
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
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" }
    );
  }, [activeFilter]);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!modalRef.current) return;
    gsap.to(modalRef.current, {
      opacity: 0, scale: 0.97, duration: 0.25, ease: "power2.in",
      onComplete: () => {
        setSelectedProject(null);
        document.body.style.overflow = "";
      },
    });
  };

  useEffect(() => {
    if (selectedProject && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [selectedProject]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
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
              Our Portfolio
            </p>

            <h1
              ref={titleRef}
              className="text-4xl lg:text-5xl 2xl:text-7xl max-w-2xl lg:max-w-4xl font-medium tracking-tighter leading-tight"
            >
              Work that doesn't blend in — crafted with intention.
            </h1>

            {/* Milestones strip */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-white/10">
              {milestones.map((m) => (
                <div key={m.label}>
                  <p className="text-3xl md:text-4xl font-bold tracking-tighter">{m.value}</p>
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
            (scroll to work)
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="py-24 px-6 lg:px-4">
        <div className="container mx-auto">

          {/* Filters */}
          <div ref={filterRef} className="flex flex-wrap gap-3 mb-16 opacity-0">
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                  activeFilter === f
                    ? "bg-brand-navy text-white border-brand-navy"
                    : "border-zinc-200 text-zinc-500 hover:border-brand-navy hover:text-brand-navy"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0">
            {filtered.map((project, i) => (
              <div key={i} className="project-card group cursor-pointer" onClick={() => openModal(project)}>
                <div className="aspect-[4/3] bg-zinc-100 rounded-3xl overflow-hidden mb-5 relative">
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="text-white font-semibold tracking-wide flex items-center gap-2">
                      View Project <ArrowRight size={16} />
                    </span>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy"
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-zinc-400 text-sm">{project.date}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-3 py-1 rounded-full border border-zinc-200 text-zinc-500 whitespace-nowrap">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div ref={modalRef} className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="aspect-video w-full overflow-hidden rounded-t-3xl">
              <img src={selectedProject.image} alt={selectedProject.title} className="size-full object-cover" />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">{selectedProject.title}</h2>
                  <p className="text-zinc-400 text-sm">{selectedProject.date}</p>
                </div>
                <button onClick={closeModal}
                  className="size-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors shrink-0"
                  aria-label="Close">
                  <X size={18} />
                </button>
              </div>

              <p className="text-zinc-600 text-lg leading-relaxed mb-8">{selectedProject.description}</p>

              <div className="grid grid-cols-2 gap-6 mb-8 pt-8 border-t border-zinc-100">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Client</p>
                  <p className="font-semibold">{selectedProject.client || "Confidential"}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Year</p>
                  <p className="font-semibold">{selectedProject.year || "—"}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-4 py-2 rounded-full border border-zinc-200 text-zinc-600 font-medium">{tag}</span>
                ))}
              </div>

              <Link to="/contact" onClick={closeModal}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-brand-navy text-white rounded-full font-bold hover:bg-blue-700 transition-all">
                Start a Similar Project <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
