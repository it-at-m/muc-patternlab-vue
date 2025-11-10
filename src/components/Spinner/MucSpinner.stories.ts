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

export const Default = {
  args: {
    size: "40%",
    percentage: 42,
    text: "Hier könnte Ihr Text stehen ...",
  },
  render: (args: SpinnerArgs) => ({
    components: { MucSpinner },
    setup() {
      return { args };
    },
    template: `
      <div style="display:flex; flex-direction:column; gap:24px;">
        <section>
          <h3>Percentage</h3>
          <MucSpinner :size="args.size" :percentage="args.percentage" />
        </section>

        <section>
          <h3>Text</h3>
          <MucSpinner :size="args.size" :text="args.text" />
        </section>

        <section>
          <h3>Default</h3>
          <MucSpinner :size="args.size" />
        </section>
      </div>
    `,
  }),
};
