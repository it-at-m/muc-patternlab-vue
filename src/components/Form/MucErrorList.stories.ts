import MucErrorList from "./MucErrorList.vue";

export default {
  component: MucErrorList,
  title: "Forms/MucErrorList",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Simple display of one or more errors as a list.

[🔗 Patternlab-Docs](https://patternlab.muenchen.space/?p=elements-error-list)
`,
      },
    },
  },
};

export const Default = {
  args: {
    errors: "Only one error line",
  },
};

export const CustomTitle = {
  args: {
    title: "Oops, something went wrong!",
    errors: "Error 1",
  },
}

export const Multiple = {
  args: {
    errors: ["Error 1", "Error 2", "Error 3", "Error 4"],
  },
};
