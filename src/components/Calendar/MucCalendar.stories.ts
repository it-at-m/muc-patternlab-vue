import MucCalendar from "./MucCalendar.vue";

export default {
  component: MucCalendar,
  title: "unofficial/MucCalendar",
  tags: ["autodocs"],
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  parameters: {
    docs: {
      description: {
        component: `The \`muc-calendar\` component is a non patternlab-standard calendar component. It can be used to display calendar months or as fancy date selection. Multiple variants in the date selection are offered.`,
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

export const DisabledAnimation = {
  args: {
    noAnimation: true,
    allowedDates: () => false,
  },
};

export const DisabledPreSelectedViewMonth = {
  args: {
    disabled: true,
    showAdjacentMonths: true,
    viewMonth: new Date(1970, 0, 1),
  },
};
