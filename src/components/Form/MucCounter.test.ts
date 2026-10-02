import { mount, VueWrapper } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucCounter from "./MucCounter.vue";

const mountCounter = (props: Record<string, unknown> = {}) => {
  const wrapper: VueWrapper = mount(MucCounter, {
    props: {
      label: "Tickets",
      modelValue: 0,
      "onUpdate:modelValue": (value: number) =>
        wrapper.setProps({ modelValue: value }),
      ...props,
    },
  });
  return wrapper;
};

const buttons = (wrapper: VueWrapper) => {
  const [minus, plus] = wrapper.findAll("button");
  return { minus, plus };
};

const value = (wrapper: VueWrapper) =>
  wrapper
    .find("strong")
    .text()
    .replace(/.*ist\s*/s, "");

describe("MucCounter.vue", () => {
  it("renders value, label and button labels", () => {
    const wrapper = mountCounter({ modelValue: 2 });
    const { minus, plus } = buttons(wrapper);

    expect(value(wrapper)).toBe("2");
    expect(wrapper.find("label").text()).toBe("Tickets");
    expect(minus.attributes("aria-label")).toBe(
      "Anzahl Tickets reduzieren auf 1"
    );
    expect(plus.attributes("aria-label")).toBe("Anzahl Tickets erhöhen auf 3");
  });

  it("increases and decreases the value", async () => {
    const wrapper = mountCounter({ modelValue: 1 });
    const { minus, plus } = buttons(wrapper);

    await plus.trigger("click");
    await plus.trigger("click");
    expect(value(wrapper)).toBe("3");

    await minus.trigger("click");
    expect(value(wrapper)).toBe("2");
    expect(wrapper.emitted("update:modelValue")).toEqual([[2], [3], [2]]);
  });

  it("disables the minus button at 0", async () => {
    const wrapper = mountCounter();
    const { minus } = buttons(wrapper);

    expect(minus.attributes("aria-disabled")).toBe("true");
    expect(minus.classes()).toContain("counter-btn--disabled");

    await minus.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("disables the buttons at min and max", () => {
    const atMin = buttons(mountCounter({ modelValue: 2, min: 2, max: 5 }));
    expect(atMin.minus.attributes("aria-disabled")).toBe("true");
    expect(atMin.plus.attributes("aria-disabled")).toBe("false");

    const atMax = buttons(mountCounter({ modelValue: 5, min: 2, max: 5 }));
    expect(atMax.minus.attributes("aria-disabled")).toBe("false");
    expect(atMax.plus.attributes("aria-disabled")).toBe("true");
  });

  it("disables both buttons when disabled", () => {
    const { minus, plus } = buttons(
      mountCounter({ modelValue: 2, disabled: true })
    );

    expect(minus.attributes("aria-disabled")).toBe("true");
    expect(plus.attributes("aria-disabled")).toBe("true");
  });

  it("clamps the value when min or max change", async () => {
    const wrapper = mountCounter({ modelValue: 5 });

    await wrapper.setProps({ max: 3 });
    expect(value(wrapper)).toBe("3");

    await wrapper.setProps({ min: 4, max: undefined });
    expect(value(wrapper)).toBe("4");
  });

  it("renders the label as link when a link is given", () => {
    const wrapper = mountCounter({ link: "https://example.com" });

    const link = wrapper.find("a.m-link");
    expect(link.attributes("href")).toBe("https://example.com");
    expect(link.text()).toBe("Tickets");
  });
});
