import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiNodedotjs,
  SiFigma,
  SiDocker,
  SiGit,
} from "react-icons/si";

export const HERO_ROLES = [
  "Frontend Developer.",
  "UI/UX Designer.",
  "Software Developer.",
];

export const HW_GREETINGS = [
  "HEY THERE!",
  "HALO!",
  "BONJOUR!",
  "CIAO!",
  "HOLA!",
  "HALLO!",
  "こんにちは!",
  "안녕하세요!",
  "你好!",
  "OLÁ!",
];

export const TECH_STACK = [
  { Icon: SiReact, color: "#61DAFB", name: "React" },
  { Icon: SiNextdotjs, color: "#121213", name: "Next.js" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { Icon: SiFlutter, color: "#02569B", name: "Flutter" },
  { Icon: SiFirebase, color: "#FFA000", name: "Firebase" },
  { Icon: SiSupabase, color: "#3FCF8E", name: "Supabase" },
  { Icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
  { Icon: SiNodedotjs, color: "#5FA04E", name: "Node.js" },
  { Icon: SiFigma, color: "#F24E1E", name: "Figma" },
  { Icon: SiDocker, color: "#2496ED", name: "Docker" },
  { Icon: SiGit, color: "#F05032", name: "Git" },
];

export interface Project {
  tag: string;
  accent: string;
  title: string;
  year: string;
  desc: string;
  overview: string;
  highlights: string[];
  images: string[];
  chips: string[];
  repo: string;
  live: string;
}

export const PROJECTS: Project[] = [
  {
    tag: "Waste Circularity",
    accent: "#324B3B",
    title: "EcoManage",
    year: "2024",
    desc: "Web platform to catalog, monitor, and recycle domestic waste using collection metrics and reward incentives.",
    overview:
      "EcoManage is a waste-circularity platform that helps households and collection hubs catalog, monitor, and recycle domestic waste. It turns recycling into measurable impact with collection metrics and a reward-incentive system that keeps residents engaged.",
    highlights: [
      "Reward-based incentives that gamify recycling",
      "Real-time collection & impact metrics dashboard",
      "Role-based access for residents and collection hubs",
    ],
    images: ["/ecomanage.png"],
    chips: ["Next.js", "TypeScript", "Firebase", "Figma"],
    repo: "https://github.com/lavinianataniela05/pengelolaansampah",
    live: "https://pengelolaansampah.vercel.app/",
  },
  {
    tag: "Logistics Automation",
    accent: "#B55D36",
    title: "Brew & Bliss",
    year: "2024",
    desc: "Web app streamlining cafe operations: role gateways, live tables grid, order queues, and payment logging.",
    overview:
      "Brew & Bliss streamlines day-to-day cafe operations into a single dashboard. Staff manage a live seating grid, route order queues, and log payments, while role gateways keep admin and floor staff in their own lanes.",
    highlights: [
      "Live table & seating management grid",
      "Order queue routing with payment logging",
      "Role gateways for staff, cashier, and admin",
    ],
    images: ["/brewandbliss.png"],
    chips: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    repo: "https://github.com/lavinianataniela05/cafemanagementsystem",
    live: "https://cafemanagementsystem-nu.vercel.app",
  },
  {
    tag: "Data Science",
    accent: "#2C5282",
    title: "Flight Overlap",
    year: "2023",
    desc: "Regression model predicting flight peaks across 6M+ records using RandomForest and XGBoost.",
    overview:
      "Flight Overlap is a data-science project that predicts flight-traffic peaks from over six million historical records. It compares RandomForest and XGBoost ensembles and surfaces the results through an interactive Streamlit app.",
    highlights: [
      "Trained on 6M+ historical flight records",
      "RandomForest & XGBoost ensemble comparison",
      "Interactive Streamlit prediction interface",
    ],
    images: ["/flightpredictor.png"],
    chips: ["Python", "Streamlit", "RandomForest", "XGBoost"],
    repo: "https://github.com/lavinianataniela05/dataAnalytics",
    live: "",
  },
  {
    tag: "B2B Circular Economy",
    accent: "#324B3B",
    title: "Tenunara",
    year: "2025",
    desc: "A digital B2B marketplace connecting manufacturers with artisans to upcycle fabrics and reduce textile waste.",
    overview:
      "Tenunara is a B2B marketplace that connects textile manufacturers with artisans to upcycle leftover fabrics. It tracks the water and CO₂ savings of every trade, making textile circularity measurable and marketable.",
    highlights: [
      "B2B marketplace for textile upcycling",
      "Connects manufacturers directly with artisans",
      "Tracks water & CO₂ savings per transaction",
    ],
    images: ["/tenunara.png"],
    chips: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    repo: "https://github.com/Tenunara",
    live: "https://tenunara.vercel.app",
  },
  {
    tag: "Cooperative SaaS",
    accent: "#B55D36",
    title: "Wiradana",
    year: "2026",
    desc: "A multi-tenant SaaS to manage cooperative members, savings ledger tracking, and loan approvals.",
    overview:
      "Wiradana is a multi-tenant SaaS for cooperatives, centralizing member management, savings-ledger tracking, and loan-approval workflows so each cooperative runs its finances from one secure, isolated workspace.",
    highlights: [
      "Multi-tenant architecture per cooperative",
      "Savings ledger & loan-approval workflows",
      "Member management dashboard",
    ],
    images: ["/wiradana.png"],
    chips: ["Next.js", "TypeScript", "Prisma", "Supabase"],
    repo: "https://github.com/Wiradana-Technoscape2026",
    live: "https://wiradana.vercel.app",
  },
  {
    tag: "Community Hub",
    accent: "#2C5282",
    title: "TOMO",
    year: "2024",
    desc: "Digital hub system to improve local coordination, resource distribution, and neighborhood business communication.",
    overview:
      "TOMO is a neighborhood hub that improves local coordination. A community bulletin, a resource-distribution board, and a business communication channel bring residents and local businesses onto one platform.",
    highlights: [
      "Community bulletin & coordination feed",
      "Resource-distribution board",
      "Local business communication channel",
    ],
    images: ["/tomo.png"],
    chips: ["React", "Firebase", "Tailwind CSS"],
    repo: "https://github.com/TomoNitro",
    live: "https://tomo-frontend-rosy.vercel.app/",
  },
];

export const CAPABILITIES = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { label: "Backend", items: ["Supabase", "Firebase", "Prisma", "Node.js", "PostgreSQL"] },
  { label: "Design & System", items: ["Figma", "UX Wireframing", "Microservices", "Docker", "System Design"] },
];
