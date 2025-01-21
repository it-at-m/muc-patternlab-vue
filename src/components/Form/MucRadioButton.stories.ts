import MucRadioButton from "./MucRadioButton.vue";
import MucRadioButtonGroup from "./MucRadioButtonGroup.vue";

export default {
  component: MucRadioButton,
  title: "Forms/MucRadioButton",
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
           <MucRadioButton value="first" label="first option" hint="This is a hint for this radiobutton" id="first"/>
           <MucRadioButton v-for="index in 3" :key="index" :label="'other option-' + index" :value="'val-' + index" :id="'other-option' + index"/>
         </template>
      </MucRadioButtonGroup>
  `,
});
