import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucCommentText from "./MucCommentText.vue";

const mountCommentText = (props: Record<string, unknown> = {}) =>
  mount(MucCommentText, {
    props: {
      author: "Max Mustermann",
      text: "Everything worked fine.",
      rating: 4,
      ...props,
    },
  });

describe("MucCommentText.vue", () => {
  it("passes texts and rating to the comment", () => {
    const wrapper = mountCommentText({
      headline: "Great service",
      date: "01.01.2024",
    });

    expect(wrapper.find(".m-comment__author").text()).toBe("Max Mustermann");
    expect(wrapper.find(".m-comment__headline").text()).toBe("Great service");
    expect(wrapper.find(".m-comment__text").text()).toBe(
      "Everything worked fine."
    );
    expect(wrapper.find(".m-comment__date").text()).toBe("01.01.2024");
    expect(wrapper.find(".m-star-rating__numeric").text()).toBe("4,0");
    expect(wrapper.find(".m-comment").classes()).toContain(
      "m-comment--listing"
    );
  });

  it("uses 'am' as default date prefix", () => {
    const wrapper = mountCommentText({ date: "01.01.2024" });

    expect(wrapper.findAll(".m-comment__author")[1].text()).toBe("am");
  });

  it("uses a custom date prefix", () => {
    const wrapper = mountCommentText({ date: "01.01.2024", datePrefix: "on" });

    expect(wrapper.findAll(".m-comment__author")[1].text()).toBe("on");
  });

  it("hides the date when none is given", () => {
    const wrapper = mountCommentText();

    expect(wrapper.find(".m-comment__date").exists()).toBe(false);
  });

  it.each([
    ["Max Mustermann", "MM"],
    ["Max", "M"],
    ["Max Peter Mustermann", "MM"],
  ])("computes initials for author '%s'", (author, expected) => {
    const wrapper = mountCommentText({ author });

    expect(wrapper.find(".m-comment__initials").text()).toBe(expected);
  });

  it("shortens given initials to their first and last character", () => {
    const wrapper = mountCommentText({ initials: "ABC" });

    expect(wrapper.find(".m-comment__initials").text()).toBe("AC");
  });

  it("hides the initials for an empty author", () => {
    const wrapper = mountCommentText({ author: "" });

    expect(wrapper.find(".m-comment__initials").exists()).toBe(false);
  });

  it("passes the slider variant", () => {
    const wrapper = mountCommentText({ variant: "slider" });

    expect(wrapper.find(".m-comment").classes()).toContain("m-comment--slider");
  });
});
