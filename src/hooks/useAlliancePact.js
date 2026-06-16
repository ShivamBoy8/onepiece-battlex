export const useAlliancePact = ({ setHumanScore, setComputerScore, pushToast }) => {
  const applyAllianceEffect = (myTeam, isHumanTurn, synergyBonus) => {
    const yonko = ["kaido", "bigmom", "shanks", "blackbeard", "whitebeard"];
    const count = myTeam.filter(card => yonko.includes(card.id)).length;
    if (count < 2) return;

    const characterCards = myTeam.filter(card => card.type !== "powerup");
    if (characterCards.length === 0) return;

    let weakestIndex = 0;
    for (let i = 1; i < characterCards.length; i++) {
      if (characterCards[i].totalPower < characterCards[weakestIndex].totalPower) {
        weakestIndex = i;
      }
    }

    const weakestCard  = characterCards[weakestIndex];
    const bonus = (synergyBonus || 0) + weakestCard.totalPower;

    pushToast?.(
      `🤝 Yonko Alliance Pact! +${bonus} (${count} Emperors united, boosted by ${weakestCard.name})`,
      isHumanTurn ? "good" : "bad"
    );

    if (isHumanTurn) {
      setHumanScore(prev => prev + bonus);
    } else {
      setComputerScore(prev => prev + bonus);
    }
  };
  return { applyAllianceEffect };
};