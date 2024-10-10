/**
 * Shorthand notation of all seven days in german.
 *
 * @typedef {"Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So"} WeekDays
 */
type WeekDays = "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So";

/**
 * @typedef {Object} OpeningHour
 * @property {string} from - The start time of the opening period (in 'HH:mm' format).
 * @property {string} to - The end time of the opening period (in 'HH:mm' format).
 */
type OpeningHour = {
  from: string;
  to: string;
};

/**
 * @typedef {Object} BusinessHourType
 * @property {WeekDays} weekDay - The day of the week for which the opening hours apply.
 * @property {OpeningHour[]} openingHours - A list of opening hours for the specified day of the week.
 */
type BusinessHourType = {
  weekDay: WeekDays;
  openingHours: OpeningHour[];
};

export type { BusinessHourType, OpeningHour, WeekDays };
