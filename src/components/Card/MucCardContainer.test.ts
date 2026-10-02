import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucCardContainer from "./MucCardContainer.vue";

describe("MucCardContainer.vue", () => {
  it("renders the default slot inside the card container", () => {
    const wrapper = mount(MucCardContainer, {
      slots: {
        default: '<div class="card">Card 1</div><div class="card">Card 2</div>',
      },
    });

    expect(wrapper.classes()).toEqual(["container", "card-container"]);
    expect(wrapper.findAll(".card")).toHaveLength(2);
  });
});
