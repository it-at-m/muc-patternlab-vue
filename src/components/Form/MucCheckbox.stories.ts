import MucCheckbox from "./MucCheckbox.vue";

export default {
  component: MucCheckbox,
  title: "Forms/MucCheckBox",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The muc-text-area component is an input component for larger texts.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-textarea)
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
