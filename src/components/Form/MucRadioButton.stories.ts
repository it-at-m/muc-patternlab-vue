import MucRadioButton from "./MucRadioButton.vue";
import MucRadioButtonGroup from "./MucRadioButtonGroup.vue";

export default {
  component: MucRadioButton,
  title: "Forms/RadioButton",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `TODO

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-forms)
`,
      },
    },
  },
};

export const NotCollapsable = () => ({
  components: { MucRadioButton, MucRadioButtonGroup },
  template: `
      <MucRadioButtonGroup heading="Checkbox group" model-value="">
         <template v-slot:default>
           <MucRadioButton value="first" label="first"/>
           <MucRadioButton v-for="index in 4" :key="index" :label="'not-collapsed-' + index" :value="'val-' + index"/>
         </template>
      </MucRadioButtonGroup>
  `,
});
