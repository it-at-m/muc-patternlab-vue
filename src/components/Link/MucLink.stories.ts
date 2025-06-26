import { fn } from "storybook/test";

import MucLink from "./MucLink.vue";

export default {
  component: MucLink,
  title: "MucLink",
  tags: ["autodocs"],
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
  parameters: {
    docs: {
      description: {
        component: `The \`muc-link\` component is a wrapper commponent for a standard html-a tag.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-links)
`,
      },
    },
  },
};

export const Weather = {
  args: {
    label: "Generic link label",
  },
};

export const LinkWithIcon = {
  args: {
    icon: "youtube",
    label: "youtube",
    href: "https://www.youtube.com",
    noUnderline: true,
  },
};
