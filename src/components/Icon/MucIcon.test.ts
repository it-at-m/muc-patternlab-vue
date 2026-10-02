import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucIcon from "./MucIcon.vue";

describe("MucIcon.vue", () => {
  it("references the icon sprite and is hidden from screen readers", () => {
    const wrapper = mount(MucIcon, { props: { icon: "search" } });

    expect(wrapper.element.tagName.toLowerCase()).toBe("svg");
    expect(wrapper.attributes("aria-hidden")).toBe("true");
    expect(wrapper.find("use").attributes("href")).toBe("#icon-search");
  });

  it("uses the default icon class when no class is given", () => {
    const wrapper = mount(MucIcon, { props: { icon: "search" } });

    expect(wrapper.classes()).toEqual(["icon"]);
  });

  it("replaces the default icon class with a given class", () => {
    const wrapper = mount(MucIcon, {
      props: { icon: "search" },
      attrs: { class: "custom-icon" },
    });

    expect(wrapper.classes()).toContain("custom-icon");
    expect(wrapper.classes()).not.toContain("icon");
  });

  it("applies the given color", () => {
    const wrapper = mount(MucIcon, {
      props: { icon: "search", color: "red" },
    });

    expect(wrapper.attributes("style")).toContain("color: red");
  });
});
