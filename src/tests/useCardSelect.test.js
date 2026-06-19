import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCardSelect } from "../hooks/useCardSelect";

const mockApplyRoomEffect     = vi.fn();
const mockApplyDarkEffect     = vi.fn();
const mockApplyAllianceEffect = vi.fn();
const mockApplyBrookSkip      = vi.fn();
const mockApplyFrankyBeam     = vi.fn();
const mockApplySoulDrain      = vi.fn();
const mockStopSoulDrain       = vi.fn();
const mockApplySadGas         = vi.fn();


vi.mock("../hooks/useRoomEffect", () => ({
  useRoomEffect: () => ({ applyRoomEffect: mockApplyRoomEffect }),
}));
vi.mock("../hooks/useDarknessEffect", () => ({
  useDarknessEffect: () => ({ applyDarkEffect: mockApplyDarkEffect }),
}));
vi.mock("../hooks/useAlliancePact", () => ({
  useAlliancePact: () => ({ applyAllianceEffect: mockApplyAllianceEffect }),
}));
vi.mock("../hooks/useBrooktSkip", () => ({
  useBrookSkip: () => ({ applyBrookSkip: mockApplyBrookSkip }),
}));
vi.mock("../hooks/useFrankyBeam", () => ({
  useFrankyBeam: () => ({ applyFrankyBeam: mockApplyFrankyBeam }),
}));
vi.mock("../hooks/useSoulDrain", () => ({
  useSoulDrain: () => ({
    applySoulDrain: mockApplySoulDrain,
    stopSoulDrain: mockStopSoulDrain,
  }),
}));
vi.mock("../hooks/useSadGas", () => ({
  useSadGas: () => ({ applySadGas: mockApplySadGas }),
}));


describe("useCardSelect", () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("initial state is correct", () => {
    const { result } = renderHook(() => useCardSelect());

    expect(result.current.humanPicked).toBe(null);
    expect(result.current.computerPicked).toBe(null);
    expect(result.current.humanScore).toBe(0);
    expect(result.current.computerScore).toBe(0);
    expect(result.current.pickTurn).toBe(true);
    expect(result.current.round).toBe(1);
    expect(result.current.humanTeam).toEqual([]);
    expect(result.current.computerTeam).toEqual([]);
    expect(result.current.gameOver).toBe(false);
    expect(result.current.toasts).toEqual([]);
  });

  it("picking the pm_ope card calls applyRoomEffect, and nothing else", () => {
    const { result } = renderHook(() => useCardSelect());

    const opeCard = {
      id: "pm_ope", type: "powerup", rarity: "special", category: "prob_manip",
      name: "Ope Ope ROOM",
      desc: "ROOM! A giant sphere of white light engulfs the battlefield...",
      flatBonus: 210, totalPower: 210,
      synergyWith: ["law"], synergyBonus: 55,
      synergyDesc: "+55 when Law enters the ROOM",
    };

    act(() => {
      result.current.handleCardSelect(opeCard, true);
    });

    expect(mockApplyRoomEffect).toHaveBeenCalledTimes(1);
    expect(mockApplyAllianceEffect).not.toHaveBeenCalled();
    expect(mockApplySoulDrain).not.toHaveBeenCalled();
  });

  it("Human picks a normal character → score/team/turn update correctly", () => {
  const { result } = renderHook(() => useCardSelect());

  const monetCard = {
    id: "monet", name: "Monet", image: "monet.png", group: "others",
    str: 60, haki: 55, df: 80, spd: 82, stam: 65, mind: 72, type: "char",
    desc: "Yuki Yuki no Mi • Harpy • Punk Hazard spy",
    totalPower: 414,
    powerCard: ["cb_punk_hazard"],
  };

  act(() => {
    result.current.handleCardSelect(monetCard, true);
  });

  expect(result.current.humanPicked).toEqual(monetCard);
  expect(result.current.humanScore).toBe(414);
  expect(result.current.computerScore).toBe(0);
  expect(result.current.pickTurn).toBe(false);
  expect(result.current.round).toBe(1);
  expect(result.current.humanTeam).toEqual([monetCard]);
  expect(result.current.computerTeam).toEqual([]);
  expect(result.current.gameOver).toBe(false);

  expect(result.current.toasts).toEqual([
    { id: 0, text: "You: Monet +414", tone: "good" }
  ]);
});


it("Computer picks → round increments, turn switches back", () => {
  const { result } = renderHook(() => useCardSelect());

  const monetCard = {
    id: "monet", name: "Monet", image: "monet.png", group: "others",
    str: 60, haki: 55, df: 80, spd: 82, stam: 65, mind: 72, type: "char",
    desc: "Yuki Yuki no Mi • Harpy • Punk Hazard spy",
    totalPower: 414,
    powerCard: ["cb_punk_hazard"],
  };

  const zoroCard = {
    id: "zoro", name: "Zoro", type: "char", totalPower: 850, powerCard: [],
  };

  act(() => {
    result.current.handleCardSelect(monetCard, true); 
  });

  act(() => {
    result.current.handleCardSelect(zoroCard, false); 
  });

  expect(result.current.pickTurn).toBe(true);
  expect(result.current.round).toBe(2);
});

it("resetGame restores everything", () => {
  const { result } = renderHook(() => useCardSelect());

  const monetCard = {
    id: "monet", name: "Monet", type: "char", totalPower: 414, powerCard: ["cb_punk_hazard"],
  };

  act(() => {
    result.current.handleCardSelect(monetCard, true);
  });

  expect(result.current.humanScore).toBe(414);

  act(() => {
    result.current.resetGame();
  });

  expect(result.current.humanPicked).toBe(null);
  expect(result.current.computerPicked).toBe(null);
  expect(result.current.humanScore).toBe(0);
  expect(result.current.computerScore).toBe(0);
  expect(result.current.pickTurn).toBe(true);
  expect(result.current.round).toBe(1);
  expect(result.current.humanTeam).toEqual([]);
  expect(result.current.computerTeam).toEqual([]);
  expect(result.current.gameOver).toBe(false);
  expect(result.current.toasts).toEqual([]);
});

it("Full game completion → gameOver after round 5", () => {
  vi.useFakeTimers();
  const { result } = renderHook(() => useCardSelect());

  const cards = [
    { id: "a", type: "char", totalPower: 100, name: "A", powerCard: [] },
    { id: "b", type: "char", totalPower: 100, name: "B", powerCard: [] },
    { id: "c", type: "char", totalPower: 100, name: "C", powerCard: [] },
    { id: "d", type: "char", totalPower: 100, name: "D", powerCard: [] },
    { id: "e", type: "char", totalPower: 100, name: "E", powerCard: [] },
    { id: "f", type: "char", totalPower: 100, name: "F", powerCard: [] },
    { id: "g", type: "char", totalPower: 100, name: "G", powerCard: [] },
    { id: "h", type: "char", totalPower: 100, name: "H", powerCard: [] },
    { id: "i", type: "char", totalPower: 100, name: "I", powerCard: [] },
    { id: "j", type: "char", totalPower: 100, name: "J", powerCard: [] },
  ];

  for (let i = 0; i < 5; i++) {
    act(() => {
      result.current.handleCardSelect(cards[i * 2], true);      
    });
    act(() => {
      result.current.handleCardSelect(cards[i * 2 + 1], false); 
    });
  }

  act(() => {
    vi.advanceTimersByTime(100);
  });

  expect(result.current.gameOver).toBe(true);

  vi.useRealTimers();
});

});