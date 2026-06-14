import { useEffect, useState } from "react";

const MESSAGES = [
  { icon: "✨", title: "Reminder", body: "You are iconic." },
  { icon: "⚠️", title: "Warning", body: "Too much slay detected." },
  { icon: "🏆", title: "Achievement", body: "Survived middle school." },
  { icon: "💖", title: "System", body: "Aura levels: maximum." },
  { icon: "🎂", title: "Update", body: "Cake protocol initialized." },
  { icon: "📸", title: "Memory", body: "+1 main-character moment." },
];

type Notif = { id: number; icon: string; title: string; body: string };

export function FakeNotifications() {
  const [notifs, setNotifs] = useState<Notif[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const m = MESSAGES[i % MESSAGES.length];
      const id = Date.now();
      setNotifs((n) => [...n, { id, ...m }].slice(-3));
      setTimeout(() => setNotifs((n) => n.filter((x) => x.id !== id)), 5000);
      i++;
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3 max-w-[300px] pointer-events-none">
      {notifs.map((n) => (
        <div
          key={n.id}
          className="animate-notif-in bg-white/90 backdrop-blur-md border border-bubblegum/30 rounded-2xl p-3 shadow-2xl flex items-start gap-3"
        >
          <div className="size-9 rounded-full bg-gradient-to-br from-bubblegum to-lavender flex items-center justify-center text-lg shrink-0">
            {n.icon}
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-pixel uppercase tracking-widest text-bubblegum">{n.title}</p>
            <p className="text-sm font-medium text-zinc-800 leading-tight">{n.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
