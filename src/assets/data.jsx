const users = ["/images/user-1.png", "/images/user-2.png", "images/user-3.png"];

const teamMembers = [
  {
    name: "Taufan Nurrizkie",
    img: "/images/Taufan.webp",
  },
  {
    name: "Fahkri Nugraha",
    img: "/images/Fahri.webp",
  },
];

// Structural data only — translatable text (title/description/tags) lives in
// src/i18n/translations.js under `services.items`, merged by index.
const services = [
  {
    id: "01.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "02.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "03.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
];

const servicesPlaceHolderImage =
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop";

const brands = [
  { name: "coinbase", logo: "(coinbase)" },
  { name: "slack", logo: "(slack)", active: true },
  { name: "coinbase", logo: "(coinbase)" },
  { name: "spotify", logo: "(spotify)" },
];

const miniPlaceHolderImage =
  "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2070&auto=format&fit=crop";

const ourTeamImagePlaceHolder =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

// Structural data only — translatable text (title/date/tags) lives in
// src/i18n/translations.js under `work.projects`, merged by index.
const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
  },
];

// `label` lives in translations.js under `work.milestones`, merged by index.
const milestones = [
  { value: "3+", numericValue: 3 },
  { value: "40+", numericValue: 40 },
  { value: "40+", numericValue: 40 },
  { value: "100%", numericValue: 100 },
];

// `quote`, `role`, `statLabel` live in translations.js under `testimonials.items`.
const testimonials = [
  {
    author: "Guy Hawkins",
    company: "Webflow",
    companyInitial: "W",
    avatar: "/images/user-1.png",
    stat: "+80%",
  },
  {
    author: "Sarah Jenkins",
    company: "Spotify",
    companyInitial: "S",
    avatar: "/images/user-2.png",
    stat: "+65%",
  },
  {
    author: "Marcus Wright",
    company: "Coinbase",
    companyInitial: "C",
    avatar: "/images/user-3.png",
    stat: "+92%",
  },
];

// LogoLoop data (Brand / Tech Partners)
const logoLoopTech = [
  {
    type: "icon",
    name: "React",
    href: "https://react.dev",
    icon: "react",
  },
  {
    type: "icon",
    name: "Next.js",
    href: "https://nextjs.org",
    icon: "nextjs",
  },
  {
    type: "icon",
    name: "TypeScript",
    href: "https://www.typescriptlang.org",
    icon: "typescript",
  },
  {
    type: "icon",
    name: "Tailwind CSS",
    href: "https://tailwindcss.com",
    icon: "tailwind",
  },
];

// Alternative: image-based logos
const logoLoopBrands = [
  {
    type: "image",
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    type: "image",
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    type: "image",
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

const navigateLinks = ["Home", "Projects", "Service", "About", "Contact"];
const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/toopay.web",
  },
  {
    name: "Twitter (X)",
    url: "https://x.com/tooopayy",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tooopayy",
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@toopay.web",
  },
];

const starIconPathDrawing =
  "M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z";

const iconPathDrawing =
  "M12 2L15 9H9L12 2ZM12 22L9 15H15L12 22ZM2 12L9 9V15L2 12ZM22 12L15 15V9L22 12Z";

export {
  users,
  teamMembers,
  services,
  servicesPlaceHolderImage,
  ourTeamImagePlaceHolder,
  brands,
  logoLoopTech,
  logoLoopBrands,
  miniPlaceHolderImage,
  projects,
  milestones,
  testimonials,
  navigateLinks,
  socialLinks,
  iconPathDrawing,
  starIconPathDrawing,
};
