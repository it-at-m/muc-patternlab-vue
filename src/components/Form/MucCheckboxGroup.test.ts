import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucCheckboxGroup from "./MucCheckboxGroup.vue";

describe("MucCheckboxGroup.vue", () => {
  it("renders the heading and checkboxes without a collapse button", () => {
    const wrapper = mount(MucCheckboxGroup, {
      props: { heading: "Options" },
      slots: { checkboxes: '<input type="checkbox" class="cb" />' },
    });

    expect(wrapper.find(".m-checkbox-group__heading").text()).toBe("Options");
    expect(wrapper.find(".cb").exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(false);
    expect(wrapper.find(".m-checkboxes__collapse__container").exists()).toBe(
      false
    );
  });

  it("renders the heading as h3 by default", () => {
    const wrapper = mount(MucCheckboxGroup, {
      props: { heading: "Options" },
    });

    expect(wrapper.find(".m-checkbox-group__heading").element.tagName).toBe(
      "H3"
    );
  });

  it("renders the heading with the given heading level", () => {
    const wrapper = mount(MucCheckboxGroup, {
      props: { heading: "Options", headingLevel: 4 },
    });

    const heading = wrapper.find(".m-checkbox-group__heading");
    expect(heading.element.tagName).toBe("H4");
    expect(heading.text()).toBe("Options");
  });

  it("collapses and expands the collapsable checkboxes", async () => {
    const wrapper = mount(MucCheckboxGroup, {
      slots: {
        checkboxes: '<input type="checkbox" class="cb" />',
        collapsableCheckboxes: '<input type="checkbox" class="cb-more" />',
      },
    });

    const container = wrapper.find(".m-checkboxes__collapse__container");
    const button = wrapper.find("button");
    expect(container.find(".cb-more").exists()).toBe(true);
    expect(container.classes()).toContain("collapse");
    expect(button.attributes("aria-expanded")).toBe("false");
    expect(button.find("use").attributes("href")).toBe("#icon-chevron-down");

    await button.trigger("click");

    expect(container.classes()).not.toContain("collapse");
    expect(button.attributes("aria-expanded")).toBe("true");
    expect(button.find("use").attributes("href")).toBe("#icon-chevron-up");

    await button.trigger("click");

    expect(container.classes()).toContain("collapse");
  });

  it("shows the error message", () => {
    const wrapper = mount(MucCheckboxGroup, {
      props: { errorMsg: "Select at least one option" },
    });

    expect(wrapper.find(".m-form-group").classes()).toContain("has-error");
    expect(wrapper.find(".m-error-message").text()).toContain(
      "Select at least one option"
    );
  });
});
