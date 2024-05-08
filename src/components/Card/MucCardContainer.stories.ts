import { fn } from "@storybook/test";

import MucCard from "./MucCard.vue";
import MucCardContainer from "./MucCardContainer.vue";

export default {
  components: { MucCardContainer },
  component: MucCardContainer,
  title: "MucCardContainer",
  tags: ["autodocs"],
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
  parameters: {
    docs: {
      description: {
        component: `A wrapping Layout to use with [MucCard](/docs/muccard--docs).

🔗 Patternlab-Docs (not yet available)
`,
      },
    },
  },
};

export const Template = () => ({
  components: { MucCardContainer, MucCard },
  template: `
      <MucCardContainer>
        <MucCard
            v-bind="$props"
            title="Lorem Ipsum"
            tagline="Dolor"
            v-for="index in 5"
            :key="index"
        >
          <template #content>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </template>
        </MucCard>
      </MucCardContainer>
    `,
});
