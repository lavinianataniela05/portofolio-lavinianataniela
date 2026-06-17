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

// Hero rotating roles + tech stack (reference-style intro)
const HERO_ROLES = [
  "Frontend Developer.",
  "UI/UX Designer.",
  "Software Developer.",
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
        if (newIdx !== activeSlideIdx && newIdx >= 0 && newIdx < 6) {
          setActiveSlideIdx(newIdx);
        }
      }
    }
  };

  // ----------------------------------------
  // ECOMANAGE WIDGET STATES
  // ----------------------------------------
  const [ecoWeight, setEcoWeight] = useState(1240);
  const [ecoPoints, setEcoPoints] = useState(2500);
  const [ecoLogs, setEcoLogs] = useState<string[]>([
    "Recycling platform synchronized with active hub ledger."
  ]);
  const handleEcoSort = (type: string) => {
    let weightAdd = 0;
    let pointsAdd = 0;
    let textLog = "";

    if (type === "plastic") {
      weightAdd = 12;
      pointsAdd = 50;
      textLog = "Sorted 12kg polymer plastics. Diverted ~18.6kg CO2e.";
    } else if (type === "paper") {
      weightAdd = 6;
      pointsAdd = 20;
      textLog = "Sorted 6kg paper waste cataloged into recycling channels.";
    } else if (type === "metal") {
      weightAdd = 20;
      pointsAdd = 80;
      textLog = "Sorted 20kg organic metals. Transmitted to smelter network.";
    }

    setEcoWeight((w) => w + weightAdd);
    setEcoPoints((p) => p + pointsAdd);
    setEcoLogs((prev) => [textLog, ...prev.slice(0, 2)]);
  };

  // ----------------------------------------
  // BREW & BLISS WIDGET STATES
  // ----------------------------------------
  const [reservedTables, setReservedTables] = useState<string[]>([]);
  const toggleTable = (id: string) => {
    setReservedTables((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  // ----------------------------------------
  // FLIGHT WIDGET STATES
  // ----------------------------------------
  const [weatherFactor, setWeatherFactor] = useState(3);
  const [timeRush, setTimeRush] = useState(4);
  const [predictedOverlaps, setPredictedOverlaps] = useState(182);

  useEffect(() => {
    const baseVal = 120;
    const factorCalc = baseVal + weatherFactor * 15 + timeRush * 25;
    setPredictedOverlaps(factorCalc);
  }, [weatherFactor, timeRush]);

  // ----------------------------------------
  // TENUNARA WIDGET STATES
  // ----------------------------------------
  const [tenunaraMaterial, setTenunaraMaterial] = useState("cotton");
  const [tenunaraWeight, setTenunaraWeight] = useState(150);
  const [tenunaraLogs, setTenunaraLogs] = useState<string[]>([
    "Initial B2B contract listing synchronized."
  ]);
  const handleTenunaraUpcycle = (material: string, weight: number) => {
    setTenunaraMaterial(material);
    setTenunaraWeight(weight);

    let waterFactor = material === "cotton" ? 100 : material === "denim" ? 150 : 50;
    let co2Factor = material === "cotton" ? 2.1 : material === "denim" ? 3.5 : 1.8;
    let materialName = material.charAt(0).toUpperCase() + material.slice(1);

    const newLog = `Listed ${weight}kg of ${materialName} offcuts. Saved ~${(weight * waterFactor).toLocaleString()}L of water, offset ~${(weight * co2Factor).toFixed(1)}kg CO2e.`;
    setTenunaraLogs((prev) => [newLog, ...prev.slice(0, 2)]);
  };

  // ----------------------------------------
  // WIRADANA WIDGET STATES
  // ----------------------------------------
  const [wiradanaLoan, setWiradanaLoan] = useState(5000000);
  const [wiradanaTenure, setWiradanaTenure] = useState(12);

  // ----------------------------------------
  // TOMO WIDGET STATES
  // ----------------------------------------
  const [tomoFeed, setTomoFeed] = useState([
    { id: 1, type: "bazaar", title: "Local Craft Bazaar", content: "Artisans showcase upcycled textile products.", time: "2 hrs ago" },
    { id: 2, type: "alert", title: "Neighborhood Clean-up", content: "Community clean-up meeting at public park.", time: "5 hrs ago" }
  ]);
  const addTomoPost = (type: string) => {
    let title = "";
    let content = "";
    if (type === "help") {
      title = "Cooperative Seed Fund Volunteer";
      content = "Looking for financial mentors to help local cooperative startups.";
    } else if (type === "resource") {
      title = "Shared Tools & Sewing Machines";
      content = "3 industrial sewing machines available for public use at Central Hub.";
    } else {
      title = "Upcycling Skill Share Workshop";
      content = "Free session next Saturday on pattern making using waste textiles.";
    }
    const newPost = {
      id: Date.now(),
      type,
      title,
      content,
      time: "Just now"
    };
    setTomoFeed((prev) => [newPost, ...prev.slice(0, 3)]);
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
          <div className="hero-intro">
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

          {/* Hello World — About card (playful brown) */}
          <div className="hw-band">
            <span className="hw-blob hw-blob-1" aria-hidden="true" />
            <span className="hw-blob hw-blob-2" aria-hidden="true" />
            <div className="hw-inner">
              <div className="hw-grid">
                <div className="hw-photo-wrap">
                  <span className="hw-vertical">DEVELOPER</span>
                  <div className="hw-photo-frame">
                    <img
                      src="/foto_profesional.jpeg"
                      alt="Lavinia Nataniela"
                      className="hw-photo"
                    />
                    <span className="hw-photo-caption">✦ hi, it&apos;s me!</span>
                  </div>
                </div>
                <div>
                  <span className="hw-kicker">✨ ABOUT ME</span>
                  <h2 className="hw-title">
                    Hello World! <span className="hw-wave">👋</span>
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
                  <a href="mailto:lavinianataniela05@gmail.com" className="hw-btn">
                    <svg viewBox="0 0 16 16" width="20" height="20" aria-hidden="true" fill="currentColor">
                      <path d="M3 1.5v13l11-6.5z" />
                    </svg>
                    Send me a message
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Matrix */}
          <div className="pt-14 border-t border-black/10 w-full max-w-[1180px] mx-auto">
            <div className="mb-10">
              <span className="exhibit-label">TECHNICAL STACK</span>
              <h2 className="exhibit-title">Capabilities</h2>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
                The tools and technologies I reach for across the stack — from interface design to backend infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {CAPABILITIES.map((cap) => (
                <div key={cap.label} className="atelier-frame atelier-frame-hover p-7 flex flex-col">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-black/10">
                    <h4 className="font-bold font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">{cap.label}</h4>
                    <span className="font-mono text-[10px] font-bold text-amber-800">{String(cap.items.length).padStart(2, "0")}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cap.items.map((item) => (
                      <span key={item} className="exhibit-chip">{item}</span>
                    ))}
                  </div>
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
          <div className="w-full max-w-[1180px] mx-auto mb-10">
            <span className="exhibit-label">PROJECT PORTFOLIO // 02</span>
            <h2 className="exhibit-title">Exhibition Catalogue</h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
              Explore interactive product simulators built to demo waste circularity, restaurant logistics,
              and aviation models inside a horizontal scrollable gallery.
            </p>
          </div>

          {/* Horizontal Slider Wrapper */}
          <div className="exhibit-slider-wrapper my-8 w-full max-w-[1180px] mx-auto">
            <div
              ref={sliderRef}
              onScroll={handleSliderScroll}
              className="project-slider"
            >
              {/* Slide 01: EcoManage */}
              <div className="project-slide">
                <div className="atelier-frame p-6 flex flex-col justify-between h-[640px] w-full max-w-[420px] mx-auto bg-neutral-900/[0.01]">
                  <div className="space-y-3">
                    <span className="exhibit-label text-[10px] tracking-widest text-emerald-800 m-0">EXHIBITION A // WASTE CIRCULARITY</span>
                    <h3 className="text-xl font-bold font-serif m-0" style={{ fontFamily: "var(--font-display)" }}>EcoManage</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed m-0">
                      Web platform designed to catalog, monitor, and recycle domestic waste using collection metrics and reward incentives.
                    </p>
                  </div>

                  {/* Sorter Widget - Compact styled */}
                  <div className="sim-widget p-4 mt-3 rounded-xl bg-neutral-50/50 border border-black/5" style={{ fontSize: "11px", boxShadow: "none" }}>
                    <div className="sim-title-block mb-3 pb-2 border-b border-black/5 flex justify-between items-center">
                      <span className="sim-title text-[9px]">Domestic Waste Catalyst</span>
                      <span className="sim-badge text-[8px] px-1.5 py-0.5">ACTIVE</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-white p-2.5 rounded-lg border border-black/5">
                        <span className="block text-[8px] font-mono text-neutral-500 font-bold uppercase">DIVERTED WASTE</span>
                        <span className="block text-sm font-extrabold text-neutral-800 mt-0.5">{ecoWeight} kg</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-black/5">
                        <span className="block text-[8px] font-mono text-neutral-500 font-bold uppercase">INCENTIVES</span>
                        <span className="block text-sm font-extrabold text-amber-800 mt-0.5">{ecoPoints} pts</span>
                      </div>
                    </div>

                    <p className="text-[8px] font-bold text-neutral-500 uppercase mb-2">Click to catalog waste:</p>
                    <div className="flex flex-col gap-1.5 mb-3">
                      <button onClick={() => handleEcoSort("plastic")} className="sim-select-item py-1.5 px-3 text-[10px] flex justify-between items-center rounded-lg border border-black/5 bg-white hover:bg-neutral-900 hover:text-white transition">
                        <span>🥤 Polymer Plastic Bottle</span>
                        <span className="font-mono text-[8px] opacity-80">+12kg // +50pts</span>
                      </button>
                      <button onClick={() => handleEcoSort("paper")} className="sim-select-item py-1.5 px-3 text-[10px] flex justify-between items-center rounded-lg border border-black/5 bg-white hover:bg-neutral-900 hover:text-white transition">
                        <span>📰 Newspaper Bundles</span>
                        <span className="font-mono text-[8px] opacity-80">+6kg // +20pts</span>
                      </button>
                      <button onClick={() => handleEcoSort("metal")} className="sim-select-item py-1.5 px-3 text-[10px] flex justify-between items-center rounded-lg border border-black/5 bg-white hover:bg-neutral-900 hover:text-white transition">
                        <span>🥫 Scrap Metal Containers</span>
                        <span className="font-mono text-[8px] opacity-80">+20kg // +80pts</span>
                      </button>
                    </div>

                    <div className="bg-neutral-900 text-white p-2 rounded-lg font-mono text-[8px]">
                      <span className="opacity-55">// LOCAL_TRANSMISSION:</span>
                      {ecoLogs.slice(0, 1).map((log, lIdx) => (
                        <p key={lIdx} className="mt-0.5 truncate">&gt; {log}</p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Next.js</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">TypeScript</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Firebase</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Figma</span>
                    </div>
                    <div className="flex gap-2">
                      <a href="https://github.com/lavinianataniela05/pengelolaansampah" target="_blank" rel="noreferrer" className="exhibit-btn py-1.5 px-4 text-[9px]">Repository</a>
                      <a href="https://pengelolaansampah.vercel.app/" target="_blank" rel="noreferrer" className="exhibit-btn-outline py-1.5 px-4 text-[9px]">Live Site</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 02: Brew & Bliss */}
              <div className="project-slide">
                <div className="atelier-frame p-6 flex flex-col justify-between h-[640px] w-full max-w-[420px] mx-auto bg-neutral-900/[0.01]">
                  <div className="space-y-3">
                    <span className="exhibit-label text-[10px] tracking-widest text-amber-800 m-0">EXHIBITION B // LOGISTICS AUTO</span>
                    <h3 className="text-xl font-bold font-serif m-0" style={{ fontFamily: "var(--font-display)" }}>Brew & Bliss</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed m-0">
                      Web application streamlining cafe operations: role gateways, live tables grid, order queues, and payment logging.
                    </p>
                  </div>

                  {/* Seating Map Widget - Compact styled */}
                  <div className="sim-widget p-4 mt-3 rounded-xl bg-neutral-50/50 border border-black/5" style={{ fontSize: "11px", boxShadow: "none" }}>
                    <div className="sim-title-block mb-2 pb-2 border-b border-black/5 flex justify-between items-center">
                      <span className="sim-title text-[9px]">Live Seating & POS</span>
                      <span className="sim-badge text-[8px] px-1.5 py-0.5">STABLE</span>
                    </div>

                    <p className="text-[8px] font-bold text-neutral-500 uppercase mb-2">Select tables:</p>
                    <div className="seating-map grid grid-cols-4 gap-2 mb-3 mt-0">
                      {["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"].map((id, idx) => {
                        const isOccupied = idx === 0 || idx === 4;
                        const isSelected = reservedTables.includes(id);

                        return (
                          <button
                            key={id}
                            disabled={isOccupied}
                            onClick={() => toggleTable(id)}
                            className={`seat-box text-[10px] py-1.5 px-0 rounded-md border border-black/10 transition-all ${
                              isOccupied ? "bg-neutral-200 text-neutral-400 line-through cursor-not-allowed border-neutral-100" :
                              isSelected ? "bg-neutral-900 text-white border-black" : "bg-emerald-50 text-emerald-800 border-emerald-100 hover:bg-neutral-900 hover:text-white"
                            }`}
                          >
                            {id}
                          </button>
                        );
                      })}
                    </div>

                    <div className="bg-white p-2.5 rounded-lg border border-black/5 font-mono text-[8px] min-h-[56px] flex flex-col justify-center">
                      {reservedTables.length === 0 ? (
                        <p className="text-center text-neutral-400 m-0">No active reservations.</p>
                      ) : (
                        <div className="truncate">
                          <p className="font-bold text-neutral-700 m-0">RESERVED: {reservedTables.join(", ")}</p>
                          <p className="text-neutral-500 m-0 mt-0.5">&gt; Table queue active.</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Next.js</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">TypeScript</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">PostgreSQL</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Supabase</span>
                    </div>
                    <div className="flex gap-2">
                      <a href="https://github.com/lavinianataniela05/cafemanagementsystem" target="_blank" rel="noreferrer" className="exhibit-btn py-1.5 px-4 text-[9px]">Repository</a>
                      <a href="https://cafemanagementsystem-nu.vercel.app" target="_blank" rel="noreferrer" className="exhibit-btn-outline py-1.5 px-4 text-[9px]">Live Site</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 03: Flight Overlap */}
              <div className="project-slide">
                <div className="atelier-frame p-6 flex flex-col justify-between h-[640px] w-full max-w-[420px] mx-auto bg-neutral-900/[0.01]">
                  <div className="space-y-3">
                    <span className="exhibit-label text-[10px] tracking-widest text-blue-800 m-0">EXHIBITION C // DATA SCIENCE</span>
                    <h3 className="text-xl font-bold font-serif m-0" style={{ fontFamily: "var(--font-display)" }}>Flight Overlap</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed m-0">
                      Regression model predicting flight peaks across 6+ million records using RandomForest and XGBoost models.
                    </p>
                  </div>

                  {/* Flight Radar Widget - Compact styled */}
                  <div className="sim-widget p-4 mt-3 rounded-xl bg-neutral-50/50 border border-black/5" style={{ fontSize: "11px", boxShadow: "none" }}>
                    <div className="sim-title-block mb-2 pb-2 border-b border-black/5 flex justify-between items-center">
                      <span className="sim-title text-[9px]">Traffic Predictor</span>
                      <span className="sim-badge text-[8px] px-1.5 py-0.5">94.2% ACC</span>
                    </div>

                    <div className="radar-grid h-[80px] bg-neutral-900 border border-black/10 rounded-lg relative overflow-hidden mb-3">
                      <div className="radar-sweep absolute top-0 bottom-0 w-[2px] bg-amber-500 opacity-30" style={{ animation: "sweep 4s linear infinite" }} />
                      <div className="radar-dot absolute w-[4px] h-[4px] rounded-full bg-red-400" style={{ top: "20px", left: "40px" }} />
                      <div className="radar-dot absolute w-[4px] h-[4px] rounded-full bg-red-400" style={{ top: "50px", left: "120px" }} />
                    </div>

                    <div className="space-y-2 mb-3">
                      <div>
                        <div className="flex justify-between text-[8px] font-bold text-neutral-500 mb-0.5">
                          <span>WEATHER CONSTRAINT (0-5)</span>
                          <span>{weatherFactor}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="5"
                          value={weatherFactor}
                          onChange={(e) => setWeatherFactor(parseInt(e.target.value))}
                          style={{ width: "100%", accentColor: "var(--border-dark)" }}
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-[8px] font-bold text-neutral-500 mb-0.5">
                          <span>PEAK TIME SCHEDULE (0-5)</span>
                          <span>{timeRush}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="5"
                          value={timeRush}
                          onChange={(e) => setTimeRush(parseInt(e.target.value))}
                          style={{ width: "100%", accentColor: "var(--border-dark)" }}
                        />
                      </div>
                    </div>

                    <div className="bg-white p-2 rounded-lg border border-black/5 text-center">
                      <span className="block text-[8px] font-mono text-neutral-500 font-bold uppercase">PREDICTED FLIGHT OVERLAPS</span>
                      <span className="block text-sm font-extrabold text-neutral-800 mt-0.5">{predictedOverlaps} flights</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Python</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Streamlit</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">RandomForest</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">XGBoost</span>
                    </div>
                    <div className="flex gap-2">
                      <a href="https://github.com/lavinianataniela05/dataAnalytics" target="_blank" rel="noreferrer" className="exhibit-btn py-1.5 px-4 text-[9px]">Repository</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 04: Tenunara */}
              <div className="project-slide">
                <div className="atelier-frame p-6 flex flex-col justify-between h-[640px] w-full max-w-[420px] mx-auto bg-neutral-900/[0.01]">
                  <div className="space-y-3">
                    <span className="exhibit-label text-[10px] tracking-widest text-emerald-800 m-0">EXHIBITION D // B2B CIRCULAR ECONOMY</span>
                    <h3 className="text-xl font-bold font-serif m-0" style={{ fontFamily: "var(--font-display)" }}>Tenunara</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed m-0">
                      A digital B2B marketplace connecting manufacturers with artisans to upcycle fabrics and reduce textile waste.
                    </p>
                  </div>

                  {/* Tenunara Widget - Compact styled */}
                  <div className="sim-widget p-4 mt-3 rounded-xl bg-neutral-50/50 border border-black/5" style={{ fontSize: "11px", boxShadow: "none" }}>
                    <div className="sim-title-block mb-3 pb-2 border-b border-black/5 flex justify-between items-center">
                      <span className="sim-title text-[9px]">Textile Circularity Trade</span>
                      <span className="sim-badge text-[8px] px-1.5 py-0.5">ACTIVE</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-white p-2.5 rounded-lg border border-black/5">
                        <span className="block text-[8px] font-mono text-neutral-500 font-bold uppercase">WATER CONSERVED</span>
                        <span className="block text-xs font-extrabold text-neutral-800 mt-0.5">
                          {(tenunaraWeight * (tenunaraMaterial === "cotton" ? 100 : tenunaraMaterial === "denim" ? 150 : 50)).toLocaleString()} L
                        </span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-black/5">
                        <span className="block text-[8px] font-mono text-neutral-500 font-bold uppercase">CO2 OFFSET</span>
                        <span className="block text-xs font-extrabold text-amber-800 mt-0.5">
                          {(tenunaraWeight * (tenunaraMaterial === "cotton" ? 2.1 : tenunaraMaterial === "denim" ? 3.5 : 1.8)).toFixed(1)} kg
                        </span>
                      </div>
                    </div>

                    <p className="text-[8px] font-bold text-neutral-500 uppercase mb-2">Trade textile volume:</p>
                    <div className="flex flex-col gap-1.5 mb-3">
                      <button
                        onClick={() => handleTenunaraUpcycle("cotton", 150)}
                        className={`sim-select-item py-1.5 px-3 text-[10px] flex justify-between items-center rounded-lg border border-black/5 transition ${
                          tenunaraMaterial === "cotton" ? "bg-neutral-900 text-white border-black" : "bg-white hover:bg-neutral-900 hover:text-white"
                        }`}
                      >
                        <span>🌱 Cotton Offcuts (150kg)</span>
                        <span className="font-mono text-[8px] opacity-80">15k L Saved</span>
                      </button>
                      <button
                        onClick={() => handleTenunaraUpcycle("denim", 200)}
                        className={`sim-select-item py-1.5 px-3 text-[10px] flex justify-between items-center rounded-lg border border-black/5 transition ${
                          tenunaraMaterial === "denim" ? "bg-neutral-900 text-white border-black" : "bg-white hover:bg-neutral-900 hover:text-white"
                        }`}
                      >
                        <span>👖 Denim Scraps (200kg)</span>
                        <span className="font-mono text-[8px] opacity-80">30k L Saved</span>
                      </button>
                      <button
                        onClick={() => handleTenunaraUpcycle("polyester", 300)}
                        className={`sim-select-item py-1.5 px-3 text-[10px] flex justify-between items-center rounded-lg border border-black/5 transition ${
                          tenunaraMaterial === "polyester" ? "bg-neutral-900 text-white border-black" : "bg-white hover:bg-neutral-900 hover:text-white"
                        }`}
                      >
                        <span>🧪 Polyester Rolls (300kg)</span>
                        <span className="font-mono text-[8px] opacity-80">15k L Saved</span>
                      </button>
                    </div>

                    <div className="bg-neutral-900 text-white p-2 rounded-lg font-mono text-[8px]">
                      <span className="opacity-55">// CIRCULARITY_LEDGER:</span>
                      {tenunaraLogs.slice(0, 1).map((log, lIdx) => (
                        <p key={lIdx} className="mt-0.5 truncate">&gt; {log}</p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Next.js</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">TypeScript</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Supabase</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Tailwind CSS</span>
                    </div>
                    <div className="flex gap-2">
                      <a href="https://github.com/lavinianataniela05" target="_blank" rel="noreferrer" className="exhibit-btn py-1.5 px-4 text-[9px]">Repository</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 05: Wiradana */}
              <div className="project-slide">
                <div className="atelier-frame p-6 flex flex-col justify-between h-[640px] w-full max-w-[420px] mx-auto bg-neutral-900/[0.01]">
                  <div className="space-y-3">
                    <span className="exhibit-label text-[10px] tracking-widest text-amber-800 m-0">EXHIBITION E // COOPERATIVE SAAS</span>
                    <h3 className="text-xl font-bold font-serif m-0" style={{ fontFamily: "var(--font-display)" }}>Wiradana</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed m-0">
                      A multi-tenant SaaS application designed to manage cooperative members, savings ledger tracking, and loan approvals.
                    </p>
                  </div>

                  {/* Wiradana Sorter Widget - Compact styled */}
                  <div className="sim-widget p-4 mt-3 rounded-xl bg-neutral-50/50 border border-black/5" style={{ fontSize: "11px", boxShadow: "none" }}>
                    <div className="sim-title-block mb-3 pb-2 border-b border-black/5 flex justify-between items-center">
                      <span className="sim-title text-[9px]">Cooperative Loan Estimator</span>
                      <span className="sim-badge text-[8px] px-1.5 py-0.5">STABLE</span>
                    </div>

                    <div className="space-y-3 mb-3">
                      <div>
                        <div className="flex justify-between text-[8px] font-bold text-neutral-500 mb-0.5">
                          <span>LOAN PRINCIPAL (Rp)</span>
                          <span>Rp {wiradanaLoan.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min="1000000"
                          max="15000000"
                          step="500000"
                          value={wiradanaLoan}
                          onChange={(e) => setWiradanaLoan(parseInt(e.target.value))}
                          style={{ width: "100%", accentColor: "var(--border-dark)" }}
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-[8px] font-bold text-neutral-500 mb-1">
                          <span>TENURE PERIOD</span>
                          <span>{wiradanaTenure} Months</span>
                        </div>
                        <div className="flex gap-1.5">
                          {[3, 6, 12, 24].map((t) => (
                            <button
                              key={t}
                              onClick={() => setWiradanaTenure(t)}
                              className={`seat-box text-[9px] py-1 px-0 flex-1 rounded-md border transition-all ${
                                wiradanaTenure === t ? "bg-neutral-900 text-white border-black" : "bg-emerald-50 text-emerald-800 border-emerald-100 hover:bg-neutral-900 hover:text-white"
                              }`}
                            >
                              {t}M
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-black/5">
                      <div className="bg-white p-2 rounded-lg border border-black/5">
                        <span className="block text-[8px] font-mono text-neutral-500 font-bold uppercase">MONTHLY PAY</span>
                        <span className="block text-xs font-extrabold text-neutral-800 mt-0.5">
                          Rp {Math.round((wiradanaLoan / wiradanaTenure) + ((wiradanaLoan * 0.08) / 12)).toLocaleString()}
                        </span>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-black/5">
                        <span className="block text-[8px] font-mono text-neutral-500 font-bold uppercase">SHU YIELD</span>
                        <span className="block text-xs font-extrabold text-emerald-800 mt-0.5">
                          Rp {Math.round(wiradanaLoan * 0.015).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Next.js</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">TypeScript</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Prisma</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Supabase</span>
                    </div>
                    <div className="flex gap-2">
                      <a href="https://github.com/lavinianataniela05" target="_blank" rel="noreferrer" className="exhibit-btn py-1.5 px-4 text-[9px]">Repository</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 06: TOMO */}
              <div className="project-slide">
                <div className="atelier-frame p-6 flex flex-col justify-between h-[640px] w-full max-w-[420px] mx-auto bg-neutral-900/[0.01]">
                  <div className="space-y-3">
                    <span className="exhibit-label text-[10px] tracking-widest text-blue-800 m-0">EXHIBITION F // COMMUNITY HUB</span>
                    <h3 className="text-xl font-bold font-serif m-0" style={{ fontFamily: "var(--font-display)" }}>TOMO</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed m-0">
                      Digital hub system designed to improve local coordination, resource distribution, and neighborhood business communication.
                    </p>
                  </div>

                  {/* TOMO Widget - Compact styled */}
                  <div className="sim-widget p-4 mt-3 rounded-xl bg-neutral-50/50 border border-black/5" style={{ fontSize: "11px", boxShadow: "none" }}>
                    <div className="sim-title-block mb-3 pb-2 border-b border-black/5 flex justify-between items-center">
                      <span className="sim-title text-[9px]">Bulletin Feed Simulator</span>
                      <span className="sim-badge text-[8px] px-1.5 py-0.5">STABLE</span>
                    </div>

                    <p className="text-[8px] font-bold text-neutral-500 uppercase mb-2">Inject post:</p>
                    <div className="flex gap-1.5 mb-3">
                      <button onClick={() => addTomoPost("help")} className="sim-select-item py-1 px-0 flex-1 text-[9px] justify-center gap-1 rounded-md border border-black/5 bg-white hover:bg-neutral-900 hover:text-white transition">
                        <span>📢 Request</span>
                      </button>
                      <button onClick={() => addTomoPost("resource")} className="sim-select-item py-1 px-0 flex-1 text-[9px] justify-center gap-1 rounded-md border border-black/5 bg-white hover:bg-neutral-900 hover:text-white transition">
                        <span>🛒 Resource</span>
                      </button>
                      <button onClick={() => addTomoPost("share")} className="sim-select-item py-1 px-0 flex-1 text-[9px] justify-center gap-1 rounded-md border border-black/5 bg-white hover:bg-neutral-900 hover:text-white transition">
                        <span>🌟 Skill</span>
                      </button>
                    </div>

                    <div className="flex flex-col gap-1.5 p-2 rounded-lg border border-black/10 min-h-[90px] max-h-[100px] overflow-y-auto bg-white" style={{ background: "var(--bg)" }}>
                      {tomoFeed.slice(0, 2).map((post) => (
                        <div key={post.id} className="p-1.5 bg-neutral-50 border border-neutral-100 rounded-md bg-white">
                          <div className="flex justify-between items-center text-[7px] text-neutral-400">
                            <span className="font-bold uppercase text-[7px] text-neutral-500">{post.type}</span>
                            <span>{post.time}</span>
                          </div>
                          <h5 className="text-[8px] font-bold text-neutral-700 mt-0.5 leading-none">{post.title}</h5>
                          <p className="text-[8px] text-neutral-500 mt-1 leading-tight truncate">{post.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">React</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Firebase</span>
                      <span className="exhibit-chip text-[9px] py-0.5 px-2">Tailwind CSS</span>
                    </div>
                    <div className="flex gap-2">
                      <a href="https://github.com/lavinianataniela05" target="_blank" rel="noreferrer" className="exhibit-btn py-1.5 px-4 text-[9px]">Repository</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Controls Bar */}
            <div className="slider-indicator-bar">
              <button
                disabled={activeSlideIdx === 0}
                onClick={() => scrollToSlide(activeSlideIdx - 1)}
                className="slider-arrow-btn text-xs disabled:opacity-40"
              >
                ←
              </button>

              <div className="flex gap-2">
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSlide(idx)}
                    className={`indicator-dot ${activeSlideIdx === idx ? "active" : ""}`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                disabled={activeSlideIdx === 5}
                onClick={() => scrollToSlide(activeSlideIdx + 1)}
                className="slider-arrow-btn text-xs disabled:opacity-40"
              >
                →
              </button>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 03: EXPERIENCE
            ========================================== */}
        <section id="experience" className="exhibit-room" style={{ flexDirection: "column", alignItems: "stretch" }}>
          {/* Section Header */}
          <div className="w-full max-w-[1180px] mx-auto mb-10">
            <span className="exhibit-label">THE REGISTRY // 03</span>
            <h2 className="exhibit-title">Registry of Experience</h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
              Teaching roles, mentorship records, and mathematics olympiad achievements.
            </p>
          </div>

          {/* Experience Cards */}
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
        </section>

        {/* ==========================================
            SECTION 04: CONTACT
            ========================================== */}
        <section id="contact" className="exhibit-room" style={{ flexDirection: "column", alignItems: "stretch", borderBottom: "none" }}>
          <div className="w-full max-w-[1180px] mx-auto">
            <div className="atelier-frame atelier-frame-hover p-10 md:p-16 text-center">
              <span className="exhibit-label">CONNECT // 04</span>
              <h2 className="exhibit-title mb-4">Let&apos;s build meaningful products.</h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-md mx-auto mb-9">
                Interested in full-stack dev, circular designs, or cooperative SaaS platforms? Let&apos;s collaborate.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="mailto:lavinianataniela05@gmail.com" className="exhibit-btn">
                  Send Email
                </a>
                <a
                  href="https://github.com/lavinianataniela05"
                  target="_blank"
                  rel="noreferrer"
                  className="exhibit-btn-outline"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/lavinianatanielanovyandi/"
                  target="_blank"
                  rel="noreferrer"
                  className="exhibit-btn-outline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/lavinia_nataniela/"
                  target="_blank"
                  rel="noreferrer"
                  className="exhibit-btn-outline"
                >
                  Instagram
                </a>
              </div>
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
    </div>
  );
}
