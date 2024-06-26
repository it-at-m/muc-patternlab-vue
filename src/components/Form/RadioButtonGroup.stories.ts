import MucRadioButton from "./MucRadioButton.vue";
import MucRadioButtonGroup from "./MucRadioButtonGroup.vue";

export default {
  component: MucRadioButtonGroup,
  title: "Forms/MucRadioButtonGroup",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The muc-checkbox-group component is a wrapper for a list of checkboxes.
It comes in a collapsable and non-collapsable variant.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-forms)
`,
      },
    },
  },
};

export const Default = () => ({
  components: { MucRadioButtonGroup, MucRadioButton },
  template: `
<MucRadioButtonGroup heading="Heading of a radiobuttongroup">
  <MucRadioButton v-for="index in 3" :label="index" :key="index" :value="index"/>
</MucRadioButtonGroup>
  `,
});
