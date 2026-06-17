"use client";

import { useEffect, useRef, useState } from "react";
import { 
  FiArrowUpRight, 
  FiGithub, 
  FiLinkedin, 
  FiInstagram, 
  FiMail, 
} from "react-icons/fi";

// ==========================================
// INTERACTIVE CANVAS BACKDROP (WOVEN THREADS)
// ==========================================
const WovenYarnCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;
    let phase = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      phase += 0.004;

      const threads = [
        { color: "rgba(138, 98, 64, 0.07)", frequency: 0.002, amplitude: 50, offset: 0 },
        { color: "rgba(50, 75, 59, 0.05)", frequency: 0.003, amplitude: 30, offset: Math.PI / 3 },
        { color: "rgba(181, 93, 54, 0.05)", frequency: 0.0015, amplitude: 60, offset: Math.PI / 1.5 }
      ];

      threads.forEach((thread) => {
        ctx.beginPath();
        ctx.strokeStyle = thread.color;
        ctx.lineWidth = 1.8;

        for (let x = 0; x < width; x += 6) {
          let angle = x * thread.frequency + phase + thread.offset;
          let y = height / 2 + Math.sin(angle) * thread.amplitude;

          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 250) {
            const pull = (1 - dist / 250) * 20;
            y += (mouseRef.current.y - y > 0 ? pull : -pull);
          }

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="woven-canvas" />;
};

// ==========================================
// MAIN DIGITAL ATELIER VIEW
// ==========================================
export default function Page() {
  const [activeRoom, setActiveRoom] = useState("profile");
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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
        // Calculate active index based on scroll position
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
          L. NATANIELA
          <span>Digital Atelier</span>
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
          {/* Hero Landing */}
          <div className="exhibit-grid mb-16">
            <div className="space-y-6">
              <span className="exhibit-label">Atelier Introduction</span>
              <h1 className="exhibit-title" style={{ fontFamily: "var(--font-display)" }}>
                Designing Products
                <br />
                That Create <span style={{ color: "var(--primary)" }}>Impact</span>
              </h1>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
                Frontend Developer and UI/UX Designer crafting scalable, sustainability-focused digital solutions 
                at the intersection of clean code and human-centered design.
              </p>

              {/* Stats Counters */}
              <div className="flex gap-8 border-y border-black/10 py-5 my-4 text-sm font-mono">
                <div>
                  <span className="block text-2xl font-bold text-black font-sans">5+</span>
                  <span className="text-[10px] text-neutral-500">Products</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-black font-sans">3+</span>
                  <span className="text-[10px] text-neutral-500">Domains</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-black font-sans">1K+</span>
                  <span className="text-[10px] text-neutral-500">Dev Hours</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-black font-sans">∞</span>
                  <span className="text-[10px] text-neutral-500">Passion</span>
                </div>
              </div>

              <div className="flex gap-4">
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

            {/* Profile Picture Frame */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-[280px] aspect-[4/5] border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#121213] transition-transform hover:-translate-x-1 hover:-translate-y-1">
                <img 
                  src="/foto_profesional.jpeg" 
                  alt="Lavinia Nataniela" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur border border-black/10 rounded-xl p-2.5 flex justify-between items-center text-[10px] font-mono">
                  <div>
                    <span className="font-bold block text-neutral-900">L. Nataniela Novyandi</span>
                    <span className="text-[9px] text-neutral-500">Jakarta, ID // Active</span>
                  </div>
                  <span className="sim-badge" style={{ background: "var(--primary)", color: "#FFFFFF", fontSize: "8px" }}>Dev & Designer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biography & Timeline split */}
          <div className="exhibit-grid pt-12 border-t border-black/10">
            <div className="space-y-4">
              <span className="exhibit-label">BIOGRAPHY // PROFILE</span>
              <h2 className="text-2xl font-bold font-serif" style={{ fontFamily: "var(--font-display)" }}>My Core</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Focused on turning complex business requirements into intuitive, user-friendly digital architectures. 
                I combine technical development, system planning, and modern design principles to produce measurable value.
              </p>
            </div>

            {/* Timeline */}
            <div className="atelier-frame p-6">
              <span className="exhibit-label">Chronology</span>
              <div className="space-y-4 mt-4 relative pl-4 border-l border-black/10">
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-mono font-bold text-amber-800 w-8">2023</span>
                  <div>
                    <h4 className="text-xs font-bold">Web Development Start</h4>
                    <p className="text-[11px] text-neutral-500">HTML, CSS, JS foundations</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-mono font-bold text-amber-800 w-8">2024</span>
                  <div>
                    <h4 className="text-xs font-bold">Frontend Engineering</h4>
                    <p className="text-[11px] text-neutral-500">React, Next.js, TypeScript focus</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-mono font-bold text-amber-800 w-8">2025</span>
                  <div>
                    <h4 className="text-xs font-bold">Product-Based Platforms</h4>
                    <p className="text-[11px] text-neutral-500">Tenunara, TOMO, cafe log system</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-mono font-bold text-amber-800 w-8">2026</span>
                  <div>
                    <h4 className="text-xs font-bold">Sustainable Tech Solutions</h4>
                    <p className="text-[11px] text-neutral-500">Wiradana cooperative frameworks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Matrix */}
          <div className="mt-16 w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="atelier-frame p-6">
                <h4 className="font-bold mb-3 font-mono text-[10px] uppercase tracking-wide text-neutral-500">Frontend</h4>
                <div className="flex flex-wrap gap-1.5">
                  <span className="exhibit-chip">React</span>
                  <span className="exhibit-chip">Next.js</span>
                  <span className="exhibit-chip">TypeScript</span>
                  <span className="exhibit-chip">Tailwind CSS</span>
                  <span className="exhibit-chip">Framer Motion</span>
                </div>
              </div>

              <div className="atelier-frame p-6">
                <h4 className="font-bold mb-3 font-mono text-[10px] uppercase tracking-wide text-neutral-500">Backend</h4>
                <div className="flex flex-wrap gap-1.5">
                  <span className="exhibit-chip">Supabase</span>
                  <span className="exhibit-chip">Firebase</span>
                  <span className="exhibit-chip">Prisma</span>
                  <span className="exhibit-chip">Node.js</span>
                  <span className="exhibit-chip">PostgreSQL</span>
                </div>
              </div>

              <div className="atelier-frame p-6">
                <h4 className="font-bold mb-3 font-mono text-[10px] uppercase tracking-wide text-neutral-500">Design & System</h4>
                <div className="flex flex-wrap gap-1.5">
                  <span className="exhibit-chip">Figma</span>
                  <span className="exhibit-chip">UX Wireframing</span>
                  <span className="exhibit-chip">Microservices</span>
                  <span className="exhibit-chip">Docker</span>
                  <span className="exhibit-chip">System Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 02: PROJECTS (HORIZONTAL SLIDER)
            ========================================== */}
        <section id="projects" className="exhibit-room" style={{ flexDirection: "column", alignItems: "stretch", paddingBottom: "80px" }}>
          {/* PROJECTS INDEX HEADER */}
          <div className="w-full max-w-5xl mx-auto mb-8">
            <span className="exhibit-label">PROJECT PORTFOLIO</span>
            <h2 className="exhibit-title">Exhibition Catalogue</h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
              Explore interactive product simulators built to demo waste circularity, restaurant logistics, 
              and aviation models inside a horizontal scrollable gallery.
            </p>
          </div>

          {/* Horizontal Slider Wrapper */}
          <div className="exhibit-slider-wrapper my-8">
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
                        let stateClass = "free";
                        if (isOccupied) stateClass = "occupied";
                        else if (isSelected) stateClass = "reserved";

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
          <div className="w-full max-w-5xl mx-auto mb-12">
            <span className="exhibit-label">THE REGISTRY // HONORS & EXPERIENCE</span>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="exhibit-title mb-0">Registry of Experience</h2>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mb-2">
                Teaching roles, mentorship records, and mathematics olympiad achievements.
              </p>
            </div>
            <div className="mt-6 h-px bg-black/10" />
          </div>

          {/* Experience Cards */}
          <div className="w-full max-w-5xl mx-auto mb-14">
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
          <div className="w-full max-w-5xl mx-auto">
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
        <section id="contact" className="exhibit-room" style={{ borderBottom: "none" }}>
          <div className="w-full max-w-4xl mx-auto text-center space-y-6">
            <span className="exhibit-label">CONNECT</span>
            <h2 className="exhibit-title">Let's build meaningful products.</h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
              Interested in full-stack dev, circular designs, or cooperative SaaS platforms? Let's collaborate.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
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
        </section>
      </main>
    </div>
  );
}