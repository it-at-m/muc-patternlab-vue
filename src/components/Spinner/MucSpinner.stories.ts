import MucSpinner from "./MucSpinner.vue";

interface SpinnerArgs {
  size?: string;
  text?: string;
  percentage?: number;
}

export default {
  component: MucSpinner,
  title: "MucSpinner",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`muc-spinner\` is a spinner represents a loading progress.`,
      },
    },
  },
};

export const Percentage= {
  args: {
    size: "40%",
    percentage: 42,
  },
};

export const Text= {
  args: {
    size: "40%",
    text: "This could be your text...",
  },
};

export const Default = {
  args: {
    size: "40%",
  },
};
