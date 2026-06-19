// All translatable copy for the site, keyed by language.
// Collections (services, testimonials, projects, milestones, steps...) are
// arrays of text-only objects in the SAME ORDER as their structural
// counterparts in src/assets/data.jsx, and are merged by index in components.

export const translations = {
  id: {
    nav: {
      items: ["Tentang", "Layanan", "Proyek", "Tim", "Ulasan"],
      anchors: ["about", "service", "projects", "team", "reviews"],
      getConnected: "Minta Penawaran",
      location: "Indonesia",
      timezone: "WIB / GMT+7",
    },

    hero: {
      eyebrow: "JASA PEMBUATAN WEBSITE PROFESIONAL",
      title:
        "Website profesional untuk bisnismu — selesai tepat waktu, harga sesuai budget.",
      cta: "Konsultasi Gratis",
      scroll: "(gulir untuk lainnya)",
    },

    about: {
      headingLead: "Website bukan sekadar tampilan —",
      headingAccent: "tapi alat yang bekerja untuk bisnismu 24 jam sehari.",
      card1Label: "Untuk semua jenis bisnis",
      card1Title:
        "Landing page, company profile, atau website custom — kami kerjakan semuanya.",
      established: "Sejak 2010",
      growthLabel: "(Pertumbuhan)",
      growthDesc: "Klien puas, bisnis berkembang.",
      sectionTag: "(Tentang - 01)",
      footerText:
        "Kami bantu bisnismu hadir secara online dengan website yang rapi, cepat, dan mudah dikelola.",
      bookCall: "Konsultasi Gratis Sekarang",
    },

    services: {
      heading: "Layanan Kami",
      sectionTag: "(LAYANAN - 02)",
      subheadingLead: "Tiga layanan utama,",
      subheadingAccent: "satu tim yang mengerjakan",
      subheadingTrail: "dari awal sampai websitemu live.",
      fallbackLabel: "Layanan Kami",
      items: [
        {
          title: "Landing Page",
          description:
            "Butuh halaman yang langsung mengkonversi pengunjung jadi pelanggan? Kami buat landing page yang fokus, cepat, dan dirancang untuk mendorong aksi — cocok untuk promosi, produk, atau kampanye iklan.",
          tags: [
            "Desain Custom",
            "Mobile-Friendly",
            "Cepat & Ringan",
            "Call-to-Action Jelas",
            "SEO Dasar",
            "Siap Pasang Iklan",
          ],
        },
        {
          title: "Company Profile",
          description:
            "Buat bisnismu terlihat profesional dan terpercaya di mata calon klien. Kami bangun website company profile yang rapi, informatif, dan mencerminkan identitas bisnismu dengan baik.",
          tags: [
            "Desain Profesional",
            "Mobile-Friendly",
            "Profil Bisnis",
            "Halaman Layanan",
            "Kontak & Maps",
            "SEO Dasar",
          ],
        },
        {
          title: "Custom Website",
          description:
            "Punya kebutuhan yang tidak bisa dipenuhi template biasa? Kami kembangkan website sesuai alur bisnis dan fitur spesifik yang kamu butuhkan — dari booking online, portal member, hingga dashboard admin.",
          tags: [
            "Fitur Custom",
            "Dashboard Admin",
            "Sistem Login",
            "Integrasi API",
            "Full-stack",
            "Laravel & React",
          ],
        },
      ],
    },

    work: {
      heading: "Proyek yang Sudah Kami Kerjakan",
      sectionTag: "(PROYEK - 03)",
      viewProject: "Lihat Proyek",
      missionLead: "Kami hadir dengan satu tujuan sederhana:",
      missionAccent: "membantu bisnis apapun tampil profesional di internet",
      seeAll: "Lihat Semua Proyek",
      milestonesTitle: "Pencapaian Kami",
      miniTitle: "Rock Bottom",
      miniMeta: "(Custom Website - 2026)",
      projects: [
        {
          title: "Growthica",
          date: "(2024 — Masih berjalan)",
          tags: ["Custom Website", "Pengembangan"],
        },
        {
          title: "LCYA",
          date: "(2023 — Jan 2025)",
          tags: ["Company Profile", "Desain"],
        },
      ],
      milestones: [
        { label: "Tahun Pengalaman" },
        { label: "Website Selesai" },
        { label: "Klien Puas" },
        { label: "Kepuasan Pelanggan" },
      ],
    },

    team: {
      heading: "Tim yang Mengerjakan Websitemu",
      sectionTag: "(TIM - 04)",
      intro:
        "Kamu akan langsung kerja sama dengan kami — tidak ada perantara, komunikasi jelas, hasil bisa diprediksi.",
      deliver: "Kami hadirkan",
      recognition: "Website yang Benar-benar Berfungsi",
      recognitionTitle:
        "Setiap website kami bangun serius — karena kesuksesan online bisnismu adalah prioritas kami.",
      ratingLabel: "(Rating)",
      ratingDesc: "oleh ratusan klien dari berbagai industri",
      ctaText:
        "Mau bikin landing page, company profile, atau website custom? Ceritakan kebutuhanmu dan kami siap bantu wujudkan.",
      startProject: "Mulai Proyekmu",
    },

    testimonials: {
      sectionTag: "(ULASAN — 05)",
      heading: "Kata Mereka",
      sidebar: "Klien yang sudah percayakan websitenya ke kami",
      brandFooter: "Dipercaya oleh bisnis dari berbagai industri",
      items: [
        {
          quote:
            "Landing page yang mereka buat langsung berdampak. Banyak yang DM dan nanya produk kami setelah klik iklan — konversinya naik signifikan.",
          role: "Pemilik Bisnis Online",
          statLabel: "Konversi Iklan",
        },
        {
          quote:
            "Company profile kami sekarang jauh lebih profesional. Klien baru sering bilang mereka jadi lebih percaya setelah lihat website kami.",
          role: "Direktur Perusahaan Jasa",
          statLabel: "Kepercayaan Klien",
        },
        {
          quote:
            "Custom website yang mereka bangun persis sesuai kebutuhan kami. Prosesnya jelas, tepat waktu, dan tidak ada biaya tersembunyi.",
          role: "Founder Startup Lokal",
          statLabel: "Kepuasan Proyek",
        },
      ],
    },

    footer: {
      ctaLabel: "Siap punya website profesional?",
      bookCall: "Konsultasi Gratis",
      copyrightSuffix: "TooPay Creative.",
      blurb:
        "Jasa pembuatan landing page, company profile, dan custom website — harga transparan, hasil bisa diandalkan.",
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
      eyebrow: "Yuk, Mulai Bikin Website",
      title: "Ceritakan kebutuhan websitemu — kami bantu wujudkan.",
      available: "Menerima proyek baru",
      responseTime: "Respons dalam 24 jam",
      scroll: "(gulir ke formulir)",
      steps: [
        {
          step: "01",
          title: "Ceritakan Kebutuhanmu",
          text: "Isi form atau hubungi kami — kami baca dalam 24 jam.",
        },
        {
          step: "02",
          title: "Konsultasi Gratis",
          text: "Kita ngobrol untuk memahami kebutuhan dan budget-mu.",
        },
        {
          step: "03",
          title: "Penawaran Harga",
          text: "Kami kirim proposal dengan harga yang transparan dan jelas.",
        },
        {
          step: "04",
          title: "Mulai Pengerjaan",
          text: "Kami mulai bangun websitemu sesuai kesepakatan.",
        },
      ],
      services: [
        "Landing Page",
        "Company Profile",
        "Custom Website",
        "Belum Tahu / Diskusi Dulu",
      ],
      sectionAboutYou: "Tentang Kamu",
      sectionService: "Jenis Website yang Dibutuhkan",
      sectionBudget: "Rentang Anggaran",
      sectionDetails: "Detail Kebutuhan",
      fieldName: "Namamu",
      fieldNamePlaceholder: "Budi Santoso",
      fieldEmail: "Alamat Email",
      fieldEmailPlaceholder: "kamu@perusahaan.com",
      fieldCompany: "Nama Bisnis / Usaha",
      fieldCompanyPlaceholder: "Nama bisnis atau brandmu",
      fieldMessage: "Ceritakan kebutuhan websitemu",
      fieldMessagePlaceholder:
        "Contoh: Saya butuh landing page untuk produk skincare saya, target selesai 2 minggu lagi...",
      requiredFields: "* Wajib diisi",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      successTitle: "Pesan terkirim!",
      successText:
        "Kami akan menghubungimu dalam 24 jam untuk diskusi lebih lanjut.",
      seeWork: "Lihat Portofolio Kami",
      errorText:
        "Terjadi kesalahan. Silakan email kami langsung di tooopayy@gmail.com",
      getInTouch: "Hubungi Kami",
      emailLabel: "Email",
      locationLabel: "Lokasi",
      locationValue: "Bandung, Jawa Barat",
      timezoneLabel: "Zona Waktu",
      ourProcess: "Cara Kerja Kami",
      followUs: "Ikuti Kami",
    },

    projects: {
      eyebrow: "Portofolio Kami",
      title: "Website yang sudah kami bangun — untuk bisnis nyata.",
      scroll: "(gulir ke karya)",
      viewProject: "Lihat Proyek",
      filters: [
        { key: "All", label: "Semua" },
        { key: "Brand Identity", label: "Landing Page" },
        { key: "UI/UX Design", label: "Company Profile" },
        { key: "Development", label: "Custom Website" },
        { key: "Graphic Design", label: "Desain UI/UX" },
      ],
      clientLabel: "Klien",
      yearLabel: "Tahun",
      confidential: "Rahasia",
      similarProject: "Buat Website Serupa",
      items: [
        {
          title: "Growthica",
          date: "(2024 — Masih berjalan)",
          tags: ["Custom Website", "Pengembangan"],
          description:
            "Platform web custom dengan fitur chat real-time dan antarmuka yang modern dan mudah digunakan.",
          client: "Chat Genius Ltd.",
        },
        {
          title: "Bridge of Hope",
          date: "(2023 — Jan 2025)",
          tags: ["Company Profile", "Desain"],
          description:
            "Website company profile profesional untuk studio tipografi premium — bersih, elegan, dan mudah dinavigasi.",
          client: "Field Type Studio",
        },
        {
          title: "WasteJourney",
          date: "(2026 — Berlangsung)",
          tags: ["Landing Page"],
          description:
            "Landing page dengan visual yang kuat dan karakter — dirancang untuk menarik perhatian dan mendorong konversi.",
          client: "Independen",
        },
        {
          title: "Routify",
          date: "(2025 — Mar 2025)",
          tags: ["Custom Website", "Desain UI/UX"],
          description:
            "Website custom lengkap untuk startup teknologi — dari halaman marketing hingga dashboard produk.",
          client: "Neon Pulse Inc.",
        },
        {
          title: "Kertapati",
          date: "(2024 — Des 2024)",
          tags: ["Custom Website", "Desain UI/UX"],
          description:
            "Platform web full-stack untuk brand lifestyle ramah lingkungan, dibangun dengan React dan Laravel.",
          client: "Verdant Co.",
        },
      ],
    },

    notFound: {
      title: "Halaman ini tidak ditemukan.",
      text: "Mungkin sudah dipindahkan atau tidak pernah ada. Yuk balik ke halaman utama.",
      goHome: "Ke Beranda",
      goBack: "Kembali",
    },
  },

  en: {
    nav: {
      items: ["About", "Service", "Projects", "Team", "Reviews"],
      anchors: ["about", "service", "projects", "team", "reviews"],
      getConnected: "Get a Quote",
      location: "Indonesia",
      timezone: "WIB / GMT+7",
    },

    hero: {
      eyebrow: "PROFESSIONAL WEBSITE DEVELOPMENT",
      title:
        "A professional website for your business — delivered on time, priced for your budget.",
      cta: "Free Consultation",
      scroll: "(scroll for more)",
    },

    about: {
      headingLead: "A website isn't just a pretty face —",
      headingAccent: "it's a tool that works for your business 24 hours a day.",
      card1Label: "For every kind of business",
      card1Title:
        "Landing page, company profile, or custom website — we build it all.",
      established: "Est. 2010",
      growthLabel: "(Growth)",
      growthDesc: "Happy clients. Growing businesses.",
      sectionTag: "(About - 01)",
      footerText:
        "We help your business show up online with a website that's clean, fast, and easy to manage.",
      bookCall: "Book a Free Consultation",
    },

    services: {
      heading: "Our Services",
      sectionTag: "(SERVICE - 02)",
      subheadingLead: "Three core services,",
      subheadingAccent: "one team handling it all",
      subheadingTrail: "from kickoff to your website going live.",
      fallbackLabel: "Our Services",
      items: [
        {
          title: "Landing Page",
          description:
            "Need a page that turns visitors into customers? We build focused, fast landing pages designed to drive action — perfect for promotions, products, or ad campaigns.",
          tags: [
            "Custom Design",
            "Mobile-Friendly",
            "Fast & Lightweight",
            "Clear Call-to-Action",
            "Basic SEO",
            "Ad-Ready",
          ],
        },
        {
          title: "Company Profile",
          description:
            "Make your business look professional and trustworthy to potential clients. We build company profile websites that are clean, informative, and reflect your brand identity well.",
          tags: [
            "Professional Design",
            "Mobile-Friendly",
            "Business Profile",
            "Services Page",
            "Contact & Maps",
            "Basic SEO",
          ],
        },
        {
          title: "Custom Website",
          description:
            "Have needs that a standard template can't handle? We develop websites tailored to your business flow and specific features — from online booking and member portals to admin dashboards.",
          tags: [
            "Custom Features",
            "Admin Dashboard",
            "Login System",
            "API Integration",
            "Full-stack",
            "Laravel & React",
          ],
        },
      ],
    },

    work: {
      heading: "Projects We've Built",
      sectionTag: "(PROJECT - 03)",
      viewProject: "View Project",
      missionLead: "We started with one simple goal:",
      missionAccent: "help any business look professional online",
      seeAll: "See All Projects",
      milestonesTitle: "Our Milestones",
      miniTitle: "Rock Bottom",
      miniMeta: "(Custom Website - 2026)",
      projects: [
        {
          title: "Growthica",
          date: "(2024 — Still ongoing)",
          tags: ["Custom Website", "Development"],
        },
        {
          title: "LCYA",
          date: "(2023 — Jan 2025)",
          tags: ["Company Profile", "Design"],
        },
      ],
      milestones: [
        { label: "Years of Experience" },
        { label: "Websites Launched" },
        { label: "Happy Clients" },
        { label: "Customer Satisfaction" },
      ],
    },

    team: {
      heading: "The Team Building Your Website",
      sectionTag: "(TEAM - 04)",
      intro:
        "You work directly with us — no middlemen, clear communication, predictable results.",
      deliver: "We deliver",
      recognition: "Websites That Actually Work",
      recognitionTitle:
        "We take every project seriously — because your online success is our priority.",
      ratingLabel: "(Rating)",
      ratingDesc: "by hundreds of clients across industries",
      ctaText:
        "Need a landing page, company profile, or custom website? Tell us what you need and we'll make it happen.",
      startProject: "Start Your Project",
    },

    testimonials: {
      sectionTag: "(REVIEWS — 05)",
      heading: "What Clients Say",
      sidebar: "Clients who trusted us with their website",
      brandFooter: "Trusted by businesses across industries",
      items: [
        {
          quote:
            "The landing page they built made an immediate impact. People started reaching out after clicking our ads — our conversion rate went up noticeably.",
          role: "Online Business Owner",
          statLabel: "Ad Conversion",
        },
        {
          quote:
            "Our company profile looks so much more professional now. New clients often tell us they felt more confident reaching out after seeing our website.",
          role: "Director, Service Company",
          statLabel: "Client Trust",
        },
        {
          quote:
            "The custom website they built fit our needs exactly. Clear process, on time, and no hidden costs.",
          role: "Local Startup Founder",
          statLabel: "Project Satisfaction",
        },
      ],
    },

    footer: {
      ctaLabel: "Ready to get a professional website?",
      bookCall: "Free Consultation",
      copyrightSuffix: "TooPay Creative.",
      blurb:
        "Landing pages, company profiles, and custom websites — transparent pricing, reliable results.",
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
      eyebrow: "Let's Build Your Website",
      title: "Tell us what you need — we'll bring it to life.",
      available: "Available for new projects",
      responseTime: "Response within 24h",
      scroll: "(scroll to form)",
      steps: [
        {
          step: "01",
          title: "Tell Us Your Needs",
          text: "Fill out the form or contact us — we respond within 24 hours.",
        },
        {
          step: "02",
          title: "Free Consultation",
          text: "We chat to understand your needs and budget.",
        },
        {
          step: "03",
          title: "Pricing Proposal",
          text: "We send a proposal with clear, transparent pricing.",
        },
        {
          step: "04",
          title: "We Start Building",
          text: "We build your website based on what we agreed.",
        },
      ],
      services: [
        "Landing Page",
        "Company Profile",
        "Custom Website",
        "Not Sure Yet / Let's Discuss",
      ],
      sectionAboutYou: "About You",
      sectionService: "Type of Website Needed",
      sectionBudget: "Budget Range",
      sectionDetails: "Project Details",
      fieldName: "Your Name",
      fieldNamePlaceholder: "John Smith",
      fieldEmail: "Email Address",
      fieldEmailPlaceholder: "you@company.com",
      fieldCompany: "Business / Brand Name",
      fieldCompanyPlaceholder: "Your business or brand name",
      fieldMessage: "Tell us about your website needs",
      fieldMessagePlaceholder:
        "Example: I need a landing page for my skincare product, aiming to finish in 2 weeks...",
      requiredFields: "* Required fields",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message sent!",
      successText: "We'll reach out within 24 hours to discuss further.",
      seeWork: "See Our Portfolio",
      errorText:
        "Something went wrong. Please email us directly at tooopayy@gmail.com",
      getInTouch: "Get in Touch",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Bandung, Jawa Barat",
      timezoneLabel: "Timezone",
      ourProcess: "How We Work",
      followUs: "Follow Us",
    },

    projects: {
      eyebrow: "Our Portfolio",
      title: "Websites we've built — for real businesses.",
      scroll: "(scroll to work)",
      viewProject: "View Project",
      filters: [
        { key: "All", label: "All" },
        { key: "Brand Identity", label: "Landing Page" },
        { key: "UI/UX Design", label: "Company Profile" },
        { key: "Development", label: "Custom Website" },
        { key: "Graphic Design", label: "UI/UX Design" },
      ],
      clientLabel: "Client",
      yearLabel: "Year",
      confidential: "Confidential",
      similarProject: "Build a Similar Website",
      items: [
        {
          title: "Growthica",
          date: "(2024 — Still ongoing)",
          tags: ["Custom Website", "Development"],
          description:
            "Custom web platform with real-time chat features and a modern, easy-to-use interface.",
          client: "Chat Genius Ltd.",
        },
        {
          title: "Bridge of Hope",
          date: "(2023 — Jan 2025)",
          tags: ["Company Profile", "Design"],
          description:
            "Professional company profile website for a premium typography studio — clean, elegant, and easy to navigate.",
          client: "Field Type Studio",
        },
        {
          title: "WasteJourney",
          date: "(2026 — Ongoing)",
          tags: ["Landing Page"],
          description:
            "Landing page with strong visual character — built to grab attention and drive conversions.",
          client: "Independent",
        },
        {
          title: "Routify",
          date: "(2025 — Mar 2025)",
          tags: ["Custom Website", "UI/UX Design"],
          description:
            "Full custom website for a tech startup — from marketing pages to product dashboard.",
          client: "Neon Pulse Inc.",
        },
        {
          title: "Kertapati",
          date: "(2024 — Dec 2024)",
          tags: ["Custom Website", "UI/UX Design"],
          description:
            "Full-stack web platform for an eco-conscious lifestyle brand, built with React and Laravel.",
          client: "Verdant Co.",
        },
      ],
    },

    notFound: {
      title: "This page doesn't exist.",
      text: "It may have been moved, deleted, or never existed. Let's get you back to something useful.",
      goHome: "Go Home",
      goBack: "Go Back",
    },
  },
};
