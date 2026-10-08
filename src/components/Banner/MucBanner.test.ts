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

  it("renders with danger type", () => {
    const wrapper = mount(MucBanner, {
      props: { variant: "content", type: "danger" },
      slots: {
        default: "This is a danger message",
      },
    });

    const mucBanner = wrapper.find(".m-banner");
    expect(mucBanner.classes()).toContain("m-banner--danger");
    expect(mucBanner.attributes("role")).toBe("alert");
    expect(mucBanner.attributes("aria-label")).toBe("Danger");
    expect(mucBanner.text()).toContain("This is a danger message");
  });

  it("renders the icon matching the type", () => {
    const icon = (
      type?: "info" | "success" | "warning" | "emergency" | "danger"
    ) =>
      mount(MucBanner, { props: { variant: "content", type } })
        .find("use")
        .attributes("href");

    expect(icon()).toBe("#icon-information");
    expect(icon("success")).toBe("#icon-check");
    expect(icon("warning")).toBe("#icon-warning");
    expect(icon("emergency")).toBe("#icon-warning");
    expect(icon("danger")).toBe("#icon-warning");
  });

  it("wraps the content in a container for the header variant", () => {
    const wrapper = mount(MucBanner, {
      props: { variant: "header" },
      slots: { default: "Header banner" },
    });

    const container = wrapper.find(".m-banner .container-fluid");
    expect(container.find("svg").exists()).toBe(true);
    expect(container.find("p").text()).toBe("Header banner");
  });

  it.each(["content", "header"] as const)(
    "hides the icon with noIcon in the %s variant",
    (variant) => {
      const wrapper = mount(MucBanner, {
        props: { variant, noIcon: true },
        slots: { default: "No icon" },
      });

      expect(wrapper.find("svg").exists()).toBe(false);
      expect(wrapper.find("p").text()).toBe("No icon");
    }
  );
});
