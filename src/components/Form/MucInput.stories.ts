import MucInput from "./MucInput.vue";

export default {
  component: MucInput,
  title: "Forms/MucInput",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The MucInput component is a text-based input field.
        Various types are allowed e.g. datepicker or password.
         It supports various styling options like prefixes /suffixes, buttons and can also be displayed as a textarea.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-input-text)
`,
      },
    },
  },
};

export const Default = {
  args: {
    id: "default",
    placeholder: "Please type here",
  },
};

export const HintAndLabel = {
  args: {
    ...Default.args,
    id: "hint-and-label",
    hint: "This is a hint",
    label: "This is a label",
  },
};

export const Password = {
  args: {
    ...Default.args,
    id: "password",
    type: "password",
    modelValue: "password",
    hint: "The input text is 'password'",
  },
};

export const Error = {
  args: {
    ...Default.args,
    id: "error",
    errorMsg: "Oops, an error occurred",
    hint: "An error message triggers the error state",
  },
};

export const Prefix = {
  args: {
    ...Default.args,
    id: "prefix",
    prefix: "Prefix",
  },
};

export const SuffixIcon = {
  args: {
    ...Default.args,
    id: "suffix-icon",
    suffixIcon: "search",
  },
};

export const Search = {
  args: {
    ...Default.args,
    id: "search",
    type: "search",
    dataList: ["chocolate", "coconut", "vanilla", "mint"],
  },
};

export const Color = {
  args: {
    id: "color",
    type: "color",
  },
};

export const Date = {
  args: {
    id: "date",
    type: "date",
  },
};

export const Datetime_Local = {
  args: {
    id: "datetime",
    type: "datetime-local",
  },
};
