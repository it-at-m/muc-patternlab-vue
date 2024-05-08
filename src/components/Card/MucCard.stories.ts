import { fn } from "@storybook/test";

import MucCard from "./MucCard.vue";

export default {
  component: MucCard,
  title: "MucCard",
  tags: ["autodocs"],
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
  parameters: {
    docs: {
      description: {
        component: `A Card-Component in Patternlab-Style.
                
Use inside [MucCardContainer](/docs/muccardcontainer--docs) for a automatically wrapping layout.

🔗 Patternlab-Docs (not yet available)
`,
      },
    },
  },
};

export const Default = {
  args: {
    title: "Lorem Ipsum",
    tagline: "Dolor",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
};

export const WithHeaderPrefix = {
  args: {
    title: "Lorim Ipsum",
    tagline: "Dolor",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n          dolore magna aliquyam erat, sed diam voluptua.",
  },
  parameters: {
    slots: {
      headerPrefix: {
        description: "HeaderPrefix Slot used for displaying icon",
        template: `
          <div style="padding-right: 16px; font-size: 32px;">
            📆
          </div>`,
      },
    },
  },
};
