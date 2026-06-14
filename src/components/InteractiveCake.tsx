import { useState } from "react";
import cakeImg from "@/assets/cake.png";

export function InteractiveCake() {
  const [candles, setCandles] = useState(14);
  const allOut = candles === 0;

  return (
    <div className="relative flex flex-col items-center gap-6">
      <div className="relative">
        <img
          src={cakeImg}
          alt="Pink 14th birthday cake"
          width={400}
          height={400}
          loading="lazy"
          className={`w-72 md:w-96 transition-all duration-700 ${
            allOut ? "brightness-50 saturate-50" : ""
          }`}
        />
        {!allOut && (
          <button
            onClick={() => setCandles((c) => Math.max(0, c - 1))}
            className="absolute inset-0 cursor-pointer"
            aria-label="Blow out a candle"
          />
        )}
      </div>

      <div className="text-center font-pixel uppercase tracking-widest text-lg">
        {allOut ? (
          <span className="text-bubblegum animate-flicker">✦ make a wish ✦</span>
        ) : (
          <span className="text-zinc-700">
            Candles left: <span className="text-chaos-red">{candles}</span> · tap the cake
          </span>
        )}
      </div>
    </div>
  );
}
