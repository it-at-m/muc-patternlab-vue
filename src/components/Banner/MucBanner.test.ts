import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucBanner from "./MucBanner.vue";

describe("MucBanner.vue", () => {
  it("renders with default type", () => {
    const wrapper = mount(MucBanner, {
      slots: {
        default: "This is an info message",
      },
    });

    const mucBanner = wrapper.find(".m-banner");
    expect(mucBanner.classes()).toContain("m-banner--info");
    expect(mucBanner.attributes("role")).toBe("dialog");
    expect(mucBanner.attributes("aria-label")).toBe("Information");
    expect(mucBanner.text()).toContain("This is an info message");
  });

  it("renders with success type", () => {
    const wrapper = mount(MucBanner, {
      props: { type: "success" },
      slots: {
        default: "This is a success message",
      },
    });

    const mucBanner = wrapper.find(".m-banner");
    expect(mucBanner.classes()).toContain("m-banner--success");
    expect(mucBanner.attributes("role")).toBe("dialog");
    expect(mucBanner.attributes("aria-label")).toBe("Erfolg");
    expect(mucBanner.text()).toContain("This is a success message");
  });

  it("renders with warning type", () => {
    const wrapper = mount(MucBanner, {
      props: { type: "warning" },
      slots: {
        default: "This is a warning message",
      },
    });

    const mucBanner = wrapper.find(".m-banner");
    expect(mucBanner.classes()).toContain("m-banner--warning");
    expect(mucBanner.attributes("role")).toBe("alert");
    expect(mucBanner.attributes("aria-label")).toBe("Warnung");
    expect(mucBanner.text()).toContain("This is a warning message");
  });

  it("renders with emergency type", () => {
    const wrapper = mount(MucBanner, {
      props: { type: "emergency" },
      slots: {
        default: "This is an emergency message",
      },
    });

    const mucBanner = wrapper.find(".m-banner");
    expect(mucBanner.classes()).toContain("m-banner--emergency");
    expect(mucBanner.attributes("role")).toBe("alert");
    expect(mucBanner.attributes("aria-label")).toBe("Emergency");
    expect(mucBanner.text()).toContain("This is an emergency message");
  });
});
