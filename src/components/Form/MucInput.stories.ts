import MucInput from "./MucInput.vue";

export default {
  component: MucInput,
  title: "Forms/MucInput",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `The muc-input component is a text-based input field. It supports various styling options like prefixes /suffixes, buttons and can also be displayed as a textarea.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=viewall-elements-forms)
`,
      },
    },
  },
};

export const Default = {
  args: {
    placeholder: "Please type here",
  },
};

export const HintAndLabel = {
  args: {
    ...Default.args,
    hint: "This is a hint",
    label: "This is a label",
  },
};

export const Password = {
  args: {
    ...Default.args,
    type: "password",
    modelValue: "password",
    hint: "The input text is 'password'",
  },
};

export const Error = {
  args: {
    ...Default.args,
    errorMsg: "Oops, an error occurred",
    hint: "An error message triggers the error state",
  },
};

export const Prefix = {
  args: {
    ...Default.args,
    prefix: "Prefix",
  },
};

export const SuffixIcon = {
  args: {
    ...Default.args,
    suffixIcon: "search",
  },
};

export const Search = {
  args: {
    ...Default.args,
    type: "search",
    datalist: ["chocolate", "coconut", "vanilla", "mint"],
  },
};

export const Color = {
  args: {
    type: "color",
  },
};

export const Date = {
  args: {
    type: "date",
  },
};

export const Datetime_Local = {
  args: {
    type: "datetime-local",
  },
};
