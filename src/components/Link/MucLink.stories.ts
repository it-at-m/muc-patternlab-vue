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

export const GenericLink = {
  args: {
    label: "Generic link label",
  },
};

export const DisabledLink = {
  args: {
    label: "Link disabled",
    disabled: true,
  },
};

export const LinkWithoutUnderlinedLabel = {
  args: {
    label: "facebook",
    href: "https://www.facebook.com",
    noUnderline: true,
  },
};

export const LinkWithIcon = {
  args: {
    icon: "youtube",
    label: "youtube",
    href: "https://www.youtube.com",
  },
};

export const LinkWithPrependIcon = {
  args: {
    icon: "munich",
    label: "muenchen.de - Das offizielle Stadtportal",
    href: "https://www.muenchen.de/",
    iconShownLeft: true,
  },
};
