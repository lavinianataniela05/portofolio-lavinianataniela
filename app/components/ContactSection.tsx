"use client";

import { FiMail, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="exhibit-room"
      style={{ flexDirection: "column", alignItems: "stretch", borderBottom: "none", paddingBottom: "80px" }}
    >
      <div className="hero-intro">
        <span className="exhibit-label">CONNECT // 04</span>

        <div className="contact-card atelier-frame">
          {/* Top accent bar */}
          <div className="contact-card-bar" />

          <div className="contact-card-inner">
            {/* Left: headline + desc + availability */}
            <div className="contact-card-left">
              <h2 className="contact-headline">
                Let&apos;s work<br />together.
              </h2>
              <p className="contact-desc">
                Open to frontend roles, freelance projects, and collaborations on full-stack or AI-powered products. I reply within 24 hours.
              </p>
              <span className="contact-avail">
                <i className="status-dot" aria-hidden="true" />
                Available for new projects
              </span>
            </div>

            {/* Divider */}
            <div className="contact-card-divider" />

            {/* Right: CTA + meta */}
            <div className="contact-card-right">
              <div className="contact-meta">
                <span className="contact-meta-item">
                  <FiMapPin size={11} /> Jakarta, Indonesia
                </span>
                <span className="contact-meta-item">
                  <FiClock size={11} /> UTC+7 · WIB
                </span>
              </div>

              <a href="mailto:lavinianataniela05@gmail.com" className="exhibit-btn contact-email-btn">
                <FiMail size={15} />
                lavinianataniela05@gmail.com
              </a>

              <p className="contact-hint">
                Find me on socials via the rail on the left ←
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="hero-intro">
        <div className="contact-footer">
          <span>© {new Date().getFullYear()} Lavinia Nataniela</span>
          <span className="contact-footer-dot" />
          <span>Designed &amp; built with Next.js</span>
          <span className="contact-footer-dot" />
          <span>Jakarta, Indonesia</span>
        </div>
      </div>
    </section>
  );
}
