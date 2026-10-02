import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucComment from "./MucComment.vue";

const mountComment = (
  props: Record<string, unknown> = {},
  slots: Record<string, string> = {}
) =>
  mount(MucComment, {
    props: {
      rating: 3,
      ...props,
    },
    slots: {
      author: "Max Mustermann",
      headline: "Great service",
      text: "Everything worked fine.",
      ...slots,
    },
  });

const starCounts = (wrapper: ReturnType<typeof mountComment>) => {
  const stars = wrapper.findAll(".m-star-rating__item");
  return {
    full: stars.filter((s) => s.classes("m-star-rating__item--full")).length,
    half: stars.filter((s) => s.classes("m-star-rating__item--half")).length,
    empty: stars.filter(
      (s) =>
        !s.classes("m-star-rating__item--full") &&
        !s.classes("m-star-rating__item--half")
    ).length,
  };
};

describe("MucComment.vue", () => {
  it("renders author, headline and text slots", () => {
    const wrapper = mountComment();

    expect(wrapper.find(".m-comment__author").text()).toBe("Max Mustermann");
    expect(wrapper.find(".m-comment__headline").text()).toBe("Great service");
    expect(wrapper.find(".m-comment__text").text()).toBe(
      "Everything worked fine."
    );
  });

  it("uses the listing variant by default", () => {
    const wrapper = mountComment();

    expect(wrapper.find(".m-comment").classes()).toContain(
      "m-comment--listing"
    );
  });

  it("applies the slider variant", () => {
    const wrapper = mountComment({ variant: "slider" });

    expect(wrapper.find(".m-comment").classes()).toContain("m-comment--slider");
  });

  it("hides initials and date when their slots are empty", () => {
    const wrapper = mountComment();

    expect(wrapper.find(".m-comment__initials").exists()).toBe(false);
    expect(wrapper.find(".m-comment__date").exists()).toBe(false);
  });

  it("renders initials, date prefix and date when given", () => {
    const wrapper = mountComment(
      {},
      { initials: "MM", datePrefix: "am", date: "01.01.2024" }
    );

    expect(wrapper.find(".m-comment__initials").text()).toBe("MM");
    expect(wrapper.findAll(".m-comment__author")[1].text()).toBe("am");
    expect(wrapper.find(".m-comment__date").text()).toBe("01.01.2024");
  });

  it("describes the rating for screen readers", () => {
    const wrapper = mountComment({ rating: 4.5 });

    const rating = wrapper.find(".m-star-rating");
    expect(rating.attributes("role")).toBe("img");
    expect(rating.attributes("aria-label")).toBe(
      "Bewertung: 4.5 von 5 Sternen"
    );
    expect(wrapper.find(".m-star-rating__numeric").text()).toBe("4,5");
  });

  it.each([
    [3, { full: 3, half: 0, empty: 2 }, "3,0"],
    [3.5, { full: 3, half: 1, empty: 1 }, "3,5"],
    [3.2, { full: 3, half: 0, empty: 2 }, "3,2"],
    [3.8, { full: 4, half: 0, empty: 1 }, "3,8"],
    [0, { full: 0, half: 0, empty: 5 }, "0,0"],
    [5, { full: 5, half: 0, empty: 0 }, "5,0"],
  ])("renders stars for rating %s", (rating, expected, numeric) => {
    const wrapper = mountComment({ rating });

    expect(starCounts(wrapper)).toEqual(expected);
    expect(wrapper.find(".m-star-rating__numeric").text()).toBe(numeric);
  });

  it.each([
    [-2, { full: 0, half: 0, empty: 5 }, "0,0"],
    [7, { full: 5, half: 0, empty: 0 }, "5,0"],
  ])("clamps rating %s between 0 and 5", (rating, expected, numeric) => {
    const wrapper = mountComment({ rating });

    expect(starCounts(wrapper)).toEqual(expected);
    expect(wrapper.find(".m-star-rating__numeric").text()).toBe(numeric);
  });
});
