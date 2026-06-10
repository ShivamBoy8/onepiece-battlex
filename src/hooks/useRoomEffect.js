
export const useRoomEffect = ({
  setHumanTeam,
  setComputerTeam,
  setHumanScore,
  setComputerScore,
}) => {
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
  }

  return { applyRoomEffect };
}