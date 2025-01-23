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
        component: `The MucCheckboxGroup component is a wrapper designed to group multiple MucCheckBox components together, allowing users to select multiple options from a set.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-checkboxes-collapse)`,
      },
    },
  },
};

export const NotCollapsable = () => ({
  components: { MucCheckbox, MucCheckboxGroup },
  template: `
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" :id="index"/>
         </template>
      </MucCheckboxGroup>
  `,
});

export const Collapsable = () => ({
  components: { MucCheckbox, MucCheckboxGroup },
  template: `
      <MucCheckboxGroup heading="Collapsable checkbox group ">
         <template #checkboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'not-collapsed-' + index" :id="'not-collapsed-' + index" />
         </template>
         <template #collapsableCheckboxes>
           <MucCheckbox v-for="index in 4" :key="index" :label="'collapsed-' + index" :id="'collapsed-' + index" />
         </template>  
      </MucCheckboxGroup>
  `,
});
