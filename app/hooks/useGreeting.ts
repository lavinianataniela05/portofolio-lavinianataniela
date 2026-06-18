"use client";

import { useEffect, useState } from "react";

export function useGreeting(greetings: string[], intervalMs = 2200) {
  const [greetIdx, setGreetIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetIdx((i) => (i + 1) % greetings.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [greetings.length, intervalMs]);

  return greetIdx;
}
