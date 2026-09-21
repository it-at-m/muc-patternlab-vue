import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucIntro from "./MucIntro.vue";

const mountIntro = (props: Record<string, unknown> = {}) =>
  mount(MucIntro, {
    props: {
      title: "Intro title",
      ...props,
    },
    slots: {
      default: "Intro body",
    },
  });

describe("MucIntro.vue", () => {
  it("renders the overview variant by default", () => {
    const wrapper = mountIntro();

    expect(wrapper.find(".m-intro-summary-text").exists()).toBe(true);
    expect(wrapper.find(".m-intro-vertical").exists()).toBe(false);
    expect(wrapper.find(".m-intro-summary-text__title").text()).toBe(
      "Intro title"
    );
    expect(wrapper.find(".m-intro-summary-text__text").text()).toBe(
      "Intro body"
    );
    expect(wrapper.find(".muc-divider").exists()).toBe(true);
    expect(wrapper.find(".m-intro-vertical__tagline").exists()).toBe(false);
  });

  it("renders the tagline in the overview variant", () => {
    const wrapper = mountIntro({ tagline: "Intro tagline" });

    expect(wrapper.find(".m-intro-vertical__tagline").text()).toBe(
      "Intro tagline"
    );
  });

  it("hides the divider when divider is false", () => {
    const wrapper = mountIntro({ divider: false });

    expect(wrapper.find(".muc-divider").exists()).toBe(false);
  });

  it("renders the detail variant", () => {
    const wrapper = mountIntro({ variant: "detail", tagline: "Intro tagline" });

    const intro = wrapper.find(".m-intro-vertical");
    expect(intro.exists()).toBe(true);
    expect(intro.classes()).not.toContain("m-intro-vertical--with-pictogram");
    expect(wrapper.find(".m-intro-summary-text").exists()).toBe(false);
    expect(wrapper.find(".m-intro-vertical__title").text()).toBe("Intro title");
    expect(wrapper.find(".m-intro-vertical__tagline").text()).toBe(
      "Intro tagline"
    );
    expect(wrapper.find(".m-intro-vertical__content").text()).toBe(
      "Intro body"
    );
    expect(wrapper.find("img").exists()).toBe(false);
  });

  it("renders the pictogram with the given size in the detail variant", () => {
    const wrapper = mountIntro({
      variant: "detail",
      img: "/pictogram.svg",
      size: 96,
    });

    expect(wrapper.find(".m-intro-vertical").classes()).toContain(
      "m-intro-vertical--with-pictogram"
    );
    const img = wrapper.find(".m-intro-vertical__pictogram img");
    expect(img.attributes("src")).toBe("/pictogram.svg");
    expect(img.attributes("width")).toBe("96");
    expect(img.attributes("height")).toBe("96");
  });

  it("uses a default image size of 64", () => {
    const wrapper = mountIntro({ variant: "detail", img: "/pictogram.svg" });

    expect(wrapper.find("img").attributes("width")).toBe("64");
  });

  it("ignores img in the overview variant", () => {
    const wrapper = mountIntro({ img: "/pictogram.svg" });

    expect(wrapper.find("img").exists()).toBe(false);
  });
});
