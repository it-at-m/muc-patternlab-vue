import { fn } from "@storybook/test";

import MucButton from "./MucButton.vue";

export default {
  component: MucButton,
  title: "MucButton",
  tags: ["autodocs"],
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
  parameters: {
    docs: {
      description: {
        component: `The \`muc-button\` component themes the standard html button using the style from patternlab.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-buttons)
`,
      },
    },
  },
};

export const Default = {
  args: {
    default: "Primary",
  },
};

export const Secondary = {
  args: {
    default: "Secondary",
    variant: "secondary",
  },
};

export const Ghost = {
  args: {
    default: "Ghost",
    variant: "ghost",
  },
};

export const Disabled = {
  args: {
    default: "Disabled",
    disabled: true,
  },
};

export const IconOnly = {
  args: {
    icon: "arrow-right",
    variant: "icon"
  },
};

export const IconAnimated = {
  args: {
    default: "With Icon",
    icon: "arrow-right",
    iconAnimated: true,
  },
};

export const IconShownLeft = {
  args: {
    default: "With Icon",
    icon: "arrow-left",
    iconShownLeft: true,
  },
};
