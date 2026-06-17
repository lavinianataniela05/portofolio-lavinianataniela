"use client";

import { useEffect, useRef } from "react";

// ==========================================
// INTERACTIVE CANVAS BACKDROP (WOVEN THREADS)
// ==========================================
export default function WovenYarnCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;
    let phase = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      phase += 0.004;

      const threads = [
        { color: "rgba(138, 98, 64, 0.07)", frequency: 0.002, amplitude: 50, offset: 0 },
        { color: "rgba(50, 75, 59, 0.05)", frequency: 0.003, amplitude: 30, offset: Math.PI / 3 },
        { color: "rgba(181, 93, 54, 0.05)", frequency: 0.0015, amplitude: 60, offset: Math.PI / 1.5 }
      ];

      threads.forEach((thread) => {
        ctx.beginPath();
        ctx.strokeStyle = thread.color;
        ctx.lineWidth = 1.8;

        for (let x = 0; x < width; x += 6) {
          let angle = x * thread.frequency + phase + thread.offset;
          let y = height / 2 + Math.sin(angle) * thread.amplitude;

          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 250) {
            const pull = (1 - dist / 250) * 20;
            y += (mouseRef.current.y - y > 0 ? pull : -pull);
          }

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="woven-canvas" />;
}
