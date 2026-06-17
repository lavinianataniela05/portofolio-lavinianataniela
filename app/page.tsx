"use client";

import { useEffect, useRef, useState } from "react";
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
import WovenYarnCanvas from "./components/WovenYarnCanvas";
import SocialRail from "./components/SocialRail";
import ProjectCarousel from "./components/ProjectCarousel";
import ProjectModal from "./components/ProjectModal";

// Hero rotating roles + tech stack (reference-style intro)
const HERO_ROLES = [
  "Frontend Developer.",
  "UI/UX Designer.",
  "Software Developer.",
];

// Rotating greetings in different languages for the About card
const HW_GREETINGS = [
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

const TECH_STACK = [
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

// Projects — add as many images per project as you like in `images`
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

const PROJECTS: Project[] = [
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

const CAPABILITIES = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { label: "Backend", items: ["Supabase", "Firebase", "Prisma", "Node.js", "PostgreSQL"] },
  { label: "Design & System", items: ["Figma", "UX Wireframing", "Microservices", "Docker", "System Design"] },
];

// ==========================================
// MAIN DIGITAL ATELIER VIEW (single scrollable page)
// ==========================================
export default function Page() {
  const [activeRoom, setActiveRoom] = useState("profile");
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Typewriter effect for hero role headline
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Rotating multi-language greeting for the About card
  const [greetIdx, setGreetIdx] = useState(0);

  // Project detail modal
  const [openProject, setOpenProject] = useState<Project | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetIdx((i) => (i + 1) % HW_GREETINGS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = HERO_ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (typed.length < current.length) {
        timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 38);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % HERO_ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIdx]);

  // Intersection Observer to track active section
  useEffect(() => {
    const rooms = ["profile", "projects", "experience", "contact"];
    const observers = rooms.map((room) => {
      const el = document.getElementById(room);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveRoom(room);
          }
        },
        { threshold: 0.15, rootMargin: "-20% 0px -40% 0px" }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const scrollToRoom = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ----------------------------------------
  // HORIZONTAL SLIDER NAVIGATION
  // ----------------------------------------
  const scrollToSlide = (idx: number) => {
    const slider = sliderRef.current;
    if (slider) {
      const firstSlide = slider.querySelector(".project-slide") as HTMLElement;
      if (firstSlide) {
        const slideWidth = firstSlide.offsetWidth + 24; // slide width + gap (24px)
        slider.scrollTo({
          left: idx * slideWidth,
          behavior: "smooth"
        });
        setActiveSlideIdx(idx);
      }
    }
  };

  const handleSliderScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollLeft = slider.scrollLeft;
      const firstSlide = slider.querySelector(".project-slide") as HTMLElement;
      if (firstSlide) {
        const slideWidth = firstSlide.offsetWidth + 24; // slide width + gap (24px)
        const newIdx = Math.round(scrollLeft / slideWidth);
        if (newIdx !== activeSlideIdx && newIdx >= 0 && newIdx < PROJECTS.length) {
          setActiveSlideIdx(newIdx);
        }
      }
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-black/10">
      {/* Dynamic Canvas Backdrops */}
      <WovenYarnCanvas />

      {/* Fixed vertical social rail */}
      <SocialRail />

      {/* FLOATING HEADER NAVIGATION */}
      <header className="atelier-nav">
        <a
          href="#profile"
          onClick={(e) => {
            e.preventDefault();
            scrollToRoom("profile");
          }}
          className="nav-brand"
        >
          <img src="/logo.png" alt="L. Nataniela" className="nav-brand-logo" />
        </a>
        <div className="nav-exhibit-links">
          <button
            onClick={() => scrollToRoom("profile")}
            className={`nav-btn ${activeRoom === "profile" ? "active" : ""}`}
          >
            01 / Profile
          </button>
          <button
            onClick={() => scrollToRoom("projects")}
            className={`nav-btn ${activeRoom === "projects" ? "active" : ""}`}
          >
            02 / Projects
          </button>
          <button
            onClick={() => scrollToRoom("experience")}
            className={`nav-btn ${activeRoom === "experience" ? "active" : ""}`}
          >
            03 / Experience
          </button>
          <button
            onClick={() => scrollToRoom("contact")}
            className={`nav-btn ${activeRoom === "contact" ? "active" : ""}`}
          >
            04 / Contact
          </button>
        </div>
      </header>

      <main>
        {/* ==========================================
            SECTION 01: PROFILE
            ========================================== */}
        <section id="profile" className="exhibit-room" style={{ flexDirection: "column", alignItems: "stretch", paddingBottom: "60px" }}>
          {/* Hero Landing — reference-style intro */}
          <div className="hero-intro hero-intro--lead">
            <span className="hero-name">Lavinia Nataniela</span>

            <h1 className="hero-headline">
              <span>{typed || " "}</span>
              <span className="hero-cursor" aria-hidden="true" />
            </h1>

            <p className="hero-quote">
              &ldquo;I build scalable, sustainability-focused digital products at the
              intersection of clean code and human-centered design.&rdquo;
            </p>

            <div className="hero-stack" aria-label="Technology stack">
              {TECH_STACK.map(({ Icon, color, name }) => (
                <span key={name} className="hero-stack-item" title={name}>
                  <Icon color={color} size={34} aria-label={name} />
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="exhibit-btn"
              >
                Download CV / Resume
              </a>
              <button
                onClick={() => scrollToRoom("projects")}
                className="exhibit-btn-outline"
              >
                Explore Work
              </button>
            </div>
          </div>

          {/* Hello World — About card (glass / soft modern) */}
          <div className="hw-band">
            <span className="hw-blob hw-blob-1" aria-hidden="true" />
            <span className="hw-blob hw-blob-2" aria-hidden="true" />
            <div className="hw-inner">
              <div className="hw-grid">
                <div className="hw-photo-wrap">
                  <div className="hw-photo-frame">
                    <img
                      src="/foto_profesional.jpeg"
                      alt="Lavinia Nataniela"
                      className="hw-photo"
                    />
                    {/* <span className="hw-badge hw-badge-top">📍 Indonesia</span>
                    <span className="hw-badge hw-badge-bottom">💻 3+ yrs coding</span> */}
                  </div>
                </div>
                <div>
                  <span className="hw-kicker">✨ ABOUT ME</span>
                  <h2 className="hw-title">
                    <span key={greetIdx} className="hw-greet">
                      {HW_GREETINGS[greetIdx]}
                    </span>{" "}
                    <span className="hw-wave">👋</span>
                  </h2>
                  <p className="hw-text">
                    I&apos;m Lavinia, an Undergraduate Computer Science student at Binus
                    University, currently based in Indonesia. I&apos;m deeply passionate about
                    turning ideas into reality through <span className="hw-code">code</span>,
                    and over the years I&apos;ve built a diverse portfolio of projects spanning{" "}
                    <strong>Front-end Development, UI/UX Design, and Back-end Development</strong>.
                    Both as part of a team and independently.
                  </p>
                  <p className="hw-text">
                    Beyond just writing code, I enjoy exploring{" "}
                    <strong>clean design, intuitive user experiences, and scalable
                    architectures</strong>. My journey has been fueled by curiosity,
                    problem-solving, and a drive to create technology that&apos;s not only
                    functional, but also meaningful.
                  </p>
                  {/* <a href="mailto:lavinianataniela05@gmail.com" className="hw-btn">
                    <svg viewBox="0 0 16 16" width="20" height="20" aria-hidden="true" fill="currentColor">
                      <path d="M3 1.5v13l11-6.5z" />
                    </svg>
                    Send me a message
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Matrix */}
          <div className="hero-intro">
            <div className="mb-10">
              <span className="exhibit-label">TECHNICAL STACK</span>
              <h2 className="exhibit-title">Capabilities</h2>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
                The tools and technologies I reach for across the stack — from interface design to backend infrastructure.
                
              </p>
              <br />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {CAPABILITIES.map((cap, idx) => (
                <div key={cap.label} className="atelier-frame atelier-frame-hover p-7 flex flex-col">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-black/10">
                    <h4 className="font-bold font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">{cap.label}</h4>
                    <span className="font-mono text-[10px] font-bold text-amber-800">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 content-start flex-1">
                    {cap.items.map((item) => (
                      <span key={item} className="exhibit-chip">{item}</span>
                    ))}
                  </div>
                  <span className="mt-5 pt-3 border-t border-black/5 font-mono text-[10px] text-neutral-400">
                    {cap.items.length} {cap.items.length === 1 ? "tool" : "tools"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 02: PROJECTS (HORIZONTAL SLIDER)
            ========================================== */}
        <section id="projects" className="exhibit-room" style={{ flexDirection: "column", alignItems: "stretch", paddingBottom: "80px" }}>
          {/* PROJECTS INDEX HEADER */}
          <div className="hero-intro">
            <span className="exhibit-label">PROJECT PORTFOLIO // 02</span>
            <h2 className="exhibit-title">PORTOFOLIO</h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
              A curated gallery of products spanning waste circularity, restaurant logistics,
              data science, and cooperative platforms — scroll through to explore each build.
            </p>
          </div>

          {/* Horizontal Slider Wrapper */}
          <div className="hero-intro">
            <div
              ref={sliderRef}
              onScroll={handleSliderScroll}
              className="project-slider"
            >
              {PROJECTS.map((p, i) => (
                <div
                  className={`project-slide${activeSlideIdx === i ? " is-active" : ""}`}
                  key={p.title}
                >
                  <article className="proj-card" style={{ "--accent": p.accent } as React.CSSProperties}>
                    <span className="proj-watermark" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <div
                      className="proj-media"
                      onClick={() => setOpenProject(p)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${p.title} details`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpenProject(p);
                        }
                      }}
                    >
                      <span className="proj-index">{String(i + 1).padStart(2, "0")}</span>
                      <ProjectCarousel images={p.images} alt={p.title} />
                      <span className="proj-media-hint">⤢ View details</span>
                    </div>
                    <div className="proj-body">
                      <span className="proj-tag" style={{ color: p.accent }}>
                        <span className="proj-tag-dot" style={{ background: p.accent }} />
                        {p.tag}
                      </span>
                      <button type="button" className="proj-title" onClick={() => setOpenProject(p)}>
                        {p.title}
                      </button>
                      <p className="proj-desc">{p.desc}</p>
                      <div className="proj-chips">
                        {p.chips.map((c) => (
                          <span key={c} className="proj-chip">{c}</span>
                        ))}
                      </div>
                      <div className="proj-links">
                        <button type="button" className="proj-btn" onClick={() => setOpenProject(p)}>
                          View Details <span className="proj-btn-arrow">→</span>
                        </button>
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noreferrer" className="proj-btn proj-btn-outline">
                            Live Site
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Slider Controls Bar */}
            <div className="slider-indicator-bar">
              <div className="slider-meta">
                <span className="slider-meta-count">
                  {String(activeSlideIdx + 1).padStart(2, "0")}
                  <span>/ {String(PROJECTS.length).padStart(2, "0")}</span>
                </span>
                <span className="slider-meta-title" style={{ color: PROJECTS[activeSlideIdx]?.accent }}>
                  {PROJECTS[activeSlideIdx]?.title}
                </span>
              </div>

              <div className="slider-progress">
                {PROJECTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSlide(idx)}
                    className={`indicator-dot ${activeSlideIdx === idx ? "active" : ""}`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="slider-arrows">
                <button
                  disabled={activeSlideIdx === 0}
                  onClick={() => scrollToSlide(activeSlideIdx - 1)}
                  className="slider-arrow-btn disabled:opacity-30"
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  disabled={activeSlideIdx === PROJECTS.length - 1}
                  onClick={() => scrollToSlide(activeSlideIdx + 1)}
                  className="slider-arrow-btn disabled:opacity-30"
                  aria-label="Next project"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 03: EXPERIENCE
            ========================================== */}
            
        <section id="experience" className="exhibit-room" style={{ flexDirection: "column", alignItems: "stretch" }}>
          {/* Section Header */}
                    <div className="hero-intro">

          <div className="hero-intro">
            <span className="exhibit-label">THE REGISTRY // 03</span>
            <h2 className="exhibit-title">Registry of Experience</h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
              Teaching roles, mentorship records, and mathematics olympiad achievements.
            </p>
          </div>
          </div>
          

          {/* Experience Cards */}
                    <div className="hero-intro">
          <div className="w-full max-w-[1180px] mx-auto mb-14">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-400 mb-5">// Mentorship Roles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Card 01: Lab Assistant */}
              <div className="atelier-frame p-7 relative overflow-hidden group cursor-default">
                <span className="absolute -bottom-3 -right-1 text-[110px] font-bold font-mono text-black/[0.035] leading-none select-none pointer-events-none group-hover:text-black/[0.06] transition-all duration-500">01</span>
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      2024 — 2025
                    </span>
                    <span className="sim-badge">Ongoing</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>Laboratory Assistant Lecturer</h4>
                    <span className="text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wider block mt-1.5">Binus University</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed pl-3 border-l-2 border-amber-200">
                    Tutored Java OOP and Algorithms to 100+ Computer Science undergraduates, conducting lab evaluations and mentoring academic performance.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="exhibit-chip text-[9px] py-0.5 px-2.5">Java OOP</span>
                    <span className="exhibit-chip text-[9px] py-0.5 px-2.5">Algorithms</span>
                    <span className="exhibit-chip text-[9px] py-0.5 px-2.5">100+ Students</span>
                  </div>
                </div>
              </div>

              {/* Card 02: Summer Instructor */}
              <div className="atelier-frame p-7 relative overflow-hidden group cursor-default">
                <span className="absolute -bottom-3 -right-1 text-[110px] font-bold font-mono text-black/[0.035] leading-none select-none pointer-events-none group-hover:text-black/[0.06] transition-all duration-500">02</span>
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      2024
                    </span>
                    <span className="sim-badge">Completed</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>Summer Computer Class Instructor</h4>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider block mt-1.5">HIMTI Binus</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed pl-3 border-l-2 border-emerald-200">
                    Led intensive coding camp workshops on foundational frontend design and web development structures for new CS students.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="exhibit-chip text-[9px] py-0.5 px-2.5">HTML / CSS</span>
                    <span className="exhibit-chip text-[9px] py-0.5 px-2.5">Frontend Design</span>
                    <span className="exhibit-chip text-[9px] py-0.5 px-2.5">Coding Camp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Honors Cabinet */}
          <div className="w-full max-w-[1180px] mx-auto">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-400 mb-5">// Honors Cabinet</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

              <div className="stamp-tag p-5">
                <div className="stamp-symbol">🎓</div>
                <span className="stamp-year">2023</span>
                <h4 className="stamp-title text-xs">Widia Scholarship</h4>
                <p style={{ fontSize: "9px", color: "var(--muted)", marginTop: "4px", lineHeight: 1.4 }}>Partial merit scholarship award</p>
              </div>

              <div className="stamp-tag p-5" style={{ borderColor: "#B55D36" }}>
                <div className="stamp-symbol" style={{ borderColor: "#B55D36" }}>🥇</div>
                <span className="stamp-year" style={{ color: "#B55D36" }}>2022</span>
                <h4 className="stamp-title text-xs">Gold Medal</h4>
                <p style={{ fontSize: "9px", color: "var(--muted)", marginTop: "4px", lineHeight: 1.4 }}>PhIMO — Philippine Math Olympiad</p>
              </div>

              <div className="stamp-tag p-5" style={{ borderColor: "#324B3B" }}>
                <div className="stamp-symbol" style={{ borderColor: "#324B3B" }}>🏆</div>
                <span className="stamp-year" style={{ color: "#324B3B" }}>2022</span>
                <h4 className="stamp-title text-xs">1st Prize</h4>
                <p style={{ fontSize: "9px", color: "var(--muted)", marginTop: "4px", lineHeight: 1.4 }}>Greater Bay Area Math Olympiad</p>
              </div>

              <div className="stamp-tag p-5">
                <div className="stamp-symbol">🏅</div>
                <span className="stamp-year">2023</span>
                <h4 className="stamp-title text-xs">2nd Prize</h4>
                <p style={{ fontSize: "9px", color: "var(--muted)", marginTop: "4px", lineHeight: 1.4 }}>Greater Bay Area Math Olympiad</p>
              </div>

              <div className="stamp-tag p-5" style={{ borderColor: "#8A6240" }}>
                <div className="stamp-symbol" style={{ borderColor: "#8A6240" }}>🥉</div>
                <span className="stamp-year" style={{ color: "#8A6240" }}>2021</span>
                <h4 className="stamp-title text-xs">Bronze Medal</h4>
                <p style={{ fontSize: "9px", color: "var(--muted)", marginTop: "4px", lineHeight: 1.4 }}>PhIMO — Heat Round</p>
              </div>

            </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 04: CONTACT
            ========================================== */}
            
        <section id="contact" className="exhibit-room" style={{ flexDirection: "column", alignItems: "stretch", borderBottom: "none" }}>
          <div className="hero-intro">
            <div className="atelier-frame atelier-frame-hover contact-frame p-10 md:p-16 text-center">
              <span className="contact-status">
                <i className="status-dot" aria-hidden="true" />
                Available for new projects
              </span>
              <span className="exhibit-label">CONNECT // 04</span>
              <h2 className="exhibit-title mb-4">Let&apos;s keep in touch.</h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-md mx-auto mb-9">
                Interested in full-stack dev, circular designs, or cooperative SaaS platforms? Drop me a line — I&apos;d love to hear about it.
              </p>
              <a href="mailto:lavinianataniela05@gmail.com" className="contact-email-btn">
                <svg className="contact-email-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                lavinianataniela05@gmail.com
              </a>
              <p className="contact-rail-hint">Or find me on socials in the rail&nbsp;→</p>
            </div>

            {/* Footer line */}
            <div className="mt-10 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-neutral-400 tracking-wide">
                © {new Date().getFullYear()} Lavinia Nataniela
              </span>
              <span className="text-[11px] font-mono text-neutral-400 tracking-wide">
                Designed &amp; built with Next.js · Based in Indonesia
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Project detail modal */}
      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </div>
  );
}
