const users = ["/images/user-1.png", "/images/user-2.png", "images/user-3.png"];

const teamMembers = [
  { name: "Julian Smith", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop" },
  { name: "Sarah Jenkins", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop" },
  { name: "Marcus Wright", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop" },
];

const services = [
  {
    id: "01.",
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
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "02.",
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
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "03.",
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
      "Peformance"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
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

const projects = [
  {
    title: "Chat Genius",
    date: "(2024 — Still on going)",
    tags: ["Website Design", "Development"],
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Field Type",
    date: "(2023 — Jan 2025)",
    tags: ["Branding", "Social Media"],
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
  },
];

const milestones = [
  { value: "15+", label: "Years of Experience", numericValue: 15 },
  { value: "50+", label: "Projects Completed", numericValue: 50 },
  { value: "20+", label: "Clients Worldwide", numericValue: 20 },
  { value: "100%", label: "Customer Satisfaction", numericValue: 100 },
];

const testimonials = [
  {
    quote: "Toopay Agency combines creativity and strategy perfectly. They brought fresh ideas and real impact to our project.",
    author: "Guy Hawkins",
    role: "Head of Product at Webflow",
    company: "Webflow",
    companyInitial: "W",
    avatar: "/images/user-1.png",
    stat: "+80%",
    statLabel: "Conversion Rate",
  },
  {
    quote: "Working with Toopay was a game changer. Their attention to detail and design sensibility elevated our brand to a whole new level.",
    author: "Sarah Jenkins",
    role: "Marketing Director at Spotify",
    company: "Spotify",
    companyInitial: "S",
    avatar: "/images/user-2.png",
    stat: "+65%",
    statLabel: "Brand Awareness",
  },
  {
    quote: "The development team at Toopay delivered our platform on time and beyond expectations. Clean code, great communication.",
    author: "Marcus Wright",
    role: "CTO at Coinbase",
    company: "Coinbase",
    companyInitial: "C",
    avatar: "/images/user-3.png",
    stat: "+92%",
    statLabel: "User Retention",
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
const socialLinks = ["Instagram", "Twitter (X)", "LinkedIn", "Dribbble"];

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

