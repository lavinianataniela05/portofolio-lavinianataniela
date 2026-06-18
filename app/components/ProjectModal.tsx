"use client";

import { useEffect } from "react";
import type { Project } from "../data/portfolio";
import ProjectCarousel from "./ProjectCarousel";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // close on Escape + lock body scroll while open
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="pm-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div
        className="pm-panel"
        onClick={(e) => e.stopPropagation()}
        style={{ "--accent": project.accent } as React.CSSProperties}
      >
        <button type="button" className="pm-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="pm-media">
          <div className="pm-frame">
            <div className="pm-frame-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="pm-frame-shot">
              <ProjectCarousel images={project.images} alt={project.title} />
            </div>
          </div>
        </div>

        <div className="pm-body">
          <span className="pm-tag">
            <span className="pm-tag-dot" />
            {project.tag}
            <span className="pm-year">{project.year}</span>
          </span>

          <h2 className="pm-title">{project.title}</h2>
          <p className="pm-overview">{project.overview}</p>

          <div className="pm-section">
            <h3 className="pm-section-title">Highlights</h3>
            <ul className="pm-highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="pm-section">
            <h3 className="pm-section-title">Built with</h3>
            <div className="pm-chips">
              {project.chips.map((c) => (
                <span key={c} className="pm-chip">{c}</span>
              ))}
            </div>
          </div>

          <div className="pm-links">
            <a href={project.repo} target="_blank" rel="noreferrer" className="pm-btn">
              View Repository
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="pm-btn pm-btn-outline">
                Visit Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
