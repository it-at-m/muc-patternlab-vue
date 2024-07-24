import MucSelect from "./MucSelect.vue";

export default {
  component: MucSelect,
  title: "Forms/MucSelect",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Choose from an option from a given list - multiple can also be allowed. The design is similar to the text input with autocompletion.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-combobox)
`,
      },
    },
  },
};

export const Default = {
  args: {
    modelValue: "Option 1",
    items: ["Option 1", "Option 2", "Option 3", "Option 4"],
    label: "This is a label",
    hint: "This is a hint",
  },
};

export const MultiSelect = {
  args: {
    ...Default.args,
    label: "Select multiple options",
    multiple: true,
  },
};
