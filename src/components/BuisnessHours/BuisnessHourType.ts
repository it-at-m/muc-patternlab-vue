enum WeekDays {
  sunday = "So",
  monday = "Mo",
  tuesday = "Di",
  wednesday = "Mi",
  thursday = "Do",
  friday = "Fr",
  saturday = "Sa",
}

const weekDaysMapping = {
  0: WeekDays.sunday,
  1: WeekDays.monday,
  2: WeekDays.tuesday,
  3: WeekDays.wednesday,
  4: WeekDays.thursday,
  5: WeekDays.friday,
  6: WeekDays.saturday,
};

type OpeningHour = {
  from: string;
  to: string;
};

type BuisnessHourType = {
  weekDay: WeekDays;
  openingHours: OpeningHour[];
};

export type { BuisnessHourType, OpeningHour, WeekDays };

export { weekDaysMapping };
