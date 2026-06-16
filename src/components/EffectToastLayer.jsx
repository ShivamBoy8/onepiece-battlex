import React from "react";

export default function EffectToastLayer({ toasts }) {
  return (
    <div className="fixed top-22 left-1/2 -translate-x-1/2 z-[200] flex flex-col items-center gap-1.5 pointer-events-none">
      {toasts.map(t => (
        <div
          key={t.id}
          className={`toast-pop whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-bold border shadow-lg
            ${t.tone === "bad"
              ? "bg-[#0a0500]/90 border-[#ff6b35]/60 text-[#ff6b35]"
              : "bg-[#0a101c]/90 border-[#e2c25e]/60 text-[#e2c25e]"}`}
        >
          {t.text}
        </div>
      ))}
      <style>{`
        .toast-pop { animation: toastPop 2.4s ease forwards; }
        @keyframes toastPop {
          0%   { opacity: 0; transform: translateY(8px) scale(0.92); }
          12%  { opacity: 1; transform: translateY(0) scale(1); }
          78%  { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-12px) scale(0.96); }
        }
      `}</style>
    </div>
  );
}