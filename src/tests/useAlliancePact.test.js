import { describe, it, expect, vi } from "vitest";
import { useAlliancePact } from "../hooks/useAlliancePact";

describe("useAlliancePact", () => {

  const makeHook = () => {
    const setHumanScore    = vi.fn();
    const setComputerScore = vi.fn();
    const pushToast        = vi.fn();
    const { applyAllianceEffect } = useAlliancePact({
      setHumanScore, setComputerScore, pushToast,
    });
    return { setHumanScore, setComputerScore, pushToast, applyAllianceEffect };
  };


  it("adds synergy + weakest character power to human score", () => {
    const { setHumanScore, setComputerScore, applyAllianceEffect } = makeHook();

    const myTeam = [
      { id: "bigmom",       name: "Big Mom",            type: "char",    totalPower: 521 },
      { id: "rp_conqueror", name: "Conqueror's Burst",  type: "powerup", totalPower: 115 },
      { id: "kaido",        name: "Kaido",              type: "char",    totalPower: 545 },
      { id: "katakuri",     name: "Charlotte Katakuri", type: "char",    totalPower: 558 },
    ];

    applyAllianceEffect(myTeam, true, 210);

    const updater = setHumanScore.mock.calls[0][0];
    expect(updater(1739)).toBe(2470);
    expect(setComputerScore).not.toHaveBeenCalled();
  });


  it("adds bonus to computer score when it is the computer's turn", () => {
    const { setHumanScore, setComputerScore, applyAllianceEffect } = makeHook();

    const myTeam = [
      { id: "shanks",    name: "Shanks",     type: "char",    totalPower: 530 },
      { id: "blackbeard",name: "Blackbeard", type: "char",    totalPower: 510 }, 
      { id: "katakuri",  name: "Katakuri",   type: "char",    totalPower: 558 },
    ];

    applyAllianceEffect(myTeam, false, 210);

  
    const updater = setComputerScore.mock.calls[0][0];
    expect(updater(1000)).toBe(1720);
    expect(setHumanScore).not.toHaveBeenCalled();
  });

  it("does nothing when fewer than 2 Yonko are present", () => {
    const { setHumanScore, setComputerScore, pushToast, applyAllianceEffect } = makeHook();

    const myTeam = [
      { id: "kaido",    name: "Kaido",    type: "char", totalPower: 545 },
      { id: "katakuri", name: "Katakuri", type: "char", totalPower: 558 },
    ];

    applyAllianceEffect(myTeam, true, 210);

    expect(setHumanScore).not.toHaveBeenCalled();
    expect(setComputerScore).not.toHaveBeenCalled();
    expect(pushToast).not.toHaveBeenCalled();
  });


  it("fires with exactly 2 Yonko present (boundary check)", () => {
    const { setHumanScore, applyAllianceEffect } = makeHook();

    const myTeam = [
      { id: "shanks",     name: "Shanks",     type: "char", totalPower: 530 }, 
      { id: "whitebeard", name: "Whitebeard", type: "char", totalPower: 560 },
    ];

    applyAllianceEffect(myTeam, true, 100);

    const updater = setHumanScore.mock.calls[0][0];
    expect(updater(0)).toBe(630);
  });

  it("ignores powerup cards when finding the weakest card", () => {
    const { setHumanScore, applyAllianceEffect } = makeHook();

    const myTeam = [
      { id: "kaido",        name: "Kaido",             type: "char",    totalPower: 545 },
      { id: "bigmom",       name: "Big Mom",           type: "char",    totalPower: 521 }, 
      { id: "cs_yonko_pact",name: "Yonko Pact",        type: "powerup", totalPower:  10 }, 
    ];

    applyAllianceEffect(myTeam, true, 210);

  
    const updater = setHumanScore.mock.calls[0][0];
    expect(updater(0)).toBe(731);
  });

  it("does nothing when the team contains only powerup cards", () => {
    const { setHumanScore, setComputerScore, pushToast, applyAllianceEffect } = makeHook();

    const myTeam = [
      { id: "kaido",         name: "Kaido Pact",  type: "powerup", totalPower: 545 },
      { id: "bigmom",        name: "BigMom Pact", type: "powerup", totalPower: 521 },
      { id: "cs_yonko_pact", name: "Yonko Pact",  type: "powerup", totalPower:  10 },
    ];

    applyAllianceEffect(myTeam, true, 210);

    expect(setHumanScore).not.toHaveBeenCalled();
    expect(setComputerScore).not.toHaveBeenCalled();
    expect(pushToast).not.toHaveBeenCalled();
  });

 

  it("treats undefined synergyBonus as 0", () => {
    const { setHumanScore, applyAllianceEffect } = makeHook();

    const myTeam = [
      { id: "kaido",  name: "Kaido",   type: "char", totalPower: 545 },
      { id: "bigmom", name: "Big Mom", type: "char", totalPower: 521 }, 
    ];

    applyAllianceEffect(myTeam, true, undefined);

    const updater = setHumanScore.mock.calls[0][0];
    expect(updater(0)).toBe(521);
  });

});