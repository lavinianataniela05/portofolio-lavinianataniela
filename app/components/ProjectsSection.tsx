"use client";

import { useRef, useState } from "react";
import { PROJECTS, type Project } from "../data/portfolio";
import ProjectCarousel from "./ProjectCarousel";

interface Props {
  onOpenProject: (project: Project) => void;
}

export default function ProjectsSection({ onOpenProject }: Props) {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (idx: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const firstSlide = slider.querySelector(".project-slide") as HTMLElement;
    if (firstSlide) {
      const slideWidth = firstSlide.offsetWidth + 24;
      slider.scrollTo({ left: idx * slideWidth, behavior: "smooth" });
      setActiveSlideIdx(idx);
    }
  };

  const handleSliderScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const firstSlide = slider.querySelector(".project-slide") as HTMLElement;
    if (firstSlide) {
      const slideWidth = firstSlide.offsetWidth + 24;
      const newIdx = Math.round(slider.scrollLeft / slideWidth);
      if (newIdx !== activeSlideIdx && newIdx >= 0 && newIdx < PROJECTS.length) {
        setActiveSlideIdx(newIdx);
      }
    }
  };

  return (
    <section
      id="projects"
      className="exhibit-room"
      style={{ flexDirection: "column", alignItems: "stretch", paddingBottom: "80px" }}
    >
      <div className="hero-intro">
        <span className="exhibit-label">PROJECT PORTFOLIO // 02</span>
        <h2 className="exhibit-title">PORTOFOLIO</h2>
        <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
          A curated gallery of products spanning waste circularity, restaurant logistics,
          data science, and cooperative platforms — scroll through to explore each build.
        </p>
      </div>

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
                  onClick={() => onOpenProject(p)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${p.title} details`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onOpenProject(p);
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
                  <button type="button" className="proj-title" onClick={() => onOpenProject(p)}>
                    {p.title}
                  </button>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-chips">
                    {p.chips.map((c) => (
                      <span key={c} className="proj-chip">{c}</span>
                    ))}
                  </div>
                  <div className="proj-links">
                    <button type="button" className="proj-btn" onClick={() => onOpenProject(p)}>
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
  );
}
