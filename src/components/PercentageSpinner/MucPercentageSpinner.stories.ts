import MucPercentageSpinner from "./MucPercentageSpinner.vue";

export default {
  component: MucPercentageSpinner,
  title: "MucPercentageSpinner",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`muc-percentage-spinner\` is a spinner represents a loading progress.
`,
      },
    },
  },
};

export const Relative = {
  args: {
    size: "40%",
    percentage: 42,
  },
};

export const Default = {
  args: {
    size: "300",
  },
};
