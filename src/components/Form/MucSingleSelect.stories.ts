import MucSingleSelect from "./MucSingleSelect.vue";

export default {
  component: MucSingleSelect,
  title: "Forms/MucSingleSelect",
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

export const Default = {
  args: {
    modelValue: "",
    items: ["Option 1", "Option 2", "Option 3", "Option 4"],
    label: "This is a label",
    hint: "This is a hint",
  },
};
