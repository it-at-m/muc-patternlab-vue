import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucCheckbox from "./MucCheckbox.vue";

const mountCheckbox = (props: Record<string, unknown> = {}) =>
  mount(MucCheckbox, {
    props: {
      id: "terms",
      label: "Accept terms",
      ...props,
    },
  });

describe("MucCheckbox.vue", () => {
  it("renders an unchecked checkbox connected to its label and hint", () => {
    const wrapper = mountCheckbox({ hint: "Required to continue" });

    const input = wrapper.find("input");
    expect(input.attributes("id")).toBe("checkbox-terms");
    expect(input.attributes("type")).toBe("checkbox");
    expect((input.element as HTMLInputElement).checked).toBe(false);
    expect(wrapper.find("label").attributes("for")).toBe("checkbox-terms");
    expect(wrapper.find("label").text()).toContain("Accept terms");
    expect(wrapper.find("#checkbox-hint-terms").text()).toBe(
      "Required to continue"
    );
  });

  it("reflects the model value", () => {
    const wrapper = mountCheckbox({ modelValue: true });

    expect((wrapper.find("input").element as HTMLInputElement).checked).toBe(
      true
    );
  });

  it("toggles and emits when the input is clicked", async () => {
    const wrapper = mountCheckbox();

    await wrapper.find("input").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toEqual([[true]]);
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("toggles once when the surrounding item is clicked", async () => {
    const wrapper = mountCheckbox({ modelValue: true });

    await wrapper.find(".m-checkboxes__item").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toEqual([[false]]);
    expect(wrapper.emitted("click")).toHaveLength(1);
  });
});
