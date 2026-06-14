import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { SparkleCursor } from "@/components/SparkleCursor";
import { FakeNotifications } from "@/components/FakeNotifications";
import { ChaosButton } from "@/components/ChaosButton";
import { InteractiveCake } from "@/components/InteractiveCake";

import polaroidBesties from "@/assets/polaroid-besties.jpg";
import babyMom from "@/assets/baby-mom.jpg";
import age5 from "@/assets/age-5.jpg";
import age10 from "@/assets/age-10.jpg";
import age12 from "@/assets/age-12.jpg";
import age14 from "@/assets/age-14.jpg";
import lore1 from "@/assets/lore-1.jpg";
import lore2 from "@/assets/lore-2.jpg";
import lore3 from "@/assets/lore-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Level 14 Unlocked ✨ — A Birthday Card" },
      {
        name: "description",
        content:
          "An interactive 14th birthday universe — bedroom desk chaos, memory tunnel, and one very dangerous red button.",
      },
      { property: "og:title", content: "Level 14 Unlocked ✨" },
      { property: "og:description", content: "Click around. It's her birthday." },
    ],
  }),
  component: BirthdayCard,
});

const LORE = [
  {
    img: lore1,
    tag: "CERTIFIED MENACE",
    accent: "border-bubblegum",
    title: "The Sibling Sabotage Arc",
    sub: "98% Match for Drama",
  },
  {
    img: lore2,
    tag: "TOP PICKS",
    accent: "border-lavender",
    title: "Funniest Moments: Vol 14",
    sub: "Most Rewatched",
  },
  {
    img: lore3,
    tag: "GLOBAL PHENOMENON",
    accent: "border-hologram",
    title: "Aura Check: Infinite",
    sub: "Trending Now",
  },
];

const AGES = [
  { n: "05", img: age5, color: "border-bubblegum", textColor: "text-bubblegum", label: "Baby Era", note: "Cake on face. World domination plan v1.", tilt: "rotate-3", offsetY: "" },
  { n: "08", img: age10, color: "border-yellow-300", textColor: "text-yellow-500", label: "Pure Sunshine", note: "Roller skates and zero fear.", tilt: "-rotate-2", offsetY: "translate-y-12" },
  { n: "10", img: age10, color: "border-lavender", textColor: "text-lavender", label: "Middle School…", note: "Double digits. Allegedly grown.", tilt: "rotate-2", offsetY: "" },
  { n: "12", img: age12, color: "border-hologram", textColor: "text-hologram", label: "Main Character Energy", note: "Headphones permanently attached.", tilt: "rotate-6", offsetY: "translate-y-8" },
  { n: "14", img: age14, color: "border-bubblegum", textColor: "text-bubblegum", label: "LEVEL 14", note: "You. Now. Iconic.", tilt: "-rotate-3", offsetY: "" },
];

const STATS = [
  { label: "Drama", val: 98, color: "from-bubblegum to-chaos-red" },
  { label: "Slay", val: 100, color: "from-lavender to-bubblegum" },
  { label: "Sleep Schedule", val: 2, color: "from-hologram to-lavender" },
  { label: "Annoying Level", val: 99, color: "from-yellow-300 to-bubblegum" },
  { label: "Aura", val: 100, color: "from-bubblegum via-lavender to-hologram" },
];

const FORTUNES = [
  "At age 14 you unlock elite playlist-making powers.",
  "A snack will betray you this week. Stay alert.",
  "Your group chat will explode at exactly 11:47 pm.",
  "You will out-style someone without trying. Again.",
  "Future-you says: keep the chaos goblin alive.",
  "Today's vibe: criminally cute.",
];

function BirthdayCard() {
  const [bday, setBday] = useState(false);
  const [fortune, setFortune] = useState<string | null>(null);
  const [replayKey, setReplayKey] = useState(0);

  // Replay = scroll top + reset loading
  useEffect(() => {
    if (replayKey > 0) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [replayKey]);

  return (
    <div key={replayKey} className="relative min-h-screen bg-[#FDF4FF] text-zinc-900 overflow-x-hidden font-body">
      <LoadingScreen />
      <SparkleCursor />
      <FakeNotifications />

      {/* TOP TICKER */}
      <div className="fixed top-0 inset-x-0 z-40 bg-midnight text-bubblegum font-pixel text-sm tracking-widest border-b border-bubblegum/30 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-2">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0">
              {[
                "✦ LEVEL 14 UNLOCKED",
                "✦ AURA + INFINITY",
                "✦ CHAOS PROTOCOL ACTIVE",
                "✦ DO NOT FEED AFTER MIDNIGHT",
                "✦ MAIN CHARACTER LOADING",
                "✦ HAPPY BIRTHDAY",
              ].map((t) => (
                <span key={t + k} className="px-8">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* HERO — BEDROOM DESK */}
      <section className="relative min-h-[100vh] pt-16 w-full overflow-hidden bg-gradient-to-b from-lavender/30 via-bubblegum/10 to-white">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-[8%] w-28 h-28 border-2 border-bubblegum rotate-12 rounded-lg" />
          <div className="absolute bottom-24 right-[6%] w-40 h-40 border-2 border-hologram -rotate-6 rounded-full" />
          <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-bubblegum rounded-full" />
        </div>

        <div className="container mx-auto h-full relative flex items-center justify-center min-h-[85vh] px-4">
          <h1 className="font-display text-6xl md:text-9xl text-center z-10 leading-none drop-shadow-[6px_6px_0px_var(--bubblegum)]">
            BIRTHDAY
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bubblegum via-lavender to-hologram animate-shimmer-bg">
              LORE
            </span>
          </h1>

          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Polaroid */}
            <div className="absolute top-[14%] left-[6%] md:left-[12%] animate-float pointer-events-auto" style={{ ["--r" as never]: "-5deg" }}>
              <div className="bg-white p-3 shadow-2xl rotate-[-8deg] hover:rotate-0 hover:scale-110 transition-transform cursor-pointer">
                <img src={polaroidBesties} alt="Bestie polaroid" width={128} height={128} loading="lazy" className="w-32 h-32 object-cover" />
                <p className="font-hand text-center pt-2 text-zinc-700 text-lg">Bestie 4L 💞</p>
              </div>
            </div>

            {/* Headphones */}
            <div className="absolute top-[12%] right-[8%] md:right-[20%] animate-float pointer-events-auto" style={{ ["--r" as never]: "-2deg" }}>
              <div className="w-24 h-24 rounded-full bg-chrome/60 backdrop-blur-sm border-2 border-white flex items-center justify-center hover:bg-chrome shadow-xl cursor-pointer text-3xl">
                🎧
              </div>
            </div>

            {/* Jellyfish lamp */}
            <div className="absolute bottom-[14%] left-[8%] md:left-[15%] animate-float pointer-events-auto" style={{ ["--r" as never]: "10deg" }}>
              <div className="w-20 h-32 bg-gradient-to-b from-hologram/70 to-lavender/40 rounded-t-full border-b-8 border-lavender animate-pulse shadow-2xl shadow-lavender/40" />
            </div>

            {/* Diary */}
            <div className="absolute top-[45%] left-[3%] md:left-[5%] animate-float pointer-events-auto" style={{ ["--r" as never]: "0deg" }}>
              <div className="bg-lavender p-1 rotate-12 shadow-lg">
                <div className="bg-white border-2 border-dashed border-bubblegum px-4 py-2 font-hand text-bubblegum text-xl">
                  Keep Out!!
                </div>
              </div>
            </div>

            {/* Sticker tag */}
            <div className="absolute bottom-[12%] right-[10%] md:right-[18%] animate-float pointer-events-auto" style={{ ["--r" as never]: "3deg" }}>
              <div className="bg-bubblegum text-white font-pixel uppercase tracking-widest text-sm px-4 py-2 rounded-full border-2 border-white shadow-xl rotate-[-6deg]">
                ★ Main Character ★
              </div>
            </div>

            {/* Small sparkles */}
            <span className="absolute top-1/4 right-1/3 text-3xl animate-flicker">✨</span>
            <span className="absolute bottom-1/3 left-1/3 text-2xl animate-flicker" style={{ animationDelay: "0.5s" }}>★</span>
            <span className="absolute top-1/2 right-1/4 text-2xl animate-flicker" style={{ animationDelay: "1s" }}>♡</span>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 font-pixel text-xs uppercase tracking-widest animate-flicker">
          scroll to enter the universe ↓
        </div>
      </section>

      {/* HER LORE — NETFLIX */}
      <section className="py-24 bg-midnight text-white">
        <div className="px-6 md:px-12 mb-10 max-w-7xl mx-auto">
          <h2 className="font-pixel text-bubblegum text-2xl tracking-widest">
            WHAT'S NEW ON: THE MAIN CHARACTER
          </h2>
          <div className="h-1 w-full bg-gradient-to-r from-bubblegum via-lavender to-transparent mt-3 rounded-full" />
        </div>

        <div className="flex gap-6 px-6 md:px-12 overflow-x-auto pb-12 no-scrollbar snap-x">
          {LORE.map((l) => (
            <div key={l.title} className="min-w-[300px] md:min-w-[360px] group cursor-pointer snap-start">
              <div className={`relative aspect-[16/10] rounded-md overflow-hidden border-2 border-transparent transition-all group-hover:scale-105 ${l.accent.replace("border-", "group-hover:border-")}`}>
                <img src={l.img} alt={l.title} width={800} height={500} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-pixel text-xs text-bubblegum tracking-widest">{l.tag}</p>
                  <p className="font-display text-lg leading-tight mt-1">{l.title}</p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-3 font-pixel uppercase tracking-wider">{l.sub}</p>
            </div>
          ))}

          {/* 14 things we love */}
          <div className="min-w-[300px] md:min-w-[360px] snap-start">
            <div className="aspect-[16/10] rounded-md p-6 bg-gradient-to-br from-bubblegum via-lavender to-hologram text-midnight flex flex-col justify-between">
              <p className="font-pixel text-xs uppercase tracking-widest">Limited Series</p>
              <div>
                <p className="font-display text-2xl leading-none">14 Things We Love About You</p>
                <p className="text-xs font-pixel mt-2 opacity-70">Hover the title cards →</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS DASHBOARD */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h3 className="font-display text-4xl md:text-5xl leading-none">PERSONALITY STATS</h3>
            <p className="font-pixel text-zinc-500 uppercase tracking-widest text-sm">live readings ↓</p>
          </div>
          <div className="space-y-5">
            {STATS.map((s) => (
              <div key={s.label} className="grid grid-cols-[140px_1fr_60px] md:grid-cols-[200px_1fr_80px] gap-4 items-center">
                <span className="font-pixel uppercase tracking-widest text-sm md:text-base">{s.label}</span>
                <div className="h-4 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200">
                  <div
                    className={`h-full bg-gradient-to-r ${s.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${s.val}%` }}
                  />
                </div>
                <span className="font-display text-right">{s.val === 100 ? "MAX" : `${s.val}%`}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMORY TUNNEL */}
      <section className="py-24 bg-lavender/15">
        <div className="text-center mb-16 px-4">
          <span className="font-pixel text-lavender block mb-2 tracking-widest uppercase">[ scroll through time → ]</span>
          <h3 className="font-hand text-5xl md:text-7xl text-zinc-900">Timeline of a Queen</h3>
        </div>

        <div className="flex items-center gap-16 md:gap-24 px-[10vw] md:px-[20vw] overflow-x-auto pb-20 snap-x no-scrollbar">
          {AGES.map((a) => (
            <div key={a.n} className={`snap-center flex-shrink-0 ${a.offsetY}`}>
              <div className="relative">
                <span className={`absolute -top-14 -left-2 font-display text-7xl opacity-30 ${a.textColor}`}>
                  {a.n}
                </span>
                <div className={`w-64 md:w-72 aspect-[3/4] bg-white p-3 shadow-2xl border-b-8 ${a.color} ${a.tilt}`}>
                  <img src={a.img} alt={`Age ${a.n}`} width={600} height={800} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="mt-6 max-w-[18ch]">
                  <p className="font-pixel uppercase tracking-widest text-sm text-zinc-500">Age {a.n}</p>
                  <p className="font-hand text-2xl text-zinc-900 leading-tight">{a.label}</p>
                  <p className="text-sm text-zinc-600 mt-1">{a.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CAKE */}
      <section className="py-24 bg-white text-center">
        <p className="font-pixel uppercase tracking-widest text-lavender text-sm mb-3">ritual mode</p>
        <h3 className="font-display text-4xl md:text-6xl mb-12">Blow Out the Candles</h3>
        <InteractiveCake />

        {!bday ? (
          <button
            onClick={() => setBday(true)}
            className="mt-12 font-pixel uppercase tracking-widest text-sm bg-midnight text-bubblegum px-6 py-3 rounded-full hover:scale-105 transition-transform"
          >
            ✦ reveal the message ✦
          </button>
        ) : (
          <div className="mt-12 max-w-2xl mx-auto px-6 animate-notif-in">
            <p className="font-hand text-3xl md:text-4xl text-zinc-800 leading-tight">
              "Wishing you a year of stupid jokes, loud playlists, and being unapologetically yourself. You earned this level. Now go cause some chaos."
            </p>
          </div>
        )}
      </section>

      {/* FORTUNE MACHINE */}
      <section className="py-24 bg-gradient-to-br from-bubblegum/20 via-lavender/20 to-hologram/20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-pixel uppercase tracking-widest text-zinc-500 text-sm mb-3">birthday fortune machine</p>
          <h3 className="font-display text-4xl md:text-5xl mb-8">PEEK INTO LEVEL 15</h3>
          <button
            onClick={() => setFortune(FORTUNES[Math.floor(Math.random() * FORTUNES.length)])}
            className="font-pixel uppercase tracking-widest bg-midnight text-white px-8 py-4 rounded-full hover:scale-105 transition-transform border-4 border-bubblegum shadow-[0_8px_0_0_var(--bubblegum)] active:translate-y-2 active:shadow-none"
          >
            🔮 generate fortune
          </button>
          {fortune && (
            <div className="mt-10 bg-white border-4 border-dashed border-lavender rounded-3xl p-8 rotate-[-1deg] animate-notif-in shadow-xl">
              <p className="font-hand text-2xl md:text-3xl text-zinc-800">"{fortune}"</p>
            </div>
          )}
        </div>
      </section>

      {/* CHAOS BUTTON */}
      <section className="py-32 flex flex-col items-center justify-center bg-white relative overflow-hidden">
        <p className="font-pixel text-zinc-400 mb-3 uppercase tracking-widest">Final Warning</p>
        <h3 className="font-display text-3xl md:text-5xl mb-10 text-center px-6">THE CHAOS INITIATOR</h3>
        <ChaosButton />
        <div className="mt-12 flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-bubblegum animate-bounce" />
          <div className="w-2 h-2 rounded-full bg-lavender animate-bounce [animation-delay:100ms]" />
          <div className="w-2 h-2 rounded-full bg-hologram animate-bounce [animation-delay:200ms]" />
        </div>
        <p className="mt-6 font-pixel text-xs text-zinc-400 uppercase tracking-widest max-w-sm text-center px-4">
          warning: pressing this button may trigger unwarranted slay
        </p>
      </section>

      {/* NIGHT SKY ENDING */}
      <footer className="bg-midnight pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              className="absolute bg-white rounded-full animate-flicker"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[120%] aspect-[2/1] bg-gradient-to-t from-bubblegum/30 via-lavender/10 to-transparent rounded-[50%] blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-hand text-3xl md:text-5xl text-lavender mb-8 leading-tight">
              "No matter how big you grow, you'll always be my tiny chaos goblin."
            </p>
            <h4 className="font-display text-bubblegum text-2xl md:text-3xl tracking-tight mb-12 animate-flicker">
              HAPPY BIRTHDAY ✨
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 opacity-90">
              {[babyMom, age10, age12, age14].map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border border-white/20"
                  style={{ transform: `rotate(${(i - 1.5) * 3}deg)` }}
                >
                  <img src={img} alt="" width={300} height={300} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <button
              onClick={() => setReplayKey((k) => k + 1)}
              className="mt-16 bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white font-pixel uppercase tracking-widest px-8 py-3 rounded-full transition-all"
            >
              replay the chaos ✨
            </button>

            <p className="mt-12 font-pixel text-xs text-zinc-600 uppercase tracking-widest">
              Made with chaos & love · Level 14 session active
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
