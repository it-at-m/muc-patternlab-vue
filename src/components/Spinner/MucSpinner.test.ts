import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucSpinner from "./MucSpinner.vue";

const mountSpinner = (props: Record<string, unknown> = {}) =>
  mount(MucSpinner, { props: { size: "300", ...props } });

describe("MucSpinner.vue", () => {
  it("renders an svg with the given size and without text", () => {
    const wrapper = mountSpinner({ size: "120" });

    expect(wrapper.attributes("width")).toBe("120");
    expect(wrapper.attributes("height")).toBe("120");
    expect(wrapper.attributes("aria-hidden")).toBe("true");
    expect(wrapper.find("text").exists()).toBe(false);
  });

  it.each([
    [42, "42%"],
    [42.6, "43%"],
    [0, "0%"],
    [-10, "0%"],
    [150, "100%"],
  ])("displays percentage %s as %s", (percentage, expected) => {
    const wrapper = mountSpinner({ percentage });

    expect(wrapper.find("text").text()).toBe(expected);
  });

  it("displays a short text on a single line", () => {
    const wrapper = mountSpinner({ text: "Loading" });

    const lines = wrapper.findAll("tspan");
    expect(lines).toHaveLength(1);
    expect(lines[0].text()).toBe("Loading");
    expect(lines[0].attributes("dy")).toBe("-0em");
  });

  it("wraps longer text at spaces", () => {
    const wrapper = mountSpinner({ text: "Please wait while loading" });

    const lines = wrapper.findAll("tspan").map((t) => t.text());
    expect(lines).toEqual(["Please wait", "while loading"]);
    expect(wrapper.findAll("tspan")[0].attributes("dy")).toBe("-0.6em");
    expect(wrapper.findAll("tspan")[1].attributes("dy")).toBe("1.2em");
  });

  it("hard breaks words longer than a line", () => {
    const wrapper = mountSpinner({ text: "Donaudampfschifffahrt" });

    const lines = wrapper.findAll("tspan").map((t) => t.text());
    expect(lines).toEqual(["Donaudampfschi", "fffahrt"]);
  });

  it("truncates text longer than 80 characters", () => {
    const wrapper = mountSpinner({ text: "abcd ".repeat(20).trim() });

    const text = wrapper
      .findAll("tspan")
      .map((t) => t.text())
      .join(" ");
    expect(text.length).toBe(80);
    expect(text.endsWith("…")).toBe(true);
  });

  it("ignores whitespace-only text", () => {
    const wrapper = mountSpinner({ text: "   " });

    expect(wrapper.find("text").exists()).toBe(false);
  });

  it("throws when text and percentage are used together", () => {
    expect(() => mountSpinner({ text: "Loading", percentage: 50 })).toThrow(
      "MucSpinner: The properties 'text' and 'percentage' can't be used simultaneously."
    );
  });
});
