import MucCheckbox from "./MucCheckbox.vue";

export default {
  component: MucCheckbox,
  title: "Forms/MucCheckBox",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The MucCheckBox component is a UI element that allows users to make a binary choice, such as "yes" or "no". 
        It is typically used in forms and settings where multiple options can be selected independently.
        

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-checkboxes)
`,
      },
    },
  },
};

export const Default = {
  args: {
    id: "default",
    label: "This is a checkbox - click me",
    hint: "This is a hint",
  },
};

export const WithLinkInLabel = {
  args: {
    id: "with-link",
    name: "checkbox-terms",
    required: true,
  },
  render: (args: Record<string, unknown>) => ({
    components: { MucCheckbox },
    setup() {
      return { args };
    },
    template: `
      <MucCheckbox v-bind="args">
        <template #label>
          I accept the <a href="#">terms of use</a>.
        </template>
      </MucCheckbox>
    `,
  }),
};
