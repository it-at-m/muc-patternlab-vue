import { mount, VueWrapper } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MucCalendar from "./MucCalendar.vue";

// May 2024 starts on a Wednesday and has 31 days
const mountCalendar = (props: Record<string, unknown> = {}) =>
  mount(MucCalendar, {
    props: {
      viewMonth: new Date(2024, 4, 1),
      noAnimation: true,
      ...props,
    },
  });

const captionButtons = (wrapper: VueWrapper) =>
  wrapper.findAll(".calendar-caption button");

const caption = (wrapper: VueWrapper) => wrapper.find("h3").text();

const tile = (wrapper: VueWrapper, label: string) =>
  wrapper.find(`[role="button"][aria-label="${label} auswählen"]`);

const lastModelValue = (wrapper: VueWrapper) =>
  wrapper.emitted("update:modelValue")?.at(-1)?.[0];

describe("MucCalendar.vue", () => {
  describe("day view", () => {
    it("renders the month caption, weekdays and days of the view month", () => {
      const wrapper = mountCalendar();

      expect(caption(wrapper)).toBe("Mai 2024");
      expect(wrapper.findAll(".header-item").map((h) => h.text())).toEqual([
        "Mo",
        "Di",
        "Mi",
        "Do",
        "Fr",
        "Sa",
        "So",
      ]);

      const days = wrapper.findAll('[role="button"]');
      expect(days).toHaveLength(31);
      expect(days[0].text()).toBe("1");
      expect(days[30].text()).toBe("31");
    });

    it("renders spacers so the first day lands on its weekday", () => {
      const wrapper = mountCalendar();

      const grid = wrapper.findAll(".muc-calendar-container")[1];
      const spacers = grid
        .findAll(":scope > div")
        .filter((el) => el.attributes("role") !== "button");
      expect(spacers).toHaveLength(2);
    });

    it("shows days of adjacent months when showAdjacentMonths is set", () => {
      const wrapper = mountCalendar({ showAdjacentMonths: true });

      const days = wrapper.findAll('[role="button"]');
      expect(days).toHaveLength(42);
      expect(days[0].text()).toBe("29");
      expect(days[0].classes()).toContain("off-month");
      expect(days[2].classes()).not.toContain("off-month");
    });

    it("navigates to the previous and next month", async () => {
      const wrapper = mountCalendar();
      const [prev, , next] = captionButtons(wrapper);

      expect(prev.attributes("aria-label")).toBe("Vorheriger Monat");
      expect(next.attributes("aria-label")).toBe("Nächster Monat");

      await next.trigger("click");
      expect(caption(wrapper)).toBe("Juni 2024");

      await prev.trigger("click");
      await prev.trigger("click");
      expect(caption(wrapper)).toBe("April 2024");
    });
  });

  describe("selection", () => {
    it("selects and deselects a single date", async () => {
      const wrapper = mountCalendar();

      await tile(wrapper, "15").trigger("click");
      expect(lastModelValue(wrapper)).toEqual(new Date(2024, 4, 15));
      expect(tile(wrapper, "15").classes()).toContain("selected");

      await tile(wrapper, "15").trigger("click");
      expect(lastModelValue(wrapper)).toBeNull();
      expect(tile(wrapper, "15").classes()).not.toContain("selected");
    });

    it("selects a date via the enter key", async () => {
      const wrapper = mountCalendar();

      await tile(wrapper, "15").trigger("keyup.enter");

      expect(lastModelValue(wrapper)).toEqual(new Date(2024, 4, 15));
    });

    it("toggles dates in multiple mode", async () => {
      const wrapper = mountCalendar({ variant: "multiple" });

      await tile(wrapper, "3").trigger("click");
      await tile(wrapper, "10").trigger("click");
      expect(lastModelValue(wrapper)).toEqual([
        new Date(2024, 4, 3),
        new Date(2024, 4, 10),
      ]);

      await tile(wrapper, "3").trigger("click");
      expect(lastModelValue(wrapper)).toEqual([new Date(2024, 4, 10)]);
      expect(tile(wrapper, "3").classes()).not.toContain("selected");
      expect(tile(wrapper, "10").classes()).toContain("selected");
    });

    it("converts an existing single date when switching to multiple mode", async () => {
      const wrapper = mountCalendar({
        variant: "multiple",
        modelValue: new Date(2024, 4, 1),
      });

      await tile(wrapper, "2").trigger("click");

      expect(lastModelValue(wrapper)).toEqual([
        new Date(2024, 4, 1),
        new Date(2024, 4, 2),
      ]);
    });

    it("selects an ordered range and highlights the days in between", async () => {
      const wrapper = mountCalendar({ variant: "range" });

      await tile(wrapper, "10").trigger("click");
      expect(lastModelValue(wrapper)).toEqual({
        from: new Date(2024, 4, 10),
        to: null,
      });

      await tile(wrapper, "5").trigger("click");
      expect(lastModelValue(wrapper)).toEqual({
        from: new Date(2024, 4, 5),
        to: new Date(2024, 4, 10),
      });

      expect(tile(wrapper, "5").classes()).toContain("selected");
      expect(tile(wrapper, "10").classes()).toContain("selected");
      for (const day of ["6", "7", "8", "9"]) {
        expect(tile(wrapper, day).classes()).toContain("selected-range");
      }
      expect(tile(wrapper, "4").classes()).not.toContain("selected-range");
      expect(tile(wrapper, "11").classes()).not.toContain("selected-range");
    });

    it("starts a new range after a complete range was selected", async () => {
      const wrapper = mountCalendar({ variant: "range" });

      await tile(wrapper, "5").trigger("click");
      await tile(wrapper, "10").trigger("click");
      await tile(wrapper, "20").trigger("click");

      expect(lastModelValue(wrapper)).toEqual({
        from: new Date(2024, 4, 20),
        to: null,
      });
    });

    it("keeps only the first date when switching from multiple to single", async () => {
      const wrapper = mountCalendar({
        modelValue: [new Date(2024, 4, 1), new Date(2024, 4, 2)],
      });

      await tile(wrapper, "20").trigger("click");

      expect(lastModelValue(wrapper)).toEqual(new Date(2024, 4, 20));
    });

    it("deselects the start of a former range when switching to single", async () => {
      const wrapper = mountCalendar({
        modelValue: { from: new Date(2024, 4, 5), to: new Date(2024, 4, 10) },
      });

      await tile(wrapper, "5").trigger("click");

      expect(lastModelValue(wrapper)).toBeNull();
    });

    it("converts a range when switching to multiple mode", async () => {
      const wrapper = mountCalendar({
        variant: "multiple",
        modelValue: { from: new Date(2024, 4, 5), to: null },
      });

      await tile(wrapper, "6").trigger("click");

      expect(lastModelValue(wrapper)).toEqual([
        new Date(2024, 4, 5),
        new Date(2024, 4, 6),
      ]);
    });

    it("uses a single date as range start when switching to range mode", async () => {
      const wrapper = mountCalendar({
        variant: "range",
        modelValue: new Date(2024, 4, 5),
      });

      await tile(wrapper, "8").trigger("click");

      expect(lastModelValue(wrapper)).toEqual({
        from: new Date(2024, 4, 5),
        to: new Date(2024, 4, 8),
      });
    });

    it("restarts the range when switching from multiple to range mode", async () => {
      const wrapper = mountCalendar({
        variant: "range",
        modelValue: [new Date(2024, 4, 5)],
      });

      await tile(wrapper, "8").trigger("click");

      expect(lastModelValue(wrapper)).toEqual({
        from: new Date(2024, 4, 8),
        to: null,
      });
    });

    it("does not select anything when disabled", async () => {
      const wrapper = mountCalendar({ disabled: true });

      await tile(wrapper, "15").trigger("click");

      expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    });
  });

  describe("restrictions", () => {
    it("disables days outside of min and max", async () => {
      const wrapper = mountCalendar({
        min: new Date(2024, 4, 10),
        max: new Date(2024, 4, 20),
      });

      expect(tile(wrapper, "9").attributes("aria-disabled")).toBe("true");
      expect(tile(wrapper, "9").attributes("tabindex")).toBe("-1");
      expect(tile(wrapper, "9").classes()).toContain("disabled-tile");
      expect(tile(wrapper, "10").attributes("aria-disabled")).toBe("false");
      expect(tile(wrapper, "10").attributes("tabindex")).toBe("0");
      expect(tile(wrapper, "20").attributes("aria-disabled")).toBe("false");
      expect(tile(wrapper, "21").attributes("aria-disabled")).toBe("true");

      await tile(wrapper, "9").trigger("click");
      await tile(wrapper, "21").trigger("click");
      expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    });

    it("disables navigation beyond min and max month", () => {
      const wrapper = mountCalendar({
        min: new Date(2024, 4, 10),
        max: new Date(2024, 4, 20),
      });
      const [prev, , next] = captionButtons(wrapper);

      expect(prev.attributes("aria-disabled")).toBe("true");
      expect(next.attributes("aria-disabled")).toBe("true");
    });

    it("disables days rejected by allowedDates", () => {
      const wrapper = mountCalendar({
        allowedDates: (date: Date) =>
          date.getDay() !== 0 && date.getDay() !== 6,
      });

      // May 4th 2024 is a Saturday, May 6th a Monday
      expect(tile(wrapper, "4").attributes("aria-disabled")).toBe("true");
      expect(tile(wrapper, "6").attributes("aria-disabled")).toBe("false");
    });
  });

  describe("view change", () => {
    it("switches to month and year view via the caption", async () => {
      const wrapper = mountCalendar();

      await captionButtons(wrapper)[1].trigger("click");
      expect(caption(wrapper)).toBe("2024");
      expect(wrapper.findAll('[role="button"]')).toHaveLength(12);
      expect(tile(wrapper, "Januar").text()).toBe("Jan");
      expect(captionButtons(wrapper)[0].attributes("aria-label")).toBe(
        "Vorheriges Jahr"
      );

      await captionButtons(wrapper)[1].trigger("click");
      expect(caption(wrapper)).toBe("2020 - 2031");
      expect(wrapper.findAll('[role="button"]')).toHaveLength(12);
      expect(tile(wrapper, "2020").exists()).toBe(true);
      expect(tile(wrapper, "2031").exists()).toBe(true);
      expect(captionButtons(wrapper)[2].attributes("aria-label")).toBe(
        "Weitere Jahre"
      );
    });

    it("drills down from year to month to day view", async () => {
      const wrapper = mountCalendar();

      await captionButtons(wrapper)[1].trigger("click");
      await captionButtons(wrapper)[1].trigger("click");

      await tile(wrapper, "2026").trigger("click");
      expect(caption(wrapper)).toBe("2026");

      await tile(wrapper, "März").trigger("click");
      expect(caption(wrapper)).toBe("März 2026");
      expect(wrapper.findAll('[role="button"]')).toHaveLength(31);
    });

    it("navigates by year in month view and by twelve years in year view", async () => {
      const wrapper = mountCalendar();

      await captionButtons(wrapper)[1].trigger("click");
      await captionButtons(wrapper)[2].trigger("click");
      expect(caption(wrapper)).toBe("2025");

      await captionButtons(wrapper)[1].trigger("click");
      await captionButtons(wrapper)[0].trigger("click");
      expect(caption(wrapper)).toBe("2010 - 2021");
    });

    it("navigates back by year in month view and forward by twelve years in year view", async () => {
      const wrapper = mountCalendar();

      await captionButtons(wrapper)[1].trigger("click");
      await captionButtons(wrapper)[0].trigger("click");
      expect(caption(wrapper)).toBe("2023");
      expect(captionButtons(wrapper)[2].attributes("aria-label")).toBe(
        "Nächstes Jahr"
      );

      await captionButtons(wrapper)[1].trigger("click");
      expect(captionButtons(wrapper)[0].attributes("aria-label")).toBe(
        "Vorherige Jahre"
      );
      await captionButtons(wrapper)[2].trigger("click");
      expect(caption(wrapper)).toBe("2030 - 2041");
    });

    it("disables navigation beyond min and max in month and year view", async () => {
      const wrapper = mountCalendar({
        min: new Date(2024, 0, 1),
        max: new Date(2024, 11, 31),
      });
      const prevNext = () => {
        const [prev, , next] = captionButtons(wrapper);
        return [
          prev.attributes("aria-disabled"),
          next.attributes("aria-disabled"),
        ];
      };

      await captionButtons(wrapper)[1].trigger("click");
      expect(prevNext()).toEqual(["true", "true"]);

      await captionButtons(wrapper)[1].trigger("click");
      expect(prevNext()).toEqual(["true", "true"]);
    });

    it("allows navigation within min and max in month and year view", async () => {
      const wrapper = mountCalendar({
        min: new Date(2000, 0, 1),
        max: new Date(2050, 11, 31),
      });
      const prevNext = () => {
        const [prev, , next] = captionButtons(wrapper);
        return [
          prev.attributes("aria-disabled"),
          next.attributes("aria-disabled"),
        ];
      };

      expect(prevNext()).toEqual(["false", "false"]);

      await captionButtons(wrapper)[1].trigger("click");
      expect(prevNext()).toEqual(["false", "false"]);

      await captionButtons(wrapper)[1].trigger("click");
      expect(prevNext()).toEqual(["false", "false"]);
    });

    it("disables months and years outside of min and max", async () => {
      const wrapper = mountCalendar({
        min: new Date(2024, 2, 1),
        max: new Date(2025, 5, 1),
      });

      await captionButtons(wrapper)[1].trigger("click");
      expect(tile(wrapper, "Februar").attributes("aria-disabled")).toBe("true");
      expect(tile(wrapper, "März").attributes("aria-disabled")).toBe("false");

      await tile(wrapper, "Februar").trigger("click");
      expect(caption(wrapper)).toBe("2024");

      await captionButtons(wrapper)[1].trigger("click");
      expect(tile(wrapper, "2023").attributes("aria-disabled")).toBe("true");
      expect(tile(wrapper, "2024").attributes("aria-disabled")).toBe("false");
      expect(tile(wrapper, "2025").attributes("aria-disabled")).toBe("false");
      expect(tile(wrapper, "2026").attributes("aria-disabled")).toBe("true");
    });

    it("does not allow a view change when disableViewChange is set", () => {
      const wrapper = mountCalendar({ disableViewChange: true });

      expect(captionButtons(wrapper)).toHaveLength(2);
      expect(wrapper.find("div.header h3").text()).toBe("Mai 2024");
    });
  });
});
