import MucDivider from "./MucDivider.vue";

export default {
  component: MucDivider,
  title: "MucDivider",
  tags: ["autodocs"],
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  parameters: {
    docs: {
      description: {
        component: `The \`muc-divider\` is a trivial divider.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-components-all)
`,
      },
    },
  },
};

export const Default = {};
