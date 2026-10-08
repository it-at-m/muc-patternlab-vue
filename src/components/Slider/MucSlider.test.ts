import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { defineComponent, h, nextTick } from "vue";

import MucSlider from "./MucSlider.vue";
import MucSliderItem from "./MucSliderItem.vue";

type MoveHandler = () => void;

/**
 * Minimal stand-in for the Splide component, exposing the API MucSlider uses.
 */
const createSplideStub = (length: number) => {
  const state = {
    go: vi.fn(),
    moveHandler: undefined as MoveHandler | undefined,
    splide: {
      index: 0,
      on: (event: string, handler: MoveHandler) => {
        if (event === "move") state.moveHandler = handler;
      },
    },
  };

  const stub = defineComponent({
    props: ["options"],
    setup(_, { slots, expose }) {
      expose({ go: state.go, splide: state.splide, length });
      return () => h("div", { class: "splide-stub" }, slots.default?.());
    },
  });

  const moveTo = async (index: number) => {
    state.splide.index = index;
    state.moveHandler?.();
    await nextTick();
  };

  return { stub, state, moveTo };
};

const mountSlider = async (length = 3) => {
  const splide = createSplideStub(length);
  const wrapper = mount(MucSlider, {
    slots: {
      default: () =>
        Array.from({ length }, (_, i) =>
          h("div", { class: "slide" }, `Slide ${i + 1}`)
        ),
    },
    global: {
      stubs: { Splide: splide.stub },
    },
  });
  // slide count is read from Splide in onMounted
  await nextTick();
  return { wrapper, ...splide };
};

describe("MucSlider.vue", () => {
  it("renders the slides", async () => {
    const { wrapper } = await mountSlider();

    expect(wrapper.find("section").attributes("aria-label")).toBe(
      "Slider mit Elementen"
    );
    expect(wrapper.findAll(".slide")).toHaveLength(3);
  });

  it("shows only the next button on the first slide", async () => {
    const { wrapper } = await mountSlider();

    expect(wrapper.find(".previous-button").exists()).toBe(false);
    expect(wrapper.find(".next-button").attributes("aria-label")).toBe(
      "Nächstes Element"
    );
  });

  it("navigates with the buttons", async () => {
    const { wrapper, state, moveTo } = await mountSlider();

    await wrapper.find(".next-button").trigger("click");
    expect(state.go).toHaveBeenLastCalledWith(">");

    await moveTo(1);
    await wrapper.find(".previous-button").trigger("click");
    expect(state.go).toHaveBeenLastCalledWith("<");
  });

  it("updates the buttons and emits changeSlide on move", async () => {
    const { wrapper, moveTo } = await mountSlider();

    await moveTo(1);
    expect(wrapper.find(".previous-button").exists()).toBe(true);
    expect(wrapper.find(".next-button").exists()).toBe(true);

    await moveTo(2);
    expect(wrapper.find(".previous-button").exists()).toBe(true);
    expect(wrapper.find(".next-button").exists()).toBe(false);

    expect(wrapper.emitted("changeSlide")).toEqual([[1], [2]]);
  });

  it("hides both buttons for a single slide", async () => {
    const { wrapper } = await mountSlider(1);

    expect(wrapper.find(".previous-button").exists()).toBe(false);
    expect(wrapper.find(".next-button").exists()).toBe(false);
  });
});

describe("MucSliderItem.vue", () => {
  it("renders its content inside a splide slide", () => {
    const wrapper = mount(MucSliderItem, {
      slots: { default: "<p>Slide content</p>" },
      global: {
        stubs: {
          SplideSlide: {
            template: '<li class="splide__slide"><slot /></li>',
          },
        },
      },
    });

    expect(wrapper.find("li.splide__slide p").text()).toBe("Slide content");
  });
});
