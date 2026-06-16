import { useState, useEffect, useRef, useCallback } from "react";
import { useRoomEffect } from "./useRoomEffect";
import { useDarknessEffect } from "./useDarknessEffect";
import { useAlliancePact } from "./useAlliancePact";
import { useBrookSkip } from "./useBrooktSkip";
import { useFrankyBeam } from "./useFrankyBeam";
import { useSoulDrain } from "./useSoulDrain";
import { useSadGas } from "./useSadGas";

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

  const [toasts, setToasts] = useState([]);
  const toastIdRef = useRef(0);

  const pushToast = useCallback((text, tone = "good") => {
    const id = toastIdRef.current++;
    setToasts(prev => [...prev, { id, text, tone }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 2400);
  }, []);

  const humanTeamRef    = useRef(humanTeam);
  const computerTeamRef = useRef(computerTeam);

  useEffect(() => { humanTeamRef.current    = humanTeam;    }, [humanTeam]);
  useEffect(() => { computerTeamRef.current = computerTeam; }, [computerTeam]);

  const usedCardIds = [
    ...humanTeam.map(card => card.id),
    ...computerTeam.map(card => card.id),
  ];

  const { applySoulDrain, stopSoulDrain } = useSoulDrain({
    setHumanScore, setComputerScore, pushToast,
  });

  const { applyRoomEffect } = useRoomEffect({
    setHumanTeam, setComputerTeam, setHumanScore, setComputerScore, pushToast,
  });

  const { applyDarkEffect } = useDarknessEffect({
    setHumanScore, setComputerScore, pushToast,
  });

  const { applyBrookSkip } = useBrookSkip({
    setPickTurn, setRound, pushToast,
  });

  const { applyAllianceEffect } = useAlliancePact({
    setHumanScore, setComputerScore, pushToast,
  });

  const { applyFrankyBeam } = useFrankyBeam({
    setHumanTeam, setComputerTeam, setHumanScore, setComputerScore, pushToast,
  });

  const { applySadGas } = useSadGas({
    setHumanScore, setComputerScore, pushToast,
  });

  const handleCardSelect = (selectedCard, isHumanTurn) => {
    const scoreToAdd = selectedCard.totalPower || 0;
    const team       = isHumanTurn ? humanTeam : computerTeam;

    let bonus = 0;
    let synergyNote = null;

    if (selectedCard.type === "powerup") {
      if (!selectedCard.teamSynergyCount) {
        const hasSynergy = selectedCard.synergyWith?.some(id =>
          team.some(card => card.id === id)
        );
        if (hasSynergy) {
          bonus += selectedCard.synergyBonus || 0;
          synergyNote = selectedCard.synergyDesc || `+${selectedCard.synergyBonus} synergy`;
        }
      }
    } else {
      const matchingPowerCards = team.filter(
        card => card.type === "powerup" && selectedCard.powerCard?.includes(card.id)
      );
      matchingPowerCards.forEach(card => { bonus += card.synergyBonus || 0; });
      if (matchingPowerCards.length > 0) {
        synergyNote = `synergy with ${matchingPowerCards.map(c => c.name).join(", ")}`;
      }
    }

    const who = isHumanTurn ? "You" : "Enemy";
    let msg = `${who}: ${selectedCard.name} +${scoreToAdd}`;
    if (bonus > 0) msg += ` (+${bonus} ${synergyNote})`;
    pushToast(msg, isHumanTurn ? "good" : "bad");

    if (isHumanTurn) {
      setHumanPicked(selectedCard);
      const newHumanTeam = [...humanTeam, selectedCard];
      setHumanTeam(newHumanTeam);
      setHumanScore(prev => prev + scoreToAdd + bonus);

      if (selectedCard.id === "pm_ope") applyRoomEffect(newHumanTeam, computerTeamRef.current, true);
      if (selectedCard.id === "pm_darkness") applyDarkEffect(true, computerScore);
      if (selectedCard.id === "cs_yonko_pact") applyAllianceEffect(newHumanTeam, true, selectedCard.synergyBonus);
      if (selectedCard.id === "cb_punk_hazard") applySadGas(true, computerTeamRef.current, computerScore);
      if (selectedCard.id === "rp_cola") applyFrankyBeam(computerTeamRef.current, true);
      if (selectedCard.id === "cb_yomi") applyBrookSkip(true);
      if (selectedCard.id === "pm_soul") applySoulDrain(true);

      if (selectedCard.id !== "cb_yomi") setPickTurn(false);

    } else {
      setComputerPicked(selectedCard);
      const newComputerTeam = [...computerTeam, selectedCard];
      setComputerTeam(newComputerTeam);
      setComputerScore(prev => prev + scoreToAdd + bonus);

      if (selectedCard.id === "pm_ope") applyRoomEffect(newComputerTeam, humanTeamRef.current, false);
      if (selectedCard.id === "pm_darkness") applyDarkEffect(false, humanScore);
      if (selectedCard.id === "cs_yonko_pact") applyAllianceEffect(newComputerTeam, false, selectedCard.synergyBonus);
      if (selectedCard.id === "rp_cola") applyFrankyBeam(humanTeamRef.current, false);
      if (selectedCard.id === "cb_yomi") applyBrookSkip(false);
      if (selectedCard.id === "cb_punk_hazard") applySadGas(false, humanTeamRef.current, humanScore);
      if (selectedCard.id === "pm_soul") applySoulDrain(false);

      if (selectedCard.id !== "cb_yomi") {
        setRound(prev => prev + 1);
        setPickTurn(true);
      }
    }
  };

  useEffect(() => {
    if (round > 5) {
      stopSoulDrain();
      requestAnimationFrame(() => requestAnimationFrame(() => requestAnimationFrame(() => setGameOver(true))));
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
    setToasts([]);
  };

  return {
    humanPicked, computerPicked, humanScore, computerScore, pickTurn, round,
    humanTeam, computerTeam, gameOver, usedCardIds, toasts,
    handleCardSelect, resetGame,
  };
};