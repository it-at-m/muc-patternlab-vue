import { mount, VueWrapper } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucInput from "./MucInput.vue";

const mountInput = (
  props: Record<string, unknown> = {},
  slots: Record<string, string> = {}
) => {
  const wrapper: VueWrapper = mount(MucInput, {
    props: {
      id: "name",
      modelValue: "",
      "onUpdate:modelValue": (value: string) =>
        wrapper.setProps({ modelValue: value }),
      ...props,
    },
    slots,
  });
  return wrapper;
};

describe("MucInput.vue", () => {
  it("renders a plain text input", () => {
    const wrapper = mountInput();

    const input = wrapper.find("input");
    expect(input.attributes("id")).toBe("input-name");
    expect(input.attributes("type")).toBe("text");
    expect(input.attributes("aria-describedby")).toBeUndefined();
    expect(input.attributes("required")).toBeUndefined();
    expect(wrapper.find("label").exists()).toBe(false);
    expect(wrapper.find(".m-hint").exists()).toBe(false);
    expect(wrapper.find(".m-input__prefix").exists()).toBe(false);
    expect(wrapper.find(".m-input__suffix").exists()).toBe(false);
  });

  it("renders label, hint and input attributes", () => {
    const wrapper = mountInput({
      label: "Name",
      hint: "Your full name",
      placeholder: "Max Mustermann",
      type: "password",
      max: 20,
      autocomplete: "name",
      name: "fullname",
    });

    const label = wrapper.find("label");
    expect(label.text()).toBe("Name");
    expect(label.attributes("for")).toBe("input-name");
    expect(label.classes()).toContain("m-label--optional");
    expect(wrapper.find("#input-hint-name").text()).toBe("Your full name");

    const input = wrapper.find("input");
    expect(input.attributes("aria-describedby")).toBe("input-hint-name");
    expect(input.attributes("placeholder")).toBe("Max Mustermann");
    expect(input.attributes("type")).toBe("password");
    expect(input.attributes("maxlength")).toBe("20");
    expect(input.attributes("autocomplete")).toBe("name");
    expect(input.attributes("name")).toBe("fullname");
  });

  it("marks the input as required", () => {
    const wrapper = mountInput({ label: "Name", required: true });

    const input = wrapper.find("input");
    expect(input.attributes("required")).toBeDefined();
    expect(input.attributes("aria-required")).toBe("true");
    expect(wrapper.find("label").classes()).not.toContain("m-label--optional");
  });

  it("binds the model value in both directions", async () => {
    const wrapper = mountInput({ modelValue: "initial" });

    const input = wrapper.find("input");
    expect((input.element as HTMLInputElement).value).toBe("initial");

    await input.setValue("changed");

    expect(wrapper.emitted("update:modelValue")).toEqual([["changed"]]);
  });

  it("shows the error message", () => {
    const wrapper = mountInput({ errorMsg: "Name is required" });

    expect(wrapper.find(".m-form-group").classes()).toContain("has-error");
    expect(wrapper.find(".m-error-message").text()).toContain(
      "Name is required"
    );
  });

  it("renders the prefix slot", () => {
    const wrapper = mountInput({}, { prefix: "€" });

    expect(wrapper.find(".m-input__prefix").text()).toBe("€");
  });

  it("renders a suffix button that emits suffixClick", async () => {
    const wrapper = mountInput({ suffixIcon: "search" });

    const button = wrapper.find(".m-input__suffix");
    expect(
      button
        .find("use")
        .element.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    ).toBe("#icon-search");

    await button.trigger("click");

    expect(wrapper.emitted("suffixClick")).toHaveLength(1);
  });

  it("emits blur when the input loses focus", async () => {
    const wrapper = mountInput();

    await wrapper.find("input").trigger("blur");

    expect(wrapper.emitted("blur")).toHaveLength(1);
  });

  describe("search", () => {
    const dataList = ["chocolate", "coconut", "vanilla", "Mint"];

    it("does not suggest options for an empty value", () => {
      const wrapper = mountInput({ type: "search", dataList });

      expect(wrapper.find(".autocomplete-result-list").exists()).toBe(false);
    });

    it("suggests options starting with the value case-insensitively", async () => {
      const wrapper = mountInput({ type: "search", dataList });

      await wrapper.find("input").setValue("C");
      expect(
        wrapper.findAll(".autocomplete-result").map((li) => li.text())
      ).toEqual(["chocolate", "coconut"]);

      await wrapper.find("input").setValue("m");
      expect(
        wrapper.findAll(".autocomplete-result").map((li) => li.text())
      ).toEqual(["Mint"]);
    });

    it("hides an option that matches the value exactly", async () => {
      const wrapper = mountInput({ type: "search", dataList });

      await wrapper.find("input").setValue("vanilla");

      expect(wrapper.find(".autocomplete-result-list").exists()).toBe(false);
    });

    it("selects a suggested option", async () => {
      const wrapper = mountInput({ type: "search", dataList });

      await wrapper.find("input").setValue("co");
      await wrapper.findAll(".autocomplete-result")[0].trigger("click");

      expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["coconut"]);
      expect(wrapper.find(".autocomplete-result-list").exists()).toBe(false);
    });

    it("does not suggest options for other input types", async () => {
      const wrapper = mountInput({ dataList });

      await wrapper.find("input").setValue("c");

      expect(wrapper.find(".autocomplete-result-list").exists()).toBe(false);
    });
  });
});
