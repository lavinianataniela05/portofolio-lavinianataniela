"use client";

import { useEffect, useState } from "react";

export function useTypewriter(phrases: string[]) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (typed.length < current.length) {
        timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 38);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIdx, phrases]);

  return typed;
}
