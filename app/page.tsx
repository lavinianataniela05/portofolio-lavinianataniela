"use client";

import { useState } from "react";
import WovenYarnCanvas from "./components/WovenYarnCanvas";
import SocialRail from "./components/SocialRail";
import ProjectModal from "./components/ProjectModal";
import NavHeader from "./components/NavHeader";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import { useTypewriter } from "./hooks/useTypewriter";
import { useGreeting } from "./hooks/useGreeting";
import { useActiveSection } from "./hooks/useActiveSection";
import { HERO_ROLES, HW_GREETINGS, type Project } from "./data/portfolio";

const SECTION_IDS = ["profile", "projects", "experience", "contact"];

export default function Page() {
  const typed = useTypewriter(HERO_ROLES);
  const greetIdx = useGreeting(HW_GREETINGS);
  const activeRoom = useActiveSection(SECTION_IDS, "profile");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const scrollToRoom = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen selection:bg-black/10">
      <WovenYarnCanvas />
      <SocialRail />
      <NavHeader activeRoom={activeRoom} scrollToRoom={scrollToRoom} />

      <main>
        <ProfileSection typed={typed} greetIdx={greetIdx} scrollToRoom={scrollToRoom} />
        <ProjectsSection onOpenProject={setOpenProject} />
        <ExperienceSection />
        <ContactSection />
      </main>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </div>
  );
}
