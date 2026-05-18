import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { countTextareaRows } from "./countTextareaRows";

describe("countTextareaRows", () => {
  beforeEach(() => {
    vi.stubGlobal("innerWidth", 800);
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 800,
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    document.body.innerHTML = "";
  });

  it("returns minimum rows for empty text", () => {
    expect(countTextareaRows("")).toBe(2);
  });

  it("returns at least minimum rows for short text", () => {
    expect(countTextareaRows("hello")).toBeGreaterThanOrEqual(2);
  });

  it("uses viewport width when measuring", () => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 400,
    });
    const narrow = countTextareaRows("line one\nline two\nline three");
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 1200,
    });
    const wide = countTextareaRows("line one\nline two\nline three");
    expect(narrow).toBeGreaterThanOrEqual(wide);
  });
});
