// All translatable copy for the site, keyed by language.
// Collections (services, testimonials, projects, milestones, steps...) are
// arrays of text-only objects in the SAME ORDER as their structural
// counterparts in src/assets/data.jsx, and are merged by index in components.

export const translations = {
  id: {
    nav: {
      items: ["Tentang", "Layanan", "Proyek", "Tim", "Ulasan"],
      // keys must stay stable for scroll anchors: about, service, projects, team, reviews
      anchors: ["about", "service", "projects", "team", "reviews"],
      getConnected: "Hubungi Kami",
      location: "Indonesia",
      timezone: "WIB / GMT+7",
    },

    hero: {
      eyebrow: "AGENSI YANG MENGGERAKKAN BUDAYA",
      title:
        "Studio desain yang tidak hanya menciptakan produk digital, tapi juga pengalaman.",
      cta: "Mari Berkolaborasi",
      scroll: "(gulir untuk lainnya)",
    },

    about: {
      headingLead:
        "Membentuk ulang yang sudah ada, kami hadir membantumu menonjol –",
      headingAccent: "dengan kejelasan, kreativitas, dan ketajaman.",
      card1Label: "Untuk yang berani",
      card1Title:
        "Rancang pengalaman, bukan sekadar layar. Ceritakan kisah, bukan sekadar tagline.",
      established: "Sejak 2010",
      growthLabel: "(Pertumbuhan)",
      growthDesc: "Rancang pengalaman, bukan sekadar layar.",
      sectionTag: "(Tentang - 01)",
      footerText:
        "Kami membantu mewujudkan idemu menjadi visual yang beresonansi, mengganggu, dan bertahan.",
      bookCall: "Pesan Panggilan Sekarang",
    },

    services: {
      heading: "Layanan Kami",
      sectionTag: "(LAYANAN - 02)",
      subheadingLead: "Agensi yang menghadirkan",
      subheadingAccent: "gairah",
      subheadingTrail: "ke setiap proyek.",
      fallbackLabel: "Layanan Kami",
      items: [
        {
          title: "Identitas Merek",
          description:
            "Kami ahli merancang identitas merek unik yang beresonansi dengan audiens. Keahlian kami terletak pada memahami esensi merekmu dan menerjemahkannya menjadi visual dan narasi yang memikat.",
          tags: [
            "Desain Grafis",
            "Nama Merek",
            "Desain Logo",
            "Desain Kemasan",
            "Tipografi",
            "Skema Warna",
            "Suara dan Nada",
          ],
        },
        {
          title: "Desain UI/UX",
          description:
            "Kami menciptakan pengalaman digital intuitif yang menyenangkan pengguna dan mendorong hasil. Prosesnya meliputi riset mendalam, wireframing, dan prototyping presisi tinggi untuk memastikan interaksi yang mulus.",
          tags: [
            "Riset Pengguna",
            "Wireframing",
            "Prototyping",
            "Desain Aplikasi Mobile",
            "Desain Web",
          ],
        },
        {
          title: "Pengembangan",
          description:
            "Menghidupkan desain dengan kode yang bersih dan skalabel. Kami membangun aplikasi web dan mobile yang tangguh menggunakan teknologi modern dan praktik terbaik untuk performa puncak.",
          tags: [
            "React",
            "Tailwind CSS",
            "Node.js",
            "Full-stack",
            "Integrasi API",
            "Laravel",
            "SEO",
            "Performa",
          ],
        },
      ],
    },

    work: {
      heading: "Karya Kami",
      sectionTag: "(PROYEK - 03)",
      viewProject: "Lihat Proyek",
      missionLead: "Kami lahir di sebuah studio loft bersama dengan satu misi:",
      missionAccent: "menciptakan karya yang tidak biasa-biasa saja",
      seeAll: "Lihat Semua Proyek",
      milestonesTitle: "Pencapaian Agensi",
      miniTitle: "Rock Bottom",
      miniMeta: "(Desain Grafis - 2026)",
      projects: [
        {
          title: "Chat Genius",
          date: "(2024 — Masih berjalan)",
          tags: ["Desain Website", "Pengembangan"],
        },
        {
          title: "Field Type",
          date: "(2023 — Jan 2025)",
          tags: ["Branding", "Media Sosial"],
        },
      ],
      milestones: [
        { label: "Tahun Pengalaman" },
        { label: "Proyek Selesai" },
        { label: "Klien di Seluruh Dunia" },
        { label: "Kepuasan Pelanggan" },
      ],
    },

    team: {
      heading: "Orang di Balik Karya",
      sectionTag: "(TIM - 04)",
      intro:
        "Dari kampanye digital hingga sistem full-stack, tim kecil kami menghasilkan hal-hal besar. Setiap satunya, disengaja.",
      deliver: "Kami menghadirkan",
      recognition: "Pengakuan Global",
      recognitionTitle:
        "Kami berupaya menciptakan desain yang berdampak—bukan sekadar kesan.",
      ratingLabel: "(Rating)",
      ratingDesc: "oleh 50rb+ klien di seluruh dunia",
      ctaText:
        "Entah kamu meluncurkan sesuatu yang baru atau membentuk ulang yang sudah ada, kami hadir membantumu menonjol—dengan kejelasan, kreativitas, dan ketajaman.",
      startProject: "Mulai Proyekmu",
    },

    testimonials: {
      sectionTag: "(ULASAN — 05)",
      heading: "Testimoni",
      sidebar: "Kata dari mereka yang paling mengenal kami",
      brandFooter: "Bekerja dengan merek yang berarti",
      items: [
        {
          quote:
            "Toopay Agency memadukan kreativitas dan strategi dengan sempurna. Mereka membawa ide segar dan dampak nyata ke proyek kami.",
          role: "Head of Product di Webflow",
          statLabel: "Tingkat Konversi",
        },
        {
          quote:
            "Bekerja dengan Toopay benar-benar mengubah keadaan. Perhatian mereka pada detail dan kepekaan desain mengangkat merek kami ke level yang sama sekali baru.",
          role: "Marketing Director di Spotify",
          statLabel: "Kesadaran Merek",
        },
        {
          quote:
            "Tim pengembang Toopay menyelesaikan platform kami tepat waktu dan melampaui ekspektasi. Kode bersih, komunikasi hebat.",
          role: "CTO di Coinbase",
          statLabel: "Retensi Pengguna",
        },
      ],
    },

    footer: {
      ctaLabel: "Punya proyek yang terlintas?",
      bookCall: "Pesan Panggilan",
      copyrightSuffix: "TooPay Creative.",
      blurb:
        "Berkolaborasi dengan tim strategis, desainer, dan pengembang kami—disatukan oleh gairah, didorong oleh keunggulan, dan berkomitmen memberikan hasil luar biasa.",
      navigate: "Navigasi",
      socialMedia: "Media Sosial",
      navLinks: ["Beranda", "Proyek", "Layanan", "Tentang", "Kontak"],
    },

    mobileMenu: {
      locationLabel: "Lokasi",
      locationValue: "Bandung, Jawa Barat, Indonesia",
      contactLabel: "Kontak",
      copyright: "Toopay Agency",
    },

    contact: {
      eyebrow: "Mari Bekerja Sama",
      title: "Ceritakan proyekmu dan mari bangun sesuatu yang hebat.",
      available: "Tersedia untuk proyek baru",
      responseTime: "Respons dalam 24 jam",
      scroll: "(gulir ke formulir)",
      steps: [
        {
          step: "01",
          title: "Tinjauan Permintaan",
          text: "Kami meninjau pesanmu dalam 24 jam.",
        },
        {
          step: "02",
          title: "Panggilan Diskusi",
          text: "Panggilan singkat untuk menyelaraskan tujuan dan visi.",
        },
        {
          step: "03",
          title: "Proposal",
          text: "Lingkup, timeline, dan harga yang disesuaikan.",
        },
        { step: "04", title: "Mulai", text: "Kami mulai membangun — bersama." },
      ],
      services: ["Identitas Merek", "Desain UI/UX", "Pengembangan", "Lainnya"],
      sectionAboutYou: "Tentang Kamu",
      sectionService: "Layanan Dibutuhkan",
      sectionBudget: "Rentang Anggaran",
      sectionDetails: "Detail Proyek",
      fieldName: "Namamu",
      fieldNamePlaceholder: "Julian Smith",
      fieldEmail: "Alamat Email",
      fieldEmailPlaceholder: "kamu@perusahaan.com",
      fieldCompany: "Perusahaan / Merek",
      fieldCompanyPlaceholder: "Nama perusahaanmu",
      fieldMessage: "Ceritakan semuanya",
      fieldMessagePlaceholder:
        "Jelaskan proyekmu, tujuan, timeline, referensi...",
      requiredFields: "* Wajib diisi",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      successTitle: "Pesan terkirim.",
      successText:
        "Kami akan menghubungimu dalam 24 jam. Sementara itu, silakan jelajahi karya kami.",
      seeWork: "Lihat Karya Kami",
      errorText:
        "Terjadi kesalahan. Silakan email kami langsung di tooopayy@gmail.com",
      getInTouch: "Hubungi Kami",
      emailLabel: "Email",
      locationLabel: "Lokasi",
      locationValue: "Bandung, Jawa Barat",
      timezoneLabel: "Zona Waktu",
      ourProcess: "Proses Kami",
      followUs: "Ikuti Kami",
    },

    projects: {
      eyebrow: "Portofolio Kami",
      title: "Karya yang tidak biasa-biasa saja — dibuat dengan niat.",
      scroll: "(gulir ke karya)",
      viewProject: "Lihat Proyek",
      filters: [
        { key: "All", label: "Semua" },
        { key: "Brand Identity", label: "Identitas Merek" },
        { key: "UI/UX Design", label: "Desain UI/UX" },
        { key: "Development", label: "Pengembangan" },
        { key: "Graphic Design", label: "Desain Grafis" },
      ],
      clientLabel: "Klien",
      yearLabel: "Tahun",
      confidential: "Rahasia",
      similarProject: "Mulai Proyek Serupa",
      items: [
        {
          title: "Chat Genius",
          date: "(2024 — Masih berjalan)",
          tags: ["Desain Website", "Pengembangan"],
          description:
            "Platform chat bertenaga AI dengan fitur kolaborasi real-time dan antarmuka modern yang intuitif.",
          client: "Chat Genius Ltd.",
        },
        {
          title: "Field Type",
          date: "(2023 — Jan 2025)",
          tags: ["Branding", "Media Sosial"],
          description:
            "Identitas merek lengkap dan strategi media sosial untuk sebuah foundry tipografi premium.",
          client: "Field Type Studio",
        },
        {
          title: "Rock Bottom",
          date: "(2026 — Berlangsung)",
          tags: ["Desain Grafis"],
          description:
            "Proyek desain grafis berani yang mengeksplorasi storytelling visual mentah dan tanpa filter melalui tipografi dan tekstur.",
          client: "Independen",
        },
        {
          title: "Neon Pulse",
          date: "(2025 — Mar 2025)",
          tags: ["Identitas Merek", "Desain UI/UX"],
          description:
            "Perombakan merek menyeluruh untuk startup teknologi — dari sistem logo hingga desain produk digital lengkap.",
          client: "Neon Pulse Inc.",
        },
        {
          title: "Verdant",
          date: "(2024 — Des 2024)",
          tags: ["Pengembangan", "Desain UI/UX"],
          description:
            "Platform web full-stack untuk merek gaya hidup ramah lingkungan, dibangun dengan React dan Node.js.",
          client: "Verdant Co.",
        },
      ],
    },

    notFound: {
      title: "Halaman ini tidak ada.",
      text: "Halaman yang kamu cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada. Mari kembali ke sesuatu yang bermakna.",
      goHome: "Ke Beranda",
      goBack: "Kembali",
    },
  },

  en: {
    nav: {
      items: ["About", "Service", "Projects", "Team", "Reviews"],
      anchors: ["about", "service", "projects", "team", "reviews"],
      getConnected: "Get Connected",
      location: "Indonesia",
      timezone: "WIB / GMT+7",
    },

    hero: {
      eyebrow: "AGENCY THAT MOVES CULTURE",
      title:
        "Design studio that not only creates digital products but also experiences.",
      cta: "Let's Collaborate",
      scroll: "(scroll for more)",
    },

    about: {
      headingLead: "Reshaping what exists, we're here to help you stand out –",
      headingAccent: "with clarity, creativity, and edge.",
      card1Label: "Made for the bold",
      card1Title:
        "Design experience, not just screen. Tell stories, not just taglines.",
      established: "Est. 2010",
      growthLabel: "(Growth)",
      growthDesc: "Design experience, not just screen.",
      sectionTag: "(About - 01)",
      footerText:
        "We help you to shape your ideas into visuable that resonate, disrupt, and last.",
      bookCall: "Book a Call Now",
    },

    services: {
      heading: "Our Services",
      sectionTag: "(SERVICE - 02)",
      subheadingLead: "An agency that brings",
      subheadingAccent: "passion",
      subheadingTrail: "into every project.",
      fallbackLabel: "Our Services",
      items: [
        {
          title: "Brand Identity",
          description:
            "We specialize in crafting unique brand identities that resonate with audiences. Our expertise lies in understanding the essence of your brand and translating it into compelling visuals and narratives.",
          tags: [
            "Graphic Design",
            "Brand Name",
            "Logo Design",
            "Package Design",
            "Typography",
            "Color Scheme",
            "Voice and Tone",
          ],
        },
        {
          title: "UI/UX Design",
          description:
            "We create intuitive digital experiences that delight users and drive results. Our process involves deep research, wireframing, and high-fidelity prototyping to ensure seamless interaction.",
          tags: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Mobile App Design",
            "Web Design",
          ],
        },
        {
          title: "Development",
          description:
            "Bringing designs to life with clean, scalable code. We build robust web and mobile applications using modern technologies and best practices to ensure peak performance.",
          tags: [
            "React",
            "Tailwind CSS",
            "Node.js",
            "Full-stack",
            "API Integration",
            "Laravel",
            "SEO",
            "Peformance",
          ],
        },
      ],
    },

    work: {
      heading: "Our Work",
      sectionTag: "(PROJECT - 03)",
      viewProject: "View Project",
      missionLead: "We born in a shared studio loft with one mission:",
      missionAccent: "create work that doesn't blend in",
      seeAll: "See All Projects",
      milestonesTitle: "Agency Milestones",
      miniTitle: "Rock Bottom",
      miniMeta: "(Graphic Design - 2026)",
      projects: [
        {
          title: "Chat Genius",
          date: "(2024 — Still on going)",
          tags: ["Website Design", "Development"],
        },
        {
          title: "Field Type",
          date: "(2023 — Jan 2025)",
          tags: ["Branding", "Social Media"],
        },
      ],
      milestones: [
        { label: "Years of Experience" },
        { label: "Projects Completed" },
        { label: "Clients Worldwide" },
        { label: "Customer Satisfaction" },
      ],
    },

    team: {
      heading: "Man Behind The Work",
      sectionTag: "(TEAM - 04)",
      intro:
        "From digital campaigns to full-stack systems, our small team shipped big things. Every single one, intentional.",
      deliver: "We deliver",
      recognition: "Global Recognition",
      recognitionTitle:
        "We thrive to create design that make impact—not just impressions.",
      ratingLabel: "(Rating)",
      ratingDesc: "by 50k+ clients world-wide",
      ctaText:
        "Whether you're launching something new or reshaping what exists, We're here to help you stand out—with clarity, creativity, and edge.",
      startProject: "Start Your Project",
    },

    testimonials: {
      sectionTag: "(REVIEWS — 05)",
      heading: "Testimonials",
      sidebar: "Words from the ones who know us best",
      brandFooter: "Working with brands that matters",
      items: [
        {
          quote:
            "Toopay Agency combines creativity and strategy perfectly. They brought fresh ideas and real impact to our project.",
          role: "Head of Product at Webflow",
          statLabel: "Conversion Rate",
        },
        {
          quote:
            "Working with Toopay was a game changer. Their attention to detail and design sensibility elevated our brand to a whole new level.",
          role: "Marketing Director at Spotify",
          statLabel: "Brand Awareness",
        },
        {
          quote:
            "The development team at Toopay delivered our platform on time and beyond expectations. Clean code, great communication.",
          role: "CTO at Coinbase",
          statLabel: "User Retention",
        },
      ],
    },

    footer: {
      ctaLabel: "Have any project in mind?",
      bookCall: "Book a Call",
      copyrightSuffix: "TooPay Creative.",
      blurb:
        "Collaborate with our team of strategists, designers, and developers—united by passion, driven by excellence, and committed to delivering exceptional results.",
      navigate: "Navigate",
      socialMedia: "Social Media",
      navLinks: ["Home", "Projects", "Service", "About", "Contact"],
    },

    mobileMenu: {
      locationLabel: "Location",
      locationValue: "Bandung, Jawa Barat, Indonesia",
      contactLabel: "Contact",
      copyright: "Toopay Agency",
    },

    contact: {
      eyebrow: "Let's Work Together",
      title: "Tell us about your project and let's build something great.",
      available: "Available for new projects",
      responseTime: "Response within 24h",
      scroll: "(scroll to form)",
      steps: [
        {
          step: "01",
          title: "Inquiry Review",
          text: "We review your message within 24 hours.",
        },
        {
          step: "02",
          title: "Discovery Call",
          text: "A short call to align on goals and vision.",
        },
        {
          step: "03",
          title: "Proposal",
          text: "Tailored scope, timeline, and pricing.",
        },
        {
          step: "04",
          title: "Kick Off",
          text: "We start building — together.",
        },
      ],
      services: ["Brand Identity", "UI/UX Design", "Development", "Other"],
      sectionAboutYou: "About You",
      sectionService: "Service Needed",
      sectionBudget: "Budget Range",
      sectionDetails: "Project Details",
      fieldName: "Your Name",
      fieldNamePlaceholder: "Julian Smith",
      fieldEmail: "Email Address",
      fieldEmailPlaceholder: "you@company.com",
      fieldCompany: "Company / Brand",
      fieldCompanyPlaceholder: "Your company name",
      fieldMessage: "Tell us everything",
      fieldMessagePlaceholder:
        "Describe your project, goals, timeline, references...",
      requiredFields: "* Required fields",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message sent.",
      successText:
        "We'll reach out within 24 hours. In the meantime, feel free to explore our work.",
      seeWork: "See Our Work",
      errorText:
        "Something went wrong. Please try emailing us directly at tooopayy@gmail.com",
      getInTouch: "Get in Touch",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Bandung, Jawa Barat",
      timezoneLabel: "Timezone",
      ourProcess: "Our Process",
      followUs: "Follow Us",
    },

    projects: {
      eyebrow: "Our Portfolio",
      title: "Work that doesn't blend in — crafted with intention.",
      scroll: "(scroll to work)",
      viewProject: "View Project",
      filters: [
        { key: "All", label: "All" },
        { key: "Brand Identity", label: "Brand Identity" },
        { key: "UI/UX Design", label: "UI/UX Design" },
        { key: "Development", label: "Development" },
        { key: "Graphic Design", label: "Graphic Design" },
      ],
      clientLabel: "Client",
      yearLabel: "Year",
      confidential: "Confidential",
      similarProject: "Start a Similar Project",
      items: [
        {
          title: "Chat Genius",
          date: "(2024 — Still on going)",
          tags: ["Website Design", "Development"],
          description:
            "AI-powered chat platform with real-time collaboration features and a modern, intuitive interface.",
          client: "Chat Genius Ltd.",
        },
        {
          title: "Field Type",
          date: "(2023 — Jan 2025)",
          tags: ["Branding", "Social Media"],
          description:
            "Full brand identity and social media strategy for a premium typography foundry.",
          client: "Field Type Studio",
        },
        {
          title: "Rock Bottom",
          date: "(2026 — Ongoing)",
          tags: ["Graphic Design"],
          description:
            "A bold graphic design project exploring raw, unfiltered visual storytelling through typography and texture.",
          client: "Independent",
        },
        {
          title: "Neon Pulse",
          date: "(2025 — Mar 2025)",
          tags: ["Brand Identity", "UI/UX Design"],
          description:
            "Complete brand overhaul for a tech startup — from logo system to full digital product design.",
          client: "Neon Pulse Inc.",
        },
        {
          title: "Verdant",
          date: "(2024 — Dec 2024)",
          tags: ["Development", "UI/UX Design"],
          description:
            "Full-stack web platform for an eco-conscious lifestyle brand, built with React and Node.js.",
          client: "Verdant Co.",
        },
      ],
    },

    notFound: {
      title: "This page doesn't exist.",
      text: "The page you're looking for may have been moved, deleted, or never existed. Let's get you back to something meaningful.",
      goHome: "Go Home",
      goBack: "Go Back",
    },
  },
};
