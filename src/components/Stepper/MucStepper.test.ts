import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucStepper from "./MucStepper.vue";

const stepItems = [
  { id: "1", label: "Order", icon: "shopping-cart" },
  { id: "2", label: "Delivery", icon: "calendar" },
  { id: "3", label: "Contact", icon: "mail" },
  { id: "4", label: "Overview", icon: "information" },
];

const mountStepper = (activeItem = "2", disablePreviousSteps = false) =>
  mount(MucStepper, {
    props: {
      stepItems,
      activeItem,
      disablePreviousSteps,
    },
    global: {
      stubs: {
        MucIcon: {
          props: ["icon"],
          template: '<span data-test="muc-icon" :data-icon="icon"></span>',
        },
      },
    },
  });

describe("MucStepper.vue", () => {
  it("renders Patternlab heading and an ol without redundant list attributes", () => {
    const wrapper = mountStepper("2");

    const heading = wrapper.find("h2.m-form-steps__heading");
    expect(heading.exists()).toBe(true);
    expect(heading.classes()).toContain("visually-hidden");
    expect(heading.find(".m-form-steps__current-step").text()).toBe("2");
    expect(heading.find(".m-form-steps__total-steps").text()).toContain(
      "von 4"
    );
    expect(heading.find(".m-form-steps__heading-text").text()).toBe("Delivery");

    const list = wrapper.find("ol.m-form-steps");
    expect(list.exists()).toBe(true);
    expect(list.attributes("role")).toBeUndefined();
    expect(list.attributes("aria-label")).toBeUndefined();
  });

  it("puts aria-current on the current list item and keeps step icons when done", () => {
    const wrapper = mountStepper("3");

    const steps = wrapper.findAll("li.m-form-step");
    expect(steps).toHaveLength(4);
    expect(steps[2].classes()).toContain("m-form-step--current");
    expect(steps[2].attributes("aria-current")).toBe("step");
    expect(steps[0].attributes("aria-current")).toBeUndefined();
    expect(steps[0].classes()).not.toContain("show-cursor");

    const icons = wrapper.findAll('[data-test="muc-icon"]');
    expect(icons[0].attributes("data-icon")).toBe("shopping-cart");
    expect(icons[1].attributes("data-icon")).toBe("calendar");
    expect(icons[2].attributes("data-icon")).toBe("mail");
    expect(icons.some((icon) => icon.attributes("data-icon") === "check")).toBe(
      false
    );
  });

  it("uses buttons for completed steps instead of tabindex on icon divs", async () => {
    const wrapper = mountStepper("3");

    const buttons = wrapper.findAll("button.m-form-step__button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0].text()).toContain("Zurück zu Schritt: Order");
    expect(buttons[0].find("div.m-form-step__icon").exists()).toBe(true);

    const decorativeIcons = wrapper
      .findAll("div.m-form-step__icon")
      .filter((icon) => !icon.element.closest("button"));
    expect(decorativeIcons).toHaveLength(2);
    decorativeIcons.forEach((icon) => {
      expect(icon.attributes("tabindex")).toBeUndefined();
      expect(icon.attributes("aria-label")).toBeUndefined();
      expect(icon.attributes("aria-current")).toBeUndefined();
      expect(icon.attributes("aria-labelledby")).toBeUndefined();
    });

    await buttons[0].trigger("click");
    expect(wrapper.emitted("changeStep")?.[0]).toEqual(["1"]);
  });

  it("does not render clickable previous steps when disabled", () => {
    const wrapper = mountStepper("3", true);

    expect(wrapper.findAll("button.m-form-step__button")).toHaveLength(0);
    expect(wrapper.findAll("div.m-form-step__icon.disabled")).toHaveLength(2);
  });
});
