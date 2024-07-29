/**
 * Shorthand notation of all seven days in german.
 */
type WeekDay = "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So";

/**
 * Opening hours defined as a range from to in the format of e.g. `HH:MM`
 */
type OpeningHours = {
  from: string;
  to: string;
};

/**
 * Opening hours for a weekday
 */
type BusinessHourType = {
  weekDay: WeekDay;
  openingHours: OpeningHours[];
};

export type { BusinessHourType, OpeningHours, WeekDay };

const isOpen = (
  businessHours: BusinessHourType,
  currDay: string | undefined,
  currTime: string | undefined
) => {
  const index =
    businessHours.weekDay === currDay &&
    currDay !== undefined &&
    currTime !== undefined &&
    businessHours.openingHours.findIndex(
      (openingHours) =>
        openingHours.from <= currTime && openingHours.to >= currTime
    ) !== -1;

  console.log("%s - %s", businessHours.weekDay, index);
  return index;
};

const isTimeValid = (time: string) => /^\d{2}:\d{2}$/.test(time);

export { isOpen, isTimeValid };
