import MucBusinessHoursTile from "./MucBusinessHoursTile.vue";

export default {
  component: MucBusinessHoursTile,
  title: "MucBusinessHoursTile",
  tags: ["autodocs"],
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  parameters: {
    docs: {
      description: {
        component: `
The businessHoursTile component is used to display the business hours for each day of the week. 

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-business-hours)
`,
      },
    },
  },
};

const businessHours = {
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
};
export const Default = {
  args: {
    businessHours: businessHours,
  },
};

export const Closed = {
  args: {
    ...Default.args,
    closed: true,
  },
};
