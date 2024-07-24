import MucErrorList from "./MucErrorList.vue";

export default {
  component: MucErrorList,
  title: "Forms/MucErrorList",
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
    title: "A problem accured!",
    errors: ["Error 1", "Error 2", "Error 3", "Error 4"],
  },
};
