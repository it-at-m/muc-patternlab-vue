type MucDayTile = {
  displayDay: number;
  index: number;
  viewDate: Date;
};

type CalendarTypes = "single" | "multiple" | "range";

type MucDateRange = { from: null | Date; to: null | Date };

type MucCalendarSelected = null | Date | Date[] | MucDateRange;

export type { MucDayTile, MucDateRange, MucCalendarSelected, CalendarTypes };

const isEqualDates = (date1: Date, date2: Date) =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

export { isEqualDates };
