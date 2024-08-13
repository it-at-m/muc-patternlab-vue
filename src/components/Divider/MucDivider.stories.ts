import MucDivider from "./MucDivider.vue";

export default {
  component: MucDivider,
  title: "MucDivider",
  tags: ["autodocs"],
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  parameters: {
    docs: {
      description: {
        component: `The \`muc-icon\` component is a wrapper commponent for all icons in the patternlab.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-guidelines-icons)
[🖼 Iconography](https://it-at-m.github.io/muc-patternlab-vue/?path=/docs/iconography--docs)
`,
      },
    },
  },
};

export const Default = {};
