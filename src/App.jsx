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

  // ── refs so applyRoomEffect always sees fresh team values ──
  const humanTeamRef    = useRef(humanTeam);
  const computerTeamRef = useRef(computerTeam);

  useEffect(() => { humanTeamRef.current    = humanTeam;    }, [humanTeam]);
  useEffect(() => { computerTeamRef.current = computerTeam; }, [computerTeam]);

  // ── used card ids to prevent duplicates ──
  const usedCardIds = [
    ...humanTeam.map(card => card.id),
    ...computerTeam.map(card => card.id),
  ];

  // ── fresh score from team array — bonus is baked into totalPower ──
  const calcTeamScore = (team) =>
    team.reduce((sum, card) => sum + (card.totalPower || 0), 0);

  // ── room effect: swap weakest in myTeam with random in enemyTeam ──
  const applyRoomEffect = (myTeam, enemyTeam, isHumanTurn) => {
    if (myTeam.length === 0 || enemyTeam.length === 0) return;

    // find weakest card in my team by totalPower
    let weakestIndex = 0;
    for (let i = 1; i < myTeam.length; i++) {
      if ((myTeam[i].totalPower || 0) < (myTeam[weakestIndex].totalPower || 0)) {
        weakestIndex = i;
      }
    }

    const randomEnemyIndex = Math.floor(Math.random() * enemyTeam.length);

    // copy both arrays
    const newMyTeam    = [...myTeam];
    const newEnemyTeam = [...enemyTeam];

    // swap using temp
    const temp                     = newMyTeam[weakestIndex];
    newMyTeam[weakestIndex]        = newEnemyTeam[randomEnemyIndex];
    newEnemyTeam[randomEnemyIndex] = temp;

    if (isHumanTurn) {
      setHumanTeam(newMyTeam);
      setComputerTeam(newEnemyTeam);
      // recalc scores fresh — bonus already baked into each card's totalPower
      setHumanScore(calcTeamScore(newMyTeam));
      setComputerScore(calcTeamScore(newEnemyTeam));
    } else {
      setComputerTeam(newMyTeam);
      setHumanTeam(newEnemyTeam);
      setComputerScore(calcTeamScore(newMyTeam));
      setHumanScore(calcTeamScore(newEnemyTeam));
    }
  };

  // ── main card select handler ──
  const handleCardSelect = (selectedCard, isHumanTurn) => {
    const baseScore = selectedCard.totalPower || 0;
    const team      = isHumanTurn ? humanTeam : computerTeam;

    // ── calculate synergy bonus ──
    let bonus = 0;

    if (selectedCard.type === "powerup") {
      // powerup picked: check if any synergy character already in team
      const hasSynergy = selectedCard.synergyWith?.some(id =>
        team.some(card => card.id === id)
      );
      if (hasSynergy) {
        bonus += selectedCard.synergyBonus || 0;
      }
    } else {
      // character picked: check if any powerup already in team synergises with it
      const matchingPowerCards = team.filter(
        card =>
          card.type === "powerup" &&
          selectedCard.powerCard?.includes(card.id)
      );
      matchingPowerCards.forEach(card => {
        bonus += card.synergyBonus || 0;
      });
    }

    // ✅ bake bonus into the card's totalPower so calcTeamScore always sees it
    const cardWithBonus = {
      ...selectedCard,
      totalPower:   baseScore + bonus,
      bonusApplied: bonus,
    };

    if (isHumanTurn) {
      setHumanPicked(cardWithBonus);

      const newHumanTeam = [...humanTeam, cardWithBonus];
      setHumanTeam(newHumanTeam);

      // ✅ recalc from team array — not prev + value
      setHumanScore(calcTeamScore(newHumanTeam));

      // room card: swap weakest with random enemy
      if (selectedCard.id === "pm_ope") {
        applyRoomEffect(newHumanTeam, computerTeamRef.current, true);
      }

      setPickTurn(false);

    } else {
      setComputerPicked(cardWithBonus);

      const newComputerTeam = [...computerTeam, cardWithBonus];
      setComputerTeam(newComputerTeam);

      // ✅ recalc from team array
      setComputerScore(calcTeamScore(newComputerTeam));

      // room card: swap weakest with random human card
      if (selectedCard.id === "pm_ope") {
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

  // ── reset everything ──
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