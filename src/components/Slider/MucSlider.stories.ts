import { fn } from "@storybook/test";

import MucCard from "../Card/MucCard.vue";
import MucSlider from "./MucSlider.vue";
import MucSliderItem from "./MucSliderItem.vue";

export default {
    components: {MucSliderItem, MucSlider },
    component: MucSlider,
    title: "MucSlider",
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
    components: { MucCard, MucSlider, MucSliderItem },
    template: `
      <MucSlider>
        <MucSliderItem v-for="index in 5" :key="index">
          <MucCard
              title="Lorem Ipsum"
              tagline="Dolor"
          >
            <template #content>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua.
            </template>
          </MucCard>
        </MucSliderItem>
      </MucSlider>
    `,
});
