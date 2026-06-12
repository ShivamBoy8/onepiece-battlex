export const useFrankyBeam = ({
  setHumanTeam,
  setComputerTeam,
  setHumanScore,
  setComputerScore,
}) => {

  const applyFrankyBeam = (enemyTeam, isHumanTurn) => {
    if (enemyTeam.length === 0) return;  

    // find weakest card in enemy team
    let weakestIndex = 0;
    for (let i = 1; i < enemyTeam.length; i++) {
      if (enemyTeam[i].totalPower < enemyTeam[weakestIndex].totalPower) {
        weakestIndex = i;
      }
    }

    const weakestCard = enemyTeam[weakestIndex]; 


    const newTeam = enemyTeam.filter(card => card.id !== weakestCard.id);  

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