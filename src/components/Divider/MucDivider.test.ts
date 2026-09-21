import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucDivider from "./MucDivider.vue";

describe("MucDivider.vue", () => {
  it("renders an empty divider element", () => {
    const wrapper = mount(MucDivider);

    expect(wrapper.element.tagName).toBe("DIV");
    expect(wrapper.classes()).toContain("muc-divider");
    expect(wrapper.text()).toBe("");
  });
});
