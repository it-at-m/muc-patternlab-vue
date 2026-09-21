import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucLink from "./MucLink.vue";

describe("MucLink.vue", () => {
  it("renders the label with default href and target", () => {
    const wrapper = mount(MucLink, { props: { label: "Link label" } });

    const link = wrapper.find("a");
    expect(link.classes()).toContain("m-link");
    expect(link.attributes("href")).toBe("#");
    expect(link.attributes("target")).toBe("_blank");
    expect(link.text()).toBe("Link label");
    expect(wrapper.find("svg").exists()).toBe(false);
  });

  it("passes href and target through", () => {
    const wrapper = mount(MucLink, {
      props: { label: "Link", href: "https://example.com", target: "_self" },
    });

    const link = wrapper.find("a");
    expect(link.attributes("href")).toBe("https://example.com");
    expect(link.attributes("target")).toBe("_self");
  });

  it("applies the no-underline and disabled classes", () => {
    const wrapper = mount(MucLink, {
      props: { label: "Link", noUnderline: true, disabled: true },
    });

    const link = wrapper.find("a");
    expect(link.classes()).toContain("m-link--reversed-underline");
    expect(link.classes()).toContain("m-link--disabled");
  });

  it("renders prepend and append icons", () => {
    const wrapper = mount(MucLink, {
      props: {
        label: "Link",
        prependIcon: "arrow-left",
        appendIcon: "arrow-right",
      },
    });

    const icons = wrapper.findAll("svg");
    expect(icons).toHaveLength(2);
    expect(icons[0].classes()).toContain("icon--before");
    expect(icons[0].find("use").attributes("href")).toBe("#icon-arrow-left");
    expect(icons[1].classes()).toContain("icon--after");
    expect(icons[1].find("use").attributes("href")).toBe("#icon-arrow-right");
  });

  it("replaces the icons with prepend and append slots", () => {
    const wrapper = mount(MucLink, {
      props: {
        label: "Link",
        prependIcon: "arrow-left",
        appendIcon: "arrow-right",
      },
      slots: {
        prepend: '<span class="custom-prepend" />',
        append: '<span class="custom-append" />',
      },
    });

    expect(wrapper.find(".custom-prepend").exists()).toBe(true);
    expect(wrapper.find(".custom-append").exists()).toBe(true);
    expect(wrapper.find("svg").exists()).toBe(false);
  });
});
