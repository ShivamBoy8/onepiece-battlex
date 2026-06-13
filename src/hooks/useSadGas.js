export const useSadGas = ({
  setHumanScore,
  setComputerScore,
}) => {

  const applySadGas = (isHumanTurn, enemyTeam) => {
    const len = enemyTeam.length;
    const drainPercent = Math.min(0.06 * len, 0.40);

    if (isHumanTurn) {
      setComputerScore(prev => {
        const drain = Math.round(prev * drainPercent);
        return prev - drain;
      });
    } else {
      setHumanScore(prev => {
        const drain = Math.round(prev * drainPercent);
        return prev - drain;
      });
    }
  };

  return { applySadGas };
};