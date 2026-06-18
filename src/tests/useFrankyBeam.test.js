import { describe, it, expect, vi } from "vitest";
import { useFrankyBeam } from "../hooks/useFrankyBeam";

describe("useFrankyBeam", () => {

  it("removes weakest card from enemy team when human plays it", () => {
    const setHumanTeam     = vi.fn();
    const setComputerTeam  = vi.fn();
    const setHumanScore    = vi.fn();
    const setComputerScore = vi.fn();
    const pushToast        = vi.fn();

    const { applyFrankyBeam } = useFrankyBeam({
      setHumanTeam, setComputerTeam, setHumanScore, setComputerScore, pushToast,
    });

    // include id since the hook filters by card.id
    const enemyTeam = [
      { id: "z1", name: "Zoro",  totalPower: 500 },
      { id: "u1", name: "Usopp", totalPower: 100 }, 
    ];

    
    applyFrankyBeam(enemyTeam, true); 
  
    const newEnemyTeam = setComputerTeam.mock.calls[0][0];
    expect(newEnemyTeam).toHaveLength(1);
    expect(newEnemyTeam[0]).toEqual({ id: "z1", name: "Zoro", totalPower: 500 });

    const computerScoreUpdater = setComputerScore.mock.calls[0][0];
    expect(computerScoreUpdater(600)).toBe(500); 

   
    expect(setHumanTeam).not.toHaveBeenCalled();
    expect(setHumanScore).not.toHaveBeenCalled();


    expect(pushToast).toHaveBeenCalledWith(
      expect.stringContaining("Vaporized Usopp"),
      "good"
    );
  });

  it("removes weakest card from human team when computer plays it", () => {
    const setHumanTeam     = vi.fn();
    const setComputerTeam  = vi.fn();
    const setHumanScore    = vi.fn();
    const setComputerScore = vi.fn();

    const { applyFrankyBeam } = useFrankyBeam({
      setHumanTeam, setComputerTeam, setHumanScore, setComputerScore,
    });

    const humanTeam = [
      { id: "l1", name: "Luffy",   totalPower: 900 },
      { id: "c1", name: "Chopper", totalPower: 50 }, 
    ];

    applyFrankyBeam(humanTeam, false);

    const newHumanTeam = setHumanTeam.mock.calls[0][0];
    expect(newHumanTeam).toHaveLength(1);
    expect(newHumanTeam[0].name).toBe("Luffy");

    const humanScoreUpdater = setHumanScore.mock.calls[0][0];
    expect(humanScoreUpdater(950)).toBe(900); 

    expect(setComputerTeam).not.toHaveBeenCalled();
    expect(setComputerScore).not.toHaveBeenCalled();
  });

  it("does nothing if the team is empty", () => {
    const setHumanTeam     = vi.fn();
    const setComputerTeam  = vi.fn();
    const setHumanScore    = vi.fn();
    const setComputerScore = vi.fn();

    const { applyFrankyBeam } = useFrankyBeam({
      setHumanTeam, setComputerTeam, setHumanScore, setComputerScore,
    });

    applyFrankyBeam([], true); 

    expect(setHumanTeam).not.toHaveBeenCalled();
    expect(setComputerTeam).not.toHaveBeenCalled();
    expect(setHumanScore).not.toHaveBeenCalled();
    expect(setComputerScore).not.toHaveBeenCalled();
  });

  it("correctly identifies weakest card when it's not at index 0", () => {
    const setComputerTeam  = vi.fn();
    const setComputerScore = vi.fn();

    const { applyFrankyBeam } = useFrankyBeam({
      setHumanTeam: vi.fn(), setComputerTeam, setHumanScore: vi.fn(), setComputerScore,
    });

    const enemyTeam = [
      { id: "k1", name: "Kaido", totalPower: 1000 },
      { id: "b1", name: "BB",    totalPower: 950 },
      { id: "n1", name: "Nami",  totalPower: 80 }, 
    ];

    applyFrankyBeam(enemyTeam, true);

    const newTeam = setComputerTeam.mock.calls[0][0];
    expect(newTeam).toHaveLength(2);
    expect(newTeam.find(c => c.name === "Nami")).toBeUndefined(); 
    expect(newTeam.find(c => c.name === "Kaido")).toBeDefined();  
  });

});