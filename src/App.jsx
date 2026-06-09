import React, { useEffect, useState, useRef } from "react";
import AllCard from "./components/allCard";
import Navbar from "./components/Navbar";
import Crew from "./components/Crew";
import vs from "./assets/logo/vs.png";
import WinnerModal from "./components/WinnerModal";

export default function App() {
  const [humanPicked, setHumanPicked]       = useState(null);
  const [computerPicked, setComputerPicked] = useState(null);
  const [humanScore, setHumanScore]         = useState(0);
  const [computerScore, setComputerScore]   = useState(0);
  const [pickTurn, setPickTurn]             = useState(true);
  const [round, setRound]                   = useState(1);
  const [humanTeam, setHumanTeam]           = useState([]);
  const [computerTeam, setComputerTeam]     = useState([]);
  const [gameOver, setGameOver]             = useState(false);

  // ── useRef fix: always fresh team values for room effect ──
  const humanTeamRef    = useRef(humanTeam);
  const computerTeamRef = useRef(computerTeam);

  useEffect(() => { humanTeamRef.current    = humanTeam;    }, [humanTeam]);
  useEffect(() => { computerTeamRef.current = computerTeam; }, [computerTeam]);

  // ── used card ids ──
  const usedCardIds = [
    ...humanTeam.map(card => card.id),
    ...computerTeam.map(card => card.id),
  ];

  // ── room effect ──
  const applyRoomEffect = (myTeam, enemyTeam, isHumanTurn) => {
    if (myTeam.length === 0 || enemyTeam.length === 0) return;

    // find weakest card in my team
    let weakestIndex = 0;
    for (let i = 1; i < myTeam.length; i++) {
      if (myTeam[i].totalPower < myTeam[weakestIndex].totalPower) {
        weakestIndex = i;
      }
    }

    // pick random opponent card
    const randomEnemyIndex = Math.floor(Math.random() * enemyTeam.length);
    const weakestCard = myTeam[weakestIndex];
    const enemyCard   = enemyTeam[randomEnemyIndex];

    // swap cards
    const newMyTeam    = [...myTeam];
    const newEnemyTeam = [...enemyTeam];
    newMyTeam[weakestIndex]        = enemyCard;
    newEnemyTeam[randomEnemyIndex] = weakestCard;

    // score change using delta (clean approach)
    const myDelta    = enemyCard.totalPower - weakestCard.totalPower;
    const enemyDelta = weakestCard.totalPower - enemyCard.totalPower;

    if (isHumanTurn) {
      setHumanTeam(newMyTeam);
      setComputerTeam(newEnemyTeam);
      setHumanScore(prev    => prev + myDelta);
      setComputerScore(prev => prev + enemyDelta);
    } else {
      setComputerTeam(newMyTeam);
      setHumanTeam(newEnemyTeam);
      setComputerScore(prev => prev + myDelta);
      setHumanScore(prev    => prev + enemyDelta);
    }
  };

  // ── card select handler ──
  const handleCardSelect = (selectedCard, isHumanTurn) => {
    const scoreToAdd = selectedCard.totalPower || 0;
    const team       = isHumanTurn ? humanTeam : computerTeam;

    // synergy bonus calculation
    let bonus = 0;

    if (selectedCard.type === "powerup") {
      const hasSynergy = selectedCard.synergyWith?.some(id =>
        team.some(card => card.id === id)
      );
      if (hasSynergy) {
        bonus += selectedCard.synergyBonus || 0;
      }
    } else {
      const matchingPowerCards = team.filter(
        card =>
          card.type === "powerup" &&
          selectedCard.powerCard?.includes(card.id)
      );
      matchingPowerCards.forEach(card => {
        bonus += card.synergyBonus || 0;
      });
    }

    if (isHumanTurn) {
      setHumanPicked(selectedCard);
      const newHumanTeam = [...humanTeam, selectedCard];
      setHumanTeam(newHumanTeam);
      setHumanScore(prev => prev + scoreToAdd + bonus);

      if (selectedCard.id === "pm_ope") {
        // ✅ use ref for enemy team — never stale
        applyRoomEffect(newHumanTeam, computerTeamRef.current, true);
      }

      setPickTurn(false);

    } else {
      setComputerPicked(selectedCard);
      const newComputerTeam = [...computerTeam, selectedCard];
      setComputerTeam(newComputerTeam);
      setComputerScore(prev => prev + scoreToAdd + bonus);

      if (selectedCard.id === "pm_ope") {
        // ✅ use ref for enemy team — never stale
        applyRoomEffect(newComputerTeam, humanTeamRef.current, false);
      }

      const nextRound = round + 1;
      setRound(nextRound);
      setPickTurn(true);
    }
  };

  // ── game over check ──
  useEffect(() => {
    if (round > 5) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setGameOver(true);
          });
        });
      });
    }
  }, [round]);

  // ── reset ──
  const resetGame = () => {
    setHumanPicked(null);
    setComputerPicked(null);
    setHumanScore(0);
    setComputerScore(0);
    setPickTurn(true);
    setRound(1);
    setHumanTeam([]);
    setComputerTeam([]);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Navbar />

      <div className="pt-25 sm:pt-32 md:pt-37 px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">

          <Crew
            colour="#081412"
            textcolor="#51a465"
            team={humanTeam}
            score={humanScore}
            isActive={pickTurn}
          />

          <div className="flex flex-col items-center gap-1">
            <img
              src={vs}
              alt="VS"
              className="w-12 h-12 sm:w-20 sm:h-20 object-contain transition-transform duration-300 hover:scale-110"
            />
            <div className="bg-[#0a101c] border border-[#e2c25e] rounded-full px-3 py-1 shadow-lg">
              <span className="text-[#e2c25e] font-semibold text-sm">
                Round <span className="text-white text-sm">{round}</span>/5
              </span>
            </div>
          </div>

          <Crew
            colour="#141210"
            textcolor="#9b7540"
            team={computerTeam}
            score={computerScore}
            isActive={!pickTurn}
          />

        </div>
      </div>

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