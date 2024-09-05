import { InjectionKey, Ref } from "vue";

type CalendarTypes = "single" | "multiple" | "range";

interface MucDateRange {
  from: null | Date;
  to: null | Date;
}

type MucCalendarSelected = null | Date | Date[] | MucDateRange;

type MucCalendarInjection = {
  viewDate: Readonly<Ref<Date>>;
  selectedDate: Readonly<Ref<MucCalendarSelected>>;
  variant: Readonly<Ref<CalendarTypes>>;
  showAdjacentMonths: Readonly<Ref<boolean>>;
};

export type {
  MucDateRange,
  MucCalendarSelected,
  CalendarTypes,
  MucCalendarInjection,
};

const MucCalendarKey: InjectionKey<MucCalendarInjection> =
  Symbol("mucCalendar");

const isEqualDates = (date1: Date, date2: Date) =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

const isDateAfterOther = (date1: Date, date2: Date) => date1 > date2;

const isMucDateRange = (obj: MucCalendarSelected): obj is MucDateRange =>
  obj !== null &&
  (obj as MucDateRange).from !== undefined &&
  (obj as MucDateRange).to !== undefined;

export { isEqualDates, isMucDateRange, isDateAfterOther, MucCalendarKey };
