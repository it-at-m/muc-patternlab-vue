import MucCard from "../Card/MucCard.vue";
import MucSlider from "./MucSlider.vue";
import MucSliderItem from "./MucSliderItem.vue";

export default {
  components: { MucSliderItem, MucSlider },
  component: MucSlider,
  title: "MucSlider",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A wrapping layout to show elements in a carousel and slide them, for example [MucCards](/docs/muccard--docs).

🔗 Patternlab-Docs (https://patternlab.muenchen.space/?p=components-slider-quote)
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