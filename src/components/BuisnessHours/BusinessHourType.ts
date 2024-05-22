type WeekDays = "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So";

type OpeningHour = {
  from: string;
  to: string;
};

type BusinessHourType = {
  weekDay: WeekDays;
  openingHours: OpeningHour[];
};

export type { BusinessHourType, OpeningHour, WeekDays };
