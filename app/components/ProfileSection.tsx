"use client";

import { TECH_STACK, HW_GREETINGS, CAPABILITIES } from "../data/portfolio";

interface Props {
  typed: string;
  greetIdx: number;
  scrollToRoom: (id: string) => void;
}

export default function ProfileSection({ typed, greetIdx, scrollToRoom }: Props) {
  return (
    <section
      id="profile"
      className="exhibit-room"
      style={{ flexDirection: "column", alignItems: "stretch", paddingBottom: "60px" }}
    >
      {/* Hero Landing */}
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
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="exhibit-btn">
            Download CV / Resume
          </a>
          <button onClick={() => scrollToRoom("projects")} className="exhibit-btn-outline">
            Explore Work
          </button>
        </div>
      </div>

      {/* About Card */}
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
                <h4 className="font-bold font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                  {cap.label}
                </h4>
                <span className="font-mono text-[10px] font-bold text-amber-800">
                  {String(idx + 1).padStart(2, "0")}
                </span>
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
  );
}
