import MucBusinessHours from "./MucBusinessHours.vue";

export default {
  component: MucBusinessHours,
  title: "MucBusinessHours",
  tags: ["autodocs"],
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  parameters: {
    docs: {
      description: {
        component: `TODO

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-business-hours)
`,
      },
    },
  },
};

const businessHours = [
  {
    weekDay: "Mo",
    openingHours: [
      {
        from: "08:00",
        to: "12:00",
      },
      {
        from: "14:00",
        to: "18:00",
      },
    ],
  },
  {
    weekDay: "Di",
    openingHours: [
      {
        from: "09:00",
        to: "13:00",
      },
    ],
  },
  {
    weekDay: "Mi",
    openingHours: [
      {
        from: "10:00",
        to: "14:00",
      },
    ],
  },
  {
    weekDay: "Do",
    openingHours: [
      {
        from: "08:00",
        to: "12:00",
      },
      {
        from: "15:00",
        to: "19:00",
      },
    ],
  },
  {
    weekDay: "Fr",
    openingHours: [
      {
        from: "08:00",
        to: "12:00",
      },
      {
        from: "13:00",
        to: "17:00",
      },
    ],
  },
  {
    weekDay: "Sa",
    openingHours: [
      {
        from: "10:00",
        to: "13:00",
      },
    ],
  },
  {
    weekDay: "So",
    openingHours: [],
  },
];

export const Default = {
  args: {
    businessHours: businessHours,
    toggleable: true,
  },
};
