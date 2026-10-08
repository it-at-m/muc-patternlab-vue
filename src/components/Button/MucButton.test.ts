import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";

import MucButton from "./MucButton.vue";

describe("MucButton.vue", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders as a primary button with slot content by default", () => {
    const wrapper = mount(MucButton, {
      slots: { default: "Click me" },
    });

    const button = wrapper.find("button");
    expect(button.classes()).toContain("m-button");
    expect(button.classes()).toContain("m-button--primary");
    expect(button.attributes("aria-disabled")).toBe("false");
    expect(button.attributes("type")).toBeUndefined();
    expect(button.text()).toBe("Click me");
    expect(wrapper.find("svg").exists()).toBe(false);
  });

  it.each([
    ["secondary", "m-button--secondary"],
    ["ghost", "m-button--ghost"],
  ] as const)("applies the %s variant class", (variant, expectedClass) => {
    const wrapper = mount(MucButton, { props: { variant } });

    const button = wrapper.find("button");
    expect(button.classes()).toContain(expectedClass);
    expect(button.classes()).not.toContain("m-button--primary");
  });

  it("passes the type attribute through", () => {
    const wrapper = mount(MucButton, { props: { type: "submit" } });

    expect(wrapper.find("button").attributes("type")).toBe("submit");
  });

  it("emits click when enabled", async () => {
    const wrapper = mount(MucButton);

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("does not emit click when disabled", async () => {
    const wrapper = mount(MucButton, { props: { disabled: true } });

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(button.classes()).toContain("disabled");
    expect(button.attributes("aria-disabled")).toBe("true");
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  it("renders the icon after the slot content by default", () => {
    const wrapper = mount(MucButton, {
      props: { icon: "arrow-right" },
      slots: { default: "Next" },
    });

    const icon = wrapper.find("svg");
    expect(icon.classes()).toContain("m-button__icon--after");
    expect(icon.find("use").attributes("href")).toBe("#icon-arrow-right");
    expect(wrapper.element.firstElementChild?.tagName).toBe("SPAN");
  });

  it("renders the icon before the slot content when iconShownLeft is set", () => {
    const wrapper = mount(MucButton, {
      props: { icon: "arrow-left", iconShownLeft: true, iconAnimated: true },
      slots: { default: "Back" },
    });

    const button = wrapper.find("button");
    expect(button.classes()).toContain("m-button--animated-right");
    expect(button.classes()).toContain("m-button--animated-left");
    expect(wrapper.find("svg").classes()).toContain("m-button__icon--before");
    expect(wrapper.element.firstElementChild?.tagName.toLowerCase()).toBe(
      "svg"
    );
  });

  it("visually hides the slot content when iconOnly is set", () => {
    const wrapper = mount(MucButton, {
      props: { icon: "close", iconOnly: true },
      slots: { default: "Close" },
    });

    expect(wrapper.find("span").classes()).toContain("visually-hidden");
    expect(wrapper.find("svg").classes()).toContain("no-left-margin");
  });

  it("spins the icon for one second when spinIconOnClick is set", async () => {
    vi.useFakeTimers();
    const wrapper = mount(MucButton, {
      props: { icon: "copy", spinIconOnClick: true },
    });
    const button = wrapper.find("button");

    await button.trigger("click");
    expect(button.classes()).toContain("copied");

    vi.advanceTimersByTime(1000);
    await wrapper.vm.$nextTick();
    expect(button.classes()).not.toContain("copied");
  });
});
