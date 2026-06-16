export const useSadGas = ({ setHumanScore, setComputerScore, pushToast }) => {
  const applySadGas = (isHumanTurn, enemyTeam, enemyScore) => {
    const len = enemyTeam.length;
    const drainPercent = Math.min(0.06 * len, 0.40);
    const drained = Math.round((enemyScore || 0) * drainPercent);

    pushToast?.(
      `☠️ SAD Gas Cloud! Drained ${drained} pts (${Math.round(drainPercent * 100)}% × ${len} cards)`,
      isHumanTurn ? "good" : "bad"
    );

    if (isHumanTurn) {
      setComputerScore(prev => prev - Math.round(prev * drainPercent));
    } else {
      setHumanScore(prev => prev - Math.round(prev * drainPercent));
    }
  };

  return { applySadGas };
};