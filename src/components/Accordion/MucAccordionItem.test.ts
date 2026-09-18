import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { nextTick } from "vue";

import MucAccordionItem from "./MucAccordionItem.vue";

describe("MucAccordionItem.vue", () => {
  it("renders with required props and content slot", () => {
    const wrapper = mount(MucAccordionItem, {
      props: { id: "accordion-1", header: "Accordion Item 1", },
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
});
