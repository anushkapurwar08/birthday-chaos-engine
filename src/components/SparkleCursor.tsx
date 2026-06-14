import { useEffect, useRef } from "react";

export function SparkleCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    if (!layer) return;

    let last = 0;
    const handler = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last < 40) return;
      last = now;
      const s = document.createElement("span");
      const size = 8 + Math.random() * 10;
      const colors = ["#FF77BC", "#D8B4FE", "#A5B4FC", "#FDE68A"];
      s.style.cssText = `
        position: fixed;
        left: ${e.clientX - size / 2}px;
        top: ${e.clientY - size / 2}px;
        width: ${size}px;
        height: ${size}px;
        pointer-events: none;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        clip-path: polygon(50% 0, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0 50%, 40% 40%);
        animation: sparkle-pop 0.7s ease-out forwards;
        z-index: 9999;
      `;
      layer.appendChild(s);
      setTimeout(() => s.remove(), 700);
    };

    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return <div ref={ref} className="pointer-events-none fixed inset-0 z-[9998]" aria-hidden />;
}
