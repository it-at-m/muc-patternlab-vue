import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucCard from "./MucCard.vue";

const mountCard = (props: Record<string, unknown> = {}) =>
  mount(MucCard, {
    props: {
      title: "Card title",
      disabled: false,
      ...props,
    },
    slots: {
      headerPrefix: '<span class="prefix">Prefix</span>',
      content: "<p>Card content</p>",
    },
  });

describe("MucCard.vue", () => {
  it("renders title, slots and divider", () => {
    const wrapper = mountCard();

    expect(wrapper.find("h3").text()).toBe("Card title");
    expect(wrapper.find(".card-header .prefix").text()).toBe("Prefix");
    expect(wrapper.find("p").text()).toBe("Card content");
    expect(wrapper.find(".muc-divider").exists()).toBe(true);
    expect(wrapper.find(".card-tagline").exists()).toBe(false);
  });

  it("renders the tagline when provided", () => {
    const wrapper = mountCard({ tagline: "Card tagline" });

    expect(wrapper.find(".card-tagline").text()).toBe("Card tagline");
  });

  it("links to href with the given target", () => {
    const wrapper = mountCard({
      href: "https://example.com",
      target: "_blank",
    });

    const link = wrapper.find("a");
    expect(link.attributes("href")).toBe("https://example.com");
    expect(link.attributes("target")).toBe("_blank");
  });

  it("emits click when no href is set", async () => {
    const wrapper = mountCard();

    await wrapper.find(".card").trigger("click");

    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("does not emit click when href is set", async () => {
    const wrapper = mountCard({ href: "https://example.com" });

    await wrapper.find(".card").trigger("click");

    expect(wrapper.emitted("click")).toBeUndefined();
  });

  it("removes the link and suppresses click when disabled", async () => {
    const wrapper = mountCard({ href: "https://example.com", disabled: true });

    const card = wrapper.find(".card");
    await card.trigger("click");

    expect(card.attributes("aria-disabled")).toBe("true");
    expect(wrapper.find("a").attributes("href")).toBeUndefined();
    expect(wrapper.emitted("click")).toBeUndefined();
  });
});
