import { mount, VueWrapper } from "@vue/test-utils";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";

import MucSelect from "./MucSelect.vue";

const objectItems = [
  { id: "1", name: "Object 1" },
  { id: "2", name: "Object 2" },
  { id: "3", name: "Object 3" },
];

const stringItems = ["String 1", "String 2", "String 3"];

const mountSelect = (props: Record<string, unknown> = {}) => {
  const wrapper: VueWrapper = mount(MucSelect, {
    props: {
      id: "select",
      items: stringItems,
      "onUpdate:modelValue": (value: unknown) =>
        wrapper.setProps({ modelValue: value }),
      ...props,
    },
    attachTo: document.body,
  });
  return wrapper;
};

const nativeSelect = (wrapper: VueWrapper) =>
  wrapper.find("select").element as HTMLSelectElement;

const selectedLabels = (wrapper: VueWrapper) =>
  Array.from(nativeSelect(wrapper).selectedOptions).map((o) => o.text);

/**
 * Selects a choice the way Choices.js expects it - via mousedown on the rendered choice.
 */
const choose = async (wrapper: VueWrapper, value: string) => {
  await wrapper
    .find(`.choices__list--dropdown [data-choice][data-value="${value}"]`)
    .trigger("mousedown");
  await nextTick();
};

describe("MucSelect.vue", () => {
  beforeAll(() => {
    // Choices.js checks the viewport when opening the dropdown
    window.matchMedia = vi.fn().mockReturnValue({ matches: false });
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("renders label and hint connected to the select", () => {
    const wrapper = mountSelect({ label: "Choose", hint: "Pick one" });

    const label = wrapper.find("label");
    expect(label.text()).toBe("Choose");
    expect(label.attributes("for")).toBe("select-select");
    expect(wrapper.find("#select-hint-select").text()).toBe("Pick one");
    expect(wrapper.find("select").attributes("aria-describedby")).toBe(
      "select-hint-select"
    );
  });

  it("renders no label and hint when not given", () => {
    const wrapper = mountSelect();

    expect(wrapper.find("label").exists()).toBe(false);
    expect(wrapper.find(".m-hint").exists()).toBe(false);
  });

  it("renders string items as choices", () => {
    const wrapper = mountSelect();

    const choices = wrapper
      .findAll(".choices__list--dropdown .choices__item--choice")
      .map((c) => c.text());
    expect(choices).toEqual(stringItems);
  });

  it("renders object items by their itemTitle", () => {
    const wrapper = mountSelect({ items: objectItems, itemTitle: "name" });

    const choices = wrapper
      .findAll(".choices__list--dropdown .choices__item--choice")
      .map((c) => c.text());
    expect(choices).toEqual(["Object 1", "Object 2", "Object 3"]);
  });

  it("preselects the model value", () => {
    const wrapper = mountSelect({ modelValue: "String 2" });

    expect(selectedLabels(wrapper)).toEqual(["String 2"]);
  });

  it("preselects an object model value by itemTitle", () => {
    const wrapper = mountSelect({
      items: objectItems,
      itemTitle: "name",
      modelValue: { id: "3", name: "Object 3" },
    });

    expect(selectedLabels(wrapper)).toEqual(["Object 3"]);
  });

  it("emits the selected item", async () => {
    const wrapper = mountSelect({ items: objectItems, itemTitle: "name" });

    await choose(wrapper, "1");

    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([
      objectItems[1],
    ]);
  });

  it("supports multiple selection", async () => {
    const wrapper = mountSelect({
      multiple: true,
      modelValue: ["String 1", "String 3"],
    });

    expect(nativeSelect(wrapper).multiple).toBe(true);
    expect(selectedLabels(wrapper)).toEqual(["String 1", "String 3"]);

    await choose(wrapper, "1");

    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([
      ["String 1", "String 3", "String 2"],
    ]);
  });

  it("preselects multiple object model values by itemTitle", () => {
    const wrapper = mountSelect({
      items: objectItems,
      itemTitle: "name",
      multiple: true,
      modelValue: [objectItems[0], objectItems[2]],
    });

    expect(selectedLabels(wrapper)).toEqual(["Object 1", "Object 3"]);
  });

  it("updates the selection when the model value changes", async () => {
    const wrapper = mountSelect({ modelValue: "String 1" });

    await wrapper.setProps({ modelValue: "String 3" });

    expect(selectedLabels(wrapper)).toEqual(["String 3"]);
  });

  it("recreates the choices when items change", async () => {
    const wrapper = mountSelect();

    await wrapper.setProps({ items: ["A", "B"] });

    const choices = wrapper
      .findAll(".choices__list--dropdown .choices__item--choice")
      .map((c) => c.text());
    expect(choices).toEqual(["A", "B"]);
  });

  it("toggles the dropdown on click", async () => {
    const wrapper = mountSelect();
    const dropdown = () =>
      wrapper.find(".choices__list.choices__list--dropdown");

    await wrapper.find(".m-form-group > div").trigger("click");
    expect(dropdown().classes()).toContain("is-active");
    expect(dropdown().attributes("aria-expanded")).toBe("true");

    await wrapper.find(".m-form-group > div").trigger("click");
    expect(dropdown().classes()).not.toContain("is-active");
    expect(dropdown().attributes("aria-expanded")).toBe("false");
  });

  it("destroys the choices instance on unmount", () => {
    const wrapper = mountSelect();
    const select = nativeSelect(wrapper);
    expect(select.classList).toContain("choices__input");

    wrapper.unmount();

    expect(select.classList).not.toContain("choices__input");
  });
});
