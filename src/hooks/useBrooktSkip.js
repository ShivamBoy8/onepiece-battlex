export const useBrookSkip = ({ setPickTurn, setRound, pushToast }) => {
  const applyBrookSkip = (isHumanTurn) => {
    pushToast?.(
      "🎸 Soul King Concert! Enemy's next pick turn is skipped",
      isHumanTurn ? "good" : "bad"
    );

    if (isHumanTurn) {
      setPickTurn(true);
      setRound(prev => prev + 1);
    } else {
      setPickTurn(false);
      setRound(prev => prev + 1);
    }
  };

  return { applyBrookSkip };
};