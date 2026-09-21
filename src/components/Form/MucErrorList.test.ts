import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucErrorList from "./MucErrorList.vue";

describe("MucErrorList.vue", () => {
  it("renders a single error with the default title", () => {
    const wrapper = mount(MucErrorList, {
      props: { errors: "Only one error" },
    });

    expect(wrapper.attributes("role")).toBe("alert");
    expect(wrapper.find(".m-error-list__title").text()).toBe(
      "Ein Fehler ist aufgetreten!"
    );
    const items = wrapper.findAll("li");
    expect(items).toHaveLength(1);
    expect(items[0].text()).toBe("Only one error");
  });

  it("renders a list of errors with a custom title", () => {
    const wrapper = mount(MucErrorList, {
      props: { title: "Oops", errors: ["Error 1", "Error 2", "Error 3"] },
    });

    expect(wrapper.find(".m-error-list__title").text()).toBe("Oops");
    expect(wrapper.findAll("li").map((li) => li.text())).toEqual([
      "Error 1",
      "Error 2",
      "Error 3",
    ]);
  });
});
