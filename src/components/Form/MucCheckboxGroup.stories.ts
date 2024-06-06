import MucCheckbox from "./MucCheckbox.vue";
import MucCheckboxGroup from "./MucCheckboxGroup.vue";

export default {
  components: { MucCheckboxGroup, MucCheckbox },
  component: MucCheckboxGroup,
  title: "Forms/MucCheckboxGroup",
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

export const NotCollapsable = () => ({
  components: { MucCheckbox, MucCheckboxGroup },
  template: `
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" />
         </template>
      </MucCheckboxGroup>
  `,
});

export const Collapsable = () => ({
  components: { MucCheckbox, MucCheckboxGroup },
  template: `
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" />
         </template>
         <template #collapsableCheckboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'collapsed-' + index" />
         </template>  
      </MucCheckboxGroup>
  `,
});
