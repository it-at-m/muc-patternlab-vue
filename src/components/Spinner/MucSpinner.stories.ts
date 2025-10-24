import MucSpinner from "./MucSpinner.vue";

export default {
  component: MucSpinner,
  title: "MucSpinner",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The \`muc-spinner\` is a spinner represents a loading progress.
`,
      },
    },
  },
};

export const Relative = {
  args: {
    size: "40%",
    text: "Hier könnte ihr Text stehen",
  },
};

export const Default = {
  args: {
    size: "300",
  },
};
