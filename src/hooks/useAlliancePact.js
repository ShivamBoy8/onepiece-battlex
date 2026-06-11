export const useAlliancePact = ({
  setHumanScore,
  setComputerScore,
}) => {

  const applyAllianceEffect = (myTeam, isHumanTurn, synergyBonus) => {
  const yonko = ["kaido", "bigmom", "shanks", "blackbeard", "whitebeard"];

  const count = myTeam.filter(card => yonko.includes(card.id)).length;
  if (count < 2) return;

  // Exclude powerup cards (including the pact card itself)
  const characterCards = myTeam.filter(card => card.type !== "powerup");
  if (characterCards.length === 0) return;

  let weakestIndex = 0;
  for (let i = 1; i < characterCards.length; i++) {
    if (characterCards[i].totalPower < characterCards[weakestIndex].totalPower) {
      weakestIndex = i;
    }
  }

  const weakestPower = characterCards[weakestIndex].totalPower;
  const bonus = (synergyBonus || 0) + weakestPower;

  if (isHumanTurn) {
    setHumanScore(prev => prev + bonus);
  } else {
    setComputerScore(prev => prev + bonus);
  }
};
  return { applyAllianceEffect };
};