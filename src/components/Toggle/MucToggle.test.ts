import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucToggle from "./MucToggle.vue";

const mountToggle = (props: Record<string, unknown> = {}) => {
  const wrapper = mount(MucToggle, {
    props: {
      "onUpdate:modelValue": (value: boolean) =>
        wrapper.setProps({ modelValue: value }),
      ...props,
    },
  });
  return wrapper;
};

describe("MucToggle.vue", () => {
  it("renders an unchecked switch with a fallback aria-label", () => {
    const wrapper = mountToggle();

    const button = wrapper.find("button");
    expect(button.attributes("role")).toBe("switch");
    expect(button.attributes("type")).toBe("button");
    expect(button.attributes("aria-checked")).toBe("false");
    expect(button.attributes("aria-label")).toBe("Toggle");
    expect(button.classes()).not.toContain("m-toggle-switch--pressed");
    expect(wrapper.findAll(".m-toggle-switch__label")).toHaveLength(0);
  });

  it("reflects the model value", () => {
    const wrapper = mountToggle({ modelValue: true });

    const button = wrapper.find("button");
    expect(button.attributes("aria-checked")).toBe("true");
    expect(button.classes()).toContain("m-toggle-switch--pressed");
  });

  it("toggles and emits when clicked", async () => {
    const wrapper = mountToggle();
    const button = wrapper.find("button");

    await button.trigger("click");
    expect(button.attributes("aria-checked")).toBe("true");

    await button.trigger("click");
    expect(button.attributes("aria-checked")).toBe("false");

    expect(wrapper.emitted("update:modelValue")).toEqual([[true], [false]]);
  });

  it("does not toggle when disabled", async () => {
    const wrapper = mountToggle({ disabled: true });

    const button = wrapper.find("button");
    expect(button.attributes("disabled")).toBeDefined();

    await button.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(button.attributes("aria-checked")).toBe("false");
  });

  it("highlights a single label only while switched on", async () => {
    const wrapper = mountToggle({ labelLeft: "Nur geöffnete Standorte" });

    const label = wrapper.find(".m-toggle-switch__label");
    expect(label.text()).toBe("Nur geöffnete Standorte");
    expect(wrapper.find("button").attributes("aria-label")).toBeUndefined();
    expect(label.classes()).not.toContain("m-toggle-switch__label--active");

    await wrapper.find("button").trigger("click");
    expect(label.classes()).toContain("m-toggle-switch__label--active");
  });

  it("highlights the left label while off and the right label while on", async () => {
    const wrapper = mountToggle({
      labelLeft: "Listenansicht",
      labelRight: "Kalenderansicht",
    });

    const [left, right] = wrapper.findAll(".m-toggle-switch__label");
    expect(left.text()).toBe("Listenansicht");
    expect(right.text()).toBe("Kalenderansicht");
    expect(left.classes()).toContain("m-toggle-switch__label--active");
    expect(right.classes()).not.toContain("m-toggle-switch__label--active");

    await wrapper.find("button").trigger("click");
    expect(left.classes()).not.toContain("m-toggle-switch__label--active");
    expect(right.classes()).toContain("m-toggle-switch__label--active");
  });
});
