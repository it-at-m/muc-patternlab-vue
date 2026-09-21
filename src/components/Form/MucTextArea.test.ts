import { mount, VueWrapper } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucTextArea from "./MucTextArea.vue";

const mountTextArea = (props: Record<string, unknown> = {}) => {
  const wrapper: VueWrapper = mount(MucTextArea, {
    props: {
      id: "message",
      modelValue: "",
      "onUpdate:modelValue": (value: string) =>
        wrapper.setProps({ modelValue: value }),
      ...props,
    },
  });
  return wrapper;
};

describe("MucTextArea.vue", () => {
  it("renders a textarea with three rows by default", () => {
    const wrapper = mountTextArea();

    const textarea = wrapper.find("textarea");
    expect(textarea.attributes("id")).toBe("textarea-message");
    expect(textarea.attributes("rows")).toBe("3");
    expect(textarea.attributes("required")).toBeUndefined();
    expect(wrapper.find("label").exists()).toBe(false);
    expect(wrapper.find(".m-hint").exists()).toBe(false);
    expect(wrapper.find(".m-character-count").exists()).toBe(false);
  });

  it("renders label, hint, placeholder and rows", () => {
    const wrapper = mountTextArea({
      label: "Message",
      hint: "Tell us more",
      placeholder: "Write here",
      rows: 7,
    });

    const label = wrapper.find("label");
    expect(label.text()).toBe("Message");
    expect(label.attributes("for")).toBe("textarea-message");
    expect(label.classes()).toContain("m-label--optional");
    expect(wrapper.find("#textarea-hint-message").text()).toBe("Tell us more");

    const textarea = wrapper.find("textarea");
    expect(textarea.attributes("placeholder")).toBe("Write here");
    expect(textarea.attributes("rows")).toBe("7");
    expect(textarea.attributes("aria-describedby")).toContain(
      "textarea-hint-message"
    );
  });

  it("marks the textarea as required", () => {
    const wrapper = mountTextArea({ label: "Message", required: true });

    const textarea = wrapper.find("textarea");
    expect(textarea.attributes("required")).toBeDefined();
    expect(textarea.attributes("aria-required")).toBe("true");
    expect(wrapper.find("label").classes()).not.toContain("m-label--optional");
  });

  it("binds the model value in both directions", async () => {
    const wrapper = mountTextArea({ modelValue: "Hello" });

    const textarea = wrapper.find("textarea");
    expect((textarea.element as HTMLTextAreaElement).value).toBe("Hello");

    await textarea.setValue("Hello World");

    expect(wrapper.emitted("update:modelValue")).toEqual([["Hello World"]]);
  });

  it("shows the error message", () => {
    const wrapper = mountTextArea({ errorMsg: "Message is required" });

    expect(wrapper.find(".m-form-group").classes()).toContain("has-error");
    expect(wrapper.find(".m-error-message").text()).toContain(
      "Message is required"
    );
  });

  it("counts characters when maxlength is set", async () => {
    const wrapper = mountTextArea({ maxlength: 50, modelValue: "Hi" });

    const textarea = wrapper.find("textarea");
    expect(textarea.attributes("maxlength")).toBe("50");
    expect(textarea.attributes("aria-describedby")).toContain(
      "textarea-count-message"
    );
    expect(wrapper.find("#textarea-count-message").text()).toBe(
      "Sie können bis zu 50 Zeichen eingeben."
    );
    expect(wrapper.find(".m-character-count__status").text()).toBe("2/50");

    await textarea.setValue("Hello");

    expect(wrapper.find(".m-character-count__status").text()).toBe("5/50");
  });

  it("updates the screen reader count and emits blur on blur", async () => {
    const wrapper = mountTextArea({ maxlength: 50, modelValue: "Hi" });

    const textarea = wrapper.find("textarea");
    const srStatus = () => wrapper.find(".m-character-count__sr-status").text();
    expect(srStatus()).toBe("2/50");

    await textarea.setValue("Hello");
    expect(srStatus()).toBe("2/50");

    await textarea.trigger("blur");
    expect(srStatus()).toBe("5/50");
    expect(wrapper.emitted("blur")).toHaveLength(1);
  });
});
