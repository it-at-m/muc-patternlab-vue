import MucCalendar from "./MucCalendar.vue";

export default {
  component: MucCalendar,
  title: "MucCalendar",
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

export const Weather = {
  args: {},
};
