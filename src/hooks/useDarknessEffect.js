export const useDarknessEffect = ({ setHumanScore, setComputerScore, pushToast }) => {
  const applyDarkEffect = (isHumanTurn, enemyScore) => {
    const drained = Math.round((enemyScore || 0) * 0.15);
    pushToast?.(
      `🌑 Dark Gravity Pull! Drained ${drained} pts from the enemy`,
      isHumanTurn ? "good" : "bad"
    );

    if (isHumanTurn) {
      setComputerScore(prev => Math.round(prev * 0.85));
    } else {
      setHumanScore(prev => Math.round(prev * 0.85));
    }
  };

  return { applyDarkEffect };
};