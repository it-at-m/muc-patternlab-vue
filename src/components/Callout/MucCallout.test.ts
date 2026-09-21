import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucCallout from "./MucCallout.vue";

describe("MucCallout.vue", () => {
  it("renders the info type by default", () => {
    const wrapper = mount(MucCallout);

    const callout = wrapper.find(".m-callout");
    expect(callout.classes()).toContain("m-callout--default");
    expect(callout.attributes("aria-label")).toBe("Information");
    expect(wrapper.find("use").attributes("href")).toBe("#icon-information");
  });

  it.each([
    ["success", "m-callout--success", "Erfolgreich", "check"],
    ["warning", "m-callout--warning", "Warnung", "warning"],
    ["error", "m-callout--error", "Error", "danger"],
  ] as const)(
    "renders the %s type",
    (type, expectedClass, expectedLabel, expectedIcon) => {
      const wrapper = mount(MucCallout, { props: { type } });

      const callout = wrapper.find(".m-callout");
      expect(callout.classes()).toContain(expectedClass);
      expect(callout.attributes("aria-label")).toBe(expectedLabel);
      expect(wrapper.find("use").attributes("href")).toBe(
        `#icon-${expectedIcon}`
      );
    }
  );

  it("renders header, content and buttons slots", () => {
    const wrapper = mount(MucCallout, {
      slots: {
        header: "Callout heading",
        content: "<p>Callout content</p>",
        buttons: "<button>Action</button>",
      },
    });

    expect(wrapper.find(".m-callout__headline").text()).toBe("Callout heading");
    const content = wrapper.find(".m-callout__content");
    expect(content.find("p").text()).toBe("Callout content");
    expect(content.find("button").text()).toBe("Action");
  });

  it("replaces the fallback icon with the icon slot", () => {
    const wrapper = mount(MucCallout, {
      slots: { icon: '<span class="custom-icon" />' },
    });

    const iconContainer = wrapper.find(".m-callout__icon");
    expect(iconContainer.find(".custom-icon").exists()).toBe(true);
    expect(iconContainer.find("svg").exists()).toBe(false);
  });
});
