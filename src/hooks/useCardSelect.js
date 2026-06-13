import { useState, useEffect, useRef } from "react";
import { useRoomEffect } from "./useRoomEffect";
import { useDarknessEffect } from "./useDarknessEffect";
import { useAlliancePact } from "./useAlliancePact";
import { useBrookSkip } from "./useBrooktSkip";
import { useFrankyBeam } from "./useFrankyBeam";
import { useSoulDrain } from "./useSoulDrain";


export const useCardSelect = () => {
  const [humanPicked, setHumanPicked]       = useState(null);
  const [computerPicked, setComputerPicked] = useState(null);
  const [humanScore, setHumanScore]         = useState(0);
  const [computerScore, setComputerScore]   = useState(0);
  const [pickTurn, setPickTurn]             = useState(true);
  const [round, setRound]                   = useState(1);
  const [humanTeam, setHumanTeam]           = useState([]);
  const [computerTeam, setComputerTeam]     = useState([]);
  const [gameOver, setGameOver]             = useState(false);

  const humanTeamRef    = useRef(humanTeam);
  const computerTeamRef = useRef(computerTeam);

  useEffect(() => { humanTeamRef.current    = humanTeam;    }, [humanTeam]);
  useEffect(() => { computerTeamRef.current = computerTeam; }, [computerTeam]);

  const usedCardIds = [
    ...humanTeam.map(card => card.id),
    ...computerTeam.map(card => card.id),
  ];
  const { applySoulDrain, stopSoulDrain } = useSoulDrain({
  setHumanScore,
  setComputerScore,
});

  const { applyRoomEffect } = useRoomEffect({
    setHumanTeam,
    setComputerTeam,
    setHumanScore,
    setComputerScore,
  });

  const { applyDarkEffect } = useDarknessEffect({
    setHumanScore,
    setComputerScore,
  });

  const { applyBrookSkip } = useBrookSkip({
  setPickTurn,
  setRound,
});


  const {applyAllianceEffect} = useAlliancePact({
  setHumanScore,
  setComputerScore,
  }) ;

  const { applyFrankyBeam } = useFrankyBeam({
    setHumanTeam,
    setComputerTeam,
    setHumanScore,
    setComputerScore,
  });
  


  const handleCardSelect = (selectedCard, isHumanTurn) => {
    const scoreToAdd = selectedCard.totalPower || 0;
    const team       = isHumanTurn ? humanTeam : computerTeam;

    let bonus = 0;

    if (selectedCard.type === "powerup") {
  // Skip generic synergy for cards with custom team-count logic
  if (!selectedCard.teamSynergyCount) {
    const hasSynergy = selectedCard.synergyWith?.some(id =>
      team.some(card => card.id === id)
    );
    if (hasSynergy) {
      bonus += selectedCard.synergyBonus || 0;
    }
  }
} else {
  // character card: check if any powerup in team boosts it
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
        applyRoomEffect(newHumanTeam, computerTeamRef.current, true);
      }

      if (selectedCard.id === "pm_darkness") {
         applyDarkEffect(true);
       }

       if (selectedCard.id === "cs_yonko_pact") {
       applyAllianceEffect(newHumanTeam,true,selectedCard.synergyBonus);
       }

       if (selectedCard.id === "rp_cola")
        applyFrankyBeam(computerTeamRef.current, true);

       if(selectedCard.id=="cb_yomi"){
        applyBrookSkip(true)
       }

       if (selectedCard.id === "pm_soul") {
        applySoulDrain(true);
       }

      if (selectedCard.id !== "cb_yomi") setPickTurn(false);

    } else {
      setComputerPicked(selectedCard);
      const newComputerTeam = [...computerTeam, selectedCard];
      setComputerTeam(newComputerTeam);
      setComputerScore(prev => prev + scoreToAdd + bonus);

      if (selectedCard.id === "pm_ope") {
        applyRoomEffect(newComputerTeam, humanTeamRef.current, false);
      }

       if (selectedCard.id === "pm_darkness") {
         applyDarkEffect(false);
       }

       if (selectedCard.id === "cs_yonko_pact") {
       applyAllianceEffect(newComputerTeam,false,selectedCard.synergyBonus);
       }

       if (selectedCard.id === "rp_cola")
        applyFrankyBeam(humanTeamRef.current, false);

       if(selectedCard.id=="cb_yomi"){
        applyBrookSkip(false)
       }
       if (selectedCard.id === "pm_soul") {
         applySoulDrain(false);
       }

      if (selectedCard.id !== "cb_yomi") {
       setRound(prev => prev + 1);
       setPickTurn(true);
      }
    }
  };

  useEffect(() => {
    if (round > 5) {
       stopSoulDrain();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setGameOver(true);
          });
        });
      });
    }
  }, [round]);

  const resetGame = () => {
    stopSoulDrain();
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

  return {
    humanPicked,
    computerPicked,
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
  };
};