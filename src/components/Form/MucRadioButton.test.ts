import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h } from "vue";

import MucRadioButton from "./MucRadioButton.vue";
import MucRadioButtonGroup from "./MucRadioButtonGroup.vue";

const options = [
  { id: "first", value: "first", label: "First", hint: "First hint" },
  { id: "second", value: "second", label: "Second" },
  { id: "third", value: "third", label: "Third", disabled: true },
];

const mountGroup = (props: Record<string, unknown> = {}) =>
  mount(MucRadioButtonGroup, {
    props: {
      heading: "Choose one",
      ...props,
    },
    slots: {
      default: () => options.map((option) => h(MucRadioButton, option)),
    },
  });

const radio = (wrapper: ReturnType<typeof mountGroup>, id: string) =>
  wrapper.find(`#radio-${id}`);

const isChecked = (wrapper: ReturnType<typeof mountGroup>, id: string) =>
  (radio(wrapper, id).element as HTMLInputElement).checked;

describe("MucRadioButtonGroup.vue / MucRadioButton.vue", () => {
  it("renders heading, labels and hints", () => {
    const wrapper = mountGroup();

    expect(wrapper.find(".m-radio-group__heading").text()).toBe("Choose one");
    expect(wrapper.findAll(".m-radios__item")).toHaveLength(3);

    const label = wrapper.find('label[for="radio-first"]');
    expect(label.text()).toContain("First");
    expect(wrapper.find("#radio-hint-first").text()).toBe("First hint");
    expect(radio(wrapper, "first").attributes("aria-describedby")).toBe(
      "radio-hint-first"
    );
    expect(
      radio(wrapper, "second").attributes("aria-describedby")
    ).toBeUndefined();
  });

  it("checks the radio button matching the model value", () => {
    const wrapper = mountGroup({ modelValue: "second" });

    expect(isChecked(wrapper, "first")).toBe(false);
    expect(isChecked(wrapper, "second")).toBe(true);
  });

  it("selects a radio button via input or label", async () => {
    const wrapper = mountGroup();

    await radio(wrapper, "first").trigger("click");
    expect(wrapper.emitted("change")).toEqual([["first"]]);
    expect(wrapper.emitted("update:modelValue")).toEqual([["first"]]);
    expect(isChecked(wrapper, "first")).toBe(true);

    await wrapper.find('label[for="radio-second"]').trigger("click");
    expect(wrapper.emitted("change")?.at(-1)).toEqual(["second"]);
    expect(isChecked(wrapper, "first")).toBe(false);
    expect(isChecked(wrapper, "second")).toBe(true);
  });

  it("disables a single radio button", () => {
    const wrapper = mountGroup();

    expect(radio(wrapper, "first").attributes("disabled")).toBeUndefined();
    expect(radio(wrapper, "third").attributes("disabled")).toBeDefined();
  });

  it("disables all radio buttons when the group is disabled", () => {
    const wrapper = mountGroup({ disabled: true });

    for (const { id } of options) {
      expect(radio(wrapper, id).attributes("disabled")).toBeDefined();
    }
  });

  it("does not render a radio button outside of a group", () => {
    const wrapper = mount(MucRadioButton, {
      props: { id: "alone", value: "alone" },
    });

    expect(wrapper.find("input").exists()).toBe(false);
  });
});
