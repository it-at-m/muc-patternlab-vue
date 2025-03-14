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
    id: "default",
    placeholder: "Write some very long text here",
  },
};

export const Error = {
  args: {
    ...Default.args,
    id: "error",
    errorMsg: "An error occured",
  },
};

export const Required = {
  args: {
    label: "Required textarea",
    ...Default.args,
    id: "required",
    required: true,
  },
};

export const BigTextArea = {
  args: {
    ...Default.args,
    id: "big-text-area",
    rows: 7,
    label: "Big textarea",
    hint: "Write a lot of text",
  },
};
