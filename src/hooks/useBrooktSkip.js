export const useBrookSkip = ({ setPickTurn, setRound }) => {

  const applyBrookSkip = (isHumanTurn) => {
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