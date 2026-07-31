import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucBanner from "./MucBanner.vue";

describe("MucBanner.vue", () => {
  it("renders with default type", () => {
    const wrapper = mount(MucBanner, {
      props: { variant: "content" },
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
      props: { variant: "content", type: "success" },
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
      props: { variant: "content", type: "warning" },
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
      props: { variant: "content", type: "emergency" },
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

  it("renders with emergency-light type", () => {
    const wrapper = mount(MucBanner, {
      props: { variant: "content", type: "emergency-light" },
      slots: {
        default: "This is a light emergency message",
      },
    });

    const mucBanner = wrapper.find(".m-banner");
    expect(mucBanner.classes()).toContain("m-banner--emergency-light");
    expect(mucBanner.attributes("role")).toBe("alert");
    expect(mucBanner.attributes("aria-label")).toBe("Emergency");
    expect(mucBanner.text()).toContain("This is a light emergency message");
  });

  it("renders left border when leftBorder is true", () => {
    const wrapper = mount(MucBanner, {
      props: {
        variant: "content",
        type: "emergency-light",
        leftBorder: true,
      },
      slots: {
        default: "Bordered message",
      },
    });

    expect(wrapper.find(".m-banner").classes()).toContain(
      "m-banner--left-border"
    );
  });

  it("renders header and content slots", () => {
    const wrapper = mount(MucBanner, {
      props: { variant: "content", type: "emergency-light", leftBorder: true },
      slots: {
        header: "Fehler bei der Anmeldung",
        default: "Ihre Anmeldung ist leider fehlgeschlagen.",
      },
    });

    expect(wrapper.find(".m-banner__headline").text()).toBe(
      "Fehler bei der Anmeldung"
    );
    expect(wrapper.find(".m-banner__content").text()).toBe(
      "Ihre Anmeldung ist leider fehlgeschlagen."
    );
  });
});
