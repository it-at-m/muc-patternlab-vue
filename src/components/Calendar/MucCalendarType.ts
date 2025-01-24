import { InjectionKey, Ref } from "vue";

/**
 * Different possible types of date selection for the calendar
 */
type CalendarTypes = "single" | "multiple" | "range";

/**
 * Types of the view displayed for selection
 */
type ViewType = "day" | "month" | "year";

type AllowedDateFunction = (date: Date) => boolean;

/**
 * Selection type for range type
 */
interface MucDateRange {
  from: null | Date;
  to: null | Date;
}

/**
 * Datatypes for modelvalue of the calendar
 */
type MucCalendarSelected = null | Date | Date[] | MucDateRange;

/**
 * Injection type for date selection component
 */
type MucCalendarInjection = {
  viewDate: Readonly<Ref<Date>>;
  min: Readonly<Date | undefined>;
  max: Readonly<Date | undefined>;
  selectedDate: Readonly<Ref<MucCalendarSelected>>;
  variant: Readonly<Ref<CalendarTypes>>;
  showAdjacentMonths: Readonly<Ref<boolean>>;
  allowedDates: AllowedDateFunction;
};

export type {
  AllowedDateFunction,
  MucDateRange,
  MucCalendarSelected,
  CalendarTypes,
  MucCalendarInjection,
  ViewType,
};

/**
 * Locales for date output
 */
const LOCALES = "de-DE";

/**
 * Number of possible selection in the broader views (months or years)
 */
const NUM_OF_BROAD_SELECTIONS = 12;

/**
 * Key for injecting MucCalendar data into components.
 * @type {InjectionKey<MucCalendarInjection>}
 */
const MucCalendarKey: InjectionKey<MucCalendarInjection> =
  Symbol("mucCalendar");

/**
 * Checks if two dates are equal (same day, month, and year).
 * @param date1 - The first date to compare.
 * @param date2 - The second date to compare.
 * @returns true if the dates are equal, otherwise false.
 */
const isEqualDates = (date1: Date, date2: Date) =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

/**
 * Checks if the first date is after the second date.
 * @param date1 - The first date to compare.
 * @param date2 - The second date to compare.
 * @returns true if the first date is after the second, otherwise false.
 */
const isDateAfterOther = (date1: Date, date2: Date) => date1 > date2;

/**
 * Checks if the given object is a MucDateRange (has 'from' and 'to' properties).
 * @param {MucCalendarSelected} obj - The object to check.
 * @returns {boolean} True if the object is a MucDateRange, otherwise false.
 */
const isMucDateRange = (obj: MucCalendarSelected): obj is MucDateRange =>
  obj !== null &&
  (obj as MucDateRange).from !== undefined &&
  (obj as MucDateRange).to !== undefined;

export {
  isEqualDates,
  isMucDateRange,
  isDateAfterOther,
  MucCalendarKey,
  LOCALES,
  NUM_OF_BROAD_SELECTIONS,
};
