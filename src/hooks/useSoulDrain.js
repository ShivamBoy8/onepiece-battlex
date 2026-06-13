
import { useEffect, useRef } from "react";

export const useSoulDrain = ({
  setHumanScore,
  setComputerScore,
}) => {
  const intervalRef = useRef(null);
 
  const applySoulDrain = (isHumanTurn) => {
  
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (isHumanTurn) {
        
        setComputerScore(prev => {
          const drain = Math.round(prev * 0.01);
          return prev - drain;
        });
      } else {
        // computer picked soul pocus → drain human score
        setHumanScore(prev => {
          const drain = Math.round(prev * 0.01);
          return prev - drain;
        });
      }
    }, 2000);
  };

  const stopSoulDrain = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // cleanup on unmount
  useEffect(() => {
    return () => stopSoulDrain();
  }, []);

  return { applySoulDrain, stopSoulDrain };
};