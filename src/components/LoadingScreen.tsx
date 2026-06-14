import { useEffect, useState } from "react";

const LINES = [
  "INITIALIZING…",
  "LOADING CHAOS…",
  "LOADING MEMORIES…",
  "LOADING IVY…",
];

export function LoadingScreen() {
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => Math.min(i + 1, LINES.length - 1)), 700);
    const end = setTimeout(() => setDone(true), 4200);
    return () => {
      clearInterval(t);
      clearTimeout(end);
    };
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-midnight flex flex-col items-center justify-center text-center px-6 animate-wipe">
      {/* glitter */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full animate-flicker"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <p className="font-pixel text-bubblegum text-2xl tracking-widest uppercase mb-6 animate-flicker">
          {LINES[idx]}
        </p>
        <div className="w-72 h-2 bg-white/10 rounded-full overflow-hidden mb-6 border border-white/20">
          <div className="h-full bg-gradient-to-r from-bubblegum via-lavender to-hologram animate-loading-bar" />
        </div>
        <p className="font-display text-white text-3xl md:text-5xl">
          ✨ LEVEL 14 UNLOCKED ✨
        </p>
        <p className="font-pixel text-zinc-500 text-xs uppercase tracking-widest mt-4">
          Press anywhere to enter the chaos
        </p>
      </div>
    </div>
  );
}
