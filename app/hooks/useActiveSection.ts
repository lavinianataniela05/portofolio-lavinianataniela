"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], defaultId: string) {
  const [activeSection, setActiveSection] = useState(defaultId);

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
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
  }, [sectionIds]);

  return activeSection;
}
