"use client";

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lavinianatanielanovyandi/",
    Icon: FiLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lavinia_nataniela/",
    Icon: FiInstagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/lavinianataniela05",
    Icon: FiGithub,
  },
  {
    label: "Email",
    href: "mailto:lavinianataniela05@gmail.com",
    Icon: FiMail,
  },
];

// Fixed vertical social rail (left edge) — matches the cream / neo-brutalist theme.
export default function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social links">
      <span className="social-rail-tag">FOLLOW</span>
      <span className="social-rail-line" aria-hidden="true" />
      <ul className="social-rail-list">
        {SOCIALS.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="social-rail-btn"
              aria-label={label}
              title={label}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <span className="social-rail-line" aria-hidden="true" />
    </aside>
  );
}
