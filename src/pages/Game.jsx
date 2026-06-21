import React, { useEffect, useState, useRef } from "react";
import AllCard from "../components/AllCard";
import Navbar from "../components/Navbar";
import ScoreBoard from "../components/ScoreBoard";
import WinnerModal from "../components/WinnerModal";
import { useCardSelect } from "../hooks/useCardSelect";
import overtaken from "../assets/music/overtaken.mp3";
import EffectToastLayer from "../components/EffectToastLayer";

export default function Game() {
  const bgMusic      = useRef(null);
  const musicStarted = useRef(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    bgMusic.current        = new Audio(overtaken);
    bgMusic.current.loop   = true;
    bgMusic.current.volume = 0.5;
    return () => { bgMusic.current.pause(); bgMusic.current = null; };
  }, []);

  const startMusic = () => {
    if (!musicStarted.current && bgMusic.current) {
      bgMusic.current.play().catch(() => {});
      musicStarted.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener("click", startMusic, { once: true });
    return () => window.removeEventListener("click", startMusic);
  }, []);

  const toggleMute = () => {
    startMusic();
    if (bgMusic.current) {
      bgMusic.current.muted = !muted;
      setMuted(prev => !prev);
    }
  };

  const {
    humanScore, computerScore, pickTurn, round,
    humanTeam, computerTeam, gameOver, usedCardIds, toasts,
    handleCardSelect, resetGame: resetGameState,
  } = useCardSelect();

  useEffect(() => {
    if (gameOver && bgMusic.current) bgMusic.current.pause();
  }, [gameOver]);

  const resetGame = () => {
    resetGameState();
    if (bgMusic.current) {
      bgMusic.current.currentTime = 0;
      bgMusic.current.play().catch(() => {});
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Navbar toggleMute={toggleMute} muted={muted} />
       {
        !gameOver && (
          <EffectToastLayer toasts={toasts} />
        )
       }

      <ScoreBoard
        humanTeam={humanTeam}
        humanScore={humanScore}
        pickTurn={pickTurn}
        computerTeam={computerTeam}
        computerScore={computerScore}
        round={round}
      />

      {!gameOver && (
        <div className="pt-2 flex justify-center">
          <AllCard
            onCardSelect={handleCardSelect}
            pickTurn={pickTurn}
            round={round}
            usedCardIds={usedCardIds}
          />
        </div>
      )}

      {gameOver && (
        <WinnerModal
          humanScore={humanScore}
          computerScore={computerScore}
          humanTeam={humanTeam}
          computerTeam={computerTeam}
          onPlayAgain={resetGame}
        />
      )}
    </div>
  );
}