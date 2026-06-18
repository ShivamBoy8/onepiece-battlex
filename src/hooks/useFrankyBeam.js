export const useFrankyBeam = ({ setHumanTeam, setComputerTeam, setHumanScore, setComputerScore, pushToast }) => {
  const applyFrankyBeam = (enemyTeam, isHumanTurn) => {
    if (enemyTeam.length === 0) return;

    let weakestIndex = 0;
    for (let i = 1; i < enemyTeam.length; i++) {
      if (enemyTeam[i].totalPower < enemyTeam[weakestIndex].totalPower) {
        weakestIndex = i;
      }
    }

    const weakestCard = enemyTeam[weakestIndex];
    const newTeam = enemyTeam.filter((_, index) => index !== weakestIndex);

    pushToast?.(
      `🤖 Franky's Cola! Vaporized ${weakestCard.name} (-${weakestCard.totalPower})`,
      isHumanTurn ? "good" : "bad"
    );

    if (isHumanTurn) {
      setComputerTeam(newTeam);
      setComputerScore(prev => prev - weakestCard.totalPower);
    } else {
      setHumanTeam(newTeam);
      setHumanScore(prev => prev - weakestCard.totalPower);
    }
  };

  return { applyFrankyBeam };
};