import {describe, it, expect,vi,beforeEach,afterEach,} from "vitest";
import { renderHook } from "@testing-library/react";
import { useSoulDrain } from "../hooks/useSoulDrain";

describe("useSoulDrain", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("drains enemy score every 2 seconds when human turn", () => {
    const setHumanScore = vi.fn();
    const setComputerScore = vi.fn();
    const pushToast = vi.fn();

    const { result } = renderHook(() =>
      useSoulDrain({
        setComputerScore,
        setHumanScore,
        pushToast,
      })
    );

    result.current.applySoulDrain(true);

    vi.advanceTimersByTime(4000);

    expect(setComputerScore).toHaveBeenCalledTimes(2);
    expect(setHumanScore).not.toHaveBeenCalled();

    const updater = setComputerScore.mock.calls[0][0];

    expect(updater(2000)).toBe(1980);

    expect(pushToast).toHaveBeenCalledWith(
      expect.stringContaining(
        "Soul Pocus! Enemy score now bleeds"
      ),
      "good"
    );
  });

  it("drains human score when computer turn", () => {
    const setHumanScore = vi.fn();
    const setComputerScore = vi.fn();
    const pushToast = vi.fn();

    const { result } = renderHook(() =>
      useSoulDrain({
        setComputerScore,
        setHumanScore,
        pushToast,
      })
    );

    result.current.applySoulDrain(false);

    vi.advanceTimersByTime(2000);

    expect(setHumanScore).toHaveBeenCalledTimes(1);
    expect(setComputerScore).not.toHaveBeenCalled();

    const updater = setHumanScore.mock.calls[0][0];

    expect(updater(1000)).toBe(990);

    expect(pushToast).toHaveBeenCalledWith(
      expect.stringContaining(
        "Soul Pocus! Enemy score now bleeds"
      ),
      "bad"
    );
  });

  it("stopSoulDrain stops future intervals", () => {
    const setHumanScore = vi.fn();
    const setComputerScore = vi.fn();
    const pushToast = vi.fn();

    const { result } = renderHook(() =>
      useSoulDrain({
        setComputerScore,
        setHumanScore,
        pushToast,
      })
    );

    result.current.applySoulDrain(true);

    vi.advanceTimersByTime(4000);

    expect(setComputerScore).toHaveBeenCalledTimes(2);

    result.current.stopSoulDrain();

    vi.advanceTimersByTime(10000);

    expect(setComputerScore).toHaveBeenCalledTimes(2);
  });

  it("starting a new soul drain clears previous interval", () => {
    const setHumanScore = vi.fn();
    const setComputerScore = vi.fn();
    const pushToast = vi.fn();

    const { result } = renderHook(() =>
      useSoulDrain({
        setComputerScore,
        setHumanScore,
        pushToast,
      })
    );

    result.current.applySoulDrain(true);

    vi.advanceTimersByTime(2000);

    expect(setComputerScore).toHaveBeenCalledTimes(1);

    result.current.applySoulDrain(true);

    vi.advanceTimersByTime(2000);

    expect(setComputerScore).toHaveBeenCalledTimes(2);
  });

  it("shows toast when activated", () => {
    const setHumanScore = vi.fn();
    const setComputerScore = vi.fn();
    const pushToast = vi.fn();

    const { result } = renderHook(() =>
      useSoulDrain({
        setComputerScore,
        setHumanScore,
        pushToast,
      })
    );

    result.current.applySoulDrain(true);

    expect(pushToast).toHaveBeenCalledTimes(1);
  });
});