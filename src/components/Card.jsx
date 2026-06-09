import React, { useState } from "react";

const StatBar = ({ label, value, max = 100 }) => (
  <div className="flex items-center gap-2">
    <span className="text-[10px] text-gray-400 uppercase tracking-wider w-10 shrink-0">{label}</span>
    <div className="flex-1 h-1.5 bg-[#1a2535] rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#e2c25e] to-[#f2d67b] rounded-full transition-all duration-500"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
    <span className="text-[10px] text-[#e2c25e] font-bold w-6 text-right">{value}</span>
  </div>
);

const Card = ({
  image, desc, name, type = "char",
  str, haki, df, spd, stam, mind,
  flatBonus, synergyWith, synergyBonus, synergyDesc,
  powerCard,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const charStats = [
    { label: "STR",  value: str },
    { label: "HAKI", value: haki },
    { label: "DF",   value: df },
    { label: "SPD",  value: spd },
    { label: "STAM", value: stam },
    { label: "MIND", value: mind },
  ];

  return (
    <div className="relative flex flex-col bg-[#0c1623] rounded-xl border border-[#e2c25e] overflow-hidden w-full cursor-pointer transition-all duration-300 ease-out hover:border-[#f2d67b] hover:shadow-[0_0_18px_rgba(226,194,94,0.25)] active:scale-[0.98]">

      {/* Info toggle button */}
      <button
        onClick={(e) => { e.stopPropagation(); setShowInfo(v => !v); }}
        className="absolute top-2 right-2 z-20 w-6 h-6 flex items-center justify-center rounded-full bg-[#0c1623]/80 border border-[#e2c25e]/50 text-[#e2c25e] hover:bg-[#e2c25e] hover:text-[#0c1623] transition-all duration-200 text-xs font-bold"
      >
        {showInfo ? "✕" : "ⓘ"}
      </button>

      {/* Info overlay */}
      {showInfo && (
        <div className="absolute inset-0 z-10 bg-[#0c1623]/97 rounded-xl p-3 flex flex-col justify-center gap-2 border border-[#e2c25e]/30">
          <h3 className="text-[#e2c25e] font-bold text-xs text-center mb-1 line-clamp-1">{name}</h3>
          <p className="text-[10px] text-gray-400 text-center line-clamp-2 mb-1">{desc}</p>

          {type !== "powerup" ? (
            <div className="flex flex-col gap-1.5">
              {charStats.map(s => s.value != null && (
                <StatBar key={s.label} label={s.label} value={s.value} />
              ))}
              {powerCard?.length > 0 && (
                <p className="text-[9px] text-gray-500 text-center mt-1">
                  Synergizes with: <span className="text-[#e2c25e]/70">{powerCard.join(", ")}</span>
                </p>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center bg-[#1a2535] rounded-lg px-3 py-2">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Flat Bonus</span>
                <span className="text-[#e2c25e] font-bold text-base">+{flatBonus}</span>
              </div>
              {synergyBonus && (
                <div className="flex flex-col gap-1 bg-[#1a2535] rounded-lg px-3 py-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Synergy Bonus</span>
                    <span className="text-green-400 font-bold text-base">+{synergyBonus}</span>
                  </div>
                  {synergyDesc && (
                    <p className="text-[9px] text-gray-400 mt-0.5">{synergyDesc}</p>
                  )}
                </div>
              )}
              {synergyWith?.length > 0 && (
                <p className="text-[9px] text-gray-500 text-center">
                  Synergy with: <span className="text-[#e2c25e]/70">{synergyWith.join(", ")}</span>
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Image */}
      <div className="w-full aspect-[3/4] md:aspect-[3/3] overflow-hidden bg-[#0c1623] p-3">
        <img src={image} alt={name} className="w-full h-full object-cover object-top rounded-lg" />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-1 p-2 sm:p-3">
        <h2 className="text-sm sm:text-base lg:text-lg font-bold text-[#e2c25e] text-center line-clamp-1 w-full">
          {name}
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 text-center line-clamp-1 w-full">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;