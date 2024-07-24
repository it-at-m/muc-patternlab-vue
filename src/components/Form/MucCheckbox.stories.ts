import MucCheckbox from "./MucCheckbox.vue";

export default {
  component: MucCheckbox,
  title: "Forms/MucCheckBox",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The muc-checkbox component provides the ability to choose between two distinct values.
It is very similar to a switch and can be used in complex forms.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-checkboxes)
`,
      },
    },
  },
};

export const Default = {
  args: {
    label: "This is a checkbox - click me",
  },
};
