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

    pricing: {
      sectionTag: "(HARGA - 02.5)",
      title: "Solusi Digital & Pengembangan Web",
      setupFee: "Biaya Setup",
      maintenance: "Gratis update / edit halaman yang sudah ada selama 3 bulan",
      startingFrom: "Mulai dari",
      buttonText: "Konsultasi Gratis",
      plans: [
        {
          name: "Landing Page",
          description: "Untuk promosi produk atau kampanye",
          price: "Rp 1.500.000",
          period: "project",
          features: [
            "1 halaman website",
            "Waktu pengerjaan 1-2 hari",
            "Domain gratis (.com 1 tahun)",
            "Hosting gratis (1 tahun)",
            "Email bisnis gratis",
            "SSL gratis",
            "SEO dasar",
            "Editing gambar dasar",
          ],
          setupFee: "Gratis",
        },
        {
          name: "Company Profile",
          description: "Untuk profil bisnis profesional",
          price: "Rp 3.500.000",
          period: "project",
          features: [
            "3-5 halaman website",
            "Waktu pengerjaan 3-4 hari",
            "Domain gratis (.com 1 tahun)",
            "Hosting gratis (1 tahun)",
            "Email bisnis gratis",
            "SSL gratis",
            "SEO dasar",
            "Editing gambar dasar",
          ],
          setupFee: "Gratis",
        },
        {
          name: "Custom Website",
          description: "Untuk fitur khusus dan kompleks",
          price: "Rp 7.000.000",
          period: "project",
          features: [
            "Halaman tanpa batas",
            "Waktu pengerjaan 6-7 hari",
            "Domain gratis (.com 1 tahun)",
            "Hosting gratis (1 tahun)",
            "Email bisnis gratis",
            "SSL gratis",
            "SEO dasar",
            "Editing gambar dasar",
          ],
          setupFee: "Gratis",
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
      miniTitle: "Wajan Nusantara",
      miniMeta: "(Custom Website - 2026)",
      projects: [
        {
          title: "Growthica",
          date: "(2024 — Masih berjalan)",
          tags: ["Landing Page", "Pertanian"],
        },
        {
          title: "Lyca",
          date: "(2025 — Jan 2025)",
          tags: ["Custom Website", "Company Profile"],
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

    faq: {
      sectionTag: "(FAQ - 06)",
      title: "Pertanyaan yang Sering Diajukan",
      items: [
        {
          question: "Berapa lama waktu pengerjaan website?",
          answer:
            "Waktu pengerjaan bervariasi tergantung jenis website: Landing Page 1-2 hari, Company Profile 3-4 hari, dan Custom Website 6-7 hari. Kami akan memberikan estimasi waktu yang lebih spesifik setelah diskusi awal.",
        },
        {
          question: "Apakah harga sudah termasuk domain dan hosting?",
          answer:
            "Ya, semua paket kami sudah termasuk domain gratis (.com) selama 1 tahun dan hosting gratis selama 1 tahun. Setelah masa gratis berakhir, Anda bisa memperpanjang dengan harga standar.",
        },
        {
          question: "Apakah ada biaya maintenance?",
          answer:
            "Kami memberikan gratis update/edit halaman yang sudah ada selama 3 bulan. Setelah itu, jika Anda butuh maintenance atau update tambahan, kami bisa diskusikan paket maintenance yang sesuai kebutuhan.",
        },
        {
          question: "Apakah saya bisa request revisi?",
          answer:
            "Tentu! Kami memberikan kesempatan revisi untuk memastikan hasil sesuai dengan keinginan Anda. Jumlah revisi tergantung dari paket yang Anda pilih dan akan dijelaskan di awal proyek.",
        },
        {
          question: "Bagaimana proses pembayarannya?",
          answer:
            "Pembayaran dilakukan dengan sistem DP 50% di awal proyek, dan 50% sisanya setelah website selesai dan Anda sudah approve. Kami akan kirim invoice yang jelas untuk setiap pembayaran.",
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
      socialAriaLabel: "Kunjungi profil {name} kami",
    },

    mobileMenu: {
      locationLabel: "Lokasi",
      locationValue: "Bandung, Jawa Barat, Indonesia",
      contactLabel: "Kontak",
      copyright: "Toopay Agency",
      phone: "+62 878 7698 2219",
      email: "tooopayy@gmail.com",
      socials: ["Instagram", "Tiktok"],
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
      fieldBudget: "Anggaran",
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
      fieldCurrency: "Mata Uang",
      countryName: "Indonesia",
      timezoneValue: "WIB — GMT+7",
      socialLinks: ["Instagram", "Twitter (X)", "LinkedIn", "TikTok"],
      whatsappAriaLabel: "Chat via WhatsApp",
      orWhatsapp: "Atau hubungi via WhatsApp",
      currencies: [
        { code: "USD", symbol: "$", name: "Dolar AS" },
        { code: "IDR", symbol: "Rp", name: "Rupiah Indonesia" },
        { code: "EUR", symbol: "€", name: "Euro" },
        { code: "SGD", symbol: "S$", name: "Dolar Singapura" },
        { code: "MYR", symbol: "RM", name: "Ringgit Malaysia" },
      ],
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
      closeAriaLabel: "Tutup",
      whatsappAriaLabel: "Chat via WhatsApp",
      items: [
        {
          title: "Growthica",
          date: "(2024 — Masih berjalan)",
          tags: ["Landing Page", "Pertanian"],
          description:
            "Landing page modern untuk mempromosikan produk, inovasi, dan ekosistem di sektor pertanian modern.",
          client: "Growthica Tani",
        },
        {
          title: "Bridge of Hope",
          date: "(2023 — Jan 2025)",
          tags: ["Company Profile", "Donasi"],
          description:
            "Website platform donasi online yang aman dan transparan untuk menghubungkan para donatur dengan program kemanusiaan.",
          client: "Bridge of Hope Foundation",
        },
        {
          title: "WasteJourney",
          date: "(2026 — Berlangsung)",
          tags: ["Landing Page"],
          description:
            "Landing page interaktif yang edukatif fokus pada program manajemen, pelacakan, dan pengolahan sampah lingkungan.",
          client: "WasteJourney Indonesia",
        },
        {
          title: "Routify",
          date: "(2025 — Mar 2025)",
          tags: ["Custom Website", "AI Planner"],
          description:
            "Aplikasi perencana perjalanan berbasis AI kustom untuk menyusun rute, jadwal, dan estimasi waktu perjalanan secara otomatis.",
          client: "Routify Travel Tech",
        },
        {
          title: "Nusantara Tech",
          date: "(2023 — Agu 2023)",
          tags: ["Website Design", "Sistem Pemetaan"],
          description:
            "Sistem informasi pemetaan interaktif berbasis web untuk mendata persebaran dan potensi UMKM di daerah Kertapati.",
          client: "Dinas Koperasi & UMKM Kertapati",
        },
        {
          title: "CSR Cirebon",
          date: "(2025 — Feb 2025)",
          tags: ["Branding", "Corporate Website"],
          description:
            "Website platform dokumentasi dan penyaluran program Corporate Social Responsibility (CSR) khusus wilayah Cirebon.",
          client: "CSR Cirebon Hub",
        },
        {
          title: "Zyra",
          date: "(2024 — Okt 2024)",
          tags: ["Custom Website", "Fintech"],
          description:
            "Website layanan zakat online interaktif untuk mempermudah perhitungan, penyaluran, dan transparansi laporan zakat.",
          client: "Zyra Zakat Lembaga",
        },
        {
          title: "Digital Library",
          date: "(2026 — Jan 2026)",
          tags: ["Landing Page", "E-Book"],
          description:
            "Landing page representatif untuk mempromosikan platform membaca buku online, koleksi digital, dan keanggotaan pustaka.",
          client: "Digital Library Team",
        },
        {
          title: "Lycaa",
          date: "(2025 — Jul 2025)",
          tags: ["Landing Page", "E-Commerce"],
          description:
            "Landing page katalog produk eksklusif untuk pemasaran koleksi tas modis dan aksesoris keychain kreatif.",
          client: "Lycaa Store",
        },
        {
          title: "Wajan Nusantara",
          date: "(2024 — Nov 2024)",
          tags: ["Landing Page", "Kuliner"],
          description:
            "Landing page kuliner lokal yang estetik untuk mengenalkan menu variasi jajanan pasar tradisional khas nusantara.",
          client: "Wajan Nusantara Group",
        },
        {
          title: "Admin Dashboard",
          date: "(2024 — Des 2024)",
          tags: ["Custom Website", "UI/UX Design"],
          description:
            "Sistem panel admin kustom berkinerja tinggi untuk memantau metrik data, transaksi, dan kelola konten sistem internal.",
          client: "Internal Ecosystem",
        },
        {
          title: "SISTRA",
          date: "(2026 — Berlangsung)",
          tags: ["Custom Website", "Logistik"],
          description:
            "Sistem informasi transparansi pengiriman kelapa sawit terintegrasi, mencatat rute, data angkut, dan verifikasi muatan.",
          client: "PT Kelapa Sawit Mandiri",
        },
        {
          title: "B2B Agro Mart",
          date: "(2025 — Agu 2025)",
          tags: ["Custom Website", "E-Commerce"],
          description:
            "Platform web custom e-commerce berskala B2B untuk menyederhanakan transaksi grosir pasokan pangan antarpemangku kepentingan.",
          client: "Agro Mart Nusantara",
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

    pricing: {
      sectionTag: "(PRICING - 02.5)",
      title: "Digital Solutions & Web Development",
      setupFee: "Setup Fee",
      maintenance: "Free update / edit existing page for 3 months",
      startingFrom: "Starting from",
      buttonText: "Free Consultation",
      plans: [
        {
          name: "Landing Page",
          description: "For product promotion or campaigns",
          price: "$99",
          period: "project",
          features: [
            "1 website page",
            "Working time 1-2 days",
            "Free domain (.com 1 year)",
            "Free hosting (1 year)",
            "Free business email",
            "Free SSL",
            "Basic SEO",
            "Basic image editing",
          ],
          setupFee: "Free",
        },
        {
          name: "Company Profile",
          description: "For professional business profile",
          price: "$199",
          period: "project",
          features: [
            "3-5 website pages",
            "Working time 3-4 days",
            "Free domain (.com 1 year)",
            "Free hosting (1 year)",
            "Free business email",
            "Free SSL",
            "Basic SEO",
            "Basic image editing",
          ],
          setupFee: "Free",
        },
        {
          name: "Custom Website",
          description: "For special and complex features",
          price: "$399",
          period: "project",
          features: [
            "Unlimited pages",
            "Working time 6-7 days",
            "Free domain (.com 1 year)",
            "Free hosting (1 year)",
            "Free business email",
            "Free SSL",
            "Basic SEO",
            "Basic image editing",
          ],
          setupFee: "Free",
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
      miniTitle: "Wajan Nusantara",
      miniMeta: "(Custom Website - 2026)",
      projects: [
        {
          title: "Growthica",
          date: "(2026 — Still ongoing)",
          tags: ["Landing Page", "Agriculture"],
        },
        {
          title: "Lyca",
          date: "(2025 — Jan 2025)",
          tags: ["Custom Website", "Donation"],
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

    faq: {
      sectionTag: "(FAQ - 06)",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long does it take to build a website?",
          answer:
            "Timeline varies by website type: Landing Page 1-2 days, Company Profile 3-4 days, and Custom Website 6-7 days. We'll provide a more specific estimate after our initial discussion.",
        },
        {
          question: "Does the price include domain and hosting?",
          answer:
            "Yes, all our packages include free domain (.com) for 1 year and free hosting for 1 year. After the free period ends, you can renew at standard rates.",
        },
        {
          question: "Is there a maintenance fee?",
          answer:
            "We provide free updates/edits to existing pages for 3 months. After that, if you need maintenance or additional updates, we can discuss a maintenance package that fits your needs.",
        },
        {
          question: "Can I request revisions?",
          answer:
            "Absolutely! We provide revision opportunities to ensure the result matches your vision. The number of revisions depends on your chosen package and will be explained at the project start.",
        },
        {
          question: "How does the payment process work?",
          answer:
            "Payment is done with a 50% down payment at the project start, and the remaining 50% after the website is complete and you've approved it. We'll send clear invoices for each payment.",
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
      socialAriaLabel: "Visit our {name} profile",
    },

    mobileMenu: {
      locationLabel: "Location",
      locationValue: "Bandung, Jawa Barat, Indonesia",
      contactLabel: "Contact",
      copyright: "Toopay Agency",
      phone: "+62 878 7698 2219",
      email: "tooopayy@gmail.com",
      socials: ["Instagram", "Tiktok"],
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
      fieldBudget: "Budget",
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
      fieldCurrency: "Currency",
      countryName: "Indonesia",
      timezoneValue: "WIB — GMT+7",
      socialLinks: ["Instagram", "Twitter (X)", "LinkedIn", "TikTok"],
      whatsappAriaLabel: "Chat on WhatsApp",
      orWhatsapp: "Or contact via WhatsApp",
      currencies: [
        { code: "USD", symbol: "$", name: "US Dollar" },
        { code: "IDR", symbol: "Rp", name: "Indonesian Rupiah" },
        { code: "EUR", symbol: "€", name: "Euro" },
        { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
        { code: "MYR", symbol: "RM", name: "Malaysian Ringgit" },
      ],
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
      closeAriaLabel: "Close",
      whatsappAriaLabel: "Chat on WhatsApp",
      items: [
        {
          title: "Growthica",
          date: "(2024 — Still ongoing)",
          tags: ["Landing Page", "Agriculture"],
          description:
            "A modern landing page built to market and promote smart eco-farming initiatives and agricultural ecosystems.",
          client: "Growthica Agriculture",
        },
        {
          title: "Bridge of Hope",
          date: "(2023 — Jan 2025)",
          tags: ["Custom Website", "Donation"],
          description:
            "An online donation platform tailored for securing fundraising efforts and displaying transparent community campaign milestones.",
          client: "Bridge of Hope Foundation",
        },
        {
          title: "WasteJourney",
          date: "(2026 — Ongoing)",
          tags: ["Landing Page"],
          description:
            "Interactive and engaging landing page focusing on dynamic waste processing programs and environmental management.",
          client: "WasteJourney Indonesia",
        },
        {
          title: "Routify",
          date: "(2025 — Mar 2025)",
          tags: ["Custom Website", "AI Planner"],
          description:
            "A custom AI-driven trip planner application made to automatically map out travel routes, schedules, and timing estimates.",
          client: "Routify Travel Tech",
        },
        {
          title: "Nusantara Tech",
          date: "(2023 — Aug 2023)",
          tags: ["Website Design", "Mapping System"],
          description:
            "Web-based interactive information mapping system engineered to map regional MSME (UMKM) density across Kertapati.",
          client: "Kertapati MSME Council",
        },
        {
          title: "CSR Cirebon",
          date: "(2025 — Feb 2025)",
          tags: ["Branding", "Corporate Website"],
          description:
            "A dedicated hub for logging and organizing corporate social responsibility (CSR) initiatives across the Cirebon region.",
          client: "CSR Cirebon Hub",
        },
        {
          title: "Zyra",
          date: "(2024 — Oct 2024)",
          tags: ["Custom Website", "Fintech"],
          description:
            "An interactive digital zakat portal facilitating calculations, distribution logs, and transparent transaction breakdowns.",
          client: "Zyra Zakat Agency",
        },
        {
          title: "Digital Library",
          date: "(2026 — Jan 2026)",
          tags: ["Landing Page", "E-Book"],
          description:
            "Clean landing page created to pitch an online e-book reading platform, virtual library sets, and membership perks.",
          client: "Digital Library Team",
        },
        {
          title: "Lycaa",
          date: "(2025 — Jul 2025)",
          tags: ["Landing Page", "E-Commerce"],
          description:
            "Product catalog landing page optimized to market premium bag collections and custom creative keychains.",
          client: "Lycaa Store",
        },
        {
          title: "Wajan Nusantara",
          date: "(2024 — Nov 2024)",
          tags: ["Landing Page", "Culiner"],
          description:
            "An aesthetic local culinary landing page designed to capture attention and promote traditional snack menus.",
          client: "Wajan Nusantara Group",
        },
        {
          title: "Admin Dashboard",
          date: "(2024 — Dec 2024)",
          tags: ["Custom Website", "UI/UX Design"],
          description:
            "High-performance custom back-end console to monitor metrics, track operational flows, and manage internal files safely.",
          client: "Internal Ecosystem",
        },
        {
          title: "SISTRA",
          date: "(2026 — Ongoing)",
          tags: ["Custom Website", "Logistics"],
          description:
            "An integrated shipping transparency system for palm oil logistics, logging routes, delivery weight, and load validation.",
          client: "PT Kelapa Sawit Mandiri",
        },
        {
          title: "B2B Agro Mart",
          date: "(2025 — Aug 2025)",
          tags: ["Custom Website", "E-Commerce"],
          description:
            "Full-stack B2B custom e-commerce system engineered to streamline high-volume distribution pipelines among agricultural stakeholders.",
          client: "Agro Mart Nusantara",
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
