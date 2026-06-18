"use client";

const NAV_ITEMS = [
  { id: "profile", label: "01 / Profile" },
  { id: "projects", label: "02 / Projects" },
  { id: "experience", label: "03 / Experience" },
  { id: "contact", label: "04 / Contact" },
];

interface Props {
  activeRoom: string;
  scrollToRoom: (id: string) => void;
}

export default function NavHeader({ activeRoom, scrollToRoom }: Props) {
  return (
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
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToRoom(id)}
            className={`nav-btn ${activeRoom === id ? "active" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  );
}
