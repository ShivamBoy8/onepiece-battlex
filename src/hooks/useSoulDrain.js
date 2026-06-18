import { useEffect, useRef } from "react";

export const useSoulDrain = ({ setHumanScore, setComputerScore, pushToast }) => {
  const intervalRef = useRef(null);

  const applySoulDrain = (isHumanTurn) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    pushToast?.(
      "👻 Soul Pocus! Enemy score now bleeds -1% every 2s",
      isHumanTurn ? "good" : "bad"
    );

    intervalRef.current = setInterval(() => {
      if (isHumanTurn) {
        setComputerScore(prev => prev - Math.round(prev * 0.01));
      } else {
        setHumanScore(prev => prev - Math.round(prev * 0.01));
      }
    }, 2000);
  };

  const stopSoulDrain = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => stopSoulDrain();
  }, []);

  return { applySoulDrain, stopSoulDrain };
};