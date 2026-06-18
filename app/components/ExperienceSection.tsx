"use client";

import { useState } from "react";

interface ProofImage { src: string; cap: string; }
interface CareerEntry {
  num: string; period: string; status: string; color: string; icon: string;
  role: string; org: string; desc: string; chips: string[]; proof?: ProofImage[];
}
interface CompetitionEntry {
  num: string; rank: string; trophy: string; event: string; year: string; color: string;
  project: string; subtitle: string; desc: string; chips: string[]; proof: ProofImage[];
}
interface HonorEntry {
  num: string; icon: string; medal: string; year: string; color: string;
  title: string; event: string; desc: string; proof?: ProofImage[];
}
interface ProofState { images: ProofImage[]; idx: number; title: string; color: string; }

const CAREER: CareerEntry[] = [
  {
    num: "01", period: "2025 — Present", status: "Ongoing", color: "#1D4ED8", icon: "💼",
    role: "Frontend Developer Intern", org: "PT. Cyberindo Aditama",
    desc: "Contributing to a professional frontend team building production-grade web applications. Handles feature development, UI implementation, and cross-browser compatibility in a real industry environment.",
    chips: ["React", "TypeScript", "Frontend", "Web Dev"],
    proof: [{ src: "/cbn.jpeg", cap: "PT. Cyberindo Aditama — Work Documentation" }],
  },
  {
    num: "02", period: "2024 — 2025", status: "Ongoing", color: "#B45309", icon: "📋",
    role: "Laboratory Assistant Lecturer", org: "Binus University",
    desc: "Tutored Java OOP and Algorithms to 100+ undergraduate CS students. Ran weekly lab sessions, evaluated practical assignments, and provided one-on-one academic mentoring.",
    chips: ["Java OOP", "Algorithms", "100+ Students"],
    proof: [
      { src: "/astra1.jpeg", cap: "Lab Session Activity" },
      { src: "/astra2.jpeg", cap: "Student Mentoring" },
      { src: "/astra3.jpeg", cap: "Laboratory Evaluation" },
    ],
  },
  {
    num: "03", period: "2024", status: "Completed", color: "#0F766E", icon: "🖥️",
    role: "Summer Computer Class Instructor", org: "HIMTI Binus",
    desc: "Led a multi-day coding camp introducing new CS students to frontend fundamentals — covering HTML, CSS, and UI layout principles through hands-on workshops.",
    chips: ["HTML / CSS", "Frontend Design", "Coding Camp"],
  },
];

const COMPETITIONS: CompetitionEntry[] = [
  {
    num: "01", rank: "1st Place", trophy: "🥇", year: "2026", color: "#15803D",
    event: "IN:NOVATE Code Up! 2026", project: "Tenunara",
    subtitle: "AI untuk Pengelolaan Limbah Tekstil",
    desc: "IN:NOVATE challenged teams to build AI solutions for environmental sustainability. Tenunara is a B2B marketplace connecting textile manufacturers with artisans to upcycle leftover fabrics — tracking water & CO₂ savings per transaction through AI-powered matching.",
    chips: ["Next.js", "TypeScript", "AI", "Supabase", "Tailwind CSS"],
    proof: [
      { src: "/tenunara.png", cap: "Landing Page" },
      { src: "/tenunara2.png", cap: "Marketplace Dashboard" },
      { src: "/tenunara3.png", cap: "CO₂ Impact Tracker" },
      { src: "/tenunara4.png", cap: "Trade Flow" },
    ],
  },
  {
    num: "02", rank: "Top 10 Finalist", trophy: "🚀", year: "2025", color: "#1D4ED8",
    event: "Nitro Hackathon", project: "TOMO",
    subtitle: "Community Digital Hub System",
    desc: "Built TOMO — a digital neighborhood hub unifying local bulletins, resource distribution boards, and business communication channels on one platform.",
    chips: ["React", "Firebase", "Tailwind CSS"],
    proof: [
      { src: "/tomo.png", cap: "Main Interface" },
      { src: "/tomo2.png", cap: "Community Bulletin" },
      { src: "/tomo3.png", cap: "Resource Board" },
      { src: "/tomo4.png", cap: "Business Channel" },
      { src: "/tomo-sertif.jpg", cap: "Certificate — Top 10 Finalist" },
    ],
  },
  {
    num: "03", rank: "Top 15 Finalist", trophy: "🏆", year: "2025", color: "#7C3AED",
    event: "Technoscape by BNCC", project: "Wiradana",
    subtitle: "Cooperative Management SaaS",
    desc: "Wiradana is a multi-tenant SaaS helping cooperatives manage members, track savings ledgers, and process loan approvals — all from one secure workspace.",
    chips: ["Next.js", "TypeScript", "Prisma", "Supabase"],
    proof: [
      { src: "/wiradana.png", cap: "Dashboard Overview" },
      { src: "/wiradana2.png", cap: "Member Management" },
      { src: "/wiradana3.png", cap: "Savings Ledger" },
      { src: "/wiradana4.png", cap: "Loan Approval Flow" },
      { src: "/technoscape.jpeg", cap: "Certificate — Top 15 Finalist" },
    ],
  },
];

const HONORS: HonorEntry[] = [
  {
    num: "01", icon: "🎓", medal: "Scholarship", year: "2023", color: "#8A6240",
    title: "Widia Scholarship", event: "Binus University",
    desc: "Partial merit-based scholarship awarded to CS students demonstrating outstanding academic performance and sustained commitment.",
  },
  {
    num: "02", icon: "🥇", medal: "Gold Medal", year: "2022", color: "#B55D36",
    title: "Gold Medal", event: "PhIMO 2022",
    desc: "Competed against 30+ nations, achieving gold in the senior division — one of Southeast Asia's most prestigious math competitions.",
    proof: [{ src: "/phimo2022.jpeg", cap: "Gold Medal — PhIMO 2022" }],
  },
  {
    num: "03", icon: "🏆", medal: "1st Prize", year: "2022", color: "#324B3B",
    title: "1st Prize", event: "GBA Math Olympiad",
    desc: "Awarded first place competing against top mathematicians from Hong Kong, Macau, and Guangdong.",
    proof: [{ src: "/1price.jpeg", cap: "1st Prize — GBA Math Olympiad" }],
  },
  {
    num: "04", icon: "🏅", medal: "2nd Prize", year: "2023", color: "#6B7280",
    title: "2nd Prize", event: "GBA Math Olympiad",
    desc: "Secured second place — sustained excellence across consecutive years of the same international competition.",
    proof: [{ src: "/2price.jpeg", cap: "2nd Prize — GBA Math Olympiad" }],
  },
  {
    num: "05", icon: "🥉", medal: "Bronze Medal", year: "2021", color: "#8A6240",
    title: "Bronze Medal", event: "PhIMO Heat Round",
    desc: "Earned bronze in the qualifying heat round of PhIMO — the first international entry, which led to a gold medal the very next year.",
    proof: [{ src: "/phimo2021.jpeg", cap: "Bronze Medal — PhIMO 2021" }],
  },
];

// ─── Proof Modal ──────────────────────────────────────────────────────
function ProofModal({ proof, onClose }: { proof: ProofState; onClose: () => void }) {
  const [idx, setIdx] = useState(proof.idx);
  const cur = proof.images[idx];
  return (
    <div className="pm-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden"
        style={{ width: "min(900px,95vw)", maxHeight: "90vh", boxShadow: "0 40px 90px -20px rgba(18,18,19,.55)" }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-7 py-4" style={{ borderBottom: "1px solid #ede9e2" }}>
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: proof.color }}>
              Documentation · {idx + 1} / {proof.images.length}
            </p>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700 }}>{proof.title}</h3>
          </div>
          <button onClick={onClose}
            style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "1.5px solid #e5e0d8", cursor: "pointer", fontSize: 13, background: "var(--bg)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#121213"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--bg)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--text)"; }}>✕</button>
        </div>
        <div className="relative" style={{ aspectRatio: "16/9", background: "#f5f3ef" }}>
          <img src={cur.src} alt={cur.cap} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
          {idx > 0 && <button onClick={() => setIdx(i => i - 1)} className="pcar-arrow pcar-prev" style={{ opacity: 1 }}>◀</button>}
          {idx < proof.images.length - 1 && <button onClick={() => setIdx(i => i + 1)} className="pcar-arrow pcar-next" style={{ opacity: 1 }}>▶</button>}
        </div>
        <div className="flex items-center gap-4 px-7 py-4" style={{ background: "var(--bg)", borderTop: "1px solid #ede9e2" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", flex: 1 }}>{cur.cap}</p>
          <div style={{ display: "flex", gap: 8 }}>
            {proof.images.map((img, i) => (
              <button key={i} onClick={() => setIdx(i)}
                style={{ width: 76, height: 50, flexShrink: 0, border: `2px solid ${i === idx ? proof.color : "#e5e0d8"}`, borderRadius: 8, overflow: "hidden", opacity: i === idx ? 1 : 0.4, transition: "all .18s", cursor: "pointer", padding: 0, background: "none" }}>
                <img src={img.src} alt={img.cap} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Proof Strip ──────────────────────────────────────────────────────
function ProofStrip({ images, color, label, onOpen }: { images: ProofImage[]; color: string; label: string; onOpen: (i: number) => void }) {
  return (
    <div className="exp-proof-strip">
      <div style={{ display: "flex", gap: 4 }}>
        {images.slice(0, 4).map((img, i) => (
          <button key={i} onClick={() => onOpen(i)} title={img.cap}
            style={{ width: 44, height: 30, borderRadius: 5, overflow: "hidden", border: "1.5px solid rgba(18,18,19,.10)", cursor: "pointer", padding: 0, background: "none", transition: "all .18s", flexShrink: 0 }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = color; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(18,18,19,.10)"; (e.currentTarget as HTMLButtonElement).style.transform = ""; }}>
            <img src={img.src} alt={img.cap} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </button>
        ))}
        {images.length > 4 && (
          <button onClick={() => onOpen(4)}
            style={{ width: 44, height: 30, borderRadius: 5, border: "1.5px solid rgba(18,18,19,.10)", cursor: "pointer", background: "rgba(18,18,19,.04)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, color: "var(--muted)", flexShrink: 0 }}>
            +{images.length - 4}
          </button>
        )}
      </div>
      <button onClick={() => onOpen(0)}
        style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color, background: `${color}14`, border: `1.5px solid ${color}28`, borderRadius: 6, padding: "5px 12px", cursor: "pointer", whiteSpace: "nowrap", transition: "all .18s", flexShrink: 0 }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = color; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = `${color}14`; (e.currentTarget as HTMLButtonElement).style.color = color; }}>
        {label} →
      </button>
    </div>
  );
}

// ─── Section Label ────────────────────────────────────────────────────
function SectionLabel({ index, label, count }: { index: string; label: string; count: number }) {
  return (
    <div className="exp-section-label">
      <span className="exp-section-index">{index}</span>
      <span className="exp-section-name">{label}</span>
      <div className="exp-section-rule" />
      <span className="exp-section-count">{String(count).padStart(2, "0")}</span>
    </div>
  );
}

// ─── Career Card ──────────────────────────────────────────────────────
function CareerCard({ entry, onOpen }: { entry: CareerEntry; onOpen?: (i: number) => void }) {
  return (
    <div className="exp-cv atelier-frame atelier-frame-hover">
      {/* Accent bar top */}
      <div className="exp-cv-bar" style={{ background: entry.color }} />

      <div className="exp-cv-body">
        {/* Top row */}
        <div className="exp-cv-top">
          <div className="exp-cv-icon" style={{ background: `${entry.color}16`, border: `1.5px solid ${entry.color}30` }}>
            <span>{entry.icon}</span>
          </div>
          <div className="exp-cv-meta">
            <span className="exp-cv-num" style={{ color: entry.color }}>{entry.num} · Career</span>
            <span className="exp-cv-period">{entry.period}</span>
          </div>
          <span className="sim-badge">{entry.status}</span>
        </div>

        <div className="exp-cv-rule" />

        {/* Main info */}
        <h4 className="exp-cv-role">{entry.role}</h4>
        <p className="exp-cv-org" style={{ color: entry.color }}>{entry.org}</p>
        <p className="exp-cv-desc">{entry.desc}</p>

        {/* Chips */}
        <div className="exp-chips">
          {entry.chips.map(c => <span key={c} className="exp-chip">{c}</span>)}
        </div>

        {entry.proof && onOpen && (
          <ProofStrip images={entry.proof} color={entry.color} label="View docs" onOpen={onOpen} />
        )}
      </div>

      {/* Watermark */}
      <span className="exp-wm" style={{ color: entry.color }}>{entry.num}</span>
    </div>
  );
}

// ─── Competition Hero Card (featured — 1st place) ─────────────────────
function CompHero({ entry, onOpen }: { entry: CompetitionEntry; onOpen: (i: number) => void }) {
  return (
    <div className="exp-hero atelier-frame atelier-frame-hover">
      {/* LEFT: bold solid-color panel */}
      <div className="exp-hero-panel" style={{ background: entry.color }}>
        <div className="exp-hero-stripes" />
        <div className="exp-hero-orb" />

        <div className="exp-hero-panel-inner">
          <span className="exp-hero-event">{entry.event}</span>
          <div className="exp-hero-award">
            <span className="exp-hero-trophy">{entry.trophy}</span>
            <span className="exp-hero-rank">{entry.rank}</span>
          </div>
          <span className="exp-hero-ybadge">{entry.year}</span>
        </div>

        <span className="exp-hero-ghost">{entry.num}</span>
      </div>

      {/* RIGHT: content */}
      <div className="exp-hero-content">
        <h3 className="exp-hero-name">{entry.project}</h3>
        <p className="exp-hero-sub" style={{ color: entry.color }}>{entry.subtitle}</p>
        <p className="exp-cv-desc">{entry.desc}</p>
        <div className="exp-chips">
          {entry.chips.map(c => <span key={c} className="exp-chip">{c}</span>)}
        </div>
        <ProofStrip images={entry.proof} color={entry.color} label="View docs" onOpen={onOpen} />
      </div>
    </div>
  );
}

// ─── Competition Side Card ────────────────────────────────────────────
function CompSide({ entry, onOpen }: { entry: CompetitionEntry; onOpen: (i: number) => void }) {
  return (
    <div className="exp-side atelier-frame atelier-frame-hover">
      {/* LEFT: compact colored panel */}
      <div className="exp-side-panel" style={{ background: entry.color }}>
        <div className="exp-hero-stripes" />
        <div className="exp-side-panel-inner">
          <span style={{ fontSize: 22, lineHeight: 1, display: "block", marginBottom: 6 }}>{entry.trophy}</span>
          <span className="exp-side-rank">{entry.rank}</span>
        </div>
        <span className="exp-side-year">{entry.year}</span>
      </div>

      {/* RIGHT: content */}
      <div className="exp-side-content">
        <span className="exp-side-event" style={{ color: entry.color }}>{entry.event}</span>
        <h4 className="exp-side-name">{entry.project}</h4>
        <p className="exp-cv-desc" style={{ fontSize: 11.5, marginBottom: 10 }}>{entry.desc}</p>
        <div className="exp-chips" style={{ marginBottom: 10 }}>
          {entry.chips.map(c => <span key={c} className="exp-chip">{c}</span>)}
        </div>
        <ProofStrip images={entry.proof} color={entry.color} label="View" onOpen={onOpen} />
      </div>
    </div>
  );
}

// ─── Honor Featured Card (Scholarship) ───────────────────────────────
function HonorFeatured({ entry, onOpen }: { entry: HonorEntry; onOpen?: (i: number) => void }) {
  return (
    <div className="exp-honor-featured atelier-frame atelier-frame-hover">
      {/* Left solid panel */}
      <div className="exp-honor-feat-panel" style={{ background: entry.color }}>
        <div className="exp-hero-stripes" />
        <div className="exp-honor-feat-panel-inner">
          <span className="exp-honor-feat-label">Academic Scholarship</span>
          <span style={{ fontSize: 52, lineHeight: 1, display: "block" }}>{entry.icon}</span>
          <span className="exp-honor-feat-year">{entry.year}</span>
        </div>
        <span className="exp-honor-feat-ghost">01</span>
      </div>

      {/* Right content */}
      <div className="exp-honor-feat-content">
        <div className="exp-honor-feat-badge" style={{ color: entry.color, background: `${entry.color}14`, border: `1.5px solid ${entry.color}30` }}>
          ★ MERIT SCHOLARSHIP
        </div>
        <h3 className="exp-honor-feat-title">{entry.title}</h3>
        <p className="exp-honor-feat-org" style={{ color: entry.color }}>{entry.event}</p>
        <p className="exp-cv-desc">{entry.desc}</p>
      </div>
    </div>
  );
}

// ─── Honor / Medal Card ───────────────────────────────────────────────
function HonorCard({ entry, onOpen }: { entry: HonorEntry; onOpen?: (i: number) => void }) {
  return (
    <div className="exp-medal atelier-frame atelier-frame-hover">
      <div className="exp-medal-bar" style={{ background: entry.color }} />
      <div className="exp-medal-body">
        <div className="exp-medal-ring" style={{ background: `${entry.color}14`, borderColor: `${entry.color}45` }}>
          <span className="exp-medal-icon">{entry.icon}</span>
        </div>
        <span className="exp-medal-year" style={{ color: entry.color }}>{entry.year}</span>
        <div className="exp-medal-rule" />
        <span className="exp-medal-type" style={{ color: entry.color }}>{entry.medal}</span>
        <h4 className="exp-medal-title">{entry.title}</h4>
        <p className="exp-medal-event">{entry.event}</p>
        {entry.proof && onOpen && (
          <button className="exp-medal-btn"
            style={{ color: entry.color, background: `${entry.color}10`, border: `1.5px solid ${entry.color}28` }}
            onClick={() => onOpen(0)}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = entry.color; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = `${entry.color}10`; (e.currentTarget as HTMLButtonElement).style.color = entry.color; }}>
            View →
          </button>
        )}
      </div>
      <span className="exp-wm" style={{ color: entry.color, fontSize: 80 }}>{entry.num}</span>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────
export default function ExperienceSection() {
  const [proof, setProof] = useState<ProofState | null>(null);
  const open = (imgs: ProofImage[], i: number, title: string, color: string) =>
    setProof({ images: imgs, idx: i, title, color });

  return (
    <section id="experience" className="exhibit-room"
      style={{ flexDirection: "column", alignItems: "stretch", paddingBottom: "100px" }}>

      {/* Header */}
      <div className="hero-intro">
        <span className="exhibit-label">THE REGISTRY // 03</span>
        <h2 className="exhibit-title">EXPERIENCE</h2>
        <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
          A curated record of professional roles, competition wins, and academic honors — each documented with proof.
        </p>
      </div>

      {/* ── Career ── */}
      <div className="hero-intro exp-subsection">
        <SectionLabel index="01" label="Career & Mentorship" count={CAREER.length} />
        <div className="exp-career-grid">
          {CAREER.map(e => (
            <CareerCard key={e.num} entry={e}
              onOpen={e.proof ? i => open(e.proof!, i, e.role, e.color) : undefined}
            />
          ))}
        </div>
      </div>

      {/* ── Competitions ── */}
      <div className="hero-intro exp-subsection">
        <SectionLabel index="02" label="Competition Hall" count={COMPETITIONS.length} />
        <div className="exp-comp-grid">
          <CompHero entry={COMPETITIONS[0]}
            onOpen={i => open(COMPETITIONS[0].proof, i, COMPETITIONS[0].project, COMPETITIONS[0].color)}
          />
          <div className="exp-comp-stack">
            {COMPETITIONS.slice(1).map(e => (
              <CompSide key={e.num} entry={e}
                onOpen={i => open(e.proof, i, e.project, e.color)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Honors ── */}
      <div className="hero-intro">
        <SectionLabel index="03" label="Academic Honors" count={HONORS.length} />

        {/* Scholarship featured card */}
        <HonorFeatured entry={HONORS[0]}
          onOpen={HONORS[0].proof ? i => open(HONORS[0].proof!, i, HONORS[0].title, HONORS[0].color) : undefined}
        />

        {/* Medal grid — remaining 4 */}
        <div className="exp-honors-grid">
          {HONORS.slice(1).map(e => (
            <HonorCard key={e.num} entry={e}
              onOpen={e.proof ? i => open(e.proof!, i, e.title, e.color) : undefined}
            />
          ))}
        </div>
      </div>

      {proof && <ProofModal proof={proof} onClose={() => setProof(null)} />}
    </section>
  );
}
