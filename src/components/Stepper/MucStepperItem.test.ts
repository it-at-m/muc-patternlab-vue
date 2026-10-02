import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucStepperItem from "./MucStepperItem.vue";

const item = { id: "step-1", label: "Order", icon: "shopping-cart" };

const mountItem = (props: Record<string, unknown> = {}) =>
  mount(MucStepperItem, {
    props: {
      item,
      isActive: false,
      isDone: false,
      disabled: false,
      ...props,
    },
  });

describe("MucStepperItem.vue", () => {
  it("renders label and icon of an upcoming step", () => {
    const wrapper = mountItem();

    expect(wrapper.find(".m-form-step__title").text()).toBe("Order");
    expect(wrapper.find("use").attributes("href")).toBe("#icon-shopping-cart");
    expect(wrapper.find("button").exists()).toBe(false);
    expect(wrapper.attributes("aria-current")).toBeUndefined();
    expect(wrapper.classes()).not.toContain("m-form-step--current");
  });

  it("marks the active step as current", () => {
    const wrapper = mountItem({ isActive: true, isDone: true });

    expect(wrapper.classes()).toContain("m-form-step--current");
    expect(wrapper.attributes("aria-current")).toBe("step");
    expect(wrapper.find("button").exists()).toBe(false);
  });

  it("renders a done step as a button that emits its id", async () => {
    const wrapper = mountItem({ isDone: true });

    const button = wrapper.find("button");
    expect(button.attributes("type")).toBe("button");
    expect(button.find(".visually-hidden").text()).toBe(
      "Zurück zu Schritt: Order"
    );

    await button.trigger("click");

    expect(wrapper.emitted("click")).toEqual([["step-1"]]);
  });

  it("does not render a button for a disabled done step", () => {
    const wrapper = mountItem({ isDone: true, disabled: true });

    expect(wrapper.find("button").exists()).toBe(false);
    expect(wrapper.find(".m-form-step__icon").classes()).toContain("disabled");
    expect(wrapper.find(".m-form-step__title").classes()).toContain("disabled");
  });
});
