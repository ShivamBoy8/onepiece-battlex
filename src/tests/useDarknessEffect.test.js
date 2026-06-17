import { describe, it, expect, vi } from "vitest";
import { useDarknessEffect } from "../hooks/useDarknessEffect";

describe("useDarknessEffect", () => {

  it("pulls 15% score from enemy when human plays it", () => {
    const setHumanScore    = vi.fn();
    const setComputerScore = vi.fn();
    const pushToast        = vi.fn();

    const { applyDarkEffect } = useDarknessEffect({
      setHumanScore,
      setComputerScore,
      pushToast,
    });

    const computerScore = 2000;

    applyDarkEffect(true, computerScore);

    const computerScoreUpdater = setComputerScore.mock.calls[0][0];

   
    expect(computerScoreUpdater(2000)).toBe(1700); 

    expect(setHumanScore).not.toHaveBeenCalled();

  
    expect(pushToast).toHaveBeenCalledWith(
      expect.stringContaining("Drained 300 pts"),
      "good"
    );
  });

  it("pulls 15% score from human when computer plays it", () => {
    const setHumanScore    = vi.fn();
    const setComputerScore = vi.fn();
    const pushToast        = vi.fn();

    const { applyDarkEffect } = useDarknessEffect({
      setHumanScore,
      setComputerScore,
      pushToast,
    });

    const humanScore = 1000;

    applyDarkEffect(false, humanScore); 

    const humanScoreUpdater = setHumanScore.mock.calls[0][0];
    expect(humanScoreUpdater(1000)).toBe(850); // 1000 * 0.85 = 850

    expect(setComputerScore).not.toHaveBeenCalled();

    expect(pushToast).toHaveBeenCalledWith(
      expect.stringContaining("Drained 150 pts"), // 1000 * 0.15 = 150
      "bad"
    );
  });

  it("handles a score of 0 without errors", () => {
    const setHumanScore    = vi.fn();
    const setComputerScore = vi.fn();

    const { applyDarkEffect } = useDarknessEffect({
      setHumanScore,
      setComputerScore,
    });

    applyDarkEffect(true, 0);

    const updater = setComputerScore.mock.calls[0][0];
    expect(updater(0)).toBe(0);
  });

});