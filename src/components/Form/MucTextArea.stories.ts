import MucTextArea from "./MucTextArea.vue";

export default {
  component: MucTextArea,
  title: "Forms/MucTextArea",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The muc-text-area component allows bigger text based inputs then the regular input. The size is adjustable.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-textarea)
`,
      },
    },
  },
};

export const Default = {
  args: {
    placeholder: "Write some very long text here",
  },
};

export const Error = {
  args: {
    ...Default.args,
    errorMsg: "An error occured",
  },
};

export const Required = {
  args: {
    label: "Required textarea",
    ...Default.args,
    required: true,
  },
};

export const BigTextArea = {
  args: {
    ...Default.args,
    rows: 7,
    label: "Big textarea",
    hint: "Write a lot of text",
  },
};
