import MucRadioButton from "./MucRadioButton.vue";
import MucRadioButtonGroup from "./MucRadioButtonGroup.vue";

export default {
  component: MucRadioButton,
  title: "Forms/RadioButton",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Offers simple functionality of a radio-button.
You need to use the radio-button within the radio-button-group - combined you can provide grouping functionality to allow users to select from a predefined set of options.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-radios)
`,
      },
    },
  },
};

export const Default = () => ({
  components: { MucRadioButton, MucRadioButtonGroup },
  template: `
      <MucRadioButtonGroup heading="Checkbox group" model-value="">
         <template v-slot:default>
           <MucRadioButton value="first" label="first" hint="This is a hint for this radiobutton"/>
           <MucRadioButton v-for="index in 3" :key="index" :label="'not-collapsed-' + index" :value="'val-' + index"/>
         </template>
      </MucRadioButtonGroup>
  `,
});
