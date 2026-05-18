import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

import MucTextArea from "./MucTextArea.vue";

vi.mock("../../utils/countTextareaRows", () => ({
  countTextareaRows: (text: string) => Math.max(2, (text.match(/\n/g)?.length ?? 0) + 3),
}));

describe("MucTextArea.vue", () => {
  it("uses static rows when autoRows is false", () => {
    const wrapper = mount(MucTextArea, {
      props: { id: "static", rows: 5, autoRows: false },
    });

    expect(wrapper.find("textarea").attributes("rows")).toBe("5");
  });

  it("computes rows when autoRows is true", async () => {
    const wrapper = mount(MucTextArea, {
      props: { id: "auto", autoRows: true },
    });

    const textarea = wrapper.find("textarea");
    await textarea.setValue("a\nb\nc");
    expect(Number(textarea.attributes("rows"))).toBeGreaterThanOrEqual(2);
  });
});
