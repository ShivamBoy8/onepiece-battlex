export const useDarknessEffect = ({
    setHumanScore,
    setComputerScore,
}) => {

    const applyDarkEffect = (isHumanTurn) => {

        if (isHumanTurn) {
            setComputerScore(prev => Math.round(prev * 0.85));
        } else {
            setHumanScore(prev => Math.round(prev * 0.85));
        }

    };

    return { applyDarkEffect };
};