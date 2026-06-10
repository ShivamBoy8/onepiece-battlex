import React, { useEffect, useState, useRef } from "react";
import AllCard from "./components/allCard";
import Navbar from "./components/Navbar";
import ScoreBoard from "./components/ScoreBoard";
import WinnerModal from "./components/WinnerModal";
import { useCardSelect } from "./hooks/useCardSelect";

export default function App() {
const {
    humanScore,
    computerScore,
    pickTurn,
    round,
    humanTeam,
    computerTeam,
    gameOver,
    usedCardIds,
    handleCardSelect,
    resetGame,
  } = useCardSelect()

  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Navbar />

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
///////