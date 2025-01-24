import MucCalendar from "./MucCalendar.vue";

export default {
  component: MucCalendar,
  title: "MucCalendar",
  tags: ["autodocs"],
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  parameters: {
    docs: {
      description: {
        component: `The \`muc-calendar\` component is a non calendar component. It can be used to display calendar months or be used ás fancy date selection. Multiple variants in the date selection are offered. Quick date adjustments (months or years) can be done via clicking the month or year in the header.`,
      },
    },
  },
};

export const Single = {
  args: {
    variant: "single",
    showAdjacentMonths: true,
  },
};

export const MultipleWithSelectedViewMonth = {
  args: {
    variant: "multiple",
    viewMonth: new Date(2023, 0, 1),
  },
};

export const Range = {
  args: {
    variant: "range",
    showAdjacentMonths: true,
  },
};
export const DisabledWithPreSelectedDate = {
  args: {
    disabled: true,
    showAdjacentMonths: true,
    modelValue: new Date(),
  },
};

export const AllowedDatesWithNoAnimation = {
  args: {
    noAnimation: true,
    allowedDates: (date: Date) => {
      return date.getDay() == new Date().getDay();
    },
  },
};

export const DisabledPreSelectedViewMonth = {
  args: {
    disabled: true,
    showAdjacentMonths: true,
    viewMonth: new Date(1970, 0, 1),
  },
};

export const DisableViewChange = {
  args: {
    variant: "single",
    showAdjacentMonths: true,
    disableViewChange: true,
  },
};

export const MinAndMax = {
  args: {
    variant: "single",
    viewMonth: new Date(2025, 0, 1),
    min: new Date(2025, 0, 5),
    max: new Date(2027, 2, 12),
  },
};