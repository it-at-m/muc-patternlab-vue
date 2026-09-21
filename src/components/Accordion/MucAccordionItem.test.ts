import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";

import MucAccordionItem from "./MucAccordionItem.vue";

describe("MucAccordionItem.vue", () => {
  it("renders with required props and content slot", () => {
    const wrapper = mount(MucAccordionItem, {
      props: { id: "accordion-1", header: "Accordion Item 1" },
      slots: {
        content: "This is the content of Accordion Item 1",
      },
    });

    const mucAccordionSection = wrapper.find(".m-accordion__section");

    expect(mucAccordionSection.exists()).toBe(true);
    expect(wrapper.text()).toContain("Accordion Item 1");
    expect(wrapper.text()).toContain("This is the content of Accordion Item 1");
  });

  it("emits open event when clicked", async () => {
    const wrapper = mount(MucAccordionItem, {
      props: { id: "accordion-2", header: "Clickable Item" },
    });

    const button = wrapper.find(".m-accordion__section-button");

    await button.trigger("click");

    expect(wrapper.emitted()).toHaveProperty("open");
    expect(wrapper.emitted("open")?.[0]).toEqual(["accordion-2"]);
  });

  it("emits 'close' event when clicked while open", async () => {
    const wrapper = mount(MucAccordionItem, {
      props: {
        id: "accordion-1",
        header: "Accordion Item",
        activeItems: ["accordion-1"],
      },
    });

    await nextTick();

    const button = wrapper.find(".m-accordion__section-button");

    expect(button.attributes("aria-expanded")).toBe("true");
    expect(button.classes()).not.toContain("collapsed");

    await button.trigger("click");

    expect(wrapper.emitted()).toHaveProperty("close");
    expect(wrapper.emitted("close")?.[0]).toEqual(["accordion-1"]);
    expect(button.attributes("aria-expanded")).toBe("false");
    expect(button.classes()).toContain("collapsed");
  });

  describe("header meta and animation", () => {
    afterEach(() => {
      vi.useRealTimers();
    });

    it("renders no meta section without subtitle slots", () => {
      const wrapper = mount(MucAccordionItem, {
        props: { id: "item", header: "Header" },
      });

      expect(wrapper.find(".m-accordion__section-meta").exists()).toBe(false);
    });

    it("renders subtitle and subtitle icon slots", () => {
      const wrapper = mount(MucAccordionItem, {
        props: { id: "item", header: "Header" },
        slots: {
          subtitle: "Subtitle",
          subtitleIcon: '<span class="custom-icon" />',
        },
      });

      const meta = wrapper.find(".m-accordion__section-meta");
      expect(meta.text()).toBe("Subtitle");
      expect(meta.find(".m-accordion__meta-icon .custom-icon").exists()).toBe(
        true
      );
    });

    it("connects button and content for accessibility", () => {
      const wrapper = mount(MucAccordionItem, {
        props: { id: "item", header: "Header" },
      });

      expect(wrapper.find("h3").attributes("id")).toBe("heading-item");
      expect(
        wrapper.find(".m-accordion__section-button").attributes("aria-controls")
      ).toBe("content-item");
      const section = wrapper.find("section");
      expect(section.attributes("id")).toBe("content-item");
      expect(section.attributes("aria-labelledby")).toBe("heading-item");
    });

    it("animates the content height while opening and closing", async () => {
      vi.useFakeTimers();
      const wrapper = mount(MucAccordionItem, {
        props: { id: "item", header: "Header" },
      });
      const button = wrapper.find(".m-accordion__section-button");
      const section = wrapper.find("section");
      const element = section.element as HTMLElement;

      await button.trigger("click");
      expect(section.classes()).toContain("collapsing");
      expect(section.classes()).toContain("show");
      expect(element.style.height).toBe("0px");
      vi.runAllTimers();
      expect(element.style.height).toBe("0px"); // jsdom has no layout, scrollHeight is 0

      await button.trigger("click");
      expect(section.classes()).not.toContain("show");
      vi.runAllTimers();
      expect(element.style.height).toBe("0px");
    });

    it("resets the collapsing state after the transition ended", async () => {
      const wrapper = mount(MucAccordionItem, {
        props: { id: "item", header: "Header" },
      });
      const section = wrapper.find("section");

      await wrapper.find(".m-accordion__section-button").trigger("click");
      expect(section.classes()).toContain("collapsing");

      await section.trigger("transitionend");

      expect(section.classes()).not.toContain("collapsing");
      expect(section.classes()).toContain("collapse");
      expect((section.element as HTMLElement).style.height).toBe("");
    });

    it("collapses when it is removed from the active items", async () => {
      const wrapper = mount(MucAccordionItem, {
        props: { id: "item", header: "Header", activeItems: ["item"] },
      });
      await nextTick();
      const button = wrapper.find(".m-accordion__section-button");
      expect(button.attributes("aria-expanded")).toBe("true");

      await wrapper.setProps({ activeItems: ["other"] });

      expect(button.attributes("aria-expanded")).toBe("false");
      expect(wrapper.emitted("close")).toBeUndefined();
    });

    it("removes the transition listener on unmount", () => {
      const wrapper = mount(MucAccordionItem, {
        props: { id: "item", header: "Header" },
      });
      const element = wrapper.find("section").element;
      const removeListener = vi.spyOn(element, "removeEventListener");

      wrapper.unmount();

      expect(removeListener).toHaveBeenCalledWith(
        "transitionend",
        expect.any(Function)
      );
    });
  });
});
