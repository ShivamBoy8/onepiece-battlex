import { describe, it, expect, vi } from "vitest";
import { useRoomEffect } from "../hooks/useRoomEffect";

describe("useRoomEffect", () => {

 afterEach(() => {
    vi.restoreAllMocks();
  });
  it("swaps weakest card with selected enemy card", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);

    const setHumanTeam     = vi.fn();
    const setComputerTeam  = vi.fn();
    const setHumanScore    = vi.fn();
    const setComputerScore = vi.fn();
    const pushToast        =vi.fn();

    const { applyRoomEffect } = useRoomEffect({
      setHumanTeam,
      setComputerTeam,
      setHumanScore,
      setComputerScore,pushToast
    });

    const humanTeam = [
      { name: "Zoro",  totalPower: 500 },
      { name: "Usopp", totalPower: 100 }, 
    ];

    const enemyTeam = [
      { name: "Kaido", totalPower: 1000 },
    ];

    applyRoomEffect(humanTeam, enemyTeam, true);

    const newHumanTeam = setHumanTeam.mock.calls[0][0];
    const newEnemyTeam = setComputerTeam.mock.calls[0][0];

    expect(newHumanTeam[1].name).toBe("Kaido");   
    expect(newEnemyTeam[0].name).toBe("Usopp");   

    const humanScoreUpdater    = setHumanScore.mock.calls[0][0];
    const computerScoreUpdater = setComputerScore.mock.calls[0][0];

    expect(humanScoreUpdater(600)).toBe(1500);   
    expect(computerScoreUpdater(1000)).toBe(100); 
    expect(pushToast).toHaveBeenCalledWith( expect.stringContaining("🌀 ROOM! Usopp swapped for Kaido"),"good")

  });

  it("correctly identifies the weakest card even when not first in array", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);

    const setHumanTeam     = vi.fn();
    const setComputerTeam  = vi.fn();
    const setHumanScore    = vi.fn();
    const setComputerScore = vi.fn();

    const { applyRoomEffect } = useRoomEffect({
        setHumanTeam, setComputerTeam, setHumanScore, setComputerScore,
    });

    const humanTeam = [
      { name: "Luffy", totalPower: 900 },
      { name: "Chopper", totalPower: 50 }, 
      { name: "Zoro", totalPower: 700 },
    ];
    const enemyTeam = [{ name: "Kaido", totalPower: 1000 }];

     applyRoomEffect(humanTeam, enemyTeam, true);

    const newHumanTeam = setHumanTeam.mock.calls[0][0];
    expect(newHumanTeam[1].name).toBe("Kaido");  
    expect(newHumanTeam[0].name).toBe("Luffy");  
    expect(newHumanTeam[2].name).toBe("Zoro");
   })


  it("does nothing if either team is empty", () => {
    const setHumanTeam     = vi.fn();
    const setComputerTeam  = vi.fn();
    const setHumanScore    = vi.fn();
    const setComputerScore = vi.fn();

    const { applyRoomEffect } = useRoomEffect({
      setHumanTeam, setComputerTeam, setHumanScore, setComputerScore,
    });

    applyRoomEffect([], [{ name: "Kaido", totalPower: 1000 }], true);

    expect(setHumanTeam).not.toHaveBeenCalled();
    expect(setComputerTeam).not.toHaveBeenCalled();
    expect(setHumanScore).not.toHaveBeenCalled();
    expect(setComputerScore).not.toHaveBeenCalled();
  });
});