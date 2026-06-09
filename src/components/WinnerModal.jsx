import React, { useState } from "react";


import win1 from "../assets/win/win1.jpeg"
import win2 from "../assets/win/win2.jpeg";
import win3 from "../assets/win/win3.png";
import win4 from "../assets/win/win4.webp";


import lose1 from "../assets/lose/lose1.jpeg";
import lose2 from "../assets/lose/lose2.jpeg";
import lose3 from "../assets/lose/lose3.jpeg";
import lose4 from "../assets/lose/lose4.png";


const WIN_IMAGES  = [win1, win2, win3, win4];
const LOSE_IMAGES = [lose1, lose2, lose3, lose4];


const getRandomImage = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ════════════════════════════════════════════════
const WinnerModal = ({
  humanScore,
  computerScore,
  humanTeam,
  computerTeam,
  onPlayAgain,
}) => {
  const winner =
    humanScore > computerScore ? "human" :
    computerScore > humanScore ? "computer" : "tie";

  const scoreDiff = Math.abs(humanScore - computerScore);

  const [resultImage] = useState(() => {
    if (winner === "human")    return getRandomImage(WIN_IMAGES);
    if (winner === "computer") return getRandomImage(LOSE_IMAGES);
    return null;
  });

  const content =
    winner === "human"
      ? {
          title:      "VICTORY!",
          subtitle:   "THE KING OF THE PIRATES",
          message:    `Your crew dominated with ${humanScore} bounty!`,
          emoji:      "🏆",
          accent:     "#51a465",
          buttonText: "SAIL AGAIN ⚓",
        }
      : winner === "computer"
      ? {
          title:      "DEFEAT!",
          subtitle:   "THE SEAS REMAIN UNCONQUERED",
          message:    `The enemy crew claims ${computerScore} bounty!`,
          emoji:      "💀",
          accent:     "#c0392b",
          buttonText: "CHALLENGE AGAIN 🎌",
        }
      : {
          title:      "DRAW!",
          subtitle:   "THE SEA DECIDES A REMATCH",
          message:    `Both crews stand at ${humanScore} bounty!`,
          emoji:      "⚖️",
          accent:     "#e2c25e",
          buttonText: "REMATCH 🎴",
        };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3">

 
      <div
        className="
          relative w-full max-w-3xl
          bg-[#080f18] border border-[#2a3a4a] rounded-2xl overflow-hidden
          flex flex-row landscape:flex-row portrait:flex-row
        "
        style={{ maxHeight: "95vh" }}
      >

     
        <div
          className="
            shrink-0 bg-[#060c14]
            flex items-center justify-center overflow-hidden
            portrait:w-[38%] portrait:p-2
            landscape:w-[45%] landscape:p-2
          "
        >
          {resultImage ? (
            <img
              src={resultImage}
              alt={winner}
              className="
                rounded-lg object-cover object-center w-full
                portrait:max-h-[260px]
                landscape:max-h-[380px]
              "
            />
          ) : (
            <div className="text-6xl flex items-center justify-center w-full py-8">
              ⚖️
            </div>
          )}
        </div>

       
        <div
          className="
            flex flex-col justify-between overflow-y-auto
            portrait:w-[62%] portrait:p-3
            landscape:w-[55%] landscape:p-6
          "
        >

        
          <div className="mb-2 portrait:mb-1">
            <div className="portrait:text-xl landscape:text-3xl mb-1">{content.emoji}</div>
            <h2
              className="font-black tracking-widest leading-none portrait:text-2xl landscape:text-5xl"
              style={{ color: content.accent }}
            >
              {content.title}
            </h2>
            <p className="text-white/50 uppercase tracking-widest portrait:text-[9px] landscape:text-xs mt-1">
              {content.subtitle}
            </p>
          </div>

          
          <div className="bg-black/40 rounded-xl flex items-center justify-between gap-2 mb-2 portrait:p-2 landscape:p-4">
            <div className="text-center flex-1">
              <div className="font-bold text-green-400 portrait:text-lg landscape:text-3xl">
                {humanScore}
              </div>
              <div className="text-white/50 uppercase tracking-wide portrait:text-[8px] landscape:text-[10px] mt-1">
                Your Bounty
              </div>
            </div>
            <div className="font-black text-[#e2c25e] portrait:text-sm landscape:text-2xl">VS</div>
            <div className="text-center flex-1">
              <div className="font-bold text-orange-400 portrait:text-lg landscape:text-3xl">
                {computerScore}
              </div>
              <div className="text-white/50 uppercase tracking-wide portrait:text-[8px] landscape:text-[10px] mt-1">
                Enemy Bounty
              </div>
            </div>
          </div>

      
          {winner !== "tie" && (
            <div className="text-center text-white/50 bg-black/30 rounded-lg mb-2 portrait:py-1 portrait:text-[9px] landscape:py-2 landscape:text-xs">
              Margin of{" "}
              <span className="font-bold text-[#e2c25e]">{scoreDiff}</span>{" "}
              bounty points
            </div>
          )}

     
          <div className="flex justify-center gap-3 text-white/40 mb-2 portrait:text-[9px] landscape:text-xs">
            <span>🏴‍☠️ {humanTeam.length}/5</span>
            <span>🐉 {computerTeam.length}/5</span>
          </div>

          {/* Winner Message — hide on portrait to save space */}
          <p className="text-white/60 italic text-center mb-2 portrait:hidden landscape:block landscape:text-sm">
            {content.message}
          </p>


          <button
            onClick={onPlayAgain}
            className="w-full rounded-full font-black tracking-widest transition-all duration-200 hover:opacity-90 active:scale-95 mb-2 portrait:py-2 portrait:text-sm landscape:py-3 landscape:text-base"
            style={{
              background: `linear-gradient(135deg, ${content.accent}, ${content.accent}aa)`,
              color: "#080f18",
            }}
          >
            {content.buttonText}
          </button>

          {/* Tagline */}
          <p className="text-center font-black tracking-[0.2em] uppercase text-[#e2c25e]/60 portrait:text-[8px] landscape:text-xs">
            "The One Piece is Real!"
          </p>

        </div>
      </div>
    </div>
  );
};

export default WinnerModal;