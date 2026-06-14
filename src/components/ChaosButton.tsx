import { useState } from "react";
import confetti from "canvas-confetti";

const POPUPS = [
  "YOU ARE NOW OFFICIALLY OLD",
  "CRINGE LEVEL +1000",
  "+9999 AURA",
  "MAIN CHARACTER ENERGY DETECTED",
  "DISCO MODE: ENGAGED",
  "RAINING CUPCAKES 🧁",
];

export function ChaosButton() {
  const [popup, setPopup] = useState<string | null>(null);

  const press = () => {
    const colors = ["#FF77BC", "#D8B4FE", "#A5B4FC", "#FDE68A", "#FFFFFF"];
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors,
    });
    setTimeout(() => {
      confetti({ particleCount: 80, angle: 60, spread: 70, origin: { x: 0 }, colors });
      confetti({ particleCount: 80, angle: 120, spread: 70, origin: { x: 1 }, colors });
    }, 250);

    const msg = POPUPS[Math.floor(Math.random() * POPUPS.length)];
    setPopup(msg);
    setTimeout(() => setPopup(null), 2500);
  };

  return (
    <div className="relative flex flex-col items-center">
      <button onClick={press} className="relative group cursor-pointer outline-none">
        <div className="absolute -inset-8 bg-chaos-red/30 rounded-full animate-ping blur-xl" />
        <div className="relative w-48 h-48 rounded-full bg-chaos-red border-8 border-white shadow-[0_20px_0_0_#991B1B] group-active:shadow-none group-active:translate-y-[20px] transition-all flex items-center justify-center">
          <span className="font-display text-white text-center leading-none text-2xl drop-shadow-lg">
            DO NOT
            <br />
            PRESS
          </span>
        </div>
      </button>

      {popup && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none">
          <div className="animate-notif-in bg-midnight text-white font-display text-3xl md:text-5xl px-10 py-8 rounded-3xl border-4 border-bubblegum shadow-2xl rotate-[-3deg] text-center">
            {popup}
          </div>
        </div>
      )}
    </div>
  );
}
