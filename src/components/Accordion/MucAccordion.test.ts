import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h, nextTick } from "vue";

import MucAccordion from "./MucAccordion.vue";
import MucAccordionItem from "./MucAccordionItem.vue";

const itemIds = ["item-1", "item-2"];

const mountAccordion = (props: Record<string, unknown> = {}) =>
  mount(MucAccordion, {
    props: {
      id: "accordion-1",
      ...props,
    },
    slots: {
      default: ({ activeItems, onOpen, onClose }) =>
        itemIds.map((id) =>
          h(
            MucAccordionItem,
            {
              id,
              header: `Header ${id}`,
              activeItems,
              onOpen,
              onClose,
            },
            {
              content: () => `Content ${id}`,
            }
          )
        ),
    },
    global: {
      stubs: {
        MucIcon: true,
      },
    },
  });

describe("MucAccordion.vue", () => {
  it("renders its id, header, and default slot content", () => {
    const wrapper = mountAccordion({ header: "Accordion heading" });

    expect(wrapper.find(".m-accordion").attributes("id")).toBe("accordion-1");
    expect(wrapper.find("h2").text()).toBe("Accordion heading");
    expect(wrapper.findAll(".m-accordion__section")).toHaveLength(2);
    expect(wrapper.text()).toContain("Content item-1");
  });

  it("opens the configured default item", async () => {
    const wrapper = mountAccordion({ defaultItem: "item-2" });

    await nextTick();

    const buttons = wrapper.findAll(".m-accordion__section-button");

    expect(buttons[0].attributes("aria-expanded")).toBe("false");
    expect(buttons[1].attributes("aria-expanded")).toBe("true");
  });

  it("closes the previously open item when multiple is disabled", async () => {
    const wrapper = mountAccordion({ defaultItem: "item-1" });
    const buttons = wrapper.findAll(".m-accordion__section-button");

    await buttons[1].trigger("click");

    expect(buttons[0].attributes("aria-expanded")).toBe("false");
    expect(buttons[1].attributes("aria-expanded")).toBe("true");
  });

  it("keeps multiple items open when multiple is enabled", async () => {
    const wrapper = mountAccordion({
      defaultItem: "item-1",
      multiple: true,
    });
    const buttons = wrapper.findAll(".m-accordion__section-button");

    await buttons[1].trigger("click");

    expect(buttons[0].attributes("aria-expanded")).toBe("true");
    expect(buttons[1].attributes("aria-expanded")).toBe("true");
  });
});
